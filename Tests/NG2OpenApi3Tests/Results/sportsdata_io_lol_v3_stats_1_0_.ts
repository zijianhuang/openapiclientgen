import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Area {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AreaId?: number | null;
		CountryCode?: string | null;
		Name?: string | null;
	}
	export interface AreaFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AreaId: FormControl<number | null | undefined>,
		CountryCode: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateAreaFormGroup() {
		return new FormGroup<AreaFormProperties>({
			AreaId: new FormControl<number | null | undefined>(undefined),
			CountryCode: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BoxScore {
		Game?: Game;
		Matches?: Array<Match>;
		PlayerGames?: Array<PlayerGame>;
		TeamGames?: Array<TeamGame>;
	}
	export interface BoxScoreFormProperties {
	}
	export function CreateBoxScoreFormGroup() {
		return new FormGroup<BoxScoreFormProperties>({
		});

	}

	export interface Match {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GameId?: number | null;
		GameVersion?: string | null;
		MapName?: string | null;
		MatchBans?: Array<MatchBan>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Number?: number | null;
		PlayerMatches?: Array<PlayerMatch>;
		TeamMatches?: Array<TeamMatch>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		WinningTeamId?: number | null;
	}
	export interface MatchFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GameId: FormControl<number | null | undefined>,
		GameVersion: FormControl<string | null | undefined>,
		MapName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Number: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		WinningTeamId: FormControl<number | null | undefined>,
	}
	export function CreateMatchFormGroup() {
		return new FormGroup<MatchFormProperties>({
			GameId: new FormControl<number | null | undefined>(undefined),
			GameVersion: new FormControl<string | null | undefined>(undefined),
			MapName: new FormControl<string | null | undefined>(undefined),
			Number: new FormControl<number | null | undefined>(undefined),
			WinningTeamId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface MatchBan {
		Champion?: ChampionInfo;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ChampionId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		MatchId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamId?: number | null;
	}
	export interface MatchBanFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ChampionId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		MatchId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamId: FormControl<number | null | undefined>,
	}
	export function CreateMatchBanFormGroup() {
		return new FormGroup<MatchBanFormProperties>({
			ChampionId: new FormControl<number | null | undefined>(undefined),
			MatchId: new FormControl<number | null | undefined>(undefined),
			TeamId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PlayerMatch {

		/** Type: double */
		Assists?: number | null;
		Champion?: ChampionInfo;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ChampionId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ChampionLevel?: number | null;

		/** Type: double */
		CombatPlayerScore?: number | null;
		DateTime?: string | null;
		Day?: string | null;

		/** Type: double */
		Deaths?: number | null;

		/** Type: double */
		DoubleKills?: number | null;

		/** Type: double */
		FantasyPoints?: number | null;

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
		IsClosed?: boolean | null;
		Items?: Array<Item>;

		/** Type: double */
		KillingSpree?: number | null;

		/** Type: double */
		Kills?: number | null;
		Lane?: string | null;

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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		MatchId?: number | null;
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
		Position?: string | null;

		/** Type: double */
		QuadraKills?: number | null;
		Role?: string | null;

		/** Type: double */
		SightWardsBoughtInGame?: number | null;
		Spells?: Array<Spell>;
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
	export interface PlayerMatchFormProperties {

		/** Type: double */
		Assists: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ChampionId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ChampionLevel: FormControl<number | null | undefined>,

		/** Type: double */
		CombatPlayerScore: FormControl<number | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,

		/** Type: double */
		Deaths: FormControl<number | null | undefined>,

		/** Type: double */
		DoubleKills: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPoints: FormControl<number | null | undefined>,

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
		IsClosed: FormControl<boolean | null | undefined>,

		/** Type: double */
		KillingSpree: FormControl<number | null | undefined>,

		/** Type: double */
		Kills: FormControl<number | null | undefined>,
		Lane: FormControl<string | null | undefined>,

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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		MatchId: FormControl<number | null | undefined>,
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
		Position: FormControl<string | null | undefined>,

		/** Type: double */
		QuadraKills: FormControl<number | null | undefined>,
		Role: FormControl<string | null | undefined>,

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
	export function CreatePlayerMatchFormGroup() {
		return new FormGroup<PlayerMatchFormProperties>({
			Assists: new FormControl<number | null | undefined>(undefined),
			ChampionId: new FormControl<number | null | undefined>(undefined),
			ChampionLevel: new FormControl<number | null | undefined>(undefined),
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
			Lane: new FormControl<string | null | undefined>(undefined),
			LargestCriticalStrike: new FormControl<number | null | undefined>(undefined),
			LargestKillingSpree: new FormControl<number | null | undefined>(undefined),
			LargestMultiKill: new FormControl<number | null | undefined>(undefined),
			LongestTimeSpentLiving: new FormControl<number | null | undefined>(undefined),
			MagicDamageDealt: new FormControl<number | null | undefined>(undefined),
			MagicDamageDealtToChampions: new FormControl<number | null | undefined>(undefined),
			MagicDamageTaken: new FormControl<number | null | undefined>(undefined),
			MatchId: new FormControl<number | null | undefined>(undefined),
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
			Role: new FormControl<string | null | undefined>(undefined),
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

	export interface Item {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GoldBase?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GoldSell?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GoldTotal?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ItemId?: number | null;
		Name?: string | null;
	}
	export interface ItemFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GoldBase: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GoldSell: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GoldTotal: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ItemId: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateItemFormGroup() {
		return new FormGroup<ItemFormProperties>({
			GoldBase: new FormControl<number | null | undefined>(undefined),
			GoldSell: new FormControl<number | null | undefined>(undefined),
			GoldTotal: new FormControl<number | null | undefined>(undefined),
			ItemId: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Spell {
		Name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SpellId?: number | null;
	}
	export interface SpellFormProperties {
		Name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SpellId: FormControl<number | null | undefined>,
	}
	export function CreateSpellFormGroup() {
		return new FormGroup<SpellFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			SpellId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TeamMatch {

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

		/** Type: double */
		FantasyPoints?: number | null;

		/** Type: double */
		FirstBaron?: number | null;

		/** Type: double */
		FirstBlood?: number | null;

		/** Type: double */
		FirstDragon?: number | null;

		/** Type: double */
		FirstInhibitor?: number | null;

		/** Type: double */
		FirstRiftHerald?: number | null;

		/** Type: double */
		FirstTower?: number | null;

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
		IsClosed?: boolean | null;

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
		Position?: string | null;

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
	export interface TeamMatchFormProperties {

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

		/** Type: double */
		FantasyPoints: FormControl<number | null | undefined>,

		/** Type: double */
		FirstBaron: FormControl<number | null | undefined>,

		/** Type: double */
		FirstBlood: FormControl<number | null | undefined>,

		/** Type: double */
		FirstDragon: FormControl<number | null | undefined>,

		/** Type: double */
		FirstInhibitor: FormControl<number | null | undefined>,

		/** Type: double */
		FirstRiftHerald: FormControl<number | null | undefined>,

		/** Type: double */
		FirstTower: FormControl<number | null | undefined>,

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
		IsClosed: FormControl<boolean | null | undefined>,

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
		Position: FormControl<string | null | undefined>,

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
	export function CreateTeamMatchFormGroup() {
		return new FormGroup<TeamMatchFormProperties>({
			Assists: new FormControl<number | null | undefined>(undefined),
			CombatPlayerScore: new FormControl<number | null | undefined>(undefined),
			DateTime: new FormControl<string | null | undefined>(undefined),
			Day: new FormControl<string | null | undefined>(undefined),
			Deaths: new FormControl<number | null | undefined>(undefined),
			DoubleKills: new FormControl<number | null | undefined>(undefined),
			FantasyPoints: new FormControl<number | null | undefined>(undefined),
			FirstBaron: new FormControl<number | null | undefined>(undefined),
			FirstBlood: new FormControl<number | null | undefined>(undefined),
			FirstDragon: new FormControl<number | null | undefined>(undefined),
			FirstInhibitor: new FormControl<number | null | undefined>(undefined),
			FirstRiftHerald: new FormControl<number | null | undefined>(undefined),
			FirstTower: new FormControl<number | null | undefined>(undefined),
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

	export interface PlayerGame {

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

		/** Type: double */
		FantasyPoints?: number | null;

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
		IsClosed?: boolean | null;

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
		Position?: string | null;

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
	export interface PlayerGameFormProperties {

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

		/** Type: double */
		FantasyPoints: FormControl<number | null | undefined>,

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
		IsClosed: FormControl<boolean | null | undefined>,

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
		Position: FormControl<string | null | undefined>,

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
	export function CreatePlayerGameFormGroup() {
		return new FormGroup<PlayerGameFormProperties>({
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

	export interface TeamGame {

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

		/** Type: double */
		FantasyPoints?: number | null;

		/** Type: double */
		FirstBaron?: number | null;

		/** Type: double */
		FirstBlood?: number | null;

		/** Type: double */
		FirstDragon?: number | null;

		/** Type: double */
		FirstInhibitor?: number | null;

		/** Type: double */
		FirstRiftHerald?: number | null;

		/** Type: double */
		FirstTower?: number | null;

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
		IsClosed?: boolean | null;

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
		Position?: string | null;

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
	export interface TeamGameFormProperties {

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

		/** Type: double */
		FantasyPoints: FormControl<number | null | undefined>,

		/** Type: double */
		FirstBaron: FormControl<number | null | undefined>,

		/** Type: double */
		FirstBlood: FormControl<number | null | undefined>,

		/** Type: double */
		FirstDragon: FormControl<number | null | undefined>,

		/** Type: double */
		FirstInhibitor: FormControl<number | null | undefined>,

		/** Type: double */
		FirstRiftHerald: FormControl<number | null | undefined>,

		/** Type: double */
		FirstTower: FormControl<number | null | undefined>,

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
		IsClosed: FormControl<boolean | null | undefined>,

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
		Position: FormControl<string | null | undefined>,

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
	export function CreateTeamGameFormGroup() {
		return new FormGroup<TeamGameFormProperties>({
			Assists: new FormControl<number | null | undefined>(undefined),
			CombatPlayerScore: new FormControl<number | null | undefined>(undefined),
			DateTime: new FormControl<string | null | undefined>(undefined),
			Day: new FormControl<string | null | undefined>(undefined),
			Deaths: new FormControl<number | null | undefined>(undefined),
			DoubleKills: new FormControl<number | null | undefined>(undefined),
			FantasyPoints: new FormControl<number | null | undefined>(undefined),
			FirstBaron: new FormControl<number | null | undefined>(undefined),
			FirstBlood: new FormControl<number | null | undefined>(undefined),
			FirstDragon: new FormControl<number | null | undefined>(undefined),
			FirstInhibitor: new FormControl<number | null | undefined>(undefined),
			FirstRiftHerald: new FormControl<number | null | undefined>(undefined),
			FirstTower: new FormControl<number | null | undefined>(undefined),
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

	export interface Champion {

		/** Type: double */
		Armor?: number | null;

		/** Type: double */
		ArmorPerLevel?: number | null;

		/** Type: double */
		Attack?: number | null;

		/** Type: double */
		AttackDamage?: number | null;

		/** Type: double */
		AttackDamagePerLevel?: number | null;

		/** Type: double */
		AttackRange?: number | null;

		/** Type: double */
		AttackSpeedOffset?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ChampionId?: number | null;

		/** Type: double */
		Defense?: number | null;

		/** Type: double */
		Difficulty?: number | null;

		/** Type: double */
		Hp?: number | null;

		/** Type: double */
		HpRegen?: number | null;

		/** Type: double */
		HpRegenPerLevel?: number | null;

		/** Type: double */
		HpUpPerLevel?: number | null;

		/** Type: double */
		Magic?: number | null;

		/** Type: double */
		MoveSpeed?: number | null;

		/** Type: double */
		Mp?: number | null;

		/** Type: double */
		MpRegen?: number | null;

		/** Type: double */
		MpRegenPerLevel?: number | null;

		/** Type: double */
		MpUpPerLevel?: number | null;
		Name?: string | null;

		/** Type: double */
		SpellBlock?: number | null;

		/** Type: double */
		SpellBlockPerLevel?: number | null;
		Title?: string | null;
	}
	export interface ChampionFormProperties {

		/** Type: double */
		Armor: FormControl<number | null | undefined>,

		/** Type: double */
		ArmorPerLevel: FormControl<number | null | undefined>,

		/** Type: double */
		Attack: FormControl<number | null | undefined>,

		/** Type: double */
		AttackDamage: FormControl<number | null | undefined>,

		/** Type: double */
		AttackDamagePerLevel: FormControl<number | null | undefined>,

		/** Type: double */
		AttackRange: FormControl<number | null | undefined>,

		/** Type: double */
		AttackSpeedOffset: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ChampionId: FormControl<number | null | undefined>,

		/** Type: double */
		Defense: FormControl<number | null | undefined>,

		/** Type: double */
		Difficulty: FormControl<number | null | undefined>,

		/** Type: double */
		Hp: FormControl<number | null | undefined>,

		/** Type: double */
		HpRegen: FormControl<number | null | undefined>,

		/** Type: double */
		HpRegenPerLevel: FormControl<number | null | undefined>,

		/** Type: double */
		HpUpPerLevel: FormControl<number | null | undefined>,

		/** Type: double */
		Magic: FormControl<number | null | undefined>,

		/** Type: double */
		MoveSpeed: FormControl<number | null | undefined>,

		/** Type: double */
		Mp: FormControl<number | null | undefined>,

		/** Type: double */
		MpRegen: FormControl<number | null | undefined>,

		/** Type: double */
		MpRegenPerLevel: FormControl<number | null | undefined>,

		/** Type: double */
		MpUpPerLevel: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: double */
		SpellBlock: FormControl<number | null | undefined>,

		/** Type: double */
		SpellBlockPerLevel: FormControl<number | null | undefined>,
		Title: FormControl<string | null | undefined>,
	}
	export function CreateChampionFormGroup() {
		return new FormGroup<ChampionFormProperties>({
			Armor: new FormControl<number | null | undefined>(undefined),
			ArmorPerLevel: new FormControl<number | null | undefined>(undefined),
			Attack: new FormControl<number | null | undefined>(undefined),
			AttackDamage: new FormControl<number | null | undefined>(undefined),
			AttackDamagePerLevel: new FormControl<number | null | undefined>(undefined),
			AttackRange: new FormControl<number | null | undefined>(undefined),
			AttackSpeedOffset: new FormControl<number | null | undefined>(undefined),
			ChampionId: new FormControl<number | null | undefined>(undefined),
			Defense: new FormControl<number | null | undefined>(undefined),
			Difficulty: new FormControl<number | null | undefined>(undefined),
			Hp: new FormControl<number | null | undefined>(undefined),
			HpRegen: new FormControl<number | null | undefined>(undefined),
			HpRegenPerLevel: new FormControl<number | null | undefined>(undefined),
			HpUpPerLevel: new FormControl<number | null | undefined>(undefined),
			Magic: new FormControl<number | null | undefined>(undefined),
			MoveSpeed: new FormControl<number | null | undefined>(undefined),
			Mp: new FormControl<number | null | undefined>(undefined),
			MpRegen: new FormControl<number | null | undefined>(undefined),
			MpRegenPerLevel: new FormControl<number | null | undefined>(undefined),
			MpUpPerLevel: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			SpellBlock: new FormControl<number | null | undefined>(undefined),
			SpellBlockPerLevel: new FormControl<number | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ChampionInfo {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ChampionId?: number | null;
		Name?: string | null;
		Title?: string | null;
	}
	export interface ChampionInfoFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ChampionId: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Title: FormControl<string | null | undefined>,
	}
	export function CreateChampionInfoFormGroup() {
		return new FormGroup<ChampionInfoFormProperties>({
			ChampionId: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Competition {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AreaId?: number | null;
		AreaName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		CompetitionId?: number | null;
		Format?: string | null;
		Gender?: string | null;
		Name?: string | null;
		PlayerStatsCoverage?: boolean | null;
		Seasons?: Array<Season>;
		Type?: string | null;
	}
	export interface CompetitionFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AreaId: FormControl<number | null | undefined>,
		AreaName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		CompetitionId: FormControl<number | null | undefined>,
		Format: FormControl<string | null | undefined>,
		Gender: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PlayerStatsCoverage: FormControl<boolean | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateCompetitionFormGroup() {
		return new FormGroup<CompetitionFormProperties>({
			AreaId: new FormControl<number | null | undefined>(undefined),
			AreaName: new FormControl<string | null | undefined>(undefined),
			CompetitionId: new FormControl<number | null | undefined>(undefined),
			Format: new FormControl<string | null | undefined>(undefined),
			Gender: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PlayerStatsCoverage: new FormControl<boolean | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Season {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		CompetitionId?: number | null;
		CompetitionName?: string | null;
		CurrentSeason?: boolean | null;
		EndDate?: string | null;
		Name?: string | null;
		Rounds?: Array<Round>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season1?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonId?: number | null;
		StartDate?: string | null;
	}
	export interface SeasonFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		CompetitionId: FormControl<number | null | undefined>,
		CompetitionName: FormControl<string | null | undefined>,
		CurrentSeason: FormControl<boolean | null | undefined>,
		EndDate: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season1: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonId: FormControl<number | null | undefined>,
		StartDate: FormControl<string | null | undefined>,
	}
	export function CreateSeasonFormGroup() {
		return new FormGroup<SeasonFormProperties>({
			CompetitionId: new FormControl<number | null | undefined>(undefined),
			CompetitionName: new FormControl<string | null | undefined>(undefined),
			CurrentSeason: new FormControl<boolean | null | undefined>(undefined),
			EndDate: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Season1: new FormControl<number | null | undefined>(undefined),
			SeasonId: new FormControl<number | null | undefined>(undefined),
			StartDate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Round {
		CurrentRound?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		CurrentWeek?: number | null;
		EndDate?: string | null;
		Name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RoundId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType?: number | null;
		StartDate?: string | null;
		Type?: string | null;
	}
	export interface RoundFormProperties {
		CurrentRound: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		CurrentWeek: FormControl<number | null | undefined>,
		EndDate: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RoundId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType: FormControl<number | null | undefined>,
		StartDate: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateRoundFormGroup() {
		return new FormGroup<RoundFormProperties>({
			CurrentRound: new FormControl<boolean | null | undefined>(undefined),
			CurrentWeek: new FormControl<number | null | undefined>(undefined),
			EndDate: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			RoundId: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonId: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			StartDate: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CompetitionDetail {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AreaId?: number | null;
		AreaName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		CompetitionId?: number | null;
		CurrentSeason?: Season;
		Format?: string | null;
		Games?: Array<Game>;
		Gender?: string | null;
		Name?: string | null;
		PlayerStatsCoverage?: boolean | null;
		Seasons?: Array<Season>;
		Teams?: Array<TeamDetail>;
		Type?: string | null;
	}
	export interface CompetitionDetailFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AreaId: FormControl<number | null | undefined>,
		AreaName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		CompetitionId: FormControl<number | null | undefined>,
		Format: FormControl<string | null | undefined>,
		Gender: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PlayerStatsCoverage: FormControl<boolean | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateCompetitionDetailFormGroup() {
		return new FormGroup<CompetitionDetailFormProperties>({
			AreaId: new FormControl<number | null | undefined>(undefined),
			AreaName: new FormControl<string | null | undefined>(undefined),
			CompetitionId: new FormControl<number | null | undefined>(undefined),
			Format: new FormControl<string | null | undefined>(undefined),
			Gender: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PlayerStatsCoverage: new FormControl<boolean | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Game {
		BestOf?: string | null;
		DateTime?: string | null;
		Day?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DrawMoneyLine?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GameId?: number | null;
		Group?: string | null;
		IsClosed?: boolean | null;

		/** Type: double */
		PointSpread?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RoundId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType?: number | null;
		Status?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamAId?: number | null;
		TeamAKey?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamAMoneyLine?: number | null;
		TeamAName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamAPointSpreadPayout?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamAScore?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamBId?: number | null;
		TeamBKey?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamBMoneyLine?: number | null;
		TeamBName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamBPointSpreadPayout?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamBScore?: number | null;
		Updated?: string | null;
		UpdatedUtc?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		VenueId?: number | null;
		VenueType?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Week?: number | null;
		Winner?: string | null;
	}
	export interface GameFormProperties {
		BestOf: FormControl<string | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DrawMoneyLine: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GameId: FormControl<number | null | undefined>,
		Group: FormControl<string | null | undefined>,
		IsClosed: FormControl<boolean | null | undefined>,

		/** Type: double */
		PointSpread: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RoundId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamAId: FormControl<number | null | undefined>,
		TeamAKey: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamAMoneyLine: FormControl<number | null | undefined>,
		TeamAName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamAPointSpreadPayout: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamAScore: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamBId: FormControl<number | null | undefined>,
		TeamBKey: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamBMoneyLine: FormControl<number | null | undefined>,
		TeamBName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamBPointSpreadPayout: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamBScore: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
		UpdatedUtc: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		VenueId: FormControl<number | null | undefined>,
		VenueType: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

	export interface TeamDetail {
		Active?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AreaId?: number | null;
		AreaName?: string | null;
		Email?: string | null;
		Facebook?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Founded?: number | null;
		Gender?: string | null;
		Instagram?: string | null;
		Key?: string | null;
		Name?: string | null;
		Players?: Array<Player>;
		PrimaryColor?: string | null;
		QuaternaryColor?: string | null;
		SecondaryColor?: string | null;
		ShortName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamId?: number | null;
		TertiaryColor?: string | null;
		Twitter?: string | null;
		Type?: string | null;
		Website?: string | null;
		YouTube?: string | null;
	}
	export interface TeamDetailFormProperties {
		Active: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AreaId: FormControl<number | null | undefined>,
		AreaName: FormControl<string | null | undefined>,
		Email: FormControl<string | null | undefined>,
		Facebook: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Founded: FormControl<number | null | undefined>,
		Gender: FormControl<string | null | undefined>,
		Instagram: FormControl<string | null | undefined>,
		Key: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PrimaryColor: FormControl<string | null | undefined>,
		QuaternaryColor: FormControl<string | null | undefined>,
		SecondaryColor: FormControl<string | null | undefined>,
		ShortName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamId: FormControl<number | null | undefined>,
		TertiaryColor: FormControl<string | null | undefined>,
		Twitter: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Website: FormControl<string | null | undefined>,
		YouTube: FormControl<string | null | undefined>,
	}
	export function CreateTeamDetailFormGroup() {
		return new FormGroup<TeamDetailFormProperties>({
			Active: new FormControl<boolean | null | undefined>(undefined),
			AreaId: new FormControl<number | null | undefined>(undefined),
			AreaName: new FormControl<string | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			Facebook: new FormControl<string | null | undefined>(undefined),
			Founded: new FormControl<number | null | undefined>(undefined),
			Gender: new FormControl<string | null | undefined>(undefined),
			Instagram: new FormControl<string | null | undefined>(undefined),
			Key: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PrimaryColor: new FormControl<string | null | undefined>(undefined),
			QuaternaryColor: new FormControl<string | null | undefined>(undefined),
			SecondaryColor: new FormControl<string | null | undefined>(undefined),
			ShortName: new FormControl<string | null | undefined>(undefined),
			TeamId: new FormControl<number | null | undefined>(undefined),
			TertiaryColor: new FormControl<string | null | undefined>(undefined),
			Twitter: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			Website: new FormControl<string | null | undefined>(undefined),
			YouTube: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Player {
		BirthCity?: string | null;
		BirthCountry?: string | null;
		BirthDate?: string | null;
		CommonName?: string | null;
		FirstName?: string | null;
		Gender?: string | null;
		LastName?: string | null;
		MatchName?: string | null;
		Nationality?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerId?: number | null;
		Position?: string | null;
		Updated?: string | null;
	}
	export interface PlayerFormProperties {
		BirthCity: FormControl<string | null | undefined>,
		BirthCountry: FormControl<string | null | undefined>,
		BirthDate: FormControl<string | null | undefined>,
		CommonName: FormControl<string | null | undefined>,
		FirstName: FormControl<string | null | undefined>,
		Gender: FormControl<string | null | undefined>,
		LastName: FormControl<string | null | undefined>,
		MatchName: FormControl<string | null | undefined>,
		Nationality: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerId: FormControl<number | null | undefined>,
		Position: FormControl<string | null | undefined>,
		Updated: FormControl<string | null | undefined>,
	}
	export function CreatePlayerFormGroup() {
		return new FormGroup<PlayerFormProperties>({
			BirthCity: new FormControl<string | null | undefined>(undefined),
			BirthCountry: new FormControl<string | null | undefined>(undefined),
			BirthDate: new FormControl<string | null | undefined>(undefined),
			CommonName: new FormControl<string | null | undefined>(undefined),
			FirstName: new FormControl<string | null | undefined>(undefined),
			Gender: new FormControl<string | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
			MatchName: new FormControl<string | null | undefined>(undefined),
			Nationality: new FormControl<string | null | undefined>(undefined),
			PlayerId: new FormControl<number | null | undefined>(undefined),
			Position: new FormControl<string | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Membership {
		Active?: boolean | null;
		EndDate?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		MembershipId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerId?: number | null;
		PlayerName?: string | null;
		StartDate?: string | null;
		TeamArea?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamId?: number | null;
		TeamName?: string | null;
		Updated?: string | null;
	}
	export interface MembershipFormProperties {
		Active: FormControl<boolean | null | undefined>,
		EndDate: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		MembershipId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerId: FormControl<number | null | undefined>,
		PlayerName: FormControl<string | null | undefined>,
		StartDate: FormControl<string | null | undefined>,
		TeamArea: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamId: FormControl<number | null | undefined>,
		TeamName: FormControl<string | null | undefined>,
		Updated: FormControl<string | null | undefined>,
	}
	export function CreateMembershipFormGroup() {
		return new FormGroup<MembershipFormProperties>({
			Active: new FormControl<boolean | null | undefined>(undefined),
			EndDate: new FormControl<string | null | undefined>(undefined),
			MembershipId: new FormControl<number | null | undefined>(undefined),
			PlayerId: new FormControl<number | null | undefined>(undefined),
			PlayerName: new FormControl<string | null | undefined>(undefined),
			StartDate: new FormControl<string | null | undefined>(undefined),
			TeamArea: new FormControl<string | null | undefined>(undefined),
			TeamId: new FormControl<number | null | undefined>(undefined),
			TeamName: new FormControl<string | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SeasonTeam {
		Active?: boolean | null;
		Gender?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonTeamId?: number | null;
		Team?: Team;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamId?: number | null;
		TeamName?: string | null;
		Type?: string | null;
	}
	export interface SeasonTeamFormProperties {
		Active: FormControl<boolean | null | undefined>,
		Gender: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonTeamId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamId: FormControl<number | null | undefined>,
		TeamName: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateSeasonTeamFormGroup() {
		return new FormGroup<SeasonTeamFormProperties>({
			Active: new FormControl<boolean | null | undefined>(undefined),
			Gender: new FormControl<string | null | undefined>(undefined),
			SeasonId: new FormControl<number | null | undefined>(undefined),
			SeasonTeamId: new FormControl<number | null | undefined>(undefined),
			TeamId: new FormControl<number | null | undefined>(undefined),
			TeamName: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Standing {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Games?: number | null;
		Group?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Losses?: number | null;
		Name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Order?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Points?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RoundId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreAgainst?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreDifference?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreFor?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StandingId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Wins?: number | null;
	}
	export interface StandingFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Games: FormControl<number | null | undefined>,
		Group: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Losses: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Order: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Points: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RoundId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreAgainst: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreDifference: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreFor: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StandingId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Wins: FormControl<number | null | undefined>,
	}
	export function CreateStandingFormGroup() {
		return new FormGroup<StandingFormProperties>({
			Games: new FormControl<number | null | undefined>(undefined),
			Group: new FormControl<string | null | undefined>(undefined),
			Losses: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Order: new FormControl<number | null | undefined>(undefined),
			Points: new FormControl<number | null | undefined>(undefined),
			RoundId: new FormControl<number | null | undefined>(undefined),
			ScoreAgainst: new FormControl<number | null | undefined>(undefined),
			ScoreDifference: new FormControl<number | null | undefined>(undefined),
			ScoreFor: new FormControl<number | null | undefined>(undefined),
			StandingId: new FormControl<number | null | undefined>(undefined),
			TeamId: new FormControl<number | null | undefined>(undefined),
			Wins: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Team {
		Active?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AreaId?: number | null;
		AreaName?: string | null;
		Email?: string | null;
		Facebook?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Founded?: number | null;
		Gender?: string | null;
		Instagram?: string | null;
		Key?: string | null;
		Name?: string | null;
		PrimaryColor?: string | null;
		QuaternaryColor?: string | null;
		SecondaryColor?: string | null;
		ShortName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamId?: number | null;
		TertiaryColor?: string | null;
		Twitter?: string | null;
		Type?: string | null;
		Website?: string | null;
		YouTube?: string | null;
	}
	export interface TeamFormProperties {
		Active: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AreaId: FormControl<number | null | undefined>,
		AreaName: FormControl<string | null | undefined>,
		Email: FormControl<string | null | undefined>,
		Facebook: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Founded: FormControl<number | null | undefined>,
		Gender: FormControl<string | null | undefined>,
		Instagram: FormControl<string | null | undefined>,
		Key: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PrimaryColor: FormControl<string | null | undefined>,
		QuaternaryColor: FormControl<string | null | undefined>,
		SecondaryColor: FormControl<string | null | undefined>,
		ShortName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamId: FormControl<number | null | undefined>,
		TertiaryColor: FormControl<string | null | undefined>,
		Twitter: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Website: FormControl<string | null | undefined>,
		YouTube: FormControl<string | null | undefined>,
	}
	export function CreateTeamFormGroup() {
		return new FormGroup<TeamFormProperties>({
			Active: new FormControl<boolean | null | undefined>(undefined),
			AreaId: new FormControl<number | null | undefined>(undefined),
			AreaName: new FormControl<string | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			Facebook: new FormControl<string | null | undefined>(undefined),
			Founded: new FormControl<number | null | undefined>(undefined),
			Gender: new FormControl<string | null | undefined>(undefined),
			Instagram: new FormControl<string | null | undefined>(undefined),
			Key: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PrimaryColor: new FormControl<string | null | undefined>(undefined),
			QuaternaryColor: new FormControl<string | null | undefined>(undefined),
			SecondaryColor: new FormControl<string | null | undefined>(undefined),
			ShortName: new FormControl<string | null | undefined>(undefined),
			TeamId: new FormControl<number | null | undefined>(undefined),
			TertiaryColor: new FormControl<string | null | undefined>(undefined),
			Twitter: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			Website: new FormControl<string | null | undefined>(undefined),
			YouTube: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Venue {
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
		Nickname1?: string | null;
		Nickname2?: string | null;
		Open?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Opened?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		VenueId?: number | null;
		Zip?: string | null;
	}
	export interface VenueFormProperties {
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
		Nickname1: FormControl<string | null | undefined>,
		Nickname2: FormControl<string | null | undefined>,
		Open: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Opened: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		VenueId: FormControl<number | null | undefined>,
		Zip: FormControl<string | null | undefined>,
	}
	export function CreateVenueFormGroup() {
		return new FormGroup<VenueFormProperties>({
			Address: new FormControl<string | null | undefined>(undefined),
			Capacity: new FormControl<number | null | undefined>(undefined),
			City: new FormControl<string | null | undefined>(undefined),
			Country: new FormControl<string | null | undefined>(undefined),
			GeoLat: new FormControl<number | null | undefined>(undefined),
			GeoLong: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Nickname1: new FormControl<string | null | undefined>(undefined),
			Nickname2: new FormControl<string | null | undefined>(undefined),
			Open: new FormControl<boolean | null | undefined>(undefined),
			Opened: new FormControl<number | null | undefined>(undefined),
			VenueId: new FormControl<number | null | undefined>(undefined),
			Zip: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Memberships (Active)
		 * Memberships (Active)
		 * Get {format}/ActiveMemberships
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 */
		MembershipsActive(format: MembershipsActiveFormat): Observable<Array<Membership>> {
			return this.http.get<Array<Membership>>(this.baseUri + format + '/ActiveMemberships', {});
		}

		/**
		 * Areas (Countries)
		 * Areas (Countries)
		 * Get {format}/Areas
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 */
		AreasCountries(format: MembershipsActiveFormat): Observable<Array<Area>> {
			return this.http.get<Array<Area>>(this.baseUri + format + '/Areas', {});
		}

		/**
		 * Box Score
		 * Games by Date
		 * Get {format}/BoxScore/{gameid}
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} gameid Unique FantasyData Game ID. 
		 * Example:<code>100002649</code>.
		 */
		BoxScore(format: MembershipsActiveFormat, gameid: string): Observable<Array<BoxScore>> {
			return this.http.get<Array<BoxScore>>(this.baseUri + format + '/BoxScore/' + (gameid == null ? '' : encodeURIComponent(gameid)) + '', {});
		}

		/**
		 * Box Scores by Date
		 * Games by Date
		 * Get {format}/BoxScores/{date}
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s).
		 * <br>Examples: <code>2019-01-20</code>
		 */
		BoxScoresByDate(format: MembershipsActiveFormat, date: string): Observable<Array<BoxScore>> {
			return this.http.get<Array<BoxScore>>(this.baseUri + format + '/BoxScores/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * Champions
		 * Areas (Countries)
		 * Get {format}/Champions
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 */
		Champions(format: MembershipsActiveFormat): Observable<Array<Champion>> {
			return this.http.get<Array<Champion>>(this.baseUri + format + '/Champions', {});
		}

		/**
		 * Competition Fixtures (League Details)
		 * Competition Fixtures (League Details)
		 * Get {format}/CompetitionDetails/{competitionid}
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} competitionid A LoL competition/league unique CompetitionId. Possible values include: <code>100000019</code>, etc.
		 */
		CompetitionFixturesLeagueDetails(format: MembershipsActiveFormat, competitionid: string): Observable<CompetitionDetail> {
			return this.http.get<CompetitionDetail>(this.baseUri + format + '/CompetitionDetails/' + (competitionid == null ? '' : encodeURIComponent(competitionid)) + '', {});
		}

		/**
		 * Competitions (Leagues)
		 * Competitions (Leagues)
		 * Get {format}/Competitions
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 */
		CompetitionsLeagues(format: MembershipsActiveFormat): Observable<Array<Competition>> {
			return this.http.get<Array<Competition>>(this.baseUri + format + '/Competitions', {});
		}

		/**
		 * Games by Date
		 * Games by Date
		 * Get {format}/GamesByDate/{date}
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s).
		 * <br>Examples: <code>2019-01-20</code>
		 */
		GamesByDate(format: MembershipsActiveFormat, date: string): Observable<Array<Game>> {
			return this.http.get<Array<Game>>(this.baseUri + format + '/GamesByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * Memberships (Historical)
		 * Memberships (Historical)
		 * Get {format}/HistoricalMemberships
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 */
		MembershipsHistorical(format: MembershipsActiveFormat): Observable<Array<Membership>> {
			return this.http.get<Array<Membership>>(this.baseUri + format + '/HistoricalMemberships', {});
		}

		/**
		 * Memberships by Team (Historical)
		 * Memberships by Team (Historical)
		 * Get {format}/HistoricalMembershipsByTeam/{teamid}
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} teamid Unique FantasyData Team ID. 
		 * Example:<code>100000165</code>.
		 */
		MembershipsByTeamHistorical(format: MembershipsActiveFormat, teamid: string): Observable<Array<Membership>> {
			return this.http.get<Array<Membership>>(this.baseUri + format + '/HistoricalMembershipsByTeam/' + (teamid == null ? '' : encodeURIComponent(teamid)) + '', {});
		}

		/**
		 * Items
		 * Competitions (Leagues)
		 * Get {format}/Items
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 */
		Items(format: MembershipsActiveFormat): Observable<Array<Item>> {
			return this.http.get<Array<Item>>(this.baseUri + format + '/Items', {});
		}

		/**
		 * Memberships by Team (Active)
		 * Memberships by Team (Active)
		 * Get {format}/MembershipsByTeam/{teamid}
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} teamid Unique FantasyData Team ID. 
		 * Example:<code>100000165</code>.
		 */
		MembershipsByTeamActive(format: MembershipsActiveFormat, teamid: string): Observable<Array<Membership>> {
			return this.http.get<Array<Membership>>(this.baseUri + format + '/MembershipsByTeam/' + (teamid == null ? '' : encodeURIComponent(teamid)) + '', {});
		}

		/**
		 * Player
		 * Player
		 * Get {format}/Player/{playerid}
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} playerid Unique FantasyData Player ID.
		 * Example:<code>100001500</code>.
		 */
		Player(format: MembershipsActiveFormat, playerid: string): Observable<Player> {
			return this.http.get<Player>(this.baseUri + format + '/Player/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}

		/**
		 * Players
		 * Players
		 * Get {format}/Players
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 */
		Players(format: MembershipsActiveFormat): Observable<Array<Player>> {
			return this.http.get<Array<Player>>(this.baseUri + format + '/Players', {});
		}

		/**
		 * Players by Team
		 * Players by Team
		 * Get {format}/PlayersByTeam/{teamid}
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} teamid Unique FantasyData Team ID. 
		 * Example:<code>100000165</code>.
		 */
		PlayersByTeam(format: MembershipsActiveFormat, teamid: string): Observable<Array<Player>> {
			return this.http.get<Array<Player>>(this.baseUri + format + '/PlayersByTeam/' + (teamid == null ? '' : encodeURIComponent(teamid)) + '', {});
		}

		/**
		 * Schedule
		 * Schedule
		 * Get {format}/Schedule/{roundid}
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} roundid Unique FantasyData Round ID. RoundIDs can be found in the Competitions and Competition Details endpoints. 
		 * Example: <code>100000278</code>, etc
		 */
		Schedule(format: MembershipsActiveFormat, roundid: string): Observable<Array<Game>> {
			return this.http.get<Array<Game>>(this.baseUri + format + '/Schedule/' + (roundid == null ? '' : encodeURIComponent(roundid)) + '', {});
		}

		/**
		 * Season Teams
		 * Season Teams
		 * Get {format}/SeasonTeams/{seasonid}
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} seasonid Unique FantasyData Season ID. SeasonIDs can be found in the Competitions and Competition Details endpoints. 
		 * Examples: <code>100000057</code>, etc
		 */
		SeasonTeams(format: MembershipsActiveFormat, seasonid: string): Observable<Array<SeasonTeam>> {
			return this.http.get<Array<SeasonTeam>>(this.baseUri + format + '/SeasonTeams/' + (seasonid == null ? '' : encodeURIComponent(seasonid)) + '', {});
		}

		/**
		 * Spells
		 * Areas (Countries)
		 * Get {format}/Spells
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 */
		Spells(format: MembershipsActiveFormat): Observable<Array<Spell>> {
			return this.http.get<Array<Spell>>(this.baseUri + format + '/Spells', {});
		}

		/**
		 * Standings
		 * Standings
		 * Get {format}/Standings/{roundid}
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} roundid Unique FantasyData Round ID. RoundIDs can be found in the Competitions and Competition Details endpoints. 
		 * Example: <code>100000278</code>, etc
		 */
		Standings(format: MembershipsActiveFormat, roundid: string): Observable<Array<Standing>> {
			return this.http.get<Array<Standing>>(this.baseUri + format + '/Standings/' + (roundid == null ? '' : encodeURIComponent(roundid)) + '', {});
		}

		/**
		 * Teams
		 * Teams
		 * Get {format}/Teams
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 */
		Teams(format: MembershipsActiveFormat): Observable<Array<Team>> {
			return this.http.get<Array<Team>>(this.baseUri + format + '/Teams', {});
		}

		/**
		 * Venues
		 * Venues
		 * Get {format}/Venues
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 */
		Venues(format: MembershipsActiveFormat): Observable<Array<Venue>> {
			return this.http.get<Array<Venue>>(this.baseUri + format + '/Venues', {});
		}
	}

	export enum MembershipsActiveFormat { xml = 'xml', json = 'json' }

}

