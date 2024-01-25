import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BoxScore {
		Game?: Game;
		Periods?: Array<Period>;
		PlayerGames?: Array<PlayerGame>;
		TeamGames?: Array<TeamGame>;
	}
	export interface BoxScoreFormProperties {
	}
	export function CreateBoxScoreFormGroup() {
		return new FormGroup<BoxScoreFormProperties>({
		});

	}

	export interface Period {
		AwayScore?: number | null;
		GameID?: number | null;
		HomeScore?: number | null;
		Name?: string | null;
		Number?: number | null;
		PeriodID?: number | null;
		Type?: string | null;
	}
	export interface PeriodFormProperties {
		AwayScore: FormControl<number | null | undefined>,
		GameID: FormControl<number | null | undefined>,
		HomeScore: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Number: FormControl<number | null | undefined>,
		PeriodID: FormControl<number | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreatePeriodFormGroup() {
		return new FormGroup<PeriodFormProperties>({
			AwayScore: new FormControl<number | null | undefined>(undefined),
			GameID: new FormControl<number | null | undefined>(undefined),
			HomeScore: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Number: new FormControl<number | null | undefined>(undefined),
			PeriodID: new FormControl<number | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlayerGame {
		Assists?: number | null;
		AssistsPercentage?: number | null;
		BlockedShots?: number | null;
		BlocksPercentage?: number | null;
		DateTime?: string | null;
		Day?: string | null;
		DefensiveRebounds?: number | null;
		DefensiveReboundsPercentage?: number | null;
		DraftKingsPosition?: string | null;
		DraftKingsSalary?: number | null;
		EffectiveFieldGoalsPercentage?: number | null;
		FanDuelPosition?: string | null;
		FanDuelSalary?: number | null;
		FantasyDataSalary?: number | null;
		FantasyPoints?: number | null;
		FantasyPointsDraftKings?: number | null;
		FantasyPointsFanDuel?: number | null;
		FantasyPointsYahoo?: number | null;
		FieldGoalsAttempted?: number | null;
		FieldGoalsMade?: number | null;
		FieldGoalsPercentage?: number | null;
		FreeThrowsAttempted?: number | null;
		FreeThrowsMade?: number | null;
		FreeThrowsPercentage?: number | null;
		GameID?: number | null;
		Games?: number | null;
		GlobalGameID?: number | null;
		GlobalOpponentID?: number | null;
		GlobalTeamID?: number | null;
		HomeOrAway?: string | null;
		InjuryBodyPart?: string | null;
		InjuryNotes?: string | null;
		InjuryStartDate?: string | null;
		InjuryStatus?: string | null;
		IsGameOver?: boolean | null;
		Minutes?: number | null;
		Name?: string | null;
		OffensiveRebounds?: number | null;
		OffensiveReboundsPercentage?: number | null;
		Opponent?: string | null;
		OpponentID?: number | null;
		OpponentPositionRank?: number | null;
		OpponentRank?: number | null;
		PersonalFouls?: number | null;
		PlayerEfficiencyRating?: number | null;
		PlayerID?: number | null;
		Points?: number | null;
		Position?: string | null;
		Rebounds?: number | null;
		Season?: number | null;
		SeasonType?: number | null;
		StatID?: number | null;
		Steals?: number | null;
		StealsPercentage?: number | null;
		Team?: string | null;
		TeamID?: number | null;
		ThreePointersAttempted?: number | null;
		ThreePointersMade?: number | null;
		ThreePointersPercentage?: number | null;
		TotalReboundsPercentage?: number | null;
		TrueShootingAttempts?: number | null;
		TrueShootingPercentage?: number | null;
		TurnOversPercentage?: number | null;
		Turnovers?: number | null;
		TwoPointersAttempted?: number | null;
		TwoPointersMade?: number | null;
		TwoPointersPercentage?: number | null;
		Updated?: string | null;
		UsageRatePercentage?: number | null;
		YahooPosition?: string | null;
		YahooSalary?: number | null;
	}
	export interface PlayerGameFormProperties {
		Assists: FormControl<number | null | undefined>,
		AssistsPercentage: FormControl<number | null | undefined>,
		BlockedShots: FormControl<number | null | undefined>,
		BlocksPercentage: FormControl<number | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,
		DefensiveRebounds: FormControl<number | null | undefined>,
		DefensiveReboundsPercentage: FormControl<number | null | undefined>,
		DraftKingsPosition: FormControl<string | null | undefined>,
		DraftKingsSalary: FormControl<number | null | undefined>,
		EffectiveFieldGoalsPercentage: FormControl<number | null | undefined>,
		FanDuelPosition: FormControl<string | null | undefined>,
		FanDuelSalary: FormControl<number | null | undefined>,
		FantasyDataSalary: FormControl<number | null | undefined>,
		FantasyPoints: FormControl<number | null | undefined>,
		FantasyPointsDraftKings: FormControl<number | null | undefined>,
		FantasyPointsFanDuel: FormControl<number | null | undefined>,
		FantasyPointsYahoo: FormControl<number | null | undefined>,
		FieldGoalsAttempted: FormControl<number | null | undefined>,
		FieldGoalsMade: FormControl<number | null | undefined>,
		FieldGoalsPercentage: FormControl<number | null | undefined>,
		FreeThrowsAttempted: FormControl<number | null | undefined>,
		FreeThrowsMade: FormControl<number | null | undefined>,
		FreeThrowsPercentage: FormControl<number | null | undefined>,
		GameID: FormControl<number | null | undefined>,
		Games: FormControl<number | null | undefined>,
		GlobalGameID: FormControl<number | null | undefined>,
		GlobalOpponentID: FormControl<number | null | undefined>,
		GlobalTeamID: FormControl<number | null | undefined>,
		HomeOrAway: FormControl<string | null | undefined>,
		InjuryBodyPart: FormControl<string | null | undefined>,
		InjuryNotes: FormControl<string | null | undefined>,
		InjuryStartDate: FormControl<string | null | undefined>,
		InjuryStatus: FormControl<string | null | undefined>,
		IsGameOver: FormControl<boolean | null | undefined>,
		Minutes: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		OffensiveRebounds: FormControl<number | null | undefined>,
		OffensiveReboundsPercentage: FormControl<number | null | undefined>,
		Opponent: FormControl<string | null | undefined>,
		OpponentID: FormControl<number | null | undefined>,
		OpponentPositionRank: FormControl<number | null | undefined>,
		OpponentRank: FormControl<number | null | undefined>,
		PersonalFouls: FormControl<number | null | undefined>,
		PlayerEfficiencyRating: FormControl<number | null | undefined>,
		PlayerID: FormControl<number | null | undefined>,
		Points: FormControl<number | null | undefined>,
		Position: FormControl<string | null | undefined>,
		Rebounds: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		StatID: FormControl<number | null | undefined>,
		Steals: FormControl<number | null | undefined>,
		StealsPercentage: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
		ThreePointersAttempted: FormControl<number | null | undefined>,
		ThreePointersMade: FormControl<number | null | undefined>,
		ThreePointersPercentage: FormControl<number | null | undefined>,
		TotalReboundsPercentage: FormControl<number | null | undefined>,
		TrueShootingAttempts: FormControl<number | null | undefined>,
		TrueShootingPercentage: FormControl<number | null | undefined>,
		TurnOversPercentage: FormControl<number | null | undefined>,
		Turnovers: FormControl<number | null | undefined>,
		TwoPointersAttempted: FormControl<number | null | undefined>,
		TwoPointersMade: FormControl<number | null | undefined>,
		TwoPointersPercentage: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
		UsageRatePercentage: FormControl<number | null | undefined>,
		YahooPosition: FormControl<string | null | undefined>,
		YahooSalary: FormControl<number | null | undefined>,
	}
	export function CreatePlayerGameFormGroup() {
		return new FormGroup<PlayerGameFormProperties>({
			Assists: new FormControl<number | null | undefined>(undefined),
			AssistsPercentage: new FormControl<number | null | undefined>(undefined),
			BlockedShots: new FormControl<number | null | undefined>(undefined),
			BlocksPercentage: new FormControl<number | null | undefined>(undefined),
			DateTime: new FormControl<string | null | undefined>(undefined),
			Day: new FormControl<string | null | undefined>(undefined),
			DefensiveRebounds: new FormControl<number | null | undefined>(undefined),
			DefensiveReboundsPercentage: new FormControl<number | null | undefined>(undefined),
			DraftKingsPosition: new FormControl<string | null | undefined>(undefined),
			DraftKingsSalary: new FormControl<number | null | undefined>(undefined),
			EffectiveFieldGoalsPercentage: new FormControl<number | null | undefined>(undefined),
			FanDuelPosition: new FormControl<string | null | undefined>(undefined),
			FanDuelSalary: new FormControl<number | null | undefined>(undefined),
			FantasyDataSalary: new FormControl<number | null | undefined>(undefined),
			FantasyPoints: new FormControl<number | null | undefined>(undefined),
			FantasyPointsDraftKings: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFanDuel: new FormControl<number | null | undefined>(undefined),
			FantasyPointsYahoo: new FormControl<number | null | undefined>(undefined),
			FieldGoalsAttempted: new FormControl<number | null | undefined>(undefined),
			FieldGoalsMade: new FormControl<number | null | undefined>(undefined),
			FieldGoalsPercentage: new FormControl<number | null | undefined>(undefined),
			FreeThrowsAttempted: new FormControl<number | null | undefined>(undefined),
			FreeThrowsMade: new FormControl<number | null | undefined>(undefined),
			FreeThrowsPercentage: new FormControl<number | null | undefined>(undefined),
			GameID: new FormControl<number | null | undefined>(undefined),
			Games: new FormControl<number | null | undefined>(undefined),
			GlobalGameID: new FormControl<number | null | undefined>(undefined),
			GlobalOpponentID: new FormControl<number | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			HomeOrAway: new FormControl<string | null | undefined>(undefined),
			InjuryBodyPart: new FormControl<string | null | undefined>(undefined),
			InjuryNotes: new FormControl<string | null | undefined>(undefined),
			InjuryStartDate: new FormControl<string | null | undefined>(undefined),
			InjuryStatus: new FormControl<string | null | undefined>(undefined),
			IsGameOver: new FormControl<boolean | null | undefined>(undefined),
			Minutes: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			OffensiveRebounds: new FormControl<number | null | undefined>(undefined),
			OffensiveReboundsPercentage: new FormControl<number | null | undefined>(undefined),
			Opponent: new FormControl<string | null | undefined>(undefined),
			OpponentID: new FormControl<number | null | undefined>(undefined),
			OpponentPositionRank: new FormControl<number | null | undefined>(undefined),
			OpponentRank: new FormControl<number | null | undefined>(undefined),
			PersonalFouls: new FormControl<number | null | undefined>(undefined),
			PlayerEfficiencyRating: new FormControl<number | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			Points: new FormControl<number | null | undefined>(undefined),
			Position: new FormControl<string | null | undefined>(undefined),
			Rebounds: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			StatID: new FormControl<number | null | undefined>(undefined),
			Steals: new FormControl<number | null | undefined>(undefined),
			StealsPercentage: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			ThreePointersAttempted: new FormControl<number | null | undefined>(undefined),
			ThreePointersMade: new FormControl<number | null | undefined>(undefined),
			ThreePointersPercentage: new FormControl<number | null | undefined>(undefined),
			TotalReboundsPercentage: new FormControl<number | null | undefined>(undefined),
			TrueShootingAttempts: new FormControl<number | null | undefined>(undefined),
			TrueShootingPercentage: new FormControl<number | null | undefined>(undefined),
			TurnOversPercentage: new FormControl<number | null | undefined>(undefined),
			Turnovers: new FormControl<number | null | undefined>(undefined),
			TwoPointersAttempted: new FormControl<number | null | undefined>(undefined),
			TwoPointersMade: new FormControl<number | null | undefined>(undefined),
			TwoPointersPercentage: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
			UsageRatePercentage: new FormControl<number | null | undefined>(undefined),
			YahooPosition: new FormControl<string | null | undefined>(undefined),
			YahooSalary: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TeamGame {
		Assists?: number | null;
		AssistsPercentage?: number | null;
		BlockedShots?: number | null;
		BlocksPercentage?: number | null;
		ConferenceLosses?: number | null;
		ConferenceWins?: number | null;
		DateTime?: string | null;
		Day?: string | null;
		DefensiveRebounds?: number | null;
		DefensiveReboundsPercentage?: number | null;
		EffectiveFieldGoalsPercentage?: number | null;
		FantasyPoints?: number | null;
		FantasyPointsDraftKings?: number | null;
		FantasyPointsFanDuel?: number | null;
		FantasyPointsYahoo?: number | null;
		FieldGoalsAttempted?: number | null;
		FieldGoalsMade?: number | null;
		FieldGoalsPercentage?: number | null;
		FreeThrowsAttempted?: number | null;
		FreeThrowsMade?: number | null;
		FreeThrowsPercentage?: number | null;
		GameID?: number | null;
		Games?: number | null;
		GlobalGameID?: number | null;
		GlobalOpponentID?: number | null;
		GlobalTeamID?: number | null;
		HomeOrAway?: string | null;
		IsGameOver?: boolean | null;
		Losses?: number | null;
		Minutes?: number | null;
		Name?: string | null;
		OffensiveRebounds?: number | null;
		OffensiveReboundsPercentage?: number | null;
		Opponent?: string | null;
		OpponentID?: number | null;
		PersonalFouls?: number | null;
		PlayerEfficiencyRating?: number | null;
		Points?: number | null;
		Possessions?: number | null;
		Rebounds?: number | null;
		Season?: number | null;
		SeasonType?: number | null;
		StatID?: number | null;
		Steals?: number | null;
		StealsPercentage?: number | null;
		Team?: string | null;
		TeamID?: number | null;
		ThreePointersAttempted?: number | null;
		ThreePointersMade?: number | null;
		ThreePointersPercentage?: number | null;
		TotalReboundsPercentage?: number | null;
		TrueShootingAttempts?: number | null;
		TrueShootingPercentage?: number | null;
		TurnOversPercentage?: number | null;
		Turnovers?: number | null;
		TwoPointersAttempted?: number | null;
		TwoPointersMade?: number | null;
		TwoPointersPercentage?: number | null;
		Updated?: string | null;
		UsageRatePercentage?: number | null;
		Wins?: number | null;
	}
	export interface TeamGameFormProperties {
		Assists: FormControl<number | null | undefined>,
		AssistsPercentage: FormControl<number | null | undefined>,
		BlockedShots: FormControl<number | null | undefined>,
		BlocksPercentage: FormControl<number | null | undefined>,
		ConferenceLosses: FormControl<number | null | undefined>,
		ConferenceWins: FormControl<number | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,
		DefensiveRebounds: FormControl<number | null | undefined>,
		DefensiveReboundsPercentage: FormControl<number | null | undefined>,
		EffectiveFieldGoalsPercentage: FormControl<number | null | undefined>,
		FantasyPoints: FormControl<number | null | undefined>,
		FantasyPointsDraftKings: FormControl<number | null | undefined>,
		FantasyPointsFanDuel: FormControl<number | null | undefined>,
		FantasyPointsYahoo: FormControl<number | null | undefined>,
		FieldGoalsAttempted: FormControl<number | null | undefined>,
		FieldGoalsMade: FormControl<number | null | undefined>,
		FieldGoalsPercentage: FormControl<number | null | undefined>,
		FreeThrowsAttempted: FormControl<number | null | undefined>,
		FreeThrowsMade: FormControl<number | null | undefined>,
		FreeThrowsPercentage: FormControl<number | null | undefined>,
		GameID: FormControl<number | null | undefined>,
		Games: FormControl<number | null | undefined>,
		GlobalGameID: FormControl<number | null | undefined>,
		GlobalOpponentID: FormControl<number | null | undefined>,
		GlobalTeamID: FormControl<number | null | undefined>,
		HomeOrAway: FormControl<string | null | undefined>,
		IsGameOver: FormControl<boolean | null | undefined>,
		Losses: FormControl<number | null | undefined>,
		Minutes: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		OffensiveRebounds: FormControl<number | null | undefined>,
		OffensiveReboundsPercentage: FormControl<number | null | undefined>,
		Opponent: FormControl<string | null | undefined>,
		OpponentID: FormControl<number | null | undefined>,
		PersonalFouls: FormControl<number | null | undefined>,
		PlayerEfficiencyRating: FormControl<number | null | undefined>,
		Points: FormControl<number | null | undefined>,
		Possessions: FormControl<number | null | undefined>,
		Rebounds: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		StatID: FormControl<number | null | undefined>,
		Steals: FormControl<number | null | undefined>,
		StealsPercentage: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
		ThreePointersAttempted: FormControl<number | null | undefined>,
		ThreePointersMade: FormControl<number | null | undefined>,
		ThreePointersPercentage: FormControl<number | null | undefined>,
		TotalReboundsPercentage: FormControl<number | null | undefined>,
		TrueShootingAttempts: FormControl<number | null | undefined>,
		TrueShootingPercentage: FormControl<number | null | undefined>,
		TurnOversPercentage: FormControl<number | null | undefined>,
		Turnovers: FormControl<number | null | undefined>,
		TwoPointersAttempted: FormControl<number | null | undefined>,
		TwoPointersMade: FormControl<number | null | undefined>,
		TwoPointersPercentage: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
		UsageRatePercentage: FormControl<number | null | undefined>,
		Wins: FormControl<number | null | undefined>,
	}
	export function CreateTeamGameFormGroup() {
		return new FormGroup<TeamGameFormProperties>({
			Assists: new FormControl<number | null | undefined>(undefined),
			AssistsPercentage: new FormControl<number | null | undefined>(undefined),
			BlockedShots: new FormControl<number | null | undefined>(undefined),
			BlocksPercentage: new FormControl<number | null | undefined>(undefined),
			ConferenceLosses: new FormControl<number | null | undefined>(undefined),
			ConferenceWins: new FormControl<number | null | undefined>(undefined),
			DateTime: new FormControl<string | null | undefined>(undefined),
			Day: new FormControl<string | null | undefined>(undefined),
			DefensiveRebounds: new FormControl<number | null | undefined>(undefined),
			DefensiveReboundsPercentage: new FormControl<number | null | undefined>(undefined),
			EffectiveFieldGoalsPercentage: new FormControl<number | null | undefined>(undefined),
			FantasyPoints: new FormControl<number | null | undefined>(undefined),
			FantasyPointsDraftKings: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFanDuel: new FormControl<number | null | undefined>(undefined),
			FantasyPointsYahoo: new FormControl<number | null | undefined>(undefined),
			FieldGoalsAttempted: new FormControl<number | null | undefined>(undefined),
			FieldGoalsMade: new FormControl<number | null | undefined>(undefined),
			FieldGoalsPercentage: new FormControl<number | null | undefined>(undefined),
			FreeThrowsAttempted: new FormControl<number | null | undefined>(undefined),
			FreeThrowsMade: new FormControl<number | null | undefined>(undefined),
			FreeThrowsPercentage: new FormControl<number | null | undefined>(undefined),
			GameID: new FormControl<number | null | undefined>(undefined),
			Games: new FormControl<number | null | undefined>(undefined),
			GlobalGameID: new FormControl<number | null | undefined>(undefined),
			GlobalOpponentID: new FormControl<number | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			HomeOrAway: new FormControl<string | null | undefined>(undefined),
			IsGameOver: new FormControl<boolean | null | undefined>(undefined),
			Losses: new FormControl<number | null | undefined>(undefined),
			Minutes: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			OffensiveRebounds: new FormControl<number | null | undefined>(undefined),
			OffensiveReboundsPercentage: new FormControl<number | null | undefined>(undefined),
			Opponent: new FormControl<string | null | undefined>(undefined),
			OpponentID: new FormControl<number | null | undefined>(undefined),
			PersonalFouls: new FormControl<number | null | undefined>(undefined),
			PlayerEfficiencyRating: new FormControl<number | null | undefined>(undefined),
			Points: new FormControl<number | null | undefined>(undefined),
			Possessions: new FormControl<number | null | undefined>(undefined),
			Rebounds: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			StatID: new FormControl<number | null | undefined>(undefined),
			Steals: new FormControl<number | null | undefined>(undefined),
			StealsPercentage: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			ThreePointersAttempted: new FormControl<number | null | undefined>(undefined),
			ThreePointersMade: new FormControl<number | null | undefined>(undefined),
			ThreePointersPercentage: new FormControl<number | null | undefined>(undefined),
			TotalReboundsPercentage: new FormControl<number | null | undefined>(undefined),
			TrueShootingAttempts: new FormControl<number | null | undefined>(undefined),
			TrueShootingPercentage: new FormControl<number | null | undefined>(undefined),
			TurnOversPercentage: new FormControl<number | null | undefined>(undefined),
			Turnovers: new FormControl<number | null | undefined>(undefined),
			TwoPointersAttempted: new FormControl<number | null | undefined>(undefined),
			TwoPointersMade: new FormControl<number | null | undefined>(undefined),
			TwoPointersPercentage: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
			UsageRatePercentage: new FormControl<number | null | undefined>(undefined),
			Wins: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Conference {
		ConferenceID?: number | null;
		Name?: string | null;
		Teams?: Array<Team>;
	}
	export interface ConferenceFormProperties {
		ConferenceID: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateConferenceFormGroup() {
		return new FormGroup<ConferenceFormProperties>({
			ConferenceID: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Team {
		Active?: boolean | null;
		ApRank?: number | null;
		Conference?: string | null;
		ConferenceID?: number | null;
		ConferenceLosses?: number | null;
		ConferenceWins?: number | null;
		GlobalTeamID?: number | null;
		Losses?: number | null;
		Name?: string | null;
		School?: string | null;
		ShortDisplayName?: string | null;
		Stadium?: Stadium;
		TeamID?: number | null;
		TeamLogoUrl?: string | null;
		Wins?: number | null;
		'[Key]'?: string | null;
	}
	export interface TeamFormProperties {
		Active: FormControl<boolean | null | undefined>,
		ApRank: FormControl<number | null | undefined>,
		Conference: FormControl<string | null | undefined>,
		ConferenceID: FormControl<number | null | undefined>,
		ConferenceLosses: FormControl<number | null | undefined>,
		ConferenceWins: FormControl<number | null | undefined>,
		GlobalTeamID: FormControl<number | null | undefined>,
		Losses: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		School: FormControl<string | null | undefined>,
		ShortDisplayName: FormControl<string | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
		TeamLogoUrl: FormControl<string | null | undefined>,
		Wins: FormControl<number | null | undefined>,
		'[Key]': FormControl<string | null | undefined>,
	}
	export function CreateTeamFormGroup() {
		return new FormGroup<TeamFormProperties>({
			Active: new FormControl<boolean | null | undefined>(undefined),
			ApRank: new FormControl<number | null | undefined>(undefined),
			Conference: new FormControl<string | null | undefined>(undefined),
			ConferenceID: new FormControl<number | null | undefined>(undefined),
			ConferenceLosses: new FormControl<number | null | undefined>(undefined),
			ConferenceWins: new FormControl<number | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			Losses: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			School: new FormControl<string | null | undefined>(undefined),
			ShortDisplayName: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			TeamLogoUrl: new FormControl<string | null | undefined>(undefined),
			Wins: new FormControl<number | null | undefined>(undefined),
			'[Key]': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Game {
		AwayTeam?: string | null;
		AwayTeamID?: number | null;
		AwayTeamMoneyLine?: number | null;
		AwayTeamPreviousGameID?: number | null;
		AwayTeamPreviousGlobalGameID?: number | null;
		AwayTeamScore?: number | null;
		AwayTeamSeed?: number | null;
		Bracket?: string | null;
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
		HomeTeamPreviousGameID?: number | null;
		HomeTeamPreviousGlobalGameID?: number | null;
		HomeTeamScore?: number | null;
		HomeTeamSeed?: number | null;
		IsClosed?: boolean | null;
		OverUnder?: number | null;
		Period?: string | null;
		Periods?: Array<Period>;
		PointSpread?: number | null;
		Round?: number | null;
		Season?: number | null;
		SeasonType?: number | null;
		Stadium?: Stadium;
		Status?: string | null;
		TimeRemainingMinutes?: number | null;
		TimeRemainingSeconds?: number | null;
		TournamentDisplayOrder?: number | null;
		TournamentDisplayOrderForHomeTeam?: string | null;
		TournamentID?: number | null;
		Updated?: string | null;
	}
	export interface GameFormProperties {
		AwayTeam: FormControl<string | null | undefined>,
		AwayTeamID: FormControl<number | null | undefined>,
		AwayTeamMoneyLine: FormControl<number | null | undefined>,
		AwayTeamPreviousGameID: FormControl<number | null | undefined>,
		AwayTeamPreviousGlobalGameID: FormControl<number | null | undefined>,
		AwayTeamScore: FormControl<number | null | undefined>,
		AwayTeamSeed: FormControl<number | null | undefined>,
		Bracket: FormControl<string | null | undefined>,
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
		HomeTeamPreviousGameID: FormControl<number | null | undefined>,
		HomeTeamPreviousGlobalGameID: FormControl<number | null | undefined>,
		HomeTeamScore: FormControl<number | null | undefined>,
		HomeTeamSeed: FormControl<number | null | undefined>,
		IsClosed: FormControl<boolean | null | undefined>,
		OverUnder: FormControl<number | null | undefined>,
		Period: FormControl<string | null | undefined>,
		PointSpread: FormControl<number | null | undefined>,
		Round: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,
		TimeRemainingMinutes: FormControl<number | null | undefined>,
		TimeRemainingSeconds: FormControl<number | null | undefined>,
		TournamentDisplayOrder: FormControl<number | null | undefined>,
		TournamentDisplayOrderForHomeTeam: FormControl<string | null | undefined>,
		TournamentID: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
	}
	export function CreateGameFormGroup() {
		return new FormGroup<GameFormProperties>({
			AwayTeam: new FormControl<string | null | undefined>(undefined),
			AwayTeamID: new FormControl<number | null | undefined>(undefined),
			AwayTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			AwayTeamPreviousGameID: new FormControl<number | null | undefined>(undefined),
			AwayTeamPreviousGlobalGameID: new FormControl<number | null | undefined>(undefined),
			AwayTeamScore: new FormControl<number | null | undefined>(undefined),
			AwayTeamSeed: new FormControl<number | null | undefined>(undefined),
			Bracket: new FormControl<string | null | undefined>(undefined),
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
			HomeTeamPreviousGameID: new FormControl<number | null | undefined>(undefined),
			HomeTeamPreviousGlobalGameID: new FormControl<number | null | undefined>(undefined),
			HomeTeamScore: new FormControl<number | null | undefined>(undefined),
			HomeTeamSeed: new FormControl<number | null | undefined>(undefined),
			IsClosed: new FormControl<boolean | null | undefined>(undefined),
			OverUnder: new FormControl<number | null | undefined>(undefined),
			Period: new FormControl<string | null | undefined>(undefined),
			PointSpread: new FormControl<number | null | undefined>(undefined),
			Round: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			TimeRemainingMinutes: new FormControl<number | null | undefined>(undefined),
			TimeRemainingSeconds: new FormControl<number | null | undefined>(undefined),
			TournamentDisplayOrder: new FormControl<number | null | undefined>(undefined),
			TournamentDisplayOrderForHomeTeam: new FormControl<string | null | undefined>(undefined),
			TournamentID: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Player {
		BirthCity?: string | null;
		BirthState?: string | null;
		Class?: string | null;
		FantasyAlarmPlayerID?: number | null;
		FirstName?: string | null;
		GlobalTeamID?: number | null;
		Height?: number | null;
		HighSchool?: string | null;
		Jersey?: number | null;
		LastName?: string | null;
		PlayerID?: number | null;
		Position?: string | null;
		RotoWirePlayerID?: number | null;
		RotoworldPlayerID?: number | null;
		SportRadarPlayerID?: string | null;
		Team?: string | null;
		TeamID?: number | null;
		Weight?: number | null;
	}
	export interface PlayerFormProperties {
		BirthCity: FormControl<string | null | undefined>,
		BirthState: FormControl<string | null | undefined>,
		Class: FormControl<string | null | undefined>,
		FantasyAlarmPlayerID: FormControl<number | null | undefined>,
		FirstName: FormControl<string | null | undefined>,
		GlobalTeamID: FormControl<number | null | undefined>,
		Height: FormControl<number | null | undefined>,
		HighSchool: FormControl<string | null | undefined>,
		Jersey: FormControl<number | null | undefined>,
		LastName: FormControl<string | null | undefined>,
		PlayerID: FormControl<number | null | undefined>,
		Position: FormControl<string | null | undefined>,
		RotoWirePlayerID: FormControl<number | null | undefined>,
		RotoworldPlayerID: FormControl<number | null | undefined>,
		SportRadarPlayerID: FormControl<string | null | undefined>,
		Team: FormControl<string | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
		Weight: FormControl<number | null | undefined>,
	}
	export function CreatePlayerFormGroup() {
		return new FormGroup<PlayerFormProperties>({
			BirthCity: new FormControl<string | null | undefined>(undefined),
			BirthState: new FormControl<string | null | undefined>(undefined),
			Class: new FormControl<string | null | undefined>(undefined),
			FantasyAlarmPlayerID: new FormControl<number | null | undefined>(undefined),
			FirstName: new FormControl<string | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			Height: new FormControl<number | null | undefined>(undefined),
			HighSchool: new FormControl<string | null | undefined>(undefined),
			Jersey: new FormControl<number | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			Position: new FormControl<string | null | undefined>(undefined),
			RotoWirePlayerID: new FormControl<number | null | undefined>(undefined),
			RotoworldPlayerID: new FormControl<number | null | undefined>(undefined),
			SportRadarPlayerID: new FormControl<string | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			Weight: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PlayerGameProjection {
		Assists?: number | null;
		AssistsPercentage?: number | null;
		BlockedShots?: number | null;
		BlocksPercentage?: number | null;
		DateTime?: string | null;
		Day?: string | null;
		DefensiveRebounds?: number | null;
		DefensiveReboundsPercentage?: number | null;
		DraftKingsPosition?: string | null;
		DraftKingsSalary?: number | null;
		EffectiveFieldGoalsPercentage?: number | null;
		FanDuelPosition?: string | null;
		FanDuelSalary?: number | null;
		FantasyDataSalary?: number | null;
		FantasyPoints?: number | null;
		FantasyPointsDraftKings?: number | null;
		FantasyPointsFanDuel?: number | null;
		FantasyPointsYahoo?: number | null;
		FieldGoalsAttempted?: number | null;
		FieldGoalsMade?: number | null;
		FieldGoalsPercentage?: number | null;
		FreeThrowsAttempted?: number | null;
		FreeThrowsMade?: number | null;
		FreeThrowsPercentage?: number | null;
		GameID?: number | null;
		Games?: number | null;
		GlobalGameID?: number | null;
		GlobalOpponentID?: number | null;
		GlobalTeamID?: number | null;
		HomeOrAway?: string | null;
		InjuryBodyPart?: string | null;
		InjuryNotes?: string | null;
		InjuryStartDate?: string | null;
		InjuryStatus?: string | null;
		IsGameOver?: boolean | null;
		Minutes?: number | null;
		Name?: string | null;
		OffensiveRebounds?: number | null;
		OffensiveReboundsPercentage?: number | null;
		Opponent?: string | null;
		OpponentID?: number | null;
		OpponentPositionRank?: number | null;
		OpponentRank?: number | null;
		PersonalFouls?: number | null;
		PlayerEfficiencyRating?: number | null;
		PlayerID?: number | null;
		Points?: number | null;
		Position?: string | null;
		Rebounds?: number | null;
		Season?: number | null;
		SeasonType?: number | null;
		StatID?: number | null;
		Steals?: number | null;
		StealsPercentage?: number | null;
		Team?: string | null;
		TeamID?: number | null;
		ThreePointersAttempted?: number | null;
		ThreePointersMade?: number | null;
		ThreePointersPercentage?: number | null;
		TotalReboundsPercentage?: number | null;
		TrueShootingAttempts?: number | null;
		TrueShootingPercentage?: number | null;
		TurnOversPercentage?: number | null;
		Turnovers?: number | null;
		TwoPointersAttempted?: number | null;
		TwoPointersMade?: number | null;
		TwoPointersPercentage?: number | null;
		Updated?: string | null;
		UsageRatePercentage?: number | null;
		YahooPosition?: string | null;
		YahooSalary?: number | null;
	}
	export interface PlayerGameProjectionFormProperties {
		Assists: FormControl<number | null | undefined>,
		AssistsPercentage: FormControl<number | null | undefined>,
		BlockedShots: FormControl<number | null | undefined>,
		BlocksPercentage: FormControl<number | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,
		DefensiveRebounds: FormControl<number | null | undefined>,
		DefensiveReboundsPercentage: FormControl<number | null | undefined>,
		DraftKingsPosition: FormControl<string | null | undefined>,
		DraftKingsSalary: FormControl<number | null | undefined>,
		EffectiveFieldGoalsPercentage: FormControl<number | null | undefined>,
		FanDuelPosition: FormControl<string | null | undefined>,
		FanDuelSalary: FormControl<number | null | undefined>,
		FantasyDataSalary: FormControl<number | null | undefined>,
		FantasyPoints: FormControl<number | null | undefined>,
		FantasyPointsDraftKings: FormControl<number | null | undefined>,
		FantasyPointsFanDuel: FormControl<number | null | undefined>,
		FantasyPointsYahoo: FormControl<number | null | undefined>,
		FieldGoalsAttempted: FormControl<number | null | undefined>,
		FieldGoalsMade: FormControl<number | null | undefined>,
		FieldGoalsPercentage: FormControl<number | null | undefined>,
		FreeThrowsAttempted: FormControl<number | null | undefined>,
		FreeThrowsMade: FormControl<number | null | undefined>,
		FreeThrowsPercentage: FormControl<number | null | undefined>,
		GameID: FormControl<number | null | undefined>,
		Games: FormControl<number | null | undefined>,
		GlobalGameID: FormControl<number | null | undefined>,
		GlobalOpponentID: FormControl<number | null | undefined>,
		GlobalTeamID: FormControl<number | null | undefined>,
		HomeOrAway: FormControl<string | null | undefined>,
		InjuryBodyPart: FormControl<string | null | undefined>,
		InjuryNotes: FormControl<string | null | undefined>,
		InjuryStartDate: FormControl<string | null | undefined>,
		InjuryStatus: FormControl<string | null | undefined>,
		IsGameOver: FormControl<boolean | null | undefined>,
		Minutes: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		OffensiveRebounds: FormControl<number | null | undefined>,
		OffensiveReboundsPercentage: FormControl<number | null | undefined>,
		Opponent: FormControl<string | null | undefined>,
		OpponentID: FormControl<number | null | undefined>,
		OpponentPositionRank: FormControl<number | null | undefined>,
		OpponentRank: FormControl<number | null | undefined>,
		PersonalFouls: FormControl<number | null | undefined>,
		PlayerEfficiencyRating: FormControl<number | null | undefined>,
		PlayerID: FormControl<number | null | undefined>,
		Points: FormControl<number | null | undefined>,
		Position: FormControl<string | null | undefined>,
		Rebounds: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		StatID: FormControl<number | null | undefined>,
		Steals: FormControl<number | null | undefined>,
		StealsPercentage: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
		ThreePointersAttempted: FormControl<number | null | undefined>,
		ThreePointersMade: FormControl<number | null | undefined>,
		ThreePointersPercentage: FormControl<number | null | undefined>,
		TotalReboundsPercentage: FormControl<number | null | undefined>,
		TrueShootingAttempts: FormControl<number | null | undefined>,
		TrueShootingPercentage: FormControl<number | null | undefined>,
		TurnOversPercentage: FormControl<number | null | undefined>,
		Turnovers: FormControl<number | null | undefined>,
		TwoPointersAttempted: FormControl<number | null | undefined>,
		TwoPointersMade: FormControl<number | null | undefined>,
		TwoPointersPercentage: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
		UsageRatePercentage: FormControl<number | null | undefined>,
		YahooPosition: FormControl<string | null | undefined>,
		YahooSalary: FormControl<number | null | undefined>,
	}
	export function CreatePlayerGameProjectionFormGroup() {
		return new FormGroup<PlayerGameProjectionFormProperties>({
			Assists: new FormControl<number | null | undefined>(undefined),
			AssistsPercentage: new FormControl<number | null | undefined>(undefined),
			BlockedShots: new FormControl<number | null | undefined>(undefined),
			BlocksPercentage: new FormControl<number | null | undefined>(undefined),
			DateTime: new FormControl<string | null | undefined>(undefined),
			Day: new FormControl<string | null | undefined>(undefined),
			DefensiveRebounds: new FormControl<number | null | undefined>(undefined),
			DefensiveReboundsPercentage: new FormControl<number | null | undefined>(undefined),
			DraftKingsPosition: new FormControl<string | null | undefined>(undefined),
			DraftKingsSalary: new FormControl<number | null | undefined>(undefined),
			EffectiveFieldGoalsPercentage: new FormControl<number | null | undefined>(undefined),
			FanDuelPosition: new FormControl<string | null | undefined>(undefined),
			FanDuelSalary: new FormControl<number | null | undefined>(undefined),
			FantasyDataSalary: new FormControl<number | null | undefined>(undefined),
			FantasyPoints: new FormControl<number | null | undefined>(undefined),
			FantasyPointsDraftKings: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFanDuel: new FormControl<number | null | undefined>(undefined),
			FantasyPointsYahoo: new FormControl<number | null | undefined>(undefined),
			FieldGoalsAttempted: new FormControl<number | null | undefined>(undefined),
			FieldGoalsMade: new FormControl<number | null | undefined>(undefined),
			FieldGoalsPercentage: new FormControl<number | null | undefined>(undefined),
			FreeThrowsAttempted: new FormControl<number | null | undefined>(undefined),
			FreeThrowsMade: new FormControl<number | null | undefined>(undefined),
			FreeThrowsPercentage: new FormControl<number | null | undefined>(undefined),
			GameID: new FormControl<number | null | undefined>(undefined),
			Games: new FormControl<number | null | undefined>(undefined),
			GlobalGameID: new FormControl<number | null | undefined>(undefined),
			GlobalOpponentID: new FormControl<number | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			HomeOrAway: new FormControl<string | null | undefined>(undefined),
			InjuryBodyPart: new FormControl<string | null | undefined>(undefined),
			InjuryNotes: new FormControl<string | null | undefined>(undefined),
			InjuryStartDate: new FormControl<string | null | undefined>(undefined),
			InjuryStatus: new FormControl<string | null | undefined>(undefined),
			IsGameOver: new FormControl<boolean | null | undefined>(undefined),
			Minutes: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			OffensiveRebounds: new FormControl<number | null | undefined>(undefined),
			OffensiveReboundsPercentage: new FormControl<number | null | undefined>(undefined),
			Opponent: new FormControl<string | null | undefined>(undefined),
			OpponentID: new FormControl<number | null | undefined>(undefined),
			OpponentPositionRank: new FormControl<number | null | undefined>(undefined),
			OpponentRank: new FormControl<number | null | undefined>(undefined),
			PersonalFouls: new FormControl<number | null | undefined>(undefined),
			PlayerEfficiencyRating: new FormControl<number | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			Points: new FormControl<number | null | undefined>(undefined),
			Position: new FormControl<string | null | undefined>(undefined),
			Rebounds: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			StatID: new FormControl<number | null | undefined>(undefined),
			Steals: new FormControl<number | null | undefined>(undefined),
			StealsPercentage: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			ThreePointersAttempted: new FormControl<number | null | undefined>(undefined),
			ThreePointersMade: new FormControl<number | null | undefined>(undefined),
			ThreePointersPercentage: new FormControl<number | null | undefined>(undefined),
			TotalReboundsPercentage: new FormControl<number | null | undefined>(undefined),
			TrueShootingAttempts: new FormControl<number | null | undefined>(undefined),
			TrueShootingPercentage: new FormControl<number | null | undefined>(undefined),
			TurnOversPercentage: new FormControl<number | null | undefined>(undefined),
			Turnovers: new FormControl<number | null | undefined>(undefined),
			TwoPointersAttempted: new FormControl<number | null | undefined>(undefined),
			TwoPointersMade: new FormControl<number | null | undefined>(undefined),
			TwoPointersPercentage: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
			UsageRatePercentage: new FormControl<number | null | undefined>(undefined),
			YahooPosition: new FormControl<string | null | undefined>(undefined),
			YahooSalary: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PlayerSeason {
		Assists?: number | null;
		AssistsPercentage?: number | null;
		BlockedShots?: number | null;
		BlocksPercentage?: number | null;
		DefensiveRebounds?: number | null;
		DefensiveReboundsPercentage?: number | null;
		EffectiveFieldGoalsPercentage?: number | null;
		FantasyPoints?: number | null;
		FantasyPointsDraftKings?: number | null;
		FantasyPointsFanDuel?: number | null;
		FantasyPointsYahoo?: number | null;
		FieldGoalsAttempted?: number | null;
		FieldGoalsMade?: number | null;
		FieldGoalsPercentage?: number | null;
		FreeThrowsAttempted?: number | null;
		FreeThrowsMade?: number | null;
		FreeThrowsPercentage?: number | null;
		Games?: number | null;
		GlobalTeamID?: number | null;
		Minutes?: number | null;
		Name?: string | null;
		OffensiveRebounds?: number | null;
		OffensiveReboundsPercentage?: number | null;
		PersonalFouls?: number | null;
		PlayerEfficiencyRating?: number | null;
		PlayerID?: number | null;
		Points?: number | null;
		Position?: string | null;
		Rebounds?: number | null;
		Season?: number | null;
		SeasonType?: number | null;
		StatID?: number | null;
		Steals?: number | null;
		StealsPercentage?: number | null;
		Team?: string | null;
		TeamID?: number | null;
		ThreePointersAttempted?: number | null;
		ThreePointersMade?: number | null;
		ThreePointersPercentage?: number | null;
		TotalReboundsPercentage?: number | null;
		TrueShootingAttempts?: number | null;
		TrueShootingPercentage?: number | null;
		TurnOversPercentage?: number | null;
		Turnovers?: number | null;
		TwoPointersAttempted?: number | null;
		TwoPointersMade?: number | null;
		TwoPointersPercentage?: number | null;
		Updated?: string | null;
		UsageRatePercentage?: number | null;
	}
	export interface PlayerSeasonFormProperties {
		Assists: FormControl<number | null | undefined>,
		AssistsPercentage: FormControl<number | null | undefined>,
		BlockedShots: FormControl<number | null | undefined>,
		BlocksPercentage: FormControl<number | null | undefined>,
		DefensiveRebounds: FormControl<number | null | undefined>,
		DefensiveReboundsPercentage: FormControl<number | null | undefined>,
		EffectiveFieldGoalsPercentage: FormControl<number | null | undefined>,
		FantasyPoints: FormControl<number | null | undefined>,
		FantasyPointsDraftKings: FormControl<number | null | undefined>,
		FantasyPointsFanDuel: FormControl<number | null | undefined>,
		FantasyPointsYahoo: FormControl<number | null | undefined>,
		FieldGoalsAttempted: FormControl<number | null | undefined>,
		FieldGoalsMade: FormControl<number | null | undefined>,
		FieldGoalsPercentage: FormControl<number | null | undefined>,
		FreeThrowsAttempted: FormControl<number | null | undefined>,
		FreeThrowsMade: FormControl<number | null | undefined>,
		FreeThrowsPercentage: FormControl<number | null | undefined>,
		Games: FormControl<number | null | undefined>,
		GlobalTeamID: FormControl<number | null | undefined>,
		Minutes: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		OffensiveRebounds: FormControl<number | null | undefined>,
		OffensiveReboundsPercentage: FormControl<number | null | undefined>,
		PersonalFouls: FormControl<number | null | undefined>,
		PlayerEfficiencyRating: FormControl<number | null | undefined>,
		PlayerID: FormControl<number | null | undefined>,
		Points: FormControl<number | null | undefined>,
		Position: FormControl<string | null | undefined>,
		Rebounds: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		StatID: FormControl<number | null | undefined>,
		Steals: FormControl<number | null | undefined>,
		StealsPercentage: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
		ThreePointersAttempted: FormControl<number | null | undefined>,
		ThreePointersMade: FormControl<number | null | undefined>,
		ThreePointersPercentage: FormControl<number | null | undefined>,
		TotalReboundsPercentage: FormControl<number | null | undefined>,
		TrueShootingAttempts: FormControl<number | null | undefined>,
		TrueShootingPercentage: FormControl<number | null | undefined>,
		TurnOversPercentage: FormControl<number | null | undefined>,
		Turnovers: FormControl<number | null | undefined>,
		TwoPointersAttempted: FormControl<number | null | undefined>,
		TwoPointersMade: FormControl<number | null | undefined>,
		TwoPointersPercentage: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
		UsageRatePercentage: FormControl<number | null | undefined>,
	}
	export function CreatePlayerSeasonFormGroup() {
		return new FormGroup<PlayerSeasonFormProperties>({
			Assists: new FormControl<number | null | undefined>(undefined),
			AssistsPercentage: new FormControl<number | null | undefined>(undefined),
			BlockedShots: new FormControl<number | null | undefined>(undefined),
			BlocksPercentage: new FormControl<number | null | undefined>(undefined),
			DefensiveRebounds: new FormControl<number | null | undefined>(undefined),
			DefensiveReboundsPercentage: new FormControl<number | null | undefined>(undefined),
			EffectiveFieldGoalsPercentage: new FormControl<number | null | undefined>(undefined),
			FantasyPoints: new FormControl<number | null | undefined>(undefined),
			FantasyPointsDraftKings: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFanDuel: new FormControl<number | null | undefined>(undefined),
			FantasyPointsYahoo: new FormControl<number | null | undefined>(undefined),
			FieldGoalsAttempted: new FormControl<number | null | undefined>(undefined),
			FieldGoalsMade: new FormControl<number | null | undefined>(undefined),
			FieldGoalsPercentage: new FormControl<number | null | undefined>(undefined),
			FreeThrowsAttempted: new FormControl<number | null | undefined>(undefined),
			FreeThrowsMade: new FormControl<number | null | undefined>(undefined),
			FreeThrowsPercentage: new FormControl<number | null | undefined>(undefined),
			Games: new FormControl<number | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			Minutes: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			OffensiveRebounds: new FormControl<number | null | undefined>(undefined),
			OffensiveReboundsPercentage: new FormControl<number | null | undefined>(undefined),
			PersonalFouls: new FormControl<number | null | undefined>(undefined),
			PlayerEfficiencyRating: new FormControl<number | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			Points: new FormControl<number | null | undefined>(undefined),
			Position: new FormControl<string | null | undefined>(undefined),
			Rebounds: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			StatID: new FormControl<number | null | undefined>(undefined),
			Steals: new FormControl<number | null | undefined>(undefined),
			StealsPercentage: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			ThreePointersAttempted: new FormControl<number | null | undefined>(undefined),
			ThreePointersMade: new FormControl<number | null | undefined>(undefined),
			ThreePointersPercentage: new FormControl<number | null | undefined>(undefined),
			TotalReboundsPercentage: new FormControl<number | null | undefined>(undefined),
			TrueShootingAttempts: new FormControl<number | null | undefined>(undefined),
			TrueShootingPercentage: new FormControl<number | null | undefined>(undefined),
			TurnOversPercentage: new FormControl<number | null | undefined>(undefined),
			Turnovers: new FormControl<number | null | undefined>(undefined),
			TwoPointersAttempted: new FormControl<number | null | undefined>(undefined),
			TwoPointersMade: new FormControl<number | null | undefined>(undefined),
			TwoPointersPercentage: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
			UsageRatePercentage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Season {
		ApiSeason?: string | null;
		Description?: string | null;
		EndYear?: number | null;
		PostSeasonStartDate?: string | null;
		RegularSeasonStartDate?: string | null;
		Season1?: number | null;
		StartYear?: number | null;
	}
	export interface SeasonFormProperties {
		ApiSeason: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		EndYear: FormControl<number | null | undefined>,
		PostSeasonStartDate: FormControl<string | null | undefined>,
		RegularSeasonStartDate: FormControl<string | null | undefined>,
		Season1: FormControl<number | null | undefined>,
		StartYear: FormControl<number | null | undefined>,
	}
	export function CreateSeasonFormGroup() {
		return new FormGroup<SeasonFormProperties>({
			ApiSeason: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			EndYear: new FormControl<number | null | undefined>(undefined),
			PostSeasonStartDate: new FormControl<string | null | undefined>(undefined),
			RegularSeasonStartDate: new FormControl<string | null | undefined>(undefined),
			Season1: new FormControl<number | null | undefined>(undefined),
			StartYear: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Stadium {
		Active?: boolean | null;
		Address?: string | null;
		Capacity?: number | null;
		City?: string | null;
		Country?: string | null;
		Name?: string | null;
		StadiumID?: number | null;
		State?: string | null;
		Zip?: string | null;
	}
	export interface StadiumFormProperties {
		Active: FormControl<boolean | null | undefined>,
		Address: FormControl<string | null | undefined>,
		Capacity: FormControl<number | null | undefined>,
		City: FormControl<string | null | undefined>,
		Country: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		StadiumID: FormControl<number | null | undefined>,
		State: FormControl<string | null | undefined>,
		Zip: FormControl<string | null | undefined>,
	}
	export function CreateStadiumFormGroup() {
		return new FormGroup<StadiumFormProperties>({
			Active: new FormControl<boolean | null | undefined>(undefined),
			Address: new FormControl<string | null | undefined>(undefined),
			Capacity: new FormControl<number | null | undefined>(undefined),
			City: new FormControl<string | null | undefined>(undefined),
			Country: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			StadiumID: new FormControl<number | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
			Zip: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TeamSeason {
		Assists?: number | null;
		AssistsPercentage?: number | null;
		BlockedShots?: number | null;
		BlocksPercentage?: number | null;
		ConferenceLosses?: number | null;
		ConferenceWins?: number | null;
		DefensiveRebounds?: number | null;
		DefensiveReboundsPercentage?: number | null;
		EffectiveFieldGoalsPercentage?: number | null;
		FantasyPoints?: number | null;
		FantasyPointsDraftKings?: number | null;
		FantasyPointsFanDuel?: number | null;
		FantasyPointsYahoo?: number | null;
		FieldGoalsAttempted?: number | null;
		FieldGoalsMade?: number | null;
		FieldGoalsPercentage?: number | null;
		FreeThrowsAttempted?: number | null;
		FreeThrowsMade?: number | null;
		FreeThrowsPercentage?: number | null;
		Games?: number | null;
		GlobalTeamID?: number | null;
		Losses?: number | null;
		Minutes?: number | null;
		Name?: string | null;
		OffensiveRebounds?: number | null;
		OffensiveReboundsPercentage?: number | null;
		PersonalFouls?: number | null;
		PlayerEfficiencyRating?: number | null;
		Points?: number | null;
		Possessions?: number | null;
		Rebounds?: number | null;
		Season?: number | null;
		SeasonType?: number | null;
		StatID?: number | null;
		Steals?: number | null;
		StealsPercentage?: number | null;
		Team?: string | null;
		TeamID?: number | null;
		ThreePointersAttempted?: number | null;
		ThreePointersMade?: number | null;
		ThreePointersPercentage?: number | null;
		TotalReboundsPercentage?: number | null;
		TrueShootingAttempts?: number | null;
		TrueShootingPercentage?: number | null;
		TurnOversPercentage?: number | null;
		Turnovers?: number | null;
		TwoPointersAttempted?: number | null;
		TwoPointersMade?: number | null;
		TwoPointersPercentage?: number | null;
		Updated?: string | null;
		UsageRatePercentage?: number | null;
		Wins?: number | null;
	}
	export interface TeamSeasonFormProperties {
		Assists: FormControl<number | null | undefined>,
		AssistsPercentage: FormControl<number | null | undefined>,
		BlockedShots: FormControl<number | null | undefined>,
		BlocksPercentage: FormControl<number | null | undefined>,
		ConferenceLosses: FormControl<number | null | undefined>,
		ConferenceWins: FormControl<number | null | undefined>,
		DefensiveRebounds: FormControl<number | null | undefined>,
		DefensiveReboundsPercentage: FormControl<number | null | undefined>,
		EffectiveFieldGoalsPercentage: FormControl<number | null | undefined>,
		FantasyPoints: FormControl<number | null | undefined>,
		FantasyPointsDraftKings: FormControl<number | null | undefined>,
		FantasyPointsFanDuel: FormControl<number | null | undefined>,
		FantasyPointsYahoo: FormControl<number | null | undefined>,
		FieldGoalsAttempted: FormControl<number | null | undefined>,
		FieldGoalsMade: FormControl<number | null | undefined>,
		FieldGoalsPercentage: FormControl<number | null | undefined>,
		FreeThrowsAttempted: FormControl<number | null | undefined>,
		FreeThrowsMade: FormControl<number | null | undefined>,
		FreeThrowsPercentage: FormControl<number | null | undefined>,
		Games: FormControl<number | null | undefined>,
		GlobalTeamID: FormControl<number | null | undefined>,
		Losses: FormControl<number | null | undefined>,
		Minutes: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		OffensiveRebounds: FormControl<number | null | undefined>,
		OffensiveReboundsPercentage: FormControl<number | null | undefined>,
		PersonalFouls: FormControl<number | null | undefined>,
		PlayerEfficiencyRating: FormControl<number | null | undefined>,
		Points: FormControl<number | null | undefined>,
		Possessions: FormControl<number | null | undefined>,
		Rebounds: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		StatID: FormControl<number | null | undefined>,
		Steals: FormControl<number | null | undefined>,
		StealsPercentage: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
		ThreePointersAttempted: FormControl<number | null | undefined>,
		ThreePointersMade: FormControl<number | null | undefined>,
		ThreePointersPercentage: FormControl<number | null | undefined>,
		TotalReboundsPercentage: FormControl<number | null | undefined>,
		TrueShootingAttempts: FormControl<number | null | undefined>,
		TrueShootingPercentage: FormControl<number | null | undefined>,
		TurnOversPercentage: FormControl<number | null | undefined>,
		Turnovers: FormControl<number | null | undefined>,
		TwoPointersAttempted: FormControl<number | null | undefined>,
		TwoPointersMade: FormControl<number | null | undefined>,
		TwoPointersPercentage: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
		UsageRatePercentage: FormControl<number | null | undefined>,
		Wins: FormControl<number | null | undefined>,
	}
	export function CreateTeamSeasonFormGroup() {
		return new FormGroup<TeamSeasonFormProperties>({
			Assists: new FormControl<number | null | undefined>(undefined),
			AssistsPercentage: new FormControl<number | null | undefined>(undefined),
			BlockedShots: new FormControl<number | null | undefined>(undefined),
			BlocksPercentage: new FormControl<number | null | undefined>(undefined),
			ConferenceLosses: new FormControl<number | null | undefined>(undefined),
			ConferenceWins: new FormControl<number | null | undefined>(undefined),
			DefensiveRebounds: new FormControl<number | null | undefined>(undefined),
			DefensiveReboundsPercentage: new FormControl<number | null | undefined>(undefined),
			EffectiveFieldGoalsPercentage: new FormControl<number | null | undefined>(undefined),
			FantasyPoints: new FormControl<number | null | undefined>(undefined),
			FantasyPointsDraftKings: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFanDuel: new FormControl<number | null | undefined>(undefined),
			FantasyPointsYahoo: new FormControl<number | null | undefined>(undefined),
			FieldGoalsAttempted: new FormControl<number | null | undefined>(undefined),
			FieldGoalsMade: new FormControl<number | null | undefined>(undefined),
			FieldGoalsPercentage: new FormControl<number | null | undefined>(undefined),
			FreeThrowsAttempted: new FormControl<number | null | undefined>(undefined),
			FreeThrowsMade: new FormControl<number | null | undefined>(undefined),
			FreeThrowsPercentage: new FormControl<number | null | undefined>(undefined),
			Games: new FormControl<number | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			Losses: new FormControl<number | null | undefined>(undefined),
			Minutes: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			OffensiveRebounds: new FormControl<number | null | undefined>(undefined),
			OffensiveReboundsPercentage: new FormControl<number | null | undefined>(undefined),
			PersonalFouls: new FormControl<number | null | undefined>(undefined),
			PlayerEfficiencyRating: new FormControl<number | null | undefined>(undefined),
			Points: new FormControl<number | null | undefined>(undefined),
			Possessions: new FormControl<number | null | undefined>(undefined),
			Rebounds: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			StatID: new FormControl<number | null | undefined>(undefined),
			Steals: new FormControl<number | null | undefined>(undefined),
			StealsPercentage: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			ThreePointersAttempted: new FormControl<number | null | undefined>(undefined),
			ThreePointersMade: new FormControl<number | null | undefined>(undefined),
			ThreePointersPercentage: new FormControl<number | null | undefined>(undefined),
			TotalReboundsPercentage: new FormControl<number | null | undefined>(undefined),
			TrueShootingAttempts: new FormControl<number | null | undefined>(undefined),
			TrueShootingPercentage: new FormControl<number | null | undefined>(undefined),
			TurnOversPercentage: new FormControl<number | null | undefined>(undefined),
			Turnovers: new FormControl<number | null | undefined>(undefined),
			TwoPointersAttempted: new FormControl<number | null | undefined>(undefined),
			TwoPointersMade: new FormControl<number | null | undefined>(undefined),
			TwoPointersPercentage: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
			UsageRatePercentage: new FormControl<number | null | undefined>(undefined),
			Wins: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Tournament {
		Games?: Array<Game>;
		LeftBottomBracketConference?: string | null;
		LeftTopBracketConference?: string | null;
		Location?: string | null;
		Name?: string | null;
		RightBottomBracketConference?: string | null;
		RightTopBracketConference?: string | null;
		Season?: number | null;
		TournamentID?: number | null;
	}
	export interface TournamentFormProperties {
		LeftBottomBracketConference: FormControl<string | null | undefined>,
		LeftTopBracketConference: FormControl<string | null | undefined>,
		Location: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		RightBottomBracketConference: FormControl<string | null | undefined>,
		RightTopBracketConference: FormControl<string | null | undefined>,
		Season: FormControl<number | null | undefined>,
		TournamentID: FormControl<number | null | undefined>,
	}
	export function CreateTournamentFormGroup() {
		return new FormGroup<TournamentFormProperties>({
			LeftBottomBracketConference: new FormControl<string | null | undefined>(undefined),
			LeftTopBracketConference: new FormControl<string | null | undefined>(undefined),
			Location: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			RightBottomBracketConference: new FormControl<string | null | undefined>(undefined),
			RightTopBracketConference: new FormControl<string | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			TournamentID: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Are Games In Progress
		 * Returns <code>true</code> if there is at least one game being played at the time of the request or <code>false</code> if there are none.
		 * Get {format}/AreAnyGamesInProgress
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {boolean} 
		 */
		AreGamesInProgress(format: AreGamesInProgressFormat): Observable<boolean> {
			return this.http.get<boolean>(this.baseUri + format + '/AreAnyGamesInProgress', {});
		}

		/**
		 * Box Score
		 * Get {format}/BoxScore/{gameid}
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} gameid The GameID of an CBB game.  GameIDs can be found in the Games API.  Valid entries are <code>14620</code> or <code>16905</code>
		 * @return {BoxScore} 
		 */
		BoxScore(format: AreGamesInProgressFormat, gameid: string): Observable<BoxScore> {
			return this.http.get<BoxScore>(this.baseUri + format + '/BoxScore/' + (gameid == null ? '' : encodeURIComponent(gameid)) + '', {});
		}

		/**
		 * Box Scores by Date
		 * Get {format}/BoxScores/{date}
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s).
		 * <br>Examples: <code>2018-FEB-27</code>, <code>2017-DEC-01</code>.
		 * @return {Array<BoxScore>} 
		 */
		BoxScoresByDate(format: AreGamesInProgressFormat, date: string): Observable<Array<BoxScore>> {
			return this.http.get<Array<BoxScore>>(this.baseUri + format + '/BoxScores/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * Box Scores by Date Delta
		 * Get {format}/BoxScoresDelta/{date}/{minutes}
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s).
		 * <br>Examples: <code>2018-FEB-27</code>, <code>2017-DEC-01</code>.
		 * @param {string} minutes Only returns player statistics that have changed in the last X minutes.  You specify how many minutes in time to go back.  Valid entries are:
		 * <code>1</code> or <code>2</code>.
		 * @return {Array<BoxScore>} 
		 */
		BoxScoresByDateDelta(format: AreGamesInProgressFormat, date: string, minutes: string): Observable<Array<BoxScore>> {
			return this.http.get<Array<BoxScore>>(this.baseUri + format + '/BoxScoresDelta/' + (date == null ? '' : encodeURIComponent(date)) + '/' + (minutes == null ? '' : encodeURIComponent(minutes)) + '', {});
		}

		/**
		 * Current Season
		 * Get {format}/CurrentSeason
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Season} 
		 */
		CurrentSeason(format: AreGamesInProgressFormat): Observable<Season> {
			return this.http.get<Season>(this.baseUri + format + '/CurrentSeason', {});
		}

		/**
		 * Schedules
		 * Get {format}/Games/{season}
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.
		 * @return {Array<Game>} 
		 */
		Schedules(format: AreGamesInProgressFormat, season: string): Observable<Array<Game>> {
			return this.http.get<Array<Game>>(this.baseUri + format + '/Games/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * Games by Date
		 * Get {format}/GamesByDate/{date}
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s).
		 * <br>Examples: <code>2018-FEB-27</code>, <code>2017-DEC-01</code>.
		 * @return {Array<Game>} 
		 */
		GamesByDate(format: AreGamesInProgressFormat, date: string): Observable<Array<Game>> {
			return this.http.get<Array<Game>>(this.baseUri + format + '/GamesByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * League Hierarchy
		 * Get {format}/LeagueHierarchy
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<Conference>} 
		 */
		LeagueHierarchy(format: AreGamesInProgressFormat): Observable<Array<Conference>> {
			return this.http.get<Array<Conference>>(this.baseUri + format + '/LeagueHierarchy', {});
		}

		/**
		 * Player Details by Player
		 * Get {format}/Player/{playerid}
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} playerid Unique FantasyData Player ID.
		 * Example:<code>60003802</code>.
		 * @return {Player} 
		 */
		PlayerDetailsByPlayer(format: AreGamesInProgressFormat, playerid: string): Observable<Player> {
			return this.http.get<Player>(this.baseUri + format + '/Player/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}

		/**
		 * Projected Player Game Stats by Date
		 * Get {format}/PlayerGameProjectionStatsByDate/{date}
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s).
		 * <br>Examples: <code>2018-FEB-27</code>, <code>2017-DEC-01</code>.
		 * @return {Array<PlayerGameProjection>} 
		 */
		ProjectedPlayerGameStatsByDate(format: AreGamesInProgressFormat, date: string): Observable<Array<PlayerGameProjection>> {
			return this.http.get<Array<PlayerGameProjection>>(this.baseUri + format + '/PlayerGameProjectionStatsByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * Projected Player Game Stats by Player
		 * Get {format}/PlayerGameProjectionStatsByPlayer/{date}/{playerid}
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s).
		 * <br>Examples: <code>2018-FEB-27</code>, <code>2017-DEC-01</code>.
		 * @param {string} playerid Unique FantasyData Player ID.
		 * Example:<code>60003802</code>.
		 * @return {PlayerGameProjection} 
		 */
		ProjectedPlayerGameStatsByPlayer(format: AreGamesInProgressFormat, date: string, playerid: string): Observable<PlayerGameProjection> {
			return this.http.get<PlayerGameProjection>(this.baseUri + format + '/PlayerGameProjectionStatsByPlayer/' + (date == null ? '' : encodeURIComponent(date)) + '/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}

		/**
		 * Player Game Stats by Date
		 * Get {format}/PlayerGameStatsByDate/{date}
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s).
		 * <br>Examples: <code>2018-FEB-27</code>, <code>2017-DEC-01</code>.
		 * @return {Array<PlayerGame>} 
		 */
		PlayerGameStatsByDate(format: AreGamesInProgressFormat, date: string): Observable<Array<PlayerGame>> {
			return this.http.get<Array<PlayerGame>>(this.baseUri + format + '/PlayerGameStatsByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * Player Game Stats by Player
		 * Get {format}/PlayerGameStatsByPlayer/{date}/{playerid}
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s).
		 * <br>Examples: <code>2018-FEB-27</code>, <code>2017-DEC-01</code>.
		 * @param {string} playerid Unique FantasyData Player ID.
		 * Example:<code>60003802</code>.
		 * @return {PlayerGame} 
		 */
		PlayerGameStatsByPlayer(format: AreGamesInProgressFormat, date: string, playerid: string): Observable<PlayerGame> {
			return this.http.get<PlayerGame>(this.baseUri + format + '/PlayerGameStatsByPlayer/' + (date == null ? '' : encodeURIComponent(date)) + '/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}

		/**
		 * Player Season Stats
		 * Get {format}/PlayerSeasonStats/{season}
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018POST</code>, <code>2019</code>.
		 * @return {Array<PlayerSeason>} 
		 */
		PlayerSeasonStats(format: AreGamesInProgressFormat, season: string): Observable<Array<PlayerSeason>> {
			return this.http.get<Array<PlayerSeason>>(this.baseUri + format + '/PlayerSeasonStats/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * Player Season Stats By Player
		 * Get {format}/PlayerSeasonStatsByPlayer/{season}/{playerid}
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018POST</code>, <code>2019</code>.
		 * @param {string} playerid Unique FantasyData Player ID.
		 * Example:<code>60003802</code>.
		 * @return {PlayerSeason} 
		 */
		PlayerSeasonStatsByPlayer(format: AreGamesInProgressFormat, season: string, playerid: string): Observable<PlayerSeason> {
			return this.http.get<PlayerSeason>(this.baseUri + format + '/PlayerSeasonStatsByPlayer/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}

		/**
		 * Player Season Stats by Team
		 * Get {format}/PlayerSeasonStatsByTeam/{season}/{team}
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018POST</code>, <code>2019</code>.
		 * @param {string} team The abbreviation of the requested team.
		 * <br>Examples: <code>SF</code>, <code>NYY</code>.
		 * @return {Array<PlayerSeason>} 
		 */
		PlayerSeasonStatsByTeam(format: AreGamesInProgressFormat, season: string, team: string): Observable<Array<PlayerSeason>> {
			return this.http.get<Array<PlayerSeason>>(this.baseUri + format + '/PlayerSeasonStatsByTeam/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (team == null ? '' : encodeURIComponent(team)) + '', {});
		}

		/**
		 * Player Details by Active
		 * Get {format}/Players
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<Player>} 
		 */
		PlayerDetailsByActive(format: AreGamesInProgressFormat): Observable<Array<Player>> {
			return this.http.get<Array<Player>>(this.baseUri + format + '/Players', {});
		}

		/**
		 * Player Details by Team
		 * Get {format}/Players/{team}
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} team The abbreviation of the requested team.
		 * <br>Examples: <code>SF</code>, <code>NYY</code>.
		 * @return {Array<Player>} 
		 */
		PlayerDetailsByTeam(format: AreGamesInProgressFormat, team: string): Observable<Array<Player>> {
			return this.http.get<Array<Player>>(this.baseUri + format + '/Players/' + (team == null ? '' : encodeURIComponent(team)) + '', {});
		}

		/**
		 * Stadiums
		 * Get {format}/Stadiums
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<Stadium>} 
		 */
		Stadiums(format: AreGamesInProgressFormat): Observable<Array<Stadium>> {
			return this.http.get<Array<Stadium>>(this.baseUri + format + '/Stadiums', {});
		}

		/**
		 * Team Game Stats by Date
		 * Get {format}/TeamGameStatsByDate/{date}
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s).
		 * <br>Examples: <code>2018-FEB-27</code>, <code>2017-DEC-01</code>.
		 * @return {Array<TeamGame>} 
		 */
		TeamGameStatsByDate(format: AreGamesInProgressFormat, date: string): Observable<Array<TeamGame>> {
			return this.http.get<Array<TeamGame>>(this.baseUri + format + '/TeamGameStatsByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * Team Season Stats
		 * Get {format}/TeamSeasonStats/{season}
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018POST</code>, <code>2019</code>.
		 * @return {Array<TeamSeason>} 
		 */
		TeamSeasonStats(format: AreGamesInProgressFormat, season: string): Observable<Array<TeamSeason>> {
			return this.http.get<Array<TeamSeason>>(this.baseUri + format + '/TeamSeasonStats/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * Tournament Hierarchy
		 * Get {format}/Tournament/{season}
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018POST</code>, <code>2019</code>.
		 * @return {Tournament} 
		 */
		TournamentHierarchy(format: AreGamesInProgressFormat, season: string): Observable<Tournament> {
			return this.http.get<Tournament>(this.baseUri + format + '/Tournament/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * Teams
		 * Get {format}/teams
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<Team>} 
		 */
		Teams(format: AreGamesInProgressFormat): Observable<Array<Team>> {
			return this.http.get<Array<Team>>(this.baseUri + format + '/teams', {});
		}
	}

	export enum AreGamesInProgressFormat { XML = 0, JSON = 1 }

}

