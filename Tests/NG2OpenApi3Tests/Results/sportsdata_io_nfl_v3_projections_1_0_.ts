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
		Game?: Schedule;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GameID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OperatorGameID?: number | null;
		RemovedByOperator?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreID?: number | null;

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
		ScoreID: FormControl<number | null | undefined>,

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
			ScoreID: new FormControl<number | null | undefined>(undefined),
			SlateGameID: new FormControl<number | null | undefined>(undefined),
			SlateID: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DfsSlatePlayer {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FantasyDefenseProjectionStatID?: number | null;
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
		Team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID?: number | null;
	}
	export interface DfsSlatePlayerFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FantasyDefenseProjectionStatID: FormControl<number | null | undefined>,
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
		Team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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
			RemovedByOperator: new FormControl<boolean | null | undefined>(undefined),
			SlateGameID: new FormControl<number | null | undefined>(undefined),
			SlateID: new FormControl<number | null | undefined>(undefined),
			SlatePlayerID: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DfsSlatePlayerOwnershipProjection {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FantasyDefensePlayerID?: number | null;
		IsCaptain?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID?: number | null;

		/** Type: double */
		ProjectedOwnershipPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SlateID?: number | null;
	}
	export interface DfsSlatePlayerOwnershipProjectionFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FantasyDefensePlayerID: FormControl<number | null | undefined>,
		IsCaptain: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID: FormControl<number | null | undefined>,

		/** Type: double */
		ProjectedOwnershipPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SlateID: FormControl<number | null | undefined>,
	}
	export function CreateDfsSlatePlayerOwnershipProjectionFormGroup() {
		return new FormGroup<DfsSlatePlayerOwnershipProjectionFormProperties>({
			FantasyDefensePlayerID: new FormControl<number | null | undefined>(undefined),
			IsCaptain: new FormControl<boolean | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			ProjectedOwnershipPercentage: new FormControl<number | null | undefined>(undefined),
			SlateID: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DfsSlateWithOwnershipProjection {
		Operator?: string | null;
		OperatorDay?: string | null;
		OperatorName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OperatorSlateID?: number | null;
		OperatorStartTime?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SlateID?: number | null;
		SlateOwnershipProjections?: Array<DfsSlatePlayerOwnershipProjection>;
	}
	export interface DfsSlateWithOwnershipProjectionFormProperties {
		Operator: FormControl<string | null | undefined>,
		OperatorDay: FormControl<string | null | undefined>,
		OperatorName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OperatorSlateID: FormControl<number | null | undefined>,
		OperatorStartTime: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SlateID: FormControl<number | null | undefined>,
	}
	export function CreateDfsSlateWithOwnershipProjectionFormGroup() {
		return new FormGroup<DfsSlateWithOwnershipProjectionFormProperties>({
			Operator: new FormControl<string | null | undefined>(undefined),
			OperatorDay: new FormControl<string | null | undefined>(undefined),
			OperatorName: new FormControl<string | null | undefined>(undefined),
			OperatorSlateID: new FormControl<number | null | undefined>(undefined),
			OperatorStartTime: new FormControl<string | null | undefined>(undefined),
			SlateID: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface FantasyDefenseGameProjection {

		/** Type: double */
		AssistedTackles?: number | null;

		/** Type: double */
		BlockedKickReturnTouchdowns?: number | null;

		/** Type: double */
		BlockedKickReturnYards?: number | null;

		/** Type: double */
		BlockedKicks?: number | null;
		Date?: string | null;
		DateTime?: string | null;
		Day?: string | null;

		/** Type: double */
		DefensiveTouchdowns?: number | null;

		/** Type: double */
		DraftKingsFantasyPointsAllowed?: number | null;

		/** Type: double */
		DraftKingsKickerFantasyPointsAllowed?: number | null;
		DraftKingsPosition?: string | null;

		/** Type: double */
		DraftKingsQuarterbackFantasyPointsAllowed?: number | null;

		/** Type: double */
		DraftKingsRunningbackFantasyPointsAllowed?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DraftKingsSalary?: number | null;

		/** Type: double */
		DraftKingsTightEndFantasyPointsAllowed?: number | null;

		/** Type: double */
		DraftKingsWideReceiverFantasyPointsAllowed?: number | null;

		/** Type: double */
		FanDuelFantasyPointsAllowed?: number | null;

		/** Type: double */
		FanDuelKickerFantasyPointsAllowed?: number | null;
		FanDuelPosition?: string | null;

		/** Type: double */
		FanDuelQuarterbackFantasyPointsAllowed?: number | null;

		/** Type: double */
		FanDuelRunningbackFantasyPointsAllowed?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FanDuelSalary?: number | null;

		/** Type: double */
		FanDuelTightEndFantasyPointsAllowed?: number | null;

		/** Type: double */
		FanDuelWideReceiverFantasyPointsAllowed?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FantasyDataSalary?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FantasyDefenseID?: number | null;

		/** Type: double */
		FantasyDraftFantasyPointsAllowed?: number | null;

		/** Type: double */
		FantasyDraftKickerFantasyPointsAllowed?: number | null;
		FantasyDraftPosition?: string | null;

		/** Type: double */
		FantasyDraftQuarterbackFantasyPointsAllowed?: number | null;

		/** Type: double */
		FantasyDraftRunningbackFantasyPointsAllowed?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FantasyDraftSalary?: number | null;

		/** Type: double */
		FantasyDraftTightEndFantasyPointsAllowed?: number | null;

		/** Type: double */
		FantasyDraftWideReceiverFantasyPointsAllowed?: number | null;

		/** Type: double */
		FantasyPoints?: number | null;

		/** Type: double */
		FantasyPointsAllowed?: number | null;

		/** Type: double */
		FantasyPointsDraftKings?: number | null;

		/** Type: double */
		FantasyPointsFanDuel?: number | null;

		/** Type: double */
		FantasyPointsFantasyDraft?: number | null;

		/** Type: double */
		FantasyPointsYahoo?: number | null;

		/** Type: double */
		FieldGoalReturnTouchdowns?: number | null;

		/** Type: double */
		FieldGoalReturnYards?: number | null;

		/** Type: double */
		FourthDownAttempts?: number | null;

		/** Type: double */
		FourthDownConversions?: number | null;

		/** Type: double */
		FumbleReturnTouchdowns?: number | null;

		/** Type: double */
		FumbleReturnYards?: number | null;

		/** Type: double */
		FumblesForced?: number | null;

		/** Type: double */
		FumblesRecovered?: number | null;
		GameKey?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalGameID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalOpponentID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID?: number | null;
		HomeOrAway?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Humidity?: number | null;

		/** Type: double */
		InterceptionReturnTouchdowns?: number | null;

		/** Type: double */
		InterceptionReturnYards?: number | null;

		/** Type: double */
		Interceptions?: number | null;
		IsGameOver?: boolean | null;

		/** Type: double */
		KickReturnLong?: number | null;

		/** Type: double */
		KickReturnTouchdowns?: number | null;

		/** Type: double */
		KickReturnYards?: number | null;

		/** Type: double */
		KickReturns?: number | null;

		/** Type: double */
		KickerFantasyPointsAllowed?: number | null;

		/** Type: double */
		OffensiveYardsAllowed?: number | null;
		Opponent?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPositionRank?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentRank?: number | null;

		/** Type: double */
		PassesDefended?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID?: number | null;

		/** Type: double */
		PointsAllowed?: number | null;

		/** Type: double */
		PointsAllowedByDefenseSpecialTeams?: number | null;

		/** Type: double */
		PuntReturnLong?: number | null;

		/** Type: double */
		PuntReturnTouchdowns?: number | null;

		/** Type: double */
		PuntReturnYards?: number | null;

		/** Type: double */
		PuntReturns?: number | null;

		/** Type: double */
		QuarterbackFantasyPointsAllowed?: number | null;

		/** Type: double */
		QuarterbackHits?: number | null;

		/** Type: double */
		RunningbackFantasyPointsAllowed?: number | null;

		/** Type: double */
		SackYards?: number | null;

		/** Type: double */
		Sacks?: number | null;

		/** Type: double */
		Safeties?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreID?: number | null;
		ScoringDetails?: Array<ScoringDetail>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType?: number | null;

		/** Type: double */
		SoloTackles?: number | null;

		/** Type: double */
		SpecialTeamsTouchdowns?: number | null;
		Stadium?: string | null;

		/** Type: double */
		TacklesForLoss?: number | null;
		Team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Temperature?: number | null;

		/** Type: double */
		ThirdDownAttempts?: number | null;

		/** Type: double */
		ThirdDownConversions?: number | null;

		/** Type: double */
		TightEndFantasyPointsAllowed?: number | null;

		/** Type: double */
		TouchdownsScored?: number | null;

		/** Type: double */
		TwoPointConversionReturns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		VictivSalary?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Week?: number | null;

		/** Type: double */
		WideReceiverFantasyPointsAllowed?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		WindSpeed?: number | null;

		/** Type: double */
		YahooFantasyPointsAllowed?: number | null;

		/** Type: double */
		YahooKickerFantasyPointsAllowed?: number | null;
		YahooPosition?: string | null;

		/** Type: double */
		YahooQuarterbackFantasyPointsAllowed?: number | null;

		/** Type: double */
		YahooRunningbackFantasyPointsAllowed?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		YahooSalary?: number | null;

		/** Type: double */
		YahooTightEndFantasyPointsAllowed?: number | null;

		/** Type: double */
		YahooWideReceiverFantasyPointsAllowed?: number | null;
	}
	export interface FantasyDefenseGameProjectionFormProperties {

		/** Type: double */
		AssistedTackles: FormControl<number | null | undefined>,

		/** Type: double */
		BlockedKickReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: double */
		BlockedKickReturnYards: FormControl<number | null | undefined>,

		/** Type: double */
		BlockedKicks: FormControl<number | null | undefined>,
		Date: FormControl<string | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,

		/** Type: double */
		DefensiveTouchdowns: FormControl<number | null | undefined>,

		/** Type: double */
		DraftKingsFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
		DraftKingsKickerFantasyPointsAllowed: FormControl<number | null | undefined>,
		DraftKingsPosition: FormControl<string | null | undefined>,

		/** Type: double */
		DraftKingsQuarterbackFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
		DraftKingsRunningbackFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DraftKingsSalary: FormControl<number | null | undefined>,

		/** Type: double */
		DraftKingsTightEndFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
		DraftKingsWideReceiverFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
		FanDuelFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
		FanDuelKickerFantasyPointsAllowed: FormControl<number | null | undefined>,
		FanDuelPosition: FormControl<string | null | undefined>,

		/** Type: double */
		FanDuelQuarterbackFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
		FanDuelRunningbackFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FanDuelSalary: FormControl<number | null | undefined>,

		/** Type: double */
		FanDuelTightEndFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
		FanDuelWideReceiverFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FantasyDataSalary: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FantasyDefenseID: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyDraftFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyDraftKickerFantasyPointsAllowed: FormControl<number | null | undefined>,
		FantasyDraftPosition: FormControl<string | null | undefined>,

		/** Type: double */
		FantasyDraftQuarterbackFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyDraftRunningbackFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FantasyDraftSalary: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyDraftTightEndFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyDraftWideReceiverFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPoints: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPointsDraftKings: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPointsFanDuel: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPointsFantasyDraft: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPointsYahoo: FormControl<number | null | undefined>,

		/** Type: double */
		FieldGoalReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: double */
		FieldGoalReturnYards: FormControl<number | null | undefined>,

		/** Type: double */
		FourthDownAttempts: FormControl<number | null | undefined>,

		/** Type: double */
		FourthDownConversions: FormControl<number | null | undefined>,

		/** Type: double */
		FumbleReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: double */
		FumbleReturnYards: FormControl<number | null | undefined>,

		/** Type: double */
		FumblesForced: FormControl<number | null | undefined>,

		/** Type: double */
		FumblesRecovered: FormControl<number | null | undefined>,
		GameKey: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalGameID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalOpponentID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID: FormControl<number | null | undefined>,
		HomeOrAway: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Humidity: FormControl<number | null | undefined>,

		/** Type: double */
		InterceptionReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: double */
		InterceptionReturnYards: FormControl<number | null | undefined>,

		/** Type: double */
		Interceptions: FormControl<number | null | undefined>,
		IsGameOver: FormControl<boolean | null | undefined>,

		/** Type: double */
		KickReturnLong: FormControl<number | null | undefined>,

		/** Type: double */
		KickReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: double */
		KickReturnYards: FormControl<number | null | undefined>,

		/** Type: double */
		KickReturns: FormControl<number | null | undefined>,

		/** Type: double */
		KickerFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
		OffensiveYardsAllowed: FormControl<number | null | undefined>,
		Opponent: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPositionRank: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentRank: FormControl<number | null | undefined>,

		/** Type: double */
		PassesDefended: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID: FormControl<number | null | undefined>,

		/** Type: double */
		PointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
		PointsAllowedByDefenseSpecialTeams: FormControl<number | null | undefined>,

		/** Type: double */
		PuntReturnLong: FormControl<number | null | undefined>,

		/** Type: double */
		PuntReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: double */
		PuntReturnYards: FormControl<number | null | undefined>,

		/** Type: double */
		PuntReturns: FormControl<number | null | undefined>,

		/** Type: double */
		QuarterbackFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
		QuarterbackHits: FormControl<number | null | undefined>,

		/** Type: double */
		RunningbackFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
		SackYards: FormControl<number | null | undefined>,

		/** Type: double */
		Sacks: FormControl<number | null | undefined>,

		/** Type: double */
		Safeties: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType: FormControl<number | null | undefined>,

		/** Type: double */
		SoloTackles: FormControl<number | null | undefined>,

		/** Type: double */
		SpecialTeamsTouchdowns: FormControl<number | null | undefined>,
		Stadium: FormControl<string | null | undefined>,

		/** Type: double */
		TacklesForLoss: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Temperature: FormControl<number | null | undefined>,

		/** Type: double */
		ThirdDownAttempts: FormControl<number | null | undefined>,

		/** Type: double */
		ThirdDownConversions: FormControl<number | null | undefined>,

		/** Type: double */
		TightEndFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
		TouchdownsScored: FormControl<number | null | undefined>,

		/** Type: double */
		TwoPointConversionReturns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		VictivSalary: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Week: FormControl<number | null | undefined>,

		/** Type: double */
		WideReceiverFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		WindSpeed: FormControl<number | null | undefined>,

		/** Type: double */
		YahooFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
		YahooKickerFantasyPointsAllowed: FormControl<number | null | undefined>,
		YahooPosition: FormControl<string | null | undefined>,

		/** Type: double */
		YahooQuarterbackFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
		YahooRunningbackFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		YahooSalary: FormControl<number | null | undefined>,

		/** Type: double */
		YahooTightEndFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Length?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerGameID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoringDetailID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoringPlayID?: number | null;
		ScoringType?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType?: number | null;
		Team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Week?: number | null;
	}
	export interface ScoringDetailFormProperties {
		GameKey: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Length: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerGameID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoringDetailID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoringPlayID: FormControl<number | null | undefined>,
		ScoringType: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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
			ScoringPlayID: new FormControl<number | null | undefined>(undefined),
			ScoringType: new FormControl<string | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			Week: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface FantasyDefenseSeasonProjection {

		/** Type: double */
		AssistedTackles?: number | null;

		/** Type: double */
		AuctionValue?: number | null;

		/** Type: double */
		AuctionValuePPR?: number | null;

		/** Type: double */
		AverageDraftPosition?: number | null;

		/** Type: double */
		AverageDraftPosition2QB?: number | null;

		/** Type: double */
		AverageDraftPositionDynasty?: number | null;

		/** Type: double */
		AverageDraftPositionPPR?: number | null;

		/** Type: double */
		BlockedKickReturnTouchdowns?: number | null;

		/** Type: double */
		BlockedKickReturnYards?: number | null;

		/** Type: double */
		BlockedKicks?: number | null;

		/** Type: double */
		DefensiveTouchdowns?: number | null;

		/** Type: double */
		DraftKingsFantasyPointsAllowed?: number | null;

		/** Type: double */
		DraftKingsKickerFantasyPointsAllowed?: number | null;

		/** Type: double */
		DraftKingsQuarterbackFantasyPointsAllowed?: number | null;

		/** Type: double */
		DraftKingsRunningbackFantasyPointsAllowed?: number | null;

		/** Type: double */
		DraftKingsTightEndFantasyPointsAllowed?: number | null;

		/** Type: double */
		DraftKingsWideReceiverFantasyPointsAllowed?: number | null;

		/** Type: double */
		FanDuelFantasyPointsAllowed?: number | null;

		/** Type: double */
		FanDuelKickerFantasyPointsAllowed?: number | null;

		/** Type: double */
		FanDuelQuarterbackFantasyPointsAllowed?: number | null;

		/** Type: double */
		FanDuelRunningbackFantasyPointsAllowed?: number | null;

		/** Type: double */
		FanDuelTightEndFantasyPointsAllowed?: number | null;

		/** Type: double */
		FanDuelWideReceiverFantasyPointsAllowed?: number | null;

		/** Type: double */
		FantasyDraftFantasyPointsAllowed?: number | null;

		/** Type: double */
		FantasyDraftKickerFantasyPointsAllowed?: number | null;

		/** Type: double */
		FantasyDraftQuarterbackFantasyPointsAllowed?: number | null;

		/** Type: double */
		FantasyDraftRunningbackFantasyPointsAllowed?: number | null;

		/** Type: double */
		FantasyDraftTightEndFantasyPointsAllowed?: number | null;

		/** Type: double */
		FantasyDraftWideReceiverFantasyPointsAllowed?: number | null;

		/** Type: double */
		FantasyPoints?: number | null;

		/** Type: double */
		FantasyPointsAllowed?: number | null;

		/** Type: double */
		FantasyPointsDraftKings?: number | null;

		/** Type: double */
		FantasyPointsFanDuel?: number | null;

		/** Type: double */
		FantasyPointsFantasyDraft?: number | null;

		/** Type: double */
		FantasyPointsYahoo?: number | null;

		/** Type: double */
		FieldGoalReturnTouchdowns?: number | null;

		/** Type: double */
		FieldGoalReturnYards?: number | null;

		/** Type: double */
		FourthDownAttempts?: number | null;

		/** Type: double */
		FourthDownConversions?: number | null;

		/** Type: double */
		FumbleReturnTouchdowns?: number | null;

		/** Type: double */
		FumbleReturnYards?: number | null;

		/** Type: double */
		FumblesForced?: number | null;

		/** Type: double */
		FumblesRecovered?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Games?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Humidity?: number | null;

		/** Type: double */
		InterceptionReturnTouchdowns?: number | null;

		/** Type: double */
		InterceptionReturnYards?: number | null;

		/** Type: double */
		Interceptions?: number | null;

		/** Type: double */
		KickReturnLong?: number | null;

		/** Type: double */
		KickReturnTouchdowns?: number | null;

		/** Type: double */
		KickReturnYards?: number | null;

		/** Type: double */
		KickReturns?: number | null;

		/** Type: double */
		KickerFantasyPointsAllowed?: number | null;

		/** Type: double */
		OffensiveYardsAllowed?: number | null;

		/** Type: double */
		PassesDefended?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID?: number | null;

		/** Type: double */
		PointsAllowed?: number | null;

		/** Type: double */
		PointsAllowedByDefenseSpecialTeams?: number | null;

		/** Type: double */
		PuntReturnLong?: number | null;

		/** Type: double */
		PuntReturnTouchdowns?: number | null;

		/** Type: double */
		PuntReturnYards?: number | null;

		/** Type: double */
		PuntReturns?: number | null;

		/** Type: double */
		QuarterbackFantasyPointsAllowed?: number | null;

		/** Type: double */
		QuarterbackHits?: number | null;

		/** Type: double */
		RunningbackFantasyPointsAllowed?: number | null;

		/** Type: double */
		SackYards?: number | null;

		/** Type: double */
		Sacks?: number | null;

		/** Type: double */
		Safeties?: number | null;
		ScoringDetails?: Array<ScoringDetail>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType?: number | null;

		/** Type: double */
		SoloTackles?: number | null;

		/** Type: double */
		SpecialTeamsTouchdowns?: number | null;

		/** Type: double */
		TacklesForLoss?: number | null;
		Team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Temperature?: number | null;

		/** Type: double */
		ThirdDownAttempts?: number | null;

		/** Type: double */
		ThirdDownConversions?: number | null;

		/** Type: double */
		TightEndFantasyPointsAllowed?: number | null;

		/** Type: double */
		TouchdownsScored?: number | null;

		/** Type: double */
		TwoPointConversionReturns?: number | null;

		/** Type: double */
		WideReceiverFantasyPointsAllowed?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		WindSpeed?: number | null;

		/** Type: double */
		YahooFantasyPointsAllowed?: number | null;

		/** Type: double */
		YahooKickerFantasyPointsAllowed?: number | null;

		/** Type: double */
		YahooQuarterbackFantasyPointsAllowed?: number | null;

		/** Type: double */
		YahooRunningbackFantasyPointsAllowed?: number | null;

		/** Type: double */
		YahooTightEndFantasyPointsAllowed?: number | null;

		/** Type: double */
		YahooWideReceiverFantasyPointsAllowed?: number | null;
	}
	export interface FantasyDefenseSeasonProjectionFormProperties {

		/** Type: double */
		AssistedTackles: FormControl<number | null | undefined>,

		/** Type: double */
		AuctionValue: FormControl<number | null | undefined>,

		/** Type: double */
		AuctionValuePPR: FormControl<number | null | undefined>,

		/** Type: double */
		AverageDraftPosition: FormControl<number | null | undefined>,

		/** Type: double */
		AverageDraftPosition2QB: FormControl<number | null | undefined>,

		/** Type: double */
		AverageDraftPositionDynasty: FormControl<number | null | undefined>,

		/** Type: double */
		AverageDraftPositionPPR: FormControl<number | null | undefined>,

		/** Type: double */
		BlockedKickReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: double */
		BlockedKickReturnYards: FormControl<number | null | undefined>,

		/** Type: double */
		BlockedKicks: FormControl<number | null | undefined>,

		/** Type: double */
		DefensiveTouchdowns: FormControl<number | null | undefined>,

		/** Type: double */
		DraftKingsFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
		DraftKingsKickerFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
		DraftKingsQuarterbackFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
		DraftKingsRunningbackFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
		DraftKingsTightEndFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
		DraftKingsWideReceiverFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
		FanDuelFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
		FanDuelKickerFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
		FanDuelQuarterbackFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
		FanDuelRunningbackFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
		FanDuelTightEndFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
		FanDuelWideReceiverFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyDraftFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyDraftKickerFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyDraftQuarterbackFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyDraftRunningbackFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyDraftTightEndFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyDraftWideReceiverFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPoints: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPointsDraftKings: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPointsFanDuel: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPointsFantasyDraft: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPointsYahoo: FormControl<number | null | undefined>,

		/** Type: double */
		FieldGoalReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: double */
		FieldGoalReturnYards: FormControl<number | null | undefined>,

		/** Type: double */
		FourthDownAttempts: FormControl<number | null | undefined>,

		/** Type: double */
		FourthDownConversions: FormControl<number | null | undefined>,

		/** Type: double */
		FumbleReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: double */
		FumbleReturnYards: FormControl<number | null | undefined>,

		/** Type: double */
		FumblesForced: FormControl<number | null | undefined>,

		/** Type: double */
		FumblesRecovered: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Games: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Humidity: FormControl<number | null | undefined>,

		/** Type: double */
		InterceptionReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: double */
		InterceptionReturnYards: FormControl<number | null | undefined>,

		/** Type: double */
		Interceptions: FormControl<number | null | undefined>,

		/** Type: double */
		KickReturnLong: FormControl<number | null | undefined>,

		/** Type: double */
		KickReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: double */
		KickReturnYards: FormControl<number | null | undefined>,

		/** Type: double */
		KickReturns: FormControl<number | null | undefined>,

		/** Type: double */
		KickerFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
		OffensiveYardsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
		PassesDefended: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID: FormControl<number | null | undefined>,

		/** Type: double */
		PointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
		PointsAllowedByDefenseSpecialTeams: FormControl<number | null | undefined>,

		/** Type: double */
		PuntReturnLong: FormControl<number | null | undefined>,

		/** Type: double */
		PuntReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: double */
		PuntReturnYards: FormControl<number | null | undefined>,

		/** Type: double */
		PuntReturns: FormControl<number | null | undefined>,

		/** Type: double */
		QuarterbackFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
		QuarterbackHits: FormControl<number | null | undefined>,

		/** Type: double */
		RunningbackFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
		SackYards: FormControl<number | null | undefined>,

		/** Type: double */
		Sacks: FormControl<number | null | undefined>,

		/** Type: double */
		Safeties: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType: FormControl<number | null | undefined>,

		/** Type: double */
		SoloTackles: FormControl<number | null | undefined>,

		/** Type: double */
		SpecialTeamsTouchdowns: FormControl<number | null | undefined>,

		/** Type: double */
		TacklesForLoss: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Temperature: FormControl<number | null | undefined>,

		/** Type: double */
		ThirdDownAttempts: FormControl<number | null | undefined>,

		/** Type: double */
		ThirdDownConversions: FormControl<number | null | undefined>,

		/** Type: double */
		TightEndFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
		TouchdownsScored: FormControl<number | null | undefined>,

		/** Type: double */
		TwoPointConversionReturns: FormControl<number | null | undefined>,

		/** Type: double */
		WideReceiverFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		WindSpeed: FormControl<number | null | undefined>,

		/** Type: double */
		YahooFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
		YahooKickerFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
		YahooQuarterbackFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
		YahooRunningbackFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
		YahooTightEndFantasyPointsAllowed: FormControl<number | null | undefined>,

		/** Type: double */
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

	export interface Player {
		Active?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Age?: number | null;

		/** Type: double */
		AverageDraftPosition?: number | null;
		BirthDate?: string | null;
		BirthDateString?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ByeWeek?: number | null;
		College?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		CollegeDraftPick?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		CollegeDraftRound?: number | null;
		CollegeDraftTeam?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		CollegeDraftYear?: number | null;
		CurrentStatus?: string | null;
		CurrentTeam?: string | null;
		DeclaredInactive?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DepthDisplayOrder?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DepthOrder?: number | null;
		DepthPosition?: string | null;
		DepthPositionCategory?: string | null;
		DraftKingsName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DraftKingsPlayerID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Experience?: number | null;
		ExperienceString?: string | null;
		FanDuelName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FanDuelPlayerID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FantasyAlarmPlayerID?: number | null;
		FantasyDraftName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FantasyDraftPlayerID?: number | null;
		FantasyPosition?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FantasyPositionDepthOrder?: number | null;
		FirstName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID?: number | null;
		Height?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HeightFeet?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HeightInches?: number | null;
		InjuryBodyPart?: string | null;
		InjuryNotes?: string | null;
		InjuryPractice?: string | null;
		InjuryPracticeDescription?: string | null;
		InjuryStartDate?: string | null;
		InjuryStatus?: string | null;
		IsUndraftedFreeAgent?: boolean | null;
		LastName?: string | null;
		Name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Number?: number | null;
		PhotoUrl?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID?: number | null;
		Position?: string | null;
		PositionCategory?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RotoWirePlayerID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RotoworldPlayerID?: number | null;
		ShortName?: string | null;
		SportRadarPlayerID?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SportsDirectPlayerID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StatsPlayerID?: number | null;
		Status?: string | null;
		Team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UpcomingDraftKingsSalary?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UpcomingFanDuelSalary?: number | null;
		UpcomingGameOpponent?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UpcomingGameWeek?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UpcomingOpponentPositionRank?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UpcomingOpponentRank?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UpcomingSalary?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UpcomingYahooSalary?: number | null;
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
		Active: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Age: FormControl<number | null | undefined>,

		/** Type: double */
		AverageDraftPosition: FormControl<number | null | undefined>,
		BirthDate: FormControl<string | null | undefined>,
		BirthDateString: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ByeWeek: FormControl<number | null | undefined>,
		College: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		CollegeDraftPick: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		CollegeDraftRound: FormControl<number | null | undefined>,
		CollegeDraftTeam: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		CollegeDraftYear: FormControl<number | null | undefined>,
		CurrentStatus: FormControl<string | null | undefined>,
		CurrentTeam: FormControl<string | null | undefined>,
		DeclaredInactive: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DepthDisplayOrder: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DepthOrder: FormControl<number | null | undefined>,
		DepthPosition: FormControl<string | null | undefined>,
		DepthPositionCategory: FormControl<string | null | undefined>,
		DraftKingsName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DraftKingsPlayerID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Experience: FormControl<number | null | undefined>,
		ExperienceString: FormControl<string | null | undefined>,
		FanDuelName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FanDuelPlayerID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FantasyAlarmPlayerID: FormControl<number | null | undefined>,
		FantasyDraftName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FantasyDraftPlayerID: FormControl<number | null | undefined>,
		FantasyPosition: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FantasyPositionDepthOrder: FormControl<number | null | undefined>,
		FirstName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID: FormControl<number | null | undefined>,
		Height: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HeightFeet: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HeightInches: FormControl<number | null | undefined>,
		InjuryBodyPart: FormControl<string | null | undefined>,
		InjuryNotes: FormControl<string | null | undefined>,
		InjuryPractice: FormControl<string | null | undefined>,
		InjuryPracticeDescription: FormControl<string | null | undefined>,
		InjuryStartDate: FormControl<string | null | undefined>,
		InjuryStatus: FormControl<string | null | undefined>,
		IsUndraftedFreeAgent: FormControl<boolean | null | undefined>,
		LastName: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Number: FormControl<number | null | undefined>,
		PhotoUrl: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID: FormControl<number | null | undefined>,
		Position: FormControl<string | null | undefined>,
		PositionCategory: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RotoWirePlayerID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RotoworldPlayerID: FormControl<number | null | undefined>,
		ShortName: FormControl<string | null | undefined>,
		SportRadarPlayerID: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SportsDirectPlayerID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StatsPlayerID: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UpcomingDraftKingsSalary: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UpcomingFanDuelSalary: FormControl<number | null | undefined>,
		UpcomingGameOpponent: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UpcomingGameWeek: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UpcomingOpponentPositionRank: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UpcomingOpponentRank: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UpcomingSalary: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UpcomingYahooSalary: FormControl<number | null | undefined>,
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
			Active: new FormControl<boolean | null | undefined>(undefined),
			Age: new FormControl<number | null | undefined>(undefined),
			AverageDraftPosition: new FormControl<number | null | undefined>(undefined),
			BirthDate: new FormControl<string | null | undefined>(undefined),
			BirthDateString: new FormControl<string | null | undefined>(undefined),
			ByeWeek: new FormControl<number | null | undefined>(undefined),
			College: new FormControl<string | null | undefined>(undefined),
			CollegeDraftPick: new FormControl<number | null | undefined>(undefined),
			CollegeDraftRound: new FormControl<number | null | undefined>(undefined),
			CollegeDraftTeam: new FormControl<string | null | undefined>(undefined),
			CollegeDraftYear: new FormControl<number | null | undefined>(undefined),
			CurrentStatus: new FormControl<string | null | undefined>(undefined),
			CurrentTeam: new FormControl<string | null | undefined>(undefined),
			DeclaredInactive: new FormControl<boolean | null | undefined>(undefined),
			DepthDisplayOrder: new FormControl<number | null | undefined>(undefined),
			DepthOrder: new FormControl<number | null | undefined>(undefined),
			DepthPosition: new FormControl<string | null | undefined>(undefined),
			DepthPositionCategory: new FormControl<string | null | undefined>(undefined),
			DraftKingsName: new FormControl<string | null | undefined>(undefined),
			DraftKingsPlayerID: new FormControl<number | null | undefined>(undefined),
			Experience: new FormControl<number | null | undefined>(undefined),
			ExperienceString: new FormControl<string | null | undefined>(undefined),
			FanDuelName: new FormControl<string | null | undefined>(undefined),
			FanDuelPlayerID: new FormControl<number | null | undefined>(undefined),
			FantasyAlarmPlayerID: new FormControl<number | null | undefined>(undefined),
			FantasyDraftName: new FormControl<string | null | undefined>(undefined),
			FantasyDraftPlayerID: new FormControl<number | null | undefined>(undefined),
			FantasyPosition: new FormControl<string | null | undefined>(undefined),
			FantasyPositionDepthOrder: new FormControl<number | null | undefined>(undefined),
			FirstName: new FormControl<string | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			Height: new FormControl<string | null | undefined>(undefined),
			HeightFeet: new FormControl<number | null | undefined>(undefined),
			HeightInches: new FormControl<number | null | undefined>(undefined),
			InjuryBodyPart: new FormControl<string | null | undefined>(undefined),
			InjuryNotes: new FormControl<string | null | undefined>(undefined),
			InjuryPractice: new FormControl<string | null | undefined>(undefined),
			InjuryPracticeDescription: new FormControl<string | null | undefined>(undefined),
			InjuryStartDate: new FormControl<string | null | undefined>(undefined),
			InjuryStatus: new FormControl<string | null | undefined>(undefined),
			IsUndraftedFreeAgent: new FormControl<boolean | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Number: new FormControl<number | null | undefined>(undefined),
			PhotoUrl: new FormControl<string | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			Position: new FormControl<string | null | undefined>(undefined),
			PositionCategory: new FormControl<string | null | undefined>(undefined),
			RotoWirePlayerID: new FormControl<number | null | undefined>(undefined),
			RotoworldPlayerID: new FormControl<number | null | undefined>(undefined),
			ShortName: new FormControl<string | null | undefined>(undefined),
			SportRadarPlayerID: new FormControl<string | null | undefined>(undefined),
			SportsDirectPlayerID: new FormControl<number | null | undefined>(undefined),
			StatsPlayerID: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			UpcomingDraftKingsSalary: new FormControl<number | null | undefined>(undefined),
			UpcomingFanDuelSalary: new FormControl<number | null | undefined>(undefined),
			UpcomingGameOpponent: new FormControl<string | null | undefined>(undefined),
			UpcomingGameWeek: new FormControl<number | null | undefined>(undefined),
			UpcomingOpponentPositionRank: new FormControl<number | null | undefined>(undefined),
			UpcomingOpponentRank: new FormControl<number | null | undefined>(undefined),
			UpcomingSalary: new FormControl<number | null | undefined>(undefined),
			UpcomingYahooSalary: new FormControl<number | null | undefined>(undefined),
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Activated?: number | null;

		/** Type: double */
		AssistedTackles?: number | null;

		/** Type: double */
		BlockedKickReturnTouchdowns?: number | null;

		/** Type: double */
		BlockedKickReturnYards?: number | null;

		/** Type: double */
		BlockedKicks?: number | null;
		DateTime?: string | null;
		Day?: string | null;
		DeclaredInactive?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DefensiveSnapsPlayed?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DefensiveTeamSnaps?: number | null;

		/** Type: double */
		DefensiveTouchdowns?: number | null;
		DraftKingsPosition?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DraftKingsSalary?: number | null;

		/** Type: double */
		ExtraPointsAttempted?: number | null;

		/** Type: double */
		ExtraPointsHadBlocked?: number | null;

		/** Type: double */
		ExtraPointsMade?: number | null;
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
		FantasyPointsPPR?: number | null;

		/** Type: double */
		FantasyPointsYahoo?: number | null;
		FantasyPosition?: string | null;

		/** Type: double */
		FieldGoalPercentage?: number | null;

		/** Type: double */
		FieldGoalReturnTouchdowns?: number | null;

		/** Type: double */
		FieldGoalReturnYards?: number | null;

		/** Type: double */
		FieldGoalsAttempted?: number | null;

		/** Type: double */
		FieldGoalsHadBlocked?: number | null;

		/** Type: double */
		FieldGoalsLongestMade?: number | null;

		/** Type: double */
		FieldGoalsMade?: number | null;

		/** Type: double */
		FieldGoalsMade0to19?: number | null;

		/** Type: double */
		FieldGoalsMade20to29?: number | null;

		/** Type: double */
		FieldGoalsMade30to39?: number | null;

		/** Type: double */
		FieldGoalsMade40to49?: number | null;

		/** Type: double */
		FieldGoalsMade50Plus?: number | null;

		/** Type: double */
		FumbleReturnTouchdowns?: number | null;

		/** Type: double */
		FumbleReturnYards?: number | null;

		/** Type: double */
		Fumbles?: number | null;

		/** Type: double */
		FumblesForced?: number | null;

		/** Type: double */
		FumblesLost?: number | null;

		/** Type: double */
		FumblesOutOfBounds?: number | null;

		/** Type: double */
		FumblesOwnRecoveries?: number | null;

		/** Type: double */
		FumblesRecovered?: number | null;
		GameDate?: string | null;
		GameKey?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalGameID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalOpponentID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID?: number | null;
		HomeOrAway?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Humidity?: number | null;
		InjuryBodyPart?: string | null;
		InjuryNotes?: string | null;
		InjuryPractice?: string | null;
		InjuryPracticeDescription?: string | null;
		InjuryStartDate?: string | null;
		InjuryStatus?: string | null;

		/** Type: double */
		InterceptionReturnTouchdowns?: number | null;

		/** Type: double */
		InterceptionReturnYards?: number | null;

		/** Type: double */
		Interceptions?: number | null;
		IsGameOver?: boolean | null;

		/** Type: double */
		KickReturnFairCatches?: number | null;

		/** Type: double */
		KickReturnLong?: number | null;

		/** Type: double */
		KickReturnTouchdowns?: number | null;

		/** Type: double */
		KickReturnYards?: number | null;

		/** Type: double */
		KickReturnYardsPerAttempt?: number | null;

		/** Type: double */
		KickReturns?: number | null;

		/** Type: double */
		MiscAssistedTackles?: number | null;

		/** Type: double */
		MiscFumblesForced?: number | null;

		/** Type: double */
		MiscFumblesRecovered?: number | null;

		/** Type: double */
		MiscSoloTackles?: number | null;
		Name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Number?: number | null;

		/** Type: double */
		OffensiveFumbleRecoveryTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OffensiveSnapsPlayed?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OffensiveTeamSnaps?: number | null;

		/** Type: double */
		OffensiveTouchdowns?: number | null;
		Opponent?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPositionRank?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentRank?: number | null;

		/** Type: double */
		PassesDefended?: number | null;

		/** Type: double */
		PassingAttempts?: number | null;

		/** Type: double */
		PassingCompletionPercentage?: number | null;

		/** Type: double */
		PassingCompletions?: number | null;

		/** Type: double */
		PassingInterceptions?: number | null;

		/** Type: double */
		PassingLong?: number | null;

		/** Type: double */
		PassingRating?: number | null;

		/** Type: double */
		PassingSackYards?: number | null;

		/** Type: double */
		PassingSacks?: number | null;

		/** Type: double */
		PassingTouchdowns?: number | null;

		/** Type: double */
		PassingYards?: number | null;

		/** Type: double */
		PassingYardsPerAttempt?: number | null;

		/** Type: double */
		PassingYardsPerCompletion?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Played?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerGameID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID?: number | null;
		PlayingSurface?: string | null;
		Position?: string | null;
		PositionCategory?: string | null;

		/** Type: double */
		PuntAverage?: number | null;

		/** Type: double */
		PuntInside20?: number | null;

		/** Type: double */
		PuntLong?: number | null;

		/** Type: double */
		PuntNetAverage?: number | null;

		/** Type: double */
		PuntNetYards?: number | null;

		/** Type: double */
		PuntReturnFairCatches?: number | null;

		/** Type: double */
		PuntReturnLong?: number | null;

		/** Type: double */
		PuntReturnTouchdowns?: number | null;

		/** Type: double */
		PuntReturnYards?: number | null;

		/** Type: double */
		PuntReturnYardsPerAttempt?: number | null;

		/** Type: double */
		PuntReturns?: number | null;

		/** Type: double */
		PuntTouchbacks?: number | null;

		/** Type: double */
		PuntYards?: number | null;

		/** Type: double */
		Punts?: number | null;

		/** Type: double */
		PuntsHadBlocked?: number | null;

		/** Type: double */
		QuarterbackHits?: number | null;

		/** Type: double */
		ReceivingLong?: number | null;

		/** Type: double */
		ReceivingTargets?: number | null;

		/** Type: double */
		ReceivingTouchdowns?: number | null;

		/** Type: double */
		ReceivingYards?: number | null;

		/** Type: double */
		ReceivingYardsPerReception?: number | null;

		/** Type: double */
		ReceivingYardsPerTarget?: number | null;

		/** Type: double */
		ReceptionPercentage?: number | null;

		/** Type: double */
		Receptions?: number | null;

		/** Type: double */
		RushingAttempts?: number | null;

		/** Type: double */
		RushingLong?: number | null;

		/** Type: double */
		RushingTouchdowns?: number | null;

		/** Type: double */
		RushingYards?: number | null;

		/** Type: double */
		RushingYardsPerAttempt?: number | null;

		/** Type: double */
		SackYards?: number | null;

		/** Type: double */
		Sacks?: number | null;

		/** Type: double */
		Safeties?: number | null;

		/** Type: double */
		SafetiesAllowed?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreID?: number | null;
		ScoringDetails?: Array<ScoringDetail>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType?: number | null;
		ShortName?: string | null;
		SnapCountsConfirmed?: boolean | null;

		/** Type: double */
		SoloTackles?: number | null;

		/** Type: double */
		SpecialTeamsAssistedTackles?: number | null;

		/** Type: double */
		SpecialTeamsFumblesForced?: number | null;

		/** Type: double */
		SpecialTeamsFumblesRecovered?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SpecialTeamsSnapsPlayed?: number | null;

		/** Type: double */
		SpecialTeamsSoloTackles?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SpecialTeamsTeamSnaps?: number | null;

		/** Type: double */
		SpecialTeamsTouchdowns?: number | null;
		Stadium?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Started?: number | null;

		/** Type: double */
		Tackles?: number | null;

		/** Type: double */
		TacklesForLoss?: number | null;
		Team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Temperature?: number | null;

		/** Type: double */
		Touchdowns?: number | null;

		/** Type: double */
		TwoPointConversionPasses?: number | null;

		/** Type: double */
		TwoPointConversionReceptions?: number | null;

		/** Type: double */
		TwoPointConversionReturns?: number | null;

		/** Type: double */
		TwoPointConversionRuns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		VictivSalary?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Week?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		WindSpeed?: number | null;
		YahooPosition?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		YahooSalary?: number | null;
	}
	export interface PlayerGameProjectionFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Activated: FormControl<number | null | undefined>,

		/** Type: double */
		AssistedTackles: FormControl<number | null | undefined>,

		/** Type: double */
		BlockedKickReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: double */
		BlockedKickReturnYards: FormControl<number | null | undefined>,

		/** Type: double */
		BlockedKicks: FormControl<number | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,
		DeclaredInactive: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DefensiveSnapsPlayed: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DefensiveTeamSnaps: FormControl<number | null | undefined>,

		/** Type: double */
		DefensiveTouchdowns: FormControl<number | null | undefined>,
		DraftKingsPosition: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DraftKingsSalary: FormControl<number | null | undefined>,

		/** Type: double */
		ExtraPointsAttempted: FormControl<number | null | undefined>,

		/** Type: double */
		ExtraPointsHadBlocked: FormControl<number | null | undefined>,

		/** Type: double */
		ExtraPointsMade: FormControl<number | null | undefined>,
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
		FantasyPointsPPR: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPointsYahoo: FormControl<number | null | undefined>,
		FantasyPosition: FormControl<string | null | undefined>,

		/** Type: double */
		FieldGoalPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		FieldGoalReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: double */
		FieldGoalReturnYards: FormControl<number | null | undefined>,

		/** Type: double */
		FieldGoalsAttempted: FormControl<number | null | undefined>,

		/** Type: double */
		FieldGoalsHadBlocked: FormControl<number | null | undefined>,

		/** Type: double */
		FieldGoalsLongestMade: FormControl<number | null | undefined>,

		/** Type: double */
		FieldGoalsMade: FormControl<number | null | undefined>,

		/** Type: double */
		FieldGoalsMade0to19: FormControl<number | null | undefined>,

		/** Type: double */
		FieldGoalsMade20to29: FormControl<number | null | undefined>,

		/** Type: double */
		FieldGoalsMade30to39: FormControl<number | null | undefined>,

		/** Type: double */
		FieldGoalsMade40to49: FormControl<number | null | undefined>,

		/** Type: double */
		FieldGoalsMade50Plus: FormControl<number | null | undefined>,

		/** Type: double */
		FumbleReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: double */
		FumbleReturnYards: FormControl<number | null | undefined>,

		/** Type: double */
		Fumbles: FormControl<number | null | undefined>,

		/** Type: double */
		FumblesForced: FormControl<number | null | undefined>,

		/** Type: double */
		FumblesLost: FormControl<number | null | undefined>,

		/** Type: double */
		FumblesOutOfBounds: FormControl<number | null | undefined>,

		/** Type: double */
		FumblesOwnRecoveries: FormControl<number | null | undefined>,

		/** Type: double */
		FumblesRecovered: FormControl<number | null | undefined>,
		GameDate: FormControl<string | null | undefined>,
		GameKey: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalGameID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalOpponentID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID: FormControl<number | null | undefined>,
		HomeOrAway: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Humidity: FormControl<number | null | undefined>,
		InjuryBodyPart: FormControl<string | null | undefined>,
		InjuryNotes: FormControl<string | null | undefined>,
		InjuryPractice: FormControl<string | null | undefined>,
		InjuryPracticeDescription: FormControl<string | null | undefined>,
		InjuryStartDate: FormControl<string | null | undefined>,
		InjuryStatus: FormControl<string | null | undefined>,

		/** Type: double */
		InterceptionReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: double */
		InterceptionReturnYards: FormControl<number | null | undefined>,

		/** Type: double */
		Interceptions: FormControl<number | null | undefined>,
		IsGameOver: FormControl<boolean | null | undefined>,

		/** Type: double */
		KickReturnFairCatches: FormControl<number | null | undefined>,

		/** Type: double */
		KickReturnLong: FormControl<number | null | undefined>,

		/** Type: double */
		KickReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: double */
		KickReturnYards: FormControl<number | null | undefined>,

		/** Type: double */
		KickReturnYardsPerAttempt: FormControl<number | null | undefined>,

		/** Type: double */
		KickReturns: FormControl<number | null | undefined>,

		/** Type: double */
		MiscAssistedTackles: FormControl<number | null | undefined>,

		/** Type: double */
		MiscFumblesForced: FormControl<number | null | undefined>,

		/** Type: double */
		MiscFumblesRecovered: FormControl<number | null | undefined>,

		/** Type: double */
		MiscSoloTackles: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Number: FormControl<number | null | undefined>,

		/** Type: double */
		OffensiveFumbleRecoveryTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OffensiveSnapsPlayed: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OffensiveTeamSnaps: FormControl<number | null | undefined>,

		/** Type: double */
		OffensiveTouchdowns: FormControl<number | null | undefined>,
		Opponent: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPositionRank: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentRank: FormControl<number | null | undefined>,

		/** Type: double */
		PassesDefended: FormControl<number | null | undefined>,

		/** Type: double */
		PassingAttempts: FormControl<number | null | undefined>,

		/** Type: double */
		PassingCompletionPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		PassingCompletions: FormControl<number | null | undefined>,

		/** Type: double */
		PassingInterceptions: FormControl<number | null | undefined>,

		/** Type: double */
		PassingLong: FormControl<number | null | undefined>,

		/** Type: double */
		PassingRating: FormControl<number | null | undefined>,

		/** Type: double */
		PassingSackYards: FormControl<number | null | undefined>,

		/** Type: double */
		PassingSacks: FormControl<number | null | undefined>,

		/** Type: double */
		PassingTouchdowns: FormControl<number | null | undefined>,

		/** Type: double */
		PassingYards: FormControl<number | null | undefined>,

		/** Type: double */
		PassingYardsPerAttempt: FormControl<number | null | undefined>,

		/** Type: double */
		PassingYardsPerCompletion: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Played: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerGameID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID: FormControl<number | null | undefined>,
		PlayingSurface: FormControl<string | null | undefined>,
		Position: FormControl<string | null | undefined>,
		PositionCategory: FormControl<string | null | undefined>,

		/** Type: double */
		PuntAverage: FormControl<number | null | undefined>,

		/** Type: double */
		PuntInside20: FormControl<number | null | undefined>,

		/** Type: double */
		PuntLong: FormControl<number | null | undefined>,

		/** Type: double */
		PuntNetAverage: FormControl<number | null | undefined>,

		/** Type: double */
		PuntNetYards: FormControl<number | null | undefined>,

		/** Type: double */
		PuntReturnFairCatches: FormControl<number | null | undefined>,

		/** Type: double */
		PuntReturnLong: FormControl<number | null | undefined>,

		/** Type: double */
		PuntReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: double */
		PuntReturnYards: FormControl<number | null | undefined>,

		/** Type: double */
		PuntReturnYardsPerAttempt: FormControl<number | null | undefined>,

		/** Type: double */
		PuntReturns: FormControl<number | null | undefined>,

		/** Type: double */
		PuntTouchbacks: FormControl<number | null | undefined>,

		/** Type: double */
		PuntYards: FormControl<number | null | undefined>,

		/** Type: double */
		Punts: FormControl<number | null | undefined>,

		/** Type: double */
		PuntsHadBlocked: FormControl<number | null | undefined>,

		/** Type: double */
		QuarterbackHits: FormControl<number | null | undefined>,

		/** Type: double */
		ReceivingLong: FormControl<number | null | undefined>,

		/** Type: double */
		ReceivingTargets: FormControl<number | null | undefined>,

		/** Type: double */
		ReceivingTouchdowns: FormControl<number | null | undefined>,

		/** Type: double */
		ReceivingYards: FormControl<number | null | undefined>,

		/** Type: double */
		ReceivingYardsPerReception: FormControl<number | null | undefined>,

		/** Type: double */
		ReceivingYardsPerTarget: FormControl<number | null | undefined>,

		/** Type: double */
		ReceptionPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		Receptions: FormControl<number | null | undefined>,

		/** Type: double */
		RushingAttempts: FormControl<number | null | undefined>,

		/** Type: double */
		RushingLong: FormControl<number | null | undefined>,

		/** Type: double */
		RushingTouchdowns: FormControl<number | null | undefined>,

		/** Type: double */
		RushingYards: FormControl<number | null | undefined>,

		/** Type: double */
		RushingYardsPerAttempt: FormControl<number | null | undefined>,

		/** Type: double */
		SackYards: FormControl<number | null | undefined>,

		/** Type: double */
		Sacks: FormControl<number | null | undefined>,

		/** Type: double */
		Safeties: FormControl<number | null | undefined>,

		/** Type: double */
		SafetiesAllowed: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType: FormControl<number | null | undefined>,
		ShortName: FormControl<string | null | undefined>,
		SnapCountsConfirmed: FormControl<boolean | null | undefined>,

		/** Type: double */
		SoloTackles: FormControl<number | null | undefined>,

		/** Type: double */
		SpecialTeamsAssistedTackles: FormControl<number | null | undefined>,

		/** Type: double */
		SpecialTeamsFumblesForced: FormControl<number | null | undefined>,

		/** Type: double */
		SpecialTeamsFumblesRecovered: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SpecialTeamsSnapsPlayed: FormControl<number | null | undefined>,

		/** Type: double */
		SpecialTeamsSoloTackles: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SpecialTeamsTeamSnaps: FormControl<number | null | undefined>,

		/** Type: double */
		SpecialTeamsTouchdowns: FormControl<number | null | undefined>,
		Stadium: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Started: FormControl<number | null | undefined>,

		/** Type: double */
		Tackles: FormControl<number | null | undefined>,

		/** Type: double */
		TacklesForLoss: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Temperature: FormControl<number | null | undefined>,

		/** Type: double */
		Touchdowns: FormControl<number | null | undefined>,

		/** Type: double */
		TwoPointConversionPasses: FormControl<number | null | undefined>,

		/** Type: double */
		TwoPointConversionReceptions: FormControl<number | null | undefined>,

		/** Type: double */
		TwoPointConversionReturns: FormControl<number | null | undefined>,

		/** Type: double */
		TwoPointConversionRuns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		VictivSalary: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Week: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		WindSpeed: FormControl<number | null | undefined>,
		YahooPosition: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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
			SnapCountsConfirmed: new FormControl<boolean | null | undefined>(undefined),
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Activated?: number | null;

		/** Type: double */
		AssistedTackles?: number | null;

		/** Type: double */
		AuctionValue?: number | null;

		/** Type: double */
		AuctionValuePPR?: number | null;

		/** Type: double */
		AverageDraftPosition?: number | null;

		/** Type: double */
		AverageDraftPosition2QB?: number | null;

		/** Type: double */
		AverageDraftPositionDynasty?: number | null;

		/** Type: double */
		AverageDraftPositionPPR?: number | null;

		/** Type: double */
		AverageDraftPositionRookie?: number | null;

		/** Type: double */
		BlockedKickReturnTouchdowns?: number | null;

		/** Type: double */
		BlockedKickReturnYards?: number | null;

		/** Type: double */
		BlockedKicks?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DefensiveSnapsPlayed?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DefensiveTeamSnaps?: number | null;

		/** Type: double */
		DefensiveTouchdowns?: number | null;

		/** Type: double */
		ExtraPointsAttempted?: number | null;

		/** Type: double */
		ExtraPointsHadBlocked?: number | null;

		/** Type: double */
		ExtraPointsMade?: number | null;

		/** Type: double */
		FantasyPoints?: number | null;

		/** Type: double */
		FantasyPointsDraftKings?: number | null;

		/** Type: double */
		FantasyPointsFanDuel?: number | null;

		/** Type: double */
		FantasyPointsFantasyDraft?: number | null;

		/** Type: double */
		FantasyPointsPPR?: number | null;

		/** Type: double */
		FantasyPointsYahoo?: number | null;
		FantasyPosition?: string | null;

		/** Type: double */
		FieldGoalPercentage?: number | null;

		/** Type: double */
		FieldGoalReturnTouchdowns?: number | null;

		/** Type: double */
		FieldGoalReturnYards?: number | null;

		/** Type: double */
		FieldGoalsAttempted?: number | null;

		/** Type: double */
		FieldGoalsHadBlocked?: number | null;

		/** Type: double */
		FieldGoalsLongestMade?: number | null;

		/** Type: double */
		FieldGoalsMade?: number | null;

		/** Type: double */
		FieldGoalsMade0to19?: number | null;

		/** Type: double */
		FieldGoalsMade20to29?: number | null;

		/** Type: double */
		FieldGoalsMade30to39?: number | null;

		/** Type: double */
		FieldGoalsMade40to49?: number | null;

		/** Type: double */
		FieldGoalsMade50Plus?: number | null;

		/** Type: double */
		FumbleReturnTouchdowns?: number | null;

		/** Type: double */
		FumbleReturnYards?: number | null;

		/** Type: double */
		Fumbles?: number | null;

		/** Type: double */
		FumblesForced?: number | null;

		/** Type: double */
		FumblesLost?: number | null;

		/** Type: double */
		FumblesOutOfBounds?: number | null;

		/** Type: double */
		FumblesOwnRecoveries?: number | null;

		/** Type: double */
		FumblesRecovered?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Humidity?: number | null;

		/** Type: double */
		InterceptionReturnTouchdowns?: number | null;

		/** Type: double */
		InterceptionReturnYards?: number | null;

		/** Type: double */
		Interceptions?: number | null;

		/** Type: double */
		KickReturnFairCatches?: number | null;

		/** Type: double */
		KickReturnLong?: number | null;

		/** Type: double */
		KickReturnTouchdowns?: number | null;

		/** Type: double */
		KickReturnYards?: number | null;

		/** Type: double */
		KickReturnYardsPerAttempt?: number | null;

		/** Type: double */
		KickReturns?: number | null;

		/** Type: double */
		MiscAssistedTackles?: number | null;

		/** Type: double */
		MiscFumblesForced?: number | null;

		/** Type: double */
		MiscFumblesRecovered?: number | null;

		/** Type: double */
		MiscSoloTackles?: number | null;
		Name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Number?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OffensiveFumbleRecoveryTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OffensiveSnapsPlayed?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OffensiveTeamSnaps?: number | null;

		/** Type: double */
		OffensiveTouchdowns?: number | null;

		/** Type: double */
		PassesDefended?: number | null;

		/** Type: double */
		PassingAttempts?: number | null;

		/** Type: double */
		PassingCompletionPercentage?: number | null;

		/** Type: double */
		PassingCompletions?: number | null;

		/** Type: double */
		PassingInterceptions?: number | null;

		/** Type: double */
		PassingLong?: number | null;

		/** Type: double */
		PassingRating?: number | null;

		/** Type: double */
		PassingSackYards?: number | null;

		/** Type: double */
		PassingSacks?: number | null;

		/** Type: double */
		PassingTouchdowns?: number | null;

		/** Type: double */
		PassingYards?: number | null;

		/** Type: double */
		PassingYardsPerAttempt?: number | null;

		/** Type: double */
		PassingYardsPerCompletion?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Played?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerSeasonID?: number | null;
		Position?: string | null;
		PositionCategory?: string | null;

		/** Type: double */
		PuntAverage?: number | null;

		/** Type: double */
		PuntInside20?: number | null;

		/** Type: double */
		PuntLong?: number | null;

		/** Type: double */
		PuntNetAverage?: number | null;

		/** Type: double */
		PuntNetYards?: number | null;

		/** Type: double */
		PuntReturnFairCatches?: number | null;

		/** Type: double */
		PuntReturnLong?: number | null;

		/** Type: double */
		PuntReturnTouchdowns?: number | null;

		/** Type: double */
		PuntReturnYards?: number | null;

		/** Type: double */
		PuntReturnYardsPerAttempt?: number | null;

		/** Type: double */
		PuntReturns?: number | null;

		/** Type: double */
		PuntTouchbacks?: number | null;

		/** Type: double */
		PuntYards?: number | null;

		/** Type: double */
		Punts?: number | null;

		/** Type: double */
		PuntsHadBlocked?: number | null;

		/** Type: double */
		QuarterbackHits?: number | null;

		/** Type: double */
		ReceivingLong?: number | null;

		/** Type: double */
		ReceivingTargets?: number | null;

		/** Type: double */
		ReceivingTouchdowns?: number | null;

		/** Type: double */
		ReceivingYards?: number | null;

		/** Type: double */
		ReceivingYardsPerReception?: number | null;

		/** Type: double */
		ReceivingYardsPerTarget?: number | null;

		/** Type: double */
		ReceptionPercentage?: number | null;

		/** Type: double */
		Receptions?: number | null;

		/** Type: double */
		RushingAttempts?: number | null;

		/** Type: double */
		RushingLong?: number | null;

		/** Type: double */
		RushingTouchdowns?: number | null;

		/** Type: double */
		RushingYards?: number | null;

		/** Type: double */
		RushingYardsPerAttempt?: number | null;

		/** Type: double */
		SackYards?: number | null;

		/** Type: double */
		Sacks?: number | null;

		/** Type: double */
		Safeties?: number | null;

		/** Type: double */
		SafetiesAllowed?: number | null;
		ScoringDetails?: Array<ScoringDetail>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType?: number | null;
		ShortName?: string | null;

		/** Type: double */
		SoloTackles?: number | null;

		/** Type: double */
		SpecialTeamsAssistedTackles?: number | null;

		/** Type: double */
		SpecialTeamsFumblesForced?: number | null;

		/** Type: double */
		SpecialTeamsFumblesRecovered?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SpecialTeamsSnapsPlayed?: number | null;

		/** Type: double */
		SpecialTeamsSoloTackles?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SpecialTeamsTeamSnaps?: number | null;

		/** Type: double */
		SpecialTeamsTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Started?: number | null;

		/** Type: double */
		Tackles?: number | null;

		/** Type: double */
		TacklesForLoss?: number | null;
		Team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Temperature?: number | null;

		/** Type: double */
		Touchdowns?: number | null;

		/** Type: double */
		TwoPointConversionPasses?: number | null;

		/** Type: double */
		TwoPointConversionReceptions?: number | null;

		/** Type: double */
		TwoPointConversionReturns?: number | null;

		/** Type: double */
		TwoPointConversionRuns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		WindSpeed?: number | null;
	}
	export interface PlayerSeasonProjectionFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Activated: FormControl<number | null | undefined>,

		/** Type: double */
		AssistedTackles: FormControl<number | null | undefined>,

		/** Type: double */
		AuctionValue: FormControl<number | null | undefined>,

		/** Type: double */
		AuctionValuePPR: FormControl<number | null | undefined>,

		/** Type: double */
		AverageDraftPosition: FormControl<number | null | undefined>,

		/** Type: double */
		AverageDraftPosition2QB: FormControl<number | null | undefined>,

		/** Type: double */
		AverageDraftPositionDynasty: FormControl<number | null | undefined>,

		/** Type: double */
		AverageDraftPositionPPR: FormControl<number | null | undefined>,

		/** Type: double */
		AverageDraftPositionRookie: FormControl<number | null | undefined>,

		/** Type: double */
		BlockedKickReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: double */
		BlockedKickReturnYards: FormControl<number | null | undefined>,

		/** Type: double */
		BlockedKicks: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DefensiveSnapsPlayed: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DefensiveTeamSnaps: FormControl<number | null | undefined>,

		/** Type: double */
		DefensiveTouchdowns: FormControl<number | null | undefined>,

		/** Type: double */
		ExtraPointsAttempted: FormControl<number | null | undefined>,

		/** Type: double */
		ExtraPointsHadBlocked: FormControl<number | null | undefined>,

		/** Type: double */
		ExtraPointsMade: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPoints: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPointsDraftKings: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPointsFanDuel: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPointsFantasyDraft: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPointsPPR: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPointsYahoo: FormControl<number | null | undefined>,
		FantasyPosition: FormControl<string | null | undefined>,

		/** Type: double */
		FieldGoalPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		FieldGoalReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: double */
		FieldGoalReturnYards: FormControl<number | null | undefined>,

		/** Type: double */
		FieldGoalsAttempted: FormControl<number | null | undefined>,

		/** Type: double */
		FieldGoalsHadBlocked: FormControl<number | null | undefined>,

		/** Type: double */
		FieldGoalsLongestMade: FormControl<number | null | undefined>,

		/** Type: double */
		FieldGoalsMade: FormControl<number | null | undefined>,

		/** Type: double */
		FieldGoalsMade0to19: FormControl<number | null | undefined>,

		/** Type: double */
		FieldGoalsMade20to29: FormControl<number | null | undefined>,

		/** Type: double */
		FieldGoalsMade30to39: FormControl<number | null | undefined>,

		/** Type: double */
		FieldGoalsMade40to49: FormControl<number | null | undefined>,

		/** Type: double */
		FieldGoalsMade50Plus: FormControl<number | null | undefined>,

		/** Type: double */
		FumbleReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: double */
		FumbleReturnYards: FormControl<number | null | undefined>,

		/** Type: double */
		Fumbles: FormControl<number | null | undefined>,

		/** Type: double */
		FumblesForced: FormControl<number | null | undefined>,

		/** Type: double */
		FumblesLost: FormControl<number | null | undefined>,

		/** Type: double */
		FumblesOutOfBounds: FormControl<number | null | undefined>,

		/** Type: double */
		FumblesOwnRecoveries: FormControl<number | null | undefined>,

		/** Type: double */
		FumblesRecovered: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Humidity: FormControl<number | null | undefined>,

		/** Type: double */
		InterceptionReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: double */
		InterceptionReturnYards: FormControl<number | null | undefined>,

		/** Type: double */
		Interceptions: FormControl<number | null | undefined>,

		/** Type: double */
		KickReturnFairCatches: FormControl<number | null | undefined>,

		/** Type: double */
		KickReturnLong: FormControl<number | null | undefined>,

		/** Type: double */
		KickReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: double */
		KickReturnYards: FormControl<number | null | undefined>,

		/** Type: double */
		KickReturnYardsPerAttempt: FormControl<number | null | undefined>,

		/** Type: double */
		KickReturns: FormControl<number | null | undefined>,

		/** Type: double */
		MiscAssistedTackles: FormControl<number | null | undefined>,

		/** Type: double */
		MiscFumblesForced: FormControl<number | null | undefined>,

		/** Type: double */
		MiscFumblesRecovered: FormControl<number | null | undefined>,

		/** Type: double */
		MiscSoloTackles: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Number: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OffensiveFumbleRecoveryTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OffensiveSnapsPlayed: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OffensiveTeamSnaps: FormControl<number | null | undefined>,

		/** Type: double */
		OffensiveTouchdowns: FormControl<number | null | undefined>,

		/** Type: double */
		PassesDefended: FormControl<number | null | undefined>,

		/** Type: double */
		PassingAttempts: FormControl<number | null | undefined>,

		/** Type: double */
		PassingCompletionPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		PassingCompletions: FormControl<number | null | undefined>,

		/** Type: double */
		PassingInterceptions: FormControl<number | null | undefined>,

		/** Type: double */
		PassingLong: FormControl<number | null | undefined>,

		/** Type: double */
		PassingRating: FormControl<number | null | undefined>,

		/** Type: double */
		PassingSackYards: FormControl<number | null | undefined>,

		/** Type: double */
		PassingSacks: FormControl<number | null | undefined>,

		/** Type: double */
		PassingTouchdowns: FormControl<number | null | undefined>,

		/** Type: double */
		PassingYards: FormControl<number | null | undefined>,

		/** Type: double */
		PassingYardsPerAttempt: FormControl<number | null | undefined>,

		/** Type: double */
		PassingYardsPerCompletion: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Played: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerSeasonID: FormControl<number | null | undefined>,
		Position: FormControl<string | null | undefined>,
		PositionCategory: FormControl<string | null | undefined>,

		/** Type: double */
		PuntAverage: FormControl<number | null | undefined>,

		/** Type: double */
		PuntInside20: FormControl<number | null | undefined>,

		/** Type: double */
		PuntLong: FormControl<number | null | undefined>,

		/** Type: double */
		PuntNetAverage: FormControl<number | null | undefined>,

		/** Type: double */
		PuntNetYards: FormControl<number | null | undefined>,

		/** Type: double */
		PuntReturnFairCatches: FormControl<number | null | undefined>,

		/** Type: double */
		PuntReturnLong: FormControl<number | null | undefined>,

		/** Type: double */
		PuntReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: double */
		PuntReturnYards: FormControl<number | null | undefined>,

		/** Type: double */
		PuntReturnYardsPerAttempt: FormControl<number | null | undefined>,

		/** Type: double */
		PuntReturns: FormControl<number | null | undefined>,

		/** Type: double */
		PuntTouchbacks: FormControl<number | null | undefined>,

		/** Type: double */
		PuntYards: FormControl<number | null | undefined>,

		/** Type: double */
		Punts: FormControl<number | null | undefined>,

		/** Type: double */
		PuntsHadBlocked: FormControl<number | null | undefined>,

		/** Type: double */
		QuarterbackHits: FormControl<number | null | undefined>,

		/** Type: double */
		ReceivingLong: FormControl<number | null | undefined>,

		/** Type: double */
		ReceivingTargets: FormControl<number | null | undefined>,

		/** Type: double */
		ReceivingTouchdowns: FormControl<number | null | undefined>,

		/** Type: double */
		ReceivingYards: FormControl<number | null | undefined>,

		/** Type: double */
		ReceivingYardsPerReception: FormControl<number | null | undefined>,

		/** Type: double */
		ReceivingYardsPerTarget: FormControl<number | null | undefined>,

		/** Type: double */
		ReceptionPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		Receptions: FormControl<number | null | undefined>,

		/** Type: double */
		RushingAttempts: FormControl<number | null | undefined>,

		/** Type: double */
		RushingLong: FormControl<number | null | undefined>,

		/** Type: double */
		RushingTouchdowns: FormControl<number | null | undefined>,

		/** Type: double */
		RushingYards: FormControl<number | null | undefined>,

		/** Type: double */
		RushingYardsPerAttempt: FormControl<number | null | undefined>,

		/** Type: double */
		SackYards: FormControl<number | null | undefined>,

		/** Type: double */
		Sacks: FormControl<number | null | undefined>,

		/** Type: double */
		Safeties: FormControl<number | null | undefined>,

		/** Type: double */
		SafetiesAllowed: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType: FormControl<number | null | undefined>,
		ShortName: FormControl<string | null | undefined>,

		/** Type: double */
		SoloTackles: FormControl<number | null | undefined>,

		/** Type: double */
		SpecialTeamsAssistedTackles: FormControl<number | null | undefined>,

		/** Type: double */
		SpecialTeamsFumblesForced: FormControl<number | null | undefined>,

		/** Type: double */
		SpecialTeamsFumblesRecovered: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SpecialTeamsSnapsPlayed: FormControl<number | null | undefined>,

		/** Type: double */
		SpecialTeamsSoloTackles: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SpecialTeamsTeamSnaps: FormControl<number | null | undefined>,

		/** Type: double */
		SpecialTeamsTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Started: FormControl<number | null | undefined>,

		/** Type: double */
		Tackles: FormControl<number | null | undefined>,

		/** Type: double */
		TacklesForLoss: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Temperature: FormControl<number | null | undefined>,

		/** Type: double */
		Touchdowns: FormControl<number | null | undefined>,

		/** Type: double */
		TwoPointConversionPasses: FormControl<number | null | undefined>,

		/** Type: double */
		TwoPointConversionReceptions: FormControl<number | null | undefined>,

		/** Type: double */
		TwoPointConversionReturns: FormControl<number | null | undefined>,

		/** Type: double */
		TwoPointConversionRuns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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
			OffensiveFumbleRecoveryTouchdowns: new FormControl<number | null | undefined>(undefined),
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamMoneyLine?: number | null;
		Canceled?: boolean | null;
		Channel?: string | null;
		Date?: string | null;
		DateTime?: string | null;
		Day?: string | null;
		ForecastDescription?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ForecastTempHigh?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ForecastTempLow?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ForecastWindChill?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ForecastWindSpeed?: number | null;
		GameKey?: string | null;

		/** Type: double */
		GeoLat?: number | null;

		/** Type: double */
		GeoLong?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalAwayTeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalGameID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalHomeTeamID?: number | null;
		HomeTeam?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamMoneyLine?: number | null;

		/** Type: double */
		OverUnder?: number | null;

		/** Type: double */
		PointSpread?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType?: number | null;
		StadiumDetails?: Stadium;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StadiumID?: number | null;
		Status?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Week?: number | null;
	}
	export interface ScheduleFormProperties {
		AwayTeam: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamMoneyLine: FormControl<number | null | undefined>,
		Canceled: FormControl<boolean | null | undefined>,
		Channel: FormControl<string | null | undefined>,
		Date: FormControl<string | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,
		ForecastDescription: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ForecastTempHigh: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ForecastTempLow: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ForecastWindChill: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ForecastWindSpeed: FormControl<number | null | undefined>,
		GameKey: FormControl<string | null | undefined>,

		/** Type: double */
		GeoLat: FormControl<number | null | undefined>,

		/** Type: double */
		GeoLong: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalAwayTeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalGameID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalHomeTeamID: FormControl<number | null | undefined>,
		HomeTeam: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamMoneyLine: FormControl<number | null | undefined>,

		/** Type: double */
		OverUnder: FormControl<number | null | undefined>,

		/** Type: double */
		PointSpread: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StadiumID: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Capacity?: number | null;
		City?: string | null;
		Country?: string | null;

		/** Type: double */
		GeoLat?: number | null;

		/** Type: double */
		GeoLong?: number | null;
		Name?: string | null;
		PlayingSurface?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StadiumID?: number | null;
		State?: string | null;
		Type?: string | null;
	}
	export interface StadiumFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Capacity: FormControl<number | null | undefined>,
		City: FormControl<string | null | undefined>,
		Country: FormControl<string | null | undefined>,

		/** Type: double */
		GeoLat: FormControl<number | null | undefined>,

		/** Type: double */
		GeoLong: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PlayingSurface: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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
		 * DFS Slate Ownership Projections by SlateID
		 * Slate Ownership Projections for a specific slate. Projections are for GPP format ownership. Will return an empty list if the slate is not yet projected or not a slate we have projections for.
		 * Get {format}/DfsSlateOwnershipProjectionsBySlateID/{slateId}
		 * @param {DfsSlateOwnershipProjectionsBySlateidFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} slateId SlateID of the DFS Slate you wish to get ownership projections for. Will have an empty SlateOwnershipProjections if this slate was not projected
		 */
		DfsSlateOwnershipProjectionsBySlateid(format: DfsSlateOwnershipProjectionsBySlateidFormat, slateId: string): Observable<DfsSlateWithOwnershipProjection> {
			return this.http.get<DfsSlateWithOwnershipProjection>(this.baseUri + format + '/DfsSlateOwnershipProjectionsBySlateID/' + (slateId == null ? '' : encodeURIComponent(slateId)) + '', {});
		}

		/**
		 * DFS Slates by Date
		 * Get {format}/DfsSlatesByDate/{date}
		 * @param {DfsSlateOwnershipProjectionsBySlateidFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the slates.
		 * <br>Examples: <code>2017-SEP-25</code>, <code>2017-10-31</code>.
		 */
		DfsSlatesByDate(format: DfsSlateOwnershipProjectionsBySlateidFormat, date: string): Observable<Array<DfsSlate>> {
			return this.http.get<Array<DfsSlate>>(this.baseUri + format + '/DfsSlatesByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * DFS Slates by Week
		 * Get {format}/DfsSlatesByWeek/{season}/{week}
		 * @param {DfsSlateOwnershipProjectionsBySlateidFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season and the season type. If no season type is provided, then the default is regular season.
		 *           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>
		 * @param {string} week Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.
		 *           Example: <code>1</code>
		 */
		DfsSlatesByWeek(format: DfsSlateOwnershipProjectionsBySlateidFormat, season: string, week: string): Observable<Array<DfsSlate>> {
			return this.http.get<Array<DfsSlate>>(this.baseUri + format + '/DfsSlatesByWeek/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (week == null ? '' : encodeURIComponent(week)) + '', {});
		}

		/**
		 * Projected Fantasy Defense Game Stats (w/ DFS Salaries)
		 * Get {format}/FantasyDefenseProjectionsByGame/{season}/{week}
		 * @param {DfsSlateOwnershipProjectionsBySlateidFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season and the season type. If no season type is provided, then the default is regular season.
		 *           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
		 *         
		 * @param {string} week Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.
		 *           Example: <code>1</code>
		 *         
		 */
		ProjectedFantasyDefenseGameStatsWDfsSalaries(format: DfsSlateOwnershipProjectionsBySlateidFormat, season: string, week: string): Observable<Array<FantasyDefenseGameProjection>> {
			return this.http.get<Array<FantasyDefenseGameProjection>>(this.baseUri + format + '/FantasyDefenseProjectionsByGame/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (week == null ? '' : encodeURIComponent(week)) + '', {});
		}

		/**
		 * Projected Fantasy Defense Season Stats (w/ ADP)
		 * Get {format}/FantasyDefenseProjectionsBySeason/{season}
		 * @param {DfsSlateOwnershipProjectionsBySlateidFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season and the season type. If no season type is provided, then the default is regular season.
		 *           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
		 *         
		 */
		ProjectedFantasyDefenseSeasonStatsWAdp(format: DfsSlateOwnershipProjectionsBySlateidFormat, season: string): Observable<Array<FantasyDefenseSeasonProjection>> {
			return this.http.get<Array<FantasyDefenseSeasonProjection>>(this.baseUri + format + '/FantasyDefenseProjectionsBySeason/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * IDP Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)
		 * Get {format}/IdpPlayerGameProjectionStatsByPlayerID/{season}/{week}/{playerid}
		 * @param {DfsSlateOwnershipProjectionsBySlateidFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season and the season type. If no season type is provided, then the default is regular season.
		 *           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
		 *         
		 * @param {string} week Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.
		 *           Example: <code>1</code>
		 *         
		 * @param {string} playerid Each NFL player has a unique ID assigned by FantasyData. Player IDs can be determined by pulling player related data. Example:<code>14257</code>.
		 */
		IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries(format: DfsSlateOwnershipProjectionsBySlateidFormat, season: string, week: string, playerid: string): Observable<PlayerGameProjection> {
			return this.http.get<PlayerGameProjection>(this.baseUri + format + '/IdpPlayerGameProjectionStatsByPlayerID/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (week == null ? '' : encodeURIComponent(week)) + '/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}

		/**
		 * IDP Projected Player Game Stats by Team (w/ Injuries, Lineups, DFS Salaries)
		 * Get {format}/IdpPlayerGameProjectionStatsByTeam/{season}/{week}/{team}
		 * @param {DfsSlateOwnershipProjectionsBySlateidFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season and the season type. If no season type is provided, then the default is regular season.
		 *           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
		 *         
		 * @param {string} week Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.
		 *           Example: <code>1</code>
		 *         
		 * @param {string} team Abbreviation of the team. Example: <code>WAS</code>.
		 */
		IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries(format: DfsSlateOwnershipProjectionsBySlateidFormat, season: string, week: string, team: string): Observable<Array<PlayerGameProjection>> {
			return this.http.get<Array<PlayerGameProjection>>(this.baseUri + format + '/IdpPlayerGameProjectionStatsByTeam/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (week == null ? '' : encodeURIComponent(week)) + '/' + (team == null ? '' : encodeURIComponent(team)) + '', {});
		}

		/**
		 * IDP Projected Player Game Stats by Week (w/ Injuries, Lineups, DFS Salaries)
		 * Get {format}/IdpPlayerGameProjectionStatsByWeek/{season}/{week}
		 * @param {DfsSlateOwnershipProjectionsBySlateidFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season and the season type. If no season type is provided, then the default is regular season.
		 *           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
		 *         
		 * @param {string} week Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.
		 *           Example: <code>1</code>
		 *         
		 */
		IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries(format: DfsSlateOwnershipProjectionsBySlateidFormat, season: string, week: string): Observable<Array<PlayerGameProjection>> {
			return this.http.get<Array<PlayerGameProjection>>(this.baseUri + format + '/IdpPlayerGameProjectionStatsByWeek/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (week == null ? '' : encodeURIComponent(week)) + '', {});
		}

		/**
		 * Injured Players
		 * This endpoint provides all currently injured NFL players, along with injury details.
		 * Get {format}/InjuredPlayers
		 * @param {DfsSlateOwnershipProjectionsBySlateidFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 */
		InjuredPlayers(format: DfsSlateOwnershipProjectionsBySlateidFormat): Observable<Array<Player>> {
			return this.http.get<Array<Player>>(this.baseUri + format + '/InjuredPlayers', {});
		}

		/**
		 * Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)
		 * Get {format}/PlayerGameProjectionStatsByPlayerID/{season}/{week}/{playerid}
		 * @param {DfsSlateOwnershipProjectionsBySlateidFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season and the season type. If no season type is provided, then the default is regular season.
		 *           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
		 *         
		 * @param {string} week 
		 *           Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.
		 *           Example: <code>1</code>
		 *         
		 * @param {string} playerid Each NFL player has a unique ID assigned by FantasyData. Player IDs can be determined by pulling player related data. Example:<code>14257</code>.
		 */
		ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries(format: DfsSlateOwnershipProjectionsBySlateidFormat, season: string, week: string, playerid: string): Observable<PlayerGameProjection> {
			return this.http.get<PlayerGameProjection>(this.baseUri + format + '/PlayerGameProjectionStatsByPlayerID/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (week == null ? '' : encodeURIComponent(week)) + '/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}

		/**
		 * Projected Player Game Stats by Team (w/ Injuries, Lineups, DFS Salaries)
		 * Get {format}/PlayerGameProjectionStatsByTeam/{season}/{week}/{team}
		 * @param {DfsSlateOwnershipProjectionsBySlateidFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season and the season type. If no season type is provided, then the default is regular season.
		 *           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
		 *         
		 * @param {string} week Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.
		 *           Example: <code>1</code>
		 *         
		 * @param {string} team Abbreviation of the team. Example: <code>WAS</code>.
		 */
		ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries(format: DfsSlateOwnershipProjectionsBySlateidFormat, season: string, week: string, team: string): Observable<Array<PlayerGameProjection>> {
			return this.http.get<Array<PlayerGameProjection>>(this.baseUri + format + '/PlayerGameProjectionStatsByTeam/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (week == null ? '' : encodeURIComponent(week)) + '/' + (team == null ? '' : encodeURIComponent(team)) + '', {});
		}

		/**
		 * Projected Player Game Stats by Week (w/ Injuries, Lineups, DFS Salaries)
		 * Get {format}/PlayerGameProjectionStatsByWeek/{season}/{week}
		 * @param {DfsSlateOwnershipProjectionsBySlateidFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season and the season type. If no season type is provided, then the default is regular season.
		 *           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
		 *         
		 * @param {string} week 
		 *           Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.
		 *           Example: <code>1</code>
		 *         
		 */
		ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries(format: DfsSlateOwnershipProjectionsBySlateidFormat, season: string, week: string): Observable<Array<PlayerGameProjection>> {
			return this.http.get<Array<PlayerGameProjection>>(this.baseUri + format + '/PlayerGameProjectionStatsByWeek/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (week == null ? '' : encodeURIComponent(week)) + '', {});
		}

		/**
		 * Projected Player Season Stats (w/ ADP)
		 * Get {format}/PlayerSeasonProjectionStats/{season}
		 * @param {DfsSlateOwnershipProjectionsBySlateidFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season and the season type. If no season type is provided, then the default is regular season.
		 *           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
		 *         
		 */
		ProjectedPlayerSeasonStatsWAdp(format: DfsSlateOwnershipProjectionsBySlateidFormat, season: string): Observable<Array<PlayerSeasonProjection>> {
			return this.http.get<Array<PlayerSeasonProjection>>(this.baseUri + format + '/PlayerSeasonProjectionStats/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * Projected Player Season Stats by Player (w/ ADP)
		 * Get {format}/PlayerSeasonProjectionStatsByPlayerID/{season}/{playerid}
		 * @param {DfsSlateOwnershipProjectionsBySlateidFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season and the season type. If no season type is provided, then the default is regular season.
		 *           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
		 *         
		 * @param {string} playerid Each NFL player has a unique ID assigned by FantasyData. Player IDs can be determined by pulling player related data. Example:<code>14257</code>.
		 */
		ProjectedPlayerSeasonStatsByPlayerWAdp(format: DfsSlateOwnershipProjectionsBySlateidFormat, season: string, playerid: string): Observable<PlayerSeasonProjection> {
			return this.http.get<PlayerSeasonProjection>(this.baseUri + format + '/PlayerSeasonProjectionStatsByPlayerID/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}

		/**
		 * Projected Player Season Stats by Team (w/ ADP)
		 * Get {format}/PlayerSeasonProjectionStatsByTeam/{season}/{team}
		 * @param {DfsSlateOwnershipProjectionsBySlateidFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season and the season type. If no season type is provided, then the default is regular season.
		 *           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
		 *         
		 * @param {string} team Abbreviation of the team. Example: <code>WAS</code>.
		 */
		ProjectedPlayerSeasonStatsByTeamWAdp(format: DfsSlateOwnershipProjectionsBySlateidFormat, season: string, team: string): Observable<Array<PlayerSeasonProjection>> {
			return this.http.get<Array<PlayerSeasonProjection>>(this.baseUri + format + '/PlayerSeasonProjectionStatsByTeam/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (team == null ? '' : encodeURIComponent(team)) + '', {});
		}

		/**
		 * Upcoming DFS Slate Ownership Projections
		 * Grabs DFS Slates which have not yet started for which we have DFS Ownership projections.
		 * Get {format}/UpcomingDfsSlateOwnershipProjections
		 * @param {DfsSlateOwnershipProjectionsBySlateidFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 */
		UpcomingDfsSlateOwnershipProjections(format: DfsSlateOwnershipProjectionsBySlateidFormat): Observable<Array<DfsSlateWithOwnershipProjection>> {
			return this.http.get<Array<DfsSlateWithOwnershipProjection>>(this.baseUri + format + '/UpcomingDfsSlateOwnershipProjections', {});
		}
	}

	export enum DfsSlateOwnershipProjectionsBySlateidFormat { XML = 'XML', JSON = 'JSON' }

}

