import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Game {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Attendance?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayRotationNumber?: number | null;
		AwayTeam?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamErrors?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamHits?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamMoneyLine?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamProbablePitcherID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamRuns?: number | null;
		AwayTeamStartingPitcher?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamStartingPitcherID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Balls?: number | null;
		Channel?: string | null;
		CurrentHitter?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		CurrentHitterID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		CurrentHittingTeamID?: number | null;
		CurrentPitcher?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		CurrentPitcherID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		CurrentPitchingTeamID?: number | null;
		DateTime?: string | null;
		DateTimeUTC?: string | null;
		Day?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DueUpHitterID1?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DueUpHitterID2?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DueUpHitterID3?: number | null;
		ForecastDescription?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ForecastTempHigh?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ForecastTempLow?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ForecastWindChill?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ForecastWindDirection?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ForecastWindSpeed?: number | null;
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
		HomeTeamErrors?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamHits?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamMoneyLine?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamProbablePitcherID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamRuns?: number | null;
		HomeTeamStartingPitcher?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamStartingPitcherID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Inning?: number | null;
		InningDescription?: string | null;
		InningHalf?: string | null;
		Innings?: Array<Inning>;
		IsClosed?: boolean | null;
		LastPlay?: string | null;
		LosingPitcher?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		LosingPitcherID?: number | null;
		NeutralVenue?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Outs?: number | null;

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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RescheduledFromGameID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RescheduledGameID?: number | null;
		RunnerOnFirst?: boolean | null;
		RunnerOnSecond?: boolean | null;
		RunnerOnThird?: boolean | null;
		SavingPitcher?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SavingPitcherID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType?: number | null;
		SeriesInfo?: Series;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StadiumID?: number | null;
		Status?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Strikes?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UnderPayout?: number | null;
		Updated?: string | null;
		WinningPitcher?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		WinningPitcherID?: number | null;
	}
	export interface GameFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Attendance: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayRotationNumber: FormControl<number | null | undefined>,
		AwayTeam: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamErrors: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamHits: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamMoneyLine: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamProbablePitcherID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamRuns: FormControl<number | null | undefined>,
		AwayTeamStartingPitcher: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamStartingPitcherID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Balls: FormControl<number | null | undefined>,
		Channel: FormControl<string | null | undefined>,
		CurrentHitter: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		CurrentHitterID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		CurrentHittingTeamID: FormControl<number | null | undefined>,
		CurrentPitcher: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		CurrentPitcherID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		CurrentPitchingTeamID: FormControl<number | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		DateTimeUTC: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DueUpHitterID1: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DueUpHitterID2: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DueUpHitterID3: FormControl<number | null | undefined>,
		ForecastDescription: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ForecastTempHigh: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ForecastTempLow: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ForecastWindChill: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ForecastWindDirection: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ForecastWindSpeed: FormControl<number | null | undefined>,
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
		HomeTeamErrors: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamHits: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamMoneyLine: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamProbablePitcherID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamRuns: FormControl<number | null | undefined>,
		HomeTeamStartingPitcher: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamStartingPitcherID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Inning: FormControl<number | null | undefined>,
		InningDescription: FormControl<string | null | undefined>,
		InningHalf: FormControl<string | null | undefined>,
		IsClosed: FormControl<boolean | null | undefined>,
		LastPlay: FormControl<string | null | undefined>,
		LosingPitcher: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		LosingPitcherID: FormControl<number | null | undefined>,
		NeutralVenue: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Outs: FormControl<number | null | undefined>,

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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RescheduledFromGameID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RescheduledGameID: FormControl<number | null | undefined>,
		RunnerOnFirst: FormControl<boolean | null | undefined>,
		RunnerOnSecond: FormControl<boolean | null | undefined>,
		RunnerOnThird: FormControl<boolean | null | undefined>,
		SavingPitcher: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SavingPitcherID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StadiumID: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Strikes: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UnderPayout: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
		WinningPitcher: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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
			DateTimeUTC: new FormControl<string | null | undefined>(undefined),
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
			InningDescription: new FormControl<string | null | undefined>(undefined),
			InningHalf: new FormControl<string | null | undefined>(undefined),
			IsClosed: new FormControl<boolean | null | undefined>(undefined),
			LastPlay: new FormControl<string | null | undefined>(undefined),
			LosingPitcher: new FormControl<string | null | undefined>(undefined),
			LosingPitcherID: new FormControl<number | null | undefined>(undefined),
			NeutralVenue: new FormControl<boolean | null | undefined>(undefined),
			Outs: new FormControl<number | null | undefined>(undefined),
			OverPayout: new FormControl<number | null | undefined>(undefined),
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
			UnderPayout: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
			WinningPitcher: new FormControl<string | null | undefined>(undefined),
			WinningPitcherID: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Inning {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamRuns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GameID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamRuns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		InningID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		InningNumber?: number | null;
	}
	export interface InningFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamRuns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GameID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamRuns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		InningID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		BallsBeforePitch?: number | null;
		Foul?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HitterID?: number | null;
		Looking?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Outs?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PitchID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PitchNumberThisAtBat?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PitcherID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayID?: number | null;
		Strike?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StrikesBeforePitch?: number | null;
		Swinging?: boolean | null;
	}
	export interface PitchFormProperties {
		Ball: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		BallsBeforePitch: FormControl<number | null | undefined>,
		Foul: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HitterID: FormControl<number | null | undefined>,
		Looking: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Outs: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PitchID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PitchNumberThisAtBat: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PitcherID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayID: FormControl<number | null | undefined>,
		Strike: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamRuns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Balls?: number | null;
		Description?: string | null;
		Error?: boolean | null;
		Hit?: boolean | null;
		HitterBatHand?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HitterID?: number | null;
		HitterName?: string | null;
		HitterPosition?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HitterTeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamRuns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		InningBatterNumber?: number | null;
		InningHalf?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		InningID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		InningNumber?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		NumberOfOutsOnPlay?: number | null;
		Out?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Outs?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PitchNumberThisAtBat?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PitcherID?: number | null;
		PitcherName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PitcherTeamID?: number | null;
		PitcherThrowHand?: string | null;
		Pitches?: Array<Pitch>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayNumber?: number | null;
		Result?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Runner1ID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Runner2ID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Runner3ID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RunsBattedIn?: number | null;
		Sacrifice?: boolean | null;
		Strikeout?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Strikes?: number | null;
		Updated?: string | null;
		Walk?: boolean | null;
	}
	export interface PlayFormProperties {
		AtBat: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamRuns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Balls: FormControl<number | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Error: FormControl<boolean | null | undefined>,
		Hit: FormControl<boolean | null | undefined>,
		HitterBatHand: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HitterID: FormControl<number | null | undefined>,
		HitterName: FormControl<string | null | undefined>,
		HitterPosition: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HitterTeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamRuns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		InningBatterNumber: FormControl<number | null | undefined>,
		InningHalf: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		InningID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		InningNumber: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		NumberOfOutsOnPlay: FormControl<number | null | undefined>,
		Out: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Outs: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PitchNumberThisAtBat: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PitcherID: FormControl<number | null | undefined>,
		PitcherName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PitcherTeamID: FormControl<number | null | undefined>,
		PitcherThrowHand: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayNumber: FormControl<number | null | undefined>,
		Result: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Runner1ID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Runner2ID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Runner3ID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RunsBattedIn: FormControl<number | null | undefined>,
		Sacrifice: FormControl<boolean | null | undefined>,
		Strikeout: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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
		 * @param {string} gameid The GameID of an MLB game.  GameIDs can be found in the Games API.  Valid entries are <code>14620</code> or <code>16905</code>
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
		 */
		PlayByPlayDelta(format: PlayByPlayFormat, date: string, minutes: string): Observable<Array<PlayByPlay>> {
			return this.http.get<Array<PlayByPlay>>(this.baseUri + format + '/PlayByPlayDelta/' + (date == null ? '' : encodeURIComponent(date)) + '/' + (minutes == null ? '' : encodeURIComponent(minutes)) + '', {});
		}
	}

	export enum PlayByPlayFormat { XML = 'XML', JSON = 'JSON' }

}

