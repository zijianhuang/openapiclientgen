import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** ActivationOptions for the class */
	export interface ActivationOptions {

		/** HTTPS URL that supports REST semantics. Would be used for requesting activation from partners for given valuable, triggered by the users. */
		activationUrl?: string | null;

		/** Flag to allow users to make activation call from different device. This allows client to render the activation button enabled even if the activationStatus is ACTIVATED but the requested device is different than the current device. */
		allowReactivation?: boolean | null;
	}

	/** ActivationOptions for the class */
	export interface ActivationOptionsFormProperties {

		/** HTTPS URL that supports REST semantics. Would be used for requesting activation from partners for given valuable, triggered by the users. */
		activationUrl: FormControl<string | null | undefined>,

		/** Flag to allow users to make activation call from different device. This allows client to render the activation button enabled even if the activationStatus is ACTIVATED but the requested device is different than the current device. */
		allowReactivation: FormControl<boolean | null | undefined>,
	}
	export function CreateActivationOptionsFormGroup() {
		return new FormGroup<ActivationOptionsFormProperties>({
			activationUrl: new FormControl<string | null | undefined>(undefined),
			allowReactivation: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The activation status of the object. This field includes activation status if valuable supports activation. */
	export interface ActivationStatus {
		state?: ActivationStatusState | null;
	}

	/** The activation status of the object. This field includes activation status if valuable supports activation. */
	export interface ActivationStatusFormProperties {
		state: FormControl<ActivationStatusState | null | undefined>,
	}
	export function CreateActivationStatusFormGroup() {
		return new FormGroup<ActivationStatusFormProperties>({
			state: new FormControl<ActivationStatusState | null | undefined>(undefined),
		});

	}

	export enum ActivationStatusState { UNKNOWN_STATE = 'UNKNOWN_STATE', NOT_ACTIVATED = 'NOT_ACTIVATED', not_activated = 'not_activated', ACTIVATED = 'ACTIVATED', activated = 'activated' }


	/** Resource used when the AddMessage endpoints are called. */
	export interface AddMessageRequest {

		/** A message that will be displayed with a Valuable */
		message?: Message;
	}

	/** Resource used when the AddMessage endpoints are called. */
	export interface AddMessageRequestFormProperties {
	}
	export function CreateAddMessageRequestFormGroup() {
		return new FormGroup<AddMessageRequestFormProperties>({
		});

	}


	/** A message that will be displayed with a Valuable */
	export interface Message {

		/** The message body. */
		body?: string | null;
		displayInterval?: TimeInterval;

		/** The message header. */
		header?: string | null;

		/** The ID associated with a message. This field is here to enable ease of management of messages. Notice ID values could possibly duplicate across multiple messages in the same class/instance, and care must be taken to select a reasonable ID for each message. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#walletObjectMessage"`. */
		kind?: string | null;
		localizedBody?: LocalizedString;
		localizedHeader?: LocalizedString;

		/** The type of the message. Currently, this can only be set for offers. */
		messageType?: MessageMessageType | null;
	}

	/** A message that will be displayed with a Valuable */
	export interface MessageFormProperties {

		/** The message body. */
		body: FormControl<string | null | undefined>,

		/** The message header. */
		header: FormControl<string | null | undefined>,

		/** The ID associated with a message. This field is here to enable ease of management of messages. Notice ID values could possibly duplicate across multiple messages in the same class/instance, and care must be taken to select a reasonable ID for each message. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#walletObjectMessage"`. */
		kind: FormControl<string | null | undefined>,

		/** The type of the message. Currently, this can only be set for offers. */
		messageType: FormControl<MessageMessageType | null | undefined>,
	}
	export function CreateMessageFormGroup() {
		return new FormGroup<MessageFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			header: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			messageType: new FormControl<MessageMessageType | null | undefined>(undefined),
		});

	}

	export interface TimeInterval {
		end?: DateTime;

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#timeInterval"`. */
		kind?: string | null;
		start?: DateTime;
	}
	export interface TimeIntervalFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#timeInterval"`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateTimeIntervalFormGroup() {
		return new FormGroup<TimeIntervalFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DateTime {

		/** An ISO 8601 extended format date/time. Offset may or may not be required (refer to the parent field's documentation). Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the date/time is intended for a physical location in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. Providing an offset makes this an absolute instant in time around the world. The date/time will be adjusted based on the user's time zone. For example, a time of `2018-06-19T18:30:00-04:00` will be 18:30:00 for a user in New York and 15:30:00 for a user in Los Angeles. Omitting the offset makes this a local date/time, representing several instants in time around the world. The date/time will always be in the user's current time zone. For example, a time of `2018-06-19T18:30:00` will be 18:30:00 for a user in New York and also 18:30:00 for a user in Los Angeles. This is useful when the same local date/time should apply to many physical locations across several time zones. */
		date?: string | null;
	}
	export interface DateTimeFormProperties {

		/** An ISO 8601 extended format date/time. Offset may or may not be required (refer to the parent field's documentation). Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the date/time is intended for a physical location in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. Providing an offset makes this an absolute instant in time around the world. The date/time will be adjusted based on the user's time zone. For example, a time of `2018-06-19T18:30:00-04:00` will be 18:30:00 for a user in New York and 15:30:00 for a user in Los Angeles. Omitting the offset makes this a local date/time, representing several instants in time around the world. The date/time will always be in the user's current time zone. For example, a time of `2018-06-19T18:30:00` will be 18:30:00 for a user in New York and also 18:30:00 for a user in Los Angeles. This is useful when the same local date/time should apply to many physical locations across several time zones. */
		date: FormControl<string | null | undefined>,
	}
	export function CreateDateTimeFormGroup() {
		return new FormGroup<DateTimeFormProperties>({
			date: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LocalizedString {
		defaultValue?: TranslatedString;

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#localizedString"`. */
		kind?: string | null;

		/** Contains the translations for the string. */
		translatedValues?: Array<TranslatedString>;
	}
	export interface LocalizedStringFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#localizedString"`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateLocalizedStringFormGroup() {
		return new FormGroup<LocalizedStringFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TranslatedString {

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#translatedString"`. */
		kind?: string | null;

		/** Represents the BCP 47 language tag. Example values are "en-US", "en-GB", "de", or "de-AT". */
		language?: string | null;

		/** The UTF-8 encoded translated string. */
		value?: string | null;
	}
	export interface TranslatedStringFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#translatedString"`. */
		kind: FormControl<string | null | undefined>,

		/** Represents the BCP 47 language tag. Example values are "en-US", "en-GB", "de", or "de-AT". */
		language: FormControl<string | null | undefined>,

		/** The UTF-8 encoded translated string. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateTranslatedStringFormGroup() {
		return new FormGroup<TranslatedStringFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MessageMessageType { MESSAGE_TYPE_UNSPECIFIED = 'MESSAGE_TYPE_UNSPECIFIED', TEXT = 'TEXT', text = 'text', EXPIRATION_NOTIFICATION = 'EXPIRATION_NOTIFICATION', expirationNotification = 'expirationNotification' }

	export interface AirportInfo {

		/** Three character IATA airport code. This is a required field for `origin` and `destination`. Eg: "SFO" */
		airportIataCode?: string | null;
		airportNameOverride?: LocalizedString;

		/** A name of the gate. Eg: "B59" or "59" */
		gate?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#airportInfo"`. */
		kind?: string | null;

		/** Terminal name. Eg: "INTL" or "I" */
		terminal?: string | null;
	}
	export interface AirportInfoFormProperties {

		/** Three character IATA airport code. This is a required field for `origin` and `destination`. Eg: "SFO" */
		airportIataCode: FormControl<string | null | undefined>,

		/** A name of the gate. Eg: "B59" or "59" */
		gate: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#airportInfo"`. */
		kind: FormControl<string | null | undefined>,

		/** Terminal name. Eg: "INTL" or "I" */
		terminal: FormControl<string | null | undefined>,
	}
	export function CreateAirportInfoFormGroup() {
		return new FormGroup<AirportInfoFormProperties>({
			airportIataCode: new FormControl<string | null | undefined>(undefined),
			gate: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			terminal: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppLinkData {
		androidAppLinkInfo?: AppLinkDataAppLinkInfo;
		iosAppLinkInfo?: AppLinkDataAppLinkInfo;
		webAppLinkInfo?: AppLinkDataAppLinkInfo;
	}
	export interface AppLinkDataFormProperties {
	}
	export function CreateAppLinkDataFormGroup() {
		return new FormGroup<AppLinkDataFormProperties>({
		});

	}

	export interface AppLinkDataAppLinkInfo {

		/** Wrapping type for Google hosted images. Next ID: 7 */
		appLogoImage?: Image;
		appTarget?: AppLinkDataAppLinkInfoAppTarget;
		description?: LocalizedString;
		title?: LocalizedString;
	}
	export interface AppLinkDataAppLinkInfoFormProperties {
	}
	export function CreateAppLinkDataAppLinkInfoFormGroup() {
		return new FormGroup<AppLinkDataAppLinkInfoFormProperties>({
		});

	}


	/** Wrapping type for Google hosted images. Next ID: 7 */
	export interface Image {
		contentDescription?: LocalizedString;

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#image"`. */
		kind?: string | null;
		sourceUri?: ImageUri;
	}

	/** Wrapping type for Google hosted images. Next ID: 7 */
	export interface ImageFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#image"`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateImageFormGroup() {
		return new FormGroup<ImageFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImageUri {

		/** Additional information about the image, which is unused and retained only for backward compatibility. */
		description?: string | null;
		localizedDescription?: LocalizedString;

		/** The location of the image. URIs must have a scheme. */
		uri?: string | null;
	}
	export interface ImageUriFormProperties {

		/** Additional information about the image, which is unused and retained only for backward compatibility. */
		description: FormControl<string | null | undefined>,

		/** The location of the image. URIs must have a scheme. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateImageUriFormGroup() {
		return new FormGroup<ImageUriFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppLinkDataAppLinkInfoAppTarget {
		targetUri?: Uri;
	}
	export interface AppLinkDataAppLinkInfoAppTargetFormProperties {
	}
	export function CreateAppLinkDataAppLinkInfoAppTargetFormGroup() {
		return new FormGroup<AppLinkDataAppLinkInfoAppTargetFormProperties>({
		});

	}

	export interface Uri {

		/** The URI's title appearing in the app as text. Recommended maximum is 20 characters to ensure full string is displayed on smaller screens. Note that in some contexts this text is not used, such as when `description` is part of an image. */
		description?: string | null;

		/** The ID associated with a uri. This field is here to enable ease of management of uris. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#uri"`. */
		kind?: string | null;
		localizedDescription?: LocalizedString;

		/** The location of a web page, image, or other resource. URIs in the `LinksModuleData` module can have different prefixes indicating the type of URI (a link to a web page, a link to a map, a telephone number, or an email address). URIs must have a scheme. */
		uri?: string | null;
	}
	export interface UriFormProperties {

		/** The URI's title appearing in the app as text. Recommended maximum is 20 characters to ensure full string is displayed on smaller screens. Note that in some contexts this text is not used, such as when `description` is part of an image. */
		description: FormControl<string | null | undefined>,

		/** The ID associated with a uri. This field is here to enable ease of management of uris. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#uri"`. */
		kind: FormControl<string | null | undefined>,

		/** The location of a web page, image, or other resource. URIs in the `LinksModuleData` module can have different prefixes indicating the type of URI (a link to a web page, a link to a map, a telephone number, or an email address). URIs must have a scheme. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateUriFormGroup() {
		return new FormGroup<UriFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AuthenticationKey {

		/** Available only to Smart Tap enabled partners. Contact support for additional guidance. */
		id?: number | null;

		/** Available only to Smart Tap enabled partners. Contact support for additional guidance. */
		publicKeyPem?: string | null;
	}
	export interface AuthenticationKeyFormProperties {

		/** Available only to Smart Tap enabled partners. Contact support for additional guidance. */
		id: FormControl<number | null | undefined>,

		/** Available only to Smart Tap enabled partners. Contact support for additional guidance. */
		publicKeyPem: FormControl<string | null | undefined>,
	}
	export function CreateAuthenticationKeyFormGroup() {
		return new FormGroup<AuthenticationKeyFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			publicKeyPem: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Barcode {

		/** An optional text that will override the default text that shows under the barcode. This field is intended for a human readable equivalent of the barcode value, used when the barcode cannot be scanned. */
		alternateText?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#barcode"`. */
		kind?: string | null;

		/** The render encoding for the barcode. When specified, barcode is rendered in the given encoding. Otherwise best known encoding is chosen by Google. */
		renderEncoding?: BarcodeRenderEncoding | null;
		showCodeText?: LocalizedString;

		/** The type of barcode. */
		type?: BarcodeType | null;

		/** The value encoded in the barcode. */
		value?: string | null;
	}
	export interface BarcodeFormProperties {

		/** An optional text that will override the default text that shows under the barcode. This field is intended for a human readable equivalent of the barcode value, used when the barcode cannot be scanned. */
		alternateText: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#barcode"`. */
		kind: FormControl<string | null | undefined>,

		/** The render encoding for the barcode. When specified, barcode is rendered in the given encoding. Otherwise best known encoding is chosen by Google. */
		renderEncoding: FormControl<BarcodeRenderEncoding | null | undefined>,

		/** The type of barcode. */
		type: FormControl<BarcodeType | null | undefined>,

		/** The value encoded in the barcode. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateBarcodeFormGroup() {
		return new FormGroup<BarcodeFormProperties>({
			alternateText: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			renderEncoding: new FormControl<BarcodeRenderEncoding | null | undefined>(undefined),
			type: new FormControl<BarcodeType | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BarcodeRenderEncoding { RENDER_ENCODING_UNSPECIFIED = 'RENDER_ENCODING_UNSPECIFIED', UTF_8 = 'UTF_8' }

	export enum BarcodeType { BARCODE_TYPE_UNSPECIFIED = 'BARCODE_TYPE_UNSPECIFIED', AZTEC = 'AZTEC', aztec = 'aztec', CODE_39 = 'CODE_39', code39 = 'code39', CODE_128 = 'CODE_128', code128 = 'code128', CODABAR = 'CODABAR', codabar = 'codabar', DATA_MATRIX = 'DATA_MATRIX', dataMatrix = 'dataMatrix', EAN_8 = 'EAN_8', ean8 = 'ean8', EAN_13 = 'EAN_13', ean13 = 'ean13', EAN13 = 'EAN13', ITF_14 = 'ITF_14', itf14 = 'itf14', PDF_417 = 'PDF_417', pdf417 = 'pdf417', PDF417 = 'PDF417', QR_CODE = 'QR_CODE', qrCode = 'qrCode', qrcode = 'qrcode', UPC_A = 'UPC_A', upcA = 'upcA', TEXT_ONLY = 'TEXT_ONLY', textOnly = 'textOnly' }

	export interface BarcodeSectionDetail {

		/** Custom field selector to use with field overrides. */
		fieldSelector?: FieldSelector;
	}
	export interface BarcodeSectionDetailFormProperties {
	}
	export function CreateBarcodeSectionDetailFormGroup() {
		return new FormGroup<BarcodeSectionDetailFormProperties>({
		});

	}


	/** Custom field selector to use with field overrides. */
	export interface FieldSelector {

		/** If more than one reference is supplied, then the first one that references a non-empty field will be displayed. */
		fields?: Array<FieldReference>;
	}

	/** Custom field selector to use with field overrides. */
	export interface FieldSelectorFormProperties {
	}
	export function CreateFieldSelectorFormGroup() {
		return new FormGroup<FieldSelectorFormProperties>({
		});

	}


	/** Reference definition to use with field overrides. */
	export interface FieldReference {

		/** Only valid if the `fieldPath` references a date field. Chooses how the date field will be formatted and displayed in the UI. */
		dateFormat?: FieldReferenceDateFormat | null;

		/** Path to the field being referenced, prefixed with "object" or "class" and separated with dots. For example, it may be the string "object.purchaseDetails.purchasePrice". */
		fieldPath?: string | null;
	}

	/** Reference definition to use with field overrides. */
	export interface FieldReferenceFormProperties {

		/** Only valid if the `fieldPath` references a date field. Chooses how the date field will be formatted and displayed in the UI. */
		dateFormat: FormControl<FieldReferenceDateFormat | null | undefined>,

		/** Path to the field being referenced, prefixed with "object" or "class" and separated with dots. For example, it may be the string "object.purchaseDetails.purchasePrice". */
		fieldPath: FormControl<string | null | undefined>,
	}
	export function CreateFieldReferenceFormGroup() {
		return new FormGroup<FieldReferenceFormProperties>({
			dateFormat: new FormControl<FieldReferenceDateFormat | null | undefined>(undefined),
			fieldPath: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FieldReferenceDateFormat { DATE_FORMAT_UNSPECIFIED = 'DATE_FORMAT_UNSPECIFIED', DATE_TIME = 'DATE_TIME', dateTime = 'dateTime', DATE_ONLY = 'DATE_ONLY', dateOnly = 'dateOnly', TIME_ONLY = 'TIME_ONLY', timeOnly = 'timeOnly', DATE_TIME_YEAR = 'DATE_TIME_YEAR', dateTimeYear = 'dateTimeYear', DATE_YEAR = 'DATE_YEAR', dateYear = 'dateYear', YEAR_MONTH = 'YEAR_MONTH', YEAR_MONTH_DAY = 'YEAR_MONTH_DAY' }


	/** Information to read/write to blobstore2. */
	export interface Blobstore2Info {

		/** The blob generation id. */
		blobGeneration?: string | null;

		/** The blob id, e.g., /blobstore/prod/playground/scotty */
		blobId?: string | null;

		/** Read handle passed from Bigstore -> Scotty for a GCS download. This is a signed, serialized blobstore2.ReadHandle proto which must never be set outside of Bigstore, and is not applicable to non-GCS media downloads. */
		downloadReadHandle?: string | null;

		/** The blob read token. Needed to read blobs that have not been replicated. Might not be available until the final call. */
		readToken?: string | null;

		/** Metadata passed from Blobstore -> Scotty for a new GCS upload. This is a signed, serialized blobstore2.BlobMetadataContainer proto which must never be consumed outside of Bigstore, and is not applicable to non-GCS media uploads. */
		uploadMetadataContainer?: string | null;
	}

	/** Information to read/write to blobstore2. */
	export interface Blobstore2InfoFormProperties {

		/** The blob generation id. */
		blobGeneration: FormControl<string | null | undefined>,

		/** The blob id, e.g., /blobstore/prod/playground/scotty */
		blobId: FormControl<string | null | undefined>,

		/** Read handle passed from Bigstore -> Scotty for a GCS download. This is a signed, serialized blobstore2.ReadHandle proto which must never be set outside of Bigstore, and is not applicable to non-GCS media downloads. */
		downloadReadHandle: FormControl<string | null | undefined>,

		/** The blob read token. Needed to read blobs that have not been replicated. Might not be available until the final call. */
		readToken: FormControl<string | null | undefined>,

		/** Metadata passed from Blobstore -> Scotty for a new GCS upload. This is a signed, serialized blobstore2.BlobMetadataContainer proto which must never be consumed outside of Bigstore, and is not applicable to non-GCS media uploads. */
		uploadMetadataContainer: FormControl<string | null | undefined>,
	}
	export function CreateBlobstore2InfoFormGroup() {
		return new FormGroup<Blobstore2InfoFormProperties>({
			blobGeneration: new FormControl<string | null | undefined>(undefined),
			blobId: new FormControl<string | null | undefined>(undefined),
			downloadReadHandle: new FormControl<string | null | undefined>(undefined),
			readToken: new FormControl<string | null | undefined>(undefined),
			uploadMetadataContainer: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BoardingAndSeatingInfo {

		/** Set this field only if this flight boards through more than one door or bridge and you want to explicitly print the door location on the boarding pass. Most airlines route their passengers to the right door or bridge by refering to doors/bridges by the `seatClass`. In those cases `boardingDoor` should not be set. */
		boardingDoor?: BoardingAndSeatingInfoBoardingDoor | null;

		/** The value of boarding group (or zone) this passenger shall board with. eg: "B" The label for this value will be determined by the `boardingPolicy` field in the `flightClass` referenced by this object. */
		boardingGroup?: string | null;

		/** The value of boarding position. eg: "76" */
		boardingPosition?: string | null;

		/** Wrapping type for Google hosted images. Next ID: 7 */
		boardingPrivilegeImage?: Image;

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#boardingAndSeatingInfo"`. */
		kind?: string | null;
		seatAssignment?: LocalizedString;

		/** The value of the seat class. eg: "Economy" or "Economy Plus" */
		seatClass?: string | null;

		/** The value of passenger seat. If there is no specific identifier, use `seatAssignment` instead. eg: "25A" */
		seatNumber?: string | null;

		/** The sequence number on the boarding pass. This usually matches the sequence in which the passengers checked in. Airline might use the number for manual boarding and bag tags. eg: "49" */
		sequenceNumber?: string | null;
	}
	export interface BoardingAndSeatingInfoFormProperties {

		/** Set this field only if this flight boards through more than one door or bridge and you want to explicitly print the door location on the boarding pass. Most airlines route their passengers to the right door or bridge by refering to doors/bridges by the `seatClass`. In those cases `boardingDoor` should not be set. */
		boardingDoor: FormControl<BoardingAndSeatingInfoBoardingDoor | null | undefined>,

		/** The value of boarding group (or zone) this passenger shall board with. eg: "B" The label for this value will be determined by the `boardingPolicy` field in the `flightClass` referenced by this object. */
		boardingGroup: FormControl<string | null | undefined>,

		/** The value of boarding position. eg: "76" */
		boardingPosition: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#boardingAndSeatingInfo"`. */
		kind: FormControl<string | null | undefined>,

		/** The value of the seat class. eg: "Economy" or "Economy Plus" */
		seatClass: FormControl<string | null | undefined>,

		/** The value of passenger seat. If there is no specific identifier, use `seatAssignment` instead. eg: "25A" */
		seatNumber: FormControl<string | null | undefined>,

		/** The sequence number on the boarding pass. This usually matches the sequence in which the passengers checked in. Airline might use the number for manual boarding and bag tags. eg: "49" */
		sequenceNumber: FormControl<string | null | undefined>,
	}
	export function CreateBoardingAndSeatingInfoFormGroup() {
		return new FormGroup<BoardingAndSeatingInfoFormProperties>({
			boardingDoor: new FormControl<BoardingAndSeatingInfoBoardingDoor | null | undefined>(undefined),
			boardingGroup: new FormControl<string | null | undefined>(undefined),
			boardingPosition: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			seatClass: new FormControl<string | null | undefined>(undefined),
			seatNumber: new FormControl<string | null | undefined>(undefined),
			sequenceNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BoardingAndSeatingInfoBoardingDoor { BOARDING_DOOR_UNSPECIFIED = 'BOARDING_DOOR_UNSPECIFIED', FRONT = 'FRONT', front = 'front', BACK = 'BACK', back = 'back' }

	export interface BoardingAndSeatingPolicy {

		/** Indicates the policy the airline uses for boarding. If unset, Google will default to `zoneBased`. */
		boardingPolicy?: BoardingAndSeatingPolicyBoardingPolicy | null;

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#boardingAndSeatingPolicy"`. */
		kind?: string | null;

		/** Seating policy which dictates how we display the seat class. If unset, Google will default to `cabinBased`. */
		seatClassPolicy?: BoardingAndSeatingPolicySeatClassPolicy | null;
	}
	export interface BoardingAndSeatingPolicyFormProperties {

		/** Indicates the policy the airline uses for boarding. If unset, Google will default to `zoneBased`. */
		boardingPolicy: FormControl<BoardingAndSeatingPolicyBoardingPolicy | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#boardingAndSeatingPolicy"`. */
		kind: FormControl<string | null | undefined>,

		/** Seating policy which dictates how we display the seat class. If unset, Google will default to `cabinBased`. */
		seatClassPolicy: FormControl<BoardingAndSeatingPolicySeatClassPolicy | null | undefined>,
	}
	export function CreateBoardingAndSeatingPolicyFormGroup() {
		return new FormGroup<BoardingAndSeatingPolicyFormProperties>({
			boardingPolicy: new FormControl<BoardingAndSeatingPolicyBoardingPolicy | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			seatClassPolicy: new FormControl<BoardingAndSeatingPolicySeatClassPolicy | null | undefined>(undefined),
		});

	}

	export enum BoardingAndSeatingPolicyBoardingPolicy { BOARDING_POLICY_UNSPECIFIED = 'BOARDING_POLICY_UNSPECIFIED', ZONE_BASED = 'ZONE_BASED', zoneBased = 'zoneBased', GROUP_BASED = 'GROUP_BASED', groupBased = 'groupBased', BOARDING_POLICY_OTHER = 'BOARDING_POLICY_OTHER', boardingPolicyOther = 'boardingPolicyOther' }

	export enum BoardingAndSeatingPolicySeatClassPolicy { SEAT_CLASS_POLICY_UNSPECIFIED = 'SEAT_CLASS_POLICY_UNSPECIFIED', CABIN_BASED = 'CABIN_BASED', cabinBased = 'cabinBased', CLASS_BASED = 'CLASS_BASED', classBased = 'classBased', TIER_BASED = 'TIER_BASED', tierBased = 'tierBased', SEAT_CLASS_POLICY_OTHER = 'SEAT_CLASS_POLICY_OTHER', seatClassPolicyOther = 'seatClassPolicyOther' }

	export interface CallbackOptions {

		/** URL for the merchant endpoint that would be called to request updates. The URL should be hosted on HTTPS and robots.txt should allow the URL path to be accessible by UserAgent:Google-Valuables. Deprecated. */
		updateRequestUrl?: string | null;

		/** The HTTPS url configured by the merchant. The URL should be hosted on HTTPS and robots.txt should allow the URL path to be accessible by UserAgent:Google-Valuables. */
		url?: string | null;
	}
	export interface CallbackOptionsFormProperties {

		/** URL for the merchant endpoint that would be called to request updates. The URL should be hosted on HTTPS and robots.txt should allow the URL path to be accessible by UserAgent:Google-Valuables. Deprecated. */
		updateRequestUrl: FormControl<string | null | undefined>,

		/** The HTTPS url configured by the merchant. The URL should be hosted on HTTPS and robots.txt should allow the URL path to be accessible by UserAgent:Google-Valuables. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateCallbackOptionsFormGroup() {
		return new FormGroup<CallbackOptionsFormProperties>({
			updateRequestUrl: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CardBarcodeSectionDetails {
		firstBottomDetail?: BarcodeSectionDetail;
		firstTopDetail?: BarcodeSectionDetail;
		secondTopDetail?: BarcodeSectionDetail;
	}
	export interface CardBarcodeSectionDetailsFormProperties {
	}
	export function CreateCardBarcodeSectionDetailsFormGroup() {
		return new FormGroup<CardBarcodeSectionDetailsFormProperties>({
		});

	}

	export interface CardRowOneItem {
		item?: TemplateItem;
	}
	export interface CardRowOneItemFormProperties {
	}
	export function CreateCardRowOneItemFormGroup() {
		return new FormGroup<CardRowOneItemFormProperties>({
		});

	}

	export interface TemplateItem {

		/** Custom field selector to use with field overrides. */
		firstValue?: FieldSelector;

		/** A predefined item to display. Only one of `firstValue` or `predefinedItem` may be set. */
		predefinedItem?: TemplateItemPredefinedItem | null;

		/** Custom field selector to use with field overrides. */
		secondValue?: FieldSelector;
	}
	export interface TemplateItemFormProperties {

		/** A predefined item to display. Only one of `firstValue` or `predefinedItem` may be set. */
		predefinedItem: FormControl<TemplateItemPredefinedItem | null | undefined>,
	}
	export function CreateTemplateItemFormGroup() {
		return new FormGroup<TemplateItemFormProperties>({
			predefinedItem: new FormControl<TemplateItemPredefinedItem | null | undefined>(undefined),
		});

	}

	export enum TemplateItemPredefinedItem { PREDEFINED_ITEM_UNSPECIFIED = 'PREDEFINED_ITEM_UNSPECIFIED', FREQUENT_FLYER_PROGRAM_NAME_AND_NUMBER = 'FREQUENT_FLYER_PROGRAM_NAME_AND_NUMBER', frequentFlyerProgramNameAndNumber = 'frequentFlyerProgramNameAndNumber', FLIGHT_NUMBER_AND_OPERATING_FLIGHT_NUMBER = 'FLIGHT_NUMBER_AND_OPERATING_FLIGHT_NUMBER', flightNumberAndOperatingFlightNumber = 'flightNumberAndOperatingFlightNumber' }

	export interface CardRowTemplateInfo {
		oneItem?: CardRowOneItem;
		threeItems?: CardRowThreeItems;
		twoItems?: CardRowTwoItems;
	}
	export interface CardRowTemplateInfoFormProperties {
	}
	export function CreateCardRowTemplateInfoFormGroup() {
		return new FormGroup<CardRowTemplateInfoFormProperties>({
		});

	}

	export interface CardRowThreeItems {
		endItem?: TemplateItem;
		middleItem?: TemplateItem;
		startItem?: TemplateItem;
	}
	export interface CardRowThreeItemsFormProperties {
	}
	export function CreateCardRowThreeItemsFormGroup() {
		return new FormGroup<CardRowThreeItemsFormProperties>({
		});

	}

	export interface CardRowTwoItems {
		endItem?: TemplateItem;
		startItem?: TemplateItem;
	}
	export interface CardRowTwoItemsFormProperties {
	}
	export function CreateCardRowTwoItemsFormGroup() {
		return new FormGroup<CardRowTwoItemsFormProperties>({
		});

	}

	export interface CardTemplateOverride {

		/** Template information for rows in the card view. At most three rows are allowed to be specified. */
		cardRowTemplateInfos?: Array<CardRowTemplateInfo>;
	}
	export interface CardTemplateOverrideFormProperties {
	}
	export function CreateCardTemplateOverrideFormGroup() {
		return new FormGroup<CardTemplateOverrideFormProperties>({
		});

	}

	export interface ClassTemplateInfo {
		cardBarcodeSectionDetails?: CardBarcodeSectionDetails;
		cardTemplateOverride?: CardTemplateOverride;
		detailsTemplateOverride?: DetailsTemplateOverride;
		listTemplateOverride?: ListTemplateOverride;
	}
	export interface ClassTemplateInfoFormProperties {
	}
	export function CreateClassTemplateInfoFormGroup() {
		return new FormGroup<ClassTemplateInfoFormProperties>({
		});

	}

	export interface DetailsTemplateOverride {

		/** Information for the "nth" item displayed in the details list. */
		detailsItemInfos?: Array<DetailsItemInfo>;
	}
	export interface DetailsTemplateOverrideFormProperties {
	}
	export function CreateDetailsTemplateOverrideFormGroup() {
		return new FormGroup<DetailsTemplateOverrideFormProperties>({
		});

	}

	export interface DetailsItemInfo {
		item?: TemplateItem;
	}
	export interface DetailsItemInfoFormProperties {
	}
	export function CreateDetailsItemInfoFormGroup() {
		return new FormGroup<DetailsItemInfoFormProperties>({
		});

	}

	export interface ListTemplateOverride {
		firstRowOption?: FirstRowOption;

		/** Custom field selector to use with field overrides. */
		secondRowOption?: FieldSelector;

		/** Custom field selector to use with field overrides. */
		thirdRowOption?: FieldSelector;
	}
	export interface ListTemplateOverrideFormProperties {
	}
	export function CreateListTemplateOverrideFormGroup() {
		return new FormGroup<ListTemplateOverrideFormProperties>({
		});

	}

	export interface FirstRowOption {

		/** Custom field selector to use with field overrides. */
		fieldOption?: FieldSelector;
		transitOption?: FirstRowOptionTransitOption | null;
	}
	export interface FirstRowOptionFormProperties {
		transitOption: FormControl<FirstRowOptionTransitOption | null | undefined>,
	}
	export function CreateFirstRowOptionFormGroup() {
		return new FormGroup<FirstRowOptionFormProperties>({
			transitOption: new FormControl<FirstRowOptionTransitOption | null | undefined>(undefined),
		});

	}

	export enum FirstRowOptionTransitOption { TRANSIT_OPTION_UNSPECIFIED = 'TRANSIT_OPTION_UNSPECIFIED', ORIGIN_AND_DESTINATION_NAMES = 'ORIGIN_AND_DESTINATION_NAMES', originAndDestinationNames = 'originAndDestinationNames', ORIGIN_AND_DESTINATION_CODES = 'ORIGIN_AND_DESTINATION_CODES', originAndDestinationCodes = 'originAndDestinationCodes', ORIGIN_NAME = 'ORIGIN_NAME', originName = 'originName' }


	/** A sequence of media data references representing composite data. Introduced to support Bigstore composite objects. For details, visit http://go/bigstore-composites. */
	export interface CompositeMedia {

		/** Blobstore v1 reference, set if reference_type is BLOBSTORE_REF This should be the byte representation of a blobstore.BlobRef. Since Blobstore is deprecating v1, use blobstore2_info instead. For now, any v2 blob will also be represented in this field as v1 BlobRef. */
		blobRef?: string | null;

		/** Information to read/write to blobstore2. */
		blobstore2Info?: Blobstore2Info;

		/** A binary data reference for a media download. Serves as a technology-agnostic binary reference in some Google infrastructure. This value is a serialized storage_cosmo.BinaryReference proto. Storing it as bytes is a hack to get around the fact that the cosmo proto (as well as others it includes) doesn't support JavaScript. This prevents us from including the actual type of this field. */
		cosmoBinaryReference?: string | null;

		/** crc32.c hash for the payload. */
		crc32cHash?: number | null;

		/** Media data, set if reference_type is INLINE */
		inline?: string | null;

		/** Size of the data, in bytes */
		length?: string | null;

		/** MD5 hash for the payload. */
		md5Hash?: string | null;

		/** This is a copy of the tech.blob.ObjectId proto, which could not be used directly here due to transitive closure issues with JavaScript support; see http://b/8801763. */
		objectId?: ObjectId;

		/** Path to the data, set if reference_type is PATH */
		path?: string | null;

		/** Describes what the field reference contains. */
		referenceType?: CompositeMediaReferenceType | null;

		/** SHA-1 hash for the payload. */
		sha1Hash?: string | null;
	}

	/** A sequence of media data references representing composite data. Introduced to support Bigstore composite objects. For details, visit http://go/bigstore-composites. */
	export interface CompositeMediaFormProperties {

		/** Blobstore v1 reference, set if reference_type is BLOBSTORE_REF This should be the byte representation of a blobstore.BlobRef. Since Blobstore is deprecating v1, use blobstore2_info instead. For now, any v2 blob will also be represented in this field as v1 BlobRef. */
		blobRef: FormControl<string | null | undefined>,

		/** A binary data reference for a media download. Serves as a technology-agnostic binary reference in some Google infrastructure. This value is a serialized storage_cosmo.BinaryReference proto. Storing it as bytes is a hack to get around the fact that the cosmo proto (as well as others it includes) doesn't support JavaScript. This prevents us from including the actual type of this field. */
		cosmoBinaryReference: FormControl<string | null | undefined>,

		/** crc32.c hash for the payload. */
		crc32cHash: FormControl<number | null | undefined>,

		/** Media data, set if reference_type is INLINE */
		inline: FormControl<string | null | undefined>,

		/** Size of the data, in bytes */
		length: FormControl<string | null | undefined>,

		/** MD5 hash for the payload. */
		md5Hash: FormControl<string | null | undefined>,

		/** Path to the data, set if reference_type is PATH */
		path: FormControl<string | null | undefined>,

		/** Describes what the field reference contains. */
		referenceType: FormControl<CompositeMediaReferenceType | null | undefined>,

		/** SHA-1 hash for the payload. */
		sha1Hash: FormControl<string | null | undefined>,
	}
	export function CreateCompositeMediaFormGroup() {
		return new FormGroup<CompositeMediaFormProperties>({
			blobRef: new FormControl<string | null | undefined>(undefined),
			cosmoBinaryReference: new FormControl<string | null | undefined>(undefined),
			crc32cHash: new FormControl<number | null | undefined>(undefined),
			inline: new FormControl<string | null | undefined>(undefined),
			length: new FormControl<string | null | undefined>(undefined),
			md5Hash: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			referenceType: new FormControl<CompositeMediaReferenceType | null | undefined>(undefined),
			sha1Hash: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This is a copy of the tech.blob.ObjectId proto, which could not be used directly here due to transitive closure issues with JavaScript support; see http://b/8801763. */
	export interface ObjectId {

		/** The name of the bucket to which this object belongs. */
		bucketName?: string | null;

		/** Generation of the object. Generations are monotonically increasing across writes, allowing them to be be compared to determine which generation is newer. If this is omitted in a request, then you are requesting the live object. See http://go/bigstore-versions */
		generation?: string | null;

		/** The name of the object. */
		objectName?: string | null;
	}

	/** This is a copy of the tech.blob.ObjectId proto, which could not be used directly here due to transitive closure issues with JavaScript support; see http://b/8801763. */
	export interface ObjectIdFormProperties {

		/** The name of the bucket to which this object belongs. */
		bucketName: FormControl<string | null | undefined>,

		/** Generation of the object. Generations are monotonically increasing across writes, allowing them to be be compared to determine which generation is newer. If this is omitted in a request, then you are requesting the live object. See http://go/bigstore-versions */
		generation: FormControl<string | null | undefined>,

		/** The name of the object. */
		objectName: FormControl<string | null | undefined>,
	}
	export function CreateObjectIdFormGroup() {
		return new FormGroup<ObjectIdFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined),
			generation: new FormControl<string | null | undefined>(undefined),
			objectName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CompositeMediaReferenceType { PATH = 'PATH', BLOB_REF = 'BLOB_REF', INLINE = 'INLINE', BIGSTORE_REF = 'BIGSTORE_REF', COSMO_BINARY_REFERENCE = 'COSMO_BINARY_REFERENCE' }


	/** Detailed Content-Type information from Scotty. The Content-Type of the media will typically be filled in by the header or Scotty's best_guess, but this extended information provides the backend with more information so that it can make a better decision if needed. This is only used on media upload requests from Scotty. */
	export interface ContentTypeInfo {

		/** Scotty's best guess of what the content type of the file is. */
		bestGuess?: string | null;

		/** The content type of the file derived by looking at specific bytes (i.e. "magic bytes") of the actual file. */
		fromBytes?: string | null;

		/** The content type of the file derived from the file extension of the original file name used by the client. */
		fromFileName?: string | null;

		/** The content type of the file as specified in the request headers, multipart headers, or RUPIO start request. */
		fromHeader?: string | null;

		/** The content type of the file derived from the file extension of the URL path. The URL path is assumed to represent a file name (which is typically only true for agents that are providing a REST API). */
		fromUrlPath?: string | null;
	}

	/** Detailed Content-Type information from Scotty. The Content-Type of the media will typically be filled in by the header or Scotty's best_guess, but this extended information provides the backend with more information so that it can make a better decision if needed. This is only used on media upload requests from Scotty. */
	export interface ContentTypeInfoFormProperties {

		/** Scotty's best guess of what the content type of the file is. */
		bestGuess: FormControl<string | null | undefined>,

		/** The content type of the file derived by looking at specific bytes (i.e. "magic bytes") of the actual file. */
		fromBytes: FormControl<string | null | undefined>,

		/** The content type of the file derived from the file extension of the original file name used by the client. */
		fromFileName: FormControl<string | null | undefined>,

		/** The content type of the file as specified in the request headers, multipart headers, or RUPIO start request. */
		fromHeader: FormControl<string | null | undefined>,

		/** The content type of the file derived from the file extension of the URL path. The URL path is assumed to represent a file name (which is typically only true for agents that are providing a REST API). */
		fromUrlPath: FormControl<string | null | undefined>,
	}
	export function CreateContentTypeInfoFormGroup() {
		return new FormGroup<ContentTypeInfoFormProperties>({
			bestGuess: new FormControl<string | null | undefined>(undefined),
			fromBytes: new FormControl<string | null | undefined>(undefined),
			fromFileName: new FormControl<string | null | undefined>(undefined),
			fromHeader: new FormControl<string | null | undefined>(undefined),
			fromUrlPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Device context associated with the object. */
	export interface DeviceContext {

		/** If set, redemption information will only be returned to the given device upon activation of the object. This should not be used as a stable identifier to trace a user's device. It can change across different passes for the same device or even across different activations for the same device. When setting this, callers must also set has_linked_device on the object being activated. */
		deviceToken?: string | null;
	}

	/** Device context associated with the object. */
	export interface DeviceContextFormProperties {

		/** If set, redemption information will only be returned to the given device upon activation of the object. This should not be used as a stable identifier to trace a user's device. It can change across different passes for the same device or even across different activations for the same device. When setting this, callers must also set has_linked_device on the object being activated. */
		deviceToken: FormControl<string | null | undefined>,
	}
	export function CreateDeviceContextFormGroup() {
		return new FormGroup<DeviceContextFormProperties>({
			deviceToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Backend response for a Diff get checksums response. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol. */
	export interface DiffChecksumsResponse {

		/** A sequence of media data references representing composite data. Introduced to support Bigstore composite objects. For details, visit http://go/bigstore-composites. */
		checksumsLocation?: CompositeMedia;

		/** The chunk size of checksums. Must be a multiple of 256KB. */
		chunkSizeBytes?: string | null;

		/** A sequence of media data references representing composite data. Introduced to support Bigstore composite objects. For details, visit http://go/bigstore-composites. */
		objectLocation?: CompositeMedia;

		/** The total size of the server object. */
		objectSizeBytes?: string | null;

		/** The object version of the object the checksums are being returned for. */
		objectVersion?: string | null;
	}

	/** Backend response for a Diff get checksums response. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol. */
	export interface DiffChecksumsResponseFormProperties {

		/** The chunk size of checksums. Must be a multiple of 256KB. */
		chunkSizeBytes: FormControl<string | null | undefined>,

		/** The total size of the server object. */
		objectSizeBytes: FormControl<string | null | undefined>,

		/** The object version of the object the checksums are being returned for. */
		objectVersion: FormControl<string | null | undefined>,
	}
	export function CreateDiffChecksumsResponseFormGroup() {
		return new FormGroup<DiffChecksumsResponseFormProperties>({
			chunkSizeBytes: new FormControl<string | null | undefined>(undefined),
			objectSizeBytes: new FormControl<string | null | undefined>(undefined),
			objectVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Backend response for a Diff download response. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol. */
	export interface DiffDownloadResponse {

		/** A sequence of media data references representing composite data. Introduced to support Bigstore composite objects. For details, visit http://go/bigstore-composites. */
		objectLocation?: CompositeMedia;
	}

	/** Backend response for a Diff download response. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol. */
	export interface DiffDownloadResponseFormProperties {
	}
	export function CreateDiffDownloadResponseFormGroup() {
		return new FormGroup<DiffDownloadResponseFormProperties>({
		});

	}


	/** A Diff upload request. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol. */
	export interface DiffUploadRequest {

		/** A sequence of media data references representing composite data. Introduced to support Bigstore composite objects. For details, visit http://go/bigstore-composites. */
		checksumsInfo?: CompositeMedia;

		/** A sequence of media data references representing composite data. Introduced to support Bigstore composite objects. For details, visit http://go/bigstore-composites. */
		objectInfo?: CompositeMedia;

		/** The object version of the object that is the base version the incoming diff script will be applied to. This field will always be filled in. */
		objectVersion?: string | null;
	}

	/** A Diff upload request. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol. */
	export interface DiffUploadRequestFormProperties {

		/** The object version of the object that is the base version the incoming diff script will be applied to. This field will always be filled in. */
		objectVersion: FormControl<string | null | undefined>,
	}
	export function CreateDiffUploadRequestFormGroup() {
		return new FormGroup<DiffUploadRequestFormProperties>({
			objectVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Backend response for a Diff upload request. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol. */
	export interface DiffUploadResponse {

		/** The object version of the object at the server. Must be included in the end notification response. The version in the end notification response must correspond to the new version of the object that is now stored at the server, after the upload. */
		objectVersion?: string | null;

		/** A sequence of media data references representing composite data. Introduced to support Bigstore composite objects. For details, visit http://go/bigstore-composites. */
		originalObject?: CompositeMedia;
	}

	/** Backend response for a Diff upload request. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol. */
	export interface DiffUploadResponseFormProperties {

		/** The object version of the object at the server. Must be included in the end notification response. The version in the end notification response must correspond to the new version of the object that is now stored at the server, after the upload. */
		objectVersion: FormControl<string | null | undefined>,
	}
	export function CreateDiffUploadResponseFormGroup() {
		return new FormGroup<DiffUploadResponseFormProperties>({
			objectVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Backend response for a Diff get version response. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol. */
	export interface DiffVersionResponse {

		/** The total size of the server object. */
		objectSizeBytes?: string | null;

		/** The version of the object stored at the server. */
		objectVersion?: string | null;
	}

	/** Backend response for a Diff get version response. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol. */
	export interface DiffVersionResponseFormProperties {

		/** The total size of the server object. */
		objectSizeBytes: FormControl<string | null | undefined>,

		/** The version of the object stored at the server. */
		objectVersion: FormControl<string | null | undefined>,
	}
	export function CreateDiffVersionResponseFormGroup() {
		return new FormGroup<DiffVersionResponseFormProperties>({
			objectSizeBytes: new FormControl<string | null | undefined>(undefined),
			objectVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about how a class may be discovered and instantiated from within the Android Pay app. This is done by searching for a loyalty or gift card program and scanning or manually entering. */
	export interface DiscoverableProgram {

		/** Information about the merchant hosted signin flow for a program. */
		merchantSigninInfo?: DiscoverableProgramMerchantSigninInfo;

		/** Information about the merchant hosted signup flow for a program. */
		merchantSignupInfo?: DiscoverableProgramMerchantSignupInfo;

		/** Visibility state of the discoverable program. */
		state?: DiscoverableProgramState | null;
	}

	/** Information about how a class may be discovered and instantiated from within the Android Pay app. This is done by searching for a loyalty or gift card program and scanning or manually entering. */
	export interface DiscoverableProgramFormProperties {

		/** Visibility state of the discoverable program. */
		state: FormControl<DiscoverableProgramState | null | undefined>,
	}
	export function CreateDiscoverableProgramFormGroup() {
		return new FormGroup<DiscoverableProgramFormProperties>({
			state: new FormControl<DiscoverableProgramState | null | undefined>(undefined),
		});

	}


	/** Information about the merchant hosted signin flow for a program. */
	export interface DiscoverableProgramMerchantSigninInfo {
		signinWebsite?: Uri;
	}

	/** Information about the merchant hosted signin flow for a program. */
	export interface DiscoverableProgramMerchantSigninInfoFormProperties {
	}
	export function CreateDiscoverableProgramMerchantSigninInfoFormGroup() {
		return new FormGroup<DiscoverableProgramMerchantSigninInfoFormProperties>({
		});

	}


	/** Information about the merchant hosted signup flow for a program. */
	export interface DiscoverableProgramMerchantSignupInfo {

		/** User data that is sent in a POST request to the signup website URL. This information is encoded and then shared so that the merchant's website can prefill fields used to enroll the user for the discoverable program. */
		signupSharedDatas?: Array<string>;
		signupWebsite?: Uri;
	}

	/** Information about the merchant hosted signup flow for a program. */
	export interface DiscoverableProgramMerchantSignupInfoFormProperties {
	}
	export function CreateDiscoverableProgramMerchantSignupInfoFormGroup() {
		return new FormGroup<DiscoverableProgramMerchantSignupInfoFormProperties>({
		});

	}

	export enum DiscoverableProgramState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', TRUSTED_TESTERS = 'TRUSTED_TESTERS', trustedTesters = 'trustedTesters', LIVE = 'LIVE', live = 'live', DISABLED = 'DISABLED', disabled = 'disabled' }


	/** Parameters specific to media downloads. */
	export interface DownloadParameters {

		/** A boolean to be returned in the response to Scotty. Allows/disallows gzip encoding of the payload content when the server thinks it's advantageous (hence, does not guarantee compression) which allows Scotty to GZip the response to the client. */
		allowGzipCompression?: boolean | null;

		/** Determining whether or not Apiary should skip the inclusion of any Content-Range header on its response to Scotty. */
		ignoreRange?: boolean | null;
	}

	/** Parameters specific to media downloads. */
	export interface DownloadParametersFormProperties {

		/** A boolean to be returned in the response to Scotty. Allows/disallows gzip encoding of the payload content when the server thinks it's advantageous (hence, does not guarantee compression) which allows Scotty to GZip the response to the client. */
		allowGzipCompression: FormControl<boolean | null | undefined>,

		/** Determining whether or not Apiary should skip the inclusion of any Content-Range header on its response to Scotty. */
		ignoreRange: FormControl<boolean | null | undefined>,
	}
	export function CreateDownloadParametersFormGroup() {
		return new FormGroup<DownloadParametersFormProperties>({
			allowGzipCompression: new FormControl<boolean | null | undefined>(undefined),
			ignoreRange: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface EventDateTime {
		customDoorsOpenLabel?: LocalizedString;

		/** The date/time when the doors open at the venue. This is an ISO 8601 extended format date/time, with or without an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. The portion of the date/time without the offset is considered the "local date/time". This should be the local date/time at the venue. For example, if the event occurs at the 20th hour of June 5th, 2018 at the venue, the local date/time portion should be `2018-06-05T20:00:00`. If the local date/time at the venue is 4 hours before UTC, an offset of `-04:00` may be appended. Without offset information, some rich features may not be available. */
		doorsOpen?: string | null;

		/** The label to use for the doors open value (`doorsOpen`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `doorsOpenLabel` and `customDoorsOpenLabel` may not be set. If neither is set, the label will default to "Doors Open", localized. If the doors open field is unset, this label will not be used. */
		doorsOpenLabel?: EventDateTimeDoorsOpenLabel | null;

		/** The date/time when the event ends. If the event spans multiple days, it should be the end date/time on the last day. This is an ISO 8601 extended format date/time, with or without an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. The portion of the date/time without the offset is considered the "local date/time". This should be the local date/time at the venue. For example, if the event occurs at the 20th hour of June 5th, 2018 at the venue, the local date/time portion should be `2018-06-05T20:00:00`. If the local date/time at the venue is 4 hours before UTC, an offset of `-04:00` may be appended. Without offset information, some rich features may not be available. */
		end?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#eventDateTime"`. */
		kind?: string | null;

		/** The date/time when the event starts. If the event spans multiple days, it should be the start date/time on the first day. This is an ISO 8601 extended format date/time, with or without an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. The portion of the date/time without the offset is considered the "local date/time". This should be the local date/time at the venue. For example, if the event occurs at the 20th hour of June 5th, 2018 at the venue, the local date/time portion should be `2018-06-05T20:00:00`. If the local date/time at the venue is 4 hours before UTC, an offset of `-04:00` may be appended. Without offset information, some rich features may not be available. */
		start?: string | null;
	}
	export interface EventDateTimeFormProperties {

		/** The date/time when the doors open at the venue. This is an ISO 8601 extended format date/time, with or without an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. The portion of the date/time without the offset is considered the "local date/time". This should be the local date/time at the venue. For example, if the event occurs at the 20th hour of June 5th, 2018 at the venue, the local date/time portion should be `2018-06-05T20:00:00`. If the local date/time at the venue is 4 hours before UTC, an offset of `-04:00` may be appended. Without offset information, some rich features may not be available. */
		doorsOpen: FormControl<string | null | undefined>,

		/** The label to use for the doors open value (`doorsOpen`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `doorsOpenLabel` and `customDoorsOpenLabel` may not be set. If neither is set, the label will default to "Doors Open", localized. If the doors open field is unset, this label will not be used. */
		doorsOpenLabel: FormControl<EventDateTimeDoorsOpenLabel | null | undefined>,

		/** The date/time when the event ends. If the event spans multiple days, it should be the end date/time on the last day. This is an ISO 8601 extended format date/time, with or without an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. The portion of the date/time without the offset is considered the "local date/time". This should be the local date/time at the venue. For example, if the event occurs at the 20th hour of June 5th, 2018 at the venue, the local date/time portion should be `2018-06-05T20:00:00`. If the local date/time at the venue is 4 hours before UTC, an offset of `-04:00` may be appended. Without offset information, some rich features may not be available. */
		end: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#eventDateTime"`. */
		kind: FormControl<string | null | undefined>,

		/** The date/time when the event starts. If the event spans multiple days, it should be the start date/time on the first day. This is an ISO 8601 extended format date/time, with or without an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. The portion of the date/time without the offset is considered the "local date/time". This should be the local date/time at the venue. For example, if the event occurs at the 20th hour of June 5th, 2018 at the venue, the local date/time portion should be `2018-06-05T20:00:00`. If the local date/time at the venue is 4 hours before UTC, an offset of `-04:00` may be appended. Without offset information, some rich features may not be available. */
		start: FormControl<string | null | undefined>,
	}
	export function CreateEventDateTimeFormGroup() {
		return new FormGroup<EventDateTimeFormProperties>({
			doorsOpen: new FormControl<string | null | undefined>(undefined),
			doorsOpenLabel: new FormControl<EventDateTimeDoorsOpenLabel | null | undefined>(undefined),
			end: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EventDateTimeDoorsOpenLabel { DOORS_OPEN_LABEL_UNSPECIFIED = 'DOORS_OPEN_LABEL_UNSPECIFIED', DOORS_OPEN = 'DOORS_OPEN', doorsOpen = 'doorsOpen', GATES_OPEN = 'GATES_OPEN', gatesOpen = 'gatesOpen' }

	export interface EventReservationInfo {

		/** The confirmation code of the event reservation. This may also take the form of an "order number", "confirmation number", "reservation number", or other equivalent. */
		confirmationCode?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#eventReservationInfo"`. */
		kind?: string | null;
	}
	export interface EventReservationInfoFormProperties {

		/** The confirmation code of the event reservation. This may also take the form of an "order number", "confirmation number", "reservation number", or other equivalent. */
		confirmationCode: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#eventReservationInfo"`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateEventReservationInfoFormGroup() {
		return new FormGroup<EventReservationInfoFormProperties>({
			confirmationCode: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EventSeat {
		gate?: LocalizedString;

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#eventSeat"`. */
		kind?: string | null;
		row?: LocalizedString;
		seat?: LocalizedString;
		section?: LocalizedString;
	}
	export interface EventSeatFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#eventSeat"`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateEventSeatFormGroup() {
		return new FormGroup<EventSeatFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EventTicketClass {

		/** Deprecated. Use `multipleDevicesAndHoldersAllowedStatus` instead. */
		allowMultipleUsersPerObject?: boolean | null;
		callbackOptions?: CallbackOptions;
		classTemplateInfo?: ClassTemplateInfo;

		/** The label to use for the confirmation code value (`eventTicketObject.reservationInfo.confirmationCode`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `confirmationCodeLabel` and `customConfirmationCodeLabel` may not be set. If neither is set, the label will default to "Confirmation Code", localized. If the confirmation code field is unset, this label will not be used. */
		confirmationCodeLabel?: EventTicketClassConfirmationCodeLabel | null;

		/** Country code used to display the card's country (when the user is not in that country), as well as to display localized content when content is not available in the user's locale. */
		countryCode?: string | null;
		customConfirmationCodeLabel?: LocalizedString;
		customGateLabel?: LocalizedString;
		customRowLabel?: LocalizedString;
		customSeatLabel?: LocalizedString;
		customSectionLabel?: LocalizedString;
		dateTime?: EventDateTime;

		/** Identifies whether this class supports Smart Tap. The `redemptionIssuers` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap. */
		enableSmartTap?: boolean | null;

		/** The ID of the event. This ID should be unique for every event in an account. It is used to group tickets together if the user has saved multiple tickets for the same event. It can be at most 64 characters. If provided, the grouping will be stable. Be wary of unintentional collision to avoid grouping tickets that should not be grouped. If you use only one class per event, you can simply set this to the `classId` (with or without the issuer ID portion). If not provided, the platform will attempt to use other data to group tickets (potentially unstable). */
		eventId?: string | null;
		eventName?: LocalizedString;
		finePrint?: LocalizedString;

		/** The label to use for the gate value (`eventTicketObject.seatInfo.gate`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `gateLabel` and `customGateLabel` may not be set. If neither is set, the label will default to "Gate", localized. If the gate field is unset, this label will not be used. */
		gateLabel?: EventTicketClassGateLabel | null;

		/** Wrapping type for Google hosted images. Next ID: 7 */
		heroImage?: Image;

		/** The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`. */
		hexBackgroundColor?: string | null;
		homepageUri?: Uri;

		/** Required. The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
		id?: string | null;

		/** Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level. */
		imageModulesData?: Array<ImageModuleData>;
		infoModuleData?: InfoModuleData;

		/** Required. The issuer name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens. */
		issuerName?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#eventTicketClass"`. */
		kind?: string | null;
		linksModuleData?: LinksModuleData;
		localizedIssuerName?: LocalizedString;

		/** Note: This field is currently not supported to trigger geo notifications. */
		locations?: Array<LatLongPoint>;

		/** Wrapping type for Google hosted images. Next ID: 7 */
		logo?: Image;

		/** An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10. */
		messages?: Array<Message>;

		/** Identifies whether multiple users and devices will save the same object referencing this class. */
		multipleDevicesAndHoldersAllowedStatus?: EventTicketClassMultipleDevicesAndHoldersAllowedStatus | null;

		/** Identifies which redemption issuers can redeem the pass over Smart Tap. Redemption issuers are identified by their issuer ID. Redemption issuers must have at least one Smart Tap key configured. The `enableSmartTap` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap. */
		redemptionIssuers?: Array<string>;
		review?: Review;

		/** Required. The status of the class. This field can be set to `draft` or `underReview` using the insert, patch, or update API calls. Once the review state is changed from `draft` it may not be changed back to `draft`. You should keep this field to `draft` when the class is under development. A `draft` class cannot be used to create any object. You should set this field to `underReview` when you believe the class is ready for use. The platform will automatically set this field to `approved` and it can be immediately used to create or migrate objects. When updating an already `approved` class you should keep setting this field to `underReview`. */
		reviewStatus?: EventTicketClassReviewStatus | null;

		/** The label to use for the row value (`eventTicketObject.seatInfo.row`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `rowLabel` and `customRowLabel` may not be set. If neither is set, the label will default to "Row", localized. If the row field is unset, this label will not be used. */
		rowLabel?: EventTicketClassRowLabel | null;

		/** The label to use for the seat value (`eventTicketObject.seatInfo.seat`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `seatLabel` and `customSeatLabel` may not be set. If neither is set, the label will default to "Seat", localized. If the seat field is unset, this label will not be used. */
		seatLabel?: EventTicketClassSeatLabel | null;

		/** The label to use for the section value (`eventTicketObject.seatInfo.section`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `sectionLabel` and `customSectionLabel` may not be set. If neither is set, the label will default to "Section", localized. If the section field is unset, this label will not be used. */
		sectionLabel?: EventTicketClassSectionLabel | null;
		securityAnimation?: SecurityAnimation;

		/** Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class. */
		textModulesData?: Array<TextModuleData>;
		venue?: EventVenue;

		/** Deprecated */
		version?: string | null;

		/** View Unlock Requirement options for the event ticket. */
		viewUnlockRequirement?: EventTicketClassViewUnlockRequirement | null;

		/** Wrapping type for Google hosted images. Next ID: 7 */
		wideLogo?: Image;

		/** Wrapping type for Google hosted images. Next ID: 7 */
		wordMark?: Image;
	}
	export interface EventTicketClassFormProperties {

		/** Deprecated. Use `multipleDevicesAndHoldersAllowedStatus` instead. */
		allowMultipleUsersPerObject: FormControl<boolean | null | undefined>,

		/** The label to use for the confirmation code value (`eventTicketObject.reservationInfo.confirmationCode`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `confirmationCodeLabel` and `customConfirmationCodeLabel` may not be set. If neither is set, the label will default to "Confirmation Code", localized. If the confirmation code field is unset, this label will not be used. */
		confirmationCodeLabel: FormControl<EventTicketClassConfirmationCodeLabel | null | undefined>,

		/** Country code used to display the card's country (when the user is not in that country), as well as to display localized content when content is not available in the user's locale. */
		countryCode: FormControl<string | null | undefined>,

		/** Identifies whether this class supports Smart Tap. The `redemptionIssuers` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap. */
		enableSmartTap: FormControl<boolean | null | undefined>,

		/** The ID of the event. This ID should be unique for every event in an account. It is used to group tickets together if the user has saved multiple tickets for the same event. It can be at most 64 characters. If provided, the grouping will be stable. Be wary of unintentional collision to avoid grouping tickets that should not be grouped. If you use only one class per event, you can simply set this to the `classId` (with or without the issuer ID portion). If not provided, the platform will attempt to use other data to group tickets (potentially unstable). */
		eventId: FormControl<string | null | undefined>,

		/** The label to use for the gate value (`eventTicketObject.seatInfo.gate`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `gateLabel` and `customGateLabel` may not be set. If neither is set, the label will default to "Gate", localized. If the gate field is unset, this label will not be used. */
		gateLabel: FormControl<EventTicketClassGateLabel | null | undefined>,

		/** The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`. */
		hexBackgroundColor: FormControl<string | null | undefined>,

		/** Required. The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
		id: FormControl<string | null | undefined>,

		/** Required. The issuer name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens. */
		issuerName: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#eventTicketClass"`. */
		kind: FormControl<string | null | undefined>,

		/** Identifies whether multiple users and devices will save the same object referencing this class. */
		multipleDevicesAndHoldersAllowedStatus: FormControl<EventTicketClassMultipleDevicesAndHoldersAllowedStatus | null | undefined>,

		/** Required. The status of the class. This field can be set to `draft` or `underReview` using the insert, patch, or update API calls. Once the review state is changed from `draft` it may not be changed back to `draft`. You should keep this field to `draft` when the class is under development. A `draft` class cannot be used to create any object. You should set this field to `underReview` when you believe the class is ready for use. The platform will automatically set this field to `approved` and it can be immediately used to create or migrate objects. When updating an already `approved` class you should keep setting this field to `underReview`. */
		reviewStatus: FormControl<EventTicketClassReviewStatus | null | undefined>,

		/** The label to use for the row value (`eventTicketObject.seatInfo.row`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `rowLabel` and `customRowLabel` may not be set. If neither is set, the label will default to "Row", localized. If the row field is unset, this label will not be used. */
		rowLabel: FormControl<EventTicketClassRowLabel | null | undefined>,

		/** The label to use for the seat value (`eventTicketObject.seatInfo.seat`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `seatLabel` and `customSeatLabel` may not be set. If neither is set, the label will default to "Seat", localized. If the seat field is unset, this label will not be used. */
		seatLabel: FormControl<EventTicketClassSeatLabel | null | undefined>,

		/** The label to use for the section value (`eventTicketObject.seatInfo.section`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `sectionLabel` and `customSectionLabel` may not be set. If neither is set, the label will default to "Section", localized. If the section field is unset, this label will not be used. */
		sectionLabel: FormControl<EventTicketClassSectionLabel | null | undefined>,

		/** Deprecated */
		version: FormControl<string | null | undefined>,

		/** View Unlock Requirement options for the event ticket. */
		viewUnlockRequirement: FormControl<EventTicketClassViewUnlockRequirement | null | undefined>,
	}
	export function CreateEventTicketClassFormGroup() {
		return new FormGroup<EventTicketClassFormProperties>({
			allowMultipleUsersPerObject: new FormControl<boolean | null | undefined>(undefined),
			confirmationCodeLabel: new FormControl<EventTicketClassConfirmationCodeLabel | null | undefined>(undefined),
			countryCode: new FormControl<string | null | undefined>(undefined),
			enableSmartTap: new FormControl<boolean | null | undefined>(undefined),
			eventId: new FormControl<string | null | undefined>(undefined),
			gateLabel: new FormControl<EventTicketClassGateLabel | null | undefined>(undefined),
			hexBackgroundColor: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			issuerName: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			multipleDevicesAndHoldersAllowedStatus: new FormControl<EventTicketClassMultipleDevicesAndHoldersAllowedStatus | null | undefined>(undefined),
			reviewStatus: new FormControl<EventTicketClassReviewStatus | null | undefined>(undefined),
			rowLabel: new FormControl<EventTicketClassRowLabel | null | undefined>(undefined),
			seatLabel: new FormControl<EventTicketClassSeatLabel | null | undefined>(undefined),
			sectionLabel: new FormControl<EventTicketClassSectionLabel | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			viewUnlockRequirement: new FormControl<EventTicketClassViewUnlockRequirement | null | undefined>(undefined),
		});

	}

	export enum EventTicketClassConfirmationCodeLabel { CONFIRMATION_CODE_LABEL_UNSPECIFIED = 'CONFIRMATION_CODE_LABEL_UNSPECIFIED', CONFIRMATION_CODE = 'CONFIRMATION_CODE', confirmationCode = 'confirmationCode', CONFIRMATION_NUMBER = 'CONFIRMATION_NUMBER', confirmationNumber = 'confirmationNumber', ORDER_NUMBER = 'ORDER_NUMBER', orderNumber = 'orderNumber', RESERVATION_NUMBER = 'RESERVATION_NUMBER', reservationNumber = 'reservationNumber' }

	export enum EventTicketClassGateLabel { GATE_LABEL_UNSPECIFIED = 'GATE_LABEL_UNSPECIFIED', GATE = 'GATE', gate = 'gate', DOOR = 'DOOR', door = 'door', ENTRANCE = 'ENTRANCE', entrance = 'entrance' }

	export interface ImageModuleData {

		/** The ID associated with an image module. This field is here to enable ease of management of image modules. */
		id?: string | null;

		/** Wrapping type for Google hosted images. Next ID: 7 */
		mainImage?: Image;
	}
	export interface ImageModuleDataFormProperties {

		/** The ID associated with an image module. This field is here to enable ease of management of image modules. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateImageModuleDataFormGroup() {
		return new FormGroup<ImageModuleDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InfoModuleData {

		/** A list of collections of labels and values. These will be displayed one after the other in a singular column. */
		labelValueRows?: Array<LabelValueRow>;
		showLastUpdateTime?: boolean | null;
	}
	export interface InfoModuleDataFormProperties {
		showLastUpdateTime: FormControl<boolean | null | undefined>,
	}
	export function CreateInfoModuleDataFormGroup() {
		return new FormGroup<InfoModuleDataFormProperties>({
			showLastUpdateTime: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface LabelValueRow {

		/** A list of labels and values. These will be displayed in a singular column, one after the other, not in multiple columns, despite the field name. */
		columns?: Array<LabelValue>;
	}
	export interface LabelValueRowFormProperties {
	}
	export function CreateLabelValueRowFormGroup() {
		return new FormGroup<LabelValueRowFormProperties>({
		});

	}


	/** A pair of text strings to be displayed in the details view. Note we no longer display LabelValue/LabelValueRow as a table, instead a list of items. */
	export interface LabelValue {

		/** The label for a specific row and column. Recommended maximum is 15 characters for a two-column layout and 30 characters for a one-column layout. */
		label?: string | null;
		localizedLabel?: LocalizedString;
		localizedValue?: LocalizedString;

		/** The value for a specific row and column. Recommended maximum is 15 characters for a two-column layout and 30 characters for a one-column layout. */
		value?: string | null;
	}

	/** A pair of text strings to be displayed in the details view. Note we no longer display LabelValue/LabelValueRow as a table, instead a list of items. */
	export interface LabelValueFormProperties {

		/** The label for a specific row and column. Recommended maximum is 15 characters for a two-column layout and 30 characters for a one-column layout. */
		label: FormControl<string | null | undefined>,

		/** The value for a specific row and column. Recommended maximum is 15 characters for a two-column layout and 30 characters for a one-column layout. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateLabelValueFormGroup() {
		return new FormGroup<LabelValueFormProperties>({
			label: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LinksModuleData {

		/** The list of URIs. */
		uris?: Array<Uri>;
	}
	export interface LinksModuleDataFormProperties {
	}
	export function CreateLinksModuleDataFormGroup() {
		return new FormGroup<LinksModuleDataFormProperties>({
		});

	}

	export interface LatLongPoint {

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#latLongPoint"`. */
		kind?: string | null;

		/** The latitude specified as any value in the range of -90.0 through +90.0, both inclusive. Values outside these bounds will be rejected. */
		latitude?: number | null;

		/** The longitude specified in the range -180.0 through +180.0, both inclusive. Values outside these bounds will be rejected. */
		longitude?: number | null;
	}
	export interface LatLongPointFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#latLongPoint"`. */
		kind: FormControl<string | null | undefined>,

		/** The latitude specified as any value in the range of -90.0 through +90.0, both inclusive. Values outside these bounds will be rejected. */
		latitude: FormControl<number | null | undefined>,

		/** The longitude specified in the range -180.0 through +180.0, both inclusive. Values outside these bounds will be rejected. */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateLatLongPointFormGroup() {
		return new FormGroup<LatLongPointFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum EventTicketClassMultipleDevicesAndHoldersAllowedStatus { STATUS_UNSPECIFIED = 'STATUS_UNSPECIFIED', MULTIPLE_HOLDERS = 'MULTIPLE_HOLDERS', ONE_USER_ALL_DEVICES = 'ONE_USER_ALL_DEVICES', ONE_USER_ONE_DEVICE = 'ONE_USER_ONE_DEVICE', multipleHolders = 'multipleHolders', oneUserAllDevices = 'oneUserAllDevices', oneUserOneDevice = 'oneUserOneDevice' }

	export interface Review {
		comments?: string | null;
	}
	export interface ReviewFormProperties {
		comments: FormControl<string | null | undefined>,
	}
	export function CreateReviewFormGroup() {
		return new FormGroup<ReviewFormProperties>({
			comments: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EventTicketClassReviewStatus { REVIEW_STATUS_UNSPECIFIED = 'REVIEW_STATUS_UNSPECIFIED', UNDER_REVIEW = 'UNDER_REVIEW', underReview = 'underReview', APPROVED = 'APPROVED', approved = 'approved', REJECTED = 'REJECTED', rejected = 'rejected', DRAFT = 'DRAFT', draft = 'draft' }

	export enum EventTicketClassRowLabel { ROW_LABEL_UNSPECIFIED = 'ROW_LABEL_UNSPECIFIED', ROW = 'ROW', row = 'row' }

	export enum EventTicketClassSeatLabel { SEAT_LABEL_UNSPECIFIED = 'SEAT_LABEL_UNSPECIFIED', SEAT = 'SEAT', seat = 'seat' }

	export enum EventTicketClassSectionLabel { SECTION_LABEL_UNSPECIFIED = 'SECTION_LABEL_UNSPECIFIED', SECTION = 'SECTION', section = 'section', THEATER = 'THEATER', theater = 'theater' }

	export interface SecurityAnimation {

		/** Type of animation. */
		animationType?: SecurityAnimationAnimationType | null;
	}
	export interface SecurityAnimationFormProperties {

		/** Type of animation. */
		animationType: FormControl<SecurityAnimationAnimationType | null | undefined>,
	}
	export function CreateSecurityAnimationFormGroup() {
		return new FormGroup<SecurityAnimationFormProperties>({
			animationType: new FormControl<SecurityAnimationAnimationType | null | undefined>(undefined),
		});

	}

	export enum SecurityAnimationAnimationType { ANIMATION_UNSPECIFIED = 'ANIMATION_UNSPECIFIED', FOIL_SHIMMER = 'FOIL_SHIMMER', foilShimmer = 'foilShimmer' }


	/** Data for Text module. All fields are optional. Header will be displayed if available, different types of bodies will be concatenated if they are defined. */
	export interface TextModuleData {

		/** The body of the Text Module, which is defined as an uninterrupted string. Recommended maximum length is 500 characters to ensure full string is displayed on smaller screens. */
		body?: string | null;

		/** The header of the Text Module. Recommended maximum length is 35 characters to ensure full string is displayed on smaller screens. */
		header?: string | null;

		/** The ID associated with a text module. This field is here to enable ease of management of text modules. */
		id?: string | null;
		localizedBody?: LocalizedString;
		localizedHeader?: LocalizedString;
	}

	/** Data for Text module. All fields are optional. Header will be displayed if available, different types of bodies will be concatenated if they are defined. */
	export interface TextModuleDataFormProperties {

		/** The body of the Text Module, which is defined as an uninterrupted string. Recommended maximum length is 500 characters to ensure full string is displayed on smaller screens. */
		body: FormControl<string | null | undefined>,

		/** The header of the Text Module. Recommended maximum length is 35 characters to ensure full string is displayed on smaller screens. */
		header: FormControl<string | null | undefined>,

		/** The ID associated with a text module. This field is here to enable ease of management of text modules. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateTextModuleDataFormGroup() {
		return new FormGroup<TextModuleDataFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			header: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EventVenue {
		address?: LocalizedString;

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#eventVenue"`. */
		kind?: string | null;
		name?: LocalizedString;
	}
	export interface EventVenueFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#eventVenue"`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateEventVenueFormGroup() {
		return new FormGroup<EventVenueFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EventTicketClassViewUnlockRequirement { VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED = 'VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED', UNLOCK_NOT_REQUIRED = 'UNLOCK_NOT_REQUIRED', UNLOCK_REQUIRED_TO_VIEW = 'UNLOCK_REQUIRED_TO_VIEW' }

	export interface EventTicketClassAddMessageResponse {
		resource?: EventTicketClass;
	}
	export interface EventTicketClassAddMessageResponseFormProperties {
	}
	export function CreateEventTicketClassAddMessageResponseFormGroup() {
		return new FormGroup<EventTicketClassAddMessageResponseFormProperties>({
		});

	}

	export interface EventTicketClassListResponse {
		pagination?: Pagination;

		/** Resources corresponding to the list request. */
		resources?: Array<EventTicketClass>;
	}
	export interface EventTicketClassListResponseFormProperties {
	}
	export function CreateEventTicketClassListResponseFormGroup() {
		return new FormGroup<EventTicketClassListResponseFormProperties>({
		});

	}

	export interface Pagination {

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#pagination"`. */
		kind?: string | null;

		/** Page token to send to fetch the next page. */
		nextPageToken?: string | null;

		/** Number of results returned in this page. */
		resultsPerPage?: number | null;
	}
	export interface PaginationFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#pagination"`. */
		kind: FormControl<string | null | undefined>,

		/** Page token to send to fetch the next page. */
		nextPageToken: FormControl<string | null | undefined>,

		/** Number of results returned in this page. */
		resultsPerPage: FormControl<number | null | undefined>,
	}
	export function CreatePaginationFormGroup() {
		return new FormGroup<PaginationFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			resultsPerPage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EventTicketObject {
		appLinkData?: AppLinkData;
		barcode?: Barcode;

		/** Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. */
		classId?: string | null;
		classReference?: EventTicketClass;

		/** Indicates if notifications should explicitly be suppressed. If this field is set to true, regardless of the `messages` field, expiration notifications to the user will be suppressed. By default, this field is set to false. Currently, this can only be set for offers. */
		disableExpirationNotification?: boolean | null;
		faceValue?: Money;
		groupingInfo?: GroupingInfo;

		/** Whether this object is currently linked to a single device. This field is set by the platform when a user saves the object, linking it to their device. Intended for use by select partners. Contact support for additional information. */
		hasLinkedDevice?: boolean | null;

		/** Indicates if the object has users. This field is set by the platform. */
		hasUsers?: boolean | null;

		/** Wrapping type for Google hosted images. Next ID: 7 */
		heroImage?: Image;

		/** The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`. */
		hexBackgroundColor?: string | null;

		/** Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. The unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
		id?: string | null;

		/** Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level. */
		imageModulesData?: Array<ImageModuleData>;
		infoModuleData?: InfoModuleData;

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#eventTicketObject"`. */
		kind?: string | null;

		/** A list of offer objects linked to this event ticket. The offer objects must already exist. Offer object IDs should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. */
		linkedOfferIds?: Array<string>;
		linksModuleData?: LinksModuleData;

		/** Note: This field is currently not supported to trigger geo notifications. */
		locations?: Array<LatLongPoint>;

		/** An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10. */
		messages?: Array<Message>;

		/** Container for any constraints that may be placed on passes. */
		passConstraints?: PassConstraints;
		reservationInfo?: EventReservationInfo;
		rotatingBarcode?: RotatingBarcode;
		seatInfo?: EventSeat;

		/** The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields `enableSmartTap` and `redemptionIssuers` must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported. */
		smartTapRedemptionValue?: string | null;

		/** Required. The state of the object. This field is used to determine how an object is displayed in the app. For example, an `inactive` object is moved to the "Expired passes" section. */
		state?: EventTicketObjectState | null;

		/** Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class. */
		textModulesData?: Array<TextModuleData>;

		/** Name of the ticket holder, if the ticket is assigned to a person. E.g. "John Doe" or "Jane Doe". */
		ticketHolderName?: string | null;

		/** The number of the ticket. This can be a unique identifier across all tickets in an issuer's system, all tickets for the event (e.g. XYZ1234512345), or all tickets in the order (1, 2, 3, etc.). */
		ticketNumber?: string | null;
		ticketType?: LocalizedString;
		validTimeInterval?: TimeInterval;

		/** Deprecated */
		version?: string | null;
	}
	export interface EventTicketObjectFormProperties {

		/** Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. */
		classId: FormControl<string | null | undefined>,

		/** Indicates if notifications should explicitly be suppressed. If this field is set to true, regardless of the `messages` field, expiration notifications to the user will be suppressed. By default, this field is set to false. Currently, this can only be set for offers. */
		disableExpirationNotification: FormControl<boolean | null | undefined>,

		/** Whether this object is currently linked to a single device. This field is set by the platform when a user saves the object, linking it to their device. Intended for use by select partners. Contact support for additional information. */
		hasLinkedDevice: FormControl<boolean | null | undefined>,

		/** Indicates if the object has users. This field is set by the platform. */
		hasUsers: FormControl<boolean | null | undefined>,

		/** The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`. */
		hexBackgroundColor: FormControl<string | null | undefined>,

		/** Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. The unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#eventTicketObject"`. */
		kind: FormControl<string | null | undefined>,

		/** The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields `enableSmartTap` and `redemptionIssuers` must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported. */
		smartTapRedemptionValue: FormControl<string | null | undefined>,

		/** Required. The state of the object. This field is used to determine how an object is displayed in the app. For example, an `inactive` object is moved to the "Expired passes" section. */
		state: FormControl<EventTicketObjectState | null | undefined>,

		/** Name of the ticket holder, if the ticket is assigned to a person. E.g. "John Doe" or "Jane Doe". */
		ticketHolderName: FormControl<string | null | undefined>,

		/** The number of the ticket. This can be a unique identifier across all tickets in an issuer's system, all tickets for the event (e.g. XYZ1234512345), or all tickets in the order (1, 2, 3, etc.). */
		ticketNumber: FormControl<string | null | undefined>,

		/** Deprecated */
		version: FormControl<string | null | undefined>,
	}
	export function CreateEventTicketObjectFormGroup() {
		return new FormGroup<EventTicketObjectFormProperties>({
			classId: new FormControl<string | null | undefined>(undefined),
			disableExpirationNotification: new FormControl<boolean | null | undefined>(undefined),
			hasLinkedDevice: new FormControl<boolean | null | undefined>(undefined),
			hasUsers: new FormControl<boolean | null | undefined>(undefined),
			hexBackgroundColor: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			smartTapRedemptionValue: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<EventTicketObjectState | null | undefined>(undefined),
			ticketHolderName: new FormControl<string | null | undefined>(undefined),
			ticketNumber: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Money {

		/** The currency code, such as "USD" or "EUR." */
		currencyCode?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#money"`. */
		kind?: string | null;

		/** The unit of money amount in micros. For example, $1 USD would be represented as 1000000 micros. */
		micros?: string | null;
	}
	export interface MoneyFormProperties {

		/** The currency code, such as "USD" or "EUR." */
		currencyCode: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#money"`. */
		kind: FormControl<string | null | undefined>,

		/** The unit of money amount in micros. For example, $1 USD would be represented as 1000000 micros. */
		micros: FormControl<string | null | undefined>,
	}
	export function CreateMoneyFormGroup() {
		return new FormGroup<MoneyFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			micros: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GroupingInfo {

		/** Optional grouping ID for grouping the passes with the same ID visually together. Grouping with different types of passes is allowed. */
		groupingId?: string | null;

		/** Optional index for sorting the passes when they are grouped with other passes. Passes with lower sort index are shown before passes with higher sort index. If unspecified, the value is assumed to be INT_MAX. For two passes with the same sort index, the sorting behavior is undefined. */
		sortIndex?: number | null;
	}
	export interface GroupingInfoFormProperties {

		/** Optional grouping ID for grouping the passes with the same ID visually together. Grouping with different types of passes is allowed. */
		groupingId: FormControl<string | null | undefined>,

		/** Optional index for sorting the passes when they are grouped with other passes. Passes with lower sort index are shown before passes with higher sort index. If unspecified, the value is assumed to be INT_MAX. For two passes with the same sort index, the sorting behavior is undefined. */
		sortIndex: FormControl<number | null | undefined>,
	}
	export function CreateGroupingInfoFormGroup() {
		return new FormGroup<GroupingInfoFormProperties>({
			groupingId: new FormControl<string | null | undefined>(undefined),
			sortIndex: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Container for any constraints that may be placed on passes. */
	export interface PassConstraints {

		/** The NFC constraints for the pass. */
		nfcConstraint?: Array<string>;

		/** The screenshot eligibility for the pass. */
		screenshotEligibility?: PassConstraintsScreenshotEligibility | null;
	}

	/** Container for any constraints that may be placed on passes. */
	export interface PassConstraintsFormProperties {

		/** The screenshot eligibility for the pass. */
		screenshotEligibility: FormControl<PassConstraintsScreenshotEligibility | null | undefined>,
	}
	export function CreatePassConstraintsFormGroup() {
		return new FormGroup<PassConstraintsFormProperties>({
			screenshotEligibility: new FormControl<PassConstraintsScreenshotEligibility | null | undefined>(undefined),
		});

	}

	export enum PassConstraintsScreenshotEligibility { SCREENSHOT_ELIGIBILITY_UNSPECIFIED = 'SCREENSHOT_ELIGIBILITY_UNSPECIFIED', ELIGIBLE = 'ELIGIBLE', INELIGIBLE = 'INELIGIBLE' }

	export interface RotatingBarcode {

		/** An optional text that will override the default text that shows under the barcode. This field is intended for a human readable equivalent of the barcode value, used when the barcode cannot be scanned. */
		alternateText?: string | null;

		/** A payload containing many barcode values and start date/time. */
		initialRotatingBarcodeValues?: RotatingBarcodeValues;

		/** The render encoding for the barcode. When specified, barcode is rendered in the given encoding. Otherwise best known encoding is chosen by Google. */
		renderEncoding?: BarcodeRenderEncoding | null;
		showCodeText?: LocalizedString;

		/** Configuration for the time-based OTP substitutions. See https://tools.ietf.org/html/rfc6238 */
		totpDetails?: RotatingBarcodeTotpDetails;

		/** The type of this barcode. */
		type?: BarcodeType | null;

		/** String encoded barcode value. This string supports the following substitutions: * {totp_value_n}: Replaced with the TOTP value (see TotpDetails.parameters). * {totp_timestamp_millis}: Replaced with the timestamp (millis since epoch) at which the barcode was generated. * {totp_timestamp_seconds}: Replaced with the timestamp (seconds since epoch) at which the barcode was generated. */
		valuePattern?: string | null;
	}
	export interface RotatingBarcodeFormProperties {

		/** An optional text that will override the default text that shows under the barcode. This field is intended for a human readable equivalent of the barcode value, used when the barcode cannot be scanned. */
		alternateText: FormControl<string | null | undefined>,

		/** The render encoding for the barcode. When specified, barcode is rendered in the given encoding. Otherwise best known encoding is chosen by Google. */
		renderEncoding: FormControl<BarcodeRenderEncoding | null | undefined>,

		/** The type of this barcode. */
		type: FormControl<BarcodeType | null | undefined>,

		/** String encoded barcode value. This string supports the following substitutions: * {totp_value_n}: Replaced with the TOTP value (see TotpDetails.parameters). * {totp_timestamp_millis}: Replaced with the timestamp (millis since epoch) at which the barcode was generated. * {totp_timestamp_seconds}: Replaced with the timestamp (seconds since epoch) at which the barcode was generated. */
		valuePattern: FormControl<string | null | undefined>,
	}
	export function CreateRotatingBarcodeFormGroup() {
		return new FormGroup<RotatingBarcodeFormProperties>({
			alternateText: new FormControl<string | null | undefined>(undefined),
			renderEncoding: new FormControl<BarcodeRenderEncoding | null | undefined>(undefined),
			type: new FormControl<BarcodeType | null | undefined>(undefined),
			valuePattern: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A payload containing many barcode values and start date/time. */
	export interface RotatingBarcodeValues {

		/** Required. The amount of time each barcode is valid for. */
		periodMillis?: string | null;

		/** Required. The date/time the first barcode is valid from. Barcodes will be rotated through using period_millis defined on the object's RotatingBarcodeValueInfo. This is an ISO 8601 extended format date/time, with an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. */
		startDateTime?: string | null;

		/** Required. The values to encode in the barcode. At least one value is required. */
		values?: Array<string>;
	}

	/** A payload containing many barcode values and start date/time. */
	export interface RotatingBarcodeValuesFormProperties {

		/** Required. The amount of time each barcode is valid for. */
		periodMillis: FormControl<string | null | undefined>,

		/** Required. The date/time the first barcode is valid from. Barcodes will be rotated through using period_millis defined on the object's RotatingBarcodeValueInfo. This is an ISO 8601 extended format date/time, with an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. */
		startDateTime: FormControl<string | null | undefined>,
	}
	export function CreateRotatingBarcodeValuesFormGroup() {
		return new FormGroup<RotatingBarcodeValuesFormProperties>({
			periodMillis: new FormControl<string | null | undefined>(undefined),
			startDateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for the time-based OTP substitutions. See https://tools.ietf.org/html/rfc6238 */
	export interface RotatingBarcodeTotpDetails {

		/** The TOTP algorithm used to generate the OTP. */
		algorithm?: RotatingBarcodeTotpDetailsAlgorithm | null;

		/** The TOTP parameters for each of the {totp_value_*} substitutions. The TotpParameters at index n is used for the {totp_value_n} substitution. */
		parameters?: Array<RotatingBarcodeTotpDetailsTotpParameters>;

		/** The time interval used for the TOTP value generation, in milliseconds. */
		periodMillis?: string | null;
	}

	/** Configuration for the time-based OTP substitutions. See https://tools.ietf.org/html/rfc6238 */
	export interface RotatingBarcodeTotpDetailsFormProperties {

		/** The TOTP algorithm used to generate the OTP. */
		algorithm: FormControl<RotatingBarcodeTotpDetailsAlgorithm | null | undefined>,

		/** The time interval used for the TOTP value generation, in milliseconds. */
		periodMillis: FormControl<string | null | undefined>,
	}
	export function CreateRotatingBarcodeTotpDetailsFormGroup() {
		return new FormGroup<RotatingBarcodeTotpDetailsFormProperties>({
			algorithm: new FormControl<RotatingBarcodeTotpDetailsAlgorithm | null | undefined>(undefined),
			periodMillis: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RotatingBarcodeTotpDetailsAlgorithm { TOTP_ALGORITHM_UNSPECIFIED = 'TOTP_ALGORITHM_UNSPECIFIED', TOTP_SHA1 = 'TOTP_SHA1' }


	/** Configuration for the key and value length. See https://www.rfc-editor.org/rfc/rfc4226#section-5.3 */
	export interface RotatingBarcodeTotpDetailsTotpParameters {

		/** The secret key used for the TOTP value generation, encoded as a Base16 string. */
		key?: string | null;

		/** The length of the TOTP value in decimal digits. */
		valueLength?: number | null;
	}

	/** Configuration for the key and value length. See https://www.rfc-editor.org/rfc/rfc4226#section-5.3 */
	export interface RotatingBarcodeTotpDetailsTotpParametersFormProperties {

		/** The secret key used for the TOTP value generation, encoded as a Base16 string. */
		key: FormControl<string | null | undefined>,

		/** The length of the TOTP value in decimal digits. */
		valueLength: FormControl<number | null | undefined>,
	}
	export function CreateRotatingBarcodeTotpDetailsTotpParametersFormGroup() {
		return new FormGroup<RotatingBarcodeTotpDetailsTotpParametersFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			valueLength: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum EventTicketObjectState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', ACTIVE = 'ACTIVE', active = 'active', COMPLETED = 'COMPLETED', completed = 'completed', EXPIRED = 'EXPIRED', expired = 'expired', INACTIVE = 'INACTIVE', inactive = 'inactive' }

	export interface EventTicketObjectAddMessageResponse {
		resource?: EventTicketObject;
	}
	export interface EventTicketObjectAddMessageResponseFormProperties {
	}
	export function CreateEventTicketObjectAddMessageResponseFormGroup() {
		return new FormGroup<EventTicketObjectAddMessageResponseFormProperties>({
		});

	}

	export interface EventTicketObjectListResponse {
		pagination?: Pagination;

		/** Resources corresponding to the list request. */
		resources?: Array<EventTicketObject>;
	}
	export interface EventTicketObjectListResponseFormProperties {
	}
	export function CreateEventTicketObjectListResponseFormGroup() {
		return new FormGroup<EventTicketObjectListResponseFormProperties>({
		});

	}


	/** Indicates that the issuer would like Google Wallet to send expiry notifications 2 days prior to the card expiration. */
	export interface ExpiryNotification {

		/** Indicates if the object needs to have expiry notification enabled. */
		enableNotification?: boolean | null;
	}

	/** Indicates that the issuer would like Google Wallet to send expiry notifications 2 days prior to the card expiration. */
	export interface ExpiryNotificationFormProperties {

		/** Indicates if the object needs to have expiry notification enabled. */
		enableNotification: FormControl<boolean | null | undefined>,
	}
	export function CreateExpiryNotificationFormGroup() {
		return new FormGroup<ExpiryNotificationFormProperties>({
			enableNotification: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface FlightCarrier {

		/** Wrapping type for Google hosted images. Next ID: 7 */
		airlineAllianceLogo?: Image;

		/** Wrapping type for Google hosted images. Next ID: 7 */
		airlineLogo?: Image;
		airlineName?: LocalizedString;

		/** Two character IATA airline code of the marketing carrier (as opposed to operating carrier). Exactly one of this or `carrierIcaoCode` needs to be provided for `carrier` and `operatingCarrier`. eg: "LX" for Swiss Air */
		carrierIataCode?: string | null;

		/** Three character ICAO airline code of the marketing carrier (as opposed to operating carrier). Exactly one of this or `carrierIataCode` needs to be provided for `carrier` and `operatingCarrier`. eg: "EZY" for Easy Jet */
		carrierIcaoCode?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#flightCarrier"`. */
		kind?: string | null;

		/** Wrapping type for Google hosted images. Next ID: 7 */
		wideAirlineLogo?: Image;
	}
	export interface FlightCarrierFormProperties {

		/** Two character IATA airline code of the marketing carrier (as opposed to operating carrier). Exactly one of this or `carrierIcaoCode` needs to be provided for `carrier` and `operatingCarrier`. eg: "LX" for Swiss Air */
		carrierIataCode: FormControl<string | null | undefined>,

		/** Three character ICAO airline code of the marketing carrier (as opposed to operating carrier). Exactly one of this or `carrierIataCode` needs to be provided for `carrier` and `operatingCarrier`. eg: "EZY" for Easy Jet */
		carrierIcaoCode: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#flightCarrier"`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateFlightCarrierFormGroup() {
		return new FormGroup<FlightCarrierFormProperties>({
			carrierIataCode: new FormControl<string | null | undefined>(undefined),
			carrierIcaoCode: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FlightClass {

		/** Deprecated. Use `multipleDevicesAndHoldersAllowedStatus` instead. */
		allowMultipleUsersPerObject?: boolean | null;
		boardingAndSeatingPolicy?: BoardingAndSeatingPolicy;
		callbackOptions?: CallbackOptions;
		classTemplateInfo?: ClassTemplateInfo;

		/** Country code used to display the card's country (when the user is not in that country), as well as to display localized content when content is not available in the user's locale. */
		countryCode?: string | null;
		destination?: AirportInfo;

		/** Identifies whether this class supports Smart Tap. The `redemptionIssuers` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap. */
		enableSmartTap?: boolean | null;
		flightHeader?: FlightHeader;

		/** Status of this flight. If unset, Google will compute status based on data from other sources, such as FlightStats, etc. Note: Google-computed status will not be returned in API responses. */
		flightStatus?: FlightClassFlightStatus | null;

		/** Wrapping type for Google hosted images. Next ID: 7 */
		heroImage?: Image;

		/** The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`. */
		hexBackgroundColor?: string | null;
		homepageUri?: Uri;

		/** Required. The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
		id?: string | null;

		/** Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level. */
		imageModulesData?: Array<ImageModuleData>;
		infoModuleData?: InfoModuleData;

		/** Required. The issuer name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens. */
		issuerName?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#flightClass"`. */
		kind?: string | null;

		/** If this field is present, boarding passes served to a user's device will always be in this language. Represents the BCP 47 language tag. Example values are "en-US", "en-GB", "de", or "de-AT". */
		languageOverride?: string | null;
		linksModuleData?: LinksModuleData;

		/** The boarding time as it would be printed on the boarding pass. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on departure airport. If this is not set, Google will set it based on data from other sources. */
		localBoardingDateTime?: string | null;

		/** The estimated time the aircraft plans to reach the destination gate (not the runway) or the actual time it reached the gate. This field should be set if at least one of the below is true: - It differs from the scheduled time. Google will use it to calculate the delay. - The aircraft already arrived at the gate. Google will use it to inform the user that the flight has arrived at the gate. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on arrival airport. If this is not set, Google will set it based on data from other sources. */
		localEstimatedOrActualArrivalDateTime?: string | null;

		/** The estimated time the aircraft plans to pull from the gate or the actual time the aircraft already pulled from the gate. Note: This is not the runway time. This field should be set if at least one of the below is true: - It differs from the scheduled time. Google will use it to calculate the delay. - The aircraft already pulled from the gate. Google will use it to inform the user when the flight actually departed. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on departure airport. If this is not set, Google will set it based on data from other sources. */
		localEstimatedOrActualDepartureDateTime?: string | null;

		/** The gate closing time as it would be printed on the boarding pass. Do not set this field if you do not want to print it in the boarding pass. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on departure airport. */
		localGateClosingDateTime?: string | null;

		/** The scheduled time the aircraft plans to reach the destination gate (not the runway). Note: This field should not change too close to the flight time. For updates to departure times (delays, etc), please set `localEstimatedOrActualArrivalDateTime`. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on arrival airport. If this is not set, Google will set it based on data from other sources. */
		localScheduledArrivalDateTime?: string | null;

		/** Required. The scheduled date and time when the aircraft is expected to depart the gate (not the runway) Note: This field should not change too close to the departure time. For updates to departure times (delays, etc), please set `localEstimatedOrActualDepartureDateTime`. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on departure airport. */
		localScheduledDepartureDateTime?: string | null;
		localizedIssuerName?: LocalizedString;

		/** Note: This field is currently not supported to trigger geo notifications. */
		locations?: Array<LatLongPoint>;

		/** An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10. */
		messages?: Array<Message>;

		/** Identifies whether multiple users and devices will save the same object referencing this class. */
		multipleDevicesAndHoldersAllowedStatus?: EventTicketClassMultipleDevicesAndHoldersAllowedStatus | null;
		origin?: AirportInfo;

		/** Identifies which redemption issuers can redeem the pass over Smart Tap. Redemption issuers are identified by their issuer ID. Redemption issuers must have at least one Smart Tap key configured. The `enableSmartTap` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap. */
		redemptionIssuers?: Array<string>;
		review?: Review;

		/** Required. The status of the class. This field can be set to `draft` or `underReview` using the insert, patch, or update API calls. Once the review state is changed from `draft` it may not be changed back to `draft`. You should keep this field to `draft` when the class is under development. A `draft` class cannot be used to create any object. You should set this field to `underReview` when you believe the class is ready for use. The platform will automatically set this field to `approved` and it can be immediately used to create or migrate objects. When updating an already `approved` class you should keep setting this field to `underReview`. */
		reviewStatus?: EventTicketClassReviewStatus | null;
		securityAnimation?: SecurityAnimation;

		/** Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class. */
		textModulesData?: Array<TextModuleData>;

		/** Deprecated */
		version?: string | null;

		/** View Unlock Requirement options for the boarding pass. */
		viewUnlockRequirement?: EventTicketClassViewUnlockRequirement | null;

		/** Wrapping type for Google hosted images. Next ID: 7 */
		wordMark?: Image;
	}
	export interface FlightClassFormProperties {

		/** Deprecated. Use `multipleDevicesAndHoldersAllowedStatus` instead. */
		allowMultipleUsersPerObject: FormControl<boolean | null | undefined>,

		/** Country code used to display the card's country (when the user is not in that country), as well as to display localized content when content is not available in the user's locale. */
		countryCode: FormControl<string | null | undefined>,

		/** Identifies whether this class supports Smart Tap. The `redemptionIssuers` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap. */
		enableSmartTap: FormControl<boolean | null | undefined>,

		/** Status of this flight. If unset, Google will compute status based on data from other sources, such as FlightStats, etc. Note: Google-computed status will not be returned in API responses. */
		flightStatus: FormControl<FlightClassFlightStatus | null | undefined>,

		/** The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`. */
		hexBackgroundColor: FormControl<string | null | undefined>,

		/** Required. The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
		id: FormControl<string | null | undefined>,

		/** Required. The issuer name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens. */
		issuerName: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#flightClass"`. */
		kind: FormControl<string | null | undefined>,

		/** If this field is present, boarding passes served to a user's device will always be in this language. Represents the BCP 47 language tag. Example values are "en-US", "en-GB", "de", or "de-AT". */
		languageOverride: FormControl<string | null | undefined>,

		/** The boarding time as it would be printed on the boarding pass. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on departure airport. If this is not set, Google will set it based on data from other sources. */
		localBoardingDateTime: FormControl<string | null | undefined>,

		/** The estimated time the aircraft plans to reach the destination gate (not the runway) or the actual time it reached the gate. This field should be set if at least one of the below is true: - It differs from the scheduled time. Google will use it to calculate the delay. - The aircraft already arrived at the gate. Google will use it to inform the user that the flight has arrived at the gate. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on arrival airport. If this is not set, Google will set it based on data from other sources. */
		localEstimatedOrActualArrivalDateTime: FormControl<string | null | undefined>,

		/** The estimated time the aircraft plans to pull from the gate or the actual time the aircraft already pulled from the gate. Note: This is not the runway time. This field should be set if at least one of the below is true: - It differs from the scheduled time. Google will use it to calculate the delay. - The aircraft already pulled from the gate. Google will use it to inform the user when the flight actually departed. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on departure airport. If this is not set, Google will set it based on data from other sources. */
		localEstimatedOrActualDepartureDateTime: FormControl<string | null | undefined>,

		/** The gate closing time as it would be printed on the boarding pass. Do not set this field if you do not want to print it in the boarding pass. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on departure airport. */
		localGateClosingDateTime: FormControl<string | null | undefined>,

		/** The scheduled time the aircraft plans to reach the destination gate (not the runway). Note: This field should not change too close to the flight time. For updates to departure times (delays, etc), please set `localEstimatedOrActualArrivalDateTime`. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on arrival airport. If this is not set, Google will set it based on data from other sources. */
		localScheduledArrivalDateTime: FormControl<string | null | undefined>,

		/** Required. The scheduled date and time when the aircraft is expected to depart the gate (not the runway) Note: This field should not change too close to the departure time. For updates to departure times (delays, etc), please set `localEstimatedOrActualDepartureDateTime`. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on departure airport. */
		localScheduledDepartureDateTime: FormControl<string | null | undefined>,

		/** Identifies whether multiple users and devices will save the same object referencing this class. */
		multipleDevicesAndHoldersAllowedStatus: FormControl<EventTicketClassMultipleDevicesAndHoldersAllowedStatus | null | undefined>,

		/** Required. The status of the class. This field can be set to `draft` or `underReview` using the insert, patch, or update API calls. Once the review state is changed from `draft` it may not be changed back to `draft`. You should keep this field to `draft` when the class is under development. A `draft` class cannot be used to create any object. You should set this field to `underReview` when you believe the class is ready for use. The platform will automatically set this field to `approved` and it can be immediately used to create or migrate objects. When updating an already `approved` class you should keep setting this field to `underReview`. */
		reviewStatus: FormControl<EventTicketClassReviewStatus | null | undefined>,

		/** Deprecated */
		version: FormControl<string | null | undefined>,

		/** View Unlock Requirement options for the boarding pass. */
		viewUnlockRequirement: FormControl<EventTicketClassViewUnlockRequirement | null | undefined>,
	}
	export function CreateFlightClassFormGroup() {
		return new FormGroup<FlightClassFormProperties>({
			allowMultipleUsersPerObject: new FormControl<boolean | null | undefined>(undefined),
			countryCode: new FormControl<string | null | undefined>(undefined),
			enableSmartTap: new FormControl<boolean | null | undefined>(undefined),
			flightStatus: new FormControl<FlightClassFlightStatus | null | undefined>(undefined),
			hexBackgroundColor: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			issuerName: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			languageOverride: new FormControl<string | null | undefined>(undefined),
			localBoardingDateTime: new FormControl<string | null | undefined>(undefined),
			localEstimatedOrActualArrivalDateTime: new FormControl<string | null | undefined>(undefined),
			localEstimatedOrActualDepartureDateTime: new FormControl<string | null | undefined>(undefined),
			localGateClosingDateTime: new FormControl<string | null | undefined>(undefined),
			localScheduledArrivalDateTime: new FormControl<string | null | undefined>(undefined),
			localScheduledDepartureDateTime: new FormControl<string | null | undefined>(undefined),
			multipleDevicesAndHoldersAllowedStatus: new FormControl<EventTicketClassMultipleDevicesAndHoldersAllowedStatus | null | undefined>(undefined),
			reviewStatus: new FormControl<EventTicketClassReviewStatus | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			viewUnlockRequirement: new FormControl<EventTicketClassViewUnlockRequirement | null | undefined>(undefined),
		});

	}

	export interface FlightHeader {
		carrier?: FlightCarrier;

		/** The flight number without IATA carrier code. This field should contain only digits. This is a required property of `flightHeader`. eg: "123" */
		flightNumber?: string | null;

		/** Override value to use for flight number. The default value used for display purposes is carrier + flight_number. If a different value needs to be shown to passengers, use this field to override the default behavior. eg: "XX1234 / YY576" */
		flightNumberDisplayOverride?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#flightHeader"`. */
		kind?: string | null;
		operatingCarrier?: FlightCarrier;

		/** The flight number used by the operating carrier without IATA carrier code. This field should contain only digits. eg: "234" */
		operatingFlightNumber?: string | null;
	}
	export interface FlightHeaderFormProperties {

		/** The flight number without IATA carrier code. This field should contain only digits. This is a required property of `flightHeader`. eg: "123" */
		flightNumber: FormControl<string | null | undefined>,

		/** Override value to use for flight number. The default value used for display purposes is carrier + flight_number. If a different value needs to be shown to passengers, use this field to override the default behavior. eg: "XX1234 / YY576" */
		flightNumberDisplayOverride: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#flightHeader"`. */
		kind: FormControl<string | null | undefined>,

		/** The flight number used by the operating carrier without IATA carrier code. This field should contain only digits. eg: "234" */
		operatingFlightNumber: FormControl<string | null | undefined>,
	}
	export function CreateFlightHeaderFormGroup() {
		return new FormGroup<FlightHeaderFormProperties>({
			flightNumber: new FormControl<string | null | undefined>(undefined),
			flightNumberDisplayOverride: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			operatingFlightNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FlightClassFlightStatus { FLIGHT_STATUS_UNSPECIFIED = 'FLIGHT_STATUS_UNSPECIFIED', SCHEDULED = 'SCHEDULED', scheduled = 'scheduled', ACTIVE = 'ACTIVE', active = 'active', LANDED = 'LANDED', landed = 'landed', CANCELLED = 'CANCELLED', cancelled = 'cancelled', REDIRECTED = 'REDIRECTED', redirected = 'redirected', DIVERTED = 'DIVERTED', diverted = 'diverted' }

	export interface FlightClassAddMessageResponse {
		resource?: FlightClass;
	}
	export interface FlightClassAddMessageResponseFormProperties {
	}
	export function CreateFlightClassAddMessageResponseFormGroup() {
		return new FormGroup<FlightClassAddMessageResponseFormProperties>({
		});

	}

	export interface FlightClassListResponse {
		pagination?: Pagination;

		/** Resources corresponding to the list request. */
		resources?: Array<FlightClass>;
	}
	export interface FlightClassListResponseFormProperties {
	}
	export function CreateFlightClassListResponseFormGroup() {
		return new FormGroup<FlightClassListResponseFormProperties>({
		});

	}

	export interface FlightObject {
		appLinkData?: AppLinkData;
		barcode?: Barcode;
		boardingAndSeatingInfo?: BoardingAndSeatingInfo;

		/** Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. */
		classId?: string | null;
		classReference?: FlightClass;

		/** Indicates if notifications should explicitly be suppressed. If this field is set to true, regardless of the `messages` field, expiration notifications to the user will be suppressed. By default, this field is set to false. Currently, this can only be set for Flights. */
		disableExpirationNotification?: boolean | null;
		groupingInfo?: GroupingInfo;

		/** Whether this object is currently linked to a single device. This field is set by the platform when a user saves the object, linking it to their device. Intended for use by select partners. Contact support for additional information. */
		hasLinkedDevice?: boolean | null;

		/** Indicates if the object has users. This field is set by the platform. */
		hasUsers?: boolean | null;

		/** Wrapping type for Google hosted images. Next ID: 7 */
		heroImage?: Image;

		/** The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`. */
		hexBackgroundColor?: string | null;

		/** Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. The unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
		id?: string | null;

		/** Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level. */
		imageModulesData?: Array<ImageModuleData>;
		infoModuleData?: InfoModuleData;

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#flightObject"`. */
		kind?: string | null;
		linksModuleData?: LinksModuleData;

		/** Note: This field is currently not supported to trigger geo notifications. */
		locations?: Array<LatLongPoint>;

		/** An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10. */
		messages?: Array<Message>;

		/** Container for any constraints that may be placed on passes. */
		passConstraints?: PassConstraints;

		/** Required. Passenger name as it would appear on the boarding pass. eg: "Dave M Gahan" or "Gahan/Dave" or "GAHAN/DAVEM" */
		passengerName?: string | null;
		reservationInfo?: ReservationInfo;
		rotatingBarcode?: RotatingBarcode;

		/** Wrapping type for Google hosted images. Next ID: 7 */
		securityProgramLogo?: Image;

		/** The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields `enableSmartTap` and `redemptionIssuers` must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported. */
		smartTapRedemptionValue?: string | null;

		/** Required. The state of the object. This field is used to determine how an object is displayed in the app. For example, an `inactive` object is moved to the "Expired passes" section. */
		state?: EventTicketObjectState | null;

		/** Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class. */
		textModulesData?: Array<TextModuleData>;
		validTimeInterval?: TimeInterval;

		/** Deprecated */
		version?: string | null;
	}
	export interface FlightObjectFormProperties {

		/** Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. */
		classId: FormControl<string | null | undefined>,

		/** Indicates if notifications should explicitly be suppressed. If this field is set to true, regardless of the `messages` field, expiration notifications to the user will be suppressed. By default, this field is set to false. Currently, this can only be set for Flights. */
		disableExpirationNotification: FormControl<boolean | null | undefined>,

		/** Whether this object is currently linked to a single device. This field is set by the platform when a user saves the object, linking it to their device. Intended for use by select partners. Contact support for additional information. */
		hasLinkedDevice: FormControl<boolean | null | undefined>,

		/** Indicates if the object has users. This field is set by the platform. */
		hasUsers: FormControl<boolean | null | undefined>,

		/** The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`. */
		hexBackgroundColor: FormControl<string | null | undefined>,

		/** Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. The unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#flightObject"`. */
		kind: FormControl<string | null | undefined>,

		/** Required. Passenger name as it would appear on the boarding pass. eg: "Dave M Gahan" or "Gahan/Dave" or "GAHAN/DAVEM" */
		passengerName: FormControl<string | null | undefined>,

		/** The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields `enableSmartTap` and `redemptionIssuers` must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported. */
		smartTapRedemptionValue: FormControl<string | null | undefined>,

		/** Required. The state of the object. This field is used to determine how an object is displayed in the app. For example, an `inactive` object is moved to the "Expired passes" section. */
		state: FormControl<EventTicketObjectState | null | undefined>,

		/** Deprecated */
		version: FormControl<string | null | undefined>,
	}
	export function CreateFlightObjectFormGroup() {
		return new FormGroup<FlightObjectFormProperties>({
			classId: new FormControl<string | null | undefined>(undefined),
			disableExpirationNotification: new FormControl<boolean | null | undefined>(undefined),
			hasLinkedDevice: new FormControl<boolean | null | undefined>(undefined),
			hasUsers: new FormControl<boolean | null | undefined>(undefined),
			hexBackgroundColor: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			passengerName: new FormControl<string | null | undefined>(undefined),
			smartTapRedemptionValue: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<EventTicketObjectState | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReservationInfo {

		/** Confirmation code needed to check into this flight. This is the number that the passenger would enter into a kiosk at the airport to look up the flight and print a boarding pass. */
		confirmationCode?: string | null;

		/** E-ticket number. */
		eticketNumber?: string | null;
		frequentFlyerInfo?: FrequentFlyerInfo;

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#reservationInfo"`. */
		kind?: string | null;
	}
	export interface ReservationInfoFormProperties {

		/** Confirmation code needed to check into this flight. This is the number that the passenger would enter into a kiosk at the airport to look up the flight and print a boarding pass. */
		confirmationCode: FormControl<string | null | undefined>,

		/** E-ticket number. */
		eticketNumber: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#reservationInfo"`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateReservationInfoFormGroup() {
		return new FormGroup<ReservationInfoFormProperties>({
			confirmationCode: new FormControl<string | null | undefined>(undefined),
			eticketNumber: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FrequentFlyerInfo {

		/** Frequent flyer number. Required for each nested object of kind `walletobjects#frequentFlyerInfo`. */
		frequentFlyerNumber?: string | null;
		frequentFlyerProgramName?: LocalizedString;

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#frequentFlyerInfo"`. */
		kind?: string | null;
	}
	export interface FrequentFlyerInfoFormProperties {

		/** Frequent flyer number. Required for each nested object of kind `walletobjects#frequentFlyerInfo`. */
		frequentFlyerNumber: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#frequentFlyerInfo"`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateFrequentFlyerInfoFormGroup() {
		return new FormGroup<FrequentFlyerInfoFormProperties>({
			frequentFlyerNumber: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FlightObjectAddMessageResponse {
		resource?: FlightObject;
	}
	export interface FlightObjectAddMessageResponseFormProperties {
	}
	export function CreateFlightObjectAddMessageResponseFormGroup() {
		return new FormGroup<FlightObjectAddMessageResponseFormProperties>({
		});

	}

	export interface FlightObjectListResponse {
		pagination?: Pagination;

		/** Resources corresponding to the list request. */
		resources?: Array<FlightObject>;
	}
	export interface FlightObjectListResponseFormProperties {
	}
	export function CreateFlightObjectListResponseFormGroup() {
		return new FormGroup<FlightObjectListResponseFormProperties>({
		});

	}


	/** Generic Class */
	export interface GenericClass {
		callbackOptions?: CallbackOptions;
		classTemplateInfo?: ClassTemplateInfo;

		/** Available only to Smart Tap enabled partners. Contact support for additional guidance. */
		enableSmartTap?: boolean | null;

		/** Required. The unique identifier for the class. This ID must be unique across all from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`. */
		id?: string | null;

		/** Image module data. If `imageModulesData` is also defined on the object, both will be displayed. Only one of the image from class and one from object level will be rendered when both set. */
		imageModulesData?: Array<ImageModuleData>;
		linksModuleData?: LinksModuleData;

		/** Identifies whether multiple users and devices will save the same object referencing this class. */
		multipleDevicesAndHoldersAllowedStatus?: EventTicketClassMultipleDevicesAndHoldersAllowedStatus | null;

		/** Identifies which redemption issuers can redeem the pass over Smart Tap. Redemption issuers are identified by their issuer ID. Redemption issuers must have at least one Smart Tap key configured. The `enableSmartTap` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap. */
		redemptionIssuers?: Array<string>;
		securityAnimation?: SecurityAnimation;

		/** Text module data. If `textModulesData` is also defined on the object, both will be displayed. The maximum number of these fields displayed is 10 from class and 10 from object. */
		textModulesData?: Array<TextModuleData>;

		/** View Unlock Requirement options for the generic pass. */
		viewUnlockRequirement?: EventTicketClassViewUnlockRequirement | null;
	}

	/** Generic Class */
	export interface GenericClassFormProperties {

		/** Available only to Smart Tap enabled partners. Contact support for additional guidance. */
		enableSmartTap: FormControl<boolean | null | undefined>,

		/** Required. The unique identifier for the class. This ID must be unique across all from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`. */
		id: FormControl<string | null | undefined>,

		/** Identifies whether multiple users and devices will save the same object referencing this class. */
		multipleDevicesAndHoldersAllowedStatus: FormControl<EventTicketClassMultipleDevicesAndHoldersAllowedStatus | null | undefined>,

		/** View Unlock Requirement options for the generic pass. */
		viewUnlockRequirement: FormControl<EventTicketClassViewUnlockRequirement | null | undefined>,
	}
	export function CreateGenericClassFormGroup() {
		return new FormGroup<GenericClassFormProperties>({
			enableSmartTap: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			multipleDevicesAndHoldersAllowedStatus: new FormControl<EventTicketClassMultipleDevicesAndHoldersAllowedStatus | null | undefined>(undefined),
			viewUnlockRequirement: new FormControl<EventTicketClassViewUnlockRequirement | null | undefined>(undefined),
		});

	}


	/** List response which contains the list of all generic classes for a given issuer ID. */
	export interface GenericClassListResponse {
		pagination?: Pagination;

		/** Resources corresponding to the list request. */
		resources?: Array<GenericClass>;
	}

	/** List response which contains the list of all generic classes for a given issuer ID. */
	export interface GenericClassListResponseFormProperties {
	}
	export function CreateGenericClassListResponseFormGroup() {
		return new FormGroup<GenericClassListResponseFormProperties>({
		});

	}


	/** Generic Object Next ID: 121 */
	export interface GenericObject {
		appLinkData?: AppLinkData;
		barcode?: Barcode;
		cardTitle?: LocalizedString;

		/** Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. */
		classId?: string | null;

		/** Specify which `GenericType` the card belongs to. */
		genericType?: GenericObjectGenericType | null;
		groupingInfo?: GroupingInfo;

		/** Indicates if the object has users. This field is set by the platform. */
		hasUsers?: boolean | null;
		header?: LocalizedString;

		/** Wrapping type for Google hosted images. Next ID: 7 */
		heroImage?: Image;

		/** The background color for the card. If not set, the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used and if logo is not set, a color would be chosen by Google. */
		hexBackgroundColor?: string | null;

		/** Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`. */
		id?: string | null;

		/** Image module data. Only one of the image from class and one from object level will be rendered when both set. */
		imageModulesData?: Array<ImageModuleData>;
		linksModuleData?: LinksModuleData;

		/** Wrapping type for Google hosted images. Next ID: 7 */
		logo?: Image;

		/** Indicates if the object needs to have notification enabled. We support only one of ExpiryNotification/UpcomingNotification. `expiryNotification` takes precedence over `upcomingNotification`. In other words if `expiryNotification` is set, we ignore the `upcomingNotification` field. */
		notifications?: Notifications;

		/** Container for any constraints that may be placed on passes. */
		passConstraints?: PassConstraints;
		rotatingBarcode?: RotatingBarcode;

		/** The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields `enableSmartTap` and `redemptionIssuers` must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported. */
		smartTapRedemptionValue?: string | null;

		/** The state of the object. This field is used to determine how an object is displayed in the app. For example, an `inactive` object is moved to the "Expired passes" section. If this is not provided, the object would be considered `ACTIVE`. */
		state?: EventTicketObjectState | null;
		subheader?: LocalizedString;

		/** Text module data. If `textModulesData` is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from class and 10 from object. */
		textModulesData?: Array<TextModuleData>;
		validTimeInterval?: TimeInterval;

		/** Wrapping type for Google hosted images. Next ID: 7 */
		wideLogo?: Image;
	}

	/** Generic Object Next ID: 121 */
	export interface GenericObjectFormProperties {

		/** Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. */
		classId: FormControl<string | null | undefined>,

		/** Specify which `GenericType` the card belongs to. */
		genericType: FormControl<GenericObjectGenericType | null | undefined>,

		/** Indicates if the object has users. This field is set by the platform. */
		hasUsers: FormControl<boolean | null | undefined>,

		/** The background color for the card. If not set, the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used and if logo is not set, a color would be chosen by Google. */
		hexBackgroundColor: FormControl<string | null | undefined>,

		/** Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`. */
		id: FormControl<string | null | undefined>,

		/** The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields `enableSmartTap` and `redemptionIssuers` must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported. */
		smartTapRedemptionValue: FormControl<string | null | undefined>,

		/** The state of the object. This field is used to determine how an object is displayed in the app. For example, an `inactive` object is moved to the "Expired passes" section. If this is not provided, the object would be considered `ACTIVE`. */
		state: FormControl<EventTicketObjectState | null | undefined>,
	}
	export function CreateGenericObjectFormGroup() {
		return new FormGroup<GenericObjectFormProperties>({
			classId: new FormControl<string | null | undefined>(undefined),
			genericType: new FormControl<GenericObjectGenericType | null | undefined>(undefined),
			hasUsers: new FormControl<boolean | null | undefined>(undefined),
			hexBackgroundColor: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			smartTapRedemptionValue: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<EventTicketObjectState | null | undefined>(undefined),
		});

	}

	export enum GenericObjectGenericType { GENERIC_TYPE_UNSPECIFIED = 'GENERIC_TYPE_UNSPECIFIED', GENERIC_SEASON_PASS = 'GENERIC_SEASON_PASS', GENERIC_UTILITY_BILLS = 'GENERIC_UTILITY_BILLS', GENERIC_PARKING_PASS = 'GENERIC_PARKING_PASS', GENERIC_VOUCHER = 'GENERIC_VOUCHER', GENERIC_GYM_MEMBERSHIP = 'GENERIC_GYM_MEMBERSHIP', GENERIC_LIBRARY_MEMBERSHIP = 'GENERIC_LIBRARY_MEMBERSHIP', GENERIC_RESERVATIONS = 'GENERIC_RESERVATIONS', GENERIC_AUTO_INSURANCE = 'GENERIC_AUTO_INSURANCE', GENERIC_HOME_INSURANCE = 'GENERIC_HOME_INSURANCE', GENERIC_ENTRY_TICKET = 'GENERIC_ENTRY_TICKET', GENERIC_RECEIPT = 'GENERIC_RECEIPT', GENERIC_OTHER = 'GENERIC_OTHER' }


	/** Indicates if the object needs to have notification enabled. We support only one of ExpiryNotification/UpcomingNotification. `expiryNotification` takes precedence over `upcomingNotification`. In other words if `expiryNotification` is set, we ignore the `upcomingNotification` field. */
	export interface Notifications {

		/** Indicates that the issuer would like Google Wallet to send expiry notifications 2 days prior to the card expiration. */
		expiryNotification?: ExpiryNotification;

		/** Indicates that the issuer would like Google Wallet to send an upcoming card validity notification 1 day before card becomes valid/usable. */
		upcomingNotification?: UpcomingNotification;
	}

	/** Indicates if the object needs to have notification enabled. We support only one of ExpiryNotification/UpcomingNotification. `expiryNotification` takes precedence over `upcomingNotification`. In other words if `expiryNotification` is set, we ignore the `upcomingNotification` field. */
	export interface NotificationsFormProperties {
	}
	export function CreateNotificationsFormGroup() {
		return new FormGroup<NotificationsFormProperties>({
		});

	}


	/** Indicates that the issuer would like Google Wallet to send an upcoming card validity notification 1 day before card becomes valid/usable. */
	export interface UpcomingNotification {

		/** Indicates if the object needs to have upcoming notification enabled. */
		enableNotification?: boolean | null;
	}

	/** Indicates that the issuer would like Google Wallet to send an upcoming card validity notification 1 day before card becomes valid/usable. */
	export interface UpcomingNotificationFormProperties {

		/** Indicates if the object needs to have upcoming notification enabled. */
		enableNotification: FormControl<boolean | null | undefined>,
	}
	export function CreateUpcomingNotificationFormGroup() {
		return new FormGroup<UpcomingNotificationFormProperties>({
			enableNotification: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** List response which contains the list of all generic objects for a given issuer ID. */
	export interface GenericObjectListResponse {
		pagination?: Pagination;

		/** Resources corresponding to the list request. */
		resources?: Array<GenericObject>;
	}

	/** List response which contains the list of all generic objects for a given issuer ID. */
	export interface GenericObjectListResponseFormProperties {
	}
	export function CreateGenericObjectListResponseFormGroup() {
		return new FormGroup<GenericObjectListResponseFormProperties>({
		});

	}

	export interface GiftCardClass {

		/** Determines whether the merchant supports gift card redemption using barcode. If true, app displays a barcode for the gift card on the Gift card details screen. If false, a barcode is not displayed. */
		allowBarcodeRedemption?: boolean | null;

		/** Deprecated. Use `multipleDevicesAndHoldersAllowedStatus` instead. */
		allowMultipleUsersPerObject?: boolean | null;
		callbackOptions?: CallbackOptions;

		/** The label to display for the card number, such as "Card Number". */
		cardNumberLabel?: string | null;
		classTemplateInfo?: ClassTemplateInfo;

		/** Country code used to display the card's country (when the user is not in that country), as well as to display localized content when content is not available in the user's locale. */
		countryCode?: string | null;

		/** Identifies whether this class supports Smart Tap. The `redemptionIssuers` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap. */
		enableSmartTap?: boolean | null;

		/** The label to display for event number, such as "Target Event #". */
		eventNumberLabel?: string | null;

		/** Wrapping type for Google hosted images. Next ID: 7 */
		heroImage?: Image;

		/** The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`. */
		hexBackgroundColor?: string | null;
		homepageUri?: Uri;

		/** Required. The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
		id?: string | null;

		/** Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level. */
		imageModulesData?: Array<ImageModuleData>;
		infoModuleData?: InfoModuleData;

		/** Required. The issuer name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens. */
		issuerName?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#giftCardClass"`. */
		kind?: string | null;
		linksModuleData?: LinksModuleData;
		localizedCardNumberLabel?: LocalizedString;
		localizedEventNumberLabel?: LocalizedString;
		localizedIssuerName?: LocalizedString;
		localizedMerchantName?: LocalizedString;
		localizedPinLabel?: LocalizedString;

		/** Note: This field is currently not supported to trigger geo notifications. */
		locations?: Array<LatLongPoint>;

		/** Merchant name, such as "Adam's Apparel". The app may display an ellipsis after the first 20 characters to ensure full string is displayed on smaller screens. */
		merchantName?: string | null;

		/** An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10. */
		messages?: Array<Message>;

		/** Identifies whether multiple users and devices will save the same object referencing this class. */
		multipleDevicesAndHoldersAllowedStatus?: EventTicketClassMultipleDevicesAndHoldersAllowedStatus | null;

		/** The label to display for the PIN, such as "4-digit PIN". */
		pinLabel?: string | null;

		/** Wrapping type for Google hosted images. Next ID: 7 */
		programLogo?: Image;

		/** Identifies which redemption issuers can redeem the pass over Smart Tap. Redemption issuers are identified by their issuer ID. Redemption issuers must have at least one Smart Tap key configured. The `enableSmartTap` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap. */
		redemptionIssuers?: Array<string>;
		review?: Review;

		/** Required. The status of the class. This field can be set to `draft` or `underReview` using the insert, patch, or update API calls. Once the review state is changed from `draft` it may not be changed back to `draft`. You should keep this field to `draft` when the class is under development. A `draft` class cannot be used to create any object. You should set this field to `underReview` when you believe the class is ready for use. The platform will automatically set this field to `approved` and it can be immediately used to create or migrate objects. When updating an already `approved` class you should keep setting this field to `underReview`. */
		reviewStatus?: EventTicketClassReviewStatus | null;
		securityAnimation?: SecurityAnimation;

		/** Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class. */
		textModulesData?: Array<TextModuleData>;

		/** Deprecated */
		version?: string | null;

		/** View Unlock Requirement options for the gift card. */
		viewUnlockRequirement?: EventTicketClassViewUnlockRequirement | null;

		/** Wrapping type for Google hosted images. Next ID: 7 */
		wideProgramLogo?: Image;

		/** Wrapping type for Google hosted images. Next ID: 7 */
		wordMark?: Image;
	}
	export interface GiftCardClassFormProperties {

		/** Determines whether the merchant supports gift card redemption using barcode. If true, app displays a barcode for the gift card on the Gift card details screen. If false, a barcode is not displayed. */
		allowBarcodeRedemption: FormControl<boolean | null | undefined>,

		/** Deprecated. Use `multipleDevicesAndHoldersAllowedStatus` instead. */
		allowMultipleUsersPerObject: FormControl<boolean | null | undefined>,

		/** The label to display for the card number, such as "Card Number". */
		cardNumberLabel: FormControl<string | null | undefined>,

		/** Country code used to display the card's country (when the user is not in that country), as well as to display localized content when content is not available in the user's locale. */
		countryCode: FormControl<string | null | undefined>,

		/** Identifies whether this class supports Smart Tap. The `redemptionIssuers` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap. */
		enableSmartTap: FormControl<boolean | null | undefined>,

		/** The label to display for event number, such as "Target Event #". */
		eventNumberLabel: FormControl<string | null | undefined>,

		/** The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`. */
		hexBackgroundColor: FormControl<string | null | undefined>,

		/** Required. The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
		id: FormControl<string | null | undefined>,

		/** Required. The issuer name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens. */
		issuerName: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#giftCardClass"`. */
		kind: FormControl<string | null | undefined>,

		/** Merchant name, such as "Adam's Apparel". The app may display an ellipsis after the first 20 characters to ensure full string is displayed on smaller screens. */
		merchantName: FormControl<string | null | undefined>,

		/** Identifies whether multiple users and devices will save the same object referencing this class. */
		multipleDevicesAndHoldersAllowedStatus: FormControl<EventTicketClassMultipleDevicesAndHoldersAllowedStatus | null | undefined>,

		/** The label to display for the PIN, such as "4-digit PIN". */
		pinLabel: FormControl<string | null | undefined>,

		/** Required. The status of the class. This field can be set to `draft` or `underReview` using the insert, patch, or update API calls. Once the review state is changed from `draft` it may not be changed back to `draft`. You should keep this field to `draft` when the class is under development. A `draft` class cannot be used to create any object. You should set this field to `underReview` when you believe the class is ready for use. The platform will automatically set this field to `approved` and it can be immediately used to create or migrate objects. When updating an already `approved` class you should keep setting this field to `underReview`. */
		reviewStatus: FormControl<EventTicketClassReviewStatus | null | undefined>,

		/** Deprecated */
		version: FormControl<string | null | undefined>,

		/** View Unlock Requirement options for the gift card. */
		viewUnlockRequirement: FormControl<EventTicketClassViewUnlockRequirement | null | undefined>,
	}
	export function CreateGiftCardClassFormGroup() {
		return new FormGroup<GiftCardClassFormProperties>({
			allowBarcodeRedemption: new FormControl<boolean | null | undefined>(undefined),
			allowMultipleUsersPerObject: new FormControl<boolean | null | undefined>(undefined),
			cardNumberLabel: new FormControl<string | null | undefined>(undefined),
			countryCode: new FormControl<string | null | undefined>(undefined),
			enableSmartTap: new FormControl<boolean | null | undefined>(undefined),
			eventNumberLabel: new FormControl<string | null | undefined>(undefined),
			hexBackgroundColor: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			issuerName: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			merchantName: new FormControl<string | null | undefined>(undefined),
			multipleDevicesAndHoldersAllowedStatus: new FormControl<EventTicketClassMultipleDevicesAndHoldersAllowedStatus | null | undefined>(undefined),
			pinLabel: new FormControl<string | null | undefined>(undefined),
			reviewStatus: new FormControl<EventTicketClassReviewStatus | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			viewUnlockRequirement: new FormControl<EventTicketClassViewUnlockRequirement | null | undefined>(undefined),
		});

	}

	export interface GiftCardClassAddMessageResponse {
		resource?: GiftCardClass;
	}
	export interface GiftCardClassAddMessageResponseFormProperties {
	}
	export function CreateGiftCardClassAddMessageResponseFormGroup() {
		return new FormGroup<GiftCardClassAddMessageResponseFormProperties>({
		});

	}

	export interface GiftCardClassListResponse {
		pagination?: Pagination;

		/** Resources corresponding to the list request. */
		resources?: Array<GiftCardClass>;
	}
	export interface GiftCardClassListResponseFormProperties {
	}
	export function CreateGiftCardClassListResponseFormGroup() {
		return new FormGroup<GiftCardClassListResponseFormProperties>({
		});

	}

	export interface GiftCardObject {
		appLinkData?: AppLinkData;
		balance?: Money;
		balanceUpdateTime?: DateTime;
		barcode?: Barcode;

		/** Required. The card's number. */
		cardNumber?: string | null;

		/** Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. */
		classId?: string | null;
		classReference?: GiftCardClass;

		/** Indicates if notifications should explicitly be suppressed. If this field is set to true, regardless of the `messages` field, expiration notifications to the user will be suppressed. By default, this field is set to false. Currently, this can only be set for offers. */
		disableExpirationNotification?: boolean | null;

		/** The card's event number, an optional field used by some gift cards. */
		eventNumber?: string | null;
		groupingInfo?: GroupingInfo;

		/** Whether this object is currently linked to a single device. This field is set by the platform when a user saves the object, linking it to their device. Intended for use by select partners. Contact support for additional information. */
		hasLinkedDevice?: boolean | null;

		/** Indicates if the object has users. This field is set by the platform. */
		hasUsers?: boolean | null;

		/** Wrapping type for Google hosted images. Next ID: 7 */
		heroImage?: Image;

		/** Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. The unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
		id?: string | null;

		/** Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level. */
		imageModulesData?: Array<ImageModuleData>;
		infoModuleData?: InfoModuleData;

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#giftCardObject"`. */
		kind?: string | null;
		linksModuleData?: LinksModuleData;

		/** Note: This field is currently not supported to trigger geo notifications. */
		locations?: Array<LatLongPoint>;

		/** An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10. */
		messages?: Array<Message>;

		/** Container for any constraints that may be placed on passes. */
		passConstraints?: PassConstraints;

		/** The card's PIN. */
		pin?: string | null;
		rotatingBarcode?: RotatingBarcode;

		/** The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields `enableSmartTap` and `redemptionIssuers` must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported. */
		smartTapRedemptionValue?: string | null;

		/** Required. The state of the object. This field is used to determine how an object is displayed in the app. For example, an `inactive` object is moved to the "Expired passes" section. */
		state?: EventTicketObjectState | null;

		/** Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class. */
		textModulesData?: Array<TextModuleData>;
		validTimeInterval?: TimeInterval;

		/** Deprecated */
		version?: string | null;
	}
	export interface GiftCardObjectFormProperties {

		/** Required. The card's number. */
		cardNumber: FormControl<string | null | undefined>,

		/** Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. */
		classId: FormControl<string | null | undefined>,

		/** Indicates if notifications should explicitly be suppressed. If this field is set to true, regardless of the `messages` field, expiration notifications to the user will be suppressed. By default, this field is set to false. Currently, this can only be set for offers. */
		disableExpirationNotification: FormControl<boolean | null | undefined>,

		/** The card's event number, an optional field used by some gift cards. */
		eventNumber: FormControl<string | null | undefined>,

		/** Whether this object is currently linked to a single device. This field is set by the platform when a user saves the object, linking it to their device. Intended for use by select partners. Contact support for additional information. */
		hasLinkedDevice: FormControl<boolean | null | undefined>,

		/** Indicates if the object has users. This field is set by the platform. */
		hasUsers: FormControl<boolean | null | undefined>,

		/** Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. The unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#giftCardObject"`. */
		kind: FormControl<string | null | undefined>,

		/** The card's PIN. */
		pin: FormControl<string | null | undefined>,

		/** The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields `enableSmartTap` and `redemptionIssuers` must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported. */
		smartTapRedemptionValue: FormControl<string | null | undefined>,

		/** Required. The state of the object. This field is used to determine how an object is displayed in the app. For example, an `inactive` object is moved to the "Expired passes" section. */
		state: FormControl<EventTicketObjectState | null | undefined>,

		/** Deprecated */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGiftCardObjectFormGroup() {
		return new FormGroup<GiftCardObjectFormProperties>({
			cardNumber: new FormControl<string | null | undefined>(undefined),
			classId: new FormControl<string | null | undefined>(undefined),
			disableExpirationNotification: new FormControl<boolean | null | undefined>(undefined),
			eventNumber: new FormControl<string | null | undefined>(undefined),
			hasLinkedDevice: new FormControl<boolean | null | undefined>(undefined),
			hasUsers: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			pin: new FormControl<string | null | undefined>(undefined),
			smartTapRedemptionValue: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<EventTicketObjectState | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GiftCardObjectAddMessageResponse {
		resource?: GiftCardObject;
	}
	export interface GiftCardObjectAddMessageResponseFormProperties {
	}
	export function CreateGiftCardObjectAddMessageResponseFormGroup() {
		return new FormGroup<GiftCardObjectAddMessageResponseFormProperties>({
		});

	}

	export interface GiftCardObjectListResponse {
		pagination?: Pagination;

		/** Resources corresponding to the list request. */
		resources?: Array<GiftCardObject>;
	}
	export interface GiftCardObjectListResponseFormProperties {
	}
	export function CreateGiftCardObjectListResponseFormGroup() {
		return new FormGroup<GiftCardObjectListResponseFormProperties>({
		});

	}

	export interface Issuer {
		callbackOptions?: CallbackOptions;
		contactInfo?: IssuerContactInfo;

		/** URL for the issuer's home page. */
		homepageUrl?: string | null;

		/** The unique identifier for an issuer account. This is automatically generated when the issuer is inserted. */
		issuerId?: string | null;

		/** The account name of the issuer. */
		name?: string | null;
		smartTapMerchantData?: SmartTapMerchantData;
	}
	export interface IssuerFormProperties {

		/** URL for the issuer's home page. */
		homepageUrl: FormControl<string | null | undefined>,

		/** The unique identifier for an issuer account. This is automatically generated when the issuer is inserted. */
		issuerId: FormControl<string | null | undefined>,

		/** The account name of the issuer. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateIssuerFormGroup() {
		return new FormGroup<IssuerFormProperties>({
			homepageUrl: new FormControl<string | null | undefined>(undefined),
			issuerId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IssuerContactInfo {

		/** Email addresses which will receive alerts. */
		alertsEmails?: Array<string>;

		/** The primary contact email address. */
		email?: string | null;

		/** The primary contact name. */
		name?: string | null;

		/** The primary contact phone number. */
		phone?: string | null;
	}
	export interface IssuerContactInfoFormProperties {

		/** The primary contact email address. */
		email: FormControl<string | null | undefined>,

		/** The primary contact name. */
		name: FormControl<string | null | undefined>,

		/** The primary contact phone number. */
		phone: FormControl<string | null | undefined>,
	}
	export function CreateIssuerContactInfoFormGroup() {
		return new FormGroup<IssuerContactInfoFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SmartTapMerchantData {

		/** Available only to Smart Tap enabled partners. Contact support for additional guidance. */
		authenticationKeys?: Array<AuthenticationKey>;

		/** Available only to Smart Tap enabled partners. Contact support for additional guidance. */
		smartTapMerchantId?: string | null;
	}
	export interface SmartTapMerchantDataFormProperties {

		/** Available only to Smart Tap enabled partners. Contact support for additional guidance. */
		smartTapMerchantId: FormControl<string | null | undefined>,
	}
	export function CreateSmartTapMerchantDataFormGroup() {
		return new FormGroup<SmartTapMerchantDataFormProperties>({
			smartTapMerchantId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IssuerListResponse {

		/** Resources corresponding to the list request. */
		resources?: Array<Issuer>;
	}
	export interface IssuerListResponseFormProperties {
	}
	export function CreateIssuerListResponseFormGroup() {
		return new FormGroup<IssuerListResponseFormProperties>({
		});

	}

	export interface IssuerToUserInfo {
		action?: IssuerToUserInfoAction | null;
		signUpInfo?: SignUpInfo;

		/** Currently not used, consider deprecating. */
		url?: string | null;

		/** JSON web token for action S2AP. */
		value?: string | null;
	}
	export interface IssuerToUserInfoFormProperties {
		action: FormControl<IssuerToUserInfoAction | null | undefined>,

		/** Currently not used, consider deprecating. */
		url: FormControl<string | null | undefined>,

		/** JSON web token for action S2AP. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateIssuerToUserInfoFormGroup() {
		return new FormGroup<IssuerToUserInfoFormProperties>({
			action: new FormControl<IssuerToUserInfoAction | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum IssuerToUserInfoAction { ACTION_UNSPECIFIED = 'ACTION_UNSPECIFIED', S2AP = 'S2AP', s2ap = 's2ap', SIGN_UP = 'SIGN_UP', signUp = 'signUp' }

	export interface SignUpInfo {

		/** ID of the class the user can sign up for. */
		classId?: string | null;
	}
	export interface SignUpInfoFormProperties {

		/** ID of the class the user can sign up for. */
		classId: FormControl<string | null | undefined>,
	}
	export function CreateSignUpInfoFormGroup() {
		return new FormGroup<SignUpInfoFormProperties>({
			classId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface JwtInsertResponse {
		resources?: Resources;

		/** A URI that, when opened, will allow the end user to save the object(s) identified in the JWT to their Google account. */
		saveUri?: string | null;
	}
	export interface JwtInsertResponseFormProperties {

		/** A URI that, when opened, will allow the end user to save the object(s) identified in the JWT to their Google account. */
		saveUri: FormControl<string | null | undefined>,
	}
	export function CreateJwtInsertResponseFormGroup() {
		return new FormGroup<JwtInsertResponseFormProperties>({
			saveUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Resources {
		eventTicketClasses?: Array<EventTicketClass>;
		eventTicketObjects?: Array<EventTicketObject>;
		flightClasses?: Array<FlightClass>;
		flightObjects?: Array<FlightObject>;
		giftCardClasses?: Array<GiftCardClass>;
		giftCardObjects?: Array<GiftCardObject>;
		loyaltyClasses?: Array<LoyaltyClass>;
		loyaltyObjects?: Array<LoyaltyObject>;
		offerClasses?: Array<OfferClass>;
		offerObjects?: Array<OfferObject>;
		transitClasses?: Array<TransitClass>;
		transitObjects?: Array<TransitObject>;
	}
	export interface ResourcesFormProperties {
	}
	export function CreateResourcesFormGroup() {
		return new FormGroup<ResourcesFormProperties>({
		});

	}

	export interface LoyaltyClass {

		/** The account ID label, such as "Member ID." Recommended maximum length is 15 characters to ensure full string is displayed on smaller screens. */
		accountIdLabel?: string | null;

		/** The account name label, such as "Member Name." Recommended maximum length is 15 characters to ensure full string is displayed on smaller screens. */
		accountNameLabel?: string | null;

		/** Deprecated. Use `multipleDevicesAndHoldersAllowedStatus` instead. */
		allowMultipleUsersPerObject?: boolean | null;
		callbackOptions?: CallbackOptions;
		classTemplateInfo?: ClassTemplateInfo;

		/** Country code used to display the card's country (when the user is not in that country), as well as to display localized content when content is not available in the user's locale. */
		countryCode?: string | null;

		/** Information about how a class may be discovered and instantiated from within the Android Pay app. This is done by searching for a loyalty or gift card program and scanning or manually entering. */
		discoverableProgram?: DiscoverableProgram;

		/** Identifies whether this class supports Smart Tap. The `redemptionIssuers` and one of object level `smartTapRedemptionLevel`, barcode.value`, or `accountId` fields must also be set up correctly in order for a pass to support Smart Tap. */
		enableSmartTap?: boolean | null;

		/** Wrapping type for Google hosted images. Next ID: 7 */
		heroImage?: Image;

		/** The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`. */
		hexBackgroundColor?: string | null;
		homepageUri?: Uri;

		/** Required. The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
		id?: string | null;

		/** Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level. */
		imageModulesData?: Array<ImageModuleData>;
		infoModuleData?: InfoModuleData;

		/** Required. The issuer name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens. */
		issuerName?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#loyaltyClass"`. */
		kind?: string | null;
		linksModuleData?: LinksModuleData;
		localizedAccountIdLabel?: LocalizedString;
		localizedAccountNameLabel?: LocalizedString;
		localizedIssuerName?: LocalizedString;
		localizedProgramName?: LocalizedString;
		localizedRewardsTier?: LocalizedString;
		localizedRewardsTierLabel?: LocalizedString;
		localizedSecondaryRewardsTier?: LocalizedString;
		localizedSecondaryRewardsTierLabel?: LocalizedString;

		/** Note: This field is currently not supported to trigger geo notifications. */
		locations?: Array<LatLongPoint>;

		/** An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10. */
		messages?: Array<Message>;

		/** Identifies whether multiple users and devices will save the same object referencing this class. */
		multipleDevicesAndHoldersAllowedStatus?: EventTicketClassMultipleDevicesAndHoldersAllowedStatus | null;

		/** Wrapping type for Google hosted images. Next ID: 7 */
		programLogo?: Image;

		/** Required. The program name, such as "Adam's Apparel". The app may display an ellipsis after the first 20 characters to ensure full string is displayed on smaller screens. */
		programName?: string | null;

		/** Identifies which redemption issuers can redeem the pass over Smart Tap. Redemption issuers are identified by their issuer ID. Redemption issuers must have at least one Smart Tap key configured. The `enableSmartTap` and one of object level `smartTapRedemptionValue`, barcode.value`, or `accountId` fields must also be set up correctly in order for a pass to support Smart Tap. */
		redemptionIssuers?: Array<string>;
		review?: Review;

		/** Required. The status of the class. This field can be set to `draft` or `underReview` using the insert, patch, or update API calls. Once the review state is changed from `draft` it may not be changed back to `draft`. You should keep this field to `draft` when the class is under development. A `draft` class cannot be used to create any object. You should set this field to `underReview` when you believe the class is ready for use. The platform will automatically set this field to `approved` and it can be immediately used to create or migrate objects. When updating an already `approved` class you should keep setting this field to `underReview`. */
		reviewStatus?: EventTicketClassReviewStatus | null;

		/** The rewards tier, such as "Gold" or "Platinum." Recommended maximum length is 7 characters to ensure full string is displayed on smaller screens. */
		rewardsTier?: string | null;

		/** The rewards tier label, such as "Rewards Tier." Recommended maximum length is 9 characters to ensure full string is displayed on smaller screens. */
		rewardsTierLabel?: string | null;

		/** The secondary rewards tier, such as "Gold" or "Platinum." */
		secondaryRewardsTier?: string | null;

		/** The secondary rewards tier label, such as "Rewards Tier." */
		secondaryRewardsTierLabel?: string | null;
		securityAnimation?: SecurityAnimation;

		/** Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class. */
		textModulesData?: Array<TextModuleData>;

		/** Deprecated */
		version?: string | null;

		/** View Unlock Requirement options for the loyalty card. */
		viewUnlockRequirement?: EventTicketClassViewUnlockRequirement | null;

		/** Wrapping type for Google hosted images. Next ID: 7 */
		wideProgramLogo?: Image;

		/** Wrapping type for Google hosted images. Next ID: 7 */
		wordMark?: Image;
	}
	export interface LoyaltyClassFormProperties {

		/** The account ID label, such as "Member ID." Recommended maximum length is 15 characters to ensure full string is displayed on smaller screens. */
		accountIdLabel: FormControl<string | null | undefined>,

		/** The account name label, such as "Member Name." Recommended maximum length is 15 characters to ensure full string is displayed on smaller screens. */
		accountNameLabel: FormControl<string | null | undefined>,

		/** Deprecated. Use `multipleDevicesAndHoldersAllowedStatus` instead. */
		allowMultipleUsersPerObject: FormControl<boolean | null | undefined>,

		/** Country code used to display the card's country (when the user is not in that country), as well as to display localized content when content is not available in the user's locale. */
		countryCode: FormControl<string | null | undefined>,

		/** Identifies whether this class supports Smart Tap. The `redemptionIssuers` and one of object level `smartTapRedemptionLevel`, barcode.value`, or `accountId` fields must also be set up correctly in order for a pass to support Smart Tap. */
		enableSmartTap: FormControl<boolean | null | undefined>,

		/** The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`. */
		hexBackgroundColor: FormControl<string | null | undefined>,

		/** Required. The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
		id: FormControl<string | null | undefined>,

		/** Required. The issuer name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens. */
		issuerName: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#loyaltyClass"`. */
		kind: FormControl<string | null | undefined>,

		/** Identifies whether multiple users and devices will save the same object referencing this class. */
		multipleDevicesAndHoldersAllowedStatus: FormControl<EventTicketClassMultipleDevicesAndHoldersAllowedStatus | null | undefined>,

		/** Required. The program name, such as "Adam's Apparel". The app may display an ellipsis after the first 20 characters to ensure full string is displayed on smaller screens. */
		programName: FormControl<string | null | undefined>,

		/** Required. The status of the class. This field can be set to `draft` or `underReview` using the insert, patch, or update API calls. Once the review state is changed from `draft` it may not be changed back to `draft`. You should keep this field to `draft` when the class is under development. A `draft` class cannot be used to create any object. You should set this field to `underReview` when you believe the class is ready for use. The platform will automatically set this field to `approved` and it can be immediately used to create or migrate objects. When updating an already `approved` class you should keep setting this field to `underReview`. */
		reviewStatus: FormControl<EventTicketClassReviewStatus | null | undefined>,

		/** The rewards tier, such as "Gold" or "Platinum." Recommended maximum length is 7 characters to ensure full string is displayed on smaller screens. */
		rewardsTier: FormControl<string | null | undefined>,

		/** The rewards tier label, such as "Rewards Tier." Recommended maximum length is 9 characters to ensure full string is displayed on smaller screens. */
		rewardsTierLabel: FormControl<string | null | undefined>,

		/** The secondary rewards tier, such as "Gold" or "Platinum." */
		secondaryRewardsTier: FormControl<string | null | undefined>,

		/** The secondary rewards tier label, such as "Rewards Tier." */
		secondaryRewardsTierLabel: FormControl<string | null | undefined>,

		/** Deprecated */
		version: FormControl<string | null | undefined>,

		/** View Unlock Requirement options for the loyalty card. */
		viewUnlockRequirement: FormControl<EventTicketClassViewUnlockRequirement | null | undefined>,
	}
	export function CreateLoyaltyClassFormGroup() {
		return new FormGroup<LoyaltyClassFormProperties>({
			accountIdLabel: new FormControl<string | null | undefined>(undefined),
			accountNameLabel: new FormControl<string | null | undefined>(undefined),
			allowMultipleUsersPerObject: new FormControl<boolean | null | undefined>(undefined),
			countryCode: new FormControl<string | null | undefined>(undefined),
			enableSmartTap: new FormControl<boolean | null | undefined>(undefined),
			hexBackgroundColor: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			issuerName: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			multipleDevicesAndHoldersAllowedStatus: new FormControl<EventTicketClassMultipleDevicesAndHoldersAllowedStatus | null | undefined>(undefined),
			programName: new FormControl<string | null | undefined>(undefined),
			reviewStatus: new FormControl<EventTicketClassReviewStatus | null | undefined>(undefined),
			rewardsTier: new FormControl<string | null | undefined>(undefined),
			rewardsTierLabel: new FormControl<string | null | undefined>(undefined),
			secondaryRewardsTier: new FormControl<string | null | undefined>(undefined),
			secondaryRewardsTierLabel: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			viewUnlockRequirement: new FormControl<EventTicketClassViewUnlockRequirement | null | undefined>(undefined),
		});

	}

	export interface LoyaltyObject {

		/** The loyalty account identifier. Recommended maximum length is 20 characters. */
		accountId?: string | null;

		/** The loyalty account holder name, such as "John Smith." Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens. */
		accountName?: string | null;
		appLinkData?: AppLinkData;
		barcode?: Barcode;

		/** Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. */
		classId?: string | null;
		classReference?: LoyaltyClass;

		/** Indicates if notifications should explicitly be suppressed. If this field is set to true, regardless of the `messages` field, expiration notifications to the user will be suppressed. By default, this field is set to false. Currently, this can only be set for offers. */
		disableExpirationNotification?: boolean | null;
		groupingInfo?: GroupingInfo;

		/** Whether this object is currently linked to a single device. This field is set by the platform when a user saves the object, linking it to their device. Intended for use by select partners. Contact support for additional information. */
		hasLinkedDevice?: boolean | null;

		/** Indicates if the object has users. This field is set by the platform. */
		hasUsers?: boolean | null;

		/** Wrapping type for Google hosted images. Next ID: 7 */
		heroImage?: Image;

		/** Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. The unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
		id?: string | null;

		/** Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level. */
		imageModulesData?: Array<ImageModuleData>;
		infoModuleData?: InfoModuleData;

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#loyaltyObject"`. */
		kind?: string | null;

		/** A list of offer objects linked to this loyalty card. The offer objects must already exist. Offer object IDs should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. */
		linkedOfferIds?: Array<string>;
		linksModuleData?: LinksModuleData;

		/** Note: This field is currently not supported to trigger geo notifications. */
		locations?: Array<LatLongPoint>;
		loyaltyPoints?: LoyaltyPoints;

		/** An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10. */
		messages?: Array<Message>;

		/** Container for any constraints that may be placed on passes. */
		passConstraints?: PassConstraints;
		rotatingBarcode?: RotatingBarcode;
		secondaryLoyaltyPoints?: LoyaltyPoints;

		/** The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields `enableSmartTap` and `redemptionIssuers` must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported. If this value is not set but the class level fields `enableSmartTap` and `redemptionIssuers` are set up correctly, the `barcode.value` or the `accountId` fields are used as fallback if present. */
		smartTapRedemptionValue?: string | null;

		/** Required. The state of the object. This field is used to determine how an object is displayed in the app. For example, an `inactive` object is moved to the "Expired passes" section. */
		state?: EventTicketObjectState | null;

		/** Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class. */
		textModulesData?: Array<TextModuleData>;
		validTimeInterval?: TimeInterval;

		/** Deprecated */
		version?: string | null;
	}
	export interface LoyaltyObjectFormProperties {

		/** The loyalty account identifier. Recommended maximum length is 20 characters. */
		accountId: FormControl<string | null | undefined>,

		/** The loyalty account holder name, such as "John Smith." Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens. */
		accountName: FormControl<string | null | undefined>,

		/** Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. */
		classId: FormControl<string | null | undefined>,

		/** Indicates if notifications should explicitly be suppressed. If this field is set to true, regardless of the `messages` field, expiration notifications to the user will be suppressed. By default, this field is set to false. Currently, this can only be set for offers. */
		disableExpirationNotification: FormControl<boolean | null | undefined>,

		/** Whether this object is currently linked to a single device. This field is set by the platform when a user saves the object, linking it to their device. Intended for use by select partners. Contact support for additional information. */
		hasLinkedDevice: FormControl<boolean | null | undefined>,

		/** Indicates if the object has users. This field is set by the platform. */
		hasUsers: FormControl<boolean | null | undefined>,

		/** Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. The unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#loyaltyObject"`. */
		kind: FormControl<string | null | undefined>,

		/** The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields `enableSmartTap` and `redemptionIssuers` must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported. If this value is not set but the class level fields `enableSmartTap` and `redemptionIssuers` are set up correctly, the `barcode.value` or the `accountId` fields are used as fallback if present. */
		smartTapRedemptionValue: FormControl<string | null | undefined>,

		/** Required. The state of the object. This field is used to determine how an object is displayed in the app. For example, an `inactive` object is moved to the "Expired passes" section. */
		state: FormControl<EventTicketObjectState | null | undefined>,

		/** Deprecated */
		version: FormControl<string | null | undefined>,
	}
	export function CreateLoyaltyObjectFormGroup() {
		return new FormGroup<LoyaltyObjectFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			accountName: new FormControl<string | null | undefined>(undefined),
			classId: new FormControl<string | null | undefined>(undefined),
			disableExpirationNotification: new FormControl<boolean | null | undefined>(undefined),
			hasLinkedDevice: new FormControl<boolean | null | undefined>(undefined),
			hasUsers: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			smartTapRedemptionValue: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<EventTicketObjectState | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LoyaltyPoints {
		balance?: LoyaltyPointsBalance;

		/** The loyalty points label, such as "Points". Recommended maximum length is 9 characters. */
		label?: string | null;
		localizedLabel?: LocalizedString;
	}
	export interface LoyaltyPointsFormProperties {

		/** The loyalty points label, such as "Points". Recommended maximum length is 9 characters. */
		label: FormControl<string | null | undefined>,
	}
	export function CreateLoyaltyPointsFormGroup() {
		return new FormGroup<LoyaltyPointsFormProperties>({
			label: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LoyaltyPointsBalance {

		/** The double form of a balance. Only one of these subtypes (string, int, double, money) should be populated. */
		double?: number | null;

		/** The integer form of a balance. Only one of these subtypes (string, int, double, money) should be populated. */
		int?: number | null;
		money?: Money;

		/** The string form of a balance. Only one of these subtypes (string, int, double, money) should be populated. */
		string?: string | null;
	}
	export interface LoyaltyPointsBalanceFormProperties {

		/** The double form of a balance. Only one of these subtypes (string, int, double, money) should be populated. */
		double: FormControl<number | null | undefined>,

		/** The integer form of a balance. Only one of these subtypes (string, int, double, money) should be populated. */
		int: FormControl<number | null | undefined>,

		/** The string form of a balance. Only one of these subtypes (string, int, double, money) should be populated. */
		string: FormControl<string | null | undefined>,
	}
	export function CreateLoyaltyPointsBalanceFormGroup() {
		return new FormGroup<LoyaltyPointsBalanceFormProperties>({
			double: new FormControl<number | null | undefined>(undefined),
			int: new FormControl<number | null | undefined>(undefined),
			string: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OfferClass {

		/** Deprecated. Use `multipleDevicesAndHoldersAllowedStatus` instead. */
		allowMultipleUsersPerObject?: boolean | null;
		callbackOptions?: CallbackOptions;
		classTemplateInfo?: ClassTemplateInfo;

		/** Country code used to display the card's country (when the user is not in that country), as well as to display localized content when content is not available in the user's locale. */
		countryCode?: string | null;

		/** The details of the offer. */
		details?: string | null;

		/** Identifies whether this class supports Smart Tap. The `redemptionIssuers` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap. */
		enableSmartTap?: boolean | null;

		/** The fine print or terms of the offer, such as "20% off any t-shirt at Adam's Apparel." */
		finePrint?: string | null;
		helpUri?: Uri;

		/** Wrapping type for Google hosted images. Next ID: 7 */
		heroImage?: Image;

		/** The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`. */
		hexBackgroundColor?: string | null;
		homepageUri?: Uri;

		/** Required. The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
		id?: string | null;

		/** Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level. */
		imageModulesData?: Array<ImageModuleData>;
		infoModuleData?: InfoModuleData;

		/** Required. The issuer name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens. */
		issuerName?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#offerClass"`. */
		kind?: string | null;
		linksModuleData?: LinksModuleData;
		localizedDetails?: LocalizedString;
		localizedFinePrint?: LocalizedString;
		localizedIssuerName?: LocalizedString;
		localizedProvider?: LocalizedString;
		localizedShortTitle?: LocalizedString;
		localizedTitle?: LocalizedString;

		/** Note: This field is currently not supported to trigger geo notifications. */
		locations?: Array<LatLongPoint>;

		/** An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10. */
		messages?: Array<Message>;

		/** Identifies whether multiple users and devices will save the same object referencing this class. */
		multipleDevicesAndHoldersAllowedStatus?: EventTicketClassMultipleDevicesAndHoldersAllowedStatus | null;

		/** Required. The offer provider (either the aggregator name or merchant name). Recommended maximum length is 12 characters to ensure full string is displayed on smaller screens. */
		provider?: string | null;

		/** Required. The redemption channels applicable to this offer. */
		redemptionChannel?: OfferClassRedemptionChannel | null;

		/** Identifies which redemption issuers can redeem the pass over Smart Tap. Redemption issuers are identified by their issuer ID. Redemption issuers must have at least one Smart Tap key configured. The `enableSmartTap` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap. */
		redemptionIssuers?: Array<string>;
		review?: Review;

		/** Required. The status of the class. This field can be set to `draft` or The status of the class. This field can be set to `draft` or `underReview` using the insert, patch, or update API calls. Once the review state is changed from `draft` it may not be changed back to `draft`. You should keep this field to `draft` when the class is under development. A `draft` class cannot be used to create any object. You should set this field to `underReview` when you believe the class is ready for use. The platform will automatically set this field to `approved` and it can be immediately used to create or migrate objects. When updating an already `approved` class you should keep setting this field to `underReview`. */
		reviewStatus?: EventTicketClassReviewStatus | null;
		securityAnimation?: SecurityAnimation;

		/** A shortened version of the title of the offer, such as "20% off," shown to users as a quick reference to the offer contents. Recommended maximum length is 20 characters. */
		shortTitle?: string | null;

		/** Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class. */
		textModulesData?: Array<TextModuleData>;

		/** Required. The title of the offer, such as "20% off any t-shirt." Recommended maximum length is 60 characters to ensure full string is displayed on smaller screens. */
		title?: string | null;

		/** Wrapping type for Google hosted images. Next ID: 7 */
		titleImage?: Image;

		/** Deprecated */
		version?: string | null;

		/** View Unlock Requirement options for the offer. */
		viewUnlockRequirement?: EventTicketClassViewUnlockRequirement | null;

		/** Wrapping type for Google hosted images. Next ID: 7 */
		wideTitleImage?: Image;

		/** Wrapping type for Google hosted images. Next ID: 7 */
		wordMark?: Image;
	}
	export interface OfferClassFormProperties {

		/** Deprecated. Use `multipleDevicesAndHoldersAllowedStatus` instead. */
		allowMultipleUsersPerObject: FormControl<boolean | null | undefined>,

		/** Country code used to display the card's country (when the user is not in that country), as well as to display localized content when content is not available in the user's locale. */
		countryCode: FormControl<string | null | undefined>,

		/** The details of the offer. */
		details: FormControl<string | null | undefined>,

		/** Identifies whether this class supports Smart Tap. The `redemptionIssuers` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap. */
		enableSmartTap: FormControl<boolean | null | undefined>,

		/** The fine print or terms of the offer, such as "20% off any t-shirt at Adam's Apparel." */
		finePrint: FormControl<string | null | undefined>,

		/** The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`. */
		hexBackgroundColor: FormControl<string | null | undefined>,

		/** Required. The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
		id: FormControl<string | null | undefined>,

		/** Required. The issuer name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens. */
		issuerName: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#offerClass"`. */
		kind: FormControl<string | null | undefined>,

		/** Identifies whether multiple users and devices will save the same object referencing this class. */
		multipleDevicesAndHoldersAllowedStatus: FormControl<EventTicketClassMultipleDevicesAndHoldersAllowedStatus | null | undefined>,

		/** Required. The offer provider (either the aggregator name or merchant name). Recommended maximum length is 12 characters to ensure full string is displayed on smaller screens. */
		provider: FormControl<string | null | undefined>,

		/** Required. The redemption channels applicable to this offer. */
		redemptionChannel: FormControl<OfferClassRedemptionChannel | null | undefined>,

		/** Required. The status of the class. This field can be set to `draft` or The status of the class. This field can be set to `draft` or `underReview` using the insert, patch, or update API calls. Once the review state is changed from `draft` it may not be changed back to `draft`. You should keep this field to `draft` when the class is under development. A `draft` class cannot be used to create any object. You should set this field to `underReview` when you believe the class is ready for use. The platform will automatically set this field to `approved` and it can be immediately used to create or migrate objects. When updating an already `approved` class you should keep setting this field to `underReview`. */
		reviewStatus: FormControl<EventTicketClassReviewStatus | null | undefined>,

		/** A shortened version of the title of the offer, such as "20% off," shown to users as a quick reference to the offer contents. Recommended maximum length is 20 characters. */
		shortTitle: FormControl<string | null | undefined>,

		/** Required. The title of the offer, such as "20% off any t-shirt." Recommended maximum length is 60 characters to ensure full string is displayed on smaller screens. */
		title: FormControl<string | null | undefined>,

		/** Deprecated */
		version: FormControl<string | null | undefined>,

		/** View Unlock Requirement options for the offer. */
		viewUnlockRequirement: FormControl<EventTicketClassViewUnlockRequirement | null | undefined>,
	}
	export function CreateOfferClassFormGroup() {
		return new FormGroup<OfferClassFormProperties>({
			allowMultipleUsersPerObject: new FormControl<boolean | null | undefined>(undefined),
			countryCode: new FormControl<string | null | undefined>(undefined),
			details: new FormControl<string | null | undefined>(undefined),
			enableSmartTap: new FormControl<boolean | null | undefined>(undefined),
			finePrint: new FormControl<string | null | undefined>(undefined),
			hexBackgroundColor: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			issuerName: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			multipleDevicesAndHoldersAllowedStatus: new FormControl<EventTicketClassMultipleDevicesAndHoldersAllowedStatus | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			redemptionChannel: new FormControl<OfferClassRedemptionChannel | null | undefined>(undefined),
			reviewStatus: new FormControl<EventTicketClassReviewStatus | null | undefined>(undefined),
			shortTitle: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			viewUnlockRequirement: new FormControl<EventTicketClassViewUnlockRequirement | null | undefined>(undefined),
		});

	}

	export enum OfferClassRedemptionChannel { REDEMPTION_CHANNEL_UNSPECIFIED = 'REDEMPTION_CHANNEL_UNSPECIFIED', INSTORE = 'INSTORE', instore = 'instore', ONLINE = 'ONLINE', online = 'online', BOTH = 'BOTH', both = 'both', TEMPORARY_PRICE_REDUCTION = 'TEMPORARY_PRICE_REDUCTION', temporaryPriceReduction = 'temporaryPriceReduction' }

	export interface OfferObject {
		appLinkData?: AppLinkData;
		barcode?: Barcode;

		/** Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. */
		classId?: string | null;
		classReference?: OfferClass;

		/** Indicates if notifications should explicitly be suppressed. If this field is set to true, regardless of the `messages` field, expiration notifications to the user will be suppressed. By default, this field is set to false. Currently, this can only be set for offers. */
		disableExpirationNotification?: boolean | null;
		groupingInfo?: GroupingInfo;

		/** Whether this object is currently linked to a single device. This field is set by the platform when a user saves the object, linking it to their device. Intended for use by select partners. Contact support for additional information. */
		hasLinkedDevice?: boolean | null;

		/** Indicates if the object has users. This field is set by the platform. */
		hasUsers?: boolean | null;

		/** Wrapping type for Google hosted images. Next ID: 7 */
		heroImage?: Image;

		/** Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. The unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
		id?: string | null;

		/** Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level. */
		imageModulesData?: Array<ImageModuleData>;
		infoModuleData?: InfoModuleData;

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#offerObject"`. */
		kind?: string | null;
		linksModuleData?: LinksModuleData;

		/** Note: This field is currently not supported to trigger geo notifications. */
		locations?: Array<LatLongPoint>;

		/** An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10. */
		messages?: Array<Message>;

		/** Container for any constraints that may be placed on passes. */
		passConstraints?: PassConstraints;
		rotatingBarcode?: RotatingBarcode;

		/** The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields `enableSmartTap` and `redemptionIssuers` must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported. */
		smartTapRedemptionValue?: string | null;

		/** Required. The state of the object. This field is used to determine how an object is displayed in the app. For example, an `inactive` object is moved to the "Expired passes" section. */
		state?: EventTicketObjectState | null;

		/** Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class. */
		textModulesData?: Array<TextModuleData>;
		validTimeInterval?: TimeInterval;

		/** Deprecated */
		version?: string | null;
	}
	export interface OfferObjectFormProperties {

		/** Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. */
		classId: FormControl<string | null | undefined>,

		/** Indicates if notifications should explicitly be suppressed. If this field is set to true, regardless of the `messages` field, expiration notifications to the user will be suppressed. By default, this field is set to false. Currently, this can only be set for offers. */
		disableExpirationNotification: FormControl<boolean | null | undefined>,

		/** Whether this object is currently linked to a single device. This field is set by the platform when a user saves the object, linking it to their device. Intended for use by select partners. Contact support for additional information. */
		hasLinkedDevice: FormControl<boolean | null | undefined>,

		/** Indicates if the object has users. This field is set by the platform. */
		hasUsers: FormControl<boolean | null | undefined>,

		/** Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. The unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#offerObject"`. */
		kind: FormControl<string | null | undefined>,

		/** The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields `enableSmartTap` and `redemptionIssuers` must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported. */
		smartTapRedemptionValue: FormControl<string | null | undefined>,

		/** Required. The state of the object. This field is used to determine how an object is displayed in the app. For example, an `inactive` object is moved to the "Expired passes" section. */
		state: FormControl<EventTicketObjectState | null | undefined>,

		/** Deprecated */
		version: FormControl<string | null | undefined>,
	}
	export function CreateOfferObjectFormGroup() {
		return new FormGroup<OfferObjectFormProperties>({
			classId: new FormControl<string | null | undefined>(undefined),
			disableExpirationNotification: new FormControl<boolean | null | undefined>(undefined),
			hasLinkedDevice: new FormControl<boolean | null | undefined>(undefined),
			hasUsers: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			smartTapRedemptionValue: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<EventTicketObjectState | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TransitClass {

		/** ActivationOptions for the class */
		activationOptions?: ActivationOptions;

		/** Deprecated. Use `multipleDevicesAndHoldersAllowedStatus` instead. */
		allowMultipleUsersPerObject?: boolean | null;
		callbackOptions?: CallbackOptions;
		classTemplateInfo?: ClassTemplateInfo;

		/** Country code used to display the card's country (when the user is not in that country), as well as to display localized content when content is not available in the user's locale. */
		countryCode?: string | null;
		customCarriageLabel?: LocalizedString;
		customCoachLabel?: LocalizedString;
		customConcessionCategoryLabel?: LocalizedString;
		customConfirmationCodeLabel?: LocalizedString;
		customDiscountMessageLabel?: LocalizedString;
		customFareClassLabel?: LocalizedString;
		customFareNameLabel?: LocalizedString;
		customOtherRestrictionsLabel?: LocalizedString;
		customPlatformLabel?: LocalizedString;
		customPurchaseFaceValueLabel?: LocalizedString;
		customPurchasePriceLabel?: LocalizedString;
		customPurchaseReceiptNumberLabel?: LocalizedString;
		customRouteRestrictionsDetailsLabel?: LocalizedString;
		customRouteRestrictionsLabel?: LocalizedString;
		customSeatLabel?: LocalizedString;
		customTicketNumberLabel?: LocalizedString;
		customTimeRestrictionsLabel?: LocalizedString;
		customTransitTerminusNameLabel?: LocalizedString;
		customZoneLabel?: LocalizedString;

		/** Controls the display of the single-leg itinerary for this class. By default, an itinerary will only display for multi-leg trips. */
		enableSingleLegItinerary?: boolean | null;

		/** Identifies whether this class supports Smart Tap. The `redemptionIssuers` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap. */
		enableSmartTap?: boolean | null;

		/** Wrapping type for Google hosted images. Next ID: 7 */
		heroImage?: Image;

		/** The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`. */
		hexBackgroundColor?: string | null;
		homepageUri?: Uri;

		/** Required. The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
		id?: string | null;

		/** Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level. */
		imageModulesData?: Array<ImageModuleData>;
		infoModuleData?: InfoModuleData;

		/** Required. The issuer name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens. */
		issuerName?: string | null;

		/** If this field is present, transit tickets served to a user's device will always be in this language. Represents the BCP 47 language tag. Example values are "en-US", "en-GB", "de", or "de-AT". */
		languageOverride?: string | null;
		linksModuleData?: LinksModuleData;
		localizedIssuerName?: LocalizedString;

		/** Note: This field is currently not supported to trigger geo notifications. */
		locations?: Array<LatLongPoint>;

		/** Wrapping type for Google hosted images. Next ID: 7 */
		logo?: Image;

		/** An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10. */
		messages?: Array<Message>;

		/** Identifies whether multiple users and devices will save the same object referencing this class. */
		multipleDevicesAndHoldersAllowedStatus?: EventTicketClassMultipleDevicesAndHoldersAllowedStatus | null;

		/** Identifies which redemption issuers can redeem the pass over Smart Tap. Redemption issuers are identified by their issuer ID. Redemption issuers must have at least one Smart Tap key configured. The `enableSmartTap` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap. */
		redemptionIssuers?: Array<string>;
		review?: Review;

		/** Required. The status of the class. This field can be set to `draft` or `underReview` using the insert, patch, or update API calls. Once the review state is changed from `draft` it may not be changed back to `draft`. You should keep this field to `draft` when the class is under development. A `draft` class cannot be used to create any object. You should set this field to `underReview` when you believe the class is ready for use. The platform will automatically set this field to `approved` and it can be immediately used to create or migrate objects. When updating an already `approved` class you should keep setting this field to `underReview`. */
		reviewStatus?: EventTicketClassReviewStatus | null;
		securityAnimation?: SecurityAnimation;

		/** Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class. */
		textModulesData?: Array<TextModuleData>;
		transitOperatorName?: LocalizedString;

		/** Required. The type of transit this class represents, such as "bus". */
		transitType?: TransitClassTransitType | null;

		/** Deprecated */
		version?: string | null;

		/** View Unlock Requirement options for the transit ticket. */
		viewUnlockRequirement?: EventTicketClassViewUnlockRequirement | null;

		/** Wrapping type for Google hosted images. Next ID: 7 */
		watermark?: Image;

		/** Wrapping type for Google hosted images. Next ID: 7 */
		wideLogo?: Image;

		/** Wrapping type for Google hosted images. Next ID: 7 */
		wordMark?: Image;
	}
	export interface TransitClassFormProperties {

		/** Deprecated. Use `multipleDevicesAndHoldersAllowedStatus` instead. */
		allowMultipleUsersPerObject: FormControl<boolean | null | undefined>,

		/** Country code used to display the card's country (when the user is not in that country), as well as to display localized content when content is not available in the user's locale. */
		countryCode: FormControl<string | null | undefined>,

		/** Controls the display of the single-leg itinerary for this class. By default, an itinerary will only display for multi-leg trips. */
		enableSingleLegItinerary: FormControl<boolean | null | undefined>,

		/** Identifies whether this class supports Smart Tap. The `redemptionIssuers` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap. */
		enableSmartTap: FormControl<boolean | null | undefined>,

		/** The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`. */
		hexBackgroundColor: FormControl<string | null | undefined>,

		/** Required. The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
		id: FormControl<string | null | undefined>,

		/** Required. The issuer name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens. */
		issuerName: FormControl<string | null | undefined>,

		/** If this field is present, transit tickets served to a user's device will always be in this language. Represents the BCP 47 language tag. Example values are "en-US", "en-GB", "de", or "de-AT". */
		languageOverride: FormControl<string | null | undefined>,

		/** Identifies whether multiple users and devices will save the same object referencing this class. */
		multipleDevicesAndHoldersAllowedStatus: FormControl<EventTicketClassMultipleDevicesAndHoldersAllowedStatus | null | undefined>,

		/** Required. The status of the class. This field can be set to `draft` or `underReview` using the insert, patch, or update API calls. Once the review state is changed from `draft` it may not be changed back to `draft`. You should keep this field to `draft` when the class is under development. A `draft` class cannot be used to create any object. You should set this field to `underReview` when you believe the class is ready for use. The platform will automatically set this field to `approved` and it can be immediately used to create or migrate objects. When updating an already `approved` class you should keep setting this field to `underReview`. */
		reviewStatus: FormControl<EventTicketClassReviewStatus | null | undefined>,

		/** Required. The type of transit this class represents, such as "bus". */
		transitType: FormControl<TransitClassTransitType | null | undefined>,

		/** Deprecated */
		version: FormControl<string | null | undefined>,

		/** View Unlock Requirement options for the transit ticket. */
		viewUnlockRequirement: FormControl<EventTicketClassViewUnlockRequirement | null | undefined>,
	}
	export function CreateTransitClassFormGroup() {
		return new FormGroup<TransitClassFormProperties>({
			allowMultipleUsersPerObject: new FormControl<boolean | null | undefined>(undefined),
			countryCode: new FormControl<string | null | undefined>(undefined),
			enableSingleLegItinerary: new FormControl<boolean | null | undefined>(undefined),
			enableSmartTap: new FormControl<boolean | null | undefined>(undefined),
			hexBackgroundColor: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			issuerName: new FormControl<string | null | undefined>(undefined),
			languageOverride: new FormControl<string | null | undefined>(undefined),
			multipleDevicesAndHoldersAllowedStatus: new FormControl<EventTicketClassMultipleDevicesAndHoldersAllowedStatus | null | undefined>(undefined),
			reviewStatus: new FormControl<EventTicketClassReviewStatus | null | undefined>(undefined),
			transitType: new FormControl<TransitClassTransitType | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			viewUnlockRequirement: new FormControl<EventTicketClassViewUnlockRequirement | null | undefined>(undefined),
		});

	}

	export enum TransitClassTransitType { TRANSIT_TYPE_UNSPECIFIED = 'TRANSIT_TYPE_UNSPECIFIED', BUS = 'BUS', bus = 'bus', RAIL = 'RAIL', rail = 'rail', TRAM = 'TRAM', tram = 'tram', FERRY = 'FERRY', ferry = 'ferry', OTHER = 'OTHER', other = 'other' }

	export interface TransitObject {

		/** The activation status of the object. This field includes activation status if valuable supports activation. */
		activationStatus?: ActivationStatus;
		appLinkData?: AppLinkData;
		barcode?: Barcode;

		/** Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. */
		classId?: string | null;
		classReference?: TransitClass;

		/** The concession category for the ticket. */
		concessionCategory?: TransitObjectConcessionCategory | null;
		customConcessionCategory?: LocalizedString;
		customTicketStatus?: LocalizedString;

		/** Device context associated with the object. */
		deviceContext?: DeviceContext;

		/** Indicates if notifications should explicitly be suppressed. If this field is set to true, regardless of the `messages` field, expiration notifications to the user will be suppressed. By default, this field is set to false. Currently, this can only be set for offers. */
		disableExpirationNotification?: boolean | null;
		groupingInfo?: GroupingInfo;

		/** Whether this object is currently linked to a single device. This field is set by the platform when a user saves the object, linking it to their device. Intended for use by select partners. Contact support for additional information. */
		hasLinkedDevice?: boolean | null;

		/** Indicates if the object has users. This field is set by the platform. */
		hasUsers?: boolean | null;

		/** Wrapping type for Google hosted images. Next ID: 7 */
		heroImage?: Image;

		/** The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`. */
		hexBackgroundColor?: string | null;

		/** Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. The unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
		id?: string | null;

		/** Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level. */
		imageModulesData?: Array<ImageModuleData>;
		infoModuleData?: InfoModuleData;
		linksModuleData?: LinksModuleData;

		/** Note: This field is currently not supported to trigger geo notifications. */
		locations?: Array<LatLongPoint>;

		/** An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10. */
		messages?: Array<Message>;

		/** Container for any constraints that may be placed on passes. */
		passConstraints?: PassConstraints;

		/** The name(s) of the passengers the ticket is assigned to. The above `passengerType` field is meant to give Google context on this field. */
		passengerNames?: string | null;

		/** The number of passengers. */
		passengerType?: TransitObjectPassengerType | null;
		purchaseDetails?: PurchaseDetails;
		rotatingBarcode?: RotatingBarcode;

		/** The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields `enableSmartTap` and `redemptionIssuers` must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported. */
		smartTapRedemptionValue?: string | null;

		/** Required. The state of the object. This field is used to determine how an object is displayed in the app. For example, an `inactive` object is moved to the "Expired passes" section. */
		state?: EventTicketObjectState | null;

		/** Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class. */
		textModulesData?: Array<TextModuleData>;
		ticketLeg?: TicketLeg;

		/** Each ticket may contain one or more legs. Each leg contains departure and arrival information along with boarding and seating information. If only one leg is to be specified then use the `ticketLeg` field instead. Both `ticketLeg` and `ticketLegs` may not be set. */
		ticketLegs?: Array<TicketLeg>;

		/** The number of the ticket. This is a unique identifier for the ticket in the transit operator's system. */
		ticketNumber?: string | null;
		ticketRestrictions?: TicketRestrictions;

		/** The status of the ticket. For states which affect display, use the `state` field instead. */
		ticketStatus?: TransitObjectTicketStatus | null;

		/** This id is used to group tickets together if the user has saved multiple tickets for the same trip. */
		tripId?: string | null;

		/** Required. The type of trip this transit object represents. Used to determine the pass title and/or which symbol to use between the origin and destination. */
		tripType?: TransitObjectTripType | null;
		validTimeInterval?: TimeInterval;

		/** Deprecated */
		version?: string | null;
	}
	export interface TransitObjectFormProperties {

		/** Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. */
		classId: FormControl<string | null | undefined>,

		/** The concession category for the ticket. */
		concessionCategory: FormControl<TransitObjectConcessionCategory | null | undefined>,

		/** Indicates if notifications should explicitly be suppressed. If this field is set to true, regardless of the `messages` field, expiration notifications to the user will be suppressed. By default, this field is set to false. Currently, this can only be set for offers. */
		disableExpirationNotification: FormControl<boolean | null | undefined>,

		/** Whether this object is currently linked to a single device. This field is set by the platform when a user saves the object, linking it to their device. Intended for use by select partners. Contact support for additional information. */
		hasLinkedDevice: FormControl<boolean | null | undefined>,

		/** Indicates if the object has users. This field is set by the platform. */
		hasUsers: FormControl<boolean | null | undefined>,

		/** The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`. */
		hexBackgroundColor: FormControl<string | null | undefined>,

		/** Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. The unique identifier should only include alphanumeric characters, '.', '_', or '-'. */
		id: FormControl<string | null | undefined>,

		/** The name(s) of the passengers the ticket is assigned to. The above `passengerType` field is meant to give Google context on this field. */
		passengerNames: FormControl<string | null | undefined>,

		/** The number of passengers. */
		passengerType: FormControl<TransitObjectPassengerType | null | undefined>,

		/** The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields `enableSmartTap` and `redemptionIssuers` must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported. */
		smartTapRedemptionValue: FormControl<string | null | undefined>,

		/** Required. The state of the object. This field is used to determine how an object is displayed in the app. For example, an `inactive` object is moved to the "Expired passes" section. */
		state: FormControl<EventTicketObjectState | null | undefined>,

		/** The number of the ticket. This is a unique identifier for the ticket in the transit operator's system. */
		ticketNumber: FormControl<string | null | undefined>,

		/** The status of the ticket. For states which affect display, use the `state` field instead. */
		ticketStatus: FormControl<TransitObjectTicketStatus | null | undefined>,

		/** This id is used to group tickets together if the user has saved multiple tickets for the same trip. */
		tripId: FormControl<string | null | undefined>,

		/** Required. The type of trip this transit object represents. Used to determine the pass title and/or which symbol to use between the origin and destination. */
		tripType: FormControl<TransitObjectTripType | null | undefined>,

		/** Deprecated */
		version: FormControl<string | null | undefined>,
	}
	export function CreateTransitObjectFormGroup() {
		return new FormGroup<TransitObjectFormProperties>({
			classId: new FormControl<string | null | undefined>(undefined),
			concessionCategory: new FormControl<TransitObjectConcessionCategory | null | undefined>(undefined),
			disableExpirationNotification: new FormControl<boolean | null | undefined>(undefined),
			hasLinkedDevice: new FormControl<boolean | null | undefined>(undefined),
			hasUsers: new FormControl<boolean | null | undefined>(undefined),
			hexBackgroundColor: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			passengerNames: new FormControl<string | null | undefined>(undefined),
			passengerType: new FormControl<TransitObjectPassengerType | null | undefined>(undefined),
			smartTapRedemptionValue: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<EventTicketObjectState | null | undefined>(undefined),
			ticketNumber: new FormControl<string | null | undefined>(undefined),
			ticketStatus: new FormControl<TransitObjectTicketStatus | null | undefined>(undefined),
			tripId: new FormControl<string | null | undefined>(undefined),
			tripType: new FormControl<TransitObjectTripType | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TransitObjectConcessionCategory { CONCESSION_CATEGORY_UNSPECIFIED = 'CONCESSION_CATEGORY_UNSPECIFIED', ADULT = 'ADULT', adult = 'adult', CHILD = 'CHILD', child = 'child', SENIOR = 'SENIOR', senior = 'senior' }

	export enum TransitObjectPassengerType { PASSENGER_TYPE_UNSPECIFIED = 'PASSENGER_TYPE_UNSPECIFIED', SINGLE_PASSENGER = 'SINGLE_PASSENGER', singlePassenger = 'singlePassenger', MULTIPLE_PASSENGERS = 'MULTIPLE_PASSENGERS', multiplePassengers = 'multiplePassengers' }

	export interface PurchaseDetails {

		/** ID of the account used to purchase the ticket. */
		accountId?: string | null;

		/** The confirmation code for the purchase. This may be the same for multiple different tickets and is used to group tickets together. */
		confirmationCode?: string | null;

		/** The purchase date/time of the ticket. This is an ISO 8601 extended format date/time, with or without an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. Without offset information, some rich features may not be available. */
		purchaseDateTime?: string | null;

		/** Receipt number/identifier for tracking the ticket purchase via the body that sold the ticket. */
		purchaseReceiptNumber?: string | null;
		ticketCost?: TicketCost;
	}
	export interface PurchaseDetailsFormProperties {

		/** ID of the account used to purchase the ticket. */
		accountId: FormControl<string | null | undefined>,

		/** The confirmation code for the purchase. This may be the same for multiple different tickets and is used to group tickets together. */
		confirmationCode: FormControl<string | null | undefined>,

		/** The purchase date/time of the ticket. This is an ISO 8601 extended format date/time, with or without an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. Without offset information, some rich features may not be available. */
		purchaseDateTime: FormControl<string | null | undefined>,

		/** Receipt number/identifier for tracking the ticket purchase via the body that sold the ticket. */
		purchaseReceiptNumber: FormControl<string | null | undefined>,
	}
	export function CreatePurchaseDetailsFormGroup() {
		return new FormGroup<PurchaseDetailsFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			confirmationCode: new FormControl<string | null | undefined>(undefined),
			purchaseDateTime: new FormControl<string | null | undefined>(undefined),
			purchaseReceiptNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TicketCost {
		discountMessage?: LocalizedString;
		faceValue?: Money;
		purchasePrice?: Money;
	}
	export interface TicketCostFormProperties {
	}
	export function CreateTicketCostFormGroup() {
		return new FormGroup<TicketCostFormProperties>({
		});

	}

	export interface TicketLeg {

		/** The date/time of arrival. This is an ISO 8601 extended format date/time, with or without an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. The portion of the date/time without the offset is considered the "local date/time". This should be the local date/time at the destination station. For example, if the event occurs at the 20th hour of June 5th, 2018 at the destination station, the local date/time portion should be `2018-06-05T20:00:00`. If the local date/time at the destination station is 4 hours before UTC, an offset of `-04:00` may be appended. Without offset information, some rich features may not be available. */
		arrivalDateTime?: string | null;

		/** The train or ship name/number that the passsenger needs to board. */
		carriage?: string | null;

		/** The date/time of departure. This is required if there is no validity time interval set on the transit object. This is an ISO 8601 extended format date/time, with or without an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. The portion of the date/time without the offset is considered the "local date/time". This should be the local date/time at the origin station. For example, if the departure occurs at the 20th hour of June 5th, 2018 at the origin station, the local date/time portion should be `2018-06-05T20:00:00`. If the local date/time at the origin station is 4 hours before UTC, an offset of `-04:00` may be appended. Without offset information, some rich features may not be available. */
		departureDateTime?: string | null;
		destinationName?: LocalizedString;

		/** The destination station code. */
		destinationStationCode?: string | null;
		fareName?: LocalizedString;
		originName?: LocalizedString;

		/** The origin station code. This is required if `destinationStationCode` is present or if `originName` is not present. */
		originStationCode?: string | null;

		/** The platform or gate where the passenger can board the carriage. */
		platform?: string | null;
		ticketSeat?: TicketSeat;

		/** The reserved seat for the passenger(s). If only one seat is to be specified then use the `ticketSeat` field instead. Both `ticketSeat` and `ticketSeats` may not be set. */
		ticketSeats?: Array<TicketSeat>;
		transitOperatorName?: LocalizedString;
		transitTerminusName?: LocalizedString;

		/** The zone of boarding within the platform. */
		zone?: string | null;
	}
	export interface TicketLegFormProperties {

		/** The date/time of arrival. This is an ISO 8601 extended format date/time, with or without an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. The portion of the date/time without the offset is considered the "local date/time". This should be the local date/time at the destination station. For example, if the event occurs at the 20th hour of June 5th, 2018 at the destination station, the local date/time portion should be `2018-06-05T20:00:00`. If the local date/time at the destination station is 4 hours before UTC, an offset of `-04:00` may be appended. Without offset information, some rich features may not be available. */
		arrivalDateTime: FormControl<string | null | undefined>,

		/** The train or ship name/number that the passsenger needs to board. */
		carriage: FormControl<string | null | undefined>,

		/** The date/time of departure. This is required if there is no validity time interval set on the transit object. This is an ISO 8601 extended format date/time, with or without an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. The portion of the date/time without the offset is considered the "local date/time". This should be the local date/time at the origin station. For example, if the departure occurs at the 20th hour of June 5th, 2018 at the origin station, the local date/time portion should be `2018-06-05T20:00:00`. If the local date/time at the origin station is 4 hours before UTC, an offset of `-04:00` may be appended. Without offset information, some rich features may not be available. */
		departureDateTime: FormControl<string | null | undefined>,

		/** The destination station code. */
		destinationStationCode: FormControl<string | null | undefined>,

		/** The origin station code. This is required if `destinationStationCode` is present or if `originName` is not present. */
		originStationCode: FormControl<string | null | undefined>,

		/** The platform or gate where the passenger can board the carriage. */
		platform: FormControl<string | null | undefined>,

		/** The zone of boarding within the platform. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateTicketLegFormGroup() {
		return new FormGroup<TicketLegFormProperties>({
			arrivalDateTime: new FormControl<string | null | undefined>(undefined),
			carriage: new FormControl<string | null | undefined>(undefined),
			departureDateTime: new FormControl<string | null | undefined>(undefined),
			destinationStationCode: new FormControl<string | null | undefined>(undefined),
			originStationCode: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TicketSeat {

		/** The identifier of the train car or coach in which the ticketed seat is located. Eg. "10" */
		coach?: string | null;
		customFareClass?: LocalizedString;

		/** The fare class of the ticketed seat. */
		fareClass?: TicketSeatFareClass | null;

		/** The identifier of where the ticketed seat is located. Eg. "42". If there is no specific identifier, use `seatAssigment` instead. */
		seat?: string | null;
		seatAssignment?: LocalizedString;
	}
	export interface TicketSeatFormProperties {

		/** The identifier of the train car or coach in which the ticketed seat is located. Eg. "10" */
		coach: FormControl<string | null | undefined>,

		/** The fare class of the ticketed seat. */
		fareClass: FormControl<TicketSeatFareClass | null | undefined>,

		/** The identifier of where the ticketed seat is located. Eg. "42". If there is no specific identifier, use `seatAssigment` instead. */
		seat: FormControl<string | null | undefined>,
	}
	export function CreateTicketSeatFormGroup() {
		return new FormGroup<TicketSeatFormProperties>({
			coach: new FormControl<string | null | undefined>(undefined),
			fareClass: new FormControl<TicketSeatFareClass | null | undefined>(undefined),
			seat: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TicketSeatFareClass { FARE_CLASS_UNSPECIFIED = 'FARE_CLASS_UNSPECIFIED', ECONOMY = 'ECONOMY', economy = 'economy', FIRST = 'FIRST', first = 'first', BUSINESS = 'BUSINESS', business = 'business' }

	export interface TicketRestrictions {
		otherRestrictions?: LocalizedString;
		routeRestrictions?: LocalizedString;
		routeRestrictionsDetails?: LocalizedString;
		timeRestrictions?: LocalizedString;
	}
	export interface TicketRestrictionsFormProperties {
	}
	export function CreateTicketRestrictionsFormGroup() {
		return new FormGroup<TicketRestrictionsFormProperties>({
		});

	}

	export enum TransitObjectTicketStatus { TICKET_STATUS_UNSPECIFIED = 'TICKET_STATUS_UNSPECIFIED', USED = 'USED', used = 'used', REFUNDED = 'REFUNDED', refunded = 'refunded', EXCHANGED = 'EXCHANGED', exchanged = 'exchanged' }

	export enum TransitObjectTripType { TRIP_TYPE_UNSPECIFIED = 'TRIP_TYPE_UNSPECIFIED', ROUND_TRIP = 'ROUND_TRIP', roundTrip = 'roundTrip', ONE_WAY = 'ONE_WAY', oneWay = 'oneWay' }

	export interface JwtResource {

		/** A string representing a JWT of the format described at https://developers.google.com/wallet/reference/rest/v1/Jwt */
		jwt?: string | null;
	}
	export interface JwtResourceFormProperties {

		/** A string representing a JWT of the format described at https://developers.google.com/wallet/reference/rest/v1/Jwt */
		jwt: FormControl<string | null | undefined>,
	}
	export function CreateJwtResourceFormGroup() {
		return new FormGroup<JwtResourceFormProperties>({
			jwt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LoyaltyClassAddMessageResponse {
		resource?: LoyaltyClass;
	}
	export interface LoyaltyClassAddMessageResponseFormProperties {
	}
	export function CreateLoyaltyClassAddMessageResponseFormGroup() {
		return new FormGroup<LoyaltyClassAddMessageResponseFormProperties>({
		});

	}

	export interface LoyaltyClassListResponse {
		pagination?: Pagination;

		/** Resources corresponding to the list request. */
		resources?: Array<LoyaltyClass>;
	}
	export interface LoyaltyClassListResponseFormProperties {
	}
	export function CreateLoyaltyClassListResponseFormGroup() {
		return new FormGroup<LoyaltyClassListResponseFormProperties>({
		});

	}

	export interface LoyaltyObjectAddMessageResponse {
		resource?: LoyaltyObject;
	}
	export interface LoyaltyObjectAddMessageResponseFormProperties {
	}
	export function CreateLoyaltyObjectAddMessageResponseFormGroup() {
		return new FormGroup<LoyaltyObjectAddMessageResponseFormProperties>({
		});

	}

	export interface LoyaltyObjectListResponse {
		pagination?: Pagination;

		/** Resources corresponding to the list request. */
		resources?: Array<LoyaltyObject>;
	}
	export interface LoyaltyObjectListResponseFormProperties {
	}
	export function CreateLoyaltyObjectListResponseFormGroup() {
		return new FormGroup<LoyaltyObjectListResponseFormProperties>({
		});

	}


	/** A reference to data stored on the filesystem, on GFS or in blobstore. */
	export interface Media {

		/** Deprecated, use one of explicit hash type fields instead. Algorithm used for calculating the hash. As of 2011/01/21, "MD5" is the only possible value for this field. New values may be added at any time. */
		algorithm?: string | null;

		/** Use object_id instead. */
		bigstoreObjectRef?: string | null;

		/** Blobstore v1 reference, set if reference_type is BLOBSTORE_REF This should be the byte representation of a blobstore.BlobRef. Since Blobstore is deprecating v1, use blobstore2_info instead. For now, any v2 blob will also be represented in this field as v1 BlobRef. */
		blobRef?: string | null;

		/** Information to read/write to blobstore2. */
		blobstore2Info?: Blobstore2Info;

		/** A composite media composed of one or more media objects, set if reference_type is COMPOSITE_MEDIA. The media length field must be set to the sum of the lengths of all composite media objects. Note: All composite media must have length specified. */
		compositeMedia?: Array<CompositeMedia>;

		/** MIME type of the data */
		contentType?: string | null;

		/** Detailed Content-Type information from Scotty. The Content-Type of the media will typically be filled in by the header or Scotty's best_guess, but this extended information provides the backend with more information so that it can make a better decision if needed. This is only used on media upload requests from Scotty. */
		contentTypeInfo?: ContentTypeInfo;

		/** A binary data reference for a media download. Serves as a technology-agnostic binary reference in some Google infrastructure. This value is a serialized storage_cosmo.BinaryReference proto. Storing it as bytes is a hack to get around the fact that the cosmo proto (as well as others it includes) doesn't support JavaScript. This prevents us from including the actual type of this field. */
		cosmoBinaryReference?: string | null;

		/** For Scotty Uploads: Scotty-provided hashes for uploads For Scotty Downloads: (WARNING: DO NOT USE WITHOUT PERMISSION FROM THE SCOTTY TEAM.) A Hash provided by the agent to be used to verify the data being downloaded. Currently only supported for inline payloads. Further, only crc32c_hash is currently supported. */
		crc32cHash?: number | null;

		/** Backend response for a Diff get checksums response. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol. */
		diffChecksumsResponse?: DiffChecksumsResponse;

		/** Backend response for a Diff download response. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol. */
		diffDownloadResponse?: DiffDownloadResponse;

		/** A Diff upload request. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol. */
		diffUploadRequest?: DiffUploadRequest;

		/** Backend response for a Diff upload request. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol. */
		diffUploadResponse?: DiffUploadResponse;

		/** Backend response for a Diff get version response. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol. */
		diffVersionResponse?: DiffVersionResponse;

		/** Parameters specific to media downloads. */
		downloadParameters?: DownloadParameters;

		/** Original file name */
		filename?: string | null;

		/** Deprecated, use one of explicit hash type fields instead. These two hash related fields will only be populated on Scotty based media uploads and will contain the content of the hash group in the NotificationRequest: http://cs/#google3/uploader/service/proto/upload_listener.proto&q=class:Hash Hex encoded hash value of the uploaded media. */
		hash?: string | null;

		/** For Scotty uploads only. If a user sends a hash code and the backend has requested that Scotty verify the upload against the client hash, Scotty will perform the check on behalf of the backend and will reject it if the hashes don't match. This is set to true if Scotty performed this verification. */
		hashVerified?: boolean | null;

		/** Media data, set if reference_type is INLINE */
		inline?: string | null;

		/** |is_potential_retry| is set false only when Scotty is certain that it has not sent the request before. When a client resumes an upload, this field must be set true in agent calls, because Scotty cannot be certain that it has never sent the request before due to potential failure in the session state persistence. */
		isPotentialRetry?: boolean | null;

		/** Size of the data, in bytes */
		length?: string | null;

		/** Scotty-provided MD5 hash for an upload. */
		md5Hash?: string | null;

		/** Media id to forward to the operation GetMedia. Can be set if reference_type is GET_MEDIA. */
		mediaId?: string | null;

		/** This is a copy of the tech.blob.ObjectId proto, which could not be used directly here due to transitive closure issues with JavaScript support; see http://b/8801763. */
		objectId?: ObjectId;

		/** Path to the data, set if reference_type is PATH */
		path?: string | null;

		/** Describes what the field reference contains. */
		referenceType?: MediaReferenceType | null;

		/** Scotty-provided SHA1 hash for an upload. */
		sha1Hash?: string | null;

		/** Scotty-provided SHA256 hash for an upload. */
		sha256Hash?: string | null;

		/** Time at which the media data was last updated, in milliseconds since UNIX epoch */
		timestamp?: string | null;

		/** A unique fingerprint/version id for the media data */
		token?: string | null;
	}

	/** A reference to data stored on the filesystem, on GFS or in blobstore. */
	export interface MediaFormProperties {

		/** Deprecated, use one of explicit hash type fields instead. Algorithm used for calculating the hash. As of 2011/01/21, "MD5" is the only possible value for this field. New values may be added at any time. */
		algorithm: FormControl<string | null | undefined>,

		/** Use object_id instead. */
		bigstoreObjectRef: FormControl<string | null | undefined>,

		/** Blobstore v1 reference, set if reference_type is BLOBSTORE_REF This should be the byte representation of a blobstore.BlobRef. Since Blobstore is deprecating v1, use blobstore2_info instead. For now, any v2 blob will also be represented in this field as v1 BlobRef. */
		blobRef: FormControl<string | null | undefined>,

		/** MIME type of the data */
		contentType: FormControl<string | null | undefined>,

		/** A binary data reference for a media download. Serves as a technology-agnostic binary reference in some Google infrastructure. This value is a serialized storage_cosmo.BinaryReference proto. Storing it as bytes is a hack to get around the fact that the cosmo proto (as well as others it includes) doesn't support JavaScript. This prevents us from including the actual type of this field. */
		cosmoBinaryReference: FormControl<string | null | undefined>,

		/** For Scotty Uploads: Scotty-provided hashes for uploads For Scotty Downloads: (WARNING: DO NOT USE WITHOUT PERMISSION FROM THE SCOTTY TEAM.) A Hash provided by the agent to be used to verify the data being downloaded. Currently only supported for inline payloads. Further, only crc32c_hash is currently supported. */
		crc32cHash: FormControl<number | null | undefined>,

		/** Original file name */
		filename: FormControl<string | null | undefined>,

		/** Deprecated, use one of explicit hash type fields instead. These two hash related fields will only be populated on Scotty based media uploads and will contain the content of the hash group in the NotificationRequest: http://cs/#google3/uploader/service/proto/upload_listener.proto&q=class:Hash Hex encoded hash value of the uploaded media. */
		hash: FormControl<string | null | undefined>,

		/** For Scotty uploads only. If a user sends a hash code and the backend has requested that Scotty verify the upload against the client hash, Scotty will perform the check on behalf of the backend and will reject it if the hashes don't match. This is set to true if Scotty performed this verification. */
		hashVerified: FormControl<boolean | null | undefined>,

		/** Media data, set if reference_type is INLINE */
		inline: FormControl<string | null | undefined>,

		/** |is_potential_retry| is set false only when Scotty is certain that it has not sent the request before. When a client resumes an upload, this field must be set true in agent calls, because Scotty cannot be certain that it has never sent the request before due to potential failure in the session state persistence. */
		isPotentialRetry: FormControl<boolean | null | undefined>,

		/** Size of the data, in bytes */
		length: FormControl<string | null | undefined>,

		/** Scotty-provided MD5 hash for an upload. */
		md5Hash: FormControl<string | null | undefined>,

		/** Media id to forward to the operation GetMedia. Can be set if reference_type is GET_MEDIA. */
		mediaId: FormControl<string | null | undefined>,

		/** Path to the data, set if reference_type is PATH */
		path: FormControl<string | null | undefined>,

		/** Describes what the field reference contains. */
		referenceType: FormControl<MediaReferenceType | null | undefined>,

		/** Scotty-provided SHA1 hash for an upload. */
		sha1Hash: FormControl<string | null | undefined>,

		/** Scotty-provided SHA256 hash for an upload. */
		sha256Hash: FormControl<string | null | undefined>,

		/** Time at which the media data was last updated, in milliseconds since UNIX epoch */
		timestamp: FormControl<string | null | undefined>,

		/** A unique fingerprint/version id for the media data */
		token: FormControl<string | null | undefined>,
	}
	export function CreateMediaFormGroup() {
		return new FormGroup<MediaFormProperties>({
			algorithm: new FormControl<string | null | undefined>(undefined),
			bigstoreObjectRef: new FormControl<string | null | undefined>(undefined),
			blobRef: new FormControl<string | null | undefined>(undefined),
			contentType: new FormControl<string | null | undefined>(undefined),
			cosmoBinaryReference: new FormControl<string | null | undefined>(undefined),
			crc32cHash: new FormControl<number | null | undefined>(undefined),
			filename: new FormControl<string | null | undefined>(undefined),
			hash: new FormControl<string | null | undefined>(undefined),
			hashVerified: new FormControl<boolean | null | undefined>(undefined),
			inline: new FormControl<string | null | undefined>(undefined),
			isPotentialRetry: new FormControl<boolean | null | undefined>(undefined),
			length: new FormControl<string | null | undefined>(undefined),
			md5Hash: new FormControl<string | null | undefined>(undefined),
			mediaId: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			referenceType: new FormControl<MediaReferenceType | null | undefined>(undefined),
			sha1Hash: new FormControl<string | null | undefined>(undefined),
			sha256Hash: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MediaReferenceType { PATH = 'PATH', BLOB_REF = 'BLOB_REF', INLINE = 'INLINE', GET_MEDIA = 'GET_MEDIA', COMPOSITE_MEDIA = 'COMPOSITE_MEDIA', BIGSTORE_REF = 'BIGSTORE_REF', DIFF_VERSION_RESPONSE = 'DIFF_VERSION_RESPONSE', DIFF_CHECKSUMS_RESPONSE = 'DIFF_CHECKSUMS_RESPONSE', DIFF_DOWNLOAD_RESPONSE = 'DIFF_DOWNLOAD_RESPONSE', DIFF_UPLOAD_REQUEST = 'DIFF_UPLOAD_REQUEST', DIFF_UPLOAD_RESPONSE = 'DIFF_UPLOAD_RESPONSE', COSMO_BINARY_REFERENCE = 'COSMO_BINARY_REFERENCE', ARBITRARY_BYTES = 'ARBITRARY_BYTES' }


	/** Extra information added to operations that support Scotty media requests. */
	export interface MediaRequestInfo {

		/** The number of current bytes uploaded or downloaded. */
		currentBytes?: string | null;

		/** Data to be copied to backend requests. Custom data is returned to Scotty in the agent_state field, which Scotty will then provide in subsequent upload notifications. */
		customData?: string | null;

		/** Set if the http request info is diff encoded. The value of this field is the version number of the base revision. This is corresponding to Apiary's mediaDiffObjectVersion (//depot/google3/java/com/google/api/server/media/variable/DiffObjectVersionVariable.java). See go/esf-scotty-diff-upload for more information. */
		diffObjectVersion?: string | null;

		/** The existence of the final_status field indicates that this is the last call to the agent for this request_id. http://google3/uploader/agent/scotty_agent.proto?l=737&rcl=347601929 */
		finalStatus?: number | null;

		/** The type of notification received from Scotty. */
		notificationType?: MediaRequestInfoNotificationType | null;

		/** The Scotty request ID. */
		requestId?: string | null;

		/** The partition of the Scotty server handling this request. type is uploader_service.RequestReceivedParamsServingInfo LINT.IfChange(request_received_params_serving_info_annotations) LINT.ThenChange() */
		requestReceivedParamsServingInfo?: string | null;

		/** The total size of the file. */
		totalBytes?: string | null;

		/** Whether the total bytes field contains an estimated data. */
		totalBytesIsEstimated?: boolean | null;
	}

	/** Extra information added to operations that support Scotty media requests. */
	export interface MediaRequestInfoFormProperties {

		/** The number of current bytes uploaded or downloaded. */
		currentBytes: FormControl<string | null | undefined>,

		/** Data to be copied to backend requests. Custom data is returned to Scotty in the agent_state field, which Scotty will then provide in subsequent upload notifications. */
		customData: FormControl<string | null | undefined>,

		/** Set if the http request info is diff encoded. The value of this field is the version number of the base revision. This is corresponding to Apiary's mediaDiffObjectVersion (//depot/google3/java/com/google/api/server/media/variable/DiffObjectVersionVariable.java). See go/esf-scotty-diff-upload for more information. */
		diffObjectVersion: FormControl<string | null | undefined>,

		/** The existence of the final_status field indicates that this is the last call to the agent for this request_id. http://google3/uploader/agent/scotty_agent.proto?l=737&rcl=347601929 */
		finalStatus: FormControl<number | null | undefined>,

		/** The type of notification received from Scotty. */
		notificationType: FormControl<MediaRequestInfoNotificationType | null | undefined>,

		/** The Scotty request ID. */
		requestId: FormControl<string | null | undefined>,

		/** The partition of the Scotty server handling this request. type is uploader_service.RequestReceivedParamsServingInfo LINT.IfChange(request_received_params_serving_info_annotations) LINT.ThenChange() */
		requestReceivedParamsServingInfo: FormControl<string | null | undefined>,

		/** The total size of the file. */
		totalBytes: FormControl<string | null | undefined>,

		/** Whether the total bytes field contains an estimated data. */
		totalBytesIsEstimated: FormControl<boolean | null | undefined>,
	}
	export function CreateMediaRequestInfoFormGroup() {
		return new FormGroup<MediaRequestInfoFormProperties>({
			currentBytes: new FormControl<string | null | undefined>(undefined),
			customData: new FormControl<string | null | undefined>(undefined),
			diffObjectVersion: new FormControl<string | null | undefined>(undefined),
			finalStatus: new FormControl<number | null | undefined>(undefined),
			notificationType: new FormControl<MediaRequestInfoNotificationType | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
			requestReceivedParamsServingInfo: new FormControl<string | null | undefined>(undefined),
			totalBytes: new FormControl<string | null | undefined>(undefined),
			totalBytesIsEstimated: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum MediaRequestInfoNotificationType { START = 'START', PROGRESS = 'PROGRESS', END = 'END', RESPONSE_SENT = 'RESPONSE_SENT', ERROR = 'ERROR' }

	export interface ModifyLinkedOfferObjects {

		/** The linked offer object ids to add to the object. */
		addLinkedOfferObjectIds?: Array<string>;

		/** The linked offer object ids to remove from the object. */
		removeLinkedOfferObjectIds?: Array<string>;
	}
	export interface ModifyLinkedOfferObjectsFormProperties {
	}
	export function CreateModifyLinkedOfferObjectsFormGroup() {
		return new FormGroup<ModifyLinkedOfferObjectsFormProperties>({
		});

	}

	export interface ModifyLinkedOfferObjectsRequest {
		linkedOfferObjectIds?: ModifyLinkedOfferObjects;
	}
	export interface ModifyLinkedOfferObjectsRequestFormProperties {
	}
	export function CreateModifyLinkedOfferObjectsRequestFormGroup() {
		return new FormGroup<ModifyLinkedOfferObjectsRequestFormProperties>({
		});

	}

	export interface OfferClassAddMessageResponse {
		resource?: OfferClass;
	}
	export interface OfferClassAddMessageResponseFormProperties {
	}
	export function CreateOfferClassAddMessageResponseFormGroup() {
		return new FormGroup<OfferClassAddMessageResponseFormProperties>({
		});

	}

	export interface OfferClassListResponse {
		pagination?: Pagination;

		/** Resources corresponding to the list request. */
		resources?: Array<OfferClass>;
	}
	export interface OfferClassListResponseFormProperties {
	}
	export function CreateOfferClassListResponseFormGroup() {
		return new FormGroup<OfferClassListResponseFormProperties>({
		});

	}

	export interface OfferObjectAddMessageResponse {
		resource?: OfferObject;
	}
	export interface OfferObjectAddMessageResponseFormProperties {
	}
	export function CreateOfferObjectAddMessageResponseFormGroup() {
		return new FormGroup<OfferObjectAddMessageResponseFormProperties>({
		});

	}

	export interface OfferObjectListResponse {
		pagination?: Pagination;

		/** Resources corresponding to the list request. */
		resources?: Array<OfferObject>;
	}
	export interface OfferObjectListResponseFormProperties {
	}
	export function CreateOfferObjectListResponseFormGroup() {
		return new FormGroup<OfferObjectListResponseFormProperties>({
		});

	}

	export interface Permission {

		/** The email address of the user, group, or service account to which this permission refers to. */
		emailAddress?: string | null;

		/** The role granted by this permission. */
		role?: PermissionRole | null;
	}
	export interface PermissionFormProperties {

		/** The email address of the user, group, or service account to which this permission refers to. */
		emailAddress: FormControl<string | null | undefined>,

		/** The role granted by this permission. */
		role: FormControl<PermissionRole | null | undefined>,
	}
	export function CreatePermissionFormGroup() {
		return new FormGroup<PermissionFormProperties>({
			emailAddress: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<PermissionRole | null | undefined>(undefined),
		});

	}

	export enum PermissionRole { ROLE_UNSPECIFIED = 'ROLE_UNSPECIFIED', OWNER = 'OWNER', owner = 'owner', READER = 'READER', reader = 'reader', WRITER = 'WRITER', writer = 'writer' }

	export interface Permissions {

		/** ID of the issuer the list of permissions refer to. */
		issuerId?: string | null;

		/** The complete list of permissions for the issuer account. */
		permissions?: Array<Permission>;
	}
	export interface PermissionsFormProperties {

		/** ID of the issuer the list of permissions refer to. */
		issuerId: FormControl<string | null | undefined>,
	}
	export function CreatePermissionsFormGroup() {
		return new FormGroup<PermissionsFormProperties>({
			issuerId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Private data for TextModule. This data will be rendered as a TextModule for a pass. */
	export interface PrivateText {
		body?: LocalizedString;
		header?: LocalizedString;
	}

	/** Private data for TextModule. This data will be rendered as a TextModule for a pass. */
	export interface PrivateTextFormProperties {
	}
	export function CreatePrivateTextFormGroup() {
		return new FormGroup<PrivateTextFormProperties>({
		});

	}


	/** Private data for LinkModule. This data will be rendered as the LinkModule for a pass. */
	export interface PrivateUri {
		description?: LocalizedString;

		/** The location of a web page, image, or other resource. URIs in the `LinksModuleData` can have different prefixes indicating the type of URI (a link to a web page, a link to a map, a telephone number, or an email address). */
		uri?: string | null;
	}

	/** Private data for LinkModule. This data will be rendered as the LinkModule for a pass. */
	export interface PrivateUriFormProperties {

		/** The location of a web page, image, or other resource. URIs in the `LinksModuleData` can have different prefixes indicating the type of URI (a link to a web page, a link to a map, a telephone number, or an email address). */
		uri: FormControl<string | null | undefined>,
	}
	export function CreatePrivateUriFormGroup() {
		return new FormGroup<PrivateUriFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to send a private pass update notice information to Google, so that devices can then fetch the notice prompting the user to update a pass. */
	export interface SetPassUpdateNoticeRequest {
	}

	/** Request to send a private pass update notice information to Google, so that devices can then fetch the notice prompting the user to update a pass. */
	export interface SetPassUpdateNoticeRequestFormProperties {
	}
	export function CreateSetPassUpdateNoticeRequestFormGroup() {
		return new FormGroup<SetPassUpdateNoticeRequestFormProperties>({
		});

	}


	/** A response to a request to notify Google of an awaiting update to a private pass. */
	export interface SetPassUpdateNoticeResponse {
	}

	/** A response to a request to notify Google of an awaiting update to a private pass. */
	export interface SetPassUpdateNoticeResponseFormProperties {
	}
	export function CreateSetPassUpdateNoticeResponseFormGroup() {
		return new FormGroup<SetPassUpdateNoticeResponseFormProperties>({
		});

	}

	export interface SmartTap {

		/** The unique identifier for a smart tap. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is the Smart Tap id. The Smart Tap id is a Base64 encoded string which represents the id which was generated by the Google Pay app. */
		id?: string | null;

		/** Communication from merchant to user. */
		infos?: Array<IssuerToUserInfo>;

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#smartTap"`. */
		kind?: string | null;

		/** Smart Tap merchant ID of who engaged in the Smart Tap interaction. */
		merchantId?: string | null;
	}
	export interface SmartTapFormProperties {

		/** The unique identifier for a smart tap. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is the Smart Tap id. The Smart Tap id is a Base64 encoded string which represents the id which was generated by the Google Pay app. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string `"walletobjects#smartTap"`. */
		kind: FormControl<string | null | undefined>,

		/** Smart Tap merchant ID of who engaged in the Smart Tap interaction. */
		merchantId: FormControl<string | null | undefined>,
	}
	export function CreateSmartTapFormGroup() {
		return new FormGroup<SmartTapFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			merchantId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TransitClassAddMessageResponse {
		resource?: TransitClass;
	}
	export interface TransitClassAddMessageResponseFormProperties {
	}
	export function CreateTransitClassAddMessageResponseFormGroup() {
		return new FormGroup<TransitClassAddMessageResponseFormProperties>({
		});

	}

	export interface TransitClassListResponse {
		pagination?: Pagination;

		/** Resources corresponding to the list request. */
		resources?: Array<TransitClass>;
	}
	export interface TransitClassListResponseFormProperties {
	}
	export function CreateTransitClassListResponseFormGroup() {
		return new FormGroup<TransitClassListResponseFormProperties>({
		});

	}

	export interface TransitObjectAddMessageResponse {
		resource?: TransitObject;
	}
	export interface TransitObjectAddMessageResponseFormProperties {
	}
	export function CreateTransitObjectAddMessageResponseFormGroup() {
		return new FormGroup<TransitObjectAddMessageResponseFormProperties>({
		});

	}

	export interface TransitObjectListResponse {
		pagination?: Pagination;

		/** Resources corresponding to the list request. */
		resources?: Array<TransitObject>;
	}
	export interface TransitObjectListResponseFormProperties {
	}
	export function CreateTransitObjectListResponseFormGroup() {
		return new FormGroup<TransitObjectListResponseFormProperties>({
		});

	}


	/** Request to upload rotating barcode values. */
	export interface TransitObjectUploadRotatingBarcodeValuesRequest {

		/** A reference to data stored on the filesystem, on GFS or in blobstore. */
		blob?: Media;

		/** Extra information added to operations that support Scotty media requests. */
		mediaRequestInfo?: MediaRequestInfo;
	}

	/** Request to upload rotating barcode values. */
	export interface TransitObjectUploadRotatingBarcodeValuesRequestFormProperties {
	}
	export function CreateTransitObjectUploadRotatingBarcodeValuesRequestFormGroup() {
		return new FormGroup<TransitObjectUploadRotatingBarcodeValuesRequestFormProperties>({
		});

	}


	/** Response for uploading rotating barcode values. */
	export interface TransitObjectUploadRotatingBarcodeValuesResponse {
	}

	/** Response for uploading rotating barcode values. */
	export interface TransitObjectUploadRotatingBarcodeValuesResponseFormProperties {
	}
	export function CreateTransitObjectUploadRotatingBarcodeValuesResponseFormGroup() {
		return new FormGroup<TransitObjectUploadRotatingBarcodeValuesResponseFormProperties>({
		});

	}


	/** Request for sending user private Text or URI by the Issuer. */
	export interface UploadPrivateDataRequest {

		/** The ID of the issuer sending the data. */
		issuerId?: string | null;

		/** Private data for TextModule. This data will be rendered as a TextModule for a pass. */
		text?: PrivateText;

		/** Private data for LinkModule. This data will be rendered as the LinkModule for a pass. */
		uri?: PrivateUri;
	}

	/** Request for sending user private Text or URI by the Issuer. */
	export interface UploadPrivateDataRequestFormProperties {

		/** The ID of the issuer sending the data. */
		issuerId: FormControl<string | null | undefined>,
	}
	export function CreateUploadPrivateDataRequestFormGroup() {
		return new FormGroup<UploadPrivateDataRequestFormProperties>({
			issuerId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for uploading user private data (text or URIs) */
	export interface UploadPrivateDataResponse {

		/** A 64-bit content id for the private data that was uploaded by the Issuer. */
		privateContentId?: string | null;
	}

	/** Response for uploading user private data (text or URIs) */
	export interface UploadPrivateDataResponseFormProperties {

		/** A 64-bit content id for the private data that was uploaded by the Issuer. */
		privateContentId: FormControl<string | null | undefined>,
	}
	export function CreateUploadPrivateDataResponseFormGroup() {
		return new FormGroup<UploadPrivateDataResponseFormProperties>({
			privateContentId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to upload user's private images by Issuers to be used in passes. */
	export interface UploadPrivateImageRequest {

		/** A reference to data stored on the filesystem, on GFS or in blobstore. */
		blob?: Media;

		/** Extra information added to operations that support Scotty media requests. */
		mediaRequestInfo?: MediaRequestInfo;
	}

	/** Request to upload user's private images by Issuers to be used in passes. */
	export interface UploadPrivateImageRequestFormProperties {
	}
	export function CreateUploadPrivateImageRequestFormGroup() {
		return new FormGroup<UploadPrivateImageRequestFormProperties>({
		});

	}


	/** Response for uploading the private image */
	export interface UploadPrivateImageResponse {

		/** A 64-bit content id for the image that was uploaded by the Issuer. */
		privateContentId?: string | null;
	}

	/** Response for uploading the private image */
	export interface UploadPrivateImageResponseFormProperties {

		/** A 64-bit content id for the image that was uploaded by the Issuer. */
		privateContentId: FormControl<string | null | undefined>,
	}
	export function CreateUploadPrivateImageResponseFormGroup() {
		return new FormGroup<UploadPrivateImageResponseFormProperties>({
			privateContentId: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a list of all event ticket classes for a given issuer ID.
		 * Get walletobjects/v1/eventTicketClass
		 * @param {string} issuerId The ID of the issuer authorized to list classes.
		 * @param {number} maxResults Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
		 * @param {string} token Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes.
		 * @return {EventTicketClassListResponse} Successful response
		 */
		Walletobjects_eventticketclass_list(issuerId: string | null | undefined, maxResults: number | null | undefined, token: string | null | undefined): Observable<EventTicketClassListResponse> {
			return this.http.get<EventTicketClassListResponse>(this.baseUri + 'walletobjects/v1/eventTicketClass?issuerId=' + (issuerId == null ? '' : encodeURIComponent(issuerId)) + '&maxResults=' + maxResults + '&token=' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Inserts an event ticket class with the given ID and properties.
		 * Post walletobjects/v1/eventTicketClass
		 * @return {EventTicketClass} Successful response
		 */
		Walletobjects_eventticketclass_insert(requestBody: EventTicketClass): Observable<EventTicketClass> {
			return this.http.post<EventTicketClass>(this.baseUri + 'walletobjects/v1/eventTicketClass', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the event ticket class with the given class ID.
		 * Get walletobjects/v1/eventTicketClass/{resourceId}
		 * @param {string} resourceId The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {EventTicketClass} Successful response
		 */
		Walletobjects_eventticketclass_get(resourceId: string): Observable<EventTicketClass> {
			return this.http.get<EventTicketClass>(this.baseUri + 'walletobjects/v1/eventTicketClass/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), {});
		}

		/**
		 * Updates the event ticket class referenced by the given class ID. This method supports patch semantics.
		 * Patch walletobjects/v1/eventTicketClass/{resourceId}
		 * @param {string} resourceId The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {EventTicketClass} Successful response
		 */
		Walletobjects_eventticketclass_patch(resourceId: string, requestBody: EventTicketClass): Observable<EventTicketClass> {
			return this.http.patch<EventTicketClass>(this.baseUri + 'walletobjects/v1/eventTicketClass/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the event ticket class referenced by the given class ID.
		 * Put walletobjects/v1/eventTicketClass/{resourceId}
		 * @param {string} resourceId The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {EventTicketClass} Successful response
		 */
		Walletobjects_eventticketclass_update(resourceId: string, requestBody: EventTicketClass): Observable<EventTicketClass> {
			return this.http.put<EventTicketClass>(this.baseUri + 'walletobjects/v1/eventTicketClass/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds a message to the event ticket class referenced by the given class ID.
		 * Post walletobjects/v1/eventTicketClass/{resourceId}/addMessage
		 * @param {string} resourceId The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {EventTicketClassAddMessageResponse} Successful response
		 */
		Walletobjects_eventticketclass_addmessage(resourceId: string, requestBody: AddMessageRequest): Observable<EventTicketClassAddMessageResponse> {
			return this.http.post<EventTicketClassAddMessageResponse>(this.baseUri + 'walletobjects/v1/eventTicketClass/' + (resourceId == null ? '' : encodeURIComponent(resourceId)) + '/addMessage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all event ticket objects for a given issuer ID.
		 * Get walletobjects/v1/eventTicketObject
		 * @param {string} classId The ID of the class whose objects will be listed.
		 * @param {number} maxResults Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
		 * @param {string} token Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects.
		 * @return {EventTicketObjectListResponse} Successful response
		 */
		Walletobjects_eventticketobject_list(classId: string | null | undefined, maxResults: number | null | undefined, token: string | null | undefined): Observable<EventTicketObjectListResponse> {
			return this.http.get<EventTicketObjectListResponse>(this.baseUri + 'walletobjects/v1/eventTicketObject?classId=' + (classId == null ? '' : encodeURIComponent(classId)) + '&maxResults=' + maxResults + '&token=' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Inserts an event ticket object with the given ID and properties.
		 * Post walletobjects/v1/eventTicketObject
		 * @return {EventTicketObject} Successful response
		 */
		Walletobjects_eventticketobject_insert(requestBody: EventTicketObject): Observable<EventTicketObject> {
			return this.http.post<EventTicketObject>(this.baseUri + 'walletobjects/v1/eventTicketObject', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the event ticket object with the given object ID.
		 * Get walletobjects/v1/eventTicketObject/{resourceId}
		 * @param {string} resourceId The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {EventTicketObject} Successful response
		 */
		Walletobjects_eventticketobject_get(resourceId: string): Observable<EventTicketObject> {
			return this.http.get<EventTicketObject>(this.baseUri + 'walletobjects/v1/eventTicketObject/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), {});
		}

		/**
		 * Updates the event ticket object referenced by the given object ID. This method supports patch semantics.
		 * Patch walletobjects/v1/eventTicketObject/{resourceId}
		 * @param {string} resourceId The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {EventTicketObject} Successful response
		 */
		Walletobjects_eventticketobject_patch(resourceId: string, requestBody: EventTicketObject): Observable<EventTicketObject> {
			return this.http.patch<EventTicketObject>(this.baseUri + 'walletobjects/v1/eventTicketObject/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the event ticket object referenced by the given object ID.
		 * Put walletobjects/v1/eventTicketObject/{resourceId}
		 * @param {string} resourceId The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {EventTicketObject} Successful response
		 */
		Walletobjects_eventticketobject_update(resourceId: string, requestBody: EventTicketObject): Observable<EventTicketObject> {
			return this.http.put<EventTicketObject>(this.baseUri + 'walletobjects/v1/eventTicketObject/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds a message to the event ticket object referenced by the given object ID.
		 * Post walletobjects/v1/eventTicketObject/{resourceId}/addMessage
		 * @param {string} resourceId The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {EventTicketObjectAddMessageResponse} Successful response
		 */
		Walletobjects_eventticketobject_addmessage(resourceId: string, requestBody: AddMessageRequest): Observable<EventTicketObjectAddMessageResponse> {
			return this.http.post<EventTicketObjectAddMessageResponse>(this.baseUri + 'walletobjects/v1/eventTicketObject/' + (resourceId == null ? '' : encodeURIComponent(resourceId)) + '/addMessage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies linked offer objects for the event ticket object with the given ID.
		 * Post walletobjects/v1/eventTicketObject/{resourceId}/modifyLinkedOfferObjects
		 * @param {string} resourceId The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {EventTicketObject} Successful response
		 */
		Walletobjects_eventticketobject_modifylinkedofferobjects(resourceId: string, requestBody: ModifyLinkedOfferObjectsRequest): Observable<EventTicketObject> {
			return this.http.post<EventTicketObject>(this.baseUri + 'walletobjects/v1/eventTicketObject/' + (resourceId == null ? '' : encodeURIComponent(resourceId)) + '/modifyLinkedOfferObjects', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all flight classes for a given issuer ID.
		 * Get walletobjects/v1/flightClass
		 * @param {string} issuerId The ID of the issuer authorized to list classes.
		 * @param {number} maxResults Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
		 * @param {string} token Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes.
		 * @return {FlightClassListResponse} Successful response
		 */
		Walletobjects_flightclass_list(issuerId: string | null | undefined, maxResults: number | null | undefined, token: string | null | undefined): Observable<FlightClassListResponse> {
			return this.http.get<FlightClassListResponse>(this.baseUri + 'walletobjects/v1/flightClass?issuerId=' + (issuerId == null ? '' : encodeURIComponent(issuerId)) + '&maxResults=' + maxResults + '&token=' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Inserts an flight class with the given ID and properties.
		 * Post walletobjects/v1/flightClass
		 * @return {FlightClass} Successful response
		 */
		Walletobjects_flightclass_insert(requestBody: FlightClass): Observable<FlightClass> {
			return this.http.post<FlightClass>(this.baseUri + 'walletobjects/v1/flightClass', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the flight class with the given class ID.
		 * Get walletobjects/v1/flightClass/{resourceId}
		 * @param {string} resourceId The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {FlightClass} Successful response
		 */
		Walletobjects_flightclass_get(resourceId: string): Observable<FlightClass> {
			return this.http.get<FlightClass>(this.baseUri + 'walletobjects/v1/flightClass/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), {});
		}

		/**
		 * Updates the flight class referenced by the given class ID. This method supports patch semantics.
		 * Patch walletobjects/v1/flightClass/{resourceId}
		 * @param {string} resourceId The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {FlightClass} Successful response
		 */
		Walletobjects_flightclass_patch(resourceId: string, requestBody: FlightClass): Observable<FlightClass> {
			return this.http.patch<FlightClass>(this.baseUri + 'walletobjects/v1/flightClass/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the flight class referenced by the given class ID.
		 * Put walletobjects/v1/flightClass/{resourceId}
		 * @param {string} resourceId The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {FlightClass} Successful response
		 */
		Walletobjects_flightclass_update(resourceId: string, requestBody: FlightClass): Observable<FlightClass> {
			return this.http.put<FlightClass>(this.baseUri + 'walletobjects/v1/flightClass/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds a message to the flight class referenced by the given class ID.
		 * Post walletobjects/v1/flightClass/{resourceId}/addMessage
		 * @param {string} resourceId The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {FlightClassAddMessageResponse} Successful response
		 */
		Walletobjects_flightclass_addmessage(resourceId: string, requestBody: AddMessageRequest): Observable<FlightClassAddMessageResponse> {
			return this.http.post<FlightClassAddMessageResponse>(this.baseUri + 'walletobjects/v1/flightClass/' + (resourceId == null ? '' : encodeURIComponent(resourceId)) + '/addMessage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all flight objects for a given issuer ID.
		 * Get walletobjects/v1/flightObject
		 * @param {string} classId The ID of the class whose objects will be listed.
		 * @param {number} maxResults Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
		 * @param {string} token Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects.
		 * @return {FlightObjectListResponse} Successful response
		 */
		Walletobjects_flightobject_list(classId: string | null | undefined, maxResults: number | null | undefined, token: string | null | undefined): Observable<FlightObjectListResponse> {
			return this.http.get<FlightObjectListResponse>(this.baseUri + 'walletobjects/v1/flightObject?classId=' + (classId == null ? '' : encodeURIComponent(classId)) + '&maxResults=' + maxResults + '&token=' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Inserts an flight object with the given ID and properties.
		 * Post walletobjects/v1/flightObject
		 * @return {FlightObject} Successful response
		 */
		Walletobjects_flightobject_insert(requestBody: FlightObject): Observable<FlightObject> {
			return this.http.post<FlightObject>(this.baseUri + 'walletobjects/v1/flightObject', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the flight object with the given object ID.
		 * Get walletobjects/v1/flightObject/{resourceId}
		 * @param {string} resourceId The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {FlightObject} Successful response
		 */
		Walletobjects_flightobject_get(resourceId: string): Observable<FlightObject> {
			return this.http.get<FlightObject>(this.baseUri + 'walletobjects/v1/flightObject/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), {});
		}

		/**
		 * Updates the flight object referenced by the given object ID. This method supports patch semantics.
		 * Patch walletobjects/v1/flightObject/{resourceId}
		 * @param {string} resourceId The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {FlightObject} Successful response
		 */
		Walletobjects_flightobject_patch(resourceId: string, requestBody: FlightObject): Observable<FlightObject> {
			return this.http.patch<FlightObject>(this.baseUri + 'walletobjects/v1/flightObject/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the flight object referenced by the given object ID.
		 * Put walletobjects/v1/flightObject/{resourceId}
		 * @param {string} resourceId The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {FlightObject} Successful response
		 */
		Walletobjects_flightobject_update(resourceId: string, requestBody: FlightObject): Observable<FlightObject> {
			return this.http.put<FlightObject>(this.baseUri + 'walletobjects/v1/flightObject/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds a message to the flight object referenced by the given object ID.
		 * Post walletobjects/v1/flightObject/{resourceId}/addMessage
		 * @param {string} resourceId The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {FlightObjectAddMessageResponse} Successful response
		 */
		Walletobjects_flightobject_addmessage(resourceId: string, requestBody: AddMessageRequest): Observable<FlightObjectAddMessageResponse> {
			return this.http.post<FlightObjectAddMessageResponse>(this.baseUri + 'walletobjects/v1/flightObject/' + (resourceId == null ? '' : encodeURIComponent(resourceId)) + '/addMessage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all generic classes for a given issuer ID.
		 * Get walletobjects/v1/genericClass
		 * @param {string} issuerId The ID of the issuer authorized to list classes.
		 * @param {number} maxResults Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
		 * @param {string} token Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes.
		 * @return {GenericClassListResponse} Successful response
		 */
		Walletobjects_genericclass_list(issuerId: string | null | undefined, maxResults: number | null | undefined, token: string | null | undefined): Observable<GenericClassListResponse> {
			return this.http.get<GenericClassListResponse>(this.baseUri + 'walletobjects/v1/genericClass?issuerId=' + (issuerId == null ? '' : encodeURIComponent(issuerId)) + '&maxResults=' + maxResults + '&token=' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Inserts a generic class with the given ID and properties.
		 * Post walletobjects/v1/genericClass
		 * @return {GenericClass} Successful response
		 */
		Walletobjects_genericclass_insert(requestBody: GenericClass): Observable<GenericClass> {
			return this.http.post<GenericClass>(this.baseUri + 'walletobjects/v1/genericClass', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the generic class with the given class ID.
		 * Get walletobjects/v1/genericClass/{resourceId}
		 * @param {string} resourceId The unique identifier for a class. This ID must be unique across all classes from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`.
		 * @return {GenericClass} Successful response
		 */
		Walletobjects_genericclass_get(resourceId: string): Observable<GenericClass> {
			return this.http.get<GenericClass>(this.baseUri + 'walletobjects/v1/genericClass/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), {});
		}

		/**
		 * Updates the generic class referenced by the given class ID. This method supports patch semantics.
		 * Patch walletobjects/v1/genericClass/{resourceId}
		 * @param {string} resourceId The unique identifier for a class. This ID must be unique across all classes from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`.
		 * @return {GenericClass} Successful response
		 */
		Walletobjects_genericclass_patch(resourceId: string, requestBody: GenericClass): Observable<GenericClass> {
			return this.http.patch<GenericClass>(this.baseUri + 'walletobjects/v1/genericClass/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the Generic class referenced by the given class ID.
		 * Put walletobjects/v1/genericClass/{resourceId}
		 * @param {string} resourceId The unique identifier for a class. This ID must be unique across all classes from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`.
		 * @return {GenericClass} Successful response
		 */
		Walletobjects_genericclass_update(resourceId: string, requestBody: GenericClass): Observable<GenericClass> {
			return this.http.put<GenericClass>(this.baseUri + 'walletobjects/v1/genericClass/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all generic objects for a given issuer ID.
		 * Get walletobjects/v1/genericObject
		 * @param {string} classId The ID of the class whose objects will be listed.
		 * @param {number} maxResults Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
		 * @param {string} token Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects.
		 * @return {GenericObjectListResponse} Successful response
		 */
		Walletobjects_genericobject_list(classId: string | null | undefined, maxResults: number | null | undefined, token: string | null | undefined): Observable<GenericObjectListResponse> {
			return this.http.get<GenericObjectListResponse>(this.baseUri + 'walletobjects/v1/genericObject?classId=' + (classId == null ? '' : encodeURIComponent(classId)) + '&maxResults=' + maxResults + '&token=' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Inserts a generic object with the given ID and properties.
		 * Post walletobjects/v1/genericObject
		 * @return {GenericObject} Successful response
		 */
		Walletobjects_genericobject_insert(requestBody: GenericObject): Observable<GenericObject> {
			return this.http.post<GenericObject>(this.baseUri + 'walletobjects/v1/genericObject', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the generic object with the given object ID.
		 * Get walletobjects/v1/genericObject/{resourceId}
		 * @param {string} resourceId The unique identifier for an object. This ID must be unique across all objects from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`.
		 * @return {GenericObject} Successful response
		 */
		Walletobjects_genericobject_get(resourceId: string): Observable<GenericObject> {
			return this.http.get<GenericObject>(this.baseUri + 'walletobjects/v1/genericObject/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), {});
		}

		/**
		 * Updates the generic object referenced by the given object ID. This method supports patch semantics.
		 * Patch walletobjects/v1/genericObject/{resourceId}
		 * @param {string} resourceId The unique identifier for an object. This ID must be unique across all objects from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`.
		 * @return {GenericObject} Successful response
		 */
		Walletobjects_genericobject_patch(resourceId: string, requestBody: GenericObject): Observable<GenericObject> {
			return this.http.patch<GenericObject>(this.baseUri + 'walletobjects/v1/genericObject/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the generic object referenced by the given object ID.
		 * Put walletobjects/v1/genericObject/{resourceId}
		 * @param {string} resourceId The unique identifier for an object. This ID must be unique across all objects from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`.
		 * @return {GenericObject} Successful response
		 */
		Walletobjects_genericobject_update(resourceId: string, requestBody: GenericObject): Observable<GenericObject> {
			return this.http.put<GenericObject>(this.baseUri + 'walletobjects/v1/genericObject/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all gift card classes for a given issuer ID.
		 * Get walletobjects/v1/giftCardClass
		 * @param {string} issuerId The ID of the issuer authorized to list classes.
		 * @param {number} maxResults Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
		 * @param {string} token Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes.
		 * @return {GiftCardClassListResponse} Successful response
		 */
		Walletobjects_giftcardclass_list(issuerId: string | null | undefined, maxResults: number | null | undefined, token: string | null | undefined): Observable<GiftCardClassListResponse> {
			return this.http.get<GiftCardClassListResponse>(this.baseUri + 'walletobjects/v1/giftCardClass?issuerId=' + (issuerId == null ? '' : encodeURIComponent(issuerId)) + '&maxResults=' + maxResults + '&token=' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Inserts an gift card class with the given ID and properties.
		 * Post walletobjects/v1/giftCardClass
		 * @return {GiftCardClass} Successful response
		 */
		Walletobjects_giftcardclass_insert(requestBody: GiftCardClass): Observable<GiftCardClass> {
			return this.http.post<GiftCardClass>(this.baseUri + 'walletobjects/v1/giftCardClass', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the gift card class with the given class ID.
		 * Get walletobjects/v1/giftCardClass/{resourceId}
		 * @param {string} resourceId The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {GiftCardClass} Successful response
		 */
		Walletobjects_giftcardclass_get(resourceId: string): Observable<GiftCardClass> {
			return this.http.get<GiftCardClass>(this.baseUri + 'walletobjects/v1/giftCardClass/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), {});
		}

		/**
		 * Updates the gift card class referenced by the given class ID. This method supports patch semantics.
		 * Patch walletobjects/v1/giftCardClass/{resourceId}
		 * @param {string} resourceId The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {GiftCardClass} Successful response
		 */
		Walletobjects_giftcardclass_patch(resourceId: string, requestBody: GiftCardClass): Observable<GiftCardClass> {
			return this.http.patch<GiftCardClass>(this.baseUri + 'walletobjects/v1/giftCardClass/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the gift card class referenced by the given class ID.
		 * Put walletobjects/v1/giftCardClass/{resourceId}
		 * @param {string} resourceId The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {GiftCardClass} Successful response
		 */
		Walletobjects_giftcardclass_update(resourceId: string, requestBody: GiftCardClass): Observable<GiftCardClass> {
			return this.http.put<GiftCardClass>(this.baseUri + 'walletobjects/v1/giftCardClass/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds a message to the gift card class referenced by the given class ID.
		 * Post walletobjects/v1/giftCardClass/{resourceId}/addMessage
		 * @param {string} resourceId The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {GiftCardClassAddMessageResponse} Successful response
		 */
		Walletobjects_giftcardclass_addmessage(resourceId: string, requestBody: AddMessageRequest): Observable<GiftCardClassAddMessageResponse> {
			return this.http.post<GiftCardClassAddMessageResponse>(this.baseUri + 'walletobjects/v1/giftCardClass/' + (resourceId == null ? '' : encodeURIComponent(resourceId)) + '/addMessage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all gift card objects for a given issuer ID.
		 * Get walletobjects/v1/giftCardObject
		 * @param {string} classId The ID of the class whose objects will be listed.
		 * @param {number} maxResults Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
		 * @param {string} token Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects.
		 * @return {GiftCardObjectListResponse} Successful response
		 */
		Walletobjects_giftcardobject_list(classId: string | null | undefined, maxResults: number | null | undefined, token: string | null | undefined): Observable<GiftCardObjectListResponse> {
			return this.http.get<GiftCardObjectListResponse>(this.baseUri + 'walletobjects/v1/giftCardObject?classId=' + (classId == null ? '' : encodeURIComponent(classId)) + '&maxResults=' + maxResults + '&token=' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Inserts an gift card object with the given ID and properties.
		 * Post walletobjects/v1/giftCardObject
		 * @return {GiftCardObject} Successful response
		 */
		Walletobjects_giftcardobject_insert(requestBody: GiftCardObject): Observable<GiftCardObject> {
			return this.http.post<GiftCardObject>(this.baseUri + 'walletobjects/v1/giftCardObject', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the gift card object with the given object ID.
		 * Get walletobjects/v1/giftCardObject/{resourceId}
		 * @param {string} resourceId The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {GiftCardObject} Successful response
		 */
		Walletobjects_giftcardobject_get(resourceId: string): Observable<GiftCardObject> {
			return this.http.get<GiftCardObject>(this.baseUri + 'walletobjects/v1/giftCardObject/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), {});
		}

		/**
		 * Updates the gift card object referenced by the given object ID. This method supports patch semantics.
		 * Patch walletobjects/v1/giftCardObject/{resourceId}
		 * @param {string} resourceId The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {GiftCardObject} Successful response
		 */
		Walletobjects_giftcardobject_patch(resourceId: string, requestBody: GiftCardObject): Observable<GiftCardObject> {
			return this.http.patch<GiftCardObject>(this.baseUri + 'walletobjects/v1/giftCardObject/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the gift card object referenced by the given object ID.
		 * Put walletobjects/v1/giftCardObject/{resourceId}
		 * @param {string} resourceId The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {GiftCardObject} Successful response
		 */
		Walletobjects_giftcardobject_update(resourceId: string, requestBody: GiftCardObject): Observable<GiftCardObject> {
			return this.http.put<GiftCardObject>(this.baseUri + 'walletobjects/v1/giftCardObject/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds a message to the gift card object referenced by the given object ID.
		 * Post walletobjects/v1/giftCardObject/{resourceId}/addMessage
		 * @param {string} resourceId The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {GiftCardObjectAddMessageResponse} Successful response
		 */
		Walletobjects_giftcardobject_addmessage(resourceId: string, requestBody: AddMessageRequest): Observable<GiftCardObjectAddMessageResponse> {
			return this.http.post<GiftCardObjectAddMessageResponse>(this.baseUri + 'walletobjects/v1/giftCardObject/' + (resourceId == null ? '' : encodeURIComponent(resourceId)) + '/addMessage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all issuers shared to the caller.
		 * Get walletobjects/v1/issuer
		 * @return {IssuerListResponse} Successful response
		 */
		Walletobjects_issuer_list(): Observable<IssuerListResponse> {
			return this.http.get<IssuerListResponse>(this.baseUri + 'walletobjects/v1/issuer', {});
		}

		/**
		 * Inserts an issuer with the given ID and properties.
		 * Post walletobjects/v1/issuer
		 * @return {Issuer} Successful response
		 */
		Walletobjects_issuer_insert(requestBody: Issuer): Observable<Issuer> {
			return this.http.post<Issuer>(this.baseUri + 'walletobjects/v1/issuer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the issuer with the given issuer ID.
		 * Get walletobjects/v1/issuer/{resourceId}
		 * @param {string} resourceId The unique identifier for an issuer.
		 * @return {Issuer} Successful response
		 */
		Walletobjects_issuer_get(resourceId: string): Observable<Issuer> {
			return this.http.get<Issuer>(this.baseUri + 'walletobjects/v1/issuer/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), {});
		}

		/**
		 * Updates the issuer referenced by the given issuer ID. This method supports patch semantics.
		 * Patch walletobjects/v1/issuer/{resourceId}
		 * @param {string} resourceId The unique identifier for an issuer.
		 * @return {Issuer} Successful response
		 */
		Walletobjects_issuer_patch(resourceId: string, requestBody: Issuer): Observable<Issuer> {
			return this.http.patch<Issuer>(this.baseUri + 'walletobjects/v1/issuer/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the issuer referenced by the given issuer ID.
		 * Put walletobjects/v1/issuer/{resourceId}
		 * @param {string} resourceId The unique identifier for an issuer.
		 * @return {Issuer} Successful response
		 */
		Walletobjects_issuer_update(resourceId: string, requestBody: Issuer): Observable<Issuer> {
			return this.http.put<Issuer>(this.baseUri + 'walletobjects/v1/issuer/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Inserts the resources in the JWT.
		 * Post walletobjects/v1/jwt
		 * @return {JwtInsertResponse} Successful response
		 */
		Walletobjects_jwt_insert(requestBody: JwtResource): Observable<JwtInsertResponse> {
			return this.http.post<JwtInsertResponse>(this.baseUri + 'walletobjects/v1/jwt', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all loyalty classes for a given issuer ID.
		 * Get walletobjects/v1/loyaltyClass
		 * @param {string} issuerId The ID of the issuer authorized to list classes.
		 * @param {number} maxResults Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
		 * @param {string} token Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes.
		 * @return {LoyaltyClassListResponse} Successful response
		 */
		Walletobjects_loyaltyclass_list(issuerId: string | null | undefined, maxResults: number | null | undefined, token: string | null | undefined): Observable<LoyaltyClassListResponse> {
			return this.http.get<LoyaltyClassListResponse>(this.baseUri + 'walletobjects/v1/loyaltyClass?issuerId=' + (issuerId == null ? '' : encodeURIComponent(issuerId)) + '&maxResults=' + maxResults + '&token=' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Inserts an loyalty class with the given ID and properties.
		 * Post walletobjects/v1/loyaltyClass
		 * @return {LoyaltyClass} Successful response
		 */
		Walletobjects_loyaltyclass_insert(requestBody: LoyaltyClass): Observable<LoyaltyClass> {
			return this.http.post<LoyaltyClass>(this.baseUri + 'walletobjects/v1/loyaltyClass', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the loyalty class with the given class ID.
		 * Get walletobjects/v1/loyaltyClass/{resourceId}
		 * @param {string} resourceId The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {LoyaltyClass} Successful response
		 */
		Walletobjects_loyaltyclass_get(resourceId: string): Observable<LoyaltyClass> {
			return this.http.get<LoyaltyClass>(this.baseUri + 'walletobjects/v1/loyaltyClass/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), {});
		}

		/**
		 * Updates the loyalty class referenced by the given class ID. This method supports patch semantics.
		 * Patch walletobjects/v1/loyaltyClass/{resourceId}
		 * @param {string} resourceId The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {LoyaltyClass} Successful response
		 */
		Walletobjects_loyaltyclass_patch(resourceId: string, requestBody: LoyaltyClass): Observable<LoyaltyClass> {
			return this.http.patch<LoyaltyClass>(this.baseUri + 'walletobjects/v1/loyaltyClass/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the loyalty class referenced by the given class ID.
		 * Put walletobjects/v1/loyaltyClass/{resourceId}
		 * @param {string} resourceId The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {LoyaltyClass} Successful response
		 */
		Walletobjects_loyaltyclass_update(resourceId: string, requestBody: LoyaltyClass): Observable<LoyaltyClass> {
			return this.http.put<LoyaltyClass>(this.baseUri + 'walletobjects/v1/loyaltyClass/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds a message to the loyalty class referenced by the given class ID.
		 * Post walletobjects/v1/loyaltyClass/{resourceId}/addMessage
		 * @param {string} resourceId The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {LoyaltyClassAddMessageResponse} Successful response
		 */
		Walletobjects_loyaltyclass_addmessage(resourceId: string, requestBody: AddMessageRequest): Observable<LoyaltyClassAddMessageResponse> {
			return this.http.post<LoyaltyClassAddMessageResponse>(this.baseUri + 'walletobjects/v1/loyaltyClass/' + (resourceId == null ? '' : encodeURIComponent(resourceId)) + '/addMessage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all loyalty objects for a given issuer ID.
		 * Get walletobjects/v1/loyaltyObject
		 * @param {string} classId The ID of the class whose objects will be listed.
		 * @param {number} maxResults Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
		 * @param {string} token Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects.
		 * @return {LoyaltyObjectListResponse} Successful response
		 */
		Walletobjects_loyaltyobject_list(classId: string | null | undefined, maxResults: number | null | undefined, token: string | null | undefined): Observable<LoyaltyObjectListResponse> {
			return this.http.get<LoyaltyObjectListResponse>(this.baseUri + 'walletobjects/v1/loyaltyObject?classId=' + (classId == null ? '' : encodeURIComponent(classId)) + '&maxResults=' + maxResults + '&token=' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Inserts an loyalty object with the given ID and properties.
		 * Post walletobjects/v1/loyaltyObject
		 * @return {LoyaltyObject} Successful response
		 */
		Walletobjects_loyaltyobject_insert(requestBody: LoyaltyObject): Observable<LoyaltyObject> {
			return this.http.post<LoyaltyObject>(this.baseUri + 'walletobjects/v1/loyaltyObject', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the loyalty object with the given object ID.
		 * Get walletobjects/v1/loyaltyObject/{resourceId}
		 * @param {string} resourceId The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {LoyaltyObject} Successful response
		 */
		Walletobjects_loyaltyobject_get(resourceId: string): Observable<LoyaltyObject> {
			return this.http.get<LoyaltyObject>(this.baseUri + 'walletobjects/v1/loyaltyObject/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), {});
		}

		/**
		 * Updates the loyalty object referenced by the given object ID. This method supports patch semantics.
		 * Patch walletobjects/v1/loyaltyObject/{resourceId}
		 * @param {string} resourceId The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {LoyaltyObject} Successful response
		 */
		Walletobjects_loyaltyobject_patch(resourceId: string, requestBody: LoyaltyObject): Observable<LoyaltyObject> {
			return this.http.patch<LoyaltyObject>(this.baseUri + 'walletobjects/v1/loyaltyObject/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the loyalty object referenced by the given object ID.
		 * Put walletobjects/v1/loyaltyObject/{resourceId}
		 * @param {string} resourceId The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {LoyaltyObject} Successful response
		 */
		Walletobjects_loyaltyobject_update(resourceId: string, requestBody: LoyaltyObject): Observable<LoyaltyObject> {
			return this.http.put<LoyaltyObject>(this.baseUri + 'walletobjects/v1/loyaltyObject/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds a message to the loyalty object referenced by the given object ID.
		 * Post walletobjects/v1/loyaltyObject/{resourceId}/addMessage
		 * @param {string} resourceId The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {LoyaltyObjectAddMessageResponse} Successful response
		 */
		Walletobjects_loyaltyobject_addmessage(resourceId: string, requestBody: AddMessageRequest): Observable<LoyaltyObjectAddMessageResponse> {
			return this.http.post<LoyaltyObjectAddMessageResponse>(this.baseUri + 'walletobjects/v1/loyaltyObject/' + (resourceId == null ? '' : encodeURIComponent(resourceId)) + '/addMessage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies linked offer objects for the loyalty object with the given ID.
		 * Post walletobjects/v1/loyaltyObject/{resourceId}/modifyLinkedOfferObjects
		 * @param {string} resourceId The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {LoyaltyObject} Successful response
		 */
		Walletobjects_loyaltyobject_modifylinkedofferobjects(resourceId: string, requestBody: ModifyLinkedOfferObjectsRequest): Observable<LoyaltyObject> {
			return this.http.post<LoyaltyObject>(this.baseUri + 'walletobjects/v1/loyaltyObject/' + (resourceId == null ? '' : encodeURIComponent(resourceId)) + '/modifyLinkedOfferObjects', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all offer classes for a given issuer ID.
		 * Get walletobjects/v1/offerClass
		 * @param {string} issuerId The ID of the issuer authorized to list classes.
		 * @param {number} maxResults Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
		 * @param {string} token Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes.
		 * @return {OfferClassListResponse} Successful response
		 */
		Walletobjects_offerclass_list(issuerId: string | null | undefined, maxResults: number | null | undefined, token: string | null | undefined): Observable<OfferClassListResponse> {
			return this.http.get<OfferClassListResponse>(this.baseUri + 'walletobjects/v1/offerClass?issuerId=' + (issuerId == null ? '' : encodeURIComponent(issuerId)) + '&maxResults=' + maxResults + '&token=' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Inserts an offer class with the given ID and properties.
		 * Post walletobjects/v1/offerClass
		 * @return {OfferClass} Successful response
		 */
		Walletobjects_offerclass_insert(requestBody: OfferClass): Observable<OfferClass> {
			return this.http.post<OfferClass>(this.baseUri + 'walletobjects/v1/offerClass', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the offer class with the given class ID.
		 * Get walletobjects/v1/offerClass/{resourceId}
		 * @param {string} resourceId The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {OfferClass} Successful response
		 */
		Walletobjects_offerclass_get(resourceId: string): Observable<OfferClass> {
			return this.http.get<OfferClass>(this.baseUri + 'walletobjects/v1/offerClass/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), {});
		}

		/**
		 * Updates the offer class referenced by the given class ID. This method supports patch semantics.
		 * Patch walletobjects/v1/offerClass/{resourceId}
		 * @param {string} resourceId The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {OfferClass} Successful response
		 */
		Walletobjects_offerclass_patch(resourceId: string, requestBody: OfferClass): Observable<OfferClass> {
			return this.http.patch<OfferClass>(this.baseUri + 'walletobjects/v1/offerClass/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the offer class referenced by the given class ID.
		 * Put walletobjects/v1/offerClass/{resourceId}
		 * @param {string} resourceId The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {OfferClass} Successful response
		 */
		Walletobjects_offerclass_update(resourceId: string, requestBody: OfferClass): Observable<OfferClass> {
			return this.http.put<OfferClass>(this.baseUri + 'walletobjects/v1/offerClass/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds a message to the offer class referenced by the given class ID.
		 * Post walletobjects/v1/offerClass/{resourceId}/addMessage
		 * @param {string} resourceId The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {OfferClassAddMessageResponse} Successful response
		 */
		Walletobjects_offerclass_addmessage(resourceId: string, requestBody: AddMessageRequest): Observable<OfferClassAddMessageResponse> {
			return this.http.post<OfferClassAddMessageResponse>(this.baseUri + 'walletobjects/v1/offerClass/' + (resourceId == null ? '' : encodeURIComponent(resourceId)) + '/addMessage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all offer objects for a given issuer ID.
		 * Get walletobjects/v1/offerObject
		 * @param {string} classId The ID of the class whose objects will be listed.
		 * @param {number} maxResults Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
		 * @param {string} token Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects.
		 * @return {OfferObjectListResponse} Successful response
		 */
		Walletobjects_offerobject_list(classId: string | null | undefined, maxResults: number | null | undefined, token: string | null | undefined): Observable<OfferObjectListResponse> {
			return this.http.get<OfferObjectListResponse>(this.baseUri + 'walletobjects/v1/offerObject?classId=' + (classId == null ? '' : encodeURIComponent(classId)) + '&maxResults=' + maxResults + '&token=' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Inserts an offer object with the given ID and properties.
		 * Post walletobjects/v1/offerObject
		 * @return {OfferObject} Successful response
		 */
		Walletobjects_offerobject_insert(requestBody: OfferObject): Observable<OfferObject> {
			return this.http.post<OfferObject>(this.baseUri + 'walletobjects/v1/offerObject', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the offer object with the given object ID.
		 * Get walletobjects/v1/offerObject/{resourceId}
		 * @param {string} resourceId The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {OfferObject} Successful response
		 */
		Walletobjects_offerobject_get(resourceId: string): Observable<OfferObject> {
			return this.http.get<OfferObject>(this.baseUri + 'walletobjects/v1/offerObject/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), {});
		}

		/**
		 * Updates the offer object referenced by the given object ID. This method supports patch semantics.
		 * Patch walletobjects/v1/offerObject/{resourceId}
		 * @param {string} resourceId The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {OfferObject} Successful response
		 */
		Walletobjects_offerobject_patch(resourceId: string, requestBody: OfferObject): Observable<OfferObject> {
			return this.http.patch<OfferObject>(this.baseUri + 'walletobjects/v1/offerObject/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the offer object referenced by the given object ID.
		 * Put walletobjects/v1/offerObject/{resourceId}
		 * @param {string} resourceId The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {OfferObject} Successful response
		 */
		Walletobjects_offerobject_update(resourceId: string, requestBody: OfferObject): Observable<OfferObject> {
			return this.http.put<OfferObject>(this.baseUri + 'walletobjects/v1/offerObject/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds a message to the offer object referenced by the given object ID.
		 * Post walletobjects/v1/offerObject/{resourceId}/addMessage
		 * @param {string} resourceId The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {OfferObjectAddMessageResponse} Successful response
		 */
		Walletobjects_offerobject_addmessage(resourceId: string, requestBody: AddMessageRequest): Observable<OfferObjectAddMessageResponse> {
			return this.http.post<OfferObjectAddMessageResponse>(this.baseUri + 'walletobjects/v1/offerObject/' + (resourceId == null ? '' : encodeURIComponent(resourceId)) + '/addMessage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the permissions for the given issuer id.
		 * Get walletobjects/v1/permissions/{resourceId}
		 * @param {string} resourceId The unique identifier for an issuer. This ID must be unique across all issuers.
		 * @return {Permissions} Successful response
		 */
		Walletobjects_permissions_get(resourceId: string): Observable<Permissions> {
			return this.http.get<Permissions>(this.baseUri + 'walletobjects/v1/permissions/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), {});
		}

		/**
		 * Updates the permissions for the given issuer.
		 * Put walletobjects/v1/permissions/{resourceId}
		 * @param {string} resourceId The unique identifier for an issuer. This ID must be unique across all issuers.
		 * @return {Permissions} Successful response
		 */
		Walletobjects_permissions_update(resourceId: string, requestBody: Permissions): Observable<Permissions> {
			return this.http.put<Permissions>(this.baseUri + 'walletobjects/v1/permissions/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provide Google with information about awaiting private pass update. This will allow Google to provide the update notification to the device that currently holds this pass.
		 * Post walletobjects/v1/privateContent/setPassUpdateNotice
		 * @return {SetPassUpdateNoticeResponse} Successful response
		 */
		Walletobjects_walletobjects_v1_privateContent_setPassUpdateNotice(requestBody: SetPassUpdateNoticeRequest): Observable<SetPassUpdateNoticeResponse> {
			return this.http.post<SetPassUpdateNoticeResponse>(this.baseUri + 'walletobjects/v1/privateContent/setPassUpdateNotice', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Upload private data (text or URI) and returns an Id to be used in its place.
		 * Post walletobjects/v1/privateContent/uploadPrivateData
		 * @return {UploadPrivateDataResponse} Successful response
		 */
		Walletobjects_walletobjects_v1_privateContent_uploadPrivateData(requestBody: UploadPrivateDataRequest): Observable<UploadPrivateDataResponse> {
			return this.http.post<UploadPrivateDataResponse>(this.baseUri + 'walletobjects/v1/privateContent/uploadPrivateData', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Inserts the smart tap.
		 * Post walletobjects/v1/smartTap
		 * @return {SmartTap} Successful response
		 */
		Walletobjects_smarttap_insert(requestBody: SmartTap): Observable<SmartTap> {
			return this.http.post<SmartTap>(this.baseUri + 'walletobjects/v1/smartTap', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all transit classes for a given issuer ID.
		 * Get walletobjects/v1/transitClass
		 * @param {string} issuerId The ID of the issuer authorized to list classes.
		 * @param {number} maxResults Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
		 * @param {string} token Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes.
		 * @return {TransitClassListResponse} Successful response
		 */
		Walletobjects_transitclass_list(issuerId: string | null | undefined, maxResults: number | null | undefined, token: string | null | undefined): Observable<TransitClassListResponse> {
			return this.http.get<TransitClassListResponse>(this.baseUri + 'walletobjects/v1/transitClass?issuerId=' + (issuerId == null ? '' : encodeURIComponent(issuerId)) + '&maxResults=' + maxResults + '&token=' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Inserts a transit class with the given ID and properties.
		 * Post walletobjects/v1/transitClass
		 * @return {TransitClass} Successful response
		 */
		Walletobjects_transitclass_insert(requestBody: TransitClass): Observable<TransitClass> {
			return this.http.post<TransitClass>(this.baseUri + 'walletobjects/v1/transitClass', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the transit class with the given class ID.
		 * Get walletobjects/v1/transitClass/{resourceId}
		 * @param {string} resourceId The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {TransitClass} Successful response
		 */
		Walletobjects_transitclass_get(resourceId: string): Observable<TransitClass> {
			return this.http.get<TransitClass>(this.baseUri + 'walletobjects/v1/transitClass/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), {});
		}

		/**
		 * Updates the transit class referenced by the given class ID. This method supports patch semantics.
		 * Patch walletobjects/v1/transitClass/{resourceId}
		 * @param {string} resourceId The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {TransitClass} Successful response
		 */
		Walletobjects_transitclass_patch(resourceId: string, requestBody: TransitClass): Observable<TransitClass> {
			return this.http.patch<TransitClass>(this.baseUri + 'walletobjects/v1/transitClass/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the transit class referenced by the given class ID.
		 * Put walletobjects/v1/transitClass/{resourceId}
		 * @param {string} resourceId The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {TransitClass} Successful response
		 */
		Walletobjects_transitclass_update(resourceId: string, requestBody: TransitClass): Observable<TransitClass> {
			return this.http.put<TransitClass>(this.baseUri + 'walletobjects/v1/transitClass/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds a message to the transit class referenced by the given class ID.
		 * Post walletobjects/v1/transitClass/{resourceId}/addMessage
		 * @param {string} resourceId The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {TransitClassAddMessageResponse} Successful response
		 */
		Walletobjects_transitclass_addmessage(resourceId: string, requestBody: AddMessageRequest): Observable<TransitClassAddMessageResponse> {
			return this.http.post<TransitClassAddMessageResponse>(this.baseUri + 'walletobjects/v1/transitClass/' + (resourceId == null ? '' : encodeURIComponent(resourceId)) + '/addMessage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all transit objects for a given issuer ID.
		 * Get walletobjects/v1/transitObject
		 * @param {string} classId The ID of the class whose objects will be listed.
		 * @param {number} maxResults Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
		 * @param {string} token Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects.
		 * @return {TransitObjectListResponse} Successful response
		 */
		Walletobjects_transitobject_list(classId: string | null | undefined, maxResults: number | null | undefined, token: string | null | undefined): Observable<TransitObjectListResponse> {
			return this.http.get<TransitObjectListResponse>(this.baseUri + 'walletobjects/v1/transitObject?classId=' + (classId == null ? '' : encodeURIComponent(classId)) + '&maxResults=' + maxResults + '&token=' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Inserts an transit object with the given ID and properties.
		 * Post walletobjects/v1/transitObject
		 * @return {TransitObject} Successful response
		 */
		Walletobjects_transitobject_insert(requestBody: TransitObject): Observable<TransitObject> {
			return this.http.post<TransitObject>(this.baseUri + 'walletobjects/v1/transitObject', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the transit object with the given object ID.
		 * Get walletobjects/v1/transitObject/{resourceId}
		 * @param {string} resourceId The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {TransitObject} Successful response
		 */
		Walletobjects_transitobject_get(resourceId: string): Observable<TransitObject> {
			return this.http.get<TransitObject>(this.baseUri + 'walletobjects/v1/transitObject/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), {});
		}

		/**
		 * Updates the transit object referenced by the given object ID. This method supports patch semantics.
		 * Patch walletobjects/v1/transitObject/{resourceId}
		 * @param {string} resourceId The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {TransitObject} Successful response
		 */
		Walletobjects_transitobject_patch(resourceId: string, requestBody: TransitObject): Observable<TransitObject> {
			return this.http.patch<TransitObject>(this.baseUri + 'walletobjects/v1/transitObject/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the transit object referenced by the given object ID.
		 * Put walletobjects/v1/transitObject/{resourceId}
		 * @param {string} resourceId The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {TransitObject} Successful response
		 */
		Walletobjects_transitobject_update(resourceId: string, requestBody: TransitObject): Observable<TransitObject> {
			return this.http.put<TransitObject>(this.baseUri + 'walletobjects/v1/transitObject/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds a message to the transit object referenced by the given object ID.
		 * Post walletobjects/v1/transitObject/{resourceId}/addMessage
		 * @param {string} resourceId The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {TransitObjectAddMessageResponse} Successful response
		 */
		Walletobjects_transitobject_addmessage(resourceId: string, requestBody: AddMessageRequest): Observable<TransitObjectAddMessageResponse> {
			return this.http.post<TransitObjectAddMessageResponse>(this.baseUri + 'walletobjects/v1/transitObject/' + (resourceId == null ? '' : encodeURIComponent(resourceId)) + '/addMessage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Downloads rotating barcode values for the transit object referenced by the given object ID.
		 * Get walletobjects/v1/transitObject/{resourceId}/downloadRotatingBarcodeValues
		 * @param {string} resourceId The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
		 * @return {Media} Successful response
		 */
		Walletobjects_media_download(resourceId: string): Observable<Media> {
			return this.http.get<Media>(this.baseUri + 'walletobjects/v1/transitObject/' + (resourceId == null ? '' : encodeURIComponent(resourceId)) + '/downloadRotatingBarcodeValues', {});
		}
	}

}

