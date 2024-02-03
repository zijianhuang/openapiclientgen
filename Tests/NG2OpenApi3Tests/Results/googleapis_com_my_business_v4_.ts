import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Request message for AccessControl.AcceptInvitation. */
	export interface AcceptInvitationRequest {
	}

	/** Request message for AccessControl.AcceptInvitation. */
	export interface AcceptInvitationRequestFormProperties {
	}
	export function CreateAcceptInvitationRequestFormGroup() {
		return new FormGroup<AcceptInvitationRequestFormProperties>({
		});

	}


	/** Physical adaptations made to the property in consideration of varying levels of human physical ability. */
	export interface Accessibility {

		/** Mobility accessible. Throughout the property there are physical adaptations to ease the stay of a person in a wheelchair, such as auto-opening doors, wide elevators, wide bathrooms or ramps. */
		mobilityAccessible?: boolean | null;

		/** Mobility accessible elevator. A lift that transports people from one level to another and is built to accommodate a wheelchair-using passenger owing to the width of its doors and placement of call buttons. */
		mobilityAccessibleElevator?: boolean | null;

		/** Mobility accessible elevator exception. */
		mobilityAccessibleElevatorException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Mobility accessible exception. */
		mobilityAccessibleException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Mobility accessible parking. The presence of a marked, designated area of prescribed size in which only registered, labeled vehicles transporting a person with physical challenges may park. */
		mobilityAccessibleParking?: boolean | null;

		/** Mobility accessible parking exception. */
		mobilityAccessibleParkingException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Mobility accessible pool. A swimming pool equipped with a mechanical chair that can be lowered and raised for the purpose of moving physically challenged guests into and out of the pool. May be powered by electricity or water. Also known as pool lift. */
		mobilityAccessiblePool?: boolean | null;

		/** Mobility accessible pool exception. */
		mobilityAccessiblePoolException?: AccessibilityMobilityAccessibleElevatorException | null;
	}

	/** Physical adaptations made to the property in consideration of varying levels of human physical ability. */
	export interface AccessibilityFormProperties {

		/** Mobility accessible. Throughout the property there are physical adaptations to ease the stay of a person in a wheelchair, such as auto-opening doors, wide elevators, wide bathrooms or ramps. */
		mobilityAccessible: FormControl<boolean | null | undefined>,

		/** Mobility accessible elevator. A lift that transports people from one level to another and is built to accommodate a wheelchair-using passenger owing to the width of its doors and placement of call buttons. */
		mobilityAccessibleElevator: FormControl<boolean | null | undefined>,

		/** Mobility accessible elevator exception. */
		mobilityAccessibleElevatorException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Mobility accessible exception. */
		mobilityAccessibleException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Mobility accessible parking. The presence of a marked, designated area of prescribed size in which only registered, labeled vehicles transporting a person with physical challenges may park. */
		mobilityAccessibleParking: FormControl<boolean | null | undefined>,

		/** Mobility accessible parking exception. */
		mobilityAccessibleParkingException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Mobility accessible pool. A swimming pool equipped with a mechanical chair that can be lowered and raised for the purpose of moving physically challenged guests into and out of the pool. May be powered by electricity or water. Also known as pool lift. */
		mobilityAccessiblePool: FormControl<boolean | null | undefined>,

		/** Mobility accessible pool exception. */
		mobilityAccessiblePoolException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,
	}
	export function CreateAccessibilityFormGroup() {
		return new FormGroup<AccessibilityFormProperties>({
			mobilityAccessible: new FormControl<boolean | null | undefined>(undefined),
			mobilityAccessibleElevator: new FormControl<boolean | null | undefined>(undefined),
			mobilityAccessibleElevatorException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			mobilityAccessibleException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			mobilityAccessibleParking: new FormControl<boolean | null | undefined>(undefined),
			mobilityAccessibleParkingException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			mobilityAccessiblePool: new FormControl<boolean | null | undefined>(undefined),
			mobilityAccessiblePoolException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
		});

	}

	export enum AccessibilityMobilityAccessibleElevatorException { EXCEPTION_UNSPECIFIED = 'EXCEPTION_UNSPECIFIED', UNDER_CONSTRUCTION = 'UNDER_CONSTRUCTION', DEPENDENT_ON_SEASON = 'DEPENDENT_ON_SEASON', DEPENDENT_ON_DAY_OF_WEEK = 'DEPENDENT_ON_DAY_OF_WEEK' }


	/** An account is a container for your business's locations. If you are the only user who manages locations for your business, you can use your personal Google Account. To share management of locations with multiple users, [create a business account] (https://support.google.com/business/answer/6085339?ref_topic=6085325). */
	export interface Account {

		/** The name of the account. *Note:* For an account with AccountType `PERSONAL`, this is the first and last name of the user account. */
		accountName?: string | null;

		/** Account reference number if provisioned. */
		accountNumber?: string | null;

		/** The resource name, in the format `accounts/{account_id}`. */
		name?: string | null;

		/** Additional Info stored for an organization. */
		organizationInfo?: OrganizationInfo;

		/** Output only. Specifies the PermissionLevel the caller has for this account. */
		permissionLevel?: AccountPermissionLevel | null;

		/** Output only. Specifies the AccountRole the caller has for this account. */
		role?: AccountRole | null;

		/** Indicates status of the account, such as whether the account has been verified by Google. */
		state?: AccountState;

		/** Output only. Specifies the AccountType of this account. */
		type?: AccountType | null;
	}

	/** An account is a container for your business's locations. If you are the only user who manages locations for your business, you can use your personal Google Account. To share management of locations with multiple users, [create a business account] (https://support.google.com/business/answer/6085339?ref_topic=6085325). */
	export interface AccountFormProperties {

		/** The name of the account. *Note:* For an account with AccountType `PERSONAL`, this is the first and last name of the user account. */
		accountName: FormControl<string | null | undefined>,

		/** Account reference number if provisioned. */
		accountNumber: FormControl<string | null | undefined>,

		/** The resource name, in the format `accounts/{account_id}`. */
		name: FormControl<string | null | undefined>,

		/** Output only. Specifies the PermissionLevel the caller has for this account. */
		permissionLevel: FormControl<AccountPermissionLevel | null | undefined>,

		/** Output only. Specifies the AccountRole the caller has for this account. */
		role: FormControl<AccountRole | null | undefined>,

		/** Output only. Specifies the AccountType of this account. */
		type: FormControl<AccountType | null | undefined>,
	}
	export function CreateAccountFormGroup() {
		return new FormGroup<AccountFormProperties>({
			accountName: new FormControl<string | null | undefined>(undefined),
			accountNumber: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			permissionLevel: new FormControl<AccountPermissionLevel | null | undefined>(undefined),
			role: new FormControl<AccountRole | null | undefined>(undefined),
			type: new FormControl<AccountType | null | undefined>(undefined),
		});

	}


	/** Additional Info stored for an organization. */
	export interface OrganizationInfo {

		/** The contact number for the organization. */
		phoneNumber?: string | null;

		/** Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an i18n-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478 */
		postalAddress?: PostalAddress;

		/** The registered domain for the account. */
		registeredDomain?: string | null;
	}

	/** Additional Info stored for an organization. */
	export interface OrganizationInfoFormProperties {

		/** The contact number for the organization. */
		phoneNumber: FormControl<string | null | undefined>,

		/** The registered domain for the account. */
		registeredDomain: FormControl<string | null | undefined>,
	}
	export function CreateOrganizationInfoFormGroup() {
		return new FormGroup<OrganizationInfoFormProperties>({
			phoneNumber: new FormControl<string | null | undefined>(undefined),
			registeredDomain: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an i18n-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478 */
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

		/** Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to ensure the value is correct. See http://cldr.unicode.org/ and http://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland. */
		regionCode?: string | null;

		/** The schema revision of the `PostalAddress`. This must be set to 0, which is the latest revision. All new revisions **must** be backward compatible with old revisions. */
		revision?: number | null;

		/** Optional. Additional, country-specific, sorting code. This is not used in most regions. Where it is used, the value is either a string like "CEDEX", optionally followed by a number (e.g. "CEDEX 7"), or just a number alone, representing the "sector code" (Jamaica), "delivery area indicator" (Malawi) or "post office indicator" (e.g. Côte d'Ivoire). */
		sortingCode?: string | null;

		/** Optional. Sublocality of the address. For example, this can be neighborhoods, boroughs, districts. */
		sublocality?: string | null;
	}

	/** Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an i18n-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478 */
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

		/** Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to ensure the value is correct. See http://cldr.unicode.org/ and http://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland. */
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

	export enum AccountPermissionLevel { PERMISSION_LEVEL_UNSPECIFIED = 'PERMISSION_LEVEL_UNSPECIFIED', OWNER_LEVEL = 'OWNER_LEVEL', MEMBER_LEVEL = 'MEMBER_LEVEL' }

	export enum AccountRole { ACCOUNT_ROLE_UNSPECIFIED = 'ACCOUNT_ROLE_UNSPECIFIED', OWNER = 'OWNER', CO_OWNER = 'CO_OWNER', MANAGER = 'MANAGER', COMMUNITY_MANAGER = 'COMMUNITY_MANAGER' }


	/** Indicates status of the account, such as whether the account has been verified by Google. */
	export interface AccountState {

		/** If verified, future locations that are created are automatically connected to Google Maps, and have Google+ pages created, without requiring moderation. */
		status?: AccountStateStatus | null;
	}

	/** Indicates status of the account, such as whether the account has been verified by Google. */
	export interface AccountStateFormProperties {

		/** If verified, future locations that are created are automatically connected to Google Maps, and have Google+ pages created, without requiring moderation. */
		status: FormControl<AccountStateStatus | null | undefined>,
	}
	export function CreateAccountStateFormGroup() {
		return new FormGroup<AccountStateFormProperties>({
			status: new FormControl<AccountStateStatus | null | undefined>(undefined),
		});

	}

	export enum AccountStateStatus { ACCOUNT_STATUS_UNSPECIFIED = 'ACCOUNT_STATUS_UNSPECIFIED', VERIFIED = 'VERIFIED', UNVERIFIED = 'UNVERIFIED', VERIFICATION_REQUESTED = 'VERIFICATION_REQUESTED' }

	export enum AccountType { ACCOUNT_TYPE_UNSPECIFIED = 'ACCOUNT_TYPE_UNSPECIFIED', PERSONAL = 'PERSONAL', LOCATION_GROUP = 'LOCATION_GROUP', USER_GROUP = 'USER_GROUP', ORGANIZATION = 'ORGANIZATION' }


	/** Amenities and features related to leisure and play. */
	export interface Activities {

		/** Beach access. The hotel property is in close proximity to a beach and offers a way to get to that beach. This can include a route to the beach such as stairs down if hotel is on a bluff, or a short trail. Not the same as beachfront (with beach access, the hotel's proximity is close to but not right on the beach). */
		beachAccess?: boolean | null;

		/** Beach access exception. */
		beachAccessException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Breach front. The hotel property is physically located on the beach alongside an ocean, sea, gulf, or bay. It is not on a lake, river, stream, or pond. The hotel is not separated from the beach by a public road allowing vehicular, pedestrian, or bicycle traffic. */
		beachFront?: boolean | null;

		/** Beach front exception. */
		beachFrontException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Bicycle rental. The hotel owns bicycles that it permits guests to borrow and use. Can be free or for a fee. */
		bicycleRental?: boolean | null;

		/** Bicycle rental exception. */
		bicycleRentalException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Boutique stores. There are stores selling clothing, jewelry, art and decor either on hotel premises or very close by. Does not refer to the hotel gift shop or convenience store. */
		boutiqueStores?: boolean | null;

		/** Boutique stores exception. */
		boutiqueStoresException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Casino. A space designated for gambling and gaming featuring croupier-run table and card games, as well as electronic slot machines. May be on hotel premises or located nearby. */
		casino?: boolean | null;

		/** Casino exception. */
		casinoException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Free bicycle rental. The hotel owns bicycles that it permits guests to borrow and use for free. */
		freeBicycleRental?: boolean | null;

		/** Free bicycle rental exception. */
		freeBicycleRentalException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Free watercraft rental. The hotel owns watercraft that it permits guests to borrow and use for free. */
		freeWatercraftRental?: boolean | null;

		/** Free Watercraft rental exception. */
		freeWatercraftRentalException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Game room. There is a room at the hotel containing electronic machines for play such as pinball, prize machines, driving simulators, and other items commonly found at a family fun center or arcade. May also include non-electronic games like pool, foosball, darts, and more. May or may not be designed for children. Also known as arcade, fun room, or family fun center. */
		gameRoom?: boolean | null;

		/** Game room exception. */
		gameRoomException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Golf. There is a golf course on hotel grounds or there is a nearby, independently run golf course that allows use by hotel guests. Can be free or for a fee. */
		golf?: boolean | null;

		/** Golf exception. */
		golfException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Horseback riding. The hotel has a horse barn onsite or an affiliation with a nearby barn to allow for guests to sit astride a horse and direct it to walk, trot, cantor, gallop and/or jump. Can be in a riding ring, on designated paths, or in the wilderness. May or may not involve instruction. */
		horsebackRiding?: boolean | null;

		/** Horseback riding exception. */
		horsebackRidingException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Nightclub. There is a room at the hotel with a bar, a dance floor, and seating where designated staffers play dance music. There may also be a designated area for the performance of live music, singing and comedy acts. */
		nightclub?: boolean | null;

		/** Nightclub exception. */
		nightclubException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Private beach. The beach which is in close proximity to the hotel is open only to guests. */
		privateBeach?: boolean | null;

		/** Private beach exception. */
		privateBeachException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Scuba. The provision for guests to dive under naturally occurring water fitted with a self-contained underwater breathing apparatus (SCUBA) for the purpose of exploring underwater life. Apparatus consists of a tank providing oxygen to the diver through a mask. Requires certification of the diver and supervision. The hotel may have the activity at its own waterfront or have an affiliation with a nearby facility. Required equipment is most often supplied to guests. Can be free or for a fee. Not snorkeling. Not done in a swimming pool. */
		scuba?: boolean | null;

		/** Scuba exception. */
		scubaException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Snorkeling. The provision for guests to participate in a recreational water activity in which swimmers wear a diving mask, a simple, shaped breathing tube and flippers/swim fins for the purpose of exploring below the surface of an ocean, gulf or lake. Does not usually require user certification or professional supervision. Equipment may or may not be available for rent or purchase. Not scuba diving. */
		snorkeling?: boolean | null;

		/** Snorkeling exception. */
		snorkelingException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Tennis. The hotel has the requisite court(s) on site or has an affiliation with a nearby facility for the purpose of providing guests with the opportunity to play a two-sided court-based game in which players use a stringed racquet to hit a ball across a net to the side of the opposing player. The court can be indoors or outdoors. Instructors, racquets and balls may or may not be provided. */
		tennis?: boolean | null;

		/** Tennis exception. */
		tennisException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Water skiing. The provision of giving guests the opportunity to be pulled across naturally occurring water while standing on skis and holding a tow rope attached to a motorboat. Can occur on hotel premises or at a nearby waterfront. Most often performed in a lake or ocean. */
		waterSkiing?: boolean | null;

		/** Water skiing exception. */
		waterSkiingException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Watercraft rental. The hotel owns water vessels that it permits guests to borrow and use. Can be free or for a fee. Watercraft may include boats, pedal boats, rowboats, sailboats, powerboats, canoes, kayaks, or personal watercraft (such as a Jet Ski). */
		watercraftRental?: boolean | null;

		/** Watercraft rental exception. */
		watercraftRentalException?: AccessibilityMobilityAccessibleElevatorException | null;
	}

	/** Amenities and features related to leisure and play. */
	export interface ActivitiesFormProperties {

		/** Beach access. The hotel property is in close proximity to a beach and offers a way to get to that beach. This can include a route to the beach such as stairs down if hotel is on a bluff, or a short trail. Not the same as beachfront (with beach access, the hotel's proximity is close to but not right on the beach). */
		beachAccess: FormControl<boolean | null | undefined>,

		/** Beach access exception. */
		beachAccessException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Breach front. The hotel property is physically located on the beach alongside an ocean, sea, gulf, or bay. It is not on a lake, river, stream, or pond. The hotel is not separated from the beach by a public road allowing vehicular, pedestrian, or bicycle traffic. */
		beachFront: FormControl<boolean | null | undefined>,

		/** Beach front exception. */
		beachFrontException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Bicycle rental. The hotel owns bicycles that it permits guests to borrow and use. Can be free or for a fee. */
		bicycleRental: FormControl<boolean | null | undefined>,

		/** Bicycle rental exception. */
		bicycleRentalException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Boutique stores. There are stores selling clothing, jewelry, art and decor either on hotel premises or very close by. Does not refer to the hotel gift shop or convenience store. */
		boutiqueStores: FormControl<boolean | null | undefined>,

		/** Boutique stores exception. */
		boutiqueStoresException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Casino. A space designated for gambling and gaming featuring croupier-run table and card games, as well as electronic slot machines. May be on hotel premises or located nearby. */
		casino: FormControl<boolean | null | undefined>,

		/** Casino exception. */
		casinoException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Free bicycle rental. The hotel owns bicycles that it permits guests to borrow and use for free. */
		freeBicycleRental: FormControl<boolean | null | undefined>,

		/** Free bicycle rental exception. */
		freeBicycleRentalException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Free watercraft rental. The hotel owns watercraft that it permits guests to borrow and use for free. */
		freeWatercraftRental: FormControl<boolean | null | undefined>,

		/** Free Watercraft rental exception. */
		freeWatercraftRentalException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Game room. There is a room at the hotel containing electronic machines for play such as pinball, prize machines, driving simulators, and other items commonly found at a family fun center or arcade. May also include non-electronic games like pool, foosball, darts, and more. May or may not be designed for children. Also known as arcade, fun room, or family fun center. */
		gameRoom: FormControl<boolean | null | undefined>,

		/** Game room exception. */
		gameRoomException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Golf. There is a golf course on hotel grounds or there is a nearby, independently run golf course that allows use by hotel guests. Can be free or for a fee. */
		golf: FormControl<boolean | null | undefined>,

		/** Golf exception. */
		golfException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Horseback riding. The hotel has a horse barn onsite or an affiliation with a nearby barn to allow for guests to sit astride a horse and direct it to walk, trot, cantor, gallop and/or jump. Can be in a riding ring, on designated paths, or in the wilderness. May or may not involve instruction. */
		horsebackRiding: FormControl<boolean | null | undefined>,

		/** Horseback riding exception. */
		horsebackRidingException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Nightclub. There is a room at the hotel with a bar, a dance floor, and seating where designated staffers play dance music. There may also be a designated area for the performance of live music, singing and comedy acts. */
		nightclub: FormControl<boolean | null | undefined>,

		/** Nightclub exception. */
		nightclubException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Private beach. The beach which is in close proximity to the hotel is open only to guests. */
		privateBeach: FormControl<boolean | null | undefined>,

		/** Private beach exception. */
		privateBeachException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Scuba. The provision for guests to dive under naturally occurring water fitted with a self-contained underwater breathing apparatus (SCUBA) for the purpose of exploring underwater life. Apparatus consists of a tank providing oxygen to the diver through a mask. Requires certification of the diver and supervision. The hotel may have the activity at its own waterfront or have an affiliation with a nearby facility. Required equipment is most often supplied to guests. Can be free or for a fee. Not snorkeling. Not done in a swimming pool. */
		scuba: FormControl<boolean | null | undefined>,

		/** Scuba exception. */
		scubaException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Snorkeling. The provision for guests to participate in a recreational water activity in which swimmers wear a diving mask, a simple, shaped breathing tube and flippers/swim fins for the purpose of exploring below the surface of an ocean, gulf or lake. Does not usually require user certification or professional supervision. Equipment may or may not be available for rent or purchase. Not scuba diving. */
		snorkeling: FormControl<boolean | null | undefined>,

		/** Snorkeling exception. */
		snorkelingException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Tennis. The hotel has the requisite court(s) on site or has an affiliation with a nearby facility for the purpose of providing guests with the opportunity to play a two-sided court-based game in which players use a stringed racquet to hit a ball across a net to the side of the opposing player. The court can be indoors or outdoors. Instructors, racquets and balls may or may not be provided. */
		tennis: FormControl<boolean | null | undefined>,

		/** Tennis exception. */
		tennisException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Water skiing. The provision of giving guests the opportunity to be pulled across naturally occurring water while standing on skis and holding a tow rope attached to a motorboat. Can occur on hotel premises or at a nearby waterfront. Most often performed in a lake or ocean. */
		waterSkiing: FormControl<boolean | null | undefined>,

		/** Water skiing exception. */
		waterSkiingException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Watercraft rental. The hotel owns water vessels that it permits guests to borrow and use. Can be free or for a fee. Watercraft may include boats, pedal boats, rowboats, sailboats, powerboats, canoes, kayaks, or personal watercraft (such as a Jet Ski). */
		watercraftRental: FormControl<boolean | null | undefined>,

		/** Watercraft rental exception. */
		watercraftRentalException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,
	}
	export function CreateActivitiesFormGroup() {
		return new FormGroup<ActivitiesFormProperties>({
			beachAccess: new FormControl<boolean | null | undefined>(undefined),
			beachAccessException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			beachFront: new FormControl<boolean | null | undefined>(undefined),
			beachFrontException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			bicycleRental: new FormControl<boolean | null | undefined>(undefined),
			bicycleRentalException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			boutiqueStores: new FormControl<boolean | null | undefined>(undefined),
			boutiqueStoresException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			casino: new FormControl<boolean | null | undefined>(undefined),
			casinoException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			freeBicycleRental: new FormControl<boolean | null | undefined>(undefined),
			freeBicycleRentalException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			freeWatercraftRental: new FormControl<boolean | null | undefined>(undefined),
			freeWatercraftRentalException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			gameRoom: new FormControl<boolean | null | undefined>(undefined),
			gameRoomException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			golf: new FormControl<boolean | null | undefined>(undefined),
			golfException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			horsebackRiding: new FormControl<boolean | null | undefined>(undefined),
			horsebackRidingException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			nightclub: new FormControl<boolean | null | undefined>(undefined),
			nightclubException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			privateBeach: new FormControl<boolean | null | undefined>(undefined),
			privateBeachException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			scuba: new FormControl<boolean | null | undefined>(undefined),
			scubaException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			snorkeling: new FormControl<boolean | null | undefined>(undefined),
			snorkelingException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			tennis: new FormControl<boolean | null | undefined>(undefined),
			tennisException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			waterSkiing: new FormControl<boolean | null | undefined>(undefined),
			waterSkiingException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			watercraftRental: new FormControl<boolean | null | undefined>(undefined),
			watercraftRentalException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
		});

	}


	/** Additional information that is surfaced in AdWords. */
	export interface AdWordsLocationExtensions {

		/** An alternate phone number to display on AdWords location extensions instead of the location's primary phone number. */
		adPhone?: string | null;
	}

	/** Additional information that is surfaced in AdWords. */
	export interface AdWordsLocationExtensionsFormProperties {

		/** An alternate phone number to display on AdWords location extensions instead of the location's primary phone number. */
		adPhone: FormControl<string | null | undefined>,
	}
	export function CreateAdWordsLocationExtensionsFormGroup() {
		return new FormGroup<AdWordsLocationExtensionsFormProperties>({
			adPhone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Input for ADDRESS verification. */
	export interface AddressInput {

		/** Contact name the mail should be sent to. */
		mailerContactName?: string | null;
	}

	/** Input for ADDRESS verification. */
	export interface AddressInputFormProperties {

		/** Contact name the mail should be sent to. */
		mailerContactName: FormControl<string | null | undefined>,
	}
	export function CreateAddressInputFormGroup() {
		return new FormGroup<AddressInputFormProperties>({
			mailerContactName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Display data for verifications through postcard. */
	export interface AddressVerificationData {

		/** Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an i18n-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478 */
		address?: PostalAddress;

		/** Merchant's business name. */
		businessName?: string | null;
	}

	/** Display data for verifications through postcard. */
	export interface AddressVerificationDataFormProperties {

		/** Merchant's business name. */
		businessName: FormControl<string | null | undefined>,
	}
	export function CreateAddressVerificationDataFormGroup() {
		return new FormGroup<AddressVerificationDataFormProperties>({
			businessName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An administrator of an Account or a Location. */
	export interface Admin {

		/** The name of the admin. When making the initial invitation, this is the invitee's email address. On `GET` calls, the user's email address is returned if the invitation is still pending. Otherwise, it contains the user's first and last names. */
		adminName?: string | null;

		/** The resource name. For account admins, this is in the form: `accounts/{account_id}/admins/{admin_id}` For location admins, this is in the form: `accounts/{account_id}/locations/{location_id}/admins/{admin_id}` */
		name?: string | null;

		/** Output only. Indicates whether this admin has a pending invitation for the specified resource. */
		pendingInvitation?: boolean | null;

		/** Specifies the AdminRole that this admin uses with the specified Account or Location resource. */
		role?: AdminRole | null;
	}

	/** An administrator of an Account or a Location. */
	export interface AdminFormProperties {

		/** The name of the admin. When making the initial invitation, this is the invitee's email address. On `GET` calls, the user's email address is returned if the invitation is still pending. Otherwise, it contains the user's first and last names. */
		adminName: FormControl<string | null | undefined>,

		/** The resource name. For account admins, this is in the form: `accounts/{account_id}/admins/{admin_id}` For location admins, this is in the form: `accounts/{account_id}/locations/{location_id}/admins/{admin_id}` */
		name: FormControl<string | null | undefined>,

		/** Output only. Indicates whether this admin has a pending invitation for the specified resource. */
		pendingInvitation: FormControl<boolean | null | undefined>,

		/** Specifies the AdminRole that this admin uses with the specified Account or Location resource. */
		role: FormControl<AdminRole | null | undefined>,
	}
	export function CreateAdminFormGroup() {
		return new FormGroup<AdminFormProperties>({
			adminName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			pendingInvitation: new FormControl<boolean | null | undefined>(undefined),
			role: new FormControl<AdminRole | null | undefined>(undefined),
		});

	}

	export enum AdminRole { ADMIN_ROLE_UNSPECIFIED = 'ADMIN_ROLE_UNSPECIFIED', OWNER = 'OWNER', CO_OWNER = 'CO_OWNER', MANAGER = 'MANAGER', COMMUNITY_MANAGER = 'COMMUNITY_MANAGER' }


	/** Represents an answer to a question */
	export interface Answer {

		/** Represents the author of a question or answer */
		author?: Author;

		/** Output only. The timestamp for when the answer was written. */
		createTime?: string | null;

		/** Output only. The unique name for the answer accounts/locations/questions/answers/* */
		name?: string | null;

		/** The text of the answer. It should contain at least one non-whitespace character. The maximum length is 4096 characters. */
		text?: string | null;

		/** Output only. The timestamp for when the answer was last modified. */
		updateTime?: string | null;

		/** Output only. The number of upvotes for the answer. */
		upvoteCount?: number | null;
	}

	/** Represents an answer to a question */
	export interface AnswerFormProperties {

		/** Output only. The timestamp for when the answer was written. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The unique name for the answer accounts/locations/questions/answers/* */
		name: FormControl<string | null | undefined>,

		/** The text of the answer. It should contain at least one non-whitespace character. The maximum length is 4096 characters. */
		text: FormControl<string | null | undefined>,

		/** Output only. The timestamp for when the answer was last modified. */
		updateTime: FormControl<string | null | undefined>,

		/** Output only. The number of upvotes for the answer. */
		upvoteCount: FormControl<number | null | undefined>,
	}
	export function CreateAnswerFormGroup() {
		return new FormGroup<AnswerFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			upvoteCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents the author of a question or answer */
	export interface Author {

		/** The display name of the user */
		displayName?: string | null;

		/** The profile photo URL of the user. */
		profilePhotoUrl?: string | null;

		/** The type of user the author is. */
		type?: AuthorType | null;
	}

	/** Represents the author of a question or answer */
	export interface AuthorFormProperties {

		/** The display name of the user */
		displayName: FormControl<string | null | undefined>,

		/** The profile photo URL of the user. */
		profilePhotoUrl: FormControl<string | null | undefined>,

		/** The type of user the author is. */
		type: FormControl<AuthorType | null | undefined>,
	}
	export function CreateAuthorFormGroup() {
		return new FormGroup<AuthorFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			profilePhotoUrl: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AuthorType | null | undefined>(undefined),
		});

	}

	export enum AuthorType { AUTHOR_TYPE_UNSPECIFIED = 'AUTHOR_TYPE_UNSPECIFIED', REGULAR_USER = 'REGULAR_USER', LOCAL_GUIDE = 'LOCAL_GUIDE', MERCHANT = 'MERCHANT' }


	/** Request message for Locations.AssociateLocationRequest. */
	export interface AssociateLocationRequest {

		/** The association to establish. If not set, it indicates no match. */
		placeId?: string | null;
	}

	/** Request message for Locations.AssociateLocationRequest. */
	export interface AssociateLocationRequestFormProperties {

		/** The association to establish. If not set, it indicates no match. */
		placeId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateLocationRequestFormGroup() {
		return new FormGroup<AssociateLocationRequestFormProperties>({
			placeId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A location attribute. Attributes provide additional information about a location. The attributes that can be set on a location may vary based on the properties of that location (for example, category). Available attributes are determined by Google and may be added and removed without API changes. */
	export interface Attribute {

		/** The ID of the attribute. Attribute IDs are provided by Google. */
		attributeId?: string | null;

		/** Values for an attribute with a `value_type` of REPEATED_ENUM. This consists of two lists of value IDs: those that are set (true) and those that are unset (false). Values absent are considered unknown. At least one value must be specified. */
		repeatedEnumValue?: RepeatedEnumAttributeValue;

		/** When the attribute value type is URL, this field contains the value(s) for this attribute, and the other values fields must be empty. */
		urlValues?: Array<UrlAttributeValue>;

		/** Output only. The type of value that this attribute contains. This should be used to determine how to interpret the value. */
		valueType?: AttributeValueType | null;

		/** The values for this attribute. The type of the values supplied must match that expected for that attribute; see [AttributeValueType](/my-business/reference/rest/v4/AttributeValueType). This is a repeated field where multiple attribute values may be provided. Attribute types only support one value. */
		values?: Array<string>;
	}

	/** A location attribute. Attributes provide additional information about a location. The attributes that can be set on a location may vary based on the properties of that location (for example, category). Available attributes are determined by Google and may be added and removed without API changes. */
	export interface AttributeFormProperties {

		/** The ID of the attribute. Attribute IDs are provided by Google. */
		attributeId: FormControl<string | null | undefined>,

		/** Output only. The type of value that this attribute contains. This should be used to determine how to interpret the value. */
		valueType: FormControl<AttributeValueType | null | undefined>,
	}
	export function CreateAttributeFormGroup() {
		return new FormGroup<AttributeFormProperties>({
			attributeId: new FormControl<string | null | undefined>(undefined),
			valueType: new FormControl<AttributeValueType | null | undefined>(undefined),
		});

	}


	/** Values for an attribute with a `value_type` of REPEATED_ENUM. This consists of two lists of value IDs: those that are set (true) and those that are unset (false). Values absent are considered unknown. At least one value must be specified. */
	export interface RepeatedEnumAttributeValue {

		/** Enum values that are set. */
		setValues?: Array<string>;

		/** Enum values that are unset. */
		unsetValues?: Array<string>;
	}

	/** Values for an attribute with a `value_type` of REPEATED_ENUM. This consists of two lists of value IDs: those that are set (true) and those that are unset (false). Values absent are considered unknown. At least one value must be specified. */
	export interface RepeatedEnumAttributeValueFormProperties {
	}
	export function CreateRepeatedEnumAttributeValueFormGroup() {
		return new FormGroup<RepeatedEnumAttributeValueFormProperties>({
		});

	}


	/** Values for an attribute with a `value_type` of URL. */
	export interface UrlAttributeValue {

		/** The URL. */
		url?: string | null;
	}

	/** Values for an attribute with a `value_type` of URL. */
	export interface UrlAttributeValueFormProperties {

		/** The URL. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateUrlAttributeValueFormGroup() {
		return new FormGroup<UrlAttributeValueFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AttributeValueType { ATTRIBUTE_VALUE_TYPE_UNSPECIFIED = 'ATTRIBUTE_VALUE_TYPE_UNSPECIFIED', BOOL = 'BOOL', ENUM = 'ENUM', URL = 'URL', REPEATED_ENUM = 'REPEATED_ENUM' }


	/** Metadata for an attribute. Contains display information for the attribute, including a localized name and a heading for grouping related attributes together. */
	export interface AttributeMetadata {

		/** The ID of the attribute. */
		attributeId?: string | null;

		/** The localized display name for the attribute, if available; otherwise, the English display name. */
		displayName?: string | null;

		/** The localized display name of the group that contains this attribute, if available; otherwise, the English group name. Related attributes are collected into a group and should be displayed together under the heading given here. */
		groupDisplayName?: string | null;

		/** If true, the attribute is deprecated and should no longer be used. If deprecated, updating this attribute will not result in an error, but updates will not be saved. At some point after being deprecated, the attribute will be removed entirely and it will become an error. */
		isDeprecated?: boolean | null;

		/** If true, the attribute supports multiple values. If false, only a single value should be provided. */
		isRepeatable?: boolean | null;

		/** For some types of attributes (for example, enums), a list of supported values and corresponding display names for those values is provided. */
		valueMetadata?: Array<AttributeValueMetadata>;

		/** The value type for the attribute. Values set and retrieved should be expected to be of this type. */
		valueType?: AttributeValueType | null;
	}

	/** Metadata for an attribute. Contains display information for the attribute, including a localized name and a heading for grouping related attributes together. */
	export interface AttributeMetadataFormProperties {

		/** The ID of the attribute. */
		attributeId: FormControl<string | null | undefined>,

		/** The localized display name for the attribute, if available; otherwise, the English display name. */
		displayName: FormControl<string | null | undefined>,

		/** The localized display name of the group that contains this attribute, if available; otherwise, the English group name. Related attributes are collected into a group and should be displayed together under the heading given here. */
		groupDisplayName: FormControl<string | null | undefined>,

		/** If true, the attribute is deprecated and should no longer be used. If deprecated, updating this attribute will not result in an error, but updates will not be saved. At some point after being deprecated, the attribute will be removed entirely and it will become an error. */
		isDeprecated: FormControl<boolean | null | undefined>,

		/** If true, the attribute supports multiple values. If false, only a single value should be provided. */
		isRepeatable: FormControl<boolean | null | undefined>,

		/** The value type for the attribute. Values set and retrieved should be expected to be of this type. */
		valueType: FormControl<AttributeValueType | null | undefined>,
	}
	export function CreateAttributeMetadataFormGroup() {
		return new FormGroup<AttributeMetadataFormProperties>({
			attributeId: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			groupDisplayName: new FormControl<string | null | undefined>(undefined),
			isDeprecated: new FormControl<boolean | null | undefined>(undefined),
			isRepeatable: new FormControl<boolean | null | undefined>(undefined),
			valueType: new FormControl<AttributeValueType | null | undefined>(undefined),
		});

	}


	/** Metadata for supported attribute values. */
	export interface AttributeValueMetadata {

		/** The display name for this value, localized where available; otherwise, in English. The value display name is intended to be used in context with the attribute display name. For example, for a "WiFi" enum attribute, this could contain "Paid" to represent paid Wi-Fi. */
		displayName?: string | null;

		/** The attribute value. */
		value?: any;
	}

	/** Metadata for supported attribute values. */
	export interface AttributeValueMetadataFormProperties {

		/** The display name for this value, localized where available; otherwise, in English. The value display name is intended to be used in context with the attribute display name. For example, for a "WiFi" enum attribute, this could contain "Paid" to represent paid Wi-Fi. */
		displayName: FormControl<string | null | undefined>,

		/** The attribute value. */
		value: FormControl<any | null | undefined>,
	}
	export function CreateAttributeValueMetadataFormGroup() {
		return new FormGroup<AttributeValueMetadataFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Attribution information for customer media items, such as the contributor's name and profile picture. */
	export interface Attribution {

		/** The user name to attribute the media item to. */
		profileName?: string | null;

		/** URL of the attributed user's profile photo thumbnail. */
		profilePhotoUrl?: string | null;

		/** The URL of the attributed user's Google Maps profile page. */
		profileUrl?: string | null;

		/** The URL of the takedown page, where the media item can be reported if it is inappropriate. */
		takedownUrl?: string | null;
	}

	/** Attribution information for customer media items, such as the contributor's name and profile picture. */
	export interface AttributionFormProperties {

		/** The user name to attribute the media item to. */
		profileName: FormControl<string | null | undefined>,

		/** URL of the attributed user's profile photo thumbnail. */
		profilePhotoUrl: FormControl<string | null | undefined>,

		/** The URL of the attributed user's Google Maps profile page. */
		profileUrl: FormControl<string | null | undefined>,

		/** The URL of the takedown page, where the media item can be reported if it is inappropriate. */
		takedownUrl: FormControl<string | null | undefined>,
	}
	export function CreateAttributionFormGroup() {
		return new FormGroup<AttributionFormProperties>({
			profileName: new FormControl<string | null | undefined>(undefined),
			profilePhotoUrl: new FormControl<string | null | undefined>(undefined),
			profileUrl: new FormControl<string | null | undefined>(undefined),
			takedownUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request for basic metric insights. */
	export interface BasicMetricsRequest {

		/** A collection of metrics to return values for including the options for how the data should be returned. */
		metricRequests?: Array<MetricRequest>;

		/** A range of time. Data will be pulled over the range as a half-open inverval (that is, [start_time, end_time)). */
		timeRange?: TimeRange;
	}

	/** A request for basic metric insights. */
	export interface BasicMetricsRequestFormProperties {
	}
	export function CreateBasicMetricsRequestFormGroup() {
		return new FormGroup<BasicMetricsRequestFormProperties>({
		});

	}


	/** A request to return values for one metric and the options for how those values should be returned. */
	export interface MetricRequest {

		/** The requested metric. */
		metric?: MetricRequestMetric | null;

		/** How the values should appear when returned. */
		options?: Array<string>;
	}

	/** A request to return values for one metric and the options for how those values should be returned. */
	export interface MetricRequestFormProperties {

		/** The requested metric. */
		metric: FormControl<MetricRequestMetric | null | undefined>,
	}
	export function CreateMetricRequestFormGroup() {
		return new FormGroup<MetricRequestFormProperties>({
			metric: new FormControl<MetricRequestMetric | null | undefined>(undefined),
		});

	}

	export enum MetricRequestMetric { METRIC_UNSPECIFIED = 'METRIC_UNSPECIFIED', ALL = 'ALL', QUERIES_DIRECT = 'QUERIES_DIRECT', QUERIES_INDIRECT = 'QUERIES_INDIRECT', QUERIES_CHAIN = 'QUERIES_CHAIN', VIEWS_MAPS = 'VIEWS_MAPS', VIEWS_SEARCH = 'VIEWS_SEARCH', ACTIONS_WEBSITE = 'ACTIONS_WEBSITE', ACTIONS_PHONE = 'ACTIONS_PHONE', ACTIONS_DRIVING_DIRECTIONS = 'ACTIONS_DRIVING_DIRECTIONS', PHOTOS_VIEWS_MERCHANT = 'PHOTOS_VIEWS_MERCHANT', PHOTOS_VIEWS_CUSTOMERS = 'PHOTOS_VIEWS_CUSTOMERS', PHOTOS_COUNT_MERCHANT = 'PHOTOS_COUNT_MERCHANT', PHOTOS_COUNT_CUSTOMERS = 'PHOTOS_COUNT_CUSTOMERS', LOCAL_POST_VIEWS_SEARCH = 'LOCAL_POST_VIEWS_SEARCH', LOCAL_POST_ACTIONS_CALL_TO_ACTION = 'LOCAL_POST_ACTIONS_CALL_TO_ACTION' }


	/** A range of time. Data will be pulled over the range as a half-open inverval (that is, [start_time, end_time)). */
	export interface TimeRange {

		/** Epoch timestamp for the end of the range (exclusive). */
		endTime?: string | null;

		/** Epoch timestamp for the start of the range (inclusive). */
		startTime?: string | null;
	}

	/** A range of time. Data will be pulled over the range as a half-open inverval (that is, [start_time, end_time)). */
	export interface TimeRangeFormProperties {

		/** Epoch timestamp for the end of the range (exclusive). */
		endTime: FormControl<string | null | undefined>,

		/** Epoch timestamp for the start of the range (inclusive). */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateTimeRangeFormGroup() {
		return new FormGroup<TimeRangeFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for BusinessCategories.BatchGetBusinessCategories. */
	export interface BatchGetBusinessCategoriesResponse {

		/** Categories that match the GConcept ids provided in the request. They will not come in the same order as category ids in the request. */
		categories?: Array<Category>;
	}

	/** Response message for BusinessCategories.BatchGetBusinessCategories. */
	export interface BatchGetBusinessCategoriesResponseFormProperties {
	}
	export function CreateBatchGetBusinessCategoriesResponseFormGroup() {
		return new FormGroup<BatchGetBusinessCategoriesResponseFormProperties>({
		});

	}


	/** A category describing what this business is (not what it does). For a list of valid category IDs, and the mappings to their human-readable names, see [categories.list](https://developers.google.com/my-business/reference/rest/v4/categories/list). */
	export interface Category {

		/** @OutputOnly. A stable ID (provided by Google) for this category. The `category_id` must be specified when modifying the category (when creating or updating a location). */
		categoryId?: string | null;

		/** @OutputOnly. The human-readable name of the category. This is set when reading the location. When modifying the location, `category_id` must be set. */
		displayName?: string | null;

		/** Output only. More hours types that are available for this business category. */
		moreHoursTypes?: Array<MoreHoursType>;

		/** @OutputOnly. A list of all the service types that are available for this business category. */
		serviceTypes?: Array<ServiceType>;
	}

	/** A category describing what this business is (not what it does). For a list of valid category IDs, and the mappings to their human-readable names, see [categories.list](https://developers.google.com/my-business/reference/rest/v4/categories/list). */
	export interface CategoryFormProperties {

		/** @OutputOnly. A stable ID (provided by Google) for this category. The `category_id` must be specified when modifying the category (when creating or updating a location). */
		categoryId: FormControl<string | null | undefined>,

		/** @OutputOnly. The human-readable name of the category. This is set when reading the location. When modifying the location, `category_id` must be set. */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateCategoryFormGroup() {
		return new FormGroup<CategoryFormProperties>({
			categoryId: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** More hours types that a business can offers, in addition to its regular hours. */
	export interface MoreHoursType {

		/** Output only. The human-readable English display name for the hours type. */
		displayName?: string | null;

		/** Output only. A stable ID provided by Google for this hours type. */
		hoursTypeId?: string | null;

		/** Output only. The human-readable localized display name for the hours type. */
		localizedDisplayName?: string | null;
	}

	/** More hours types that a business can offers, in addition to its regular hours. */
	export interface MoreHoursTypeFormProperties {

		/** Output only. The human-readable English display name for the hours type. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. A stable ID provided by Google for this hours type. */
		hoursTypeId: FormControl<string | null | undefined>,

		/** Output only. The human-readable localized display name for the hours type. */
		localizedDisplayName: FormControl<string | null | undefined>,
	}
	export function CreateMoreHoursTypeFormGroup() {
		return new FormGroup<MoreHoursTypeFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			hoursTypeId: new FormControl<string | null | undefined>(undefined),
			localizedDisplayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A message describing a service type that the business offers. */
	export interface ServiceType {

		/** Output only. The human-readable display name for the service type. */
		displayName?: string | null;

		/** Output only. A stable ID (provided by Google) for this service type. */
		serviceTypeId?: string | null;
	}

	/** A message describing a service type that the business offers. */
	export interface ServiceTypeFormProperties {

		/** Output only. The human-readable display name for the service type. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. A stable ID (provided by Google) for this service type. */
		serviceTypeId: FormControl<string | null | undefined>,
	}
	export function CreateServiceTypeFormGroup() {
		return new FormGroup<ServiceTypeFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			serviceTypeId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for Locations.BatchGetLocations. */
	export interface BatchGetLocationsRequest {

		/** A collection of locations to fetch, specified by their names. */
		locationNames?: Array<string>;
	}

	/** Request message for Locations.BatchGetLocations. */
	export interface BatchGetLocationsRequestFormProperties {
	}
	export function CreateBatchGetLocationsRequestFormGroup() {
		return new FormGroup<BatchGetLocationsRequestFormProperties>({
		});

	}


	/** Response message for Locations.BatchGetLocations. */
	export interface BatchGetLocationsResponse {

		/** A collection of locations. */
		locations?: Array<Location>;
	}

	/** Response message for Locations.BatchGetLocations. */
	export interface BatchGetLocationsResponseFormProperties {
	}
	export function CreateBatchGetLocationsResponseFormGroup() {
		return new FormGroup<BatchGetLocationsResponseFormProperties>({
		});

	}


	/** A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories. */
	export interface Location {

		/** Additional information that is surfaced in AdWords. */
		adWordsLocationExtensions?: AdWordsLocationExtensions;

		/** Additional categories to describe your business. Categories help your customers find accurate, specific results for services they're interested in. To keep your business information accurate and live, make sure that you use as few categories as possible to describe your overall core business. Choose categories that are as specific as possible, but representative of your main business. */
		additionalCategories?: Array<Category>;

		/** Up to two phone numbers (mobile or landline, no fax) at which your business can be called, in addition to your primary phone number. */
		additionalPhones?: Array<string>;

		/** Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an i18n-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478 */
		address?: PostalAddress;

		/** Attributes for this location. */
		attributes?: Array<Attribute>;

		/** A collection of free-form strings to allow you to tag your business. These labels are NOT user facing; only you can see them. Limited to 255 characters (per label). */
		labels?: Array<string>;

		/** The language of the location. Set during creation and not updateable. */
		languageCode?: string | null;

		/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this must conform to the WGS84 standard. Values must be within normalized ranges. */
		latlng?: LatLng;

		/** Alternate/surrogate key references for a location. */
		locationKey?: LocationKey;

		/** Location name should reflect your business's real-world name, as used consistently on your storefront, website, and stationery, and as known to customers. Any additional information, when relevant, can be included in other fields of the resource (for example, `Address`, `Categories`). Don't add unnecessary information to your name (for example, prefer "Google" over "Google Inc. - Mountain View Corporate Headquarters"). Don't include marketing taglines, store codes, special characters, hours or closed/open status, phone numbers, website URLs, service/product information, location/address or directions, or containment information (for example, "Chase ATM in Duane Reade"). */
		locationName?: string | null;

		/** Contains a set of booleans that reflect the [state of a Location.](https://support.google.com/business/answer/3480862) */
		locationState?: LocationState;

		/** Additional non-user-editable information about the location. */
		metadata?: Metadata;

		/** More hours for a business's different departments or specific customers. */
		moreHours?: Array<MoreHours>;

		/** Google identifier for this location in the form: `accounts/{account_id}/locations/{location_id}` In the context of matches, this field will not be populated. */
		name?: string | null;

		/** Information related to the opening state of the business. */
		openInfo?: OpenInfo;

		/** Price list information for this location. */
		priceLists?: Array<PriceList>;

		/** A category describing what this business is (not what it does). For a list of valid category IDs, and the mappings to their human-readable names, see [categories.list](https://developers.google.com/my-business/reference/rest/v4/categories/list). */
		primaryCategory?: Category;

		/** A phone number that connects to your individual business location as directly as possible. Use a local phone number instead of a central, call center helpline number whenever possible. */
		primaryPhone?: string | null;

		/** All information pertaining to the location's profile. */
		profile?: Profile;

		/** Represents the time periods that this location is open for business. Holds a collection of TimePeriod instances. */
		regularHours?: BusinessHours;

		/** Information of all parent and children locations related to this one. */
		relationshipData?: RelationshipData;

		/** Service area businesses provide their service at the customer's location (for example, a locksmith or plumber). */
		serviceArea?: ServiceAreaBusiness;

		/** Represents a set of time periods when a location's operational hours differ from its normal business hours. */
		specialHours?: SpecialHours;

		/** External identifier for this location, which must be unique inside a given account. This is a means of associating the location with your own records. */
		storeCode?: string | null;

		/** A URL for this business. If possible, use a URL that represents this individual business location instead of a generic website/URL that represents all locations, or the brand. */
		websiteUrl?: string | null;
	}

	/** A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories. */
	export interface LocationFormProperties {

		/** The language of the location. Set during creation and not updateable. */
		languageCode: FormControl<string | null | undefined>,

		/** Location name should reflect your business's real-world name, as used consistently on your storefront, website, and stationery, and as known to customers. Any additional information, when relevant, can be included in other fields of the resource (for example, `Address`, `Categories`). Don't add unnecessary information to your name (for example, prefer "Google" over "Google Inc. - Mountain View Corporate Headquarters"). Don't include marketing taglines, store codes, special characters, hours or closed/open status, phone numbers, website URLs, service/product information, location/address or directions, or containment information (for example, "Chase ATM in Duane Reade"). */
		locationName: FormControl<string | null | undefined>,

		/** Google identifier for this location in the form: `accounts/{account_id}/locations/{location_id}` In the context of matches, this field will not be populated. */
		name: FormControl<string | null | undefined>,

		/** A phone number that connects to your individual business location as directly as possible. Use a local phone number instead of a central, call center helpline number whenever possible. */
		primaryPhone: FormControl<string | null | undefined>,

		/** External identifier for this location, which must be unique inside a given account. This is a means of associating the location with your own records. */
		storeCode: FormControl<string | null | undefined>,

		/** A URL for this business. If possible, use a URL that represents this individual business location instead of a generic website/URL that represents all locations, or the brand. */
		websiteUrl: FormControl<string | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			locationName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			primaryPhone: new FormControl<string | null | undefined>(undefined),
			storeCode: new FormControl<string | null | undefined>(undefined),
			websiteUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this must conform to the WGS84 standard. Values must be within normalized ranges. */
	export interface LatLng {

		/** The latitude in degrees. It must be in the range [-90.0, +90.0]. */
		latitude?: number | null;

		/** The longitude in degrees. It must be in the range [-180.0, +180.0]. */
		longitude?: number | null;
	}

	/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this must conform to the WGS84 standard. Values must be within normalized ranges. */
	export interface LatLngFormProperties {

		/** The latitude in degrees. It must be in the range [-90.0, +90.0]. */
		latitude: FormControl<number | null | undefined>,

		/** The longitude in degrees. It must be in the range [-180.0, +180.0]. */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateLatLngFormGroup() {
		return new FormGroup<LatLngFormProperties>({
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Alternate/surrogate key references for a location. */
	export interface LocationKey {

		/** Output only. A value of true indicates that an unset place ID is deliberate, which is different from no association being made yet. */
		explicitNoPlaceId?: boolean | null;

		/** If this location has been verified and is connected to/appears on Google Maps, this field is populated with the place ID for the location. This ID can be used in various Places APIs. If this location is unverified, this field may be populated if the location has been associated with a place that appears on Google Maps. This field can be set during Create calls, but not for Update. The additional `explicit_no_place_id` bool qualifies whether an unset place ID is deliberate or not. */
		placeId?: string | null;

		/** Output only. If this location has a Google+ page associated with it, this is populated with the Google+ page ID for this location. */
		plusPageId?: string | null;

		/** Output only. The `request_id` used to create this location. May be empty if this location was created outside of the Google My Business API or Business Profile Locations. */
		requestId?: string | null;
	}

	/** Alternate/surrogate key references for a location. */
	export interface LocationKeyFormProperties {

		/** Output only. A value of true indicates that an unset place ID is deliberate, which is different from no association being made yet. */
		explicitNoPlaceId: FormControl<boolean | null | undefined>,

		/** If this location has been verified and is connected to/appears on Google Maps, this field is populated with the place ID for the location. This ID can be used in various Places APIs. If this location is unverified, this field may be populated if the location has been associated with a place that appears on Google Maps. This field can be set during Create calls, but not for Update. The additional `explicit_no_place_id` bool qualifies whether an unset place ID is deliberate or not. */
		placeId: FormControl<string | null | undefined>,

		/** Output only. If this location has a Google+ page associated with it, this is populated with the Google+ page ID for this location. */
		plusPageId: FormControl<string | null | undefined>,

		/** Output only. The `request_id` used to create this location. May be empty if this location was created outside of the Google My Business API or Business Profile Locations. */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateLocationKeyFormGroup() {
		return new FormGroup<LocationKeyFormProperties>({
			explicitNoPlaceId: new FormControl<boolean | null | undefined>(undefined),
			placeId: new FormControl<string | null | undefined>(undefined),
			plusPageId: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a set of booleans that reflect the [state of a Location.](https://support.google.com/business/answer/3480862) */
	export interface LocationState {

		/** Output only. Indicates whether the location can be deleted using the Google My Business API. */
		canDelete?: boolean | null;

		/** Output only. Indicates if the listing is eligible for food menu. */
		canHaveFoodMenus?: boolean | null;

		/** Output only. Indicates if the listing can modify a ServiceList. */
		canModifyServiceList?: boolean | null;

		/** Output only. Indicates whether the location can operate on Health data. */
		canOperateHealthData?: boolean | null;

		/** Output only. Indicates whether the location can operate on Lodging data. */
		canOperateLodgingData?: boolean | null;

		/** Output only. Indicates whether the location can be updated. */
		canUpdate?: boolean | null;

		/** Output only. Indicates whether any of this Location's properties are in the edit pending state. */
		hasPendingEdits?: boolean | null;

		/** Output only. Indicates whether the location has pending verification requests. */
		hasPendingVerification?: boolean | null;

		/** Output only. Indicates whether the location is disabled. */
		isDisabled?: boolean | null;

		/** Output only. Indicates whether the location is disconnected from a place on Google Maps. */
		isDisconnected?: boolean | null;

		/** Output only. Indicates whether the location is a duplicate of another location. */
		isDuplicate?: boolean | null;

		/** Output only. Indicates whether the place ID associated with this location has updates. */
		isGoogleUpdated?: boolean | null;

		/** Output only. Indicates whether [accounts.locations.localPosts](/my-business/reference/rest/v4/accounts.locations.localPosts) is disabled for this location. */
		isLocalPostApiDisabled?: boolean | null;

		/** Output only. Indicates whether the review of the location is pending. */
		isPendingReview?: boolean | null;

		/** Output only. Indicates whether the location is published. */
		isPublished?: boolean | null;

		/** Output only. Indicates whether the location is suspended. Suspended locations are not visible to end users in Google products. If you believe this was a mistake, see the [help center article] (https://support.google.com/business/answer/4569145). */
		isSuspended?: boolean | null;

		/** Output only. Indicates whether the location is verified. */
		isVerified?: boolean | null;

		/** Output only. Indicates whether the location requires reverification. */
		needsReverification?: boolean | null;
	}

	/** Contains a set of booleans that reflect the [state of a Location.](https://support.google.com/business/answer/3480862) */
	export interface LocationStateFormProperties {

		/** Output only. Indicates whether the location can be deleted using the Google My Business API. */
		canDelete: FormControl<boolean | null | undefined>,

		/** Output only. Indicates if the listing is eligible for food menu. */
		canHaveFoodMenus: FormControl<boolean | null | undefined>,

		/** Output only. Indicates if the listing can modify a ServiceList. */
		canModifyServiceList: FormControl<boolean | null | undefined>,

		/** Output only. Indicates whether the location can operate on Health data. */
		canOperateHealthData: FormControl<boolean | null | undefined>,

		/** Output only. Indicates whether the location can operate on Lodging data. */
		canOperateLodgingData: FormControl<boolean | null | undefined>,

		/** Output only. Indicates whether the location can be updated. */
		canUpdate: FormControl<boolean | null | undefined>,

		/** Output only. Indicates whether any of this Location's properties are in the edit pending state. */
		hasPendingEdits: FormControl<boolean | null | undefined>,

		/** Output only. Indicates whether the location has pending verification requests. */
		hasPendingVerification: FormControl<boolean | null | undefined>,

		/** Output only. Indicates whether the location is disabled. */
		isDisabled: FormControl<boolean | null | undefined>,

		/** Output only. Indicates whether the location is disconnected from a place on Google Maps. */
		isDisconnected: FormControl<boolean | null | undefined>,

		/** Output only. Indicates whether the location is a duplicate of another location. */
		isDuplicate: FormControl<boolean | null | undefined>,

		/** Output only. Indicates whether the place ID associated with this location has updates. */
		isGoogleUpdated: FormControl<boolean | null | undefined>,

		/** Output only. Indicates whether [accounts.locations.localPosts](/my-business/reference/rest/v4/accounts.locations.localPosts) is disabled for this location. */
		isLocalPostApiDisabled: FormControl<boolean | null | undefined>,

		/** Output only. Indicates whether the review of the location is pending. */
		isPendingReview: FormControl<boolean | null | undefined>,

		/** Output only. Indicates whether the location is published. */
		isPublished: FormControl<boolean | null | undefined>,

		/** Output only. Indicates whether the location is suspended. Suspended locations are not visible to end users in Google products. If you believe this was a mistake, see the [help center article] (https://support.google.com/business/answer/4569145). */
		isSuspended: FormControl<boolean | null | undefined>,

		/** Output only. Indicates whether the location is verified. */
		isVerified: FormControl<boolean | null | undefined>,

		/** Output only. Indicates whether the location requires reverification. */
		needsReverification: FormControl<boolean | null | undefined>,
	}
	export function CreateLocationStateFormGroup() {
		return new FormGroup<LocationStateFormProperties>({
			canDelete: new FormControl<boolean | null | undefined>(undefined),
			canHaveFoodMenus: new FormControl<boolean | null | undefined>(undefined),
			canModifyServiceList: new FormControl<boolean | null | undefined>(undefined),
			canOperateHealthData: new FormControl<boolean | null | undefined>(undefined),
			canOperateLodgingData: new FormControl<boolean | null | undefined>(undefined),
			canUpdate: new FormControl<boolean | null | undefined>(undefined),
			hasPendingEdits: new FormControl<boolean | null | undefined>(undefined),
			hasPendingVerification: new FormControl<boolean | null | undefined>(undefined),
			isDisabled: new FormControl<boolean | null | undefined>(undefined),
			isDisconnected: new FormControl<boolean | null | undefined>(undefined),
			isDuplicate: new FormControl<boolean | null | undefined>(undefined),
			isGoogleUpdated: new FormControl<boolean | null | undefined>(undefined),
			isLocalPostApiDisabled: new FormControl<boolean | null | undefined>(undefined),
			isPendingReview: new FormControl<boolean | null | undefined>(undefined),
			isPublished: new FormControl<boolean | null | undefined>(undefined),
			isSuspended: new FormControl<boolean | null | undefined>(undefined),
			isVerified: new FormControl<boolean | null | undefined>(undefined),
			needsReverification: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Additional non-user-editable information about the location. */
	export interface Metadata {

		/** Information about the location that this location duplicates. */
		duplicate?: Duplicate;

		/** A link to the location on Maps. */
		mapsUrl?: string | null;

		/** A link to the page on Google Search where a customer can leave a review for the location. */
		newReviewUrl?: string | null;
	}

	/** Additional non-user-editable information about the location. */
	export interface MetadataFormProperties {

		/** A link to the location on Maps. */
		mapsUrl: FormControl<string | null | undefined>,

		/** A link to the page on Google Search where a customer can leave a review for the location. */
		newReviewUrl: FormControl<string | null | undefined>,
	}
	export function CreateMetadataFormGroup() {
		return new FormGroup<MetadataFormProperties>({
			mapsUrl: new FormControl<string | null | undefined>(undefined),
			newReviewUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the location that this location duplicates. */
	export interface Duplicate {

		/** Indicates whether the user has access to the location it duplicates. */
		access?: DuplicateAccess | null;

		/** The resource name of the location that this duplicates. Only populated if the authenticated user has access rights to that location and that location is not deleted. */
		locationName?: string | null;

		/** The place ID of the location that this duplicates. */
		placeId?: string | null;
	}

	/** Information about the location that this location duplicates. */
	export interface DuplicateFormProperties {

		/** Indicates whether the user has access to the location it duplicates. */
		access: FormControl<DuplicateAccess | null | undefined>,

		/** The resource name of the location that this duplicates. Only populated if the authenticated user has access rights to that location and that location is not deleted. */
		locationName: FormControl<string | null | undefined>,

		/** The place ID of the location that this duplicates. */
		placeId: FormControl<string | null | undefined>,
	}
	export function CreateDuplicateFormGroup() {
		return new FormGroup<DuplicateFormProperties>({
			access: new FormControl<DuplicateAccess | null | undefined>(undefined),
			locationName: new FormControl<string | null | undefined>(undefined),
			placeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DuplicateAccess { ACCESS_UNSPECIFIED = 'ACCESS_UNSPECIFIED', ACCESS_UNKNOWN = 'ACCESS_UNKNOWN', ALLOWED = 'ALLOWED', INSUFFICIENT = 'INSUFFICIENT' }


	/** The time periods during which a location is open for certain types of business. */
	export interface MoreHours {

		/** Required. Type of hours. Clients should call {#link businessCategories:BatchGet} to get supported hours types for categories of their locations. */
		hoursTypeId?: string | null;

		/** Required. A collection of times that this location is open. Each period represents a range of hours when the location is open during the week. */
		periods?: Array<TimePeriod>;
	}

	/** The time periods during which a location is open for certain types of business. */
	export interface MoreHoursFormProperties {

		/** Required. Type of hours. Clients should call {#link businessCategories:BatchGet} to get supported hours types for categories of their locations. */
		hoursTypeId: FormControl<string | null | undefined>,
	}
	export function CreateMoreHoursFormGroup() {
		return new FormGroup<MoreHoursFormProperties>({
			hoursTypeId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a span of time that the business is open, starting on the specified open day/time and closing on the specified close day/time. The closing time must occur after the opening time, for example later in the same day, or on a subsequent day. */
	export interface TimePeriod {

		/** Indicates the day of the week this period ends on. */
		closeDay?: TimePeriodCloseDay | null;

		/** Time in 24hr ISO 8601 extended format (hh:mm). Valid values are 00:00-24:00, where 24:00 represents midnight at the end of the specified day field. */
		closeTime?: string | null;

		/** Indicates the day of the week this period starts on. */
		openDay?: TimePeriodCloseDay | null;

		/** Time in 24hr ISO 8601 extended format (hh:mm). Valid values are 00:00-24:00, where 24:00 represents midnight at the end of the specified day field. */
		openTime?: string | null;
	}

	/** Represents a span of time that the business is open, starting on the specified open day/time and closing on the specified close day/time. The closing time must occur after the opening time, for example later in the same day, or on a subsequent day. */
	export interface TimePeriodFormProperties {

		/** Indicates the day of the week this period ends on. */
		closeDay: FormControl<TimePeriodCloseDay | null | undefined>,

		/** Time in 24hr ISO 8601 extended format (hh:mm). Valid values are 00:00-24:00, where 24:00 represents midnight at the end of the specified day field. */
		closeTime: FormControl<string | null | undefined>,

		/** Indicates the day of the week this period starts on. */
		openDay: FormControl<TimePeriodCloseDay | null | undefined>,

		/** Time in 24hr ISO 8601 extended format (hh:mm). Valid values are 00:00-24:00, where 24:00 represents midnight at the end of the specified day field. */
		openTime: FormControl<string | null | undefined>,
	}
	export function CreateTimePeriodFormGroup() {
		return new FormGroup<TimePeriodFormProperties>({
			closeDay: new FormControl<TimePeriodCloseDay | null | undefined>(undefined),
			closeTime: new FormControl<string | null | undefined>(undefined),
			openDay: new FormControl<TimePeriodCloseDay | null | undefined>(undefined),
			openTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TimePeriodCloseDay { DAY_OF_WEEK_UNSPECIFIED = 'DAY_OF_WEEK_UNSPECIFIED', MONDAY = 'MONDAY', TUESDAY = 'TUESDAY', WEDNESDAY = 'WEDNESDAY', THURSDAY = 'THURSDAY', FRIDAY = 'FRIDAY', SATURDAY = 'SATURDAY', SUNDAY = 'SUNDAY' }


	/** Information related to the opening state of the business. */
	export interface OpenInfo {

		/** Output only. Indicates whether this business is eligible for re-open. */
		canReopen?: boolean | null;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`. */
		openingDate?: Date;

		/** Indicates whether or not the Location is currently open for business. All locations are open by default, unless updated to be closed. */
		status?: OpenInfoStatus | null;
	}

	/** Information related to the opening state of the business. */
	export interface OpenInfoFormProperties {

		/** Output only. Indicates whether this business is eligible for re-open. */
		canReopen: FormControl<boolean | null | undefined>,

		/** Indicates whether or not the Location is currently open for business. All locations are open by default, unless updated to be closed. */
		status: FormControl<OpenInfoStatus | null | undefined>,
	}
	export function CreateOpenInfoFormGroup() {
		return new FormGroup<OpenInfoFormProperties>({
			canReopen: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<OpenInfoStatus | null | undefined>(undefined),
		});

	}


	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`. */
	export interface Date {

		/** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
		day?: number | null;

		/** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
		month?: number | null;

		/** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
		year?: number | null;
	}

	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`. */
	export interface DateFormProperties {

		/** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
		day: FormControl<number | null | undefined>,

		/** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
		month: FormControl<number | null | undefined>,

		/** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
		year: FormControl<number | null | undefined>,
	}
	export function CreateDateFormGroup() {
		return new FormGroup<DateFormProperties>({
			day: new FormControl<number | null | undefined>(undefined),
			month: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum OpenInfoStatus { OPEN_FOR_BUSINESS_UNSPECIFIED = 'OPEN_FOR_BUSINESS_UNSPECIFIED', OPEN = 'OPEN', CLOSED_PERMANENTLY = 'CLOSED_PERMANENTLY', CLOSED_TEMPORARILY = 'CLOSED_TEMPORARILY' }


	/** A list of item price information. Price lists are structured as one or more price lists, each containing one or more sections with one or more items. For example, food price lists may represent breakfast/lunch/dinner menus, with sections for burgers/steak/seafood. */
	export interface PriceList {

		/** Required. Language-tagged labels for the price list. */
		labels?: Array<Label>;

		/** Required. ID for the price list. Price list, section, and item IDs cannot be duplicated within this Location. */
		priceListId?: string | null;

		/** Required. Sections for this price list. Each price list must contain at least one section. */
		sections?: Array<Section>;

		/** Optional source URL of where the price list was retrieved from. For example, this could be the URL of the page that was automatically scraped to populate the menu information. */
		sourceUrl?: string | null;
	}

	/** A list of item price information. Price lists are structured as one or more price lists, each containing one or more sections with one or more items. For example, food price lists may represent breakfast/lunch/dinner menus, with sections for burgers/steak/seafood. */
	export interface PriceListFormProperties {

		/** Required. ID for the price list. Price list, section, and item IDs cannot be duplicated within this Location. */
		priceListId: FormControl<string | null | undefined>,

		/** Optional source URL of where the price list was retrieved from. For example, this could be the URL of the page that was automatically scraped to populate the menu information. */
		sourceUrl: FormControl<string | null | undefined>,
	}
	export function CreatePriceListFormGroup() {
		return new FormGroup<PriceListFormProperties>({
			priceListId: new FormControl<string | null | undefined>(undefined),
			sourceUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Label to be used when displaying the price list, section, or item. */
	export interface Label {

		/** Optional. Description of the price list, section, or item. */
		description?: string | null;

		/** Required. Display name for the price list, section, or item. */
		displayName?: string | null;

		/** Optional. The BCP-47 language code that these strings apply for. Only one set of labels may be set per language. */
		languageCode?: string | null;
	}

	/** Label to be used when displaying the price list, section, or item. */
	export interface LabelFormProperties {

		/** Optional. Description of the price list, section, or item. */
		description: FormControl<string | null | undefined>,

		/** Required. Display name for the price list, section, or item. */
		displayName: FormControl<string | null | undefined>,

		/** Optional. The BCP-47 language code that these strings apply for. Only one set of labels may be set per language. */
		languageCode: FormControl<string | null | undefined>,
	}
	export function CreateLabelFormGroup() {
		return new FormGroup<LabelFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A section of the price list containing one or more items. */
	export interface Section {

		/** Items that are contained within this section of the price list. */
		items?: Array<Item>;

		/** Required. Language-tagged labels for the section. We recommend that section names and descriptions be 140 characters or less. At least one set of labels is required. */
		labels?: Array<Label>;

		/** Required. ID for the section. Price list, section, and item IDs cannot be duplicated within this Location. */
		sectionId?: string | null;

		/** Optional. Type of the current price list section. Default value is FOOD. */
		sectionType?: SectionSectionType | null;
	}

	/** A section of the price list containing one or more items. */
	export interface SectionFormProperties {

		/** Required. ID for the section. Price list, section, and item IDs cannot be duplicated within this Location. */
		sectionId: FormControl<string | null | undefined>,

		/** Optional. Type of the current price list section. Default value is FOOD. */
		sectionType: FormControl<SectionSectionType | null | undefined>,
	}
	export function CreateSectionFormGroup() {
		return new FormGroup<SectionFormProperties>({
			sectionId: new FormControl<string | null | undefined>(undefined),
			sectionType: new FormControl<SectionSectionType | null | undefined>(undefined),
		});

	}


	/** A single list item. Each variation of an item in the price list should have its own Item with its own price data. */
	export interface Item {

		/** Required. ID for the item. Price list, section, and item IDs cannot be duplicated within this Location. */
		itemId?: string | null;

		/** Required. Language-tagged labels for the item. We recommend that item names be 140 characters or less, and descriptions 250 characters or less. At least one set of labels is required. */
		labels?: Array<Label>;

		/** Represents an amount of money with its currency type. */
		price?: Money;
	}

	/** A single list item. Each variation of an item in the price list should have its own Item with its own price data. */
	export interface ItemFormProperties {

		/** Required. ID for the item. Price list, section, and item IDs cannot be duplicated within this Location. */
		itemId: FormControl<string | null | undefined>,
	}
	export function CreateItemFormGroup() {
		return new FormGroup<ItemFormProperties>({
			itemId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an amount of money with its currency type. */
	export interface Money {

		/** The three-letter currency code defined in ISO 4217. */
		currencyCode?: string | null;

		/** Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000. */
		nanos?: number | null;

		/** The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar. */
		units?: string | null;
	}

	/** Represents an amount of money with its currency type. */
	export interface MoneyFormProperties {

		/** The three-letter currency code defined in ISO 4217. */
		currencyCode: FormControl<string | null | undefined>,

		/** Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000. */
		nanos: FormControl<number | null | undefined>,

		/** The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar. */
		units: FormControl<string | null | undefined>,
	}
	export function CreateMoneyFormGroup() {
		return new FormGroup<MoneyFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined),
			nanos: new FormControl<number | null | undefined>(undefined),
			units: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SectionSectionType { SECTION_TYPE_UNSPECIFIED = 'SECTION_TYPE_UNSPECIFIED', FOOD = 'FOOD', SERVICES = 'SERVICES' }


	/** All information pertaining to the location's profile. */
	export interface Profile {

		/** Description of the location in your own voice, not editable by anyone else. */
		description?: string | null;
	}

	/** All information pertaining to the location's profile. */
	export interface ProfileFormProperties {

		/** Description of the location in your own voice, not editable by anyone else. */
		description: FormControl<string | null | undefined>,
	}
	export function CreateProfileFormGroup() {
		return new FormGroup<ProfileFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the time periods that this location is open for business. Holds a collection of TimePeriod instances. */
	export interface BusinessHours {

		/** A collection of times that this location is open for business. Each period represents a range of hours when the location is open during the week. */
		periods?: Array<TimePeriod>;
	}

	/** Represents the time periods that this location is open for business. Holds a collection of TimePeriod instances. */
	export interface BusinessHoursFormProperties {
	}
	export function CreateBusinessHoursFormGroup() {
		return new FormGroup<BusinessHoursFormProperties>({
		});

	}


	/** Information of all parent and children locations related to this one. */
	export interface RelationshipData {

		/** The resource name of the Chain that this location is member of. How to find Chain ID */
		parentChain?: string | null;
	}

	/** Information of all parent and children locations related to this one. */
	export interface RelationshipDataFormProperties {

		/** The resource name of the Chain that this location is member of. How to find Chain ID */
		parentChain: FormControl<string | null | undefined>,
	}
	export function CreateRelationshipDataFormGroup() {
		return new FormGroup<RelationshipDataFormProperties>({
			parentChain: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Service area businesses provide their service at the customer's location (for example, a locksmith or plumber). */
	export interface ServiceAreaBusiness {

		/** Indicates the type of the service area business. */
		businessType?: ServiceAreaBusinessBusinessType | null;

		/** Defines the union of areas represented by a set of places. */
		places?: Places;

		/** A radius around a particular point (latitude/longitude). */
		radius?: PointRadius;
	}

	/** Service area businesses provide their service at the customer's location (for example, a locksmith or plumber). */
	export interface ServiceAreaBusinessFormProperties {

		/** Indicates the type of the service area business. */
		businessType: FormControl<ServiceAreaBusinessBusinessType | null | undefined>,
	}
	export function CreateServiceAreaBusinessFormGroup() {
		return new FormGroup<ServiceAreaBusinessFormProperties>({
			businessType: new FormControl<ServiceAreaBusinessBusinessType | null | undefined>(undefined),
		});

	}

	export enum ServiceAreaBusinessBusinessType { BUSINESS_TYPE_UNSPECIFIED = 'BUSINESS_TYPE_UNSPECIFIED', CUSTOMER_LOCATION_ONLY = 'CUSTOMER_LOCATION_ONLY', CUSTOMER_AND_BUSINESS_LOCATION = 'CUSTOMER_AND_BUSINESS_LOCATION' }


	/** Defines the union of areas represented by a set of places. */
	export interface Places {

		/** The areas represented by place IDs. Limited to a maximum of 20 places. */
		placeInfos?: Array<PlaceInfo>;
	}

	/** Defines the union of areas represented by a set of places. */
	export interface PlacesFormProperties {
	}
	export function CreatePlacesFormGroup() {
		return new FormGroup<PlacesFormProperties>({
		});

	}


	/** Defines an area that's represented by a place ID. */
	export interface PlaceInfo {

		/** The localized name of the place. For example, `Scottsdale, AZ`. */
		name?: string | null;

		/** The ID of the place. Must correspond to a [region.] (https://developers.google.com/places/web-service/supported_types#table3) */
		placeId?: string | null;
	}

	/** Defines an area that's represented by a place ID. */
	export interface PlaceInfoFormProperties {

		/** The localized name of the place. For example, `Scottsdale, AZ`. */
		name: FormControl<string | null | undefined>,

		/** The ID of the place. Must correspond to a [region.] (https://developers.google.com/places/web-service/supported_types#table3) */
		placeId: FormControl<string | null | undefined>,
	}
	export function CreatePlaceInfoFormGroup() {
		return new FormGroup<PlaceInfoFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			placeId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A radius around a particular point (latitude/longitude). */
	export interface PointRadius {

		/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this must conform to the WGS84 standard. Values must be within normalized ranges. */
		latlng?: LatLng;

		/** The distance in kilometers of the area around the point. */
		radiusKm?: number | null;
	}

	/** A radius around a particular point (latitude/longitude). */
	export interface PointRadiusFormProperties {

		/** The distance in kilometers of the area around the point. */
		radiusKm: FormControl<number | null | undefined>,
	}
	export function CreatePointRadiusFormGroup() {
		return new FormGroup<PointRadiusFormProperties>({
			radiusKm: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents a set of time periods when a location's operational hours differ from its normal business hours. */
	export interface SpecialHours {

		/** A list of exceptions to the business's regular hours. */
		specialHourPeriods?: Array<SpecialHourPeriod>;
	}

	/** Represents a set of time periods when a location's operational hours differ from its normal business hours. */
	export interface SpecialHoursFormProperties {
	}
	export function CreateSpecialHoursFormGroup() {
		return new FormGroup<SpecialHoursFormProperties>({
		});

	}


	/** Represents a single time period when a location's operational hours differ from its normal business hours. A special hour period must represent a range of less than 24 hours. The `open_time` and `start_date` must predate the `close_time` and `end_date`. The `close_time` and `end_date` can extend to 11:59 a.m. on the day after the specified `start_date`. For example, the following inputs are valid: start_date=2015-11-23, open_time=08:00, close_time=18:00 start_date=2015-11-23, end_date=2015-11-23, open_time=08:00, close_time=18:00 start_date=2015-11-23, end_date=2015-11-24, open_time=13:00, close_time=11:59 The following inputs are not valid: start_date=2015-11-23, open_time=13:00, close_time=11:59 start_date=2015-11-23, end_date=2015-11-24, open_time=13:00, close_time=12:00 start_date=2015-11-23, end_date=2015-11-25, open_time=08:00, close_time=18:00 */
	export interface SpecialHourPeriod {

		/** The wall time on `end_date` when a location closes, expressed in 24hr ISO 8601 extended format. (hh:mm) Valid values are 00:00-24:00, where 24:00 represents midnight at the end of the specified day field. Must be specified if `is_closed` is false. */
		closeTime?: string | null;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`. */
		endDate?: Date;

		/** If true, `end_date`, `open_time`, and `close_time` are ignored, and the date specified in `start_date` is treated as the location being closed for the entire day. */
		isClosed?: boolean | null;

		/** The wall time on `start_date` when a location opens, expressed in 24hr ISO 8601 extended format. (hh:mm) Valid values are 00:00-24:00, where 24:00 represents midnight at the end of the specified day field. Must be specified if `is_closed` is false. */
		openTime?: string | null;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`. */
		startDate?: Date;
	}

	/** Represents a single time period when a location's operational hours differ from its normal business hours. A special hour period must represent a range of less than 24 hours. The `open_time` and `start_date` must predate the `close_time` and `end_date`. The `close_time` and `end_date` can extend to 11:59 a.m. on the day after the specified `start_date`. For example, the following inputs are valid: start_date=2015-11-23, open_time=08:00, close_time=18:00 start_date=2015-11-23, end_date=2015-11-23, open_time=08:00, close_time=18:00 start_date=2015-11-23, end_date=2015-11-24, open_time=13:00, close_time=11:59 The following inputs are not valid: start_date=2015-11-23, open_time=13:00, close_time=11:59 start_date=2015-11-23, end_date=2015-11-24, open_time=13:00, close_time=12:00 start_date=2015-11-23, end_date=2015-11-25, open_time=08:00, close_time=18:00 */
	export interface SpecialHourPeriodFormProperties {

		/** The wall time on `end_date` when a location closes, expressed in 24hr ISO 8601 extended format. (hh:mm) Valid values are 00:00-24:00, where 24:00 represents midnight at the end of the specified day field. Must be specified if `is_closed` is false. */
		closeTime: FormControl<string | null | undefined>,

		/** If true, `end_date`, `open_time`, and `close_time` are ignored, and the date specified in `start_date` is treated as the location being closed for the entire day. */
		isClosed: FormControl<boolean | null | undefined>,

		/** The wall time on `start_date` when a location opens, expressed in 24hr ISO 8601 extended format. (hh:mm) Valid values are 00:00-24:00, where 24:00 represents midnight at the end of the specified day field. Must be specified if `is_closed` is false. */
		openTime: FormControl<string | null | undefined>,
	}
	export function CreateSpecialHourPeriodFormGroup() {
		return new FormGroup<SpecialHourPeriodFormProperties>({
			closeTime: new FormControl<string | null | undefined>(undefined),
			isClosed: new FormControl<boolean | null | undefined>(undefined),
			openTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for Reviews.BatchGetReviews. */
	export interface BatchGetReviewsRequest {

		/** Whether to ignore rating-only reviews. */
		ignoreRatingOnlyReviews?: boolean | null;

		/** A collection of locations to fetch reviews for, specified by their names. */
		locationNames?: Array<string>;

		/** Optional. Specifies the field to sort reviews by. If unspecified, the order of reviews returned will default to `update_time desc`. Valid orders to sort by are `rating`, `rating desc` and `update_time desc`. `rating` will return reviews in ascending order. `update_time`(i.e. ascending order) is not supported. */
		orderBy?: string | null;

		/** How many reviews to fetch per page. The default value is 200. */
		pageSize?: number | null;

		/** If specified, it fetches the next page of reviews. */
		pageToken?: string | null;
	}

	/** Request message for Reviews.BatchGetReviews. */
	export interface BatchGetReviewsRequestFormProperties {

		/** Whether to ignore rating-only reviews. */
		ignoreRatingOnlyReviews: FormControl<boolean | null | undefined>,

		/** Optional. Specifies the field to sort reviews by. If unspecified, the order of reviews returned will default to `update_time desc`. Valid orders to sort by are `rating`, `rating desc` and `update_time desc`. `rating` will return reviews in ascending order. `update_time`(i.e. ascending order) is not supported. */
		orderBy: FormControl<string | null | undefined>,

		/** How many reviews to fetch per page. The default value is 200. */
		pageSize: FormControl<number | null | undefined>,

		/** If specified, it fetches the next page of reviews. */
		pageToken: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetReviewsRequestFormGroup() {
		return new FormGroup<BatchGetReviewsRequestFormProperties>({
			ignoreRatingOnlyReviews: new FormControl<boolean | null | undefined>(undefined),
			orderBy: new FormControl<string | null | undefined>(undefined),
			pageSize: new FormControl<number | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for Reviews.BatchGetReviews. */
	export interface BatchGetReviewsResponse {

		/** Reviews with location information. */
		locationReviews?: Array<LocationReview>;

		/** If the number of reviews exceeded the requested page size, this field is populated with a token to fetch the next page of reviews on a subsequent calls. If there are no more reviews, this field will not be present in the response. */
		nextPageToken?: string | null;
	}

	/** Response message for Reviews.BatchGetReviews. */
	export interface BatchGetReviewsResponseFormProperties {

		/** If the number of reviews exceeded the requested page size, this field is populated with a token to fetch the next page of reviews on a subsequent calls. If there are no more reviews, this field will not be present in the response. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetReviewsResponseFormGroup() {
		return new FormGroup<BatchGetReviewsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a review with location information. */
	export interface LocationReview {

		/** Location resource name. */
		name?: string | null;

		/** Output only. Represents a review for a location. */
		review?: Review;
	}

	/** Represents a review with location information. */
	export interface LocationReviewFormProperties {

		/** Location resource name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLocationReviewFormGroup() {
		return new FormGroup<LocationReviewFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Output only. Represents a review for a location. */
	export interface Review {

		/** The body of the review as plain text with markups. */
		comment?: string | null;

		/** The timestamp for when the review was written. */
		createTime?: string | null;

		/** The resource name. For Review it is of the form `accounts/{account_id}/locations/{location_id}/reviews/{review_id}` */
		name?: string | null;

		/** The encrypted unique identifier. */
		reviewId?: string | null;

		/** Represents the location owner/manager's reply to a review. */
		reviewReply?: ReviewReply;

		/** Represents the author of the review. */
		reviewer?: Reviewer;

		/** The star rating of the review. */
		starRating?: ReviewStarRating | null;

		/** The timestamp for when the review was last modified. */
		updateTime?: string | null;
	}

	/** Output only. Represents a review for a location. */
	export interface ReviewFormProperties {

		/** The body of the review as plain text with markups. */
		comment: FormControl<string | null | undefined>,

		/** The timestamp for when the review was written. */
		createTime: FormControl<string | null | undefined>,

		/** The resource name. For Review it is of the form `accounts/{account_id}/locations/{location_id}/reviews/{review_id}` */
		name: FormControl<string | null | undefined>,

		/** The encrypted unique identifier. */
		reviewId: FormControl<string | null | undefined>,

		/** The star rating of the review. */
		starRating: FormControl<ReviewStarRating | null | undefined>,

		/** The timestamp for when the review was last modified. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateReviewFormGroup() {
		return new FormGroup<ReviewFormProperties>({
			comment: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			reviewId: new FormControl<string | null | undefined>(undefined),
			starRating: new FormControl<ReviewStarRating | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the location owner/manager's reply to a review. */
	export interface ReviewReply {

		/** The body of the reply as plain text with markups. The maximum length is 4096 bytes. */
		comment?: string | null;

		/** Output only. The timestamp for when the reply was last modified. */
		updateTime?: string | null;
	}

	/** Represents the location owner/manager's reply to a review. */
	export interface ReviewReplyFormProperties {

		/** The body of the reply as plain text with markups. The maximum length is 4096 bytes. */
		comment: FormControl<string | null | undefined>,

		/** Output only. The timestamp for when the reply was last modified. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateReviewReplyFormGroup() {
		return new FormGroup<ReviewReplyFormProperties>({
			comment: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the author of the review. */
	export interface Reviewer {

		/** The name of the reviewer. Only populated with the reviewer's real name if `is_anonymous` is false. */
		displayName?: string | null;

		/** Indicates whether the reviewer has opted to remain anonymous. */
		isAnonymous?: boolean | null;

		/** The profile photo link of the reviewer. Only populated if `is_anonymous` is false. */
		profilePhotoUrl?: string | null;
	}

	/** Represents the author of the review. */
	export interface ReviewerFormProperties {

		/** The name of the reviewer. Only populated with the reviewer's real name if `is_anonymous` is false. */
		displayName: FormControl<string | null | undefined>,

		/** Indicates whether the reviewer has opted to remain anonymous. */
		isAnonymous: FormControl<boolean | null | undefined>,

		/** The profile photo link of the reviewer. Only populated if `is_anonymous` is false. */
		profilePhotoUrl: FormControl<string | null | undefined>,
	}
	export function CreateReviewerFormGroup() {
		return new FormGroup<ReviewerFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			isAnonymous: new FormControl<boolean | null | undefined>(undefined),
			profilePhotoUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ReviewStarRating { STAR_RATING_UNSPECIFIED = 'STAR_RATING_UNSPECIFIED', ONE = 'ONE', TWO = 'TWO', THREE = 'THREE', FOUR = 'FOUR', FIVE = 'FIVE' }


	/** Features of the property of specific interest to the business traveler. */
	export interface Business {

		/** Business center. A designated room at the hotel with one or more desks and equipped with guest-use computers, printers, fax machines and/or photocopiers. May or may not be open 24/7. May or may not require a key to access. Not a meeting room or conference room. */
		businessCenter?: boolean | null;

		/** Business center exception. */
		businessCenterException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Meeting rooms. Rooms at the hotel designated for business-related gatherings. Rooms are usually equipped with tables or desks, office chairs and audio/visual facilities to allow for presentations and conference calls. Also known as conference rooms. */
		meetingRooms?: boolean | null;

		/** Meeting rooms count. The number of meeting rooms at the property. */
		meetingRoomsCount?: number | null;

		/** Meeting rooms count exception. */
		meetingRoomsCountException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Meeting rooms exception. */
		meetingRoomsException?: AccessibilityMobilityAccessibleElevatorException | null;
	}

	/** Features of the property of specific interest to the business traveler. */
	export interface BusinessFormProperties {

		/** Business center. A designated room at the hotel with one or more desks and equipped with guest-use computers, printers, fax machines and/or photocopiers. May or may not be open 24/7. May or may not require a key to access. Not a meeting room or conference room. */
		businessCenter: FormControl<boolean | null | undefined>,

		/** Business center exception. */
		businessCenterException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Meeting rooms. Rooms at the hotel designated for business-related gatherings. Rooms are usually equipped with tables or desks, office chairs and audio/visual facilities to allow for presentations and conference calls. Also known as conference rooms. */
		meetingRooms: FormControl<boolean | null | undefined>,

		/** Meeting rooms count. The number of meeting rooms at the property. */
		meetingRoomsCount: FormControl<number | null | undefined>,

		/** Meeting rooms count exception. */
		meetingRoomsCountException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Meeting rooms exception. */
		meetingRoomsException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,
	}
	export function CreateBusinessFormGroup() {
		return new FormGroup<BusinessFormProperties>({
			businessCenter: new FormControl<boolean | null | undefined>(undefined),
			businessCenterException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			meetingRooms: new FormControl<boolean | null | undefined>(undefined),
			meetingRoomsCount: new FormControl<number | null | undefined>(undefined),
			meetingRoomsCountException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			meetingRoomsException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
		});

	}


	/** An action that is performed when the user clicks through the post */
	export interface CallToAction {

		/** The type of action that will be performed. */
		actionType?: CallToActionActionType | null;

		/** The URL the user will be directed to upon clicking. This field should be left unset for Call CTA. */
		url?: string | null;
	}

	/** An action that is performed when the user clicks through the post */
	export interface CallToActionFormProperties {

		/** The type of action that will be performed. */
		actionType: FormControl<CallToActionActionType | null | undefined>,

		/** The URL the user will be directed to upon clicking. This field should be left unset for Call CTA. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateCallToActionFormGroup() {
		return new FormGroup<CallToActionFormProperties>({
			actionType: new FormControl<CallToActionActionType | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CallToActionActionType { ACTION_TYPE_UNSPECIFIED = 'ACTION_TYPE_UNSPECIFIED', BOOK = 'BOOK', ORDER = 'ORDER', SHOP = 'SHOP', LEARN_MORE = 'LEARN_MORE', SIGN_UP = 'SIGN_UP', GET_OFFER = 'GET_OFFER', CALL = 'CALL' }


	/** This message denotes calories information with an upper bound and lower bound range. Lower amount must be specified. Both lower and upper amounts are non-negative numbers. */
	export interface CaloriesFact {

		/** Required. Lower amount of calories */
		lowerAmount?: number | null;

		/** Required. Unit of the given calories information. */
		unit?: CaloriesFactUnit | null;

		/** Optional. Upper amount of calories */
		upperAmount?: number | null;
	}

	/** This message denotes calories information with an upper bound and lower bound range. Lower amount must be specified. Both lower and upper amounts are non-negative numbers. */
	export interface CaloriesFactFormProperties {

		/** Required. Lower amount of calories */
		lowerAmount: FormControl<number | null | undefined>,

		/** Required. Unit of the given calories information. */
		unit: FormControl<CaloriesFactUnit | null | undefined>,

		/** Optional. Upper amount of calories */
		upperAmount: FormControl<number | null | undefined>,
	}
	export function CreateCaloriesFactFormGroup() {
		return new FormGroup<CaloriesFactFormProperties>({
			lowerAmount: new FormControl<number | null | undefined>(undefined),
			unit: new FormControl<CaloriesFactUnit | null | undefined>(undefined),
			upperAmount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CaloriesFactUnit { ENERGY_UNIT_UNSPECIFIED = 'ENERGY_UNIT_UNSPECIFIED', CALORIE = 'CALORIE', JOULE = 'JOULE' }


	/** A chain is a brand that your business's locations can be affiliated with. */
	export interface Chain {

		/** Names of the chain. */
		chainNames?: Array<ChainName>;

		/** Number of locations that are part of this chain. */
		locationCount?: number | null;

		/** The chain's resource name, in the format `chains/{chain_place_id}`. */
		name?: string | null;

		/** Websites of the chain. */
		websites?: Array<ChainUrl>;
	}

	/** A chain is a brand that your business's locations can be affiliated with. */
	export interface ChainFormProperties {

		/** Number of locations that are part of this chain. */
		locationCount: FormControl<number | null | undefined>,

		/** The chain's resource name, in the format `chains/{chain_place_id}`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateChainFormGroup() {
		return new FormGroup<ChainFormProperties>({
			locationCount: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Name to be used when displaying the chain. */
	export interface ChainName {

		/** The display name for this chain. */
		displayName?: string | null;

		/** The BCP 47 code of language of the name. */
		languageCode?: string | null;
	}

	/** Name to be used when displaying the chain. */
	export interface ChainNameFormProperties {

		/** The display name for this chain. */
		displayName: FormControl<string | null | undefined>,

		/** The BCP 47 code of language of the name. */
		languageCode: FormControl<string | null | undefined>,
	}
	export function CreateChainNameFormGroup() {
		return new FormGroup<ChainNameFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Url to be used when displaying the chain. */
	export interface ChainUrl {

		/** The url for this chain. */
		url?: string | null;
	}

	/** Url to be used when displaying the chain. */
	export interface ChainUrlFormProperties {

		/** The url for this chain. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateChainUrlFormGroup() {
		return new FormGroup<ChainUrlFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for Locations.ClearLocationAssociationRequest. */
	export interface ClearLocationAssociationRequest {
	}

	/** Request message for Locations.ClearLocationAssociationRequest. */
	export interface ClearLocationAssociationRequestFormProperties {
	}
	export function CreateClearLocationAssociationRequestFormGroup() {
		return new FormGroup<ClearLocationAssociationRequestFormProperties>({
		});

	}


	/** Request message for Verifications.CompleteVerificationAction. */
	export interface CompleteVerificationRequest {

		/** PIN code received by the merchant to complete the verification. */
		pin?: string | null;
	}

	/** Request message for Verifications.CompleteVerificationAction. */
	export interface CompleteVerificationRequestFormProperties {

		/** PIN code received by the merchant to complete the verification. */
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
			createTime: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<VerificationMethod | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<VerificationState | null | undefined>(undefined),
		});

	}

	export enum VerificationMethod { VERIFICATION_METHOD_UNSPECIFIED = 'VERIFICATION_METHOD_UNSPECIFIED', ADDRESS = 'ADDRESS', EMAIL = 'EMAIL', PHONE_CALL = 'PHONE_CALL', SMS = 'SMS', AUTO = 'AUTO' }

	export enum VerificationState { VERIFICATION_STATE_UNSPECIFIED = 'VERIFICATION_STATE_UNSPECIFIED', PENDING = 'PENDING', COMPLETED = 'COMPLETED', FAILED = 'FAILED' }


	/** The ways in which the property provides guests with the ability to access the internet. */
	export interface Connectivity {

		/** Free wifi. The hotel offers guests wifi for free. */
		freeWifi?: boolean | null;

		/** Free wifi exception. */
		freeWifiException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Public area wifi available. Guests have the ability to wirelessly connect to the internet in the areas of the hotel accessible to anyone. Can be free or for a fee. */
		publicAreaWifiAvailable?: boolean | null;

		/** Public area wifi available exception. */
		publicAreaWifiAvailableException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Public internet terminal. An area of the hotel supplied with computers and designated for the purpose of providing guests with the ability to access the internet. */
		publicInternetTerminal?: boolean | null;

		/** Public internet terminal exception. */
		publicInternetTerminalException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Wifi available. The hotel provides the ability for guests to wirelessly connect to the internet. Can be in the public areas of the hotel and/or in the guest rooms. Can be free or for a fee. */
		wifiAvailable?: boolean | null;

		/** Wifi available exception. */
		wifiAvailableException?: AccessibilityMobilityAccessibleElevatorException | null;
	}

	/** The ways in which the property provides guests with the ability to access the internet. */
	export interface ConnectivityFormProperties {

		/** Free wifi. The hotel offers guests wifi for free. */
		freeWifi: FormControl<boolean | null | undefined>,

		/** Free wifi exception. */
		freeWifiException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Public area wifi available. Guests have the ability to wirelessly connect to the internet in the areas of the hotel accessible to anyone. Can be free or for a fee. */
		publicAreaWifiAvailable: FormControl<boolean | null | undefined>,

		/** Public area wifi available exception. */
		publicAreaWifiAvailableException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Public internet terminal. An area of the hotel supplied with computers and designated for the purpose of providing guests with the ability to access the internet. */
		publicInternetTerminal: FormControl<boolean | null | undefined>,

		/** Public internet terminal exception. */
		publicInternetTerminalException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Wifi available. The hotel provides the ability for guests to wirelessly connect to the internet. Can be in the public areas of the hotel and/or in the guest rooms. Can be free or for a fee. */
		wifiAvailable: FormControl<boolean | null | undefined>,

		/** Wifi available exception. */
		wifiAvailableException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,
	}
	export function CreateConnectivityFormGroup() {
		return new FormGroup<ConnectivityFormProperties>({
			freeWifi: new FormControl<boolean | null | undefined>(undefined),
			freeWifiException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			publicAreaWifiAvailable: new FormControl<boolean | null | undefined>(undefined),
			publicAreaWifiAvailableException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			publicInternetTerminal: new FormControl<boolean | null | undefined>(undefined),
			publicInternetTerminalException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			wifiAvailable: new FormControl<boolean | null | undefined>(undefined),
			wifiAvailableException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
		});

	}


	/** Request message for AccessControl.DeclineInvitation. */
	export interface DeclineInvitationRequest {
	}

	/** Request message for AccessControl.DeclineInvitation. */
	export interface DeclineInvitationRequestFormProperties {
	}
	export function CreateDeclineInvitationRequestFormGroup() {
		return new FormGroup<DeclineInvitationRequestFormProperties>({
		});

	}


	/** A value for a single metric with a given time dimension. */
	export interface DimensionalMetricValue {

		/** The option that requested this dimensional value. */
		metricOption?: DimensionalMetricValueMetricOption | null;

		/** The dimension for which data is divided over. */
		timeDimension?: TimeDimension;

		/** The value. If no value is set, then the requested data is missing. */
		value?: string | null;
	}

	/** A value for a single metric with a given time dimension. */
	export interface DimensionalMetricValueFormProperties {

		/** The option that requested this dimensional value. */
		metricOption: FormControl<DimensionalMetricValueMetricOption | null | undefined>,

		/** The value. If no value is set, then the requested data is missing. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateDimensionalMetricValueFormGroup() {
		return new FormGroup<DimensionalMetricValueFormProperties>({
			metricOption: new FormControl<DimensionalMetricValueMetricOption | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DimensionalMetricValueMetricOption { METRIC_OPTION_UNSPECIFIED = 'METRIC_OPTION_UNSPECIFIED', AGGREGATED_TOTAL = 'AGGREGATED_TOTAL', AGGREGATED_DAILY = 'AGGREGATED_DAILY', BREAKDOWN_DAY_OF_WEEK = 'BREAKDOWN_DAY_OF_WEEK', BREAKDOWN_HOUR_OF_DAY = 'BREAKDOWN_HOUR_OF_DAY' }


	/** The dimension for which data is divided over. */
	export interface TimeDimension {

		/** The day of the week ("MONDAY" to "SUNDAY") this value corresponds to. Set for BREAKDOWN_DAY_OF_WEEK option. */
		dayOfWeek?: TimePeriodCloseDay | null;

		/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
		timeOfDay?: TimeOfDay;

		/** A range of time. Data will be pulled over the range as a half-open inverval (that is, [start_time, end_time)). */
		timeRange?: TimeRange;
	}

	/** The dimension for which data is divided over. */
	export interface TimeDimensionFormProperties {

		/** The day of the week ("MONDAY" to "SUNDAY") this value corresponds to. Set for BREAKDOWN_DAY_OF_WEEK option. */
		dayOfWeek: FormControl<TimePeriodCloseDay | null | undefined>,
	}
	export function CreateTimeDimensionFormGroup() {
		return new FormGroup<TimeDimensionFormProperties>({
			dayOfWeek: new FormControl<TimePeriodCloseDay | null | undefined>(undefined),
		});

	}


	/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
	export interface TimeOfDay {

		/** Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
		hours?: number | null;

		/** Minutes of hour of day. Must be from 0 to 59. */
		minutes?: number | null;

		/** Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. */
		nanos?: number | null;

		/** Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds. */
		seconds?: number | null;
	}

	/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
	export interface TimeOfDayFormProperties {

		/** Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
		hours: FormControl<number | null | undefined>,

		/** Minutes of hour of day. Must be from 0 to 59. */
		minutes: FormControl<number | null | undefined>,

		/** Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. */
		nanos: FormControl<number | null | undefined>,

		/** Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds. */
		seconds: FormControl<number | null | undefined>,
	}
	export function CreateTimeOfDayFormGroup() {
		return new FormGroup<TimeOfDayFormProperties>({
			hours: new FormControl<number | null | undefined>(undefined),
			minutes: new FormControl<number | null | undefined>(undefined),
			nanos: new FormControl<number | null | undefined>(undefined),
			seconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Dimensions of the media item. */
	export interface Dimensions {

		/** Height of the media item, in pixels. */
		heightPixels?: number | null;

		/** Width of the media item, in pixels. */
		widthPixels?: number | null;
	}

	/** Dimensions of the media item. */
	export interface DimensionsFormProperties {

		/** Height of the media item, in pixels. */
		heightPixels: FormControl<number | null | undefined>,

		/** Width of the media item, in pixels. */
		widthPixels: FormControl<number | null | undefined>,
	}
	export function CreateDimensionsFormGroup() {
		return new FormGroup<DimensionsFormProperties>({
			heightPixels: new FormControl<number | null | undefined>(undefined),
			widthPixels: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A request for driving direction insights. */
	export interface DrivingDirectionMetricsRequest {

		/** The BCP 47 code for the language. If a language code is not provided, it defaults to English. */
		languageCode?: string | null;

		/** The number of days to aggregate data for. Results returned will be available data over the last number of requested days. Valid values are 7, 30, and 90. */
		numDays?: DrivingDirectionMetricsRequestNumDays | null;
	}

	/** A request for driving direction insights. */
	export interface DrivingDirectionMetricsRequestFormProperties {

		/** The BCP 47 code for the language. If a language code is not provided, it defaults to English. */
		languageCode: FormControl<string | null | undefined>,

		/** The number of days to aggregate data for. Results returned will be available data over the last number of requested days. Valid values are 7, 30, and 90. */
		numDays: FormControl<DrivingDirectionMetricsRequestNumDays | null | undefined>,
	}
	export function CreateDrivingDirectionMetricsRequestFormGroup() {
		return new FormGroup<DrivingDirectionMetricsRequestFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			numDays: new FormControl<DrivingDirectionMetricsRequestNumDays | null | undefined>(undefined),
		});

	}

	export enum DrivingDirectionMetricsRequestNumDays { SEVEN = 'SEVEN', THIRTY = 'THIRTY', NINETY = 'NINETY' }


	/** Input for EMAIL verification. */
	export interface EmailInput {

		/** Email address where the PIN should be sent to. An email address is accepted only if it is one of the addresses provided by FetchVerificationOptions. If the EmailVerificationData has is_user_name_editable set to true, the client may specify a different user name (local-part) but must match the domain name. */
		emailAddress?: string | null;
	}

	/** Input for EMAIL verification. */
	export interface EmailInputFormProperties {

		/** Email address where the PIN should be sent to. An email address is accepted only if it is one of the addresses provided by FetchVerificationOptions. If the EmailVerificationData has is_user_name_editable set to true, the client may specify a different user name (local-part) but must match the domain name. */
		emailAddress: FormControl<string | null | undefined>,
	}
	export function CreateEmailInputFormGroup() {
		return new FormGroup<EmailInputFormProperties>({
			emailAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Display data for verifications through email. */
	export interface EmailVerificationData {

		/** Domain name in the email address. e.g. "gmail.com" in foo@gmail.com */
		domainName?: string | null;

		/** Whether client is allowed to provide a different user name. */
		isUserNameEditable?: boolean | null;

		/** User name in the email address. e.g. "foo" in foo@gmail.com */
		userName?: string | null;
	}

	/** Display data for verifications through email. */
	export interface EmailVerificationDataFormProperties {

		/** Domain name in the email address. e.g. "gmail.com" in foo@gmail.com */
		domainName: FormControl<string | null | undefined>,

		/** Whether client is allowed to provide a different user name. */
		isUserNameEditable: FormControl<boolean | null | undefined>,

		/** User name in the email address. e.g. "foo" in foo@gmail.com */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateEmailVerificationDataFormGroup() {
		return new FormGroup<EmailVerificationDataFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined),
			isUserNameEditable: new FormControl<boolean | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`. */
	export interface Empty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`. */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** Enhanced cleaning measures implemented by the hotel during COVID-19. */
	export interface EnhancedCleaning {

		/** Commercial-grade disinfectant used to clean the property. */
		commercialGradeDisinfectantCleaning?: boolean | null;

		/** Commercial grade disinfectant cleaning exception. */
		commercialGradeDisinfectantCleaningException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Enhanced cleaning of common areas. */
		commonAreasEnhancedCleaning?: boolean | null;

		/** Common areas enhanced cleaning exception. */
		commonAreasEnhancedCleaningException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Employees trained in COVID-19 cleaning procedures. */
		employeesTrainedCleaningProcedures?: boolean | null;

		/** Employees trained cleaning procedures exception. */
		employeesTrainedCleaningProceduresException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Employees trained in thorough hand-washing. */
		employeesTrainedThoroughHandWashing?: boolean | null;

		/** Employees trained thorough hand washing exception. */
		employeesTrainedThoroughHandWashingException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Employees wear masks, face shields, and/or gloves. */
		employeesWearProtectiveEquipment?: boolean | null;

		/** Employees wear protective equipment exception. */
		employeesWearProtectiveEquipmentException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Enhanced cleaning of guest rooms. */
		guestRoomsEnhancedCleaning?: boolean | null;

		/** Guest rooms enhanced cleaning exception. */
		guestRoomsEnhancedCleaningException?: AccessibilityMobilityAccessibleElevatorException | null;
	}

	/** Enhanced cleaning measures implemented by the hotel during COVID-19. */
	export interface EnhancedCleaningFormProperties {

		/** Commercial-grade disinfectant used to clean the property. */
		commercialGradeDisinfectantCleaning: FormControl<boolean | null | undefined>,

		/** Commercial grade disinfectant cleaning exception. */
		commercialGradeDisinfectantCleaningException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Enhanced cleaning of common areas. */
		commonAreasEnhancedCleaning: FormControl<boolean | null | undefined>,

		/** Common areas enhanced cleaning exception. */
		commonAreasEnhancedCleaningException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Employees trained in COVID-19 cleaning procedures. */
		employeesTrainedCleaningProcedures: FormControl<boolean | null | undefined>,

		/** Employees trained cleaning procedures exception. */
		employeesTrainedCleaningProceduresException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Employees trained in thorough hand-washing. */
		employeesTrainedThoroughHandWashing: FormControl<boolean | null | undefined>,

		/** Employees trained thorough hand washing exception. */
		employeesTrainedThoroughHandWashingException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Employees wear masks, face shields, and/or gloves. */
		employeesWearProtectiveEquipment: FormControl<boolean | null | undefined>,

		/** Employees wear protective equipment exception. */
		employeesWearProtectiveEquipmentException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Enhanced cleaning of guest rooms. */
		guestRoomsEnhancedCleaning: FormControl<boolean | null | undefined>,

		/** Guest rooms enhanced cleaning exception. */
		guestRoomsEnhancedCleaningException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,
	}
	export function CreateEnhancedCleaningFormGroup() {
		return new FormGroup<EnhancedCleaningFormProperties>({
			commercialGradeDisinfectantCleaning: new FormControl<boolean | null | undefined>(undefined),
			commercialGradeDisinfectantCleaningException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			commonAreasEnhancedCleaning: new FormControl<boolean | null | undefined>(undefined),
			commonAreasEnhancedCleaningException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			employeesTrainedCleaningProcedures: new FormControl<boolean | null | undefined>(undefined),
			employeesTrainedCleaningProceduresException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			employeesTrainedThoroughHandWashing: new FormControl<boolean | null | undefined>(undefined),
			employeesTrainedThoroughHandWashingException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			employeesWearProtectiveEquipment: new FormControl<boolean | null | undefined>(undefined),
			employeesWearProtectiveEquipmentException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			guestRoomsEnhancedCleaning: new FormControl<boolean | null | undefined>(undefined),
			guestRoomsEnhancedCleaningException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
		});

	}


	/** Services and amenities for families and young guests. */
	export interface Families {

		/** Babysitting. Child care that is offered by hotel staffers or coordinated by hotel staffers with local child care professionals. Can be free or for a fee. */
		babysitting?: boolean | null;

		/** Babysitting exception. */
		babysittingException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Kids activities. Recreational options such as sports, films, crafts and games designed for the enjoyment of children and offered at the hotel. May or may not be supervised. May or may not be at a designated time or place. Cab be free or for a fee. */
		kidsActivities?: boolean | null;

		/** Kids activities exception. */
		kidsActivitiesException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Kids club. An organized program of group activities held at the hotel and designed for the enjoyment of children. Facilitated by hotel staff (or staff procured by the hotel) in an area(s) designated for the purpose of entertaining children without their parents. May include games, outings, water sports, team sports, arts and crafts, and films. Usually has set hours. Can be free or for a fee. Also known as Kids Camp or Kids program. */
		kidsClub?: boolean | null;

		/** Kids club exception. */
		kidsClubException?: AccessibilityMobilityAccessibleElevatorException | null;
	}

	/** Services and amenities for families and young guests. */
	export interface FamiliesFormProperties {

		/** Babysitting. Child care that is offered by hotel staffers or coordinated by hotel staffers with local child care professionals. Can be free or for a fee. */
		babysitting: FormControl<boolean | null | undefined>,

		/** Babysitting exception. */
		babysittingException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Kids activities. Recreational options such as sports, films, crafts and games designed for the enjoyment of children and offered at the hotel. May or may not be supervised. May or may not be at a designated time or place. Cab be free or for a fee. */
		kidsActivities: FormControl<boolean | null | undefined>,

		/** Kids activities exception. */
		kidsActivitiesException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Kids club. An organized program of group activities held at the hotel and designed for the enjoyment of children. Facilitated by hotel staff (or staff procured by the hotel) in an area(s) designated for the purpose of entertaining children without their parents. May include games, outings, water sports, team sports, arts and crafts, and films. Usually has set hours. Can be free or for a fee. Also known as Kids Camp or Kids program. */
		kidsClub: FormControl<boolean | null | undefined>,

		/** Kids club exception. */
		kidsClubException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,
	}
	export function CreateFamiliesFormGroup() {
		return new FormGroup<FamiliesFormProperties>({
			babysitting: new FormControl<boolean | null | undefined>(undefined),
			babysittingException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			kidsActivities: new FormControl<boolean | null | undefined>(undefined),
			kidsActivitiesException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			kidsClub: new FormControl<boolean | null | undefined>(undefined),
			kidsClubException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
		});

	}


	/** Request message for Verifications.FetchVerificationOptions. */
	export interface FetchVerificationOptionsRequest {

		/** Additional data for service business verification. */
		context?: ServiceBusinessContext;

		/** The BCP 47 language code representing the language that is to be used for the verification process. Available options vary by language. */
		languageCode?: string | null;
	}

	/** Request message for Verifications.FetchVerificationOptions. */
	export interface FetchVerificationOptionsRequestFormProperties {

		/** The BCP 47 language code representing the language that is to be used for the verification process. Available options vary by language. */
		languageCode: FormControl<string | null | undefined>,
	}
	export function CreateFetchVerificationOptionsRequestFormGroup() {
		return new FormGroup<FetchVerificationOptionsRequestFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Additional data for service business verification. */
	export interface ServiceBusinessContext {

		/** Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an i18n-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478 */
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

		/** Display data for verifications through email. */
		emailData?: EmailVerificationData;

		/** Display Data for verifications through phone, e.g. phone call, sms. */
		phoneData?: PhoneVerificationData;

		/** Method to verify the location. */
		verificationMethod?: VerificationMethod | null;
	}

	/** The verification option represents how to verify the location (indicated by verification method) and where the verification will be sent to (indicated by display data). */
	export interface VerificationOptionFormProperties {

		/** Method to verify the location. */
		verificationMethod: FormControl<VerificationMethod | null | undefined>,
	}
	export function CreateVerificationOptionFormGroup() {
		return new FormGroup<VerificationOptionFormProperties>({
			verificationMethod: new FormControl<VerificationMethod | null | undefined>(undefined),
		});

	}


	/** Display Data for verifications through phone, e.g. phone call, sms. */
	export interface PhoneVerificationData {

		/** Phone number that the PIN will be sent to. */
		phoneNumber?: string | null;
	}

	/** Display Data for verifications through phone, e.g. phone call, sms. */
	export interface PhoneVerificationDataFormProperties {

		/** Phone number that the PIN will be sent to. */
		phoneNumber: FormControl<string | null | undefined>,
	}
	export function CreatePhoneVerificationDataFormGroup() {
		return new FormGroup<PhoneVerificationDataFormProperties>({
			phoneNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for Locations.FindMatchingLocations. */
	export interface FindMatchingLocationsRequest {

		/** The preferred language for the matching location (in BCP-47 format). */
		languageCode?: string | null;

		/** Deprecated. This field is ignored for all requests. */
		maxCacheDuration?: string | null;

		/** The number of matches to return. The default value is 3, with a maximum of 10. Note that latency may increase if more are requested. There is no pagination. */
		numResults?: number | null;
	}

	/** Request message for Locations.FindMatchingLocations. */
	export interface FindMatchingLocationsRequestFormProperties {

		/** The preferred language for the matching location (in BCP-47 format). */
		languageCode: FormControl<string | null | undefined>,

		/** Deprecated. This field is ignored for all requests. */
		maxCacheDuration: FormControl<string | null | undefined>,

		/** The number of matches to return. The default value is 3, with a maximum of 10. Note that latency may increase if more are requested. There is no pagination. */
		numResults: FormControl<number | null | undefined>,
	}
	export function CreateFindMatchingLocationsRequestFormGroup() {
		return new FormGroup<FindMatchingLocationsRequestFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			maxCacheDuration: new FormControl<string | null | undefined>(undefined),
			numResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response message for Locations.FindMatchingLocations. */
	export interface FindMatchingLocationsResponse {

		/** When the matching algorithm was last executed for this location. */
		matchTime?: string | null;

		/** A collection of locations that are potential matches to the specified location, listed in order from best to least match. If there is an exact match, it will be in the first position. */
		matchedLocations?: Array<MatchedLocation>;
	}

	/** Response message for Locations.FindMatchingLocations. */
	export interface FindMatchingLocationsResponseFormProperties {

		/** When the matching algorithm was last executed for this location. */
		matchTime: FormControl<string | null | undefined>,
	}
	export function CreateFindMatchingLocationsResponseFormGroup() {
		return new FormGroup<FindMatchingLocationsResponseFormProperties>({
			matchTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a possible match to a location. */
	export interface MatchedLocation {

		/** Is this an exact match? */
		isExactMatch?: boolean | null;

		/** A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories. */
		location?: Location;
	}

	/** Represents a possible match to a location. */
	export interface MatchedLocationFormProperties {

		/** Is this an exact match? */
		isExactMatch: FormControl<boolean | null | undefined>,
	}
	export function CreateMatchedLocationFormGroup() {
		return new FormGroup<MatchedLocationFormProperties>({
			isExactMatch: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Follower metadata for a location. */
	export interface FollowersMetadata {

		/** Total number of followers for the location. */
		count?: string | null;

		/** The resource name for this. accounts/{account_id}/locations/{location_id}/followers/metadata */
		name?: string | null;
	}

	/** Follower metadata for a location. */
	export interface FollowersMetadataFormProperties {

		/** Total number of followers for the location. */
		count: FormControl<string | null | undefined>,

		/** The resource name for this. accounts/{account_id}/locations/{location_id}/followers/metadata */
		name: FormControl<string | null | undefined>,
	}
	export function CreateFollowersMetadataFormGroup() {
		return new FormGroup<FollowersMetadataFormProperties>({
			count: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Meals, snacks, and beverages available at the property. */
	export interface FoodAndDrink {

		/** Bar. A designated room, lounge or area of an on-site restaurant with seating at a counter behind which a hotel staffer takes the guest's order and provides the requested alcoholic drink. Can be indoors or outdoors. Also known as Pub. */
		bar?: boolean | null;

		/** Bar exception. */
		barException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Breakfast available. The morning meal is offered to all guests. Can be free or for a fee. */
		breakfastAvailable?: boolean | null;

		/** Breakfast available exception. */
		breakfastAvailableException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Breakfast buffet. Breakfast meal service where guests serve themselves from a variety of dishes/foods that are put out on a table. */
		breakfastBuffet?: boolean | null;

		/** Breakfast buffet exception. */
		breakfastBuffetException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Buffet. A type of meal where guests serve themselves from a variety of dishes/foods that are put out on a table. Includes lunch and/or dinner meals. A breakfast-only buffet is not sufficient. */
		buffet?: boolean | null;

		/** Buffet exception. */
		buffetException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Dinner buffet. Dinner meal service where guests serve themselves from a variety of dishes/foods that are put out on a table. */
		dinnerBuffet?: boolean | null;

		/** Dinner buffet exception. */
		dinnerBuffetException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Free breakfast. Breakfast is offered for free to all guests. Does not apply if limited to certain room packages. */
		freeBreakfast?: boolean | null;

		/** Free breakfast exception. */
		freeBreakfastException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Restaurant. A business onsite at the hotel that is open to the public as well as guests, and offers meals and beverages to consume at tables or counters. May or may not include table service. Also known as cafe, buffet, eatery. A "breakfast room" where the hotel serves breakfast only to guests (not the general public) does not count as a restaurant. */
		restaurant?: boolean | null;

		/** Restaurant exception. */
		restaurantException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Restaurants count. The number of restaurants at the hotel. */
		restaurantsCount?: number | null;

		/** Restaurants count exception. */
		restaurantsCountException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Room service. A hotel staffer delivers meals prepared onsite to a guest's room as per their request. May or may not be available during specific hours. Services should be available to all guests (not based on rate/room booked/reward program, etc). */
		roomService?: boolean | null;

		/** Room service exception. */
		roomServiceException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Table service. A restaurant in which a staff member is assigned to a guest's table to take their order, deliver and clear away food, and deliver the bill, if applicable. Also known as sit-down restaurant. */
		tableService?: boolean | null;

		/** Table service exception. */
		tableServiceException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** 24hr room service. Room service is available 24 hours a day. */
		twentyFourHourRoomService?: boolean | null;

		/** 24hr room service exception. */
		twentyFourHourRoomServiceException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Vending machine. A glass-fronted mechanized cabinet displaying and dispensing snacks and beverages for purchase by coins, paper money and/or credit cards. */
		vendingMachine?: boolean | null;

		/** Vending machine exception. */
		vendingMachineException?: AccessibilityMobilityAccessibleElevatorException | null;
	}

	/** Meals, snacks, and beverages available at the property. */
	export interface FoodAndDrinkFormProperties {

		/** Bar. A designated room, lounge or area of an on-site restaurant with seating at a counter behind which a hotel staffer takes the guest's order and provides the requested alcoholic drink. Can be indoors or outdoors. Also known as Pub. */
		bar: FormControl<boolean | null | undefined>,

		/** Bar exception. */
		barException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Breakfast available. The morning meal is offered to all guests. Can be free or for a fee. */
		breakfastAvailable: FormControl<boolean | null | undefined>,

		/** Breakfast available exception. */
		breakfastAvailableException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Breakfast buffet. Breakfast meal service where guests serve themselves from a variety of dishes/foods that are put out on a table. */
		breakfastBuffet: FormControl<boolean | null | undefined>,

		/** Breakfast buffet exception. */
		breakfastBuffetException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Buffet. A type of meal where guests serve themselves from a variety of dishes/foods that are put out on a table. Includes lunch and/or dinner meals. A breakfast-only buffet is not sufficient. */
		buffet: FormControl<boolean | null | undefined>,

		/** Buffet exception. */
		buffetException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Dinner buffet. Dinner meal service where guests serve themselves from a variety of dishes/foods that are put out on a table. */
		dinnerBuffet: FormControl<boolean | null | undefined>,

		/** Dinner buffet exception. */
		dinnerBuffetException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Free breakfast. Breakfast is offered for free to all guests. Does not apply if limited to certain room packages. */
		freeBreakfast: FormControl<boolean | null | undefined>,

		/** Free breakfast exception. */
		freeBreakfastException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Restaurant. A business onsite at the hotel that is open to the public as well as guests, and offers meals and beverages to consume at tables or counters. May or may not include table service. Also known as cafe, buffet, eatery. A "breakfast room" where the hotel serves breakfast only to guests (not the general public) does not count as a restaurant. */
		restaurant: FormControl<boolean | null | undefined>,

		/** Restaurant exception. */
		restaurantException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Restaurants count. The number of restaurants at the hotel. */
		restaurantsCount: FormControl<number | null | undefined>,

		/** Restaurants count exception. */
		restaurantsCountException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Room service. A hotel staffer delivers meals prepared onsite to a guest's room as per their request. May or may not be available during specific hours. Services should be available to all guests (not based on rate/room booked/reward program, etc). */
		roomService: FormControl<boolean | null | undefined>,

		/** Room service exception. */
		roomServiceException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Table service. A restaurant in which a staff member is assigned to a guest's table to take their order, deliver and clear away food, and deliver the bill, if applicable. Also known as sit-down restaurant. */
		tableService: FormControl<boolean | null | undefined>,

		/** Table service exception. */
		tableServiceException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** 24hr room service. Room service is available 24 hours a day. */
		twentyFourHourRoomService: FormControl<boolean | null | undefined>,

		/** 24hr room service exception. */
		twentyFourHourRoomServiceException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Vending machine. A glass-fronted mechanized cabinet displaying and dispensing snacks and beverages for purchase by coins, paper money and/or credit cards. */
		vendingMachine: FormControl<boolean | null | undefined>,

		/** Vending machine exception. */
		vendingMachineException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,
	}
	export function CreateFoodAndDrinkFormGroup() {
		return new FormGroup<FoodAndDrinkFormProperties>({
			bar: new FormControl<boolean | null | undefined>(undefined),
			barException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			breakfastAvailable: new FormControl<boolean | null | undefined>(undefined),
			breakfastAvailableException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			breakfastBuffet: new FormControl<boolean | null | undefined>(undefined),
			breakfastBuffetException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			buffet: new FormControl<boolean | null | undefined>(undefined),
			buffetException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			dinnerBuffet: new FormControl<boolean | null | undefined>(undefined),
			dinnerBuffetException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			freeBreakfast: new FormControl<boolean | null | undefined>(undefined),
			freeBreakfastException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			restaurant: new FormControl<boolean | null | undefined>(undefined),
			restaurantException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			restaurantsCount: new FormControl<number | null | undefined>(undefined),
			restaurantsCountException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			roomService: new FormControl<boolean | null | undefined>(undefined),
			roomServiceException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			tableService: new FormControl<boolean | null | undefined>(undefined),
			tableServiceException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			twentyFourHourRoomService: new FormControl<boolean | null | undefined>(undefined),
			twentyFourHourRoomServiceException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			vendingMachine: new FormControl<boolean | null | undefined>(undefined),
			vendingMachineException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
		});

	}


	/** Menu of a business that serves food dishes. */
	export interface FoodMenu {

		/** Optional. Cuisine information for the food menu. It is highly recommended to provide this field. */
		cuisines?: Array<string>;

		/** Required. Language-tagged labels for the menu. E.g. "menu", "lunch special". Display names should be 140 characters or less, with descriptions 1,000 characters or less. At least one set of labels is required. */
		labels?: Array<MenuLabel>;

		/** Required. Sections of the menu. */
		sections?: Array<FoodMenuSection>;

		/** Optional. Source URL of menu if there is a webpage to go to. */
		sourceUrl?: string | null;
	}

	/** Menu of a business that serves food dishes. */
	export interface FoodMenuFormProperties {

		/** Optional. Source URL of menu if there is a webpage to go to. */
		sourceUrl: FormControl<string | null | undefined>,
	}
	export function CreateFoodMenuFormGroup() {
		return new FormGroup<FoodMenuFormProperties>({
			sourceUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Label to be used when displaying the menu and its various sub-components. */
	export interface MenuLabel {

		/** Optional. Supplementary information of the component. */
		description?: string | null;

		/** Required. Display name of the component. */
		displayName?: string | null;

		/** Optional. The BCP 47 code of language. If the language is not available, it will default to English. */
		languageCode?: string | null;
	}

	/** Label to be used when displaying the menu and its various sub-components. */
	export interface MenuLabelFormProperties {

		/** Optional. Supplementary information of the component. */
		description: FormControl<string | null | undefined>,

		/** Required. Display name of the component. */
		displayName: FormControl<string | null | undefined>,

		/** Optional. The BCP 47 code of language. If the language is not available, it will default to English. */
		languageCode: FormControl<string | null | undefined>,
	}
	export function CreateMenuLabelFormGroup() {
		return new FormGroup<MenuLabelFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Section of a menu. It can contain multiple items/dishes. */
	export interface FoodMenuSection {

		/** Required. Items of the section. Each Section must have at least an item. */
		items?: Array<FoodMenuItem>;

		/** Required. Language tagged labels for this menu section. Display names should be 140 characters or less, with descriptions 1,000 characters or less. At least one set of labels is required. */
		labels?: Array<MenuLabel>;
	}

	/** Section of a menu. It can contain multiple items/dishes. */
	export interface FoodMenuSectionFormProperties {
	}
	export function CreateFoodMenuSectionFormGroup() {
		return new FormGroup<FoodMenuSectionFormProperties>({
		});

	}


	/** Item of a Section. It can be the dish itself, or can contain multiple FoodMenuItemOption. */
	export interface FoodMenuItem {

		/** Attributes of a food item/dish. */
		attributes?: FoodMenuItemAttributes;

		/** Required. Language tagged labels for this menu item. Display names should be 140 characters or less, with descriptions 1,000 characters or less. At least one set of labels is required. */
		labels?: Array<MenuLabel>;

		/** Optional. This is for an item that comes in multiple different options, and users are required to make choices. E.g. "regular" vs. "large" pizza. When options are specified, labels and attributes at item level will automatically become the first option's labels and attributes. Clients only need to specify other additional food options in this field. */
		options?: Array<FoodMenuItemOption>;
	}

	/** Item of a Section. It can be the dish itself, or can contain multiple FoodMenuItemOption. */
	export interface FoodMenuItemFormProperties {
	}
	export function CreateFoodMenuItemFormGroup() {
		return new FormGroup<FoodMenuItemFormProperties>({
		});

	}


	/** Attributes of a food item/dish. */
	export interface FoodMenuItemAttributes {

		/** Optional. Allergens associated with the food dish. It is highly recommended to provide this field. */
		allergen?: Array<string>;

		/** Optional. Dietary information of the food dish. It is highly recommended to provide this field. */
		dietaryRestriction?: Array<string>;

		/** Optional. Ingredients of the food dish option. */
		ingredients?: Array<Ingredient>;

		/** Optional. The media keys of the media associated with the dish. Only photo media is supported. When there are multiple photos associated, the first photo is considered as the preferred photo. */
		mediaKeys?: Array<string>;

		/** This message represents nutrition facts for a food dish. */
		nutritionFacts?: NutritionFacts;

		/** Serving portion size of a food dish. */
		portionSize?: PortionSize;

		/** Optional. Methods on how the food dish option is prepared. */
		preparationMethods?: Array<string>;

		/** Represents an amount of money with its currency type. */
		price?: Money;

		/** Optional. Number of people can be served by this food dish option. */
		servesNumPeople?: number | null;

		/** Optional. Spiciness level of the food dish. */
		spiciness?: FoodMenuItemAttributesSpiciness | null;
	}

	/** Attributes of a food item/dish. */
	export interface FoodMenuItemAttributesFormProperties {

		/** Optional. Number of people can be served by this food dish option. */
		servesNumPeople: FormControl<number | null | undefined>,

		/** Optional. Spiciness level of the food dish. */
		spiciness: FormControl<FoodMenuItemAttributesSpiciness | null | undefined>,
	}
	export function CreateFoodMenuItemAttributesFormGroup() {
		return new FormGroup<FoodMenuItemAttributesFormProperties>({
			servesNumPeople: new FormControl<number | null | undefined>(undefined),
			spiciness: new FormControl<FoodMenuItemAttributesSpiciness | null | undefined>(undefined),
		});

	}


	/** This message denotes an ingredient information of a food dish. */
	export interface Ingredient {

		/** Required. Labels to describe ingredient. Display names should be 140 characters or less, with descriptions 1,000 characters or less. At least one set of labels is required. */
		labels?: Array<MenuLabel>;
	}

	/** This message denotes an ingredient information of a food dish. */
	export interface IngredientFormProperties {
	}
	export function CreateIngredientFormGroup() {
		return new FormGroup<IngredientFormProperties>({
		});

	}


	/** This message represents nutrition facts for a food dish. */
	export interface NutritionFacts {

		/** This message denotes calories information with an upper bound and lower bound range. Lower amount must be specified. Both lower and upper amounts are non-negative numbers. */
		calories?: CaloriesFact;

		/** This message denotes nutrition information with an upper bound and lower bound range and can be represented by mass unit. Lower amount must be specified. Both lower and upper amounts are non-negative numbers. */
		cholesterol?: NutritionFact;

		/** This message denotes nutrition information with an upper bound and lower bound range and can be represented by mass unit. Lower amount must be specified. Both lower and upper amounts are non-negative numbers. */
		protein?: NutritionFact;

		/** This message denotes nutrition information with an upper bound and lower bound range and can be represented by mass unit. Lower amount must be specified. Both lower and upper amounts are non-negative numbers. */
		sodium?: NutritionFact;

		/** This message denotes nutrition information with an upper bound and lower bound range and can be represented by mass unit. Lower amount must be specified. Both lower and upper amounts are non-negative numbers. */
		totalCarbohydrate?: NutritionFact;

		/** This message denotes nutrition information with an upper bound and lower bound range and can be represented by mass unit. Lower amount must be specified. Both lower and upper amounts are non-negative numbers. */
		totalFat?: NutritionFact;
	}

	/** This message represents nutrition facts for a food dish. */
	export interface NutritionFactsFormProperties {
	}
	export function CreateNutritionFactsFormGroup() {
		return new FormGroup<NutritionFactsFormProperties>({
		});

	}


	/** This message denotes nutrition information with an upper bound and lower bound range and can be represented by mass unit. Lower amount must be specified. Both lower and upper amounts are non-negative numbers. */
	export interface NutritionFact {

		/** Required. Lower amount of nutrition */
		lowerAmount?: number | null;

		/** Required. Unit of the given nutrition information. */
		unit?: NutritionFactUnit | null;

		/** Optional. Upper amount of nutrition */
		upperAmount?: number | null;
	}

	/** This message denotes nutrition information with an upper bound and lower bound range and can be represented by mass unit. Lower amount must be specified. Both lower and upper amounts are non-negative numbers. */
	export interface NutritionFactFormProperties {

		/** Required. Lower amount of nutrition */
		lowerAmount: FormControl<number | null | undefined>,

		/** Required. Unit of the given nutrition information. */
		unit: FormControl<NutritionFactUnit | null | undefined>,

		/** Optional. Upper amount of nutrition */
		upperAmount: FormControl<number | null | undefined>,
	}
	export function CreateNutritionFactFormGroup() {
		return new FormGroup<NutritionFactFormProperties>({
			lowerAmount: new FormControl<number | null | undefined>(undefined),
			unit: new FormControl<NutritionFactUnit | null | undefined>(undefined),
			upperAmount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum NutritionFactUnit { MASS_UNIT_UNSPECIFIED = 'MASS_UNIT_UNSPECIFIED', GRAM = 'GRAM', MILLIGRAM = 'MILLIGRAM' }


	/** Serving portion size of a food dish. */
	export interface PortionSize {

		/** Required. Number of the portion. */
		quantity?: number | null;

		/** Required. The repeated name_info field is for the unit in multiple languages. */
		unit?: Array<MenuLabel>;
	}

	/** Serving portion size of a food dish. */
	export interface PortionSizeFormProperties {

		/** Required. Number of the portion. */
		quantity: FormControl<number | null | undefined>,
	}
	export function CreatePortionSizeFormGroup() {
		return new FormGroup<PortionSizeFormProperties>({
			quantity: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum FoodMenuItemAttributesSpiciness { SPICINESS_UNSPECIFIED = 'SPICINESS_UNSPECIFIED', MILD = 'MILD', MEDIUM = 'MEDIUM', HOT = 'HOT' }


	/** Option of an Item. It requires an explicit user selection. */
	export interface FoodMenuItemOption {

		/** Attributes of a food item/dish. */
		attributes?: FoodMenuItemAttributes;

		/** Required. Language tagged labels for this menu item option. E.g.: "beef pad thai", "veggie pad thai", "small pizza", "large pizza". Display names should be 140 characters or less, with descriptions 1,000 characters or less. At least one set of labels is required. */
		labels?: Array<MenuLabel>;
	}

	/** Option of an Item. It requires an explicit user selection. */
	export interface FoodMenuItemOptionFormProperties {
	}
	export function CreateFoodMenuItemOptionFormGroup() {
		return new FormGroup<FoodMenuItemOptionFormProperties>({
		});

	}


	/** Menus of a business that serve food dishes. */
	export interface FoodMenus {

		/** Optional. A collection of food menus. */
		menus?: Array<FoodMenu>;

		/** Required. Google identifier for this location in the form: `accounts/{account_id}/locations/{location_id}/foodMenus` */
		name?: string | null;
	}

	/** Menus of a business that serve food dishes. */
	export interface FoodMenusFormProperties {

		/** Required. Google identifier for this location in the form: `accounts/{account_id}/locations/{location_id}/foodMenus` */
		name: FormControl<string | null | undefined>,
	}
	export function CreateFoodMenusFormGroup() {
		return new FormGroup<FoodMenusFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a free-form service offered by the merchant. These are services that are not exposed as part of our structure service data. The merchant manually enters the names for of such services via a geomerchant surface. */
	export interface FreeFormServiceItem {

		/** Required. The `category_id` and `service_type_id` should match the possible combinations provided in the `Category` message. */
		categoryId?: string | null;

		/** Label to be used when displaying the price list, section, or item. */
		label?: Label;
	}

	/** Represents a free-form service offered by the merchant. These are services that are not exposed as part of our structure service data. The merchant manually enters the names for of such services via a geomerchant surface. */
	export interface FreeFormServiceItemFormProperties {

		/** Required. The `category_id` and `service_type_id` should match the possible combinations provided in the `Category` message. */
		categoryId: FormControl<string | null | undefined>,
	}
	export function CreateFreeFormServiceItemFormGroup() {
		return new FormGroup<FreeFormServiceItemFormProperties>({
			categoryId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for Accounts.GenerateAccountNumber. */
	export interface GenerateAccountNumberRequest {
	}

	/** Request message for Accounts.GenerateAccountNumber. */
	export interface GenerateAccountNumberRequestFormProperties {
	}
	export function CreateGenerateAccountNumberRequestFormGroup() {
		return new FormGroup<GenerateAccountNumberRequestFormProperties>({
		});

	}


	/** Response message for LodgingService.GetGoogleUpdatedLodging */
	export interface GetGoogleUpdatedLodgingResponse {

		/** Required. The fields in the Lodging that have been updated by Google. Repeated field items are not individually specified. */
		diffMask?: string | null;

		/** Lodging of a location that provides accomodations. */
		lodging?: Lodging;
	}

	/** Response message for LodgingService.GetGoogleUpdatedLodging */
	export interface GetGoogleUpdatedLodgingResponseFormProperties {

		/** Required. The fields in the Lodging that have been updated by Google. Repeated field items are not individually specified. */
		diffMask: FormControl<string | null | undefined>,
	}
	export function CreateGetGoogleUpdatedLodgingResponseFormGroup() {
		return new FormGroup<GetGoogleUpdatedLodgingResponseFormProperties>({
			diffMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Lodging of a location that provides accomodations. */
	export interface Lodging {

		/** Physical adaptations made to the property in consideration of varying levels of human physical ability. */
		accessibility?: Accessibility;

		/** Amenities and features related to leisure and play. */
		activities?: Activities;

		/** Features and available amenities in the guest unit. */
		allUnits?: GuestUnitFeatures;

		/** Features of the property of specific interest to the business traveler. */
		business?: Business;

		/** An individual room, such as kitchen, bathroom, bedroom, within a bookable guest unit. */
		commonLivingArea?: LivingArea;

		/** The ways in which the property provides guests with the ability to access the internet. */
		connectivity?: Connectivity;

		/** Services and amenities for families and young guests. */
		families?: Families;

		/** Meals, snacks, and beverages available at the property. */
		foodAndDrink?: FoodAndDrink;

		/** Individual GuestUnitTypes that are available in this Lodging. */
		guestUnits?: Array<GuestUnitType>;

		/** Health and safety measures implemented by the hotel during COVID-19. */
		healthAndSafety?: HealthAndSafety;

		/** Conveniences provided in guest units to facilitate an easier, more comfortable stay. */
		housekeeping?: Housekeeping;

		/** Metadata for the Lodging. */
		metadata?: LodgingMetadata;

		/** Required. Google identifier for this location in the form: `accounts/{account_id}/locations/{location_id}/lodging` */
		name?: string | null;

		/** Parking options at the property. */
		parking?: Parking;

		/** Policies regarding guest-owned animals. */
		pets?: Pets;

		/** Property rules that impact guests. */
		policies?: Policies;

		/** Swimming pool or recreational water facilities available at the hotel. */
		pools?: Pools;

		/** General factual information about the property's physical structure and important dates. */
		property?: Property;

		/** Conveniences or help provided by the property to facilitate an easier, more comfortable stay. */
		services?: Services;

		/** Features and available amenities in the guest unit. */
		someUnits?: GuestUnitFeatures;

		/** Vehicles or vehicular services facilitated or owned by the property. */
		transportation?: Transportation;

		/** Guest facilities at the property to promote or maintain health, beauty, and fitness. */
		wellness?: Wellness;
	}

	/** Lodging of a location that provides accomodations. */
	export interface LodgingFormProperties {

		/** Required. Google identifier for this location in the form: `accounts/{account_id}/locations/{location_id}/lodging` */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLodgingFormGroup() {
		return new FormGroup<LodgingFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Features and available amenities in the guest unit. */
	export interface GuestUnitFeatures {

		/** Bungalow or villa. An independent structure that is part of a hotel or resort that is rented to one party for a vacation stay. The hotel or resort may be completely comprised of bungalows or villas, or they may be one of several guestroom options. Guests in the bungalows or villas most often have the same, if not more, amenities and services offered to guests in other guestroom types. */
		bungalowOrVilla?: boolean | null;

		/** Bungalow or villa exception. */
		bungalowOrVillaException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Connecting unit available. A guestroom type that features access to an adjacent guestroom for the purpose of booking both rooms. Most often used by families who need more than one room to accommodate the number of people in their group. */
		connectingUnitAvailable?: boolean | null;

		/** Connecting unit available exception. */
		connectingUnitAvailableException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Executive floor. A floor of the hotel where the guestrooms are only bookable by members of the hotel's frequent guest membership program. Benefits of this room class include access to a designated lounge which may or may not feature free breakfast, cocktails or other perks specific to members of the program. */
		executiveFloor?: boolean | null;

		/** Executive floor exception. */
		executiveFloorException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Max adult occupants count. The total number of adult guests allowed to stay overnight in the guestroom. */
		maxAdultOccupantsCount?: number | null;

		/** Max adult occupants count exception. */
		maxAdultOccupantsCountException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Max child occupants count. The total number of children allowed to stay overnight in the room. */
		maxChildOccupantsCount?: number | null;

		/** Max child occupants count exception. */
		maxChildOccupantsCountException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Max occupants count. The total number of guests allowed to stay overnight in the guestroom. */
		maxOccupantsCount?: number | null;

		/** Max occupants count exception. */
		maxOccupantsCountException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Private home. A privately owned home (house, townhouse, apartment, cabin, bungalow etc) that may or not serve as the owner's residence, but is rented out in its entirety or by the room(s) to paying guest(s) for vacation stays. Not for lease-based, long-term residency. */
		privateHome?: boolean | null;

		/** Private home exception. */
		privateHomeException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Suite. A guestroom category that implies both a bedroom area and a separate living area. There may or may not be full walls and doors separating the two areas, but regardless, they are very distinct. Does not mean a couch or chair in a bedroom. */
		suite?: boolean | null;

		/** Suite exception. */
		suiteException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Tier. Classification of the unit based on available features/amenities. A non-standard tier is only permitted if at least one other unit type falls under the standard tier. */
		tier?: GuestUnitFeaturesTier | null;

		/** Tier exception. */
		tierException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** An individual room, such as kitchen, bathroom, bedroom, within a bookable guest unit. */
		totalLivingAreas?: LivingArea;

		/** Views available from the guest unit itself. */
		views?: ViewsFromUnit;
	}

	/** Features and available amenities in the guest unit. */
	export interface GuestUnitFeaturesFormProperties {

		/** Bungalow or villa. An independent structure that is part of a hotel or resort that is rented to one party for a vacation stay. The hotel or resort may be completely comprised of bungalows or villas, or they may be one of several guestroom options. Guests in the bungalows or villas most often have the same, if not more, amenities and services offered to guests in other guestroom types. */
		bungalowOrVilla: FormControl<boolean | null | undefined>,

		/** Bungalow or villa exception. */
		bungalowOrVillaException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Connecting unit available. A guestroom type that features access to an adjacent guestroom for the purpose of booking both rooms. Most often used by families who need more than one room to accommodate the number of people in their group. */
		connectingUnitAvailable: FormControl<boolean | null | undefined>,

		/** Connecting unit available exception. */
		connectingUnitAvailableException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Executive floor. A floor of the hotel where the guestrooms are only bookable by members of the hotel's frequent guest membership program. Benefits of this room class include access to a designated lounge which may or may not feature free breakfast, cocktails or other perks specific to members of the program. */
		executiveFloor: FormControl<boolean | null | undefined>,

		/** Executive floor exception. */
		executiveFloorException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Max adult occupants count. The total number of adult guests allowed to stay overnight in the guestroom. */
		maxAdultOccupantsCount: FormControl<number | null | undefined>,

		/** Max adult occupants count exception. */
		maxAdultOccupantsCountException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Max child occupants count. The total number of children allowed to stay overnight in the room. */
		maxChildOccupantsCount: FormControl<number | null | undefined>,

		/** Max child occupants count exception. */
		maxChildOccupantsCountException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Max occupants count. The total number of guests allowed to stay overnight in the guestroom. */
		maxOccupantsCount: FormControl<number | null | undefined>,

		/** Max occupants count exception. */
		maxOccupantsCountException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Private home. A privately owned home (house, townhouse, apartment, cabin, bungalow etc) that may or not serve as the owner's residence, but is rented out in its entirety or by the room(s) to paying guest(s) for vacation stays. Not for lease-based, long-term residency. */
		privateHome: FormControl<boolean | null | undefined>,

		/** Private home exception. */
		privateHomeException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Suite. A guestroom category that implies both a bedroom area and a separate living area. There may or may not be full walls and doors separating the two areas, but regardless, they are very distinct. Does not mean a couch or chair in a bedroom. */
		suite: FormControl<boolean | null | undefined>,

		/** Suite exception. */
		suiteException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Tier. Classification of the unit based on available features/amenities. A non-standard tier is only permitted if at least one other unit type falls under the standard tier. */
		tier: FormControl<GuestUnitFeaturesTier | null | undefined>,

		/** Tier exception. */
		tierException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,
	}
	export function CreateGuestUnitFeaturesFormGroup() {
		return new FormGroup<GuestUnitFeaturesFormProperties>({
			bungalowOrVilla: new FormControl<boolean | null | undefined>(undefined),
			bungalowOrVillaException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			connectingUnitAvailable: new FormControl<boolean | null | undefined>(undefined),
			connectingUnitAvailableException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			executiveFloor: new FormControl<boolean | null | undefined>(undefined),
			executiveFloorException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			maxAdultOccupantsCount: new FormControl<number | null | undefined>(undefined),
			maxAdultOccupantsCountException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			maxChildOccupantsCount: new FormControl<number | null | undefined>(undefined),
			maxChildOccupantsCountException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			maxOccupantsCount: new FormControl<number | null | undefined>(undefined),
			maxOccupantsCountException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			privateHome: new FormControl<boolean | null | undefined>(undefined),
			privateHomeException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			suite: new FormControl<boolean | null | undefined>(undefined),
			suiteException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			tier: new FormControl<GuestUnitFeaturesTier | null | undefined>(undefined),
			tierException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
		});

	}

	export enum GuestUnitFeaturesTier { UNIT_TIER_UNSPECIFIED = 'UNIT_TIER_UNSPECIFIED', STANDARD_UNIT = 'STANDARD_UNIT', DELUXE_UNIT = 'DELUXE_UNIT' }


	/** An individual room, such as kitchen, bathroom, bedroom, within a bookable guest unit. */
	export interface LivingArea {

		/** Accessibility features of the living area. */
		accessibility?: LivingAreaAccessibility;

		/** Information about eating features in the living area. */
		eating?: LivingAreaEating;

		/** Features in the living area. */
		features?: LivingAreaFeatures;

		/** Information about the layout of the living area. */
		layout?: LivingAreaLayout;

		/** Information about sleeping features in the living area. */
		sleeping?: LivingAreaSleeping;
	}

	/** An individual room, such as kitchen, bathroom, bedroom, within a bookable guest unit. */
	export interface LivingAreaFormProperties {
	}
	export function CreateLivingAreaFormGroup() {
		return new FormGroup<LivingAreaFormProperties>({
		});

	}


	/** Accessibility features of the living area. */
	export interface LivingAreaAccessibility {

		/** ADA compliant unit. A guestroom designed to accommodate the physical challenges of a guest with mobility and/or auditory and/or visual issues, as determined by legislative policy. Usually features enlarged doorways, roll-in showers with seats, bathroom grab bars, and communication equipment for the hearing and sight challenged. */
		adaCompliantUnit?: boolean | null;

		/** ADA compliant unit exception. */
		adaCompliantUnitException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Hearing-accessible doorbell. A visual indicator(s) of a knock or ring at the door. */
		hearingAccessibleDoorbell?: boolean | null;

		/** Hearing-accessible doorbell exception. */
		hearingAccessibleDoorbellException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Hearing-accessible fire alarm. A device that gives warning of a fire through flashing lights. */
		hearingAccessibleFireAlarm?: boolean | null;

		/** Hearing-accessible fire alarm exception. */
		hearingAccessibleFireAlarmException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Hearing-accessible unit. A guestroom designed to accommodate the physical challenges of a guest with auditory issues. */
		hearingAccessibleUnit?: boolean | null;

		/** Hearing-accessible unit exception. */
		hearingAccessibleUnitException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Mobility-accessible bathtub. A bathtub that accomodates the physically challenged with additional railings or hand grips, a transfer seat or lift, and/or a door to enable walking into the tub. */
		mobilityAccessibleBathtub?: boolean | null;

		/** Mobility-accessible bathtub exception. */
		mobilityAccessibleBathtubException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Mobility-accessible shower. A shower with an enlarged door or access point to accommodate a wheelchair or a waterproof seat for the physically challenged. */
		mobilityAccessibleShower?: boolean | null;

		/** Mobility-accessible shower exception. */
		mobilityAccessibleShowerException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Mobility-accessible toilet. A toilet with a higher seat, grab bars, and/or a larger area around it to accommodate the physically challenged. */
		mobilityAccessibleToilet?: boolean | null;

		/** Mobility-accessible toilet exception. */
		mobilityAccessibleToiletException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Mobility-accessible unit. A guestroom designed to accommodate the physical challenges of a guest with mobility and/or auditory and/or visual issues. Usually features enlarged doorways, roll-in showers with seats, bathroom grab bars, and communication equipment for the hearing and sight challenged. */
		mobilityAccessibleUnit?: boolean | null;

		/** Mobility-accessible unit exception. */
		mobilityAccessibleUnitException?: AccessibilityMobilityAccessibleElevatorException | null;
	}

	/** Accessibility features of the living area. */
	export interface LivingAreaAccessibilityFormProperties {

		/** ADA compliant unit. A guestroom designed to accommodate the physical challenges of a guest with mobility and/or auditory and/or visual issues, as determined by legislative policy. Usually features enlarged doorways, roll-in showers with seats, bathroom grab bars, and communication equipment for the hearing and sight challenged. */
		adaCompliantUnit: FormControl<boolean | null | undefined>,

		/** ADA compliant unit exception. */
		adaCompliantUnitException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Hearing-accessible doorbell. A visual indicator(s) of a knock or ring at the door. */
		hearingAccessibleDoorbell: FormControl<boolean | null | undefined>,

		/** Hearing-accessible doorbell exception. */
		hearingAccessibleDoorbellException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Hearing-accessible fire alarm. A device that gives warning of a fire through flashing lights. */
		hearingAccessibleFireAlarm: FormControl<boolean | null | undefined>,

		/** Hearing-accessible fire alarm exception. */
		hearingAccessibleFireAlarmException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Hearing-accessible unit. A guestroom designed to accommodate the physical challenges of a guest with auditory issues. */
		hearingAccessibleUnit: FormControl<boolean | null | undefined>,

		/** Hearing-accessible unit exception. */
		hearingAccessibleUnitException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Mobility-accessible bathtub. A bathtub that accomodates the physically challenged with additional railings or hand grips, a transfer seat or lift, and/or a door to enable walking into the tub. */
		mobilityAccessibleBathtub: FormControl<boolean | null | undefined>,

		/** Mobility-accessible bathtub exception. */
		mobilityAccessibleBathtubException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Mobility-accessible shower. A shower with an enlarged door or access point to accommodate a wheelchair or a waterproof seat for the physically challenged. */
		mobilityAccessibleShower: FormControl<boolean | null | undefined>,

		/** Mobility-accessible shower exception. */
		mobilityAccessibleShowerException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Mobility-accessible toilet. A toilet with a higher seat, grab bars, and/or a larger area around it to accommodate the physically challenged. */
		mobilityAccessibleToilet: FormControl<boolean | null | undefined>,

		/** Mobility-accessible toilet exception. */
		mobilityAccessibleToiletException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Mobility-accessible unit. A guestroom designed to accommodate the physical challenges of a guest with mobility and/or auditory and/or visual issues. Usually features enlarged doorways, roll-in showers with seats, bathroom grab bars, and communication equipment for the hearing and sight challenged. */
		mobilityAccessibleUnit: FormControl<boolean | null | undefined>,

		/** Mobility-accessible unit exception. */
		mobilityAccessibleUnitException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,
	}
	export function CreateLivingAreaAccessibilityFormGroup() {
		return new FormGroup<LivingAreaAccessibilityFormProperties>({
			adaCompliantUnit: new FormControl<boolean | null | undefined>(undefined),
			adaCompliantUnitException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			hearingAccessibleDoorbell: new FormControl<boolean | null | undefined>(undefined),
			hearingAccessibleDoorbellException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			hearingAccessibleFireAlarm: new FormControl<boolean | null | undefined>(undefined),
			hearingAccessibleFireAlarmException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			hearingAccessibleUnit: new FormControl<boolean | null | undefined>(undefined),
			hearingAccessibleUnitException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			mobilityAccessibleBathtub: new FormControl<boolean | null | undefined>(undefined),
			mobilityAccessibleBathtubException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			mobilityAccessibleShower: new FormControl<boolean | null | undefined>(undefined),
			mobilityAccessibleShowerException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			mobilityAccessibleToilet: new FormControl<boolean | null | undefined>(undefined),
			mobilityAccessibleToiletException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			mobilityAccessibleUnit: new FormControl<boolean | null | undefined>(undefined),
			mobilityAccessibleUnitException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
		});

	}


	/** Information about eating features in the living area. */
	export interface LivingAreaEating {

		/** Coffee maker. An electric appliance that brews coffee by heating and forcing water through ground coffee. */
		coffeeMaker?: boolean | null;

		/** Coffee maker exception. */
		coffeeMakerException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Cookware. Kitchen pots, pans and utensils used in connection with the preparation of food. */
		cookware?: boolean | null;

		/** Cookware exception. */
		cookwareException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Dishwasher. A counter-height electrical cabinet containing racks for dirty dishware, cookware and cutlery, and a dispenser for soap built into the pull-down door. The cabinet is attached to the plumbing system to facilitate the automatic cleaning of its contents. */
		dishwasher?: boolean | null;

		/** Dishwasher exception. */
		dishwasherException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Indoor grill. Metal grates built into an indoor cooktop on which food is cooked over an open flame or electric heat source. */
		indoorGrill?: boolean | null;

		/** Indoor grill exception. */
		indoorGrillException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Kettle. A covered container with a handle and a spout used for boiling water. */
		kettle?: boolean | null;

		/** Kettle exception. */
		kettleException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Kitchen available. An area of the guestroom designated for the preparation and storage of food via the presence of a refrigerator, cook top, oven and sink, as well as cutlery, dishes and cookware. Usually includes small appliances such a coffee maker and a microwave. May or may not include an automatic dishwasher. */
		kitchenAvailable?: boolean | null;

		/** Kitchen available exception. */
		kitchenAvailableException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Microwave. An electric oven that quickly cooks and heats food by microwave energy. Smaller than a standing or wall mounted oven. Usually placed on a kitchen counter, a shelf or tabletop or mounted above a cooktop. */
		microwave?: boolean | null;

		/** Microwave exception. */
		microwaveException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Minibar. A small refrigerated cabinet in the guestroom containing bottles/cans of soft drinks, mini bottles of alcohol, and snacks. The items are most commonly available for a fee. */
		minibar?: boolean | null;

		/** Minibar exception. */
		minibarException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Outdoor grill. Metal grates on which food is cooked over an open flame or electric heat source. Part of an outdoor apparatus that supports the grates. Also known as barbecue grill or barbecue. */
		outdoorGrill?: boolean | null;

		/** Outdoor grill exception. */
		outdoorGrillException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Oven. A temperature controlled, heated metal cabinet powered by gas or electricity in which food is placed for the purpose of cooking or reheating. */
		oven?: boolean | null;

		/** Oven exception. */
		ovenException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Refrigerator. A large, climate-controlled electrical cabinet with vertical doors. Built for the purpose of chilling and storing perishable foods. */
		refrigerator?: boolean | null;

		/** Refrigerator exception. */
		refrigeratorException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Sink. A basin with a faucet attached to a water source and used for the purpose of washing and rinsing. */
		sink?: boolean | null;

		/** Sink exception. */
		sinkException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Snackbar. A small cabinet in the guestroom containing snacks. The items are most commonly available for a fee. */
		snackbar?: boolean | null;

		/** Snackbar exception. */
		snackbarException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Stove. A kitchen appliance powered by gas or electricity for the purpose of creating a flame or hot surface on which pots of food can be cooked. Also known as cooktop or hob. */
		stove?: boolean | null;

		/** Stove exception. */
		stoveException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Tea station. A small area with the supplies needed to heat water and make tea. */
		teaStation?: boolean | null;

		/** Tea station exception. */
		teaStationException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Toaster. A small, temperature controlled electric appliance with rectangular slots at the top that are lined with heated coils for the purpose of browning slices of bread products. */
		toaster?: boolean | null;

		/** Toaster exception. */
		toasterException?: AccessibilityMobilityAccessibleElevatorException | null;
	}

	/** Information about eating features in the living area. */
	export interface LivingAreaEatingFormProperties {

		/** Coffee maker. An electric appliance that brews coffee by heating and forcing water through ground coffee. */
		coffeeMaker: FormControl<boolean | null | undefined>,

		/** Coffee maker exception. */
		coffeeMakerException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Cookware. Kitchen pots, pans and utensils used in connection with the preparation of food. */
		cookware: FormControl<boolean | null | undefined>,

		/** Cookware exception. */
		cookwareException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Dishwasher. A counter-height electrical cabinet containing racks for dirty dishware, cookware and cutlery, and a dispenser for soap built into the pull-down door. The cabinet is attached to the plumbing system to facilitate the automatic cleaning of its contents. */
		dishwasher: FormControl<boolean | null | undefined>,

		/** Dishwasher exception. */
		dishwasherException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Indoor grill. Metal grates built into an indoor cooktop on which food is cooked over an open flame or electric heat source. */
		indoorGrill: FormControl<boolean | null | undefined>,

		/** Indoor grill exception. */
		indoorGrillException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Kettle. A covered container with a handle and a spout used for boiling water. */
		kettle: FormControl<boolean | null | undefined>,

		/** Kettle exception. */
		kettleException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Kitchen available. An area of the guestroom designated for the preparation and storage of food via the presence of a refrigerator, cook top, oven and sink, as well as cutlery, dishes and cookware. Usually includes small appliances such a coffee maker and a microwave. May or may not include an automatic dishwasher. */
		kitchenAvailable: FormControl<boolean | null | undefined>,

		/** Kitchen available exception. */
		kitchenAvailableException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Microwave. An electric oven that quickly cooks and heats food by microwave energy. Smaller than a standing or wall mounted oven. Usually placed on a kitchen counter, a shelf or tabletop or mounted above a cooktop. */
		microwave: FormControl<boolean | null | undefined>,

		/** Microwave exception. */
		microwaveException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Minibar. A small refrigerated cabinet in the guestroom containing bottles/cans of soft drinks, mini bottles of alcohol, and snacks. The items are most commonly available for a fee. */
		minibar: FormControl<boolean | null | undefined>,

		/** Minibar exception. */
		minibarException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Outdoor grill. Metal grates on which food is cooked over an open flame or electric heat source. Part of an outdoor apparatus that supports the grates. Also known as barbecue grill or barbecue. */
		outdoorGrill: FormControl<boolean | null | undefined>,

		/** Outdoor grill exception. */
		outdoorGrillException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Oven. A temperature controlled, heated metal cabinet powered by gas or electricity in which food is placed for the purpose of cooking or reheating. */
		oven: FormControl<boolean | null | undefined>,

		/** Oven exception. */
		ovenException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Refrigerator. A large, climate-controlled electrical cabinet with vertical doors. Built for the purpose of chilling and storing perishable foods. */
		refrigerator: FormControl<boolean | null | undefined>,

		/** Refrigerator exception. */
		refrigeratorException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Sink. A basin with a faucet attached to a water source and used for the purpose of washing and rinsing. */
		sink: FormControl<boolean | null | undefined>,

		/** Sink exception. */
		sinkException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Snackbar. A small cabinet in the guestroom containing snacks. The items are most commonly available for a fee. */
		snackbar: FormControl<boolean | null | undefined>,

		/** Snackbar exception. */
		snackbarException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Stove. A kitchen appliance powered by gas or electricity for the purpose of creating a flame or hot surface on which pots of food can be cooked. Also known as cooktop or hob. */
		stove: FormControl<boolean | null | undefined>,

		/** Stove exception. */
		stoveException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Tea station. A small area with the supplies needed to heat water and make tea. */
		teaStation: FormControl<boolean | null | undefined>,

		/** Tea station exception. */
		teaStationException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Toaster. A small, temperature controlled electric appliance with rectangular slots at the top that are lined with heated coils for the purpose of browning slices of bread products. */
		toaster: FormControl<boolean | null | undefined>,

		/** Toaster exception. */
		toasterException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,
	}
	export function CreateLivingAreaEatingFormGroup() {
		return new FormGroup<LivingAreaEatingFormProperties>({
			coffeeMaker: new FormControl<boolean | null | undefined>(undefined),
			coffeeMakerException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			cookware: new FormControl<boolean | null | undefined>(undefined),
			cookwareException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			dishwasher: new FormControl<boolean | null | undefined>(undefined),
			dishwasherException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			indoorGrill: new FormControl<boolean | null | undefined>(undefined),
			indoorGrillException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			kettle: new FormControl<boolean | null | undefined>(undefined),
			kettleException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			kitchenAvailable: new FormControl<boolean | null | undefined>(undefined),
			kitchenAvailableException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			microwave: new FormControl<boolean | null | undefined>(undefined),
			microwaveException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			minibar: new FormControl<boolean | null | undefined>(undefined),
			minibarException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			outdoorGrill: new FormControl<boolean | null | undefined>(undefined),
			outdoorGrillException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			oven: new FormControl<boolean | null | undefined>(undefined),
			ovenException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			refrigerator: new FormControl<boolean | null | undefined>(undefined),
			refrigeratorException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			sink: new FormControl<boolean | null | undefined>(undefined),
			sinkException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			snackbar: new FormControl<boolean | null | undefined>(undefined),
			snackbarException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			stove: new FormControl<boolean | null | undefined>(undefined),
			stoveException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			teaStation: new FormControl<boolean | null | undefined>(undefined),
			teaStationException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			toaster: new FormControl<boolean | null | undefined>(undefined),
			toasterException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
		});

	}


	/** Features in the living area. */
	export interface LivingAreaFeatures {

		/** Air conditioning. An electrical machine used to cool the temperature of the guestroom. */
		airConditioning?: boolean | null;

		/** Air conditioning exception. */
		airConditioningException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Bathtub. A fixed plumbing feature set on the floor and consisting of a large container that accommodates the body of an adult for the purpose of seated bathing. Includes knobs or fixtures to control the temperature of the water, a faucet through which the water flows, and a drain that can be closed for filling and opened for draining. */
		bathtub?: boolean | null;

		/** Bathtub exception. */
		bathtubException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Bidet. A plumbing fixture attached to a toilet or a low, fixed sink designed for the purpose of washing after toilet use. */
		bidet?: boolean | null;

		/** Bidet exception. */
		bidetException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Dryer. An electrical machine designed to dry clothing. */
		dryer?: boolean | null;

		/** Dryer exception. */
		dryerException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Electronic room key. A card coded by the check-in computer that is read by the lock on the hotel guestroom door to allow for entry. */
		electronicRoomKey?: boolean | null;

		/** Electronic room key exception. */
		electronicRoomKeyException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Fireplace. A framed opening (aka hearth) at the base of a chimney in which logs or an electrical fire feature are burned to provide a relaxing ambiance or to heat the room. Often made of bricks or stone. */
		fireplace?: boolean | null;

		/** Fireplace exception. */
		fireplaceException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Hairdryer. A handheld electric appliance that blows temperature-controlled air for the purpose of drying wet hair. Can be mounted to a bathroom wall or a freestanding device stored in the guestroom's bathroom or closet. */
		hairdryer?: boolean | null;

		/** Hairdryer exception. */
		hairdryerException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Heating. An electrical machine used to warm the temperature of the guestroom. */
		heating?: boolean | null;

		/** Heating exception. */
		heatingException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** In-unit safe. A strong fireproof cabinet with a programmable lock, used for the protected storage of valuables in a guestroom. Often built into a closet. */
		inunitSafe?: boolean | null;

		/** In-unit safe exception. */
		inunitSafeException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** In-unit Wifi available. Guests can wirelessly connect to the Internet in the guestroom. Can be free or for a fee. */
		inunitWifiAvailable?: boolean | null;

		/** In-unit Wifi available exception. */
		inunitWifiAvailableException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Ironing equipment. A device, usually with a flat metal base, that is heated to smooth, finish, or press clothes and a flat, padded, cloth-covered surface on which the clothes are worked. */
		ironingEquipment?: boolean | null;

		/** Ironing equipment exception. */
		ironingEquipmentException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Pay per view movies. Televisions with channels that offer films that can be viewed for a fee, and have an interface to allow the viewer to accept the terms and approve payment. */
		payPerViewMovies?: boolean | null;

		/** Pay per view movies exception. */
		payPerViewMoviesException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Private bathroom. A bathroom designated for the express use of the guests staying in a specific guestroom. */
		privateBathroom?: boolean | null;

		/** Private bathroom exception. */
		privateBathroomException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Shower. A fixed plumbing fixture for standing bathing that features a tall spray spout or faucet through which water flows, a knob or knobs that control the water's temperature, and a drain in the floor. */
		shower?: boolean | null;

		/** Shower exception. */
		showerException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Toilet. A fixed bathroom feature connected to a sewer or septic system and consisting of a water-flushed bowl with a seat, as well as a device that elicites the water-flushing action. Used for the process and disposal of human waste. */
		toilet?: boolean | null;

		/** Toilet exception. */
		toiletException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** TV. A television is available in the guestroom. */
		tv?: boolean | null;

		/** TV casting. A television equipped with a device through which the video entertainment accessed on a personal computer, phone or tablet can be wirelessly delivered to and viewed on the guestroom's television. */
		tvCasting?: boolean | null;

		/** TV exception. */
		tvCastingException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** TV exception. */
		tvException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** TV streaming. Televisions that embed a range of web-based apps to allow for watching media from those apps. */
		tvStreaming?: boolean | null;

		/** TV streaming exception. */
		tvStreamingException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Universal power adapters. A power supply for electronic devices which plugs into a wall for the purpose of converting AC to a single DC voltage. Also know as AC adapter or charger. */
		universalPowerAdapters?: boolean | null;

		/** Universal power adapters exception. */
		universalPowerAdaptersException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Washer. An electrical machine connected to a running water source designed to launder clothing. */
		washer?: boolean | null;

		/** Washer exception. */
		washerException?: AccessibilityMobilityAccessibleElevatorException | null;
	}

	/** Features in the living area. */
	export interface LivingAreaFeaturesFormProperties {

		/** Air conditioning. An electrical machine used to cool the temperature of the guestroom. */
		airConditioning: FormControl<boolean | null | undefined>,

		/** Air conditioning exception. */
		airConditioningException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Bathtub. A fixed plumbing feature set on the floor and consisting of a large container that accommodates the body of an adult for the purpose of seated bathing. Includes knobs or fixtures to control the temperature of the water, a faucet through which the water flows, and a drain that can be closed for filling and opened for draining. */
		bathtub: FormControl<boolean | null | undefined>,

		/** Bathtub exception. */
		bathtubException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Bidet. A plumbing fixture attached to a toilet or a low, fixed sink designed for the purpose of washing after toilet use. */
		bidet: FormControl<boolean | null | undefined>,

		/** Bidet exception. */
		bidetException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Dryer. An electrical machine designed to dry clothing. */
		dryer: FormControl<boolean | null | undefined>,

		/** Dryer exception. */
		dryerException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Electronic room key. A card coded by the check-in computer that is read by the lock on the hotel guestroom door to allow for entry. */
		electronicRoomKey: FormControl<boolean | null | undefined>,

		/** Electronic room key exception. */
		electronicRoomKeyException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Fireplace. A framed opening (aka hearth) at the base of a chimney in which logs or an electrical fire feature are burned to provide a relaxing ambiance or to heat the room. Often made of bricks or stone. */
		fireplace: FormControl<boolean | null | undefined>,

		/** Fireplace exception. */
		fireplaceException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Hairdryer. A handheld electric appliance that blows temperature-controlled air for the purpose of drying wet hair. Can be mounted to a bathroom wall or a freestanding device stored in the guestroom's bathroom or closet. */
		hairdryer: FormControl<boolean | null | undefined>,

		/** Hairdryer exception. */
		hairdryerException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Heating. An electrical machine used to warm the temperature of the guestroom. */
		heating: FormControl<boolean | null | undefined>,

		/** Heating exception. */
		heatingException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** In-unit safe. A strong fireproof cabinet with a programmable lock, used for the protected storage of valuables in a guestroom. Often built into a closet. */
		inunitSafe: FormControl<boolean | null | undefined>,

		/** In-unit safe exception. */
		inunitSafeException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** In-unit Wifi available. Guests can wirelessly connect to the Internet in the guestroom. Can be free or for a fee. */
		inunitWifiAvailable: FormControl<boolean | null | undefined>,

		/** In-unit Wifi available exception. */
		inunitWifiAvailableException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Ironing equipment. A device, usually with a flat metal base, that is heated to smooth, finish, or press clothes and a flat, padded, cloth-covered surface on which the clothes are worked. */
		ironingEquipment: FormControl<boolean | null | undefined>,

		/** Ironing equipment exception. */
		ironingEquipmentException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Pay per view movies. Televisions with channels that offer films that can be viewed for a fee, and have an interface to allow the viewer to accept the terms and approve payment. */
		payPerViewMovies: FormControl<boolean | null | undefined>,

		/** Pay per view movies exception. */
		payPerViewMoviesException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Private bathroom. A bathroom designated for the express use of the guests staying in a specific guestroom. */
		privateBathroom: FormControl<boolean | null | undefined>,

		/** Private bathroom exception. */
		privateBathroomException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Shower. A fixed plumbing fixture for standing bathing that features a tall spray spout or faucet through which water flows, a knob or knobs that control the water's temperature, and a drain in the floor. */
		shower: FormControl<boolean | null | undefined>,

		/** Shower exception. */
		showerException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Toilet. A fixed bathroom feature connected to a sewer or septic system and consisting of a water-flushed bowl with a seat, as well as a device that elicites the water-flushing action. Used for the process and disposal of human waste. */
		toilet: FormControl<boolean | null | undefined>,

		/** Toilet exception. */
		toiletException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** TV. A television is available in the guestroom. */
		tv: FormControl<boolean | null | undefined>,

		/** TV casting. A television equipped with a device through which the video entertainment accessed on a personal computer, phone or tablet can be wirelessly delivered to and viewed on the guestroom's television. */
		tvCasting: FormControl<boolean | null | undefined>,

		/** TV exception. */
		tvCastingException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** TV exception. */
		tvException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** TV streaming. Televisions that embed a range of web-based apps to allow for watching media from those apps. */
		tvStreaming: FormControl<boolean | null | undefined>,

		/** TV streaming exception. */
		tvStreamingException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Universal power adapters. A power supply for electronic devices which plugs into a wall for the purpose of converting AC to a single DC voltage. Also know as AC adapter or charger. */
		universalPowerAdapters: FormControl<boolean | null | undefined>,

		/** Universal power adapters exception. */
		universalPowerAdaptersException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Washer. An electrical machine connected to a running water source designed to launder clothing. */
		washer: FormControl<boolean | null | undefined>,

		/** Washer exception. */
		washerException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,
	}
	export function CreateLivingAreaFeaturesFormGroup() {
		return new FormGroup<LivingAreaFeaturesFormProperties>({
			airConditioning: new FormControl<boolean | null | undefined>(undefined),
			airConditioningException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			bathtub: new FormControl<boolean | null | undefined>(undefined),
			bathtubException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			bidet: new FormControl<boolean | null | undefined>(undefined),
			bidetException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			dryer: new FormControl<boolean | null | undefined>(undefined),
			dryerException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			electronicRoomKey: new FormControl<boolean | null | undefined>(undefined),
			electronicRoomKeyException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			fireplace: new FormControl<boolean | null | undefined>(undefined),
			fireplaceException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			hairdryer: new FormControl<boolean | null | undefined>(undefined),
			hairdryerException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			heating: new FormControl<boolean | null | undefined>(undefined),
			heatingException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			inunitSafe: new FormControl<boolean | null | undefined>(undefined),
			inunitSafeException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			inunitWifiAvailable: new FormControl<boolean | null | undefined>(undefined),
			inunitWifiAvailableException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			ironingEquipment: new FormControl<boolean | null | undefined>(undefined),
			ironingEquipmentException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			payPerViewMovies: new FormControl<boolean | null | undefined>(undefined),
			payPerViewMoviesException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			privateBathroom: new FormControl<boolean | null | undefined>(undefined),
			privateBathroomException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			shower: new FormControl<boolean | null | undefined>(undefined),
			showerException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			toilet: new FormControl<boolean | null | undefined>(undefined),
			toiletException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			tv: new FormControl<boolean | null | undefined>(undefined),
			tvCasting: new FormControl<boolean | null | undefined>(undefined),
			tvCastingException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			tvException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			tvStreaming: new FormControl<boolean | null | undefined>(undefined),
			tvStreamingException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			universalPowerAdapters: new FormControl<boolean | null | undefined>(undefined),
			universalPowerAdaptersException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			washer: new FormControl<boolean | null | undefined>(undefined),
			washerException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
		});

	}


	/** Information about the layout of the living area. */
	export interface LivingAreaLayout {

		/** Balcony. An outdoor platform attached to a building and surrounded by a short wall, fence or other safety railing. The balcony is accessed through a door in a guestroom or suite and is for use by the guest staying in that room. May or may not include seating or outdoor furniture. Is not located on the ground floor. Also lanai. */
		balcony?: boolean | null;

		/** Balcony exception. */
		balconyException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Living area sq meters. The measurement in meters of the area of a guestroom's living space. */
		livingAreaSqMeters?: number | null;

		/** Living area sq meters exception. */
		livingAreaSqMetersException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Loft. A three-walled upper area accessed by stairs or a ladder that overlooks the lower area of a room. */
		loft?: boolean | null;

		/** Loft exception. */
		loftException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Non smoking. A guestroom in which the smoking of cigarettes, cigars and pipes is prohibited. */
		nonSmoking?: boolean | null;

		/** Non smoking exception. */
		nonSmokingException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Patio. A paved, outdoor area with seating attached to and accessed through a ground-floor guestroom for use by the occupants of the guestroom. */
		patio?: boolean | null;

		/** Patio exception. */
		patioException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Stairs. There are steps leading from one level or story to another in the unit. */
		stairs?: boolean | null;

		/** Stairs exception. */
		stairsException?: AccessibilityMobilityAccessibleElevatorException | null;
	}

	/** Information about the layout of the living area. */
	export interface LivingAreaLayoutFormProperties {

		/** Balcony. An outdoor platform attached to a building and surrounded by a short wall, fence or other safety railing. The balcony is accessed through a door in a guestroom or suite and is for use by the guest staying in that room. May or may not include seating or outdoor furniture. Is not located on the ground floor. Also lanai. */
		balcony: FormControl<boolean | null | undefined>,

		/** Balcony exception. */
		balconyException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Living area sq meters. The measurement in meters of the area of a guestroom's living space. */
		livingAreaSqMeters: FormControl<number | null | undefined>,

		/** Living area sq meters exception. */
		livingAreaSqMetersException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Loft. A three-walled upper area accessed by stairs or a ladder that overlooks the lower area of a room. */
		loft: FormControl<boolean | null | undefined>,

		/** Loft exception. */
		loftException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Non smoking. A guestroom in which the smoking of cigarettes, cigars and pipes is prohibited. */
		nonSmoking: FormControl<boolean | null | undefined>,

		/** Non smoking exception. */
		nonSmokingException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Patio. A paved, outdoor area with seating attached to and accessed through a ground-floor guestroom for use by the occupants of the guestroom. */
		patio: FormControl<boolean | null | undefined>,

		/** Patio exception. */
		patioException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Stairs. There are steps leading from one level or story to another in the unit. */
		stairs: FormControl<boolean | null | undefined>,

		/** Stairs exception. */
		stairsException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,
	}
	export function CreateLivingAreaLayoutFormGroup() {
		return new FormGroup<LivingAreaLayoutFormProperties>({
			balcony: new FormControl<boolean | null | undefined>(undefined),
			balconyException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			livingAreaSqMeters: new FormControl<number | null | undefined>(undefined),
			livingAreaSqMetersException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			loft: new FormControl<boolean | null | undefined>(undefined),
			loftException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			nonSmoking: new FormControl<boolean | null | undefined>(undefined),
			nonSmokingException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			patio: new FormControl<boolean | null | undefined>(undefined),
			patioException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			stairs: new FormControl<boolean | null | undefined>(undefined),
			stairsException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
		});

	}


	/** Information about sleeping features in the living area. */
	export interface LivingAreaSleeping {

		/** Beds count. The number of permanent beds present in a guestroom. Does not include rollaway beds, cribs or sofabeds. */
		bedsCount?: number | null;

		/** Beds count exception. */
		bedsCountException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Bunk beds count. The number of furniture pieces in which one framed mattress is fixed directly above another by means of a physical frame. This allows one person(s) to sleep in the bottom bunk and one person(s) to sleep in the top bunk. Also known as double decker bed. */
		bunkBedsCount?: number | null;

		/** Bunk beds count exception. */
		bunkBedsCountException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Cribs count. The number of small beds for an infant or toddler that the guestroom can obtain. The bed is surrounded by a high railing to prevent the child from falling or climbing out of the bed */
		cribsCount?: number | null;

		/** Cribs count exception. */
		cribsCountException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Double beds count. The number of medium beds measuring 53"W x 75"L (135cm x 191cm). Also known as full size bed. */
		doubleBedsCount?: number | null;

		/** Double beds count exception. */
		doubleBedsCountException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Feather pillows. The option for guests to obtain bed pillows that are stuffed with the feathers and down of ducks or geese. */
		featherPillows?: boolean | null;

		/** Feather pillows exception. */
		featherPillowsException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Hypoallergenic bedding. Bedding such as linens, pillows, mattress covers and/or mattresses that are made of materials known to be resistant to allergens such as mold, dust and dander. */
		hypoallergenicBedding?: boolean | null;

		/** Hypoallergenic bedding exception. */
		hypoallergenicBeddingException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** King beds count. The number of large beds measuring 76"W x 80"L (193cm x 102cm). Most often meant to accompany two people. Includes California king and super king. */
		kingBedsCount?: number | null;

		/** King beds count exception. */
		kingBedsCountException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Memory foam pillows. The option for guests to obtain bed pillows that are stuffed with a man-made foam that responds to body heat by conforming to the body closely, and then recovers its shape when the pillow cools down. */
		memoryFoamPillows?: boolean | null;

		/** Memory foam pillows exception. */
		memoryFoamPillowsException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Other beds count. The number of beds that are not standard mattress and boxspring setups such as Japanese tatami mats, trundle beds, air mattresses and cots. */
		otherBedsCount?: number | null;

		/** Other beds count exception. */
		otherBedsCountException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Queen beds count. The number of medium-large beds measuring 60"W x 80"L (152cm x 102cm). */
		queenBedsCount?: number | null;

		/** Queen beds count exception. */
		queenBedsCountException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Roll away beds count. The number of mattresses on wheeled frames that can be folded in half and rolled away for easy storage that the guestroom can obtain upon request. */
		rollAwayBedsCount?: number | null;

		/** Roll away beds count exception. */
		rollAwayBedsCountException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Single or twin count beds. The number of smaller beds measuring 38"W x 75"L (97cm x 191cm) that can accommodate one adult. */
		singleOrTwinBedsCount?: number | null;

		/** Single or twin beds count exception. */
		singleOrTwinBedsCountException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Sofa beds count. The number of specially designed sofas that can be made to serve as a bed by lowering its hinged upholstered back to horizontal position or by pulling out a concealed mattress. */
		sofaBedsCount?: number | null;

		/** Sofa beds count exception. */
		sofaBedsCountException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Synthetic pillows. The option for guests to obtain bed pillows stuffed with polyester material crafted to reproduce the feel of a pillow stuffed with down and feathers. */
		syntheticPillows?: boolean | null;

		/** Synthetic pillows exception. */
		syntheticPillowsException?: AccessibilityMobilityAccessibleElevatorException | null;
	}

	/** Information about sleeping features in the living area. */
	export interface LivingAreaSleepingFormProperties {

		/** Beds count. The number of permanent beds present in a guestroom. Does not include rollaway beds, cribs or sofabeds. */
		bedsCount: FormControl<number | null | undefined>,

		/** Beds count exception. */
		bedsCountException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Bunk beds count. The number of furniture pieces in which one framed mattress is fixed directly above another by means of a physical frame. This allows one person(s) to sleep in the bottom bunk and one person(s) to sleep in the top bunk. Also known as double decker bed. */
		bunkBedsCount: FormControl<number | null | undefined>,

		/** Bunk beds count exception. */
		bunkBedsCountException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Cribs count. The number of small beds for an infant or toddler that the guestroom can obtain. The bed is surrounded by a high railing to prevent the child from falling or climbing out of the bed */
		cribsCount: FormControl<number | null | undefined>,

		/** Cribs count exception. */
		cribsCountException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Double beds count. The number of medium beds measuring 53"W x 75"L (135cm x 191cm). Also known as full size bed. */
		doubleBedsCount: FormControl<number | null | undefined>,

		/** Double beds count exception. */
		doubleBedsCountException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Feather pillows. The option for guests to obtain bed pillows that are stuffed with the feathers and down of ducks or geese. */
		featherPillows: FormControl<boolean | null | undefined>,

		/** Feather pillows exception. */
		featherPillowsException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Hypoallergenic bedding. Bedding such as linens, pillows, mattress covers and/or mattresses that are made of materials known to be resistant to allergens such as mold, dust and dander. */
		hypoallergenicBedding: FormControl<boolean | null | undefined>,

		/** Hypoallergenic bedding exception. */
		hypoallergenicBeddingException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** King beds count. The number of large beds measuring 76"W x 80"L (193cm x 102cm). Most often meant to accompany two people. Includes California king and super king. */
		kingBedsCount: FormControl<number | null | undefined>,

		/** King beds count exception. */
		kingBedsCountException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Memory foam pillows. The option for guests to obtain bed pillows that are stuffed with a man-made foam that responds to body heat by conforming to the body closely, and then recovers its shape when the pillow cools down. */
		memoryFoamPillows: FormControl<boolean | null | undefined>,

		/** Memory foam pillows exception. */
		memoryFoamPillowsException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Other beds count. The number of beds that are not standard mattress and boxspring setups such as Japanese tatami mats, trundle beds, air mattresses and cots. */
		otherBedsCount: FormControl<number | null | undefined>,

		/** Other beds count exception. */
		otherBedsCountException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Queen beds count. The number of medium-large beds measuring 60"W x 80"L (152cm x 102cm). */
		queenBedsCount: FormControl<number | null | undefined>,

		/** Queen beds count exception. */
		queenBedsCountException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Roll away beds count. The number of mattresses on wheeled frames that can be folded in half and rolled away for easy storage that the guestroom can obtain upon request. */
		rollAwayBedsCount: FormControl<number | null | undefined>,

		/** Roll away beds count exception. */
		rollAwayBedsCountException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Single or twin count beds. The number of smaller beds measuring 38"W x 75"L (97cm x 191cm) that can accommodate one adult. */
		singleOrTwinBedsCount: FormControl<number | null | undefined>,

		/** Single or twin beds count exception. */
		singleOrTwinBedsCountException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Sofa beds count. The number of specially designed sofas that can be made to serve as a bed by lowering its hinged upholstered back to horizontal position or by pulling out a concealed mattress. */
		sofaBedsCount: FormControl<number | null | undefined>,

		/** Sofa beds count exception. */
		sofaBedsCountException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Synthetic pillows. The option for guests to obtain bed pillows stuffed with polyester material crafted to reproduce the feel of a pillow stuffed with down and feathers. */
		syntheticPillows: FormControl<boolean | null | undefined>,

		/** Synthetic pillows exception. */
		syntheticPillowsException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,
	}
	export function CreateLivingAreaSleepingFormGroup() {
		return new FormGroup<LivingAreaSleepingFormProperties>({
			bedsCount: new FormControl<number | null | undefined>(undefined),
			bedsCountException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			bunkBedsCount: new FormControl<number | null | undefined>(undefined),
			bunkBedsCountException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			cribsCount: new FormControl<number | null | undefined>(undefined),
			cribsCountException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			doubleBedsCount: new FormControl<number | null | undefined>(undefined),
			doubleBedsCountException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			featherPillows: new FormControl<boolean | null | undefined>(undefined),
			featherPillowsException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			hypoallergenicBedding: new FormControl<boolean | null | undefined>(undefined),
			hypoallergenicBeddingException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			kingBedsCount: new FormControl<number | null | undefined>(undefined),
			kingBedsCountException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			memoryFoamPillows: new FormControl<boolean | null | undefined>(undefined),
			memoryFoamPillowsException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			otherBedsCount: new FormControl<number | null | undefined>(undefined),
			otherBedsCountException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			queenBedsCount: new FormControl<number | null | undefined>(undefined),
			queenBedsCountException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			rollAwayBedsCount: new FormControl<number | null | undefined>(undefined),
			rollAwayBedsCountException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			singleOrTwinBedsCount: new FormControl<number | null | undefined>(undefined),
			singleOrTwinBedsCountException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			sofaBedsCount: new FormControl<number | null | undefined>(undefined),
			sofaBedsCountException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			syntheticPillows: new FormControl<boolean | null | undefined>(undefined),
			syntheticPillowsException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
		});

	}


	/** Views available from the guest unit itself. */
	export interface ViewsFromUnit {

		/** Beach view. A guestroom that features a window through which guests can see the beach. */
		beachView?: boolean | null;

		/** Beach view exception. */
		beachViewException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** City view. A guestroom that features a window through which guests can see the buildings, parks and/or streets of the city. */
		cityView?: boolean | null;

		/** City view exception. */
		cityViewException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Garden view. A guestroom that features a window through which guests can see a garden. */
		gardenView?: boolean | null;

		/** Garden view exception. */
		gardenViewException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Lake view. */
		lakeView?: boolean | null;

		/** Lake view exception. */
		lakeViewException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Landmark view. A guestroom that features a window through which guests can see a landmark such as the countryside, a golf course, the forest, a park, a rain forst, a mountain or a slope. */
		landmarkView?: boolean | null;

		/** Landmark view exception. */
		landmarkViewException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Ocean view. A guestroom that features a window through which guests can see the ocean. */
		oceanView?: boolean | null;

		/** Ocean view exception. */
		oceanViewException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Pool view. A guestroom that features a window through which guests can see the hotel's swimming pool. */
		poolView?: boolean | null;

		/** Pool view exception. */
		poolViewException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Valley view. A guestroom that features a window through which guests can see over a valley. */
		valleyView?: boolean | null;

		/** Valley view exception. */
		valleyViewException?: AccessibilityMobilityAccessibleElevatorException | null;
	}

	/** Views available from the guest unit itself. */
	export interface ViewsFromUnitFormProperties {

		/** Beach view. A guestroom that features a window through which guests can see the beach. */
		beachView: FormControl<boolean | null | undefined>,

		/** Beach view exception. */
		beachViewException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** City view. A guestroom that features a window through which guests can see the buildings, parks and/or streets of the city. */
		cityView: FormControl<boolean | null | undefined>,

		/** City view exception. */
		cityViewException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Garden view. A guestroom that features a window through which guests can see a garden. */
		gardenView: FormControl<boolean | null | undefined>,

		/** Garden view exception. */
		gardenViewException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Lake view. */
		lakeView: FormControl<boolean | null | undefined>,

		/** Lake view exception. */
		lakeViewException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Landmark view. A guestroom that features a window through which guests can see a landmark such as the countryside, a golf course, the forest, a park, a rain forst, a mountain or a slope. */
		landmarkView: FormControl<boolean | null | undefined>,

		/** Landmark view exception. */
		landmarkViewException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Ocean view. A guestroom that features a window through which guests can see the ocean. */
		oceanView: FormControl<boolean | null | undefined>,

		/** Ocean view exception. */
		oceanViewException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Pool view. A guestroom that features a window through which guests can see the hotel's swimming pool. */
		poolView: FormControl<boolean | null | undefined>,

		/** Pool view exception. */
		poolViewException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Valley view. A guestroom that features a window through which guests can see over a valley. */
		valleyView: FormControl<boolean | null | undefined>,

		/** Valley view exception. */
		valleyViewException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,
	}
	export function CreateViewsFromUnitFormGroup() {
		return new FormGroup<ViewsFromUnitFormProperties>({
			beachView: new FormControl<boolean | null | undefined>(undefined),
			beachViewException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			cityView: new FormControl<boolean | null | undefined>(undefined),
			cityViewException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			gardenView: new FormControl<boolean | null | undefined>(undefined),
			gardenViewException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			lakeView: new FormControl<boolean | null | undefined>(undefined),
			lakeViewException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			landmarkView: new FormControl<boolean | null | undefined>(undefined),
			landmarkViewException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			oceanView: new FormControl<boolean | null | undefined>(undefined),
			oceanViewException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			poolView: new FormControl<boolean | null | undefined>(undefined),
			poolViewException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			valleyView: new FormControl<boolean | null | undefined>(undefined),
			valleyViewException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
		});

	}


	/** A specific type of unit primarily defined by its features. */
	export interface GuestUnitType {

		/** Required. Unit or room code identifiers for a single GuestUnitType. Each code must be unique within a Lodging instance. */
		codes?: Array<string>;

		/** Features and available amenities in the guest unit. */
		features?: GuestUnitFeatures;

		/** Required. Short, English label or name of the GuestUnitType. Target <50 chars. */
		label?: string | null;
	}

	/** A specific type of unit primarily defined by its features. */
	export interface GuestUnitTypeFormProperties {

		/** Required. Short, English label or name of the GuestUnitType. Target <50 chars. */
		label: FormControl<string | null | undefined>,
	}
	export function CreateGuestUnitTypeFormGroup() {
		return new FormGroup<GuestUnitTypeFormProperties>({
			label: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Health and safety measures implemented by the hotel during COVID-19. */
	export interface HealthAndSafety {

		/** Enhanced cleaning measures implemented by the hotel during COVID-19. */
		enhancedCleaning?: EnhancedCleaning;

		/** Increased food safety measures implemented by the hotel during COVID-19. */
		increasedFoodSafety?: IncreasedFoodSafety;

		/** Minimized contact measures implemented by the hotel during COVID-19. */
		minimizedContact?: MinimizedContact;

		/** Personal protection measures implemented by the hotel during COVID-19. */
		personalProtection?: PersonalProtection;

		/** Physical distancing measures implemented by the hotel during COVID-19. */
		physicalDistancing?: PhysicalDistancing;
	}

	/** Health and safety measures implemented by the hotel during COVID-19. */
	export interface HealthAndSafetyFormProperties {
	}
	export function CreateHealthAndSafetyFormGroup() {
		return new FormGroup<HealthAndSafetyFormProperties>({
		});

	}


	/** Increased food safety measures implemented by the hotel during COVID-19. */
	export interface IncreasedFoodSafety {

		/** Additional sanitation in dining areas. */
		diningAreasAdditionalSanitation?: boolean | null;

		/** Dining areas additional sanitation exception. */
		diningAreasAdditionalSanitationException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Disposable flatware. */
		disposableFlatware?: boolean | null;

		/** Disposable flatware exception. */
		disposableFlatwareException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Additional safety measures during food prep and serving. */
		foodPreparationAndServingAdditionalSafety?: boolean | null;

		/** Food preparation and serving additional safety exception. */
		foodPreparationAndServingAdditionalSafetyException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Individually-packaged meals. */
		individualPackagedMeals?: boolean | null;

		/** Individual packaged meals exception. */
		individualPackagedMealsException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Single-use menus. */
		singleUseFoodMenus?: boolean | null;

		/** Single use food menus exception. */
		singleUseFoodMenusException?: AccessibilityMobilityAccessibleElevatorException | null;
	}

	/** Increased food safety measures implemented by the hotel during COVID-19. */
	export interface IncreasedFoodSafetyFormProperties {

		/** Additional sanitation in dining areas. */
		diningAreasAdditionalSanitation: FormControl<boolean | null | undefined>,

		/** Dining areas additional sanitation exception. */
		diningAreasAdditionalSanitationException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Disposable flatware. */
		disposableFlatware: FormControl<boolean | null | undefined>,

		/** Disposable flatware exception. */
		disposableFlatwareException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Additional safety measures during food prep and serving. */
		foodPreparationAndServingAdditionalSafety: FormControl<boolean | null | undefined>,

		/** Food preparation and serving additional safety exception. */
		foodPreparationAndServingAdditionalSafetyException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Individually-packaged meals. */
		individualPackagedMeals: FormControl<boolean | null | undefined>,

		/** Individual packaged meals exception. */
		individualPackagedMealsException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Single-use menus. */
		singleUseFoodMenus: FormControl<boolean | null | undefined>,

		/** Single use food menus exception. */
		singleUseFoodMenusException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,
	}
	export function CreateIncreasedFoodSafetyFormGroup() {
		return new FormGroup<IncreasedFoodSafetyFormProperties>({
			diningAreasAdditionalSanitation: new FormControl<boolean | null | undefined>(undefined),
			diningAreasAdditionalSanitationException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			disposableFlatware: new FormControl<boolean | null | undefined>(undefined),
			disposableFlatwareException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			foodPreparationAndServingAdditionalSafety: new FormControl<boolean | null | undefined>(undefined),
			foodPreparationAndServingAdditionalSafetyException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			individualPackagedMeals: new FormControl<boolean | null | undefined>(undefined),
			individualPackagedMealsException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			singleUseFoodMenus: new FormControl<boolean | null | undefined>(undefined),
			singleUseFoodMenusException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
		});

	}


	/** Minimized contact measures implemented by the hotel during COVID-19. */
	export interface MinimizedContact {

		/** No-contact check-in and check-out. */
		contactlessCheckinCheckout?: boolean | null;

		/** Contactless check-in check-out exception. */
		contactlessCheckinCheckoutException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Keyless mobile entry to guest rooms. */
		digitalGuestRoomKeys?: boolean | null;

		/** Digital guest room keys exception. */
		digitalGuestRoomKeysException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Housekeeping scheduled by request only. */
		housekeepingScheduledRequestOnly?: boolean | null;

		/** Housekeeping scheduled request only exception. */
		housekeepingScheduledRequestOnlyException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** High-touch items, such as magazines, removed from common areas. */
		noHighTouchItemsCommonAreas?: boolean | null;

		/** No high touch items common areas exception. */
		noHighTouchItemsCommonAreasException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** High-touch items, such as decorative pillows, removed from guest rooms. */
		noHighTouchItemsGuestRooms?: boolean | null;

		/** No high touch items guest rooms exception. */
		noHighTouchItemsGuestRoomsException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Plastic key cards are disinfected or discarded. */
		plasticKeycardsDisinfected?: boolean | null;

		/** Plastic keycards disinfected exception. */
		plasticKeycardsDisinfectedException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Buffer maintained between room bookings. */
		roomBookingsBuffer?: boolean | null;

		/** Room bookings buffer exception. */
		roomBookingsBufferException?: AccessibilityMobilityAccessibleElevatorException | null;
	}

	/** Minimized contact measures implemented by the hotel during COVID-19. */
	export interface MinimizedContactFormProperties {

		/** No-contact check-in and check-out. */
		contactlessCheckinCheckout: FormControl<boolean | null | undefined>,

		/** Contactless check-in check-out exception. */
		contactlessCheckinCheckoutException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Keyless mobile entry to guest rooms. */
		digitalGuestRoomKeys: FormControl<boolean | null | undefined>,

		/** Digital guest room keys exception. */
		digitalGuestRoomKeysException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Housekeeping scheduled by request only. */
		housekeepingScheduledRequestOnly: FormControl<boolean | null | undefined>,

		/** Housekeeping scheduled request only exception. */
		housekeepingScheduledRequestOnlyException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** High-touch items, such as magazines, removed from common areas. */
		noHighTouchItemsCommonAreas: FormControl<boolean | null | undefined>,

		/** No high touch items common areas exception. */
		noHighTouchItemsCommonAreasException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** High-touch items, such as decorative pillows, removed from guest rooms. */
		noHighTouchItemsGuestRooms: FormControl<boolean | null | undefined>,

		/** No high touch items guest rooms exception. */
		noHighTouchItemsGuestRoomsException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Plastic key cards are disinfected or discarded. */
		plasticKeycardsDisinfected: FormControl<boolean | null | undefined>,

		/** Plastic keycards disinfected exception. */
		plasticKeycardsDisinfectedException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Buffer maintained between room bookings. */
		roomBookingsBuffer: FormControl<boolean | null | undefined>,

		/** Room bookings buffer exception. */
		roomBookingsBufferException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,
	}
	export function CreateMinimizedContactFormGroup() {
		return new FormGroup<MinimizedContactFormProperties>({
			contactlessCheckinCheckout: new FormControl<boolean | null | undefined>(undefined),
			contactlessCheckinCheckoutException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			digitalGuestRoomKeys: new FormControl<boolean | null | undefined>(undefined),
			digitalGuestRoomKeysException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			housekeepingScheduledRequestOnly: new FormControl<boolean | null | undefined>(undefined),
			housekeepingScheduledRequestOnlyException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			noHighTouchItemsCommonAreas: new FormControl<boolean | null | undefined>(undefined),
			noHighTouchItemsCommonAreasException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			noHighTouchItemsGuestRooms: new FormControl<boolean | null | undefined>(undefined),
			noHighTouchItemsGuestRoomsException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			plasticKeycardsDisinfected: new FormControl<boolean | null | undefined>(undefined),
			plasticKeycardsDisinfectedException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			roomBookingsBuffer: new FormControl<boolean | null | undefined>(undefined),
			roomBookingsBufferException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
		});

	}


	/** Personal protection measures implemented by the hotel during COVID-19. */
	export interface PersonalProtection {

		/** Hand-sanitizer and/or sanitizing wipes are offered in common areas. */
		commonAreasOfferSanitizingItems?: boolean | null;

		/** Common areas offer sanitizing items exception. */
		commonAreasOfferSanitizingItemsException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Masks required on the property. */
		faceMaskRequired?: boolean | null;

		/** Face mask required exception. */
		faceMaskRequiredException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** In-room hygiene kits with masks, hand sanitizer, and/or antibacterial wipes. */
		guestRoomHygieneKitsAvailable?: boolean | null;

		/** Guest room hygiene kits available exception. */
		guestRoomHygieneKitsAvailableException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Masks and/or gloves available for guests. */
		protectiveEquipmentAvailable?: boolean | null;

		/** Protective equipment available exception. */
		protectiveEquipmentAvailableException?: AccessibilityMobilityAccessibleElevatorException | null;
	}

	/** Personal protection measures implemented by the hotel during COVID-19. */
	export interface PersonalProtectionFormProperties {

		/** Hand-sanitizer and/or sanitizing wipes are offered in common areas. */
		commonAreasOfferSanitizingItems: FormControl<boolean | null | undefined>,

		/** Common areas offer sanitizing items exception. */
		commonAreasOfferSanitizingItemsException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Masks required on the property. */
		faceMaskRequired: FormControl<boolean | null | undefined>,

		/** Face mask required exception. */
		faceMaskRequiredException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** In-room hygiene kits with masks, hand sanitizer, and/or antibacterial wipes. */
		guestRoomHygieneKitsAvailable: FormControl<boolean | null | undefined>,

		/** Guest room hygiene kits available exception. */
		guestRoomHygieneKitsAvailableException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Masks and/or gloves available for guests. */
		protectiveEquipmentAvailable: FormControl<boolean | null | undefined>,

		/** Protective equipment available exception. */
		protectiveEquipmentAvailableException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,
	}
	export function CreatePersonalProtectionFormGroup() {
		return new FormGroup<PersonalProtectionFormProperties>({
			commonAreasOfferSanitizingItems: new FormControl<boolean | null | undefined>(undefined),
			commonAreasOfferSanitizingItemsException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			faceMaskRequired: new FormControl<boolean | null | undefined>(undefined),
			faceMaskRequiredException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			guestRoomHygieneKitsAvailable: new FormControl<boolean | null | undefined>(undefined),
			guestRoomHygieneKitsAvailableException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			protectiveEquipmentAvailable: new FormControl<boolean | null | undefined>(undefined),
			protectiveEquipmentAvailableException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
		});

	}


	/** Physical distancing measures implemented by the hotel during COVID-19. */
	export interface PhysicalDistancing {

		/** Common areas arranged to maintain physical distancing. */
		commonAreasPhysicalDistancingArranged?: boolean | null;

		/** Common areas physical distancing arranged exception. */
		commonAreasPhysicalDistancingArrangedException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Physical distancing required. */
		physicalDistancingRequired?: boolean | null;

		/** Physical distancing required exception. */
		physicalDistancingRequiredException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Safety dividers at front desk and other locations. */
		safetyDividers?: boolean | null;

		/** Safety dividers exception. */
		safetyDividersException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Guest occupancy limited within shared facilities. */
		sharedAreasLimitedOccupancy?: boolean | null;

		/** Shared areas limited occupancy exception. */
		sharedAreasLimitedOccupancyException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Private spaces designated in spa and wellness areas. */
		wellnessAreasHavePrivateSpaces?: boolean | null;

		/** Wellness areas have private spaces exception. */
		wellnessAreasHavePrivateSpacesException?: AccessibilityMobilityAccessibleElevatorException | null;
	}

	/** Physical distancing measures implemented by the hotel during COVID-19. */
	export interface PhysicalDistancingFormProperties {

		/** Common areas arranged to maintain physical distancing. */
		commonAreasPhysicalDistancingArranged: FormControl<boolean | null | undefined>,

		/** Common areas physical distancing arranged exception. */
		commonAreasPhysicalDistancingArrangedException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Physical distancing required. */
		physicalDistancingRequired: FormControl<boolean | null | undefined>,

		/** Physical distancing required exception. */
		physicalDistancingRequiredException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Safety dividers at front desk and other locations. */
		safetyDividers: FormControl<boolean | null | undefined>,

		/** Safety dividers exception. */
		safetyDividersException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Guest occupancy limited within shared facilities. */
		sharedAreasLimitedOccupancy: FormControl<boolean | null | undefined>,

		/** Shared areas limited occupancy exception. */
		sharedAreasLimitedOccupancyException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Private spaces designated in spa and wellness areas. */
		wellnessAreasHavePrivateSpaces: FormControl<boolean | null | undefined>,

		/** Wellness areas have private spaces exception. */
		wellnessAreasHavePrivateSpacesException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,
	}
	export function CreatePhysicalDistancingFormGroup() {
		return new FormGroup<PhysicalDistancingFormProperties>({
			commonAreasPhysicalDistancingArranged: new FormControl<boolean | null | undefined>(undefined),
			commonAreasPhysicalDistancingArrangedException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			physicalDistancingRequired: new FormControl<boolean | null | undefined>(undefined),
			physicalDistancingRequiredException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			safetyDividers: new FormControl<boolean | null | undefined>(undefined),
			safetyDividersException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			sharedAreasLimitedOccupancy: new FormControl<boolean | null | undefined>(undefined),
			sharedAreasLimitedOccupancyException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			wellnessAreasHavePrivateSpaces: new FormControl<boolean | null | undefined>(undefined),
			wellnessAreasHavePrivateSpacesException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
		});

	}


	/** Conveniences provided in guest units to facilitate an easier, more comfortable stay. */
	export interface Housekeeping {

		/** Daily housekeeping. Guest units are cleaned by hotel staff daily during guest's stay. */
		dailyHousekeeping?: boolean | null;

		/** Daily housekeeping exception. */
		dailyHousekeepingException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Housekeeping available. Guest units are cleaned by hotel staff during guest's stay. Schedule may vary from daily, weekly, or specific days of the week. */
		housekeepingAvailable?: boolean | null;

		/** Housekeeping available exception. */
		housekeepingAvailableException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Turndown service. Hotel staff enters guest units to prepare the bed for sleep use. May or may not include some light housekeeping. May or may not include an evening snack or candy. Also known as evening service. */
		turndownService?: boolean | null;

		/** Turndown service exception. */
		turndownServiceException?: AccessibilityMobilityAccessibleElevatorException | null;
	}

	/** Conveniences provided in guest units to facilitate an easier, more comfortable stay. */
	export interface HousekeepingFormProperties {

		/** Daily housekeeping. Guest units are cleaned by hotel staff daily during guest's stay. */
		dailyHousekeeping: FormControl<boolean | null | undefined>,

		/** Daily housekeeping exception. */
		dailyHousekeepingException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Housekeeping available. Guest units are cleaned by hotel staff during guest's stay. Schedule may vary from daily, weekly, or specific days of the week. */
		housekeepingAvailable: FormControl<boolean | null | undefined>,

		/** Housekeeping available exception. */
		housekeepingAvailableException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Turndown service. Hotel staff enters guest units to prepare the bed for sleep use. May or may not include some light housekeeping. May or may not include an evening snack or candy. Also known as evening service. */
		turndownService: FormControl<boolean | null | undefined>,

		/** Turndown service exception. */
		turndownServiceException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,
	}
	export function CreateHousekeepingFormGroup() {
		return new FormGroup<HousekeepingFormProperties>({
			dailyHousekeeping: new FormControl<boolean | null | undefined>(undefined),
			dailyHousekeepingException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			housekeepingAvailable: new FormControl<boolean | null | undefined>(undefined),
			housekeepingAvailableException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			turndownService: new FormControl<boolean | null | undefined>(undefined),
			turndownServiceException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
		});

	}


	/** Metadata for the Lodging. */
	export interface LodgingMetadata {

		/** Required. The latest time at which the Lodging data is asserted to be true in the real world. This is not necessarily the time at which the request is made. */
		updateTime?: string | null;
	}

	/** Metadata for the Lodging. */
	export interface LodgingMetadataFormProperties {

		/** Required. The latest time at which the Lodging data is asserted to be true in the real world. This is not necessarily the time at which the request is made. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateLodgingMetadataFormGroup() {
		return new FormGroup<LodgingMetadataFormProperties>({
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parking options at the property. */
	export interface Parking {

		/** Electric car charging stations. Electric power stations, usually located outdoors, into which guests plug their electric cars to receive a charge. */
		electricCarChargingStations?: boolean | null;

		/** Electric car charging stations exception. */
		electricCarChargingStationsException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Free parking. The hotel allows the cars of guests to be parked for free. Parking facility may be an outdoor lot or an indoor garage, but must be onsite. Nearby parking does not apply. Parking may be performed by the guest or by hotel staff. Free parking must be available to all guests (limited conditions does not apply). */
		freeParking?: boolean | null;

		/** Free parking exception. */
		freeParkingException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Free self parking. Guests park their own cars for free. Parking facility may be an outdoor lot or an indoor garage, but must be onsite. Nearby parking does not apply. */
		freeSelfParking?: boolean | null;

		/** Free self parking exception. */
		freeSelfParkingException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Free valet parking. Hotel staff member parks the cars of guests. Parking with this service is free. */
		freeValetParking?: boolean | null;

		/** Free valet parking exception. */
		freeValetParkingException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Parking available. The hotel allows the cars of guests to be parked. Can be free or for a fee. Parking facility may be an outdoor lot or an indoor garage, but must be onsite. Nearby parking does not apply. Parking may be performed by the guest or by hotel staff. */
		parkingAvailable?: boolean | null;

		/** Parking available exception. */
		parkingAvailableException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Self parking available. Guests park their own cars. Parking facility may be an outdoor lot or an indoor garage, but must be onsite. Nearby parking does not apply. Can be free or for a fee. */
		selfParkingAvailable?: boolean | null;

		/** Self parking available exception. */
		selfParkingAvailableException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Valet parking available. Hotel staff member parks the cars of guests. Parking with this service can be free or for a fee. */
		valetParkingAvailable?: boolean | null;

		/** Valet parking available exception. */
		valetParkingAvailableException?: AccessibilityMobilityAccessibleElevatorException | null;
	}

	/** Parking options at the property. */
	export interface ParkingFormProperties {

		/** Electric car charging stations. Electric power stations, usually located outdoors, into which guests plug their electric cars to receive a charge. */
		electricCarChargingStations: FormControl<boolean | null | undefined>,

		/** Electric car charging stations exception. */
		electricCarChargingStationsException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Free parking. The hotel allows the cars of guests to be parked for free. Parking facility may be an outdoor lot or an indoor garage, but must be onsite. Nearby parking does not apply. Parking may be performed by the guest or by hotel staff. Free parking must be available to all guests (limited conditions does not apply). */
		freeParking: FormControl<boolean | null | undefined>,

		/** Free parking exception. */
		freeParkingException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Free self parking. Guests park their own cars for free. Parking facility may be an outdoor lot or an indoor garage, but must be onsite. Nearby parking does not apply. */
		freeSelfParking: FormControl<boolean | null | undefined>,

		/** Free self parking exception. */
		freeSelfParkingException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Free valet parking. Hotel staff member parks the cars of guests. Parking with this service is free. */
		freeValetParking: FormControl<boolean | null | undefined>,

		/** Free valet parking exception. */
		freeValetParkingException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Parking available. The hotel allows the cars of guests to be parked. Can be free or for a fee. Parking facility may be an outdoor lot or an indoor garage, but must be onsite. Nearby parking does not apply. Parking may be performed by the guest or by hotel staff. */
		parkingAvailable: FormControl<boolean | null | undefined>,

		/** Parking available exception. */
		parkingAvailableException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Self parking available. Guests park their own cars. Parking facility may be an outdoor lot or an indoor garage, but must be onsite. Nearby parking does not apply. Can be free or for a fee. */
		selfParkingAvailable: FormControl<boolean | null | undefined>,

		/** Self parking available exception. */
		selfParkingAvailableException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Valet parking available. Hotel staff member parks the cars of guests. Parking with this service can be free or for a fee. */
		valetParkingAvailable: FormControl<boolean | null | undefined>,

		/** Valet parking available exception. */
		valetParkingAvailableException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,
	}
	export function CreateParkingFormGroup() {
		return new FormGroup<ParkingFormProperties>({
			electricCarChargingStations: new FormControl<boolean | null | undefined>(undefined),
			electricCarChargingStationsException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			freeParking: new FormControl<boolean | null | undefined>(undefined),
			freeParkingException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			freeSelfParking: new FormControl<boolean | null | undefined>(undefined),
			freeSelfParkingException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			freeValetParking: new FormControl<boolean | null | undefined>(undefined),
			freeValetParkingException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			parkingAvailable: new FormControl<boolean | null | undefined>(undefined),
			parkingAvailableException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			selfParkingAvailable: new FormControl<boolean | null | undefined>(undefined),
			selfParkingAvailableException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			valetParkingAvailable: new FormControl<boolean | null | undefined>(undefined),
			valetParkingAvailableException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
		});

	}


	/** Policies regarding guest-owned animals. */
	export interface Pets {

		/** Cats allowed. Domesticated felines are permitted at the property and allowed to stay in the guest room of their owner. May or may not require a fee. */
		catsAllowed?: boolean | null;

		/** Cats allowed exception. */
		catsAllowedException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Dogs allowed. Domesticated canines are permitted at the property and allowed to stay in the guest room of their owner. May or may not require a fee. */
		dogsAllowed?: boolean | null;

		/** Dogs allowed exception. */
		dogsAllowedException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Pets allowed. Household animals are allowed at the property and in the specific guest room of their owner. May or may not include dogs, cats, reptiles and/or fish. May or may not require a fee. Service animals are not considered to be pets, so not governed by this policy. */
		petsAllowed?: boolean | null;

		/** Pets allowed exception. */
		petsAllowedException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Pets allowed free. Household animals are allowed at the property and in the specific guest room of their owner for free. May or may not include dogs, cats, reptiles, and/or fish. */
		petsAllowedFree?: boolean | null;

		/** Pets allowed free exception. */
		petsAllowedFreeException?: AccessibilityMobilityAccessibleElevatorException | null;
	}

	/** Policies regarding guest-owned animals. */
	export interface PetsFormProperties {

		/** Cats allowed. Domesticated felines are permitted at the property and allowed to stay in the guest room of their owner. May or may not require a fee. */
		catsAllowed: FormControl<boolean | null | undefined>,

		/** Cats allowed exception. */
		catsAllowedException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Dogs allowed. Domesticated canines are permitted at the property and allowed to stay in the guest room of their owner. May or may not require a fee. */
		dogsAllowed: FormControl<boolean | null | undefined>,

		/** Dogs allowed exception. */
		dogsAllowedException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Pets allowed. Household animals are allowed at the property and in the specific guest room of their owner. May or may not include dogs, cats, reptiles and/or fish. May or may not require a fee. Service animals are not considered to be pets, so not governed by this policy. */
		petsAllowed: FormControl<boolean | null | undefined>,

		/** Pets allowed exception. */
		petsAllowedException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Pets allowed free. Household animals are allowed at the property and in the specific guest room of their owner for free. May or may not include dogs, cats, reptiles, and/or fish. */
		petsAllowedFree: FormControl<boolean | null | undefined>,

		/** Pets allowed free exception. */
		petsAllowedFreeException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,
	}
	export function CreatePetsFormGroup() {
		return new FormGroup<PetsFormProperties>({
			catsAllowed: new FormControl<boolean | null | undefined>(undefined),
			catsAllowedException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			dogsAllowed: new FormControl<boolean | null | undefined>(undefined),
			dogsAllowedException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			petsAllowed: new FormControl<boolean | null | undefined>(undefined),
			petsAllowedException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			petsAllowedFree: new FormControl<boolean | null | undefined>(undefined),
			petsAllowedFreeException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
		});

	}


	/** Property rules that impact guests. */
	export interface Policies {

		/** All inclusive available. The hotel offers a rate option that includes the cost of the room, meals, activities, and other amenities that might otherwise be charged separately. */
		allInclusiveAvailable?: boolean | null;

		/** All inclusive available exception. */
		allInclusiveAvailableException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** All inclusive only. The only rate option offered by the hotel is a rate that includes the cost of the room, meals, activities and other amenities that might otherwise be charged separately. */
		allInclusiveOnly?: boolean | null;

		/** All inclusive only exception. */
		allInclusiveOnlyException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
		checkinTime?: TimeOfDay;

		/** Check-in time exception. */
		checkinTimeException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
		checkoutTime?: TimeOfDay;

		/** Check-out time exception. */
		checkoutTimeException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Kids stay free. The children of guests are allowed to stay in the room/suite of a parent or adult without an additional fee. The policy may or may not stipulate a limit of the child's age or the overall number of children allowed. */
		kidsStayFree?: boolean | null;

		/** Kids stay free exception. */
		kidsStayFreeException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Max child age. The hotel allows children up to a certain age to stay in the room/suite of a parent or adult without an additional fee. */
		maxChildAge?: number | null;

		/** Max child age exception. */
		maxChildAgeException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Max kids stay free count. The hotel allows a specific, defined number of children to stay in the room/suite of a parent or adult without an additional fee. */
		maxKidsStayFreeCount?: number | null;

		/** Max kids stay free count exception. */
		maxKidsStayFreeCountException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Forms of payment accepted at the property. */
		paymentOptions?: PaymentOptions;

		/** Smoke free property. Smoking is not allowed inside the building, on balconies, or in outside spaces. Hotels that offer a designated area for guests to smoke are not considered smoke-free properties. */
		smokeFreeProperty?: boolean | null;

		/** Smoke free property exception. */
		smokeFreePropertyException?: AccessibilityMobilityAccessibleElevatorException | null;
	}

	/** Property rules that impact guests. */
	export interface PoliciesFormProperties {

		/** All inclusive available. The hotel offers a rate option that includes the cost of the room, meals, activities, and other amenities that might otherwise be charged separately. */
		allInclusiveAvailable: FormControl<boolean | null | undefined>,

		/** All inclusive available exception. */
		allInclusiveAvailableException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** All inclusive only. The only rate option offered by the hotel is a rate that includes the cost of the room, meals, activities and other amenities that might otherwise be charged separately. */
		allInclusiveOnly: FormControl<boolean | null | undefined>,

		/** All inclusive only exception. */
		allInclusiveOnlyException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Check-in time exception. */
		checkinTimeException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Check-out time exception. */
		checkoutTimeException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Kids stay free. The children of guests are allowed to stay in the room/suite of a parent or adult without an additional fee. The policy may or may not stipulate a limit of the child's age or the overall number of children allowed. */
		kidsStayFree: FormControl<boolean | null | undefined>,

		/** Kids stay free exception. */
		kidsStayFreeException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Max child age. The hotel allows children up to a certain age to stay in the room/suite of a parent or adult without an additional fee. */
		maxChildAge: FormControl<number | null | undefined>,

		/** Max child age exception. */
		maxChildAgeException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Max kids stay free count. The hotel allows a specific, defined number of children to stay in the room/suite of a parent or adult without an additional fee. */
		maxKidsStayFreeCount: FormControl<number | null | undefined>,

		/** Max kids stay free count exception. */
		maxKidsStayFreeCountException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Smoke free property. Smoking is not allowed inside the building, on balconies, or in outside spaces. Hotels that offer a designated area for guests to smoke are not considered smoke-free properties. */
		smokeFreeProperty: FormControl<boolean | null | undefined>,

		/** Smoke free property exception. */
		smokeFreePropertyException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,
	}
	export function CreatePoliciesFormGroup() {
		return new FormGroup<PoliciesFormProperties>({
			allInclusiveAvailable: new FormControl<boolean | null | undefined>(undefined),
			allInclusiveAvailableException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			allInclusiveOnly: new FormControl<boolean | null | undefined>(undefined),
			allInclusiveOnlyException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			checkinTimeException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			checkoutTimeException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			kidsStayFree: new FormControl<boolean | null | undefined>(undefined),
			kidsStayFreeException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			maxChildAge: new FormControl<number | null | undefined>(undefined),
			maxChildAgeException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			maxKidsStayFreeCount: new FormControl<number | null | undefined>(undefined),
			maxKidsStayFreeCountException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			smokeFreeProperty: new FormControl<boolean | null | undefined>(undefined),
			smokeFreePropertyException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
		});

	}


	/** Forms of payment accepted at the property. */
	export interface PaymentOptions {

		/** Cash. The hotel accepts payment by paper/coin currency. */
		cash?: boolean | null;

		/** Cash exception. */
		cashException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Cheque. The hotel accepts a printed document issued by the guest's bank in the guest's name as a form of payment. */
		cheque?: boolean | null;

		/** Cheque exception. */
		chequeException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Credit card. The hotel accepts payment by a card issued by a bank or credit card company. Also known as charge card, debit card, bank card, or charge plate. */
		creditCard?: boolean | null;

		/** Credit card exception. */
		creditCardException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Debit card. The hotel accepts a bank-issued card that immediately deducts the charged funds from the guest's bank account upon processing. */
		debitCard?: boolean | null;

		/** Debit card exception. */
		debitCardException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Mobile nfc. The hotel has the compatible computer hardware terminal that reads and charges a payment app on the guest's smartphone without requiring the two devices to make physical contact. Also known as Apple Pay, Google Pay, Samsung Pay. */
		mobileNfc?: boolean | null;

		/** Mobile nfc exception. */
		mobileNfcException?: AccessibilityMobilityAccessibleElevatorException | null;
	}

	/** Forms of payment accepted at the property. */
	export interface PaymentOptionsFormProperties {

		/** Cash. The hotel accepts payment by paper/coin currency. */
		cash: FormControl<boolean | null | undefined>,

		/** Cash exception. */
		cashException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Cheque. The hotel accepts a printed document issued by the guest's bank in the guest's name as a form of payment. */
		cheque: FormControl<boolean | null | undefined>,

		/** Cheque exception. */
		chequeException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Credit card. The hotel accepts payment by a card issued by a bank or credit card company. Also known as charge card, debit card, bank card, or charge plate. */
		creditCard: FormControl<boolean | null | undefined>,

		/** Credit card exception. */
		creditCardException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Debit card. The hotel accepts a bank-issued card that immediately deducts the charged funds from the guest's bank account upon processing. */
		debitCard: FormControl<boolean | null | undefined>,

		/** Debit card exception. */
		debitCardException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Mobile nfc. The hotel has the compatible computer hardware terminal that reads and charges a payment app on the guest's smartphone without requiring the two devices to make physical contact. Also known as Apple Pay, Google Pay, Samsung Pay. */
		mobileNfc: FormControl<boolean | null | undefined>,

		/** Mobile nfc exception. */
		mobileNfcException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,
	}
	export function CreatePaymentOptionsFormGroup() {
		return new FormGroup<PaymentOptionsFormProperties>({
			cash: new FormControl<boolean | null | undefined>(undefined),
			cashException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			cheque: new FormControl<boolean | null | undefined>(undefined),
			chequeException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			creditCard: new FormControl<boolean | null | undefined>(undefined),
			creditCardException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			debitCard: new FormControl<boolean | null | undefined>(undefined),
			debitCardException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			mobileNfc: new FormControl<boolean | null | undefined>(undefined),
			mobileNfcException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
		});

	}


	/** Swimming pool or recreational water facilities available at the hotel. */
	export interface Pools {

		/** Adult pool. A pool restricted for use by adults only. Can be indoors or outdoors. */
		adultPool?: boolean | null;

		/** Adult pool exception. */
		adultPoolException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Hot tub. A man-made pool containing bubbling water maintained at a higher temperature and circulated by aerating jets for the purpose of soaking, relaxation and hydrotherapy. Can be indoors or outdoors. Not used for active swimming. Also known as Jacuzzi. Hot tub must be in a common area where all guests can access it. Does not apply to room-specific hot tubs that are only accessible to guest occupying that room. */
		hotTub?: boolean | null;

		/** Hot tub exception. */
		hotTubException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Indoor pool. A pool located inside the hotel and available for guests to use for swimming and/or soaking. Use may or may not be restricted to adults and/or children. */
		indoorPool?: boolean | null;

		/** Indoor pool exception. */
		indoorPoolException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Indoor pools count. The sum of all indoor pools at the hotel. */
		indoorPoolsCount?: number | null;

		/** Indoor pools count exception. */
		indoorPoolsCountException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Lazy river. A man-made pool or several interconnected recreational pools built to mimic the shape and current of a winding river where guests float in the water on inflated rubber tubes. Can be indoors or outdoors. */
		lazyRiver?: boolean | null;

		/** Lazy river exception. */
		lazyRiverException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Lifeguard. A trained member of the hotel staff stationed by the hotel's indoor or outdoor swimming area and responsible for the safety of swimming guests. */
		lifeguard?: boolean | null;

		/** Lifeguard exception. */
		lifeguardException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Outdoor pool. A pool located outside on the grounds of the hotel and available for guests to use for swimming, soaking or recreation. Use may or may not be restricted to adults and/or children. */
		outdoorPool?: boolean | null;

		/** Outdoor pool exception. */
		outdoorPoolException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Outdoor pools count. The sum of all outdoor pools at the hotel. */
		outdoorPoolsCount?: number | null;

		/** Outdoor pools count exception. */
		outdoorPoolsCountException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Pool. The presence of a pool, either indoors or outdoors, for guests to use for swimming and/or soaking. Use may or may not be restricted to adults and/or children. */
		pool?: boolean | null;

		/** Pool exception. */
		poolException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Pools count. The sum of all pools at the hotel. */
		poolsCount?: number | null;

		/** Pools count exception. */
		poolsCountException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Wading pool. A shallow pool designed for small children to play in. Can be indoors or outdoors. Also known as kiddie pool. */
		wadingPool?: boolean | null;

		/** Wading pool exception. */
		wadingPoolException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Water park. An aquatic recreation area with a large pool or series of pools that has features such as a water slide or tube, wavepool, fountains, rope swings, and/or obstacle course. Can be indoors or outdoors. Also known as adventure pool. */
		waterPark?: boolean | null;

		/** Water park exception. */
		waterParkException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Waterslide. A continuously wetted chute positioned by an indoor or outdoor pool which people slide down into the water. */
		waterslide?: boolean | null;

		/** Waterslide exception. */
		waterslideException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Wave pool. A large indoor or outdoor pool with a machine that produces water currents to mimic the ocean's crests. */
		wavePool?: boolean | null;

		/** Wave pool exception. */
		wavePoolException?: AccessibilityMobilityAccessibleElevatorException | null;
	}

	/** Swimming pool or recreational water facilities available at the hotel. */
	export interface PoolsFormProperties {

		/** Adult pool. A pool restricted for use by adults only. Can be indoors or outdoors. */
		adultPool: FormControl<boolean | null | undefined>,

		/** Adult pool exception. */
		adultPoolException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Hot tub. A man-made pool containing bubbling water maintained at a higher temperature and circulated by aerating jets for the purpose of soaking, relaxation and hydrotherapy. Can be indoors or outdoors. Not used for active swimming. Also known as Jacuzzi. Hot tub must be in a common area where all guests can access it. Does not apply to room-specific hot tubs that are only accessible to guest occupying that room. */
		hotTub: FormControl<boolean | null | undefined>,

		/** Hot tub exception. */
		hotTubException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Indoor pool. A pool located inside the hotel and available for guests to use for swimming and/or soaking. Use may or may not be restricted to adults and/or children. */
		indoorPool: FormControl<boolean | null | undefined>,

		/** Indoor pool exception. */
		indoorPoolException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Indoor pools count. The sum of all indoor pools at the hotel. */
		indoorPoolsCount: FormControl<number | null | undefined>,

		/** Indoor pools count exception. */
		indoorPoolsCountException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Lazy river. A man-made pool or several interconnected recreational pools built to mimic the shape and current of a winding river where guests float in the water on inflated rubber tubes. Can be indoors or outdoors. */
		lazyRiver: FormControl<boolean | null | undefined>,

		/** Lazy river exception. */
		lazyRiverException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Lifeguard. A trained member of the hotel staff stationed by the hotel's indoor or outdoor swimming area and responsible for the safety of swimming guests. */
		lifeguard: FormControl<boolean | null | undefined>,

		/** Lifeguard exception. */
		lifeguardException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Outdoor pool. A pool located outside on the grounds of the hotel and available for guests to use for swimming, soaking or recreation. Use may or may not be restricted to adults and/or children. */
		outdoorPool: FormControl<boolean | null | undefined>,

		/** Outdoor pool exception. */
		outdoorPoolException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Outdoor pools count. The sum of all outdoor pools at the hotel. */
		outdoorPoolsCount: FormControl<number | null | undefined>,

		/** Outdoor pools count exception. */
		outdoorPoolsCountException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Pool. The presence of a pool, either indoors or outdoors, for guests to use for swimming and/or soaking. Use may or may not be restricted to adults and/or children. */
		pool: FormControl<boolean | null | undefined>,

		/** Pool exception. */
		poolException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Pools count. The sum of all pools at the hotel. */
		poolsCount: FormControl<number | null | undefined>,

		/** Pools count exception. */
		poolsCountException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Wading pool. A shallow pool designed for small children to play in. Can be indoors or outdoors. Also known as kiddie pool. */
		wadingPool: FormControl<boolean | null | undefined>,

		/** Wading pool exception. */
		wadingPoolException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Water park. An aquatic recreation area with a large pool or series of pools that has features such as a water slide or tube, wavepool, fountains, rope swings, and/or obstacle course. Can be indoors or outdoors. Also known as adventure pool. */
		waterPark: FormControl<boolean | null | undefined>,

		/** Water park exception. */
		waterParkException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Waterslide. A continuously wetted chute positioned by an indoor or outdoor pool which people slide down into the water. */
		waterslide: FormControl<boolean | null | undefined>,

		/** Waterslide exception. */
		waterslideException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Wave pool. A large indoor or outdoor pool with a machine that produces water currents to mimic the ocean's crests. */
		wavePool: FormControl<boolean | null | undefined>,

		/** Wave pool exception. */
		wavePoolException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,
	}
	export function CreatePoolsFormGroup() {
		return new FormGroup<PoolsFormProperties>({
			adultPool: new FormControl<boolean | null | undefined>(undefined),
			adultPoolException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			hotTub: new FormControl<boolean | null | undefined>(undefined),
			hotTubException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			indoorPool: new FormControl<boolean | null | undefined>(undefined),
			indoorPoolException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			indoorPoolsCount: new FormControl<number | null | undefined>(undefined),
			indoorPoolsCountException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			lazyRiver: new FormControl<boolean | null | undefined>(undefined),
			lazyRiverException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			lifeguard: new FormControl<boolean | null | undefined>(undefined),
			lifeguardException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			outdoorPool: new FormControl<boolean | null | undefined>(undefined),
			outdoorPoolException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			outdoorPoolsCount: new FormControl<number | null | undefined>(undefined),
			outdoorPoolsCountException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			pool: new FormControl<boolean | null | undefined>(undefined),
			poolException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			poolsCount: new FormControl<number | null | undefined>(undefined),
			poolsCountException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			wadingPool: new FormControl<boolean | null | undefined>(undefined),
			wadingPoolException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			waterPark: new FormControl<boolean | null | undefined>(undefined),
			waterParkException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			waterslide: new FormControl<boolean | null | undefined>(undefined),
			waterslideException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			wavePool: new FormControl<boolean | null | undefined>(undefined),
			wavePoolException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
		});

	}


	/** General factual information about the property's physical structure and important dates. */
	export interface Property {

		/** Built year. The year that construction of the property was completed. */
		builtYear?: number | null;

		/** Built year exception. */
		builtYearException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Floors count. The number of stories the building has from the ground floor to the top floor that are accessible to guests. */
		floorsCount?: number | null;

		/** Floors count exception. */
		floorsCountException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Last renovated year. The year when the most recent renovation of the property was completed. Renovation may include all or any combination of the following: the units, the public spaces, the exterior, or the interior. */
		lastRenovatedYear?: number | null;

		/** Last renovated year exception. */
		lastRenovatedYearException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Rooms count. The total number of rooms and suites bookable by guests for an overnight stay. Does not include event space, public spaces, conference rooms, fitness rooms, business centers, spa, salon, restaurants/bars, or shops. */
		roomsCount?: number | null;

		/** Rooms count exception. */
		roomsCountException?: AccessibilityMobilityAccessibleElevatorException | null;
	}

	/** General factual information about the property's physical structure and important dates. */
	export interface PropertyFormProperties {

		/** Built year. The year that construction of the property was completed. */
		builtYear: FormControl<number | null | undefined>,

		/** Built year exception. */
		builtYearException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Floors count. The number of stories the building has from the ground floor to the top floor that are accessible to guests. */
		floorsCount: FormControl<number | null | undefined>,

		/** Floors count exception. */
		floorsCountException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Last renovated year. The year when the most recent renovation of the property was completed. Renovation may include all or any combination of the following: the units, the public spaces, the exterior, or the interior. */
		lastRenovatedYear: FormControl<number | null | undefined>,

		/** Last renovated year exception. */
		lastRenovatedYearException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Rooms count. The total number of rooms and suites bookable by guests for an overnight stay. Does not include event space, public spaces, conference rooms, fitness rooms, business centers, spa, salon, restaurants/bars, or shops. */
		roomsCount: FormControl<number | null | undefined>,

		/** Rooms count exception. */
		roomsCountException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,
	}
	export function CreatePropertyFormGroup() {
		return new FormGroup<PropertyFormProperties>({
			builtYear: new FormControl<number | null | undefined>(undefined),
			builtYearException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			floorsCount: new FormControl<number | null | undefined>(undefined),
			floorsCountException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			lastRenovatedYear: new FormControl<number | null | undefined>(undefined),
			lastRenovatedYearException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			roomsCount: new FormControl<number | null | undefined>(undefined),
			roomsCountException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
		});

	}


	/** Conveniences or help provided by the property to facilitate an easier, more comfortable stay. */
	export interface Services {

		/** Baggage storage. A provision for guests to leave their bags at the hotel when they arrive for their stay before the official check-in time. May or may not apply for guests who wish to leave their bags after check-out and before departing the locale. Also known as bag dropoff. */
		baggageStorage?: boolean | null;

		/** Baggage storage exception. */
		baggageStorageException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Concierge. Hotel staff member(s) responsible for facilitating an easy, comfortable stay through making reservations for meals, sourcing theater tickets, arranging tours, finding a doctor, making recommendations, and answering questions. */
		concierge?: boolean | null;

		/** Concierge exception. */
		conciergeException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Convenience store. A shop at the hotel primarily selling snacks, drinks, non-prescription medicines, health and beauty aids, magazines and newspapers. */
		convenienceStore?: boolean | null;

		/** Convenience store exception. */
		convenienceStoreException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Currency exchange. A staff member or automated machine tasked with the transaction of providing the native currency of the hotel's locale in exchange for the foreign currency provided by a guest. */
		currencyExchange?: boolean | null;

		/** Currency exchange exception. */
		currencyExchangeException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Elevator. A passenger elevator that transports guests from one story to another. Also known as lift. */
		elevator?: boolean | null;

		/** Elevator exception. */
		elevatorException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Front desk. A counter or desk in the lobby or the immediate interior of the hotel where a member of the staff greets guests and processes the information related to their stay (including check-in and check-out). May or may not be manned and open 24/7. */
		frontDesk?: boolean | null;

		/** Front desk exception. */
		frontDeskException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Full service laundry. Laundry and dry cleaning facilitated and handled by the hotel on behalf of the guest. Does not include the provision for guests to do their own laundry in on-site machines. */
		fullServiceLaundry?: boolean | null;

		/** Full service laundry exception. */
		fullServiceLaundryException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Gift shop. An on-site store primarily selling souvenirs, mementos and other gift items. May or may not also sell sundries, magazines and newspapers, clothing, or snacks. */
		giftShop?: boolean | null;

		/** Gift shop exception. */
		giftShopException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Languages spoken by at least one staff member. */
		languagesSpoken?: LanguagesSpoken;

		/** Self service laundry. On-site clothes washers and dryers accessible to guests for the purpose of washing and drying their own clothes. May or may not require payment to use the machines. */
		selfServiceLaundry?: boolean | null;

		/** Self service laundry exception. */
		selfServiceLaundryException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Social hour. A reception with complimentary soft drinks, tea, coffee, wine and/or cocktails in the afternoon or evening. Can be hosted by hotel staff or guests may serve themselves. Also known as wine hour. The availability of coffee/tea in the lobby throughout the day does not constitute a social or wine hour. */
		socialHour?: boolean | null;

		/** Social hour exception. */
		socialHourException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** 24hr front desk. Front desk is staffed 24 hours a day. */
		twentyFourHourFrontDesk?: boolean | null;

		/** 24hr front desk exception. */
		twentyFourHourFrontDeskException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Wake up calls. By direction of the guest, a hotel staff member will phone the guest unit at the requested hour. Also known as morning call. */
		wakeUpCalls?: boolean | null;

		/** Wake up calls exception. */
		wakeUpCallsException?: AccessibilityMobilityAccessibleElevatorException | null;
	}

	/** Conveniences or help provided by the property to facilitate an easier, more comfortable stay. */
	export interface ServicesFormProperties {

		/** Baggage storage. A provision for guests to leave their bags at the hotel when they arrive for their stay before the official check-in time. May or may not apply for guests who wish to leave their bags after check-out and before departing the locale. Also known as bag dropoff. */
		baggageStorage: FormControl<boolean | null | undefined>,

		/** Baggage storage exception. */
		baggageStorageException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Concierge. Hotel staff member(s) responsible for facilitating an easy, comfortable stay through making reservations for meals, sourcing theater tickets, arranging tours, finding a doctor, making recommendations, and answering questions. */
		concierge: FormControl<boolean | null | undefined>,

		/** Concierge exception. */
		conciergeException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Convenience store. A shop at the hotel primarily selling snacks, drinks, non-prescription medicines, health and beauty aids, magazines and newspapers. */
		convenienceStore: FormControl<boolean | null | undefined>,

		/** Convenience store exception. */
		convenienceStoreException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Currency exchange. A staff member or automated machine tasked with the transaction of providing the native currency of the hotel's locale in exchange for the foreign currency provided by a guest. */
		currencyExchange: FormControl<boolean | null | undefined>,

		/** Currency exchange exception. */
		currencyExchangeException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Elevator. A passenger elevator that transports guests from one story to another. Also known as lift. */
		elevator: FormControl<boolean | null | undefined>,

		/** Elevator exception. */
		elevatorException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Front desk. A counter or desk in the lobby or the immediate interior of the hotel where a member of the staff greets guests and processes the information related to their stay (including check-in and check-out). May or may not be manned and open 24/7. */
		frontDesk: FormControl<boolean | null | undefined>,

		/** Front desk exception. */
		frontDeskException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Full service laundry. Laundry and dry cleaning facilitated and handled by the hotel on behalf of the guest. Does not include the provision for guests to do their own laundry in on-site machines. */
		fullServiceLaundry: FormControl<boolean | null | undefined>,

		/** Full service laundry exception. */
		fullServiceLaundryException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Gift shop. An on-site store primarily selling souvenirs, mementos and other gift items. May or may not also sell sundries, magazines and newspapers, clothing, or snacks. */
		giftShop: FormControl<boolean | null | undefined>,

		/** Gift shop exception. */
		giftShopException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Self service laundry. On-site clothes washers and dryers accessible to guests for the purpose of washing and drying their own clothes. May or may not require payment to use the machines. */
		selfServiceLaundry: FormControl<boolean | null | undefined>,

		/** Self service laundry exception. */
		selfServiceLaundryException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Social hour. A reception with complimentary soft drinks, tea, coffee, wine and/or cocktails in the afternoon or evening. Can be hosted by hotel staff or guests may serve themselves. Also known as wine hour. The availability of coffee/tea in the lobby throughout the day does not constitute a social or wine hour. */
		socialHour: FormControl<boolean | null | undefined>,

		/** Social hour exception. */
		socialHourException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** 24hr front desk. Front desk is staffed 24 hours a day. */
		twentyFourHourFrontDesk: FormControl<boolean | null | undefined>,

		/** 24hr front desk exception. */
		twentyFourHourFrontDeskException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Wake up calls. By direction of the guest, a hotel staff member will phone the guest unit at the requested hour. Also known as morning call. */
		wakeUpCalls: FormControl<boolean | null | undefined>,

		/** Wake up calls exception. */
		wakeUpCallsException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,
	}
	export function CreateServicesFormGroup() {
		return new FormGroup<ServicesFormProperties>({
			baggageStorage: new FormControl<boolean | null | undefined>(undefined),
			baggageStorageException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			concierge: new FormControl<boolean | null | undefined>(undefined),
			conciergeException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			convenienceStore: new FormControl<boolean | null | undefined>(undefined),
			convenienceStoreException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			currencyExchange: new FormControl<boolean | null | undefined>(undefined),
			currencyExchangeException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			elevator: new FormControl<boolean | null | undefined>(undefined),
			elevatorException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			frontDesk: new FormControl<boolean | null | undefined>(undefined),
			frontDeskException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			fullServiceLaundry: new FormControl<boolean | null | undefined>(undefined),
			fullServiceLaundryException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			giftShop: new FormControl<boolean | null | undefined>(undefined),
			giftShopException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			selfServiceLaundry: new FormControl<boolean | null | undefined>(undefined),
			selfServiceLaundryException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			socialHour: new FormControl<boolean | null | undefined>(undefined),
			socialHourException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			twentyFourHourFrontDesk: new FormControl<boolean | null | undefined>(undefined),
			twentyFourHourFrontDeskException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			wakeUpCalls: new FormControl<boolean | null | undefined>(undefined),
			wakeUpCallsException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
		});

	}


	/** Languages spoken by at least one staff member. */
	export interface LanguagesSpoken {

		/** Arabic. At least one staff member speaks Arabic. */
		arabicSpoken?: boolean | null;

		/** Arabic exception. */
		arabicSpokenException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Cantonese. At least one staff member speaks Cantonese. */
		cantoneseSpoken?: boolean | null;

		/** Cantonese exception. */
		cantoneseSpokenException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Dutch. At least one staff member speaks Dutch. */
		dutchSpoken?: boolean | null;

		/** Dutch exception. */
		dutchSpokenException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** English. At least one staff member speaks English. */
		englishSpoken?: boolean | null;

		/** English exception. */
		englishSpokenException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Filipino. At least one staff member speaks Filipino. */
		filipinoSpoken?: boolean | null;

		/** Filipino exception. */
		filipinoSpokenException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** French. At least one staff member speaks French. */
		frenchSpoken?: boolean | null;

		/** French exception. */
		frenchSpokenException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** German. At least one staff member speaks German. */
		germanSpoken?: boolean | null;

		/** German exception. */
		germanSpokenException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Hindi. At least one staff member speaks Hindi. */
		hindiSpoken?: boolean | null;

		/** Hindi exception. */
		hindiSpokenException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Indonesian. At least one staff member speaks Indonesian. */
		indonesianSpoken?: boolean | null;

		/** Indonesian exception. */
		indonesianSpokenException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Italian. At least one staff member speaks Italian. */
		italianSpoken?: boolean | null;

		/** Italian exception. */
		italianSpokenException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Japanese. At least one staff member speaks Japanese. */
		japaneseSpoken?: boolean | null;

		/** Japanese exception. */
		japaneseSpokenException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Korean. At least one staff member speaks Korean. */
		koreanSpoken?: boolean | null;

		/** Korean exception. */
		koreanSpokenException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Mandarin. At least one staff member speaks Mandarin. */
		mandarinSpoken?: boolean | null;

		/** Mandarin exception. */
		mandarinSpokenException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Portuguese. At least one staff member speaks Portuguese. */
		portugueseSpoken?: boolean | null;

		/** Portuguese exception. */
		portugueseSpokenException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Russian. At least one staff member speaks Russian. */
		russianSpoken?: boolean | null;

		/** Russian exception. */
		russianSpokenException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Spanish. At least one staff member speaks Spanish. */
		spanishSpoken?: boolean | null;

		/** Spanish exception. */
		spanishSpokenException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Vietnamese. At least one staff member speaks Vietnamese. */
		vietnameseSpoken?: boolean | null;

		/** Vietnamese exception. */
		vietnameseSpokenException?: AccessibilityMobilityAccessibleElevatorException | null;
	}

	/** Languages spoken by at least one staff member. */
	export interface LanguagesSpokenFormProperties {

		/** Arabic. At least one staff member speaks Arabic. */
		arabicSpoken: FormControl<boolean | null | undefined>,

		/** Arabic exception. */
		arabicSpokenException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Cantonese. At least one staff member speaks Cantonese. */
		cantoneseSpoken: FormControl<boolean | null | undefined>,

		/** Cantonese exception. */
		cantoneseSpokenException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Dutch. At least one staff member speaks Dutch. */
		dutchSpoken: FormControl<boolean | null | undefined>,

		/** Dutch exception. */
		dutchSpokenException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** English. At least one staff member speaks English. */
		englishSpoken: FormControl<boolean | null | undefined>,

		/** English exception. */
		englishSpokenException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Filipino. At least one staff member speaks Filipino. */
		filipinoSpoken: FormControl<boolean | null | undefined>,

		/** Filipino exception. */
		filipinoSpokenException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** French. At least one staff member speaks French. */
		frenchSpoken: FormControl<boolean | null | undefined>,

		/** French exception. */
		frenchSpokenException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** German. At least one staff member speaks German. */
		germanSpoken: FormControl<boolean | null | undefined>,

		/** German exception. */
		germanSpokenException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Hindi. At least one staff member speaks Hindi. */
		hindiSpoken: FormControl<boolean | null | undefined>,

		/** Hindi exception. */
		hindiSpokenException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Indonesian. At least one staff member speaks Indonesian. */
		indonesianSpoken: FormControl<boolean | null | undefined>,

		/** Indonesian exception. */
		indonesianSpokenException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Italian. At least one staff member speaks Italian. */
		italianSpoken: FormControl<boolean | null | undefined>,

		/** Italian exception. */
		italianSpokenException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Japanese. At least one staff member speaks Japanese. */
		japaneseSpoken: FormControl<boolean | null | undefined>,

		/** Japanese exception. */
		japaneseSpokenException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Korean. At least one staff member speaks Korean. */
		koreanSpoken: FormControl<boolean | null | undefined>,

		/** Korean exception. */
		koreanSpokenException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Mandarin. At least one staff member speaks Mandarin. */
		mandarinSpoken: FormControl<boolean | null | undefined>,

		/** Mandarin exception. */
		mandarinSpokenException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Portuguese. At least one staff member speaks Portuguese. */
		portugueseSpoken: FormControl<boolean | null | undefined>,

		/** Portuguese exception. */
		portugueseSpokenException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Russian. At least one staff member speaks Russian. */
		russianSpoken: FormControl<boolean | null | undefined>,

		/** Russian exception. */
		russianSpokenException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Spanish. At least one staff member speaks Spanish. */
		spanishSpoken: FormControl<boolean | null | undefined>,

		/** Spanish exception. */
		spanishSpokenException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Vietnamese. At least one staff member speaks Vietnamese. */
		vietnameseSpoken: FormControl<boolean | null | undefined>,

		/** Vietnamese exception. */
		vietnameseSpokenException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,
	}
	export function CreateLanguagesSpokenFormGroup() {
		return new FormGroup<LanguagesSpokenFormProperties>({
			arabicSpoken: new FormControl<boolean | null | undefined>(undefined),
			arabicSpokenException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			cantoneseSpoken: new FormControl<boolean | null | undefined>(undefined),
			cantoneseSpokenException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			dutchSpoken: new FormControl<boolean | null | undefined>(undefined),
			dutchSpokenException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			englishSpoken: new FormControl<boolean | null | undefined>(undefined),
			englishSpokenException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			filipinoSpoken: new FormControl<boolean | null | undefined>(undefined),
			filipinoSpokenException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			frenchSpoken: new FormControl<boolean | null | undefined>(undefined),
			frenchSpokenException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			germanSpoken: new FormControl<boolean | null | undefined>(undefined),
			germanSpokenException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			hindiSpoken: new FormControl<boolean | null | undefined>(undefined),
			hindiSpokenException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			indonesianSpoken: new FormControl<boolean | null | undefined>(undefined),
			indonesianSpokenException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			italianSpoken: new FormControl<boolean | null | undefined>(undefined),
			italianSpokenException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			japaneseSpoken: new FormControl<boolean | null | undefined>(undefined),
			japaneseSpokenException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			koreanSpoken: new FormControl<boolean | null | undefined>(undefined),
			koreanSpokenException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			mandarinSpoken: new FormControl<boolean | null | undefined>(undefined),
			mandarinSpokenException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			portugueseSpoken: new FormControl<boolean | null | undefined>(undefined),
			portugueseSpokenException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			russianSpoken: new FormControl<boolean | null | undefined>(undefined),
			russianSpokenException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			spanishSpoken: new FormControl<boolean | null | undefined>(undefined),
			spanishSpokenException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			vietnameseSpoken: new FormControl<boolean | null | undefined>(undefined),
			vietnameseSpokenException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
		});

	}


	/** Vehicles or vehicular services facilitated or owned by the property. */
	export interface Transportation {

		/** Airport shuttle. The hotel provides guests with a chauffeured van or bus to and from the airport. Can be free or for a fee. Guests may share the vehicle with other guests unknown to them. Applies if the hotel has a third-party shuttle service (office/desk etc.) within the hotel. As long as hotel provides this service, it doesn't matter if it's directly with them or a third party they work with. Does not apply if guest has to coordinate with an entity outside/other than the hotel. */
		airportShuttle?: boolean | null;

		/** Airport shuttle exception. */
		airportShuttleException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Car rental on property. A branch of a rental car company with a processing desk in the hotel. Available cars for rent may be awaiting at the hotel or in a nearby lot. */
		carRentalOnProperty?: boolean | null;

		/** Car rental on property exception. */
		carRentalOnPropertyException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Free airport shuttle. Airport shuttle is free to guests. Must be free to all guests without any conditions. */
		freeAirportShuttle?: boolean | null;

		/** Free airport shuttle exception. */
		freeAirportShuttleException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Free private car service. Private chauffeured car service is free to guests. */
		freePrivateCarService?: boolean | null;

		/** Free private car service exception. */
		freePrivateCarServiceException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Local shuttle. A car, van or bus provided by the hotel to transport guests to destinations within a specified range of distance around the hotel. Usually shopping and/or convention centers, downtown districts, or beaches. Can be free or for a fee. */
		localShuttle?: boolean | null;

		/** Local shuttle exception. */
		localShuttleException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Private car service. Hotel provides a private chauffeured car to transport guests to destinations. Passengers in the car are either alone or are known to one another and have requested the car together. Service can be free or for a fee and travel distance is usually limited to a specific range. Not a taxi. */
		privateCarService?: boolean | null;

		/** Private car service exception. */
		privateCarServiceException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Transfer. Hotel provides a shuttle service or car service to take guests to and from the nearest airport or train station. Can be free or for a fee. Guests may share the vehicle with other guests unknown to them. */
		transfer?: boolean | null;

		/** Transfer exception. */
		transferException?: AccessibilityMobilityAccessibleElevatorException | null;
	}

	/** Vehicles or vehicular services facilitated or owned by the property. */
	export interface TransportationFormProperties {

		/** Airport shuttle. The hotel provides guests with a chauffeured van or bus to and from the airport. Can be free or for a fee. Guests may share the vehicle with other guests unknown to them. Applies if the hotel has a third-party shuttle service (office/desk etc.) within the hotel. As long as hotel provides this service, it doesn't matter if it's directly with them or a third party they work with. Does not apply if guest has to coordinate with an entity outside/other than the hotel. */
		airportShuttle: FormControl<boolean | null | undefined>,

		/** Airport shuttle exception. */
		airportShuttleException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Car rental on property. A branch of a rental car company with a processing desk in the hotel. Available cars for rent may be awaiting at the hotel or in a nearby lot. */
		carRentalOnProperty: FormControl<boolean | null | undefined>,

		/** Car rental on property exception. */
		carRentalOnPropertyException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Free airport shuttle. Airport shuttle is free to guests. Must be free to all guests without any conditions. */
		freeAirportShuttle: FormControl<boolean | null | undefined>,

		/** Free airport shuttle exception. */
		freeAirportShuttleException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Free private car service. Private chauffeured car service is free to guests. */
		freePrivateCarService: FormControl<boolean | null | undefined>,

		/** Free private car service exception. */
		freePrivateCarServiceException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Local shuttle. A car, van or bus provided by the hotel to transport guests to destinations within a specified range of distance around the hotel. Usually shopping and/or convention centers, downtown districts, or beaches. Can be free or for a fee. */
		localShuttle: FormControl<boolean | null | undefined>,

		/** Local shuttle exception. */
		localShuttleException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Private car service. Hotel provides a private chauffeured car to transport guests to destinations. Passengers in the car are either alone or are known to one another and have requested the car together. Service can be free or for a fee and travel distance is usually limited to a specific range. Not a taxi. */
		privateCarService: FormControl<boolean | null | undefined>,

		/** Private car service exception. */
		privateCarServiceException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Transfer. Hotel provides a shuttle service or car service to take guests to and from the nearest airport or train station. Can be free or for a fee. Guests may share the vehicle with other guests unknown to them. */
		transfer: FormControl<boolean | null | undefined>,

		/** Transfer exception. */
		transferException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,
	}
	export function CreateTransportationFormGroup() {
		return new FormGroup<TransportationFormProperties>({
			airportShuttle: new FormControl<boolean | null | undefined>(undefined),
			airportShuttleException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			carRentalOnProperty: new FormControl<boolean | null | undefined>(undefined),
			carRentalOnPropertyException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			freeAirportShuttle: new FormControl<boolean | null | undefined>(undefined),
			freeAirportShuttleException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			freePrivateCarService: new FormControl<boolean | null | undefined>(undefined),
			freePrivateCarServiceException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			localShuttle: new FormControl<boolean | null | undefined>(undefined),
			localShuttleException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			privateCarService: new FormControl<boolean | null | undefined>(undefined),
			privateCarServiceException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			transfer: new FormControl<boolean | null | undefined>(undefined),
			transferException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
		});

	}


	/** Guest facilities at the property to promote or maintain health, beauty, and fitness. */
	export interface Wellness {

		/** Doctor on call. The hotel has a contract with a medical professional who provides services to hotel guests should they fall ill during their stay. The doctor may or may not have an on-site office or be at the hotel at all times. */
		doctorOnCall?: boolean | null;

		/** Doctor on call exception. */
		doctorOnCallException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Elliptical machine. An electric, stationary fitness machine with pedals that simulates climbing, walking or running and provides a user-controlled range of speeds and tensions. May not have arm-controlled levers to work out the upper body as well. Commonly found in a gym, fitness room, health center, or health club. */
		ellipticalMachine?: boolean | null;

		/** Elliptical machine exception. */
		ellipticalMachineException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Fitness center. A room or building at the hotel containing equipment to promote physical activity, such as treadmills, elliptical machines, stationary bikes, weight machines, free weights, and/or stretching mats. Use of the fitness center can be free or for a fee. May or may not be staffed. May or may not offer instructor-led classes in various styles of physical conditioning. May or may not be open 24/7. May or may not include locker rooms and showers. Also known as health club, gym, fitness room, health center. */
		fitnessCenter?: boolean | null;

		/** Fitness center exception. */
		fitnessCenterException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Free fitness center. Guests may use the fitness center for free. */
		freeFitnessCenter?: boolean | null;

		/** Free fitness center exception. */
		freeFitnessCenterException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Free weights. Individual handheld fitness equipment of varied weights used for upper body strength training or bodybuilding. Also known as barbells, dumbbells, or kettlebells. Often stored on a rack with the weights arranged from light to heavy. Commonly found in a gym, fitness room, health center, or health club. */
		freeWeights?: boolean | null;

		/** Free weights exception. */
		freeWeightsException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Massage. A service provided by a trained massage therapist involving the physical manipulation of a guest's muscles in order to achieve relaxation or pain relief. */
		massage?: boolean | null;

		/** Massage exception. */
		massageException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Salon. A room at the hotel where professionals provide hair styling services such as shampooing, blow drying, hair dos, hair cutting and hair coloring. Also known as hairdresser or beauty salon. */
		salon?: boolean | null;

		/** Salon exception. */
		salonException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Sauna. A wood-paneled room heated to a high temperature where guests sit on built-in wood benches for the purpose of perspiring and relaxing their muscles. Can be dry or slightly wet heat. Not a steam room. */
		sauna?: boolean | null;

		/** Sauna exception. */
		saunaException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Spa. A designated area, room or building at the hotel offering health and beauty treatment through such means as steam baths, exercise equipment, and massage. May also offer facials, nail care, and hair care. Services are usually available by appointment and for an additional fee. Does not apply if hotel only offers a steam room; must offer other beauty and/or health treatments as well. */
		spa?: boolean | null;

		/** Spa exception. */
		spaException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Treadmill. An electric stationary fitness machine that simulates a moving path to promote walking or running within a range of user-controlled speeds and inclines. Also known as running machine. Commonly found in a gym, fitness room, health center, or health club. */
		treadmill?: boolean | null;

		/** Treadmill exception. */
		treadmillException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Weight machine. Non-electronic fitness equipment designed for the user to target the exertion of different muscles. Usually incorporates a padded seat, a stack of flat weights and various bars and pulleys. May be designed for toning a specific part of the body or may involve different user-controlled settings, hardware and pulleys so as to provide an overall workout in one machine. Commonly found in a gym, fitness center, fitness room, or health club. */
		weightMachine?: boolean | null;

		/** Weight machine exception. */
		weightMachineException?: AccessibilityMobilityAccessibleElevatorException | null;
	}

	/** Guest facilities at the property to promote or maintain health, beauty, and fitness. */
	export interface WellnessFormProperties {

		/** Doctor on call. The hotel has a contract with a medical professional who provides services to hotel guests should they fall ill during their stay. The doctor may or may not have an on-site office or be at the hotel at all times. */
		doctorOnCall: FormControl<boolean | null | undefined>,

		/** Doctor on call exception. */
		doctorOnCallException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Elliptical machine. An electric, stationary fitness machine with pedals that simulates climbing, walking or running and provides a user-controlled range of speeds and tensions. May not have arm-controlled levers to work out the upper body as well. Commonly found in a gym, fitness room, health center, or health club. */
		ellipticalMachine: FormControl<boolean | null | undefined>,

		/** Elliptical machine exception. */
		ellipticalMachineException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Fitness center. A room or building at the hotel containing equipment to promote physical activity, such as treadmills, elliptical machines, stationary bikes, weight machines, free weights, and/or stretching mats. Use of the fitness center can be free or for a fee. May or may not be staffed. May or may not offer instructor-led classes in various styles of physical conditioning. May or may not be open 24/7. May or may not include locker rooms and showers. Also known as health club, gym, fitness room, health center. */
		fitnessCenter: FormControl<boolean | null | undefined>,

		/** Fitness center exception. */
		fitnessCenterException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Free fitness center. Guests may use the fitness center for free. */
		freeFitnessCenter: FormControl<boolean | null | undefined>,

		/** Free fitness center exception. */
		freeFitnessCenterException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Free weights. Individual handheld fitness equipment of varied weights used for upper body strength training or bodybuilding. Also known as barbells, dumbbells, or kettlebells. Often stored on a rack with the weights arranged from light to heavy. Commonly found in a gym, fitness room, health center, or health club. */
		freeWeights: FormControl<boolean | null | undefined>,

		/** Free weights exception. */
		freeWeightsException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Massage. A service provided by a trained massage therapist involving the physical manipulation of a guest's muscles in order to achieve relaxation or pain relief. */
		massage: FormControl<boolean | null | undefined>,

		/** Massage exception. */
		massageException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Salon. A room at the hotel where professionals provide hair styling services such as shampooing, blow drying, hair dos, hair cutting and hair coloring. Also known as hairdresser or beauty salon. */
		salon: FormControl<boolean | null | undefined>,

		/** Salon exception. */
		salonException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Sauna. A wood-paneled room heated to a high temperature where guests sit on built-in wood benches for the purpose of perspiring and relaxing their muscles. Can be dry or slightly wet heat. Not a steam room. */
		sauna: FormControl<boolean | null | undefined>,

		/** Sauna exception. */
		saunaException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Spa. A designated area, room or building at the hotel offering health and beauty treatment through such means as steam baths, exercise equipment, and massage. May also offer facials, nail care, and hair care. Services are usually available by appointment and for an additional fee. Does not apply if hotel only offers a steam room; must offer other beauty and/or health treatments as well. */
		spa: FormControl<boolean | null | undefined>,

		/** Spa exception. */
		spaException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Treadmill. An electric stationary fitness machine that simulates a moving path to promote walking or running within a range of user-controlled speeds and inclines. Also known as running machine. Commonly found in a gym, fitness room, health center, or health club. */
		treadmill: FormControl<boolean | null | undefined>,

		/** Treadmill exception. */
		treadmillException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Weight machine. Non-electronic fitness equipment designed for the user to target the exertion of different muscles. Usually incorporates a padded seat, a stack of flat weights and various bars and pulleys. May be designed for toning a specific part of the body or may involve different user-controlled settings, hardware and pulleys so as to provide an overall workout in one machine. Commonly found in a gym, fitness center, fitness room, or health club. */
		weightMachine: FormControl<boolean | null | undefined>,

		/** Weight machine exception. */
		weightMachineException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,
	}
	export function CreateWellnessFormGroup() {
		return new FormGroup<WellnessFormProperties>({
			doctorOnCall: new FormControl<boolean | null | undefined>(undefined),
			doctorOnCallException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			ellipticalMachine: new FormControl<boolean | null | undefined>(undefined),
			ellipticalMachineException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			fitnessCenter: new FormControl<boolean | null | undefined>(undefined),
			fitnessCenterException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			freeFitnessCenter: new FormControl<boolean | null | undefined>(undefined),
			freeFitnessCenterException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			freeWeights: new FormControl<boolean | null | undefined>(undefined),
			freeWeightsException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			massage: new FormControl<boolean | null | undefined>(undefined),
			massageException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			salon: new FormControl<boolean | null | undefined>(undefined),
			salonException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			sauna: new FormControl<boolean | null | undefined>(undefined),
			saunaException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			spa: new FormControl<boolean | null | undefined>(undefined),
			spaException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			treadmill: new FormControl<boolean | null | undefined>(undefined),
			treadmillException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			weightMachine: new FormControl<boolean | null | undefined>(undefined),
			weightMachineException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
		});

	}


	/** Represents a Location that is present on Google. This can be a location that has been claimed by the user, someone else, or could be unclaimed. */
	export interface GoogleLocation {

		/** A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories. */
		location?: Location;

		/** Resource name of this GoogleLocation, in the format `googleLocations/{googleLocationId}`. */
		name?: string | null;

		/** A URL that will redirect the user to the request admin rights UI. This field is only present if the location has already been claimed by any user, including the current user. */
		requestAdminRightsUrl?: string | null;
	}

	/** Represents a Location that is present on Google. This can be a location that has been claimed by the user, someone else, or could be unclaimed. */
	export interface GoogleLocationFormProperties {

		/** Resource name of this GoogleLocation, in the format `googleLocations/{googleLocationId}`. */
		name: FormControl<string | null | undefined>,

		/** A URL that will redirect the user to the request admin rights UI. This field is only present if the location has already been claimed by any user, including the current user. */
		requestAdminRightsUrl: FormControl<string | null | undefined>,
	}
	export function CreateGoogleLocationFormGroup() {
		return new FormGroup<GoogleLocationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			requestAdminRightsUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a location that was modified by Google. */
	export interface GoogleUpdatedLocation {

		/** The fields that Google updated. */
		diffMask?: string | null;

		/** A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories. */
		location?: Location;
	}

	/** Represents a location that was modified by Google. */
	export interface GoogleUpdatedLocationFormProperties {

		/** The fields that Google updated. */
		diffMask: FormControl<string | null | undefined>,
	}
	export function CreateGoogleUpdatedLocationFormGroup() {
		return new FormGroup<GoogleUpdatedLocationFormProperties>({
			diffMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Health provider attributes linked with this location. */
	export interface HealthProviderAttributes {

		/** Optional. A list of insurance networks accpected by this location. */
		insuranceNetworks?: Array<InsuranceNetwork>;

		/** Required. Google identifier for this location in the form: `accounts/{account_id}/locations/{location_id}/healthProviderAttributes` */
		name?: string | null;
	}

	/** The Health provider attributes linked with this location. */
	export interface HealthProviderAttributesFormProperties {

		/** Required. Google identifier for this location in the form: `accounts/{account_id}/locations/{location_id}/healthProviderAttributes` */
		name: FormControl<string | null | undefined>,
	}
	export function CreateHealthProviderAttributesFormGroup() {
		return new FormGroup<HealthProviderAttributesFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single insurance network. Next id: 5 */
	export interface InsuranceNetwork {

		/** Required. The id of this insurance network generated by Google. */
		networkId?: string | null;

		/** Output only. A map of network display names in requested languages where the language is the key and localized display name is the value. The display name in English is set by default. */
		networkNames?: {[id: string]: string };

		/** Output only. A map of payer display names in requested languages where the language is the key and localized display name is the value. The display name in English is set by default. */
		payerNames?: {[id: string]: string };

		/** Output only. The state of this insurance network. */
		state?: InsuranceNetworkState | null;
	}

	/** A single insurance network. Next id: 5 */
	export interface InsuranceNetworkFormProperties {

		/** Required. The id of this insurance network generated by Google. */
		networkId: FormControl<string | null | undefined>,

		/** Output only. A map of network display names in requested languages where the language is the key and localized display name is the value. The display name in English is set by default. */
		networkNames: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. A map of payer display names in requested languages where the language is the key and localized display name is the value. The display name in English is set by default. */
		payerNames: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The state of this insurance network. */
		state: FormControl<InsuranceNetworkState | null | undefined>,
	}
	export function CreateInsuranceNetworkFormGroup() {
		return new FormGroup<InsuranceNetworkFormProperties>({
			networkId: new FormControl<string | null | undefined>(undefined),
			networkNames: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			payerNames: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			state: new FormControl<InsuranceNetworkState | null | undefined>(undefined),
		});

	}

	export enum InsuranceNetworkState { NETWORK_STATE_UNSPECIFIED = 'NETWORK_STATE_UNSPECIFIED', ACCEPTED = 'ACCEPTED', PENDING_ADD = 'PENDING_ADD', PENDING_DELETE = 'PENDING_DELETE', NOT_ACCEPTED = 'NOT_ACCEPTED' }


	/** Output only. Represents a pending invitation. */
	export interface Invitation {

		/** The resource name for the invitation. */
		name?: string | null;

		/** The invited role on the account. */
		role?: AdminRole | null;

		/** An account is a container for your business's locations. If you are the only user who manages locations for your business, you can use your personal Google Account. To share management of locations with multiple users, [create a business account] (https://support.google.com/business/answer/6085339?ref_topic=6085325). */
		targetAccount?: Account;

		/** Represents a target location for a pending invitation. */
		targetLocation?: TargetLocation;
	}

	/** Output only. Represents a pending invitation. */
	export interface InvitationFormProperties {

		/** The resource name for the invitation. */
		name: FormControl<string | null | undefined>,

		/** The invited role on the account. */
		role: FormControl<AdminRole | null | undefined>,
	}
	export function CreateInvitationFormGroup() {
		return new FormGroup<InvitationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<AdminRole | null | undefined>(undefined),
		});

	}


	/** Represents a target location for a pending invitation. */
	export interface TargetLocation {

		/** The address of the location to which the user is invited. */
		locationAddress?: string | null;

		/** The name of the location to which the user is invited. */
		locationName?: string | null;
	}

	/** Represents a target location for a pending invitation. */
	export interface TargetLocationFormProperties {

		/** The address of the location to which the user is invited. */
		locationAddress: FormControl<string | null | undefined>,

		/** The name of the location to which the user is invited. */
		locationName: FormControl<string | null | undefined>,
	}
	export function CreateTargetLocationFormGroup() {
		return new FormGroup<TargetLocationFormProperties>({
			locationAddress: new FormControl<string | null | undefined>(undefined),
			locationName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for AccessControl.ListAccountAdmins. */
	export interface ListAccountAdminsResponse {

		/** A collection of Admin instances. */
		admins?: Array<Admin>;
	}

	/** Response message for AccessControl.ListAccountAdmins. */
	export interface ListAccountAdminsResponseFormProperties {
	}
	export function CreateListAccountAdminsResponseFormGroup() {
		return new FormGroup<ListAccountAdminsResponseFormProperties>({
		});

	}


	/** Response message for Accounts.ListAccounts. */
	export interface ListAccountsResponse {

		/** A collection of accounts to which the user has access. The personal account of the user doing the query will always be the first item of the result, unless it is filtered out. */
		accounts?: Array<Account>;

		/** If the number of accounts exceeds the requested page size, this field is populated with a token to fetch the next page of accounts on a subsequent call to `accounts.list`. If there are no more accounts, this field is not present in the response. */
		nextPageToken?: string | null;
	}

	/** Response message for Accounts.ListAccounts. */
	export interface ListAccountsResponseFormProperties {

		/** If the number of accounts exceeds the requested page size, this field is populated with a token to fetch the next page of accounts on a subsequent call to `accounts.list`. If there are no more accounts, this field is not present in the response. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAccountsResponseFormGroup() {
		return new FormGroup<ListAccountsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for QuestionsAndAnswers.ListAnswers */
	export interface ListAnswersResponse {

		/** The requested answers. */
		answers?: Array<Answer>;

		/** If the number of answers exceeds the requested max page size, this field is populated with a token to fetch the next page of answers on a subsequent call. If there are no more answers, this field is not present in the response. */
		nextPageToken?: string | null;

		/** The total number of answers posted for this question across all pages. */
		totalSize?: number | null;
	}

	/** Response message for QuestionsAndAnswers.ListAnswers */
	export interface ListAnswersResponseFormProperties {

		/** If the number of answers exceeds the requested max page size, this field is populated with a token to fetch the next page of answers on a subsequent call. If there are no more answers, this field is not present in the response. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The total number of answers posted for this question across all pages. */
		totalSize: FormControl<number | null | undefined>,
	}
	export function CreateListAnswersResponseFormGroup() {
		return new FormGroup<ListAnswersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response message for Locations.ListAttributeMetadata. */
	export interface ListAttributeMetadataResponse {

		/** A collection of attribute metadata for the available attributes. */
		attributes?: Array<AttributeMetadata>;

		/** If the number of attributes exceeded the requested page size, this field will be populated with a token to fetch the next page of attributes on a subsequent call to `attributes.list`. If there are no more attributes, this field will not be present in the response. */
		nextPageToken?: string | null;
	}

	/** Response message for Locations.ListAttributeMetadata. */
	export interface ListAttributeMetadataResponseFormProperties {

		/** If the number of attributes exceeded the requested page size, this field will be populated with a token to fetch the next page of attributes on a subsequent call to `attributes.list`. If there are no more attributes, this field will not be present in the response. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAttributeMetadataResponseFormGroup() {
		return new FormGroup<ListAttributeMetadataResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBusinessCategoriesResponse {

		/** The categories. Categories are BASIC view. They don't contain any ServiceType information. */
		categories?: Array<Category>;

		/** If the number of categories exceeded the requested page size, this field will be populated with a token to fetch the next page of categories on a subsequent call to `ListBusinessCategories`. */
		nextPageToken?: string | null;

		/** The total number of categories for the request parameters. */
		totalCategoryCount?: number | null;
	}
	export interface ListBusinessCategoriesResponseFormProperties {

		/** If the number of categories exceeded the requested page size, this field will be populated with a token to fetch the next page of categories on a subsequent call to `ListBusinessCategories`. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The total number of categories for the request parameters. */
		totalCategoryCount: FormControl<number | null | undefined>,
	}
	export function CreateListBusinessCategoriesResponseFormGroup() {
		return new FormGroup<ListBusinessCategoriesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalCategoryCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response message for Media.ListCustomerMediaItems. */
	export interface ListCustomerMediaItemsResponse {

		/** The returned list of media items. */
		mediaItems?: Array<MediaItem>;

		/** If there are more media items than the requested page size, then this field is populated with a token to fetch the next page of media items on a subsequent call to ListCustomerMediaItems. */
		nextPageToken?: string | null;

		/** The total number of media items for this location, irrespective of pagination. This number is approximate, particularly when there are multiple pages of results. */
		totalMediaItemCount?: number | null;
	}

	/** Response message for Media.ListCustomerMediaItems. */
	export interface ListCustomerMediaItemsResponseFormProperties {

		/** If there are more media items than the requested page size, then this field is populated with a token to fetch the next page of media items on a subsequent call to ListCustomerMediaItems. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The total number of media items for this location, irrespective of pagination. This number is approximate, particularly when there are multiple pages of results. */
		totalMediaItemCount: FormControl<number | null | undefined>,
	}
	export function CreateListCustomerMediaItemsResponseFormGroup() {
		return new FormGroup<ListCustomerMediaItemsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalMediaItemCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A single media item. */
	export interface MediaItem {

		/** Attribution information for customer media items, such as the contributor's name and profile picture. */
		attribution?: Attribution;

		/** Output only. Creation time of this media item. */
		createTime?: string | null;

		/** Reference to the photo binary data of a `MediaItem` uploaded through the Google My Business API. Create a data ref using StartUploadMediaItemData, and use this ref when uploading bytes to [UpdateMedia] and subsequently calling CreateMediaItem. */
		dataRef?: MediaItemDataRef;

		/** Description for this media item. Descriptions cannot be modified through the Google My Business API, but can be set when creating a new media item that is not a cover photo. */
		description?: string | null;

		/** Dimensions of the media item. */
		dimensions?: Dimensions;

		/** Output only. Google-hosted URL for this media item. This URL is not static since it may change over time. For video this will be a preview image with an overlaid play icon. */
		googleUrl?: string | null;

		/** Insights and statistics for the media item. */
		insights?: MediaInsights;

		/** How the media item is associated with its location. */
		locationAssociation?: LocationAssociation;

		/** The format of this media item. Must be set when the media item is created, and is read-only on all other requests. Cannot be updated. */
		mediaFormat?: MediaItemMediaFormat | null;

		/** The resource name for this media item. `accounts/{account_id}/locations/{location_id}/media/{media_key}` */
		name?: string | null;

		/** A publicly accessible URL where the media item can be retrieved from. When creating one of this or data_ref must be set to specify the source of the media item. If `source_url` was used when creating a media item, it will be populated with that source URL when the media item is retrieved. This field cannot be updated. */
		sourceUrl?: string | null;

		/** Output only. Where provided, the URL of a thumbnail image for this media item. */
		thumbnailUrl?: string | null;
	}

	/** A single media item. */
	export interface MediaItemFormProperties {

		/** Output only. Creation time of this media item. */
		createTime: FormControl<string | null | undefined>,

		/** Description for this media item. Descriptions cannot be modified through the Google My Business API, but can be set when creating a new media item that is not a cover photo. */
		description: FormControl<string | null | undefined>,

		/** Output only. Google-hosted URL for this media item. This URL is not static since it may change over time. For video this will be a preview image with an overlaid play icon. */
		googleUrl: FormControl<string | null | undefined>,

		/** The format of this media item. Must be set when the media item is created, and is read-only on all other requests. Cannot be updated. */
		mediaFormat: FormControl<MediaItemMediaFormat | null | undefined>,

		/** The resource name for this media item. `accounts/{account_id}/locations/{location_id}/media/{media_key}` */
		name: FormControl<string | null | undefined>,

		/** A publicly accessible URL where the media item can be retrieved from. When creating one of this or data_ref must be set to specify the source of the media item. If `source_url` was used when creating a media item, it will be populated with that source URL when the media item is retrieved. This field cannot be updated. */
		sourceUrl: FormControl<string | null | undefined>,

		/** Output only. Where provided, the URL of a thumbnail image for this media item. */
		thumbnailUrl: FormControl<string | null | undefined>,
	}
	export function CreateMediaItemFormGroup() {
		return new FormGroup<MediaItemFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			googleUrl: new FormControl<string | null | undefined>(undefined),
			mediaFormat: new FormControl<MediaItemMediaFormat | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sourceUrl: new FormControl<string | null | undefined>(undefined),
			thumbnailUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Reference to the photo binary data of a `MediaItem` uploaded through the Google My Business API. Create a data ref using StartUploadMediaItemData, and use this ref when uploading bytes to [UpdateMedia] and subsequently calling CreateMediaItem. */
	export interface MediaItemDataRef {

		/** The unique ID for this media item's binary data. Used to upload the photo data with [UpdateMedia] and when creating a new media item from those bytes with CreateMediaItem. Example of uploading bytes: `curl -X POST -T{path_to_file} "http://mybusiness.googleapis.com/upload/v1/media/{resource_name}?upload_type=media"` For CreateMediaItem calls, set this as the `MediaItem` `data_ref`. */
		resourceName?: string | null;
	}

	/** Reference to the photo binary data of a `MediaItem` uploaded through the Google My Business API. Create a data ref using StartUploadMediaItemData, and use this ref when uploading bytes to [UpdateMedia] and subsequently calling CreateMediaItem. */
	export interface MediaItemDataRefFormProperties {

		/** The unique ID for this media item's binary data. Used to upload the photo data with [UpdateMedia] and when creating a new media item from those bytes with CreateMediaItem. Example of uploading bytes: `curl -X POST -T{path_to_file} "http://mybusiness.googleapis.com/upload/v1/media/{resource_name}?upload_type=media"` For CreateMediaItem calls, set this as the `MediaItem` `data_ref`. */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateMediaItemDataRefFormGroup() {
		return new FormGroup<MediaItemDataRefFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Insights and statistics for the media item. */
	export interface MediaInsights {

		/** Output only. The number of times the media item has been viewed. */
		viewCount?: string | null;
	}

	/** Insights and statistics for the media item. */
	export interface MediaInsightsFormProperties {

		/** Output only. The number of times the media item has been viewed. */
		viewCount: FormControl<string | null | undefined>,
	}
	export function CreateMediaInsightsFormGroup() {
		return new FormGroup<MediaInsightsFormProperties>({
			viewCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** How the media item is associated with its location. */
	export interface LocationAssociation {

		/** The category that this location photo belongs to. */
		category?: LocationAssociationCategory | null;

		/** The ID of a price list item that this location photo is associated with. */
		priceListItemId?: string | null;
	}

	/** How the media item is associated with its location. */
	export interface LocationAssociationFormProperties {

		/** The category that this location photo belongs to. */
		category: FormControl<LocationAssociationCategory | null | undefined>,

		/** The ID of a price list item that this location photo is associated with. */
		priceListItemId: FormControl<string | null | undefined>,
	}
	export function CreateLocationAssociationFormGroup() {
		return new FormGroup<LocationAssociationFormProperties>({
			category: new FormControl<LocationAssociationCategory | null | undefined>(undefined),
			priceListItemId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LocationAssociationCategory { CATEGORY_UNSPECIFIED = 'CATEGORY_UNSPECIFIED', COVER = 'COVER', PROFILE = 'PROFILE', LOGO = 'LOGO', EXTERIOR = 'EXTERIOR', INTERIOR = 'INTERIOR', PRODUCT = 'PRODUCT', AT_WORK = 'AT_WORK', FOOD_AND_DRINK = 'FOOD_AND_DRINK', MENU = 'MENU', COMMON_AREA = 'COMMON_AREA', ROOMS = 'ROOMS', TEAMS = 'TEAMS', ADDITIONAL = 'ADDITIONAL' }

	export enum MediaItemMediaFormat { MEDIA_FORMAT_UNSPECIFIED = 'MEDIA_FORMAT_UNSPECIFIED', PHOTO = 'PHOTO', VIDEO = 'VIDEO' }


	/** Response message for InsuranceNetworkService.ListInsuranceNetworks */
	export interface ListInsuranceNetworksResponse {

		/** A list of insurance networks that are supported by Google. */
		networks?: Array<InsuranceNetwork>;

		/** If there are more insurance networks than the requested page size, then this field is populated with a token to fetch the next page of insurance networks on a subsequent call to ListInsuranceNetworks. */
		nextPageToken?: string | null;
	}

	/** Response message for InsuranceNetworkService.ListInsuranceNetworks */
	export interface ListInsuranceNetworksResponseFormProperties {

		/** If there are more insurance networks than the requested page size, then this field is populated with a token to fetch the next page of insurance networks on a subsequent call to ListInsuranceNetworks. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListInsuranceNetworksResponseFormGroup() {
		return new FormGroup<ListInsuranceNetworksResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for AccessControl.ListInvitations. */
	export interface ListInvitationsResponse {

		/** A collection of location invitations that are pending for the account. The number of invitations listed here cannot exceed 1000. */
		invitations?: Array<Invitation>;
	}

	/** Response message for AccessControl.ListInvitations. */
	export interface ListInvitationsResponseFormProperties {
	}
	export function CreateListInvitationsResponseFormGroup() {
		return new FormGroup<ListInvitationsResponseFormProperties>({
		});

	}


	/** Response message for ListLocalPosts */
	export interface ListLocalPostsResponse {

		/** The returned list of local posts. */
		localPosts?: Array<LocalPost>;

		/** If there are more local posts than the requested page size, then this field is populated with a token to fetch the next page of local posts on a subsequent call to `ListLocalPosts`. */
		nextPageToken?: string | null;
	}

	/** Response message for ListLocalPosts */
	export interface ListLocalPostsResponseFormProperties {

		/** If there are more local posts than the requested page size, then this field is populated with a token to fetch the next page of local posts on a subsequent call to `ListLocalPosts`. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListLocalPostsResponseFormGroup() {
		return new FormGroup<ListLocalPostsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a [local post](https://support.google.com/business/answer/7662907) for a location. */
	export interface LocalPost {

		/** The type of alert the post is created for. This field is only applicable for posts of topic_type Alert, and behaves as a sub-type of Alerts. */
		alertType?: LocalPostAlertType | null;

		/** An action that is performed when the user clicks through the post */
		callToAction?: CallToAction;

		/** Output only. Time of the creation of the post. */
		createTime?: string | null;

		/** All the information pertaining to an event featured in a local post. */
		event?: LocalPostEvent;

		/** The language of the local post. */
		languageCode?: string | null;

		/** The media associated with the post. source_url is the only supported data field for a LocalPost MediaItem. */
		media?: Array<MediaItem>;

		/** Output only. Google identifier for this local post in the form: `accounts/{account_id}/locations/{location_id}/localPosts/{local_post_id}` */
		name?: string | null;

		/** Specific fields for offer posts. */
		offer?: LocalPostOffer;

		/** Output only. The link to the local post in Google search. This link can be used to share the post via social media, email, text, etc. */
		searchUrl?: string | null;

		/** Output only. The state of the post, indicating what part of its lifecycle it is in. */
		state?: LocalPostState | null;

		/** Description/body of the local post. */
		summary?: string | null;

		/** Required. The topic type of the post: standard, event, offer, or alert. */
		topicType?: LocalPostTopicType | null;

		/** Output only. Time of the last modification of the post made by the user. */
		updateTime?: string | null;
	}

	/** Represents a [local post](https://support.google.com/business/answer/7662907) for a location. */
	export interface LocalPostFormProperties {

		/** The type of alert the post is created for. This field is only applicable for posts of topic_type Alert, and behaves as a sub-type of Alerts. */
		alertType: FormControl<LocalPostAlertType | null | undefined>,

		/** Output only. Time of the creation of the post. */
		createTime: FormControl<string | null | undefined>,

		/** The language of the local post. */
		languageCode: FormControl<string | null | undefined>,

		/** Output only. Google identifier for this local post in the form: `accounts/{account_id}/locations/{location_id}/localPosts/{local_post_id}` */
		name: FormControl<string | null | undefined>,

		/** Output only. The link to the local post in Google search. This link can be used to share the post via social media, email, text, etc. */
		searchUrl: FormControl<string | null | undefined>,

		/** Output only. The state of the post, indicating what part of its lifecycle it is in. */
		state: FormControl<LocalPostState | null | undefined>,

		/** Description/body of the local post. */
		summary: FormControl<string | null | undefined>,

		/** Required. The topic type of the post: standard, event, offer, or alert. */
		topicType: FormControl<LocalPostTopicType | null | undefined>,

		/** Output only. Time of the last modification of the post made by the user. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateLocalPostFormGroup() {
		return new FormGroup<LocalPostFormProperties>({
			alertType: new FormControl<LocalPostAlertType | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			searchUrl: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<LocalPostState | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
			topicType: new FormControl<LocalPostTopicType | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LocalPostAlertType { ALERT_TYPE_UNSPECIFIED = 'ALERT_TYPE_UNSPECIFIED', COVID_19 = 'COVID_19' }


	/** All the information pertaining to an event featured in a local post. */
	export interface LocalPostEvent {

		/** An interval of time, inclusive. It must contain all fields to be valid. */
		schedule?: TimeInterval;

		/** Name of the event. */
		title?: string | null;
	}

	/** All the information pertaining to an event featured in a local post. */
	export interface LocalPostEventFormProperties {

		/** Name of the event. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateLocalPostEventFormGroup() {
		return new FormGroup<LocalPostEventFormProperties>({
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An interval of time, inclusive. It must contain all fields to be valid. */
	export interface TimeInterval {

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`. */
		endDate?: Date;

		/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
		endTime?: TimeOfDay;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`. */
		startDate?: Date;

		/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
		startTime?: TimeOfDay;
	}

	/** An interval of time, inclusive. It must contain all fields to be valid. */
	export interface TimeIntervalFormProperties {
	}
	export function CreateTimeIntervalFormGroup() {
		return new FormGroup<TimeIntervalFormProperties>({
		});

	}


	/** Specific fields for offer posts. */
	export interface LocalPostOffer {

		/** Optional. Offer code that is usable in store or online. */
		couponCode?: string | null;

		/** Optional. Online link to redeem offer. */
		redeemOnlineUrl?: string | null;

		/** Optional. Offer terms and conditions. */
		termsConditions?: string | null;
	}

	/** Specific fields for offer posts. */
	export interface LocalPostOfferFormProperties {

		/** Optional. Offer code that is usable in store or online. */
		couponCode: FormControl<string | null | undefined>,

		/** Optional. Online link to redeem offer. */
		redeemOnlineUrl: FormControl<string | null | undefined>,

		/** Optional. Offer terms and conditions. */
		termsConditions: FormControl<string | null | undefined>,
	}
	export function CreateLocalPostOfferFormGroup() {
		return new FormGroup<LocalPostOfferFormProperties>({
			couponCode: new FormControl<string | null | undefined>(undefined),
			redeemOnlineUrl: new FormControl<string | null | undefined>(undefined),
			termsConditions: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LocalPostState { LOCAL_POST_STATE_UNSPECIFIED = 'LOCAL_POST_STATE_UNSPECIFIED', REJECTED = 'REJECTED', LIVE = 'LIVE', PROCESSING = 'PROCESSING' }

	export enum LocalPostTopicType { LOCAL_POST_TOPIC_TYPE_UNSPECIFIED = 'LOCAL_POST_TOPIC_TYPE_UNSPECIFIED', STANDARD = 'STANDARD', EVENT = 'EVENT', OFFER = 'OFFER', ALERT = 'ALERT' }


	/** Response message for AccessControl.ListLocationAdmins. */
	export interface ListLocationAdminsResponse {

		/** A collection of Admin instances. */
		admins?: Array<Admin>;
	}

	/** Response message for AccessControl.ListLocationAdmins. */
	export interface ListLocationAdminsResponseFormProperties {
	}
	export function CreateListLocationAdminsResponseFormGroup() {
		return new FormGroup<ListLocationAdminsResponseFormProperties>({
		});

	}


	/** Response message for Locations.ListLocations. */
	export interface ListLocationsResponse {

		/** The locations. */
		locations?: Array<Location>;

		/** If the number of locations exceeded the requested page size, this field is populated with a token to fetch the next page of locations on a subsequent call to `ListLocations`. If there are no more locations, this field is not present in the response. */
		nextPageToken?: string | null;

		/** The approximate number of Locations in the list irrespective of pagination. */
		totalSize?: number | null;
	}

	/** Response message for Locations.ListLocations. */
	export interface ListLocationsResponseFormProperties {

		/** If the number of locations exceeded the requested page size, this field is populated with a token to fetch the next page of locations on a subsequent call to `ListLocations`. If there are no more locations, this field is not present in the response. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The approximate number of Locations in the list irrespective of pagination. */
		totalSize: FormControl<number | null | undefined>,
	}
	export function CreateListLocationsResponseFormGroup() {
		return new FormGroup<ListLocationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response message for Media.ListMediaItems. */
	export interface ListMediaItemsResponse {

		/** The returned list of media items. */
		mediaItems?: Array<MediaItem>;

		/** If there are more media items than the requested page size, then this field is populated with a token to fetch the next page of media items on a subsequent call to ListMediaItems. */
		nextPageToken?: string | null;

		/** The total number of media items for this location, irrespective of pagination. */
		totalMediaItemCount?: number | null;
	}

	/** Response message for Media.ListMediaItems. */
	export interface ListMediaItemsResponseFormProperties {

		/** If there are more media items than the requested page size, then this field is populated with a token to fetch the next page of media items on a subsequent call to ListMediaItems. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The total number of media items for this location, irrespective of pagination. */
		totalMediaItemCount: FormControl<number | null | undefined>,
	}
	export function CreateListMediaItemsResponseFormGroup() {
		return new FormGroup<ListMediaItemsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalMediaItemCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response message for QuestionsAndAnswers.ListQuestions */
	export interface ListQuestionsResponse {

		/** If the number of questions exceeds the requested max page size, this field is populated with a token to fetch the next page of questions on a subsequent call. If there are no more questions, this field is not present in the response. */
		nextPageToken?: string | null;

		/** The requested questions, */
		questions?: Array<Question>;

		/** The total number of questions posted for this location across all pages. */
		totalSize?: number | null;
	}

	/** Response message for QuestionsAndAnswers.ListQuestions */
	export interface ListQuestionsResponseFormProperties {

		/** If the number of questions exceeds the requested max page size, this field is populated with a token to fetch the next page of questions on a subsequent call. If there are no more questions, this field is not present in the response. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The total number of questions posted for this location across all pages. */
		totalSize: FormControl<number | null | undefined>,
	}
	export function CreateListQuestionsResponseFormGroup() {
		return new FormGroup<ListQuestionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents a single question and some of its answers. */
	export interface Question {

		/** Represents the author of a question or answer */
		author?: Author;

		/** Output only. The timestamp for when the question was written. */
		createTime?: string | null;

		/** Output only. The unique name for the question. accounts/locations/questions/* */
		name?: string | null;

		/** The text of the question. It should contain at least three words and the total length should be greater than or equal to 10 characters. The maximum length is 4096 characters. */
		text?: string | null;

		/** Output only. A list of answers to the question, sorted by upvotes. This may not be a complete list of answers depending on the request parameters (answers_per_question) */
		topAnswers?: Array<Answer>;

		/** Output only. The total number of answers posted for this question. */
		totalAnswerCount?: number | null;

		/** Output only. The timestamp for when the question was last modified. */
		updateTime?: string | null;

		/** Output only. The number of upvotes for the question. */
		upvoteCount?: number | null;
	}

	/** Represents a single question and some of its answers. */
	export interface QuestionFormProperties {

		/** Output only. The timestamp for when the question was written. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The unique name for the question. accounts/locations/questions/* */
		name: FormControl<string | null | undefined>,

		/** The text of the question. It should contain at least three words and the total length should be greater than or equal to 10 characters. The maximum length is 4096 characters. */
		text: FormControl<string | null | undefined>,

		/** Output only. The total number of answers posted for this question. */
		totalAnswerCount: FormControl<number | null | undefined>,

		/** Output only. The timestamp for when the question was last modified. */
		updateTime: FormControl<string | null | undefined>,

		/** Output only. The number of upvotes for the question. */
		upvoteCount: FormControl<number | null | undefined>,
	}
	export function CreateQuestionFormGroup() {
		return new FormGroup<QuestionFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			totalAnswerCount: new FormControl<number | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			upvoteCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response message for GoogleLocations.ListRecommendedGoogleLocations. It also contains some locations that have been claimed by other Business Profile users since the last time they were recommended to this Business Profile account. */
	export interface ListRecommendedGoogleLocationsResponse {

		/** The locations recommended to a Business Profile account. Each of these represents a GoogleLocation that is present on Maps. The locations are sorted in decreasing order of relevance to the Business Profile account. */
		googleLocations?: Array<GoogleLocation>;

		/** During pagination, if there are more locations available to be fetched in the next page, this field is populated with a token to fetch the next page of locations in a subsequent call. If there are no more locations to be fetched, this field is not present in the response. */
		nextPageToken?: string | null;

		/** The total number of recommended locations for this Business Profile account, irrespective of pagination. */
		totalSize?: number | null;
	}

	/** Response message for GoogleLocations.ListRecommendedGoogleLocations. It also contains some locations that have been claimed by other Business Profile users since the last time they were recommended to this Business Profile account. */
	export interface ListRecommendedGoogleLocationsResponseFormProperties {

		/** During pagination, if there are more locations available to be fetched in the next page, this field is populated with a token to fetch the next page of locations in a subsequent call. If there are no more locations to be fetched, this field is not present in the response. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The total number of recommended locations for this Business Profile account, irrespective of pagination. */
		totalSize: FormControl<number | null | undefined>,
	}
	export function CreateListRecommendedGoogleLocationsResponseFormGroup() {
		return new FormGroup<ListRecommendedGoogleLocationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response message for Reviews.ListReviews. */
	export interface ListReviewsResponse {

		/** The average star rating of all reviews for this location on a scale of 1 to 5, where 5 is the highest rating. */
		averageRating?: number | null;

		/** If the number of reviews exceeded the requested page size, this field is populated with a token to fetch the next page of reviews on a subsequent call to ListReviews. If there are no more reviews, this field is not present in the response. */
		nextPageToken?: string | null;

		/** The reviews. */
		reviews?: Array<Review>;

		/** The total number of reviews for this location. */
		totalReviewCount?: number | null;
	}

	/** Response message for Reviews.ListReviews. */
	export interface ListReviewsResponseFormProperties {

		/** The average star rating of all reviews for this location on a scale of 1 to 5, where 5 is the highest rating. */
		averageRating: FormControl<number | null | undefined>,

		/** If the number of reviews exceeded the requested page size, this field is populated with a token to fetch the next page of reviews on a subsequent call to ListReviews. If there are no more reviews, this field is not present in the response. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The total number of reviews for this location. */
		totalReviewCount: FormControl<number | null | undefined>,
	}
	export function CreateListReviewsResponseFormGroup() {
		return new FormGroup<ListReviewsResponseFormProperties>({
			averageRating: new FormControl<number | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalReviewCount: new FormControl<number | null | undefined>(undefined),
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


	/** All the metrics requested for a Local Post. */
	export interface LocalPostMetrics {
		localPostName?: string | null;

		/** A list of values for the requested metrics. */
		metricValues?: Array<MetricValue>;
	}

	/** All the metrics requested for a Local Post. */
	export interface LocalPostMetricsFormProperties {
		localPostName: FormControl<string | null | undefined>,
	}
	export function CreateLocalPostMetricsFormGroup() {
		return new FormGroup<LocalPostMetricsFormProperties>({
			localPostName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A value for a single Metric from a starting time. */
	export interface MetricValue {

		/** Dimensional values for this metric. */
		dimensionalValues?: Array<DimensionalMetricValue>;

		/** The metric for which the value applies. */
		metric?: MetricRequestMetric | null;

		/** A value for a single metric with a given time dimension. */
		totalValue?: DimensionalMetricValue;
	}

	/** A value for a single Metric from a starting time. */
	export interface MetricValueFormProperties {

		/** The metric for which the value applies. */
		metric: FormControl<MetricRequestMetric | null | undefined>,
	}
	export function CreateMetricValueFormGroup() {
		return new FormGroup<MetricValueFormProperties>({
			metric: new FormControl<MetricRequestMetric | null | undefined>(undefined),
		});

	}


	/** A location indexed with the regions that people usually come from. This is captured by counting how many driving-direction requests to this location are from each region. */
	export interface LocationDrivingDirectionMetrics {

		/** The location resource name this metric value belongs to. */
		locationName?: string | null;

		/** Time zone (IANA timezone IDs, for example, 'Europe/London') of the location. */
		timeZone?: string | null;

		/** Driving-direction requests by source region. By convention, these are sorted by count with at most 10 results. */
		topDirectionSources?: Array<TopDirectionSources>;
	}

	/** A location indexed with the regions that people usually come from. This is captured by counting how many driving-direction requests to this location are from each region. */
	export interface LocationDrivingDirectionMetricsFormProperties {

		/** The location resource name this metric value belongs to. */
		locationName: FormControl<string | null | undefined>,

		/** Time zone (IANA timezone IDs, for example, 'Europe/London') of the location. */
		timeZone: FormControl<string | null | undefined>,
	}
	export function CreateLocationDrivingDirectionMetricsFormGroup() {
		return new FormGroup<LocationDrivingDirectionMetricsFormProperties>({
			locationName: new FormControl<string | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Top regions where driving-direction requests originated from. */
	export interface TopDirectionSources {

		/** The number of days data is aggregated over. */
		dayCount?: number | null;

		/** Regions sorted in descending order by count. */
		regionCounts?: Array<RegionCount>;
	}

	/** Top regions where driving-direction requests originated from. */
	export interface TopDirectionSourcesFormProperties {

		/** The number of days data is aggregated over. */
		dayCount: FormControl<number | null | undefined>,
	}
	export function CreateTopDirectionSourcesFormGroup() {
		return new FormGroup<TopDirectionSourcesFormProperties>({
			dayCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A region with its associated request count. */
	export interface RegionCount {

		/** Number of driving-direction requests from this region. */
		count?: string | null;

		/** Human-readable label for the region. */
		label?: string | null;

		/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this must conform to the WGS84 standard. Values must be within normalized ranges. */
		latlng?: LatLng;
	}

	/** A region with its associated request count. */
	export interface RegionCountFormProperties {

		/** Number of driving-direction requests from this region. */
		count: FormControl<string | null | undefined>,

		/** Human-readable label for the region. */
		label: FormControl<string | null | undefined>,
	}
	export function CreateRegionCountFormGroup() {
		return new FormGroup<RegionCountFormProperties>({
			count: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A series of Metrics and BreakdownMetrics associated with a Location over some time range. */
	export interface LocationMetrics {

		/** The location resource name these values belong to. */
		locationName?: string | null;

		/** A list of values for the requested metrics. */
		metricValues?: Array<MetricValue>;

		/** IANA timezone for the location. */
		timeZone?: string | null;
	}

	/** A series of Metrics and BreakdownMetrics associated with a Location over some time range. */
	export interface LocationMetricsFormProperties {

		/** The location resource name these values belong to. */
		locationName: FormControl<string | null | undefined>,

		/** IANA timezone for the location. */
		timeZone: FormControl<string | null | undefined>,
	}
	export function CreateLocationMetricsFormGroup() {
		return new FormGroup<LocationMetricsFormProperties>({
			locationName: new FormControl<string | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Google Cloud Pub/Sub topic where notifications can be published when a location is updated or has a new review. There will be only one notification settings resource per-account. */
	export interface Notifications {

		/** Output only. The notifications resource name. */
		name?: string | null;

		/** The types of notifications that will be sent to the Cloud Pub/Sub topic. At least one must be specified. To stop receiving notifications entirely, use DeleteNotifications. */
		notificationTypes?: Array<string>;

		/** The Google Cloud Pub/Sub topic that will receive notifications when locations managed by this account are updated. If unset, no notifications will be posted. The account mybusiness-api-pubsub@system.gserviceaccount.com must have at least Publish permissions on the Cloud Pub/Sub topic. */
		topicName?: string | null;
	}

	/** A Google Cloud Pub/Sub topic where notifications can be published when a location is updated or has a new review. There will be only one notification settings resource per-account. */
	export interface NotificationsFormProperties {

		/** Output only. The notifications resource name. */
		name: FormControl<string | null | undefined>,

		/** The Google Cloud Pub/Sub topic that will receive notifications when locations managed by this account are updated. If unset, no notifications will be posted. The account mybusiness-api-pubsub@system.gserviceaccount.com must have at least Publish permissions on the Cloud Pub/Sub topic. */
		topicName: FormControl<string | null | undefined>,
	}
	export function CreateNotificationsFormGroup() {
		return new FormGroup<NotificationsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			topicName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Input for PHONE_CALL/SMS verification. */
	export interface PhoneInput {

		/** The phone number that should be called or be sent SMS to. It must be one of the phone numbers in the eligible options. */
		phoneNumber?: string | null;
	}

	/** Input for PHONE_CALL/SMS verification. */
	export interface PhoneInputFormProperties {

		/** The phone number that should be called or be sent SMS to. It must be one of the phone numbers in the eligible options. */
		phoneNumber: FormControl<string | null | undefined>,
	}
	export function CreatePhoneInputFormGroup() {
		return new FormGroup<PhoneInputFormProperties>({
			phoneNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for reporting a GoogleLocation. */
	export interface ReportGoogleLocationRequest {

		/** Optional. The resource name of the location group that this Google Location is being reported for, in the format `accounts/{account_id}`. */
		locationGroupName?: string | null;

		/** The reason for which the user is reporting this location when the issue is with the location itself. */
		reportReasonBadLocation?: ReportGoogleLocationRequestReportReasonBadLocation | null;

		/** The reason for which the user is reporting this location when the issue is with the recommendation. This report is useful if the location has been recommended to the Business Profile account. */
		reportReasonBadRecommendation?: ReportGoogleLocationRequestReportReasonBadRecommendation | null;

		/** Optional. A text entry for elaborating on the reason for which the user is reporting this location. The maximum length is 512 characters. */
		reportReasonElaboration?: string | null;

		/** Optional. The BCP 47 code of language used in `report_reason_elaboration`. */
		reportReasonLanguageCode?: string | null;
	}

	/** Request message for reporting a GoogleLocation. */
	export interface ReportGoogleLocationRequestFormProperties {

		/** Optional. The resource name of the location group that this Google Location is being reported for, in the format `accounts/{account_id}`. */
		locationGroupName: FormControl<string | null | undefined>,

		/** The reason for which the user is reporting this location when the issue is with the location itself. */
		reportReasonBadLocation: FormControl<ReportGoogleLocationRequestReportReasonBadLocation | null | undefined>,

		/** The reason for which the user is reporting this location when the issue is with the recommendation. This report is useful if the location has been recommended to the Business Profile account. */
		reportReasonBadRecommendation: FormControl<ReportGoogleLocationRequestReportReasonBadRecommendation | null | undefined>,

		/** Optional. A text entry for elaborating on the reason for which the user is reporting this location. The maximum length is 512 characters. */
		reportReasonElaboration: FormControl<string | null | undefined>,

		/** Optional. The BCP 47 code of language used in `report_reason_elaboration`. */
		reportReasonLanguageCode: FormControl<string | null | undefined>,
	}
	export function CreateReportGoogleLocationRequestFormGroup() {
		return new FormGroup<ReportGoogleLocationRequestFormProperties>({
			locationGroupName: new FormControl<string | null | undefined>(undefined),
			reportReasonBadLocation: new FormControl<ReportGoogleLocationRequestReportReasonBadLocation | null | undefined>(undefined),
			reportReasonBadRecommendation: new FormControl<ReportGoogleLocationRequestReportReasonBadRecommendation | null | undefined>(undefined),
			reportReasonElaboration: new FormControl<string | null | undefined>(undefined),
			reportReasonLanguageCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ReportGoogleLocationRequestReportReasonBadLocation { BAD_LOCATION_REASON_UNSPECIFIED = 'BAD_LOCATION_REASON_UNSPECIFIED', NOT_A_LOCATION = 'NOT_A_LOCATION', PERMANENTLY_CLOSED = 'PERMANENTLY_CLOSED', DOES_NOT_EXIST = 'DOES_NOT_EXIST', SPAM = 'SPAM', NOT_A_BUSINESS = 'NOT_A_BUSINESS', MOVED = 'MOVED', DUPLICATE = 'DUPLICATE' }

	export enum ReportGoogleLocationRequestReportReasonBadRecommendation { BAD_RECOMMENDATION_REASON_UNSPECIFIED = 'BAD_RECOMMENDATION_REASON_UNSPECIFIED', NOT_A_STORE_FRONT = 'NOT_A_STORE_FRONT', NOT_PART_OF_SUGGESTED_CHAIN = 'NOT_PART_OF_SUGGESTED_CHAIN', IRRELEVANT = 'IRRELEVANT' }


	/** Request message for Insights.ReportLocalPostInsights */
	export interface ReportLocalPostInsightsRequest {

		/** A request for basic metric insights. */
		basicRequest?: BasicMetricsRequest;

		/** Required. The list of posts for which to fetch insights data. All posts have to belong to the location whose name is specified in the `name` field. */
		localPostNames?: Array<string>;
	}

	/** Request message for Insights.ReportLocalPostInsights */
	export interface ReportLocalPostInsightsRequestFormProperties {
	}
	export function CreateReportLocalPostInsightsRequestFormGroup() {
		return new FormGroup<ReportLocalPostInsightsRequestFormProperties>({
		});

	}


	/** Response message for Insights.ReportLocalPostInsights */
	export interface ReportLocalPostInsightsResponse {

		/** One entry per requested post corresponding to this location. */
		localPostMetrics?: Array<LocalPostMetrics>;
		name?: string | null;

		/** Time zone (IANA timezone IDs, eg, 'Europe/London') of the location. */
		timeZone?: string | null;
	}

	/** Response message for Insights.ReportLocalPostInsights */
	export interface ReportLocalPostInsightsResponseFormProperties {
		name: FormControl<string | null | undefined>,

		/** Time zone (IANA timezone IDs, eg, 'Europe/London') of the location. */
		timeZone: FormControl<string | null | undefined>,
	}
	export function CreateReportLocalPostInsightsResponseFormGroup() {
		return new FormGroup<ReportLocalPostInsightsResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for Insights.ReportLocationInsights. */
	export interface ReportLocationInsightsRequest {

		/** A request for basic metric insights. */
		basicRequest?: BasicMetricsRequest;

		/** A request for driving direction insights. */
		drivingDirectionsRequest?: DrivingDirectionMetricsRequest;

		/** A collection of locations to fetch insights for, specified by their names. */
		locationNames?: Array<string>;
	}

	/** Request message for Insights.ReportLocationInsights. */
	export interface ReportLocationInsightsRequestFormProperties {
	}
	export function CreateReportLocationInsightsRequestFormGroup() {
		return new FormGroup<ReportLocationInsightsRequestFormProperties>({
		});

	}


	/** Response message for `Insights.ReportLocationInsights`. */
	export interface ReportLocationInsightsResponse {

		/** A collection of values for driving direction-related metrics. */
		locationDrivingDirectionMetrics?: Array<LocationDrivingDirectionMetrics>;

		/** A collection of metric values by location. */
		locationMetrics?: Array<LocationMetrics>;
	}

	/** Response message for `Insights.ReportLocationInsights`. */
	export interface ReportLocationInsightsResponseFormProperties {
	}
	export function CreateReportLocationInsightsResponseFormGroup() {
		return new FormGroup<ReportLocationInsightsResponseFormProperties>({
		});

	}


	/** Response message for Locations.SearchChains. */
	export interface SearchChainsResponse {

		/** Chains that match the queried chain_display_name in SearchChainsRequest. If there are no matches, this field will be empty. Results are listed in order of relevance. */
		chains?: Array<Chain>;
	}

	/** Response message for Locations.SearchChains. */
	export interface SearchChainsResponseFormProperties {
	}
	export function CreateSearchChainsResponseFormGroup() {
		return new FormGroup<SearchChainsResponseFormProperties>({
		});

	}


	/** Request message for GoogleLocations.SearchGoogleLocations. */
	export interface SearchGoogleLocationsRequest {

		/** A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories. */
		location?: Location;

		/** Text query to search for. The search results from a query string will be less accurate than if providing an exact location, but can provide more inexact matches. */
		query?: string | null;

		/** The number of matches to return. The default value is 3, with a maximum of 10. Note that latency may increase if more are requested. There is no pagination. */
		resultCount?: number | null;
	}

	/** Request message for GoogleLocations.SearchGoogleLocations. */
	export interface SearchGoogleLocationsRequestFormProperties {

		/** Text query to search for. The search results from a query string will be less accurate than if providing an exact location, but can provide more inexact matches. */
		query: FormControl<string | null | undefined>,

		/** The number of matches to return. The default value is 3, with a maximum of 10. Note that latency may increase if more are requested. There is no pagination. */
		resultCount: FormControl<number | null | undefined>,
	}
	export function CreateSearchGoogleLocationsRequestFormGroup() {
		return new FormGroup<SearchGoogleLocationsRequestFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
			resultCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response message for GoogleLocations.SearchGoogleLocations. */
	export interface SearchGoogleLocationsResponse {

		/** A collection of GoogleLocations that are potential matches to the specified request, listed in order from most to least accuracy. */
		googleLocations?: Array<GoogleLocation>;
	}

	/** Response message for GoogleLocations.SearchGoogleLocations. */
	export interface SearchGoogleLocationsResponseFormProperties {
	}
	export function CreateSearchGoogleLocationsResponseFormGroup() {
		return new FormGroup<SearchGoogleLocationsResponseFormProperties>({
		});

	}


	/** A message that describes a single service item. It is used to describe the type of service that the merchant provides. For example, haircut can be a service. */
	export interface ServiceItem {

		/** Represents a free-form service offered by the merchant. These are services that are not exposed as part of our structure service data. The merchant manually enters the names for of such services via a geomerchant surface. */
		freeFormServiceItem?: FreeFormServiceItem;

		/** Optional. This field decides whether or not the input service is offered by the merchant. */
		isOffered?: boolean | null;

		/** Represents an amount of money with its currency type. */
		price?: Money;

		/** Represents a structured service offered by the merchant. For eg: toilet_installation. */
		structuredServiceItem?: StructuredServiceItem;
	}

	/** A message that describes a single service item. It is used to describe the type of service that the merchant provides. For example, haircut can be a service. */
	export interface ServiceItemFormProperties {

		/** Optional. This field decides whether or not the input service is offered by the merchant. */
		isOffered: FormControl<boolean | null | undefined>,
	}
	export function CreateServiceItemFormGroup() {
		return new FormGroup<ServiceItemFormProperties>({
			isOffered: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents a structured service offered by the merchant. For eg: toilet_installation. */
	export interface StructuredServiceItem {

		/** Optional. Description of structured service item. The character limit is 300. */
		description?: string | null;

		/** Required. The `service_type_id` field is a Google provided unique ID that can be found in `ServiceTypeMetadata`. This information is provided by BatchGetBusinessCategories rpc service. */
		serviceTypeId?: string | null;
	}

	/** Represents a structured service offered by the merchant. For eg: toilet_installation. */
	export interface StructuredServiceItemFormProperties {

		/** Optional. Description of structured service item. The character limit is 300. */
		description: FormControl<string | null | undefined>,

		/** Required. The `service_type_id` field is a Google provided unique ID that can be found in `ServiceTypeMetadata`. This information is provided by BatchGetBusinessCategories rpc service. */
		serviceTypeId: FormControl<string | null | undefined>,
	}
	export function CreateStructuredServiceItemFormGroup() {
		return new FormGroup<StructuredServiceItemFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			serviceTypeId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A service list containing one or more service items. */
	export interface ServiceList {

		/** Required. Google identifier for this location in the form: `accounts/{account_id}/locations/{location_id}/serviceList` */
		name?: string | null;

		/** Service items that are contained within this service list. Duplicated service items will be removed automatically. */
		serviceItems?: Array<ServiceItem>;
	}

	/** A service list containing one or more service items. */
	export interface ServiceListFormProperties {

		/** Required. Google identifier for this location in the form: `accounts/{account_id}/locations/{location_id}/serviceList` */
		name: FormControl<string | null | undefined>,
	}
	export function CreateServiceListFormGroup() {
		return new FormGroup<ServiceListFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for Media.StartUploadMediaItemData. */
	export interface StartUploadMediaItemDataRequest {
	}

	/** Request message for Media.StartUploadMediaItemData. */
	export interface StartUploadMediaItemDataRequestFormProperties {
	}
	export function CreateStartUploadMediaItemDataRequestFormGroup() {
		return new FormGroup<StartUploadMediaItemDataRequestFormProperties>({
		});

	}


	/** Request message for Locations.TransferLocation. */
	export interface TransferLocationRequest {

		/** Name of the account resource to transfer the location to (for example, "accounts/8675309"). */
		toAccount?: string | null;
	}

	/** Request message for Locations.TransferLocation. */
	export interface TransferLocationRequestFormProperties {

		/** Name of the account resource to transfer the location to (for example, "accounts/8675309"). */
		toAccount: FormControl<string | null | undefined>,
	}
	export function CreateTransferLocationRequestFormGroup() {
		return new FormGroup<TransferLocationRequestFormProperties>({
			toAccount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for QuestionsAndAnswers.UpsertAnswer */
	export interface UpsertAnswerRequest {

		/** Represents an answer to a question */
		answer?: Answer;
	}

	/** Request message for QuestionsAndAnswers.UpsertAnswer */
	export interface UpsertAnswerRequestFormProperties {
	}
	export function CreateUpsertAnswerRequestFormGroup() {
		return new FormGroup<UpsertAnswerRequestFormProperties>({
		});

	}


	/** Request message for Verifications.VerifyLocation. */
	export interface VerifyLocationRequest {

		/** Input for ADDRESS verification. */
		addressInput?: AddressInput;

		/** Additional data for service business verification. */
		context?: ServiceBusinessContext;

		/** Input for EMAIL verification. */
		emailInput?: EmailInput;

		/** The BCP 47 language code representing the language that is to be used for the verification process. */
		languageCode?: string | null;

		/** Verification method. */
		method?: VerificationMethod | null;

		/** Input for PHONE_CALL/SMS verification. */
		phoneInput?: PhoneInput;
	}

	/** Request message for Verifications.VerifyLocation. */
	export interface VerifyLocationRequestFormProperties {

		/** The BCP 47 language code representing the language that is to be used for the verification process. */
		languageCode: FormControl<string | null | undefined>,

		/** Verification method. */
		method: FormControl<VerificationMethod | null | undefined>,
	}
	export function CreateVerifyLocationRequestFormGroup() {
		return new FormGroup<VerifyLocationRequestFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<VerificationMethod | null | undefined>(undefined),
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

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the accounts for the authenticated user. This includes all accounts that the user owns, as well as any accounts for which the user has management rights.
		 * Get v4/accounts
		 * @param {string} filter A filter constraining the accounts to return. The response includes only entries that match the filter. If `filter` is empty, then no constraints are applied and all accounts (paginated) are retrieved for the requested account. For example, a request with the filter `type=USER_GROUP` will only return user groups.
		 * @param {string} name The resource name of the account for which the list of directly accessible accounts is to be retrieved. This only makes sense for Organizations and User Groups. If empty, will return `ListAccounts` for the authenticated user.
		 * @param {number} pageSize How many accounts to fetch per page. Default is 20, minimum is 2, and maximum page size is 20.
		 * @param {string} pageToken If specified, the next page of accounts is retrieved. The `pageToken` is returned when a call to `accounts.list` returns more results than can fit into the requested page size.
		 * @return {ListAccountsResponse} Successful response
		 */
		Mybusiness_accounts_list(filter: string | null | undefined, name: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAccountsResponse> {
			return this.http.get<ListAccountsResponse>(this.baseUri + 'v4/accounts?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates an account with the specified name and type under the given parent. - Personal accounts and Organizations cannot be created. - User Groups cannot be created with a Personal account as primary owner. - Location Groups cannot be created with a primary owner of a Personal account if the Personal account is in an Organization. - Location Groups cannot own Location Groups.
		 * Post v4/accounts
		 * @param {string} primaryOwner The resource name of the account which will be the primary owner of the account being created. It should be of the form `accounts/{account_id}/`.
		 * @return {Account} Successful response
		 */
		Mybusiness_accounts_create(primaryOwner: string | null | undefined, requestBody: Account): Observable<Account> {
			return this.http.post<Account>(this.baseUri + 'v4/accounts?primaryOwner=' + (primaryOwner == null ? '' : encodeURIComponent(primaryOwner)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the list of available attributes that would be available for a location with the given primary category and country.
		 * Get v4/attributes
		 * @param {string} categoryId The primary category stable ID to find available attributes.
		 * @param {string} country The ISO 3166-1 alpha-2 country code to find available attributes.
		 * @param {string} languageCode The BCP 47 code of language to get attribute display names in. If this language is not available, they will be provided in English.
		 * @param {string} name Resource name of the location to look up available attributes.
		 * @param {number} pageSize How many attributes to include per page. Default is 200, minimum is 1.
		 * @param {string} pageToken If specified, the next page of attribute metadata is retrieved. The `pageToken` is returned when a call to `attributes.list` returns more results than can fit into the requested page size.
		 * @return {ListAttributeMetadataResponse} Successful response
		 */
		Mybusiness_attributes_list(categoryId: string | null | undefined, country: string | null | undefined, languageCode: string | null | undefined, name: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAttributeMetadataResponse> {
			return this.http.get<ListAttributeMetadataResponse>(this.baseUri + 'v4/attributes?categoryId=' + (categoryId == null ? '' : encodeURIComponent(categoryId)) + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '&languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Returns a list of business categories. Search will match the category name but not the category ID. *Note:* Search only matches the front of a category name (that is, 'food' may return 'Food Court' but not 'Fast Food Restaurant').
		 * Get v4/categories
		 * @param {string} languageCode The BCP 47 code of language. If the language is not available, it will default to English.
		 * @param {number} pageSize How many categories to fetch per page. Default is 100, minimum is 1, and maximum page size is 100.
		 * @param {string} pageToken If specified, the next page of categories will be fetched.
		 * @param {string} regionCode The ISO 3166-1 alpha-2 country code.
		 * @param {string} searchTerm Optional filter string from user.
		 * @param {Mybusiness_categories_listView} view Optional. Specifies which parts to the Category resource should be returned in the response.
		 * @return {ListBusinessCategoriesResponse} Successful response
		 */
		Mybusiness_categories_list(languageCode: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, regionCode: string | null | undefined, searchTerm: string | null | undefined, view: Mybusiness_categories_listView | null | undefined): Observable<ListBusinessCategoriesResponse> {
			return this.http.get<ListBusinessCategoriesResponse>(this.baseUri + 'v4/categories?languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&regionCode=' + (regionCode == null ? '' : encodeURIComponent(regionCode)) + '&searchTerm=' + (searchTerm == null ? '' : encodeURIComponent(searchTerm)) + '&view=' + view, {});
		}

		/**
		 * Returns a list of business categories for the provided language and GConcept ids.
		 * Get v4/categories:batchGet
		 * @param {Array<string>} categoryIds Required. At least one name must be set. The GConcept ids the localized category names should be returned for.
		 * @param {string} languageCode Required. The BCP 47 code of language that the category names should be returned in.
		 * @param {string} regionCode Optional. The ISO 3166-1 alpha-2 country code used to infer non-standard language.
		 * @param {Mybusiness_categories_listView} view Required. Specifies which parts to the Category resource should be returned in the response.
		 * @return {BatchGetBusinessCategoriesResponse} Successful response
		 */
		Mybusiness_categories_batchGet(categoryIds: Array<string> | null | undefined, languageCode: string | null | undefined, regionCode: string | null | undefined, view: Mybusiness_categories_listView | null | undefined): Observable<BatchGetBusinessCategoriesResponse> {
			return this.http.get<BatchGetBusinessCategoriesResponse>(this.baseUri + 'v4/categories:batchGet?' + categoryIds?.map(z => `categoryIds=${encodeURIComponent(z)}`).join('&') + '&languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)) + '&regionCode=' + (regionCode == null ? '' : encodeURIComponent(regionCode)) + '&view=' + view, {});
		}

		/**
		 * Searches the chain based on chain name.
		 * Get v4/chains:search
		 * @param {string} chainDisplayName Search for a chain by its name. Exact/partial/fuzzy/related queries are supported. Examples: "walmart", "wal-mart", "walmmmart", "沃尔玛"
		 * @param {number} resultCount The maximum number of matched chains to return from this query. The default is 10. The maximum possible value is 500.
		 * @return {SearchChainsResponse} Successful response
		 */
		Mybusiness_chains_search(chainDisplayName: string | null | undefined, resultCount: number | null | undefined): Observable<SearchChainsResponse> {
			return this.http.get<SearchChainsResponse>(this.baseUri + 'v4/chains:search?chainDisplayName=' + (chainDisplayName == null ? '' : encodeURIComponent(chainDisplayName)) + '&resultCount=' + resultCount, {});
		}

		/**
		 * Search all of the possible locations that are a match to the specified request.
		 * Post v4/googleLocations:search
		 * @return {SearchGoogleLocationsResponse} Successful response
		 */
		Mybusiness_googleLocations_search(requestBody: SearchGoogleLocationsRequest): Observable<SearchGoogleLocationsResponse> {
			return this.http.post<SearchGoogleLocationsResponse>(this.baseUri + 'v4/googleLocations:search', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a specific question written by the current user.
		 * Delete v4/{name}
		 * @param {string} name The name of the question to delete.
		 * @return {Empty} Successful response
		 */
		Mybusiness_accounts_locations_questions_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v4/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets the specified chain. Returns `NOT_FOUND` if the chain does not exist.
		 * Get v4/{name}
		 * @param {string} name The chain's resource name, in the format `chains/{chain_place_id}`.
		 * @return {Chain} Successful response
		 */
		Mybusiness_chains_get(name: string): Observable<Chain> {
			return this.http.get<Chain>(this.baseUri + 'v4/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates a specific question written by the current user.
		 * Patch v4/{name}
		 * @param {string} name The name of the question to update.
		 * @param {string} updateMask The specific fields to update. If no mask is specified, then this is treated as a full update and all editable fields are set to the values passed in.
		 * @return {Question} Successful response
		 */
		Mybusiness_accounts_locations_questions_patch(name: string, updateMask: string | null | undefined, requestBody: Question): Observable<Question> {
			return this.http.patch<Question>(this.baseUri + 'v4/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the pubsub notification settings for the account informing Business Profile which topic to send pubsub notifications for: - New reviews for locations administered by the account. - Updated reviews for locations administered by the account. - New `GoogleUpdates` for locations administered by the account. An account will only have one notification settings resource, and only one pubsub topic can be set.
		 * Put v4/{name}
		 * @param {string} name The notification settings resource name.
		 * @return {Notifications} Successful response
		 */
		Mybusiness_accounts_updateNotifications(name: string, requestBody: Notifications): Observable<Notifications> {
			return this.http.put<Notifications>(this.baseUri + 'v4/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns insights for a set of local posts associated with a single listing. Which metrics and how they are reported are options specified in the request proto. *Note:* Insight reports are limited to 100 `local_post_names` per call.
		 * Post v4/{name}/localPosts:reportInsights
		 * @param {string} name Required. The name of the location for which to fetch insights.
		 * @return {ReportLocalPostInsightsResponse} Successful response
		 */
		Mybusiness_accounts_locations_localPosts_reportInsights(name: string, requestBody: ReportLocalPostInsightsRequest): Observable<ReportLocalPostInsightsResponse> {
			return this.http.post<ReportLocalPostInsightsResponse>(this.baseUri + 'v4/' + (name == null ? '' : encodeURIComponent(name)) + '/localPosts:reportInsights', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets all of the specified locations in the given account.
		 * Post v4/{name}/locations:batchGet
		 * @param {string} name The name of the account from which to fetch locations.
		 * @return {BatchGetLocationsResponse} Successful response
		 */
		Mybusiness_accounts_locations_batchGet(name: string, requestBody: BatchGetLocationsRequest): Observable<BatchGetLocationsResponse> {
			return this.http.post<BatchGetLocationsResponse>(this.baseUri + 'v4/' + (name == null ? '' : encodeURIComponent(name)) + '/locations:batchGet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the paginated list of reviews for all specified locations. This operation is only valid if the specified locations are verified. *Note:* Reviews are limited to a batch size of 200 `location_names` per call.
		 * Post v4/{name}/locations:batchGetReviews
		 * @param {string} name The name of the account from which to retrieve a list of reviews across multiple locations.
		 * @return {BatchGetReviewsResponse} Successful response
		 */
		Mybusiness_accounts_locations_batchGetReviews(name: string, requestBody: BatchGetReviewsRequest): Observable<BatchGetReviewsResponse> {
			return this.http.post<BatchGetReviewsResponse>(this.baseUri + 'v4/' + (name == null ? '' : encodeURIComponent(name)) + '/locations:batchGetReviews', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a report containing insights on one or more metrics by location. *Note:* Insight reports are limited to a batch size of 10 `location_names` per call.
		 * Post v4/{name}/locations:reportInsights
		 * @param {string} name The account resource name.
		 * @return {ReportLocationInsightsResponse} Successful response
		 */
		Mybusiness_accounts_locations_reportInsights(name: string, requestBody: ReportLocationInsightsRequest): Observable<ReportLocationInsightsResponse> {
			return this.http.post<ReportLocationInsightsResponse>(this.baseUri + 'v4/' + (name == null ? '' : encodeURIComponent(name)) + '/locations:reportInsights', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the response to the specified review. This operation is only valid if the specified location is verified.
		 * Delete v4/{name}/reply
		 * @param {string} name The name of the review reply to delete.
		 * @return {Empty} Successful response
		 */
		Mybusiness_accounts_locations_reviews_deleteReply(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v4/' + (name == null ? '' : encodeURIComponent(name)) + '/reply', {});
		}

		/**
		 * Updates the reply to the specified review. A reply is created if one does not exist. This operation is only valid if the specified location is verified.
		 * Put v4/{name}/reply
		 * @param {string} name The name of the review to respond to.
		 * @return {ReviewReply} Successful response
		 */
		Mybusiness_accounts_locations_reviews_updateReply(name: string, requestBody: ReviewReply): Observable<ReviewReply> {
			return this.http.put<ReviewReply>(this.baseUri + 'v4/' + (name == null ? '' : encodeURIComponent(name)) + '/reply', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Accepts the specified invitation.
		 * Post v4/{name}:accept
		 * @param {string} name The name of the invitation that is being accepted.
		 * @return {Empty} Successful response
		 */
		Mybusiness_accounts_invitations_accept(name: string, requestBody: AcceptInvitationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v4/' + (name == null ? '' : encodeURIComponent(name)) + ':accept', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associates a location to a place ID. Any previous association is overwritten. This operation is only valid if the location is unverified. The association must be valid, that is, it appears in the list of `FindMatchingLocations`.
		 * Post v4/{name}:associate
		 * @param {string} name The resource name of the location to associate.
		 * @return {Empty} Successful response
		 */
		Mybusiness_accounts_locations_associate(name: string, requestBody: AssociateLocationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v4/' + (name == null ? '' : encodeURIComponent(name)) + ':associate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Clears an association between a location and its place ID. This operation is only valid if the location is unverified.
		 * Post v4/{name}:clearAssociation
		 * @param {string} name The resource name of the location to disassociate.
		 * @return {Empty} Successful response
		 */
		Mybusiness_accounts_locations_clearAssociation(name: string, requestBody: ClearLocationAssociationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v4/' + (name == null ? '' : encodeURIComponent(name)) + ':clearAssociation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Completes a `PENDING` verification. It is only necessary for non `AUTO` verification methods. `AUTO` verification request is instantly `VERIFIED` upon creation.
		 * Post v4/{name}:complete
		 * @param {string} name Resource name of the verification to complete.
		 * @return {CompleteVerificationResponse} Successful response
		 */
		Mybusiness_accounts_locations_verifications_complete(name: string, requestBody: CompleteVerificationRequest): Observable<CompleteVerificationResponse> {
			return this.http.post<CompleteVerificationResponse>(this.baseUri + 'v4/' + (name == null ? '' : encodeURIComponent(name)) + ':complete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Declines the specified invitation.
		 * Post v4/{name}:decline
		 * @param {string} name The name of the account invitation that is being declined.
		 * @return {Empty} Successful response
		 */
		Mybusiness_accounts_invitations_decline(name: string, requestBody: DeclineInvitationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v4/' + (name == null ? '' : encodeURIComponent(name)) + ':decline', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Reports all eligible verification options for a location in a specific language.
		 * Post v4/{name}:fetchVerificationOptions
		 * @param {string} name Resource name of the location to verify.
		 * @return {FetchVerificationOptionsResponse} Successful response
		 */
		Mybusiness_accounts_locations_fetchVerificationOptions(name: string, requestBody: FetchVerificationOptionsRequest): Observable<FetchVerificationOptionsResponse> {
			return this.http.post<FetchVerificationOptionsResponse>(this.baseUri + 'v4/' + (name == null ? '' : encodeURIComponent(name)) + ':fetchVerificationOptions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Finds all of the possible locations that are a match to the specified location. This operation is only valid if the location is unverified.
		 * Post v4/{name}:findMatches
		 * @param {string} name The resource name of the location to find matches for.
		 * @return {FindMatchingLocationsResponse} Successful response
		 */
		Mybusiness_accounts_locations_findMatches(name: string, requestBody: FindMatchingLocationsRequest): Observable<FindMatchingLocationsResponse> {
			return this.http.post<FindMatchingLocationsResponse>(this.baseUri + 'v4/' + (name == null ? '' : encodeURIComponent(name)) + ':findMatches', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Generates an account number for this account. The account number is not provisioned when an account is created. Use this request to create an account number when it is required.
		 * Post v4/{name}:generateAccountNumber
		 * @param {string} name The name of the account to generate an account number for.
		 * @return {Account} Successful response
		 */
		Mybusiness_accounts_generateAccountNumber(name: string, requestBody: GenerateAccountNumberRequest): Observable<Account> {
			return this.http.post<Account>(this.baseUri + 'v4/' + (name == null ? '' : encodeURIComponent(name)) + ':generateAccountNumber', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the Google updated Lodging of a specific location.
		 * Get v4/{name}:getGoogleUpdated
		 * @param {string} name Required. Google identifier for this location in the form: `accounts/{account_id}/locations/{location_id}/lodging`
		 * @param {string} readMask Optional. The specific fields to return. If no mask is specified, then it returns the full Lodging (same as "*"). Repeated field items cannot be individually specified.
		 * @return {GetGoogleUpdatedLodgingResponse} Successful response
		 */
		Mybusiness_accounts_locations_lodging_getGoogleUpdated(name: string, readMask: string | null | undefined): Observable<GetGoogleUpdatedLodgingResponse> {
			return this.http.get<GetGoogleUpdatedLodgingResponse>(this.baseUri + 'v4/' + (name == null ? '' : encodeURIComponent(name)) + ':getGoogleUpdated&readMask=' + (readMask == null ? '' : encodeURIComponent(readMask)), {});
		}

		/**
		 * Gets the Google-updated version of the specified location. Returns `NOT_FOUND` if the location does not exist.
		 * Get v4/{name}:googleUpdated
		 * @param {string} name The name of the location to fetch.
		 * @return {GoogleUpdatedLocation} Successful response
		 */
		Mybusiness_accounts_locations_getGoogleUpdated(name: string): Observable<GoogleUpdatedLocation> {
			return this.http.get<GoogleUpdatedLocation>(this.baseUri + 'v4/' + (name == null ? '' : encodeURIComponent(name)) + ':googleUpdated', {});
		}

		/**
		 * List all the GoogleLocations that have been recommended to the specified Business Profile account. Recommendations are provided for personal accounts and location groups only, requests for all other account types will result in an error. The recommendations for location groups are based on the locations in that group. The recommendations for personal accounts are based on all of the locations that the user has access to on Business Profile (which includes locations they can access through location groups), and is a superset of all recommendations generated for the user.
		 * Get v4/{name}:recommendGoogleLocations
		 * @param {string} name Name of the account resource to fetch recommended Google locations for.
		 * @param {number} pageSize How many locations to fetch per page. Default is 25, minimum is 1, and maximum page size is 100.
		 * @param {string} pageToken If specified, the next page of locations is retrieved.
		 * @return {ListRecommendedGoogleLocationsResponse} Successful response
		 */
		Mybusiness_accounts_listRecommendGoogleLocations(name: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListRecommendedGoogleLocationsResponse> {
			return this.http.get<ListRecommendedGoogleLocationsResponse>(this.baseUri + 'v4/' + (name == null ? '' : encodeURIComponent(name)) + ':recommendGoogleLocations&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Report a GoogleLocation.
		 * Post v4/{name}:report
		 * @param {string} name Resource name of a [GoogleLocation], in the format `googleLocations/{googleLocationId}`.
		 * @return {Empty} Successful response
		 */
		Mybusiness_googleLocations_report(name: string, requestBody: ReportGoogleLocationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v4/' + (name == null ? '' : encodeURIComponent(name)) + ':report', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Moves a location from an account that the user owns to another account that the same user administers. The user must be an owner of the account the location is currently associated with and must also be at least a manager of the destination account. Returns the Location with its new resource name.
		 * Post v4/{name}:transfer
		 * @param {string} name The name of the location to transfer.
		 * @return {Location} Successful response
		 */
		Mybusiness_accounts_locations_transfer(name: string, requestBody: TransferLocationRequest): Observable<Location> {
			return this.http.post<Location>(this.baseUri + 'v4/' + (name == null ? '' : encodeURIComponent(name)) + ':transfer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts the verification process for a location.
		 * Post v4/{name}:verify
		 * @param {string} name Resource name of the location to verify.
		 * @return {VerifyLocationResponse} Successful response
		 */
		Mybusiness_accounts_locations_verify(name: string, requestBody: VerifyLocationRequest): Observable<VerifyLocationResponse> {
			return this.http.post<VerifyLocationResponse>(this.baseUri + 'v4/' + (name == null ? '' : encodeURIComponent(name)) + ':verify', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all of the admins for the specified location.
		 * Get v4/{parent}/admins
		 * @param {string} parent The name of the location to list admins of.
		 * @return {ListLocationAdminsResponse} Successful response
		 */
		Mybusiness_accounts_locations_admins_list(parent: string): Observable<ListLocationAdminsResponse> {
			return this.http.get<ListLocationAdminsResponse>(this.baseUri + 'v4/' + (parent == null ? '' : encodeURIComponent(parent)) + '/admins', {});
		}

		/**
		 * Invites the specified user to become an administrator for the specified location. The invitee must accept the invitation in order to be granted access to the location. See AcceptInvitation to programmatically accept an invitation.
		 * Post v4/{parent}/admins
		 * @param {string} parent The resource name of the location this admin is created for.
		 * @return {Admin} Successful response
		 */
		Mybusiness_accounts_locations_admins_create(parent: string, requestBody: Admin): Observable<Admin> {
			return this.http.post<Admin>(this.baseUri + 'v4/' + (parent == null ? '' : encodeURIComponent(parent)) + '/admins', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the paginated list of answers for a specified question.
		 * Get v4/{parent}/answers
		 * @param {string} parent The name of the question to fetch answers for.
		 * @param {string} orderBy The order to return the answers. Valid options include 'update_time desc' and 'upvote_count desc', which will return the answers sorted descendingly by the requested field. The default sort order is 'update_time desc'.
		 * @param {number} pageSize How many answers to fetch per page. The default and maximum `page_size` values are 10.
		 * @param {string} pageToken If specified, the next page of answers is retrieved.
		 * @return {ListAnswersResponse} Successful response
		 */
		Mybusiness_accounts_locations_questions_answers_list(parent: string, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAnswersResponse> {
			return this.http.get<ListAnswersResponse>(this.baseUri + 'v4/' + (parent == null ? '' : encodeURIComponent(parent)) + '/answers&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Deletes the answer written by the current user to a question.
		 * Delete v4/{parent}/answers:delete
		 * @param {string} parent The name of the question to delete an answer for.
		 * @return {Empty} Successful response
		 */
		Mybusiness_accounts_locations_questions_answers_delete(parent: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v4/' + (parent == null ? '' : encodeURIComponent(parent)) + '/answers:delete', {});
		}

		/**
		 * Creates an answer or updates the existing answer written by the user for the specified question. A user can only create one answer per question.
		 * Post v4/{parent}/answers:upsert
		 * @param {string} parent The name of the question to write an answer for.
		 * @return {Answer} Successful response
		 */
		Mybusiness_accounts_locations_questions_answers_upsert(parent: string, requestBody: UpsertAnswerRequest): Observable<Answer> {
			return this.http.post<Answer>(this.baseUri + 'v4/' + (parent == null ? '' : encodeURIComponent(parent)) + '/answers:upsert', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all insurance networks supported by Google.
		 * Get v4/{parent}/insuranceNetworks
		 * @param {string} parent Required. The name of the location whose insurance networks will be listed. The name is in the form: accounts/{account_id}/locations/{location_id}
		 * @param {string} languageCode Optional. The BCP 47 code for the language. If a language code is not provided, it defaults to English. Right now only 'en' is supported.
		 * @param {number} pageSize How many insurance networks to return per page. The default value is 5000. Maximum page size is 10000.
		 * @param {string} pageToken If specified, returns the next page of insurance networks.
		 * @return {ListInsuranceNetworksResponse} Successful response
		 */
		Mybusiness_accounts_locations_insuranceNetworks_list(parent: string, languageCode: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListInsuranceNetworksResponse> {
			return this.http.get<ListInsuranceNetworksResponse>(this.baseUri + 'v4/' + (parent == null ? '' : encodeURIComponent(parent)) + '/insuranceNetworks&languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists pending invitations for the specified account.
		 * Get v4/{parent}/invitations
		 * @param {string} parent The name of the account from which the list of invitations is being retrieved.
		 * @param {Mybusiness_accounts_invitations_listTargetType} targetType Specifies which target types should appear in the response.
		 * @return {ListInvitationsResponse} Successful response
		 */
		Mybusiness_accounts_invitations_list(parent: string, targetType: Mybusiness_accounts_invitations_listTargetType | null | undefined): Observable<ListInvitationsResponse> {
			return this.http.get<ListInvitationsResponse>(this.baseUri + 'v4/' + (parent == null ? '' : encodeURIComponent(parent)) + '/invitations&targetType=' + targetType, {});
		}

		/**
		 * Returns a list of local posts associated with a location.
		 * Get v4/{parent}/localPosts
		 * @param {string} parent The name of the location whose local posts will be listed.
		 * @param {number} pageSize How many local posts to return per page. Default of 20. The minimum is 1, and maximum page size is 100.
		 * @param {string} pageToken If specified, returns the next page of local posts.
		 * @return {ListLocalPostsResponse} Successful response
		 */
		Mybusiness_accounts_locations_localPosts_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocalPostsResponse> {
			return this.http.get<ListLocalPostsResponse>(this.baseUri + 'v4/' + (parent == null ? '' : encodeURIComponent(parent)) + '/localPosts&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new local post associated with the specified location, and returns it.
		 * Post v4/{parent}/localPosts
		 * @param {string} parent The name of the location in which to create this local post.
		 * @return {LocalPost} Successful response
		 */
		Mybusiness_accounts_locations_localPosts_create(parent: string, requestBody: LocalPost): Observable<LocalPost> {
			return this.http.post<LocalPost>(this.baseUri + 'v4/' + (parent == null ? '' : encodeURIComponent(parent)) + '/localPosts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the locations for the specified account.
		 * Get v4/{parent}/locations
		 * @param {string} parent The name of the account to fetch locations from. If the Account is of AccountType PERSONAL, only Locations that are directly owned by the Account are returned, otherwise it will return all accessible locations from the Account, either directly or indirectly.
		 * @param {string} filter A filter constraining the locations to return. The response includes only entries that match the filter. If `filter` is empty, then constraints are applied and all locations (paginated) are retrieved for the requested account. For more information about valid fields and example usage, see [Work with Location Data Guide](https://developers.google.com/my-business/content/location-data#filter_results_when_you_list_locations).
		 * @param {string} languageCode The BCP 47 code of language to get display location properties in. If this language is not available, they will be provided in the language of the location. If neither is available, they will be provided in English. Deprecated. After August 15th, 2020, this field will no longer be applied. Instead, the language of the location will always be used.
		 * @param {string} orderBy Sorting order for the request. Multiple fields should be comma-separated, following SQL syntax. The default sorting order is ascending. To specify descending order, a suffix " desc" should be added. Valid fields to order_by are location_name and store_code. For example: "location_name, store_code desc" or "location_name" or "store_code desc"
		 * @param {number} pageSize How many locations to fetch per page. Default is 100, minimum is 1, and maximum page size is 100.
		 * @param {string} pageToken If specified, it fetches the next `page` of locations. The page token is returned by previous calls to `ListLocations` when there were more locations than could fit in the requested page size.
		 * @return {ListLocationsResponse} Successful response
		 */
		Mybusiness_accounts_locations_list(parent: string, filter: string | null | undefined, languageCode: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v4/' + (parent == null ? '' : encodeURIComponent(parent)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new location owned by the specified account, and returns it.
		 * Post v4/{parent}/locations
		 * @param {string} parent The name of the account in which to create this location.
		 * @param {string} requestId A unique request ID for the server to detect duplicated requests. We recommend using UUIDs. Max length is 50 characters.
		 * @param {boolean} validateOnly If true, the request is validated without actually creating the location.
		 * @return {Location} Successful response
		 */
		Mybusiness_accounts_locations_create(parent: string, requestId: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: Location): Observable<Location> {
			return this.http.post<Location>(this.baseUri + 'v4/' + (parent == null ? '' : encodeURIComponent(parent)) + '/locations&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of media items associated with a location.
		 * Get v4/{parent}/media
		 * @param {string} parent The name of the location whose media items will be listed.
		 * @param {number} pageSize How many media items to return per page. The default value is 100, which is also the maximum supported number of media items able to be added to a location with the Google My Business API. Maximum page size is 2500.
		 * @param {string} pageToken If specified, returns the next page of media items.
		 * @return {ListMediaItemsResponse} Successful response
		 */
		Mybusiness_accounts_locations_media_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListMediaItemsResponse> {
			return this.http.get<ListMediaItemsResponse>(this.baseUri + 'v4/' + (parent == null ? '' : encodeURIComponent(parent)) + '/media&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new media item for the location.
		 * Post v4/{parent}/media
		 * @param {string} parent The resource name of the location where this media item will be created.
		 * @return {MediaItem} Successful response
		 */
		Mybusiness_accounts_locations_media_create(parent: string, requestBody: MediaItem): Observable<MediaItem> {
			return this.http.post<MediaItem>(this.baseUri + 'v4/' + (parent == null ? '' : encodeURIComponent(parent)) + '/media', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of media items associated with a location that have been contributed by customers.
		 * Get v4/{parent}/media/customers
		 * @param {string} parent The name of the location whose customer media items will be listed.
		 * @param {number} pageSize How many media items to return per page. The default value is 100, the maximum supported page size is 200.
		 * @param {string} pageToken If specified, returns the next page of media items.
		 * @return {ListCustomerMediaItemsResponse} Successful response
		 */
		Mybusiness_accounts_locations_media_customers_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListCustomerMediaItemsResponse> {
			return this.http.get<ListCustomerMediaItemsResponse>(this.baseUri + 'v4/' + (parent == null ? '' : encodeURIComponent(parent)) + '/media/customers&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Generates a `MediaItemDataRef` for media item uploading.
		 * Post v4/{parent}/media:startUpload
		 * @param {string} parent The resource name of the location this media item is to be added to.
		 * @return {MediaItemDataRef} Successful response
		 */
		Mybusiness_accounts_locations_media_startUpload(parent: string, requestBody: StartUploadMediaItemDataRequest): Observable<MediaItemDataRef> {
			return this.http.post<MediaItemDataRef>(this.baseUri + 'v4/' + (parent == null ? '' : encodeURIComponent(parent)) + '/media:startUpload', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the paginated list of questions and some of its answers for a specified location.
		 * Get v4/{parent}/questions
		 * @param {string} parent The name of the location to fetch questions for.
		 * @param {number} answersPerQuestion How many answers to fetch per question. The default and maximum `answers_per_question` values are 10.
		 * @param {string} filter A filter constraining the questions to return. The only filter currently supported is "ignore_answered=true"
		 * @param {string} orderBy The order to return the questions. Valid options include 'update_time desc' and 'upvote_count desc', which will return the questions sorted descendingly by the requested field. The default sort order is 'update_time desc'.
		 * @param {number} pageSize How many questions to fetch per page. The default and maximum `page_size` values are 10.
		 * @param {string} pageToken If specified, the next page of questions is retrieved.
		 * @return {ListQuestionsResponse} Successful response
		 */
		Mybusiness_accounts_locations_questions_list(parent: string, answersPerQuestion: number | null | undefined, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListQuestionsResponse> {
			return this.http.get<ListQuestionsResponse>(this.baseUri + 'v4/' + (parent == null ? '' : encodeURIComponent(parent)) + '/questions&answersPerQuestion=' + answersPerQuestion + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Adds a question for the specified location.
		 * Post v4/{parent}/questions
		 * @param {string} parent The name of the location to write a question for.
		 * @return {Question} Successful response
		 */
		Mybusiness_accounts_locations_questions_create(parent: string, requestBody: Question): Observable<Question> {
			return this.http.post<Question>(this.baseUri + 'v4/' + (parent == null ? '' : encodeURIComponent(parent)) + '/questions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the paginated list of reviews for the specified location. This operation is only valid if the specified location is verified.
		 * Get v4/{parent}/reviews
		 * @param {string} parent The name of the location to fetch reviews for.
		 * @param {string} orderBy Specifies the field to sort reviews by. If unspecified, the order of reviews returned will default to `update_time desc`. Valid orders to sort by are `rating`, `rating desc` and `update_time desc`.
		 * @param {number} pageSize How many reviews to fetch per page. The maximum `page_size` is 50.
		 * @param {string} pageToken If specified, it fetches the next page of reviews.
		 * @return {ListReviewsResponse} Successful response
		 */
		Mybusiness_accounts_locations_reviews_list(parent: string, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListReviewsResponse> {
			return this.http.get<ListReviewsResponse>(this.baseUri + 'v4/' + (parent == null ? '' : encodeURIComponent(parent)) + '/reviews&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * List verifications of a location, ordered by create time.
		 * Get v4/{parent}/verifications
		 * @param {string} parent Resource name of the location that verification requests belong to.
		 * @param {number} pageSize How many verification to include per page. If not set, return all.
		 * @param {string} pageToken If specified, returns the next page of verifications.
		 * @return {ListVerificationsResponse} Successful response
		 */
		Mybusiness_accounts_locations_verifications_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListVerificationsResponse> {
			return this.http.get<ListVerificationsResponse>(this.baseUri + 'v4/' + (parent == null ? '' : encodeURIComponent(parent)) + '/verifications&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}
	}

	export enum Mybusiness_categories_listView { CATEGORY_VIEW_UNSPECIFIED = 'CATEGORY_VIEW_UNSPECIFIED', BASIC = 'BASIC', FULL = 'FULL' }

	export enum Mybusiness_accounts_invitations_listTargetType { ALL = 'ALL', ACCOUNTS_ONLY = 'ACCOUNTS_ONLY', LOCATIONS_ONLY = 'LOCATIONS_ONLY' }

}

