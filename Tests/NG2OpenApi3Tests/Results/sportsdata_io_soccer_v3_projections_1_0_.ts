import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface DfsSlate {
		CompetitionId?: number | null;
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
		CompetitionId: FormControl<number | null | undefined>,
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
			CompetitionId: new FormControl<number | null | undefined>(undefined),
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
		AwayTeamCountryCode?: string | null;
		AwayTeamFormation?: string | null;
		AwayTeamId?: number | null;
		AwayTeamKey?: string | null;
		AwayTeamMoneyLine?: number | null;
		AwayTeamName?: string | null;
		AwayTeamPointSpreadPayout?: number | null;
		AwayTeamScore?: number | null;
		AwayTeamScoreExtraTime?: number | null;
		AwayTeamScorePenalty?: number | null;
		AwayTeamScorePeriod1?: number | null;
		AwayTeamScorePeriod2?: number | null;
		Clock?: number | null;
		ClockDisplay?: string | null;
		ClockExtra?: number | null;
		DateTime?: string | null;
		Day?: string | null;
		DrawMoneyLine?: number | null;
		GameId?: number | null;
		GlobalAwayTeamId?: number | null;
		GlobalGameId?: number | null;
		GlobalHomeTeamId?: number | null;
		Group?: string | null;
		HomeTeamCountryCode?: string | null;
		HomeTeamFormation?: string | null;
		HomeTeamId?: number | null;
		HomeTeamKey?: string | null;
		HomeTeamMoneyLine?: number | null;
		HomeTeamName?: string | null;
		HomeTeamPointSpreadPayout?: number | null;
		HomeTeamScore?: number | null;
		HomeTeamScoreExtraTime?: number | null;
		HomeTeamScorePenalty?: number | null;
		HomeTeamScorePeriod1?: number | null;
		HomeTeamScorePeriod2?: number | null;
		IsClosed?: boolean | null;
		OverPayout?: number | null;
		OverUnder?: number | null;
		Period?: string | null;
		PlayoffAggregateScore?: PlayoffAggregateScore;
		PointSpread?: number | null;
		RoundId?: number | null;
		Season?: number | null;
		SeasonType?: number | null;
		Status?: string | null;
		UnderPayout?: number | null;
		Updated?: string | null;
		UpdatedUtc?: string | null;
		VenueId?: number | null;
		VenueType?: string | null;
		Week?: number | null;
		Winner?: string | null;
	}
	export interface GameFormProperties {
		Attendance: FormControl<number | null | undefined>,
		AwayTeamCountryCode: FormControl<string | null | undefined>,
		AwayTeamFormation: FormControl<string | null | undefined>,
		AwayTeamId: FormControl<number | null | undefined>,
		AwayTeamKey: FormControl<string | null | undefined>,
		AwayTeamMoneyLine: FormControl<number | null | undefined>,
		AwayTeamName: FormControl<string | null | undefined>,
		AwayTeamPointSpreadPayout: FormControl<number | null | undefined>,
		AwayTeamScore: FormControl<number | null | undefined>,
		AwayTeamScoreExtraTime: FormControl<number | null | undefined>,
		AwayTeamScorePenalty: FormControl<number | null | undefined>,
		AwayTeamScorePeriod1: FormControl<number | null | undefined>,
		AwayTeamScorePeriod2: FormControl<number | null | undefined>,
		Clock: FormControl<number | null | undefined>,
		ClockDisplay: FormControl<string | null | undefined>,
		ClockExtra: FormControl<number | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,
		DrawMoneyLine: FormControl<number | null | undefined>,
		GameId: FormControl<number | null | undefined>,
		GlobalAwayTeamId: FormControl<number | null | undefined>,
		GlobalGameId: FormControl<number | null | undefined>,
		GlobalHomeTeamId: FormControl<number | null | undefined>,
		Group: FormControl<string | null | undefined>,
		HomeTeamCountryCode: FormControl<string | null | undefined>,
		HomeTeamFormation: FormControl<string | null | undefined>,
		HomeTeamId: FormControl<number | null | undefined>,
		HomeTeamKey: FormControl<string | null | undefined>,
		HomeTeamMoneyLine: FormControl<number | null | undefined>,
		HomeTeamName: FormControl<string | null | undefined>,
		HomeTeamPointSpreadPayout: FormControl<number | null | undefined>,
		HomeTeamScore: FormControl<number | null | undefined>,
		HomeTeamScoreExtraTime: FormControl<number | null | undefined>,
		HomeTeamScorePenalty: FormControl<number | null | undefined>,
		HomeTeamScorePeriod1: FormControl<number | null | undefined>,
		HomeTeamScorePeriod2: FormControl<number | null | undefined>,
		IsClosed: FormControl<boolean | null | undefined>,
		OverPayout: FormControl<number | null | undefined>,
		OverUnder: FormControl<number | null | undefined>,
		Period: FormControl<string | null | undefined>,
		PointSpread: FormControl<number | null | undefined>,
		RoundId: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,
		UnderPayout: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
		UpdatedUtc: FormControl<string | null | undefined>,
		VenueId: FormControl<number | null | undefined>,
		VenueType: FormControl<string | null | undefined>,
		Week: FormControl<number | null | undefined>,
		Winner: FormControl<string | null | undefined>,
	}
	export function CreateGameFormGroup() {
		return new FormGroup<GameFormProperties>({
			Attendance: new FormControl<number | null | undefined>(undefined),
			AwayTeamCountryCode: new FormControl<string | null | undefined>(undefined),
			AwayTeamFormation: new FormControl<string | null | undefined>(undefined),
			AwayTeamId: new FormControl<number | null | undefined>(undefined),
			AwayTeamKey: new FormControl<string | null | undefined>(undefined),
			AwayTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			AwayTeamName: new FormControl<string | null | undefined>(undefined),
			AwayTeamPointSpreadPayout: new FormControl<number | null | undefined>(undefined),
			AwayTeamScore: new FormControl<number | null | undefined>(undefined),
			AwayTeamScoreExtraTime: new FormControl<number | null | undefined>(undefined),
			AwayTeamScorePenalty: new FormControl<number | null | undefined>(undefined),
			AwayTeamScorePeriod1: new FormControl<number | null | undefined>(undefined),
			AwayTeamScorePeriod2: new FormControl<number | null | undefined>(undefined),
			Clock: new FormControl<number | null | undefined>(undefined),
			ClockDisplay: new FormControl<string | null | undefined>(undefined),
			ClockExtra: new FormControl<number | null | undefined>(undefined),
			DateTime: new FormControl<string | null | undefined>(undefined),
			Day: new FormControl<string | null | undefined>(undefined),
			DrawMoneyLine: new FormControl<number | null | undefined>(undefined),
			GameId: new FormControl<number | null | undefined>(undefined),
			GlobalAwayTeamId: new FormControl<number | null | undefined>(undefined),
			GlobalGameId: new FormControl<number | null | undefined>(undefined),
			GlobalHomeTeamId: new FormControl<number | null | undefined>(undefined),
			Group: new FormControl<string | null | undefined>(undefined),
			HomeTeamCountryCode: new FormControl<string | null | undefined>(undefined),
			HomeTeamFormation: new FormControl<string | null | undefined>(undefined),
			HomeTeamId: new FormControl<number | null | undefined>(undefined),
			HomeTeamKey: new FormControl<string | null | undefined>(undefined),
			HomeTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			HomeTeamName: new FormControl<string | null | undefined>(undefined),
			HomeTeamPointSpreadPayout: new FormControl<number | null | undefined>(undefined),
			HomeTeamScore: new FormControl<number | null | undefined>(undefined),
			HomeTeamScoreExtraTime: new FormControl<number | null | undefined>(undefined),
			HomeTeamScorePenalty: new FormControl<number | null | undefined>(undefined),
			HomeTeamScorePeriod1: new FormControl<number | null | undefined>(undefined),
			HomeTeamScorePeriod2: new FormControl<number | null | undefined>(undefined),
			IsClosed: new FormControl<boolean | null | undefined>(undefined),
			OverPayout: new FormControl<number | null | undefined>(undefined),
			OverUnder: new FormControl<number | null | undefined>(undefined),
			Period: new FormControl<string | null | undefined>(undefined),
			PointSpread: new FormControl<number | null | undefined>(undefined),
			RoundId: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			UnderPayout: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
			UpdatedUtc: new FormControl<string | null | undefined>(undefined),
			VenueId: new FormControl<number | null | undefined>(undefined),
			VenueType: new FormControl<string | null | undefined>(undefined),
			Week: new FormControl<number | null | undefined>(undefined),
			Winner: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Player {
		BirthCity?: string | null;
		BirthCountry?: string | null;
		BirthDate?: string | null;
		CommonName?: string | null;
		DraftKingsPosition?: string | null;
		FirstName?: string | null;
		Foot?: string | null;
		Gender?: string | null;
		Height?: number | null;
		InjuryBodyPart?: string | null;
		InjuryNotes?: string | null;
		InjuryStartDate?: string | null;
		InjuryStatus?: string | null;
		Jersey?: number | null;
		LastName?: string | null;
		Nationality?: string | null;
		PhotoUrl?: string | null;
		PlayerId?: number | null;
		Position?: string | null;
		PositionCategory?: string | null;
		RotoWirePlayerID?: number | null;
		ShortName?: string | null;
		Updated?: string | null;
		UsaTodayHeadshotNoBackgroundUpdated?: string | null;
		UsaTodayHeadshotNoBackgroundUrl?: string | null;
		UsaTodayHeadshotUpdated?: string | null;
		UsaTodayHeadshotUrl?: string | null;
		UsaTodayPlayerID?: number | null;
		Weight?: number | null;
	}
	export interface PlayerFormProperties {
		BirthCity: FormControl<string | null | undefined>,
		BirthCountry: FormControl<string | null | undefined>,
		BirthDate: FormControl<string | null | undefined>,
		CommonName: FormControl<string | null | undefined>,
		DraftKingsPosition: FormControl<string | null | undefined>,
		FirstName: FormControl<string | null | undefined>,
		Foot: FormControl<string | null | undefined>,
		Gender: FormControl<string | null | undefined>,
		Height: FormControl<number | null | undefined>,
		InjuryBodyPart: FormControl<string | null | undefined>,
		InjuryNotes: FormControl<string | null | undefined>,
		InjuryStartDate: FormControl<string | null | undefined>,
		InjuryStatus: FormControl<string | null | undefined>,
		Jersey: FormControl<number | null | undefined>,
		LastName: FormControl<string | null | undefined>,
		Nationality: FormControl<string | null | undefined>,
		PhotoUrl: FormControl<string | null | undefined>,
		PlayerId: FormControl<number | null | undefined>,
		Position: FormControl<string | null | undefined>,
		PositionCategory: FormControl<string | null | undefined>,
		RotoWirePlayerID: FormControl<number | null | undefined>,
		ShortName: FormControl<string | null | undefined>,
		Updated: FormControl<string | null | undefined>,
		UsaTodayHeadshotNoBackgroundUpdated: FormControl<string | null | undefined>,
		UsaTodayHeadshotNoBackgroundUrl: FormControl<string | null | undefined>,
		UsaTodayHeadshotUpdated: FormControl<string | null | undefined>,
		UsaTodayHeadshotUrl: FormControl<string | null | undefined>,
		UsaTodayPlayerID: FormControl<number | null | undefined>,
		Weight: FormControl<number | null | undefined>,
	}
	export function CreatePlayerFormGroup() {
		return new FormGroup<PlayerFormProperties>({
			BirthCity: new FormControl<string | null | undefined>(undefined),
			BirthCountry: new FormControl<string | null | undefined>(undefined),
			BirthDate: new FormControl<string | null | undefined>(undefined),
			CommonName: new FormControl<string | null | undefined>(undefined),
			DraftKingsPosition: new FormControl<string | null | undefined>(undefined),
			FirstName: new FormControl<string | null | undefined>(undefined),
			Foot: new FormControl<string | null | undefined>(undefined),
			Gender: new FormControl<string | null | undefined>(undefined),
			Height: new FormControl<number | null | undefined>(undefined),
			InjuryBodyPart: new FormControl<string | null | undefined>(undefined),
			InjuryNotes: new FormControl<string | null | undefined>(undefined),
			InjuryStartDate: new FormControl<string | null | undefined>(undefined),
			InjuryStatus: new FormControl<string | null | undefined>(undefined),
			Jersey: new FormControl<number | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
			Nationality: new FormControl<string | null | undefined>(undefined),
			PhotoUrl: new FormControl<string | null | undefined>(undefined),
			PlayerId: new FormControl<number | null | undefined>(undefined),
			Position: new FormControl<string | null | undefined>(undefined),
			PositionCategory: new FormControl<string | null | undefined>(undefined),
			RotoWirePlayerID: new FormControl<number | null | undefined>(undefined),
			ShortName: new FormControl<string | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
			UsaTodayHeadshotNoBackgroundUpdated: new FormControl<string | null | undefined>(undefined),
			UsaTodayHeadshotNoBackgroundUrl: new FormControl<string | null | undefined>(undefined),
			UsaTodayHeadshotUpdated: new FormControl<string | null | undefined>(undefined),
			UsaTodayHeadshotUrl: new FormControl<string | null | undefined>(undefined),
			UsaTodayPlayerID: new FormControl<number | null | undefined>(undefined),
			Weight: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PlayerGameProjection {
		Assists?: number | null;
		BlockedShots?: number | null;
		Captain?: boolean | null;
		CornersWon?: number | null;
		Crosses?: number | null;
		DateTime?: string | null;
		Day?: string | null;
		DefenderCleanSheets?: number | null;
		DraftKingsPosition?: string | null;
		DraftKingsSalary?: number | null;
		FanDuelPosition?: string | null;
		FanDuelSalary?: number | null;
		FantasyPoints?: number | null;
		FantasyPointsDraftKings?: number | null;
		FantasyPointsFanDuel?: number | null;
		FantasyPointsMondogoal?: number | null;
		FantasyPointsYahoo?: number | null;
		Fouled?: number | null;
		Fouls?: number | null;
		GameId?: number | null;
		Games?: number | null;
		GlobalGameId?: number | null;
		GlobalOpponentId?: number | null;
		GlobalTeamId?: number | null;
		GoalkeeperCleanSheets?: number | null;
		GoalkeeperGoalsAgainst?: number | null;
		GoalkeeperSaves?: number | null;
		GoalkeeperSingleGoalAgainst?: number | null;
		GoalkeeperWins?: number | null;
		Goals?: number | null;
		HomeOrAway?: string | null;
		InjuryBodyPart?: string | null;
		InjuryNotes?: string | null;
		InjuryStartDate?: string | null;
		InjuryStatus?: string | null;
		Interceptions?: number | null;
		IsGameOver?: boolean | null;
		Jersey?: number | null;
		LastManTackle?: number | null;
		Minutes?: number | null;
		MondogoalPosition?: string | null;
		MondogoalSalary?: number | null;
		Name?: string | null;
		Offsides?: number | null;
		Opponent?: string | null;
		OpponentId?: number | null;
		OpponentScore?: number | null;
		OwnGoals?: number | null;
		Passes?: number | null;
		PassesCompleted?: number | null;
		PenaltiesConceded?: number | null;
		PenaltiesWon?: number | null;
		PenaltyKickGoals?: number | null;
		PenaltyKickMisses?: number | null;
		PenaltyKickSaves?: number | null;
		PlayerId?: number | null;
		Position?: string | null;
		PositionCategory?: string | null;
		RedCards?: number | null;
		RoundId?: number | null;
		Score?: number | null;
		Season?: number | null;
		SeasonType?: number | null;
		ShortName?: string | null;
		Shots?: number | null;
		ShotsOnGoal?: number | null;
		Started?: number | null;
		StatId?: number | null;
		Suspension?: boolean | null;
		SuspensionReason?: string | null;
		Tackles?: number | null;
		TacklesWon?: number | null;
		Team?: string | null;
		TeamId?: number | null;
		Touches?: number | null;
		Updated?: string | null;
		UpdatedUtc?: string | null;
		YahooPosition?: string | null;
		YahooSalary?: number | null;
		YellowCards?: number | null;
		YellowRedCards?: number | null;
	}
	export interface PlayerGameProjectionFormProperties {
		Assists: FormControl<number | null | undefined>,
		BlockedShots: FormControl<number | null | undefined>,
		Captain: FormControl<boolean | null | undefined>,
		CornersWon: FormControl<number | null | undefined>,
		Crosses: FormControl<number | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,
		DefenderCleanSheets: FormControl<number | null | undefined>,
		DraftKingsPosition: FormControl<string | null | undefined>,
		DraftKingsSalary: FormControl<number | null | undefined>,
		FanDuelPosition: FormControl<string | null | undefined>,
		FanDuelSalary: FormControl<number | null | undefined>,
		FantasyPoints: FormControl<number | null | undefined>,
		FantasyPointsDraftKings: FormControl<number | null | undefined>,
		FantasyPointsFanDuel: FormControl<number | null | undefined>,
		FantasyPointsMondogoal: FormControl<number | null | undefined>,
		FantasyPointsYahoo: FormControl<number | null | undefined>,
		Fouled: FormControl<number | null | undefined>,
		Fouls: FormControl<number | null | undefined>,
		GameId: FormControl<number | null | undefined>,
		Games: FormControl<number | null | undefined>,
		GlobalGameId: FormControl<number | null | undefined>,
		GlobalOpponentId: FormControl<number | null | undefined>,
		GlobalTeamId: FormControl<number | null | undefined>,
		GoalkeeperCleanSheets: FormControl<number | null | undefined>,
		GoalkeeperGoalsAgainst: FormControl<number | null | undefined>,
		GoalkeeperSaves: FormControl<number | null | undefined>,
		GoalkeeperSingleGoalAgainst: FormControl<number | null | undefined>,
		GoalkeeperWins: FormControl<number | null | undefined>,
		Goals: FormControl<number | null | undefined>,
		HomeOrAway: FormControl<string | null | undefined>,
		InjuryBodyPart: FormControl<string | null | undefined>,
		InjuryNotes: FormControl<string | null | undefined>,
		InjuryStartDate: FormControl<string | null | undefined>,
		InjuryStatus: FormControl<string | null | undefined>,
		Interceptions: FormControl<number | null | undefined>,
		IsGameOver: FormControl<boolean | null | undefined>,
		Jersey: FormControl<number | null | undefined>,
		LastManTackle: FormControl<number | null | undefined>,
		Minutes: FormControl<number | null | undefined>,
		MondogoalPosition: FormControl<string | null | undefined>,
		MondogoalSalary: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Offsides: FormControl<number | null | undefined>,
		Opponent: FormControl<string | null | undefined>,
		OpponentId: FormControl<number | null | undefined>,
		OpponentScore: FormControl<number | null | undefined>,
		OwnGoals: FormControl<number | null | undefined>,
		Passes: FormControl<number | null | undefined>,
		PassesCompleted: FormControl<number | null | undefined>,
		PenaltiesConceded: FormControl<number | null | undefined>,
		PenaltiesWon: FormControl<number | null | undefined>,
		PenaltyKickGoals: FormControl<number | null | undefined>,
		PenaltyKickMisses: FormControl<number | null | undefined>,
		PenaltyKickSaves: FormControl<number | null | undefined>,
		PlayerId: FormControl<number | null | undefined>,
		Position: FormControl<string | null | undefined>,
		PositionCategory: FormControl<string | null | undefined>,
		RedCards: FormControl<number | null | undefined>,
		RoundId: FormControl<number | null | undefined>,
		Score: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		ShortName: FormControl<string | null | undefined>,
		Shots: FormControl<number | null | undefined>,
		ShotsOnGoal: FormControl<number | null | undefined>,
		Started: FormControl<number | null | undefined>,
		StatId: FormControl<number | null | undefined>,
		Suspension: FormControl<boolean | null | undefined>,
		SuspensionReason: FormControl<string | null | undefined>,
		Tackles: FormControl<number | null | undefined>,
		TacklesWon: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,
		TeamId: FormControl<number | null | undefined>,
		Touches: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
		UpdatedUtc: FormControl<string | null | undefined>,
		YahooPosition: FormControl<string | null | undefined>,
		YahooSalary: FormControl<number | null | undefined>,
		YellowCards: FormControl<number | null | undefined>,
		YellowRedCards: FormControl<number | null | undefined>,
	}
	export function CreatePlayerGameProjectionFormGroup() {
		return new FormGroup<PlayerGameProjectionFormProperties>({
			Assists: new FormControl<number | null | undefined>(undefined),
			BlockedShots: new FormControl<number | null | undefined>(undefined),
			Captain: new FormControl<boolean | null | undefined>(undefined),
			CornersWon: new FormControl<number | null | undefined>(undefined),
			Crosses: new FormControl<number | null | undefined>(undefined),
			DateTime: new FormControl<string | null | undefined>(undefined),
			Day: new FormControl<string | null | undefined>(undefined),
			DefenderCleanSheets: new FormControl<number | null | undefined>(undefined),
			DraftKingsPosition: new FormControl<string | null | undefined>(undefined),
			DraftKingsSalary: new FormControl<number | null | undefined>(undefined),
			FanDuelPosition: new FormControl<string | null | undefined>(undefined),
			FanDuelSalary: new FormControl<number | null | undefined>(undefined),
			FantasyPoints: new FormControl<number | null | undefined>(undefined),
			FantasyPointsDraftKings: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFanDuel: new FormControl<number | null | undefined>(undefined),
			FantasyPointsMondogoal: new FormControl<number | null | undefined>(undefined),
			FantasyPointsYahoo: new FormControl<number | null | undefined>(undefined),
			Fouled: new FormControl<number | null | undefined>(undefined),
			Fouls: new FormControl<number | null | undefined>(undefined),
			GameId: new FormControl<number | null | undefined>(undefined),
			Games: new FormControl<number | null | undefined>(undefined),
			GlobalGameId: new FormControl<number | null | undefined>(undefined),
			GlobalOpponentId: new FormControl<number | null | undefined>(undefined),
			GlobalTeamId: new FormControl<number | null | undefined>(undefined),
			GoalkeeperCleanSheets: new FormControl<number | null | undefined>(undefined),
			GoalkeeperGoalsAgainst: new FormControl<number | null | undefined>(undefined),
			GoalkeeperSaves: new FormControl<number | null | undefined>(undefined),
			GoalkeeperSingleGoalAgainst: new FormControl<number | null | undefined>(undefined),
			GoalkeeperWins: new FormControl<number | null | undefined>(undefined),
			Goals: new FormControl<number | null | undefined>(undefined),
			HomeOrAway: new FormControl<string | null | undefined>(undefined),
			InjuryBodyPart: new FormControl<string | null | undefined>(undefined),
			InjuryNotes: new FormControl<string | null | undefined>(undefined),
			InjuryStartDate: new FormControl<string | null | undefined>(undefined),
			InjuryStatus: new FormControl<string | null | undefined>(undefined),
			Interceptions: new FormControl<number | null | undefined>(undefined),
			IsGameOver: new FormControl<boolean | null | undefined>(undefined),
			Jersey: new FormControl<number | null | undefined>(undefined),
			LastManTackle: new FormControl<number | null | undefined>(undefined),
			Minutes: new FormControl<number | null | undefined>(undefined),
			MondogoalPosition: new FormControl<string | null | undefined>(undefined),
			MondogoalSalary: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Offsides: new FormControl<number | null | undefined>(undefined),
			Opponent: new FormControl<string | null | undefined>(undefined),
			OpponentId: new FormControl<number | null | undefined>(undefined),
			OpponentScore: new FormControl<number | null | undefined>(undefined),
			OwnGoals: new FormControl<number | null | undefined>(undefined),
			Passes: new FormControl<number | null | undefined>(undefined),
			PassesCompleted: new FormControl<number | null | undefined>(undefined),
			PenaltiesConceded: new FormControl<number | null | undefined>(undefined),
			PenaltiesWon: new FormControl<number | null | undefined>(undefined),
			PenaltyKickGoals: new FormControl<number | null | undefined>(undefined),
			PenaltyKickMisses: new FormControl<number | null | undefined>(undefined),
			PenaltyKickSaves: new FormControl<number | null | undefined>(undefined),
			PlayerId: new FormControl<number | null | undefined>(undefined),
			Position: new FormControl<string | null | undefined>(undefined),
			PositionCategory: new FormControl<string | null | undefined>(undefined),
			RedCards: new FormControl<number | null | undefined>(undefined),
			RoundId: new FormControl<number | null | undefined>(undefined),
			Score: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			ShortName: new FormControl<string | null | undefined>(undefined),
			Shots: new FormControl<number | null | undefined>(undefined),
			ShotsOnGoal: new FormControl<number | null | undefined>(undefined),
			Started: new FormControl<number | null | undefined>(undefined),
			StatId: new FormControl<number | null | undefined>(undefined),
			Suspension: new FormControl<boolean | null | undefined>(undefined),
			SuspensionReason: new FormControl<string | null | undefined>(undefined),
			Tackles: new FormControl<number | null | undefined>(undefined),
			TacklesWon: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamId: new FormControl<number | null | undefined>(undefined),
			Touches: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
			UpdatedUtc: new FormControl<string | null | undefined>(undefined),
			YahooPosition: new FormControl<string | null | undefined>(undefined),
			YahooSalary: new FormControl<number | null | undefined>(undefined),
			YellowCards: new FormControl<number | null | undefined>(undefined),
			YellowRedCards: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PlayoffAggregateScore {
		Created?: string | null;
		TeamA_AggregateScore?: number | null;
		TeamA_Id?: number | null;
		TeamB_AggregateScore?: number | null;
		TeamB_Id?: number | null;
		Updated?: string | null;
		WinningTeamId?: number | null;
	}
	export interface PlayoffAggregateScoreFormProperties {
		Created: FormControl<string | null | undefined>,
		TeamA_AggregateScore: FormControl<number | null | undefined>,
		TeamA_Id: FormControl<number | null | undefined>,
		TeamB_AggregateScore: FormControl<number | null | undefined>,
		TeamB_Id: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
		WinningTeamId: FormControl<number | null | undefined>,
	}
	export function CreatePlayoffAggregateScoreFormGroup() {
		return new FormGroup<PlayoffAggregateScoreFormProperties>({
			Created: new FormControl<string | null | undefined>(undefined),
			TeamA_AggregateScore: new FormControl<number | null | undefined>(undefined),
			TeamA_Id: new FormControl<number | null | undefined>(undefined),
			TeamB_AggregateScore: new FormControl<number | null | undefined>(undefined),
			TeamB_Id: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
			WinningTeamId: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Dfs Slates By Date
		 * Get {format}/DfsSlatesByDate/{date}
		 * @param {DfsSlatesByDateFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s).
		 * <br>Examples: <code>2020-02-18</code>
		 * @return {Array<DfsSlate>} 
		 */
		DfsSlatesByDate(format: DfsSlatesByDateFormat, date: string): Observable<Array<DfsSlate>> {
			return this.http.get<Array<DfsSlate>>(this.baseUri + format + '/DfsSlatesByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * Injured Players By Competition
		 * This endpoint provides all currently injured soccer players by competition, along with injury details.
		 * Get {format}/InjuredPlayers/{competition}
		 * @param {InjuredPlayersByCompetitionFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} competition An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.
		 * @return {Array<Player>} 
		 */
		InjuredPlayersByCompetition(format: InjuredPlayersByCompetitionFormat, competition: string): Observable<Array<Player>> {
			return this.http.get<Array<Player>>(this.baseUri + format + '/InjuredPlayers/' + (competition == null ? '' : encodeURIComponent(competition)) + '', {});
		}

		/**
		 * Projected Player Game Stats by Competition (w/ DFS Salaries)
		 * Get {format}/PlayerGameProjectionStatsByCompetition/{competition}/{date}
		 * @param {InjuredPlayersByCompetitionFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} competition An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.
		 * @param {string} date The date of the game(s).
		 * <br>Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.
		 * @return {Array<PlayerGameProjection>} 
		 */
		ProjectedPlayerGameStatsByCompetitionWDfsSalaries(format: InjuredPlayersByCompetitionFormat, competition: string, date: string): Observable<Array<PlayerGameProjection>> {
			return this.http.get<Array<PlayerGameProjection>>(this.baseUri + format + '/PlayerGameProjectionStatsByCompetition/' + (competition == null ? '' : encodeURIComponent(competition)) + '/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * Projected Player Game Stats by Date (w/ DFS Salaries)
		 * Get {format}/PlayerGameProjectionStatsByDate/{date}
		 * @param {InjuredPlayersByCompetitionFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s).
		 * <br>Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.
		 * @return {Array<PlayerGameProjection>} 
		 */
		ProjectedPlayerGameStatsByDateWDfsSalaries(format: InjuredPlayersByCompetitionFormat, date: string): Observable<Array<PlayerGameProjection>> {
			return this.http.get<Array<PlayerGameProjection>>(this.baseUri + format + '/PlayerGameProjectionStatsByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * Projected Player Game Stats by Player (w/ DFS Salaries)
		 * Get {format}/PlayerGameProjectionStatsByPlayer/{date}/{playerid}
		 * @param {InjuredPlayersByCompetitionFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s).
		 * <br>Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.
		 * @param {string} playerid Unique FantasyData Player ID.
		 * Example:<code>90026231</code>.
		 * @return {Array<PlayerGameProjection>} 
		 */
		ProjectedPlayerGameStatsByPlayerWDfsSalaries(format: InjuredPlayersByCompetitionFormat, date: string, playerid: string): Observable<Array<PlayerGameProjection>> {
			return this.http.get<Array<PlayerGameProjection>>(this.baseUri + format + '/PlayerGameProjectionStatsByPlayer/' + (date == null ? '' : encodeURIComponent(date)) + '/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}

		/**
		 * Upcoming Dfs Slates By Competition
		 * Get {format}/UpcomingDfsSlatesByCompetition/{competitionId}
		 * @param {DfsSlatesByDateFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} competitionId The Competition Id.
		 * <br>Examples: <code>3</code>
		 * @return {Array<DfsSlate>} 
		 */
		UpcomingDfsSlatesByCompetition(format: DfsSlatesByDateFormat, competitionId: string): Observable<Array<DfsSlate>> {
			return this.http.get<Array<DfsSlate>>(this.baseUri + format + '/UpcomingDfsSlatesByCompetition/' + (competitionId == null ? '' : encodeURIComponent(competitionId)) + '', {});
		}
	}

	export enum DfsSlatesByDateFormat { json = 0, xml = 1 }

	export enum InjuredPlayersByCompetitionFormat { xml = 0, json = 1 }

}

