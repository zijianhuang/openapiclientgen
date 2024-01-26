import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Address {

		/**
		 * Name of administrative area, such as the state or province.
		 * Required
		 */
		administrativeAreaLevel1: string;

		/** Two letter country code. */
		countryCode?: string | null;

		/**
		 * Name of the address country.
		 * Required
		 */
		countryName: string;

		/**
		 * Name of address locality, such as the city.
		 * Required
		 */
		locality: string;

		/**
		 * Name of the address locality area, such as the neighborhood or district.
		 * Required
		 */
		localityAreaLevel1: string;

		/**
		 * Address postal code.
		 * Required
		 */
		postalCode: string;

		/**
		 * Address route or street name.
		 * Required
		 */
		route: string;

		/**
		 * Address street number.
		 * Required
		 */
		streetNumber: string;
	}
	export interface AddressFormProperties {

		/**
		 * Name of administrative area, such as the state or province.
		 * Required
		 */
		administrativeAreaLevel1: FormControl<string | null | undefined>,

		/** Two letter country code. */
		countryCode: FormControl<string | null | undefined>,

		/**
		 * Name of the address country.
		 * Required
		 */
		countryName: FormControl<string | null | undefined>,

		/**
		 * Name of address locality, such as the city.
		 * Required
		 */
		locality: FormControl<string | null | undefined>,

		/**
		 * Name of the address locality area, such as the neighborhood or district.
		 * Required
		 */
		localityAreaLevel1: FormControl<string | null | undefined>,

		/**
		 * Address postal code.
		 * Required
		 */
		postalCode: FormControl<string | null | undefined>,

		/**
		 * Address route or street name.
		 * Required
		 */
		route: FormControl<string | null | undefined>,

		/**
		 * Address street number.
		 * Required
		 */
		streetNumber: FormControl<string | null | undefined>,
	}
	export function CreateAddressFormGroup() {
		return new FormGroup<AddressFormProperties>({
			administrativeAreaLevel1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			countryCode: new FormControl<string | null | undefined>(undefined),
			countryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			locality: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			localityAreaLevel1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			postalCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			route: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			streetNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Profile {

		/** Client's birth date in ISO 8601 format. */
		birthDate?: string | null;

		/**
		 * Client's document.
		 * Required
		 */
		document: string;

		/**
		 * Type of document informed in `document`.
		 * Required
		 */
		documentType: string;

		/**
		 * Client's email address.
		 * Required
		 */
		email: string;

		/**
		 * Client's first name.
		 * Required
		 */
		firstName: string;

		/**
		 * Client's last name.
		 * Required
		 */
		lastName: string;
	}
	export interface ProfileFormProperties {

		/** Client's birth date in ISO 8601 format. */
		birthDate: FormControl<string | null | undefined>,

		/**
		 * Client's document.
		 * Required
		 */
		document: FormControl<string | null | undefined>,

		/**
		 * Type of document informed in `document`.
		 * Required
		 */
		documentType: FormControl<string | null | undefined>,

		/**
		 * Client's email address.
		 * Required
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * Client's first name.
		 * Required
		 */
		firstName: FormControl<string | null | undefined>,

		/**
		 * Client's last name.
		 * Required
		 */
		lastName: FormControl<string | null | undefined>,
	}
	export function CreateProfileFormGroup() {
		return new FormGroup<ProfileFormProperties>({
			birthDate: new FormControl<string | null | undefined>(undefined),
			document: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			documentType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			firstName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Prospect {
	}
	export interface ProspectFormProperties {
	}
	export function CreateProspectFormGroup() {
		return new FormGroup<ProspectFormProperties>({
		});

	}

	export interface Schema {

		/**
		 * Schema's human readable description.
		 * Required
		 */
		description: string;

		/** Document time to live, in days. After this many days from its creation or update, any document cerated from this schema will be deleted. */
		documentTTL?: number | null;

		/**
		 * Object describing each field in your desired schema. In this object, each property is a new object, describing the field according to: `type` (string); `sensitive` (boolean); `pii` (boolean) and; `items.type` (if field is array).
		 * Required
		 */
		properties: SchemaProperties;

		/**
		 * Schema required fields.
		 * Required
		 */
		required: Array<string>;

		/**
		 * Schema title.
		 * Required
		 */
		title: string;

		/**
		 * Schema type.
		 * Required
		 */
		type: string;
		'v-indexed'?: Array<string>;
		'v-unique'?: Array<string>;

		/** Schema version. */
		version?: number | null;
	}
	export interface SchemaFormProperties {

		/**
		 * Schema's human readable description.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/** Document time to live, in days. After this many days from its creation or update, any document cerated from this schema will be deleted. */
		documentTTL: FormControl<number | null | undefined>,

		/**
		 * Schema title.
		 * Required
		 */
		title: FormControl<string | null | undefined>,

		/**
		 * Schema type.
		 * Required
		 */
		type: FormControl<string | null | undefined>,

		/** Schema version. */
		version: FormControl<number | null | undefined>,
	}
	export function CreateSchemaFormGroup() {
		return new FormGroup<SchemaFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			documentTTL: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SchemaProperties {

		/** Schema of any given field described in the `properties` field. */
		'{fieldName}'?: SchemaProperties_fieldName_;
	}
	export interface SchemaPropertiesFormProperties {
	}
	export function CreateSchemaPropertiesFormGroup() {
		return new FormGroup<SchemaPropertiesFormProperties>({
		});

	}

	export interface SchemaProperties_fieldName_ {

		/** Object containing the type of the items if the field is an array. Typically, arrays will contain strings and will be used for fields such as `email`. */
		items?: string | null;

		/**
		 * Indicates whether property is Personal Identifiable Information.
		 * Required
		 */
		pii: boolean;

		/**
		 * Indicates whether property is sensitive data.
		 * Required
		 */
		sensitive: boolean;

		/**
		 * Schema property type.
		 * Required
		 */
		type: string;
	}
	export interface SchemaProperties_fieldName_FormProperties {

		/** Object containing the type of the items if the field is an array. Typically, arrays will contain strings and will be used for fields such as `email`. */
		items: FormControl<string | null | undefined>,

		/**
		 * Indicates whether property is Personal Identifiable Information.
		 * Required
		 */
		pii: FormControl<boolean | null | undefined>,

		/**
		 * Indicates whether property is sensitive data.
		 * Required
		 */
		sensitive: FormControl<boolean | null | undefined>,

		/**
		 * Schema property type.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSchemaProperties_fieldName_FormGroup() {
		return new FormGroup<SchemaProperties_fieldName_FormProperties>({
			items: new FormControl<string | null | undefined>(undefined),
			pii: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			sensitive: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Create client profile
		 * Creates new client profile.
		 * > Since your store's profile schema is customizable, the schema and examples presented below may differ from yours. Your integration must be adapted accordingly.
		 * > The `id` field returned by this request is the `profileId` used to retrieve information on a specific profile later.
		 * > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
		 * Post api/storage/profile-system/profiles
		 * @param {number} ttl This parameter sets the the Time To Live (TTL), in days, of the specific document being created or updated with this request. After this period of time from the moment of the request, the document is deleted. By sending this parameter you override the TTL set for the schema.
		 * > Currently, the available default document schemas have no TTL. This means that documents are stored indefinitely, unless a TTL is sent when creating or updating.
		 * @return {void} 
		 */
		CreateClientProfile(ttl: number | null | undefined, requestBody: Profile): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/storage/profile-system/profiles?ttl=' + ttl, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create or update profile schema
		 * Creates or updates profile schema.
		 * > Each account has one profile schema. Updating it with this request will substitute the previous version.
		 * > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
		 * Put api/storage/profile-system/profiles/schema
		 * @return {void} 
		 */
		CreateOrUpdateProfileSchema(requestBody: Schema): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/storage/profile-system/profiles/schema', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete client profile
		 * Deletes a client profile by `profileId`.
		 * > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
		 * Delete api/storage/profile-system/profiles/{profileId}
		 * @param {string} profileId ID of the client's profile as returned by the Create profile endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter.
		 * @return {void} 
		 */
		DeleteClientProfile(profileId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/storage/profile-system/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get profile
		 * Retrieves the information of a specific client, by its `profileId`.
		 * > Since your store's profile schema is customizable, the schema and examples presented below may differ from yours. Your integration must be adapted accordingly.
		 * > For security and privacy reasons, this request returns masked profile data. For unmasked information, see Get unmasked profile.
		 * > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
		 * Get api/storage/profile-system/profiles/{profileId}
		 * @param {string} profileId ID of the client's profile as returned by the Create profile endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter.
		 * @param {string} alternativeKey The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.
		 * > Currently, there are two possible values for this parameter: `email` and `document`.
		 * @return {Array<string>} OK
		 */
		GetProfile(profileId: string, alternativeKey: string | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/storage/profile-system/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '&alternativeKey=' + (alternativeKey == null ? '' : encodeURIComponent(alternativeKey)), {});
		}

		/**
		 * Updates client profile
		 * Updates one or more fields of an existing client profile.
		 * > Since your store's profile schema is customizable, the schema and examples presented below may differ from yours. Your integration must be adapted accordingly.
		 * > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
		 * Patch api/storage/profile-system/profiles/{profileId}
		 * @param {string} profileId ID of the client's profile as returned by the Create profile endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter.
		 * @param {string} alternativeKey The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.
		 * > Currently, there are two possible values for this parameter: `email` and `document`.
		 * @param {number} ttl This parameter sets the the Time To Live (TTL), in days, of the specific document being created or updated with this request. After this period of time from the moment of the request, the document is deleted. By sending this parameter you override the TTL set for the schema.
		 * > Currently, the available default document schemas have no TTL. This means that documents are stored indefinitely, unless a TTL is sent when creating or updating.
		 * @return {string} OK
		 */
		UpdateClientProfile(profileId: string, alternativeKey: string | null | undefined, ttl: number | null | undefined, requestBody: UpdateClientProfilePatchBody): Observable<string> {
			return this.http.patch(this.baseUri + 'api/storage/profile-system/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '&alternativeKey=' + (alternativeKey == null ? '' : encodeURIComponent(alternativeKey)) + '&ttl=' + ttl, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Get client addresses
		 * Retrieves information of all addresses of a given client, by its `profileId`.
		 * > For security and privacy reasons, this request returns masked address data. For unmasked information, see Get unmasked client addresses.
		 * > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
		 * Get api/storage/profile-system/profiles/{profileId}/addresses
		 * @param {string} profileId ID of the client's profile as returned by the Create profile endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter.
		 * @param {string} alternativeKey The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.
		 * > Currently, there are two possible values for this parameter: `email` and `document`.
		 * @return {Array<string>} OK
		 */
		GetClientAddresses(profileId: string, alternativeKey: string | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/storage/profile-system/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/addresses&alternativeKey=' + (alternativeKey == null ? '' : encodeURIComponent(alternativeKey)), {});
		}

		/**
		 * Create client address
		 * Creates new address for a given client profile.
		 * > The `id` field returned by this request is the `addressId` used to retrieve or update information of a specific address later.
		 * > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
		 * Post api/storage/profile-system/profiles/{profileId}/addresses
		 * @param {string} profileId ID of the client's profile as returned by the Create profile endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter.
		 * @param {string} alternativeKey The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.
		 * > Currently, there are two possible values for this parameter: `email` and `document`.
		 * @return {void} 
		 */
		CreateClientAddress(profileId: string, alternativeKey: string | null | undefined, requestBody: Address): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/storage/profile-system/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/addresses&alternativeKey=' + (alternativeKey == null ? '' : encodeURIComponent(alternativeKey)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get unmasked client addresses
		 * Retrieves unmasked information of all addresses of a given client, by its `profileId`.
		 * > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
		 * Get api/storage/profile-system/profiles/{profileId}/addresses/unmask
		 * @param {string} profileId ID of the client's profile as returned by the Create profile endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter.
		 * @param {string} alternativeKey The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.
		 * > Currently, there are two possible values for this parameter: `email` and `document`.
		 * @return {Array<string>} OK
		 */
		GetUnmaskedClientAddresses(profileId: string, alternativeKey: string | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/storage/profile-system/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/addresses/unmask&alternativeKey=' + (alternativeKey == null ? '' : encodeURIComponent(alternativeKey)), {});
		}

		/**
		 * Delete address
		 * Deletes a client's address by `profileId` and `addressId`.
		 * > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
		 * Delete api/storage/profile-system/profiles/{profileId}/addresses/{addressId}
		 * @param {string} profileId ID of the client's profile as returned by the Create profile endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter.
		 * @param {string} addressId ID of a client's specific address as returned in the Create client address endpoint's response, in the `id` field.
		 * @param {string} alternativeKey The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.
		 * > Currently, there are two possible values for this parameter: `email` and `document`.
		 * @return {void} 
		 */
		DeleteAddress(profileId: string, addressId: string, alternativeKey: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/storage/profile-system/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/addresses/' + (addressId == null ? '' : encodeURIComponent(addressId)) + '&alternativeKey=' + (alternativeKey == null ? '' : encodeURIComponent(alternativeKey)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get address
		 * Retrieves information of a specific address of a given client, by its respectives `adderssId` and `profileId`.
		 * > For security and privacy reasons, this request returns masked address data. For unmasked information, see Get unmasked address.
		 * > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
		 * Get api/storage/profile-system/profiles/{profileId}/addresses/{addressId}
		 * @param {string} profileId ID of the client's profile as returned by the Create profile endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter.
		 * @param {string} addressId ID of a client's specific address as returned in the Create client address endpoint's response, in the `id` field.
		 * @param {string} alternativeKey The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.
		 * > Currently, there are two possible values for this parameter: `email` and `document`.
		 * @return {string} OK
		 */
		GetAddress(profileId: string, addressId: string, alternativeKey: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'api/storage/profile-system/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/addresses/' + (addressId == null ? '' : encodeURIComponent(addressId)) + '&alternativeKey=' + (alternativeKey == null ? '' : encodeURIComponent(alternativeKey)), { responseType: 'text' });
		}

		/**
		 * Update client address
		 * Updates one or more fields of an existing address for a given client profile.
		 * > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
		 * Patch api/storage/profile-system/profiles/{profileId}/addresses/{addressId}
		 * @param {string} profileId ID of the client's profile as returned by the Create profile endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter.
		 * @param {string} addressId ID of a client's specific address as returned in the Create client address endpoint's response, in the `id` field.
		 * @param {string} alternativeKey The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.
		 * > Currently, there are two possible values for this parameter: `email` and `document`.
		 * @return {string} OK
		 */
		UpdateClientAddress(profileId: string, addressId: string, alternativeKey: string | null | undefined, requestBody: UpdateClientAddressPatchBody): Observable<string> {
			return this.http.patch(this.baseUri + 'api/storage/profile-system/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/addresses/' + (addressId == null ? '' : encodeURIComponent(addressId)) + '&alternativeKey=' + (alternativeKey == null ? '' : encodeURIComponent(alternativeKey)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Get unmasked address
		 * Retrieves unmasked information of a specific address of a given client, by its respectives `adderssId` and `profileId`.
		 * > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
		 * Get api/storage/profile-system/profiles/{profileId}/addresses/{addressId}/unmask
		 * @param {string} profileId ID of the client's profile as returned by the Create profile endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter.
		 * @param {string} addressId ID of a client's specific address as returned in the Create client address endpoint's response, in the `id` field.
		 * @param {string} reason Reason for requesting unmasked data.
		 * @param {string} alternativeKey The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.
		 * > Currently, there are two possible values for this parameter: `email` and `document`.
		 * @return {string} OK
		 */
		GetUnmaskedAddress(profileId: string, addressId: string, reason: string, alternativeKey: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'api/storage/profile-system/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/addresses/' + (addressId == null ? '' : encodeURIComponent(addressId)) + '/unmask&reason=' + (reason == null ? '' : encodeURIComponent(reason)) + '&alternativeKey=' + (alternativeKey == null ? '' : encodeURIComponent(alternativeKey)), { responseType: 'text' });
		}

		/**
		 * Get address by version
		 * Retrieves information of a specific version address of a given client.
		 * > For security and privacy reasons, this request returns masked address data by version. For unmasked information, see Get unmasked address by version.
		 * > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
		 * Get api/storage/profile-system/profiles/{profileId}/addresses/{addressId}/versions/{addressVersionId}
		 * @param {string} profileId ID of the client's profile as returned by the Create profile endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter.
		 * @param {string} addressId ID of a client's specific address as returned in the Create client address endpoint's response, in the `id` field.
		 * @param {string} addressVersionId ID of the version of a given client's address as returned by endpoints that create or update address information in the `version` field.
		 * @param {string} reason Reason for requesting unmasked data.
		 * @param {string} alternativeKey The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.
		 * > Currently, there are two possible values for this parameter: `email` and `document`.
		 * @return {string} OK
		 */
		GetAddressByVersion(profileId: string, addressId: string, addressVersionId: string, reason: string, alternativeKey: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'api/storage/profile-system/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/addresses/' + (addressId == null ? '' : encodeURIComponent(addressId)) + '/versions/' + (addressVersionId == null ? '' : encodeURIComponent(addressVersionId)) + '&reason=' + (reason == null ? '' : encodeURIComponent(reason)) + '&alternativeKey=' + (alternativeKey == null ? '' : encodeURIComponent(alternativeKey)), { responseType: 'text' });
		}

		/**
		 * Get unmasked address by version
		 * Retrieves unmasked information of a specific address version of a given client.
		 * > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
		 * Get api/storage/profile-system/profiles/{profileId}/addresses/{addressId}/versions/{addressVersionId}/unmask
		 * @param {string} profileId ID of the client's profile as returned by the Create profile endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter.
		 * @param {string} addressId ID of a client's specific address as returned in the Create client address endpoint's response, in the `id` field.
		 * @param {string} addressVersionId ID of the version of a given client's address as returned by endpoints that create or update address information in the `version` field.
		 * @param {string} reason Reason for requesting unmasked data.
		 * @param {string} alternativeKey The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.
		 * > Currently, there are two possible values for this parameter: `email` and `document`.
		 * @return {string} OK
		 */
		GetUnmaskedAddressByVersion(profileId: string, addressId: string, addressVersionId: string, reason: string, alternativeKey: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'api/storage/profile-system/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/addresses/' + (addressId == null ? '' : encodeURIComponent(addressId)) + '/versions/' + (addressVersionId == null ? '' : encodeURIComponent(addressVersionId)) + '/unmask&reason=' + (reason == null ? '' : encodeURIComponent(reason)) + '&alternativeKey=' + (alternativeKey == null ? '' : encodeURIComponent(alternativeKey)), { responseType: 'text' });
		}

		/**
		 * Delete purchase information
		 * Deletes purchase informaiton by `profileId`.
		 * > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
		 * Delete api/storage/profile-system/profiles/{profileId}/purchase-info
		 * @param {string} profileId ID of the client's profile as returned by the Create profile endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter.
		 * @param {string} alternativeKey The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.
		 * > Currently, there are two possible values for this parameter: `email` and `document`.
		 * @return {void} 
		 */
		DeletePurchaseInformation(profileId: string, alternativeKey: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/storage/profile-system/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/purchase-info&alternativeKey=' + (alternativeKey == null ? '' : encodeURIComponent(alternativeKey)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get purchase information
		 * Retrieves purchase information of a given client, by its `profileId`.
		 * > For security and privacy reasons, this request returns masked data. For unmasked information, see Get unmasked purchase information.
		 * > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
		 * Get api/storage/profile-system/profiles/{profileId}/purchase-info
		 * @param {string} profileId ID of the client's profile as returned by the Create profile endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter.
		 * @param {string} alternativeKey The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.
		 * > Currently, there are two possible values for this parameter: `email` and `document`.
		 * @return {Array<string>} OK
		 */
		GetPurchaseInformation(profileId: string, alternativeKey: string | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/storage/profile-system/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/purchase-info&alternativeKey=' + (alternativeKey == null ? '' : encodeURIComponent(alternativeKey)), {});
		}

		/**
		 * Update purchase information
		 * Updates one or more fields of existing purchase information for a given client profile.
		 * > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
		 * Patch api/storage/profile-system/profiles/{profileId}/purchase-info
		 * @param {string} profileId ID of the client's profile as returned by the Create profile endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter.
		 * @param {string} alternativeKey The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.
		 * > Currently, there are two possible values for this parameter: `email` and `document`.
		 * @return {string} OK
		 */
		UpdatePurchaseInformation(profileId: string, alternativeKey: string | null | undefined, requestBody: any): Observable<string> {
			return this.http.patch(this.baseUri + 'api/storage/profile-system/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/purchase-info&alternativeKey=' + (alternativeKey == null ? '' : encodeURIComponent(alternativeKey)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Create purchase information
		 * Creates purchase information for a given client profile.
		 * > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
		 * Post api/storage/profile-system/profiles/{profileId}/purchase-info
		 * @param {string} profileId ID of the client's profile as returned by the Create profile endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter.
		 * @param {string} alternativeKey The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.
		 * > Currently, there are two possible values for this parameter: `email` and `document`.
		 * @return {void} 
		 */
		CreatePurchaseInformation(profileId: string, alternativeKey: string | null | undefined, requestBody: any): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/storage/profile-system/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/purchase-info&alternativeKey=' + (alternativeKey == null ? '' : encodeURIComponent(alternativeKey)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get unmasked purchase information
		 * Retrieves unmasked purchase information of a given client, by its `profileId`.
		 * > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
		 * Get api/storage/profile-system/profiles/{profileId}/purchase-info/unmask
		 * @param {string} profileId ID of the client's profile as returned by the Create profile endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter.
		 * @return {Array<string>} OK
		 */
		GetUnmaskedPurchaseInformation(profileId: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/storage/profile-system/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/purchase-info/unmask', {});
		}

		/**
		 * Get unmasked profile
		 * Retrieves unmasked information of a specific client, by its `profileId`.
		 * > Since your store's profile schema is customizable, the schema and examples presented below may differ from yours. Your integration must be adapted accordingly.
		 * > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
		 * Get api/storage/profile-system/profiles/{profileId}/unmask
		 * @param {string} profileId ID of the client's profile as returned by the Create profile endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter.
		 * @param {string} reason Reason for requesting unmasked data.
		 * @param {string} alternativeKey The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.
		 * > Currently, there are two possible values for this parameter: `email` and `document`.
		 * @return {Array<string>} OK
		 */
		GetUnmaskedProfile(profileId: string, reason: string, alternativeKey: string | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/storage/profile-system/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/unmask&reason=' + (reason == null ? '' : encodeURIComponent(reason)) + '&alternativeKey=' + (alternativeKey == null ? '' : encodeURIComponent(alternativeKey)), {});
		}

		/**
		 * Get profile by version
		 * Retrieves the information of a specific version of a client profile.
		 * > Since your store's profile schema is customizable, the schema and examples presented below may differ from yours. Your integration must be adapted accordingly.
		 * > For security and privacy reasons, this request returns masked profile data. For unmasked information, see Get unmasked profile by version.
		 * > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
		 * Get api/storage/profile-system/profiles/{profileId}/versions/{profileVersionId}
		 * @param {string} profileId ID of the client's profile as returned by the Create profile endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter.
		 * @param {string} profileVersionId ID of the version of the client's profile as returned by endpoints that create or update profile information in the `version` field.
		 * @return {Array<string>} OK
		 */
		GetProfileByVersion(profileId: string, profileVersionId: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/storage/profile-system/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/versions/' + (profileVersionId == null ? '' : encodeURIComponent(profileVersionId)), {});
		}

		/**
		 * Get unmasked profile by version
		 * Retrieves unmasked information of a specific version of a client profile.
		 * > Since your store's profile schema is customizable, the schema and examples presented below may differ from yours. Your integration must be adapted accordingly.
		 * > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
		 * Get api/storage/profile-system/profiles/{profileId}/versions/{profileVersionId}/unmask
		 * @param {string} profileId ID of the client's profile as returned by the Create profile endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter.
		 * @param {string} profileVersionId ID of the version of the client's profile as returned by endpoints that create or update profile information in the `version` field.
		 * @param {string} reason Reason for requesting unmasked data.
		 * @return {Array<string>} OK
		 */
		GetUnmaskedProfileByVersion(profileId: string, profileVersionId: string, reason: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/storage/profile-system/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/versions/' + (profileVersionId == null ? '' : encodeURIComponent(profileVersionId)) + '/unmask&reason=' + (reason == null ? '' : encodeURIComponent(reason)), {});
		}

		/**
		 * Create prospect
		 * Creates new prospect.
		 * > The `id` field returned by this request is the `prospectId` used to retrieve information on a specific prospect later.
		 * > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
		 * Post api/storage/profile-system/prospects
		 * @return {void} 
		 */
		CreateProspect(requestBody: Prospect): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/storage/profile-system/prospects', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete prospect
		 * Deletes a prospect by `prospectId`.
		 * > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
		 * Delete api/storage/profile-system/prospects/{prospectId}
		 * @param {string} prospectId ID of the prospect as returned by the Create prospect endpoint's response, in the `id` field.
		 * @return {void} 
		 */
		DeleteProspect(prospectId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/storage/profile-system/prospects/' + (prospectId == null ? '' : encodeURIComponent(prospectId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get prospect
		 * Retrieves the information of a specific prospect, by its `prospectId`.
		 * > For security and privacy reasons, this request returns masked prospect data. For unmasked information, see Get unmasked prospect.
		 * > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
		 * Get api/storage/profile-system/prospects/{prospectId}
		 * @param {string} prospectId ID of the prospect as returned by the Create prospect endpoint's response, in the `id` field.
		 * @return {Array<string>} OK
		 */
		GetProspect(prospectId: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/storage/profile-system/prospects/' + (prospectId == null ? '' : encodeURIComponent(prospectId)), {});
		}

		/**
		 * Update prospect
		 * Updates one or more fields of an existing prospect.
		 * > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
		 * Patch api/storage/profile-system/prospects/{prospectId}
		 * @param {string} prospectId ID of the prospect as returned by the Create prospect endpoint's response, in the `id` field.
		 * @return {string} OK
		 */
		UpdateProspect(prospectId: string, requestBody: any): Observable<string> {
			return this.http.patch(this.baseUri + 'api/storage/profile-system/prospects/' + (prospectId == null ? '' : encodeURIComponent(prospectId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Get unmasked prospect
		 * Retrieves unmasked information of a specific prospect, by its `prospectId`.
		 * > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
		 * Get api/storage/profile-system/prospects/{prospectId}/unmask
		 * @param {string} prospectId ID of the prospect as returned by the Create prospect endpoint's response, in the `id` field.
		 * @param {string} reason Reason for requesting unmasked data.
		 * @return {Array<string>} OK
		 */
		GetUnmaskedProspect(prospectId: string, reason: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/storage/profile-system/prospects/' + (prospectId == null ? '' : encodeURIComponent(prospectId)) + '/unmask&reason=' + (reason == null ? '' : encodeURIComponent(reason)), {});
		}
	}

	export interface UpdateClientProfilePatchBody {
		birthDate?: Profile;
		document?: Profile;
		documentType?: Profile;
		email?: Profile;
		firstName?: Profile;
		lastName?: Profile;
	}
	export interface UpdateClientProfilePatchBodyFormProperties {
	}
	export function CreateUpdateClientProfilePatchBodyFormGroup() {
		return new FormGroup<UpdateClientProfilePatchBodyFormProperties>({
		});

	}

	export interface UpdateClientAddressPatchBody {
		administrativeAreaLevel1?: Address;
		countryCode?: Address;
		countryName?: Address;
		locality?: Address;
		localityAreaLevel1?: Address;
		postalCode?: Address;
		route?: Address;
		streetNumber?: Address;
	}
	export interface UpdateClientAddressPatchBodyFormProperties {
	}
	export function CreateUpdateClientAddressPatchBodyFormGroup() {
		return new FormGroup<UpdateClientAddressPatchBodyFormProperties>({
		});

	}

}

