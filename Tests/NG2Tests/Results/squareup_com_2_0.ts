import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents a physical address. */
	export interface Address {

		/**
		 * The first line of the address.
		 * Fields that start with `address_line` provide the address's most specific
		 * details, like street number, street name, and building name. They do *not*
		 * provide less specific details like city, state/province, or country (these
		 * details are provided in other fields).
		 */
		address_line_1?: string | null;

		/** The second line of the address, if any. */
		address_line_2?: string | null;

		/** The third line of the address, if any. */
		address_line_3?: string | null;

		/**
		 * A civil entity within the address's country. In the US, this
		 * is the state.
		 */
		administrative_district_level_1?: string | null;

		/**
		 * A civil entity within the address's `administrative_district_level_1`.
		 * In the US, this is the county.
		 */
		administrative_district_level_2?: string | null;

		/**
		 * A civil entity within the address's `administrative_district_level_2`,
		 * if any.
		 */
		administrative_district_level_3?: string | null;

		/** The address's country, in ISO 3166-1-alpha-2 format. */
		country?: AddressCountry | null;

		/** Optional first name when it's representing recipient. */
		first_name?: string | null;

		/** Optional last name when it's representing recipient. */
		last_name?: string | null;

		/** The city or town of the address. */
		locality?: string | null;

		/** Optional organization name when it's representing recipient. */
		organization?: string | null;

		/** The address's postal code. */
		postal_code?: string | null;

		/** A civil region within the address's `locality`, if any. */
		sublocality?: string | null;

		/** A civil region within the address's `sublocality`, if any. */
		sublocality_2?: string | null;

		/** A civil region within the address's `sublocality_2`, if any. */
		sublocality_3?: string | null;
	}

	/** Represents a physical address. */
	export interface AddressFormProperties {

		/**
		 * The first line of the address.
		 * Fields that start with `address_line` provide the address's most specific
		 * details, like street number, street name, and building name. They do *not*
		 * provide less specific details like city, state/province, or country (these
		 * details are provided in other fields).
		 */
		address_line_1: FormControl<string | null | undefined>,

		/** The second line of the address, if any. */
		address_line_2: FormControl<string | null | undefined>,

		/** The third line of the address, if any. */
		address_line_3: FormControl<string | null | undefined>,

		/**
		 * A civil entity within the address's country. In the US, this
		 * is the state.
		 */
		administrative_district_level_1: FormControl<string | null | undefined>,

		/**
		 * A civil entity within the address's `administrative_district_level_1`.
		 * In the US, this is the county.
		 */
		administrative_district_level_2: FormControl<string | null | undefined>,

		/**
		 * A civil entity within the address's `administrative_district_level_2`,
		 * if any.
		 */
		administrative_district_level_3: FormControl<string | null | undefined>,

		/** The address's country, in ISO 3166-1-alpha-2 format. */
		country: FormControl<AddressCountry | null | undefined>,

		/** Optional first name when it's representing recipient. */
		first_name: FormControl<string | null | undefined>,

		/** Optional last name when it's representing recipient. */
		last_name: FormControl<string | null | undefined>,

		/** The city or town of the address. */
		locality: FormControl<string | null | undefined>,

		/** Optional organization name when it's representing recipient. */
		organization: FormControl<string | null | undefined>,

		/** The address's postal code. */
		postal_code: FormControl<string | null | undefined>,

		/** A civil region within the address's `locality`, if any. */
		sublocality: FormControl<string | null | undefined>,

		/** A civil region within the address's `sublocality`, if any. */
		sublocality_2: FormControl<string | null | undefined>,

		/** A civil region within the address's `sublocality_2`, if any. */
		sublocality_3: FormControl<string | null | undefined>,
	}
	export function CreateAddressFormGroup() {
		return new FormGroup<AddressFormProperties>({
			address_line_1: new FormControl<string | null | undefined>(undefined),
			address_line_2: new FormControl<string | null | undefined>(undefined),
			address_line_3: new FormControl<string | null | undefined>(undefined),
			administrative_district_level_1: new FormControl<string | null | undefined>(undefined),
			administrative_district_level_2: new FormControl<string | null | undefined>(undefined),
			administrative_district_level_3: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<AddressCountry | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			locality: new FormControl<string | null | undefined>(undefined),
			organization: new FormControl<string | null | undefined>(undefined),
			postal_code: new FormControl<string | null | undefined>(undefined),
			sublocality: new FormControl<string | null | undefined>(undefined),
			sublocality_2: new FormControl<string | null | undefined>(undefined),
			sublocality_3: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AddressCountry { ZZ = 0, AD = 1, AE = 2, AF = 3, AG = 4, AI = 5, AL = 6, AM = 7, AO = 8, AQ = 9, AR = 10, AS = 11, AT = 12, AU = 13, AW = 14, AX = 15, AZ = 16, BA = 17, BB = 18, BD = 19, BE = 20, BF = 21, BG = 22, BH = 23, BI = 24, BJ = 25, BL = 26, BM = 27, BN = 28, BO = 29, BQ = 30, BR = 31, BS = 32, BT = 33, BV = 34, BW = 35, BY = 36, BZ = 37, CA = 38, CC = 39, CD = 40, CF = 41, CG = 42, CH = 43, CI = 44, CK = 45, CL = 46, CM = 47, CN = 48, CO = 49, CR = 50, CU = 51, CV = 52, CW = 53, CX = 54, CY = 55, CZ = 56, DE = 57, DJ = 58, DK = 59, DM = 60, DO = 61, DZ = 62, EC = 63, EE = 64, EG = 65, EH = 66, ER = 67, ES = 68, ET = 69, FI = 70, FJ = 71, FK = 72, FM = 73, FO = 74, FR = 75, GA = 76, GB = 77, GD = 78, GE = 79, GF = 80, GG = 81, GH = 82, GI = 83, GL = 84, GM = 85, GN = 86, GP = 87, GQ = 88, GR = 89, GS = 90, GT = 91, GU = 92, GW = 93, GY = 94, HK = 95, HM = 96, HN = 97, HR = 98, HT = 99, HU = 100, ID = 101, IE = 102, IL = 103, IM = 104, IN = 105, IO = 106, IQ = 107, IR = 108, IS = 109, IT = 110, JE = 111, JM = 112, JO = 113, JP = 114, KE = 115, KG = 116, KH = 117, KI = 118, KM = 119, KN = 120, KP = 121, KR = 122, KW = 123, KY = 124, KZ = 125, LA = 126, LB = 127, LC = 128, LI = 129, LK = 130, LR = 131, LS = 132, LT = 133, LU = 134, LV = 135, LY = 136, MA = 137, MC = 138, MD = 139, ME = 140, MF = 141, MG = 142, MH = 143, MK = 144, ML = 145, MM = 146, MN = 147, MO = 148, MP = 149, MQ = 150, MR = 151, MS = 152, MT = 153, MU = 154, MV = 155, MW = 156, MX = 157, MY = 158, MZ = 159, NA = 160, NC = 161, NE = 162, NF = 163, NG = 164, NI = 165, NL = 166, NO = 167, NP = 168, NR = 169, NU = 170, NZ = 171, OM = 172, PA = 173, PE = 174, PF = 175, PG = 176, PH = 177, PK = 178, PL = 179, PM = 180, PN = 181, PR = 182, PS = 183, PT = 184, PW = 185, PY = 186, QA = 187, RE = 188, RO = 189, RS = 190, RU = 191, RW = 192, SA = 193, SB = 194, SC = 195, SD = 196, SE = 197, SG = 198, SH = 199, SI = 200, SJ = 201, SK = 202, SL = 203, SM = 204, SN = 205, SO = 206, SR = 207, SS = 208, ST = 209, SV = 210, SX = 211, SY = 212, SZ = 213, TC = 214, TD = 215, TF = 216, TG = 217, TH = 218, TJ = 219, TK = 220, TL = 221, TM = 222, TN = 223, TO = 224, TR = 225, TT = 226, TV = 227, TW = 228, TZ = 229, UA = 230, UG = 231, UM = 232, US = 233, UY = 234, UZ = 235, VA = 236, VC = 237, VE = 238, VG = 239, VI = 240, VN = 241, VU = 242, WF = 243, WS = 244, YE = 245, YT = 246, ZA = 247, ZM = 248, ZW = 249 }

	export interface BatchDeleteCatalogObjectsRequest {

		/**
		 * The IDs of the [CatalogObject](#type-catalogobject)s to be deleted. When an object is deleted, other objects
		 * in the graph that depend on that object will be deleted as well (for example, deleting a
		 * [CatalogItem](#type-catalogitem) will delete its [CatalogItemVariation](#type-catalogitemvariation)s).
		 */
		object_ids?: Array<string>;
	}
	export interface BatchDeleteCatalogObjectsRequestFormProperties {
	}
	export function CreateBatchDeleteCatalogObjectsRequestFormGroup() {
		return new FormGroup<BatchDeleteCatalogObjectsRequestFormProperties>({
		});

	}

	export interface BatchDeleteCatalogObjectsResponse {

		/** The database [timestamp](#workingwithdates) of this deletion in RFC 3339 format, e.g., "2016-09-04T23:59:33.123Z". */
		deleted_at?: string | null;

		/** The IDs of all [CatalogObject](#type-catalogobject)s deleted by this request. */
		deleted_object_ids?: Array<string>;

		/** The set of [Error](#type-error)s encountered. */
		errors?: Array<Error>;
	}
	export interface BatchDeleteCatalogObjectsResponseFormProperties {

		/** The database [timestamp](#workingwithdates) of this deletion in RFC 3339 format, e.g., "2016-09-04T23:59:33.123Z". */
		deleted_at: FormControl<string | null | undefined>,
	}
	export function CreateBatchDeleteCatalogObjectsResponseFormGroup() {
		return new FormGroup<BatchDeleteCatalogObjectsResponseFormProperties>({
			deleted_at: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Represents an error encountered during a request to the Connect API.
	 * See [Handling errors](#handlingerrors) for more information.
	 */
	export interface Error {

		/**
		 * The error's high-level category. See [ErrorCategory](#type-errorcategory)
		 * for possible values.
		 * Required
		 */
		category: ErrorCategory;

		/**
		 * The error's specific code. See [ErrorCode](#type-errorcode) for possible
		 * values
		 * Required
		 */
		code: ErrorCode;

		/** A human-readable description of the error for debugging purposes. */
		detail?: string | null;

		/**
		 * The name of the field provided in the original request that the error
		 * pertains to, if any.
		 */
		field?: string | null;
	}

	/**
	 * Represents an error encountered during a request to the Connect API.
	 * See [Handling errors](#handlingerrors) for more information.
	 */
	export interface ErrorFormProperties {

		/**
		 * The error's high-level category. See [ErrorCategory](#type-errorcategory)
		 * for possible values.
		 * Required
		 */
		category: FormControl<ErrorCategory | null | undefined>,

		/**
		 * The error's specific code. See [ErrorCode](#type-errorcode) for possible
		 * values
		 * Required
		 */
		code: FormControl<ErrorCode | null | undefined>,

		/** A human-readable description of the error for debugging purposes. */
		detail: FormControl<string | null | undefined>,

		/**
		 * The name of the field provided in the original request that the error
		 * pertains to, if any.
		 */
		field: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			category: new FormControl<ErrorCategory | null | undefined>(undefined, [Validators.required]),
			code: new FormControl<ErrorCode | null | undefined>(undefined, [Validators.required]),
			detail: new FormControl<string | null | undefined>(undefined),
			field: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ErrorCategory { API_ERROR = 0, AUTHENTICATION_ERROR = 1, INVALID_REQUEST_ERROR = 2, RATE_LIMIT_ERROR = 3, PAYMENT_METHOD_ERROR = 4, REFUND_ERROR = 5 }

	export enum ErrorCode { INTERNAL_SERVER_ERROR = 0, UNAUTHORIZED = 1, ACCESS_TOKEN_EXPIRED = 2, ACCESS_TOKEN_REVOKED = 3, FORBIDDEN = 4, INSUFFICIENT_SCOPES = 5, APPLICATION_DISABLED = 6, V1_APPLICATION = 7, V1_ACCESS_TOKEN = 8, CARD_PROCESSING_NOT_ENABLED = 9, BAD_REQUEST = 10, MISSING_REQUIRED_PARAMETER = 11, INCORRECT_TYPE = 12, INVALID_TIME = 13, INVALID_TIME_RANGE = 14, INVALID_VALUE = 15, INVALID_CURSOR = 16, UNKNOWN_QUERY_PARAMETER = 17, CONFLICTING_PARAMETERS = 18, EXPECTED_JSON_BODY = 19, INVALID_SORT_ORDER = 20, VALUE_REGEX_MISMATCH = 21, VALUE_TOO_SHORT = 22, VALUE_TOO_LONG = 23, VALUE_TOO_LOW = 24, VALUE_TOO_HIGH = 25, VALUE_EMPTY = 26, ARRAY_EMPTY = 27, EXPECTED_BOOLEAN = 28, EXPECTED_INTEGER = 29, EXPECTED_FLOAT = 30, EXPECTED_STRING = 31, EXPECTED_OBJECT = 32, EXPECTED_ARRAY = 33, EXPECTED_BASE64_ENCODED_BYTE_ARRAY = 34, INVALID_ARRAY_VALUE = 35, INVALID_ENUM_VALUE = 36, INVALID_CONTENT_TYPE = 37, INVALID_FORM_VALUE = 38, ONE_INSTRUMENT_EXPECTED = 39, NO_FIELDS_SET = 40, CARD_EXPIRED = 41, INVALID_EXPIRATION = 42, INVALID_EXPIRATION_YEAR = 43, INVALID_EXPIRATION_DATE = 44, UNSUPPORTED_CARD_BRAND = 45, INVALID_CARD = 46, DELAYED_TRANSACTION_EXPIRED = 47, DELAYED_TRANSACTION_CANCELED = 48, DELAYED_TRANSACTION_CAPTURED = 49, DELAYED_TRANSACTION_FAILED = 50, CARD_TOKEN_EXPIRED = 51, CARD_TOKEN_USED = 52, AMOUNT_TOO_HIGH = 53, UNSUPPORTED_INSTRUMENT_TYPE = 54, REFUND_AMOUNT_INVALID = 55, REFUND_ALREADY_PENDING = 56, PAYMENT_NOT_REFUNDABLE = 57, INVALID_CARD_DATA = 58, IDEMPOTENCY_KEY_REUSED = 59, UNEXPECTED_VALUE = 60, SANDBOX_NOT_SUPPORTED = 61, INVALID_EMAIL_ADDRESS = 62, CHECKOUT_EXPIRED = 63, CARD_DECLINED = 64, VERIFY_CVV_FAILURE = 65, VERIFY_AVS_FAILURE = 66, CARD_DECLINED_CALL_ISSUER = 67, NOT_FOUND = 68, REQUEST_TIMEOUT = 69, CONFLICT = 70, REQUEST_ENTITY_TOO_LARGE = 71, UNSUPPORTED_MEDIA_TYPE = 72, RATE_LIMITED = 73, NOT_IMPLEMENTED = 74, SERVICE_UNAVAILABLE = 75 }

	export interface BatchRetrieveCatalogObjectsRequest {

		/**
		 * If `true`, the response will include additional objects that are related to the
		 * requested objects, as follows:
		 * If the `objects` field of the response contains a [CatalogItem](#type-catalogitem),
		 * its associated [CatalogCategory](#type-catalogcategory), [CatalogTax](#type-catalogtax)es, and
		 * [CatalogModifierList](#type-catalogmodifierlist)s will be returned in the `related_objects` field of the
		 * response. If the `objects` field of the response contains a [CatalogItemVariation](#type-catalogitemvariation),
		 * its parent [CatalogItem](#type-catalogitem) will be returned in the `related_objects` field of
		 * the response.
		 */
		include_related_objects?: boolean | null;

		/**
		 * The IDs of the [CatalogObject](#type-catalogobject)s to be retrieved.
		 * Required
		 */
		object_ids: Array<string>;
	}
	export interface BatchRetrieveCatalogObjectsRequestFormProperties {

		/**
		 * If `true`, the response will include additional objects that are related to the
		 * requested objects, as follows:
		 * If the `objects` field of the response contains a [CatalogItem](#type-catalogitem),
		 * its associated [CatalogCategory](#type-catalogcategory), [CatalogTax](#type-catalogtax)es, and
		 * [CatalogModifierList](#type-catalogmodifierlist)s will be returned in the `related_objects` field of the
		 * response. If the `objects` field of the response contains a [CatalogItemVariation](#type-catalogitemvariation),
		 * its parent [CatalogItem](#type-catalogitem) will be returned in the `related_objects` field of
		 * the response.
		 */
		include_related_objects: FormControl<boolean | null | undefined>,
	}
	export function CreateBatchRetrieveCatalogObjectsRequestFormGroup() {
		return new FormGroup<BatchRetrieveCatalogObjectsRequestFormProperties>({
			include_related_objects: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface BatchRetrieveCatalogObjectsResponse {

		/** The set of [Error](#type-error)s encountered. */
		errors?: Array<Error>;

		/** A list of [CatalogObject](#type-catalogobject)s returned. */
		objects?: Array<CatalogObject>;

		/** A list of [CatalogObject](#type-catalogobject)s referenced by the object in the `objects` field. */
		related_objects?: Array<CatalogObject>;
	}
	export interface BatchRetrieveCatalogObjectsResponseFormProperties {
	}
	export function CreateBatchRetrieveCatalogObjectsResponseFormGroup() {
		return new FormGroup<BatchRetrieveCatalogObjectsResponseFormProperties>({
		});

	}


	/**
	 * The wrapper object for object types in the Catalog data model. The type
	 * of a particular `CatalogObject` is determined by the value of
	 * `type` and only the corresponding data field may be set.
	 * - if type = `ITEM`, only `item_data` will be populated and it will contain a valid [CatalogItem](#type-catalogitem) object.
	 * - if type = `ITEM_VARIATION`, only `item_variation_data` will be populated and it will contain a valid [CatalogItemVariation](#type-catalogitemvariation) object.
	 * - if type = `MODIFIER`, only `modifier_data` will be populated and it will contain a valid [CatalogModifier](#type-catalogmodifier) object.
	 * - if type = `MODIFIER_LIST`, only `modifier_list_data` will be populated and it will contain a valid [CatalogModifierList](#type-catalogmodifierlist) object.
	 * - if type = `CATEGORY`, only `category_data` will be populated and it will contain a valid [CatalogCategory](#type-catalogcategory) object.
	 * - if type = `DISCOUNT`, only `discount_data` will be populated and it will contain a valid [CatalogDiscount](#type-catalogdiscount) object.
	 * - if type = `TAX`, only `tax_data` will be populated and it will contain a valid [CatalogTax](#type-catalogtax) object.
	 * For a more detailed discussion of the Catalog data model, please see the
	 * [Catalog Overview](https://docs.connect.squareup.com/articles/catalog-overview).
	 */
	export interface CatalogObject {

		/** A list of locations where the object is not present, even if `present_at_all_locations` is `true`. */
		absent_at_location_ids?: Array<string>;

		/**
		 * The Connect V1 IDs for this object at each [location][#type-location] where it is present, where they
		 * differ from the object's Connect V2 ID. The field will only be present for objects that
		 * have been created or modified by legacy APIs.
		 */
		catalog_v1_ids?: Array<CatalogV1Id>;

		/** A category to which an [CatalogItem](#type-catalogitem) belongs in the Catalog object model. */
		category_data?: CatalogCategory;

		/** A discount in the Catalog object model. */
		discount_data?: CatalogDiscount;

		/**
		 * An identifier to reference this object in the catalog. When a new CatalogObject
		 * is inserted, the client should set the id to a temporary identifier starting with
		 * a `'#'` character. Other objects being inserted or updated within the same request
		 * may use this identifier to refer to the new object.
		 * When the server receives the new object, it will supply a unique identifier that
		 * replaces the temporary identifier for all future references.
		 * Required
		 * Min length: 1
		 */
		id: string;

		/**
		 * If `true`, the object has been deleted from the database. Must be `false` for new objects
		 * being inserted. When deleted, the `updated_at` field will equal the deletion time.
		 */
		is_deleted?: boolean | null;

		/** An item (i.e., product family) in the Catalog object model. */
		item_data?: CatalogItem;

		/** An item variation (i.e., product) in the Catalog object model. */
		item_variation_data?: CatalogItemVariation;

		/** A modifier in the Catalog object model. */
		modifier_data?: CatalogModifier;

		/**
		 * A modifier list in the Catalog object model. A [CatalogModifierList](#type-catalogmodifierlist)
		 * contains [Modifier](#type-catalogmodifier)s that can be applied to a [CatalogItem](#type-catalogitem)
		 * at the time of sale.
		 * For example, a modifier list "Condiments" that would apply to a "Hot Dog" [CatalogItem](#type-catalogitem) might
		 * contain [CatalogModifier](#type-catalogmodifier)s "Ketchup", "Mustard", and "Relish". The
		 * `selection_type` field specifies whether or not multiple selections from the modifier list are allowed.
		 */
		modifier_list_data?: CatalogModifierList;

		/**
		 * If `true`, this object is present at all locations (including future locations), except where specified in
		 * the `absent_at_location_ids` field. If `false`, this object is not present at any locations (including future locations),
		 * except where specified in the `present_at_location_ids` field.
		 */
		present_at_all_locations?: boolean | null;

		/** A list of locations where the object is present, even if `present_at_all_locations` is `false`. */
		present_at_location_ids?: Array<string>;

		/** A tax in the Catalog object model. */
		tax_data?: CatalogTax;

		/**
		 * The type of this object. Each object type has expected
		 * properties expressed in a structured format within its corresponding `*_data` field below.
		 * See [CatalogObjectType](#type-catalogobjecttype) for all possible values.
		 * Required
		 */
		type: CatalogObjectType;

		/**
		 * Last modification [timestamp](#workingwithdates) in RFC 3339 format, e.g., `"2016-08-15T23:59:33.123Z"`
		 * would indicate the UTC time (denoted by `Z`) of August 15, 2016 at 23:59:33 and 123 milliseconds.
		 */
		updated_at?: string | null;

		/**
		 * The version of the object. When updating an object, the version supplied by the
		 * must match the version in the database, otherwise the write will be rejected as conflicting.
		 */
		version?: number | null;
	}

	/**
	 * The wrapper object for object types in the Catalog data model. The type
	 * of a particular `CatalogObject` is determined by the value of
	 * `type` and only the corresponding data field may be set.
	 * - if type = `ITEM`, only `item_data` will be populated and it will contain a valid [CatalogItem](#type-catalogitem) object.
	 * - if type = `ITEM_VARIATION`, only `item_variation_data` will be populated and it will contain a valid [CatalogItemVariation](#type-catalogitemvariation) object.
	 * - if type = `MODIFIER`, only `modifier_data` will be populated and it will contain a valid [CatalogModifier](#type-catalogmodifier) object.
	 * - if type = `MODIFIER_LIST`, only `modifier_list_data` will be populated and it will contain a valid [CatalogModifierList](#type-catalogmodifierlist) object.
	 * - if type = `CATEGORY`, only `category_data` will be populated and it will contain a valid [CatalogCategory](#type-catalogcategory) object.
	 * - if type = `DISCOUNT`, only `discount_data` will be populated and it will contain a valid [CatalogDiscount](#type-catalogdiscount) object.
	 * - if type = `TAX`, only `tax_data` will be populated and it will contain a valid [CatalogTax](#type-catalogtax) object.
	 * For a more detailed discussion of the Catalog data model, please see the
	 * [Catalog Overview](https://docs.connect.squareup.com/articles/catalog-overview).
	 */
	export interface CatalogObjectFormProperties {

		/**
		 * An identifier to reference this object in the catalog. When a new CatalogObject
		 * is inserted, the client should set the id to a temporary identifier starting with
		 * a `'#'` character. Other objects being inserted or updated within the same request
		 * may use this identifier to refer to the new object.
		 * When the server receives the new object, it will supply a unique identifier that
		 * replaces the temporary identifier for all future references.
		 * Required
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * If `true`, the object has been deleted from the database. Must be `false` for new objects
		 * being inserted. When deleted, the `updated_at` field will equal the deletion time.
		 */
		is_deleted: FormControl<boolean | null | undefined>,

		/**
		 * If `true`, this object is present at all locations (including future locations), except where specified in
		 * the `absent_at_location_ids` field. If `false`, this object is not present at any locations (including future locations),
		 * except where specified in the `present_at_location_ids` field.
		 */
		present_at_all_locations: FormControl<boolean | null | undefined>,

		/**
		 * The type of this object. Each object type has expected
		 * properties expressed in a structured format within its corresponding `*_data` field below.
		 * See [CatalogObjectType](#type-catalogobjecttype) for all possible values.
		 * Required
		 */
		type: FormControl<CatalogObjectType | null | undefined>,

		/**
		 * Last modification [timestamp](#workingwithdates) in RFC 3339 format, e.g., `"2016-08-15T23:59:33.123Z"`
		 * would indicate the UTC time (denoted by `Z`) of August 15, 2016 at 23:59:33 and 123 milliseconds.
		 */
		updated_at: FormControl<string | null | undefined>,

		/**
		 * The version of the object. When updating an object, the version supplied by the
		 * must match the version in the database, otherwise the write will be rejected as conflicting.
		 */
		version: FormControl<number | null | undefined>,
	}
	export function CreateCatalogObjectFormGroup() {
		return new FormGroup<CatalogObjectFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			is_deleted: new FormControl<boolean | null | undefined>(undefined),
			present_at_all_locations: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<CatalogObjectType | null | undefined>(undefined, [Validators.required]),
			updated_at: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An Items Connect V1 object ID along with its associated [location][#type-location] ID. */
	export interface CatalogV1Id {

		/** The ID for an object in Connect V1, if different from its Connect V2 ID. */
		catalog_v1_id?: string | null;

		/** The ID of the [location][#type-location] this Connect V1 ID is associated with. */
		location_id?: string | null;
	}

	/** An Items Connect V1 object ID along with its associated [location][#type-location] ID. */
	export interface CatalogV1IdFormProperties {

		/** The ID for an object in Connect V1, if different from its Connect V2 ID. */
		catalog_v1_id: FormControl<string | null | undefined>,

		/** The ID of the [location][#type-location] this Connect V1 ID is associated with. */
		location_id: FormControl<string | null | undefined>,
	}
	export function CreateCatalogV1IdFormGroup() {
		return new FormGroup<CatalogV1IdFormProperties>({
			catalog_v1_id: new FormControl<string | null | undefined>(undefined),
			location_id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A category to which an [CatalogItem](#type-catalogitem) belongs in the Catalog object model. */
	export interface CatalogCategory {

		/**
		 * The category's name. Searchable.
		 * Required
		 * Min length: 1
		 */
		name: string;
	}

	/** A category to which an [CatalogItem](#type-catalogitem) belongs in the Catalog object model. */
	export interface CatalogCategoryFormProperties {

		/**
		 * The category's name. Searchable.
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCatalogCategoryFormGroup() {
		return new FormGroup<CatalogCategoryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}


	/** A discount in the Catalog object model. */
	export interface CatalogDiscount {

		/**
		 * Represents an amount of money.
		 * __Important:__ Unlike version 1 of the Connect API, __all monetary amounts
		 * returned by v2 endpoints are positive.__ (In v1, monetary amounts are negative
		 * if they represent money being paid _by_ a merchant, instead of money being
		 * paid _to_ a merchant.)
		 */
		amount_money?: Money;

		/**
		 * Indicates whether the discount is a fixed amount or percentage, or entered at the time of sale.
		 * See [CatalogDiscountType](#type-catalogdiscounttype) for all possible values.
		 */
		discount_type?: CatalogDiscountDiscount_type | null;

		/** The color of the discount's display label in the Square Point of Sale app. */
		label_color?: string | null;

		/**
		 * The discount's name. Searchable.
		 * Required
		 * Min length: 1
		 */
		name: string;

		/**
		 * The percentage of the discount as a string representation of a decimal number, using a `.` as the decimal
		 * separator and without a `%` sign. A value of `7.5` corresponds to `7.5%`. Specify a percentage of `0` if `discount_type`
		 * is `VARIABLE_PERCENTAGE`.
		 * Do not include this field for amount-based or variable discounts.
		 */
		percentage?: string | null;

		/**
		 * Indicates whether a mobile staff member needs to enter their PIN to apply the
		 * discount to a payment in the Square Point of Sale app.
		 */
		pin_required?: boolean | null;
	}

	/** A discount in the Catalog object model. */
	export interface CatalogDiscountFormProperties {

		/**
		 * Indicates whether the discount is a fixed amount or percentage, or entered at the time of sale.
		 * See [CatalogDiscountType](#type-catalogdiscounttype) for all possible values.
		 */
		discount_type: FormControl<CatalogDiscountDiscount_type | null | undefined>,

		/** The color of the discount's display label in the Square Point of Sale app. */
		label_color: FormControl<string | null | undefined>,

		/**
		 * The discount's name. Searchable.
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The percentage of the discount as a string representation of a decimal number, using a `.` as the decimal
		 * separator and without a `%` sign. A value of `7.5` corresponds to `7.5%`. Specify a percentage of `0` if `discount_type`
		 * is `VARIABLE_PERCENTAGE`.
		 * Do not include this field for amount-based or variable discounts.
		 */
		percentage: FormControl<string | null | undefined>,

		/**
		 * Indicates whether a mobile staff member needs to enter their PIN to apply the
		 * discount to a payment in the Square Point of Sale app.
		 */
		pin_required: FormControl<boolean | null | undefined>,
	}
	export function CreateCatalogDiscountFormGroup() {
		return new FormGroup<CatalogDiscountFormProperties>({
			discount_type: new FormControl<CatalogDiscountDiscount_type | null | undefined>(undefined),
			label_color: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			percentage: new FormControl<string | null | undefined>(undefined),
			pin_required: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**
	 * Represents an amount of money.
	 * __Important:__ Unlike version 1 of the Connect API, __all monetary amounts
	 * returned by v2 endpoints are positive.__ (In v1, monetary amounts are negative
	 * if they represent money being paid _by_ a merchant, instead of money being
	 * paid _to_ a merchant.)
	 */
	export interface Money {

		/**
		 * The amount of money, in the smallest denomination of the
		 * currency indicated by `currency`. For example, when `currency` is `USD`,
		 * `amount` is in cents.
		 */
		amount?: number | null;

		/**
		 * The type of currency, in __ISO 4217 format__. For example, the currency
		 * code for US dollars is `USD`.
		 * See [Currency](#type-currency) for possible values.
		 */
		currency?: MoneyCurrency | null;
	}

	/**
	 * Represents an amount of money.
	 * __Important:__ Unlike version 1 of the Connect API, __all monetary amounts
	 * returned by v2 endpoints are positive.__ (In v1, monetary amounts are negative
	 * if they represent money being paid _by_ a merchant, instead of money being
	 * paid _to_ a merchant.)
	 */
	export interface MoneyFormProperties {

		/**
		 * The amount of money, in the smallest denomination of the
		 * currency indicated by `currency`. For example, when `currency` is `USD`,
		 * `amount` is in cents.
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * The type of currency, in __ISO 4217 format__. For example, the currency
		 * code for US dollars is `USD`.
		 * See [Currency](#type-currency) for possible values.
		 */
		currency: FormControl<MoneyCurrency | null | undefined>,
	}
	export function CreateMoneyFormGroup() {
		return new FormGroup<MoneyFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			currency: new FormControl<MoneyCurrency | null | undefined>(undefined),
		});

	}

	export enum MoneyCurrency { AED = 0, AFN = 1, ALL = 2, AMD = 3, ANG = 4, AOA = 5, ARS = 6, AUD = 7, AWG = 8, AZN = 9, BAM = 10, BBD = 11, BDT = 12, BGN = 13, BHD = 14, BIF = 15, BMD = 16, BND = 17, BOB = 18, BOV = 19, BRL = 20, BSD = 21, BTN = 22, BWP = 23, BYR = 24, BZD = 25, CAD = 26, CDF = 27, CHE = 28, CHF = 29, CHW = 30, CLF = 31, CLP = 32, CNY = 33, COP = 34, COU = 35, CRC = 36, CUC = 37, CUP = 38, CVE = 39, CZK = 40, DJF = 41, DKK = 42, DOP = 43, DZD = 44, EGP = 45, ERN = 46, ETB = 47, EUR = 48, FJD = 49, FKP = 50, GBP = 51, GEL = 52, GHS = 53, GIP = 54, GMD = 55, GNF = 56, GTQ = 57, GYD = 58, HKD = 59, HNL = 60, HRK = 61, HTG = 62, HUF = 63, IDR = 64, ILS = 65, INR = 66, IQD = 67, IRR = 68, ISK = 69, JMD = 70, JOD = 71, JPY = 72, KES = 73, KGS = 74, KHR = 75, KMF = 76, KPW = 77, KRW = 78, KWD = 79, KYD = 80, KZT = 81, LAK = 82, LBP = 83, LKR = 84, LRD = 85, LSL = 86, LTL = 87, LVL = 88, LYD = 89, MAD = 90, MDL = 91, MGA = 92, MKD = 93, MMK = 94, MNT = 95, MOP = 96, MRO = 97, MUR = 98, MVR = 99, MWK = 100, MXN = 101, MXV = 102, MYR = 103, MZN = 104, NAD = 105, NGN = 106, NIO = 107, NOK = 108, NPR = 109, NZD = 110, OMR = 111, PAB = 112, PEN = 113, PGK = 114, PHP = 115, PKR = 116, PLN = 117, PYG = 118, QAR = 119, RON = 120, RSD = 121, RUB = 122, RWF = 123, SAR = 124, SBD = 125, SCR = 126, SDG = 127, SEK = 128, SGD = 129, SHP = 130, SLL = 131, SOS = 132, SRD = 133, SSP = 134, STD = 135, SVC = 136, SYP = 137, SZL = 138, THB = 139, TJS = 140, TMT = 141, TND = 142, TOP = 143, TRY = 144, TTD = 145, TWD = 146, TZS = 147, UAH = 148, UGX = 149, USD = 150, USN = 151, USS = 152, UYI = 153, UYU = 154, UZS = 155, VEF = 156, VND = 157, VUV = 158, WST = 159, XAF = 160, XAG = 161, XAU = 162, XBA = 163, XBB = 164, XBC = 165, XBD = 166, XCD = 167, XDR = 168, XOF = 169, XPD = 170, XPF = 171, XPT = 172, XTS = 173, XXX = 174, YER = 175, ZAR = 176, ZMK = 177, ZMW = 178, BTC = 179 }

	export enum CatalogDiscountDiscount_type { FIXED_PERCENTAGE = 0, FIXED_AMOUNT = 1, VARIABLE_PERCENTAGE = 2, VARIABLE_AMOUNT = 3 }


	/** An item (i.e., product family) in the Catalog object model. */
	export interface CatalogItem {

		/** The text of the item's display label in the Square Point of Sale app. Only up to the first five characters of the string are used.  Searchable. */
		abbreviation?: string | null;

		/** If `true`, the item can be added to electronically fulfilled orders from the merchant's online store. */
		available_electronically?: boolean | null;

		/** If `true`, the item can be added to pickup orders from the merchant's online store. */
		available_for_pickup?: boolean | null;

		/** If `true`, the item can be added to shipping orders from the merchant's online store. */
		available_online?: boolean | null;

		/** The ID of the item's category, if any. */
		category_id?: string | null;

		/** The item's description. Searchable. */
		description?: string | null;

		/** The URL of an image representing this item. */
		image_url?: string | null;

		/** The color of the item's display label in the Square Point of Sale app. */
		label_color?: string | null;

		/**
		 * A set of [CatalogItemModifierListInfo](#type-catalogitemmodifierlistinfo) objects
		 * representing the modifier lists that apply to this item, along with the overrides and min
		 * and max limits that are specific to this item. [CatalogModifierList](#type-catalogmodifierlist)s
		 * may also be added to or deleted from an item using `UpdateItemModifierLists`.
		 */
		modifier_list_info?: Array<CatalogItemModifierListInfo>;

		/**
		 * The item's name. Searchable.
		 * Required
		 * Min length: 1
		 */
		name: string;

		/**
		 * The product type of the item. May not be changed once an item has been created.
		 * Only items of product type `REGULAR` may be created by this API; items with other product
		 * types are read-only. See [CatalogItemProductType](#type-catalogitemproducttype) for all possible values.
		 */
		product_type?: CatalogItemProduct_type | null;

		/**
		 * If `false`, the Square Point of Sale app will present the [CatalogItem](#type-catalogitem)'s
		 * details screen immediately, allowing the merchant to choose [CatalogModifier](#type-catalogmodifier)s
		 * before adding the item to the cart.  This is the default behavior.
		 * If `true`, the Square Point of Sale app will immediately add the item to the cart with the pre-selected
		 * modifiers, and merchants can edit modifiers by drilling down onto the item's details.
		 * Third-party clients are encouraged to implement similar behaviors.
		 */
		skip_modifier_screen?: boolean | null;

		/**
		 * A set of IDs indicating the [CatalogTax](#type-catalogtax)es that are enabled for
		 * this item. When updating an item, any taxes listed here will be added to the item.
		 * [CatalogTax](#type-catalogtax)es may also be added to or deleted from an item using `UpdateItemTaxes`.
		 */
		tax_ids?: Array<string>;

		/** A list of [CatalogObject](#type-catalogobject)s containing the [CatalogItemVariation](#type-catalogitemvariation)s for this item. */
		variations?: Array<CatalogObject>;
	}

	/** An item (i.e., product family) in the Catalog object model. */
	export interface CatalogItemFormProperties {

		/** The text of the item's display label in the Square Point of Sale app. Only up to the first five characters of the string are used.  Searchable. */
		abbreviation: FormControl<string | null | undefined>,

		/** If `true`, the item can be added to electronically fulfilled orders from the merchant's online store. */
		available_electronically: FormControl<boolean | null | undefined>,

		/** If `true`, the item can be added to pickup orders from the merchant's online store. */
		available_for_pickup: FormControl<boolean | null | undefined>,

		/** If `true`, the item can be added to shipping orders from the merchant's online store. */
		available_online: FormControl<boolean | null | undefined>,

		/** The ID of the item's category, if any. */
		category_id: FormControl<string | null | undefined>,

		/** The item's description. Searchable. */
		description: FormControl<string | null | undefined>,

		/** The URL of an image representing this item. */
		image_url: FormControl<string | null | undefined>,

		/** The color of the item's display label in the Square Point of Sale app. */
		label_color: FormControl<string | null | undefined>,

		/**
		 * The item's name. Searchable.
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The product type of the item. May not be changed once an item has been created.
		 * Only items of product type `REGULAR` may be created by this API; items with other product
		 * types are read-only. See [CatalogItemProductType](#type-catalogitemproducttype) for all possible values.
		 */
		product_type: FormControl<CatalogItemProduct_type | null | undefined>,

		/**
		 * If `false`, the Square Point of Sale app will present the [CatalogItem](#type-catalogitem)'s
		 * details screen immediately, allowing the merchant to choose [CatalogModifier](#type-catalogmodifier)s
		 * before adding the item to the cart.  This is the default behavior.
		 * If `true`, the Square Point of Sale app will immediately add the item to the cart with the pre-selected
		 * modifiers, and merchants can edit modifiers by drilling down onto the item's details.
		 * Third-party clients are encouraged to implement similar behaviors.
		 */
		skip_modifier_screen: FormControl<boolean | null | undefined>,
	}
	export function CreateCatalogItemFormGroup() {
		return new FormGroup<CatalogItemFormProperties>({
			abbreviation: new FormControl<string | null | undefined>(undefined),
			available_electronically: new FormControl<boolean | null | undefined>(undefined),
			available_for_pickup: new FormControl<boolean | null | undefined>(undefined),
			available_online: new FormControl<boolean | null | undefined>(undefined),
			category_id: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			image_url: new FormControl<string | null | undefined>(undefined),
			label_color: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			product_type: new FormControl<CatalogItemProduct_type | null | undefined>(undefined),
			skip_modifier_screen: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Controls the properties of a [CatalogModifierList](#type-catalogmodifierlist) as it applies to this [CatalogItem](#type-catalogitem). */
	export interface CatalogItemModifierListInfo {

		/** If `true`, enable this [CatalogModifierList](#type-catalogmodifierlist). */
		enabled?: boolean | null;

		/** If zero or larger, the largest number of [CatalogModifier](#type-catalogmodifier)s that can be selected from this [CatalogModifierList](#type-catalogmodifierlist). */
		max_selected_modifiers?: number | null;

		/** If zero or larger, the smallest number of [CatalogModifier](#type-catalogmodifier)s that must be selected from this [CatalogModifierList](#type-catalogmodifierlist). */
		min_selected_modifiers?: number | null;

		/**
		 * The ID of the [CatalogModifierList](#type-catalogmodifierlist) controlled by this [CatalogModifierListInfo](#type-catalogmodifierlistinfo).
		 * Required
		 * Min length: 1
		 */
		modifier_list_id: string;

		/** A set of [CatalogModifierOverride](#type-catalogmodifieroverride) objects that override whether a given [CatalogModifier](#type-catalogmodifier) is enabled by default. */
		modifier_overrides?: Array<CatalogModifierOverride>;
	}

	/** Controls the properties of a [CatalogModifierList](#type-catalogmodifierlist) as it applies to this [CatalogItem](#type-catalogitem). */
	export interface CatalogItemModifierListInfoFormProperties {

		/** If `true`, enable this [CatalogModifierList](#type-catalogmodifierlist). */
		enabled: FormControl<boolean | null | undefined>,

		/** If zero or larger, the largest number of [CatalogModifier](#type-catalogmodifier)s that can be selected from this [CatalogModifierList](#type-catalogmodifierlist). */
		max_selected_modifiers: FormControl<number | null | undefined>,

		/** If zero or larger, the smallest number of [CatalogModifier](#type-catalogmodifier)s that must be selected from this [CatalogModifierList](#type-catalogmodifierlist). */
		min_selected_modifiers: FormControl<number | null | undefined>,

		/**
		 * The ID of the [CatalogModifierList](#type-catalogmodifierlist) controlled by this [CatalogModifierListInfo](#type-catalogmodifierlistinfo).
		 * Required
		 * Min length: 1
		 */
		modifier_list_id: FormControl<string | null | undefined>,
	}
	export function CreateCatalogItemModifierListInfoFormGroup() {
		return new FormGroup<CatalogItemModifierListInfoFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			max_selected_modifiers: new FormControl<number | null | undefined>(undefined),
			min_selected_modifiers: new FormControl<number | null | undefined>(undefined),
			modifier_list_id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface CatalogModifierOverride {

		/**
		 * The ID of the [CatalogModifier](#type-catalogmodifier) whose default behavior is being overridden.
		 * Required
		 * Min length: 1
		 */
		modifier_id: string;

		/** If `true`, this [CatalogModifier](#type-catalogmodifier) should be selected by default for this [CatalogItem](#type-catalogitem). */
		on_by_default?: boolean | null;
	}
	export interface CatalogModifierOverrideFormProperties {

		/**
		 * The ID of the [CatalogModifier](#type-catalogmodifier) whose default behavior is being overridden.
		 * Required
		 * Min length: 1
		 */
		modifier_id: FormControl<string | null | undefined>,

		/** If `true`, this [CatalogModifier](#type-catalogmodifier) should be selected by default for this [CatalogItem](#type-catalogitem). */
		on_by_default: FormControl<boolean | null | undefined>,
	}
	export function CreateCatalogModifierOverrideFormGroup() {
		return new FormGroup<CatalogModifierOverrideFormProperties>({
			modifier_id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			on_by_default: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum CatalogItemProduct_type { REGULAR = 0, GIFT_CARD = 1, APPOINTMENTS_SERVICE = 2, RETAIL_ITEM = 3, RESTAURANT_ITEM = 4 }


	/** An item variation (i.e., product) in the Catalog object model. */
	export interface CatalogItemVariation {

		/**
		 * If the inventory quantity for the variation is less than or equal to this value and `inventory_alert_type`
		 * is `LOW_QUANTITY`, the variation displays an alert in the merchant dashboard.
		 * This value is always an integer.
		 */
		inventory_alert_threshold?: number | null;

		/**
		 * Indicates whether the item variation displays an alert when its inventory quantity is less than or equal
		 * to its `inventory_alert_threshold`. See [InventoryAlertType](#type-inventoryalerttype) for all possible values.
		 */
		inventory_alert_type?: CatalogItemVariationInventory_alert_type | null;

		/** The ID of the [CatalogItem](#type-catalogitem) associated with this item variation. Searchable. */
		item_id?: string | null;

		/** Per-[location][#type-location] price and inventory overrides. */
		location_overrides?: Array<ItemVariationLocationOverrides>;

		/** The item variation's name. Searchable. */
		name?: string | null;

		/**
		 * Represents an amount of money.
		 * __Important:__ Unlike version 1 of the Connect API, __all monetary amounts
		 * returned by v2 endpoints are positive.__ (In v1, monetary amounts are negative
		 * if they represent money being paid _by_ a merchant, instead of money being
		 * paid _to_ a merchant.)
		 */
		price_money?: Money;

		/**
		 * Indicates whether the item variation's price is fixed or determined at the time
		 * of sale. See [CatalogPricingType](#type-catalogpricingtype) for all possible values.
		 */
		pricing_type?: ItemVariationLocationOverridesPricing_type | null;

		/**
		 * If the [CatalogItem](#type-catalogitem) that owns this item variation is of type
		 * `APPOINTMENTS_SERVICE`, then this is the duration of the service in milliseconds. For
		 * example, a 30 minute appointment would have the value `1800000`, which is equal to
		 * 30 (minutes) * 60 (seconds per minute) * 1000 (milliseconds per second).
		 */
		service_duration?: number | null;

		/** The item variation's SKU, if any. Searchable. */
		sku?: string | null;

		/** If `true`, inventory tracking is active for the variation. */
		track_inventory?: boolean | null;

		/** The item variation's UPC, if any. Searchable. */
		upc?: string | null;

		/** Arbitrary user metadata to associate with the item variation. Cannot exceed 255 characters. Searchable. */
		user_data?: string | null;
	}

	/** An item variation (i.e., product) in the Catalog object model. */
	export interface CatalogItemVariationFormProperties {

		/**
		 * If the inventory quantity for the variation is less than or equal to this value and `inventory_alert_type`
		 * is `LOW_QUANTITY`, the variation displays an alert in the merchant dashboard.
		 * This value is always an integer.
		 */
		inventory_alert_threshold: FormControl<number | null | undefined>,

		/**
		 * Indicates whether the item variation displays an alert when its inventory quantity is less than or equal
		 * to its `inventory_alert_threshold`. See [InventoryAlertType](#type-inventoryalerttype) for all possible values.
		 */
		inventory_alert_type: FormControl<CatalogItemVariationInventory_alert_type | null | undefined>,

		/** The ID of the [CatalogItem](#type-catalogitem) associated with this item variation. Searchable. */
		item_id: FormControl<string | null | undefined>,

		/** The item variation's name. Searchable. */
		name: FormControl<string | null | undefined>,

		/**
		 * Indicates whether the item variation's price is fixed or determined at the time
		 * of sale. See [CatalogPricingType](#type-catalogpricingtype) for all possible values.
		 */
		pricing_type: FormControl<ItemVariationLocationOverridesPricing_type | null | undefined>,

		/**
		 * If the [CatalogItem](#type-catalogitem) that owns this item variation is of type
		 * `APPOINTMENTS_SERVICE`, then this is the duration of the service in milliseconds. For
		 * example, a 30 minute appointment would have the value `1800000`, which is equal to
		 * 30 (minutes) * 60 (seconds per minute) * 1000 (milliseconds per second).
		 */
		service_duration: FormControl<number | null | undefined>,

		/** The item variation's SKU, if any. Searchable. */
		sku: FormControl<string | null | undefined>,

		/** If `true`, inventory tracking is active for the variation. */
		track_inventory: FormControl<boolean | null | undefined>,

		/** The item variation's UPC, if any. Searchable. */
		upc: FormControl<string | null | undefined>,

		/** Arbitrary user metadata to associate with the item variation. Cannot exceed 255 characters. Searchable. */
		user_data: FormControl<string | null | undefined>,
	}
	export function CreateCatalogItemVariationFormGroup() {
		return new FormGroup<CatalogItemVariationFormProperties>({
			inventory_alert_threshold: new FormControl<number | null | undefined>(undefined),
			inventory_alert_type: new FormControl<CatalogItemVariationInventory_alert_type | null | undefined>(undefined),
			item_id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			pricing_type: new FormControl<ItemVariationLocationOverridesPricing_type | null | undefined>(undefined),
			service_duration: new FormControl<number | null | undefined>(undefined),
			sku: new FormControl<string | null | undefined>(undefined),
			track_inventory: new FormControl<boolean | null | undefined>(undefined),
			upc: new FormControl<string | null | undefined>(undefined),
			user_data: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CatalogItemVariationInventory_alert_type { NONE = 0, LOW_QUANTITY = 1 }


	/** Price and inventory alerting overrides for a [CatalogItemVariation](#type-catalogitemvariation) at a specific [location][#type-location]. */
	export interface ItemVariationLocationOverrides {

		/**
		 * If the inventory quantity for the variation is less than or equal to this value and `inventory_alert_type`
		 * is `LOW_QUANTITY`, the variation displays an alert in the merchant dashboard.
		 * This value is always an integer.
		 */
		inventory_alert_threshold?: number | null;

		/**
		 * Indicates whether the [CatalogItemVariation](#type-catalogitemvariation) displays an alert when its inventory
		 * quantity is less than or equal to its `inventory_alert_threshold`. See [InventoryAlertType](#type-inventoryalerttype)
		 * for all possible values.
		 */
		inventory_alert_type?: CatalogItemVariationInventory_alert_type | null;

		/** The ID of the [location][#type-location]. */
		location_id?: string | null;

		/**
		 * Represents an amount of money.
		 * __Important:__ Unlike version 1 of the Connect API, __all monetary amounts
		 * returned by v2 endpoints are positive.__ (In v1, monetary amounts are negative
		 * if they represent money being paid _by_ a merchant, instead of money being
		 * paid _to_ a merchant.)
		 */
		price_money?: Money;

		/**
		 * The pricing type (fixed or variable) for the [CatalogItemVariation](#type-catalogitemvariation) at the given [location][#type-location].
		 * See [CatalogPricingType](#type-catalogpricingtype) for all possible values.
		 */
		pricing_type?: ItemVariationLocationOverridesPricing_type | null;

		/** If `true`, inventory tracking is active for the [CatalogItemVariation](#type-catalogitemvariation) at this [location][#type-location]. */
		track_inventory?: boolean | null;
	}

	/** Price and inventory alerting overrides for a [CatalogItemVariation](#type-catalogitemvariation) at a specific [location][#type-location]. */
	export interface ItemVariationLocationOverridesFormProperties {

		/**
		 * If the inventory quantity for the variation is less than or equal to this value and `inventory_alert_type`
		 * is `LOW_QUANTITY`, the variation displays an alert in the merchant dashboard.
		 * This value is always an integer.
		 */
		inventory_alert_threshold: FormControl<number | null | undefined>,

		/**
		 * Indicates whether the [CatalogItemVariation](#type-catalogitemvariation) displays an alert when its inventory
		 * quantity is less than or equal to its `inventory_alert_threshold`. See [InventoryAlertType](#type-inventoryalerttype)
		 * for all possible values.
		 */
		inventory_alert_type: FormControl<CatalogItemVariationInventory_alert_type | null | undefined>,

		/** The ID of the [location][#type-location]. */
		location_id: FormControl<string | null | undefined>,

		/**
		 * The pricing type (fixed or variable) for the [CatalogItemVariation](#type-catalogitemvariation) at the given [location][#type-location].
		 * See [CatalogPricingType](#type-catalogpricingtype) for all possible values.
		 */
		pricing_type: FormControl<ItemVariationLocationOverridesPricing_type | null | undefined>,

		/** If `true`, inventory tracking is active for the [CatalogItemVariation](#type-catalogitemvariation) at this [location][#type-location]. */
		track_inventory: FormControl<boolean | null | undefined>,
	}
	export function CreateItemVariationLocationOverridesFormGroup() {
		return new FormGroup<ItemVariationLocationOverridesFormProperties>({
			inventory_alert_threshold: new FormControl<number | null | undefined>(undefined),
			inventory_alert_type: new FormControl<CatalogItemVariationInventory_alert_type | null | undefined>(undefined),
			location_id: new FormControl<string | null | undefined>(undefined),
			pricing_type: new FormControl<ItemVariationLocationOverridesPricing_type | null | undefined>(undefined),
			track_inventory: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ItemVariationLocationOverridesPricing_type { FIXED_PRICING = 0, VARIABLE_PRICING = 1 }


	/** A modifier in the Catalog object model. */
	export interface CatalogModifier {

		/**
		 * The modifier's name. Searchable.
		 * Required
		 * Min length: 1
		 */
		name: string;

		/**
		 * Represents an amount of money.
		 * __Important:__ Unlike version 1 of the Connect API, __all monetary amounts
		 * returned by v2 endpoints are positive.__ (In v1, monetary amounts are negative
		 * if they represent money being paid _by_ a merchant, instead of money being
		 * paid _to_ a merchant.)
		 */
		price_money?: Money;
	}

	/** A modifier in the Catalog object model. */
	export interface CatalogModifierFormProperties {

		/**
		 * The modifier's name. Searchable.
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCatalogModifierFormGroup() {
		return new FormGroup<CatalogModifierFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}


	/**
	 * A modifier list in the Catalog object model. A [CatalogModifierList](#type-catalogmodifierlist)
	 * contains [Modifier](#type-catalogmodifier)s that can be applied to a [CatalogItem](#type-catalogitem)
	 * at the time of sale.
	 * For example, a modifier list "Condiments" that would apply to a "Hot Dog" [CatalogItem](#type-catalogitem) might
	 * contain [CatalogModifier](#type-catalogmodifier)s "Ketchup", "Mustard", and "Relish". The
	 * `selection_type` field specifies whether or not multiple selections from the modifier list are allowed.
	 */
	export interface CatalogModifierList {

		/**
		 * The options included in the [CatalogModifierList](#type-catalogmodifierlist).
		 * You must include at least one [CatalogModifier](#type-catalogmodifier).
		 * Each [CatalogObject](#type-catalogobject) must have type `MODIFIER` and contain
		 * [CatalogModifier](#type-catalogmodifier) data.
		 */
		modifiers?: Array<CatalogObject>;

		/**
		 * The [CatalogModifierList](#type-catalogmodifierlist)'s name. Searchable.
		 * Required
		 * Min length: 1
		 */
		name: string;

		/**
		 * Indicates whether multiple options from the [CatalogModifierList](#type-catalogmodifierlist)
		 * can be applied to a single [CatalogItem](#type-catalogitem). See
		 * [CatalogModifierListSelectionType](#type-catalogmodifierlistselectiontype) for all possible values.
		 */
		selection_type?: CatalogModifierListSelection_type | null;
	}

	/**
	 * A modifier list in the Catalog object model. A [CatalogModifierList](#type-catalogmodifierlist)
	 * contains [Modifier](#type-catalogmodifier)s that can be applied to a [CatalogItem](#type-catalogitem)
	 * at the time of sale.
	 * For example, a modifier list "Condiments" that would apply to a "Hot Dog" [CatalogItem](#type-catalogitem) might
	 * contain [CatalogModifier](#type-catalogmodifier)s "Ketchup", "Mustard", and "Relish". The
	 * `selection_type` field specifies whether or not multiple selections from the modifier list are allowed.
	 */
	export interface CatalogModifierListFormProperties {

		/**
		 * The [CatalogModifierList](#type-catalogmodifierlist)'s name. Searchable.
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Indicates whether multiple options from the [CatalogModifierList](#type-catalogmodifierlist)
		 * can be applied to a single [CatalogItem](#type-catalogitem). See
		 * [CatalogModifierListSelectionType](#type-catalogmodifierlistselectiontype) for all possible values.
		 */
		selection_type: FormControl<CatalogModifierListSelection_type | null | undefined>,
	}
	export function CreateCatalogModifierListFormGroup() {
		return new FormGroup<CatalogModifierListFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			selection_type: new FormControl<CatalogModifierListSelection_type | null | undefined>(undefined),
		});

	}

	export enum CatalogModifierListSelection_type { SINGLE = 0, MULTIPLE = 1 }


	/** A tax in the Catalog object model. */
	export interface CatalogTax {

		/**
		 * If `true`, the fee applies to custom amounts entered into the Square Point of Sale
		 * app that are not associated with a particular [CatalogItem](#type-catalogitem).
		 */
		applies_to_custom_amounts?: boolean | null;

		/** Whether the tax is calculated based on a payment's subtotal or total. See [TaxCalculationPhase](#type-taxcalculationphase) for all possible values. */
		calculation_phase?: CatalogTaxCalculation_phase | null;

		/** If `true`, the tax will be shown as enabled in the Square Point of Sale app. */
		enabled?: boolean | null;

		/** Whether the tax is `ADDITIVE` or `INCLUSIVE`. See [TaxInclusionType](#type-taxinclusiontype) for all possible values. */
		inclusion_type?: CatalogTaxInclusion_type | null;

		/**
		 * The tax's name. Searchable.
		 * Required
		 * Min length: 1
		 */
		name: string;

		/**
		 * The percentage of the tax in decimal form, using a `'.'` as the decimal separator and without a `'%'` sign.
		 * A value of `7.5` corresponds to 7.5%.
		 */
		percentage?: string | null;
	}

	/** A tax in the Catalog object model. */
	export interface CatalogTaxFormProperties {

		/**
		 * If `true`, the fee applies to custom amounts entered into the Square Point of Sale
		 * app that are not associated with a particular [CatalogItem](#type-catalogitem).
		 */
		applies_to_custom_amounts: FormControl<boolean | null | undefined>,

		/** Whether the tax is calculated based on a payment's subtotal or total. See [TaxCalculationPhase](#type-taxcalculationphase) for all possible values. */
		calculation_phase: FormControl<CatalogTaxCalculation_phase | null | undefined>,

		/** If `true`, the tax will be shown as enabled in the Square Point of Sale app. */
		enabled: FormControl<boolean | null | undefined>,

		/** Whether the tax is `ADDITIVE` or `INCLUSIVE`. See [TaxInclusionType](#type-taxinclusiontype) for all possible values. */
		inclusion_type: FormControl<CatalogTaxInclusion_type | null | undefined>,

		/**
		 * The tax's name. Searchable.
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The percentage of the tax in decimal form, using a `'.'` as the decimal separator and without a `'%'` sign.
		 * A value of `7.5` corresponds to 7.5%.
		 */
		percentage: FormControl<string | null | undefined>,
	}
	export function CreateCatalogTaxFormGroup() {
		return new FormGroup<CatalogTaxFormProperties>({
			applies_to_custom_amounts: new FormControl<boolean | null | undefined>(undefined),
			calculation_phase: new FormControl<CatalogTaxCalculation_phase | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			inclusion_type: new FormControl<CatalogTaxInclusion_type | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			percentage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CatalogTaxCalculation_phase { TAX_SUBTOTAL_PHASE = 0, TAX_TOTAL_PHASE = 1 }

	export enum CatalogTaxInclusion_type { ADDITIVE = 0, INCLUSIVE = 1 }

	export enum CatalogObjectType { ITEM = 0, CATEGORY = 1, ITEM_VARIATION = 2, TAX = 3, DISCOUNT = 4, MODIFIER_LIST = 5, MODIFIER = 6 }

	export interface BatchUpsertCatalogObjectsRequest {

		/**
		 * A batch of [CatalogObject](#type-catalogobject)s to be inserted/updated atomically.
		 * The objects within a batch will be inserted in an all-or-nothing fashion, i.e., if an error occurs
		 * attempting to insert or update an object within a batch, the entire batch will be rejected. However, an error
		 * in one batch will not affect other batches within the same request.
		 * For each object, its `updated_at` field is ignored and replaced with a current [timestamp](#workingwithdates), and its
		 * `is_deleted` field must not be set to `true`.
		 * To modify an existing object, supply its ID. To create a new object, use an ID starting
		 * with `#`. These IDs may be used to create relationships between an object and attributes of
		 * other objects that reference it. For example, you can create a [CatalogItem](#type-catalogitem) with
		 * ID `#ABC` and a [CatalogItemVariation](#type-catalogitemvariation) with its `item_id` attribute set to
		 * `#ABC` in order to associate the [CatalogItemVariation](#type-catalogitemvariation) with its parent
		 * [CatalogItem](#type-catalogitem).
		 * Any `#`-prefixed IDs are valid only within a single atomic batch, and will be replaced by server-generated IDs.
		 * Each batch may contain up to 1,000 objects. The total number of objects across all batches for a single request
		 * may not exceed 10,000. If either of these limits is violated, an error will be returned and no objects will
		 * be inserted or updated.
		 */
		batches?: Array<CatalogObjectBatch>;

		/**
		 * A value you specify that uniquely identifies this
		 * request among all your requests. A common way to create
		 * a valid idempotency key is to use a Universally unique
		 * identifier (UUID).
		 * If you're unsure whether a particular request was successful,
		 * you can reattempt it with the same idempotency key without
		 * worrying about creating duplicate objects.
		 * See [Idempotency keys](#idempotencykeys) for more information.
		 * Required
		 * Min length: 1
		 */
		idempotency_key: string;
	}
	export interface BatchUpsertCatalogObjectsRequestFormProperties {

		/**
		 * A value you specify that uniquely identifies this
		 * request among all your requests. A common way to create
		 * a valid idempotency key is to use a Universally unique
		 * identifier (UUID).
		 * If you're unsure whether a particular request was successful,
		 * you can reattempt it with the same idempotency key without
		 * worrying about creating duplicate objects.
		 * See [Idempotency keys](#idempotencykeys) for more information.
		 * Required
		 * Min length: 1
		 */
		idempotency_key: FormControl<string | null | undefined>,
	}
	export function CreateBatchUpsertCatalogObjectsRequestFormGroup() {
		return new FormGroup<BatchUpsertCatalogObjectsRequestFormProperties>({
			idempotency_key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}


	/** A batch of [CatalogObject](#type-catalogobject)s. */
	export interface CatalogObjectBatch {

		/** A list of [CatalogObject](#type-catalogobject)s belonging to this batch. */
		objects?: Array<CatalogObject>;
	}

	/** A batch of [CatalogObject](#type-catalogobject)s. */
	export interface CatalogObjectBatchFormProperties {
	}
	export function CreateCatalogObjectBatchFormGroup() {
		return new FormGroup<CatalogObjectBatchFormProperties>({
		});

	}

	export interface BatchUpsertCatalogObjectsResponse {

		/** The set of [Error](#type-error)s encountered. */
		errors?: Array<Error>;

		/** The mapping between client and server IDs for this Upsert. */
		id_mappings?: Array<CatalogIdMapping>;

		/** The created [CatalogObject](#type-catalogobject)s */
		objects?: Array<CatalogObject>;

		/** The database [timestamp](#workingwithdates) of this update in RFC 3339 format, e.g., "2016-09-04T23:59:33.123Z". */
		updated_at?: string | null;
	}
	export interface BatchUpsertCatalogObjectsResponseFormProperties {

		/** The database [timestamp](#workingwithdates) of this update in RFC 3339 format, e.g., "2016-09-04T23:59:33.123Z". */
		updated_at: FormControl<string | null | undefined>,
	}
	export function CreateBatchUpsertCatalogObjectsResponseFormGroup() {
		return new FormGroup<BatchUpsertCatalogObjectsResponseFormProperties>({
			updated_at: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A mapping between a client-supplied temporary ID and a permanent server ID. */
	export interface CatalogIdMapping {

		/** The client-supplied, temporary `#`-prefixed ID for a new [CatalogObject](#type-catalogobject). */
		client_object_id?: string | null;

		/** The permanent ID for the [CatalogObject](#type-catalogobject) created by the server. */
		object_id?: string | null;
	}

	/** A mapping between a client-supplied temporary ID and a permanent server ID. */
	export interface CatalogIdMappingFormProperties {

		/** The client-supplied, temporary `#`-prefixed ID for a new [CatalogObject](#type-catalogobject). */
		client_object_id: FormControl<string | null | undefined>,

		/** The permanent ID for the [CatalogObject](#type-catalogobject) created by the server. */
		object_id: FormControl<string | null | undefined>,
	}
	export function CreateCatalogIdMappingFormGroup() {
		return new FormGroup<CatalogIdMappingFormProperties>({
			client_object_id: new FormControl<string | null | undefined>(undefined),
			object_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CaptureTransactionRequest {
	}
	export interface CaptureTransactionRequestFormProperties {
	}
	export function CreateCaptureTransactionRequestFormGroup() {
		return new FormGroup<CaptureTransactionRequestFormProperties>({
		});

	}


	/**
	 * Defines the fields that are included in the response body of
	 * a request to the [CaptureTransaction](#endpoint-capturetransaction) endpoint.
	 */
	export interface CaptureTransactionResponse {

		/** Any errors that occurred during the request. */
		errors?: Array<Error>;
	}

	/**
	 * Defines the fields that are included in the response body of
	 * a request to the [CaptureTransaction](#endpoint-capturetransaction) endpoint.
	 */
	export interface CaptureTransactionResponseFormProperties {
	}
	export function CreateCaptureTransactionResponseFormGroup() {
		return new FormGroup<CaptureTransactionResponseFormProperties>({
		});

	}


	/** Represents the non-confidential details of a credit card. */
	export interface Card {

		/** Represents a physical address. */
		billing_address?: Address;

		/**
		 * The card's brand (such as `VISA`). See [CardBrand](#type-cardbrand)
		 * for all possible values.
		 */
		card_brand?: CardCard_brand | null;

		/**
		 * The cardholder name. This value is present only if this object
		 * represents a customer's card on file.
		 */
		cardholder_name?: string | null;

		/**
		 * The month of the card's expiration date. This value is always between
		 * `1` and `12`, inclusive.
		 */
		exp_month?: number | null;

		/** The four-digit year of the card's expiration date. */
		exp_year?: number | null;

		/**
		 * The unique string fingerprint for the card.
		 * The fingerprint is based on the credit card number and is unique to the merchant.
		 * If a card is used at multiple locations for the same merchant, it will have the same fingerprint in each case.
		 * Note: Fingerprint may not exist on old transactions.
		 */
		fingerprint?: string | null;

		/** The card's unique ID, if any. */
		id?: string | null;

		/** The last 4 digits of the card's number. */
		last_4?: string | null;
	}

	/** Represents the non-confidential details of a credit card. */
	export interface CardFormProperties {

		/**
		 * The card's brand (such as `VISA`). See [CardBrand](#type-cardbrand)
		 * for all possible values.
		 */
		card_brand: FormControl<CardCard_brand | null | undefined>,

		/**
		 * The cardholder name. This value is present only if this object
		 * represents a customer's card on file.
		 */
		cardholder_name: FormControl<string | null | undefined>,

		/**
		 * The month of the card's expiration date. This value is always between
		 * `1` and `12`, inclusive.
		 */
		exp_month: FormControl<number | null | undefined>,

		/** The four-digit year of the card's expiration date. */
		exp_year: FormControl<number | null | undefined>,

		/**
		 * The unique string fingerprint for the card.
		 * The fingerprint is based on the credit card number and is unique to the merchant.
		 * If a card is used at multiple locations for the same merchant, it will have the same fingerprint in each case.
		 * Note: Fingerprint may not exist on old transactions.
		 */
		fingerprint: FormControl<string | null | undefined>,

		/** The card's unique ID, if any. */
		id: FormControl<string | null | undefined>,

		/** The last 4 digits of the card's number. */
		last_4: FormControl<string | null | undefined>,
	}
	export function CreateCardFormGroup() {
		return new FormGroup<CardFormProperties>({
			card_brand: new FormControl<CardCard_brand | null | undefined>(undefined),
			cardholder_name: new FormControl<string | null | undefined>(undefined),
			exp_month: new FormControl<number | null | undefined>(undefined),
			exp_year: new FormControl<number | null | undefined>(undefined),
			fingerprint: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			last_4: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CardCard_brand { OTHER_BRAND = 0, VISA = 1, MASTERCARD = 2, AMERICAN_EXPRESS = 3, DISCOVER = 4, DISCOVER_DINERS = 5, JCB = 6, CHINA_UNIONPAY = 7, SQUARE_GIFT_CARD = 8 }


	/** Indicates a credit card's brand, such as `VISA`. */
	export enum CardBrand { OTHER_BRAND = 0, VISA = 1, MASTERCARD = 2, AMERICAN_EXPRESS = 3, DISCOVER = 4, DISCOVER_DINERS = 5, JCB = 6, CHINA_UNIONPAY = 7, SQUARE_GIFT_CARD = 8 }


	/** How to apply a [CatalogDiscount](#type-catalogdiscount) to a [CatalogItem](#type-catalogitem). */
	export enum CatalogDiscountType { FIXED_PERCENTAGE = 0, FIXED_AMOUNT = 1, VARIABLE_PERCENTAGE = 2, VARIABLE_AMOUNT = 3 }

	export interface CatalogInfoRequest {
	}
	export interface CatalogInfoRequestFormProperties {
	}
	export function CreateCatalogInfoRequestFormGroup() {
		return new FormGroup<CatalogInfoRequestFormProperties>({
		});

	}

	export interface CatalogInfoResponse {

		/** The set of [Error](#type-error)s encountered. */
		errors?: Array<Error>;
		limits?: CatalogInfoResponseLimits;
	}
	export interface CatalogInfoResponseFormProperties {
	}
	export function CreateCatalogInfoResponseFormGroup() {
		return new FormGroup<CatalogInfoResponseFormProperties>({
		});

	}

	export interface CatalogInfoResponseLimits {

		/**
		 * The maximum number of object IDs that may be included in a single
		 * `/v2/catalog/batch-delete` request.
		 */
		batch_delete_max_object_ids?: number | null;

		/**
		 * The maximum number of object IDs that may appear in a `/v2/catalog/batch-retrieve`
		 * request.
		 */
		batch_retrieve_max_object_ids?: number | null;

		/**
		 * The maximum number of objects that may appear within a single batch in a
		 * `/v2/catalog/batch-upsert` request.
		 */
		batch_upsert_max_objects_per_batch?: number | null;

		/**
		 * The maximum number of objects that may appear across all batches in a
		 * `/v2/catalog/batch-upsert` request.
		 */
		batch_upsert_max_total_objects?: number | null;

		/**
		 * The maximum number of results that may be returned in a page of a
		 * `/v2/catalog/search` response.
		 */
		search_max_page_limit?: number | null;

		/**
		 * The maximum number of item IDs that may be included in a single
		 * `/v2/catalog/update-item-modifier-lists` request.
		 */
		update_item_modifier_lists_max_item_ids?: number | null;

		/**
		 * The maximum number of modifier list IDs to be disabled that may be included in
		 * a single `/v2/catalog/update-item-modifier-lists` request.
		 */
		update_item_modifier_lists_max_modifier_lists_to_disable?: number | null;

		/**
		 * The maximum number of modifier list IDs to be enabled that may be included in
		 * a single `/v2/catalog/update-item-modifier-lists` request.
		 */
		update_item_modifier_lists_max_modifier_lists_to_enable?: number | null;

		/**
		 * The maximum number of item IDs that may be included in a single
		 * `/v2/catalog/update-item-taxes` request.
		 */
		update_item_taxes_max_item_ids?: number | null;

		/**
		 * The maximum number of tax IDs to be disabled that may be included in a single
		 * `/v2/catalog/update-item-taxes` request.
		 */
		update_item_taxes_max_taxes_to_disable?: number | null;

		/**
		 * The maximum number of tax IDs to be enabled that may be included in a single
		 * `/v2/catalog/update-item-taxes` request.
		 */
		update_item_taxes_max_taxes_to_enable?: number | null;
	}
	export interface CatalogInfoResponseLimitsFormProperties {

		/**
		 * The maximum number of object IDs that may be included in a single
		 * `/v2/catalog/batch-delete` request.
		 */
		batch_delete_max_object_ids: FormControl<number | null | undefined>,

		/**
		 * The maximum number of object IDs that may appear in a `/v2/catalog/batch-retrieve`
		 * request.
		 */
		batch_retrieve_max_object_ids: FormControl<number | null | undefined>,

		/**
		 * The maximum number of objects that may appear within a single batch in a
		 * `/v2/catalog/batch-upsert` request.
		 */
		batch_upsert_max_objects_per_batch: FormControl<number | null | undefined>,

		/**
		 * The maximum number of objects that may appear across all batches in a
		 * `/v2/catalog/batch-upsert` request.
		 */
		batch_upsert_max_total_objects: FormControl<number | null | undefined>,

		/**
		 * The maximum number of results that may be returned in a page of a
		 * `/v2/catalog/search` response.
		 */
		search_max_page_limit: FormControl<number | null | undefined>,

		/**
		 * The maximum number of item IDs that may be included in a single
		 * `/v2/catalog/update-item-modifier-lists` request.
		 */
		update_item_modifier_lists_max_item_ids: FormControl<number | null | undefined>,

		/**
		 * The maximum number of modifier list IDs to be disabled that may be included in
		 * a single `/v2/catalog/update-item-modifier-lists` request.
		 */
		update_item_modifier_lists_max_modifier_lists_to_disable: FormControl<number | null | undefined>,

		/**
		 * The maximum number of modifier list IDs to be enabled that may be included in
		 * a single `/v2/catalog/update-item-modifier-lists` request.
		 */
		update_item_modifier_lists_max_modifier_lists_to_enable: FormControl<number | null | undefined>,

		/**
		 * The maximum number of item IDs that may be included in a single
		 * `/v2/catalog/update-item-taxes` request.
		 */
		update_item_taxes_max_item_ids: FormControl<number | null | undefined>,

		/**
		 * The maximum number of tax IDs to be disabled that may be included in a single
		 * `/v2/catalog/update-item-taxes` request.
		 */
		update_item_taxes_max_taxes_to_disable: FormControl<number | null | undefined>,

		/**
		 * The maximum number of tax IDs to be enabled that may be included in a single
		 * `/v2/catalog/update-item-taxes` request.
		 */
		update_item_taxes_max_taxes_to_enable: FormControl<number | null | undefined>,
	}
	export function CreateCatalogInfoResponseLimitsFormGroup() {
		return new FormGroup<CatalogInfoResponseLimitsFormProperties>({
			batch_delete_max_object_ids: new FormControl<number | null | undefined>(undefined),
			batch_retrieve_max_object_ids: new FormControl<number | null | undefined>(undefined),
			batch_upsert_max_objects_per_batch: new FormControl<number | null | undefined>(undefined),
			batch_upsert_max_total_objects: new FormControl<number | null | undefined>(undefined),
			search_max_page_limit: new FormControl<number | null | undefined>(undefined),
			update_item_modifier_lists_max_item_ids: new FormControl<number | null | undefined>(undefined),
			update_item_modifier_lists_max_modifier_lists_to_disable: new FormControl<number | null | undefined>(undefined),
			update_item_modifier_lists_max_modifier_lists_to_enable: new FormControl<number | null | undefined>(undefined),
			update_item_taxes_max_item_ids: new FormControl<number | null | undefined>(undefined),
			update_item_taxes_max_taxes_to_disable: new FormControl<number | null | undefined>(undefined),
			update_item_taxes_max_taxes_to_enable: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The type of a [CatalogItem](#type-catalogitem). Connect V2 only allows the creation of `REGULAR` items. */
	export enum CatalogItemProductType { REGULAR = 0, GIFT_CARD = 1, APPOINTMENTS_SERVICE = 2, RETAIL_ITEM = 3, RESTAURANT_ITEM = 4 }


	/** Indicates whether a [CatalogModifierList](#type-catalogmodifierlist) supports multiple selections. */
	export enum CatalogModifierListSelectionType { SINGLE = 0, MULTIPLE = 1 }


	/** Indicates whether the price of a [CatalogItemVariation](#type-catalogitemvariation) should be entered manually at the time of sale. */
	export enum CatalogPricingType { FIXED_PRICING = 0, VARIABLE_PRICING = 1 }


	/**
	 * A query to be applied to a [SearchCatalogObjectsRequest](#type-searchcatalogobjectsrequest).
	 * Only one query field may be present.
	 * Where an attribute name is required, it should be specified as the name of any field
	 * marked "searchable" from the structured data types for the desired result object type(s)
	 * ([CatalogItem](#type-catalogitem), [CatalogItemVariation](#type-catalogitemvariation),
	 * [CatalogCategory](#type-catalogcategory), [CatalogTax](#type-catalogtax),
	 * [CatalogDiscount](#type-catalogdiscount), [CatalogModifierList](#type-catalogmodifierlist),
	 * [CatalogModifier](#type-catalogmodifier)).
	 * For example, a query that should return Items may specify attribute names from
	 * any of the searchable fields of the [CatalogItem](#type-catalogitem) data type, namely
	 * `"name"`, `"description"`, and `"abbreviation"`.
	 */
	export interface CatalogQuery {
		exact_query?: CatalogQueryExact;
		items_for_modifier_list_query?: CatalogQueryItemsForModifierList;
		items_for_tax_query?: CatalogQueryItemsForTax;
		prefix_query?: CatalogQueryPrefix;
		range_query?: CatalogQueryRange;
		sorted_attribute_query?: CatalogQuerySortedAttribute;
		text_query?: CatalogQueryText;
	}

	/**
	 * A query to be applied to a [SearchCatalogObjectsRequest](#type-searchcatalogobjectsrequest).
	 * Only one query field may be present.
	 * Where an attribute name is required, it should be specified as the name of any field
	 * marked "searchable" from the structured data types for the desired result object type(s)
	 * ([CatalogItem](#type-catalogitem), [CatalogItemVariation](#type-catalogitemvariation),
	 * [CatalogCategory](#type-catalogcategory), [CatalogTax](#type-catalogtax),
	 * [CatalogDiscount](#type-catalogdiscount), [CatalogModifierList](#type-catalogmodifierlist),
	 * [CatalogModifier](#type-catalogmodifier)).
	 * For example, a query that should return Items may specify attribute names from
	 * any of the searchable fields of the [CatalogItem](#type-catalogitem) data type, namely
	 * `"name"`, `"description"`, and `"abbreviation"`.
	 */
	export interface CatalogQueryFormProperties {
	}
	export function CreateCatalogQueryFormGroup() {
		return new FormGroup<CatalogQueryFormProperties>({
		});

	}

	export interface CatalogQueryExact {

		/**
		 * The name of the attribute to be searched.
		 * Required
		 * Min length: 1
		 */
		attribute_name: string;

		/**
		 * The desired value of the search attribute.
		 * Required
		 */
		attribute_value: string;
	}
	export interface CatalogQueryExactFormProperties {

		/**
		 * The name of the attribute to be searched.
		 * Required
		 * Min length: 1
		 */
		attribute_name: FormControl<string | null | undefined>,

		/**
		 * The desired value of the search attribute.
		 * Required
		 */
		attribute_value: FormControl<string | null | undefined>,
	}
	export function CreateCatalogQueryExactFormGroup() {
		return new FormGroup<CatalogQueryExactFormProperties>({
			attribute_name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			attribute_value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CatalogQueryItemsForModifierList {

		/**
		 * A set of [CatalogModifierList](#type-catalogmodifierlist) IDs to be used to find associated [CatalogItem](#type-catalogitem)s.
		 * Required
		 */
		modifier_list_ids: Array<string>;
	}
	export interface CatalogQueryItemsForModifierListFormProperties {
	}
	export function CreateCatalogQueryItemsForModifierListFormGroup() {
		return new FormGroup<CatalogQueryItemsForModifierListFormProperties>({
		});

	}

	export interface CatalogQueryItemsForTax {

		/**
		 * A set of [CatalogTax](#type-catalogtax) IDs to be used to find associated [CatalogItem](#type-catalogitem)s.
		 * Required
		 */
		tax_ids: Array<string>;
	}
	export interface CatalogQueryItemsForTaxFormProperties {
	}
	export function CreateCatalogQueryItemsForTaxFormGroup() {
		return new FormGroup<CatalogQueryItemsForTaxFormProperties>({
		});

	}

	export interface CatalogQueryPrefix {

		/**
		 * The name of the attribute to be searched.
		 * Required
		 * Min length: 1
		 */
		attribute_name: string;

		/**
		 * The desired prefix of the search attribute value.
		 * Required
		 * Min length: 1
		 */
		attribute_prefix: string;
	}
	export interface CatalogQueryPrefixFormProperties {

		/**
		 * The name of the attribute to be searched.
		 * Required
		 * Min length: 1
		 */
		attribute_name: FormControl<string | null | undefined>,

		/**
		 * The desired prefix of the search attribute value.
		 * Required
		 * Min length: 1
		 */
		attribute_prefix: FormControl<string | null | undefined>,
	}
	export function CreateCatalogQueryPrefixFormGroup() {
		return new FormGroup<CatalogQueryPrefixFormProperties>({
			attribute_name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			attribute_prefix: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface CatalogQueryRange {

		/** The desired maximum value for the search attribute (inclusive). */
		attribute_max_value?: number | null;

		/** The desired minimum value for the search attribute (inclusive). */
		attribute_min_value?: number | null;

		/**
		 * The name of the attribute to be searched.
		 * Required
		 * Min length: 1
		 */
		attribute_name: string;
	}
	export interface CatalogQueryRangeFormProperties {

		/** The desired maximum value for the search attribute (inclusive). */
		attribute_max_value: FormControl<number | null | undefined>,

		/** The desired minimum value for the search attribute (inclusive). */
		attribute_min_value: FormControl<number | null | undefined>,

		/**
		 * The name of the attribute to be searched.
		 * Required
		 * Min length: 1
		 */
		attribute_name: FormControl<string | null | undefined>,
	}
	export function CreateCatalogQueryRangeFormGroup() {
		return new FormGroup<CatalogQueryRangeFormProperties>({
			attribute_max_value: new FormControl<number | null | undefined>(undefined),
			attribute_min_value: new FormControl<number | null | undefined>(undefined),
			attribute_name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface CatalogQuerySortedAttribute {

		/**
		 * The attribute whose value should be used as the sort key.
		 * Required
		 * Min length: 1
		 */
		attribute_name: string;

		/**
		 * The first attribute value to be returned by the query. Ascending sorts will return only
		 * objects with this value or greater, while descending sorts will return only objects with this value
		 * or less. If unset, start at the beginning (for ascending sorts) or end (for descending sorts).
		 */
		initial_attribute_value?: string | null;

		/** The desired [SortOrder](#type-sortorder), `"ASC"` (ascending) or `"DESC"` (descending). */
		sort_order?: CatalogQuerySortedAttributeSort_order | null;
	}
	export interface CatalogQuerySortedAttributeFormProperties {

		/**
		 * The attribute whose value should be used as the sort key.
		 * Required
		 * Min length: 1
		 */
		attribute_name: FormControl<string | null | undefined>,

		/**
		 * The first attribute value to be returned by the query. Ascending sorts will return only
		 * objects with this value or greater, while descending sorts will return only objects with this value
		 * or less. If unset, start at the beginning (for ascending sorts) or end (for descending sorts).
		 */
		initial_attribute_value: FormControl<string | null | undefined>,

		/** The desired [SortOrder](#type-sortorder), `"ASC"` (ascending) or `"DESC"` (descending). */
		sort_order: FormControl<CatalogQuerySortedAttributeSort_order | null | undefined>,
	}
	export function CreateCatalogQuerySortedAttributeFormGroup() {
		return new FormGroup<CatalogQuerySortedAttributeFormProperties>({
			attribute_name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			initial_attribute_value: new FormControl<string | null | undefined>(undefined),
			sort_order: new FormControl<CatalogQuerySortedAttributeSort_order | null | undefined>(undefined),
		});

	}

	export enum CatalogQuerySortedAttributeSort_order { DESC = 0, ASC = 1 }

	export interface CatalogQueryText {

		/**
		 * A list of one, two, or three search keywords. Keywords with fewer than three characters
		 * are ignored.
		 * Required
		 */
		keywords: Array<string>;
	}
	export interface CatalogQueryTextFormProperties {
	}
	export function CreateCatalogQueryTextFormGroup() {
		return new FormGroup<CatalogQueryTextFormProperties>({
		});

	}


	/**
	 * Defines the parameters that can be included in the body of
	 * a request to the [Charge](#endpoint-charge) endpoint.
	 */
	export interface ChargeRequest {

		/**
		 * Represents an amount of money.
		 * __Important:__ Unlike version 1 of the Connect API, __all monetary amounts
		 * returned by v2 endpoints are positive.__ (In v1, monetary amounts are negative
		 * if they represent money being paid _by_ a merchant, instead of money being
		 * paid _to_ a merchant.)
		 * Required
		 */
		amount_money: Money;

		/** Represents a physical address. */
		billing_address?: Address;

		/**
		 * The buyer's email address, if available. This value is optional,
		 * but this transaction is ineligible for chargeback protection if it is not
		 * provided.
		 */
		buyer_email_address?: string | null;

		/**
		 * A nonce generated from the `SqPaymentForm` that represents the card
		 * to charge.
		 * The application that provides a nonce to this endpoint must be the
		 * _same application_ that generated the nonce with the `SqPaymentForm`.
		 * Otherwise, the nonce is invalid.
		 * Do not provide a value for this field if you provide a value for
		 * `customer_card_id`.
		 */
		card_nonce?: string | null;

		/**
		 * The ID of the customer card on file to charge. Do
		 * not provide a value for this field if you provide a value for `card_nonce`.
		 * If you provide this value, you _must_ also provide a value for
		 * `customer_id`.
		 */
		customer_card_id?: string | null;

		/**
		 * The ID of the customer to associate this transaction with. This field
		 * is required if you provide a value for `customer_card_id`, and optional
		 * otherwise.
		 */
		customer_id?: string | null;

		/**
		 * If `true`, the request will only perform an Auth on the provided
		 * card. You can then later perform either a Capture (with the
		 * [CaptureTransaction](#endpoint-capturetransaction) endpoint) or a Void
		 * (with the [VoidTransaction](#endpoint-voidtransaction) endpoint).
		 * Default value: `false`
		 */
		delay_capture?: boolean | null;

		/**
		 * A value you specify that uniquely identifies this
		 * transaction among transactions you've created.
		 * If you're unsure whether a particular transaction succeeded,
		 * you can reattempt it with the same idempotency key without
		 * worrying about double-charging the buyer.
		 * See [Idempotency keys](#idempotencykeys) for more information.
		 * Required
		 */
		idempotency_key: string;

		/**
		 * An optional note to associate with the transaction.
		 * This value cannot exceed 60 characters.
		 */
		note?: string | null;

		/**
		 * An optional ID you can associate with the transaction for your own
		 * purposes (such as to associate the transaction with an entity ID in your
		 * own database).
		 * This value cannot exceed 40 characters.
		 */
		reference_id?: string | null;

		/** Represents a physical address. */
		shipping_address?: Address;
	}

	/**
	 * Defines the parameters that can be included in the body of
	 * a request to the [Charge](#endpoint-charge) endpoint.
	 */
	export interface ChargeRequestFormProperties {

		/**
		 * The buyer's email address, if available. This value is optional,
		 * but this transaction is ineligible for chargeback protection if it is not
		 * provided.
		 */
		buyer_email_address: FormControl<string | null | undefined>,

		/**
		 * A nonce generated from the `SqPaymentForm` that represents the card
		 * to charge.
		 * The application that provides a nonce to this endpoint must be the
		 * _same application_ that generated the nonce with the `SqPaymentForm`.
		 * Otherwise, the nonce is invalid.
		 * Do not provide a value for this field if you provide a value for
		 * `customer_card_id`.
		 */
		card_nonce: FormControl<string | null | undefined>,

		/**
		 * The ID of the customer card on file to charge. Do
		 * not provide a value for this field if you provide a value for `card_nonce`.
		 * If you provide this value, you _must_ also provide a value for
		 * `customer_id`.
		 */
		customer_card_id: FormControl<string | null | undefined>,

		/**
		 * The ID of the customer to associate this transaction with. This field
		 * is required if you provide a value for `customer_card_id`, and optional
		 * otherwise.
		 */
		customer_id: FormControl<string | null | undefined>,

		/**
		 * If `true`, the request will only perform an Auth on the provided
		 * card. You can then later perform either a Capture (with the
		 * [CaptureTransaction](#endpoint-capturetransaction) endpoint) or a Void
		 * (with the [VoidTransaction](#endpoint-voidtransaction) endpoint).
		 * Default value: `false`
		 */
		delay_capture: FormControl<boolean | null | undefined>,

		/**
		 * A value you specify that uniquely identifies this
		 * transaction among transactions you've created.
		 * If you're unsure whether a particular transaction succeeded,
		 * you can reattempt it with the same idempotency key without
		 * worrying about double-charging the buyer.
		 * See [Idempotency keys](#idempotencykeys) for more information.
		 * Required
		 */
		idempotency_key: FormControl<string | null | undefined>,

		/**
		 * An optional note to associate with the transaction.
		 * This value cannot exceed 60 characters.
		 */
		note: FormControl<string | null | undefined>,

		/**
		 * An optional ID you can associate with the transaction for your own
		 * purposes (such as to associate the transaction with an entity ID in your
		 * own database).
		 * This value cannot exceed 40 characters.
		 */
		reference_id: FormControl<string | null | undefined>,
	}
	export function CreateChargeRequestFormGroup() {
		return new FormGroup<ChargeRequestFormProperties>({
			buyer_email_address: new FormControl<string | null | undefined>(undefined),
			card_nonce: new FormControl<string | null | undefined>(undefined),
			customer_card_id: new FormControl<string | null | undefined>(undefined),
			customer_id: new FormControl<string | null | undefined>(undefined),
			delay_capture: new FormControl<boolean | null | undefined>(undefined),
			idempotency_key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			note: new FormControl<string | null | undefined>(undefined),
			reference_id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Defines the fields that are included in the response body of
	 * a request to the [Charge](#endpoint-charge) endpoint.
	 * One of `errors` or `transaction` is present in a given response (never both).
	 */
	export interface ChargeResponse {

		/** Any errors that occurred during the request. */
		errors?: Array<Error>;

		/**
		 * Represents a transaction processed with Square, either with the
		 * Connect API or with Square Point of Sale.
		 * The `tenders` field of this object lists all methods of payment used to pay in
		 * the transaction.
		 */
		transaction?: Transaction;
	}

	/**
	 * Defines the fields that are included in the response body of
	 * a request to the [Charge](#endpoint-charge) endpoint.
	 * One of `errors` or `transaction` is present in a given response (never both).
	 */
	export interface ChargeResponseFormProperties {
	}
	export function CreateChargeResponseFormGroup() {
		return new FormGroup<ChargeResponseFormProperties>({
		});

	}


	/**
	 * Represents a transaction processed with Square, either with the
	 * Connect API or with Square Point of Sale.
	 * The `tenders` field of this object lists all methods of payment used to pay in
	 * the transaction.
	 */
	export interface Transaction {

		/**
		 * If the transaction was created in the Square Point of Sale app, this value
		 * is the ID generated for the transaction by Square Point of Sale.
		 * This ID has no relationship to the transaction's canonical `id`, which is
		 * generated by Square's backend servers. This value is generated for bookkeeping
		 * purposes, in case the transaction cannot immediately be completed (for example,
		 * if the transaction is processed in offline mode).
		 * It is not currently possible with the Connect API to perform a transaction
		 * lookup by this value.
		 */
		client_id?: string | null;

		/** The time when the transaction was created, in RFC 3339 format. */
		created_at?: string | null;

		/** The transaction's unique ID, issued by Square payments servers. */
		id?: string | null;

		/** The ID of the transaction's associated location. */
		location_id?: string | null;

		/**
		 * Contains all information related to a single order to process with Square,
		 * including line items that specify the products to purchase
		 */
		order?: Order;

		/** The Square product that processed the transaction. */
		product?: TransactionProduct | null;

		/**
		 * If the transaction was created with the [Charge](#endpoint-charge)
		 * endpoint, this value is the same as the value provided for the `reference_id`
		 * parameter in the request to that endpoint. Otherwise, it is not set.
		 */
		reference_id?: string | null;

		/** Refunds that have been applied to any tender in the transaction. */
		refunds?: Array<Refund>;

		/** Represents a physical address. */
		shipping_address?: Address;

		/** The tenders used to pay in the transaction. */
		tenders?: Array<Tender>;
	}

	/**
	 * Represents a transaction processed with Square, either with the
	 * Connect API or with Square Point of Sale.
	 * The `tenders` field of this object lists all methods of payment used to pay in
	 * the transaction.
	 */
	export interface TransactionFormProperties {

		/**
		 * If the transaction was created in the Square Point of Sale app, this value
		 * is the ID generated for the transaction by Square Point of Sale.
		 * This ID has no relationship to the transaction's canonical `id`, which is
		 * generated by Square's backend servers. This value is generated for bookkeeping
		 * purposes, in case the transaction cannot immediately be completed (for example,
		 * if the transaction is processed in offline mode).
		 * It is not currently possible with the Connect API to perform a transaction
		 * lookup by this value.
		 */
		client_id: FormControl<string | null | undefined>,

		/** The time when the transaction was created, in RFC 3339 format. */
		created_at: FormControl<string | null | undefined>,

		/** The transaction's unique ID, issued by Square payments servers. */
		id: FormControl<string | null | undefined>,

		/** The ID of the transaction's associated location. */
		location_id: FormControl<string | null | undefined>,

		/** The Square product that processed the transaction. */
		product: FormControl<TransactionProduct | null | undefined>,

		/**
		 * If the transaction was created with the [Charge](#endpoint-charge)
		 * endpoint, this value is the same as the value provided for the `reference_id`
		 * parameter in the request to that endpoint. Otherwise, it is not set.
		 */
		reference_id: FormControl<string | null | undefined>,
	}
	export function CreateTransactionFormGroup() {
		return new FormGroup<TransactionFormProperties>({
			client_id: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			location_id: new FormControl<string | null | undefined>(undefined),
			product: new FormControl<TransactionProduct | null | undefined>(undefined),
			reference_id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Contains all information related to a single order to process with Square,
	 * including line items that specify the products to purchase
	 */
	export interface Order {

		/**
		 * The line items included in the order. Every order has at least one
		 * line item.
		 */
		line_items?: Array<OrderLineItem>;

		/** The ID of the merchant location this order is associated with. */
		location_id?: string | null;

		/**
		 * A client specified identifier to associate an entity in another system
		 * with this order.
		 */
		reference_id?: string | null;

		/**
		 * Represents an amount of money.
		 * __Important:__ Unlike version 1 of the Connect API, __all monetary amounts
		 * returned by v2 endpoints are positive.__ (In v1, monetary amounts are negative
		 * if they represent money being paid _by_ a merchant, instead of money being
		 * paid _to_ a merchant.)
		 */
		total_discount_money?: Money;

		/**
		 * Represents an amount of money.
		 * __Important:__ Unlike version 1 of the Connect API, __all monetary amounts
		 * returned by v2 endpoints are positive.__ (In v1, monetary amounts are negative
		 * if they represent money being paid _by_ a merchant, instead of money being
		 * paid _to_ a merchant.)
		 */
		total_money?: Money;

		/**
		 * Represents an amount of money.
		 * __Important:__ Unlike version 1 of the Connect API, __all monetary amounts
		 * returned by v2 endpoints are positive.__ (In v1, monetary amounts are negative
		 * if they represent money being paid _by_ a merchant, instead of money being
		 * paid _to_ a merchant.)
		 */
		total_tax_money?: Money;
	}

	/**
	 * Contains all information related to a single order to process with Square,
	 * including line items that specify the products to purchase
	 */
	export interface OrderFormProperties {

		/** The ID of the merchant location this order is associated with. */
		location_id: FormControl<string | null | undefined>,

		/**
		 * A client specified identifier to associate an entity in another system
		 * with this order.
		 */
		reference_id: FormControl<string | null | undefined>,
	}
	export function CreateOrderFormGroup() {
		return new FormGroup<OrderFormProperties>({
			location_id: new FormControl<string | null | undefined>(undefined),
			reference_id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Represents a line item in an order. Each line item describes a different
	 * product to purchase, with its own quantity and price details.
	 */
	export interface OrderLineItem {

		/**
		 * Represents an amount of money.
		 * __Important:__ Unlike version 1 of the Connect API, __all monetary amounts
		 * returned by v2 endpoints are positive.__ (In v1, monetary amounts are negative
		 * if they represent money being paid _by_ a merchant, instead of money being
		 * paid _to_ a merchant.)
		 */
		base_price_money?: Money;

		/** The discounts applied to this line item. */
		discounts?: Array<OrderLineItemDiscount>;

		/** The name of the line item. */
		name?: string | null;

		/**
		 * The quantity of the product to purchase. Currently, this string must
		 * have an integer value.
		 */
		quantity?: string | null;

		/** The taxes applied to this line item. */
		taxes?: Array<OrderLineItemTax>;

		/**
		 * Represents an amount of money.
		 * __Important:__ Unlike version 1 of the Connect API, __all monetary amounts
		 * returned by v2 endpoints are positive.__ (In v1, monetary amounts are negative
		 * if they represent money being paid _by_ a merchant, instead of money being
		 * paid _to_ a merchant.)
		 */
		total_discount_money?: Money;

		/**
		 * Represents an amount of money.
		 * __Important:__ Unlike version 1 of the Connect API, __all monetary amounts
		 * returned by v2 endpoints are positive.__ (In v1, monetary amounts are negative
		 * if they represent money being paid _by_ a merchant, instead of money being
		 * paid _to_ a merchant.)
		 */
		total_money?: Money;

		/**
		 * Represents an amount of money.
		 * __Important:__ Unlike version 1 of the Connect API, __all monetary amounts
		 * returned by v2 endpoints are positive.__ (In v1, monetary amounts are negative
		 * if they represent money being paid _by_ a merchant, instead of money being
		 * paid _to_ a merchant.)
		 */
		total_tax_money?: Money;
	}

	/**
	 * Represents a line item in an order. Each line item describes a different
	 * product to purchase, with its own quantity and price details.
	 */
	export interface OrderLineItemFormProperties {

		/** The name of the line item. */
		name: FormControl<string | null | undefined>,

		/**
		 * The quantity of the product to purchase. Currently, this string must
		 * have an integer value.
		 */
		quantity: FormControl<string | null | undefined>,
	}
	export function CreateOrderLineItemFormGroup() {
		return new FormGroup<OrderLineItemFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Represents a discount that applies to one or more line items in an
	 * order.
	 * Fixed-amount, order-level discounts are distributed across all non-zero line item totals.
	 * The amount distributed to each line item is relative to that item’s contribution to the order subtotal.
	 */
	export interface OrderLineItemDiscount {

		/**
		 * Represents an amount of money.
		 * __Important:__ Unlike version 1 of the Connect API, __all monetary amounts
		 * returned by v2 endpoints are positive.__ (In v1, monetary amounts are negative
		 * if they represent money being paid _by_ a merchant, instead of money being
		 * paid _to_ a merchant.)
		 */
		amount_money?: Money;

		/**
		 * Represents an amount of money.
		 * __Important:__ Unlike version 1 of the Connect API, __all monetary amounts
		 * returned by v2 endpoints are positive.__ (In v1, monetary amounts are negative
		 * if they represent money being paid _by_ a merchant, instead of money being
		 * paid _to_ a merchant.)
		 */
		applied_money?: Money;

		/** The discount's name. */
		name?: string | null;

		/**
		 * The percentage of the tax, as a string representation of a decimal number.
		 * A value of `7.25` corresponds to a percentage of 7.25%.
		 * The percentage won't be set for an amount-based discount.
		 */
		percentage?: string | null;

		/**
		 * Indicates the level at which the discount applies.
		 * See [OrderLineItemDiscountScope](#type-orderlineitemdiscountscope) for possible values.
		 */
		scope?: OrderLineItemDiscountScope | null;

		/**
		 * The type of the discount. If it is created by API, it would be either `FIXED_PERCENTAGE` or `FIXED_AMOUNT`.
		 * VARIABLE_* is not supported in API because the order is created at the time of sale and either
		 * percentage or amount has to be specified.
		 * See [OrderLineItemDiscountType](#type-orderlineitemdiscounttype) for possible values.
		 */
		type?: OrderLineItemDiscountType | null;
	}

	/**
	 * Represents a discount that applies to one or more line items in an
	 * order.
	 * Fixed-amount, order-level discounts are distributed across all non-zero line item totals.
	 * The amount distributed to each line item is relative to that item’s contribution to the order subtotal.
	 */
	export interface OrderLineItemDiscountFormProperties {

		/** The discount's name. */
		name: FormControl<string | null | undefined>,

		/**
		 * The percentage of the tax, as a string representation of a decimal number.
		 * A value of `7.25` corresponds to a percentage of 7.25%.
		 * The percentage won't be set for an amount-based discount.
		 */
		percentage: FormControl<string | null | undefined>,

		/**
		 * Indicates the level at which the discount applies.
		 * See [OrderLineItemDiscountScope](#type-orderlineitemdiscountscope) for possible values.
		 */
		scope: FormControl<OrderLineItemDiscountScope | null | undefined>,

		/**
		 * The type of the discount. If it is created by API, it would be either `FIXED_PERCENTAGE` or `FIXED_AMOUNT`.
		 * VARIABLE_* is not supported in API because the order is created at the time of sale and either
		 * percentage or amount has to be specified.
		 * See [OrderLineItemDiscountType](#type-orderlineitemdiscounttype) for possible values.
		 */
		type: FormControl<OrderLineItemDiscountType | null | undefined>,
	}
	export function CreateOrderLineItemDiscountFormGroup() {
		return new FormGroup<OrderLineItemDiscountFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			percentage: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<OrderLineItemDiscountScope | null | undefined>(undefined),
			type: new FormControl<OrderLineItemDiscountType | null | undefined>(undefined),
		});

	}

	export enum OrderLineItemDiscountScope { LINE_ITEM = 0, ORDER = 1 }

	export enum OrderLineItemDiscountType { UNKNOWN = 0, FIXED_PERCENTAGE = 1, FIXED_AMOUNT = 2, VARIABLE_PERCENTAGE = 3, VARIABLE_AMOUNT = 4 }


	/** Represents a tax that applies to one or more line items in an order. */
	export interface OrderLineItemTax {

		/**
		 * Represents an amount of money.
		 * __Important:__ Unlike version 1 of the Connect API, __all monetary amounts
		 * returned by v2 endpoints are positive.__ (In v1, monetary amounts are negative
		 * if they represent money being paid _by_ a merchant, instead of money being
		 * paid _to_ a merchant.)
		 */
		applied_money?: Money;

		/** The tax's name. */
		name?: string | null;

		/**
		 * The percentage of the tax, as a string representation of a decimal number.
		 * A value of `7.25` corresponds to a percentage of 7.25%.
		 */
		percentage?: string | null;

		/**
		 * Indicates the calculation method used to apply the tax.
		 * See [OrderLineItemTaxType](#type-orderlineitemtaxtype) for possible values.
		 */
		type?: OrderLineItemTaxType | null;
	}

	/** Represents a tax that applies to one or more line items in an order. */
	export interface OrderLineItemTaxFormProperties {

		/** The tax's name. */
		name: FormControl<string | null | undefined>,

		/**
		 * The percentage of the tax, as a string representation of a decimal number.
		 * A value of `7.25` corresponds to a percentage of 7.25%.
		 */
		percentage: FormControl<string | null | undefined>,

		/**
		 * Indicates the calculation method used to apply the tax.
		 * See [OrderLineItemTaxType](#type-orderlineitemtaxtype) for possible values.
		 */
		type: FormControl<OrderLineItemTaxType | null | undefined>,
	}
	export function CreateOrderLineItemTaxFormGroup() {
		return new FormGroup<OrderLineItemTaxFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			percentage: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<OrderLineItemTaxType | null | undefined>(undefined),
		});

	}

	export enum OrderLineItemTaxType { UNKNOWN = 0, ADDITIVE = 1, INCLUSIVE = 2 }

	export enum TransactionProduct { REGISTER = 0, EXTERNAL_API = 1, BILLING = 2, APPOINTMENTS = 3, INVOICES = 4, ONLINE_STORE = 5, PAYROLL = 6, OTHER = 7 }


	/** Represents a refund processed for a Square transaction. */
	export interface Refund {

		/**
		 * Represents an amount of money.
		 * __Important:__ Unlike version 1 of the Connect API, __all monetary amounts
		 * returned by v2 endpoints are positive.__ (In v1, monetary amounts are negative
		 * if they represent money being paid _by_ a merchant, instead of money being
		 * paid _to_ a merchant.)
		 * Required
		 */
		amount_money: Money;

		/** The time when the refund was created, in RFC 3339 format. */
		created_at?: string | null;

		/**
		 * The refund's unique ID.
		 * Required
		 */
		id: string;

		/**
		 * The ID of the refund's associated location.
		 * Required
		 */
		location_id: string;

		/**
		 * Represents an amount of money.
		 * __Important:__ Unlike version 1 of the Connect API, __all monetary amounts
		 * returned by v2 endpoints are positive.__ (In v1, monetary amounts are negative
		 * if they represent money being paid _by_ a merchant, instead of money being
		 * paid _to_ a merchant.)
		 */
		processing_fee_money?: Money;

		/**
		 * The reason for the refund being issued.
		 * Required
		 */
		reason: string;

		/**
		 * The current status of the refund (`PENDING`, `APPROVED`, `REJECTED`,
		 * or `FAILED`).
		 * Required
		 */
		status: RefundStatus;

		/**
		 * The ID of the refunded tender.
		 * Required
		 */
		tender_id: string;

		/**
		 * The ID of the transaction that the refunded tender is part of.
		 * Required
		 */
		transaction_id: string;
	}

	/** Represents a refund processed for a Square transaction. */
	export interface RefundFormProperties {

		/** The time when the refund was created, in RFC 3339 format. */
		created_at: FormControl<string | null | undefined>,

		/**
		 * The refund's unique ID.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The ID of the refund's associated location.
		 * Required
		 */
		location_id: FormControl<string | null | undefined>,

		/**
		 * The reason for the refund being issued.
		 * Required
		 */
		reason: FormControl<string | null | undefined>,

		/**
		 * The current status of the refund (`PENDING`, `APPROVED`, `REJECTED`,
		 * or `FAILED`).
		 * Required
		 */
		status: FormControl<RefundStatus | null | undefined>,

		/**
		 * The ID of the refunded tender.
		 * Required
		 */
		tender_id: FormControl<string | null | undefined>,

		/**
		 * The ID of the transaction that the refunded tender is part of.
		 * Required
		 */
		transaction_id: FormControl<string | null | undefined>,
	}
	export function CreateRefundFormGroup() {
		return new FormGroup<RefundFormProperties>({
			created_at: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			location_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reason: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<RefundStatus | null | undefined>(undefined, [Validators.required]),
			tender_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			transaction_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RefundStatus { PENDING = 0, APPROVED = 1, REJECTED = 2, FAILED = 3 }


	/** Represents a tender (i.e., a method of payment) used in a Square transaction. */
	export interface Tender {

		/**
		 * Represents an amount of money.
		 * __Important:__ Unlike version 1 of the Connect API, __all monetary amounts
		 * returned by v2 endpoints are positive.__ (In v1, monetary amounts are negative
		 * if they represent money being paid _by_ a merchant, instead of money being
		 * paid _to_ a merchant.)
		 */
		amount_money?: Money;

		/** Represents additional details of a tender with `type` `CARD` or `SQUARE_GIFT_CARD` */
		card_details?: TenderCardDetails;

		/** Represents the details of a tender with `type` `CASH`. */
		cash_details?: TenderCashDetails;

		/** The time when the tender was created, in RFC 3339 format. */
		created_at?: string | null;

		/**
		 * If the tender is associated with a customer or represents a customer's card on file,
		 * this is the ID of the associated customer.
		 */
		customer_id?: string | null;

		/** The tender's unique ID. */
		id?: string | null;

		/** The ID of the transaction's associated location. */
		location_id?: string | null;

		/** An optional note associated with the tender at the time of payment. */
		note?: string | null;

		/**
		 * Represents an amount of money.
		 * __Important:__ Unlike version 1 of the Connect API, __all monetary amounts
		 * returned by v2 endpoints are positive.__ (In v1, monetary amounts are negative
		 * if they represent money being paid _by_ a merchant, instead of money being
		 * paid _to_ a merchant.)
		 */
		processing_fee_money?: Money;

		/** The ID of the tender's associated transaction. */
		transaction_id?: string | null;

		/**
		 * The type of tender, such as `CARD` or `CASH`.
		 * Required
		 */
		type: TenderType;
	}

	/** Represents a tender (i.e., a method of payment) used in a Square transaction. */
	export interface TenderFormProperties {

		/** The time when the tender was created, in RFC 3339 format. */
		created_at: FormControl<string | null | undefined>,

		/**
		 * If the tender is associated with a customer or represents a customer's card on file,
		 * this is the ID of the associated customer.
		 */
		customer_id: FormControl<string | null | undefined>,

		/** The tender's unique ID. */
		id: FormControl<string | null | undefined>,

		/** The ID of the transaction's associated location. */
		location_id: FormControl<string | null | undefined>,

		/** An optional note associated with the tender at the time of payment. */
		note: FormControl<string | null | undefined>,

		/** The ID of the tender's associated transaction. */
		transaction_id: FormControl<string | null | undefined>,

		/**
		 * The type of tender, such as `CARD` or `CASH`.
		 * Required
		 */
		type: FormControl<TenderType | null | undefined>,
	}
	export function CreateTenderFormGroup() {
		return new FormGroup<TenderFormProperties>({
			created_at: new FormControl<string | null | undefined>(undefined),
			customer_id: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			location_id: new FormControl<string | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
			transaction_id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<TenderType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents additional details of a tender with `type` `CARD` or `SQUARE_GIFT_CARD` */
	export interface TenderCardDetails {

		/** Represents the non-confidential details of a credit card. */
		card?: Card;

		/** The method used to enter the card's details for the transaction. */
		entry_method?: TenderCardDetailsEntry_method | null;

		/**
		 * The credit card payment's current state (such as `AUTHORIZED` or
		 * `CAPTURED`). See [TenderCardDetailsStatus](#type-tendercarddetailsstatus)
		 * for possible values.
		 */
		status?: TenderCardDetailsStatus | null;
	}

	/** Represents additional details of a tender with `type` `CARD` or `SQUARE_GIFT_CARD` */
	export interface TenderCardDetailsFormProperties {

		/** The method used to enter the card's details for the transaction. */
		entry_method: FormControl<TenderCardDetailsEntry_method | null | undefined>,

		/**
		 * The credit card payment's current state (such as `AUTHORIZED` or
		 * `CAPTURED`). See [TenderCardDetailsStatus](#type-tendercarddetailsstatus)
		 * for possible values.
		 */
		status: FormControl<TenderCardDetailsStatus | null | undefined>,
	}
	export function CreateTenderCardDetailsFormGroup() {
		return new FormGroup<TenderCardDetailsFormProperties>({
			entry_method: new FormControl<TenderCardDetailsEntry_method | null | undefined>(undefined),
			status: new FormControl<TenderCardDetailsStatus | null | undefined>(undefined),
		});

	}

	export enum TenderCardDetailsEntry_method { SWIPED = 0, KEYED = 1, EMV = 2, ON_FILE = 3, CONTACTLESS = 4 }

	export enum TenderCardDetailsStatus { AUTHORIZED = 0, CAPTURED = 1, VOIDED = 2, FAILED = 3 }


	/** Represents the details of a tender with `type` `CASH`. */
	export interface TenderCashDetails {

		/**
		 * Represents an amount of money.
		 * __Important:__ Unlike version 1 of the Connect API, __all monetary amounts
		 * returned by v2 endpoints are positive.__ (In v1, monetary amounts are negative
		 * if they represent money being paid _by_ a merchant, instead of money being
		 * paid _to_ a merchant.)
		 */
		buyer_tendered_money?: Money;

		/**
		 * Represents an amount of money.
		 * __Important:__ Unlike version 1 of the Connect API, __all monetary amounts
		 * returned by v2 endpoints are positive.__ (In v1, monetary amounts are negative
		 * if they represent money being paid _by_ a merchant, instead of money being
		 * paid _to_ a merchant.)
		 */
		change_back_money?: Money;
	}

	/** Represents the details of a tender with `type` `CASH`. */
	export interface TenderCashDetailsFormProperties {
	}
	export function CreateTenderCashDetailsFormGroup() {
		return new FormGroup<TenderCashDetailsFormProperties>({
		});

	}

	export enum TenderType { CARD = 0, CASH = 1, THIRD_PARTY_CARD = 2, SQUARE_GIFT_CARD = 3, NO_SALE = 4, OTHER = 5 }


	/**
	 * Square Checkout lets merchants accept online payments for supported
	 * payment types using a checkout workflow hosted on squareup.com.
	 */
	export interface Checkout {

		/**
		 * If `true`, Square Checkout will collect shipping information on your
		 * behalf and store that information with the transaction information in your
		 * Square Dashboard.
		 * Default: `false`.
		 */
		ask_for_shipping_address?: boolean | null;

		/**
		 * The URL that the buyer's browser should be redirected to after the
		 * checkout is completed.
		 */
		checkout_page_url?: string | null;

		/** The time when the checkout was created, in RFC 3339 format. */
		created_at?: string | null;

		/** ID generated by Square Checkout when a new checkout is requested. */
		id?: string | null;

		/**
		 * The email address to display on the Square Checkout confirmation page
		 * and confirmation email that the buyer can use to contact the merchant.
		 * If this value is not set, the confirmation page and email will display the
		 * primary email address associated with the merchant's Square account.
		 * Default: none; only exists if explicitly set.
		 */
		merchant_support_email?: string | null;

		/**
		 * Contains all information related to a single order to process with Square,
		 * including line items that specify the products to purchase
		 */
		order?: Order;

		/**
		 * If provided, the buyer's email is pre-populated on the checkout page
		 * as an editable text field.
		 * Default: none; only exists if explicitly set.
		 */
		pre_populate_buyer_email?: string | null;

		/** Represents a physical address. */
		pre_populate_shipping_address?: Address;

		/**
		 * The URL to redirect to after checkout is completed with `checkoutId`,
		 * Square's `orderId`, `transactionId`, and `referenceId` appended as URL
		 * parameters. For example, if the provided redirect_url is
		 * `http://www.example.com/order-complete`, a successful transaction redirects
		 * the customer to:
		 * `http://www.example.com/order-complete?checkoutId=xxxxxx&orderId=xxxxxx&referenceId=xxxxxx&transactionId=xxxxxx`
		 * If you do not provide a redirect URL, Square Checkout will display an order
		 * confirmation page on your behalf; however Square strongly recommends that
		 * you provide a redirect URL so you can verify the transaction results and
		 * finalize the order through your existing/normal confirmation workflow.
		 */
		redirect_url?: string | null;
	}

	/**
	 * Square Checkout lets merchants accept online payments for supported
	 * payment types using a checkout workflow hosted on squareup.com.
	 */
	export interface CheckoutFormProperties {

		/**
		 * If `true`, Square Checkout will collect shipping information on your
		 * behalf and store that information with the transaction information in your
		 * Square Dashboard.
		 * Default: `false`.
		 */
		ask_for_shipping_address: FormControl<boolean | null | undefined>,

		/**
		 * The URL that the buyer's browser should be redirected to after the
		 * checkout is completed.
		 */
		checkout_page_url: FormControl<string | null | undefined>,

		/** The time when the checkout was created, in RFC 3339 format. */
		created_at: FormControl<string | null | undefined>,

		/** ID generated by Square Checkout when a new checkout is requested. */
		id: FormControl<string | null | undefined>,

		/**
		 * The email address to display on the Square Checkout confirmation page
		 * and confirmation email that the buyer can use to contact the merchant.
		 * If this value is not set, the confirmation page and email will display the
		 * primary email address associated with the merchant's Square account.
		 * Default: none; only exists if explicitly set.
		 */
		merchant_support_email: FormControl<string | null | undefined>,

		/**
		 * If provided, the buyer's email is pre-populated on the checkout page
		 * as an editable text field.
		 * Default: none; only exists if explicitly set.
		 */
		pre_populate_buyer_email: FormControl<string | null | undefined>,

		/**
		 * The URL to redirect to after checkout is completed with `checkoutId`,
		 * Square's `orderId`, `transactionId`, and `referenceId` appended as URL
		 * parameters. For example, if the provided redirect_url is
		 * `http://www.example.com/order-complete`, a successful transaction redirects
		 * the customer to:
		 * `http://www.example.com/order-complete?checkoutId=xxxxxx&orderId=xxxxxx&referenceId=xxxxxx&transactionId=xxxxxx`
		 * If you do not provide a redirect URL, Square Checkout will display an order
		 * confirmation page on your behalf; however Square strongly recommends that
		 * you provide a redirect URL so you can verify the transaction results and
		 * finalize the order through your existing/normal confirmation workflow.
		 */
		redirect_url: FormControl<string | null | undefined>,
	}
	export function CreateCheckoutFormGroup() {
		return new FormGroup<CheckoutFormProperties>({
			ask_for_shipping_address: new FormControl<boolean | null | undefined>(undefined),
			checkout_page_url: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			merchant_support_email: new FormControl<string | null | undefined>(undefined),
			pre_populate_buyer_email: new FormControl<string | null | undefined>(undefined),
			redirect_url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Indicates the country associated with another entity, such as a business.
	 * Values are in [ISO 3166-1-alpha-2 format](http://www.iso.org/iso/home/standards/country_codes.htm).
	 */
	export enum Country { ZZ = 0, AD = 1, AE = 2, AF = 3, AG = 4, AI = 5, AL = 6, AM = 7, AO = 8, AQ = 9, AR = 10, AS = 11, AT = 12, AU = 13, AW = 14, AX = 15, AZ = 16, BA = 17, BB = 18, BD = 19, BE = 20, BF = 21, BG = 22, BH = 23, BI = 24, BJ = 25, BL = 26, BM = 27, BN = 28, BO = 29, BQ = 30, BR = 31, BS = 32, BT = 33, BV = 34, BW = 35, BY = 36, BZ = 37, CA = 38, CC = 39, CD = 40, CF = 41, CG = 42, CH = 43, CI = 44, CK = 45, CL = 46, CM = 47, CN = 48, CO = 49, CR = 50, CU = 51, CV = 52, CW = 53, CX = 54, CY = 55, CZ = 56, DE = 57, DJ = 58, DK = 59, DM = 60, DO = 61, DZ = 62, EC = 63, EE = 64, EG = 65, EH = 66, ER = 67, ES = 68, ET = 69, FI = 70, FJ = 71, FK = 72, FM = 73, FO = 74, FR = 75, GA = 76, GB = 77, GD = 78, GE = 79, GF = 80, GG = 81, GH = 82, GI = 83, GL = 84, GM = 85, GN = 86, GP = 87, GQ = 88, GR = 89, GS = 90, GT = 91, GU = 92, GW = 93, GY = 94, HK = 95, HM = 96, HN = 97, HR = 98, HT = 99, HU = 100, ID = 101, IE = 102, IL = 103, IM = 104, IN = 105, IO = 106, IQ = 107, IR = 108, IS = 109, IT = 110, JE = 111, JM = 112, JO = 113, JP = 114, KE = 115, KG = 116, KH = 117, KI = 118, KM = 119, KN = 120, KP = 121, KR = 122, KW = 123, KY = 124, KZ = 125, LA = 126, LB = 127, LC = 128, LI = 129, LK = 130, LR = 131, LS = 132, LT = 133, LU = 134, LV = 135, LY = 136, MA = 137, MC = 138, MD = 139, ME = 140, MF = 141, MG = 142, MH = 143, MK = 144, ML = 145, MM = 146, MN = 147, MO = 148, MP = 149, MQ = 150, MR = 151, MS = 152, MT = 153, MU = 154, MV = 155, MW = 156, MX = 157, MY = 158, MZ = 159, NA = 160, NC = 161, NE = 162, NF = 163, NG = 164, NI = 165, NL = 166, NO = 167, NP = 168, NR = 169, NU = 170, NZ = 171, OM = 172, PA = 173, PE = 174, PF = 175, PG = 176, PH = 177, PK = 178, PL = 179, PM = 180, PN = 181, PR = 182, PS = 183, PT = 184, PW = 185, PY = 186, QA = 187, RE = 188, RO = 189, RS = 190, RU = 191, RW = 192, SA = 193, SB = 194, SC = 195, SD = 196, SE = 197, SG = 198, SH = 199, SI = 200, SJ = 201, SK = 202, SL = 203, SM = 204, SN = 205, SO = 206, SR = 207, SS = 208, ST = 209, SV = 210, SX = 211, SY = 212, SZ = 213, TC = 214, TD = 215, TF = 216, TG = 217, TH = 218, TJ = 219, TK = 220, TL = 221, TM = 222, TN = 223, TO = 224, TR = 225, TT = 226, TV = 227, TW = 228, TZ = 229, UA = 230, UG = 231, UM = 232, US = 233, UY = 234, UZ = 235, VA = 236, VC = 237, VE = 238, VG = 239, VI = 240, VN = 241, VU = 242, WF = 243, WS = 244, YE = 245, YT = 246, ZA = 247, ZM = 248, ZW = 249 }


	/**
	 * Defines the parameters that can be included in the body of
	 * a request to the [CreateCheckout](#endpoint-createcheckout) endpoint.
	 */
	export interface CreateCheckoutRequest {

		/**
		 * If `true`, Square Checkout will collect shipping information on your
		 * behalf and store that information with the transaction information in your
		 * Square Dashboard.
		 * Default: `false`.
		 */
		ask_for_shipping_address?: boolean | null;

		/**
		 * A unique string that identifies this checkout among others
		 * you've created. It can be any valid string but must be unique for every
		 * order sent to Square Checkout for a given location ID.
		 * The idempotency key is used to avoid processing the same order more than
		 * once. If you're unsure whether a particular checkout was created
		 * successfully, you can reattempt it with the same idempotency key and all the
		 * same other parameters without worrying about creating duplicates.
		 * We recommend using a random number/string generator native to the language
		 * you are working in to generate strings for your idempotency keys.
		 * See [Idempotency keys](#idempotencykeys) for more information.
		 * Required
		 * Max length: 192
		 * Min length: 1
		 */
		idempotency_key: string;

		/**
		 * The email address to display on the Square Checkout confirmation page
		 * and confirmation email that the buyer can use to contact the merchant.
		 * If this value is not set, the confirmation page and email will display the
		 * primary email address associated with the merchant's Square account.
		 * Default: none; only exists if explicitly set.
		 * Max length: 254
		 */
		merchant_support_email?: string | null;

		/**
		 * Defines the parameters that can be included in the body of
		 * a request to the [CreateCheckout](#endpoint-createcheckout) endpoint.
		 * Required
		 */
		order: CreateOrderRequest;

		/**
		 * If provided, the buyer's email is pre-populated on the checkout page
		 * as an editable text field.
		 * Default: none; only exists if explicitly set.
		 * Max length: 254
		 */
		pre_populate_buyer_email?: string | null;

		/** Represents a physical address. */
		pre_populate_shipping_address?: Address;

		/**
		 * The URL to redirect to after checkout is completed with `checkoutId`,
		 * Square's `orderId`, `transactionId`, and `referenceId` appended as URL
		 * parameters. For example, if the provided redirect_url is
		 * `http://www.example.com/order-complete`, a successful transaction redirects
		 * the customer to:
		 * `http://www.example.com/order-complete?checkoutId=xxxxxx&orderId=xxxxxx&referenceId=xxxxxx&transactionId=xxxxxx`
		 * If you do not provide a redirect URL, Square Checkout will display an order
		 * confirmation page on your behalf; however Square strongly recommends that
		 * you provide a redirect URL so you can verify the transaction results and
		 * finalize the order through your existing/normal confirmation workflow.
		 * Default: none; only exists if explicitly set.
		 */
		redirect_url?: string | null;
	}

	/**
	 * Defines the parameters that can be included in the body of
	 * a request to the [CreateCheckout](#endpoint-createcheckout) endpoint.
	 */
	export interface CreateCheckoutRequestFormProperties {

		/**
		 * If `true`, Square Checkout will collect shipping information on your
		 * behalf and store that information with the transaction information in your
		 * Square Dashboard.
		 * Default: `false`.
		 */
		ask_for_shipping_address: FormControl<boolean | null | undefined>,

		/**
		 * A unique string that identifies this checkout among others
		 * you've created. It can be any valid string but must be unique for every
		 * order sent to Square Checkout for a given location ID.
		 * The idempotency key is used to avoid processing the same order more than
		 * once. If you're unsure whether a particular checkout was created
		 * successfully, you can reattempt it with the same idempotency key and all the
		 * same other parameters without worrying about creating duplicates.
		 * We recommend using a random number/string generator native to the language
		 * you are working in to generate strings for your idempotency keys.
		 * See [Idempotency keys](#idempotencykeys) for more information.
		 * Required
		 * Max length: 192
		 * Min length: 1
		 */
		idempotency_key: FormControl<string | null | undefined>,

		/**
		 * The email address to display on the Square Checkout confirmation page
		 * and confirmation email that the buyer can use to contact the merchant.
		 * If this value is not set, the confirmation page and email will display the
		 * primary email address associated with the merchant's Square account.
		 * Default: none; only exists if explicitly set.
		 * Max length: 254
		 */
		merchant_support_email: FormControl<string | null | undefined>,

		/**
		 * If provided, the buyer's email is pre-populated on the checkout page
		 * as an editable text field.
		 * Default: none; only exists if explicitly set.
		 * Max length: 254
		 */
		pre_populate_buyer_email: FormControl<string | null | undefined>,

		/**
		 * The URL to redirect to after checkout is completed with `checkoutId`,
		 * Square's `orderId`, `transactionId`, and `referenceId` appended as URL
		 * parameters. For example, if the provided redirect_url is
		 * `http://www.example.com/order-complete`, a successful transaction redirects
		 * the customer to:
		 * `http://www.example.com/order-complete?checkoutId=xxxxxx&orderId=xxxxxx&referenceId=xxxxxx&transactionId=xxxxxx`
		 * If you do not provide a redirect URL, Square Checkout will display an order
		 * confirmation page on your behalf; however Square strongly recommends that
		 * you provide a redirect URL so you can verify the transaction results and
		 * finalize the order through your existing/normal confirmation workflow.
		 * Default: none; only exists if explicitly set.
		 */
		redirect_url: FormControl<string | null | undefined>,
	}
	export function CreateCreateCheckoutRequestFormGroup() {
		return new FormGroup<CreateCheckoutRequestFormProperties>({
			ask_for_shipping_address: new FormControl<boolean | null | undefined>(undefined),
			idempotency_key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(192)]),
			merchant_support_email: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(254)]),
			pre_populate_buyer_email: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(254)]),
			redirect_url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Defines the parameters that can be included in the body of
	 * a request to the [CreateCheckout](#endpoint-createcheckout) endpoint.
	 */
	export interface CreateOrderRequest {

		/** The discounts include the custom discounts . */
		discounts?: Array<CreateOrderRequestDiscount>;

		/**
		 * The line items to associate with this order.
		 * Each line item represents a different product (or a custom monetary amount)
		 * to include in a purchase.
		 * Required
		 */
		line_items: Array<CreateOrderRequestLineItem>;

		/**
		 * An optional ID you can associate with the order for your own
		 * purposes (such as to associate the order with an entity ID in your
		 * own database).
		 * This value cannot exceed 40 characters.
		 * Max length: 40
		 */
		reference_id?: string | null;

		/** The taxes include the custom taxes. */
		taxes?: Array<CreateOrderRequestTax>;
	}

	/**
	 * Defines the parameters that can be included in the body of
	 * a request to the [CreateCheckout](#endpoint-createcheckout) endpoint.
	 */
	export interface CreateOrderRequestFormProperties {

		/**
		 * An optional ID you can associate with the order for your own
		 * purposes (such as to associate the order with an entity ID in your
		 * own database).
		 * This value cannot exceed 40 characters.
		 * Max length: 40
		 */
		reference_id: FormControl<string | null | undefined>,
	}
	export function CreateCreateOrderRequestFormGroup() {
		return new FormGroup<CreateOrderRequestFormProperties>({
			reference_id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(40)]),
		});

	}


	/** Represents a discount that to either a single line item or an entire order. */
	export interface CreateOrderRequestDiscount {

		/**
		 * Represents an amount of money.
		 * __Important:__ Unlike version 1 of the Connect API, __all monetary amounts
		 * returned by v2 endpoints are positive.__ (In v1, monetary amounts are negative
		 * if they represent money being paid _by_ a merchant, instead of money being
		 * paid _to_ a merchant.)
		 */
		amount_money?: Money;

		/**
		 * The discount's name.
		 * Max length: 255
		 */
		name?: string | null;

		/**
		 * The percentage of the discount, as a string representation of a decimal number.
		 * A value of `7.25` corresponds to a percentage of 7.25%. This value range between 0.0 up to 100.0
		 */
		percentage?: string | null;
	}

	/** Represents a discount that to either a single line item or an entire order. */
	export interface CreateOrderRequestDiscountFormProperties {

		/**
		 * The discount's name.
		 * Max length: 255
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The percentage of the discount, as a string representation of a decimal number.
		 * A value of `7.25` corresponds to a percentage of 7.25%. This value range between 0.0 up to 100.0
		 */
		percentage: FormControl<string | null | undefined>,
	}
	export function CreateCreateOrderRequestDiscountFormGroup() {
		return new FormGroup<CreateOrderRequestDiscountFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			percentage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Represents a line item to include in an order. Each line item describes
	 * a different product to purchase, with its own quantity and price details.
	 */
	export interface CreateOrderRequestLineItem {

		/**
		 * Represents an amount of money.
		 * __Important:__ Unlike version 1 of the Connect API, __all monetary amounts
		 * returned by v2 endpoints are positive.__ (In v1, monetary amounts are negative
		 * if they represent money being paid _by_ a merchant, instead of money being
		 * paid _to_ a merchant.)
		 */
		base_price_money?: Money;

		/** The discounts include the custom discounts. */
		discounts?: Array<CreateOrderRequestDiscount>;

		/**
		 * The name of the line item. This value cannot exceed 500 characters.
		 * Max length: 500
		 */
		name?: string | null;

		/**
		 * The quantity to purchase, as a string representation of a number.
		 * Currently, only integer values are supported.
		 * Required
		 * Min length: 1
		 */
		quantity: string;

		/** The taxes include the custom taxes. */
		taxes?: Array<CreateOrderRequestTax>;
	}

	/**
	 * Represents a line item to include in an order. Each line item describes
	 * a different product to purchase, with its own quantity and price details.
	 */
	export interface CreateOrderRequestLineItemFormProperties {

		/**
		 * The name of the line item. This value cannot exceed 500 characters.
		 * Max length: 500
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The quantity to purchase, as a string representation of a number.
		 * Currently, only integer values are supported.
		 * Required
		 * Min length: 1
		 */
		quantity: FormControl<string | null | undefined>,
	}
	export function CreateCreateOrderRequestLineItemFormGroup() {
		return new FormGroup<CreateOrderRequestLineItemFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500)]),
			quantity: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}


	/** Represents a tax that applies to either a single line item or an entire order. */
	export interface CreateOrderRequestTax {

		/**
		 * The tax's name.
		 * Max length: 255
		 */
		name?: string | null;

		/**
		 * The percentage of the tax, as a string representation of a decimal number.
		 * A value of `7.25` corresponds to a percentage of 7.25%. This value range between 0.0 up to 100.0
		 */
		percentage?: string | null;

		/**
		 * Indicates the calculation method used to apply the line item tax.
		 * Default: `ADDITIVE`; See [OrderLineItemTaxType](#type-orderlineitemtaxtype) for possible values.
		 */
		type?: OrderLineItemTaxType | null;
	}

	/** Represents a tax that applies to either a single line item or an entire order. */
	export interface CreateOrderRequestTaxFormProperties {

		/**
		 * The tax's name.
		 * Max length: 255
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The percentage of the tax, as a string representation of a decimal number.
		 * A value of `7.25` corresponds to a percentage of 7.25%. This value range between 0.0 up to 100.0
		 */
		percentage: FormControl<string | null | undefined>,

		/**
		 * Indicates the calculation method used to apply the line item tax.
		 * Default: `ADDITIVE`; See [OrderLineItemTaxType](#type-orderlineitemtaxtype) for possible values.
		 */
		type: FormControl<OrderLineItemTaxType | null | undefined>,
	}
	export function CreateCreateOrderRequestTaxFormGroup() {
		return new FormGroup<CreateOrderRequestTaxFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			percentage: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<OrderLineItemTaxType | null | undefined>(undefined),
		});

	}


	/**
	 * Defines the fields that are included in the response body of
	 * a request to the [CreateCheckout](#endpoint-createcheckout) endpoint.
	 */
	export interface CreateCheckoutResponse {

		/**
		 * Square Checkout lets merchants accept online payments for supported
		 * payment types using a checkout workflow hosted on squareup.com.
		 */
		checkout?: Checkout;

		/** Any errors that occurred during the request. */
		errors?: Array<Error>;
	}

	/**
	 * Defines the fields that are included in the response body of
	 * a request to the [CreateCheckout](#endpoint-createcheckout) endpoint.
	 */
	export interface CreateCheckoutResponseFormProperties {
	}
	export function CreateCreateCheckoutResponseFormGroup() {
		return new FormGroup<CreateCheckoutResponseFormProperties>({
		});

	}


	/**
	 * Defines the fields that are included in the request body of a request
	 * to the [CreateCustomerCard](#endpoint-createcustomercard) endpoint.
	 */
	export interface CreateCustomerCardRequest {

		/** Represents a physical address. */
		billing_address?: Address;

		/**
		 * A card nonce representing the credit card to link to the customer.
		 * Card nonces are generated by the `SqPaymentForm` that buyers enter
		 * their card information into. See
		 * [Embedding the payment form](/articles/adding-payment-form/) for
		 * more information.
		 * Required
		 */
		card_nonce: string;

		/** The cardholder's name. */
		cardholder_name?: string | null;
	}

	/**
	 * Defines the fields that are included in the request body of a request
	 * to the [CreateCustomerCard](#endpoint-createcustomercard) endpoint.
	 */
	export interface CreateCustomerCardRequestFormProperties {

		/**
		 * A card nonce representing the credit card to link to the customer.
		 * Card nonces are generated by the `SqPaymentForm` that buyers enter
		 * their card information into. See
		 * [Embedding the payment form](/articles/adding-payment-form/) for
		 * more information.
		 * Required
		 */
		card_nonce: FormControl<string | null | undefined>,

		/** The cardholder's name. */
		cardholder_name: FormControl<string | null | undefined>,
	}
	export function CreateCreateCustomerCardRequestFormGroup() {
		return new FormGroup<CreateCustomerCardRequestFormProperties>({
			card_nonce: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			cardholder_name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Defines the fields that are included in the response body of
	 * a request to the [CreateCustomerCard](#endpoint-createcustomercard) endpoint.
	 * One of `errors` or `card` is present in a given response (never both).
	 */
	export interface CreateCustomerCardResponse {

		/** Represents the non-confidential details of a credit card. */
		card?: Card;

		/** Any errors that occurred during the request. */
		errors?: Array<Error>;
	}

	/**
	 * Defines the fields that are included in the response body of
	 * a request to the [CreateCustomerCard](#endpoint-createcustomercard) endpoint.
	 * One of `errors` or `card` is present in a given response (never both).
	 */
	export interface CreateCustomerCardResponseFormProperties {
	}
	export function CreateCreateCustomerCardResponseFormGroup() {
		return new FormGroup<CreateCustomerCardResponseFormProperties>({
		});

	}


	/**
	 * Defines the body parameters that can be provided in a request to the
	 * [CreateCustomer](#endpoint-createcustomer) endpoint.
	 */
	export interface CreateCustomerRequest {

		/** Represents a physical address. */
		address?: Address;

		/** The name of the customer's company. */
		company_name?: string | null;

		/** The customer's email address. */
		email_address?: string | null;

		/** The customer's family (i.e., last) name. */
		family_name?: string | null;

		/** The customer's given (i.e., first) name. */
		given_name?: string | null;

		/** A nickname for the customer. */
		nickname?: string | null;

		/** An optional note to associate with the customer. */
		note?: string | null;

		/** The customer's phone number. */
		phone_number?: string | null;

		/**
		 * An optional second ID you can set to associate the customer with an
		 * entity in another system.
		 */
		reference_id?: string | null;
	}

	/**
	 * Defines the body parameters that can be provided in a request to the
	 * [CreateCustomer](#endpoint-createcustomer) endpoint.
	 */
	export interface CreateCustomerRequestFormProperties {

		/** The name of the customer's company. */
		company_name: FormControl<string | null | undefined>,

		/** The customer's email address. */
		email_address: FormControl<string | null | undefined>,

		/** The customer's family (i.e., last) name. */
		family_name: FormControl<string | null | undefined>,

		/** The customer's given (i.e., first) name. */
		given_name: FormControl<string | null | undefined>,

		/** A nickname for the customer. */
		nickname: FormControl<string | null | undefined>,

		/** An optional note to associate with the customer. */
		note: FormControl<string | null | undefined>,

		/** The customer's phone number. */
		phone_number: FormControl<string | null | undefined>,

		/**
		 * An optional second ID you can set to associate the customer with an
		 * entity in another system.
		 */
		reference_id: FormControl<string | null | undefined>,
	}
	export function CreateCreateCustomerRequestFormGroup() {
		return new FormGroup<CreateCustomerRequestFormProperties>({
			company_name: new FormControl<string | null | undefined>(undefined),
			email_address: new FormControl<string | null | undefined>(undefined),
			family_name: new FormControl<string | null | undefined>(undefined),
			given_name: new FormControl<string | null | undefined>(undefined),
			nickname: new FormControl<string | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
			phone_number: new FormControl<string | null | undefined>(undefined),
			reference_id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Defines the fields that are included in the response body of
	 * a request to the [CreateCustomer](#endpoint-createcustomer) endpoint.
	 * One of `errors` or `customer` is present in a given response (never both).
	 */
	export interface CreateCustomerResponse {

		/**
		 * Represents one of a business's customers, which can have one or more
		 * cards on file associated with it.
		 */
		customer?: Customer;

		/** Any errors that occurred during the request. */
		errors?: Array<Error>;
	}

	/**
	 * Defines the fields that are included in the response body of
	 * a request to the [CreateCustomer](#endpoint-createcustomer) endpoint.
	 * One of `errors` or `customer` is present in a given response (never both).
	 */
	export interface CreateCustomerResponseFormProperties {
	}
	export function CreateCreateCustomerResponseFormGroup() {
		return new FormGroup<CreateCustomerResponseFormProperties>({
		});

	}


	/**
	 * Represents one of a business's customers, which can have one or more
	 * cards on file associated with it.
	 */
	export interface Customer {

		/** Represents a physical address. */
		address?: Address;

		/** The non-confidential details of the customer's cards on file. */
		cards?: Array<Card>;

		/** The name of the customer's company. */
		company_name?: string | null;

		/**
		 * The time when the customer was created, in RFC 3339 format.
		 * Required
		 */
		created_at: string;

		/** The customer's email address. */
		email_address?: string | null;

		/** The customer's family (i.e., last) name. */
		family_name?: string | null;

		/** The customer's given (i.e., first) name. */
		given_name?: string | null;

		/** The groups the customer belongs to. */
		groups?: Array<CustomerGroupInfo>;

		/**
		 * The customer's unique ID.
		 * Required
		 */
		id: string;

		/** The customer's nickname. */
		nickname?: string | null;

		/** A note to associate with the customer. */
		note?: string | null;

		/** The customer's phone number. */
		phone_number?: string | null;

		/** Represents a particular customer's preferences. */
		preferences?: CustomerPreferences;

		/**
		 * A second ID you can set to associate the customer with an
		 * entity in another system.
		 */
		reference_id?: string | null;

		/**
		 * The time when the customer was last updated, in RFC 3339 format.
		 * Required
		 */
		updated_at: string;
	}

	/**
	 * Represents one of a business's customers, which can have one or more
	 * cards on file associated with it.
	 */
	export interface CustomerFormProperties {

		/** The name of the customer's company. */
		company_name: FormControl<string | null | undefined>,

		/**
		 * The time when the customer was created, in RFC 3339 format.
		 * Required
		 */
		created_at: FormControl<string | null | undefined>,

		/** The customer's email address. */
		email_address: FormControl<string | null | undefined>,

		/** The customer's family (i.e., last) name. */
		family_name: FormControl<string | null | undefined>,

		/** The customer's given (i.e., first) name. */
		given_name: FormControl<string | null | undefined>,

		/**
		 * The customer's unique ID.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** The customer's nickname. */
		nickname: FormControl<string | null | undefined>,

		/** A note to associate with the customer. */
		note: FormControl<string | null | undefined>,

		/** The customer's phone number. */
		phone_number: FormControl<string | null | undefined>,

		/**
		 * A second ID you can set to associate the customer with an
		 * entity in another system.
		 */
		reference_id: FormControl<string | null | undefined>,

		/**
		 * The time when the customer was last updated, in RFC 3339 format.
		 * Required
		 */
		updated_at: FormControl<string | null | undefined>,
	}
	export function CreateCustomerFormGroup() {
		return new FormGroup<CustomerFormProperties>({
			company_name: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			email_address: new FormControl<string | null | undefined>(undefined),
			family_name: new FormControl<string | null | undefined>(undefined),
			given_name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nickname: new FormControl<string | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
			phone_number: new FormControl<string | null | undefined>(undefined),
			reference_id: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains some brief information about a customer group with its identifier included. */
	export interface CustomerGroupInfo {

		/**
		 * The ID of the customer group.
		 * Required
		 */
		id: string;

		/**
		 * The name of the customer group.
		 * Required
		 */
		name: string;
	}

	/** Contains some brief information about a customer group with its identifier included. */
	export interface CustomerGroupInfoFormProperties {

		/**
		 * The ID of the customer group.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The name of the customer group.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCustomerGroupInfoFormGroup() {
		return new FormGroup<CustomerGroupInfoFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents a particular customer's preferences. */
	export interface CustomerPreferences {

		/** The customer has unsubscribed from receiving marketing campaign emails. */
		email_unsubscribed?: boolean | null;
	}

	/** Represents a particular customer's preferences. */
	export interface CustomerPreferencesFormProperties {

		/** The customer has unsubscribed from receiving marketing campaign emails. */
		email_unsubscribed: FormControl<boolean | null | undefined>,
	}
	export function CreateCustomerPreferencesFormGroup() {
		return new FormGroup<CustomerPreferencesFormProperties>({
			email_unsubscribed: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**
	 * Defines the body parameters that can be included in
	 * a request to the [CreateRefund](#endpoint-createrefund) endpoint.
	 */
	export interface CreateRefundRequest {

		/**
		 * Represents an amount of money.
		 * __Important:__ Unlike version 1 of the Connect API, __all monetary amounts
		 * returned by v2 endpoints are positive.__ (In v1, monetary amounts are negative
		 * if they represent money being paid _by_ a merchant, instead of money being
		 * paid _to_ a merchant.)
		 * Required
		 */
		amount_money: Money;

		/**
		 * A value you specify that uniquely identifies this
		 * refund among refunds you've created for the tender.
		 * If you're unsure whether a particular refund succeeded,
		 * you can reattempt it with the same idempotency key without
		 * worrying about duplicating the refund.
		 * See [Idempotency keys](#idempotencykeys) for more information.
		 * Required
		 */
		idempotency_key: string;

		/**
		 * A description of the reason for the refund.
		 * Default value: `Refund via API`
		 */
		reason?: string | null;

		/**
		 * The ID of the tender to refund.
		 * A [`Transaction`](#type-transaction) has one or more `tenders` (i.e., methods
		 * of payment) associated with it, and you refund each tender separately with
		 * the Connect API.
		 * Required
		 */
		tender_id: string;
	}

	/**
	 * Defines the body parameters that can be included in
	 * a request to the [CreateRefund](#endpoint-createrefund) endpoint.
	 */
	export interface CreateRefundRequestFormProperties {

		/**
		 * A value you specify that uniquely identifies this
		 * refund among refunds you've created for the tender.
		 * If you're unsure whether a particular refund succeeded,
		 * you can reattempt it with the same idempotency key without
		 * worrying about duplicating the refund.
		 * See [Idempotency keys](#idempotencykeys) for more information.
		 * Required
		 */
		idempotency_key: FormControl<string | null | undefined>,

		/**
		 * A description of the reason for the refund.
		 * Default value: `Refund via API`
		 */
		reason: FormControl<string | null | undefined>,

		/**
		 * The ID of the tender to refund.
		 * A [`Transaction`](#type-transaction) has one or more `tenders` (i.e., methods
		 * of payment) associated with it, and you refund each tender separately with
		 * the Connect API.
		 * Required
		 */
		tender_id: FormControl<string | null | undefined>,
	}
	export function CreateCreateRefundRequestFormGroup() {
		return new FormGroup<CreateRefundRequestFormProperties>({
			idempotency_key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reason: new FormControl<string | null | undefined>(undefined),
			tender_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**
	 * Defines the fields that are included in the response body of
	 * a request to the [CreateRefund](#endpoint-createrefund) endpoint.
	 * One of `errors` or `refund` is present in a given response (never both).
	 */
	export interface CreateRefundResponse {

		/** Any errors that occurred during the request. */
		errors?: Array<Error>;

		/** Represents a refund processed for a Square transaction. */
		refund?: Refund;
	}

	/**
	 * Defines the fields that are included in the response body of
	 * a request to the [CreateRefund](#endpoint-createrefund) endpoint.
	 * One of `errors` or `refund` is present in a given response (never both).
	 */
	export interface CreateRefundResponseFormProperties {
	}
	export function CreateCreateRefundResponseFormGroup() {
		return new FormGroup<CreateRefundResponseFormProperties>({
		});

	}


	/**
	 * Indicates the associated currency for an amount of money. Values correspond
	 * to [ISO 4217](https://wikipedia.org/wiki/ISO_4217).
	 */
	export enum Currency { AED = 0, AFN = 1, ALL = 2, AMD = 3, ANG = 4, AOA = 5, ARS = 6, AUD = 7, AWG = 8, AZN = 9, BAM = 10, BBD = 11, BDT = 12, BGN = 13, BHD = 14, BIF = 15, BMD = 16, BND = 17, BOB = 18, BOV = 19, BRL = 20, BSD = 21, BTN = 22, BWP = 23, BYR = 24, BZD = 25, CAD = 26, CDF = 27, CHE = 28, CHF = 29, CHW = 30, CLF = 31, CLP = 32, CNY = 33, COP = 34, COU = 35, CRC = 36, CUC = 37, CUP = 38, CVE = 39, CZK = 40, DJF = 41, DKK = 42, DOP = 43, DZD = 44, EGP = 45, ERN = 46, ETB = 47, EUR = 48, FJD = 49, FKP = 50, GBP = 51, GEL = 52, GHS = 53, GIP = 54, GMD = 55, GNF = 56, GTQ = 57, GYD = 58, HKD = 59, HNL = 60, HRK = 61, HTG = 62, HUF = 63, IDR = 64, ILS = 65, INR = 66, IQD = 67, IRR = 68, ISK = 69, JMD = 70, JOD = 71, JPY = 72, KES = 73, KGS = 74, KHR = 75, KMF = 76, KPW = 77, KRW = 78, KWD = 79, KYD = 80, KZT = 81, LAK = 82, LBP = 83, LKR = 84, LRD = 85, LSL = 86, LTL = 87, LVL = 88, LYD = 89, MAD = 90, MDL = 91, MGA = 92, MKD = 93, MMK = 94, MNT = 95, MOP = 96, MRO = 97, MUR = 98, MVR = 99, MWK = 100, MXN = 101, MXV = 102, MYR = 103, MZN = 104, NAD = 105, NGN = 106, NIO = 107, NOK = 108, NPR = 109, NZD = 110, OMR = 111, PAB = 112, PEN = 113, PGK = 114, PHP = 115, PKR = 116, PLN = 117, PYG = 118, QAR = 119, RON = 120, RSD = 121, RUB = 122, RWF = 123, SAR = 124, SBD = 125, SCR = 126, SDG = 127, SEK = 128, SGD = 129, SHP = 130, SLL = 131, SOS = 132, SRD = 133, SSP = 134, STD = 135, SVC = 136, SYP = 137, SZL = 138, THB = 139, TJS = 140, TMT = 141, TND = 142, TOP = 143, TRY = 144, TTD = 145, TWD = 146, TZS = 147, UAH = 148, UGX = 149, USD = 150, USN = 151, USS = 152, UYI = 153, UYU = 154, UZS = 155, VEF = 156, VND = 157, VUV = 158, WST = 159, XAF = 160, XAG = 161, XAU = 162, XBA = 163, XBB = 164, XBC = 165, XBD = 166, XCD = 167, XDR = 168, XOF = 169, XPD = 170, XPF = 171, XPT = 172, XTS = 173, XXX = 174, YER = 175, ZAR = 176, ZMK = 177, ZMW = 178, BTC = 179 }

	export interface DeleteCatalogObjectRequest {
	}
	export interface DeleteCatalogObjectRequestFormProperties {
	}
	export function CreateDeleteCatalogObjectRequestFormGroup() {
		return new FormGroup<DeleteCatalogObjectRequestFormProperties>({
		});

	}

	export interface DeleteCatalogObjectResponse {

		/**
		 * The database [timestamp](#workingwithdates) of this deletion in RFC 3339 format, e.g.,
		 * "2016-09-04T23:59:33.123Z".
		 */
		deleted_at?: string | null;

		/**
		 * The IDs of all [CatalogObject](#type-catalogobject)s deleted by this request.
		 * Multiple IDs may be returned when associated objects are also deleted, for example
		 * a [CatalogItemVariation](#type-catalogitemvariation) will be deleted (and its ID included in this field)
		 * when its parent [CatalogItem](#type-catalogitem) is deleted.
		 */
		deleted_object_ids?: Array<string>;

		/** The set of [Error](#type-error)s encountered. */
		errors?: Array<Error>;
	}
	export interface DeleteCatalogObjectResponseFormProperties {

		/**
		 * The database [timestamp](#workingwithdates) of this deletion in RFC 3339 format, e.g.,
		 * "2016-09-04T23:59:33.123Z".
		 */
		deleted_at: FormControl<string | null | undefined>,
	}
	export function CreateDeleteCatalogObjectResponseFormGroup() {
		return new FormGroup<DeleteCatalogObjectResponseFormProperties>({
			deleted_at: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteCustomerCardRequest {
	}
	export interface DeleteCustomerCardRequestFormProperties {
	}
	export function CreateDeleteCustomerCardRequestFormGroup() {
		return new FormGroup<DeleteCustomerCardRequestFormProperties>({
		});

	}


	/**
	 * Defines the fields that are included in the response body of
	 * a request to the [DeleteCustomerCard](#endpoint-deletecustomercard) endpoint.
	 */
	export interface DeleteCustomerCardResponse {

		/** Any errors that occurred during the request. */
		errors?: Array<Error>;
	}

	/**
	 * Defines the fields that are included in the response body of
	 * a request to the [DeleteCustomerCard](#endpoint-deletecustomercard) endpoint.
	 */
	export interface DeleteCustomerCardResponseFormProperties {
	}
	export function CreateDeleteCustomerCardResponseFormGroup() {
		return new FormGroup<DeleteCustomerCardResponseFormProperties>({
		});

	}

	export interface DeleteCustomerRequest {
	}
	export interface DeleteCustomerRequestFormProperties {
	}
	export function CreateDeleteCustomerRequestFormGroup() {
		return new FormGroup<DeleteCustomerRequestFormProperties>({
		});

	}


	/**
	 * Defines the fields that are included in the response body of
	 * a request to the [DeleteCustomer](#endpoint-deletecustomer) endpoint.
	 */
	export interface DeleteCustomerResponse {

		/** Any errors that occurred during the request. */
		errors?: Array<Error>;
	}

	/**
	 * Defines the fields that are included in the response body of
	 * a request to the [DeleteCustomer](#endpoint-deletecustomer) endpoint.
	 */
	export interface DeleteCustomerResponseFormProperties {
	}
	export function CreateDeleteCustomerResponseFormGroup() {
		return new FormGroup<DeleteCustomerResponseFormProperties>({
		});

	}

	export interface Device {

		/** The device's Square-issued ID. */
		id?: string | null;

		/** The device's merchant-specified name. */
		name?: string | null;
	}
	export interface DeviceFormProperties {

		/** The device's Square-issued ID. */
		id: FormControl<string | null | undefined>,

		/** The device's merchant-specified name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDeviceFormGroup() {
		return new FormGroup<DeviceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Indicates whether Square should alert the merchant when the inventory quantity of a [CatalogItemVariation](#type-catalogitemvariation) is low. */
	export enum InventoryAlertType { NONE = 0, LOW_QUANTITY = 1 }

	export interface ListCatalogRequest {

		/**
		 * The pagination cursor returned in the previous response. Leave unset for an initial request.
		 * See [Paginating results](#paginatingresults) for more information.
		 */
		cursor?: string | null;

		/**
		 * An optional case-insensitive, comma-separated list of object types to retrieve, for example
		 * `ITEM,ITEM_VARIATION,CATEGORY`.
		 * The legal values are taken from the [CatalogObjectType](#type-catalogobjecttype)
		 * enumeration, namely `"ITEM"`, `"ITEM_VARIATION"`, `"CATEGORY"`, `"DISCOUNT"`, `"TAX"`,
		 * `"MODIFIER"`, or `"MODIFIER_LIST"`.
		 */
		types?: string | null;
	}
	export interface ListCatalogRequestFormProperties {

		/**
		 * The pagination cursor returned in the previous response. Leave unset for an initial request.
		 * See [Paginating results](#paginatingresults) for more information.
		 */
		cursor: FormControl<string | null | undefined>,

		/**
		 * An optional case-insensitive, comma-separated list of object types to retrieve, for example
		 * `ITEM,ITEM_VARIATION,CATEGORY`.
		 * The legal values are taken from the [CatalogObjectType](#type-catalogobjecttype)
		 * enumeration, namely `"ITEM"`, `"ITEM_VARIATION"`, `"CATEGORY"`, `"DISCOUNT"`, `"TAX"`,
		 * `"MODIFIER"`, or `"MODIFIER_LIST"`.
		 */
		types: FormControl<string | null | undefined>,
	}
	export function CreateListCatalogRequestFormGroup() {
		return new FormGroup<ListCatalogRequestFormProperties>({
			cursor: new FormControl<string | null | undefined>(undefined),
			types: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCatalogResponse {

		/**
		 * The pagination cursor to be used in a subsequent request. If unset, this is the final response.
		 * See [Paginating results](#paginatingresults) for more information.
		 */
		cursor?: string | null;

		/** The set of [Error](#type-error)s encountered. */
		errors?: Array<Error>;

		/** The [CatalogObject](#type-catalogobject)s returned. */
		objects?: Array<CatalogObject>;
	}
	export interface ListCatalogResponseFormProperties {

		/**
		 * The pagination cursor to be used in a subsequent request. If unset, this is the final response.
		 * See [Paginating results](#paginatingresults) for more information.
		 */
		cursor: FormControl<string | null | undefined>,
	}
	export function CreateListCatalogResponseFormGroup() {
		return new FormGroup<ListCatalogResponseFormProperties>({
			cursor: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Defines the query parameters that can be provided in a request to the
	 * [ListCustomers](#endpoint-listcustomers) endpoint.
	 */
	export interface ListCustomersRequest {

		/**
		 * A pagination cursor returned by a previous call to this endpoint.
		 * Provide this to retrieve the next set of results for your original query.
		 * See [Paginating results](#paginatingresults) for more information.
		 */
		cursor?: string | null;
	}

	/**
	 * Defines the query parameters that can be provided in a request to the
	 * [ListCustomers](#endpoint-listcustomers) endpoint.
	 */
	export interface ListCustomersRequestFormProperties {

		/**
		 * A pagination cursor returned by a previous call to this endpoint.
		 * Provide this to retrieve the next set of results for your original query.
		 * See [Paginating results](#paginatingresults) for more information.
		 */
		cursor: FormControl<string | null | undefined>,
	}
	export function CreateListCustomersRequestFormGroup() {
		return new FormGroup<ListCustomersRequestFormProperties>({
			cursor: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Defines the fields that are included in the response body of
	 * a request to the [ListCustomers](#endpoint-listcustomers) endpoint.
	 * One of `errors` or `customers` is present in a given response (never both).
	 */
	export interface ListCustomersResponse {

		/**
		 * A pagination cursor to retrieve the next set of results for your
		 * original query to the endpoint. This value is present only if the request
		 * succeeded and additional results are available.
		 * See [Paginating results](#paginatingresults) for more information.
		 */
		cursor?: string | null;

		/** An array of `Customer` objects that match your query. */
		customers?: Array<Customer>;

		/** Any errors that occurred during the request. */
		errors?: Array<Error>;
	}

	/**
	 * Defines the fields that are included in the response body of
	 * a request to the [ListCustomers](#endpoint-listcustomers) endpoint.
	 * One of `errors` or `customers` is present in a given response (never both).
	 */
	export interface ListCustomersResponseFormProperties {

		/**
		 * A pagination cursor to retrieve the next set of results for your
		 * original query to the endpoint. This value is present only if the request
		 * succeeded and additional results are available.
		 * See [Paginating results](#paginatingresults) for more information.
		 */
		cursor: FormControl<string | null | undefined>,
	}
	export function CreateListCustomersResponseFormGroup() {
		return new FormGroup<ListCustomersResponseFormProperties>({
			cursor: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListLocationsRequest {
	}
	export interface ListLocationsRequestFormProperties {
	}
	export function CreateListLocationsRequestFormGroup() {
		return new FormGroup<ListLocationsRequestFormProperties>({
		});

	}


	/**
	 * Defines the fields that are included in the response body of
	 * a request to the [ListLocations](#endpoint-listlocations) endpoint.
	 * One of `errors` or `locations` is present in a given response (never both).
	 */
	export interface ListLocationsResponse {

		/** Any errors that occurred during the request. */
		errors?: Array<Error>;

		/** The business's locations. */
		locations?: Array<Location>;
	}

	/**
	 * Defines the fields that are included in the response body of
	 * a request to the [ListLocations](#endpoint-listlocations) endpoint.
	 * One of `errors` or `locations` is present in a given response (never both).
	 */
	export interface ListLocationsResponseFormProperties {
	}
	export function CreateListLocationsResponseFormGroup() {
		return new FormGroup<ListLocationsResponseFormProperties>({
		});

	}


	/** Represents one of a business's locations. */
	export interface Location {

		/** Represents a physical address. */
		address?: Address;

		/**
		 * Indicates which Square features are enabled for the location.
		 * See [LocationCapability](#type-locationcapability) for possible values.
		 */
		capabilities?: Array<string>;

		/** The location's unique ID. */
		id?: string | null;

		/** The location's name. */
		name?: string | null;

		/**
		 * The [IANA Timezone Database](https://www.iana.org/time-zones)
		 * identifier for the location's timezone.
		 */
		timezone?: string | null;
	}

	/** Represents one of a business's locations. */
	export interface LocationFormProperties {

		/** The location's unique ID. */
		id: FormControl<string | null | undefined>,

		/** The location's name. */
		name: FormControl<string | null | undefined>,

		/**
		 * The [IANA Timezone Database](https://www.iana.org/time-zones)
		 * identifier for the location's timezone.
		 */
		timezone: FormControl<string | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			timezone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Defines the query parameters that can be included in
	 * a request to the [ListRefunds](#endpoint-listrefunds) endpoint.
	 */
	export interface ListRefundsRequest {

		/**
		 * The beginning of the requested reporting period, in RFC 3339 format.
		 * See [Date ranges](#dateranges) for details on date inclusivity/exclusivity.
		 * Default value: The current time minus one year.
		 */
		begin_time?: string | null;

		/**
		 * A pagination cursor returned by a previous call to this endpoint.
		 * Provide this to retrieve the next set of results for your original query.
		 * See [Paginating results](#paginatingresults) for more information.
		 */
		cursor?: string | null;

		/**
		 * The end of the requested reporting period, in RFC 3339 format.
		 * See [Date ranges](#dateranges) for details on date inclusivity/exclusivity.
		 * Default value: The current time.
		 */
		end_time?: string | null;

		/**
		 * The order in which results are listed in the response (`ASC` for
		 * oldest first, `DESC` for newest first).
		 * Default value: `DESC`
		 */
		sort_order?: CatalogQuerySortedAttributeSort_order | null;
	}

	/**
	 * Defines the query parameters that can be included in
	 * a request to the [ListRefunds](#endpoint-listrefunds) endpoint.
	 */
	export interface ListRefundsRequestFormProperties {

		/**
		 * The beginning of the requested reporting period, in RFC 3339 format.
		 * See [Date ranges](#dateranges) for details on date inclusivity/exclusivity.
		 * Default value: The current time minus one year.
		 */
		begin_time: FormControl<string | null | undefined>,

		/**
		 * A pagination cursor returned by a previous call to this endpoint.
		 * Provide this to retrieve the next set of results for your original query.
		 * See [Paginating results](#paginatingresults) for more information.
		 */
		cursor: FormControl<string | null | undefined>,

		/**
		 * The end of the requested reporting period, in RFC 3339 format.
		 * See [Date ranges](#dateranges) for details on date inclusivity/exclusivity.
		 * Default value: The current time.
		 */
		end_time: FormControl<string | null | undefined>,

		/**
		 * The order in which results are listed in the response (`ASC` for
		 * oldest first, `DESC` for newest first).
		 * Default value: `DESC`
		 */
		sort_order: FormControl<CatalogQuerySortedAttributeSort_order | null | undefined>,
	}
	export function CreateListRefundsRequestFormGroup() {
		return new FormGroup<ListRefundsRequestFormProperties>({
			begin_time: new FormControl<string | null | undefined>(undefined),
			cursor: new FormControl<string | null | undefined>(undefined),
			end_time: new FormControl<string | null | undefined>(undefined),
			sort_order: new FormControl<CatalogQuerySortedAttributeSort_order | null | undefined>(undefined),
		});

	}


	/**
	 * Defines the fields that are included in the response body of
	 * a request to the [ListRefunds](#endpoint-listrefunds) endpoint.
	 * One of `errors` or `refunds` is present in a given response (never both).
	 */
	export interface ListRefundsResponse {

		/**
		 * A pagination cursor for retrieving the next set of results,
		 * if any remain. Provide this value as the `cursor` parameter in a subsequent
		 * request to this endpoint.
		 * See [Paginating results](#paginatingresults) for more information.
		 */
		cursor?: string | null;

		/** Any errors that occurred during the request. */
		errors?: Array<Error>;

		/** An array of refunds that match your query. */
		refunds?: Array<Refund>;
	}

	/**
	 * Defines the fields that are included in the response body of
	 * a request to the [ListRefunds](#endpoint-listrefunds) endpoint.
	 * One of `errors` or `refunds` is present in a given response (never both).
	 */
	export interface ListRefundsResponseFormProperties {

		/**
		 * A pagination cursor for retrieving the next set of results,
		 * if any remain. Provide this value as the `cursor` parameter in a subsequent
		 * request to this endpoint.
		 * See [Paginating results](#paginatingresults) for more information.
		 */
		cursor: FormControl<string | null | undefined>,
	}
	export function CreateListRefundsResponseFormGroup() {
		return new FormGroup<ListRefundsResponseFormProperties>({
			cursor: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Defines the query parameters that can be included in
	 * a request to the [ListTransactions](#endpoint-listtransactions) endpoint.
	 */
	export interface ListTransactionsRequest {

		/**
		 * The beginning of the requested reporting period, in RFC 3339 format.
		 * See [Date ranges](#dateranges) for details on date inclusivity/exclusivity.
		 * Default value: The current time minus one year.
		 */
		begin_time?: string | null;

		/**
		 * A pagination cursor returned by a previous call to this endpoint.
		 * Provide this to retrieve the next set of results for your original query.
		 * See [Paginating results](#paginatingresults) for more information.
		 */
		cursor?: string | null;

		/**
		 * The end of the requested reporting period, in RFC 3339 format.
		 * See [Date ranges](#dateranges) for details on date inclusivity/exclusivity.
		 * Default value: The current time.
		 */
		end_time?: string | null;

		/**
		 * The order in which results are listed in the response (`ASC` for
		 * oldest first, `DESC` for newest first).
		 * Default value: `DESC`
		 */
		sort_order?: CatalogQuerySortedAttributeSort_order | null;
	}

	/**
	 * Defines the query parameters that can be included in
	 * a request to the [ListTransactions](#endpoint-listtransactions) endpoint.
	 */
	export interface ListTransactionsRequestFormProperties {

		/**
		 * The beginning of the requested reporting period, in RFC 3339 format.
		 * See [Date ranges](#dateranges) for details on date inclusivity/exclusivity.
		 * Default value: The current time minus one year.
		 */
		begin_time: FormControl<string | null | undefined>,

		/**
		 * A pagination cursor returned by a previous call to this endpoint.
		 * Provide this to retrieve the next set of results for your original query.
		 * See [Paginating results](#paginatingresults) for more information.
		 */
		cursor: FormControl<string | null | undefined>,

		/**
		 * The end of the requested reporting period, in RFC 3339 format.
		 * See [Date ranges](#dateranges) for details on date inclusivity/exclusivity.
		 * Default value: The current time.
		 */
		end_time: FormControl<string | null | undefined>,

		/**
		 * The order in which results are listed in the response (`ASC` for
		 * oldest first, `DESC` for newest first).
		 * Default value: `DESC`
		 */
		sort_order: FormControl<CatalogQuerySortedAttributeSort_order | null | undefined>,
	}
	export function CreateListTransactionsRequestFormGroup() {
		return new FormGroup<ListTransactionsRequestFormProperties>({
			begin_time: new FormControl<string | null | undefined>(undefined),
			cursor: new FormControl<string | null | undefined>(undefined),
			end_time: new FormControl<string | null | undefined>(undefined),
			sort_order: new FormControl<CatalogQuerySortedAttributeSort_order | null | undefined>(undefined),
		});

	}


	/**
	 * Defines the fields that are included in the response body of
	 * a request to the [ListTransactions](#endpoint-listtransactions) endpoint.
	 * One of `errors` or `transactions` is present in a given response (never both).
	 */
	export interface ListTransactionsResponse {

		/**
		 * A pagination cursor for retrieving the next set of results,
		 * if any remain. Provide this value as the `cursor` parameter in a subsequent
		 * request to this endpoint.
		 * See [Paginating results](#paginatingresults) for more information.
		 */
		cursor?: string | null;

		/** Any errors that occurred during the request. */
		errors?: Array<Error>;

		/** An array of transactions that match your query. */
		transactions?: Array<Transaction>;
	}

	/**
	 * Defines the fields that are included in the response body of
	 * a request to the [ListTransactions](#endpoint-listtransactions) endpoint.
	 * One of `errors` or `transactions` is present in a given response (never both).
	 */
	export interface ListTransactionsResponseFormProperties {

		/**
		 * A pagination cursor for retrieving the next set of results,
		 * if any remain. Provide this value as the `cursor` parameter in a subsequent
		 * request to this endpoint.
		 * See [Paginating results](#paginatingresults) for more information.
		 */
		cursor: FormControl<string | null | undefined>,
	}
	export function CreateListTransactionsResponseFormGroup() {
		return new FormGroup<ListTransactionsResponseFormProperties>({
			cursor: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Indicates account capabilities that a business's location might or
	 * might not have enabled.
	 */
	export enum LocationCapability { CREDIT_CARD_PROCESSING = 0 }

	export interface RetrieveCatalogObjectRequest {

		/**
		 * If `true`, the response will include additional objects that are related to the
		 * requested object, as follows:
		 * If the `object` field of the response contains a [CatalogItem](#type-catalogitem),
		 * its associated [CatalogCategory](#type-catalogcategory), [CatalogTax](#type-catalogtax)es, and
		 * [CatalogModifierList](#type-catalogmodifierlist)s will be returned in the `related_objects` field of the
		 * response. If the `object` field of the response contains a [CatalogItemVariation](#type-catalogitemvariation),
		 * its parent [CatalogItem](#type-catalogitem) will be returned in the `related_objects` field of
		 * the response.
		 * Default value: `false`
		 */
		include_related_objects?: boolean | null;
	}
	export interface RetrieveCatalogObjectRequestFormProperties {

		/**
		 * If `true`, the response will include additional objects that are related to the
		 * requested object, as follows:
		 * If the `object` field of the response contains a [CatalogItem](#type-catalogitem),
		 * its associated [CatalogCategory](#type-catalogcategory), [CatalogTax](#type-catalogtax)es, and
		 * [CatalogModifierList](#type-catalogmodifierlist)s will be returned in the `related_objects` field of the
		 * response. If the `object` field of the response contains a [CatalogItemVariation](#type-catalogitemvariation),
		 * its parent [CatalogItem](#type-catalogitem) will be returned in the `related_objects` field of
		 * the response.
		 * Default value: `false`
		 */
		include_related_objects: FormControl<boolean | null | undefined>,
	}
	export function CreateRetrieveCatalogObjectRequestFormGroup() {
		return new FormGroup<RetrieveCatalogObjectRequestFormProperties>({
			include_related_objects: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface RetrieveCatalogObjectResponse {

		/** The set of [Error](#type-error)s encountered. */
		errors?: Array<Error>;

		/**
		 * The wrapper object for object types in the Catalog data model. The type
		 * of a particular `CatalogObject` is determined by the value of
		 * `type` and only the corresponding data field may be set.
		 * - if type = `ITEM`, only `item_data` will be populated and it will contain a valid [CatalogItem](#type-catalogitem) object.
		 * - if type = `ITEM_VARIATION`, only `item_variation_data` will be populated and it will contain a valid [CatalogItemVariation](#type-catalogitemvariation) object.
		 * - if type = `MODIFIER`, only `modifier_data` will be populated and it will contain a valid [CatalogModifier](#type-catalogmodifier) object.
		 * - if type = `MODIFIER_LIST`, only `modifier_list_data` will be populated and it will contain a valid [CatalogModifierList](#type-catalogmodifierlist) object.
		 * - if type = `CATEGORY`, only `category_data` will be populated and it will contain a valid [CatalogCategory](#type-catalogcategory) object.
		 * - if type = `DISCOUNT`, only `discount_data` will be populated and it will contain a valid [CatalogDiscount](#type-catalogdiscount) object.
		 * - if type = `TAX`, only `tax_data` will be populated and it will contain a valid [CatalogTax](#type-catalogtax) object.
		 * For a more detailed discussion of the Catalog data model, please see the
		 * [Catalog Overview](https://docs.connect.squareup.com/articles/catalog-overview).
		 */
		object?: CatalogObject;

		/** A list of [CatalogObject](#type-catalogobject)s referenced by the object in the `object` field. */
		related_objects?: Array<CatalogObject>;
	}
	export interface RetrieveCatalogObjectResponseFormProperties {
	}
	export function CreateRetrieveCatalogObjectResponseFormGroup() {
		return new FormGroup<RetrieveCatalogObjectResponseFormProperties>({
		});

	}

	export interface RetrieveCustomerRequest {
	}
	export interface RetrieveCustomerRequestFormProperties {
	}
	export function CreateRetrieveCustomerRequestFormGroup() {
		return new FormGroup<RetrieveCustomerRequestFormProperties>({
		});

	}


	/**
	 * Defines the fields that are included in the response body of
	 * a request to the [RetrieveCustomer](#endpoint-retrievecustomer) endpoint.
	 * One of `errors` or `customer` is present in a given response (never both).
	 */
	export interface RetrieveCustomerResponse {

		/**
		 * Represents one of a business's customers, which can have one or more
		 * cards on file associated with it.
		 */
		customer?: Customer;

		/** Any errors that occurred during the request. */
		errors?: Array<Error>;
	}

	/**
	 * Defines the fields that are included in the response body of
	 * a request to the [RetrieveCustomer](#endpoint-retrievecustomer) endpoint.
	 * One of `errors` or `customer` is present in a given response (never both).
	 */
	export interface RetrieveCustomerResponseFormProperties {
	}
	export function CreateRetrieveCustomerResponseFormGroup() {
		return new FormGroup<RetrieveCustomerResponseFormProperties>({
		});

	}

	export interface RetrieveTransactionRequest {
	}
	export interface RetrieveTransactionRequestFormProperties {
	}
	export function CreateRetrieveTransactionRequestFormGroup() {
		return new FormGroup<RetrieveTransactionRequestFormProperties>({
		});

	}


	/**
	 * Defines the fields that are included in the response body of
	 * a request to the [RetrieveTransaction](#endpont-retrievetransaction) endpoint.
	 * One of `errors` or `transaction` is present in a given response (never both).
	 */
	export interface RetrieveTransactionResponse {

		/** Any errors that occurred during the request. */
		errors?: Array<Error>;

		/**
		 * Represents a transaction processed with Square, either with the
		 * Connect API or with Square Point of Sale.
		 * The `tenders` field of this object lists all methods of payment used to pay in
		 * the transaction.
		 */
		transaction?: Transaction;
	}

	/**
	 * Defines the fields that are included in the response body of
	 * a request to the [RetrieveTransaction](#endpont-retrievetransaction) endpoint.
	 * One of `errors` or `transaction` is present in a given response (never both).
	 */
	export interface RetrieveTransactionResponseFormProperties {
	}
	export function CreateRetrieveTransactionResponseFormGroup() {
		return new FormGroup<RetrieveTransactionResponseFormProperties>({
		});

	}

	export interface SearchCatalogObjectsRequest {

		/**
		 * Return only objects that have been modified after this [timestamp](#workingwithdates)
		 * (in RFC 3339 format, e.g., "2016-09-04T23:59:33.123Z"). The timestamp is exclusive -
		 * objects whose timestamp is equal to `begin_time` will not be included in the response.
		 */
		begin_time?: string | null;

		/**
		 * The pagination cursor returned in the previous response. Leave unset for an initial request.
		 * See [Paginating results](#paginatingresults) for more information.
		 */
		cursor?: string | null;

		/**
		 * If `true`, deleted objects will be included in the results. Deleted objects will have their
		 * `is_deleted` field set to `true`.
		 */
		include_deleted_objects?: boolean | null;

		/**
		 * If `true`, the response will include additional objects that are related to the
		 * requested object, as follows:
		 * If a [CatalogItem](#type-catalogitem) is returned in the object field of the response,
		 * its associated [CatalogCategory](#type-catalogcategory), [CatalogTax](#type-catalogtax)es, and
		 * [CatalogModifierList](#type-catalogmodifierlist)s will be included in the `related_objects` field of the
		 * response.
		 * If a [CatalogItemVariation](#type-catalogitemvariation) is returned in the object field of the
		 * response, its parent [CatalogItem](#type-catalogitem) will be included in the `related_objects` field of
		 * the response.
		 */
		include_related_objects?: boolean | null;

		/**
		 * A limit on the number of results to be returned in a single page. The limit is advisory -
		 * the implementation may return more or fewer results. If the supplied limit is negative, zero, or
		 * is higher than the maximum limit of 1,000, it will be ignored.
		 */
		limit?: number | null;

		/**
		 * The desired set of object types to appear in the search results. The legal values are taken from the
		 * [CatalogObjectType](#type-catalogobjecttype) enumeration, namely `"ITEM"`, `"ITEM_VARIATION"`, `"CATEGORY"`,
		 * `"DISCOUNT"`, `"TAX"`, `"MODIFIER"`, or `"MODIFIER_LIST"`.
		 */
		object_types?: Array<CatalogObjectType>;

		/**
		 * A query to be applied to a [SearchCatalogObjectsRequest](#type-searchcatalogobjectsrequest).
		 * Only one query field may be present.
		 * Where an attribute name is required, it should be specified as the name of any field
		 * marked "searchable" from the structured data types for the desired result object type(s)
		 * ([CatalogItem](#type-catalogitem), [CatalogItemVariation](#type-catalogitemvariation),
		 * [CatalogCategory](#type-catalogcategory), [CatalogTax](#type-catalogtax),
		 * [CatalogDiscount](#type-catalogdiscount), [CatalogModifierList](#type-catalogmodifierlist),
		 * [CatalogModifier](#type-catalogmodifier)).
		 * For example, a query that should return Items may specify attribute names from
		 * any of the searchable fields of the [CatalogItem](#type-catalogitem) data type, namely
		 * `"name"`, `"description"`, and `"abbreviation"`.
		 */
		query?: CatalogQuery;
	}
	export interface SearchCatalogObjectsRequestFormProperties {

		/**
		 * Return only objects that have been modified after this [timestamp](#workingwithdates)
		 * (in RFC 3339 format, e.g., "2016-09-04T23:59:33.123Z"). The timestamp is exclusive -
		 * objects whose timestamp is equal to `begin_time` will not be included in the response.
		 */
		begin_time: FormControl<string | null | undefined>,

		/**
		 * The pagination cursor returned in the previous response. Leave unset for an initial request.
		 * See [Paginating results](#paginatingresults) for more information.
		 */
		cursor: FormControl<string | null | undefined>,

		/**
		 * If `true`, deleted objects will be included in the results. Deleted objects will have their
		 * `is_deleted` field set to `true`.
		 */
		include_deleted_objects: FormControl<boolean | null | undefined>,

		/**
		 * If `true`, the response will include additional objects that are related to the
		 * requested object, as follows:
		 * If a [CatalogItem](#type-catalogitem) is returned in the object field of the response,
		 * its associated [CatalogCategory](#type-catalogcategory), [CatalogTax](#type-catalogtax)es, and
		 * [CatalogModifierList](#type-catalogmodifierlist)s will be included in the `related_objects` field of the
		 * response.
		 * If a [CatalogItemVariation](#type-catalogitemvariation) is returned in the object field of the
		 * response, its parent [CatalogItem](#type-catalogitem) will be included in the `related_objects` field of
		 * the response.
		 */
		include_related_objects: FormControl<boolean | null | undefined>,

		/**
		 * A limit on the number of results to be returned in a single page. The limit is advisory -
		 * the implementation may return more or fewer results. If the supplied limit is negative, zero, or
		 * is higher than the maximum limit of 1,000, it will be ignored.
		 */
		limit: FormControl<number | null | undefined>,
	}
	export function CreateSearchCatalogObjectsRequestFormGroup() {
		return new FormGroup<SearchCatalogObjectsRequestFormProperties>({
			begin_time: new FormControl<string | null | undefined>(undefined),
			cursor: new FormControl<string | null | undefined>(undefined),
			include_deleted_objects: new FormControl<boolean | null | undefined>(undefined),
			include_related_objects: new FormControl<boolean | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SearchCatalogObjectsResponse {

		/**
		 * The pagination cursor to be used in a subsequent request. If unset, this is the final response.
		 * See [Paginating results](#paginatingresults) for more information.
		 */
		cursor?: string | null;

		/** The set of [Error](#type-error)s encountered. */
		errors?: Array<Error>;

		/** The [CatalogObject](#type-catalogobject)s returned. */
		objects?: Array<CatalogObject>;

		/** A list of [CatalogObject](#type-catalogobject)s referenced by the objects in the `objects` field. */
		related_objects?: Array<CatalogObject>;
	}
	export interface SearchCatalogObjectsResponseFormProperties {

		/**
		 * The pagination cursor to be used in a subsequent request. If unset, this is the final response.
		 * See [Paginating results](#paginatingresults) for more information.
		 */
		cursor: FormControl<string | null | undefined>,
	}
	export function CreateSearchCatalogObjectsResponseFormGroup() {
		return new FormGroup<SearchCatalogObjectsResponseFormProperties>({
			cursor: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The order (e.g., chronological or alphabetical) in which results from a request are returned. */
	export enum SortOrder { DESC = 0, ASC = 1 }


	/** When to calculate the taxes due on a cart. */
	export enum TaxCalculationPhase { TAX_SUBTOTAL_PHASE = 0, TAX_TOTAL_PHASE = 1 }


	/** Whether to the tax amount should be additional to or included in to the [CatalogItem](#type-catalogitem) price. */
	export enum TaxInclusionType { ADDITIVE = 0, INCLUSIVE = 1 }


	/** Indicates the method used to enter the card's details. */
	export enum TenderCardDetailsEntryMethod { SWIPED = 0, KEYED = 1, EMV = 2, ON_FILE = 3, CONTACTLESS = 4 }


	/**
	 * Defines the body parameters that can be provided in a request to the
	 * [UpdateCustomer](#endpoint-updatecustomer) endpoint.
	 */
	export interface UpdateCustomerRequest {

		/** Represents a physical address. */
		address?: Address;

		/** The name of the customer's company. */
		company_name?: string | null;

		/** The customer's email address. */
		email_address?: string | null;

		/** The customer's family (i.e., last) name. */
		family_name?: string | null;

		/** The customer's given (i.e., first) name. */
		given_name?: string | null;

		/** A nickname for the customer. */
		nickname?: string | null;

		/** An optional note to associate with the customer. */
		note?: string | null;

		/** The customer's phone number. */
		phone_number?: string | null;

		/**
		 * An optional second ID you can set to associate the customer with an
		 * entity in another system.
		 */
		reference_id?: string | null;
	}

	/**
	 * Defines the body parameters that can be provided in a request to the
	 * [UpdateCustomer](#endpoint-updatecustomer) endpoint.
	 */
	export interface UpdateCustomerRequestFormProperties {

		/** The name of the customer's company. */
		company_name: FormControl<string | null | undefined>,

		/** The customer's email address. */
		email_address: FormControl<string | null | undefined>,

		/** The customer's family (i.e., last) name. */
		family_name: FormControl<string | null | undefined>,

		/** The customer's given (i.e., first) name. */
		given_name: FormControl<string | null | undefined>,

		/** A nickname for the customer. */
		nickname: FormControl<string | null | undefined>,

		/** An optional note to associate with the customer. */
		note: FormControl<string | null | undefined>,

		/** The customer's phone number. */
		phone_number: FormControl<string | null | undefined>,

		/**
		 * An optional second ID you can set to associate the customer with an
		 * entity in another system.
		 */
		reference_id: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCustomerRequestFormGroup() {
		return new FormGroup<UpdateCustomerRequestFormProperties>({
			company_name: new FormControl<string | null | undefined>(undefined),
			email_address: new FormControl<string | null | undefined>(undefined),
			family_name: new FormControl<string | null | undefined>(undefined),
			given_name: new FormControl<string | null | undefined>(undefined),
			nickname: new FormControl<string | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
			phone_number: new FormControl<string | null | undefined>(undefined),
			reference_id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Defines the fields that are included in the response body of
	 * a request to the [UpdateCustomer](#endpoint-updatecustomer) endpoint.
	 * One of `errors` or `customer` is present in a given response (never both).
	 */
	export interface UpdateCustomerResponse {

		/**
		 * Represents one of a business's customers, which can have one or more
		 * cards on file associated with it.
		 */
		customer?: Customer;

		/** Any errors that occurred during the request. */
		errors?: Array<Error>;
	}

	/**
	 * Defines the fields that are included in the response body of
	 * a request to the [UpdateCustomer](#endpoint-updatecustomer) endpoint.
	 * One of `errors` or `customer` is present in a given response (never both).
	 */
	export interface UpdateCustomerResponseFormProperties {
	}
	export function CreateUpdateCustomerResponseFormGroup() {
		return new FormGroup<UpdateCustomerResponseFormProperties>({
		});

	}

	export interface UpdateItemModifierListsRequest {

		/**
		 * The [CatalogItem](#type-catalogitem)s whose [CatalogModifierList](#type-catalogmodifierlist)s are being updated.
		 * Required
		 */
		item_ids: Array<string>;

		/** The set of [CatalogModifierList](#type-catalogmodifierlist)s (referenced by ID) to disable for the [CatalogItem](#type-catalogitem). */
		modifier_lists_to_disable?: Array<string>;

		/** The set of [CatalogModifierList](#type-catalogmodifierlist)s (referenced by ID) to enable for the [CatalogItem](#type-catalogitem). */
		modifier_lists_to_enable?: Array<string>;
	}
	export interface UpdateItemModifierListsRequestFormProperties {
	}
	export function CreateUpdateItemModifierListsRequestFormGroup() {
		return new FormGroup<UpdateItemModifierListsRequestFormProperties>({
		});

	}

	export interface UpdateItemModifierListsResponse {

		/** The set of [Error](#type-error)s encountered. */
		errors?: Array<Error>;

		/** The database [timestamp](#workingwithdates) of this update in RFC 3339 format, e.g., "2016-09-04T23:59:33.123Z". */
		updated_at?: string | null;
	}
	export interface UpdateItemModifierListsResponseFormProperties {

		/** The database [timestamp](#workingwithdates) of this update in RFC 3339 format, e.g., "2016-09-04T23:59:33.123Z". */
		updated_at: FormControl<string | null | undefined>,
	}
	export function CreateUpdateItemModifierListsResponseFormGroup() {
		return new FormGroup<UpdateItemModifierListsResponseFormProperties>({
			updated_at: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateItemTaxesRequest {

		/**
		 * The [CatalogItem](#type-catalogitem)s whose enabled/disabled [CatalogTax](#type-catalogtax)es are being updated.
		 * Required
		 */
		item_ids: Array<string>;

		/** The set of [CatalogTax](#type-catalogtax)es (referenced by ID) to disable for the [CatalogItem](#type-catalogitem). */
		taxes_to_disable?: Array<string>;

		/** The set of [CatalogTax](#type-catalogtax)es (referenced by ID) to enable for the [CatalogItem](#type-catalogitem). */
		taxes_to_enable?: Array<string>;
	}
	export interface UpdateItemTaxesRequestFormProperties {
	}
	export function CreateUpdateItemTaxesRequestFormGroup() {
		return new FormGroup<UpdateItemTaxesRequestFormProperties>({
		});

	}

	export interface UpdateItemTaxesResponse {

		/** The set of [Error](#type-error)s encountered. */
		errors?: Array<Error>;

		/** The database [timestamp](#workingwithdates) of this update in RFC 3339 format, e.g., "2016-09-04T23:59:33.123Z". */
		updated_at?: string | null;
	}
	export interface UpdateItemTaxesResponseFormProperties {

		/** The database [timestamp](#workingwithdates) of this update in RFC 3339 format, e.g., "2016-09-04T23:59:33.123Z". */
		updated_at: FormControl<string | null | undefined>,
	}
	export function CreateUpdateItemTaxesResponseFormGroup() {
		return new FormGroup<UpdateItemTaxesResponseFormProperties>({
			updated_at: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpsertCatalogObjectRequest {

		/**
		 * A value you specify that uniquely identifies this
		 * request among all your requests. A common way to create
		 * a valid idempotency key is to use a Universally unique
		 * identifier (UUID).
		 * If you're unsure whether a particular request was successful,
		 * you can reattempt it with the same idempotency key without
		 * worrying about creating duplicate objects.
		 * See [Idempotency keys](#idempotencykeys) for more information.
		 * Required
		 * Min length: 1
		 */
		idempotency_key: string;

		/**
		 * The wrapper object for object types in the Catalog data model. The type
		 * of a particular `CatalogObject` is determined by the value of
		 * `type` and only the corresponding data field may be set.
		 * - if type = `ITEM`, only `item_data` will be populated and it will contain a valid [CatalogItem](#type-catalogitem) object.
		 * - if type = `ITEM_VARIATION`, only `item_variation_data` will be populated and it will contain a valid [CatalogItemVariation](#type-catalogitemvariation) object.
		 * - if type = `MODIFIER`, only `modifier_data` will be populated and it will contain a valid [CatalogModifier](#type-catalogmodifier) object.
		 * - if type = `MODIFIER_LIST`, only `modifier_list_data` will be populated and it will contain a valid [CatalogModifierList](#type-catalogmodifierlist) object.
		 * - if type = `CATEGORY`, only `category_data` will be populated and it will contain a valid [CatalogCategory](#type-catalogcategory) object.
		 * - if type = `DISCOUNT`, only `discount_data` will be populated and it will contain a valid [CatalogDiscount](#type-catalogdiscount) object.
		 * - if type = `TAX`, only `tax_data` will be populated and it will contain a valid [CatalogTax](#type-catalogtax) object.
		 * For a more detailed discussion of the Catalog data model, please see the
		 * [Catalog Overview](https://docs.connect.squareup.com/articles/catalog-overview).
		 * Required
		 */
		object: CatalogObject;
	}
	export interface UpsertCatalogObjectRequestFormProperties {

		/**
		 * A value you specify that uniquely identifies this
		 * request among all your requests. A common way to create
		 * a valid idempotency key is to use a Universally unique
		 * identifier (UUID).
		 * If you're unsure whether a particular request was successful,
		 * you can reattempt it with the same idempotency key without
		 * worrying about creating duplicate objects.
		 * See [Idempotency keys](#idempotencykeys) for more information.
		 * Required
		 * Min length: 1
		 */
		idempotency_key: FormControl<string | null | undefined>,
	}
	export function CreateUpsertCatalogObjectRequestFormGroup() {
		return new FormGroup<UpsertCatalogObjectRequestFormProperties>({
			idempotency_key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface UpsertCatalogObjectResponse {

		/**
		 * The wrapper object for object types in the Catalog data model. The type
		 * of a particular `CatalogObject` is determined by the value of
		 * `type` and only the corresponding data field may be set.
		 * - if type = `ITEM`, only `item_data` will be populated and it will contain a valid [CatalogItem](#type-catalogitem) object.
		 * - if type = `ITEM_VARIATION`, only `item_variation_data` will be populated and it will contain a valid [CatalogItemVariation](#type-catalogitemvariation) object.
		 * - if type = `MODIFIER`, only `modifier_data` will be populated and it will contain a valid [CatalogModifier](#type-catalogmodifier) object.
		 * - if type = `MODIFIER_LIST`, only `modifier_list_data` will be populated and it will contain a valid [CatalogModifierList](#type-catalogmodifierlist) object.
		 * - if type = `CATEGORY`, only `category_data` will be populated and it will contain a valid [CatalogCategory](#type-catalogcategory) object.
		 * - if type = `DISCOUNT`, only `discount_data` will be populated and it will contain a valid [CatalogDiscount](#type-catalogdiscount) object.
		 * - if type = `TAX`, only `tax_data` will be populated and it will contain a valid [CatalogTax](#type-catalogtax) object.
		 * For a more detailed discussion of the Catalog data model, please see the
		 * [Catalog Overview](https://docs.connect.squareup.com/articles/catalog-overview).
		 */
		catalog_object?: CatalogObject;

		/** The set of [Error](#type-error)s encountered. */
		errors?: Array<Error>;

		/** The mapping between client and server IDs for this Upsert. */
		id_mappings?: Array<CatalogIdMapping>;
	}
	export interface UpsertCatalogObjectResponseFormProperties {
	}
	export function CreateUpsertCatalogObjectResponseFormGroup() {
		return new FormGroup<UpsertCatalogObjectResponseFormProperties>({
		});

	}

	export interface VoidTransactionRequest {
	}
	export interface VoidTransactionRequestFormProperties {
	}
	export function CreateVoidTransactionRequestFormGroup() {
		return new FormGroup<VoidTransactionRequestFormProperties>({
		});

	}


	/**
	 * Defines the fields that are included in the response body of
	 * a request to the [CaptureTransaction](#endpoint-capturetransaction) endpoint.
	 */
	export interface VoidTransactionResponse {

		/** Any errors that occurred during the request. */
		errors?: Array<Error>;
	}

	/**
	 * Defines the fields that are included in the response body of
	 * a request to the [CaptureTransaction](#endpoint-capturetransaction) endpoint.
	 */
	export interface VoidTransactionResponseFormProperties {
	}
	export function CreateVoidTransactionResponseFormGroup() {
		return new FormGroup<VoidTransactionResponseFormProperties>({
		});

	}

	export interface V1AdjustInventoryRequest {

		/** The reason for the inventory adjustment. */
		adjustment_type?: V1AdjustInventoryRequestAdjustment_type;

		/** A note about the inventory adjustment. */
		memo?: string | null;

		/** The number to adjust the variation's quantity by. */
		quantity_delta?: number | null;
	}
	export interface V1AdjustInventoryRequestFormProperties {

		/** The reason for the inventory adjustment. */
		adjustment_type: FormControl<V1AdjustInventoryRequestAdjustment_type | null | undefined>,

		/** A note about the inventory adjustment. */
		memo: FormControl<string | null | undefined>,

		/** The number to adjust the variation's quantity by. */
		quantity_delta: FormControl<number | null | undefined>,
	}
	export function CreateV1AdjustInventoryRequestFormGroup() {
		return new FormGroup<V1AdjustInventoryRequestFormProperties>({
			adjustment_type: new FormControl<V1AdjustInventoryRequestAdjustment_type | null | undefined>(undefined),
			memo: new FormControl<string | null | undefined>(undefined),
			quantity_delta: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum V1AdjustInventoryRequestAdjustment_type { SALE = 0, RECEIVE_STOCK = 1, MANUAL_ADJUST = 2 }

	export interface V1BankAccount {

		/** The last few digits of the bank account number. */
		account_number_suffix?: string | null;

		/** The name of the bank that manages the account. */
		bank_name?: string | null;

		/** The currency code of the currency associated with the bank account, in ISO 4217 format. For example, the currency code for US dollars is USD. */
		currency_code?: string | null;

		/** The bank account's Square-issued ID. */
		id?: string | null;

		/** The Square-issued ID of the merchant associated with the bank account. */
		merchant_id?: string | null;

		/** The name associated with the bank account. */
		name?: string | null;

		/** The bank account's routing number. */
		routing_number?: string | null;

		/** The bank account's type (for example, savings or checking). */
		type?: V1BankAccountType | null;
	}
	export interface V1BankAccountFormProperties {

		/** The last few digits of the bank account number. */
		account_number_suffix: FormControl<string | null | undefined>,

		/** The name of the bank that manages the account. */
		bank_name: FormControl<string | null | undefined>,

		/** The currency code of the currency associated with the bank account, in ISO 4217 format. For example, the currency code for US dollars is USD. */
		currency_code: FormControl<string | null | undefined>,

		/** The bank account's Square-issued ID. */
		id: FormControl<string | null | undefined>,

		/** The Square-issued ID of the merchant associated with the bank account. */
		merchant_id: FormControl<string | null | undefined>,

		/** The name associated with the bank account. */
		name: FormControl<string | null | undefined>,

		/** The bank account's routing number. */
		routing_number: FormControl<string | null | undefined>,

		/** The bank account's type (for example, savings or checking). */
		type: FormControl<V1BankAccountType | null | undefined>,
	}
	export function CreateV1BankAccountFormGroup() {
		return new FormGroup<V1BankAccountFormProperties>({
			account_number_suffix: new FormControl<string | null | undefined>(undefined),
			bank_name: new FormControl<string | null | undefined>(undefined),
			currency_code: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			merchant_id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			routing_number: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<V1BankAccountType | null | undefined>(undefined),
		});

	}

	export enum V1BankAccountType { BUSINESS_CHECKING = 0, CHECKING = 1, INVESTMENT = 2, LOAN = 3, SAVINGS = 4, OTHER = 5 }

	export interface V1CashDrawerEvent {

		/** The time when the event occurred, in ISO 8601 format. */
		created_at?: string | null;

		/** An optional description of the event, entered by the employee that created it. */
		description?: string | null;

		/** The ID of the employee that created the event. */
		employee_id?: string | null;
		event_money?: V1Money;

		/** The type of event that occurred. */
		event_type?: V1CashDrawerEventEvent_type | null;

		/** The event's unique ID. */
		id?: string | null;
	}
	export interface V1CashDrawerEventFormProperties {

		/** The time when the event occurred, in ISO 8601 format. */
		created_at: FormControl<string | null | undefined>,

		/** An optional description of the event, entered by the employee that created it. */
		description: FormControl<string | null | undefined>,

		/** The ID of the employee that created the event. */
		employee_id: FormControl<string | null | undefined>,

		/** The type of event that occurred. */
		event_type: FormControl<V1CashDrawerEventEvent_type | null | undefined>,

		/** The event's unique ID. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateV1CashDrawerEventFormGroup() {
		return new FormGroup<V1CashDrawerEventFormProperties>({
			created_at: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			employee_id: new FormControl<string | null | undefined>(undefined),
			event_type: new FormControl<V1CashDrawerEventEvent_type | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface V1Money {

		/**
		 * Amount in the lowest denominated value of this Currency. E.g. in USD
		 * these are cents, in JPY they are Yen (which do not have a 'cent' concept).
		 */
		amount?: number | null;
		currency_code?: MoneyCurrency | null;
	}
	export interface V1MoneyFormProperties {

		/**
		 * Amount in the lowest denominated value of this Currency. E.g. in USD
		 * these are cents, in JPY they are Yen (which do not have a 'cent' concept).
		 */
		amount: FormControl<number | null | undefined>,
		currency_code: FormControl<MoneyCurrency | null | undefined>,
	}
	export function CreateV1MoneyFormGroup() {
		return new FormGroup<V1MoneyFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			currency_code: new FormControl<MoneyCurrency | null | undefined>(undefined),
		});

	}

	export enum V1CashDrawerEventEvent_type { NO_SALE = 0, CASH_TENDER_PAYMENT = 1, OTHER_TENDER_PAYMENT = 2, CASH_TENDER_CANCELED_PAYMENT = 3, OTHER_TENDER_CANCELED_PAYMENT = 4, CASH_TENDER_REFUND = 5, OTHER_TENDER_REFUND = 6, PAID_IN = 7, PAID_OUT = 8 }

	export interface V1CashDrawerShift {
		cash_paid_in_money?: V1Money;
		cash_paid_out_money?: V1Money;
		cash_payment_money?: V1Money;
		cash_refunds_money?: V1Money;

		/** The time when the shift was closed, in ISO 8601 format. */
		closed_at?: string | null;
		closed_cash_money?: V1Money;

		/** The ID of the employee that closed the cash drawer shift by auditing the cash drawer's contents. */
		closing_employee_id?: string | null;

		/** The time when the timecard was created, in ISO 8601 format. */
		description?: string | null;
		device?: Device;

		/** The IDs of all employees that were logged into Square Register at some point during the cash drawer shift. */
		employee_ids?: Array<string>;

		/** The time when the shift ended, in ISO 8601 format. */
		ended_at?: boolean | null;

		/** The ID of the employee that ended the cash drawer shift. */
		ending_employee_id?: string | null;

		/** The shift's current state. */
		event_type?: V1CashDrawerShiftEvent_type | null;

		/** All of the events (payments, refunds, and so on) that involved the cash drawer during the shift. */
		events?: Array<V1CashDrawerEvent>;
		expected_cash_money?: V1Money;

		/** The shift's unique ID. */
		id?: string | null;

		/** The time when the shift began, in ISO 8601 format. */
		opened_at?: string | null;

		/** The ID of the employee that started the cash drawer shift. */
		opening_employee_id?: string | null;
		starting_cash_money?: V1Money;
	}
	export interface V1CashDrawerShiftFormProperties {

		/** The time when the shift was closed, in ISO 8601 format. */
		closed_at: FormControl<string | null | undefined>,

		/** The ID of the employee that closed the cash drawer shift by auditing the cash drawer's contents. */
		closing_employee_id: FormControl<string | null | undefined>,

		/** The time when the timecard was created, in ISO 8601 format. */
		description: FormControl<string | null | undefined>,

		/** The time when the shift ended, in ISO 8601 format. */
		ended_at: FormControl<boolean | null | undefined>,

		/** The ID of the employee that ended the cash drawer shift. */
		ending_employee_id: FormControl<string | null | undefined>,

		/** The shift's current state. */
		event_type: FormControl<V1CashDrawerShiftEvent_type | null | undefined>,

		/** The shift's unique ID. */
		id: FormControl<string | null | undefined>,

		/** The time when the shift began, in ISO 8601 format. */
		opened_at: FormControl<string | null | undefined>,

		/** The ID of the employee that started the cash drawer shift. */
		opening_employee_id: FormControl<string | null | undefined>,
	}
	export function CreateV1CashDrawerShiftFormGroup() {
		return new FormGroup<V1CashDrawerShiftFormProperties>({
			closed_at: new FormControl<string | null | undefined>(undefined),
			closing_employee_id: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			ended_at: new FormControl<boolean | null | undefined>(undefined),
			ending_employee_id: new FormControl<string | null | undefined>(undefined),
			event_type: new FormControl<V1CashDrawerShiftEvent_type | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			opened_at: new FormControl<string | null | undefined>(undefined),
			opening_employee_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum V1CashDrawerShiftEvent_type { OPEN = 0, ENDED = 1, CLOSED = 2 }

	export interface V1Category {

		/** The category's unique ID. */
		id?: string | null;

		/** The category's name. */
		name?: string | null;
	}
	export interface V1CategoryFormProperties {

		/** The category's unique ID. */
		id: FormControl<string | null | undefined>,

		/** The category's name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateV1CategoryFormGroup() {
		return new FormGroup<V1CategoryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface V1CreateRefundRequest {

		/**
		 * The ID of the payment to refund. If you're creating a PARTIAL refund for a split tender payment, instead provide the id of the particular tender you want to refund. See Split Tender Payments for details.
		 * Required
		 */
		payment_id: string;

		/**
		 * The reason for the refund.
		 * Required
		 */
		reason: string;
		refunded_money?: V1Money;

		/** An optional key to ensure idempotence if you issue the same PARTIAL refund request more than once. */
		request_idempotence_key?: string | null;

		/**
		 * TThe type of refund (FULL or PARTIAL).
		 * Required
		 */
		type: V1CreateRefundRequestType;
	}
	export interface V1CreateRefundRequestFormProperties {

		/**
		 * The ID of the payment to refund. If you're creating a PARTIAL refund for a split tender payment, instead provide the id of the particular tender you want to refund. See Split Tender Payments for details.
		 * Required
		 */
		payment_id: FormControl<string | null | undefined>,

		/**
		 * The reason for the refund.
		 * Required
		 */
		reason: FormControl<string | null | undefined>,

		/** An optional key to ensure idempotence if you issue the same PARTIAL refund request more than once. */
		request_idempotence_key: FormControl<string | null | undefined>,

		/**
		 * TThe type of refund (FULL or PARTIAL).
		 * Required
		 */
		type: FormControl<V1CreateRefundRequestType | null | undefined>,
	}
	export function CreateV1CreateRefundRequestFormGroup() {
		return new FormGroup<V1CreateRefundRequestFormProperties>({
			payment_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reason: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			request_idempotence_key: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<V1CreateRefundRequestType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum V1CreateRefundRequestType { FULL = 0, PARTIAL = 1 }

	export interface V1Discount {
		amount_money?: V1Money;

		/** The color of the discount's display label in Square Register, if not the default color. The default color is 9da2a6. */
		color?: V1DiscountColor | null;

		/** Indicates whether the discount is a FIXED value or entered at the time of sale. */
		discount_type?: V1DiscountDiscount_type | null;

		/** The discount's unique ID. */
		id?: string | null;

		/** The discount's name. */
		name?: string | null;

		/** Indicates whether a mobile staff member needs to enter their PIN to apply the discount to a payment. */
		pin_required?: boolean | null;

		/** The rate of the discount, as a string representation of a decimal number. A value of 0.07 corresponds to a rate of 7%. This rate is 0 if discount_type is VARIABLE_PERCENTAGE. */
		rate?: string | null;
	}
	export interface V1DiscountFormProperties {

		/** The color of the discount's display label in Square Register, if not the default color. The default color is 9da2a6. */
		color: FormControl<V1DiscountColor | null | undefined>,

		/** Indicates whether the discount is a FIXED value or entered at the time of sale. */
		discount_type: FormControl<V1DiscountDiscount_type | null | undefined>,

		/** The discount's unique ID. */
		id: FormControl<string | null | undefined>,

		/** The discount's name. */
		name: FormControl<string | null | undefined>,

		/** Indicates whether a mobile staff member needs to enter their PIN to apply the discount to a payment. */
		pin_required: FormControl<boolean | null | undefined>,

		/** The rate of the discount, as a string representation of a decimal number. A value of 0.07 corresponds to a rate of 7%. This rate is 0 if discount_type is VARIABLE_PERCENTAGE. */
		rate: FormControl<string | null | undefined>,
	}
	export function CreateV1DiscountFormGroup() {
		return new FormGroup<V1DiscountFormProperties>({
			color: new FormControl<V1DiscountColor | null | undefined>(undefined),
			discount_type: new FormControl<V1DiscountDiscount_type | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			pin_required: new FormControl<boolean | null | undefined>(undefined),
			rate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum V1DiscountColor { '9da2a6' = 0, '4ab200' = 1, '0b8000' = 2, '2952cc' = 3, a82ee5 = 4, e5457a = 5, b21212 = 6, '593c00' = 7, e5BF00 = 8 }

	export enum V1DiscountDiscount_type { FIXED = 0, VARIABLE_PERCENTAGE = 1, VARIABLE_AMOUNT = 2 }


	/** Represents one of a business's employees. */
	export interface V1Employee {

		/** The IDs of the locations the employee is allowed to clock in at. */
		authorized_location_ids?: Array<string>;

		/** The time when the employee entity was created, in ISO 8601 format. */
		created_at?: string | null;

		/** The employee's email address. */
		email?: string | null;

		/** An ID the merchant can set to associate the employee with an entity in another system. */
		external_id?: string | null;

		/**
		 * The employee's first name.
		 * Required
		 */
		first_name: string;

		/** The employee's unique ID. */
		id?: string | null;

		/**
		 * The employee's last name.
		 * Required
		 */
		last_name: string;

		/** The ids of the employee's associated roles. Currently, you can specify only one or zero roles per employee. */
		role_ids?: Array<string>;

		/** CWhether the employee is ACTIVE or INACTIVE. Inactive employees cannot sign in to Square Register.Merchants update this field from the Square Dashboard. */
		status?: V1EmployeeStatus | null;

		/** The time when the employee entity was most recently updated, in ISO 8601 format. */
		updated_at?: string | null;
	}

	/** Represents one of a business's employees. */
	export interface V1EmployeeFormProperties {

		/** The time when the employee entity was created, in ISO 8601 format. */
		created_at: FormControl<string | null | undefined>,

		/** The employee's email address. */
		email: FormControl<string | null | undefined>,

		/** An ID the merchant can set to associate the employee with an entity in another system. */
		external_id: FormControl<string | null | undefined>,

		/**
		 * The employee's first name.
		 * Required
		 */
		first_name: FormControl<string | null | undefined>,

		/** The employee's unique ID. */
		id: FormControl<string | null | undefined>,

		/**
		 * The employee's last name.
		 * Required
		 */
		last_name: FormControl<string | null | undefined>,

		/** CWhether the employee is ACTIVE or INACTIVE. Inactive employees cannot sign in to Square Register.Merchants update this field from the Square Dashboard. */
		status: FormControl<V1EmployeeStatus | null | undefined>,

		/** The time when the employee entity was most recently updated, in ISO 8601 format. */
		updated_at: FormControl<string | null | undefined>,
	}
	export function CreateV1EmployeeFormGroup() {
		return new FormGroup<V1EmployeeFormProperties>({
			created_at: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			external_id: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<V1EmployeeStatus | null | undefined>(undefined),
			updated_at: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum V1EmployeeStatus { ACTIVE = 0, INACTIVE = 1 }

	export interface V1EmployeeRole {

		/** The time when the employee entity was created, in ISO 8601 format. Is set by Square when the Role is created. */
		created_at?: string | null;

		/** The role's unique ID, Can only be set by Square. */
		id?: string | null;

		/** If true, employees with this role have all permissions, regardless of the values indicated in permissions. */
		is_owner?: boolean | null;

		/**
		 * The role's merchant-defined name.
		 * Required
		 */
		name: string;

		/**
		 * The role's permissions.
		 * Required
		 */
		permissions: Array<string>;

		/** The time when the employee entity was most recently updated, in ISO 8601 format. Is set by Square when the Role updated. */
		updated_at?: string | null;
	}
	export interface V1EmployeeRoleFormProperties {

		/** The time when the employee entity was created, in ISO 8601 format. Is set by Square when the Role is created. */
		created_at: FormControl<string | null | undefined>,

		/** The role's unique ID, Can only be set by Square. */
		id: FormControl<string | null | undefined>,

		/** If true, employees with this role have all permissions, regardless of the values indicated in permissions. */
		is_owner: FormControl<boolean | null | undefined>,

		/**
		 * The role's merchant-defined name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The time when the employee entity was most recently updated, in ISO 8601 format. Is set by Square when the Role updated. */
		updated_at: FormControl<string | null | undefined>,
	}
	export function CreateV1EmployeeRoleFormGroup() {
		return new FormGroup<V1EmployeeRoleFormProperties>({
			created_at: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			is_owner: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			updated_at: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface V1Fee {

		/** The type of adjustment the fee applies to a payment. Currently, this value is TAX for all fees. */
		adjustment_type?: V1FeeAdjustment_type | null;

		/** If true, the fee applies to custom amounts entered into Square Register that are not associated with a particular item. */
		applies_to_custom_amounts?: boolean | null;

		/** Forthcoming */
		calculation_phase?: V1FeeCalculation_phase | null;

		/** If true, the fee is applied to all appropriate items. If false, the fee is not applied at all. */
		enabled?: boolean | null;

		/** The fee's unique ID. */
		id?: string | null;

		/** Whether the fee is ADDITIVE or INCLUSIVE. */
		inclusion_type?: CatalogTaxInclusion_type | null;

		/** The fee's name. */
		name?: string | null;

		/** The rate of the fee, as a string representation of a decimal number. A value of 0.07 corresponds to a rate of 7%. */
		rate?: string | null;

		/** In countries with multiple classifications for sales taxes, indicates which classification the fee falls under. Currently relevant only to Canadian merchants. */
		type?: V1FeeType | null;
	}
	export interface V1FeeFormProperties {

		/** The type of adjustment the fee applies to a payment. Currently, this value is TAX for all fees. */
		adjustment_type: FormControl<V1FeeAdjustment_type | null | undefined>,

		/** If true, the fee applies to custom amounts entered into Square Register that are not associated with a particular item. */
		applies_to_custom_amounts: FormControl<boolean | null | undefined>,

		/** Forthcoming */
		calculation_phase: FormControl<V1FeeCalculation_phase | null | undefined>,

		/** If true, the fee is applied to all appropriate items. If false, the fee is not applied at all. */
		enabled: FormControl<boolean | null | undefined>,

		/** The fee's unique ID. */
		id: FormControl<string | null | undefined>,

		/** Whether the fee is ADDITIVE or INCLUSIVE. */
		inclusion_type: FormControl<CatalogTaxInclusion_type | null | undefined>,

		/** The fee's name. */
		name: FormControl<string | null | undefined>,

		/** The rate of the fee, as a string representation of a decimal number. A value of 0.07 corresponds to a rate of 7%. */
		rate: FormControl<string | null | undefined>,

		/** In countries with multiple classifications for sales taxes, indicates which classification the fee falls under. Currently relevant only to Canadian merchants. */
		type: FormControl<V1FeeType | null | undefined>,
	}
	export function CreateV1FeeFormGroup() {
		return new FormGroup<V1FeeFormProperties>({
			adjustment_type: new FormControl<V1FeeAdjustment_type | null | undefined>(undefined),
			applies_to_custom_amounts: new FormControl<boolean | null | undefined>(undefined),
			calculation_phase: new FormControl<V1FeeCalculation_phase | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			inclusion_type: new FormControl<CatalogTaxInclusion_type | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			rate: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<V1FeeType | null | undefined>(undefined),
		});

	}

	export enum V1FeeAdjustment_type { TAX = 0 }

	export enum V1FeeCalculation_phase { FEE_SUBTOTAL_PHASE = 0, OTHER = 1, FEE_TOTAL_PHASE = 2 }

	export enum V1FeeType { CA_GST = 0, CA_HST = 1, CA_PST = 2, CA_QST = 3, JP_CONSUMPTION_TAX = 4, CA_PEI_PST = 5, US_SALES_TAX = 6, OTHER = 7 }

	export interface V1InventoryEntry {

		/** The current available quantity of the item variation. */
		quantity_on_hand?: number | null;

		/** The variation that the entry corresponds to. */
		variation_id?: string | null;
	}
	export interface V1InventoryEntryFormProperties {

		/** The current available quantity of the item variation. */
		quantity_on_hand: FormControl<number | null | undefined>,

		/** The variation that the entry corresponds to. */
		variation_id: FormControl<string | null | undefined>,
	}
	export function CreateV1InventoryEntryFormGroup() {
		return new FormGroup<V1InventoryEntryFormProperties>({
			quantity_on_hand: new FormControl<number | null | undefined>(undefined),
			variation_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface V1Item {

		/** The text of the item's display label in Square Register. Only up to the first five characters of the string are used. */
		abbreviation?: string | null;

		/** If true, the item can be added to shipping orders from the merchant's online store. */
		available_online?: boolean | null;
		category?: V1Category;

		/** The color of the discount's display label in Square Register, if not the default color. The default color is 9da2a6. */
		color?: V1DiscountColor | null;

		/** The item's description. */
		description?: string | null;

		/** The fees that apply to the item, if any. */
		fees?: Array<V1Fee>;

		/** The item's ID. Must be unique among all entity IDs ever provided on behalf of the merchant. You can never reuse an ID. This value can include alphanumeric characters, dashes (-), and underscores (_). */
		id?: string | null;
		master_image?: V1ItemImage;

		/** The modifier lists that apply to the item, if any. */
		modifier_lists?: Array<V1Variation>;

		/** The item's name. */
		name?: string | null;

		/** Deprecated. This field is not used. */
		taxable?: boolean | null;

		/** The item's type. This value is NORMAL for almost all items. */
		type?: V1ItemType | null;

		/** The item's variations. You must specify at least one variation. */
		variations?: Array<V1Variation>;

		/** Indicates whether the item is viewable from the merchant's online store (PUBLIC) or PRIVATE. */
		visibility?: V1ItemVisibility | null;
	}
	export interface V1ItemFormProperties {

		/** The text of the item's display label in Square Register. Only up to the first five characters of the string are used. */
		abbreviation: FormControl<string | null | undefined>,

		/** If true, the item can be added to shipping orders from the merchant's online store. */
		available_online: FormControl<boolean | null | undefined>,

		/** The color of the discount's display label in Square Register, if not the default color. The default color is 9da2a6. */
		color: FormControl<V1DiscountColor | null | undefined>,

		/** The item's description. */
		description: FormControl<string | null | undefined>,

		/** The item's ID. Must be unique among all entity IDs ever provided on behalf of the merchant. You can never reuse an ID. This value can include alphanumeric characters, dashes (-), and underscores (_). */
		id: FormControl<string | null | undefined>,

		/** The item's name. */
		name: FormControl<string | null | undefined>,

		/** Deprecated. This field is not used. */
		taxable: FormControl<boolean | null | undefined>,

		/** The item's type. This value is NORMAL for almost all items. */
		type: FormControl<V1ItemType | null | undefined>,

		/** Indicates whether the item is viewable from the merchant's online store (PUBLIC) or PRIVATE. */
		visibility: FormControl<V1ItemVisibility | null | undefined>,
	}
	export function CreateV1ItemFormGroup() {
		return new FormGroup<V1ItemFormProperties>({
			abbreviation: new FormControl<string | null | undefined>(undefined),
			available_online: new FormControl<boolean | null | undefined>(undefined),
			color: new FormControl<V1DiscountColor | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			taxable: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<V1ItemType | null | undefined>(undefined),
			visibility: new FormControl<V1ItemVisibility | null | undefined>(undefined),
		});

	}

	export interface V1ItemImage {

		/** The image's unique ID. */
		id?: string | null;

		/** The image's publicly accessible URL. */
		url?: string | null;
	}
	export interface V1ItemImageFormProperties {

		/** The image's unique ID. */
		id: FormControl<string | null | undefined>,

		/** The image's publicly accessible URL. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateV1ItemImageFormGroup() {
		return new FormGroup<V1ItemImageFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface V1Variation {

		/** The item variation's unique ID. */
		id?: string | null;

		/** If the inventory quantity for the variation is less than or equal to this value and inventory_alert_type is LOW_QUANTITY, the variation displays an alert in the merchant dashboard. */
		inventory_alert_threshold?: number | null;

		/** Indicates whether the item variation displays an alert when its inventory quantity is less than or equal to its inventory_alert_threshold. */
		inventory_alert_type?: V1VariationInventory_alert_type | null;

		/** The ID of the variation's associated item. */
		item_id?: string | null;

		/** The item variation's name. */
		name?: string | null;

		/** Indicates the variation's list position when displayed in Square Register and the merchant dashboard. If more than one variation for the same item has the same ordinal value, those variations are displayed in alphabetical order */
		ordinal?: number | null;
		price_money?: V1Money;

		/** Indicates whether the item variation's price is fixed or determined at the time of sale. */
		pricing_type?: ItemVariationLocationOverridesPricing_type | null;

		/** The item variation's SKU, if any. */
		sku?: string | null;

		/** If true, inventory tracking is active for the variation. */
		track_inventory?: boolean | null;

		/** Arbitrary metadata associated with the variation. Cannot exceed 255 characters. */
		user_data?: string | null;
	}
	export interface V1VariationFormProperties {

		/** The item variation's unique ID. */
		id: FormControl<string | null | undefined>,

		/** If the inventory quantity for the variation is less than or equal to this value and inventory_alert_type is LOW_QUANTITY, the variation displays an alert in the merchant dashboard. */
		inventory_alert_threshold: FormControl<number | null | undefined>,

		/** Indicates whether the item variation displays an alert when its inventory quantity is less than or equal to its inventory_alert_threshold. */
		inventory_alert_type: FormControl<V1VariationInventory_alert_type | null | undefined>,

		/** The ID of the variation's associated item. */
		item_id: FormControl<string | null | undefined>,

		/** The item variation's name. */
		name: FormControl<string | null | undefined>,

		/** Indicates the variation's list position when displayed in Square Register and the merchant dashboard. If more than one variation for the same item has the same ordinal value, those variations are displayed in alphabetical order */
		ordinal: FormControl<number | null | undefined>,

		/** Indicates whether the item variation's price is fixed or determined at the time of sale. */
		pricing_type: FormControl<ItemVariationLocationOverridesPricing_type | null | undefined>,

		/** The item variation's SKU, if any. */
		sku: FormControl<string | null | undefined>,

		/** If true, inventory tracking is active for the variation. */
		track_inventory: FormControl<boolean | null | undefined>,

		/** Arbitrary metadata associated with the variation. Cannot exceed 255 characters. */
		user_data: FormControl<string | null | undefined>,
	}
	export function CreateV1VariationFormGroup() {
		return new FormGroup<V1VariationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			inventory_alert_threshold: new FormControl<number | null | undefined>(undefined),
			inventory_alert_type: new FormControl<V1VariationInventory_alert_type | null | undefined>(undefined),
			item_id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			ordinal: new FormControl<number | null | undefined>(undefined),
			pricing_type: new FormControl<ItemVariationLocationOverridesPricing_type | null | undefined>(undefined),
			sku: new FormControl<string | null | undefined>(undefined),
			track_inventory: new FormControl<boolean | null | undefined>(undefined),
			user_data: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum V1VariationInventory_alert_type { LOW_QUANTITY = 0, NONE = 1, INVESTMENT = 2, LOAN = 3, SAVINGS = 4, OTHER = 5 }

	export enum V1ItemType { NORMAL = 0, GIFT_CARD = 1, OTHER = 2 }

	export enum V1ItemVisibility { PUBLIC = 0, PRIVATE = 1 }


	/**
	 * Defines the fields that are included in the response body of
	 * a request to the **RetrieveBusiness** endpoint.
	 */
	export interface V1Merchant {

		/** Capabilities that are enabled for the merchant's Square account. Capabilities that are not listed in this array are not enabled for the account. */
		account_capabilities?: Array<string>;

		/** Indicates whether the merchant account corresponds to a single-location account (LOCATION) or a business account (BUSINESS). This value is almost always LOCATION. */
		account_type?: V1MerchantAccount_type | null;

		/** Represents a physical address. */
		business_address?: Address;

		/** The name of the merchant's business. */
		business_name?: string | null;

		/** Represents a phone number. */
		business_phone?: V1PhoneNumber;

		/** The type of business operated by the merchant. */
		business_type?: V1MerchantBusiness_type | null;

		/** The country associated with the merchant account, in ISO 3166-1-alpha-2 format. */
		country_code?: string | null;

		/** The currency associated with the merchant account, in ISO 4217 format. For example, the currency code for US dollars is USD. */
		currency_code?: string | null;

		/** The email address associated with the merchant account. */
		email?: string | null;

		/** The merchant account's unique identifier. */
		id?: string | null;

		/** The language associated with the merchant account, in BCP 47 format. */
		language_code?: string | null;

		/** Additional information for a single-location account specified by its associated business account, if it has one. */
		location_details?: V1MerchantLocation_details;

		/** The URL of the merchant's online store. */
		market_url?: string | null;

		/** The name associated with the merchant account. */
		name?: string | null;

		/** Represents a physical address. */
		'shipping_address '?: Address;
	}

	/**
	 * Defines the fields that are included in the response body of
	 * a request to the **RetrieveBusiness** endpoint.
	 */
	export interface V1MerchantFormProperties {

		/** Indicates whether the merchant account corresponds to a single-location account (LOCATION) or a business account (BUSINESS). This value is almost always LOCATION. */
		account_type: FormControl<V1MerchantAccount_type | null | undefined>,

		/** The name of the merchant's business. */
		business_name: FormControl<string | null | undefined>,

		/** The type of business operated by the merchant. */
		business_type: FormControl<V1MerchantBusiness_type | null | undefined>,

		/** The country associated with the merchant account, in ISO 3166-1-alpha-2 format. */
		country_code: FormControl<string | null | undefined>,

		/** The currency associated with the merchant account, in ISO 4217 format. For example, the currency code for US dollars is USD. */
		currency_code: FormControl<string | null | undefined>,

		/** The email address associated with the merchant account. */
		email: FormControl<string | null | undefined>,

		/** The merchant account's unique identifier. */
		id: FormControl<string | null | undefined>,

		/** The language associated with the merchant account, in BCP 47 format. */
		language_code: FormControl<string | null | undefined>,

		/** The URL of the merchant's online store. */
		market_url: FormControl<string | null | undefined>,

		/** The name associated with the merchant account. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateV1MerchantFormGroup() {
		return new FormGroup<V1MerchantFormProperties>({
			account_type: new FormControl<V1MerchantAccount_type | null | undefined>(undefined),
			business_name: new FormControl<string | null | undefined>(undefined),
			business_type: new FormControl<V1MerchantBusiness_type | null | undefined>(undefined),
			country_code: new FormControl<string | null | undefined>(undefined),
			currency_code: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			language_code: new FormControl<string | null | undefined>(undefined),
			market_url: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum V1MerchantAccount_type { LOCATION = 0, BUSINESS = 1 }


	/** Represents a phone number. */
	export interface V1PhoneNumber {

		/**
		 * The phone number's international calling code. For US phone numbers, this value is +1.
		 * Required
		 */
		calling_code: string;

		/**
		 * The phone number.
		 * Required
		 */
		number: string;
	}

	/** Represents a phone number. */
	export interface V1PhoneNumberFormProperties {

		/**
		 * The phone number's international calling code. For US phone numbers, this value is +1.
		 * Required
		 */
		calling_code: FormControl<string | null | undefined>,

		/**
		 * The phone number.
		 * Required
		 */
		number: FormControl<string | null | undefined>,
	}
	export function CreateV1PhoneNumberFormGroup() {
		return new FormGroup<V1PhoneNumberFormProperties>({
			calling_code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			number: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum V1MerchantBusiness_type { ACCOUNTING = 0, APPAREL_AND_ACCESSORY_SHOPS = 1, ART_DEALERS_GALLERIES = 2, ART_DESIGN_AND_PHOTOGRAPHY = 3, BAR_CLUB_LOUNGE = 4, BEAUTY_AND_BARBER_SHOPS = 5, BOOK_STORES = 6, BUSINESS_SERVICES = 7, CATERING = 8, CHARITABLE_SOCIAL_SERVICE_ORGANIZATIONS = 9, CHARITIBLE_ORGS = 10, CLEANING_SERVICES = 11, COMPUTER_EQUIPMENT_SOFTWARE_MAINTENANCE_REPAIR_SERVICES = 12, CONSULTANT = 13, CONTRACTORS = 14, DELIVERY_SERVICES = 15, DENTISTRY = 16, EDUCATION = 17, FOOD_STORES_CONVENIENCE_STORES_AND_SPECIALTY_MARKETS = 18, FOOD_TRUCK_CART = 19, FURNITURE_HOME_AND_OFFICE_EQUIPMENT = 20, FURNITURE_HOME_GOODS = 21, HOTELS_AND_LODGING = 22, INDIVIDUAL_USE = 23, JEWELRY_AND_WATCHES = 24, LANDSCAPING_AND_HORTICULTURAL_SERVICES = 25, LANGUAGE_SCHOOLS = 26, LEGAL_SERVICES = 27, MEDICAL_PRACTITIONERS = 28, MEDICAL_SERVICES_AND_HEALTH_PRACTITIONERS = 29, MEMBERSHIP_ORGANIZATIONS = 30, MUSIC_AND_ENTERTAINMENT = 31, OTHER = 32, OUTDOOR_MARKETS = 33, PERSONAL_SERVICES = 34, POLITICAL_ORGANIZATIONS = 35, PROFESSIONAL_SERVICES = 36, REAL_ESTATE = 37, RECREATION_SERVICES = 38, REPAIR_SHOPS_AND_RELATED_SERVICES = 39, RESTAURANTS = 40, RETAIL_SHOPS = 41, SCHOOLS_AND_EDUCATIONAL_SERVICES = 42, SPORTING_GOODS = 43, TAXICABS_AND_LIMOUSINES = 44, TICKET_SALES = 45, TOURISM = 46, TRAVEL_TOURISM = 47, VETERINARY_SERVICES = 48, WEB_DEV_DESIGN = 49 }

	export interface V1MerchantLocation_details {

		/** The nickname assigned to the single-location account by the parent business. This value appears in the parent business's multi-location dashboard. */
		nickname?: string | null;
	}
	export interface V1MerchantLocation_detailsFormProperties {

		/** The nickname assigned to the single-location account by the parent business. This value appears in the parent business's multi-location dashboard. */
		nickname: FormControl<string | null | undefined>,
	}
	export function CreateV1MerchantLocation_detailsFormGroup() {
		return new FormGroup<V1MerchantLocation_detailsFormProperties>({
			nickname: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface V1ModifierList {

		/** The modifier list's unique ID. */
		id?: string | null;

		/** The options included in the modifier list. */
		modifier_options?: Array<V1ModifierOption>;

		/** The modifier list's name. */
		name?: string | null;

		/** Indicates whether MULTIPLE options or a SINGLE option from the modifier list can be applied to a single item. */
		selection_type?: CatalogModifierListSelection_type | null;
	}
	export interface V1ModifierListFormProperties {

		/** The modifier list's unique ID. */
		id: FormControl<string | null | undefined>,

		/** The modifier list's name. */
		name: FormControl<string | null | undefined>,

		/** Indicates whether MULTIPLE options or a SINGLE option from the modifier list can be applied to a single item. */
		selection_type: FormControl<CatalogModifierListSelection_type | null | undefined>,
	}
	export function CreateV1ModifierListFormGroup() {
		return new FormGroup<V1ModifierListFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			selection_type: new FormControl<CatalogModifierListSelection_type | null | undefined>(undefined),
		});

	}

	export interface V1ModifierOption {

		/** The modifier option's unique ID. */
		id?: string | null;

		/** The ID of the modifier list the option belongs to. */
		modifier_list_id?: string | null;

		/** The modifier option's name. */
		name?: string | null;

		/** If true, the modifier option is the default option in a modifier list for which selection_type is SINGLE. */
		on_by_default?: boolean | null;

		/** Indicates the modifier option's list position when displayed in Square Register and the merchant dashboard. If more than one modifier option in the same modifier list has the same ordinal value, those options are displayed in alphabetical order. */
		ordinal?: number | null;
		price_money?: V1Money;
	}
	export interface V1ModifierOptionFormProperties {

		/** The modifier option's unique ID. */
		id: FormControl<string | null | undefined>,

		/** The ID of the modifier list the option belongs to. */
		modifier_list_id: FormControl<string | null | undefined>,

		/** The modifier option's name. */
		name: FormControl<string | null | undefined>,

		/** If true, the modifier option is the default option in a modifier list for which selection_type is SINGLE. */
		on_by_default: FormControl<boolean | null | undefined>,

		/** Indicates the modifier option's list position when displayed in Square Register and the merchant dashboard. If more than one modifier option in the same modifier list has the same ordinal value, those options are displayed in alphabetical order. */
		ordinal: FormControl<number | null | undefined>,
	}
	export function CreateV1ModifierOptionFormGroup() {
		return new FormGroup<V1ModifierOptionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			modifier_list_id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			on_by_default: new FormControl<boolean | null | undefined>(undefined),
			ordinal: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface V1Order {

		/** For Bitcoin transactions, the price of the buyer's order in satoshi (100 million satoshi equals 1 BTC). */
		btc_price_satoshi?: number | null;

		/** For Bitcoin transactions, the address that the buyer sent Bitcoin to. */
		btc_receive_address?: string | null;

		/** The email address of the order's buyer. */
		buyer_email?: string | null;

		/** A note provided by the buyer when the order was created, if any. */
		buyer_note?: string | null;

		/** A note provided by the merchant when the order's state was set to CANCELED, if any. */
		canceled_note?: string | null;

		/** A note provided by the merchant when the order's state was set to COMPLETED, if any */
		completed_note?: string | null;

		/** The time when the order was created, in ISO 8601 format. */
		created_at?: string | null;

		/** Any errors that occurred during the request. */
		errors?: Array<Error>;

		/** The time when the order expires if no action is taken, in ISO 8601 format. */
		expires_at?: string | null;

		/** The order's unique identifier. */
		id?: string | null;

		/** The history of actions associated with the order. */
		order_history?: Array<V1OrderHistoryEntry>;

		/** The unique identifier of the payment associated with the order. */
		payment_id?: string | null;

		/** The promo code provided by the buyer, if any. */
		promo_code?: string | null;

		/** The name of the order's buyer. */
		recipient_name?: string | null;

		/** The phone number to use for the order's delivery. */
		recipient_phone_number?: string | null;

		/** A note provided by the merchant when the order's state was set to REFUNDED, if any. */
		refunded_note?: string | null;

		/** Represents a physical address. */
		shipping_address?: Address;

		/** Whether the tax is an ADDITIVE tax or an INCLUSIVE tax. */
		state?: V1OrderState | null;
		subtotal_money?: V1Money;
		tender?: V1Tender;
		total_discount_money?: V1Money;
		total_price_money?: V1Money;
		total_shipping_money?: V1Money;
		total_tax_money?: V1Money;

		/** The time when the order was last modified, in ISO 8601 format. */
		updated_at?: string | null;
	}
	export interface V1OrderFormProperties {

		/** For Bitcoin transactions, the price of the buyer's order in satoshi (100 million satoshi equals 1 BTC). */
		btc_price_satoshi: FormControl<number | null | undefined>,

		/** For Bitcoin transactions, the address that the buyer sent Bitcoin to. */
		btc_receive_address: FormControl<string | null | undefined>,

		/** The email address of the order's buyer. */
		buyer_email: FormControl<string | null | undefined>,

		/** A note provided by the buyer when the order was created, if any. */
		buyer_note: FormControl<string | null | undefined>,

		/** A note provided by the merchant when the order's state was set to CANCELED, if any. */
		canceled_note: FormControl<string | null | undefined>,

		/** A note provided by the merchant when the order's state was set to COMPLETED, if any */
		completed_note: FormControl<string | null | undefined>,

		/** The time when the order was created, in ISO 8601 format. */
		created_at: FormControl<string | null | undefined>,

		/** The time when the order expires if no action is taken, in ISO 8601 format. */
		expires_at: FormControl<string | null | undefined>,

		/** The order's unique identifier. */
		id: FormControl<string | null | undefined>,

		/** The unique identifier of the payment associated with the order. */
		payment_id: FormControl<string | null | undefined>,

		/** The promo code provided by the buyer, if any. */
		promo_code: FormControl<string | null | undefined>,

		/** The name of the order's buyer. */
		recipient_name: FormControl<string | null | undefined>,

		/** The phone number to use for the order's delivery. */
		recipient_phone_number: FormControl<string | null | undefined>,

		/** A note provided by the merchant when the order's state was set to REFUNDED, if any. */
		refunded_note: FormControl<string | null | undefined>,

		/** Whether the tax is an ADDITIVE tax or an INCLUSIVE tax. */
		state: FormControl<V1OrderState | null | undefined>,

		/** The time when the order was last modified, in ISO 8601 format. */
		updated_at: FormControl<string | null | undefined>,
	}
	export function CreateV1OrderFormGroup() {
		return new FormGroup<V1OrderFormProperties>({
			btc_price_satoshi: new FormControl<number | null | undefined>(undefined),
			btc_receive_address: new FormControl<string | null | undefined>(undefined),
			buyer_email: new FormControl<string | null | undefined>(undefined),
			buyer_note: new FormControl<string | null | undefined>(undefined),
			canceled_note: new FormControl<string | null | undefined>(undefined),
			completed_note: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<string | null | undefined>(undefined),
			expires_at: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			payment_id: new FormControl<string | null | undefined>(undefined),
			promo_code: new FormControl<string | null | undefined>(undefined),
			recipient_name: new FormControl<string | null | undefined>(undefined),
			recipient_phone_number: new FormControl<string | null | undefined>(undefined),
			refunded_note: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<V1OrderState | null | undefined>(undefined),
			updated_at: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface V1OrderHistoryEntry {

		/** The type of action performed on the order. */
		action?: V1OrderHistoryEntryAction | null;

		/** The time when the action was performed, in ISO 8601 format. */
		created_at?: string | null;
	}
	export interface V1OrderHistoryEntryFormProperties {

		/** The type of action performed on the order. */
		action: FormControl<V1OrderHistoryEntryAction | null | undefined>,

		/** The time when the action was performed, in ISO 8601 format. */
		created_at: FormControl<string | null | undefined>,
	}
	export function CreateV1OrderHistoryEntryFormGroup() {
		return new FormGroup<V1OrderHistoryEntryFormProperties>({
			action: new FormControl<V1OrderHistoryEntryAction | null | undefined>(undefined),
			created_at: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum V1OrderHistoryEntryAction { ORDER_PLACED = 0, DECLINED = 1, PAYMENT_RECEIVED = 2, CANCELED = 3, COMPLETED = 4, REFUNDED = 5, EXPIRED = 6 }

	export enum V1OrderState { PENDING = 0, OPEN = 1, COMPLETED = 2, CANCELED = 3, REFUNDED = 4, REJECTED = 5 }

	export interface V1Tender {

		/** The brand of credit card provided. */
		card_brand?: V1TenderCard_brand | null;
		change_back_money?: V1Money;

		/** The ID of the employee that processed the tender. */
		employee_id?: string | null;

		/** The tender's unique ID. */
		entry_method?: V1TenderEntry_method | null;

		/** The tender's unique ID. */
		id?: string | null;

		/** A human-readable description of the tender. */
		name?: string | null;

		/** The last four digits of the provided credit card's account number. */
		pan_suffix?: string | null;

		/** Notes entered by the merchant about the tender at the time of payment, if any. Typically only present for tender with the type: OTHER. */
		payment_note?: string | null;

		/** The URL of the receipt for the tender. */
		receipt_url?: string | null;
		refunded_money?: V1Money;
		tendered_money?: V1Money;
		total_money?: V1Money;

		/** The type of tender. */
		type?: V1TenderType | null;
	}
	export interface V1TenderFormProperties {

		/** The brand of credit card provided. */
		card_brand: FormControl<V1TenderCard_brand | null | undefined>,

		/** The ID of the employee that processed the tender. */
		employee_id: FormControl<string | null | undefined>,

		/** The tender's unique ID. */
		entry_method: FormControl<V1TenderEntry_method | null | undefined>,

		/** The tender's unique ID. */
		id: FormControl<string | null | undefined>,

		/** A human-readable description of the tender. */
		name: FormControl<string | null | undefined>,

		/** The last four digits of the provided credit card's account number. */
		pan_suffix: FormControl<string | null | undefined>,

		/** Notes entered by the merchant about the tender at the time of payment, if any. Typically only present for tender with the type: OTHER. */
		payment_note: FormControl<string | null | undefined>,

		/** The URL of the receipt for the tender. */
		receipt_url: FormControl<string | null | undefined>,

		/** The type of tender. */
		type: FormControl<V1TenderType | null | undefined>,
	}
	export function CreateV1TenderFormGroup() {
		return new FormGroup<V1TenderFormProperties>({
			card_brand: new FormControl<V1TenderCard_brand | null | undefined>(undefined),
			employee_id: new FormControl<string | null | undefined>(undefined),
			entry_method: new FormControl<V1TenderEntry_method | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			pan_suffix: new FormControl<string | null | undefined>(undefined),
			payment_note: new FormControl<string | null | undefined>(undefined),
			receipt_url: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<V1TenderType | null | undefined>(undefined),
		});

	}

	export enum V1TenderCard_brand { OTHER_BRAND = 0, VISA = 1, MASTER_CARD = 2, AMERICAN_EXPRESS = 3, DISCOVER = 4, DISCOVER_DINERS = 5, JCB = 6, CHINA_UNIONPAY = 7, SQUARE_GIFT_CARD = 8 }

	export enum V1TenderEntry_method { MANUAL = 0, SCANNED = 1, SQUARE_CASH = 2, SQUARE_WALLET = 3, SWIPED = 4, WEB_FORM = 5, OTHER = 6 }

	export enum V1TenderType { CREDIT_CARD = 0, CASH = 1, THIRD_PARTY_CARD = 2, NO_SALE = 3, SQUARE_WALLET = 4, SQUARE_GIFT_CARD = 5, UNKNOWN = 6, OTHER = 7 }

	export interface V1Page {

		/** The cells included on the page. */
		cells?: Array<V1PageCell>;

		/** The page's unique identifier. */
		id?: string | null;

		/** The page's name, if any. */
		name?: string | null;

		/** The page's position in the merchant's list of pages. Always an integer between 0 and 4, inclusive. */
		page_index?: number | null;
	}
	export interface V1PageFormProperties {

		/** The page's unique identifier. */
		id: FormControl<string | null | undefined>,

		/** The page's name, if any. */
		name: FormControl<string | null | undefined>,

		/** The page's position in the merchant's list of pages. Always an integer between 0 and 4, inclusive. */
		page_index: FormControl<number | null | undefined>,
	}
	export function CreateV1PageFormGroup() {
		return new FormGroup<V1PageFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			page_index: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface V1PageCell {

		/** The column of the cell. Always an integer between 0 and 4, inclusive. */
		column?: number | null;

		/** The unique identifier of the entity represented in the cell. Not present for cells with an object_type of PLACEHOLDER. */
		object_id?: string | null;

		/** The type of entity represented in the cell (ITEM, DISCOUNT, CATEGORY, or PLACEHOLDER). */
		object_type?: Array<string>;

		/** The unique identifier of the page the cell is included on. */
		page_id?: string | null;

		/** For a cell with an object_type of PLACEHOLDER, this value indicates the cell's special behavior. */
		placeholder_type?: Array<string>;

		/** The row of the cell. Always an integer between 0 and 4, inclusive. */
		row?: number | null;
	}
	export interface V1PageCellFormProperties {

		/** The column of the cell. Always an integer between 0 and 4, inclusive. */
		column: FormControl<number | null | undefined>,

		/** The unique identifier of the entity represented in the cell. Not present for cells with an object_type of PLACEHOLDER. */
		object_id: FormControl<string | null | undefined>,

		/** The unique identifier of the page the cell is included on. */
		page_id: FormControl<string | null | undefined>,

		/** The row of the cell. Always an integer between 0 and 4, inclusive. */
		row: FormControl<number | null | undefined>,
	}
	export function CreateV1PageCellFormGroup() {
		return new FormGroup<V1PageCellFormProperties>({
			column: new FormControl<number | null | undefined>(undefined),
			object_id: new FormControl<string | null | undefined>(undefined),
			page_id: new FormControl<string | null | undefined>(undefined),
			row: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface V1Payment {

		/** All of the additive taxes associated with the payment. */
		additive_tax?: Array<V1PaymentTax>;
		additive_tax_money?: V1Money;

		/** The time when the payment was created, in ISO 8601 format. */
		created_at?: string | null;

		/** The unique identifier of the Square account that took the payment. */
		creator_id?: string | null;
		device?: Device;
		discount_money?: V1Money;
		gross_sales_money?: V1Money;

		/** The payment's unique identifier. */
		id?: string | null;

		/** All of the inclusive taxes associated with the payment. */
		inclusive_tax?: Array<V1PaymentTax>;
		inclusive_tax_money?: V1Money;

		/** The items purchased in the payment. */
		itemizations?: Array<V1PaymentItemization>;

		/** The unique identifier of the merchant that took the payment. */
		merchant_id?: string | null;
		net_sales_money?: V1Money;
		net_total_money?: V1Money;

		/** The URL of the payment's detail page in the merchant dashboard. The merchant must be signed in to the merchant dashboard to view this page. */
		payment_url?: string | null;
		processing_fee_money?: V1Money;

		/** The URL of the receipt for the payment. Note that for split tender payments, this URL corresponds to the receipt for the first tender listed in the payment's tender field. Each Tender object has its own receipt_url field you can use to get the other receipts associated with a split tender payment. */
		receipt_url?: string | null;
		refunded_money?: V1Money;

		/** All of the refunds applied to the payment. */
		refunds?: Array<V1Refund>;
		swedish_rounding_money?: V1Money;
		tax_money?: V1Money;

		/** All of the additive taxes associated with the payment. */
		tender?: Array<V1Tender>;
		tip_money?: V1Money;
		total_collected_money?: V1Money;
	}
	export interface V1PaymentFormProperties {

		/** The time when the payment was created, in ISO 8601 format. */
		created_at: FormControl<string | null | undefined>,

		/** The unique identifier of the Square account that took the payment. */
		creator_id: FormControl<string | null | undefined>,

		/** The payment's unique identifier. */
		id: FormControl<string | null | undefined>,

		/** The unique identifier of the merchant that took the payment. */
		merchant_id: FormControl<string | null | undefined>,

		/** The URL of the payment's detail page in the merchant dashboard. The merchant must be signed in to the merchant dashboard to view this page. */
		payment_url: FormControl<string | null | undefined>,

		/** The URL of the receipt for the payment. Note that for split tender payments, this URL corresponds to the receipt for the first tender listed in the payment's tender field. Each Tender object has its own receipt_url field you can use to get the other receipts associated with a split tender payment. */
		receipt_url: FormControl<string | null | undefined>,
	}
	export function CreateV1PaymentFormGroup() {
		return new FormGroup<V1PaymentFormProperties>({
			created_at: new FormControl<string | null | undefined>(undefined),
			creator_id: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			merchant_id: new FormControl<string | null | undefined>(undefined),
			payment_url: new FormControl<string | null | undefined>(undefined),
			receipt_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface V1PaymentTax {
		applied_money?: V1Money;

		/** Any errors that occurred during the request. */
		errors?: Array<Error>;

		/** The ID of the tax, if available. Taxes applied in older versions of Square Register might not have an ID. */
		fee_id?: string | null;

		/** Whether the tax is an ADDITIVE tax or an INCLUSIVE tax. */
		inclusion_type?: CatalogTaxInclusion_type | null;

		/** The merchant-defined name of the tax. */
		name?: string | null;

		/** The rate of the tax, as a string representation of a decimal number. A value of 0.07 corresponds to a rate of 7%. */
		rate?: string | null;
	}
	export interface V1PaymentTaxFormProperties {

		/** The ID of the tax, if available. Taxes applied in older versions of Square Register might not have an ID. */
		fee_id: FormControl<string | null | undefined>,

		/** Whether the tax is an ADDITIVE tax or an INCLUSIVE tax. */
		inclusion_type: FormControl<CatalogTaxInclusion_type | null | undefined>,

		/** The merchant-defined name of the tax. */
		name: FormControl<string | null | undefined>,

		/** The rate of the tax, as a string representation of a decimal number. A value of 0.07 corresponds to a rate of 7%. */
		rate: FormControl<string | null | undefined>,
	}
	export function CreateV1PaymentTaxFormGroup() {
		return new FormGroup<V1PaymentTaxFormProperties>({
			fee_id: new FormControl<string | null | undefined>(undefined),
			inclusion_type: new FormControl<CatalogTaxInclusion_type | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			rate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface V1PaymentItemization {
		discount_money?: V1Money;

		/** All discounts applied to this itemization. */
		discounts?: Array<V1PaymentDiscount>;
		gross_sales_money?: V1Money;
		item_detail?: V1PaymentItemDetail;

		/** The name of the item variation purchased, if any. */
		item_variation_name?: string | null;

		/** The type of purchase that the itemization represents, such as an ITEM or CUSTOM_AMOUNT */
		itemization_type?: V1PaymentItemizationItemization_type | null;

		/** All modifier options applied to this itemization. */
		modifiers?: Array<V1PaymentModifier>;

		/** The item's name. */
		name?: string | null;
		net_sales_money?: V1Money;

		/** Notes entered by the merchant about the item at the time of payment, if any. */
		notes?: string | null;

		/** The quantity of the item purchased. This can be a decimal value. */
		quantity?: number | null;
		single_quantity_money?: V1Money;

		/** All taxes applied to this itemization. */
		taxes?: Array<V1PaymentTax>;
		total_money?: V1Money;
	}
	export interface V1PaymentItemizationFormProperties {

		/** The name of the item variation purchased, if any. */
		item_variation_name: FormControl<string | null | undefined>,

		/** The type of purchase that the itemization represents, such as an ITEM or CUSTOM_AMOUNT */
		itemization_type: FormControl<V1PaymentItemizationItemization_type | null | undefined>,

		/** The item's name. */
		name: FormControl<string | null | undefined>,

		/** Notes entered by the merchant about the item at the time of payment, if any. */
		notes: FormControl<string | null | undefined>,

		/** The quantity of the item purchased. This can be a decimal value. */
		quantity: FormControl<number | null | undefined>,
	}
	export function CreateV1PaymentItemizationFormGroup() {
		return new FormGroup<V1PaymentItemizationFormProperties>({
			item_variation_name: new FormControl<string | null | undefined>(undefined),
			itemization_type: new FormControl<V1PaymentItemizationItemization_type | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface V1PaymentDiscount {
		applied_money?: V1Money;

		/** The ID of the applied discount, if available. Discounts applied in older versions of Square Register might not have an ID. */
		discount_id?: string | null;

		/** The discount's name. */
		name?: string | null;
	}
	export interface V1PaymentDiscountFormProperties {

		/** The ID of the applied discount, if available. Discounts applied in older versions of Square Register might not have an ID. */
		discount_id: FormControl<string | null | undefined>,

		/** The discount's name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateV1PaymentDiscountFormGroup() {
		return new FormGroup<V1PaymentDiscountFormProperties>({
			discount_id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface V1PaymentItemDetail {

		/** The name of the item's merchant-defined category, if any. */
		category_name?: string | null;

		/** The unique ID of the item purchased, if any. */
		item_id?: string | null;

		/** The unique ID of the item variation purchased, if any. */
		item_variation_id?: string | null;

		/** The item's merchant-defined SKU, if any. */
		sku?: string | null;
	}
	export interface V1PaymentItemDetailFormProperties {

		/** The name of the item's merchant-defined category, if any. */
		category_name: FormControl<string | null | undefined>,

		/** The unique ID of the item purchased, if any. */
		item_id: FormControl<string | null | undefined>,

		/** The unique ID of the item variation purchased, if any. */
		item_variation_id: FormControl<string | null | undefined>,

		/** The item's merchant-defined SKU, if any. */
		sku: FormControl<string | null | undefined>,
	}
	export function CreateV1PaymentItemDetailFormGroup() {
		return new FormGroup<V1PaymentItemDetailFormProperties>({
			category_name: new FormControl<string | null | undefined>(undefined),
			item_id: new FormControl<string | null | undefined>(undefined),
			item_variation_id: new FormControl<string | null | undefined>(undefined),
			sku: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum V1PaymentItemizationItemization_type { ITEM = 0, CUSTOM_AMOUNT = 1, GIFT_CARD_ACTIVATION = 2, GIFT_CARD_RELOAD = 3, GIFT_CARD_UNKNOWN = 4, OTHER = 5 }

	export interface V1PaymentModifier {
		applied_money?: V1Money;

		/** TThe ID of the applied modifier option, if available. Modifier options applied in older versions of Square Register might not have an ID. */
		modifier_option_id?: string | null;

		/** The modifier option's name. */
		name?: string | null;
	}
	export interface V1PaymentModifierFormProperties {

		/** TThe ID of the applied modifier option, if available. Modifier options applied in older versions of Square Register might not have an ID. */
		modifier_option_id: FormControl<string | null | undefined>,

		/** The modifier option's name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateV1PaymentModifierFormGroup() {
		return new FormGroup<V1PaymentModifierFormProperties>({
			modifier_option_id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface V1Refund {

		/** The time when the merchant initiated the refund for Square to process, in ISO 8601 format.. */
		created_at?: string | null;
		merchant_id?: string | null;

		/** The Square-issued ID of the payment the refund is applied to. */
		payment_id?: string | null;

		/** The time when Square processed the refund on behalf of the merchant, in ISO 8601 format. */
		processed_at?: string | null;

		/** The merchant-specified reason for the refund. */
		reason?: string | null;
		refunded_additive_tax_money?: V1Money;
		refunded_discount_money?: V1Money;
		refunded_inclusive_tax_money?: V1Money;
		refunded_money?: V1Money;
		refunded_processing_fee_money?: V1Money;
		refunded_tip_money?: V1Money;

		/** The type of refund */
		type?: V1CreateRefundRequestType | null;
	}
	export interface V1RefundFormProperties {

		/** The time when the merchant initiated the refund for Square to process, in ISO 8601 format.. */
		created_at: FormControl<string | null | undefined>,
		merchant_id: FormControl<string | null | undefined>,

		/** The Square-issued ID of the payment the refund is applied to. */
		payment_id: FormControl<string | null | undefined>,

		/** The time when Square processed the refund on behalf of the merchant, in ISO 8601 format. */
		processed_at: FormControl<string | null | undefined>,

		/** The merchant-specified reason for the refund. */
		reason: FormControl<string | null | undefined>,

		/** The type of refund */
		type: FormControl<V1CreateRefundRequestType | null | undefined>,
	}
	export function CreateV1RefundFormGroup() {
		return new FormGroup<V1RefundFormProperties>({
			created_at: new FormControl<string | null | undefined>(undefined),
			merchant_id: new FormControl<string | null | undefined>(undefined),
			payment_id: new FormControl<string | null | undefined>(undefined),
			processed_at: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<V1CreateRefundRequestType | null | undefined>(undefined),
		});

	}

	export interface V1Settlement {

		/** The Square-issued unique identifier for the bank account associated with the settlement. */
		bank_account_id?: string | null;

		/** The entries included in this settlement. */
		entries?: Array<V1SettlementEntry>;

		/** The settlement's unique identifier. */
		id?: string | null;

		/** The time when the settlement was submitted for deposit or withdrawal, in ISO 8601 format. */
		initiated_at?: string | null;

		/** The settlement's current status. */
		status?: V1SettlementStatus | null;
		total_money?: V1Money;
	}
	export interface V1SettlementFormProperties {

		/** The Square-issued unique identifier for the bank account associated with the settlement. */
		bank_account_id: FormControl<string | null | undefined>,

		/** The settlement's unique identifier. */
		id: FormControl<string | null | undefined>,

		/** The time when the settlement was submitted for deposit or withdrawal, in ISO 8601 format. */
		initiated_at: FormControl<string | null | undefined>,

		/** The settlement's current status. */
		status: FormControl<V1SettlementStatus | null | undefined>,
	}
	export function CreateV1SettlementFormGroup() {
		return new FormGroup<V1SettlementFormProperties>({
			bank_account_id: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			initiated_at: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<V1SettlementStatus | null | undefined>(undefined),
		});

	}

	export interface V1SettlementEntry {
		amount_money?: V1Money;
		fee_money?: V1Money;

		/** The settlement's unique identifier. */
		payment_id?: string | null;

		/** The settlement's current status. */
		type?: V1SettlementEntryType | null;
	}
	export interface V1SettlementEntryFormProperties {

		/** The settlement's unique identifier. */
		payment_id: FormControl<string | null | undefined>,

		/** The settlement's current status. */
		type: FormControl<V1SettlementEntryType | null | undefined>,
	}
	export function CreateV1SettlementEntryFormGroup() {
		return new FormGroup<V1SettlementEntryFormProperties>({
			payment_id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<V1SettlementEntryType | null | undefined>(undefined),
		});

	}

	export enum V1SettlementEntryType { ADJUSTMENT = 0, BALANCE_CHARGE = 1, CHARGE = 2, FREE_PROCESSING = 3, HOLD_ADJUSTMENT = 4, PAID_SERVICE_FEE = 5, PAID_SERVICE_FEE_REFUND = 6, REDEMPTION_CODE = 7, REFUND = 8, RETURNED_PAYOUT = 9, SQUARE_CAPITAL_ADVANCE = 10, SQUARE_CAPITAL_PAYMENT = 11, SQUARE_CAPITAL_REVERSED_PAYMENT = 12, SUBSCRIPTION_FEE = 13, SUBSCRIPTION_FEE_REFUND = 14, INCENTED_PAYMENT = 15, RETURNED_ACH_ENTRY = 16, RETURNED_SQUARE_275 = 17, SQUARE_275 = 18 }

	export enum V1SettlementStatus { FAILED = 0, SENT = 1 }


	/** Represents a timecard for an employee. */
	export interface V1Timecard {

		/** The ID of the location the employee clocked in from, if any. */
		clockin_location_id?: string | null;

		/** The clock-in time for the timecard, in ISO 8601 format. */
		clockin_time?: string | null;

		/** The ID of the location the employee clocked out from. Provide this value only if importing timecard information from another system. */
		clockout_location_id?: string | null;

		/** The clock-out time for the timecard, in ISO 8601 format. Provide this value only if importing timecard information from another system. */
		clockout_time?: string | null;

		/** The time when the timecard was created, in ISO 8601 format. */
		created_at?: string | null;

		/** If true, the timecard was deleted by the merchant, and it is no longer valid. */
		deleted?: boolean | null;

		/**
		 * The ID of the employee the timecard is associated with.
		 * Required
		 */
		employee_id: string;

		/** The timecard's unique ID. */
		id?: string | null;

		/** The time when the timecard was most recently updated, in ISO 8601 format. */
		updated_at?: string | null;
	}

	/** Represents a timecard for an employee. */
	export interface V1TimecardFormProperties {

		/** The ID of the location the employee clocked in from, if any. */
		clockin_location_id: FormControl<string | null | undefined>,

		/** The clock-in time for the timecard, in ISO 8601 format. */
		clockin_time: FormControl<string | null | undefined>,

		/** The ID of the location the employee clocked out from. Provide this value only if importing timecard information from another system. */
		clockout_location_id: FormControl<string | null | undefined>,

		/** The clock-out time for the timecard, in ISO 8601 format. Provide this value only if importing timecard information from another system. */
		clockout_time: FormControl<string | null | undefined>,

		/** The time when the timecard was created, in ISO 8601 format. */
		created_at: FormControl<string | null | undefined>,

		/** If true, the timecard was deleted by the merchant, and it is no longer valid. */
		deleted: FormControl<boolean | null | undefined>,

		/**
		 * The ID of the employee the timecard is associated with.
		 * Required
		 */
		employee_id: FormControl<string | null | undefined>,

		/** The timecard's unique ID. */
		id: FormControl<string | null | undefined>,

		/** The time when the timecard was most recently updated, in ISO 8601 format. */
		updated_at: FormControl<string | null | undefined>,
	}
	export function CreateV1TimecardFormGroup() {
		return new FormGroup<V1TimecardFormProperties>({
			clockin_location_id: new FormControl<string | null | undefined>(undefined),
			clockin_time: new FormControl<string | null | undefined>(undefined),
			clockout_location_id: new FormControl<string | null | undefined>(undefined),
			clockout_time: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<string | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			employee_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface V1TimecardEvent {

		/** The time the employee clocked in, in ISO 8601 format. */
		clockin_time?: string | null;

		/** The time the employee clocked out, in ISO 8601 format. */
		clockout_time?: string | null;

		/** The time when the event was created, in ISO 8601 format. */
		created_at?: string | null;

		/** The ID of the timecard to list events for. */
		event_type?: V1TimecardEventEvent_type | null;

		/** The event's unique ID. */
		id?: string | null;
	}
	export interface V1TimecardEventFormProperties {

		/** The time the employee clocked in, in ISO 8601 format. */
		clockin_time: FormControl<string | null | undefined>,

		/** The time the employee clocked out, in ISO 8601 format. */
		clockout_time: FormControl<string | null | undefined>,

		/** The time when the event was created, in ISO 8601 format. */
		created_at: FormControl<string | null | undefined>,

		/** The ID of the timecard to list events for. */
		event_type: FormControl<V1TimecardEventEvent_type | null | undefined>,

		/** The event's unique ID. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateV1TimecardEventFormGroup() {
		return new FormGroup<V1TimecardEventFormProperties>({
			clockin_time: new FormControl<string | null | undefined>(undefined),
			clockout_time: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<string | null | undefined>(undefined),
			event_type: new FormControl<V1TimecardEventEvent_type | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum V1TimecardEventEvent_type { API_CREATE = 0, API_EDIT = 1, API_DELETE = 2, REGISTER_CLOCKIN = 3, REGISTER_CLOCKOUT = 4, DASHBOARD_SUPERVISOR_CLOSE = 5, DASHBOARD_EDIT = 6, DASHBOARD_DELETE = 7 }

	export interface V1UpdateModifierListRequest {

		/** The modifier list's name. */
		name?: string | null;

		/** Indicates whether multiple options from the modifier list can be applied to a single item. */
		selection_type?: CatalogModifierListSelection_type | null;
	}
	export interface V1UpdateModifierListRequestFormProperties {

		/** The modifier list's name. */
		name: FormControl<string | null | undefined>,

		/** Indicates whether multiple options from the modifier list can be applied to a single item. */
		selection_type: FormControl<CatalogModifierListSelection_type | null | undefined>,
	}
	export function CreateV1UpdateModifierListRequestFormGroup() {
		return new FormGroup<V1UpdateModifierListRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			selection_type: new FormControl<CatalogModifierListSelection_type | null | undefined>(undefined),
		});

	}

	export interface V1UpdateOrderRequest {

		/**
		 * The action to perform on the order (COMPLETE, CANCEL, or REFUND).
		 * Required
		 */
		action: V1UpdateOrderRequestAction;

		/** A merchant-specified note about the canceling of the order. Only valid if action is CANCEL. */
		canceled_note?: string | null;

		/** A merchant-specified note about the completion of the order. Only valid if action is COMPLETE. */
		completed_note?: string | null;

		/** A merchant-specified note about the refunding of the order. Only valid if action is REFUND. */
		refunded_note?: string | null;

		/** The tracking number of the shipment associated with the order. Only valid if action is COMPLETE. */
		shipped_tracking_number?: string | null;
	}
	export interface V1UpdateOrderRequestFormProperties {

		/**
		 * The action to perform on the order (COMPLETE, CANCEL, or REFUND).
		 * Required
		 */
		action: FormControl<V1UpdateOrderRequestAction | null | undefined>,

		/** A merchant-specified note about the canceling of the order. Only valid if action is CANCEL. */
		canceled_note: FormControl<string | null | undefined>,

		/** A merchant-specified note about the completion of the order. Only valid if action is COMPLETE. */
		completed_note: FormControl<string | null | undefined>,

		/** A merchant-specified note about the refunding of the order. Only valid if action is REFUND. */
		refunded_note: FormControl<string | null | undefined>,

		/** The tracking number of the shipment associated with the order. Only valid if action is COMPLETE. */
		shipped_tracking_number: FormControl<string | null | undefined>,
	}
	export function CreateV1UpdateOrderRequestFormGroup() {
		return new FormGroup<V1UpdateOrderRequestFormProperties>({
			action: new FormControl<V1UpdateOrderRequestAction | null | undefined>(undefined, [Validators.required]),
			canceled_note: new FormControl<string | null | undefined>(undefined),
			completed_note: new FormControl<string | null | undefined>(undefined),
			refunded_note: new FormControl<string | null | undefined>(undefined),
			shipped_tracking_number: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum V1UpdateOrderRequestAction { COMPLETE = 0, CANCEL = 1, REFUND = 2 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get a business's information.
		 * Get a business's information.
		 * Get v1/me
		 * @return {V1Merchant} Success
		 */
		RetrieveBusiness(): Observable<V1Merchant> {
			return this.http.get<V1Merchant>(this.baseUri + 'v1/me', {});
		}

		/**
		 * Provides summary information for all of a business's employees.
		 * Provides summary information for all of a business's employees.
		 * Get v1/me/employees
		 * @param {ListEmployeesOrder} order The order in which employees are listed in the response, based on their created_at field.      Default value: ASC 
		 * @param {string} begin_updated_at If filtering results by their updated_at field, the beginning of the requested reporting period, in ISO 8601 format
		 * @param {string} end_updated_at If filtering results by there updated_at field, the end of the requested reporting period, in ISO 8601 format.
		 * @param {string} begin_created_at If filtering results by their created_at field, the beginning of the requested reporting period, in ISO 8601 format.
		 * @param {string} end_created_at If filtering results by their created_at field, the end of the requested reporting period, in ISO 8601 format.
		 * @param {V1EmployeeStatus} status If provided, the endpoint returns only employee entities with the specified status (ACTIVE or INACTIVE).
		 * @param {string} external_id If provided, the endpoint returns only employee entities with the specified external_id.
		 * @param {number} limit The maximum integer number of employee entities to return in a single response. Default 100, maximum 200.
		 * @param {string} batch_token A pagination cursor to retrieve the next set of results for your
		 * original query to the endpoint.
		 * @return {Array<V1Employee>} Success
		 */
		ListEmployees(order: ListEmployeesOrder | null | undefined, begin_updated_at: string | null | undefined, end_updated_at: string | null | undefined, begin_created_at: string | null | undefined, end_created_at: string | null | undefined, status: V1EmployeeStatus | null | undefined, external_id: string | null | undefined, limit: number | null | undefined, batch_token: string | null | undefined): Observable<Array<V1Employee>> {
			return this.http.get<Array<V1Employee>>(this.baseUri + 'v1/me/employees?order=' + order + '&begin_updated_at=' + (begin_updated_at == null ? '' : encodeURIComponent(begin_updated_at)) + '&end_updated_at=' + (end_updated_at == null ? '' : encodeURIComponent(end_updated_at)) + '&begin_created_at=' + (begin_created_at == null ? '' : encodeURIComponent(begin_created_at)) + '&end_created_at=' + (end_created_at == null ? '' : encodeURIComponent(end_created_at)) + '&status=' + status + '&external_id=' + (external_id == null ? '' : encodeURIComponent(external_id)) + '&limit=' + limit + '&batch_token=' + (batch_token == null ? '' : encodeURIComponent(batch_token)), {});
		}

		/**
		 * Creates an employee for a business.
		 * Creates an employee for a business.
		 * Post v1/me/employees
		 * @param {V1Employee} requestBody An object containing the fields to POST for the request.
		 * See the corresponding object definition for field details.
		 * @return {V1Employee} Success
		 */
		CreateEmployee(requestBody: V1Employee): Observable<V1Employee> {
			return this.http.post<V1Employee>(this.baseUri + 'v1/me/employees', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides the details for a single employee.
		 * Provides the details for a single employee.
		 * Get v1/me/employees/{employee_id}
		 * @param {string} employee_id The employee's ID.
		 * @return {V1Employee} Success
		 */
		RetrieveEmployee(employee_id: string): Observable<V1Employee> {
			return this.http.get<V1Employee>(this.baseUri + 'v1/me/employees/' + (employee_id == null ? '' : encodeURIComponent(employee_id)), {});
		}

		/**
		 * V1 UpdateEmployee
		 * Put v1/me/employees/{employee_id}
		 * @param {string} employee_id The ID of the role to modify.
		 * @param {V1Employee} requestBody An object containing the fields to POST for the request.
		 * See the corresponding object definition for field details.
		 * @return {V1Employee} Success
		 */
		UpdateEmployee(employee_id: string, requestBody: V1Employee): Observable<V1Employee> {
			return this.http.put<V1Employee>(this.baseUri + 'v1/me/employees/' + (employee_id == null ? '' : encodeURIComponent(employee_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides details for a business's locations, including their IDs.
		 * Provides details for a business's locations, including their IDs.
		 * Get v1/me/locations
		 * @return {Array<V1Merchant>} Success
		 */
		V1LocationsGet(): Observable<Array<V1Merchant>> {
			return this.http.get<Array<V1Merchant>>(this.baseUri + 'v1/me/locations', {});
		}

		/**
		 * Provides summary information for all of a business's employee roles.
		 * Provides summary information for all of a business's employee roles.
		 * Get v1/me/roles
		 * @param {ListEmployeesOrder} order The order in which employees are listed in the response, based on their created_at field.Default value: ASC 
		 * @param {number} limit The maximum integer number of employee entities to return in a single response. Default 100, maximum 200.
		 * @param {string} batch_token A pagination cursor to retrieve the next set of results for your
		 * original query to the endpoint.
		 * @return {Array<V1EmployeeRole>} Success
		 */
		ListEmployeeRoles(order: ListEmployeesOrder | null | undefined, limit: number | null | undefined, batch_token: string | null | undefined): Observable<Array<V1EmployeeRole>> {
			return this.http.get<Array<V1EmployeeRole>>(this.baseUri + 'v1/me/roles?order=' + order + '&limit=' + limit + '&batch_token=' + (batch_token == null ? '' : encodeURIComponent(batch_token)), {});
		}

		/**
		 * Creates an employee role you can then assign to employees.
		 * Creates an employee role you can then assign to employees.
		 * Post v1/me/roles
		 * @param {V1EmployeeRole} requestBody An EmployeeRole object with a name and permissions, and an optional owner flag.
		 * @return {V1EmployeeRole} Success
		 */
		CreateEmployeeRole(requestBody: V1EmployeeRole): Observable<V1EmployeeRole> {
			return this.http.post<V1EmployeeRole>(this.baseUri + 'v1/me/roles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides the details for a single employee role.
		 * Provides the details for a single employee role.
		 * Get v1/me/roles/{role_id}
		 * @param {string} role_id The role's ID.
		 * @return {V1EmployeeRole} Success
		 */
		RetrieveEmployeeRole(role_id: string): Observable<V1EmployeeRole> {
			return this.http.get<V1EmployeeRole>(this.baseUri + 'v1/me/roles/' + (role_id == null ? '' : encodeURIComponent(role_id)), {});
		}

		/**
		 * Modifies the details of an employee role.
		 * Modifies the details of an employee role.
		 * Put v1/me/roles/{role_id}
		 * @param {string} role_id The ID of the role to modify.
		 * @param {V1EmployeeRole} requestBody An object containing the fields to POST for the request.
		 * See the corresponding object definition for field details.
		 * @return {V1EmployeeRole} Success
		 */
		UpdateEmployeeRole(role_id: string, requestBody: V1EmployeeRole): Observable<V1EmployeeRole> {
			return this.http.put<V1EmployeeRole>(this.baseUri + 'v1/me/roles/' + (role_id == null ? '' : encodeURIComponent(role_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides summary information for all of a business's employee timecards.
		 * Provides summary information for all of a business's employee timecards.
		 * Get v1/me/timecards
		 * @param {ListEmployeesOrder} order The order in which timecards are listed in the response, based on their created_at field.
		 * @param {string} employee_id If provided, the endpoint returns only timecards for the employee with the specified ID.
		 * @param {string} begin_clockin_time If filtering results by their clockin_time field, the beginning of the requested reporting period, in ISO 8601 format.
		 * @param {string} end_clockin_time If filtering results by their clockin_time field, the end of the requested reporting period, in ISO 8601 format.
		 * @param {string} begin_clockout_time If filtering results by their clockout_time field, the beginning of the requested reporting period, in ISO 8601 format.
		 * @param {string} end_clockout_time If filtering results by their clockout_time field, the end of the requested reporting period, in ISO 8601 format.
		 * @param {string} begin_updated_at If filtering results by their updated_at field, the beginning of the requested reporting period, in ISO 8601 format.
		 * @param {string} end_updated_at If filtering results by their updated_at field, the end of the requested reporting period, in ISO 8601 format.
		 * @param {boolean} deleted If true, only deleted timecards are returned. If false, only valid timecards are returned.If you don't provide this parameter, both valid and deleted timecards are returned.
		 * @param {number} limit The maximum integer number of employee entities to return in a single response. Default 100, maximum 200.
		 * @param {string} batch_token A pagination cursor to retrieve the next set of results for your
		 * original query to the endpoint.
		 * @return {Array<V1Timecard>} Success
		 */
		ListTimecards(order: ListEmployeesOrder | null | undefined, employee_id: string | null | undefined, begin_clockin_time: string | null | undefined, end_clockin_time: string | null | undefined, begin_clockout_time: string | null | undefined, end_clockout_time: string | null | undefined, begin_updated_at: string | null | undefined, end_updated_at: string | null | undefined, deleted: boolean | null | undefined, limit: number | null | undefined, batch_token: string | null | undefined): Observable<Array<V1Timecard>> {
			return this.http.get<Array<V1Timecard>>(this.baseUri + 'v1/me/timecards?order=' + order + '&employee_id=' + (employee_id == null ? '' : encodeURIComponent(employee_id)) + '&begin_clockin_time=' + (begin_clockin_time == null ? '' : encodeURIComponent(begin_clockin_time)) + '&end_clockin_time=' + (end_clockin_time == null ? '' : encodeURIComponent(end_clockin_time)) + '&begin_clockout_time=' + (begin_clockout_time == null ? '' : encodeURIComponent(begin_clockout_time)) + '&end_clockout_time=' + (end_clockout_time == null ? '' : encodeURIComponent(end_clockout_time)) + '&begin_updated_at=' + (begin_updated_at == null ? '' : encodeURIComponent(begin_updated_at)) + '&end_updated_at=' + (end_updated_at == null ? '' : encodeURIComponent(end_updated_at)) + '&deleted=' + deleted + '&limit=' + limit + '&batch_token=' + (batch_token == null ? '' : encodeURIComponent(batch_token)), {});
		}

		/**
		 * Creates a timecard for an employee. Each timecard corresponds to a single shift.
		 * Creates a timecard for an employee. Each timecard corresponds to a single shift.
		 * Post v1/me/timecards
		 * @param {V1Timecard} requestBody An object containing the fields to POST for the request.
		 * See the corresponding object definition for field details.
		 * @return {V1Timecard} Success
		 */
		CreateTimecard(requestBody: V1Timecard): Observable<V1Timecard> {
			return this.http.post<V1Timecard>(this.baseUri + 'v1/me/timecards', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides the details for a single timecard.
		 * Provides the details for a single timecard.
		 * Get v1/me/timecards/{timecard_id}
		 * @param {string} timecard_id The timecard's ID.
		 * @return {V1Timecard} Success
		 */
		RetrieveTimecard(timecard_id: string): Observable<V1Timecard> {
			return this.http.get<V1Timecard>(this.baseUri + 'v1/me/timecards/' + (timecard_id == null ? '' : encodeURIComponent(timecard_id)), {});
		}

		/**
		 * Modifies a timecard's details. This creates an API_EDIT event for the timecard. You can view a timecard's event history with the List Timecard Events endpoint.
		 * Modifies a timecard's details. This creates an API_EDIT event for the timecard. You can view a timecard's event history with the List Timecard Events endpoint.
		 * Put v1/me/timecards/{timecard_id}
		 * @param {string} timecard_id TThe ID of the timecard to modify.
		 * @param {V1Timecard} requestBody An object containing the fields to POST for the request.
		 * See the corresponding object definition for field details.
		 * @return {V1Timecard} Success
		 */
		UpdateTimecard(timecard_id: string, requestBody: V1Timecard): Observable<V1Timecard> {
			return this.http.put<V1Timecard>(this.baseUri + 'v1/me/timecards/' + (timecard_id == null ? '' : encodeURIComponent(timecard_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a timecard. Deleted timecards are still accessible from Connect API endpoints, but the value of their deleted field is set to true. See Handling deleted timecards for more information.
		 * Deletes a timecard. Deleted timecards are still accessible from Connect API endpoints, but the value of their deleted field is set to true. See Handling deleted timecards for more information.
		 * Delete v1/me/timecards/{timecard_id}
		 * @param {string} timecard_id The ID of the timecard to delete.
		 * @return {string} Success
		 */
		DeleteTimecard(timecard_id: string): Observable<string> {
			return this.http.delete(this.baseUri + 'v1/me/timecards/' + (timecard_id == null ? '' : encodeURIComponent(timecard_id)), { responseType: 'text' });
		}

		/**
		 * Provides summary information for all events associated with a particular timecard.
		 * Provides summary information for all events associated with a particular timecard.
		 * Get v1/me/timecards/{timecard_id}/events
		 * @param {string} timecard_id The ID of the timecard to list events for.
		 * @return {Array<V1TimecardEvent>} Success
		 */
		ListTimecardEvents(timecard_id: string): Observable<Array<V1TimecardEvent>> {
			return this.http.get<Array<V1TimecardEvent>>(this.baseUri + 'v1/me/timecards/' + (timecard_id == null ? '' : encodeURIComponent(timecard_id)) + '/events', {});
		}

		/**
		 * Provides non-confidential details for all of a location's associated bank accounts. This endpoint does not provide full bank account numbers, and there is no way to obtain a full bank account number with the Connect API.
		 * Provides non-confidential details for all of a location's associated bank accounts. This endpoint does not provide full bank account numbers, and there is no way to obtain a full bank account number with the Connect API.
		 * Get v1/{location_id}/bank-accounts
		 * @param {string} location_id The ID of the location to list bank accounts for.
		 * @return {Array<V1BankAccount>} Success
		 */
		ListBankAccounts(location_id: string): Observable<Array<V1BankAccount>> {
			return this.http.get<Array<V1BankAccount>>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/bank-accounts', {});
		}

		/**
		 * Provides non-confidential details for a merchant's associated bank account. This endpoint does not provide full bank account numbers, and there is no way to obtain a full bank account number with the Connect API.
		 * Provides non-confidential details for a merchant's associated bank account. This endpoint does not provide full bank account numbers, and there is no way to obtain a full bank account number with the Connect API.
		 * Get v1/{location_id}/bank-accounts/{bank_account_id}
		 * @param {string} location_id The ID of the bank account's associated location.
		 * @param {string} bank_account_id The bank account's Square-issued ID. You obtain this value from Settlement objects returned.
		 * @return {V1BankAccount} Success
		 */
		RetrieveBankAccount(location_id: string, bank_account_id: string): Observable<V1BankAccount> {
			return this.http.get<V1BankAccount>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/bank-accounts/' + (bank_account_id == null ? '' : encodeURIComponent(bank_account_id)), {});
		}

		/**
		 * Provides the details for all of a location's cash drawer shifts during a date range. The date range you specify cannot exceed 90 days.
		 * Provides the details for all of a location's cash drawer shifts during a date range. The date range you specify cannot exceed 90 days.
		 * Get v1/{location_id}/cash-drawer-shifts
		 * @param {string} location_id The ID of the location to list cash drawer shifts for.
		 * @param {ListEmployeesOrder} order The order in which cash drawer shifts are listed in the response, based on their created_at field. Default value: ASC
		 * @param {string} begin_time The beginning of the requested reporting period, in ISO 8601 format. Default value: The current time minus 90 days.
		 * @param {string} end_time The beginning of the requested reporting period, in ISO 8601 format. Default value: The current time.
		 * @return {Array<V1CashDrawerShift>} Success
		 */
		ListCashDrawerShifts(location_id: string, order: ListEmployeesOrder | null | undefined, begin_time: string | null | undefined, end_time: string | null | undefined): Observable<Array<V1CashDrawerShift>> {
			return this.http.get<Array<V1CashDrawerShift>>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/cash-drawer-shifts&order=' + order + '&begin_time=' + (begin_time == null ? '' : encodeURIComponent(begin_time)) + '&end_time=' + (end_time == null ? '' : encodeURIComponent(end_time)), {});
		}

		/**
		 * Provides the details for a single cash drawer shift, including all events that occurred during the shift.
		 * Provides the details for a single cash drawer shift, including all events that occurred during the shift.
		 * Get v1/{location_id}/cash-drawer-shifts/{shift_id}
		 * @param {string} location_id The ID of the location to list cash drawer shifts for.
		 * @param {string} shift_id The shift's ID.
		 * @return {V1CashDrawerShift} Success
		 */
		RetrieveCashDrawerShift(location_id: string, shift_id: string): Observable<V1CashDrawerShift> {
			return this.http.get<V1CashDrawerShift>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/cash-drawer-shifts/' + (shift_id == null ? '' : encodeURIComponent(shift_id)), {});
		}

		/**
		 * Lists all of a location's item categories.
		 * Lists all of a location's item categories.
		 * Get v1/{location_id}/categories
		 * @param {string} location_id The ID of the location to list categories for.
		 * @return {Array<V1Category>} Success
		 */
		ListCategories(location_id: string): Observable<Array<V1Category>> {
			return this.http.get<Array<V1Category>>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/categories', {});
		}

		/**
		 * Creates an item category.
		 * Creates an item category.
		 * Post v1/{location_id}/categories
		 * @param {string} location_id The ID of the location to create an item for.
		 * @param {V1Category} requestBody An object containing the fields to POST for the request.
		 * See the corresponding object definition for field details.
		 * @return {V1Category} Success
		 */
		CreateCategory(location_id: string, requestBody: V1Category): Observable<V1Category> {
			return this.http.post<V1Category>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/categories', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies the details of an existing item category.
		 * Modifies the details of an existing item category.
		 * Put v1/{location_id}/categories/{category_id}
		 * @param {string} location_id The ID of the category's associated location.
		 * @param {string} category_id The ID of the category to edit.
		 * @param {V1Category} requestBody An object containing the fields to POST for the request.
		 * See the corresponding object definition for field details.
		 * @return {V1Category} Success
		 */
		UpdateCategory(location_id: string, category_id: string, requestBody: V1Category): Observable<V1Category> {
			return this.http.put<V1Category>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/categories/' + (category_id == null ? '' : encodeURIComponent(category_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing item category.
		 * Deletes an existing item category.
		 * Delete v1/{location_id}/categories/{category_id}
		 * @param {string} location_id The ID of the item's associated location.
		 * @param {string} category_id The ID of the category to delete.
		 * @return {V1Category} Success
		 */
		DeleteCategory(location_id: string, category_id: string): Observable<V1Category> {
			return this.http.delete<V1Category>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/categories/' + (category_id == null ? '' : encodeURIComponent(category_id)), {});
		}

		/**
		 * Lists all of a location's discounts.
		 * Lists all of a location's discounts.
		 * Get v1/{location_id}/discounts
		 * @param {string} location_id The ID of the location to list categories for.
		 * @return {Array<V1Discount>} Success
		 */
		ListDiscounts(location_id: string): Observable<Array<V1Discount>> {
			return this.http.get<Array<V1Discount>>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/discounts', {});
		}

		/**
		 * Creates a discount.
		 * Creates a discount.
		 * Post v1/{location_id}/discounts
		 * @param {string} location_id The ID of the location to create an item for.
		 * @param {V1Discount} requestBody An object containing the fields to POST for the request.
		 * See the corresponding object definition for field details.
		 * @return {V1Discount} Success
		 */
		CreateDiscount(location_id: string, requestBody: V1Discount): Observable<V1Discount> {
			return this.http.post<V1Discount>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/discounts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies the details of an existing discount.
		 * Modifies the details of an existing discount.
		 * Put v1/{location_id}/discounts/{discount_id}
		 * @param {string} location_id The ID of the category's associated location.
		 * @param {string} discount_id The ID of the discount to edit.
		 * @param {V1Discount} requestBody An object containing the fields to POST for the request.
		 * See the corresponding object definition for field details.
		 * @return {V1Discount} Success
		 */
		UpdateDiscount(location_id: string, discount_id: string, requestBody: V1Discount): Observable<V1Discount> {
			return this.http.put<V1Discount>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/discounts/' + (discount_id == null ? '' : encodeURIComponent(discount_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing discount.
		 * Deletes an existing discount.
		 * Delete v1/{location_id}/discounts/{discount_id}
		 * @param {string} location_id The ID of the item's associated location.
		 * @param {string} discount_id The ID of the discount to delete.
		 * @return {V1Discount} Success
		 */
		DeleteDiscount(location_id: string, discount_id: string): Observable<V1Discount> {
			return this.http.delete<V1Discount>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/discounts/' + (discount_id == null ? '' : encodeURIComponent(discount_id)), {});
		}

		/**
		 * Lists all of a location's fees (taxes).
		 * Lists all of a location's fees (taxes).
		 * Get v1/{location_id}/fees
		 * @param {string} location_id The ID of the location to list fees for.
		 * @return {Array<V1Fee>} Success
		 */
		ListFees(location_id: string): Observable<Array<V1Fee>> {
			return this.http.get<Array<V1Fee>>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/fees', {});
		}

		/**
		 * Creates a fee (tax).
		 * Creates a fee (tax).
		 * Post v1/{location_id}/fees
		 * @param {string} location_id The ID of the location to create a fee for.
		 * @param {V1Fee} requestBody An object containing the fields to POST for the request.
		 * See the corresponding object definition for field details.
		 * @return {V1Fee} Success
		 */
		CreateFee(location_id: string, requestBody: V1Fee): Observable<V1Fee> {
			return this.http.post<V1Fee>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/fees', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies the details of an existing fee (tax).
		 * Modifies the details of an existing fee (tax).
		 * Put v1/{location_id}/fees/{fee_id}
		 * @param {string} location_id The ID of the fee's associated location.
		 * @param {string} fee_id The ID of the fee to edit.
		 * @param {V1Fee} requestBody An object containing the fields to POST for the request.
		 * See the corresponding object definition for field details.
		 * @return {V1Fee} Success
		 */
		UpdateFee(location_id: string, fee_id: string, requestBody: V1Fee): Observable<V1Fee> {
			return this.http.put<V1Fee>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/fees/' + (fee_id == null ? '' : encodeURIComponent(fee_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing fee (tax).
		 * Deletes an existing fee (tax).
		 * Delete v1/{location_id}/fees/{fee_id}
		 * @param {string} location_id The ID of the fee's associated location.
		 * @param {string} fee_id The ID of the fee to delete.
		 * @return {V1Fee} Success
		 */
		DeleteFee(location_id: string, fee_id: string): Observable<V1Fee> {
			return this.http.delete<V1Fee>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/fees/' + (fee_id == null ? '' : encodeURIComponent(fee_id)), {});
		}

		/**
		 * Provides inventory information for all of a merchant's inventory-enabled item variations.
		 * Provides inventory information for all of a merchant's inventory-enabled item variations.
		 * Get v1/{location_id}/inventory
		 * @param {string} location_id The ID of the item's associated location.
		 * @param {number} limit The maximum number of inventory entries to return in a single response. This value cannot exceed 1000.
		 * @param {string} batch_token A pagination cursor to retrieve the next set of results for your
		 * original query to the endpoint.
		 * @return {Array<V1InventoryEntry>} Success
		 */
		ListInventory(location_id: string, limit: number | null | undefined, batch_token: string | null | undefined): Observable<Array<V1InventoryEntry>> {
			return this.http.get<Array<V1InventoryEntry>>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/inventory&limit=' + limit + '&batch_token=' + (batch_token == null ? '' : encodeURIComponent(batch_token)), {});
		}

		/**
		 * Adjusts an item variation's current available inventory.
		 * Adjusts an item variation's current available inventory.
		 * Post v1/{location_id}/inventory/{variation_id}
		 * @param {string} location_id The ID of the item's associated location.
		 * @param {string} variation_id The ID of the variation to adjust inventory information for.
		 * @param {V1AdjustInventoryRequest} requestBody An object containing the fields to POST for the request.
		 * See the corresponding object definition for field details.
		 * @return {V1InventoryEntry} Success
		 */
		AdjustInventory(location_id: string, variation_id: string, requestBody: V1AdjustInventoryRequest): Observable<V1InventoryEntry> {
			return this.http.post<V1InventoryEntry>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/inventory/' + (variation_id == null ? '' : encodeURIComponent(variation_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides summary information for all of a location's items.
		 * Provides summary information for all of a location's items.
		 * Get v1/{location_id}/items
		 * @param {string} location_id The ID of the location to list items for.
		 * @param {string} batch_token A pagination cursor to retrieve the next set of results for your
		 * original query to the endpoint.
		 * @return {Array<V1Item>} Success
		 */
		ListItems(location_id: string, batch_token: string | null | undefined): Observable<Array<V1Item>> {
			return this.http.get<Array<V1Item>>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/items&batch_token=' + (batch_token == null ? '' : encodeURIComponent(batch_token)), {});
		}

		/**
		 * Creates an item and at least one variation for it.
		 * Creates an item and at least one variation for it.
		 * Post v1/{location_id}/items
		 * @param {string} location_id The ID of the location to create an item for.
		 * @param {V1Item} requestBody An object containing the fields to POST for the request.
		 * See the corresponding object definition for field details.
		 * @return {V1Item} Success
		 */
		CreateItem(location_id: string, requestBody: V1Item): Observable<V1Item> {
			return this.http.post<V1Item>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/items', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides the details for a single item, including associated modifier lists and fees.
		 * Provides the details for a single item, including associated modifier lists and fees.
		 * Get v1/{location_id}/items/{item_id}
		 * @param {string} location_id The ID of the item's associated location.
		 * @param {string} item_id The item's ID.
		 * @return {V1Item} Success
		 */
		RetrieveItem(location_id: string, item_id: string): Observable<V1Item> {
			return this.http.get<V1Item>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/items/' + (item_id == null ? '' : encodeURIComponent(item_id)), {});
		}

		/**
		 * Modifies the core details of an existing item.
		 * Modifies the core details of an existing item.
		 * Put v1/{location_id}/items/{item_id}
		 * @param {string} location_id The ID of the item's associated location.
		 * @param {string} item_id The ID of the item to modify.
		 * @param {V1Item} requestBody An object containing the fields to POST for the request.
		 * See the corresponding object definition for field details.
		 * @return {V1Item} Success
		 */
		UpdateItem(location_id: string, item_id: string, requestBody: V1Item): Observable<V1Item> {
			return this.http.put<V1Item>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/items/' + (item_id == null ? '' : encodeURIComponent(item_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing item and all item variations associated with it.
		 * Deletes an existing item and all item variations associated with it.
		 * Delete v1/{location_id}/items/{item_id}
		 * @param {string} location_id The ID of the item's associated location.
		 * @param {string} item_id The ID of the item to modify.
		 * @return {V1Item} Success
		 */
		DeleteItem(location_id: string, item_id: string): Observable<V1Item> {
			return this.http.delete<V1Item>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/items/' + (item_id == null ? '' : encodeURIComponent(item_id)), {});
		}

		/**
		 * Associates a fee with an item, meaning the fee is automatically applied to the item in Square Register.
		 * Associates a fee with an item, meaning the fee is automatically applied to the item in Square Register.
		 * Put v1/{location_id}/items/{item_id}/fees/{fee_id}
		 * @param {string} location_id The ID of the fee's associated location.
		 * @param {string} item_id The ID of the item to add the fee to.
		 * @param {string} fee_id The ID of the fee to apply.
		 * @return {V1Item} Success
		 */
		ApplyFee(location_id: string, item_id: string, fee_id: string): Observable<V1Item> {
			return this.http.put<V1Item>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/items/' + (item_id == null ? '' : encodeURIComponent(item_id)) + '/fees/' + (fee_id == null ? '' : encodeURIComponent(fee_id)), null, {});
		}

		/**
		 * Removes a fee assocation from an item, meaning the fee is no longer automatically applied to the item in Square Register.
		 * Removes a fee assocation from an item, meaning the fee is no longer automatically applied to the item in Square Register.
		 * Delete v1/{location_id}/items/{item_id}/fees/{fee_id}
		 * @param {string} location_id The ID of the fee's associated location.
		 * @param {string} item_id The ID of the item to add the fee to.
		 * @param {string} fee_id The ID of the fee to apply.
		 * @return {V1Item} Success
		 */
		RemoveFee(location_id: string, item_id: string, fee_id: string): Observable<V1Item> {
			return this.http.delete<V1Item>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/items/' + (item_id == null ? '' : encodeURIComponent(item_id)) + '/fees/' + (fee_id == null ? '' : encodeURIComponent(fee_id)), {});
		}

		/**
		 * Associates a modifier list with an item, meaning modifier options from the list can be applied to the item.
		 * Associates a modifier list with an item, meaning modifier options from the list can be applied to the item.
		 * Put v1/{location_id}/items/{item_id}/modifier-lists/{modifier_list_id}
		 * @param {string} location_id The ID of the item's associated location.
		 * @param {string} modifier_list_id The ID of the modifier list to apply.
		 * @param {string} item_id The ID of the item to add the modifier list to.
		 * @return {V1Item} Success
		 */
		ApplyModifierList(location_id: string, modifier_list_id: string, item_id: string): Observable<V1Item> {
			return this.http.put<V1Item>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/items/' + (item_id == null ? '' : encodeURIComponent(item_id)) + '/modifier-lists/' + (modifier_list_id == null ? '' : encodeURIComponent(modifier_list_id)), null, {});
		}

		/**
		 * Removes a modifier list association from an item, meaning modifier options from the list can no longer be applied to the item.
		 * Removes a modifier list association from an item, meaning modifier options from the list can no longer be applied to the item.
		 * Delete v1/{location_id}/items/{item_id}/modifier-lists/{modifier_list_id}
		 * @param {string} location_id The ID of the item's associated location.
		 * @param {string} modifier_list_id The ID of the modifier list to remove.
		 * @param {string} item_id The ID of the item to remove the modifier list from.
		 * @return {V1Item} Success
		 */
		RemoveModifierList(location_id: string, modifier_list_id: string, item_id: string): Observable<V1Item> {
			return this.http.delete<V1Item>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/items/' + (item_id == null ? '' : encodeURIComponent(item_id)) + '/modifier-lists/' + (modifier_list_id == null ? '' : encodeURIComponent(modifier_list_id)), {});
		}

		/**
		 * Creates an item variation for an existing item.
		 * Creates an item variation for an existing item.
		 * Post v1/{location_id}/items/{item_id}/variations
		 * @param {string} location_id The ID of the item's associated location.
		 * @param {string} item_id The item's ID.
		 * @param {V1Variation} requestBody An object containing the fields to POST for the request.
		 * See the corresponding object definition for field details.
		 * @return {V1Variation} Success
		 */
		CreateVariation(location_id: string, item_id: string, requestBody: V1Variation): Observable<V1Variation> {
			return this.http.post<V1Variation>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/items/' + (item_id == null ? '' : encodeURIComponent(item_id)) + '/variations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies the details of an existing item variation.
		 * Modifies the details of an existing item variation.
		 * Put v1/{location_id}/items/{item_id}/variations/{variation_id}
		 * @param {string} location_id The ID of the item's associated location.
		 * @param {string} item_id The ID of the item to modify.
		 * @param {string} variation_id The ID of the variation to modify.
		 * @param {V1Variation} requestBody An object containing the fields to POST for the request.
		 * See the corresponding object definition for field details.
		 * @return {V1Variation} Success
		 */
		UpdateVariation(location_id: string, item_id: string, variation_id: string, requestBody: V1Variation): Observable<V1Variation> {
			return this.http.put<V1Variation>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/items/' + (item_id == null ? '' : encodeURIComponent(item_id)) + '/variations/' + (variation_id == null ? '' : encodeURIComponent(variation_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing item variation from an item.
		 * Deletes an existing item variation from an item.
		 * Delete v1/{location_id}/items/{item_id}/variations/{variation_id}
		 * @param {string} location_id The ID of the item's associated location.
		 * @param {string} item_id The ID of the item to delete.
		 * @param {string} variation_id The ID of the variation to delete.
		 * @return {V1Variation} Success
		 */
		DeleteVariation(location_id: string, item_id: string, variation_id: string): Observable<V1Variation> {
			return this.http.delete<V1Variation>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/items/' + (item_id == null ? '' : encodeURIComponent(item_id)) + '/variations/' + (variation_id == null ? '' : encodeURIComponent(variation_id)), {});
		}

		/**
		 * Lists all of a location's modifier lists.
		 * Lists all of a location's modifier lists.
		 * Get v1/{location_id}/modifier-lists
		 * @param {string} location_id The ID of the location to list modifier lists for.
		 * @return {Array<V1ModifierList>} Success
		 */
		ListModifierLists(location_id: string): Observable<Array<V1ModifierList>> {
			return this.http.get<Array<V1ModifierList>>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/modifier-lists', {});
		}

		/**
		 * Creates an item modifier list and at least one modifier option for it.
		 * Creates an item modifier list and at least one modifier option for it.
		 * Post v1/{location_id}/modifier-lists
		 * @param {string} location_id The ID of the location to create a modifier list for.
		 * @param {V1ModifierList} requestBody An object containing the fields to POST for the request.
		 * See the corresponding object definition for field details.
		 * @return {V1ModifierList} Success
		 */
		CreateModifierList(location_id: string, requestBody: V1ModifierList): Observable<V1ModifierList> {
			return this.http.post<V1ModifierList>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/modifier-lists', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides the details for a single modifier list.
		 * Provides the details for a single modifier list.
		 * Get v1/{location_id}/modifier-lists/{modifier_list_id}
		 * @param {string} location_id The ID of the item's associated location.
		 * @param {string} modifier_list_id The modifier list's ID.
		 * @return {V1ModifierList} Success
		 */
		RetrieveModifierList(location_id: string, modifier_list_id: string): Observable<V1ModifierList> {
			return this.http.get<V1ModifierList>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/modifier-lists/' + (modifier_list_id == null ? '' : encodeURIComponent(modifier_list_id)), {});
		}

		/**
		 * Modifies the details of an existing item modifier list.
		 * Modifies the details of an existing item modifier list.
		 * Put v1/{location_id}/modifier-lists/{modifier_list_id}
		 * @param {string} location_id The ID of the item's associated location.
		 * @param {string} modifier_list_id The ID of the modifier list to edit.
		 * @param {V1UpdateModifierListRequest} requestBody An object containing the fields to POST for the request.
		 * See the corresponding object definition for field details.
		 * @return {V1ModifierList} Success
		 */
		UpdateModifierList(location_id: string, modifier_list_id: string, requestBody: V1UpdateModifierListRequest): Observable<V1ModifierList> {
			return this.http.put<V1ModifierList>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/modifier-lists/' + (modifier_list_id == null ? '' : encodeURIComponent(modifier_list_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing item modifier list and all modifier options associated with it.
		 * Deletes an existing item modifier list and all modifier options associated with it.
		 * Delete v1/{location_id}/modifier-lists/{modifier_list_id}
		 * @param {string} location_id The ID of the item's associated location.
		 * @param {string} modifier_list_id The ID of the modifier list to delete.
		 * @return {V1ModifierList} Success
		 */
		DeleteModifierList(location_id: string, modifier_list_id: string): Observable<V1ModifierList> {
			return this.http.delete<V1ModifierList>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/modifier-lists/' + (modifier_list_id == null ? '' : encodeURIComponent(modifier_list_id)), {});
		}

		/**
		 * Creates an item modifier option and adds it to a modifier list.
		 * Creates an item modifier option and adds it to a modifier list.
		 * Post v1/{location_id}/modifier-lists/{modifier_list_id}/modifier-options
		 * @param {string} location_id The ID of the item's associated location.
		 * @param {string} modifier_list_id The ID of the modifier list to edit.
		 * @param {V1ModifierOption} requestBody An object containing the fields to POST for the request.
		 * See the corresponding object definition for field details.
		 * @return {V1ModifierOption} Success
		 */
		CreateModifierOption(location_id: string, modifier_list_id: string, requestBody: V1ModifierOption): Observable<V1ModifierOption> {
			return this.http.post<V1ModifierOption>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/modifier-lists/' + (modifier_list_id == null ? '' : encodeURIComponent(modifier_list_id)) + '/modifier-options', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies the details of an existing item modifier option.
		 * Modifies the details of an existing item modifier option.
		 * Put v1/{location_id}/modifier-lists/{modifier_list_id}/modifier-options/{modifier_option_id}
		 * @param {string} location_id The ID of the item's associated location.
		 * @param {string} modifier_list_id The ID of the modifier list to edit.
		 * @param {string} modifier_option_id The ID of the modifier list to edit.
		 * @param {V1ModifierOption} requestBody An object containing the fields to POST for the request.
		 * See the corresponding object definition for field details.
		 * @return {V1ModifierOption} Success
		 */
		UpdateModifierOption(location_id: string, modifier_list_id: string, modifier_option_id: string, requestBody: V1ModifierOption): Observable<V1ModifierOption> {
			return this.http.put<V1ModifierOption>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/modifier-lists/' + (modifier_list_id == null ? '' : encodeURIComponent(modifier_list_id)) + '/modifier-options/' + (modifier_option_id == null ? '' : encodeURIComponent(modifier_option_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing item modifier option from a modifier list.
		 * Deletes an existing item modifier option from a modifier list.
		 * Delete v1/{location_id}/modifier-lists/{modifier_list_id}/modifier-options/{modifier_option_id}
		 * @param {string} location_id The ID of the item's associated location.
		 * @param {string} modifier_list_id The ID of the modifier list to delete.
		 * @param {string} modifier_option_id The ID of the modifier list to edit.
		 * @return {V1ModifierOption} Success
		 */
		DeleteModifierOption(location_id: string, modifier_list_id: string, modifier_option_id: string): Observable<V1ModifierOption> {
			return this.http.delete<V1ModifierOption>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/modifier-lists/' + (modifier_list_id == null ? '' : encodeURIComponent(modifier_list_id)) + '/modifier-options/' + (modifier_option_id == null ? '' : encodeURIComponent(modifier_option_id)), {});
		}

		/**
		 * Provides summary information for a merchant's online store orders.
		 * Provides summary information for a merchant's online store orders.
		 * Get v1/{location_id}/orders
		 * @param {string} location_id The ID of the location to list online store orders for.
		 * @param {ListEmployeesOrder} order TThe order in which payments are listed in the response.
		 * @param {number} limit The maximum number of payments to return in a single response. This value cannot exceed 200.
		 * @param {string} batch_token A pagination cursor to retrieve the next set of results for your
		 * original query to the endpoint.
		 * @return {Array<V1Order>} Success
		 */
		ListOrders(location_id: string, order: ListEmployeesOrder | null | undefined, limit: number | null | undefined, batch_token: string | null | undefined): Observable<Array<V1Order>> {
			return this.http.get<Array<V1Order>>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/orders&order=' + order + '&limit=' + limit + '&batch_token=' + (batch_token == null ? '' : encodeURIComponent(batch_token)), {});
		}

		/**
		 * Provides comprehensive information for a single online store order, including the order's history.
		 * Provides comprehensive information for a single online store order, including the order's history.
		 * Get v1/{location_id}/orders/{order_id}
		 * @param {string} location_id The ID of the order's associated location.
		 * @param {string} order_id The order's Square-issued ID. You obtain this value from Order objects returned by the List Orders endpoint
		 * @return {V1Order} Success
		 */
		RetrieveOrder(location_id: string, order_id: string): Observable<V1Order> {
			return this.http.get<V1Order>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/orders/' + (order_id == null ? '' : encodeURIComponent(order_id)), {});
		}

		/**
		 * Updates the details of an online store order. Every update you perform on an order corresponds to one of three actions:
		 * Updates the details of an online store order. Every update you perform on an order corresponds to one of three actions:
		 * Put v1/{location_id}/orders/{order_id}
		 * @param {string} location_id The ID of the order's associated location.
		 * @param {string} order_id The order's Square-issued ID. You obtain this value from Order objects returned by the List Orders endpoint
		 * @param {V1UpdateOrderRequest} requestBody An object containing the fields to POST for the request.
		 * See the corresponding object definition for field details.
		 * @return {V1Order} Success
		 */
		UpdateOrder(location_id: string, order_id: string, requestBody: V1UpdateOrderRequest): Observable<V1Order> {
			return this.http.put<V1Order>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/orders/' + (order_id == null ? '' : encodeURIComponent(order_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all of a location's Favorites pages in Square Register.
		 * Lists all of a location's Favorites pages in Square Register.
		 * Get v1/{location_id}/pages
		 * @param {string} location_id The ID of the location to list Favorites pages for.
		 * @return {Array<V1Page>} Success
		 */
		ListPages(location_id: string): Observable<Array<V1Page>> {
			return this.http.get<Array<V1Page>>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/pages', {});
		}

		/**
		 * Creates a Favorites page in Square Register.
		 * Creates a Favorites page in Square Register.
		 * Post v1/{location_id}/pages
		 * @param {string} location_id The ID of the location to create an item for.
		 * @param {V1Page} requestBody An object containing the fields to POST for the request.
		 * See the corresponding object definition for field details.
		 * @return {V1Page} Success
		 */
		CreatePage(location_id: string, requestBody: V1Page): Observable<V1Page> {
			return this.http.post<V1Page>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/pages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies the details of a Favorites page in Square Register.
		 * Modifies the details of a Favorites page in Square Register.
		 * Put v1/{location_id}/pages/{page_id}
		 * @param {string} location_id The ID of the Favorites page's associated location
		 * @param {string} page_id The ID of the page to modify.
		 * @param {V1Page} requestBody An object containing the fields to POST for the request.
		 * See the corresponding object definition for field details.
		 * @return {V1Page} Success
		 */
		UpdatePage(location_id: string, page_id: string, requestBody: V1Page): Observable<V1Page> {
			return this.http.put<V1Page>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/pages/' + (page_id == null ? '' : encodeURIComponent(page_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing Favorites page and all of its cells.
		 * Deletes an existing Favorites page and all of its cells.
		 * Delete v1/{location_id}/pages/{page_id}
		 * @param {string} location_id The ID of the Favorites page's associated location.
		 * @param {string} page_id The ID of the page to delete.
		 * @return {V1Page} Success
		 */
		DeletePage(location_id: string, page_id: string): Observable<V1Page> {
			return this.http.delete<V1Page>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/pages/' + (page_id == null ? '' : encodeURIComponent(page_id)), {});
		}

		/**
		 * Modifies a cell of a Favorites page in Square Register.
		 * Modifies a cell of a Favorites page in Square Register.
		 * Put v1/{location_id}/pages/{page_id}/cells
		 * @param {string} location_id The ID of the Favorites page's associated location.
		 * @param {string} page_id The ID of the page the cell belongs to.
		 * @param {V1PageCell} requestBody An object containing the fields to POST for the request.
		 * See the corresponding object definition for field details.
		 * @return {V1Page} Success
		 */
		UpdatePageCell(location_id: string, page_id: string, requestBody: V1PageCell): Observable<V1Page> {
			return this.http.put<V1Page>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/pages/' + (page_id == null ? '' : encodeURIComponent(page_id)) + '/cells', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a cell from a Favorites page in Square Register.
		 * Deletes a cell from a Favorites page in Square Register.
		 * Delete v1/{location_id}/pages/{page_id}/cells
		 * @param {string} location_id The ID of the Favorites page's associated location.
		 * @param {string} page_id The ID of the page to delete.
		 * @param {string} row The row of the cell to clear. Always an integer between 0 and 4, inclusive. Row 0 is the top row.
		 * @param {string} column The column of the cell to clear. Always an integer between 0 and 4, inclusive. Column 0 is the leftmost column.
		 * @return {V1Page} Success
		 */
		DeletePageCell(location_id: string, page_id: string, row: string | null | undefined, column: string | null | undefined): Observable<V1Page> {
			return this.http.delete<V1Page>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/pages/' + (page_id == null ? '' : encodeURIComponent(page_id)) + '/cells&row=' + (row == null ? '' : encodeURIComponent(row)) + '&column=' + (column == null ? '' : encodeURIComponent(column)), {});
		}

		/**
		 * Provides summary information for all payments taken by a merchant or any of the merchant's mobile staff during a date range. Date ranges cannot exceed one year in length. See Date ranges for details of inclusive and exclusive dates.
		 * Provides summary information for all payments taken by a merchant or any of the merchant's mobile staff during a date range. Date ranges cannot exceed one year in length. See Date ranges for details of inclusive and exclusive dates.
		 * Get v1/{location_id}/payments
		 * @param {string} location_id The ID of the location to list payments for. If you specify me, this endpoint returns payments aggregated from all of the business's locations.
		 * @param {ListEmployeesOrder} order The order in which payments are listed in the response.
		 * @param {string} begin_time The beginning of the requested reporting period, in ISO 8601 format. If this value is before January 1, 2013 (2013-01-01T00:00:00Z), this endpoint returns an error. Default value: The current time minus one year.
		 * @param {string} end_time The end of the requested reporting period, in ISO 8601 format. If this value is more than one year greater than begin_time, this endpoint returns an error. Default value: The current time.
		 * @param {number} limit The maximum number of payments to return in a single response. This value cannot exceed 200.
		 * @param {string} batch_token A pagination cursor to retrieve the next set of results for your
		 * original query to the endpoint.
		 * @return {Array<V1Payment>} Success
		 */
		ListPayments(location_id: string, order: ListEmployeesOrder | null | undefined, begin_time: string | null | undefined, end_time: string | null | undefined, limit: number | null | undefined, batch_token: string | null | undefined): Observable<Array<V1Payment>> {
			return this.http.get<Array<V1Payment>>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/payments&order=' + order + '&begin_time=' + (begin_time == null ? '' : encodeURIComponent(begin_time)) + '&end_time=' + (end_time == null ? '' : encodeURIComponent(end_time)) + '&limit=' + limit + '&batch_token=' + (batch_token == null ? '' : encodeURIComponent(batch_token)), {});
		}

		/**
		 * Provides comprehensive information for a single payment.
		 * Provides comprehensive information for a single payment.
		 * Get v1/{location_id}/payments/{payment_id}
		 * @param {string} location_id The ID of the payment's associated location.
		 * @param {string} payment_id The payment's Square-issued ID. You obtain this value from Payment objects returned by the List Payments endpoint, or Settlement objects returned by the List Settlements endpoint.
		 * @return {V1Payment} Success
		 */
		RetrievePayment(location_id: string, payment_id: string): Observable<V1Payment> {
			return this.http.get<V1Payment>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/payments/' + (payment_id == null ? '' : encodeURIComponent(payment_id)), {});
		}

		/**
		 * Provides the details for all refunds initiated by a merchant or any of the merchant's mobile staff during a date range. Date ranges cannot exceed one year in length.
		 * Provides the details for all refunds initiated by a merchant or any of the merchant's mobile staff during a date range. Date ranges cannot exceed one year in length.
		 * Get v1/{location_id}/refunds
		 * @param {string} location_id The ID of the location to list refunds for.
		 * @param {ListEmployeesOrder} order TThe order in which payments are listed in the response.
		 * @param {string} begin_time The beginning of the requested reporting period, in ISO 8601 format. If this value is before January 1, 2013 (2013-01-01T00:00:00Z), this endpoint returns an error. Default value: The current time minus one year.
		 * @param {string} end_time The end of the requested reporting period, in ISO 8601 format. If this value is more than one year greater than begin_time, this endpoint returns an error. Default value: The current time.
		 * @param {number} limit The maximum number of payments to return in a single response. This value cannot exceed 200.
		 * @param {string} batch_token A pagination cursor to retrieve the next set of results for your
		 * original query to the endpoint.
		 * @return {Array<V1Refund>} Success
		 */
		V1TransactionsGetByLocation_idAndOrderAndBegin_timeAndEnd_timeAndLimitAndBatch_token(location_id: string, order: ListEmployeesOrder | null | undefined, begin_time: string | null | undefined, end_time: string | null | undefined, limit: number | null | undefined, batch_token: string | null | undefined): Observable<Array<V1Refund>> {
			return this.http.get<Array<V1Refund>>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/refunds&order=' + order + '&begin_time=' + (begin_time == null ? '' : encodeURIComponent(begin_time)) + '&end_time=' + (end_time == null ? '' : encodeURIComponent(end_time)) + '&limit=' + limit + '&batch_token=' + (batch_token == null ? '' : encodeURIComponent(batch_token)), {});
		}

		/**
		 * Issues a refund for a previously processed payment. You must issue a refund within 60 days of the associated payment.
		 * Issues a refund for a previously processed payment. You must issue a refund within 60 days of the associated payment.
		 * Post v1/{location_id}/refunds
		 * @param {string} location_id The ID of the original payment's associated location.
		 * @param {V1CreateRefundRequest} requestBody An object containing the fields to POST for the request.
		 * See the corresponding object definition for field details.
		 * @return {V1Refund} Success
		 */
		V1TransactionsPostByLocation_id(location_id: string, requestBody: V1CreateRefundRequest): Observable<V1Refund> {
			return this.http.post<V1Refund>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/refunds', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides summary information for all deposits and withdrawals initiated by Square to a merchant's bank account during a date range. Date ranges cannot exceed one year in length.
		 * Provides summary information for all deposits and withdrawals initiated by Square to a merchant's bank account during a date range. Date ranges cannot exceed one year in length.
		 * Get v1/{location_id}/settlements
		 * @param {string} location_id The ID of the location to list settlements for. If you specify me, this endpoint returns payments aggregated from all of the business's locations.
		 * @param {ListEmployeesOrder} order TThe order in which payments are listed in the response.
		 * @param {string} begin_time The beginning of the requested reporting period, in ISO 8601 format. If this value is before January 1, 2013 (2013-01-01T00:00:00Z), this endpoint returns an error. Default value: The current time minus one year.
		 * @param {string} end_time The end of the requested reporting period, in ISO 8601 format. If this value is more than one year greater than begin_time, this endpoint returns an error. Default value: The current time.
		 * @param {number} limit The maximum number of payments to return in a single response. This value cannot exceed 200.
		 * @param {ListSettlementsStatus} status Provide this parameter to retrieve only settlements with a particular status (SENT or FAILED).
		 * @param {string} batch_token A pagination cursor to retrieve the next set of results for your
		 * original query to the endpoint.
		 * @return {Array<V1Settlement>} Success
		 */
		ListSettlements(location_id: string, order: ListEmployeesOrder | null | undefined, begin_time: string | null | undefined, end_time: string | null | undefined, limit: number | null | undefined, status: ListSettlementsStatus | null | undefined, batch_token: string | null | undefined): Observable<Array<V1Settlement>> {
			return this.http.get<Array<V1Settlement>>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/settlements&order=' + order + '&begin_time=' + (begin_time == null ? '' : encodeURIComponent(begin_time)) + '&end_time=' + (end_time == null ? '' : encodeURIComponent(end_time)) + '&limit=' + limit + '&status=' + status + '&batch_token=' + (batch_token == null ? '' : encodeURIComponent(batch_token)), {});
		}

		/**
		 * Provides comprehensive information for a single settlement, including the entries that contribute to the settlement's total.
		 * Provides comprehensive information for a single settlement, including the entries that contribute to the settlement's total.
		 * Get v1/{location_id}/settlements/{settlement_id}
		 * @param {string} location_id The ID of the settlements's associated location.
		 * @param {string} settlement_id The settlement's Square-issued ID. You obtain this value from Settlement objects returned by the List Settlements endpoint.
		 * @return {V1Settlement} Success
		 */
		RetrieveSettlement(location_id: string, settlement_id: string): Observable<V1Settlement> {
			return this.http.get<V1Settlement>(this.baseUri + 'v1/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/settlements/' + (settlement_id == null ? '' : encodeURIComponent(settlement_id)), {});
		}

		/**
		 * BatchDeleteCatalogObjects
		 * Deletes a set of [CatalogItem](#type-catalogitem)s based on the
		 * provided list of target IDs and returns a set of successfully deleted IDs in
		 * the response. Deletion is a cascading event such that all children of the
		 * targeted object are also deleted. For example, deleting a CatalogItem will
		 * also delete all of its [CatalogItemVariation](#type-catalogitemvariation)
		 * children.
		 * `BatchDeleteCatalogObjects` succeeds even if only a portion of the targeted
		 * IDs can be deleted. The response will only include IDs that were
		 * actually deleted.
		 * Post v2/catalog/batch-delete
		 * @param {BatchDeleteCatalogObjectsRequest} requestBody An object containing the fields to POST for the request.
		 * See the corresponding object definition for field details.
		 * @return {BatchDeleteCatalogObjectsResponse} Success
		 */
		BatchDeleteCatalogObjects(requestBody: BatchDeleteCatalogObjectsRequest): Observable<BatchDeleteCatalogObjectsResponse> {
			return this.http.post<BatchDeleteCatalogObjectsResponse>(this.baseUri + 'v2/catalog/batch-delete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * BatchRetrieveCatalogObjects
		 * Returns a set of objects based on the provided ID.
		 * Each [CatalogItem](#type-catalogitem) returned in the set includes all of its
		 * child information including: all of its
		 * [CatalogItemVariation](#type-catalogitemvariation) objects, references to
		 * its [CatalogModifierList](#type-catalogmodifierlist) objects, and the ids of
		 * any [CatalogTax](#type-catalogtax) objects that apply to it.
		 * Post v2/catalog/batch-retrieve
		 * @param {BatchRetrieveCatalogObjectsRequest} requestBody An object containing the fields to POST for the request.
		 * See the corresponding object definition for field details.
		 * @return {BatchRetrieveCatalogObjectsResponse} Success
		 */
		BatchRetrieveCatalogObjects(requestBody: BatchRetrieveCatalogObjectsRequest): Observable<BatchRetrieveCatalogObjectsResponse> {
			return this.http.post<BatchRetrieveCatalogObjectsResponse>(this.baseUri + 'v2/catalog/batch-retrieve', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * BatchUpsertCatalogObjects
		 * Creates or updates up to 10,000 target objects based on the provided
		 * list of objects. The target objects are grouped into batches and each batch is
		 * inserted/updated in an all-or-nothing manner. If an object within a batch is
		 * malformed in some way, or violates a database constraint, the entire batch
		 * containing that item will be disregarded. However, other batches in the same
		 * request may still succeed. Each batch may contain up to 1,000 objects, and
		 * batches will be processed in order as long as the total object count for the
		 * request (items, variations, modifier lists, discounts, and taxes) is no more
		 * than 10,000.
		 * Post v2/catalog/batch-upsert
		 * @param {BatchUpsertCatalogObjectsRequest} requestBody An object containing the fields to POST for the request.
		 * See the corresponding object definition for field details.
		 * @return {BatchUpsertCatalogObjectsResponse} Success
		 */
		BatchUpsertCatalogObjects(requestBody: BatchUpsertCatalogObjectsRequest): Observable<BatchUpsertCatalogObjectsResponse> {
			return this.http.post<BatchUpsertCatalogObjectsResponse>(this.baseUri + 'v2/catalog/batch-upsert', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * CatalogInfo
		 * Returns information about the Square Catalog API, such as batch size
		 * limits for `BatchUpsertCatalogObjects`.
		 * Get v2/catalog/info
		 * @return {CatalogInfoResponse} Success
		 */
		CatalogInfo(): Observable<CatalogInfoResponse> {
			return this.http.get<CatalogInfoResponse>(this.baseUri + 'v2/catalog/info', {});
		}

		/**
		 * ListCatalog
		 * Returns a list of [CatalogObject](#type-catalogobject)s that includes
		 * all objects of a set of desired types (for example, all [CatalogItem](#type-catalogitem)
		 * and [CatalogTax](#type-catalogtax) objects) in the catalog. The types parameter
		 * is specified as a comma-separated list of valid [CatalogObject](#type-catalogobject) types:
		 * `ITEM`, `ITEM_VARIATION`, `MODIFIER`, `MODIFIER_LIST`, `CATEGORY`, `DISCOUNT`, `TAX`.
		 * Get v2/catalog/list
		 * @param {string} cursor The pagination cursor returned in the previous response. Leave unset for an initial request.
		 * See [Paginating results](#paginatingresults) for more information.
		 * @param {string} types An optional case-insensitive, comma-separated list of object types to retrieve, for example
		 * `ITEM,ITEM_VARIATION,CATEGORY`.
		 * The legal values are taken from the [CatalogObjectType](#type-catalogobjecttype)
		 * enumeration, namely `"ITEM"`, `"ITEM_VARIATION"`, `"CATEGORY"`, `"DISCOUNT"`, `"TAX"`,
		 * `"MODIFIER"`, or `"MODIFIER_LIST"`.
		 * @return {ListCatalogResponse} Success
		 */
		ListCatalog(cursor: string | null | undefined, types: string | null | undefined): Observable<ListCatalogResponse> {
			return this.http.get<ListCatalogResponse>(this.baseUri + 'v2/catalog/list?cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&types=' + (types == null ? '' : encodeURIComponent(types)), {});
		}

		/**
		 * UpsertCatalogObject
		 * Creates or updates the target [CatalogObject](#type-catalogobject).
		 * Post v2/catalog/object
		 * @param {UpsertCatalogObjectRequest} requestBody An object containing the fields to POST for the request.
		 * See the corresponding object definition for field details.
		 * @return {UpsertCatalogObjectResponse} Success
		 */
		UpsertCatalogObject(requestBody: UpsertCatalogObjectRequest): Observable<UpsertCatalogObjectResponse> {
			return this.http.post<UpsertCatalogObjectResponse>(this.baseUri + 'v2/catalog/object', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * RetrieveCatalogObject
		 * Returns a single [CatalogItem](#type-catalogitem) as a
		 * [CatalogObject](#type-catalogobject) based on the provided ID. The returned
		 * object includes all of the relevant [CatalogItem](#type-catalogitem)
		 * information including: [CatalogItemVariation](#type-catalogitemvariation)
		 * children, references to its
		 * [CatalogModifierList](#type-catalogmodifierlist) objects, and the ids of
		 * any [CatalogTax](#type-catalogtax) objects that apply to it.
		 * Get v2/catalog/object/{object_id}
		 * @param {string} object_id The object ID of any type of [CatalogObject](#type-catalogobject)s to be retrieved.
		 * @param {boolean} include_related_objects If `true`, the response will include additional objects that are related to the
		 * requested object, as follows:
		 * If the `object` field of the response contains a [CatalogItem](#type-catalogitem),
		 * its associated [CatalogCategory](#type-catalogcategory), [CatalogTax](#type-catalogtax)es, and
		 * [CatalogModifierList](#type-catalogmodifierlist)s will be returned in the `related_objects` field of the
		 * response. If the `object` field of the response contains a [CatalogItemVariation](#type-catalogitemvariation),
		 * its parent [CatalogItem](#type-catalogitem) will be returned in the `related_objects` field of
		 * the response.
		 * Default value: `false`
		 * @return {RetrieveCatalogObjectResponse} Success
		 */
		RetrieveCatalogObject(object_id: string, include_related_objects: boolean | null | undefined): Observable<RetrieveCatalogObjectResponse> {
			return this.http.get<RetrieveCatalogObjectResponse>(this.baseUri + 'v2/catalog/object/' + (object_id == null ? '' : encodeURIComponent(object_id)) + '&include_related_objects=' + include_related_objects, {});
		}

		/**
		 * DeleteCatalogObject
		 * Deletes a single [CatalogObject](#type-catalogobject) based on the
		 * provided ID and returns the set of successfully deleted IDs in the response.
		 * Deletion is a cascading event such that all children of the targeted object
		 * are also deleted. For example, deleting a [CatalogItem](#type-catalogitem)
		 * will also delete all of its
		 * [CatalogItemVariation](#type-catalogitemvariation) children.
		 * Delete v2/catalog/object/{object_id}
		 * @param {string} object_id The ID of the [CatalogObject](#type-catalogobject) to be deleted. When an object is deleted, other
		 * objects in the graph that depend on that object will be deleted as well (for example, deleting a
		 * [CatalogItem](#type-catalogitem) will delete its [CatalogItemVariation](#type-catalogitemvariation)s).
		 * @return {DeleteCatalogObjectResponse} Success
		 */
		DeleteCatalogObject(object_id: string): Observable<DeleteCatalogObjectResponse> {
			return this.http.delete<DeleteCatalogObjectResponse>(this.baseUri + 'v2/catalog/object/' + (object_id == null ? '' : encodeURIComponent(object_id)), {});
		}

		/**
		 * SearchCatalogObjects
		 * Queries the targeted catalog using a variety of query types
		 * ([CatalogQuerySortedAttribute](#type-catalogquerysortedattribute),
		 * ([CatalogQueryExact](#type-catalogqueryexact),
		 * ([CatalogQueryRange](#type-catalogqueryrange),
		 * ([CatalogQueryText](#type-catalogquerytext),
		 * ([CatalogQueryItemsForTax](#type-catalogqueryitemsfortax),
		 * ([CatalogQueryItemsForModifierList](#type-catalogqueryitemsformodifierlist)).
		 * Post v2/catalog/search
		 * @param {SearchCatalogObjectsRequest} requestBody An object containing the fields to POST for the request.
		 * See the corresponding object definition for field details.
		 * @return {SearchCatalogObjectsResponse} Success
		 */
		SearchCatalogObjects(requestBody: SearchCatalogObjectsRequest): Observable<SearchCatalogObjectsResponse> {
			return this.http.post<SearchCatalogObjectsResponse>(this.baseUri + 'v2/catalog/search', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * UpdateItemModifierLists
		 * Updates the [CatalogModifierList](#type-catalogmodifierlist) objects
		 * that apply to the targeted [CatalogItem](#type-catalogitem) without having
		 * to perform an upsert on the entire item.
		 * Post v2/catalog/update-item-modifier-lists
		 * @param {UpdateItemModifierListsRequest} requestBody An object containing the fields to POST for the request.
		 * See the corresponding object definition for field details.
		 * @return {UpdateItemModifierListsResponse} Success
		 */
		UpdateItemModifierLists(requestBody: UpdateItemModifierListsRequest): Observable<UpdateItemModifierListsResponse> {
			return this.http.post<UpdateItemModifierListsResponse>(this.baseUri + 'v2/catalog/update-item-modifier-lists', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * UpdateItemTaxes
		 * Updates the [CatalogTax](#type-catalogtax) objects that apply to the
		 * targeted [CatalogItem](#type-catalogitem) without having to perform an
		 * upsert on the entire item.
		 * Post v2/catalog/update-item-taxes
		 * @param {UpdateItemTaxesRequest} requestBody An object containing the fields to POST for the request.
		 * See the corresponding object definition for field details.
		 * @return {UpdateItemTaxesResponse} Success
		 */
		UpdateItemTaxes(requestBody: UpdateItemTaxesRequest): Observable<UpdateItemTaxesResponse> {
			return this.http.post<UpdateItemTaxesResponse>(this.baseUri + 'v2/catalog/update-item-taxes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * ListCustomers
		 * Lists a business's customers.
		 * Get v2/customers
		 * @param {string} cursor A pagination cursor returned by a previous call to this endpoint.
		 * Provide this to retrieve the next set of results for your original query.
		 * See [Paginating results](#paginatingresults) for more information.
		 * @return {ListCustomersResponse} Success
		 */
		ListCustomers(cursor: string | null | undefined): Observable<ListCustomersResponse> {
			return this.http.get<ListCustomersResponse>(this.baseUri + 'v2/customers?cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)), {});
		}

		/**
		 * CreateCustomer
		 * Creates a new customer for a business, which can have associated cards on file.
		 * You must provide __at least one__ of the following values in your request to this
		 * endpoint:
		 * - `given_name`
		 * - `family_name`
		 * - `company_name`
		 * - `email_address`
		 * - `phone_number`
		 * This endpoint does not accept an idempotency key. If you accidentally create
		 * a duplicate customer, you can delete it with the
		 * [DeleteCustomer](#endpoint-deletecustomer) endpoint.
		 * Post v2/customers
		 * @param {CreateCustomerRequest} requestBody An object containing the fields to POST for the request.
		 * See the corresponding object definition for field details.
		 * @return {CreateCustomerResponse} Success
		 */
		CreateCustomer(requestBody: CreateCustomerRequest): Observable<CreateCustomerResponse> {
			return this.http.post<CreateCustomerResponse>(this.baseUri + 'v2/customers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * RetrieveCustomer
		 * Returns details for a single customer.
		 * Get v2/customers/{customer_id}
		 * @param {string} customer_id The ID of the customer to retrieve.
		 * @return {RetrieveCustomerResponse} Success
		 */
		RetrieveCustomer(customer_id: string): Observable<RetrieveCustomerResponse> {
			return this.http.get<RetrieveCustomerResponse>(this.baseUri + 'v2/customers/' + (customer_id == null ? '' : encodeURIComponent(customer_id)), {});
		}

		/**
		 * UpdateCustomer
		 * Updates the details of an existing customer.
		 * The ID of the customer may change if the customer has been merged into another customer.
		 * You cannot edit a customer's cards on file with this endpoint. To make changes
		 * to a card on file, you must delete the existing card on file with the
		 * [DeleteCustomerCard](#endpoint-deletecustomercard) endpoint, then create a new one with the
		 * [CreateCustomerCard](#endpoint-createcustomercard) endpoint.
		 * Put v2/customers/{customer_id}
		 * @param {string} customer_id The ID of the customer to update.
		 * @param {UpdateCustomerRequest} requestBody An object containing the fields to POST for the request.
		 * See the corresponding object definition for field details.
		 * @return {UpdateCustomerResponse} Success
		 */
		UpdateCustomer(customer_id: string, requestBody: UpdateCustomerRequest): Observable<UpdateCustomerResponse> {
			return this.http.put<UpdateCustomerResponse>(this.baseUri + 'v2/customers/' + (customer_id == null ? '' : encodeURIComponent(customer_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * DeleteCustomer
		 * Deletes a customer from a business, along with any linked cards on file.
		 * Delete v2/customers/{customer_id}
		 * @param {string} customer_id The ID of the customer to delete.
		 * @return {DeleteCustomerResponse} Success
		 */
		DeleteCustomer(customer_id: string): Observable<DeleteCustomerResponse> {
			return this.http.delete<DeleteCustomerResponse>(this.baseUri + 'v2/customers/' + (customer_id == null ? '' : encodeURIComponent(customer_id)), {});
		}

		/**
		 * CreateCustomerCard
		 * Adds a card on file to an existing customer. In the United States
		 * Square takes care of automatically updating any cards on file that might
		 * have expired since you first attached them to a customer.
		 * Post v2/customers/{customer_id}/cards
		 * @param {string} customer_id The ID of the customer to link the card on file to.
		 * @param {CreateCustomerCardRequest} requestBody An object containing the fields to POST for the request.
		 * See the corresponding object definition for field details.
		 * @return {CreateCustomerCardResponse} Success
		 */
		CreateCustomerCard(customer_id: string, requestBody: CreateCustomerCardRequest): Observable<CreateCustomerCardResponse> {
			return this.http.post<CreateCustomerCardResponse>(this.baseUri + 'v2/customers/' + (customer_id == null ? '' : encodeURIComponent(customer_id)) + '/cards', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * DeleteCustomerCard
		 * Removes a card on file from a customer.
		 * Delete v2/customers/{customer_id}/cards/{card_id}
		 * @param {string} customer_id The ID of the customer that the card on file belongs to.
		 * @param {string} card_id The ID of the card on file to delete.
		 * @return {DeleteCustomerCardResponse} Success
		 */
		DeleteCustomerCard(customer_id: string, card_id: string): Observable<DeleteCustomerCardResponse> {
			return this.http.delete<DeleteCustomerCardResponse>(this.baseUri + 'v2/customers/' + (customer_id == null ? '' : encodeURIComponent(customer_id)) + '/cards/' + (card_id == null ? '' : encodeURIComponent(card_id)), {});
		}

		/**
		 * ListLocations
		 * Provides the details for all of a business's locations.
		 * Most other Connect API endpoints have a required `location_id` path parameter.
		 * The `id` field of the [`Location`](#type-location) objects returned by this
		 * endpoint correspond to that `location_id` parameter.
		 * Get v2/locations
		 * @return {ListLocationsResponse} Success
		 */
		LocationsGet(): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v2/locations', {});
		}

		/**
		 * CreateCheckout
		 * Creates a [Checkout](#type-checkout) response that links a
		 * `checkoutId` and `checkout_page_url` that customers can be directed to in
		 * order to provide their payment information using a payment processing
		 * workflow hosted on connect.squareup.com.
		 * Post v2/locations/{location_id}/checkouts
		 * @param {string} location_id The ID of the business location to associate the checkout with.
		 * @param {CreateCheckoutRequest} requestBody An object containing the fields to POST for the request.
		 * See the corresponding object definition for field details.
		 * @return {CreateCheckoutResponse} Success
		 */
		CreateCheckout(location_id: string, requestBody: CreateCheckoutRequest): Observable<CreateCheckoutResponse> {
			return this.http.post<CreateCheckoutResponse>(this.baseUri + 'v2/locations/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/checkouts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * ListRefunds
		 * Lists refunds for one of a business's locations.
		 * Refunds with a `status` of `PENDING` are not currently included in this
		 * endpoint's response.
		 * Max results per [page](#paginatingresults): 50
		 * Get v2/locations/{location_id}/refunds
		 * @param {string} location_id The ID of the location to list refunds for.
		 * @param {string} begin_time The beginning of the requested reporting period, in RFC 3339 format.
		 * See [Date ranges](#dateranges) for details on date inclusivity/exclusivity.
		 * Default value: The current time minus one year.
		 * @param {string} end_time The end of the requested reporting period, in RFC 3339 format.
		 * See [Date ranges](#dateranges) for details on date inclusivity/exclusivity.
		 * Default value: The current time.
		 * @param {CatalogQuerySortedAttributeSort_order} sort_order The order in which results are listed in the response (`ASC` for
		 * oldest first, `DESC` for newest first).
		 * Default value: `DESC`
		 * @param {string} cursor A pagination cursor returned by a previous call to this endpoint.
		 * Provide this to retrieve the next set of results for your original query.
		 * See [Paginating results](#paginatingresults) for more information.
		 * @return {ListRefundsResponse} Success
		 */
		TransactionsGetByLocation_idAndBegin_timeAndEnd_timeAndSort_orderAndCursor(location_id: string, begin_time: string | null | undefined, end_time: string | null | undefined, sort_order: CatalogQuerySortedAttributeSort_order | null | undefined, cursor: string | null | undefined): Observable<ListRefundsResponse> {
			return this.http.get<ListRefundsResponse>(this.baseUri + 'v2/locations/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/refunds&begin_time=' + (begin_time == null ? '' : encodeURIComponent(begin_time)) + '&end_time=' + (end_time == null ? '' : encodeURIComponent(end_time)) + '&sort_order=' + sort_order + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)), {});
		}

		/**
		 * ListTransactions
		 * Lists transactions for a particular location.
		 * Max results per [page](#paginatingresults): 50
		 * Get v2/locations/{location_id}/transactions
		 * @param {string} location_id The ID of the location to list transactions for.
		 * @param {string} begin_time The beginning of the requested reporting period, in RFC 3339 format.
		 * See [Date ranges](#dateranges) for details on date inclusivity/exclusivity.
		 * Default value: The current time minus one year.
		 * @param {string} end_time The end of the requested reporting period, in RFC 3339 format.
		 * See [Date ranges](#dateranges) for details on date inclusivity/exclusivity.
		 * Default value: The current time.
		 * @param {CatalogQuerySortedAttributeSort_order} sort_order The order in which results are listed in the response (`ASC` for
		 * oldest first, `DESC` for newest first).
		 * Default value: `DESC`
		 * @param {string} cursor A pagination cursor returned by a previous call to this endpoint.
		 * Provide this to retrieve the next set of results for your original query.
		 * See [Paginating results](#paginatingresults) for more information.
		 * @return {ListTransactionsResponse} Success
		 */
		ListTransactions(location_id: string, begin_time: string | null | undefined, end_time: string | null | undefined, sort_order: CatalogQuerySortedAttributeSort_order | null | undefined, cursor: string | null | undefined): Observable<ListTransactionsResponse> {
			return this.http.get<ListTransactionsResponse>(this.baseUri + 'v2/locations/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/transactions&begin_time=' + (begin_time == null ? '' : encodeURIComponent(begin_time)) + '&end_time=' + (end_time == null ? '' : encodeURIComponent(end_time)) + '&sort_order=' + sort_order + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)), {});
		}

		/**
		 * Charge
		 * Charges a card represented by a card nonce or a customer's card on file.
		 * Your request to this endpoint must include _either_:
		 * - A value for the `card_nonce` parameter (to charge a card nonce generated
		 * with the `SqPaymentForm`)
		 * - Values for the `customer_card_id` and `customer_id` parameters (to charge
		 * a customer's card on file)
		 * In order for an e-commerce payment to potentially qualify for
		 * [Square chargeback protection](https://squareup.com/help/article/5394), you
		 * _must_ provide values for the following parameters in your request:
		 * - `buyer_email_address`
		 * - At least one of `billing_address` or `shipping_address`
		 * When this response is returned, the amount of Square's processing fee might not yet be
		 * calculated. To obtain the processing fee, wait about ten seconds and call
		 * [RetrieveTransaction](#endpoint-retrievetransaction). See the `processing_fee_money`
		 * field of each [Tender included](#type-tender) in the transaction.
		 * Post v2/locations/{location_id}/transactions
		 * @param {string} location_id The ID of the location to associate the created transaction with.
		 * @param {ChargeRequest} requestBody An object containing the fields to POST for the request.
		 * See the corresponding object definition for field details.
		 * @return {ChargeResponse} Success
		 */
		Charge(location_id: string, requestBody: ChargeRequest): Observable<ChargeResponse> {
			return this.http.post<ChargeResponse>(this.baseUri + 'v2/locations/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/transactions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * RetrieveTransaction
		 * Retrieves details for a single transaction.
		 * Get v2/locations/{location_id}/transactions/{transaction_id}
		 * @param {string} location_id The ID of the transaction's associated location.
		 * @param {string} transaction_id The ID of the transaction to retrieve.
		 * @return {RetrieveTransactionResponse} Success
		 */
		RetrieveTransaction(location_id: string, transaction_id: string): Observable<RetrieveTransactionResponse> {
			return this.http.get<RetrieveTransactionResponse>(this.baseUri + 'v2/locations/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/transactions/' + (transaction_id == null ? '' : encodeURIComponent(transaction_id)), {});
		}

		/**
		 * CaptureTransaction
		 * Captures a transaction that was created with the [Charge](#endpoint-charge)
		 * endpoint with a `delay_capture` value of `true`.
		 * See [Delayed capture transactions](/articles/delayed-capture-transactions/)
		 * for more information.
		 * Post v2/locations/{location_id}/transactions/{transaction_id}/capture
		 * @return {CaptureTransactionResponse} Success
		 */
		CaptureTransaction(location_id: string, transaction_id: string): Observable<CaptureTransactionResponse> {
			return this.http.post<CaptureTransactionResponse>(this.baseUri + 'v2/locations/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/transactions/' + (transaction_id == null ? '' : encodeURIComponent(transaction_id)) + '/capture', null, {});
		}

		/**
		 * CreateRefund
		 * Initiates a refund for a previously charged tender.
		 * You must issue a refund within 120 days of the associated payment. See
		 * (this article)[https://squareup.com/help/us/en/article/5060] for more information
		 * on refund behavior.
		 * Post v2/locations/{location_id}/transactions/{transaction_id}/refund
		 * @param {string} location_id The ID of the original transaction's associated location.
		 * @param {string} transaction_id The ID of the original transaction that includes the tender to refund.
		 * @param {CreateRefundRequest} requestBody An object containing the fields to POST for the request.
		 * See the corresponding object definition for field details.
		 * @return {CreateRefundResponse} Success
		 */
		TransactionsPostByLocation_idAndTransaction_id(location_id: string, transaction_id: string, requestBody: CreateRefundRequest): Observable<CreateRefundResponse> {
			return this.http.post<CreateRefundResponse>(this.baseUri + 'v2/locations/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/transactions/' + (transaction_id == null ? '' : encodeURIComponent(transaction_id)) + '/refund', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * VoidTransaction
		 * Cancels a transaction that was created with the [Charge](#endpoint-charge)
		 * endpoint with a `delay_capture` value of `true`.
		 * See [Delayed capture transactions](/articles/delayed-capture-transactions/)
		 * for more information.
		 * Post v2/locations/{location_id}/transactions/{transaction_id}/void
		 * @return {VoidTransactionResponse} Success
		 */
		VoidTransaction(location_id: string, transaction_id: string): Observable<VoidTransactionResponse> {
			return this.http.post<VoidTransactionResponse>(this.baseUri + 'v2/locations/' + (location_id == null ? '' : encodeURIComponent(location_id)) + '/transactions/' + (transaction_id == null ? '' : encodeURIComponent(transaction_id)) + '/void', null, {});
		}
	}

	export enum ListEmployeesOrder { ASC = 0, DESC = 1 }

	export enum ListSettlementsStatus { SENT = 0, FAILED = 1 }

}

