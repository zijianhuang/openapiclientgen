import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface DepthChart {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DepthChartID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DepthOrder?: number | null;
		Name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID?: number | null;
		Position?: string | null;
		PositionCategory?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID?: number | null;
		Updated?: string | null;
	}
	export interface DepthChartFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DepthChartID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DepthOrder: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID: FormControl<number | null | undefined>,
		Position: FormControl<string | null | undefined>,
		PositionCategory: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
	}
	export function CreateDepthChartFormGroup() {
		return new FormGroup<DepthChartFormProperties>({
			DepthChartID: new FormControl<number | null | undefined>(undefined),
			DepthOrder: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			Position: new FormControl<string | null | undefined>(undefined),
			PositionCategory: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
		});

	}

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
		Team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID?: number | null;
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
		Team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AlternateID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Attendance?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayRotationNumber?: number | null;
		AwayTeam?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamMoneyLine?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamScore?: number | null;
		Channel?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		CrewChiefID?: number | null;
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
		HomeRotationNumber?: number | null;
		HomeTeam?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamMoneyLine?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamScore?: number | null;
		IsClosed?: boolean | null;
		LastPlay?: string | null;
		NeutralVenue?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OverPayout?: number | null;

		/** Type: double */
		OverUnder?: number | null;

		/** Type: double */
		PointSpread?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PointSpreadAwayTeamMoneyLine?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PointSpreadHomeTeamMoneyLine?: number | null;
		Quarter?: string | null;
		Quarters?: Array<Quarter>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RefereeID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType?: number | null;
		SeriesInfo?: Series;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StadiumID?: number | null;
		Status?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimeRemainingMinutes?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimeRemainingSeconds?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UmpireID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UnderPayout?: number | null;
		Updated?: string | null;
	}
	export interface GameFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AlternateID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Attendance: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayRotationNumber: FormControl<number | null | undefined>,
		AwayTeam: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamMoneyLine: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamScore: FormControl<number | null | undefined>,
		Channel: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		CrewChiefID: FormControl<number | null | undefined>,
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
		HomeRotationNumber: FormControl<number | null | undefined>,
		HomeTeam: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamMoneyLine: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamScore: FormControl<number | null | undefined>,
		IsClosed: FormControl<boolean | null | undefined>,
		LastPlay: FormControl<string | null | undefined>,
		NeutralVenue: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OverPayout: FormControl<number | null | undefined>,

		/** Type: double */
		OverUnder: FormControl<number | null | undefined>,

		/** Type: double */
		PointSpread: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PointSpreadAwayTeamMoneyLine: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PointSpreadHomeTeamMoneyLine: FormControl<number | null | undefined>,
		Quarter: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RefereeID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StadiumID: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimeRemainingMinutes: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimeRemainingSeconds: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UmpireID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UnderPayout: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
	}
	export function CreateGameFormGroup() {
		return new FormGroup<GameFormProperties>({
			AlternateID: new FormControl<number | null | undefined>(undefined),
			Attendance: new FormControl<number | null | undefined>(undefined),
			AwayRotationNumber: new FormControl<number | null | undefined>(undefined),
			AwayTeam: new FormControl<string | null | undefined>(undefined),
			AwayTeamID: new FormControl<number | null | undefined>(undefined),
			AwayTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			AwayTeamScore: new FormControl<number | null | undefined>(undefined),
			Channel: new FormControl<string | null | undefined>(undefined),
			CrewChiefID: new FormControl<number | null | undefined>(undefined),
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
			PointSpread: new FormControl<number | null | undefined>(undefined),
			PointSpreadAwayTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			PointSpreadHomeTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			Quarter: new FormControl<string | null | undefined>(undefined),
			RefereeID: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			StadiumID: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			TimeRemainingMinutes: new FormControl<number | null | undefined>(undefined),
			TimeRemainingSeconds: new FormControl<number | null | undefined>(undefined),
			UmpireID: new FormControl<number | null | undefined>(undefined),
			UnderPayout: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Quarter {

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
		QuarterID?: number | null;
	}
	export interface QuarterFormProperties {

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
		QuarterID: FormControl<number | null | undefined>,
	}
	export function CreateQuarterFormGroup() {
		return new FormGroup<QuarterFormProperties>({
			AwayScore: new FormControl<number | null | undefined>(undefined),
			GameID: new FormControl<number | null | undefined>(undefined),
			HomeScore: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Number: new FormControl<number | null | undefined>(undefined),
			QuarterID: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Lineup {
		Confirmed?: boolean | null;
		FirstName?: string | null;
		LastName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID?: number | null;
		Position?: string | null;
		Starting?: boolean | null;
		Team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID?: number | null;
	}
	export interface LineupFormProperties {
		Confirmed: FormControl<boolean | null | undefined>,
		FirstName: FormControl<string | null | undefined>,
		LastName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID: FormControl<number | null | undefined>,
		Position: FormControl<string | null | undefined>,
		Starting: FormControl<boolean | null | undefined>,
		Team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID: FormControl<number | null | undefined>,
	}
	export function CreateLineupFormGroup() {
		return new FormGroup<LineupFormProperties>({
			Confirmed: new FormControl<boolean | null | undefined>(undefined),
			FirstName: new FormControl<string | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			Position: new FormControl<string | null | undefined>(undefined),
			Starting: new FormControl<boolean | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Player {
		BirthCity?: string | null;
		BirthCountry?: string | null;
		BirthDate?: string | null;
		BirthState?: string | null;
		College?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DepthChartOrder?: number | null;
		DepthChartPosition?: string | null;
		DraftKingsName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DraftKingsPlayerID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Experience?: number | null;
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
		NbaDotComPlayerID?: number | null;
		PhotoUrl?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID?: number | null;
		Position?: string | null;
		PositionCategory?: string | null;

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
		BirthCity: FormControl<string | null | undefined>,
		BirthCountry: FormControl<string | null | undefined>,
		BirthDate: FormControl<string | null | undefined>,
		BirthState: FormControl<string | null | undefined>,
		College: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DepthChartOrder: FormControl<number | null | undefined>,
		DepthChartPosition: FormControl<string | null | undefined>,
		DraftKingsName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DraftKingsPlayerID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Experience: FormControl<number | null | undefined>,
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
		NbaDotComPlayerID: FormControl<number | null | undefined>,
		PhotoUrl: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID: FormControl<number | null | undefined>,
		Position: FormControl<string | null | undefined>,
		PositionCategory: FormControl<string | null | undefined>,

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
			BirthCity: new FormControl<string | null | undefined>(undefined),
			BirthCountry: new FormControl<string | null | undefined>(undefined),
			BirthDate: new FormControl<string | null | undefined>(undefined),
			BirthState: new FormControl<string | null | undefined>(undefined),
			College: new FormControl<string | null | undefined>(undefined),
			DepthChartOrder: new FormControl<number | null | undefined>(undefined),
			DepthChartPosition: new FormControl<string | null | undefined>(undefined),
			DraftKingsName: new FormControl<string | null | undefined>(undefined),
			DraftKingsPlayerID: new FormControl<number | null | undefined>(undefined),
			Experience: new FormControl<number | null | undefined>(undefined),
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
			NbaDotComPlayerID: new FormControl<number | null | undefined>(undefined),
			PhotoUrl: new FormControl<string | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			Position: new FormControl<string | null | undefined>(undefined),
			PositionCategory: new FormControl<string | null | undefined>(undefined),
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

		/** Type: double */
		Assists?: number | null;

		/** Type: double */
		AssistsPercentage?: number | null;

		/** Type: double */
		BlockedShots?: number | null;

		/** Type: double */
		BlocksPercentage?: number | null;
		DateTime?: string | null;
		Day?: string | null;

		/** Type: double */
		DefensiveRebounds?: number | null;

		/** Type: double */
		DefensiveReboundsPercentage?: number | null;

		/** Type: double */
		DoubleDoubles?: number | null;
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
		FieldGoalsAttempted?: number | null;

		/** Type: double */
		FieldGoalsMade?: number | null;

		/** Type: double */
		FieldGoalsPercentage?: number | null;

		/** Type: double */
		FreeThrowsAttempted?: number | null;

		/** Type: double */
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
		IsClosed?: boolean | null;
		IsGameOver?: boolean | null;
		LineupConfirmed?: boolean | null;
		LineupStatus?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Minutes?: number | null;
		Name?: string | null;

		/** Type: double */
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

		/** Type: double */
		PersonalFouls?: number | null;

		/** Type: double */
		PlayerEfficiencyRating?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID?: number | null;

		/** Type: double */
		PlusMinus?: number | null;

		/** Type: double */
		Points?: number | null;
		Position?: string | null;

		/** Type: double */
		Rebounds?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Seconds?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Started?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StatID?: number | null;

		/** Type: double */
		Steals?: number | null;

		/** Type: double */
		StealsPercentage?: number | null;
		Team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID?: number | null;

		/** Type: double */
		ThreePointersAttempted?: number | null;

		/** Type: double */
		ThreePointersMade?: number | null;

		/** Type: double */
		ThreePointersPercentage?: number | null;

		/** Type: double */
		TotalReboundsPercentage?: number | null;

		/** Type: double */
		TripleDoubles?: number | null;

		/** Type: double */
		TrueShootingAttempts?: number | null;

		/** Type: double */
		TrueShootingPercentage?: number | null;

		/** Type: double */
		TurnOversPercentage?: number | null;

		/** Type: double */
		Turnovers?: number | null;

		/** Type: double */
		TwoPointersAttempted?: number | null;

		/** Type: double */
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

		/** Type: double */
		Assists: FormControl<number | null | undefined>,

		/** Type: double */
		AssistsPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		BlockedShots: FormControl<number | null | undefined>,

		/** Type: double */
		BlocksPercentage: FormControl<number | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,

		/** Type: double */
		DefensiveRebounds: FormControl<number | null | undefined>,

		/** Type: double */
		DefensiveReboundsPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		DoubleDoubles: FormControl<number | null | undefined>,
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
		FieldGoalsAttempted: FormControl<number | null | undefined>,

		/** Type: double */
		FieldGoalsMade: FormControl<number | null | undefined>,

		/** Type: double */
		FieldGoalsPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		FreeThrowsAttempted: FormControl<number | null | undefined>,

		/** Type: double */
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
		IsClosed: FormControl<boolean | null | undefined>,
		IsGameOver: FormControl<boolean | null | undefined>,
		LineupConfirmed: FormControl<boolean | null | undefined>,
		LineupStatus: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Minutes: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: double */
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

		/** Type: double */
		PersonalFouls: FormControl<number | null | undefined>,

		/** Type: double */
		PlayerEfficiencyRating: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID: FormControl<number | null | undefined>,

		/** Type: double */
		PlusMinus: FormControl<number | null | undefined>,

		/** Type: double */
		Points: FormControl<number | null | undefined>,
		Position: FormControl<string | null | undefined>,

		/** Type: double */
		Rebounds: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Seconds: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Started: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StatID: FormControl<number | null | undefined>,

		/** Type: double */
		Steals: FormControl<number | null | undefined>,

		/** Type: double */
		StealsPercentage: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID: FormControl<number | null | undefined>,

		/** Type: double */
		ThreePointersAttempted: FormControl<number | null | undefined>,

		/** Type: double */
		ThreePointersMade: FormControl<number | null | undefined>,

		/** Type: double */
		ThreePointersPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		TotalReboundsPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		TripleDoubles: FormControl<number | null | undefined>,

		/** Type: double */
		TrueShootingAttempts: FormControl<number | null | undefined>,

		/** Type: double */
		TrueShootingPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		TurnOversPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		Turnovers: FormControl<number | null | undefined>,

		/** Type: double */
		TwoPointersAttempted: FormControl<number | null | undefined>,

		/** Type: double */
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
			DoubleDoubles: new FormControl<number | null | undefined>(undefined),
			DraftKingsPosition: new FormControl<string | null | undefined>(undefined),
			DraftKingsSalary: new FormControl<number | null | undefined>(undefined),
			EffectiveFieldGoalsPercentage: new FormControl<number | null | undefined>(undefined),
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
			IsClosed: new FormControl<boolean | null | undefined>(undefined),
			IsGameOver: new FormControl<boolean | null | undefined>(undefined),
			LineupConfirmed: new FormControl<boolean | null | undefined>(undefined),
			LineupStatus: new FormControl<string | null | undefined>(undefined),
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
			PlusMinus: new FormControl<number | null | undefined>(undefined),
			Points: new FormControl<number | null | undefined>(undefined),
			Position: new FormControl<string | null | undefined>(undefined),
			Rebounds: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			Seconds: new FormControl<number | null | undefined>(undefined),
			Started: new FormControl<number | null | undefined>(undefined),
			StatID: new FormControl<number | null | undefined>(undefined),
			Steals: new FormControl<number | null | undefined>(undefined),
			StealsPercentage: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			ThreePointersAttempted: new FormControl<number | null | undefined>(undefined),
			ThreePointersMade: new FormControl<number | null | undefined>(undefined),
			ThreePointersPercentage: new FormControl<number | null | undefined>(undefined),
			TotalReboundsPercentage: new FormControl<number | null | undefined>(undefined),
			TripleDoubles: new FormControl<number | null | undefined>(undefined),
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

	export interface PlayerSeasonProjection {

		/** Type: double */
		Assists?: number | null;

		/** Type: double */
		AssistsPercentage?: number | null;

		/** Type: double */
		BlockedShots?: number | null;

		/** Type: double */
		BlocksPercentage?: number | null;

		/** Type: double */
		DefensiveRebounds?: number | null;

		/** Type: double */
		DefensiveReboundsPercentage?: number | null;

		/** Type: double */
		DoubleDoubles?: number | null;

		/** Type: double */
		EffectiveFieldGoalsPercentage?: number | null;

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
		FieldGoalsAttempted?: number | null;

		/** Type: double */
		FieldGoalsMade?: number | null;

		/** Type: double */
		FieldGoalsPercentage?: number | null;

		/** Type: double */
		FreeThrowsAttempted?: number | null;

		/** Type: double */
		FreeThrowsMade?: number | null;

		/** Type: double */
		FreeThrowsPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Games?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID?: number | null;
		IsClosed?: boolean | null;
		LineupConfirmed?: boolean | null;
		LineupStatus?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Minutes?: number | null;
		Name?: string | null;

		/** Type: double */
		OffensiveRebounds?: number | null;

		/** Type: double */
		OffensiveReboundsPercentage?: number | null;

		/** Type: double */
		PersonalFouls?: number | null;

		/** Type: double */
		PlayerEfficiencyRating?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID?: number | null;

		/** Type: double */
		PlusMinus?: number | null;

		/** Type: double */
		Points?: number | null;
		Position?: string | null;

		/** Type: double */
		Rebounds?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Seconds?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Started?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StatID?: number | null;

		/** Type: double */
		Steals?: number | null;

		/** Type: double */
		StealsPercentage?: number | null;
		Team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID?: number | null;

		/** Type: double */
		ThreePointersAttempted?: number | null;

		/** Type: double */
		ThreePointersMade?: number | null;

		/** Type: double */
		ThreePointersPercentage?: number | null;

		/** Type: double */
		TotalReboundsPercentage?: number | null;

		/** Type: double */
		TripleDoubles?: number | null;

		/** Type: double */
		TrueShootingAttempts?: number | null;

		/** Type: double */
		TrueShootingPercentage?: number | null;

		/** Type: double */
		TurnOversPercentage?: number | null;

		/** Type: double */
		Turnovers?: number | null;

		/** Type: double */
		TwoPointersAttempted?: number | null;

		/** Type: double */
		TwoPointersMade?: number | null;

		/** Type: double */
		TwoPointersPercentage?: number | null;
		Updated?: string | null;

		/** Type: double */
		UsageRatePercentage?: number | null;
	}
	export interface PlayerSeasonProjectionFormProperties {

		/** Type: double */
		Assists: FormControl<number | null | undefined>,

		/** Type: double */
		AssistsPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		BlockedShots: FormControl<number | null | undefined>,

		/** Type: double */
		BlocksPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		DefensiveRebounds: FormControl<number | null | undefined>,

		/** Type: double */
		DefensiveReboundsPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		DoubleDoubles: FormControl<number | null | undefined>,

		/** Type: double */
		EffectiveFieldGoalsPercentage: FormControl<number | null | undefined>,

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
		FieldGoalsAttempted: FormControl<number | null | undefined>,

		/** Type: double */
		FieldGoalsMade: FormControl<number | null | undefined>,

		/** Type: double */
		FieldGoalsPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		FreeThrowsAttempted: FormControl<number | null | undefined>,

		/** Type: double */
		FreeThrowsMade: FormControl<number | null | undefined>,

		/** Type: double */
		FreeThrowsPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Games: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID: FormControl<number | null | undefined>,
		IsClosed: FormControl<boolean | null | undefined>,
		LineupConfirmed: FormControl<boolean | null | undefined>,
		LineupStatus: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Minutes: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: double */
		OffensiveRebounds: FormControl<number | null | undefined>,

		/** Type: double */
		OffensiveReboundsPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		PersonalFouls: FormControl<number | null | undefined>,

		/** Type: double */
		PlayerEfficiencyRating: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID: FormControl<number | null | undefined>,

		/** Type: double */
		PlusMinus: FormControl<number | null | undefined>,

		/** Type: double */
		Points: FormControl<number | null | undefined>,
		Position: FormControl<string | null | undefined>,

		/** Type: double */
		Rebounds: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Seconds: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Started: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StatID: FormControl<number | null | undefined>,

		/** Type: double */
		Steals: FormControl<number | null | undefined>,

		/** Type: double */
		StealsPercentage: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID: FormControl<number | null | undefined>,

		/** Type: double */
		ThreePointersAttempted: FormControl<number | null | undefined>,

		/** Type: double */
		ThreePointersMade: FormControl<number | null | undefined>,

		/** Type: double */
		ThreePointersPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		TotalReboundsPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		TripleDoubles: FormControl<number | null | undefined>,

		/** Type: double */
		TrueShootingAttempts: FormControl<number | null | undefined>,

		/** Type: double */
		TrueShootingPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		TurnOversPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		Turnovers: FormControl<number | null | undefined>,

		/** Type: double */
		TwoPointersAttempted: FormControl<number | null | undefined>,

		/** Type: double */
		TwoPointersMade: FormControl<number | null | undefined>,

		/** Type: double */
		TwoPointersPercentage: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,

		/** Type: double */
		UsageRatePercentage: FormControl<number | null | undefined>,
	}
	export function CreatePlayerSeasonProjectionFormGroup() {
		return new FormGroup<PlayerSeasonProjectionFormProperties>({
			Assists: new FormControl<number | null | undefined>(undefined),
			AssistsPercentage: new FormControl<number | null | undefined>(undefined),
			BlockedShots: new FormControl<number | null | undefined>(undefined),
			BlocksPercentage: new FormControl<number | null | undefined>(undefined),
			DefensiveRebounds: new FormControl<number | null | undefined>(undefined),
			DefensiveReboundsPercentage: new FormControl<number | null | undefined>(undefined),
			DoubleDoubles: new FormControl<number | null | undefined>(undefined),
			EffectiveFieldGoalsPercentage: new FormControl<number | null | undefined>(undefined),
			FantasyPoints: new FormControl<number | null | undefined>(undefined),
			FantasyPointsDraftKings: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFanDuel: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFantasyDraft: new FormControl<number | null | undefined>(undefined),
			FantasyPointsYahoo: new FormControl<number | null | undefined>(undefined),
			FieldGoalsAttempted: new FormControl<number | null | undefined>(undefined),
			FieldGoalsMade: new FormControl<number | null | undefined>(undefined),
			FieldGoalsPercentage: new FormControl<number | null | undefined>(undefined),
			FreeThrowsAttempted: new FormControl<number | null | undefined>(undefined),
			FreeThrowsMade: new FormControl<number | null | undefined>(undefined),
			FreeThrowsPercentage: new FormControl<number | null | undefined>(undefined),
			Games: new FormControl<number | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			IsClosed: new FormControl<boolean | null | undefined>(undefined),
			LineupConfirmed: new FormControl<boolean | null | undefined>(undefined),
			LineupStatus: new FormControl<string | null | undefined>(undefined),
			Minutes: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			OffensiveRebounds: new FormControl<number | null | undefined>(undefined),
			OffensiveReboundsPercentage: new FormControl<number | null | undefined>(undefined),
			PersonalFouls: new FormControl<number | null | undefined>(undefined),
			PlayerEfficiencyRating: new FormControl<number | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			PlusMinus: new FormControl<number | null | undefined>(undefined),
			Points: new FormControl<number | null | undefined>(undefined),
			Position: new FormControl<string | null | undefined>(undefined),
			Rebounds: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			Seconds: new FormControl<number | null | undefined>(undefined),
			Started: new FormControl<number | null | undefined>(undefined),
			StatID: new FormControl<number | null | undefined>(undefined),
			Steals: new FormControl<number | null | undefined>(undefined),
			StealsPercentage: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			ThreePointersAttempted: new FormControl<number | null | undefined>(undefined),
			ThreePointersMade: new FormControl<number | null | undefined>(undefined),
			ThreePointersPercentage: new FormControl<number | null | undefined>(undefined),
			TotalReboundsPercentage: new FormControl<number | null | undefined>(undefined),
			TripleDoubles: new FormControl<number | null | undefined>(undefined),
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

	export interface Series {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamWins?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GameNumber?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamWins?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		MaxLength?: number | null;
	}
	export interface SeriesFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamWins: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GameNumber: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamWins: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

	export interface StartingLineups {
		AwayLineup?: Array<Lineup>;
		AwayTeam?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamID?: number | null;
		DateTime?: string | null;
		Day?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GameID?: number | null;
		HomeLineup?: Array<Lineup>;
		HomeTeam?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType?: number | null;
		Status?: string | null;
	}
	export interface StartingLineupsFormProperties {
		AwayTeam: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamID: FormControl<number | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GameID: FormControl<number | null | undefined>,
		HomeTeam: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateStartingLineupsFormGroup() {
		return new FormGroup<StartingLineupsFormProperties>({
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

	export interface TeamDepthChart {
		DepthCharts?: Array<DepthChart>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID?: number | null;
	}
	export interface TeamDepthChartFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID: FormControl<number | null | undefined>,
	}
	export function CreateTeamDepthChartFormGroup() {
		return new FormGroup<TeamDepthChartFormProperties>({
			TeamID: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Depth Charts
		 * This endpoint provides a depth chart for each NBA team.
		 * Get {format}/DepthCharts
		 * @param {DepthChartsFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 */
		DepthCharts(format: DepthChartsFormat): Observable<Array<TeamDepthChart>> {
			return this.http.get<Array<TeamDepthChart>>(this.baseUri + format + '/DepthCharts', {});
		}

		/**
		 * DFS Slates by Date
		 * Get {format}/DfsSlatesByDate/{date}
		 * @param {DepthChartsFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s).
		 * <br>Examples: <code>2017-DEC-01</code>, <code>2018-FEB-15</code>.
		 */
		DfsSlatesByDate(format: DepthChartsFormat, date: string): Observable<Array<DfsSlate>> {
			return this.http.get<Array<DfsSlate>>(this.baseUri + format + '/DfsSlatesByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * Injured Players
		 * This endpoint provides all currently injured NBA players, along with injury details.
		 * Get {format}/InjuredPlayers
		 * @param {DepthChartsFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 */
		InjuredPlayers(format: DepthChartsFormat): Observable<Array<Player>> {
			return this.http.get<Array<Player>>(this.baseUri + format + '/InjuredPlayers', {});
		}

		/**
		 * Projected Player Game Stats by Date (w/ Injuries, DFS Salaries)
		 * Get {format}/PlayerGameProjectionStatsByDate/{date}
		 * @param {DepthChartsFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s). <br>Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>.
		 */
		ProjectedPlayerGameStatsByDateWInjuriesDfsSalaries(format: DepthChartsFormat, date: string): Observable<Array<PlayerGameProjection>> {
			return this.http.get<Array<PlayerGameProjection>>(this.baseUri + format + '/PlayerGameProjectionStatsByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * Projected Player Game Stats by Player (w/ Injuries, DFS Salaries)
		 * Get {format}/PlayerGameProjectionStatsByPlayer/{date}/{playerid}
		 * @param {DepthChartsFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s).<br>Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>.
		 * @param {string} playerid Unique FantasyData Player ID. Example:<code>20000571</code>.
		 */
		ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalaries(format: DepthChartsFormat, date: string, playerid: string): Observable<PlayerGameProjection> {
			return this.http.get<PlayerGameProjection>(this.baseUri + format + '/PlayerGameProjectionStatsByPlayer/' + (date == null ? '' : encodeURIComponent(date)) + '/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}

		/**
		 * Projected Player Season Stats
		 * Get {format}/PlayerSeasonProjectionStats/{season}
		 * @param {DepthChartsFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2019</code>, etc.
		 */
		ProjectedPlayerSeasonStats(format: DepthChartsFormat, season: string): Observable<Array<PlayerSeasonProjection>> {
			return this.http.get<Array<PlayerSeasonProjection>>(this.baseUri + format + '/PlayerSeasonProjectionStats/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * Projected Player Season Stats by Player
		 * Get {format}/PlayerSeasonProjectionStatsByPlayer/{season}/{playerid}
		 * @param {DepthChartsFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2019</code>, etc.
		 * @param {string} playerid Unique FantasyData Player ID. Example:<code>20000571</code>.
		 */
		ProjectedPlayerSeasonStatsByPlayer(format: DepthChartsFormat, season: string, playerid: string): Observable<PlayerSeasonProjection> {
			return this.http.get<PlayerSeasonProjection>(this.baseUri + format + '/PlayerSeasonProjectionStatsByPlayer/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}

		/**
		 * Projected Player Season Stats by Team
		 * Get {format}/PlayerSeasonProjectionStatsByTeam/{season}/{team}
		 * @param {DepthChartsFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2019</code>, etc.
		 * @param {string} team The abbreviation of the requested team.
		 * <br>Examples: <code>MIA</code>, <code>PHI</code>.
		 */
		ProjectedPlayerSeasonStatsByTeam(format: DepthChartsFormat, season: string, team: string): Observable<Array<PlayerSeasonProjection>> {
			return this.http.get<Array<PlayerSeasonProjection>>(this.baseUri + format + '/PlayerSeasonProjectionStatsByTeam/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (team == null ? '' : encodeURIComponent(team)) + '', {});
		}

		/**
		 * Starting Lineups by Date
		 * This endpoint provides the projected & confirmed starting lineups for NBA games on a given date.
		 * Get {format}/StartingLineupsByDate/{date}
		 * @param {DepthChartsFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s). <br> Examples: <code>2021-OCT-12</code>, <code>2021-DEC-09</code>.
		 */
		StartingLineupsByDate(format: DepthChartsFormat, date: string): Observable<Array<StartingLineups>> {
			return this.http.get<Array<StartingLineups>>(this.baseUri + format + '/StartingLineupsByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}
	}

	export enum DepthChartsFormat { XML = 'XML', JSON = 'JSON' }

}
