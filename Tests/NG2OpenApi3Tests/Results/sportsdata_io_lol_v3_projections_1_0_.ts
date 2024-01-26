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
		VideoGameId?: number | null;
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
		VideoGameId: FormControl<number | null | undefined>,
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
			VideoGameId: new FormControl<number | null | undefined>(undefined),
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
		BestOf?: string | null;
		DateTime?: string | null;
		Day?: string | null;
		DrawMoneyLine?: number | null;
		GameId?: number | null;
		Group?: string | null;
		IsClosed?: boolean | null;
		PointSpread?: number | null;
		RoundId?: number | null;
		Season?: number | null;
		SeasonType?: number | null;
		Status?: string | null;
		TeamAId?: number | null;
		TeamAKey?: string | null;
		TeamAMoneyLine?: number | null;
		TeamAName?: string | null;
		TeamAPointSpreadPayout?: number | null;
		TeamAScore?: number | null;
		TeamBId?: number | null;
		TeamBKey?: string | null;
		TeamBMoneyLine?: number | null;
		TeamBName?: string | null;
		TeamBPointSpreadPayout?: number | null;
		TeamBScore?: number | null;
		Updated?: string | null;
		UpdatedUtc?: string | null;
		VenueId?: number | null;
		VenueType?: string | null;
		Week?: number | null;
		Winner?: string | null;
	}
	export interface GameFormProperties {
		BestOf: FormControl<string | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,
		DrawMoneyLine: FormControl<number | null | undefined>,
		GameId: FormControl<number | null | undefined>,
		Group: FormControl<string | null | undefined>,
		IsClosed: FormControl<boolean | null | undefined>,
		PointSpread: FormControl<number | null | undefined>,
		RoundId: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,
		TeamAId: FormControl<number | null | undefined>,
		TeamAKey: FormControl<string | null | undefined>,
		TeamAMoneyLine: FormControl<number | null | undefined>,
		TeamAName: FormControl<string | null | undefined>,
		TeamAPointSpreadPayout: FormControl<number | null | undefined>,
		TeamAScore: FormControl<number | null | undefined>,
		TeamBId: FormControl<number | null | undefined>,
		TeamBKey: FormControl<string | null | undefined>,
		TeamBMoneyLine: FormControl<number | null | undefined>,
		TeamBName: FormControl<string | null | undefined>,
		TeamBPointSpreadPayout: FormControl<number | null | undefined>,
		TeamBScore: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
		UpdatedUtc: FormControl<string | null | undefined>,
		VenueId: FormControl<number | null | undefined>,
		VenueType: FormControl<string | null | undefined>,
		Week: FormControl<number | null | undefined>,
		Winner: FormControl<string | null | undefined>,
	}
	export function CreateGameFormGroup() {
		return new FormGroup<GameFormProperties>({
			BestOf: new FormControl<string | null | undefined>(undefined),
			DateTime: new FormControl<string | null | undefined>(undefined),
			Day: new FormControl<string | null | undefined>(undefined),
			DrawMoneyLine: new FormControl<number | null | undefined>(undefined),
			GameId: new FormControl<number | null | undefined>(undefined),
			Group: new FormControl<string | null | undefined>(undefined),
			IsClosed: new FormControl<boolean | null | undefined>(undefined),
			PointSpread: new FormControl<number | null | undefined>(undefined),
			RoundId: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			TeamAId: new FormControl<number | null | undefined>(undefined),
			TeamAKey: new FormControl<string | null | undefined>(undefined),
			TeamAMoneyLine: new FormControl<number | null | undefined>(undefined),
			TeamAName: new FormControl<string | null | undefined>(undefined),
			TeamAPointSpreadPayout: new FormControl<number | null | undefined>(undefined),
			TeamAScore: new FormControl<number | null | undefined>(undefined),
			TeamBId: new FormControl<number | null | undefined>(undefined),
			TeamBKey: new FormControl<string | null | undefined>(undefined),
			TeamBMoneyLine: new FormControl<number | null | undefined>(undefined),
			TeamBName: new FormControl<string | null | undefined>(undefined),
			TeamBPointSpreadPayout: new FormControl<number | null | undefined>(undefined),
			TeamBScore: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
			UpdatedUtc: new FormControl<string | null | undefined>(undefined),
			VenueId: new FormControl<number | null | undefined>(undefined),
			VenueType: new FormControl<string | null | undefined>(undefined),
			Week: new FormControl<number | null | undefined>(undefined),
			Winner: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlayerGameProjection {
		Assists?: number | null;
		CombatPlayerScore?: number | null;
		DateTime?: string | null;
		Day?: string | null;
		Deaths?: number | null;
		DoubleKills?: number | null;
		FantasyPoints?: number | null;
		GameId?: number | null;
		Games?: number | null;
		GoldEarned?: number | null;
		GoldSpent?: number | null;
		InhibitorKills?: number | null;
		IsClosed?: boolean | null;
		KillingSpree?: number | null;
		Kills?: number | null;
		LargestCriticalStrike?: number | null;
		LargestKillingSpree?: number | null;
		LargestMultiKill?: number | null;
		LongestTimeSpentLiving?: number | null;
		MagicDamageDealt?: number | null;
		MagicDamageDealtToChampions?: number | null;
		MagicDamageTaken?: number | null;
		MatchName?: string | null;
		Matches?: number | null;
		Name?: string | null;
		NeutralMinionsKIlled?: number | null;
		NeutralMinionsKIlledTeamJungle?: number | null;
		NeutralMinionsKilledEnemyJungle?: number | null;
		ObjectivePlayerScore?: number | null;
		Opponent?: string | null;
		OpponentId?: number | null;
		PentaKills?: number | null;
		PhysicalDamageDealt?: number | null;
		PhysicalDamageDealtToChampions?: number | null;
		PhysicalDamageTaken?: number | null;
		PlayerId?: number | null;
		Position?: string | null;
		QuadraKills?: number | null;
		SightWardsBoughtInGame?: number | null;
		Team?: string | null;
		TeamId?: number | null;
		TenKillsOrAssists?: number | null;
		TotalDamageDealt?: number | null;
		TotalDamageDealtToChampions?: number | null;
		TotalDamageTaken?: number | null;
		TotalHeal?: number | null;
		TotalMinionsKilled?: number | null;
		TotalPlayerScore?: number | null;
		TotalTimeCrowdControlDealt?: number | null;
		TotalUnitsHealed?: number | null;
		TripleKills?: number | null;
		TrueDamageDealt?: number | null;
		TrueDamageDealtToChampions?: number | null;
		TrueDamageTaken?: number | null;
		TurretKills?: number | null;
		UnrealKills?: number | null;
		Updated?: string | null;
		VisionWardsBoughtInGame?: number | null;
		WardsKilled?: number | null;
		WardsPlaced?: number | null;
	}
	export interface PlayerGameProjectionFormProperties {
		Assists: FormControl<number | null | undefined>,
		CombatPlayerScore: FormControl<number | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,
		Deaths: FormControl<number | null | undefined>,
		DoubleKills: FormControl<number | null | undefined>,
		FantasyPoints: FormControl<number | null | undefined>,
		GameId: FormControl<number | null | undefined>,
		Games: FormControl<number | null | undefined>,
		GoldEarned: FormControl<number | null | undefined>,
		GoldSpent: FormControl<number | null | undefined>,
		InhibitorKills: FormControl<number | null | undefined>,
		IsClosed: FormControl<boolean | null | undefined>,
		KillingSpree: FormControl<number | null | undefined>,
		Kills: FormControl<number | null | undefined>,
		LargestCriticalStrike: FormControl<number | null | undefined>,
		LargestKillingSpree: FormControl<number | null | undefined>,
		LargestMultiKill: FormControl<number | null | undefined>,
		LongestTimeSpentLiving: FormControl<number | null | undefined>,
		MagicDamageDealt: FormControl<number | null | undefined>,
		MagicDamageDealtToChampions: FormControl<number | null | undefined>,
		MagicDamageTaken: FormControl<number | null | undefined>,
		MatchName: FormControl<string | null | undefined>,
		Matches: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		NeutralMinionsKIlled: FormControl<number | null | undefined>,
		NeutralMinionsKIlledTeamJungle: FormControl<number | null | undefined>,
		NeutralMinionsKilledEnemyJungle: FormControl<number | null | undefined>,
		ObjectivePlayerScore: FormControl<number | null | undefined>,
		Opponent: FormControl<string | null | undefined>,
		OpponentId: FormControl<number | null | undefined>,
		PentaKills: FormControl<number | null | undefined>,
		PhysicalDamageDealt: FormControl<number | null | undefined>,
		PhysicalDamageDealtToChampions: FormControl<number | null | undefined>,
		PhysicalDamageTaken: FormControl<number | null | undefined>,
		PlayerId: FormControl<number | null | undefined>,
		Position: FormControl<string | null | undefined>,
		QuadraKills: FormControl<number | null | undefined>,
		SightWardsBoughtInGame: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,
		TeamId: FormControl<number | null | undefined>,
		TenKillsOrAssists: FormControl<number | null | undefined>,
		TotalDamageDealt: FormControl<number | null | undefined>,
		TotalDamageDealtToChampions: FormControl<number | null | undefined>,
		TotalDamageTaken: FormControl<number | null | undefined>,
		TotalHeal: FormControl<number | null | undefined>,
		TotalMinionsKilled: FormControl<number | null | undefined>,
		TotalPlayerScore: FormControl<number | null | undefined>,
		TotalTimeCrowdControlDealt: FormControl<number | null | undefined>,
		TotalUnitsHealed: FormControl<number | null | undefined>,
		TripleKills: FormControl<number | null | undefined>,
		TrueDamageDealt: FormControl<number | null | undefined>,
		TrueDamageDealtToChampions: FormControl<number | null | undefined>,
		TrueDamageTaken: FormControl<number | null | undefined>,
		TurretKills: FormControl<number | null | undefined>,
		UnrealKills: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
		VisionWardsBoughtInGame: FormControl<number | null | undefined>,
		WardsKilled: FormControl<number | null | undefined>,
		WardsPlaced: FormControl<number | null | undefined>,
	}
	export function CreatePlayerGameProjectionFormGroup() {
		return new FormGroup<PlayerGameProjectionFormProperties>({
			Assists: new FormControl<number | null | undefined>(undefined),
			CombatPlayerScore: new FormControl<number | null | undefined>(undefined),
			DateTime: new FormControl<string | null | undefined>(undefined),
			Day: new FormControl<string | null | undefined>(undefined),
			Deaths: new FormControl<number | null | undefined>(undefined),
			DoubleKills: new FormControl<number | null | undefined>(undefined),
			FantasyPoints: new FormControl<number | null | undefined>(undefined),
			GameId: new FormControl<number | null | undefined>(undefined),
			Games: new FormControl<number | null | undefined>(undefined),
			GoldEarned: new FormControl<number | null | undefined>(undefined),
			GoldSpent: new FormControl<number | null | undefined>(undefined),
			InhibitorKills: new FormControl<number | null | undefined>(undefined),
			IsClosed: new FormControl<boolean | null | undefined>(undefined),
			KillingSpree: new FormControl<number | null | undefined>(undefined),
			Kills: new FormControl<number | null | undefined>(undefined),
			LargestCriticalStrike: new FormControl<number | null | undefined>(undefined),
			LargestKillingSpree: new FormControl<number | null | undefined>(undefined),
			LargestMultiKill: new FormControl<number | null | undefined>(undefined),
			LongestTimeSpentLiving: new FormControl<number | null | undefined>(undefined),
			MagicDamageDealt: new FormControl<number | null | undefined>(undefined),
			MagicDamageDealtToChampions: new FormControl<number | null | undefined>(undefined),
			MagicDamageTaken: new FormControl<number | null | undefined>(undefined),
			MatchName: new FormControl<string | null | undefined>(undefined),
			Matches: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			NeutralMinionsKIlled: new FormControl<number | null | undefined>(undefined),
			NeutralMinionsKIlledTeamJungle: new FormControl<number | null | undefined>(undefined),
			NeutralMinionsKilledEnemyJungle: new FormControl<number | null | undefined>(undefined),
			ObjectivePlayerScore: new FormControl<number | null | undefined>(undefined),
			Opponent: new FormControl<string | null | undefined>(undefined),
			OpponentId: new FormControl<number | null | undefined>(undefined),
			PentaKills: new FormControl<number | null | undefined>(undefined),
			PhysicalDamageDealt: new FormControl<number | null | undefined>(undefined),
			PhysicalDamageDealtToChampions: new FormControl<number | null | undefined>(undefined),
			PhysicalDamageTaken: new FormControl<number | null | undefined>(undefined),
			PlayerId: new FormControl<number | null | undefined>(undefined),
			Position: new FormControl<string | null | undefined>(undefined),
			QuadraKills: new FormControl<number | null | undefined>(undefined),
			SightWardsBoughtInGame: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamId: new FormControl<number | null | undefined>(undefined),
			TenKillsOrAssists: new FormControl<number | null | undefined>(undefined),
			TotalDamageDealt: new FormControl<number | null | undefined>(undefined),
			TotalDamageDealtToChampions: new FormControl<number | null | undefined>(undefined),
			TotalDamageTaken: new FormControl<number | null | undefined>(undefined),
			TotalHeal: new FormControl<number | null | undefined>(undefined),
			TotalMinionsKilled: new FormControl<number | null | undefined>(undefined),
			TotalPlayerScore: new FormControl<number | null | undefined>(undefined),
			TotalTimeCrowdControlDealt: new FormControl<number | null | undefined>(undefined),
			TotalUnitsHealed: new FormControl<number | null | undefined>(undefined),
			TripleKills: new FormControl<number | null | undefined>(undefined),
			TrueDamageDealt: new FormControl<number | null | undefined>(undefined),
			TrueDamageDealtToChampions: new FormControl<number | null | undefined>(undefined),
			TrueDamageTaken: new FormControl<number | null | undefined>(undefined),
			TurretKills: new FormControl<number | null | undefined>(undefined),
			UnrealKills: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
			VisionWardsBoughtInGame: new FormControl<number | null | undefined>(undefined),
			WardsKilled: new FormControl<number | null | undefined>(undefined),
			WardsPlaced: new FormControl<number | null | undefined>(undefined),
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
		 * <br>Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.
		 * @return {Array<DfsSlate>} 
		 */
		DfsSlatesByDate(format: DfsSlatesByDateFormat, date: string): Observable<Array<DfsSlate>> {
			return this.http.get<Array<DfsSlate>>(this.baseUri + format + '/DfsSlatesByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * Projected Player Game Stats by Date
		 * Projected Player Game Stats by Date
		 * Get {format}/PlayerGameProjectionStatsByDate/{date}
		 * @param {ProjectedPlayerGameStatsByDateFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s).
		 * <br>Example: <code>2019-01-20</code>
		 * @return {Array<PlayerGameProjection>} 
		 */
		ProjectedPlayerGameStatsByDate(format: ProjectedPlayerGameStatsByDateFormat, date: string): Observable<Array<PlayerGameProjection>> {
			return this.http.get<Array<PlayerGameProjection>>(this.baseUri + format + '/PlayerGameProjectionStatsByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * Projected Player Game Stats by Player
		 * Projected Player Game Stats by Date
		 * Get {format}/PlayerGameProjectionStatsByPlayer/{date}/{playerid}
		 * @param {ProjectedPlayerGameStatsByDateFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s).
		 * <br>Example: <code>2019-01-20</code>
		 * @param {string} playerid Unique FantasyData Player ID.
		 * Example:<code>100001500</code>.
		 * @return {Array<PlayerGameProjection>} 
		 */
		ProjectedPlayerGameStatsByPlayer(format: ProjectedPlayerGameStatsByDateFormat, date: string, playerid: string): Observable<Array<PlayerGameProjection>> {
			return this.http.get<Array<PlayerGameProjection>>(this.baseUri + format + '/PlayerGameProjectionStatsByPlayer/' + (date == null ? '' : encodeURIComponent(date)) + '/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}
	}

	export enum DfsSlatesByDateFormat { json = 0, xml = 1 }

	export enum ProjectedPlayerGameStatsByDateFormat { xml = 0, json = 1 }

}

