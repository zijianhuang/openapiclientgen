import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export enum CaseType { LowerCase = 0, UpperCase = 1, SentenceCase = 2, TitleCase = 3 }

	export interface GetHash {
		key?: number;
		text: string;
	}

	export enum HashType { md5 = 0, sha1 = 1, sha256 = 2, sha384 = 3, sha512 = 4, crc32 = 5, caesarencryption = 6, caesardecryption = 7 }

	export enum LoremType { normal = 0, business = 1 }

	export enum NameType { firstname = 0, surname = 1, fullname = 2 }

	export enum TextActionType { Transform = 0, Replace = 1 }

	export interface TextDto {
		text?: string;
	}

	export enum TextType { paragraphs = 0, words = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get api/Card
		 * @return {void} Success
		 */
		ApiCardGetByType(type: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/Card?type=' + (type == null ? '' : encodeURIComponent(type)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/Card/Types
		 * @return {void} Success
		 */
		ApiCardTypesGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/Card/Types', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/Hash
		 * @return {void} Success
		 */
		ApiHashPostByHashType(hashType: HashType, requestBody: GetHash, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/Hash?hashType=' + hashType, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/Name
		 * @return {void} Success
		 */
		ApiNameGetByNameTypeAndQuantity(nameType: NameType, quantity: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/Name?nameType=' + nameType + '&quantity=' + quantity, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/Name/suggestions
		 * @return {void} Success
		 */
		ApiNameSuggestionsGetByStartingWords(startingWords: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/Name/suggestions?startingWords=' + (startingWords == null ? '' : encodeURIComponent(startingWords)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/Number
		 * @return {void} Success
		 */
		ApiNumberGetByMinAndMax(min: number, max: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/Number?min=' + min + '&max=' + max, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/Number/Sequence
		 * @return {Array<number>} Success
		 */
		ApiNumberSequenceGetByMinAndMax(min: number, max: number, headersHandler?: () => HttpHeaders): Observable<Array<number>> {
			return this.http.get<Array<number>>(this.baseUri + 'api/Number/Sequence?min=' + min + '&max=' + max, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/Phone/Countries
		 * @return {void} Success
		 */
		ApiPhoneCountriesGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/Phone/Countries', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/Phone/Generate
		 * @return {void} Success
		 */
		ApiPhoneGenerateGetByCountryCodeAndQuantity(CountryCode: string, Quantity: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/Phone/Generate?CountryCode=' + (CountryCode == null ? '' : encodeURIComponent(CountryCode)) + '&Quantity=' + Quantity, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/Phone/Validate
		 * @return {void} Success
		 */
		ApiPhoneValidateGetByTelephoneAndCountryCode(telephone: string, CountryCode: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/Phone/Validate?telephone=' + (telephone == null ? '' : encodeURIComponent(telephone)) + '&CountryCode=' + (CountryCode == null ? '' : encodeURIComponent(CountryCode)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/SocialNumber
		 * @return {void} Success
		 */
		ApiSocialNumberGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/SocialNumber', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/Text/Humanize
		 * @return {void} Success
		 */
		ApiTextHumanizePost(requestBody: TextDto, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/Text/Humanize', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/Text/LoremIpsum
		 * @return {void} Success
		 */
		ApiTextLoremIpsumGetByLoremTypeAndTypeAndNumber(loremType: LoremType, type: TextType, number: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/Text/LoremIpsum?loremType=' + loremType + '&type=' + type + '&number=' + number, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/Text/Password
		 * @return {void} Success
		 */
		ApiTextPasswordGetByLengthAndHasDigitsAndHasUppercaseAndHasSpecial(length: number, hasDigits: boolean, hasUppercase: boolean, hasSpecial: boolean, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/Text/Password?length=' + length + '&hasDigits=' + hasDigits + '&hasUppercase=' + hasUppercase + '&hasSpecial=' + hasSpecial, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/Text/Transform
		 * @return {void} Success
		 */
		ApiTextTransformPostByTextActionTypeAndCaseTypeAndFindAndReplace(textActionType: TextActionType, caseType: CaseType, find: string, replace: string, requestBody: TextDto, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/Text/Transform?textActionType=' + textActionType + '&caseType=' + caseType + '&find=' + (find == null ? '' : encodeURIComponent(find)) + '&replace=' + (replace == null ? '' : encodeURIComponent(replace)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}
	}

}

