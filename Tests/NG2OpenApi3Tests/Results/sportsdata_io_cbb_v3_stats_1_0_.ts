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
		PeriodID?: number | null;
		Type?: string | null;
	}
	export interface PeriodFormProperties {

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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Assists?: number | null;

		/** Type: double */
		AssistsPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		BlockedShots?: number | null;

		/** Type: double */
		BlocksPercentage?: number | null;
		DateTime?: string | null;
		Day?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DefensiveRebounds?: number | null;

		/** Type: double */
		DefensiveReboundsPercentage?: number | null;
		DraftKingsPosition?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DraftKingsSalary?: number | null;

		/** Type: double */
		EffectiveFieldGoalsPercentage?: number | null;
		FanDuelPosition?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FanDuelSalary?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FantasyDataSalary?: number | null;

		/** Type: double */
		FantasyPoints?: number | null;

		/** Type: double */
		FantasyPointsDraftKings?: number | null;

		/** Type: double */
		FantasyPointsFanDuel?: number | null;

		/** Type: double */
		FantasyPointsYahoo?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalsAttempted?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalsMade?: number | null;

		/** Type: double */
		FieldGoalsPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FreeThrowsAttempted?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FreeThrowsMade?: number | null;

		/** Type: double */
		FreeThrowsPercentage?: number | null;

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
		HomeOrAway?: string | null;
		InjuryBodyPart?: string | null;
		InjuryNotes?: string | null;
		InjuryStartDate?: string | null;
		InjuryStatus?: string | null;
		IsGameOver?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Minutes?: number | null;
		Name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OffensiveRebounds?: number | null;

		/** Type: double */
		OffensiveReboundsPercentage?: number | null;
		Opponent?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPositionRank?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentRank?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PersonalFouls?: number | null;

		/** Type: double */
		PlayerEfficiencyRating?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Points?: number | null;
		Position?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Rebounds?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StatID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Steals?: number | null;

		/** Type: double */
		StealsPercentage?: number | null;
		Team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ThreePointersAttempted?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ThreePointersMade?: number | null;

		/** Type: double */
		ThreePointersPercentage?: number | null;

		/** Type: double */
		TotalReboundsPercentage?: number | null;

		/** Type: double */
		TrueShootingAttempts?: number | null;

		/** Type: double */
		TrueShootingPercentage?: number | null;

		/** Type: double */
		TurnOversPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Turnovers?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TwoPointersAttempted?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TwoPointersMade?: number | null;

		/** Type: double */
		TwoPointersPercentage?: number | null;
		Updated?: string | null;

		/** Type: double */
		UsageRatePercentage?: number | null;
		YahooPosition?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		YahooSalary?: number | null;
	}
	export interface PlayerGameFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Assists: FormControl<number | null | undefined>,

		/** Type: double */
		AssistsPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		BlockedShots: FormControl<number | null | undefined>,

		/** Type: double */
		BlocksPercentage: FormControl<number | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DefensiveRebounds: FormControl<number | null | undefined>,

		/** Type: double */
		DefensiveReboundsPercentage: FormControl<number | null | undefined>,
		DraftKingsPosition: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DraftKingsSalary: FormControl<number | null | undefined>,

		/** Type: double */
		EffectiveFieldGoalsPercentage: FormControl<number | null | undefined>,
		FanDuelPosition: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FanDuelSalary: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FantasyDataSalary: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPoints: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPointsDraftKings: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPointsFanDuel: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPointsYahoo: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalsAttempted: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalsMade: FormControl<number | null | undefined>,

		/** Type: double */
		FieldGoalsPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FreeThrowsAttempted: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FreeThrowsMade: FormControl<number | null | undefined>,

		/** Type: double */
		FreeThrowsPercentage: FormControl<number | null | undefined>,

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
		HomeOrAway: FormControl<string | null | undefined>,
		InjuryBodyPart: FormControl<string | null | undefined>,
		InjuryNotes: FormControl<string | null | undefined>,
		InjuryStartDate: FormControl<string | null | undefined>,
		InjuryStatus: FormControl<string | null | undefined>,
		IsGameOver: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Minutes: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OffensiveRebounds: FormControl<number | null | undefined>,

		/** Type: double */
		OffensiveReboundsPercentage: FormControl<number | null | undefined>,
		Opponent: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPositionRank: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentRank: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PersonalFouls: FormControl<number | null | undefined>,

		/** Type: double */
		PlayerEfficiencyRating: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Points: FormControl<number | null | undefined>,
		Position: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Rebounds: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StatID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Steals: FormControl<number | null | undefined>,

		/** Type: double */
		StealsPercentage: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ThreePointersAttempted: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ThreePointersMade: FormControl<number | null | undefined>,

		/** Type: double */
		ThreePointersPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		TotalReboundsPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		TrueShootingAttempts: FormControl<number | null | undefined>,

		/** Type: double */
		TrueShootingPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		TurnOversPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Turnovers: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TwoPointersAttempted: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TwoPointersMade: FormControl<number | null | undefined>,

		/** Type: double */
		TwoPointersPercentage: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,

		/** Type: double */
		UsageRatePercentage: FormControl<number | null | undefined>,
		YahooPosition: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Assists?: number | null;

		/** Type: double */
		AssistsPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		BlockedShots?: number | null;

		/** Type: double */
		BlocksPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ConferenceLosses?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ConferenceWins?: number | null;
		DateTime?: string | null;
		Day?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DefensiveRebounds?: number | null;

		/** Type: double */
		DefensiveReboundsPercentage?: number | null;

		/** Type: double */
		EffectiveFieldGoalsPercentage?: number | null;

		/** Type: double */
		FantasyPoints?: number | null;

		/** Type: double */
		FantasyPointsDraftKings?: number | null;

		/** Type: double */
		FantasyPointsFanDuel?: number | null;

		/** Type: double */
		FantasyPointsYahoo?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalsAttempted?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalsMade?: number | null;

		/** Type: double */
		FieldGoalsPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FreeThrowsAttempted?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FreeThrowsMade?: number | null;

		/** Type: double */
		FreeThrowsPercentage?: number | null;

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
		HomeOrAway?: string | null;
		IsGameOver?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Losses?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Minutes?: number | null;
		Name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OffensiveRebounds?: number | null;

		/** Type: double */
		OffensiveReboundsPercentage?: number | null;
		Opponent?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PersonalFouls?: number | null;

		/** Type: double */
		PlayerEfficiencyRating?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Points?: number | null;

		/** Type: double */
		Possessions?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Rebounds?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StatID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Steals?: number | null;

		/** Type: double */
		StealsPercentage?: number | null;
		Team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ThreePointersAttempted?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ThreePointersMade?: number | null;

		/** Type: double */
		ThreePointersPercentage?: number | null;

		/** Type: double */
		TotalReboundsPercentage?: number | null;

		/** Type: double */
		TrueShootingAttempts?: number | null;

		/** Type: double */
		TrueShootingPercentage?: number | null;

		/** Type: double */
		TurnOversPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Turnovers?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TwoPointersAttempted?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TwoPointersMade?: number | null;

		/** Type: double */
		TwoPointersPercentage?: number | null;
		Updated?: string | null;

		/** Type: double */
		UsageRatePercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Wins?: number | null;
	}
	export interface TeamGameFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Assists: FormControl<number | null | undefined>,

		/** Type: double */
		AssistsPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		BlockedShots: FormControl<number | null | undefined>,

		/** Type: double */
		BlocksPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ConferenceLosses: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ConferenceWins: FormControl<number | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DefensiveRebounds: FormControl<number | null | undefined>,

		/** Type: double */
		DefensiveReboundsPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		EffectiveFieldGoalsPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPoints: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPointsDraftKings: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPointsFanDuel: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPointsYahoo: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalsAttempted: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalsMade: FormControl<number | null | undefined>,

		/** Type: double */
		FieldGoalsPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FreeThrowsAttempted: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FreeThrowsMade: FormControl<number | null | undefined>,

		/** Type: double */
		FreeThrowsPercentage: FormControl<number | null | undefined>,

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
		HomeOrAway: FormControl<string | null | undefined>,
		IsGameOver: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Losses: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Minutes: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OffensiveRebounds: FormControl<number | null | undefined>,

		/** Type: double */
		OffensiveReboundsPercentage: FormControl<number | null | undefined>,
		Opponent: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PersonalFouls: FormControl<number | null | undefined>,

		/** Type: double */
		PlayerEfficiencyRating: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Points: FormControl<number | null | undefined>,

		/** Type: double */
		Possessions: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Rebounds: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StatID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Steals: FormControl<number | null | undefined>,

		/** Type: double */
		StealsPercentage: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ThreePointersAttempted: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ThreePointersMade: FormControl<number | null | undefined>,

		/** Type: double */
		ThreePointersPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		TotalReboundsPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		TrueShootingAttempts: FormControl<number | null | undefined>,

		/** Type: double */
		TrueShootingPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		TurnOversPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Turnovers: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TwoPointersAttempted: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TwoPointersMade: FormControl<number | null | undefined>,

		/** Type: double */
		TwoPointersPercentage: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,

		/** Type: double */
		UsageRatePercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ConferenceID?: number | null;
		Name?: string | null;
		Teams?: Array<Team>;
	}
	export interface ConferenceFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ApRank?: number | null;
		Conference?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ConferenceID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ConferenceLosses?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ConferenceWins?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID?: number | null;
		Key?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Losses?: number | null;
		Name?: string | null;
		School?: string | null;
		ShortDisplayName?: string | null;
		Stadium?: Stadium;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID?: number | null;
		TeamLogoUrl?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Wins?: number | null;
	}
	export interface TeamFormProperties {
		Active: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ApRank: FormControl<number | null | undefined>,
		Conference: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ConferenceID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ConferenceLosses: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ConferenceWins: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID: FormControl<number | null | undefined>,
		Key: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Losses: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		School: FormControl<string | null | undefined>,
		ShortDisplayName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID: FormControl<number | null | undefined>,
		TeamLogoUrl: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Wins: FormControl<number | null | undefined>,
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
			Key: new FormControl<string | null | undefined>(undefined),
			Losses: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			School: new FormControl<string | null | undefined>(undefined),
			ShortDisplayName: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			TeamLogoUrl: new FormControl<string | null | undefined>(undefined),
			Wins: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Game {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Attendance?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayPointSpreadPayout?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayRotationNumber?: number | null;
		AwayTeam?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamMoneyLine?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamPreviousGameID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamPreviousGlobalGameID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamScore?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamSeed?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		BottomTeamPreviousGameId?: number | null;
		Bracket?: string | null;
		Channel?: string | null;
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
		HomePointSpreadPayout?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeRotationNumber?: number | null;
		HomeTeam?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamMoneyLine?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamPreviousGameID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamPreviousGlobalGameID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamScore?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamSeed?: number | null;
		IsClosed?: boolean | null;
		NeutralVenue?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OverPayout?: number | null;

		/** Type: double */
		OverUnder?: number | null;
		Period?: string | null;
		Periods?: Array<Period>;

		/** Type: double */
		PointSpread?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Round?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType?: number | null;
		Stadium?: Stadium;
		Status?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimeRemainingMinutes?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimeRemainingSeconds?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TopTeamPreviousGameId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TournamentDisplayOrder?: number | null;
		TournamentDisplayOrderForHomeTeam?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TournamentID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UnderPayout?: number | null;
		Updated?: string | null;
	}
	export interface GameFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Attendance: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayPointSpreadPayout: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayRotationNumber: FormControl<number | null | undefined>,
		AwayTeam: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamMoneyLine: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamPreviousGameID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamPreviousGlobalGameID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamScore: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamSeed: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		BottomTeamPreviousGameId: FormControl<number | null | undefined>,
		Bracket: FormControl<string | null | undefined>,
		Channel: FormControl<string | null | undefined>,
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
		HomePointSpreadPayout: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeRotationNumber: FormControl<number | null | undefined>,
		HomeTeam: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamMoneyLine: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamPreviousGameID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamPreviousGlobalGameID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamScore: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamSeed: FormControl<number | null | undefined>,
		IsClosed: FormControl<boolean | null | undefined>,
		NeutralVenue: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OverPayout: FormControl<number | null | undefined>,

		/** Type: double */
		OverUnder: FormControl<number | null | undefined>,
		Period: FormControl<string | null | undefined>,

		/** Type: double */
		PointSpread: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Round: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimeRemainingMinutes: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimeRemainingSeconds: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TopTeamPreviousGameId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TournamentDisplayOrder: FormControl<number | null | undefined>,
		TournamentDisplayOrderForHomeTeam: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TournamentID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UnderPayout: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
	}
	export function CreateGameFormGroup() {
		return new FormGroup<GameFormProperties>({
			Attendance: new FormControl<number | null | undefined>(undefined),
			AwayPointSpreadPayout: new FormControl<number | null | undefined>(undefined),
			AwayRotationNumber: new FormControl<number | null | undefined>(undefined),
			AwayTeam: new FormControl<string | null | undefined>(undefined),
			AwayTeamID: new FormControl<number | null | undefined>(undefined),
			AwayTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			AwayTeamPreviousGameID: new FormControl<number | null | undefined>(undefined),
			AwayTeamPreviousGlobalGameID: new FormControl<number | null | undefined>(undefined),
			AwayTeamScore: new FormControl<number | null | undefined>(undefined),
			AwayTeamSeed: new FormControl<number | null | undefined>(undefined),
			BottomTeamPreviousGameId: new FormControl<number | null | undefined>(undefined),
			Bracket: new FormControl<string | null | undefined>(undefined),
			Channel: new FormControl<string | null | undefined>(undefined),
			DateTime: new FormControl<string | null | undefined>(undefined),
			DateTimeUTC: new FormControl<string | null | undefined>(undefined),
			Day: new FormControl<string | null | undefined>(undefined),
			GameEndDateTime: new FormControl<string | null | undefined>(undefined),
			GameID: new FormControl<number | null | undefined>(undefined),
			GlobalAwayTeamID: new FormControl<number | null | undefined>(undefined),
			GlobalGameID: new FormControl<number | null | undefined>(undefined),
			GlobalHomeTeamID: new FormControl<number | null | undefined>(undefined),
			HomePointSpreadPayout: new FormControl<number | null | undefined>(undefined),
			HomeRotationNumber: new FormControl<number | null | undefined>(undefined),
			HomeTeam: new FormControl<string | null | undefined>(undefined),
			HomeTeamID: new FormControl<number | null | undefined>(undefined),
			HomeTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			HomeTeamPreviousGameID: new FormControl<number | null | undefined>(undefined),
			HomeTeamPreviousGlobalGameID: new FormControl<number | null | undefined>(undefined),
			HomeTeamScore: new FormControl<number | null | undefined>(undefined),
			HomeTeamSeed: new FormControl<number | null | undefined>(undefined),
			IsClosed: new FormControl<boolean | null | undefined>(undefined),
			NeutralVenue: new FormControl<boolean | null | undefined>(undefined),
			OverPayout: new FormControl<number | null | undefined>(undefined),
			OverUnder: new FormControl<number | null | undefined>(undefined),
			Period: new FormControl<string | null | undefined>(undefined),
			PointSpread: new FormControl<number | null | undefined>(undefined),
			Round: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			TimeRemainingMinutes: new FormControl<number | null | undefined>(undefined),
			TimeRemainingSeconds: new FormControl<number | null | undefined>(undefined),
			TopTeamPreviousGameId: new FormControl<number | null | undefined>(undefined),
			TournamentDisplayOrder: new FormControl<number | null | undefined>(undefined),
			TournamentDisplayOrderForHomeTeam: new FormControl<string | null | undefined>(undefined),
			TournamentID: new FormControl<number | null | undefined>(undefined),
			UnderPayout: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Player {
		BirthCity?: string | null;
		BirthState?: string | null;
		Class?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FantasyAlarmPlayerID?: number | null;
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
		PlayerID?: number | null;
		Position?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RotoWirePlayerID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RotoworldPlayerID?: number | null;
		SportRadarPlayerID?: string | null;
		Team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Weight?: number | null;
	}
	export interface PlayerFormProperties {
		BirthCity: FormControl<string | null | undefined>,
		BirthState: FormControl<string | null | undefined>,
		Class: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FantasyAlarmPlayerID: FormControl<number | null | undefined>,
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
		PlayerID: FormControl<number | null | undefined>,
		Position: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RotoWirePlayerID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RotoworldPlayerID: FormControl<number | null | undefined>,
		SportRadarPlayerID: FormControl<string | null | undefined>,
		Team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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
			InjuryBodyPart: new FormControl<string | null | undefined>(undefined),
			InjuryNotes: new FormControl<string | null | undefined>(undefined),
			InjuryStartDate: new FormControl<string | null | undefined>(undefined),
			InjuryStatus: new FormControl<string | null | undefined>(undefined),
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Assists?: number | null;

		/** Type: double */
		AssistsPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		BlockedShots?: number | null;

		/** Type: double */
		BlocksPercentage?: number | null;
		DateTime?: string | null;
		Day?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DefensiveRebounds?: number | null;

		/** Type: double */
		DefensiveReboundsPercentage?: number | null;
		DraftKingsPosition?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DraftKingsSalary?: number | null;

		/** Type: double */
		EffectiveFieldGoalsPercentage?: number | null;
		FanDuelPosition?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FanDuelSalary?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FantasyDataSalary?: number | null;

		/** Type: double */
		FantasyPoints?: number | null;

		/** Type: double */
		FantasyPointsDraftKings?: number | null;

		/** Type: double */
		FantasyPointsFanDuel?: number | null;

		/** Type: double */
		FantasyPointsYahoo?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalsAttempted?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalsMade?: number | null;

		/** Type: double */
		FieldGoalsPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FreeThrowsAttempted?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FreeThrowsMade?: number | null;

		/** Type: double */
		FreeThrowsPercentage?: number | null;

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
		HomeOrAway?: string | null;
		InjuryBodyPart?: string | null;
		InjuryNotes?: string | null;
		InjuryStartDate?: string | null;
		InjuryStatus?: string | null;
		IsGameOver?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Minutes?: number | null;
		Name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OffensiveRebounds?: number | null;

		/** Type: double */
		OffensiveReboundsPercentage?: number | null;
		Opponent?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPositionRank?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentRank?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PersonalFouls?: number | null;

		/** Type: double */
		PlayerEfficiencyRating?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Points?: number | null;
		Position?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Rebounds?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StatID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Steals?: number | null;

		/** Type: double */
		StealsPercentage?: number | null;
		Team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ThreePointersAttempted?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ThreePointersMade?: number | null;

		/** Type: double */
		ThreePointersPercentage?: number | null;

		/** Type: double */
		TotalReboundsPercentage?: number | null;

		/** Type: double */
		TrueShootingAttempts?: number | null;

		/** Type: double */
		TrueShootingPercentage?: number | null;

		/** Type: double */
		TurnOversPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Turnovers?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TwoPointersAttempted?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TwoPointersMade?: number | null;

		/** Type: double */
		TwoPointersPercentage?: number | null;
		Updated?: string | null;

		/** Type: double */
		UsageRatePercentage?: number | null;
		YahooPosition?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		YahooSalary?: number | null;
	}
	export interface PlayerGameProjectionFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Assists: FormControl<number | null | undefined>,

		/** Type: double */
		AssistsPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		BlockedShots: FormControl<number | null | undefined>,

		/** Type: double */
		BlocksPercentage: FormControl<number | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DefensiveRebounds: FormControl<number | null | undefined>,

		/** Type: double */
		DefensiveReboundsPercentage: FormControl<number | null | undefined>,
		DraftKingsPosition: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DraftKingsSalary: FormControl<number | null | undefined>,

		/** Type: double */
		EffectiveFieldGoalsPercentage: FormControl<number | null | undefined>,
		FanDuelPosition: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FanDuelSalary: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FantasyDataSalary: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPoints: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPointsDraftKings: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPointsFanDuel: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPointsYahoo: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalsAttempted: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalsMade: FormControl<number | null | undefined>,

		/** Type: double */
		FieldGoalsPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FreeThrowsAttempted: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FreeThrowsMade: FormControl<number | null | undefined>,

		/** Type: double */
		FreeThrowsPercentage: FormControl<number | null | undefined>,

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
		HomeOrAway: FormControl<string | null | undefined>,
		InjuryBodyPart: FormControl<string | null | undefined>,
		InjuryNotes: FormControl<string | null | undefined>,
		InjuryStartDate: FormControl<string | null | undefined>,
		InjuryStatus: FormControl<string | null | undefined>,
		IsGameOver: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Minutes: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OffensiveRebounds: FormControl<number | null | undefined>,

		/** Type: double */
		OffensiveReboundsPercentage: FormControl<number | null | undefined>,
		Opponent: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPositionRank: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentRank: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PersonalFouls: FormControl<number | null | undefined>,

		/** Type: double */
		PlayerEfficiencyRating: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Points: FormControl<number | null | undefined>,
		Position: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Rebounds: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StatID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Steals: FormControl<number | null | undefined>,

		/** Type: double */
		StealsPercentage: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ThreePointersAttempted: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ThreePointersMade: FormControl<number | null | undefined>,

		/** Type: double */
		ThreePointersPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		TotalReboundsPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		TrueShootingAttempts: FormControl<number | null | undefined>,

		/** Type: double */
		TrueShootingPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		TurnOversPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Turnovers: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TwoPointersAttempted: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TwoPointersMade: FormControl<number | null | undefined>,

		/** Type: double */
		TwoPointersPercentage: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,

		/** Type: double */
		UsageRatePercentage: FormControl<number | null | undefined>,
		YahooPosition: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Assists?: number | null;

		/** Type: double */
		AssistsPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		BlockedShots?: number | null;

		/** Type: double */
		BlocksPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DefensiveRebounds?: number | null;

		/** Type: double */
		DefensiveReboundsPercentage?: number | null;

		/** Type: double */
		EffectiveFieldGoalsPercentage?: number | null;

		/** Type: double */
		FantasyPoints?: number | null;

		/** Type: double */
		FantasyPointsDraftKings?: number | null;

		/** Type: double */
		FantasyPointsFanDuel?: number | null;

		/** Type: double */
		FantasyPointsYahoo?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalsAttempted?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalsMade?: number | null;

		/** Type: double */
		FieldGoalsPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FreeThrowsAttempted?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FreeThrowsMade?: number | null;

		/** Type: double */
		FreeThrowsPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Games?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Minutes?: number | null;
		Name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OffensiveRebounds?: number | null;

		/** Type: double */
		OffensiveReboundsPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PersonalFouls?: number | null;

		/** Type: double */
		PlayerEfficiencyRating?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Points?: number | null;
		Position?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Rebounds?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StatID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Steals?: number | null;

		/** Type: double */
		StealsPercentage?: number | null;
		Team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ThreePointersAttempted?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ThreePointersMade?: number | null;

		/** Type: double */
		ThreePointersPercentage?: number | null;

		/** Type: double */
		TotalReboundsPercentage?: number | null;

		/** Type: double */
		TrueShootingAttempts?: number | null;

		/** Type: double */
		TrueShootingPercentage?: number | null;

		/** Type: double */
		TurnOversPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Turnovers?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TwoPointersAttempted?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TwoPointersMade?: number | null;

		/** Type: double */
		TwoPointersPercentage?: number | null;
		Updated?: string | null;

		/** Type: double */
		UsageRatePercentage?: number | null;
	}
	export interface PlayerSeasonFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Assists: FormControl<number | null | undefined>,

		/** Type: double */
		AssistsPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		BlockedShots: FormControl<number | null | undefined>,

		/** Type: double */
		BlocksPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DefensiveRebounds: FormControl<number | null | undefined>,

		/** Type: double */
		DefensiveReboundsPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		EffectiveFieldGoalsPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPoints: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPointsDraftKings: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPointsFanDuel: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPointsYahoo: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalsAttempted: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalsMade: FormControl<number | null | undefined>,

		/** Type: double */
		FieldGoalsPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FreeThrowsAttempted: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FreeThrowsMade: FormControl<number | null | undefined>,

		/** Type: double */
		FreeThrowsPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Games: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Minutes: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OffensiveRebounds: FormControl<number | null | undefined>,

		/** Type: double */
		OffensiveReboundsPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PersonalFouls: FormControl<number | null | undefined>,

		/** Type: double */
		PlayerEfficiencyRating: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Points: FormControl<number | null | undefined>,
		Position: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Rebounds: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StatID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Steals: FormControl<number | null | undefined>,

		/** Type: double */
		StealsPercentage: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ThreePointersAttempted: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ThreePointersMade: FormControl<number | null | undefined>,

		/** Type: double */
		ThreePointersPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		TotalReboundsPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		TrueShootingAttempts: FormControl<number | null | undefined>,

		/** Type: double */
		TrueShootingPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		TurnOversPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Turnovers: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TwoPointersAttempted: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TwoPointersMade: FormControl<number | null | undefined>,

		/** Type: double */
		TwoPointersPercentage: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,

		/** Type: double */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		EndYear?: number | null;
		PostSeasonStartDate?: string | null;
		RegularSeasonStartDate?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season1?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StartYear?: number | null;
	}
	export interface SeasonFormProperties {
		ApiSeason: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		EndYear: FormControl<number | null | undefined>,
		PostSeasonStartDate: FormControl<string | null | undefined>,
		RegularSeasonStartDate: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season1: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Capacity?: number | null;
		City?: string | null;
		Country?: string | null;

		/** Type: double */
		GeoLat?: number | null;

		/** Type: double */
		GeoLong?: number | null;
		Name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StadiumID?: number | null;
		State?: string | null;
		Zip?: string | null;
	}
	export interface StadiumFormProperties {
		Active: FormControl<boolean | null | undefined>,
		Address: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Capacity: FormControl<number | null | undefined>,
		City: FormControl<string | null | undefined>,
		Country: FormControl<string | null | undefined>,

		/** Type: double */
		GeoLat: FormControl<number | null | undefined>,

		/** Type: double */
		GeoLong: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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
			GeoLat: new FormControl<number | null | undefined>(undefined),
			GeoLong: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			StadiumID: new FormControl<number | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
			Zip: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TeamSeason {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Assists?: number | null;

		/** Type: double */
		AssistsPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		BlockedShots?: number | null;

		/** Type: double */
		BlocksPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ConferenceLosses?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ConferenceWins?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DefensiveRebounds?: number | null;

		/** Type: double */
		DefensiveReboundsPercentage?: number | null;

		/** Type: double */
		EffectiveFieldGoalsPercentage?: number | null;

		/** Type: double */
		FantasyPoints?: number | null;

		/** Type: double */
		FantasyPointsDraftKings?: number | null;

		/** Type: double */
		FantasyPointsFanDuel?: number | null;

		/** Type: double */
		FantasyPointsYahoo?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalsAttempted?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalsMade?: number | null;

		/** Type: double */
		FieldGoalsPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FreeThrowsAttempted?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FreeThrowsMade?: number | null;

		/** Type: double */
		FreeThrowsPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Games?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Losses?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Minutes?: number | null;
		Name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OffensiveRebounds?: number | null;

		/** Type: double */
		OffensiveReboundsPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PersonalFouls?: number | null;

		/** Type: double */
		PlayerEfficiencyRating?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Points?: number | null;

		/** Type: double */
		Possessions?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Rebounds?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StatID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Steals?: number | null;

		/** Type: double */
		StealsPercentage?: number | null;
		Team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ThreePointersAttempted?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ThreePointersMade?: number | null;

		/** Type: double */
		ThreePointersPercentage?: number | null;

		/** Type: double */
		TotalReboundsPercentage?: number | null;

		/** Type: double */
		TrueShootingAttempts?: number | null;

		/** Type: double */
		TrueShootingPercentage?: number | null;

		/** Type: double */
		TurnOversPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Turnovers?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TwoPointersAttempted?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TwoPointersMade?: number | null;

		/** Type: double */
		TwoPointersPercentage?: number | null;
		Updated?: string | null;

		/** Type: double */
		UsageRatePercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Wins?: number | null;
	}
	export interface TeamSeasonFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Assists: FormControl<number | null | undefined>,

		/** Type: double */
		AssistsPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		BlockedShots: FormControl<number | null | undefined>,

		/** Type: double */
		BlocksPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ConferenceLosses: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ConferenceWins: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DefensiveRebounds: FormControl<number | null | undefined>,

		/** Type: double */
		DefensiveReboundsPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		EffectiveFieldGoalsPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPoints: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPointsDraftKings: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPointsFanDuel: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPointsYahoo: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalsAttempted: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalsMade: FormControl<number | null | undefined>,

		/** Type: double */
		FieldGoalsPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FreeThrowsAttempted: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FreeThrowsMade: FormControl<number | null | undefined>,

		/** Type: double */
		FreeThrowsPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Games: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Losses: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Minutes: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OffensiveRebounds: FormControl<number | null | undefined>,

		/** Type: double */
		OffensiveReboundsPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PersonalFouls: FormControl<number | null | undefined>,

		/** Type: double */
		PlayerEfficiencyRating: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Points: FormControl<number | null | undefined>,

		/** Type: double */
		Possessions: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Rebounds: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StatID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Steals: FormControl<number | null | undefined>,

		/** Type: double */
		StealsPercentage: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ThreePointersAttempted: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ThreePointersMade: FormControl<number | null | undefined>,

		/** Type: double */
		ThreePointersPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		TotalReboundsPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		TrueShootingAttempts: FormControl<number | null | undefined>,

		/** Type: double */
		TrueShootingPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		TurnOversPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Turnovers: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TwoPointersAttempted: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TwoPointersMade: FormControl<number | null | undefined>,

		/** Type: double */
		TwoPointersPercentage: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,

		/** Type: double */
		UsageRatePercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TournamentID?: number | null;
	}
	export interface TournamentFormProperties {
		LeftBottomBracketConference: FormControl<string | null | undefined>,
		LeftTopBracketConference: FormControl<string | null | undefined>,
		Location: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		RightBottomBracketConference: FormControl<string | null | undefined>,
		RightTopBracketConference: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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
		 */
		AreGamesInProgress(format: AreGamesInProgressFormat): Observable<boolean> {
			return this.http.get<boolean>(this.baseUri + format + '/AreAnyGamesInProgress', {});
		}

		/**
		 * Box Score
		 * Get {format}/BoxScore/{gameid}
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} gameid The GameID of an CBB game.  GameIDs can be found in the Games API.  Valid entries are <code>14620</code> or <code>16905</code>
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
		 */
		BoxScoresByDateDelta(format: AreGamesInProgressFormat, date: string, minutes: string): Observable<Array<BoxScore>> {
			return this.http.get<Array<BoxScore>>(this.baseUri + format + '/BoxScoresDelta/' + (date == null ? '' : encodeURIComponent(date)) + '/' + (minutes == null ? '' : encodeURIComponent(minutes)) + '', {});
		}

		/**
		 * Current Season
		 * Get {format}/CurrentSeason
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 */
		CurrentSeason(format: AreGamesInProgressFormat): Observable<Season> {
			return this.http.get<Season>(this.baseUri + format + '/CurrentSeason', {});
		}

		/**
		 * Schedules
		 * Get {format}/Games/{season}
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.
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
		 */
		GamesByDate(format: AreGamesInProgressFormat, date: string): Observable<Array<Game>> {
			return this.http.get<Array<Game>>(this.baseUri + format + '/GamesByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * Injured Players
		 * This endpoint provides all currently injured college basketball players, along with injury details.
		 * Get {format}/InjuredPlayers
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 */
		InjuredPlayers(format: AreGamesInProgressFormat): Observable<Array<Player>> {
			return this.http.get<Array<Player>>(this.baseUri + format + '/InjuredPlayers', {});
		}

		/**
		 * League Hierarchy
		 * Get {format}/LeagueHierarchy
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
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
		 */
		PlayerGameStatsByPlayer(format: AreGamesInProgressFormat, date: string, playerid: string): Observable<PlayerGame> {
			return this.http.get<PlayerGame>(this.baseUri + format + '/PlayerGameStatsByPlayer/' + (date == null ? '' : encodeURIComponent(date)) + '/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}

		/**
		 * Player Game Logs By Season
		 * Get {format}/PlayerGameStatsBySeason/{season}/{playerid}/{numberofgames}
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Season to get games from. Example <code>2019POST</code>, <code>2020</code>
		 * @param {string} playerid Unique FantasyData Player ID.Example:<code>60008094</code>.
		 * @param {string} numberofgames How many games to return. Example <code>all</code>, <code>10</code>, <code>25</code>
		 */
		PlayerGameLogsBySeason(format: AreGamesInProgressFormat, season: string, playerid: string, numberofgames: string): Observable<Array<PlayerGame>> {
			return this.http.get<Array<PlayerGame>>(this.baseUri + format + '/PlayerGameStatsBySeason/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '/' + (numberofgames == null ? '' : encodeURIComponent(numberofgames)) + '', {});
		}

		/**
		 * Player Season Stats
		 * Get {format}/PlayerSeasonStats/{season}
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018POST</code>, <code>2019</code>.
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
		 */
		PlayerSeasonStatsByTeam(format: AreGamesInProgressFormat, season: string, team: string): Observable<Array<PlayerSeason>> {
			return this.http.get<Array<PlayerSeason>>(this.baseUri + format + '/PlayerSeasonStatsByTeam/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (team == null ? '' : encodeURIComponent(team)) + '', {});
		}

		/**
		 * Player Details by Active
		 * Get {format}/Players
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
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
		 */
		PlayerDetailsByTeam(format: AreGamesInProgressFormat, team: string): Observable<Array<Player>> {
			return this.http.get<Array<Player>>(this.baseUri + format + '/Players/' + (team == null ? '' : encodeURIComponent(team)) + '', {});
		}

		/**
		 * Stadiums
		 * Get {format}/Stadiums
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
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
		 */
		TeamGameStatsByDate(format: AreGamesInProgressFormat, date: string): Observable<Array<TeamGame>> {
			return this.http.get<Array<TeamGame>>(this.baseUri + format + '/TeamGameStatsByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * Team Game Logs By Season
		 * Game by game log of total team statistics.
		 * Get {format}/TeamGameStatsBySeason/{season}/{teamid}/{numberofgames}
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Season to get games from. Example <code>2019POST</code>, <code>2020</code>
		 * @param {string} teamid Unique ID of team.  Example <code> 1 </code>
		 * @param {string} numberofgames How many games to return. Example <code>all</code>, <code>10</code>, <code>25</code>
		 */
		TeamGameLogsBySeason(format: AreGamesInProgressFormat, season: string, teamid: string, numberofgames: string): Observable<Array<TeamGame>> {
			return this.http.get<Array<TeamGame>>(this.baseUri + format + '/TeamGameStatsBySeason/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (teamid == null ? '' : encodeURIComponent(teamid)) + '/' + (numberofgames == null ? '' : encodeURIComponent(numberofgames)) + '', {});
		}

		/**
		 * Team Season Stats
		 * Get {format}/TeamSeasonStats/{season}
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018POST</code>, <code>2019</code>.
		 */
		TeamSeasonStats(format: AreGamesInProgressFormat, season: string): Observable<Array<TeamSeason>> {
			return this.http.get<Array<TeamSeason>>(this.baseUri + format + '/TeamSeasonStats/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * Tournament Hierarchy
		 * Get {format}/Tournament/{season}
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018POST</code>, <code>2019</code>.
		 */
		TournamentHierarchy(format: AreGamesInProgressFormat, season: string): Observable<Tournament> {
			return this.http.get<Tournament>(this.baseUri + format + '/Tournament/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * Teams
		 * Get {format}/teams
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 */
		Teams(format: AreGamesInProgressFormat): Observable<Array<Team>> {
			return this.http.get<Array<Team>>(this.baseUri + format + '/teams', {});
		}
	}

	export enum AreGamesInProgressFormat { XML = 'XML', JSON = 'JSON' }

}

