import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Abschlussbelegdaten {

		/** Required */
		'Abschluss-Beginn-Datum-Uhrzeit': string;

		/** Required */
		'Abschluss-Ende-Datum-Uhrzeit': string;
	}
	export interface AbschlussbelegdatenFormProperties {

		/** Required */
		'Abschluss-Beginn-Datum-Uhrzeit': FormControl<string | null | undefined>,

		/** Required */
		'Abschluss-Ende-Datum-Uhrzeit': FormControl<string | null | undefined>,
	}
	export function CreateAbschlussbelegdatenFormGroup() {
		return new FormGroup<AbschlussbelegdatenFormProperties>({
			'Abschluss-Beginn-Datum-Uhrzeit': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'Abschluss-Ende-Datum-Uhrzeit': new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AuthResult {
		accessToken?: string | null;
		registrierkasseUuid?: string | null;
	}
	export interface AuthResultFormProperties {
		accessToken: FormControl<string | null | undefined>,
		registrierkasseUuid: FormControl<string | null | undefined>,
	}
	export function CreateAuthResultFormGroup() {
		return new FormGroup<AuthResultFormProperties>({
			accessToken: new FormControl<string | null | undefined>(undefined),
			registrierkasseUuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Beleg {
		'Beleg-Codes'?: Array<string>;
		'Beleg-Typen'?: Array<string>;

		/** The complete `Beleg` that has been signed by the "Signaturerstellungseinheit" and stored in the "Datenerfassungsprotokoll". */
		Belegdaten?: SignierteBelegdaten;

		/** The signed `Beleg` as a JWS signature token. */
		JWS?: string | null;

		/** The portion of the `JWS` token to be used for generating QR codes. */
		QR?: string | null;

		/** A hyperlink that retrieves the `QR` data. */
		'QR-Link'?: string | null;

		/** The `_uuid` of the `Registrierkasse` that has issued this `Beleg`. */
		'Registrierkasse-UUID'?: string | null;

		/** The `_uuid` of the `Signaturerstellungseinheit` that has signed this `Beleg`. */
		'Signaturerstellungseinheit-UUID'?: string | null;

		/** URL of the particular `Beleg` instance. */
		_href?: string | null;

		/** Unique ID of the particular `Beleg` instance. */
		_uuid?: string | null;
	}
	export interface BelegFormProperties {

		/** The signed `Beleg` as a JWS signature token. */
		JWS: FormControl<string | null | undefined>,

		/** The portion of the `JWS` token to be used for generating QR codes. */
		QR: FormControl<string | null | undefined>,

		/** A hyperlink that retrieves the `QR` data. */
		'QR-Link': FormControl<string | null | undefined>,

		/** The `_uuid` of the `Registrierkasse` that has issued this `Beleg`. */
		'Registrierkasse-UUID': FormControl<string | null | undefined>,

		/** The `_uuid` of the `Signaturerstellungseinheit` that has signed this `Beleg`. */
		'Signaturerstellungseinheit-UUID': FormControl<string | null | undefined>,

		/** URL of the particular `Beleg` instance. */
		_href: FormControl<string | null | undefined>,

		/** Unique ID of the particular `Beleg` instance. */
		_uuid: FormControl<string | null | undefined>,
	}
	export function CreateBelegFormGroup() {
		return new FormGroup<BelegFormProperties>({
			JWS: new FormControl<string | null | undefined>(undefined),
			QR: new FormControl<string | null | undefined>(undefined),
			'QR-Link': new FormControl<string | null | undefined>(undefined),
			'Registrierkasse-UUID': new FormControl<string | null | undefined>(undefined),
			'Signaturerstellungseinheit-UUID': new FormControl<string | null | undefined>(undefined),
			_href: new FormControl<string | null | undefined>(undefined),
			_uuid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The complete `Beleg` that has been signed by the "Signaturerstellungseinheit" and stored in the "Datenerfassungsprotokoll". */
	export interface SignierteBelegdaten {
		'Beleg-Datum-Uhrzeit'?: string | null;
		Belegnummer?: string | null;
		'Betrag-Brutto'?: number | null;
		'Betrag-Netto'?: number | null;

		/** The total amount in cents */
		'Betrag-Satz-Besonders-Brutto'?: number | null;

		/** The total amount in cents */
		'Betrag-Satz-Besonders-Netto'?: number | null;

		/** The total amount in cents */
		'Betrag-Satz-Ermaessigt-1-Brutto'?: number | null;

		/** The total amount in cents */
		'Betrag-Satz-Ermaessigt-1-Netto'?: number | null;

		/** The total amount in cents */
		'Betrag-Satz-Ermaessigt-2-Brutto'?: number | null;

		/** The total amount in cents */
		'Betrag-Satz-Ermaessigt-2-Netto'?: number | null;

		/** The total amount in cents */
		'Betrag-Satz-Normal-Brutto'?: number | null;

		/** The total amount in cents */
		'Betrag-Satz-Normal-Netto'?: number | null;

		/** The total amount in cents */
		'Betrag-Satz-Null-Brutto'?: number | null;

		/** The total amount in cents */
		'Betrag-Satz-Null-Netto'?: number | null;
		'Externer-Beleg-Belegkreis'?: string | null;
		'Externer-Beleg-Bezeichnung'?: string | null;
		'Externer-Beleg-Referenz'?: string | null;
		'Kassen-ID'?: string | null;
		Kunde?: string | null;
		Notizen?: Array<string>;
		Posten?: Array<Posten>;
		Rabatte?: Array<Rabatt>;

		/** Storno? */
		Storno?: boolean | null;

		/** The `Beleg-UUID` property of the `Beleg` to be cancelled */
		'Storno-Beleg-UUID'?: string | null;
		'Storno-Text'?: string | null;

		/** Training? */
		Training?: boolean | null;
		'Unternehmen-Adresse1'?: string | null;
		'Unternehmen-Adresse2'?: string | null;
		'Unternehmen-Fusszeile'?: string | null;
		'Unternehmen-ID'?: string | null;
		'Unternehmen-ID-Typ'?: SignierteBelegdatenUnternehmen_ID_Typ | null;
		'Unternehmen-Kopfzeile'?: string | null;
		'Unternehmen-Name'?: string | null;
		'Unternehmen-Ort'?: string | null;
		'Unternehmen-PLZ'?: string | null;
		Zahlungen?: Array<Zahlung>;
		'Zertifikat-Seriennummer'?: string | null;
	}

	/** The complete `Beleg` that has been signed by the "Signaturerstellungseinheit" and stored in the "Datenerfassungsprotokoll". */
	export interface SignierteBelegdatenFormProperties {
		'Beleg-Datum-Uhrzeit': FormControl<string | null | undefined>,
		Belegnummer: FormControl<string | null | undefined>,
		'Betrag-Brutto': FormControl<number | null | undefined>,
		'Betrag-Netto': FormControl<number | null | undefined>,

		/** The total amount in cents */
		'Betrag-Satz-Besonders-Brutto': FormControl<number | null | undefined>,

		/** The total amount in cents */
		'Betrag-Satz-Besonders-Netto': FormControl<number | null | undefined>,

		/** The total amount in cents */
		'Betrag-Satz-Ermaessigt-1-Brutto': FormControl<number | null | undefined>,

		/** The total amount in cents */
		'Betrag-Satz-Ermaessigt-1-Netto': FormControl<number | null | undefined>,

		/** The total amount in cents */
		'Betrag-Satz-Ermaessigt-2-Brutto': FormControl<number | null | undefined>,

		/** The total amount in cents */
		'Betrag-Satz-Ermaessigt-2-Netto': FormControl<number | null | undefined>,

		/** The total amount in cents */
		'Betrag-Satz-Normal-Brutto': FormControl<number | null | undefined>,

		/** The total amount in cents */
		'Betrag-Satz-Normal-Netto': FormControl<number | null | undefined>,

		/** The total amount in cents */
		'Betrag-Satz-Null-Brutto': FormControl<number | null | undefined>,

		/** The total amount in cents */
		'Betrag-Satz-Null-Netto': FormControl<number | null | undefined>,
		'Externer-Beleg-Belegkreis': FormControl<string | null | undefined>,
		'Externer-Beleg-Bezeichnung': FormControl<string | null | undefined>,
		'Externer-Beleg-Referenz': FormControl<string | null | undefined>,
		'Kassen-ID': FormControl<string | null | undefined>,
		Kunde: FormControl<string | null | undefined>,

		/** Storno? */
		Storno: FormControl<boolean | null | undefined>,

		/** The `Beleg-UUID` property of the `Beleg` to be cancelled */
		'Storno-Beleg-UUID': FormControl<string | null | undefined>,
		'Storno-Text': FormControl<string | null | undefined>,

		/** Training? */
		Training: FormControl<boolean | null | undefined>,
		'Unternehmen-Adresse1': FormControl<string | null | undefined>,
		'Unternehmen-Adresse2': FormControl<string | null | undefined>,
		'Unternehmen-Fusszeile': FormControl<string | null | undefined>,
		'Unternehmen-ID': FormControl<string | null | undefined>,
		'Unternehmen-ID-Typ': FormControl<SignierteBelegdatenUnternehmen_ID_Typ | null | undefined>,
		'Unternehmen-Kopfzeile': FormControl<string | null | undefined>,
		'Unternehmen-Name': FormControl<string | null | undefined>,
		'Unternehmen-Ort': FormControl<string | null | undefined>,
		'Unternehmen-PLZ': FormControl<string | null | undefined>,
		'Zertifikat-Seriennummer': FormControl<string | null | undefined>,
	}
	export function CreateSignierteBelegdatenFormGroup() {
		return new FormGroup<SignierteBelegdatenFormProperties>({
			'Beleg-Datum-Uhrzeit': new FormControl<string | null | undefined>(undefined),
			Belegnummer: new FormControl<string | null | undefined>(undefined),
			'Betrag-Brutto': new FormControl<number | null | undefined>(undefined),
			'Betrag-Netto': new FormControl<number | null | undefined>(undefined),
			'Betrag-Satz-Besonders-Brutto': new FormControl<number | null | undefined>(undefined),
			'Betrag-Satz-Besonders-Netto': new FormControl<number | null | undefined>(undefined),
			'Betrag-Satz-Ermaessigt-1-Brutto': new FormControl<number | null | undefined>(undefined),
			'Betrag-Satz-Ermaessigt-1-Netto': new FormControl<number | null | undefined>(undefined),
			'Betrag-Satz-Ermaessigt-2-Brutto': new FormControl<number | null | undefined>(undefined),
			'Betrag-Satz-Ermaessigt-2-Netto': new FormControl<number | null | undefined>(undefined),
			'Betrag-Satz-Normal-Brutto': new FormControl<number | null | undefined>(undefined),
			'Betrag-Satz-Normal-Netto': new FormControl<number | null | undefined>(undefined),
			'Betrag-Satz-Null-Brutto': new FormControl<number | null | undefined>(undefined),
			'Betrag-Satz-Null-Netto': new FormControl<number | null | undefined>(undefined),
			'Externer-Beleg-Belegkreis': new FormControl<string | null | undefined>(undefined),
			'Externer-Beleg-Bezeichnung': new FormControl<string | null | undefined>(undefined),
			'Externer-Beleg-Referenz': new FormControl<string | null | undefined>(undefined),
			'Kassen-ID': new FormControl<string | null | undefined>(undefined),
			Kunde: new FormControl<string | null | undefined>(undefined),
			Storno: new FormControl<boolean | null | undefined>(undefined),
			'Storno-Beleg-UUID': new FormControl<string | null | undefined>(undefined),
			'Storno-Text': new FormControl<string | null | undefined>(undefined),
			Training: new FormControl<boolean | null | undefined>(undefined),
			'Unternehmen-Adresse1': new FormControl<string | null | undefined>(undefined),
			'Unternehmen-Adresse2': new FormControl<string | null | undefined>(undefined),
			'Unternehmen-Fusszeile': new FormControl<string | null | undefined>(undefined),
			'Unternehmen-ID': new FormControl<string | null | undefined>(undefined),
			'Unternehmen-ID-Typ': new FormControl<SignierteBelegdatenUnternehmen_ID_Typ | null | undefined>(undefined),
			'Unternehmen-Kopfzeile': new FormControl<string | null | undefined>(undefined),
			'Unternehmen-Name': new FormControl<string | null | undefined>(undefined),
			'Unternehmen-Ort': new FormControl<string | null | undefined>(undefined),
			'Unternehmen-PLZ': new FormControl<string | null | undefined>(undefined),
			'Zertifikat-Seriennummer': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Posten {

		/** Required */
		Bezeichnung: string;

		/**
		 * The amount in cents
		 * Required
		 */
		BruttoBetrag: number;
		'Externer-Beleg-Belegkreis'?: string | null;
		'Externer-Beleg-Bezeichnung'?: string | null;
		'Externer-Beleg-Referenz'?: string | null;

		/** Required */
		Menge: number;

		/**
		 * The amount in cents
		 * Required
		 */
		NettoBetrag: number;

		/** Required */
		Satz: PostenSatz;
	}
	export interface PostenFormProperties {

		/** Required */
		Bezeichnung: FormControl<string | null | undefined>,

		/**
		 * The amount in cents
		 * Required
		 */
		BruttoBetrag: FormControl<number | null | undefined>,
		'Externer-Beleg-Belegkreis': FormControl<string | null | undefined>,
		'Externer-Beleg-Bezeichnung': FormControl<string | null | undefined>,
		'Externer-Beleg-Referenz': FormControl<string | null | undefined>,

		/** Required */
		Menge: FormControl<number | null | undefined>,

		/**
		 * The amount in cents
		 * Required
		 */
		NettoBetrag: FormControl<number | null | undefined>,

		/** Required */
		Satz: FormControl<PostenSatz | null | undefined>,
	}
	export function CreatePostenFormGroup() {
		return new FormGroup<PostenFormProperties>({
			Bezeichnung: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BruttoBetrag: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'Externer-Beleg-Belegkreis': new FormControl<string | null | undefined>(undefined),
			'Externer-Beleg-Bezeichnung': new FormControl<string | null | undefined>(undefined),
			'Externer-Beleg-Referenz': new FormControl<string | null | undefined>(undefined),
			Menge: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			NettoBetrag: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Satz: new FormControl<PostenSatz | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PostenSatz { NORMAL = 'NORMAL', ERMAESSIGT1 = 'ERMAESSIGT1', ERMAESSIGT2 = 'ERMAESSIGT2', BESONDERS = 'BESONDERS', NULL = 'NULL' }

	export interface Rabatt {

		/**
		 * The amount in cents
		 * Required
		 */
		'Betrag-Brutto': number;

		/**
		 * The amount in cents
		 * Required
		 */
		'Betrag-Netto': number;

		/** Required */
		Bezeichnung: string;
		Satz?: PostenSatz | null;
	}
	export interface RabattFormProperties {

		/**
		 * The amount in cents
		 * Required
		 */
		'Betrag-Brutto': FormControl<number | null | undefined>,

		/**
		 * The amount in cents
		 * Required
		 */
		'Betrag-Netto': FormControl<number | null | undefined>,

		/** Required */
		Bezeichnung: FormControl<string | null | undefined>,
		Satz: FormControl<PostenSatz | null | undefined>,
	}
	export function CreateRabattFormGroup() {
		return new FormGroup<RabattFormProperties>({
			'Betrag-Brutto': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'Betrag-Netto': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Bezeichnung: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Satz: new FormControl<PostenSatz | null | undefined>(undefined),
		});

	}

	export enum SignierteBelegdatenUnternehmen_ID_Typ { steuernummer = 'steuernummer', uid = 'uid', gln = 'gln' }

	export interface Zahlung {

		/**
		 * The amount in cents
		 * Required
		 */
		Betrag: number;

		/** Required */
		Bezeichnung: string;
		Referenz?: string | null;
	}
	export interface ZahlungFormProperties {

		/**
		 * The amount in cents
		 * Required
		 */
		Betrag: FormControl<number | null | undefined>,

		/** Required */
		Bezeichnung: FormControl<string | null | undefined>,
		Referenz: FormControl<string | null | undefined>,
	}
	export function CreateZahlungFormGroup() {
		return new FormGroup<ZahlungFormProperties>({
			Betrag: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Bezeichnung: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Referenz: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The `Beleg` to be signed by the "Signaturerstellungseinheit" and stored in the "Datenerfassungsprotokoll". */
	export interface Belegdaten {
		'Externer-Beleg-Belegkreis'?: string | null;
		'Externer-Beleg-Bezeichnung'?: string | null;
		'Externer-Beleg-Referenz'?: string | null;
		Kunde?: string | null;
		Notizen?: Array<string>;
		Posten?: Array<Posten>;
		Rabatte?: Array<Rabatt>;

		/** Storno? */
		Storno?: boolean | null;

		/** The `Beleg-UUID` property of the `Beleg` to be cancelled */
		'Storno-Beleg-UUID'?: string | null;
		'Storno-Text'?: string | null;

		/** Training? */
		Training?: boolean | null;
		'Unternehmen-Adresse1'?: string | null;
		'Unternehmen-Adresse2'?: string | null;
		'Unternehmen-Fusszeile'?: string | null;
		'Unternehmen-ID'?: string | null;
		'Unternehmen-ID-Typ'?: SignierteBelegdatenUnternehmen_ID_Typ | null;
		'Unternehmen-Kopfzeile'?: string | null;
		'Unternehmen-Name'?: string | null;
		'Unternehmen-Ort'?: string | null;
		'Unternehmen-PLZ'?: string | null;
		Zahlungen?: Array<Zahlung>;
	}

	/** The `Beleg` to be signed by the "Signaturerstellungseinheit" and stored in the "Datenerfassungsprotokoll". */
	export interface BelegdatenFormProperties {
		'Externer-Beleg-Belegkreis': FormControl<string | null | undefined>,
		'Externer-Beleg-Bezeichnung': FormControl<string | null | undefined>,
		'Externer-Beleg-Referenz': FormControl<string | null | undefined>,
		Kunde: FormControl<string | null | undefined>,

		/** Storno? */
		Storno: FormControl<boolean | null | undefined>,

		/** The `Beleg-UUID` property of the `Beleg` to be cancelled */
		'Storno-Beleg-UUID': FormControl<string | null | undefined>,
		'Storno-Text': FormControl<string | null | undefined>,

		/** Training? */
		Training: FormControl<boolean | null | undefined>,
		'Unternehmen-Adresse1': FormControl<string | null | undefined>,
		'Unternehmen-Adresse2': FormControl<string | null | undefined>,
		'Unternehmen-Fusszeile': FormControl<string | null | undefined>,
		'Unternehmen-ID': FormControl<string | null | undefined>,
		'Unternehmen-ID-Typ': FormControl<SignierteBelegdatenUnternehmen_ID_Typ | null | undefined>,
		'Unternehmen-Kopfzeile': FormControl<string | null | undefined>,
		'Unternehmen-Name': FormControl<string | null | undefined>,
		'Unternehmen-Ort': FormControl<string | null | undefined>,
		'Unternehmen-PLZ': FormControl<string | null | undefined>,
	}
	export function CreateBelegdatenFormGroup() {
		return new FormGroup<BelegdatenFormProperties>({
			'Externer-Beleg-Belegkreis': new FormControl<string | null | undefined>(undefined),
			'Externer-Beleg-Bezeichnung': new FormControl<string | null | undefined>(undefined),
			'Externer-Beleg-Referenz': new FormControl<string | null | undefined>(undefined),
			Kunde: new FormControl<string | null | undefined>(undefined),
			Storno: new FormControl<boolean | null | undefined>(undefined),
			'Storno-Beleg-UUID': new FormControl<string | null | undefined>(undefined),
			'Storno-Text': new FormControl<string | null | undefined>(undefined),
			Training: new FormControl<boolean | null | undefined>(undefined),
			'Unternehmen-Adresse1': new FormControl<string | null | undefined>(undefined),
			'Unternehmen-Adresse2': new FormControl<string | null | undefined>(undefined),
			'Unternehmen-Fusszeile': new FormControl<string | null | undefined>(undefined),
			'Unternehmen-ID': new FormControl<string | null | undefined>(undefined),
			'Unternehmen-ID-Typ': new FormControl<SignierteBelegdatenUnternehmen_ID_Typ | null | undefined>(undefined),
			'Unternehmen-Kopfzeile': new FormControl<string | null | undefined>(undefined),
			'Unternehmen-Name': new FormControl<string | null | undefined>(undefined),
			'Unternehmen-Ort': new FormControl<string | null | undefined>(undefined),
			'Unternehmen-PLZ': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Belege {
	}
	export interface BelegeFormProperties {
	}
	export function CreateBelegeFormGroup() {
		return new FormGroup<BelegeFormProperties>({
		});

	}

	export interface Belegformat {
		Belege?: Array<Beleg>;
	}
	export interface BelegformatFormProperties {
	}
	export function CreateBelegformatFormGroup() {
		return new FormGroup<BelegformatFormProperties>({
		});

	}

	export interface Exportformat {

		/** Minimum items: 1 */
		Exportformat_Belege_Gruppe_?: Array<Exportformat_Belege_Gruppe_>;
	}
	export interface ExportformatFormProperties {
	}
	export function CreateExportformatFormGroup() {
		return new FormGroup<ExportformatFormProperties>({
		});

	}

	export interface Exportformat_Belege_Gruppe_ {

		/**
		 * Required
		 * Minimum items: 1
		 */
		'Belege-kompakt': Array<string>;

		/** Required */
		Signaturzertifikat: string;

		/**
		 * Required
		 * Minimum items: 1
		 */
		Zertifizierungsstellen: Array<string>;
	}
	export interface Exportformat_Belege_Gruppe_FormProperties {

		/** Required */
		Signaturzertifikat: FormControl<string | null | undefined>,
	}
	export function CreateExportformat_Belege_Gruppe_FormGroup() {
		return new FormGroup<Exportformat_Belege_Gruppe_FormProperties>({
			Signaturzertifikat: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Monatsbeleg {
		'Beleg-UUID'?: string | null;
		'FON-Geprueft-Datum-Uhrzeit'?: string | null;
		'FON-Geprueft-Erfolgreich'?: boolean | null;
		Jahr?: number | null;
		Monat?: number | null;
	}
	export interface MonatsbelegFormProperties {
		'Beleg-UUID': FormControl<string | null | undefined>,
		'FON-Geprueft-Datum-Uhrzeit': FormControl<string | null | undefined>,
		'FON-Geprueft-Erfolgreich': FormControl<boolean | null | undefined>,
		Jahr: FormControl<number | null | undefined>,
		Monat: FormControl<number | null | undefined>,
	}
	export function CreateMonatsbelegFormGroup() {
		return new FormGroup<MonatsbelegFormProperties>({
			'Beleg-UUID': new FormControl<string | null | undefined>(undefined),
			'FON-Geprueft-Datum-Uhrzeit': new FormControl<string | null | undefined>(undefined),
			'FON-Geprueft-Erfolgreich': new FormControl<boolean | null | undefined>(undefined),
			Jahr: new FormControl<number | null | undefined>(undefined),
			Monat: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Registrierkasse {

		/** The base64 encoded AES 256 key used for encrypting the "Umsatzzaehler". */
		Benutzerschluessel?: string | null;

		/** The (RKSV) "Kassenidentifikationsnummer" of this particular `Registrierkasse`. */
		'Kassen-ID'?: string | null;

		/** The `_uuid` of the paired "Signaturerstellungseinheit". */
		'Signaturerstellungseinheit-UUID'?: string | null;

		/** URL of the particular `Registrierkasse` instance. */
		_href?: string | null;

		/** Unique ID of the particular `Registrierkasse` instance. */
		_uuid?: string | null;
	}
	export interface RegistrierkasseFormProperties {

		/** The base64 encoded AES 256 key used for encrypting the "Umsatzzaehler". */
		Benutzerschluessel: FormControl<string | null | undefined>,

		/** The (RKSV) "Kassenidentifikationsnummer" of this particular `Registrierkasse`. */
		'Kassen-ID': FormControl<string | null | undefined>,

		/** The `_uuid` of the paired "Signaturerstellungseinheit". */
		'Signaturerstellungseinheit-UUID': FormControl<string | null | undefined>,

		/** URL of the particular `Registrierkasse` instance. */
		_href: FormControl<string | null | undefined>,

		/** Unique ID of the particular `Registrierkasse` instance. */
		_uuid: FormControl<string | null | undefined>,
	}
	export function CreateRegistrierkasseFormGroup() {
		return new FormGroup<RegistrierkasseFormProperties>({
			Benutzerschluessel: new FormControl<string | null | undefined>(undefined),
			'Kassen-ID': new FormControl<string | null | undefined>(undefined),
			'Signaturerstellungseinheit-UUID': new FormControl<string | null | undefined>(undefined),
			_href: new FormControl<string | null | undefined>(undefined),
			_uuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Request a JWT access token using your obono username and password.
		 * Get auth
		 * @return {AuthResult} The JWT `accessToken` to use for accessing secured resourced as well as the `registrierkassenUuid` of the corresponding "Registrierkasse".
		 */
		AuthGet(headersHandler?: () => HttpHeaders): Observable<AuthResult> {
			return this.http.get<AuthResult>(this.baseUri + 'auth', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieves a particular `Beleg` from the "Datenerfassungsprotokoll".
		 * Get belege/{belegUuid}
		 * @param {string} belegUuid The `_uuid` of the `Beleg` to fetch.
		 * @return {Beleg} The requested `Beleg` resource.
		 */
		Belege_belegUuidGet(belegUuid: string, headersHandler?: () => HttpHeaders): Observable<Beleg> {
			return this.http.get<Beleg>(this.baseUri + 'belege/' + (belegUuid == null ? '' : encodeURIComponent(belegUuid)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get export/csv/registrierkassen/{registrierkasseUuid}/belege
		 * @param {string} registrierkasseUuid The `_uuid` of the `Registrierkasse` to export.
		 * @param {string} before Only return results that were saved before the specified date-time string (i.e., anything that `Date.parse()` can parse).
		 * @param {string} after Only return results that were saved after the specified date-time string (i.e., anything that `Date.parse()` can parse).
		 * @param {boolean} posten Export `Posten` instead of `Belegdaten`.
		 * @return {void} The exported data of a particular `Registrierkasse` in its CSV representation.
		 */
		ExportCsvRegistrierkassen_registrierkasseUuidBelegeGetByBeforeAndAfterAndPosten(registrierkasseUuid: string, before: string | null | undefined, after: string | null | undefined, posten: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'export/csv/registrierkassen/' + (registrierkasseUuid == null ? '' : encodeURIComponent(registrierkasseUuid)) + '/belege&before=' + (before == null ? '' : encodeURIComponent(before)) + '&after=' + (after == null ? '' : encodeURIComponent(after)) + '&posten=' + posten, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get export/dep131/registrierkassen/{registrierkasseUuid}/belege
		 * @param {string} registrierkasseUuid The `_uuid` of the `Registrierkasse` to export.
		 * @param {string} before Only return results that were saved before the specified date-time string (i.e., anything that `Date.parse()` can parse).
		 * @param {string} after Only return results that were saved after the specified date-time string (i.e., anything that `Date.parse()` can parse).
		 * @return {void} The exported data of a particular `Registrierkasse` in its DEP131 / CSV representation.
		 */
		ExportDep131Registrierkassen_registrierkasseUuidBelegeGetByBeforeAndAfter(registrierkasseUuid: string, before: string | null | undefined, after: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'export/dep131/registrierkassen/' + (registrierkasseUuid == null ? '' : encodeURIComponent(registrierkasseUuid)) + '/belege&before=' + (before == null ? '' : encodeURIComponent(before)) + '&after=' + (after == null ? '' : encodeURIComponent(after)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get export/dep7/registrierkassen/{registrierkasseUuid}/belege
		 * @param {string} registrierkasseUuid The `_uuid` of the `Registrierkasse` to export.
		 * @param {string} before Only return results that were saved before the specified date-time string (i.e., anything that `Date.parse()` can parse).
		 * @param {string} after Only return results that were saved after the specified date-time string (i.e., anything that `Date.parse()` can parse).
		 * @return {void} The exported data of a particular `Registrierkasse` in its DEP7 representation.
		 */
		ExportDep7Registrierkassen_registrierkasseUuidBelegeGetByBeforeAndAfter(registrierkasseUuid: string, before: string | null | undefined, after: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'export/dep7/registrierkassen/' + (registrierkasseUuid == null ? '' : encodeURIComponent(registrierkasseUuid)) + '/belege&before=' + (before == null ? '' : encodeURIComponent(before)) + '&after=' + (after == null ? '' : encodeURIComponent(after)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get export/gobd/registrierkassen/{registrierkasseUuid}
		 * @param {string} registrierkasseUuid The `_uuid` of the `Registrierkasse` to export.
		 * @param {string} before Only return results that were saved before the specified date-time string (i.e., anything that `Date.parse()` can parse).
		 * @param {string} after Only return results that were saved after the specified date-time string (i.e., anything that `Date.parse()` can parse).
		 * @return {void} The exported data of a particular `Registrierkasse` in its GoBD representation.
		 */
		ExportGobdRegistrierkassen_registrierkasseUuidGetByBeforeAndAfter(registrierkasseUuid: string, before: string | null | undefined, after: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'export/gobd/registrierkassen/' + (registrierkasseUuid == null ? '' : encodeURIComponent(registrierkasseUuid)) + '&before=' + (before == null ? '' : encodeURIComponent(before)) + '&after=' + (after == null ? '' : encodeURIComponent(after)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get export/html/belege/{belegUuid}
		 * @param {string} belegUuid The `_uuid` of a particular `Beleg` to export.
		 * @return {void} A particular `Beleg` in its HTML representation.
		 */
		ExportHtmlBelege_belegUuidGet(belegUuid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'export/html/belege/' + (belegUuid == null ? '' : encodeURIComponent(belegUuid)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get export/pdf/belege/{belegUuid}
		 * @param {string} belegUuid The `_uuid` of a particular `Beleg` to export.
		 * @return {void} A particular `Beleg` in its PDF representation.
		 */
		ExportPdfBelege_belegUuidGet(belegUuid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'export/pdf/belege/' + (belegUuid == null ? '' : encodeURIComponent(belegUuid)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get export/qr/belege/{belegUuid}
		 * @param {string} belegUuid The `_uuid` of a particular `Beleg` to export.
		 * @return {void} The RKSV QR-Code as PNG file.
		 */
		ExportQrBelege_belegUuidGet(belegUuid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'export/qr/belege/' + (belegUuid == null ? '' : encodeURIComponent(belegUuid)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get export/thermal-print/belege/{belegUuid}
		 * @param {string} belegUuid The `_uuid` of a particular `Beleg` to export.
		 * @param {boolean} qr Should the RKSV QR code should be rendered?
		 * @param {number} width Number of characters per line.
		 * @param {ExportThermal_printBelege_belegUuidGetByQrAndWidthAndDialectAndEncodingDialect} dialect The thermal printer dialect.
		 * @param {ExportThermal_printBelege_belegUuidGetByQrAndWidthAndDialectAndEncodingEncoding} encoding The encoding of the binary data.
		 * @return {void} A particular `Beleg` in its ESC/POS or STAR representation.
		 */
		ExportThermal_printBelege_belegUuidGetByQrAndWidthAndDialectAndEncoding(belegUuid: string, qr: boolean | null | undefined, width: number | null | undefined, dialect: ExportThermal_printBelege_belegUuidGetByQrAndWidthAndDialectAndEncodingDialect | null | undefined, encoding: ExportThermal_printBelege_belegUuidGetByQrAndWidthAndDialectAndEncodingEncoding | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'export/thermal-print/belege/' + (belegUuid == null ? '' : encodeURIComponent(belegUuid)) + '&qr=' + qr + '&width=' + width + '&dialect=' + dialect + '&encoding=' + encoding, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get export/xls/registrierkassen/{registrierkasseUuid}/belege
		 * @param {string} registrierkasseUuid The `_uuid` of the `Registrierkasse` to export.
		 * @param {string} before Only return results that were saved before the specified date-time string (i.e., anything that `Date.parse()` can parse).
		 * @param {string} after Only return results that were saved after the specified date-time string (i.e., anything that `Date.parse()` can parse).
		 * @return {void} The exported data of a particular `Registrierkasse` in its Microsoft Excel representation.
		 */
		ExportXlsRegistrierkassen_registrierkasseUuidBelegeGetByBeforeAndAfter(registrierkasseUuid: string, before: string | null | undefined, after: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'export/xls/registrierkassen/' + (registrierkasseUuid == null ? '' : encodeURIComponent(registrierkasseUuid)) + '/belege&before=' + (before == null ? '' : encodeURIComponent(before)) + '&after=' + (after == null ? '' : encodeURIComponent(after)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information about a particular `Registrierkasse`.
		 * Get registrierkassen/{registrierkasseUuid}
		 * @param {string} registrierkasseUuid The `_uuid` of a particular `Registrierkasse` to fetch.
		 * @return {Registrierkasse} Information about a particular `Registrierkasse`.
		 */
		Registrierkassen_registrierkasseUuidGet(registrierkasseUuid: string, headersHandler?: () => HttpHeaders): Observable<Registrierkasse> {
			return this.http.get<Registrierkasse>(this.baseUri + 'registrierkassen/' + (registrierkasseUuid == null ? '' : encodeURIComponent(registrierkasseUuid)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Generates an `Abschlussbeleg`.
		 * Post registrierkassen/{registrierkasseUuid}/abschluss
		 * @param {string} registrierkasseUuid The `_uuid` of the `Registrierkasse` to retrieve the `Beleg` collection.
		 * @param {Abschlussbelegdaten} requestBody An object that contains all data for a particular `Abschlussbeleg`.
		 * @return {void} 
		 */
		Registrierkassen_registrierkasseUuidAbschlussPost(registrierkasseUuid: string, requestBody: Abschlussbelegdaten, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'registrierkassen/' + (registrierkasseUuid == null ? '' : encodeURIComponent(registrierkasseUuid)) + '/abschluss', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the `Beleg` collection from the "Datenerfassungsprotokoll".
		 * Get registrierkassen/{registrierkasseUuid}/belege
		 * @param {string} registrierkasseUuid The `_uuid` of the `Registrierkasse` to retrieve the `Beleg` collection.
		 * @param {Registrierkassen_registrierkasseUuidBelegeGetByFormatAndOrderAndLimitAndOffsetAndBeforeAndAfterAndGteAndLteFormat} format Determines the format of the `Beleg` collection.
		 * @param {Registrierkassen_registrierkasseUuidBelegeGetByFormatAndOrderAndLimitAndOffsetAndBeforeAndAfterAndGteAndLteOrder} order Determines the sorting order.
		 * @param {number} limit Limits the number of returned results.
		 * @param {number} offset Skips the specified number of results from the result set.
		 * @param {string} before Only return results that where saved before the specified date-time string (i.e., anything that `Date.parse()` can parse).
		 * @param {string} after Only return results that where saved after the specified date-time string (i.e., anything that `Date.parse()` can parse).
		 * @param {number} gte Only return results that have at least a particular `Belegnummer`.
		 * @param {number} lte Only return results that have at most a particular `Belegnummer`.
		 * @return {Belege} The `Beleg` collection from the "Datenerfassungsprotokoll".
		 */
		Registrierkassen_registrierkasseUuidBelegeGetByFormatAndOrderAndLimitAndOffsetAndBeforeAndAfterAndGteAndLte(registrierkasseUuid: string, format: Registrierkassen_registrierkasseUuidBelegeGetByFormatAndOrderAndLimitAndOffsetAndBeforeAndAfterAndGteAndLteFormat, order: Registrierkassen_registrierkasseUuidBelegeGetByFormatAndOrderAndLimitAndOffsetAndBeforeAndAfterAndGteAndLteOrder | null | undefined, limit: number | null | undefined, offset: number | null | undefined, before: string | null | undefined, after: string | null | undefined, gte: number | null | undefined, lte: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Belege> {
			return this.http.get<Belege>(this.baseUri + 'registrierkassen/' + (registrierkasseUuid == null ? '' : encodeURIComponent(registrierkasseUuid)) + '/belege&format=' + format + '&order=' + order + '&limit=' + limit + '&offset=' + offset + '&before=' + (before == null ? '' : encodeURIComponent(before)) + '&after=' + (after == null ? '' : encodeURIComponent(after)) + '&gte=' + gte + '&lte=' + lte, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieves a particular `Beleg` from the "Datenerfassungsprotokoll".
		 * Get registrierkassen/{registrierkasseUuid}/belege/{belegUuid}
		 * @param {string} registrierkasseUuid The `_uuid` of the `Registrierkasse` that contains the requested `Beleg`.
		 * @param {string} belegUuid The `_uuid` of the `Beleg` to fetch.
		 * @return {Beleg} The requested `Beleg` resource.
		 */
		Registrierkassen_registrierkasseUuidBelege_belegUuidGet(registrierkasseUuid: string, belegUuid: string, headersHandler?: () => HttpHeaders): Observable<Beleg> {
			return this.http.get<Beleg>(this.baseUri + 'registrierkassen/' + (registrierkasseUuid == null ? '' : encodeURIComponent(registrierkasseUuid)) + '/belege/' + (belegUuid == null ? '' : encodeURIComponent(belegUuid)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Signs a receipt and stores it in the "Datenerfassungsprotokoll".
		 * Put registrierkassen/{registrierkasseUuid}/belege/{belegUuid}
		 * @param {string} registrierkasseUuid The `_uuid` of the `Registrierkasse` to use for signing data.
		 * @param {string} belegUuid The `_uuid` of the `Beleg` to store.
		 * @param {Belegdaten} requestBody An object that contains all data for a particular `Beleg` and is formatted according to RKSV "Signaturformat".
		 * @return {void} 
		 */
		Registrierkassen_registrierkasseUuidBelege_belegUuidPut(registrierkasseUuid: string, belegUuid: string, requestBody: Belegdaten, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'registrierkassen/' + (registrierkasseUuid == null ? '' : encodeURIComponent(registrierkasseUuid)) + '/belege/' + (belegUuid == null ? '' : encodeURIComponent(belegUuid)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Generates a DEP file.
		 * Get registrierkassen/{registrierkasseUuid}/dep
		 * @param {string} registrierkasseUuid The `_uuid` of the `Registrierkasse` to retrieve the DEP file.
		 * @return {void} The DEP file.
		 */
		Registrierkassen_registrierkasseUuidDepGet(registrierkasseUuid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'registrierkassen/' + (registrierkasseUuid == null ? '' : encodeURIComponent(registrierkasseUuid)) + '/dep', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of `Monatsbelege`.
		 * Get registrierkassen/{registrierkasseUuid}/monatsbelege
		 * @param {string} registrierkasseUuid The `_uuid` of the `Registrierkasse`.
		 * @return {Array<Monatsbeleg>} Information about `Monatsbelege`.
		 */
		Registrierkassen_registrierkasseUuidMonatsbelegeGetByYearAndMonth(registrierkasseUuid: string, year: number | null | undefined, month: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Monatsbeleg>> {
			return this.http.get<Array<Monatsbeleg>>(this.baseUri + 'registrierkassen/' + (registrierkasseUuid == null ? '' : encodeURIComponent(registrierkasseUuid)) + '/monatsbelege&year=' + year + '&month=' + month, { headers: headersHandler ? headersHandler() : undefined });
		}
	}

	export enum ExportThermal_printBelege_belegUuidGetByQrAndWidthAndDialectAndEncodingDialect { escpos = 'escpos', escposlite = 'escposlite', star = 'star', text = 'text' }

	export enum ExportThermal_printBelege_belegUuidGetByQrAndWidthAndDialectAndEncodingEncoding { raw = 'raw', base64 = 'base64' }

	export enum Registrierkassen_registrierkasseUuidBelegeGetByFormatAndOrderAndLimitAndOffsetAndBeforeAndAfterAndGteAndLteFormat { export = 'export', beleg = 'beleg', uuidlist = 'uuidlist' }

	export enum Registrierkassen_registrierkasseUuidBelegeGetByFormatAndOrderAndLimitAndOffsetAndBeforeAndAfterAndGteAndLteOrder { asc = 'asc', desc = 'desc' }

}

