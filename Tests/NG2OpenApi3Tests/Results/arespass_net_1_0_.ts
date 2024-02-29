import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/**
	 * **This API version number**.
	 */
	export interface About {

		/**
		 * **The release date of this API, ISO 8601 format.**
		 */
		apiReleaseDateIso8601?: string | null;
		apiVersion?: AboutApiVersion;

		/**
		 * **The list of available languages.**
		 * Each language is identified by its ISO 639-1, two-letter code.
		 * The list elements are comma-separated and sorted in ascending order.
		 */
		availableLanguagesIso639_1?: string | null;
	}

	/**
	 * **This API version number**.
	 */
	export interface AboutFormProperties {

		/**
		 * **The release date of this API, ISO 8601 format.**
		 */
		apiReleaseDateIso8601: FormControl<string | null | undefined>,

		/**
		 * **The list of available languages.**
		 * Each language is identified by its ISO 639-1, two-letter code.
		 * The list elements are comma-separated and sorted in ascending order.
		 */
		availableLanguagesIso639_1: FormControl<string | null | undefined>,
	}
	export function CreateAboutFormGroup() {
		return new FormGroup<AboutFormProperties>({
			apiReleaseDateIso8601: new FormControl<string | null | undefined>(undefined),
			availableLanguagesIso639_1: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AboutApiVersion {

		/**
		 * This API version major number.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		majorNumber?: number | null;

		/**
		 * This API version minor number.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minorNumber?: number | null;
	}
	export interface AboutApiVersionFormProperties {

		/**
		 * This API version major number.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		majorNumber: FormControl<number | null | undefined>,

		/**
		 * This API version minor number.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minorNumber: FormControl<number | null | undefined>,
	}
	export function CreateAboutApiVersionFormGroup() {
		return new FormGroup<AboutApiVersionFormProperties>({
			majorNumber: new FormControl<number | null | undefined>(undefined),
			minorNumber: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Ec {

		/**
		 * **The penalty applied to each character that has been found to be part of an alphabet sequence.**
		 * The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.
		 */
		EcAlphabetSequence?: Array<EcAlphabetSequence>;

		/**
		 * **This API version number.**
		 */
		apiVersion?: string | null;

		/**
		 * **The detected keyboard, QWERTY or Dvorak.**
		 */
		detectedKeyboard?: string | null;

		/**
		 * **The ratio entropy / idealEntropy.**
		 * It is a float number in the range [0, 1].
		 * Type: double
		 */
		efficiency?: number | null;

		/**
		 * **The entropy calculated for the input password.**
		 * It is measured in bits.
		 * Type: double
		 */
		entropy?: number | null;

		/**
		 * **The distribution of the calculated entropy among the password characters.**
		 */
		EcEntropyDistribution?: Array<EcEntropyDistribution>;

		/**
		 * **The Shannon entropy.**
		 * The Shannon entropy is the entropy calculated if no penalizations - words, number sequence, alphabet sequence, etc - were found in the password.
		 * It is measured in bits.
		 * Type: double
		 */
		idealEntropy?: number | null;

		/**
		 * **The penalty applied to each character that has been found to be part of a keyboard sequence.**
		 * The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.
		 */
		EcKeyboardSequence?: Array<EcKeyboardSequence>;

		/** The analyzed password after the l33t substitution. */
		l33tPassword?: string | null;

		/**
		 * **The penalty applied to the whole password because of irregular entropy distribution.**
		 * This penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.
		 * Type: double
		 */
		nonUniformEntropyDistributionPenalty?: number | null;

		/**
		 * **The penalty applied to each character that has been found to be part of a number sequence.**
		 * The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.
		 */
		EcNumberSequence?: Array<EcNumberSequence>;

		/** The analyzed password. */
		password?: string | null;

		/**
		 * The number of characters the password has.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		passwordLength?: number | null;

		/**
		 * **The penalty applied to each character that has been found to be part of a word, number sequence, alphabet sequence, etc.**
		 * The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.
		 * Its value is equal to the value of the input parameter *penalty*.
		 * Type: double
		 */
		penalty?: number | null;

		/**
		 * **The penalty applied to each character that are repeated**
		 * The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.
		 */
		EcRepeatedChars?: Array<EcRepeatedChars>;

		/**
		 * **The identifier of the request that corresponds to this response.**
		 */
		requestId?: string | null;

		/**
		 * **The timestamp for this response.**
		 * Milliseconds from the epoch of 1970-01-01T00:00:00Z.
		 * Type: double
		 */
		requestTimestamp?: number | null;
		summary?: Array<string>;

		/**
		 * **The total penalty applied to each character.**
		 * The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.
		 */
		EcTotal?: Array<EcTotal>;

		/**
		 * **The penalty applied to each character that has been found to be part of a word.**
		 * The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.
		 */
		EcWords?: Array<EcWords>;
	}
	export interface EcFormProperties {

		/**
		 * **This API version number.**
		 */
		apiVersion: FormControl<string | null | undefined>,

		/**
		 * **The detected keyboard, QWERTY or Dvorak.**
		 */
		detectedKeyboard: FormControl<string | null | undefined>,

		/**
		 * **The ratio entropy / idealEntropy.**
		 * It is a float number in the range [0, 1].
		 * Type: double
		 */
		efficiency: FormControl<number | null | undefined>,

		/**
		 * **The entropy calculated for the input password.**
		 * It is measured in bits.
		 * Type: double
		 */
		entropy: FormControl<number | null | undefined>,

		/**
		 * **The Shannon entropy.**
		 * The Shannon entropy is the entropy calculated if no penalizations - words, number sequence, alphabet sequence, etc - were found in the password.
		 * It is measured in bits.
		 * Type: double
		 */
		idealEntropy: FormControl<number | null | undefined>,

		/** The analyzed password after the l33t substitution. */
		l33tPassword: FormControl<string | null | undefined>,

		/**
		 * **The penalty applied to the whole password because of irregular entropy distribution.**
		 * This penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.
		 * Type: double
		 */
		nonUniformEntropyDistributionPenalty: FormControl<number | null | undefined>,

		/** The analyzed password. */
		password: FormControl<string | null | undefined>,

		/**
		 * The number of characters the password has.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		passwordLength: FormControl<number | null | undefined>,

		/**
		 * **The penalty applied to each character that has been found to be part of a word, number sequence, alphabet sequence, etc.**
		 * The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.
		 * Its value is equal to the value of the input parameter *penalty*.
		 * Type: double
		 */
		penalty: FormControl<number | null | undefined>,

		/**
		 * **The identifier of the request that corresponds to this response.**
		 */
		requestId: FormControl<string | null | undefined>,

		/**
		 * **The timestamp for this response.**
		 * Milliseconds from the epoch of 1970-01-01T00:00:00Z.
		 * Type: double
		 */
		requestTimestamp: FormControl<number | null | undefined>,
	}
	export function CreateEcFormGroup() {
		return new FormGroup<EcFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			detectedKeyboard: new FormControl<string | null | undefined>(undefined),
			efficiency: new FormControl<number | null | undefined>(undefined),
			entropy: new FormControl<number | null | undefined>(undefined),
			idealEntropy: new FormControl<number | null | undefined>(undefined),
			l33tPassword: new FormControl<string | null | undefined>(undefined),
			nonUniformEntropyDistributionPenalty: new FormControl<number | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			passwordLength: new FormControl<number | null | undefined>(undefined),
			penalty: new FormControl<number | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
			requestTimestamp: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EcAlphabetSequence {

		/** The n-th character. */
		char?: string | null;

		/** The n-th character after the l33t transformation. */
		l33tchar?: string | null;

		/**
		 * The penalty applied to this character if it is part of an alphabet sequence.
		 * The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.
		 * Type: double
		 */
		penalty?: number | null;
	}
	export interface EcAlphabetSequenceFormProperties {

		/** The n-th character. */
		char: FormControl<string | null | undefined>,

		/** The n-th character after the l33t transformation. */
		l33tchar: FormControl<string | null | undefined>,

		/**
		 * The penalty applied to this character if it is part of an alphabet sequence.
		 * The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.
		 * Type: double
		 */
		penalty: FormControl<number | null | undefined>,
	}
	export function CreateEcAlphabetSequenceFormGroup() {
		return new FormGroup<EcAlphabetSequenceFormProperties>({
			char: new FormControl<string | null | undefined>(undefined),
			l33tchar: new FormControl<string | null | undefined>(undefined),
			penalty: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EcEntropyDistribution {

		/** The n-th character. */
		char?: string | null;

		/** The n-th character after the l33t transformation. */
		l33tchar?: string | null;

		/**
		 * The amount of entropy contributed by this character, expressed as percentage of the total.
		 * Type: double
		 */
		percentage?: number | null;
	}
	export interface EcEntropyDistributionFormProperties {

		/** The n-th character. */
		char: FormControl<string | null | undefined>,

		/** The n-th character after the l33t transformation. */
		l33tchar: FormControl<string | null | undefined>,

		/**
		 * The amount of entropy contributed by this character, expressed as percentage of the total.
		 * Type: double
		 */
		percentage: FormControl<number | null | undefined>,
	}
	export function CreateEcEntropyDistributionFormGroup() {
		return new FormGroup<EcEntropyDistributionFormProperties>({
			char: new FormControl<string | null | undefined>(undefined),
			l33tchar: new FormControl<string | null | undefined>(undefined),
			percentage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EcKeyboardSequence {

		/** The n-th character. */
		char?: string | null;

		/** The n-th character after the l33t transformation. */
		l33tchar?: string | null;

		/**
		 * The penalty applied to this character if it is part of a keyboard sequence.
		 * The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.
		 * Type: double
		 */
		penalty?: number | null;
	}
	export interface EcKeyboardSequenceFormProperties {

		/** The n-th character. */
		char: FormControl<string | null | undefined>,

		/** The n-th character after the l33t transformation. */
		l33tchar: FormControl<string | null | undefined>,

		/**
		 * The penalty applied to this character if it is part of a keyboard sequence.
		 * The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.
		 * Type: double
		 */
		penalty: FormControl<number | null | undefined>,
	}
	export function CreateEcKeyboardSequenceFormGroup() {
		return new FormGroup<EcKeyboardSequenceFormProperties>({
			char: new FormControl<string | null | undefined>(undefined),
			l33tchar: new FormControl<string | null | undefined>(undefined),
			penalty: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EcNumberSequence {

		/** The n-th character. */
		char?: string | null;

		/** The n-th character after the l33t transformation. */
		l33tchar?: string | null;

		/**
		 * The penalty applied to this character if it is part of a number sequence.
		 * The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.
		 * Type: double
		 */
		penalty?: number | null;
	}
	export interface EcNumberSequenceFormProperties {

		/** The n-th character. */
		char: FormControl<string | null | undefined>,

		/** The n-th character after the l33t transformation. */
		l33tchar: FormControl<string | null | undefined>,

		/**
		 * The penalty applied to this character if it is part of a number sequence.
		 * The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.
		 * Type: double
		 */
		penalty: FormControl<number | null | undefined>,
	}
	export function CreateEcNumberSequenceFormGroup() {
		return new FormGroup<EcNumberSequenceFormProperties>({
			char: new FormControl<string | null | undefined>(undefined),
			l33tchar: new FormControl<string | null | undefined>(undefined),
			penalty: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EcRepeatedChars {

		/** The n-th character. */
		char?: string | null;

		/** The n-th character after the l33t transformation. */
		l33tchar?: string | null;

		/**
		 * The penalty applied to this character if it is repeated.
		 * The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.
		 * Type: double
		 */
		penalty?: number | null;
	}
	export interface EcRepeatedCharsFormProperties {

		/** The n-th character. */
		char: FormControl<string | null | undefined>,

		/** The n-th character after the l33t transformation. */
		l33tchar: FormControl<string | null | undefined>,

		/**
		 * The penalty applied to this character if it is repeated.
		 * The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.
		 * Type: double
		 */
		penalty: FormControl<number | null | undefined>,
	}
	export function CreateEcRepeatedCharsFormGroup() {
		return new FormGroup<EcRepeatedCharsFormProperties>({
			char: new FormControl<string | null | undefined>(undefined),
			l33tchar: new FormControl<string | null | undefined>(undefined),
			penalty: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EcTotal {

		/** The n-th character. */
		char?: string | null;

		/** The n-th character after the l33t transformation. */
		l33tchar?: string | null;

		/**
		 * The total penalty applied to each character.
		 * The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.
		 * Type: double
		 */
		penalty?: number | null;
	}
	export interface EcTotalFormProperties {

		/** The n-th character. */
		char: FormControl<string | null | undefined>,

		/** The n-th character after the l33t transformation. */
		l33tchar: FormControl<string | null | undefined>,

		/**
		 * The total penalty applied to each character.
		 * The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.
		 * Type: double
		 */
		penalty: FormControl<number | null | undefined>,
	}
	export function CreateEcTotalFormGroup() {
		return new FormGroup<EcTotalFormProperties>({
			char: new FormControl<string | null | undefined>(undefined),
			l33tchar: new FormControl<string | null | undefined>(undefined),
			penalty: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EcWords {

		/** The n-th character. */
		char?: string | null;

		/** The n-th character after the l33t transformation. */
		l33tchar?: string | null;

		/**
		 * The penalty applied to this character if it is part of a word.
		 * The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.
		 * Type: double
		 */
		penalty?: number | null;
	}
	export interface EcWordsFormProperties {

		/** The n-th character. */
		char: FormControl<string | null | undefined>,

		/** The n-th character after the l33t transformation. */
		l33tchar: FormControl<string | null | undefined>,

		/**
		 * The penalty applied to this character if it is part of a word.
		 * The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.
		 * Type: double
		 */
		penalty: FormControl<number | null | undefined>,
	}
	export function CreateEcWordsFormGroup() {
		return new FormGroup<EcWordsFormProperties>({
			char: new FormControl<string | null | undefined>(undefined),
			l33tchar: new FormControl<string | null | undefined>(undefined),
			penalty: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Metadata about this API&#58; version number, release date and available languages.
		 * Metadata requests are NOT billed.
		 * Get about
		 * @param {string} outputFormat **The format of the returned metadata.**
		 * Allowed values are *json*, *xml* and *yaml*.
		 * The default value is *xml*.
		 * @return {About} **The metadata about this API&#58; version number, release date and available languages.**
		 */
		AboutGetByOutputFormat(outputFormat: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<About> {
			return this.http.get<About>(this.baseUri + 'about?outputFormat=' + (outputFormat == null ? '' : encodeURIComponent(outputFormat)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * The entropy calculator - alias ec -, analyzes a password and calculates its entropy.
		 * Entropy calculator requests are billed.
		 * Get ec
		 * @param {string} password **The password to be analyzed.**
		 * Minimum length is 4 characters; maximum length is 128 characters.
		 * Beware that certain characters like '&#35;', '&#61;' or '&#63;' must be properly encoded.
		 * For more information about this issue, please refer to RFC 3986 ("*Uniform Resource Identifier (URI): Generic Syntax*"), sections 2.1, 2.2 and 2.4.
		 * @param {string} outputFormat **The format of the returned analysis.**
		 * Allowed values are *json*, *xml* and *yaml*.
		 * The default value is *xml*.
		 * @param {number} penalty **The penalty applied to each character that is part of a word, number sequence, alphabet sequence, etc.**
		 * The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.
		 * The character used as decimal separator is always '&#46;'. Hence, a parameter value like *0,33* would be illegal.
		 * The default value is *0.25*.
		 *     Type: double
		 * @param {string} reqId **An identifier for this request.**
		 * The request identifier is a string that must match the regular expression (?i)^[a-z0-9]{8,16}$/*.
		 * This identifier is echoed in the returned response. Its value has no effect on the password analysis.
		 * If this parameter is unset, a randomly generated identifier will be automatically assigned to this request.
		 * @return {Ec} The password analysis, including the calculated entropy.
		 */
		EcGetByPasswordAndOutputFormatAndPenaltyAndReqId(password: string, outputFormat: string | null | undefined, penalty: number | null | undefined, reqId: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Ec> {
			return this.http.get<Ec>(this.baseUri + 'ec?password=' + (password == null ? '' : encodeURIComponent(password)) + '&outputFormat=' + (outputFormat == null ? '' : encodeURIComponent(outputFormat)) + '&penalty=' + penalty + '&reqId=' + (reqId == null ? '' : encodeURIComponent(reqId)), { headers: headersHandler ? headersHandler() : undefined });
		}
	}

}

