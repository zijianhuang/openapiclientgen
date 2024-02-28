import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface DfsSlate {
		DfsSlateGames?: Array<DfsSlateGame>;
		DfsSlatePlayers?: Array<DfsSlatePlayer>;
		IsMultiDaySlate?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		NumberOfGames?: number | null;
		Operator?: string | null;
		OperatorDay?: string | null;
		OperatorGameType?: string | null;
		OperatorName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OperatorSlateID?: number | null;
		OperatorStartTime?: string | null;
		RemovedByOperator?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SalaryCap?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SlateID?: number | null;
		SlateRosterSlots?: Array<string>;
	}
	export interface DfsSlateFormProperties {
		IsMultiDaySlate: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		NumberOfGames: FormControl<number | null | undefined>,
		Operator: FormControl<string | null | undefined>,
		OperatorDay: FormControl<string | null | undefined>,
		OperatorGameType: FormControl<string | null | undefined>,
		OperatorName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OperatorSlateID: FormControl<number | null | undefined>,
		OperatorStartTime: FormControl<string | null | undefined>,
		RemovedByOperator: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SalaryCap: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SlateID: FormControl<number | null | undefined>,
	}
	export function CreateDfsSlateFormGroup() {
		return new FormGroup<DfsSlateFormProperties>({
			IsMultiDaySlate: new FormControl<boolean | null | undefined>(undefined),
			NumberOfGames: new FormControl<number | null | undefined>(undefined),
			Operator: new FormControl<string | null | undefined>(undefined),
			OperatorDay: new FormControl<string | null | undefined>(undefined),
			OperatorGameType: new FormControl<string | null | undefined>(undefined),
			OperatorName: new FormControl<string | null | undefined>(undefined),
			OperatorSlateID: new FormControl<number | null | undefined>(undefined),
			OperatorStartTime: new FormControl<string | null | undefined>(undefined),
			RemovedByOperator: new FormControl<boolean | null | undefined>(undefined),
			SalaryCap: new FormControl<number | null | undefined>(undefined),
			SlateID: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DfsSlateGame {
		Game?: Game;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GameID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OperatorGameID?: number | null;
		RemovedByOperator?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SlateGameID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SlateID?: number | null;
	}
	export interface DfsSlateGameFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GameID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OperatorGameID: FormControl<number | null | undefined>,
		RemovedByOperator: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SlateGameID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SlateID: FormControl<number | null | undefined>,
	}
	export function CreateDfsSlateGameFormGroup() {
		return new FormGroup<DfsSlateGameFormProperties>({
			GameID: new FormControl<number | null | undefined>(undefined),
			OperatorGameID: new FormControl<number | null | undefined>(undefined),
			RemovedByOperator: new FormControl<boolean | null | undefined>(undefined),
			SlateGameID: new FormControl<number | null | undefined>(undefined),
			SlateID: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DfsSlatePlayer {
		OperatorPlayerID?: string | null;
		OperatorPlayerName?: string | null;
		OperatorPosition?: string | null;
		OperatorRosterSlots?: Array<string>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OperatorSalary?: number | null;
		OperatorSlatePlayerID?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerGameProjectionStatID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID?: number | null;
		RemovedByOperator?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SlateGameID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SlateID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SlatePlayerID?: number | null;
	}
	export interface DfsSlatePlayerFormProperties {
		OperatorPlayerID: FormControl<string | null | undefined>,
		OperatorPlayerName: FormControl<string | null | undefined>,
		OperatorPosition: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OperatorSalary: FormControl<number | null | undefined>,
		OperatorSlatePlayerID: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerGameProjectionStatID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID: FormControl<number | null | undefined>,
		RemovedByOperator: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SlateGameID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SlateID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SlatePlayerID: FormControl<number | null | undefined>,
	}
	export function CreateDfsSlatePlayerFormGroup() {
		return new FormGroup<DfsSlatePlayerFormProperties>({
			OperatorPlayerID: new FormControl<string | null | undefined>(undefined),
			OperatorPlayerName: new FormControl<string | null | undefined>(undefined),
			OperatorPosition: new FormControl<string | null | undefined>(undefined),
			OperatorSalary: new FormControl<number | null | undefined>(undefined),
			OperatorSlatePlayerID: new FormControl<string | null | undefined>(undefined),
			PlayerGameProjectionStatID: new FormControl<number | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			RemovedByOperator: new FormControl<boolean | null | undefined>(undefined),
			SlateGameID: new FormControl<number | null | undefined>(undefined),
			SlateID: new FormControl<number | null | undefined>(undefined),
			SlatePlayerID: new FormControl<number | null | undefined>(undefined),
		});

	}

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

	export interface PlayerGameProjection {

		/** Type: double */
		AtBats?: number | null;

		/** Type: double */
		BallsInPlay?: number | null;

		/** Type: double */
		BattingAverage?: number | null;

		/** Type: double */
		BattingAverageOnBallsInPlay?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		BattingOrder?: number | null;
		BattingOrderConfirmed?: boolean | null;

		/** Type: double */
		CaughtStealing?: number | null;
		DateTime?: string | null;
		Day?: string | null;

		/** Type: double */
		DoublePlays?: number | null;

		/** Type: double */
		Doubles?: number | null;
		DraftKingsPosition?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DraftKingsSalary?: number | null;

		/** Type: double */
		EarnedRunAverage?: number | null;

		/** Type: double */
		Errors?: number | null;
		FanDuelPosition?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FanDuelSalary?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FantasyDataSalary?: number | null;
		FantasyDraftPosition?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FantasyDraftSalary?: number | null;

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
		InjuryBodyPart?: string | null;
		InjuryNotes?: string | null;
		InjuryStartDate?: string | null;
		InjuryStatus?: string | null;

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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPositionRank?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentRank?: number | null;

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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID?: number | null;

		/** Type: double */
		PopOuts?: number | null;
		Position?: string | null;
		PositionCategory?: string | null;

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
		Started?: number | null;

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
		YahooPosition?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		YahooSalary?: number | null;
	}
	export interface PlayerGameProjectionFormProperties {

		/** Type: double */
		AtBats: FormControl<number | null | undefined>,

		/** Type: double */
		BallsInPlay: FormControl<number | null | undefined>,

		/** Type: double */
		BattingAverage: FormControl<number | null | undefined>,

		/** Type: double */
		BattingAverageOnBallsInPlay: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		BattingOrder: FormControl<number | null | undefined>,
		BattingOrderConfirmed: FormControl<boolean | null | undefined>,

		/** Type: double */
		CaughtStealing: FormControl<number | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,

		/** Type: double */
		DoublePlays: FormControl<number | null | undefined>,

		/** Type: double */
		Doubles: FormControl<number | null | undefined>,
		DraftKingsPosition: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DraftKingsSalary: FormControl<number | null | undefined>,

		/** Type: double */
		EarnedRunAverage: FormControl<number | null | undefined>,

		/** Type: double */
		Errors: FormControl<number | null | undefined>,
		FanDuelPosition: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FanDuelSalary: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FantasyDataSalary: FormControl<number | null | undefined>,
		FantasyDraftPosition: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FantasyDraftSalary: FormControl<number | null | undefined>,

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
		InjuryBodyPart: FormControl<string | null | undefined>,
		InjuryNotes: FormControl<string | null | undefined>,
		InjuryStartDate: FormControl<string | null | undefined>,
		InjuryStatus: FormControl<string | null | undefined>,

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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPositionRank: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentRank: FormControl<number | null | undefined>,

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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID: FormControl<number | null | undefined>,

		/** Type: double */
		PopOuts: FormControl<number | null | undefined>,
		Position: FormControl<string | null | undefined>,
		PositionCategory: FormControl<string | null | undefined>,

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
		Started: FormControl<number | null | undefined>,

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
		YahooPosition: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		YahooSalary: FormControl<number | null | undefined>,
	}
	export function CreatePlayerGameProjectionFormGroup() {
		return new FormGroup<PlayerGameProjectionFormProperties>({
			AtBats: new FormControl<number | null | undefined>(undefined),
			BallsInPlay: new FormControl<number | null | undefined>(undefined),
			BattingAverage: new FormControl<number | null | undefined>(undefined),
			BattingAverageOnBallsInPlay: new FormControl<number | null | undefined>(undefined),
			BattingOrder: new FormControl<number | null | undefined>(undefined),
			BattingOrderConfirmed: new FormControl<boolean | null | undefined>(undefined),
			CaughtStealing: new FormControl<number | null | undefined>(undefined),
			DateTime: new FormControl<string | null | undefined>(undefined),
			Day: new FormControl<string | null | undefined>(undefined),
			DoublePlays: new FormControl<number | null | undefined>(undefined),
			Doubles: new FormControl<number | null | undefined>(undefined),
			DraftKingsPosition: new FormControl<string | null | undefined>(undefined),
			DraftKingsSalary: new FormControl<number | null | undefined>(undefined),
			EarnedRunAverage: new FormControl<number | null | undefined>(undefined),
			Errors: new FormControl<number | null | undefined>(undefined),
			FanDuelPosition: new FormControl<string | null | undefined>(undefined),
			FanDuelSalary: new FormControl<number | null | undefined>(undefined),
			FantasyDataSalary: new FormControl<number | null | undefined>(undefined),
			FantasyDraftPosition: new FormControl<string | null | undefined>(undefined),
			FantasyDraftSalary: new FormControl<number | null | undefined>(undefined),
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
			InjuryBodyPart: new FormControl<string | null | undefined>(undefined),
			InjuryNotes: new FormControl<string | null | undefined>(undefined),
			InjuryStartDate: new FormControl<string | null | undefined>(undefined),
			InjuryStatus: new FormControl<string | null | undefined>(undefined),
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
			OpponentPositionRank: new FormControl<number | null | undefined>(undefined),
			OpponentRank: new FormControl<number | null | undefined>(undefined),
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
			PlayerID: new FormControl<number | null | undefined>(undefined),
			PopOuts: new FormControl<number | null | undefined>(undefined),
			Position: new FormControl<string | null | undefined>(undefined),
			PositionCategory: new FormControl<string | null | undefined>(undefined),
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
			Started: new FormControl<number | null | undefined>(undefined),
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
			YahooPosition: new FormControl<string | null | undefined>(undefined),
			YahooSalary: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PlayerSeasonProjection {

		/** Type: double */
		AtBats?: number | null;

		/** Type: double */
		AverageDraftPosition?: number | null;

		/** Type: double */
		BallsInPlay?: number | null;

		/** Type: double */
		BattingAverage?: number | null;

		/** Type: double */
		BattingAverageOnBallsInPlay?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		BattingOrder?: number | null;
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID?: number | null;

		/** Type: double */
		PopOuts?: number | null;
		Position?: string | null;
		PositionCategory?: string | null;

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
		Started?: number | null;

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
	export interface PlayerSeasonProjectionFormProperties {

		/** Type: double */
		AtBats: FormControl<number | null | undefined>,

		/** Type: double */
		AverageDraftPosition: FormControl<number | null | undefined>,

		/** Type: double */
		BallsInPlay: FormControl<number | null | undefined>,

		/** Type: double */
		BattingAverage: FormControl<number | null | undefined>,

		/** Type: double */
		BattingAverageOnBallsInPlay: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		BattingOrder: FormControl<number | null | undefined>,
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID: FormControl<number | null | undefined>,

		/** Type: double */
		PopOuts: FormControl<number | null | undefined>,
		Position: FormControl<string | null | undefined>,
		PositionCategory: FormControl<string | null | undefined>,

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
		Started: FormControl<number | null | undefined>,

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
	export function CreatePlayerSeasonProjectionFormGroup() {
		return new FormGroup<PlayerSeasonProjectionFormProperties>({
			AtBats: new FormControl<number | null | undefined>(undefined),
			AverageDraftPosition: new FormControl<number | null | undefined>(undefined),
			BallsInPlay: new FormControl<number | null | undefined>(undefined),
			BattingAverage: new FormControl<number | null | undefined>(undefined),
			BattingAverageOnBallsInPlay: new FormControl<number | null | undefined>(undefined),
			BattingOrder: new FormControl<number | null | undefined>(undefined),
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
			PlayerID: new FormControl<number | null | undefined>(undefined),
			PopOuts: new FormControl<number | null | undefined>(undefined),
			Position: new FormControl<string | null | undefined>(undefined),
			PositionCategory: new FormControl<string | null | undefined>(undefined),
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
			Started: new FormControl<number | null | undefined>(undefined),
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
		 * DFS Slates by Date
		 * Get {format}/DfsSlatesByDate/{date}
		 * @param {DfsSlatesByDateFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the slates.
		 * <br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.
		 */
		DfsSlatesByDate(format: DfsSlatesByDateFormat, date: string): Observable<Array<DfsSlate>> {
			return this.http.get<Array<DfsSlate>>(this.baseUri + format + '/DfsSlatesByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * Projected Player Game Stats by Date (w/ Injuries, Lineups, DFS Salaries)
		 * Get {format}/PlayerGameProjectionStatsByDate/{date}
		 * @param {DfsSlatesByDateFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s).
		 * <br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.
		 */
		ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalaries(format: DfsSlatesByDateFormat, date: string): Observable<Array<PlayerGameProjection>> {
			return this.http.get<Array<PlayerGameProjection>>(this.baseUri + format + '/PlayerGameProjectionStatsByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)
		 * Get {format}/PlayerGameProjectionStatsByPlayer/{date}/{playerid}
		 * @param {DfsSlatesByDateFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s).
		 * <br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.
		 * @param {string} playerid Unique FantasyData Player ID.
		 * Example:<code>10000507</code>.
		 */
		ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries(format: DfsSlatesByDateFormat, date: string, playerid: string): Observable<Array<PlayerGameProjection>> {
			return this.http.get<Array<PlayerGameProjection>>(this.baseUri + format + '/PlayerGameProjectionStatsByPlayer/' + (date == null ? '' : encodeURIComponent(date)) + '/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}

		/**
		 * Projected Player Season Stats (with ADP)
		 * Get {format}/PlayerSeasonProjectionStats/{season}
		 * @param {DfsSlatesByDateFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season.
		 * <br>Examples: <code>2017</code>, <code>2018</code>.
		 */
		ProjectedPlayerSeasonStatsWithAdp(format: DfsSlatesByDateFormat, season: string): Observable<Array<PlayerSeasonProjection>> {
			return this.http.get<Array<PlayerSeasonProjection>>(this.baseUri + format + '/PlayerSeasonProjectionStats/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}
	}

	export enum DfsSlatesByDateFormat { XML = 'XML', JSON = 'JSON' }

}

