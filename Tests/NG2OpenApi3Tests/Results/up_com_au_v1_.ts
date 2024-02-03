import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/**
	 * Provides information about an Up bank account.
	 */
	export interface AccountResource {

		/** Required */
		attributes: AccountResourceAttributes;

		/**
		 * The unique identifier for this account.
		 * Required
		 */
		id: string;
		links?: AccountResourceLinks;

		/** Required */
		relationships: AccountResourceRelationships;

		/**
		 * The type of this resource: `accounts`
		 * Required
		 */
		type: string;
	}

	/**
	 * Provides information about an Up bank account.
	 */
	export interface AccountResourceFormProperties {

		/**
		 * The unique identifier for this account.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The type of this resource: `accounts`
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAccountResourceFormGroup() {
		return new FormGroup<AccountResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AccountResourceAttributes {

		/**
		 * The bank account type of this account.
		 * Required
		 */
		accountType: AccountTypeEnum;

		/**
		 * The available balance of the account, taking into account any amounts
		 * that are currently on hold.
		 * Required
		 */
		balance: MoneyObject;

		/**
		 * The date-time at which this account was first opened.
		 * Required
		 */
		createdAt: Date;

		/**
		 * The name associated with the account in the Up application.
		 * Required
		 */
		displayName: string;

		/**
		 * The ownership structure for this account.
		 * Required
		 */
		ownershipType: OwnershipTypeEnum;
	}
	export interface AccountResourceAttributesFormProperties {

		/**
		 * The bank account type of this account.
		 * Required
		 */
		accountType: FormControl<AccountTypeEnum | null | undefined>,

		/**
		 * The date-time at which this account was first opened.
		 * Required
		 */
		createdAt: FormControl<Date | null | undefined>,

		/**
		 * The name associated with the account in the Up application.
		 * Required
		 */
		displayName: FormControl<string | null | undefined>,

		/**
		 * The ownership structure for this account.
		 * Required
		 */
		ownershipType: FormControl<OwnershipTypeEnum | null | undefined>,
	}
	export function CreateAccountResourceAttributesFormGroup() {
		return new FormGroup<AccountResourceAttributesFormProperties>({
			accountType: new FormControl<AccountTypeEnum | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ownershipType: new FormControl<OwnershipTypeEnum | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**
	 * Provides information about a value of money.
	 */
	export interface MoneyObject {

		/**
		 * The ISO 4217 currency code.
		 * Required
		 */
		currencyCode: string;

		/**
		 * The amount of money, formatted as a string in the relevant currency.
		 * For example, for an Australian dollar value of $10.56, this field will
		 * be `"10.56"`. The currency symbol is not included in the string.
		 * Required
		 */
		value: string;

		/**
		 * The amount of money in the smallest denomination for the currency, as a
		 * 64-bit integer.  For example, for an Australian dollar value of $10.56,
		 * this field will be `1056`.
		 * Required
		 */
		valueInBaseUnits: number;
	}

	/**
	 * Provides information about a value of money.
	 */
	export interface MoneyObjectFormProperties {

		/**
		 * The ISO 4217 currency code.
		 * Required
		 */
		currencyCode: FormControl<string | null | undefined>,

		/**
		 * The amount of money, formatted as a string in the relevant currency.
		 * For example, for an Australian dollar value of $10.56, this field will
		 * be `"10.56"`. The currency symbol is not included in the string.
		 * Required
		 */
		value: FormControl<string | null | undefined>,

		/**
		 * The amount of money in the smallest denomination for the currency, as a
		 * 64-bit integer.  For example, for an Australian dollar value of $10.56,
		 * this field will be `1056`.
		 * Required
		 */
		valueInBaseUnits: FormControl<number | null | undefined>,
	}
	export function CreateMoneyObjectFormGroup() {
		return new FormGroup<MoneyObjectFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			valueInBaseUnits: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AccountResourceLinks {

		/**
		 * The canonical link to this resource within the API.
		 * Required
		 */
		self: string;
	}
	export interface AccountResourceLinksFormProperties {

		/**
		 * The canonical link to this resource within the API.
		 * Required
		 */
		self: FormControl<string | null | undefined>,
	}
	export function CreateAccountResourceLinksFormGroup() {
		return new FormGroup<AccountResourceLinksFormProperties>({
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AccountResourceRelationships {

		/** Required */
		transactions: AccountResourceRelationshipsTransactions;
	}
	export interface AccountResourceRelationshipsFormProperties {
	}
	export function CreateAccountResourceRelationshipsFormGroup() {
		return new FormGroup<AccountResourceRelationshipsFormProperties>({
		});

	}

	export interface AccountResourceRelationshipsTransactions {
		links?: AccountResourceRelationshipsTransactionsLinks;
	}
	export interface AccountResourceRelationshipsTransactionsFormProperties {
	}
	export function CreateAccountResourceRelationshipsTransactionsFormGroup() {
		return new FormGroup<AccountResourceRelationshipsTransactionsFormProperties>({
		});

	}

	export interface AccountResourceRelationshipsTransactionsLinks {

		/**
		 * The link to retrieve the related resource(s) in this relationship.
		 * Required
		 */
		related: string;
	}
	export interface AccountResourceRelationshipsTransactionsLinksFormProperties {

		/**
		 * The link to retrieve the related resource(s) in this relationship.
		 * Required
		 */
		related: FormControl<string | null | undefined>,
	}
	export function CreateAccountResourceRelationshipsTransactionsLinksFormGroup() {
		return new FormGroup<AccountResourceRelationshipsTransactionsLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**
	 * Specifies the type of bank account. Currently returned values are `SAVER`
	 * and `TRANSACTIONAL`.
	 */
	export enum AccountTypeEnum { SAVER = 'SAVER', TRANSACTIONAL = 'TRANSACTIONAL' }


	/**
	 * Provides information about an instant reimbursement in the form of
	 * cashback.
	 */
	export interface CashbackObject {

		/**
		 * The total amount of cashback paid, represented as a positive value.
		 * Required
		 */
		amount: MoneyObject;

		/**
		 * A brief description of why this cashback was paid.
		 * Required
		 */
		description: string;
	}

	/**
	 * Provides information about an instant reimbursement in the form of
	 * cashback.
	 */
	export interface CashbackObjectFormProperties {

		/**
		 * A brief description of why this cashback was paid.
		 * Required
		 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateCashbackObjectFormGroup() {
		return new FormGroup<CashbackObjectFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**
	 * Uniquely identifies a category in the API.
	 */
	export interface CategoryInputResourceIdentifier {

		/**
		 * The unique identifier of the category, as returned by the `/categories`
		 * endpoint.
		 * Required
		 */
		id: string;

		/**
		 * The type of this resource: `categories`
		 * Required
		 */
		type: string;
	}

	/**
	 * Uniquely identifies a category in the API.
	 */
	export interface CategoryInputResourceIdentifierFormProperties {

		/**
		 * The unique identifier of the category, as returned by the `/categories`
		 * endpoint.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The type of this resource: `categories`
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCategoryInputResourceIdentifierFormGroup() {
		return new FormGroup<CategoryInputResourceIdentifierFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**
	 * Provides information about a category and its ancestry.
	 */
	export interface CategoryResource {

		/** Required */
		attributes: CategoryResourceAttributes;

		/**
		 * The unique identifier for this category. This is a human-readable but
		 * URL-safe value.
		 * Required
		 */
		id: string;
		links?: CategoryResourceLinks;

		/** Required */
		relationships: CategoryResourceRelationships;

		/**
		 * The type of this resource: `categories`
		 * Required
		 */
		type: string;
	}

	/**
	 * Provides information about a category and its ancestry.
	 */
	export interface CategoryResourceFormProperties {

		/**
		 * The unique identifier for this category. This is a human-readable but
		 * URL-safe value.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The type of this resource: `categories`
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCategoryResourceFormGroup() {
		return new FormGroup<CategoryResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CategoryResourceAttributes {

		/**
		 * The name of this category as seen in the Up application.
		 * Required
		 */
		name: string;
	}
	export interface CategoryResourceAttributesFormProperties {

		/**
		 * The name of this category as seen in the Up application.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCategoryResourceAttributesFormGroup() {
		return new FormGroup<CategoryResourceAttributesFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CategoryResourceLinks {

		/**
		 * The canonical link to this resource within the API.
		 * Required
		 */
		self: string;
	}
	export interface CategoryResourceLinksFormProperties {

		/**
		 * The canonical link to this resource within the API.
		 * Required
		 */
		self: FormControl<string | null | undefined>,
	}
	export function CreateCategoryResourceLinksFormGroup() {
		return new FormGroup<CategoryResourceLinksFormProperties>({
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CategoryResourceRelationships {

		/** Required */
		children: CategoryResourceRelationshipsChildren;

		/** Required */
		parent: CategoryResourceRelationshipsParent;
	}
	export interface CategoryResourceRelationshipsFormProperties {
	}
	export function CreateCategoryResourceRelationshipsFormGroup() {
		return new FormGroup<CategoryResourceRelationshipsFormProperties>({
		});

	}

	export interface CategoryResourceRelationshipsChildren {

		/** Required */
		CategoryResourceRelationshipsChildrenData: Array<CategoryResourceRelationshipsChildrenData>;
		links?: CategoryResourceRelationshipsChildrenLinks;
	}
	export interface CategoryResourceRelationshipsChildrenFormProperties {
	}
	export function CreateCategoryResourceRelationshipsChildrenFormGroup() {
		return new FormGroup<CategoryResourceRelationshipsChildrenFormProperties>({
		});

	}

	export interface CategoryResourceRelationshipsChildrenData {

		/**
		 * The unique identifier of the resource within its type.
		 * Required
		 */
		id: string;

		/**
		 * The type of this resource: `categories`
		 * Required
		 */
		type: string;
	}
	export interface CategoryResourceRelationshipsChildrenDataFormProperties {

		/**
		 * The unique identifier of the resource within its type.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The type of this resource: `categories`
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCategoryResourceRelationshipsChildrenDataFormGroup() {
		return new FormGroup<CategoryResourceRelationshipsChildrenDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CategoryResourceRelationshipsChildrenLinks {

		/**
		 * The link to retrieve the related resource(s) in this relationship.
		 * Required
		 */
		related: string;
	}
	export interface CategoryResourceRelationshipsChildrenLinksFormProperties {

		/**
		 * The link to retrieve the related resource(s) in this relationship.
		 * Required
		 */
		related: FormControl<string | null | undefined>,
	}
	export function CreateCategoryResourceRelationshipsChildrenLinksFormGroup() {
		return new FormGroup<CategoryResourceRelationshipsChildrenLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CategoryResourceRelationshipsParent {

		/** Required */
		data: CategoryResourceRelationshipsParentData;
		links?: CategoryResourceRelationshipsParentLinks;
	}
	export interface CategoryResourceRelationshipsParentFormProperties {
	}
	export function CreateCategoryResourceRelationshipsParentFormGroup() {
		return new FormGroup<CategoryResourceRelationshipsParentFormProperties>({
		});

	}

	export interface CategoryResourceRelationshipsParentData {

		/**
		 * The unique identifier of the resource within its type.
		 * Required
		 */
		id: string;

		/**
		 * The type of this resource: `categories`
		 * Required
		 */
		type: string;
	}
	export interface CategoryResourceRelationshipsParentDataFormProperties {

		/**
		 * The unique identifier of the resource within its type.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The type of this resource: `categories`
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCategoryResourceRelationshipsParentDataFormGroup() {
		return new FormGroup<CategoryResourceRelationshipsParentDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CategoryResourceRelationshipsParentLinks {

		/**
		 * The link to retrieve the related resource(s) in this relationship.
		 * Required
		 */
		related: string;
	}
	export interface CategoryResourceRelationshipsParentLinksFormProperties {

		/**
		 * The link to retrieve the related resource(s) in this relationship.
		 * Required
		 */
		related: FormControl<string | null | undefined>,
	}
	export function CreateCategoryResourceRelationshipsParentLinksFormGroup() {
		return new FormGroup<CategoryResourceRelationshipsParentLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**
	 * Request to create a new webhook. This currently only requires a `url`
	 * attribute.
	 */
	export interface CreateWebhookRequest {

		/**
		 * The webhook resource to create.
		 * Required
		 */
		data: WebhookInputResource;
	}

	/**
	 * Request to create a new webhook. This currently only requires a `url`
	 * attribute.
	 */
	export interface CreateWebhookRequestFormProperties {
	}
	export function CreateCreateWebhookRequestFormGroup() {
		return new FormGroup<CreateWebhookRequestFormProperties>({
		});

	}


	/**
	 * Represents a webhook specified as request input.
	 */
	export interface WebhookInputResource {

		/** Required */
		attributes: WebhookInputResourceAttributes;
	}

	/**
	 * Represents a webhook specified as request input.
	 */
	export interface WebhookInputResourceFormProperties {
	}
	export function CreateWebhookInputResourceFormGroup() {
		return new FormGroup<WebhookInputResourceFormProperties>({
		});

	}

	export interface WebhookInputResourceAttributes {

		/**
		 * An optional description for this webhook, up to 64 characters in
		 * length.
		 */
		description?: string | null;

		/**
		 * The URL that this webhook should post events to. This must be a valid
		 * HTTP or HTTPS URL that does not exceed 300 characters in length.
		 * Required
		 */
		url: string;
	}
	export interface WebhookInputResourceAttributesFormProperties {

		/**
		 * An optional description for this webhook, up to 64 characters in
		 * length.
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The URL that this webhook should post events to. This must be a valid
		 * HTTP or HTTPS URL that does not exceed 300 characters in length.
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateWebhookInputResourceAttributesFormGroup() {
		return new FormGroup<WebhookInputResourceAttributesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**
	 * Successful response after creating a webhook.
	 */
	export interface CreateWebhookResponse {

		/**
		 * The webhook that was created.
		 * Required
		 */
		data: WebhookResource;
	}

	/**
	 * Successful response after creating a webhook.
	 */
	export interface CreateWebhookResponseFormProperties {
	}
	export function CreateCreateWebhookResponseFormGroup() {
		return new FormGroup<CreateWebhookResponseFormProperties>({
		});

	}


	/**
	 * Provides information about a webhook.
	 */
	export interface WebhookResource {

		/** Required */
		attributes: WebhookResourceAttributes;

		/**
		 * The unique identifier for this webhook.
		 * Required
		 */
		id: string;
		links?: WebhookResourceLinks;

		/** Required */
		relationships: WebhookResourceRelationships;

		/**
		 * The type of this resource: `webhooks`
		 * Required
		 */
		type: string;
	}

	/**
	 * Provides information about a webhook.
	 */
	export interface WebhookResourceFormProperties {

		/**
		 * The unique identifier for this webhook.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The type of this resource: `webhooks`
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateWebhookResourceFormGroup() {
		return new FormGroup<WebhookResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WebhookResourceAttributes {

		/**
		 * The date-time at which this webhook was created.
		 * Required
		 */
		createdAt: Date;

		/**
		 * An optional description that was provided at the time the webhook was
		 * created.
		 * Required
		 */
		description: string;

		/**
		 * A shared secret key used to sign all webhook events sent to the
		 * configured webhook URL. This field is returned only once, upon the
		 * initial creation of the webhook. If lost, create a new webhook and
		 * delete this webhook.
		 * The webhook URL receives a request with a
		 * `X-Up-Authenticity-Signature` header, which is the SHA-256 HMAC of
		 * the entire raw request body signed using this `secretKey`. It is
		 * advised to compute and check this signature to verify the
		 * authenticity of requests sent to the webhook URL. See
		 * [Handling webhook events](#callback_post_webhookURL) for full
		 * details.
		 */
		secretKey?: string | null;

		/**
		 * The URL that this webhook is configured to `POST` events to.
		 * Required
		 */
		url: string;
	}
	export interface WebhookResourceAttributesFormProperties {

		/**
		 * The date-time at which this webhook was created.
		 * Required
		 */
		createdAt: FormControl<Date | null | undefined>,

		/**
		 * An optional description that was provided at the time the webhook was
		 * created.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * A shared secret key used to sign all webhook events sent to the
		 * configured webhook URL. This field is returned only once, upon the
		 * initial creation of the webhook. If lost, create a new webhook and
		 * delete this webhook.
		 * The webhook URL receives a request with a
		 * `X-Up-Authenticity-Signature` header, which is the SHA-256 HMAC of
		 * the entire raw request body signed using this `secretKey`. It is
		 * advised to compute and check this signature to verify the
		 * authenticity of requests sent to the webhook URL. See
		 * [Handling webhook events](#callback_post_webhookURL) for full
		 * details.
		 */
		secretKey: FormControl<string | null | undefined>,

		/**
		 * The URL that this webhook is configured to `POST` events to.
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateWebhookResourceAttributesFormGroup() {
		return new FormGroup<WebhookResourceAttributesFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secretKey: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WebhookResourceLinks {

		/**
		 * The canonical link to this resource within the API.
		 * Required
		 */
		self: string;
	}
	export interface WebhookResourceLinksFormProperties {

		/**
		 * The canonical link to this resource within the API.
		 * Required
		 */
		self: FormControl<string | null | undefined>,
	}
	export function CreateWebhookResourceLinksFormGroup() {
		return new FormGroup<WebhookResourceLinksFormProperties>({
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WebhookResourceRelationships {

		/** Required */
		logs: WebhookResourceRelationshipsLogs;
	}
	export interface WebhookResourceRelationshipsFormProperties {
	}
	export function CreateWebhookResourceRelationshipsFormGroup() {
		return new FormGroup<WebhookResourceRelationshipsFormProperties>({
		});

	}

	export interface WebhookResourceRelationshipsLogs {
		links?: WebhookResourceRelationshipsLogsLinks;
	}
	export interface WebhookResourceRelationshipsLogsFormProperties {
	}
	export function CreateWebhookResourceRelationshipsLogsFormGroup() {
		return new FormGroup<WebhookResourceRelationshipsLogsFormProperties>({
		});

	}

	export interface WebhookResourceRelationshipsLogsLinks {

		/**
		 * The link to retrieve the related resource(s) in this relationship.
		 * Required
		 */
		related: string;
	}
	export interface WebhookResourceRelationshipsLogsLinksFormProperties {

		/**
		 * The link to retrieve the related resource(s) in this relationship.
		 * Required
		 */
		related: FormControl<string | null | undefined>,
	}
	export function CreateWebhookResourceRelationshipsLogsLinksFormGroup() {
		return new FormGroup<WebhookResourceRelationshipsLogsLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**
	 * Provides information about an error processing a request.
	 */
	export interface ErrorObject {

		/**
		 * A detailed description of this error. This should be considered unique
		 * to individual occurrences of an error and subject to change. It is
		 * useful for debugging purposes.
		 * Required
		 */
		detail: string;

		/**
		 * If applicable, location in the request that this error relates to. This
		 * may be a parameter in the query string, or a an attribute in the
		 * request body.
		 */
		source?: ErrorObjectSource;

		/**
		 * The HTTP status code associated with this error. This can also be
		 * obtained from the response headers. The status indicates the broad type
		 * of error according to HTTP semantics.
		 * Required
		 */
		status: string;

		/**
		 * A short description of this error. This should be stable across
		 * multiple occurrences of this type of error and typically expands on the
		 * reason for the status code.
		 * Required
		 */
		title: string;
	}

	/**
	 * Provides information about an error processing a request.
	 */
	export interface ErrorObjectFormProperties {

		/**
		 * A detailed description of this error. This should be considered unique
		 * to individual occurrences of an error and subject to change. It is
		 * useful for debugging purposes.
		 * Required
		 */
		detail: FormControl<string | null | undefined>,

		/**
		 * The HTTP status code associated with this error. This can also be
		 * obtained from the response headers. The status indicates the broad type
		 * of error according to HTTP semantics.
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * A short description of this error. This should be stable across
		 * multiple occurrences of this type of error and typically expands on the
		 * reason for the status code.
		 * Required
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateErrorObjectFormGroup() {
		return new FormGroup<ErrorObjectFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ErrorObjectSource {

		/**
		 * If this error relates to a query parameter, the name of the
		 * parameter.
		 */
		parameter?: string | null;

		/**
		 * If this error relates to an attribute in the request body, a
		 * rfc-6901 JSON pointer to the attribute.
		 */
		pointer?: string | null;
	}
	export interface ErrorObjectSourceFormProperties {

		/**
		 * If this error relates to a query parameter, the name of the
		 * parameter.
		 */
		parameter: FormControl<string | null | undefined>,

		/**
		 * If this error relates to an attribute in the request body, a
		 * rfc-6901 JSON pointer to the attribute.
		 */
		pointer: FormControl<string | null | undefined>,
	}
	export function CreateErrorObjectSourceFormGroup() {
		return new FormGroup<ErrorObjectSourceFormProperties>({
			parameter: new FormControl<string | null | undefined>(undefined),
			pointer: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Generic error response that returns one or more errors.
	 */
	export interface ErrorResponse {

		/**
		 * The list of errors returned in this response.
		 * Required
		 */
		errors: Array<ErrorObject>;
	}

	/**
	 * Generic error response that returns one or more errors.
	 */
	export interface ErrorResponseFormProperties {
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
		});

	}


	/**
	 * Successful response to get a single account.
	 */
	export interface GetAccountResponse {

		/**
		 * The account returned in this response.
		 * Required
		 */
		data: AccountResource;
	}

	/**
	 * Successful response to get a single account.
	 */
	export interface GetAccountResponseFormProperties {
	}
	export function CreateGetAccountResponseFormGroup() {
		return new FormGroup<GetAccountResponseFormProperties>({
		});

	}


	/**
	 * Successful response to get a single category and its ancestry.
	 */
	export interface GetCategoryResponse {

		/**
		 * The category returned in this response.
		 * Required
		 */
		data: CategoryResource;
	}

	/**
	 * Successful response to get a single category and its ancestry.
	 */
	export interface GetCategoryResponseFormProperties {
	}
	export function CreateGetCategoryResponseFormGroup() {
		return new FormGroup<GetCategoryResponseFormProperties>({
		});

	}


	/**
	 * Successful response to get a single transaction.
	 */
	export interface GetTransactionResponse {

		/**
		 * The transaction returned in this response.
		 * Required
		 */
		data: TransactionResource;
	}

	/**
	 * Successful response to get a single transaction.
	 */
	export interface GetTransactionResponseFormProperties {
	}
	export function CreateGetTransactionResponseFormGroup() {
		return new FormGroup<GetTransactionResponseFormProperties>({
		});

	}

	export interface TransactionResource {

		/** Required */
		attributes: TransactionResourceAttributes;

		/**
		 * The unique identifier for this transaction.
		 * Required
		 */
		id: string;
		links?: TransactionResourceLinks;

		/** Required */
		relationships: TransactionResourceRelationships;

		/**
		 * The type of this resource: `transactions`
		 * Required
		 */
		type: string;
	}
	export interface TransactionResourceFormProperties {

		/**
		 * The unique identifier for this transaction.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The type of this resource: `transactions`
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateTransactionResourceFormGroup() {
		return new FormGroup<TransactionResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TransactionResourceAttributes {

		/**
		 * The amount of this transaction in Australian dollars. For
		 * transactions that were once `HELD` but are now `SETTLED`, refer to
		 * the `holdInfo` field for the original `amount` the transaction was
		 * `HELD` at.
		 * Required
		 */
		amount: MoneyObject;

		/**
		 * If all or part of this transaction was instantly reimbursed in the
		 * form of cashback, details of the reimbursement.
		 * Required
		 */
		cashback: CashbackObject;

		/**
		 * The date-time at which this transaction was first encountered.
		 * Required
		 */
		createdAt: Date;

		/**
		 * A short description for this transaction. Usually the merchant name
		 * for purchases.
		 * Required
		 */
		description: string;

		/**
		 * The foreign currency amount of this transaction. This field will be
		 * `null` for domestic transactions. The amount was converted to the AUD
		 * amount reflected in the `amount` of this transaction. Refer to the
		 * `holdInfo` field for the original `foreignAmount` the transaction was
		 * `HELD` at.
		 * Required
		 */
		foreignAmount: MoneyObject;

		/**
		 * If this transaction is currently in the `HELD` status, or was ever in
		 * the `HELD` status, the `amount` and `foreignAmount` of the
		 * transaction while `HELD`.
		 * Required
		 */
		holdInfo: HoldInfoObject;

		/**
		 * Boolean flag set to true on transactions that support the use of
		 * categories.
		 * Required
		 */
		isCategorizable: boolean;

		/**
		 * Attached message for this transaction, such as a payment message, or a
		 * transfer note.
		 * Required
		 */
		message: string;

		/**
		 * The original, unprocessed text of the transaction. This is often not
		 * a perfect indicator of the actual merchant, but it is useful for
		 * reconciliation purposes in some cases.
		 * Required
		 */
		rawText: string;

		/**
		 * Details of how this transaction was rounded-up. If no Round Up was
		 * applied this field will be `null`.
		 * Required
		 */
		roundUp: RoundUpObject;

		/**
		 * The date-time at which this transaction settled. This field will be
		 * `null` for transactions that are currently in the `HELD` status.
		 * Required
		 */
		settledAt: Date;

		/**
		 * The current processing status of this transaction, according to
		 * whether or not this transaction has settled or is still held.
		 * Required
		 */
		status: TransactionStatusEnum;
	}
	export interface TransactionResourceAttributesFormProperties {

		/**
		 * The date-time at which this transaction was first encountered.
		 * Required
		 */
		createdAt: FormControl<Date | null | undefined>,

		/**
		 * A short description for this transaction. Usually the merchant name
		 * for purchases.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Boolean flag set to true on transactions that support the use of
		 * categories.
		 * Required
		 */
		isCategorizable: FormControl<boolean | null | undefined>,

		/**
		 * Attached message for this transaction, such as a payment message, or a
		 * transfer note.
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/**
		 * The original, unprocessed text of the transaction. This is often not
		 * a perfect indicator of the actual merchant, but it is useful for
		 * reconciliation purposes in some cases.
		 * Required
		 */
		rawText: FormControl<string | null | undefined>,

		/**
		 * The date-time at which this transaction settled. This field will be
		 * `null` for transactions that are currently in the `HELD` status.
		 * Required
		 */
		settledAt: FormControl<Date | null | undefined>,

		/**
		 * The current processing status of this transaction, according to
		 * whether or not this transaction has settled or is still held.
		 * Required
		 */
		status: FormControl<TransactionStatusEnum | null | undefined>,
	}
	export function CreateTransactionResourceAttributesFormGroup() {
		return new FormGroup<TransactionResourceAttributesFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isCategorizable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rawText: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			settledAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<TransactionStatusEnum | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**
	 * Provides information about the amount at which a transaction was in the
	 * `HELD` status.
	 */
	export interface HoldInfoObject {

		/**
		 * The amount of this transaction while in the `HELD` status, in
		 * Australian dollars.
		 * Required
		 */
		amount: MoneyObject;

		/**
		 * The foreign currency amount of this transaction while in the `HELD`
		 * status. This field will be `null` for domestic transactions. The amount
		 * was converted to the AUD amount reflected in the `amount` field.
		 * Required
		 */
		foreignAmount: MoneyObject;
	}

	/**
	 * Provides information about the amount at which a transaction was in the
	 * `HELD` status.
	 */
	export interface HoldInfoObjectFormProperties {
	}
	export function CreateHoldInfoObjectFormGroup() {
		return new FormGroup<HoldInfoObjectFormProperties>({
		});

	}


	/**
	 * Provides information about how a Round Up was applied, such as whether or
	 * not a boost was included in the Round Up.
	 */
	export interface RoundUpObject {

		/**
		 * The total amount of this Round Up, including any boosts, represented as
		 * a negative value.
		 * Required
		 */
		amount: MoneyObject;

		/**
		 * The portion of the Round Up `amount` owing to boosted Round Ups,
		 * represented as a negative value. If no boost was added to the Round Up
		 * this field will be `null`.
		 * Required
		 */
		boostPortion: MoneyObject;
	}

	/**
	 * Provides information about how a Round Up was applied, such as whether or
	 * not a boost was included in the Round Up.
	 */
	export interface RoundUpObjectFormProperties {
	}
	export function CreateRoundUpObjectFormGroup() {
		return new FormGroup<RoundUpObjectFormProperties>({
		});

	}

	export interface TransactionResourceLinks {

		/**
		 * The canonical link to this resource within the API.
		 * Required
		 */
		self: string;
	}
	export interface TransactionResourceLinksFormProperties {

		/**
		 * The canonical link to this resource within the API.
		 * Required
		 */
		self: FormControl<string | null | undefined>,
	}
	export function CreateTransactionResourceLinksFormGroup() {
		return new FormGroup<TransactionResourceLinksFormProperties>({
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TransactionResourceRelationships {

		/** Required */
		account: TransactionResourceRelationshipsAccount;

		/** Required */
		category: TransactionResourceRelationshipsCategory;

		/** Required */
		parentCategory: TransactionResourceRelationshipsParentCategory;

		/** Required */
		tags: TransactionResourceRelationshipsTags;

		/**
		 * If this transaction is a transfer between accounts, this relationship
		 * will contain the account the transaction went to/came from. The
		 * `amount` field can be used to determine the direction of the transfer.
		 * Required
		 */
		transferAccount: TransactionResourceRelationshipsTransferAccount;
	}
	export interface TransactionResourceRelationshipsFormProperties {
	}
	export function CreateTransactionResourceRelationshipsFormGroup() {
		return new FormGroup<TransactionResourceRelationshipsFormProperties>({
		});

	}

	export interface TransactionResourceRelationshipsAccount {

		/** Required */
		data: TransactionResourceRelationshipsAccountData;
		links?: TransactionResourceRelationshipsAccountLinks;
	}
	export interface TransactionResourceRelationshipsAccountFormProperties {
	}
	export function CreateTransactionResourceRelationshipsAccountFormGroup() {
		return new FormGroup<TransactionResourceRelationshipsAccountFormProperties>({
		});

	}

	export interface TransactionResourceRelationshipsAccountData {

		/**
		 * The unique identifier of the resource within its type.
		 * Required
		 */
		id: string;

		/**
		 * The type of this resource: `accounts`
		 * Required
		 */
		type: string;
	}
	export interface TransactionResourceRelationshipsAccountDataFormProperties {

		/**
		 * The unique identifier of the resource within its type.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The type of this resource: `accounts`
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateTransactionResourceRelationshipsAccountDataFormGroup() {
		return new FormGroup<TransactionResourceRelationshipsAccountDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TransactionResourceRelationshipsAccountLinks {

		/**
		 * The link to retrieve the related resource(s) in this relationship.
		 * Required
		 */
		related: string;
	}
	export interface TransactionResourceRelationshipsAccountLinksFormProperties {

		/**
		 * The link to retrieve the related resource(s) in this relationship.
		 * Required
		 */
		related: FormControl<string | null | undefined>,
	}
	export function CreateTransactionResourceRelationshipsAccountLinksFormGroup() {
		return new FormGroup<TransactionResourceRelationshipsAccountLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TransactionResourceRelationshipsCategory {

		/** Required */
		data: TransactionResourceRelationshipsCategoryData;
		links?: TransactionResourceRelationshipsCategoryLinks;
	}
	export interface TransactionResourceRelationshipsCategoryFormProperties {
	}
	export function CreateTransactionResourceRelationshipsCategoryFormGroup() {
		return new FormGroup<TransactionResourceRelationshipsCategoryFormProperties>({
		});

	}

	export interface TransactionResourceRelationshipsCategoryData {

		/**
		 * The unique identifier of the resource within its type.
		 * Required
		 */
		id: string;

		/**
		 * The type of this resource: `categories`
		 * Required
		 */
		type: string;
	}
	export interface TransactionResourceRelationshipsCategoryDataFormProperties {

		/**
		 * The unique identifier of the resource within its type.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The type of this resource: `categories`
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateTransactionResourceRelationshipsCategoryDataFormGroup() {
		return new FormGroup<TransactionResourceRelationshipsCategoryDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TransactionResourceRelationshipsCategoryLinks {

		/**
		 * The link to retrieve the related resource(s) in this relationship.
		 */
		related?: string | null;

		/**
		 * The link to retrieve or modify linkage between this resources and the
		 * related resource(s) in this relationship.
		 * Required
		 */
		self: string;
	}
	export interface TransactionResourceRelationshipsCategoryLinksFormProperties {

		/**
		 * The link to retrieve the related resource(s) in this relationship.
		 */
		related: FormControl<string | null | undefined>,

		/**
		 * The link to retrieve or modify linkage between this resources and the
		 * related resource(s) in this relationship.
		 * Required
		 */
		self: FormControl<string | null | undefined>,
	}
	export function CreateTransactionResourceRelationshipsCategoryLinksFormGroup() {
		return new FormGroup<TransactionResourceRelationshipsCategoryLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TransactionResourceRelationshipsParentCategory {

		/** Required */
		data: TransactionResourceRelationshipsParentCategoryData;
		links?: TransactionResourceRelationshipsParentCategoryLinks;
	}
	export interface TransactionResourceRelationshipsParentCategoryFormProperties {
	}
	export function CreateTransactionResourceRelationshipsParentCategoryFormGroup() {
		return new FormGroup<TransactionResourceRelationshipsParentCategoryFormProperties>({
		});

	}

	export interface TransactionResourceRelationshipsParentCategoryData {

		/**
		 * The unique identifier of the resource within its type.
		 * Required
		 */
		id: string;

		/**
		 * The type of this resource: `categories`
		 * Required
		 */
		type: string;
	}
	export interface TransactionResourceRelationshipsParentCategoryDataFormProperties {

		/**
		 * The unique identifier of the resource within its type.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The type of this resource: `categories`
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateTransactionResourceRelationshipsParentCategoryDataFormGroup() {
		return new FormGroup<TransactionResourceRelationshipsParentCategoryDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TransactionResourceRelationshipsParentCategoryLinks {

		/**
		 * The link to retrieve the related resource(s) in this relationship.
		 * Required
		 */
		related: string;
	}
	export interface TransactionResourceRelationshipsParentCategoryLinksFormProperties {

		/**
		 * The link to retrieve the related resource(s) in this relationship.
		 * Required
		 */
		related: FormControl<string | null | undefined>,
	}
	export function CreateTransactionResourceRelationshipsParentCategoryLinksFormGroup() {
		return new FormGroup<TransactionResourceRelationshipsParentCategoryLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TransactionResourceRelationshipsTags {

		/** Required */
		TransactionResourceRelationshipsTagsData: Array<TransactionResourceRelationshipsTagsData>;
		links?: TransactionResourceRelationshipsTagsLinks;
	}
	export interface TransactionResourceRelationshipsTagsFormProperties {
	}
	export function CreateTransactionResourceRelationshipsTagsFormGroup() {
		return new FormGroup<TransactionResourceRelationshipsTagsFormProperties>({
		});

	}

	export interface TransactionResourceRelationshipsTagsData {

		/**
		 * The label of the tag, which also acts as the tag’s unique identifier.
		 * Required
		 */
		id: string;

		/**
		 * The type of this resource: `tags`
		 * Required
		 */
		type: string;
	}
	export interface TransactionResourceRelationshipsTagsDataFormProperties {

		/**
		 * The label of the tag, which also acts as the tag’s unique identifier.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The type of this resource: `tags`
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateTransactionResourceRelationshipsTagsDataFormGroup() {
		return new FormGroup<TransactionResourceRelationshipsTagsDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TransactionResourceRelationshipsTagsLinks {

		/**
		 * The link to retrieve or modify linkage between this resources and the
		 * related resource(s) in this relationship.
		 * Required
		 */
		self: string;
	}
	export interface TransactionResourceRelationshipsTagsLinksFormProperties {

		/**
		 * The link to retrieve or modify linkage between this resources and the
		 * related resource(s) in this relationship.
		 * Required
		 */
		self: FormControl<string | null | undefined>,
	}
	export function CreateTransactionResourceRelationshipsTagsLinksFormGroup() {
		return new FormGroup<TransactionResourceRelationshipsTagsLinksFormProperties>({
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TransactionResourceRelationshipsTransferAccount {

		/** Required */
		data: TransactionResourceRelationshipsTransferAccountData;
		links?: TransactionResourceRelationshipsTransferAccountLinks;
	}
	export interface TransactionResourceRelationshipsTransferAccountFormProperties {
	}
	export function CreateTransactionResourceRelationshipsTransferAccountFormGroup() {
		return new FormGroup<TransactionResourceRelationshipsTransferAccountFormProperties>({
		});

	}

	export interface TransactionResourceRelationshipsTransferAccountData {

		/**
		 * The unique identifier of the resource within its type.
		 * Required
		 */
		id: string;

		/**
		 * The type of this resource: `accounts`
		 * Required
		 */
		type: string;
	}
	export interface TransactionResourceRelationshipsTransferAccountDataFormProperties {

		/**
		 * The unique identifier of the resource within its type.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The type of this resource: `accounts`
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateTransactionResourceRelationshipsTransferAccountDataFormGroup() {
		return new FormGroup<TransactionResourceRelationshipsTransferAccountDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TransactionResourceRelationshipsTransferAccountLinks {

		/**
		 * The link to retrieve the related resource(s) in this relationship.
		 * Required
		 */
		related: string;
	}
	export interface TransactionResourceRelationshipsTransferAccountLinksFormProperties {

		/**
		 * The link to retrieve the related resource(s) in this relationship.
		 * Required
		 */
		related: FormControl<string | null | undefined>,
	}
	export function CreateTransactionResourceRelationshipsTransferAccountLinksFormGroup() {
		return new FormGroup<TransactionResourceRelationshipsTransferAccountLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**
	 * Successful response to get a single webhook.
	 */
	export interface GetWebhookResponse {

		/**
		 * The webhook returned in this response.
		 * Required
		 */
		data: WebhookResource;
	}

	/**
	 * Successful response to get a single webhook.
	 */
	export interface GetWebhookResponseFormProperties {
	}
	export function CreateGetWebhookResponseFormGroup() {
		return new FormGroup<GetWebhookResponseFormProperties>({
		});

	}


	/**
	 * Successful response to get all accounts. This returns a paginated list of
	 * accounts, which can be scrolled by following the `prev` and `next` links
	 * if present.
	 */
	export interface ListAccountsResponse {

		/**
		 * The list of accounts returned in this response.
		 * Required
		 */
		data: Array<AccountResource>;

		/** Required */
		links: ListAccountsResponseLinks;
	}

	/**
	 * Successful response to get all accounts. This returns a paginated list of
	 * accounts, which can be scrolled by following the `prev` and `next` links
	 * if present.
	 */
	export interface ListAccountsResponseFormProperties {
	}
	export function CreateListAccountsResponseFormGroup() {
		return new FormGroup<ListAccountsResponseFormProperties>({
		});

	}

	export interface ListAccountsResponseLinks {

		/**
		 * The link to the next page in the results. If this value is `null`
		 * there is no next page.
		 * Required
		 */
		next: string;

		/**
		 * The link to the previous page in the results. If this value is `null`
		 * there is no previous page.
		 * Required
		 */
		prev: string;
	}
	export interface ListAccountsResponseLinksFormProperties {

		/**
		 * The link to the next page in the results. If this value is `null`
		 * there is no next page.
		 * Required
		 */
		next: FormControl<string | null | undefined>,

		/**
		 * The link to the previous page in the results. If this value is `null`
		 * there is no previous page.
		 * Required
		 */
		prev: FormControl<string | null | undefined>,
	}
	export function CreateListAccountsResponseLinksFormGroup() {
		return new FormGroup<ListAccountsResponseLinksFormProperties>({
			next: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			prev: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**
	 * Successful response to get all categories and their ancestry. The
	 * returned list is not paginated.
	 */
	export interface ListCategoriesResponse {

		/**
		 * The list of categories returned in this response.
		 * Required
		 */
		data: Array<CategoryResource>;
	}

	/**
	 * Successful response to get all categories and their ancestry. The
	 * returned list is not paginated.
	 */
	export interface ListCategoriesResponseFormProperties {
	}
	export function CreateListCategoriesResponseFormGroup() {
		return new FormGroup<ListCategoriesResponseFormProperties>({
		});

	}


	/**
	 * Successful response to get all tags. This returns a paginated list of
	 * tags, which can be scrolled by following the `prev` and `next` links if
	 * present.
	 */
	export interface ListTagsResponse {

		/**
		 * The list of tags returned in this response.
		 * Required
		 */
		data: Array<TagResource>;

		/** Required */
		links: ListTagsResponseLinks;
	}

	/**
	 * Successful response to get all tags. This returns a paginated list of
	 * tags, which can be scrolled by following the `prev` and `next` links if
	 * present.
	 */
	export interface ListTagsResponseFormProperties {
	}
	export function CreateListTagsResponseFormGroup() {
		return new FormGroup<ListTagsResponseFormProperties>({
		});

	}


	/**
	 * Provides information about a tag.
	 */
	export interface TagResource {

		/**
		 * The label of the tag, which also acts as the tag’s unique identifier.
		 * Required
		 */
		id: string;

		/** Required */
		relationships: TagResourceRelationships;

		/**
		 * The type of this resource: `tags`
		 * Required
		 */
		type: string;
	}

	/**
	 * Provides information about a tag.
	 */
	export interface TagResourceFormProperties {

		/**
		 * The label of the tag, which also acts as the tag’s unique identifier.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The type of this resource: `tags`
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceFormGroup() {
		return new FormGroup<TagResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourceRelationships {

		/** Required */
		transactions: TagResourceRelationshipsTransactions;
	}
	export interface TagResourceRelationshipsFormProperties {
	}
	export function CreateTagResourceRelationshipsFormGroup() {
		return new FormGroup<TagResourceRelationshipsFormProperties>({
		});

	}

	export interface TagResourceRelationshipsTransactions {
		links?: TagResourceRelationshipsTransactionsLinks;
	}
	export interface TagResourceRelationshipsTransactionsFormProperties {
	}
	export function CreateTagResourceRelationshipsTransactionsFormGroup() {
		return new FormGroup<TagResourceRelationshipsTransactionsFormProperties>({
		});

	}

	export interface TagResourceRelationshipsTransactionsLinks {

		/**
		 * The link to retrieve the related resource(s) in this relationship.
		 * Required
		 */
		related: string;
	}
	export interface TagResourceRelationshipsTransactionsLinksFormProperties {

		/**
		 * The link to retrieve the related resource(s) in this relationship.
		 * Required
		 */
		related: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRelationshipsTransactionsLinksFormGroup() {
		return new FormGroup<TagResourceRelationshipsTransactionsLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTagsResponseLinks {

		/**
		 * The link to the next page in the results. If this value is `null`
		 * there is no next page.
		 * Required
		 */
		next: string;

		/**
		 * The link to the previous page in the results. If this value is `null`
		 * there is no previous page.
		 * Required
		 */
		prev: string;
	}
	export interface ListTagsResponseLinksFormProperties {

		/**
		 * The link to the next page in the results. If this value is `null`
		 * there is no next page.
		 * Required
		 */
		next: FormControl<string | null | undefined>,

		/**
		 * The link to the previous page in the results. If this value is `null`
		 * there is no previous page.
		 * Required
		 */
		prev: FormControl<string | null | undefined>,
	}
	export function CreateListTagsResponseLinksFormGroup() {
		return new FormGroup<ListTagsResponseLinksFormProperties>({
			next: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			prev: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**
	 * Successful response to get all transactions. This returns a paginated
	 * list of transactions, which can be scrolled by following the `prev` and
	 * `next` links if present.
	 */
	export interface ListTransactionsResponse {

		/**
		 * The list of transactions returned in this response.
		 * Required
		 */
		data: Array<TransactionResource>;

		/** Required */
		links: ListTransactionsResponseLinks;
	}

	/**
	 * Successful response to get all transactions. This returns a paginated
	 * list of transactions, which can be scrolled by following the `prev` and
	 * `next` links if present.
	 */
	export interface ListTransactionsResponseFormProperties {
	}
	export function CreateListTransactionsResponseFormGroup() {
		return new FormGroup<ListTransactionsResponseFormProperties>({
		});

	}

	export interface ListTransactionsResponseLinks {

		/**
		 * The link to the next page in the results. If this value is `null`
		 * there is no next page.
		 * Required
		 */
		next: string;

		/**
		 * The link to the previous page in the results. If this value is `null`
		 * there is no previous page.
		 * Required
		 */
		prev: string;
	}
	export interface ListTransactionsResponseLinksFormProperties {

		/**
		 * The link to the next page in the results. If this value is `null`
		 * there is no next page.
		 * Required
		 */
		next: FormControl<string | null | undefined>,

		/**
		 * The link to the previous page in the results. If this value is `null`
		 * there is no previous page.
		 * Required
		 */
		prev: FormControl<string | null | undefined>,
	}
	export function CreateListTransactionsResponseLinksFormGroup() {
		return new FormGroup<ListTransactionsResponseLinksFormProperties>({
			next: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			prev: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**
	 * Successful response to get all delivery logs for a webhook. This returns
	 * a paginated list of delivery logs, which can be scrolled by following the
	 * `next` and `prev` links if present.
	 */
	export interface ListWebhookDeliveryLogsResponse {

		/**
		 * The list of delivery logs returned in this response.
		 * Required
		 */
		data: Array<WebhookDeliveryLogResource>;

		/** Required */
		links: ListWebhookDeliveryLogsResponseLinks;
	}

	/**
	 * Successful response to get all delivery logs for a webhook. This returns
	 * a paginated list of delivery logs, which can be scrolled by following the
	 * `next` and `prev` links if present.
	 */
	export interface ListWebhookDeliveryLogsResponseFormProperties {
	}
	export function CreateListWebhookDeliveryLogsResponseFormGroup() {
		return new FormGroup<ListWebhookDeliveryLogsResponseFormProperties>({
		});

	}


	/**
	 * Provides historical webhook event delivery information for analysis and
	 * debugging purposes.
	 */
	export interface WebhookDeliveryLogResource {

		/** Required */
		attributes: WebhookDeliveryLogResourceAttributes;

		/**
		 * The unique identifier for this log entry.
		 * Required
		 */
		id: string;

		/** Required */
		relationships: WebhookDeliveryLogResourceRelationships;

		/**
		 * The type of this resource: `webhook-delivery-logs`
		 * Required
		 */
		type: string;
	}

	/**
	 * Provides historical webhook event delivery information for analysis and
	 * debugging purposes.
	 */
	export interface WebhookDeliveryLogResourceFormProperties {

		/**
		 * The unique identifier for this log entry.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The type of this resource: `webhook-delivery-logs`
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateWebhookDeliveryLogResourceFormGroup() {
		return new FormGroup<WebhookDeliveryLogResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WebhookDeliveryLogResourceAttributes {

		/**
		 * The date-time at which this log entry was created.
		 * Required
		 */
		createdAt: Date;

		/**
		 * The success or failure status of this delivery attempt.
		 * Required
		 */
		deliveryStatus: WebhookDeliveryStatusEnum;

		/**
		 * Information about the request that was sent to the webhook URL.
		 * Required
		 */
		request: WebhookDeliveryLogResourceAttributesRequest;

		/**
		 * Information about the response that was received from the webhook URL.
		 * Required
		 */
		response: WebhookDeliveryLogResourceAttributesResponse;
	}
	export interface WebhookDeliveryLogResourceAttributesFormProperties {

		/**
		 * The date-time at which this log entry was created.
		 * Required
		 */
		createdAt: FormControl<Date | null | undefined>,

		/**
		 * The success or failure status of this delivery attempt.
		 * Required
		 */
		deliveryStatus: FormControl<WebhookDeliveryStatusEnum | null | undefined>,
	}
	export function CreateWebhookDeliveryLogResourceAttributesFormGroup() {
		return new FormGroup<WebhookDeliveryLogResourceAttributesFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			deliveryStatus: new FormControl<WebhookDeliveryStatusEnum | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WebhookDeliveryLogResourceAttributesRequest {

		/**
		 * The payload that was sent in the request body.
		 * Required
		 */
		body: string;
	}
	export interface WebhookDeliveryLogResourceAttributesRequestFormProperties {

		/**
		 * The payload that was sent in the request body.
		 * Required
		 */
		body: FormControl<string | null | undefined>,
	}
	export function CreateWebhookDeliveryLogResourceAttributesRequestFormGroup() {
		return new FormGroup<WebhookDeliveryLogResourceAttributesRequestFormProperties>({
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WebhookDeliveryLogResourceAttributesResponse {

		/**
		 * The payload that was received in the response body.
		 * Required
		 */
		body: string;

		/**
		 * The HTTP status code received in the response.
		 * Required
		 */
		statusCode: number;
	}
	export interface WebhookDeliveryLogResourceAttributesResponseFormProperties {

		/**
		 * The payload that was received in the response body.
		 * Required
		 */
		body: FormControl<string | null | undefined>,

		/**
		 * The HTTP status code received in the response.
		 * Required
		 */
		statusCode: FormControl<number | null | undefined>,
	}
	export function CreateWebhookDeliveryLogResourceAttributesResponseFormGroup() {
		return new FormGroup<WebhookDeliveryLogResourceAttributesResponseFormProperties>({
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			statusCode: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WebhookDeliveryLogResourceRelationships {

		/** Required */
		webhookEvent: WebhookDeliveryLogResourceRelationshipsWebhookEvent;
	}
	export interface WebhookDeliveryLogResourceRelationshipsFormProperties {
	}
	export function CreateWebhookDeliveryLogResourceRelationshipsFormGroup() {
		return new FormGroup<WebhookDeliveryLogResourceRelationshipsFormProperties>({
		});

	}

	export interface WebhookDeliveryLogResourceRelationshipsWebhookEvent {

		/** Required */
		data: WebhookDeliveryLogResourceRelationshipsWebhookEventData;
	}
	export interface WebhookDeliveryLogResourceRelationshipsWebhookEventFormProperties {
	}
	export function CreateWebhookDeliveryLogResourceRelationshipsWebhookEventFormGroup() {
		return new FormGroup<WebhookDeliveryLogResourceRelationshipsWebhookEventFormProperties>({
		});

	}

	export interface WebhookDeliveryLogResourceRelationshipsWebhookEventData {

		/**
		 * The unique identifier of the resource within its type.
		 * Required
		 */
		id: string;

		/**
		 * The type of this resource: `webhook-events`
		 * Required
		 */
		type: string;
	}
	export interface WebhookDeliveryLogResourceRelationshipsWebhookEventDataFormProperties {

		/**
		 * The unique identifier of the resource within its type.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The type of this resource: `webhook-events`
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateWebhookDeliveryLogResourceRelationshipsWebhookEventDataFormGroup() {
		return new FormGroup<WebhookDeliveryLogResourceRelationshipsWebhookEventDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListWebhookDeliveryLogsResponseLinks {

		/**
		 * The link to the next page in the results. If this value is `null`
		 * there is no next page.
		 * Required
		 */
		next: string;

		/**
		 * The link to the previous page in the results. If this value is `null`
		 * there is no previous page.
		 * Required
		 */
		prev: string;
	}
	export interface ListWebhookDeliveryLogsResponseLinksFormProperties {

		/**
		 * The link to the next page in the results. If this value is `null`
		 * there is no next page.
		 * Required
		 */
		next: FormControl<string | null | undefined>,

		/**
		 * The link to the previous page in the results. If this value is `null`
		 * there is no previous page.
		 * Required
		 */
		prev: FormControl<string | null | undefined>,
	}
	export function CreateListWebhookDeliveryLogsResponseLinksFormGroup() {
		return new FormGroup<ListWebhookDeliveryLogsResponseLinksFormProperties>({
			next: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			prev: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**
	 * Successful response to get all webhooks. This returns a paginated list of
	 * webhooks, which can be scrolled by following the `prev` and `next` links
	 * if present.
	 */
	export interface ListWebhooksResponse {

		/**
		 * The list of webhooks returned in this response.
		 * Required
		 */
		data: Array<WebhookResource>;

		/** Required */
		links: ListWebhooksResponseLinks;
	}

	/**
	 * Successful response to get all webhooks. This returns a paginated list of
	 * webhooks, which can be scrolled by following the `prev` and `next` links
	 * if present.
	 */
	export interface ListWebhooksResponseFormProperties {
	}
	export function CreateListWebhooksResponseFormGroup() {
		return new FormGroup<ListWebhooksResponseFormProperties>({
		});

	}

	export interface ListWebhooksResponseLinks {

		/**
		 * The link to the next page in the results. If this value is `null`
		 * there is no next page.
		 * Required
		 */
		next: string;

		/**
		 * The link to the previous page in the results. If this value is `null`
		 * there is no previous page.
		 * Required
		 */
		prev: string;
	}
	export interface ListWebhooksResponseLinksFormProperties {

		/**
		 * The link to the next page in the results. If this value is `null`
		 * there is no next page.
		 * Required
		 */
		next: FormControl<string | null | undefined>,

		/**
		 * The link to the previous page in the results. If this value is `null`
		 * there is no previous page.
		 * Required
		 */
		prev: FormControl<string | null | undefined>,
	}
	export function CreateListWebhooksResponseLinksFormGroup() {
		return new FormGroup<ListWebhooksResponseLinksFormProperties>({
			next: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			prev: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**
	 * Specifies the structure under which a bank account is owned. Currently
	 * returned values are `INDIVIDUAL` and `JOINT`.
	 */
	export enum OwnershipTypeEnum { INDIVIDUAL = 'INDIVIDUAL', JOINT = 'JOINT' }


	/**
	 * Basic ping response to verify authentication.
	 */
	export interface PingResponse {

		/** Required */
		meta: PingResponseMeta;
	}

	/**
	 * Basic ping response to verify authentication.
	 */
	export interface PingResponseFormProperties {
	}
	export function CreatePingResponseFormGroup() {
		return new FormGroup<PingResponseFormProperties>({
		});

	}

	export interface PingResponseMeta {

		/**
		 * The unique identifier of the authenticated customer.
		 * Required
		 */
		id: string;

		/**
		 * A cute emoji that represents the response status.
		 * Required
		 */
		statusEmoji: string;
	}
	export interface PingResponseMetaFormProperties {

		/**
		 * The unique identifier of the authenticated customer.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * A cute emoji that represents the response status.
		 * Required
		 */
		statusEmoji: FormControl<string | null | undefined>,
	}
	export function CreatePingResponseMetaFormGroup() {
		return new FormGroup<PingResponseMetaFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			statusEmoji: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**
	 * Uniquely identifies a single tag in the API.
	 */
	export interface TagInputResourceIdentifier {

		/**
		 * The label of the tag, which also acts as the tag’s unique identifier.
		 * Required
		 */
		id: string;

		/**
		 * The type of this resource: `tags`
		 * Required
		 */
		type: string;
	}

	/**
	 * Uniquely identifies a single tag in the API.
	 */
	export interface TagInputResourceIdentifierFormProperties {

		/**
		 * The label of the tag, which also acts as the tag’s unique identifier.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The type of this resource: `tags`
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateTagInputResourceIdentifierFormGroup() {
		return new FormGroup<TagInputResourceIdentifierFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**
	 * Specifies which stage of processing a transaction is currently at.
	 * Currently returned values are `HELD` and `SETTLED`. When a transaction is
	 * held, its account’s `availableBalance` is affected. When a transaction is
	 * settled, its account’s `currentBalance` is affected.
	 */
	export enum TransactionStatusEnum { HELD = 'HELD', SETTLED = 'SETTLED' }


	/**
	 * Request to update the category associated with a transaction.
	 */
	export interface UpdateTransactionCategoryRequest {

		/**
		 * The category to set on the transaction. Set this entire key to `null`
		 * de-categorize a transaction.
		 * Required
		 */
		data: CategoryInputResourceIdentifier;
	}

	/**
	 * Request to update the category associated with a transaction.
	 */
	export interface UpdateTransactionCategoryRequestFormProperties {
	}
	export function CreateUpdateTransactionCategoryRequestFormGroup() {
		return new FormGroup<UpdateTransactionCategoryRequestFormProperties>({
		});

	}


	/**
	 * Request to add or remove tags associated with a transaction.
	 */
	export interface UpdateTransactionTagsRequest {

		/**
		 * The tags to add to or remove from the transaction.
		 * Required
		 */
		data: Array<TagInputResourceIdentifier>;
	}

	/**
	 * Request to add or remove tags associated with a transaction.
	 */
	export interface UpdateTransactionTagsRequestFormProperties {
	}
	export function CreateUpdateTransactionTagsRequestFormGroup() {
		return new FormGroup<UpdateTransactionTagsRequestFormProperties>({
		});

	}


	/**
	 * Specifies the nature of the success or failure of a webhook delivery
	 * attempt to the subscribed webhook URL. The currently returned values are
	 * described below:
	 * - **`DELIVERED`**: The event was delivered to the webhook URL
	 *   successfully and a `200` response was received.
	 * - **`UNDELIVERABLE`**: The webhook URL was not reachable, or timed out.
	 * - **`BAD_RESPONSE_CODE`**: The event was delivered to the webhook URL
	 *   but a non-`200` response was received.
	 */
	export enum WebhookDeliveryStatusEnum { DELIVERED = 'DELIVERED', UNDELIVERABLE = 'UNDELIVERABLE', BAD_RESPONSE_CODE = 'BAD_RESPONSE_CODE' }


	/**
	 * Asynchronous callback request used for webhook event delivery.
	 */
	export interface WebhookEventCallback {

		/**
		 * The webhook event data sent to the subscribed webhook.
		 * Required
		 */
		data: WebhookEventResource;
	}

	/**
	 * Asynchronous callback request used for webhook event delivery.
	 */
	export interface WebhookEventCallbackFormProperties {
	}
	export function CreateWebhookEventCallbackFormGroup() {
		return new FormGroup<WebhookEventCallbackFormProperties>({
		});

	}


	/**
	 * Provides the event data used in asynchronous webhook event callbacks to
	 * subscribed endpoints. Webhooks events have defined `eventType`s and may
	 * optionally relate to other resources within the Up API.
	 */
	export interface WebhookEventResource {

		/** Required */
		attributes: WebhookEventResourceAttributes;

		/**
		 * The unique identifier for this event. This will remain constant across
		 * delivery retries.
		 * Required
		 */
		id: string;

		/** Required */
		relationships: WebhookEventResourceRelationships;

		/**
		 * The type of this resource: `webhook-events`
		 * Required
		 */
		type: string;
	}

	/**
	 * Provides the event data used in asynchronous webhook event callbacks to
	 * subscribed endpoints. Webhooks events have defined `eventType`s and may
	 * optionally relate to other resources within the Up API.
	 */
	export interface WebhookEventResourceFormProperties {

		/**
		 * The unique identifier for this event. This will remain constant across
		 * delivery retries.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The type of this resource: `webhook-events`
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateWebhookEventResourceFormGroup() {
		return new FormGroup<WebhookEventResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WebhookEventResourceAttributes {

		/**
		 * The date-time at which this event was generated.
		 * Required
		 */
		createdAt: Date;

		/**
		 * The type of this event. This can be used to determine what action to
		 * take in response to the event.
		 * Required
		 */
		eventType: WebhookEventTypeEnum;
	}
	export interface WebhookEventResourceAttributesFormProperties {

		/**
		 * The date-time at which this event was generated.
		 * Required
		 */
		createdAt: FormControl<Date | null | undefined>,

		/**
		 * The type of this event. This can be used to determine what action to
		 * take in response to the event.
		 * Required
		 */
		eventType: FormControl<WebhookEventTypeEnum | null | undefined>,
	}
	export function CreateWebhookEventResourceAttributesFormGroup() {
		return new FormGroup<WebhookEventResourceAttributesFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			eventType: new FormControl<WebhookEventTypeEnum | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WebhookEventResourceRelationships {
		transaction?: WebhookEventResourceRelationshipsTransaction;

		/** Required */
		webhook: WebhookEventResourceRelationshipsWebhook;
	}
	export interface WebhookEventResourceRelationshipsFormProperties {
	}
	export function CreateWebhookEventResourceRelationshipsFormGroup() {
		return new FormGroup<WebhookEventResourceRelationshipsFormProperties>({
		});

	}

	export interface WebhookEventResourceRelationshipsTransaction {

		/** Required */
		data: WebhookEventResourceRelationshipsTransactionData;
		links?: WebhookEventResourceRelationshipsTransactionLinks;
	}
	export interface WebhookEventResourceRelationshipsTransactionFormProperties {
	}
	export function CreateWebhookEventResourceRelationshipsTransactionFormGroup() {
		return new FormGroup<WebhookEventResourceRelationshipsTransactionFormProperties>({
		});

	}

	export interface WebhookEventResourceRelationshipsTransactionData {

		/**
		 * The unique identifier of the resource within its type.
		 * Required
		 */
		id: string;

		/**
		 * The type of this resource: `transactions`
		 * Required
		 */
		type: string;
	}
	export interface WebhookEventResourceRelationshipsTransactionDataFormProperties {

		/**
		 * The unique identifier of the resource within its type.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The type of this resource: `transactions`
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateWebhookEventResourceRelationshipsTransactionDataFormGroup() {
		return new FormGroup<WebhookEventResourceRelationshipsTransactionDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WebhookEventResourceRelationshipsTransactionLinks {

		/**
		 * The link to retrieve the related resource(s) in this relationship.
		 * Required
		 */
		related: string;
	}
	export interface WebhookEventResourceRelationshipsTransactionLinksFormProperties {

		/**
		 * The link to retrieve the related resource(s) in this relationship.
		 * Required
		 */
		related: FormControl<string | null | undefined>,
	}
	export function CreateWebhookEventResourceRelationshipsTransactionLinksFormGroup() {
		return new FormGroup<WebhookEventResourceRelationshipsTransactionLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WebhookEventResourceRelationshipsWebhook {

		/** Required */
		data: WebhookEventResourceRelationshipsWebhookData;
		links?: WebhookEventResourceRelationshipsWebhookLinks;
	}
	export interface WebhookEventResourceRelationshipsWebhookFormProperties {
	}
	export function CreateWebhookEventResourceRelationshipsWebhookFormGroup() {
		return new FormGroup<WebhookEventResourceRelationshipsWebhookFormProperties>({
		});

	}

	export interface WebhookEventResourceRelationshipsWebhookData {

		/**
		 * The unique identifier of the resource within its type.
		 * Required
		 */
		id: string;

		/**
		 * The type of this resource: `webhooks`
		 * Required
		 */
		type: string;
	}
	export interface WebhookEventResourceRelationshipsWebhookDataFormProperties {

		/**
		 * The unique identifier of the resource within its type.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The type of this resource: `webhooks`
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateWebhookEventResourceRelationshipsWebhookDataFormGroup() {
		return new FormGroup<WebhookEventResourceRelationshipsWebhookDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WebhookEventResourceRelationshipsWebhookLinks {

		/**
		 * The link to retrieve the related resource(s) in this relationship.
		 * Required
		 */
		related: string;
	}
	export interface WebhookEventResourceRelationshipsWebhookLinksFormProperties {

		/**
		 * The link to retrieve the related resource(s) in this relationship.
		 * Required
		 */
		related: FormControl<string | null | undefined>,
	}
	export function CreateWebhookEventResourceRelationshipsWebhookLinksFormGroup() {
		return new FormGroup<WebhookEventResourceRelationshipsWebhookLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**
	 * Specifies the type of a webhook event. This can be used to determine what
	 * action to take in response to the event, such as which relationships to
	 * expect.
	 */
	export enum WebhookEventTypeEnum { TRANSACTION_CREATED = 'TRANSACTION_CREATED', TRANSACTION_SETTLED = 'TRANSACTION_SETTLED', TRANSACTION_DELETED = 'TRANSACTION_DELETED', PING = 'PING' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List accounts
		 * Retrieve a paginated list of all accounts for the currently
		 * authenticated user. The returned list is paginated and can be scrolled
		 * by following the `prev` and `next` links where present.
		 * Get accounts
		 * @param {number} page_size The number of records to return in each page.
		 * @param {AccountTypeEnum} filter_accountType The type of account for which to return records. This
		 * can be used to filter Savers from spending accounts.
		 * @param {OwnershipTypeEnum} filter_ownershipType The account ownership structure for which to return
		 * records. This can be used to filter 2Up accounts from Up
		 * accounts.
		 * @return {ListAccountsResponse} Successful Response
		 */
		AccountsGetByPage_sizeAndFilter_accountTypeAndFilter_ownershipType(page_size: number | null | undefined, filter_accountType: AccountTypeEnum | null | undefined, filter_ownershipType: OwnershipTypeEnum | null | undefined): Observable<ListAccountsResponse> {
			return this.http.get<ListAccountsResponse>(this.baseUri + 'accounts?page_size=' + page_size + '&filter_accountType=' + filter_accountType + '&filter_ownershipType=' + filter_ownershipType, {});
		}

		/**
		 * List transactions by account
		 * Retrieve a list of all transactions for a specific account. The returned
		 * list is [paginated](#pagination) and can be scrolled by following the
		 * `next` and `prev` links where present. To narrow the results to a
		 * specific date range pass one or both of `filter[since]` and
		 * `filter[until]` in the query string. These filter parameters
		 * **should not** be used for pagination. Results are ordered newest first
		 * to oldest last.
		 * Get accounts/{accountId}/transactions
		 * @param {string} accountId The unique identifier for the account.
		 * @param {number} page_size The number of records to return in each page.
		 * @param {TransactionStatusEnum} filter_status The transaction status for which to return records. This
		 * can be used to filter `HELD` transactions from those
		 * that are `SETTLED`.
		 * @param {Date} filter_since The start date-time from which to return records,
		 * formatted according to rfc-3339. Not to be used for
		 * pagination purposes.
		 * @param {Date} filter_until The end date-time up to which to return records,
		 * formatted according to rfc-3339. Not to be used for
		 * pagination purposes.
		 * @param {string} filter_category The category identifier for which to filter transactions.
		 * Both parent and child categories can be filtered through
		 * this parameter. Providing an invalid category identifier
		 * results in a `404` response.
		 * @param {string} filter_tag A transaction tag to filter for which to return records.
		 * If the tag does not exist, zero records are returned and
		 * a success response is given.
		 * @return {ListTransactionsResponse} Successful Response
		 */
		TransactionsGetByAccountIdAndPage_sizeAndFilter_statusAndFilter_sinceAndFilter_untilAndFilter_categoryAndFilter_tag(accountId: string, page_size: number | null | undefined, filter_status: TransactionStatusEnum | null | undefined, filter_since: Date | null | undefined, filter_until: Date | null | undefined, filter_category: string | null | undefined, filter_tag: string | null | undefined): Observable<ListTransactionsResponse> {
			return this.http.get<ListTransactionsResponse>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/transactions&page_size=' + page_size + '&filter_status=' + filter_status + '&filter_since=' + filter_since?.toISOString() + '&filter_until=' + filter_until?.toISOString() + '&filter_category=' + (filter_category == null ? '' : encodeURIComponent(filter_category)) + '&filter_tag=' + (filter_tag == null ? '' : encodeURIComponent(filter_tag)), {});
		}

		/**
		 * Retrieve account
		 * Retrieve a specific account by providing its unique identifier.
		 * Get accounts/{id}
		 * @param {string} id The unique identifier for the account.
		 * @return {GetAccountResponse} Successful Response
		 */
		AccountsGetById(id: string): Observable<GetAccountResponse> {
			return this.http.get<GetAccountResponse>(this.baseUri + 'accounts/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * List categories
		 * Retrieve a list of all categories and their ancestry. The returned list
		 * is not paginated.
		 * Get categories
		 * @param {string} filter_parent The unique identifier of a parent category for which to
		 * return only its children. Providing an invalid category
		 * identifier results in a `404` response.
		 * @return {ListCategoriesResponse} Successful Response
		 */
		CategoriesGetByFilter_parent(filter_parent: string | null | undefined): Observable<ListCategoriesResponse> {
			return this.http.get<ListCategoriesResponse>(this.baseUri + 'categories?filter_parent=' + (filter_parent == null ? '' : encodeURIComponent(filter_parent)), {});
		}

		/**
		 * Retrieve category
		 * Retrieve a specific category by providing its unique identifier.
		 * Get categories/{id}
		 * @param {string} id The unique identifier for the category.
		 * @return {GetCategoryResponse} Successful Response
		 */
		CategoriesGetById(id: string): Observable<GetCategoryResponse> {
			return this.http.get<GetCategoryResponse>(this.baseUri + 'categories/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * List tags
		 * Retrieve a list of all tags currently in use. The returned list is
		 * [paginated](#pagination) and can be scrolled by following the `next`
		 * and `prev` links where present. Results are ordered lexicographically.
		 * The `transactions` relationship for each tag exposes a link
		 * to get the transactions with the given tag.
		 * Get tags
		 * @param {number} page_size The number of records to return in each page.
		 * @return {ListTagsResponse} Successful Response
		 */
		TagsGetByPage_size(page_size: number | null | undefined): Observable<ListTagsResponse> {
			return this.http.get<ListTagsResponse>(this.baseUri + 'tags?page_size=' + page_size, {});
		}

		/**
		 * List transactions
		 * Retrieve a list of all transactions across all accounts for the currently
		 * authenticated user. The returned list is [paginated](#pagination) and can
		 * be scrolled by following the `next` and `prev` links where present. To
		 * narrow the results to a specific date range pass one or both of
		 * `filter[since]` and `filter[until]` in the query string. These filter
		 * parameters **should not** be used for pagination. Results are ordered
		 * newest first to oldest last.
		 * Get transactions
		 * @param {number} page_size The number of records to return in each page.
		 * @param {TransactionStatusEnum} filter_status The transaction status for which to return records. This
		 * can be used to filter `HELD` transactions from those
		 * that are `SETTLED`.
		 * @param {Date} filter_since The start date-time from which to return records,
		 * formatted according to rfc-3339. Not to be used for
		 * pagination purposes.
		 * @param {Date} filter_until The end date-time up to which to return records,
		 * formatted according to rfc-3339. Not to be used for
		 * pagination purposes.
		 * @param {string} filter_category The category identifier for which to filter transactions.
		 * Both parent and child categories can be filtered through
		 * this parameter. Providing an invalid category identifier
		 * results in a `404` response.
		 * @param {string} filter_tag A transaction tag to filter for which to return records.
		 * If the tag does not exist, zero records are returned and
		 * a success response is given.
		 * @return {ListTransactionsResponse} Successful Response
		 */
		TransactionsGetByPage_sizeAndFilter_statusAndFilter_sinceAndFilter_untilAndFilter_categoryAndFilter_tag(page_size: number | null | undefined, filter_status: TransactionStatusEnum | null | undefined, filter_since: Date | null | undefined, filter_until: Date | null | undefined, filter_category: string | null | undefined, filter_tag: string | null | undefined): Observable<ListTransactionsResponse> {
			return this.http.get<ListTransactionsResponse>(this.baseUri + 'transactions?page_size=' + page_size + '&filter_status=' + filter_status + '&filter_since=' + filter_since?.toISOString() + '&filter_until=' + filter_until?.toISOString() + '&filter_category=' + (filter_category == null ? '' : encodeURIComponent(filter_category)) + '&filter_tag=' + (filter_tag == null ? '' : encodeURIComponent(filter_tag)), {});
		}

		/**
		 * Retrieve transaction
		 * Retrieve a specific transaction by providing its unique identifier.
		 * Get transactions/{id}
		 * @param {string} id The unique identifier for the transaction.
		 * @return {GetTransactionResponse} Successful Response
		 */
		TransactionsGetById(id: string): Observable<GetTransactionResponse> {
			return this.http.get<GetTransactionResponse>(this.baseUri + 'transactions/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Categorize transaction
		 * Updates the category associated with a transaction. Only transactions
		 * for which `isCategorizable` is set to true support this operation. The
		 * `id` is taken from the list exposed on `/categories` and cannot be one of
		 * the top-level (parent) categories. To de-categorize a transaction, set
		 * the entire `data` key to `null`. An HTTP `204` is returned on success.
		 * The associated category, along with its request URL is also exposed via
		 * the `category` relationship on the transaction resource returned from
		 * `/transactions/{id}`.
		 * Patch transactions/{transactionId}/relationships/category
		 * @param {string} transactionId The unique identifier for the transaction.
		 * @return {void} 
		 */
		CategoriesPatchByTransactionId(transactionId: string, requestBody: UpdateTransactionCategoryRequest): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'transactions/' + (transactionId == null ? '' : encodeURIComponent(transactionId)) + '/relationships/category', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove tags from transaction
		 * Disassociates one or more tags from a specific transaction. Tags that are
		 * not associated are silently ignored. An HTTP `204` is returned on
		 * success. The associated tags, along with this request URL, are also
		 * exposed via the `tags` relationship on the transaction resource returned
		 * from `/transactions/{id}`.
		 * Delete transactions/{transactionId}/relationships/tags
		 * @param {string} transactionId The unique identifier for the transaction.
		 * @return {void} 
		 */
		TagsDeleteByTransactionId(transactionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'transactions/' + (transactionId == null ? '' : encodeURIComponent(transactionId)) + '/relationships/tags', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add tags to transaction
		 * Associates one or more tags with a specific transaction. No more than 6
		 * tags may be present on any single transaction. Duplicate tags are
		 * silently ignored. An HTTP `204` is returned on success. The associated
		 * tags, along with this request URL, are also exposed via the `tags`
		 * relationship on the transaction resource returned from
		 * `/transactions/{id}`.
		 * Post transactions/{transactionId}/relationships/tags
		 * @param {string} transactionId The unique identifier for the transaction.
		 * @return {void} 
		 */
		TagsPostByTransactionId(transactionId: string, requestBody: UpdateTransactionTagsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'transactions/' + (transactionId == null ? '' : encodeURIComponent(transactionId)) + '/relationships/tags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Ping
		 * Make a basic ping request to the API. This is useful to verify that
		 * authentication is functioning correctly. On authentication success an
		 * HTTP `200` status is returned. On failure an HTTP `401` error response
		 * is returned.
		 * Get util/ping
		 * @return {PingResponse} Successful Response
		 */
		Utility_endpointsGet(): Observable<PingResponse> {
			return this.http.get<PingResponse>(this.baseUri + 'util/ping', {});
		}

		/**
		 * List webhooks
		 * Retrieve a list of configured webhooks. The returned list is
		 * [paginated](#pagination) and can be scrolled by following the `next`
		 * and `prev` links where present. Results are ordered oldest first to
		 * newest last.
		 * Get webhooks
		 * @param {number} page_size The number of records to return in each page.
		 * @return {ListWebhooksResponse} Successful Response
		 */
		WebhooksGetByPage_size(page_size: number | null | undefined): Observable<ListWebhooksResponse> {
			return this.http.get<ListWebhooksResponse>(this.baseUri + 'webhooks?page_size=' + page_size, {});
		}

		/**
		 * Create webhook
		 * Create a new webhook with a given URL. The URL will receive webhook
		 * events as JSON-encoded `POST` requests. The URL must respond with a HTTP
		 * `200` status on success.
		 * There is currently a limit of 10 webhooks at any given time. Once this
		 * limit is reached, existing webhooks will need to be deleted before new
		 * webhooks can be created.
		 * Event delivery is retried with exponential backoff if the URL is
		 * unreachable or it does not respond with a `200` status. The response
		 * includes a `secretKey` attribute, which is used to sign requests sent to
		 * the webhook URL. It will not be returned from any other endpoints within
		 * the Up API. If the `secretKey` is lost, simply create a new webhook with
		 * the same URL, capture its `secretKey` and then delete the original
		 * webhook. See [Handling webhook events](#callback_post_webhookURL) for
		 * details on how to process webhook events.
		 * It is probably a good idea to test the webhook by
		 * [sending it a `PING` event](#post_webhooks_webhookId_ping) after creating
		 * it.
		 * Post webhooks
		 * @return {void} 
		 */
		WebhooksPost(requestBody: CreateWebhookRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'webhooks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete webhook
		 * Delete a specific webhook by providing its unique identifier. Once
		 * deleted, webhook events will no longer be sent to the configured URL.
		 * Delete webhooks/{id}
		 * @param {string} id The unique identifier for the webhook.
		 * @return {void} 
		 */
		WebhooksDeleteById(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'webhooks/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve webhook
		 * Retrieve a specific webhook by providing its unique identifier.
		 * Get webhooks/{id}
		 * @param {string} id The unique identifier for the webhook.
		 * @return {GetWebhookResponse} Successful Response
		 */
		WebhooksGetById(id: string): Observable<GetWebhookResponse> {
			return this.http.get<GetWebhookResponse>(this.baseUri + 'webhooks/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * List webhook logs
		 * Retrieve a list of delivery logs for a webhook by providing its unique
		 * identifier. This is useful for analysis and debugging purposes. The
		 * returned list is [paginated](#pagination) and can be scrolled by
		 * following the `next` and `prev` links where present. Results are ordered
		 * newest first to oldest last. Logs may be automatically purged after a
		 * period of time.
		 * Get webhooks/{webhookId}/logs
		 * @param {string} webhookId The unique identifier for the webhook.
		 * @param {number} page_size The number of records to return in each page.
		 * @return {ListWebhookDeliveryLogsResponse} Successful response
		 */
		WebhooksGetByWebhookIdAndPage_size(webhookId: string, page_size: number | null | undefined): Observable<ListWebhookDeliveryLogsResponse> {
			return this.http.get<ListWebhookDeliveryLogsResponse>(this.baseUri + 'webhooks/' + (webhookId == null ? '' : encodeURIComponent(webhookId)) + '/logs&page_size=' + page_size, {});
		}

		/**
		 * Ping webhook
		 * Send a `PING` event to a webhook by providing its unique identifier.
		 * This is useful for testing and debugging purposes. The event is delivered
		 * asynchronously and its data is returned in the response to this request.
		 * Post webhooks/{webhookId}/ping
		 * @param {string} webhookId The unique identifier for the webhook.
		 * @return {void} 
		 */
		WebhooksPostByWebhookId(webhookId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'webhooks/' + (webhookId == null ? '' : encodeURIComponent(webhookId)) + '/ping', null, { observe: 'response', responseType: 'text' });
		}
	}

}

