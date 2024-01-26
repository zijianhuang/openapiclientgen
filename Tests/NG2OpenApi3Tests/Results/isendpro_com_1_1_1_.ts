import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ComptageReponse {
		etat?: ComptageReponse_etat;
	}
	export interface ComptageReponseFormProperties {
	}
	export function CreateComptageReponseFormGroup() {
		return new FormGroup<ComptageReponseFormProperties>({
		});

	}

	export interface ComptageReponse_etat {
		etat?: Array<ComptageReponse_etat_etat>;
	}
	export interface ComptageReponse_etatFormProperties {
	}
	export function CreateComptageReponse_etatFormGroup() {
		return new FormGroup<ComptageReponse_etatFormProperties>({
		});

	}

	export interface ComptageReponse_etat_etat {

		/** nombre de caractères */
		nb_caractere?: string | null;

		/** nombre de sms nécessaires */
		nb_sms?: string | null;

		/** numéro de téléphone */
		tel?: string | null;
	}
	export interface ComptageReponse_etat_etatFormProperties {

		/** nombre de caractères */
		nb_caractere: FormControl<string | null | undefined>,

		/** nombre de sms nécessaires */
		nb_sms: FormControl<string | null | undefined>,

		/** numéro de téléphone */
		tel: FormControl<string | null | undefined>,
	}
	export function CreateComptageReponse_etat_etatFormGroup() {
		return new FormGroup<ComptageReponse_etat_etatFormProperties>({
			nb_caractere: new FormControl<string | null | undefined>(undefined),
			nb_sms: new FormControl<string | null | undefined>(undefined),
			tel: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ComptageRequest {

		/** Required */
		comptage: ComptageRequestComptage;

		/** Date d'envoi au format YYYY-MM-DD hh:mm . Ce paramètre est optionnel, si il est omis l'envoi est réalisé immédiatement. */
		date_envoi?: string | null;

		/**
		 * - L'emetteur doit être une chaîne alphanumérique comprise entre 4 et 11 caractères.
		 * - Les caractères acceptés sont les chiffres entre 0 et 9, les lettres entre A et Z et l’espace.
		 * - Il ne peut pas comporter uniquement des chiffres.
		 * - Pour la modification de l'émetteur et dans le cadre de campagnes commerciales, les opérateurs imposent contractuellement d'ajouter en fin de message le texte "STOP XXXXX". De ce fait, le message envoyé ne pourra excéder une longueur de 148 caractères au lieu des 160 caractères, le « STOP » étant rajouté automatiquement.
		 */
		emetteur?: string | null;

		/** Fuseau horaire de la date d'envoi */
		gmt_zone?: ComptageRequestGmt_zone | null;

		/**
		 * Clé API
		 * Required
		 */
		keyid: string;

		/** Si le message n’est pas à but commercial, vous pouvez faire une demande pour retirer l’obligation du STOP. Une fois votre demande validée par nos services, vous pourrez supprimer la mention STOP SMS en ajoutant nostop = "1" */
		nostop?: string | null;

		/**
		 * Numero de téléphone au format national (exemple 0680010203) ou international (example 33680010203)
		 * Required
		 */
		num: string;
		numAzur?: ComptageRequestComptage | null;

		/**
		 * Message à envoyer aux destinataires. Le message doit être encodé au format utf-8 et ne contenir que des caractères existant dans l'alphabet GSM. Il est également possible d'envoyer (à l'étranger uniquement) des SMS en UCS-2, cf paramètre ucs2 pour plus de détails.
		 * Required
		 */
		sms: string;

		/**
		 * Le SMS long permet de dépasser la limite de 160 caractères en envoyant un message constitué
		 * de plusieurs SMS.
		 * Il est possible d’envoyer jusqu’à 6 SMS concaténés pour une longueur totale maximale de 918
		 * caractères par message.
		 * Pour des raisons technique, la limite par SMS concaténé étant de 153 caractères.
		 * En cas de modification de l’émetteur, il faut considérer l’ajout automatique de 12 caractères
		 * du « STOP SMS ».
		 * Pour envoyer un smslong, il faut ajouter le paramètre smslong aux appels. La valeur de SMS doit être le nombre maximum de sms concaténé autorisé.   Pour ne pas avoir ce message d’erreur et obtenir un calcul dynamique du nombre de SMS alors il faut renseigner smslong = "999"
		 */
		smslong?: ComptageRequestSmslong | null;

		/** Le tracker doit être une chaine alphanumérique de moins de 50 caractères. Ce tracker sera ensuite renvoyé en paramètre des urls pour les retours des accusés de réception. */
		tracker?: string | null;

		/**
		 * Il est également possible d’envoyer des SMS en alphabet non latin (russe, chinois, arabe, etc) sur
		 * les numéros hors France métropolitaine.
		 * Pour ce faire, la requête devrait être encodée au format UTF-8 et contenir l’argument ucs2 = "1"
		 * Du fait de contraintes techniques, 1 SMS unique ne pourra pas dépasser 70 caractères (au lieu
		 * des 160 usuels) et dans le cas de SMS long, chaque sms ne pourra dépasser 67 caractères.
		 */
		ucs2?: string | null;
	}
	export interface ComptageRequestFormProperties {

		/** Required */
		comptage: FormControl<ComptageRequestComptage | null | undefined>,

		/** Date d'envoi au format YYYY-MM-DD hh:mm . Ce paramètre est optionnel, si il est omis l'envoi est réalisé immédiatement. */
		date_envoi: FormControl<string | null | undefined>,

		/**
		 * - L'emetteur doit être une chaîne alphanumérique comprise entre 4 et 11 caractères.
		 * - Les caractères acceptés sont les chiffres entre 0 et 9, les lettres entre A et Z et l’espace.
		 * - Il ne peut pas comporter uniquement des chiffres.
		 * - Pour la modification de l'émetteur et dans le cadre de campagnes commerciales, les opérateurs imposent contractuellement d'ajouter en fin de message le texte "STOP XXXXX". De ce fait, le message envoyé ne pourra excéder une longueur de 148 caractères au lieu des 160 caractères, le « STOP » étant rajouté automatiquement.
		 */
		emetteur: FormControl<string | null | undefined>,

		/** Fuseau horaire de la date d'envoi */
		gmt_zone: FormControl<ComptageRequestGmt_zone | null | undefined>,

		/**
		 * Clé API
		 * Required
		 */
		keyid: FormControl<string | null | undefined>,

		/** Si le message n’est pas à but commercial, vous pouvez faire une demande pour retirer l’obligation du STOP. Une fois votre demande validée par nos services, vous pourrez supprimer la mention STOP SMS en ajoutant nostop = "1" */
		nostop: FormControl<string | null | undefined>,

		/**
		 * Numero de téléphone au format national (exemple 0680010203) ou international (example 33680010203)
		 * Required
		 */
		num: FormControl<string | null | undefined>,
		numAzur: FormControl<ComptageRequestComptage | null | undefined>,

		/**
		 * Message à envoyer aux destinataires. Le message doit être encodé au format utf-8 et ne contenir que des caractères existant dans l'alphabet GSM. Il est également possible d'envoyer (à l'étranger uniquement) des SMS en UCS-2, cf paramètre ucs2 pour plus de détails.
		 * Required
		 */
		sms: FormControl<string | null | undefined>,

		/**
		 * Le SMS long permet de dépasser la limite de 160 caractères en envoyant un message constitué
		 * de plusieurs SMS.
		 * Il est possible d’envoyer jusqu’à 6 SMS concaténés pour une longueur totale maximale de 918
		 * caractères par message.
		 * Pour des raisons technique, la limite par SMS concaténé étant de 153 caractères.
		 * En cas de modification de l’émetteur, il faut considérer l’ajout automatique de 12 caractères
		 * du « STOP SMS ».
		 * Pour envoyer un smslong, il faut ajouter le paramètre smslong aux appels. La valeur de SMS doit être le nombre maximum de sms concaténé autorisé.   Pour ne pas avoir ce message d’erreur et obtenir un calcul dynamique du nombre de SMS alors il faut renseigner smslong = "999"
		 */
		smslong: FormControl<ComptageRequestSmslong | null | undefined>,

		/** Le tracker doit être une chaine alphanumérique de moins de 50 caractères. Ce tracker sera ensuite renvoyé en paramètre des urls pour les retours des accusés de réception. */
		tracker: FormControl<string | null | undefined>,

		/**
		 * Il est également possible d’envoyer des SMS en alphabet non latin (russe, chinois, arabe, etc) sur
		 * les numéros hors France métropolitaine.
		 * Pour ce faire, la requête devrait être encodée au format UTF-8 et contenir l’argument ucs2 = "1"
		 * Du fait de contraintes techniques, 1 SMS unique ne pourra pas dépasser 70 caractères (au lieu
		 * des 160 usuels) et dans le cas de SMS long, chaque sms ne pourra dépasser 67 caractères.
		 */
		ucs2: FormControl<string | null | undefined>,
	}
	export function CreateComptageRequestFormGroup() {
		return new FormGroup<ComptageRequestFormProperties>({
			comptage: new FormControl<ComptageRequestComptage | null | undefined>(undefined, [Validators.required]),
			date_envoi: new FormControl<string | null | undefined>(undefined),
			emetteur: new FormControl<string | null | undefined>(undefined),
			gmt_zone: new FormControl<ComptageRequestGmt_zone | null | undefined>(undefined),
			keyid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nostop: new FormControl<string | null | undefined>(undefined),
			num: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			numAzur: new FormControl<ComptageRequestComptage | null | undefined>(undefined),
			sms: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			smslong: new FormControl<ComptageRequestSmslong | null | undefined>(undefined),
			tracker: new FormControl<string | null | undefined>(undefined),
			ucs2: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ComptageRequestComptage { _1 = 0 }

	export enum ComptageRequestGmt_zone { 'Pacific/Midway' = 0, 'America/Adak' = 1, 'Etc/GMT+10' = 2, 'Pacific/Marquesas' = 3, 'Pacific/Gambier' = 4, 'America/Anchorage' = 5, 'America/Ensenada' = 6, 'Etc/GMT+8' = 7, 'America/Los_Angeles' = 8, 'America/Denver' = 9, 'America/Chihuahua' = 10, 'America/Dawson_Creek' = 11, 'America/Belize' = 12, 'America/Cancun' = 13, 'Chile/EasterIsland' = 14, 'America/Chicago' = 15, 'America/New_York' = 16, 'America/Havana' = 17, 'America/Bogota' = 18, 'America/Caracas' = 19, 'America/Santiago' = 20, 'America/La_Paz' = 21, 'Atlantic/Stanley' = 22, 'America/Campo_Grande' = 23, 'America/Goose_Bay' = 24, 'America/Glace_Bay' = 25, 'America/St_Johns' = 26, 'America/Araguaina' = 27, 'America/Montevideo' = 28, 'America/Miquelon' = 29, 'America/Godthab' = 30, 'America/Argentina/Buenos_Aires' = 31, 'America/Sao_Paulo' = 32, 'America/Noronha' = 33, 'Atlantic/Cape_Verde' = 34, 'Atlantic/Azores' = 35, 'Europe/Belfast' = 36, 'Europe/Dublin' = 37, 'Europe/Lisbon' = 38, 'Europe/London' = 39, 'Africa/Abidjan' = 40, 'Europe/Amsterdam' = 41, 'Europe/Belgrade' = 42, 'Europe/Brussels' = 43, 'Africa/Algiers' = 44, 'Africa/Windhoek' = 45, 'Asia/Beirut' = 46, 'Africa/Cairo' = 47, 'Asia/Gaza' = 48, 'Africa/Blantyre' = 49, 'Asia/Jerusalem' = 50, 'Europe/Minsk' = 51, 'Asia/Damascus' = 52, 'Europe/Moscow' = 53, 'Africa/Addis_Ababa' = 54, 'Asia/Tehran' = 55, 'Asia/Dubai' = 56, 'Asia/Yerevan' = 57, 'Asia/Kabul' = 58, 'Asia/Yekaterinburg' = 59, 'Asia/Tashkent' = 60, 'Asia/Kolkata' = 61, 'Asia/Katmandu' = 62, 'Asia/Dhaka' = 63, 'Asia/Novosibirsk' = 64, 'Asia/Rangoon' = 65, 'Asia/Bangkok' = 66, 'Asia/Krasnoyarsk' = 67, 'Asia/Hong_Kong' = 68, 'Asia/Irkutsk' = 69, 'Australia/Perth' = 70, 'Australia/Eucla' = 71, 'Asia/Tokyo' = 72, 'Asia/Seoul' = 73, 'Asia/Yakutsk' = 74, 'Australia/Adelaide' = 75, 'Australia/Darwin' = 76, 'Australia/Brisbane' = 77, 'Australia/Hobart' = 78, 'Asia/Vladivostok' = 79, 'Australia/Lord_Howe' = 80, 'Etc/GMT-11' = 81, 'Asia/Magadan' = 82, 'Pacific/Norfolk' = 83, 'Asia/Anadyr' = 84, 'Pacific/Auckland' = 85, 'Etc/GMT-12' = 86, 'Pacific/Chatham' = 87, 'Pacific/Tongatapu' = 88, 'Pacific/Kiritimati' = 89 }

	export enum ComptageRequestSmslong { _999 = 0 }

	export interface CreditResponse {
		etat?: CreditResponse_etat;
	}
	export interface CreditResponseFormProperties {
	}
	export function CreateCreditResponseFormGroup() {
		return new FormGroup<CreditResponseFormProperties>({
		});

	}

	export interface CreditResponse_etat {

		/** Montant du crédit restant */
		credit?: number | null;

		/** Equivalence du crédit en nombre de SMS vers la France Métropolitaine. */
		quantite?: string | null;
	}
	export interface CreditResponse_etatFormProperties {

		/** Montant du crédit restant */
		credit: FormControl<number | null | undefined>,

		/** Equivalence du crédit en nombre de SMS vers la France Métropolitaine. */
		quantite: FormControl<string | null | undefined>,
	}
	export function CreateCreditResponse_etatFormGroup() {
		return new FormGroup<CreditResponse_etatFormProperties>({
			credit: new FormControl<number | null | undefined>(undefined),
			quantite: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Erreur {
		etat?: Erreur_etat;
	}
	export interface ErreurFormProperties {
	}
	export function CreateErreurFormGroup() {
		return new FormGroup<ErreurFormProperties>({
		});

	}

	export interface Erreur_etat {
		etat?: Array<Erreur_etat_etat>;
	}
	export interface Erreur_etatFormProperties {
	}
	export function CreateErreur_etatFormGroup() {
		return new FormGroup<Erreur_etatFormProperties>({
		});

	}

	export interface Erreur_etat_etat {

		/** Code retour. Voir "tableau des code retour" dans l'annexe de la documentation */
		code?: string | null;

		/** Libellé associé au code de retour */
		message?: string | null;
	}
	export interface Erreur_etat_etatFormProperties {

		/** Code retour. Voir "tableau des code retour" dans l'annexe de la documentation */
		code: FormControl<string | null | undefined>,

		/** Libellé associé au code de retour */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErreur_etat_etatFormGroup() {
		return new FormGroup<Erreur_etat_etatFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HLRReponse {
		etat?: HLRReponse_etat;
	}
	export interface HLRReponseFormProperties {
	}
	export function CreateHLRReponseFormGroup() {
		return new FormGroup<HLRReponseFormProperties>({
		});

	}

	export interface HLRReponse_etat {

		/**
		 * liste des retours
		 * Required
		 */
		etat: Array<HLRReponse_etat_etat>;
	}
	export interface HLRReponse_etatFormProperties {
	}
	export function CreateHLRReponse_etatFormGroup() {
		return new FormGroup<HLRReponse_etatFormProperties>({
		});

	}

	export interface HLRReponse_etat_etat {

		/**
		 * Opérateur associé (si numéro valide)
		 * Required
		 */
		operateur: string;

		/**
		 * Numero de téléphone concerné
		 * Required
		 */
		tel: string;
	}
	export interface HLRReponse_etat_etatFormProperties {

		/**
		 * Opérateur associé (si numéro valide)
		 * Required
		 */
		operateur: FormControl<string | null | undefined>,

		/**
		 * Numero de téléphone concerné
		 * Required
		 */
		tel: FormControl<string | null | undefined>,
	}
	export function CreateHLRReponse_etat_etatFormGroup() {
		return new FormGroup<HLRReponse_etat_etatFormProperties>({
			operateur: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HLRrequest {

		/**
		 * Doit valoir "1"
		 * Required
		 */
		getHLR: ComptageRequestComptage;

		/**
		 * Clé API
		 * Required
		 */
		keyid: string;

		/**
		 * liste de numéros de téléphone
		 * Required
		 */
		num: Array<string>;
	}
	export interface HLRrequestFormProperties {

		/**
		 * Doit valoir "1"
		 * Required
		 */
		getHLR: FormControl<ComptageRequestComptage | null | undefined>,

		/**
		 * Clé API
		 * Required
		 */
		keyid: FormControl<string | null | undefined>,
	}
	export function CreateHLRrequestFormGroup() {
		return new FormGroup<HLRrequestFormProperties>({
			getHLR: new FormControl<ComptageRequestComptage | null | undefined>(undefined, [Validators.required]),
			keyid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LISTENOIREReponse {
		etat?: LISTENOIREReponse_etat;
	}
	export interface LISTENOIREReponseFormProperties {
	}
	export function CreateLISTENOIREReponseFormGroup() {
		return new FormGroup<LISTENOIREReponseFormProperties>({
		});

	}

	export interface LISTENOIREReponse_etat {

		/** Required */
		etat: Array<LISTENOIREReponse_etat_etat>;
	}
	export interface LISTENOIREReponse_etatFormProperties {
	}
	export function CreateLISTENOIREReponse_etatFormGroup() {
		return new FormGroup<LISTENOIREReponse_etatFormProperties>({
		});

	}

	export interface LISTENOIREReponse_etat_etat {

		/**
		 * Doit valoir "OK"
		 * Required
		 */
		listeNoire: string;

		/**
		 * Numéro de téléphone à placer en liste noire. Format national Français ou international.
		 * Required
		 */
		tel: string;
	}
	export interface LISTENOIREReponse_etat_etatFormProperties {

		/**
		 * Doit valoir "OK"
		 * Required
		 */
		listeNoire: FormControl<string | null | undefined>,

		/**
		 * Numéro de téléphone à placer en liste noire. Format national Français ou international.
		 * Required
		 */
		tel: FormControl<string | null | undefined>,
	}
	export function CreateLISTENOIREReponse_etat_etatFormGroup() {
		return new FormGroup<LISTENOIREReponse_etat_etatFormProperties>({
			listeNoire: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface REPERTOIREcreatereponse {
		etat?: REPERTOIREcreatereponse_etat;
	}
	export interface REPERTOIREcreatereponseFormProperties {
	}
	export function CreateREPERTOIREcreatereponseFormGroup() {
		return new FormGroup<REPERTOIREcreatereponseFormProperties>({
		});

	}

	export interface REPERTOIREcreatereponse_etat {
		etat?: Array<REPERTOIREcreatereponse_etat_etat>;
	}
	export interface REPERTOIREcreatereponse_etatFormProperties {
	}
	export function CreateREPERTOIREcreatereponse_etatFormGroup() {
		return new FormGroup<REPERTOIREcreatereponse_etatFormProperties>({
		});

	}

	export interface REPERTOIREcreatereponse_etat_etat {

		/**
		 * Code retour. Voir "tableau des code retour" dans l'annexe de la documentation
		 * Required
		 */
		code: string;

		/** Libellé associé au code retour. */
		message?: string | null;

		/** repertoireId du repertoire crée. */
		repertoireId?: string | null;
	}
	export interface REPERTOIREcreatereponse_etat_etatFormProperties {

		/**
		 * Code retour. Voir "tableau des code retour" dans l'annexe de la documentation
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/** Libellé associé au code retour. */
		message: FormControl<string | null | undefined>,

		/** repertoireId du repertoire crée. */
		repertoireId: FormControl<string | null | undefined>,
	}
	export function CreateREPERTOIREcreatereponse_etat_etatFormGroup() {
		return new FormGroup<REPERTOIREcreatereponse_etat_etatFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined),
			repertoireId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface REPERTOIREcreaterequest {

		/**
		 * Clé API
		 * Required
		 */
		keyid: string;

		/**
		 * Action à réaliser doit valoir "create" ici.
		 * Required
		 */
		repertoireEdit: REPERTOIREcreaterequestRepertoireEdit;

		/**
		 * Nom du répertoire (libellé) à créer
		 * Required
		 */
		repertoireNom: string;
	}
	export interface REPERTOIREcreaterequestFormProperties {

		/**
		 * Clé API
		 * Required
		 */
		keyid: FormControl<string | null | undefined>,

		/**
		 * Action à réaliser doit valoir "create" ici.
		 * Required
		 */
		repertoireEdit: FormControl<REPERTOIREcreaterequestRepertoireEdit | null | undefined>,

		/**
		 * Nom du répertoire (libellé) à créer
		 * Required
		 */
		repertoireNom: FormControl<string | null | undefined>,
	}
	export function CreateREPERTOIREcreaterequestFormGroup() {
		return new FormGroup<REPERTOIREcreaterequestFormProperties>({
			keyid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			repertoireEdit: new FormControl<REPERTOIREcreaterequestRepertoireEdit | null | undefined>(undefined, [Validators.required]),
			repertoireNom: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum REPERTOIREcreaterequestRepertoireEdit { create = 0 }

	export interface REPERTOIREmodifreponse {
		etat?: REPERTOIREmodifreponse_etat;
	}
	export interface REPERTOIREmodifreponseFormProperties {
	}
	export function CreateREPERTOIREmodifreponseFormGroup() {
		return new FormGroup<REPERTOIREmodifreponseFormProperties>({
		});

	}

	export interface REPERTOIREmodifreponse_etat {
		etat?: Array<REPERTOIREmodifreponse_etat_etat>;
	}
	export interface REPERTOIREmodifreponse_etatFormProperties {
	}
	export function CreateREPERTOIREmodifreponse_etatFormGroup() {
		return new FormGroup<REPERTOIREmodifreponse_etatFormProperties>({
		});

	}


	/** Tableau de code retour. Si succès, un code retour distinct par numéro soumis. */
	export interface REPERTOIREmodifreponse_etat_etat {

		/**
		 * Code retour. Voir "tableau des code retour" dans l'annexe de la documentation
		 * Required
		 */
		code: string;

		/** Libellé associé au code retour. */
		message?: string | null;

		/** repertoireId passé en argument lors de l'appel */
		repertoireId?: string | null;

		/** Numéro de téléphone */
		tel?: string | null;
	}

	/** Tableau de code retour. Si succès, un code retour distinct par numéro soumis. */
	export interface REPERTOIREmodifreponse_etat_etatFormProperties {

		/**
		 * Code retour. Voir "tableau des code retour" dans l'annexe de la documentation
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/** Libellé associé au code retour. */
		message: FormControl<string | null | undefined>,

		/** repertoireId passé en argument lors de l'appel */
		repertoireId: FormControl<string | null | undefined>,

		/** Numéro de téléphone */
		tel: FormControl<string | null | undefined>,
	}
	export function CreateREPERTOIREmodifreponse_etat_etatFormGroup() {
		return new FormGroup<REPERTOIREmodifreponse_etat_etatFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined),
			repertoireId: new FormControl<string | null | undefined>(undefined),
			tel: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface REPERTOIREmodifrequest {

		/** Noms des contact */
		champ1?: Array<string>;

		/** Champs I des contacts */
		champ10?: Array<string>;

		/** Champs J des contacts */
		champ11?: Array<string>;

		/** Champs K des contacts */
		champ12?: Array<string>;

		/** Champs L des contacts */
		champ13?: Array<string>;

		/** Champs M des contacts */
		champ14?: Array<string>;

		/** Champs N des contacts */
		champ15?: Array<string>;

		/** Champs O des contacts */
		champ16?: Array<string>;

		/** Champs P des contacts */
		champ17?: Array<string>;

		/** Champs Q des contacts */
		champ18?: Array<string>;

		/** Champs R des contacts */
		champ19?: Array<string>;

		/** Champs A des contacts */
		champ2?: Array<string>;

		/** Champs S des contacts */
		champ20?: Array<string>;

		/** Champs T des contacts */
		champ21?: Array<string>;

		/** Champs U des contacts */
		champ22?: Array<string>;

		/** Champs V des contacts */
		champ23?: Array<string>;

		/** Champs W des contacts */
		champ24?: Array<string>;

		/** Champs X des contacts */
		champ25?: Array<string>;

		/** Champs Y des contacts */
		champ26?: Array<string>;

		/** Champs Z des contacts */
		champ27?: Array<string>;

		/** Champs B des contacts */
		champ3?: Array<string>;

		/** Champs C des contacts */
		champ4?: Array<string>;

		/** Champs D des contacts */
		champ5?: Array<string>;

		/** Champs E des contacts */
		champ6?: Array<string>;

		/** Champs F des contacts */
		champ7?: Array<string>;

		/** Champs G des contacts */
		champ8?: Array<string>;

		/** Champs H des contacts */
		champ9?: Array<string>;

		/**
		 * Clé API
		 * Required
		 */
		keyid: string;

		/**
		 * liste des numéros des téléphone à ajouter ou supprimer
		 * Required
		 */
		num: Array<string>;

		/**
		 * action à réaliser, "add" pour l'ajout de numéros, "del" pour la suppression de numéros
		 * Required
		 */
		repertoireEdit: REPERTOIREmodifrequestRepertoireEdit;

		/**
		 * repertoireId du répertoire cible
		 * Required
		 */
		repertoireId: string;
	}
	export interface REPERTOIREmodifrequestFormProperties {

		/**
		 * Clé API
		 * Required
		 */
		keyid: FormControl<string | null | undefined>,

		/**
		 * action à réaliser, "add" pour l'ajout de numéros, "del" pour la suppression de numéros
		 * Required
		 */
		repertoireEdit: FormControl<REPERTOIREmodifrequestRepertoireEdit | null | undefined>,

		/**
		 * repertoireId du répertoire cible
		 * Required
		 */
		repertoireId: FormControl<string | null | undefined>,
	}
	export function CreateREPERTOIREmodifrequestFormGroup() {
		return new FormGroup<REPERTOIREmodifrequestFormProperties>({
			keyid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			repertoireEdit: new FormControl<REPERTOIREmodifrequestRepertoireEdit | null | undefined>(undefined, [Validators.required]),
			repertoireId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum REPERTOIREmodifrequestRepertoireEdit { add = 0, del = 1 }

	export interface SMSReponse {
		etat?: SMSReponse_etat;
	}
	export interface SMSReponseFormProperties {
	}
	export function CreateSMSReponseFormGroup() {
		return new FormGroup<SMSReponseFormProperties>({
		});

	}

	export interface SMSReponse_etat {
		etat?: Array<SMSReponse_etat_etat>;
	}
	export interface SMSReponse_etatFormProperties {
	}
	export function CreateSMSReponse_etatFormGroup() {
		return new FormGroup<SMSReponse_etatFormProperties>({
		});

	}

	export interface SMSReponse_etat_etat {

		/** Code retour. Voir "tableau des code retour" dans l'annexe de la documentation */
		code?: number | null;

		/** Libellé associé au code de retour */
		message?: string | null;

		/** Nombre de SMS longs facturés */
		smslong?: string | null;

		/** Numero de téléphone concerné */
		tel?: string | null;
	}
	export interface SMSReponse_etat_etatFormProperties {

		/** Code retour. Voir "tableau des code retour" dans l'annexe de la documentation */
		code: FormControl<number | null | undefined>,

		/** Libellé associé au code de retour */
		message: FormControl<string | null | undefined>,

		/** Nombre de SMS longs facturés */
		smslong: FormControl<string | null | undefined>,

		/** Numero de téléphone concerné */
		tel: FormControl<string | null | undefined>,
	}
	export function CreateSMSReponse_etat_etatFormGroup() {
		return new FormGroup<SMSReponse_etat_etatFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			smslong: new FormControl<string | null | undefined>(undefined),
			tel: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SMSRequest {

		/** Paramètre optionnel, date d'envoi au format YYYY-MM-DD hh:mm */
		date_envoi?: string | null;

		/** L'emetteur doit être une chaîne alphanumérique comprise entre 4 et 11 caractères. Les caractères acceptés sont les chiffres entre 0 et 9, les lettres entre A et Z et l’espace. Il ne peut pas comporter uniquement des chiffres. Pour la modification de l’émetteur et dans le cadre de campagnes commerciales, les opérateurs imposent contractuellement d’ajouter en fin de message le texte suivant : STOP XXXXX De ce fait, le message envoyé ne pourra excéder une longueur de 148 caractères au lieu des 160 caractères, le « STOP » étant rajouté automatiquement. */
		emetteur?: string | null;

		/** Fuseau horaire de la date d'envoi */
		gmt_zone?: ComptageRequestGmt_zone | null;

		/**
		 * Clé API
		 * Required
		 */
		keyid: string;

		/** Si le message n’est pas à but commercial, vous pouvez faire une demande pour retirer l’obligation du STOP. Une fois votre demande validée par nos services, vous pourrez supprimer la mention STOP SMS en ajoutant nostop = "1" */
		nostop?: string | null;

		/** Required */
		num: Array<string>;
		numAzur?: ComptageRequestComptage | null;

		/** Id du repertoire */
		repertoireId?: string | null;

		/** Required */
		sms: Array<string>;

		/** Le SMS long permet de dépasser la limite de 160 caractères en envoyant un message constitué de plusieurs SMS. Il est possible d’envoyer jusqu’à 6 SMS concaténés pour une longueur totale maximale de 918 caractères par message. Pour des raisons technique, la limite par SMS concaténé étant de 153 caractères. En cas de modification de l’émetteur, il faut considérer l’ajout automatique de 12 caractères du « STOP SMS ». Pour envoyer un smslong, il faut ajouter le paramètre smslong aux appels. La valeur de SMS doit être le nombre maximum de sms concaténé autorisé.   Pour ne pas avoir ce message d’erreur et obtenir un calcul dynamique du nombre de SMS alors il faut renseigner smslong = "999" */
		smslong?: string | null;
		tracker?: Array<string>;

		/** Il est également possible d’envoyer des SMS en alphabet non latin (russe, chinois, arabe, etc) sur les numéros hors France métropolitaine. Pour ce faire, la requête devrait être encodée au format UTF-8 et contenir l’argument ucs2 = "1" Du fait de contraintes techniques, 1 SMS unique ne pourra pas dépasser 70 caractères (au lieu des 160 usuels) et dans le cas de SMS long, chaque sms ne pourra dépasser 67 caractères. */
		ucs2?: string | null;
	}
	export interface SMSRequestFormProperties {

		/** Paramètre optionnel, date d'envoi au format YYYY-MM-DD hh:mm */
		date_envoi: FormControl<string | null | undefined>,

		/** L'emetteur doit être une chaîne alphanumérique comprise entre 4 et 11 caractères. Les caractères acceptés sont les chiffres entre 0 et 9, les lettres entre A et Z et l’espace. Il ne peut pas comporter uniquement des chiffres. Pour la modification de l’émetteur et dans le cadre de campagnes commerciales, les opérateurs imposent contractuellement d’ajouter en fin de message le texte suivant : STOP XXXXX De ce fait, le message envoyé ne pourra excéder une longueur de 148 caractères au lieu des 160 caractères, le « STOP » étant rajouté automatiquement. */
		emetteur: FormControl<string | null | undefined>,

		/** Fuseau horaire de la date d'envoi */
		gmt_zone: FormControl<ComptageRequestGmt_zone | null | undefined>,

		/**
		 * Clé API
		 * Required
		 */
		keyid: FormControl<string | null | undefined>,

		/** Si le message n’est pas à but commercial, vous pouvez faire une demande pour retirer l’obligation du STOP. Une fois votre demande validée par nos services, vous pourrez supprimer la mention STOP SMS en ajoutant nostop = "1" */
		nostop: FormControl<string | null | undefined>,
		numAzur: FormControl<ComptageRequestComptage | null | undefined>,

		/** Id du repertoire */
		repertoireId: FormControl<string | null | undefined>,

		/** Le SMS long permet de dépasser la limite de 160 caractères en envoyant un message constitué de plusieurs SMS. Il est possible d’envoyer jusqu’à 6 SMS concaténés pour une longueur totale maximale de 918 caractères par message. Pour des raisons technique, la limite par SMS concaténé étant de 153 caractères. En cas de modification de l’émetteur, il faut considérer l’ajout automatique de 12 caractères du « STOP SMS ». Pour envoyer un smslong, il faut ajouter le paramètre smslong aux appels. La valeur de SMS doit être le nombre maximum de sms concaténé autorisé.   Pour ne pas avoir ce message d’erreur et obtenir un calcul dynamique du nombre de SMS alors il faut renseigner smslong = "999" */
		smslong: FormControl<string | null | undefined>,

		/** Il est également possible d’envoyer des SMS en alphabet non latin (russe, chinois, arabe, etc) sur les numéros hors France métropolitaine. Pour ce faire, la requête devrait être encodée au format UTF-8 et contenir l’argument ucs2 = "1" Du fait de contraintes techniques, 1 SMS unique ne pourra pas dépasser 70 caractères (au lieu des 160 usuels) et dans le cas de SMS long, chaque sms ne pourra dépasser 67 caractères. */
		ucs2: FormControl<string | null | undefined>,
	}
	export function CreateSMSRequestFormGroup() {
		return new FormGroup<SMSRequestFormProperties>({
			date_envoi: new FormControl<string | null | undefined>(undefined),
			emetteur: new FormControl<string | null | undefined>(undefined),
			gmt_zone: new FormControl<ComptageRequestGmt_zone | null | undefined>(undefined),
			keyid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nostop: new FormControl<string | null | undefined>(undefined),
			numAzur: new FormControl<ComptageRequestComptage | null | undefined>(undefined),
			repertoireId: new FormControl<string | null | undefined>(undefined),
			smslong: new FormControl<string | null | undefined>(undefined),
			ucs2: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ShortlinkRequest {

		/** Required */
		keyid: string;

		/** Required */
		shortlink: string;
	}
	export interface ShortlinkRequestFormProperties {

		/** Required */
		keyid: FormControl<string | null | undefined>,

		/** Required */
		shortlink: FormControl<string | null | undefined>,
	}
	export function CreateShortlinkRequestFormGroup() {
		return new FormGroup<ShortlinkRequestFormProperties>({
			keyid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			shortlink: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ShortlinkResponse {
		etat?: ShortlinkResponseEtat;
	}
	export interface ShortlinkResponseFormProperties {
	}
	export function CreateShortlinkResponseFormGroup() {
		return new FormGroup<ShortlinkResponseFormProperties>({
		});

	}

	export interface ShortlinkResponseEtat {
		ShortlinkResponseEtatEtat?: Array<ShortlinkResponseEtatEtat>;
	}
	export interface ShortlinkResponseEtatFormProperties {
	}
	export function CreateShortlinkResponseEtatFormGroup() {
		return new FormGroup<ShortlinkResponseEtatFormProperties>({
		});

	}

	export interface ShortlinkResponseEtatEtat {
		code?: number | null;
		message?: string | null;
		shortlink?: string | null;
	}
	export interface ShortlinkResponseEtatEtatFormProperties {
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
		shortlink: FormControl<string | null | undefined>,
	}
	export function CreateShortlinkResponseEtatEtatFormGroup() {
		return new FormGroup<ShortlinkResponseEtatEtatFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			shortlink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SmsUniqueRequest {

		/** Date d'envoi au format YYYY-MM-DD hh:mm . Ce paramètre est optionnel, si il est omis l'envoi est réalisé immédiatement. */
		date_envoi?: string | null;

		/**
		 * - L'emetteur doit être une chaîne alphanumérique comprise entre 4 et 11 caractères.
		 * - Les caractères acceptés sont les chiffres entre 0 et 9, les lettres entre A et Z et l’espace.
		 * - Il ne peut pas comporter uniquement des chiffres.
		 * - Pour la modification de l'émetteur et dans le cadre de campagnes commerciales, les opérateurs imposent contractuellement d'ajouter en fin de message le texte "STOP XXXXX". De ce fait, le message envoyé ne pourra excéder une longueur de 148 caractères au lieu des 160 caractères, le « STOP » étant rajouté automatiquement.
		 */
		emetteur?: string | null;

		/** Fuseau horaire de la date d'envoi */
		gmt_zone?: ComptageRequestGmt_zone | null;

		/**
		 * Clé API
		 * Required
		 */
		keyid: string;

		/** Si le message n’est pas à but commercial, vous pouvez faire une demande pour retirer l’obligation du STOP. Une fois votre demande validée par nos services, vous pourrez supprimer la mention STOP SMS en ajoutant nostop = "1" */
		nostop?: string | null;

		/**
		 * Numero de téléphone au format national (exemple 0680010203) ou international (example 33680010203)
		 * Required
		 */
		num: string;
		numAzur?: ComptageRequestComptage | null;

		/**
		 * Message à envoyer aux destinataires. Le message doit être encodé au format utf-8 et ne contenir que des caractères existant dans l'alphabet GSM. Il est également possible d'envoyer (à l'étranger uniquement) des SMS en UCS-2, cf paramètre ucs2 pour plus de détails.
		 * Required
		 */
		sms: string;

		/**
		 * Le SMS long permet de dépasser la limite de 160 caractères en envoyant un message constitué
		 * de plusieurs SMS.
		 * Il est possible d’envoyer jusqu’à 6 SMS concaténés pour une longueur totale maximale de 918
		 * caractères par message.
		 * Pour des raisons technique, la limite par SMS concaténé étant de 153 caractères.
		 * En cas de modification de l’émetteur, il faut considérer l’ajout automatique de 12 caractères
		 * du « STOP SMS ».
		 * Pour envoyer un smslong, il faut ajouter le paramètre smslong aux appels. La valeur de SMS doit être le nombre maximum de sms concaténé autorisé.   Pour ne pas avoir ce message d’erreur et obtenir un calcul dynamique du nombre de SMS alors il faut renseigner smslong = "999"
		 */
		smslong?: string | null;

		/** Le tracker doit être une chaine alphanumérique de moins de 50 caractères. Ce tracker sera ensuite renvoyé en paramètre des urls pour les retours des accusés de réception. */
		tracker?: string | null;

		/**
		 * Il est également possible d’envoyer des SMS en alphabet non latin (russe, chinois, arabe, etc) sur
		 * les numéros hors France métropolitaine.
		 * Pour ce faire, la requête devrait être encodée au format UTF-8 et contenir l’argument ucs2 = "1"
		 * Du fait de contraintes techniques, 1 SMS unique ne pourra pas dépasser 70 caractères (au lieu
		 * des 160 usuels) et dans le cas de SMS long, chaque sms ne pourra dépasser 67 caractères.
		 */
		ucs2?: string | null;
	}
	export interface SmsUniqueRequestFormProperties {

		/** Date d'envoi au format YYYY-MM-DD hh:mm . Ce paramètre est optionnel, si il est omis l'envoi est réalisé immédiatement. */
		date_envoi: FormControl<string | null | undefined>,

		/**
		 * - L'emetteur doit être une chaîne alphanumérique comprise entre 4 et 11 caractères.
		 * - Les caractères acceptés sont les chiffres entre 0 et 9, les lettres entre A et Z et l’espace.
		 * - Il ne peut pas comporter uniquement des chiffres.
		 * - Pour la modification de l'émetteur et dans le cadre de campagnes commerciales, les opérateurs imposent contractuellement d'ajouter en fin de message le texte "STOP XXXXX". De ce fait, le message envoyé ne pourra excéder une longueur de 148 caractères au lieu des 160 caractères, le « STOP » étant rajouté automatiquement.
		 */
		emetteur: FormControl<string | null | undefined>,

		/** Fuseau horaire de la date d'envoi */
		gmt_zone: FormControl<ComptageRequestGmt_zone | null | undefined>,

		/**
		 * Clé API
		 * Required
		 */
		keyid: FormControl<string | null | undefined>,

		/** Si le message n’est pas à but commercial, vous pouvez faire une demande pour retirer l’obligation du STOP. Une fois votre demande validée par nos services, vous pourrez supprimer la mention STOP SMS en ajoutant nostop = "1" */
		nostop: FormControl<string | null | undefined>,

		/**
		 * Numero de téléphone au format national (exemple 0680010203) ou international (example 33680010203)
		 * Required
		 */
		num: FormControl<string | null | undefined>,
		numAzur: FormControl<ComptageRequestComptage | null | undefined>,

		/**
		 * Message à envoyer aux destinataires. Le message doit être encodé au format utf-8 et ne contenir que des caractères existant dans l'alphabet GSM. Il est également possible d'envoyer (à l'étranger uniquement) des SMS en UCS-2, cf paramètre ucs2 pour plus de détails.
		 * Required
		 */
		sms: FormControl<string | null | undefined>,

		/**
		 * Le SMS long permet de dépasser la limite de 160 caractères en envoyant un message constitué
		 * de plusieurs SMS.
		 * Il est possible d’envoyer jusqu’à 6 SMS concaténés pour une longueur totale maximale de 918
		 * caractères par message.
		 * Pour des raisons technique, la limite par SMS concaténé étant de 153 caractères.
		 * En cas de modification de l’émetteur, il faut considérer l’ajout automatique de 12 caractères
		 * du « STOP SMS ».
		 * Pour envoyer un smslong, il faut ajouter le paramètre smslong aux appels. La valeur de SMS doit être le nombre maximum de sms concaténé autorisé.   Pour ne pas avoir ce message d’erreur et obtenir un calcul dynamique du nombre de SMS alors il faut renseigner smslong = "999"
		 */
		smslong: FormControl<string | null | undefined>,

		/** Le tracker doit être une chaine alphanumérique de moins de 50 caractères. Ce tracker sera ensuite renvoyé en paramètre des urls pour les retours des accusés de réception. */
		tracker: FormControl<string | null | undefined>,

		/**
		 * Il est également possible d’envoyer des SMS en alphabet non latin (russe, chinois, arabe, etc) sur
		 * les numéros hors France métropolitaine.
		 * Pour ce faire, la requête devrait être encodée au format UTF-8 et contenir l’argument ucs2 = "1"
		 * Du fait de contraintes techniques, 1 SMS unique ne pourra pas dépasser 70 caractères (au lieu
		 * des 160 usuels) et dans le cas de SMS long, chaque sms ne pourra dépasser 67 caractères.
		 */
		ucs2: FormControl<string | null | undefined>,
	}
	export function CreateSmsUniqueRequestFormGroup() {
		return new FormGroup<SmsUniqueRequestFormProperties>({
			date_envoi: new FormControl<string | null | undefined>(undefined),
			emetteur: new FormControl<string | null | undefined>(undefined),
			gmt_zone: new FormControl<ComptageRequestGmt_zone | null | undefined>(undefined),
			keyid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nostop: new FormControl<string | null | undefined>(undefined),
			num: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			numAzur: new FormControl<ComptageRequestComptage | null | undefined>(undefined),
			sms: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			smslong: new FormControl<string | null | undefined>(undefined),
			tracker: new FormControl<string | null | undefined>(undefined),
			ucs2: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SubaccountAddRequest {

		/** Required */
		keyid: string;

		/** Required */
		subAccountEdit: SubaccountAddRequestSubAccountEdit;

		/** Required */
		subAccountLogin: string;

		/** Required */
		subAccountPassword: string;
	}
	export interface SubaccountAddRequestFormProperties {

		/** Required */
		keyid: FormControl<string | null | undefined>,

		/** Required */
		subAccountEdit: FormControl<SubaccountAddRequestSubAccountEdit | null | undefined>,

		/** Required */
		subAccountLogin: FormControl<string | null | undefined>,

		/** Required */
		subAccountPassword: FormControl<string | null | undefined>,
	}
	export function CreateSubaccountAddRequestFormGroup() {
		return new FormGroup<SubaccountAddRequestFormProperties>({
			keyid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subAccountEdit: new FormControl<SubaccountAddRequestSubAccountEdit | null | undefined>(undefined, [Validators.required]),
			subAccountLogin: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subAccountPassword: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SubaccountAddRequestSubAccountEdit { addAccount = 0 }

	export interface SubaccountAddResponse {
		etat?: SubaccountAddResponseEtat;
	}
	export interface SubaccountAddResponseFormProperties {
	}
	export function CreateSubaccountAddResponseFormGroup() {
		return new FormGroup<SubaccountAddResponseFormProperties>({
		});

	}

	export interface SubaccountAddResponseEtat {
		SubaccountAddResponseEtatEtat?: Array<SubaccountAddResponseEtatEtat>;
	}
	export interface SubaccountAddResponseEtatFormProperties {
	}
	export function CreateSubaccountAddResponseEtatFormGroup() {
		return new FormGroup<SubaccountAddResponseEtatFormProperties>({
		});

	}

	export interface SubaccountAddResponseEtatEtat {
		code?: number | null;
		message?: string | null;
		subAccountId?: string | null;
		subAccountKeyId?: string | null;
		subAccountLogin?: string | null;
	}
	export interface SubaccountAddResponseEtatEtatFormProperties {
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
		subAccountId: FormControl<string | null | undefined>,
		subAccountKeyId: FormControl<string | null | undefined>,
		subAccountLogin: FormControl<string | null | undefined>,
	}
	export function CreateSubaccountAddResponseEtatEtatFormGroup() {
		return new FormGroup<SubaccountAddResponseEtatEtatFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			subAccountId: new FormControl<string | null | undefined>(undefined),
			subAccountKeyId: new FormControl<string | null | undefined>(undefined),
			subAccountLogin: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SubaccountRequest {

		/**
		 * Clé API
		 * Required
		 */
		keyid: string;

		/** montant du crédit à ajouter */
		subAccountAddCredit?: string | null;
		subAccountCountryCode?: string | null;

		/**
		 * action à réaliser soit setPrice pour définir un prix ou addCredit pour ajouter du credit ou setRestriction modifier la restriction stop /
		 * Required
		 */
		subAccountEdit: SubaccountRequestSubAccountEdit;

		/** keyid du sous-compte */
		subAccountKeyId?: string | null;
		subAccountPrice?: string | null;
		subAccountRestrictionStop?: SubaccountRequestSubAccountRestrictionStop | null;
		subAccountRestrictionTime?: SubaccountRequestSubAccountRestrictionStop | null;
	}
	export interface SubaccountRequestFormProperties {

		/**
		 * Clé API
		 * Required
		 */
		keyid: FormControl<string | null | undefined>,

		/** montant du crédit à ajouter */
		subAccountAddCredit: FormControl<string | null | undefined>,
		subAccountCountryCode: FormControl<string | null | undefined>,

		/**
		 * action à réaliser soit setPrice pour définir un prix ou addCredit pour ajouter du credit ou setRestriction modifier la restriction stop /
		 * Required
		 */
		subAccountEdit: FormControl<SubaccountRequestSubAccountEdit | null | undefined>,

		/** keyid du sous-compte */
		subAccountKeyId: FormControl<string | null | undefined>,
		subAccountPrice: FormControl<string | null | undefined>,
		subAccountRestrictionStop: FormControl<SubaccountRequestSubAccountRestrictionStop | null | undefined>,
		subAccountRestrictionTime: FormControl<SubaccountRequestSubAccountRestrictionStop | null | undefined>,
	}
	export function CreateSubaccountRequestFormGroup() {
		return new FormGroup<SubaccountRequestFormProperties>({
			keyid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subAccountAddCredit: new FormControl<string | null | undefined>(undefined),
			subAccountCountryCode: new FormControl<string | null | undefined>(undefined),
			subAccountEdit: new FormControl<SubaccountRequestSubAccountEdit | null | undefined>(undefined, [Validators.required]),
			subAccountKeyId: new FormControl<string | null | undefined>(undefined),
			subAccountPrice: new FormControl<string | null | undefined>(undefined),
			subAccountRestrictionStop: new FormControl<SubaccountRequestSubAccountRestrictionStop | null | undefined>(undefined),
			subAccountRestrictionTime: new FormControl<SubaccountRequestSubAccountRestrictionStop | null | undefined>(undefined),
		});

	}

	export enum SubaccountRequestSubAccountEdit { setPrice = 0, addCredit = 1, setRestriction = 2 }

	export enum SubaccountRequestSubAccountRestrictionStop { _0 = 0, _1 = 1 }

	export interface SubaccountResponse {
		etat?: SubaccountResponseEtat;
	}
	export interface SubaccountResponseFormProperties {
	}
	export function CreateSubaccountResponseFormGroup() {
		return new FormGroup<SubaccountResponseFormProperties>({
		});

	}

	export interface SubaccountResponseEtat {
		SubaccountResponseEtatEtat?: Array<SubaccountResponseEtatEtat>;
	}
	export interface SubaccountResponseEtatFormProperties {
	}
	export function CreateSubaccountResponseEtatFormGroup() {
		return new FormGroup<SubaccountResponseEtatFormProperties>({
		});

	}

	export interface SubaccountResponseEtatEtat {
		code?: string | null;
		message?: string | null;
		subAccountId?: string | null;
		subAccountKeyid?: string | null;
	}
	export interface SubaccountResponseEtatEtatFormProperties {
		code: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
		subAccountId: FormControl<string | null | undefined>,
		subAccountKeyid: FormControl<string | null | undefined>,
	}
	export function CreateSubaccountResponseEtatEtatFormGroup() {
		return new FormGroup<SubaccountResponseEtatEtatFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			subAccountId: new FormControl<string | null | undefined>(undefined),
			subAccountKeyid: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retourne les SMS envoyés sur une période donnée
		 * Retourne les SMS envoyés sur une période donnée en fonction d'une date de début et d'une date de fin.
		 * Les dates sont au format YYYY-MM-DD hh:mm.
		 * Le fichier rapport de campagne est sous la forme d'un fichier zip + contenant un fichier csv contenant le détail des envois.
		 * Get campagne
		 * @param {string} keyid Clé API
		 * @param {ComptageRequestComptage} rapportCampagne Doit valoir "1"
		 * @param {string} date_deb date de debut au format YYYY-MM-DD hh:mm
		 * @param {string} date_fin date de fin au format YYYY-MM-DD hh:mm
		 * @return {string} Successful response
		 */
		GetCampagne(keyid: string, rapportCampagne: ComptageRequestComptage, date_deb: string, date_fin: string): Observable<string> {
			return this.http.get(this.baseUri + 'campagne?keyid=' + (keyid == null ? '' : encodeURIComponent(keyid)) + '&rapportCampagne=' + rapportCampagne + '&date_deb=' + (date_deb == null ? '' : encodeURIComponent(date_deb)) + '&date_fin=' + (date_fin == null ? '' : encodeURIComponent(date_fin)), { responseType: 'text' });
		}

		/**
		 * Compter le nombre de caractère
		 * Compte le nombre de SMS necessaire à un envoi
		 * Post comptage
		 * @param {ComptageRequest} requestBody sms request
		 * @return {ComptageReponse} Reponse OK
		 */
		Comptage(requestBody: ComptageRequest): Observable<ComptageReponse> {
			return this.http.post<ComptageReponse>(this.baseUri + 'comptage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Interrogation credit
		 * Retourne le credit existant associe au compte.
		 * Get credit
		 * @param {string} keyid Clé API
		 * @param {GetCreditCredit} credit Type de reponse demandée, 1 pour euro, 2 pour euro + estimation quantité
		 * @return {CreditResponse} Successful response
		 */
		GetCredit(keyid: string, credit: GetCreditCredit): Observable<CreditResponse> {
			return this.http.get<CreditResponse>(this.baseUri + 'credit?keyid=' + (keyid == null ? '' : encodeURIComponent(keyid)) + '&credit=' + credit, {});
		}

		/**
		 * Ajoute un numero en liste noire
		 * Supprime un numero en liste noire
		 * Post dellistenoire
		 * @param {string} keyid Clé API
		 * @param {ComptageRequestComptage} delListeNoire Doit valoir "1"
		 * @param {string} num numéro de mobile à supprimer
		 * @return {LISTENOIREReponse} Successful response
		 */
		DelListeNoire(keyid: string, delListeNoire: ComptageRequestComptage, num: string): Observable<LISTENOIREReponse> {
			return this.http.post<LISTENOIREReponse>(this.baseUri + 'dellistenoire?keyid=' + (keyid == null ? '' : encodeURIComponent(keyid)) + '&delListeNoire=' + delListeNoire + '&num=' + (num == null ? '' : encodeURIComponent(num)), null, {});
		}

		/**
		 * Retourne le liste noire
		 * Retourne un fichier csv zippé contenant la liste noire
		 * Post getlistenoire
		 * @param {string} keyid Clé API
		 * @param {ComptageRequestComptage} getListeNoire Doit valoir "1"
		 * @return {string} Successful response
		 */
		GetListeNoire(keyid: string, getListeNoire: ComptageRequestComptage): Observable<string> {
			return this.http.post(this.baseUri + 'getlistenoire?keyid=' + (keyid == null ? '' : encodeURIComponent(keyid)) + '&getListeNoire=' + getListeNoire, null, { responseType: 'text' });
		}

		/**
		 * Vérifier la validité d'un numéro
		 * Réalise un lookup HLR sur les numéros
		 * Post hlr
		 * @return {HLRReponse} Reponse OK
		 */
		GetHlr(requestBody: HLRrequest): Observable<HLRReponse> {
			return this.http.post<HLRReponse>(this.baseUri + 'hlr', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gestion repertoire (creation)
		 * Cree un nouveau répertoire et retourne son identifiant. Cet identifiant pourra être utilisé pour ajouter ou supprimer des numéros via l'API.
		 * Post repertoire
		 * @param {REPERTOIREcreaterequest} requestBody Creation repertoire
		 * @return {REPERTOIREcreatereponse} Successful response
		 */
		RepertoireCrea(requestBody: REPERTOIREcreaterequest): Observable<REPERTOIREcreatereponse> {
			return this.http.post<REPERTOIREcreatereponse>(this.baseUri + 'repertoire', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gestion repertoire (modification)
		 * Ajoute ou supprime une liste de numéros à un répertoire existant.
		 * Put repertoire
		 * @param {REPERTOIREmodifrequest} requestBody Requête de creation repertoire
		 * @return {REPERTOIREmodifreponse} Successful response
		 */
		Repertoire(requestBody: REPERTOIREmodifrequest): Observable<REPERTOIREmodifreponse> {
			return this.http.put<REPERTOIREmodifreponse>(this.baseUri + 'repertoire', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Ajoute un numero en liste noire
		 * Ajoute un numero en liste noire. Une fois ajouté, les requêtes d'envoi de SMS marketing vers ce numéro seront refusées.
		 * Post setlistenoire
		 * @param {string} keyid Clé API
		 * @param {ComptageRequestComptage} setlisteNoire Doit valoir "1"
		 * @param {string} num numéro de mobile à insérer en liste noire
		 * @return {LISTENOIREReponse} Successful response
		 */
		SetListeNoire(keyid: string, setlisteNoire: ComptageRequestComptage, num: string): Observable<LISTENOIREReponse> {
			return this.http.post<LISTENOIREReponse>(this.baseUri + 'setlistenoire?keyid=' + (keyid == null ? '' : encodeURIComponent(keyid)) + '&setlisteNoire=' + setlisteNoire + '&num=' + (num == null ? '' : encodeURIComponent(num)), null, {});
		}

		/**
		 * add a shortlink
		 * add a shortlink
		 * Post shortlink
		 * @param {ShortlinkRequest} requestBody add sub account request
		 * @return {ShortlinkResponse} Reponse OK
		 */
		AddShortlink(requestBody: ShortlinkRequest): Observable<ShortlinkResponse> {
			return this.http.post<ShortlinkResponse>(this.baseUri + 'shortlink', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Envoyer un sms
		 * Envoi un sms vers un unique destinataire
		 * Post sms
		 * @param {SmsUniqueRequest} requestBody sms request
		 * @return {SMSReponse} Reponse OK
		 */
		SendSms(requestBody: SmsUniqueRequest): Observable<SMSReponse> {
			return this.http.post<SMSReponse>(this.baseUri + 'sms', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Envoyer des SMS
		 * Envoi de SMS vers 1 ou plusieurs destinataires
		 * Post smsmulti
		 * @param {SMSRequest} requestBody sms request
		 * @return {SMSReponse} Reponse OK
		 */
		SendSmsMulti(requestBody: SMSRequest): Observable<SMSReponse> {
			return this.http.post<SMSReponse>(this.baseUri + 'smsmulti', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Ajoute un sous compte
		 * Ajoute un sous compte
		 * Post subaccount
		 * @param {SubaccountAddRequest} requestBody add sub account request
		 * @return {SubaccountAddResponse} Reponse OK
		 */
		SubaccountAdd(requestBody: SubaccountAddRequest): Observable<SubaccountAddResponse> {
			return this.http.post<SubaccountAddResponse>(this.baseUri + 'subaccount', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Edit a subaccount
		 * Edit a subaccount
		 * Put subaccount
		 * @param {SubaccountRequest} requestBody edit sub account request
		 * @return {SubaccountResponse} Reponse OK
		 */
		SubaccountEdit(requestBody: SubaccountRequest): Observable<SubaccountResponse> {
			return this.http.put<SubaccountResponse>(this.baseUri + 'subaccount', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum GetCreditCredit { _1 = 0, _2 = 1 }

}

