import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface DfsSlate {
		DfsSlateGames?: Array<DfsSlateGame>;
		DfsSlatePlayers?: Array<DfsSlatePlayer>;
		IsMultiDaySlate?: boolean | null;
		NumberOfGames?: number | null;
		Operator?: string | null;
		OperatorDay?: string | null;
		OperatorGameType?: string | null;
		OperatorName?: string | null;
		OperatorSlateID?: number | null;
		OperatorStartTime?: string | null;
		RemovedByOperator?: boolean | null;
		SalaryCap?: number | null;
		SlateID?: number | null;
		SlateRosterSlots?: Array<string>;
	}
	export interface DfsSlateFormProperties {
		IsMultiDaySlate: FormControl<boolean | null | undefined>,
		NumberOfGames: FormControl<number | null | undefined>,
		Operator: FormControl<string | null | undefined>,
		OperatorDay: FormControl<string | null | undefined>,
		OperatorGameType: FormControl<string | null | undefined>,
		OperatorName: FormControl<string | null | undefined>,
		OperatorSlateID: FormControl<number | null | undefined>,
		OperatorStartTime: FormControl<string | null | undefined>,
		RemovedByOperator: FormControl<boolean | null | undefined>,
		SalaryCap: FormControl<number | null | undefined>,
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
		GameID?: number | null;
		OperatorGameID?: number | null;
		RemovedByOperator?: boolean | null;
		SlateGameID?: number | null;
		SlateID?: number | null;
	}
	export interface DfsSlateGameFormProperties {
		GameID: FormControl<number | null | undefined>,
		OperatorGameID: FormControl<number | null | undefined>,
		RemovedByOperator: FormControl<boolean | null | undefined>,
		SlateGameID: FormControl<number | null | undefined>,
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
		OperatorSalary?: number | null;
		OperatorSlatePlayerID?: string | null;
		PlayerGameProjectionStatID?: number | null;
		PlayerID?: number | null;
		RemovedByOperator?: boolean | null;
		SlateGameID?: number | null;
		SlateID?: number | null;
		SlatePlayerID?: number | null;
	}
	export interface DfsSlatePlayerFormProperties {
		OperatorPlayerID: FormControl<string | null | undefined>,
		OperatorPlayerName: FormControl<string | null | undefined>,
		OperatorPosition: FormControl<string | null | undefined>,
		OperatorSalary: FormControl<number | null | undefined>,
		OperatorSlatePlayerID: FormControl<string | null | undefined>,
		PlayerGameProjectionStatID: FormControl<number | null | undefined>,
		PlayerID: FormControl<number | null | undefined>,
		RemovedByOperator: FormControl<boolean | null | undefined>,
		SlateGameID: FormControl<number | null | undefined>,
		SlateID: FormControl<number | null | undefined>,
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

	export interface PlayerGameProjection {
		AtBats?: number | null;
		BallsInPlay?: number | null;
		BattingAverage?: number | null;
		BattingAverageOnBallsInPlay?: number | null;
		BattingOrder?: number | null;
		BattingOrderConfirmed?: boolean | null;
		CaughtStealing?: number | null;
		DateTime?: string | null;
		Day?: string | null;
		DoublePlays?: number | null;
		Doubles?: number | null;
		DraftKingsPosition?: string | null;
		DraftKingsSalary?: number | null;
		EarnedRunAverage?: number | null;
		Errors?: number | null;
		FanDuelPosition?: string | null;
		FanDuelSalary?: number | null;
		FantasyDataSalary?: number | null;
		FantasyDraftPosition?: string | null;
		FantasyDraftSalary?: number | null;
		FantasyPoints?: number | null;
		FantasyPointsDraftKings?: number | null;
		FantasyPointsFanDuel?: number | null;
		FantasyPointsFantasyDraft?: number | null;
		FantasyPointsYahoo?: number | null;
		FieldingIndependentPitching?: number | null;
		FlyOuts?: number | null;
		GameID?: number | null;
		Games?: number | null;
		GlobalGameID?: number | null;
		GlobalOpponentID?: number | null;
		GlobalTeamID?: number | null;
		GrandSlams?: number | null;
		GroundIntoDoublePlay?: number | null;
		GroundOuts?: number | null;
		HitByPitch?: number | null;
		Hits?: number | null;
		HomeOrAway?: string | null;
		HomeRuns?: number | null;
		InjuryBodyPart?: string | null;
		InjuryNotes?: string | null;
		InjuryStartDate?: string | null;
		InjuryStatus?: string | null;
		InningsPitchedDecimal?: number | null;
		InningsPitchedFull?: number | null;
		InningsPitchedOuts?: number | null;
		IntentionalWalks?: number | null;
		IsGameOver?: boolean | null;
		IsolatedPower?: number | null;
		LeftOnBase?: number | null;
		LineOuts?: number | null;
		Losses?: number | null;
		Name?: string | null;
		OnBasePercentage?: number | null;
		OnBasePlusSlugging?: number | null;
		Opponent?: string | null;
		OpponentID?: number | null;
		OpponentPositionRank?: number | null;
		OpponentRank?: number | null;
		Outs?: number | null;
		PitchesSeen?: number | null;
		PitchesThrown?: number | null;
		PitchesThrownStrikes?: number | null;
		PitchingBallsInPlay?: number | null;
		PitchingBattingAverageAgainst?: number | null;
		PitchingBattingAverageOnBallsInPlay?: number | null;
		PitchingBlownSaves?: number | null;
		PitchingCatchersInterference?: number | null;
		PitchingCompleteGames?: number | null;
		PitchingDoublePlays?: number | null;
		PitchingDoubles?: number | null;
		PitchingEarnedRuns?: number | null;
		PitchingFlyOuts?: number | null;
		PitchingGrandSlams?: number | null;
		PitchingGroundIntoDoublePlay?: number | null;
		PitchingGroundOuts?: number | null;
		PitchingHitByPitch?: number | null;
		PitchingHits?: number | null;
		PitchingHolds?: number | null;
		PitchingHomeRuns?: number | null;
		PitchingInningStarted?: number | null;
		PitchingIntentionalWalks?: number | null;
		PitchingLineOuts?: number | null;
		PitchingNoHitters?: number | null;
		PitchingOnBasePercentage?: number | null;
		PitchingOnBasePlusSlugging?: number | null;
		PitchingPerfectGames?: number | null;
		PitchingPlateAppearances?: number | null;
		PitchingPopOuts?: number | null;
		PitchingQualityStarts?: number | null;
		PitchingReachedOnError?: number | null;
		PitchingRuns?: number | null;
		PitchingSacrificeFlies?: number | null;
		PitchingSacrifices?: number | null;
		PitchingShutOuts?: number | null;
		PitchingSingles?: number | null;
		PitchingSluggingPercentage?: number | null;
		PitchingStrikeouts?: number | null;
		PitchingStrikeoutsPerNineInnings?: number | null;
		PitchingTotalBases?: number | null;
		PitchingTriples?: number | null;
		PitchingWalks?: number | null;
		PitchingWalksPerNineInnings?: number | null;
		PitchingWeightedOnBasePercentage?: number | null;
		PlateAppearances?: number | null;
		PlayerID?: number | null;
		PopOuts?: number | null;
		Position?: string | null;
		PositionCategory?: string | null;
		ReachedOnError?: number | null;
		Runs?: number | null;
		RunsBattedIn?: number | null;
		SacrificeFlies?: number | null;
		Sacrifices?: number | null;
		Saves?: number | null;
		Season?: number | null;
		SeasonType?: number | null;
		Singles?: number | null;
		SluggingPercentage?: number | null;
		Started?: number | null;
		StatID?: number | null;
		StolenBases?: number | null;
		Strikeouts?: number | null;
		SubstituteBattingOrder?: number | null;
		SubstituteBattingOrderSequence?: number | null;
		Team?: string | null;
		TeamID?: number | null;
		TotalBases?: number | null;
		TotalOutsPitched?: number | null;
		Triples?: number | null;
		Updated?: string | null;
		Walks?: number | null;
		WalksHitsPerInningsPitched?: number | null;
		WeightedOnBasePercentage?: number | null;
		Wins?: number | null;
		YahooPosition?: string | null;
		YahooSalary?: number | null;
	}
	export interface PlayerGameProjectionFormProperties {
		AtBats: FormControl<number | null | undefined>,
		BallsInPlay: FormControl<number | null | undefined>,
		BattingAverage: FormControl<number | null | undefined>,
		BattingAverageOnBallsInPlay: FormControl<number | null | undefined>,
		BattingOrder: FormControl<number | null | undefined>,
		BattingOrderConfirmed: FormControl<boolean | null | undefined>,
		CaughtStealing: FormControl<number | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,
		DoublePlays: FormControl<number | null | undefined>,
		Doubles: FormControl<number | null | undefined>,
		DraftKingsPosition: FormControl<string | null | undefined>,
		DraftKingsSalary: FormControl<number | null | undefined>,
		EarnedRunAverage: FormControl<number | null | undefined>,
		Errors: FormControl<number | null | undefined>,
		FanDuelPosition: FormControl<string | null | undefined>,
		FanDuelSalary: FormControl<number | null | undefined>,
		FantasyDataSalary: FormControl<number | null | undefined>,
		FantasyDraftPosition: FormControl<string | null | undefined>,
		FantasyDraftSalary: FormControl<number | null | undefined>,
		FantasyPoints: FormControl<number | null | undefined>,
		FantasyPointsDraftKings: FormControl<number | null | undefined>,
		FantasyPointsFanDuel: FormControl<number | null | undefined>,
		FantasyPointsFantasyDraft: FormControl<number | null | undefined>,
		FantasyPointsYahoo: FormControl<number | null | undefined>,
		FieldingIndependentPitching: FormControl<number | null | undefined>,
		FlyOuts: FormControl<number | null | undefined>,
		GameID: FormControl<number | null | undefined>,
		Games: FormControl<number | null | undefined>,
		GlobalGameID: FormControl<number | null | undefined>,
		GlobalOpponentID: FormControl<number | null | undefined>,
		GlobalTeamID: FormControl<number | null | undefined>,
		GrandSlams: FormControl<number | null | undefined>,
		GroundIntoDoublePlay: FormControl<number | null | undefined>,
		GroundOuts: FormControl<number | null | undefined>,
		HitByPitch: FormControl<number | null | undefined>,
		Hits: FormControl<number | null | undefined>,
		HomeOrAway: FormControl<string | null | undefined>,
		HomeRuns: FormControl<number | null | undefined>,
		InjuryBodyPart: FormControl<string | null | undefined>,
		InjuryNotes: FormControl<string | null | undefined>,
		InjuryStartDate: FormControl<string | null | undefined>,
		InjuryStatus: FormControl<string | null | undefined>,
		InningsPitchedDecimal: FormControl<number | null | undefined>,
		InningsPitchedFull: FormControl<number | null | undefined>,
		InningsPitchedOuts: FormControl<number | null | undefined>,
		IntentionalWalks: FormControl<number | null | undefined>,
		IsGameOver: FormControl<boolean | null | undefined>,
		IsolatedPower: FormControl<number | null | undefined>,
		LeftOnBase: FormControl<number | null | undefined>,
		LineOuts: FormControl<number | null | undefined>,
		Losses: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		OnBasePercentage: FormControl<number | null | undefined>,
		OnBasePlusSlugging: FormControl<number | null | undefined>,
		Opponent: FormControl<string | null | undefined>,
		OpponentID: FormControl<number | null | undefined>,
		OpponentPositionRank: FormControl<number | null | undefined>,
		OpponentRank: FormControl<number | null | undefined>,
		Outs: FormControl<number | null | undefined>,
		PitchesSeen: FormControl<number | null | undefined>,
		PitchesThrown: FormControl<number | null | undefined>,
		PitchesThrownStrikes: FormControl<number | null | undefined>,
		PitchingBallsInPlay: FormControl<number | null | undefined>,
		PitchingBattingAverageAgainst: FormControl<number | null | undefined>,
		PitchingBattingAverageOnBallsInPlay: FormControl<number | null | undefined>,
		PitchingBlownSaves: FormControl<number | null | undefined>,
		PitchingCatchersInterference: FormControl<number | null | undefined>,
		PitchingCompleteGames: FormControl<number | null | undefined>,
		PitchingDoublePlays: FormControl<number | null | undefined>,
		PitchingDoubles: FormControl<number | null | undefined>,
		PitchingEarnedRuns: FormControl<number | null | undefined>,
		PitchingFlyOuts: FormControl<number | null | undefined>,
		PitchingGrandSlams: FormControl<number | null | undefined>,
		PitchingGroundIntoDoublePlay: FormControl<number | null | undefined>,
		PitchingGroundOuts: FormControl<number | null | undefined>,
		PitchingHitByPitch: FormControl<number | null | undefined>,
		PitchingHits: FormControl<number | null | undefined>,
		PitchingHolds: FormControl<number | null | undefined>,
		PitchingHomeRuns: FormControl<number | null | undefined>,
		PitchingInningStarted: FormControl<number | null | undefined>,
		PitchingIntentionalWalks: FormControl<number | null | undefined>,
		PitchingLineOuts: FormControl<number | null | undefined>,
		PitchingNoHitters: FormControl<number | null | undefined>,
		PitchingOnBasePercentage: FormControl<number | null | undefined>,
		PitchingOnBasePlusSlugging: FormControl<number | null | undefined>,
		PitchingPerfectGames: FormControl<number | null | undefined>,
		PitchingPlateAppearances: FormControl<number | null | undefined>,
		PitchingPopOuts: FormControl<number | null | undefined>,
		PitchingQualityStarts: FormControl<number | null | undefined>,
		PitchingReachedOnError: FormControl<number | null | undefined>,
		PitchingRuns: FormControl<number | null | undefined>,
		PitchingSacrificeFlies: FormControl<number | null | undefined>,
		PitchingSacrifices: FormControl<number | null | undefined>,
		PitchingShutOuts: FormControl<number | null | undefined>,
		PitchingSingles: FormControl<number | null | undefined>,
		PitchingSluggingPercentage: FormControl<number | null | undefined>,
		PitchingStrikeouts: FormControl<number | null | undefined>,
		PitchingStrikeoutsPerNineInnings: FormControl<number | null | undefined>,
		PitchingTotalBases: FormControl<number | null | undefined>,
		PitchingTriples: FormControl<number | null | undefined>,
		PitchingWalks: FormControl<number | null | undefined>,
		PitchingWalksPerNineInnings: FormControl<number | null | undefined>,
		PitchingWeightedOnBasePercentage: FormControl<number | null | undefined>,
		PlateAppearances: FormControl<number | null | undefined>,
		PlayerID: FormControl<number | null | undefined>,
		PopOuts: FormControl<number | null | undefined>,
		Position: FormControl<string | null | undefined>,
		PositionCategory: FormControl<string | null | undefined>,
		ReachedOnError: FormControl<number | null | undefined>,
		Runs: FormControl<number | null | undefined>,
		RunsBattedIn: FormControl<number | null | undefined>,
		SacrificeFlies: FormControl<number | null | undefined>,
		Sacrifices: FormControl<number | null | undefined>,
		Saves: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		Singles: FormControl<number | null | undefined>,
		SluggingPercentage: FormControl<number | null | undefined>,
		Started: FormControl<number | null | undefined>,
		StatID: FormControl<number | null | undefined>,
		StolenBases: FormControl<number | null | undefined>,
		Strikeouts: FormControl<number | null | undefined>,
		SubstituteBattingOrder: FormControl<number | null | undefined>,
		SubstituteBattingOrderSequence: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
		TotalBases: FormControl<number | null | undefined>,
		TotalOutsPitched: FormControl<number | null | undefined>,
		Triples: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
		Walks: FormControl<number | null | undefined>,
		WalksHitsPerInningsPitched: FormControl<number | null | undefined>,
		WeightedOnBasePercentage: FormControl<number | null | undefined>,
		Wins: FormControl<number | null | undefined>,
		YahooPosition: FormControl<string | null | undefined>,
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
		AtBats?: number | null;
		AverageDraftPosition?: number | null;
		BallsInPlay?: number | null;
		BattingAverage?: number | null;
		BattingAverageOnBallsInPlay?: number | null;
		BattingOrder?: number | null;
		BattingOrderConfirmed?: boolean | null;
		CaughtStealing?: number | null;
		DoublePlays?: number | null;
		Doubles?: number | null;
		EarnedRunAverage?: number | null;
		Errors?: number | null;
		FantasyPoints?: number | null;
		FantasyPointsDraftKings?: number | null;
		FantasyPointsFanDuel?: number | null;
		FantasyPointsFantasyDraft?: number | null;
		FantasyPointsYahoo?: number | null;
		FieldingIndependentPitching?: number | null;
		FlyOuts?: number | null;
		Games?: number | null;
		GlobalTeamID?: number | null;
		GrandSlams?: number | null;
		GroundIntoDoublePlay?: number | null;
		GroundOuts?: number | null;
		HitByPitch?: number | null;
		Hits?: number | null;
		HomeRuns?: number | null;
		InningsPitchedDecimal?: number | null;
		InningsPitchedFull?: number | null;
		InningsPitchedOuts?: number | null;
		IntentionalWalks?: number | null;
		IsolatedPower?: number | null;
		LeftOnBase?: number | null;
		LineOuts?: number | null;
		Losses?: number | null;
		Name?: string | null;
		OnBasePercentage?: number | null;
		OnBasePlusSlugging?: number | null;
		Outs?: number | null;
		PitchesSeen?: number | null;
		PitchesThrown?: number | null;
		PitchesThrownStrikes?: number | null;
		PitchingBallsInPlay?: number | null;
		PitchingBattingAverageAgainst?: number | null;
		PitchingBattingAverageOnBallsInPlay?: number | null;
		PitchingBlownSaves?: number | null;
		PitchingCatchersInterference?: number | null;
		PitchingCompleteGames?: number | null;
		PitchingDoublePlays?: number | null;
		PitchingDoubles?: number | null;
		PitchingEarnedRuns?: number | null;
		PitchingFlyOuts?: number | null;
		PitchingGrandSlams?: number | null;
		PitchingGroundIntoDoublePlay?: number | null;
		PitchingGroundOuts?: number | null;
		PitchingHitByPitch?: number | null;
		PitchingHits?: number | null;
		PitchingHolds?: number | null;
		PitchingHomeRuns?: number | null;
		PitchingInningStarted?: number | null;
		PitchingIntentionalWalks?: number | null;
		PitchingLineOuts?: number | null;
		PitchingNoHitters?: number | null;
		PitchingOnBasePercentage?: number | null;
		PitchingOnBasePlusSlugging?: number | null;
		PitchingPerfectGames?: number | null;
		PitchingPlateAppearances?: number | null;
		PitchingPopOuts?: number | null;
		PitchingQualityStarts?: number | null;
		PitchingReachedOnError?: number | null;
		PitchingRuns?: number | null;
		PitchingSacrificeFlies?: number | null;
		PitchingSacrifices?: number | null;
		PitchingShutOuts?: number | null;
		PitchingSingles?: number | null;
		PitchingSluggingPercentage?: number | null;
		PitchingStrikeouts?: number | null;
		PitchingStrikeoutsPerNineInnings?: number | null;
		PitchingTotalBases?: number | null;
		PitchingTriples?: number | null;
		PitchingWalks?: number | null;
		PitchingWalksPerNineInnings?: number | null;
		PitchingWeightedOnBasePercentage?: number | null;
		PlateAppearances?: number | null;
		PlayerID?: number | null;
		PopOuts?: number | null;
		Position?: string | null;
		PositionCategory?: string | null;
		ReachedOnError?: number | null;
		Runs?: number | null;
		RunsBattedIn?: number | null;
		SacrificeFlies?: number | null;
		Sacrifices?: number | null;
		Saves?: number | null;
		Season?: number | null;
		SeasonType?: number | null;
		Singles?: number | null;
		SluggingPercentage?: number | null;
		Started?: number | null;
		StatID?: number | null;
		StolenBases?: number | null;
		Strikeouts?: number | null;
		SubstituteBattingOrder?: number | null;
		SubstituteBattingOrderSequence?: number | null;
		Team?: string | null;
		TeamID?: number | null;
		TotalBases?: number | null;
		TotalOutsPitched?: number | null;
		Triples?: number | null;
		Updated?: string | null;
		Walks?: number | null;
		WalksHitsPerInningsPitched?: number | null;
		WeightedOnBasePercentage?: number | null;
		Wins?: number | null;
	}
	export interface PlayerSeasonProjectionFormProperties {
		AtBats: FormControl<number | null | undefined>,
		AverageDraftPosition: FormControl<number | null | undefined>,
		BallsInPlay: FormControl<number | null | undefined>,
		BattingAverage: FormControl<number | null | undefined>,
		BattingAverageOnBallsInPlay: FormControl<number | null | undefined>,
		BattingOrder: FormControl<number | null | undefined>,
		BattingOrderConfirmed: FormControl<boolean | null | undefined>,
		CaughtStealing: FormControl<number | null | undefined>,
		DoublePlays: FormControl<number | null | undefined>,
		Doubles: FormControl<number | null | undefined>,
		EarnedRunAverage: FormControl<number | null | undefined>,
		Errors: FormControl<number | null | undefined>,
		FantasyPoints: FormControl<number | null | undefined>,
		FantasyPointsDraftKings: FormControl<number | null | undefined>,
		FantasyPointsFanDuel: FormControl<number | null | undefined>,
		FantasyPointsFantasyDraft: FormControl<number | null | undefined>,
		FantasyPointsYahoo: FormControl<number | null | undefined>,
		FieldingIndependentPitching: FormControl<number | null | undefined>,
		FlyOuts: FormControl<number | null | undefined>,
		Games: FormControl<number | null | undefined>,
		GlobalTeamID: FormControl<number | null | undefined>,
		GrandSlams: FormControl<number | null | undefined>,
		GroundIntoDoublePlay: FormControl<number | null | undefined>,
		GroundOuts: FormControl<number | null | undefined>,
		HitByPitch: FormControl<number | null | undefined>,
		Hits: FormControl<number | null | undefined>,
		HomeRuns: FormControl<number | null | undefined>,
		InningsPitchedDecimal: FormControl<number | null | undefined>,
		InningsPitchedFull: FormControl<number | null | undefined>,
		InningsPitchedOuts: FormControl<number | null | undefined>,
		IntentionalWalks: FormControl<number | null | undefined>,
		IsolatedPower: FormControl<number | null | undefined>,
		LeftOnBase: FormControl<number | null | undefined>,
		LineOuts: FormControl<number | null | undefined>,
		Losses: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		OnBasePercentage: FormControl<number | null | undefined>,
		OnBasePlusSlugging: FormControl<number | null | undefined>,
		Outs: FormControl<number | null | undefined>,
		PitchesSeen: FormControl<number | null | undefined>,
		PitchesThrown: FormControl<number | null | undefined>,
		PitchesThrownStrikes: FormControl<number | null | undefined>,
		PitchingBallsInPlay: FormControl<number | null | undefined>,
		PitchingBattingAverageAgainst: FormControl<number | null | undefined>,
		PitchingBattingAverageOnBallsInPlay: FormControl<number | null | undefined>,
		PitchingBlownSaves: FormControl<number | null | undefined>,
		PitchingCatchersInterference: FormControl<number | null | undefined>,
		PitchingCompleteGames: FormControl<number | null | undefined>,
		PitchingDoublePlays: FormControl<number | null | undefined>,
		PitchingDoubles: FormControl<number | null | undefined>,
		PitchingEarnedRuns: FormControl<number | null | undefined>,
		PitchingFlyOuts: FormControl<number | null | undefined>,
		PitchingGrandSlams: FormControl<number | null | undefined>,
		PitchingGroundIntoDoublePlay: FormControl<number | null | undefined>,
		PitchingGroundOuts: FormControl<number | null | undefined>,
		PitchingHitByPitch: FormControl<number | null | undefined>,
		PitchingHits: FormControl<number | null | undefined>,
		PitchingHolds: FormControl<number | null | undefined>,
		PitchingHomeRuns: FormControl<number | null | undefined>,
		PitchingInningStarted: FormControl<number | null | undefined>,
		PitchingIntentionalWalks: FormControl<number | null | undefined>,
		PitchingLineOuts: FormControl<number | null | undefined>,
		PitchingNoHitters: FormControl<number | null | undefined>,
		PitchingOnBasePercentage: FormControl<number | null | undefined>,
		PitchingOnBasePlusSlugging: FormControl<number | null | undefined>,
		PitchingPerfectGames: FormControl<number | null | undefined>,
		PitchingPlateAppearances: FormControl<number | null | undefined>,
		PitchingPopOuts: FormControl<number | null | undefined>,
		PitchingQualityStarts: FormControl<number | null | undefined>,
		PitchingReachedOnError: FormControl<number | null | undefined>,
		PitchingRuns: FormControl<number | null | undefined>,
		PitchingSacrificeFlies: FormControl<number | null | undefined>,
		PitchingSacrifices: FormControl<number | null | undefined>,
		PitchingShutOuts: FormControl<number | null | undefined>,
		PitchingSingles: FormControl<number | null | undefined>,
		PitchingSluggingPercentage: FormControl<number | null | undefined>,
		PitchingStrikeouts: FormControl<number | null | undefined>,
		PitchingStrikeoutsPerNineInnings: FormControl<number | null | undefined>,
		PitchingTotalBases: FormControl<number | null | undefined>,
		PitchingTriples: FormControl<number | null | undefined>,
		PitchingWalks: FormControl<number | null | undefined>,
		PitchingWalksPerNineInnings: FormControl<number | null | undefined>,
		PitchingWeightedOnBasePercentage: FormControl<number | null | undefined>,
		PlateAppearances: FormControl<number | null | undefined>,
		PlayerID: FormControl<number | null | undefined>,
		PopOuts: FormControl<number | null | undefined>,
		Position: FormControl<string | null | undefined>,
		PositionCategory: FormControl<string | null | undefined>,
		ReachedOnError: FormControl<number | null | undefined>,
		Runs: FormControl<number | null | undefined>,
		RunsBattedIn: FormControl<number | null | undefined>,
		SacrificeFlies: FormControl<number | null | undefined>,
		Sacrifices: FormControl<number | null | undefined>,
		Saves: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		Singles: FormControl<number | null | undefined>,
		SluggingPercentage: FormControl<number | null | undefined>,
		Started: FormControl<number | null | undefined>,
		StatID: FormControl<number | null | undefined>,
		StolenBases: FormControl<number | null | undefined>,
		Strikeouts: FormControl<number | null | undefined>,
		SubstituteBattingOrder: FormControl<number | null | undefined>,
		SubstituteBattingOrderSequence: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
		TotalBases: FormControl<number | null | undefined>,
		TotalOutsPitched: FormControl<number | null | undefined>,
		Triples: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
		Walks: FormControl<number | null | undefined>,
		WalksHitsPerInningsPitched: FormControl<number | null | undefined>,
		WeightedOnBasePercentage: FormControl<number | null | undefined>,
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
		 * @return {Array<DfsSlate>} 
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
		 * @return {Array<PlayerGameProjection>} 
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
		 * @return {Array<PlayerGameProjection>} 
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
		 * @return {Array<PlayerSeasonProjection>} 
		 */
		ProjectedPlayerSeasonStatsWithAdp(format: DfsSlatesByDateFormat, season: string): Observable<Array<PlayerSeasonProjection>> {
			return this.http.get<Array<PlayerSeasonProjection>>(this.baseUri + format + '/PlayerSeasonProjectionStats/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}
	}

	export enum DfsSlatesByDateFormat { XML = 'XML', JSON = 'JSON' }

}

