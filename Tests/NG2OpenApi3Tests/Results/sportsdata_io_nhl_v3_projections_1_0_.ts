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

	export interface Goaltender {
		Confirmed?: boolean | null;
		FirstName?: string | null;
		Jersey?: number | null;
		LastName?: string | null;
		PlayerID?: number | null;
		Team?: string | null;
		TeamID?: number | null;
	}
	export interface GoaltenderFormProperties {
		Confirmed: FormControl<boolean | null | undefined>,
		FirstName: FormControl<string | null | undefined>,
		Jersey: FormControl<number | null | undefined>,
		LastName: FormControl<string | null | undefined>,
		PlayerID: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
	}
	export function CreateGoaltenderFormGroup() {
		return new FormGroup<GoaltenderFormProperties>({
			Confirmed: new FormControl<boolean | null | undefined>(undefined),
			FirstName: new FormControl<string | null | undefined>(undefined),
			Jersey: new FormControl<number | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Player {
		BirthCity?: string | null;
		BirthDate?: string | null;
		BirthState?: string | null;
		Catches?: string | null;
		DepthChartOrder?: number | null;
		DepthChartPosition?: string | null;
		DraftKingsName?: string | null;
		DraftKingsPlayerID?: number | null;
		FanDuelName?: string | null;
		FanDuelPlayerID?: number | null;
		FantasyAlarmPlayerID?: number | null;
		FantasyDraftName?: string | null;
		FantasyDraftPlayerID?: number | null;
		FirstName?: string | null;
		GlobalTeamID?: number | null;
		Height?: number | null;
		InjuryBodyPart?: string | null;
		InjuryNotes?: string | null;
		InjuryStartDate?: string | null;
		InjuryStatus?: string | null;
		Jersey?: number | null;
		LastName?: string | null;
		PhotoUrl?: string | null;
		PlayerID?: number | null;
		Position?: string | null;
		RotoWirePlayerID?: number | null;
		RotoworldPlayerID?: number | null;
		Shoots?: string | null;
		SportRadarPlayerID?: string | null;
		SportsDirectPlayerID?: number | null;
		StatsPlayerID?: number | null;
		Status?: string | null;
		Team?: string | null;
		TeamID?: number | null;
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
		BirthCity: FormControl<string | null | undefined>,
		BirthDate: FormControl<string | null | undefined>,
		BirthState: FormControl<string | null | undefined>,
		Catches: FormControl<string | null | undefined>,
		DepthChartOrder: FormControl<number | null | undefined>,
		DepthChartPosition: FormControl<string | null | undefined>,
		DraftKingsName: FormControl<string | null | undefined>,
		DraftKingsPlayerID: FormControl<number | null | undefined>,
		FanDuelName: FormControl<string | null | undefined>,
		FanDuelPlayerID: FormControl<number | null | undefined>,
		FantasyAlarmPlayerID: FormControl<number | null | undefined>,
		FantasyDraftName: FormControl<string | null | undefined>,
		FantasyDraftPlayerID: FormControl<number | null | undefined>,
		FirstName: FormControl<string | null | undefined>,
		GlobalTeamID: FormControl<number | null | undefined>,
		Height: FormControl<number | null | undefined>,
		InjuryBodyPart: FormControl<string | null | undefined>,
		InjuryNotes: FormControl<string | null | undefined>,
		InjuryStartDate: FormControl<string | null | undefined>,
		InjuryStatus: FormControl<string | null | undefined>,
		Jersey: FormControl<number | null | undefined>,
		LastName: FormControl<string | null | undefined>,
		PhotoUrl: FormControl<string | null | undefined>,
		PlayerID: FormControl<number | null | undefined>,
		Position: FormControl<string | null | undefined>,
		RotoWirePlayerID: FormControl<number | null | undefined>,
		RotoworldPlayerID: FormControl<number | null | undefined>,
		Shoots: FormControl<string | null | undefined>,
		SportRadarPlayerID: FormControl<string | null | undefined>,
		SportsDirectPlayerID: FormControl<number | null | undefined>,
		StatsPlayerID: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Team: FormControl<string | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
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
			BirthCity: new FormControl<string | null | undefined>(undefined),
			BirthDate: new FormControl<string | null | undefined>(undefined),
			BirthState: new FormControl<string | null | undefined>(undefined),
			Catches: new FormControl<string | null | undefined>(undefined),
			DepthChartOrder: new FormControl<number | null | undefined>(undefined),
			DepthChartPosition: new FormControl<string | null | undefined>(undefined),
			DraftKingsName: new FormControl<string | null | undefined>(undefined),
			DraftKingsPlayerID: new FormControl<number | null | undefined>(undefined),
			FanDuelName: new FormControl<string | null | undefined>(undefined),
			FanDuelPlayerID: new FormControl<number | null | undefined>(undefined),
			FantasyAlarmPlayerID: new FormControl<number | null | undefined>(undefined),
			FantasyDraftName: new FormControl<string | null | undefined>(undefined),
			FantasyDraftPlayerID: new FormControl<number | null | undefined>(undefined),
			FirstName: new FormControl<string | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			Height: new FormControl<number | null | undefined>(undefined),
			InjuryBodyPart: new FormControl<string | null | undefined>(undefined),
			InjuryNotes: new FormControl<string | null | undefined>(undefined),
			InjuryStartDate: new FormControl<string | null | undefined>(undefined),
			InjuryStatus: new FormControl<string | null | undefined>(undefined),
			Jersey: new FormControl<number | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
			PhotoUrl: new FormControl<string | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			Position: new FormControl<string | null | undefined>(undefined),
			RotoWirePlayerID: new FormControl<number | null | undefined>(undefined),
			RotoworldPlayerID: new FormControl<number | null | undefined>(undefined),
			Shoots: new FormControl<string | null | undefined>(undefined),
			SportRadarPlayerID: new FormControl<string | null | undefined>(undefined),
			SportsDirectPlayerID: new FormControl<number | null | undefined>(undefined),
			StatsPlayerID: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
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

	export interface PlayerGameProjection {
		Assists?: number | null;
		BenchPenaltyMinutes?: number | null;
		Blocks?: number | null;
		DateTime?: string | null;
		Day?: string | null;
		DraftKingsPosition?: string | null;
		DraftKingsSalary?: number | null;
		EmptyNetGoals?: number | null;
		FaceoffsLost?: number | null;
		FaceoffsWon?: number | null;
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
		GameID?: number | null;
		Games?: number | null;
		Giveaways?: number | null;
		GlobalGameID?: number | null;
		GlobalOpponentID?: number | null;
		GlobalTeamID?: number | null;
		Goals?: number | null;
		GoaltendingGoalsAgainst?: number | null;
		GoaltendingLosses?: number | null;
		GoaltendingMinutes?: number | null;
		GoaltendingOvertimeLosses?: number | null;
		GoaltendingSaves?: number | null;
		GoaltendingSeconds?: number | null;
		GoaltendingShotsAgainst?: number | null;
		GoaltendingShutouts?: number | null;
		GoaltendingWins?: number | null;
		HatTricks?: number | null;
		Hits?: number | null;
		HomeOrAway?: string | null;
		InjuryBodyPart?: string | null;
		InjuryNotes?: string | null;
		InjuryStartDate?: string | null;
		InjuryStatus?: string | null;
		IsGameOver?: boolean | null;
		Minutes?: number | null;
		Name?: string | null;
		Opponent?: string | null;
		OpponentID?: number | null;
		OpponentPositionRank?: number | null;
		OpponentRank?: number | null;
		PenaltyMinutes?: number | null;
		PlayerID?: number | null;
		PlusMinus?: number | null;
		Position?: string | null;
		PowerPlayAssists?: number | null;
		PowerPlayGoals?: number | null;
		Season?: number | null;
		SeasonType?: number | null;
		Seconds?: number | null;
		Shifts?: number | null;
		ShootoutGoals?: number | null;
		ShortHandedAssists?: number | null;
		ShortHandedGoals?: number | null;
		ShotsOnGoal?: number | null;
		Started?: number | null;
		StatID?: number | null;
		Takeaways?: number | null;
		Team?: string | null;
		TeamID?: number | null;
		Updated?: string | null;
		YahooPosition?: string | null;
		YahooSalary?: number | null;
	}
	export interface PlayerGameProjectionFormProperties {
		Assists: FormControl<number | null | undefined>,
		BenchPenaltyMinutes: FormControl<number | null | undefined>,
		Blocks: FormControl<number | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,
		DraftKingsPosition: FormControl<string | null | undefined>,
		DraftKingsSalary: FormControl<number | null | undefined>,
		EmptyNetGoals: FormControl<number | null | undefined>,
		FaceoffsLost: FormControl<number | null | undefined>,
		FaceoffsWon: FormControl<number | null | undefined>,
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
		GameID: FormControl<number | null | undefined>,
		Games: FormControl<number | null | undefined>,
		Giveaways: FormControl<number | null | undefined>,
		GlobalGameID: FormControl<number | null | undefined>,
		GlobalOpponentID: FormControl<number | null | undefined>,
		GlobalTeamID: FormControl<number | null | undefined>,
		Goals: FormControl<number | null | undefined>,
		GoaltendingGoalsAgainst: FormControl<number | null | undefined>,
		GoaltendingLosses: FormControl<number | null | undefined>,
		GoaltendingMinutes: FormControl<number | null | undefined>,
		GoaltendingOvertimeLosses: FormControl<number | null | undefined>,
		GoaltendingSaves: FormControl<number | null | undefined>,
		GoaltendingSeconds: FormControl<number | null | undefined>,
		GoaltendingShotsAgainst: FormControl<number | null | undefined>,
		GoaltendingShutouts: FormControl<number | null | undefined>,
		GoaltendingWins: FormControl<number | null | undefined>,
		HatTricks: FormControl<number | null | undefined>,
		Hits: FormControl<number | null | undefined>,
		HomeOrAway: FormControl<string | null | undefined>,
		InjuryBodyPart: FormControl<string | null | undefined>,
		InjuryNotes: FormControl<string | null | undefined>,
		InjuryStartDate: FormControl<string | null | undefined>,
		InjuryStatus: FormControl<string | null | undefined>,
		IsGameOver: FormControl<boolean | null | undefined>,
		Minutes: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Opponent: FormControl<string | null | undefined>,
		OpponentID: FormControl<number | null | undefined>,
		OpponentPositionRank: FormControl<number | null | undefined>,
		OpponentRank: FormControl<number | null | undefined>,
		PenaltyMinutes: FormControl<number | null | undefined>,
		PlayerID: FormControl<number | null | undefined>,
		PlusMinus: FormControl<number | null | undefined>,
		Position: FormControl<string | null | undefined>,
		PowerPlayAssists: FormControl<number | null | undefined>,
		PowerPlayGoals: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		Seconds: FormControl<number | null | undefined>,
		Shifts: FormControl<number | null | undefined>,
		ShootoutGoals: FormControl<number | null | undefined>,
		ShortHandedAssists: FormControl<number | null | undefined>,
		ShortHandedGoals: FormControl<number | null | undefined>,
		ShotsOnGoal: FormControl<number | null | undefined>,
		Started: FormControl<number | null | undefined>,
		StatID: FormControl<number | null | undefined>,
		Takeaways: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
		YahooPosition: FormControl<string | null | undefined>,
		YahooSalary: FormControl<number | null | undefined>,
	}
	export function CreatePlayerGameProjectionFormGroup() {
		return new FormGroup<PlayerGameProjectionFormProperties>({
			Assists: new FormControl<number | null | undefined>(undefined),
			BenchPenaltyMinutes: new FormControl<number | null | undefined>(undefined),
			Blocks: new FormControl<number | null | undefined>(undefined),
			DateTime: new FormControl<string | null | undefined>(undefined),
			Day: new FormControl<string | null | undefined>(undefined),
			DraftKingsPosition: new FormControl<string | null | undefined>(undefined),
			DraftKingsSalary: new FormControl<number | null | undefined>(undefined),
			EmptyNetGoals: new FormControl<number | null | undefined>(undefined),
			FaceoffsLost: new FormControl<number | null | undefined>(undefined),
			FaceoffsWon: new FormControl<number | null | undefined>(undefined),
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
			GameID: new FormControl<number | null | undefined>(undefined),
			Games: new FormControl<number | null | undefined>(undefined),
			Giveaways: new FormControl<number | null | undefined>(undefined),
			GlobalGameID: new FormControl<number | null | undefined>(undefined),
			GlobalOpponentID: new FormControl<number | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			Goals: new FormControl<number | null | undefined>(undefined),
			GoaltendingGoalsAgainst: new FormControl<number | null | undefined>(undefined),
			GoaltendingLosses: new FormControl<number | null | undefined>(undefined),
			GoaltendingMinutes: new FormControl<number | null | undefined>(undefined),
			GoaltendingOvertimeLosses: new FormControl<number | null | undefined>(undefined),
			GoaltendingSaves: new FormControl<number | null | undefined>(undefined),
			GoaltendingSeconds: new FormControl<number | null | undefined>(undefined),
			GoaltendingShotsAgainst: new FormControl<number | null | undefined>(undefined),
			GoaltendingShutouts: new FormControl<number | null | undefined>(undefined),
			GoaltendingWins: new FormControl<number | null | undefined>(undefined),
			HatTricks: new FormControl<number | null | undefined>(undefined),
			Hits: new FormControl<number | null | undefined>(undefined),
			HomeOrAway: new FormControl<string | null | undefined>(undefined),
			InjuryBodyPart: new FormControl<string | null | undefined>(undefined),
			InjuryNotes: new FormControl<string | null | undefined>(undefined),
			InjuryStartDate: new FormControl<string | null | undefined>(undefined),
			InjuryStatus: new FormControl<string | null | undefined>(undefined),
			IsGameOver: new FormControl<boolean | null | undefined>(undefined),
			Minutes: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Opponent: new FormControl<string | null | undefined>(undefined),
			OpponentID: new FormControl<number | null | undefined>(undefined),
			OpponentPositionRank: new FormControl<number | null | undefined>(undefined),
			OpponentRank: new FormControl<number | null | undefined>(undefined),
			PenaltyMinutes: new FormControl<number | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			PlusMinus: new FormControl<number | null | undefined>(undefined),
			Position: new FormControl<string | null | undefined>(undefined),
			PowerPlayAssists: new FormControl<number | null | undefined>(undefined),
			PowerPlayGoals: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			Seconds: new FormControl<number | null | undefined>(undefined),
			Shifts: new FormControl<number | null | undefined>(undefined),
			ShootoutGoals: new FormControl<number | null | undefined>(undefined),
			ShortHandedAssists: new FormControl<number | null | undefined>(undefined),
			ShortHandedGoals: new FormControl<number | null | undefined>(undefined),
			ShotsOnGoal: new FormControl<number | null | undefined>(undefined),
			Started: new FormControl<number | null | undefined>(undefined),
			StatID: new FormControl<number | null | undefined>(undefined),
			Takeaways: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
			YahooPosition: new FormControl<string | null | undefined>(undefined),
			YahooSalary: new FormControl<number | null | undefined>(undefined),
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

	export interface StartingGoaltenders {
		AwayGoaltender?: Goaltender;
		AwayTeam?: string | null;
		AwayTeamID?: number | null;
		DateTime?: string | null;
		Day?: string | null;
		GameID?: number | null;
		HomeGoaltender?: Goaltender;
		HomeTeam?: string | null;
		HomeTeamID?: number | null;
		Season?: number | null;
		SeasonType?: number | null;
		Status?: string | null;
	}
	export interface StartingGoaltendersFormProperties {
		AwayTeam: FormControl<string | null | undefined>,
		AwayTeamID: FormControl<number | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,
		GameID: FormControl<number | null | undefined>,
		HomeTeam: FormControl<string | null | undefined>,
		HomeTeamID: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateStartingGoaltendersFormGroup() {
		return new FormGroup<StartingGoaltendersFormProperties>({
			AwayTeam: new FormControl<string | null | undefined>(undefined),
			AwayTeamID: new FormControl<number | null | undefined>(undefined),
			DateTime: new FormControl<string | null | undefined>(undefined),
			Day: new FormControl<string | null | undefined>(undefined),
			GameID: new FormControl<number | null | undefined>(undefined),
			HomeTeam: new FormControl<string | null | undefined>(undefined),
			HomeTeamID: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
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
		 * @param {string} date The date of the game(s).
		 * <br>Examples: <code>2017-DEC-01</code>, <code>2018-FEB-15</code>.
		 * @return {Array<DfsSlate>} 
		 */
		DfsSlatesByDate(format: DfsSlatesByDateFormat, date: string): Observable<Array<DfsSlate>> {
			return this.http.get<Array<DfsSlate>>(this.baseUri + format + '/DfsSlatesByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * Injured Players
		 * This endpoint provides all currently injured NHL players, along with injury details.
		 * Get {format}/InjuredPlayers
		 * @param {DfsSlatesByDateFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<Player>} 
		 */
		InjuredPlayers(format: DfsSlatesByDateFormat): Observable<Array<Player>> {
			return this.http.get<Array<Player>>(this.baseUri + format + '/InjuredPlayers', {});
		}

		/**
		 * Projected Player Game Stats by Date (w/ Injuries, DFS Salaries)
		 * Get {format}/PlayerGameProjectionStatsByDate/{date}
		 * @param {DfsSlatesByDateFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s).
		 *  <br>Examples: <code>2018-JAN-31</code>, <code>2017-OCT-01</code>.
		 *  
		 * @return {Array<PlayerGameProjection>} 
		 */
		ProjectedPlayerGameStatsByDateWInjuriesDfsSalaries(format: DfsSlatesByDateFormat, date: string): Observable<Array<PlayerGameProjection>> {
			return this.http.get<Array<PlayerGameProjection>>(this.baseUri + format + '/PlayerGameProjectionStatsByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * Projected Player Game Stats by Player (w/ Injuries, DFS Salaries)
		 * Get {format}/PlayerGameProjectionStatsByPlayer/{date}/{playerid}
		 * @param {DfsSlatesByDateFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s).
		 *  <br>Examples: <code>2018-JAN-31</code>, <code>2017-OCT-01</code>.
		 *  
		 * @param {string} playerid Unique FantasyData Player ID.
		 * Example:<code>30000378</code>.
		 * @return {PlayerGameProjection} 
		 */
		ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalaries(format: DfsSlatesByDateFormat, date: string, playerid: string): Observable<PlayerGameProjection> {
			return this.http.get<PlayerGameProjection>(this.baseUri + format + '/PlayerGameProjectionStatsByPlayer/' + (date == null ? '' : encodeURIComponent(date)) + '/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}

		/**
		 * Starting Goaltenders by Date
		 * This endpoint provides the projected & confirmed starting goaltenders for NHL games on a given date.
		 * Get {format}/StartingGoaltendersByDate/{date}
		 * @param {DfsSlatesByDateFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s).
		 * <br>Examples: <code>2021-OCT-12</code>, <code>2021-DEC-09</code>.
		 * @return {Array<StartingGoaltenders>} 
		 */
		StartingGoaltendersByDate(format: DfsSlatesByDateFormat, date: string): Observable<Array<StartingGoaltenders>> {
			return this.http.get<Array<StartingGoaltenders>>(this.baseUri + format + '/StartingGoaltendersByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}
	}

	export enum DfsSlatesByDateFormat { XML = 'XML', JSON = 'JSON' }

}

