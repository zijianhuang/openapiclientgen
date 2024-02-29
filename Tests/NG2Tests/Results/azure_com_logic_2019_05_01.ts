import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The AS2 agreement acknowledgement connection settings. */
	export interface AS2AcknowledgementConnectionSettings {

		/**
		 * Indicates whether to ignore mismatch in certificate name.
		 * Required
		 */
		ignoreCertificateNameMismatch: boolean;

		/**
		 * Indicates whether to keep the connection alive.
		 * Required
		 */
		keepHttpConnectionAlive: boolean;

		/**
		 * Indicates whether to support HTTP status code 'CONTINUE'.
		 * Required
		 */
		supportHttpStatusCodeContinue: boolean;

		/**
		 * Indicates whether to unfold the HTTP headers.
		 * Required
		 */
		unfoldHttpHeaders: boolean;
	}

	/** The AS2 agreement acknowledgement connection settings. */
	export interface AS2AcknowledgementConnectionSettingsFormProperties {

		/**
		 * Indicates whether to ignore mismatch in certificate name.
		 * Required
		 */
		ignoreCertificateNameMismatch: FormControl<boolean | null | undefined>,

		/**
		 * Indicates whether to keep the connection alive.
		 * Required
		 */
		keepHttpConnectionAlive: FormControl<boolean | null | undefined>,

		/**
		 * Indicates whether to support HTTP status code 'CONTINUE'.
		 * Required
		 */
		supportHttpStatusCodeContinue: FormControl<boolean | null | undefined>,

		/**
		 * Indicates whether to unfold the HTTP headers.
		 * Required
		 */
		unfoldHttpHeaders: FormControl<boolean | null | undefined>,
	}
	export function CreateAS2AcknowledgementConnectionSettingsFormGroup() {
		return new FormGroup<AS2AcknowledgementConnectionSettingsFormProperties>({
			ignoreCertificateNameMismatch: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			keepHttpConnectionAlive: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			supportHttpStatusCodeContinue: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			unfoldHttpHeaders: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The integration account AS2 agreement content. */
	export interface AS2AgreementContent {

		/**
		 * The integration account AS2 one-way agreement.
		 * Required
		 */
		receiveAgreement: AS2OneWayAgreement;

		/**
		 * The integration account AS2 one-way agreement.
		 * Required
		 */
		sendAgreement: AS2OneWayAgreement;
	}

	/** The integration account AS2 agreement content. */
	export interface AS2AgreementContentFormProperties {
	}
	export function CreateAS2AgreementContentFormGroup() {
		return new FormGroup<AS2AgreementContentFormProperties>({
		});

	}


	/** The integration account AS2 one-way agreement. */
	export interface AS2OneWayAgreement {

		/**
		 * The AS2 agreement protocol settings.
		 * Required
		 */
		protocolSettings: AS2ProtocolSettings;

		/**
		 * The integration account partner's business identity.
		 * Required
		 */
		receiverBusinessIdentity: BusinessIdentity;

		/**
		 * The integration account partner's business identity.
		 * Required
		 */
		senderBusinessIdentity: BusinessIdentity;
	}

	/** The integration account AS2 one-way agreement. */
	export interface AS2OneWayAgreementFormProperties {
	}
	export function CreateAS2OneWayAgreementFormGroup() {
		return new FormGroup<AS2OneWayAgreementFormProperties>({
		});

	}


	/** The AS2 agreement protocol settings. */
	export interface AS2ProtocolSettings {

		/**
		 * The AS2 agreement acknowledgement connection settings.
		 * Required
		 */
		acknowledgementConnectionSettings: AS2AcknowledgementConnectionSettings;

		/**
		 * The AS2 agreement envelope settings.
		 * Required
		 */
		envelopeSettings: AS2EnvelopeSettings;

		/**
		 * The AS2 agreement error settings.
		 * Required
		 */
		errorSettings: AS2ErrorSettings;

		/**
		 * The AS2 agreement mdn settings.
		 * Required
		 */
		mdnSettings: AS2MdnSettings;

		/**
		 * The AS2 agreement message connection settings.
		 * Required
		 */
		messageConnectionSettings: AS2MessageConnectionSettings;

		/**
		 * The AS2 agreement security settings.
		 * Required
		 */
		securitySettings: AS2SecuritySettings;

		/**
		 * The AS2 agreement validation settings.
		 * Required
		 */
		validationSettings: AS2ValidationSettings;
	}

	/** The AS2 agreement protocol settings. */
	export interface AS2ProtocolSettingsFormProperties {
	}
	export function CreateAS2ProtocolSettingsFormGroup() {
		return new FormGroup<AS2ProtocolSettingsFormProperties>({
		});

	}


	/** The AS2 agreement envelope settings. */
	export interface AS2EnvelopeSettings {

		/**
		 * The value indicating whether to auto generate file name.
		 * Required
		 */
		autogenerateFileName: boolean;

		/**
		 * The template for file name.
		 * Required
		 */
		fileNameTemplate: string;

		/**
		 * The message content type.
		 * Required
		 */
		messageContentType: string;

		/**
		 * The value indicating whether to suspend message on file name generation error.
		 * Required
		 */
		suspendMessageOnFileNameGenerationError: boolean;

		/**
		 * The value indicating whether to transmit file name in mime header.
		 * Required
		 */
		transmitFileNameInMimeHeader: boolean;
	}

	/** The AS2 agreement envelope settings. */
	export interface AS2EnvelopeSettingsFormProperties {

		/**
		 * The value indicating whether to auto generate file name.
		 * Required
		 */
		autogenerateFileName: FormControl<boolean | null | undefined>,

		/**
		 * The template for file name.
		 * Required
		 */
		fileNameTemplate: FormControl<string | null | undefined>,

		/**
		 * The message content type.
		 * Required
		 */
		messageContentType: FormControl<string | null | undefined>,

		/**
		 * The value indicating whether to suspend message on file name generation error.
		 * Required
		 */
		suspendMessageOnFileNameGenerationError: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to transmit file name in mime header.
		 * Required
		 */
		transmitFileNameInMimeHeader: FormControl<boolean | null | undefined>,
	}
	export function CreateAS2EnvelopeSettingsFormGroup() {
		return new FormGroup<AS2EnvelopeSettingsFormProperties>({
			autogenerateFileName: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			fileNameTemplate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			messageContentType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			suspendMessageOnFileNameGenerationError: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			transmitFileNameInMimeHeader: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The AS2 agreement error settings. */
	export interface AS2ErrorSettings {

		/**
		 * The value indicating whether to resend message If MDN is not received.
		 * Required
		 */
		resendIfMDNNotReceived: boolean;

		/**
		 * The value indicating whether to suspend duplicate message.
		 * Required
		 */
		suspendDuplicateMessage: boolean;
	}

	/** The AS2 agreement error settings. */
	export interface AS2ErrorSettingsFormProperties {

		/**
		 * The value indicating whether to resend message If MDN is not received.
		 * Required
		 */
		resendIfMDNNotReceived: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to suspend duplicate message.
		 * Required
		 */
		suspendDuplicateMessage: FormControl<boolean | null | undefined>,
	}
	export function CreateAS2ErrorSettingsFormGroup() {
		return new FormGroup<AS2ErrorSettingsFormProperties>({
			resendIfMDNNotReceived: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			suspendDuplicateMessage: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The AS2 agreement mdn settings. */
	export interface AS2MdnSettings {

		/** The disposition notification to header value. */
		dispositionNotificationTo?: string | null;

		/** The MDN text. */
		mdnText?: string | null;

		/**
		 * The signing or hashing algorithm.
		 * Required
		 */
		micHashingAlgorithm: AS2MdnSettingsMicHashingAlgorithm;

		/**
		 * The value indicating whether to send or request a MDN.
		 * Required
		 */
		needMDN: boolean;

		/** The receipt delivery URL. */
		receiptDeliveryUrl?: string | null;

		/**
		 * The value indicating whether to send inbound MDN to message box.
		 * Required
		 */
		sendInboundMDNToMessageBox: boolean;

		/**
		 * The value indicating whether to send the asynchronous MDN.
		 * Required
		 */
		sendMDNAsynchronously: boolean;

		/**
		 * The value indicating whether the MDN needs to be signed or not.
		 * Required
		 */
		signMDN: boolean;

		/**
		 * The value indicating whether to sign the outbound MDN if optional.
		 * Required
		 */
		signOutboundMDNIfOptional: boolean;
	}

	/** The AS2 agreement mdn settings. */
	export interface AS2MdnSettingsFormProperties {

		/** The disposition notification to header value. */
		dispositionNotificationTo: FormControl<string | null | undefined>,

		/** The MDN text. */
		mdnText: FormControl<string | null | undefined>,

		/**
		 * The signing or hashing algorithm.
		 * Required
		 */
		micHashingAlgorithm: FormControl<AS2MdnSettingsMicHashingAlgorithm | null | undefined>,

		/**
		 * The value indicating whether to send or request a MDN.
		 * Required
		 */
		needMDN: FormControl<boolean | null | undefined>,

		/** The receipt delivery URL. */
		receiptDeliveryUrl: FormControl<string | null | undefined>,

		/**
		 * The value indicating whether to send inbound MDN to message box.
		 * Required
		 */
		sendInboundMDNToMessageBox: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to send the asynchronous MDN.
		 * Required
		 */
		sendMDNAsynchronously: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether the MDN needs to be signed or not.
		 * Required
		 */
		signMDN: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to sign the outbound MDN if optional.
		 * Required
		 */
		signOutboundMDNIfOptional: FormControl<boolean | null | undefined>,
	}
	export function CreateAS2MdnSettingsFormGroup() {
		return new FormGroup<AS2MdnSettingsFormProperties>({
			dispositionNotificationTo: new FormControl<string | null | undefined>(undefined),
			mdnText: new FormControl<string | null | undefined>(undefined),
			micHashingAlgorithm: new FormControl<AS2MdnSettingsMicHashingAlgorithm | null | undefined>(undefined, [Validators.required]),
			needMDN: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			receiptDeliveryUrl: new FormControl<string | null | undefined>(undefined),
			sendInboundMDNToMessageBox: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			sendMDNAsynchronously: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			signMDN: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			signOutboundMDNIfOptional: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AS2MdnSettingsMicHashingAlgorithm { NotSpecified = 'NotSpecified', None = 'None', MD5 = 'MD5', SHA1 = 'SHA1', SHA2256 = 'SHA2256', SHA2384 = 'SHA2384', SHA2512 = 'SHA2512' }


	/** The AS2 agreement message connection settings. */
	export interface AS2MessageConnectionSettings {

		/**
		 * The value indicating whether to ignore mismatch in certificate name.
		 * Required
		 */
		ignoreCertificateNameMismatch: boolean;

		/**
		 * The value indicating whether to keep the connection alive.
		 * Required
		 */
		keepHttpConnectionAlive: boolean;

		/**
		 * The value indicating whether to support HTTP status code 'CONTINUE'.
		 * Required
		 */
		supportHttpStatusCodeContinue: boolean;

		/**
		 * The value indicating whether to unfold the HTTP headers.
		 * Required
		 */
		unfoldHttpHeaders: boolean;
	}

	/** The AS2 agreement message connection settings. */
	export interface AS2MessageConnectionSettingsFormProperties {

		/**
		 * The value indicating whether to ignore mismatch in certificate name.
		 * Required
		 */
		ignoreCertificateNameMismatch: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to keep the connection alive.
		 * Required
		 */
		keepHttpConnectionAlive: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to support HTTP status code 'CONTINUE'.
		 * Required
		 */
		supportHttpStatusCodeContinue: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to unfold the HTTP headers.
		 * Required
		 */
		unfoldHttpHeaders: FormControl<boolean | null | undefined>,
	}
	export function CreateAS2MessageConnectionSettingsFormGroup() {
		return new FormGroup<AS2MessageConnectionSettingsFormProperties>({
			ignoreCertificateNameMismatch: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			keepHttpConnectionAlive: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			supportHttpStatusCodeContinue: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			unfoldHttpHeaders: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The AS2 agreement security settings. */
	export interface AS2SecuritySettings {

		/**
		 * The value indicating whether to enable NRR for inbound decoded messages.
		 * Required
		 */
		enableNRRForInboundDecodedMessages: boolean;

		/**
		 * The value indicating whether to enable NRR for inbound encoded messages.
		 * Required
		 */
		enableNRRForInboundEncodedMessages: boolean;

		/**
		 * The value indicating whether to enable NRR for inbound MDN.
		 * Required
		 */
		enableNRRForInboundMDN: boolean;

		/**
		 * The value indicating whether to enable NRR for outbound decoded messages.
		 * Required
		 */
		enableNRRForOutboundDecodedMessages: boolean;

		/**
		 * The value indicating whether to enable NRR for outbound encoded messages.
		 * Required
		 */
		enableNRRForOutboundEncodedMessages: boolean;

		/**
		 * The value indicating whether to enable NRR for outbound MDN.
		 * Required
		 */
		enableNRRForOutboundMDN: boolean;

		/** The name of the encryption certificate. */
		encryptionCertificateName?: string | null;

		/**
		 * The value indicating whether to send or request a MDN.
		 * Required
		 */
		overrideGroupSigningCertificate: boolean;

		/** The Sha2 algorithm format. Valid values are Sha2, ShaHashSize, ShaHyphenHashSize, Sha2UnderscoreHashSize. */
		sha2AlgorithmFormat?: string | null;

		/** The name of the signing certificate. */
		signingCertificateName?: string | null;
	}

	/** The AS2 agreement security settings. */
	export interface AS2SecuritySettingsFormProperties {

		/**
		 * The value indicating whether to enable NRR for inbound decoded messages.
		 * Required
		 */
		enableNRRForInboundDecodedMessages: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to enable NRR for inbound encoded messages.
		 * Required
		 */
		enableNRRForInboundEncodedMessages: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to enable NRR for inbound MDN.
		 * Required
		 */
		enableNRRForInboundMDN: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to enable NRR for outbound decoded messages.
		 * Required
		 */
		enableNRRForOutboundDecodedMessages: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to enable NRR for outbound encoded messages.
		 * Required
		 */
		enableNRRForOutboundEncodedMessages: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to enable NRR for outbound MDN.
		 * Required
		 */
		enableNRRForOutboundMDN: FormControl<boolean | null | undefined>,

		/** The name of the encryption certificate. */
		encryptionCertificateName: FormControl<string | null | undefined>,

		/**
		 * The value indicating whether to send or request a MDN.
		 * Required
		 */
		overrideGroupSigningCertificate: FormControl<boolean | null | undefined>,

		/** The Sha2 algorithm format. Valid values are Sha2, ShaHashSize, ShaHyphenHashSize, Sha2UnderscoreHashSize. */
		sha2AlgorithmFormat: FormControl<string | null | undefined>,

		/** The name of the signing certificate. */
		signingCertificateName: FormControl<string | null | undefined>,
	}
	export function CreateAS2SecuritySettingsFormGroup() {
		return new FormGroup<AS2SecuritySettingsFormProperties>({
			enableNRRForInboundDecodedMessages: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			enableNRRForInboundEncodedMessages: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			enableNRRForInboundMDN: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			enableNRRForOutboundDecodedMessages: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			enableNRRForOutboundEncodedMessages: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			enableNRRForOutboundMDN: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			encryptionCertificateName: new FormControl<string | null | undefined>(undefined),
			overrideGroupSigningCertificate: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			sha2AlgorithmFormat: new FormControl<string | null | undefined>(undefined),
			signingCertificateName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The AS2 agreement validation settings. */
	export interface AS2ValidationSettings {

		/**
		 * The value indicating whether to check for certificate revocation list on receive.
		 * Required
		 */
		checkCertificateRevocationListOnReceive: boolean;

		/**
		 * The value indicating whether to check for certificate revocation list on send.
		 * Required
		 */
		checkCertificateRevocationListOnSend: boolean;

		/**
		 * The value indicating whether to check for duplicate message.
		 * Required
		 */
		checkDuplicateMessage: boolean;

		/**
		 * The value indicating whether the message has to be compressed.
		 * Required
		 */
		compressMessage: boolean;

		/**
		 * The value indicating whether the message has to be encrypted.
		 * Required
		 */
		encryptMessage: boolean;

		/**
		 * The encryption algorithm.
		 * Required
		 */
		encryptionAlgorithm: AS2ValidationSettingsEncryptionAlgorithm;

		/**
		 * The number of days to look back for duplicate interchange.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		interchangeDuplicatesValidityDays: number;

		/**
		 * The value indicating whether to override incoming message properties with those in agreement.
		 * Required
		 */
		overrideMessageProperties: boolean;

		/**
		 * The value indicating whether the message has to be signed.
		 * Required
		 */
		signMessage: boolean;

		/** The signing or hashing algorithm. */
		signingAlgorithm?: AS2ValidationSettingsSigningAlgorithm | null;
	}

	/** The AS2 agreement validation settings. */
	export interface AS2ValidationSettingsFormProperties {

		/**
		 * The value indicating whether to check for certificate revocation list on receive.
		 * Required
		 */
		checkCertificateRevocationListOnReceive: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to check for certificate revocation list on send.
		 * Required
		 */
		checkCertificateRevocationListOnSend: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to check for duplicate message.
		 * Required
		 */
		checkDuplicateMessage: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether the message has to be compressed.
		 * Required
		 */
		compressMessage: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether the message has to be encrypted.
		 * Required
		 */
		encryptMessage: FormControl<boolean | null | undefined>,

		/**
		 * The encryption algorithm.
		 * Required
		 */
		encryptionAlgorithm: FormControl<AS2ValidationSettingsEncryptionAlgorithm | null | undefined>,

		/**
		 * The number of days to look back for duplicate interchange.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		interchangeDuplicatesValidityDays: FormControl<number | null | undefined>,

		/**
		 * The value indicating whether to override incoming message properties with those in agreement.
		 * Required
		 */
		overrideMessageProperties: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether the message has to be signed.
		 * Required
		 */
		signMessage: FormControl<boolean | null | undefined>,

		/** The signing or hashing algorithm. */
		signingAlgorithm: FormControl<AS2ValidationSettingsSigningAlgorithm | null | undefined>,
	}
	export function CreateAS2ValidationSettingsFormGroup() {
		return new FormGroup<AS2ValidationSettingsFormProperties>({
			checkCertificateRevocationListOnReceive: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			checkCertificateRevocationListOnSend: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			checkDuplicateMessage: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			compressMessage: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			encryptMessage: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			encryptionAlgorithm: new FormControl<AS2ValidationSettingsEncryptionAlgorithm | null | undefined>(undefined, [Validators.required]),
			interchangeDuplicatesValidityDays: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			overrideMessageProperties: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			signMessage: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			signingAlgorithm: new FormControl<AS2ValidationSettingsSigningAlgorithm | null | undefined>(undefined),
		});

	}

	export enum AS2ValidationSettingsEncryptionAlgorithm { NotSpecified = 'NotSpecified', None = 'None', DES3 = 'DES3', RC2 = 'RC2', AES128 = 'AES128', AES192 = 'AES192', AES256 = 'AES256' }

	export enum AS2ValidationSettingsSigningAlgorithm { NotSpecified = 'NotSpecified', Default = 'Default', SHA1 = 'SHA1', SHA2256 = 'SHA2256', SHA2384 = 'SHA2384', SHA2512 = 'SHA2512' }


	/** The integration account partner's business identity. */
	export interface BusinessIdentity {

		/**
		 * The business identity qualifier e.g. as2identity, ZZ, ZZZ, 31, 32
		 * Required
		 */
		qualifier: string;

		/**
		 * The user defined business identity value.
		 * Required
		 */
		value: string;
	}

	/** The integration account partner's business identity. */
	export interface BusinessIdentityFormProperties {

		/**
		 * The business identity qualifier e.g. as2identity, ZZ, ZZZ, 31, 32
		 * Required
		 */
		qualifier: FormControl<string | null | undefined>,

		/**
		 * The user defined business identity value.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateBusinessIdentityFormGroup() {
		return new FormGroup<BusinessIdentityFormProperties>({
			qualifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The integration account agreement content. */
	export interface AgreementContent {

		/** The integration account AS2 agreement content. */
		aS2?: AS2AgreementContent;

		/** The Edifact agreement content. */
		edifact?: EdifactAgreementContent;

		/** The X12 agreement content. */
		x12?: X12AgreementContent;
	}

	/** The integration account agreement content. */
	export interface AgreementContentFormProperties {
	}
	export function CreateAgreementContentFormGroup() {
		return new FormGroup<AgreementContentFormProperties>({
		});

	}


	/** The Edifact agreement content. */
	export interface EdifactAgreementContent {

		/**
		 * The Edifact one way agreement.
		 * Required
		 */
		receiveAgreement: EdifactOneWayAgreement;

		/**
		 * The Edifact one way agreement.
		 * Required
		 */
		sendAgreement: EdifactOneWayAgreement;
	}

	/** The Edifact agreement content. */
	export interface EdifactAgreementContentFormProperties {
	}
	export function CreateEdifactAgreementContentFormGroup() {
		return new FormGroup<EdifactAgreementContentFormProperties>({
		});

	}


	/** The Edifact one way agreement. */
	export interface EdifactOneWayAgreement {

		/**
		 * The Edifact agreement protocol settings.
		 * Required
		 */
		protocolSettings: EdifactProtocolSettings;

		/**
		 * The integration account partner's business identity.
		 * Required
		 */
		receiverBusinessIdentity: BusinessIdentity;

		/**
		 * The integration account partner's business identity.
		 * Required
		 */
		senderBusinessIdentity: BusinessIdentity;
	}

	/** The Edifact one way agreement. */
	export interface EdifactOneWayAgreementFormProperties {
	}
	export function CreateEdifactOneWayAgreementFormGroup() {
		return new FormGroup<EdifactOneWayAgreementFormProperties>({
		});

	}


	/** The Edifact agreement protocol settings. */
	export interface EdifactProtocolSettings {

		/**
		 * The Edifact agreement acknowledgement settings.
		 * Required
		 */
		acknowledgementSettings: EdifactAcknowledgementSettings;

		/** The EDIFACT delimiter override settings. */
		edifactDelimiterOverrides?: Array<EdifactDelimiterOverride>;

		/** The EDIFACT envelope override settings. */
		envelopeOverrides?: Array<EdifactEnvelopeOverride>;

		/**
		 * The Edifact agreement envelope settings.
		 * Required
		 */
		envelopeSettings: EdifactEnvelopeSettings;

		/**
		 * The Edifact agreement framing settings.
		 * Required
		 */
		framingSettings: EdifactFramingSettings;

		/**
		 * The Edifact message filter for odata query.
		 * Required
		 */
		messageFilter: EdifactMessageFilter;

		/** The EDIFACT message filter list. */
		messageFilterList?: Array<EdifactMessageIdentifier>;

		/**
		 * The Edifact agreement protocol settings.
		 * Required
		 */
		processingSettings: EdifactProcessingSettings;

		/**
		 * The EDIFACT schema references.
		 * Required
		 */
		schemaReferences: Array<EdifactSchemaReference>;

		/** The EDIFACT validation override settings. */
		validationOverrides?: Array<EdifactValidationOverride>;

		/**
		 * The Edifact agreement validation settings.
		 * Required
		 */
		validationSettings: EdifactValidationSettings;
	}

	/** The Edifact agreement protocol settings. */
	export interface EdifactProtocolSettingsFormProperties {
	}
	export function CreateEdifactProtocolSettingsFormGroup() {
		return new FormGroup<EdifactProtocolSettingsFormProperties>({
		});

	}


	/** The Edifact agreement acknowledgement settings. */
	export interface EdifactAcknowledgementSettings {

		/**
		 * The acknowledgement control number lower bound.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		acknowledgementControlNumberLowerBound: number;

		/** The acknowledgement control number prefix. */
		acknowledgementControlNumberPrefix?: string | null;

		/** The acknowledgement control number suffix. */
		acknowledgementControlNumberSuffix?: string | null;

		/**
		 * The acknowledgement control number upper bound.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		acknowledgementControlNumberUpperBound: number;

		/**
		 * The value indicating whether to batch functional acknowledgements.
		 * Required
		 */
		batchFunctionalAcknowledgements: boolean;

		/**
		 * The value indicating whether to batch the technical acknowledgements.
		 * Required
		 */
		batchTechnicalAcknowledgements: boolean;

		/**
		 * The value indicating whether functional acknowledgement is needed.
		 * Required
		 */
		needFunctionalAcknowledgement: boolean;

		/**
		 * The value indicating whether a loop is needed for valid messages.
		 * Required
		 */
		needLoopForValidMessages: boolean;

		/**
		 * The value indicating whether technical acknowledgement is needed.
		 * Required
		 */
		needTechnicalAcknowledgement: boolean;

		/**
		 * The value indicating whether to rollover acknowledgement control number.
		 * Required
		 */
		rolloverAcknowledgementControlNumber: boolean;

		/**
		 * The value indicating whether to send synchronous acknowledgement.
		 * Required
		 */
		sendSynchronousAcknowledgement: boolean;
	}

	/** The Edifact agreement acknowledgement settings. */
	export interface EdifactAcknowledgementSettingsFormProperties {

		/**
		 * The acknowledgement control number lower bound.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		acknowledgementControlNumberLowerBound: FormControl<number | null | undefined>,

		/** The acknowledgement control number prefix. */
		acknowledgementControlNumberPrefix: FormControl<string | null | undefined>,

		/** The acknowledgement control number suffix. */
		acknowledgementControlNumberSuffix: FormControl<string | null | undefined>,

		/**
		 * The acknowledgement control number upper bound.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		acknowledgementControlNumberUpperBound: FormControl<number | null | undefined>,

		/**
		 * The value indicating whether to batch functional acknowledgements.
		 * Required
		 */
		batchFunctionalAcknowledgements: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to batch the technical acknowledgements.
		 * Required
		 */
		batchTechnicalAcknowledgements: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether functional acknowledgement is needed.
		 * Required
		 */
		needFunctionalAcknowledgement: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether a loop is needed for valid messages.
		 * Required
		 */
		needLoopForValidMessages: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether technical acknowledgement is needed.
		 * Required
		 */
		needTechnicalAcknowledgement: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to rollover acknowledgement control number.
		 * Required
		 */
		rolloverAcknowledgementControlNumber: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to send synchronous acknowledgement.
		 * Required
		 */
		sendSynchronousAcknowledgement: FormControl<boolean | null | undefined>,
	}
	export function CreateEdifactAcknowledgementSettingsFormGroup() {
		return new FormGroup<EdifactAcknowledgementSettingsFormProperties>({
			acknowledgementControlNumberLowerBound: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			acknowledgementControlNumberPrefix: new FormControl<string | null | undefined>(undefined),
			acknowledgementControlNumberSuffix: new FormControl<string | null | undefined>(undefined),
			acknowledgementControlNumberUpperBound: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			batchFunctionalAcknowledgements: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			batchTechnicalAcknowledgements: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			needFunctionalAcknowledgement: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			needLoopForValidMessages: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			needTechnicalAcknowledgement: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			rolloverAcknowledgementControlNumber: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			sendSynchronousAcknowledgement: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The Edifact delimiter override settings. */
	export interface EdifactDelimiterOverride {

		/**
		 * The component separator.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		componentSeparator: number;

		/**
		 * The data element separator.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dataElementSeparator: number;

		/**
		 * The edifact decimal indicator.
		 * Required
		 */
		decimalPointIndicator: EdifactDelimiterOverrideDecimalPointIndicator;

		/** The message association assigned code. */
		messageAssociationAssignedCode?: string | null;

		/** The message id. */
		messageId?: string | null;

		/** The message release. */
		messageRelease?: string | null;

		/** The message version. */
		messageVersion?: string | null;

		/**
		 * The release indicator.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		releaseIndicator: number;

		/**
		 * The repetition separator.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		repetitionSeparator: number;

		/**
		 * The segment terminator.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		segmentTerminator: number;

		/**
		 * The segment terminator suffix.
		 * Required
		 */
		segmentTerminatorSuffix: EdifactDelimiterOverrideSegmentTerminatorSuffix;

		/** The target namespace on which this delimiter settings has to be applied. */
		targetNamespace?: string | null;
	}

	/** The Edifact delimiter override settings. */
	export interface EdifactDelimiterOverrideFormProperties {

		/**
		 * The component separator.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		componentSeparator: FormControl<number | null | undefined>,

		/**
		 * The data element separator.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dataElementSeparator: FormControl<number | null | undefined>,

		/**
		 * The edifact decimal indicator.
		 * Required
		 */
		decimalPointIndicator: FormControl<EdifactDelimiterOverrideDecimalPointIndicator | null | undefined>,

		/** The message association assigned code. */
		messageAssociationAssignedCode: FormControl<string | null | undefined>,

		/** The message id. */
		messageId: FormControl<string | null | undefined>,

		/** The message release. */
		messageRelease: FormControl<string | null | undefined>,

		/** The message version. */
		messageVersion: FormControl<string | null | undefined>,

		/**
		 * The release indicator.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		releaseIndicator: FormControl<number | null | undefined>,

		/**
		 * The repetition separator.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		repetitionSeparator: FormControl<number | null | undefined>,

		/**
		 * The segment terminator.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		segmentTerminator: FormControl<number | null | undefined>,

		/**
		 * The segment terminator suffix.
		 * Required
		 */
		segmentTerminatorSuffix: FormControl<EdifactDelimiterOverrideSegmentTerminatorSuffix | null | undefined>,

		/** The target namespace on which this delimiter settings has to be applied. */
		targetNamespace: FormControl<string | null | undefined>,
	}
	export function CreateEdifactDelimiterOverrideFormGroup() {
		return new FormGroup<EdifactDelimiterOverrideFormProperties>({
			componentSeparator: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			dataElementSeparator: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			decimalPointIndicator: new FormControl<EdifactDelimiterOverrideDecimalPointIndicator | null | undefined>(undefined, [Validators.required]),
			messageAssociationAssignedCode: new FormControl<string | null | undefined>(undefined),
			messageId: new FormControl<string | null | undefined>(undefined),
			messageRelease: new FormControl<string | null | undefined>(undefined),
			messageVersion: new FormControl<string | null | undefined>(undefined),
			releaseIndicator: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			repetitionSeparator: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			segmentTerminator: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			segmentTerminatorSuffix: new FormControl<EdifactDelimiterOverrideSegmentTerminatorSuffix | null | undefined>(undefined, [Validators.required]),
			targetNamespace: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EdifactDelimiterOverrideDecimalPointIndicator { NotSpecified = 'NotSpecified', Comma = 'Comma', Decimal = 'Decimal' }

	export enum EdifactDelimiterOverrideSegmentTerminatorSuffix { NotSpecified = 'NotSpecified', None = 'None', CR = 'CR', LF = 'LF', CRLF = 'CRLF' }


	/** The Edifact envelope override settings. */
	export interface EdifactEnvelopeOverride {

		/** The application password. */
		applicationPassword?: string | null;

		/** The association assigned code. */
		associationAssignedCode?: string | null;

		/** The controlling agency code. */
		controllingAgencyCode?: string | null;

		/** The functional group id. */
		functionalGroupId?: string | null;

		/** The group header message release. */
		groupHeaderMessageRelease?: string | null;

		/** The group header message version. */
		groupHeaderMessageVersion?: string | null;

		/** The message association assigned code. */
		messageAssociationAssignedCode?: string | null;

		/** The message id on which this envelope settings has to be applied. */
		messageId?: string | null;

		/** The message release version on which this envelope settings has to be applied. */
		messageRelease?: string | null;

		/** The message version on which this envelope settings has to be applied. */
		messageVersion?: string | null;

		/** The receiver application id. */
		receiverApplicationId?: string | null;

		/** The receiver application qualifier. */
		receiverApplicationQualifier?: string | null;

		/** The sender application id. */
		senderApplicationId?: string | null;

		/** The sender application qualifier. */
		senderApplicationQualifier?: string | null;

		/** The target namespace on which this envelope settings has to be applied. */
		targetNamespace?: string | null;
	}

	/** The Edifact envelope override settings. */
	export interface EdifactEnvelopeOverrideFormProperties {

		/** The application password. */
		applicationPassword: FormControl<string | null | undefined>,

		/** The association assigned code. */
		associationAssignedCode: FormControl<string | null | undefined>,

		/** The controlling agency code. */
		controllingAgencyCode: FormControl<string | null | undefined>,

		/** The functional group id. */
		functionalGroupId: FormControl<string | null | undefined>,

		/** The group header message release. */
		groupHeaderMessageRelease: FormControl<string | null | undefined>,

		/** The group header message version. */
		groupHeaderMessageVersion: FormControl<string | null | undefined>,

		/** The message association assigned code. */
		messageAssociationAssignedCode: FormControl<string | null | undefined>,

		/** The message id on which this envelope settings has to be applied. */
		messageId: FormControl<string | null | undefined>,

		/** The message release version on which this envelope settings has to be applied. */
		messageRelease: FormControl<string | null | undefined>,

		/** The message version on which this envelope settings has to be applied. */
		messageVersion: FormControl<string | null | undefined>,

		/** The receiver application id. */
		receiverApplicationId: FormControl<string | null | undefined>,

		/** The receiver application qualifier. */
		receiverApplicationQualifier: FormControl<string | null | undefined>,

		/** The sender application id. */
		senderApplicationId: FormControl<string | null | undefined>,

		/** The sender application qualifier. */
		senderApplicationQualifier: FormControl<string | null | undefined>,

		/** The target namespace on which this envelope settings has to be applied. */
		targetNamespace: FormControl<string | null | undefined>,
	}
	export function CreateEdifactEnvelopeOverrideFormGroup() {
		return new FormGroup<EdifactEnvelopeOverrideFormProperties>({
			applicationPassword: new FormControl<string | null | undefined>(undefined),
			associationAssignedCode: new FormControl<string | null | undefined>(undefined),
			controllingAgencyCode: new FormControl<string | null | undefined>(undefined),
			functionalGroupId: new FormControl<string | null | undefined>(undefined),
			groupHeaderMessageRelease: new FormControl<string | null | undefined>(undefined),
			groupHeaderMessageVersion: new FormControl<string | null | undefined>(undefined),
			messageAssociationAssignedCode: new FormControl<string | null | undefined>(undefined),
			messageId: new FormControl<string | null | undefined>(undefined),
			messageRelease: new FormControl<string | null | undefined>(undefined),
			messageVersion: new FormControl<string | null | undefined>(undefined),
			receiverApplicationId: new FormControl<string | null | undefined>(undefined),
			receiverApplicationQualifier: new FormControl<string | null | undefined>(undefined),
			senderApplicationId: new FormControl<string | null | undefined>(undefined),
			senderApplicationQualifier: new FormControl<string | null | undefined>(undefined),
			targetNamespace: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Edifact agreement envelope settings. */
	export interface EdifactEnvelopeSettings {

		/** The application reference id. */
		applicationReferenceId?: string | null;

		/**
		 * The value indicating whether to apply delimiter string advice.
		 * Required
		 */
		applyDelimiterStringAdvice: boolean;

		/** The communication agreement id. */
		communicationAgreementId?: string | null;

		/**
		 * The value indicating whether to create grouping segments.
		 * Required
		 */
		createGroupingSegments: boolean;

		/**
		 * The value indicating whether to enable default group headers.
		 * Required
		 */
		enableDefaultGroupHeaders: boolean;

		/** The functional group id. */
		functionalGroupId?: string | null;

		/** The group application password. */
		groupApplicationPassword?: string | null;

		/** The group application receiver id. */
		groupApplicationReceiverId?: string | null;

		/** The group application receiver qualifier. */
		groupApplicationReceiverQualifier?: string | null;

		/** The group application sender id. */
		groupApplicationSenderId?: string | null;

		/** The group application sender qualifier. */
		groupApplicationSenderQualifier?: string | null;

		/** The group association assigned code. */
		groupAssociationAssignedCode?: string | null;

		/**
		 * The group control number lower bound.
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		groupControlNumberLowerBound: string;

		/** The group control number prefix. */
		groupControlNumberPrefix?: string | null;

		/** The group control number suffix. */
		groupControlNumberSuffix?: string | null;

		/**
		 * The group control number upper bound.
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		groupControlNumberUpperBound: string;

		/** The group controlling agency code. */
		groupControllingAgencyCode?: string | null;

		/** The group message release. */
		groupMessageRelease?: string | null;

		/** The group message version. */
		groupMessageVersion?: string | null;

		/**
		 * The interchange control number lower bound.
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		interchangeControlNumberLowerBound: string;

		/** The interchange control number prefix. */
		interchangeControlNumberPrefix?: string | null;

		/** The interchange control number suffix. */
		interchangeControlNumberSuffix?: string | null;

		/**
		 * The interchange control number upper bound.
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		interchangeControlNumberUpperBound: string;

		/**
		 * The value indicating whether the message is a test interchange.
		 * Required
		 */
		isTestInterchange: boolean;

		/**
		 * The value indicating whether to overwrite existing transaction set control number.
		 * Required
		 */
		overwriteExistingTransactionSetControlNumber: boolean;

		/** The processing priority code. */
		processingPriorityCode?: string | null;

		/** The receiver internal identification. */
		receiverInternalIdentification?: string | null;

		/** The receiver internal sub identification. */
		receiverInternalSubIdentification?: string | null;

		/** The receiver reverse routing address. */
		receiverReverseRoutingAddress?: string | null;

		/** The recipient reference password qualifier. */
		recipientReferencePasswordQualifier?: string | null;

		/** The recipient reference password value. */
		recipientReferencePasswordValue?: string | null;

		/**
		 * The value indicating whether to rollover group control number.
		 * Required
		 */
		rolloverGroupControlNumber: boolean;

		/**
		 * The value indicating whether to rollover interchange control number.
		 * Required
		 */
		rolloverInterchangeControlNumber: boolean;

		/**
		 * The value indicating whether to rollover transaction set control number.
		 * Required
		 */
		rolloverTransactionSetControlNumber: boolean;

		/** The sender internal identification. */
		senderInternalIdentification?: string | null;

		/** The sender internal sub identification. */
		senderInternalSubIdentification?: string | null;

		/** The sender reverse routing address. */
		senderReverseRoutingAddress?: string | null;

		/**
		 * The transaction set control number lower bound.
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		transactionSetControlNumberLowerBound: string;

		/** The transaction set control number prefix. */
		transactionSetControlNumberPrefix?: string | null;

		/** The transaction set control number suffix. */
		transactionSetControlNumberSuffix?: string | null;

		/**
		 * The transaction set control number upper bound.
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		transactionSetControlNumberUpperBound: string;
	}

	/** The Edifact agreement envelope settings. */
	export interface EdifactEnvelopeSettingsFormProperties {

		/** The application reference id. */
		applicationReferenceId: FormControl<string | null | undefined>,

		/**
		 * The value indicating whether to apply delimiter string advice.
		 * Required
		 */
		applyDelimiterStringAdvice: FormControl<boolean | null | undefined>,

		/** The communication agreement id. */
		communicationAgreementId: FormControl<string | null | undefined>,

		/**
		 * The value indicating whether to create grouping segments.
		 * Required
		 */
		createGroupingSegments: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to enable default group headers.
		 * Required
		 */
		enableDefaultGroupHeaders: FormControl<boolean | null | undefined>,

		/** The functional group id. */
		functionalGroupId: FormControl<string | null | undefined>,

		/** The group application password. */
		groupApplicationPassword: FormControl<string | null | undefined>,

		/** The group application receiver id. */
		groupApplicationReceiverId: FormControl<string | null | undefined>,

		/** The group application receiver qualifier. */
		groupApplicationReceiverQualifier: FormControl<string | null | undefined>,

		/** The group application sender id. */
		groupApplicationSenderId: FormControl<string | null | undefined>,

		/** The group application sender qualifier. */
		groupApplicationSenderQualifier: FormControl<string | null | undefined>,

		/** The group association assigned code. */
		groupAssociationAssignedCode: FormControl<string | null | undefined>,

		/**
		 * The group control number lower bound.
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		groupControlNumberLowerBound: FormControl<string | null | undefined>,

		/** The group control number prefix. */
		groupControlNumberPrefix: FormControl<string | null | undefined>,

		/** The group control number suffix. */
		groupControlNumberSuffix: FormControl<string | null | undefined>,

		/**
		 * The group control number upper bound.
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		groupControlNumberUpperBound: FormControl<string | null | undefined>,

		/** The group controlling agency code. */
		groupControllingAgencyCode: FormControl<string | null | undefined>,

		/** The group message release. */
		groupMessageRelease: FormControl<string | null | undefined>,

		/** The group message version. */
		groupMessageVersion: FormControl<string | null | undefined>,

		/**
		 * The interchange control number lower bound.
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		interchangeControlNumberLowerBound: FormControl<string | null | undefined>,

		/** The interchange control number prefix. */
		interchangeControlNumberPrefix: FormControl<string | null | undefined>,

		/** The interchange control number suffix. */
		interchangeControlNumberSuffix: FormControl<string | null | undefined>,

		/**
		 * The interchange control number upper bound.
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		interchangeControlNumberUpperBound: FormControl<string | null | undefined>,

		/**
		 * The value indicating whether the message is a test interchange.
		 * Required
		 */
		isTestInterchange: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to overwrite existing transaction set control number.
		 * Required
		 */
		overwriteExistingTransactionSetControlNumber: FormControl<boolean | null | undefined>,

		/** The processing priority code. */
		processingPriorityCode: FormControl<string | null | undefined>,

		/** The receiver internal identification. */
		receiverInternalIdentification: FormControl<string | null | undefined>,

		/** The receiver internal sub identification. */
		receiverInternalSubIdentification: FormControl<string | null | undefined>,

		/** The receiver reverse routing address. */
		receiverReverseRoutingAddress: FormControl<string | null | undefined>,

		/** The recipient reference password qualifier. */
		recipientReferencePasswordQualifier: FormControl<string | null | undefined>,

		/** The recipient reference password value. */
		recipientReferencePasswordValue: FormControl<string | null | undefined>,

		/**
		 * The value indicating whether to rollover group control number.
		 * Required
		 */
		rolloverGroupControlNumber: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to rollover interchange control number.
		 * Required
		 */
		rolloverInterchangeControlNumber: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to rollover transaction set control number.
		 * Required
		 */
		rolloverTransactionSetControlNumber: FormControl<boolean | null | undefined>,

		/** The sender internal identification. */
		senderInternalIdentification: FormControl<string | null | undefined>,

		/** The sender internal sub identification. */
		senderInternalSubIdentification: FormControl<string | null | undefined>,

		/** The sender reverse routing address. */
		senderReverseRoutingAddress: FormControl<string | null | undefined>,

		/**
		 * The transaction set control number lower bound.
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		transactionSetControlNumberLowerBound: FormControl<string | null | undefined>,

		/** The transaction set control number prefix. */
		transactionSetControlNumberPrefix: FormControl<string | null | undefined>,

		/** The transaction set control number suffix. */
		transactionSetControlNumberSuffix: FormControl<string | null | undefined>,

		/**
		 * The transaction set control number upper bound.
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		transactionSetControlNumberUpperBound: FormControl<string | null | undefined>,
	}
	export function CreateEdifactEnvelopeSettingsFormGroup() {
		return new FormGroup<EdifactEnvelopeSettingsFormProperties>({
			applicationReferenceId: new FormControl<string | null | undefined>(undefined),
			applyDelimiterStringAdvice: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			communicationAgreementId: new FormControl<string | null | undefined>(undefined),
			createGroupingSegments: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			enableDefaultGroupHeaders: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			functionalGroupId: new FormControl<string | null | undefined>(undefined),
			groupApplicationPassword: new FormControl<string | null | undefined>(undefined),
			groupApplicationReceiverId: new FormControl<string | null | undefined>(undefined),
			groupApplicationReceiverQualifier: new FormControl<string | null | undefined>(undefined),
			groupApplicationSenderId: new FormControl<string | null | undefined>(undefined),
			groupApplicationSenderQualifier: new FormControl<string | null | undefined>(undefined),
			groupAssociationAssignedCode: new FormControl<string | null | undefined>(undefined),
			groupControlNumberLowerBound: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			groupControlNumberPrefix: new FormControl<string | null | undefined>(undefined),
			groupControlNumberSuffix: new FormControl<string | null | undefined>(undefined),
			groupControlNumberUpperBound: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			groupControllingAgencyCode: new FormControl<string | null | undefined>(undefined),
			groupMessageRelease: new FormControl<string | null | undefined>(undefined),
			groupMessageVersion: new FormControl<string | null | undefined>(undefined),
			interchangeControlNumberLowerBound: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			interchangeControlNumberPrefix: new FormControl<string | null | undefined>(undefined),
			interchangeControlNumberSuffix: new FormControl<string | null | undefined>(undefined),
			interchangeControlNumberUpperBound: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isTestInterchange: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			overwriteExistingTransactionSetControlNumber: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			processingPriorityCode: new FormControl<string | null | undefined>(undefined),
			receiverInternalIdentification: new FormControl<string | null | undefined>(undefined),
			receiverInternalSubIdentification: new FormControl<string | null | undefined>(undefined),
			receiverReverseRoutingAddress: new FormControl<string | null | undefined>(undefined),
			recipientReferencePasswordQualifier: new FormControl<string | null | undefined>(undefined),
			recipientReferencePasswordValue: new FormControl<string | null | undefined>(undefined),
			rolloverGroupControlNumber: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			rolloverInterchangeControlNumber: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			rolloverTransactionSetControlNumber: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			senderInternalIdentification: new FormControl<string | null | undefined>(undefined),
			senderInternalSubIdentification: new FormControl<string | null | undefined>(undefined),
			senderReverseRoutingAddress: new FormControl<string | null | undefined>(undefined),
			transactionSetControlNumberLowerBound: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			transactionSetControlNumberPrefix: new FormControl<string | null | undefined>(undefined),
			transactionSetControlNumberSuffix: new FormControl<string | null | undefined>(undefined),
			transactionSetControlNumberUpperBound: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The Edifact agreement framing settings. */
	export interface EdifactFramingSettings {

		/** The character encoding. */
		characterEncoding?: string | null;

		/**
		 * The edifact character set.
		 * Required
		 */
		characterSet: EdifactFramingSettingsCharacterSet;

		/**
		 * The component separator.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		componentSeparator: number;

		/**
		 * The data element separator.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dataElementSeparator: number;

		/**
		 * The edifact decimal indicator.
		 * Required
		 */
		decimalPointIndicator: EdifactDelimiterOverrideDecimalPointIndicator;

		/**
		 * The protocol version.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		protocolVersion: number;

		/**
		 * The release indicator.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		releaseIndicator: number;

		/**
		 * The repetition separator.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		repetitionSeparator: number;

		/**
		 * The segment terminator.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		segmentTerminator: number;

		/**
		 * The segment terminator suffix.
		 * Required
		 */
		segmentTerminatorSuffix: EdifactDelimiterOverrideSegmentTerminatorSuffix;

		/** The service code list directory version. */
		serviceCodeListDirectoryVersion?: string | null;
	}

	/** The Edifact agreement framing settings. */
	export interface EdifactFramingSettingsFormProperties {

		/** The character encoding. */
		characterEncoding: FormControl<string | null | undefined>,

		/**
		 * The edifact character set.
		 * Required
		 */
		characterSet: FormControl<EdifactFramingSettingsCharacterSet | null | undefined>,

		/**
		 * The component separator.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		componentSeparator: FormControl<number | null | undefined>,

		/**
		 * The data element separator.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dataElementSeparator: FormControl<number | null | undefined>,

		/**
		 * The edifact decimal indicator.
		 * Required
		 */
		decimalPointIndicator: FormControl<EdifactDelimiterOverrideDecimalPointIndicator | null | undefined>,

		/**
		 * The protocol version.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		protocolVersion: FormControl<number | null | undefined>,

		/**
		 * The release indicator.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		releaseIndicator: FormControl<number | null | undefined>,

		/**
		 * The repetition separator.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		repetitionSeparator: FormControl<number | null | undefined>,

		/**
		 * The segment terminator.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		segmentTerminator: FormControl<number | null | undefined>,

		/**
		 * The segment terminator suffix.
		 * Required
		 */
		segmentTerminatorSuffix: FormControl<EdifactDelimiterOverrideSegmentTerminatorSuffix | null | undefined>,

		/** The service code list directory version. */
		serviceCodeListDirectoryVersion: FormControl<string | null | undefined>,
	}
	export function CreateEdifactFramingSettingsFormGroup() {
		return new FormGroup<EdifactFramingSettingsFormProperties>({
			characterEncoding: new FormControl<string | null | undefined>(undefined),
			characterSet: new FormControl<EdifactFramingSettingsCharacterSet | null | undefined>(undefined, [Validators.required]),
			componentSeparator: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			dataElementSeparator: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			decimalPointIndicator: new FormControl<EdifactDelimiterOverrideDecimalPointIndicator | null | undefined>(undefined, [Validators.required]),
			protocolVersion: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			releaseIndicator: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			repetitionSeparator: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			segmentTerminator: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			segmentTerminatorSuffix: new FormControl<EdifactDelimiterOverrideSegmentTerminatorSuffix | null | undefined>(undefined, [Validators.required]),
			serviceCodeListDirectoryVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EdifactFramingSettingsCharacterSet { NotSpecified = 'NotSpecified', UNOB = 'UNOB', UNOA = 'UNOA', UNOC = 'UNOC', UNOD = 'UNOD', UNOE = 'UNOE', UNOF = 'UNOF', UNOG = 'UNOG', UNOH = 'UNOH', UNOI = 'UNOI', UNOJ = 'UNOJ', UNOK = 'UNOK', UNOX = 'UNOX', UNOY = 'UNOY', KECA = 'KECA' }


	/** The Edifact message filter for odata query. */
	export interface EdifactMessageFilter {

		/**
		 * The message filter type.
		 * Required
		 */
		messageFilterType: EdifactMessageFilterMessageFilterType;
	}

	/** The Edifact message filter for odata query. */
	export interface EdifactMessageFilterFormProperties {

		/**
		 * The message filter type.
		 * Required
		 */
		messageFilterType: FormControl<EdifactMessageFilterMessageFilterType | null | undefined>,
	}
	export function CreateEdifactMessageFilterFormGroup() {
		return new FormGroup<EdifactMessageFilterFormProperties>({
			messageFilterType: new FormControl<EdifactMessageFilterMessageFilterType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EdifactMessageFilterMessageFilterType { NotSpecified = 'NotSpecified', Include = 'Include', Exclude = 'Exclude' }


	/** The Edifact message identifier. */
	export interface EdifactMessageIdentifier {

		/**
		 * The message id on which this envelope settings has to be applied.
		 * Required
		 */
		messageId: string;
	}

	/** The Edifact message identifier. */
	export interface EdifactMessageIdentifierFormProperties {

		/**
		 * The message id on which this envelope settings has to be applied.
		 * Required
		 */
		messageId: FormControl<string | null | undefined>,
	}
	export function CreateEdifactMessageIdentifierFormGroup() {
		return new FormGroup<EdifactMessageIdentifierFormProperties>({
			messageId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The Edifact agreement protocol settings. */
	export interface EdifactProcessingSettings {

		/**
		 * The value indicating whether to create empty xml tags for trailing separators.
		 * Required
		 */
		createEmptyXmlTagsForTrailingSeparators: boolean;

		/**
		 * The value indicating whether to mask security information.
		 * Required
		 */
		maskSecurityInfo: boolean;

		/**
		 * The value indicating whether to preserve interchange.
		 * Required
		 */
		preserveInterchange: boolean;

		/**
		 * The value indicating whether to suspend interchange on error.
		 * Required
		 */
		suspendInterchangeOnError: boolean;

		/**
		 * The value indicating whether to use dot as decimal separator.
		 * Required
		 */
		useDotAsDecimalSeparator: boolean;
	}

	/** The Edifact agreement protocol settings. */
	export interface EdifactProcessingSettingsFormProperties {

		/**
		 * The value indicating whether to create empty xml tags for trailing separators.
		 * Required
		 */
		createEmptyXmlTagsForTrailingSeparators: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to mask security information.
		 * Required
		 */
		maskSecurityInfo: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to preserve interchange.
		 * Required
		 */
		preserveInterchange: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to suspend interchange on error.
		 * Required
		 */
		suspendInterchangeOnError: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to use dot as decimal separator.
		 * Required
		 */
		useDotAsDecimalSeparator: FormControl<boolean | null | undefined>,
	}
	export function CreateEdifactProcessingSettingsFormGroup() {
		return new FormGroup<EdifactProcessingSettingsFormProperties>({
			createEmptyXmlTagsForTrailingSeparators: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			maskSecurityInfo: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			preserveInterchange: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			suspendInterchangeOnError: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			useDotAsDecimalSeparator: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The Edifact schema reference. */
	export interface EdifactSchemaReference {

		/** The association assigned code. */
		associationAssignedCode?: string | null;

		/**
		 * The message id.
		 * Required
		 */
		messageId: string;

		/**
		 * The message release version.
		 * Required
		 */
		messageRelease: string;

		/**
		 * The message version.
		 * Required
		 */
		messageVersion: string;

		/**
		 * The schema name.
		 * Required
		 */
		schemaName: string;

		/** The sender application id. */
		senderApplicationId?: string | null;

		/** The sender application qualifier. */
		senderApplicationQualifier?: string | null;
	}

	/** The Edifact schema reference. */
	export interface EdifactSchemaReferenceFormProperties {

		/** The association assigned code. */
		associationAssignedCode: FormControl<string | null | undefined>,

		/**
		 * The message id.
		 * Required
		 */
		messageId: FormControl<string | null | undefined>,

		/**
		 * The message release version.
		 * Required
		 */
		messageRelease: FormControl<string | null | undefined>,

		/**
		 * The message version.
		 * Required
		 */
		messageVersion: FormControl<string | null | undefined>,

		/**
		 * The schema name.
		 * Required
		 */
		schemaName: FormControl<string | null | undefined>,

		/** The sender application id. */
		senderApplicationId: FormControl<string | null | undefined>,

		/** The sender application qualifier. */
		senderApplicationQualifier: FormControl<string | null | undefined>,
	}
	export function CreateEdifactSchemaReferenceFormGroup() {
		return new FormGroup<EdifactSchemaReferenceFormProperties>({
			associationAssignedCode: new FormControl<string | null | undefined>(undefined),
			messageId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			messageRelease: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			messageVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			schemaName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			senderApplicationId: new FormControl<string | null | undefined>(undefined),
			senderApplicationQualifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Edifact validation override settings. */
	export interface EdifactValidationOverride {

		/**
		 * The value indicating whether to allow leading and trailing spaces and zeroes.
		 * Required
		 */
		allowLeadingAndTrailingSpacesAndZeroes: boolean;

		/**
		 * The value indicating whether to validate character Set.
		 * Required
		 */
		enforceCharacterSet: boolean;

		/**
		 * The message id on which the validation settings has to be applied.
		 * Required
		 */
		messageId: string;

		/**
		 * The trailing separator policy.
		 * Required
		 */
		trailingSeparatorPolicy: EdifactValidationOverrideTrailingSeparatorPolicy;

		/**
		 * The value indicating whether to trim leading and trailing spaces and zeroes.
		 * Required
		 */
		trimLeadingAndTrailingSpacesAndZeroes: boolean;

		/**
		 * The value indicating whether to validate EDI types.
		 * Required
		 */
		validateEDITypes: boolean;

		/**
		 * The value indicating whether to validate XSD types.
		 * Required
		 */
		validateXSDTypes: boolean;
	}

	/** The Edifact validation override settings. */
	export interface EdifactValidationOverrideFormProperties {

		/**
		 * The value indicating whether to allow leading and trailing spaces and zeroes.
		 * Required
		 */
		allowLeadingAndTrailingSpacesAndZeroes: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to validate character Set.
		 * Required
		 */
		enforceCharacterSet: FormControl<boolean | null | undefined>,

		/**
		 * The message id on which the validation settings has to be applied.
		 * Required
		 */
		messageId: FormControl<string | null | undefined>,

		/**
		 * The trailing separator policy.
		 * Required
		 */
		trailingSeparatorPolicy: FormControl<EdifactValidationOverrideTrailingSeparatorPolicy | null | undefined>,

		/**
		 * The value indicating whether to trim leading and trailing spaces and zeroes.
		 * Required
		 */
		trimLeadingAndTrailingSpacesAndZeroes: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to validate EDI types.
		 * Required
		 */
		validateEDITypes: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to validate XSD types.
		 * Required
		 */
		validateXSDTypes: FormControl<boolean | null | undefined>,
	}
	export function CreateEdifactValidationOverrideFormGroup() {
		return new FormGroup<EdifactValidationOverrideFormProperties>({
			allowLeadingAndTrailingSpacesAndZeroes: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			enforceCharacterSet: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			messageId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			trailingSeparatorPolicy: new FormControl<EdifactValidationOverrideTrailingSeparatorPolicy | null | undefined>(undefined, [Validators.required]),
			trimLeadingAndTrailingSpacesAndZeroes: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			validateEDITypes: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			validateXSDTypes: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EdifactValidationOverrideTrailingSeparatorPolicy { NotSpecified = 'NotSpecified', NotAllowed = 'NotAllowed', Optional = 'Optional', Mandatory = 'Mandatory' }


	/** The Edifact agreement validation settings. */
	export interface EdifactValidationSettings {

		/**
		 * The value indicating whether to allow leading and trailing spaces and zeroes.
		 * Required
		 */
		allowLeadingAndTrailingSpacesAndZeroes: boolean;

		/**
		 * The value indicating whether to check for duplicate group control number.
		 * Required
		 */
		checkDuplicateGroupControlNumber: boolean;

		/**
		 * The value indicating whether to check for duplicate interchange control number.
		 * Required
		 */
		checkDuplicateInterchangeControlNumber: boolean;

		/**
		 * The value indicating whether to check for duplicate transaction set control number.
		 * Required
		 */
		checkDuplicateTransactionSetControlNumber: boolean;

		/**
		 * The validity period of interchange control number.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		interchangeControlNumberValidityDays: number;

		/**
		 * The trailing separator policy.
		 * Required
		 */
		trailingSeparatorPolicy: EdifactValidationOverrideTrailingSeparatorPolicy;

		/**
		 * The value indicating whether to trim leading and trailing spaces and zeroes.
		 * Required
		 */
		trimLeadingAndTrailingSpacesAndZeroes: boolean;

		/**
		 * The value indicating whether to validate character set in the message.
		 * Required
		 */
		validateCharacterSet: boolean;

		/**
		 * The value indicating whether to Whether to validate EDI types.
		 * Required
		 */
		validateEDITypes: boolean;

		/**
		 * The value indicating whether to Whether to validate XSD types.
		 * Required
		 */
		validateXSDTypes: boolean;
	}

	/** The Edifact agreement validation settings. */
	export interface EdifactValidationSettingsFormProperties {

		/**
		 * The value indicating whether to allow leading and trailing spaces and zeroes.
		 * Required
		 */
		allowLeadingAndTrailingSpacesAndZeroes: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to check for duplicate group control number.
		 * Required
		 */
		checkDuplicateGroupControlNumber: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to check for duplicate interchange control number.
		 * Required
		 */
		checkDuplicateInterchangeControlNumber: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to check for duplicate transaction set control number.
		 * Required
		 */
		checkDuplicateTransactionSetControlNumber: FormControl<boolean | null | undefined>,

		/**
		 * The validity period of interchange control number.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		interchangeControlNumberValidityDays: FormControl<number | null | undefined>,

		/**
		 * The trailing separator policy.
		 * Required
		 */
		trailingSeparatorPolicy: FormControl<EdifactValidationOverrideTrailingSeparatorPolicy | null | undefined>,

		/**
		 * The value indicating whether to trim leading and trailing spaces and zeroes.
		 * Required
		 */
		trimLeadingAndTrailingSpacesAndZeroes: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to validate character set in the message.
		 * Required
		 */
		validateCharacterSet: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to Whether to validate EDI types.
		 * Required
		 */
		validateEDITypes: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to Whether to validate XSD types.
		 * Required
		 */
		validateXSDTypes: FormControl<boolean | null | undefined>,
	}
	export function CreateEdifactValidationSettingsFormGroup() {
		return new FormGroup<EdifactValidationSettingsFormProperties>({
			allowLeadingAndTrailingSpacesAndZeroes: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			checkDuplicateGroupControlNumber: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			checkDuplicateInterchangeControlNumber: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			checkDuplicateTransactionSetControlNumber: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			interchangeControlNumberValidityDays: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			trailingSeparatorPolicy: new FormControl<EdifactValidationOverrideTrailingSeparatorPolicy | null | undefined>(undefined, [Validators.required]),
			trimLeadingAndTrailingSpacesAndZeroes: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			validateCharacterSet: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			validateEDITypes: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			validateXSDTypes: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The X12 agreement content. */
	export interface X12AgreementContent {

		/**
		 * The X12 one-way agreement.
		 * Required
		 */
		receiveAgreement: X12OneWayAgreement;

		/**
		 * The X12 one-way agreement.
		 * Required
		 */
		sendAgreement: X12OneWayAgreement;
	}

	/** The X12 agreement content. */
	export interface X12AgreementContentFormProperties {
	}
	export function CreateX12AgreementContentFormGroup() {
		return new FormGroup<X12AgreementContentFormProperties>({
		});

	}


	/** The X12 one-way agreement. */
	export interface X12OneWayAgreement {

		/**
		 * The X12 agreement protocol settings.
		 * Required
		 */
		protocolSettings: X12ProtocolSettings;

		/**
		 * The integration account partner's business identity.
		 * Required
		 */
		receiverBusinessIdentity: BusinessIdentity;

		/**
		 * The integration account partner's business identity.
		 * Required
		 */
		senderBusinessIdentity: BusinessIdentity;
	}

	/** The X12 one-way agreement. */
	export interface X12OneWayAgreementFormProperties {
	}
	export function CreateX12OneWayAgreementFormGroup() {
		return new FormGroup<X12OneWayAgreementFormProperties>({
		});

	}


	/** The X12 agreement protocol settings. */
	export interface X12ProtocolSettings {

		/**
		 * The X12 agreement acknowledgement settings.
		 * Required
		 */
		acknowledgementSettings: X12AcknowledgementSettings;

		/** The X12 envelope override settings. */
		envelopeOverrides?: Array<X12EnvelopeOverride>;

		/**
		 * The X12 agreement envelope settings.
		 * Required
		 */
		envelopeSettings: X12EnvelopeSettings;

		/**
		 * The X12 agreement framing settings.
		 * Required
		 */
		framingSettings: X12FramingSettings;

		/**
		 * The X12 message filter for odata query.
		 * Required
		 */
		messageFilter: X12MessageFilter;

		/** The X12 message filter list. */
		messageFilterList?: Array<X12MessageIdentifier>;

		/**
		 * The X12 processing settings.
		 * Required
		 */
		processingSettings: X12ProcessingSettings;

		/**
		 * The X12 schema references.
		 * Required
		 */
		schemaReferences: Array<X12SchemaReference>;

		/**
		 * The X12 agreement security settings.
		 * Required
		 */
		securitySettings: X12SecuritySettings;

		/** The X12 validation override settings. */
		validationOverrides?: Array<X12ValidationOverride>;

		/**
		 * The X12 agreement validation settings.
		 * Required
		 */
		validationSettings: X12ValidationSettings;

		/** The X12 delimiter override settings. */
		x12DelimiterOverrides?: Array<X12DelimiterOverrides>;
	}

	/** The X12 agreement protocol settings. */
	export interface X12ProtocolSettingsFormProperties {
	}
	export function CreateX12ProtocolSettingsFormGroup() {
		return new FormGroup<X12ProtocolSettingsFormProperties>({
		});

	}


	/** The X12 agreement acknowledgement settings. */
	export interface X12AcknowledgementSettings {

		/**
		 * The acknowledgement control number lower bound.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		acknowledgementControlNumberLowerBound: number;

		/** The acknowledgement control number prefix. */
		acknowledgementControlNumberPrefix?: string | null;

		/** The acknowledgement control number suffix. */
		acknowledgementControlNumberSuffix?: string | null;

		/**
		 * The acknowledgement control number upper bound.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		acknowledgementControlNumberUpperBound: number;

		/**
		 * The value indicating whether to batch functional acknowledgements.
		 * Required
		 */
		batchFunctionalAcknowledgements: boolean;

		/**
		 * The value indicating whether to batch implementation acknowledgements.
		 * Required
		 */
		batchImplementationAcknowledgements: boolean;

		/**
		 * The value indicating whether to batch the technical acknowledgements.
		 * Required
		 */
		batchTechnicalAcknowledgements: boolean;

		/** The functional acknowledgement version. */
		functionalAcknowledgementVersion?: string | null;

		/** The implementation acknowledgement version. */
		implementationAcknowledgementVersion?: string | null;

		/**
		 * The value indicating whether functional acknowledgement is needed.
		 * Required
		 */
		needFunctionalAcknowledgement: boolean;

		/**
		 * The value indicating whether implementation acknowledgement is needed.
		 * Required
		 */
		needImplementationAcknowledgement: boolean;

		/**
		 * The value indicating whether a loop is needed for valid messages.
		 * Required
		 */
		needLoopForValidMessages: boolean;

		/**
		 * The value indicating whether technical acknowledgement is needed.
		 * Required
		 */
		needTechnicalAcknowledgement: boolean;

		/**
		 * The value indicating whether to rollover acknowledgement control number.
		 * Required
		 */
		rolloverAcknowledgementControlNumber: boolean;

		/**
		 * The value indicating whether to send synchronous acknowledgement.
		 * Required
		 */
		sendSynchronousAcknowledgement: boolean;
	}

	/** The X12 agreement acknowledgement settings. */
	export interface X12AcknowledgementSettingsFormProperties {

		/**
		 * The acknowledgement control number lower bound.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		acknowledgementControlNumberLowerBound: FormControl<number | null | undefined>,

		/** The acknowledgement control number prefix. */
		acknowledgementControlNumberPrefix: FormControl<string | null | undefined>,

		/** The acknowledgement control number suffix. */
		acknowledgementControlNumberSuffix: FormControl<string | null | undefined>,

		/**
		 * The acknowledgement control number upper bound.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		acknowledgementControlNumberUpperBound: FormControl<number | null | undefined>,

		/**
		 * The value indicating whether to batch functional acknowledgements.
		 * Required
		 */
		batchFunctionalAcknowledgements: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to batch implementation acknowledgements.
		 * Required
		 */
		batchImplementationAcknowledgements: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to batch the technical acknowledgements.
		 * Required
		 */
		batchTechnicalAcknowledgements: FormControl<boolean | null | undefined>,

		/** The functional acknowledgement version. */
		functionalAcknowledgementVersion: FormControl<string | null | undefined>,

		/** The implementation acknowledgement version. */
		implementationAcknowledgementVersion: FormControl<string | null | undefined>,

		/**
		 * The value indicating whether functional acknowledgement is needed.
		 * Required
		 */
		needFunctionalAcknowledgement: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether implementation acknowledgement is needed.
		 * Required
		 */
		needImplementationAcknowledgement: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether a loop is needed for valid messages.
		 * Required
		 */
		needLoopForValidMessages: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether technical acknowledgement is needed.
		 * Required
		 */
		needTechnicalAcknowledgement: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to rollover acknowledgement control number.
		 * Required
		 */
		rolloverAcknowledgementControlNumber: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to send synchronous acknowledgement.
		 * Required
		 */
		sendSynchronousAcknowledgement: FormControl<boolean | null | undefined>,
	}
	export function CreateX12AcknowledgementSettingsFormGroup() {
		return new FormGroup<X12AcknowledgementSettingsFormProperties>({
			acknowledgementControlNumberLowerBound: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			acknowledgementControlNumberPrefix: new FormControl<string | null | undefined>(undefined),
			acknowledgementControlNumberSuffix: new FormControl<string | null | undefined>(undefined),
			acknowledgementControlNumberUpperBound: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			batchFunctionalAcknowledgements: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			batchImplementationAcknowledgements: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			batchTechnicalAcknowledgements: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			functionalAcknowledgementVersion: new FormControl<string | null | undefined>(undefined),
			implementationAcknowledgementVersion: new FormControl<string | null | undefined>(undefined),
			needFunctionalAcknowledgement: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			needImplementationAcknowledgement: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			needLoopForValidMessages: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			needTechnicalAcknowledgement: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			rolloverAcknowledgementControlNumber: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			sendSynchronousAcknowledgement: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The X12 envelope override settings. */
	export interface X12EnvelopeOverride {

		/**
		 * The x12 date format.
		 * Required
		 */
		dateFormat: X12EnvelopeOverrideDateFormat;

		/** The functional identifier code. */
		functionalIdentifierCode?: string | null;

		/**
		 * The header version.
		 * Required
		 */
		headerVersion: string;

		/**
		 * The message id on which this envelope settings has to be applied.
		 * Required
		 */
		messageId: string;

		/**
		 * The protocol version on which this envelope settings has to be applied.
		 * Required
		 */
		protocolVersion: string;

		/**
		 * The receiver application id.
		 * Required
		 */
		receiverApplicationId: string;

		/**
		 * The responsible agency code.
		 * Required
		 */
		responsibleAgencyCode: string;

		/**
		 * The sender application id.
		 * Required
		 */
		senderApplicationId: string;

		/**
		 * The target namespace on which this envelope settings has to be applied.
		 * Required
		 */
		targetNamespace: string;

		/**
		 * The x12 time format.
		 * Required
		 */
		timeFormat: X12EnvelopeOverrideTimeFormat;
	}

	/** The X12 envelope override settings. */
	export interface X12EnvelopeOverrideFormProperties {

		/**
		 * The x12 date format.
		 * Required
		 */
		dateFormat: FormControl<X12EnvelopeOverrideDateFormat | null | undefined>,

		/** The functional identifier code. */
		functionalIdentifierCode: FormControl<string | null | undefined>,

		/**
		 * The header version.
		 * Required
		 */
		headerVersion: FormControl<string | null | undefined>,

		/**
		 * The message id on which this envelope settings has to be applied.
		 * Required
		 */
		messageId: FormControl<string | null | undefined>,

		/**
		 * The protocol version on which this envelope settings has to be applied.
		 * Required
		 */
		protocolVersion: FormControl<string | null | undefined>,

		/**
		 * The receiver application id.
		 * Required
		 */
		receiverApplicationId: FormControl<string | null | undefined>,

		/**
		 * The responsible agency code.
		 * Required
		 */
		responsibleAgencyCode: FormControl<string | null | undefined>,

		/**
		 * The sender application id.
		 * Required
		 */
		senderApplicationId: FormControl<string | null | undefined>,

		/**
		 * The target namespace on which this envelope settings has to be applied.
		 * Required
		 */
		targetNamespace: FormControl<string | null | undefined>,

		/**
		 * The x12 time format.
		 * Required
		 */
		timeFormat: FormControl<X12EnvelopeOverrideTimeFormat | null | undefined>,
	}
	export function CreateX12EnvelopeOverrideFormGroup() {
		return new FormGroup<X12EnvelopeOverrideFormProperties>({
			dateFormat: new FormControl<X12EnvelopeOverrideDateFormat | null | undefined>(undefined, [Validators.required]),
			functionalIdentifierCode: new FormControl<string | null | undefined>(undefined),
			headerVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			messageId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			protocolVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			receiverApplicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			responsibleAgencyCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			senderApplicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			targetNamespace: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timeFormat: new FormControl<X12EnvelopeOverrideTimeFormat | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum X12EnvelopeOverrideDateFormat { NotSpecified = 'NotSpecified', CCYYMMDD = 'CCYYMMDD', YYMMDD = 'YYMMDD' }

	export enum X12EnvelopeOverrideTimeFormat { NotSpecified = 'NotSpecified', HHMM = 'HHMM', HHMMSS = 'HHMMSS', HHMMSSdd = 'HHMMSSdd', HHMMSSd = 'HHMMSSd' }


	/** The X12 agreement envelope settings. */
	export interface X12EnvelopeSettings {

		/**
		 * The controls standards id.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		controlStandardsId: number;

		/**
		 * The control version number.
		 * Required
		 */
		controlVersionNumber: string;

		/**
		 * The value indicating whether to enable default group headers.
		 * Required
		 */
		enableDefaultGroupHeaders: boolean;

		/** The functional group id. */
		functionalGroupId?: string | null;

		/**
		 * The group control number lower bound.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		groupControlNumberLowerBound: number;

		/**
		 * The group control number upper bound.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		groupControlNumberUpperBound: number;

		/**
		 * The group header agency code.
		 * Required
		 */
		groupHeaderAgencyCode: string;

		/**
		 * The x12 date format.
		 * Required
		 */
		groupHeaderDateFormat: X12EnvelopeOverrideDateFormat;

		/**
		 * The x12 time format.
		 * Required
		 */
		groupHeaderTimeFormat: X12EnvelopeOverrideTimeFormat;

		/**
		 * The group header version.
		 * Required
		 */
		groupHeaderVersion: string;

		/**
		 * The interchange  control number lower bound.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		interchangeControlNumberLowerBound: number;

		/**
		 * The interchange  control number upper bound.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		interchangeControlNumberUpperBound: number;

		/**
		 * The value indicating whether to overwrite existing transaction set control number.
		 * Required
		 */
		overwriteExistingTransactionSetControlNumber: boolean;

		/**
		 * The receiver application id.
		 * Required
		 */
		receiverApplicationId: string;

		/**
		 * The value indicating whether to rollover group control number.
		 * Required
		 */
		rolloverGroupControlNumber: boolean;

		/**
		 * The value indicating whether to rollover interchange control number.
		 * Required
		 */
		rolloverInterchangeControlNumber: boolean;

		/**
		 * The value indicating whether to rollover transaction set control number.
		 * Required
		 */
		rolloverTransactionSetControlNumber: boolean;

		/**
		 * The sender application id.
		 * Required
		 */
		senderApplicationId: string;

		/**
		 * The transaction set control number lower bound.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		transactionSetControlNumberLowerBound: number;

		/** The transaction set control number prefix. */
		transactionSetControlNumberPrefix?: string | null;

		/** The transaction set control number suffix. */
		transactionSetControlNumberSuffix?: string | null;

		/**
		 * The transaction set control number upper bound.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		transactionSetControlNumberUpperBound: number;

		/**
		 * The usage indicator.
		 * Required
		 */
		usageIndicator: X12EnvelopeSettingsUsageIndicator;

		/**
		 * The value indicating whether to use control standards id as repetition character.
		 * Required
		 */
		useControlStandardsIdAsRepetitionCharacter: boolean;
	}

	/** The X12 agreement envelope settings. */
	export interface X12EnvelopeSettingsFormProperties {

		/**
		 * The controls standards id.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		controlStandardsId: FormControl<number | null | undefined>,

		/**
		 * The control version number.
		 * Required
		 */
		controlVersionNumber: FormControl<string | null | undefined>,

		/**
		 * The value indicating whether to enable default group headers.
		 * Required
		 */
		enableDefaultGroupHeaders: FormControl<boolean | null | undefined>,

		/** The functional group id. */
		functionalGroupId: FormControl<string | null | undefined>,

		/**
		 * The group control number lower bound.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		groupControlNumberLowerBound: FormControl<number | null | undefined>,

		/**
		 * The group control number upper bound.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		groupControlNumberUpperBound: FormControl<number | null | undefined>,

		/**
		 * The group header agency code.
		 * Required
		 */
		groupHeaderAgencyCode: FormControl<string | null | undefined>,

		/**
		 * The x12 date format.
		 * Required
		 */
		groupHeaderDateFormat: FormControl<X12EnvelopeOverrideDateFormat | null | undefined>,

		/**
		 * The x12 time format.
		 * Required
		 */
		groupHeaderTimeFormat: FormControl<X12EnvelopeOverrideTimeFormat | null | undefined>,

		/**
		 * The group header version.
		 * Required
		 */
		groupHeaderVersion: FormControl<string | null | undefined>,

		/**
		 * The interchange  control number lower bound.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		interchangeControlNumberLowerBound: FormControl<number | null | undefined>,

		/**
		 * The interchange  control number upper bound.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		interchangeControlNumberUpperBound: FormControl<number | null | undefined>,

		/**
		 * The value indicating whether to overwrite existing transaction set control number.
		 * Required
		 */
		overwriteExistingTransactionSetControlNumber: FormControl<boolean | null | undefined>,

		/**
		 * The receiver application id.
		 * Required
		 */
		receiverApplicationId: FormControl<string | null | undefined>,

		/**
		 * The value indicating whether to rollover group control number.
		 * Required
		 */
		rolloverGroupControlNumber: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to rollover interchange control number.
		 * Required
		 */
		rolloverInterchangeControlNumber: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to rollover transaction set control number.
		 * Required
		 */
		rolloverTransactionSetControlNumber: FormControl<boolean | null | undefined>,

		/**
		 * The sender application id.
		 * Required
		 */
		senderApplicationId: FormControl<string | null | undefined>,

		/**
		 * The transaction set control number lower bound.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		transactionSetControlNumberLowerBound: FormControl<number | null | undefined>,

		/** The transaction set control number prefix. */
		transactionSetControlNumberPrefix: FormControl<string | null | undefined>,

		/** The transaction set control number suffix. */
		transactionSetControlNumberSuffix: FormControl<string | null | undefined>,

		/**
		 * The transaction set control number upper bound.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		transactionSetControlNumberUpperBound: FormControl<number | null | undefined>,

		/**
		 * The usage indicator.
		 * Required
		 */
		usageIndicator: FormControl<X12EnvelopeSettingsUsageIndicator | null | undefined>,

		/**
		 * The value indicating whether to use control standards id as repetition character.
		 * Required
		 */
		useControlStandardsIdAsRepetitionCharacter: FormControl<boolean | null | undefined>,
	}
	export function CreateX12EnvelopeSettingsFormGroup() {
		return new FormGroup<X12EnvelopeSettingsFormProperties>({
			controlStandardsId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			controlVersionNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			enableDefaultGroupHeaders: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			functionalGroupId: new FormControl<string | null | undefined>(undefined),
			groupControlNumberLowerBound: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			groupControlNumberUpperBound: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			groupHeaderAgencyCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			groupHeaderDateFormat: new FormControl<X12EnvelopeOverrideDateFormat | null | undefined>(undefined, [Validators.required]),
			groupHeaderTimeFormat: new FormControl<X12EnvelopeOverrideTimeFormat | null | undefined>(undefined, [Validators.required]),
			groupHeaderVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			interchangeControlNumberLowerBound: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			interchangeControlNumberUpperBound: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			overwriteExistingTransactionSetControlNumber: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			receiverApplicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rolloverGroupControlNumber: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			rolloverInterchangeControlNumber: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			rolloverTransactionSetControlNumber: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			senderApplicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			transactionSetControlNumberLowerBound: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			transactionSetControlNumberPrefix: new FormControl<string | null | undefined>(undefined),
			transactionSetControlNumberSuffix: new FormControl<string | null | undefined>(undefined),
			transactionSetControlNumberUpperBound: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			usageIndicator: new FormControl<X12EnvelopeSettingsUsageIndicator | null | undefined>(undefined, [Validators.required]),
			useControlStandardsIdAsRepetitionCharacter: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum X12EnvelopeSettingsUsageIndicator { NotSpecified = 'NotSpecified', Test = 'Test', Information = 'Information', Production = 'Production' }


	/** The X12 agreement framing settings. */
	export interface X12FramingSettings {

		/**
		 * The X12 character set.
		 * Required
		 */
		characterSet: X12FramingSettingsCharacterSet;

		/**
		 * The component separator.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		componentSeparator: number;

		/**
		 * The data element separator.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dataElementSeparator: number;

		/**
		 * The replacement character.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		replaceCharacter: number;

		/**
		 * The value indicating whether to replace separators in payload.
		 * Required
		 */
		replaceSeparatorsInPayload: boolean;

		/**
		 * The segment terminator.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		segmentTerminator: number;

		/**
		 * The segment terminator suffix.
		 * Required
		 */
		segmentTerminatorSuffix: EdifactDelimiterOverrideSegmentTerminatorSuffix;
	}

	/** The X12 agreement framing settings. */
	export interface X12FramingSettingsFormProperties {

		/**
		 * The X12 character set.
		 * Required
		 */
		characterSet: FormControl<X12FramingSettingsCharacterSet | null | undefined>,

		/**
		 * The component separator.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		componentSeparator: FormControl<number | null | undefined>,

		/**
		 * The data element separator.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dataElementSeparator: FormControl<number | null | undefined>,

		/**
		 * The replacement character.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		replaceCharacter: FormControl<number | null | undefined>,

		/**
		 * The value indicating whether to replace separators in payload.
		 * Required
		 */
		replaceSeparatorsInPayload: FormControl<boolean | null | undefined>,

		/**
		 * The segment terminator.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		segmentTerminator: FormControl<number | null | undefined>,

		/**
		 * The segment terminator suffix.
		 * Required
		 */
		segmentTerminatorSuffix: FormControl<EdifactDelimiterOverrideSegmentTerminatorSuffix | null | undefined>,
	}
	export function CreateX12FramingSettingsFormGroup() {
		return new FormGroup<X12FramingSettingsFormProperties>({
			characterSet: new FormControl<X12FramingSettingsCharacterSet | null | undefined>(undefined, [Validators.required]),
			componentSeparator: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			dataElementSeparator: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			replaceCharacter: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			replaceSeparatorsInPayload: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			segmentTerminator: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			segmentTerminatorSuffix: new FormControl<EdifactDelimiterOverrideSegmentTerminatorSuffix | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum X12FramingSettingsCharacterSet { NotSpecified = 'NotSpecified', Basic = 'Basic', Extended = 'Extended', UTF8 = 'UTF8' }


	/** The X12 message filter for odata query. */
	export interface X12MessageFilter {

		/**
		 * The message filter type.
		 * Required
		 */
		messageFilterType: EdifactMessageFilterMessageFilterType;
	}

	/** The X12 message filter for odata query. */
	export interface X12MessageFilterFormProperties {

		/**
		 * The message filter type.
		 * Required
		 */
		messageFilterType: FormControl<EdifactMessageFilterMessageFilterType | null | undefined>,
	}
	export function CreateX12MessageFilterFormGroup() {
		return new FormGroup<X12MessageFilterFormProperties>({
			messageFilterType: new FormControl<EdifactMessageFilterMessageFilterType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The X12 message identifier. */
	export interface X12MessageIdentifier {

		/**
		 * The message id.
		 * Required
		 */
		messageId: string;
	}

	/** The X12 message identifier. */
	export interface X12MessageIdentifierFormProperties {

		/**
		 * The message id.
		 * Required
		 */
		messageId: FormControl<string | null | undefined>,
	}
	export function CreateX12MessageIdentifierFormGroup() {
		return new FormGroup<X12MessageIdentifierFormProperties>({
			messageId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The X12 processing settings. */
	export interface X12ProcessingSettings {

		/**
		 * The value indicating whether to convert numerical type to implied decimal.
		 * Required
		 */
		convertImpliedDecimal: boolean;

		/**
		 * The value indicating whether to create empty xml tags for trailing separators.
		 * Required
		 */
		createEmptyXmlTagsForTrailingSeparators: boolean;

		/**
		 * The value indicating whether to mask security information.
		 * Required
		 */
		maskSecurityInfo: boolean;

		/**
		 * The value indicating whether to preserve interchange.
		 * Required
		 */
		preserveInterchange: boolean;

		/**
		 * The value indicating whether to suspend interchange on error.
		 * Required
		 */
		suspendInterchangeOnError: boolean;

		/**
		 * The value indicating whether to use dot as decimal separator.
		 * Required
		 */
		useDotAsDecimalSeparator: boolean;
	}

	/** The X12 processing settings. */
	export interface X12ProcessingSettingsFormProperties {

		/**
		 * The value indicating whether to convert numerical type to implied decimal.
		 * Required
		 */
		convertImpliedDecimal: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to create empty xml tags for trailing separators.
		 * Required
		 */
		createEmptyXmlTagsForTrailingSeparators: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to mask security information.
		 * Required
		 */
		maskSecurityInfo: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to preserve interchange.
		 * Required
		 */
		preserveInterchange: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to suspend interchange on error.
		 * Required
		 */
		suspendInterchangeOnError: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to use dot as decimal separator.
		 * Required
		 */
		useDotAsDecimalSeparator: FormControl<boolean | null | undefined>,
	}
	export function CreateX12ProcessingSettingsFormGroup() {
		return new FormGroup<X12ProcessingSettingsFormProperties>({
			convertImpliedDecimal: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			createEmptyXmlTagsForTrailingSeparators: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			maskSecurityInfo: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			preserveInterchange: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			suspendInterchangeOnError: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			useDotAsDecimalSeparator: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The X12 schema reference. */
	export interface X12SchemaReference {

		/**
		 * The message id.
		 * Required
		 */
		messageId: string;

		/**
		 * The schema name.
		 * Required
		 */
		schemaName: string;

		/**
		 * The schema version.
		 * Required
		 */
		schemaVersion: string;

		/** The sender application id. */
		senderApplicationId?: string | null;
	}

	/** The X12 schema reference. */
	export interface X12SchemaReferenceFormProperties {

		/**
		 * The message id.
		 * Required
		 */
		messageId: FormControl<string | null | undefined>,

		/**
		 * The schema name.
		 * Required
		 */
		schemaName: FormControl<string | null | undefined>,

		/**
		 * The schema version.
		 * Required
		 */
		schemaVersion: FormControl<string | null | undefined>,

		/** The sender application id. */
		senderApplicationId: FormControl<string | null | undefined>,
	}
	export function CreateX12SchemaReferenceFormGroup() {
		return new FormGroup<X12SchemaReferenceFormProperties>({
			messageId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			schemaName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			schemaVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			senderApplicationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The X12 agreement security settings. */
	export interface X12SecuritySettings {

		/**
		 * The authorization qualifier.
		 * Required
		 */
		authorizationQualifier: string;

		/** The authorization value. */
		authorizationValue?: string | null;

		/** The password value. */
		passwordValue?: string | null;

		/**
		 * The security qualifier.
		 * Required
		 */
		securityQualifier: string;
	}

	/** The X12 agreement security settings. */
	export interface X12SecuritySettingsFormProperties {

		/**
		 * The authorization qualifier.
		 * Required
		 */
		authorizationQualifier: FormControl<string | null | undefined>,

		/** The authorization value. */
		authorizationValue: FormControl<string | null | undefined>,

		/** The password value. */
		passwordValue: FormControl<string | null | undefined>,

		/**
		 * The security qualifier.
		 * Required
		 */
		securityQualifier: FormControl<string | null | undefined>,
	}
	export function CreateX12SecuritySettingsFormGroup() {
		return new FormGroup<X12SecuritySettingsFormProperties>({
			authorizationQualifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			authorizationValue: new FormControl<string | null | undefined>(undefined),
			passwordValue: new FormControl<string | null | undefined>(undefined),
			securityQualifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The X12 validation override settings. */
	export interface X12ValidationOverride {

		/**
		 * The value indicating whether to allow leading and trailing spaces and zeroes.
		 * Required
		 */
		allowLeadingAndTrailingSpacesAndZeroes: boolean;

		/**
		 * The message id on which the validation settings has to be applied.
		 * Required
		 */
		messageId: string;

		/**
		 * The trailing separator policy.
		 * Required
		 */
		trailingSeparatorPolicy: EdifactValidationOverrideTrailingSeparatorPolicy;

		/**
		 * The value indicating whether to trim leading and trailing spaces and zeroes.
		 * Required
		 */
		trimLeadingAndTrailingSpacesAndZeroes: boolean;

		/**
		 * The value indicating whether to validate character Set.
		 * Required
		 */
		validateCharacterSet: boolean;

		/**
		 * The value indicating whether to validate EDI types.
		 * Required
		 */
		validateEDITypes: boolean;

		/**
		 * The value indicating whether to validate XSD types.
		 * Required
		 */
		validateXSDTypes: boolean;
	}

	/** The X12 validation override settings. */
	export interface X12ValidationOverrideFormProperties {

		/**
		 * The value indicating whether to allow leading and trailing spaces and zeroes.
		 * Required
		 */
		allowLeadingAndTrailingSpacesAndZeroes: FormControl<boolean | null | undefined>,

		/**
		 * The message id on which the validation settings has to be applied.
		 * Required
		 */
		messageId: FormControl<string | null | undefined>,

		/**
		 * The trailing separator policy.
		 * Required
		 */
		trailingSeparatorPolicy: FormControl<EdifactValidationOverrideTrailingSeparatorPolicy | null | undefined>,

		/**
		 * The value indicating whether to trim leading and trailing spaces and zeroes.
		 * Required
		 */
		trimLeadingAndTrailingSpacesAndZeroes: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to validate character Set.
		 * Required
		 */
		validateCharacterSet: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to validate EDI types.
		 * Required
		 */
		validateEDITypes: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to validate XSD types.
		 * Required
		 */
		validateXSDTypes: FormControl<boolean | null | undefined>,
	}
	export function CreateX12ValidationOverrideFormGroup() {
		return new FormGroup<X12ValidationOverrideFormProperties>({
			allowLeadingAndTrailingSpacesAndZeroes: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			messageId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			trailingSeparatorPolicy: new FormControl<EdifactValidationOverrideTrailingSeparatorPolicy | null | undefined>(undefined, [Validators.required]),
			trimLeadingAndTrailingSpacesAndZeroes: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			validateCharacterSet: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			validateEDITypes: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			validateXSDTypes: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The X12 agreement validation settings. */
	export interface X12ValidationSettings {

		/**
		 * The value indicating whether to allow leading and trailing spaces and zeroes.
		 * Required
		 */
		allowLeadingAndTrailingSpacesAndZeroes: boolean;

		/**
		 * The value indicating whether to check for duplicate group control number.
		 * Required
		 */
		checkDuplicateGroupControlNumber: boolean;

		/**
		 * The value indicating whether to check for duplicate interchange control number.
		 * Required
		 */
		checkDuplicateInterchangeControlNumber: boolean;

		/**
		 * The value indicating whether to check for duplicate transaction set control number.
		 * Required
		 */
		checkDuplicateTransactionSetControlNumber: boolean;

		/**
		 * The validity period of interchange control number.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		interchangeControlNumberValidityDays: number;

		/**
		 * The trailing separator policy.
		 * Required
		 */
		trailingSeparatorPolicy: EdifactValidationOverrideTrailingSeparatorPolicy;

		/**
		 * The value indicating whether to trim leading and trailing spaces and zeroes.
		 * Required
		 */
		trimLeadingAndTrailingSpacesAndZeroes: boolean;

		/**
		 * The value indicating whether to validate character set in the message.
		 * Required
		 */
		validateCharacterSet: boolean;

		/**
		 * The value indicating whether to Whether to validate EDI types.
		 * Required
		 */
		validateEDITypes: boolean;

		/**
		 * The value indicating whether to Whether to validate XSD types.
		 * Required
		 */
		validateXSDTypes: boolean;
	}

	/** The X12 agreement validation settings. */
	export interface X12ValidationSettingsFormProperties {

		/**
		 * The value indicating whether to allow leading and trailing spaces and zeroes.
		 * Required
		 */
		allowLeadingAndTrailingSpacesAndZeroes: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to check for duplicate group control number.
		 * Required
		 */
		checkDuplicateGroupControlNumber: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to check for duplicate interchange control number.
		 * Required
		 */
		checkDuplicateInterchangeControlNumber: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to check for duplicate transaction set control number.
		 * Required
		 */
		checkDuplicateTransactionSetControlNumber: FormControl<boolean | null | undefined>,

		/**
		 * The validity period of interchange control number.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		interchangeControlNumberValidityDays: FormControl<number | null | undefined>,

		/**
		 * The trailing separator policy.
		 * Required
		 */
		trailingSeparatorPolicy: FormControl<EdifactValidationOverrideTrailingSeparatorPolicy | null | undefined>,

		/**
		 * The value indicating whether to trim leading and trailing spaces and zeroes.
		 * Required
		 */
		trimLeadingAndTrailingSpacesAndZeroes: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to validate character set in the message.
		 * Required
		 */
		validateCharacterSet: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to Whether to validate EDI types.
		 * Required
		 */
		validateEDITypes: FormControl<boolean | null | undefined>,

		/**
		 * The value indicating whether to Whether to validate XSD types.
		 * Required
		 */
		validateXSDTypes: FormControl<boolean | null | undefined>,
	}
	export function CreateX12ValidationSettingsFormGroup() {
		return new FormGroup<X12ValidationSettingsFormProperties>({
			allowLeadingAndTrailingSpacesAndZeroes: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			checkDuplicateGroupControlNumber: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			checkDuplicateInterchangeControlNumber: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			checkDuplicateTransactionSetControlNumber: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			interchangeControlNumberValidityDays: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			trailingSeparatorPolicy: new FormControl<EdifactValidationOverrideTrailingSeparatorPolicy | null | undefined>(undefined, [Validators.required]),
			trimLeadingAndTrailingSpacesAndZeroes: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			validateCharacterSet: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			validateEDITypes: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			validateXSDTypes: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The X12 delimiter override settings. */
	export interface X12DelimiterOverrides {

		/**
		 * The component separator.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		componentSeparator: number;

		/**
		 * The data element separator.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dataElementSeparator: number;

		/** The message id. */
		messageId?: string | null;

		/** The protocol version. */
		protocolVersion?: string | null;

		/**
		 * The replacement character.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		replaceCharacter: number;

		/**
		 * The value indicating whether to replace separators in payload.
		 * Required
		 */
		replaceSeparatorsInPayload: boolean;

		/**
		 * The segment terminator.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		segmentTerminator: number;

		/**
		 * The segment terminator suffix.
		 * Required
		 */
		segmentTerminatorSuffix: EdifactDelimiterOverrideSegmentTerminatorSuffix;

		/** The target namespace on which this delimiter settings has to be applied. */
		targetNamespace?: string | null;
	}

	/** The X12 delimiter override settings. */
	export interface X12DelimiterOverridesFormProperties {

		/**
		 * The component separator.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		componentSeparator: FormControl<number | null | undefined>,

		/**
		 * The data element separator.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dataElementSeparator: FormControl<number | null | undefined>,

		/** The message id. */
		messageId: FormControl<string | null | undefined>,

		/** The protocol version. */
		protocolVersion: FormControl<string | null | undefined>,

		/**
		 * The replacement character.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		replaceCharacter: FormControl<number | null | undefined>,

		/**
		 * The value indicating whether to replace separators in payload.
		 * Required
		 */
		replaceSeparatorsInPayload: FormControl<boolean | null | undefined>,

		/**
		 * The segment terminator.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		segmentTerminator: FormControl<number | null | undefined>,

		/**
		 * The segment terminator suffix.
		 * Required
		 */
		segmentTerminatorSuffix: FormControl<EdifactDelimiterOverrideSegmentTerminatorSuffix | null | undefined>,

		/** The target namespace on which this delimiter settings has to be applied. */
		targetNamespace: FormControl<string | null | undefined>,
	}
	export function CreateX12DelimiterOverridesFormGroup() {
		return new FormGroup<X12DelimiterOverridesFormProperties>({
			componentSeparator: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			dataElementSeparator: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			messageId: new FormControl<string | null | undefined>(undefined),
			protocolVersion: new FormControl<string | null | undefined>(undefined),
			replaceCharacter: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			replaceSeparatorsInPayload: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			segmentTerminator: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			segmentTerminatorSuffix: new FormControl<EdifactDelimiterOverrideSegmentTerminatorSuffix | null | undefined>(undefined, [Validators.required]),
			targetNamespace: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The agreement type. */
	export enum AgreementType { NotSpecified = 'NotSpecified', AS2 = 'AS2', X12 = 'X12', Edifact = 'Edifact' }


	/** The API deployment parameter metadata. */
	export interface ApiDeploymentParameterMetadata {

		/** The description. */
		description?: string | null;

		/** The display name. */
		displayName?: string | null;

		/** Indicates whether its required. */
		isRequired?: boolean | null;

		/** The type. */
		type?: string | null;

		/** The Api deployment parameter visibility. */
		visibility?: ApiDeploymentParameterMetadataVisibility | null;
	}

	/** The API deployment parameter metadata. */
	export interface ApiDeploymentParameterMetadataFormProperties {

		/** The description. */
		description: FormControl<string | null | undefined>,

		/** The display name. */
		displayName: FormControl<string | null | undefined>,

		/** Indicates whether its required. */
		isRequired: FormControl<boolean | null | undefined>,

		/** The type. */
		type: FormControl<string | null | undefined>,

		/** The Api deployment parameter visibility. */
		visibility: FormControl<ApiDeploymentParameterMetadataVisibility | null | undefined>,
	}
	export function CreateApiDeploymentParameterMetadataFormGroup() {
		return new FormGroup<ApiDeploymentParameterMetadataFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			isRequired: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			visibility: new FormControl<ApiDeploymentParameterMetadataVisibility | null | undefined>(undefined),
		});

	}

	export enum ApiDeploymentParameterMetadataVisibility { NotSpecified = 'NotSpecified', Default = 'Default', Internal = 'Internal' }


	/** The API deployment parameters metadata. */
	export interface ApiDeploymentParameterMetadataSet {

		/** The API deployment parameter metadata. */
		packageContentLink?: ApiDeploymentParameterMetadata;

		/** The API deployment parameter metadata. */
		redisCacheConnectionString?: ApiDeploymentParameterMetadata;
	}

	/** The API deployment parameters metadata. */
	export interface ApiDeploymentParameterMetadataSetFormProperties {
	}
	export function CreateApiDeploymentParameterMetadataSetFormGroup() {
		return new FormGroup<ApiDeploymentParameterMetadataSetFormProperties>({
		});

	}


	/** The Api deployment parameter visibility. */
	export enum ApiDeploymentParameterVisibility { NotSpecified = 'NotSpecified', Default = 'Default', Internal = 'Internal' }


	/** The api operation. */
	export interface ApiOperation {

		/** The api operations properties */
		properties?: ApiOperationPropertiesDefinition;
	}

	/** The api operation. */
	export interface ApiOperationFormProperties {
	}
	export function CreateApiOperationFormGroup() {
		return new FormGroup<ApiOperationFormProperties>({
		});

	}


	/** The api operations properties */
	export interface ApiOperationPropertiesDefinition {

		/** The Api Operation Annotation. */
		annotation?: ApiOperationAnnotation;

		/** The Api reference. */
		api?: ApiReference;

		/** The description of the api operation. */
		description?: string | null;

		/** The swagger schema. */
		inputsDefinition?: SwaggerSchema;

		/** Indicates whether the API operation is notification or not. */
		isNotification?: boolean | null;

		/** Indicates whether the API operation is webhook or not. */
		isWebhook?: boolean | null;

		/** Indicates whether the api operation is pageable. */
		pageable?: boolean | null;

		/** The operation responses definition schemas. */
		responsesDefinition?: {[id: string]: SwaggerSchema };

		/** The summary of the api operation. */
		summary?: string | null;

		/** The trigger type of api operation. */
		trigger?: string | null;

		/** The trigger hint for the api operation. */
		triggerHint?: string | null;

		/** The visibility of the api operation. */
		visibility?: string | null;
	}

	/** The api operations properties */
	export interface ApiOperationPropertiesDefinitionFormProperties {

		/** The description of the api operation. */
		description: FormControl<string | null | undefined>,

		/** Indicates whether the API operation is notification or not. */
		isNotification: FormControl<boolean | null | undefined>,

		/** Indicates whether the API operation is webhook or not. */
		isWebhook: FormControl<boolean | null | undefined>,

		/** Indicates whether the api operation is pageable. */
		pageable: FormControl<boolean | null | undefined>,

		/** The operation responses definition schemas. */
		responsesDefinition: FormControl<{[id: string]: SwaggerSchema } | null | undefined>,

		/** The summary of the api operation. */
		summary: FormControl<string | null | undefined>,

		/** The trigger type of api operation. */
		trigger: FormControl<string | null | undefined>,

		/** The trigger hint for the api operation. */
		triggerHint: FormControl<string | null | undefined>,

		/** The visibility of the api operation. */
		visibility: FormControl<string | null | undefined>,
	}
	export function CreateApiOperationPropertiesDefinitionFormGroup() {
		return new FormGroup<ApiOperationPropertiesDefinitionFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			isNotification: new FormControl<boolean | null | undefined>(undefined),
			isWebhook: new FormControl<boolean | null | undefined>(undefined),
			pageable: new FormControl<boolean | null | undefined>(undefined),
			responsesDefinition: new FormControl<{[id: string]: SwaggerSchema } | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
			trigger: new FormControl<string | null | undefined>(undefined),
			triggerHint: new FormControl<string | null | undefined>(undefined),
			visibility: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Api Operation Annotation. */
	export interface ApiOperationAnnotation {

		/** The family. */
		family?: string | null;

		/**
		 * The revision.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		revision?: number | null;

		/** The status annotation. */
		status?: ApiOperationAnnotationStatus | null;
	}

	/** The Api Operation Annotation. */
	export interface ApiOperationAnnotationFormProperties {

		/** The family. */
		family: FormControl<string | null | undefined>,

		/**
		 * The revision.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		revision: FormControl<number | null | undefined>,

		/** The status annotation. */
		status: FormControl<ApiOperationAnnotationStatus | null | undefined>,
	}
	export function CreateApiOperationAnnotationFormGroup() {
		return new FormGroup<ApiOperationAnnotationFormProperties>({
			family: new FormControl<string | null | undefined>(undefined),
			revision: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<ApiOperationAnnotationStatus | null | undefined>(undefined),
		});

	}

	export enum ApiOperationAnnotationStatus { NotSpecified = 'NotSpecified', Preview = 'Preview', Production = 'Production' }


	/** The Api reference. */
	export interface ApiReference {

		/** The brand color of the api. */
		brandColor?: string | null;

		/** The Api tier. */
		category?: ApiReferenceCategory | null;

		/** The description of the api. */
		description?: string | null;

		/** The display name of the api. */
		displayName?: string | null;

		/** The icon uri of the api. */
		iconUri?: string | null;

		/** The resource reference. */
		integrationServiceEnvironment?: ResourceReference;
		swagger?: Object;
	}

	/** The Api reference. */
	export interface ApiReferenceFormProperties {

		/** The brand color of the api. */
		brandColor: FormControl<string | null | undefined>,

		/** The Api tier. */
		category: FormControl<ApiReferenceCategory | null | undefined>,

		/** The description of the api. */
		description: FormControl<string | null | undefined>,

		/** The display name of the api. */
		displayName: FormControl<string | null | undefined>,

		/** The icon uri of the api. */
		iconUri: FormControl<string | null | undefined>,
	}
	export function CreateApiReferenceFormGroup() {
		return new FormGroup<ApiReferenceFormProperties>({
			brandColor: new FormControl<string | null | undefined>(undefined),
			category: new FormControl<ApiReferenceCategory | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			iconUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ApiReferenceCategory { NotSpecified = 'NotSpecified', Enterprise = 'Enterprise', Standard = 'Standard', Premium = 'Premium' }


	/** The resource reference. */
	export interface ResourceReference {

		/** The resource id. */
		id?: string | null;

		/** Gets the resource name. */
		name?: string | null;

		/** Gets the resource type. */
		type?: string | null;
	}

	/** The resource reference. */
	export interface ResourceReferenceFormProperties {

		/** The resource id. */
		id: FormControl<string | null | undefined>,

		/** Gets the resource name. */
		name: FormControl<string | null | undefined>,

		/** Gets the resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceReferenceFormGroup() {
		return new FormGroup<ResourceReferenceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Object {
	}
	export interface ObjectFormProperties {
	}
	export function CreateObjectFormGroup() {
		return new FormGroup<ObjectFormProperties>({
		});

	}


	/** The swagger schema. */
	export interface SwaggerSchema {
		additionalProperties?: Object;

		/** The schemas which must pass validation when this schema is used. */
		allOf?: Array<SwaggerSchema>;

		/** The discriminator. */
		discriminator?: string | null;

		/** The swagger custom dynamic list. */
		dynamicListNew?: SwaggerCustomDynamicList;

		/** The swagger custom dynamic properties. */
		dynamicSchemaNew?: SwaggerCustomDynamicProperties;

		/** The swagger custom dynamic schema. */
		dynamicSchemaOld?: SwaggerCustomDynamicSchema;

		/** The swagger custom dynamic tree. */
		dynamicTree?: SwaggerCustomDynamicTree;
		example?: Object;

		/** The swagger external documentation */
		externalDocs?: SwaggerExternalDocumentation;

		/** The swagger schema. */
		items?: SwaggerSchema;

		/**
		 * The maximum number of allowed properties.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxProperties?: number | null;

		/**
		 * The minimum number of allowed properties.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minProperties?: number | null;

		/** Indicates the notification url extension. If this is set, the property's value should be a callback url for a webhook. */
		notificationUrlExtension?: boolean | null;

		/** The object properties */
		properties?: {[id: string]: SwaggerSchema };

		/** Indicates whether this property must be present in the a request. */
		readOnly?: boolean | null;

		/** The reference. */
		ref?: string | null;

		/** The object required properties. */
		required?: Array<string>;

		/** The title. */
		title?: string | null;

		/** The swagger schema type. */
		type?: SwaggerSchemaType | null;

		/** The Swagger XML. */
		xml?: SwaggerXml;
	}

	/** The swagger schema. */
	export interface SwaggerSchemaFormProperties {

		/** The discriminator. */
		discriminator: FormControl<string | null | undefined>,

		/**
		 * The maximum number of allowed properties.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxProperties: FormControl<number | null | undefined>,

		/**
		 * The minimum number of allowed properties.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minProperties: FormControl<number | null | undefined>,

		/** Indicates the notification url extension. If this is set, the property's value should be a callback url for a webhook. */
		notificationUrlExtension: FormControl<boolean | null | undefined>,

		/** The object properties */
		properties: FormControl<{[id: string]: SwaggerSchema } | null | undefined>,

		/** Indicates whether this property must be present in the a request. */
		readOnly: FormControl<boolean | null | undefined>,

		/** The reference. */
		ref: FormControl<string | null | undefined>,

		/** The title. */
		title: FormControl<string | null | undefined>,

		/** The swagger schema type. */
		type: FormControl<SwaggerSchemaType | null | undefined>,
	}
	export function CreateSwaggerSchemaFormGroup() {
		return new FormGroup<SwaggerSchemaFormProperties>({
			discriminator: new FormControl<string | null | undefined>(undefined),
			maxProperties: new FormControl<number | null | undefined>(undefined),
			minProperties: new FormControl<number | null | undefined>(undefined),
			notificationUrlExtension: new FormControl<boolean | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: SwaggerSchema } | null | undefined>(undefined),
			readOnly: new FormControl<boolean | null | undefined>(undefined),
			ref: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<SwaggerSchemaType | null | undefined>(undefined),
		});

	}


	/** The swagger custom dynamic list. */
	export interface SwaggerCustomDynamicList {

		/** The built in operation. */
		builtInOperation?: string | null;

		/** The path to an item property which defines the display name of the item. */
		itemTitlePath?: string | null;

		/** The path to a property which defines the value which should be used. */
		itemValuePath?: string | null;

		/** The path to a response property (relative to the response object, not the response body) which contains an array of dynamic value items. */
		itemsPath?: string | null;

		/** The operation id to fetch dynamic schema. */
		operationId?: string | null;

		/** The parameters. */
		parameters?: {[id: string]: SwaggerCustomDynamicProperties };
	}

	/** The swagger custom dynamic list. */
	export interface SwaggerCustomDynamicListFormProperties {

		/** The built in operation. */
		builtInOperation: FormControl<string | null | undefined>,

		/** The path to an item property which defines the display name of the item. */
		itemTitlePath: FormControl<string | null | undefined>,

		/** The path to a property which defines the value which should be used. */
		itemValuePath: FormControl<string | null | undefined>,

		/** The path to a response property (relative to the response object, not the response body) which contains an array of dynamic value items. */
		itemsPath: FormControl<string | null | undefined>,

		/** The operation id to fetch dynamic schema. */
		operationId: FormControl<string | null | undefined>,

		/** The parameters. */
		parameters: FormControl<{[id: string]: SwaggerCustomDynamicProperties } | null | undefined>,
	}
	export function CreateSwaggerCustomDynamicListFormGroup() {
		return new FormGroup<SwaggerCustomDynamicListFormProperties>({
			builtInOperation: new FormControl<string | null | undefined>(undefined),
			itemTitlePath: new FormControl<string | null | undefined>(undefined),
			itemValuePath: new FormControl<string | null | undefined>(undefined),
			itemsPath: new FormControl<string | null | undefined>(undefined),
			operationId: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: SwaggerCustomDynamicProperties } | null | undefined>(undefined),
		});

	}


	/** The swagger custom dynamic properties. */
	export interface SwaggerCustomDynamicProperties {

		/** The operation id to fetch dynamic schema. */
		operationId?: string | null;

		/** The operation parameters. */
		parameters?: {[id: string]: SwaggerCustomDynamicProperties };

		/** Json pointer to the dynamic schema on the response body. */
		valuePath?: string | null;
	}

	/** The swagger custom dynamic properties. */
	export interface SwaggerCustomDynamicPropertiesFormProperties {

		/** The operation id to fetch dynamic schema. */
		operationId: FormControl<string | null | undefined>,

		/** The operation parameters. */
		parameters: FormControl<{[id: string]: SwaggerCustomDynamicProperties } | null | undefined>,

		/** Json pointer to the dynamic schema on the response body. */
		valuePath: FormControl<string | null | undefined>,
	}
	export function CreateSwaggerCustomDynamicPropertiesFormGroup() {
		return new FormGroup<SwaggerCustomDynamicPropertiesFormProperties>({
			operationId: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: SwaggerCustomDynamicProperties } | null | undefined>(undefined),
			valuePath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The swagger custom dynamic schema. */
	export interface SwaggerCustomDynamicSchema {

		/** The operation id to fetch dynamic schema. */
		operationId?: string | null;

		/** The operation parameters. */
		parameters?: {[id: string]: Object };

		/** Json pointer to the dynamic schema on the response body. */
		valuePath?: string | null;
	}

	/** The swagger custom dynamic schema. */
	export interface SwaggerCustomDynamicSchemaFormProperties {

		/** The operation id to fetch dynamic schema. */
		operationId: FormControl<string | null | undefined>,

		/** The operation parameters. */
		parameters: FormControl<{[id: string]: Object } | null | undefined>,

		/** Json pointer to the dynamic schema on the response body. */
		valuePath: FormControl<string | null | undefined>,
	}
	export function CreateSwaggerCustomDynamicSchemaFormGroup() {
		return new FormGroup<SwaggerCustomDynamicSchemaFormProperties>({
			operationId: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: Object } | null | undefined>(undefined),
			valuePath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The swagger custom dynamic tree. */
	export interface SwaggerCustomDynamicTree {

		/** The swagger tree command. */
		browse?: SwaggerCustomDynamicTreeCommand;

		/** The swagger tree command. */
		open?: SwaggerCustomDynamicTreeCommand;

		/** The swagger custom dynamic tree settings. */
		settings?: SwaggerCustomDynamicTreeSettings;
	}

	/** The swagger custom dynamic tree. */
	export interface SwaggerCustomDynamicTreeFormProperties {
	}
	export function CreateSwaggerCustomDynamicTreeFormGroup() {
		return new FormGroup<SwaggerCustomDynamicTreeFormProperties>({
		});

	}


	/** The swagger tree command. */
	export interface SwaggerCustomDynamicTreeCommand {

		/** The path to an item property which defines the display name of the item. */
		itemFullTitlePath?: string | null;

		/** The path to an item property which defines the display name of the item. */
		itemIsParent?: string | null;

		/** The path to an item property which defines the display name of the item. */
		itemTitlePath?: string | null;

		/** The path to an item property which defines the display name of the item. */
		itemValuePath?: string | null;

		/** The path to an item property which defines the display name of the item. */
		itemsPath?: string | null;

		/** The path to an item property which defines the display name of the item. */
		operationId?: string | null;
		parameters?: {[id: string]: SwaggerCustomDynamicTreeParameter };

		/** The path to an item property which defines the display name of the item. */
		selectableFilter?: string | null;
	}

	/** The swagger tree command. */
	export interface SwaggerCustomDynamicTreeCommandFormProperties {

		/** The path to an item property which defines the display name of the item. */
		itemFullTitlePath: FormControl<string | null | undefined>,

		/** The path to an item property which defines the display name of the item. */
		itemIsParent: FormControl<string | null | undefined>,

		/** The path to an item property which defines the display name of the item. */
		itemTitlePath: FormControl<string | null | undefined>,

		/** The path to an item property which defines the display name of the item. */
		itemValuePath: FormControl<string | null | undefined>,

		/** The path to an item property which defines the display name of the item. */
		itemsPath: FormControl<string | null | undefined>,

		/** The path to an item property which defines the display name of the item. */
		operationId: FormControl<string | null | undefined>,
		parameters: FormControl<{[id: string]: SwaggerCustomDynamicTreeParameter } | null | undefined>,

		/** The path to an item property which defines the display name of the item. */
		selectableFilter: FormControl<string | null | undefined>,
	}
	export function CreateSwaggerCustomDynamicTreeCommandFormGroup() {
		return new FormGroup<SwaggerCustomDynamicTreeCommandFormProperties>({
			itemFullTitlePath: new FormControl<string | null | undefined>(undefined),
			itemIsParent: new FormControl<string | null | undefined>(undefined),
			itemTitlePath: new FormControl<string | null | undefined>(undefined),
			itemValuePath: new FormControl<string | null | undefined>(undefined),
			itemsPath: new FormControl<string | null | undefined>(undefined),
			operationId: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: SwaggerCustomDynamicTreeParameter } | null | undefined>(undefined),
			selectableFilter: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The swagger custom dynamic tree parameter. */
	export interface SwaggerCustomDynamicTreeParameter {

		/** The parameter reference. */
		parameterReference?: string | null;

		/** Indicates whether the parameter is required. */
		required?: boolean | null;

		/** Gets or sets a path to a property in the currently selected item to pass as a value to a parameter for the given operation. */
		selectedItemValuePath?: string | null;
		value?: Object;
	}

	/** The swagger custom dynamic tree parameter. */
	export interface SwaggerCustomDynamicTreeParameterFormProperties {

		/** The parameter reference. */
		parameterReference: FormControl<string | null | undefined>,

		/** Indicates whether the parameter is required. */
		required: FormControl<boolean | null | undefined>,

		/** Gets or sets a path to a property in the currently selected item to pass as a value to a parameter for the given operation. */
		selectedItemValuePath: FormControl<string | null | undefined>,
	}
	export function CreateSwaggerCustomDynamicTreeParameterFormGroup() {
		return new FormGroup<SwaggerCustomDynamicTreeParameterFormProperties>({
			parameterReference: new FormControl<string | null | undefined>(undefined),
			required: new FormControl<boolean | null | undefined>(undefined),
			selectedItemValuePath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The swagger custom dynamic tree settings. */
	export interface SwaggerCustomDynamicTreeSettings {

		/** Indicates whether leaf nodes can be selected. */
		CanSelectLeafNodes?: boolean | null;

		/** Indicates whether parent nodes can be selected. */
		CanSelectParentNodes?: boolean | null;
	}

	/** The swagger custom dynamic tree settings. */
	export interface SwaggerCustomDynamicTreeSettingsFormProperties {

		/** Indicates whether leaf nodes can be selected. */
		CanSelectLeafNodes: FormControl<boolean | null | undefined>,

		/** Indicates whether parent nodes can be selected. */
		CanSelectParentNodes: FormControl<boolean | null | undefined>,
	}
	export function CreateSwaggerCustomDynamicTreeSettingsFormGroup() {
		return new FormGroup<SwaggerCustomDynamicTreeSettingsFormProperties>({
			CanSelectLeafNodes: new FormControl<boolean | null | undefined>(undefined),
			CanSelectParentNodes: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The swagger external documentation */
	export interface SwaggerExternalDocumentation {

		/** The document description. */
		description?: string | null;

		/** The vendor extensions. */
		extensions?: {[id: string]: Object };

		/** The documentation Uri. */
		uri?: string | null;
	}

	/** The swagger external documentation */
	export interface SwaggerExternalDocumentationFormProperties {

		/** The document description. */
		description: FormControl<string | null | undefined>,

		/** The vendor extensions. */
		extensions: FormControl<{[id: string]: Object } | null | undefined>,

		/** The documentation Uri. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateSwaggerExternalDocumentationFormGroup() {
		return new FormGroup<SwaggerExternalDocumentationFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			extensions: new FormControl<{[id: string]: Object } | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SwaggerSchemaType { String = 'String', Number = 'Number', Integer = 'Integer', Boolean = 'Boolean', Array = 'Array', File = 'File', Object = 'Object', Null = 'Null' }


	/** The Swagger XML. */
	export interface SwaggerXml {

		/** Indicates whether the property should be an attribute instead of an element. */
		attribute?: boolean | null;

		/** The vendor extensions. */
		extensions?: {[id: string]: Object };

		/** The xml element or attribute name. */
		name?: string | null;

		/** The xml namespace. */
		namespace?: string | null;

		/** The name prefix. */
		prefix?: string | null;

		/** Indicates whether the array elements are wrapped in a container element. */
		wrapped?: boolean | null;
	}

	/** The Swagger XML. */
	export interface SwaggerXmlFormProperties {

		/** Indicates whether the property should be an attribute instead of an element. */
		attribute: FormControl<boolean | null | undefined>,

		/** The vendor extensions. */
		extensions: FormControl<{[id: string]: Object } | null | undefined>,

		/** The xml element or attribute name. */
		name: FormControl<string | null | undefined>,

		/** The xml namespace. */
		namespace: FormControl<string | null | undefined>,

		/** The name prefix. */
		prefix: FormControl<string | null | undefined>,

		/** Indicates whether the array elements are wrapped in a container element. */
		wrapped: FormControl<boolean | null | undefined>,
	}
	export function CreateSwaggerXmlFormGroup() {
		return new FormGroup<SwaggerXmlFormProperties>({
			attribute: new FormControl<boolean | null | undefined>(undefined),
			extensions: new FormControl<{[id: string]: Object } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			namespace: new FormControl<string | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined),
			wrapped: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The list of managed API operations. */
	export interface ApiOperationListResult {

		/** The URL to get the next set of results. */
		nextLink?: string | null;

		/** The api operation definitions for an API. */
		value?: Array<ApiOperation>;
	}

	/** The list of managed API operations. */
	export interface ApiOperationListResultFormProperties {

		/** The URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateApiOperationListResultFormGroup() {
		return new FormGroup<ApiOperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The API backend service. */
	export interface ApiResourceBackendService {

		/** The service URL. */
		serviceUrl?: string | null;
	}

	/** The API backend service. */
	export interface ApiResourceBackendServiceFormProperties {

		/** The service URL. */
		serviceUrl: FormControl<string | null | undefined>,
	}
	export function CreateApiResourceBackendServiceFormGroup() {
		return new FormGroup<ApiResourceBackendServiceFormProperties>({
			serviceUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Api resource definition. */
	export interface ApiResourceDefinitions {

		/** The modified swagger url. */
		modifiedSwaggerUrl?: string | null;

		/** The original swagger url. */
		originalSwaggerUrl?: string | null;
	}

	/** The Api resource definition. */
	export interface ApiResourceDefinitionsFormProperties {

		/** The modified swagger url. */
		modifiedSwaggerUrl: FormControl<string | null | undefined>,

		/** The original swagger url. */
		originalSwaggerUrl: FormControl<string | null | undefined>,
	}
	export function CreateApiResourceDefinitionsFormGroup() {
		return new FormGroup<ApiResourceDefinitionsFormProperties>({
			modifiedSwaggerUrl: new FormControl<string | null | undefined>(undefined),
			originalSwaggerUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The API general information. */
	export interface ApiResourceGeneralInformation {

		/** The description. */
		description?: string | null;

		/** The display name. */
		displayName?: string | null;

		/** The icon url. */
		iconUrl?: string | null;

		/** The release tag. */
		releaseTag?: string | null;

		/** The terms of use url. */
		termsOfUseUrl?: string | null;

		/** The Api tier. */
		tier?: ApiReferenceCategory | null;
	}

	/** The API general information. */
	export interface ApiResourceGeneralInformationFormProperties {

		/** The description. */
		description: FormControl<string | null | undefined>,

		/** The display name. */
		displayName: FormControl<string | null | undefined>,

		/** The icon url. */
		iconUrl: FormControl<string | null | undefined>,

		/** The release tag. */
		releaseTag: FormControl<string | null | undefined>,

		/** The terms of use url. */
		termsOfUseUrl: FormControl<string | null | undefined>,

		/** The Api tier. */
		tier: FormControl<ApiReferenceCategory | null | undefined>,
	}
	export function CreateApiResourceGeneralInformationFormGroup() {
		return new FormGroup<ApiResourceGeneralInformationFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			iconUrl: new FormControl<string | null | undefined>(undefined),
			releaseTag: new FormControl<string | null | undefined>(undefined),
			termsOfUseUrl: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<ApiReferenceCategory | null | undefined>(undefined),
		});

	}


	/** The api resource metadata. */
	export interface ApiResourceMetadata {
		ApiType?: ApiResourceMetadataApiType | null;

		/** The brand color. */
		brandColor?: string | null;

		/** The connection type. */
		connectionType?: string | null;

		/** The API deployment parameters metadata. */
		deploymentParameters?: ApiDeploymentParameterMetadataSet;

		/** The hide key. */
		hideKey?: string | null;

		/** The workflow provisioning state. */
		provisioningState?: ApiResourceMetadataProvisioningState | null;

		/** The source. */
		source?: string | null;

		/** The tags. */
		tags?: {[id: string]: string };

		/** The WSDL import method. */
		wsdlImportMethod?: ApiResourceMetadataWsdlImportMethod | null;

		/** The WSDL service. */
		wsdlService?: WsdlService;
	}

	/** The api resource metadata. */
	export interface ApiResourceMetadataFormProperties {
		ApiType: FormControl<ApiResourceMetadataApiType | null | undefined>,

		/** The brand color. */
		brandColor: FormControl<string | null | undefined>,

		/** The connection type. */
		connectionType: FormControl<string | null | undefined>,

		/** The hide key. */
		hideKey: FormControl<string | null | undefined>,

		/** The workflow provisioning state. */
		provisioningState: FormControl<ApiResourceMetadataProvisioningState | null | undefined>,

		/** The source. */
		source: FormControl<string | null | undefined>,

		/** The tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** The WSDL import method. */
		wsdlImportMethod: FormControl<ApiResourceMetadataWsdlImportMethod | null | undefined>,
	}
	export function CreateApiResourceMetadataFormGroup() {
		return new FormGroup<ApiResourceMetadataFormProperties>({
			ApiType: new FormControl<ApiResourceMetadataApiType | null | undefined>(undefined),
			brandColor: new FormControl<string | null | undefined>(undefined),
			connectionType: new FormControl<string | null | undefined>(undefined),
			hideKey: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<ApiResourceMetadataProvisioningState | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			wsdlImportMethod: new FormControl<ApiResourceMetadataWsdlImportMethod | null | undefined>(undefined),
		});

	}

	export enum ApiResourceMetadataApiType { NotSpecified = 'NotSpecified', Rest = 'Rest', Soap = 'Soap' }

	export enum ApiResourceMetadataProvisioningState { NotSpecified = 'NotSpecified', Accepted = 'Accepted', Running = 'Running', Ready = 'Ready', Creating = 'Creating', Created = 'Created', Deleting = 'Deleting', Deleted = 'Deleted', Canceled = 'Canceled', Failed = 'Failed', Succeeded = 'Succeeded', Moving = 'Moving', Updating = 'Updating', Registering = 'Registering', Registered = 'Registered', Unregistering = 'Unregistering', Unregistered = 'Unregistered', Completed = 'Completed' }

	export enum ApiResourceMetadataWsdlImportMethod { NotSpecified = 'NotSpecified', SoapToRest = 'SoapToRest', SoapPassThrough = 'SoapPassThrough' }


	/** The WSDL service. */
	export interface WsdlService {

		/** The list of endpoints' qualified names. */
		EndpointQualifiedNames?: Array<string>;

		/** The qualified name. */
		qualifiedName?: string | null;
	}

	/** The WSDL service. */
	export interface WsdlServiceFormProperties {

		/** The qualified name. */
		qualifiedName: FormControl<string | null | undefined>,
	}
	export function CreateWsdlServiceFormGroup() {
		return new FormGroup<WsdlServiceFormProperties>({
			qualifiedName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The API resource policies. */
	export interface ApiResourcePolicies {

		/** The API level only policies XML as embedded content. */
		content?: string | null;

		/** The content link to the policies. */
		contentLink?: string | null;
	}

	/** The API resource policies. */
	export interface ApiResourcePoliciesFormProperties {

		/** The API level only policies XML as embedded content. */
		content: FormControl<string | null | undefined>,

		/** The content link to the policies. */
		contentLink: FormControl<string | null | undefined>,
	}
	export function CreateApiResourcePoliciesFormGroup() {
		return new FormGroup<ApiResourcePoliciesFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			contentLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The API resource properties. */
	export interface ApiResourceProperties {

		/** The API definition. */
		apiDefinitionUrl?: string | null;

		/** The Api resource definition. */
		apiDefinitions?: ApiResourceDefinitions;

		/** The API backend service. */
		backendService?: ApiResourceBackendService;

		/** The capabilities. */
		capabilities?: Array<string>;

		/** The Api tier. */
		category?: ApiReferenceCategory | null;

		/** The connection parameters. */
		connectionParameters?: {[id: string]: Object };

		/** The API general information. */
		generalInformation?: ApiResourceGeneralInformation;

		/** The resource reference. */
		integrationServiceEnvironment?: ResourceReference;

		/** The api resource metadata. */
		metadata?: ApiResourceMetadata;

		/** The name */
		name?: string | null;

		/** The API resource policies. */
		policies?: ApiResourcePolicies;

		/** The workflow provisioning state. */
		provisioningState?: ApiResourceMetadataProvisioningState | null;

		/** The runtime urls. */
		runtimeUrls?: Array<string>;
	}

	/** The API resource properties. */
	export interface ApiResourcePropertiesFormProperties {

		/** The API definition. */
		apiDefinitionUrl: FormControl<string | null | undefined>,

		/** The Api tier. */
		category: FormControl<ApiReferenceCategory | null | undefined>,

		/** The connection parameters. */
		connectionParameters: FormControl<{[id: string]: Object } | null | undefined>,

		/** The name */
		name: FormControl<string | null | undefined>,

		/** The workflow provisioning state. */
		provisioningState: FormControl<ApiResourceMetadataProvisioningState | null | undefined>,
	}
	export function CreateApiResourcePropertiesFormGroup() {
		return new FormGroup<ApiResourcePropertiesFormProperties>({
			apiDefinitionUrl: new FormControl<string | null | undefined>(undefined),
			category: new FormControl<ApiReferenceCategory | null | undefined>(undefined),
			connectionParameters: new FormControl<{[id: string]: Object } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<ApiResourceMetadataProvisioningState | null | undefined>(undefined),
		});

	}


	/** The Api tier. */
	export enum ApiTier { NotSpecified = 'NotSpecified', Enterprise = 'Enterprise', Standard = 'Standard', Premium = 'Premium' }

	export enum ApiType { NotSpecified = 'NotSpecified', Rest = 'Rest', Soap = 'Soap' }


	/** The artifact content properties definition. */
	export interface ArtifactContentPropertiesDefinition {
		content?: any;

		/** The content link. */
		contentLink?: ContentLink;

		/** The content type. */
		contentType?: string | null;
	}

	/** The artifact content properties definition. */
	export interface ArtifactContentPropertiesDefinitionFormProperties {
		content: FormControl<any | null | undefined>,

		/** The content type. */
		contentType: FormControl<string | null | undefined>,
	}
	export function CreateArtifactContentPropertiesDefinitionFormGroup() {
		return new FormGroup<ArtifactContentPropertiesDefinitionFormProperties>({
			content: new FormControl<any | null | undefined>(undefined),
			contentType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The content link. */
	export interface ContentLink {

		/** The content hash. */
		contentHash?: ContentHash;

		/**
		 * The content size.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		contentSize?: string | null;

		/** The content version. */
		contentVersion?: string | null;
		metadata?: Object;

		/** The content link URI. */
		uri?: string | null;
	}

	/** The content link. */
	export interface ContentLinkFormProperties {

		/**
		 * The content size.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		contentSize: FormControl<string | null | undefined>,

		/** The content version. */
		contentVersion: FormControl<string | null | undefined>,

		/** The content link URI. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateContentLinkFormGroup() {
		return new FormGroup<ContentLinkFormProperties>({
			contentSize: new FormControl<string | null | undefined>(undefined),
			contentVersion: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The content hash. */
	export interface ContentHash {

		/** The algorithm of the content hash. */
		algorithm?: string | null;

		/** The value of the content hash. */
		value?: string | null;
	}

	/** The content hash. */
	export interface ContentHashFormProperties {

		/** The algorithm of the content hash. */
		algorithm: FormControl<string | null | undefined>,

		/** The value of the content hash. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateContentHashFormGroup() {
		return new FormGroup<ContentHashFormProperties>({
			algorithm: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The artifact properties definition. */
	export interface ArtifactProperties {

		/** The artifact changed time. */
		changedTime?: Date | null;

		/** The artifact creation time. */
		createdTime?: Date | null;
		metadata?: any;
	}

	/** The artifact properties definition. */
	export interface ArtifactPropertiesFormProperties {

		/** The artifact changed time. */
		changedTime: FormControl<Date | null | undefined>,

		/** The artifact creation time. */
		createdTime: FormControl<Date | null | undefined>,
		metadata: FormControl<any | null | undefined>,
	}
	export function CreateArtifactPropertiesFormGroup() {
		return new FormGroup<ArtifactPropertiesFormProperties>({
			changedTime: new FormControl<Date | null | undefined>(undefined),
			createdTime: new FormControl<Date | null | undefined>(undefined),
			metadata: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** A collection of assembly definitions. */
	export interface AssemblyCollection {
		value?: Array<AssemblyDefinition>;
	}

	/** A collection of assembly definitions. */
	export interface AssemblyCollectionFormProperties {
	}
	export function CreateAssemblyCollectionFormGroup() {
		return new FormGroup<AssemblyCollectionFormProperties>({
		});

	}


	/** The assembly definition. */
	export interface AssemblyDefinition {

		/**
		 * The assembly properties definition.
		 * Required
		 */
		properties: AssemblyProperties;
	}

	/** The assembly definition. */
	export interface AssemblyDefinitionFormProperties {
	}
	export function CreateAssemblyDefinitionFormGroup() {
		return new FormGroup<AssemblyDefinitionFormProperties>({
		});

	}


	/** The assembly properties definition. */
	export interface AssemblyProperties {

		/** The assembly culture. */
		assemblyCulture?: string | null;

		/**
		 * The assembly name.
		 * Required
		 */
		assemblyName: string;

		/** The assembly public key token. */
		assemblyPublicKeyToken?: string | null;

		/** The assembly version. */
		assemblyVersion?: string | null;
	}

	/** The assembly properties definition. */
	export interface AssemblyPropertiesFormProperties {

		/** The assembly culture. */
		assemblyCulture: FormControl<string | null | undefined>,

		/**
		 * The assembly name.
		 * Required
		 */
		assemblyName: FormControl<string | null | undefined>,

		/** The assembly public key token. */
		assemblyPublicKeyToken: FormControl<string | null | undefined>,

		/** The assembly version. */
		assemblyVersion: FormControl<string | null | undefined>,
	}
	export function CreateAssemblyPropertiesFormGroup() {
		return new FormGroup<AssemblyPropertiesFormProperties>({
			assemblyCulture: new FormControl<string | null | undefined>(undefined),
			assemblyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			assemblyPublicKeyToken: new FormControl<string | null | undefined>(undefined),
			assemblyVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Azure async operation state. */
	export enum AzureAsyncOperationState { Failed = 'Failed', Succeeded = 'Succeeded', Pending = 'Pending', Canceled = 'Canceled' }


	/** The azure resource error info. */
	export interface AzureResourceErrorInfo {

		/** The error details. */
		details?: Array<AzureResourceErrorInfo>;

		/**
		 * The error message.
		 * Required
		 */
		message: string;
	}

	/** The azure resource error info. */
	export interface AzureResourceErrorInfoFormProperties {

		/**
		 * The error message.
		 * Required
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateAzureResourceErrorInfoFormGroup() {
		return new FormGroup<AzureResourceErrorInfoFormProperties>({
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The B2B partner content. */
	export interface B2BPartnerContent {

		/** The list of partner business identities. */
		businessIdentities?: Array<BusinessIdentity>;
	}

	/** The B2B partner content. */
	export interface B2BPartnerContentFormProperties {
	}
	export function CreateB2BPartnerContentFormGroup() {
		return new FormGroup<B2BPartnerContentFormProperties>({
		});

	}


	/** The batch configuration resource definition. */
	export interface BatchConfiguration {

		/**
		 * The batch configuration properties definition.
		 * Required
		 */
		properties: BatchConfigurationProperties;
	}

	/** The batch configuration resource definition. */
	export interface BatchConfigurationFormProperties {
	}
	export function CreateBatchConfigurationFormGroup() {
		return new FormGroup<BatchConfigurationFormProperties>({
		});

	}


	/** The batch configuration properties definition. */
	export interface BatchConfigurationProperties {

		/**
		 * The name of the batch group.
		 * Required
		 */
		batchGroupName: string;

		/** The changed time. */
		changedTime?: Date | null;

		/** The created time. */
		createdTime?: Date | null;

		/**
		 * The batch release criteria.
		 * Required
		 */
		releaseCriteria: BatchReleaseCriteria;
	}

	/** The batch configuration properties definition. */
	export interface BatchConfigurationPropertiesFormProperties {

		/**
		 * The name of the batch group.
		 * Required
		 */
		batchGroupName: FormControl<string | null | undefined>,

		/** The changed time. */
		changedTime: FormControl<Date | null | undefined>,

		/** The created time. */
		createdTime: FormControl<Date | null | undefined>,
	}
	export function CreateBatchConfigurationPropertiesFormGroup() {
		return new FormGroup<BatchConfigurationPropertiesFormProperties>({
			batchGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			changedTime: new FormControl<Date | null | undefined>(undefined),
			createdTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The batch release criteria. */
	export interface BatchReleaseCriteria {

		/**
		 * The batch size in bytes.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		batchSize?: number | null;

		/**
		 * The message count.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		messageCount?: number | null;

		/** The workflow trigger recurrence. */
		recurrence?: WorkflowTriggerRecurrence;
	}

	/** The batch release criteria. */
	export interface BatchReleaseCriteriaFormProperties {

		/**
		 * The batch size in bytes.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		batchSize: FormControl<number | null | undefined>,

		/**
		 * The message count.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		messageCount: FormControl<number | null | undefined>,
	}
	export function CreateBatchReleaseCriteriaFormGroup() {
		return new FormGroup<BatchReleaseCriteriaFormProperties>({
			batchSize: new FormControl<number | null | undefined>(undefined),
			messageCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The workflow trigger recurrence. */
	export interface WorkflowTriggerRecurrence {

		/** The end time. */
		endTime?: string | null;

		/** The recurrence frequency. */
		frequency?: WorkflowTriggerRecurrenceFrequency | null;

		/**
		 * The interval.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		interval?: number | null;

		/** The recurrence schedule. */
		schedule?: RecurrenceSchedule;

		/** The start time. */
		startTime?: string | null;

		/** The time zone. */
		timeZone?: string | null;
	}

	/** The workflow trigger recurrence. */
	export interface WorkflowTriggerRecurrenceFormProperties {

		/** The end time. */
		endTime: FormControl<string | null | undefined>,

		/** The recurrence frequency. */
		frequency: FormControl<WorkflowTriggerRecurrenceFrequency | null | undefined>,

		/**
		 * The interval.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		interval: FormControl<number | null | undefined>,

		/** The start time. */
		startTime: FormControl<string | null | undefined>,

		/** The time zone. */
		timeZone: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowTriggerRecurrenceFormGroup() {
		return new FormGroup<WorkflowTriggerRecurrenceFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			frequency: new FormControl<WorkflowTriggerRecurrenceFrequency | null | undefined>(undefined),
			interval: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum WorkflowTriggerRecurrenceFrequency { NotSpecified = 'NotSpecified', Second = 'Second', Minute = 'Minute', Hour = 'Hour', Day = 'Day', Week = 'Week', Month = 'Month', Year = 'Year' }


	/** The recurrence schedule. */
	export interface RecurrenceSchedule {

		/** The hours. */
		hours?: Array<number>;

		/** The minutes. */
		minutes?: Array<number>;

		/** The month days. */
		monthDays?: Array<number>;

		/** The monthly occurrences. */
		monthlyOccurrences?: Array<RecurrenceScheduleOccurrence>;

		/** The days of the week. */
		weekDays?: Array<RecurrenceScheduleOccurrenceDay>;
	}

	/** The recurrence schedule. */
	export interface RecurrenceScheduleFormProperties {
	}
	export function CreateRecurrenceScheduleFormGroup() {
		return new FormGroup<RecurrenceScheduleFormProperties>({
		});

	}


	/** The recurrence schedule occurrence. */
	export interface RecurrenceScheduleOccurrence {

		/** The day of the week. */
		day?: RecurrenceScheduleOccurrenceDay | null;

		/**
		 * The occurrence.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		occurrence?: number | null;
	}

	/** The recurrence schedule occurrence. */
	export interface RecurrenceScheduleOccurrenceFormProperties {

		/** The day of the week. */
		day: FormControl<RecurrenceScheduleOccurrenceDay | null | undefined>,

		/**
		 * The occurrence.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		occurrence: FormControl<number | null | undefined>,
	}
	export function CreateRecurrenceScheduleOccurrenceFormGroup() {
		return new FormGroup<RecurrenceScheduleOccurrenceFormProperties>({
			day: new FormControl<RecurrenceScheduleOccurrenceDay | null | undefined>(undefined),
			occurrence: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum RecurrenceScheduleOccurrenceDay { Sunday = 'Sunday', Monday = 'Monday', Tuesday = 'Tuesday', Wednesday = 'Wednesday', Thursday = 'Thursday', Friday = 'Friday', Saturday = 'Saturday' }


	/** A collection of batch configurations. */
	export interface BatchConfigurationCollection {
		value?: Array<BatchConfiguration>;
	}

	/** A collection of batch configurations. */
	export interface BatchConfigurationCollectionFormProperties {
	}
	export function CreateBatchConfigurationCollectionFormGroup() {
		return new FormGroup<BatchConfigurationCollectionFormProperties>({
		});

	}


	/** The callback url. */
	export interface CallbackUrl {

		/** The URL value. */
		value?: string | null;
	}

	/** The callback url. */
	export interface CallbackUrlFormProperties {

		/** The URL value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateCallbackUrlFormGroup() {
		return new FormGroup<CallbackUrlFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The correlation property. */
	export interface Correlation {

		/** The client tracking id. */
		clientTrackingId?: string | null;
	}

	/** The correlation property. */
	export interface CorrelationFormProperties {

		/** The client tracking id. */
		clientTrackingId: FormControl<string | null | undefined>,
	}
	export function CreateCorrelationFormGroup() {
		return new FormGroup<CorrelationFormProperties>({
			clientTrackingId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The day of the week. */
	export enum DayOfWeek { Sunday = 'Sunday', Monday = 'Monday', Tuesday = 'Tuesday', Wednesday = 'Wednesday', Thursday = 'Thursday', Friday = 'Friday', Saturday = 'Saturday' }


	/** The edifact character set. */
	export enum EdifactCharacterSet { NotSpecified = 'NotSpecified', UNOB = 'UNOB', UNOA = 'UNOA', UNOC = 'UNOC', UNOD = 'UNOD', UNOE = 'UNOE', UNOF = 'UNOF', UNOG = 'UNOG', UNOH = 'UNOH', UNOI = 'UNOI', UNOJ = 'UNOJ', UNOK = 'UNOK', UNOX = 'UNOX', UNOY = 'UNOY', KECA = 'KECA' }


	/** The edifact decimal indicator. */
	export enum EdifactDecimalIndicator { NotSpecified = 'NotSpecified', Comma = 'Comma', Decimal = 'Decimal' }


	/** The encryption algorithm. */
	export enum EncryptionAlgorithm { NotSpecified = 'NotSpecified', None = 'None', DES3 = 'DES3', RC2 = 'RC2', AES128 = 'AES128', AES192 = 'AES192', AES256 = 'AES256' }


	/** The error info. */
	export interface ErrorInfo {

		/**
		 * The error code.
		 * Required
		 */
		code: string;
	}

	/** The error info. */
	export interface ErrorInfoFormProperties {

		/**
		 * The error code.
		 * Required
		 */
		code: FormControl<string | null | undefined>,
	}
	export function CreateErrorInfoFormGroup() {
		return new FormGroup<ErrorInfoFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Error properties indicate why the Logic service was not able to process the incoming request. The reason is provided in the error message. */
	export interface ErrorProperties {

		/** Error code. */
		code?: string | null;

		/** Error message indicating why the operation failed. */
		message?: string | null;
	}

	/** Error properties indicate why the Logic service was not able to process the incoming request. The reason is provided in the error message. */
	export interface ErrorPropertiesFormProperties {

		/** Error code. */
		code: FormControl<string | null | undefined>,

		/** Error message indicating why the operation failed. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorPropertiesFormGroup() {
		return new FormGroup<ErrorPropertiesFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Error response indicates Logic service is not able to process the incoming request. The error property contains the error details. */
	export interface ErrorResponse {

		/** Error properties indicate why the Logic service was not able to process the incoming request. The reason is provided in the error message. */
		error?: ErrorProperties;
	}

	/** Error response indicates Logic service is not able to process the incoming request. The error property contains the error details. */
	export interface ErrorResponseFormProperties {
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
		});

	}


	/** The error response code. */
	export enum ErrorResponseCode { NotSpecified = 'NotSpecified', IntegrationServiceEnvironmentNotFound = 'IntegrationServiceEnvironmentNotFound', InternalServerError = 'InternalServerError', InvalidOperationId = 'InvalidOperationId' }


	/** The event level. */
	export enum EventLevel { LogAlways = 'LogAlways', Critical = 'Critical', Error = 'Error', Warning = 'Warning', Informational = 'Informational', Verbose = 'Verbose' }


	/** The expression. */
	export interface Expression {

		/** The azure resource error info. */
		error?: AzureResourceErrorInfo;

		/** The sub expressions. */
		subexpressions?: Array<Expression>;

		/** The text. */
		text?: string | null;
		value?: any;
	}

	/** The expression. */
	export interface ExpressionFormProperties {

		/** The text. */
		text: FormControl<string | null | undefined>,
		value: FormControl<any | null | undefined>,
	}
	export function CreateExpressionFormGroup() {
		return new FormGroup<ExpressionFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** The expression root. */
	export interface ExpressionRoot {

		/** The path. */
		path?: string | null;
	}

	/** The expression root. */
	export interface ExpressionRootFormProperties {

		/** The path. */
		path: FormControl<string | null | undefined>,
	}
	export function CreateExpressionRootFormGroup() {
		return new FormGroup<ExpressionRootFormProperties>({
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The expression traces. */
	export interface ExpressionTraces {
		inputs?: Array<ExpressionRoot>;
	}

	/** The expression traces. */
	export interface ExpressionTracesFormProperties {
	}
	export function CreateExpressionTracesFormGroup() {
		return new FormGroup<ExpressionTracesFormProperties>({
		});

	}


	/** The extended error info. */
	export interface ExtendedErrorInfo {

		/**
		 * The error response code.
		 * Required
		 */
		code: ErrorResponseCode;

		/** The error message details. */
		details?: Array<ExtendedErrorInfo>;
		innerError?: Object;

		/**
		 * The error message.
		 * Required
		 */
		message: string;
	}

	/** The extended error info. */
	export interface ExtendedErrorInfoFormProperties {

		/**
		 * The error response code.
		 * Required
		 */
		code: FormControl<ErrorResponseCode | null | undefined>,

		/**
		 * The error message.
		 * Required
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateExtendedErrorInfoFormGroup() {
		return new FormGroup<ExtendedErrorInfoFormProperties>({
			code: new FormControl<ErrorResponseCode | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The flow endpoints configuration. */
	export interface FlowEndpoints {

		/** The access endpoint ip address. */
		accessEndpointIpAddresses?: Array<IpAddress>;

		/** The outgoing ip address. */
		outgoingIpAddresses?: Array<IpAddress>;
	}

	/** The flow endpoints configuration. */
	export interface FlowEndpointsFormProperties {
	}
	export function CreateFlowEndpointsFormGroup() {
		return new FormGroup<FlowEndpointsFormProperties>({
		});

	}


	/** The ip address. */
	export interface IpAddress {

		/** The address. */
		address?: string | null;
	}

	/** The ip address. */
	export interface IpAddressFormProperties {

		/** The address. */
		address: FormControl<string | null | undefined>,
	}
	export function CreateIpAddressFormGroup() {
		return new FormGroup<IpAddressFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The endpoints configuration. */
	export interface FlowEndpointsConfiguration {

		/** The flow endpoints configuration. */
		connector?: FlowEndpoints;

		/** The flow endpoints configuration. */
		workflow?: FlowEndpoints;
	}

	/** The endpoints configuration. */
	export interface FlowEndpointsConfigurationFormProperties {
	}
	export function CreateFlowEndpointsConfigurationFormGroup() {
		return new FormGroup<FlowEndpointsConfigurationFormProperties>({
		});

	}


	/** The parameters to generate upgraded definition. */
	export interface GenerateUpgradedDefinitionParameters {

		/** The target schema version. */
		targetSchemaVersion?: string | null;
	}

	/** The parameters to generate upgraded definition. */
	export interface GenerateUpgradedDefinitionParametersFormProperties {

		/** The target schema version. */
		targetSchemaVersion: FormControl<string | null | undefined>,
	}
	export function CreateGenerateUpgradedDefinitionParametersFormGroup() {
		return new FormGroup<GenerateUpgradedDefinitionParametersFormProperties>({
			targetSchemaVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The callback url parameters. */
	export interface GetCallbackUrlParameters {

		/** The key type. */
		keyType?: GetCallbackUrlParametersKeyType | null;

		/** The expiry time. */
		notAfter?: Date | null;
	}

	/** The callback url parameters. */
	export interface GetCallbackUrlParametersFormProperties {

		/** The key type. */
		keyType: FormControl<GetCallbackUrlParametersKeyType | null | undefined>,

		/** The expiry time. */
		notAfter: FormControl<Date | null | undefined>,
	}
	export function CreateGetCallbackUrlParametersFormGroup() {
		return new FormGroup<GetCallbackUrlParametersFormProperties>({
			keyType: new FormControl<GetCallbackUrlParametersKeyType | null | undefined>(undefined),
			notAfter: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum GetCallbackUrlParametersKeyType { NotSpecified = 'NotSpecified', Primary = 'Primary', Secondary = 'Secondary' }


	/** The signing or hashing algorithm. */
	export enum HashingAlgorithm { NotSpecified = 'NotSpecified', None = 'None', MD5 = 'MD5', SHA1 = 'SHA1', SHA2256 = 'SHA2256', SHA2384 = 'SHA2384', SHA2512 = 'SHA2512' }


	/** The integration account. */
	export interface IntegrationAccount {

		/** The integration account properties. */
		properties?: IntegrationAccountProperties;

		/** The integration account sku. */
		sku?: IntegrationAccountSku;
	}

	/** The integration account. */
	export interface IntegrationAccountFormProperties {
	}
	export function CreateIntegrationAccountFormGroup() {
		return new FormGroup<IntegrationAccountFormProperties>({
		});

	}


	/** The integration account properties. */
	export interface IntegrationAccountProperties {

		/** The integration service environment. */
		integrationServiceEnvironment?: IntegrationServiceEnvironment;

		/** The workflow state. */
		state?: IntegrationServiceEnvironmentPropertiesState | null;
	}

	/** The integration account properties. */
	export interface IntegrationAccountPropertiesFormProperties {

		/** The workflow state. */
		state: FormControl<IntegrationServiceEnvironmentPropertiesState | null | undefined>,
	}
	export function CreateIntegrationAccountPropertiesFormGroup() {
		return new FormGroup<IntegrationAccountPropertiesFormProperties>({
			state: new FormControl<IntegrationServiceEnvironmentPropertiesState | null | undefined>(undefined),
		});

	}


	/** The integration service environment. */
	export interface IntegrationServiceEnvironment {

		/** The integration service environment properties. */
		properties?: IntegrationServiceEnvironmentProperties;

		/** The integration service environment sku. */
		sku?: IntegrationServiceEnvironmentSku;
	}

	/** The integration service environment. */
	export interface IntegrationServiceEnvironmentFormProperties {
	}
	export function CreateIntegrationServiceEnvironmentFormGroup() {
		return new FormGroup<IntegrationServiceEnvironmentFormProperties>({
		});

	}


	/** The integration service environment properties. */
	export interface IntegrationServiceEnvironmentProperties {

		/** The endpoints configuration. */
		endpointsConfiguration?: FlowEndpointsConfiguration;

		/** Gets the tracking id. */
		integrationServiceEnvironmentId?: string | null;

		/** The network configuration. */
		networkConfiguration?: NetworkConfiguration;

		/** The workflow provisioning state. */
		provisioningState?: ApiResourceMetadataProvisioningState | null;

		/** The workflow state. */
		state?: IntegrationServiceEnvironmentPropertiesState | null;
	}

	/** The integration service environment properties. */
	export interface IntegrationServiceEnvironmentPropertiesFormProperties {

		/** Gets the tracking id. */
		integrationServiceEnvironmentId: FormControl<string | null | undefined>,

		/** The workflow provisioning state. */
		provisioningState: FormControl<ApiResourceMetadataProvisioningState | null | undefined>,

		/** The workflow state. */
		state: FormControl<IntegrationServiceEnvironmentPropertiesState | null | undefined>,
	}
	export function CreateIntegrationServiceEnvironmentPropertiesFormGroup() {
		return new FormGroup<IntegrationServiceEnvironmentPropertiesFormProperties>({
			integrationServiceEnvironmentId: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<ApiResourceMetadataProvisioningState | null | undefined>(undefined),
			state: new FormControl<IntegrationServiceEnvironmentPropertiesState | null | undefined>(undefined),
		});

	}


	/** The network configuration. */
	export interface NetworkConfiguration {

		/** The integration service environment access endpoint. */
		accessEndpoint?: IntegrationServiceEnvironmentAccessEndpoint;

		/** The subnets. */
		subnets?: Array<ResourceReference>;

		/** Gets the virtual network address space. */
		virtualNetworkAddressSpace?: string | null;
	}

	/** The network configuration. */
	export interface NetworkConfigurationFormProperties {

		/** Gets the virtual network address space. */
		virtualNetworkAddressSpace: FormControl<string | null | undefined>,
	}
	export function CreateNetworkConfigurationFormGroup() {
		return new FormGroup<NetworkConfigurationFormProperties>({
			virtualNetworkAddressSpace: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The integration service environment access endpoint. */
	export interface IntegrationServiceEnvironmentAccessEndpoint {

		/** The integration service environment access endpoint type. */
		type?: IntegrationServiceEnvironmentAccessEndpointType | null;
	}

	/** The integration service environment access endpoint. */
	export interface IntegrationServiceEnvironmentAccessEndpointFormProperties {

		/** The integration service environment access endpoint type. */
		type: FormControl<IntegrationServiceEnvironmentAccessEndpointType | null | undefined>,
	}
	export function CreateIntegrationServiceEnvironmentAccessEndpointFormGroup() {
		return new FormGroup<IntegrationServiceEnvironmentAccessEndpointFormProperties>({
			type: new FormControl<IntegrationServiceEnvironmentAccessEndpointType | null | undefined>(undefined),
		});

	}

	export enum IntegrationServiceEnvironmentAccessEndpointType { NotSpecified = 'NotSpecified', External = 'External', Internal = 'Internal' }

	export enum IntegrationServiceEnvironmentPropertiesState { NotSpecified = 'NotSpecified', Completed = 'Completed', Enabled = 'Enabled', Disabled = 'Disabled', Deleted = 'Deleted', Suspended = 'Suspended' }


	/** The integration service environment sku. */
	export interface IntegrationServiceEnvironmentSku {

		/**
		 * The sku capacity.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		capacity?: number | null;

		/** The integration service environment sku name. */
		name?: IntegrationServiceEnvironmentSkuName | null;
	}

	/** The integration service environment sku. */
	export interface IntegrationServiceEnvironmentSkuFormProperties {

		/**
		 * The sku capacity.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		capacity: FormControl<number | null | undefined>,

		/** The integration service environment sku name. */
		name: FormControl<IntegrationServiceEnvironmentSkuName | null | undefined>,
	}
	export function CreateIntegrationServiceEnvironmentSkuFormGroup() {
		return new FormGroup<IntegrationServiceEnvironmentSkuFormProperties>({
			capacity: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<IntegrationServiceEnvironmentSkuName | null | undefined>(undefined),
		});

	}

	export enum IntegrationServiceEnvironmentSkuName { NotSpecified = 'NotSpecified', Premium = 'Premium', Developer = 'Developer' }


	/** The integration account sku. */
	export interface IntegrationAccountSku {

		/**
		 * The integration account sku name.
		 * Required
		 */
		name: IntegrationAccountSkuName;
	}

	/** The integration account sku. */
	export interface IntegrationAccountSkuFormProperties {

		/**
		 * The integration account sku name.
		 * Required
		 */
		name: FormControl<IntegrationAccountSkuName | null | undefined>,
	}
	export function CreateIntegrationAccountSkuFormGroup() {
		return new FormGroup<IntegrationAccountSkuFormProperties>({
			name: new FormControl<IntegrationAccountSkuName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum IntegrationAccountSkuName { NotSpecified = 'NotSpecified', Free = 'Free', Basic = 'Basic', Standard = 'Standard' }


	/** The integration account agreement. */
	export interface IntegrationAccountAgreement {

		/**
		 * The integration account agreement properties.
		 * Required
		 */
		properties: IntegrationAccountAgreementProperties;
	}

	/** The integration account agreement. */
	export interface IntegrationAccountAgreementFormProperties {
	}
	export function CreateIntegrationAccountAgreementFormGroup() {
		return new FormGroup<IntegrationAccountAgreementFormProperties>({
		});

	}


	/** The integration account agreement properties. */
	export interface IntegrationAccountAgreementProperties {

		/**
		 * The agreement type.
		 * Required
		 */
		agreementType: AgreementType;

		/** The changed time. */
		changedTime?: Date | null;

		/**
		 * The integration account agreement content.
		 * Required
		 */
		content: AgreementContent;

		/** The created time. */
		createdTime?: Date | null;

		/**
		 * The integration account partner's business identity.
		 * Required
		 */
		guestIdentity: BusinessIdentity;

		/**
		 * The integration account partner that is set as guest partner for this agreement.
		 * Required
		 */
		guestPartner: string;

		/**
		 * The integration account partner's business identity.
		 * Required
		 */
		hostIdentity: BusinessIdentity;

		/**
		 * The integration account partner that is set as host partner for this agreement.
		 * Required
		 */
		hostPartner: string;

		/** The metadata. */
		metadata?: string | null;
	}

	/** The integration account agreement properties. */
	export interface IntegrationAccountAgreementPropertiesFormProperties {

		/**
		 * The agreement type.
		 * Required
		 */
		agreementType: FormControl<AgreementType | null | undefined>,

		/** The changed time. */
		changedTime: FormControl<Date | null | undefined>,

		/** The created time. */
		createdTime: FormControl<Date | null | undefined>,

		/**
		 * The integration account partner that is set as guest partner for this agreement.
		 * Required
		 */
		guestPartner: FormControl<string | null | undefined>,

		/**
		 * The integration account partner that is set as host partner for this agreement.
		 * Required
		 */
		hostPartner: FormControl<string | null | undefined>,

		/** The metadata. */
		metadata: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationAccountAgreementPropertiesFormGroup() {
		return new FormGroup<IntegrationAccountAgreementPropertiesFormProperties>({
			agreementType: new FormControl<AgreementType | null | undefined>(undefined, [Validators.required]),
			changedTime: new FormControl<Date | null | undefined>(undefined),
			createdTime: new FormControl<Date | null | undefined>(undefined),
			guestPartner: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			hostPartner: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metadata: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The integration account agreement filter for odata query. */
	export interface IntegrationAccountAgreementFilter {

		/**
		 * The agreement type.
		 * Required
		 */
		agreementType: AgreementType;
	}

	/** The integration account agreement filter for odata query. */
	export interface IntegrationAccountAgreementFilterFormProperties {

		/**
		 * The agreement type.
		 * Required
		 */
		agreementType: FormControl<AgreementType | null | undefined>,
	}
	export function CreateIntegrationAccountAgreementFilterFormGroup() {
		return new FormGroup<IntegrationAccountAgreementFilterFormProperties>({
			agreementType: new FormControl<AgreementType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The list of integration account agreements. */
	export interface IntegrationAccountAgreementListResult {

		/** The URL to get the next set of results. */
		nextLink?: string | null;

		/** The list of integration account agreements. */
		value?: Array<IntegrationAccountAgreement>;
	}

	/** The list of integration account agreements. */
	export interface IntegrationAccountAgreementListResultFormProperties {

		/** The URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationAccountAgreementListResultFormGroup() {
		return new FormGroup<IntegrationAccountAgreementListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The integration account certificate. */
	export interface IntegrationAccountCertificate {

		/**
		 * The integration account certificate properties.
		 * Required
		 */
		properties: IntegrationAccountCertificateProperties;
	}

	/** The integration account certificate. */
	export interface IntegrationAccountCertificateFormProperties {
	}
	export function CreateIntegrationAccountCertificateFormGroup() {
		return new FormGroup<IntegrationAccountCertificateFormProperties>({
		});

	}


	/** The integration account certificate properties. */
	export interface IntegrationAccountCertificateProperties {

		/** The changed time. */
		changedTime?: Date | null;

		/** The created time. */
		createdTime?: Date | null;

		/** The reference to the key vault key. */
		key?: KeyVaultKeyReference;

		/** The metadata. */
		metadata?: string | null;

		/** The public certificate. */
		publicCertificate?: string | null;
	}

	/** The integration account certificate properties. */
	export interface IntegrationAccountCertificatePropertiesFormProperties {

		/** The changed time. */
		changedTime: FormControl<Date | null | undefined>,

		/** The created time. */
		createdTime: FormControl<Date | null | undefined>,

		/** The metadata. */
		metadata: FormControl<string | null | undefined>,

		/** The public certificate. */
		publicCertificate: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationAccountCertificatePropertiesFormGroup() {
		return new FormGroup<IntegrationAccountCertificatePropertiesFormProperties>({
			changedTime: new FormControl<Date | null | undefined>(undefined),
			createdTime: new FormControl<Date | null | undefined>(undefined),
			metadata: new FormControl<string | null | undefined>(undefined),
			publicCertificate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The reference to the key vault key. */
	export interface KeyVaultKeyReference {

		/**
		 * The private key name in key vault.
		 * Required
		 */
		keyName: string;

		/**
		 * The key vault reference.
		 * Required
		 */
		keyVault: KeyVaultKeyReferenceKeyVault;

		/** The private key version in key vault. */
		keyVersion?: string | null;
	}

	/** The reference to the key vault key. */
	export interface KeyVaultKeyReferenceFormProperties {

		/**
		 * The private key name in key vault.
		 * Required
		 */
		keyName: FormControl<string | null | undefined>,

		/** The private key version in key vault. */
		keyVersion: FormControl<string | null | undefined>,
	}
	export function CreateKeyVaultKeyReferenceFormGroup() {
		return new FormGroup<KeyVaultKeyReferenceFormProperties>({
			keyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			keyVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface KeyVaultKeyReferenceKeyVault {

		/** The resource id. */
		id?: string | null;

		/** The resource name. */
		name?: string | null;

		/** The resource type. */
		type?: string | null;
	}
	export interface KeyVaultKeyReferenceKeyVaultFormProperties {

		/** The resource id. */
		id: FormControl<string | null | undefined>,

		/** The resource name. */
		name: FormControl<string | null | undefined>,

		/** The resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateKeyVaultKeyReferenceKeyVaultFormGroup() {
		return new FormGroup<KeyVaultKeyReferenceKeyVaultFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list of integration account certificates. */
	export interface IntegrationAccountCertificateListResult {

		/** The URL to get the next set of results. */
		nextLink?: string | null;

		/** The list of integration account certificates. */
		value?: Array<IntegrationAccountCertificate>;
	}

	/** The list of integration account certificates. */
	export interface IntegrationAccountCertificateListResultFormProperties {

		/** The URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationAccountCertificateListResultFormGroup() {
		return new FormGroup<IntegrationAccountCertificateListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list of integration accounts. */
	export interface IntegrationAccountListResult {

		/** The URL to get the next set of results. */
		nextLink?: string | null;

		/** The list of integration accounts. */
		value?: Array<IntegrationAccount>;
	}

	/** The list of integration accounts. */
	export interface IntegrationAccountListResultFormProperties {

		/** The URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationAccountListResultFormGroup() {
		return new FormGroup<IntegrationAccountListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The integration account map. */
	export interface IntegrationAccountMap {

		/**
		 * The integration account map.
		 * Required
		 */
		properties: IntegrationAccountMapProperties;
	}

	/** The integration account map. */
	export interface IntegrationAccountMapFormProperties {
	}
	export function CreateIntegrationAccountMapFormGroup() {
		return new FormGroup<IntegrationAccountMapFormProperties>({
		});

	}


	/** The integration account map. */
	export interface IntegrationAccountMapProperties {

		/** The changed time. */
		changedTime?: Date | null;

		/** The content. */
		content?: string | null;

		/** The content link. */
		contentLink?: ContentLink;

		/** The content type. */
		contentType?: string | null;

		/** The created time. */
		createdTime?: Date | null;

		/**
		 * The map type.
		 * Required
		 */
		mapType: IntegrationAccountMapPropertiesMapType;

		/** The metadata. */
		metadata?: string | null;

		/** The parameters schema of integration account map. */
		parametersSchema?: IntegrationAccountMapPropertiesParametersSchema;
	}

	/** The integration account map. */
	export interface IntegrationAccountMapPropertiesFormProperties {

		/** The changed time. */
		changedTime: FormControl<Date | null | undefined>,

		/** The content. */
		content: FormControl<string | null | undefined>,

		/** The content type. */
		contentType: FormControl<string | null | undefined>,

		/** The created time. */
		createdTime: FormControl<Date | null | undefined>,

		/**
		 * The map type.
		 * Required
		 */
		mapType: FormControl<IntegrationAccountMapPropertiesMapType | null | undefined>,

		/** The metadata. */
		metadata: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationAccountMapPropertiesFormGroup() {
		return new FormGroup<IntegrationAccountMapPropertiesFormProperties>({
			changedTime: new FormControl<Date | null | undefined>(undefined),
			content: new FormControl<string | null | undefined>(undefined),
			contentType: new FormControl<string | null | undefined>(undefined),
			createdTime: new FormControl<Date | null | undefined>(undefined),
			mapType: new FormControl<IntegrationAccountMapPropertiesMapType | null | undefined>(undefined, [Validators.required]),
			metadata: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum IntegrationAccountMapPropertiesMapType { NotSpecified = 'NotSpecified', Xslt = 'Xslt', Xslt20 = 'Xslt20', Xslt30 = 'Xslt30', Liquid = 'Liquid' }

	export interface IntegrationAccountMapPropertiesParametersSchema {

		/** The reference name. */
		ref?: string | null;
	}
	export interface IntegrationAccountMapPropertiesParametersSchemaFormProperties {

		/** The reference name. */
		ref: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationAccountMapPropertiesParametersSchemaFormGroup() {
		return new FormGroup<IntegrationAccountMapPropertiesParametersSchemaFormProperties>({
			ref: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The integration account map filter for odata query. */
	export interface IntegrationAccountMapFilter {

		/**
		 * The map type.
		 * Required
		 */
		mapType: IntegrationAccountMapPropertiesMapType;
	}

	/** The integration account map filter for odata query. */
	export interface IntegrationAccountMapFilterFormProperties {

		/**
		 * The map type.
		 * Required
		 */
		mapType: FormControl<IntegrationAccountMapPropertiesMapType | null | undefined>,
	}
	export function CreateIntegrationAccountMapFilterFormGroup() {
		return new FormGroup<IntegrationAccountMapFilterFormProperties>({
			mapType: new FormControl<IntegrationAccountMapPropertiesMapType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The list of integration account maps. */
	export interface IntegrationAccountMapListResult {

		/** The URL to get the next set of results. */
		nextLink?: string | null;

		/** The list of integration account maps. */
		value?: Array<IntegrationAccountMap>;
	}

	/** The list of integration account maps. */
	export interface IntegrationAccountMapListResultFormProperties {

		/** The URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationAccountMapListResultFormGroup() {
		return new FormGroup<IntegrationAccountMapListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The integration account partner. */
	export interface IntegrationAccountPartner {

		/**
		 * The integration account partner properties.
		 * Required
		 */
		properties: IntegrationAccountPartnerProperties;
	}

	/** The integration account partner. */
	export interface IntegrationAccountPartnerFormProperties {
	}
	export function CreateIntegrationAccountPartnerFormGroup() {
		return new FormGroup<IntegrationAccountPartnerFormProperties>({
		});

	}


	/** The integration account partner properties. */
	export interface IntegrationAccountPartnerProperties {

		/** The changed time. */
		changedTime?: Date | null;

		/**
		 * The integration account partner content.
		 * Required
		 */
		content: PartnerContent;

		/** The created time. */
		createdTime?: Date | null;

		/** The metadata. */
		metadata?: string | null;

		/**
		 * The partner type.
		 * Required
		 */
		partnerType: IntegrationAccountPartnerPropertiesPartnerType;
	}

	/** The integration account partner properties. */
	export interface IntegrationAccountPartnerPropertiesFormProperties {

		/** The changed time. */
		changedTime: FormControl<Date | null | undefined>,

		/** The created time. */
		createdTime: FormControl<Date | null | undefined>,

		/** The metadata. */
		metadata: FormControl<string | null | undefined>,

		/**
		 * The partner type.
		 * Required
		 */
		partnerType: FormControl<IntegrationAccountPartnerPropertiesPartnerType | null | undefined>,
	}
	export function CreateIntegrationAccountPartnerPropertiesFormGroup() {
		return new FormGroup<IntegrationAccountPartnerPropertiesFormProperties>({
			changedTime: new FormControl<Date | null | undefined>(undefined),
			createdTime: new FormControl<Date | null | undefined>(undefined),
			metadata: new FormControl<string | null | undefined>(undefined),
			partnerType: new FormControl<IntegrationAccountPartnerPropertiesPartnerType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The integration account partner content. */
	export interface PartnerContent {

		/** The B2B partner content. */
		b2b?: B2BPartnerContent;
	}

	/** The integration account partner content. */
	export interface PartnerContentFormProperties {
	}
	export function CreatePartnerContentFormGroup() {
		return new FormGroup<PartnerContentFormProperties>({
		});

	}

	export enum IntegrationAccountPartnerPropertiesPartnerType { NotSpecified = 'NotSpecified', B2B = 'B2B' }


	/** The integration account partner filter for odata query. */
	export interface IntegrationAccountPartnerFilter {

		/**
		 * The partner type.
		 * Required
		 */
		partnerType: IntegrationAccountPartnerPropertiesPartnerType;
	}

	/** The integration account partner filter for odata query. */
	export interface IntegrationAccountPartnerFilterFormProperties {

		/**
		 * The partner type.
		 * Required
		 */
		partnerType: FormControl<IntegrationAccountPartnerPropertiesPartnerType | null | undefined>,
	}
	export function CreateIntegrationAccountPartnerFilterFormGroup() {
		return new FormGroup<IntegrationAccountPartnerFilterFormProperties>({
			partnerType: new FormControl<IntegrationAccountPartnerPropertiesPartnerType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The list of integration account partners. */
	export interface IntegrationAccountPartnerListResult {

		/** The URL to get the next set of results. */
		nextLink?: string | null;

		/** The list of integration account partners. */
		value?: Array<IntegrationAccountPartner>;
	}

	/** The list of integration account partners. */
	export interface IntegrationAccountPartnerListResultFormProperties {

		/** The URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationAccountPartnerListResultFormGroup() {
		return new FormGroup<IntegrationAccountPartnerListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The integration account schema. */
	export interface IntegrationAccountSchema {

		/**
		 * The integration account schema properties.
		 * Required
		 */
		properties: IntegrationAccountSchemaProperties;
	}

	/** The integration account schema. */
	export interface IntegrationAccountSchemaFormProperties {
	}
	export function CreateIntegrationAccountSchemaFormGroup() {
		return new FormGroup<IntegrationAccountSchemaFormProperties>({
		});

	}


	/** The integration account schema properties. */
	export interface IntegrationAccountSchemaProperties {

		/** The changed time. */
		changedTime?: Date | null;

		/** The content. */
		content?: string | null;

		/** The content link. */
		contentLink?: ContentLink;

		/** The content type. */
		contentType?: string | null;

		/** The created time. */
		createdTime?: Date | null;

		/** The document name. */
		documentName?: string | null;

		/** The file name. */
		fileName?: string | null;

		/** The metadata. */
		metadata?: string | null;

		/**
		 * The schema type.
		 * Required
		 */
		schemaType: IntegrationAccountSchemaPropertiesSchemaType;

		/** The target namespace of the schema. */
		targetNamespace?: string | null;
	}

	/** The integration account schema properties. */
	export interface IntegrationAccountSchemaPropertiesFormProperties {

		/** The changed time. */
		changedTime: FormControl<Date | null | undefined>,

		/** The content. */
		content: FormControl<string | null | undefined>,

		/** The content type. */
		contentType: FormControl<string | null | undefined>,

		/** The created time. */
		createdTime: FormControl<Date | null | undefined>,

		/** The document name. */
		documentName: FormControl<string | null | undefined>,

		/** The file name. */
		fileName: FormControl<string | null | undefined>,

		/** The metadata. */
		metadata: FormControl<string | null | undefined>,

		/**
		 * The schema type.
		 * Required
		 */
		schemaType: FormControl<IntegrationAccountSchemaPropertiesSchemaType | null | undefined>,

		/** The target namespace of the schema. */
		targetNamespace: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationAccountSchemaPropertiesFormGroup() {
		return new FormGroup<IntegrationAccountSchemaPropertiesFormProperties>({
			changedTime: new FormControl<Date | null | undefined>(undefined),
			content: new FormControl<string | null | undefined>(undefined),
			contentType: new FormControl<string | null | undefined>(undefined),
			createdTime: new FormControl<Date | null | undefined>(undefined),
			documentName: new FormControl<string | null | undefined>(undefined),
			fileName: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<string | null | undefined>(undefined),
			schemaType: new FormControl<IntegrationAccountSchemaPropertiesSchemaType | null | undefined>(undefined, [Validators.required]),
			targetNamespace: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum IntegrationAccountSchemaPropertiesSchemaType { NotSpecified = 'NotSpecified', Xml = 'Xml' }


	/** The integration account schema filter for odata query. */
	export interface IntegrationAccountSchemaFilter {

		/**
		 * The schema type.
		 * Required
		 */
		schemaType: IntegrationAccountSchemaPropertiesSchemaType;
	}

	/** The integration account schema filter for odata query. */
	export interface IntegrationAccountSchemaFilterFormProperties {

		/**
		 * The schema type.
		 * Required
		 */
		schemaType: FormControl<IntegrationAccountSchemaPropertiesSchemaType | null | undefined>,
	}
	export function CreateIntegrationAccountSchemaFilterFormGroup() {
		return new FormGroup<IntegrationAccountSchemaFilterFormProperties>({
			schemaType: new FormControl<IntegrationAccountSchemaPropertiesSchemaType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The list of integration account schemas. */
	export interface IntegrationAccountSchemaListResult {

		/** The URL to get the next set of results. */
		nextLink?: string | null;

		/** The list of integration account schemas. */
		value?: Array<IntegrationAccountSchema>;
	}

	/** The list of integration account schemas. */
	export interface IntegrationAccountSchemaListResultFormProperties {

		/** The URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationAccountSchemaListResultFormGroup() {
		return new FormGroup<IntegrationAccountSchemaListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The integration account session. */
	export interface IntegrationAccountSession {

		/**
		 * The integration account session properties.
		 * Required
		 */
		properties: IntegrationAccountSessionProperties;
	}

	/** The integration account session. */
	export interface IntegrationAccountSessionFormProperties {
	}
	export function CreateIntegrationAccountSessionFormGroup() {
		return new FormGroup<IntegrationAccountSessionFormProperties>({
		});

	}


	/** The integration account session properties. */
	export interface IntegrationAccountSessionProperties {

		/** The changed time. */
		changedTime?: Date | null;
		content?: Object;

		/** The created time. */
		createdTime?: Date | null;
	}

	/** The integration account session properties. */
	export interface IntegrationAccountSessionPropertiesFormProperties {

		/** The changed time. */
		changedTime: FormControl<Date | null | undefined>,

		/** The created time. */
		createdTime: FormControl<Date | null | undefined>,
	}
	export function CreateIntegrationAccountSessionPropertiesFormGroup() {
		return new FormGroup<IntegrationAccountSessionPropertiesFormProperties>({
			changedTime: new FormControl<Date | null | undefined>(undefined),
			createdTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The integration account session filter. */
	export interface IntegrationAccountSessionFilter {

		/**
		 * The changed time of integration account sessions.
		 * Required
		 */
		changedTime: Date;
	}

	/** The integration account session filter. */
	export interface IntegrationAccountSessionFilterFormProperties {

		/**
		 * The changed time of integration account sessions.
		 * Required
		 */
		changedTime: FormControl<Date | null | undefined>,
	}
	export function CreateIntegrationAccountSessionFilterFormGroup() {
		return new FormGroup<IntegrationAccountSessionFilterFormProperties>({
			changedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The list of integration account sessions. */
	export interface IntegrationAccountSessionListResult {

		/** The URL to get the next set of results. */
		nextLink?: string | null;

		/** The list of integration account sessions. */
		value?: Array<IntegrationAccountSession>;
	}

	/** The list of integration account sessions. */
	export interface IntegrationAccountSessionListResultFormProperties {

		/** The URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationAccountSessionListResultFormGroup() {
		return new FormGroup<IntegrationAccountSessionListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list of integration service environments. */
	export interface IntegrationServiceEnvironmentListResult {

		/** The URL to get the next set of results. */
		nextLink?: string | null;
		value?: Array<IntegrationServiceEnvironment>;
	}

	/** The list of integration service environments. */
	export interface IntegrationServiceEnvironmentListResultFormProperties {

		/** The URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationServiceEnvironmentListResultFormGroup() {
		return new FormGroup<IntegrationServiceEnvironmentListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The azure async operation resource. */
	export interface IntegrationServiceEnvironmentNetworkDependency {

		/** The integration service environment network dependency category type. */
		category?: IntegrationServiceEnvironmentNetworkDependencyCategory | null;

		/** The display name. */
		displayName?: string | null;

		/** The endpoints. */
		endpoints?: Array<IntegrationServiceEnvironmentNetworkEndpoint>;
	}

	/** The azure async operation resource. */
	export interface IntegrationServiceEnvironmentNetworkDependencyFormProperties {

		/** The integration service environment network dependency category type. */
		category: FormControl<IntegrationServiceEnvironmentNetworkDependencyCategory | null | undefined>,

		/** The display name. */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationServiceEnvironmentNetworkDependencyFormGroup() {
		return new FormGroup<IntegrationServiceEnvironmentNetworkDependencyFormProperties>({
			category: new FormControl<IntegrationServiceEnvironmentNetworkDependencyCategory | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum IntegrationServiceEnvironmentNetworkDependencyCategory { NotSpecified = 'NotSpecified', AzureStorage = 'AzureStorage', AzureManagement = 'AzureManagement', AzureActiveDirectory = 'AzureActiveDirectory', SSLCertificateVerification = 'SSLCertificateVerification', DiagnosticLogsAndMetrics = 'DiagnosticLogsAndMetrics', IntegrationServiceEnvironmentConnectors = 'IntegrationServiceEnvironmentConnectors', RedisCache = 'RedisCache', AccessEndpoints = 'AccessEndpoints', RecoveryService = 'RecoveryService', SQL = 'SQL', RegionalService = 'RegionalService' }


	/** The network endpoint. */
	export interface IntegrationServiceEnvironmentNetworkEndpoint {

		/** The integration service environment network endpoint accessibility state. */
		accessibility?: IntegrationServiceEnvironmentNetworkEndpointAccessibility | null;

		/** The domain name. */
		domainName?: string | null;

		/** The ports. */
		ports?: Array<string>;
	}

	/** The network endpoint. */
	export interface IntegrationServiceEnvironmentNetworkEndpointFormProperties {

		/** The integration service environment network endpoint accessibility state. */
		accessibility: FormControl<IntegrationServiceEnvironmentNetworkEndpointAccessibility | null | undefined>,

		/** The domain name. */
		domainName: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationServiceEnvironmentNetworkEndpointFormGroup() {
		return new FormGroup<IntegrationServiceEnvironmentNetworkEndpointFormProperties>({
			accessibility: new FormControl<IntegrationServiceEnvironmentNetworkEndpointAccessibility | null | undefined>(undefined),
			domainName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum IntegrationServiceEnvironmentNetworkEndpointAccessibility { NotSpecified = 'NotSpecified', Unknown = 'Unknown', Available = 'Available', NotAvailable = 'NotAvailable' }


	/** The integration service environment network dependency category type. */
	export enum IntegrationServiceEnvironmentNetworkDependencyCategoryType { NotSpecified = 'NotSpecified', AzureStorage = 'AzureStorage', AzureManagement = 'AzureManagement', AzureActiveDirectory = 'AzureActiveDirectory', SSLCertificateVerification = 'SSLCertificateVerification', DiagnosticLogsAndMetrics = 'DiagnosticLogsAndMetrics', IntegrationServiceEnvironmentConnectors = 'IntegrationServiceEnvironmentConnectors', RedisCache = 'RedisCache', AccessEndpoints = 'AccessEndpoints', RecoveryService = 'RecoveryService', SQL = 'SQL', RegionalService = 'RegionalService' }


	/** The integration service environment subnet network health. */
	export interface IntegrationServiceEnvironmentNetworkDependencyHealth {

		/** The extended error info. */
		error?: ExtendedErrorInfo;

		/** The integration service environment network dependency health state. */
		state?: IntegrationServiceEnvironmentNetworkDependencyHealthState | null;
	}

	/** The integration service environment subnet network health. */
	export interface IntegrationServiceEnvironmentNetworkDependencyHealthFormProperties {

		/** The integration service environment network dependency health state. */
		state: FormControl<IntegrationServiceEnvironmentNetworkDependencyHealthState | null | undefined>,
	}
	export function CreateIntegrationServiceEnvironmentNetworkDependencyHealthFormGroup() {
		return new FormGroup<IntegrationServiceEnvironmentNetworkDependencyHealthFormProperties>({
			state: new FormControl<IntegrationServiceEnvironmentNetworkDependencyHealthState | null | undefined>(undefined),
		});

	}

	export enum IntegrationServiceEnvironmentNetworkDependencyHealthState { NotSpecified = 'NotSpecified', Healthy = 'Healthy', Unhealthy = 'Unhealthy', Unknown = 'Unknown' }


	/** The integration service environment network endpoint accessibility state. */
	export enum IntegrationServiceEnvironmentNetworkEndPointAccessibilityState { NotSpecified = 'NotSpecified', Unknown = 'Unknown', Available = 'Available', NotAvailable = 'NotAvailable' }


	/** The integration service environment network health of all the subnets. */
	export interface IntegrationServiceEnvironmentNetworkHealth {
	}

	/** The integration service environment network health of all the subnets. */
	export interface IntegrationServiceEnvironmentNetworkHealthFormProperties {
	}
	export function CreateIntegrationServiceEnvironmentNetworkHealthFormGroup() {
		return new FormGroup<IntegrationServiceEnvironmentNetworkHealthFormProperties>({
		});

	}


	/** The integration service environment sku capacity. */
	export interface IntegrationServiceEnvironmentSkuCapacity {

		/**
		 * The default capacity.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		default?: number | null;

		/**
		 * The maximum capacity.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maximum?: number | null;

		/**
		 * The minimum capacity.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minimum?: number | null;

		/** The integration service environment sku scale type. */
		scaleType?: IntegrationServiceEnvironmentSkuCapacityScaleType | null;
	}

	/** The integration service environment sku capacity. */
	export interface IntegrationServiceEnvironmentSkuCapacityFormProperties {

		/**
		 * The default capacity.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		default: FormControl<number | null | undefined>,

		/**
		 * The maximum capacity.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maximum: FormControl<number | null | undefined>,

		/**
		 * The minimum capacity.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minimum: FormControl<number | null | undefined>,

		/** The integration service environment sku scale type. */
		scaleType: FormControl<IntegrationServiceEnvironmentSkuCapacityScaleType | null | undefined>,
	}
	export function CreateIntegrationServiceEnvironmentSkuCapacityFormGroup() {
		return new FormGroup<IntegrationServiceEnvironmentSkuCapacityFormProperties>({
			default: new FormControl<number | null | undefined>(undefined),
			maximum: new FormControl<number | null | undefined>(undefined),
			minimum: new FormControl<number | null | undefined>(undefined),
			scaleType: new FormControl<IntegrationServiceEnvironmentSkuCapacityScaleType | null | undefined>(undefined),
		});

	}

	export enum IntegrationServiceEnvironmentSkuCapacityScaleType { Manual = 'Manual', Automatic = 'Automatic', None = 'None' }


	/** The integration service environment sku definition. */
	export interface IntegrationServiceEnvironmentSkuDefinition {

		/** The integration service environment sku capacity. */
		capacity?: IntegrationServiceEnvironmentSkuCapacity;

		/** The resource type. */
		resourceType?: string | null;

		/** The sku. */
		sku?: IntegrationServiceEnvironmentSkuDefinitionSku;
	}

	/** The integration service environment sku definition. */
	export interface IntegrationServiceEnvironmentSkuDefinitionFormProperties {

		/** The resource type. */
		resourceType: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationServiceEnvironmentSkuDefinitionFormGroup() {
		return new FormGroup<IntegrationServiceEnvironmentSkuDefinitionFormProperties>({
			resourceType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IntegrationServiceEnvironmentSkuDefinitionSku {

		/** The integration service environment sku name. */
		name?: IntegrationServiceEnvironmentSkuName | null;

		/** The sku tier. */
		tier?: string | null;
	}
	export interface IntegrationServiceEnvironmentSkuDefinitionSkuFormProperties {

		/** The integration service environment sku name. */
		name: FormControl<IntegrationServiceEnvironmentSkuName | null | undefined>,

		/** The sku tier. */
		tier: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationServiceEnvironmentSkuDefinitionSkuFormGroup() {
		return new FormGroup<IntegrationServiceEnvironmentSkuDefinitionSkuFormProperties>({
			name: new FormControl<IntegrationServiceEnvironmentSkuName | null | undefined>(undefined),
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list of integration service environment skus. */
	export interface IntegrationServiceEnvironmentSkuList {

		/** The URL to get the next set of results. */
		nextLink?: string | null;

		/** The list of integration service environment skus. */
		value?: Array<IntegrationServiceEnvironmentSkuDefinition>;
	}

	/** The list of integration service environment skus. */
	export interface IntegrationServiceEnvironmentSkuListFormProperties {

		/** The URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationServiceEnvironmentSkuListFormGroup() {
		return new FormGroup<IntegrationServiceEnvironmentSkuListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The integration service environment sku scale type. */
	export enum IntegrationServiceEnvironmentSkuScaleType { Manual = 'Manual', Automatic = 'Automatic', None = 'None' }


	/** The integration service environment subnet network health. */
	export interface IntegrationServiceEnvironmentSubnetNetworkHealth {

		/**
		 * The integration service environment network endpoint accessibility state.
		 * Required
		 */
		networkDependencyHealthState: IntegrationServiceEnvironmentNetworkEndpointAccessibility;

		/** The outbound network dependencies. */
		outboundNetworkDependencies?: Array<IntegrationServiceEnvironmentNetworkDependency>;

		/** The integration service environment subnet network health. */
		outboundNetworkHealth?: IntegrationServiceEnvironmentNetworkDependencyHealth;
	}

	/** The integration service environment subnet network health. */
	export interface IntegrationServiceEnvironmentSubnetNetworkHealthFormProperties {

		/**
		 * The integration service environment network endpoint accessibility state.
		 * Required
		 */
		networkDependencyHealthState: FormControl<IntegrationServiceEnvironmentNetworkEndpointAccessibility | null | undefined>,
	}
	export function CreateIntegrationServiceEnvironmentSubnetNetworkHealthFormGroup() {
		return new FormGroup<IntegrationServiceEnvironmentSubnetNetworkHealthFormProperties>({
			networkDependencyHealthState: new FormControl<IntegrationServiceEnvironmentNetworkEndpointAccessibility | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The JSON schema. */
	export interface JsonSchema {

		/** The JSON content. */
		content?: string | null;

		/** The JSON title. */
		title?: string | null;
	}

	/** The JSON schema. */
	export interface JsonSchemaFormProperties {

		/** The JSON content. */
		content: FormControl<string | null | undefined>,

		/** The JSON title. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateJsonSchemaFormGroup() {
		return new FormGroup<JsonSchemaFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The key type. */
	export enum KeyType { NotSpecified = 'NotSpecified', Primary = 'Primary', Secondary = 'Secondary' }


	/** The key vault key. */
	export interface KeyVaultKey {

		/** The key attributes. */
		attributes?: KeyVaultKeyAttributes;

		/** The key id. */
		kid?: string | null;
	}

	/** The key vault key. */
	export interface KeyVaultKeyFormProperties {

		/** The key id. */
		kid: FormControl<string | null | undefined>,
	}
	export function CreateKeyVaultKeyFormGroup() {
		return new FormGroup<KeyVaultKeyFormProperties>({
			kid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface KeyVaultKeyAttributes {

		/**
		 * When the key was created.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		created?: string | null;

		/** Whether the key is enabled or not. */
		enabled?: boolean | null;

		/**
		 * When the key was updated.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		updated?: string | null;
	}
	export interface KeyVaultKeyAttributesFormProperties {

		/**
		 * When the key was created.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		created: FormControl<string | null | undefined>,

		/** Whether the key is enabled or not. */
		enabled: FormControl<boolean | null | undefined>,

		/**
		 * When the key was updated.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		updated: FormControl<string | null | undefined>,
	}
	export function CreateKeyVaultKeyAttributesFormGroup() {
		return new FormGroup<KeyVaultKeyAttributesFormProperties>({
			created: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			updated: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Collection of key vault keys. */
	export interface KeyVaultKeyCollection {

		/** The skip token. */
		skipToken?: string | null;

		/** The key vault keys. */
		value?: Array<KeyVaultKey>;
	}

	/** Collection of key vault keys. */
	export interface KeyVaultKeyCollectionFormProperties {

		/** The skip token. */
		skipToken: FormControl<string | null | undefined>,
	}
	export function CreateKeyVaultKeyCollectionFormGroup() {
		return new FormGroup<KeyVaultKeyCollectionFormProperties>({
			skipToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The key vault reference. */
	export interface KeyVaultReference {

		/** The key vault name. */
		name?: string | null;
	}

	/** The key vault reference. */
	export interface KeyVaultReferenceFormProperties {

		/** The key vault name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateKeyVaultReferenceFormGroup() {
		return new FormGroup<KeyVaultReferenceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list key vault keys definition. */
	export interface ListKeyVaultKeysDefinition {

		/**
		 * The key vault reference.
		 * Required
		 */
		keyVault: KeyVaultReference;

		/** The skip token. */
		skipToken?: string | null;
	}

	/** The list key vault keys definition. */
	export interface ListKeyVaultKeysDefinitionFormProperties {

		/** The skip token. */
		skipToken: FormControl<string | null | undefined>,
	}
	export function CreateListKeyVaultKeysDefinitionFormGroup() {
		return new FormGroup<ListKeyVaultKeysDefinitionFormProperties>({
			skipToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The managed api definition. */
	export interface ManagedApi {

		/** The API resource properties. */
		properties?: ApiResourceProperties;
	}

	/** The managed api definition. */
	export interface ManagedApiFormProperties {
	}
	export function CreateManagedApiFormGroup() {
		return new FormGroup<ManagedApiFormProperties>({
		});

	}


	/** The list of managed APIs. */
	export interface ManagedApiListResult {

		/** The URL to get the next set of results. */
		nextLink?: string | null;

		/** The managed APIs. */
		value?: Array<ManagedApi>;
	}

	/** The list of managed APIs. */
	export interface ManagedApiListResultFormProperties {

		/** The URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateManagedApiListResultFormGroup() {
		return new FormGroup<ManagedApiListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The map type. */
	export enum MapType { NotSpecified = 'NotSpecified', Xslt = 'Xslt', Xslt20 = 'Xslt20', Xslt30 = 'Xslt30', Liquid = 'Liquid' }


	/** The message filter type. */
	export enum MessageFilterType { NotSpecified = 'NotSpecified', Include = 'Include', Exclude = 'Exclude' }


	/** Logic REST API operation */
	export interface Operation {

		/** The object that represents the operation. */
		display?: OperationDisplay;

		/** Operation name: {provider}/{resource}/{operation} */
		name?: string | null;
	}

	/** Logic REST API operation */
	export interface OperationFormProperties {

		/** Operation name: {provider}/{resource}/{operation} */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OperationDisplay {

		/** Operation type: Read, write, delete, etc. */
		operation?: string | null;

		/** Service provider: Microsoft.Logic */
		provider?: string | null;

		/** Resource on which the operation is performed: Profile, endpoint, etc. */
		resource?: string | null;
	}
	export interface OperationDisplayFormProperties {

		/** Operation type: Read, write, delete, etc. */
		operation: FormControl<string | null | undefined>,

		/** Service provider: Microsoft.Logic */
		provider: FormControl<string | null | undefined>,

		/** Resource on which the operation is performed: Profile, endpoint, etc. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateOperationDisplayFormGroup() {
		return new FormGroup<OperationDisplayFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result of the request to list Logic operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResult {

		/** URL to get the next set of operation list results if there are any. */
		nextLink?: string | null;

		/** List of Logic operations supported by the Logic resource provider. */
		value?: Array<Operation>;
	}

	/** Result of the request to list Logic operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResultFormProperties {

		/** URL to get the next set of operation list results if there are any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The operation result definition. */
	export interface OperationResult {
		inputs?: Object;

		/** The content link. */
		inputsLink?: ContentLink;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		iterationCount?: number | null;
		outputs?: Object;

		/** The content link. */
		outputsLink?: ContentLink;

		/** Gets the retry histories. */
		retryHistory?: Array<RetryHistory>;
		trackedProperties?: Object;

		/** Gets the tracking id. */
		trackingId?: string | null;
	}

	/** The operation result definition. */
	export interface OperationResultFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		iterationCount: FormControl<number | null | undefined>,

		/** Gets the tracking id. */
		trackingId: FormControl<string | null | undefined>,
	}
	export function CreateOperationResultFormGroup() {
		return new FormGroup<OperationResultFormProperties>({
			iterationCount: new FormControl<number | null | undefined>(undefined),
			trackingId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The retry history. */
	export interface RetryHistory {

		/** Gets the client request Id. */
		clientRequestId?: string | null;

		/** Gets the status code. */
		code?: string | null;

		/** Gets the end time. */
		endTime?: Date | null;

		/** Error response indicates Logic service is not able to process the incoming request. The error property contains the error details. */
		error?: ErrorResponse;

		/** Gets the service request Id. */
		serviceRequestId?: string | null;

		/** Gets the start time. */
		startTime?: Date | null;
	}

	/** The retry history. */
	export interface RetryHistoryFormProperties {

		/** Gets the client request Id. */
		clientRequestId: FormControl<string | null | undefined>,

		/** Gets the status code. */
		code: FormControl<string | null | undefined>,

		/** Gets the end time. */
		endTime: FormControl<Date | null | undefined>,

		/** Gets the service request Id. */
		serviceRequestId: FormControl<string | null | undefined>,

		/** Gets the start time. */
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateRetryHistoryFormGroup() {
		return new FormGroup<RetryHistoryFormProperties>({
			clientRequestId: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			serviceRequestId: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The run operation result properties. */
	export interface OperationResultProperties {

		/** The workflow scope repetition code. */
		code?: string | null;

		/** The workflow run action correlation properties. */
		correlation?: RunActionCorrelation;

		/** The end time of the workflow scope repetition. */
		endTime?: Date | null;
		error?: any;

		/** The start time of the workflow scope repetition. */
		startTime?: Date | null;

		/** The workflow status. */
		status?: OperationResultPropertiesStatus | null;
	}

	/** The run operation result properties. */
	export interface OperationResultPropertiesFormProperties {

		/** The workflow scope repetition code. */
		code: FormControl<string | null | undefined>,

		/** The end time of the workflow scope repetition. */
		endTime: FormControl<Date | null | undefined>,
		error: FormControl<any | null | undefined>,

		/** The start time of the workflow scope repetition. */
		startTime: FormControl<Date | null | undefined>,

		/** The workflow status. */
		status: FormControl<OperationResultPropertiesStatus | null | undefined>,
	}
	export function CreateOperationResultPropertiesFormGroup() {
		return new FormGroup<OperationResultPropertiesFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			error: new FormControl<any | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<OperationResultPropertiesStatus | null | undefined>(undefined),
		});

	}


	/** The workflow run action correlation properties. */
	export interface RunActionCorrelation {

		/** The action tracking identifier. */
		actionTrackingId?: string | null;
	}

	/** The workflow run action correlation properties. */
	export interface RunActionCorrelationFormProperties {

		/** The action tracking identifier. */
		actionTrackingId: FormControl<string | null | undefined>,
	}
	export function CreateRunActionCorrelationFormGroup() {
		return new FormGroup<RunActionCorrelationFormProperties>({
			actionTrackingId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OperationResultPropertiesStatus { NotSpecified = 'NotSpecified', Paused = 'Paused', Running = 'Running', Waiting = 'Waiting', Succeeded = 'Succeeded', Skipped = 'Skipped', Suspended = 'Suspended', Cancelled = 'Cancelled', Failed = 'Failed', Faulted = 'Faulted', TimedOut = 'TimedOut', Aborted = 'Aborted', Ignored = 'Ignored' }


	/** The parameter type. */
	export enum ParameterType { NotSpecified = 'NotSpecified', String = 'String', SecureString = 'SecureString', Int = 'Int', Float = 'Float', Bool = 'Bool', Array = 'Array', Object = 'Object', SecureObject = 'SecureObject' }


	/** The partner type. */
	export enum PartnerType { NotSpecified = 'NotSpecified', B2B = 'B2B' }


	/** The recurrence frequency. */
	export enum RecurrenceFrequency { NotSpecified = 'NotSpecified', Second = 'Second', Minute = 'Minute', Hour = 'Hour', Day = 'Day', Week = 'Week', Month = 'Month', Year = 'Year' }


	/** The access key regenerate action content. */
	export interface RegenerateActionParameter {

		/** The key type. */
		keyType?: GetCallbackUrlParametersKeyType | null;
	}

	/** The access key regenerate action content. */
	export interface RegenerateActionParameterFormProperties {

		/** The key type. */
		keyType: FormControl<GetCallbackUrlParametersKeyType | null | undefined>,
	}
	export function CreateRegenerateActionParameterFormGroup() {
		return new FormGroup<RegenerateActionParameterFormProperties>({
			keyType: new FormControl<GetCallbackUrlParametersKeyType | null | undefined>(undefined),
		});

	}


	/** The workflow run action repetition index. */
	export interface RepetitionIndex {

		/**
		 * The index.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		itemIndex: number;

		/** The scope. */
		scopeName?: string | null;
	}

	/** The workflow run action repetition index. */
	export interface RepetitionIndexFormProperties {

		/**
		 * The index.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		itemIndex: FormControl<number | null | undefined>,

		/** The scope. */
		scopeName: FormControl<string | null | undefined>,
	}
	export function CreateRepetitionIndexFormGroup() {
		return new FormGroup<RepetitionIndexFormProperties>({
			itemIndex: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			scopeName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request. */
	export interface Request {
		headers?: Object;

		/** The HTTP method used for the request. */
		method?: string | null;

		/** The destination for the request. */
		uri?: string | null;
	}

	/** A request. */
	export interface RequestFormProperties {

		/** The HTTP method used for the request. */
		method: FormControl<string | null | undefined>,

		/** The destination for the request. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateRequestFormGroup() {
		return new FormGroup<RequestFormProperties>({
			method: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request history. */
	export interface RequestHistory {

		/** The request history. */
		properties?: RequestHistoryProperties;
	}

	/** The request history. */
	export interface RequestHistoryFormProperties {
	}
	export function CreateRequestHistoryFormGroup() {
		return new FormGroup<RequestHistoryFormProperties>({
		});

	}


	/** The request history. */
	export interface RequestHistoryProperties {

		/** The time the request ended. */
		endTime?: Date | null;

		/** A request. */
		request?: Request;

		/** A response. */
		response?: Response;

		/** The time the request started. */
		startTime?: Date | null;
	}

	/** The request history. */
	export interface RequestHistoryPropertiesFormProperties {

		/** The time the request ended. */
		endTime: FormControl<Date | null | undefined>,

		/** The time the request started. */
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateRequestHistoryPropertiesFormGroup() {
		return new FormGroup<RequestHistoryPropertiesFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** A response. */
	export interface Response {

		/** The content link. */
		bodyLink?: ContentLink;
		headers?: Object;

		/**
		 * The status code of the response.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode?: number | null;
	}

	/** A response. */
	export interface ResponseFormProperties {

		/**
		 * The status code of the response.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode: FormControl<number | null | undefined>,
	}
	export function CreateResponseFormGroup() {
		return new FormGroup<ResponseFormProperties>({
			statusCode: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The list of workflow request histories. */
	export interface RequestHistoryListResult {

		/** The URL to get the next set of results. */
		nextLink?: string | null;

		/** A list of workflow request histories. */
		value?: Array<RequestHistory>;
	}

	/** The list of workflow request histories. */
	export interface RequestHistoryListResultFormProperties {

		/** The URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateRequestHistoryListResultFormGroup() {
		return new FormGroup<RequestHistoryListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The base resource type. */
	export interface Resource {

		/** The resource id. */
		id?: string | null;

		/** The resource location. */
		location?: string | null;

		/** Gets the resource name. */
		name?: string | null;

		/** The resource tags. */
		tags?: {[id: string]: string };

		/** Gets the resource type. */
		type?: string | null;
	}

	/** The base resource type. */
	export interface ResourceFormProperties {

		/** The resource id. */
		id: FormControl<string | null | undefined>,

		/** The resource location. */
		location: FormControl<string | null | undefined>,

		/** Gets the resource name. */
		name: FormControl<string | null | undefined>,

		/** The resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Gets the resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The correlation properties. */
	export interface RunCorrelation {

		/** The client keywords. */
		clientKeywords?: Array<string>;

		/** The client tracking identifier. */
		clientTrackingId?: string | null;
	}

	/** The correlation properties. */
	export interface RunCorrelationFormProperties {

		/** The client tracking identifier. */
		clientTrackingId: FormControl<string | null | undefined>,
	}
	export function CreateRunCorrelationFormGroup() {
		return new FormGroup<RunCorrelationFormProperties>({
			clientTrackingId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The schema type. */
	export enum SchemaType { NotSpecified = 'NotSpecified', Xml = 'Xml' }


	/** The segment terminator suffix. */
	export enum SegmentTerminatorSuffix { NotSpecified = 'NotSpecified', None = 'None', CR = 'CR', LF = 'LF', CRLF = 'CRLF' }


	/** The set trigger state action definition. */
	export interface SetTriggerStateActionDefinition {

		/**
		 * The workflow trigger.
		 * Required
		 */
		source: WorkflowTrigger;
	}

	/** The set trigger state action definition. */
	export interface SetTriggerStateActionDefinitionFormProperties {
	}
	export function CreateSetTriggerStateActionDefinitionFormGroup() {
		return new FormGroup<SetTriggerStateActionDefinitionFormProperties>({
		});

	}


	/** The workflow trigger. */
	export interface WorkflowTrigger {

		/** Gets the workflow trigger name. */
		name?: string | null;

		/** The workflow trigger properties. */
		properties?: WorkflowTriggerProperties;

		/** Gets the workflow trigger type. */
		type?: string | null;
	}

	/** The workflow trigger. */
	export interface WorkflowTriggerFormProperties {

		/** Gets the workflow trigger name. */
		name: FormControl<string | null | undefined>,

		/** Gets the workflow trigger type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowTriggerFormGroup() {
		return new FormGroup<WorkflowTriggerFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The workflow trigger properties. */
	export interface WorkflowTriggerProperties {

		/** Gets the changed time. */
		changedTime?: Date | null;

		/** Gets the created time. */
		createdTime?: Date | null;

		/** Gets the last execution time. */
		lastExecutionTime?: Date | null;

		/** Gets the next execution time. */
		nextExecutionTime?: Date | null;

		/** The workflow trigger provisioning state. */
		provisioningState?: ApiResourceMetadataProvisioningState | null;

		/** The workflow trigger recurrence. */
		recurrence?: WorkflowTriggerRecurrence;

		/** The workflow state. */
		state?: IntegrationServiceEnvironmentPropertiesState | null;

		/** The workflow status. */
		status?: OperationResultPropertiesStatus | null;

		/** The resource reference. */
		workflow?: ResourceReference;
	}

	/** The workflow trigger properties. */
	export interface WorkflowTriggerPropertiesFormProperties {

		/** Gets the changed time. */
		changedTime: FormControl<Date | null | undefined>,

		/** Gets the created time. */
		createdTime: FormControl<Date | null | undefined>,

		/** Gets the last execution time. */
		lastExecutionTime: FormControl<Date | null | undefined>,

		/** Gets the next execution time. */
		nextExecutionTime: FormControl<Date | null | undefined>,

		/** The workflow trigger provisioning state. */
		provisioningState: FormControl<ApiResourceMetadataProvisioningState | null | undefined>,

		/** The workflow state. */
		state: FormControl<IntegrationServiceEnvironmentPropertiesState | null | undefined>,

		/** The workflow status. */
		status: FormControl<OperationResultPropertiesStatus | null | undefined>,
	}
	export function CreateWorkflowTriggerPropertiesFormGroup() {
		return new FormGroup<WorkflowTriggerPropertiesFormProperties>({
			changedTime: new FormControl<Date | null | undefined>(undefined),
			createdTime: new FormControl<Date | null | undefined>(undefined),
			lastExecutionTime: new FormControl<Date | null | undefined>(undefined),
			nextExecutionTime: new FormControl<Date | null | undefined>(undefined),
			provisioningState: new FormControl<ApiResourceMetadataProvisioningState | null | undefined>(undefined),
			state: new FormControl<IntegrationServiceEnvironmentPropertiesState | null | undefined>(undefined),
			status: new FormControl<OperationResultPropertiesStatus | null | undefined>(undefined),
		});

	}


	/** The signing or hashing algorithm. */
	export enum SigningAlgorithm { NotSpecified = 'NotSpecified', Default = 'Default', SHA1 = 'SHA1', SHA2256 = 'SHA2256', SHA2384 = 'SHA2384', SHA2512 = 'SHA2512' }


	/** The sku type. */
	export interface Sku {

		/**
		 * The sku name.
		 * Required
		 */
		name: SkuName;

		/** The resource reference. */
		plan?: ResourceReference;
	}

	/** The sku type. */
	export interface SkuFormProperties {

		/**
		 * The sku name.
		 * Required
		 */
		name: FormControl<SkuName | null | undefined>,
	}
	export function CreateSkuFormGroup() {
		return new FormGroup<SkuFormProperties>({
			name: new FormControl<SkuName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SkuName { NotSpecified = 'NotSpecified', Free = 'Free', Shared = 'Shared', Basic = 'Basic', Standard = 'Standard', Premium = 'Premium' }


	/** The status annotation. */
	export enum StatusAnnotation { NotSpecified = 'NotSpecified', Preview = 'Preview', Production = 'Production' }


	/** The sub resource type. */
	export interface SubResource {

		/** The resource id. */
		id?: string | null;
	}

	/** The sub resource type. */
	export interface SubResourceFormProperties {

		/** The resource id. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateSubResourceFormGroup() {
		return new FormGroup<SubResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The track events operation options. */
	export enum TrackEventsOperationOptions { None = 'None', DisableSourceInfoEnrich = 'DisableSourceInfoEnrich' }


	/** The tracking event. */
	export interface TrackingEvent {

		/** The tracking event error info. */
		error?: TrackingEventErrorInfo;

		/**
		 * The event level.
		 * Required
		 */
		eventLevel: EventLevel;

		/**
		 * The event time.
		 * Required
		 */
		eventTime: Date;

		/**
		 * The tracking record type.
		 * Required
		 */
		recordType: TrackingEventRecordType;
	}

	/** The tracking event. */
	export interface TrackingEventFormProperties {

		/**
		 * The event level.
		 * Required
		 */
		eventLevel: FormControl<EventLevel | null | undefined>,

		/**
		 * The event time.
		 * Required
		 */
		eventTime: FormControl<Date | null | undefined>,

		/**
		 * The tracking record type.
		 * Required
		 */
		recordType: FormControl<TrackingEventRecordType | null | undefined>,
	}
	export function CreateTrackingEventFormGroup() {
		return new FormGroup<TrackingEventFormProperties>({
			eventLevel: new FormControl<EventLevel | null | undefined>(undefined, [Validators.required]),
			eventTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			recordType: new FormControl<TrackingEventRecordType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The tracking event error info. */
	export interface TrackingEventErrorInfo {

		/** The code. */
		code?: string | null;

		/** The message. */
		message?: string | null;
	}

	/** The tracking event error info. */
	export interface TrackingEventErrorInfoFormProperties {

		/** The code. */
		code: FormControl<string | null | undefined>,

		/** The message. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateTrackingEventErrorInfoFormGroup() {
		return new FormGroup<TrackingEventErrorInfoFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TrackingEventRecordType { NotSpecified = 'NotSpecified', Custom = 'Custom', AS2Message = 'AS2Message', AS2MDN = 'AS2MDN', X12Interchange = 'X12Interchange', X12FunctionalGroup = 'X12FunctionalGroup', X12TransactionSet = 'X12TransactionSet', X12InterchangeAcknowledgment = 'X12InterchangeAcknowledgment', X12FunctionalGroupAcknowledgment = 'X12FunctionalGroupAcknowledgment', X12TransactionSetAcknowledgment = 'X12TransactionSetAcknowledgment', EdifactInterchange = 'EdifactInterchange', EdifactFunctionalGroup = 'EdifactFunctionalGroup', EdifactTransactionSet = 'EdifactTransactionSet', EdifactInterchangeAcknowledgment = 'EdifactInterchangeAcknowledgment', EdifactFunctionalGroupAcknowledgment = 'EdifactFunctionalGroupAcknowledgment', EdifactTransactionSetAcknowledgment = 'EdifactTransactionSetAcknowledgment' }


	/** The tracking events definition. */
	export interface TrackingEventsDefinition {

		/**
		 * The events.
		 * Required
		 */
		events: Array<TrackingEvent>;

		/**
		 * The source type.
		 * Required
		 */
		sourceType: string;

		/** The track events operation options. */
		trackEventsOptions?: TrackEventsOperationOptions | null;
	}

	/** The tracking events definition. */
	export interface TrackingEventsDefinitionFormProperties {

		/**
		 * The source type.
		 * Required
		 */
		sourceType: FormControl<string | null | undefined>,

		/** The track events operation options. */
		trackEventsOptions: FormControl<TrackEventsOperationOptions | null | undefined>,
	}
	export function CreateTrackingEventsDefinitionFormGroup() {
		return new FormGroup<TrackingEventsDefinitionFormProperties>({
			sourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			trackEventsOptions: new FormControl<TrackEventsOperationOptions | null | undefined>(undefined),
		});

	}


	/** The tracking record type. */
	export enum TrackingRecordType { NotSpecified = 'NotSpecified', Custom = 'Custom', AS2Message = 'AS2Message', AS2MDN = 'AS2MDN', X12Interchange = 'X12Interchange', X12FunctionalGroup = 'X12FunctionalGroup', X12TransactionSet = 'X12TransactionSet', X12InterchangeAcknowledgment = 'X12InterchangeAcknowledgment', X12FunctionalGroupAcknowledgment = 'X12FunctionalGroupAcknowledgment', X12TransactionSetAcknowledgment = 'X12TransactionSetAcknowledgment', EdifactInterchange = 'EdifactInterchange', EdifactFunctionalGroup = 'EdifactFunctionalGroup', EdifactTransactionSet = 'EdifactTransactionSet', EdifactInterchangeAcknowledgment = 'EdifactInterchangeAcknowledgment', EdifactFunctionalGroupAcknowledgment = 'EdifactFunctionalGroupAcknowledgment', EdifactTransactionSetAcknowledgment = 'EdifactTransactionSetAcknowledgment' }


	/** The trailing separator policy. */
	export enum TrailingSeparatorPolicy { NotSpecified = 'NotSpecified', NotAllowed = 'NotAllowed', Optional = 'Optional', Mandatory = 'Mandatory' }


	/** The usage indicator. */
	export enum UsageIndicator { NotSpecified = 'NotSpecified', Test = 'Test', Information = 'Information', Production = 'Production' }


	/** The workflow type. */
	export interface Workflow {

		/** The workflow properties. */
		properties?: WorkflowProperties;
	}

	/** The workflow type. */
	export interface WorkflowFormProperties {
	}
	export function CreateWorkflowFormGroup() {
		return new FormGroup<WorkflowFormProperties>({
		});

	}


	/** The workflow properties. */
	export interface WorkflowProperties {

		/** Gets the access endpoint. */
		accessEndpoint?: string | null;

		/** Gets the changed time. */
		changedTime?: Date | null;

		/** Gets the created time. */
		createdTime?: Date | null;
		definition?: Object;

		/** The endpoints configuration. */
		endpointsConfiguration?: FlowEndpointsConfiguration;

		/** The resource reference. */
		integrationAccount?: ResourceReference;

		/** The resource reference. */
		integrationServiceEnvironment?: ResourceReference;

		/** The parameters. */
		parameters?: {[id: string]: WorkflowParameter };

		/** The workflow provisioning state. */
		provisioningState?: ApiResourceMetadataProvisioningState | null;

		/** The sku type. */
		sku?: Sku;

		/** The workflow state. */
		state?: IntegrationServiceEnvironmentPropertiesState | null;

		/** Gets the version. */
		version?: string | null;
	}

	/** The workflow properties. */
	export interface WorkflowPropertiesFormProperties {

		/** Gets the access endpoint. */
		accessEndpoint: FormControl<string | null | undefined>,

		/** Gets the changed time. */
		changedTime: FormControl<Date | null | undefined>,

		/** Gets the created time. */
		createdTime: FormControl<Date | null | undefined>,

		/** The parameters. */
		parameters: FormControl<{[id: string]: WorkflowParameter } | null | undefined>,

		/** The workflow provisioning state. */
		provisioningState: FormControl<ApiResourceMetadataProvisioningState | null | undefined>,

		/** The workflow state. */
		state: FormControl<IntegrationServiceEnvironmentPropertiesState | null | undefined>,

		/** Gets the version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowPropertiesFormGroup() {
		return new FormGroup<WorkflowPropertiesFormProperties>({
			accessEndpoint: new FormControl<string | null | undefined>(undefined),
			changedTime: new FormControl<Date | null | undefined>(undefined),
			createdTime: new FormControl<Date | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: WorkflowParameter } | null | undefined>(undefined),
			provisioningState: new FormControl<ApiResourceMetadataProvisioningState | null | undefined>(undefined),
			state: new FormControl<IntegrationServiceEnvironmentPropertiesState | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The workflow parameters. */
	export interface WorkflowParameter {

		/** The description. */
		description?: string | null;
		metadata?: Object;

		/** The parameter type. */
		type?: ParameterType | null;
		value?: Object;
	}

	/** The workflow parameters. */
	export interface WorkflowParameterFormProperties {

		/** The description. */
		description: FormControl<string | null | undefined>,

		/** The parameter type. */
		type: FormControl<ParameterType | null | undefined>,
	}
	export function CreateWorkflowParameterFormGroup() {
		return new FormGroup<WorkflowParameterFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ParameterType | null | undefined>(undefined),
		});

	}


	/** The workflow filter. */
	export interface WorkflowFilter {

		/** The workflow state. */
		state?: IntegrationServiceEnvironmentPropertiesState | null;
	}

	/** The workflow filter. */
	export interface WorkflowFilterFormProperties {

		/** The workflow state. */
		state: FormControl<IntegrationServiceEnvironmentPropertiesState | null | undefined>,
	}
	export function CreateWorkflowFilterFormGroup() {
		return new FormGroup<WorkflowFilterFormProperties>({
			state: new FormControl<IntegrationServiceEnvironmentPropertiesState | null | undefined>(undefined),
		});

	}


	/** The list of workflows. */
	export interface WorkflowListResult {

		/** The URL to get the next set of results. */
		nextLink?: string | null;

		/** The list of workflows. */
		value?: Array<Workflow>;
	}

	/** The list of workflows. */
	export interface WorkflowListResultFormProperties {

		/** The URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowListResultFormGroup() {
		return new FormGroup<WorkflowListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The workflow output parameter. */
	export interface WorkflowOutputParameter {
		error?: Object;
	}

	/** The workflow output parameter. */
	export interface WorkflowOutputParameterFormProperties {
	}
	export function CreateWorkflowOutputParameterFormGroup() {
		return new FormGroup<WorkflowOutputParameterFormProperties>({
		});

	}


	/** The workflow provisioning state. */
	export enum WorkflowProvisioningState { NotSpecified = 'NotSpecified', Accepted = 'Accepted', Running = 'Running', Ready = 'Ready', Creating = 'Creating', Created = 'Created', Deleting = 'Deleting', Deleted = 'Deleted', Canceled = 'Canceled', Failed = 'Failed', Succeeded = 'Succeeded', Moving = 'Moving', Updating = 'Updating', Registering = 'Registering', Registered = 'Registered', Unregistering = 'Unregistering', Unregistered = 'Unregistered', Completed = 'Completed' }


	/** The workflow run. */
	export interface WorkflowRun {

		/** Gets the workflow run name. */
		name?: string | null;

		/** The workflow run properties. */
		properties?: WorkflowRunProperties;

		/** Gets the workflow run type. */
		type?: string | null;
	}

	/** The workflow run. */
	export interface WorkflowRunFormProperties {

		/** Gets the workflow run name. */
		name: FormControl<string | null | undefined>,

		/** Gets the workflow run type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowRunFormGroup() {
		return new FormGroup<WorkflowRunFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The workflow run properties. */
	export interface WorkflowRunProperties {

		/** Gets the code. */
		code?: string | null;

		/** The correlation property. */
		correlation?: Correlation;

		/** Gets the correlation id. */
		correlationId?: string | null;

		/** Gets the end time. */
		endTime?: Date | null;
		error?: Object;

		/** Gets the outputs. */
		outputs?: {[id: string]: WorkflowOutputParameter };

		/** The workflow run trigger. */
		response?: WorkflowRunTrigger;

		/** Gets the start time. */
		startTime?: Date | null;

		/** The workflow status. */
		status?: OperationResultPropertiesStatus | null;

		/** The workflow run trigger. */
		trigger?: WorkflowRunTrigger;

		/** Gets the wait end time. */
		waitEndTime?: Date | null;

		/** The resource reference. */
		workflow?: ResourceReference;
	}

	/** The workflow run properties. */
	export interface WorkflowRunPropertiesFormProperties {

		/** Gets the code. */
		code: FormControl<string | null | undefined>,

		/** Gets the correlation id. */
		correlationId: FormControl<string | null | undefined>,

		/** Gets the end time. */
		endTime: FormControl<Date | null | undefined>,

		/** Gets the outputs. */
		outputs: FormControl<{[id: string]: WorkflowOutputParameter } | null | undefined>,

		/** Gets the start time. */
		startTime: FormControl<Date | null | undefined>,

		/** The workflow status. */
		status: FormControl<OperationResultPropertiesStatus | null | undefined>,

		/** Gets the wait end time. */
		waitEndTime: FormControl<Date | null | undefined>,
	}
	export function CreateWorkflowRunPropertiesFormGroup() {
		return new FormGroup<WorkflowRunPropertiesFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			correlationId: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			outputs: new FormControl<{[id: string]: WorkflowOutputParameter } | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<OperationResultPropertiesStatus | null | undefined>(undefined),
			waitEndTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The workflow run trigger. */
	export interface WorkflowRunTrigger {

		/** Gets the code. */
		code?: string | null;

		/** The correlation property. */
		correlation?: Correlation;

		/** Gets the end time. */
		endTime?: Date | null;
		error?: Object;
		inputs?: Object;

		/** The content link. */
		inputsLink?: ContentLink;

		/** Gets the name. */
		name?: string | null;
		outputs?: Object;

		/** The content link. */
		outputsLink?: ContentLink;

		/** Gets the scheduled time. */
		scheduledTime?: Date | null;

		/** Gets the start time. */
		startTime?: Date | null;

		/** The workflow status. */
		status?: OperationResultPropertiesStatus | null;
		trackedProperties?: Object;

		/** Gets the tracking id. */
		trackingId?: string | null;
	}

	/** The workflow run trigger. */
	export interface WorkflowRunTriggerFormProperties {

		/** Gets the code. */
		code: FormControl<string | null | undefined>,

		/** Gets the end time. */
		endTime: FormControl<Date | null | undefined>,

		/** Gets the name. */
		name: FormControl<string | null | undefined>,

		/** Gets the scheduled time. */
		scheduledTime: FormControl<Date | null | undefined>,

		/** Gets the start time. */
		startTime: FormControl<Date | null | undefined>,

		/** The workflow status. */
		status: FormControl<OperationResultPropertiesStatus | null | undefined>,

		/** Gets the tracking id. */
		trackingId: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowRunTriggerFormGroup() {
		return new FormGroup<WorkflowRunTriggerFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			scheduledTime: new FormControl<Date | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<OperationResultPropertiesStatus | null | undefined>(undefined),
			trackingId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The workflow run action. */
	export interface WorkflowRunAction {

		/** Gets the workflow run action name. */
		name?: string | null;

		/** The workflow run action properties. */
		properties?: WorkflowRunActionProperties;

		/** Gets the workflow run action type. */
		type?: string | null;
	}

	/** The workflow run action. */
	export interface WorkflowRunActionFormProperties {

		/** Gets the workflow run action name. */
		name: FormControl<string | null | undefined>,

		/** Gets the workflow run action type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowRunActionFormGroup() {
		return new FormGroup<WorkflowRunActionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The workflow run action properties. */
	export interface WorkflowRunActionProperties {

		/** Gets the code. */
		code?: string | null;

		/** The correlation property. */
		correlation?: Correlation;

		/** Gets the end time. */
		endTime?: Date | null;
		error?: Object;

		/** The content link. */
		inputsLink?: ContentLink;

		/** The content link. */
		outputsLink?: ContentLink;

		/** Gets the retry histories. */
		retryHistory?: Array<RetryHistory>;

		/** Gets the start time. */
		startTime?: Date | null;

		/** The workflow status. */
		status?: OperationResultPropertiesStatus | null;
		trackedProperties?: Object;

		/** Gets the tracking id. */
		trackingId?: string | null;
	}

	/** The workflow run action properties. */
	export interface WorkflowRunActionPropertiesFormProperties {

		/** Gets the code. */
		code: FormControl<string | null | undefined>,

		/** Gets the end time. */
		endTime: FormControl<Date | null | undefined>,

		/** Gets the start time. */
		startTime: FormControl<Date | null | undefined>,

		/** The workflow status. */
		status: FormControl<OperationResultPropertiesStatus | null | undefined>,

		/** Gets the tracking id. */
		trackingId: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowRunActionPropertiesFormGroup() {
		return new FormGroup<WorkflowRunActionPropertiesFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<OperationResultPropertiesStatus | null | undefined>(undefined),
			trackingId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The workflow run action filter. */
	export interface WorkflowRunActionFilter {

		/** The workflow status. */
		status?: OperationResultPropertiesStatus | null;
	}

	/** The workflow run action filter. */
	export interface WorkflowRunActionFilterFormProperties {

		/** The workflow status. */
		status: FormControl<OperationResultPropertiesStatus | null | undefined>,
	}
	export function CreateWorkflowRunActionFilterFormGroup() {
		return new FormGroup<WorkflowRunActionFilterFormProperties>({
			status: new FormControl<OperationResultPropertiesStatus | null | undefined>(undefined),
		});

	}


	/** The list of workflow run actions. */
	export interface WorkflowRunActionListResult {

		/** The URL to get the next set of results. */
		nextLink?: string | null;

		/** A list of workflow run actions. */
		value?: Array<WorkflowRunAction>;
	}

	/** The list of workflow run actions. */
	export interface WorkflowRunActionListResultFormProperties {

		/** The URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowRunActionListResultFormGroup() {
		return new FormGroup<WorkflowRunActionListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The workflow run action repetition definition. */
	export interface WorkflowRunActionRepetitionDefinition {

		/**
		 * The workflow run action repetition properties definition.
		 * Required
		 */
		properties: WorkflowRunActionRepetitionProperties;
	}

	/** The workflow run action repetition definition. */
	export interface WorkflowRunActionRepetitionDefinitionFormProperties {
	}
	export function CreateWorkflowRunActionRepetitionDefinitionFormGroup() {
		return new FormGroup<WorkflowRunActionRepetitionDefinitionFormProperties>({
		});

	}


	/** The workflow run action repetition properties definition. */
	export interface WorkflowRunActionRepetitionProperties {

		/** The repetition indexes. */
		repetitionIndexes?: Array<RepetitionIndex>;
	}

	/** The workflow run action repetition properties definition. */
	export interface WorkflowRunActionRepetitionPropertiesFormProperties {
	}
	export function CreateWorkflowRunActionRepetitionPropertiesFormGroup() {
		return new FormGroup<WorkflowRunActionRepetitionPropertiesFormProperties>({
		});

	}


	/** A collection of workflow run action repetitions. */
	export interface WorkflowRunActionRepetitionDefinitionCollection {

		/** The link used to get the next page of recommendations. */
		nextLink?: string | null;
		value?: Array<WorkflowRunActionRepetitionDefinition>;
	}

	/** A collection of workflow run action repetitions. */
	export interface WorkflowRunActionRepetitionDefinitionCollectionFormProperties {

		/** The link used to get the next page of recommendations. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowRunActionRepetitionDefinitionCollectionFormGroup() {
		return new FormGroup<WorkflowRunActionRepetitionDefinitionCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The workflow run filter. */
	export interface WorkflowRunFilter {

		/** The workflow status. */
		status?: OperationResultPropertiesStatus | null;
	}

	/** The workflow run filter. */
	export interface WorkflowRunFilterFormProperties {

		/** The workflow status. */
		status: FormControl<OperationResultPropertiesStatus | null | undefined>,
	}
	export function CreateWorkflowRunFilterFormGroup() {
		return new FormGroup<WorkflowRunFilterFormProperties>({
			status: new FormControl<OperationResultPropertiesStatus | null | undefined>(undefined),
		});

	}


	/** The list of workflow runs. */
	export interface WorkflowRunListResult {

		/** The URL to get the next set of results. */
		nextLink?: string | null;

		/** A list of workflow runs. */
		value?: Array<WorkflowRun>;
	}

	/** The list of workflow runs. */
	export interface WorkflowRunListResultFormProperties {

		/** The URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowRunListResultFormGroup() {
		return new FormGroup<WorkflowRunListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The workflow state. */
	export enum WorkflowState { NotSpecified = 'NotSpecified', Completed = 'Completed', Enabled = 'Enabled', Disabled = 'Disabled', Deleted = 'Deleted', Suspended = 'Suspended' }


	/** The workflow status. */
	export enum WorkflowStatus { NotSpecified = 'NotSpecified', Paused = 'Paused', Running = 'Running', Waiting = 'Waiting', Succeeded = 'Succeeded', Skipped = 'Skipped', Suspended = 'Suspended', Cancelled = 'Cancelled', Failed = 'Failed', Faulted = 'Faulted', TimedOut = 'TimedOut', Aborted = 'Aborted', Ignored = 'Ignored' }


	/** The workflow trigger callback URL. */
	export interface WorkflowTriggerCallbackUrl {

		/** Gets the workflow trigger callback URL base path. */
		basePath?: string | null;

		/** Gets the workflow trigger callback URL HTTP method. */
		method?: string | null;

		/** Gets the workflow trigger callback URL query parameters. */
		queries?: WorkflowTriggerListCallbackUrlQueries;

		/** Gets the workflow trigger callback URL relative path. */
		relativePath?: string | null;

		/** Gets the workflow trigger callback URL relative path parameters. */
		relativePathParameters?: Array<string>;

		/** Gets the workflow trigger callback URL. */
		value?: string | null;
	}

	/** The workflow trigger callback URL. */
	export interface WorkflowTriggerCallbackUrlFormProperties {

		/** Gets the workflow trigger callback URL base path. */
		basePath: FormControl<string | null | undefined>,

		/** Gets the workflow trigger callback URL HTTP method. */
		method: FormControl<string | null | undefined>,

		/** Gets the workflow trigger callback URL relative path. */
		relativePath: FormControl<string | null | undefined>,

		/** Gets the workflow trigger callback URL. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowTriggerCallbackUrlFormGroup() {
		return new FormGroup<WorkflowTriggerCallbackUrlFormProperties>({
			basePath: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			relativePath: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Gets the workflow trigger callback URL query parameters. */
	export interface WorkflowTriggerListCallbackUrlQueries {

		/** The api version. */
		'api-version'?: string | null;

		/** The SAS timestamp. */
		se?: string | null;

		/** The SAS signature. */
		sig?: string | null;

		/** The SAS permissions. */
		sp?: string | null;

		/** The SAS version. */
		sv?: string | null;
	}

	/** Gets the workflow trigger callback URL query parameters. */
	export interface WorkflowTriggerListCallbackUrlQueriesFormProperties {

		/** The api version. */
		'api-version': FormControl<string | null | undefined>,

		/** The SAS timestamp. */
		se: FormControl<string | null | undefined>,

		/** The SAS signature. */
		sig: FormControl<string | null | undefined>,

		/** The SAS permissions. */
		sp: FormControl<string | null | undefined>,

		/** The SAS version. */
		sv: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowTriggerListCallbackUrlQueriesFormGroup() {
		return new FormGroup<WorkflowTriggerListCallbackUrlQueriesFormProperties>({
			'api-version': new FormControl<string | null | undefined>(undefined),
			se: new FormControl<string | null | undefined>(undefined),
			sig: new FormControl<string | null | undefined>(undefined),
			sp: new FormControl<string | null | undefined>(undefined),
			sv: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The workflow trigger filter. */
	export interface WorkflowTriggerFilter {

		/** The workflow state. */
		state?: IntegrationServiceEnvironmentPropertiesState | null;
	}

	/** The workflow trigger filter. */
	export interface WorkflowTriggerFilterFormProperties {

		/** The workflow state. */
		state: FormControl<IntegrationServiceEnvironmentPropertiesState | null | undefined>,
	}
	export function CreateWorkflowTriggerFilterFormGroup() {
		return new FormGroup<WorkflowTriggerFilterFormProperties>({
			state: new FormControl<IntegrationServiceEnvironmentPropertiesState | null | undefined>(undefined),
		});

	}


	/** The workflow trigger history. */
	export interface WorkflowTriggerHistory {

		/** Gets the workflow trigger history name. */
		name?: string | null;

		/** The workflow trigger history properties. */
		properties?: WorkflowTriggerHistoryProperties;

		/** Gets the workflow trigger history type. */
		type?: string | null;
	}

	/** The workflow trigger history. */
	export interface WorkflowTriggerHistoryFormProperties {

		/** Gets the workflow trigger history name. */
		name: FormControl<string | null | undefined>,

		/** Gets the workflow trigger history type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowTriggerHistoryFormGroup() {
		return new FormGroup<WorkflowTriggerHistoryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The workflow trigger history properties. */
	export interface WorkflowTriggerHistoryProperties {

		/** Gets the code. */
		code?: string | null;

		/** The correlation property. */
		correlation?: Correlation;

		/** Gets the end time. */
		endTime?: Date | null;
		error?: Object;

		/** The value indicating whether trigger was fired. */
		fired?: boolean | null;

		/** The content link. */
		inputsLink?: ContentLink;

		/** The content link. */
		outputsLink?: ContentLink;

		/** The resource reference. */
		run?: ResourceReference;

		/** Gets the start time. */
		startTime?: Date | null;

		/** The workflow status. */
		status?: OperationResultPropertiesStatus | null;

		/** Gets the tracking id. */
		trackingId?: string | null;
	}

	/** The workflow trigger history properties. */
	export interface WorkflowTriggerHistoryPropertiesFormProperties {

		/** Gets the code. */
		code: FormControl<string | null | undefined>,

		/** Gets the end time. */
		endTime: FormControl<Date | null | undefined>,

		/** The value indicating whether trigger was fired. */
		fired: FormControl<boolean | null | undefined>,

		/** Gets the start time. */
		startTime: FormControl<Date | null | undefined>,

		/** The workflow status. */
		status: FormControl<OperationResultPropertiesStatus | null | undefined>,

		/** Gets the tracking id. */
		trackingId: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowTriggerHistoryPropertiesFormGroup() {
		return new FormGroup<WorkflowTriggerHistoryPropertiesFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			fired: new FormControl<boolean | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<OperationResultPropertiesStatus | null | undefined>(undefined),
			trackingId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The workflow trigger history filter. */
	export interface WorkflowTriggerHistoryFilter {

		/** The workflow status. */
		status?: OperationResultPropertiesStatus | null;
	}

	/** The workflow trigger history filter. */
	export interface WorkflowTriggerHistoryFilterFormProperties {

		/** The workflow status. */
		status: FormControl<OperationResultPropertiesStatus | null | undefined>,
	}
	export function CreateWorkflowTriggerHistoryFilterFormGroup() {
		return new FormGroup<WorkflowTriggerHistoryFilterFormProperties>({
			status: new FormControl<OperationResultPropertiesStatus | null | undefined>(undefined),
		});

	}


	/** The list of workflow trigger histories. */
	export interface WorkflowTriggerHistoryListResult {

		/** The URL to get the next set of results. */
		nextLink?: string | null;

		/** A list of workflow trigger histories. */
		value?: Array<WorkflowTriggerHistory>;
	}

	/** The list of workflow trigger histories. */
	export interface WorkflowTriggerHistoryListResultFormProperties {

		/** The URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowTriggerHistoryListResultFormGroup() {
		return new FormGroup<WorkflowTriggerHistoryListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list of workflow triggers. */
	export interface WorkflowTriggerListResult {

		/** The URL to get the next set of results. */
		nextLink?: string | null;

		/** A list of workflow triggers. */
		value?: Array<WorkflowTrigger>;
	}

	/** The list of workflow triggers. */
	export interface WorkflowTriggerListResultFormProperties {

		/** The URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowTriggerListResultFormGroup() {
		return new FormGroup<WorkflowTriggerListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The workflow trigger provisioning state. */
	export enum WorkflowTriggerProvisioningState { NotSpecified = 'NotSpecified', Accepted = 'Accepted', Running = 'Running', Ready = 'Ready', Creating = 'Creating', Created = 'Created', Deleting = 'Deleting', Deleted = 'Deleted', Canceled = 'Canceled', Failed = 'Failed', Succeeded = 'Succeeded', Moving = 'Moving', Updating = 'Updating', Registering = 'Registering', Registered = 'Registered', Unregistering = 'Unregistering', Unregistered = 'Unregistered', Completed = 'Completed' }


	/** The workflow version. */
	export interface WorkflowVersion {

		/** The workflow version properties. */
		properties?: WorkflowVersionProperties;
	}

	/** The workflow version. */
	export interface WorkflowVersionFormProperties {
	}
	export function CreateWorkflowVersionFormGroup() {
		return new FormGroup<WorkflowVersionFormProperties>({
		});

	}


	/** The workflow version properties. */
	export interface WorkflowVersionProperties {

		/** Gets the access endpoint. */
		accessEndpoint?: string | null;

		/** Gets the changed time. */
		changedTime?: Date | null;

		/** Gets the created time. */
		createdTime?: Date | null;
		definition?: Object;

		/** The resource reference. */
		integrationAccount?: ResourceReference;

		/** The parameters. */
		parameters?: {[id: string]: WorkflowParameter };

		/** The sku type. */
		sku?: Sku;

		/** The workflow state. */
		state?: IntegrationServiceEnvironmentPropertiesState | null;

		/** Gets the version. */
		version?: string | null;
	}

	/** The workflow version properties. */
	export interface WorkflowVersionPropertiesFormProperties {

		/** Gets the access endpoint. */
		accessEndpoint: FormControl<string | null | undefined>,

		/** Gets the changed time. */
		changedTime: FormControl<Date | null | undefined>,

		/** Gets the created time. */
		createdTime: FormControl<Date | null | undefined>,

		/** The parameters. */
		parameters: FormControl<{[id: string]: WorkflowParameter } | null | undefined>,

		/** The workflow state. */
		state: FormControl<IntegrationServiceEnvironmentPropertiesState | null | undefined>,

		/** Gets the version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowVersionPropertiesFormGroup() {
		return new FormGroup<WorkflowVersionPropertiesFormProperties>({
			accessEndpoint: new FormControl<string | null | undefined>(undefined),
			changedTime: new FormControl<Date | null | undefined>(undefined),
			createdTime: new FormControl<Date | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: WorkflowParameter } | null | undefined>(undefined),
			state: new FormControl<IntegrationServiceEnvironmentPropertiesState | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list of workflow versions. */
	export interface WorkflowVersionListResult {

		/** The URL to get the next set of results. */
		nextLink?: string | null;

		/** A list of workflow versions. */
		value?: Array<WorkflowVersion>;
	}

	/** The list of workflow versions. */
	export interface WorkflowVersionListResultFormProperties {

		/** The URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowVersionListResultFormGroup() {
		return new FormGroup<WorkflowVersionListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The WSDL import method. */
	export enum WsdlImportMethod { NotSpecified = 'NotSpecified', SoapToRest = 'SoapToRest', SoapPassThrough = 'SoapPassThrough' }


	/** The X12 character set. */
	export enum X12CharacterSet { NotSpecified = 'NotSpecified', Basic = 'Basic', Extended = 'Extended', UTF8 = 'UTF8' }


	/** The x12 date format. */
	export enum X12DateFormat { NotSpecified = 'NotSpecified', CCYYMMDD = 'CCYYMMDD', YYMMDD = 'YYMMDD' }


	/** The x12 time format. */
	export enum X12TimeFormat { NotSpecified = 'NotSpecified', HHMM = 'HHMM', HHMMSS = 'HHMMSS', HHMMSSdd = 'HHMMSSdd', HHMMSSd = 'HHMMSSd' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the available Logic REST API operations.
		 * Get providers/Microsoft.Logic/operations
		 * @param {string} api_version The API version.
		 * @return {OperationListResult} OK. The request has succeeded.
		 */
		Operations_List(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.Logic/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a list of integration accounts by subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Logic/integrationAccounts
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} api_version The API version.
		 * @param {number} top The number of items to be included in the result.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {IntegrationAccountListResult} OK
		 */
		IntegrationAccounts_ListBySubscription(subscriptionId: string, api_version: string, top: number | null | undefined): Observable<IntegrationAccountListResult> {
			return this.http.get<IntegrationAccountListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Logic/integrationAccounts&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&top=' + top, {});
		}

		/**
		 * Gets a list of integration service environments by subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Logic/integrationServiceEnvironments
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} api_version The API version.
		 * @param {number} top The number of items to be included in the result.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {IntegrationServiceEnvironmentListResult} OK
		 */
		IntegrationServiceEnvironments_ListBySubscription(subscriptionId: string, api_version: string, top: number | null | undefined): Observable<IntegrationServiceEnvironmentListResult> {
			return this.http.get<IntegrationServiceEnvironmentListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Logic/integrationServiceEnvironments&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&top=' + top, {});
		}

		/**
		 * Gets a list of workflows by subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Logic/workflows
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} api_version The API version.
		 * @param {number} top The number of items to be included in the result.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} filter The filter to apply on the operation. Options for filters include: State, Trigger, and ReferencedResourceId.
		 * @return {WorkflowListResult} OK
		 */
		Workflows_ListBySubscription(subscriptionId: string, api_version: string, top: number | null | undefined, filter: string | null | undefined): Observable<WorkflowListResult> {
			return this.http.get<WorkflowListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Logic/workflows&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&top=' + top + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Gets a list of integration accounts by resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @param {number} top The number of items to be included in the result.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {IntegrationAccountListResult} OK
		 */
		IntegrationAccounts_ListByResourceGroup(subscriptionId: string, resourceGroupName: string, api_version: string, top: number | null | undefined): Observable<IntegrationAccountListResult> {
			return this.http.get<IntegrationAccountListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/integrationAccounts&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&top=' + top, {});
		}

		/**
		 * Gets an integration account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} integrationAccountName The integration account name.
		 * @param {string} api_version The API version.
		 * @return {IntegrationAccount} OK
		 */
		IntegrationAccounts_Get(subscriptionId: string, resourceGroupName: string, integrationAccountName: string, api_version: string): Observable<IntegrationAccount> {
			return this.http.get<IntegrationAccount>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/integrationAccounts/' + (integrationAccountName == null ? '' : encodeURIComponent(integrationAccountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates an integration account.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} integrationAccountName The integration account name.
		 * @param {string} api_version The API version.
		 * @param {IntegrationAccount} requestBody The integration account.
		 * @return {IntegrationAccount} OK
		 */
		IntegrationAccounts_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, integrationAccountName: string, api_version: string, requestBody: IntegrationAccount): Observable<IntegrationAccount> {
			return this.http.put<IntegrationAccount>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/integrationAccounts/' + (integrationAccountName == null ? '' : encodeURIComponent(integrationAccountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an integration account.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} integrationAccountName The integration account name.
		 * @param {string} api_version The API version.
		 * @return {void} OK
		 */
		IntegrationAccounts_Delete(subscriptionId: string, resourceGroupName: string, integrationAccountName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/integrationAccounts/' + (integrationAccountName == null ? '' : encodeURIComponent(integrationAccountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an integration account.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} integrationAccountName The integration account name.
		 * @param {string} api_version The API version.
		 * @param {IntegrationAccount} requestBody The integration account.
		 * @return {IntegrationAccount} OK
		 */
		IntegrationAccounts_Update(subscriptionId: string, resourceGroupName: string, integrationAccountName: string, api_version: string, requestBody: IntegrationAccount): Observable<IntegrationAccount> {
			return this.http.patch<IntegrationAccount>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/integrationAccounts/' + (integrationAccountName == null ? '' : encodeURIComponent(integrationAccountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of integration account agreements.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/agreements
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} integrationAccountName The integration account name.
		 * @param {string} api_version The API version.
		 * @param {number} top The number of items to be included in the result.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} filter The filter to apply on the operation. Options for filters include: AgreementType.
		 * @return {IntegrationAccountAgreementListResult} OK
		 */
		IntegrationAccountAgreements_List(subscriptionId: string, resourceGroupName: string, integrationAccountName: string, api_version: string, top: number | null | undefined, filter: string | null | undefined): Observable<IntegrationAccountAgreementListResult> {
			return this.http.get<IntegrationAccountAgreementListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/integrationAccounts/' + (integrationAccountName == null ? '' : encodeURIComponent(integrationAccountName)) + '/agreements&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&top=' + top + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Gets an integration account agreement.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/agreements/{agreementName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} integrationAccountName The integration account name.
		 * @param {string} agreementName The integration account agreement name.
		 * @param {string} api_version The API version.
		 * @return {IntegrationAccountAgreement} OK
		 */
		IntegrationAccountAgreements_Get(subscriptionId: string, resourceGroupName: string, integrationAccountName: string, agreementName: string, api_version: string): Observable<IntegrationAccountAgreement> {
			return this.http.get<IntegrationAccountAgreement>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/integrationAccounts/' + (integrationAccountName == null ? '' : encodeURIComponent(integrationAccountName)) + '/agreements/' + (agreementName == null ? '' : encodeURIComponent(agreementName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates an integration account agreement.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/agreements/{agreementName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} integrationAccountName The integration account name.
		 * @param {string} agreementName The integration account agreement name.
		 * @param {string} api_version The API version.
		 * @param {IntegrationAccountAgreement} requestBody The integration account agreement.
		 * @return {IntegrationAccountAgreement} OK
		 */
		IntegrationAccountAgreements_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, integrationAccountName: string, agreementName: string, api_version: string, requestBody: IntegrationAccountAgreement): Observable<IntegrationAccountAgreement> {
			return this.http.put<IntegrationAccountAgreement>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/integrationAccounts/' + (integrationAccountName == null ? '' : encodeURIComponent(integrationAccountName)) + '/agreements/' + (agreementName == null ? '' : encodeURIComponent(agreementName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an integration account agreement.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/agreements/{agreementName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} integrationAccountName The integration account name.
		 * @param {string} agreementName The integration account agreement name.
		 * @param {string} api_version The API version.
		 * @return {void} OK
		 */
		IntegrationAccountAgreements_Delete(subscriptionId: string, resourceGroupName: string, integrationAccountName: string, agreementName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/integrationAccounts/' + (integrationAccountName == null ? '' : encodeURIComponent(integrationAccountName)) + '/agreements/' + (agreementName == null ? '' : encodeURIComponent(agreementName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the content callback url.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/agreements/{agreementName}/listContentCallbackUrl
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} integrationAccountName The integration account name.
		 * @param {string} agreementName The integration account agreement name.
		 * @param {string} api_version The API version.
		 * @return {WorkflowTriggerCallbackUrl} OK
		 */
		IntegrationAccountAgreements_ListContentCallbackUrl(subscriptionId: string, resourceGroupName: string, integrationAccountName: string, agreementName: string, api_version: string, requestBody: GetCallbackUrlParameters): Observable<WorkflowTriggerCallbackUrl> {
			return this.http.post<WorkflowTriggerCallbackUrl>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/integrationAccounts/' + (integrationAccountName == null ? '' : encodeURIComponent(integrationAccountName)) + '/agreements/' + (agreementName == null ? '' : encodeURIComponent(agreementName)) + '/listContentCallbackUrl&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the assemblies for an integration account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/assemblies
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} integrationAccountName The integration account name.
		 * @param {string} api_version The API version.
		 * @return {AssemblyCollection} OK
		 */
		IntegrationAccountAssemblies_List(subscriptionId: string, resourceGroupName: string, integrationAccountName: string, api_version: string): Observable<AssemblyCollection> {
			return this.http.get<AssemblyCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/integrationAccounts/' + (integrationAccountName == null ? '' : encodeURIComponent(integrationAccountName)) + '/assemblies&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get an assembly for an integration account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/assemblies/{assemblyArtifactName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} integrationAccountName The integration account name.
		 * @param {string} assemblyArtifactName The assembly artifact name.
		 * @param {string} api_version The API version.
		 * @return {AssemblyDefinition} OK
		 */
		IntegrationAccountAssemblies_Get(subscriptionId: string, resourceGroupName: string, integrationAccountName: string, assemblyArtifactName: string, api_version: string): Observable<AssemblyDefinition> {
			return this.http.get<AssemblyDefinition>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/integrationAccounts/' + (integrationAccountName == null ? '' : encodeURIComponent(integrationAccountName)) + '/assemblies/' + (assemblyArtifactName == null ? '' : encodeURIComponent(assemblyArtifactName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update an assembly for an integration account.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/assemblies/{assemblyArtifactName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} integrationAccountName The integration account name.
		 * @param {string} assemblyArtifactName The assembly artifact name.
		 * @param {string} api_version The API version.
		 * @param {AssemblyDefinition} requestBody The assembly artifact.
		 * @return {AssemblyDefinition} OK
		 */
		IntegrationAccountAssemblies_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, integrationAccountName: string, assemblyArtifactName: string, api_version: string, requestBody: AssemblyDefinition): Observable<AssemblyDefinition> {
			return this.http.put<AssemblyDefinition>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/integrationAccounts/' + (integrationAccountName == null ? '' : encodeURIComponent(integrationAccountName)) + '/assemblies/' + (assemblyArtifactName == null ? '' : encodeURIComponent(assemblyArtifactName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete an assembly for an integration account.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/assemblies/{assemblyArtifactName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} integrationAccountName The integration account name.
		 * @param {string} assemblyArtifactName The assembly artifact name.
		 * @param {string} api_version The API version.
		 * @return {void} OK
		 */
		IntegrationAccountAssemblies_Delete(subscriptionId: string, resourceGroupName: string, integrationAccountName: string, assemblyArtifactName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/integrationAccounts/' + (integrationAccountName == null ? '' : encodeURIComponent(integrationAccountName)) + '/assemblies/' + (assemblyArtifactName == null ? '' : encodeURIComponent(assemblyArtifactName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the content callback url for an integration account assembly.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/assemblies/{assemblyArtifactName}/listContentCallbackUrl
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} integrationAccountName The integration account name.
		 * @param {string} assemblyArtifactName The assembly artifact name.
		 * @param {string} api_version The API version.
		 * @return {WorkflowTriggerCallbackUrl} OK
		 */
		IntegrationAccountAssemblies_ListContentCallbackUrl(subscriptionId: string, resourceGroupName: string, integrationAccountName: string, assemblyArtifactName: string, api_version: string): Observable<WorkflowTriggerCallbackUrl> {
			return this.http.post<WorkflowTriggerCallbackUrl>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/integrationAccounts/' + (integrationAccountName == null ? '' : encodeURIComponent(integrationAccountName)) + '/assemblies/' + (assemblyArtifactName == null ? '' : encodeURIComponent(assemblyArtifactName)) + '/listContentCallbackUrl&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * List the batch configurations for an integration account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/batchConfigurations
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} integrationAccountName The integration account name.
		 * @param {string} api_version The API version.
		 * @return {BatchConfigurationCollection} OK
		 */
		IntegrationAccountBatchConfigurations_List(subscriptionId: string, resourceGroupName: string, integrationAccountName: string, api_version: string): Observable<BatchConfigurationCollection> {
			return this.http.get<BatchConfigurationCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/integrationAccounts/' + (integrationAccountName == null ? '' : encodeURIComponent(integrationAccountName)) + '/batchConfigurations&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get a batch configuration for an integration account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/batchConfigurations/{batchConfigurationName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} integrationAccountName The integration account name.
		 * @param {string} batchConfigurationName The batch configuration name.
		 * @param {string} api_version The API version.
		 * @return {BatchConfiguration} OK
		 */
		IntegrationAccountBatchConfigurations_Get(subscriptionId: string, resourceGroupName: string, integrationAccountName: string, batchConfigurationName: string, api_version: string): Observable<BatchConfiguration> {
			return this.http.get<BatchConfiguration>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/integrationAccounts/' + (integrationAccountName == null ? '' : encodeURIComponent(integrationAccountName)) + '/batchConfigurations/' + (batchConfigurationName == null ? '' : encodeURIComponent(batchConfigurationName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update a batch configuration for an integration account.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/batchConfigurations/{batchConfigurationName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} integrationAccountName The integration account name.
		 * @param {string} batchConfigurationName The batch configuration name.
		 * @param {string} api_version The API version.
		 * @param {BatchConfiguration} requestBody The batch configuration.
		 * @return {BatchConfiguration} OK
		 */
		IntegrationAccountBatchConfigurations_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, integrationAccountName: string, batchConfigurationName: string, api_version: string, requestBody: BatchConfiguration): Observable<BatchConfiguration> {
			return this.http.put<BatchConfiguration>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/integrationAccounts/' + (integrationAccountName == null ? '' : encodeURIComponent(integrationAccountName)) + '/batchConfigurations/' + (batchConfigurationName == null ? '' : encodeURIComponent(batchConfigurationName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a batch configuration for an integration account.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/batchConfigurations/{batchConfigurationName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} integrationAccountName The integration account name.
		 * @param {string} batchConfigurationName The batch configuration name.
		 * @param {string} api_version The API version.
		 * @return {void} OK
		 */
		IntegrationAccountBatchConfigurations_Delete(subscriptionId: string, resourceGroupName: string, integrationAccountName: string, batchConfigurationName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/integrationAccounts/' + (integrationAccountName == null ? '' : encodeURIComponent(integrationAccountName)) + '/batchConfigurations/' + (batchConfigurationName == null ? '' : encodeURIComponent(batchConfigurationName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a list of integration account certificates.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/certificates
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} integrationAccountName The integration account name.
		 * @param {string} api_version The API version.
		 * @param {number} top The number of items to be included in the result.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {IntegrationAccountCertificateListResult} OK
		 */
		IntegrationAccountCertificates_List(subscriptionId: string, resourceGroupName: string, integrationAccountName: string, api_version: string, top: number | null | undefined): Observable<IntegrationAccountCertificateListResult> {
			return this.http.get<IntegrationAccountCertificateListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/integrationAccounts/' + (integrationAccountName == null ? '' : encodeURIComponent(integrationAccountName)) + '/certificates&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&top=' + top, {});
		}

		/**
		 * Gets an integration account certificate.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/certificates/{certificateName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} integrationAccountName The integration account name.
		 * @param {string} certificateName The integration account certificate name.
		 * @param {string} api_version The API version.
		 * @return {IntegrationAccountCertificate} OK
		 */
		IntegrationAccountCertificates_Get(subscriptionId: string, resourceGroupName: string, integrationAccountName: string, certificateName: string, api_version: string): Observable<IntegrationAccountCertificate> {
			return this.http.get<IntegrationAccountCertificate>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/integrationAccounts/' + (integrationAccountName == null ? '' : encodeURIComponent(integrationAccountName)) + '/certificates/' + (certificateName == null ? '' : encodeURIComponent(certificateName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates an integration account certificate.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/certificates/{certificateName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} integrationAccountName The integration account name.
		 * @param {string} certificateName The integration account certificate name.
		 * @param {string} api_version The API version.
		 * @param {IntegrationAccountCertificate} requestBody The integration account certificate.
		 * @return {IntegrationAccountCertificate} OK
		 */
		IntegrationAccountCertificates_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, integrationAccountName: string, certificateName: string, api_version: string, requestBody: IntegrationAccountCertificate): Observable<IntegrationAccountCertificate> {
			return this.http.put<IntegrationAccountCertificate>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/integrationAccounts/' + (integrationAccountName == null ? '' : encodeURIComponent(integrationAccountName)) + '/certificates/' + (certificateName == null ? '' : encodeURIComponent(certificateName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an integration account certificate.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/certificates/{certificateName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} integrationAccountName The integration account name.
		 * @param {string} certificateName The integration account certificate name.
		 * @param {string} api_version The API version.
		 * @return {void} OK
		 */
		IntegrationAccountCertificates_Delete(subscriptionId: string, resourceGroupName: string, integrationAccountName: string, certificateName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/integrationAccounts/' + (integrationAccountName == null ? '' : encodeURIComponent(integrationAccountName)) + '/certificates/' + (certificateName == null ? '' : encodeURIComponent(certificateName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the integration account callback URL.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/listCallbackUrl
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} integrationAccountName The integration account name.
		 * @param {string} api_version The API version.
		 * @param {GetCallbackUrlParameters} requestBody The callback URL parameters.
		 * @return {CallbackUrl} OK
		 */
		IntegrationAccounts_ListCallbackUrl(subscriptionId: string, resourceGroupName: string, integrationAccountName: string, api_version: string, requestBody: GetCallbackUrlParameters): Observable<CallbackUrl> {
			return this.http.post<CallbackUrl>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/integrationAccounts/' + (integrationAccountName == null ? '' : encodeURIComponent(integrationAccountName)) + '/listCallbackUrl&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the integration account's Key Vault keys.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/listKeyVaultKeys
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} integrationAccountName The integration account name.
		 * @param {string} api_version The API version.
		 * @param {ListKeyVaultKeysDefinition} requestBody The key vault parameters.
		 * @return {KeyVaultKeyCollection} OK
		 */
		IntegrationAccounts_ListKeyVaultKeys(subscriptionId: string, resourceGroupName: string, integrationAccountName: string, api_version: string, requestBody: ListKeyVaultKeysDefinition): Observable<KeyVaultKeyCollection> {
			return this.http.post<KeyVaultKeyCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/integrationAccounts/' + (integrationAccountName == null ? '' : encodeURIComponent(integrationAccountName)) + '/listKeyVaultKeys&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Logs the integration account's tracking events.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/logTrackingEvents
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} integrationAccountName The integration account name.
		 * @param {string} api_version The API version.
		 * @param {TrackingEventsDefinition} requestBody The callback URL parameters.
		 * @return {void} OK
		 */
		IntegrationAccounts_LogTrackingEvents(subscriptionId: string, resourceGroupName: string, integrationAccountName: string, api_version: string, requestBody: TrackingEventsDefinition): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/integrationAccounts/' + (integrationAccountName == null ? '' : encodeURIComponent(integrationAccountName)) + '/logTrackingEvents&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a list of integration account maps.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/maps
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} integrationAccountName The integration account name.
		 * @param {string} api_version The API version.
		 * @param {number} top The number of items to be included in the result.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} filter The filter to apply on the operation. Options for filters include: MapType.
		 * @return {IntegrationAccountMapListResult} OK
		 */
		IntegrationAccountMaps_List(subscriptionId: string, resourceGroupName: string, integrationAccountName: string, api_version: string, top: number | null | undefined, filter: string | null | undefined): Observable<IntegrationAccountMapListResult> {
			return this.http.get<IntegrationAccountMapListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/integrationAccounts/' + (integrationAccountName == null ? '' : encodeURIComponent(integrationAccountName)) + '/maps&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&top=' + top + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Gets an integration account map.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/maps/{mapName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} integrationAccountName The integration account name.
		 * @param {string} mapName The integration account map name.
		 * @param {string} api_version The API version.
		 * @return {IntegrationAccountMap} OK
		 */
		IntegrationAccountMaps_Get(subscriptionId: string, resourceGroupName: string, integrationAccountName: string, mapName: string, api_version: string): Observable<IntegrationAccountMap> {
			return this.http.get<IntegrationAccountMap>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/integrationAccounts/' + (integrationAccountName == null ? '' : encodeURIComponent(integrationAccountName)) + '/maps/' + (mapName == null ? '' : encodeURIComponent(mapName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates an integration account map.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/maps/{mapName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} integrationAccountName The integration account name.
		 * @param {string} mapName The integration account map name.
		 * @param {string} api_version The API version.
		 * @param {IntegrationAccountMap} requestBody The integration account map.
		 * @return {IntegrationAccountMap} OK
		 */
		IntegrationAccountMaps_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, integrationAccountName: string, mapName: string, api_version: string, requestBody: IntegrationAccountMap): Observable<IntegrationAccountMap> {
			return this.http.put<IntegrationAccountMap>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/integrationAccounts/' + (integrationAccountName == null ? '' : encodeURIComponent(integrationAccountName)) + '/maps/' + (mapName == null ? '' : encodeURIComponent(mapName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an integration account map.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/maps/{mapName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} integrationAccountName The integration account name.
		 * @param {string} mapName The integration account map name.
		 * @param {string} api_version The API version.
		 * @return {void} OK
		 */
		IntegrationAccountMaps_Delete(subscriptionId: string, resourceGroupName: string, integrationAccountName: string, mapName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/integrationAccounts/' + (integrationAccountName == null ? '' : encodeURIComponent(integrationAccountName)) + '/maps/' + (mapName == null ? '' : encodeURIComponent(mapName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the content callback url.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/maps/{mapName}/listContentCallbackUrl
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} integrationAccountName The integration account name.
		 * @param {string} mapName The integration account map name.
		 * @param {string} api_version The API version.
		 * @return {WorkflowTriggerCallbackUrl} OK
		 */
		IntegrationAccountMaps_ListContentCallbackUrl(subscriptionId: string, resourceGroupName: string, integrationAccountName: string, mapName: string, api_version: string, requestBody: GetCallbackUrlParameters): Observable<WorkflowTriggerCallbackUrl> {
			return this.http.post<WorkflowTriggerCallbackUrl>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/integrationAccounts/' + (integrationAccountName == null ? '' : encodeURIComponent(integrationAccountName)) + '/maps/' + (mapName == null ? '' : encodeURIComponent(mapName)) + '/listContentCallbackUrl&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of integration account partners.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/partners
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} integrationAccountName The integration account name.
		 * @param {string} api_version The API version.
		 * @param {number} top The number of items to be included in the result.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} filter The filter to apply on the operation. Options for filters include: PartnerType.
		 * @return {IntegrationAccountPartnerListResult} OK
		 */
		IntegrationAccountPartners_List(subscriptionId: string, resourceGroupName: string, integrationAccountName: string, api_version: string, top: number | null | undefined, filter: string | null | undefined): Observable<IntegrationAccountPartnerListResult> {
			return this.http.get<IntegrationAccountPartnerListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/integrationAccounts/' + (integrationAccountName == null ? '' : encodeURIComponent(integrationAccountName)) + '/partners&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&top=' + top + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Gets an integration account partner.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/partners/{partnerName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} integrationAccountName The integration account name.
		 * @param {string} partnerName The integration account partner name.
		 * @param {string} api_version The API version.
		 * @return {IntegrationAccountPartner} OK
		 */
		IntegrationAccountPartners_Get(subscriptionId: string, resourceGroupName: string, integrationAccountName: string, partnerName: string, api_version: string): Observable<IntegrationAccountPartner> {
			return this.http.get<IntegrationAccountPartner>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/integrationAccounts/' + (integrationAccountName == null ? '' : encodeURIComponent(integrationAccountName)) + '/partners/' + (partnerName == null ? '' : encodeURIComponent(partnerName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates an integration account partner.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/partners/{partnerName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} integrationAccountName The integration account name.
		 * @param {string} partnerName The integration account partner name.
		 * @param {string} api_version The API version.
		 * @param {IntegrationAccountPartner} requestBody The integration account partner.
		 * @return {IntegrationAccountPartner} OK
		 */
		IntegrationAccountPartners_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, integrationAccountName: string, partnerName: string, api_version: string, requestBody: IntegrationAccountPartner): Observable<IntegrationAccountPartner> {
			return this.http.put<IntegrationAccountPartner>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/integrationAccounts/' + (integrationAccountName == null ? '' : encodeURIComponent(integrationAccountName)) + '/partners/' + (partnerName == null ? '' : encodeURIComponent(partnerName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an integration account partner.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/partners/{partnerName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} integrationAccountName The integration account name.
		 * @param {string} partnerName The integration account partner name.
		 * @param {string} api_version The API version.
		 * @return {void} OK
		 */
		IntegrationAccountPartners_Delete(subscriptionId: string, resourceGroupName: string, integrationAccountName: string, partnerName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/integrationAccounts/' + (integrationAccountName == null ? '' : encodeURIComponent(integrationAccountName)) + '/partners/' + (partnerName == null ? '' : encodeURIComponent(partnerName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the content callback url.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/partners/{partnerName}/listContentCallbackUrl
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} integrationAccountName The integration account name.
		 * @param {string} partnerName The integration account partner name.
		 * @param {string} api_version The API version.
		 * @return {WorkflowTriggerCallbackUrl} OK
		 */
		IntegrationAccountPartners_ListContentCallbackUrl(subscriptionId: string, resourceGroupName: string, integrationAccountName: string, partnerName: string, api_version: string, requestBody: GetCallbackUrlParameters): Observable<WorkflowTriggerCallbackUrl> {
			return this.http.post<WorkflowTriggerCallbackUrl>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/integrationAccounts/' + (integrationAccountName == null ? '' : encodeURIComponent(integrationAccountName)) + '/partners/' + (partnerName == null ? '' : encodeURIComponent(partnerName)) + '/listContentCallbackUrl&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Regenerates the integration account access key.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/regenerateAccessKey
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} integrationAccountName The integration account name.
		 * @param {string} api_version The API version.
		 * @param {RegenerateActionParameter} requestBody The access key type.
		 * @return {IntegrationAccount} OK
		 */
		IntegrationAccounts_RegenerateAccessKey(subscriptionId: string, resourceGroupName: string, integrationAccountName: string, api_version: string, requestBody: RegenerateActionParameter): Observable<IntegrationAccount> {
			return this.http.post<IntegrationAccount>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/integrationAccounts/' + (integrationAccountName == null ? '' : encodeURIComponent(integrationAccountName)) + '/regenerateAccessKey&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of integration account schemas.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/schemas
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} integrationAccountName The integration account name.
		 * @param {string} api_version The API version.
		 * @param {number} top The number of items to be included in the result.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} filter The filter to apply on the operation. Options for filters include: SchemaType.
		 * @return {IntegrationAccountSchemaListResult} OK
		 */
		IntegrationAccountSchemas_List(subscriptionId: string, resourceGroupName: string, integrationAccountName: string, api_version: string, top: number | null | undefined, filter: string | null | undefined): Observable<IntegrationAccountSchemaListResult> {
			return this.http.get<IntegrationAccountSchemaListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/integrationAccounts/' + (integrationAccountName == null ? '' : encodeURIComponent(integrationAccountName)) + '/schemas&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&top=' + top + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Gets an integration account schema.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/schemas/{schemaName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} integrationAccountName The integration account name.
		 * @param {string} schemaName The integration account schema name.
		 * @param {string} api_version The API version.
		 * @return {IntegrationAccountSchema} OK
		 */
		IntegrationAccountSchemas_Get(subscriptionId: string, resourceGroupName: string, integrationAccountName: string, schemaName: string, api_version: string): Observable<IntegrationAccountSchema> {
			return this.http.get<IntegrationAccountSchema>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/integrationAccounts/' + (integrationAccountName == null ? '' : encodeURIComponent(integrationAccountName)) + '/schemas/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates an integration account schema.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/schemas/{schemaName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} integrationAccountName The integration account name.
		 * @param {string} schemaName The integration account schema name.
		 * @param {string} api_version The API version.
		 * @param {IntegrationAccountSchema} requestBody The integration account schema.
		 * @return {IntegrationAccountSchema} OK
		 */
		IntegrationAccountSchemas_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, integrationAccountName: string, schemaName: string, api_version: string, requestBody: IntegrationAccountSchema): Observable<IntegrationAccountSchema> {
			return this.http.put<IntegrationAccountSchema>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/integrationAccounts/' + (integrationAccountName == null ? '' : encodeURIComponent(integrationAccountName)) + '/schemas/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an integration account schema.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/schemas/{schemaName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} integrationAccountName The integration account name.
		 * @param {string} schemaName The integration account schema name.
		 * @param {string} api_version The API version.
		 * @return {void} OK
		 */
		IntegrationAccountSchemas_Delete(subscriptionId: string, resourceGroupName: string, integrationAccountName: string, schemaName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/integrationAccounts/' + (integrationAccountName == null ? '' : encodeURIComponent(integrationAccountName)) + '/schemas/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the content callback url.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/schemas/{schemaName}/listContentCallbackUrl
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} integrationAccountName The integration account name.
		 * @param {string} schemaName The integration account schema name.
		 * @param {string} api_version The API version.
		 * @return {WorkflowTriggerCallbackUrl} OK
		 */
		IntegrationAccountSchemas_ListContentCallbackUrl(subscriptionId: string, resourceGroupName: string, integrationAccountName: string, schemaName: string, api_version: string, requestBody: GetCallbackUrlParameters): Observable<WorkflowTriggerCallbackUrl> {
			return this.http.post<WorkflowTriggerCallbackUrl>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/integrationAccounts/' + (integrationAccountName == null ? '' : encodeURIComponent(integrationAccountName)) + '/schemas/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '/listContentCallbackUrl&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of integration account sessions.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/sessions
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} integrationAccountName The integration account name.
		 * @param {string} api_version The API version.
		 * @param {number} top The number of items to be included in the result.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} filter The filter to apply on the operation. Options for filters include: ChangedTime.
		 * @return {IntegrationAccountSessionListResult} OK
		 */
		IntegrationAccountSessions_List(subscriptionId: string, resourceGroupName: string, integrationAccountName: string, api_version: string, top: number | null | undefined, filter: string | null | undefined): Observable<IntegrationAccountSessionListResult> {
			return this.http.get<IntegrationAccountSessionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/integrationAccounts/' + (integrationAccountName == null ? '' : encodeURIComponent(integrationAccountName)) + '/sessions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&top=' + top + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Gets an integration account session.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/sessions/{sessionName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} integrationAccountName The integration account name.
		 * @param {string} sessionName The integration account session name.
		 * @param {string} api_version The API version.
		 * @return {IntegrationAccountSession} OK
		 */
		IntegrationAccountSessions_Get(subscriptionId: string, resourceGroupName: string, integrationAccountName: string, sessionName: string, api_version: string): Observable<IntegrationAccountSession> {
			return this.http.get<IntegrationAccountSession>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/integrationAccounts/' + (integrationAccountName == null ? '' : encodeURIComponent(integrationAccountName)) + '/sessions/' + (sessionName == null ? '' : encodeURIComponent(sessionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates an integration account session.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/sessions/{sessionName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} integrationAccountName The integration account name.
		 * @param {string} sessionName The integration account session name.
		 * @param {string} api_version The API version.
		 * @param {IntegrationAccountSession} requestBody The integration account session.
		 * @return {IntegrationAccountSession} OK
		 */
		IntegrationAccountSessions_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, integrationAccountName: string, sessionName: string, api_version: string, requestBody: IntegrationAccountSession): Observable<IntegrationAccountSession> {
			return this.http.put<IntegrationAccountSession>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/integrationAccounts/' + (integrationAccountName == null ? '' : encodeURIComponent(integrationAccountName)) + '/sessions/' + (sessionName == null ? '' : encodeURIComponent(sessionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an integration account session.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/sessions/{sessionName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} integrationAccountName The integration account name.
		 * @param {string} sessionName The integration account session name.
		 * @param {string} api_version The API version.
		 * @return {void} OK
		 */
		IntegrationAccountSessions_Delete(subscriptionId: string, resourceGroupName: string, integrationAccountName: string, sessionName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/integrationAccounts/' + (integrationAccountName == null ? '' : encodeURIComponent(integrationAccountName)) + '/sessions/' + (sessionName == null ? '' : encodeURIComponent(sessionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Validates the workflow definition.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/locations/{location}/workflows/{workflowName}/validate
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} location The workflow location.
		 * @param {string} workflowName The workflow name.
		 * @param {string} api_version The API version.
		 * @return {void} OK
		 */
		Workflows_ValidateByLocation(subscriptionId: string, resourceGroupName: string, location: string, workflowName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/workflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)) + '/validate&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a list of workflows by resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @param {number} top The number of items to be included in the result.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} filter The filter to apply on the operation. Options for filters include: State, Trigger, and ReferencedResourceId.
		 * @return {WorkflowListResult} OK
		 */
		Workflows_ListByResourceGroup(subscriptionId: string, resourceGroupName: string, api_version: string, top: number | null | undefined, filter: string | null | undefined): Observable<WorkflowListResult> {
			return this.http.get<WorkflowListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/workflows&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&top=' + top + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Gets a workflow.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} workflowName The workflow name.
		 * @param {string} api_version The API version.
		 * @return {Workflow} OK
		 */
		Workflows_Get(subscriptionId: string, resourceGroupName: string, workflowName: string, api_version: string): Observable<Workflow> {
			return this.http.get<Workflow>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/workflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a workflow.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} workflowName The workflow name.
		 * @param {string} api_version The API version.
		 * @param {Workflow} requestBody The workflow.
		 * @return {Workflow} OK
		 */
		Workflows_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, workflowName: string, api_version: string, requestBody: Workflow): Observable<Workflow> {
			return this.http.put<Workflow>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/workflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a workflow.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} workflowName The workflow name.
		 * @param {string} api_version The API version.
		 * @return {void} OK
		 */
		Workflows_Delete(subscriptionId: string, resourceGroupName: string, workflowName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/workflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a workflow.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} workflowName The workflow name.
		 * @param {string} api_version The API version.
		 * @param {Workflow} requestBody The workflow.
		 * @return {Workflow} OK
		 */
		Workflows_Update(subscriptionId: string, resourceGroupName: string, workflowName: string, api_version: string, requestBody: Workflow): Observable<Workflow> {
			return this.http.patch<Workflow>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/workflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disables a workflow.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/disable
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} workflowName The workflow name.
		 * @param {string} api_version The API version.
		 * @return {void} OK
		 */
		Workflows_Disable(subscriptionId: string, resourceGroupName: string, workflowName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/workflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)) + '/disable&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Enables a workflow.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/enable
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} workflowName The workflow name.
		 * @param {string} api_version The API version.
		 * @return {void} OK
		 */
		Workflows_Enable(subscriptionId: string, resourceGroupName: string, workflowName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/workflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)) + '/enable&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Generates the upgraded definition for a workflow.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/generateUpgradedDefinition
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} workflowName The workflow name.
		 * @param {string} api_version The API version.
		 * @param {GenerateUpgradedDefinitionParameters} requestBody Parameters for generating an upgraded definition.
		 * @return {Object} OK
		 */
		Workflows_GenerateUpgradedDefinition(subscriptionId: string, resourceGroupName: string, workflowName: string, api_version: string, requestBody: GenerateUpgradedDefinitionParameters): Observable<Object> {
			return this.http.post<Object>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/workflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)) + '/generateUpgradedDefinition&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the workflow callback Url.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/listCallbackUrl
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} workflowName The workflow name.
		 * @param {string} api_version The API version.
		 * @param {GetCallbackUrlParameters} requestBody Which callback url to list.
		 * @return {WorkflowTriggerCallbackUrl} OK
		 */
		Workflows_ListCallbackUrl(subscriptionId: string, resourceGroupName: string, workflowName: string, api_version: string, requestBody: GetCallbackUrlParameters): Observable<WorkflowTriggerCallbackUrl> {
			return this.http.post<WorkflowTriggerCallbackUrl>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/workflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)) + '/listCallbackUrl&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets an OpenAPI definition for the workflow.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/listSwagger
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} workflowName The workflow name.
		 * @param {string} api_version The API version.
		 * @return {Object} OK
		 */
		Workflows_ListSwagger(subscriptionId: string, resourceGroupName: string, workflowName: string, api_version: string): Observable<Object> {
			return this.http.post<Object>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/workflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)) + '/listSwagger&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Moves an existing workflow.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/move
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} workflowName The workflow name.
		 * @param {string} api_version The API version.
		 * @param {Workflow} requestBody The workflow to move.
		 * @return {void} OK
		 */
		Workflows_Move(subscriptionId: string, resourceGroupName: string, workflowName: string, api_version: string, requestBody: Workflow): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/workflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)) + '/move&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Regenerates the callback URL access key for request triggers.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/regenerateAccessKey
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} workflowName The workflow name.
		 * @param {string} api_version The API version.
		 * @param {RegenerateActionParameter} requestBody The access key type.
		 * @return {void} OK
		 */
		Workflows_RegenerateAccessKey(subscriptionId: string, resourceGroupName: string, workflowName: string, api_version: string, requestBody: RegenerateActionParameter): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/workflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)) + '/regenerateAccessKey&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a list of workflow runs.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} workflowName The workflow name.
		 * @param {string} api_version The API version.
		 * @param {number} top The number of items to be included in the result.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} filter The filter to apply on the operation. Options for filters include: Status, StartTime, and ClientTrackingId.
		 * @return {WorkflowRunListResult} OK
		 */
		WorkflowRuns_List(subscriptionId: string, resourceGroupName: string, workflowName: string, api_version: string, top: number | null | undefined, filter: string | null | undefined): Observable<WorkflowRunListResult> {
			return this.http.get<WorkflowRunListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/workflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)) + '/runs&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&top=' + top + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Gets a workflow run.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} workflowName The workflow name.
		 * @param {string} runName The workflow run name.
		 * @param {string} api_version The API version.
		 * @return {WorkflowRun} OK
		 */
		WorkflowRuns_Get(subscriptionId: string, resourceGroupName: string, workflowName: string, runName: string, api_version: string): Observable<WorkflowRun> {
			return this.http.get<WorkflowRun>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/workflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)) + '/runs/' + (runName == null ? '' : encodeURIComponent(runName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a list of workflow run actions.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/actions
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} workflowName The workflow name.
		 * @param {string} runName The workflow run name.
		 * @param {string} api_version The API version.
		 * @param {number} top The number of items to be included in the result.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} filter The filter to apply on the operation. Options for filters include: Status.
		 * @return {WorkflowRunActionListResult} OK
		 */
		WorkflowRunActions_List(subscriptionId: string, resourceGroupName: string, workflowName: string, runName: string, api_version: string, top: number | null | undefined, filter: string | null | undefined): Observable<WorkflowRunActionListResult> {
			return this.http.get<WorkflowRunActionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/workflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)) + '/runs/' + (runName == null ? '' : encodeURIComponent(runName)) + '/actions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&top=' + top + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Gets a workflow run action.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/actions/{actionName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} workflowName The workflow name.
		 * @param {string} runName The workflow run name.
		 * @param {string} actionName The workflow action name.
		 * @param {string} api_version The API version.
		 * @return {WorkflowRunAction} OK
		 */
		WorkflowRunActions_Get(subscriptionId: string, resourceGroupName: string, workflowName: string, runName: string, actionName: string, api_version: string): Observable<WorkflowRunAction> {
			return this.http.get<WorkflowRunAction>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/workflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)) + '/runs/' + (runName == null ? '' : encodeURIComponent(runName)) + '/actions/' + (actionName == null ? '' : encodeURIComponent(actionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists a workflow run expression trace.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/actions/{actionName}/listExpressionTraces
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} workflowName The workflow name.
		 * @param {string} runName The workflow run name.
		 * @param {string} actionName The workflow action name.
		 * @param {string} api_version The API version.
		 * @return {ExpressionTraces} OK
		 */
		WorkflowRunActions_ListExpressionTraces(subscriptionId: string, resourceGroupName: string, workflowName: string, runName: string, actionName: string, api_version: string): Observable<ExpressionTraces> {
			return this.http.post<ExpressionTraces>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/workflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)) + '/runs/' + (runName == null ? '' : encodeURIComponent(runName)) + '/actions/' + (actionName == null ? '' : encodeURIComponent(actionName)) + '/listExpressionTraces&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Get all of a workflow run action repetitions.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/actions/{actionName}/repetitions
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} workflowName The workflow name.
		 * @param {string} runName The workflow run name.
		 * @param {string} actionName The workflow action name.
		 * @param {string} api_version The API version.
		 * @return {WorkflowRunActionRepetitionDefinitionCollection} OK
		 */
		WorkflowRunActionRepetitions_List(subscriptionId: string, resourceGroupName: string, workflowName: string, runName: string, actionName: string, api_version: string): Observable<WorkflowRunActionRepetitionDefinitionCollection> {
			return this.http.get<WorkflowRunActionRepetitionDefinitionCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/workflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)) + '/runs/' + (runName == null ? '' : encodeURIComponent(runName)) + '/actions/' + (actionName == null ? '' : encodeURIComponent(actionName)) + '/repetitions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get a workflow run action repetition.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/actions/{actionName}/repetitions/{repetitionName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} workflowName The workflow name.
		 * @param {string} runName The workflow run name.
		 * @param {string} actionName The workflow action name.
		 * @param {string} repetitionName The workflow repetition.
		 * @param {string} api_version The API version.
		 * @return {WorkflowRunActionRepetitionDefinition} OK
		 */
		WorkflowRunActionRepetitions_Get(subscriptionId: string, resourceGroupName: string, workflowName: string, runName: string, actionName: string, repetitionName: string, api_version: string): Observable<WorkflowRunActionRepetitionDefinition> {
			return this.http.get<WorkflowRunActionRepetitionDefinition>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/workflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)) + '/runs/' + (runName == null ? '' : encodeURIComponent(runName)) + '/actions/' + (actionName == null ? '' : encodeURIComponent(actionName)) + '/repetitions/' + (repetitionName == null ? '' : encodeURIComponent(repetitionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists a workflow run expression trace.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/actions/{actionName}/repetitions/{repetitionName}/listExpressionTraces
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} workflowName The workflow name.
		 * @param {string} runName The workflow run name.
		 * @param {string} actionName The workflow action name.
		 * @param {string} repetitionName The workflow repetition.
		 * @param {string} api_version The API version.
		 * @return {ExpressionTraces} OK
		 */
		WorkflowRunActionRepetitions_ListExpressionTraces(subscriptionId: string, resourceGroupName: string, workflowName: string, runName: string, actionName: string, repetitionName: string, api_version: string): Observable<ExpressionTraces> {
			return this.http.post<ExpressionTraces>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/workflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)) + '/runs/' + (runName == null ? '' : encodeURIComponent(runName)) + '/actions/' + (actionName == null ? '' : encodeURIComponent(actionName)) + '/repetitions/' + (repetitionName == null ? '' : encodeURIComponent(repetitionName)) + '/listExpressionTraces&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * List a workflow run repetition request history.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/actions/{actionName}/repetitions/{repetitionName}/requestHistories
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} workflowName The workflow name.
		 * @param {string} runName The workflow run name.
		 * @param {string} actionName The workflow action name.
		 * @param {string} repetitionName The workflow repetition.
		 * @param {string} api_version The API version.
		 * @return {RequestHistoryListResult} OK
		 */
		WorkflowRunActionRepetitionsRequestHistories_List(subscriptionId: string, resourceGroupName: string, workflowName: string, runName: string, actionName: string, repetitionName: string, api_version: string): Observable<RequestHistoryListResult> {
			return this.http.get<RequestHistoryListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/workflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)) + '/runs/' + (runName == null ? '' : encodeURIComponent(runName)) + '/actions/' + (actionName == null ? '' : encodeURIComponent(actionName)) + '/repetitions/' + (repetitionName == null ? '' : encodeURIComponent(repetitionName)) + '/requestHistories&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a workflow run repetition request history.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/actions/{actionName}/repetitions/{repetitionName}/requestHistories/{requestHistoryName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} workflowName The workflow name.
		 * @param {string} runName The workflow run name.
		 * @param {string} actionName The workflow action name.
		 * @param {string} repetitionName The workflow repetition.
		 * @param {string} requestHistoryName The request history name.
		 * @param {string} api_version The API version.
		 * @return {RequestHistory} OK
		 */
		WorkflowRunActionRepetitionsRequestHistories_Get(subscriptionId: string, resourceGroupName: string, workflowName: string, runName: string, actionName: string, repetitionName: string, requestHistoryName: string, api_version: string): Observable<RequestHistory> {
			return this.http.get<RequestHistory>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/workflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)) + '/runs/' + (runName == null ? '' : encodeURIComponent(runName)) + '/actions/' + (actionName == null ? '' : encodeURIComponent(actionName)) + '/repetitions/' + (repetitionName == null ? '' : encodeURIComponent(repetitionName)) + '/requestHistories/' + (requestHistoryName == null ? '' : encodeURIComponent(requestHistoryName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * List a workflow run request history.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/actions/{actionName}/requestHistories
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} workflowName The workflow name.
		 * @param {string} runName The workflow run name.
		 * @param {string} actionName The workflow action name.
		 * @param {string} api_version The API version.
		 * @return {RequestHistoryListResult} OK
		 */
		WorkflowRunActionRequestHistories_List(subscriptionId: string, resourceGroupName: string, workflowName: string, runName: string, actionName: string, api_version: string): Observable<RequestHistoryListResult> {
			return this.http.get<RequestHistoryListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/workflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)) + '/runs/' + (runName == null ? '' : encodeURIComponent(runName)) + '/actions/' + (actionName == null ? '' : encodeURIComponent(actionName)) + '/requestHistories&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a workflow run request history.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/actions/{actionName}/requestHistories/{requestHistoryName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} workflowName The workflow name.
		 * @param {string} runName The workflow run name.
		 * @param {string} actionName The workflow action name.
		 * @param {string} requestHistoryName The request history name.
		 * @param {string} api_version The API version.
		 * @return {RequestHistory} OK
		 */
		WorkflowRunActionRequestHistories_Get(subscriptionId: string, resourceGroupName: string, workflowName: string, runName: string, actionName: string, requestHistoryName: string, api_version: string): Observable<RequestHistory> {
			return this.http.get<RequestHistory>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/workflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)) + '/runs/' + (runName == null ? '' : encodeURIComponent(runName)) + '/actions/' + (actionName == null ? '' : encodeURIComponent(actionName)) + '/requestHistories/' + (requestHistoryName == null ? '' : encodeURIComponent(requestHistoryName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * List the workflow run action scoped repetitions.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/actions/{actionName}/scopeRepetitions
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} workflowName The workflow name.
		 * @param {string} runName The workflow run name.
		 * @param {string} actionName The workflow action name.
		 * @param {string} api_version The API version.
		 * @return {WorkflowRunActionRepetitionDefinitionCollection} OK
		 */
		WorkflowRunActionScopeRepetitions_List(subscriptionId: string, resourceGroupName: string, workflowName: string, runName: string, actionName: string, api_version: string): Observable<WorkflowRunActionRepetitionDefinitionCollection> {
			return this.http.get<WorkflowRunActionRepetitionDefinitionCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/workflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)) + '/runs/' + (runName == null ? '' : encodeURIComponent(runName)) + '/actions/' + (actionName == null ? '' : encodeURIComponent(actionName)) + '/scopeRepetitions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get a workflow run action scoped repetition.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/actions/{actionName}/scopeRepetitions/{repetitionName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} workflowName The workflow name.
		 * @param {string} runName The workflow run name.
		 * @param {string} actionName The workflow action name.
		 * @param {string} repetitionName The workflow repetition.
		 * @param {string} api_version The API version.
		 * @return {WorkflowRunActionRepetitionDefinition} OK
		 */
		WorkflowRunActionScopeRepetitions_Get(subscriptionId: string, resourceGroupName: string, workflowName: string, runName: string, actionName: string, repetitionName: string, api_version: string): Observable<WorkflowRunActionRepetitionDefinition> {
			return this.http.get<WorkflowRunActionRepetitionDefinition>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/workflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)) + '/runs/' + (runName == null ? '' : encodeURIComponent(runName)) + '/actions/' + (actionName == null ? '' : encodeURIComponent(actionName)) + '/scopeRepetitions/' + (repetitionName == null ? '' : encodeURIComponent(repetitionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Cancels a workflow run.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/cancel
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} workflowName The workflow name.
		 * @param {string} runName The workflow run name.
		 * @param {string} api_version The API version.
		 * @return {void} OK
		 */
		WorkflowRuns_Cancel(subscriptionId: string, resourceGroupName: string, workflowName: string, runName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/workflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)) + '/runs/' + (runName == null ? '' : encodeURIComponent(runName)) + '/cancel&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets an operation for a run.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/operations/{operationId}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} workflowName The workflow name.
		 * @param {string} runName The workflow run name.
		 * @param {string} operationId The workflow operation id.
		 * @param {string} api_version The API version.
		 * @return {WorkflowRun} OK
		 */
		WorkflowRunOperations_Get(subscriptionId: string, resourceGroupName: string, workflowName: string, runName: string, operationId: string, api_version: string): Observable<WorkflowRun> {
			return this.http.get<WorkflowRun>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/workflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)) + '/runs/' + (runName == null ? '' : encodeURIComponent(runName)) + '/operations/' + (operationId == null ? '' : encodeURIComponent(operationId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a list of workflow triggers.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/triggers
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} workflowName The workflow name.
		 * @param {string} api_version The API version.
		 * @param {number} top The number of items to be included in the result.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} filter The filter to apply on the operation.
		 * @return {WorkflowTriggerListResult} OK
		 */
		WorkflowTriggers_List(subscriptionId: string, resourceGroupName: string, workflowName: string, api_version: string, top: number | null | undefined, filter: string | null | undefined): Observable<WorkflowTriggerListResult> {
			return this.http.get<WorkflowTriggerListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/workflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)) + '/triggers&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&top=' + top + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Gets a workflow trigger.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/triggers/{triggerName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} workflowName The workflow name.
		 * @param {string} triggerName The workflow trigger name.
		 * @param {string} api_version The API version.
		 * @return {WorkflowTrigger} OK
		 */
		WorkflowTriggers_Get(subscriptionId: string, resourceGroupName: string, workflowName: string, triggerName: string, api_version: string): Observable<WorkflowTrigger> {
			return this.http.get<WorkflowTrigger>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/workflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)) + '/triggers/' + (triggerName == null ? '' : encodeURIComponent(triggerName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a list of workflow trigger histories.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/triggers/{triggerName}/histories
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} workflowName The workflow name.
		 * @param {string} triggerName The workflow trigger name.
		 * @param {string} api_version The API version.
		 * @param {number} top The number of items to be included in the result.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} filter The filter to apply on the operation. Options for filters include: Status, StartTime, and ClientTrackingId.
		 * @return {WorkflowTriggerHistoryListResult} OK
		 */
		WorkflowTriggerHistories_List(subscriptionId: string, resourceGroupName: string, workflowName: string, triggerName: string, api_version: string, top: number | null | undefined, filter: string | null | undefined): Observable<WorkflowTriggerHistoryListResult> {
			return this.http.get<WorkflowTriggerHistoryListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/workflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)) + '/triggers/' + (triggerName == null ? '' : encodeURIComponent(triggerName)) + '/histories&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&top=' + top + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Gets a workflow trigger history.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/triggers/{triggerName}/histories/{historyName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} workflowName The workflow name.
		 * @param {string} triggerName The workflow trigger name.
		 * @param {string} historyName The workflow trigger history name. Corresponds to the run name for triggers that resulted in a run.
		 * @param {string} api_version The API version.
		 * @return {WorkflowTriggerHistory} OK
		 */
		WorkflowTriggerHistories_Get(subscriptionId: string, resourceGroupName: string, workflowName: string, triggerName: string, historyName: string, api_version: string): Observable<WorkflowTriggerHistory> {
			return this.http.get<WorkflowTriggerHistory>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/workflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)) + '/triggers/' + (triggerName == null ? '' : encodeURIComponent(triggerName)) + '/histories/' + (historyName == null ? '' : encodeURIComponent(historyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Resubmits a workflow run based on the trigger history.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/triggers/{triggerName}/histories/{historyName}/resubmit
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} workflowName The workflow name.
		 * @param {string} triggerName The workflow trigger name.
		 * @param {string} historyName The workflow trigger history name. Corresponds to the run name for triggers that resulted in a run.
		 * @param {string} api_version The API version.
		 * @return {void} 
		 */
		WorkflowTriggerHistories_Resubmit(subscriptionId: string, resourceGroupName: string, workflowName: string, triggerName: string, historyName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/workflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)) + '/triggers/' + (triggerName == null ? '' : encodeURIComponent(triggerName)) + '/histories/' + (historyName == null ? '' : encodeURIComponent(historyName)) + '/resubmit&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the callback URL for a workflow trigger.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/triggers/{triggerName}/listCallbackUrl
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} workflowName The workflow name.
		 * @param {string} triggerName The workflow trigger name.
		 * @param {string} api_version The API version.
		 * @return {WorkflowTriggerCallbackUrl} OK
		 */
		WorkflowTriggers_ListCallbackUrl(subscriptionId: string, resourceGroupName: string, workflowName: string, triggerName: string, api_version: string): Observable<WorkflowTriggerCallbackUrl> {
			return this.http.post<WorkflowTriggerCallbackUrl>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/workflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)) + '/triggers/' + (triggerName == null ? '' : encodeURIComponent(triggerName)) + '/listCallbackUrl&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Resets a workflow trigger.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/triggers/{triggerName}/reset
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} workflowName The workflow name.
		 * @param {string} triggerName The workflow trigger name.
		 * @param {string} api_version The API version.
		 * @return {void} OK
		 */
		WorkflowTriggers_Reset(subscriptionId: string, resourceGroupName: string, workflowName: string, triggerName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/workflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)) + '/triggers/' + (triggerName == null ? '' : encodeURIComponent(triggerName)) + '/reset&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Runs a workflow trigger.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/triggers/{triggerName}/run
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} workflowName The workflow name.
		 * @param {string} triggerName The workflow trigger name.
		 * @param {string} api_version The API version.
		 * @return {void} 
		 */
		WorkflowTriggers_Run(subscriptionId: string, resourceGroupName: string, workflowName: string, triggerName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/workflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)) + '/triggers/' + (triggerName == null ? '' : encodeURIComponent(triggerName)) + '/run&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the trigger schema as JSON.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/triggers/{triggerName}/schemas/json
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} workflowName The workflow name.
		 * @param {string} triggerName The workflow trigger name.
		 * @param {string} api_version The API version.
		 * @return {JsonSchema} OK
		 */
		WorkflowTriggers_GetSchemaJson(subscriptionId: string, resourceGroupName: string, workflowName: string, triggerName: string, api_version: string): Observable<JsonSchema> {
			return this.http.get<JsonSchema>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/workflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)) + '/triggers/' + (triggerName == null ? '' : encodeURIComponent(triggerName)) + '/schemas/json&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Sets the state of a workflow trigger.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/triggers/{triggerName}/setState
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} workflowName The workflow name.
		 * @param {string} triggerName The workflow trigger name.
		 * @param {string} api_version The API version.
		 * @param {SetTriggerStateActionDefinition} requestBody The workflow trigger state.
		 * @return {void} OK
		 */
		WorkflowTriggers_SetState(subscriptionId: string, resourceGroupName: string, workflowName: string, triggerName: string, api_version: string, requestBody: SetTriggerStateActionDefinition): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/workflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)) + '/triggers/' + (triggerName == null ? '' : encodeURIComponent(triggerName)) + '/setState&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Validates the workflow.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/validate
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} workflowName The workflow name.
		 * @param {string} api_version The API version.
		 * @param {Workflow} requestBody The workflow.
		 * @return {void} OK
		 */
		Workflows_ValidateByResourceGroup(subscriptionId: string, resourceGroupName: string, workflowName: string, api_version: string, requestBody: Workflow): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/workflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)) + '/validate&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a list of workflow versions.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/versions
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} workflowName The workflow name.
		 * @param {string} api_version The API version.
		 * @param {number} top The number of items to be included in the result.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {WorkflowVersionListResult} OK
		 */
		WorkflowVersions_List(subscriptionId: string, resourceGroupName: string, workflowName: string, api_version: string, top: number | null | undefined): Observable<WorkflowVersionListResult> {
			return this.http.get<WorkflowVersionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/workflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)) + '/versions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&top=' + top, {});
		}

		/**
		 * Gets a workflow version.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/versions/{versionId}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} workflowName The workflow name.
		 * @param {string} versionId The workflow versionId.
		 * @param {string} api_version The API version.
		 * @return {WorkflowVersion} OK
		 */
		WorkflowVersions_Get(subscriptionId: string, resourceGroupName: string, workflowName: string, versionId: string, api_version: string): Observable<WorkflowVersion> {
			return this.http.get<WorkflowVersion>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/workflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)) + '/versions/' + (versionId == null ? '' : encodeURIComponent(versionId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get the callback url for a trigger of a workflow version.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/versions/{versionId}/triggers/{triggerName}/listCallbackUrl
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} workflowName The workflow name.
		 * @param {string} versionId The workflow versionId.
		 * @param {string} triggerName The workflow trigger name.
		 * @param {string} api_version The API version.
		 * @param {GetCallbackUrlParameters} requestBody The callback URL parameters.
		 * @return {WorkflowTriggerCallbackUrl} OK
		 */
		WorkflowVersionTriggers_ListCallbackUrl(subscriptionId: string, resourceGroupName: string, workflowName: string, versionId: string, triggerName: string, api_version: string, requestBody: GetCallbackUrlParameters): Observable<WorkflowTriggerCallbackUrl> {
			return this.http.post<WorkflowTriggerCallbackUrl>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Logic/workflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)) + '/versions/' + (versionId == null ? '' : encodeURIComponent(versionId)) + '/triggers/' + (triggerName == null ? '' : encodeURIComponent(triggerName)) + '/listCallbackUrl&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of integration service environments by resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Logic/integrationServiceEnvironments
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroup The resource group.
		 * @param {string} api_version The API version.
		 * @param {number} top The number of items to be included in the result.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {IntegrationServiceEnvironmentListResult} OK
		 */
		IntegrationServiceEnvironments_ListByResourceGroup(subscriptionId: string, resourceGroup: string, api_version: string, top: number | null | undefined): Observable<IntegrationServiceEnvironmentListResult> {
			return this.http.get<IntegrationServiceEnvironmentListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.Logic/integrationServiceEnvironments&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&top=' + top, {});
		}

		/**
		 * Gets an integration service environment.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Logic/integrationServiceEnvironments/{integrationServiceEnvironmentName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroup The resource group.
		 * @param {string} integrationServiceEnvironmentName The integration service environment name.
		 * @param {string} api_version The API version.
		 * @return {IntegrationServiceEnvironment} OK
		 */
		IntegrationServiceEnvironments_Get(subscriptionId: string, resourceGroup: string, integrationServiceEnvironmentName: string, api_version: string): Observable<IntegrationServiceEnvironment> {
			return this.http.get<IntegrationServiceEnvironment>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.Logic/integrationServiceEnvironments/' + (integrationServiceEnvironmentName == null ? '' : encodeURIComponent(integrationServiceEnvironmentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates an integration service environment.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Logic/integrationServiceEnvironments/{integrationServiceEnvironmentName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroup The resource group.
		 * @param {string} integrationServiceEnvironmentName The integration service environment name.
		 * @param {string} api_version The API version.
		 * @param {IntegrationServiceEnvironment} requestBody The integration service environment.
		 * @return {IntegrationServiceEnvironment} OK
		 */
		IntegrationServiceEnvironments_CreateOrUpdate(subscriptionId: string, resourceGroup: string, integrationServiceEnvironmentName: string, api_version: string, requestBody: IntegrationServiceEnvironment): Observable<IntegrationServiceEnvironment> {
			return this.http.put<IntegrationServiceEnvironment>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.Logic/integrationServiceEnvironments/' + (integrationServiceEnvironmentName == null ? '' : encodeURIComponent(integrationServiceEnvironmentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an integration service environment.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Logic/integrationServiceEnvironments/{integrationServiceEnvironmentName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroup The resource group.
		 * @param {string} integrationServiceEnvironmentName The integration service environment name.
		 * @param {string} api_version The API version.
		 * @return {void} OK
		 */
		IntegrationServiceEnvironments_Delete(subscriptionId: string, resourceGroup: string, integrationServiceEnvironmentName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.Logic/integrationServiceEnvironments/' + (integrationServiceEnvironmentName == null ? '' : encodeURIComponent(integrationServiceEnvironmentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an integration service environment.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Logic/integrationServiceEnvironments/{integrationServiceEnvironmentName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroup The resource group.
		 * @param {string} integrationServiceEnvironmentName The integration service environment name.
		 * @param {string} api_version The API version.
		 * @param {IntegrationServiceEnvironment} requestBody The integration service environment.
		 * @return {IntegrationServiceEnvironment} OK
		 */
		IntegrationServiceEnvironments_Update(subscriptionId: string, resourceGroup: string, integrationServiceEnvironmentName: string, api_version: string, requestBody: IntegrationServiceEnvironment): Observable<IntegrationServiceEnvironment> {
			return this.http.patch<IntegrationServiceEnvironment>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.Logic/integrationServiceEnvironments/' + (integrationServiceEnvironmentName == null ? '' : encodeURIComponent(integrationServiceEnvironmentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the integration service environment network health.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Logic/integrationServiceEnvironments/{integrationServiceEnvironmentName}/health/network
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroup The resource group.
		 * @param {string} integrationServiceEnvironmentName The integration service environment name.
		 * @param {string} api_version The API version.
		 * @return {IntegrationServiceEnvironmentNetworkHealth} OK
		 */
		IntegrationServiceEnvironmentNetworkHealth_Get(subscriptionId: string, resourceGroup: string, integrationServiceEnvironmentName: string, api_version: string): Observable<IntegrationServiceEnvironmentNetworkHealth> {
			return this.http.get<IntegrationServiceEnvironmentNetworkHealth>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.Logic/integrationServiceEnvironments/' + (integrationServiceEnvironmentName == null ? '' : encodeURIComponent(integrationServiceEnvironmentName)) + '/health/network&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the integration service environment managed Apis.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Logic/integrationServiceEnvironments/{integrationServiceEnvironmentName}/managedApis
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroup The resource group.
		 * @param {string} integrationServiceEnvironmentName The integration service environment name.
		 * @param {string} api_version The API version.
		 * @return {ManagedApiListResult} OK
		 */
		IntegrationServiceEnvironmentManagedApis_List(subscriptionId: string, resourceGroup: string, integrationServiceEnvironmentName: string, api_version: string): Observable<ManagedApiListResult> {
			return this.http.get<ManagedApiListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.Logic/integrationServiceEnvironments/' + (integrationServiceEnvironmentName == null ? '' : encodeURIComponent(integrationServiceEnvironmentName)) + '/managedApis&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the integration service environment managed Api.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Logic/integrationServiceEnvironments/{integrationServiceEnvironmentName}/managedApis/{apiName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroup The resource group name.
		 * @param {string} integrationServiceEnvironmentName The integration service environment name.
		 * @param {string} apiName The api name.
		 * @param {string} api_version The API version.
		 * @return {ManagedApi} OK
		 */
		IntegrationServiceEnvironmentManagedApis_Get(subscriptionId: string, resourceGroup: string, integrationServiceEnvironmentName: string, apiName: string, api_version: string): Observable<ManagedApi> {
			return this.http.get<ManagedApi>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.Logic/integrationServiceEnvironments/' + (integrationServiceEnvironmentName == null ? '' : encodeURIComponent(integrationServiceEnvironmentName)) + '/managedApis/' + (apiName == null ? '' : encodeURIComponent(apiName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Puts the integration service environment managed Api.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Logic/integrationServiceEnvironments/{integrationServiceEnvironmentName}/managedApis/{apiName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroup The resource group name.
		 * @param {string} integrationServiceEnvironmentName The integration service environment name.
		 * @param {string} apiName The api name.
		 * @param {string} api_version The API version.
		 * @return {ManagedApi} OK
		 */
		IntegrationServiceEnvironmentManagedApis_Put(subscriptionId: string, resourceGroup: string, integrationServiceEnvironmentName: string, apiName: string, api_version: string): Observable<ManagedApi> {
			return this.http.put<ManagedApi>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.Logic/integrationServiceEnvironments/' + (integrationServiceEnvironmentName == null ? '' : encodeURIComponent(integrationServiceEnvironmentName)) + '/managedApis/' + (apiName == null ? '' : encodeURIComponent(apiName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Deletes the integration service environment managed Api.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Logic/integrationServiceEnvironments/{integrationServiceEnvironmentName}/managedApis/{apiName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroup The resource group.
		 * @param {string} integrationServiceEnvironmentName The integration service environment name.
		 * @param {string} apiName The api name.
		 * @param {string} api_version The API version.
		 * @return {void} 
		 */
		IntegrationServiceEnvironmentManagedApis_Delete(subscriptionId: string, resourceGroup: string, integrationServiceEnvironmentName: string, apiName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.Logic/integrationServiceEnvironments/' + (integrationServiceEnvironmentName == null ? '' : encodeURIComponent(integrationServiceEnvironmentName)) + '/managedApis/' + (apiName == null ? '' : encodeURIComponent(apiName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the managed Api operations.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Logic/integrationServiceEnvironments/{integrationServiceEnvironmentName}/managedApis/{apiName}/apiOperations
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroup The resource group.
		 * @param {string} integrationServiceEnvironmentName The integration service environment name.
		 * @param {string} apiName The api name.
		 * @param {string} api_version The API version.
		 * @return {ApiOperationListResult} OK
		 */
		IntegrationServiceEnvironmentManagedApiOperations_List(subscriptionId: string, resourceGroup: string, integrationServiceEnvironmentName: string, apiName: string, api_version: string): Observable<ApiOperationListResult> {
			return this.http.get<ApiOperationListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.Logic/integrationServiceEnvironments/' + (integrationServiceEnvironmentName == null ? '' : encodeURIComponent(integrationServiceEnvironmentName)) + '/managedApis/' + (apiName == null ? '' : encodeURIComponent(apiName)) + '/apiOperations&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Restarts an integration service environment.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Logic/integrationServiceEnvironments/{integrationServiceEnvironmentName}/restart
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroup The resource group.
		 * @param {string} integrationServiceEnvironmentName The integration service environment name.
		 * @param {string} api_version The API version.
		 * @return {void} OK
		 */
		IntegrationServiceEnvironments_Restart(subscriptionId: string, resourceGroup: string, integrationServiceEnvironmentName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.Logic/integrationServiceEnvironments/' + (integrationServiceEnvironmentName == null ? '' : encodeURIComponent(integrationServiceEnvironmentName)) + '/restart&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a list of integration service environment Skus.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Logic/integrationServiceEnvironments/{integrationServiceEnvironmentName}/skus
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroup The resource group.
		 * @param {string} integrationServiceEnvironmentName The integration service environment name.
		 * @param {string} api_version The API version.
		 * @return {IntegrationServiceEnvironmentSkuList} OK
		 */
		IntegrationServiceEnvironmentSkus_List(subscriptionId: string, resourceGroup: string, integrationServiceEnvironmentName: string, api_version: string): Observable<IntegrationServiceEnvironmentSkuList> {
			return this.http.get<IntegrationServiceEnvironmentSkuList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.Logic/integrationServiceEnvironments/' + (integrationServiceEnvironmentName == null ? '' : encodeURIComponent(integrationServiceEnvironmentName)) + '/skus&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

