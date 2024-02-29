import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface API_Status {

		/** Required */
		android: API_Status_App_Version;

		/**
		 * Year of the current FRC season.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		current_season: number;

		/**
		 * An array of strings containing event keys of any active events that are no longer updating.
		 * Required
		 */
		down_events: Array<string>;

		/** Required */
		ios: API_Status_App_Version;

		/**
		 * True if the entire FMS API provided by FIRST is down.
		 * Required
		 */
		is_datafeed_down: boolean;

		/**
		 * Maximum FRC season year for valid queries.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max_season: number;
	}
	export interface API_StatusFormProperties {

		/**
		 * Year of the current FRC season.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		current_season: FormControl<number | null | undefined>,

		/**
		 * True if the entire FMS API provided by FIRST is down.
		 * Required
		 */
		is_datafeed_down: FormControl<boolean | null | undefined>,

		/**
		 * Maximum FRC season year for valid queries.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max_season: FormControl<number | null | undefined>,
	}
	export function CreateAPI_StatusFormGroup() {
		return new FormGroup<API_StatusFormProperties>({
			current_season: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			is_datafeed_down: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			max_season: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface API_Status_App_Version {

		/**
		 * Internal use - Latest application version available.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		latest_app_version: number;

		/**
		 * Internal use - Minimum application version required to correctly connect and process data.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		min_app_version: number;
	}
	export interface API_Status_App_VersionFormProperties {

		/**
		 * Internal use - Latest application version available.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		latest_app_version: FormControl<number | null | undefined>,

		/**
		 * Internal use - Minimum application version required to correctly connect and process data.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		min_app_version: FormControl<number | null | undefined>,
	}
	export function CreateAPI_Status_App_VersionFormGroup() {
		return new FormGroup<API_Status_App_VersionFormProperties>({
			latest_app_version: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			min_app_version: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Award {

		/**
		 * Type of award given. See https://github.com/the-blue-alliance/the-blue-alliance/blob/master/consts/award_type.py#L6
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		award_type: number;

		/**
		 * The event_key of the event the award was won at.
		 * Required
		 */
		event_key: string;

		/**
		 * The name of the award as provided by FIRST. May vary for the same award type.
		 * Required
		 */
		name: string;

		/**
		 * A list of recipients of the award at the event. May have either a team_key or an awardee, both, or neither (in the case the award wasn't awarded at the event).
		 * Required
		 */
		recipient_list: Array<Award_Recipient>;

		/**
		 * The year this award was won.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year: number;
	}
	export interface AwardFormProperties {

		/**
		 * Type of award given. See https://github.com/the-blue-alliance/the-blue-alliance/blob/master/consts/award_type.py#L6
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		award_type: FormControl<number | null | undefined>,

		/**
		 * The event_key of the event the award was won at.
		 * Required
		 */
		event_key: FormControl<string | null | undefined>,

		/**
		 * The name of the award as provided by FIRST. May vary for the same award type.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The year this award was won.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateAwardFormGroup() {
		return new FormGroup<AwardFormProperties>({
			award_type: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			event_key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			year: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An `Award_Recipient` object represents the team and/or person who received an award at an event. */
	export interface Award_Recipient {

		/** The name of the individual given the award. May be null. */
		awardee?: string | null;

		/** The TBA team key for the team that was given the award. May be null. */
		team_key?: string | null;
	}

	/** An `Award_Recipient` object represents the team and/or person who received an award at an event. */
	export interface Award_RecipientFormProperties {

		/** The name of the individual given the award. May be null. */
		awardee: FormControl<string | null | undefined>,

		/** The TBA team key for the team that was given the award. May be null. */
		team_key: FormControl<string | null | undefined>,
	}
	export function CreateAward_RecipientFormGroup() {
		return new FormGroup<Award_RecipientFormProperties>({
			awardee: new FormControl<string | null | undefined>(undefined),
			team_key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface District_List {

		/**
		 * The short identifier for the district.
		 * Required
		 */
		abbreviation: string;

		/**
		 * The long name for the district.
		 * Required
		 */
		display_name: string;

		/**
		 * Key for this district, e.g. `2016ne`.
		 * Required
		 */
		key: string;

		/**
		 * Year this district participated.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year: number;
	}
	export interface District_ListFormProperties {

		/**
		 * The short identifier for the district.
		 * Required
		 */
		abbreviation: FormControl<string | null | undefined>,

		/**
		 * The long name for the district.
		 * Required
		 */
		display_name: FormControl<string | null | undefined>,

		/**
		 * Key for this district, e.g. `2016ne`.
		 * Required
		 */
		key: FormControl<string | null | undefined>,

		/**
		 * Year this district participated.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateDistrict_ListFormGroup() {
		return new FormGroup<District_ListFormProperties>({
			abbreviation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			display_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			year: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Rank of a team in a district. */
	export interface District_Ranking {

		/** List of events that contributed to the point total for the team. */
		District_RankingEvent_points?: Array<District_RankingEvent_points>;

		/**
		 * Total district points for the team.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		point_total: number;

		/**
		 * Numerical rank of the team, 1 being top rank.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rank: number;

		/**
		 * Any points added to a team as a result of the rookie bonus.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rookie_bonus?: number | null;

		/**
		 * TBA team key for the team.
		 * Required
		 */
		team_key: string;
	}

	/** Rank of a team in a district. */
	export interface District_RankingFormProperties {

		/**
		 * Total district points for the team.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		point_total: FormControl<number | null | undefined>,

		/**
		 * Numerical rank of the team, 1 being top rank.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rank: FormControl<number | null | undefined>,

		/**
		 * Any points added to a team as a result of the rookie bonus.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rookie_bonus: FormControl<number | null | undefined>,

		/**
		 * TBA team key for the team.
		 * Required
		 */
		team_key: FormControl<string | null | undefined>,
	}
	export function CreateDistrict_RankingFormGroup() {
		return new FormGroup<District_RankingFormProperties>({
			point_total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			rank: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			rookie_bonus: new FormControl<number | null | undefined>(undefined),
			team_key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface District_RankingEvent_points {

		/**
		 * Points awarded for alliance selection.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		alliance_points: number;

		/**
		 * Points awarded for event awards.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		award_points: number;

		/**
		 * `true` if this event is a District Championship event.
		 * Required
		 */
		district_cmp: boolean;

		/**
		 * Points awarded for elimination match performance.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		elim_points: number;

		/**
		 * TBA Event key for this event.
		 * Required
		 */
		event_key: string;

		/**
		 * Points awarded for qualification match performance.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		qual_points: number;

		/**
		 * Total points awarded at this event.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: number;
	}
	export interface District_RankingEvent_pointsFormProperties {

		/**
		 * Points awarded for alliance selection.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		alliance_points: FormControl<number | null | undefined>,

		/**
		 * Points awarded for event awards.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		award_points: FormControl<number | null | undefined>,

		/**
		 * `true` if this event is a District Championship event.
		 * Required
		 */
		district_cmp: FormControl<boolean | null | undefined>,

		/**
		 * Points awarded for elimination match performance.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		elim_points: FormControl<number | null | undefined>,

		/**
		 * TBA Event key for this event.
		 * Required
		 */
		event_key: FormControl<string | null | undefined>,

		/**
		 * Points awarded for qualification match performance.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		qual_points: FormControl<number | null | undefined>,

		/**
		 * Total points awarded at this event.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateDistrict_RankingEvent_pointsFormGroup() {
		return new FormGroup<District_RankingEvent_pointsFormProperties>({
			alliance_points: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			award_points: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			district_cmp: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			elim_points: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			event_key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			qual_points: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Elimination_Alliance {

		/** Backup team called in, may be null. */
		backup?: Elimination_AllianceBackup;

		/** List of teams that declined the alliance. */
		declines?: Array<string>;

		/** Alliance name, may be null. */
		name?: string | null;

		/**
		 * List of team keys picked for the alliance. First pick is captain.
		 * Required
		 */
		picks: Array<string>;
		status?: Elimination_AllianceStatus;
	}
	export interface Elimination_AllianceFormProperties {

		/** Alliance name, may be null. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateElimination_AllianceFormGroup() {
		return new FormGroup<Elimination_AllianceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Elimination_AllianceBackup {

		/** Team key that was called in as the backup. */
		in?: string | null;

		/** Team key that was replaced by the backup team. */
		out?: string | null;
	}
	export interface Elimination_AllianceBackupFormProperties {

		/** Team key that was called in as the backup. */
		in: FormControl<string | null | undefined>,

		/** Team key that was replaced by the backup team. */
		out: FormControl<string | null | undefined>,
	}
	export function CreateElimination_AllianceBackupFormGroup() {
		return new FormGroup<Elimination_AllianceBackupFormProperties>({
			in: new FormControl<string | null | undefined>(undefined),
			out: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Elimination_AllianceStatus {

		/** A Win-Loss-Tie record for a team, or an alliance. */
		current_level_record?: WLT_Record;
		level?: string | null;

		/** Type: double */
		playoff_average?: number | null;

		/** A Win-Loss-Tie record for a team, or an alliance. */
		record?: WLT_Record;
		status?: string | null;
	}
	export interface Elimination_AllianceStatusFormProperties {
		level: FormControl<string | null | undefined>,

		/** Type: double */
		playoff_average: FormControl<number | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateElimination_AllianceStatusFormGroup() {
		return new FormGroup<Elimination_AllianceStatusFormProperties>({
			level: new FormControl<string | null | undefined>(undefined),
			playoff_average: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Win-Loss-Tie record for a team, or an alliance. */
	export interface WLT_Record {

		/**
		 * Number of losses.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		losses: number;

		/**
		 * Number of ties.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ties: number;

		/**
		 * Number of wins.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		wins: number;
	}

	/** A Win-Loss-Tie record for a team, or an alliance. */
	export interface WLT_RecordFormProperties {

		/**
		 * Number of losses.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		losses: FormControl<number | null | undefined>,

		/**
		 * Number of ties.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ties: FormControl<number | null | undefined>,

		/**
		 * Number of wins.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		wins: FormControl<number | null | undefined>,
	}
	export function CreateWLT_RecordFormGroup() {
		return new FormGroup<WLT_RecordFormProperties>({
			losses: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ties: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			wins: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Event {

		/** Address of the event's venue, if available. */
		address?: string | null;

		/** City, town, village, etc. the event is located in. */
		city?: string | null;

		/** Country the event is located in. */
		country?: string | null;
		district?: District_List;

		/** An array of event keys for the divisions at this event. */
		division_keys?: Array<string>;

		/**
		 * Event end date in `yyyy-mm-dd` format.
		 * Required
		 * Type: DateOnly
		 */
		end_date: Date;

		/**
		 * Event short code, as provided by FIRST.
		 * Required
		 */
		event_code: string;

		/**
		 * Event Type, as defined here: https://github.com/the-blue-alliance/the-blue-alliance/blob/master/consts/event_type.py#L2
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		event_type: number;

		/**
		 * Event Type, eg Regional, District, or Offseason.
		 * Required
		 */
		event_type_string: string;

		/** Public facing event code used by FIRST (on frc-events.firstinspires.org, for example) */
		first_event_code?: string | null;

		/** The FIRST internal Event ID, used to link to the event on the FRC webpage. */
		first_event_id?: string | null;

		/** Google Maps Place ID for the event address. */
		gmaps_place_id?: string | null;

		/** Link to address location on Google Maps. */
		gmaps_url?: string | null;

		/**
		 * TBA event key with the format yyyy[EVENT_CODE], where yyyy is the year, and EVENT_CODE is the event code of the event.
		 * Required
		 */
		key: string;

		/**
		 * Latitude for the event address.
		 * Type: double
		 */
		lat?: number | null;

		/**
		 * Longitude for the event address.
		 * Type: double
		 */
		lng?: number | null;

		/** Name of the location at the address for the event, eg. Blue Alliance High School. */
		location_name?: string | null;

		/**
		 * Official name of event on record either provided by FIRST or organizers of offseason event.
		 * Required
		 */
		name: string;

		/** The TBA Event key that represents the event's parent. Used to link back to the event from a division event. It is also the inverse relation of `divison_keys`. */
		parent_event_key?: string | null;

		/**
		 * Playoff Type, as defined here: https://github.com/the-blue-alliance/the-blue-alliance/blob/master/consts/playoff_type.py#L4, or null.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		playoff_type?: number | null;

		/** String representation of the `playoff_type`, or null. */
		playoff_type_string?: string | null;

		/** Postal code from the event address. */
		postal_code?: string | null;

		/** Same as `name` but doesn't include event specifiers, such as 'Regional' or 'District'. May be null. */
		short_name?: string | null;

		/**
		 * Event start date in `yyyy-mm-dd` format.
		 * Required
		 * Type: DateOnly
		 */
		start_date: Date;

		/** State or Province the event is located in. */
		state_prov?: string | null;

		/** Timezone name. */
		timezone?: string | null;
		webcasts?: Array<Webcast>;

		/** The event's website, if any. */
		website?: string | null;

		/**
		 * Week of the event relative to the first official season event, zero-indexed. Only valid for Regionals, Districts, and District Championships. Null otherwise. (Eg. A season with a week 0 'preseason' event does not count, and week 1 events will show 0 here. Seasons with a week 0.5 regional event will show week 0 for those event(s) and week 1 for week 1 events and so on.)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		week?: number | null;

		/**
		 * Year the event data is for.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year: number;
	}
	export interface EventFormProperties {

		/** Address of the event's venue, if available. */
		address: FormControl<string | null | undefined>,

		/** City, town, village, etc. the event is located in. */
		city: FormControl<string | null | undefined>,

		/** Country the event is located in. */
		country: FormControl<string | null | undefined>,

		/**
		 * Event end date in `yyyy-mm-dd` format.
		 * Required
		 * Type: DateOnly
		 */
		end_date: FormControl<Date | null | undefined>,

		/**
		 * Event short code, as provided by FIRST.
		 * Required
		 */
		event_code: FormControl<string | null | undefined>,

		/**
		 * Event Type, as defined here: https://github.com/the-blue-alliance/the-blue-alliance/blob/master/consts/event_type.py#L2
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		event_type: FormControl<number | null | undefined>,

		/**
		 * Event Type, eg Regional, District, or Offseason.
		 * Required
		 */
		event_type_string: FormControl<string | null | undefined>,

		/** Public facing event code used by FIRST (on frc-events.firstinspires.org, for example) */
		first_event_code: FormControl<string | null | undefined>,

		/** The FIRST internal Event ID, used to link to the event on the FRC webpage. */
		first_event_id: FormControl<string | null | undefined>,

		/** Google Maps Place ID for the event address. */
		gmaps_place_id: FormControl<string | null | undefined>,

		/** Link to address location on Google Maps. */
		gmaps_url: FormControl<string | null | undefined>,

		/**
		 * TBA event key with the format yyyy[EVENT_CODE], where yyyy is the year, and EVENT_CODE is the event code of the event.
		 * Required
		 */
		key: FormControl<string | null | undefined>,

		/**
		 * Latitude for the event address.
		 * Type: double
		 */
		lat: FormControl<number | null | undefined>,

		/**
		 * Longitude for the event address.
		 * Type: double
		 */
		lng: FormControl<number | null | undefined>,

		/** Name of the location at the address for the event, eg. Blue Alliance High School. */
		location_name: FormControl<string | null | undefined>,

		/**
		 * Official name of event on record either provided by FIRST or organizers of offseason event.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The TBA Event key that represents the event's parent. Used to link back to the event from a division event. It is also the inverse relation of `divison_keys`. */
		parent_event_key: FormControl<string | null | undefined>,

		/**
		 * Playoff Type, as defined here: https://github.com/the-blue-alliance/the-blue-alliance/blob/master/consts/playoff_type.py#L4, or null.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		playoff_type: FormControl<number | null | undefined>,

		/** String representation of the `playoff_type`, or null. */
		playoff_type_string: FormControl<string | null | undefined>,

		/** Postal code from the event address. */
		postal_code: FormControl<string | null | undefined>,

		/** Same as `name` but doesn't include event specifiers, such as 'Regional' or 'District'. May be null. */
		short_name: FormControl<string | null | undefined>,

		/**
		 * Event start date in `yyyy-mm-dd` format.
		 * Required
		 * Type: DateOnly
		 */
		start_date: FormControl<Date | null | undefined>,

		/** State or Province the event is located in. */
		state_prov: FormControl<string | null | undefined>,

		/** Timezone name. */
		timezone: FormControl<string | null | undefined>,

		/** The event's website, if any. */
		website: FormControl<string | null | undefined>,

		/**
		 * Week of the event relative to the first official season event, zero-indexed. Only valid for Regionals, Districts, and District Championships. Null otherwise. (Eg. A season with a week 0 'preseason' event does not count, and week 1 events will show 0 here. Seasons with a week 0.5 regional event will show week 0 for those event(s) and week 1 for week 1 events and so on.)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		week: FormControl<number | null | undefined>,

		/**
		 * Year the event data is for.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			end_date: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			event_code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			event_type: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			event_type_string: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			first_event_code: new FormControl<string | null | undefined>(undefined),
			first_event_id: new FormControl<string | null | undefined>(undefined),
			gmaps_place_id: new FormControl<string | null | undefined>(undefined),
			gmaps_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lat: new FormControl<number | null | undefined>(undefined),
			lng: new FormControl<number | null | undefined>(undefined),
			location_name: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parent_event_key: new FormControl<string | null | undefined>(undefined),
			playoff_type: new FormControl<number | null | undefined>(undefined),
			playoff_type_string: new FormControl<string | null | undefined>(undefined),
			postal_code: new FormControl<string | null | undefined>(undefined),
			short_name: new FormControl<string | null | undefined>(undefined),
			start_date: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			state_prov: new FormControl<string | null | undefined>(undefined),
			timezone: new FormControl<string | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined),
			week: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Webcast {

		/**
		 * Type specific channel information. May be the YouTube stream, or Twitch channel name. In the case of iframe types, contains HTML to embed the stream in an HTML iframe.
		 * Required
		 */
		channel: string;

		/** The date for the webcast in `yyyy-mm-dd` format. May be null. */
		date?: string | null;

		/** File identification as may be required for some types. May be null. */
		file?: string | null;

		/**
		 * Type of webcast, typically descriptive of the streaming provider.
		 * Required
		 */
		type: WebcastType;
	}
	export interface WebcastFormProperties {

		/**
		 * Type specific channel information. May be the YouTube stream, or Twitch channel name. In the case of iframe types, contains HTML to embed the stream in an HTML iframe.
		 * Required
		 */
		channel: FormControl<string | null | undefined>,

		/** The date for the webcast in `yyyy-mm-dd` format. May be null. */
		date: FormControl<string | null | undefined>,

		/** File identification as may be required for some types. May be null. */
		file: FormControl<string | null | undefined>,

		/**
		 * Type of webcast, typically descriptive of the streaming provider.
		 * Required
		 */
		type: FormControl<WebcastType | null | undefined>,
	}
	export function CreateWebcastFormGroup() {
		return new FormGroup<WebcastFormProperties>({
			channel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			date: new FormControl<string | null | undefined>(undefined),
			file: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<WebcastType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum WebcastType { youtube = 'youtube', twitch = 'twitch', ustream = 'ustream', iframe = 'iframe', html5 = 'html5', rtmp = 'rtmp', livestream = 'livestream', direct_link = 'direct_link', mms = 'mms', justin = 'justin', stemtv = 'stemtv', dacast = 'dacast' }

	export interface Event_District_Points {

		/**
		 * Points gained for each team at the event. Stored as a key-value pair with the team key as the key, and an object describing the points as its value.
		 * Required
		 */
		points: {[id: string]: Event_District_PointsPoints };

		/** Tiebreaker values for each team at the event. Stored as a key-value pair with the team key as the key, and an object describing the tiebreaker elements as its value. */
		tiebreakers?: {[id: string]: Event_District_PointsTiebreakers };
	}
	export interface Event_District_PointsFormProperties {

		/**
		 * Points gained for each team at the event. Stored as a key-value pair with the team key as the key, and an object describing the points as its value.
		 * Required
		 */
		points: FormControl<{[id: string]: Event_District_PointsPoints } | null | undefined>,

		/** Tiebreaker values for each team at the event. Stored as a key-value pair with the team key as the key, and an object describing the tiebreaker elements as its value. */
		tiebreakers: FormControl<{[id: string]: Event_District_PointsTiebreakers } | null | undefined>,
	}
	export function CreateEvent_District_PointsFormGroup() {
		return new FormGroup<Event_District_PointsFormProperties>({
			points: new FormControl<{[id: string]: Event_District_PointsPoints } | null | undefined>(undefined, [Validators.required]),
			tiebreakers: new FormControl<{[id: string]: Event_District_PointsTiebreakers } | null | undefined>(undefined),
		});

	}

	export interface Event_District_PointsPoints {

		/**
		 * Points awarded for alliance selection
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		alliance_points: number;

		/**
		 * Points awarded for event awards.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		award_points: number;

		/**
		 * Points awarded for elimination match performance.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		elim_points: number;

		/**
		 * Points awarded for qualification match performance.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		qual_points: number;

		/**
		 * Total points awarded at this event.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: number;
	}
	export interface Event_District_PointsPointsFormProperties {

		/**
		 * Points awarded for alliance selection
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		alliance_points: FormControl<number | null | undefined>,

		/**
		 * Points awarded for event awards.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		award_points: FormControl<number | null | undefined>,

		/**
		 * Points awarded for elimination match performance.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		elim_points: FormControl<number | null | undefined>,

		/**
		 * Points awarded for qualification match performance.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		qual_points: FormControl<number | null | undefined>,

		/**
		 * Total points awarded at this event.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateEvent_District_PointsPointsFormGroup() {
		return new FormGroup<Event_District_PointsPointsFormProperties>({
			alliance_points: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			award_points: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			elim_points: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			qual_points: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Event_District_PointsTiebreakers {
		highest_qual_scores?: Array<number>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		qual_wins?: number | null;
	}
	export interface Event_District_PointsTiebreakersFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		qual_wins: FormControl<number | null | undefined>,
	}
	export function CreateEvent_District_PointsTiebreakersFormGroup() {
		return new FormGroup<Event_District_PointsTiebreakersFormProperties>({
			qual_wins: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A year-specific event insight object expressed as a JSON string, separated in to `qual` and `playoff` fields. See also Event_Insights_2016, Event_Insights_2017, etc. */
	export interface Event_Insights {

		/** Insights for the playoff round of an event */
		playoff?: string | null;

		/** Inights for the qualification round of an event */
		qual?: string | null;
	}

	/** A year-specific event insight object expressed as a JSON string, separated in to `qual` and `playoff` fields. See also Event_Insights_2016, Event_Insights_2017, etc. */
	export interface Event_InsightsFormProperties {

		/** Insights for the playoff round of an event */
		playoff: FormControl<string | null | undefined>,

		/** Inights for the qualification round of an event */
		qual: FormControl<string | null | undefined>,
	}
	export function CreateEvent_InsightsFormGroup() {
		return new FormGroup<Event_InsightsFormProperties>({
			playoff: new FormControl<string | null | undefined>(undefined),
			qual: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Insights for FIRST Stronghold qualification and elimination matches. */
	export interface Event_Insights_2016 {

		/**
		 * For the Cheval De Frise - An array with three values, number of times damaged, number of opportunities to damage, and percentage.
		 * Required
		 */
		A_ChevalDeFrise: Array<number>;

		/**
		 * For the Portcullis - An array with three values, number of times damaged, number of opportunities to damage, and percentage.
		 * Required
		 */
		A_Portcullis: Array<number>;

		/**
		 * For the Moat - An array with three values, number of times damaged, number of opportunities to damage, and percentage.
		 * Required
		 */
		B_Moat: Array<number>;

		/**
		 * For the Ramparts - An array with three values, number of times damaged, number of opportunities to damage, and percentage.
		 * Required
		 */
		B_Ramparts: Array<number>;

		/**
		 * For the Drawbridge - An array with three values, number of times damaged, number of opportunities to damage, and percentage.
		 * Required
		 */
		C_Drawbridge: Array<number>;

		/**
		 * For the Sally Port - An array with three values, number of times damaged, number of opportunities to damage, and percentage.
		 * Required
		 */
		C_SallyPort: Array<number>;

		/**
		 * For the Rock Wall - An array with three values, number of times damaged, number of opportunities to damage, and percentage.
		 * Required
		 */
		D_RockWall: Array<number>;

		/**
		 * For the Rough Terrain - An array with three values, number of times damaged, number of opportunities to damage, and percentage.
		 * Required
		 */
		D_RoughTerrain: Array<number>;

		/**
		 * For the Low Bar - An array with three values, number of times damaged, number of opportunities to damage, and percentage.
		 * Required
		 */
		LowBar: Array<number>;

		/**
		 * Average autonomous score.
		 * Required
		 * Type: float
		 */
		average_auto_score: number;

		/**
		 * Average boulder score.
		 * Required
		 * Type: float
		 */
		average_boulder_score: number;

		/**
		 * Average crossing score.
		 * Required
		 * Type: float
		 */
		average_crossing_score: number;

		/**
		 * Average foul score.
		 * Required
		 * Type: float
		 */
		average_foul_score: number;

		/**
		 * Average number of high goals scored.
		 * Required
		 * Type: float
		 */
		average_high_goals: number;

		/**
		 * Average number of low goals scored.
		 * Required
		 * Type: float
		 */
		average_low_goals: number;

		/**
		 * Average total score.
		 * Required
		 * Type: float
		 */
		average_score: number;

		/**
		 * Average tower score.
		 * Required
		 * Type: float
		 */
		average_tower_score: number;

		/**
		 * Average margin of victory.
		 * Required
		 * Type: float
		 */
		average_win_margin: number;

		/**
		 * Average winning score.
		 * Required
		 * Type: float
		 */
		average_win_score: number;

		/**
		 * An array with three values, number of times breached, number of opportunities to breach, and percentage.
		 * Required
		 */
		breaches: Array<number>;

		/**
		 * An array with three values, number of times captured, number of opportunities to capture, and percentage.
		 * Required
		 */
		captures: Array<number>;

		/**
		 * An array with three values, number of times challenged, number of opportunities to challenge, and percentage.
		 * Required
		 */
		challenges: Array<number>;

		/**
		 * An array with three values, high score, match key from the match with the high score, and the name of the match.
		 * Required
		 */
		high_score: Array<string>;

		/**
		 * An array with three values, number of times scaled, number of opportunities to scale, and percentage.
		 * Required
		 */
		scales: Array<number>;
	}

	/** Insights for FIRST Stronghold qualification and elimination matches. */
	export interface Event_Insights_2016FormProperties {

		/**
		 * Average autonomous score.
		 * Required
		 * Type: float
		 */
		average_auto_score: FormControl<number | null | undefined>,

		/**
		 * Average boulder score.
		 * Required
		 * Type: float
		 */
		average_boulder_score: FormControl<number | null | undefined>,

		/**
		 * Average crossing score.
		 * Required
		 * Type: float
		 */
		average_crossing_score: FormControl<number | null | undefined>,

		/**
		 * Average foul score.
		 * Required
		 * Type: float
		 */
		average_foul_score: FormControl<number | null | undefined>,

		/**
		 * Average number of high goals scored.
		 * Required
		 * Type: float
		 */
		average_high_goals: FormControl<number | null | undefined>,

		/**
		 * Average number of low goals scored.
		 * Required
		 * Type: float
		 */
		average_low_goals: FormControl<number | null | undefined>,

		/**
		 * Average total score.
		 * Required
		 * Type: float
		 */
		average_score: FormControl<number | null | undefined>,

		/**
		 * Average tower score.
		 * Required
		 * Type: float
		 */
		average_tower_score: FormControl<number | null | undefined>,

		/**
		 * Average margin of victory.
		 * Required
		 * Type: float
		 */
		average_win_margin: FormControl<number | null | undefined>,

		/**
		 * Average winning score.
		 * Required
		 * Type: float
		 */
		average_win_score: FormControl<number | null | undefined>,
	}
	export function CreateEvent_Insights_2016FormGroup() {
		return new FormGroup<Event_Insights_2016FormProperties>({
			average_auto_score: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			average_boulder_score: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			average_crossing_score: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			average_foul_score: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			average_high_goals: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			average_low_goals: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			average_score: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			average_tower_score: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			average_win_margin: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			average_win_score: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Insights for FIRST STEAMWORKS qualification and elimination matches. */
	export interface Event_Insights_2017 {

		/**
		 * Average foul score.
		 * Required
		 * Type: float
		 */
		average_foul_score: number;

		/**
		 * Average fuel points scored.
		 * Required
		 * Type: float
		 */
		average_fuel_points: number;

		/**
		 * Average fuel points scored during auto.
		 * Required
		 * Type: float
		 */
		average_fuel_points_auto: number;

		/**
		 * Average fuel points scored during teleop.
		 * Required
		 * Type: float
		 */
		average_fuel_points_teleop: number;

		/**
		 * Average points scored in the high goal.
		 * Required
		 * Type: float
		 */
		average_high_goals: number;

		/**
		 * Average points scored in the high goal during auto.
		 * Required
		 * Type: float
		 */
		average_high_goals_auto: number;

		/**
		 * Average points scored in the high goal during teleop.
		 * Required
		 * Type: float
		 */
		average_high_goals_teleop: number;

		/**
		 * Average points scored in the low goal.
		 * Required
		 * Type: float
		 */
		average_low_goals: number;

		/**
		 * Average points scored in the low goal during auto.
		 * Required
		 * Type: float
		 */
		average_low_goals_auto: number;

		/**
		 * Average points scored in the low goal during teleop.
		 * Required
		 * Type: float
		 */
		average_low_goals_teleop: number;

		/**
		 * Average mobility points scored during auto.
		 * Required
		 * Type: float
		 */
		average_mobility_points_auto: number;

		/**
		 * Average points scored during auto.
		 * Required
		 * Type: float
		 */
		average_points_auto: number;

		/**
		 * Average points scored during teleop.
		 * Required
		 * Type: float
		 */
		average_points_teleop: number;

		/**
		 * Average rotor points scored.
		 * Required
		 * Type: float
		 */
		average_rotor_points: number;

		/**
		 * Average rotor points scored during auto.
		 * Required
		 * Type: float
		 */
		average_rotor_points_auto: number;

		/**
		 * Average rotor points scored during teleop.
		 * Required
		 * Type: float
		 */
		average_rotor_points_teleop: number;

		/**
		 * Average score.
		 * Required
		 * Type: float
		 */
		average_score: number;

		/**
		 * Average takeoff points scored during teleop.
		 * Required
		 * Type: float
		 */
		average_takeoff_points_teleop: number;

		/**
		 * Average margin of victory.
		 * Required
		 * Type: float
		 */
		average_win_margin: number;

		/**
		 * Average winning score.
		 * Required
		 * Type: float
		 */
		average_win_score: number;

		/**
		 * An array with three values, kPa scored, match key from the match with the high kPa, and the name of the match
		 * Required
		 */
		high_kpa: Array<string>;

		/**
		 * An array with three values, high score, match key from the match with the high score, and the name of the match
		 * Required
		 */
		high_score: Array<string>;

		/**
		 * An array with three values, number of times kPa bonus achieved, number of opportunities to bonus, and percentage.
		 * Required
		 */
		kpa_achieved: Array<number>;

		/**
		 * An array with three values, number of times mobility bonus achieved, number of opportunities to bonus, and percentage.
		 * Required
		 */
		mobility_counts: Array<number>;

		/**
		 * An array with three values, number of times rotor 1 engaged, number of opportunities to engage, and percentage.
		 * Required
		 */
		rotor_1_engaged: Array<number>;

		/**
		 * An array with three values, number of times rotor 1 engaged in auto, number of opportunities to engage in auto, and percentage.
		 * Required
		 */
		rotor_1_engaged_auto: Array<number>;

		/**
		 * An array with three values, number of times rotor 2 engaged, number of opportunities to engage, and percentage.
		 * Required
		 */
		rotor_2_engaged: Array<number>;

		/**
		 * An array with three values, number of times rotor 2 engaged in auto, number of opportunities to engage in auto, and percentage.
		 * Required
		 */
		rotor_2_engaged_auto: Array<number>;

		/**
		 * An array with three values, number of times rotor 3 engaged, number of opportunities to engage, and percentage.
		 * Required
		 */
		rotor_3_engaged: Array<number>;

		/**
		 * An array with three values, number of times rotor 4 engaged, number of opportunities to engage, and percentage.
		 * Required
		 */
		rotor_4_engaged: Array<number>;

		/**
		 * An array with three values, number of times takeoff was counted, number of opportunities to takeoff, and percentage.
		 * Required
		 */
		takeoff_counts: Array<number>;

		/**
		 * An array with three values, number of times a unicorn match (Win + kPa & Rotor Bonuses) occured, number of opportunities to have a unicorn match, and percentage.
		 * Required
		 */
		unicorn_matches: Array<number>;
	}

	/** Insights for FIRST STEAMWORKS qualification and elimination matches. */
	export interface Event_Insights_2017FormProperties {

		/**
		 * Average foul score.
		 * Required
		 * Type: float
		 */
		average_foul_score: FormControl<number | null | undefined>,

		/**
		 * Average fuel points scored.
		 * Required
		 * Type: float
		 */
		average_fuel_points: FormControl<number | null | undefined>,

		/**
		 * Average fuel points scored during auto.
		 * Required
		 * Type: float
		 */
		average_fuel_points_auto: FormControl<number | null | undefined>,

		/**
		 * Average fuel points scored during teleop.
		 * Required
		 * Type: float
		 */
		average_fuel_points_teleop: FormControl<number | null | undefined>,

		/**
		 * Average points scored in the high goal.
		 * Required
		 * Type: float
		 */
		average_high_goals: FormControl<number | null | undefined>,

		/**
		 * Average points scored in the high goal during auto.
		 * Required
		 * Type: float
		 */
		average_high_goals_auto: FormControl<number | null | undefined>,

		/**
		 * Average points scored in the high goal during teleop.
		 * Required
		 * Type: float
		 */
		average_high_goals_teleop: FormControl<number | null | undefined>,

		/**
		 * Average points scored in the low goal.
		 * Required
		 * Type: float
		 */
		average_low_goals: FormControl<number | null | undefined>,

		/**
		 * Average points scored in the low goal during auto.
		 * Required
		 * Type: float
		 */
		average_low_goals_auto: FormControl<number | null | undefined>,

		/**
		 * Average points scored in the low goal during teleop.
		 * Required
		 * Type: float
		 */
		average_low_goals_teleop: FormControl<number | null | undefined>,

		/**
		 * Average mobility points scored during auto.
		 * Required
		 * Type: float
		 */
		average_mobility_points_auto: FormControl<number | null | undefined>,

		/**
		 * Average points scored during auto.
		 * Required
		 * Type: float
		 */
		average_points_auto: FormControl<number | null | undefined>,

		/**
		 * Average points scored during teleop.
		 * Required
		 * Type: float
		 */
		average_points_teleop: FormControl<number | null | undefined>,

		/**
		 * Average rotor points scored.
		 * Required
		 * Type: float
		 */
		average_rotor_points: FormControl<number | null | undefined>,

		/**
		 * Average rotor points scored during auto.
		 * Required
		 * Type: float
		 */
		average_rotor_points_auto: FormControl<number | null | undefined>,

		/**
		 * Average rotor points scored during teleop.
		 * Required
		 * Type: float
		 */
		average_rotor_points_teleop: FormControl<number | null | undefined>,

		/**
		 * Average score.
		 * Required
		 * Type: float
		 */
		average_score: FormControl<number | null | undefined>,

		/**
		 * Average takeoff points scored during teleop.
		 * Required
		 * Type: float
		 */
		average_takeoff_points_teleop: FormControl<number | null | undefined>,

		/**
		 * Average margin of victory.
		 * Required
		 * Type: float
		 */
		average_win_margin: FormControl<number | null | undefined>,

		/**
		 * Average winning score.
		 * Required
		 * Type: float
		 */
		average_win_score: FormControl<number | null | undefined>,
	}
	export function CreateEvent_Insights_2017FormGroup() {
		return new FormGroup<Event_Insights_2017FormProperties>({
			average_foul_score: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			average_fuel_points: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			average_fuel_points_auto: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			average_fuel_points_teleop: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			average_high_goals: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			average_high_goals_auto: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			average_high_goals_teleop: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			average_low_goals: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			average_low_goals_auto: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			average_low_goals_teleop: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			average_mobility_points_auto: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			average_points_auto: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			average_points_teleop: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			average_rotor_points: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			average_rotor_points_auto: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			average_rotor_points_teleop: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			average_score: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			average_takeoff_points_teleop: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			average_win_margin: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			average_win_score: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Insights for FIRST Power Up qualification and elimination matches. */
	export interface Event_Insights_2018 {

		/**
		 * An array with three values, number of times auto quest was completed, number of opportunities to complete the auto quest, and percentage.
		 * Required
		 */
		auto_quest_achieved: Array<number>;

		/**
		 * Average number of boost power up scored (out of 3).
		 * Required
		 * Type: float
		 */
		average_boost_played: number;

		/**
		 * Average endgame points.
		 * Required
		 * Type: float
		 */
		average_endgame_points: number;

		/**
		 * Average number of force power up scored (out of 3).
		 * Required
		 * Type: float
		 */
		average_force_played: number;

		/**
		 * Average foul score.
		 * Required
		 * Type: float
		 */
		average_foul_score: number;

		/**
		 * Average points scored during auto.
		 * Required
		 * Type: float
		 */
		average_points_auto: number;

		/**
		 * Average points scored during teleop.
		 * Required
		 * Type: float
		 */
		average_points_teleop: number;

		/**
		 * Average mobility points scored during auto.
		 * Required
		 * Type: float
		 */
		average_run_points_auto: number;

		/**
		 * Average scale ownership points scored.
		 * Required
		 * Type: float
		 */
		average_scale_ownership_points: number;

		/**
		 * Average scale ownership points scored during auto.
		 * Required
		 * Type: float
		 */
		average_scale_ownership_points_auto: number;

		/**
		 * Average scale ownership points scored during teleop.
		 * Required
		 * Type: float
		 */
		average_scale_ownership_points_teleop: number;

		/**
		 * Average score.
		 * Required
		 * Type: float
		 */
		average_score: number;

		/**
		 * Average switch ownership points scored.
		 * Required
		 * Type: float
		 */
		average_switch_ownership_points: number;

		/**
		 * Average switch ownership points scored during auto.
		 * Required
		 * Type: float
		 */
		average_switch_ownership_points_auto: number;

		/**
		 * Average switch ownership points scored during teleop.
		 * Required
		 * Type: float
		 */
		average_switch_ownership_points_teleop: number;

		/**
		 * Average value points scored.
		 * Required
		 * Type: float
		 */
		average_vault_points: number;

		/**
		 * Average margin of victory.
		 * Required
		 * Type: float
		 */
		average_win_margin: number;

		/**
		 * Average winning score.
		 * Required
		 * Type: float
		 */
		average_win_score: number;

		/**
		 * An array with three values, number of times a boost power up was played, number of opportunities to play a boost power up, and percentage.
		 * Required
		 */
		boost_played_counts: Array<number>;

		/**
		 * An array with three values, number of times a climb occurred, number of opportunities to climb, and percentage.
		 * Required
		 */
		climb_counts: Array<number>;

		/**
		 * An array with three values, number of times an alliance faced the boss, number of opportunities to face the boss, and percentage.
		 * Required
		 */
		face_the_boss_achieved: Array<number>;

		/**
		 * An array with three values, number of times a force power up was played, number of opportunities to play a force power up, and percentage.
		 * Required
		 */
		force_played_counts: Array<number>;

		/**
		 * An array with three values, high score, match key from the match with the high score, and the name of the match
		 * Required
		 */
		high_score: Array<string>;

		/**
		 * An array with three values, number of times a levitate power up was played, number of opportunities to play a levitate power up, and percentage.
		 * Required
		 */
		levitate_played_counts: Array<number>;

		/**
		 * An array with three values, number of times a team scored mobility points in auto, number of opportunities to score mobility points in auto, and percentage.
		 * Required
		 */
		run_counts_auto: Array<number>;

		/**
		 * Average scale neutral percentage.
		 * Required
		 * Type: float
		 */
		scale_neutral_percentage: number;

		/**
		 * Average scale neutral percentage during auto.
		 * Required
		 * Type: float
		 */
		scale_neutral_percentage_auto: number;

		/**
		 * Average scale neutral percentage during teleop.
		 * Required
		 * Type: float
		 */
		scale_neutral_percentage_teleop: number;

		/**
		 * An array with three values, number of times a switch was owned during auto, number of opportunities to own a switch during auto, and percentage.
		 * Required
		 */
		switch_owned_counts_auto: Array<number>;

		/**
		 * An array with three values, number of times a unicorn match (Win + Auto Quest + Face the Boss) occurred, number of opportunities to have a unicorn match, and percentage.
		 * Required
		 */
		unicorn_matches: Array<number>;

		/**
		 * Average opposing switch denail percentage for the winning alliance during teleop.
		 * Required
		 * Type: float
		 */
		winning_opp_switch_denial_percentage_teleop: number;

		/**
		 * Average own switch ownership percentage for the winning alliance.
		 * Required
		 * Type: float
		 */
		winning_own_switch_ownership_percentage: number;

		/**
		 * Average own switch ownership percentage for the winning alliance during auto.
		 * Required
		 * Type: float
		 */
		winning_own_switch_ownership_percentage_auto: number;

		/**
		 * Average own switch ownership percentage for the winning alliance during teleop.
		 * Required
		 * Type: float
		 */
		winning_own_switch_ownership_percentage_teleop: number;

		/**
		 * Average scale ownership percentage for the winning alliance.
		 * Required
		 * Type: float
		 */
		winning_scale_ownership_percentage: number;

		/**
		 * Average scale ownership percentage for the winning alliance during auto.
		 * Required
		 * Type: float
		 */
		winning_scale_ownership_percentage_auto: number;

		/**
		 * Average scale ownership percentage for the winning alliance during teleop.
		 * Required
		 * Type: float
		 */
		winning_scale_ownership_percentage_teleop: number;
	}

	/** Insights for FIRST Power Up qualification and elimination matches. */
	export interface Event_Insights_2018FormProperties {

		/**
		 * Average number of boost power up scored (out of 3).
		 * Required
		 * Type: float
		 */
		average_boost_played: FormControl<number | null | undefined>,

		/**
		 * Average endgame points.
		 * Required
		 * Type: float
		 */
		average_endgame_points: FormControl<number | null | undefined>,

		/**
		 * Average number of force power up scored (out of 3).
		 * Required
		 * Type: float
		 */
		average_force_played: FormControl<number | null | undefined>,

		/**
		 * Average foul score.
		 * Required
		 * Type: float
		 */
		average_foul_score: FormControl<number | null | undefined>,

		/**
		 * Average points scored during auto.
		 * Required
		 * Type: float
		 */
		average_points_auto: FormControl<number | null | undefined>,

		/**
		 * Average points scored during teleop.
		 * Required
		 * Type: float
		 */
		average_points_teleop: FormControl<number | null | undefined>,

		/**
		 * Average mobility points scored during auto.
		 * Required
		 * Type: float
		 */
		average_run_points_auto: FormControl<number | null | undefined>,

		/**
		 * Average scale ownership points scored.
		 * Required
		 * Type: float
		 */
		average_scale_ownership_points: FormControl<number | null | undefined>,

		/**
		 * Average scale ownership points scored during auto.
		 * Required
		 * Type: float
		 */
		average_scale_ownership_points_auto: FormControl<number | null | undefined>,

		/**
		 * Average scale ownership points scored during teleop.
		 * Required
		 * Type: float
		 */
		average_scale_ownership_points_teleop: FormControl<number | null | undefined>,

		/**
		 * Average score.
		 * Required
		 * Type: float
		 */
		average_score: FormControl<number | null | undefined>,

		/**
		 * Average switch ownership points scored.
		 * Required
		 * Type: float
		 */
		average_switch_ownership_points: FormControl<number | null | undefined>,

		/**
		 * Average switch ownership points scored during auto.
		 * Required
		 * Type: float
		 */
		average_switch_ownership_points_auto: FormControl<number | null | undefined>,

		/**
		 * Average switch ownership points scored during teleop.
		 * Required
		 * Type: float
		 */
		average_switch_ownership_points_teleop: FormControl<number | null | undefined>,

		/**
		 * Average value points scored.
		 * Required
		 * Type: float
		 */
		average_vault_points: FormControl<number | null | undefined>,

		/**
		 * Average margin of victory.
		 * Required
		 * Type: float
		 */
		average_win_margin: FormControl<number | null | undefined>,

		/**
		 * Average winning score.
		 * Required
		 * Type: float
		 */
		average_win_score: FormControl<number | null | undefined>,

		/**
		 * Average scale neutral percentage.
		 * Required
		 * Type: float
		 */
		scale_neutral_percentage: FormControl<number | null | undefined>,

		/**
		 * Average scale neutral percentage during auto.
		 * Required
		 * Type: float
		 */
		scale_neutral_percentage_auto: FormControl<number | null | undefined>,

		/**
		 * Average scale neutral percentage during teleop.
		 * Required
		 * Type: float
		 */
		scale_neutral_percentage_teleop: FormControl<number | null | undefined>,

		/**
		 * Average opposing switch denail percentage for the winning alliance during teleop.
		 * Required
		 * Type: float
		 */
		winning_opp_switch_denial_percentage_teleop: FormControl<number | null | undefined>,

		/**
		 * Average own switch ownership percentage for the winning alliance.
		 * Required
		 * Type: float
		 */
		winning_own_switch_ownership_percentage: FormControl<number | null | undefined>,

		/**
		 * Average own switch ownership percentage for the winning alliance during auto.
		 * Required
		 * Type: float
		 */
		winning_own_switch_ownership_percentage_auto: FormControl<number | null | undefined>,

		/**
		 * Average own switch ownership percentage for the winning alliance during teleop.
		 * Required
		 * Type: float
		 */
		winning_own_switch_ownership_percentage_teleop: FormControl<number | null | undefined>,

		/**
		 * Average scale ownership percentage for the winning alliance.
		 * Required
		 * Type: float
		 */
		winning_scale_ownership_percentage: FormControl<number | null | undefined>,

		/**
		 * Average scale ownership percentage for the winning alliance during auto.
		 * Required
		 * Type: float
		 */
		winning_scale_ownership_percentage_auto: FormControl<number | null | undefined>,

		/**
		 * Average scale ownership percentage for the winning alliance during teleop.
		 * Required
		 * Type: float
		 */
		winning_scale_ownership_percentage_teleop: FormControl<number | null | undefined>,
	}
	export function CreateEvent_Insights_2018FormGroup() {
		return new FormGroup<Event_Insights_2018FormProperties>({
			average_boost_played: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			average_endgame_points: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			average_force_played: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			average_foul_score: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			average_points_auto: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			average_points_teleop: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			average_run_points_auto: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			average_scale_ownership_points: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			average_scale_ownership_points_auto: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			average_scale_ownership_points_teleop: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			average_score: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			average_switch_ownership_points: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			average_switch_ownership_points_auto: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			average_switch_ownership_points_teleop: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			average_vault_points: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			average_win_margin: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			average_win_score: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			scale_neutral_percentage: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			scale_neutral_percentage_auto: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			scale_neutral_percentage_teleop: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			winning_opp_switch_denial_percentage_teleop: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			winning_own_switch_ownership_percentage: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			winning_own_switch_ownership_percentage_auto: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			winning_own_switch_ownership_percentage_teleop: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			winning_scale_ownership_percentage: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			winning_scale_ownership_percentage_auto: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			winning_scale_ownership_percentage_teleop: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** OPR, DPR, and CCWM for teams at the event. */
	export interface Event_OPRs {

		/** A key-value pair with team key (eg `frc254`) as key and CCWM as value. */
		ccwms?: {[id: string]: number };

		/** A key-value pair with team key (eg `frc254`) as key and DPR as value. */
		dprs?: {[id: string]: number };

		/** A key-value pair with team key (eg `frc254`) as key and OPR as value. */
		oprs?: {[id: string]: number };
	}

	/** OPR, DPR, and CCWM for teams at the event. */
	export interface Event_OPRsFormProperties {

		/** A key-value pair with team key (eg `frc254`) as key and CCWM as value. */
		ccwms: FormControl<{[id: string]: number } | null | undefined>,

		/** A key-value pair with team key (eg `frc254`) as key and DPR as value. */
		dprs: FormControl<{[id: string]: number } | null | undefined>,

		/** A key-value pair with team key (eg `frc254`) as key and OPR as value. */
		oprs: FormControl<{[id: string]: number } | null | undefined>,
	}
	export function CreateEvent_OPRsFormGroup() {
		return new FormGroup<Event_OPRsFormProperties>({
			ccwms: new FormControl<{[id: string]: number } | null | undefined>(undefined),
			dprs: new FormControl<{[id: string]: number } | null | undefined>(undefined),
			oprs: new FormControl<{[id: string]: number } | null | undefined>(undefined),
		});

	}


	/** JSON Object containing prediction information for the event. Contains year-specific information and is subject to change. */
	export interface Event_Predictions {
	}

	/** JSON Object containing prediction information for the event. Contains year-specific information and is subject to change. */
	export interface Event_PredictionsFormProperties {
	}
	export function CreateEvent_PredictionsFormGroup() {
		return new FormGroup<Event_PredictionsFormProperties>({
		});

	}

	export interface Event_Ranking {

		/** List of special TBA-generated values provided in the `extra_stats` array for each item. */
		Event_RankingExtra_stats_info?: Array<Event_RankingExtra_stats_info>;

		/**
		 * List of rankings at the event.
		 * Required
		 */
		Event_RankingRankings: Array<Event_RankingRankings>;

		/**
		 * List of year-specific values provided in the `sort_orders` array for each team.
		 * Required
		 */
		Event_RankingSort_order_info: Array<Event_RankingSort_order_info>;
	}
	export interface Event_RankingFormProperties {
	}
	export function CreateEvent_RankingFormGroup() {
		return new FormGroup<Event_RankingFormProperties>({
		});

	}

	export interface Event_RankingExtra_stats_info {

		/**
		 * Name of the field used in the `extra_stats` array.
		 * Required
		 */
		name: string;

		/**
		 * Integer expressing the number of digits of precision in the number provided in `sort_orders`.
		 * Required
		 * Type: double
		 */
		precision: number;
	}
	export interface Event_RankingExtra_stats_infoFormProperties {

		/**
		 * Name of the field used in the `extra_stats` array.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Integer expressing the number of digits of precision in the number provided in `sort_orders`.
		 * Required
		 * Type: double
		 */
		precision: FormControl<number | null | undefined>,
	}
	export function CreateEvent_RankingExtra_stats_infoFormGroup() {
		return new FormGroup<Event_RankingExtra_stats_infoFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			precision: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Event_RankingRankings {

		/**
		 * Number of times disqualified.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dq: number;

		/** Additional special data on the team's performance calculated by TBA. */
		extra_stats?: Array<number>;

		/**
		 * Number of matches played by this team.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		matches_played: number;

		/**
		 * The average match score during qualifications. Year specific. May be null if not relevant for a given year.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		qual_average?: number | null;

		/**
		 * The team's rank at the event as provided by FIRST.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rank: number;

		/**
		 * A Win-Loss-Tie record for a team, or an alliance.
		 * Required
		 */
		record: WLT_Record;

		/** Additional year-specific information, may be null. See parent `sort_order_info` for details. */
		sort_orders?: Array<number>;

		/**
		 * The team with this rank.
		 * Required
		 */
		team_key: string;
	}
	export interface Event_RankingRankingsFormProperties {

		/**
		 * Number of times disqualified.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dq: FormControl<number | null | undefined>,

		/**
		 * Number of matches played by this team.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		matches_played: FormControl<number | null | undefined>,

		/**
		 * The average match score during qualifications. Year specific. May be null if not relevant for a given year.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		qual_average: FormControl<number | null | undefined>,

		/**
		 * The team's rank at the event as provided by FIRST.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rank: FormControl<number | null | undefined>,

		/**
		 * The team with this rank.
		 * Required
		 */
		team_key: FormControl<string | null | undefined>,
	}
	export function CreateEvent_RankingRankingsFormGroup() {
		return new FormGroup<Event_RankingRankingsFormProperties>({
			dq: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			matches_played: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			qual_average: new FormControl<number | null | undefined>(undefined),
			rank: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			team_key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Event_RankingSort_order_info {

		/**
		 * Name of the field used in the `sort_order` array.
		 * Required
		 */
		name: string;

		/**
		 * Integer expressing the number of digits of precision in the number provided in `sort_orders`.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		precision: number;
	}
	export interface Event_RankingSort_order_infoFormProperties {

		/**
		 * Name of the field used in the `sort_order` array.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Integer expressing the number of digits of precision in the number provided in `sort_orders`.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		precision: FormControl<number | null | undefined>,
	}
	export function CreateEvent_RankingSort_order_infoFormGroup() {
		return new FormGroup<Event_RankingSort_order_infoFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			precision: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Event_Simple {

		/** City, town, village, etc. the event is located in. */
		city?: string | null;

		/** Country the event is located in. */
		country?: string | null;
		district?: District_List;

		/**
		 * Event end date in `yyyy-mm-dd` format.
		 * Required
		 * Type: DateOnly
		 */
		end_date: Date;

		/**
		 * Event short code, as provided by FIRST.
		 * Required
		 */
		event_code: string;

		/**
		 * Event Type, as defined here: https://github.com/the-blue-alliance/the-blue-alliance/blob/master/consts/event_type.py#L2
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		event_type: number;

		/**
		 * TBA event key with the format yyyy[EVENT_CODE], where yyyy is the year, and EVENT_CODE is the event code of the event.
		 * Required
		 */
		key: string;

		/**
		 * Official name of event on record either provided by FIRST or organizers of offseason event.
		 * Required
		 */
		name: string;

		/**
		 * Event start date in `yyyy-mm-dd` format.
		 * Required
		 * Type: DateOnly
		 */
		start_date: Date;

		/** State or Province the event is located in. */
		state_prov?: string | null;

		/**
		 * Year the event data is for.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year: number;
	}
	export interface Event_SimpleFormProperties {

		/** City, town, village, etc. the event is located in. */
		city: FormControl<string | null | undefined>,

		/** Country the event is located in. */
		country: FormControl<string | null | undefined>,

		/**
		 * Event end date in `yyyy-mm-dd` format.
		 * Required
		 * Type: DateOnly
		 */
		end_date: FormControl<Date | null | undefined>,

		/**
		 * Event short code, as provided by FIRST.
		 * Required
		 */
		event_code: FormControl<string | null | undefined>,

		/**
		 * Event Type, as defined here: https://github.com/the-blue-alliance/the-blue-alliance/blob/master/consts/event_type.py#L2
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		event_type: FormControl<number | null | undefined>,

		/**
		 * TBA event key with the format yyyy[EVENT_CODE], where yyyy is the year, and EVENT_CODE is the event code of the event.
		 * Required
		 */
		key: FormControl<string | null | undefined>,

		/**
		 * Official name of event on record either provided by FIRST or organizers of offseason event.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Event start date in `yyyy-mm-dd` format.
		 * Required
		 * Type: DateOnly
		 */
		start_date: FormControl<Date | null | undefined>,

		/** State or Province the event is located in. */
		state_prov: FormControl<string | null | undefined>,

		/**
		 * Year the event data is for.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateEvent_SimpleFormGroup() {
		return new FormGroup<Event_SimpleFormProperties>({
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			end_date: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			event_code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			event_type: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			start_date: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			state_prov: new FormControl<string | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Match {

		/**
		 * UNIX timestamp (seconds since 1-Jan-1970 00:00:00) of actual match start time.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		actual_time?: string | null;

		/** A list of alliances, the teams on the alliances, and their score. */
		alliances?: MatchAlliances;

		/**
		 * The competition level the match was played at.
		 * Required
		 */
		comp_level: MatchComp_level;

		/**
		 * Event key of the event the match was played at.
		 * Required
		 */
		event_key: string;

		/**
		 * TBA match key with the format `yyyy[EVENT_CODE]_[COMP_LEVEL]m[MATCH_NUMBER]`, where `yyyy` is the year, and `EVENT_CODE` is the event code of the event, `COMP_LEVEL` is (qm, ef, qf, sf, f), and `MATCH_NUMBER` is the match number in the competition level. A set number may be appended to the competition level if more than one match in required per set.
		 * Required
		 */
		key: string;

		/**
		 * The match number of the match in the competition level.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		match_number: number;

		/**
		 * UNIX timestamp (seconds since 1-Jan-1970 00:00:00) when the match result was posted.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		post_result_time?: string | null;

		/**
		 * UNIX timestamp (seconds since 1-Jan-1970 00:00:00) of the TBA predicted match start time.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		predicted_time?: string | null;

		/** Score breakdown for auto, teleop, etc. points. Varies from year to year. May be null. */
		score_breakdown?: string | null;

		/**
		 * The set number in a series of matches where more than one match is required in the match series.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		set_number: number;

		/**
		 * UNIX timestamp (seconds since 1-Jan-1970 00:00:00) of the scheduled match time, as taken from the published schedule.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		time?: string | null;

		/** Array of video objects associated with this match. */
		MatchVideos?: Array<MatchVideos>;

		/** The color (red/blue) of the winning alliance. Will contain an empty string in the event of no winner, or a tie. */
		winning_alliance?: MatchWinning_alliance | null;
	}
	export interface MatchFormProperties {

		/**
		 * UNIX timestamp (seconds since 1-Jan-1970 00:00:00) of actual match start time.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		actual_time: FormControl<string | null | undefined>,

		/**
		 * The competition level the match was played at.
		 * Required
		 */
		comp_level: FormControl<MatchComp_level | null | undefined>,

		/**
		 * Event key of the event the match was played at.
		 * Required
		 */
		event_key: FormControl<string | null | undefined>,

		/**
		 * TBA match key with the format `yyyy[EVENT_CODE]_[COMP_LEVEL]m[MATCH_NUMBER]`, where `yyyy` is the year, and `EVENT_CODE` is the event code of the event, `COMP_LEVEL` is (qm, ef, qf, sf, f), and `MATCH_NUMBER` is the match number in the competition level. A set number may be appended to the competition level if more than one match in required per set.
		 * Required
		 */
		key: FormControl<string | null | undefined>,

		/**
		 * The match number of the match in the competition level.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		match_number: FormControl<number | null | undefined>,

		/**
		 * UNIX timestamp (seconds since 1-Jan-1970 00:00:00) when the match result was posted.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		post_result_time: FormControl<string | null | undefined>,

		/**
		 * UNIX timestamp (seconds since 1-Jan-1970 00:00:00) of the TBA predicted match start time.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		predicted_time: FormControl<string | null | undefined>,

		/** Score breakdown for auto, teleop, etc. points. Varies from year to year. May be null. */
		score_breakdown: FormControl<string | null | undefined>,

		/**
		 * The set number in a series of matches where more than one match is required in the match series.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		set_number: FormControl<number | null | undefined>,

		/**
		 * UNIX timestamp (seconds since 1-Jan-1970 00:00:00) of the scheduled match time, as taken from the published schedule.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		time: FormControl<string | null | undefined>,

		/** The color (red/blue) of the winning alliance. Will contain an empty string in the event of no winner, or a tie. */
		winning_alliance: FormControl<MatchWinning_alliance | null | undefined>,
	}
	export function CreateMatchFormGroup() {
		return new FormGroup<MatchFormProperties>({
			actual_time: new FormControl<string | null | undefined>(undefined),
			comp_level: new FormControl<MatchComp_level | null | undefined>(undefined, [Validators.required]),
			event_key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			match_number: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			post_result_time: new FormControl<string | null | undefined>(undefined),
			predicted_time: new FormControl<string | null | undefined>(undefined),
			score_breakdown: new FormControl<string | null | undefined>(undefined),
			set_number: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			time: new FormControl<string | null | undefined>(undefined),
			winning_alliance: new FormControl<MatchWinning_alliance | null | undefined>(undefined),
		});

	}

	export interface MatchAlliances {
		blue?: Match_alliance;
		red?: Match_alliance;
	}
	export interface MatchAlliancesFormProperties {
	}
	export function CreateMatchAlliancesFormGroup() {
		return new FormGroup<MatchAlliancesFormProperties>({
		});

	}

	export interface Match_alliance {

		/** TBA team keys (eg `frc254`) of any disqualified teams. */
		dq_team_keys?: Array<string>;

		/**
		 * Score for this alliance. Will be null or -1 for an unplayed match.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		score: number;

		/** TBA team keys (eg `frc254`) of any teams playing as a surrogate. */
		surrogate_team_keys?: Array<string>;

		/** Required */
		team_keys: Array<string>;
	}
	export interface Match_allianceFormProperties {

		/**
		 * Score for this alliance. Will be null or -1 for an unplayed match.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		score: FormControl<number | null | undefined>,
	}
	export function CreateMatch_allianceFormGroup() {
		return new FormGroup<Match_allianceFormProperties>({
			score: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MatchComp_level { qm = 'qm', ef = 'ef', qf = 'qf', sf = 'sf', f = 'f' }

	export interface MatchVideos {

		/** Unique key representing this video */
		key?: string | null;

		/** Can be one of 'youtube' or 'tba' */
		type?: string | null;
	}
	export interface MatchVideosFormProperties {

		/** Unique key representing this video */
		key: FormControl<string | null | undefined>,

		/** Can be one of 'youtube' or 'tba' */
		type: FormControl<string | null | undefined>,
	}
	export function CreateMatchVideosFormGroup() {
		return new FormGroup<MatchVideosFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MatchWinning_alliance { red = 'red', blue = 'blue', '' = '' }


	/** See the 2015 FMS API documentation for a description of each value */
	export interface Match_Score_Breakdown_2015 {
		blue?: Match_Score_Breakdown_2015_Alliance;
		coopertition?: Match_Score_Breakdown_2015Coopertition | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		coopertition_points?: number | null;
		red?: Match_Score_Breakdown_2015_Alliance;
	}

	/** See the 2015 FMS API documentation for a description of each value */
	export interface Match_Score_Breakdown_2015FormProperties {
		coopertition: FormControl<Match_Score_Breakdown_2015Coopertition | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		coopertition_points: FormControl<number | null | undefined>,
	}
	export function CreateMatch_Score_Breakdown_2015FormGroup() {
		return new FormGroup<Match_Score_Breakdown_2015FormProperties>({
			coopertition: new FormControl<Match_Score_Breakdown_2015Coopertition | null | undefined>(undefined),
			coopertition_points: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Match_Score_Breakdown_2015_Alliance {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		adjust_points?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		auto_points?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		container_count_level1?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		container_count_level2?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		container_count_level3?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		container_count_level4?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		container_count_level5?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		container_count_level6?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		container_points?: number | null;
		container_set?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		foul_count?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		foul_points?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		litter_count_container?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		litter_count_landfill?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		litter_count_unprocessed?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		litter_points?: number | null;
		robot_set?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleop_points?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total_points?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		tote_count_far?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		tote_count_near?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		tote_points?: number | null;
		tote_set?: boolean | null;
		tote_stack?: boolean | null;
	}
	export interface Match_Score_Breakdown_2015_AllianceFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		adjust_points: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		auto_points: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		container_count_level1: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		container_count_level2: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		container_count_level3: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		container_count_level4: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		container_count_level5: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		container_count_level6: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		container_points: FormControl<number | null | undefined>,
		container_set: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		foul_count: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		foul_points: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		litter_count_container: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		litter_count_landfill: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		litter_count_unprocessed: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		litter_points: FormControl<number | null | undefined>,
		robot_set: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleop_points: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total_points: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		tote_count_far: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		tote_count_near: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		tote_points: FormControl<number | null | undefined>,
		tote_set: FormControl<boolean | null | undefined>,
		tote_stack: FormControl<boolean | null | undefined>,
	}
	export function CreateMatch_Score_Breakdown_2015_AllianceFormGroup() {
		return new FormGroup<Match_Score_Breakdown_2015_AllianceFormProperties>({
			adjust_points: new FormControl<number | null | undefined>(undefined),
			auto_points: new FormControl<number | null | undefined>(undefined),
			container_count_level1: new FormControl<number | null | undefined>(undefined),
			container_count_level2: new FormControl<number | null | undefined>(undefined),
			container_count_level3: new FormControl<number | null | undefined>(undefined),
			container_count_level4: new FormControl<number | null | undefined>(undefined),
			container_count_level5: new FormControl<number | null | undefined>(undefined),
			container_count_level6: new FormControl<number | null | undefined>(undefined),
			container_points: new FormControl<number | null | undefined>(undefined),
			container_set: new FormControl<boolean | null | undefined>(undefined),
			foul_count: new FormControl<number | null | undefined>(undefined),
			foul_points: new FormControl<number | null | undefined>(undefined),
			litter_count_container: new FormControl<number | null | undefined>(undefined),
			litter_count_landfill: new FormControl<number | null | undefined>(undefined),
			litter_count_unprocessed: new FormControl<number | null | undefined>(undefined),
			litter_points: new FormControl<number | null | undefined>(undefined),
			robot_set: new FormControl<boolean | null | undefined>(undefined),
			teleop_points: new FormControl<number | null | undefined>(undefined),
			total_points: new FormControl<number | null | undefined>(undefined),
			tote_count_far: new FormControl<number | null | undefined>(undefined),
			tote_count_near: new FormControl<number | null | undefined>(undefined),
			tote_points: new FormControl<number | null | undefined>(undefined),
			tote_set: new FormControl<boolean | null | undefined>(undefined),
			tote_stack: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum Match_Score_Breakdown_2015Coopertition { None = 'None', Unknown = 'Unknown', Stack = 'Stack' }


	/** See the 2016 FMS API documentation for a description of each value. */
	export interface Match_Score_Breakdown_2016 {
		blue?: Match_Score_Breakdown_2016_Alliance;
		red?: Match_Score_Breakdown_2016_Alliance;
	}

	/** See the 2016 FMS API documentation for a description of each value. */
	export interface Match_Score_Breakdown_2016FormProperties {
	}
	export function CreateMatch_Score_Breakdown_2016FormGroup() {
		return new FormGroup<Match_Score_Breakdown_2016FormProperties>({
		});

	}

	export interface Match_Score_Breakdown_2016_Alliance {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		adjustPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoBoulderPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoBouldersHigh?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoBouldersLow?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoCrossingPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoReachPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		breachPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		capturePoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		foulCount?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		foulPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		position1crossings?: number | null;
		position2?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		position2crossings?: number | null;
		position3?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		position3crossings?: number | null;
		position4?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		position4crossings?: number | null;
		position5?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		position5crossings?: number | null;
		robot1Auto?: Match_Score_Breakdown_2016_AllianceRobot1Auto | null;
		robot2Auto?: Match_Score_Breakdown_2016_AllianceRobot1Auto | null;
		robot3Auto?: Match_Score_Breakdown_2016_AllianceRobot1Auto | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		techFoulCount?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopBoulderPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopBouldersHigh?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopBouldersLow?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopChallengePoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopCrossingPoints?: number | null;
		teleopDefensesBreached?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopScalePoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopTowerCaptured?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		towerEndStrength?: number | null;
		towerFaceA?: string | null;
		towerFaceB?: string | null;
		towerFaceC?: string | null;
	}
	export interface Match_Score_Breakdown_2016_AllianceFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		adjustPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoBoulderPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoBouldersHigh: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoBouldersLow: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoCrossingPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoReachPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		breachPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		capturePoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		foulCount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		foulPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		position1crossings: FormControl<number | null | undefined>,
		position2: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		position2crossings: FormControl<number | null | undefined>,
		position3: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		position3crossings: FormControl<number | null | undefined>,
		position4: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		position4crossings: FormControl<number | null | undefined>,
		position5: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		position5crossings: FormControl<number | null | undefined>,
		robot1Auto: FormControl<Match_Score_Breakdown_2016_AllianceRobot1Auto | null | undefined>,
		robot2Auto: FormControl<Match_Score_Breakdown_2016_AllianceRobot1Auto | null | undefined>,
		robot3Auto: FormControl<Match_Score_Breakdown_2016_AllianceRobot1Auto | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		techFoulCount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopBoulderPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopBouldersHigh: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopBouldersLow: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopChallengePoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopCrossingPoints: FormControl<number | null | undefined>,
		teleopDefensesBreached: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopScalePoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopTowerCaptured: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		towerEndStrength: FormControl<number | null | undefined>,
		towerFaceA: FormControl<string | null | undefined>,
		towerFaceB: FormControl<string | null | undefined>,
		towerFaceC: FormControl<string | null | undefined>,
	}
	export function CreateMatch_Score_Breakdown_2016_AllianceFormGroup() {
		return new FormGroup<Match_Score_Breakdown_2016_AllianceFormProperties>({
			adjustPoints: new FormControl<number | null | undefined>(undefined),
			autoBoulderPoints: new FormControl<number | null | undefined>(undefined),
			autoBouldersHigh: new FormControl<number | null | undefined>(undefined),
			autoBouldersLow: new FormControl<number | null | undefined>(undefined),
			autoCrossingPoints: new FormControl<number | null | undefined>(undefined),
			autoPoints: new FormControl<number | null | undefined>(undefined),
			autoReachPoints: new FormControl<number | null | undefined>(undefined),
			breachPoints: new FormControl<number | null | undefined>(undefined),
			capturePoints: new FormControl<number | null | undefined>(undefined),
			foulCount: new FormControl<number | null | undefined>(undefined),
			foulPoints: new FormControl<number | null | undefined>(undefined),
			position1crossings: new FormControl<number | null | undefined>(undefined),
			position2: new FormControl<string | null | undefined>(undefined),
			position2crossings: new FormControl<number | null | undefined>(undefined),
			position3: new FormControl<string | null | undefined>(undefined),
			position3crossings: new FormControl<number | null | undefined>(undefined),
			position4: new FormControl<string | null | undefined>(undefined),
			position4crossings: new FormControl<number | null | undefined>(undefined),
			position5: new FormControl<string | null | undefined>(undefined),
			position5crossings: new FormControl<number | null | undefined>(undefined),
			robot1Auto: new FormControl<Match_Score_Breakdown_2016_AllianceRobot1Auto | null | undefined>(undefined),
			robot2Auto: new FormControl<Match_Score_Breakdown_2016_AllianceRobot1Auto | null | undefined>(undefined),
			robot3Auto: new FormControl<Match_Score_Breakdown_2016_AllianceRobot1Auto | null | undefined>(undefined),
			techFoulCount: new FormControl<number | null | undefined>(undefined),
			teleopBoulderPoints: new FormControl<number | null | undefined>(undefined),
			teleopBouldersHigh: new FormControl<number | null | undefined>(undefined),
			teleopBouldersLow: new FormControl<number | null | undefined>(undefined),
			teleopChallengePoints: new FormControl<number | null | undefined>(undefined),
			teleopCrossingPoints: new FormControl<number | null | undefined>(undefined),
			teleopDefensesBreached: new FormControl<boolean | null | undefined>(undefined),
			teleopPoints: new FormControl<number | null | undefined>(undefined),
			teleopScalePoints: new FormControl<number | null | undefined>(undefined),
			teleopTowerCaptured: new FormControl<number | null | undefined>(undefined),
			totalPoints: new FormControl<number | null | undefined>(undefined),
			towerEndStrength: new FormControl<number | null | undefined>(undefined),
			towerFaceA: new FormControl<string | null | undefined>(undefined),
			towerFaceB: new FormControl<string | null | undefined>(undefined),
			towerFaceC: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Match_Score_Breakdown_2016_AllianceRobot1Auto { Crossed = 'Crossed', Reached = 'Reached', None = 'None' }


	/** See the 2017 FMS API documentation for a description of each value. */
	export interface Match_Score_Breakdown_2017 {
		blue?: Match_Score_Breakdown_2017_Alliance;
		red?: Match_Score_Breakdown_2017_Alliance;
	}

	/** See the 2017 FMS API documentation for a description of each value. */
	export interface Match_Score_Breakdown_2017FormProperties {
	}
	export function CreateMatch_Score_Breakdown_2017FormGroup() {
		return new FormGroup<Match_Score_Breakdown_2017FormProperties>({
		});

	}

	export interface Match_Score_Breakdown_2017_Alliance {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		adjustPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoFuelHigh?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoFuelLow?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoFuelPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoMobilityPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoRotorPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		foulCount?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		foulPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		kPaBonusPoints?: number | null;
		kPaRankingPointAchieved?: boolean | null;
		robot1Auto?: Match_Score_Breakdown_2017_AllianceRobot1Auto | null;
		robot2Auto?: Match_Score_Breakdown_2017_AllianceRobot1Auto | null;
		robot3Auto?: Match_Score_Breakdown_2017_AllianceRobot1Auto | null;
		rotor1Auto?: boolean | null;
		rotor1Engaged?: boolean | null;
		rotor2Auto?: boolean | null;
		rotor2Engaged?: boolean | null;
		rotor3Engaged?: boolean | null;
		rotor4Engaged?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		rotorBonusPoints?: number | null;
		rotorRankingPointAchieved?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		techFoulCount?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopFuelHigh?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopFuelLow?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopFuelPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopRotorPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopTakeoffPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalPoints?: number | null;
		touchpadFar?: string | null;
		touchpadMiddle?: string | null;
		touchpadNear?: string | null;
	}
	export interface Match_Score_Breakdown_2017_AllianceFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		adjustPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoFuelHigh: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoFuelLow: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoFuelPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoMobilityPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoRotorPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		foulCount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		foulPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		kPaBonusPoints: FormControl<number | null | undefined>,
		kPaRankingPointAchieved: FormControl<boolean | null | undefined>,
		robot1Auto: FormControl<Match_Score_Breakdown_2017_AllianceRobot1Auto | null | undefined>,
		robot2Auto: FormControl<Match_Score_Breakdown_2017_AllianceRobot1Auto | null | undefined>,
		robot3Auto: FormControl<Match_Score_Breakdown_2017_AllianceRobot1Auto | null | undefined>,
		rotor1Auto: FormControl<boolean | null | undefined>,
		rotor1Engaged: FormControl<boolean | null | undefined>,
		rotor2Auto: FormControl<boolean | null | undefined>,
		rotor2Engaged: FormControl<boolean | null | undefined>,
		rotor3Engaged: FormControl<boolean | null | undefined>,
		rotor4Engaged: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		rotorBonusPoints: FormControl<number | null | undefined>,
		rotorRankingPointAchieved: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		techFoulCount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopFuelHigh: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopFuelLow: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopFuelPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopRotorPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopTakeoffPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalPoints: FormControl<number | null | undefined>,
		touchpadFar: FormControl<string | null | undefined>,
		touchpadMiddle: FormControl<string | null | undefined>,
		touchpadNear: FormControl<string | null | undefined>,
	}
	export function CreateMatch_Score_Breakdown_2017_AllianceFormGroup() {
		return new FormGroup<Match_Score_Breakdown_2017_AllianceFormProperties>({
			adjustPoints: new FormControl<number | null | undefined>(undefined),
			autoFuelHigh: new FormControl<number | null | undefined>(undefined),
			autoFuelLow: new FormControl<number | null | undefined>(undefined),
			autoFuelPoints: new FormControl<number | null | undefined>(undefined),
			autoMobilityPoints: new FormControl<number | null | undefined>(undefined),
			autoPoints: new FormControl<number | null | undefined>(undefined),
			autoRotorPoints: new FormControl<number | null | undefined>(undefined),
			foulCount: new FormControl<number | null | undefined>(undefined),
			foulPoints: new FormControl<number | null | undefined>(undefined),
			kPaBonusPoints: new FormControl<number | null | undefined>(undefined),
			kPaRankingPointAchieved: new FormControl<boolean | null | undefined>(undefined),
			robot1Auto: new FormControl<Match_Score_Breakdown_2017_AllianceRobot1Auto | null | undefined>(undefined),
			robot2Auto: new FormControl<Match_Score_Breakdown_2017_AllianceRobot1Auto | null | undefined>(undefined),
			robot3Auto: new FormControl<Match_Score_Breakdown_2017_AllianceRobot1Auto | null | undefined>(undefined),
			rotor1Auto: new FormControl<boolean | null | undefined>(undefined),
			rotor1Engaged: new FormControl<boolean | null | undefined>(undefined),
			rotor2Auto: new FormControl<boolean | null | undefined>(undefined),
			rotor2Engaged: new FormControl<boolean | null | undefined>(undefined),
			rotor3Engaged: new FormControl<boolean | null | undefined>(undefined),
			rotor4Engaged: new FormControl<boolean | null | undefined>(undefined),
			rotorBonusPoints: new FormControl<number | null | undefined>(undefined),
			rotorRankingPointAchieved: new FormControl<boolean | null | undefined>(undefined),
			techFoulCount: new FormControl<number | null | undefined>(undefined),
			teleopFuelHigh: new FormControl<number | null | undefined>(undefined),
			teleopFuelLow: new FormControl<number | null | undefined>(undefined),
			teleopFuelPoints: new FormControl<number | null | undefined>(undefined),
			teleopPoints: new FormControl<number | null | undefined>(undefined),
			teleopRotorPoints: new FormControl<number | null | undefined>(undefined),
			teleopTakeoffPoints: new FormControl<number | null | undefined>(undefined),
			totalPoints: new FormControl<number | null | undefined>(undefined),
			touchpadFar: new FormControl<string | null | undefined>(undefined),
			touchpadMiddle: new FormControl<string | null | undefined>(undefined),
			touchpadNear: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Match_Score_Breakdown_2017_AllianceRobot1Auto { Unknown = 'Unknown', Mobility = 'Mobility', None = 'None' }


	/** See the 2018 FMS API documentation for a description of each value. https://frcevents2.docs.apiary.io/#/reference/match-results/score-details */
	export interface Match_Score_Breakdown_2018 {
		blue?: Match_Score_Breakdown_2018_Alliance;
		red?: Match_Score_Breakdown_2018_Alliance;
	}

	/** See the 2018 FMS API documentation for a description of each value. https://frcevents2.docs.apiary.io/#/reference/match-results/score-details */
	export interface Match_Score_Breakdown_2018FormProperties {
	}
	export function CreateMatch_Score_Breakdown_2018FormGroup() {
		return new FormGroup<Match_Score_Breakdown_2018FormProperties>({
		});

	}

	export interface Match_Score_Breakdown_2018_Alliance {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		adjustPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoOwnershipPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoPoints?: number | null;
		autoQuestRankingPoint?: boolean | null;
		autoRobot1?: string | null;
		autoRobot2?: string | null;
		autoRobot3?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoRunPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoScaleOwnershipSec?: number | null;
		autoSwitchAtZero?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoSwitchOwnershipSec?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		endgamePoints?: number | null;
		endgameRobot1?: string | null;
		endgameRobot2?: string | null;
		endgameRobot3?: string | null;
		faceTheBossRankingPoint?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		foulCount?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		foulPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		rp?: number | null;

		/** Unofficial TBA-computed value of the FMS provided GameData given to the alliance teams at the start of the match. 3 Character String containing `L` and `R` only. The first character represents the near switch, the 2nd the scale, and the 3rd the far, opposing, switch from the alliance's perspective. An `L` in a position indicates the platform on the left will be lit for the alliance while an `R` will indicate the right platform will be lit for the alliance. See also [WPI Screen Steps](https://wpilib.screenstepslive.com/s/currentCS/m/getting_started/l/826278-2018-game-data-details). */
		tba_gameData?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		techFoulCount?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopOwnershipPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopScaleBoostSec?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopScaleForceSec?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopScaleOwnershipSec?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopSwitchBoostSec?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopSwitchForceSec?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopSwitchOwnershipSec?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		vaultBoostPlayed?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		vaultBoostTotal?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		vaultForcePlayed?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		vaultForceTotal?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		vaultLevitatePlayed?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		vaultLevitateTotal?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		vaultPoints?: number | null;
	}
	export interface Match_Score_Breakdown_2018_AllianceFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		adjustPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoOwnershipPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoPoints: FormControl<number | null | undefined>,
		autoQuestRankingPoint: FormControl<boolean | null | undefined>,
		autoRobot1: FormControl<string | null | undefined>,
		autoRobot2: FormControl<string | null | undefined>,
		autoRobot3: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoRunPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoScaleOwnershipSec: FormControl<number | null | undefined>,
		autoSwitchAtZero: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoSwitchOwnershipSec: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		endgamePoints: FormControl<number | null | undefined>,
		endgameRobot1: FormControl<string | null | undefined>,
		endgameRobot2: FormControl<string | null | undefined>,
		endgameRobot3: FormControl<string | null | undefined>,
		faceTheBossRankingPoint: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		foulCount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		foulPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		rp: FormControl<number | null | undefined>,

		/** Unofficial TBA-computed value of the FMS provided GameData given to the alliance teams at the start of the match. 3 Character String containing `L` and `R` only. The first character represents the near switch, the 2nd the scale, and the 3rd the far, opposing, switch from the alliance's perspective. An `L` in a position indicates the platform on the left will be lit for the alliance while an `R` will indicate the right platform will be lit for the alliance. See also [WPI Screen Steps](https://wpilib.screenstepslive.com/s/currentCS/m/getting_started/l/826278-2018-game-data-details). */
		tba_gameData: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		techFoulCount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopOwnershipPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopScaleBoostSec: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopScaleForceSec: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopScaleOwnershipSec: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopSwitchBoostSec: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopSwitchForceSec: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopSwitchOwnershipSec: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		vaultBoostPlayed: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		vaultBoostTotal: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		vaultForcePlayed: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		vaultForceTotal: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		vaultLevitatePlayed: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		vaultLevitateTotal: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		vaultPoints: FormControl<number | null | undefined>,
	}
	export function CreateMatch_Score_Breakdown_2018_AllianceFormGroup() {
		return new FormGroup<Match_Score_Breakdown_2018_AllianceFormProperties>({
			adjustPoints: new FormControl<number | null | undefined>(undefined),
			autoOwnershipPoints: new FormControl<number | null | undefined>(undefined),
			autoPoints: new FormControl<number | null | undefined>(undefined),
			autoQuestRankingPoint: new FormControl<boolean | null | undefined>(undefined),
			autoRobot1: new FormControl<string | null | undefined>(undefined),
			autoRobot2: new FormControl<string | null | undefined>(undefined),
			autoRobot3: new FormControl<string | null | undefined>(undefined),
			autoRunPoints: new FormControl<number | null | undefined>(undefined),
			autoScaleOwnershipSec: new FormControl<number | null | undefined>(undefined),
			autoSwitchAtZero: new FormControl<boolean | null | undefined>(undefined),
			autoSwitchOwnershipSec: new FormControl<number | null | undefined>(undefined),
			endgamePoints: new FormControl<number | null | undefined>(undefined),
			endgameRobot1: new FormControl<string | null | undefined>(undefined),
			endgameRobot2: new FormControl<string | null | undefined>(undefined),
			endgameRobot3: new FormControl<string | null | undefined>(undefined),
			faceTheBossRankingPoint: new FormControl<boolean | null | undefined>(undefined),
			foulCount: new FormControl<number | null | undefined>(undefined),
			foulPoints: new FormControl<number | null | undefined>(undefined),
			rp: new FormControl<number | null | undefined>(undefined),
			tba_gameData: new FormControl<string | null | undefined>(undefined),
			techFoulCount: new FormControl<number | null | undefined>(undefined),
			teleopOwnershipPoints: new FormControl<number | null | undefined>(undefined),
			teleopPoints: new FormControl<number | null | undefined>(undefined),
			teleopScaleBoostSec: new FormControl<number | null | undefined>(undefined),
			teleopScaleForceSec: new FormControl<number | null | undefined>(undefined),
			teleopScaleOwnershipSec: new FormControl<number | null | undefined>(undefined),
			teleopSwitchBoostSec: new FormControl<number | null | undefined>(undefined),
			teleopSwitchForceSec: new FormControl<number | null | undefined>(undefined),
			teleopSwitchOwnershipSec: new FormControl<number | null | undefined>(undefined),
			totalPoints: new FormControl<number | null | undefined>(undefined),
			vaultBoostPlayed: new FormControl<number | null | undefined>(undefined),
			vaultBoostTotal: new FormControl<number | null | undefined>(undefined),
			vaultForcePlayed: new FormControl<number | null | undefined>(undefined),
			vaultForceTotal: new FormControl<number | null | undefined>(undefined),
			vaultLevitatePlayed: new FormControl<number | null | undefined>(undefined),
			vaultLevitateTotal: new FormControl<number | null | undefined>(undefined),
			vaultPoints: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** See the 2019 FMS API documentation for a description of each value. https://frcevents2.docs.apiary.io/#/reference/match-results/score-details */
	export interface Match_Score_Breakdown_2019 {
		blue?: Match_Score_Breakdown_2019_Alliance;
		red?: Match_Score_Breakdown_2019_Alliance;
	}

	/** See the 2019 FMS API documentation for a description of each value. https://frcevents2.docs.apiary.io/#/reference/match-results/score-details */
	export interface Match_Score_Breakdown_2019FormProperties {
	}
	export function CreateMatch_Score_Breakdown_2019FormGroup() {
		return new FormGroup<Match_Score_Breakdown_2019FormProperties>({
		});

	}

	export interface Match_Score_Breakdown_2019_Alliance {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		adjustPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoPoints?: number | null;
		bay1?: string | null;
		bay2?: string | null;
		bay3?: string | null;
		bay4?: string | null;
		bay5?: string | null;
		bay6?: string | null;
		bay7?: string | null;
		bay8?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		cargoPoints?: number | null;
		completeRocketRankingPoint?: boolean | null;
		completedRocketFar?: boolean | null;
		completedRocketNear?: boolean | null;
		endgameRobot1?: string | null;
		endgameRobot2?: string | null;
		endgameRobot3?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		foulCount?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		foulPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		habClimbPoints?: number | null;
		habDockingRankingPoint?: boolean | null;
		habLineRobot1?: string | null;
		habLineRobot2?: string | null;
		habLineRobot3?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		hatchPanelPoints?: number | null;
		lowLeftRocketFar?: string | null;
		lowLeftRocketNear?: string | null;
		lowRightRocketFar?: string | null;
		lowRightRocketNear?: string | null;
		midLeftRocketFar?: string | null;
		midLeftRocketNear?: string | null;
		midRightRocketFar?: string | null;
		midRightRocketNear?: string | null;
		preMatchBay1?: string | null;
		preMatchBay2?: string | null;
		preMatchBay3?: string | null;
		preMatchBay6?: string | null;
		preMatchBay7?: string | null;
		preMatchBay8?: string | null;
		preMatchLevelRobot1?: string | null;
		preMatchLevelRobot2?: string | null;
		preMatchLevelRobot3?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		rp?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		sandStormBonusPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		techFoulCount?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopPoints?: number | null;
		topLeftRocketFar?: string | null;
		topLeftRocketNear?: string | null;
		topRightRocketFar?: string | null;
		topRightRocketNear?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalPoints?: number | null;
	}
	export interface Match_Score_Breakdown_2019_AllianceFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		adjustPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoPoints: FormControl<number | null | undefined>,
		bay1: FormControl<string | null | undefined>,
		bay2: FormControl<string | null | undefined>,
		bay3: FormControl<string | null | undefined>,
		bay4: FormControl<string | null | undefined>,
		bay5: FormControl<string | null | undefined>,
		bay6: FormControl<string | null | undefined>,
		bay7: FormControl<string | null | undefined>,
		bay8: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		cargoPoints: FormControl<number | null | undefined>,
		completeRocketRankingPoint: FormControl<boolean | null | undefined>,
		completedRocketFar: FormControl<boolean | null | undefined>,
		completedRocketNear: FormControl<boolean | null | undefined>,
		endgameRobot1: FormControl<string | null | undefined>,
		endgameRobot2: FormControl<string | null | undefined>,
		endgameRobot3: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		foulCount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		foulPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		habClimbPoints: FormControl<number | null | undefined>,
		habDockingRankingPoint: FormControl<boolean | null | undefined>,
		habLineRobot1: FormControl<string | null | undefined>,
		habLineRobot2: FormControl<string | null | undefined>,
		habLineRobot3: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		hatchPanelPoints: FormControl<number | null | undefined>,
		lowLeftRocketFar: FormControl<string | null | undefined>,
		lowLeftRocketNear: FormControl<string | null | undefined>,
		lowRightRocketFar: FormControl<string | null | undefined>,
		lowRightRocketNear: FormControl<string | null | undefined>,
		midLeftRocketFar: FormControl<string | null | undefined>,
		midLeftRocketNear: FormControl<string | null | undefined>,
		midRightRocketFar: FormControl<string | null | undefined>,
		midRightRocketNear: FormControl<string | null | undefined>,
		preMatchBay1: FormControl<string | null | undefined>,
		preMatchBay2: FormControl<string | null | undefined>,
		preMatchBay3: FormControl<string | null | undefined>,
		preMatchBay6: FormControl<string | null | undefined>,
		preMatchBay7: FormControl<string | null | undefined>,
		preMatchBay8: FormControl<string | null | undefined>,
		preMatchLevelRobot1: FormControl<string | null | undefined>,
		preMatchLevelRobot2: FormControl<string | null | undefined>,
		preMatchLevelRobot3: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		rp: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		sandStormBonusPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		techFoulCount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopPoints: FormControl<number | null | undefined>,
		topLeftRocketFar: FormControl<string | null | undefined>,
		topLeftRocketNear: FormControl<string | null | undefined>,
		topRightRocketFar: FormControl<string | null | undefined>,
		topRightRocketNear: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalPoints: FormControl<number | null | undefined>,
	}
	export function CreateMatch_Score_Breakdown_2019_AllianceFormGroup() {
		return new FormGroup<Match_Score_Breakdown_2019_AllianceFormProperties>({
			adjustPoints: new FormControl<number | null | undefined>(undefined),
			autoPoints: new FormControl<number | null | undefined>(undefined),
			bay1: new FormControl<string | null | undefined>(undefined),
			bay2: new FormControl<string | null | undefined>(undefined),
			bay3: new FormControl<string | null | undefined>(undefined),
			bay4: new FormControl<string | null | undefined>(undefined),
			bay5: new FormControl<string | null | undefined>(undefined),
			bay6: new FormControl<string | null | undefined>(undefined),
			bay7: new FormControl<string | null | undefined>(undefined),
			bay8: new FormControl<string | null | undefined>(undefined),
			cargoPoints: new FormControl<number | null | undefined>(undefined),
			completeRocketRankingPoint: new FormControl<boolean | null | undefined>(undefined),
			completedRocketFar: new FormControl<boolean | null | undefined>(undefined),
			completedRocketNear: new FormControl<boolean | null | undefined>(undefined),
			endgameRobot1: new FormControl<string | null | undefined>(undefined),
			endgameRobot2: new FormControl<string | null | undefined>(undefined),
			endgameRobot3: new FormControl<string | null | undefined>(undefined),
			foulCount: new FormControl<number | null | undefined>(undefined),
			foulPoints: new FormControl<number | null | undefined>(undefined),
			habClimbPoints: new FormControl<number | null | undefined>(undefined),
			habDockingRankingPoint: new FormControl<boolean | null | undefined>(undefined),
			habLineRobot1: new FormControl<string | null | undefined>(undefined),
			habLineRobot2: new FormControl<string | null | undefined>(undefined),
			habLineRobot3: new FormControl<string | null | undefined>(undefined),
			hatchPanelPoints: new FormControl<number | null | undefined>(undefined),
			lowLeftRocketFar: new FormControl<string | null | undefined>(undefined),
			lowLeftRocketNear: new FormControl<string | null | undefined>(undefined),
			lowRightRocketFar: new FormControl<string | null | undefined>(undefined),
			lowRightRocketNear: new FormControl<string | null | undefined>(undefined),
			midLeftRocketFar: new FormControl<string | null | undefined>(undefined),
			midLeftRocketNear: new FormControl<string | null | undefined>(undefined),
			midRightRocketFar: new FormControl<string | null | undefined>(undefined),
			midRightRocketNear: new FormControl<string | null | undefined>(undefined),
			preMatchBay1: new FormControl<string | null | undefined>(undefined),
			preMatchBay2: new FormControl<string | null | undefined>(undefined),
			preMatchBay3: new FormControl<string | null | undefined>(undefined),
			preMatchBay6: new FormControl<string | null | undefined>(undefined),
			preMatchBay7: new FormControl<string | null | undefined>(undefined),
			preMatchBay8: new FormControl<string | null | undefined>(undefined),
			preMatchLevelRobot1: new FormControl<string | null | undefined>(undefined),
			preMatchLevelRobot2: new FormControl<string | null | undefined>(undefined),
			preMatchLevelRobot3: new FormControl<string | null | undefined>(undefined),
			rp: new FormControl<number | null | undefined>(undefined),
			sandStormBonusPoints: new FormControl<number | null | undefined>(undefined),
			techFoulCount: new FormControl<number | null | undefined>(undefined),
			teleopPoints: new FormControl<number | null | undefined>(undefined),
			topLeftRocketFar: new FormControl<string | null | undefined>(undefined),
			topLeftRocketNear: new FormControl<string | null | undefined>(undefined),
			topRightRocketFar: new FormControl<string | null | undefined>(undefined),
			topRightRocketNear: new FormControl<string | null | undefined>(undefined),
			totalPoints: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** See the 2020 FMS API documentation for a description of each value. https://frcevents2.docs.apiary.io/#/reference/match-results/score-details */
	export interface Match_Score_Breakdown_2020 {
		blue?: Match_Score_Breakdown_2020_Alliance;
		red?: Match_Score_Breakdown_2020_Alliance;
	}

	/** See the 2020 FMS API documentation for a description of each value. https://frcevents2.docs.apiary.io/#/reference/match-results/score-details */
	export interface Match_Score_Breakdown_2020FormProperties {
	}
	export function CreateMatch_Score_Breakdown_2020FormGroup() {
		return new FormGroup<Match_Score_Breakdown_2020FormProperties>({
		});

	}

	export interface Match_Score_Breakdown_2020_Alliance {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		adjustPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoCellPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoCellsBottom?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoCellsInner?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoCellsOuter?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoInitLinePoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		controlPanelPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		endgamePoints?: number | null;
		endgameRobot1?: string | null;
		endgameRobot2?: string | null;
		endgameRobot3?: string | null;
		endgameRungIsLevel?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		foulCount?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		foulPoints?: number | null;
		initLineRobot1?: string | null;
		initLineRobot2?: string | null;
		initLineRobot3?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		rp?: number | null;
		shieldEnergizedRankingPoint?: boolean | null;
		shieldOperationalRankingPoint?: boolean | null;
		stage1Activated?: boolean | null;
		stage2Activated?: boolean | null;
		stage3Activated?: boolean | null;
		stage3TargetColor?: string | null;

		/**
		 * Unofficial TBA-computed value that counts the number of robots who were hanging at the end of the match.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		tba_numRobotsHanging?: number | null;

		/** Unofficial TBA-computed value that indicates whether the shieldEnergizedRankingPoint was earned normally or awarded due to a foul. */
		tba_shieldEnergizedRankingPointFromFoul?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		techFoulCount?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopCellPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopCellsBottom?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopCellsInner?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopCellsOuter?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalPoints?: number | null;
	}
	export interface Match_Score_Breakdown_2020_AllianceFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		adjustPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoCellPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoCellsBottom: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoCellsInner: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoCellsOuter: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoInitLinePoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		controlPanelPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		endgamePoints: FormControl<number | null | undefined>,
		endgameRobot1: FormControl<string | null | undefined>,
		endgameRobot2: FormControl<string | null | undefined>,
		endgameRobot3: FormControl<string | null | undefined>,
		endgameRungIsLevel: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		foulCount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		foulPoints: FormControl<number | null | undefined>,
		initLineRobot1: FormControl<string | null | undefined>,
		initLineRobot2: FormControl<string | null | undefined>,
		initLineRobot3: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		rp: FormControl<number | null | undefined>,
		shieldEnergizedRankingPoint: FormControl<boolean | null | undefined>,
		shieldOperationalRankingPoint: FormControl<boolean | null | undefined>,
		stage1Activated: FormControl<boolean | null | undefined>,
		stage2Activated: FormControl<boolean | null | undefined>,
		stage3Activated: FormControl<boolean | null | undefined>,
		stage3TargetColor: FormControl<string | null | undefined>,

		/**
		 * Unofficial TBA-computed value that counts the number of robots who were hanging at the end of the match.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		tba_numRobotsHanging: FormControl<number | null | undefined>,

		/** Unofficial TBA-computed value that indicates whether the shieldEnergizedRankingPoint was earned normally or awarded due to a foul. */
		tba_shieldEnergizedRankingPointFromFoul: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		techFoulCount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopCellPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopCellsBottom: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopCellsInner: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopCellsOuter: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalPoints: FormControl<number | null | undefined>,
	}
	export function CreateMatch_Score_Breakdown_2020_AllianceFormGroup() {
		return new FormGroup<Match_Score_Breakdown_2020_AllianceFormProperties>({
			adjustPoints: new FormControl<number | null | undefined>(undefined),
			autoCellPoints: new FormControl<number | null | undefined>(undefined),
			autoCellsBottom: new FormControl<number | null | undefined>(undefined),
			autoCellsInner: new FormControl<number | null | undefined>(undefined),
			autoCellsOuter: new FormControl<number | null | undefined>(undefined),
			autoInitLinePoints: new FormControl<number | null | undefined>(undefined),
			autoPoints: new FormControl<number | null | undefined>(undefined),
			controlPanelPoints: new FormControl<number | null | undefined>(undefined),
			endgamePoints: new FormControl<number | null | undefined>(undefined),
			endgameRobot1: new FormControl<string | null | undefined>(undefined),
			endgameRobot2: new FormControl<string | null | undefined>(undefined),
			endgameRobot3: new FormControl<string | null | undefined>(undefined),
			endgameRungIsLevel: new FormControl<string | null | undefined>(undefined),
			foulCount: new FormControl<number | null | undefined>(undefined),
			foulPoints: new FormControl<number | null | undefined>(undefined),
			initLineRobot1: new FormControl<string | null | undefined>(undefined),
			initLineRobot2: new FormControl<string | null | undefined>(undefined),
			initLineRobot3: new FormControl<string | null | undefined>(undefined),
			rp: new FormControl<number | null | undefined>(undefined),
			shieldEnergizedRankingPoint: new FormControl<boolean | null | undefined>(undefined),
			shieldOperationalRankingPoint: new FormControl<boolean | null | undefined>(undefined),
			stage1Activated: new FormControl<boolean | null | undefined>(undefined),
			stage2Activated: new FormControl<boolean | null | undefined>(undefined),
			stage3Activated: new FormControl<boolean | null | undefined>(undefined),
			stage3TargetColor: new FormControl<string | null | undefined>(undefined),
			tba_numRobotsHanging: new FormControl<number | null | undefined>(undefined),
			tba_shieldEnergizedRankingPointFromFoul: new FormControl<boolean | null | undefined>(undefined),
			techFoulCount: new FormControl<number | null | undefined>(undefined),
			teleopCellPoints: new FormControl<number | null | undefined>(undefined),
			teleopCellsBottom: new FormControl<number | null | undefined>(undefined),
			teleopCellsInner: new FormControl<number | null | undefined>(undefined),
			teleopCellsOuter: new FormControl<number | null | undefined>(undefined),
			teleopPoints: new FormControl<number | null | undefined>(undefined),
			totalPoints: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** See the 2022 FMS API documentation for a description of each value. https://frc-api-docs.firstinspires.org */
	export interface Match_Score_Breakdown_2022 {
		blue?: Match_Score_Breakdown_2022_Alliance;
		red?: Match_Score_Breakdown_2022_Alliance;
	}

	/** See the 2022 FMS API documentation for a description of each value. https://frc-api-docs.firstinspires.org */
	export interface Match_Score_Breakdown_2022FormProperties {
	}
	export function CreateMatch_Score_Breakdown_2022FormGroup() {
		return new FormGroup<Match_Score_Breakdown_2022FormProperties>({
		});

	}

	export interface Match_Score_Breakdown_2022_Alliance {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		adjustPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoCargoLowerBlue?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoCargoLowerFar?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoCargoLowerNear?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoCargoLowerRed?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoCargoPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoCargoTotal?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoCargoUpperBlue?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoCargoUpperFar?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoCargoUpperNear?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoCargoUpperRed?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoTaxiPoints?: number | null;
		cargoBonusRankingPoint?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		endgamePoints?: number | null;
		endgameRobot1?: Match_Score_Breakdown_2022_AllianceEndgameRobot1 | null;
		endgameRobot2?: Match_Score_Breakdown_2022_AllianceEndgameRobot1 | null;
		endgameRobot3?: Match_Score_Breakdown_2022_AllianceEndgameRobot1 | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		foulCount?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		foulPoints?: number | null;
		hangarBonusRankingPoint?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		matchCargoTotal?: number | null;
		quintetAchieved?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		rp?: number | null;
		taxiRobot1?: Match_Score_Breakdown_2022_AllianceTaxiRobot1 | null;
		taxiRobot2?: Match_Score_Breakdown_2022_AllianceTaxiRobot1 | null;
		taxiRobot3?: Match_Score_Breakdown_2022_AllianceTaxiRobot1 | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		techFoulCount?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopCargoLowerBlue?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopCargoLowerFar?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopCargoLowerNear?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopCargoLowerRed?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopCargoPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopCargoTotal?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopCargoUpperBlue?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopCargoUpperFar?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopCargoUpperNear?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopCargoUpperRed?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalPoints?: number | null;
	}
	export interface Match_Score_Breakdown_2022_AllianceFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		adjustPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoCargoLowerBlue: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoCargoLowerFar: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoCargoLowerNear: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoCargoLowerRed: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoCargoPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoCargoTotal: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoCargoUpperBlue: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoCargoUpperFar: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoCargoUpperNear: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoCargoUpperRed: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoTaxiPoints: FormControl<number | null | undefined>,
		cargoBonusRankingPoint: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		endgamePoints: FormControl<number | null | undefined>,
		endgameRobot1: FormControl<Match_Score_Breakdown_2022_AllianceEndgameRobot1 | null | undefined>,
		endgameRobot2: FormControl<Match_Score_Breakdown_2022_AllianceEndgameRobot1 | null | undefined>,
		endgameRobot3: FormControl<Match_Score_Breakdown_2022_AllianceEndgameRobot1 | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		foulCount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		foulPoints: FormControl<number | null | undefined>,
		hangarBonusRankingPoint: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		matchCargoTotal: FormControl<number | null | undefined>,
		quintetAchieved: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		rp: FormControl<number | null | undefined>,
		taxiRobot1: FormControl<Match_Score_Breakdown_2022_AllianceTaxiRobot1 | null | undefined>,
		taxiRobot2: FormControl<Match_Score_Breakdown_2022_AllianceTaxiRobot1 | null | undefined>,
		taxiRobot3: FormControl<Match_Score_Breakdown_2022_AllianceTaxiRobot1 | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		techFoulCount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopCargoLowerBlue: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopCargoLowerFar: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopCargoLowerNear: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopCargoLowerRed: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopCargoPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopCargoTotal: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopCargoUpperBlue: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopCargoUpperFar: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopCargoUpperNear: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopCargoUpperRed: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalPoints: FormControl<number | null | undefined>,
	}
	export function CreateMatch_Score_Breakdown_2022_AllianceFormGroup() {
		return new FormGroup<Match_Score_Breakdown_2022_AllianceFormProperties>({
			adjustPoints: new FormControl<number | null | undefined>(undefined),
			autoCargoLowerBlue: new FormControl<number | null | undefined>(undefined),
			autoCargoLowerFar: new FormControl<number | null | undefined>(undefined),
			autoCargoLowerNear: new FormControl<number | null | undefined>(undefined),
			autoCargoLowerRed: new FormControl<number | null | undefined>(undefined),
			autoCargoPoints: new FormControl<number | null | undefined>(undefined),
			autoCargoTotal: new FormControl<number | null | undefined>(undefined),
			autoCargoUpperBlue: new FormControl<number | null | undefined>(undefined),
			autoCargoUpperFar: new FormControl<number | null | undefined>(undefined),
			autoCargoUpperNear: new FormControl<number | null | undefined>(undefined),
			autoCargoUpperRed: new FormControl<number | null | undefined>(undefined),
			autoPoints: new FormControl<number | null | undefined>(undefined),
			autoTaxiPoints: new FormControl<number | null | undefined>(undefined),
			cargoBonusRankingPoint: new FormControl<boolean | null | undefined>(undefined),
			endgamePoints: new FormControl<number | null | undefined>(undefined),
			endgameRobot1: new FormControl<Match_Score_Breakdown_2022_AllianceEndgameRobot1 | null | undefined>(undefined),
			endgameRobot2: new FormControl<Match_Score_Breakdown_2022_AllianceEndgameRobot1 | null | undefined>(undefined),
			endgameRobot3: new FormControl<Match_Score_Breakdown_2022_AllianceEndgameRobot1 | null | undefined>(undefined),
			foulCount: new FormControl<number | null | undefined>(undefined),
			foulPoints: new FormControl<number | null | undefined>(undefined),
			hangarBonusRankingPoint: new FormControl<boolean | null | undefined>(undefined),
			matchCargoTotal: new FormControl<number | null | undefined>(undefined),
			quintetAchieved: new FormControl<boolean | null | undefined>(undefined),
			rp: new FormControl<number | null | undefined>(undefined),
			taxiRobot1: new FormControl<Match_Score_Breakdown_2022_AllianceTaxiRobot1 | null | undefined>(undefined),
			taxiRobot2: new FormControl<Match_Score_Breakdown_2022_AllianceTaxiRobot1 | null | undefined>(undefined),
			taxiRobot3: new FormControl<Match_Score_Breakdown_2022_AllianceTaxiRobot1 | null | undefined>(undefined),
			techFoulCount: new FormControl<number | null | undefined>(undefined),
			teleopCargoLowerBlue: new FormControl<number | null | undefined>(undefined),
			teleopCargoLowerFar: new FormControl<number | null | undefined>(undefined),
			teleopCargoLowerNear: new FormControl<number | null | undefined>(undefined),
			teleopCargoLowerRed: new FormControl<number | null | undefined>(undefined),
			teleopCargoPoints: new FormControl<number | null | undefined>(undefined),
			teleopCargoTotal: new FormControl<number | null | undefined>(undefined),
			teleopCargoUpperBlue: new FormControl<number | null | undefined>(undefined),
			teleopCargoUpperFar: new FormControl<number | null | undefined>(undefined),
			teleopCargoUpperNear: new FormControl<number | null | undefined>(undefined),
			teleopCargoUpperRed: new FormControl<number | null | undefined>(undefined),
			teleopPoints: new FormControl<number | null | undefined>(undefined),
			totalPoints: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum Match_Score_Breakdown_2022_AllianceEndgameRobot1 { Traversal = 'Traversal', High = 'High', Mid = 'Mid', Low = 'Low', None = 'None' }

	export enum Match_Score_Breakdown_2022_AllianceTaxiRobot1 { Yes = 'Yes', No = 'No' }


	/** See the 2023 FMS API documentation for a description of each value. https://frc-api-docs.firstinspires.org */
	export interface Match_Score_Breakdown_2023 {
		blue?: Match_Score_Breakdown_2023_Alliance;
		red?: Match_Score_Breakdown_2023_Alliance;
	}

	/** See the 2023 FMS API documentation for a description of each value. https://frc-api-docs.firstinspires.org */
	export interface Match_Score_Breakdown_2023FormProperties {
	}
	export function CreateMatch_Score_Breakdown_2023FormGroup() {
		return new FormGroup<Match_Score_Breakdown_2023FormProperties>({
		});

	}

	export interface Match_Score_Breakdown_2023_Alliance {
		activationBonusAchieved?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		adjustPoints?: number | null;
		autoBridgeState?: Match_Score_Breakdown_2023_AllianceAutoBridgeState | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoChargeStationPoints?: number | null;
		autoChargeStationRobot1?: Match_Score_Breakdown_2023_AllianceAutoChargeStationRobot1 | null;
		autoChargeStationRobot2?: Match_Score_Breakdown_2023_AllianceAutoChargeStationRobot1 | null;
		autoChargeStationRobot3?: Match_Score_Breakdown_2023_AllianceAutoChargeStationRobot1 | null;
		autoCommunity?: Match_Score_Breakdown_2023_AllianceAutoCommunity;
		autoDocked?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoGamePieceCount?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoGamePiecePoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoMobilityPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		coopGamePieceCount?: number | null;
		coopertitionCriteriaMet?: boolean | null;
		endGameBridgeState?: Match_Score_Breakdown_2023_AllianceAutoBridgeState | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		endGameChargeStationPoints?: number | null;
		endGameChargeStationRobot1?: Match_Score_Breakdown_2023_AllianceAutoChargeStationRobot1 | null;
		endGameChargeStationRobot2?: Match_Score_Breakdown_2023_AllianceAutoChargeStationRobot1 | null;
		endGameChargeStationRobot3?: Match_Score_Breakdown_2023_AllianceAutoChargeStationRobot1 | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		endGameParkPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		extraGamePieceCount?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		foulCount?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		foulPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		linkPoints?: number | null;
		Match_Score_Breakdown_2023_AllianceLinks?: Array<Match_Score_Breakdown_2023_AllianceLinks>;
		mobilityRobot1?: Match_Score_Breakdown_2022_AllianceTaxiRobot1 | null;
		mobilityRobot2?: Match_Score_Breakdown_2022_AllianceTaxiRobot1 | null;
		mobilityRobot3?: Match_Score_Breakdown_2022_AllianceTaxiRobot1 | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		rp?: number | null;
		sustainabilityBonusAchieved?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		techFoulCount?: number | null;
		teleopCommunity?: Match_Score_Breakdown_2023_AllianceTeleopCommunity;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopGamePieceCount?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopGamePiecePoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalChargeStationPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalPoints?: number | null;
	}
	export interface Match_Score_Breakdown_2023_AllianceFormProperties {
		activationBonusAchieved: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		adjustPoints: FormControl<number | null | undefined>,
		autoBridgeState: FormControl<Match_Score_Breakdown_2023_AllianceAutoBridgeState | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoChargeStationPoints: FormControl<number | null | undefined>,
		autoChargeStationRobot1: FormControl<Match_Score_Breakdown_2023_AllianceAutoChargeStationRobot1 | null | undefined>,
		autoChargeStationRobot2: FormControl<Match_Score_Breakdown_2023_AllianceAutoChargeStationRobot1 | null | undefined>,
		autoChargeStationRobot3: FormControl<Match_Score_Breakdown_2023_AllianceAutoChargeStationRobot1 | null | undefined>,
		autoDocked: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoGamePieceCount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoGamePiecePoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoMobilityPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		autoPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		coopGamePieceCount: FormControl<number | null | undefined>,
		coopertitionCriteriaMet: FormControl<boolean | null | undefined>,
		endGameBridgeState: FormControl<Match_Score_Breakdown_2023_AllianceAutoBridgeState | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		endGameChargeStationPoints: FormControl<number | null | undefined>,
		endGameChargeStationRobot1: FormControl<Match_Score_Breakdown_2023_AllianceAutoChargeStationRobot1 | null | undefined>,
		endGameChargeStationRobot2: FormControl<Match_Score_Breakdown_2023_AllianceAutoChargeStationRobot1 | null | undefined>,
		endGameChargeStationRobot3: FormControl<Match_Score_Breakdown_2023_AllianceAutoChargeStationRobot1 | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		endGameParkPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		extraGamePieceCount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		foulCount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		foulPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		linkPoints: FormControl<number | null | undefined>,
		mobilityRobot1: FormControl<Match_Score_Breakdown_2022_AllianceTaxiRobot1 | null | undefined>,
		mobilityRobot2: FormControl<Match_Score_Breakdown_2022_AllianceTaxiRobot1 | null | undefined>,
		mobilityRobot3: FormControl<Match_Score_Breakdown_2022_AllianceTaxiRobot1 | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		rp: FormControl<number | null | undefined>,
		sustainabilityBonusAchieved: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		techFoulCount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopGamePieceCount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopGamePiecePoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teleopPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalChargeStationPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalPoints: FormControl<number | null | undefined>,
	}
	export function CreateMatch_Score_Breakdown_2023_AllianceFormGroup() {
		return new FormGroup<Match_Score_Breakdown_2023_AllianceFormProperties>({
			activationBonusAchieved: new FormControl<boolean | null | undefined>(undefined),
			adjustPoints: new FormControl<number | null | undefined>(undefined),
			autoBridgeState: new FormControl<Match_Score_Breakdown_2023_AllianceAutoBridgeState | null | undefined>(undefined),
			autoChargeStationPoints: new FormControl<number | null | undefined>(undefined),
			autoChargeStationRobot1: new FormControl<Match_Score_Breakdown_2023_AllianceAutoChargeStationRobot1 | null | undefined>(undefined),
			autoChargeStationRobot2: new FormControl<Match_Score_Breakdown_2023_AllianceAutoChargeStationRobot1 | null | undefined>(undefined),
			autoChargeStationRobot3: new FormControl<Match_Score_Breakdown_2023_AllianceAutoChargeStationRobot1 | null | undefined>(undefined),
			autoDocked: new FormControl<boolean | null | undefined>(undefined),
			autoGamePieceCount: new FormControl<number | null | undefined>(undefined),
			autoGamePiecePoints: new FormControl<number | null | undefined>(undefined),
			autoMobilityPoints: new FormControl<number | null | undefined>(undefined),
			autoPoints: new FormControl<number | null | undefined>(undefined),
			coopGamePieceCount: new FormControl<number | null | undefined>(undefined),
			coopertitionCriteriaMet: new FormControl<boolean | null | undefined>(undefined),
			endGameBridgeState: new FormControl<Match_Score_Breakdown_2023_AllianceAutoBridgeState | null | undefined>(undefined),
			endGameChargeStationPoints: new FormControl<number | null | undefined>(undefined),
			endGameChargeStationRobot1: new FormControl<Match_Score_Breakdown_2023_AllianceAutoChargeStationRobot1 | null | undefined>(undefined),
			endGameChargeStationRobot2: new FormControl<Match_Score_Breakdown_2023_AllianceAutoChargeStationRobot1 | null | undefined>(undefined),
			endGameChargeStationRobot3: new FormControl<Match_Score_Breakdown_2023_AllianceAutoChargeStationRobot1 | null | undefined>(undefined),
			endGameParkPoints: new FormControl<number | null | undefined>(undefined),
			extraGamePieceCount: new FormControl<number | null | undefined>(undefined),
			foulCount: new FormControl<number | null | undefined>(undefined),
			foulPoints: new FormControl<number | null | undefined>(undefined),
			linkPoints: new FormControl<number | null | undefined>(undefined),
			mobilityRobot1: new FormControl<Match_Score_Breakdown_2022_AllianceTaxiRobot1 | null | undefined>(undefined),
			mobilityRobot2: new FormControl<Match_Score_Breakdown_2022_AllianceTaxiRobot1 | null | undefined>(undefined),
			mobilityRobot3: new FormControl<Match_Score_Breakdown_2022_AllianceTaxiRobot1 | null | undefined>(undefined),
			rp: new FormControl<number | null | undefined>(undefined),
			sustainabilityBonusAchieved: new FormControl<boolean | null | undefined>(undefined),
			techFoulCount: new FormControl<number | null | undefined>(undefined),
			teleopGamePieceCount: new FormControl<number | null | undefined>(undefined),
			teleopGamePiecePoints: new FormControl<number | null | undefined>(undefined),
			teleopPoints: new FormControl<number | null | undefined>(undefined),
			totalChargeStationPoints: new FormControl<number | null | undefined>(undefined),
			totalPoints: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum Match_Score_Breakdown_2023_AllianceAutoBridgeState { NotLevel = 'NotLevel', Level = 'Level' }

	export enum Match_Score_Breakdown_2023_AllianceAutoChargeStationRobot1 { None = 'None', Docked = 'Docked' }

	export interface Match_Score_Breakdown_2023_AllianceAutoCommunity {
		B?: Array<string>;
		M?: Array<string>;
		T?: Array<string>;
	}
	export interface Match_Score_Breakdown_2023_AllianceAutoCommunityFormProperties {
	}
	export function CreateMatch_Score_Breakdown_2023_AllianceAutoCommunityFormGroup() {
		return new FormGroup<Match_Score_Breakdown_2023_AllianceAutoCommunityFormProperties>({
		});

	}

	export interface Match_Score_Breakdown_2023_AllianceLinks {
		nodes?: Array<string>;
		row?: Match_Score_Breakdown_2023_AllianceLinksRow | null;
	}
	export interface Match_Score_Breakdown_2023_AllianceLinksFormProperties {
		row: FormControl<Match_Score_Breakdown_2023_AllianceLinksRow | null | undefined>,
	}
	export function CreateMatch_Score_Breakdown_2023_AllianceLinksFormGroup() {
		return new FormGroup<Match_Score_Breakdown_2023_AllianceLinksFormProperties>({
			row: new FormControl<Match_Score_Breakdown_2023_AllianceLinksRow | null | undefined>(undefined),
		});

	}

	export enum Match_Score_Breakdown_2023_AllianceLinksRow { Bottom = 'Bottom', Mid = 'Mid', Top = 'Top' }

	export interface Match_Score_Breakdown_2023_AllianceTeleopCommunity {
		B?: Array<string>;
		M?: Array<string>;
		T?: Array<string>;
	}
	export interface Match_Score_Breakdown_2023_AllianceTeleopCommunityFormProperties {
	}
	export function CreateMatch_Score_Breakdown_2023_AllianceTeleopCommunityFormGroup() {
		return new FormGroup<Match_Score_Breakdown_2023_AllianceTeleopCommunityFormProperties>({
		});

	}

	export interface Match_Simple {

		/**
		 * UNIX timestamp (seconds since 1-Jan-1970 00:00:00) of actual match start time.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		actual_time?: string | null;

		/** A list of alliances, the teams on the alliances, and their score. */
		alliances?: Match_SimpleAlliances;

		/**
		 * The competition level the match was played at.
		 * Required
		 */
		comp_level: MatchComp_level;

		/**
		 * Event key of the event the match was played at.
		 * Required
		 */
		event_key: string;

		/**
		 * TBA match key with the format `yyyy[EVENT_CODE]_[COMP_LEVEL]m[MATCH_NUMBER]`, where `yyyy` is the year, and `EVENT_CODE` is the event code of the event, `COMP_LEVEL` is (qm, ef, qf, sf, f), and `MATCH_NUMBER` is the match number in the competition level. A set number may append the competition level if more than one match in required per set.
		 * Required
		 */
		key: string;

		/**
		 * The match number of the match in the competition level.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		match_number: number;

		/**
		 * UNIX timestamp (seconds since 1-Jan-1970 00:00:00) of the TBA predicted match start time.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		predicted_time?: string | null;

		/**
		 * The set number in a series of matches where more than one match is required in the match series.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		set_number: number;

		/**
		 * UNIX timestamp (seconds since 1-Jan-1970 00:00:00) of the scheduled match time, as taken from the published schedule.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		time?: string | null;

		/** The color (red/blue) of the winning alliance. Will contain an empty string in the event of no winner, or a tie. */
		winning_alliance?: MatchWinning_alliance | null;
	}
	export interface Match_SimpleFormProperties {

		/**
		 * UNIX timestamp (seconds since 1-Jan-1970 00:00:00) of actual match start time.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		actual_time: FormControl<string | null | undefined>,

		/**
		 * The competition level the match was played at.
		 * Required
		 */
		comp_level: FormControl<MatchComp_level | null | undefined>,

		/**
		 * Event key of the event the match was played at.
		 * Required
		 */
		event_key: FormControl<string | null | undefined>,

		/**
		 * TBA match key with the format `yyyy[EVENT_CODE]_[COMP_LEVEL]m[MATCH_NUMBER]`, where `yyyy` is the year, and `EVENT_CODE` is the event code of the event, `COMP_LEVEL` is (qm, ef, qf, sf, f), and `MATCH_NUMBER` is the match number in the competition level. A set number may append the competition level if more than one match in required per set.
		 * Required
		 */
		key: FormControl<string | null | undefined>,

		/**
		 * The match number of the match in the competition level.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		match_number: FormControl<number | null | undefined>,

		/**
		 * UNIX timestamp (seconds since 1-Jan-1970 00:00:00) of the TBA predicted match start time.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		predicted_time: FormControl<string | null | undefined>,

		/**
		 * The set number in a series of matches where more than one match is required in the match series.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		set_number: FormControl<number | null | undefined>,

		/**
		 * UNIX timestamp (seconds since 1-Jan-1970 00:00:00) of the scheduled match time, as taken from the published schedule.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		time: FormControl<string | null | undefined>,

		/** The color (red/blue) of the winning alliance. Will contain an empty string in the event of no winner, or a tie. */
		winning_alliance: FormControl<MatchWinning_alliance | null | undefined>,
	}
	export function CreateMatch_SimpleFormGroup() {
		return new FormGroup<Match_SimpleFormProperties>({
			actual_time: new FormControl<string | null | undefined>(undefined),
			comp_level: new FormControl<MatchComp_level | null | undefined>(undefined, [Validators.required]),
			event_key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			match_number: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			predicted_time: new FormControl<string | null | undefined>(undefined),
			set_number: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			time: new FormControl<string | null | undefined>(undefined),
			winning_alliance: new FormControl<MatchWinning_alliance | null | undefined>(undefined),
		});

	}

	export interface Match_SimpleAlliances {
		blue?: Match_alliance;
		red?: Match_alliance;
	}
	export interface Match_SimpleAlliancesFormProperties {
	}
	export function CreateMatch_SimpleAlliancesFormGroup() {
		return new FormGroup<Match_SimpleAlliancesFormProperties>({
		});

	}


	/**
	 * Timeseries data for the 2018 game *FIRST* POWER UP.
	 * *WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up.
	 * *WARNING:* This model is currently under active development and may change at any time, including in breaking ways.
	 */
	export interface Match_Timeseries_2018 {

		/**
		 * 1 if the blue alliance is credited with the AUTO QUEST, 0 if not.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		blue_auto_quest?: number | null;

		/**
		 * Number of POWER CUBES in the BOOST section of the blue alliance VAULT.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		blue_boost_count?: number | null;

		/**
		 * Returns 1 if the blue alliance BOOST was played, or 0 if not played.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		blue_boost_played?: number | null;

		/** Name of the current blue alliance POWER UP being played, or `null`. */
		blue_current_powerup?: string | null;

		/**
		 * 1 if the blue alliance is credited with FACING THE BOSS, 0 if not.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		blue_face_the_boss?: number | null;

		/**
		 * Number of POWER CUBES in the FORCE section of the blue alliance VAULT.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		blue_force_count?: number | null;

		/**
		 * Returns 1 if the blue alliance FORCE was played, or 0 if not played.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		blue_force_played?: number | null;

		/**
		 * Number of POWER CUBES in the LEVITATE section of the blue alliance VAULT.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		blue_levitate_count?: number | null;

		/**
		 * Returns 1 if the blue alliance LEVITATE was played, or 0 if not played.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		blue_levitate_played?: number | null;

		/** Number of seconds remaining in the blue alliance POWER UP time, or 0 if none is active. */
		blue_powerup_time_remaining?: string | null;

		/**
		 * 1 if the blue alliance owns the SCALE, 0 if not.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		blue_scale_owned?: number | null;

		/**
		 * Current score for the blue alliance.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		blue_score?: number | null;

		/**
		 * 1 if the blue alliance owns their SWITCH, 0 if not.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		blue_switch_owned?: number | null;

		/** TBA event key with the format yyyy[EVENT_CODE], where yyyy is the year, and EVENT_CODE is the event code of the event. */
		event_key?: string | null;

		/** Match ID consisting of the level, match number, and set number, eg `qm45` or `f1m1`. */
		match_id?: string | null;

		/** Current mode of play, can be `pre_match`, `auto`, `telop`, or `post_match`. */
		mode?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		play?: number | null;

		/**
		 * 1 if the red alliance is credited with the AUTO QUEST, 0 if not.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		red_auto_quest?: number | null;

		/**
		 * Number of POWER CUBES in the BOOST section of the red alliance VAULT.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		red_boost_count?: number | null;

		/**
		 * Returns 1 if the red alliance BOOST was played, or 0 if not played.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		red_boost_played?: number | null;

		/** Name of the current red alliance POWER UP being played, or `null`. */
		red_current_powerup?: string | null;

		/**
		 * 1 if the red alliance is credited with FACING THE BOSS, 0 if not.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		red_face_the_boss?: number | null;

		/**
		 * Number of POWER CUBES in the FORCE section of the red alliance VAULT.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		red_force_count?: number | null;

		/**
		 * Returns 1 if the red alliance FORCE was played, or 0 if not played.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		red_force_played?: number | null;

		/**
		 * Number of POWER CUBES in the LEVITATE section of the red alliance VAULT.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		red_levitate_count?: number | null;

		/**
		 * Returns 1 if the red alliance LEVITATE was played, or 0 if not played.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		red_levitate_played?: number | null;

		/** Number of seconds remaining in the red alliance POWER UP time, or 0 if none is active. */
		red_powerup_time_remaining?: string | null;

		/**
		 * 1 if the red alliance owns the SCALE, 0 if not.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		red_scale_owned?: number | null;

		/**
		 * Current score for the red alliance.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		red_score?: number | null;

		/**
		 * 1 if the red alliance owns their SWITCH, 0 if not.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		red_switch_owned?: number | null;

		/**
		 * Amount of time remaining in the match, only valid during `auto` and `teleop` modes.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		time_remaining?: number | null;
	}

	/**
	 * Timeseries data for the 2018 game *FIRST* POWER UP.
	 * *WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up.
	 * *WARNING:* This model is currently under active development and may change at any time, including in breaking ways.
	 */
	export interface Match_Timeseries_2018FormProperties {

		/**
		 * 1 if the blue alliance is credited with the AUTO QUEST, 0 if not.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		blue_auto_quest: FormControl<number | null | undefined>,

		/**
		 * Number of POWER CUBES in the BOOST section of the blue alliance VAULT.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		blue_boost_count: FormControl<number | null | undefined>,

		/**
		 * Returns 1 if the blue alliance BOOST was played, or 0 if not played.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		blue_boost_played: FormControl<number | null | undefined>,

		/** Name of the current blue alliance POWER UP being played, or `null`. */
		blue_current_powerup: FormControl<string | null | undefined>,

		/**
		 * 1 if the blue alliance is credited with FACING THE BOSS, 0 if not.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		blue_face_the_boss: FormControl<number | null | undefined>,

		/**
		 * Number of POWER CUBES in the FORCE section of the blue alliance VAULT.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		blue_force_count: FormControl<number | null | undefined>,

		/**
		 * Returns 1 if the blue alliance FORCE was played, or 0 if not played.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		blue_force_played: FormControl<number | null | undefined>,

		/**
		 * Number of POWER CUBES in the LEVITATE section of the blue alliance VAULT.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		blue_levitate_count: FormControl<number | null | undefined>,

		/**
		 * Returns 1 if the blue alliance LEVITATE was played, or 0 if not played.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		blue_levitate_played: FormControl<number | null | undefined>,

		/** Number of seconds remaining in the blue alliance POWER UP time, or 0 if none is active. */
		blue_powerup_time_remaining: FormControl<string | null | undefined>,

		/**
		 * 1 if the blue alliance owns the SCALE, 0 if not.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		blue_scale_owned: FormControl<number | null | undefined>,

		/**
		 * Current score for the blue alliance.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		blue_score: FormControl<number | null | undefined>,

		/**
		 * 1 if the blue alliance owns their SWITCH, 0 if not.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		blue_switch_owned: FormControl<number | null | undefined>,

		/** TBA event key with the format yyyy[EVENT_CODE], where yyyy is the year, and EVENT_CODE is the event code of the event. */
		event_key: FormControl<string | null | undefined>,

		/** Match ID consisting of the level, match number, and set number, eg `qm45` or `f1m1`. */
		match_id: FormControl<string | null | undefined>,

		/** Current mode of play, can be `pre_match`, `auto`, `telop`, or `post_match`. */
		mode: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		play: FormControl<number | null | undefined>,

		/**
		 * 1 if the red alliance is credited with the AUTO QUEST, 0 if not.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		red_auto_quest: FormControl<number | null | undefined>,

		/**
		 * Number of POWER CUBES in the BOOST section of the red alliance VAULT.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		red_boost_count: FormControl<number | null | undefined>,

		/**
		 * Returns 1 if the red alliance BOOST was played, or 0 if not played.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		red_boost_played: FormControl<number | null | undefined>,

		/** Name of the current red alliance POWER UP being played, or `null`. */
		red_current_powerup: FormControl<string | null | undefined>,

		/**
		 * 1 if the red alliance is credited with FACING THE BOSS, 0 if not.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		red_face_the_boss: FormControl<number | null | undefined>,

		/**
		 * Number of POWER CUBES in the FORCE section of the red alliance VAULT.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		red_force_count: FormControl<number | null | undefined>,

		/**
		 * Returns 1 if the red alliance FORCE was played, or 0 if not played.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		red_force_played: FormControl<number | null | undefined>,

		/**
		 * Number of POWER CUBES in the LEVITATE section of the red alliance VAULT.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		red_levitate_count: FormControl<number | null | undefined>,

		/**
		 * Returns 1 if the red alliance LEVITATE was played, or 0 if not played.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		red_levitate_played: FormControl<number | null | undefined>,

		/** Number of seconds remaining in the red alliance POWER UP time, or 0 if none is active. */
		red_powerup_time_remaining: FormControl<string | null | undefined>,

		/**
		 * 1 if the red alliance owns the SCALE, 0 if not.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		red_scale_owned: FormControl<number | null | undefined>,

		/**
		 * Current score for the red alliance.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		red_score: FormControl<number | null | undefined>,

		/**
		 * 1 if the red alliance owns their SWITCH, 0 if not.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		red_switch_owned: FormControl<number | null | undefined>,

		/**
		 * Amount of time remaining in the match, only valid during `auto` and `teleop` modes.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		time_remaining: FormControl<number | null | undefined>,
	}
	export function CreateMatch_Timeseries_2018FormGroup() {
		return new FormGroup<Match_Timeseries_2018FormProperties>({
			blue_auto_quest: new FormControl<number | null | undefined>(undefined),
			blue_boost_count: new FormControl<number | null | undefined>(undefined),
			blue_boost_played: new FormControl<number | null | undefined>(undefined),
			blue_current_powerup: new FormControl<string | null | undefined>(undefined),
			blue_face_the_boss: new FormControl<number | null | undefined>(undefined),
			blue_force_count: new FormControl<number | null | undefined>(undefined),
			blue_force_played: new FormControl<number | null | undefined>(undefined),
			blue_levitate_count: new FormControl<number | null | undefined>(undefined),
			blue_levitate_played: new FormControl<number | null | undefined>(undefined),
			blue_powerup_time_remaining: new FormControl<string | null | undefined>(undefined),
			blue_scale_owned: new FormControl<number | null | undefined>(undefined),
			blue_score: new FormControl<number | null | undefined>(undefined),
			blue_switch_owned: new FormControl<number | null | undefined>(undefined),
			event_key: new FormControl<string | null | undefined>(undefined),
			match_id: new FormControl<string | null | undefined>(undefined),
			mode: new FormControl<string | null | undefined>(undefined),
			play: new FormControl<number | null | undefined>(undefined),
			red_auto_quest: new FormControl<number | null | undefined>(undefined),
			red_boost_count: new FormControl<number | null | undefined>(undefined),
			red_boost_played: new FormControl<number | null | undefined>(undefined),
			red_current_powerup: new FormControl<string | null | undefined>(undefined),
			red_face_the_boss: new FormControl<number | null | undefined>(undefined),
			red_force_count: new FormControl<number | null | undefined>(undefined),
			red_force_played: new FormControl<number | null | undefined>(undefined),
			red_levitate_count: new FormControl<number | null | undefined>(undefined),
			red_levitate_played: new FormControl<number | null | undefined>(undefined),
			red_powerup_time_remaining: new FormControl<string | null | undefined>(undefined),
			red_scale_owned: new FormControl<number | null | undefined>(undefined),
			red_score: new FormControl<number | null | undefined>(undefined),
			red_switch_owned: new FormControl<number | null | undefined>(undefined),
			time_remaining: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The `Media` object contains a reference for most any media associated with a team or event on TBA. */
	export interface Media {

		/** If required, a JSON dict of additional media information. */
		details?: string | null;

		/** Direct URL to the media. */
		direct_url?: string | null;

		/**
		 * The key used to identify this media on the media site.
		 * Required
		 */
		foreign_key: string;

		/** True if the media is of high quality. */
		preferred?: boolean | null;

		/**
		 * String type of the media element.
		 * Required
		 */
		type: MediaType;

		/** The URL that leads to the full web page for the media, if one exists. */
		view_url?: string | null;
	}

	/** The `Media` object contains a reference for most any media associated with a team or event on TBA. */
	export interface MediaFormProperties {

		/** If required, a JSON dict of additional media information. */
		details: FormControl<string | null | undefined>,

		/** Direct URL to the media. */
		direct_url: FormControl<string | null | undefined>,

		/**
		 * The key used to identify this media on the media site.
		 * Required
		 */
		foreign_key: FormControl<string | null | undefined>,

		/** True if the media is of high quality. */
		preferred: FormControl<boolean | null | undefined>,

		/**
		 * String type of the media element.
		 * Required
		 */
		type: FormControl<MediaType | null | undefined>,

		/** The URL that leads to the full web page for the media, if one exists. */
		view_url: FormControl<string | null | undefined>,
	}
	export function CreateMediaFormGroup() {
		return new FormGroup<MediaFormProperties>({
			details: new FormControl<string | null | undefined>(undefined),
			direct_url: new FormControl<string | null | undefined>(undefined),
			foreign_key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			preferred: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<MediaType | null | undefined>(undefined, [Validators.required]),
			view_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MediaType { youtube = 'youtube', cdphotothread = 'cdphotothread', imgur = 'imgur', 'facebook-profile' = 'facebook-profile', 'youtube-channel' = 'youtube-channel', 'twitter-profile' = 'twitter-profile', 'github-profile' = 'github-profile', 'instagram-profile' = 'instagram-profile', 'periscope-profile' = 'periscope-profile', grabcad = 'grabcad', 'instagram-image' = 'instagram-image', 'external-link' = 'external-link', avatar = 'avatar' }

	export interface Team {

		/** Will be NULL, for future development. */
		address?: string | null;

		/** City of team derived from parsing the address registered with FIRST. */
		city?: string | null;

		/** Country of team derived from parsing the address registered with FIRST. */
		country?: string | null;

		/** Will be NULL, for future development. */
		gmaps_place_id?: string | null;

		/** Will be NULL, for future development. */
		gmaps_url?: string | null;

		/** Location of the team's home championship each year as a key-value pair. The year (as a string) is the key, and the city is the value. */
		home_championship?: string | null;

		/**
		 * TBA team key with the format `frcXXXX` with `XXXX` representing the team number.
		 * Required
		 */
		key: string;

		/**
		 * Will be NULL, for future development.
		 * Type: double
		 */
		lat?: number | null;

		/**
		 * Will be NULL, for future development.
		 * Type: double
		 */
		lng?: number | null;

		/** Will be NULL, for future development. */
		location_name?: string | null;

		/** Team's motto as provided by FIRST. This field is deprecated and will return null - will be removed at end-of-season in 2019. */
		motto?: string | null;

		/**
		 * Official long name registered with FIRST.
		 * Required
		 */
		name: string;

		/** Team nickname provided by FIRST. */
		nickname?: string | null;

		/** Postal code from the team address. */
		postal_code?: string | null;

		/**
		 * First year the team officially competed.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rookie_year?: number | null;

		/** Name of team school or affilited group registered with FIRST. */
		school_name?: string | null;

		/** State of team derived from parsing the address registered with FIRST. */
		state_prov?: string | null;

		/**
		 * Official team number issued by FIRST.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		team_number: number;

		/** Official website associated with the team. */
		website?: string | null;
	}
	export interface TeamFormProperties {

		/** Will be NULL, for future development. */
		address: FormControl<string | null | undefined>,

		/** City of team derived from parsing the address registered with FIRST. */
		city: FormControl<string | null | undefined>,

		/** Country of team derived from parsing the address registered with FIRST. */
		country: FormControl<string | null | undefined>,

		/** Will be NULL, for future development. */
		gmaps_place_id: FormControl<string | null | undefined>,

		/** Will be NULL, for future development. */
		gmaps_url: FormControl<string | null | undefined>,

		/** Location of the team's home championship each year as a key-value pair. The year (as a string) is the key, and the city is the value. */
		home_championship: FormControl<string | null | undefined>,

		/**
		 * TBA team key with the format `frcXXXX` with `XXXX` representing the team number.
		 * Required
		 */
		key: FormControl<string | null | undefined>,

		/**
		 * Will be NULL, for future development.
		 * Type: double
		 */
		lat: FormControl<number | null | undefined>,

		/**
		 * Will be NULL, for future development.
		 * Type: double
		 */
		lng: FormControl<number | null | undefined>,

		/** Will be NULL, for future development. */
		location_name: FormControl<string | null | undefined>,

		/** Team's motto as provided by FIRST. This field is deprecated and will return null - will be removed at end-of-season in 2019. */
		motto: FormControl<string | null | undefined>,

		/**
		 * Official long name registered with FIRST.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Team nickname provided by FIRST. */
		nickname: FormControl<string | null | undefined>,

		/** Postal code from the team address. */
		postal_code: FormControl<string | null | undefined>,

		/**
		 * First year the team officially competed.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rookie_year: FormControl<number | null | undefined>,

		/** Name of team school or affilited group registered with FIRST. */
		school_name: FormControl<string | null | undefined>,

		/** State of team derived from parsing the address registered with FIRST. */
		state_prov: FormControl<string | null | undefined>,

		/**
		 * Official team number issued by FIRST.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		team_number: FormControl<number | null | undefined>,

		/** Official website associated with the team. */
		website: FormControl<string | null | undefined>,
	}
	export function CreateTeamFormGroup() {
		return new FormGroup<TeamFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			gmaps_place_id: new FormControl<string | null | undefined>(undefined),
			gmaps_url: new FormControl<string | null | undefined>(undefined),
			home_championship: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lat: new FormControl<number | null | undefined>(undefined),
			lng: new FormControl<number | null | undefined>(undefined),
			location_name: new FormControl<string | null | undefined>(undefined),
			motto: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nickname: new FormControl<string | null | undefined>(undefined),
			postal_code: new FormControl<string | null | undefined>(undefined),
			rookie_year: new FormControl<number | null | undefined>(undefined),
			school_name: new FormControl<string | null | undefined>(undefined),
			state_prov: new FormControl<string | null | undefined>(undefined),
			team_number: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			website: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Team_Event_Status {
		alliance?: Team_Event_Status_alliance;

		/** An HTML formatted string suitable for display to the user containing the team's alliance pick status. */
		alliance_status_str?: string | null;

		/** TBA match key for the last match the team played in at this event, or null. */
		last_match_key?: string | null;

		/** TBA match key for the next match the team is scheduled to play in at this event, or null. */
		next_match_key?: string | null;

		/** An HTML formatted string suitable for display to the user containing the team's overall status summary of the event. */
		overall_status_str?: string | null;

		/** Playoff status for this team, may be null if the team did not make playoffs, or playoffs have not begun. */
		playoff?: Team_Event_Status_playoff;

		/** An HTML formatter string suitable for display to the user containing the team's playoff status. */
		playoff_status_str?: string | null;
		qual?: Team_Event_Status_rank;
	}
	export interface Team_Event_StatusFormProperties {

		/** An HTML formatted string suitable for display to the user containing the team's alliance pick status. */
		alliance_status_str: FormControl<string | null | undefined>,

		/** TBA match key for the last match the team played in at this event, or null. */
		last_match_key: FormControl<string | null | undefined>,

		/** TBA match key for the next match the team is scheduled to play in at this event, or null. */
		next_match_key: FormControl<string | null | undefined>,

		/** An HTML formatted string suitable for display to the user containing the team's overall status summary of the event. */
		overall_status_str: FormControl<string | null | undefined>,

		/** An HTML formatter string suitable for display to the user containing the team's playoff status. */
		playoff_status_str: FormControl<string | null | undefined>,
	}
	export function CreateTeam_Event_StatusFormGroup() {
		return new FormGroup<Team_Event_StatusFormProperties>({
			alliance_status_str: new FormControl<string | null | undefined>(undefined),
			last_match_key: new FormControl<string | null | undefined>(undefined),
			next_match_key: new FormControl<string | null | undefined>(undefined),
			overall_status_str: new FormControl<string | null | undefined>(undefined),
			playoff_status_str: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Team_Event_Status_alliance {

		/** Backup status, may be null. */
		backup?: Team_Event_Status_alliance_backup;

		/** Alliance name, may be null. */
		name?: string | null;

		/**
		 * Alliance number.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		number: number;

		/**
		 * Order the team was picked in the alliance from 0-2, with 0 being alliance captain.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pick: number;
	}
	export interface Team_Event_Status_allianceFormProperties {

		/** Alliance name, may be null. */
		name: FormControl<string | null | undefined>,

		/**
		 * Alliance number.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		number: FormControl<number | null | undefined>,

		/**
		 * Order the team was picked in the alliance from 0-2, with 0 being alliance captain.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pick: FormControl<number | null | undefined>,
	}
	export function CreateTeam_Event_Status_allianceFormGroup() {
		return new FormGroup<Team_Event_Status_allianceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			pick: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Backup status, may be null. */
	export interface Team_Event_Status_alliance_backup {

		/** TBA key for the backup team called in. */
		in?: string | null;

		/** TBA key for the team replaced by the backup. */
		out?: string | null;
	}

	/** Backup status, may be null. */
	export interface Team_Event_Status_alliance_backupFormProperties {

		/** TBA key for the backup team called in. */
		in: FormControl<string | null | undefined>,

		/** TBA key for the team replaced by the backup. */
		out: FormControl<string | null | undefined>,
	}
	export function CreateTeam_Event_Status_alliance_backupFormGroup() {
		return new FormGroup<Team_Event_Status_alliance_backupFormProperties>({
			in: new FormControl<string | null | undefined>(undefined),
			out: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Playoff status for this team, may be null if the team did not make playoffs, or playoffs have not begun. */
	export interface Team_Event_Status_playoff {

		/** A Win-Loss-Tie record for a team, or an alliance. */
		current_level_record?: WLT_Record;

		/** The highest playoff level the team reached. */
		level?: MatchComp_level | null;

		/**
		 * The average match score during playoffs. Year specific. May be null if not relevant for a given year.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		playoff_average?: number | null;

		/** A Win-Loss-Tie record for a team, or an alliance. */
		record?: WLT_Record;

		/** Current competition status for the playoffs. */
		status?: Team_Event_Status_playoffStatus | null;
	}

	/** Playoff status for this team, may be null if the team did not make playoffs, or playoffs have not begun. */
	export interface Team_Event_Status_playoffFormProperties {

		/** The highest playoff level the team reached. */
		level: FormControl<MatchComp_level | null | undefined>,

		/**
		 * The average match score during playoffs. Year specific. May be null if not relevant for a given year.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		playoff_average: FormControl<number | null | undefined>,

		/** Current competition status for the playoffs. */
		status: FormControl<Team_Event_Status_playoffStatus | null | undefined>,
	}
	export function CreateTeam_Event_Status_playoffFormGroup() {
		return new FormGroup<Team_Event_Status_playoffFormProperties>({
			level: new FormControl<MatchComp_level | null | undefined>(undefined),
			playoff_average: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<Team_Event_Status_playoffStatus | null | undefined>(undefined),
		});

	}

	export enum Team_Event_Status_playoffStatus { won = 'won', eliminated = 'eliminated', playing = 'playing' }

	export interface Team_Event_Status_rank {

		/**
		 * Number of teams ranked.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		num_teams?: number | null;
		ranking?: Team_Event_Status_rankRanking;

		/** Ordered list of names corresponding to the elements of the `sort_orders` array. */
		Team_Event_Status_rankSort_order_info?: Array<Team_Event_Status_rankSort_order_info>;
		status?: string | null;
	}
	export interface Team_Event_Status_rankFormProperties {

		/**
		 * Number of teams ranked.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		num_teams: FormControl<number | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateTeam_Event_Status_rankFormGroup() {
		return new FormGroup<Team_Event_Status_rankFormProperties>({
			num_teams: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Team_Event_Status_rankRanking {

		/**
		 * Number of matches the team was disqualified for.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dq?: number | null;

		/**
		 * Number of matches played.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		matches_played?: number | null;

		/**
		 * For some years, average qualification score. Can be null.
		 * Type: double
		 */
		qual_average?: number | null;

		/**
		 * Relative rank of this team.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rank?: number | null;

		/** A Win-Loss-Tie record for a team, or an alliance. */
		record?: WLT_Record;

		/** Ordered list of values used to determine the rank. See the `sort_order_info` property for the name of each value. */
		sort_orders?: Array<number>;

		/** TBA team key for this rank. */
		team_key?: string | null;
	}
	export interface Team_Event_Status_rankRankingFormProperties {

		/**
		 * Number of matches the team was disqualified for.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dq: FormControl<number | null | undefined>,

		/**
		 * Number of matches played.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		matches_played: FormControl<number | null | undefined>,

		/**
		 * For some years, average qualification score. Can be null.
		 * Type: double
		 */
		qual_average: FormControl<number | null | undefined>,

		/**
		 * Relative rank of this team.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rank: FormControl<number | null | undefined>,

		/** TBA team key for this rank. */
		team_key: FormControl<string | null | undefined>,
	}
	export function CreateTeam_Event_Status_rankRankingFormGroup() {
		return new FormGroup<Team_Event_Status_rankRankingFormProperties>({
			dq: new FormControl<number | null | undefined>(undefined),
			matches_played: new FormControl<number | null | undefined>(undefined),
			qual_average: new FormControl<number | null | undefined>(undefined),
			rank: new FormControl<number | null | undefined>(undefined),
			team_key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Team_Event_Status_rankSort_order_info {

		/** The descriptive name of the value used to sort the ranking. */
		name?: string | null;

		/**
		 * The number of digits of precision used for this value, eg `2` would correspond to a value of `101.11` while `0` would correspond to `101`.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		precision?: number | null;
	}
	export interface Team_Event_Status_rankSort_order_infoFormProperties {

		/** The descriptive name of the value used to sort the ranking. */
		name: FormControl<string | null | undefined>,

		/**
		 * The number of digits of precision used for this value, eg `2` would correspond to a value of `101.11` while `0` would correspond to `101`.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		precision: FormControl<number | null | undefined>,
	}
	export function CreateTeam_Event_Status_rankSort_order_infoFormGroup() {
		return new FormGroup<Team_Event_Status_rankSort_order_infoFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			precision: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Team_Robot {

		/**
		 * Internal TBA identifier for this robot.
		 * Required
		 */
		key: string;

		/**
		 * Name of the robot as provided by the team.
		 * Required
		 */
		robot_name: string;

		/**
		 * TBA team key for this robot.
		 * Required
		 */
		team_key: string;

		/**
		 * Year this robot competed in.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year: number;
	}
	export interface Team_RobotFormProperties {

		/**
		 * Internal TBA identifier for this robot.
		 * Required
		 */
		key: FormControl<string | null | undefined>,

		/**
		 * Name of the robot as provided by the team.
		 * Required
		 */
		robot_name: FormControl<string | null | undefined>,

		/**
		 * TBA team key for this robot.
		 * Required
		 */
		team_key: FormControl<string | null | undefined>,

		/**
		 * Year this robot competed in.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateTeam_RobotFormGroup() {
		return new FormGroup<Team_RobotFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			robot_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			team_key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			year: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Team_Simple {

		/** City of team derived from parsing the address registered with FIRST. */
		city?: string | null;

		/** Country of team derived from parsing the address registered with FIRST. */
		country?: string | null;

		/**
		 * TBA team key with the format `frcXXXX` with `XXXX` representing the team number.
		 * Required
		 */
		key: string;

		/**
		 * Official long name registered with FIRST.
		 * Required
		 */
		name: string;

		/** Team nickname provided by FIRST. */
		nickname?: string | null;

		/** State of team derived from parsing the address registered with FIRST. */
		state_prov?: string | null;

		/**
		 * Official team number issued by FIRST.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		team_number: number;
	}
	export interface Team_SimpleFormProperties {

		/** City of team derived from parsing the address registered with FIRST. */
		city: FormControl<string | null | undefined>,

		/** Country of team derived from parsing the address registered with FIRST. */
		country: FormControl<string | null | undefined>,

		/**
		 * TBA team key with the format `frcXXXX` with `XXXX` representing the team number.
		 * Required
		 */
		key: FormControl<string | null | undefined>,

		/**
		 * Official long name registered with FIRST.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Team nickname provided by FIRST. */
		nickname: FormControl<string | null | undefined>,

		/** State of team derived from parsing the address registered with FIRST. */
		state_prov: FormControl<string | null | undefined>,

		/**
		 * Official team number issued by FIRST.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		team_number: FormControl<number | null | undefined>,
	}
	export function CreateTeam_SimpleFormGroup() {
		return new FormGroup<Team_SimpleFormProperties>({
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nickname: new FormControl<string | null | undefined>(undefined),
			state_prov: new FormControl<string | null | undefined>(undefined),
			team_number: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Zebra {

		/** Required */
		alliances: ZebraAlliances;

		/**
		 * TBA match key with the format `yyyy[EVENT_CODE]_[COMP_LEVEL]m[MATCH_NUMBER]`, where `yyyy` is the year, and `EVENT_CODE` is the event code of the event, `COMP_LEVEL` is (qm, ef, qf, sf, f), and `MATCH_NUMBER` is the match number in the competition level. A set number may be appended to the competition level if more than one match in required per set.
		 * Required
		 */
		key: string;

		/**
		 * A list of relative timestamps for each data point. Each timestamp will correspond to the X and Y value at the same index in a team xs and ys arrays. `times`, all teams `xs` and all teams `ys` are guarenteed to be the same length.
		 * Required
		 */
		times: Array<number>;
	}
	export interface ZebraFormProperties {

		/**
		 * TBA match key with the format `yyyy[EVENT_CODE]_[COMP_LEVEL]m[MATCH_NUMBER]`, where `yyyy` is the year, and `EVENT_CODE` is the event code of the event, `COMP_LEVEL` is (qm, ef, qf, sf, f), and `MATCH_NUMBER` is the match number in the competition level. A set number may be appended to the competition level if more than one match in required per set.
		 * Required
		 */
		key: FormControl<string | null | undefined>,
	}
	export function CreateZebraFormGroup() {
		return new FormGroup<ZebraFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ZebraAlliances {

		/** Zebra data for teams on the blue alliance */
		blue?: Array<Zebra_team>;

		/** Zebra MotionWorks data for teams on the red alliance */
		red?: Array<Zebra_team>;
	}
	export interface ZebraAlliancesFormProperties {
	}
	export function CreateZebraAlliancesFormGroup() {
		return new FormGroup<ZebraAlliancesFormProperties>({
		});

	}

	export interface Zebra_team {

		/**
		 * The TBA team key for the Zebra MotionWorks data.
		 * Required
		 */
		team_key: string;

		/**
		 * A list containing doubles and nulls representing a teams X position in feet at the corresponding timestamp. A null value represents no tracking data for a given timestamp.
		 * Required
		 */
		xs: Array<number>;

		/**
		 * A list containing doubles and nulls representing a teams Y position in feet at the corresponding timestamp. A null value represents no tracking data for a given timestamp.
		 * Required
		 */
		ys: Array<number>;
	}
	export interface Zebra_teamFormProperties {

		/**
		 * The TBA team key for the Zebra MotionWorks data.
		 * Required
		 */
		team_key: FormControl<string | null | undefined>,
	}
	export function CreateZebra_teamFormGroup() {
		return new FormGroup<Zebra_teamFormProperties>({
			team_key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a list of events in the given district.
		 * Get district/{district_key}/events
		 * @param {string} district_key TBA District Key, eg `2016fim`
		 * @return {Array<Event>} Successful response
		 */
		GetDistrictEvents(district_key: string): Observable<Array<Event>> {
			return this.http.get<Array<Event>>(this.baseUri + 'district/' + (district_key == null ? '' : encodeURIComponent(district_key)) + '/events', {});
		}

		/**
		 * Gets a list of event keys for events in the given district.
		 * Get district/{district_key}/events/keys
		 * @param {string} district_key TBA District Key, eg `2016fim`
		 * @return {Array<string>} Successful response
		 */
		GetDistrictEventsKeys(district_key: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'district/' + (district_key == null ? '' : encodeURIComponent(district_key)) + '/events/keys', {});
		}

		/**
		 * Gets a short-form list of events in the given district.
		 * Get district/{district_key}/events/simple
		 * @param {string} district_key TBA District Key, eg `2016fim`
		 * @return {Array<Event_Simple>} Successful response
		 */
		GetDistrictEventsSimple(district_key: string): Observable<Array<Event_Simple>> {
			return this.http.get<Array<Event_Simple>>(this.baseUri + 'district/' + (district_key == null ? '' : encodeURIComponent(district_key)) + '/events/simple', {});
		}

		/**
		 * Gets a list of team district rankings for the given district.
		 * Get district/{district_key}/rankings
		 * @param {string} district_key TBA District Key, eg `2016fim`
		 * @return {Array<District_Ranking>} Successful response
		 */
		GetDistrictRankings(district_key: string): Observable<Array<District_Ranking>> {
			return this.http.get<Array<District_Ranking>>(this.baseUri + 'district/' + (district_key == null ? '' : encodeURIComponent(district_key)) + '/rankings', {});
		}

		/**
		 * Gets a list of `Team` objects that competed in events in the given district.
		 * Get district/{district_key}/teams
		 * @param {string} district_key TBA District Key, eg `2016fim`
		 * @return {Array<Team>} Successful response
		 */
		GetDistrictTeams(district_key: string): Observable<Array<Team>> {
			return this.http.get<Array<Team>>(this.baseUri + 'district/' + (district_key == null ? '' : encodeURIComponent(district_key)) + '/teams', {});
		}

		/**
		 * Gets a list of `Team` objects that competed in events in the given district.
		 * Get district/{district_key}/teams/keys
		 * @param {string} district_key TBA District Key, eg `2016fim`
		 * @return {Array<string>} Successful response
		 */
		GetDistrictTeamsKeys(district_key: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'district/' + (district_key == null ? '' : encodeURIComponent(district_key)) + '/teams/keys', {});
		}

		/**
		 * Gets a short-form list of `Team` objects that competed in events in the given district.
		 * Get district/{district_key}/teams/simple
		 * @param {string} district_key TBA District Key, eg `2016fim`
		 * @return {Array<Team_Simple>} Successful response
		 */
		GetDistrictTeamsSimple(district_key: string): Observable<Array<Team_Simple>> {
			return this.http.get<Array<Team_Simple>>(this.baseUri + 'district/' + (district_key == null ? '' : encodeURIComponent(district_key)) + '/teams/simple', {});
		}

		/**
		 * Gets a list of districts and their corresponding district key, for the given year.
		 * Get districts/{year}
		 * @param {number} year Competition Year (or Season). Must be 4 digits.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<District_List>} Successful response
		 */
		GetDistrictsByYear(year: number): Observable<Array<District_List>> {
			return this.http.get<Array<District_List>>(this.baseUri + 'districts/' + year, {});
		}

		/**
		 * Gets an Event.
		 * Get event/{event_key}
		 * @param {string} event_key TBA Event Key, eg `2016nytr`
		 * @return {Event} Successful response
		 */
		GetEvent(event_key: string): Observable<Event> {
			return this.http.get<Event>(this.baseUri + 'event/' + (event_key == null ? '' : encodeURIComponent(event_key)), {});
		}

		/**
		 * Gets a list of Elimination Alliances for the given Event.
		 * Get event/{event_key}/alliances
		 * @param {string} event_key TBA Event Key, eg `2016nytr`
		 * @return {Array<Elimination_Alliance>} Successful response
		 */
		GetEventAlliances(event_key: string): Observable<Array<Elimination_Alliance>> {
			return this.http.get<Array<Elimination_Alliance>>(this.baseUri + 'event/' + (event_key == null ? '' : encodeURIComponent(event_key)) + '/alliances', {});
		}

		/**
		 * Gets a list of awards from the given event.
		 * Get event/{event_key}/awards
		 * @param {string} event_key TBA Event Key, eg `2016nytr`
		 * @return {Array<Award>} Successful response
		 */
		GetEventAwards(event_key: string): Observable<Array<Award>> {
			return this.http.get<Array<Award>>(this.baseUri + 'event/' + (event_key == null ? '' : encodeURIComponent(event_key)) + '/awards', {});
		}

		/**
		 * Gets a list of team rankings for the Event.
		 * Get event/{event_key}/district_points
		 * @param {string} event_key TBA Event Key, eg `2016nytr`
		 * @return {Event_District_Points} Successful response
		 */
		GetEventDistrictPoints(event_key: string): Observable<Event_District_Points> {
			return this.http.get<Event_District_Points>(this.baseUri + 'event/' + (event_key == null ? '' : encodeURIComponent(event_key)) + '/district_points', {});
		}

		/**
		 * Gets a set of Event-specific insights for the given Event.
		 * Get event/{event_key}/insights
		 * @param {string} event_key TBA Event Key, eg `2016nytr`
		 * @return {Event_Insights} Successful response
		 */
		GetEventInsights(event_key: string): Observable<Event_Insights> {
			return this.http.get<Event_Insights>(this.baseUri + 'event/' + (event_key == null ? '' : encodeURIComponent(event_key)) + '/insights', {});
		}

		/**
		 * Gets a list of matches for the given event.
		 * Get event/{event_key}/matches
		 * @param {string} event_key TBA Event Key, eg `2016nytr`
		 * @return {Array<Match>} Successful response
		 */
		GetEventMatches(event_key: string): Observable<Array<Match>> {
			return this.http.get<Array<Match>>(this.baseUri + 'event/' + (event_key == null ? '' : encodeURIComponent(event_key)) + '/matches', {});
		}

		/**
		 * Gets a list of match keys for the given event.
		 * Get event/{event_key}/matches/keys
		 * @param {string} event_key TBA Event Key, eg `2016nytr`
		 * @return {Array<string>} Successful response
		 */
		GetEventMatchesKeys(event_key: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'event/' + (event_key == null ? '' : encodeURIComponent(event_key)) + '/matches/keys', {});
		}

		/**
		 * Gets a short-form list of matches for the given event.
		 * Get event/{event_key}/matches/simple
		 * @param {string} event_key TBA Event Key, eg `2016nytr`
		 * @return {Array<Match_Simple>} Successful response
		 */
		GetEventMatchesSimple(event_key: string): Observable<Array<Match_Simple>> {
			return this.http.get<Array<Match_Simple>>(this.baseUri + 'event/' + (event_key == null ? '' : encodeURIComponent(event_key)) + '/matches/simple', {});
		}

		/**
		 * Gets an array of Match Keys for the given event key that have timeseries data. Returns an empty array if no matches have timeseries data.
		 * *WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up.
		 * *WARNING:* This endpoint and corresponding data models are under *active development* and may change at any time, including in breaking ways.
		 * Get event/{event_key}/matches/timeseries
		 * @param {string} event_key TBA Event Key, eg `2016nytr`
		 * @return {Array<string>} Successful response
		 */
		GetEventMatchTimeseries(event_key: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'event/' + (event_key == null ? '' : encodeURIComponent(event_key)) + '/matches/timeseries', {});
		}

		/**
		 * Gets a set of Event OPRs (including OPR, DPR, and CCWM) for the given Event.
		 * Get event/{event_key}/oprs
		 * @param {string} event_key TBA Event Key, eg `2016nytr`
		 * @return {Event_OPRs} Successful response
		 */
		GetEventOPRs(event_key: string): Observable<Event_OPRs> {
			return this.http.get<Event_OPRs>(this.baseUri + 'event/' + (event_key == null ? '' : encodeURIComponent(event_key)) + '/oprs', {});
		}

		/**
		 * Gets information on TBA-generated predictions for the given Event. Contains year-specific information. *WARNING* This endpoint is currently under development and may change at any time.
		 * Get event/{event_key}/predictions
		 * @param {string} event_key TBA Event Key, eg `2016nytr`
		 * @return {Event_Predictions} Successful response
		 */
		GetEventPredictions(event_key: string): Observable<Event_Predictions> {
			return this.http.get<Event_Predictions>(this.baseUri + 'event/' + (event_key == null ? '' : encodeURIComponent(event_key)) + '/predictions', {});
		}

		/**
		 * Gets a list of team rankings for the Event.
		 * Get event/{event_key}/rankings
		 * @param {string} event_key TBA Event Key, eg `2016nytr`
		 * @return {Event_Ranking} Successful response
		 */
		GetEventRankings(event_key: string): Observable<Event_Ranking> {
			return this.http.get<Event_Ranking>(this.baseUri + 'event/' + (event_key == null ? '' : encodeURIComponent(event_key)) + '/rankings', {});
		}

		/**
		 * Gets a short-form Event.
		 * Get event/{event_key}/simple
		 * @param {string} event_key TBA Event Key, eg `2016nytr`
		 * @return {Event_Simple} Successful response
		 */
		GetEventSimple(event_key: string): Observable<Event_Simple> {
			return this.http.get<Event_Simple>(this.baseUri + 'event/' + (event_key == null ? '' : encodeURIComponent(event_key)) + '/simple', {});
		}

		/**
		 * Gets a list of `Team` objects that competed in the given event.
		 * Get event/{event_key}/teams
		 * @param {string} event_key TBA Event Key, eg `2016nytr`
		 * @return {Array<Team>} Successful response
		 */
		GetEventTeams(event_key: string): Observable<Array<Team>> {
			return this.http.get<Array<Team>>(this.baseUri + 'event/' + (event_key == null ? '' : encodeURIComponent(event_key)) + '/teams', {});
		}

		/**
		 * Gets a list of `Team` keys that competed in the given event.
		 * Get event/{event_key}/teams/keys
		 * @param {string} event_key TBA Event Key, eg `2016nytr`
		 * @return {Array<string>} Successful response
		 */
		GetEventTeamsKeys(event_key: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'event/' + (event_key == null ? '' : encodeURIComponent(event_key)) + '/teams/keys', {});
		}

		/**
		 * Gets a short-form list of `Team` objects that competed in the given event.
		 * Get event/{event_key}/teams/simple
		 * @param {string} event_key TBA Event Key, eg `2016nytr`
		 * @return {Array<Team_Simple>} Successful response
		 */
		GetEventTeamsSimple(event_key: string): Observable<Array<Team_Simple>> {
			return this.http.get<Array<Team_Simple>>(this.baseUri + 'event/' + (event_key == null ? '' : encodeURIComponent(event_key)) + '/teams/simple', {});
		}

		/**
		 * Gets a key-value list of the event statuses for teams competing at the given event.
		 * Get event/{event_key}/teams/statuses
		 * @param {string} event_key TBA Event Key, eg `2016nytr`
		 * @return {{[id: string]: Team_Event_Status }} Successful response
		 */
		GetEventTeamsStatuses(event_key: string): Observable<{[id: string]: Team_Event_Status }> {
			return this.http.get<{[id: string]: Team_Event_Status }>(this.baseUri + 'event/' + (event_key == null ? '' : encodeURIComponent(event_key)) + '/teams/statuses', {});
		}

		/**
		 * Gets a list of events in the given year.
		 * Get events/{year}
		 * @param {number} year Competition Year (or Season). Must be 4 digits.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Event>} Successful response
		 */
		GetEventsByYear(year: number): Observable<Array<Event>> {
			return this.http.get<Array<Event>>(this.baseUri + 'events/' + year, {});
		}

		/**
		 * Gets a list of event keys in the given year.
		 * Get events/{year}/keys
		 * @param {number} year Competition Year (or Season). Must be 4 digits.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<string>} Successful response
		 */
		GetEventsByYearKeys(year: number): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'events/' + year + '/keys', {});
		}

		/**
		 * Gets a short-form list of events in the given year.
		 * Get events/{year}/simple
		 * @param {number} year Competition Year (or Season). Must be 4 digits.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Event_Simple>} Successful response
		 */
		GetEventsByYearSimple(year: number): Observable<Array<Event_Simple>> {
			return this.http.get<Array<Event_Simple>>(this.baseUri + 'events/' + year + '/simple', {});
		}

		/**
		 * Gets a `Match` object for the given match key.
		 * Get match/{match_key}
		 * @param {string} match_key TBA Match Key, eg `2016nytr_qm1`
		 * @return {Match} Successful response
		 */
		GetMatch(match_key: string): Observable<Match> {
			return this.http.get<Match>(this.baseUri + 'match/' + (match_key == null ? '' : encodeURIComponent(match_key)), {});
		}

		/**
		 * Gets a short-form `Match` object for the given match key.
		 * Get match/{match_key}/simple
		 * @param {string} match_key TBA Match Key, eg `2016nytr_qm1`
		 * @return {Match_Simple} Successful response
		 */
		GetMatchSimple(match_key: string): Observable<Match_Simple> {
			return this.http.get<Match_Simple>(this.baseUri + 'match/' + (match_key == null ? '' : encodeURIComponent(match_key)) + '/simple', {});
		}

		/**
		 * Gets an array of game-specific Match Timeseries objects for the given match key or an empty array if not available.
		 * *WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up.
		 * *WARNING:* This endpoint and corresponding data models are under *active development* and may change at any time, including in breaking ways.
		 * Get match/{match_key}/timeseries
		 * @param {string} match_key TBA Match Key, eg `2016nytr_qm1`
		 * @return {Array<string>} Successful response
		 */
		GetMatchTimeseries(match_key: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'match/' + (match_key == null ? '' : encodeURIComponent(match_key)) + '/timeseries', {});
		}

		/**
		 * Gets Zebra MotionWorks data for a Match for the given match key.
		 * Get match/{match_key}/zebra_motionworks
		 * @param {string} match_key TBA Match Key, eg `2016nytr_qm1`
		 * @return {Zebra} Successful response
		 */
		GetMatchZebra(match_key: string): Observable<Zebra> {
			return this.http.get<Zebra>(this.baseUri + 'match/' + (match_key == null ? '' : encodeURIComponent(match_key)) + '/zebra_motionworks', {});
		}

		/**
		 * Returns API status, and TBA status information.
		 * Get status
		 * @return {API_Status} Successful response
		 */
		GetStatus(): Observable<API_Status> {
			return this.http.get<API_Status>(this.baseUri + 'status', {});
		}

		/**
		 * Gets a `Team` object for the team referenced by the given key.
		 * Get team/{team_key}
		 * @param {string} team_key TBA Team Key, eg `frc254`
		 * @return {Team} Successful response
		 */
		GetTeam(team_key: string): Observable<Team> {
			return this.http.get<Team>(this.baseUri + 'team/' + (team_key == null ? '' : encodeURIComponent(team_key)), {});
		}

		/**
		 * Gets a list of awards the given team has won.
		 * Get team/{team_key}/awards
		 * @param {string} team_key TBA Team Key, eg `frc254`
		 * @return {Array<Award>} Successful response
		 */
		GetTeamAwards(team_key: string): Observable<Array<Award>> {
			return this.http.get<Array<Award>>(this.baseUri + 'team/' + (team_key == null ? '' : encodeURIComponent(team_key)) + '/awards', {});
		}

		/**
		 * Gets a list of awards the given team has won in a given year.
		 * Get team/{team_key}/awards/{year}
		 * @param {string} team_key TBA Team Key, eg `frc254`
		 * @param {number} year Competition Year (or Season). Must be 4 digits.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Award>} Successful response
		 */
		GetTeamAwardsByYear(team_key: string, year: number): Observable<Array<Award>> {
			return this.http.get<Array<Award>>(this.baseUri + 'team/' + (team_key == null ? '' : encodeURIComponent(team_key)) + '/awards/' + year, {});
		}

		/**
		 * Gets an array of districts representing each year the team was in a district. Will return an empty array if the team was never in a district.
		 * Get team/{team_key}/districts
		 * @param {string} team_key TBA Team Key, eg `frc254`
		 * @return {Array<District_List>} Successful response
		 */
		GetTeamDistricts(team_key: string): Observable<Array<District_List>> {
			return this.http.get<Array<District_List>>(this.baseUri + 'team/' + (team_key == null ? '' : encodeURIComponent(team_key)) + '/districts', {});
		}

		/**
		 * Gets a list of awards the given team won at the given event.
		 * Get team/{team_key}/event/{event_key}/awards
		 * @param {string} team_key TBA Team Key, eg `frc254`
		 * @param {string} event_key TBA Event Key, eg `2016nytr`
		 * @return {Array<Award>} Successful response
		 */
		GetTeamEventAwards(team_key: string, event_key: string): Observable<Array<Award>> {
			return this.http.get<Array<Award>>(this.baseUri + 'team/' + (team_key == null ? '' : encodeURIComponent(team_key)) + '/event/' + (event_key == null ? '' : encodeURIComponent(event_key)) + '/awards', {});
		}

		/**
		 * Gets a list of matches for the given team and event.
		 * Get team/{team_key}/event/{event_key}/matches
		 * @param {string} team_key TBA Team Key, eg `frc254`
		 * @param {string} event_key TBA Event Key, eg `2016nytr`
		 * @return {Array<Match>} Successful response
		 */
		GetTeamEventMatches(team_key: string, event_key: string): Observable<Array<Match>> {
			return this.http.get<Array<Match>>(this.baseUri + 'team/' + (team_key == null ? '' : encodeURIComponent(team_key)) + '/event/' + (event_key == null ? '' : encodeURIComponent(event_key)) + '/matches', {});
		}

		/**
		 * Gets a list of match keys for matches for the given team and event.
		 * Get team/{team_key}/event/{event_key}/matches/keys
		 * @param {string} team_key TBA Team Key, eg `frc254`
		 * @param {string} event_key TBA Event Key, eg `2016nytr`
		 * @return {Array<string>} Successful response
		 */
		GetTeamEventMatchesKeys(team_key: string, event_key: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'team/' + (team_key == null ? '' : encodeURIComponent(team_key)) + '/event/' + (event_key == null ? '' : encodeURIComponent(event_key)) + '/matches/keys', {});
		}

		/**
		 * Gets a short-form list of matches for the given team and event.
		 * Get team/{team_key}/event/{event_key}/matches/simple
		 * @param {string} team_key TBA Team Key, eg `frc254`
		 * @param {string} event_key TBA Event Key, eg `2016nytr`
		 * @return {Array<Match>} Successful response
		 */
		GetTeamEventMatchesSimple(team_key: string, event_key: string): Observable<Array<Match>> {
			return this.http.get<Array<Match>>(this.baseUri + 'team/' + (team_key == null ? '' : encodeURIComponent(team_key)) + '/event/' + (event_key == null ? '' : encodeURIComponent(event_key)) + '/matches/simple', {});
		}

		/**
		 * Gets the competition rank and status of the team at the given event.
		 * Get team/{team_key}/event/{event_key}/status
		 * @param {string} team_key TBA Team Key, eg `frc254`
		 * @param {string} event_key TBA Event Key, eg `2016nytr`
		 * @return {Team_Event_Status} Successful response
		 */
		GetTeamEventStatus(team_key: string, event_key: string): Observable<Team_Event_Status> {
			return this.http.get<Team_Event_Status>(this.baseUri + 'team/' + (team_key == null ? '' : encodeURIComponent(team_key)) + '/event/' + (event_key == null ? '' : encodeURIComponent(event_key)) + '/status', {});
		}

		/**
		 * Gets a list of all events this team has competed at.
		 * Get team/{team_key}/events
		 * @param {string} team_key TBA Team Key, eg `frc254`
		 * @return {Array<Event>} Successful response
		 */
		GetTeamEvents(team_key: string): Observable<Array<Event>> {
			return this.http.get<Array<Event>>(this.baseUri + 'team/' + (team_key == null ? '' : encodeURIComponent(team_key)) + '/events', {});
		}

		/**
		 * Gets a list of the event keys for all events this team has competed at.
		 * Get team/{team_key}/events/keys
		 * @param {string} team_key TBA Team Key, eg `frc254`
		 * @return {Array<string>} Successful response
		 */
		GetTeamEventsKeys(team_key: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'team/' + (team_key == null ? '' : encodeURIComponent(team_key)) + '/events/keys', {});
		}

		/**
		 * Gets a short-form list of all events this team has competed at.
		 * Get team/{team_key}/events/simple
		 * @param {string} team_key TBA Team Key, eg `frc254`
		 * @return {Array<Event_Simple>} Successful response
		 */
		GetTeamEventsSimple(team_key: string): Observable<Array<Event_Simple>> {
			return this.http.get<Array<Event_Simple>>(this.baseUri + 'team/' + (team_key == null ? '' : encodeURIComponent(team_key)) + '/events/simple', {});
		}

		/**
		 * Gets a list of events this team has competed at in the given year.
		 * Get team/{team_key}/events/{year}
		 * @param {string} team_key TBA Team Key, eg `frc254`
		 * @param {number} year Competition Year (or Season). Must be 4 digits.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Event>} Successful response
		 */
		GetTeamEventsByYear(team_key: string, year: number): Observable<Array<Event>> {
			return this.http.get<Array<Event>>(this.baseUri + 'team/' + (team_key == null ? '' : encodeURIComponent(team_key)) + '/events/' + year, {});
		}

		/**
		 * Gets a list of the event keys for events this team has competed at in the given year.
		 * Get team/{team_key}/events/{year}/keys
		 * @param {string} team_key TBA Team Key, eg `frc254`
		 * @param {number} year Competition Year (or Season). Must be 4 digits.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<string>} Successful response
		 */
		GetTeamEventsByYearKeys(team_key: string, year: number): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'team/' + (team_key == null ? '' : encodeURIComponent(team_key)) + '/events/' + year + '/keys', {});
		}

		/**
		 * Gets a short-form list of events this team has competed at in the given year.
		 * Get team/{team_key}/events/{year}/simple
		 * @param {string} team_key TBA Team Key, eg `frc254`
		 * @param {number} year Competition Year (or Season). Must be 4 digits.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Event_Simple>} Successful response
		 */
		GetTeamEventsByYearSimple(team_key: string, year: number): Observable<Array<Event_Simple>> {
			return this.http.get<Array<Event_Simple>>(this.baseUri + 'team/' + (team_key == null ? '' : encodeURIComponent(team_key)) + '/events/' + year + '/simple', {});
		}

		/**
		 * Gets a key-value list of the event statuses for events this team has competed at in the given year.
		 * Get team/{team_key}/events/{year}/statuses
		 * @param {string} team_key TBA Team Key, eg `frc254`
		 * @param {number} year Competition Year (or Season). Must be 4 digits.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {{[id: string]: Team_Event_Status }} Successful response
		 */
		GetTeamEventsStatusesByYear(team_key: string, year: number): Observable<{[id: string]: Team_Event_Status }> {
			return this.http.get<{[id: string]: Team_Event_Status }>(this.baseUri + 'team/' + (team_key == null ? '' : encodeURIComponent(team_key)) + '/events/' + year + '/statuses', {});
		}

		/**
		 * Gets a list of matches for the given team and year.
		 * Get team/{team_key}/matches/{year}
		 * @param {string} team_key TBA Team Key, eg `frc254`
		 * @param {number} year Competition Year (or Season). Must be 4 digits.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Match>} Successful response
		 */
		GetTeamMatchesByYear(team_key: string, year: number): Observable<Array<Match>> {
			return this.http.get<Array<Match>>(this.baseUri + 'team/' + (team_key == null ? '' : encodeURIComponent(team_key)) + '/matches/' + year, {});
		}

		/**
		 * Gets a list of match keys for matches for the given team and year.
		 * Get team/{team_key}/matches/{year}/keys
		 * @param {string} team_key TBA Team Key, eg `frc254`
		 * @param {number} year Competition Year (or Season). Must be 4 digits.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<string>} Successful response
		 */
		GetTeamMatchesByYearKeys(team_key: string, year: number): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'team/' + (team_key == null ? '' : encodeURIComponent(team_key)) + '/matches/' + year + '/keys', {});
		}

		/**
		 * Gets a short-form list of matches for the given team and year.
		 * Get team/{team_key}/matches/{year}/simple
		 * @param {string} team_key TBA Team Key, eg `frc254`
		 * @param {number} year Competition Year (or Season). Must be 4 digits.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Match_Simple>} Successful response
		 */
		GetTeamMatchesByYearSimple(team_key: string, year: number): Observable<Array<Match_Simple>> {
			return this.http.get<Array<Match_Simple>>(this.baseUri + 'team/' + (team_key == null ? '' : encodeURIComponent(team_key)) + '/matches/' + year + '/simple', {});
		}

		/**
		 * Gets a list of Media (videos / pictures) for the given team and tag.
		 * Get team/{team_key}/media/tag/{media_tag}
		 * @param {string} team_key TBA Team Key, eg `frc254`
		 * @param {string} media_tag Media Tag which describes the Media.
		 * @return {Array<Media>} Successful response
		 */
		GetTeamMediaByTag(team_key: string, media_tag: string): Observable<Array<Media>> {
			return this.http.get<Array<Media>>(this.baseUri + 'team/' + (team_key == null ? '' : encodeURIComponent(team_key)) + '/media/tag/' + (media_tag == null ? '' : encodeURIComponent(media_tag)), {});
		}

		/**
		 * Gets a list of Media (videos / pictures) for the given team, tag and year.
		 * Get team/{team_key}/media/tag/{media_tag}/{year}
		 * @param {string} team_key TBA Team Key, eg `frc254`
		 * @param {string} media_tag Media Tag which describes the Media.
		 * @param {number} year Competition Year (or Season). Must be 4 digits.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Media>} Successful response
		 */
		GetTeamMediaByTagYear(team_key: string, media_tag: string, year: number): Observable<Array<Media>> {
			return this.http.get<Array<Media>>(this.baseUri + 'team/' + (team_key == null ? '' : encodeURIComponent(team_key)) + '/media/tag/' + (media_tag == null ? '' : encodeURIComponent(media_tag)) + '/' + year, {});
		}

		/**
		 * Gets a list of Media (videos / pictures) for the given team and year.
		 * Get team/{team_key}/media/{year}
		 * @param {string} team_key TBA Team Key, eg `frc254`
		 * @param {number} year Competition Year (or Season). Must be 4 digits.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Media>} Successful response
		 */
		GetTeamMediaByYear(team_key: string, year: number): Observable<Array<Media>> {
			return this.http.get<Array<Media>>(this.baseUri + 'team/' + (team_key == null ? '' : encodeURIComponent(team_key)) + '/media/' + year, {});
		}

		/**
		 * Gets a list of year and robot name pairs for each year that a robot name was provided. Will return an empty array if the team has never named a robot.
		 * Get team/{team_key}/robots
		 * @param {string} team_key TBA Team Key, eg `frc254`
		 * @return {Array<Team_Robot>} Successful response
		 */
		GetTeamRobots(team_key: string): Observable<Array<Team_Robot>> {
			return this.http.get<Array<Team_Robot>>(this.baseUri + 'team/' + (team_key == null ? '' : encodeURIComponent(team_key)) + '/robots', {});
		}

		/**
		 * Gets a `Team_Simple` object for the team referenced by the given key.
		 * Get team/{team_key}/simple
		 * @param {string} team_key TBA Team Key, eg `frc254`
		 * @return {Team_Simple} Successful response
		 */
		GetTeamSimple(team_key: string): Observable<Team_Simple> {
			return this.http.get<Team_Simple>(this.baseUri + 'team/' + (team_key == null ? '' : encodeURIComponent(team_key)) + '/simple', {});
		}

		/**
		 * Gets a list of Media (social media) for the given team.
		 * Get team/{team_key}/social_media
		 * @param {string} team_key TBA Team Key, eg `frc254`
		 * @return {Array<Media>} Successful response
		 */
		GetTeamSocialMedia(team_key: string): Observable<Array<Media>> {
			return this.http.get<Array<Media>>(this.baseUri + 'team/' + (team_key == null ? '' : encodeURIComponent(team_key)) + '/social_media', {});
		}

		/**
		 * Gets a list of years in which the team participated in at least one competition.
		 * Get team/{team_key}/years_participated
		 * @param {string} team_key TBA Team Key, eg `frc254`
		 * @return {Array<number>} Successful response
		 */
		GetTeamYearsParticipated(team_key: string): Observable<Array<number>> {
			return this.http.get<Array<number>>(this.baseUri + 'team/' + (team_key == null ? '' : encodeURIComponent(team_key)) + '/years_participated', {});
		}

		/**
		 * Gets a list of `Team` objects, paginated in groups of 500.
		 * Get teams/{page_num}
		 * @param {number} page_num Page number of results to return, zero-indexed
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Team>} Successful response
		 */
		GetTeams(page_num: number): Observable<Array<Team>> {
			return this.http.get<Array<Team>>(this.baseUri + 'teams/' + page_num, {});
		}

		/**
		 * Gets a list of Team keys, paginated in groups of 500. (Note, each page will not have 500 teams, but will include the teams within that range of 500.)
		 * Get teams/{page_num}/keys
		 * @param {number} page_num Page number of results to return, zero-indexed
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<string>} Successful response
		 */
		GetTeamsKeys(page_num: number): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'teams/' + page_num + '/keys', {});
		}

		/**
		 * Gets a list of short form `Team_Simple` objects, paginated in groups of 500.
		 * Get teams/{page_num}/simple
		 * @param {number} page_num Page number of results to return, zero-indexed
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Team_Simple>} Successful response
		 */
		GetTeamsSimple(page_num: number): Observable<Array<Team_Simple>> {
			return this.http.get<Array<Team_Simple>>(this.baseUri + 'teams/' + page_num + '/simple', {});
		}

		/**
		 * Gets a list of `Team` objects that competed in the given year, paginated in groups of 500.
		 * Get teams/{year}/{page_num}
		 * @param {number} year Competition Year (or Season). Must be 4 digits.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page_num Page number of results to return, zero-indexed
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Team>} Successful response
		 */
		GetTeamsByYear(year: number, page_num: number): Observable<Array<Team>> {
			return this.http.get<Array<Team>>(this.baseUri + 'teams/' + year + '/' + page_num, {});
		}

		/**
		 * Gets a list Team Keys that competed in the given year, paginated in groups of 500.
		 * Get teams/{year}/{page_num}/keys
		 * @param {number} year Competition Year (or Season). Must be 4 digits.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page_num Page number of results to return, zero-indexed
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<string>} Successful response
		 */
		GetTeamsByYearKeys(year: number, page_num: number): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'teams/' + year + '/' + page_num + '/keys', {});
		}

		/**
		 * Gets a list of short form `Team_Simple` objects that competed in the given year, paginated in groups of 500.
		 * Get teams/{year}/{page_num}/simple
		 * @param {number} year Competition Year (or Season). Must be 4 digits.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page_num Page number of results to return, zero-indexed
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Team_Simple>} Successful response
		 */
		GetTeamsByYearSimple(year: number, page_num: number): Observable<Array<Team_Simple>> {
			return this.http.get<Array<Team_Simple>>(this.baseUri + 'teams/' + year + '/' + page_num + '/simple', {});
		}
	}

}

