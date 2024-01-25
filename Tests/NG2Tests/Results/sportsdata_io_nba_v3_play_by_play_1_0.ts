import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Game {
		Attendance?: number | null;
		AwayTeam?: string | null;
		AwayTeamID?: number | null;
		AwayTeamMoneyLine?: number | null;
		AwayTeamScore?: number | null;
		Channel?: string | null;
		DateTime?: string | null;
		Day?: string | null;
		GameEndDateTime?: string | null;
		GameID?: number | null;
		GlobalAwayTeamID?: number | null;
		GlobalGameID?: number | null;
		GlobalHomeTeamID?: number | null;
		HomeTeam?: string | null;
		HomeTeamID?: number | null;
		HomeTeamMoneyLine?: number | null;
		HomeTeamScore?: number | null;
		IsClosed?: boolean | null;
		LastPlay?: string | null;
		OverUnder?: number | null;
		PointSpread?: number | null;
		PointSpreadAwayTeamMoneyLine?: number | null;
		PointSpreadHomeTeamMoneyLine?: number | null;
		Quarter?: string | null;
		Quarters?: Array<Quarter>;
		Season?: number | null;
		SeasonType?: number | null;
		StadiumID?: number | null;
		Status?: string | null;
		TimeRemainingMinutes?: number | null;
		TimeRemainingSeconds?: number | null;
		Updated?: string | null;
	}
	export interface GameFormProperties {
		Attendance: FormControl<number | null | undefined>,
		AwayTeam: FormControl<string | null | undefined>,
		AwayTeamID: FormControl<number | null | undefined>,
		AwayTeamMoneyLine: FormControl<number | null | undefined>,
		AwayTeamScore: FormControl<number | null | undefined>,
		Channel: FormControl<string | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,
		GameEndDateTime: FormControl<string | null | undefined>,
		GameID: FormControl<number | null | undefined>,
		GlobalAwayTeamID: FormControl<number | null | undefined>,
		GlobalGameID: FormControl<number | null | undefined>,
		GlobalHomeTeamID: FormControl<number | null | undefined>,
		HomeTeam: FormControl<string | null | undefined>,
		HomeTeamID: FormControl<number | null | undefined>,
		HomeTeamMoneyLine: FormControl<number | null | undefined>,
		HomeTeamScore: FormControl<number | null | undefined>,
		IsClosed: FormControl<boolean | null | undefined>,
		LastPlay: FormControl<string | null | undefined>,
		OverUnder: FormControl<number | null | undefined>,
		PointSpread: FormControl<number | null | undefined>,
		PointSpreadAwayTeamMoneyLine: FormControl<number | null | undefined>,
		PointSpreadHomeTeamMoneyLine: FormControl<number | null | undefined>,
		Quarter: FormControl<string | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		StadiumID: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,
		TimeRemainingMinutes: FormControl<number | null | undefined>,
		TimeRemainingSeconds: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
	}
	export function CreateGameFormGroup() {
		return new FormGroup<GameFormProperties>({
			Attendance: new FormControl<number | null | undefined>(undefined),
			AwayTeam: new FormControl<string | null | undefined>(undefined),
			AwayTeamID: new FormControl<number | null | undefined>(undefined),
			AwayTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			AwayTeamScore: new FormControl<number | null | undefined>(undefined),
			Channel: new FormControl<string | null | undefined>(undefined),
			DateTime: new FormControl<string | null | undefined>(undefined),
			Day: new FormControl<string | null | undefined>(undefined),
			GameEndDateTime: new FormControl<string | null | undefined>(undefined),
			GameID: new FormControl<number | null | undefined>(undefined),
			GlobalAwayTeamID: new FormControl<number | null | undefined>(undefined),
			GlobalGameID: new FormControl<number | null | undefined>(undefined),
			GlobalHomeTeamID: new FormControl<number | null | undefined>(undefined),
			HomeTeam: new FormControl<string | null | undefined>(undefined),
			HomeTeamID: new FormControl<number | null | undefined>(undefined),
			HomeTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			HomeTeamScore: new FormControl<number | null | undefined>(undefined),
			IsClosed: new FormControl<boolean | null | undefined>(undefined),
			LastPlay: new FormControl<string | null | undefined>(undefined),
			OverUnder: new FormControl<number | null | undefined>(undefined),
			PointSpread: new FormControl<number | null | undefined>(undefined),
			PointSpreadAwayTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			PointSpreadHomeTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			Quarter: new FormControl<string | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			StadiumID: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			TimeRemainingMinutes: new FormControl<number | null | undefined>(undefined),
			TimeRemainingSeconds: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Quarter {
		AwayScore?: number | null;
		GameID?: number | null;
		HomeScore?: number | null;
		Name?: string | null;
		Number?: number | null;
		QuarterID?: number | null;
	}
	export interface QuarterFormProperties {
		AwayScore: FormControl<number | null | undefined>,
		GameID: FormControl<number | null | undefined>,
		HomeScore: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Number: FormControl<number | null | undefined>,
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
		AssistedByPlayerID?: number | null;
		AwayTeamScore?: number | null;
		BlockedByPlayerID?: number | null;
		Category?: string | null;
		Created?: string | null;
		Description?: string | null;
		FastBreak?: boolean | null;
		HomeTeamScore?: number | null;
		Opponent?: string | null;
		OpponentID?: number | null;
		PlayID?: number | null;
		PlayerID?: number | null;
		Points?: number | null;
		PotentialPoints?: number | null;
		QuarterID?: number | null;
		QuarterName?: string | null;
		ReceivingTeam?: string | null;
		ReceivingTeamID?: number | null;
		Sequence?: number | null;
		ShotMade?: boolean | null;
		SideOfBasket?: string | null;
		SubstituteInPlayerID?: number | null;
		SubstituteOutPlayerID?: number | null;
		Team?: string | null;
		TeamID?: number | null;
		TimeRemainingMinutes?: number | null;
		TimeRemainingSeconds?: number | null;
		Type?: string | null;
		Updated?: string | null;
	}
	export interface PlayFormProperties {
		AssistedByPlayerID: FormControl<number | null | undefined>,
		AwayTeamScore: FormControl<number | null | undefined>,
		BlockedByPlayerID: FormControl<number | null | undefined>,
		Category: FormControl<string | null | undefined>,
		Created: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		FastBreak: FormControl<boolean | null | undefined>,
		HomeTeamScore: FormControl<number | null | undefined>,
		Opponent: FormControl<string | null | undefined>,
		OpponentID: FormControl<number | null | undefined>,
		PlayID: FormControl<number | null | undefined>,
		PlayerID: FormControl<number | null | undefined>,
		Points: FormControl<number | null | undefined>,
		PotentialPoints: FormControl<number | null | undefined>,
		QuarterID: FormControl<number | null | undefined>,
		QuarterName: FormControl<string | null | undefined>,
		ReceivingTeam: FormControl<string | null | undefined>,
		ReceivingTeamID: FormControl<number | null | undefined>,
		Sequence: FormControl<number | null | undefined>,
		ShotMade: FormControl<boolean | null | undefined>,
		SideOfBasket: FormControl<string | null | undefined>,
		SubstituteInPlayerID: FormControl<number | null | undefined>,
		SubstituteOutPlayerID: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
		TimeRemainingMinutes: FormControl<number | null | undefined>,
		TimeRemainingSeconds: FormControl<number | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Updated: FormControl<string | null | undefined>,
	}
	export function CreatePlayFormGroup() {
		return new FormGroup<PlayFormProperties>({
			AssistedByPlayerID: new FormControl<number | null | undefined>(undefined),
			AwayTeamScore: new FormControl<number | null | undefined>(undefined),
			BlockedByPlayerID: new FormControl<number | null | undefined>(undefined),
			Category: new FormControl<string | null | undefined>(undefined),
			Created: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			FastBreak: new FormControl<boolean | null | undefined>(undefined),
			HomeTeamScore: new FormControl<number | null | undefined>(undefined),
			Opponent: new FormControl<string | null | undefined>(undefined),
			OpponentID: new FormControl<number | null | undefined>(undefined),
			PlayID: new FormControl<number | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			Points: new FormControl<number | null | undefined>(undefined),
			PotentialPoints: new FormControl<number | null | undefined>(undefined),
			QuarterID: new FormControl<number | null | undefined>(undefined),
			QuarterName: new FormControl<string | null | undefined>(undefined),
			ReceivingTeam: new FormControl<string | null | undefined>(undefined),
			ReceivingTeamID: new FormControl<number | null | undefined>(undefined),
			Sequence: new FormControl<number | null | undefined>(undefined),
			ShotMade: new FormControl<boolean | null | undefined>(undefined),
			SideOfBasket: new FormControl<string | null | undefined>(undefined),
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

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Play By Play
		 * Get {format}/PlayByPlay/{gameid}
		 * @param {PlayByPlayFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} gameid The GameID of an NBA game.  GameIDs can be found in the Games API.  Valid entries are <code>14620</code>, <code>16905</code>, etc.
		 * @return {PlayByPlay} 
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
		 * @return {Array<PlayByPlay>} 
		 */
		PlayByPlayDelta(format: PlayByPlayFormat, date: string, minutes: string): Observable<Array<PlayByPlay>> {
			return this.http.get<Array<PlayByPlay>>(this.baseUri + format + '/PlayByPlayDelta/' + (date == null ? '' : encodeURIComponent(date)) + '/' + (minutes == null ? '' : encodeURIComponent(minutes)) + '', {});
		}
	}

	export enum PlayByPlayFormat { XML = 0, JSON = 1 }

}

