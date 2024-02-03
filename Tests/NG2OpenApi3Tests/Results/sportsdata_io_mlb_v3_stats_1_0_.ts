import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BoxScore {
		Game?: Game;
		Innings?: Array<Inning>;
		PlayerGames?: Array<PlayerGame>;
		TeamGames?: Array<TeamGame>;
	}
	export interface BoxScoreFormProperties {
	}
	export function CreateBoxScoreFormGroup() {
		return new FormGroup<BoxScoreFormProperties>({
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

	export interface PlayerGame {
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
		FantasyPointsBatting?: number | null;
		FantasyPointsDraftKings?: number | null;
		FantasyPointsFanDuel?: number | null;
		FantasyPointsFantasyDraft?: number | null;
		FantasyPointsPitching?: number | null;
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
	export interface PlayerGameFormProperties {
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
		FantasyPointsBatting: FormControl<number | null | undefined>,
		FantasyPointsDraftKings: FormControl<number | null | undefined>,
		FantasyPointsFanDuel: FormControl<number | null | undefined>,
		FantasyPointsFantasyDraft: FormControl<number | null | undefined>,
		FantasyPointsPitching: FormControl<number | null | undefined>,
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
	export function CreatePlayerGameFormGroup() {
		return new FormGroup<PlayerGameFormProperties>({
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
			FantasyPointsBatting: new FormControl<number | null | undefined>(undefined),
			FantasyPointsDraftKings: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFanDuel: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFantasyDraft: new FormControl<number | null | undefined>(undefined),
			FantasyPointsPitching: new FormControl<number | null | undefined>(undefined),
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

	export interface TeamGame {
		AtBats?: number | null;
		BallsInPlay?: number | null;
		BattingAverage?: number | null;
		BattingAverageOnBallsInPlay?: number | null;
		BattingOrderConfirmed?: boolean | null;
		CaughtStealing?: number | null;
		DateTime?: string | null;
		Day?: string | null;
		DoublePlays?: number | null;
		Doubles?: number | null;
		EarnedRunAverage?: number | null;
		Errors?: number | null;
		FantasyPoints?: number | null;
		FantasyPointsBatting?: number | null;
		FantasyPointsDraftKings?: number | null;
		FantasyPointsFanDuel?: number | null;
		FantasyPointsFantasyDraft?: number | null;
		FantasyPointsPitching?: number | null;
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
		PopOuts?: number | null;
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
	export interface TeamGameFormProperties {
		AtBats: FormControl<number | null | undefined>,
		BallsInPlay: FormControl<number | null | undefined>,
		BattingAverage: FormControl<number | null | undefined>,
		BattingAverageOnBallsInPlay: FormControl<number | null | undefined>,
		BattingOrderConfirmed: FormControl<boolean | null | undefined>,
		CaughtStealing: FormControl<number | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,
		DoublePlays: FormControl<number | null | undefined>,
		Doubles: FormControl<number | null | undefined>,
		EarnedRunAverage: FormControl<number | null | undefined>,
		Errors: FormControl<number | null | undefined>,
		FantasyPoints: FormControl<number | null | undefined>,
		FantasyPointsBatting: FormControl<number | null | undefined>,
		FantasyPointsDraftKings: FormControl<number | null | undefined>,
		FantasyPointsFanDuel: FormControl<number | null | undefined>,
		FantasyPointsFantasyDraft: FormControl<number | null | undefined>,
		FantasyPointsPitching: FormControl<number | null | undefined>,
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
		PopOuts: FormControl<number | null | undefined>,
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
			FantasyPointsBatting: new FormControl<number | null | undefined>(undefined),
			FantasyPointsDraftKings: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFanDuel: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFantasyDraft: new FormControl<number | null | undefined>(undefined),
			FantasyPointsPitching: new FormControl<number | null | undefined>(undefined),
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
		Team?: string | null;
		TeamID?: number | null;
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
		Team: FormControl<string | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
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
			Team: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
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
		DateTimeUTC?: string | null;
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
		InningDescription?: string | null;
		InningHalf?: string | null;
		Innings?: Array<Inning>;
		IsClosed?: boolean | null;
		LastPlay?: string | null;
		LosingPitcher?: string | null;
		LosingPitcherID?: number | null;
		NeutralVenue?: boolean | null;
		Outs?: number | null;
		OverPayout?: number | null;
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
		SeriesInfo?: Series;
		StadiumID?: number | null;
		Status?: string | null;
		Strikes?: number | null;
		UnderPayout?: number | null;
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
		DateTimeUTC: FormControl<string | null | undefined>,
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
		InningDescription: FormControl<string | null | undefined>,
		InningHalf: FormControl<string | null | undefined>,
		IsClosed: FormControl<boolean | null | undefined>,
		LastPlay: FormControl<string | null | undefined>,
		LosingPitcher: FormControl<string | null | undefined>,
		LosingPitcherID: FormControl<number | null | undefined>,
		NeutralVenue: FormControl<boolean | null | undefined>,
		Outs: FormControl<number | null | undefined>,
		OverPayout: FormControl<number | null | undefined>,
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
		UnderPayout: FormControl<number | null | undefined>,
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

	export interface News {
		Author?: string | null;
		Categories?: string | null;
		Content?: string | null;
		NewsID?: number | null;
		OriginalSource?: string | null;
		OriginalSourceUrl?: string | null;
		PlayerID?: number | null;
		PlayerID2?: number | null;
		Source?: string | null;
		Team?: string | null;
		Team2?: string | null;
		TeamID?: number | null;
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
		NewsID: FormControl<number | null | undefined>,
		OriginalSource: FormControl<string | null | undefined>,
		OriginalSourceUrl: FormControl<string | null | undefined>,
		PlayerID: FormControl<number | null | undefined>,
		PlayerID2: FormControl<number | null | undefined>,
		Source: FormControl<string | null | undefined>,
		Team: FormControl<string | null | undefined>,
		Team2: FormControl<string | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
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
			OriginalSource: new FormControl<string | null | undefined>(undefined),
			OriginalSourceUrl: new FormControl<string | null | undefined>(undefined),
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
		DraftKingsPlayerID?: number | null;
		Experience?: string | null;
		FanDuelName?: string | null;
		FanDuelPlayerID?: number | null;
		FantasyAlarmPlayerID?: number | null;
		FantasyDraftName?: string | null;
		FantasyDraftPlayerID?: number | null;
		FirstName?: string | null;
		GlobalTeamID?: number | null;
		Height?: number | null;
		HighSchool?: string | null;
		InjuryBodyPart?: string | null;
		InjuryNotes?: string | null;
		InjuryStartDate?: string | null;
		InjuryStatus?: string | null;
		Jersey?: number | null;
		LastName?: string | null;
		MLBAMID?: number | null;
		PhotoUrl?: string | null;
		PlayerID?: number | null;
		Position?: string | null;
		PositionCategory?: string | null;
		ProDebut?: string | null;
		RotoWirePlayerID?: number | null;
		RotoworldPlayerID?: number | null;
		Salary?: number | null;
		SportRadarPlayerID?: string | null;
		SportsDataID?: string | null;
		SportsDirectPlayerID?: number | null;
		StatsPlayerID?: number | null;
		Status?: string | null;
		Team?: string | null;
		TeamID?: number | null;
		ThrowHand?: string | null;
		UpcomingGameID?: number | null;
		UsaTodayHeadshotNoBackgroundUpdated?: string | null;
		UsaTodayHeadshotNoBackgroundUrl?: string | null;
		UsaTodayHeadshotUpdated?: string | null;
		UsaTodayHeadshotUrl?: string | null;
		UsaTodayPlayerID?: number | null;
		Weight?: number | null;
		XmlTeamPlayerID?: number | null;
		YahooName?: string | null;
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
		DraftKingsPlayerID: FormControl<number | null | undefined>,
		Experience: FormControl<string | null | undefined>,
		FanDuelName: FormControl<string | null | undefined>,
		FanDuelPlayerID: FormControl<number | null | undefined>,
		FantasyAlarmPlayerID: FormControl<number | null | undefined>,
		FantasyDraftName: FormControl<string | null | undefined>,
		FantasyDraftPlayerID: FormControl<number | null | undefined>,
		FirstName: FormControl<string | null | undefined>,
		GlobalTeamID: FormControl<number | null | undefined>,
		Height: FormControl<number | null | undefined>,
		HighSchool: FormControl<string | null | undefined>,
		InjuryBodyPart: FormControl<string | null | undefined>,
		InjuryNotes: FormControl<string | null | undefined>,
		InjuryStartDate: FormControl<string | null | undefined>,
		InjuryStatus: FormControl<string | null | undefined>,
		Jersey: FormControl<number | null | undefined>,
		LastName: FormControl<string | null | undefined>,
		MLBAMID: FormControl<number | null | undefined>,
		PhotoUrl: FormControl<string | null | undefined>,
		PlayerID: FormControl<number | null | undefined>,
		Position: FormControl<string | null | undefined>,
		PositionCategory: FormControl<string | null | undefined>,
		ProDebut: FormControl<string | null | undefined>,
		RotoWirePlayerID: FormControl<number | null | undefined>,
		RotoworldPlayerID: FormControl<number | null | undefined>,
		Salary: FormControl<number | null | undefined>,
		SportRadarPlayerID: FormControl<string | null | undefined>,
		SportsDataID: FormControl<string | null | undefined>,
		SportsDirectPlayerID: FormControl<number | null | undefined>,
		StatsPlayerID: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Team: FormControl<string | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
		ThrowHand: FormControl<string | null | undefined>,
		UpcomingGameID: FormControl<number | null | undefined>,
		UsaTodayHeadshotNoBackgroundUpdated: FormControl<string | null | undefined>,
		UsaTodayHeadshotNoBackgroundUrl: FormControl<string | null | undefined>,
		UsaTodayHeadshotUpdated: FormControl<string | null | undefined>,
		UsaTodayHeadshotUrl: FormControl<string | null | undefined>,
		UsaTodayPlayerID: FormControl<number | null | undefined>,
		Weight: FormControl<number | null | undefined>,
		XmlTeamPlayerID: FormControl<number | null | undefined>,
		YahooName: FormControl<string | null | undefined>,
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

	export interface PlayerSeason {
		AtBats?: number | null;
		AuctionValue?: number | null;
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
		FantasyPointsBatting?: number | null;
		FantasyPointsDraftKings?: number | null;
		FantasyPointsFanDuel?: number | null;
		FantasyPointsFantasyDraft?: number | null;
		FantasyPointsPitching?: number | null;
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
	export interface PlayerSeasonFormProperties {
		AtBats: FormControl<number | null | undefined>,
		AuctionValue: FormControl<number | null | undefined>,
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
		FantasyPointsBatting: FormControl<number | null | undefined>,
		FantasyPointsDraftKings: FormControl<number | null | undefined>,
		FantasyPointsFanDuel: FormControl<number | null | undefined>,
		FantasyPointsFantasyDraft: FormControl<number | null | undefined>,
		FantasyPointsPitching: FormControl<number | null | undefined>,
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
	export function CreatePlayerSeasonFormGroup() {
		return new FormGroup<PlayerSeasonFormProperties>({
			AtBats: new FormControl<number | null | undefined>(undefined),
			AuctionValue: new FormControl<number | null | undefined>(undefined),
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
			FantasyPointsBatting: new FormControl<number | null | undefined>(undefined),
			FantasyPointsDraftKings: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFanDuel: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFantasyDraft: new FormControl<number | null | undefined>(undefined),
			FantasyPointsPitching: new FormControl<number | null | undefined>(undefined),
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

	export interface Season {
		ApiSeason?: string | null;
		PostSeasonStartDate?: string | null;
		RegularSeasonStartDate?: string | null;
		Season1?: number | null;
		SeasonType?: string | null;
	}
	export interface SeasonFormProperties {
		ApiSeason: FormControl<string | null | undefined>,
		PostSeasonStartDate: FormControl<string | null | undefined>,
		RegularSeasonStartDate: FormControl<string | null | undefined>,
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

	export interface Stadium {
		Active?: boolean | null;
		Altitude?: number | null;
		Capacity?: number | null;
		CenterField?: number | null;
		City?: string | null;
		Country?: string | null;
		GeoLat?: number | null;
		GeoLong?: number | null;
		HomePlateDirection?: number | null;
		LeftCenterField?: number | null;
		LeftField?: number | null;
		MidLeftCenterField?: number | null;
		MidLeftField?: number | null;
		MidRightCenterField?: number | null;
		MidRightField?: number | null;
		Name?: string | null;
		RightCenterField?: number | null;
		RightField?: number | null;
		StadiumID?: number | null;
		State?: string | null;
		Surface?: string | null;
		Type?: string | null;
	}
	export interface StadiumFormProperties {
		Active: FormControl<boolean | null | undefined>,
		Altitude: FormControl<number | null | undefined>,
		Capacity: FormControl<number | null | undefined>,
		CenterField: FormControl<number | null | undefined>,
		City: FormControl<string | null | undefined>,
		Country: FormControl<string | null | undefined>,
		GeoLat: FormControl<number | null | undefined>,
		GeoLong: FormControl<number | null | undefined>,
		HomePlateDirection: FormControl<number | null | undefined>,
		LeftCenterField: FormControl<number | null | undefined>,
		LeftField: FormControl<number | null | undefined>,
		MidLeftCenterField: FormControl<number | null | undefined>,
		MidLeftField: FormControl<number | null | undefined>,
		MidRightCenterField: FormControl<number | null | undefined>,
		MidRightField: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		RightCenterField: FormControl<number | null | undefined>,
		RightField: FormControl<number | null | undefined>,
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
		AwayLosses?: number | null;
		AwayWins?: number | null;
		City?: string | null;
		DayLosses?: number | null;
		DayWins?: number | null;
		Division?: string | null;
		DivisionLosses?: number | null;
		DivisionRank?: number | null;
		DivisionWins?: number | null;
		GamesBehind?: number | null;
		GlobalTeamID?: number | null;
		HomeLosses?: number | null;
		HomeWins?: number | null;
		Key?: string | null;
		LastTenGamesLosses?: number | null;
		LastTenGamesWins?: number | null;
		League?: string | null;
		LeagueRank?: number | null;
		Losses?: number | null;
		Name?: string | null;
		NightLosses?: number | null;
		NightWins?: number | null;
		Percentage?: number | null;
		RunsAgainst?: number | null;
		RunsScored?: number | null;
		Season?: number | null;
		SeasonType?: number | null;
		Streak?: string | null;
		TeamID?: number | null;
		WildCardGamesBehind?: number | null;
		WildCardRank?: number | null;
		Wins?: number | null;
	}
	export interface StandingFormProperties {
		AwayLosses: FormControl<number | null | undefined>,
		AwayWins: FormControl<number | null | undefined>,
		City: FormControl<string | null | undefined>,
		DayLosses: FormControl<number | null | undefined>,
		DayWins: FormControl<number | null | undefined>,
		Division: FormControl<string | null | undefined>,
		DivisionLosses: FormControl<number | null | undefined>,
		DivisionRank: FormControl<number | null | undefined>,
		DivisionWins: FormControl<number | null | undefined>,
		GamesBehind: FormControl<number | null | undefined>,
		GlobalTeamID: FormControl<number | null | undefined>,
		HomeLosses: FormControl<number | null | undefined>,
		HomeWins: FormControl<number | null | undefined>,
		Key: FormControl<string | null | undefined>,
		LastTenGamesLosses: FormControl<number | null | undefined>,
		LastTenGamesWins: FormControl<number | null | undefined>,
		League: FormControl<string | null | undefined>,
		LeagueRank: FormControl<number | null | undefined>,
		Losses: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		NightLosses: FormControl<number | null | undefined>,
		NightWins: FormControl<number | null | undefined>,
		Percentage: FormControl<number | null | undefined>,
		RunsAgainst: FormControl<number | null | undefined>,
		RunsScored: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		Streak: FormControl<string | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
		WildCardGamesBehind: FormControl<number | null | undefined>,
		WildCardRank: FormControl<number | null | undefined>,
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
			DivisionRank: new FormControl<number | null | undefined>(undefined),
			DivisionWins: new FormControl<number | null | undefined>(undefined),
			GamesBehind: new FormControl<number | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			HomeLosses: new FormControl<number | null | undefined>(undefined),
			HomeWins: new FormControl<number | null | undefined>(undefined),
			Key: new FormControl<string | null | undefined>(undefined),
			LastTenGamesLosses: new FormControl<number | null | undefined>(undefined),
			LastTenGamesWins: new FormControl<number | null | undefined>(undefined),
			League: new FormControl<string | null | undefined>(undefined),
			LeagueRank: new FormControl<number | null | undefined>(undefined),
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
		GlobalTeamID?: number | null;
		Key?: string | null;
		League?: string | null;
		Name?: string | null;
		PrimaryColor?: string | null;
		QuaternaryColor?: string | null;
		SecondaryColor?: string | null;
		StadiumID?: number | null;
		TeamID?: number | null;
		TertiaryColor?: string | null;
		WikipediaLogoUrl?: string | null;
		WikipediaWordMarkUrl?: string | null;
	}
	export interface TeamFormProperties {
		Active: FormControl<boolean | null | undefined>,
		City: FormControl<string | null | undefined>,
		Division: FormControl<string | null | undefined>,
		GlobalTeamID: FormControl<number | null | undefined>,
		Key: FormControl<string | null | undefined>,
		League: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PrimaryColor: FormControl<string | null | undefined>,
		QuaternaryColor: FormControl<string | null | undefined>,
		SecondaryColor: FormControl<string | null | undefined>,
		StadiumID: FormControl<number | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
		TertiaryColor: FormControl<string | null | undefined>,
		WikipediaLogoUrl: FormControl<string | null | undefined>,
		WikipediaWordMarkUrl: FormControl<string | null | undefined>,
	}
	export function CreateTeamFormGroup() {
		return new FormGroup<TeamFormProperties>({
			Active: new FormControl<boolean | null | undefined>(undefined),
			City: new FormControl<string | null | undefined>(undefined),
			Division: new FormControl<string | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			Key: new FormControl<string | null | undefined>(undefined),
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
		});

	}

	export interface TeamSeason {
		AtBats?: number | null;
		BallsInPlay?: number | null;
		BattingAverage?: number | null;
		BattingAverageOnBallsInPlay?: number | null;
		BattingOrderConfirmed?: boolean | null;
		CaughtStealing?: number | null;
		DoublePlays?: number | null;
		Doubles?: number | null;
		EarnedRunAverage?: number | null;
		Errors?: number | null;
		FantasyPoints?: number | null;
		FantasyPointsBatting?: number | null;
		FantasyPointsDraftKings?: number | null;
		FantasyPointsFanDuel?: number | null;
		FantasyPointsFantasyDraft?: number | null;
		FantasyPointsPitching?: number | null;
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
		PopOuts?: number | null;
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
	export interface TeamSeasonFormProperties {
		AtBats: FormControl<number | null | undefined>,
		BallsInPlay: FormControl<number | null | undefined>,
		BattingAverage: FormControl<number | null | undefined>,
		BattingAverageOnBallsInPlay: FormControl<number | null | undefined>,
		BattingOrderConfirmed: FormControl<boolean | null | undefined>,
		CaughtStealing: FormControl<number | null | undefined>,
		DoublePlays: FormControl<number | null | undefined>,
		Doubles: FormControl<number | null | undefined>,
		EarnedRunAverage: FormControl<number | null | undefined>,
		Errors: FormControl<number | null | undefined>,
		FantasyPoints: FormControl<number | null | undefined>,
		FantasyPointsBatting: FormControl<number | null | undefined>,
		FantasyPointsDraftKings: FormControl<number | null | undefined>,
		FantasyPointsFanDuel: FormControl<number | null | undefined>,
		FantasyPointsFantasyDraft: FormControl<number | null | undefined>,
		FantasyPointsPitching: FormControl<number | null | undefined>,
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
		PopOuts: FormControl<number | null | undefined>,
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
			FantasyPointsBatting: new FormControl<number | null | undefined>(undefined),
			FantasyPointsDraftKings: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFanDuel: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFantasyDraft: new FormControl<number | null | undefined>(undefined),
			FantasyPointsPitching: new FormControl<number | null | undefined>(undefined),
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
		 * @return {Array<Team>} 
		 */
		TeamsAll(format: TeamsAllFormat): Observable<Array<Team>> {
			return this.http.get<Array<Team>>(this.baseUri + format + '/AllTeams', {});
		}

		/**
		 * Are Games In Progress
		 * Returns <code>true</code> if there is at least one game being played at the time of the request or <code>false</code> if there are none.
		 * Get {format}/AreAnyGamesInProgress
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {boolean} 
		 */
		AreGamesInProgress(format: TeamsAllFormat): Observable<boolean> {
			return this.http.get<boolean>(this.baseUri + format + '/AreAnyGamesInProgress', {});
		}

		/**
		 * Box Score
		 * Get {format}/BoxScore/{gameid}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} gameid The GameID of an MLB game.  GameIDs can be found in the Games API.  Valid entries are <code>14620</code> or <code>16905</code>
		 * @return {BoxScore} 
		 */
		BoxScore(format: TeamsAllFormat, gameid: string): Observable<BoxScore> {
			return this.http.get<BoxScore>(this.baseUri + format + '/BoxScore/' + (gameid == null ? '' : encodeURIComponent(gameid)) + '', {});
		}

		/**
		 * Box Scores by Date
		 * Get {format}/BoxScores/{date}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s).
		 * <br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.
		 * @return {Array<BoxScore>} 
		 */
		BoxScoresByDate(format: TeamsAllFormat, date: string): Observable<Array<BoxScore>> {
			return this.http.get<Array<BoxScore>>(this.baseUri + format + '/BoxScores/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * Box Scores by Date Delta
		 * Get {format}/BoxScoresDelta/{date}/{minutes}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s).
		 * <br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.
		 * @param {string} minutes Only returns player statistics that have changed in the last X minutes.  You specify how many minutes in time to go back. Valid entries are:
		 * <code>1</code>, <code>2</code> ... <code>all</code>.
		 * @return {Array<BoxScore>} 
		 */
		BoxScoresByDateDelta(format: TeamsAllFormat, date: string, minutes: string): Observable<Array<BoxScore>> {
			return this.http.get<Array<BoxScore>>(this.baseUri + format + '/BoxScoresDelta/' + (date == null ? '' : encodeURIComponent(date)) + '/' + (minutes == null ? '' : encodeURIComponent(minutes)) + '', {});
		}

		/**
		 * Current Season
		 * Get {format}/CurrentSeason
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Season} 
		 */
		CurrentSeason(format: TeamsAllFormat): Observable<Season> {
			return this.http.get<Season>(this.baseUri + format + '/CurrentSeason', {});
		}

		/**
		 * DFS Slates by Date
		 * Get {format}/DfsSlatesByDate/{date}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the slates.
		 * <br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.
		 * @return {Array<DfsSlate>} 
		 */
		DfsSlatesByDate(format: TeamsAllFormat, date: string): Observable<Array<DfsSlate>> {
			return this.http.get<Array<DfsSlate>>(this.baseUri + format + '/DfsSlatesByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * Player Details by Free Agents
		 * Get {format}/FreeAgents
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<Player>} 
		 */
		PlayerDetailsByFreeAgents(format: TeamsAllFormat): Observable<Array<Player>> {
			return this.http.get<Array<Player>>(this.baseUri + format + '/FreeAgents', {});
		}

		/**
		 * Schedules
		 * Get {format}/Games/{season}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.
		 * @return {Array<Game>} 
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
		 * @return {Array<Game>} 
		 */
		GamesByDate(format: TeamsAllFormat, date: string): Observable<Array<Game>> {
			return this.http.get<Array<Game>>(this.baseUri + format + '/GamesByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * Batter vs. Pitcher Stats
		 * Get {format}/HitterVsPitcher/{hitterid}/{pitcherid}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} hitterid Unique FantasyData Player ID.
		 * Example:<code>10000031</code>.
		 * @param {string} pitcherid Unique FantasyData Player ID.
		 * Example:<code>10000618</code>.
		 * @return {Array<PlayerSeason>} 
		 */
		BatterVsPitcherStats(format: TeamsAllFormat, hitterid: string, pitcherid: string): Observable<Array<PlayerSeason>> {
			return this.http.get<Array<PlayerSeason>>(this.baseUri + format + '/HitterVsPitcher/' + (hitterid == null ? '' : encodeURIComponent(hitterid)) + '/' + (pitcherid == null ? '' : encodeURIComponent(pitcherid)) + '', {});
		}

		/**
		 * News
		 * Get {format}/News
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<News>} 
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
		 * @return {Array<News>} 
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
		 * @return {Array<News>} 
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
		 * @return {Player} 
		 */
		PlayerDetailsByPlayer(format: TeamsAllFormat, playerid: string): Observable<Player> {
			return this.http.get<Player>(this.baseUri + format + '/Player/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}

		/**
		 * Player Game Stats by Date
		 * Get {format}/PlayerGameStatsByDate/{date}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s).
		 * <br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.
		 * @return {Array<PlayerGame>} 
		 */
		PlayerGameStatsByDate(format: TeamsAllFormat, date: string): Observable<Array<PlayerGame>> {
			return this.http.get<Array<PlayerGame>>(this.baseUri + format + '/PlayerGameStatsByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * Player Game Stats by Player
		 * Get {format}/PlayerGameStatsByPlayer/{date}/{playerid}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s).
		 * <br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.
		 * @param {string} playerid Unique FantasyData Player ID.
		 * Example:<code>10000507</code>.
		 * @return {PlayerGame} 
		 */
		PlayerGameStatsByPlayer(format: TeamsAllFormat, date: string, playerid: string): Observable<PlayerGame> {
			return this.http.get<PlayerGame>(this.baseUri + format + '/PlayerGameStatsByPlayer/' + (date == null ? '' : encodeURIComponent(date)) + '/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}

		/**
		 * Player Game Logs By Season
		 * Get {format}/PlayerGameStatsBySeason/{season}/{playerid}/{numberofgames}
		 * @param {PlayerGameLogsBySeasonFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Season to get games from. Example <code>2019POST</code>, <code>2020</code>
		 * @param {string} playerid Unique FantasyData Player ID.
		 * Example:<code>10001365</code>.
		 * @param {string} numberofgames How many games to return. Example <code>all</code>, <code>10</code>, <code>25</code>
		 * @return {Array<PlayerGame>} 
		 */
		PlayerGameLogsBySeason(format: PlayerGameLogsBySeasonFormat, season: string, playerid: string, numberofgames: string): Observable<Array<PlayerGame>> {
			return this.http.get<Array<PlayerGame>>(this.baseUri + format + '/PlayerGameStatsBySeason/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '/' + (numberofgames == null ? '' : encodeURIComponent(numberofgames)) + '', {});
		}

		/**
		 * Player Season Away Stats
		 * Get {format}/PlayerSeasonAwayStats/{season}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season.
		 * <br>Examples: <code>2017</code>, <code>2018</code>.
		 * @return {Array<PlayerSeason>} 
		 */
		PlayerSeasonAwayStats(format: TeamsAllFormat, season: string): Observable<Array<PlayerSeason>> {
			return this.http.get<Array<PlayerSeason>>(this.baseUri + format + '/PlayerSeasonAwayStats/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * Player Season Home Stats
		 * Get {format}/PlayerSeasonHomeStats/{season}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season.
		 * <br>Examples: <code>2017</code>, <code>2018</code>.
		 * @return {Array<PlayerSeason>} 
		 */
		PlayerSeasonHomeStats(format: TeamsAllFormat, season: string): Observable<Array<PlayerSeason>> {
			return this.http.get<Array<PlayerSeason>>(this.baseUri + format + '/PlayerSeasonHomeStats/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * Player Season Split Stats
		 * Get {format}/PlayerSeasonSplitStats/{season}/{split}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season.
		 * <br>Examples: <code>2017</code>, <code>2018</code>.
		 * @param {PlayerSeasonSplitStatsSplit} split The desired split of stats. Currently, we support vs. Left/Right/Switch handed pitchers/hitters. Possible values are: <code>L</code>, <code>R</code> and <code>S</code>
		 * @return {Array<PlayerSeason>} 
		 */
		PlayerSeasonSplitStats(format: TeamsAllFormat, season: string, split: PlayerSeasonSplitStatsSplit): Observable<Array<PlayerSeason>> {
			return this.http.get<Array<PlayerSeason>>(this.baseUri + format + '/PlayerSeasonSplitStats/' + (season == null ? '' : encodeURIComponent(season)) + '/' + split + '', {});
		}

		/**
		 * Player Season Stats
		 * Get {format}/PlayerSeasonStats/{season}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season.
		 * <br>Examples: <code>2017</code>, <code>2018</code>.
		 * @return {Array<PlayerSeason>} 
		 */
		PlayerSeasonStats(format: TeamsAllFormat, season: string): Observable<Array<PlayerSeason>> {
			return this.http.get<Array<PlayerSeason>>(this.baseUri + format + '/PlayerSeasonStats/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * Player Season Stats By Player
		 * Get {format}/PlayerSeasonStatsByPlayer/{season}/{playerid}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season.
		 * <br>Examples: <code>2017</code>, <code>2018</code>.
		 * @param {string} playerid Unique FantasyData Player ID.
		 * Example:<code>10000507</code>.
		 * @return {PlayerSeason} 
		 */
		PlayerSeasonStatsByPlayer(format: TeamsAllFormat, season: string, playerid: string): Observable<PlayerSeason> {
			return this.http.get<PlayerSeason>(this.baseUri + format + '/PlayerSeasonStatsByPlayer/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}

		/**
		 * Player Season Stats by Team
		 * Get {format}/PlayerSeasonStatsByTeam/{season}/{team}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season.
		 * <br>Examples: <code>2017</code>, <code>2018</code>.
		 * @param {string} team The abbreviation of the requested team.
		 * <br>Examples: <code>SF</code>, <code>NYY</code>.
		 * @return {Array<PlayerSeason>} 
		 */
		PlayerSeasonStatsByTeam(format: TeamsAllFormat, season: string, team: string): Observable<Array<PlayerSeason>> {
			return this.http.get<Array<PlayerSeason>>(this.baseUri + format + '/PlayerSeasonStatsByTeam/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (team == null ? '' : encodeURIComponent(team)) + '', {});
		}

		/**
		 * Player Season Stats Split By Team
		 * Get {format}/PlayerSeasonStatsSplitByTeam/{season}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season.
		 * <br>Examples: <code>2017</code>, <code>2018</code>.
		 * @return {Array<PlayerSeason>} 
		 */
		PlayerSeasonStatsSplitByTeam(format: TeamsAllFormat, season: string): Observable<Array<PlayerSeason>> {
			return this.http.get<Array<PlayerSeason>>(this.baseUri + format + '/PlayerSeasonStatsSplitByTeam/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * Player Details by Active
		 * Get {format}/Players
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<Player>} 
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
		 * @return {Array<Player>} 
		 */
		PlayersByTeam(format: TeamsAllFormat, team: string): Observable<Array<Player>> {
			return this.http.get<Array<Player>>(this.baseUri + format + '/Players/' + (team == null ? '' : encodeURIComponent(team)) + '', {});
		}

		/**
		 * Stadiums
		 * Get {format}/Stadiums
		 * @param {StadiumsFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<Stadium>} 
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
		 * @return {Array<Standing>} 
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
		 * @return {Array<TeamGame>} 
		 */
		TeamGameStatsByDate(format: TeamsAllFormat, date: string): Observable<Array<TeamGame>> {
			return this.http.get<Array<TeamGame>>(this.baseUri + format + '/TeamGameStatsByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * Team Game Logs By Season
		 * Game by game log of total team statistics.
		 * Get {format}/TeamGameStatsBySeason/{season}/{teamid}/{numberofgames}
		 * @param {PlayerGameLogsBySeasonFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Season to get games from. Example <code>2019POST</code>, <code>2020</code>
		 * @param {string} teamid Unique ID of team.  Example <code> 12 </code>
		 * @param {string} numberofgames How many games to return. Example <code>all</code>, <code>10</code>, <code>25</code>
		 * @return {Array<TeamGame>} 
		 */
		TeamGameLogsBySeason(format: PlayerGameLogsBySeasonFormat, season: string, teamid: string, numberofgames: string): Observable<Array<TeamGame>> {
			return this.http.get<Array<TeamGame>>(this.baseUri + format + '/TeamGameStatsBySeason/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (teamid == null ? '' : encodeURIComponent(teamid)) + '/' + (numberofgames == null ? '' : encodeURIComponent(numberofgames)) + '', {});
		}

		/**
		 * Team Hitting vs. Starting Pitcher
		 * Get {format}/TeamHittersVsPitcher/{gameid}/{team}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} gameid The GameID of an MLB game.  GameIDs can be found in the Games API.  Valid entries are <code>14620</code> or <code>16905</code>
		 * @param {string} team The abbreviation of the requested team.
		 * <br>Examples: <code>SF</code>, <code>NYY</code>.
		 * @return {Array<PlayerSeason>} 
		 */
		TeamHittingVsStartingPitcher(format: TeamsAllFormat, gameid: string, team: string): Observable<Array<PlayerSeason>> {
			return this.http.get<Array<PlayerSeason>>(this.baseUri + format + '/TeamHittersVsPitcher/' + (gameid == null ? '' : encodeURIComponent(gameid)) + '/' + (team == null ? '' : encodeURIComponent(team)) + '', {});
		}

		/**
		 * Team Season Stats
		 * Get {format}/TeamSeasonStats/{season}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season.
		 * <br>Examples: <code>2017</code>, <code>2018</code>.
		 * @return {Array<TeamSeason>} 
		 */
		TeamSeasonStats(format: TeamsAllFormat, season: string): Observable<Array<TeamSeason>> {
			return this.http.get<Array<TeamSeason>>(this.baseUri + format + '/TeamSeasonStats/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * Teams (Active)
		 * Get {format}/teams
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<Team>} 
		 */
		TeamsActive(format: TeamsAllFormat): Observable<Array<Team>> {
			return this.http.get<Array<Team>>(this.baseUri + format + '/teams', {});
		}
	}

	export enum TeamsAllFormat { XML = 'XML', JSON = 'JSON' }

	export enum PlayerGameLogsBySeasonFormat { JSON = 'JSON', XML = 'XML' }

	export enum PlayerSeasonSplitStatsSplit { L = 'L', R = 'R', S = 'S' }

	export enum StadiumsFormat { xml = 'xml', json = 'json' }

}

