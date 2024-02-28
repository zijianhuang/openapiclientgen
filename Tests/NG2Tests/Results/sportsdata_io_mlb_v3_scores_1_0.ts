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
		InningHalf?: string | null;
		Innings?: Array<Inning>;
		IsClosed?: boolean | null;
		LastPlay?: string | null;
		LosingPitcher?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		LosingPitcherID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Outs?: number | null;

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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StadiumID?: number | null;
		Status?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Strikes?: number | null;
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
		InningHalf: FormControl<string | null | undefined>,
		IsClosed: FormControl<boolean | null | undefined>,
		LastPlay: FormControl<string | null | undefined>,
		LosingPitcher: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		LosingPitcherID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Outs: FormControl<number | null | undefined>,

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

	export interface News {
		Author?: string | null;
		Categories?: string | null;
		Content?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		NewsID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID2?: number | null;
		Source?: string | null;
		Team?: string | null;
		Team2?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID2?: number | null;
		TermsOfUse?: string | null;
		TimeAgo?: string | null;
		Title?: string | null;
		Updated?: string | null;
		Url?: string | null;
	}
	export interface NewsFormProperties {
		Author: FormControl<string | null | undefined>,
		Categories: FormControl<string | null | undefined>,
		Content: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		NewsID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID2: FormControl<number | null | undefined>,
		Source: FormControl<string | null | undefined>,
		Team: FormControl<string | null | undefined>,
		Team2: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID2: FormControl<number | null | undefined>,
		TermsOfUse: FormControl<string | null | undefined>,
		TimeAgo: FormControl<string | null | undefined>,
		Title: FormControl<string | null | undefined>,
		Updated: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateNewsFormGroup() {
		return new FormGroup<NewsFormProperties>({
			Author: new FormControl<string | null | undefined>(undefined),
			Categories: new FormControl<string | null | undefined>(undefined),
			Content: new FormControl<string | null | undefined>(undefined),
			NewsID: new FormControl<number | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			PlayerID2: new FormControl<number | null | undefined>(undefined),
			Source: new FormControl<string | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			Team2: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			TeamID2: new FormControl<number | null | undefined>(undefined),
			TermsOfUse: new FormControl<string | null | undefined>(undefined),
			TimeAgo: new FormControl<string | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Player {
		BatHand?: string | null;
		BirthCity?: string | null;
		BirthCountry?: string | null;
		BirthDate?: string | null;
		BirthState?: string | null;
		College?: string | null;
		DraftKingsName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DraftKingsPlayerID?: number | null;
		Experience?: string | null;
		FanDuelName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FanDuelPlayerID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FantasyAlarmPlayerID?: number | null;
		FantasyDraftName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FantasyDraftPlayerID?: number | null;
		FirstName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Height?: number | null;
		HighSchool?: string | null;
		InjuryBodyPart?: string | null;
		InjuryNotes?: string | null;
		InjuryStartDate?: string | null;
		InjuryStatus?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Jersey?: number | null;
		LastName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		MLBAMID?: number | null;
		PhotoUrl?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID?: number | null;
		Position?: string | null;
		PositionCategory?: string | null;
		ProDebut?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RotoWirePlayerID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RotoworldPlayerID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Salary?: number | null;
		SportRadarPlayerID?: string | null;
		SportsDataID?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SportsDirectPlayerID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StatsPlayerID?: number | null;
		Status?: string | null;
		Team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID?: number | null;
		ThrowHand?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UpcomingGameID?: number | null;
		UsaTodayHeadshotNoBackgroundUpdated?: string | null;
		UsaTodayHeadshotNoBackgroundUrl?: string | null;
		UsaTodayHeadshotUpdated?: string | null;
		UsaTodayHeadshotUrl?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UsaTodayPlayerID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Weight?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		XmlTeamPlayerID?: number | null;
		YahooName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		YahooPlayerID?: number | null;
	}
	export interface PlayerFormProperties {
		BatHand: FormControl<string | null | undefined>,
		BirthCity: FormControl<string | null | undefined>,
		BirthCountry: FormControl<string | null | undefined>,
		BirthDate: FormControl<string | null | undefined>,
		BirthState: FormControl<string | null | undefined>,
		College: FormControl<string | null | undefined>,
		DraftKingsName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DraftKingsPlayerID: FormControl<number | null | undefined>,
		Experience: FormControl<string | null | undefined>,
		FanDuelName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FanDuelPlayerID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FantasyAlarmPlayerID: FormControl<number | null | undefined>,
		FantasyDraftName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FantasyDraftPlayerID: FormControl<number | null | undefined>,
		FirstName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Height: FormControl<number | null | undefined>,
		HighSchool: FormControl<string | null | undefined>,
		InjuryBodyPart: FormControl<string | null | undefined>,
		InjuryNotes: FormControl<string | null | undefined>,
		InjuryStartDate: FormControl<string | null | undefined>,
		InjuryStatus: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Jersey: FormControl<number | null | undefined>,
		LastName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		MLBAMID: FormControl<number | null | undefined>,
		PhotoUrl: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID: FormControl<number | null | undefined>,
		Position: FormControl<string | null | undefined>,
		PositionCategory: FormControl<string | null | undefined>,
		ProDebut: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RotoWirePlayerID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RotoworldPlayerID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Salary: FormControl<number | null | undefined>,
		SportRadarPlayerID: FormControl<string | null | undefined>,
		SportsDataID: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SportsDirectPlayerID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StatsPlayerID: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID: FormControl<number | null | undefined>,
		ThrowHand: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UpcomingGameID: FormControl<number | null | undefined>,
		UsaTodayHeadshotNoBackgroundUpdated: FormControl<string | null | undefined>,
		UsaTodayHeadshotNoBackgroundUrl: FormControl<string | null | undefined>,
		UsaTodayHeadshotUpdated: FormControl<string | null | undefined>,
		UsaTodayHeadshotUrl: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UsaTodayPlayerID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Weight: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		XmlTeamPlayerID: FormControl<number | null | undefined>,
		YahooName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		YahooPlayerID: FormControl<number | null | undefined>,
	}
	export function CreatePlayerFormGroup() {
		return new FormGroup<PlayerFormProperties>({
			BatHand: new FormControl<string | null | undefined>(undefined),
			BirthCity: new FormControl<string | null | undefined>(undefined),
			BirthCountry: new FormControl<string | null | undefined>(undefined),
			BirthDate: new FormControl<string | null | undefined>(undefined),
			BirthState: new FormControl<string | null | undefined>(undefined),
			College: new FormControl<string | null | undefined>(undefined),
			DraftKingsName: new FormControl<string | null | undefined>(undefined),
			DraftKingsPlayerID: new FormControl<number | null | undefined>(undefined),
			Experience: new FormControl<string | null | undefined>(undefined),
			FanDuelName: new FormControl<string | null | undefined>(undefined),
			FanDuelPlayerID: new FormControl<number | null | undefined>(undefined),
			FantasyAlarmPlayerID: new FormControl<number | null | undefined>(undefined),
			FantasyDraftName: new FormControl<string | null | undefined>(undefined),
			FantasyDraftPlayerID: new FormControl<number | null | undefined>(undefined),
			FirstName: new FormControl<string | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			Height: new FormControl<number | null | undefined>(undefined),
			HighSchool: new FormControl<string | null | undefined>(undefined),
			InjuryBodyPart: new FormControl<string | null | undefined>(undefined),
			InjuryNotes: new FormControl<string | null | undefined>(undefined),
			InjuryStartDate: new FormControl<string | null | undefined>(undefined),
			InjuryStatus: new FormControl<string | null | undefined>(undefined),
			Jersey: new FormControl<number | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
			MLBAMID: new FormControl<number | null | undefined>(undefined),
			PhotoUrl: new FormControl<string | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			Position: new FormControl<string | null | undefined>(undefined),
			PositionCategory: new FormControl<string | null | undefined>(undefined),
			ProDebut: new FormControl<string | null | undefined>(undefined),
			RotoWirePlayerID: new FormControl<number | null | undefined>(undefined),
			RotoworldPlayerID: new FormControl<number | null | undefined>(undefined),
			Salary: new FormControl<number | null | undefined>(undefined),
			SportRadarPlayerID: new FormControl<string | null | undefined>(undefined),
			SportsDataID: new FormControl<string | null | undefined>(undefined),
			SportsDirectPlayerID: new FormControl<number | null | undefined>(undefined),
			StatsPlayerID: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			ThrowHand: new FormControl<string | null | undefined>(undefined),
			UpcomingGameID: new FormControl<number | null | undefined>(undefined),
			UsaTodayHeadshotNoBackgroundUpdated: new FormControl<string | null | undefined>(undefined),
			UsaTodayHeadshotNoBackgroundUrl: new FormControl<string | null | undefined>(undefined),
			UsaTodayHeadshotUpdated: new FormControl<string | null | undefined>(undefined),
			UsaTodayHeadshotUrl: new FormControl<string | null | undefined>(undefined),
			UsaTodayPlayerID: new FormControl<number | null | undefined>(undefined),
			Weight: new FormControl<number | null | undefined>(undefined),
			XmlTeamPlayerID: new FormControl<number | null | undefined>(undefined),
			YahooName: new FormControl<string | null | undefined>(undefined),
			YahooPlayerID: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Season {
		ApiSeason?: string | null;
		PostSeasonStartDate?: string | null;
		RegularSeasonStartDate?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season1?: number | null;
		SeasonType?: string | null;
	}
	export interface SeasonFormProperties {
		ApiSeason: FormControl<string | null | undefined>,
		PostSeasonStartDate: FormControl<string | null | undefined>,
		RegularSeasonStartDate: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season1: FormControl<number | null | undefined>,
		SeasonType: FormControl<string | null | undefined>,
	}
	export function CreateSeasonFormGroup() {
		return new FormGroup<SeasonFormProperties>({
			ApiSeason: new FormControl<string | null | undefined>(undefined),
			PostSeasonStartDate: new FormControl<string | null | undefined>(undefined),
			RegularSeasonStartDate: new FormControl<string | null | undefined>(undefined),
			Season1: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Stadium {
		Active?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Altitude?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Capacity?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		CenterField?: number | null;
		City?: string | null;
		Country?: string | null;

		/** Type: double */
		GeoLat?: number | null;

		/** Type: double */
		GeoLong?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomePlateDirection?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		LeftCenterField?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		LeftField?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		MidLeftCenterField?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		MidLeftField?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		MidRightCenterField?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		MidRightField?: number | null;
		Name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RightCenterField?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RightField?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StadiumID?: number | null;
		State?: string | null;
		Surface?: string | null;
		Type?: string | null;
	}
	export interface StadiumFormProperties {
		Active: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Altitude: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Capacity: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		CenterField: FormControl<number | null | undefined>,
		City: FormControl<string | null | undefined>,
		Country: FormControl<string | null | undefined>,

		/** Type: double */
		GeoLat: FormControl<number | null | undefined>,

		/** Type: double */
		GeoLong: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomePlateDirection: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		LeftCenterField: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		LeftField: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		MidLeftCenterField: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		MidLeftField: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		MidRightCenterField: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		MidRightField: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RightCenterField: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RightField: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StadiumID: FormControl<number | null | undefined>,
		State: FormControl<string | null | undefined>,
		Surface: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateStadiumFormGroup() {
		return new FormGroup<StadiumFormProperties>({
			Active: new FormControl<boolean | null | undefined>(undefined),
			Altitude: new FormControl<number | null | undefined>(undefined),
			Capacity: new FormControl<number | null | undefined>(undefined),
			CenterField: new FormControl<number | null | undefined>(undefined),
			City: new FormControl<string | null | undefined>(undefined),
			Country: new FormControl<string | null | undefined>(undefined),
			GeoLat: new FormControl<number | null | undefined>(undefined),
			GeoLong: new FormControl<number | null | undefined>(undefined),
			HomePlateDirection: new FormControl<number | null | undefined>(undefined),
			LeftCenterField: new FormControl<number | null | undefined>(undefined),
			LeftField: new FormControl<number | null | undefined>(undefined),
			MidLeftCenterField: new FormControl<number | null | undefined>(undefined),
			MidLeftField: new FormControl<number | null | undefined>(undefined),
			MidRightCenterField: new FormControl<number | null | undefined>(undefined),
			MidRightField: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			RightCenterField: new FormControl<number | null | undefined>(undefined),
			RightField: new FormControl<number | null | undefined>(undefined),
			StadiumID: new FormControl<number | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
			Surface: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Standing {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayLosses?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayWins?: number | null;
		City?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DayLosses?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DayWins?: number | null;
		Division?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DivisionLosses?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DivisionWins?: number | null;

		/** Type: double */
		GamesBehind?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeLosses?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeWins?: number | null;
		Key?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		LastTenGamesLosses?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		LastTenGamesWins?: number | null;
		League?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Losses?: number | null;
		Name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		NightLosses?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		NightWins?: number | null;

		/** Type: double */
		Percentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RunsAgainst?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RunsScored?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType?: number | null;
		Streak?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID?: number | null;

		/** Type: double */
		WildCardGamesBehind?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		WildCardRank?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Wins?: number | null;
	}
	export interface StandingFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayLosses: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayWins: FormControl<number | null | undefined>,
		City: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DayLosses: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DayWins: FormControl<number | null | undefined>,
		Division: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DivisionLosses: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DivisionWins: FormControl<number | null | undefined>,

		/** Type: double */
		GamesBehind: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeLosses: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeWins: FormControl<number | null | undefined>,
		Key: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		LastTenGamesLosses: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		LastTenGamesWins: FormControl<number | null | undefined>,
		League: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Losses: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		NightLosses: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		NightWins: FormControl<number | null | undefined>,

		/** Type: double */
		Percentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RunsAgainst: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RunsScored: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType: FormControl<number | null | undefined>,
		Streak: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID: FormControl<number | null | undefined>,

		/** Type: double */
		WildCardGamesBehind: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		WildCardRank: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Wins: FormControl<number | null | undefined>,
	}
	export function CreateStandingFormGroup() {
		return new FormGroup<StandingFormProperties>({
			AwayLosses: new FormControl<number | null | undefined>(undefined),
			AwayWins: new FormControl<number | null | undefined>(undefined),
			City: new FormControl<string | null | undefined>(undefined),
			DayLosses: new FormControl<number | null | undefined>(undefined),
			DayWins: new FormControl<number | null | undefined>(undefined),
			Division: new FormControl<string | null | undefined>(undefined),
			DivisionLosses: new FormControl<number | null | undefined>(undefined),
			DivisionWins: new FormControl<number | null | undefined>(undefined),
			GamesBehind: new FormControl<number | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			HomeLosses: new FormControl<number | null | undefined>(undefined),
			HomeWins: new FormControl<number | null | undefined>(undefined),
			Key: new FormControl<string | null | undefined>(undefined),
			LastTenGamesLosses: new FormControl<number | null | undefined>(undefined),
			LastTenGamesWins: new FormControl<number | null | undefined>(undefined),
			League: new FormControl<string | null | undefined>(undefined),
			Losses: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			NightLosses: new FormControl<number | null | undefined>(undefined),
			NightWins: new FormControl<number | null | undefined>(undefined),
			Percentage: new FormControl<number | null | undefined>(undefined),
			RunsAgainst: new FormControl<number | null | undefined>(undefined),
			RunsScored: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			Streak: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			WildCardGamesBehind: new FormControl<number | null | undefined>(undefined),
			WildCardRank: new FormControl<number | null | undefined>(undefined),
			Wins: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Team {
		Active?: boolean | null;
		City?: string | null;
		Division?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID?: number | null;
		League?: string | null;
		Name?: string | null;
		PrimaryColor?: string | null;
		QuaternaryColor?: string | null;
		SecondaryColor?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StadiumID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID?: number | null;
		TertiaryColor?: string | null;
		WikipediaLogoUrl?: string | null;
		WikipediaWordMarkUrl?: string | null;
		'[Key]'?: string | null;
	}
	export interface TeamFormProperties {
		Active: FormControl<boolean | null | undefined>,
		City: FormControl<string | null | undefined>,
		Division: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID: FormControl<number | null | undefined>,
		League: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PrimaryColor: FormControl<string | null | undefined>,
		QuaternaryColor: FormControl<string | null | undefined>,
		SecondaryColor: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StadiumID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID: FormControl<number | null | undefined>,
		TertiaryColor: FormControl<string | null | undefined>,
		WikipediaLogoUrl: FormControl<string | null | undefined>,
		WikipediaWordMarkUrl: FormControl<string | null | undefined>,
		'[Key]': FormControl<string | null | undefined>,
	}
	export function CreateTeamFormGroup() {
		return new FormGroup<TeamFormProperties>({
			Active: new FormControl<boolean | null | undefined>(undefined),
			City: new FormControl<string | null | undefined>(undefined),
			Division: new FormControl<string | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			League: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PrimaryColor: new FormControl<string | null | undefined>(undefined),
			QuaternaryColor: new FormControl<string | null | undefined>(undefined),
			SecondaryColor: new FormControl<string | null | undefined>(undefined),
			StadiumID: new FormControl<number | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			TertiaryColor: new FormControl<string | null | undefined>(undefined),
			WikipediaLogoUrl: new FormControl<string | null | undefined>(undefined),
			WikipediaWordMarkUrl: new FormControl<string | null | undefined>(undefined),
			'[Key]': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TeamGame {

		/** Type: double */
		AtBats?: number | null;

		/** Type: double */
		BallsInPlay?: number | null;

		/** Type: double */
		BattingAverage?: number | null;

		/** Type: double */
		BattingAverageOnBallsInPlay?: number | null;
		BattingOrderConfirmed?: boolean | null;

		/** Type: double */
		CaughtStealing?: number | null;
		DateTime?: string | null;
		Day?: string | null;

		/** Type: double */
		DoublePlays?: number | null;

		/** Type: double */
		Doubles?: number | null;

		/** Type: double */
		EarnedRunAverage?: number | null;

		/** Type: double */
		Errors?: number | null;

		/** Type: double */
		FantasyPoints?: number | null;

		/** Type: double */
		FantasyPointsDraftKings?: number | null;

		/** Type: double */
		FantasyPointsFanDuel?: number | null;

		/** Type: double */
		FantasyPointsFantasyDraft?: number | null;

		/** Type: double */
		FantasyPointsYahoo?: number | null;

		/** Type: double */
		FieldingIndependentPitching?: number | null;

		/** Type: double */
		FlyOuts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GameID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Games?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalGameID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalOpponentID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID?: number | null;

		/** Type: double */
		GrandSlams?: number | null;

		/** Type: double */
		GroundIntoDoublePlay?: number | null;

		/** Type: double */
		GroundOuts?: number | null;

		/** Type: double */
		HitByPitch?: number | null;

		/** Type: double */
		Hits?: number | null;
		HomeOrAway?: string | null;

		/** Type: double */
		HomeRuns?: number | null;

		/** Type: double */
		InningsPitchedDecimal?: number | null;

		/** Type: double */
		InningsPitchedFull?: number | null;

		/** Type: double */
		InningsPitchedOuts?: number | null;

		/** Type: double */
		IntentionalWalks?: number | null;
		IsGameOver?: boolean | null;

		/** Type: double */
		IsolatedPower?: number | null;

		/** Type: double */
		LeftOnBase?: number | null;

		/** Type: double */
		LineOuts?: number | null;

		/** Type: double */
		Losses?: number | null;
		Name?: string | null;

		/** Type: double */
		OnBasePercentage?: number | null;

		/** Type: double */
		OnBasePlusSlugging?: number | null;
		Opponent?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentID?: number | null;

		/** Type: double */
		Outs?: number | null;

		/** Type: double */
		PitchesSeen?: number | null;

		/** Type: double */
		PitchesThrown?: number | null;

		/** Type: double */
		PitchesThrownStrikes?: number | null;

		/** Type: double */
		PitchingBallsInPlay?: number | null;

		/** Type: double */
		PitchingBattingAverageAgainst?: number | null;

		/** Type: double */
		PitchingBattingAverageOnBallsInPlay?: number | null;

		/** Type: double */
		PitchingBlownSaves?: number | null;

		/** Type: double */
		PitchingCatchersInterference?: number | null;

		/** Type: double */
		PitchingCompleteGames?: number | null;

		/** Type: double */
		PitchingDoublePlays?: number | null;

		/** Type: double */
		PitchingDoubles?: number | null;

		/** Type: double */
		PitchingEarnedRuns?: number | null;

		/** Type: double */
		PitchingFlyOuts?: number | null;

		/** Type: double */
		PitchingGrandSlams?: number | null;

		/** Type: double */
		PitchingGroundIntoDoublePlay?: number | null;

		/** Type: double */
		PitchingGroundOuts?: number | null;

		/** Type: double */
		PitchingHitByPitch?: number | null;

		/** Type: double */
		PitchingHits?: number | null;

		/** Type: double */
		PitchingHolds?: number | null;

		/** Type: double */
		PitchingHomeRuns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PitchingInningStarted?: number | null;

		/** Type: double */
		PitchingIntentionalWalks?: number | null;

		/** Type: double */
		PitchingLineOuts?: number | null;

		/** Type: double */
		PitchingNoHitters?: number | null;

		/** Type: double */
		PitchingOnBasePercentage?: number | null;

		/** Type: double */
		PitchingOnBasePlusSlugging?: number | null;

		/** Type: double */
		PitchingPerfectGames?: number | null;

		/** Type: double */
		PitchingPlateAppearances?: number | null;

		/** Type: double */
		PitchingPopOuts?: number | null;

		/** Type: double */
		PitchingQualityStarts?: number | null;

		/** Type: double */
		PitchingReachedOnError?: number | null;

		/** Type: double */
		PitchingRuns?: number | null;

		/** Type: double */
		PitchingSacrificeFlies?: number | null;

		/** Type: double */
		PitchingSacrifices?: number | null;

		/** Type: double */
		PitchingShutOuts?: number | null;

		/** Type: double */
		PitchingSingles?: number | null;

		/** Type: double */
		PitchingSluggingPercentage?: number | null;

		/** Type: double */
		PitchingStrikeouts?: number | null;

		/** Type: double */
		PitchingStrikeoutsPerNineInnings?: number | null;

		/** Type: double */
		PitchingTotalBases?: number | null;

		/** Type: double */
		PitchingTriples?: number | null;

		/** Type: double */
		PitchingWalks?: number | null;

		/** Type: double */
		PitchingWalksPerNineInnings?: number | null;

		/** Type: double */
		PitchingWeightedOnBasePercentage?: number | null;

		/** Type: double */
		PlateAppearances?: number | null;

		/** Type: double */
		PopOuts?: number | null;

		/** Type: double */
		ReachedOnError?: number | null;

		/** Type: double */
		Runs?: number | null;

		/** Type: double */
		RunsBattedIn?: number | null;

		/** Type: double */
		SacrificeFlies?: number | null;

		/** Type: double */
		Sacrifices?: number | null;

		/** Type: double */
		Saves?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType?: number | null;

		/** Type: double */
		Singles?: number | null;

		/** Type: double */
		SluggingPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StatID?: number | null;

		/** Type: double */
		StolenBases?: number | null;

		/** Type: double */
		Strikeouts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SubstituteBattingOrder?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SubstituteBattingOrderSequence?: number | null;
		Team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID?: number | null;

		/** Type: double */
		TotalBases?: number | null;

		/** Type: double */
		TotalOutsPitched?: number | null;

		/** Type: double */
		Triples?: number | null;
		Updated?: string | null;

		/** Type: double */
		Walks?: number | null;

		/** Type: double */
		WalksHitsPerInningsPitched?: number | null;

		/** Type: double */
		WeightedOnBasePercentage?: number | null;

		/** Type: double */
		Wins?: number | null;
	}
	export interface TeamGameFormProperties {

		/** Type: double */
		AtBats: FormControl<number | null | undefined>,

		/** Type: double */
		BallsInPlay: FormControl<number | null | undefined>,

		/** Type: double */
		BattingAverage: FormControl<number | null | undefined>,

		/** Type: double */
		BattingAverageOnBallsInPlay: FormControl<number | null | undefined>,
		BattingOrderConfirmed: FormControl<boolean | null | undefined>,

		/** Type: double */
		CaughtStealing: FormControl<number | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,

		/** Type: double */
		DoublePlays: FormControl<number | null | undefined>,

		/** Type: double */
		Doubles: FormControl<number | null | undefined>,

		/** Type: double */
		EarnedRunAverage: FormControl<number | null | undefined>,

		/** Type: double */
		Errors: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPoints: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPointsDraftKings: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPointsFanDuel: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPointsFantasyDraft: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPointsYahoo: FormControl<number | null | undefined>,

		/** Type: double */
		FieldingIndependentPitching: FormControl<number | null | undefined>,

		/** Type: double */
		FlyOuts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GameID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Games: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalGameID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalOpponentID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID: FormControl<number | null | undefined>,

		/** Type: double */
		GrandSlams: FormControl<number | null | undefined>,

		/** Type: double */
		GroundIntoDoublePlay: FormControl<number | null | undefined>,

		/** Type: double */
		GroundOuts: FormControl<number | null | undefined>,

		/** Type: double */
		HitByPitch: FormControl<number | null | undefined>,

		/** Type: double */
		Hits: FormControl<number | null | undefined>,
		HomeOrAway: FormControl<string | null | undefined>,

		/** Type: double */
		HomeRuns: FormControl<number | null | undefined>,

		/** Type: double */
		InningsPitchedDecimal: FormControl<number | null | undefined>,

		/** Type: double */
		InningsPitchedFull: FormControl<number | null | undefined>,

		/** Type: double */
		InningsPitchedOuts: FormControl<number | null | undefined>,

		/** Type: double */
		IntentionalWalks: FormControl<number | null | undefined>,
		IsGameOver: FormControl<boolean | null | undefined>,

		/** Type: double */
		IsolatedPower: FormControl<number | null | undefined>,

		/** Type: double */
		LeftOnBase: FormControl<number | null | undefined>,

		/** Type: double */
		LineOuts: FormControl<number | null | undefined>,

		/** Type: double */
		Losses: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: double */
		OnBasePercentage: FormControl<number | null | undefined>,

		/** Type: double */
		OnBasePlusSlugging: FormControl<number | null | undefined>,
		Opponent: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentID: FormControl<number | null | undefined>,

		/** Type: double */
		Outs: FormControl<number | null | undefined>,

		/** Type: double */
		PitchesSeen: FormControl<number | null | undefined>,

		/** Type: double */
		PitchesThrown: FormControl<number | null | undefined>,

		/** Type: double */
		PitchesThrownStrikes: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingBallsInPlay: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingBattingAverageAgainst: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingBattingAverageOnBallsInPlay: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingBlownSaves: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingCatchersInterference: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingCompleteGames: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingDoublePlays: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingDoubles: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingEarnedRuns: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingFlyOuts: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingGrandSlams: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingGroundIntoDoublePlay: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingGroundOuts: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingHitByPitch: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingHits: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingHolds: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingHomeRuns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PitchingInningStarted: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingIntentionalWalks: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingLineOuts: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingNoHitters: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingOnBasePercentage: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingOnBasePlusSlugging: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingPerfectGames: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingPlateAppearances: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingPopOuts: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingQualityStarts: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingReachedOnError: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingRuns: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingSacrificeFlies: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingSacrifices: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingShutOuts: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingSingles: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingSluggingPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingStrikeouts: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingStrikeoutsPerNineInnings: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingTotalBases: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingTriples: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingWalks: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingWalksPerNineInnings: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingWeightedOnBasePercentage: FormControl<number | null | undefined>,

		/** Type: double */
		PlateAppearances: FormControl<number | null | undefined>,

		/** Type: double */
		PopOuts: FormControl<number | null | undefined>,

		/** Type: double */
		ReachedOnError: FormControl<number | null | undefined>,

		/** Type: double */
		Runs: FormControl<number | null | undefined>,

		/** Type: double */
		RunsBattedIn: FormControl<number | null | undefined>,

		/** Type: double */
		SacrificeFlies: FormControl<number | null | undefined>,

		/** Type: double */
		Sacrifices: FormControl<number | null | undefined>,

		/** Type: double */
		Saves: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType: FormControl<number | null | undefined>,

		/** Type: double */
		Singles: FormControl<number | null | undefined>,

		/** Type: double */
		SluggingPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StatID: FormControl<number | null | undefined>,

		/** Type: double */
		StolenBases: FormControl<number | null | undefined>,

		/** Type: double */
		Strikeouts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SubstituteBattingOrder: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SubstituteBattingOrderSequence: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID: FormControl<number | null | undefined>,

		/** Type: double */
		TotalBases: FormControl<number | null | undefined>,

		/** Type: double */
		TotalOutsPitched: FormControl<number | null | undefined>,

		/** Type: double */
		Triples: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,

		/** Type: double */
		Walks: FormControl<number | null | undefined>,

		/** Type: double */
		WalksHitsPerInningsPitched: FormControl<number | null | undefined>,

		/** Type: double */
		WeightedOnBasePercentage: FormControl<number | null | undefined>,

		/** Type: double */
		Wins: FormControl<number | null | undefined>,
	}
	export function CreateTeamGameFormGroup() {
		return new FormGroup<TeamGameFormProperties>({
			AtBats: new FormControl<number | null | undefined>(undefined),
			BallsInPlay: new FormControl<number | null | undefined>(undefined),
			BattingAverage: new FormControl<number | null | undefined>(undefined),
			BattingAverageOnBallsInPlay: new FormControl<number | null | undefined>(undefined),
			BattingOrderConfirmed: new FormControl<boolean | null | undefined>(undefined),
			CaughtStealing: new FormControl<number | null | undefined>(undefined),
			DateTime: new FormControl<string | null | undefined>(undefined),
			Day: new FormControl<string | null | undefined>(undefined),
			DoublePlays: new FormControl<number | null | undefined>(undefined),
			Doubles: new FormControl<number | null | undefined>(undefined),
			EarnedRunAverage: new FormControl<number | null | undefined>(undefined),
			Errors: new FormControl<number | null | undefined>(undefined),
			FantasyPoints: new FormControl<number | null | undefined>(undefined),
			FantasyPointsDraftKings: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFanDuel: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFantasyDraft: new FormControl<number | null | undefined>(undefined),
			FantasyPointsYahoo: new FormControl<number | null | undefined>(undefined),
			FieldingIndependentPitching: new FormControl<number | null | undefined>(undefined),
			FlyOuts: new FormControl<number | null | undefined>(undefined),
			GameID: new FormControl<number | null | undefined>(undefined),
			Games: new FormControl<number | null | undefined>(undefined),
			GlobalGameID: new FormControl<number | null | undefined>(undefined),
			GlobalOpponentID: new FormControl<number | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			GrandSlams: new FormControl<number | null | undefined>(undefined),
			GroundIntoDoublePlay: new FormControl<number | null | undefined>(undefined),
			GroundOuts: new FormControl<number | null | undefined>(undefined),
			HitByPitch: new FormControl<number | null | undefined>(undefined),
			Hits: new FormControl<number | null | undefined>(undefined),
			HomeOrAway: new FormControl<string | null | undefined>(undefined),
			HomeRuns: new FormControl<number | null | undefined>(undefined),
			InningsPitchedDecimal: new FormControl<number | null | undefined>(undefined),
			InningsPitchedFull: new FormControl<number | null | undefined>(undefined),
			InningsPitchedOuts: new FormControl<number | null | undefined>(undefined),
			IntentionalWalks: new FormControl<number | null | undefined>(undefined),
			IsGameOver: new FormControl<boolean | null | undefined>(undefined),
			IsolatedPower: new FormControl<number | null | undefined>(undefined),
			LeftOnBase: new FormControl<number | null | undefined>(undefined),
			LineOuts: new FormControl<number | null | undefined>(undefined),
			Losses: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			OnBasePercentage: new FormControl<number | null | undefined>(undefined),
			OnBasePlusSlugging: new FormControl<number | null | undefined>(undefined),
			Opponent: new FormControl<string | null | undefined>(undefined),
			OpponentID: new FormControl<number | null | undefined>(undefined),
			Outs: new FormControl<number | null | undefined>(undefined),
			PitchesSeen: new FormControl<number | null | undefined>(undefined),
			PitchesThrown: new FormControl<number | null | undefined>(undefined),
			PitchesThrownStrikes: new FormControl<number | null | undefined>(undefined),
			PitchingBallsInPlay: new FormControl<number | null | undefined>(undefined),
			PitchingBattingAverageAgainst: new FormControl<number | null | undefined>(undefined),
			PitchingBattingAverageOnBallsInPlay: new FormControl<number | null | undefined>(undefined),
			PitchingBlownSaves: new FormControl<number | null | undefined>(undefined),
			PitchingCatchersInterference: new FormControl<number | null | undefined>(undefined),
			PitchingCompleteGames: new FormControl<number | null | undefined>(undefined),
			PitchingDoublePlays: new FormControl<number | null | undefined>(undefined),
			PitchingDoubles: new FormControl<number | null | undefined>(undefined),
			PitchingEarnedRuns: new FormControl<number | null | undefined>(undefined),
			PitchingFlyOuts: new FormControl<number | null | undefined>(undefined),
			PitchingGrandSlams: new FormControl<number | null | undefined>(undefined),
			PitchingGroundIntoDoublePlay: new FormControl<number | null | undefined>(undefined),
			PitchingGroundOuts: new FormControl<number | null | undefined>(undefined),
			PitchingHitByPitch: new FormControl<number | null | undefined>(undefined),
			PitchingHits: new FormControl<number | null | undefined>(undefined),
			PitchingHolds: new FormControl<number | null | undefined>(undefined),
			PitchingHomeRuns: new FormControl<number | null | undefined>(undefined),
			PitchingInningStarted: new FormControl<number | null | undefined>(undefined),
			PitchingIntentionalWalks: new FormControl<number | null | undefined>(undefined),
			PitchingLineOuts: new FormControl<number | null | undefined>(undefined),
			PitchingNoHitters: new FormControl<number | null | undefined>(undefined),
			PitchingOnBasePercentage: new FormControl<number | null | undefined>(undefined),
			PitchingOnBasePlusSlugging: new FormControl<number | null | undefined>(undefined),
			PitchingPerfectGames: new FormControl<number | null | undefined>(undefined),
			PitchingPlateAppearances: new FormControl<number | null | undefined>(undefined),
			PitchingPopOuts: new FormControl<number | null | undefined>(undefined),
			PitchingQualityStarts: new FormControl<number | null | undefined>(undefined),
			PitchingReachedOnError: new FormControl<number | null | undefined>(undefined),
			PitchingRuns: new FormControl<number | null | undefined>(undefined),
			PitchingSacrificeFlies: new FormControl<number | null | undefined>(undefined),
			PitchingSacrifices: new FormControl<number | null | undefined>(undefined),
			PitchingShutOuts: new FormControl<number | null | undefined>(undefined),
			PitchingSingles: new FormControl<number | null | undefined>(undefined),
			PitchingSluggingPercentage: new FormControl<number | null | undefined>(undefined),
			PitchingStrikeouts: new FormControl<number | null | undefined>(undefined),
			PitchingStrikeoutsPerNineInnings: new FormControl<number | null | undefined>(undefined),
			PitchingTotalBases: new FormControl<number | null | undefined>(undefined),
			PitchingTriples: new FormControl<number | null | undefined>(undefined),
			PitchingWalks: new FormControl<number | null | undefined>(undefined),
			PitchingWalksPerNineInnings: new FormControl<number | null | undefined>(undefined),
			PitchingWeightedOnBasePercentage: new FormControl<number | null | undefined>(undefined),
			PlateAppearances: new FormControl<number | null | undefined>(undefined),
			PopOuts: new FormControl<number | null | undefined>(undefined),
			ReachedOnError: new FormControl<number | null | undefined>(undefined),
			Runs: new FormControl<number | null | undefined>(undefined),
			RunsBattedIn: new FormControl<number | null | undefined>(undefined),
			SacrificeFlies: new FormControl<number | null | undefined>(undefined),
			Sacrifices: new FormControl<number | null | undefined>(undefined),
			Saves: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			Singles: new FormControl<number | null | undefined>(undefined),
			SluggingPercentage: new FormControl<number | null | undefined>(undefined),
			StatID: new FormControl<number | null | undefined>(undefined),
			StolenBases: new FormControl<number | null | undefined>(undefined),
			Strikeouts: new FormControl<number | null | undefined>(undefined),
			SubstituteBattingOrder: new FormControl<number | null | undefined>(undefined),
			SubstituteBattingOrderSequence: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			TotalBases: new FormControl<number | null | undefined>(undefined),
			TotalOutsPitched: new FormControl<number | null | undefined>(undefined),
			Triples: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
			Walks: new FormControl<number | null | undefined>(undefined),
			WalksHitsPerInningsPitched: new FormControl<number | null | undefined>(undefined),
			WeightedOnBasePercentage: new FormControl<number | null | undefined>(undefined),
			Wins: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TeamSeason {

		/** Type: double */
		AtBats?: number | null;

		/** Type: double */
		BallsInPlay?: number | null;

		/** Type: double */
		BattingAverage?: number | null;

		/** Type: double */
		BattingAverageOnBallsInPlay?: number | null;
		BattingOrderConfirmed?: boolean | null;

		/** Type: double */
		CaughtStealing?: number | null;

		/** Type: double */
		DoublePlays?: number | null;

		/** Type: double */
		Doubles?: number | null;

		/** Type: double */
		EarnedRunAverage?: number | null;

		/** Type: double */
		Errors?: number | null;

		/** Type: double */
		FantasyPoints?: number | null;

		/** Type: double */
		FantasyPointsDraftKings?: number | null;

		/** Type: double */
		FantasyPointsFanDuel?: number | null;

		/** Type: double */
		FantasyPointsFantasyDraft?: number | null;

		/** Type: double */
		FantasyPointsYahoo?: number | null;

		/** Type: double */
		FieldingIndependentPitching?: number | null;

		/** Type: double */
		FlyOuts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Games?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID?: number | null;

		/** Type: double */
		GrandSlams?: number | null;

		/** Type: double */
		GroundIntoDoublePlay?: number | null;

		/** Type: double */
		GroundOuts?: number | null;

		/** Type: double */
		HitByPitch?: number | null;

		/** Type: double */
		Hits?: number | null;

		/** Type: double */
		HomeRuns?: number | null;

		/** Type: double */
		InningsPitchedDecimal?: number | null;

		/** Type: double */
		InningsPitchedFull?: number | null;

		/** Type: double */
		InningsPitchedOuts?: number | null;

		/** Type: double */
		IntentionalWalks?: number | null;

		/** Type: double */
		IsolatedPower?: number | null;

		/** Type: double */
		LeftOnBase?: number | null;

		/** Type: double */
		LineOuts?: number | null;

		/** Type: double */
		Losses?: number | null;
		Name?: string | null;

		/** Type: double */
		OnBasePercentage?: number | null;

		/** Type: double */
		OnBasePlusSlugging?: number | null;

		/** Type: double */
		Outs?: number | null;

		/** Type: double */
		PitchesSeen?: number | null;

		/** Type: double */
		PitchesThrown?: number | null;

		/** Type: double */
		PitchesThrownStrikes?: number | null;

		/** Type: double */
		PitchingBallsInPlay?: number | null;

		/** Type: double */
		PitchingBattingAverageAgainst?: number | null;

		/** Type: double */
		PitchingBattingAverageOnBallsInPlay?: number | null;

		/** Type: double */
		PitchingBlownSaves?: number | null;

		/** Type: double */
		PitchingCatchersInterference?: number | null;

		/** Type: double */
		PitchingCompleteGames?: number | null;

		/** Type: double */
		PitchingDoublePlays?: number | null;

		/** Type: double */
		PitchingDoubles?: number | null;

		/** Type: double */
		PitchingEarnedRuns?: number | null;

		/** Type: double */
		PitchingFlyOuts?: number | null;

		/** Type: double */
		PitchingGrandSlams?: number | null;

		/** Type: double */
		PitchingGroundIntoDoublePlay?: number | null;

		/** Type: double */
		PitchingGroundOuts?: number | null;

		/** Type: double */
		PitchingHitByPitch?: number | null;

		/** Type: double */
		PitchingHits?: number | null;

		/** Type: double */
		PitchingHolds?: number | null;

		/** Type: double */
		PitchingHomeRuns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PitchingInningStarted?: number | null;

		/** Type: double */
		PitchingIntentionalWalks?: number | null;

		/** Type: double */
		PitchingLineOuts?: number | null;

		/** Type: double */
		PitchingNoHitters?: number | null;

		/** Type: double */
		PitchingOnBasePercentage?: number | null;

		/** Type: double */
		PitchingOnBasePlusSlugging?: number | null;

		/** Type: double */
		PitchingPerfectGames?: number | null;

		/** Type: double */
		PitchingPlateAppearances?: number | null;

		/** Type: double */
		PitchingPopOuts?: number | null;

		/** Type: double */
		PitchingQualityStarts?: number | null;

		/** Type: double */
		PitchingReachedOnError?: number | null;

		/** Type: double */
		PitchingRuns?: number | null;

		/** Type: double */
		PitchingSacrificeFlies?: number | null;

		/** Type: double */
		PitchingSacrifices?: number | null;

		/** Type: double */
		PitchingShutOuts?: number | null;

		/** Type: double */
		PitchingSingles?: number | null;

		/** Type: double */
		PitchingSluggingPercentage?: number | null;

		/** Type: double */
		PitchingStrikeouts?: number | null;

		/** Type: double */
		PitchingStrikeoutsPerNineInnings?: number | null;

		/** Type: double */
		PitchingTotalBases?: number | null;

		/** Type: double */
		PitchingTriples?: number | null;

		/** Type: double */
		PitchingWalks?: number | null;

		/** Type: double */
		PitchingWalksPerNineInnings?: number | null;

		/** Type: double */
		PitchingWeightedOnBasePercentage?: number | null;

		/** Type: double */
		PlateAppearances?: number | null;

		/** Type: double */
		PopOuts?: number | null;

		/** Type: double */
		ReachedOnError?: number | null;

		/** Type: double */
		Runs?: number | null;

		/** Type: double */
		RunsBattedIn?: number | null;

		/** Type: double */
		SacrificeFlies?: number | null;

		/** Type: double */
		Sacrifices?: number | null;

		/** Type: double */
		Saves?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType?: number | null;

		/** Type: double */
		Singles?: number | null;

		/** Type: double */
		SluggingPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StatID?: number | null;

		/** Type: double */
		StolenBases?: number | null;

		/** Type: double */
		Strikeouts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SubstituteBattingOrder?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SubstituteBattingOrderSequence?: number | null;
		Team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID?: number | null;

		/** Type: double */
		TotalBases?: number | null;

		/** Type: double */
		TotalOutsPitched?: number | null;

		/** Type: double */
		Triples?: number | null;
		Updated?: string | null;

		/** Type: double */
		Walks?: number | null;

		/** Type: double */
		WalksHitsPerInningsPitched?: number | null;

		/** Type: double */
		WeightedOnBasePercentage?: number | null;

		/** Type: double */
		Wins?: number | null;
	}
	export interface TeamSeasonFormProperties {

		/** Type: double */
		AtBats: FormControl<number | null | undefined>,

		/** Type: double */
		BallsInPlay: FormControl<number | null | undefined>,

		/** Type: double */
		BattingAverage: FormControl<number | null | undefined>,

		/** Type: double */
		BattingAverageOnBallsInPlay: FormControl<number | null | undefined>,
		BattingOrderConfirmed: FormControl<boolean | null | undefined>,

		/** Type: double */
		CaughtStealing: FormControl<number | null | undefined>,

		/** Type: double */
		DoublePlays: FormControl<number | null | undefined>,

		/** Type: double */
		Doubles: FormControl<number | null | undefined>,

		/** Type: double */
		EarnedRunAverage: FormControl<number | null | undefined>,

		/** Type: double */
		Errors: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPoints: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPointsDraftKings: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPointsFanDuel: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPointsFantasyDraft: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPointsYahoo: FormControl<number | null | undefined>,

		/** Type: double */
		FieldingIndependentPitching: FormControl<number | null | undefined>,

		/** Type: double */
		FlyOuts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Games: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID: FormControl<number | null | undefined>,

		/** Type: double */
		GrandSlams: FormControl<number | null | undefined>,

		/** Type: double */
		GroundIntoDoublePlay: FormControl<number | null | undefined>,

		/** Type: double */
		GroundOuts: FormControl<number | null | undefined>,

		/** Type: double */
		HitByPitch: FormControl<number | null | undefined>,

		/** Type: double */
		Hits: FormControl<number | null | undefined>,

		/** Type: double */
		HomeRuns: FormControl<number | null | undefined>,

		/** Type: double */
		InningsPitchedDecimal: FormControl<number | null | undefined>,

		/** Type: double */
		InningsPitchedFull: FormControl<number | null | undefined>,

		/** Type: double */
		InningsPitchedOuts: FormControl<number | null | undefined>,

		/** Type: double */
		IntentionalWalks: FormControl<number | null | undefined>,

		/** Type: double */
		IsolatedPower: FormControl<number | null | undefined>,

		/** Type: double */
		LeftOnBase: FormControl<number | null | undefined>,

		/** Type: double */
		LineOuts: FormControl<number | null | undefined>,

		/** Type: double */
		Losses: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: double */
		OnBasePercentage: FormControl<number | null | undefined>,

		/** Type: double */
		OnBasePlusSlugging: FormControl<number | null | undefined>,

		/** Type: double */
		Outs: FormControl<number | null | undefined>,

		/** Type: double */
		PitchesSeen: FormControl<number | null | undefined>,

		/** Type: double */
		PitchesThrown: FormControl<number | null | undefined>,

		/** Type: double */
		PitchesThrownStrikes: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingBallsInPlay: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingBattingAverageAgainst: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingBattingAverageOnBallsInPlay: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingBlownSaves: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingCatchersInterference: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingCompleteGames: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingDoublePlays: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingDoubles: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingEarnedRuns: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingFlyOuts: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingGrandSlams: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingGroundIntoDoublePlay: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingGroundOuts: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingHitByPitch: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingHits: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingHolds: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingHomeRuns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PitchingInningStarted: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingIntentionalWalks: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingLineOuts: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingNoHitters: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingOnBasePercentage: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingOnBasePlusSlugging: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingPerfectGames: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingPlateAppearances: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingPopOuts: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingQualityStarts: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingReachedOnError: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingRuns: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingSacrificeFlies: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingSacrifices: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingShutOuts: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingSingles: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingSluggingPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingStrikeouts: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingStrikeoutsPerNineInnings: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingTotalBases: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingTriples: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingWalks: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingWalksPerNineInnings: FormControl<number | null | undefined>,

		/** Type: double */
		PitchingWeightedOnBasePercentage: FormControl<number | null | undefined>,

		/** Type: double */
		PlateAppearances: FormControl<number | null | undefined>,

		/** Type: double */
		PopOuts: FormControl<number | null | undefined>,

		/** Type: double */
		ReachedOnError: FormControl<number | null | undefined>,

		/** Type: double */
		Runs: FormControl<number | null | undefined>,

		/** Type: double */
		RunsBattedIn: FormControl<number | null | undefined>,

		/** Type: double */
		SacrificeFlies: FormControl<number | null | undefined>,

		/** Type: double */
		Sacrifices: FormControl<number | null | undefined>,

		/** Type: double */
		Saves: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType: FormControl<number | null | undefined>,

		/** Type: double */
		Singles: FormControl<number | null | undefined>,

		/** Type: double */
		SluggingPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StatID: FormControl<number | null | undefined>,

		/** Type: double */
		StolenBases: FormControl<number | null | undefined>,

		/** Type: double */
		Strikeouts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SubstituteBattingOrder: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SubstituteBattingOrderSequence: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID: FormControl<number | null | undefined>,

		/** Type: double */
		TotalBases: FormControl<number | null | undefined>,

		/** Type: double */
		TotalOutsPitched: FormControl<number | null | undefined>,

		/** Type: double */
		Triples: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,

		/** Type: double */
		Walks: FormControl<number | null | undefined>,

		/** Type: double */
		WalksHitsPerInningsPitched: FormControl<number | null | undefined>,

		/** Type: double */
		WeightedOnBasePercentage: FormControl<number | null | undefined>,

		/** Type: double */
		Wins: FormControl<number | null | undefined>,
	}
	export function CreateTeamSeasonFormGroup() {
		return new FormGroup<TeamSeasonFormProperties>({
			AtBats: new FormControl<number | null | undefined>(undefined),
			BallsInPlay: new FormControl<number | null | undefined>(undefined),
			BattingAverage: new FormControl<number | null | undefined>(undefined),
			BattingAverageOnBallsInPlay: new FormControl<number | null | undefined>(undefined),
			BattingOrderConfirmed: new FormControl<boolean | null | undefined>(undefined),
			CaughtStealing: new FormControl<number | null | undefined>(undefined),
			DoublePlays: new FormControl<number | null | undefined>(undefined),
			Doubles: new FormControl<number | null | undefined>(undefined),
			EarnedRunAverage: new FormControl<number | null | undefined>(undefined),
			Errors: new FormControl<number | null | undefined>(undefined),
			FantasyPoints: new FormControl<number | null | undefined>(undefined),
			FantasyPointsDraftKings: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFanDuel: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFantasyDraft: new FormControl<number | null | undefined>(undefined),
			FantasyPointsYahoo: new FormControl<number | null | undefined>(undefined),
			FieldingIndependentPitching: new FormControl<number | null | undefined>(undefined),
			FlyOuts: new FormControl<number | null | undefined>(undefined),
			Games: new FormControl<number | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			GrandSlams: new FormControl<number | null | undefined>(undefined),
			GroundIntoDoublePlay: new FormControl<number | null | undefined>(undefined),
			GroundOuts: new FormControl<number | null | undefined>(undefined),
			HitByPitch: new FormControl<number | null | undefined>(undefined),
			Hits: new FormControl<number | null | undefined>(undefined),
			HomeRuns: new FormControl<number | null | undefined>(undefined),
			InningsPitchedDecimal: new FormControl<number | null | undefined>(undefined),
			InningsPitchedFull: new FormControl<number | null | undefined>(undefined),
			InningsPitchedOuts: new FormControl<number | null | undefined>(undefined),
			IntentionalWalks: new FormControl<number | null | undefined>(undefined),
			IsolatedPower: new FormControl<number | null | undefined>(undefined),
			LeftOnBase: new FormControl<number | null | undefined>(undefined),
			LineOuts: new FormControl<number | null | undefined>(undefined),
			Losses: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			OnBasePercentage: new FormControl<number | null | undefined>(undefined),
			OnBasePlusSlugging: new FormControl<number | null | undefined>(undefined),
			Outs: new FormControl<number | null | undefined>(undefined),
			PitchesSeen: new FormControl<number | null | undefined>(undefined),
			PitchesThrown: new FormControl<number | null | undefined>(undefined),
			PitchesThrownStrikes: new FormControl<number | null | undefined>(undefined),
			PitchingBallsInPlay: new FormControl<number | null | undefined>(undefined),
			PitchingBattingAverageAgainst: new FormControl<number | null | undefined>(undefined),
			PitchingBattingAverageOnBallsInPlay: new FormControl<number | null | undefined>(undefined),
			PitchingBlownSaves: new FormControl<number | null | undefined>(undefined),
			PitchingCatchersInterference: new FormControl<number | null | undefined>(undefined),
			PitchingCompleteGames: new FormControl<number | null | undefined>(undefined),
			PitchingDoublePlays: new FormControl<number | null | undefined>(undefined),
			PitchingDoubles: new FormControl<number | null | undefined>(undefined),
			PitchingEarnedRuns: new FormControl<number | null | undefined>(undefined),
			PitchingFlyOuts: new FormControl<number | null | undefined>(undefined),
			PitchingGrandSlams: new FormControl<number | null | undefined>(undefined),
			PitchingGroundIntoDoublePlay: new FormControl<number | null | undefined>(undefined),
			PitchingGroundOuts: new FormControl<number | null | undefined>(undefined),
			PitchingHitByPitch: new FormControl<number | null | undefined>(undefined),
			PitchingHits: new FormControl<number | null | undefined>(undefined),
			PitchingHolds: new FormControl<number | null | undefined>(undefined),
			PitchingHomeRuns: new FormControl<number | null | undefined>(undefined),
			PitchingInningStarted: new FormControl<number | null | undefined>(undefined),
			PitchingIntentionalWalks: new FormControl<number | null | undefined>(undefined),
			PitchingLineOuts: new FormControl<number | null | undefined>(undefined),
			PitchingNoHitters: new FormControl<number | null | undefined>(undefined),
			PitchingOnBasePercentage: new FormControl<number | null | undefined>(undefined),
			PitchingOnBasePlusSlugging: new FormControl<number | null | undefined>(undefined),
			PitchingPerfectGames: new FormControl<number | null | undefined>(undefined),
			PitchingPlateAppearances: new FormControl<number | null | undefined>(undefined),
			PitchingPopOuts: new FormControl<number | null | undefined>(undefined),
			PitchingQualityStarts: new FormControl<number | null | undefined>(undefined),
			PitchingReachedOnError: new FormControl<number | null | undefined>(undefined),
			PitchingRuns: new FormControl<number | null | undefined>(undefined),
			PitchingSacrificeFlies: new FormControl<number | null | undefined>(undefined),
			PitchingSacrifices: new FormControl<number | null | undefined>(undefined),
			PitchingShutOuts: new FormControl<number | null | undefined>(undefined),
			PitchingSingles: new FormControl<number | null | undefined>(undefined),
			PitchingSluggingPercentage: new FormControl<number | null | undefined>(undefined),
			PitchingStrikeouts: new FormControl<number | null | undefined>(undefined),
			PitchingStrikeoutsPerNineInnings: new FormControl<number | null | undefined>(undefined),
			PitchingTotalBases: new FormControl<number | null | undefined>(undefined),
			PitchingTriples: new FormControl<number | null | undefined>(undefined),
			PitchingWalks: new FormControl<number | null | undefined>(undefined),
			PitchingWalksPerNineInnings: new FormControl<number | null | undefined>(undefined),
			PitchingWeightedOnBasePercentage: new FormControl<number | null | undefined>(undefined),
			PlateAppearances: new FormControl<number | null | undefined>(undefined),
			PopOuts: new FormControl<number | null | undefined>(undefined),
			ReachedOnError: new FormControl<number | null | undefined>(undefined),
			Runs: new FormControl<number | null | undefined>(undefined),
			RunsBattedIn: new FormControl<number | null | undefined>(undefined),
			SacrificeFlies: new FormControl<number | null | undefined>(undefined),
			Sacrifices: new FormControl<number | null | undefined>(undefined),
			Saves: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			Singles: new FormControl<number | null | undefined>(undefined),
			SluggingPercentage: new FormControl<number | null | undefined>(undefined),
			StatID: new FormControl<number | null | undefined>(undefined),
			StolenBases: new FormControl<number | null | undefined>(undefined),
			Strikeouts: new FormControl<number | null | undefined>(undefined),
			SubstituteBattingOrder: new FormControl<number | null | undefined>(undefined),
			SubstituteBattingOrderSequence: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			TotalBases: new FormControl<number | null | undefined>(undefined),
			TotalOutsPitched: new FormControl<number | null | undefined>(undefined),
			Triples: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
			Walks: new FormControl<number | null | undefined>(undefined),
			WalksHitsPerInningsPitched: new FormControl<number | null | undefined>(undefined),
			WeightedOnBasePercentage: new FormControl<number | null | undefined>(undefined),
			Wins: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Teams (All)
		 * Get {format}/AllTeams
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 */
		TeamsAll(format: TeamsAllFormat): Observable<Array<Team>> {
			return this.http.get<Array<Team>>(this.baseUri + format + '/AllTeams', {});
		}

		/**
		 * Are Games In Progress
		 * Returns <code>true</code> if there is at least one game being played at the time of the request or <code>false</code> if there are none.
		 * Get {format}/AreAnyGamesInProgress
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 */
		AreGamesInProgress(format: TeamsAllFormat): Observable<boolean> {
			return this.http.get<boolean>(this.baseUri + format + '/AreAnyGamesInProgress', {});
		}

		/**
		 * Current Season
		 * Get {format}/CurrentSeason
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 */
		CurrentSeason(format: TeamsAllFormat): Observable<Season> {
			return this.http.get<Season>(this.baseUri + format + '/CurrentSeason', {});
		}

		/**
		 * Player Details by Free Agents
		 * Get {format}/FreeAgents
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 */
		PlayerDetailsByFreeAgents(format: TeamsAllFormat): Observable<Array<Player>> {
			return this.http.get<Array<Player>>(this.baseUri + format + '/FreeAgents', {});
		}

		/**
		 * Schedules
		 * Get {format}/Games/{season}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.
		 */
		Schedules(format: TeamsAllFormat, season: string): Observable<Array<Game>> {
			return this.http.get<Array<Game>>(this.baseUri + format + '/Games/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * Games by Date
		 * Get {format}/GamesByDate/{date}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s).
		 * <br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.
		 */
		GamesByDate(format: TeamsAllFormat, date: string): Observable<Array<Game>> {
			return this.http.get<Array<Game>>(this.baseUri + format + '/GamesByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * News
		 * Get {format}/News
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 */
		News(format: TeamsAllFormat): Observable<Array<News>> {
			return this.http.get<Array<News>>(this.baseUri + format + '/News', {});
		}

		/**
		 * News by Date
		 * Get {format}/NewsByDate/{date}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the news.
		 * <br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.
		 */
		NewsByDate(format: TeamsAllFormat, date: string): Observable<Array<News>> {
			return this.http.get<Array<News>>(this.baseUri + format + '/NewsByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * News by Player
		 * Get {format}/NewsByPlayerID/{playerid}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} playerid Unique FantasyData Player ID.
		 * Example:<code>10000507</code>.
		 */
		NewsByPlayer(format: TeamsAllFormat, playerid: string): Observable<Array<News>> {
			return this.http.get<Array<News>>(this.baseUri + format + '/NewsByPlayerID/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}

		/**
		 * Player Details by Player
		 * Get {format}/Player/{playerid}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} playerid Unique FantasyData Player ID.
		 * Example:<code>10000507</code>.
		 */
		PlayerDetailsByPlayer(format: TeamsAllFormat, playerid: string): Observable<Player> {
			return this.http.get<Player>(this.baseUri + format + '/Player/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}

		/**
		 * Player Details by Active
		 * Get {format}/Players
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 */
		PlayerDetailsByActive(format: TeamsAllFormat): Observable<Array<Player>> {
			return this.http.get<Array<Player>>(this.baseUri + format + '/Players', {});
		}

		/**
		 * Players by Team
		 * Get {format}/Players/{team}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} team The abbreviation of the requested team.
		 * <br>Examples: <code>SF</code>, <code>NYY</code>.
		 */
		PlayersByTeam(format: TeamsAllFormat, team: string): Observable<Array<Player>> {
			return this.http.get<Array<Player>>(this.baseUri + format + '/Players/' + (team == null ? '' : encodeURIComponent(team)) + '', {});
		}

		/**
		 * Stadiums
		 * Get {format}/Stadiums
		 * @param {StadiumsFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 */
		Stadiums(format: StadiumsFormat): Observable<Array<Stadium>> {
			return this.http.get<Array<Stadium>>(this.baseUri + format + '/Stadiums', {});
		}

		/**
		 * Standings
		 * Get {format}/Standings/{season}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season.
		 * <br>Examples: <code>2017</code>, <code>2018</code>.
		 */
		Standings(format: TeamsAllFormat, season: string): Observable<Array<Standing>> {
			return this.http.get<Array<Standing>>(this.baseUri + format + '/Standings/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * Team Game Stats by Date
		 * Get {format}/TeamGameStatsByDate/{date}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s).
		 * <br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.
		 */
		TeamGameStatsByDate(format: TeamsAllFormat, date: string): Observable<Array<TeamGame>> {
			return this.http.get<Array<TeamGame>>(this.baseUri + format + '/TeamGameStatsByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * Team Season Stats
		 * Get {format}/TeamSeasonStats/{season}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season.
		 * <br>Examples: <code>2017</code>, <code>2018</code>.
		 */
		TeamSeasonStats(format: TeamsAllFormat, season: string): Observable<Array<TeamSeason>> {
			return this.http.get<Array<TeamSeason>>(this.baseUri + format + '/TeamSeasonStats/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * Teams (Active)
		 * Get {format}/teams
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 */
		TeamsActive(format: TeamsAllFormat): Observable<Array<Team>> {
			return this.http.get<Array<Team>>(this.baseUri + format + '/teams', {});
		}
	}

	export enum TeamsAllFormat { XML = 'XML', JSON = 'JSON' }

	export enum StadiumsFormat { xml = 'xml', json = 'json' }

}

