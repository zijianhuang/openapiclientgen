import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Display data for verifications through postcard. */
	export interface AddressVerificationData {

		/** Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478 */
		address?: PostalAddress;

		/** Merchant's business name. */
		business?: string | null;

		/** Expected number of days it takes to deliver a postcard to the address's region. */
		expectedDeliveryDaysRegion?: number | null;
	}

	/** Display data for verifications through postcard. */
	export interface AddressVerificationDataFormProperties {

		/** Merchant's business name. */
		business: FormControl<string | null | undefined>,

		/** Expected number of days it takes to deliver a postcard to the address's region. */
		expectedDeliveryDaysRegion: FormControl<number | null | undefined>,
	}
	export function CreateAddressVerificationDataFormGroup() {
		return new FormGroup<AddressVerificationDataFormProperties>({
			business: new FormControl<string | null | undefined>(undefined),
			expectedDeliveryDaysRegion: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478 */
	export interface PostalAddress {

		/** Unstructured address lines describing the lower levels of an address. Because values in address_lines do not have type information and may sometimes contain multiple values in a single field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be "envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way, the most specific line of an address can be selected based on the language. The minimum permitted structural representation of an address consists of a region_code with all remaining information placed in the address_lines. It would be possible to format such an address very approximately without geocoding, but no semantic reasoning could be made about any of the address components until it was at least partially resolved. Creating an address only containing a region_code and address_lines, and then geocoding is the recommended way to handle completely unstructured addresses (as opposed to guessing which parts of the address should be localities or administrative areas). */
		addressLines?: Array<string>;

		/** Optional. Highest administrative subdivision which is used for postal addresses of a country or region. For example, this can be a state, a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community (e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland this should be left unpopulated. */
		administrativeArea?: string | null;

		/** Optional. BCP-47 language code of the contents of this address (if known). This is often the UI language of the input form or is expected to match one of the languages used in the address' country/region, or their transliterated equivalents. This can affect formatting in certain countries, but is not critical to the correctness of the data and will never affect any validation or other non-formatting related operations. If this value is not known, it should be omitted (rather than specifying a possibly incorrect default). Examples: "zh-Hant", "ja", "ja-Latn", "en". */
		languageCode?: string | null;

		/** Optional. Generally refers to the city/town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave locality empty and use address_lines. */
		locality?: string | null;

		/** Optional. The name of the organization at the address. */
		organization?: string | null;

		/** Optional. Postal code of the address. Not all countries use or require postal codes to be present, but where they are used, they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.). */
		postalCode?: string | null;

		/** Optional. The recipient at the address. This field may, under certain circumstances, contain multiline information. For example, it might contain "care of" information. */
		recipients?: Array<string>;

		/** Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to ensure the value is correct. See https://cldr.unicode.org/ and https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland. */
		regionCode?: string | null;

		/** The schema revision of the `PostalAddress`. This must be set to 0, which is the latest revision. All new revisions **must** be backward compatible with old revisions. */
		revision?: number | null;

		/** Optional. Additional, country-specific, sorting code. This is not used in most regions. Where it is used, the value is either a string like "CEDEX", optionally followed by a number (e.g. "CEDEX 7"), or just a number alone, representing the "sector code" (Jamaica), "delivery area indicator" (Malawi) or "post office indicator" (e.g. Côte d'Ivoire). */
		sortingCode?: string | null;

		/** Optional. Sublocality of the address. For example, this can be neighborhoods, boroughs, districts. */
		sublocality?: string | null;
	}

	/** Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478 */
	export interface PostalAddressFormProperties {

		/** Optional. Highest administrative subdivision which is used for postal addresses of a country or region. For example, this can be a state, a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community (e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland this should be left unpopulated. */
		administrativeArea: FormControl<string | null | undefined>,

		/** Optional. BCP-47 language code of the contents of this address (if known). This is often the UI language of the input form or is expected to match one of the languages used in the address' country/region, or their transliterated equivalents. This can affect formatting in certain countries, but is not critical to the correctness of the data and will never affect any validation or other non-formatting related operations. If this value is not known, it should be omitted (rather than specifying a possibly incorrect default). Examples: "zh-Hant", "ja", "ja-Latn", "en". */
		languageCode: FormControl<string | null | undefined>,

		/** Optional. Generally refers to the city/town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave locality empty and use address_lines. */
		locality: FormControl<string | null | undefined>,

		/** Optional. The name of the organization at the address. */
		organization: FormControl<string | null | undefined>,

		/** Optional. Postal code of the address. Not all countries use or require postal codes to be present, but where they are used, they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.). */
		postalCode: FormControl<string | null | undefined>,

		/** Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to ensure the value is correct. See https://cldr.unicode.org/ and https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland. */
		regionCode: FormControl<string | null | undefined>,

		/** The schema revision of the `PostalAddress`. This must be set to 0, which is the latest revision. All new revisions **must** be backward compatible with old revisions. */
		revision: FormControl<number | null | undefined>,

		/** Optional. Additional, country-specific, sorting code. This is not used in most regions. Where it is used, the value is either a string like "CEDEX", optionally followed by a number (e.g. "CEDEX 7"), or just a number alone, representing the "sector code" (Jamaica), "delivery area indicator" (Malawi) or "post office indicator" (e.g. Côte d'Ivoire). */
		sortingCode: FormControl<string | null | undefined>,

		/** Optional. Sublocality of the address. For example, this can be neighborhoods, boroughs, districts. */
		sublocality: FormControl<string | null | undefined>,
	}
	export function CreatePostalAddressFormGroup() {
		return new FormGroup<PostalAddressFormProperties>({
			administrativeArea: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			locality: new FormControl<string | null | undefined>(undefined),
			organization: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			regionCode: new FormControl<string | null | undefined>(undefined),
			revision: new FormControl<number | null | undefined>(undefined),
			sortingCode: new FormControl<string | null | undefined>(undefined),
			sublocality: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for Verifications.CompleteVerificationAction. */
	export interface CompleteVerificationRequest {

		/** Required. PIN code received by the merchant to complete the verification. */
		pin?: string | null;
	}

	/** Request message for Verifications.CompleteVerificationAction. */
	export interface CompleteVerificationRequestFormProperties {

		/** Required. PIN code received by the merchant to complete the verification. */
		pin: FormControl<string | null | undefined>,
	}
	export function CreateCompleteVerificationRequestFormGroup() {
		return new FormGroup<CompleteVerificationRequestFormProperties>({
			pin: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for Verifications.CompleteVerificationAction. */
	export interface CompleteVerificationResponse {

		/** A verification represents a verification attempt on a location. */
		verification?: Verification;
	}

	/** Response message for Verifications.CompleteVerificationAction. */
	export interface CompleteVerificationResponseFormProperties {
	}
	export function CreateCompleteVerificationResponseFormGroup() {
		return new FormGroup<CompleteVerificationResponseFormProperties>({
		});

	}


	/** A verification represents a verification attempt on a location. */
	export interface Verification {

		/** Optional. Response announcement set only if the method is VETTED_PARTNER. */
		announcement?: string | null;

		/** The timestamp when the verification is requested. */
		createTime?: string | null;

		/** The method of the verification. */
		method?: VerificationMethod | null;

		/** Resource name of the verification. */
		name?: string | null;

		/** The state of the verification. */
		state?: VerificationState | null;
	}

	/** A verification represents a verification attempt on a location. */
	export interface VerificationFormProperties {

		/** Optional. Response announcement set only if the method is VETTED_PARTNER. */
		announcement: FormControl<string | null | undefined>,

		/** The timestamp when the verification is requested. */
		createTime: FormControl<string | null | undefined>,

		/** The method of the verification. */
		method: FormControl<VerificationMethod | null | undefined>,

		/** Resource name of the verification. */
		name: FormControl<string | null | undefined>,

		/** The state of the verification. */
		state: FormControl<VerificationState | null | undefined>,
	}
	export function CreateVerificationFormGroup() {
		return new FormGroup<VerificationFormProperties>({
			announcement: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<VerificationMethod | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<VerificationState | null | undefined>(undefined),
		});

	}

	export enum VerificationMethod { VERIFICATION_METHOD_UNSPECIFIED = 'VERIFICATION_METHOD_UNSPECIFIED', ADDRESS = 'ADDRESS', EMAIL = 'EMAIL', PHONE_CALL = 'PHONE_CALL', SMS = 'SMS', AUTO = 'AUTO', VETTED_PARTNER = 'VETTED_PARTNER' }

	export enum VerificationState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', PENDING = 'PENDING', COMPLETED = 'COMPLETED', FAILED = 'FAILED' }


	/** Indicates that the location fails to comply with our [guidelines](https://support.google.com/business/answer/3038177). */
	export interface ComplyWithGuidelines {

		/** The reason why the location is being recommended to comply with guidelines. */
		recommendationReason?: ComplyWithGuidelinesRecommendationReason | null;
	}

	/** Indicates that the location fails to comply with our [guidelines](https://support.google.com/business/answer/3038177). */
	export interface ComplyWithGuidelinesFormProperties {

		/** The reason why the location is being recommended to comply with guidelines. */
		recommendationReason: FormControl<ComplyWithGuidelinesRecommendationReason | null | undefined>,
	}
	export function CreateComplyWithGuidelinesFormGroup() {
		return new FormGroup<ComplyWithGuidelinesFormProperties>({
			recommendationReason: new FormControl<ComplyWithGuidelinesRecommendationReason | null | undefined>(undefined),
		});

	}

	export enum ComplyWithGuidelinesRecommendationReason { RECOMMENDATION_REASON_UNSPECIFIED = 'RECOMMENDATION_REASON_UNSPECIFIED', BUSINESS_LOCATION_SUSPENDED = 'BUSINESS_LOCATION_SUSPENDED', BUSINESS_LOCATION_DISABLED = 'BUSINESS_LOCATION_DISABLED' }


	/** Display data for verifications through email. */
	export interface EmailVerificationData {

		/** Domain name in the email address. e.g. "gmail.com" in foo@gmail.com */
		domain?: string | null;

		/** Whether client is allowed to provide a different user name. */
		isUserNameEditable?: boolean | null;

		/** User name in the email address. e.g. "foo" in foo@gmail.com */
		user?: string | null;
	}

	/** Display data for verifications through email. */
	export interface EmailVerificationDataFormProperties {

		/** Domain name in the email address. e.g. "gmail.com" in foo@gmail.com */
		domain: FormControl<string | null | undefined>,

		/** Whether client is allowed to provide a different user name. */
		isUserNameEditable: FormControl<boolean | null | undefined>,

		/** User name in the email address. e.g. "foo" in foo@gmail.com */
		user: FormControl<string | null | undefined>,
	}
	export function CreateEmailVerificationDataFormGroup() {
		return new FormGroup<EmailVerificationDataFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined),
			isUserNameEditable: new FormControl<boolean | null | undefined>(undefined),
			user: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for Verifications.FetchVerificationOptions. */
	export interface FetchVerificationOptionsRequest {

		/** Additional data for service business verification. */
		context?: ServiceBusinessContext;

		/** Required. The BCP 47 language code representing the language that is to be used for the verification process. Available options vary by language. */
		languageCode?: string | null;
	}

	/** Request message for Verifications.FetchVerificationOptions. */
	export interface FetchVerificationOptionsRequestFormProperties {

		/** Required. The BCP 47 language code representing the language that is to be used for the verification process. Available options vary by language. */
		languageCode: FormControl<string | null | undefined>,
	}
	export function CreateFetchVerificationOptionsRequestFormGroup() {
		return new FormGroup<FetchVerificationOptionsRequestFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Additional data for service business verification. */
	export interface ServiceBusinessContext {

		/** Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478 */
		address?: PostalAddress;
	}

	/** Additional data for service business verification. */
	export interface ServiceBusinessContextFormProperties {
	}
	export function CreateServiceBusinessContextFormGroup() {
		return new FormGroup<ServiceBusinessContextFormProperties>({
		});

	}


	/** Response message for Verifications.FetchVerificationOptions. */
	export interface FetchVerificationOptionsResponse {

		/** The available verification options. */
		options?: Array<VerificationOption>;
	}

	/** Response message for Verifications.FetchVerificationOptions. */
	export interface FetchVerificationOptionsResponseFormProperties {
	}
	export function CreateFetchVerificationOptionsResponseFormGroup() {
		return new FormGroup<FetchVerificationOptionsResponseFormProperties>({
		});

	}


	/** The verification option represents how to verify the location (indicated by verification method) and where the verification will be sent to (indicated by display data). */
	export interface VerificationOption {

		/** Display data for verifications through postcard. */
		addressData?: AddressVerificationData;

		/** Set only if the method is VETTED_PARTNER. */
		announcement?: string | null;

		/** Display data for verifications through email. */
		emailData?: EmailVerificationData;

		/** Set only if the method is PHONE_CALL or SMS. Phone number that the PIN will be sent to. */
		phoneNumber?: string | null;

		/** Method to verify the location. */
		verificationMethod?: VerificationMethod | null;
	}

	/** The verification option represents how to verify the location (indicated by verification method) and where the verification will be sent to (indicated by display data). */
	export interface VerificationOptionFormProperties {

		/** Set only if the method is VETTED_PARTNER. */
		announcement: FormControl<string | null | undefined>,

		/** Set only if the method is PHONE_CALL or SMS. Phone number that the PIN will be sent to. */
		phoneNumber: FormControl<string | null | undefined>,

		/** Method to verify the location. */
		verificationMethod: FormControl<VerificationMethod | null | undefined>,
	}
	export function CreateVerificationOptionFormGroup() {
		return new FormGroup<VerificationOptionFormProperties>({
			announcement: new FormControl<string | null | undefined>(undefined),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
			verificationMethod: new FormControl<VerificationMethod | null | undefined>(undefined),
		});

	}


	/** Response message for Verifications.ListVerifications. */
	export interface ListVerificationsResponse {

		/** If the number of verifications exceeded the requested page size, this field will be populated with a token to fetch the next page of verification on a subsequent call. If there are no more attributes, this field will not be present in the response. */
		nextPageToken?: string | null;

		/** List of the verifications. */
		verifications?: Array<Verification>;
	}

	/** Response message for Verifications.ListVerifications. */
	export interface ListVerificationsResponseFormProperties {

		/** If the number of verifications exceeded the requested page size, this field will be populated with a token to fetch the next page of verification on a subsequent call. If there are no more attributes, this field will not be present in the response. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListVerificationsResponseFormGroup() {
		return new FormGroup<ListVerificationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Indicates that the location duplicates another location that is in good standing. */
	export interface ResolveOwnershipConflict {
	}

	/** Indicates that the location duplicates another location that is in good standing. */
	export interface ResolveOwnershipConflictFormProperties {
	}
	export function CreateResolveOwnershipConflictFormGroup() {
		return new FormGroup<ResolveOwnershipConflictFormProperties>({
		});

	}


	/** Token generated by a vetted [partner](https://support.google.com/business/answer/7674102). */
	export interface VerificationToken {

		/** The token string. */
		tokenString?: string | null;
	}

	/** Token generated by a vetted [partner](https://support.google.com/business/answer/7674102). */
	export interface VerificationTokenFormProperties {

		/** The token string. */
		tokenString: FormControl<string | null | undefined>,
	}
	export function CreateVerificationTokenFormGroup() {
		return new FormGroup<VerificationTokenFormProperties>({
			tokenString: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Indicates that the location requires verification. Contains information about the current verification actions performed on the location. */
	export interface Verify {

		/** Indicates whether a verification process has already started, and can be completed by the location. */
		hasPendingVerification?: boolean | null;
	}

	/** Indicates that the location requires verification. Contains information about the current verification actions performed on the location. */
	export interface VerifyFormProperties {

		/** Indicates whether a verification process has already started, and can be completed by the location. */
		hasPendingVerification: FormControl<boolean | null | undefined>,
	}
	export function CreateVerifyFormGroup() {
		return new FormGroup<VerifyFormProperties>({
			hasPendingVerification: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request message for Verifications.VerifyLocation. */
	export interface VerifyLocationRequest {

		/** Additional data for service business verification. */
		context?: ServiceBusinessContext;

		/** Optional. The input for EMAIL method. Email address where the PIN should be sent to. An email address is accepted only if it is one of the addresses provided by FetchVerificationOptions. If the EmailVerificationData has is_user_name_editable set to true, the client may specify a different user name (local-part) but must match the domain name. */
		emailAddress?: string | null;

		/** Optional. The BCP 47 language code representing the language that is to be used for the verification process. */
		languageCode?: string | null;

		/** Optional. The input for ADDRESS method. Contact name the mail should be sent to. */
		mailerContact?: string | null;

		/** Required. Verification method. */
		method?: VerificationMethod | null;

		/** Optional. The input for PHONE_CALL/SMS method The phone number that should be called or be sent SMS to. It must be one of the phone numbers in the eligible options. */
		phoneNumber?: string | null;

		/** Token generated by a vetted [partner](https://support.google.com/business/answer/7674102). */
		token?: VerificationToken;
	}

	/** Request message for Verifications.VerifyLocation. */
	export interface VerifyLocationRequestFormProperties {

		/** Optional. The input for EMAIL method. Email address where the PIN should be sent to. An email address is accepted only if it is one of the addresses provided by FetchVerificationOptions. If the EmailVerificationData has is_user_name_editable set to true, the client may specify a different user name (local-part) but must match the domain name. */
		emailAddress: FormControl<string | null | undefined>,

		/** Optional. The BCP 47 language code representing the language that is to be used for the verification process. */
		languageCode: FormControl<string | null | undefined>,

		/** Optional. The input for ADDRESS method. Contact name the mail should be sent to. */
		mailerContact: FormControl<string | null | undefined>,

		/** Required. Verification method. */
		method: FormControl<VerificationMethod | null | undefined>,

		/** Optional. The input for PHONE_CALL/SMS method The phone number that should be called or be sent SMS to. It must be one of the phone numbers in the eligible options. */
		phoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateVerifyLocationRequestFormGroup() {
		return new FormGroup<VerifyLocationRequestFormProperties>({
			emailAddress: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			mailerContact: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<VerificationMethod | null | undefined>(undefined),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for Verifications.VerifyLocation. */
	export interface VerifyLocationResponse {

		/** A verification represents a verification attempt on a location. */
		verification?: Verification;
	}

	/** Response message for Verifications.VerifyLocation. */
	export interface VerifyLocationResponseFormProperties {
	}
	export function CreateVerifyLocationResponseFormGroup() {
		return new FormGroup<VerifyLocationResponseFormProperties>({
		});

	}


	/** Response message for VoiceOfMerchant.GetVoiceOfMerchantState. */
	export interface VoiceOfMerchantState {

		/** Indicates that the location fails to comply with our [guidelines](https://support.google.com/business/answer/3038177). */
		complyWithGuidelines?: ComplyWithGuidelines;

		/** Indicates whether the location has the authority (ownership) over the business on Google. If true, another location cannot take over and become the dominant listing on Maps. However, edits will not become live unless Voice of Merchant is gained (i.e. has_voice_of_merchant is true). */
		hasBusinessAuthority?: boolean | null;

		/** Indicates whether the location is in good standing and has control over the business on Google. Any edits made to the location will propagate to Maps after passing the review phase. */
		hasVoiceOfMerchant?: boolean | null;

		/** Indicates that the location duplicates another location that is in good standing. */
		resolveOwnershipConflict?: ResolveOwnershipConflict;

		/** Indicates that the location requires verification. Contains information about the current verification actions performed on the location. */
		verify?: Verify;

		/** Indicates that the location will gain voice of merchant after passing review. */
		waitForVoiceOfMerchant?: WaitForVoiceOfMerchant;
	}

	/** Response message for VoiceOfMerchant.GetVoiceOfMerchantState. */
	export interface VoiceOfMerchantStateFormProperties {

		/** Indicates whether the location has the authority (ownership) over the business on Google. If true, another location cannot take over and become the dominant listing on Maps. However, edits will not become live unless Voice of Merchant is gained (i.e. has_voice_of_merchant is true). */
		hasBusinessAuthority: FormControl<boolean | null | undefined>,

		/** Indicates whether the location is in good standing and has control over the business on Google. Any edits made to the location will propagate to Maps after passing the review phase. */
		hasVoiceOfMerchant: FormControl<boolean | null | undefined>,
	}
	export function CreateVoiceOfMerchantStateFormGroup() {
		return new FormGroup<VoiceOfMerchantStateFormProperties>({
			hasBusinessAuthority: new FormControl<boolean | null | undefined>(undefined),
			hasVoiceOfMerchant: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Indicates that the location will gain voice of merchant after passing review. */
	export interface WaitForVoiceOfMerchant {
	}

	/** Indicates that the location will gain voice of merchant after passing review. */
	export interface WaitForVoiceOfMerchantFormProperties {
	}
	export function CreateWaitForVoiceOfMerchantFormGroup() {
		return new FormGroup<WaitForVoiceOfMerchantFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Reports all eligible verification options for a location in a specific language.
		 * Post v1/{location}:fetchVerificationOptions
		 * @param {string} location Required. The location to verify.
		 * @return {FetchVerificationOptionsResponse} Successful response
		 */
		Mybusinessverifications_locations_fetchVerificationOptions(location: string, requestBody: FetchVerificationOptionsRequest): Observable<FetchVerificationOptionsResponse> {
			return this.http.post<FetchVerificationOptionsResponse>(this.baseUri + 'v1/' + (location == null ? '' : encodeURIComponent(location)) + ':fetchVerificationOptions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the VoiceOfMerchant state.
		 * Get v1/{name}/VoiceOfMerchantState
		 * @param {string} name Required. Resource name of the location.
		 * @return {VoiceOfMerchantState} Successful response
		 */
		Mybusinessverifications_locations_getVoiceOfMerchantState(name: string): Observable<VoiceOfMerchantState> {
			return this.http.get<VoiceOfMerchantState>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/VoiceOfMerchantState', {});
		}

		/**
		 * Completes a `PENDING` verification. It is only necessary for non `AUTO` verification methods. `AUTO` verification request is instantly `VERIFIED` upon creation.
		 * Post v1/{name}:complete
		 * @param {string} name Required. Resource name of the verification to complete.
		 * @return {CompleteVerificationResponse} Successful response
		 */
		Mybusinessverifications_locations_verifications_complete(name: string, requestBody: CompleteVerificationRequest): Observable<CompleteVerificationResponse> {
			return this.http.post<CompleteVerificationResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':complete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts the verification process for a location.
		 * Post v1/{name}:verify
		 * @param {string} name Required. Resource name of the location to verify.
		 * @return {VerifyLocationResponse} Successful response
		 */
		Mybusinessverifications_locations_verify(name: string, requestBody: VerifyLocationRequest): Observable<VerifyLocationResponse> {
			return this.http.post<VerifyLocationResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':verify', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List verifications of a location, ordered by create time.
		 * Get v1/{parent}/verifications
		 * @param {string} parent Required. Resource name of the location that verification requests belong to.
		 * @param {number} pageSize How many verification to include per page. Minimum is 1, and the default and maximum page size is 100.
		 * @param {string} pageToken If specified, returns the next page of verifications.
		 * @return {ListVerificationsResponse} Successful response
		 */
		Mybusinessverifications_locations_verifications_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListVerificationsResponse> {
			return this.http.get<ListVerificationsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/verifications&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}
	}

}

