import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Driver {
		BirthDate?: string | null;
		BirthPlace?: string | null;
		Chassis?: string | null;
		Created?: string | null;
		CrewChief?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DriverID?: number | null;
		Engine?: string | null;
		FirstName?: string | null;
		Gender?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Height?: number | null;
		LastName?: string | null;
		Manufacturer?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Number?: number | null;
		NumberDisplay?: string | null;
		PhotoUrl?: string | null;
		Sponsors?: string | null;
		Team?: string | null;
		Updated?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Weight?: number | null;
	}
	export interface DriverFormProperties {
		BirthDate: FormControl<string | null | undefined>,
		BirthPlace: FormControl<string | null | undefined>,
		Chassis: FormControl<string | null | undefined>,
		Created: FormControl<string | null | undefined>,
		CrewChief: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DriverID: FormControl<number | null | undefined>,
		Engine: FormControl<string | null | undefined>,
		FirstName: FormControl<string | null | undefined>,
		Gender: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Height: FormControl<number | null | undefined>,
		LastName: FormControl<string | null | undefined>,
		Manufacturer: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Number: FormControl<number | null | undefined>,
		NumberDisplay: FormControl<string | null | undefined>,
		PhotoUrl: FormControl<string | null | undefined>,
		Sponsors: FormControl<string | null | undefined>,
		Team: FormControl<string | null | undefined>,
		Updated: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Weight: FormControl<number | null | undefined>,
	}
	export function CreateDriverFormGroup() {
		return new FormGroup<DriverFormProperties>({
			BirthDate: new FormControl<string | null | undefined>(undefined),
			BirthPlace: new FormControl<string | null | undefined>(undefined),
			Chassis: new FormControl<string | null | undefined>(undefined),
			Created: new FormControl<string | null | undefined>(undefined),
			CrewChief: new FormControl<string | null | undefined>(undefined),
			DriverID: new FormControl<number | null | undefined>(undefined),
			Engine: new FormControl<string | null | undefined>(undefined),
			FirstName: new FormControl<string | null | undefined>(undefined),
			Gender: new FormControl<string | null | undefined>(undefined),
			Height: new FormControl<number | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
			Manufacturer: new FormControl<string | null | undefined>(undefined),
			Number: new FormControl<number | null | undefined>(undefined),
			NumberDisplay: new FormControl<string | null | undefined>(undefined),
			PhotoUrl: new FormControl<string | null | undefined>(undefined),
			Sponsors: new FormControl<string | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
			Weight: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DriverRace {

		/** Type: double */
		Bonus?: number | null;
		Created?: string | null;
		DateTime?: string | null;
		Day?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DraftKingsSalary?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DriverID?: number | null;

		/** Type: double */
		FantasyPoints?: number | null;

		/** Type: double */
		FantasyPointsDraftKings?: number | null;

		/** Type: double */
		FastestLaps?: number | null;

		/** Type: double */
		FinalPosition?: number | null;

		/** Type: double */
		Laps?: number | null;

		/** Type: double */
		LapsLed?: number | null;
		Manufacturer?: string | null;
		Name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Number?: number | null;
		NumberDisplay?: string | null;

		/** Type: double */
		Penalty?: number | null;

		/** Type: double */
		Points?: number | null;

		/** Type: double */
		PoleFinalPosition?: number | null;

		/** Type: double */
		Poles?: number | null;

		/** Type: double */
		PositionDifferential?: number | null;

		/** Type: double */
		QualifyingSpeed?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RaceID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: double */
		StartPosition?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StatID?: number | null;
		Updated?: string | null;

		/** Type: double */
		Wins?: number | null;
	}
	export interface DriverRaceFormProperties {

		/** Type: double */
		Bonus: FormControl<number | null | undefined>,
		Created: FormControl<string | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DraftKingsSalary: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DriverID: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPoints: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPointsDraftKings: FormControl<number | null | undefined>,

		/** Type: double */
		FastestLaps: FormControl<number | null | undefined>,

		/** Type: double */
		FinalPosition: FormControl<number | null | undefined>,

		/** Type: double */
		Laps: FormControl<number | null | undefined>,

		/** Type: double */
		LapsLed: FormControl<number | null | undefined>,
		Manufacturer: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Number: FormControl<number | null | undefined>,
		NumberDisplay: FormControl<string | null | undefined>,

		/** Type: double */
		Penalty: FormControl<number | null | undefined>,

		/** Type: double */
		Points: FormControl<number | null | undefined>,

		/** Type: double */
		PoleFinalPosition: FormControl<number | null | undefined>,

		/** Type: double */
		Poles: FormControl<number | null | undefined>,

		/** Type: double */
		PositionDifferential: FormControl<number | null | undefined>,

		/** Type: double */
		QualifyingSpeed: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RaceID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: double */
		StartPosition: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StatID: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,

		/** Type: double */
		Wins: FormControl<number | null | undefined>,
	}
	export function CreateDriverRaceFormGroup() {
		return new FormGroup<DriverRaceFormProperties>({
			Bonus: new FormControl<number | null | undefined>(undefined),
			Created: new FormControl<string | null | undefined>(undefined),
			DateTime: new FormControl<string | null | undefined>(undefined),
			Day: new FormControl<string | null | undefined>(undefined),
			DraftKingsSalary: new FormControl<number | null | undefined>(undefined),
			DriverID: new FormControl<number | null | undefined>(undefined),
			FantasyPoints: new FormControl<number | null | undefined>(undefined),
			FantasyPointsDraftKings: new FormControl<number | null | undefined>(undefined),
			FastestLaps: new FormControl<number | null | undefined>(undefined),
			FinalPosition: new FormControl<number | null | undefined>(undefined),
			Laps: new FormControl<number | null | undefined>(undefined),
			LapsLed: new FormControl<number | null | undefined>(undefined),
			Manufacturer: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Number: new FormControl<number | null | undefined>(undefined),
			NumberDisplay: new FormControl<string | null | undefined>(undefined),
			Penalty: new FormControl<number | null | undefined>(undefined),
			Points: new FormControl<number | null | undefined>(undefined),
			PoleFinalPosition: new FormControl<number | null | undefined>(undefined),
			Poles: new FormControl<number | null | undefined>(undefined),
			PositionDifferential: new FormControl<number | null | undefined>(undefined),
			QualifyingSpeed: new FormControl<number | null | undefined>(undefined),
			RaceID: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			StartPosition: new FormControl<number | null | undefined>(undefined),
			StatID: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
			Wins: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DriverRaceProjection {

		/** Type: double */
		Bonus?: number | null;
		Created?: string | null;
		DateTime?: string | null;
		Day?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DraftKingsSalary?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DriverID?: number | null;

		/** Type: double */
		FantasyPoints?: number | null;

		/** Type: double */
		FantasyPointsDraftKings?: number | null;

		/** Type: double */
		FastestLaps?: number | null;

		/** Type: double */
		FinalPosition?: number | null;

		/** Type: double */
		Laps?: number | null;

		/** Type: double */
		LapsLed?: number | null;
		Manufacturer?: string | null;
		Name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Number?: number | null;
		NumberDisplay?: string | null;

		/** Type: double */
		Penalty?: number | null;

		/** Type: double */
		Points?: number | null;

		/** Type: double */
		PoleFinalPosition?: number | null;

		/** Type: double */
		Poles?: number | null;

		/** Type: double */
		PositionDifferential?: number | null;

		/** Type: double */
		QualifyingSpeed?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RaceID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: double */
		StartPosition?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StatID?: number | null;
		Updated?: string | null;

		/** Type: double */
		Wins?: number | null;
	}
	export interface DriverRaceProjectionFormProperties {

		/** Type: double */
		Bonus: FormControl<number | null | undefined>,
		Created: FormControl<string | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DraftKingsSalary: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DriverID: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPoints: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPointsDraftKings: FormControl<number | null | undefined>,

		/** Type: double */
		FastestLaps: FormControl<number | null | undefined>,

		/** Type: double */
		FinalPosition: FormControl<number | null | undefined>,

		/** Type: double */
		Laps: FormControl<number | null | undefined>,

		/** Type: double */
		LapsLed: FormControl<number | null | undefined>,
		Manufacturer: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Number: FormControl<number | null | undefined>,
		NumberDisplay: FormControl<string | null | undefined>,

		/** Type: double */
		Penalty: FormControl<number | null | undefined>,

		/** Type: double */
		Points: FormControl<number | null | undefined>,

		/** Type: double */
		PoleFinalPosition: FormControl<number | null | undefined>,

		/** Type: double */
		Poles: FormControl<number | null | undefined>,

		/** Type: double */
		PositionDifferential: FormControl<number | null | undefined>,

		/** Type: double */
		QualifyingSpeed: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RaceID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: double */
		StartPosition: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StatID: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,

		/** Type: double */
		Wins: FormControl<number | null | undefined>,
	}
	export function CreateDriverRaceProjectionFormGroup() {
		return new FormGroup<DriverRaceProjectionFormProperties>({
			Bonus: new FormControl<number | null | undefined>(undefined),
			Created: new FormControl<string | null | undefined>(undefined),
			DateTime: new FormControl<string | null | undefined>(undefined),
			Day: new FormControl<string | null | undefined>(undefined),
			DraftKingsSalary: new FormControl<number | null | undefined>(undefined),
			DriverID: new FormControl<number | null | undefined>(undefined),
			FantasyPoints: new FormControl<number | null | undefined>(undefined),
			FantasyPointsDraftKings: new FormControl<number | null | undefined>(undefined),
			FastestLaps: new FormControl<number | null | undefined>(undefined),
			FinalPosition: new FormControl<number | null | undefined>(undefined),
			Laps: new FormControl<number | null | undefined>(undefined),
			LapsLed: new FormControl<number | null | undefined>(undefined),
			Manufacturer: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Number: new FormControl<number | null | undefined>(undefined),
			NumberDisplay: new FormControl<string | null | undefined>(undefined),
			Penalty: new FormControl<number | null | undefined>(undefined),
			Points: new FormControl<number | null | undefined>(undefined),
			PoleFinalPosition: new FormControl<number | null | undefined>(undefined),
			Poles: new FormControl<number | null | undefined>(undefined),
			PositionDifferential: new FormControl<number | null | undefined>(undefined),
			QualifyingSpeed: new FormControl<number | null | undefined>(undefined),
			RaceID: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			StartPosition: new FormControl<number | null | undefined>(undefined),
			StatID: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
			Wins: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Race {
		Broadcast?: string | null;
		Created?: string | null;
		DateTime?: string | null;
		Day?: string | null;
		IsInProgress?: boolean | null;
		IsOver?: boolean | null;
		Name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PoleWinnerID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RaceID?: number | null;
		RescheduledDateTime?: string | null;
		RescheduledDay?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeriesID?: number | null;
		SeriesName?: string | null;
		Track?: string | null;
		Updated?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		WinnerID?: number | null;
	}
	export interface RaceFormProperties {
		Broadcast: FormControl<string | null | undefined>,
		Created: FormControl<string | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,
		IsInProgress: FormControl<boolean | null | undefined>,
		IsOver: FormControl<boolean | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PoleWinnerID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RaceID: FormControl<number | null | undefined>,
		RescheduledDateTime: FormControl<string | null | undefined>,
		RescheduledDay: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeriesID: FormControl<number | null | undefined>,
		SeriesName: FormControl<string | null | undefined>,
		Track: FormControl<string | null | undefined>,
		Updated: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		WinnerID: FormControl<number | null | undefined>,
	}
	export function CreateRaceFormGroup() {
		return new FormGroup<RaceFormProperties>({
			Broadcast: new FormControl<string | null | undefined>(undefined),
			Created: new FormControl<string | null | undefined>(undefined),
			DateTime: new FormControl<string | null | undefined>(undefined),
			Day: new FormControl<string | null | undefined>(undefined),
			IsInProgress: new FormControl<boolean | null | undefined>(undefined),
			IsOver: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PoleWinnerID: new FormControl<number | null | undefined>(undefined),
			RaceID: new FormControl<number | null | undefined>(undefined),
			RescheduledDateTime: new FormControl<string | null | undefined>(undefined),
			RescheduledDay: new FormControl<string | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeriesID: new FormControl<number | null | undefined>(undefined),
			SeriesName: new FormControl<string | null | undefined>(undefined),
			Track: new FormControl<string | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
			WinnerID: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RaceResult {
		DriverRaces?: Array<DriverRace>;
		Race?: Race;
	}
	export interface RaceResultFormProperties {
	}
	export function CreateRaceResultFormGroup() {
		return new FormGroup<RaceResultFormProperties>({
		});

	}

	export interface Series {
		Name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeriesID?: number | null;
	}
	export interface SeriesFormProperties {
		Name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeriesID: FormControl<number | null | undefined>,
	}
	export function CreateSeriesFormGroup() {
		return new FormGroup<SeriesFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			SeriesID: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Driver Race Projections (Entry List)
		 * Get {format}/DriverRaceProjections/{raceid}
		 * @param {DriverRaceProjectionsEntryListFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} raceid Unique FantasyData Race ID.
		 * Example:<code>1</code>, <code>2</code>, etc.
		 */
		DriverRaceProjectionsEntryList(format: DriverRaceProjectionsEntryListFormat, raceid: string): Observable<Array<DriverRaceProjection>> {
			return this.http.get<Array<DriverRaceProjection>>(this.baseUri + format + '/DriverRaceProjections/' + (raceid == null ? '' : encodeURIComponent(raceid)) + '', {});
		}

		/**
		 * Driver Details
		 * Get {format}/driver/{driverid}
		 * @param {DriverRaceProjectionsEntryListFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} driverid Unique FantasyData Driver ID.
		 * Example:<code>80000268</code>.
		 */
		DriverDetails(format: DriverRaceProjectionsEntryListFormat, driverid: string): Observable<Driver> {
			return this.http.get<Driver>(this.baseUri + format + '/driver/' + (driverid == null ? '' : encodeURIComponent(driverid)) + '', {});
		}

		/**
		 * Drivers
		 * Get {format}/drivers
		 * @param {DriverRaceProjectionsEntryListFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 */
		Drivers(format: DriverRaceProjectionsEntryListFormat): Observable<Array<Driver>> {
			return this.http.get<Array<Driver>>(this.baseUri + format + '/drivers', {});
		}

		/**
		 * Race Results
		 * Get {format}/raceresult/{raceid}
		 * @param {DriverRaceProjectionsEntryListFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} raceid Unique FantasyData Race ID.
		 * Example:<code>1</code>, <code>2</code>, etc.
		 */
		RaceResults(format: DriverRaceProjectionsEntryListFormat, raceid: string): Observable<RaceResult> {
			return this.http.get<RaceResult>(this.baseUri + format + '/raceresult/' + (raceid == null ? '' : encodeURIComponent(raceid)) + '', {});
		}

		/**
		 * Races / Schedule
		 * Get {format}/races/{season}
		 * @param {DriverRaceProjectionsEntryListFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season.
		 * <br>Examples: <code>2015</code>, <code>2016</code>.
		 */
		RacesSchedule(format: DriverRaceProjectionsEntryListFormat, season: string): Observable<Array<Race>> {
			return this.http.get<Array<Race>>(this.baseUri + format + '/races/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * Series
		 * Get {format}/series
		 * @param {DriverRaceProjectionsEntryListFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 */
		Series(format: DriverRaceProjectionsEntryListFormat): Observable<Array<Series>> {
			return this.http.get<Array<Series>>(this.baseUri + format + '/series', {});
		}
	}

	export enum DriverRaceProjectionsEntryListFormat { xml = 'xml', json = 'json' }

}

