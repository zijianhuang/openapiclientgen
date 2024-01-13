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
		Game?: Schedule;
		GameID?: number | null;
		OperatorGameID?: number | null;
		RemovedByOperator?: boolean | null;
		ScoreID?: number | null;
		SlateGameID?: number | null;
		SlateID?: number | null;
	}
	export interface DfsSlateGameFormProperties {
		GameID: FormControl<number | null | undefined>,
		OperatorGameID: FormControl<number | null | undefined>,
		RemovedByOperator: FormControl<boolean | null | undefined>,
		ScoreID: FormControl<number | null | undefined>,
		SlateGameID: FormControl<number | null | undefined>,
		SlateID: FormControl<number | null | undefined>,
	}
	export function CreateDfsSlateGameFormGroup() {
		return new FormGroup<DfsSlateGameFormProperties>({
			GameID: new FormControl<number | null | undefined>(undefined),
			OperatorGameID: new FormControl<number | null | undefined>(undefined),
			RemovedByOperator: new FormControl<boolean | null | undefined>(undefined),
			ScoreID: new FormControl<number | null | undefined>(undefined),
			SlateGameID: new FormControl<number | null | undefined>(undefined),
			SlateID: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DfsSlatePlayer {
		FantasyDefenseProjectionStatID?: number | null;
		OperatorPlayerID?: string | null;
		OperatorPlayerName?: string | null;
		OperatorPosition?: string | null;
		OperatorRosterSlots?: Array<string>;
		OperatorSalary?: number | null;
		OperatorSlatePlayerID?: string | null;
		PlayerGameProjectionStatID?: number | null;
		PlayerID?: number | null;
		SlateGameID?: number | null;
		SlateID?: number | null;
		SlatePlayerID?: number | null;
		Team?: string | null;
		TeamID?: number | null;
	}
	export interface DfsSlatePlayerFormProperties {
		FantasyDefenseProjectionStatID: FormControl<number | null | undefined>,
		OperatorPlayerID: FormControl<string | null | undefined>,
		OperatorPlayerName: FormControl<string | null | undefined>,
		OperatorPosition: FormControl<string | null | undefined>,
		OperatorSalary: FormControl<number | null | undefined>,
		OperatorSlatePlayerID: FormControl<string | null | undefined>,
		PlayerGameProjectionStatID: FormControl<number | null | undefined>,
		PlayerID: FormControl<number | null | undefined>,
		SlateGameID: FormControl<number | null | undefined>,
		SlateID: FormControl<number | null | undefined>,
		SlatePlayerID: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
	}
	export function CreateDfsSlatePlayerFormGroup() {
		return new FormGroup<DfsSlatePlayerFormProperties>({
			FantasyDefenseProjectionStatID: new FormControl<number | null | undefined>(undefined),
			OperatorPlayerID: new FormControl<string | null | undefined>(undefined),
			OperatorPlayerName: new FormControl<string | null | undefined>(undefined),
			OperatorPosition: new FormControl<string | null | undefined>(undefined),
			OperatorSalary: new FormControl<number | null | undefined>(undefined),
			OperatorSlatePlayerID: new FormControl<string | null | undefined>(undefined),
			PlayerGameProjectionStatID: new FormControl<number | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			SlateGameID: new FormControl<number | null | undefined>(undefined),
			SlateID: new FormControl<number | null | undefined>(undefined),
			SlatePlayerID: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface FantasyDefenseGameProjection {
		AssistedTackles?: number | null;
		BlockedKickReturnTouchdowns?: number | null;
		BlockedKickReturnYards?: number | null;
		BlockedKicks?: number | null;
		Date?: string | null;
		DateTime?: string | null;
		Day?: string | null;
		DefensiveTouchdowns?: number | null;
		DraftKingsFantasyPointsAllowed?: number | null;
		DraftKingsKickerFantasyPointsAllowed?: number | null;
		DraftKingsPosition?: string | null;
		DraftKingsQuarterbackFantasyPointsAllowed?: number | null;
		DraftKingsRunningbackFantasyPointsAllowed?: number | null;
		DraftKingsSalary?: number | null;
		DraftKingsTightEndFantasyPointsAllowed?: number | null;
		DraftKingsWideReceiverFantasyPointsAllowed?: number | null;
		FanDuelFantasyPointsAllowed?: number | null;
		FanDuelKickerFantasyPointsAllowed?: number | null;
		FanDuelPosition?: string | null;
		FanDuelQuarterbackFantasyPointsAllowed?: number | null;
		FanDuelRunningbackFantasyPointsAllowed?: number | null;
		FanDuelSalary?: number | null;
		FanDuelTightEndFantasyPointsAllowed?: number | null;
		FanDuelWideReceiverFantasyPointsAllowed?: number | null;
		FantasyDataSalary?: number | null;
		FantasyDefenseID?: number | null;
		FantasyDraftFantasyPointsAllowed?: number | null;
		FantasyDraftKickerFantasyPointsAllowed?: number | null;
		FantasyDraftPosition?: string | null;
		FantasyDraftQuarterbackFantasyPointsAllowed?: number | null;
		FantasyDraftRunningbackFantasyPointsAllowed?: number | null;
		FantasyDraftSalary?: number | null;
		FantasyDraftTightEndFantasyPointsAllowed?: number | null;
		FantasyDraftWideReceiverFantasyPointsAllowed?: number | null;
		FantasyPoints?: number | null;
		FantasyPointsAllowed?: number | null;
		FantasyPointsDraftKings?: number | null;
		FantasyPointsFanDuel?: number | null;
		FantasyPointsFantasyDraft?: number | null;
		FantasyPointsYahoo?: number | null;
		FieldGoalReturnTouchdowns?: number | null;
		FieldGoalReturnYards?: number | null;
		FourthDownAttempts?: number | null;
		FourthDownConversions?: number | null;
		FumbleReturnTouchdowns?: number | null;
		FumbleReturnYards?: number | null;
		FumblesForced?: number | null;
		FumblesRecovered?: number | null;
		GameKey?: string | null;
		GlobalGameID?: number | null;
		GlobalOpponentID?: number | null;
		GlobalTeamID?: number | null;
		HomeOrAway?: string | null;
		Humidity?: number | null;
		InterceptionReturnTouchdowns?: number | null;
		InterceptionReturnYards?: number | null;
		Interceptions?: number | null;
		IsGameOver?: boolean | null;
		KickReturnLong?: number | null;
		KickReturnTouchdowns?: number | null;
		KickReturnYards?: number | null;
		KickReturns?: number | null;
		KickerFantasyPointsAllowed?: number | null;
		OffensiveYardsAllowed?: number | null;
		Opponent?: string | null;
		OpponentID?: number | null;
		OpponentPositionRank?: number | null;
		OpponentRank?: number | null;
		PassesDefended?: number | null;
		PlayerID?: number | null;
		PointsAllowed?: number | null;
		PointsAllowedByDefenseSpecialTeams?: number | null;
		PuntReturnLong?: number | null;
		PuntReturnTouchdowns?: number | null;
		PuntReturnYards?: number | null;
		PuntReturns?: number | null;
		QuarterbackFantasyPointsAllowed?: number | null;
		QuarterbackHits?: number | null;
		RunningbackFantasyPointsAllowed?: number | null;
		SackYards?: number | null;
		Sacks?: number | null;
		Safeties?: number | null;
		ScoreID?: number | null;
		ScoringDetails?: Array<ScoringDetail>;
		Season?: number | null;
		SeasonType?: number | null;
		SoloTackles?: number | null;
		SpecialTeamsTouchdowns?: number | null;
		Stadium?: string | null;
		TacklesForLoss?: number | null;
		Team?: string | null;
		TeamID?: number | null;
		Temperature?: number | null;
		ThirdDownAttempts?: number | null;
		ThirdDownConversions?: number | null;
		TightEndFantasyPointsAllowed?: number | null;
		TouchdownsScored?: number | null;
		TwoPointConversionReturns?: number | null;
		VictivSalary?: number | null;
		Week?: number | null;
		WideReceiverFantasyPointsAllowed?: number | null;
		WindSpeed?: number | null;
		YahooFantasyPointsAllowed?: number | null;
		YahooKickerFantasyPointsAllowed?: number | null;
		YahooPosition?: string | null;
		YahooQuarterbackFantasyPointsAllowed?: number | null;
		YahooRunningbackFantasyPointsAllowed?: number | null;
		YahooSalary?: number | null;
		YahooTightEndFantasyPointsAllowed?: number | null;
		YahooWideReceiverFantasyPointsAllowed?: number | null;
	}
	export interface FantasyDefenseGameProjectionFormProperties {
		AssistedTackles: FormControl<number | null | undefined>,
		BlockedKickReturnTouchdowns: FormControl<number | null | undefined>,
		BlockedKickReturnYards: FormControl<number | null | undefined>,
		BlockedKicks: FormControl<number | null | undefined>,
		Date: FormControl<string | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,
		DefensiveTouchdowns: FormControl<number | null | undefined>,
		DraftKingsFantasyPointsAllowed: FormControl<number | null | undefined>,
		DraftKingsKickerFantasyPointsAllowed: FormControl<number | null | undefined>,
		DraftKingsPosition: FormControl<string | null | undefined>,
		DraftKingsQuarterbackFantasyPointsAllowed: FormControl<number | null | undefined>,
		DraftKingsRunningbackFantasyPointsAllowed: FormControl<number | null | undefined>,
		DraftKingsSalary: FormControl<number | null | undefined>,
		DraftKingsTightEndFantasyPointsAllowed: FormControl<number | null | undefined>,
		DraftKingsWideReceiverFantasyPointsAllowed: FormControl<number | null | undefined>,
		FanDuelFantasyPointsAllowed: FormControl<number | null | undefined>,
		FanDuelKickerFantasyPointsAllowed: FormControl<number | null | undefined>,
		FanDuelPosition: FormControl<string | null | undefined>,
		FanDuelQuarterbackFantasyPointsAllowed: FormControl<number | null | undefined>,
		FanDuelRunningbackFantasyPointsAllowed: FormControl<number | null | undefined>,
		FanDuelSalary: FormControl<number | null | undefined>,
		FanDuelTightEndFantasyPointsAllowed: FormControl<number | null | undefined>,
		FanDuelWideReceiverFantasyPointsAllowed: FormControl<number | null | undefined>,
		FantasyDataSalary: FormControl<number | null | undefined>,
		FantasyDefenseID: FormControl<number | null | undefined>,
		FantasyDraftFantasyPointsAllowed: FormControl<number | null | undefined>,
		FantasyDraftKickerFantasyPointsAllowed: FormControl<number | null | undefined>,
		FantasyDraftPosition: FormControl<string | null | undefined>,
		FantasyDraftQuarterbackFantasyPointsAllowed: FormControl<number | null | undefined>,
		FantasyDraftRunningbackFantasyPointsAllowed: FormControl<number | null | undefined>,
		FantasyDraftSalary: FormControl<number | null | undefined>,
		FantasyDraftTightEndFantasyPointsAllowed: FormControl<number | null | undefined>,
		FantasyDraftWideReceiverFantasyPointsAllowed: FormControl<number | null | undefined>,
		FantasyPoints: FormControl<number | null | undefined>,
		FantasyPointsAllowed: FormControl<number | null | undefined>,
		FantasyPointsDraftKings: FormControl<number | null | undefined>,
		FantasyPointsFanDuel: FormControl<number | null | undefined>,
		FantasyPointsFantasyDraft: FormControl<number | null | undefined>,
		FantasyPointsYahoo: FormControl<number | null | undefined>,
		FieldGoalReturnTouchdowns: FormControl<number | null | undefined>,
		FieldGoalReturnYards: FormControl<number | null | undefined>,
		FourthDownAttempts: FormControl<number | null | undefined>,
		FourthDownConversions: FormControl<number | null | undefined>,
		FumbleReturnTouchdowns: FormControl<number | null | undefined>,
		FumbleReturnYards: FormControl<number | null | undefined>,
		FumblesForced: FormControl<number | null | undefined>,
		FumblesRecovered: FormControl<number | null | undefined>,
		GameKey: FormControl<string | null | undefined>,
		GlobalGameID: FormControl<number | null | undefined>,
		GlobalOpponentID: FormControl<number | null | undefined>,
		GlobalTeamID: FormControl<number | null | undefined>,
		HomeOrAway: FormControl<string | null | undefined>,
		Humidity: FormControl<number | null | undefined>,
		InterceptionReturnTouchdowns: FormControl<number | null | undefined>,
		InterceptionReturnYards: FormControl<number | null | undefined>,
		Interceptions: FormControl<number | null | undefined>,
		IsGameOver: FormControl<boolean | null | undefined>,
		KickReturnLong: FormControl<number | null | undefined>,
		KickReturnTouchdowns: FormControl<number | null | undefined>,
		KickReturnYards: FormControl<number | null | undefined>,
		KickReturns: FormControl<number | null | undefined>,
		KickerFantasyPointsAllowed: FormControl<number | null | undefined>,
		OffensiveYardsAllowed: FormControl<number | null | undefined>,
		Opponent: FormControl<string | null | undefined>,
		OpponentID: FormControl<number | null | undefined>,
		OpponentPositionRank: FormControl<number | null | undefined>,
		OpponentRank: FormControl<number | null | undefined>,
		PassesDefended: FormControl<number | null | undefined>,
		PlayerID: FormControl<number | null | undefined>,
		PointsAllowed: FormControl<number | null | undefined>,
		PointsAllowedByDefenseSpecialTeams: FormControl<number | null | undefined>,
		PuntReturnLong: FormControl<number | null | undefined>,
		PuntReturnTouchdowns: FormControl<number | null | undefined>,
		PuntReturnYards: FormControl<number | null | undefined>,
		PuntReturns: FormControl<number | null | undefined>,
		QuarterbackFantasyPointsAllowed: FormControl<number | null | undefined>,
		QuarterbackHits: FormControl<number | null | undefined>,
		RunningbackFantasyPointsAllowed: FormControl<number | null | undefined>,
		SackYards: FormControl<number | null | undefined>,
		Sacks: FormControl<number | null | undefined>,
		Safeties: FormControl<number | null | undefined>,
		ScoreID: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		SoloTackles: FormControl<number | null | undefined>,
		SpecialTeamsTouchdowns: FormControl<number | null | undefined>,
		Stadium: FormControl<string | null | undefined>,
		TacklesForLoss: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
		Temperature: FormControl<number | null | undefined>,
		ThirdDownAttempts: FormControl<number | null | undefined>,
		ThirdDownConversions: FormControl<number | null | undefined>,
		TightEndFantasyPointsAllowed: FormControl<number | null | undefined>,
		TouchdownsScored: FormControl<number | null | undefined>,
		TwoPointConversionReturns: FormControl<number | null | undefined>,
		VictivSalary: FormControl<number | null | undefined>,
		Week: FormControl<number | null | undefined>,
		WideReceiverFantasyPointsAllowed: FormControl<number | null | undefined>,
		WindSpeed: FormControl<number | null | undefined>,
		YahooFantasyPointsAllowed: FormControl<number | null | undefined>,
		YahooKickerFantasyPointsAllowed: FormControl<number | null | undefined>,
		YahooPosition: FormControl<string | null | undefined>,
		YahooQuarterbackFantasyPointsAllowed: FormControl<number | null | undefined>,
		YahooRunningbackFantasyPointsAllowed: FormControl<number | null | undefined>,
		YahooSalary: FormControl<number | null | undefined>,
		YahooTightEndFantasyPointsAllowed: FormControl<number | null | undefined>,
		YahooWideReceiverFantasyPointsAllowed: FormControl<number | null | undefined>,
	}
	export function CreateFantasyDefenseGameProjectionFormGroup() {
		return new FormGroup<FantasyDefenseGameProjectionFormProperties>({
			AssistedTackles: new FormControl<number | null | undefined>(undefined),
			BlockedKickReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			BlockedKickReturnYards: new FormControl<number | null | undefined>(undefined),
			BlockedKicks: new FormControl<number | null | undefined>(undefined),
			Date: new FormControl<string | null | undefined>(undefined),
			DateTime: new FormControl<string | null | undefined>(undefined),
			Day: new FormControl<string | null | undefined>(undefined),
			DefensiveTouchdowns: new FormControl<number | null | undefined>(undefined),
			DraftKingsFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			DraftKingsKickerFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			DraftKingsPosition: new FormControl<string | null | undefined>(undefined),
			DraftKingsQuarterbackFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			DraftKingsRunningbackFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			DraftKingsSalary: new FormControl<number | null | undefined>(undefined),
			DraftKingsTightEndFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			DraftKingsWideReceiverFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			FanDuelFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			FanDuelKickerFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			FanDuelPosition: new FormControl<string | null | undefined>(undefined),
			FanDuelQuarterbackFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			FanDuelRunningbackFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			FanDuelSalary: new FormControl<number | null | undefined>(undefined),
			FanDuelTightEndFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			FanDuelWideReceiverFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			FantasyDataSalary: new FormControl<number | null | undefined>(undefined),
			FantasyDefenseID: new FormControl<number | null | undefined>(undefined),
			FantasyDraftFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			FantasyDraftKickerFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			FantasyDraftPosition: new FormControl<string | null | undefined>(undefined),
			FantasyDraftQuarterbackFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			FantasyDraftRunningbackFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			FantasyDraftSalary: new FormControl<number | null | undefined>(undefined),
			FantasyDraftTightEndFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			FantasyDraftWideReceiverFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			FantasyPoints: new FormControl<number | null | undefined>(undefined),
			FantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			FantasyPointsDraftKings: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFanDuel: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFantasyDraft: new FormControl<number | null | undefined>(undefined),
			FantasyPointsYahoo: new FormControl<number | null | undefined>(undefined),
			FieldGoalReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			FieldGoalReturnYards: new FormControl<number | null | undefined>(undefined),
			FourthDownAttempts: new FormControl<number | null | undefined>(undefined),
			FourthDownConversions: new FormControl<number | null | undefined>(undefined),
			FumbleReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			FumbleReturnYards: new FormControl<number | null | undefined>(undefined),
			FumblesForced: new FormControl<number | null | undefined>(undefined),
			FumblesRecovered: new FormControl<number | null | undefined>(undefined),
			GameKey: new FormControl<string | null | undefined>(undefined),
			GlobalGameID: new FormControl<number | null | undefined>(undefined),
			GlobalOpponentID: new FormControl<number | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			HomeOrAway: new FormControl<string | null | undefined>(undefined),
			Humidity: new FormControl<number | null | undefined>(undefined),
			InterceptionReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			InterceptionReturnYards: new FormControl<number | null | undefined>(undefined),
			Interceptions: new FormControl<number | null | undefined>(undefined),
			IsGameOver: new FormControl<boolean | null | undefined>(undefined),
			KickReturnLong: new FormControl<number | null | undefined>(undefined),
			KickReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			KickReturnYards: new FormControl<number | null | undefined>(undefined),
			KickReturns: new FormControl<number | null | undefined>(undefined),
			KickerFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			OffensiveYardsAllowed: new FormControl<number | null | undefined>(undefined),
			Opponent: new FormControl<string | null | undefined>(undefined),
			OpponentID: new FormControl<number | null | undefined>(undefined),
			OpponentPositionRank: new FormControl<number | null | undefined>(undefined),
			OpponentRank: new FormControl<number | null | undefined>(undefined),
			PassesDefended: new FormControl<number | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			PointsAllowed: new FormControl<number | null | undefined>(undefined),
			PointsAllowedByDefenseSpecialTeams: new FormControl<number | null | undefined>(undefined),
			PuntReturnLong: new FormControl<number | null | undefined>(undefined),
			PuntReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			PuntReturnYards: new FormControl<number | null | undefined>(undefined),
			PuntReturns: new FormControl<number | null | undefined>(undefined),
			QuarterbackFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			QuarterbackHits: new FormControl<number | null | undefined>(undefined),
			RunningbackFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			SackYards: new FormControl<number | null | undefined>(undefined),
			Sacks: new FormControl<number | null | undefined>(undefined),
			Safeties: new FormControl<number | null | undefined>(undefined),
			ScoreID: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			SoloTackles: new FormControl<number | null | undefined>(undefined),
			SpecialTeamsTouchdowns: new FormControl<number | null | undefined>(undefined),
			Stadium: new FormControl<string | null | undefined>(undefined),
			TacklesForLoss: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			Temperature: new FormControl<number | null | undefined>(undefined),
			ThirdDownAttempts: new FormControl<number | null | undefined>(undefined),
			ThirdDownConversions: new FormControl<number | null | undefined>(undefined),
			TightEndFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			TouchdownsScored: new FormControl<number | null | undefined>(undefined),
			TwoPointConversionReturns: new FormControl<number | null | undefined>(undefined),
			VictivSalary: new FormControl<number | null | undefined>(undefined),
			Week: new FormControl<number | null | undefined>(undefined),
			WideReceiverFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			WindSpeed: new FormControl<number | null | undefined>(undefined),
			YahooFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			YahooKickerFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			YahooPosition: new FormControl<string | null | undefined>(undefined),
			YahooQuarterbackFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			YahooRunningbackFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			YahooSalary: new FormControl<number | null | undefined>(undefined),
			YahooTightEndFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			YahooWideReceiverFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ScoringDetail {
		GameKey?: string | null;
		Length?: number | null;
		PlayerGameID?: number | null;
		PlayerID?: number | null;
		ScoreID?: number | null;
		ScoringDetailID?: number | null;
		ScoringType?: string | null;
		Season?: number | null;
		SeasonType?: number | null;
		Team?: string | null;
		Week?: number | null;
	}
	export interface ScoringDetailFormProperties {
		GameKey: FormControl<string | null | undefined>,
		Length: FormControl<number | null | undefined>,
		PlayerGameID: FormControl<number | null | undefined>,
		PlayerID: FormControl<number | null | undefined>,
		ScoreID: FormControl<number | null | undefined>,
		ScoringDetailID: FormControl<number | null | undefined>,
		ScoringType: FormControl<string | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,
		Week: FormControl<number | null | undefined>,
	}
	export function CreateScoringDetailFormGroup() {
		return new FormGroup<ScoringDetailFormProperties>({
			GameKey: new FormControl<string | null | undefined>(undefined),
			Length: new FormControl<number | null | undefined>(undefined),
			PlayerGameID: new FormControl<number | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			ScoreID: new FormControl<number | null | undefined>(undefined),
			ScoringDetailID: new FormControl<number | null | undefined>(undefined),
			ScoringType: new FormControl<string | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			Week: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface FantasyDefenseSeasonProjection {
		AssistedTackles?: number | null;
		AuctionValue?: number | null;
		AuctionValuePPR?: number | null;
		AverageDraftPosition?: number | null;
		AverageDraftPosition2QB?: number | null;
		AverageDraftPositionDynasty?: number | null;
		AverageDraftPositionPPR?: number | null;
		BlockedKickReturnTouchdowns?: number | null;
		BlockedKickReturnYards?: number | null;
		BlockedKicks?: number | null;
		DefensiveTouchdowns?: number | null;
		DraftKingsFantasyPointsAllowed?: number | null;
		DraftKingsKickerFantasyPointsAllowed?: number | null;
		DraftKingsQuarterbackFantasyPointsAllowed?: number | null;
		DraftKingsRunningbackFantasyPointsAllowed?: number | null;
		DraftKingsTightEndFantasyPointsAllowed?: number | null;
		DraftKingsWideReceiverFantasyPointsAllowed?: number | null;
		FanDuelFantasyPointsAllowed?: number | null;
		FanDuelKickerFantasyPointsAllowed?: number | null;
		FanDuelQuarterbackFantasyPointsAllowed?: number | null;
		FanDuelRunningbackFantasyPointsAllowed?: number | null;
		FanDuelTightEndFantasyPointsAllowed?: number | null;
		FanDuelWideReceiverFantasyPointsAllowed?: number | null;
		FantasyDraftFantasyPointsAllowed?: number | null;
		FantasyDraftKickerFantasyPointsAllowed?: number | null;
		FantasyDraftQuarterbackFantasyPointsAllowed?: number | null;
		FantasyDraftRunningbackFantasyPointsAllowed?: number | null;
		FantasyDraftTightEndFantasyPointsAllowed?: number | null;
		FantasyDraftWideReceiverFantasyPointsAllowed?: number | null;
		FantasyPoints?: number | null;
		FantasyPointsAllowed?: number | null;
		FantasyPointsDraftKings?: number | null;
		FantasyPointsFanDuel?: number | null;
		FantasyPointsFantasyDraft?: number | null;
		FantasyPointsYahoo?: number | null;
		FieldGoalReturnTouchdowns?: number | null;
		FieldGoalReturnYards?: number | null;
		FourthDownAttempts?: number | null;
		FourthDownConversions?: number | null;
		FumbleReturnTouchdowns?: number | null;
		FumbleReturnYards?: number | null;
		FumblesForced?: number | null;
		FumblesRecovered?: number | null;
		Games?: number | null;
		GlobalTeamID?: number | null;
		Humidity?: number | null;
		InterceptionReturnTouchdowns?: number | null;
		InterceptionReturnYards?: number | null;
		Interceptions?: number | null;
		KickReturnLong?: number | null;
		KickReturnTouchdowns?: number | null;
		KickReturnYards?: number | null;
		KickReturns?: number | null;
		KickerFantasyPointsAllowed?: number | null;
		OffensiveYardsAllowed?: number | null;
		PassesDefended?: number | null;
		PlayerID?: number | null;
		PointsAllowed?: number | null;
		PointsAllowedByDefenseSpecialTeams?: number | null;
		PuntReturnLong?: number | null;
		PuntReturnTouchdowns?: number | null;
		PuntReturnYards?: number | null;
		PuntReturns?: number | null;
		QuarterbackFantasyPointsAllowed?: number | null;
		QuarterbackHits?: number | null;
		RunningbackFantasyPointsAllowed?: number | null;
		SackYards?: number | null;
		Sacks?: number | null;
		Safeties?: number | null;
		ScoringDetails?: Array<ScoringDetail>;
		Season?: number | null;
		SeasonType?: number | null;
		SoloTackles?: number | null;
		SpecialTeamsTouchdowns?: number | null;
		TacklesForLoss?: number | null;
		Team?: string | null;
		TeamID?: number | null;
		Temperature?: number | null;
		ThirdDownAttempts?: number | null;
		ThirdDownConversions?: number | null;
		TightEndFantasyPointsAllowed?: number | null;
		TouchdownsScored?: number | null;
		TwoPointConversionReturns?: number | null;
		WideReceiverFantasyPointsAllowed?: number | null;
		WindSpeed?: number | null;
		YahooFantasyPointsAllowed?: number | null;
		YahooKickerFantasyPointsAllowed?: number | null;
		YahooQuarterbackFantasyPointsAllowed?: number | null;
		YahooRunningbackFantasyPointsAllowed?: number | null;
		YahooTightEndFantasyPointsAllowed?: number | null;
		YahooWideReceiverFantasyPointsAllowed?: number | null;
	}
	export interface FantasyDefenseSeasonProjectionFormProperties {
		AssistedTackles: FormControl<number | null | undefined>,
		AuctionValue: FormControl<number | null | undefined>,
		AuctionValuePPR: FormControl<number | null | undefined>,
		AverageDraftPosition: FormControl<number | null | undefined>,
		AverageDraftPosition2QB: FormControl<number | null | undefined>,
		AverageDraftPositionDynasty: FormControl<number | null | undefined>,
		AverageDraftPositionPPR: FormControl<number | null | undefined>,
		BlockedKickReturnTouchdowns: FormControl<number | null | undefined>,
		BlockedKickReturnYards: FormControl<number | null | undefined>,
		BlockedKicks: FormControl<number | null | undefined>,
		DefensiveTouchdowns: FormControl<number | null | undefined>,
		DraftKingsFantasyPointsAllowed: FormControl<number | null | undefined>,
		DraftKingsKickerFantasyPointsAllowed: FormControl<number | null | undefined>,
		DraftKingsQuarterbackFantasyPointsAllowed: FormControl<number | null | undefined>,
		DraftKingsRunningbackFantasyPointsAllowed: FormControl<number | null | undefined>,
		DraftKingsTightEndFantasyPointsAllowed: FormControl<number | null | undefined>,
		DraftKingsWideReceiverFantasyPointsAllowed: FormControl<number | null | undefined>,
		FanDuelFantasyPointsAllowed: FormControl<number | null | undefined>,
		FanDuelKickerFantasyPointsAllowed: FormControl<number | null | undefined>,
		FanDuelQuarterbackFantasyPointsAllowed: FormControl<number | null | undefined>,
		FanDuelRunningbackFantasyPointsAllowed: FormControl<number | null | undefined>,
		FanDuelTightEndFantasyPointsAllowed: FormControl<number | null | undefined>,
		FanDuelWideReceiverFantasyPointsAllowed: FormControl<number | null | undefined>,
		FantasyDraftFantasyPointsAllowed: FormControl<number | null | undefined>,
		FantasyDraftKickerFantasyPointsAllowed: FormControl<number | null | undefined>,
		FantasyDraftQuarterbackFantasyPointsAllowed: FormControl<number | null | undefined>,
		FantasyDraftRunningbackFantasyPointsAllowed: FormControl<number | null | undefined>,
		FantasyDraftTightEndFantasyPointsAllowed: FormControl<number | null | undefined>,
		FantasyDraftWideReceiverFantasyPointsAllowed: FormControl<number | null | undefined>,
		FantasyPoints: FormControl<number | null | undefined>,
		FantasyPointsAllowed: FormControl<number | null | undefined>,
		FantasyPointsDraftKings: FormControl<number | null | undefined>,
		FantasyPointsFanDuel: FormControl<number | null | undefined>,
		FantasyPointsFantasyDraft: FormControl<number | null | undefined>,
		FantasyPointsYahoo: FormControl<number | null | undefined>,
		FieldGoalReturnTouchdowns: FormControl<number | null | undefined>,
		FieldGoalReturnYards: FormControl<number | null | undefined>,
		FourthDownAttempts: FormControl<number | null | undefined>,
		FourthDownConversions: FormControl<number | null | undefined>,
		FumbleReturnTouchdowns: FormControl<number | null | undefined>,
		FumbleReturnYards: FormControl<number | null | undefined>,
		FumblesForced: FormControl<number | null | undefined>,
		FumblesRecovered: FormControl<number | null | undefined>,
		Games: FormControl<number | null | undefined>,
		GlobalTeamID: FormControl<number | null | undefined>,
		Humidity: FormControl<number | null | undefined>,
		InterceptionReturnTouchdowns: FormControl<number | null | undefined>,
		InterceptionReturnYards: FormControl<number | null | undefined>,
		Interceptions: FormControl<number | null | undefined>,
		KickReturnLong: FormControl<number | null | undefined>,
		KickReturnTouchdowns: FormControl<number | null | undefined>,
		KickReturnYards: FormControl<number | null | undefined>,
		KickReturns: FormControl<number | null | undefined>,
		KickerFantasyPointsAllowed: FormControl<number | null | undefined>,
		OffensiveYardsAllowed: FormControl<number | null | undefined>,
		PassesDefended: FormControl<number | null | undefined>,
		PlayerID: FormControl<number | null | undefined>,
		PointsAllowed: FormControl<number | null | undefined>,
		PointsAllowedByDefenseSpecialTeams: FormControl<number | null | undefined>,
		PuntReturnLong: FormControl<number | null | undefined>,
		PuntReturnTouchdowns: FormControl<number | null | undefined>,
		PuntReturnYards: FormControl<number | null | undefined>,
		PuntReturns: FormControl<number | null | undefined>,
		QuarterbackFantasyPointsAllowed: FormControl<number | null | undefined>,
		QuarterbackHits: FormControl<number | null | undefined>,
		RunningbackFantasyPointsAllowed: FormControl<number | null | undefined>,
		SackYards: FormControl<number | null | undefined>,
		Sacks: FormControl<number | null | undefined>,
		Safeties: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		SoloTackles: FormControl<number | null | undefined>,
		SpecialTeamsTouchdowns: FormControl<number | null | undefined>,
		TacklesForLoss: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
		Temperature: FormControl<number | null | undefined>,
		ThirdDownAttempts: FormControl<number | null | undefined>,
		ThirdDownConversions: FormControl<number | null | undefined>,
		TightEndFantasyPointsAllowed: FormControl<number | null | undefined>,
		TouchdownsScored: FormControl<number | null | undefined>,
		TwoPointConversionReturns: FormControl<number | null | undefined>,
		WideReceiverFantasyPointsAllowed: FormControl<number | null | undefined>,
		WindSpeed: FormControl<number | null | undefined>,
		YahooFantasyPointsAllowed: FormControl<number | null | undefined>,
		YahooKickerFantasyPointsAllowed: FormControl<number | null | undefined>,
		YahooQuarterbackFantasyPointsAllowed: FormControl<number | null | undefined>,
		YahooRunningbackFantasyPointsAllowed: FormControl<number | null | undefined>,
		YahooTightEndFantasyPointsAllowed: FormControl<number | null | undefined>,
		YahooWideReceiverFantasyPointsAllowed: FormControl<number | null | undefined>,
	}
	export function CreateFantasyDefenseSeasonProjectionFormGroup() {
		return new FormGroup<FantasyDefenseSeasonProjectionFormProperties>({
			AssistedTackles: new FormControl<number | null | undefined>(undefined),
			AuctionValue: new FormControl<number | null | undefined>(undefined),
			AuctionValuePPR: new FormControl<number | null | undefined>(undefined),
			AverageDraftPosition: new FormControl<number | null | undefined>(undefined),
			AverageDraftPosition2QB: new FormControl<number | null | undefined>(undefined),
			AverageDraftPositionDynasty: new FormControl<number | null | undefined>(undefined),
			AverageDraftPositionPPR: new FormControl<number | null | undefined>(undefined),
			BlockedKickReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			BlockedKickReturnYards: new FormControl<number | null | undefined>(undefined),
			BlockedKicks: new FormControl<number | null | undefined>(undefined),
			DefensiveTouchdowns: new FormControl<number | null | undefined>(undefined),
			DraftKingsFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			DraftKingsKickerFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			DraftKingsQuarterbackFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			DraftKingsRunningbackFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			DraftKingsTightEndFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			DraftKingsWideReceiverFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			FanDuelFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			FanDuelKickerFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			FanDuelQuarterbackFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			FanDuelRunningbackFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			FanDuelTightEndFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			FanDuelWideReceiverFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			FantasyDraftFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			FantasyDraftKickerFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			FantasyDraftQuarterbackFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			FantasyDraftRunningbackFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			FantasyDraftTightEndFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			FantasyDraftWideReceiverFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			FantasyPoints: new FormControl<number | null | undefined>(undefined),
			FantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			FantasyPointsDraftKings: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFanDuel: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFantasyDraft: new FormControl<number | null | undefined>(undefined),
			FantasyPointsYahoo: new FormControl<number | null | undefined>(undefined),
			FieldGoalReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			FieldGoalReturnYards: new FormControl<number | null | undefined>(undefined),
			FourthDownAttempts: new FormControl<number | null | undefined>(undefined),
			FourthDownConversions: new FormControl<number | null | undefined>(undefined),
			FumbleReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			FumbleReturnYards: new FormControl<number | null | undefined>(undefined),
			FumblesForced: new FormControl<number | null | undefined>(undefined),
			FumblesRecovered: new FormControl<number | null | undefined>(undefined),
			Games: new FormControl<number | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			Humidity: new FormControl<number | null | undefined>(undefined),
			InterceptionReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			InterceptionReturnYards: new FormControl<number | null | undefined>(undefined),
			Interceptions: new FormControl<number | null | undefined>(undefined),
			KickReturnLong: new FormControl<number | null | undefined>(undefined),
			KickReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			KickReturnYards: new FormControl<number | null | undefined>(undefined),
			KickReturns: new FormControl<number | null | undefined>(undefined),
			KickerFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			OffensiveYardsAllowed: new FormControl<number | null | undefined>(undefined),
			PassesDefended: new FormControl<number | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			PointsAllowed: new FormControl<number | null | undefined>(undefined),
			PointsAllowedByDefenseSpecialTeams: new FormControl<number | null | undefined>(undefined),
			PuntReturnLong: new FormControl<number | null | undefined>(undefined),
			PuntReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			PuntReturnYards: new FormControl<number | null | undefined>(undefined),
			PuntReturns: new FormControl<number | null | undefined>(undefined),
			QuarterbackFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			QuarterbackHits: new FormControl<number | null | undefined>(undefined),
			RunningbackFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			SackYards: new FormControl<number | null | undefined>(undefined),
			Sacks: new FormControl<number | null | undefined>(undefined),
			Safeties: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			SoloTackles: new FormControl<number | null | undefined>(undefined),
			SpecialTeamsTouchdowns: new FormControl<number | null | undefined>(undefined),
			TacklesForLoss: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			Temperature: new FormControl<number | null | undefined>(undefined),
			ThirdDownAttempts: new FormControl<number | null | undefined>(undefined),
			ThirdDownConversions: new FormControl<number | null | undefined>(undefined),
			TightEndFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			TouchdownsScored: new FormControl<number | null | undefined>(undefined),
			TwoPointConversionReturns: new FormControl<number | null | undefined>(undefined),
			WideReceiverFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			WindSpeed: new FormControl<number | null | undefined>(undefined),
			YahooFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			YahooKickerFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			YahooQuarterbackFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			YahooRunningbackFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			YahooTightEndFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
			YahooWideReceiverFantasyPointsAllowed: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PlayerGameProjection {
		Activated?: number | null;
		AssistedTackles?: number | null;
		BlockedKickReturnTouchdowns?: number | null;
		BlockedKickReturnYards?: number | null;
		BlockedKicks?: number | null;
		DateTime?: string | null;
		Day?: string | null;
		DeclaredInactive?: boolean | null;
		DefensiveSnapsPlayed?: number | null;
		DefensiveTeamSnaps?: number | null;
		DefensiveTouchdowns?: number | null;
		DraftKingsPosition?: string | null;
		DraftKingsSalary?: number | null;
		ExtraPointsAttempted?: number | null;
		ExtraPointsHadBlocked?: number | null;
		ExtraPointsMade?: number | null;
		FanDuelPosition?: string | null;
		FanDuelSalary?: number | null;
		FantasyDataSalary?: number | null;
		FantasyDraftPosition?: string | null;
		FantasyDraftSalary?: number | null;
		FantasyPoints?: number | null;
		FantasyPointsDraftKings?: number | null;
		FantasyPointsFanDuel?: number | null;
		FantasyPointsFantasyDraft?: number | null;
		FantasyPointsPPR?: number | null;
		FantasyPointsYahoo?: number | null;
		FantasyPosition?: string | null;
		FieldGoalPercentage?: number | null;
		FieldGoalReturnTouchdowns?: number | null;
		FieldGoalReturnYards?: number | null;
		FieldGoalsAttempted?: number | null;
		FieldGoalsHadBlocked?: number | null;
		FieldGoalsLongestMade?: number | null;
		FieldGoalsMade?: number | null;
		FieldGoalsMade0to19?: number | null;
		FieldGoalsMade20to29?: number | null;
		FieldGoalsMade30to39?: number | null;
		FieldGoalsMade40to49?: number | null;
		FieldGoalsMade50Plus?: number | null;
		FumbleReturnTouchdowns?: number | null;
		FumbleReturnYards?: number | null;
		Fumbles?: number | null;
		FumblesForced?: number | null;
		FumblesLost?: number | null;
		FumblesOutOfBounds?: number | null;
		FumblesOwnRecoveries?: number | null;
		FumblesRecovered?: number | null;
		GameDate?: string | null;
		GameKey?: string | null;
		GlobalGameID?: number | null;
		GlobalOpponentID?: number | null;
		GlobalTeamID?: number | null;
		HomeOrAway?: string | null;
		Humidity?: number | null;
		InjuryBodyPart?: string | null;
		InjuryNotes?: string | null;
		InjuryPractice?: string | null;
		InjuryPracticeDescription?: string | null;
		InjuryStartDate?: string | null;
		InjuryStatus?: string | null;
		InterceptionReturnTouchdowns?: number | null;
		InterceptionReturnYards?: number | null;
		Interceptions?: number | null;
		IsGameOver?: boolean | null;
		KickReturnFairCatches?: number | null;
		KickReturnLong?: number | null;
		KickReturnTouchdowns?: number | null;
		KickReturnYards?: number | null;
		KickReturnYardsPerAttempt?: number | null;
		KickReturns?: number | null;
		MiscAssistedTackles?: number | null;
		MiscFumblesForced?: number | null;
		MiscFumblesRecovered?: number | null;
		MiscSoloTackles?: number | null;
		Name?: string | null;
		Number?: number | null;
		OffensiveFumbleRecoveryTouchdowns?: number | null;
		OffensiveSnapsPlayed?: number | null;
		OffensiveTeamSnaps?: number | null;
		OffensiveTouchdowns?: number | null;
		Opponent?: string | null;
		OpponentID?: number | null;
		OpponentPositionRank?: number | null;
		OpponentRank?: number | null;
		PassesDefended?: number | null;
		PassingAttempts?: number | null;
		PassingCompletionPercentage?: number | null;
		PassingCompletions?: number | null;
		PassingInterceptions?: number | null;
		PassingLong?: number | null;
		PassingRating?: number | null;
		PassingSackYards?: number | null;
		PassingSacks?: number | null;
		PassingTouchdowns?: number | null;
		PassingYards?: number | null;
		PassingYardsPerAttempt?: number | null;
		PassingYardsPerCompletion?: number | null;
		Played?: number | null;
		PlayerGameID?: number | null;
		PlayerID?: number | null;
		PlayingSurface?: string | null;
		Position?: string | null;
		PositionCategory?: string | null;
		PuntAverage?: number | null;
		PuntInside20?: number | null;
		PuntLong?: number | null;
		PuntNetAverage?: number | null;
		PuntNetYards?: number | null;
		PuntReturnFairCatches?: number | null;
		PuntReturnLong?: number | null;
		PuntReturnTouchdowns?: number | null;
		PuntReturnYards?: number | null;
		PuntReturnYardsPerAttempt?: number | null;
		PuntReturns?: number | null;
		PuntTouchbacks?: number | null;
		PuntYards?: number | null;
		Punts?: number | null;
		PuntsHadBlocked?: number | null;
		QuarterbackHits?: number | null;
		ReceivingLong?: number | null;
		ReceivingTargets?: number | null;
		ReceivingTouchdowns?: number | null;
		ReceivingYards?: number | null;
		ReceivingYardsPerReception?: number | null;
		ReceivingYardsPerTarget?: number | null;
		ReceptionPercentage?: number | null;
		Receptions?: number | null;
		RushingAttempts?: number | null;
		RushingLong?: number | null;
		RushingTouchdowns?: number | null;
		RushingYards?: number | null;
		RushingYardsPerAttempt?: number | null;
		SackYards?: number | null;
		Sacks?: number | null;
		Safeties?: number | null;
		SafetiesAllowed?: number | null;
		ScoreID?: number | null;
		ScoringDetails?: Array<ScoringDetail>;
		Season?: number | null;
		SeasonType?: number | null;
		ShortName?: string | null;
		SoloTackles?: number | null;
		SpecialTeamsAssistedTackles?: number | null;
		SpecialTeamsFumblesForced?: number | null;
		SpecialTeamsFumblesRecovered?: number | null;
		SpecialTeamsSnapsPlayed?: number | null;
		SpecialTeamsSoloTackles?: number | null;
		SpecialTeamsTeamSnaps?: number | null;
		SpecialTeamsTouchdowns?: number | null;
		Stadium?: string | null;
		Started?: number | null;
		Tackles?: number | null;
		TacklesForLoss?: number | null;
		Team?: string | null;
		TeamID?: number | null;
		Temperature?: number | null;
		Touchdowns?: number | null;
		TwoPointConversionPasses?: number | null;
		TwoPointConversionReceptions?: number | null;
		TwoPointConversionReturns?: number | null;
		TwoPointConversionRuns?: number | null;
		VictivSalary?: number | null;
		Week?: number | null;
		WindSpeed?: number | null;
		YahooPosition?: string | null;
		YahooSalary?: number | null;
	}
	export interface PlayerGameProjectionFormProperties {
		Activated: FormControl<number | null | undefined>,
		AssistedTackles: FormControl<number | null | undefined>,
		BlockedKickReturnTouchdowns: FormControl<number | null | undefined>,
		BlockedKickReturnYards: FormControl<number | null | undefined>,
		BlockedKicks: FormControl<number | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,
		DeclaredInactive: FormControl<boolean | null | undefined>,
		DefensiveSnapsPlayed: FormControl<number | null | undefined>,
		DefensiveTeamSnaps: FormControl<number | null | undefined>,
		DefensiveTouchdowns: FormControl<number | null | undefined>,
		DraftKingsPosition: FormControl<string | null | undefined>,
		DraftKingsSalary: FormControl<number | null | undefined>,
		ExtraPointsAttempted: FormControl<number | null | undefined>,
		ExtraPointsHadBlocked: FormControl<number | null | undefined>,
		ExtraPointsMade: FormControl<number | null | undefined>,
		FanDuelPosition: FormControl<string | null | undefined>,
		FanDuelSalary: FormControl<number | null | undefined>,
		FantasyDataSalary: FormControl<number | null | undefined>,
		FantasyDraftPosition: FormControl<string | null | undefined>,
		FantasyDraftSalary: FormControl<number | null | undefined>,
		FantasyPoints: FormControl<number | null | undefined>,
		FantasyPointsDraftKings: FormControl<number | null | undefined>,
		FantasyPointsFanDuel: FormControl<number | null | undefined>,
		FantasyPointsFantasyDraft: FormControl<number | null | undefined>,
		FantasyPointsPPR: FormControl<number | null | undefined>,
		FantasyPointsYahoo: FormControl<number | null | undefined>,
		FantasyPosition: FormControl<string | null | undefined>,
		FieldGoalPercentage: FormControl<number | null | undefined>,
		FieldGoalReturnTouchdowns: FormControl<number | null | undefined>,
		FieldGoalReturnYards: FormControl<number | null | undefined>,
		FieldGoalsAttempted: FormControl<number | null | undefined>,
		FieldGoalsHadBlocked: FormControl<number | null | undefined>,
		FieldGoalsLongestMade: FormControl<number | null | undefined>,
		FieldGoalsMade: FormControl<number | null | undefined>,
		FieldGoalsMade0to19: FormControl<number | null | undefined>,
		FieldGoalsMade20to29: FormControl<number | null | undefined>,
		FieldGoalsMade30to39: FormControl<number | null | undefined>,
		FieldGoalsMade40to49: FormControl<number | null | undefined>,
		FieldGoalsMade50Plus: FormControl<number | null | undefined>,
		FumbleReturnTouchdowns: FormControl<number | null | undefined>,
		FumbleReturnYards: FormControl<number | null | undefined>,
		Fumbles: FormControl<number | null | undefined>,
		FumblesForced: FormControl<number | null | undefined>,
		FumblesLost: FormControl<number | null | undefined>,
		FumblesOutOfBounds: FormControl<number | null | undefined>,
		FumblesOwnRecoveries: FormControl<number | null | undefined>,
		FumblesRecovered: FormControl<number | null | undefined>,
		GameDate: FormControl<string | null | undefined>,
		GameKey: FormControl<string | null | undefined>,
		GlobalGameID: FormControl<number | null | undefined>,
		GlobalOpponentID: FormControl<number | null | undefined>,
		GlobalTeamID: FormControl<number | null | undefined>,
		HomeOrAway: FormControl<string | null | undefined>,
		Humidity: FormControl<number | null | undefined>,
		InjuryBodyPart: FormControl<string | null | undefined>,
		InjuryNotes: FormControl<string | null | undefined>,
		InjuryPractice: FormControl<string | null | undefined>,
		InjuryPracticeDescription: FormControl<string | null | undefined>,
		InjuryStartDate: FormControl<string | null | undefined>,
		InjuryStatus: FormControl<string | null | undefined>,
		InterceptionReturnTouchdowns: FormControl<number | null | undefined>,
		InterceptionReturnYards: FormControl<number | null | undefined>,
		Interceptions: FormControl<number | null | undefined>,
		IsGameOver: FormControl<boolean | null | undefined>,
		KickReturnFairCatches: FormControl<number | null | undefined>,
		KickReturnLong: FormControl<number | null | undefined>,
		KickReturnTouchdowns: FormControl<number | null | undefined>,
		KickReturnYards: FormControl<number | null | undefined>,
		KickReturnYardsPerAttempt: FormControl<number | null | undefined>,
		KickReturns: FormControl<number | null | undefined>,
		MiscAssistedTackles: FormControl<number | null | undefined>,
		MiscFumblesForced: FormControl<number | null | undefined>,
		MiscFumblesRecovered: FormControl<number | null | undefined>,
		MiscSoloTackles: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Number: FormControl<number | null | undefined>,
		OffensiveFumbleRecoveryTouchdowns: FormControl<number | null | undefined>,
		OffensiveSnapsPlayed: FormControl<number | null | undefined>,
		OffensiveTeamSnaps: FormControl<number | null | undefined>,
		OffensiveTouchdowns: FormControl<number | null | undefined>,
		Opponent: FormControl<string | null | undefined>,
		OpponentID: FormControl<number | null | undefined>,
		OpponentPositionRank: FormControl<number | null | undefined>,
		OpponentRank: FormControl<number | null | undefined>,
		PassesDefended: FormControl<number | null | undefined>,
		PassingAttempts: FormControl<number | null | undefined>,
		PassingCompletionPercentage: FormControl<number | null | undefined>,
		PassingCompletions: FormControl<number | null | undefined>,
		PassingInterceptions: FormControl<number | null | undefined>,
		PassingLong: FormControl<number | null | undefined>,
		PassingRating: FormControl<number | null | undefined>,
		PassingSackYards: FormControl<number | null | undefined>,
		PassingSacks: FormControl<number | null | undefined>,
		PassingTouchdowns: FormControl<number | null | undefined>,
		PassingYards: FormControl<number | null | undefined>,
		PassingYardsPerAttempt: FormControl<number | null | undefined>,
		PassingYardsPerCompletion: FormControl<number | null | undefined>,
		Played: FormControl<number | null | undefined>,
		PlayerGameID: FormControl<number | null | undefined>,
		PlayerID: FormControl<number | null | undefined>,
		PlayingSurface: FormControl<string | null | undefined>,
		Position: FormControl<string | null | undefined>,
		PositionCategory: FormControl<string | null | undefined>,
		PuntAverage: FormControl<number | null | undefined>,
		PuntInside20: FormControl<number | null | undefined>,
		PuntLong: FormControl<number | null | undefined>,
		PuntNetAverage: FormControl<number | null | undefined>,
		PuntNetYards: FormControl<number | null | undefined>,
		PuntReturnFairCatches: FormControl<number | null | undefined>,
		PuntReturnLong: FormControl<number | null | undefined>,
		PuntReturnTouchdowns: FormControl<number | null | undefined>,
		PuntReturnYards: FormControl<number | null | undefined>,
		PuntReturnYardsPerAttempt: FormControl<number | null | undefined>,
		PuntReturns: FormControl<number | null | undefined>,
		PuntTouchbacks: FormControl<number | null | undefined>,
		PuntYards: FormControl<number | null | undefined>,
		Punts: FormControl<number | null | undefined>,
		PuntsHadBlocked: FormControl<number | null | undefined>,
		QuarterbackHits: FormControl<number | null | undefined>,
		ReceivingLong: FormControl<number | null | undefined>,
		ReceivingTargets: FormControl<number | null | undefined>,
		ReceivingTouchdowns: FormControl<number | null | undefined>,
		ReceivingYards: FormControl<number | null | undefined>,
		ReceivingYardsPerReception: FormControl<number | null | undefined>,
		ReceivingYardsPerTarget: FormControl<number | null | undefined>,
		ReceptionPercentage: FormControl<number | null | undefined>,
		Receptions: FormControl<number | null | undefined>,
		RushingAttempts: FormControl<number | null | undefined>,
		RushingLong: FormControl<number | null | undefined>,
		RushingTouchdowns: FormControl<number | null | undefined>,
		RushingYards: FormControl<number | null | undefined>,
		RushingYardsPerAttempt: FormControl<number | null | undefined>,
		SackYards: FormControl<number | null | undefined>,
		Sacks: FormControl<number | null | undefined>,
		Safeties: FormControl<number | null | undefined>,
		SafetiesAllowed: FormControl<number | null | undefined>,
		ScoreID: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		ShortName: FormControl<string | null | undefined>,
		SoloTackles: FormControl<number | null | undefined>,
		SpecialTeamsAssistedTackles: FormControl<number | null | undefined>,
		SpecialTeamsFumblesForced: FormControl<number | null | undefined>,
		SpecialTeamsFumblesRecovered: FormControl<number | null | undefined>,
		SpecialTeamsSnapsPlayed: FormControl<number | null | undefined>,
		SpecialTeamsSoloTackles: FormControl<number | null | undefined>,
		SpecialTeamsTeamSnaps: FormControl<number | null | undefined>,
		SpecialTeamsTouchdowns: FormControl<number | null | undefined>,
		Stadium: FormControl<string | null | undefined>,
		Started: FormControl<number | null | undefined>,
		Tackles: FormControl<number | null | undefined>,
		TacklesForLoss: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
		Temperature: FormControl<number | null | undefined>,
		Touchdowns: FormControl<number | null | undefined>,
		TwoPointConversionPasses: FormControl<number | null | undefined>,
		TwoPointConversionReceptions: FormControl<number | null | undefined>,
		TwoPointConversionReturns: FormControl<number | null | undefined>,
		TwoPointConversionRuns: FormControl<number | null | undefined>,
		VictivSalary: FormControl<number | null | undefined>,
		Week: FormControl<number | null | undefined>,
		WindSpeed: FormControl<number | null | undefined>,
		YahooPosition: FormControl<string | null | undefined>,
		YahooSalary: FormControl<number | null | undefined>,
	}
	export function CreatePlayerGameProjectionFormGroup() {
		return new FormGroup<PlayerGameProjectionFormProperties>({
			Activated: new FormControl<number | null | undefined>(undefined),
			AssistedTackles: new FormControl<number | null | undefined>(undefined),
			BlockedKickReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			BlockedKickReturnYards: new FormControl<number | null | undefined>(undefined),
			BlockedKicks: new FormControl<number | null | undefined>(undefined),
			DateTime: new FormControl<string | null | undefined>(undefined),
			Day: new FormControl<string | null | undefined>(undefined),
			DeclaredInactive: new FormControl<boolean | null | undefined>(undefined),
			DefensiveSnapsPlayed: new FormControl<number | null | undefined>(undefined),
			DefensiveTeamSnaps: new FormControl<number | null | undefined>(undefined),
			DefensiveTouchdowns: new FormControl<number | null | undefined>(undefined),
			DraftKingsPosition: new FormControl<string | null | undefined>(undefined),
			DraftKingsSalary: new FormControl<number | null | undefined>(undefined),
			ExtraPointsAttempted: new FormControl<number | null | undefined>(undefined),
			ExtraPointsHadBlocked: new FormControl<number | null | undefined>(undefined),
			ExtraPointsMade: new FormControl<number | null | undefined>(undefined),
			FanDuelPosition: new FormControl<string | null | undefined>(undefined),
			FanDuelSalary: new FormControl<number | null | undefined>(undefined),
			FantasyDataSalary: new FormControl<number | null | undefined>(undefined),
			FantasyDraftPosition: new FormControl<string | null | undefined>(undefined),
			FantasyDraftSalary: new FormControl<number | null | undefined>(undefined),
			FantasyPoints: new FormControl<number | null | undefined>(undefined),
			FantasyPointsDraftKings: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFanDuel: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFantasyDraft: new FormControl<number | null | undefined>(undefined),
			FantasyPointsPPR: new FormControl<number | null | undefined>(undefined),
			FantasyPointsYahoo: new FormControl<number | null | undefined>(undefined),
			FantasyPosition: new FormControl<string | null | undefined>(undefined),
			FieldGoalPercentage: new FormControl<number | null | undefined>(undefined),
			FieldGoalReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			FieldGoalReturnYards: new FormControl<number | null | undefined>(undefined),
			FieldGoalsAttempted: new FormControl<number | null | undefined>(undefined),
			FieldGoalsHadBlocked: new FormControl<number | null | undefined>(undefined),
			FieldGoalsLongestMade: new FormControl<number | null | undefined>(undefined),
			FieldGoalsMade: new FormControl<number | null | undefined>(undefined),
			FieldGoalsMade0to19: new FormControl<number | null | undefined>(undefined),
			FieldGoalsMade20to29: new FormControl<number | null | undefined>(undefined),
			FieldGoalsMade30to39: new FormControl<number | null | undefined>(undefined),
			FieldGoalsMade40to49: new FormControl<number | null | undefined>(undefined),
			FieldGoalsMade50Plus: new FormControl<number | null | undefined>(undefined),
			FumbleReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			FumbleReturnYards: new FormControl<number | null | undefined>(undefined),
			Fumbles: new FormControl<number | null | undefined>(undefined),
			FumblesForced: new FormControl<number | null | undefined>(undefined),
			FumblesLost: new FormControl<number | null | undefined>(undefined),
			FumblesOutOfBounds: new FormControl<number | null | undefined>(undefined),
			FumblesOwnRecoveries: new FormControl<number | null | undefined>(undefined),
			FumblesRecovered: new FormControl<number | null | undefined>(undefined),
			GameDate: new FormControl<string | null | undefined>(undefined),
			GameKey: new FormControl<string | null | undefined>(undefined),
			GlobalGameID: new FormControl<number | null | undefined>(undefined),
			GlobalOpponentID: new FormControl<number | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			HomeOrAway: new FormControl<string | null | undefined>(undefined),
			Humidity: new FormControl<number | null | undefined>(undefined),
			InjuryBodyPart: new FormControl<string | null | undefined>(undefined),
			InjuryNotes: new FormControl<string | null | undefined>(undefined),
			InjuryPractice: new FormControl<string | null | undefined>(undefined),
			InjuryPracticeDescription: new FormControl<string | null | undefined>(undefined),
			InjuryStartDate: new FormControl<string | null | undefined>(undefined),
			InjuryStatus: new FormControl<string | null | undefined>(undefined),
			InterceptionReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			InterceptionReturnYards: new FormControl<number | null | undefined>(undefined),
			Interceptions: new FormControl<number | null | undefined>(undefined),
			IsGameOver: new FormControl<boolean | null | undefined>(undefined),
			KickReturnFairCatches: new FormControl<number | null | undefined>(undefined),
			KickReturnLong: new FormControl<number | null | undefined>(undefined),
			KickReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			KickReturnYards: new FormControl<number | null | undefined>(undefined),
			KickReturnYardsPerAttempt: new FormControl<number | null | undefined>(undefined),
			KickReturns: new FormControl<number | null | undefined>(undefined),
			MiscAssistedTackles: new FormControl<number | null | undefined>(undefined),
			MiscFumblesForced: new FormControl<number | null | undefined>(undefined),
			MiscFumblesRecovered: new FormControl<number | null | undefined>(undefined),
			MiscSoloTackles: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Number: new FormControl<number | null | undefined>(undefined),
			OffensiveFumbleRecoveryTouchdowns: new FormControl<number | null | undefined>(undefined),
			OffensiveSnapsPlayed: new FormControl<number | null | undefined>(undefined),
			OffensiveTeamSnaps: new FormControl<number | null | undefined>(undefined),
			OffensiveTouchdowns: new FormControl<number | null | undefined>(undefined),
			Opponent: new FormControl<string | null | undefined>(undefined),
			OpponentID: new FormControl<number | null | undefined>(undefined),
			OpponentPositionRank: new FormControl<number | null | undefined>(undefined),
			OpponentRank: new FormControl<number | null | undefined>(undefined),
			PassesDefended: new FormControl<number | null | undefined>(undefined),
			PassingAttempts: new FormControl<number | null | undefined>(undefined),
			PassingCompletionPercentage: new FormControl<number | null | undefined>(undefined),
			PassingCompletions: new FormControl<number | null | undefined>(undefined),
			PassingInterceptions: new FormControl<number | null | undefined>(undefined),
			PassingLong: new FormControl<number | null | undefined>(undefined),
			PassingRating: new FormControl<number | null | undefined>(undefined),
			PassingSackYards: new FormControl<number | null | undefined>(undefined),
			PassingSacks: new FormControl<number | null | undefined>(undefined),
			PassingTouchdowns: new FormControl<number | null | undefined>(undefined),
			PassingYards: new FormControl<number | null | undefined>(undefined),
			PassingYardsPerAttempt: new FormControl<number | null | undefined>(undefined),
			PassingYardsPerCompletion: new FormControl<number | null | undefined>(undefined),
			Played: new FormControl<number | null | undefined>(undefined),
			PlayerGameID: new FormControl<number | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			PlayingSurface: new FormControl<string | null | undefined>(undefined),
			Position: new FormControl<string | null | undefined>(undefined),
			PositionCategory: new FormControl<string | null | undefined>(undefined),
			PuntAverage: new FormControl<number | null | undefined>(undefined),
			PuntInside20: new FormControl<number | null | undefined>(undefined),
			PuntLong: new FormControl<number | null | undefined>(undefined),
			PuntNetAverage: new FormControl<number | null | undefined>(undefined),
			PuntNetYards: new FormControl<number | null | undefined>(undefined),
			PuntReturnFairCatches: new FormControl<number | null | undefined>(undefined),
			PuntReturnLong: new FormControl<number | null | undefined>(undefined),
			PuntReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			PuntReturnYards: new FormControl<number | null | undefined>(undefined),
			PuntReturnYardsPerAttempt: new FormControl<number | null | undefined>(undefined),
			PuntReturns: new FormControl<number | null | undefined>(undefined),
			PuntTouchbacks: new FormControl<number | null | undefined>(undefined),
			PuntYards: new FormControl<number | null | undefined>(undefined),
			Punts: new FormControl<number | null | undefined>(undefined),
			PuntsHadBlocked: new FormControl<number | null | undefined>(undefined),
			QuarterbackHits: new FormControl<number | null | undefined>(undefined),
			ReceivingLong: new FormControl<number | null | undefined>(undefined),
			ReceivingTargets: new FormControl<number | null | undefined>(undefined),
			ReceivingTouchdowns: new FormControl<number | null | undefined>(undefined),
			ReceivingYards: new FormControl<number | null | undefined>(undefined),
			ReceivingYardsPerReception: new FormControl<number | null | undefined>(undefined),
			ReceivingYardsPerTarget: new FormControl<number | null | undefined>(undefined),
			ReceptionPercentage: new FormControl<number | null | undefined>(undefined),
			Receptions: new FormControl<number | null | undefined>(undefined),
			RushingAttempts: new FormControl<number | null | undefined>(undefined),
			RushingLong: new FormControl<number | null | undefined>(undefined),
			RushingTouchdowns: new FormControl<number | null | undefined>(undefined),
			RushingYards: new FormControl<number | null | undefined>(undefined),
			RushingYardsPerAttempt: new FormControl<number | null | undefined>(undefined),
			SackYards: new FormControl<number | null | undefined>(undefined),
			Sacks: new FormControl<number | null | undefined>(undefined),
			Safeties: new FormControl<number | null | undefined>(undefined),
			SafetiesAllowed: new FormControl<number | null | undefined>(undefined),
			ScoreID: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			ShortName: new FormControl<string | null | undefined>(undefined),
			SoloTackles: new FormControl<number | null | undefined>(undefined),
			SpecialTeamsAssistedTackles: new FormControl<number | null | undefined>(undefined),
			SpecialTeamsFumblesForced: new FormControl<number | null | undefined>(undefined),
			SpecialTeamsFumblesRecovered: new FormControl<number | null | undefined>(undefined),
			SpecialTeamsSnapsPlayed: new FormControl<number | null | undefined>(undefined),
			SpecialTeamsSoloTackles: new FormControl<number | null | undefined>(undefined),
			SpecialTeamsTeamSnaps: new FormControl<number | null | undefined>(undefined),
			SpecialTeamsTouchdowns: new FormControl<number | null | undefined>(undefined),
			Stadium: new FormControl<string | null | undefined>(undefined),
			Started: new FormControl<number | null | undefined>(undefined),
			Tackles: new FormControl<number | null | undefined>(undefined),
			TacklesForLoss: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			Temperature: new FormControl<number | null | undefined>(undefined),
			Touchdowns: new FormControl<number | null | undefined>(undefined),
			TwoPointConversionPasses: new FormControl<number | null | undefined>(undefined),
			TwoPointConversionReceptions: new FormControl<number | null | undefined>(undefined),
			TwoPointConversionReturns: new FormControl<number | null | undefined>(undefined),
			TwoPointConversionRuns: new FormControl<number | null | undefined>(undefined),
			VictivSalary: new FormControl<number | null | undefined>(undefined),
			Week: new FormControl<number | null | undefined>(undefined),
			WindSpeed: new FormControl<number | null | undefined>(undefined),
			YahooPosition: new FormControl<string | null | undefined>(undefined),
			YahooSalary: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PlayerSeasonProjection {
		Activated?: number | null;
		AssistedTackles?: number | null;
		AuctionValue?: number | null;
		AuctionValuePPR?: number | null;
		AverageDraftPosition?: number | null;
		AverageDraftPosition2QB?: number | null;
		AverageDraftPositionDynasty?: number | null;
		AverageDraftPositionPPR?: number | null;
		AverageDraftPositionRookie?: number | null;
		BlockedKickReturnTouchdowns?: number | null;
		BlockedKickReturnYards?: number | null;
		BlockedKicks?: number | null;
		DefensiveSnapsPlayed?: number | null;
		DefensiveTeamSnaps?: number | null;
		DefensiveTouchdowns?: number | null;
		ExtraPointsAttempted?: number | null;
		ExtraPointsHadBlocked?: number | null;
		ExtraPointsMade?: number | null;
		FantasyPoints?: number | null;
		FantasyPointsDraftKings?: number | null;
		FantasyPointsFanDuel?: number | null;
		FantasyPointsFantasyDraft?: number | null;
		FantasyPointsPPR?: number | null;
		FantasyPointsYahoo?: number | null;
		FantasyPosition?: string | null;
		FieldGoalPercentage?: number | null;
		FieldGoalReturnTouchdowns?: number | null;
		FieldGoalReturnYards?: number | null;
		FieldGoalsAttempted?: number | null;
		FieldGoalsHadBlocked?: number | null;
		FieldGoalsLongestMade?: number | null;
		FieldGoalsMade?: number | null;
		FieldGoalsMade0to19?: number | null;
		FieldGoalsMade20to29?: number | null;
		FieldGoalsMade30to39?: number | null;
		FieldGoalsMade40to49?: number | null;
		FieldGoalsMade50Plus?: number | null;
		FumbleReturnTouchdowns?: number | null;
		FumbleReturnYards?: number | null;
		Fumbles?: number | null;
		FumblesForced?: number | null;
		FumblesLost?: number | null;
		FumblesOutOfBounds?: number | null;
		FumblesOwnRecoveries?: number | null;
		FumblesRecovered?: number | null;
		GlobalTeamID?: number | null;
		Humidity?: number | null;
		InterceptionReturnTouchdowns?: number | null;
		InterceptionReturnYards?: number | null;
		Interceptions?: number | null;
		KickReturnFairCatches?: number | null;
		KickReturnLong?: number | null;
		KickReturnTouchdowns?: number | null;
		KickReturnYards?: number | null;
		KickReturnYardsPerAttempt?: number | null;
		KickReturns?: number | null;
		MiscAssistedTackles?: number | null;
		MiscFumblesForced?: number | null;
		MiscFumblesRecovered?: number | null;
		MiscSoloTackles?: number | null;
		Name?: string | null;
		Number?: number | null;
		OffensiveSnapsPlayed?: number | null;
		OffensiveTeamSnaps?: number | null;
		OffensiveTouchdowns?: number | null;
		PassesDefended?: number | null;
		PassingAttempts?: number | null;
		PassingCompletionPercentage?: number | null;
		PassingCompletions?: number | null;
		PassingInterceptions?: number | null;
		PassingLong?: number | null;
		PassingRating?: number | null;
		PassingSackYards?: number | null;
		PassingSacks?: number | null;
		PassingTouchdowns?: number | null;
		PassingYards?: number | null;
		PassingYardsPerAttempt?: number | null;
		PassingYardsPerCompletion?: number | null;
		Played?: number | null;
		PlayerID?: number | null;
		PlayerSeasonID?: number | null;
		Position?: string | null;
		PositionCategory?: string | null;
		PuntAverage?: number | null;
		PuntInside20?: number | null;
		PuntLong?: number | null;
		PuntNetAverage?: number | null;
		PuntNetYards?: number | null;
		PuntReturnFairCatches?: number | null;
		PuntReturnLong?: number | null;
		PuntReturnTouchdowns?: number | null;
		PuntReturnYards?: number | null;
		PuntReturnYardsPerAttempt?: number | null;
		PuntReturns?: number | null;
		PuntTouchbacks?: number | null;
		PuntYards?: number | null;
		Punts?: number | null;
		PuntsHadBlocked?: number | null;
		QuarterbackHits?: number | null;
		ReceivingLong?: number | null;
		ReceivingTargets?: number | null;
		ReceivingTouchdowns?: number | null;
		ReceivingYards?: number | null;
		ReceivingYardsPerReception?: number | null;
		ReceivingYardsPerTarget?: number | null;
		ReceptionPercentage?: number | null;
		Receptions?: number | null;
		RushingAttempts?: number | null;
		RushingLong?: number | null;
		RushingTouchdowns?: number | null;
		RushingYards?: number | null;
		RushingYardsPerAttempt?: number | null;
		SackYards?: number | null;
		Sacks?: number | null;
		Safeties?: number | null;
		SafetiesAllowed?: number | null;
		ScoringDetails?: Array<ScoringDetail>;
		Season?: number | null;
		SeasonType?: number | null;
		ShortName?: string | null;
		SoloTackles?: number | null;
		SpecialTeamsAssistedTackles?: number | null;
		SpecialTeamsFumblesForced?: number | null;
		SpecialTeamsFumblesRecovered?: number | null;
		SpecialTeamsSnapsPlayed?: number | null;
		SpecialTeamsSoloTackles?: number | null;
		SpecialTeamsTeamSnaps?: number | null;
		SpecialTeamsTouchdowns?: number | null;
		Started?: number | null;
		Tackles?: number | null;
		TacklesForLoss?: number | null;
		Team?: string | null;
		TeamID?: number | null;
		Temperature?: number | null;
		Touchdowns?: number | null;
		TwoPointConversionPasses?: number | null;
		TwoPointConversionReceptions?: number | null;
		TwoPointConversionReturns?: number | null;
		TwoPointConversionRuns?: number | null;
		WindSpeed?: number | null;
	}
	export interface PlayerSeasonProjectionFormProperties {
		Activated: FormControl<number | null | undefined>,
		AssistedTackles: FormControl<number | null | undefined>,
		AuctionValue: FormControl<number | null | undefined>,
		AuctionValuePPR: FormControl<number | null | undefined>,
		AverageDraftPosition: FormControl<number | null | undefined>,
		AverageDraftPosition2QB: FormControl<number | null | undefined>,
		AverageDraftPositionDynasty: FormControl<number | null | undefined>,
		AverageDraftPositionPPR: FormControl<number | null | undefined>,
		AverageDraftPositionRookie: FormControl<number | null | undefined>,
		BlockedKickReturnTouchdowns: FormControl<number | null | undefined>,
		BlockedKickReturnYards: FormControl<number | null | undefined>,
		BlockedKicks: FormControl<number | null | undefined>,
		DefensiveSnapsPlayed: FormControl<number | null | undefined>,
		DefensiveTeamSnaps: FormControl<number | null | undefined>,
		DefensiveTouchdowns: FormControl<number | null | undefined>,
		ExtraPointsAttempted: FormControl<number | null | undefined>,
		ExtraPointsHadBlocked: FormControl<number | null | undefined>,
		ExtraPointsMade: FormControl<number | null | undefined>,
		FantasyPoints: FormControl<number | null | undefined>,
		FantasyPointsDraftKings: FormControl<number | null | undefined>,
		FantasyPointsFanDuel: FormControl<number | null | undefined>,
		FantasyPointsFantasyDraft: FormControl<number | null | undefined>,
		FantasyPointsPPR: FormControl<number | null | undefined>,
		FantasyPointsYahoo: FormControl<number | null | undefined>,
		FantasyPosition: FormControl<string | null | undefined>,
		FieldGoalPercentage: FormControl<number | null | undefined>,
		FieldGoalReturnTouchdowns: FormControl<number | null | undefined>,
		FieldGoalReturnYards: FormControl<number | null | undefined>,
		FieldGoalsAttempted: FormControl<number | null | undefined>,
		FieldGoalsHadBlocked: FormControl<number | null | undefined>,
		FieldGoalsLongestMade: FormControl<number | null | undefined>,
		FieldGoalsMade: FormControl<number | null | undefined>,
		FieldGoalsMade0to19: FormControl<number | null | undefined>,
		FieldGoalsMade20to29: FormControl<number | null | undefined>,
		FieldGoalsMade30to39: FormControl<number | null | undefined>,
		FieldGoalsMade40to49: FormControl<number | null | undefined>,
		FieldGoalsMade50Plus: FormControl<number | null | undefined>,
		FumbleReturnTouchdowns: FormControl<number | null | undefined>,
		FumbleReturnYards: FormControl<number | null | undefined>,
		Fumbles: FormControl<number | null | undefined>,
		FumblesForced: FormControl<number | null | undefined>,
		FumblesLost: FormControl<number | null | undefined>,
		FumblesOutOfBounds: FormControl<number | null | undefined>,
		FumblesOwnRecoveries: FormControl<number | null | undefined>,
		FumblesRecovered: FormControl<number | null | undefined>,
		GlobalTeamID: FormControl<number | null | undefined>,
		Humidity: FormControl<number | null | undefined>,
		InterceptionReturnTouchdowns: FormControl<number | null | undefined>,
		InterceptionReturnYards: FormControl<number | null | undefined>,
		Interceptions: FormControl<number | null | undefined>,
		KickReturnFairCatches: FormControl<number | null | undefined>,
		KickReturnLong: FormControl<number | null | undefined>,
		KickReturnTouchdowns: FormControl<number | null | undefined>,
		KickReturnYards: FormControl<number | null | undefined>,
		KickReturnYardsPerAttempt: FormControl<number | null | undefined>,
		KickReturns: FormControl<number | null | undefined>,
		MiscAssistedTackles: FormControl<number | null | undefined>,
		MiscFumblesForced: FormControl<number | null | undefined>,
		MiscFumblesRecovered: FormControl<number | null | undefined>,
		MiscSoloTackles: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Number: FormControl<number | null | undefined>,
		OffensiveSnapsPlayed: FormControl<number | null | undefined>,
		OffensiveTeamSnaps: FormControl<number | null | undefined>,
		OffensiveTouchdowns: FormControl<number | null | undefined>,
		PassesDefended: FormControl<number | null | undefined>,
		PassingAttempts: FormControl<number | null | undefined>,
		PassingCompletionPercentage: FormControl<number | null | undefined>,
		PassingCompletions: FormControl<number | null | undefined>,
		PassingInterceptions: FormControl<number | null | undefined>,
		PassingLong: FormControl<number | null | undefined>,
		PassingRating: FormControl<number | null | undefined>,
		PassingSackYards: FormControl<number | null | undefined>,
		PassingSacks: FormControl<number | null | undefined>,
		PassingTouchdowns: FormControl<number | null | undefined>,
		PassingYards: FormControl<number | null | undefined>,
		PassingYardsPerAttempt: FormControl<number | null | undefined>,
		PassingYardsPerCompletion: FormControl<number | null | undefined>,
		Played: FormControl<number | null | undefined>,
		PlayerID: FormControl<number | null | undefined>,
		PlayerSeasonID: FormControl<number | null | undefined>,
		Position: FormControl<string | null | undefined>,
		PositionCategory: FormControl<string | null | undefined>,
		PuntAverage: FormControl<number | null | undefined>,
		PuntInside20: FormControl<number | null | undefined>,
		PuntLong: FormControl<number | null | undefined>,
		PuntNetAverage: FormControl<number | null | undefined>,
		PuntNetYards: FormControl<number | null | undefined>,
		PuntReturnFairCatches: FormControl<number | null | undefined>,
		PuntReturnLong: FormControl<number | null | undefined>,
		PuntReturnTouchdowns: FormControl<number | null | undefined>,
		PuntReturnYards: FormControl<number | null | undefined>,
		PuntReturnYardsPerAttempt: FormControl<number | null | undefined>,
		PuntReturns: FormControl<number | null | undefined>,
		PuntTouchbacks: FormControl<number | null | undefined>,
		PuntYards: FormControl<number | null | undefined>,
		Punts: FormControl<number | null | undefined>,
		PuntsHadBlocked: FormControl<number | null | undefined>,
		QuarterbackHits: FormControl<number | null | undefined>,
		ReceivingLong: FormControl<number | null | undefined>,
		ReceivingTargets: FormControl<number | null | undefined>,
		ReceivingTouchdowns: FormControl<number | null | undefined>,
		ReceivingYards: FormControl<number | null | undefined>,
		ReceivingYardsPerReception: FormControl<number | null | undefined>,
		ReceivingYardsPerTarget: FormControl<number | null | undefined>,
		ReceptionPercentage: FormControl<number | null | undefined>,
		Receptions: FormControl<number | null | undefined>,
		RushingAttempts: FormControl<number | null | undefined>,
		RushingLong: FormControl<number | null | undefined>,
		RushingTouchdowns: FormControl<number | null | undefined>,
		RushingYards: FormControl<number | null | undefined>,
		RushingYardsPerAttempt: FormControl<number | null | undefined>,
		SackYards: FormControl<number | null | undefined>,
		Sacks: FormControl<number | null | undefined>,
		Safeties: FormControl<number | null | undefined>,
		SafetiesAllowed: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		ShortName: FormControl<string | null | undefined>,
		SoloTackles: FormControl<number | null | undefined>,
		SpecialTeamsAssistedTackles: FormControl<number | null | undefined>,
		SpecialTeamsFumblesForced: FormControl<number | null | undefined>,
		SpecialTeamsFumblesRecovered: FormControl<number | null | undefined>,
		SpecialTeamsSnapsPlayed: FormControl<number | null | undefined>,
		SpecialTeamsSoloTackles: FormControl<number | null | undefined>,
		SpecialTeamsTeamSnaps: FormControl<number | null | undefined>,
		SpecialTeamsTouchdowns: FormControl<number | null | undefined>,
		Started: FormControl<number | null | undefined>,
		Tackles: FormControl<number | null | undefined>,
		TacklesForLoss: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
		Temperature: FormControl<number | null | undefined>,
		Touchdowns: FormControl<number | null | undefined>,
		TwoPointConversionPasses: FormControl<number | null | undefined>,
		TwoPointConversionReceptions: FormControl<number | null | undefined>,
		TwoPointConversionReturns: FormControl<number | null | undefined>,
		TwoPointConversionRuns: FormControl<number | null | undefined>,
		WindSpeed: FormControl<number | null | undefined>,
	}
	export function CreatePlayerSeasonProjectionFormGroup() {
		return new FormGroup<PlayerSeasonProjectionFormProperties>({
			Activated: new FormControl<number | null | undefined>(undefined),
			AssistedTackles: new FormControl<number | null | undefined>(undefined),
			AuctionValue: new FormControl<number | null | undefined>(undefined),
			AuctionValuePPR: new FormControl<number | null | undefined>(undefined),
			AverageDraftPosition: new FormControl<number | null | undefined>(undefined),
			AverageDraftPosition2QB: new FormControl<number | null | undefined>(undefined),
			AverageDraftPositionDynasty: new FormControl<number | null | undefined>(undefined),
			AverageDraftPositionPPR: new FormControl<number | null | undefined>(undefined),
			AverageDraftPositionRookie: new FormControl<number | null | undefined>(undefined),
			BlockedKickReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			BlockedKickReturnYards: new FormControl<number | null | undefined>(undefined),
			BlockedKicks: new FormControl<number | null | undefined>(undefined),
			DefensiveSnapsPlayed: new FormControl<number | null | undefined>(undefined),
			DefensiveTeamSnaps: new FormControl<number | null | undefined>(undefined),
			DefensiveTouchdowns: new FormControl<number | null | undefined>(undefined),
			ExtraPointsAttempted: new FormControl<number | null | undefined>(undefined),
			ExtraPointsHadBlocked: new FormControl<number | null | undefined>(undefined),
			ExtraPointsMade: new FormControl<number | null | undefined>(undefined),
			FantasyPoints: new FormControl<number | null | undefined>(undefined),
			FantasyPointsDraftKings: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFanDuel: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFantasyDraft: new FormControl<number | null | undefined>(undefined),
			FantasyPointsPPR: new FormControl<number | null | undefined>(undefined),
			FantasyPointsYahoo: new FormControl<number | null | undefined>(undefined),
			FantasyPosition: new FormControl<string | null | undefined>(undefined),
			FieldGoalPercentage: new FormControl<number | null | undefined>(undefined),
			FieldGoalReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			FieldGoalReturnYards: new FormControl<number | null | undefined>(undefined),
			FieldGoalsAttempted: new FormControl<number | null | undefined>(undefined),
			FieldGoalsHadBlocked: new FormControl<number | null | undefined>(undefined),
			FieldGoalsLongestMade: new FormControl<number | null | undefined>(undefined),
			FieldGoalsMade: new FormControl<number | null | undefined>(undefined),
			FieldGoalsMade0to19: new FormControl<number | null | undefined>(undefined),
			FieldGoalsMade20to29: new FormControl<number | null | undefined>(undefined),
			FieldGoalsMade30to39: new FormControl<number | null | undefined>(undefined),
			FieldGoalsMade40to49: new FormControl<number | null | undefined>(undefined),
			FieldGoalsMade50Plus: new FormControl<number | null | undefined>(undefined),
			FumbleReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			FumbleReturnYards: new FormControl<number | null | undefined>(undefined),
			Fumbles: new FormControl<number | null | undefined>(undefined),
			FumblesForced: new FormControl<number | null | undefined>(undefined),
			FumblesLost: new FormControl<number | null | undefined>(undefined),
			FumblesOutOfBounds: new FormControl<number | null | undefined>(undefined),
			FumblesOwnRecoveries: new FormControl<number | null | undefined>(undefined),
			FumblesRecovered: new FormControl<number | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			Humidity: new FormControl<number | null | undefined>(undefined),
			InterceptionReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			InterceptionReturnYards: new FormControl<number | null | undefined>(undefined),
			Interceptions: new FormControl<number | null | undefined>(undefined),
			KickReturnFairCatches: new FormControl<number | null | undefined>(undefined),
			KickReturnLong: new FormControl<number | null | undefined>(undefined),
			KickReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			KickReturnYards: new FormControl<number | null | undefined>(undefined),
			KickReturnYardsPerAttempt: new FormControl<number | null | undefined>(undefined),
			KickReturns: new FormControl<number | null | undefined>(undefined),
			MiscAssistedTackles: new FormControl<number | null | undefined>(undefined),
			MiscFumblesForced: new FormControl<number | null | undefined>(undefined),
			MiscFumblesRecovered: new FormControl<number | null | undefined>(undefined),
			MiscSoloTackles: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Number: new FormControl<number | null | undefined>(undefined),
			OffensiveSnapsPlayed: new FormControl<number | null | undefined>(undefined),
			OffensiveTeamSnaps: new FormControl<number | null | undefined>(undefined),
			OffensiveTouchdowns: new FormControl<number | null | undefined>(undefined),
			PassesDefended: new FormControl<number | null | undefined>(undefined),
			PassingAttempts: new FormControl<number | null | undefined>(undefined),
			PassingCompletionPercentage: new FormControl<number | null | undefined>(undefined),
			PassingCompletions: new FormControl<number | null | undefined>(undefined),
			PassingInterceptions: new FormControl<number | null | undefined>(undefined),
			PassingLong: new FormControl<number | null | undefined>(undefined),
			PassingRating: new FormControl<number | null | undefined>(undefined),
			PassingSackYards: new FormControl<number | null | undefined>(undefined),
			PassingSacks: new FormControl<number | null | undefined>(undefined),
			PassingTouchdowns: new FormControl<number | null | undefined>(undefined),
			PassingYards: new FormControl<number | null | undefined>(undefined),
			PassingYardsPerAttempt: new FormControl<number | null | undefined>(undefined),
			PassingYardsPerCompletion: new FormControl<number | null | undefined>(undefined),
			Played: new FormControl<number | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			PlayerSeasonID: new FormControl<number | null | undefined>(undefined),
			Position: new FormControl<string | null | undefined>(undefined),
			PositionCategory: new FormControl<string | null | undefined>(undefined),
			PuntAverage: new FormControl<number | null | undefined>(undefined),
			PuntInside20: new FormControl<number | null | undefined>(undefined),
			PuntLong: new FormControl<number | null | undefined>(undefined),
			PuntNetAverage: new FormControl<number | null | undefined>(undefined),
			PuntNetYards: new FormControl<number | null | undefined>(undefined),
			PuntReturnFairCatches: new FormControl<number | null | undefined>(undefined),
			PuntReturnLong: new FormControl<number | null | undefined>(undefined),
			PuntReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			PuntReturnYards: new FormControl<number | null | undefined>(undefined),
			PuntReturnYardsPerAttempt: new FormControl<number | null | undefined>(undefined),
			PuntReturns: new FormControl<number | null | undefined>(undefined),
			PuntTouchbacks: new FormControl<number | null | undefined>(undefined),
			PuntYards: new FormControl<number | null | undefined>(undefined),
			Punts: new FormControl<number | null | undefined>(undefined),
			PuntsHadBlocked: new FormControl<number | null | undefined>(undefined),
			QuarterbackHits: new FormControl<number | null | undefined>(undefined),
			ReceivingLong: new FormControl<number | null | undefined>(undefined),
			ReceivingTargets: new FormControl<number | null | undefined>(undefined),
			ReceivingTouchdowns: new FormControl<number | null | undefined>(undefined),
			ReceivingYards: new FormControl<number | null | undefined>(undefined),
			ReceivingYardsPerReception: new FormControl<number | null | undefined>(undefined),
			ReceivingYardsPerTarget: new FormControl<number | null | undefined>(undefined),
			ReceptionPercentage: new FormControl<number | null | undefined>(undefined),
			Receptions: new FormControl<number | null | undefined>(undefined),
			RushingAttempts: new FormControl<number | null | undefined>(undefined),
			RushingLong: new FormControl<number | null | undefined>(undefined),
			RushingTouchdowns: new FormControl<number | null | undefined>(undefined),
			RushingYards: new FormControl<number | null | undefined>(undefined),
			RushingYardsPerAttempt: new FormControl<number | null | undefined>(undefined),
			SackYards: new FormControl<number | null | undefined>(undefined),
			Sacks: new FormControl<number | null | undefined>(undefined),
			Safeties: new FormControl<number | null | undefined>(undefined),
			SafetiesAllowed: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			ShortName: new FormControl<string | null | undefined>(undefined),
			SoloTackles: new FormControl<number | null | undefined>(undefined),
			SpecialTeamsAssistedTackles: new FormControl<number | null | undefined>(undefined),
			SpecialTeamsFumblesForced: new FormControl<number | null | undefined>(undefined),
			SpecialTeamsFumblesRecovered: new FormControl<number | null | undefined>(undefined),
			SpecialTeamsSnapsPlayed: new FormControl<number | null | undefined>(undefined),
			SpecialTeamsSoloTackles: new FormControl<number | null | undefined>(undefined),
			SpecialTeamsTeamSnaps: new FormControl<number | null | undefined>(undefined),
			SpecialTeamsTouchdowns: new FormControl<number | null | undefined>(undefined),
			Started: new FormControl<number | null | undefined>(undefined),
			Tackles: new FormControl<number | null | undefined>(undefined),
			TacklesForLoss: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			Temperature: new FormControl<number | null | undefined>(undefined),
			Touchdowns: new FormControl<number | null | undefined>(undefined),
			TwoPointConversionPasses: new FormControl<number | null | undefined>(undefined),
			TwoPointConversionReceptions: new FormControl<number | null | undefined>(undefined),
			TwoPointConversionReturns: new FormControl<number | null | undefined>(undefined),
			TwoPointConversionRuns: new FormControl<number | null | undefined>(undefined),
			WindSpeed: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Schedule {
		AwayTeam?: string | null;
		AwayTeamMoneyLine?: number | null;
		Canceled?: boolean | null;
		Channel?: string | null;
		Date?: string | null;
		DateTime?: string | null;
		Day?: string | null;
		ForecastDescription?: string | null;
		ForecastTempHigh?: number | null;
		ForecastTempLow?: number | null;
		ForecastWindChill?: number | null;
		ForecastWindSpeed?: number | null;
		GameKey?: string | null;
		GeoLat?: number | null;
		GeoLong?: number | null;
		GlobalAwayTeamID?: number | null;
		GlobalGameID?: number | null;
		GlobalHomeTeamID?: number | null;
		HomeTeam?: string | null;
		HomeTeamMoneyLine?: number | null;
		OverUnder?: number | null;
		PointSpread?: number | null;
		ScoreID?: number | null;
		Season?: number | null;
		SeasonType?: number | null;
		StadiumDetails?: Stadium;
		StadiumID?: number | null;
		Status?: string | null;
		Week?: number | null;
	}
	export interface ScheduleFormProperties {
		AwayTeam: FormControl<string | null | undefined>,
		AwayTeamMoneyLine: FormControl<number | null | undefined>,
		Canceled: FormControl<boolean | null | undefined>,
		Channel: FormControl<string | null | undefined>,
		Date: FormControl<string | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,
		ForecastDescription: FormControl<string | null | undefined>,
		ForecastTempHigh: FormControl<number | null | undefined>,
		ForecastTempLow: FormControl<number | null | undefined>,
		ForecastWindChill: FormControl<number | null | undefined>,
		ForecastWindSpeed: FormControl<number | null | undefined>,
		GameKey: FormControl<string | null | undefined>,
		GeoLat: FormControl<number | null | undefined>,
		GeoLong: FormControl<number | null | undefined>,
		GlobalAwayTeamID: FormControl<number | null | undefined>,
		GlobalGameID: FormControl<number | null | undefined>,
		GlobalHomeTeamID: FormControl<number | null | undefined>,
		HomeTeam: FormControl<string | null | undefined>,
		HomeTeamMoneyLine: FormControl<number | null | undefined>,
		OverUnder: FormControl<number | null | undefined>,
		PointSpread: FormControl<number | null | undefined>,
		ScoreID: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		StadiumID: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Week: FormControl<number | null | undefined>,
	}
	export function CreateScheduleFormGroup() {
		return new FormGroup<ScheduleFormProperties>({
			AwayTeam: new FormControl<string | null | undefined>(undefined),
			AwayTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			Canceled: new FormControl<boolean | null | undefined>(undefined),
			Channel: new FormControl<string | null | undefined>(undefined),
			Date: new FormControl<string | null | undefined>(undefined),
			DateTime: new FormControl<string | null | undefined>(undefined),
			Day: new FormControl<string | null | undefined>(undefined),
			ForecastDescription: new FormControl<string | null | undefined>(undefined),
			ForecastTempHigh: new FormControl<number | null | undefined>(undefined),
			ForecastTempLow: new FormControl<number | null | undefined>(undefined),
			ForecastWindChill: new FormControl<number | null | undefined>(undefined),
			ForecastWindSpeed: new FormControl<number | null | undefined>(undefined),
			GameKey: new FormControl<string | null | undefined>(undefined),
			GeoLat: new FormControl<number | null | undefined>(undefined),
			GeoLong: new FormControl<number | null | undefined>(undefined),
			GlobalAwayTeamID: new FormControl<number | null | undefined>(undefined),
			GlobalGameID: new FormControl<number | null | undefined>(undefined),
			GlobalHomeTeamID: new FormControl<number | null | undefined>(undefined),
			HomeTeam: new FormControl<string | null | undefined>(undefined),
			HomeTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			OverUnder: new FormControl<number | null | undefined>(undefined),
			PointSpread: new FormControl<number | null | undefined>(undefined),
			ScoreID: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			StadiumID: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Week: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Stadium {
		Capacity?: number | null;
		City?: string | null;
		Country?: string | null;
		GeoLat?: number | null;
		GeoLong?: number | null;
		Name?: string | null;
		PlayingSurface?: string | null;
		StadiumID?: number | null;
		State?: string | null;
		Type?: string | null;
	}
	export interface StadiumFormProperties {
		Capacity: FormControl<number | null | undefined>,
		City: FormControl<string | null | undefined>,
		Country: FormControl<string | null | undefined>,
		GeoLat: FormControl<number | null | undefined>,
		GeoLong: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PlayingSurface: FormControl<string | null | undefined>,
		StadiumID: FormControl<number | null | undefined>,
		State: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateStadiumFormGroup() {
		return new FormGroup<StadiumFormProperties>({
			Capacity: new FormControl<number | null | undefined>(undefined),
			City: new FormControl<string | null | undefined>(undefined),
			Country: new FormControl<string | null | undefined>(undefined),
			GeoLat: new FormControl<number | null | undefined>(undefined),
			GeoLong: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PlayingSurface: new FormControl<string | null | undefined>(undefined),
			StadiumID: new FormControl<number | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
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
		 * <br>Examples: <code>2017-SEP-25</code>, <code>2017-10-31</code>.
		 * @return {Array<DfsSlate>} 
		 */
		DfsSlatesByDate(format: DfsSlatesByDateFormat, date: string): Observable<Array<DfsSlate>> {
			return this.http.get<Array<DfsSlate>>(this.baseUri + format + '/DfsSlatesByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * DFS Slates by Week
		 * Get {format}/DfsSlatesByWeek/{season}/{week}
		 * @param {DfsSlatesByDateFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season and the season type. If no season type is provided, then the default is regular season.
		 *           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>
		 * @param {string} week Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.
		 *           Example: <code>1</code>
		 * @return {Array<DfsSlate>} 
		 */
		DfsSlatesByWeek(format: DfsSlatesByDateFormat, season: string, week: string): Observable<Array<DfsSlate>> {
			return this.http.get<Array<DfsSlate>>(this.baseUri + format + '/DfsSlatesByWeek/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (week == null ? '' : encodeURIComponent(week)) + '', {});
		}

		/**
		 * Projected Fantasy Defense Game Stats (w/ DFS Salaries)
		 * Get {format}/FantasyDefenseProjectionsByGame/{season}/{week}
		 * @param {DfsSlatesByDateFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season and the season type. If no season type is provided, then the default is regular season.
		 *           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
		 *         
		 * @param {string} week Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.
		 *           Example: <code>1</code>
		 *         
		 * @return {Array<FantasyDefenseGameProjection>} 
		 */
		ProjectedFantasyDefenseGameStatsWDfsSalaries(format: DfsSlatesByDateFormat, season: string, week: string): Observable<Array<FantasyDefenseGameProjection>> {
			return this.http.get<Array<FantasyDefenseGameProjection>>(this.baseUri + format + '/FantasyDefenseProjectionsByGame/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (week == null ? '' : encodeURIComponent(week)) + '', {});
		}

		/**
		 * Projected Fantasy Defense Season Stats (w/ Bye Week, ADP)
		 * Get {format}/FantasyDefenseProjectionsBySeason/{season}
		 * @param {DfsSlatesByDateFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season and the season type. If no season type is provided, then the default is regular season.
		 *           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
		 *         
		 * @return {Array<FantasyDefenseSeasonProjection>} 
		 */
		ProjectedFantasyDefenseSeasonStatsWByeWeekAdp(format: DfsSlatesByDateFormat, season: string): Observable<Array<FantasyDefenseSeasonProjection>> {
			return this.http.get<Array<FantasyDefenseSeasonProjection>>(this.baseUri + format + '/FantasyDefenseProjectionsBySeason/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * IDP Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)
		 * Get {format}/IdpPlayerGameProjectionStatsByPlayerID/{season}/{week}/{playerid}
		 * @param {DfsSlatesByDateFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season and the season type. If no season type is provided, then the default is regular season.
		 *           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
		 *         
		 * @param {string} week Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.
		 *           Example: <code>1</code>
		 *         
		 * @param {string} playerid Each NFL player has a unique ID assigned by FantasyData. Player IDs can be determined by pulling player related data. Example:<code>14257</code>.
		 * @return {PlayerGameProjection} 
		 */
		IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries(format: DfsSlatesByDateFormat, season: string, week: string, playerid: string): Observable<PlayerGameProjection> {
			return this.http.get<PlayerGameProjection>(this.baseUri + format + '/IdpPlayerGameProjectionStatsByPlayerID/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (week == null ? '' : encodeURIComponent(week)) + '/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}

		/**
		 * IDP Projected Player Game Stats by Team (w/ Injuries, Lineups, DFS Salaries)
		 * Get {format}/IdpPlayerGameProjectionStatsByTeam/{season}/{week}/{team}
		 * @param {DfsSlatesByDateFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season and the season type. If no season type is provided, then the default is regular season.
		 *           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
		 *         
		 * @param {string} week Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.
		 *           Example: <code>1</code>
		 *         
		 * @param {string} team Abbreviation of the team. Example: <code>WAS</code>.
		 * @return {Array<PlayerGameProjection>} 
		 */
		IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries(format: DfsSlatesByDateFormat, season: string, week: string, team: string): Observable<Array<PlayerGameProjection>> {
			return this.http.get<Array<PlayerGameProjection>>(this.baseUri + format + '/IdpPlayerGameProjectionStatsByTeam/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (week == null ? '' : encodeURIComponent(week)) + '/' + (team == null ? '' : encodeURIComponent(team)) + '', {});
		}

		/**
		 * IDP Projected Player Game Stats by Week (w/ Injuries, Lineups, DFS Salaries)
		 * Get {format}/IdpPlayerGameProjectionStatsByWeek/{season}/{week}
		 * @param {DfsSlatesByDateFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season and the season type. If no season type is provided, then the default is regular season.
		 *           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
		 *         
		 * @param {string} week Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.
		 *           Example: <code>1</code>
		 *         
		 * @return {Array<PlayerGameProjection>} 
		 */
		IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries(format: DfsSlatesByDateFormat, season: string, week: string): Observable<Array<PlayerGameProjection>> {
			return this.http.get<Array<PlayerGameProjection>>(this.baseUri + format + '/IdpPlayerGameProjectionStatsByWeek/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (week == null ? '' : encodeURIComponent(week)) + '', {});
		}

		/**
		 * Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)
		 * Get {format}/PlayerGameProjectionStatsByPlayerID/{season}/{week}/{playerid}
		 * @param {DfsSlatesByDateFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season and the season type. If no season type is provided, then the default is regular season.
		 *           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
		 *         
		 * @param {string} week 
		 *           Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.
		 *           Example: <code>1</code>
		 *         
		 * @param {string} playerid Each NFL player has a unique ID assigned by FantasyData. Player IDs can be determined by pulling player related data. Example:<code>14257</code>.
		 * @return {PlayerGameProjection} 
		 */
		ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries(format: DfsSlatesByDateFormat, season: string, week: string, playerid: string): Observable<PlayerGameProjection> {
			return this.http.get<PlayerGameProjection>(this.baseUri + format + '/PlayerGameProjectionStatsByPlayerID/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (week == null ? '' : encodeURIComponent(week)) + '/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}

		/**
		 * Projected Player Game Stats by Team (w/ Injuries, Lineups, DFS Salaries)
		 * Get {format}/PlayerGameProjectionStatsByTeam/{season}/{week}/{team}
		 * @param {DfsSlatesByDateFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season and the season type. If no season type is provided, then the default is regular season.
		 *           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
		 *         
		 * @param {string} week Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.
		 *           Example: <code>1</code>
		 *         
		 * @param {string} team Abbreviation of the team. Example: <code>WAS</code>.
		 * @return {Array<PlayerGameProjection>} 
		 */
		ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries(format: DfsSlatesByDateFormat, season: string, week: string, team: string): Observable<Array<PlayerGameProjection>> {
			return this.http.get<Array<PlayerGameProjection>>(this.baseUri + format + '/PlayerGameProjectionStatsByTeam/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (week == null ? '' : encodeURIComponent(week)) + '/' + (team == null ? '' : encodeURIComponent(team)) + '', {});
		}

		/**
		 * Projected Player Game Stats by Week (w/ Injuries, Lineups, DFS Salaries)
		 * Get {format}/PlayerGameProjectionStatsByWeek/{season}/{week}
		 * @param {DfsSlatesByDateFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season and the season type. If no season type is provided, then the default is regular season.
		 *           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
		 *         
		 * @param {string} week 
		 *           Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.
		 *           Example: <code>1</code>
		 *         
		 * @return {Array<PlayerGameProjection>} 
		 */
		ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries(format: DfsSlatesByDateFormat, season: string, week: string): Observable<Array<PlayerGameProjection>> {
			return this.http.get<Array<PlayerGameProjection>>(this.baseUri + format + '/PlayerGameProjectionStatsByWeek/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (week == null ? '' : encodeURIComponent(week)) + '', {});
		}

		/**
		 * Projected Player Season Stats (w/ Bye Week, ADP)
		 * Get {format}/PlayerSeasonProjectionStats/{season}
		 * @param {DfsSlatesByDateFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season and the season type. If no season type is provided, then the default is regular season.
		 *           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
		 *         
		 * @return {Array<PlayerSeasonProjection>} 
		 */
		ProjectedPlayerSeasonStatsWByeWeekAdp(format: DfsSlatesByDateFormat, season: string): Observable<Array<PlayerSeasonProjection>> {
			return this.http.get<Array<PlayerSeasonProjection>>(this.baseUri + format + '/PlayerSeasonProjectionStats/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * Projected Player Season Stats by Player (w/ Bye Week, ADP)
		 * Get {format}/PlayerSeasonProjectionStatsByPlayerID/{season}/{playerid}
		 * @param {DfsSlatesByDateFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season and the season type. If no season type is provided, then the default is regular season.
		 *           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
		 *         
		 * @param {string} playerid Each NFL player has a unique ID assigned by FantasyData. Player IDs can be determined by pulling player related data. Example:<code>14257</code>.
		 * @return {PlayerSeasonProjection} 
		 */
		ProjectedPlayerSeasonStatsByPlayerWByeWeekAdp(format: DfsSlatesByDateFormat, season: string, playerid: string): Observable<PlayerSeasonProjection> {
			return this.http.get<PlayerSeasonProjection>(this.baseUri + format + '/PlayerSeasonProjectionStatsByPlayerID/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}

		/**
		 * Projected Player Season Stats by Team (w/ Bye Week, ADP)
		 * Get {format}/PlayerSeasonProjectionStatsByTeam/{season}/{team}
		 * @param {DfsSlatesByDateFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season and the season type. If no season type is provided, then the default is regular season.
		 *           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
		 *         
		 * @param {string} team Abbreviation of the team. Example: <code>WAS</code>.
		 * @return {Array<PlayerSeasonProjection>} 
		 */
		ProjectedPlayerSeasonStatsByTeamWByeWeekAdp(format: DfsSlatesByDateFormat, season: string, team: string): Observable<Array<PlayerSeasonProjection>> {
			return this.http.get<Array<PlayerSeasonProjection>>(this.baseUri + format + '/PlayerSeasonProjectionStatsByTeam/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (team == null ? '' : encodeURIComponent(team)) + '', {});
		}
	}

	export enum DfsSlatesByDateFormat { XML = 0, JSON = 1 }

}

