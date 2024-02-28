import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Link {
		href?: string | null;
		rel?: string | null;
		templated?: boolean | null;
	}
	export interface LinkFormProperties {
		href: FormControl<string | null | undefined>,
		rel: FormControl<string | null | undefined>,
		templated: FormControl<boolean | null | undefined>,
	}
	export function CreateLinkFormGroup() {
		return new FormGroup<LinkFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			rel: new FormControl<string | null | undefined>(undefined),
			templated: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** RestErrorDTO */
	export interface RestErrorDTO {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		developerMessage?: string | null;
		message?: string | null;
		moreInfoUrl?: string | null;
		status?: string | null;
	}

	/** RestErrorDTO */
	export interface RestErrorDTOFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		developerMessage: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
		moreInfoUrl: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateRestErrorDTOFormGroup() {
		return new FormGroup<RestErrorDTOFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			developerMessage: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			moreInfoUrl: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Void {
	}
	export interface VoidFormProperties {
	}
	export function CreateVoidFormGroup() {
		return new FormGroup<VoidFormProperties>({
		});

	}


	/** WebServiceAccount */
	export interface WebServiceAccount {

		/** Type: double */
		creditBalance?: number | null;
		links?: Array<Link>;
	}

	/** WebServiceAccount */
	export interface WebServiceAccountFormProperties {

		/** Type: double */
		creditBalance: FormControl<number | null | undefined>,
	}
	export function CreateWebServiceAccountFormGroup() {
		return new FormGroup<WebServiceAccountFormProperties>({
			creditBalance: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** WebServiceAccountStatistics */
	export interface WebServiceAccountStatistics {
		from?: Date | null;

		/** WebServiceStatistics */
		grandTotal?: WebServiceStatistics;
		showingCreditValue?: boolean | null;
		to?: Date | null;
		users?: Array<WebServiceUserStatistics>;
	}

	/** WebServiceAccountStatistics */
	export interface WebServiceAccountStatisticsFormProperties {
		from: FormControl<Date | null | undefined>,
		showingCreditValue: FormControl<boolean | null | undefined>,
		to: FormControl<Date | null | undefined>,
	}
	export function CreateWebServiceAccountStatisticsFormGroup() {
		return new FormGroup<WebServiceAccountStatisticsFormProperties>({
			from: new FormControl<Date | null | undefined>(undefined),
			showingCreditValue: new FormControl<boolean | null | undefined>(undefined),
			to: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** WebServiceUserStatistics */
	export interface WebServiceUserStatistics {
		campaigns?: Array<WebServiceCampaignStatistics>;

		/** WebServiceStatistics */
		total?: WebServiceStatistics;

		/** WebServiceUser */
		user?: WebServiceUser;
	}

	/** WebServiceUserStatistics */
	export interface WebServiceUserStatisticsFormProperties {
	}
	export function CreateWebServiceUserStatisticsFormGroup() {
		return new FormGroup<WebServiceUserStatisticsFormProperties>({
		});

	}


	/** WebServiceCampaignStatistics */
	export interface WebServiceCampaignStatistics {
		campaign?: string | null;

		/** WebServiceStatistics */
		statistics?: WebServiceStatistics;
	}

	/** WebServiceCampaignStatistics */
	export interface WebServiceCampaignStatisticsFormProperties {
		campaign: FormControl<string | null | undefined>,
	}
	export function CreateWebServiceCampaignStatisticsFormGroup() {
		return new FormGroup<WebServiceCampaignStatisticsFormProperties>({
			campaign: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** WebServiceAnalyseMessageRequest */
	export interface WebServiceAnalyseMessageRequestMessageAndRecipientNumber {
		message?: string | null;
		recipientNumber?: string | null;
	}

	/** WebServiceAnalyseMessageRequest */
	export interface WebServiceAnalyseMessageRequestMessageAndRecipientNumberFormProperties {
		message: FormControl<string | null | undefined>,
		recipientNumber: FormControl<string | null | undefined>,
	}
	export function CreateWebServiceAnalyseMessageRequestMessageAndRecipientNumberFormGroup() {
		return new FormGroup<WebServiceAnalyseMessageRequestMessageAndRecipientNumberFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			recipientNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** WebServiceAnalyseMessageRequest */
	export interface WebServiceAnalyseMessageRequestMessageOnly {
		message?: string | null;
		recipientNumber?: string | null;
	}

	/** WebServiceAnalyseMessageRequest */
	export interface WebServiceAnalyseMessageRequestMessageOnlyFormProperties {
		message: FormControl<string | null | undefined>,
		recipientNumber: FormControl<string | null | undefined>,
	}
	export function CreateWebServiceAnalyseMessageRequestMessageOnlyFormGroup() {
		return new FormGroup<WebServiceAnalyseMessageRequestMessageOnlyFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			recipientNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** WebServiceAnalyseMessageResponse */
	export interface WebServiceAnalyseMessageResponse {
		characterAnalysis?: Array<string>;

		/** Type: double */
		messageCreditCost?: number | null;
		messageEncoding?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		messageLength?: number | null;
		messageLengthWithinMaximumAllowed?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		numberOfMessages?: number | null;
	}

	/** WebServiceAnalyseMessageResponse */
	export interface WebServiceAnalyseMessageResponseFormProperties {

		/** Type: double */
		messageCreditCost: FormControl<number | null | undefined>,
		messageEncoding: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		messageLength: FormControl<number | null | undefined>,
		messageLengthWithinMaximumAllowed: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		numberOfMessages: FormControl<number | null | undefined>,
	}
	export function CreateWebServiceAnalyseMessageResponseFormGroup() {
		return new FormGroup<WebServiceAnalyseMessageResponseFormProperties>({
			messageCreditCost: new FormControl<number | null | undefined>(undefined),
			messageEncoding: new FormControl<string | null | undefined>(undefined),
			messageLength: new FormControl<number | null | undefined>(undefined),
			messageLengthWithinMaximumAllowed: new FormControl<boolean | null | undefined>(undefined),
			numberOfMessages: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** WebServiceContact */
	export interface WebServiceContact {
		contactId?: string | null;
		contactNumber?: string | null;
		firstName?: string | null;
		lastName?: string | null;
		links?: Array<Link>;
		title?: string | null;
	}

	/** WebServiceContact */
	export interface WebServiceContactFormProperties {
		contactId: FormControl<string | null | undefined>,
		contactNumber: FormControl<string | null | undefined>,
		firstName: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateWebServiceContactFormGroup() {
		return new FormGroup<WebServiceContactFormProperties>({
			contactId: new FormControl<string | null | undefined>(undefined),
			contactNumber: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** WebServiceContactLink */
	export interface WebServiceContactLink {
		contactId?: string | null;
		links?: Array<Link>;
	}

	/** WebServiceContactLink */
	export interface WebServiceContactLinkFormProperties {
		contactId: FormControl<string | null | undefined>,
	}
	export function CreateWebServiceContactLinkFormGroup() {
		return new FormGroup<WebServiceContactLinkFormProperties>({
			contactId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** WebServiceContacts */
	export interface WebServiceContacts {
		links?: Array<Link>;
		webServiceContacts?: Array<WebServiceContact>;
	}

	/** WebServiceContacts */
	export interface WebServiceContactsFormProperties {
	}
	export function CreateWebServiceContactsFormGroup() {
		return new FormGroup<WebServiceContactsFormProperties>({
		});

	}


	/** WebServiceGroup */
	export interface WebServiceGroup {
		groupId?: string | null;
		links?: Array<Link>;
		name?: string | null;
	}

	/** WebServiceGroup */
	export interface WebServiceGroupFormProperties {
		groupId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateWebServiceGroupFormGroup() {
		return new FormGroup<WebServiceGroupFormProperties>({
			groupId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** WebServiceGroups */
	export interface WebServiceGroups {
		links?: Array<Link>;
		webServiceGroups?: Array<WebServiceGroup>;
	}

	/** WebServiceGroups */
	export interface WebServiceGroupsFormProperties {
	}
	export function CreateWebServiceGroupsFormGroup() {
		return new FormGroup<WebServiceGroupsFormProperties>({
		});

	}


	/** WebServiceMessage */
	export interface WebServiceMessage {
		campaign?: string | null;

		/** WebServiceContactLink */
		contact?: WebServiceContactLink;

		/** Type: double */
		creditCost?: number | null;
		dateTimeReceived?: Date | null;
		dateTimeScheduled?: Date | null;
		dateTimeSent?: Date | null;
		deleted?: boolean | null;
		fromNumber?: string | null;
		links?: Array<Link>;
		message?: string | null;
		messageId?: string | null;
		messageStatus?: string | null;
		messageType?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		numberOfMessages?: number | null;
		read?: boolean | null;

		/** WebServiceMessageLink */
		repliedToMessage?: WebServiceMessageLink;
		toNumber?: string | null;
		userDataField?: string | null;
	}

	/** WebServiceMessage */
	export interface WebServiceMessageFormProperties {
		campaign: FormControl<string | null | undefined>,

		/** Type: double */
		creditCost: FormControl<number | null | undefined>,
		dateTimeReceived: FormControl<Date | null | undefined>,
		dateTimeScheduled: FormControl<Date | null | undefined>,
		dateTimeSent: FormControl<Date | null | undefined>,
		deleted: FormControl<boolean | null | undefined>,
		fromNumber: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
		messageId: FormControl<string | null | undefined>,
		messageStatus: FormControl<string | null | undefined>,
		messageType: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		numberOfMessages: FormControl<number | null | undefined>,
		read: FormControl<boolean | null | undefined>,
		toNumber: FormControl<string | null | undefined>,
		userDataField: FormControl<string | null | undefined>,
	}
	export function CreateWebServiceMessageFormGroup() {
		return new FormGroup<WebServiceMessageFormProperties>({
			campaign: new FormControl<string | null | undefined>(undefined),
			creditCost: new FormControl<number | null | undefined>(undefined),
			dateTimeReceived: new FormControl<Date | null | undefined>(undefined),
			dateTimeScheduled: new FormControl<Date | null | undefined>(undefined),
			dateTimeSent: new FormControl<Date | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			fromNumber: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			messageId: new FormControl<string | null | undefined>(undefined),
			messageStatus: new FormControl<string | null | undefined>(undefined),
			messageType: new FormControl<string | null | undefined>(undefined),
			numberOfMessages: new FormControl<number | null | undefined>(undefined),
			read: new FormControl<boolean | null | undefined>(undefined),
			toNumber: new FormControl<string | null | undefined>(undefined),
			userDataField: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** WebServiceMessageLink */
	export interface WebServiceMessageLink {
		links?: Array<Link>;
		messageId?: string | null;
	}

	/** WebServiceMessageLink */
	export interface WebServiceMessageLinkFormProperties {
		messageId: FormControl<string | null | undefined>,
	}
	export function CreateWebServiceMessageLinkFormGroup() {
		return new FormGroup<WebServiceMessageLinkFormProperties>({
			messageId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** WebServiceMessages */
	export interface WebServiceMessages {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		elements?: number | null;
		links?: Array<Link>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		pageSize?: number | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		totalElements?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalPages?: number | null;
		webServiceMessages?: Array<WebServiceMessage>;
	}

	/** WebServiceMessages */
	export interface WebServiceMessagesFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		elements: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		pageSize: FormControl<number | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		totalElements: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalPages: FormControl<number | null | undefined>,
	}
	export function CreateWebServiceMessagesFormGroup() {
		return new FormGroup<WebServiceMessagesFormProperties>({
			elements: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			pageSize: new FormControl<number | null | undefined>(undefined),
			totalElements: new FormControl<string | null | undefined>(undefined),
			totalPages: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** WebServiceSendSmsRequest */
	export interface WebServiceSendSmsRequest {
		campaign?: string | null;
		dataField?: string | null;
		dateToSend?: Date | null;
		message?: string | null;
		recipientNumber?: string | null;
	}

	/** WebServiceSendSmsRequest */
	export interface WebServiceSendSmsRequestFormProperties {
		campaign: FormControl<string | null | undefined>,
		dataField: FormControl<string | null | undefined>,
		dateToSend: FormControl<Date | null | undefined>,
		message: FormControl<string | null | undefined>,
		recipientNumber: FormControl<string | null | undefined>,
	}
	export function CreateWebServiceSendSmsRequestFormGroup() {
		return new FormGroup<WebServiceSendSmsRequestFormProperties>({
			campaign: new FormControl<string | null | undefined>(undefined),
			dataField: new FormControl<string | null | undefined>(undefined),
			dateToSend: new FormControl<Date | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			recipientNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** WebServiceSendSmsRequests */
	export interface WebServiceSendSmsRequests {
		defaultDateToSend?: Date | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		messagesPerMinute?: number | null;
		sendSmsRequests?: Array<WebServiceSendSmsRequest>;
	}

	/** WebServiceSendSmsRequests */
	export interface WebServiceSendSmsRequestsFormProperties {
		defaultDateToSend: FormControl<Date | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		messagesPerMinute: FormControl<number | null | undefined>,
	}
	export function CreateWebServiceSendSmsRequestsFormGroup() {
		return new FormGroup<WebServiceSendSmsRequestsFormProperties>({
			defaultDateToSend: new FormControl<Date | null | undefined>(undefined),
			messagesPerMinute: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** WebServiceSendSmsResponse */
	export interface WebServiceSendSmsResponse {
		error?: string | null;
		messageId?: string | null;
	}

	/** WebServiceSendSmsResponse */
	export interface WebServiceSendSmsResponseFormProperties {
		error: FormControl<string | null | undefined>,
		messageId: FormControl<string | null | undefined>,
	}
	export function CreateWebServiceSendSmsResponseFormGroup() {
		return new FormGroup<WebServiceSendSmsResponseFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			messageId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** WebServiceSendSmsResponses */
	export interface WebServiceSendSmsResponses {
		sendSmsResponses?: Array<WebServiceSendSmsResponse>;
	}

	/** WebServiceSendSmsResponses */
	export interface WebServiceSendSmsResponsesFormProperties {
	}
	export function CreateWebServiceSendSmsResponsesFormGroup() {
		return new FormGroup<WebServiceSendSmsResponsesFormProperties>({
		});

	}


	/** WebServiceSendVoiceMessageResponse */
	export interface WebServiceSendVoiceMessageResponse {
		error?: string | null;
		voiceMessageId?: string | null;
	}

	/** WebServiceSendVoiceMessageResponse */
	export interface WebServiceSendVoiceMessageResponseFormProperties {
		error: FormControl<string | null | undefined>,
		voiceMessageId: FormControl<string | null | undefined>,
	}
	export function CreateWebServiceSendVoiceMessageResponseFormGroup() {
		return new FormGroup<WebServiceSendVoiceMessageResponseFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			voiceMessageId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** WebServiceStatistics */
	export interface WebServiceStatistics {

		/** Type: double */
		delivered?: number | null;

		/** Type: double */
		failed?: number | null;

		/** Type: double */
		failedOptout?: number | null;

		/** Type: double */
		failedRefunded?: number | null;

		/** Type: double */
		sent?: number | null;

		/** Type: double */
		total?: number | null;
	}

	/** WebServiceStatistics */
	export interface WebServiceStatisticsFormProperties {

		/** Type: double */
		delivered: FormControl<number | null | undefined>,

		/** Type: double */
		failed: FormControl<number | null | undefined>,

		/** Type: double */
		failedOptout: FormControl<number | null | undefined>,

		/** Type: double */
		failedRefunded: FormControl<number | null | undefined>,

		/** Type: double */
		sent: FormControl<number | null | undefined>,

		/** Type: double */
		total: FormControl<number | null | undefined>,
	}
	export function CreateWebServiceStatisticsFormGroup() {
		return new FormGroup<WebServiceStatisticsFormProperties>({
			delivered: new FormControl<number | null | undefined>(undefined),
			failed: new FormControl<number | null | undefined>(undefined),
			failedOptout: new FormControl<number | null | undefined>(undefined),
			failedRefunded: new FormControl<number | null | undefined>(undefined),
			sent: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** WebServiceTemplate */
	export interface WebServiceTemplate {
		data?: string | null;
		links?: Array<Link>;
		name?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		templateId?: string | null;
	}

	/** WebServiceTemplate */
	export interface WebServiceTemplateFormProperties {
		data: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		templateId: FormControl<string | null | undefined>,
	}
	export function CreateWebServiceTemplateFormGroup() {
		return new FormGroup<WebServiceTemplateFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			templateId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** WebServiceTemplates */
	export interface WebServiceTemplates {
		links?: Array<Link>;
		webServiceTemplates?: Array<WebServiceTemplate>;
	}

	/** WebServiceTemplates */
	export interface WebServiceTemplatesFormProperties {
	}
	export function CreateWebServiceTemplatesFormGroup() {
		return new FormGroup<WebServiceTemplatesFormProperties>({
		});

	}


	/** WebServiceTransferCreditsRequest */
	export interface WebServiceTransferCreditsRequest {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		numberOfCreditsToTransfer?: number | null;
		transferFromEmailAddress?: string | null;
		transferToEmailAddress?: string | null;
	}

	/** WebServiceTransferCreditsRequest */
	export interface WebServiceTransferCreditsRequestFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		numberOfCreditsToTransfer: FormControl<number | null | undefined>,
		transferFromEmailAddress: FormControl<string | null | undefined>,
		transferToEmailAddress: FormControl<string | null | undefined>,
	}
	export function CreateWebServiceTransferCreditsRequestFormGroup() {
		return new FormGroup<WebServiceTransferCreditsRequestFormProperties>({
			numberOfCreditsToTransfer: new FormControl<number | null | undefined>(undefined),
			transferFromEmailAddress: new FormControl<string | null | undefined>(undefined),
			transferToEmailAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** WebServiceUser */
	export interface WebServiceUser {
		company?: string | null;
		contactNumber?: string | null;

		/** Type: double */
		creditBalance?: number | null;
		emailAddress?: string | null;
		firstName?: string | null;
		lastName?: string | null;
		password?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		userId?: string | null;
	}

	/** WebServiceUser */
	export interface WebServiceUserFormProperties {
		company: FormControl<string | null | undefined>,
		contactNumber: FormControl<string | null | undefined>,

		/** Type: double */
		creditBalance: FormControl<number | null | undefined>,
		emailAddress: FormControl<string | null | undefined>,
		firstName: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,
		password: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateWebServiceUserFormGroup() {
		return new FormGroup<WebServiceUserFormProperties>({
			company: new FormControl<string | null | undefined>(undefined),
			contactNumber: new FormControl<string | null | undefined>(undefined),
			creditBalance: new FormControl<number | null | undefined>(undefined),
			emailAddress: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** WebServiceUsers */
	export interface WebServiceUsers {
		webServiceUserList?: Array<WebServiceUser>;
	}

	/** WebServiceUsers */
	export interface WebServiceUsersFormProperties {
	}
	export function CreateWebServiceUsersFormGroup() {
		return new FormGroup<WebServiceUsersFormProperties>({
		});

	}


	/** WebServiceVoiceMessage */
	export interface WebServiceVoiceMessage {
		audioFileUrl?: string | null;
		campaign?: string | null;
		dateTimeSent?: Date | null;
		deleted?: boolean | null;
		language?: string | null;
		links?: Array<Link>;
		message?: string | null;
		messageStatus?: string | null;
		toNumber?: string | null;
		userDataField?: string | null;
		voiceMessageId?: string | null;
	}

	/** WebServiceVoiceMessage */
	export interface WebServiceVoiceMessageFormProperties {
		audioFileUrl: FormControl<string | null | undefined>,
		campaign: FormControl<string | null | undefined>,
		dateTimeSent: FormControl<Date | null | undefined>,
		deleted: FormControl<boolean | null | undefined>,
		language: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
		messageStatus: FormControl<string | null | undefined>,
		toNumber: FormControl<string | null | undefined>,
		userDataField: FormControl<string | null | undefined>,
		voiceMessageId: FormControl<string | null | undefined>,
	}
	export function CreateWebServiceVoiceMessageFormGroup() {
		return new FormGroup<WebServiceVoiceMessageFormProperties>({
			audioFileUrl: new FormControl<string | null | undefined>(undefined),
			campaign: new FormControl<string | null | undefined>(undefined),
			dateTimeSent: new FormControl<Date | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			messageStatus: new FormControl<string | null | undefined>(undefined),
			toNumber: new FormControl<string | null | undefined>(undefined),
			userDataField: new FormControl<string | null | undefined>(undefined),
			voiceMessageId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** WebServiceVoiceMessageSendSingleTextRequest */
	export interface WebServiceVoiceMessageSendSingleTextRequest {
		campaign?: string | null;
		dataField?: string | null;
		language?: string | null;
		message?: string | null;
		recipientNumber?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		retryCount?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		retryMaximumInterval?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		retryMinimumInterval?: number | null;
	}

	/** WebServiceVoiceMessageSendSingleTextRequest */
	export interface WebServiceVoiceMessageSendSingleTextRequestFormProperties {
		campaign: FormControl<string | null | undefined>,
		dataField: FormControl<string | null | undefined>,
		language: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
		recipientNumber: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		retryCount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		retryMaximumInterval: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		retryMinimumInterval: FormControl<number | null | undefined>,
	}
	export function CreateWebServiceVoiceMessageSendSingleTextRequestFormGroup() {
		return new FormGroup<WebServiceVoiceMessageSendSingleTextRequestFormProperties>({
			campaign: new FormControl<string | null | undefined>(undefined),
			dataField: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			recipientNumber: new FormControl<string | null | undefined>(undefined),
			retryCount: new FormControl<number | null | undefined>(undefined),
			retryMaximumInterval: new FormControl<number | null | undefined>(undefined),
			retryMinimumInterval: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** WebServiceVoiceMessages */
	export interface WebServiceVoiceMessages {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		elements?: number | null;
		links?: Array<Link>;
		messages?: Array<WebServiceVoiceMessage>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		pageSize?: number | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		totalElements?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalPages?: number | null;
	}

	/** WebServiceVoiceMessages */
	export interface WebServiceVoiceMessagesFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		elements: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		pageSize: FormControl<number | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		totalElements: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalPages: FormControl<number | null | undefined>,
	}
	export function CreateWebServiceVoiceMessagesFormGroup() {
		return new FormGroup<WebServiceVoiceMessagesFormProperties>({
			elements: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			pageSize: new FormControl<number | null | undefined>(undefined),
			totalElements: new FormControl<string | null | undefined>(undefined),
			totalPages: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * balance
		 * Returns your account's credit balance
		 * Get api/rest/v1/account/balance
		 * @return {WebServiceAccount} Success
		 */
		ApiRestV1AccountBalanceGet(headersHandler?: () => HttpHeaders): Observable<WebServiceAccount> {
			return this.http.get<WebServiceAccount>(this.baseUri + 'api/rest/v1/account/balance', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * statistics
		 * Returns data from the statistics report. Note that by default the statistics shown are based on the number of messages, use the calculateCreditValue should you wish to calculate the statistics based on credit value.
		 * Get api/rest/v1/account/statistics
		 * @param {Date} from date format: dd-MM-yyyy
		 * @param {Date} to date format: dd-MM-yyyy
		 * @param {string} userEmailAddress optional email address of user to return statistics for a single user, default is to return statistics for all users if administrator, or statistics for your own account if not an administrator
		 * @param {string} campaign optional campaign name
		 * @param {boolean} includeRefundedAndOptout optionally include refunded and optout counts, default is false
		 * @param {boolean} calculateCreditValue optionally calculate using credit value rather than message count, default is false
		 * @return {WebServiceAccountStatistics} Success
		 */
		ApiRestV1AccountStatisticsGetByFromAndToAndUserEmailAddressAndCampaignAndIncludeRefundedAndOptoutAndCalculateCreditValue(from: Date | null | undefined, to: Date | null | undefined, userEmailAddress: string | null | undefined, campaign: string | null | undefined, includeRefundedAndOptout: boolean | null | undefined, calculateCreditValue: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<WebServiceAccountStatistics> {
			return this.http.get<WebServiceAccountStatistics>(this.baseUri + 'api/rest/v1/account/statistics?from=' + from?.toISOString() + '&to=' + to?.toISOString() + '&userEmailAddress=' + (userEmailAddress == null ? '' : encodeURIComponent(userEmailAddress)) + '&campaign=' + (campaign == null ? '' : encodeURIComponent(campaign)) + '&includeRefundedAndOptout=' + includeRefundedAndOptout + '&calculateCreditValue=' + calculateCreditValue, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * transfer
		 * Transfers credits between two users in the same team. The <i>account email address</i> fields as well as the <i>number of credits to transfer</i> are required.
		 * Post api/rest/v1/account/transfer
		 * @param {WebServiceTransferCreditsRequest} requestBody request
		 * @return {WebServiceUser} Description was not specified
		 */
		ApiRestV1AccountTransferPost(requestBody: WebServiceTransferCreditsRequest, headersHandler?: () => HttpHeaders): Observable<WebServiceUser> {
			return this.http.post<WebServiceUser>(this.baseUri + 'api/rest/v1/account/transfer', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * search
		 * Find a user for a particular email address
		 * Get api/rest/v1/account/user
		 * @param {string} searchEmail search by email address
		 * @return {WebServiceUsers} OK
		 */
		ApiRestV1AccountUserGetBySearchEmail(searchEmail: string, headersHandler?: () => HttpHeaders): Observable<WebServiceUsers> {
			return this.http.get<WebServiceUsers>(this.baseUri + 'api/rest/v1/account/user?searchEmail=' + (searchEmail == null ? '' : encodeURIComponent(searchEmail)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * create
		 * Creates a new sub-account in your team. The following fields are required <i>firstname, lastname, email address, contact number</i> and <i>password.</i>
		 * Put api/rest/v1/account/user
		 * @param {WebServiceUser} requestBody request
		 * @return {WebServiceUser} Description was not specified
		 */
		ApiRestV1AccountUserPut(requestBody: WebServiceUser, headersHandler?: () => HttpHeaders): Observable<WebServiceUser> {
			return this.http.put<WebServiceUser>(this.baseUri + 'api/rest/v1/account/user', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * getUser
		 * Gets a user from a given user id
		 * Get api/rest/v1/account/user/{userId}
		 * @param {string} userId userId
		 * @return {WebServiceUser} OK
		 */
		ApiRestV1AccountUser_userIdGet(userId: string, headersHandler?: () => HttpHeaders): Observable<WebServiceUser> {
			return this.http.get<WebServiceUser>(this.baseUri + 'api/rest/v1/account/user/' + userId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * update
		 * Updates a sub-account in your team. The following fields can be updated <i>firstname, lastname, contact number</i> and <i>password.</i>
		 * Post api/rest/v1/account/user/{userId}
		 * @param {string} userId userId
		 * @param {WebServiceUser} requestBody request
		 * @return {WebServiceUser} Description was not specified
		 */
		ApiRestV1AccountUser_userIdPost(userId: string, requestBody: WebServiceUser, headersHandler?: () => HttpHeaders): Observable<WebServiceUser> {
			return this.http.post<WebServiceUser>(this.baseUri + 'api/rest/v1/account/user/' + userId, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * all
		 * Returns all contacts
		 * Get api/rest/v1/contacts/all
		 * @return {WebServiceContacts} OK
		 */
		ApiRestV1ContactsAllGet(headersHandler?: () => HttpHeaders): Observable<WebServiceContacts> {
			return this.http.get<WebServiceContacts>(this.baseUri + 'api/rest/v1/contacts/all', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * create
		 * Creates a  contact
		 * Post api/rest/v1/contacts/create
		 * @param {WebServiceContact} requestBody webServiceContact
		 * @return {WebServiceContact} No response was specified
		 */
		ApiRestV1ContactsCreatePost(requestBody: WebServiceContact, headersHandler?: () => HttpHeaders): Observable<WebServiceContact> {
			return this.http.post<WebServiceContact>(this.baseUri + 'api/rest/v1/contacts/create', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * get
		 * Returns details for a single contact
		 * Get api/rest/v1/contacts/{contactId}
		 * @param {string} contactId contactId
		 * @return {WebServiceContact} OK
		 */
		ApiRestV1Contacts_contactIdGet(contactId: string, headersHandler?: () => HttpHeaders): Observable<WebServiceContact> {
			return this.http.get<WebServiceContact>(this.baseUri + 'api/rest/v1/contacts/' + (contactId == null ? '' : encodeURIComponent(contactId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * update
		 * Updates a  contact
		 * Post api/rest/v1/contacts/{contactId}
		 * @param {string} contactId contactId
		 * @param {WebServiceContact} requestBody webServiceContact
		 * @return {WebServiceContact} Description was not specified
		 */
		ApiRestV1Contacts_contactIdPost(contactId: string, requestBody: WebServiceContact, headersHandler?: () => HttpHeaders): Observable<WebServiceContact> {
			return this.http.post<WebServiceContact>(this.baseUri + 'api/rest/v1/contacts/' + (contactId == null ? '' : encodeURIComponent(contactId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * delete
		 * Deletes a  contact
		 * Delete api/rest/v1/contacts/{contactId}
		 * @param {string} contactId contactId
		 * @return {void} Description was not specified
		 */
		ApiRestV1Contacts_contactIdDelete(contactId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/rest/v1/contacts/' + (contactId == null ? '' : encodeURIComponent(contactId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * removeFromGroup
		 * Remove a contact from a group
		 * Get api/rest/v1/contacts/{contactId}/addFromGroup/{groupId}
		 * @param {string} contactId contactId
		 * @param {string} groupId groupId
		 * @return {void} OK
		 */
		ApiRestV1Contacts_contactIdAddFromGroup_groupIdGet(contactId: string, groupId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/rest/v1/contacts/' + (contactId == null ? '' : encodeURIComponent(contactId)) + '/addFromGroup/' + (groupId == null ? '' : encodeURIComponent(groupId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * removeFromGroup
		 * Remove a contact from a group
		 * Post api/rest/v1/contacts/{contactId}/addFromGroup/{groupId}
		 * @param {string} contactId contactId
		 * @param {string} groupId groupId
		 * @return {void} Description was not specified
		 */
		ApiRestV1Contacts_contactIdAddFromGroup_groupIdPost(contactId: string, groupId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/rest/v1/contacts/' + (contactId == null ? '' : encodeURIComponent(contactId)) + '/addFromGroup/' + (groupId == null ? '' : encodeURIComponent(groupId)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * addToGroup
		 * Add a contact to a group
		 * Get api/rest/v1/contacts/{contactId}/addToGroup/{groupId}
		 * @param {string} contactId contactId
		 * @param {string} groupId groupId
		 * @return {void} OK
		 */
		ApiRestV1Contacts_contactIdAddToGroup_groupIdGet(contactId: string, groupId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/rest/v1/contacts/' + (contactId == null ? '' : encodeURIComponent(contactId)) + '/addToGroup/' + (groupId == null ? '' : encodeURIComponent(groupId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * addToGroup
		 * Add a contact to a group
		 * Post api/rest/v1/contacts/{contactId}/addToGroup/{groupId}
		 * @param {string} contactId contactId
		 * @param {string} groupId groupId
		 * @return {void} Description was not specified
		 */
		ApiRestV1Contacts_contactIdAddToGroup_groupIdPost(contactId: string, groupId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/rest/v1/contacts/' + (contactId == null ? '' : encodeURIComponent(contactId)) + '/addToGroup/' + (groupId == null ? '' : encodeURIComponent(groupId)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * all
		 * Returns all groups
		 * Get api/rest/v1/groups/all
		 * @return {WebServiceGroups} OK
		 */
		ApiRestV1GroupsAllGet(headersHandler?: () => HttpHeaders): Observable<WebServiceGroups> {
			return this.http.get<WebServiceGroups>(this.baseUri + 'api/rest/v1/groups/all', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * create
		 * Create a  group
		 * Post api/rest/v1/groups/create
		 * @param {WebServiceGroup} requestBody webServiceGroup
		 * @return {WebServiceGroup} No response was specified
		 */
		ApiRestV1GroupsCreatePost(requestBody: WebServiceGroup, headersHandler?: () => HttpHeaders): Observable<WebServiceGroup> {
			return this.http.post<WebServiceGroup>(this.baseUri + 'api/rest/v1/groups/create', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * get
		 * Returns details for a single group
		 * Get api/rest/v1/groups/{groupId}
		 * @param {string} groupId groupId
		 * @return {WebServiceGroup} OK
		 */
		ApiRestV1Groups_groupIdGet(groupId: string, headersHandler?: () => HttpHeaders): Observable<WebServiceGroup> {
			return this.http.get<WebServiceGroup>(this.baseUri + 'api/rest/v1/groups/' + (groupId == null ? '' : encodeURIComponent(groupId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * update
		 * Update a  group
		 * Post api/rest/v1/groups/{groupId}
		 * @param {string} groupId groupId
		 * @param {WebServiceGroup} requestBody webServiceGroup
		 * @return {WebServiceGroup} Description was not specified
		 */
		ApiRestV1Groups_groupIdPost(groupId: string, requestBody: WebServiceGroup, headersHandler?: () => HttpHeaders): Observable<WebServiceGroup> {
			return this.http.post<WebServiceGroup>(this.baseUri + 'api/rest/v1/groups/' + (groupId == null ? '' : encodeURIComponent(groupId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * delete
		 * Deletes a  group
		 * Delete api/rest/v1/groups/{groupId}
		 * @param {string} groupId groupId
		 * @return {void} Description was not specified
		 */
		ApiRestV1Groups_groupIdDelete(groupId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/rest/v1/groups/' + (groupId == null ? '' : encodeURIComponent(groupId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * addContact
		 * Add a contact to a group
		 * Get api/rest/v1/groups/{groupId}/addContact/{contactId}
		 * @param {string} groupId groupId
		 * @param {string} contactId contactId
		 * @return {void} OK
		 */
		ApiRestV1Groups_groupIdAddContact_contactIdGet(groupId: string, contactId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/rest/v1/groups/' + (groupId == null ? '' : encodeURIComponent(groupId)) + '/addContact/' + (contactId == null ? '' : encodeURIComponent(contactId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * addContact
		 * Add a contact to a group
		 * Post api/rest/v1/groups/{groupId}/addContact/{contactId}
		 * @param {string} groupId groupId
		 * @param {string} contactId contactId
		 * @return {void} Description was not specified
		 */
		ApiRestV1Groups_groupIdAddContact_contactIdPost(groupId: string, contactId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/rest/v1/groups/' + (groupId == null ? '' : encodeURIComponent(groupId)) + '/addContact/' + (contactId == null ? '' : encodeURIComponent(contactId)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * removeContact
		 * Remove a contact from a group
		 * Get api/rest/v1/groups/{groupId}/removeContact/{contactId}
		 * @param {string} groupId groupId
		 * @param {string} contactId contactId
		 * @return {void} OK
		 */
		ApiRestV1Groups_groupIdRemoveContact_contactIdGet(groupId: string, contactId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/rest/v1/groups/' + (groupId == null ? '' : encodeURIComponent(groupId)) + '/removeContact/' + (contactId == null ? '' : encodeURIComponent(contactId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * removeContact
		 * Remove a contact from a group
		 * Post api/rest/v1/groups/{groupId}/removeContact/{contactId}
		 * @param {string} groupId groupId
		 * @param {string} contactId contactId
		 * @return {void} Description was not specified
		 */
		ApiRestV1Groups_groupIdRemoveContact_contactIdPost(groupId: string, contactId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/rest/v1/groups/' + (groupId == null ? '' : encodeURIComponent(groupId)) + '/removeContact/' + (contactId == null ? '' : encodeURIComponent(contactId)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * all
		 * Returns all messages
		 * Get api/rest/v1/messages/all
		 * @param {number} pageSize number of elements to return at a time
		 * @param {number} page page number
		 * @param {ApiRestV1MessagesAllGetByPageSizeAndPageAndTypeAndStatusAndFromDateTimeSentAndToDateTimeSentAndFromDateTimeReceivedAndToDateTimeReceivedAndFromNumberAndToNumberAndMessageAndCampaignAndDataFieldAndDeletedAndReadAndRepliesToMessageIdType} type filter by message type
		 * @param {ApiRestV1MessagesAllGetByPageSizeAndPageAndTypeAndStatusAndFromDateTimeSentAndToDateTimeSentAndFromDateTimeReceivedAndToDateTimeReceivedAndFromNumberAndToNumberAndMessageAndCampaignAndDataFieldAndDeletedAndReadAndRepliesToMessageIdStatus} status filter by message status
		 * @param {Date} fromDateTimeSent date format: yyyyMMdd
		 * @param {Date} toDateTimeSent date format: yyyyMMdd
		 * @param {Date} fromDateTimeReceived date format: yyyyMMdd
		 * @param {Date} toDateTimeReceived date format: yyyyMMdd
		 * @param {string} fromNumber phone number the message was sent from
		 * @param {string} toNumber phone number the message was sent to
		 * @param {string} message search matching message text
		 * @param {string} campaign search by campaign
		 * @param {string} dataField search by data field
		 * @param {boolean} deleted return only deleted / not deleted messages
		 * @param {boolean} read return only read / unread messages (inbox messages only)
		 * @param {string} repliesToMessageId return only inbox messages which are a reply to the message with the given message id
		 * @return {WebServiceMessages} OK
		 */
		ApiRestV1MessagesAllGetByPageSizeAndPageAndTypeAndStatusAndFromDateTimeSentAndToDateTimeSentAndFromDateTimeReceivedAndToDateTimeReceivedAndFromNumberAndToNumberAndMessageAndCampaignAndDataFieldAndDeletedAndReadAndRepliesToMessageId(pageSize: number | null | undefined, page: number | null | undefined, type: ApiRestV1MessagesAllGetByPageSizeAndPageAndTypeAndStatusAndFromDateTimeSentAndToDateTimeSentAndFromDateTimeReceivedAndToDateTimeReceivedAndFromNumberAndToNumberAndMessageAndCampaignAndDataFieldAndDeletedAndReadAndRepliesToMessageIdType | null | undefined, status: ApiRestV1MessagesAllGetByPageSizeAndPageAndTypeAndStatusAndFromDateTimeSentAndToDateTimeSentAndFromDateTimeReceivedAndToDateTimeReceivedAndFromNumberAndToNumberAndMessageAndCampaignAndDataFieldAndDeletedAndReadAndRepliesToMessageIdStatus | null | undefined, fromDateTimeSent: Date | null | undefined, toDateTimeSent: Date | null | undefined, fromDateTimeReceived: Date | null | undefined, toDateTimeReceived: Date | null | undefined, fromNumber: string | null | undefined, toNumber: string | null | undefined, message: string | null | undefined, campaign: string | null | undefined, dataField: string | null | undefined, deleted: boolean | null | undefined, read: boolean | null | undefined, repliesToMessageId: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<WebServiceMessages> {
			return this.http.get<WebServiceMessages>(this.baseUri + 'api/rest/v1/messages/all?pageSize=' + pageSize + '&page=' + page + '&type=' + type + '&status=' + status + '&fromDateTimeSent=' + fromDateTimeSent?.toISOString() + '&toDateTimeSent=' + toDateTimeSent?.toISOString() + '&fromDateTimeReceived=' + fromDateTimeReceived?.toISOString() + '&toDateTimeReceived=' + toDateTimeReceived?.toISOString() + '&fromNumber=' + (fromNumber == null ? '' : encodeURIComponent(fromNumber)) + '&toNumber=' + (toNumber == null ? '' : encodeURIComponent(toNumber)) + '&message=' + (message == null ? '' : encodeURIComponent(message)) + '&campaign=' + (campaign == null ? '' : encodeURIComponent(campaign)) + '&dataField=' + (dataField == null ? '' : encodeURIComponent(dataField)) + '&deleted=' + deleted + '&read=' + read + '&repliesToMessageId=' + (repliesToMessageId == null ? '' : encodeURIComponent(repliesToMessageId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * analyse-full
		 * Returns full analysis of message
		 * Post api/rest/v1/messages/analyse/full
		 * @param {WebServiceAnalyseMessageRequestMessageAndRecipientNumber} requestBody request
		 * @return {WebServiceAnalyseMessageResponse} Description was not specified
		 */
		ApiRestV1MessagesAnalyseFullPost(requestBody: WebServiceAnalyseMessageRequestMessageAndRecipientNumber, headersHandler?: () => HttpHeaders): Observable<WebServiceAnalyseMessageResponse> {
			return this.http.post<WebServiceAnalyseMessageResponse>(this.baseUri + 'api/rest/v1/messages/analyse/full', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * analyse-message-credit-cost
		 * Returns the number of credit which would be required to send the request message to the requested recipient number
		 * Post api/rest/v1/messages/analyse/message-credit-cost
		 * @param {WebServiceAnalyseMessageRequestMessageAndRecipientNumber} requestBody request
		 * @return {number} Description was not specified
		 */
		ApiRestV1MessagesAnalyseMessage_credit_costPost(requestBody: WebServiceAnalyseMessageRequestMessageAndRecipientNumber, headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/rest/v1/messages/analyse/message-credit-cost', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * analyse-message-encoding
		 * Returns the message encoding that would be required to send the requested message
		 * Post api/rest/v1/messages/analyse/message-encoding
		 * @param {WebServiceAnalyseMessageRequestMessageOnly} requestBody request
		 * @return {string} Description was not specified
		 */
		ApiRestV1MessagesAnalyseMessage_encodingPost(requestBody: WebServiceAnalyseMessageRequestMessageOnly, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.post(this.baseUri + 'api/rest/v1/messages/analyse/message-encoding', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }),  responseType: 'text' });
		}

		/**
		 * analyse-message-length
		 * Returns the number of characters the requested message consists of
		 * Post api/rest/v1/messages/analyse/message-length
		 * @param {WebServiceAnalyseMessageRequestMessageOnly} requestBody request
		 * @return {number} Description was not specified
		 */
		ApiRestV1MessagesAnalyseMessage_lengthPost(requestBody: WebServiceAnalyseMessageRequestMessageOnly, headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/rest/v1/messages/analyse/message-length', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * analyse-
		 * Returns details for a single message
		 * Post api/rest/v1/messages/analyse/message-length-within-max-allowed
		 * @param {WebServiceAnalyseMessageRequestMessageOnly} requestBody request
		 * @return {boolean} Description was not specified
		 */
		ApiRestV1MessagesAnalyseMessage_length_within_max_allowedPost(requestBody: WebServiceAnalyseMessageRequestMessageOnly, headersHandler?: () => HttpHeaders): Observable<boolean> {
			return this.http.post<boolean>(this.baseUri + 'api/rest/v1/messages/analyse/message-length-within-max-allowed', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * analyse-number-of-messages
		 * Returns the number of SMS parts which would be sent when sending the requested message
		 * Post api/rest/v1/messages/analyse/number-of-messages
		 * @param {WebServiceAnalyseMessageRequestMessageOnly} requestBody request
		 * @return {number} Description was not specified
		 */
		ApiRestV1MessagesAnalyseNumber_of_messagesPost(requestBody: WebServiceAnalyseMessageRequestMessageOnly, headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/rest/v1/messages/analyse/number-of-messages', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * get
		 * Returns details for a single message
		 * Get api/rest/v1/messages/{messageId}
		 * @param {string} messageId messageId
		 * @return {WebServiceMessage} OK
		 */
		ApiRestV1Messages_messageIdGet(messageId: string, headersHandler?: () => HttpHeaders): Observable<WebServiceMessage> {
			return this.http.get<WebServiceMessage>(this.baseUri + 'api/rest/v1/messages/' + (messageId == null ? '' : encodeURIComponent(messageId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * delete
		 * Deletes a  message
		 * Delete api/rest/v1/messages/{messageId}
		 * @param {string} messageId messageId
		 * @return {void} Description was not specified
		 */
		ApiRestV1Messages_messageIdDelete(messageId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/rest/v1/messages/' + (messageId == null ? '' : encodeURIComponent(messageId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * markRead
		 * Marks a  message as read
		 * Put api/rest/v1/messages/{messageId}/markRead
		 * @param {string} messageId messageId
		 * @return {WebServiceMessage} Description was not specified
		 */
		ApiRestV1Messages_messageIdMarkReadPut(messageId: string, headersHandler?: () => HttpHeaders): Observable<WebServiceMessage> {
			return this.http.put<WebServiceMessage>(this.baseUri + 'api/rest/v1/messages/' + (messageId == null ? '' : encodeURIComponent(messageId)) + '/markRead', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * markRead
		 * Marks a  message as read
		 * Post api/rest/v1/messages/{messageId}/markRead
		 * @param {string} messageId messageId
		 * @return {WebServiceMessage} Description was not specified
		 */
		ApiRestV1Messages_messageIdMarkReadPost(messageId: string, headersHandler?: () => HttpHeaders): Observable<WebServiceMessage> {
			return this.http.post<WebServiceMessage>(this.baseUri + 'api/rest/v1/messages/' + (messageId == null ? '' : encodeURIComponent(messageId)) + '/markRead', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * markUnread
		 * Marks a  message as unread
		 * Put api/rest/v1/messages/{messageId}/markUnread
		 * @param {string} messageId messageId
		 * @return {WebServiceMessage} Description was not specified
		 */
		ApiRestV1Messages_messageIdMarkUnreadPut(messageId: string, headersHandler?: () => HttpHeaders): Observable<WebServiceMessage> {
			return this.http.put<WebServiceMessage>(this.baseUri + 'api/rest/v1/messages/' + (messageId == null ? '' : encodeURIComponent(messageId)) + '/markUnread', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * markUnread
		 * Marks a  message as unread
		 * Post api/rest/v1/messages/{messageId}/markUnread
		 * @param {string} messageId messageId
		 * @return {WebServiceMessage} Description was not specified
		 */
		ApiRestV1Messages_messageIdMarkUnreadPost(messageId: string, headersHandler?: () => HttpHeaders): Observable<WebServiceMessage> {
			return this.http.post<WebServiceMessage>(this.baseUri + 'api/rest/v1/messages/' + (messageId == null ? '' : encodeURIComponent(messageId)) + '/markUnread', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * send
		 * Returns an example of the data to POST to send a single message.
		 * Get api/rest/v1/sms/send
		 * @return {WebServiceSendSmsRequest} OK
		 */
		ApiRestV1SmsSendGet(headersHandler?: () => HttpHeaders): Observable<WebServiceSendSmsRequest> {
			return this.http.get<WebServiceSendSmsRequest>(this.baseUri + 'api/rest/v1/sms/send', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * send
		 * Sends a single message. The <i>recipientNumber</i> and <i>message</i> fields are required. All other fields are optional.
		 * Post api/rest/v1/sms/send
		 * @param {WebServiceSendSmsRequest} requestBody request
		 * @return {WebServiceSendSmsResponse} Description was not specified
		 */
		ApiRestV1SmsSendPost(requestBody: WebServiceSendSmsRequest, headersHandler?: () => HttpHeaders): Observable<WebServiceSendSmsResponse> {
			return this.http.post<WebServiceSendSmsResponse>(this.baseUri + 'api/rest/v1/sms/send', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * send-bulk
		 * Returns an example of the data to POST to send multiple messages in one transaction.
		 * Get api/rest/v1/sms/send-bulk
		 * @return {WebServiceSendSmsRequests} OK
		 */
		ApiRestV1SmsSend_bulkGet(headersHandler?: () => HttpHeaders): Observable<WebServiceSendSmsRequests> {
			return this.http.get<WebServiceSendSmsRequests>(this.baseUri + 'api/rest/v1/sms/send-bulk', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * send-bulk
		 * Send multiple messages in one transaction.
		 * Post api/rest/v1/sms/send-bulk
		 * @param {WebServiceSendSmsRequests} requestBody requests
		 * @return {WebServiceSendSmsResponses} Description was not specified
		 */
		ApiRestV1SmsSend_bulkPost(requestBody: WebServiceSendSmsRequests, headersHandler?: () => HttpHeaders): Observable<WebServiceSendSmsResponses> {
			return this.http.post<WebServiceSendSmsResponses>(this.baseUri + 'api/rest/v1/sms/send-bulk', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * send-url-parameters
		 * Send a single message using URL parameters.The <i>recipientNumber</i> and <i>message</i> parameters are required. All other parameters are optional.
		 * Get api/rest/v1/sms/send-url-parameters
		 * @param {string} recipientNumber the phone number of the recipient to send to
		 * @param {string} message the message to send
		 * @param {Date} dateToSend date format: yyyyMMddHHmm
		 * @param {string} campaign optional campaign name
		 * @param {string} dataField optional extra data
		 * @return {string} OK
		 */
		ApiRestV1SmsSend_url_parametersGetByRecipientNumberAndMessageAndDateToSendAndCampaignAndDataField(recipientNumber: string, message: string, dateToSend: Date | null | undefined, campaign: string | null | undefined, dataField: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'api/rest/v1/sms/send-url-parameters?recipientNumber=' + (recipientNumber == null ? '' : encodeURIComponent(recipientNumber)) + '&message=' + (message == null ? '' : encodeURIComponent(message)) + '&dateToSend=' + dateToSend?.toISOString() + '&campaign=' + (campaign == null ? '' : encodeURIComponent(campaign)) + '&dataField=' + (dataField == null ? '' : encodeURIComponent(dataField)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * send-url-parameters
		 * Send a single message using URL parameters.The <i>recipientNumber</i> and <i>message</i> parameters are required. All other parameters are optional.
		 * Post api/rest/v1/sms/send-url-parameters
		 * @param {string} recipientNumber the phone number of the recipient to send to
		 * @param {string} message the message to send
		 * @param {Date} dateToSend date format: yyyyMMddHHmm
		 * @param {string} campaign optional campaign name
		 * @param {string} dataField optional extra data
		 * @return {string} Description was not specified
		 */
		ApiRestV1SmsSend_url_parametersPostByRecipientNumberAndMessageAndDateToSendAndCampaignAndDataField(recipientNumber: string, message: string, dateToSend: Date | null | undefined, campaign: string | null | undefined, dataField: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.post(this.baseUri + 'api/rest/v1/sms/send-url-parameters?recipientNumber=' + (recipientNumber == null ? '' : encodeURIComponent(recipientNumber)) + '&message=' + (message == null ? '' : encodeURIComponent(message)) + '&dateToSend=' + dateToSend?.toISOString() + '&campaign=' + (campaign == null ? '' : encodeURIComponent(campaign)) + '&dataField=' + (dataField == null ? '' : encodeURIComponent(dataField)), null, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * send-url
		 * Send a single message using your unique URL without having to authenticate using your email address or REST API token. The token required is the URL Sending token available on the developer setting page. The <i>recipientNumber</i> and <i>message</i> parameters are required. All other parameters are optional. Not that the token required here is
		 * Get api/rest/v1/sms/send-url/{token}
		 * @param {string} token token
		 * @param {string} recipientNumber the phone number of the recipient to send to
		 * @param {string} message the message to send
		 * @param {Date} dateToSend date format: yyyyMMddHHmm
		 * @param {string} campaign optional campaign name
		 * @param {string} dataField optional extra data
		 * @return {string} OK
		 */
		ApiRestV1SmsSend_url_tokenGetByRecipientNumberAndMessageAndDateToSendAndCampaignAndDataField(token: string, recipientNumber: string, message: string, dateToSend: Date | null | undefined, campaign: string | null | undefined, dataField: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'api/rest/v1/sms/send-url/' + (token == null ? '' : encodeURIComponent(token)) + '&recipientNumber=' + (recipientNumber == null ? '' : encodeURIComponent(recipientNumber)) + '&message=' + (message == null ? '' : encodeURIComponent(message)) + '&dateToSend=' + dateToSend?.toISOString() + '&campaign=' + (campaign == null ? '' : encodeURIComponent(campaign)) + '&dataField=' + (dataField == null ? '' : encodeURIComponent(dataField)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * send-url
		 * Send a single message using your unique URL without having to authenticate using your email address or REST API token. The token required is the URL Sending token available on the developer setting page. The <i>recipientNumber</i> and <i>message</i> parameters are required. All other parameters are optional. Not that the token required here is
		 * Post api/rest/v1/sms/send-url/{token}
		 * @param {string} token token
		 * @param {string} recipientNumber the phone number of the recipient to send to
		 * @param {string} message the message to send
		 * @param {Date} dateToSend date format: yyyyMMddHHmm
		 * @param {string} campaign optional campaign name
		 * @param {string} dataField optional extra data
		 * @return {string} Description was not specified
		 */
		ApiRestV1SmsSend_url_tokenPostByRecipientNumberAndMessageAndDateToSendAndCampaignAndDataField(token: string, recipientNumber: string, message: string, dateToSend: Date | null | undefined, campaign: string | null | undefined, dataField: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.post(this.baseUri + 'api/rest/v1/sms/send-url/' + (token == null ? '' : encodeURIComponent(token)) + '&recipientNumber=' + (recipientNumber == null ? '' : encodeURIComponent(recipientNumber)) + '&message=' + (message == null ? '' : encodeURIComponent(message)) + '&dateToSend=' + dateToSend?.toISOString() + '&campaign=' + (campaign == null ? '' : encodeURIComponent(campaign)) + '&dataField=' + (dataField == null ? '' : encodeURIComponent(dataField)), null, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * all
		 * Returns all templates
		 * Get api/rest/v1/templates/all
		 * @return {WebServiceTemplates} OK
		 */
		ApiRestV1TemplatesAllGet(headersHandler?: () => HttpHeaders): Observable<WebServiceTemplates> {
			return this.http.get<WebServiceTemplates>(this.baseUri + 'api/rest/v1/templates/all', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * get
		 * Returns details for a single template
		 * Get api/rest/v1/templates/{templateId}
		 * @param {string} templateId templateId
		 * @return {WebServiceTemplate} OK
		 */
		ApiRestV1Templates_templateIdGet(templateId: string, headersHandler?: () => HttpHeaders): Observable<WebServiceTemplate> {
			return this.http.get<WebServiceTemplate>(this.baseUri + 'api/rest/v1/templates/' + templateId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * delete
		 * Deletes a  template
		 * Delete api/rest/v1/templates/{templateId}
		 * @param {string} templateId templateId
		 * @return {void} Description was not specified
		 */
		ApiRestV1Templates_templateIdDelete(templateId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/rest/v1/templates/' + templateId, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * all
		 * Returns all voice messages
		 * Get api/rest/v1/voice/all
		 * @param {number} pageSize number of elements to return at a time
		 * @param {number} page page number
		 * @param {ApiRestV1MessagesAllGetByPageSizeAndPageAndTypeAndStatusAndFromDateTimeSentAndToDateTimeSentAndFromDateTimeReceivedAndToDateTimeReceivedAndFromNumberAndToNumberAndMessageAndCampaignAndDataFieldAndDeletedAndReadAndRepliesToMessageIdStatus} status filter by message status
		 * @param {Date} fromDateTimeSent date format: yyyyMMdd
		 * @param {Date} toDateTimeSent date format: yyyyMMdd
		 * @param {string} toNumber phone number the message was sent to
		 * @param {string} message search matching message text
		 * @param {string} campaign search by campaign
		 * @param {string} dataField search by data field
		 * @param {boolean} deleted return only deleted / not deleted messages
		 * @return {WebServiceVoiceMessages} OK
		 */
		ApiRestV1VoiceAllGetByPageSizeAndPageAndStatusAndFromDateTimeSentAndToDateTimeSentAndToNumberAndMessageAndCampaignAndDataFieldAndDeleted(pageSize: number | null | undefined, page: number | null | undefined, status: ApiRestV1MessagesAllGetByPageSizeAndPageAndTypeAndStatusAndFromDateTimeSentAndToDateTimeSentAndFromDateTimeReceivedAndToDateTimeReceivedAndFromNumberAndToNumberAndMessageAndCampaignAndDataFieldAndDeletedAndReadAndRepliesToMessageIdStatus | null | undefined, fromDateTimeSent: Date | null | undefined, toDateTimeSent: Date | null | undefined, toNumber: string | null | undefined, message: string | null | undefined, campaign: string | null | undefined, dataField: string | null | undefined, deleted: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<WebServiceVoiceMessages> {
			return this.http.get<WebServiceVoiceMessages>(this.baseUri + 'api/rest/v1/voice/all?pageSize=' + pageSize + '&page=' + page + '&status=' + status + '&fromDateTimeSent=' + fromDateTimeSent?.toISOString() + '&toDateTimeSent=' + toDateTimeSent?.toISOString() + '&toNumber=' + (toNumber == null ? '' : encodeURIComponent(toNumber)) + '&message=' + (message == null ? '' : encodeURIComponent(message)) + '&campaign=' + (campaign == null ? '' : encodeURIComponent(campaign)) + '&dataField=' + (dataField == null ? '' : encodeURIComponent(dataField)) + '&deleted=' + deleted, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * single-text
		 * Send a single text voice message to one recipient
		 * Post api/rest/v1/voice/single-text
		 * @param {WebServiceVoiceMessageSendSingleTextRequest} requestBody request
		 * @return {WebServiceSendVoiceMessageResponse} Description was not specified
		 */
		ApiRestV1VoiceSingle_textPost(requestBody: WebServiceVoiceMessageSendSingleTextRequest, headersHandler?: () => HttpHeaders): Observable<WebServiceSendVoiceMessageResponse> {
			return this.http.post<WebServiceSendVoiceMessageResponse>(this.baseUri + 'api/rest/v1/voice/single-text', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * get
		 * Returns details for a single message
		 * Get api/rest/v1/voice/{messageId}
		 * @param {string} messageId messageId
		 * @return {WebServiceVoiceMessage} OK
		 */
		ApiRestV1Voice_messageIdGet(messageId: string, headersHandler?: () => HttpHeaders): Observable<WebServiceVoiceMessage> {
			return this.http.get<WebServiceVoiceMessage>(this.baseUri + 'api/rest/v1/voice/' + (messageId == null ? '' : encodeURIComponent(messageId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * delete
		 * Deletes a  message
		 * Delete api/rest/v1/voice/{messageId}
		 * @param {string} messageId messageId
		 * @return {void} Description was not specified
		 */
		ApiRestV1Voice_messageIdDelete(messageId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/rest/v1/voice/' + (messageId == null ? '' : encodeURIComponent(messageId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

	export enum ApiRestV1MessagesAllGetByPageSizeAndPageAndTypeAndStatusAndFromDateTimeSentAndToDateTimeSentAndFromDateTimeReceivedAndToDateTimeReceivedAndFromNumberAndToNumberAndMessageAndCampaignAndDataFieldAndDeletedAndReadAndRepliesToMessageIdType { OUTBOUND = 0, INBOUND = 1 }

	export enum ApiRestV1MessagesAllGetByPageSizeAndPageAndTypeAndStatusAndFromDateTimeSentAndToDateTimeSentAndFromDateTimeReceivedAndToDateTimeReceivedAndFromNumberAndToNumberAndMessageAndCampaignAndDataFieldAndDeletedAndReadAndRepliesToMessageIdStatus { SCHEDULED = 0, UNKNOWN = 1, SENT = 2, FAILED = 3, FAILED_REFUNDED = 4, FAILED_OPTOUT = 5, DELIVERED = 6 }

}

