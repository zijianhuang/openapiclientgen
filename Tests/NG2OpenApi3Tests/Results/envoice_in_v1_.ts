import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Activity {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		EstimationId?: number | null;
		EstimationNumber?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Id?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		InvoiceId?: number | null;
		InvoiceNumber?: string | null;
		Link?: string | null;
		Message?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OrderId?: number | null;
		OrderNumber?: string | null;
		Type?: ActivityType | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UserId?: number | null;
	}
	export interface ActivityFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		EstimationId: FormControl<number | null | undefined>,
		EstimationNumber: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Id: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		InvoiceId: FormControl<number | null | undefined>,
		InvoiceNumber: FormControl<string | null | undefined>,
		Link: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OrderId: FormControl<number | null | undefined>,
		OrderNumber: FormControl<string | null | undefined>,
		Type: FormControl<ActivityType | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UserId: FormControl<number | null | undefined>,
	}
	export function CreateActivityFormGroup() {
		return new FormGroup<ActivityFormProperties>({
			EstimationId: new FormControl<number | null | undefined>(undefined),
			EstimationNumber: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			InvoiceId: new FormControl<number | null | undefined>(undefined),
			InvoiceNumber: new FormControl<string | null | undefined>(undefined),
			Link: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			OrderId: new FormControl<number | null | undefined>(undefined),
			OrderNumber: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ActivityType | null | undefined>(undefined),
			UserId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ActivityType { Created = 'Created', Draft = 'Draft', Cloned = 'Cloned', SentViaEmail = 'SentViaEmail', SentViaSms = 'SentViaSms', SentReminderViaEmail = 'SentReminderViaEmail', SentReminderViaSms = 'SentReminderViaSms', Opened = 'Opened', Viewed = 'Viewed', Rejected = 'Rejected', Updated = 'Updated', Paid = 'Paid', Unpaid = 'Unpaid', Overdue = 'Overdue', NewManualPayment = 'NewManualPayment', NewPaymentWithPaypal = 'NewPaymentWithPaypal', NewPaymentWithStripe = 'NewPaymentWithStripe', NewPaymentWithPayoneer = 'NewPaymentWithPayoneer', SentToAccountant = 'SentToAccountant', DownloadedAsPdf = 'DownloadedAsPdf', MarkAsPaidByTheClient = 'MarkAsPaidByTheClient', OpenedAttachment = 'OpenedAttachment', NewPaymentWithSquare = 'NewPaymentWithSquare', NewPaymentWithKlikAndPay = 'NewPaymentWithKlikAndPay', NewPaymentWithRazorpay = 'NewPaymentWithRazorpay', NewPaymentWithWepay = 'NewPaymentWithWepay', NewPaymentWithHalkbank = 'NewPaymentWithHalkbank', ChangeStatus = 'ChangeStatus', OrderUpdated = 'OrderUpdated', OrderCreated = 'OrderCreated', NewPaymentWithTwoCheckout = 'NewPaymentWithTwoCheckout', NewPaymentWithPaymentWall = 'NewPaymentWithPaymentWall', NewPaymentWithBamboraEU = 'NewPaymentWithBamboraEU', NewPaymentWithBamboraNA = 'NewPaymentWithBamboraNA', Void = 'Void', NewPaymentWithNlb = 'NewPaymentWithNlb', NewPaymentWithAuthorizeNet = 'NewPaymentWithAuthorizeNet', NewPaymentWithBraintree = 'NewPaymentWithBraintree', EstimationCreated = 'EstimationCreated', EstimationDraft = 'EstimationDraft', EstimationCloned = 'EstimationCloned', EstimationSentViaEmail = 'EstimationSentViaEmail', EstimationOpened = 'EstimationOpened', EstimationViewed = 'EstimationViewed', EstimationAccepted = 'EstimationAccepted', EstimationRejected = 'EstimationRejected', EstimationUpdated = 'EstimationUpdated', EstimationDownloadedAsPdf = 'EstimationDownloadedAsPdf', InvoiceDigitallySigned = 'InvoiceDigitallySigned' }

	export interface AdditionalClientEmail {
		Client?: Client;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ClientId?: number | null;
		Email?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Id?: number | null;
	}
	export interface AdditionalClientEmailFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ClientId: FormControl<number | null | undefined>,
		Email: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Id: FormControl<number | null | undefined>,
	}
	export function CreateAdditionalClientEmailFormGroup() {
		return new FormGroup<AdditionalClientEmailFormProperties>({
			ClientId: new FormControl<number | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Client {
		Address?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ClientCountryId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ClientCurrencyId?: number | null;
		CompanyRegistrationNumber?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DefaultDueDateInDays?: number | null;
		Email?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Id?: number | null;
		Name?: string | null;
		PhoneNumber?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UiLanguageId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UserId?: number | null;
		Vat?: string | null;
	}
	export interface ClientFormProperties {
		Address: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ClientCountryId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ClientCurrencyId: FormControl<number | null | undefined>,
		CompanyRegistrationNumber: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DefaultDueDateInDays: FormControl<number | null | undefined>,
		Email: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Id: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PhoneNumber: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UiLanguageId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UserId: FormControl<number | null | undefined>,
		Vat: FormControl<string | null | undefined>,
	}
	export function CreateClientFormGroup() {
		return new FormGroup<ClientFormProperties>({
			Address: new FormControl<string | null | undefined>(undefined),
			ClientCountryId: new FormControl<number | null | undefined>(undefined),
			ClientCurrencyId: new FormControl<number | null | undefined>(undefined),
			CompanyRegistrationNumber: new FormControl<string | null | undefined>(undefined),
			DefaultDueDateInDays: new FormControl<number | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PhoneNumber: new FormControl<string | null | undefined>(undefined),
			UiLanguageId: new FormControl<number | null | undefined>(undefined),
			UserId: new FormControl<number | null | undefined>(undefined),
			Vat: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AdditionalClientEmailApiModel {

		/** CC */
		Email?: string | null;
	}
	export interface AdditionalClientEmailApiModelFormProperties {

		/** CC */
		Email: FormControl<string | null | undefined>,
	}
	export function CreateAdditionalClientEmailApiModelFormGroup() {
		return new FormGroup<AdditionalClientEmailApiModelFormProperties>({
			Email: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ChangeOrderStatusApiModel {

		/**
		 * Order Id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;

		/** Reason for status change */
		Reason?: string | null;

		/** New status of the order */
		Status?: ChangeOrderStatusApiModelStatus | null;
	}
	export interface ChangeOrderStatusApiModelFormProperties {

		/**
		 * Order Id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,

		/** Reason for status change */
		Reason: FormControl<string | null | undefined>,

		/** New status of the order */
		Status: FormControl<ChangeOrderStatusApiModelStatus | null | undefined>,
	}
	export function CreateChangeOrderStatusApiModelFormGroup() {
		return new FormGroup<ChangeOrderStatusApiModelFormProperties>({
			Id: new FormControl<number | null | undefined>(undefined),
			Reason: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ChangeOrderStatusApiModelStatus | null | undefined>(undefined),
		});

	}

	export enum ChangeOrderStatusApiModelStatus { PendingPayment = 'PendingPayment', Processing = 'Processing', Shipped = 'Shipped', Completed = 'Completed', OnHold = 'OnHold', Cancelled = 'Cancelled', Refunded = 'Refunded', Failed = 'Failed' }

	export interface ChangeStatusApiModel {

		/**
		 * Invoice Id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;

		/** New status of the invoice */
		Status?: ChangeStatusApiModelStatus | null;
	}
	export interface ChangeStatusApiModelFormProperties {

		/**
		 * Invoice Id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,

		/** New status of the invoice */
		Status: FormControl<ChangeStatusApiModelStatus | null | undefined>,
	}
	export function CreateChangeStatusApiModelFormGroup() {
		return new FormGroup<ChangeStatusApiModelFormProperties>({
			Id: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<ChangeStatusApiModelStatus | null | undefined>(undefined),
		});

	}

	export enum ChangeStatusApiModelStatus { Draft = 'Draft', Paid = 'Paid', Unpaid = 'Unpaid', Overdue = 'Overdue', Void = 'Void' }

	export interface ClientCreateApiModel {

		/** Client additional emails contact for CC */
		AdditionalEmails?: Array<AdditionalClientEmailApiModel>;

		/** Client business address */
		Address?: string | null;

		/**
		 * Indicates the country where the clients is from
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ClientCountryId?: number | null;

		/**
		 * Indicates the default system currency used by the user for the client
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ClientCurrencyId?: number | null;

		/** Client's Company Registration Number */
		CompanyRegistrationNumber?: string | null;

		/**
		 * Client custom payment terms
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		DefaultDueDateInDays?: number | null;

		/** Client email */
		Email?: string | null;

		/** Name of the client */
		Name?: string | null;

		/** Client phone numer */
		PhoneNumber?: string | null;

		/**
		 * Hold a value of the language in which the invoice will be sent
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		UiLanguageId?: number | null;

		/** Client's VAT number */
		Vat?: string | null;
	}
	export interface ClientCreateApiModelFormProperties {

		/** Client business address */
		Address: FormControl<string | null | undefined>,

		/**
		 * Indicates the country where the clients is from
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ClientCountryId: FormControl<number | null | undefined>,

		/**
		 * Indicates the default system currency used by the user for the client
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ClientCurrencyId: FormControl<number | null | undefined>,

		/** Client's Company Registration Number */
		CompanyRegistrationNumber: FormControl<string | null | undefined>,

		/**
		 * Client custom payment terms
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		DefaultDueDateInDays: FormControl<number | null | undefined>,

		/** Client email */
		Email: FormControl<string | null | undefined>,

		/** Name of the client */
		Name: FormControl<string | null | undefined>,

		/** Client phone numer */
		PhoneNumber: FormControl<string | null | undefined>,

		/**
		 * Hold a value of the language in which the invoice will be sent
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		UiLanguageId: FormControl<number | null | undefined>,

		/** Client's VAT number */
		Vat: FormControl<string | null | undefined>,
	}
	export function CreateClientCreateApiModelFormGroup() {
		return new FormGroup<ClientCreateApiModelFormProperties>({
			Address: new FormControl<string | null | undefined>(undefined),
			ClientCountryId: new FormControl<number | null | undefined>(undefined),
			ClientCurrencyId: new FormControl<number | null | undefined>(undefined),
			CompanyRegistrationNumber: new FormControl<string | null | undefined>(undefined),
			DefaultDueDateInDays: new FormControl<number | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PhoneNumber: new FormControl<string | null | undefined>(undefined),
			UiLanguageId: new FormControl<number | null | undefined>(undefined),
			Vat: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClientDeleteApiModel {

		/**
		 * Id of client to be deleted
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;
	}
	export interface ClientDeleteApiModelFormProperties {

		/**
		 * Id of client to be deleted
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,
	}
	export function CreateClientDeleteApiModelFormGroup() {
		return new FormGroup<ClientDeleteApiModelFormProperties>({
			Id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ClientDetailsApiModel {

		/** Client additional emails contact for CC */
		AdditionalEmails?: Array<AdditionalClientEmailApiModel>;

		/** Client business address */
		Address?: string | null;

		/**
		 * Indicates the country where the clients is from
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ClientCountryId?: number | null;

		/**
		 * Indicates the default system currency used by the user for the client
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ClientCurrencyId?: number | null;

		/** Client's Company Registration Number */
		CompanyRegistrationNumber?: string | null;

		/** Date of creation */
		CreatedOn?: Date | null;

		/**
		 * Client custom payment terms
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		DefaultDueDateInDays?: number | null;

		/** Client email */
		Email?: string | null;

		/**
		 * Entity id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;

		/** Name of the client */
		Name?: string | null;

		/** Client phone numer */
		PhoneNumber?: string | null;

		/**
		 * Hold a value of the language in which the invoice will be sent
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		UiLanguageId?: number | null;

		/** Client's VAT number */
		Vat?: string | null;
	}
	export interface ClientDetailsApiModelFormProperties {

		/** Client business address */
		Address: FormControl<string | null | undefined>,

		/**
		 * Indicates the country where the clients is from
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ClientCountryId: FormControl<number | null | undefined>,

		/**
		 * Indicates the default system currency used by the user for the client
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ClientCurrencyId: FormControl<number | null | undefined>,

		/** Client's Company Registration Number */
		CompanyRegistrationNumber: FormControl<string | null | undefined>,

		/** Date of creation */
		CreatedOn: FormControl<Date | null | undefined>,

		/**
		 * Client custom payment terms
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		DefaultDueDateInDays: FormControl<number | null | undefined>,

		/** Client email */
		Email: FormControl<string | null | undefined>,

		/**
		 * Entity id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,

		/** Name of the client */
		Name: FormControl<string | null | undefined>,

		/** Client phone numer */
		PhoneNumber: FormControl<string | null | undefined>,

		/**
		 * Hold a value of the language in which the invoice will be sent
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		UiLanguageId: FormControl<number | null | undefined>,

		/** Client's VAT number */
		Vat: FormControl<string | null | undefined>,
	}
	export function CreateClientDetailsApiModelFormGroup() {
		return new FormGroup<ClientDetailsApiModelFormProperties>({
			Address: new FormControl<string | null | undefined>(undefined),
			ClientCountryId: new FormControl<number | null | undefined>(undefined),
			ClientCurrencyId: new FormControl<number | null | undefined>(undefined),
			CompanyRegistrationNumber: new FormControl<string | null | undefined>(undefined),
			CreatedOn: new FormControl<Date | null | undefined>(undefined),
			DefaultDueDateInDays: new FormControl<number | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PhoneNumber: new FormControl<string | null | undefined>(undefined),
			UiLanguageId: new FormControl<number | null | undefined>(undefined),
			Vat: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClientUpdateApiModel {

		/** Client additional emails contact for CC */
		AdditionalEmails?: Array<AdditionalClientEmailApiModel>;

		/** Client business address */
		Address?: string | null;

		/**
		 * Indicates the country where the clients is from
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ClientCountryId?: number | null;

		/**
		 * Indicates the default system currency used by the user for the client
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ClientCurrencyId?: number | null;

		/** Client's Company Registration Number */
		CompanyRegistrationNumber?: string | null;

		/**
		 * Client custom payment terms
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		DefaultDueDateInDays?: number | null;

		/** Client email */
		Email?: string | null;

		/**
		 * Entity id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;

		/** Name of the client */
		Name?: string | null;

		/** Client phone numer */
		PhoneNumber?: string | null;

		/**
		 * Hold a value of the language in which the invoice will be sent
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		UiLanguageId?: number | null;

		/** Client's VAT number */
		Vat?: string | null;
	}
	export interface ClientUpdateApiModelFormProperties {

		/** Client business address */
		Address: FormControl<string | null | undefined>,

		/**
		 * Indicates the country where the clients is from
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ClientCountryId: FormControl<number | null | undefined>,

		/**
		 * Indicates the default system currency used by the user for the client
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ClientCurrencyId: FormControl<number | null | undefined>,

		/** Client's Company Registration Number */
		CompanyRegistrationNumber: FormControl<string | null | undefined>,

		/**
		 * Client custom payment terms
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		DefaultDueDateInDays: FormControl<number | null | undefined>,

		/** Client email */
		Email: FormControl<string | null | undefined>,

		/**
		 * Entity id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,

		/** Name of the client */
		Name: FormControl<string | null | undefined>,

		/** Client phone numer */
		PhoneNumber: FormControl<string | null | undefined>,

		/**
		 * Hold a value of the language in which the invoice will be sent
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		UiLanguageId: FormControl<number | null | undefined>,

		/** Client's VAT number */
		Vat: FormControl<string | null | undefined>,
	}
	export function CreateClientUpdateApiModelFormGroup() {
		return new FormGroup<ClientUpdateApiModelFormProperties>({
			Address: new FormControl<string | null | undefined>(undefined),
			ClientCountryId: new FormControl<number | null | undefined>(undefined),
			ClientCurrencyId: new FormControl<number | null | undefined>(undefined),
			CompanyRegistrationNumber: new FormControl<string | null | undefined>(undefined),
			DefaultDueDateInDays: new FormControl<number | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PhoneNumber: new FormControl<string | null | undefined>(undefined),
			UiLanguageId: new FormControl<number | null | undefined>(undefined),
			Vat: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Country {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Id?: number | null;
		Name?: string | null;
		Value?: string | null;
	}
	export interface CountryFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Id: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateCountryFormGroup() {
		return new FormGroup<CountryFormProperties>({
			Id: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CountryDetailsApiModel {

		/**
		 * Entity id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;

		/** Name of the country */
		Name?: string | null;

		/** Country short code */
		Value?: string | null;
	}
	export interface CountryDetailsApiModelFormProperties {

		/**
		 * Entity id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,

		/** Name of the country */
		Name: FormControl<string | null | undefined>,

		/** Country short code */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateCountryDetailsApiModelFormGroup() {
		return new FormGroup<CountryDetailsApiModelFormProperties>({
			Id: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Currency {
		Code?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Id?: number | null;
		Name?: string | null;
		Symbol?: string | null;
		Value?: string | null;
	}
	export interface CurrencyFormProperties {
		Code: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Id: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Symbol: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateCurrencyFormGroup() {
		return new FormGroup<CurrencyFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Symbol: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CurrencyApiModel {

		/** Name of the currency */
		Name?: string | null;

		/** Currency short code */
		Value?: string | null;
	}
	export interface CurrencyApiModelFormProperties {

		/** Name of the currency */
		Name: FormControl<string | null | undefined>,

		/** Currency short code */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateCurrencyApiModelFormGroup() {
		return new FormGroup<CurrencyApiModelFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CurrencyDetailsApiModel {

		/** Currency short numeric code */
		Code?: string | null;

		/**
		 * Entity id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;

		/** Name of the country */
		Name?: string | null;

		/** Currency symbol */
		Symbol?: string | null;

		/** Currency short alpha code */
		Value?: string | null;
	}
	export interface CurrencyDetailsApiModelFormProperties {

		/** Currency short numeric code */
		Code: FormControl<string | null | undefined>,

		/**
		 * Entity id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,

		/** Name of the country */
		Name: FormControl<string | null | undefined>,

		/** Currency symbol */
		Symbol: FormControl<string | null | undefined>,

		/** Currency short alpha code */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateCurrencyDetailsApiModelFormGroup() {
		return new FormGroup<CurrencyDetailsApiModelFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Symbol: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EstimationActivityApiModel {

		/** Indicates to which estimation this activity refers to */
		EstimationNumber?: string | null;

		/**
		 * Id of estimation activity
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;

		/** Url which point out to a certain activity action. Ex: Click to view the payment */
		Link?: string | null;

		/** Message associated with the activity */
		Message?: string | null;

		/** Type of the activity */
		Type?: ActivityType | null;
	}
	export interface EstimationActivityApiModelFormProperties {

		/** Indicates to which estimation this activity refers to */
		EstimationNumber: FormControl<string | null | undefined>,

		/**
		 * Id of estimation activity
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,

		/** Url which point out to a certain activity action. Ex: Click to view the payment */
		Link: FormControl<string | null | undefined>,

		/** Message associated with the activity */
		Message: FormControl<string | null | undefined>,

		/** Type of the activity */
		Type: FormControl<ActivityType | null | undefined>,
	}
	export function CreateEstimationActivityApiModelFormGroup() {
		return new FormGroup<EstimationActivityApiModelFormProperties>({
			EstimationNumber: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			Link: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ActivityType | null | undefined>(undefined),
		});

	}

	export interface EstimationAttachmentApiModel {

		/**
		 * Id of estimation attachment
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;

		/** Link to the file */
		Link?: string | null;

		/** Hashed file name to avoid url wildguessing */
		ObfuscatedFileName?: string | null;

		/** Name of the file */
		OriginalFileName?: string | null;

		/**
		 * File size number in bytes
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		Size?: string | null;

		/** Type of the link (Attached or external) */
		Type?: EstimationAttachmentApiModelType | null;
	}
	export interface EstimationAttachmentApiModelFormProperties {

		/**
		 * Id of estimation attachment
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,

		/** Link to the file */
		Link: FormControl<string | null | undefined>,

		/** Hashed file name to avoid url wildguessing */
		ObfuscatedFileName: FormControl<string | null | undefined>,

		/** Name of the file */
		OriginalFileName: FormControl<string | null | undefined>,

		/**
		 * File size number in bytes
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		Size: FormControl<string | null | undefined>,

		/** Type of the link (Attached or external) */
		Type: FormControl<EstimationAttachmentApiModelType | null | undefined>,
	}
	export function CreateEstimationAttachmentApiModelFormGroup() {
		return new FormGroup<EstimationAttachmentApiModelFormProperties>({
			Id: new FormControl<number | null | undefined>(undefined),
			Link: new FormControl<string | null | undefined>(undefined),
			ObfuscatedFileName: new FormControl<string | null | undefined>(undefined),
			OriginalFileName: new FormControl<string | null | undefined>(undefined),
			Size: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<EstimationAttachmentApiModelType | null | undefined>(undefined),
		});

	}

	export enum EstimationAttachmentApiModelType { External = 'External', Uploaded = 'Uploaded' }

	export interface EstimationChangeStatusApiModel {

		/**
		 * Estimation Id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;

		/** New status of the estimation */
		Status?: EstimationChangeStatusApiModelStatus | null;
	}
	export interface EstimationChangeStatusApiModelFormProperties {

		/**
		 * Estimation Id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,

		/** New status of the estimation */
		Status: FormControl<EstimationChangeStatusApiModelStatus | null | undefined>,
	}
	export function CreateEstimationChangeStatusApiModelFormGroup() {
		return new FormGroup<EstimationChangeStatusApiModelFormProperties>({
			Id: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<EstimationChangeStatusApiModelStatus | null | undefined>(undefined),
		});

	}

	export enum EstimationChangeStatusApiModelStatus { Draft = 'Draft', Accepted = 'Accepted', Rejected = 'Rejected' }

	export interface EstimationCreateApiModel {

		/** List of estimation attachments */
		Attachments?: Array<EstimationCreateAttachmentApiModel>;

		/**
		 * The client to whom this estimation is assigned
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ClientId?: number | null;

		/**
		 * Indicate from which estimation this estimation has been cloned from
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ClonedFromId?: number | null;

		/**
		 * Id of the currency for the estimation amounts
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		CurrencyId?: number | null;

		/** Indicates when the estimation will be proclamed as due */
		ExpiresOn?: Date | null;

		/** Indicates when the estimation was issued */
		IssuedOn?: Date | null;

		/** List of estimation items */
		Items?: Array<EstimationCreateItemApiModel>;

		/** Internal note regarding the estimation */
		Notes?: string | null;

		/** Unique estimation number */
		Number?: string | null;

		/** List of enabled payment gateways for this estimation */
		PaymentGateways?: Array<EstimationGatewayApiModel>;

		/** Unique number generated by the buyer */
		PoNumber?: string | null;

		/** Indicate the status of the estimation (paid/unpaid/overdue) */
		Status?: EstimationChangeStatusApiModelStatus | null;

		/** Terms of agreement */
		Terms?: string | null;
	}
	export interface EstimationCreateApiModelFormProperties {

		/**
		 * The client to whom this estimation is assigned
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ClientId: FormControl<number | null | undefined>,

		/**
		 * Indicate from which estimation this estimation has been cloned from
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ClonedFromId: FormControl<number | null | undefined>,

		/**
		 * Id of the currency for the estimation amounts
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		CurrencyId: FormControl<number | null | undefined>,

		/** Indicates when the estimation will be proclamed as due */
		ExpiresOn: FormControl<Date | null | undefined>,

		/** Indicates when the estimation was issued */
		IssuedOn: FormControl<Date | null | undefined>,

		/** Internal note regarding the estimation */
		Notes: FormControl<string | null | undefined>,

		/** Unique estimation number */
		Number: FormControl<string | null | undefined>,

		/** Unique number generated by the buyer */
		PoNumber: FormControl<string | null | undefined>,

		/** Indicate the status of the estimation (paid/unpaid/overdue) */
		Status: FormControl<EstimationChangeStatusApiModelStatus | null | undefined>,

		/** Terms of agreement */
		Terms: FormControl<string | null | undefined>,
	}
	export function CreateEstimationCreateApiModelFormGroup() {
		return new FormGroup<EstimationCreateApiModelFormProperties>({
			ClientId: new FormControl<number | null | undefined>(undefined),
			ClonedFromId: new FormControl<number | null | undefined>(undefined),
			CurrencyId: new FormControl<number | null | undefined>(undefined),
			ExpiresOn: new FormControl<Date | null | undefined>(undefined),
			IssuedOn: new FormControl<Date | null | undefined>(undefined),
			Notes: new FormControl<string | null | undefined>(undefined),
			Number: new FormControl<string | null | undefined>(undefined),
			PoNumber: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<EstimationChangeStatusApiModelStatus | null | undefined>(undefined),
			Terms: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EstimationCreateAttachmentApiModel {

		/** Link to the file */
		Link?: string | null;

		/** Hashed file name to avoid url wildguessing */
		ObfuscatedFileName?: string | null;

		/** Name of the file */
		OriginalFileName?: string | null;

		/**
		 * File size number in bytes
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		Size?: string | null;

		/** Type of the link (Attached or external) */
		Type?: EstimationAttachmentApiModelType | null;
	}
	export interface EstimationCreateAttachmentApiModelFormProperties {

		/** Link to the file */
		Link: FormControl<string | null | undefined>,

		/** Hashed file name to avoid url wildguessing */
		ObfuscatedFileName: FormControl<string | null | undefined>,

		/** Name of the file */
		OriginalFileName: FormControl<string | null | undefined>,

		/**
		 * File size number in bytes
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		Size: FormControl<string | null | undefined>,

		/** Type of the link (Attached or external) */
		Type: FormControl<EstimationAttachmentApiModelType | null | undefined>,
	}
	export function CreateEstimationCreateAttachmentApiModelFormGroup() {
		return new FormGroup<EstimationCreateAttachmentApiModelFormProperties>({
			Link: new FormControl<string | null | undefined>(undefined),
			ObfuscatedFileName: new FormControl<string | null | undefined>(undefined),
			OriginalFileName: new FormControl<string | null | undefined>(undefined),
			Size: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<EstimationAttachmentApiModelType | null | undefined>(undefined),
		});

	}

	export interface EstimationCreateItemApiModel {

		/**
		 * Amount per unit
		 * Type: double
		 */
		Cost?: number | null;

		/** Additional description attached to the estimation item */
		Description?: string | null;

		/**
		 * Discount percentage for the overall amount
		 * Type: double
		 */
		DiscountPercentage?: number | null;

		/**
		 * Quantity in total used for the work type
		 * Type: double
		 */
		Quantity?: number | null;

		/**
		 * Tax applied on the item
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxId?: number | null;

		/**
		 * Task percentage. Ex: 18%
		 * Type: double
		 */
		TaxPercentage?: number | null;

		/**
		 * Work type (Name of the service)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		WorkTypeId?: number | null;
	}
	export interface EstimationCreateItemApiModelFormProperties {

		/**
		 * Amount per unit
		 * Type: double
		 */
		Cost: FormControl<number | null | undefined>,

		/** Additional description attached to the estimation item */
		Description: FormControl<string | null | undefined>,

		/**
		 * Discount percentage for the overall amount
		 * Type: double
		 */
		DiscountPercentage: FormControl<number | null | undefined>,

		/**
		 * Quantity in total used for the work type
		 * Type: double
		 */
		Quantity: FormControl<number | null | undefined>,

		/**
		 * Tax applied on the item
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxId: FormControl<number | null | undefined>,

		/**
		 * Task percentage. Ex: 18%
		 * Type: double
		 */
		TaxPercentage: FormControl<number | null | undefined>,

		/**
		 * Work type (Name of the service)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		WorkTypeId: FormControl<number | null | undefined>,
	}
	export function CreateEstimationCreateItemApiModelFormGroup() {
		return new FormGroup<EstimationCreateItemApiModelFormProperties>({
			Cost: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DiscountPercentage: new FormControl<number | null | undefined>(undefined),
			Quantity: new FormControl<number | null | undefined>(undefined),
			TaxId: new FormControl<number | null | undefined>(undefined),
			TaxPercentage: new FormControl<number | null | undefined>(undefined),
			WorkTypeId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EstimationGatewayApiModel {

		/** Name of the payment gateway */
		Name?: string | null;
	}
	export interface EstimationGatewayApiModelFormProperties {

		/** Name of the payment gateway */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateEstimationGatewayApiModelFormGroup() {
		return new FormGroup<EstimationGatewayApiModelFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EstimationDeleteApiModel {

		/**
		 * Id of estimation to be deleted
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;
	}
	export interface EstimationDeleteApiModelFormProperties {

		/**
		 * Id of estimation to be deleted
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,
	}
	export function CreateEstimationDeleteApiModelFormGroup() {
		return new FormGroup<EstimationDeleteApiModelFormProperties>({
			Id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EstimationDetailsApiModel {

		/** Security access token used for accessing the estimation anonymously */
		AccessToken?: string | null;
		Client?: ClientDetailsApiModel;

		/**
		 * Indicate from which estimation this estimation has been cloned from
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ClonedFromId?: number | null;
		Currency?: CurrencyDetailsApiModel;

		/**
		 * Amount that goes as a discount
		 * Type: double
		 */
		DiscountAmount?: number | null;

		/** Indicates when the estimation will be proclamed as due */
		ExpiresOn?: Date | null;

		/**
		 * Estimation id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;

		/** Indicates when the estimation was issued */
		IssuedOn?: Date | null;

		/** Internal note regarding the estimation */
		Notes?: string | null;

		/** Unique estimation number */
		Number?: string | null;

		/** Unique number generated by the buyer */
		PoNumber?: string | null;

		/** Indicate the status of the estimation (paid/unpaid/overdue) */
		Status?: EstimationChangeStatusApiModelStatus | null;

		/**
		 * Total amount of the estimation without tax
		 * Type: double
		 */
		SubTotalAmount?: number | null;

		/**
		 * Amount that goes to the tax
		 * Type: double
		 */
		TaxAmount?: number | null;

		/** Terms of agreement */
		Terms?: string | null;

		/**
		 * Total amount of the estimation with tax
		 * Type: double
		 */
		TotalAmount?: number | null;
	}
	export interface EstimationDetailsApiModelFormProperties {

		/** Security access token used for accessing the estimation anonymously */
		AccessToken: FormControl<string | null | undefined>,

		/**
		 * Indicate from which estimation this estimation has been cloned from
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ClonedFromId: FormControl<number | null | undefined>,

		/**
		 * Amount that goes as a discount
		 * Type: double
		 */
		DiscountAmount: FormControl<number | null | undefined>,

		/** Indicates when the estimation will be proclamed as due */
		ExpiresOn: FormControl<Date | null | undefined>,

		/**
		 * Estimation id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,

		/** Indicates when the estimation was issued */
		IssuedOn: FormControl<Date | null | undefined>,

		/** Internal note regarding the estimation */
		Notes: FormControl<string | null | undefined>,

		/** Unique estimation number */
		Number: FormControl<string | null | undefined>,

		/** Unique number generated by the buyer */
		PoNumber: FormControl<string | null | undefined>,

		/** Indicate the status of the estimation (paid/unpaid/overdue) */
		Status: FormControl<EstimationChangeStatusApiModelStatus | null | undefined>,

		/**
		 * Total amount of the estimation without tax
		 * Type: double
		 */
		SubTotalAmount: FormControl<number | null | undefined>,

		/**
		 * Amount that goes to the tax
		 * Type: double
		 */
		TaxAmount: FormControl<number | null | undefined>,

		/** Terms of agreement */
		Terms: FormControl<string | null | undefined>,

		/**
		 * Total amount of the estimation with tax
		 * Type: double
		 */
		TotalAmount: FormControl<number | null | undefined>,
	}
	export function CreateEstimationDetailsApiModelFormGroup() {
		return new FormGroup<EstimationDetailsApiModelFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined),
			ClonedFromId: new FormControl<number | null | undefined>(undefined),
			DiscountAmount: new FormControl<number | null | undefined>(undefined),
			ExpiresOn: new FormControl<Date | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			IssuedOn: new FormControl<Date | null | undefined>(undefined),
			Notes: new FormControl<string | null | undefined>(undefined),
			Number: new FormControl<string | null | undefined>(undefined),
			PoNumber: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<EstimationChangeStatusApiModelStatus | null | undefined>(undefined),
			SubTotalAmount: new FormControl<number | null | undefined>(undefined),
			TaxAmount: new FormControl<number | null | undefined>(undefined),
			Terms: new FormControl<string | null | undefined>(undefined),
			TotalAmount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EstimationFullDetailsApiModel {

		/** Security access token used for accessing the estimation anonymously */
		AccessToken?: string | null;

		/** List of estimation activities. estimation audit log */
		Activities?: Array<EstimationActivityApiModel>;

		/** List of estimation attachments */
		Attachments?: Array<EstimationAttachmentApiModel>;
		Client?: ClientDetailsApiModel;

		/**
		 * Indicate from which estimation this estimation has been cloned from
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ClonedFromId?: number | null;
		Currency?: CurrencyDetailsApiModel;

		/**
		 * Amount that goes as a discount
		 * Type: double
		 */
		DiscountAmount?: number | null;

		/** Indicates when the estimation will be proclamed as due */
		ExpiresOn?: Date | null;

		/**
		 * Estimation id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;

		/** Indicates when the estimation was issued */
		IssuedOn?: Date | null;

		/** List of estimation items */
		Items?: Array<EstimationItemApiModel>;

		/** Internal note regarding the estimation */
		Notes?: string | null;

		/** Unique estimation number */
		Number?: string | null;

		/** List of enabled payment gateways for this estimation */
		PaymentGateways?: Array<EstimationGatewayApiModel>;

		/** Unique number generated by the buyer */
		PoNumber?: string | null;

		/** Indicate the status of the estimation (paid/unpaid/overdue) */
		Status?: EstimationChangeStatusApiModelStatus | null;

		/**
		 * Total amount of the estimation without tax
		 * Type: double
		 */
		SubTotalAmount?: number | null;

		/**
		 * Amount that goes to the tax
		 * Type: double
		 */
		TaxAmount?: number | null;

		/** Terms of agreement */
		Terms?: string | null;

		/**
		 * Total amount of the estimation with tax
		 * Type: double
		 */
		TotalAmount?: number | null;
	}
	export interface EstimationFullDetailsApiModelFormProperties {

		/** Security access token used for accessing the estimation anonymously */
		AccessToken: FormControl<string | null | undefined>,

		/**
		 * Indicate from which estimation this estimation has been cloned from
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ClonedFromId: FormControl<number | null | undefined>,

		/**
		 * Amount that goes as a discount
		 * Type: double
		 */
		DiscountAmount: FormControl<number | null | undefined>,

		/** Indicates when the estimation will be proclamed as due */
		ExpiresOn: FormControl<Date | null | undefined>,

		/**
		 * Estimation id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,

		/** Indicates when the estimation was issued */
		IssuedOn: FormControl<Date | null | undefined>,

		/** Internal note regarding the estimation */
		Notes: FormControl<string | null | undefined>,

		/** Unique estimation number */
		Number: FormControl<string | null | undefined>,

		/** Unique number generated by the buyer */
		PoNumber: FormControl<string | null | undefined>,

		/** Indicate the status of the estimation (paid/unpaid/overdue) */
		Status: FormControl<EstimationChangeStatusApiModelStatus | null | undefined>,

		/**
		 * Total amount of the estimation without tax
		 * Type: double
		 */
		SubTotalAmount: FormControl<number | null | undefined>,

		/**
		 * Amount that goes to the tax
		 * Type: double
		 */
		TaxAmount: FormControl<number | null | undefined>,

		/** Terms of agreement */
		Terms: FormControl<string | null | undefined>,

		/**
		 * Total amount of the estimation with tax
		 * Type: double
		 */
		TotalAmount: FormControl<number | null | undefined>,
	}
	export function CreateEstimationFullDetailsApiModelFormGroup() {
		return new FormGroup<EstimationFullDetailsApiModelFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined),
			ClonedFromId: new FormControl<number | null | undefined>(undefined),
			DiscountAmount: new FormControl<number | null | undefined>(undefined),
			ExpiresOn: new FormControl<Date | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			IssuedOn: new FormControl<Date | null | undefined>(undefined),
			Notes: new FormControl<string | null | undefined>(undefined),
			Number: new FormControl<string | null | undefined>(undefined),
			PoNumber: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<EstimationChangeStatusApiModelStatus | null | undefined>(undefined),
			SubTotalAmount: new FormControl<number | null | undefined>(undefined),
			TaxAmount: new FormControl<number | null | undefined>(undefined),
			Terms: new FormControl<string | null | undefined>(undefined),
			TotalAmount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EstimationItemApiModel {

		/**
		 * Amount per unit
		 * Type: double
		 */
		Cost?: number | null;

		/** Additional description attached to the estimation item */
		Description?: string | null;

		/**
		 * Amount that goes as a discount
		 * Type: double
		 */
		DiscountAmount?: number | null;

		/**
		 * Discount percentage for the overall amount
		 * Type: double
		 */
		DiscountPercentage?: number | null;

		/**
		 * Id of estimation item
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;

		/**
		 * Quantity in total used for the work type
		 * Type: double
		 */
		Quantity?: number | null;

		/**
		 * Sub-Total amount of the estimation item (Amount without tax)
		 * Type: double
		 */
		SubTotalAmount?: number | null;

		/**
		 * Amount that goes to the tax
		 * Type: double
		 */
		TaxAmount?: number | null;

		/**
		 * Tax applied on the item
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxId?: number | null;

		/**
		 * Task percentage. Ex: 18%
		 * Type: double
		 */
		TaxPercentage?: number | null;

		/**
		 * Total amount of the estimation item
		 * Type: double
		 */
		TotalAmount?: number | null;

		/**
		 * Work type (Name of the service)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		WorkTypeId?: number | null;
	}
	export interface EstimationItemApiModelFormProperties {

		/**
		 * Amount per unit
		 * Type: double
		 */
		Cost: FormControl<number | null | undefined>,

		/** Additional description attached to the estimation item */
		Description: FormControl<string | null | undefined>,

		/**
		 * Amount that goes as a discount
		 * Type: double
		 */
		DiscountAmount: FormControl<number | null | undefined>,

		/**
		 * Discount percentage for the overall amount
		 * Type: double
		 */
		DiscountPercentage: FormControl<number | null | undefined>,

		/**
		 * Id of estimation item
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,

		/**
		 * Quantity in total used for the work type
		 * Type: double
		 */
		Quantity: FormControl<number | null | undefined>,

		/**
		 * Sub-Total amount of the estimation item (Amount without tax)
		 * Type: double
		 */
		SubTotalAmount: FormControl<number | null | undefined>,

		/**
		 * Amount that goes to the tax
		 * Type: double
		 */
		TaxAmount: FormControl<number | null | undefined>,

		/**
		 * Tax applied on the item
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxId: FormControl<number | null | undefined>,

		/**
		 * Task percentage. Ex: 18%
		 * Type: double
		 */
		TaxPercentage: FormControl<number | null | undefined>,

		/**
		 * Total amount of the estimation item
		 * Type: double
		 */
		TotalAmount: FormControl<number | null | undefined>,

		/**
		 * Work type (Name of the service)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		WorkTypeId: FormControl<number | null | undefined>,
	}
	export function CreateEstimationItemApiModelFormGroup() {
		return new FormGroup<EstimationItemApiModelFormProperties>({
			Cost: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DiscountAmount: new FormControl<number | null | undefined>(undefined),
			DiscountPercentage: new FormControl<number | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			Quantity: new FormControl<number | null | undefined>(undefined),
			SubTotalAmount: new FormControl<number | null | undefined>(undefined),
			TaxAmount: new FormControl<number | null | undefined>(undefined),
			TaxId: new FormControl<number | null | undefined>(undefined),
			TaxPercentage: new FormControl<number | null | undefined>(undefined),
			TotalAmount: new FormControl<number | null | undefined>(undefined),
			WorkTypeId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EstimationUpdateApiModel {

		/** List of estimation attachments */
		Attachments?: Array<EstimationUpdateAttachmentApiModel>;

		/**
		 * The client to whom this estimation is assigned
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ClientId?: number | null;

		/**
		 * Indicate from which estimation this estimation has been cloned from
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ClonedFromId?: number | null;

		/**
		 * Id of the currency for the estimation amounts
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		CurrencyId?: number | null;

		/** Indicates when the estimation will be proclamed as due */
		ExpiresOn?: Date | null;

		/**
		 * estimation id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;

		/** Indicates when the estimation was issued */
		IssuedOn?: Date | null;

		/** List of estimation items */
		Items?: Array<EstimationUpdateItemApiModel>;

		/** Internal note regarding the estimation */
		Notes?: string | null;

		/** Unique estimation number */
		Number?: string | null;

		/** List of enabled payment gateways for this estimation */
		PaymentGateways?: Array<EstimationGatewayApiModel>;

		/** Unique number generated by the buyer */
		PoNumber?: string | null;

		/** Indicate the status of the estimation (paid/unpaid/overdue) */
		Status?: EstimationChangeStatusApiModelStatus | null;

		/** Terms of agreement */
		Terms?: string | null;
	}
	export interface EstimationUpdateApiModelFormProperties {

		/**
		 * The client to whom this estimation is assigned
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ClientId: FormControl<number | null | undefined>,

		/**
		 * Indicate from which estimation this estimation has been cloned from
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ClonedFromId: FormControl<number | null | undefined>,

		/**
		 * Id of the currency for the estimation amounts
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		CurrencyId: FormControl<number | null | undefined>,

		/** Indicates when the estimation will be proclamed as due */
		ExpiresOn: FormControl<Date | null | undefined>,

		/**
		 * estimation id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,

		/** Indicates when the estimation was issued */
		IssuedOn: FormControl<Date | null | undefined>,

		/** Internal note regarding the estimation */
		Notes: FormControl<string | null | undefined>,

		/** Unique estimation number */
		Number: FormControl<string | null | undefined>,

		/** Unique number generated by the buyer */
		PoNumber: FormControl<string | null | undefined>,

		/** Indicate the status of the estimation (paid/unpaid/overdue) */
		Status: FormControl<EstimationChangeStatusApiModelStatus | null | undefined>,

		/** Terms of agreement */
		Terms: FormControl<string | null | undefined>,
	}
	export function CreateEstimationUpdateApiModelFormGroup() {
		return new FormGroup<EstimationUpdateApiModelFormProperties>({
			ClientId: new FormControl<number | null | undefined>(undefined),
			ClonedFromId: new FormControl<number | null | undefined>(undefined),
			CurrencyId: new FormControl<number | null | undefined>(undefined),
			ExpiresOn: new FormControl<Date | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			IssuedOn: new FormControl<Date | null | undefined>(undefined),
			Notes: new FormControl<string | null | undefined>(undefined),
			Number: new FormControl<string | null | undefined>(undefined),
			PoNumber: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<EstimationChangeStatusApiModelStatus | null | undefined>(undefined),
			Terms: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EstimationUpdateAttachmentApiModel {

		/**
		 * Id of estimation attachment
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;

		/** Link to the file */
		Link?: string | null;

		/** Hashed file name to avoid url wildguessing */
		ObfuscatedFileName?: string | null;

		/** Name of the file */
		OriginalFileName?: string | null;

		/**
		 * File size number in bytes
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		Size?: string | null;

		/** Type of the link (Attached or external) */
		Type?: EstimationAttachmentApiModelType | null;
	}
	export interface EstimationUpdateAttachmentApiModelFormProperties {

		/**
		 * Id of estimation attachment
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,

		/** Link to the file */
		Link: FormControl<string | null | undefined>,

		/** Hashed file name to avoid url wildguessing */
		ObfuscatedFileName: FormControl<string | null | undefined>,

		/** Name of the file */
		OriginalFileName: FormControl<string | null | undefined>,

		/**
		 * File size number in bytes
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		Size: FormControl<string | null | undefined>,

		/** Type of the link (Attached or external) */
		Type: FormControl<EstimationAttachmentApiModelType | null | undefined>,
	}
	export function CreateEstimationUpdateAttachmentApiModelFormGroup() {
		return new FormGroup<EstimationUpdateAttachmentApiModelFormProperties>({
			Id: new FormControl<number | null | undefined>(undefined),
			Link: new FormControl<string | null | undefined>(undefined),
			ObfuscatedFileName: new FormControl<string | null | undefined>(undefined),
			OriginalFileName: new FormControl<string | null | undefined>(undefined),
			Size: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<EstimationAttachmentApiModelType | null | undefined>(undefined),
		});

	}

	export interface EstimationUpdateItemApiModel {

		/**
		 * Amount per unit
		 * Type: double
		 */
		Cost?: number | null;

		/** Additional description attached to the estimation item */
		Description?: string | null;

		/**
		 * Discount percentage for the overall amount
		 * Type: double
		 */
		DiscountPercentage?: number | null;

		/**
		 * Id of estimation item
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;

		/**
		 * Quantity in total used for the work type
		 * Type: double
		 */
		Quantity?: number | null;

		/**
		 * Tax applied on the item
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxId?: number | null;

		/**
		 * Task percentage. Ex: 18%
		 * Type: double
		 */
		TaxPercentage?: number | null;

		/**
		 * Work type (Name of the service)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		WorkTypeId?: number | null;
	}
	export interface EstimationUpdateItemApiModelFormProperties {

		/**
		 * Amount per unit
		 * Type: double
		 */
		Cost: FormControl<number | null | undefined>,

		/** Additional description attached to the estimation item */
		Description: FormControl<string | null | undefined>,

		/**
		 * Discount percentage for the overall amount
		 * Type: double
		 */
		DiscountPercentage: FormControl<number | null | undefined>,

		/**
		 * Id of estimation item
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,

		/**
		 * Quantity in total used for the work type
		 * Type: double
		 */
		Quantity: FormControl<number | null | undefined>,

		/**
		 * Tax applied on the item
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxId: FormControl<number | null | undefined>,

		/**
		 * Task percentage. Ex: 18%
		 * Type: double
		 */
		TaxPercentage: FormControl<number | null | undefined>,

		/**
		 * Work type (Name of the service)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		WorkTypeId: FormControl<number | null | undefined>,
	}
	export function CreateEstimationUpdateItemApiModelFormGroup() {
		return new FormGroup<EstimationUpdateItemApiModelFormProperties>({
			Cost: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DiscountPercentage: new FormControl<number | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			Quantity: new FormControl<number | null | undefined>(undefined),
			TaxId: new FormControl<number | null | undefined>(undefined),
			TaxPercentage: new FormControl<number | null | undefined>(undefined),
			WorkTypeId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EstimationUriApiModel {

		/** Unique link to the estimation */
		Link?: string | null;
	}
	export interface EstimationUriApiModelFormProperties {

		/** Unique link to the estimation */
		Link: FormControl<string | null | undefined>,
	}
	export function CreateEstimationUriApiModelFormGroup() {
		return new FormGroup<EstimationUriApiModelFormProperties>({
			Link: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExternalConnection {
		AccessToken?: string | null;
		AccessTokenSecret?: string | null;
		Data?: string | null;
		ExpiresOn?: Date | null;
		ExternalUserId?: string | null;
		ExternalUsername?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Id?: number | null;
		Provider?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UserId?: number | null;
	}
	export interface ExternalConnectionFormProperties {
		AccessToken: FormControl<string | null | undefined>,
		AccessTokenSecret: FormControl<string | null | undefined>,
		Data: FormControl<string | null | undefined>,
		ExpiresOn: FormControl<Date | null | undefined>,
		ExternalUserId: FormControl<string | null | undefined>,
		ExternalUsername: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Id: FormControl<number | null | undefined>,
		Provider: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UserId: FormControl<number | null | undefined>,
	}
	export function CreateExternalConnectionFormGroup() {
		return new FormGroup<ExternalConnectionFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined),
			AccessTokenSecret: new FormControl<string | null | undefined>(undefined),
			Data: new FormControl<string | null | undefined>(undefined),
			ExpiresOn: new FormControl<Date | null | undefined>(undefined),
			ExternalUserId: new FormControl<string | null | undefined>(undefined),
			ExternalUsername: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			Provider: new FormControl<string | null | undefined>(undefined),
			UserId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface IErrorInfo {
		Code?: string | null;
		FaultMessage?: string | null;
		Group?: string | null;
		UserVisibleMessage?: string | null;
	}
	export interface IErrorInfoFormProperties {
		Code: FormControl<string | null | undefined>,
		FaultMessage: FormControl<string | null | undefined>,
		Group: FormControl<string | null | undefined>,
		UserVisibleMessage: FormControl<string | null | undefined>,
	}
	export function CreateIErrorInfoFormGroup() {
		return new FormGroup<IErrorInfoFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined),
			FaultMessage: new FormControl<string | null | undefined>(undefined),
			Group: new FormControl<string | null | undefined>(undefined),
			UserVisibleMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Invoice {
		AccessToken?: string | null;
		Activities?: Array<Activity>;
		Attachments?: Array<InvoiceAttachment>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ClientId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ClonedFromId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		CurrencyId?: number | null;

		/** Type: double */
		DiscountAmount?: number | null;
		Duedate?: Date | null;
		EnablePartialPayments?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		EstimationId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Id?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		InvoiceCategoryId?: number | null;
		IsDigitallySigned?: boolean | null;
		IssuedOn?: Date | null;
		Items?: Array<InvoiceItem>;
		Notes?: string | null;
		Number?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OrderId?: number | null;
		PaymentGateways?: Array<PaymentGatewayForInvoice>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PaymentLinkId?: number | null;
		Payments?: Array<Payment>;
		PoNumber?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RecurringProfileId?: number | null;
		ShouldSendReminders?: boolean | null;
		Status?: ChangeStatusApiModelStatus | null;

		/** Type: double */
		SubTotalAmount?: number | null;

		/** Type: double */
		TaxAmount?: number | null;
		Terms?: string | null;

		/** Type: double */
		TotalAmount?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UserId?: number | null;
	}
	export interface InvoiceFormProperties {
		AccessToken: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ClientId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ClonedFromId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		CurrencyId: FormControl<number | null | undefined>,

		/** Type: double */
		DiscountAmount: FormControl<number | null | undefined>,
		Duedate: FormControl<Date | null | undefined>,
		EnablePartialPayments: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		EstimationId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Id: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		InvoiceCategoryId: FormControl<number | null | undefined>,
		IsDigitallySigned: FormControl<boolean | null | undefined>,
		IssuedOn: FormControl<Date | null | undefined>,
		Notes: FormControl<string | null | undefined>,
		Number: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OrderId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PaymentLinkId: FormControl<number | null | undefined>,
		PoNumber: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RecurringProfileId: FormControl<number | null | undefined>,
		ShouldSendReminders: FormControl<boolean | null | undefined>,
		Status: FormControl<ChangeStatusApiModelStatus | null | undefined>,

		/** Type: double */
		SubTotalAmount: FormControl<number | null | undefined>,

		/** Type: double */
		TaxAmount: FormControl<number | null | undefined>,
		Terms: FormControl<string | null | undefined>,

		/** Type: double */
		TotalAmount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UserId: FormControl<number | null | undefined>,
	}
	export function CreateInvoiceFormGroup() {
		return new FormGroup<InvoiceFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined),
			ClientId: new FormControl<number | null | undefined>(undefined),
			ClonedFromId: new FormControl<number | null | undefined>(undefined),
			CurrencyId: new FormControl<number | null | undefined>(undefined),
			DiscountAmount: new FormControl<number | null | undefined>(undefined),
			Duedate: new FormControl<Date | null | undefined>(undefined),
			EnablePartialPayments: new FormControl<boolean | null | undefined>(undefined),
			EstimationId: new FormControl<number | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			InvoiceCategoryId: new FormControl<number | null | undefined>(undefined),
			IsDigitallySigned: new FormControl<boolean | null | undefined>(undefined),
			IssuedOn: new FormControl<Date | null | undefined>(undefined),
			Notes: new FormControl<string | null | undefined>(undefined),
			Number: new FormControl<string | null | undefined>(undefined),
			OrderId: new FormControl<number | null | undefined>(undefined),
			PaymentLinkId: new FormControl<number | null | undefined>(undefined),
			PoNumber: new FormControl<string | null | undefined>(undefined),
			RecurringProfileId: new FormControl<number | null | undefined>(undefined),
			ShouldSendReminders: new FormControl<boolean | null | undefined>(undefined),
			Status: new FormControl<ChangeStatusApiModelStatus | null | undefined>(undefined),
			SubTotalAmount: new FormControl<number | null | undefined>(undefined),
			TaxAmount: new FormControl<number | null | undefined>(undefined),
			Terms: new FormControl<string | null | undefined>(undefined),
			TotalAmount: new FormControl<number | null | undefined>(undefined),
			UserId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface InvoiceAttachment {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Id?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		InvoiceId?: number | null;
		Link?: string | null;
		ObfuscatedFileName?: string | null;
		OriginalFileName?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		Size?: string | null;
		Type?: EstimationAttachmentApiModelType | null;
	}
	export interface InvoiceAttachmentFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Id: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		InvoiceId: FormControl<number | null | undefined>,
		Link: FormControl<string | null | undefined>,
		ObfuscatedFileName: FormControl<string | null | undefined>,
		OriginalFileName: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		Size: FormControl<string | null | undefined>,
		Type: FormControl<EstimationAttachmentApiModelType | null | undefined>,
	}
	export function CreateInvoiceAttachmentFormGroup() {
		return new FormGroup<InvoiceAttachmentFormProperties>({
			Id: new FormControl<number | null | undefined>(undefined),
			InvoiceId: new FormControl<number | null | undefined>(undefined),
			Link: new FormControl<string | null | undefined>(undefined),
			ObfuscatedFileName: new FormControl<string | null | undefined>(undefined),
			OriginalFileName: new FormControl<string | null | undefined>(undefined),
			Size: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<EstimationAttachmentApiModelType | null | undefined>(undefined),
		});

	}

	export interface InvoiceItem {

		/** Type: double */
		Cost?: number | null;
		Description?: string | null;

		/** Type: double */
		DiscountAmount?: number | null;

		/** Type: double */
		DiscountPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Id?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		InvoiceId?: number | null;

		/** Type: double */
		Quantity?: number | null;

		/** Type: double */
		SubTotalAmount?: number | null;

		/** Type: double */
		TaxAmount?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TaxId?: number | null;

		/** Type: double */
		TaxPercentage?: number | null;

		/** Type: double */
		TotalAmount?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		WorkTypeId?: number | null;
	}
	export interface InvoiceItemFormProperties {

		/** Type: double */
		Cost: FormControl<number | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Type: double */
		DiscountAmount: FormControl<number | null | undefined>,

		/** Type: double */
		DiscountPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Id: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		InvoiceId: FormControl<number | null | undefined>,

		/** Type: double */
		Quantity: FormControl<number | null | undefined>,

		/** Type: double */
		SubTotalAmount: FormControl<number | null | undefined>,

		/** Type: double */
		TaxAmount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TaxId: FormControl<number | null | undefined>,

		/** Type: double */
		TaxPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		TotalAmount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		WorkTypeId: FormControl<number | null | undefined>,
	}
	export function CreateInvoiceItemFormGroup() {
		return new FormGroup<InvoiceItemFormProperties>({
			Cost: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DiscountAmount: new FormControl<number | null | undefined>(undefined),
			DiscountPercentage: new FormControl<number | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			InvoiceId: new FormControl<number | null | undefined>(undefined),
			Quantity: new FormControl<number | null | undefined>(undefined),
			SubTotalAmount: new FormControl<number | null | undefined>(undefined),
			TaxAmount: new FormControl<number | null | undefined>(undefined),
			TaxId: new FormControl<number | null | undefined>(undefined),
			TaxPercentage: new FormControl<number | null | undefined>(undefined),
			TotalAmount: new FormControl<number | null | undefined>(undefined),
			WorkTypeId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PaymentGatewayForInvoice {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Id?: number | null;
		Name?: string | null;
	}
	export interface PaymentGatewayForInvoiceFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Id: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreatePaymentGatewayForInvoiceFormGroup() {
		return new FormGroup<PaymentGatewayForInvoiceFormProperties>({
			Id: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Payment {

		/** Type: double */
		Amount?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Id?: number | null;
		Invoice?: Invoice;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		InvoiceId?: number | null;
		IsAutomatic?: boolean | null;
		Note?: string | null;
		PaidOn?: Date | null;
		ReferenceId?: string | null;
		Type?: PaymentType | null;
	}
	export interface PaymentFormProperties {

		/** Type: double */
		Amount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Id: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		InvoiceId: FormControl<number | null | undefined>,
		IsAutomatic: FormControl<boolean | null | undefined>,
		Note: FormControl<string | null | undefined>,
		PaidOn: FormControl<Date | null | undefined>,
		ReferenceId: FormControl<string | null | undefined>,
		Type: FormControl<PaymentType | null | undefined>,
	}
	export function CreatePaymentFormGroup() {
		return new FormGroup<PaymentFormProperties>({
			Amount: new FormControl<number | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			InvoiceId: new FormControl<number | null | undefined>(undefined),
			IsAutomatic: new FormControl<boolean | null | undefined>(undefined),
			Note: new FormControl<string | null | undefined>(undefined),
			PaidOn: new FormControl<Date | null | undefined>(undefined),
			ReferenceId: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<PaymentType | null | undefined>(undefined),
		});

	}

	export enum PaymentType { Other = 'Other', Paypal = 'Paypal', Stripe = 'Stripe', Payoneer = 'Payoneer', Bank = 'Bank', Cash = 'Cash', Cheque = 'Cheque', Ach = 'Ach', Sepa = 'Sepa', Square = 'Square', KlikAndPay = 'KlikAndPay', Razorpay = 'Razorpay', Wepay = 'Wepay', Halkbank = 'Halkbank', TwoCheckout = 'TwoCheckout', PaymentWall = 'PaymentWall', BamboraEU = 'BamboraEU', BamboraNA = 'BamboraNA', Nlb = 'Nlb', AuthorizeNet = 'AuthorizeNet', Braintree = 'Braintree' }

	export interface InvoiceActivityApiModel {

		/**
		 * Id of invoice activity
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;

		/** Indicates to which invoice this activity refers to */
		InvoiceNumber?: string | null;

		/** Url which point out to a certain activity action. Ex: Click to view the payment */
		Link?: string | null;

		/** Message associated with the activity */
		Message?: string | null;

		/** Type of the activity */
		Type?: ActivityType | null;
	}
	export interface InvoiceActivityApiModelFormProperties {

		/**
		 * Id of invoice activity
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,

		/** Indicates to which invoice this activity refers to */
		InvoiceNumber: FormControl<string | null | undefined>,

		/** Url which point out to a certain activity action. Ex: Click to view the payment */
		Link: FormControl<string | null | undefined>,

		/** Message associated with the activity */
		Message: FormControl<string | null | undefined>,

		/** Type of the activity */
		Type: FormControl<ActivityType | null | undefined>,
	}
	export function CreateInvoiceActivityApiModelFormGroup() {
		return new FormGroup<InvoiceActivityApiModelFormProperties>({
			Id: new FormControl<number | null | undefined>(undefined),
			InvoiceNumber: new FormControl<string | null | undefined>(undefined),
			Link: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ActivityType | null | undefined>(undefined),
		});

	}

	export interface InvoiceAttachmentApiModel {

		/**
		 * Id of invoice attachment
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;

		/** Link to the file */
		Link?: string | null;

		/** Hashed file name to avoid url wildguessing */
		ObfuscatedFileName?: string | null;

		/** Name of the file */
		OriginalFileName?: string | null;

		/**
		 * File size number in bytes
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		Size?: string | null;

		/** Type of the link (Attached or external) */
		Type?: EstimationAttachmentApiModelType | null;
	}
	export interface InvoiceAttachmentApiModelFormProperties {

		/**
		 * Id of invoice attachment
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,

		/** Link to the file */
		Link: FormControl<string | null | undefined>,

		/** Hashed file name to avoid url wildguessing */
		ObfuscatedFileName: FormControl<string | null | undefined>,

		/** Name of the file */
		OriginalFileName: FormControl<string | null | undefined>,

		/**
		 * File size number in bytes
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		Size: FormControl<string | null | undefined>,

		/** Type of the link (Attached or external) */
		Type: FormControl<EstimationAttachmentApiModelType | null | undefined>,
	}
	export function CreateInvoiceAttachmentApiModelFormGroup() {
		return new FormGroup<InvoiceAttachmentApiModelFormProperties>({
			Id: new FormControl<number | null | undefined>(undefined),
			Link: new FormControl<string | null | undefined>(undefined),
			ObfuscatedFileName: new FormControl<string | null | undefined>(undefined),
			OriginalFileName: new FormControl<string | null | undefined>(undefined),
			Size: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<EstimationAttachmentApiModelType | null | undefined>(undefined),
		});

	}

	export interface InvoiceCategoryApiModel {

		/**
		 * Entity id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;

		/** Category name */
		Name?: string | null;
	}
	export interface InvoiceCategoryApiModelFormProperties {

		/**
		 * Entity id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,

		/** Category name */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateInvoiceCategoryApiModelFormGroup() {
		return new FormGroup<InvoiceCategoryApiModelFormProperties>({
			Id: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvoiceCategoryCreateApiModel {

		/** Category name */
		Name?: string | null;
	}
	export interface InvoiceCategoryCreateApiModelFormProperties {

		/** Category name */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateInvoiceCategoryCreateApiModelFormGroup() {
		return new FormGroup<InvoiceCategoryCreateApiModelFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvoiceCategoryDeleteApiModel {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Id?: number | null;
	}
	export interface InvoiceCategoryDeleteApiModelFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Id: FormControl<number | null | undefined>,
	}
	export function CreateInvoiceCategoryDeleteApiModelFormGroup() {
		return new FormGroup<InvoiceCategoryDeleteApiModelFormProperties>({
			Id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface InvoiceCategoryUpdateApiModel {

		/**
		 * Entity id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;

		/** Category name */
		Name?: string | null;
	}
	export interface InvoiceCategoryUpdateApiModelFormProperties {

		/**
		 * Entity id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,

		/** Category name */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateInvoiceCategoryUpdateApiModelFormGroup() {
		return new FormGroup<InvoiceCategoryUpdateApiModelFormProperties>({
			Id: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvoiceCreateApiModel {

		/** List of invoice attachments */
		Attachments?: Array<InvoiceCreateAttachmentApiModel>;

		/**
		 * The client to whom this invoice is assigned
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ClientId?: number | null;

		/**
		 * Indicate from which invoice this invoice has been cloned from
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ClonedFromId?: number | null;

		/**
		 * Id of the currency for the invoice amounts
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		CurrencyId?: number | null;

		/** Indicates when the invoice will be proclamed as due */
		Duedate?: Date | null;

		/**
		 * Hold the id of the invoice category
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		InvoiceCategoryId?: number | null;

		/** Indicates when the invoice was issued */
		IssuedOn?: Date | null;

		/** List of invoice items */
		Items?: Array<InvoiceCreateItemApiModel>;

		/** Internal note regarding the invoice */
		Notes?: string | null;

		/** Unique invoice number */
		Number?: string | null;

		/** List of enabled payment gateways for this invoice */
		PaymentGateways?: Array<InvoiceGatewayApiModel>;

		/** Unique number generated by the buyer */
		PoNumber?: string | null;

		/** Definition of invoice recurring profile */
		RecurringProfile?: InvoiceRecurringApiModel;

		/**
		 * Hold the id of the recurring profile
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		RecurringProfileId?: number | null;

		/** Should send email reminders to client? */
		ShouldSendReminders?: boolean | null;

		/** Indicate the status of the invoice (paid/unpaid/overdue) */
		Status?: ChangeStatusApiModelStatus | null;

		/** Terms of agreement */
		Terms?: string | null;
	}
	export interface InvoiceCreateApiModelFormProperties {

		/**
		 * The client to whom this invoice is assigned
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ClientId: FormControl<number | null | undefined>,

		/**
		 * Indicate from which invoice this invoice has been cloned from
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ClonedFromId: FormControl<number | null | undefined>,

		/**
		 * Id of the currency for the invoice amounts
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		CurrencyId: FormControl<number | null | undefined>,

		/** Indicates when the invoice will be proclamed as due */
		Duedate: FormControl<Date | null | undefined>,

		/**
		 * Hold the id of the invoice category
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		InvoiceCategoryId: FormControl<number | null | undefined>,

		/** Indicates when the invoice was issued */
		IssuedOn: FormControl<Date | null | undefined>,

		/** Internal note regarding the invoice */
		Notes: FormControl<string | null | undefined>,

		/** Unique invoice number */
		Number: FormControl<string | null | undefined>,

		/** Unique number generated by the buyer */
		PoNumber: FormControl<string | null | undefined>,

		/**
		 * Hold the id of the recurring profile
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		RecurringProfileId: FormControl<number | null | undefined>,

		/** Should send email reminders to client? */
		ShouldSendReminders: FormControl<boolean | null | undefined>,

		/** Indicate the status of the invoice (paid/unpaid/overdue) */
		Status: FormControl<ChangeStatusApiModelStatus | null | undefined>,

		/** Terms of agreement */
		Terms: FormControl<string | null | undefined>,
	}
	export function CreateInvoiceCreateApiModelFormGroup() {
		return new FormGroup<InvoiceCreateApiModelFormProperties>({
			ClientId: new FormControl<number | null | undefined>(undefined),
			ClonedFromId: new FormControl<number | null | undefined>(undefined),
			CurrencyId: new FormControl<number | null | undefined>(undefined),
			Duedate: new FormControl<Date | null | undefined>(undefined),
			InvoiceCategoryId: new FormControl<number | null | undefined>(undefined),
			IssuedOn: new FormControl<Date | null | undefined>(undefined),
			Notes: new FormControl<string | null | undefined>(undefined),
			Number: new FormControl<string | null | undefined>(undefined),
			PoNumber: new FormControl<string | null | undefined>(undefined),
			RecurringProfileId: new FormControl<number | null | undefined>(undefined),
			ShouldSendReminders: new FormControl<boolean | null | undefined>(undefined),
			Status: new FormControl<ChangeStatusApiModelStatus | null | undefined>(undefined),
			Terms: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvoiceCreateAttachmentApiModel {

		/** Link to the file */
		Link?: string | null;

		/** Hashed file name to avoid url wildguessing */
		ObfuscatedFileName?: string | null;

		/** Name of the file */
		OriginalFileName?: string | null;

		/**
		 * File size number in bytes
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		Size?: string | null;

		/** Type of the link (Attached or external) */
		Type?: EstimationAttachmentApiModelType | null;
	}
	export interface InvoiceCreateAttachmentApiModelFormProperties {

		/** Link to the file */
		Link: FormControl<string | null | undefined>,

		/** Hashed file name to avoid url wildguessing */
		ObfuscatedFileName: FormControl<string | null | undefined>,

		/** Name of the file */
		OriginalFileName: FormControl<string | null | undefined>,

		/**
		 * File size number in bytes
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		Size: FormControl<string | null | undefined>,

		/** Type of the link (Attached or external) */
		Type: FormControl<EstimationAttachmentApiModelType | null | undefined>,
	}
	export function CreateInvoiceCreateAttachmentApiModelFormGroup() {
		return new FormGroup<InvoiceCreateAttachmentApiModelFormProperties>({
			Link: new FormControl<string | null | undefined>(undefined),
			ObfuscatedFileName: new FormControl<string | null | undefined>(undefined),
			OriginalFileName: new FormControl<string | null | undefined>(undefined),
			Size: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<EstimationAttachmentApiModelType | null | undefined>(undefined),
		});

	}

	export interface InvoiceCreateItemApiModel {

		/**
		 * Amount per unit
		 * Type: double
		 */
		Cost?: number | null;

		/** Additional description attached to the invoice item */
		Description?: string | null;

		/**
		 * Discount percentage for the overall amount
		 * Type: double
		 */
		DiscountPercentage?: number | null;

		/**
		 * Quantity in total used for the work type
		 * Type: double
		 */
		Quantity?: number | null;

		/**
		 * Tax applied on the item
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxId?: number | null;

		/**
		 * Task percentage. Ex: 18%
		 * Type: double
		 */
		TaxPercentage?: number | null;

		/**
		 * Work type (Name of the service)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		WorkTypeId?: number | null;
	}
	export interface InvoiceCreateItemApiModelFormProperties {

		/**
		 * Amount per unit
		 * Type: double
		 */
		Cost: FormControl<number | null | undefined>,

		/** Additional description attached to the invoice item */
		Description: FormControl<string | null | undefined>,

		/**
		 * Discount percentage for the overall amount
		 * Type: double
		 */
		DiscountPercentage: FormControl<number | null | undefined>,

		/**
		 * Quantity in total used for the work type
		 * Type: double
		 */
		Quantity: FormControl<number | null | undefined>,

		/**
		 * Tax applied on the item
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxId: FormControl<number | null | undefined>,

		/**
		 * Task percentage. Ex: 18%
		 * Type: double
		 */
		TaxPercentage: FormControl<number | null | undefined>,

		/**
		 * Work type (Name of the service)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		WorkTypeId: FormControl<number | null | undefined>,
	}
	export function CreateInvoiceCreateItemApiModelFormGroup() {
		return new FormGroup<InvoiceCreateItemApiModelFormProperties>({
			Cost: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DiscountPercentage: new FormControl<number | null | undefined>(undefined),
			Quantity: new FormControl<number | null | undefined>(undefined),
			TaxId: new FormControl<number | null | undefined>(undefined),
			TaxPercentage: new FormControl<number | null | undefined>(undefined),
			WorkTypeId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface InvoiceGatewayApiModel {

		/** Name of the payment gateway */
		Name?: string | null;
	}
	export interface InvoiceGatewayApiModelFormProperties {

		/** Name of the payment gateway */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateInvoiceGatewayApiModelFormGroup() {
		return new FormGroup<InvoiceGatewayApiModelFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition of invoice recurring profile */
	export interface InvoiceRecurringApiModel {

		/**
		 * Day of month when the recurrance should happen
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		DayOfMonth?: number | null;

		/** Day when the recurrance should happen */
		DayOfWeek?: InvoiceRecurringApiModelDayOfWeek | null;

		/**
		 * Total number of days for the client to pay the invoice after issuing it
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		DueDateInDays?: number | null;

		/** Indcate the date when the recurrance should stop */
		EndOfRecurrance?: Date | null;

		/**
		 * Month when the recurrance should happen
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Month?: number | null;

		/** How often the recurrance occurs */
		RecurrancePattern?: InvoiceRecurringApiModelRecurrancePattern | null;

		/**
		 * Recurring every [value] RecurrancePattern
		 * Ex: Recur every 1 week
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		RecurranceValue?: number | null;

		/** Indcate the date when the recurrance has started */
		StartOfRecurrance?: Date | null;

		/** The status of the recurrance */
		Status?: InvoiceRecurringApiModelStatus | null;

		/**
		 * Title of the recurring profile.
		 * Ex: BRAND PACKAGE - 2017-08-16 - 2018-08-16
		 */
		Title?: string | null;
	}

	/** Definition of invoice recurring profile */
	export interface InvoiceRecurringApiModelFormProperties {

		/**
		 * Day of month when the recurrance should happen
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		DayOfMonth: FormControl<number | null | undefined>,

		/** Day when the recurrance should happen */
		DayOfWeek: FormControl<InvoiceRecurringApiModelDayOfWeek | null | undefined>,

		/**
		 * Total number of days for the client to pay the invoice after issuing it
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		DueDateInDays: FormControl<number | null | undefined>,

		/** Indcate the date when the recurrance should stop */
		EndOfRecurrance: FormControl<Date | null | undefined>,

		/**
		 * Month when the recurrance should happen
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Month: FormControl<number | null | undefined>,

		/** How often the recurrance occurs */
		RecurrancePattern: FormControl<InvoiceRecurringApiModelRecurrancePattern | null | undefined>,

		/**
		 * Recurring every [value] RecurrancePattern
		 * Ex: Recur every 1 week
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		RecurranceValue: FormControl<number | null | undefined>,

		/** Indcate the date when the recurrance has started */
		StartOfRecurrance: FormControl<Date | null | undefined>,

		/** The status of the recurrance */
		Status: FormControl<InvoiceRecurringApiModelStatus | null | undefined>,

		/**
		 * Title of the recurring profile.
		 * Ex: BRAND PACKAGE - 2017-08-16 - 2018-08-16
		 */
		Title: FormControl<string | null | undefined>,
	}
	export function CreateInvoiceRecurringApiModelFormGroup() {
		return new FormGroup<InvoiceRecurringApiModelFormProperties>({
			DayOfMonth: new FormControl<number | null | undefined>(undefined),
			DayOfWeek: new FormControl<InvoiceRecurringApiModelDayOfWeek | null | undefined>(undefined),
			DueDateInDays: new FormControl<number | null | undefined>(undefined),
			EndOfRecurrance: new FormControl<Date | null | undefined>(undefined),
			Month: new FormControl<number | null | undefined>(undefined),
			RecurrancePattern: new FormControl<InvoiceRecurringApiModelRecurrancePattern | null | undefined>(undefined),
			RecurranceValue: new FormControl<number | null | undefined>(undefined),
			StartOfRecurrance: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<InvoiceRecurringApiModelStatus | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InvoiceRecurringApiModelDayOfWeek { Sunday = 'Sunday', Monday = 'Monday', Tuesday = 'Tuesday', Wednesday = 'Wednesday', Thursday = 'Thursday', Friday = 'Friday', Saturday = 'Saturday' }

	export enum InvoiceRecurringApiModelRecurrancePattern { Daily = 'Daily', Weekly = 'Weekly', Monthly = 'Monthly', Yearly = 'Yearly' }

	export enum InvoiceRecurringApiModelStatus { Pending = 'Pending', Active = 'Active', Cancelled = 'Cancelled', Finished = 'Finished' }

	export interface InvoiceDeleteApiModel {

		/**
		 * Id of invoice to be deleted
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;
	}
	export interface InvoiceDeleteApiModelFormProperties {

		/**
		 * Id of invoice to be deleted
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,
	}
	export function CreateInvoiceDeleteApiModelFormGroup() {
		return new FormGroup<InvoiceDeleteApiModelFormProperties>({
			Id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface InvoiceDetailsApiModel {

		/** Security access token used for accessing the invoice anonymously */
		AccessToken?: string | null;
		Client?: ClientDetailsApiModel;

		/**
		 * Indicate from which invoice this invoice has been cloned from
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ClonedFromId?: number | null;
		Currency?: CurrencyDetailsApiModel;

		/**
		 * Amount that goes as a discount
		 * Type: double
		 */
		DiscountAmount?: number | null;

		/** Indicates when the invoice will be proclamed as due */
		Duedate?: Date | null;

		/** Indicate that the invoice allows the user to pay the invoice partially */
		EnablePartialPayments?: boolean | null;

		/**
		 * Invoice id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;

		/**
		 * Hold the id of the invoice category
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		InvoiceCategoryId?: number | null;

		/** Indicates when the invoice was issued */
		IssuedOn?: Date | null;

		/** Internal note regarding the invoice */
		Notes?: string | null;

		/** Unique invoice number */
		Number?: string | null;

		/** Unique number generated by the buyer */
		PoNumber?: string | null;

		/** Definition of invoice recurring profile */
		RecurringProfile?: InvoiceRecurringApiModel;

		/**
		 * Hold the id of the recurring profile
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		RecurringProfileId?: number | null;

		/** Should send email reminders to client? */
		ShouldSendReminders?: boolean | null;

		/** Indicate the status of the invoice (paid/unpaid/overdue) */
		Status?: ChangeStatusApiModelStatus | null;

		/**
		 * Total amount of the invoice without tax
		 * Type: double
		 */
		SubTotalAmount?: number | null;

		/**
		 * Amount that goes to the tax
		 * Type: double
		 */
		TaxAmount?: number | null;

		/** Terms of agreement */
		Terms?: string | null;

		/**
		 * Total amount of the invoice with tax
		 * Type: double
		 */
		TotalAmount?: number | null;
	}
	export interface InvoiceDetailsApiModelFormProperties {

		/** Security access token used for accessing the invoice anonymously */
		AccessToken: FormControl<string | null | undefined>,

		/**
		 * Indicate from which invoice this invoice has been cloned from
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ClonedFromId: FormControl<number | null | undefined>,

		/**
		 * Amount that goes as a discount
		 * Type: double
		 */
		DiscountAmount: FormControl<number | null | undefined>,

		/** Indicates when the invoice will be proclamed as due */
		Duedate: FormControl<Date | null | undefined>,

		/** Indicate that the invoice allows the user to pay the invoice partially */
		EnablePartialPayments: FormControl<boolean | null | undefined>,

		/**
		 * Invoice id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,

		/**
		 * Hold the id of the invoice category
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		InvoiceCategoryId: FormControl<number | null | undefined>,

		/** Indicates when the invoice was issued */
		IssuedOn: FormControl<Date | null | undefined>,

		/** Internal note regarding the invoice */
		Notes: FormControl<string | null | undefined>,

		/** Unique invoice number */
		Number: FormControl<string | null | undefined>,

		/** Unique number generated by the buyer */
		PoNumber: FormControl<string | null | undefined>,

		/**
		 * Hold the id of the recurring profile
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		RecurringProfileId: FormControl<number | null | undefined>,

		/** Should send email reminders to client? */
		ShouldSendReminders: FormControl<boolean | null | undefined>,

		/** Indicate the status of the invoice (paid/unpaid/overdue) */
		Status: FormControl<ChangeStatusApiModelStatus | null | undefined>,

		/**
		 * Total amount of the invoice without tax
		 * Type: double
		 */
		SubTotalAmount: FormControl<number | null | undefined>,

		/**
		 * Amount that goes to the tax
		 * Type: double
		 */
		TaxAmount: FormControl<number | null | undefined>,

		/** Terms of agreement */
		Terms: FormControl<string | null | undefined>,

		/**
		 * Total amount of the invoice with tax
		 * Type: double
		 */
		TotalAmount: FormControl<number | null | undefined>,
	}
	export function CreateInvoiceDetailsApiModelFormGroup() {
		return new FormGroup<InvoiceDetailsApiModelFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined),
			ClonedFromId: new FormControl<number | null | undefined>(undefined),
			DiscountAmount: new FormControl<number | null | undefined>(undefined),
			Duedate: new FormControl<Date | null | undefined>(undefined),
			EnablePartialPayments: new FormControl<boolean | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			InvoiceCategoryId: new FormControl<number | null | undefined>(undefined),
			IssuedOn: new FormControl<Date | null | undefined>(undefined),
			Notes: new FormControl<string | null | undefined>(undefined),
			Number: new FormControl<string | null | undefined>(undefined),
			PoNumber: new FormControl<string | null | undefined>(undefined),
			RecurringProfileId: new FormControl<number | null | undefined>(undefined),
			ShouldSendReminders: new FormControl<boolean | null | undefined>(undefined),
			Status: new FormControl<ChangeStatusApiModelStatus | null | undefined>(undefined),
			SubTotalAmount: new FormControl<number | null | undefined>(undefined),
			TaxAmount: new FormControl<number | null | undefined>(undefined),
			Terms: new FormControl<string | null | undefined>(undefined),
			TotalAmount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface InvoiceFullDetailsApiModel {

		/** Security access token used for accessing the invoice anonymously */
		AccessToken?: string | null;

		/** List of invoice activities. Invoice audit log */
		Activities?: Array<InvoiceActivityApiModel>;

		/** List of invoice attachments */
		Attachments?: Array<InvoiceAttachmentApiModel>;
		Client?: ClientDetailsApiModel;

		/**
		 * Indicate from which invoice this invoice has been cloned from
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ClonedFromId?: number | null;
		Currency?: CurrencyDetailsApiModel;

		/**
		 * Amount that goes as a discount
		 * Type: double
		 */
		DiscountAmount?: number | null;

		/** Indicates when the invoice will be proclamed as due */
		Duedate?: Date | null;

		/** Indicate that the invoice allows the user to pay the invoice partially */
		EnablePartialPayments?: boolean | null;

		/**
		 * Invoice id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;

		/**
		 * Hold the id of the invoice category
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		InvoiceCategoryId?: number | null;

		/** Indicates when the invoice was issued */
		IssuedOn?: Date | null;

		/** List of invoice items */
		Items?: Array<InvoiceItemApiModel>;

		/** Internal note regarding the invoice */
		Notes?: string | null;

		/** Unique invoice number */
		Number?: string | null;

		/** List of enabled payment gateways for this invoice */
		PaymentGateways?: Array<InvoiceGatewayApiModel>;

		/** List of invoice payments */
		Payments?: Array<InvoicePaymentApiModel>;

		/** Unique number generated by the buyer */
		PoNumber?: string | null;

		/** Definition of invoice recurring profile */
		RecurringProfile?: InvoiceRecurringApiModel;

		/**
		 * Hold the id of the recurring profile
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		RecurringProfileId?: number | null;

		/** Should send email reminders to client? */
		ShouldSendReminders?: boolean | null;

		/** Indicate the status of the invoice (paid/unpaid/overdue) */
		Status?: ChangeStatusApiModelStatus | null;

		/**
		 * Total amount of the invoice without tax
		 * Type: double
		 */
		SubTotalAmount?: number | null;

		/**
		 * Amount that goes to the tax
		 * Type: double
		 */
		TaxAmount?: number | null;

		/** Terms of agreement */
		Terms?: string | null;

		/**
		 * Total amount of the invoice with tax
		 * Type: double
		 */
		TotalAmount?: number | null;
	}
	export interface InvoiceFullDetailsApiModelFormProperties {

		/** Security access token used for accessing the invoice anonymously */
		AccessToken: FormControl<string | null | undefined>,

		/**
		 * Indicate from which invoice this invoice has been cloned from
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ClonedFromId: FormControl<number | null | undefined>,

		/**
		 * Amount that goes as a discount
		 * Type: double
		 */
		DiscountAmount: FormControl<number | null | undefined>,

		/** Indicates when the invoice will be proclamed as due */
		Duedate: FormControl<Date | null | undefined>,

		/** Indicate that the invoice allows the user to pay the invoice partially */
		EnablePartialPayments: FormControl<boolean | null | undefined>,

		/**
		 * Invoice id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,

		/**
		 * Hold the id of the invoice category
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		InvoiceCategoryId: FormControl<number | null | undefined>,

		/** Indicates when the invoice was issued */
		IssuedOn: FormControl<Date | null | undefined>,

		/** Internal note regarding the invoice */
		Notes: FormControl<string | null | undefined>,

		/** Unique invoice number */
		Number: FormControl<string | null | undefined>,

		/** Unique number generated by the buyer */
		PoNumber: FormControl<string | null | undefined>,

		/**
		 * Hold the id of the recurring profile
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		RecurringProfileId: FormControl<number | null | undefined>,

		/** Should send email reminders to client? */
		ShouldSendReminders: FormControl<boolean | null | undefined>,

		/** Indicate the status of the invoice (paid/unpaid/overdue) */
		Status: FormControl<ChangeStatusApiModelStatus | null | undefined>,

		/**
		 * Total amount of the invoice without tax
		 * Type: double
		 */
		SubTotalAmount: FormControl<number | null | undefined>,

		/**
		 * Amount that goes to the tax
		 * Type: double
		 */
		TaxAmount: FormControl<number | null | undefined>,

		/** Terms of agreement */
		Terms: FormControl<string | null | undefined>,

		/**
		 * Total amount of the invoice with tax
		 * Type: double
		 */
		TotalAmount: FormControl<number | null | undefined>,
	}
	export function CreateInvoiceFullDetailsApiModelFormGroup() {
		return new FormGroup<InvoiceFullDetailsApiModelFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined),
			ClonedFromId: new FormControl<number | null | undefined>(undefined),
			DiscountAmount: new FormControl<number | null | undefined>(undefined),
			Duedate: new FormControl<Date | null | undefined>(undefined),
			EnablePartialPayments: new FormControl<boolean | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			InvoiceCategoryId: new FormControl<number | null | undefined>(undefined),
			IssuedOn: new FormControl<Date | null | undefined>(undefined),
			Notes: new FormControl<string | null | undefined>(undefined),
			Number: new FormControl<string | null | undefined>(undefined),
			PoNumber: new FormControl<string | null | undefined>(undefined),
			RecurringProfileId: new FormControl<number | null | undefined>(undefined),
			ShouldSendReminders: new FormControl<boolean | null | undefined>(undefined),
			Status: new FormControl<ChangeStatusApiModelStatus | null | undefined>(undefined),
			SubTotalAmount: new FormControl<number | null | undefined>(undefined),
			TaxAmount: new FormControl<number | null | undefined>(undefined),
			Terms: new FormControl<string | null | undefined>(undefined),
			TotalAmount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface InvoiceItemApiModel {

		/**
		 * Amount per unit
		 * Type: double
		 */
		Cost?: number | null;

		/** Additional description attached to the invoice item */
		Description?: string | null;

		/**
		 * Amount that goes as a discount
		 * Type: double
		 */
		DiscountAmount?: number | null;

		/**
		 * Discount percentage for the overall amount
		 * Type: double
		 */
		DiscountPercentage?: number | null;

		/**
		 * Id of invoice item
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;

		/**
		 * Quantity in total used for the work type
		 * Type: double
		 */
		Quantity?: number | null;

		/**
		 * Sub-Total amount of the invoice item (Amount without tax)
		 * Type: double
		 */
		SubTotalAmount?: number | null;

		/**
		 * Amount that goes to the tax
		 * Type: double
		 */
		TaxAmount?: number | null;

		/**
		 * Tax applied on the item
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxId?: number | null;

		/**
		 * Task percentage. Ex: 18%
		 * Type: double
		 */
		TaxPercentage?: number | null;

		/**
		 * Total amount of the invoice item
		 * Type: double
		 */
		TotalAmount?: number | null;

		/**
		 * Work type (Name of the service)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		WorkTypeId?: number | null;
	}
	export interface InvoiceItemApiModelFormProperties {

		/**
		 * Amount per unit
		 * Type: double
		 */
		Cost: FormControl<number | null | undefined>,

		/** Additional description attached to the invoice item */
		Description: FormControl<string | null | undefined>,

		/**
		 * Amount that goes as a discount
		 * Type: double
		 */
		DiscountAmount: FormControl<number | null | undefined>,

		/**
		 * Discount percentage for the overall amount
		 * Type: double
		 */
		DiscountPercentage: FormControl<number | null | undefined>,

		/**
		 * Id of invoice item
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,

		/**
		 * Quantity in total used for the work type
		 * Type: double
		 */
		Quantity: FormControl<number | null | undefined>,

		/**
		 * Sub-Total amount of the invoice item (Amount without tax)
		 * Type: double
		 */
		SubTotalAmount: FormControl<number | null | undefined>,

		/**
		 * Amount that goes to the tax
		 * Type: double
		 */
		TaxAmount: FormControl<number | null | undefined>,

		/**
		 * Tax applied on the item
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxId: FormControl<number | null | undefined>,

		/**
		 * Task percentage. Ex: 18%
		 * Type: double
		 */
		TaxPercentage: FormControl<number | null | undefined>,

		/**
		 * Total amount of the invoice item
		 * Type: double
		 */
		TotalAmount: FormControl<number | null | undefined>,

		/**
		 * Work type (Name of the service)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		WorkTypeId: FormControl<number | null | undefined>,
	}
	export function CreateInvoiceItemApiModelFormGroup() {
		return new FormGroup<InvoiceItemApiModelFormProperties>({
			Cost: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DiscountAmount: new FormControl<number | null | undefined>(undefined),
			DiscountPercentage: new FormControl<number | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			Quantity: new FormControl<number | null | undefined>(undefined),
			SubTotalAmount: new FormControl<number | null | undefined>(undefined),
			TaxAmount: new FormControl<number | null | undefined>(undefined),
			TaxId: new FormControl<number | null | undefined>(undefined),
			TaxPercentage: new FormControl<number | null | undefined>(undefined),
			TotalAmount: new FormControl<number | null | undefined>(undefined),
			WorkTypeId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface InvoicePaymentApiModel {

		/**
		 * Total amount of the payment
		 * Type: double
		 */
		Amount?: number | null;

		/**
		 * Id of invoice payment
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;

		/** Indicate if the payment is automatic or manual */
		IsAutomatic?: boolean | null;

		/** Internal payment note */
		Note?: string | null;

		/** When the payment was done by the client */
		PaidOn?: Date | null;

		/** Id of the payment */
		ReferenceId?: string | null;

		/** Type of payment */
		Type?: PaymentType | null;
	}
	export interface InvoicePaymentApiModelFormProperties {

		/**
		 * Total amount of the payment
		 * Type: double
		 */
		Amount: FormControl<number | null | undefined>,

		/**
		 * Id of invoice payment
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,

		/** Indicate if the payment is automatic or manual */
		IsAutomatic: FormControl<boolean | null | undefined>,

		/** Internal payment note */
		Note: FormControl<string | null | undefined>,

		/** When the payment was done by the client */
		PaidOn: FormControl<Date | null | undefined>,

		/** Id of the payment */
		ReferenceId: FormControl<string | null | undefined>,

		/** Type of payment */
		Type: FormControl<PaymentType | null | undefined>,
	}
	export function CreateInvoicePaymentApiModelFormGroup() {
		return new FormGroup<InvoicePaymentApiModelFormProperties>({
			Amount: new FormControl<number | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			IsAutomatic: new FormControl<boolean | null | undefined>(undefined),
			Note: new FormControl<string | null | undefined>(undefined),
			PaidOn: new FormControl<Date | null | undefined>(undefined),
			ReferenceId: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<PaymentType | null | undefined>(undefined),
		});

	}

	export interface InvoiceMessage {
		AttachPdf?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Id?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		InvoiceId?: number | null;
		Message?: string | null;
		SendToSelf?: boolean | null;
		Subject?: string | null;
		Type?: InvoiceMessageType | null;
	}
	export interface InvoiceMessageFormProperties {
		AttachPdf: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Id: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		InvoiceId: FormControl<number | null | undefined>,
		Message: FormControl<string | null | undefined>,
		SendToSelf: FormControl<boolean | null | undefined>,
		Subject: FormControl<string | null | undefined>,
		Type: FormControl<InvoiceMessageType | null | undefined>,
	}
	export function CreateInvoiceMessageFormGroup() {
		return new FormGroup<InvoiceMessageFormProperties>({
			AttachPdf: new FormControl<boolean | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			InvoiceId: new FormControl<number | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			SendToSelf: new FormControl<boolean | null | undefined>(undefined),
			Subject: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<InvoiceMessageType | null | undefined>(undefined),
		});

	}

	export enum InvoiceMessageType { SendInvoice = 'SendInvoice', SendInvoiceReminder = 'SendInvoiceReminder' }

	export interface InvoiceUpdateApiModel {

		/** List of invoice attachments */
		Attachments?: Array<InvoiceUpdateAttachmentApiModel>;

		/**
		 * The client to whom this invoice is assigned
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ClientId?: number | null;

		/**
		 * Indicate from which invoice this invoice has been cloned from
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ClonedFromId?: number | null;

		/**
		 * Id of the currency for the invoice amounts
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		CurrencyId?: number | null;

		/** Indicates when the invoice will be proclamed as due */
		Duedate?: Date | null;

		/**
		 * Invoice id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;

		/**
		 * Hold the id of the invoice category
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		InvoiceCategoryId?: number | null;

		/** Indicates when the invoice was issued */
		IssuedOn?: Date | null;

		/** List of invoice items */
		Items?: Array<InvoiceUpdateItemApiModel>;

		/** Internal note regarding the invoice */
		Notes?: string | null;

		/** Unique invoice number */
		Number?: string | null;

		/** List of enabled payment gateways for this invoice */
		PaymentGateways?: Array<InvoiceGatewayApiModel>;

		/** Unique number generated by the buyer */
		PoNumber?: string | null;

		/** Definition of invoice recurring profile */
		RecurringProfile?: InvoiceRecurringApiModel;

		/**
		 * Hold the id of the recurring profile
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		RecurringProfileId?: number | null;

		/** Should send email reminders to client? */
		ShouldSendReminders?: boolean | null;

		/** Indicate the status of the invoice (paid/unpaid/overdue) */
		Status?: ChangeStatusApiModelStatus | null;

		/** Terms of agreement */
		Terms?: string | null;
	}
	export interface InvoiceUpdateApiModelFormProperties {

		/**
		 * The client to whom this invoice is assigned
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ClientId: FormControl<number | null | undefined>,

		/**
		 * Indicate from which invoice this invoice has been cloned from
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ClonedFromId: FormControl<number | null | undefined>,

		/**
		 * Id of the currency for the invoice amounts
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		CurrencyId: FormControl<number | null | undefined>,

		/** Indicates when the invoice will be proclamed as due */
		Duedate: FormControl<Date | null | undefined>,

		/**
		 * Invoice id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,

		/**
		 * Hold the id of the invoice category
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		InvoiceCategoryId: FormControl<number | null | undefined>,

		/** Indicates when the invoice was issued */
		IssuedOn: FormControl<Date | null | undefined>,

		/** Internal note regarding the invoice */
		Notes: FormControl<string | null | undefined>,

		/** Unique invoice number */
		Number: FormControl<string | null | undefined>,

		/** Unique number generated by the buyer */
		PoNumber: FormControl<string | null | undefined>,

		/**
		 * Hold the id of the recurring profile
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		RecurringProfileId: FormControl<number | null | undefined>,

		/** Should send email reminders to client? */
		ShouldSendReminders: FormControl<boolean | null | undefined>,

		/** Indicate the status of the invoice (paid/unpaid/overdue) */
		Status: FormControl<ChangeStatusApiModelStatus | null | undefined>,

		/** Terms of agreement */
		Terms: FormControl<string | null | undefined>,
	}
	export function CreateInvoiceUpdateApiModelFormGroup() {
		return new FormGroup<InvoiceUpdateApiModelFormProperties>({
			ClientId: new FormControl<number | null | undefined>(undefined),
			ClonedFromId: new FormControl<number | null | undefined>(undefined),
			CurrencyId: new FormControl<number | null | undefined>(undefined),
			Duedate: new FormControl<Date | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			InvoiceCategoryId: new FormControl<number | null | undefined>(undefined),
			IssuedOn: new FormControl<Date | null | undefined>(undefined),
			Notes: new FormControl<string | null | undefined>(undefined),
			Number: new FormControl<string | null | undefined>(undefined),
			PoNumber: new FormControl<string | null | undefined>(undefined),
			RecurringProfileId: new FormControl<number | null | undefined>(undefined),
			ShouldSendReminders: new FormControl<boolean | null | undefined>(undefined),
			Status: new FormControl<ChangeStatusApiModelStatus | null | undefined>(undefined),
			Terms: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvoiceUpdateAttachmentApiModel {

		/**
		 * Id of invoice attachment
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;

		/** Link to the file */
		Link?: string | null;

		/** Hashed file name to avoid url wildguessing */
		ObfuscatedFileName?: string | null;

		/** Name of the file */
		OriginalFileName?: string | null;

		/**
		 * File size number in bytes
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		Size?: string | null;

		/** Type of the link (Attached or external) */
		Type?: EstimationAttachmentApiModelType | null;
	}
	export interface InvoiceUpdateAttachmentApiModelFormProperties {

		/**
		 * Id of invoice attachment
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,

		/** Link to the file */
		Link: FormControl<string | null | undefined>,

		/** Hashed file name to avoid url wildguessing */
		ObfuscatedFileName: FormControl<string | null | undefined>,

		/** Name of the file */
		OriginalFileName: FormControl<string | null | undefined>,

		/**
		 * File size number in bytes
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		Size: FormControl<string | null | undefined>,

		/** Type of the link (Attached or external) */
		Type: FormControl<EstimationAttachmentApiModelType | null | undefined>,
	}
	export function CreateInvoiceUpdateAttachmentApiModelFormGroup() {
		return new FormGroup<InvoiceUpdateAttachmentApiModelFormProperties>({
			Id: new FormControl<number | null | undefined>(undefined),
			Link: new FormControl<string | null | undefined>(undefined),
			ObfuscatedFileName: new FormControl<string | null | undefined>(undefined),
			OriginalFileName: new FormControl<string | null | undefined>(undefined),
			Size: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<EstimationAttachmentApiModelType | null | undefined>(undefined),
		});

	}

	export interface InvoiceUpdateItemApiModel {

		/**
		 * Amount per unit
		 * Type: double
		 */
		Cost?: number | null;

		/** Additional description attached to the invoice item */
		Description?: string | null;

		/**
		 * Discount percentage for the overall amount
		 * Type: double
		 */
		DiscountPercentage?: number | null;

		/**
		 * Id of invoice item
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;

		/**
		 * Quantity in total used for the work type
		 * Type: double
		 */
		Quantity?: number | null;

		/**
		 * Tax applied on the item
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxId?: number | null;

		/**
		 * Task percentage. Ex: 18%
		 * Type: double
		 */
		TaxPercentage?: number | null;

		/**
		 * Work type (Name of the service)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		WorkTypeId?: number | null;
	}
	export interface InvoiceUpdateItemApiModelFormProperties {

		/**
		 * Amount per unit
		 * Type: double
		 */
		Cost: FormControl<number | null | undefined>,

		/** Additional description attached to the invoice item */
		Description: FormControl<string | null | undefined>,

		/**
		 * Discount percentage for the overall amount
		 * Type: double
		 */
		DiscountPercentage: FormControl<number | null | undefined>,

		/**
		 * Id of invoice item
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,

		/**
		 * Quantity in total used for the work type
		 * Type: double
		 */
		Quantity: FormControl<number | null | undefined>,

		/**
		 * Tax applied on the item
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxId: FormControl<number | null | undefined>,

		/**
		 * Task percentage. Ex: 18%
		 * Type: double
		 */
		TaxPercentage: FormControl<number | null | undefined>,

		/**
		 * Work type (Name of the service)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		WorkTypeId: FormControl<number | null | undefined>,
	}
	export function CreateInvoiceUpdateItemApiModelFormGroup() {
		return new FormGroup<InvoiceUpdateItemApiModelFormProperties>({
			Cost: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DiscountPercentage: new FormControl<number | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			Quantity: new FormControl<number | null | undefined>(undefined),
			TaxId: new FormControl<number | null | undefined>(undefined),
			TaxPercentage: new FormControl<number | null | undefined>(undefined),
			WorkTypeId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface InvoiceUriApiModel {

		/** Unique link to the invoice */
		Link?: string | null;
	}
	export interface InvoiceUriApiModelFormProperties {

		/** Unique link to the invoice */
		Link: FormControl<string | null | undefined>,
	}
	export function CreateInvoiceUriApiModelFormGroup() {
		return new FormGroup<InvoiceUriApiModelFormProperties>({
			Link: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResult_EstimationDetailsApiModel_ {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Count?: number | null;
		ErrorMessages?: Array<IErrorInfo>;
		IsFaulted?: boolean | null;
		Result?: Array<EstimationDetailsApiModel>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TotalCount?: number | null;
	}
	export interface ListResult_EstimationDetailsApiModel_FormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Count: FormControl<number | null | undefined>,
		IsFaulted: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TotalCount: FormControl<number | null | undefined>,
	}
	export function CreateListResult_EstimationDetailsApiModel_FormGroup() {
		return new FormGroup<ListResult_EstimationDetailsApiModel_FormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			IsFaulted: new FormControl<boolean | null | undefined>(undefined),
			TotalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListResult_InvoiceCategoryApiModel_ {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Count?: number | null;
		ErrorMessages?: Array<IErrorInfo>;
		IsFaulted?: boolean | null;
		Result?: Array<InvoiceCategoryApiModel>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TotalCount?: number | null;
	}
	export interface ListResult_InvoiceCategoryApiModel_FormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Count: FormControl<number | null | undefined>,
		IsFaulted: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TotalCount: FormControl<number | null | undefined>,
	}
	export function CreateListResult_InvoiceCategoryApiModel_FormGroup() {
		return new FormGroup<ListResult_InvoiceCategoryApiModel_FormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			IsFaulted: new FormControl<boolean | null | undefined>(undefined),
			TotalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListResult_InvoiceDetailsApiModel_ {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Count?: number | null;
		ErrorMessages?: Array<IErrorInfo>;
		IsFaulted?: boolean | null;
		Result?: Array<InvoiceDetailsApiModel>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TotalCount?: number | null;
	}
	export interface ListResult_InvoiceDetailsApiModel_FormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Count: FormControl<number | null | undefined>,
		IsFaulted: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TotalCount: FormControl<number | null | undefined>,
	}
	export function CreateListResult_InvoiceDetailsApiModel_FormGroup() {
		return new FormGroup<ListResult_InvoiceDetailsApiModel_FormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			IsFaulted: new FormControl<boolean | null | undefined>(undefined),
			TotalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListResult_OrderDetailsApiModel_ {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Count?: number | null;
		ErrorMessages?: Array<IErrorInfo>;
		IsFaulted?: boolean | null;
		Result?: Array<OrderDetailsApiModel>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TotalCount?: number | null;
	}
	export interface ListResult_OrderDetailsApiModel_FormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Count: FormControl<number | null | undefined>,
		IsFaulted: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TotalCount: FormControl<number | null | undefined>,
	}
	export function CreateListResult_OrderDetailsApiModel_FormGroup() {
		return new FormGroup<ListResult_OrderDetailsApiModel_FormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			IsFaulted: new FormControl<boolean | null | undefined>(undefined),
			TotalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface OrderDetailsApiModel {

		/** Product short link */
		AccessToken?: string | null;

		/** After payment description */
		AfterPaymentDescription?: string | null;

		/** Coupon to apply in order to get the discount */
		CouponCode?: string | null;
		Currency?: CurrencyDetailsApiModel;

		/**
		 * Foreign key Currency
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		CurrencyId?: number | null;

		/** Product description */
		Description?: string | null;

		/**
		 * Discount amount
		 * Type: double
		 */
		DiscountAmount?: number | null;

		/**
		 * Order id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;

		/** Product alias */
		Name?: string | null;

		/** Customer note to seller */
		Note?: string | null;
		OrderBillingDetails?: OrderBillingDetailsApiModel;
		OrderShippingDetails?: OrderShippingDetailsApiModel;

		/**
		 * Product id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ProductId?: number | null;

		/** Represent the referral for this order */
		Referral?: string | null;

		/**
		 * Cost for shipping the product
		 * Type: double
		 */
		ShippingAmount?: number | null;

		/** Client instructions for shipping */
		ShippingDescription?: string | null;

		/** Order status */
		Status?: ChangeOrderStatusApiModelStatus | null;

		/**
		 * Sub total amount
		 * Type: double
		 */
		SubTotalAmount?: number | null;

		/**
		 * Tax amount
		 * Type: double
		 */
		TaxAmount?: number | null;

		/**
		 * Total amount
		 * Type: double
		 */
		TotalAmount?: number | null;

		/**
		 * Total amount with shipping
		 * Type: double
		 */
		TotalWithShipping?: number | null;

		/** What happens next description */
		WhatHappensNextDescription?: string | null;
	}
	export interface OrderDetailsApiModelFormProperties {

		/** Product short link */
		AccessToken: FormControl<string | null | undefined>,

		/** After payment description */
		AfterPaymentDescription: FormControl<string | null | undefined>,

		/** Coupon to apply in order to get the discount */
		CouponCode: FormControl<string | null | undefined>,

		/**
		 * Foreign key Currency
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		CurrencyId: FormControl<number | null | undefined>,

		/** Product description */
		Description: FormControl<string | null | undefined>,

		/**
		 * Discount amount
		 * Type: double
		 */
		DiscountAmount: FormControl<number | null | undefined>,

		/**
		 * Order id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,

		/** Product alias */
		Name: FormControl<string | null | undefined>,

		/** Customer note to seller */
		Note: FormControl<string | null | undefined>,

		/**
		 * Product id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ProductId: FormControl<number | null | undefined>,

		/** Represent the referral for this order */
		Referral: FormControl<string | null | undefined>,

		/**
		 * Cost for shipping the product
		 * Type: double
		 */
		ShippingAmount: FormControl<number | null | undefined>,

		/** Client instructions for shipping */
		ShippingDescription: FormControl<string | null | undefined>,

		/** Order status */
		Status: FormControl<ChangeOrderStatusApiModelStatus | null | undefined>,

		/**
		 * Sub total amount
		 * Type: double
		 */
		SubTotalAmount: FormControl<number | null | undefined>,

		/**
		 * Tax amount
		 * Type: double
		 */
		TaxAmount: FormControl<number | null | undefined>,

		/**
		 * Total amount
		 * Type: double
		 */
		TotalAmount: FormControl<number | null | undefined>,

		/**
		 * Total amount with shipping
		 * Type: double
		 */
		TotalWithShipping: FormControl<number | null | undefined>,

		/** What happens next description */
		WhatHappensNextDescription: FormControl<string | null | undefined>,
	}
	export function CreateOrderDetailsApiModelFormGroup() {
		return new FormGroup<OrderDetailsApiModelFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined),
			AfterPaymentDescription: new FormControl<string | null | undefined>(undefined),
			CouponCode: new FormControl<string | null | undefined>(undefined),
			CurrencyId: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DiscountAmount: new FormControl<number | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Note: new FormControl<string | null | undefined>(undefined),
			ProductId: new FormControl<number | null | undefined>(undefined),
			Referral: new FormControl<string | null | undefined>(undefined),
			ShippingAmount: new FormControl<number | null | undefined>(undefined),
			ShippingDescription: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ChangeOrderStatusApiModelStatus | null | undefined>(undefined),
			SubTotalAmount: new FormControl<number | null | undefined>(undefined),
			TaxAmount: new FormControl<number | null | undefined>(undefined),
			TotalAmount: new FormControl<number | null | undefined>(undefined),
			TotalWithShipping: new FormControl<number | null | undefined>(undefined),
			WhatHappensNextDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderBillingDetailsApiModel {

		/** Client street and number */
		Address?: string | null;

		/**
		 * Client country id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		CountryId?: number | null;

		/** Client email */
		Email?: string | null;

		/** Client name */
		Name?: string | null;

		/** Client phone number */
		PhoneNumber?: string | null;
	}
	export interface OrderBillingDetailsApiModelFormProperties {

		/** Client street and number */
		Address: FormControl<string | null | undefined>,

		/**
		 * Client country id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		CountryId: FormControl<number | null | undefined>,

		/** Client email */
		Email: FormControl<string | null | undefined>,

		/** Client name */
		Name: FormControl<string | null | undefined>,

		/** Client phone number */
		PhoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateOrderBillingDetailsApiModelFormGroup() {
		return new FormGroup<OrderBillingDetailsApiModelFormProperties>({
			Address: new FormControl<string | null | undefined>(undefined),
			CountryId: new FormControl<number | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PhoneNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderShippingDetailsApiModel {

		/** Client street and number */
		Address?: string | null;

		/**
		 * Client country id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		CountryId?: number | null;

		/** Client email */
		Email?: string | null;

		/** Client name */
		Name?: string | null;

		/** Client phone number */
		PhoneNumber?: string | null;
	}
	export interface OrderShippingDetailsApiModelFormProperties {

		/** Client street and number */
		Address: FormControl<string | null | undefined>,

		/**
		 * Client country id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		CountryId: FormControl<number | null | undefined>,

		/** Client email */
		Email: FormControl<string | null | undefined>,

		/** Client name */
		Name: FormControl<string | null | undefined>,

		/** Client phone number */
		PhoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateOrderShippingDetailsApiModelFormGroup() {
		return new FormGroup<OrderShippingDetailsApiModelFormProperties>({
			Address: new FormControl<string | null | undefined>(undefined),
			CountryId: new FormControl<number | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PhoneNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResult_PaymentLink_ {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Count?: number | null;
		ErrorMessages?: Array<IErrorInfo>;
		IsFaulted?: boolean | null;
		Result?: Array<PaymentLink>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TotalCount?: number | null;
	}
	export interface ListResult_PaymentLink_FormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Count: FormControl<number | null | undefined>,
		IsFaulted: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TotalCount: FormControl<number | null | undefined>,
	}
	export function CreateListResult_PaymentLink_FormGroup() {
		return new FormGroup<ListResult_PaymentLink_FormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			IsFaulted: new FormControl<boolean | null | undefined>(undefined),
			TotalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PaymentLink {
		AccessToken?: string | null;
		Client?: Client;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ClientId?: number | null;
		Currency?: Currency;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		CurrencyId?: number | null;

		/** Type: double */
		DiscountAmount?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Id?: number | null;
		Invoice?: Invoice;
		Items?: Array<PaymentLinkItem>;
		Number?: string | null;

		/** Type: double */
		SubTotalAmount?: number | null;

		/** Type: double */
		TaxAmount?: number | null;

		/** Type: double */
		TotalAmount?: number | null;
		User?: User;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UserId?: number | null;
	}
	export interface PaymentLinkFormProperties {
		AccessToken: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ClientId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		CurrencyId: FormControl<number | null | undefined>,

		/** Type: double */
		DiscountAmount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Id: FormControl<number | null | undefined>,
		Number: FormControl<string | null | undefined>,

		/** Type: double */
		SubTotalAmount: FormControl<number | null | undefined>,

		/** Type: double */
		TaxAmount: FormControl<number | null | undefined>,

		/** Type: double */
		TotalAmount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UserId: FormControl<number | null | undefined>,
	}
	export function CreatePaymentLinkFormGroup() {
		return new FormGroup<PaymentLinkFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined),
			ClientId: new FormControl<number | null | undefined>(undefined),
			CurrencyId: new FormControl<number | null | undefined>(undefined),
			DiscountAmount: new FormControl<number | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			Number: new FormControl<string | null | undefined>(undefined),
			SubTotalAmount: new FormControl<number | null | undefined>(undefined),
			TaxAmount: new FormControl<number | null | undefined>(undefined),
			TotalAmount: new FormControl<number | null | undefined>(undefined),
			UserId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PaymentLinkItem {

		/** Type: double */
		Cost?: number | null;

		/** Type: double */
		DiscountAmount?: number | null;

		/** Type: double */
		DiscountPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Id?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PaymentLinkId?: number | null;

		/** Type: double */
		Quantity?: number | null;

		/** Type: double */
		SubTotalAmount?: number | null;
		Tax?: Tax;

		/** Type: double */
		TaxAmount?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TaxId?: number | null;

		/** Type: double */
		TaxPercentage?: number | null;

		/** Type: double */
		TotalAmount?: number | null;
		WorkType?: WorkType;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		WorkTypeId?: number | null;
	}
	export interface PaymentLinkItemFormProperties {

		/** Type: double */
		Cost: FormControl<number | null | undefined>,

		/** Type: double */
		DiscountAmount: FormControl<number | null | undefined>,

		/** Type: double */
		DiscountPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Id: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PaymentLinkId: FormControl<number | null | undefined>,

		/** Type: double */
		Quantity: FormControl<number | null | undefined>,

		/** Type: double */
		SubTotalAmount: FormControl<number | null | undefined>,

		/** Type: double */
		TaxAmount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TaxId: FormControl<number | null | undefined>,

		/** Type: double */
		TaxPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		TotalAmount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		WorkTypeId: FormControl<number | null | undefined>,
	}
	export function CreatePaymentLinkItemFormGroup() {
		return new FormGroup<PaymentLinkItemFormProperties>({
			Cost: new FormControl<number | null | undefined>(undefined),
			DiscountAmount: new FormControl<number | null | undefined>(undefined),
			DiscountPercentage: new FormControl<number | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			PaymentLinkId: new FormControl<number | null | undefined>(undefined),
			Quantity: new FormControl<number | null | undefined>(undefined),
			SubTotalAmount: new FormControl<number | null | undefined>(undefined),
			TaxAmount: new FormControl<number | null | undefined>(undefined),
			TaxId: new FormControl<number | null | undefined>(undefined),
			TaxPercentage: new FormControl<number | null | undefined>(undefined),
			TotalAmount: new FormControl<number | null | undefined>(undefined),
			WorkTypeId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Tax {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Id?: number | null;
		Name?: string | null;

		/** Type: double */
		Percentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UserId?: number | null;
	}
	export interface TaxFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Id: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: double */
		Percentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UserId: FormControl<number | null | undefined>,
	}
	export function CreateTaxFormGroup() {
		return new FormGroup<TaxFormProperties>({
			Id: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Percentage: new FormControl<number | null | undefined>(undefined),
			UserId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface WorkType {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Id?: number | null;
		Title?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UserId?: number | null;
	}
	export interface WorkTypeFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Id: FormControl<number | null | undefined>,
		Title: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UserId: FormControl<number | null | undefined>,
	}
	export function CreateWorkTypeFormGroup() {
		return new FormGroup<WorkTypeFormProperties>({
			Id: new FormControl<number | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			UserId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface User {
		ActionNotificationsLastReadOn?: Date | null;
		Email?: string | null;
		ExternalConnections?: Array<ExternalConnection>;
		HasBeenOnboarded?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Id?: number | null;
		IsLocked?: boolean | null;
		IsVerified?: boolean | null;
		KnowledgeNotificationsLastReadOn?: Date | null;
		LastSeenOn?: Date | null;
		Name?: string | null;
		Password?: string | null;
		PasswordSalt?: string | null;
		ReferralPath?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ReferredUsers?: number | null;
		ReferrerKey?: string | null;
		Settings?: UserSettings;
		Status?: UserStatus | null;
		SubscriptionPlan?: SubscriptionPlan;
		Type?: UserType | null;
		Username?: string | null;
		VerifiedOn?: Date | null;
		YearsOfExperience?: UserYearsOfExperience | null;
	}
	export interface UserFormProperties {
		ActionNotificationsLastReadOn: FormControl<Date | null | undefined>,
		Email: FormControl<string | null | undefined>,
		HasBeenOnboarded: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Id: FormControl<number | null | undefined>,
		IsLocked: FormControl<boolean | null | undefined>,
		IsVerified: FormControl<boolean | null | undefined>,
		KnowledgeNotificationsLastReadOn: FormControl<Date | null | undefined>,
		LastSeenOn: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Password: FormControl<string | null | undefined>,
		PasswordSalt: FormControl<string | null | undefined>,
		ReferralPath: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ReferredUsers: FormControl<number | null | undefined>,
		ReferrerKey: FormControl<string | null | undefined>,
		Status: FormControl<UserStatus | null | undefined>,
		Type: FormControl<UserType | null | undefined>,
		Username: FormControl<string | null | undefined>,
		VerifiedOn: FormControl<Date | null | undefined>,
		YearsOfExperience: FormControl<UserYearsOfExperience | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			ActionNotificationsLastReadOn: new FormControl<Date | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			HasBeenOnboarded: new FormControl<boolean | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			IsLocked: new FormControl<boolean | null | undefined>(undefined),
			IsVerified: new FormControl<boolean | null | undefined>(undefined),
			KnowledgeNotificationsLastReadOn: new FormControl<Date | null | undefined>(undefined),
			LastSeenOn: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
			PasswordSalt: new FormControl<string | null | undefined>(undefined),
			ReferralPath: new FormControl<string | null | undefined>(undefined),
			ReferredUsers: new FormControl<number | null | undefined>(undefined),
			ReferrerKey: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<UserStatus | null | undefined>(undefined),
			Type: new FormControl<UserType | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
			VerifiedOn: new FormControl<Date | null | undefined>(undefined),
			YearsOfExperience: new FormControl<UserYearsOfExperience | null | undefined>(undefined),
		});

	}

	export interface UserSettings {
		AccountantEmail?: string | null;
		Address?: string | null;
		ApiKey?: string | null;
		ApiSecret?: string | null;
		BackgroundImage?: string | null;
		Bank?: string | null;
		BankAccount?: string | null;
		Cname?: string | null;
		CompanyRegistrationNumber?: string | null;
		Country?: Country;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		CountryId?: number | null;
		Currency?: Currency;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		CurrencyId?: number | null;
		CurrencySymbol?: string | null;
		DefaultDateFormat?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DefaultDueDateInDays?: number | null;
		DoNotTrack?: boolean | null;
		EnableClientPortal?: boolean | null;
		EnablePredictiveInvoicing?: boolean | null;
		EnableRecurringInvoicing?: boolean | null;
		HasInvoiceLogo?: boolean | null;
		Iban?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Id?: number | null;
		InvoiceTemplate?: UserSettingsInvoiceTemplate | null;
		InvoiceTemplateColorHex?: string | null;
		PhoneNumber?: string | null;
		Profession?: UserSettingsProfession | null;
		ReceiveSmsNotifications?: boolean | null;
		ReferralProgram?: UserSettingsReferralProgram | null;
		StoreCheckoutFields?: UserSettingsStoreCheckoutFields | null;
		StoreColorHex?: string | null;
		StoreCurrency?: Currency;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StoreCurrencyId?: number | null;
		StoreCustomJavaScript?: string | null;
		StoreDescription?: string | null;
		StoreEmail?: string | null;
		StoreLanguage?: UiLanguage;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StoreLanguageId?: number | null;
		StoreName?: string | null;
		StorePurchaseEmailMessage?: string | null;
		StorePurchaseThankYouMessage?: string | null;
		StoreTextColorHex?: string | null;
		StoreUrl?: string | null;
		SubscribeToProductEmails?: boolean | null;
		Swift?: string | null;
		Terms?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UserId?: number | null;
		UserSignature?: string | null;
		VatNumber?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		YearsOfExperience?: number | null;
	}
	export interface UserSettingsFormProperties {
		AccountantEmail: FormControl<string | null | undefined>,
		Address: FormControl<string | null | undefined>,
		ApiKey: FormControl<string | null | undefined>,
		ApiSecret: FormControl<string | null | undefined>,
		BackgroundImage: FormControl<string | null | undefined>,
		Bank: FormControl<string | null | undefined>,
		BankAccount: FormControl<string | null | undefined>,
		Cname: FormControl<string | null | undefined>,
		CompanyRegistrationNumber: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		CountryId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		CurrencyId: FormControl<number | null | undefined>,
		CurrencySymbol: FormControl<string | null | undefined>,
		DefaultDateFormat: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DefaultDueDateInDays: FormControl<number | null | undefined>,
		DoNotTrack: FormControl<boolean | null | undefined>,
		EnableClientPortal: FormControl<boolean | null | undefined>,
		EnablePredictiveInvoicing: FormControl<boolean | null | undefined>,
		EnableRecurringInvoicing: FormControl<boolean | null | undefined>,
		HasInvoiceLogo: FormControl<boolean | null | undefined>,
		Iban: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Id: FormControl<number | null | undefined>,
		InvoiceTemplate: FormControl<UserSettingsInvoiceTemplate | null | undefined>,
		InvoiceTemplateColorHex: FormControl<string | null | undefined>,
		PhoneNumber: FormControl<string | null | undefined>,
		Profession: FormControl<UserSettingsProfession | null | undefined>,
		ReceiveSmsNotifications: FormControl<boolean | null | undefined>,
		ReferralProgram: FormControl<UserSettingsReferralProgram | null | undefined>,
		StoreCheckoutFields: FormControl<UserSettingsStoreCheckoutFields | null | undefined>,
		StoreColorHex: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StoreCurrencyId: FormControl<number | null | undefined>,
		StoreCustomJavaScript: FormControl<string | null | undefined>,
		StoreDescription: FormControl<string | null | undefined>,
		StoreEmail: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StoreLanguageId: FormControl<number | null | undefined>,
		StoreName: FormControl<string | null | undefined>,
		StorePurchaseEmailMessage: FormControl<string | null | undefined>,
		StorePurchaseThankYouMessage: FormControl<string | null | undefined>,
		StoreTextColorHex: FormControl<string | null | undefined>,
		StoreUrl: FormControl<string | null | undefined>,
		SubscribeToProductEmails: FormControl<boolean | null | undefined>,
		Swift: FormControl<string | null | undefined>,
		Terms: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UserId: FormControl<number | null | undefined>,
		UserSignature: FormControl<string | null | undefined>,
		VatNumber: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		YearsOfExperience: FormControl<number | null | undefined>,
	}
	export function CreateUserSettingsFormGroup() {
		return new FormGroup<UserSettingsFormProperties>({
			AccountantEmail: new FormControl<string | null | undefined>(undefined),
			Address: new FormControl<string | null | undefined>(undefined),
			ApiKey: new FormControl<string | null | undefined>(undefined),
			ApiSecret: new FormControl<string | null | undefined>(undefined),
			BackgroundImage: new FormControl<string | null | undefined>(undefined),
			Bank: new FormControl<string | null | undefined>(undefined),
			BankAccount: new FormControl<string | null | undefined>(undefined),
			Cname: new FormControl<string | null | undefined>(undefined),
			CompanyRegistrationNumber: new FormControl<string | null | undefined>(undefined),
			CountryId: new FormControl<number | null | undefined>(undefined),
			CurrencyId: new FormControl<number | null | undefined>(undefined),
			CurrencySymbol: new FormControl<string | null | undefined>(undefined),
			DefaultDateFormat: new FormControl<string | null | undefined>(undefined),
			DefaultDueDateInDays: new FormControl<number | null | undefined>(undefined),
			DoNotTrack: new FormControl<boolean | null | undefined>(undefined),
			EnableClientPortal: new FormControl<boolean | null | undefined>(undefined),
			EnablePredictiveInvoicing: new FormControl<boolean | null | undefined>(undefined),
			EnableRecurringInvoicing: new FormControl<boolean | null | undefined>(undefined),
			HasInvoiceLogo: new FormControl<boolean | null | undefined>(undefined),
			Iban: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			InvoiceTemplate: new FormControl<UserSettingsInvoiceTemplate | null | undefined>(undefined),
			InvoiceTemplateColorHex: new FormControl<string | null | undefined>(undefined),
			PhoneNumber: new FormControl<string | null | undefined>(undefined),
			Profession: new FormControl<UserSettingsProfession | null | undefined>(undefined),
			ReceiveSmsNotifications: new FormControl<boolean | null | undefined>(undefined),
			ReferralProgram: new FormControl<UserSettingsReferralProgram | null | undefined>(undefined),
			StoreCheckoutFields: new FormControl<UserSettingsStoreCheckoutFields | null | undefined>(undefined),
			StoreColorHex: new FormControl<string | null | undefined>(undefined),
			StoreCurrencyId: new FormControl<number | null | undefined>(undefined),
			StoreCustomJavaScript: new FormControl<string | null | undefined>(undefined),
			StoreDescription: new FormControl<string | null | undefined>(undefined),
			StoreEmail: new FormControl<string | null | undefined>(undefined),
			StoreLanguageId: new FormControl<number | null | undefined>(undefined),
			StoreName: new FormControl<string | null | undefined>(undefined),
			StorePurchaseEmailMessage: new FormControl<string | null | undefined>(undefined),
			StorePurchaseThankYouMessage: new FormControl<string | null | undefined>(undefined),
			StoreTextColorHex: new FormControl<string | null | undefined>(undefined),
			StoreUrl: new FormControl<string | null | undefined>(undefined),
			SubscribeToProductEmails: new FormControl<boolean | null | undefined>(undefined),
			Swift: new FormControl<string | null | undefined>(undefined),
			Terms: new FormControl<string | null | undefined>(undefined),
			UserId: new FormControl<number | null | undefined>(undefined),
			UserSignature: new FormControl<string | null | undefined>(undefined),
			VatNumber: new FormControl<string | null | undefined>(undefined),
			YearsOfExperience: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum UserSettingsInvoiceTemplate { Default = 'Default', Template1 = 'Template1', Template2 = 'Template2' }

	export enum UserSettingsProfession { Other = 'Other', DesignAndCreative = 'DesignAndCreative', SoftwareDevelopment = 'SoftwareDevelopment', ContentWritingAndMarketing = 'ContentWritingAndMarketing', Freelancers = 'Freelancers', Consultants = 'Consultants', Smes = 'Smes', Enterprise = 'Enterprise', ECommerce = 'ECommerce', Individual = 'Individual' }

	export enum UserSettingsReferralProgram { Enabled = 'Enabled', Disabled = 'Disabled' }

	export enum UserSettingsStoreCheckoutFields { ShowMinimumRequiredFields = 'ShowMinimumRequiredFields', ShowAllFields = 'ShowAllFields' }

	export interface UiLanguage {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Id?: number | null;
		Name?: string | null;
		UiCulture?: string | null;
	}
	export interface UiLanguageFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Id: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		UiCulture: FormControl<string | null | undefined>,
	}
	export function CreateUiLanguageFormGroup() {
		return new FormGroup<UiLanguageFormProperties>({
			Id: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			UiCulture: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UserStatus { Normal = 'Normal', Fraudlent = 'Fraudlent', Locked = 'Locked' }

	export interface SubscriptionPlan {
		CancellatedOn?: Date | null;
		CouponCode?: string | null;
		CurrencyCode?: string | null;
		ExternalIdentifier?: string | null;
		Features?: Array<string>;
		HasDuePayment?: boolean | null;
		HasDuePaymentSince?: Date | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Id?: number | null;
		Identifier?: string | null;
		IsActive?: boolean | null;
		IsLifetime?: boolean | null;
		LastPaymentOn?: Date | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		MaxClients?: number | null;
		Name?: string | null;
		OnHold?: boolean | null;
		OrderIdentifier?: string | null;

		/** Type: double */
		Price?: number | null;
		Recurrence?: SubscriptionPlanRecurrence | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		SaleId?: string | null;
		Status?: SubscriptionPlanStatus | null;
		SystemCancelationReason?: SubscriptionPlanSystemCancelationReason | null;
		TrialEndsOn?: Date | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TrialNumberOfDays?: number | null;
		TrialStartsOn?: Date | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UserId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Version?: number | null;
	}
	export interface SubscriptionPlanFormProperties {
		CancellatedOn: FormControl<Date | null | undefined>,
		CouponCode: FormControl<string | null | undefined>,
		CurrencyCode: FormControl<string | null | undefined>,
		ExternalIdentifier: FormControl<string | null | undefined>,
		HasDuePayment: FormControl<boolean | null | undefined>,
		HasDuePaymentSince: FormControl<Date | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Id: FormControl<number | null | undefined>,
		Identifier: FormControl<string | null | undefined>,
		IsActive: FormControl<boolean | null | undefined>,
		IsLifetime: FormControl<boolean | null | undefined>,
		LastPaymentOn: FormControl<Date | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		MaxClients: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		OnHold: FormControl<boolean | null | undefined>,
		OrderIdentifier: FormControl<string | null | undefined>,

		/** Type: double */
		Price: FormControl<number | null | undefined>,
		Recurrence: FormControl<SubscriptionPlanRecurrence | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		SaleId: FormControl<string | null | undefined>,
		Status: FormControl<SubscriptionPlanStatus | null | undefined>,
		SystemCancelationReason: FormControl<SubscriptionPlanSystemCancelationReason | null | undefined>,
		TrialEndsOn: FormControl<Date | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TrialNumberOfDays: FormControl<number | null | undefined>,
		TrialStartsOn: FormControl<Date | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UserId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Version: FormControl<number | null | undefined>,
	}
	export function CreateSubscriptionPlanFormGroup() {
		return new FormGroup<SubscriptionPlanFormProperties>({
			CancellatedOn: new FormControl<Date | null | undefined>(undefined),
			CouponCode: new FormControl<string | null | undefined>(undefined),
			CurrencyCode: new FormControl<string | null | undefined>(undefined),
			ExternalIdentifier: new FormControl<string | null | undefined>(undefined),
			HasDuePayment: new FormControl<boolean | null | undefined>(undefined),
			HasDuePaymentSince: new FormControl<Date | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			Identifier: new FormControl<string | null | undefined>(undefined),
			IsActive: new FormControl<boolean | null | undefined>(undefined),
			IsLifetime: new FormControl<boolean | null | undefined>(undefined),
			LastPaymentOn: new FormControl<Date | null | undefined>(undefined),
			MaxClients: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			OnHold: new FormControl<boolean | null | undefined>(undefined),
			OrderIdentifier: new FormControl<string | null | undefined>(undefined),
			Price: new FormControl<number | null | undefined>(undefined),
			Recurrence: new FormControl<SubscriptionPlanRecurrence | null | undefined>(undefined),
			SaleId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<SubscriptionPlanStatus | null | undefined>(undefined),
			SystemCancelationReason: new FormControl<SubscriptionPlanSystemCancelationReason | null | undefined>(undefined),
			TrialEndsOn: new FormControl<Date | null | undefined>(undefined),
			TrialNumberOfDays: new FormControl<number | null | undefined>(undefined),
			TrialStartsOn: new FormControl<Date | null | undefined>(undefined),
			UserId: new FormControl<number | null | undefined>(undefined),
			Version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum SubscriptionPlanRecurrence { Monthly = 'Monthly', Yearly = 'Yearly' }

	export enum SubscriptionPlanStatus { ActiveTrial = 'ActiveTrial', ExpiredTrial = 'ExpiredTrial', Active = 'Active', Canceled = 'Canceled', Fraudlent = 'Fraudlent' }

	export enum SubscriptionPlanSystemCancelationReason { FailToCaptureFee = 'FailToCaptureFee', Fraud = 'Fraud' }

	export enum UserType { Anonymous = 'Anonymous', Customer = 'Customer', SystemAdministrator = 'SystemAdministrator', Collaborator = 'Collaborator' }

	export enum UserYearsOfExperience { One = 'One', OneToThree = 'OneToThree', ThreeToFive = 'ThreeToFive', SixPlus = 'SixPlus' }

	export interface ListResult_ProductDetailsApiModel_ {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Count?: number | null;
		ErrorMessages?: Array<IErrorInfo>;
		IsFaulted?: boolean | null;
		Result?: Array<ProductDetailsApiModel>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TotalCount?: number | null;
	}
	export interface ListResult_ProductDetailsApiModel_FormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Count: FormControl<number | null | undefined>,
		IsFaulted: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TotalCount: FormControl<number | null | undefined>,
	}
	export function CreateListResult_ProductDetailsApiModel_FormGroup() {
		return new FormGroup<ListResult_ProductDetailsApiModel_FormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			IsFaulted: new FormControl<boolean | null | undefined>(undefined),
			TotalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ProductDetailsApiModel {

		/** Product short link */
		AccessToken?: string | null;

		/** After payment description */
		AfterPaymentDescription?: string | null;

		/**
		 * Default button call to action
		 * Ex: Buy now, subscribe, ...
		 */
		ButtonCallToAction?: string | null;
		Currency?: CurrencyDetailsApiModel;

		/**
		 * Foreign key Currency
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		CurrencyId?: number | null;

		/** Product description */
		Description?: string | null;

		/**
		 * Product id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;

		/** Indicate that the product is set as featured */
		IsFeatured?: boolean | null;

		/** Product alias */
		Name?: string | null;

		/**
		 * Cost for shipping the product
		 * Type: double
		 */
		ShippingAmount?: number | null;

		/** Client instructions for shipping */
		ShippingDescription?: string | null;

		/** Product availability status */
		Status?: ProductDetailsApiModelStatus | null;

		/**
		 * Subtotal amount of product
		 * Type: double
		 */
		SubTotalAmount?: number | null;

		/**
		 * Total amount of product
		 * Type: double
		 */
		TotalAmount?: number | null;

		/**
		 * Total amount of product with shipping
		 * Type: double
		 */
		TotalWithShipping?: number | null;

		/** What happens next description */
		WhatHappensNextDescription?: string | null;
	}
	export interface ProductDetailsApiModelFormProperties {

		/** Product short link */
		AccessToken: FormControl<string | null | undefined>,

		/** After payment description */
		AfterPaymentDescription: FormControl<string | null | undefined>,

		/**
		 * Default button call to action
		 * Ex: Buy now, subscribe, ...
		 */
		ButtonCallToAction: FormControl<string | null | undefined>,

		/**
		 * Foreign key Currency
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		CurrencyId: FormControl<number | null | undefined>,

		/** Product description */
		Description: FormControl<string | null | undefined>,

		/**
		 * Product id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,

		/** Indicate that the product is set as featured */
		IsFeatured: FormControl<boolean | null | undefined>,

		/** Product alias */
		Name: FormControl<string | null | undefined>,

		/**
		 * Cost for shipping the product
		 * Type: double
		 */
		ShippingAmount: FormControl<number | null | undefined>,

		/** Client instructions for shipping */
		ShippingDescription: FormControl<string | null | undefined>,

		/** Product availability status */
		Status: FormControl<ProductDetailsApiModelStatus | null | undefined>,

		/**
		 * Subtotal amount of product
		 * Type: double
		 */
		SubTotalAmount: FormControl<number | null | undefined>,

		/**
		 * Total amount of product
		 * Type: double
		 */
		TotalAmount: FormControl<number | null | undefined>,

		/**
		 * Total amount of product with shipping
		 * Type: double
		 */
		TotalWithShipping: FormControl<number | null | undefined>,

		/** What happens next description */
		WhatHappensNextDescription: FormControl<string | null | undefined>,
	}
	export function CreateProductDetailsApiModelFormGroup() {
		return new FormGroup<ProductDetailsApiModelFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined),
			AfterPaymentDescription: new FormControl<string | null | undefined>(undefined),
			ButtonCallToAction: new FormControl<string | null | undefined>(undefined),
			CurrencyId: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			IsFeatured: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ShippingAmount: new FormControl<number | null | undefined>(undefined),
			ShippingDescription: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ProductDetailsApiModelStatus | null | undefined>(undefined),
			SubTotalAmount: new FormControl<number | null | undefined>(undefined),
			TotalAmount: new FormControl<number | null | undefined>(undefined),
			TotalWithShipping: new FormControl<number | null | undefined>(undefined),
			WhatHappensNextDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ProductDetailsApiModelStatus { Active = 'Active', NotAvailable = 'NotAvailable', Inactive = 'Inactive' }

	export interface OrderAttachmentApiModel {

		/** Link to the file */
		Link?: string | null;

		/** Hashed file name to avoid url wildguessing */
		ObfuscatedFileName?: string | null;

		/** Name of the file */
		OriginalFileName?: string | null;

		/**
		 * File size number in bytes
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		Size?: string | null;

		/** Type of the link (Attached or external) */
		Type?: EstimationAttachmentApiModelType | null;
	}
	export interface OrderAttachmentApiModelFormProperties {

		/** Link to the file */
		Link: FormControl<string | null | undefined>,

		/** Hashed file name to avoid url wildguessing */
		ObfuscatedFileName: FormControl<string | null | undefined>,

		/** Name of the file */
		OriginalFileName: FormControl<string | null | undefined>,

		/**
		 * File size number in bytes
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		Size: FormControl<string | null | undefined>,

		/** Type of the link (Attached or external) */
		Type: FormControl<EstimationAttachmentApiModelType | null | undefined>,
	}
	export function CreateOrderAttachmentApiModelFormGroup() {
		return new FormGroup<OrderAttachmentApiModelFormProperties>({
			Link: new FormControl<string | null | undefined>(undefined),
			ObfuscatedFileName: new FormControl<string | null | undefined>(undefined),
			OriginalFileName: new FormControl<string | null | undefined>(undefined),
			Size: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<EstimationAttachmentApiModelType | null | undefined>(undefined),
		});

	}

	export interface OrderCreateApiModel {

		/** After payment description */
		AfterPaymentDescription?: string | null;

		/** List of Order attachments */
		Attachments?: Array<OrderAttachmentApiModel>;

		/** Coupon to apply in order to get the discount */
		CouponCode?: string | null;

		/**
		 * Foreign key Currency
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		CurrencyId?: number | null;

		/** Product description */
		Description?: string | null;

		/**
		 * Discount amount
		 * Type: double
		 */
		DiscountAmount?: number | null;

		/** List of Order items */
		Items?: Array<OrderItemApiModel>;

		/** Product alias */
		Name?: string | null;

		/** Customer note to seller */
		Note?: string | null;
		OrderBillingDetails?: OrderBillingDetailsApiModel;
		OrderShippingDetails?: OrderShippingDetailsApiModel;

		/**
		 * Product id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ProductId?: number | null;

		/** Represent the referral for this order */
		Referral?: string | null;

		/**
		 * Cost for shipping the product
		 * Type: double
		 */
		ShippingAmount?: number | null;

		/** Client instructions for shipping */
		ShippingDescription?: string | null;

		/** Order status */
		Status?: ChangeOrderStatusApiModelStatus | null;

		/**
		 * Sub total amount
		 * Type: double
		 */
		SubTotalAmount?: number | null;

		/**
		 * Tax amount
		 * Type: double
		 */
		TaxAmount?: number | null;

		/**
		 * Total amount
		 * Type: double
		 */
		TotalAmount?: number | null;

		/** What happens next description */
		WhatHappensNextDescription?: string | null;
	}
	export interface OrderCreateApiModelFormProperties {

		/** After payment description */
		AfterPaymentDescription: FormControl<string | null | undefined>,

		/** Coupon to apply in order to get the discount */
		CouponCode: FormControl<string | null | undefined>,

		/**
		 * Foreign key Currency
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		CurrencyId: FormControl<number | null | undefined>,

		/** Product description */
		Description: FormControl<string | null | undefined>,

		/**
		 * Discount amount
		 * Type: double
		 */
		DiscountAmount: FormControl<number | null | undefined>,

		/** Product alias */
		Name: FormControl<string | null | undefined>,

		/** Customer note to seller */
		Note: FormControl<string | null | undefined>,

		/**
		 * Product id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ProductId: FormControl<number | null | undefined>,

		/** Represent the referral for this order */
		Referral: FormControl<string | null | undefined>,

		/**
		 * Cost for shipping the product
		 * Type: double
		 */
		ShippingAmount: FormControl<number | null | undefined>,

		/** Client instructions for shipping */
		ShippingDescription: FormControl<string | null | undefined>,

		/** Order status */
		Status: FormControl<ChangeOrderStatusApiModelStatus | null | undefined>,

		/**
		 * Sub total amount
		 * Type: double
		 */
		SubTotalAmount: FormControl<number | null | undefined>,

		/**
		 * Tax amount
		 * Type: double
		 */
		TaxAmount: FormControl<number | null | undefined>,

		/**
		 * Total amount
		 * Type: double
		 */
		TotalAmount: FormControl<number | null | undefined>,

		/** What happens next description */
		WhatHappensNextDescription: FormControl<string | null | undefined>,
	}
	export function CreateOrderCreateApiModelFormGroup() {
		return new FormGroup<OrderCreateApiModelFormProperties>({
			AfterPaymentDescription: new FormControl<string | null | undefined>(undefined),
			CouponCode: new FormControl<string | null | undefined>(undefined),
			CurrencyId: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DiscountAmount: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Note: new FormControl<string | null | undefined>(undefined),
			ProductId: new FormControl<number | null | undefined>(undefined),
			Referral: new FormControl<string | null | undefined>(undefined),
			ShippingAmount: new FormControl<number | null | undefined>(undefined),
			ShippingDescription: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ChangeOrderStatusApiModelStatus | null | undefined>(undefined),
			SubTotalAmount: new FormControl<number | null | undefined>(undefined),
			TaxAmount: new FormControl<number | null | undefined>(undefined),
			TotalAmount: new FormControl<number | null | undefined>(undefined),
			WhatHappensNextDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderItemApiModel {

		/**
		 * Work item cost
		 * Type: double
		 */
		Cost?: number | null;

		/** General description */
		Description?: string | null;

		/**
		 * Foreign key product item id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ProductItemId?: number | null;

		/**
		 * Work item quantity
		 * Type: double
		 */
		Quantity?: number | null;

		/** Order SKU */
		ReferenceId?: string | null;

		/**
		 * Subtotal amount of product
		 * Type: double
		 */
		SubTotalAmount?: number | null;

		/**
		 * Tax amount
		 * Type: double
		 */
		TaxAmount?: number | null;

		/**
		 * Foreign key Tax id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxId?: number | null;

		/**
		 * Tax percentage
		 * Type: double
		 */
		TaxPercentage?: number | null;

		/**
		 * Total amount of product
		 * Type: double
		 */
		TotalAmount?: number | null;

		/**
		 * Foreign key work type id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		WorkTypeId?: number | null;
	}
	export interface OrderItemApiModelFormProperties {

		/**
		 * Work item cost
		 * Type: double
		 */
		Cost: FormControl<number | null | undefined>,

		/** General description */
		Description: FormControl<string | null | undefined>,

		/**
		 * Foreign key product item id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ProductItemId: FormControl<number | null | undefined>,

		/**
		 * Work item quantity
		 * Type: double
		 */
		Quantity: FormControl<number | null | undefined>,

		/** Order SKU */
		ReferenceId: FormControl<string | null | undefined>,

		/**
		 * Subtotal amount of product
		 * Type: double
		 */
		SubTotalAmount: FormControl<number | null | undefined>,

		/**
		 * Tax amount
		 * Type: double
		 */
		TaxAmount: FormControl<number | null | undefined>,

		/**
		 * Foreign key Tax id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxId: FormControl<number | null | undefined>,

		/**
		 * Tax percentage
		 * Type: double
		 */
		TaxPercentage: FormControl<number | null | undefined>,

		/**
		 * Total amount of product
		 * Type: double
		 */
		TotalAmount: FormControl<number | null | undefined>,

		/**
		 * Foreign key work type id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		WorkTypeId: FormControl<number | null | undefined>,
	}
	export function CreateOrderItemApiModelFormGroup() {
		return new FormGroup<OrderItemApiModelFormProperties>({
			Cost: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ProductItemId: new FormControl<number | null | undefined>(undefined),
			Quantity: new FormControl<number | null | undefined>(undefined),
			ReferenceId: new FormControl<string | null | undefined>(undefined),
			SubTotalAmount: new FormControl<number | null | undefined>(undefined),
			TaxAmount: new FormControl<number | null | undefined>(undefined),
			TaxId: new FormControl<number | null | undefined>(undefined),
			TaxPercentage: new FormControl<number | null | undefined>(undefined),
			TotalAmount: new FormControl<number | null | undefined>(undefined),
			WorkTypeId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface OrderDeleteApiModel {

		/**
		 * Id of order to be deleted
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;
	}
	export interface OrderDeleteApiModelFormProperties {

		/**
		 * Id of order to be deleted
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,
	}
	export function CreateOrderDeleteApiModelFormGroup() {
		return new FormGroup<OrderDeleteApiModelFormProperties>({
			Id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface OrderFullDetailsApiModel {

		/** Product short link */
		AccessToken?: string | null;

		/** After payment description */
		AfterPaymentDescription?: string | null;

		/** List of Order attachments */
		Attachments?: Array<OrderAttachmentApiModel>;

		/** Coupon to apply in order to get the discount */
		CouponCode?: string | null;
		Currency?: CurrencyDetailsApiModel;

		/**
		 * Foreign key Currency
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		CurrencyId?: number | null;

		/** Product description */
		Description?: string | null;

		/**
		 * Discount amount
		 * Type: double
		 */
		DiscountAmount?: number | null;

		/**
		 * Order id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;

		/** List of Order items */
		Items?: Array<OrderItemApiModel>;

		/** Product alias */
		Name?: string | null;

		/** Customer note to seller */
		Note?: string | null;
		OrderBillingDetails?: OrderBillingDetailsApiModel;
		OrderShippingDetails?: OrderShippingDetailsApiModel;

		/**
		 * Product id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ProductId?: number | null;

		/** Represent the referral for this order */
		Referral?: string | null;

		/**
		 * Cost for shipping the product
		 * Type: double
		 */
		ShippingAmount?: number | null;

		/** Client instructions for shipping */
		ShippingDescription?: string | null;

		/** Order status */
		Status?: ChangeOrderStatusApiModelStatus | null;

		/**
		 * Sub total amount
		 * Type: double
		 */
		SubTotalAmount?: number | null;

		/**
		 * Tax amount
		 * Type: double
		 */
		TaxAmount?: number | null;

		/**
		 * Total amount
		 * Type: double
		 */
		TotalAmount?: number | null;

		/**
		 * Total amount with shipping
		 * Type: double
		 */
		TotalWithShipping?: number | null;

		/** What happens next description */
		WhatHappensNextDescription?: string | null;
	}
	export interface OrderFullDetailsApiModelFormProperties {

		/** Product short link */
		AccessToken: FormControl<string | null | undefined>,

		/** After payment description */
		AfterPaymentDescription: FormControl<string | null | undefined>,

		/** Coupon to apply in order to get the discount */
		CouponCode: FormControl<string | null | undefined>,

		/**
		 * Foreign key Currency
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		CurrencyId: FormControl<number | null | undefined>,

		/** Product description */
		Description: FormControl<string | null | undefined>,

		/**
		 * Discount amount
		 * Type: double
		 */
		DiscountAmount: FormControl<number | null | undefined>,

		/**
		 * Order id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,

		/** Product alias */
		Name: FormControl<string | null | undefined>,

		/** Customer note to seller */
		Note: FormControl<string | null | undefined>,

		/**
		 * Product id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ProductId: FormControl<number | null | undefined>,

		/** Represent the referral for this order */
		Referral: FormControl<string | null | undefined>,

		/**
		 * Cost for shipping the product
		 * Type: double
		 */
		ShippingAmount: FormControl<number | null | undefined>,

		/** Client instructions for shipping */
		ShippingDescription: FormControl<string | null | undefined>,

		/** Order status */
		Status: FormControl<ChangeOrderStatusApiModelStatus | null | undefined>,

		/**
		 * Sub total amount
		 * Type: double
		 */
		SubTotalAmount: FormControl<number | null | undefined>,

		/**
		 * Tax amount
		 * Type: double
		 */
		TaxAmount: FormControl<number | null | undefined>,

		/**
		 * Total amount
		 * Type: double
		 */
		TotalAmount: FormControl<number | null | undefined>,

		/**
		 * Total amount with shipping
		 * Type: double
		 */
		TotalWithShipping: FormControl<number | null | undefined>,

		/** What happens next description */
		WhatHappensNextDescription: FormControl<string | null | undefined>,
	}
	export function CreateOrderFullDetailsApiModelFormGroup() {
		return new FormGroup<OrderFullDetailsApiModelFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined),
			AfterPaymentDescription: new FormControl<string | null | undefined>(undefined),
			CouponCode: new FormControl<string | null | undefined>(undefined),
			CurrencyId: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DiscountAmount: new FormControl<number | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Note: new FormControl<string | null | undefined>(undefined),
			ProductId: new FormControl<number | null | undefined>(undefined),
			Referral: new FormControl<string | null | undefined>(undefined),
			ShippingAmount: new FormControl<number | null | undefined>(undefined),
			ShippingDescription: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ChangeOrderStatusApiModelStatus | null | undefined>(undefined),
			SubTotalAmount: new FormControl<number | null | undefined>(undefined),
			TaxAmount: new FormControl<number | null | undefined>(undefined),
			TotalAmount: new FormControl<number | null | undefined>(undefined),
			TotalWithShipping: new FormControl<number | null | undefined>(undefined),
			WhatHappensNextDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PaymentGateway {
		CanDisconnect?: boolean | null;
		ClientImportUri?: string | null;
		ConnectionType?: PaymentGatewayConnectionType | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ExternalConnectionId?: number | null;
		Fields?: Array<PaymentGatewayInputField>;
		IsConnected?: boolean | null;
		IsEnabled?: boolean | null;

		/** Type: double */
		MaximumAmount?: number | null;

		/** Type: double */
		MinimumAmount?: number | null;
		Name?: string | null;
		OAuthUri?: string | null;
		RefundUri?: string | null;
		SupportedCurrencies?: Array<Currency>;
		SupportsClientsImport?: boolean | null;
		SupportsInstantCheckout?: boolean | null;
		SupportsRefund?: boolean | null;
	}
	export interface PaymentGatewayFormProperties {
		CanDisconnect: FormControl<boolean | null | undefined>,
		ClientImportUri: FormControl<string | null | undefined>,
		ConnectionType: FormControl<PaymentGatewayConnectionType | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ExternalConnectionId: FormControl<number | null | undefined>,
		IsConnected: FormControl<boolean | null | undefined>,
		IsEnabled: FormControl<boolean | null | undefined>,

		/** Type: double */
		MaximumAmount: FormControl<number | null | undefined>,

		/** Type: double */
		MinimumAmount: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		OAuthUri: FormControl<string | null | undefined>,
		RefundUri: FormControl<string | null | undefined>,
		SupportsClientsImport: FormControl<boolean | null | undefined>,
		SupportsInstantCheckout: FormControl<boolean | null | undefined>,
		SupportsRefund: FormControl<boolean | null | undefined>,
	}
	export function CreatePaymentGatewayFormGroup() {
		return new FormGroup<PaymentGatewayFormProperties>({
			CanDisconnect: new FormControl<boolean | null | undefined>(undefined),
			ClientImportUri: new FormControl<string | null | undefined>(undefined),
			ConnectionType: new FormControl<PaymentGatewayConnectionType | null | undefined>(undefined),
			ExternalConnectionId: new FormControl<number | null | undefined>(undefined),
			IsConnected: new FormControl<boolean | null | undefined>(undefined),
			IsEnabled: new FormControl<boolean | null | undefined>(undefined),
			MaximumAmount: new FormControl<number | null | undefined>(undefined),
			MinimumAmount: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			OAuthUri: new FormControl<string | null | undefined>(undefined),
			RefundUri: new FormControl<string | null | undefined>(undefined),
			SupportsClientsImport: new FormControl<boolean | null | undefined>(undefined),
			SupportsInstantCheckout: new FormControl<boolean | null | undefined>(undefined),
			SupportsRefund: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum PaymentGatewayConnectionType { OAuth = 'OAuth', InputFields = 'InputFields', Dropdown = 'Dropdown' }

	export interface PaymentGatewayInputField {
		IsConfigurable?: boolean | null;
		Name?: string | null;
		Type?: PaymentGatewayInputFieldType | null;
		Value?: string | null;
		Values?: Array<string>;
	}
	export interface PaymentGatewayInputFieldFormProperties {
		IsConfigurable: FormControl<boolean | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Type: FormControl<PaymentGatewayInputFieldType | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreatePaymentGatewayInputFieldFormGroup() {
		return new FormGroup<PaymentGatewayInputFieldFormProperties>({
			IsConfigurable: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<PaymentGatewayInputFieldType | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PaymentGatewayInputFieldType { Input = 'Input', Dropdown = 'Dropdown' }

	export interface PaymentGatewayDetailsApiModel {

		/** Name of the payment gateway */
		Name?: string | null;

		/** List of supported currencies. */
		SupportedCurrencies?: Array<CurrencyApiModel>;
	}
	export interface PaymentGatewayDetailsApiModelFormProperties {

		/** Name of the payment gateway */
		Name: FormControl<string | null | undefined>,
	}
	export function CreatePaymentGatewayDetailsApiModelFormGroup() {
		return new FormGroup<PaymentGatewayDetailsApiModelFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PaymentLinkUriApiModel {

		/** Unique link to the invoice */
		Link?: string | null;
	}
	export interface PaymentLinkUriApiModelFormProperties {

		/** Unique link to the invoice */
		Link: FormControl<string | null | undefined>,
	}
	export function CreatePaymentLinkUriApiModelFormGroup() {
		return new FormGroup<PaymentLinkUriApiModelFormProperties>({
			Link: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProductAttachmentApiModel {

		/**
		 * Product attachment id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;

		/** Link to the file */
		Link?: string | null;

		/** Hashed file name to avoid url wildguessing */
		ObfuscatedFileName?: string | null;

		/** Name of the file */
		OriginalFileName?: string | null;

		/**
		 * File size number in bytes
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		Size?: string | null;

		/** Type of the link (Attached or external) */
		Type?: EstimationAttachmentApiModelType | null;
	}
	export interface ProductAttachmentApiModelFormProperties {

		/**
		 * Product attachment id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,

		/** Link to the file */
		Link: FormControl<string | null | undefined>,

		/** Hashed file name to avoid url wildguessing */
		ObfuscatedFileName: FormControl<string | null | undefined>,

		/** Name of the file */
		OriginalFileName: FormControl<string | null | undefined>,

		/**
		 * File size number in bytes
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		Size: FormControl<string | null | undefined>,

		/** Type of the link (Attached or external) */
		Type: FormControl<EstimationAttachmentApiModelType | null | undefined>,
	}
	export function CreateProductAttachmentApiModelFormGroup() {
		return new FormGroup<ProductAttachmentApiModelFormProperties>({
			Id: new FormControl<number | null | undefined>(undefined),
			Link: new FormControl<string | null | undefined>(undefined),
			ObfuscatedFileName: new FormControl<string | null | undefined>(undefined),
			OriginalFileName: new FormControl<string | null | undefined>(undefined),
			Size: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<EstimationAttachmentApiModelType | null | undefined>(undefined),
		});

	}

	export interface ProductCouponApiModel {

		/** Coupon to apply in order to get the discount */
		Code?: string | null;

		/**
		 * Discount amount
		 * Type: double
		 */
		DiscountAmount?: number | null;

		/**
		 * Discount percentage
		 * Type: double
		 */
		DiscountPercentage?: number | null;

		/**
		 * Product coupon id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;

		/** Coupon expiration date */
		ValidUntil?: Date | null;
	}
	export interface ProductCouponApiModelFormProperties {

		/** Coupon to apply in order to get the discount */
		Code: FormControl<string | null | undefined>,

		/**
		 * Discount amount
		 * Type: double
		 */
		DiscountAmount: FormControl<number | null | undefined>,

		/**
		 * Discount percentage
		 * Type: double
		 */
		DiscountPercentage: FormControl<number | null | undefined>,

		/**
		 * Product coupon id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,

		/** Coupon expiration date */
		ValidUntil: FormControl<Date | null | undefined>,
	}
	export function CreateProductCouponApiModelFormGroup() {
		return new FormGroup<ProductCouponApiModelFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined),
			DiscountAmount: new FormControl<number | null | undefined>(undefined),
			DiscountPercentage: new FormControl<number | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			ValidUntil: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ProductCreateApiModel {

		/** After payment description */
		AfterPaymentDescription?: string | null;

		/** List of product attachments */
		Attachments?: Array<ProductAttachmentApiModel>;

		/**
		 * Default button call to action
		 * Ex: Buy now, subscribe, ...
		 */
		ButtonCallToAction?: string | null;

		/** List of product coupons */
		Coupons?: Array<ProductCouponApiModel>;

		/**
		 * Foreign key Currency
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		CurrencyId?: number | null;

		/** Product description */
		Description?: string | null;

		/** List of product discounts */
		Discounts?: Array<ProductDiscountApiModel>;

		/** Indicate that the product is set as featured */
		IsFeatured?: boolean | null;

		/** List of product items */
		Items?: Array<ProductItemApiModel>;

		/** Product alias */
		Name?: string | null;

		/** List of enabled payment gateways for this product */
		PaymentGateways?: Array<ProductGatewayApiModel>;

		/**
		 * Cost for shipping the product
		 * Type: double
		 */
		ShippingAmount?: number | null;

		/** Client instructions for shipping */
		ShippingDescription?: string | null;

		/** Product availability status */
		Status?: ProductDetailsApiModelStatus | null;

		/** What happens next description */
		WhatHappensNextDescription?: string | null;
	}
	export interface ProductCreateApiModelFormProperties {

		/** After payment description */
		AfterPaymentDescription: FormControl<string | null | undefined>,

		/**
		 * Default button call to action
		 * Ex: Buy now, subscribe, ...
		 */
		ButtonCallToAction: FormControl<string | null | undefined>,

		/**
		 * Foreign key Currency
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		CurrencyId: FormControl<number | null | undefined>,

		/** Product description */
		Description: FormControl<string | null | undefined>,

		/** Indicate that the product is set as featured */
		IsFeatured: FormControl<boolean | null | undefined>,

		/** Product alias */
		Name: FormControl<string | null | undefined>,

		/**
		 * Cost for shipping the product
		 * Type: double
		 */
		ShippingAmount: FormControl<number | null | undefined>,

		/** Client instructions for shipping */
		ShippingDescription: FormControl<string | null | undefined>,

		/** Product availability status */
		Status: FormControl<ProductDetailsApiModelStatus | null | undefined>,

		/** What happens next description */
		WhatHappensNextDescription: FormControl<string | null | undefined>,
	}
	export function CreateProductCreateApiModelFormGroup() {
		return new FormGroup<ProductCreateApiModelFormProperties>({
			AfterPaymentDescription: new FormControl<string | null | undefined>(undefined),
			ButtonCallToAction: new FormControl<string | null | undefined>(undefined),
			CurrencyId: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			IsFeatured: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ShippingAmount: new FormControl<number | null | undefined>(undefined),
			ShippingDescription: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ProductDetailsApiModelStatus | null | undefined>(undefined),
			WhatHappensNextDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProductDiscountApiModel {

		/**
		 * Discount amount
		 * Type: double
		 */
		DiscountAmount?: number | null;

		/**
		 * Discount percentage
		 * Type: double
		 */
		DiscountPercentage?: number | null;

		/**
		 * Product discount id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;

		/** Name */
		Name?: string | null;

		/** Discount start date */
		ValidFrom?: Date | null;

		/** Discount expiration date */
		ValidTo?: Date | null;
	}
	export interface ProductDiscountApiModelFormProperties {

		/**
		 * Discount amount
		 * Type: double
		 */
		DiscountAmount: FormControl<number | null | undefined>,

		/**
		 * Discount percentage
		 * Type: double
		 */
		DiscountPercentage: FormControl<number | null | undefined>,

		/**
		 * Product discount id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,

		/** Name */
		Name: FormControl<string | null | undefined>,

		/** Discount start date */
		ValidFrom: FormControl<Date | null | undefined>,

		/** Discount expiration date */
		ValidTo: FormControl<Date | null | undefined>,
	}
	export function CreateProductDiscountApiModelFormGroup() {
		return new FormGroup<ProductDiscountApiModelFormProperties>({
			DiscountAmount: new FormControl<number | null | undefined>(undefined),
			DiscountPercentage: new FormControl<number | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ValidFrom: new FormControl<Date | null | undefined>(undefined),
			ValidTo: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ProductItemApiModel {

		/**
		 * Work item cost
		 * Type: double
		 */
		Cost?: number | null;

		/** General description */
		Description?: string | null;

		/**
		 * Product item id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;

		/**
		 * Minimum required quantity in order to buy a work item
		 * Type: double
		 */
		MinimumQuantity?: number | null;

		/** Product SKU */
		ReferenceId?: string | null;

		/**
		 * Subtotal amount of product
		 * Type: double
		 */
		SubTotalAmount?: number | null;

		/**
		 * Tax amount
		 * Type: double
		 */
		TaxAmount?: number | null;

		/**
		 * Foreign key Tax id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxId?: number | null;

		/**
		 * Tax percentage
		 * Type: double
		 */
		TaxPercentage?: number | null;

		/**
		 * Total amount of product
		 * Type: double
		 */
		TotalAmount?: number | null;

		/**
		 * Foreign key work type id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		WorkTypeId?: number | null;
	}
	export interface ProductItemApiModelFormProperties {

		/**
		 * Work item cost
		 * Type: double
		 */
		Cost: FormControl<number | null | undefined>,

		/** General description */
		Description: FormControl<string | null | undefined>,

		/**
		 * Product item id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,

		/**
		 * Minimum required quantity in order to buy a work item
		 * Type: double
		 */
		MinimumQuantity: FormControl<number | null | undefined>,

		/** Product SKU */
		ReferenceId: FormControl<string | null | undefined>,

		/**
		 * Subtotal amount of product
		 * Type: double
		 */
		SubTotalAmount: FormControl<number | null | undefined>,

		/**
		 * Tax amount
		 * Type: double
		 */
		TaxAmount: FormControl<number | null | undefined>,

		/**
		 * Foreign key Tax id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TaxId: FormControl<number | null | undefined>,

		/**
		 * Tax percentage
		 * Type: double
		 */
		TaxPercentage: FormControl<number | null | undefined>,

		/**
		 * Total amount of product
		 * Type: double
		 */
		TotalAmount: FormControl<number | null | undefined>,

		/**
		 * Foreign key work type id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		WorkTypeId: FormControl<number | null | undefined>,
	}
	export function CreateProductItemApiModelFormGroup() {
		return new FormGroup<ProductItemApiModelFormProperties>({
			Cost: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			MinimumQuantity: new FormControl<number | null | undefined>(undefined),
			ReferenceId: new FormControl<string | null | undefined>(undefined),
			SubTotalAmount: new FormControl<number | null | undefined>(undefined),
			TaxAmount: new FormControl<number | null | undefined>(undefined),
			TaxId: new FormControl<number | null | undefined>(undefined),
			TaxPercentage: new FormControl<number | null | undefined>(undefined),
			TotalAmount: new FormControl<number | null | undefined>(undefined),
			WorkTypeId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ProductGatewayApiModel {

		/** Payment gateway name */
		Name?: string | null;
	}
	export interface ProductGatewayApiModelFormProperties {

		/** Payment gateway name */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateProductGatewayApiModelFormGroup() {
		return new FormGroup<ProductGatewayApiModelFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProductDeleteApiModel {

		/**
		 * Id of product to be deleted
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;
	}
	export interface ProductDeleteApiModelFormProperties {

		/**
		 * Id of product to be deleted
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,
	}
	export function CreateProductDeleteApiModelFormGroup() {
		return new FormGroup<ProductDeleteApiModelFormProperties>({
			Id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ProductFullDetailsApiModel {

		/** Product short link */
		AccessToken?: string | null;

		/** After payment description */
		AfterPaymentDescription?: string | null;

		/** List of product attachments */
		Attachments?: Array<ProductAttachmentApiModel>;

		/**
		 * Default button call to action
		 * Ex: Buy now, subscribe, ...
		 */
		ButtonCallToAction?: string | null;

		/** List of product coupons */
		Coupons?: Array<ProductCouponApiModel>;
		Currency?: CurrencyDetailsApiModel;

		/**
		 * Foreign key Currency
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		CurrencyId?: number | null;

		/** Product description */
		Description?: string | null;

		/** List of product discounts */
		Discounts?: Array<ProductDiscountApiModel>;

		/**
		 * Product id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;

		/** Indicate that the product is set as featured */
		IsFeatured?: boolean | null;

		/** List of product items */
		Items?: Array<ProductItemApiModel>;

		/** Product alias */
		Name?: string | null;

		/** List of enabled payment gateways for this product */
		PaymentGateways?: Array<ProductGatewayApiModel>;

		/**
		 * Cost for shipping the product
		 * Type: double
		 */
		ShippingAmount?: number | null;

		/** Client instructions for shipping */
		ShippingDescription?: string | null;

		/** Product availability status */
		Status?: ProductDetailsApiModelStatus | null;

		/**
		 * Subtotal amount of product
		 * Type: double
		 */
		SubTotalAmount?: number | null;

		/**
		 * Total amount of product
		 * Type: double
		 */
		TotalAmount?: number | null;

		/**
		 * Total amount of product with shipping
		 * Type: double
		 */
		TotalWithShipping?: number | null;

		/** What happens next description */
		WhatHappensNextDescription?: string | null;
	}
	export interface ProductFullDetailsApiModelFormProperties {

		/** Product short link */
		AccessToken: FormControl<string | null | undefined>,

		/** After payment description */
		AfterPaymentDescription: FormControl<string | null | undefined>,

		/**
		 * Default button call to action
		 * Ex: Buy now, subscribe, ...
		 */
		ButtonCallToAction: FormControl<string | null | undefined>,

		/**
		 * Foreign key Currency
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		CurrencyId: FormControl<number | null | undefined>,

		/** Product description */
		Description: FormControl<string | null | undefined>,

		/**
		 * Product id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,

		/** Indicate that the product is set as featured */
		IsFeatured: FormControl<boolean | null | undefined>,

		/** Product alias */
		Name: FormControl<string | null | undefined>,

		/**
		 * Cost for shipping the product
		 * Type: double
		 */
		ShippingAmount: FormControl<number | null | undefined>,

		/** Client instructions for shipping */
		ShippingDescription: FormControl<string | null | undefined>,

		/** Product availability status */
		Status: FormControl<ProductDetailsApiModelStatus | null | undefined>,

		/**
		 * Subtotal amount of product
		 * Type: double
		 */
		SubTotalAmount: FormControl<number | null | undefined>,

		/**
		 * Total amount of product
		 * Type: double
		 */
		TotalAmount: FormControl<number | null | undefined>,

		/**
		 * Total amount of product with shipping
		 * Type: double
		 */
		TotalWithShipping: FormControl<number | null | undefined>,

		/** What happens next description */
		WhatHappensNextDescription: FormControl<string | null | undefined>,
	}
	export function CreateProductFullDetailsApiModelFormGroup() {
		return new FormGroup<ProductFullDetailsApiModelFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined),
			AfterPaymentDescription: new FormControl<string | null | undefined>(undefined),
			ButtonCallToAction: new FormControl<string | null | undefined>(undefined),
			CurrencyId: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			IsFeatured: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ShippingAmount: new FormControl<number | null | undefined>(undefined),
			ShippingDescription: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ProductDetailsApiModelStatus | null | undefined>(undefined),
			SubTotalAmount: new FormControl<number | null | undefined>(undefined),
			TotalAmount: new FormControl<number | null | undefined>(undefined),
			TotalWithShipping: new FormControl<number | null | undefined>(undefined),
			WhatHappensNextDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProductUpdateApiModel {

		/** After payment description */
		AfterPaymentDescription?: string | null;

		/** List of product attachments */
		Attachments?: Array<ProductAttachmentApiModel>;

		/**
		 * Default button call to action
		 * Ex: Buy now, subscribe, ...
		 */
		ButtonCallToAction?: string | null;

		/** List of product coupons */
		Coupons?: Array<ProductCouponApiModel>;

		/**
		 * Foreign key Currency
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		CurrencyId?: number | null;

		/** Product description */
		Description?: string | null;

		/** List of product discounts */
		Discounts?: Array<ProductDiscountApiModel>;

		/**
		 * Product id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;

		/** Indicate that the product is set as featured */
		IsFeatured?: boolean | null;

		/** List of product items */
		Items?: Array<ProductItemApiModel>;

		/** Product alias */
		Name?: string | null;

		/** List of enabled payment gateways for this product */
		PaymentGateways?: Array<ProductGatewayApiModel>;

		/**
		 * Cost for shipping the product
		 * Type: double
		 */
		ShippingAmount?: number | null;

		/** Client instructions for shipping */
		ShippingDescription?: string | null;

		/** Product availability status */
		Status?: ProductDetailsApiModelStatus | null;

		/** What happens next description */
		WhatHappensNextDescription?: string | null;
	}
	export interface ProductUpdateApiModelFormProperties {

		/** After payment description */
		AfterPaymentDescription: FormControl<string | null | undefined>,

		/**
		 * Default button call to action
		 * Ex: Buy now, subscribe, ...
		 */
		ButtonCallToAction: FormControl<string | null | undefined>,

		/**
		 * Foreign key Currency
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		CurrencyId: FormControl<number | null | undefined>,

		/** Product description */
		Description: FormControl<string | null | undefined>,

		/**
		 * Product id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,

		/** Indicate that the product is set as featured */
		IsFeatured: FormControl<boolean | null | undefined>,

		/** Product alias */
		Name: FormControl<string | null | undefined>,

		/**
		 * Cost for shipping the product
		 * Type: double
		 */
		ShippingAmount: FormControl<number | null | undefined>,

		/** Client instructions for shipping */
		ShippingDescription: FormControl<string | null | undefined>,

		/** Product availability status */
		Status: FormControl<ProductDetailsApiModelStatus | null | undefined>,

		/** What happens next description */
		WhatHappensNextDescription: FormControl<string | null | undefined>,
	}
	export function CreateProductUpdateApiModelFormGroup() {
		return new FormGroup<ProductUpdateApiModelFormProperties>({
			AfterPaymentDescription: new FormControl<string | null | undefined>(undefined),
			ButtonCallToAction: new FormControl<string | null | undefined>(undefined),
			CurrencyId: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			IsFeatured: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ShippingAmount: new FormControl<number | null | undefined>(undefined),
			ShippingDescription: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ProductDetailsApiModelStatus | null | undefined>(undefined),
			WhatHappensNextDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueryOptions {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PageSize?: number | null;
	}
	export interface QueryOptionsFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PageSize: FormControl<number | null | undefined>,
	}
	export function CreateQueryOptionsFormGroup() {
		return new FormGroup<QueryOptionsFormProperties>({
			Page: new FormControl<number | null | undefined>(undefined),
			PageSize: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface QueuedInvoice {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ClonedFromId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Id?: number | null;
		Invoice?: Invoice;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		InvoiceId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RecurringProfileId?: number | null;
		ScheduledFor?: Date | null;
		Status?: QueuedInvoiceStatus | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UserId?: number | null;
	}
	export interface QueuedInvoiceFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ClonedFromId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Id: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		InvoiceId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RecurringProfileId: FormControl<number | null | undefined>,
		ScheduledFor: FormControl<Date | null | undefined>,
		Status: FormControl<QueuedInvoiceStatus | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UserId: FormControl<number | null | undefined>,
	}
	export function CreateQueuedInvoiceFormGroup() {
		return new FormGroup<QueuedInvoiceFormProperties>({
			ClonedFromId: new FormControl<number | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			InvoiceId: new FormControl<number | null | undefined>(undefined),
			RecurringProfileId: new FormControl<number | null | undefined>(undefined),
			ScheduledFor: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<QueuedInvoiceStatus | null | undefined>(undefined),
			UserId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum QueuedInvoiceStatus { Pending = 'Pending', Cancelled = 'Cancelled', Failed = 'Failed', Processed = 'Processed' }

	export interface RecurringProfile {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DayOfMonth?: number | null;
		DayOfWeek?: InvoiceRecurringApiModelDayOfWeek | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DueDateInDays?: number | null;
		EndOfRecurrance?: Date | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Id?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		InvoiceId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Month?: number | null;
		RecurrancePattern?: InvoiceRecurringApiModelRecurrancePattern | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RecurranceValue?: number | null;
		StartOfRecurrance?: Date | null;
		Status?: InvoiceRecurringApiModelStatus | null;
		Title?: string | null;
	}
	export interface RecurringProfileFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DayOfMonth: FormControl<number | null | undefined>,
		DayOfWeek: FormControl<InvoiceRecurringApiModelDayOfWeek | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DueDateInDays: FormControl<number | null | undefined>,
		EndOfRecurrance: FormControl<Date | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Id: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		InvoiceId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Month: FormControl<number | null | undefined>,
		RecurrancePattern: FormControl<InvoiceRecurringApiModelRecurrancePattern | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RecurranceValue: FormControl<number | null | undefined>,
		StartOfRecurrance: FormControl<Date | null | undefined>,
		Status: FormControl<InvoiceRecurringApiModelStatus | null | undefined>,
		Title: FormControl<string | null | undefined>,
	}
	export function CreateRecurringProfileFormGroup() {
		return new FormGroup<RecurringProfileFormProperties>({
			DayOfMonth: new FormControl<number | null | undefined>(undefined),
			DayOfWeek: new FormControl<InvoiceRecurringApiModelDayOfWeek | null | undefined>(undefined),
			DueDateInDays: new FormControl<number | null | undefined>(undefined),
			EndOfRecurrance: new FormControl<Date | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			InvoiceId: new FormControl<number | null | undefined>(undefined),
			Month: new FormControl<number | null | undefined>(undefined),
			RecurrancePattern: new FormControl<InvoiceRecurringApiModelRecurrancePattern | null | undefined>(undefined),
			RecurranceValue: new FormControl<number | null | undefined>(undefined),
			StartOfRecurrance: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<InvoiceRecurringApiModelStatus | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchRequest {
		Order?: SearchRequestOrder | null;
		OrderBy?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PageSize?: number | null;
		Query?: string | null;
	}
	export interface SearchRequestFormProperties {
		Order: FormControl<SearchRequestOrder | null | undefined>,
		OrderBy: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PageSize: FormControl<number | null | undefined>,
		Query: FormControl<string | null | undefined>,
	}
	export function CreateSearchRequestFormGroup() {
		return new FormGroup<SearchRequestFormProperties>({
			Order: new FormControl<SearchRequestOrder | null | undefined>(undefined),
			OrderBy: new FormControl<string | null | undefined>(undefined),
			Page: new FormControl<number | null | undefined>(undefined),
			PageSize: new FormControl<number | null | undefined>(undefined),
			Query: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SearchRequestOrder { None = 'None', Asc = 'Asc', Desc = 'Desc' }

	export interface SendEstimationToClientApiModel {

		/** Should attach pdf file */
		AttachPdf?: boolean | null;

		/**
		 * Id of the estimation
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		EstimationId?: number | null;

		/**
		 * Id of the estimation
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;

		/** Message to be embedded in the email */
		Message?: string | null;

		/** Should email copy be send to self */
		SendToSelf?: boolean | null;

		/** Subject for the email */
		Subject?: string | null;
	}
	export interface SendEstimationToClientApiModelFormProperties {

		/** Should attach pdf file */
		AttachPdf: FormControl<boolean | null | undefined>,

		/**
		 * Id of the estimation
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		EstimationId: FormControl<number | null | undefined>,

		/**
		 * Id of the estimation
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,

		/** Message to be embedded in the email */
		Message: FormControl<string | null | undefined>,

		/** Should email copy be send to self */
		SendToSelf: FormControl<boolean | null | undefined>,

		/** Subject for the email */
		Subject: FormControl<string | null | undefined>,
	}
	export function CreateSendEstimationToClientApiModelFormGroup() {
		return new FormGroup<SendEstimationToClientApiModelFormProperties>({
			AttachPdf: new FormControl<boolean | null | undefined>(undefined),
			EstimationId: new FormControl<number | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			SendToSelf: new FormControl<boolean | null | undefined>(undefined),
			Subject: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SendInvoiceToAccountantApiModel {

		/**
		 * Id of the invoice
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;
	}
	export interface SendInvoiceToAccountantApiModelFormProperties {

		/**
		 * Id of the invoice
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,
	}
	export function CreateSendInvoiceToAccountantApiModelFormGroup() {
		return new FormGroup<SendInvoiceToAccountantApiModelFormProperties>({
			Id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SendInvoiceToClientApiModel {

		/** Should attach pdf file */
		AttachPdf?: boolean | null;

		/**
		 * Id of the invoice
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;

		/**
		 * Id of the invoice
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		InvoiceId?: number | null;

		/** Message to be embedded in the email */
		Message?: string | null;

		/** Should email copy be send to self */
		SendToSelf?: boolean | null;

		/** Subject for the email */
		Subject?: string | null;
	}
	export interface SendInvoiceToClientApiModelFormProperties {

		/** Should attach pdf file */
		AttachPdf: FormControl<boolean | null | undefined>,

		/**
		 * Id of the invoice
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,

		/**
		 * Id of the invoice
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		InvoiceId: FormControl<number | null | undefined>,

		/** Message to be embedded in the email */
		Message: FormControl<string | null | undefined>,

		/** Should email copy be send to self */
		SendToSelf: FormControl<boolean | null | undefined>,

		/** Subject for the email */
		Subject: FormControl<string | null | undefined>,
	}
	export function CreateSendInvoiceToClientApiModelFormGroup() {
		return new FormGroup<SendInvoiceToClientApiModelFormProperties>({
			AttachPdf: new FormControl<boolean | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			InvoiceId: new FormControl<number | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			SendToSelf: new FormControl<boolean | null | undefined>(undefined),
			Subject: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TaxCreateApiModel {

		/** Name of the task */
		Name?: string | null;

		/**
		 * Task percentage. Ex: 18%
		 * Type: double
		 */
		Percentage?: number | null;
	}
	export interface TaxCreateApiModelFormProperties {

		/** Name of the task */
		Name: FormControl<string | null | undefined>,

		/**
		 * Task percentage. Ex: 18%
		 * Type: double
		 */
		Percentage: FormControl<number | null | undefined>,
	}
	export function CreateTaxCreateApiModelFormGroup() {
		return new FormGroup<TaxCreateApiModelFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Percentage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TaxDeleteApiModel {

		/**
		 * Id of tax to be deleted
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;
	}
	export interface TaxDeleteApiModelFormProperties {

		/**
		 * Id of tax to be deleted
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,
	}
	export function CreateTaxDeleteApiModelFormGroup() {
		return new FormGroup<TaxDeleteApiModelFormProperties>({
			Id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TaxDetailsApiModel {

		/** Date of creation */
		CreatedOn?: Date | null;

		/**
		 * Entity id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;

		/** Name of the task */
		Name?: string | null;

		/**
		 * Task percentage. Ex: 18%
		 * Type: double
		 */
		Percentage?: number | null;
	}
	export interface TaxDetailsApiModelFormProperties {

		/** Date of creation */
		CreatedOn: FormControl<Date | null | undefined>,

		/**
		 * Entity id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,

		/** Name of the task */
		Name: FormControl<string | null | undefined>,

		/**
		 * Task percentage. Ex: 18%
		 * Type: double
		 */
		Percentage: FormControl<number | null | undefined>,
	}
	export function CreateTaxDetailsApiModelFormGroup() {
		return new FormGroup<TaxDetailsApiModelFormProperties>({
			CreatedOn: new FormControl<Date | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Percentage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TaxUpdateApiModel {

		/**
		 * Entity id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;

		/** Name of the task */
		Name?: string | null;

		/**
		 * Task percentage. Ex: 18%
		 * Type: double
		 */
		Percentage?: number | null;
	}
	export interface TaxUpdateApiModelFormProperties {

		/**
		 * Entity id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,

		/** Name of the task */
		Name: FormControl<string | null | undefined>,

		/**
		 * Task percentage. Ex: 18%
		 * Type: double
		 */
		Percentage: FormControl<number | null | undefined>,
	}
	export function CreateTaxUpdateApiModelFormGroup() {
		return new FormGroup<TaxUpdateApiModelFormProperties>({
			Id: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Percentage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UILanguageDetailsApiModel {

		/**
		 * Entity id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;

		/** Name of the country */
		Name?: string | null;

		/** Ui culture options */
		UiCulture?: string | null;
	}
	export interface UILanguageDetailsApiModelFormProperties {

		/**
		 * Entity id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,

		/** Name of the country */
		Name: FormControl<string | null | undefined>,

		/** Ui culture options */
		UiCulture: FormControl<string | null | undefined>,
	}
	export function CreateUILanguageDetailsApiModelFormGroup() {
		return new FormGroup<UILanguageDetailsApiModelFormProperties>({
			Id: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			UiCulture: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WorkTypeCreateApiModel {

		/** Indicates the title of of the work type (Logo design, development...) */
		Title?: string | null;
	}
	export interface WorkTypeCreateApiModelFormProperties {

		/** Indicates the title of of the work type (Logo design, development...) */
		Title: FormControl<string | null | undefined>,
	}
	export function CreateWorkTypeCreateApiModelFormGroup() {
		return new FormGroup<WorkTypeCreateApiModelFormProperties>({
			Title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WorkTypeDeleteApiModel {

		/**
		 * Id of work type to be deleted
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;
	}
	export interface WorkTypeDeleteApiModelFormProperties {

		/**
		 * Id of work type to be deleted
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,
	}
	export function CreateWorkTypeDeleteApiModelFormGroup() {
		return new FormGroup<WorkTypeDeleteApiModelFormProperties>({
			Id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface WorkTypeDetailsApiModel {

		/** Date of creation */
		CreatedOn?: Date | null;

		/**
		 * Entity id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;

		/** Indicates the title of of the work type (Logo design, development...) */
		Title?: string | null;
	}
	export interface WorkTypeDetailsApiModelFormProperties {

		/** Date of creation */
		CreatedOn: FormControl<Date | null | undefined>,

		/**
		 * Entity id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,

		/** Indicates the title of of the work type (Logo design, development...) */
		Title: FormControl<string | null | undefined>,
	}
	export function CreateWorkTypeDetailsApiModelFormGroup() {
		return new FormGroup<WorkTypeDetailsApiModelFormProperties>({
			CreatedOn: new FormControl<Date | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WorkTypeUpdateApiModel {

		/**
		 * Entity id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;

		/** Indicates the title of of the work type (Logo design, development...) */
		Title?: string | null;
	}
	export interface WorkTypeUpdateApiModelFormProperties {

		/**
		 * Entity id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,

		/** Indicates the title of of the work type (Logo design, development...) */
		Title: FormControl<string | null | undefined>,
	}
	export function CreateWorkTypeUpdateApiModelFormGroup() {
		return new FormGroup<WorkTypeUpdateApiModelFormProperties>({
			Id: new FormControl<number | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Return all clients for the account
		 * Get api/client/all
		 * @return {Array<ClientDetailsApiModel>} OK
		 */
		ApiClientAllGet(headersHandler?: () => HttpHeaders): Observable<Array<ClientDetailsApiModel>> {
			return this.http.get<Array<ClientDetailsApiModel>>(this.baseUri + 'api/client/all', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Check if the provided client can be deleted
		 * Get api/client/candelete
		 * @param {number} id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {boolean} OK
		 */
		ApiClientCandeleteGetById(id: number, headersHandler?: () => HttpHeaders): Observable<boolean> {
			return this.http.get<boolean>(this.baseUri + 'api/client/candelete?id=' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete an existing client
		 * Post api/client/delete
		 * @return {number} OK
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ApiClientDeletePost(requestBody: ClientDeleteApiModel, headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/client/delete', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Return client details. Activities and invoices included.
		 * Get api/client/details
		 * @param {number} id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ClientDetailsApiModel} OK
		 */
		ApiClientDetailsGetById(id: number, headersHandler?: () => HttpHeaders): Observable<ClientDetailsApiModel> {
			return this.http.get<ClientDetailsApiModel>(this.baseUri + 'api/client/details?id=' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a client
		 * Post api/client/new
		 * @return {number} OK
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ApiClientNewPost(requestBody: ClientCreateApiModel, headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/client/new', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Update an existing client
		 * Post api/client/update
		 * @return {void} 
		 */
		ApiClientUpdatePost(requestBody: ClientUpdateApiModel, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/client/update', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Return all estimation for the account
		 * Get api/estimation/all
		 * @param {number} queryOptions_page Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} queryOptions_pageSize Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ListResult_EstimationDetailsApiModel_} OK
		 */
		ApiEstimationAllGetByQueryOptions_pageAndQueryOptions_pageSize(queryOptions_page: number | null | undefined, queryOptions_pageSize: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<ListResult_EstimationDetailsApiModel_> {
			return this.http.get<ListResult_EstimationDetailsApiModel_>(this.baseUri + 'api/estimation/all?queryOptions_page=' + queryOptions_page + '&queryOptions_pageSize=' + queryOptions_pageSize, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Change estimation status
		 * Post api/estimation/changestatus
		 * @return {boolean} OK
		 */
		ApiEstimationChangestatusPost(requestBody: EstimationChangeStatusApiModel, headersHandler?: () => HttpHeaders): Observable<boolean> {
			return this.http.post<boolean>(this.baseUri + 'api/estimation/changestatus', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Convert the estimation to an invoice
		 * Post api/estimation/convert
		 * @return {InvoiceFullDetailsApiModel} OK
		 */
		ApiEstimationConvertPost(requestBody: number, headersHandler?: () => HttpHeaders): Observable<InvoiceFullDetailsApiModel> {
			return this.http.post<InvoiceFullDetailsApiModel>(this.baseUri + 'api/estimation/convert', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete an existing estimation
		 * Post api/estimation/delete
		 * @return {number} OK
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ApiEstimationDeletePost(requestBody: EstimationDeleteApiModel, headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/estimation/delete', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Return estimation data
		 * Get api/estimation/details
		 * @param {number} id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {EstimationFullDetailsApiModel} OK
		 */
		ApiEstimationDetailsGetById(id: number, headersHandler?: () => HttpHeaders): Observable<EstimationFullDetailsApiModel> {
			return this.http.get<EstimationFullDetailsApiModel>(this.baseUri + 'api/estimation/details?id=' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create an estimation
		 * Post api/estimation/new
		 * @return {EstimationFullDetailsApiModel} OK
		 */
		ApiEstimationNewPost(requestBody: EstimationCreateApiModel, headersHandler?: () => HttpHeaders): Observable<EstimationFullDetailsApiModel> {
			return this.http.post<EstimationFullDetailsApiModel>(this.baseUri + 'api/estimation/new', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Send the provided estimation to the client
		 * Post api/estimation/sendtoclient
		 * @return {number} OK
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ApiEstimationSendtoclientPost(requestBody: SendEstimationToClientApiModel, headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/estimation/sendtoclient', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve the status of the estimation
		 * Get api/estimation/status
		 * @param {number} id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {EstimationChangeStatusApiModelStatus} OK
		 */
		ApiEstimationStatusGetById(id: number, headersHandler?: () => HttpHeaders): Observable<EstimationChangeStatusApiModelStatus> {
			return this.http.get<EstimationChangeStatusApiModelStatus>(this.baseUri + 'api/estimation/status?id=' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update an existing estimation
		 * Post api/estimation/update
		 * @return {EstimationFullDetailsApiModel} OK
		 */
		ApiEstimationUpdatePost(requestBody: EstimationUpdateApiModel, headersHandler?: () => HttpHeaders): Observable<EstimationFullDetailsApiModel> {
			return this.http.post<EstimationFullDetailsApiModel>(this.baseUri + 'api/estimation/update', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Return the unique url to the client's invoice
		 * Get api/estimation/uri
		 * @param {number} id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {EstimationUriApiModel} OK
		 */
		ApiEstimationUriGetById(id: number, headersHandler?: () => HttpHeaders): Observable<EstimationUriApiModel> {
			return this.http.get<EstimationUriApiModel>(this.baseUri + 'api/estimation/uri?id=' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Return all of the platform supported countries
		 * Get api/general/countries
		 * @return {Array<CountryDetailsApiModel>} OK
		 */
		ApiGeneralCountriesGet(headersHandler?: () => HttpHeaders): Observable<Array<CountryDetailsApiModel>> {
			return this.http.get<Array<CountryDetailsApiModel>>(this.baseUri + 'api/general/countries', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Return all of the platform supported currencies
		 * Get api/general/currencies
		 * @return {Array<CurrencyDetailsApiModel>} OK
		 */
		ApiGeneralCurrenciesGet(headersHandler?: () => HttpHeaders): Observable<Array<CurrencyDetailsApiModel>> {
			return this.http.get<Array<CurrencyDetailsApiModel>>(this.baseUri + 'api/general/currencies', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Return all of the platform supported Date Formats
		 * Get api/general/dateformats
		 * @return {Array<string>} OK
		 */
		ApiGeneralDateformatsGet(headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/general/dateformats', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Return all of the platform supported UI languages
		 * Get api/general/uilanguages
		 * @return {Array<UILanguageDetailsApiModel>} OK
		 */
		ApiGeneralUilanguagesGet(headersHandler?: () => HttpHeaders): Observable<Array<UILanguageDetailsApiModel>> {
			return this.http.get<Array<UILanguageDetailsApiModel>>(this.baseUri + 'api/general/uilanguages', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Return all invoices for the account
		 * Get api/invoice/all
		 * @param {number} queryOptions_page Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} queryOptions_pageSize Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ListResult_InvoiceDetailsApiModel_} OK
		 */
		ApiInvoiceAllGetByQueryOptions_pageAndQueryOptions_pageSize(queryOptions_page: number | null | undefined, queryOptions_pageSize: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<ListResult_InvoiceDetailsApiModel_> {
			return this.http.get<ListResult_InvoiceDetailsApiModel_>(this.baseUri + 'api/invoice/all?queryOptions_page=' + queryOptions_page + '&queryOptions_pageSize=' + queryOptions_pageSize, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Return all invoice categories for the account
		 * Get api/invoice/allcategories
		 * @return {ListResult_InvoiceCategoryApiModel_} OK
		 */
		ApiInvoiceAllcategoriesGetByQuery(query: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<ListResult_InvoiceCategoryApiModel_> {
			return this.http.get<ListResult_InvoiceCategoryApiModel_>(this.baseUri + 'api/invoice/allcategories?query=' + (query == null ? '' : encodeURIComponent(query)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Change invoice status
		 * Post api/invoice/changestatus
		 * @return {boolean} OK
		 */
		ApiInvoiceChangestatusPost(requestBody: ChangeStatusApiModel, headersHandler?: () => HttpHeaders): Observable<boolean> {
			return this.http.post<boolean>(this.baseUri + 'api/invoice/changestatus', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete an existing invoice
		 * Post api/invoice/delete
		 * @return {number} OK
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ApiInvoiceDeletePost(requestBody: InvoiceDeleteApiModel, headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/invoice/delete', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete an existing invoice category
		 * Post api/invoice/deletecategory
		 * @return {number} OK
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ApiInvoiceDeletecategoryPost(requestBody: InvoiceCategoryDeleteApiModel, headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/invoice/deletecategory', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Return invoice data
		 * Get api/invoice/details
		 * @param {number} id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {InvoiceFullDetailsApiModel} OK
		 */
		ApiInvoiceDetailsGetById(id: number, headersHandler?: () => HttpHeaders): Observable<InvoiceFullDetailsApiModel> {
			return this.http.get<InvoiceFullDetailsApiModel>(this.baseUri + 'api/invoice/details?id=' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create an invoice
		 * Post api/invoice/new
		 * @return {InvoiceFullDetailsApiModel} OK
		 */
		ApiInvoiceNewPost(requestBody: InvoiceCreateApiModel, headersHandler?: () => HttpHeaders): Observable<InvoiceFullDetailsApiModel> {
			return this.http.post<InvoiceFullDetailsApiModel>(this.baseUri + 'api/invoice/new', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Create an invoice category
		 * Post api/invoice/newcategory
		 * @return {InvoiceCategoryApiModel} OK
		 */
		ApiInvoiceNewcategoryPost(requestBody: InvoiceCategoryCreateApiModel, headersHandler?: () => HttpHeaders): Observable<InvoiceCategoryApiModel> {
			return this.http.post<InvoiceCategoryApiModel>(this.baseUri + 'api/invoice/newcategory', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Return the PDF for the invoice
		 * Get api/invoice/pdf
		 * @param {number} id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {InvoiceUriApiModel} OK
		 */
		ApiInvoicePdfGetByIdAndSignedVersion(id: number, signedVersion: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<InvoiceUriApiModel> {
			return this.http.get<InvoiceUriApiModel>(this.baseUri + 'api/invoice/pdf?id=' + id + '&signedVersion=' + signedVersion, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Send the provided invoice to the accountant
		 * Post api/invoice/sendtoaccountant
		 * @return {number} OK
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ApiInvoiceSendtoaccountantPost(requestBody: SendInvoiceToAccountantApiModel, headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/invoice/sendtoaccountant', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Send the provided invoice to the client
		 * Post api/invoice/sendtoclient
		 * @return {number} OK
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ApiInvoiceSendtoclientPost(requestBody: SendInvoiceToClientApiModel, headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/invoice/sendtoclient', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve the status of the invoice
		 * Get api/invoice/status
		 * @param {number} id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ChangeStatusApiModelStatus} OK
		 */
		ApiInvoiceStatusGetById(id: number, headersHandler?: () => HttpHeaders): Observable<ChangeStatusApiModelStatus> {
			return this.http.get<ChangeStatusApiModelStatus>(this.baseUri + 'api/invoice/status?id=' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update an existing invoice
		 * Post api/invoice/update
		 * @return {InvoiceFullDetailsApiModel} OK
		 */
		ApiInvoiceUpdatePost(requestBody: InvoiceUpdateApiModel, headersHandler?: () => HttpHeaders): Observable<InvoiceFullDetailsApiModel> {
			return this.http.post<InvoiceFullDetailsApiModel>(this.baseUri + 'api/invoice/update', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Update an existing invoice category
		 * Post api/invoice/updatecategory
		 * @return {InvoiceCategoryApiModel} OK
		 */
		ApiInvoiceUpdatecategoryPost(requestBody: InvoiceCategoryUpdateApiModel, headersHandler?: () => HttpHeaders): Observable<InvoiceCategoryApiModel> {
			return this.http.post<InvoiceCategoryApiModel>(this.baseUri + 'api/invoice/updatecategory', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Return the unique url to the client's invoice
		 * Get api/invoice/uri
		 * @param {number} id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {InvoiceUriApiModel} OK
		 */
		ApiInvoiceUriGetById(id: number, headersHandler?: () => HttpHeaders): Observable<InvoiceUriApiModel> {
			return this.http.get<InvoiceUriApiModel>(this.baseUri + 'api/invoice/uri?id=' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Return all orders for the account
		 * Get api/order/all
		 * @param {number} queryOptions_page Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} queryOptions_pageSize Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ListResult_OrderDetailsApiModel_} OK
		 */
		ApiOrderAllGetByQueryOptions_pageAndQueryOptions_pageSize(queryOptions_page: number | null | undefined, queryOptions_pageSize: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<ListResult_OrderDetailsApiModel_> {
			return this.http.get<ListResult_OrderDetailsApiModel_>(this.baseUri + 'api/order/all?queryOptions_page=' + queryOptions_page + '&queryOptions_pageSize=' + queryOptions_pageSize, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Change order shipping details
		 * Post api/order/changeshippingdetails
		 * @param {number} orderId Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		ApiOrderChangeshippingdetailsPostByOrderId(orderId: number, requestBody: OrderShippingDetailsApiModel, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/order/changeshippingdetails?orderId=' + orderId, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Change order status
		 * Post api/order/changestatus
		 * @return {void} 
		 */
		ApiOrderChangestatusPost(requestBody: ChangeOrderStatusApiModel, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/order/changestatus', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an existing order
		 * Post api/order/delete
		 * @return {number} OK
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ApiOrderDeletePost(requestBody: OrderDeleteApiModel, headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/order/delete', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Return order details
		 * Get api/order/details
		 * @param {number} id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {OrderFullDetailsApiModel} OK
		 */
		ApiOrderDetailsGetById(id: number, headersHandler?: () => HttpHeaders): Observable<OrderFullDetailsApiModel> {
			return this.http.get<OrderFullDetailsApiModel>(this.baseUri + 'api/order/details?id=' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create an order
		 * Post api/order/new
		 * @return {number} OK
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ApiOrderNewPost(requestBody: OrderCreateApiModel, headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/order/new', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Return all supported payment gateways (no currencies means all are supported)
		 * Get api/payment/supported
		 * @return {Array<PaymentGatewayDetailsApiModel>} OK
		 */
		ApiPaymentSupportedGet(headersHandler?: () => HttpHeaders): Observable<Array<PaymentGatewayDetailsApiModel>> {
			return this.http.get<Array<PaymentGatewayDetailsApiModel>>(this.baseUri + 'api/payment/supported', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a payment link
		 * Get api/paymentlink/all
		 * @param {number} queryOptions_page Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} queryOptions_pageSize Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ListResult_PaymentLink_} OK
		 */
		ApiPaymentlinkAllGetByQueryOptions_pageAndQueryOptions_pageSize(queryOptions_page: number | null | undefined, queryOptions_pageSize: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<ListResult_PaymentLink_> {
			return this.http.get<ListResult_PaymentLink_>(this.baseUri + 'api/paymentlink/all?queryOptions_page=' + queryOptions_page + '&queryOptions_pageSize=' + queryOptions_pageSize, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete an existing payment link
		 * Post api/paymentlink/delete
		 * @return {number} OK
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ApiPaymentlinkDeletePost(requestBody: PaymentLink, headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/paymentlink/delete', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Create a payment link
		 * Post api/paymentlink/new
		 * @return {number} OK
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ApiPaymentlinkNewPost(requestBody: PaymentLink, headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/paymentlink/new', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Return the unique url to the client's payment link
		 * Get api/paymentlink/uri
		 * @param {number} id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {PaymentLinkUriApiModel} OK
		 */
		ApiPaymentlinkUriGetById(id: number, headersHandler?: () => HttpHeaders): Observable<PaymentLinkUriApiModel> {
			return this.http.get<PaymentLinkUriApiModel>(this.baseUri + 'api/paymentlink/uri?id=' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Return all products for the account
		 * Get api/product/all
		 * @param {number} queryOptions_page Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} queryOptions_pageSize Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ListResult_ProductDetailsApiModel_} OK
		 */
		ApiProductAllGetByQueryOptions_pageAndQueryOptions_pageSize(queryOptions_page: number | null | undefined, queryOptions_pageSize: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<ListResult_ProductDetailsApiModel_> {
			return this.http.get<ListResult_ProductDetailsApiModel_>(this.baseUri + 'api/product/all?queryOptions_page=' + queryOptions_page + '&queryOptions_pageSize=' + queryOptions_pageSize, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete an existing product
		 * Post api/product/delete
		 * @return {number} OK
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ApiProductDeletePost(requestBody: ProductDeleteApiModel, headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/product/delete', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Return product details
		 * Get api/product/details
		 * @param {number} id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ProductFullDetailsApiModel} OK
		 */
		ApiProductDetailsGetById(id: number, headersHandler?: () => HttpHeaders): Observable<ProductFullDetailsApiModel> {
			return this.http.get<ProductFullDetailsApiModel>(this.baseUri + 'api/product/details?id=' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a product
		 * Post api/product/new
		 * @return {number} OK
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ApiProductNewPost(requestBody: ProductCreateApiModel, headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/product/new', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Update an existing product
		 * Post api/product/update
		 * @return {void} 
		 */
		ApiProductUpdatePost(requestBody: ProductUpdateApiModel, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/product/update', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Return all taxes for the account
		 * Get api/tax/all
		 * @return {Array<TaxDetailsApiModel>} OK
		 */
		ApiTaxAllGet(headersHandler?: () => HttpHeaders): Observable<Array<TaxDetailsApiModel>> {
			return this.http.get<Array<TaxDetailsApiModel>>(this.baseUri + 'api/tax/all', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete an existing tax
		 * Post api/tax/delete
		 * @return {number} OK
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ApiTaxDeletePost(requestBody: TaxDeleteApiModel, headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/tax/delete', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Create a tax
		 * Post api/tax/new
		 * @return {number} OK
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ApiTaxNewPost(requestBody: TaxCreateApiModel, headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/tax/new', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Update an existing tax
		 * Post api/tax/update
		 * @return {void} 
		 */
		ApiTaxUpdatePost(requestBody: TaxUpdateApiModel, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/tax/update', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Return all work types for the account
		 * Get api/worktype/all
		 * @return {Array<WorkTypeDetailsApiModel>} OK
		 */
		ApiWorktypeAllGet(headersHandler?: () => HttpHeaders): Observable<Array<WorkTypeDetailsApiModel>> {
			return this.http.get<Array<WorkTypeDetailsApiModel>>(this.baseUri + 'api/worktype/all', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete an existing work type
		 * Post api/worktype/delete
		 * @return {number} OK
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ApiWorktypeDeletePost(requestBody: WorkTypeDeleteApiModel, headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/worktype/delete', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Return work type details
		 * Get api/worktype/details
		 * @param {number} workTypeId Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {WorkTypeDetailsApiModel} OK
		 */
		ApiWorktypeDetailsGetByWorkTypeId(workTypeId: number, headersHandler?: () => HttpHeaders): Observable<WorkTypeDetailsApiModel> {
			return this.http.get<WorkTypeDetailsApiModel>(this.baseUri + 'api/worktype/details?workTypeId=' + workTypeId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a work type
		 * Post api/worktype/new
		 * @return {number} OK
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ApiWorktypeNewPost(requestBody: WorkTypeCreateApiModel, headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/worktype/new', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Return all work types for the account that match the query param
		 * Get api/worktype/search
		 * @param {number} queryOptions_page Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} queryOptions_pageSize Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<WorkTypeDetailsApiModel>} OK
		 */
		ApiWorktypeSearchGetByQueryOptions_queryAndQueryOptions_orderByAndQueryOptions_orderAndQueryOptions_pageAndQueryOptions_pageSize(queryOptions_query: string | null | undefined, queryOptions_orderBy: string | null | undefined, queryOptions_order: SearchRequestOrder | null | undefined, queryOptions_page: number | null | undefined, queryOptions_pageSize: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<WorkTypeDetailsApiModel>> {
			return this.http.get<Array<WorkTypeDetailsApiModel>>(this.baseUri + 'api/worktype/search?queryOptions_query=' + (queryOptions_query == null ? '' : encodeURIComponent(queryOptions_query)) + '&queryOptions_orderBy=' + (queryOptions_orderBy == null ? '' : encodeURIComponent(queryOptions_orderBy)) + '&queryOptions_order=' + queryOptions_order + '&queryOptions_page=' + queryOptions_page + '&queryOptions_pageSize=' + queryOptions_pageSize, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update an existing work type
		 * Post api/worktype/update
		 * @return {void} 
		 */
		ApiWorktypeUpdatePost(requestBody: WorkTypeUpdateApiModel, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/worktype/update', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}
	}

}

