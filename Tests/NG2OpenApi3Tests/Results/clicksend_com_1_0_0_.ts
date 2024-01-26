import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Acceptable_Import_Fields {
	}
	export interface Acceptable_Import_FieldsFormProperties {
	}
	export function CreateAcceptable_Import_FieldsFormGroup() {
		return new FormGroup<Acceptable_Import_FieldsFormProperties>({
		});

	}

	export interface Account_Activation {
	}
	export interface Account_ActivationFormProperties {
	}
	export function CreateAccount_ActivationFormGroup() {
		return new FormGroup<Account_ActivationFormProperties>({
		});

	}

	export interface Account_Collection {
	}
	export interface Account_CollectionFormProperties {
	}
	export function CreateAccount_CollectionFormGroup() {
		return new FormGroup<Account_CollectionFormProperties>({
		});

	}

	export interface Allowed_From_Email_Addresses {
	}
	export interface Allowed_From_Email_AddressesFormProperties {
	}
	export function CreateAllowed_From_Email_AddressesFormGroup() {
		return new FormGroup<Allowed_From_Email_AddressesFormProperties>({
		});

	}

	export interface Buy_dedicated_number {
	}
	export interface Buy_dedicated_numberFormProperties {
	}
	export function CreateBuy_dedicated_numberFormGroup() {
		return new FormGroup<Buy_dedicated_numberFormProperties>({
		});

	}

	export interface CSV_Import_File_Preview {
	}
	export interface CSV_Import_File_PreviewFormProperties {
	}
	export function CreateCSV_Import_File_PreviewFormGroup() {
		return new FormGroup<CSV_Import_File_PreviewFormProperties>({
		});

	}

	export interface Calculate_Price {
	}
	export interface Calculate_PriceFormProperties {
	}
	export function CreateCalculate_PriceFormGroup() {
		return new FormGroup<Calculate_PriceFormProperties>({
		});

	}

	export interface Calculate_Price_for_SMS_Campaign {
	}
	export interface Calculate_Price_for_SMS_CampaignFormProperties {
	}
	export function CreateCalculate_Price_for_SMS_CampaignFormGroup() {
		return new FormGroup<Calculate_Price_for_SMS_CampaignFormProperties>({
		});

	}

	export interface Calculate_Pricing {
	}
	export interface Calculate_PricingFormProperties {
	}
	export function CreateCalculate_PricingFormGroup() {
		return new FormGroup<Calculate_PricingFormProperties>({
		});

	}

	export interface Cancel_Scheduled_Messages {
	}
	export interface Cancel_Scheduled_MessagesFormProperties {
	}
	export function CreateCancel_Scheduled_MessagesFormGroup() {
		return new FormGroup<Cancel_Scheduled_MessagesFormProperties>({
		});

	}

	export interface Cancel_Voice_Calls {
	}
	export interface Cancel_Voice_CallsFormProperties {
	}
	export function CreateCancel_Voice_CallsFormGroup() {
		return new FormGroup<Cancel_Voice_CallsFormProperties>({
		});

	}

	export interface Contact {
	}
	export interface ContactFormProperties {
	}
	export function CreateContactFormGroup() {
		return new FormGroup<ContactFormProperties>({
		});

	}

	export interface Contact_Collection {
	}
	export interface Contact_CollectionFormProperties {
	}
	export function CreateContact_CollectionFormGroup() {
		return new FormGroup<Contact_CollectionFormProperties>({
		});

	}

	export interface Contact_List {
	}
	export interface Contact_ListFormProperties {
	}
	export function CreateContact_ListFormGroup() {
		return new FormGroup<Contact_ListFormProperties>({
		});

	}

	export interface Contact_List_Collection {
	}
	export interface Contact_List_CollectionFormProperties {
	}
	export function CreateContact_List_CollectionFormGroup() {
		return new FormGroup<Contact_List_CollectionFormProperties>({
		});

	}

	export interface Contact_Suggestions {
	}
	export interface Contact_SuggestionsFormProperties {
	}
	export function CreateContact_SuggestionsFormGroup() {
		return new FormGroup<Contact_SuggestionsFormProperties>({
		});

	}

	export interface Country_Collection {
	}
	export interface Country_CollectionFormProperties {
	}
	export function CreateCountry_CollectionFormGroup() {
		return new FormGroup<Country_CollectionFormProperties>({
		});

	}

	export interface Create_SMS_Campaign {
	}
	export interface Create_SMS_CampaignFormProperties {
	}
	export function CreateCreate_SMS_CampaignFormGroup() {
		return new FormGroup<Create_SMS_CampaignFormProperties>({
		});

	}

	export interface Credit_Card_Info {
	}
	export interface Credit_Card_InfoFormProperties {
	}
	export function CreateCredit_Card_InfoFormGroup() {
		return new FormGroup<Credit_Card_InfoFormProperties>({
		});

	}

	export interface Delivery_Issues {
	}
	export interface Delivery_IssuesFormProperties {
	}
	export function CreateDelivery_IssuesFormGroup() {
		return new FormGroup<Delivery_IssuesFormProperties>({
		});

	}

	export interface Delivery_Receipts {
	}
	export interface Delivery_ReceiptsFormProperties {
	}
	export function CreateDelivery_ReceiptsFormGroup() {
		return new FormGroup<Delivery_ReceiptsFormProperties>({
		});

	}

	export interface Detect_Address {
	}
	export interface Detect_AddressFormProperties {
	}
	export function CreateDetect_AddressFormGroup() {
		return new FormGroup<Detect_AddressFormProperties>({
		});

	}

	export interface Direct_Mail_Campaign {
	}
	export interface Direct_Mail_CampaignFormProperties {
	}
	export function CreateDirect_Mail_CampaignFormGroup() {
		return new FormGroup<Direct_Mail_CampaignFormProperties>({
		});

	}

	export interface Email_to_SMS_Allowed_Address {
	}
	export interface Email_to_SMS_Allowed_AddressFormProperties {
	}
	export function CreateEmail_to_SMS_Allowed_AddressFormGroup() {
		return new FormGroup<Email_to_SMS_Allowed_AddressFormProperties>({
		});

	}

	export interface Email_to_SMS_Allowed_Address___Object {
	}
	export interface Email_to_SMS_Allowed_Address___ObjectFormProperties {
	}
	export function CreateEmail_to_SMS_Allowed_Address___ObjectFormGroup() {
		return new FormGroup<Email_to_SMS_Allowed_Address___ObjectFormProperties>({
		});

	}

	export interface Email_Campaigns {
	}
	export interface Email_CampaignsFormProperties {
	}
	export function CreateEmail_CampaignsFormGroup() {
		return new FormGroup<Email_CampaignsFormProperties>({
		});

	}

	export interface Email_Delivery_Receipt_Rules {
	}
	export interface Email_Delivery_Receipt_RulesFormProperties {
	}
	export function CreateEmail_Delivery_Receipt_RulesFormGroup() {
		return new FormGroup<Email_Delivery_Receipt_RulesFormProperties>({
		});

	}

	export interface Existing_SMS_Campaigns {
	}
	export interface Existing_SMS_CampaignsFormProperties {
	}
	export function CreateExisting_SMS_CampaignsFormGroup() {
		return new FormGroup<Existing_SMS_CampaignsFormProperties>({
		});

	}

	export interface Export_Contacts {
	}
	export interface Export_ContactsFormProperties {
	}
	export function CreateExport_ContactsFormGroup() {
		return new FormGroup<Export_ContactsFormProperties>({
		});

	}

	export interface Export_Post_Letter_History {
	}
	export interface Export_Post_Letter_HistoryFormProperties {
	}
	export function CreateExport_Post_Letter_HistoryFormGroup() {
		return new FormGroup<Export_Post_Letter_HistoryFormProperties>({
		});

	}

	export interface Export_Postcard_History {
	}
	export interface Export_Postcard_HistoryFormProperties {
	}
	export function CreateExport_Postcard_HistoryFormGroup() {
		return new FormGroup<Export_Postcard_HistoryFormProperties>({
		});

	}

	export interface Fax_Delivery_Receipt_Rules {
	}
	export interface Fax_Delivery_Receipt_RulesFormProperties {
	}
	export function CreateFax_Delivery_Receipt_RulesFormGroup() {
		return new FormGroup<Fax_Delivery_Receipt_RulesFormProperties>({
		});

	}

	export interface Fax_History {
	}
	export interface Fax_HistoryFormProperties {
	}
	export function CreateFax_HistoryFormGroup() {
		return new FormGroup<Fax_HistoryFormProperties>({
		});

	}

	export interface Forgot_Password {
	}
	export interface Forgot_PasswordFormProperties {
	}
	export function CreateForgot_PasswordFormGroup() {
		return new FormGroup<Forgot_PasswordFormProperties>({
		});

	}

	export interface Forgot_Username {
	}
	export interface Forgot_UsernameFormProperties {
	}
	export function CreateForgot_UsernameFormGroup() {
		return new FormGroup<Forgot_UsernameFormProperties>({
		});

	}

	export interface Get_Country_Pricing {
	}
	export interface Get_Country_PricingFormProperties {
	}
	export function CreateGet_Country_PricingFormGroup() {
		return new FormGroup<Get_Country_PricingFormProperties>({
		});

	}

	export interface Get_Post_Letter_History {
	}
	export interface Get_Post_Letter_HistoryFormProperties {
	}
	export function CreateGet_Post_Letter_HistoryFormGroup() {
		return new FormGroup<Get_Post_Letter_HistoryFormProperties>({
		});

	}

	export interface Get_Postcard_History {
	}
	export interface Get_Postcard_HistoryFormProperties {
	}
	export function CreateGet_Postcard_HistoryFormGroup() {
		return new FormGroup<Get_Postcard_HistoryFormProperties>({
		});

	}

	export interface Get_SMS_Statistics {
	}
	export interface Get_SMS_StatisticsFormProperties {
	}
	export function CreateGet_SMS_StatisticsFormGroup() {
		return new FormGroup<Get_SMS_StatisticsFormProperties>({
		});

	}

	export interface Get_Voice_Statistics {
	}
	export interface Get_Voice_StatisticsFormProperties {
	}
	export function CreateGet_Voice_StatisticsFormGroup() {
		return new FormGroup<Get_Voice_StatisticsFormProperties>({
		});

	}

	export interface Get_all_Dedicated_Numbers {
	}
	export interface Get_all_Dedicated_NumbersFormProperties {
	}
	export function CreateGet_all_Dedicated_NumbersFormGroup() {
		return new FormGroup<Get_all_Dedicated_NumbersFormProperties>({
		});

	}

	export interface Import_Contacts {
	}
	export interface Import_ContactsFormProperties {
	}
	export function CreateImport_ContactsFormGroup() {
		return new FormGroup<Import_ContactsFormProperties>({
		});

	}

	export interface Inbound_Fax_Rules {
	}
	export interface Inbound_Fax_RulesFormProperties {
	}
	export function CreateInbound_Fax_RulesFormGroup() {
		return new FormGroup<Inbound_Fax_RulesFormProperties>({
		});

	}

	export interface Inbound_MMS {
	}
	export interface Inbound_MMSFormProperties {
	}
	export function CreateInbound_MMSFormGroup() {
		return new FormGroup<Inbound_MMSFormProperties>({
		});

	}

	export interface Inbound_SMS {
	}
	export interface Inbound_SMSFormProperties {
	}
	export function CreateInbound_SMSFormGroup() {
		return new FormGroup<Inbound_SMSFormProperties>({
		});

	}

	export interface Inbound_SMS_Rules {
	}
	export interface Inbound_SMS_RulesFormProperties {
	}
	export function CreateInbound_SMS_RulesFormGroup() {
		return new FormGroup<Inbound_SMS_RulesFormProperties>({
		});

	}

	export interface MMS_History {
	}
	export interface MMS_HistoryFormProperties {
	}
	export function CreateMMS_HistoryFormGroup() {
		return new FormGroup<MMS_HistoryFormProperties>({
		});

	}

	export interface Master_Template_Categories {
	}
	export interface Master_Template_CategoriesFormProperties {
	}
	export function CreateMaster_Template_CategoriesFormGroup() {
		return new FormGroup<Master_Template_CategoriesFormProperties>({
		});

	}

	export interface Master_Templates {
	}
	export interface Master_TemplatesFormProperties {
	}
	export function CreateMaster_TemplatesFormGroup() {
		return new FormGroup<Master_TemplatesFormProperties>({
		});

	}

	export interface Post_Code_Search {
	}
	export interface Post_Code_SearchFormProperties {
	}
	export function CreatePost_Code_SearchFormGroup() {
		return new FormGroup<Post_Code_SearchFormProperties>({
		});

	}

	export interface Post_Return_Address {
	}
	export interface Post_Return_AddressFormProperties {
	}
	export function CreatePost_Return_AddressFormGroup() {
		return new FormGroup<Post_Return_AddressFormProperties>({
		});

	}

	export interface Referral_Accounts {
	}
	export interface Referral_AccountsFormProperties {
	}
	export function CreateReferral_AccountsFormGroup() {
		return new FormGroup<Referral_AccountsFormProperties>({
		});

	}

	export interface Remove_Duplicate_Contacts {
	}
	export interface Remove_Duplicate_ContactsFormProperties {
	}
	export function CreateRemove_Duplicate_ContactsFormGroup() {
		return new FormGroup<Remove_Duplicate_ContactsFormProperties>({
		});

	}

	export interface Remove_Opted_Out_Contacts {
	}
	export interface Remove_Opted_Out_ContactsFormProperties {
	}
	export function CreateRemove_Opted_Out_ContactsFormGroup() {
		return new FormGroup<Remove_Opted_Out_ContactsFormProperties>({
		});

	}

	export interface Reseller {
	}
	export interface ResellerFormProperties {
	}
	export function CreateResellerFormGroup() {
		return new FormGroup<ResellerFormProperties>({
		});

	}

	export interface Reseller_Account {
	}
	export interface Reseller_AccountFormProperties {
	}
	export function CreateReseller_AccountFormGroup() {
		return new FormGroup<Reseller_AccountFormProperties>({
		});

	}

	export interface Reseller_Accounts {
	}
	export interface Reseller_AccountsFormProperties {
	}
	export function CreateReseller_AccountsFormGroup() {
		return new FormGroup<Reseller_AccountsFormProperties>({
		});

	}

	export interface Reseller_Subdomain {
	}
	export interface Reseller_SubdomainFormProperties {
	}
	export function CreateReseller_SubdomainFormGroup() {
		return new FormGroup<Reseller_SubdomainFormProperties>({
		});

	}

	export interface SDK_Download {
	}
	export interface SDK_DownloadFormProperties {
	}
	export function CreateSDK_DownloadFormGroup() {
		return new FormGroup<SDK_DownloadFormProperties>({
		});

	}

	export interface SMS_Delivery_Receipt_Rules {
	}
	export interface SMS_Delivery_Receipt_RulesFormProperties {
	}
	export function CreateSMS_Delivery_Receipt_RulesFormGroup() {
		return new FormGroup<SMS_Delivery_Receipt_RulesFormProperties>({
		});

	}

	export interface SMS_History {
	}
	export interface SMS_HistoryFormProperties {
	}
	export function CreateSMS_HistoryFormGroup() {
		return new FormGroup<SMS_HistoryFormProperties>({
		});

	}

	export interface Search_Contacts_Lists {
	}
	export interface Search_Contacts_ListsFormProperties {
	}
	export function CreateSearch_Contacts_ListsFormGroup() {
		return new FormGroup<Search_Contacts_ListsFormProperties>({
		});

	}

	export interface Search_Dedicated_Numbers_by_Country {
	}
	export interface Search_Dedicated_Numbers_by_CountryFormProperties {
	}
	export function CreateSearch_Dedicated_Numbers_by_CountryFormGroup() {
		return new FormGroup<Search_Dedicated_Numbers_by_CountryFormProperties>({
		});

	}

	export interface Send_Fax {
	}
	export interface Send_FaxFormProperties {
	}
	export function CreateSend_FaxFormGroup() {
		return new FormGroup<Send_FaxFormProperties>({
		});

	}

	export interface Send_Post_Letter {
	}
	export interface Send_Post_LetterFormProperties {
	}
	export function CreateSend_Post_LetterFormGroup() {
		return new FormGroup<Send_Post_LetterFormProperties>({
		});

	}

	export interface Send_Postcard {
	}
	export interface Send_PostcardFormProperties {
	}
	export function CreateSend_PostcardFormGroup() {
		return new FormGroup<Send_PostcardFormProperties>({
		});

	}

	export interface Send_a_Voice_Call___Text_to_speech {
	}
	export interface Send_a_Voice_Call___Text_to_speechFormProperties {
	}
	export function CreateSend_a_Voice_Call___Text_to_speechFormGroup() {
		return new FormGroup<Send_a_Voice_Call___Text_to_speechFormProperties>({
		});

	}

	export interface Send_an_MMS {
	}
	export interface Send_an_MMSFormProperties {
	}
	export function CreateSend_an_MMSFormGroup() {
		return new FormGroup<Send_an_MMSFormProperties>({
		});

	}

	export interface Send_an_SMS {
	}
	export interface Send_an_SMSFormProperties {
	}
	export function CreateSend_an_SMSFormGroup() {
		return new FormGroup<Send_an_SMSFormProperties>({
		});

	}

	export interface Stripped_Strings {
	}
	export interface Stripped_StringsFormProperties {
	}
	export function CreateStripped_StringsFormGroup() {
		return new FormGroup<Stripped_StringsFormProperties>({
		});

	}

	export interface Subaccount {
	}
	export interface SubaccountFormProperties {
	}
	export function CreateSubaccountFormGroup() {
		return new FormGroup<SubaccountFormProperties>({
		});

	}

	export interface Subaccount_Collection {
	}
	export interface Subaccount_CollectionFormProperties {
	}
	export function CreateSubaccount_CollectionFormGroup() {
		return new FormGroup<Subaccount_CollectionFormProperties>({
		});

	}

	export interface Templates {
	}
	export interface TemplatesFormProperties {
	}
	export function CreateTemplatesFormGroup() {
		return new FormGroup<TemplatesFormProperties>({
		});

	}

	export interface Timezones {
	}
	export interface TimezonesFormProperties {
	}
	export function CreateTimezonesFormGroup() {
		return new FormGroup<TimezonesFormProperties>({
		});

	}

	export interface Transactional_Email {
	}
	export interface Transactional_EmailFormProperties {
	}
	export function CreateTransactional_EmailFormGroup() {
		return new FormGroup<Transactional_EmailFormProperties>({
		});

	}

	export interface Transfer_Contact {
	}
	export interface Transfer_ContactFormProperties {
	}
	export function CreateTransfer_ContactFormGroup() {
		return new FormGroup<Transfer_ContactFormProperties>({
		});

	}

	export interface URL_Shortening {
	}
	export interface URL_ShorteningFormProperties {
	}
	export function CreateURL_ShorteningFormGroup() {
		return new FormGroup<URL_ShorteningFormProperties>({
		});

	}

	export interface Upload_Image {
	}
	export interface Upload_ImageFormProperties {
	}
	export function CreateUpload_ImageFormGroup() {
		return new FormGroup<Upload_ImageFormProperties>({
		});

	}

	export interface Upload_a_File {
	}
	export interface Upload_a_FileFormProperties {
	}
	export function CreateUpload_a_FileFormGroup() {
		return new FormGroup<Upload_a_FileFormProperties>({
		});

	}

	export interface User_Email_Templates {
	}
	export interface User_Email_TemplatesFormProperties {
	}
	export function CreateUser_Email_TemplatesFormGroup() {
		return new FormGroup<User_Email_TemplatesFormProperties>({
		});

	}

	export interface Verify_Forgot_Password {
	}
	export interface Verify_Forgot_PasswordFormProperties {
	}
	export function CreateVerify_Forgot_PasswordFormGroup() {
		return new FormGroup<Verify_Forgot_PasswordFormProperties>({
		});

	}

	export interface Voice_Delivery_Receipt_Rules {
	}
	export interface Voice_Delivery_Receipt_RulesFormProperties {
	}
	export function CreateVoice_Delivery_Receipt_RulesFormGroup() {
		return new FormGroup<Voice_Delivery_Receipt_RulesFormProperties>({
		});

	}

	export interface Voice_History {
	}
	export interface Voice_HistoryFormProperties {
	}
	export function CreateVoice_HistoryFormGroup() {
		return new FormGroup<Voice_HistoryFormProperties>({
		});

	}

	export interface Voice_Languages {
	}
	export interface Voice_LanguagesFormProperties {
	}
	export function CreateVoice_LanguagesFormGroup() {
		return new FormGroup<Voice_LanguagesFormProperties>({
		});

	}

	export interface Add_a_Test_Delivery_ReceiptBody {

		/**
		 * Your URL if using the push option or 'poll' if using the pull option.
		 * Required
		 */
		url: string;
	}
	export interface Add_a_Test_Delivery_ReceiptBodyFormProperties {

		/**
		 * Your URL if using the push option or 'poll' if using the pull option.
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAdd_a_Test_Delivery_ReceiptBodyFormGroup() {
		return new FormGroup<Add_a_Test_Delivery_ReceiptBodyFormProperties>({
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Create_Email_CampaignBody {

		/**
		 * The allowed email address id.
		 * Required
		 */
		from_email_address_id: number;

		/**
		 * The name that will appear on the email.
		 * Required
		 */
		from_name: string;

		/**
		 * The list id you want to access.
		 * Required
		 */
		list_id: number;

		/**
		 * The name of the sender.
		 * Required
		 */
		name: string;

		/** Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp). */
		schedule?: number | null;

		/**
		 * The subject of the email campaign.
		 * Required
		 */
		subject: string;

		/**
		 * The template id you want to use.
		 * Required
		 */
		template_id: number;
	}
	export interface Create_Email_CampaignBodyFormProperties {

		/**
		 * The allowed email address id.
		 * Required
		 */
		from_email_address_id: FormControl<number | null | undefined>,

		/**
		 * The name that will appear on the email.
		 * Required
		 */
		from_name: FormControl<string | null | undefined>,

		/**
		 * The list id you want to access.
		 * Required
		 */
		list_id: FormControl<number | null | undefined>,

		/**
		 * The name of the sender.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp). */
		schedule: FormControl<number | null | undefined>,

		/**
		 * The subject of the email campaign.
		 * Required
		 */
		subject: FormControl<string | null | undefined>,

		/**
		 * The template id you want to use.
		 * Required
		 */
		template_id: FormControl<number | null | undefined>,
	}
	export function CreateCreate_Email_CampaignBodyFormGroup() {
		return new FormGroup<Create_Email_CampaignBodyFormProperties>({
			from_email_address_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			from_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			list_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			schedule: new FormControl<number | null | undefined>(undefined),
			subject: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			template_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Create_Reseller_AccountBody {

		/**
		 * Your delivery to value.
		 * Required
		 */
		account_name: string;

		/**
		 * Client country.
		 * Required
		 */
		country: string;

		/**
		 * Your password.
		 * Required
		 */
		password: string;

		/**
		 * Your email.
		 * Required
		 */
		user_email: string;

		/**
		 * Your first name.
		 * Required
		 */
		user_first_name: string;

		/**
		 * Your last name.
		 * Required
		 */
		user_last_name: string;

		/**
		 * Your phone number in E.164 format.
		 * Required
		 */
		user_phone: string;

		/**
		 * Your username.
		 * Required
		 */
		username: string;
	}
	export interface Create_Reseller_AccountBodyFormProperties {

		/**
		 * Your delivery to value.
		 * Required
		 */
		account_name: FormControl<string | null | undefined>,

		/**
		 * Client country.
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * Your password.
		 * Required
		 */
		password: FormControl<string | null | undefined>,

		/**
		 * Your email.
		 * Required
		 */
		user_email: FormControl<string | null | undefined>,

		/**
		 * Your first name.
		 * Required
		 */
		user_first_name: FormControl<string | null | undefined>,

		/**
		 * Your last name.
		 * Required
		 */
		user_last_name: FormControl<string | null | undefined>,

		/**
		 * Your phone number in E.164 format.
		 * Required
		 */
		user_phone: FormControl<string | null | undefined>,

		/**
		 * Your username.
		 * Required
		 */
		username: FormControl<string | null | undefined>,
	}
	export function CreateCreate_Reseller_AccountBodyFormGroup() {
		return new FormGroup<Create_Reseller_AccountBodyFormProperties>({
			account_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			user_email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			user_first_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			user_last_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			user_phone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Create_a_Post_Return_AddressBody {

		/**
		 * Your address city.
		 * Required
		 */
		address_city: string;

		/**
		 * Two-letter country code defined in ISO 3166.
		 * Required
		 */
		address_country: string;

		/**
		 * Your address line 1.
		 * Required
		 */
		address_line_1: string;

		/** Your address line 2. */
		address_line_2?: string | null;

		/**
		 * Your address name.
		 * Required
		 */
		address_name: string;

		/**
		 * Your address postal code.
		 * Required
		 */
		address_postal_code: number;

		/**
		 * Your address state.
		 * Required
		 */
		address_state: string;
	}
	export interface Create_a_Post_Return_AddressBodyFormProperties {

		/**
		 * Your address city.
		 * Required
		 */
		address_city: FormControl<string | null | undefined>,

		/**
		 * Two-letter country code defined in ISO 3166.
		 * Required
		 */
		address_country: FormControl<string | null | undefined>,

		/**
		 * Your address line 1.
		 * Required
		 */
		address_line_1: FormControl<string | null | undefined>,

		/** Your address line 2. */
		address_line_2: FormControl<string | null | undefined>,

		/**
		 * Your address name.
		 * Required
		 */
		address_name: FormControl<string | null | undefined>,

		/**
		 * Your address postal code.
		 * Required
		 */
		address_postal_code: FormControl<number | null | undefined>,

		/**
		 * Your address state.
		 * Required
		 */
		address_state: FormControl<string | null | undefined>,
	}
	export function CreateCreate_a_Post_Return_AddressBodyFormGroup() {
		return new FormGroup<Create_a_Post_Return_AddressBodyFormProperties>({
			address_city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			address_country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			address_line_1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			address_line_2: new FormControl<string | null | undefined>(undefined),
			address_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			address_postal_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			address_state: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Create_a_new_ruleBody {

		/**
		 * Action
		 * Required
		 */
		action: string;

		/**
		 * Action Address
		 * Required
		 */
		action_address: string;

		/**
		 * Decicated Number
		 * Required
		 */
		dedicated_number: string;

		/**
		 * Enable
		 * Required
		 */
		enabled: number;

		/**
		 * Rule Name
		 * Required
		 */
		rule_name: string;
	}
	export interface Create_a_new_ruleBodyFormProperties {

		/**
		 * Action
		 * Required
		 */
		action: FormControl<string | null | undefined>,

		/**
		 * Action Address
		 * Required
		 */
		action_address: FormControl<string | null | undefined>,

		/**
		 * Decicated Number
		 * Required
		 */
		dedicated_number: FormControl<string | null | undefined>,

		/**
		 * Enable
		 * Required
		 */
		enabled: FormControl<number | null | undefined>,

		/**
		 * Rule Name
		 * Required
		 */
		rule_name: FormControl<string | null | undefined>,
	}
	export function CreateCreate_a_new_ruleBodyFormGroup() {
		return new FormGroup<Create_a_new_ruleBodyFormProperties>({
			action: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			action_address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dedicated_number: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			enabled: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			rule_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Create_a_new_ruleBody2 {

		/**
		 * Action.
		 * Required
		 */
		action: string;

		/**
		 * Action Address.
		 * Required
		 */
		action_address: string;

		/**
		 * Enabled.
		 * Required
		 */
		enabled: number;

		/**
		 * Match Type. 0=All reports, 1=Only failed, 2=Only successful.
		 * Required
		 */
		match_type: number;

		/**
		 * Rule Name.
		 * Required
		 */
		rule_name: string;
	}
	export interface Create_a_new_ruleBody2FormProperties {

		/**
		 * Action.
		 * Required
		 */
		action: FormControl<string | null | undefined>,

		/**
		 * Action Address.
		 * Required
		 */
		action_address: FormControl<string | null | undefined>,

		/**
		 * Enabled.
		 * Required
		 */
		enabled: FormControl<number | null | undefined>,

		/**
		 * Match Type. 0=All reports, 1=Only failed, 2=Only successful.
		 * Required
		 */
		match_type: FormControl<number | null | undefined>,

		/**
		 * Rule Name.
		 * Required
		 */
		rule_name: FormControl<string | null | undefined>,
	}
	export function CreateCreate_a_new_ruleBody2FormGroup() {
		return new FormGroup<Create_a_new_ruleBody2FormProperties>({
			action: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			action_address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			enabled: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			match_type: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			rule_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Send_FaxBody {

		/** Recipient country. */
		country?: string | null;

		/** Your reference. Will be passed back with all replies and delivery reports. */
		custom_string?: string | null;

		/**
		 * Your URL to your PDF file.
		 * Required
		 */
		file_url: string;

		/** Your sender id. Must be a valid fax number. */
		from?: string | null;

		/** An email address where the reply should be emailed to. */
		from_email?: string | null;

		/** Your list ID if sending to a whole list. Can be used instead of 'to'. */
		list_id?: number | null;

		/**
		 * Your messages.
		 * Required
		 */
		messages: Array<string>;

		/** Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp). */
		schedule?: number | null;

		/** Your method of sending e.g. 'wordpress', 'php', 'c#'. */
		source?: string | null;

		/**
		 * Recipient number in E.164 format or local format ([more info](https://help.clicksend.com/SMS/what-format-does-the-recipient-phone-number-need-to-be-in)).
		 * Required
		 */
		to: string;
	}
	export interface Send_FaxBodyFormProperties {

		/** Recipient country. */
		country: FormControl<string | null | undefined>,

		/** Your reference. Will be passed back with all replies and delivery reports. */
		custom_string: FormControl<string | null | undefined>,

		/**
		 * Your URL to your PDF file.
		 * Required
		 */
		file_url: FormControl<string | null | undefined>,

		/** Your sender id. Must be a valid fax number. */
		from: FormControl<string | null | undefined>,

		/** An email address where the reply should be emailed to. */
		from_email: FormControl<string | null | undefined>,

		/** Your list ID if sending to a whole list. Can be used instead of 'to'. */
		list_id: FormControl<number | null | undefined>,

		/** Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp). */
		schedule: FormControl<number | null | undefined>,

		/** Your method of sending e.g. 'wordpress', 'php', 'c#'. */
		source: FormControl<string | null | undefined>,

		/**
		 * Recipient number in E.164 format or local format ([more info](https://help.clicksend.com/SMS/what-format-does-the-recipient-phone-number-need-to-be-in)).
		 * Required
		 */
		to: FormControl<string | null | undefined>,
	}
	export function CreateSend_FaxBodyFormGroup() {
		return new FormGroup<Send_FaxBodyFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			custom_string: new FormControl<string | null | undefined>(undefined),
			file_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			from: new FormControl<string | null | undefined>(undefined),
			from_email: new FormControl<string | null | undefined>(undefined),
			list_id: new FormControl<number | null | undefined>(undefined),
			schedule: new FormControl<number | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get account
		 * Get account
		 * @return {void} OK
		 */
		AccountGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'account', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new account
		 * **Note:** *Authentication isn't required to create a new account.*
		 * Post account
		 * @return {void} OK
		 */
		AccountPost(requestBody: AccountPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'account', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Update Account
		 * Put account
		 * @return {void} OK
		 */
		AccountPut(requestBody: AccountPutPutBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'account', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Send account activation token
		 * Put account-verify/send
		 * @return {void} OK
		 */
		Account_verifySendPut(requestBody: Account_verifySendPutPutBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'account-verify/send', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Verify new account
		 * Put account-verify/verify/{activation_token}
		 * @param {string} activation_token The ActivationToken to be used to verify an account.
		 * @return {void} OK
		 */
		Account_verifyVerify_activation_tokenPut(activation_token: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'account-verify/verify/' + (activation_token == null ? '' : encodeURIComponent(activation_token)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Account Usage
		 * Get account/usage/{year}/{month}/{type}
		 * @param {number} year Your account usage year.
		 * @param {number} month Your account usage month.
		 * @param {string} type The account type. Value can only be either email or subaccount.
		 * @return {void} OK
		 */
		AccountUsage_year_month_typeGet(year: number, month: number, type: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'account/usage/' + year + '/' + month + '/' + (type == null ? '' : encodeURIComponent(type)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List Rules
		 * Get automations/email/receipt
		 * @return {void} OK
		 */
		AutomationsEmailReceiptGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'automations/email/receipt', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a New Rule
		 * Post automations/email/receipt
		 * @return {void} OK
		 */
		AutomationsEmailReceiptPost(requestBody: AutomationsEmailReceiptPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'automations/email/receipt', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a Rule
		 * Delete automations/email/receipt/{rule_id}
		 * @param {number} rule_id The email receipt rule id you want to delete.
		 * @return {void} OK
		 */
		AutomationsEmailReceipt_rule_idDelete(rule_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'automations/email/receipt/' + rule_id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a Specific Rule
		 * Get automations/email/receipt/{rule_id}
		 * @param {number} rule_id The rule id you want to access.
		 * @return {void} OK
		 */
		AutomationsEmailReceipt_rule_idGet(rule_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'automations/email/receipt/' + rule_id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a Rule
		 * Put automations/email/receipt/{rule_id}
		 * @param {number} rule_id The email receipt rule id you want to access.
		 * @return {void} OK
		 */
		AutomationsEmailReceipt_rule_idPut(rule_id: number, requestBody: AutomationsEmailReceipt_rule_idPutPutBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'automations/email/receipt/' + rule_id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * List rules
		 * Get automations/fax/inbound
		 * @return {void} OK
		 */
		AutomationsFaxInboundGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'automations/fax/inbound', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new rule
		 * Post automations/fax/inbound
		 * @return {void} OK
		 */
		AutomationsFaxInboundPost(requestBody: Create_a_new_ruleBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'automations/fax/inbound', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a rule
		 * Delete automations/fax/inbound/{inbound_rule_id}
		 * @param {number} inbound_rule_id Fax inbound rule id
		 * @return {void} OK
		 */
		AutomationsFaxInbound_inbound_rule_idDelete(inbound_rule_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'automations/fax/inbound/' + inbound_rule_id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific rule
		 * Get automations/fax/inbound/{inbound_rule_id}
		 * @param {number} inbound_rule_id Fax inbound rule id
		 * @return {void} OK
		 */
		AutomationsFaxInbound_inbound_rule_idGet(inbound_rule_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'automations/fax/inbound/' + inbound_rule_id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a rule
		 * Put automations/fax/inbound/{inbound_rule_id}
		 * @param {number} inbound_rule_id Fax inbound rule id
		 * @return {void} OK
		 */
		AutomationsFaxInbound_inbound_rule_idPut(inbound_rule_id: number, requestBody: Create_a_new_ruleBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'automations/fax/inbound/' + inbound_rule_id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * List Rules
		 * Get automations/fax/receipts
		 * @return {void} OK
		 */
		AutomationsFaxReceiptsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'automations/fax/receipts', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a New Rule
		 * Post automations/fax/receipts
		 * @return {void} OK
		 */
		AutomationsFaxReceiptsPost(requestBody: AutomationsFaxReceiptsPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'automations/fax/receipts', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a Rule
		 * Delete automations/fax/receipts/{rule_id}
		 * @param {number} rule_id The email receipt rule id you want to delete.
		 * @return {void} OK
		 */
		AutomationsFaxReceipts_rule_idDelete(rule_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'automations/fax/receipts/' + rule_id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a Specific Rule
		 * Get automations/fax/receipts/{rule_id}
		 * @param {number} rule_id The rule id you want to access.
		 * @return {void} OK
		 */
		AutomationsFaxReceipts_rule_idGet(rule_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'automations/fax/receipts/' + rule_id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a Rule
		 * Put automations/fax/receipts/{rule_id}
		 * @param {number} rule_id The email receipt rule id you want to access.
		 * @return {void} OK
		 */
		AutomationsFaxReceipts_rule_idPut(rule_id: number, requestBody: AutomationsFaxReceipts_rule_idPutPutBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'automations/fax/receipts/' + rule_id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * List rules
		 * Get automations/sms/inbound
		 * @return {void} OK
		 */
		AutomationsSmsInboundGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'automations/sms/inbound', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new rule
		 * Post automations/sms/inbound/
		 * @return {void} OK
		 */
		AutomationsSmsInboundPost(requestBody: AutomationsSmsInboundPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'automations/sms/inbound/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a rule
		 * Delete automations/sms/inbound/{inbound_rule_id}
		 * @param {number} inbound_rule_id Inbound Rule ID.
		 * @return {void} OK
		 */
		AutomationsSmsInbound_inbound_rule_idDelete(inbound_rule_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'automations/sms/inbound/' + inbound_rule_id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific rule
		 * Get automations/sms/inbound/{inbound_rule_id}
		 * @param {number} inbound_rule_id Inbound Rule ID.
		 * @return {void} OK
		 */
		AutomationsSmsInbound_inbound_rule_idGet(inbound_rule_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'automations/sms/inbound/' + inbound_rule_id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a rule
		 * Put automations/sms/inbound/{inbound_rule_id}
		 * @param {number} inbound_rule_id Inbound Rule ID.
		 * @return {void} OK
		 */
		AutomationsSmsInbound_inbound_rule_idPut(inbound_rule_id: number, requestBody: AutomationsSmsInbound_inbound_rule_idPutPutBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'automations/sms/inbound/' + inbound_rule_id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * List rules
		 * Get automations/sms/receipts
		 * @return {void} OK
		 */
		AutomationsSmsReceiptsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'automations/sms/receipts', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new rule
		 * Post automations/sms/receipts
		 * @return {void} OK
		 */
		AutomationsSmsReceiptsPost(requestBody: Create_a_new_ruleBody2, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'automations/sms/receipts', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a rule
		 * Delete automations/sms/receipts/{receipt_rule_id}
		 * @param {number} receipt_rule_id Receipt Rule ID.
		 * @return {void} OK
		 */
		AutomationsSmsReceipts_receipt_rule_idDelete(receipt_rule_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'automations/sms/receipts/' + receipt_rule_id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific rule
		 * Get automations/sms/receipts/{receipt_rule_id}
		 * @param {number} receipt_rule_id Receipt Rule ID.
		 * @return {void} OK
		 */
		AutomationsSmsReceipts_receipt_rule_idGet(receipt_rule_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'automations/sms/receipts/' + receipt_rule_id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a rule
		 * Put automations/sms/receipts/{receipt_rule_id}
		 * @param {number} receipt_rule_id Receipt Rule ID.
		 * @return {void} OK
		 */
		AutomationsSmsReceipts_receipt_rule_idPut(receipt_rule_id: number, requestBody: Create_a_new_ruleBody2, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'automations/sms/receipts/' + receipt_rule_id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * List rules
		 * Get automations/voice/receipts
		 * @return {void} OK
		 */
		AutomationsVoiceReceiptsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'automations/voice/receipts', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new rule
		 * Post automations/voice/receipts
		 * @return {void} OK
		 */
		AutomationsVoiceReceiptsPost(requestBody: Create_a_new_ruleBody2, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'automations/voice/receipts', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a rule
		 * Delete automations/voice/receipts/{receipt_rule_id}
		 * @param {number} receipt_rule_id Receipt Rule ID.
		 * @return {void} OK
		 */
		AutomationsVoiceReceipts_receipt_rule_idDelete(receipt_rule_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'automations/voice/receipts/' + receipt_rule_id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific rule
		 * Get automations/voice/receipts/{receipt_rule_id}
		 * @param {number} receipt_rule_id Receipt Rule ID.
		 * @return {void} OK
		 */
		AutomationsVoiceReceipts_receipt_rule_idGet(receipt_rule_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'automations/voice/receipts/' + receipt_rule_id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a rule
		 * Put automations/voice/receipts/{receipt_rule_id}
		 * @param {number} receipt_rule_id Receipt Rule ID.
		 * @return {void} OK
		 */
		AutomationsVoiceReceipts_receipt_rule_idPut(receipt_rule_id: number, requestBody: Create_a_new_ruleBody2, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'automations/voice/receipts/' + receipt_rule_id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * List Contact Suggestions
		 * Get contact-suggestions
		 * @return {void} OK
		 */
		Contact_suggestionsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'contact-suggestions', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all Countries
		 * Get countries
		 * @return {void} OK
		 */
		CountriesGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'countries', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Delivery Issues
		 * Get delivery-issues
		 * @return {void} OK
		 */
		Delivery_issuesGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'delivery-issues', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create Delivery Issue
		 * Post delivery-issues
		 * @return {void} OK
		 */
		Delivery_issuesPost(requestBody: Delivery_issuesPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'delivery-issues', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get All Email Campaigns
		 * Get email-campaigns
		 * @return {void} OK
		 */
		Email_campaignsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'email-campaigns', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Calculate Price
		 * Post email-campaigns/price
		 * @return {void} OK
		 */
		Email_campaignsPricePost(requestBody: Create_Email_CampaignBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'email-campaigns/price', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Create Email Campaign
		 * Post email-campaigns/send
		 * @return {void} OK
		 */
		Email_campaignsSendPost(requestBody: Create_Email_CampaignBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'email-campaigns/send', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Specific Email Campaign History
		 * Get email-campaigns/{campaign_id}/history
		 * @param {number} campaign_id The email campaign id you want to access.
		 * @return {void} OK
		 */
		Email_campaigns_campaign_idHistoryGet(campaign_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'email-campaigns/' + campaign_id + '/history', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Specific Email Campaign
		 * Get email-campaigns/{email_campaign_id}
		 * @param {number} email_campaign_id The email campaign id you want to access.
		 * @return {void} OK
		 */
		Email_campaigns_email_campaign_idGet(email_campaign_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'email-campaigns/' + email_campaign_id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update Email Campaign
		 * Put email-campaigns/{email_campaign_id}
		 * @param {number} email_campaign_id The email campaign id you want to access.
		 * @return {void} OK
		 */
		Email_campaigns_email_campaign_idPut(email_campaign_id: number, requestBody: Email_campaigns_email_campaign_idPutPutBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'email-campaigns/' + email_campaign_id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancel Email Campaign
		 * Put email-campaigns/{email_campaign_id}/cancel
		 * @param {number} email_campaign_id The email campaign id you want to cancel.
		 * @return {void} OK
		 */
		Email_campaigns_email_campaign_idCancelPut(email_campaign_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'email-campaigns/' + email_campaign_id + '/cancel', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Send Verification Token
		 * Put email/address-verify/{email_address_id}/send
		 * @param {number} email_address_id The email addess id you want to access.
		 * @return {void} OK
		 */
		EmailAddress_verify_email_address_idSendPut(email_address_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'email/address-verify/' + email_address_id + '/send', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Verify Allowed Email Address
		 * Put email/address-verify/{email_address_id}/verify/{activation_token}
		 * @param {number} email_address_id The email address id you want to access.
		 * @param {string} activation_token 6E8B-4FDB-99A7-7ED08DF97BCC (required, string) - Your activation token.
		 * @return {void} OK
		 */
		EmailAddress_verify_email_address_idVerify_activation_tokenPut(email_address_id: number, activation_token: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'email/address-verify/' + email_address_id + '/verify/' + (activation_token == null ? '' : encodeURIComponent(activation_token)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get All Allowed Email Addresses
		 * Get email/addresses
		 * @return {void} OK
		 */
		EmailAddressesGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'email/addresses', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create Allowed Email Address
		 * Post email/addresses
		 * @return {void} OK
		 */
		EmailAddressesPost(requestBody: EmailAddressesPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'email/addresses', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Allowed Email Address
		 * Delete email/addresses/{email_address_id}
		 * @param {number} email_address_id The email address you want to access.
		 * @return {void} OK
		 */
		EmailAddresses_email_address_idDelete(email_address_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'email/addresses/' + email_address_id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Specific Allowed Email Address
		 * Get email/addresses/{email_address_id}
		 * @param {number} email_address_id The email address you want to access.
		 * @return {void} OK
		 */
		EmailAddresses_email_address_idGet(email_address_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'email/addresses/' + email_address_id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Email History
		 * Get email/history
		 * @return {void} OK
		 */
		EmailHistoryGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'email/history', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Export History
		 * Get email/history/export?filename={filename}
		 * @param {string} filename Your export filename.
		 * @return {void} OK
		 */
		EmailHistoryExportGet(filename: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'email/history/export?filename=' + (filename == null ? '' : encodeURIComponent(filename)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get All Master Email Templates
		 * Get email/master-templates
		 * @return {void} OK
		 */
		EmailMaster_templatesGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'email/master-templates', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get All Master Template Categories
		 * Get email/master-templates-categories
		 * @return {void} OK
		 */
		EmailMaster_templates_categoriesGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'email/master-templates-categories', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Specific Email Template Category
		 * Get email/master-templates-categories/{category_id}
		 * @param {string} category_id Your category id.
		 * @return {void} OK
		 */
		EmailMaster_templates_categories_category_idGet(category_id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'email/master-templates-categories/' + (category_id == null ? '' : encodeURIComponent(category_id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get All Templates For Category
		 * Get email/master-templates-categories/{category_id}/master-templates
		 * @param {string} category_id Your category id.
		 * @return {void} OK
		 */
		EmailMaster_templates_categories_category_idMaster_templatesGet(category_id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'email/master-templates-categories/' + (category_id == null ? '' : encodeURIComponent(category_id)) + '/master-templates', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Specific Master Template
		 * Get email/master-templates/{template_id}
		 * @param {string} template_id Your template id.
		 * @return {void} OK
		 */
		EmailMaster_templates_template_idGet(template_id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'email/master-templates/' + (template_id == null ? '' : encodeURIComponent(template_id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Email Price
		 * Post email/price
		 * @return {void} OK
		 */
		EmailPricePost(requestBody: EmailPricePostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'email/price', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a Test Delivery Receipt
		 * Post email/receipts
		 * @return {void} OK
		 */
		EmailReceiptsPost(requestBody: Add_a_Test_Delivery_ReceiptBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'email/receipts', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Email Send
		 * Post email/send
		 * @return {void} OK
		 */
		EmailSendPost(requestBody: EmailSendPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'email/send', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get All Email Templates
		 * Get email/templates
		 * @return {void} OK
		 */
		EmailTemplatesGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'email/templates', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create New Email Template from Master Template
		 * Post email/templates
		 * @return {void} OK
		 */
		EmailTemplatesPost(requestBody: EmailTemplatesPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'email/templates', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Upload Image to Specific Template
		 * Post email/templates-images/{template_id}
		 * @param {string} template_id Your template id.
		 * @return {void} OK
		 */
		EmailTemplates_images_template_idPost(template_id: string, requestBody: EmailTemplates_images_template_idPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'email/templates-images/' + (template_id == null ? '' : encodeURIComponent(template_id)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Email Template
		 * Delete email/templates/{template_id}
		 * @param {number} template_id Your template id.
		 * @return {void} OK
		 */
		EmailTemplates_template_idDelete(template_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'email/templates/' + template_id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Specific Email Template
		 * Get email/templates/{template_id}
		 * @param {number} template_id The email template id.
		 * @return {void} OK
		 */
		EmailTemplates_template_idGet(template_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'email/templates/' + template_id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update an Email Template
		 * Put email/templates/{template_id}
		 * @param {number} template_id The id of the template to be updated.
		 * @return {void} OK
		 */
		EmailTemplates_template_idPut(template_id: number, requestBody: EmailTemplates_template_idPutPutBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'email/templates/' + template_id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Export Fax History
		 * Get fax/history/export?filename={filename}
		 * @param {string} filename Your export filename.
		 * @return {void} OK
		 */
		FaxHistoryExportGet(filename: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'fax/history/export?filename=' + (filename == null ? '' : encodeURIComponent(filename)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Fax History
		 * Get a list of Fax History.
		 * Get fax/history?date_from={date_from}&date_to={date_to}&q={q}&order_by={order_by}
		 * @param {number} date_from Customize result by setting from date (timestsamp)
		 * @param {number} date_to Customize result by setting to date (timestamp)
		 * @param {string} q Custom query
		 * @param {string} order_by Order result by
		 * @return {void} OK
		 */
		FaxHistoryGet(date_from: number, date_to: number, q: string, order_by: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'fax/history?date_from=' + date_from + '&date_to=' + date_to + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&order_by=' + (order_by == null ? '' : encodeURIComponent(order_by)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Calculate Price
		 * Post fax/price
		 * @return {void} OK
		 */
		FaxPricePost(requestBody: Send_FaxBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'fax/price', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * List of Fax Delivery Receipts
		 * Get fax/receipts
		 * @return {void} OK
		 */
		FaxReceiptsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'fax/receipts', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a Test Delivery Receipt
		 * Post fax/receipts
		 * @return {void} OK
		 */
		FaxReceiptsPost(requestBody: Add_a_Test_Delivery_ReceiptBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'fax/receipts', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Mark Fax Delivery Receipts as read
		 * Put fax/receipts-read
		 * @return {void} OK
		 */
		FaxReceipts_readPut(requestBody: FaxReceipts_readPutPutBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'fax/receipts-read', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a Specific Fax Delivery Receipt
		 * Get fax/receipts/{message_id}
		 * @param {string} message_id D2AF-479B-8955-6395D561DEF4" (required, number) - Message ID.
		 * @return {void} OK
		 */
		FaxReceipts_message_idGet(message_id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'fax/receipts/' + (message_id == null ? '' : encodeURIComponent(message_id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Send Fax
		 * **Letter File Options**
		 * **Use existing URL**
		 * With this option, you can use an existing URL to a PDF document. For example, you might generate the pdf on your server.
		 * **Upload File to Our Server**
		 * With this option, you can use the `/uploads` endpoint to upload the document. The `/uploads` endpoint returns a URL that can be used in the `/fax/send` endpoint.
		 * Post fax/send
		 * @return {void} OK
		 */
		FaxSendPost(requestBody: Send_FaxBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'fax/send', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Forgot Password
		 * Put forgot-password
		 * @return {void} OK
		 */
		Forgot_passwordPut(requestBody: Forgot_passwordPutPutBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'forgot-password', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Verify Forgot Password
		 * Put forgot-password/verify
		 * @return {void} OK
		 */
		Forgot_passwordVerifyPut(requestBody: Forgot_passwordVerifyPutPutBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'forgot-password/verify', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Forgot Username
		 * Put forgot-username
		 * @return {void} OK
		 */
		Forgot_usernamePut(requestBody: Forgot_usernamePutPutBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'forgot-username', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all Contact Lists
		 * Get lists
		 * @return {void} OK
		 */
		ListsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'lists', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new contact list
		 * Post lists
		 * @return {void} OK
		 */
		ListsPost(requestBody: ListsPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'lists', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Transfer a Contact
		 * Transfers a specific contact to another list.
		 * Put lists/{from_list_id}/contacts/{contact_id}/{to_list_id}
		 * @param {number} from_list_id From list id.
		 * @param {number} contact_id Contact ID.
		 * @param {number} to_list_id To list id.
		 * @return {void} OK
		 */
		Lists_from_list_idContacts_contact_id_to_list_idPut(from_list_id: number, contact_id: number, to_list_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'lists/' + from_list_id + '/contacts/' + contact_id + '/' + to_list_id, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a specific contact list
		 * Delete lists/{list_id}
		 * @param {number} list_id Your contact list id you want to access.
		 * @return {void} OK
		 */
		Lists_list_idDelete(list_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'lists/' + list_id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific contact list
		 * Get lists/{list_id}
		 * @param {number} list_id Your contact list id you want to access.
		 * @return {void} OK
		 */
		Lists_list_idGet(list_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'lists/' + list_id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a specific contact list
		 * Put lists/{list_id}
		 * @param {number} list_id Your contact list id you want to access.
		 * @return {void} OK
		 */
		Lists_list_idPut(list_id: number, requestBody: Lists_list_idPutPutBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'lists/' + list_id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all Contacts in a List
		 * Get lists/{list_id}/contacts
		 * @param {number} list_id Your contact list id where your contacts belong.
		 * @return {void} OK
		 */
		Lists_list_idContactsGet(list_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'lists/' + list_id + '/contacts', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new contact
		 * Note that the fields `phone_number`, `fax_number` and email` are all optional; however at least one of them must be specified, otherwise the API call will fail.
		 * Post lists/{list_id}/contacts
		 * @param {number} list_id Your contact list id where your contact be associated.
		 * @return {void} OK
		 */
		Lists_list_idContactsPost(list_id: number, requestBody: Lists_list_idContactsPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'lists/' + list_id + '/contacts', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a specific contact
		 * Delete lists/{list_id}/contacts/{contact_id}
		 * @param {number} list_id Your contact list id you want to access.
		 * @param {number} contact_id Your contact id you want to access.
		 * @return {void} OK
		 */
		Lists_list_idContacts_contact_idDelete(list_id: number, contact_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'lists/' + list_id + '/contacts/' + contact_id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific contact
		 * Get lists/{list_id}/contacts/{contact_id}
		 * @param {number} list_id Your contact list id you want to access.
		 * @param {number} contact_id Your contact id you want to access.
		 * @return {void} OK
		 */
		Lists_list_idContacts_contact_idGet(list_id: number, contact_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'lists/' + list_id + '/contacts/' + contact_id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a specific contact
		 * Put lists/{list_id}/contacts/{contact_id}
		 * @param {number} list_id Contact list id you want to access.
		 * @param {number} contact_id Contact id you want to access.
		 * @return {void} OK
		 */
		Lists_list_idContacts_contact_idPut(list_id: number, contact_id: number, requestBody: Lists_list_idContacts_contact_idPutPutBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'lists/' + list_id + '/contacts/' + contact_id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Export Contacts List
		 * Get lists/{list_id}/export?filename={filename}
		 * @param {string} filename Your export filename.
		 * @param {string} list_id Automatically added
		 * @return {void} OK
		 */
		Lists_list_idExportGet(filename: string, list_id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'lists/' + (list_id == null ? '' : encodeURIComponent(list_id)) + '/export?filename=' + (filename == null ? '' : encodeURIComponent(filename)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Import Contacts to List
		 * Post lists/{list_id}/import
		 * @param {number} list_id Your contact list id you want to access.
		 * @return {void} OK
		 */
		Lists_list_idImportPost(list_id: number, requestBody: Lists_list_idImportPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'lists/' + list_id + '/import', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Show CSV Import File Preview
		 * Show first row of the csv import file.
		 * Post lists/{list_id}/import-csv-preview
		 * @param {number} list_id Your contact list id.
		 * @return {void} OK
		 */
		Lists_list_idImport_csv_previewPost(list_id: number, requestBody: Lists_list_idImport_csv_previewPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'lists/' + list_id + '/import-csv-preview', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get List of Acceptable Import Fields
		 * Get lists/{list_id}/import-fields
		 * @param {string} list_id Automatically added
		 * @return {void} OK
		 */
		Lists_list_idImport_fieldsGet(list_id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'lists/' + (list_id == null ? '' : encodeURIComponent(list_id)) + '/import-fields', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove Duplicate Contacts
		 * Put lists/{list_id}/remove-duplicates
		 * @param {number} list_id Your contact list id.
		 * @return {void} OK
		 */
		Lists_list_idRemove_duplicatesPut(list_id: number, requestBody: Lists_list_idRemove_duplicatesPutPutBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'lists/' + list_id + '/remove-duplicates', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove Opted Out Contacts
		 * Put lists/{list_id}/remove-opted-out-contacts/{opt_out_list_id}
		 * @param {number} list_id Your contact list id.
		 * @param {number} opt_out_list_id Your opt out list id.
		 * @return {void} OK
		 */
		Lists_list_idRemove_opted_out_contacts_opt_out_list_idPut(list_id: number, opt_out_list_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'lists/' + list_id + '/remove-opted-out-contacts/' + opt_out_list_id, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancel All MMS
		 * Put mms/cancel-all
		 * @return {void} OK
		 */
		MmsCancel_allPut(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'mms/cancel-all', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Export MMS History
		 * Get mms/history/export?filename={filename}
		 * @param {string} filename Your export filename.
		 * @return {void} OK
		 */
		MmsHistoryExportGet(filename: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'mms/history/export?filename=' + (filename == null ? '' : encodeURIComponent(filename)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get MMS History
		 * Get mms/history?q={q}&order_by={order_by}&date_from={date_from}&date_to={date_to}
		 * @param {string} q A custom query.
		 * @param {string} order_by Sort records by.
		 * @param {string} date_from [Unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp) (from) used to show records by date.
		 * @param {string} date_to [Unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp) (to) used to show records by date.
		 * @return {void} OK
		 */
		MmsHistoryGet(q: string, order_by: string, date_from: string, date_to: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'mms/history?q=' + (q == null ? '' : encodeURIComponent(q)) + '&order_by=' + (order_by == null ? '' : encodeURIComponent(order_by)) + '&date_from=' + (date_from == null ? '' : encodeURIComponent(date_from)) + '&date_to=' + (date_to == null ? '' : encodeURIComponent(date_to)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Price
		 * Post mms/price
		 * @return {void} OK
		 */
		MmsPricePost(requestBody: MmsPricePostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'mms/price', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all Delivery Receipts
		 * Get mms/receipts
		 * @return {void} OK
		 */
		MmsReceiptsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'mms/receipts', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Mark Receipts As Read
		 * Put mms/receipts-read
		 * @return {void} OK
		 */
		MmsReceipts_readPut(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'mms/receipts-read', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Delivery Receipt
		 * Get mms/receipts/{message_id}
		 * @param {string} message_id Message ID.
		 * @return {void} OK
		 */
		MmsReceipts_message_idGet(message_id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'mms/receipts/' + (message_id == null ? '' : encodeURIComponent(message_id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Send MMS
		 * Post mms/send
		 * @return {void} OK
		 */
		MmsSendPost(requestBody: MmsSendPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'mms/send', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancel MMS
		 * Put mms/{message_id}/cancel
		 * @param {string} message_id Message ID.
		 * @return {void} OK
		 */
		Mms_message_idCancelPut(message_id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'mms/' + (message_id == null ? '' : encodeURIComponent(message_id)) + '/cancel', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all Dedicated Numbers
		 * Get numbers
		 * @return {void} OK
		 */
		NumbersGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'numbers', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Buy dedicated number
		 * Post numbers/buy/{dedicated_number}
		 * @param {string} dedicated_number Your phone number in E.164 format.
		 * @return {void} OK
		 */
		NumbersBuy_dedicated_numberPost(dedicated_number: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'numbers/buy/' + (dedicated_number == null ? '' : encodeURIComponent(dedicated_number)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Search Dedicated Numbers by Country
		 * Get numbers/search/{country}?{search}=1&{search_type}=2
		 * @param {string} country Your preferred country.
		 * @param {string} search Your search pattern or query.
		 * @param {number} search_type Your strategy for searching, 0 = starts with, 1 = anywhere, 2 = ends with.
		 * @return {void} OK
		 */
		NumbersSearch_countryGet(country: string, search: string, search_type: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'numbers/search/' + (country == null ? '' : encodeURIComponent(country)) + '?' + (search == null ? '' : encodeURIComponent(search)) + '=1&' + search_type + '=2', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List Direct Mail Campaigns
		 * Get list of direct mail campaigns.
		 * Get post/direct-mail/campaigns
		 * @return {void} OK
		 */
		PostDirect_mailCampaignsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'post/direct-mail/campaigns', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Calculate Direct Mail Campaign Price
		 * Calculate direct mail campaign price.
		 * Post post/direct-mail/campaigns/price
		 * @return {void} OK
		 */
		PostDirect_mailCampaignsPricePost(requestBody: PostDirect_mailCampaignsPricePostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'post/direct-mail/campaigns/price', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Create New Campaign
		 * Create new direct mail campaign.
		 * Post post/direct-mail/campaigns/send
		 * @return {void} OK
		 */
		PostDirect_mailCampaignsSendPost(requestBody: PostDirect_mailCampaignsSendPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'post/direct-mail/campaigns/send', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Search Locations
		 * Get post/direct-mail/locations/search/{country}/?q={query}
		 * @param {string} country Country code.
		 * @param {string} query A postal code or place name.
		 * @return {void} OK
		 */
		PostDirect_mailLocationsSearch_countryGet(country: string, query: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'post/direct-mail/locations/search/' + (country == null ? '' : encodeURIComponent(country)) + '/?q=' + (query == null ? '' : encodeURIComponent(query)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Detect Address
		 * The `detect-address` endpoint accepts either a letter in PDF format or an address string and attempts to convert it to a standard address format. Note that the PDF should be in standard address format, having the recipient's name and address listed at the top.
		 * The endpoint accepts two types of data:
		 * 1. A PDF file in `base64` encoding. In this case, submit the `base64`-encoded PDF file contents in the `content` field of the request body.
		 * 2. An address string. In this case, submit the address in a string using the `address` field of the request body.
		 * Post post/letters/detect-address
		 * @return {void} OK
		 */
		PostLettersDetect_addressPost(requestBody: PostLettersDetect_addressPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'post/letters/detect-address', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Post Letter History
		 * Get post/letters/history
		 * @return {void} OK
		 */
		PostLettersHistoryGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'post/letters/history', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Export Post Letter History
		 * Get post/letters/history/export?filename={filename}
		 * @param {string} filename Your export filename.
		 * @return {void} OK
		 */
		PostLettersHistoryExportGet(filename: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'post/letters/history/export?filename=' + (filename == null ? '' : encodeURIComponent(filename)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Calculate Price
		 * Post post/letters/price
		 * @return {void} OK
		 */
		PostLettersPricePost(requestBody: PostLettersPricePostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'post/letters/price', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Send Post Letter
		 * **Supported File Types**
		 * We support `pdf`, `docx` and `doc` files. Contact us to add support for any other file type. If you're using `docx` or `doc` files, you'll need to convert the file first using our uploads endpoint with the querystring parameter `convert=post` e.g. `POST /uploads?convert=post`. This will return a URL to the converted pdf file that can be used in the `/post/letters/send` endpoint.
		 * **Letter File Options**
		 * **Use existing URL**
		 * With this option, you can use an existing URL to a `pdf` document. For example, you might generate the `pdf` on your server.
		 * **Upload File to Our Server**
		 * With this option, you can use the `/uploads` endpoint to upload the document. The `/uploads` endpoint returns a URL that can be used in the `/post/letters/send` endpoint.
		 * Post post/letters/send
		 * @return {void} OK
		 */
		PostLettersSendPost(requestBody: PostLettersSendPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'post/letters/send', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Export Postcard History
		 * Get post/postcards/export?filename={filename}
		 * @param {string} filename Filename for the export file.
		 * @return {void} OK
		 */
		PostPostcardsExportGet(filename: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'post/postcards/export?filename=' + (filename == null ? '' : encodeURIComponent(filename)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Postcard History
		 * Get post/postcards/history
		 * @return {void} OK
		 */
		PostPostcardsHistoryGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'post/postcards/history', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Calculate Pricing
		 * For `file_urls` field. You can attach at least 1 and max of 2 PDF file urls.
		 * - Supply a single pdf with 2 pages (front and back)
		 * - Supply 2 urls to seperate PDFs
		 * Post post/postcards/price
		 * @return {void} OK
		 */
		PostPostcardsPricePost(requestBody: PostPostcardsPricePostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'post/postcards/price', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Send Postcard
		 * **Supported File Types**
		 * We support PDF, docx and doc. Contact us to add support for any other file type. If you're using docx or doc files, you'll need to convert the file first using our uploads endpoint with the querystring parameter ?convert=post. e.g. POST /uploads?convert=post. This will return a URL to the converted pdf file that can be used in the /post/postcards/send endpoint.
		 * **Postcard File Options**
		 * **Use existing URL**
		 * With this option, you can use an existing URL to a PDF document. For example, you might generate the pdf on your server.
		 * For `file_urls` field. You can attach at least 1 and max of 2 PDF file urls.
		 * - Supply a single pdf with 2 pages (front and back)
		 * - Supply 2 urls to seperate PDFs
		 * **Upload File to Our Server**
		 * With this option, you can use the `/uploads` endpoint to upload the document. The `/uploads` endpoint returns a URL that can be used in the `/post/postcards/send` endpoint.
		 * Post post/postcards/send
		 * @return {void} OK
		 */
		PostPostcardsSendPost(requestBody: PostPostcardsSendPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'post/postcards/send', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get List of Post Return Addresses
		 * Get post/return-addresses
		 * @return {void} OK
		 */
		PostReturn_addressesGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'post/return-addresses', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a Post Return Address
		 * Post post/return-addresses
		 * @return {void} OK
		 */
		PostReturn_addressesPost(requestBody: Create_a_Post_Return_AddressBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'post/return-addresses', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Post Return Address
		 * Delete post/return-addresses/{return_address_id}
		 * @param {number} return_address_id Your return address id.
		 * @return {void} OK
		 */
		PostReturn_addresses_return_address_idDelete(return_address_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'post/return-addresses/' + return_address_id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Post Return Address
		 * Get post/return-addresses/{return_address_id}
		 * @param {number} return_address_id Your return address id.
		 * @return {void} OK
		 */
		PostReturn_addresses_return_address_idGet(return_address_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'post/return-addresses/' + return_address_id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update Post Return Address
		 * Put post/return-addresses/{return_address_id}
		 * @param {number} return_address_id Your return address id.
		 * @return {void} OK
		 */
		PostReturn_addresses_return_address_idPut(return_address_id: number, requestBody: Create_a_Post_Return_AddressBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'post/return-addresses/' + return_address_id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Country Pricing
		 * Get pricing/{country}?currency={currency}
		 * @param {string} country Two-letter representation of the country.
		 * @param {string} currency Three-letter representation of the currency.
		 * @return {void} OK
		 */
		Pricing_countryGet(country: string, currency: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'pricing/' + (country == null ? '' : encodeURIComponent(country)) + '?currency=' + (currency == null ? '' : encodeURIComponent(currency)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Credit Card info
		 * Get recharge/credit-card
		 * @return {void} OK
		 */
		RechargeCredit_cardGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'recharge/credit-card', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update Credit Card info
		 * Put recharge/credit-card
		 * @return {void} OK
		 */
		RechargeCredit_cardPut(requestBody: RechargeCredit_cardPutPutBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'recharge/credit-card', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * List of Packages
		 * Get recharge/packages?country={country}
		 * @param {string} country Your country.
		 * @return {void} OK
		 */
		RechargePackagesGet(country: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'recharge/packages?country=' + (country == null ? '' : encodeURIComponent(country)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Purchase a Package
		 * Put recharge/purchase/{package_id}
		 * @param {number} package_id Your package id.
		 * @return {void} OK
		 */
		RechargePurchase_package_idPut(package_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'recharge/purchase/' + package_id, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Transactions
		 * Get recharge/transactions
		 * @return {void} OK
		 */
		RechargeTransactionsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'recharge/transactions', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific transaction
		 * Get recharge/transactions/{transaction_id}
		 * @param {string} transaction_id 1c65-47fa-aea2-3ded9ed57557 (number, required) - Your transction id.
		 * @return {void} OK
		 */
		RechargeTransactions_transaction_idGet(transaction_id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'recharge/transactions/' + (transaction_id == null ? '' : encodeURIComponent(transaction_id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get List of Referral Accounts
		 * Get referral/accounts
		 * @return {void} OK
		 */
		ReferralAccountsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'referral/accounts', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Reseller Setting
		 * Get reseller setting.
		 * Get reseller
		 * @return {void} OK
		 */
		ResellerGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'reseller', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update Reseller Setting
		 * Update a specific reseller setting.
		 * Put reseller
		 * @return {void} OK
		 */
		ResellerPut(requestBody: ResellerPutPutBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'reseller', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * List of Reseller Accounts
		 * Get list of Reseller Accounts
		 * Get reseller/accounts
		 * @return {void} OK
		 */
		ResellerAccountsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'reseller/accounts', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create Reseller Account
		 * Post reseller/accounts
		 * @return {void} OK
		 */
		ResellerAccountsPost(requestBody: Create_Reseller_AccountBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'reseller/accounts', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Create Reseller Account - Public
		 * Post reseller/accounts-public
		 * @return {void} OK
		 */
		ResellerAccounts_publicPost(requestBody: ResellerAccounts_publicPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'reseller/accounts-public', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Reseller Account
		 * Get a specific reseller account.
		 * Get reseller/accounts/{client_user_id}
		 * @param {number} client_user_id The client user id.
		 * @return {void} OK
		 */
		ResellerAccounts_client_user_idGet(client_user_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'reseller/accounts/' + client_user_id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update Reseller Account
		 * Put reseller/accounts/{client_user_id}
		 * @param {number} client_user_id Your client user id.
		 * @return {void} OK
		 */
		ResellerAccounts_client_user_idPut(client_user_id: number, requestBody: Create_Reseller_AccountBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'reseller/accounts/' + client_user_id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Transfer Credit
		 * Put reseller/transfer-credit
		 * @return {void} OK
		 */
		ResellerTransfer_creditPut(requestBody: ResellerTransfer_creditPutPutBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'reseller/transfer-credit', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Reseller By Subdomain
		 * Get reseller setting by subdomin.
		 * Get reseller/{subdomain}
		 * @param {string} subdomain Subdomain
		 * @return {void} OK
		 */
		Reseller_subdomainGet(subdomain: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'reseller/' + (subdomain == null ? '' : encodeURIComponent(subdomain)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * SDK Download
		 * Get sdk-download/{type}
		 * @param {string} type Supported types.
		 * @return {void} OK
		 */
		Sdk_download_typeGet(type: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sdk-download/' + (type == null ? '' : encodeURIComponent(type)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Search Contacts-Lists
		 * Get search/contacts-lists?q={q}
		 * @param {string} q Your keyword or query.
		 * @return {void} OK
		 */
		SearchContacts_listsGet(q: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'search/contacts-lists?q=' + (q == null ? '' : encodeURIComponent(q)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get list of SMS Campaigns
		 * Get sms-campaigns
		 * @return {void} OK
		 */
		Sms_campaignsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sms-campaigns', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Calculate Price for SMS Campaign
		 * Post sms-campaigns/price
		 * @return {void} OK
		 */
		Sms_campaignsPricePost(requestBody: Sms_campaignsPricePostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sms-campaigns/price', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Use Short URL
		 * This is functionally identical to the **POST /sms-campaigns/send** endpoint, other than adding the `smsg.us/xxxxx` string to the message body additional `url_to_shorten` parameter.
		 * Post sms-campaigns/send
		 * @return {void} OK
		 */
		Sms_campaignsSendPost(requestBody: Sms_campaignsSendPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sms-campaigns/send', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Link Tracking Export
		 * Compile all link tracking for the specified campaign into a CSV for download.
		 * Get sms-campaigns/{campaign_id}/link-export?filename={filename}
		 * @param {number} campaign_id Your campaign id.
		 * @param {string} filename Your export filename.
		 * @return {void} OK
		 */
		Sms_campaigns_campaign_idLink_exportGet(campaign_id: number, filename: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sms-campaigns/' + campaign_id + '/link-export?filename=' + (filename == null ? '' : encodeURIComponent(filename)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Link Statistics
		 * Get the breakdown of statistics for your campaign. Note that the returned values vary depending on your specific customers' interaction, so it's not safe to assume a value will always be specified.
		 * Get sms-campaigns/{campaign_id}/link-statistics
		 * @param {number} campaign_id Your campaign id.
		 * @return {void} OK
		 */
		Sms_campaigns_campaign_idLink_statisticsGet(campaign_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sms-campaigns/' + campaign_id + '/link-statistics', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Link Tracking
		 * This endpoint gives you a paginated overview of all the links in a particular campaign, and who has and hasn't visited them.
		 * Get sms-campaigns/{campaign_id}/link-tracking
		 * @param {number} campaign_id Your campaign id.
		 * @return {void} OK
		 */
		Sms_campaigns_campaign_idLink_trackingGet(campaign_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sms-campaigns/' + campaign_id + '/link-tracking', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get SMS Campaign
		 * Get sms-campaigns/{sms_campaign_id}
		 * @param {number} sms_campaign_id Your SMS campaign id.
		 * @return {void} OK
		 */
		Sms_campaigns_sms_campaign_idGet(sms_campaign_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sms-campaigns/' + sms_campaign_id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update an SMS Campaign
		 * Put sms-campaigns/{sms_campaign_id}
		 * @param {number} sms_campaign_id Your SMS Campaign id.
		 * @return {void} OK
		 */
		Sms_campaigns_sms_campaign_idPut(sms_campaign_id: number, requestBody: Sms_campaigns_sms_campaign_idPutPutBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'sms-campaigns/' + sms_campaign_id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancel an SMS Campaign
		 * Put sms-campaigns/{sms_campaign_id}/cancel
		 * @param {number} sms_campaign_id Your SMS Campaign id.
		 * @return {void} OK
		 */
		Sms_campaigns_sms_campaign_idCancelPut(sms_campaign_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'sms-campaigns/' + sms_campaign_id + '/cancel', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancel all Scheduled Messages
		 * Put sms/cancel-all
		 * @return {void} OK
		 */
		SmsCancel_allPut(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'sms/cancel-all', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List of Email-to-SMS Allowed Address
		 * Get list of allowed email addresses.
		 * Get sms/email-sms
		 * @return {void} OK
		 */
		SmsEmail_smsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sms/email-sms', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create Email to SMS Allowed Address
		 * Create an allowed email address.
		 * Post sms/email-sms
		 * @return {void} OK
		 */
		SmsEmail_smsPost(requestBody: SmsEmail_smsPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sms/email-sms', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * List Stripped Strings
		 * Get sms/email-sms-stripped-strings
		 * @return {void} OK
		 */
		SmsEmail_sms_stripped_stringsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sms/email-sms-stripped-strings', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create Stripped String
		 * Post sms/email-sms-stripped-strings
		 * @return {void} OK
		 */
		SmsEmail_sms_stripped_stringsPost(requestBody: SmsEmail_sms_stripped_stringsPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sms/email-sms-stripped-strings', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Stripped String
		 * Delete sms/email-sms-stripped-strings/{rule_id}
		 * @param {number} rule_id The rule id you want to access.
		 * @return {void} OK
		 */
		SmsEmail_sms_stripped_strings_rule_idDelete(rule_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'sms/email-sms-stripped-strings/' + rule_id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Find Specific Stripped String
		 * Get sms/email-sms-stripped-strings/{rule_id}
		 * @param {number} rule_id The rule id you want to access.
		 * @return {void} OK
		 */
		SmsEmail_sms_stripped_strings_rule_idGet(rule_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sms/email-sms-stripped-strings/' + rule_id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update Stripped String
		 * Put sms/email-sms-stripped-strings/{rule_id}
		 * @param {number} rule_id The rule id you want to access.
		 * @return {void} OK
		 */
		SmsEmail_sms_stripped_strings_rule_idPut(rule_id: number, requestBody: SmsEmail_sms_stripped_strings_rule_idPutPutBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'sms/email-sms-stripped-strings/' + rule_id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Email-to-SMS Allowed Address
		 * Delete a specific allowed email address.
		 * Delete sms/email-sms/{email_address_id}
		 * @param {number} email_address_id Your email address id.
		 * @return {void} OK
		 */
		SmsEmail_sms_email_address_idDelete(email_address_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'sms/email-sms/' + email_address_id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get specific Email-to-SMS Allowed Address
		 * Get a specific allowed email address.
		 * Get sms/email-sms/{email_address_id}
		 * @param {number} email_address_id Your email address id.
		 * @return {void} OK
		 */
		SmsEmail_sms_email_address_idGet(email_address_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sms/email-sms/' + email_address_id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update Email-to-SMS Allowed Address
		 * Update a specific allowed email address.
		 * Put sms/email-sms/{email_address_id}
		 * @param {number} email_address_id Your email address id.
		 * @return {void} OK
		 */
		SmsEmail_sms_email_address_idPut(email_address_id: number, requestBody: SmsEmail_sms_email_address_idPutPutBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'sms/email-sms/' + email_address_id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Export SMS History
		 * Get sms/history/export?filename={filename}
		 * @param {string} filename Your export filename.
		 * @return {void} OK
		 */
		SmsHistoryExportGet(filename: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sms/history/export?filename=' + (filename == null ? '' : encodeURIComponent(filename)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all History
		 * **SMS Delivery Status**
		 * **Status (status field)**
		 * | Status | Description |
		 * |---|---|---|
		 * | `Completed` | Added to delivery queue. Waiting to be sent to the network.|
		 * | `Sent` | Message sent to the network.|
		 * | `Cancelled` | Message cancelled.|
		 * | `Scheduled` | Message scheduled.|
		 * | `WaitApproval` | Waiting approval by our team. This is temporary and will change to 'Sent' once approved. This only happens for a few messages that are flagged for approval by our automated spam-detection system.|
		 * **Status Codes (status_code field)**
		 * | Code | Text | Description |
		 * |---|---|---|
		 * | `200` | Sent by network| Temporary success|
		 * | `201` | Received on handset| Permanent success|
		 * | `300` | Delivery failure| Permanent failure|
		 * | `301` | Delivery failure| Permanent failure|
		 * | `302` | Delivery failure| Temporary failure - supplier routing issue|
		 * Get sms/history?date_from={date_from}&date_to={date_to}
		 * @param {string} date_from Timestamp (from) used to show records by date.
		 * @param {string} date_to Timestamp (to) used to show recrods by date.
		 * @return {void} OK
		 */
		SmsHistoryGet(date_from: string, date_to: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sms/history?date_from=' + (date_from == null ? '' : encodeURIComponent(date_from)) + '&date_to=' + (date_to == null ? '' : encodeURIComponent(date_to)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all Inbound SMS - Pull
		 * Get sms/inbound
		 * @return {void} OK
		 */
		SmsInboundGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sms/inbound', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a Test Inbound SMS
		 * Post sms/inbound
		 * @return {void} OK
		 */
		SmsInboundPost(requestBody: Add_a_Test_Delivery_ReceiptBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sms/inbound', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Mark all Inbound SMS as read
		 * Put sms/inbound-read
		 * @return {void} OK
		 */
		SmsInbound_readPut(requestBody: SmsInbound_readPutPutBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'sms/inbound-read', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Mark a specific Inbound SMS as read
		 * Put sms/inbound-read/{message_id}
		 * @param {string} message_id Message ID. Must be a valid GUID.
		 * @return {void} OK
		 */
		SmsInbound_read_message_idPut(message_id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'sms/inbound-read/' + (message_id == null ? '' : encodeURIComponent(message_id)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Specific Inbound - Pull
		 * Get sms/inbound/{outbound_message_id}
		 * @param {string} outbound_message_id Message ID of the original outbound message, to which the inbound message is a reply. Must be a valid GUID.
		 * @return {void} OK
		 */
		SmsInbound_outbound_message_idGet(outbound_message_id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sms/inbound/' + (outbound_message_id == null ? '' : encodeURIComponent(outbound_message_id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Calculate Price
		 * Post sms/price
		 * @return {void} OK
		 */
		SmsPricePost(requestBody: SmsPricePostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sms/price', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all Delivery Receipts
		 * Get sms/receipts
		 * @return {void} OK
		 */
		SmsReceiptsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sms/receipts', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a Test Delivery Receipt
		 * Post sms/receipts
		 * @return {void} OK
		 */
		SmsReceiptsPost(requestBody: Add_a_Test_Delivery_ReceiptBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sms/receipts', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Mark Delivery Receipts as read
		 * Put sms/receipts-read
		 * @return {void} OK
		 */
		SmsReceipts_readPut(requestBody: SmsReceipts_readPutPutBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'sms/receipts-read', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a Specific Delivery Receipt
		 * Get sms/receipts/{message_id}
		 * @param {string} message_id Your message id.
		 * @return {void} OK
		 */
		SmsReceipts_message_idGet(message_id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sms/receipts/' + (message_id == null ? '' : encodeURIComponent(message_id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Send an SMS
		 * You can post **up to 1000 messages** with each API call.
		 * Post sms/send
		 * @return {void} OK
		 */
		SmsSendPost(requestBody: SmsSendPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sms/send', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * List of Templates
		 * Get list of templates.
		 * Get sms/templates
		 * @return {void} OK
		 */
		SmsTemplatesGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sms/templates', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a Template
		 * Create new template.
		 * Post sms/templates
		 * @return {void} OK
		 */
		SmsTemplatesPost(requestBody: SmsTemplatesPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sms/templates', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a Template
		 * Delete sms/templates/{template_id}
		 * @param {string} template_id Your template id.
		 * @return {void} OK
		 */
		SmsTemplates_template_idDelete(template_id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'sms/templates/' + (template_id == null ? '' : encodeURIComponent(template_id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a Template
		 * Put sms/templates/{template_id}
		 * @param {string} template_id Your template id.
		 * @return {void} OK
		 */
		SmsTemplates_template_idPut(template_id: string, requestBody: SmsTemplates_template_idPutPutBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'sms/templates/' + (template_id == null ? '' : encodeURIComponent(template_id)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancel a Scheduled Message
		 * Put sms/{message_id}/cancel
		 * @param {string} message_id B7CE432193CD-0753597B7293 (string, required) - The message ID you want to cancel.
		 * @return {void} OK
		 */
		Sms_message_idCancelPut(message_id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'sms/' + (message_id == null ? '' : encodeURIComponent(message_id)) + '/cancel', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get SMS Statistics
		 * Get statistics/sms
		 * @return {void} OK
		 */
		StatisticsSmsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'statistics/sms', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Voice Statistics
		 * Get statistics/voice
		 * @return {void} OK
		 */
		StatisticsVoiceGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'statistics/voice', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all Subaccounts
		 * Get subaccounts
		 * @return {void} OK
		 */
		SubaccountsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'subaccounts', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new subaccount
		 * Post subaccounts
		 * @return {void} OK
		 */
		SubaccountsPost(requestBody: SubaccountsPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subaccounts', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a specific subaccount
		 * Delete subaccounts/{subaccount_id}
		 * @param {number} subaccount_id The subaccount ID you want to access.
		 * @return {void} OK
		 */
		Subaccounts_subaccount_idDelete(subaccount_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subaccounts/' + subaccount_id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific subaccount
		 * Get subaccounts/{subaccount_id}
		 * @param {string} subaccount_id The subaccount ID you want to access.
		 * @return {void} OK
		 */
		Subaccounts_subaccount_idGet(subaccount_id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'subaccounts/' + (subaccount_id == null ? '' : encodeURIComponent(subaccount_id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a specific subaccount
		 * Put subaccounts/{subaccount_id}
		 * @param {number} subaccount_id The subaccount ID you want to access.
		 * @return {void} OK
		 */
		Subaccounts_subaccount_idPut(subaccount_id: number, requestBody: Subaccounts_subaccount_idPutPutBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'subaccounts/' + subaccount_id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Regenerate API Key
		 * Put subaccounts/{subaccount_id}/regen-api-key
		 * @param {number} subaccount_id The ID of the subaccount to be accessed.
		 * @return {void} OK
		 */
		Subaccounts_subaccount_idRegen_api_keyPut(subaccount_id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'subaccounts/' + subaccount_id + '/regen-api-key', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Timezones
		 * Get supported list of timezones.
		 * Get timezones
		 * @return {void} OK
		 */
		TimezonesGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'timezones', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Upload a file
		 * Post uploads?convert={convert}
		 * @return {void} OK
		 */
		UploadsPost(requestBody: UploadsPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'uploads?convert={convert}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancel all Voice Calls
		 * Put voice/cancel-all
		 * @return {void} OK
		 */
		VoiceCancel_allPut(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'voice/cancel-all', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Export Voice History
		 * Get voice/history/export?filename={filename}
		 * @param {string} filename Your export filename.
		 * @return {void} OK
		 */
		VoiceHistoryExportGet(filename: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'voice/history/export?filename=' + (filename == null ? '' : encodeURIComponent(filename)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Voice History
		 * Get voice/history?date_from={date_from}&date_to={date_to}
		 * @param {string} date_from Timestamp (from) used to show records by date.
		 * @param {string} date_to Timestamp (to) used to show recrods by date.
		 * @return {void} OK
		 */
		VoiceHistoryGet(date_from: string, date_to: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'voice/history?date_from=' + (date_from == null ? '' : encodeURIComponent(date_from)) + '&date_to=' + (date_to == null ? '' : encodeURIComponent(date_to)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Voice Languages
		 * Get voice/lang
		 * @return {void} OK
		 */
		VoiceLangGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'voice/lang', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Calculate Price
		 * Post voice/price
		 * @return {void} OK
		 */
		VoicePricePost(requestBody: VoicePricePostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'voice/price', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Voice receipts
		 * Get voice/receipts
		 * @return {void} OK
		 */
		VoiceReceiptsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'voice/receipts', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a Test Delivery Receipt
		 * Post voice/receipts
		 * @return {void} OK
		 */
		VoiceReceiptsPost(requestBody: Add_a_Test_Delivery_ReceiptBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'voice/receipts', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Marked Voice Receipts as Read
		 * Put voice/receipts-read?date_before={date_before}
		 * @param {number} date_before An optional [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp) - mark all as read before this timestamp. If not given, all receipts will be marked as read.
		 * @return {void} OK
		 */
		VoiceReceipts_readPut(date_before: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'voice/receipts-read?date_before=' + date_before, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Specific Voice Receipt
		 * Get voice/receipts/{message_id}
		 * @param {string} message_id 3055-45F1-9B79-F2C43509FD16 (string, required) - The voice receipt message id.
		 * @return {void} OK
		 */
		VoiceReceipts_message_idGet(message_id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'voice/receipts/' + (message_id == null ? '' : encodeURIComponent(message_id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Send a Voice Call
		 * You can post **up to 1000 messages** with each API call.
		 * We support some SSML tags allowing custom breaks or pauses to be entered, and the readout rate to be altered. [More info](https://help.clicksend.com/voice/how-to-adjust-tts-voice-calls).
		 * Post voice/send
		 * @return {void} OK
		 */
		VoiceSendPost(requestBody: VoiceSendPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'voice/send', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancel a Specific Voice Call
		 * Put voice/{message_id}/cancel
		 * @param {string} message_id Your voice message id.
		 * @return {void} OK
		 */
		Voice_message_idCancelPut(message_id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'voice/' + (message_id == null ? '' : encodeURIComponent(message_id)) + '/cancel', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

	export interface AccountPostPostBody {

		/**
		 * Your delivery to value.
		 * Required
		 */
		account_name: string;

		/**
		 * Your country.
		 * Required
		 */
		country: string;

		/**
		 * Your password.
		 * Required
		 */
		password: string;

		/**
		 * Your email.
		 * Required
		 */
		user_email: string;

		/**
		 * Your first name.
		 * Required
		 */
		user_first_name: string;

		/**
		 * Your last name.
		 * Required
		 */
		user_last_name: string;

		/**
		 * Your phone number in E.164 format.
		 * Required
		 */
		user_phone: string;

		/**
		 * Your username.
		 * Required
		 */
		username: string;
	}
	export interface AccountPostPostBodyFormProperties {

		/**
		 * Your delivery to value.
		 * Required
		 */
		account_name: FormControl<string | null | undefined>,

		/**
		 * Your country.
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * Your password.
		 * Required
		 */
		password: FormControl<string | null | undefined>,

		/**
		 * Your email.
		 * Required
		 */
		user_email: FormControl<string | null | undefined>,

		/**
		 * Your first name.
		 * Required
		 */
		user_first_name: FormControl<string | null | undefined>,

		/**
		 * Your last name.
		 * Required
		 */
		user_last_name: FormControl<string | null | undefined>,

		/**
		 * Your phone number in E.164 format.
		 * Required
		 */
		user_phone: FormControl<string | null | undefined>,

		/**
		 * Your username.
		 * Required
		 */
		username: FormControl<string | null | undefined>,
	}
	export function CreateAccountPostPostBodyFormGroup() {
		return new FormGroup<AccountPostPostBodyFormProperties>({
			account_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			user_email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			user_first_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			user_last_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			user_phone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AccountPutPutBody {

		/**
		 * Your delivery to value.
		 * Required
		 */
		account_name: string;

		/**
		 * Your country.
		 * Required
		 */
		country: string;

		/**
		 * Your password.
		 * Required
		 */
		password: string;

		/** Set the private uploads flag. 0 or 1 only. */
		private_uploads?: number | null;

		/** Set the private uploads flag. 0 or 1 only. */
		setting_sms_hide_business_name?: number | null;

		/** Set the private uploads flag. 0 or 1 only. */
		setting_sms_hide_your_number?: number | null;

		/**
		 * Timezone.
		 * Required
		 */
		timezone: string;

		/**
		 * Your email.
		 * Required
		 */
		user_email: string;

		/**
		 * Your first name.
		 * Required
		 */
		user_first_name: string;

		/**
		 * Your last name.
		 * Required
		 */
		user_last_name: string;

		/**
		 * Your phone number in E.164 format.
		 * Required
		 */
		user_phone: string;

		/**
		 * Your username.
		 * Required
		 */
		username: string;
	}
	export interface AccountPutPutBodyFormProperties {

		/**
		 * Your delivery to value.
		 * Required
		 */
		account_name: FormControl<string | null | undefined>,

		/**
		 * Your country.
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * Your password.
		 * Required
		 */
		password: FormControl<string | null | undefined>,

		/** Set the private uploads flag. 0 or 1 only. */
		private_uploads: FormControl<number | null | undefined>,

		/** Set the private uploads flag. 0 or 1 only. */
		setting_sms_hide_business_name: FormControl<number | null | undefined>,

		/** Set the private uploads flag. 0 or 1 only. */
		setting_sms_hide_your_number: FormControl<number | null | undefined>,

		/**
		 * Timezone.
		 * Required
		 */
		timezone: FormControl<string | null | undefined>,

		/**
		 * Your email.
		 * Required
		 */
		user_email: FormControl<string | null | undefined>,

		/**
		 * Your first name.
		 * Required
		 */
		user_first_name: FormControl<string | null | undefined>,

		/**
		 * Your last name.
		 * Required
		 */
		user_last_name: FormControl<string | null | undefined>,

		/**
		 * Your phone number in E.164 format.
		 * Required
		 */
		user_phone: FormControl<string | null | undefined>,

		/**
		 * Your username.
		 * Required
		 */
		username: FormControl<string | null | undefined>,
	}
	export function CreateAccountPutPutBodyFormGroup() {
		return new FormGroup<AccountPutPutBodyFormProperties>({
			account_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			private_uploads: new FormControl<number | null | undefined>(undefined),
			setting_sms_hide_business_name: new FormControl<number | null | undefined>(undefined),
			setting_sms_hide_your_number: new FormControl<number | null | undefined>(undefined),
			timezone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			user_email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			user_first_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			user_last_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			user_phone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Account_verifySendPutPutBody {
		country?: string | null;
		type?: string | null;
		user_phone?: string | null;
	}
	export interface Account_verifySendPutPutBodyFormProperties {
		country: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		user_phone: FormControl<string | null | undefined>,
	}
	export function CreateAccount_verifySendPutPutBodyFormGroup() {
		return new FormGroup<Account_verifySendPutPutBodyFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			user_phone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AutomationsEmailReceiptPostPostBody {

		/**
		 * Action.
		 * Required
		 */
		action: string;

		/**
		 * Action Address.
		 * Required
		 */
		action_address: string;

		/**
		 * Enabled.
		 * Required
		 */
		enabled: number;

		/**
		 * Match Type. 0=All reports.
		 * Required
		 */
		match_type: number;

		/**
		 * Rule Name.
		 * Required
		 */
		rule_name: string;
	}
	export interface AutomationsEmailReceiptPostPostBodyFormProperties {

		/**
		 * Action.
		 * Required
		 */
		action: FormControl<string | null | undefined>,

		/**
		 * Action Address.
		 * Required
		 */
		action_address: FormControl<string | null | undefined>,

		/**
		 * Enabled.
		 * Required
		 */
		enabled: FormControl<number | null | undefined>,

		/**
		 * Match Type. 0=All reports.
		 * Required
		 */
		match_type: FormControl<number | null | undefined>,

		/**
		 * Rule Name.
		 * Required
		 */
		rule_name: FormControl<string | null | undefined>,
	}
	export function CreateAutomationsEmailReceiptPostPostBodyFormGroup() {
		return new FormGroup<AutomationsEmailReceiptPostPostBodyFormProperties>({
			action: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			action_address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			enabled: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			match_type: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			rule_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AutomationsEmailReceipt_rule_idPutPutBody {

		/** Action. */
		action?: string | null;

		/** Action Address. */
		action_address?: string | null;

		/** Enabled. */
		enabled?: number | null;

		/** Match Type. 0=All reports. */
		match_type?: number | null;

		/** Rule Name. */
		rule_name?: string | null;
	}
	export interface AutomationsEmailReceipt_rule_idPutPutBodyFormProperties {

		/** Action. */
		action: FormControl<string | null | undefined>,

		/** Action Address. */
		action_address: FormControl<string | null | undefined>,

		/** Enabled. */
		enabled: FormControl<number | null | undefined>,

		/** Match Type. 0=All reports. */
		match_type: FormControl<number | null | undefined>,

		/** Rule Name. */
		rule_name: FormControl<string | null | undefined>,
	}
	export function CreateAutomationsEmailReceipt_rule_idPutPutBodyFormGroup() {
		return new FormGroup<AutomationsEmailReceipt_rule_idPutPutBodyFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			action_address: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<number | null | undefined>(undefined),
			match_type: new FormControl<number | null | undefined>(undefined),
			rule_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AutomationsFaxReceiptsPostPostBody {

		/**
		 * Action.
		 * Required
		 */
		action: string;

		/**
		 * Action Address.
		 * Required
		 */
		action_address: string;

		/**
		 * Enabled.
		 * Required
		 */
		enabled: number;

		/**
		 * Match Type. 0=All reports.
		 * Required
		 */
		match_type: number;

		/**
		 * Rule Name.
		 * Required
		 */
		rule_name: string;
	}
	export interface AutomationsFaxReceiptsPostPostBodyFormProperties {

		/**
		 * Action.
		 * Required
		 */
		action: FormControl<string | null | undefined>,

		/**
		 * Action Address.
		 * Required
		 */
		action_address: FormControl<string | null | undefined>,

		/**
		 * Enabled.
		 * Required
		 */
		enabled: FormControl<number | null | undefined>,

		/**
		 * Match Type. 0=All reports.
		 * Required
		 */
		match_type: FormControl<number | null | undefined>,

		/**
		 * Rule Name.
		 * Required
		 */
		rule_name: FormControl<string | null | undefined>,
	}
	export function CreateAutomationsFaxReceiptsPostPostBodyFormGroup() {
		return new FormGroup<AutomationsFaxReceiptsPostPostBodyFormProperties>({
			action: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			action_address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			enabled: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			match_type: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			rule_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AutomationsFaxReceipts_rule_idPutPutBody {

		/** Action. */
		action?: string | null;

		/** Action Address. */
		action_address?: string | null;

		/** Enabled. */
		enabled?: number | null;

		/** Match Type. 0=All reports. */
		match_type?: number | null;

		/** Rule Name. */
		rule_name?: string | null;
	}
	export interface AutomationsFaxReceipts_rule_idPutPutBodyFormProperties {

		/** Action. */
		action: FormControl<string | null | undefined>,

		/** Action Address. */
		action_address: FormControl<string | null | undefined>,

		/** Enabled. */
		enabled: FormControl<number | null | undefined>,

		/** Match Type. 0=All reports. */
		match_type: FormControl<number | null | undefined>,

		/** Rule Name. */
		rule_name: FormControl<string | null | undefined>,
	}
	export function CreateAutomationsFaxReceipts_rule_idPutPutBodyFormGroup() {
		return new FormGroup<AutomationsFaxReceipts_rule_idPutPutBodyFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			action_address: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<number | null | undefined>(undefined),
			match_type: new FormControl<number | null | undefined>(undefined),
			rule_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AutomationsSmsInboundPostPostBody {

		/**
		 * Action.
		 * Required
		 */
		action: string;

		/**
		 * Action Address.
		 * Required
		 */
		action_address: string;

		/**
		 * Dedicated Number.
		 * Required
		 */
		dedicated_number: number;

		/**
		 * Enabled.
		 * Required
		 */
		enabled: number;

		/**
		 * Message Search Term.
		 * Required
		 */
		message_search_term: string;

		/**
		 * Message Search Type: 0=Any message, 1=starts with, 2=contains, 3=does not contain.
		 * Required
		 */
		message_search_type: number;

		/**
		 * Rule Name.
		 * Required
		 */
		rule_name: string;
	}
	export interface AutomationsSmsInboundPostPostBodyFormProperties {

		/**
		 * Action.
		 * Required
		 */
		action: FormControl<string | null | undefined>,

		/**
		 * Action Address.
		 * Required
		 */
		action_address: FormControl<string | null | undefined>,

		/**
		 * Dedicated Number.
		 * Required
		 */
		dedicated_number: FormControl<number | null | undefined>,

		/**
		 * Enabled.
		 * Required
		 */
		enabled: FormControl<number | null | undefined>,

		/**
		 * Message Search Term.
		 * Required
		 */
		message_search_term: FormControl<string | null | undefined>,

		/**
		 * Message Search Type: 0=Any message, 1=starts with, 2=contains, 3=does not contain.
		 * Required
		 */
		message_search_type: FormControl<number | null | undefined>,

		/**
		 * Rule Name.
		 * Required
		 */
		rule_name: FormControl<string | null | undefined>,
	}
	export function CreateAutomationsSmsInboundPostPostBodyFormGroup() {
		return new FormGroup<AutomationsSmsInboundPostPostBodyFormProperties>({
			action: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			action_address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dedicated_number: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			enabled: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			message_search_term: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message_search_type: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			rule_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AutomationsSmsInbound_inbound_rule_idPutPutBody {

		/**
		 * Action.
		 * Required
		 */
		action: string;

		/**
		 * Action Address.
		 * Required
		 */
		action_address: string;

		/**
		 * Dedicated Number
		 * Required
		 */
		dedicated_number: string;

		/**
		 * Enabled.
		 * Required
		 */
		enabled: number;

		/**
		 * Message Search Term.
		 * Required
		 */
		message_search_term: string;

		/**
		 * Message Search Type: 0=Any message, 1=starts with, 2=contains, 3=does not contain.
		 * Required
		 */
		message_search_type: number;
	}
	export interface AutomationsSmsInbound_inbound_rule_idPutPutBodyFormProperties {

		/**
		 * Action.
		 * Required
		 */
		action: FormControl<string | null | undefined>,

		/**
		 * Action Address.
		 * Required
		 */
		action_address: FormControl<string | null | undefined>,

		/**
		 * Dedicated Number
		 * Required
		 */
		dedicated_number: FormControl<string | null | undefined>,

		/**
		 * Enabled.
		 * Required
		 */
		enabled: FormControl<number | null | undefined>,

		/**
		 * Message Search Term.
		 * Required
		 */
		message_search_term: FormControl<string | null | undefined>,

		/**
		 * Message Search Type: 0=Any message, 1=starts with, 2=contains, 3=does not contain.
		 * Required
		 */
		message_search_type: FormControl<number | null | undefined>,
	}
	export function CreateAutomationsSmsInbound_inbound_rule_idPutPutBodyFormGroup() {
		return new FormGroup<AutomationsSmsInbound_inbound_rule_idPutPutBodyFormProperties>({
			action: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			action_address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dedicated_number: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			enabled: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			message_search_term: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message_search_type: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Delivery_issuesPostPostBody {

		/** The user's comments. */
		client_comments?: string | null;

		/**
		 * The description of the message.
		 * Required
		 */
		description: string;

		/**
		 * The user's email address.
		 * Required
		 */
		email_address: string;

		/**
		 * The message id of the message.
		 * Required
		 */
		message_id: string;

		/**
		 * The type of message, must be one of the following values: `SMS`, `MMS`, `VOICE`, `EMAIL_MARKETING`, `EMAIL_TRANSACTIONAL`, `FAX`, `POST`.
		 * Required
		 */
		type: string;
	}
	export interface Delivery_issuesPostPostBodyFormProperties {

		/** The user's comments. */
		client_comments: FormControl<string | null | undefined>,

		/**
		 * The description of the message.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The user's email address.
		 * Required
		 */
		email_address: FormControl<string | null | undefined>,

		/**
		 * The message id of the message.
		 * Required
		 */
		message_id: FormControl<string | null | undefined>,

		/**
		 * The type of message, must be one of the following values: `SMS`, `MMS`, `VOICE`, `EMAIL_MARKETING`, `EMAIL_TRANSACTIONAL`, `FAX`, `POST`.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateDelivery_issuesPostPostBodyFormGroup() {
		return new FormGroup<Delivery_issuesPostPostBodyFormProperties>({
			client_comments: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			email_address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Email_campaigns_email_campaign_idPutPutBody {

		/** The allowed email address id. */
		from_email_address_id?: number | null;

		/** The name that will appear on the email. */
		from_name?: string | null;

		/** The list id you want to access. */
		list_id?: number | null;

		/** The name of the sender. */
		name?: string | null;

		/** Leave blank for immediate delivery. Will replace existing schedule (even if left blank). Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp). */
		schedule?: number | null;

		/** The subject of the email campaign. */
		subject?: string | null;

		/** The template id you want to use. */
		template_id?: number | null;
	}
	export interface Email_campaigns_email_campaign_idPutPutBodyFormProperties {

		/** The allowed email address id. */
		from_email_address_id: FormControl<number | null | undefined>,

		/** The name that will appear on the email. */
		from_name: FormControl<string | null | undefined>,

		/** The list id you want to access. */
		list_id: FormControl<number | null | undefined>,

		/** The name of the sender. */
		name: FormControl<string | null | undefined>,

		/** Leave blank for immediate delivery. Will replace existing schedule (even if left blank). Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp). */
		schedule: FormControl<number | null | undefined>,

		/** The subject of the email campaign. */
		subject: FormControl<string | null | undefined>,

		/** The template id you want to use. */
		template_id: FormControl<number | null | undefined>,
	}
	export function CreateEmail_campaigns_email_campaign_idPutPutBodyFormGroup() {
		return new FormGroup<Email_campaigns_email_campaign_idPutPutBodyFormProperties>({
			from_email_address_id: new FormControl<number | null | undefined>(undefined),
			from_name: new FormControl<string | null | undefined>(undefined),
			list_id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			schedule: new FormControl<number | null | undefined>(undefined),
			subject: new FormControl<string | null | undefined>(undefined),
			template_id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EmailAddressesPostPostBody {

		/**
		 * {
		 * "email_address" : "test222@user.com"
		 * }
		 */
		Body?: string | null;

		/**
		 * Your email.
		 * Required
		 */
		email_address: string;
	}
	export interface EmailAddressesPostPostBodyFormProperties {

		/**
		 * {
		 * "email_address" : "test222@user.com"
		 * }
		 */
		Body: FormControl<string | null | undefined>,

		/**
		 * Your email.
		 * Required
		 */
		email_address: FormControl<string | null | undefined>,
	}
	export function CreateEmailAddressesPostPostBodyFormGroup() {
		return new FormGroup<EmailAddressesPostPostBodyFormProperties>({
			Body: new FormControl<string | null | undefined>(undefined),
			email_address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EmailPricePostPostBody {

		/**
		 * The attachments of the email. See sample request for more details.
		 * Required
		 */
		attachments: Array<string>;

		/** The bcc of the email. See sample request for more details. */
		bcc?: Array<string>;

		/**
		 * The content of the email.
		 * Required
		 */
		body: string;

		/** The cc of the email. See sample request for more details. */
		cc?: Array<string>;

		/**
		 * The sender's email address id.
		 * Required
		 */
		'from.email_address_id': number;

		/** The sender's name. */
		'from.name'?: string | null;

		/**
		 * The subject of the email.
		 * Required
		 */
		subject: string;

		/**
		 * The recipients of the email. See sample request for more details.
		 * Required
		 */
		to: Array<string>;
	}
	export interface EmailPricePostPostBodyFormProperties {

		/**
		 * The content of the email.
		 * Required
		 */
		body: FormControl<string | null | undefined>,

		/**
		 * The sender's email address id.
		 * Required
		 */
		'from.email_address_id': FormControl<number | null | undefined>,

		/** The sender's name. */
		'from.name': FormControl<string | null | undefined>,

		/**
		 * The subject of the email.
		 * Required
		 */
		subject: FormControl<string | null | undefined>,
	}
	export function CreateEmailPricePostPostBodyFormGroup() {
		return new FormGroup<EmailPricePostPostBodyFormProperties>({
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'from.email_address_id': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'from.name': new FormControl<string | null | undefined>(undefined),
			subject: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EmailSendPostPostBody {

		/** The attachments of the email. */
		attachments?: Array<string>;

		/** The bcc of the email. Follows the same structure as `to`. */
		bcc?: Array<string>;

		/**
		 * The content of the email.
		 * Required
		 */
		body: string;

		/** The cc of the email. Follows the same structure as `to`. */
		cc?: Array<string>;

		/**
		 * The sender's email address ID.
		 * Required
		 */
		'from.email_address_id': number;

		/** The sender's name. */
		'from.name'?: string | null;

		/** Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp). */
		schedule?: number | null;

		/**
		 * The recipients of the email.
		 * Required
		 */
		to: Array<string>;
	}
	export interface EmailSendPostPostBodyFormProperties {

		/**
		 * The content of the email.
		 * Required
		 */
		body: FormControl<string | null | undefined>,

		/**
		 * The sender's email address ID.
		 * Required
		 */
		'from.email_address_id': FormControl<number | null | undefined>,

		/** The sender's name. */
		'from.name': FormControl<string | null | undefined>,

		/** Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp). */
		schedule: FormControl<number | null | undefined>,
	}
	export function CreateEmailSendPostPostBodyFormGroup() {
		return new FormGroup<EmailSendPostPostBodyFormProperties>({
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'from.email_address_id': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'from.name': new FormControl<string | null | undefined>(undefined),
			schedule: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EmailTemplatesPostPostBody {

		/**
		 * The ID of the master template you want to base on.
		 * Required
		 */
		template_id_master: number;

		/**
		 * The intended name for the new template.
		 * Required
		 */
		template_name: string;
	}
	export interface EmailTemplatesPostPostBodyFormProperties {

		/**
		 * The ID of the master template you want to base on.
		 * Required
		 */
		template_id_master: FormControl<number | null | undefined>,

		/**
		 * The intended name for the new template.
		 * Required
		 */
		template_name: FormControl<string | null | undefined>,
	}
	export function CreateEmailTemplatesPostPostBodyFormGroup() {
		return new FormGroup<EmailTemplatesPostPostBodyFormProperties>({
			template_id_master: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			template_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EmailTemplates_images_template_idPostPostBody {

		/** Uploads your selected image file. */
		image?: string | null;

		/** Uploads the image from the supplied URL. */
		url?: string | null;
	}
	export interface EmailTemplates_images_template_idPostPostBodyFormProperties {

		/** Uploads your selected image file. */
		image: FormControl<string | null | undefined>,

		/** Uploads the image from the supplied URL. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateEmailTemplates_images_template_idPostPostBodyFormGroup() {
		return new FormGroup<EmailTemplates_images_template_idPostPostBodyFormProperties>({
			image: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EmailTemplates_template_idPutPutBody {

		/**
		 * Your template body.
		 * Required
		 */
		body: string;

		/**
		 * The intended name for the new template.
		 * Required
		 */
		template_name: string;
	}
	export interface EmailTemplates_template_idPutPutBodyFormProperties {

		/**
		 * Your template body.
		 * Required
		 */
		body: FormControl<string | null | undefined>,

		/**
		 * The intended name for the new template.
		 * Required
		 */
		template_name: FormControl<string | null | undefined>,
	}
	export function CreateEmailTemplates_template_idPutPutBodyFormGroup() {
		return new FormGroup<EmailTemplates_template_idPutPutBodyFormProperties>({
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			template_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FaxReceipts_readPutPutBody {

		/** An optional [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp) - mark all as read before this timestamp. If not given, all receipts will be marked as read. */
		date_before?: number | null;
	}
	export interface FaxReceipts_readPutPutBodyFormProperties {

		/** An optional [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp) - mark all as read before this timestamp. If not given, all receipts will be marked as read. */
		date_before: FormControl<number | null | undefined>,
	}
	export function CreateFaxReceipts_readPutPutBodyFormGroup() {
		return new FormGroup<FaxReceipts_readPutPutBodyFormProperties>({
			date_before: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Forgot_passwordPutPutBody {

		/**
		 * Your username.
		 * Required
		 */
		username: string;
	}
	export interface Forgot_passwordPutPutBodyFormProperties {

		/**
		 * Your username.
		 * Required
		 */
		username: FormControl<string | null | undefined>,
	}
	export function CreateForgot_passwordPutPutBodyFormGroup() {
		return new FormGroup<Forgot_passwordPutPutBodyFormProperties>({
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Forgot_passwordVerifyPutPutBody {

		/**
		 * Your email activation token.
		 * Required
		 */
		activation_token: string;

		/**
		 * Your new password.
		 * Required
		 */
		password: string;

		/**
		 * Your subaccount id.
		 * Required
		 */
		subaccount_id: number;
	}
	export interface Forgot_passwordVerifyPutPutBodyFormProperties {

		/**
		 * Your email activation token.
		 * Required
		 */
		activation_token: FormControl<string | null | undefined>,

		/**
		 * Your new password.
		 * Required
		 */
		password: FormControl<string | null | undefined>,

		/**
		 * Your subaccount id.
		 * Required
		 */
		subaccount_id: FormControl<number | null | undefined>,
	}
	export function CreateForgot_passwordVerifyPutPutBodyFormGroup() {
		return new FormGroup<Forgot_passwordVerifyPutPutBodyFormProperties>({
			activation_token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subaccount_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Forgot_usernamePutPutBody {

		/** Your country. Used to format phone number. This is required if phone_number is not in international-format. */
		country?: string | null;

		/** Your email. This is required if phone_number is not present. */
		email?: string | null;

		/** Your phone number. This is required if email is not present. */
		phone_number?: number | null;
	}
	export interface Forgot_usernamePutPutBodyFormProperties {

		/** Your country. Used to format phone number. This is required if phone_number is not in international-format. */
		country: FormControl<string | null | undefined>,

		/** Your email. This is required if phone_number is not present. */
		email: FormControl<string | null | undefined>,

		/** Your phone number. This is required if email is not present. */
		phone_number: FormControl<number | null | undefined>,
	}
	export function CreateForgot_usernamePutPutBodyFormGroup() {
		return new FormGroup<Forgot_usernamePutPutBodyFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			phone_number: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListsPostPostBody {

		/**
		 * Your contact list name.
		 * Required
		 */
		list_name: string;
	}
	export interface ListsPostPostBodyFormProperties {

		/**
		 * Your contact list name.
		 * Required
		 */
		list_name: FormControl<string | null | undefined>,
	}
	export function CreateListsPostPostBodyFormGroup() {
		return new FormGroup<ListsPostPostBodyFormProperties>({
			list_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Lists_list_idPutPutBody {

		/** Your new contact list name. */
		list_name?: string | null;
	}
	export interface Lists_list_idPutPutBodyFormProperties {

		/** Your new contact list name. */
		list_name: FormControl<string | null | undefined>,
	}
	export function CreateLists_list_idPutPutBodyFormGroup() {
		return new FormGroup<Lists_list_idPutPutBodyFormProperties>({
			list_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Lists_list_idContactsPostPostBody {

		/** Contact city. */
		address_city?: string | null;

		/** Contact two-letter country code defined in ISO 3166. */
		address_country?: string | null;

		/** Contact address line 1. */
		address_line_1?: string | null;

		/** Contact address line 2. */
		address_line_2?: string | null;

		/** Contact postal code. */
		address_postal_code?: string | null;

		/** Contact state. */
		address_state?: string | null;

		/** Contact custom 1 text. */
		custom_1?: string | null;

		/** Contact custom 2 text. */
		custom_2?: string | null;

		/** Contact custom 3 text. */
		custom_3?: string | null;

		/** Contact custom 4 text. */
		custom_4?: string | null;

		/** Contact email. */
		email?: string | null;

		/** Contact fax number. */
		fax_number?: string | null;

		/** Contact firstname. */
		first_name?: string | null;

		/** Contact lastname. */
		last_name?: string | null;

		/** Your organization name. */
		organization_name?: string | null;

		/**
		 * Contact phone number in E.164 format.
		 * Required
		 */
		phone_number: string;
	}
	export interface Lists_list_idContactsPostPostBodyFormProperties {

		/** Contact city. */
		address_city: FormControl<string | null | undefined>,

		/** Contact two-letter country code defined in ISO 3166. */
		address_country: FormControl<string | null | undefined>,

		/** Contact address line 1. */
		address_line_1: FormControl<string | null | undefined>,

		/** Contact address line 2. */
		address_line_2: FormControl<string | null | undefined>,

		/** Contact postal code. */
		address_postal_code: FormControl<string | null | undefined>,

		/** Contact state. */
		address_state: FormControl<string | null | undefined>,

		/** Contact custom 1 text. */
		custom_1: FormControl<string | null | undefined>,

		/** Contact custom 2 text. */
		custom_2: FormControl<string | null | undefined>,

		/** Contact custom 3 text. */
		custom_3: FormControl<string | null | undefined>,

		/** Contact custom 4 text. */
		custom_4: FormControl<string | null | undefined>,

		/** Contact email. */
		email: FormControl<string | null | undefined>,

		/** Contact fax number. */
		fax_number: FormControl<string | null | undefined>,

		/** Contact firstname. */
		first_name: FormControl<string | null | undefined>,

		/** Contact lastname. */
		last_name: FormControl<string | null | undefined>,

		/** Your organization name. */
		organization_name: FormControl<string | null | undefined>,

		/**
		 * Contact phone number in E.164 format.
		 * Required
		 */
		phone_number: FormControl<string | null | undefined>,
	}
	export function CreateLists_list_idContactsPostPostBodyFormGroup() {
		return new FormGroup<Lists_list_idContactsPostPostBodyFormProperties>({
			address_city: new FormControl<string | null | undefined>(undefined),
			address_country: new FormControl<string | null | undefined>(undefined),
			address_line_1: new FormControl<string | null | undefined>(undefined),
			address_line_2: new FormControl<string | null | undefined>(undefined),
			address_postal_code: new FormControl<string | null | undefined>(undefined),
			address_state: new FormControl<string | null | undefined>(undefined),
			custom_1: new FormControl<string | null | undefined>(undefined),
			custom_2: new FormControl<string | null | undefined>(undefined),
			custom_3: new FormControl<string | null | undefined>(undefined),
			custom_4: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			fax_number: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			organization_name: new FormControl<string | null | undefined>(undefined),
			phone_number: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Lists_list_idContacts_contact_idPutPutBody {

		/** Contact city. */
		address_city?: string | null;

		/** Contact two-letter country code defined in ISO 3166. */
		address_country?: string | null;

		/** Contact address line 1. */
		address_line_1?: string | null;

		/** Contact address line 2. */
		address_line_2?: string | null;

		/** Contact postal code. */
		address_postal_code?: string | null;

		/** Contact state. */
		address_state?: string | null;

		/** Contact custom 1 text. */
		custom_1?: string | null;

		/** Contact custom 2 text. */
		custom_2?: string | null;

		/** Contact custom 3 text. */
		custom_3?: string | null;

		/** Contact custom 4 text. */
		custom_4?: string | null;

		/** Contact email. */
		email?: string | null;

		/** Contact fax number. */
		fax_number?: string | null;

		/** Contact firstname. */
		first_name?: string | null;

		/** Contact lastname. */
		last_name?: string | null;

		/** Contact organization name. */
		organization_name?: string | null;

		/** Contact phone number in E.164 format. */
		phone_number?: string | null;
	}
	export interface Lists_list_idContacts_contact_idPutPutBodyFormProperties {

		/** Contact city. */
		address_city: FormControl<string | null | undefined>,

		/** Contact two-letter country code defined in ISO 3166. */
		address_country: FormControl<string | null | undefined>,

		/** Contact address line 1. */
		address_line_1: FormControl<string | null | undefined>,

		/** Contact address line 2. */
		address_line_2: FormControl<string | null | undefined>,

		/** Contact postal code. */
		address_postal_code: FormControl<string | null | undefined>,

		/** Contact state. */
		address_state: FormControl<string | null | undefined>,

		/** Contact custom 1 text. */
		custom_1: FormControl<string | null | undefined>,

		/** Contact custom 2 text. */
		custom_2: FormControl<string | null | undefined>,

		/** Contact custom 3 text. */
		custom_3: FormControl<string | null | undefined>,

		/** Contact custom 4 text. */
		custom_4: FormControl<string | null | undefined>,

		/** Contact email. */
		email: FormControl<string | null | undefined>,

		/** Contact fax number. */
		fax_number: FormControl<string | null | undefined>,

		/** Contact firstname. */
		first_name: FormControl<string | null | undefined>,

		/** Contact lastname. */
		last_name: FormControl<string | null | undefined>,

		/** Contact organization name. */
		organization_name: FormControl<string | null | undefined>,

		/** Contact phone number in E.164 format. */
		phone_number: FormControl<string | null | undefined>,
	}
	export function CreateLists_list_idContacts_contact_idPutPutBodyFormGroup() {
		return new FormGroup<Lists_list_idContacts_contact_idPutPutBodyFormProperties>({
			address_city: new FormControl<string | null | undefined>(undefined),
			address_country: new FormControl<string | null | undefined>(undefined),
			address_line_1: new FormControl<string | null | undefined>(undefined),
			address_line_2: new FormControl<string | null | undefined>(undefined),
			address_postal_code: new FormControl<string | null | undefined>(undefined),
			address_state: new FormControl<string | null | undefined>(undefined),
			custom_1: new FormControl<string | null | undefined>(undefined),
			custom_2: new FormControl<string | null | undefined>(undefined),
			custom_3: new FormControl<string | null | undefined>(undefined),
			custom_4: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			fax_number: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			organization_name: new FormControl<string | null | undefined>(undefined),
			phone_number: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Lists_list_idImportPostPostBody {

		/**
		 * Your field order for your contact import file.
		 * Required
		 */
		field_order: Array<string>;

		/**
		 * Path to your CSV import file.
		 * Required
		 */
		file_url: string;
	}
	export interface Lists_list_idImportPostPostBodyFormProperties {

		/**
		 * Path to your CSV import file.
		 * Required
		 */
		file_url: FormControl<string | null | undefined>,
	}
	export function CreateLists_list_idImportPostPostBodyFormGroup() {
		return new FormGroup<Lists_list_idImportPostPostBodyFormProperties>({
			file_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Lists_list_idImport_csv_previewPostPostBody {

		/**
		 * Path to your CSV import file.
		 * Required
		 */
		file_url: string;
	}
	export interface Lists_list_idImport_csv_previewPostPostBodyFormProperties {

		/**
		 * Path to your CSV import file.
		 * Required
		 */
		file_url: FormControl<string | null | undefined>,
	}
	export function CreateLists_list_idImport_csv_previewPostPostBodyFormGroup() {
		return new FormGroup<Lists_list_idImport_csv_previewPostPostBodyFormProperties>({
			file_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Lists_list_idRemove_duplicatesPutPutBody {

		/**
		 * List of Contact's fields to be used for checking.
		 * Required
		 */
		fields: Array<string>;
	}
	export interface Lists_list_idRemove_duplicatesPutPutBodyFormProperties {
	}
	export function CreateLists_list_idRemove_duplicatesPutPutBodyFormGroup() {
		return new FormGroup<Lists_list_idRemove_duplicatesPutPutBodyFormProperties>({
		});

	}

	export interface MmsPricePostPostBody {

		/**
		 * Your message.
		 * Required
		 */
		body: string;

		/** Recipient country. */
		country?: string | null;

		/** Your reference. Will be passed back with all replies and delivery reports. */
		custom_string?: string | null;

		/** Your sender id - [more info](http://help.clicksend.com/SMS/what-is-a-sender-id-or-sender-number). */
		from?: string | null;

		/** An email address where the reply should be emailed to. If omitted, the reply will be emailed back to the user who sent the outgoing SMS. */
		from_email?: string | null;

		/** Your list ID if sending to a whole list. Can be used instead of 'to'. */
		list_id?: number | null;

		/**
		 * Media file you want to send.
		 * Required
		 */
		media_file: string;

		/** Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp). */
		schedule?: number | null;

		/** Your method of sending e.g. 'wordpress', 'php', 'c#'. */
		source?: string | null;

		/**
		 * Subject line. Maximum 20 characters.
		 * Required
		 */
		subject: string;

		/**
		 * Recipient number in E.164 format or local format ([more info](https://help.clicksend.com/SMS/what-format-does-the-recipient-phone-number-need-to-be-in)).
		 * Required
		 */
		to: string;
	}
	export interface MmsPricePostPostBodyFormProperties {

		/**
		 * Your message.
		 * Required
		 */
		body: FormControl<string | null | undefined>,

		/** Recipient country. */
		country: FormControl<string | null | undefined>,

		/** Your reference. Will be passed back with all replies and delivery reports. */
		custom_string: FormControl<string | null | undefined>,

		/** Your sender id - [more info](http://help.clicksend.com/SMS/what-is-a-sender-id-or-sender-number). */
		from: FormControl<string | null | undefined>,

		/** An email address where the reply should be emailed to. If omitted, the reply will be emailed back to the user who sent the outgoing SMS. */
		from_email: FormControl<string | null | undefined>,

		/** Your list ID if sending to a whole list. Can be used instead of 'to'. */
		list_id: FormControl<number | null | undefined>,

		/**
		 * Media file you want to send.
		 * Required
		 */
		media_file: FormControl<string | null | undefined>,

		/** Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp). */
		schedule: FormControl<number | null | undefined>,

		/** Your method of sending e.g. 'wordpress', 'php', 'c#'. */
		source: FormControl<string | null | undefined>,

		/**
		 * Subject line. Maximum 20 characters.
		 * Required
		 */
		subject: FormControl<string | null | undefined>,

		/**
		 * Recipient number in E.164 format or local format ([more info](https://help.clicksend.com/SMS/what-format-does-the-recipient-phone-number-need-to-be-in)).
		 * Required
		 */
		to: FormControl<string | null | undefined>,
	}
	export function CreateMmsPricePostPostBodyFormGroup() {
		return new FormGroup<MmsPricePostPostBodyFormProperties>({
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined),
			custom_string: new FormControl<string | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			from_email: new FormControl<string | null | undefined>(undefined),
			list_id: new FormControl<number | null | undefined>(undefined),
			media_file: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			schedule: new FormControl<number | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			subject: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			to: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MmsSendPostPostBody {

		/**
		 * Your message.
		 * Required
		 */
		body: string;

		/** Recipient country. */
		country?: string | null;

		/** Your reference. Will be passed back with all replies and delivery reports. */
		custom_string?: string | null;

		/** The number to send from. Either leave blank or use a ClickSend number only. */
		from?: string | null;

		/** An email address where the reply should be emailed to. If omitted, the reply will be emailed back to the user who sent the outgoing SMS. */
		from_email?: string | null;

		/** Your list ID if sending to a whole list. Can be used instead of 'to'. */
		list_id?: number | null;

		/**
		 * Media file you want to send.
		 * Required
		 */
		media_file: string;

		/** Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp). */
		schedule?: number | null;

		/** Your method of sending e.g. 'wordpress', 'php', 'c#'. */
		source?: string | null;

		/**
		 * Subject line. Maximum 20 characters.
		 * Required
		 */
		subject: string;

		/**
		 * Recipient number in E.164 format or local format ([more info](https://help.clicksend.com/SMS/what-format-does-the-recipient-phone-number-need-to-be-in)).
		 * Required
		 */
		to: string;
	}
	export interface MmsSendPostPostBodyFormProperties {

		/**
		 * Your message.
		 * Required
		 */
		body: FormControl<string | null | undefined>,

		/** Recipient country. */
		country: FormControl<string | null | undefined>,

		/** Your reference. Will be passed back with all replies and delivery reports. */
		custom_string: FormControl<string | null | undefined>,

		/** The number to send from. Either leave blank or use a ClickSend number only. */
		from: FormControl<string | null | undefined>,

		/** An email address where the reply should be emailed to. If omitted, the reply will be emailed back to the user who sent the outgoing SMS. */
		from_email: FormControl<string | null | undefined>,

		/** Your list ID if sending to a whole list. Can be used instead of 'to'. */
		list_id: FormControl<number | null | undefined>,

		/**
		 * Media file you want to send.
		 * Required
		 */
		media_file: FormControl<string | null | undefined>,

		/** Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp). */
		schedule: FormControl<number | null | undefined>,

		/** Your method of sending e.g. 'wordpress', 'php', 'c#'. */
		source: FormControl<string | null | undefined>,

		/**
		 * Subject line. Maximum 20 characters.
		 * Required
		 */
		subject: FormControl<string | null | undefined>,

		/**
		 * Recipient number in E.164 format or local format ([more info](https://help.clicksend.com/SMS/what-format-does-the-recipient-phone-number-need-to-be-in)).
		 * Required
		 */
		to: FormControl<string | null | undefined>,
	}
	export function CreateMmsSendPostPostBodyFormGroup() {
		return new FormGroup<MmsSendPostPostBodyFormProperties>({
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined),
			custom_string: new FormControl<string | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			from_email: new FormControl<string | null | undefined>(undefined),
			list_id: new FormControl<number | null | undefined>(undefined),
			media_file: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			schedule: new FormControl<number | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			subject: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			to: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PostDirect_mailCampaignsPricePostPostBody {

		/** List of location where you want to send your campaign, and the quantity per location. */
		areas?: Array<string>;

		/**
		 * Campaign file urls. You can submit max 2 file urls.
		 * Required
		 */
		file_urls: Array<string>;

		/**
		 * Campaign name.
		 * Required
		 */
		name: string;

		/** Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp). */
		schedule?: number | null;

		/**
		 * Campaign file size. It can be A5 or DL.
		 * Required
		 */
		size: string;

		/** Your method of sending e.g. 'wordpress', 'php', 'c#'. */
		source?: string | null;
	}
	export interface PostDirect_mailCampaignsPricePostPostBodyFormProperties {

		/**
		 * Campaign name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp). */
		schedule: FormControl<number | null | undefined>,

		/**
		 * Campaign file size. It can be A5 or DL.
		 * Required
		 */
		size: FormControl<string | null | undefined>,

		/** Your method of sending e.g. 'wordpress', 'php', 'c#'. */
		source: FormControl<string | null | undefined>,
	}
	export function CreatePostDirect_mailCampaignsPricePostPostBodyFormGroup() {
		return new FormGroup<PostDirect_mailCampaignsPricePostPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			schedule: new FormControl<number | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			source: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PostDirect_mailCampaignsSendPostPostBody {

		/** List of location where you want to send your campaign, and the quantity per location. */
		areas?: Array<string>;

		/**
		 * Campaign file urls. You can submit max 2 file urls.
		 * Required
		 */
		file_urls: Array<string>;

		/**
		 * Campaign name.
		 * Required
		 */
		name: string;

		/** Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp). */
		schedule?: number | null;

		/**
		 * Campaign file size. It can be A5 or DL.
		 * Required
		 */
		size: string;

		/** Your method of sending e.g. 'wordpress', 'php', 'c#'. */
		source?: string | null;
	}
	export interface PostDirect_mailCampaignsSendPostPostBodyFormProperties {

		/**
		 * Campaign name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp). */
		schedule: FormControl<number | null | undefined>,

		/**
		 * Campaign file size. It can be A5 or DL.
		 * Required
		 */
		size: FormControl<string | null | undefined>,

		/** Your method of sending e.g. 'wordpress', 'php', 'c#'. */
		source: FormControl<string | null | undefined>,
	}
	export function CreatePostDirect_mailCampaignsSendPostPostBodyFormGroup() {
		return new FormGroup<PostDirect_mailCampaignsSendPostPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			schedule: new FormControl<number | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			source: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PostLettersDetect_addressPostPostBody {

		/**
		 * Your file contents encoded in `base64`.
		 * Required
		 */
		content: string;
	}
	export interface PostLettersDetect_addressPostPostBodyFormProperties {

		/**
		 * Your file contents encoded in `base64`.
		 * Required
		 */
		content: FormControl<string | null | undefined>,
	}
	export function CreatePostLettersDetect_addressPostPostBodyFormGroup() {
		return new FormGroup<PostLettersDetect_addressPostPostBodyFormProperties>({
			content: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PostLettersPricePostPostBody {

		/** Is it in colored? */
		colour?: number | null;

		/** Is it in duplex? */
		duplex?: number | null;

		/**
		 * Your URL to your PDF file.
		 * Required
		 */
		file_url: string;

		/** Is it priority? 0 = Not Priority, 1 = Priority. */
		priority_post?: number | null;

		/** Your recipients. */
		recipients?: Array<string>;

		/** Whether you used our template or not ([More Info](http://help.clicksend.com/13996-Post/post-letter-template)). */
		template_used?: number | null;
	}
	export interface PostLettersPricePostPostBodyFormProperties {

		/** Is it in colored? */
		colour: FormControl<number | null | undefined>,

		/** Is it in duplex? */
		duplex: FormControl<number | null | undefined>,

		/**
		 * Your URL to your PDF file.
		 * Required
		 */
		file_url: FormControl<string | null | undefined>,

		/** Is it priority? 0 = Not Priority, 1 = Priority. */
		priority_post: FormControl<number | null | undefined>,

		/** Whether you used our template or not ([More Info](http://help.clicksend.com/13996-Post/post-letter-template)). */
		template_used: FormControl<number | null | undefined>,
	}
	export function CreatePostLettersPricePostPostBodyFormGroup() {
		return new FormGroup<PostLettersPricePostPostBodyFormProperties>({
			colour: new FormControl<number | null | undefined>(undefined),
			duplex: new FormControl<number | null | undefined>(undefined),
			file_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			priority_post: new FormControl<number | null | undefined>(undefined),
			template_used: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PostLettersSendPostPostBody {

		/** Is it in colour? 0 = Black and White, 1 = Colour. */
		colour?: number | null;

		/** Is it in duplex? 0 = Simplex, 1 = Duplex. */
		duplex?: number | null;

		/**
		 * Your URL to your PDF file.
		 * Required
		 */
		file_url: string;

		/** Is it priority? 0 = Not Priority, 1 = Priority. */
		priority_post?: number | null;

		/** Your recipients. */
		recipients?: Array<string>;

		/** Whether you used our template or not ([More Info](http://help.clicksend.com/13996-Post/post-letter-template)). */
		template_used?: number | null;
	}
	export interface PostLettersSendPostPostBodyFormProperties {

		/** Is it in colour? 0 = Black and White, 1 = Colour. */
		colour: FormControl<number | null | undefined>,

		/** Is it in duplex? 0 = Simplex, 1 = Duplex. */
		duplex: FormControl<number | null | undefined>,

		/**
		 * Your URL to your PDF file.
		 * Required
		 */
		file_url: FormControl<string | null | undefined>,

		/** Is it priority? 0 = Not Priority, 1 = Priority. */
		priority_post: FormControl<number | null | undefined>,

		/** Whether you used our template or not ([More Info](http://help.clicksend.com/13996-Post/post-letter-template)). */
		template_used: FormControl<number | null | undefined>,
	}
	export function CreatePostLettersSendPostPostBodyFormGroup() {
		return new FormGroup<PostLettersSendPostPostBodyFormProperties>({
			colour: new FormControl<number | null | undefined>(undefined),
			duplex: new FormControl<number | null | undefined>(undefined),
			file_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			priority_post: new FormControl<number | null | undefined>(undefined),
			template_used: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PostPostcardsPricePostPostBody {

		/**
		 * Postcard file urls. You can submit max 2 file urls.
		 * Required
		 */
		file_urls: Array<string>;

		/**
		 * Your recipients.
		 * Required
		 */
		recipients: Array<string>;
	}
	export interface PostPostcardsPricePostPostBodyFormProperties {
	}
	export function CreatePostPostcardsPricePostPostBodyFormGroup() {
		return new FormGroup<PostPostcardsPricePostPostBodyFormProperties>({
		});

	}

	export interface PostPostcardsSendPostPostBody {

		/**
		 * Postcard file urls. You can submit max 2 file urls.
		 * Required
		 */
		file_urls: Array<string>;

		/**
		 * Your recipients.
		 * Required
		 */
		recipients: Array<string>;
	}
	export interface PostPostcardsSendPostPostBodyFormProperties {
	}
	export function CreatePostPostcardsSendPostPostBodyFormGroup() {
		return new FormGroup<PostPostcardsSendPostPostBodyFormProperties>({
		});

	}

	export interface RechargeCredit_cardPutPutBody {

		/**
		 * Your bank's name that issued the credit card.
		 * Required
		 */
		bank_name: string;

		/**
		 * Your CVC digits.
		 * Required
		 */
		cvc: number;

		/**
		 * Your credit card expiry month.
		 * Required
		 */
		expiry_month: number;

		/** Your credit card expiry year. */
		expiry_year?: number | null;

		/**
		 * Your name.
		 * Required
		 */
		name: string;

		/** Your credit card no. */
		number?: number | null;
	}
	export interface RechargeCredit_cardPutPutBodyFormProperties {

		/**
		 * Your bank's name that issued the credit card.
		 * Required
		 */
		bank_name: FormControl<string | null | undefined>,

		/**
		 * Your CVC digits.
		 * Required
		 */
		cvc: FormControl<number | null | undefined>,

		/**
		 * Your credit card expiry month.
		 * Required
		 */
		expiry_month: FormControl<number | null | undefined>,

		/** Your credit card expiry year. */
		expiry_year: FormControl<number | null | undefined>,

		/**
		 * Your name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Your credit card no. */
		number: FormControl<number | null | undefined>,
	}
	export function CreateRechargeCredit_cardPutPutBodyFormGroup() {
		return new FormGroup<RechargeCredit_cardPutPutBodyFormProperties>({
			bank_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			cvc: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			expiry_month: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			expiry_year: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			number: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ResellerPutPutBody {

		/**
		 * Allow public signups.
		 * Required
		 */
		allow_public_signups: number;

		/**
		 * Colour navigation.
		 * Required
		 */
		colour_navigation: string;

		/**
		 * Company name.
		 * Required
		 */
		company_name: string;

		/**
		 * Default margin.
		 * Required
		 */
		default_margin: number;

		/**
		 * Default margin numbers.
		 * Required
		 */
		default_margin_numbers: number;

		/**
		 * Logo URL (dark)
		 * Required
		 */
		logo_url_dark: string;

		/**
		 * Logo URL (light)
		 * Required
		 */
		logo_url_light: string;

		/**
		 * Subdomain.
		 * Required
		 */
		subdomain: string;

		/**
		 * Trial balance.
		 * Required
		 */
		trial_balance: number;
	}
	export interface ResellerPutPutBodyFormProperties {

		/**
		 * Allow public signups.
		 * Required
		 */
		allow_public_signups: FormControl<number | null | undefined>,

		/**
		 * Colour navigation.
		 * Required
		 */
		colour_navigation: FormControl<string | null | undefined>,

		/**
		 * Company name.
		 * Required
		 */
		company_name: FormControl<string | null | undefined>,

		/**
		 * Default margin.
		 * Required
		 */
		default_margin: FormControl<number | null | undefined>,

		/**
		 * Default margin numbers.
		 * Required
		 */
		default_margin_numbers: FormControl<number | null | undefined>,

		/**
		 * Logo URL (dark)
		 * Required
		 */
		logo_url_dark: FormControl<string | null | undefined>,

		/**
		 * Logo URL (light)
		 * Required
		 */
		logo_url_light: FormControl<string | null | undefined>,

		/**
		 * Subdomain.
		 * Required
		 */
		subdomain: FormControl<string | null | undefined>,

		/**
		 * Trial balance.
		 * Required
		 */
		trial_balance: FormControl<number | null | undefined>,
	}
	export function CreateResellerPutPutBodyFormGroup() {
		return new FormGroup<ResellerPutPutBodyFormProperties>({
			allow_public_signups: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			colour_navigation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			company_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			default_margin: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			default_margin_numbers: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			logo_url_dark: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			logo_url_light: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subdomain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			trial_balance: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResellerAccounts_publicPostPostBody {

		/**
		 * Your delivery to value.
		 * Required
		 */
		account_name: string;

		/**
		 * Client country.
		 * Required
		 */
		country: string;

		/**
		 * Your password.
		 * Required
		 */
		password: string;

		/**
		 * Reseller User ID.
		 * Required
		 */
		reseller_user_id: number;

		/**
		 * Your email.
		 * Required
		 */
		user_email: string;

		/**
		 * Your first name.
		 * Required
		 */
		user_first_name: string;

		/**
		 * Your last name.
		 * Required
		 */
		user_last_name: string;

		/**
		 * Your phone number in E.164 format.
		 * Required
		 */
		user_phone: string;

		/**
		 * Your username.
		 * Required
		 */
		username: string;
	}
	export interface ResellerAccounts_publicPostPostBodyFormProperties {

		/**
		 * Your delivery to value.
		 * Required
		 */
		account_name: FormControl<string | null | undefined>,

		/**
		 * Client country.
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * Your password.
		 * Required
		 */
		password: FormControl<string | null | undefined>,

		/**
		 * Reseller User ID.
		 * Required
		 */
		reseller_user_id: FormControl<number | null | undefined>,

		/**
		 * Your email.
		 * Required
		 */
		user_email: FormControl<string | null | undefined>,

		/**
		 * Your first name.
		 * Required
		 */
		user_first_name: FormControl<string | null | undefined>,

		/**
		 * Your last name.
		 * Required
		 */
		user_last_name: FormControl<string | null | undefined>,

		/**
		 * Your phone number in E.164 format.
		 * Required
		 */
		user_phone: FormControl<string | null | undefined>,

		/**
		 * Your username.
		 * Required
		 */
		username: FormControl<string | null | undefined>,
	}
	export function CreateResellerAccounts_publicPostPostBodyFormGroup() {
		return new FormGroup<ResellerAccounts_publicPostPostBodyFormProperties>({
			account_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reseller_user_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			user_email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			user_first_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			user_last_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			user_phone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResellerTransfer_creditPutPutBody {

		/**
		 * Your amount.
		 * Required
		 */
		balance: number;

		/**
		 * Your client user id.
		 * Required
		 */
		client_user_id: string;

		/**
		 * Your currency.
		 * Required
		 */
		currency: string;
	}
	export interface ResellerTransfer_creditPutPutBodyFormProperties {

		/**
		 * Your amount.
		 * Required
		 */
		balance: FormControl<number | null | undefined>,

		/**
		 * Your client user id.
		 * Required
		 */
		client_user_id: FormControl<string | null | undefined>,

		/**
		 * Your currency.
		 * Required
		 */
		currency: FormControl<string | null | undefined>,
	}
	export function CreateResellerTransfer_creditPutPutBodyFormGroup() {
		return new FormGroup<ResellerTransfer_creditPutPutBodyFormProperties>({
			balance: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			client_user_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			currency: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Sms_campaignsPricePostPostBody {

		/**
		 * Your campaign message.
		 * Required
		 */
		body: string;

		/** Your sender id - [more info](http://help.clicksend.com/SMS/what-is-a-sender-id-or-sender-number). */
		from?: string | null;

		/**
		 * Your list id.
		 * Required
		 */
		list_id: number;

		/**
		 * Your campaign name.
		 * Required
		 */
		name: string;
	}
	export interface Sms_campaignsPricePostPostBodyFormProperties {

		/**
		 * Your campaign message.
		 * Required
		 */
		body: FormControl<string | null | undefined>,

		/** Your sender id - [more info](http://help.clicksend.com/SMS/what-is-a-sender-id-or-sender-number). */
		from: FormControl<string | null | undefined>,

		/**
		 * Your list id.
		 * Required
		 */
		list_id: FormControl<number | null | undefined>,

		/**
		 * Your campaign name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateSms_campaignsPricePostPostBodyFormGroup() {
		return new FormGroup<Sms_campaignsPricePostPostBodyFormProperties>({
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			from: new FormControl<string | null | undefined>(undefined),
			list_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Sms_campaignsSendPostPostBody {

		/**
		 * Your campaign message.
		 * Required
		 */
		body: string;

		/** Your sender id - [more info](http://help.clicksend.com/SMS/what-is-a-sender-id-or-sender-number). */
		from?: string | null;

		/**
		 * Your list id.
		 * Required
		 */
		list_id: number;

		/**
		 * Your campaign name.
		 * Required
		 */
		name: string;

		/** Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp). */
		schedule?: number | null;

		/**
		 * The URL you want to shorten (only required when using this feature). This must be only `http` or `https`.
		 * Required
		 */
		url_to_shorten: string;
	}
	export interface Sms_campaignsSendPostPostBodyFormProperties {

		/**
		 * Your campaign message.
		 * Required
		 */
		body: FormControl<string | null | undefined>,

		/** Your sender id - [more info](http://help.clicksend.com/SMS/what-is-a-sender-id-or-sender-number). */
		from: FormControl<string | null | undefined>,

		/**
		 * Your list id.
		 * Required
		 */
		list_id: FormControl<number | null | undefined>,

		/**
		 * Your campaign name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp). */
		schedule: FormControl<number | null | undefined>,

		/**
		 * The URL you want to shorten (only required when using this feature). This must be only `http` or `https`.
		 * Required
		 */
		url_to_shorten: FormControl<string | null | undefined>,
	}
	export function CreateSms_campaignsSendPostPostBodyFormGroup() {
		return new FormGroup<Sms_campaignsSendPostPostBodyFormProperties>({
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			from: new FormControl<string | null | undefined>(undefined),
			list_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			schedule: new FormControl<number | null | undefined>(undefined),
			url_to_shorten: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Sms_campaigns_sms_campaign_idPutPutBody {

		/**
		 * Your campaign message.
		 * Required
		 */
		body: string;

		/** Your sender id - [more info](http://help.clicksend.com/SMS/what-is-a-sender-id-or-sender-number). */
		from?: string | null;

		/**
		 * Your list id.
		 * Required
		 */
		list_id: number;

		/**
		 * Your campaign name.
		 * Required
		 */
		name: string;

		/** Leave blank for immediate delivery. Will replace existing schedule (even if left blank). Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp). */
		schedule?: number | null;
	}
	export interface Sms_campaigns_sms_campaign_idPutPutBodyFormProperties {

		/**
		 * Your campaign message.
		 * Required
		 */
		body: FormControl<string | null | undefined>,

		/** Your sender id - [more info](http://help.clicksend.com/SMS/what-is-a-sender-id-or-sender-number). */
		from: FormControl<string | null | undefined>,

		/**
		 * Your list id.
		 * Required
		 */
		list_id: FormControl<number | null | undefined>,

		/**
		 * Your campaign name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Leave blank for immediate delivery. Will replace existing schedule (even if left blank). Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp). */
		schedule: FormControl<number | null | undefined>,
	}
	export function CreateSms_campaigns_sms_campaign_idPutPutBodyFormGroup() {
		return new FormGroup<Sms_campaigns_sms_campaign_idPutPutBodyFormProperties>({
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			from: new FormControl<string | null | undefined>(undefined),
			list_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			schedule: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SmsEmail_smsPostPostBody {

		/**
		 * Your email address.
		 * Required
		 */
		email_address: string;

		/** Your sender id - [more info](http://help.clicksend.com/SMS/what-is-a-sender-id-or-sender-number). */
		from?: string | null;
	}
	export interface SmsEmail_smsPostPostBodyFormProperties {

		/**
		 * Your email address.
		 * Required
		 */
		email_address: FormControl<string | null | undefined>,

		/** Your sender id - [more info](http://help.clicksend.com/SMS/what-is-a-sender-id-or-sender-number). */
		from: FormControl<string | null | undefined>,
	}
	export function CreateSmsEmail_smsPostPostBodyFormGroup() {
		return new FormGroup<SmsEmail_smsPostPostBodyFormProperties>({
			email_address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			from: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SmsEmail_sms_stripped_stringsPostPostBody {

		/**
		 * The string that you want to strip from the body of email.
		 * Required
		 */
		strip_string: string;
	}
	export interface SmsEmail_sms_stripped_stringsPostPostBodyFormProperties {

		/**
		 * The string that you want to strip from the body of email.
		 * Required
		 */
		strip_string: FormControl<string | null | undefined>,
	}
	export function CreateSmsEmail_sms_stripped_stringsPostPostBodyFormGroup() {
		return new FormGroup<SmsEmail_sms_stripped_stringsPostPostBodyFormProperties>({
			strip_string: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SmsEmail_sms_stripped_strings_rule_idPutPutBody {

		/** The string that you want to strip from the body of email. */
		strip_string?: string | null;
	}
	export interface SmsEmail_sms_stripped_strings_rule_idPutPutBodyFormProperties {

		/** The string that you want to strip from the body of email. */
		strip_string: FormControl<string | null | undefined>,
	}
	export function CreateSmsEmail_sms_stripped_strings_rule_idPutPutBodyFormGroup() {
		return new FormGroup<SmsEmail_sms_stripped_strings_rule_idPutPutBodyFormProperties>({
			strip_string: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SmsEmail_sms_email_address_idPutPutBody {

		/**
		 * Your email address.
		 * Required
		 */
		email_address: string;

		/** Your sender id - [more info](http://help.clicksend.com/SMS/what-is-a-sender-id-or-sender-number). */
		from?: string | null;
	}
	export interface SmsEmail_sms_email_address_idPutPutBodyFormProperties {

		/**
		 * Your email address.
		 * Required
		 */
		email_address: FormControl<string | null | undefined>,

		/** Your sender id - [more info](http://help.clicksend.com/SMS/what-is-a-sender-id-or-sender-number). */
		from: FormControl<string | null | undefined>,
	}
	export function CreateSmsEmail_sms_email_address_idPutPutBodyFormGroup() {
		return new FormGroup<SmsEmail_sms_email_address_idPutPutBodyFormProperties>({
			email_address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			from: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SmsInbound_readPutPutBody {

		/**
		 * An optional timestamp - mark all as read before this timestamp. If not given, all messages will be marked as read.
		 * Required
		 */
		date_before: number;
	}
	export interface SmsInbound_readPutPutBodyFormProperties {

		/**
		 * An optional timestamp - mark all as read before this timestamp. If not given, all messages will be marked as read.
		 * Required
		 */
		date_before: FormControl<number | null | undefined>,
	}
	export function CreateSmsInbound_readPutPutBodyFormGroup() {
		return new FormGroup<SmsInbound_readPutPutBodyFormProperties>({
			date_before: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SmsPricePostPostBody {

		/**
		 * Your message.
		 * Required
		 */
		body: string;

		/** Recipient country. */
		country?: string | null;

		/** Your reference. Will be passed back with all replies and delivery reports. */
		custom_string?: string | null;

		/** Your sender id - [more info](http://help.clicksend.com/SMS/what-is-a-sender-id-or-sender-number). */
		from?: string | null;

		/** Your list ID if sending to a whole list. Can be used instead of 'to'. */
		list_id?: number | null;

		/** Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp). */
		schedule?: number | null;

		/** Your method of sending e.g. 'wordpress', 'php', 'c#'. */
		source?: string | null;

		/**
		 * Recipient number in E.164 format or local format ([more info](https://help.clicksend.com/SMS/what-format-does-the-recipient-phone-number-need-to-be-in)).
		 * Required
		 */
		to: string;
	}
	export interface SmsPricePostPostBodyFormProperties {

		/**
		 * Your message.
		 * Required
		 */
		body: FormControl<string | null | undefined>,

		/** Recipient country. */
		country: FormControl<string | null | undefined>,

		/** Your reference. Will be passed back with all replies and delivery reports. */
		custom_string: FormControl<string | null | undefined>,

		/** Your sender id - [more info](http://help.clicksend.com/SMS/what-is-a-sender-id-or-sender-number). */
		from: FormControl<string | null | undefined>,

		/** Your list ID if sending to a whole list. Can be used instead of 'to'. */
		list_id: FormControl<number | null | undefined>,

		/** Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp). */
		schedule: FormControl<number | null | undefined>,

		/** Your method of sending e.g. 'wordpress', 'php', 'c#'. */
		source: FormControl<string | null | undefined>,

		/**
		 * Recipient number in E.164 format or local format ([more info](https://help.clicksend.com/SMS/what-format-does-the-recipient-phone-number-need-to-be-in)).
		 * Required
		 */
		to: FormControl<string | null | undefined>,
	}
	export function CreateSmsPricePostPostBodyFormGroup() {
		return new FormGroup<SmsPricePostPostBodyFormProperties>({
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined),
			custom_string: new FormControl<string | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			list_id: new FormControl<number | null | undefined>(undefined),
			schedule: new FormControl<number | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SmsReceipts_readPutPutBody {

		/** An optional timestamp - mark all as read before this timestamp. If not given, all receipts will be marked as read. */
		date_before?: number | null;
	}
	export interface SmsReceipts_readPutPutBodyFormProperties {

		/** An optional timestamp - mark all as read before this timestamp. If not given, all receipts will be marked as read. */
		date_before: FormControl<number | null | undefined>,
	}
	export function CreateSmsReceipts_readPutPutBodyFormGroup() {
		return new FormGroup<SmsReceipts_readPutPutBodyFormProperties>({
			date_before: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SmsSendPostPostBody {

		/**
		 * Your message.
		 * Required
		 */
		body: string;

		/** Recipient country. */
		country?: string | null;

		/** Your reference. Will be passed back with all replies and delivery reports. */
		custom_string?: string | null;

		/** Your sender id - [more info](http://help.clicksend.com/SMS/what-is-a-sender-id-or-sender-number). */
		from?: string | null;

		/** An email address where the reply should be emailed to. If omitted, the reply will be emailed back to the user who sent the outgoing SMS. */
		from_email?: string | null;

		/** Your list ID if sending to a whole list. Can be used instead of 'to'. */
		list_id?: number | null;

		/** Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp). */
		schedule?: number | null;

		/** Your method of sending e.g. 'wordpress', 'php', 'c#'. */
		source?: string | null;

		/**
		 * Recipient number in E.164 format or local format ([more info](https://help.clicksend.com/SMS/what-format-does-the-recipient-phone-number-need-to-be-in)).
		 * Required
		 */
		to: string;
	}
	export interface SmsSendPostPostBodyFormProperties {

		/**
		 * Your message.
		 * Required
		 */
		body: FormControl<string | null | undefined>,

		/** Recipient country. */
		country: FormControl<string | null | undefined>,

		/** Your reference. Will be passed back with all replies and delivery reports. */
		custom_string: FormControl<string | null | undefined>,

		/** Your sender id - [more info](http://help.clicksend.com/SMS/what-is-a-sender-id-or-sender-number). */
		from: FormControl<string | null | undefined>,

		/** An email address where the reply should be emailed to. If omitted, the reply will be emailed back to the user who sent the outgoing SMS. */
		from_email: FormControl<string | null | undefined>,

		/** Your list ID if sending to a whole list. Can be used instead of 'to'. */
		list_id: FormControl<number | null | undefined>,

		/** Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp). */
		schedule: FormControl<number | null | undefined>,

		/** Your method of sending e.g. 'wordpress', 'php', 'c#'. */
		source: FormControl<string | null | undefined>,

		/**
		 * Recipient number in E.164 format or local format ([more info](https://help.clicksend.com/SMS/what-format-does-the-recipient-phone-number-need-to-be-in)).
		 * Required
		 */
		to: FormControl<string | null | undefined>,
	}
	export function CreateSmsSendPostPostBodyFormGroup() {
		return new FormGroup<SmsSendPostPostBodyFormProperties>({
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined),
			custom_string: new FormControl<string | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			from_email: new FormControl<string | null | undefined>(undefined),
			list_id: new FormControl<number | null | undefined>(undefined),
			schedule: new FormControl<number | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SmsTemplatesPostPostBody {

		/**
		 * Your template body.
		 * Required
		 */
		body: string;

		/**
		 * Your template name.
		 * Required
		 */
		template_name: string;
	}
	export interface SmsTemplatesPostPostBodyFormProperties {

		/**
		 * Your template body.
		 * Required
		 */
		body: FormControl<string | null | undefined>,

		/**
		 * Your template name.
		 * Required
		 */
		template_name: FormControl<string | null | undefined>,
	}
	export function CreateSmsTemplatesPostPostBodyFormGroup() {
		return new FormGroup<SmsTemplatesPostPostBodyFormProperties>({
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			template_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SmsTemplates_template_idPutPutBody {

		/**
		 * Your template body.
		 * Required
		 */
		body: string;

		/**
		 * Your template name.
		 * Required
		 */
		template_name: string;
	}
	export interface SmsTemplates_template_idPutPutBodyFormProperties {

		/**
		 * Your template body.
		 * Required
		 */
		body: FormControl<string | null | undefined>,

		/**
		 * Your template name.
		 * Required
		 */
		template_name: FormControl<string | null | undefined>,
	}
	export function CreateSmsTemplates_template_idPutPutBodyFormGroup() {
		return new FormGroup<SmsTemplates_template_idPutPutBodyFormProperties>({
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			template_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SubaccountsPostPostBody {

		/** Your access billing flag value, must be 1 or 0. */
		access_billing?: number | null;

		/** Your access contacts flag value, must be 1 or 0. */
		access_contacts?: number | null;

		/** Your access reporting flag value, must be 1 or 0. */
		access_reporting?: number | null;

		/** Your access settings flag value, must be 1 or 0. */
		access_settings?: number | null;

		/** Your access users flag value, must be 1 or 0. */
		access_users?: number | null;

		/**
		 * Your new api username.
		 * Required
		 */
		api_username: string;

		/**
		 * Your new email.
		 * Required
		 */
		email: string;

		/**
		 * Your firstname.
		 * Required
		 */
		first_name: string;

		/**
		 * Your lastname.
		 * Required
		 */
		last_name: string;

		/**
		 * Your new password.
		 * Required
		 */
		password: string;

		/**
		 * Your phone number in E.164 format.
		 * Required
		 */
		phone_number: string;

		/** Your share campaigns flag value, must be 1 or 0. */
		share_campaigns?: number | null;
	}
	export interface SubaccountsPostPostBodyFormProperties {

		/** Your access billing flag value, must be 1 or 0. */
		access_billing: FormControl<number | null | undefined>,

		/** Your access contacts flag value, must be 1 or 0. */
		access_contacts: FormControl<number | null | undefined>,

		/** Your access reporting flag value, must be 1 or 0. */
		access_reporting: FormControl<number | null | undefined>,

		/** Your access settings flag value, must be 1 or 0. */
		access_settings: FormControl<number | null | undefined>,

		/** Your access users flag value, must be 1 or 0. */
		access_users: FormControl<number | null | undefined>,

		/**
		 * Your new api username.
		 * Required
		 */
		api_username: FormControl<string | null | undefined>,

		/**
		 * Your new email.
		 * Required
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * Your firstname.
		 * Required
		 */
		first_name: FormControl<string | null | undefined>,

		/**
		 * Your lastname.
		 * Required
		 */
		last_name: FormControl<string | null | undefined>,

		/**
		 * Your new password.
		 * Required
		 */
		password: FormControl<string | null | undefined>,

		/**
		 * Your phone number in E.164 format.
		 * Required
		 */
		phone_number: FormControl<string | null | undefined>,

		/** Your share campaigns flag value, must be 1 or 0. */
		share_campaigns: FormControl<number | null | undefined>,
	}
	export function CreateSubaccountsPostPostBodyFormGroup() {
		return new FormGroup<SubaccountsPostPostBodyFormProperties>({
			access_billing: new FormControl<number | null | undefined>(undefined),
			access_contacts: new FormControl<number | null | undefined>(undefined),
			access_reporting: new FormControl<number | null | undefined>(undefined),
			access_settings: new FormControl<number | null | undefined>(undefined),
			access_users: new FormControl<number | null | undefined>(undefined),
			api_username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			first_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			last_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			phone_number: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			share_campaigns: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Subaccounts_subaccount_idPutPutBody {

		/** Your access billing flag value, must be 1 or 0. */
		access_billing?: number | null;

		/** Your access contacts flag value, must be 1 or 0. */
		access_contacts?: number | null;

		/** Your access reporting flag value, must be 1 or 0. */
		access_reporting?: number | null;

		/** Your access settings flag value, must be 1 or 0. */
		access_settings?: number | null;

		/** Your access users flag value, must be 1 or 0. */
		access_users?: number | null;

		/** Your new email. */
		email?: string | null;

		/** Your firstname. */
		first_name?: string | null;

		/** Your lastname. */
		last_name?: string | null;

		/** Your new password. */
		password?: string | null;

		/** Your phone number in E.164 format. */
		phone_number?: string | null;

		/** Your share campaigns flag value, must be 1 or 0. */
		share_campaigns?: number | null;
	}
	export interface Subaccounts_subaccount_idPutPutBodyFormProperties {

		/** Your access billing flag value, must be 1 or 0. */
		access_billing: FormControl<number | null | undefined>,

		/** Your access contacts flag value, must be 1 or 0. */
		access_contacts: FormControl<number | null | undefined>,

		/** Your access reporting flag value, must be 1 or 0. */
		access_reporting: FormControl<number | null | undefined>,

		/** Your access settings flag value, must be 1 or 0. */
		access_settings: FormControl<number | null | undefined>,

		/** Your access users flag value, must be 1 or 0. */
		access_users: FormControl<number | null | undefined>,

		/** Your new email. */
		email: FormControl<string | null | undefined>,

		/** Your firstname. */
		first_name: FormControl<string | null | undefined>,

		/** Your lastname. */
		last_name: FormControl<string | null | undefined>,

		/** Your new password. */
		password: FormControl<string | null | undefined>,

		/** Your phone number in E.164 format. */
		phone_number: FormControl<string | null | undefined>,

		/** Your share campaigns flag value, must be 1 or 0. */
		share_campaigns: FormControl<number | null | undefined>,
	}
	export function CreateSubaccounts_subaccount_idPutPutBodyFormGroup() {
		return new FormGroup<Subaccounts_subaccount_idPutPutBodyFormProperties>({
			access_billing: new FormControl<number | null | undefined>(undefined),
			access_contacts: new FormControl<number | null | undefined>(undefined),
			access_reporting: new FormControl<number | null | undefined>(undefined),
			access_settings: new FormControl<number | null | undefined>(undefined),
			access_users: new FormControl<number | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			phone_number: new FormControl<string | null | undefined>(undefined),
			share_campaigns: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UploadsPostPostBody {

		/**
		 * Your file contents encoded in `base64`.
		 * Required
		 */
		content: string;

		/**
		 * Conversion type: `fax`, `mms`, `csv` or `post`
		 * Required
		 */
		convert: string;
	}
	export interface UploadsPostPostBodyFormProperties {

		/**
		 * Your file contents encoded in `base64`.
		 * Required
		 */
		content: FormControl<string | null | undefined>,

		/**
		 * Conversion type: `fax`, `mms`, `csv` or `post`
		 * Required
		 */
		convert: FormControl<string | null | undefined>,
	}
	export function CreateUploadsPostPostBodyFormGroup() {
		return new FormGroup<UploadsPostPostBodyFormProperties>({
			content: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			convert: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VoicePricePostPostBody {

		/**
		 * Your message.
		 * Required
		 */
		body: string;

		/** The country of the recipient. */
		country?: string | null;

		/** Your reference. Will be passed back with all replies and delivery reports. */
		custom_string?: string | null;

		/** au (string, required) - See section on available languages. */
		lang?: string | null;

		/** Your list ID if sending to a whole list. Can be used instead of 'to'. */
		list_id?: number | null;

		/** Whether you want to receive a keypress from the call recipient (1 for on, 0 [default] for off) */
		require_input?: number | null;

		/** Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp). */
		schedule?: number | null;

		/** Your method of sending e.g. 'wordpress', 'php', 'c#'. */
		source?: string | null;

		/**
		 * Recipient number in E.164 format or local format ([more info](https://help.clicksend.com/SMS/what-format-does-the-recipient-phone-number-need-to-be-in)).
		 * Required
		 */
		to: string;

		/**
		 * Either 'female' or 'male'.
		 * Required
		 */
		voice: string;
	}
	export interface VoicePricePostPostBodyFormProperties {

		/**
		 * Your message.
		 * Required
		 */
		body: FormControl<string | null | undefined>,

		/** The country of the recipient. */
		country: FormControl<string | null | undefined>,

		/** Your reference. Will be passed back with all replies and delivery reports. */
		custom_string: FormControl<string | null | undefined>,

		/** au (string, required) - See section on available languages. */
		lang: FormControl<string | null | undefined>,

		/** Your list ID if sending to a whole list. Can be used instead of 'to'. */
		list_id: FormControl<number | null | undefined>,

		/** Whether you want to receive a keypress from the call recipient (1 for on, 0 [default] for off) */
		require_input: FormControl<number | null | undefined>,

		/** Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp). */
		schedule: FormControl<number | null | undefined>,

		/** Your method of sending e.g. 'wordpress', 'php', 'c#'. */
		source: FormControl<string | null | undefined>,

		/**
		 * Recipient number in E.164 format or local format ([more info](https://help.clicksend.com/SMS/what-format-does-the-recipient-phone-number-need-to-be-in)).
		 * Required
		 */
		to: FormControl<string | null | undefined>,

		/**
		 * Either 'female' or 'male'.
		 * Required
		 */
		voice: FormControl<string | null | undefined>,
	}
	export function CreateVoicePricePostPostBodyFormGroup() {
		return new FormGroup<VoicePricePostPostBodyFormProperties>({
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined),
			custom_string: new FormControl<string | null | undefined>(undefined),
			lang: new FormControl<string | null | undefined>(undefined),
			list_id: new FormControl<number | null | undefined>(undefined),
			require_input: new FormControl<number | null | undefined>(undefined),
			schedule: new FormControl<number | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			voice: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VoiceSendPostPostBody {

		/**
		 * Your message.
		 * Required
		 */
		body: string;

		/** The country of the recipient. */
		country?: string | null;

		/** Your reference. Will be passed back with all replies and delivery reports. */
		custom_string?: string | null;

		/** au (string, required) - See section on available languages. */
		lang?: string | null;

		/** Your list ID if sending to a whole list. Can be used instead of 'to'. Will override 'to' if both are used. */
		list_id?: number | null;

		/** Whether to attempt to detect an answering machine or voicemail service and leave a message (1 for on, 0 [default] for off) */
		machine_detection?: number | null;

		/** Whether you want to receive a keypress from the call recipient (1 for on, 0 [default] for off) */
		require_input?: number | null;

		/** Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp). */
		schedule?: number | null;

		/** Your method of sending e.g. 'wordpress', 'php', 'c#'. */
		source?: string | null;

		/**
		 * Recipient number in E.164 format or local format ([more info](https://help.clicksend.com/SMS/what-format-does-the-recipient-phone-number-need-to-be-in)).
		 * Required
		 */
		to: string;

		/**
		 * Either 'female' or 'male'.
		 * Required
		 */
		voice: string;
	}
	export interface VoiceSendPostPostBodyFormProperties {

		/**
		 * Your message.
		 * Required
		 */
		body: FormControl<string | null | undefined>,

		/** The country of the recipient. */
		country: FormControl<string | null | undefined>,

		/** Your reference. Will be passed back with all replies and delivery reports. */
		custom_string: FormControl<string | null | undefined>,

		/** au (string, required) - See section on available languages. */
		lang: FormControl<string | null | undefined>,

		/** Your list ID if sending to a whole list. Can be used instead of 'to'. Will override 'to' if both are used. */
		list_id: FormControl<number | null | undefined>,

		/** Whether to attempt to detect an answering machine or voicemail service and leave a message (1 for on, 0 [default] for off) */
		machine_detection: FormControl<number | null | undefined>,

		/** Whether you want to receive a keypress from the call recipient (1 for on, 0 [default] for off) */
		require_input: FormControl<number | null | undefined>,

		/** Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp). */
		schedule: FormControl<number | null | undefined>,

		/** Your method of sending e.g. 'wordpress', 'php', 'c#'. */
		source: FormControl<string | null | undefined>,

		/**
		 * Recipient number in E.164 format or local format ([more info](https://help.clicksend.com/SMS/what-format-does-the-recipient-phone-number-need-to-be-in)).
		 * Required
		 */
		to: FormControl<string | null | undefined>,

		/**
		 * Either 'female' or 'male'.
		 * Required
		 */
		voice: FormControl<string | null | undefined>,
	}
	export function CreateVoiceSendPostPostBodyFormGroup() {
		return new FormGroup<VoiceSendPostPostBodyFormProperties>({
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined),
			custom_string: new FormControl<string | null | undefined>(undefined),
			lang: new FormControl<string | null | undefined>(undefined),
			list_id: new FormControl<number | null | undefined>(undefined),
			machine_detection: new FormControl<number | null | undefined>(undefined),
			require_input: new FormControl<number | null | undefined>(undefined),
			schedule: new FormControl<number | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			voice: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

}

