import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Game {
		Attendance?: number | null;
		AwayRotationNumber?: number | null;
		AwayTeam?: string | null;
		AwayTeamErrors?: number | null;
		AwayTeamHits?: number | null;
		AwayTeamID?: number | null;
		AwayTeamMoneyLine?: number | null;
		AwayTeamProbablePitcherID?: number | null;
		AwayTeamRuns?: number | null;
		AwayTeamStartingPitcher?: string | null;
		AwayTeamStartingPitcherID?: number | null;
		Balls?: number | null;
		Channel?: string | null;
		CurrentHitter?: string | null;
		CurrentHitterID?: number | null;
		CurrentHittingTeamID?: number | null;
		CurrentPitcher?: string | null;
		CurrentPitcherID?: number | null;
		CurrentPitchingTeamID?: number | null;
		DateTime?: string | null;
		Day?: string | null;
		DueUpHitterID1?: number | null;
		DueUpHitterID2?: number | null;
		DueUpHitterID3?: number | null;
		ForecastDescription?: string | null;
		ForecastTempHigh?: number | null;
		ForecastTempLow?: number | null;
		ForecastWindChill?: number | null;
		ForecastWindDirection?: number | null;
		ForecastWindSpeed?: number | null;
		GameEndDateTime?: string | null;
		GameID?: number | null;
		GlobalAwayTeamID?: number | null;
		GlobalGameID?: number | null;
		GlobalHomeTeamID?: number | null;
		HomeRotationNumber?: number | null;
		HomeTeam?: string | null;
		HomeTeamErrors?: number | null;
		HomeTeamHits?: number | null;
		HomeTeamID?: number | null;
		HomeTeamMoneyLine?: number | null;
		HomeTeamProbablePitcherID?: number | null;
		HomeTeamRuns?: number | null;
		HomeTeamStartingPitcher?: string | null;
		HomeTeamStartingPitcherID?: number | null;
		Inning?: number | null;
		InningHalf?: string | null;
		Innings?: Array<Inning>;
		IsClosed?: boolean | null;
		LastPlay?: string | null;
		LosingPitcher?: string | null;
		LosingPitcherID?: number | null;
		Outs?: number | null;
		OverUnder?: number | null;
		PointSpread?: number | null;
		PointSpreadAwayTeamMoneyLine?: number | null;
		PointSpreadHomeTeamMoneyLine?: number | null;
		RescheduledFromGameID?: number | null;
		RescheduledGameID?: number | null;
		RunnerOnFirst?: boolean | null;
		RunnerOnSecond?: boolean | null;
		RunnerOnThird?: boolean | null;
		SavingPitcher?: string | null;
		SavingPitcherID?: number | null;
		Season?: number | null;
		SeasonType?: number | null;
		StadiumID?: number | null;
		Status?: string | null;
		Strikes?: number | null;
		Updated?: string | null;
		WinningPitcher?: string | null;
		WinningPitcherID?: number | null;
	}
	export interface GameFormProperties {
		Attendance: FormControl<number | null | undefined>,
		AwayRotationNumber: FormControl<number | null | undefined>,
		AwayTeam: FormControl<string | null | undefined>,
		AwayTeamErrors: FormControl<number | null | undefined>,
		AwayTeamHits: FormControl<number | null | undefined>,
		AwayTeamID: FormControl<number | null | undefined>,
		AwayTeamMoneyLine: FormControl<number | null | undefined>,
		AwayTeamProbablePitcherID: FormControl<number | null | undefined>,
		AwayTeamRuns: FormControl<number | null | undefined>,
		AwayTeamStartingPitcher: FormControl<string | null | undefined>,
		AwayTeamStartingPitcherID: FormControl<number | null | undefined>,
		Balls: FormControl<number | null | undefined>,
		Channel: FormControl<string | null | undefined>,
		CurrentHitter: FormControl<string | null | undefined>,
		CurrentHitterID: FormControl<number | null | undefined>,
		CurrentHittingTeamID: FormControl<number | null | undefined>,
		CurrentPitcher: FormControl<string | null | undefined>,
		CurrentPitcherID: FormControl<number | null | undefined>,
		CurrentPitchingTeamID: FormControl<number | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,
		DueUpHitterID1: FormControl<number | null | undefined>,
		DueUpHitterID2: FormControl<number | null | undefined>,
		DueUpHitterID3: FormControl<number | null | undefined>,
		ForecastDescription: FormControl<string | null | undefined>,
		ForecastTempHigh: FormControl<number | null | undefined>,
		ForecastTempLow: FormControl<number | null | undefined>,
		ForecastWindChill: FormControl<number | null | undefined>,
		ForecastWindDirection: FormControl<number | null | undefined>,
		ForecastWindSpeed: FormControl<number | null | undefined>,
		GameEndDateTime: FormControl<string | null | undefined>,
		GameID: FormControl<number | null | undefined>,
		GlobalAwayTeamID: FormControl<number | null | undefined>,
		GlobalGameID: FormControl<number | null | undefined>,
		GlobalHomeTeamID: FormControl<number | null | undefined>,
		HomeRotationNumber: FormControl<number | null | undefined>,
		HomeTeam: FormControl<string | null | undefined>,
		HomeTeamErrors: FormControl<number | null | undefined>,
		HomeTeamHits: FormControl<number | null | undefined>,
		HomeTeamID: FormControl<number | null | undefined>,
		HomeTeamMoneyLine: FormControl<number | null | undefined>,
		HomeTeamProbablePitcherID: FormControl<number | null | undefined>,
		HomeTeamRuns: FormControl<number | null | undefined>,
		HomeTeamStartingPitcher: FormControl<string | null | undefined>,
		HomeTeamStartingPitcherID: FormControl<number | null | undefined>,
		Inning: FormControl<number | null | undefined>,
		InningHalf: FormControl<string | null | undefined>,
		IsClosed: FormControl<boolean | null | undefined>,
		LastPlay: FormControl<string | null | undefined>,
		LosingPitcher: FormControl<string | null | undefined>,
		LosingPitcherID: FormControl<number | null | undefined>,
		Outs: FormControl<number | null | undefined>,
		OverUnder: FormControl<number | null | undefined>,
		PointSpread: FormControl<number | null | undefined>,
		PointSpreadAwayTeamMoneyLine: FormControl<number | null | undefined>,
		PointSpreadHomeTeamMoneyLine: FormControl<number | null | undefined>,
		RescheduledFromGameID: FormControl<number | null | undefined>,
		RescheduledGameID: FormControl<number | null | undefined>,
		RunnerOnFirst: FormControl<boolean | null | undefined>,
		RunnerOnSecond: FormControl<boolean | null | undefined>,
		RunnerOnThird: FormControl<boolean | null | undefined>,
		SavingPitcher: FormControl<string | null | undefined>,
		SavingPitcherID: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		StadiumID: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Strikes: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
		WinningPitcher: FormControl<string | null | undefined>,
		WinningPitcherID: FormControl<number | null | undefined>,
	}
	export function CreateGameFormGroup() {
		return new FormGroup<GameFormProperties>({
			Attendance: new FormControl<number | null | undefined>(undefined),
			AwayRotationNumber: new FormControl<number | null | undefined>(undefined),
			AwayTeam: new FormControl<string | null | undefined>(undefined),
			AwayTeamErrors: new FormControl<number | null | undefined>(undefined),
			AwayTeamHits: new FormControl<number | null | undefined>(undefined),
			AwayTeamID: new FormControl<number | null | undefined>(undefined),
			AwayTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			AwayTeamProbablePitcherID: new FormControl<number | null | undefined>(undefined),
			AwayTeamRuns: new FormControl<number | null | undefined>(undefined),
			AwayTeamStartingPitcher: new FormControl<string | null | undefined>(undefined),
			AwayTeamStartingPitcherID: new FormControl<number | null | undefined>(undefined),
			Balls: new FormControl<number | null | undefined>(undefined),
			Channel: new FormControl<string | null | undefined>(undefined),
			CurrentHitter: new FormControl<string | null | undefined>(undefined),
			CurrentHitterID: new FormControl<number | null | undefined>(undefined),
			CurrentHittingTeamID: new FormControl<number | null | undefined>(undefined),
			CurrentPitcher: new FormControl<string | null | undefined>(undefined),
			CurrentPitcherID: new FormControl<number | null | undefined>(undefined),
			CurrentPitchingTeamID: new FormControl<number | null | undefined>(undefined),
			DateTime: new FormControl<string | null | undefined>(undefined),
			Day: new FormControl<string | null | undefined>(undefined),
			DueUpHitterID1: new FormControl<number | null | undefined>(undefined),
			DueUpHitterID2: new FormControl<number | null | undefined>(undefined),
			DueUpHitterID3: new FormControl<number | null | undefined>(undefined),
			ForecastDescription: new FormControl<string | null | undefined>(undefined),
			ForecastTempHigh: new FormControl<number | null | undefined>(undefined),
			ForecastTempLow: new FormControl<number | null | undefined>(undefined),
			ForecastWindChill: new FormControl<number | null | undefined>(undefined),
			ForecastWindDirection: new FormControl<number | null | undefined>(undefined),
			ForecastWindSpeed: new FormControl<number | null | undefined>(undefined),
			GameEndDateTime: new FormControl<string | null | undefined>(undefined),
			GameID: new FormControl<number | null | undefined>(undefined),
			GlobalAwayTeamID: new FormControl<number | null | undefined>(undefined),
			GlobalGameID: new FormControl<number | null | undefined>(undefined),
			GlobalHomeTeamID: new FormControl<number | null | undefined>(undefined),
			HomeRotationNumber: new FormControl<number | null | undefined>(undefined),
			HomeTeam: new FormControl<string | null | undefined>(undefined),
			HomeTeamErrors: new FormControl<number | null | undefined>(undefined),
			HomeTeamHits: new FormControl<number | null | undefined>(undefined),
			HomeTeamID: new FormControl<number | null | undefined>(undefined),
			HomeTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			HomeTeamProbablePitcherID: new FormControl<number | null | undefined>(undefined),
			HomeTeamRuns: new FormControl<number | null | undefined>(undefined),
			HomeTeamStartingPitcher: new FormControl<string | null | undefined>(undefined),
			HomeTeamStartingPitcherID: new FormControl<number | null | undefined>(undefined),
			Inning: new FormControl<number | null | undefined>(undefined),
			InningHalf: new FormControl<string | null | undefined>(undefined),
			IsClosed: new FormControl<boolean | null | undefined>(undefined),
			LastPlay: new FormControl<string | null | undefined>(undefined),
			LosingPitcher: new FormControl<string | null | undefined>(undefined),
			LosingPitcherID: new FormControl<number | null | undefined>(undefined),
			Outs: new FormControl<number | null | undefined>(undefined),
			OverUnder: new FormControl<number | null | undefined>(undefined),
			PointSpread: new FormControl<number | null | undefined>(undefined),
			PointSpreadAwayTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			PointSpreadHomeTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			RescheduledFromGameID: new FormControl<number | null | undefined>(undefined),
			RescheduledGameID: new FormControl<number | null | undefined>(undefined),
			RunnerOnFirst: new FormControl<boolean | null | undefined>(undefined),
			RunnerOnSecond: new FormControl<boolean | null | undefined>(undefined),
			RunnerOnThird: new FormControl<boolean | null | undefined>(undefined),
			SavingPitcher: new FormControl<string | null | undefined>(undefined),
			SavingPitcherID: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			StadiumID: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Strikes: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
			WinningPitcher: new FormControl<string | null | undefined>(undefined),
			WinningPitcherID: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Inning {
		AwayTeamRuns?: number | null;
		GameID?: number | null;
		HomeTeamRuns?: number | null;
		InningID?: number | null;
		InningNumber?: number | null;
	}
	export interface InningFormProperties {
		AwayTeamRuns: FormControl<number | null | undefined>,
		GameID: FormControl<number | null | undefined>,
		HomeTeamRuns: FormControl<number | null | undefined>,
		InningID: FormControl<number | null | undefined>,
		InningNumber: FormControl<number | null | undefined>,
	}
	export function CreateInningFormGroup() {
		return new FormGroup<InningFormProperties>({
			AwayTeamRuns: new FormControl<number | null | undefined>(undefined),
			GameID: new FormControl<number | null | undefined>(undefined),
			HomeTeamRuns: new FormControl<number | null | undefined>(undefined),
			InningID: new FormControl<number | null | undefined>(undefined),
			InningNumber: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Pitch {
		Ball?: boolean | null;
		BallsBeforePitch?: number | null;
		Foul?: boolean | null;
		HitterID?: number | null;
		Looking?: boolean | null;
		Outs?: number | null;
		PitchID?: number | null;
		PitchNumberThisAtBat?: number | null;
		PitcherID?: number | null;
		PlayID?: number | null;
		Strike?: boolean | null;
		StrikesBeforePitch?: number | null;
		Swinging?: boolean | null;
	}
	export interface PitchFormProperties {
		Ball: FormControl<boolean | null | undefined>,
		BallsBeforePitch: FormControl<number | null | undefined>,
		Foul: FormControl<boolean | null | undefined>,
		HitterID: FormControl<number | null | undefined>,
		Looking: FormControl<boolean | null | undefined>,
		Outs: FormControl<number | null | undefined>,
		PitchID: FormControl<number | null | undefined>,
		PitchNumberThisAtBat: FormControl<number | null | undefined>,
		PitcherID: FormControl<number | null | undefined>,
		PlayID: FormControl<number | null | undefined>,
		Strike: FormControl<boolean | null | undefined>,
		StrikesBeforePitch: FormControl<number | null | undefined>,
		Swinging: FormControl<boolean | null | undefined>,
	}
	export function CreatePitchFormGroup() {
		return new FormGroup<PitchFormProperties>({
			Ball: new FormControl<boolean | null | undefined>(undefined),
			BallsBeforePitch: new FormControl<number | null | undefined>(undefined),
			Foul: new FormControl<boolean | null | undefined>(undefined),
			HitterID: new FormControl<number | null | undefined>(undefined),
			Looking: new FormControl<boolean | null | undefined>(undefined),
			Outs: new FormControl<number | null | undefined>(undefined),
			PitchID: new FormControl<number | null | undefined>(undefined),
			PitchNumberThisAtBat: new FormControl<number | null | undefined>(undefined),
			PitcherID: new FormControl<number | null | undefined>(undefined),
			PlayID: new FormControl<number | null | undefined>(undefined),
			Strike: new FormControl<boolean | null | undefined>(undefined),
			StrikesBeforePitch: new FormControl<number | null | undefined>(undefined),
			Swinging: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Play {
		AtBat?: boolean | null;
		AwayTeamRuns?: number | null;
		Balls?: number | null;
		Description?: string | null;
		Error?: boolean | null;
		Hit?: boolean | null;
		HitterBatHand?: string | null;
		HitterID?: number | null;
		HitterName?: string | null;
		HitterPosition?: string | null;
		HitterTeamID?: number | null;
		HomeTeamRuns?: number | null;
		InningBatterNumber?: number | null;
		InningHalf?: string | null;
		InningID?: number | null;
		InningNumber?: number | null;
		NumberOfOutsOnPlay?: number | null;
		Out?: boolean | null;
		Outs?: number | null;
		PitchNumberThisAtBat?: number | null;
		PitcherID?: number | null;
		PitcherName?: string | null;
		PitcherTeamID?: number | null;
		PitcherThrowHand?: string | null;
		Pitches?: Array<Pitch>;
		PlayID?: number | null;
		PlayNumber?: number | null;
		Result?: string | null;
		Runner1ID?: number | null;
		Runner2ID?: number | null;
		Runner3ID?: number | null;
		RunsBattedIn?: number | null;
		Sacrifice?: boolean | null;
		Strikeout?: boolean | null;
		Strikes?: number | null;
		Updated?: string | null;
		Walk?: boolean | null;
	}
	export interface PlayFormProperties {
		AtBat: FormControl<boolean | null | undefined>,
		AwayTeamRuns: FormControl<number | null | undefined>,
		Balls: FormControl<number | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Error: FormControl<boolean | null | undefined>,
		Hit: FormControl<boolean | null | undefined>,
		HitterBatHand: FormControl<string | null | undefined>,
		HitterID: FormControl<number | null | undefined>,
		HitterName: FormControl<string | null | undefined>,
		HitterPosition: FormControl<string | null | undefined>,
		HitterTeamID: FormControl<number | null | undefined>,
		HomeTeamRuns: FormControl<number | null | undefined>,
		InningBatterNumber: FormControl<number | null | undefined>,
		InningHalf: FormControl<string | null | undefined>,
		InningID: FormControl<number | null | undefined>,
		InningNumber: FormControl<number | null | undefined>,
		NumberOfOutsOnPlay: FormControl<number | null | undefined>,
		Out: FormControl<boolean | null | undefined>,
		Outs: FormControl<number | null | undefined>,
		PitchNumberThisAtBat: FormControl<number | null | undefined>,
		PitcherID: FormControl<number | null | undefined>,
		PitcherName: FormControl<string | null | undefined>,
		PitcherTeamID: FormControl<number | null | undefined>,
		PitcherThrowHand: FormControl<string | null | undefined>,
		PlayID: FormControl<number | null | undefined>,
		PlayNumber: FormControl<number | null | undefined>,
		Result: FormControl<string | null | undefined>,
		Runner1ID: FormControl<number | null | undefined>,
		Runner2ID: FormControl<number | null | undefined>,
		Runner3ID: FormControl<number | null | undefined>,
		RunsBattedIn: FormControl<number | null | undefined>,
		Sacrifice: FormControl<boolean | null | undefined>,
		Strikeout: FormControl<boolean | null | undefined>,
		Strikes: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
		Walk: FormControl<boolean | null | undefined>,
	}
	export function CreatePlayFormGroup() {
		return new FormGroup<PlayFormProperties>({
			AtBat: new FormControl<boolean | null | undefined>(undefined),
			AwayTeamRuns: new FormControl<number | null | undefined>(undefined),
			Balls: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Error: new FormControl<boolean | null | undefined>(undefined),
			Hit: new FormControl<boolean | null | undefined>(undefined),
			HitterBatHand: new FormControl<string | null | undefined>(undefined),
			HitterID: new FormControl<number | null | undefined>(undefined),
			HitterName: new FormControl<string | null | undefined>(undefined),
			HitterPosition: new FormControl<string | null | undefined>(undefined),
			HitterTeamID: new FormControl<number | null | undefined>(undefined),
			HomeTeamRuns: new FormControl<number | null | undefined>(undefined),
			InningBatterNumber: new FormControl<number | null | undefined>(undefined),
			InningHalf: new FormControl<string | null | undefined>(undefined),
			InningID: new FormControl<number | null | undefined>(undefined),
			InningNumber: new FormControl<number | null | undefined>(undefined),
			NumberOfOutsOnPlay: new FormControl<number | null | undefined>(undefined),
			Out: new FormControl<boolean | null | undefined>(undefined),
			Outs: new FormControl<number | null | undefined>(undefined),
			PitchNumberThisAtBat: new FormControl<number | null | undefined>(undefined),
			PitcherID: new FormControl<number | null | undefined>(undefined),
			PitcherName: new FormControl<string | null | undefined>(undefined),
			PitcherTeamID: new FormControl<number | null | undefined>(undefined),
			PitcherThrowHand: new FormControl<string | null | undefined>(undefined),
			PlayID: new FormControl<number | null | undefined>(undefined),
			PlayNumber: new FormControl<number | null | undefined>(undefined),
			Result: new FormControl<string | null | undefined>(undefined),
			Runner1ID: new FormControl<number | null | undefined>(undefined),
			Runner2ID: new FormControl<number | null | undefined>(undefined),
			Runner3ID: new FormControl<number | null | undefined>(undefined),
			RunsBattedIn: new FormControl<number | null | undefined>(undefined),
			Sacrifice: new FormControl<boolean | null | undefined>(undefined),
			Strikeout: new FormControl<boolean | null | undefined>(undefined),
			Strikes: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
			Walk: new FormControl<boolean | null | undefined>(undefined),
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

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Play By Play
		 * Get {format}/PlayByPlay/{gameid}
		 * @param {PlayByPlayFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} gameid The GameID of an MLB game.  GameIDs can be found in the Games API.  Valid entries are <code>14620</code> or <code>16905</code>
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
		 * <br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.
		 * @param {string} minutes Only returns plays that have changed in the last X minutes.  You specify how many minutes in time to go back.  Valid entries are:
		 * <code>1</code>, <code>2</code> ... <code>all</code>.
		 * @return {Array<PlayByPlay>} 
		 */
		PlayByPlayDelta(format: PlayByPlayFormat, date: string, minutes: string): Observable<Array<PlayByPlay>> {
			return this.http.get<Array<PlayByPlay>>(this.baseUri + format + '/PlayByPlayDelta/' + (date == null ? '' : encodeURIComponent(date)) + '/' + (minutes == null ? '' : encodeURIComponent(minutes)) + '', {});
		}
	}

	export enum PlayByPlayFormat { XML = 'XML', JSON = 'JSON' }

}

