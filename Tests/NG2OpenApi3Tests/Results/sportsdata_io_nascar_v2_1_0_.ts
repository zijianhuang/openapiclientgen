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
		DriverID?: number | null;
		Engine?: string | null;
		FirstName?: string | null;
		Gender?: string | null;
		Height?: number | null;
		LastName?: string | null;
		Manufacturer?: string | null;
		Number?: number | null;
		NumberDisplay?: string | null;
		PhotoUrl?: string | null;
		Sponsors?: string | null;
		Team?: string | null;
		Updated?: string | null;
		Weight?: number | null;
	}
	export interface DriverFormProperties {
		BirthDate: FormControl<string | null | undefined>,
		BirthPlace: FormControl<string | null | undefined>,
		Chassis: FormControl<string | null | undefined>,
		Created: FormControl<string | null | undefined>,
		CrewChief: FormControl<string | null | undefined>,
		DriverID: FormControl<number | null | undefined>,
		Engine: FormControl<string | null | undefined>,
		FirstName: FormControl<string | null | undefined>,
		Gender: FormControl<string | null | undefined>,
		Height: FormControl<number | null | undefined>,
		LastName: FormControl<string | null | undefined>,
		Manufacturer: FormControl<string | null | undefined>,
		Number: FormControl<number | null | undefined>,
		NumberDisplay: FormControl<string | null | undefined>,
		PhotoUrl: FormControl<string | null | undefined>,
		Sponsors: FormControl<string | null | undefined>,
		Team: FormControl<string | null | undefined>,
		Updated: FormControl<string | null | undefined>,
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
		Bonus?: number | null;
		Created?: string | null;
		CurrentPosition?: number | null;
		DateTime?: string | null;
		Day?: string | null;
		DraftKingsSalary?: number | null;
		DriverID?: number | null;
		FantasyPoints?: number | null;
		FantasyPointsDraftKings?: number | null;
		FastestLaps?: number | null;
		FinalPosition?: number | null;
		Laps?: number | null;
		LapsLed?: number | null;
		Manufacturer?: string | null;
		Name?: string | null;
		Number?: number | null;
		NumberDisplay?: string | null;
		Penalty?: number | null;
		Points?: number | null;
		PoleFinalPosition?: number | null;
		Poles?: number | null;
		PositionDifferential?: number | null;
		QualifyingSpeed?: number | null;
		RaceID?: number | null;
		Season?: number | null;
		StartPosition?: number | null;
		StatID?: number | null;
		Updated?: string | null;
		Wins?: number | null;
	}
	export interface DriverRaceFormProperties {
		Bonus: FormControl<number | null | undefined>,
		Created: FormControl<string | null | undefined>,
		CurrentPosition: FormControl<number | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,
		DraftKingsSalary: FormControl<number | null | undefined>,
		DriverID: FormControl<number | null | undefined>,
		FantasyPoints: FormControl<number | null | undefined>,
		FantasyPointsDraftKings: FormControl<number | null | undefined>,
		FastestLaps: FormControl<number | null | undefined>,
		FinalPosition: FormControl<number | null | undefined>,
		Laps: FormControl<number | null | undefined>,
		LapsLed: FormControl<number | null | undefined>,
		Manufacturer: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Number: FormControl<number | null | undefined>,
		NumberDisplay: FormControl<string | null | undefined>,
		Penalty: FormControl<number | null | undefined>,
		Points: FormControl<number | null | undefined>,
		PoleFinalPosition: FormControl<number | null | undefined>,
		Poles: FormControl<number | null | undefined>,
		PositionDifferential: FormControl<number | null | undefined>,
		QualifyingSpeed: FormControl<number | null | undefined>,
		RaceID: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		StartPosition: FormControl<number | null | undefined>,
		StatID: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
		Wins: FormControl<number | null | undefined>,
	}
	export function CreateDriverRaceFormGroup() {
		return new FormGroup<DriverRaceFormProperties>({
			Bonus: new FormControl<number | null | undefined>(undefined),
			Created: new FormControl<string | null | undefined>(undefined),
			CurrentPosition: new FormControl<number | null | undefined>(undefined),
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
		Bonus?: number | null;
		Created?: string | null;
		CurrentPosition?: number | null;
		DateTime?: string | null;
		Day?: string | null;
		DraftKingsSalary?: number | null;
		DriverID?: number | null;
		FantasyPoints?: number | null;
		FantasyPointsDraftKings?: number | null;
		FastestLaps?: number | null;
		FinalPosition?: number | null;
		Laps?: number | null;
		LapsLed?: number | null;
		Manufacturer?: string | null;
		Name?: string | null;
		Number?: number | null;
		NumberDisplay?: string | null;
		Penalty?: number | null;
		Points?: number | null;
		PoleFinalPosition?: number | null;
		Poles?: number | null;
		PositionDifferential?: number | null;
		QualifyingSpeed?: number | null;
		RaceID?: number | null;
		Season?: number | null;
		StartPosition?: number | null;
		StatID?: number | null;
		Updated?: string | null;
		Wins?: number | null;
	}
	export interface DriverRaceProjectionFormProperties {
		Bonus: FormControl<number | null | undefined>,
		Created: FormControl<string | null | undefined>,
		CurrentPosition: FormControl<number | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,
		DraftKingsSalary: FormControl<number | null | undefined>,
		DriverID: FormControl<number | null | undefined>,
		FantasyPoints: FormControl<number | null | undefined>,
		FantasyPointsDraftKings: FormControl<number | null | undefined>,
		FastestLaps: FormControl<number | null | undefined>,
		FinalPosition: FormControl<number | null | undefined>,
		Laps: FormControl<number | null | undefined>,
		LapsLed: FormControl<number | null | undefined>,
		Manufacturer: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Number: FormControl<number | null | undefined>,
		NumberDisplay: FormControl<string | null | undefined>,
		Penalty: FormControl<number | null | undefined>,
		Points: FormControl<number | null | undefined>,
		PoleFinalPosition: FormControl<number | null | undefined>,
		Poles: FormControl<number | null | undefined>,
		PositionDifferential: FormControl<number | null | undefined>,
		QualifyingSpeed: FormControl<number | null | undefined>,
		RaceID: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		StartPosition: FormControl<number | null | undefined>,
		StatID: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
		Wins: FormControl<number | null | undefined>,
	}
	export function CreateDriverRaceProjectionFormGroup() {
		return new FormGroup<DriverRaceProjectionFormProperties>({
			Bonus: new FormControl<number | null | undefined>(undefined),
			Created: new FormControl<string | null | undefined>(undefined),
			CurrentPosition: new FormControl<number | null | undefined>(undefined),
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
		ActualLaps?: number | null;
		Broadcast?: string | null;
		Canceled?: boolean | null;
		Created?: string | null;
		DateTime?: string | null;
		Day?: string | null;
		IsInProgress?: boolean | null;
		IsOver?: boolean | null;
		Name?: string | null;
		PoleWinnerID?: number | null;
		RaceID?: number | null;
		RescheduledDateTime?: string | null;
		RescheduledDay?: string | null;
		ScheduledLaps?: number | null;
		Season?: number | null;
		SeriesID?: number | null;
		SeriesName?: string | null;
		Track?: string | null;
		Updated?: string | null;
		WinnerID?: number | null;
	}
	export interface RaceFormProperties {
		ActualLaps: FormControl<number | null | undefined>,
		Broadcast: FormControl<string | null | undefined>,
		Canceled: FormControl<boolean | null | undefined>,
		Created: FormControl<string | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,
		IsInProgress: FormControl<boolean | null | undefined>,
		IsOver: FormControl<boolean | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PoleWinnerID: FormControl<number | null | undefined>,
		RaceID: FormControl<number | null | undefined>,
		RescheduledDateTime: FormControl<string | null | undefined>,
		RescheduledDay: FormControl<string | null | undefined>,
		ScheduledLaps: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeriesID: FormControl<number | null | undefined>,
		SeriesName: FormControl<string | null | undefined>,
		Track: FormControl<string | null | undefined>,
		Updated: FormControl<string | null | undefined>,
		WinnerID: FormControl<number | null | undefined>,
	}
	export function CreateRaceFormGroup() {
		return new FormGroup<RaceFormProperties>({
			ActualLaps: new FormControl<number | null | undefined>(undefined),
			Broadcast: new FormControl<string | null | undefined>(undefined),
			Canceled: new FormControl<boolean | null | undefined>(undefined),
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
			ScheduledLaps: new FormControl<number | null | undefined>(undefined),
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
		SeriesID?: number | null;
	}
	export interface SeriesFormProperties {
		Name: FormControl<string | null | undefined>,
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
		 * @return {Array<DriverRaceProjection>} 
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
		 * @return {Driver} 
		 */
		DriverDetails(format: DriverRaceProjectionsEntryListFormat, driverid: string): Observable<Driver> {
			return this.http.get<Driver>(this.baseUri + format + '/driver/' + (driverid == null ? '' : encodeURIComponent(driverid)) + '', {});
		}

		/**
		 * Drivers
		 * Get {format}/drivers
		 * @param {DriverRaceProjectionsEntryListFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<Driver>} 
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
		 * @return {RaceResult} 
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
		 * @return {Array<Race>} 
		 */
		RacesSchedule(format: DriverRaceProjectionsEntryListFormat, season: string): Observable<Array<Race>> {
			return this.http.get<Array<Race>>(this.baseUri + format + '/races/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * Series
		 * Get {format}/series
		 * @param {DriverRaceProjectionsEntryListFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<Series>} 
		 */
		Series(format: DriverRaceProjectionsEntryListFormat): Observable<Array<Series>> {
			return this.http.get<Array<Series>>(this.baseUri + format + '/series', {});
		}
	}

	export enum DriverRaceProjectionsEntryListFormat { xml = 0, json = 1 }

}

