import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Game {
		Attendance?: number | null;
		AwayRotationNumber?: number | null;
		AwayTeam?: string | null;
		AwayTeamID?: number | null;
		AwayTeamMoneyLine?: number | null;
		AwayTeamScore?: number | null;
		Channel?: string | null;
		DateTime?: string | null;
		DateTimeUTC?: string | null;
		Day?: string | null;
		GameEndDateTime?: string | null;
		GameID?: number | null;
		GlobalAwayTeamID?: number | null;
		GlobalGameID?: number | null;
		GlobalHomeTeamID?: number | null;
		HomeRotationNumber?: number | null;
		HomeTeam?: string | null;
		HomeTeamID?: number | null;
		HomeTeamMoneyLine?: number | null;
		HomeTeamScore?: number | null;
		IsClosed?: boolean | null;
		LastPlay?: string | null;
		NeutralVenue?: boolean | null;
		OverPayout?: number | null;
		OverUnder?: number | null;
		Period?: string | null;
		Periods?: Array<Period>;
		PointSpread?: number | null;
		PointSpreadAwayTeamMoneyLine?: number | null;
		PointSpreadHomeTeamMoneyLine?: number | null;
		Season?: number | null;
		SeasonType?: number | null;
		SeriesInfo?: Series;
		StadiumID?: number | null;
		Status?: string | null;
		TimeRemainingMinutes?: number | null;
		TimeRemainingSeconds?: number | null;
		UnderPayout?: number | null;
		Updated?: string | null;
	}
	export interface GameFormProperties {
		Attendance: FormControl<number | null | undefined>,
		AwayRotationNumber: FormControl<number | null | undefined>,
		AwayTeam: FormControl<string | null | undefined>,
		AwayTeamID: FormControl<number | null | undefined>,
		AwayTeamMoneyLine: FormControl<number | null | undefined>,
		AwayTeamScore: FormControl<number | null | undefined>,
		Channel: FormControl<string | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		DateTimeUTC: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,
		GameEndDateTime: FormControl<string | null | undefined>,
		GameID: FormControl<number | null | undefined>,
		GlobalAwayTeamID: FormControl<number | null | undefined>,
		GlobalGameID: FormControl<number | null | undefined>,
		GlobalHomeTeamID: FormControl<number | null | undefined>,
		HomeRotationNumber: FormControl<number | null | undefined>,
		HomeTeam: FormControl<string | null | undefined>,
		HomeTeamID: FormControl<number | null | undefined>,
		HomeTeamMoneyLine: FormControl<number | null | undefined>,
		HomeTeamScore: FormControl<number | null | undefined>,
		IsClosed: FormControl<boolean | null | undefined>,
		LastPlay: FormControl<string | null | undefined>,
		NeutralVenue: FormControl<boolean | null | undefined>,
		OverPayout: FormControl<number | null | undefined>,
		OverUnder: FormControl<number | null | undefined>,
		Period: FormControl<string | null | undefined>,
		PointSpread: FormControl<number | null | undefined>,
		PointSpreadAwayTeamMoneyLine: FormControl<number | null | undefined>,
		PointSpreadHomeTeamMoneyLine: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		StadiumID: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,
		TimeRemainingMinutes: FormControl<number | null | undefined>,
		TimeRemainingSeconds: FormControl<number | null | undefined>,
		UnderPayout: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
	}
	export function CreateGameFormGroup() {
		return new FormGroup<GameFormProperties>({
			Attendance: new FormControl<number | null | undefined>(undefined),
			AwayRotationNumber: new FormControl<number | null | undefined>(undefined),
			AwayTeam: new FormControl<string | null | undefined>(undefined),
			AwayTeamID: new FormControl<number | null | undefined>(undefined),
			AwayTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			AwayTeamScore: new FormControl<number | null | undefined>(undefined),
			Channel: new FormControl<string | null | undefined>(undefined),
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
			Period: new FormControl<string | null | undefined>(undefined),
			PointSpread: new FormControl<number | null | undefined>(undefined),
			PointSpreadAwayTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			PointSpreadHomeTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			StadiumID: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			TimeRemainingMinutes: new FormControl<number | null | undefined>(undefined),
			TimeRemainingSeconds: new FormControl<number | null | undefined>(undefined),
			UnderPayout: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Period {
		AwayScore?: number | null;
		GameID?: number | null;
		HomeScore?: number | null;
		Name?: string | null;
		Penalties?: Array<Penalty>;
		PeriodID?: number | null;
		ScoringPlays?: Array<ScoringPlay>;
	}
	export interface PeriodFormProperties {
		AwayScore: FormControl<number | null | undefined>,
		GameID: FormControl<number | null | undefined>,
		HomeScore: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PeriodID: FormControl<number | null | undefined>,
	}
	export function CreatePeriodFormGroup() {
		return new FormGroup<PeriodFormProperties>({
			AwayScore: new FormControl<number | null | undefined>(undefined),
			GameID: new FormControl<number | null | undefined>(undefined),
			HomeScore: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PeriodID: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Penalty {
		BenchPenaltyServedByPlayerID?: number | null;
		Description?: string | null;
		DrawnByPlayerID?: number | null;
		DrawnByTeamID?: number | null;
		IsBenchPenalty?: boolean | null;
		PenalizedPlayerID?: number | null;
		PenalizedTeamID?: number | null;
		PenaltyID?: number | null;
		PenaltyMinutes?: number | null;
		PeriodID?: number | null;
		Sequence?: number | null;
		TimeRemainingMinutes?: number | null;
		TimeRemainingSeconds?: number | null;
	}
	export interface PenaltyFormProperties {
		BenchPenaltyServedByPlayerID: FormControl<number | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DrawnByPlayerID: FormControl<number | null | undefined>,
		DrawnByTeamID: FormControl<number | null | undefined>,
		IsBenchPenalty: FormControl<boolean | null | undefined>,
		PenalizedPlayerID: FormControl<number | null | undefined>,
		PenalizedTeamID: FormControl<number | null | undefined>,
		PenaltyID: FormControl<number | null | undefined>,
		PenaltyMinutes: FormControl<number | null | undefined>,
		PeriodID: FormControl<number | null | undefined>,
		Sequence: FormControl<number | null | undefined>,
		TimeRemainingMinutes: FormControl<number | null | undefined>,
		TimeRemainingSeconds: FormControl<number | null | undefined>,
	}
	export function CreatePenaltyFormGroup() {
		return new FormGroup<PenaltyFormProperties>({
			BenchPenaltyServedByPlayerID: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DrawnByPlayerID: new FormControl<number | null | undefined>(undefined),
			DrawnByTeamID: new FormControl<number | null | undefined>(undefined),
			IsBenchPenalty: new FormControl<boolean | null | undefined>(undefined),
			PenalizedPlayerID: new FormControl<number | null | undefined>(undefined),
			PenalizedTeamID: new FormControl<number | null | undefined>(undefined),
			PenaltyID: new FormControl<number | null | undefined>(undefined),
			PenaltyMinutes: new FormControl<number | null | undefined>(undefined),
			PeriodID: new FormControl<number | null | undefined>(undefined),
			Sequence: new FormControl<number | null | undefined>(undefined),
			TimeRemainingMinutes: new FormControl<number | null | undefined>(undefined),
			TimeRemainingSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ScoringPlay {
		AllowedByTeamID?: number | null;
		AssistedByPlayerID1?: number | null;
		AssistedByPlayerID2?: number | null;
		AwayTeamScore?: number | null;
		EmptyNet?: boolean | null;
		HomeTeamScore?: number | null;
		PeriodID?: number | null;
		PowerPlay?: boolean | null;
		ScoredByPlayerID?: number | null;
		ScoredByTeamID?: number | null;
		ScoringPlayID?: number | null;
		Sequence?: number | null;
		ShortHanded?: boolean | null;
		TimeRemainingMinutes?: number | null;
		TimeRemainingSeconds?: number | null;
	}
	export interface ScoringPlayFormProperties {
		AllowedByTeamID: FormControl<number | null | undefined>,
		AssistedByPlayerID1: FormControl<number | null | undefined>,
		AssistedByPlayerID2: FormControl<number | null | undefined>,
		AwayTeamScore: FormControl<number | null | undefined>,
		EmptyNet: FormControl<boolean | null | undefined>,
		HomeTeamScore: FormControl<number | null | undefined>,
		PeriodID: FormControl<number | null | undefined>,
		PowerPlay: FormControl<boolean | null | undefined>,
		ScoredByPlayerID: FormControl<number | null | undefined>,
		ScoredByTeamID: FormControl<number | null | undefined>,
		ScoringPlayID: FormControl<number | null | undefined>,
		Sequence: FormControl<number | null | undefined>,
		ShortHanded: FormControl<boolean | null | undefined>,
		TimeRemainingMinutes: FormControl<number | null | undefined>,
		TimeRemainingSeconds: FormControl<number | null | undefined>,
	}
	export function CreateScoringPlayFormGroup() {
		return new FormGroup<ScoringPlayFormProperties>({
			AllowedByTeamID: new FormControl<number | null | undefined>(undefined),
			AssistedByPlayerID1: new FormControl<number | null | undefined>(undefined),
			AssistedByPlayerID2: new FormControl<number | null | undefined>(undefined),
			AwayTeamScore: new FormControl<number | null | undefined>(undefined),
			EmptyNet: new FormControl<boolean | null | undefined>(undefined),
			HomeTeamScore: new FormControl<number | null | undefined>(undefined),
			PeriodID: new FormControl<number | null | undefined>(undefined),
			PowerPlay: new FormControl<boolean | null | undefined>(undefined),
			ScoredByPlayerID: new FormControl<number | null | undefined>(undefined),
			ScoredByTeamID: new FormControl<number | null | undefined>(undefined),
			ScoringPlayID: new FormControl<number | null | undefined>(undefined),
			Sequence: new FormControl<number | null | undefined>(undefined),
			ShortHanded: new FormControl<boolean | null | undefined>(undefined),
			TimeRemainingMinutes: new FormControl<number | null | undefined>(undefined),
			TimeRemainingSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Play {
		AwayTeamScore?: number | null;
		Category?: string | null;
		ClockMinutes?: number | null;
		ClockSeconds?: number | null;
		Created?: string | null;
		Description?: string | null;
		FirstAssistedByPlayerID?: number | null;
		HomeTeamScore?: number | null;
		Opponent?: string | null;
		OpponentID?: number | null;
		OpposingPlayerID?: number | null;
		PeriodID?: number | null;
		PeriodName?: string | null;
		PlayID?: number | null;
		PlayerID?: number | null;
		PowerPlayTeam?: string | null;
		PowerPlayTeamID?: number | null;
		SecondAssistedByPlayerID?: number | null;
		Sequence?: number | null;
		Team?: string | null;
		TeamID?: number | null;
		Type?: string | null;
		Updated?: string | null;
	}
	export interface PlayFormProperties {
		AwayTeamScore: FormControl<number | null | undefined>,
		Category: FormControl<string | null | undefined>,
		ClockMinutes: FormControl<number | null | undefined>,
		ClockSeconds: FormControl<number | null | undefined>,
		Created: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		FirstAssistedByPlayerID: FormControl<number | null | undefined>,
		HomeTeamScore: FormControl<number | null | undefined>,
		Opponent: FormControl<string | null | undefined>,
		OpponentID: FormControl<number | null | undefined>,
		OpposingPlayerID: FormControl<number | null | undefined>,
		PeriodID: FormControl<number | null | undefined>,
		PeriodName: FormControl<string | null | undefined>,
		PlayID: FormControl<number | null | undefined>,
		PlayerID: FormControl<number | null | undefined>,
		PowerPlayTeam: FormControl<string | null | undefined>,
		PowerPlayTeamID: FormControl<number | null | undefined>,
		SecondAssistedByPlayerID: FormControl<number | null | undefined>,
		Sequence: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Updated: FormControl<string | null | undefined>,
	}
	export function CreatePlayFormGroup() {
		return new FormGroup<PlayFormProperties>({
			AwayTeamScore: new FormControl<number | null | undefined>(undefined),
			Category: new FormControl<string | null | undefined>(undefined),
			ClockMinutes: new FormControl<number | null | undefined>(undefined),
			ClockSeconds: new FormControl<number | null | undefined>(undefined),
			Created: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			FirstAssistedByPlayerID: new FormControl<number | null | undefined>(undefined),
			HomeTeamScore: new FormControl<number | null | undefined>(undefined),
			Opponent: new FormControl<string | null | undefined>(undefined),
			OpponentID: new FormControl<number | null | undefined>(undefined),
			OpposingPlayerID: new FormControl<number | null | undefined>(undefined),
			PeriodID: new FormControl<number | null | undefined>(undefined),
			PeriodName: new FormControl<string | null | undefined>(undefined),
			PlayID: new FormControl<number | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			PowerPlayTeam: new FormControl<string | null | undefined>(undefined),
			PowerPlayTeamID: new FormControl<number | null | undefined>(undefined),
			SecondAssistedByPlayerID: new FormControl<number | null | undefined>(undefined),
			Sequence: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlayByPlay {
		Game?: Game;
		Plays?: Array<Play>;
	}
	export interface PlayByPlayFormProperties {
	}
	export function CreatePlayByPlayFormGroup() {
		return new FormGroup<PlayByPlayFormProperties>({
		});

	}

	export interface Series {
		AwayTeamWins?: number | null;
		GameNumber?: number | null;
		HomeTeamWins?: number | null;
		MaxLength?: number | null;
	}
	export interface SeriesFormProperties {
		AwayTeamWins: FormControl<number | null | undefined>,
		GameNumber: FormControl<number | null | undefined>,
		HomeTeamWins: FormControl<number | null | undefined>,
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
		 * @param {string} gameid The GameID of an NHL game.  GameIDs can be found in the Games API.  Valid entries are <code>14620</code> or <code>16905</code>
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
		 * <br>Examples: <code>2018-JAN-31</code>, <code>2017-OCT-01</code>.
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

