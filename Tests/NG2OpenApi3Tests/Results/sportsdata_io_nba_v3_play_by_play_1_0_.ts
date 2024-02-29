import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Game {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AlternateID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Attendance?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayRotationNumber?: number | null;
		AwayTeam?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamMoneyLine?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamScore?: number | null;
		Channel?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		CrewChiefID?: number | null;
		DateTime?: string | null;
		DateTimeUTC?: string | null;
		Day?: string | null;
		GameEndDateTime?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GameID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalAwayTeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalGameID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalHomeTeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeRotationNumber?: number | null;
		HomeTeam?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamMoneyLine?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamScore?: number | null;
		IsClosed?: boolean | null;
		LastPlay?: string | null;
		NeutralVenue?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OverPayout?: number | null;

		/** Type: double */
		OverUnder?: number | null;

		/** Type: double */
		PointSpread?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PointSpreadAwayTeamMoneyLine?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PointSpreadHomeTeamMoneyLine?: number | null;
		Quarter?: string | null;
		Quarters?: Array<Quarter>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RefereeID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType?: number | null;
		SeriesInfo?: Series;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StadiumID?: number | null;
		Status?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimeRemainingMinutes?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimeRemainingSeconds?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UmpireID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UnderPayout?: number | null;
		Updated?: string | null;
	}
	export interface GameFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AlternateID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Attendance: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayRotationNumber: FormControl<number | null | undefined>,
		AwayTeam: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamMoneyLine: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamScore: FormControl<number | null | undefined>,
		Channel: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		CrewChiefID: FormControl<number | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		DateTimeUTC: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,
		GameEndDateTime: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GameID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalAwayTeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalGameID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalHomeTeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeRotationNumber: FormControl<number | null | undefined>,
		HomeTeam: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamMoneyLine: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamScore: FormControl<number | null | undefined>,
		IsClosed: FormControl<boolean | null | undefined>,
		LastPlay: FormControl<string | null | undefined>,
		NeutralVenue: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OverPayout: FormControl<number | null | undefined>,

		/** Type: double */
		OverUnder: FormControl<number | null | undefined>,

		/** Type: double */
		PointSpread: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PointSpreadAwayTeamMoneyLine: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PointSpreadHomeTeamMoneyLine: FormControl<number | null | undefined>,
		Quarter: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RefereeID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StadiumID: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimeRemainingMinutes: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimeRemainingSeconds: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UmpireID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UnderPayout: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
	}
	export function CreateGameFormGroup() {
		return new FormGroup<GameFormProperties>({
			AlternateID: new FormControl<number | null | undefined>(undefined),
			Attendance: new FormControl<number | null | undefined>(undefined),
			AwayRotationNumber: new FormControl<number | null | undefined>(undefined),
			AwayTeam: new FormControl<string | null | undefined>(undefined),
			AwayTeamID: new FormControl<number | null | undefined>(undefined),
			AwayTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			AwayTeamScore: new FormControl<number | null | undefined>(undefined),
			Channel: new FormControl<string | null | undefined>(undefined),
			CrewChiefID: new FormControl<number | null | undefined>(undefined),
			DateTime: new FormControl<string | null | undefined>(undefined),
			DateTimeUTC: new FormControl<string | null | undefined>(undefined),
			Day: new FormControl<string | null | undefined>(undefined),
			GameEndDateTime: new FormControl<string | null | undefined>(undefined),
			GameID: new FormControl<number | null | undefined>(undefined),
			GlobalAwayTeamID: new FormControl<number | null | undefined>(undefined),
			GlobalGameID: new FormControl<number | null | undefined>(undefined),
			GlobalHomeTeamID: new FormControl<number | null | undefined>(undefined),
			HomeRotationNumber: new FormControl<number | null | undefined>(undefined),
			HomeTeam: new FormControl<string | null | undefined>(undefined),
			HomeTeamID: new FormControl<number | null | undefined>(undefined),
			HomeTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			HomeTeamScore: new FormControl<number | null | undefined>(undefined),
			IsClosed: new FormControl<boolean | null | undefined>(undefined),
			LastPlay: new FormControl<string | null | undefined>(undefined),
			NeutralVenue: new FormControl<boolean | null | undefined>(undefined),
			OverPayout: new FormControl<number | null | undefined>(undefined),
			OverUnder: new FormControl<number | null | undefined>(undefined),
			PointSpread: new FormControl<number | null | undefined>(undefined),
			PointSpreadAwayTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			PointSpreadHomeTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			Quarter: new FormControl<string | null | undefined>(undefined),
			RefereeID: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			StadiumID: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			TimeRemainingMinutes: new FormControl<number | null | undefined>(undefined),
			TimeRemainingSeconds: new FormControl<number | null | undefined>(undefined),
			UmpireID: new FormControl<number | null | undefined>(undefined),
			UnderPayout: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Quarter {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayScore?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GameID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeScore?: number | null;
		Name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Number?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		QuarterID?: number | null;
	}
	export interface QuarterFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayScore: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GameID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeScore: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Number: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		QuarterID: FormControl<number | null | undefined>,
	}
	export function CreateQuarterFormGroup() {
		return new FormGroup<QuarterFormProperties>({
			AwayScore: new FormControl<number | null | undefined>(undefined),
			GameID: new FormControl<number | null | undefined>(undefined),
			HomeScore: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Number: new FormControl<number | null | undefined>(undefined),
			QuarterID: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Play {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AssistedByPlayerID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayPlayerID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamScore?: number | null;

		/** Type: double */
		BaselineOffsetPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		BlockedByPlayerID?: number | null;
		Category?: string | null;
		Coordinates?: string | null;
		Created?: string | null;
		Description?: string | null;
		FastBreak?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomePlayerID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamScore?: number | null;
		Opponent?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Points?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PotentialPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		QuarterID?: number | null;
		QuarterName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ReceivingPlayerID?: number | null;
		ReceivingTeam?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ReceivingTeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Sequence?: number | null;
		ShotMade?: boolean | null;
		SideOfBasket?: string | null;

		/** Type: double */
		SidelineOffsetPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StolenByPlayerID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SubstituteInPlayerID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SubstituteOutPlayerID?: number | null;
		Team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimeRemainingMinutes?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimeRemainingSeconds?: number | null;
		Type?: string | null;
		Updated?: string | null;
	}
	export interface PlayFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AssistedByPlayerID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayPlayerID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamScore: FormControl<number | null | undefined>,

		/** Type: double */
		BaselineOffsetPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		BlockedByPlayerID: FormControl<number | null | undefined>,
		Category: FormControl<string | null | undefined>,
		Coordinates: FormControl<string | null | undefined>,
		Created: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		FastBreak: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomePlayerID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamScore: FormControl<number | null | undefined>,
		Opponent: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Points: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PotentialPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		QuarterID: FormControl<number | null | undefined>,
		QuarterName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ReceivingPlayerID: FormControl<number | null | undefined>,
		ReceivingTeam: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ReceivingTeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Sequence: FormControl<number | null | undefined>,
		ShotMade: FormControl<boolean | null | undefined>,
		SideOfBasket: FormControl<string | null | undefined>,

		/** Type: double */
		SidelineOffsetPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StolenByPlayerID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SubstituteInPlayerID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SubstituteOutPlayerID: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimeRemainingMinutes: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimeRemainingSeconds: FormControl<number | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Updated: FormControl<string | null | undefined>,
	}
	export function CreatePlayFormGroup() {
		return new FormGroup<PlayFormProperties>({
			AssistedByPlayerID: new FormControl<number | null | undefined>(undefined),
			AwayPlayerID: new FormControl<number | null | undefined>(undefined),
			AwayTeamScore: new FormControl<number | null | undefined>(undefined),
			BaselineOffsetPercentage: new FormControl<number | null | undefined>(undefined),
			BlockedByPlayerID: new FormControl<number | null | undefined>(undefined),
			Category: new FormControl<string | null | undefined>(undefined),
			Coordinates: new FormControl<string | null | undefined>(undefined),
			Created: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			FastBreak: new FormControl<boolean | null | undefined>(undefined),
			HomePlayerID: new FormControl<number | null | undefined>(undefined),
			HomeTeamScore: new FormControl<number | null | undefined>(undefined),
			Opponent: new FormControl<string | null | undefined>(undefined),
			OpponentID: new FormControl<number | null | undefined>(undefined),
			PlayID: new FormControl<number | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			Points: new FormControl<number | null | undefined>(undefined),
			PotentialPoints: new FormControl<number | null | undefined>(undefined),
			QuarterID: new FormControl<number | null | undefined>(undefined),
			QuarterName: new FormControl<string | null | undefined>(undefined),
			ReceivingPlayerID: new FormControl<number | null | undefined>(undefined),
			ReceivingTeam: new FormControl<string | null | undefined>(undefined),
			ReceivingTeamID: new FormControl<number | null | undefined>(undefined),
			Sequence: new FormControl<number | null | undefined>(undefined),
			ShotMade: new FormControl<boolean | null | undefined>(undefined),
			SideOfBasket: new FormControl<string | null | undefined>(undefined),
			SidelineOffsetPercentage: new FormControl<number | null | undefined>(undefined),
			StolenByPlayerID: new FormControl<number | null | undefined>(undefined),
			SubstituteInPlayerID: new FormControl<number | null | undefined>(undefined),
			SubstituteOutPlayerID: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			TimeRemainingMinutes: new FormControl<number | null | undefined>(undefined),
			TimeRemainingSeconds: new FormControl<number | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlayByPlay {
		Game?: Game;
		Plays?: Array<Play>;
		Quarters?: Array<Quarter>;
	}
	export interface PlayByPlayFormProperties {
	}
	export function CreatePlayByPlayFormGroup() {
		return new FormGroup<PlayByPlayFormProperties>({
		});

	}

	export interface Series {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamWins?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GameNumber?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamWins?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		MaxLength?: number | null;
	}
	export interface SeriesFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamWins: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GameNumber: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamWins: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		MaxLength: FormControl<number | null | undefined>,
	}
	export function CreateSeriesFormGroup() {
		return new FormGroup<SeriesFormProperties>({
			AwayTeamWins: new FormControl<number | null | undefined>(undefined),
			GameNumber: new FormControl<number | null | undefined>(undefined),
			HomeTeamWins: new FormControl<number | null | undefined>(undefined),
			MaxLength: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Play By Play
		 * Get {format}/PlayByPlay/{gameid}
		 * @param {PlayByPlayFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} gameid The GameID of an NBA game.  GameIDs can be found in the Games API.  Valid entries are <code>14620</code>, <code>16905</code>, etc.
		 */
		PlayByPlay(format: PlayByPlayFormat, gameid: string): Observable<PlayByPlay> {
			return this.http.get<PlayByPlay>(this.baseUri + format + '/PlayByPlay/' + (gameid == null ? '' : encodeURIComponent(gameid)) + '', {});
		}

		/**
		 * Play By Play Delta
		 * Get {format}/PlayByPlayDelta/{date}/{minutes}
		 * @param {PlayByPlayFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s).
		 * <br>Examples: <code>2016-OCT-31</code>, <code>2017-JAN-15</code>.
		 * @param {string} minutes Only returns plays that have changed in the last X minutes.  You specify how many minutes in time to go back.  Valid entries are:
		 * <code>1</code>, <code>2</code> ... <code>all</code>.
		 */
		PlayByPlayDelta(format: PlayByPlayFormat, date: string, minutes: string): Observable<Array<PlayByPlay>> {
			return this.http.get<Array<PlayByPlay>>(this.baseUri + format + '/PlayByPlayDelta/' + (date == null ? '' : encodeURIComponent(date)) + '/' + (minutes == null ? '' : encodeURIComponent(minutes)) + '', {});
		}
	}

	export enum PlayByPlayFormat { XML = 'XML', JSON = 'JSON' }

}

