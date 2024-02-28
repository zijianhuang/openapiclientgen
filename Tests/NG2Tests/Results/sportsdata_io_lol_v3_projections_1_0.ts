import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface PlayerGameProjection {

		/** Type: double */
		Assists?: number | null;

		/** Type: double */
		CombatPlayerScore?: number | null;
		DateTime?: string | null;
		Day?: string | null;

		/** Type: double */
		Deaths?: number | null;

		/** Type: double */
		DoubleKills?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GameId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Games?: number | null;

		/** Type: double */
		GoldEarned?: number | null;

		/** Type: double */
		GoldSpent?: number | null;

		/** Type: double */
		InhibitorKills?: number | null;

		/** Type: double */
		KillingSpree?: number | null;

		/** Type: double */
		Kills?: number | null;

		/** Type: double */
		LargestCriticalStrike?: number | null;

		/** Type: double */
		LargestKillingSpree?: number | null;

		/** Type: double */
		LargestMultiKill?: number | null;

		/** Type: double */
		LongestTimeSpentLiving?: number | null;

		/** Type: double */
		MagicDamageDealt?: number | null;

		/** Type: double */
		MagicDamageDealtToChampions?: number | null;

		/** Type: double */
		MagicDamageTaken?: number | null;
		MatchName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Matches?: number | null;
		Name?: string | null;

		/** Type: double */
		NeutralMinionsKIlled?: number | null;

		/** Type: double */
		NeutralMinionsKIlledTeamJungle?: number | null;

		/** Type: double */
		NeutralMinionsKilledEnemyJungle?: number | null;

		/** Type: double */
		ObjectivePlayerScore?: number | null;
		Opponent?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentId?: number | null;

		/** Type: double */
		PentaKills?: number | null;

		/** Type: double */
		PhysicalDamageDealt?: number | null;

		/** Type: double */
		PhysicalDamageDealtToChampions?: number | null;

		/** Type: double */
		PhysicalDamageTaken?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerId?: number | null;

		/** Type: double */
		QuadraKills?: number | null;

		/** Type: double */
		SightWardsBoughtInGame?: number | null;
		Team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamId?: number | null;

		/** Type: double */
		TenKillsOrAssists?: number | null;

		/** Type: double */
		TotalDamageDealt?: number | null;

		/** Type: double */
		TotalDamageDealtToChampions?: number | null;

		/** Type: double */
		TotalDamageTaken?: number | null;

		/** Type: double */
		TotalHeal?: number | null;

		/** Type: double */
		TotalMinionsKilled?: number | null;

		/** Type: double */
		TotalPlayerScore?: number | null;

		/** Type: double */
		TotalTimeCrowdControlDealt?: number | null;

		/** Type: double */
		TotalUnitsHealed?: number | null;

		/** Type: double */
		TripleKills?: number | null;

		/** Type: double */
		TrueDamageDealt?: number | null;

		/** Type: double */
		TrueDamageDealtToChampions?: number | null;

		/** Type: double */
		TrueDamageTaken?: number | null;

		/** Type: double */
		TurretKills?: number | null;

		/** Type: double */
		UnrealKills?: number | null;
		Updated?: string | null;

		/** Type: double */
		VisionWardsBoughtInGame?: number | null;

		/** Type: double */
		WardsKilled?: number | null;

		/** Type: double */
		WardsPlaced?: number | null;
	}
	export interface PlayerGameProjectionFormProperties {

		/** Type: double */
		Assists: FormControl<number | null | undefined>,

		/** Type: double */
		CombatPlayerScore: FormControl<number | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,

		/** Type: double */
		Deaths: FormControl<number | null | undefined>,

		/** Type: double */
		DoubleKills: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GameId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Games: FormControl<number | null | undefined>,

		/** Type: double */
		GoldEarned: FormControl<number | null | undefined>,

		/** Type: double */
		GoldSpent: FormControl<number | null | undefined>,

		/** Type: double */
		InhibitorKills: FormControl<number | null | undefined>,

		/** Type: double */
		KillingSpree: FormControl<number | null | undefined>,

		/** Type: double */
		Kills: FormControl<number | null | undefined>,

		/** Type: double */
		LargestCriticalStrike: FormControl<number | null | undefined>,

		/** Type: double */
		LargestKillingSpree: FormControl<number | null | undefined>,

		/** Type: double */
		LargestMultiKill: FormControl<number | null | undefined>,

		/** Type: double */
		LongestTimeSpentLiving: FormControl<number | null | undefined>,

		/** Type: double */
		MagicDamageDealt: FormControl<number | null | undefined>,

		/** Type: double */
		MagicDamageDealtToChampions: FormControl<number | null | undefined>,

		/** Type: double */
		MagicDamageTaken: FormControl<number | null | undefined>,
		MatchName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Matches: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: double */
		NeutralMinionsKIlled: FormControl<number | null | undefined>,

		/** Type: double */
		NeutralMinionsKIlledTeamJungle: FormControl<number | null | undefined>,

		/** Type: double */
		NeutralMinionsKilledEnemyJungle: FormControl<number | null | undefined>,

		/** Type: double */
		ObjectivePlayerScore: FormControl<number | null | undefined>,
		Opponent: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentId: FormControl<number | null | undefined>,

		/** Type: double */
		PentaKills: FormControl<number | null | undefined>,

		/** Type: double */
		PhysicalDamageDealt: FormControl<number | null | undefined>,

		/** Type: double */
		PhysicalDamageDealtToChampions: FormControl<number | null | undefined>,

		/** Type: double */
		PhysicalDamageTaken: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerId: FormControl<number | null | undefined>,

		/** Type: double */
		QuadraKills: FormControl<number | null | undefined>,

		/** Type: double */
		SightWardsBoughtInGame: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamId: FormControl<number | null | undefined>,

		/** Type: double */
		TenKillsOrAssists: FormControl<number | null | undefined>,

		/** Type: double */
		TotalDamageDealt: FormControl<number | null | undefined>,

		/** Type: double */
		TotalDamageDealtToChampions: FormControl<number | null | undefined>,

		/** Type: double */
		TotalDamageTaken: FormControl<number | null | undefined>,

		/** Type: double */
		TotalHeal: FormControl<number | null | undefined>,

		/** Type: double */
		TotalMinionsKilled: FormControl<number | null | undefined>,

		/** Type: double */
		TotalPlayerScore: FormControl<number | null | undefined>,

		/** Type: double */
		TotalTimeCrowdControlDealt: FormControl<number | null | undefined>,

		/** Type: double */
		TotalUnitsHealed: FormControl<number | null | undefined>,

		/** Type: double */
		TripleKills: FormControl<number | null | undefined>,

		/** Type: double */
		TrueDamageDealt: FormControl<number | null | undefined>,

		/** Type: double */
		TrueDamageDealtToChampions: FormControl<number | null | undefined>,

		/** Type: double */
		TrueDamageTaken: FormControl<number | null | undefined>,

		/** Type: double */
		TurretKills: FormControl<number | null | undefined>,

		/** Type: double */
		UnrealKills: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,

		/** Type: double */
		VisionWardsBoughtInGame: FormControl<number | null | undefined>,

		/** Type: double */
		WardsKilled: FormControl<number | null | undefined>,

		/** Type: double */
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
			GameId: new FormControl<number | null | undefined>(undefined),
			Games: new FormControl<number | null | undefined>(undefined),
			GoldEarned: new FormControl<number | null | undefined>(undefined),
			GoldSpent: new FormControl<number | null | undefined>(undefined),
			InhibitorKills: new FormControl<number | null | undefined>(undefined),
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
		 * Projected Player Game Stats by Date
		 * Projected Player Game Stats by Date
		 * Get {format}/PlayerGameProjectionStatsByDate/{date}
		 * @param {ProjectedPlayerGameStatsByDateFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s).
		 * <br>Example: <code>2019-01-20</code>
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
		 */
		ProjectedPlayerGameStatsByPlayer(format: ProjectedPlayerGameStatsByDateFormat, date: string, playerid: string): Observable<Array<PlayerGameProjection>> {
			return this.http.get<Array<PlayerGameProjection>>(this.baseUri + format + '/PlayerGameProjectionStatsByPlayer/' + (date == null ? '' : encodeURIComponent(date)) + '/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}
	}

	export enum ProjectedPlayerGameStatsByDateFormat { xml = 'xml', json = 'json' }

}

