import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

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


	/** An eco certificate awarded to the hotel. Deprecated: this message is no longer populated. All certification data is now provided by BeCause. */
	export interface EcoCertification {

		/** Whether the eco certificate was awarded or not. */
		awarded?: boolean | null;

		/** Awarded exception. */
		awardedException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Required. The eco certificate. */
		ecoCertificate?: EcoCertificationEcoCertificate | null;
	}

	/** An eco certificate awarded to the hotel. Deprecated: this message is no longer populated. All certification data is now provided by BeCause. */
	export interface EcoCertificationFormProperties {

		/** Whether the eco certificate was awarded or not. */
		awarded: FormControl<boolean | null | undefined>,

		/** Awarded exception. */
		awardedException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Required. The eco certificate. */
		ecoCertificate: FormControl<EcoCertificationEcoCertificate | null | undefined>,
	}
	export function CreateEcoCertificationFormGroup() {
		return new FormGroup<EcoCertificationFormProperties>({
			awarded: new FormControl<boolean | null | undefined>(undefined),
			awardedException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			ecoCertificate: new FormControl<EcoCertificationEcoCertificate | null | undefined>(undefined),
		});

	}

	export enum EcoCertificationEcoCertificate { ECO_CERTIFICATE_UNSPECIFIED = 'ECO_CERTIFICATE_UNSPECIFIED', ISO14001 = 'ISO14001', ISO50001 = 'ISO50001', ASIAN_ECOTOURISM = 'ASIAN_ECOTOURISM', BIOSPHERE_RESPOSNIBLE_TOURISM = 'BIOSPHERE_RESPOSNIBLE_TOURISM', BUREAU_VERITAS = 'BUREAU_VERITAS', CONTROL_UNION = 'CONTROL_UNION', EARTHCHECK = 'EARTHCHECK', ECO_CERTIFICATION_MALTA = 'ECO_CERTIFICATION_MALTA', ECOTOURISM_AUSTRALIAS_ECO = 'ECOTOURISM_AUSTRALIAS_ECO', GREAT_GREEN_DEAL = 'GREAT_GREEN_DEAL', GREEN_GLOBE = 'GREEN_GLOBE', GREEN_GROWTH2050 = 'GREEN_GROWTH2050', GREEN_KEY = 'GREEN_KEY', GREEN_KEY_ECO_RATING = 'GREEN_KEY_ECO_RATING', GREEN_SEAL = 'GREEN_SEAL', GREEN_STAR = 'GREEN_STAR', GREEN_TOURISM_ACTIVE = 'GREEN_TOURISM_ACTIVE', HILTON_LIGHTSTAY = 'HILTON_LIGHTSTAY', HOSTELLING_INTERNATIONALS_QUALITY_AND_SUSTAINABILITY = 'HOSTELLING_INTERNATIONALS_QUALITY_AND_SUSTAINABILITY', HOTELES_MAS_VERDES = 'HOTELES_MAS_VERDES', NORDIC_SWAN_ECOLABEL = 'NORDIC_SWAN_ECOLABEL', PREFERRED_BY_NATURE_SUSTAINABLE_TOURISM = 'PREFERRED_BY_NATURE_SUSTAINABLE_TOURISM', SUSTAINABLE_TRAVEL_IRELAND = 'SUSTAINABLE_TRAVEL_IRELAND', TOF_TIGERS_INITITIVES_PUG = 'TOF_TIGERS_INITITIVES_PUG', TRAVELIFE = 'TRAVELIFE', UNITED_CERTIFICATION_SYSTEMS_LIMITED = 'UNITED_CERTIFICATION_SYSTEMS_LIMITED', VIREO_SRL = 'VIREO_SRL' }


	/** Energy efficiency practices implemented at the hotel. */
	export interface EnergyEfficiency {

		/** Carbon free energy sources. Property sources carbon-free electricity via at least one of the following methods: on-site clean energy generation, power purchase agreement(s) with clean energy generators, green power provided by electricity supplier, or purchases of Energy Attribute Certificates (such as Renewable Energy Certificates or Guarantees of Origin). */
		carbonFreeEnergySources?: boolean | null;

		/** Carbon free energy sources exception. */
		carbonFreeEnergySourcesException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Energy conservation program. The property tracks corporate-level Scope 1 and 2 GHG emissions, and Scope 3 emissions if available. The property has a commitment to implement initiatives that reduce GHG emissions year over year. The property has shown an absolute reduction in emissions for at least 2 years. Emissions are either verfied by a third-party and/or published in external communications. */
		energyConservationProgram?: boolean | null;

		/** Energy conservation program exception. */
		energyConservationProgramException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Energy efficient heating and cooling systems. The property doesn't use chlorofluorocarbon (CFC)-based refrigerants in heating, ventilating, and air-conditioning systems unless a third-party audit shows it's not economically feasible. The CFC-based refrigerants which are used should have a Global Warming Potential (GWP) ≤ 10. The property uses occupancy sensors on HVAC systems in back-of-house spaces, meeting rooms, and other low-traffic areas. */
		energyEfficientHeatingAndCoolingSystems?: boolean | null;

		/** Energy efficient heating and cooling systems exception. */
		energyEfficientHeatingAndCoolingSystemsException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Energy efficient lighting. At least 75% of the property's lighting is energy efficient, using lighting that is more than 45 lumens per watt – typically LED or CFL lightbulbs. */
		energyEfficientLighting?: boolean | null;

		/** Energy efficient lighting exception. */
		energyEfficientLightingException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Energy saving thermostats. The property installed energy-saving thermostats throughout the building to conserve energy when rooms or areas are not in use. Energy-saving thermostats are devices that control heating/cooling in the building by learning temperature preferences and automatically adjusting to energy-saving temperatures as the default. The thermostats are automatically set to a temperature between 68-78 degrees F (20-26 °C), depending on seasonality. In the winter, set the thermostat to 68°F (20°C) when the room is occupied, lowering room temperature when unoccupied. In the summer, set the thermostat to 78°F (26°C) when the room is occupied. */
		energySavingThermostats?: boolean | null;

		/** Energy saving thermostats exception. */
		energySavingThermostatsException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Output only. Green building design. True if the property has been awarded a relevant certification. */
		greenBuildingDesign?: boolean | null;

		/** Output only. Green building design exception. */
		greenBuildingDesignException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Independent organization audits energy use. The property conducts an energy audit at least every 5 years, the results of which are either verified by a third-party and/or published in external communications. An energy audit is a detailed assessment of the facility which provides recommendations to existing operations and procedures to improve energy efficiency, available incentives or rebates,and opportunities for improvements through renovations or upgrades. Examples of organizations that conduct credible third party audits include: Engie Impact, DNV GL (EU), Dexma, and local utility providers (they often provide energy and water audits). */
		independentOrganizationAuditsEnergyUse?: boolean | null;

		/** Independent organization audits energy use exception. */
		independentOrganizationAuditsEnergyUseException?: AccessibilityMobilityAccessibleElevatorException | null;
	}

	/** Energy efficiency practices implemented at the hotel. */
	export interface EnergyEfficiencyFormProperties {

		/** Carbon free energy sources. Property sources carbon-free electricity via at least one of the following methods: on-site clean energy generation, power purchase agreement(s) with clean energy generators, green power provided by electricity supplier, or purchases of Energy Attribute Certificates (such as Renewable Energy Certificates or Guarantees of Origin). */
		carbonFreeEnergySources: FormControl<boolean | null | undefined>,

		/** Carbon free energy sources exception. */
		carbonFreeEnergySourcesException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Energy conservation program. The property tracks corporate-level Scope 1 and 2 GHG emissions, and Scope 3 emissions if available. The property has a commitment to implement initiatives that reduce GHG emissions year over year. The property has shown an absolute reduction in emissions for at least 2 years. Emissions are either verfied by a third-party and/or published in external communications. */
		energyConservationProgram: FormControl<boolean | null | undefined>,

		/** Energy conservation program exception. */
		energyConservationProgramException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Energy efficient heating and cooling systems. The property doesn't use chlorofluorocarbon (CFC)-based refrigerants in heating, ventilating, and air-conditioning systems unless a third-party audit shows it's not economically feasible. The CFC-based refrigerants which are used should have a Global Warming Potential (GWP) ≤ 10. The property uses occupancy sensors on HVAC systems in back-of-house spaces, meeting rooms, and other low-traffic areas. */
		energyEfficientHeatingAndCoolingSystems: FormControl<boolean | null | undefined>,

		/** Energy efficient heating and cooling systems exception. */
		energyEfficientHeatingAndCoolingSystemsException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Energy efficient lighting. At least 75% of the property's lighting is energy efficient, using lighting that is more than 45 lumens per watt – typically LED or CFL lightbulbs. */
		energyEfficientLighting: FormControl<boolean | null | undefined>,

		/** Energy efficient lighting exception. */
		energyEfficientLightingException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Energy saving thermostats. The property installed energy-saving thermostats throughout the building to conserve energy when rooms or areas are not in use. Energy-saving thermostats are devices that control heating/cooling in the building by learning temperature preferences and automatically adjusting to energy-saving temperatures as the default. The thermostats are automatically set to a temperature between 68-78 degrees F (20-26 °C), depending on seasonality. In the winter, set the thermostat to 68°F (20°C) when the room is occupied, lowering room temperature when unoccupied. In the summer, set the thermostat to 78°F (26°C) when the room is occupied. */
		energySavingThermostats: FormControl<boolean | null | undefined>,

		/** Energy saving thermostats exception. */
		energySavingThermostatsException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Output only. Green building design. True if the property has been awarded a relevant certification. */
		greenBuildingDesign: FormControl<boolean | null | undefined>,

		/** Output only. Green building design exception. */
		greenBuildingDesignException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Independent organization audits energy use. The property conducts an energy audit at least every 5 years, the results of which are either verified by a third-party and/or published in external communications. An energy audit is a detailed assessment of the facility which provides recommendations to existing operations and procedures to improve energy efficiency, available incentives or rebates,and opportunities for improvements through renovations or upgrades. Examples of organizations that conduct credible third party audits include: Engie Impact, DNV GL (EU), Dexma, and local utility providers (they often provide energy and water audits). */
		independentOrganizationAuditsEnergyUse: FormControl<boolean | null | undefined>,

		/** Independent organization audits energy use exception. */
		independentOrganizationAuditsEnergyUseException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,
	}
	export function CreateEnergyEfficiencyFormGroup() {
		return new FormGroup<EnergyEfficiencyFormProperties>({
			carbonFreeEnergySources: new FormControl<boolean | null | undefined>(undefined),
			carbonFreeEnergySourcesException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			energyConservationProgram: new FormControl<boolean | null | undefined>(undefined),
			energyConservationProgramException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			energyEfficientHeatingAndCoolingSystems: new FormControl<boolean | null | undefined>(undefined),
			energyEfficientHeatingAndCoolingSystemsException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			energyEfficientLighting: new FormControl<boolean | null | undefined>(undefined),
			energyEfficientLightingException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			energySavingThermostats: new FormControl<boolean | null | undefined>(undefined),
			energySavingThermostatsException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			greenBuildingDesign: new FormControl<boolean | null | undefined>(undefined),
			greenBuildingDesignException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			independentOrganizationAuditsEnergyUse: new FormControl<boolean | null | undefined>(undefined),
			independentOrganizationAuditsEnergyUseException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
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

		/** Kids friendly. The hotel has one or more special features for families with children, such as reduced rates, child-sized beds, kids' club, babysitting service, or suitable place to play on premises. */
		kidsFriendly?: boolean | null;

		/** Kids friendly exception. */
		kidsFriendlyException?: AccessibilityMobilityAccessibleElevatorException | null;
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

		/** Kids friendly. The hotel has one or more special features for families with children, such as reduced rates, child-sized beds, kids' club, babysitting service, or suitable place to play on premises. */
		kidsFriendly: FormControl<boolean | null | undefined>,

		/** Kids friendly exception. */
		kidsFriendlyException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,
	}
	export function CreateFamiliesFormGroup() {
		return new FormGroup<FamiliesFormProperties>({
			babysitting: new FormControl<boolean | null | undefined>(undefined),
			babysittingException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			kidsActivities: new FormControl<boolean | null | undefined>(undefined),
			kidsActivitiesException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			kidsClub: new FormControl<boolean | null | undefined>(undefined),
			kidsClubException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			kidsFriendly: new FormControl<boolean | null | undefined>(undefined),
			kidsFriendlyException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
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

		/** Required. Google identifier for this location in the form: `locations/{location_id}/lodging` */
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

		/** Sustainability practices implemented at the hotel. */
		sustainability?: Sustainability;

		/** Vehicles or vehicular services facilitated or owned by the property. */
		transportation?: Transportation;

		/** Guest facilities at the property to promote or maintain health, beauty, and fitness. */
		wellness?: Wellness;
	}

	/** Lodging of a location that provides accomodations. */
	export interface LodgingFormProperties {

		/** Required. Google identifier for this location in the form: `locations/{location_id}/lodging` */
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
		languagesSpoken?: Array<LanguageSpoken>;

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


	/** Language spoken by at least one staff member. */
	export interface LanguageSpoken {

		/** Required. The BCP-47 language code for the spoken language. Currently accepted codes: ar, de, en, es, fil, fr, hi, id, it, ja, ko, nl, pt, ru, vi, yue, zh. */
		languageCode?: string | null;

		/** At least one member of the staff can speak the language. */
		spoken?: boolean | null;

		/** Spoken exception. */
		spokenException?: AccessibilityMobilityAccessibleElevatorException | null;
	}

	/** Language spoken by at least one staff member. */
	export interface LanguageSpokenFormProperties {

		/** Required. The BCP-47 language code for the spoken language. Currently accepted codes: ar, de, en, es, fil, fr, hi, id, it, ja, ko, nl, pt, ru, vi, yue, zh. */
		languageCode: FormControl<string | null | undefined>,

		/** At least one member of the staff can speak the language. */
		spoken: FormControl<boolean | null | undefined>,

		/** Spoken exception. */
		spokenException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,
	}
	export function CreateLanguageSpokenFormGroup() {
		return new FormGroup<LanguageSpokenFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			spoken: new FormControl<boolean | null | undefined>(undefined),
			spokenException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
		});

	}


	/** Sustainability practices implemented at the hotel. */
	export interface Sustainability {

		/** Energy efficiency practices implemented at the hotel. */
		energyEfficiency?: EnergyEfficiency;

		/** Sustainability certifications the hotel has been awarded. Deprecated: this message is no longer populated. All certification data is now provided by BeCause. */
		sustainabilityCertifications?: SustainabilityCertifications;

		/** Sustainable sourcing practices implemented at the hotel. */
		sustainableSourcing?: SustainableSourcing;

		/** Waste reduction practices implemented at the hotel. */
		wasteReduction?: WasteReduction;

		/** Water conservation practices implemented at the hotel. */
		waterConservation?: WaterConservation;
	}

	/** Sustainability practices implemented at the hotel. */
	export interface SustainabilityFormProperties {
	}
	export function CreateSustainabilityFormGroup() {
		return new FormGroup<SustainabilityFormProperties>({
		});

	}


	/** Sustainability certifications the hotel has been awarded. Deprecated: this message is no longer populated. All certification data is now provided by BeCause. */
	export interface SustainabilityCertifications {

		/** BREEAM certification. */
		breeamCertification?: SustainabilityCertificationsBreeamCertification | null;

		/** BREEAM certification exception. */
		breeamCertificationException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** The eco certificates awarded to the hotel. */
		ecoCertifications?: Array<EcoCertification>;

		/** LEED certification. */
		leedCertification?: SustainabilityCertificationsLeedCertification | null;

		/** LEED certification exception. */
		leedCertificationException?: AccessibilityMobilityAccessibleElevatorException | null;
	}

	/** Sustainability certifications the hotel has been awarded. Deprecated: this message is no longer populated. All certification data is now provided by BeCause. */
	export interface SustainabilityCertificationsFormProperties {

		/** BREEAM certification. */
		breeamCertification: FormControl<SustainabilityCertificationsBreeamCertification | null | undefined>,

		/** BREEAM certification exception. */
		breeamCertificationException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** LEED certification. */
		leedCertification: FormControl<SustainabilityCertificationsLeedCertification | null | undefined>,

		/** LEED certification exception. */
		leedCertificationException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,
	}
	export function CreateSustainabilityCertificationsFormGroup() {
		return new FormGroup<SustainabilityCertificationsFormProperties>({
			breeamCertification: new FormControl<SustainabilityCertificationsBreeamCertification | null | undefined>(undefined),
			breeamCertificationException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			leedCertification: new FormControl<SustainabilityCertificationsLeedCertification | null | undefined>(undefined),
			leedCertificationException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
		});

	}

	export enum SustainabilityCertificationsBreeamCertification { BREEAM_CERTIFICATION_UNSPECIFIED = 'BREEAM_CERTIFICATION_UNSPECIFIED', NO_BREEAM_CERTIFICATION = 'NO_BREEAM_CERTIFICATION', BREEAM_PASS = 'BREEAM_PASS', BREEAM_GOOD = 'BREEAM_GOOD', BREEAM_VERY_GOOD = 'BREEAM_VERY_GOOD', BREEAM_EXCELLENT = 'BREEAM_EXCELLENT', BREEAM_OUTSTANDING = 'BREEAM_OUTSTANDING' }

	export enum SustainabilityCertificationsLeedCertification { LEED_CERTIFICATION_UNSPECIFIED = 'LEED_CERTIFICATION_UNSPECIFIED', NO_LEED_CERTIFICATION = 'NO_LEED_CERTIFICATION', LEED_CERTIFIED = 'LEED_CERTIFIED', LEED_SILVER = 'LEED_SILVER', LEED_GOLD = 'LEED_GOLD', LEED_PLATINUM = 'LEED_PLATINUM' }


	/** Sustainable sourcing practices implemented at the hotel. */
	export interface SustainableSourcing {

		/** Eco friendly toiletries. Soap, shampoo, lotion, and other toiletries provided for guests have a nationally or internationally recognized sustainability certification, such as USDA Organic, EU Organic, or cruelty-free. */
		ecoFriendlyToiletries?: boolean | null;

		/** Eco friendly toiletries exception. */
		ecoFriendlyToiletriesException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Locally sourced food and beverages. Property sources locally in order to lower the environmental footprint from reduced transportation and to stimulate the local economy. Products produced less than 62 miles from the establishment are normally considered as locally produced. */
		locallySourcedFoodAndBeverages?: boolean | null;

		/** Locally sourced food and beverages exception. */
		locallySourcedFoodAndBeveragesException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Organic cage free eggs. The property sources 100% certified organic and cage-free eggs (shell, liquid, and egg products). Cage-free means hens are able to walk, spread their wings and lay their eggs in nests). */
		organicCageFreeEggs?: boolean | null;

		/** Organic cage free eggs exception. */
		organicCageFreeEggsException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Organic food and beverages. At least 25% of food and beverages, by spend, are certified organic. Organic means products that are certified to one of the organic standard listed in the IFOAM family of standards. Qualifying certifications include USDA Organic and EU Organic, among others. */
		organicFoodAndBeverages?: boolean | null;

		/** Organic food and beverages exception. */
		organicFoodAndBeveragesException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Responsible purchasing policy. The property has a responsible procurement policy in place. Responsible means integration of social, ethical, and/or environmental performance factors into the procurement process when selecting suppliers. */
		responsiblePurchasingPolicy?: boolean | null;

		/** Responsible purchasing policy exception. */
		responsiblePurchasingPolicyException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Responsibly sources seafood. The property does not source seafood from the Monterey Bay Aquarium Seafood Watch "avoid" list, and must sustainably source seafood listed as "good alternative," "eco-certified," and "best choice". The property has a policy outlining a commitment to source Marine Stewardship Council (MSC) and/or Aquaculture Stewardship Council (ASC) Chain of Custody certified seafood. */
		responsiblySourcesSeafood?: boolean | null;

		/** Responsibly sources seafood exception. */
		responsiblySourcesSeafoodException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Vegan meals. The property provides vegan menu options for guests. Vegan food does not contain animal products or byproducts. */
		veganMeals?: boolean | null;

		/** Vegan meals exception. */
		veganMealsException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Vegetarian meals. The property provides vegetarian menu options for guests. Vegetarian food does not contain meat, poultry, fish, or seafood. */
		vegetarianMeals?: boolean | null;

		/** Vegetarian meals exception. */
		vegetarianMealsException?: AccessibilityMobilityAccessibleElevatorException | null;
	}

	/** Sustainable sourcing practices implemented at the hotel. */
	export interface SustainableSourcingFormProperties {

		/** Eco friendly toiletries. Soap, shampoo, lotion, and other toiletries provided for guests have a nationally or internationally recognized sustainability certification, such as USDA Organic, EU Organic, or cruelty-free. */
		ecoFriendlyToiletries: FormControl<boolean | null | undefined>,

		/** Eco friendly toiletries exception. */
		ecoFriendlyToiletriesException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Locally sourced food and beverages. Property sources locally in order to lower the environmental footprint from reduced transportation and to stimulate the local economy. Products produced less than 62 miles from the establishment are normally considered as locally produced. */
		locallySourcedFoodAndBeverages: FormControl<boolean | null | undefined>,

		/** Locally sourced food and beverages exception. */
		locallySourcedFoodAndBeveragesException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Organic cage free eggs. The property sources 100% certified organic and cage-free eggs (shell, liquid, and egg products). Cage-free means hens are able to walk, spread their wings and lay their eggs in nests). */
		organicCageFreeEggs: FormControl<boolean | null | undefined>,

		/** Organic cage free eggs exception. */
		organicCageFreeEggsException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Organic food and beverages. At least 25% of food and beverages, by spend, are certified organic. Organic means products that are certified to one of the organic standard listed in the IFOAM family of standards. Qualifying certifications include USDA Organic and EU Organic, among others. */
		organicFoodAndBeverages: FormControl<boolean | null | undefined>,

		/** Organic food and beverages exception. */
		organicFoodAndBeveragesException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Responsible purchasing policy. The property has a responsible procurement policy in place. Responsible means integration of social, ethical, and/or environmental performance factors into the procurement process when selecting suppliers. */
		responsiblePurchasingPolicy: FormControl<boolean | null | undefined>,

		/** Responsible purchasing policy exception. */
		responsiblePurchasingPolicyException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Responsibly sources seafood. The property does not source seafood from the Monterey Bay Aquarium Seafood Watch "avoid" list, and must sustainably source seafood listed as "good alternative," "eco-certified," and "best choice". The property has a policy outlining a commitment to source Marine Stewardship Council (MSC) and/or Aquaculture Stewardship Council (ASC) Chain of Custody certified seafood. */
		responsiblySourcesSeafood: FormControl<boolean | null | undefined>,

		/** Responsibly sources seafood exception. */
		responsiblySourcesSeafoodException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Vegan meals. The property provides vegan menu options for guests. Vegan food does not contain animal products or byproducts. */
		veganMeals: FormControl<boolean | null | undefined>,

		/** Vegan meals exception. */
		veganMealsException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Vegetarian meals. The property provides vegetarian menu options for guests. Vegetarian food does not contain meat, poultry, fish, or seafood. */
		vegetarianMeals: FormControl<boolean | null | undefined>,

		/** Vegetarian meals exception. */
		vegetarianMealsException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,
	}
	export function CreateSustainableSourcingFormGroup() {
		return new FormGroup<SustainableSourcingFormProperties>({
			ecoFriendlyToiletries: new FormControl<boolean | null | undefined>(undefined),
			ecoFriendlyToiletriesException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			locallySourcedFoodAndBeverages: new FormControl<boolean | null | undefined>(undefined),
			locallySourcedFoodAndBeveragesException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			organicCageFreeEggs: new FormControl<boolean | null | undefined>(undefined),
			organicCageFreeEggsException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			organicFoodAndBeverages: new FormControl<boolean | null | undefined>(undefined),
			organicFoodAndBeveragesException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			responsiblePurchasingPolicy: new FormControl<boolean | null | undefined>(undefined),
			responsiblePurchasingPolicyException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			responsiblySourcesSeafood: new FormControl<boolean | null | undefined>(undefined),
			responsiblySourcesSeafoodException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			veganMeals: new FormControl<boolean | null | undefined>(undefined),
			veganMealsException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			vegetarianMeals: new FormControl<boolean | null | undefined>(undefined),
			vegetarianMealsException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
		});

	}


	/** Waste reduction practices implemented at the hotel. */
	export interface WasteReduction {

		/** Compostable food containers and cutlery. 100% of food service containers and to-go cutlery are compostable, and reusable utensils are offered wherever possible. Compostable materials are capable of undergoing biological decomposition in a compost site, such that material is not visually distinguishable and breaks down into carbon dioxide, water, inorganic compounds, and biomass. */
		compostableFoodContainersAndCutlery?: boolean | null;

		/** Compostable food containers and cutlery exception. */
		compostableFoodContainersAndCutleryException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Composts excess food. The property has a program and/or policy for diverting waste from landfill by composting food and yard waste, either through compost collection and off-site processing or on-site compost processing. */
		compostsExcessFood?: boolean | null;

		/** Composts excess food exception. */
		compostsExcessFoodException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Donates excess food. The property has a program and/or policy for diverting waste from landfill that may include efforts to donate for human consumption or divert food for animal feed. */
		donatesExcessFood?: boolean | null;

		/** Donates excess food exception. */
		donatesExcessFoodException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Food waste reduction program. The property has established a food waste reduction and donation program, aiming to reduce food waste by half. These programs typically use tools such as the Hotel Kitchen Toolkit and others to track waste and measure progress. */
		foodWasteReductionProgram?: boolean | null;

		/** Food waste reduction program exception. */
		foodWasteReductionProgramException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** No single use plastic straws. The property bans single-use plastic straws. */
		noSingleUsePlasticStraws?: boolean | null;

		/** No single use plastic straws exception. */
		noSingleUsePlasticStrawsException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** No single use plastic water bottles. The property bans single-use plastic water bottles. */
		noSingleUsePlasticWaterBottles?: boolean | null;

		/** No single use plastic water bottles exception. */
		noSingleUsePlasticWaterBottlesException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** No styrofoam food containers. The property eliminates the use of Styrofoam in disposable food service items. */
		noStyrofoamFoodContainers?: boolean | null;

		/** No styrofoam food containers exception. */
		noStyrofoamFoodContainersException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Recycling program. The property has a recycling program, aligned with LEED waste requirements, and a policy outlining efforts to send less than 50% of waste to landfill. The recycling program includes storage locations for recyclable materials, including mixed paper, corrugated cardboard, glass, plastics, and metals. */
		recyclingProgram?: boolean | null;

		/** Recycling program exception. */
		recyclingProgramException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Refillable toiletry containers. The property has replaced miniature individual containers with refillable amenity dispensers for shampoo, conditioner, soap, and lotion. */
		refillableToiletryContainers?: boolean | null;

		/** Refillable toiletry containers exception. */
		refillableToiletryContainersException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Safely disposes batteries. The property safely stores and disposes batteries. */
		safelyDisposesBatteries?: boolean | null;

		/** Safely disposes batteries exception. */
		safelyDisposesBatteriesException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Safely disposes electronics. The property has a reputable recycling program that keeps hazardous electronic parts and chemical compounds out of landfills, dumps and other unauthorized abandonment sites, and recycles/reuses applicable materials. (e.g. certified electronics recyclers). */
		safelyDisposesElectronics?: boolean | null;

		/** Safely disposes electronics exception. */
		safelyDisposesElectronicsException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Safely disposes lightbulbs. The property safely stores and disposes lightbulbs. */
		safelyDisposesLightbulbs?: boolean | null;

		/** Safely disposes lightbulbs exception. */
		safelyDisposesLightbulbsException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Safely handles hazardous substances. The property has a hazardous waste management program aligned wit GreenSeal and LEED requirements, and meets all regulatory requirements for hazardous waste disposal and recycling. Hazardous means substances that are classified as "hazardous" by an authoritative body (such as OSHA or DOT), are labeled with signal words such as "Danger," "Caution," "Warning," or are flammable, corrosive, or ignitable. Requirements include: - The property shall maintain records of the efforts it has made to replace the hazardous substances it uses with less hazardous alternatives. - An inventory of the hazardous materials stored on-site. - Products intended for cleaning, dishwashing, laundry, and pool maintenance shall be stored in clearly labeled containers. These containers shall be checked regularly for leaks, and replaced a necessary. - Spill containment devices shall be installed to collect spills, drips, or leaching of chemicals. */
		safelyHandlesHazardousSubstances?: boolean | null;

		/** Safely handles hazardous substances exception. */
		safelyHandlesHazardousSubstancesException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Soap donation program. The property participates in a soap donation program such as Clean the World or something similar. */
		soapDonationProgram?: boolean | null;

		/** Soap donation program exception. */
		soapDonationProgramException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Toiletry donation program. The property participates in a toiletry donation program such as Clean the World or something similar. */
		toiletryDonationProgram?: boolean | null;

		/** Toiletry donation program exception. */
		toiletryDonationProgramException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Water bottle filling stations. The property offers water stations throughout the building for guest use. */
		waterBottleFillingStations?: boolean | null;

		/** Water bottle filling stations exception. */
		waterBottleFillingStationsException?: AccessibilityMobilityAccessibleElevatorException | null;
	}

	/** Waste reduction practices implemented at the hotel. */
	export interface WasteReductionFormProperties {

		/** Compostable food containers and cutlery. 100% of food service containers and to-go cutlery are compostable, and reusable utensils are offered wherever possible. Compostable materials are capable of undergoing biological decomposition in a compost site, such that material is not visually distinguishable and breaks down into carbon dioxide, water, inorganic compounds, and biomass. */
		compostableFoodContainersAndCutlery: FormControl<boolean | null | undefined>,

		/** Compostable food containers and cutlery exception. */
		compostableFoodContainersAndCutleryException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Composts excess food. The property has a program and/or policy for diverting waste from landfill by composting food and yard waste, either through compost collection and off-site processing or on-site compost processing. */
		compostsExcessFood: FormControl<boolean | null | undefined>,

		/** Composts excess food exception. */
		compostsExcessFoodException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Donates excess food. The property has a program and/or policy for diverting waste from landfill that may include efforts to donate for human consumption or divert food for animal feed. */
		donatesExcessFood: FormControl<boolean | null | undefined>,

		/** Donates excess food exception. */
		donatesExcessFoodException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Food waste reduction program. The property has established a food waste reduction and donation program, aiming to reduce food waste by half. These programs typically use tools such as the Hotel Kitchen Toolkit and others to track waste and measure progress. */
		foodWasteReductionProgram: FormControl<boolean | null | undefined>,

		/** Food waste reduction program exception. */
		foodWasteReductionProgramException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** No single use plastic straws. The property bans single-use plastic straws. */
		noSingleUsePlasticStraws: FormControl<boolean | null | undefined>,

		/** No single use plastic straws exception. */
		noSingleUsePlasticStrawsException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** No single use plastic water bottles. The property bans single-use plastic water bottles. */
		noSingleUsePlasticWaterBottles: FormControl<boolean | null | undefined>,

		/** No single use plastic water bottles exception. */
		noSingleUsePlasticWaterBottlesException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** No styrofoam food containers. The property eliminates the use of Styrofoam in disposable food service items. */
		noStyrofoamFoodContainers: FormControl<boolean | null | undefined>,

		/** No styrofoam food containers exception. */
		noStyrofoamFoodContainersException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Recycling program. The property has a recycling program, aligned with LEED waste requirements, and a policy outlining efforts to send less than 50% of waste to landfill. The recycling program includes storage locations for recyclable materials, including mixed paper, corrugated cardboard, glass, plastics, and metals. */
		recyclingProgram: FormControl<boolean | null | undefined>,

		/** Recycling program exception. */
		recyclingProgramException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Refillable toiletry containers. The property has replaced miniature individual containers with refillable amenity dispensers for shampoo, conditioner, soap, and lotion. */
		refillableToiletryContainers: FormControl<boolean | null | undefined>,

		/** Refillable toiletry containers exception. */
		refillableToiletryContainersException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Safely disposes batteries. The property safely stores and disposes batteries. */
		safelyDisposesBatteries: FormControl<boolean | null | undefined>,

		/** Safely disposes batteries exception. */
		safelyDisposesBatteriesException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Safely disposes electronics. The property has a reputable recycling program that keeps hazardous electronic parts and chemical compounds out of landfills, dumps and other unauthorized abandonment sites, and recycles/reuses applicable materials. (e.g. certified electronics recyclers). */
		safelyDisposesElectronics: FormControl<boolean | null | undefined>,

		/** Safely disposes electronics exception. */
		safelyDisposesElectronicsException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Safely disposes lightbulbs. The property safely stores and disposes lightbulbs. */
		safelyDisposesLightbulbs: FormControl<boolean | null | undefined>,

		/** Safely disposes lightbulbs exception. */
		safelyDisposesLightbulbsException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Safely handles hazardous substances. The property has a hazardous waste management program aligned wit GreenSeal and LEED requirements, and meets all regulatory requirements for hazardous waste disposal and recycling. Hazardous means substances that are classified as "hazardous" by an authoritative body (such as OSHA or DOT), are labeled with signal words such as "Danger," "Caution," "Warning," or are flammable, corrosive, or ignitable. Requirements include: - The property shall maintain records of the efforts it has made to replace the hazardous substances it uses with less hazardous alternatives. - An inventory of the hazardous materials stored on-site. - Products intended for cleaning, dishwashing, laundry, and pool maintenance shall be stored in clearly labeled containers. These containers shall be checked regularly for leaks, and replaced a necessary. - Spill containment devices shall be installed to collect spills, drips, or leaching of chemicals. */
		safelyHandlesHazardousSubstances: FormControl<boolean | null | undefined>,

		/** Safely handles hazardous substances exception. */
		safelyHandlesHazardousSubstancesException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Soap donation program. The property participates in a soap donation program such as Clean the World or something similar. */
		soapDonationProgram: FormControl<boolean | null | undefined>,

		/** Soap donation program exception. */
		soapDonationProgramException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Toiletry donation program. The property participates in a toiletry donation program such as Clean the World or something similar. */
		toiletryDonationProgram: FormControl<boolean | null | undefined>,

		/** Toiletry donation program exception. */
		toiletryDonationProgramException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Water bottle filling stations. The property offers water stations throughout the building for guest use. */
		waterBottleFillingStations: FormControl<boolean | null | undefined>,

		/** Water bottle filling stations exception. */
		waterBottleFillingStationsException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,
	}
	export function CreateWasteReductionFormGroup() {
		return new FormGroup<WasteReductionFormProperties>({
			compostableFoodContainersAndCutlery: new FormControl<boolean | null | undefined>(undefined),
			compostableFoodContainersAndCutleryException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			compostsExcessFood: new FormControl<boolean | null | undefined>(undefined),
			compostsExcessFoodException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			donatesExcessFood: new FormControl<boolean | null | undefined>(undefined),
			donatesExcessFoodException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			foodWasteReductionProgram: new FormControl<boolean | null | undefined>(undefined),
			foodWasteReductionProgramException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			noSingleUsePlasticStraws: new FormControl<boolean | null | undefined>(undefined),
			noSingleUsePlasticStrawsException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			noSingleUsePlasticWaterBottles: new FormControl<boolean | null | undefined>(undefined),
			noSingleUsePlasticWaterBottlesException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			noStyrofoamFoodContainers: new FormControl<boolean | null | undefined>(undefined),
			noStyrofoamFoodContainersException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			recyclingProgram: new FormControl<boolean | null | undefined>(undefined),
			recyclingProgramException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			refillableToiletryContainers: new FormControl<boolean | null | undefined>(undefined),
			refillableToiletryContainersException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			safelyDisposesBatteries: new FormControl<boolean | null | undefined>(undefined),
			safelyDisposesBatteriesException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			safelyDisposesElectronics: new FormControl<boolean | null | undefined>(undefined),
			safelyDisposesElectronicsException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			safelyDisposesLightbulbs: new FormControl<boolean | null | undefined>(undefined),
			safelyDisposesLightbulbsException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			safelyHandlesHazardousSubstances: new FormControl<boolean | null | undefined>(undefined),
			safelyHandlesHazardousSubstancesException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			soapDonationProgram: new FormControl<boolean | null | undefined>(undefined),
			soapDonationProgramException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			toiletryDonationProgram: new FormControl<boolean | null | undefined>(undefined),
			toiletryDonationProgramException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			waterBottleFillingStations: new FormControl<boolean | null | undefined>(undefined),
			waterBottleFillingStationsException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
		});

	}


	/** Water conservation practices implemented at the hotel. */
	export interface WaterConservation {

		/** Independent organization audits water use. The property conducts a water conservation audit every 5 years, the results of which are either verified by a third-party and/or published in external communications. A water conservation audit is a detailed assessment of the facility, providing recommendations to existing operations and procedures to improve water efficiency, available incentives or rebates, and opportunities for improvements through renovations or upgrades. Examples of organizations who conduct credible third party audits include: Engie Impact, and local utility providers (they often provide energy and water audits). */
		independentOrganizationAuditsWaterUse?: boolean | null;

		/** Independent organization audits water use exception. */
		independentOrganizationAuditsWaterUseException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Linen reuse program. The property offers a linen reuse program. */
		linenReuseProgram?: boolean | null;

		/** Linen reuse program exception. */
		linenReuseProgramException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Towel reuse program. The property offers a towel reuse program. */
		towelReuseProgram?: boolean | null;

		/** Towel reuse program exception. */
		towelReuseProgramException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Water saving showers. All of the property's guest rooms have shower heads that use no more than 2.0 gallons per minute (gpm). */
		waterSavingShowers?: boolean | null;

		/** Water saving showers exception. */
		waterSavingShowersException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Water saving sinks. All of the property's guest rooms have bathroom faucets that use a maximum of 1.5 gallons per minute (gpm), public restroom faucets do not exceed 0.5 gpm, and kitchen faucets (excluding faucets used exclusively for filling operations) do not exceed 2.2 gpm. */
		waterSavingSinks?: boolean | null;

		/** Water saving sinks exception. */
		waterSavingSinksException?: AccessibilityMobilityAccessibleElevatorException | null;

		/** Water saving toilets. All of the property's toilets use 1.6 gallons per flush, or less. */
		waterSavingToilets?: boolean | null;

		/** Water saving toilets exception. */
		waterSavingToiletsException?: AccessibilityMobilityAccessibleElevatorException | null;
	}

	/** Water conservation practices implemented at the hotel. */
	export interface WaterConservationFormProperties {

		/** Independent organization audits water use. The property conducts a water conservation audit every 5 years, the results of which are either verified by a third-party and/or published in external communications. A water conservation audit is a detailed assessment of the facility, providing recommendations to existing operations and procedures to improve water efficiency, available incentives or rebates, and opportunities for improvements through renovations or upgrades. Examples of organizations who conduct credible third party audits include: Engie Impact, and local utility providers (they often provide energy and water audits). */
		independentOrganizationAuditsWaterUse: FormControl<boolean | null | undefined>,

		/** Independent organization audits water use exception. */
		independentOrganizationAuditsWaterUseException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Linen reuse program. The property offers a linen reuse program. */
		linenReuseProgram: FormControl<boolean | null | undefined>,

		/** Linen reuse program exception. */
		linenReuseProgramException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Towel reuse program. The property offers a towel reuse program. */
		towelReuseProgram: FormControl<boolean | null | undefined>,

		/** Towel reuse program exception. */
		towelReuseProgramException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Water saving showers. All of the property's guest rooms have shower heads that use no more than 2.0 gallons per minute (gpm). */
		waterSavingShowers: FormControl<boolean | null | undefined>,

		/** Water saving showers exception. */
		waterSavingShowersException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Water saving sinks. All of the property's guest rooms have bathroom faucets that use a maximum of 1.5 gallons per minute (gpm), public restroom faucets do not exceed 0.5 gpm, and kitchen faucets (excluding faucets used exclusively for filling operations) do not exceed 2.2 gpm. */
		waterSavingSinks: FormControl<boolean | null | undefined>,

		/** Water saving sinks exception. */
		waterSavingSinksException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,

		/** Water saving toilets. All of the property's toilets use 1.6 gallons per flush, or less. */
		waterSavingToilets: FormControl<boolean | null | undefined>,

		/** Water saving toilets exception. */
		waterSavingToiletsException: FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>,
	}
	export function CreateWaterConservationFormGroup() {
		return new FormGroup<WaterConservationFormProperties>({
			independentOrganizationAuditsWaterUse: new FormControl<boolean | null | undefined>(undefined),
			independentOrganizationAuditsWaterUseException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			linenReuseProgram: new FormControl<boolean | null | undefined>(undefined),
			linenReuseProgramException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			towelReuseProgram: new FormControl<boolean | null | undefined>(undefined),
			towelReuseProgramException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			waterSavingShowers: new FormControl<boolean | null | undefined>(undefined),
			waterSavingShowersException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			waterSavingSinks: new FormControl<boolean | null | undefined>(undefined),
			waterSavingSinksException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
			waterSavingToilets: new FormControl<boolean | null | undefined>(undefined),
			waterSavingToiletsException: new FormControl<AccessibilityMobilityAccessibleElevatorException | null | undefined>(undefined),
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

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns the Lodging of a specific location.
		 * Get v1/{name}
		 * @param {string} name Required. Google identifier for this location in the form: `locations/{location_id}/lodging`
		 * @param {string} readMask Required. The specific fields to return. Use "*" to include all fields. Repeated field items cannot be individually specified.
		 * @return {Lodging} Successful response
		 */
		Mybusinesslodging_locations_getLodging(name: string, readMask: string | null | undefined): Observable<Lodging> {
			return this.http.get<Lodging>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&readMask=' + (readMask == null ? '' : encodeURIComponent(readMask)), {});
		}

		/**
		 * Updates the Lodging of a specific location.
		 * Patch v1/{name}
		 * @param {string} name Required. Google identifier for this location in the form: `locations/{location_id}/lodging`
		 * @param {string} updateMask Required. The specific fields to update. Use "*" to update all fields, which may include unsetting empty fields in the request. Repeated field items cannot be individually updated.
		 * @return {Lodging} Successful response
		 */
		Mybusinesslodging_locations_updateLodging(name: string, updateMask: string | null | undefined, requestBody: Lodging): Observable<Lodging> {
			return this.http.patch<Lodging>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the Google updated Lodging of a specific location.
		 * Get v1/{name}:getGoogleUpdated
		 * @param {string} name Required. Google identifier for this location in the form: `locations/{location_id}/lodging`
		 * @param {string} readMask Required. The specific fields to return. Use "*" to include all fields. Repeated field items cannot be individually specified.
		 * @return {GetGoogleUpdatedLodgingResponse} Successful response
		 */
		Mybusinesslodging_locations_lodging_getGoogleUpdated(name: string, readMask: string | null | undefined): Observable<GetGoogleUpdatedLodgingResponse> {
			return this.http.get<GetGoogleUpdatedLodgingResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':getGoogleUpdated&readMask=' + (readMask == null ? '' : encodeURIComponent(readMask)), {});
		}
	}

}

