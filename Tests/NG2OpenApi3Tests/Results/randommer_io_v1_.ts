import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export enum CaseType { LowerCase = 'LowerCase', UpperCase = 'UpperCase', SentenceCase = 'SentenceCase', TitleCase = 'TitleCase' }

	export enum IdType { VAT = 'VAT', SSN = 'SSN' }

	export enum LoremType { normal = 'normal', business = 'business' }

	export enum NameType { firstname = 'firstname', surname = 'surname', fullname = 'fullname' }

	export interface NumberValidation {

		/**
		 * Required
		 * Max length: 2
		 * Min length: 1
		 */
		country: string;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		number: string;
	}
	export interface NumberValidationFormProperties {

		/**
		 * Required
		 * Max length: 2
		 * Min length: 1
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		number: FormControl<string | null | undefined>,
	}
	export function CreateNumberValidationFormGroup() {
		return new FormGroup<NumberValidationFormProperties>({
			country: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2)]),
			number: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
		});

	}

	export enum TextActionType { Transform = 'Transform', Replace = 'Replace' }

	export interface TextDto {
		text?: string | null;
	}
	export interface TextDtoFormProperties {
		text: FormControl<string | null | undefined>,
	}
	export function CreateTextDtoFormGroup() {
		return new FormGroup<TextDtoFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TextType { paragraphs = 'paragraphs', words = 'words' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get Card
		 * Get api/Card
		 * @return {void} Success
		 */
		ApiCardGetByType(type: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/Card?type=' + (type == null ? '' : encodeURIComponent(type)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get available card types
		 * Get api/Card/Types
		 * @return {void} Success
		 */
		ApiCardTypesGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/Card/Types', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get available countries
		 * Get api/Finance/Countries
		 * @return {void} Success
		 */
		ApiFinanceCountriesGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/Finance/Countries', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get crypto address
		 * Get api/Finance/CryptoAddress
		 * @return {void} Success
		 */
		ApiFinanceCryptoAddressGetByCryptoType(cryptoType: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/Finance/CryptoAddress?cryptoType=' + (cryptoType == null ? '' : encodeURIComponent(cryptoType)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get available crypto types
		 * Get api/Finance/CryptoAddress/Types
		 * @return {void} Success
		 */
		ApiFinanceCryptoAddressTypesGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/Finance/CryptoAddress/Types', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get IBAN by countryCode
		 * Get api/Finance/Iban/{countryCode}
		 * @return {void} Success
		 */
		ApiFinanceIban_countryCodeGet(countryCode: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/Finance/Iban/' + (countryCode == null ? '' : encodeURIComponent(countryCode)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/Finance/Vat/Validator
		 * @return {void} Success
		 */
		ApiFinanceVatValidatorPostByCountryAndVat(country: string, vat: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/Finance/Vat/Validator?country=' + (country == null ? '' : encodeURIComponent(country)) + '&vat=' + (vat == null ? '' : encodeURIComponent(vat)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/Misc/Cultures
		 * @return {void} Success
		 */
		ApiMiscCulturesGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/Misc/Cultures', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/Misc/Random-Address
		 * @return {void} Success
		 */
		ApiMiscRandom_AddressGetByNumberAndCulture(number: number, culture: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/Misc/Random-Address?number=' + number + '&culture=' + (culture == null ? '' : encodeURIComponent(culture)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get name
		 * Get api/Name
		 * @return {void} Success
		 */
		ApiNameGetByNameTypeAndQuantity(nameType: NameType, quantity: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/Name?nameType=' + nameType + '&quantity=' + quantity, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate brand name suggestions
		 * Post api/Name/BrandName
		 * @return {void} Success
		 */
		ApiNameBrandNamePostByStartingWords(startingWords: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/Name/BrandName?startingWords=' + (startingWords == null ? '' : encodeURIComponent(startingWords)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get business names for a specific culture
		 * Post api/Name/BusinessName
		 * @return {void} Success
		 */
		ApiNameBusinessNamePostByNumberAndCultureCode(number: number, cultureCode: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/Name/BusinessName?number=' + number + '&cultureCode=' + (cultureCode == null ? '' : encodeURIComponent(cultureCode)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get available cultures
		 * Get api/Name/Cultures
		 * @return {void} Success
		 */
		ApiNameCulturesGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/Name/Cultures', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get business name suggestions
		 * Get api/Name/Suggestions
		 * @return {void} Success
		 */
		ApiNameSuggestionsGetByStartingWords(startingWords: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/Name/Suggestions?startingWords=' + (startingWords == null ? '' : encodeURIComponent(startingWords)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get available countries
		 * Get api/Phone/Countries
		 * @return {void} Success
		 */
		ApiPhoneCountriesGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/Phone/Countries', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get bulk telephone numbers for a country
		 * Get api/Phone/Generate
		 * @return {void} Success
		 */
		ApiPhoneGenerateGetByCountryCodeAndQuantity(CountryCode: string, Quantity: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/Phone/Generate?CountryCode=' + (CountryCode == null ? '' : encodeURIComponent(CountryCode)) + '&Quantity=' + Quantity, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get bulk imeis
		 * Get api/Phone/IMEI
		 * @return {void} Success
		 */
		ApiPhoneIMEIGetByQuantity(Quantity: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/Phone/IMEI?Quantity=' + Quantity, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Validate a phone number
		 * Get api/Phone/Validate
		 * @return {void} Success
		 */
		ApiPhoneValidateGetByTelephoneAndCountryCode(telephone: string, CountryCode: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/Phone/Validate?telephone=' + (telephone == null ? '' : encodeURIComponent(telephone)) + '&CountryCode=' + (CountryCode == null ? '' : encodeURIComponent(CountryCode)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate a social security number
		 * Get api/SocialNumber
		 * @return {void} Success
		 */
		ApiSocialNumberGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/SocialNumber', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Validate VAT/identity numbers
		 * Post api/SocialNumber
		 * @return {void} Success
		 */
		ApiSocialNumberPostByIdType(idType: IdType, requestBody: NumberValidation, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/SocialNumber?idType=' + idType, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Humanize text
		 * Post api/Text/Humanize
		 * @return {void} Success
		 */
		ApiTextHumanizePost(requestBody: TextDto, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/Text/Humanize', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate lorem ipsum
		 * Get api/Text/LoremIpsum
		 * @return {void} Success
		 */
		ApiTextLoremIpsumGetByLoremTypeAndTypeAndNumber(loremType: LoremType, type: TextType, number: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/Text/LoremIpsum?loremType=' + loremType + '&type=' + type + '&number=' + number, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate password
		 * Get api/Text/Password
		 * @return {void} Success
		 */
		ApiTextPasswordGetByLengthAndHasDigitsAndHasUppercaseAndHasSpecial(length: number, hasDigits: boolean, hasUppercase: boolean, hasSpecial: boolean, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/Text/Password?length=' + length + '&hasDigits=' + hasDigits + '&hasUppercase=' + hasUppercase + '&hasSpecial=' + hasSpecial, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get reviews (max quantity=500)
		 * Post api/Text/Review
		 * @return {void} Success
		 */
		ApiTextReviewPostByProductAndQuantity(product: string, quantity: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/Text/Review?product=' + (product == null ? '' : encodeURIComponent(product)) + '&quantity=' + quantity, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Transform text
		 * Post api/Text/Transform
		 * @return {void} Success
		 */
		ApiTextTransformPostByTextActionTypeAndCaseTypeAndFindAndReplace(textActionType: TextActionType, caseType: CaseType | null | undefined, find: string | null | undefined, replace: string | null | undefined, requestBody: TextDto, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/Text/Transform?textActionType=' + textActionType + '&caseType=' + caseType + '&find=' + (find == null ? '' : encodeURIComponent(find)) + '&replace=' + (replace == null ? '' : encodeURIComponent(replace)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}
	}

}

