import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Area {
		AreaId?: number | null;
		CountryCode?: string | null;
		Name?: string | null;
	}
	export interface AreaFormProperties {
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
		GameId?: number | null;
		GameVersion?: string | null;
		MapName?: string | null;
		MatchBans?: Array<MatchBan>;
		Number?: number | null;
		PlayerMatches?: Array<PlayerMatch>;
		TeamMatches?: Array<TeamMatch>;
		WinningTeamId?: number | null;
	}
	export interface MatchFormProperties {
		GameId: FormControl<number | null | undefined>,
		GameVersion: FormControl<string | null | undefined>,
		MapName: FormControl<string | null | undefined>,
		Number: FormControl<number | null | undefined>,
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
		ChampionId?: number | null;
		MatchId?: number | null;
		TeamId?: number | null;
	}
	export interface MatchBanFormProperties {
		ChampionId: FormControl<number | null | undefined>,
		MatchId: FormControl<number | null | undefined>,
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
		Assists?: number | null;
		Champion?: ChampionInfo;
		ChampionId?: number | null;
		ChampionLevel?: number | null;
		CombatPlayerScore?: number | null;
		DateTime?: string | null;
		Day?: string | null;
		Deaths?: number | null;
		DoubleKills?: number | null;
		GameId?: number | null;
		Games?: number | null;
		GoldEarned?: number | null;
		GoldSpent?: number | null;
		InhibitorKills?: number | null;
		Items?: Array<Item>;
		KillingSpree?: number | null;
		Kills?: number | null;
		LargestCriticalStrike?: number | null;
		LargestKillingSpree?: number | null;
		LargestMultiKill?: number | null;
		LongestTimeSpentLiving?: number | null;
		MagicDamageDealt?: number | null;
		MagicDamageDealtToChampions?: number | null;
		MagicDamageTaken?: number | null;
		MatchId?: number | null;
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
		Spells?: Array<Spell>;
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
	export interface PlayerMatchFormProperties {
		Assists: FormControl<number | null | undefined>,
		ChampionId: FormControl<number | null | undefined>,
		ChampionLevel: FormControl<number | null | undefined>,
		CombatPlayerScore: FormControl<number | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,
		Deaths: FormControl<number | null | undefined>,
		DoubleKills: FormControl<number | null | undefined>,
		GameId: FormControl<number | null | undefined>,
		Games: FormControl<number | null | undefined>,
		GoldEarned: FormControl<number | null | undefined>,
		GoldSpent: FormControl<number | null | undefined>,
		InhibitorKills: FormControl<number | null | undefined>,
		KillingSpree: FormControl<number | null | undefined>,
		Kills: FormControl<number | null | undefined>,
		LargestCriticalStrike: FormControl<number | null | undefined>,
		LargestKillingSpree: FormControl<number | null | undefined>,
		LargestMultiKill: FormControl<number | null | undefined>,
		LongestTimeSpentLiving: FormControl<number | null | undefined>,
		MagicDamageDealt: FormControl<number | null | undefined>,
		MagicDamageDealtToChampions: FormControl<number | null | undefined>,
		MagicDamageTaken: FormControl<number | null | undefined>,
		MatchId: FormControl<number | null | undefined>,
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
		GoldBase?: number | null;
		GoldSell?: number | null;
		GoldTotal?: number | null;
		ItemId?: number | null;
		Name?: string | null;
	}
	export interface ItemFormProperties {
		GoldBase: FormControl<number | null | undefined>,
		GoldSell: FormControl<number | null | undefined>,
		GoldTotal: FormControl<number | null | undefined>,
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
		SpellId?: number | null;
	}
	export interface SpellFormProperties {
		Name: FormControl<string | null | undefined>,
		SpellId: FormControl<number | null | undefined>,
	}
	export function CreateSpellFormGroup() {
		return new FormGroup<SpellFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			SpellId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TeamMatch {
		Assists?: number | null;
		CombatPlayerScore?: number | null;
		DateTime?: string | null;
		Day?: string | null;
		Deaths?: number | null;
		DoubleKills?: number | null;
		FirstBaron?: number | null;
		FirstBlood?: number | null;
		FirstDragon?: number | null;
		FirstInhibitor?: number | null;
		FirstRiftHerald?: number | null;
		FirstTower?: number | null;
		GameId?: number | null;
		Games?: number | null;
		GoldEarned?: number | null;
		GoldSpent?: number | null;
		InhibitorKills?: number | null;
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
	export interface TeamMatchFormProperties {
		Assists: FormControl<number | null | undefined>,
		CombatPlayerScore: FormControl<number | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,
		Deaths: FormControl<number | null | undefined>,
		DoubleKills: FormControl<number | null | undefined>,
		FirstBaron: FormControl<number | null | undefined>,
		FirstBlood: FormControl<number | null | undefined>,
		FirstDragon: FormControl<number | null | undefined>,
		FirstInhibitor: FormControl<number | null | undefined>,
		FirstRiftHerald: FormControl<number | null | undefined>,
		FirstTower: FormControl<number | null | undefined>,
		GameId: FormControl<number | null | undefined>,
		Games: FormControl<number | null | undefined>,
		GoldEarned: FormControl<number | null | undefined>,
		GoldSpent: FormControl<number | null | undefined>,
		InhibitorKills: FormControl<number | null | undefined>,
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
	export function CreateTeamMatchFormGroup() {
		return new FormGroup<TeamMatchFormProperties>({
			Assists: new FormControl<number | null | undefined>(undefined),
			CombatPlayerScore: new FormControl<number | null | undefined>(undefined),
			DateTime: new FormControl<string | null | undefined>(undefined),
			Day: new FormControl<string | null | undefined>(undefined),
			Deaths: new FormControl<number | null | undefined>(undefined),
			DoubleKills: new FormControl<number | null | undefined>(undefined),
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

	export interface PlayerGame {
		Assists?: number | null;
		CombatPlayerScore?: number | null;
		DateTime?: string | null;
		Day?: string | null;
		Deaths?: number | null;
		DoubleKills?: number | null;
		GameId?: number | null;
		Games?: number | null;
		GoldEarned?: number | null;
		GoldSpent?: number | null;
		InhibitorKills?: number | null;
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
	export interface PlayerGameFormProperties {
		Assists: FormControl<number | null | undefined>,
		CombatPlayerScore: FormControl<number | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,
		Deaths: FormControl<number | null | undefined>,
		DoubleKills: FormControl<number | null | undefined>,
		GameId: FormControl<number | null | undefined>,
		Games: FormControl<number | null | undefined>,
		GoldEarned: FormControl<number | null | undefined>,
		GoldSpent: FormControl<number | null | undefined>,
		InhibitorKills: FormControl<number | null | undefined>,
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
	export function CreatePlayerGameFormGroup() {
		return new FormGroup<PlayerGameFormProperties>({
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

	export interface TeamGame {
		Assists?: number | null;
		CombatPlayerScore?: number | null;
		DateTime?: string | null;
		Day?: string | null;
		Deaths?: number | null;
		DoubleKills?: number | null;
		FirstBaron?: number | null;
		FirstBlood?: number | null;
		FirstDragon?: number | null;
		FirstInhibitor?: number | null;
		FirstRiftHerald?: number | null;
		FirstTower?: number | null;
		GameId?: number | null;
		Games?: number | null;
		GoldEarned?: number | null;
		GoldSpent?: number | null;
		InhibitorKills?: number | null;
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
	export interface TeamGameFormProperties {
		Assists: FormControl<number | null | undefined>,
		CombatPlayerScore: FormControl<number | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,
		Deaths: FormControl<number | null | undefined>,
		DoubleKills: FormControl<number | null | undefined>,
		FirstBaron: FormControl<number | null | undefined>,
		FirstBlood: FormControl<number | null | undefined>,
		FirstDragon: FormControl<number | null | undefined>,
		FirstInhibitor: FormControl<number | null | undefined>,
		FirstRiftHerald: FormControl<number | null | undefined>,
		FirstTower: FormControl<number | null | undefined>,
		GameId: FormControl<number | null | undefined>,
		Games: FormControl<number | null | undefined>,
		GoldEarned: FormControl<number | null | undefined>,
		GoldSpent: FormControl<number | null | undefined>,
		InhibitorKills: FormControl<number | null | undefined>,
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
	export function CreateTeamGameFormGroup() {
		return new FormGroup<TeamGameFormProperties>({
			Assists: new FormControl<number | null | undefined>(undefined),
			CombatPlayerScore: new FormControl<number | null | undefined>(undefined),
			DateTime: new FormControl<string | null | undefined>(undefined),
			Day: new FormControl<string | null | undefined>(undefined),
			Deaths: new FormControl<number | null | undefined>(undefined),
			DoubleKills: new FormControl<number | null | undefined>(undefined),
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

	export interface Champion {
		Armor?: number | null;
		ArmorPerLevel?: number | null;
		Attack?: number | null;
		AttackDamage?: number | null;
		AttackDamagePerLevel?: number | null;
		AttackRange?: number | null;
		AttackSpeedOffset?: number | null;
		ChampionId?: number | null;
		Defense?: number | null;
		Difficulty?: number | null;
		Hp?: number | null;
		HpRegen?: number | null;
		HpRegenPerLevel?: number | null;
		HpUpPerLevel?: number | null;
		Magic?: number | null;
		MoveSpeed?: number | null;
		Mp?: number | null;
		MpRegen?: number | null;
		MpRegenPerLevel?: number | null;
		MpUpPerLevel?: number | null;
		Name?: string | null;
		SpellBlock?: number | null;
		SpellBlockPerLevel?: number | null;
		Title?: string | null;
	}
	export interface ChampionFormProperties {
		Armor: FormControl<number | null | undefined>,
		ArmorPerLevel: FormControl<number | null | undefined>,
		Attack: FormControl<number | null | undefined>,
		AttackDamage: FormControl<number | null | undefined>,
		AttackDamagePerLevel: FormControl<number | null | undefined>,
		AttackRange: FormControl<number | null | undefined>,
		AttackSpeedOffset: FormControl<number | null | undefined>,
		ChampionId: FormControl<number | null | undefined>,
		Defense: FormControl<number | null | undefined>,
		Difficulty: FormControl<number | null | undefined>,
		Hp: FormControl<number | null | undefined>,
		HpRegen: FormControl<number | null | undefined>,
		HpRegenPerLevel: FormControl<number | null | undefined>,
		HpUpPerLevel: FormControl<number | null | undefined>,
		Magic: FormControl<number | null | undefined>,
		MoveSpeed: FormControl<number | null | undefined>,
		Mp: FormControl<number | null | undefined>,
		MpRegen: FormControl<number | null | undefined>,
		MpRegenPerLevel: FormControl<number | null | undefined>,
		MpUpPerLevel: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		SpellBlock: FormControl<number | null | undefined>,
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
		ChampionId?: number | null;
		Name?: string | null;
		Title?: string | null;
	}
	export interface ChampionInfoFormProperties {
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
		AreaId?: number | null;
		AreaName?: string | null;
		CompetitionId?: number | null;
		Format?: string | null;
		Gender?: string | null;
		Name?: string | null;
		Seasons?: Array<Season>;
		Type?: string | null;
	}
	export interface CompetitionFormProperties {
		AreaId: FormControl<number | null | undefined>,
		AreaName: FormControl<string | null | undefined>,
		CompetitionId: FormControl<number | null | undefined>,
		Format: FormControl<string | null | undefined>,
		Gender: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
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
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Season {
		CompetitionId?: number | null;
		CompetitionName?: string | null;
		CurrentSeason?: boolean | null;
		EndDate?: string | null;
		Name?: string | null;
		Rounds?: Array<Round>;
		Season1?: number | null;
		SeasonId?: number | null;
		StartDate?: string | null;
	}
	export interface SeasonFormProperties {
		CompetitionId: FormControl<number | null | undefined>,
		CompetitionName: FormControl<string | null | undefined>,
		CurrentSeason: FormControl<boolean | null | undefined>,
		EndDate: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Season1: FormControl<number | null | undefined>,
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
		CurrentWeek?: number | null;
		EndDate?: string | null;
		Name?: string | null;
		RoundId?: number | null;
		Season?: number | null;
		SeasonId?: number | null;
		SeasonType?: number | null;
		StartDate?: string | null;
		Type?: string | null;
	}
	export interface RoundFormProperties {
		CurrentRound: FormControl<boolean | null | undefined>,
		CurrentWeek: FormControl<number | null | undefined>,
		EndDate: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		RoundId: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonId: FormControl<number | null | undefined>,
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
		AreaId?: number | null;
		AreaName?: string | null;
		CompetitionId?: number | null;
		CurrentSeason?: Season;
		Format?: string | null;
		Games?: Array<Game>;
		Gender?: string | null;
		Name?: string | null;
		Seasons?: Array<Season>;
		Teams?: Array<TeamDetail>;
		Type?: string | null;
	}
	export interface CompetitionDetailFormProperties {
		AreaId: FormControl<number | null | undefined>,
		AreaName: FormControl<string | null | undefined>,
		CompetitionId: FormControl<number | null | undefined>,
		Format: FormControl<string | null | undefined>,
		Gender: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
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
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Game {
		BestOf?: string | null;
		DateTime?: string | null;
		Day?: string | null;
		DrawMoneyLine?: number | null;
		GameId?: number | null;
		Group?: string | null;
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
		AreaId?: number | null;
		AreaName?: string | null;
		Email?: string | null;
		Facebook?: string | null;
		Founded?: number | null;
		Gender?: string | null;
		Instagram?: string | null;
		Name?: string | null;
		Players?: Array<Player>;
		PrimaryColor?: string | null;
		QuaternaryColor?: string | null;
		SecondaryColor?: string | null;
		ShortName?: string | null;
		TeamId?: number | null;
		TertiaryColor?: string | null;
		Twitter?: string | null;
		Type?: string | null;
		Website?: string | null;
		YouTube?: string | null;
		'[Key]'?: string | null;
	}
	export interface TeamDetailFormProperties {
		Active: FormControl<boolean | null | undefined>,
		AreaId: FormControl<number | null | undefined>,
		AreaName: FormControl<string | null | undefined>,
		Email: FormControl<string | null | undefined>,
		Facebook: FormControl<string | null | undefined>,
		Founded: FormControl<number | null | undefined>,
		Gender: FormControl<string | null | undefined>,
		Instagram: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PrimaryColor: FormControl<string | null | undefined>,
		QuaternaryColor: FormControl<string | null | undefined>,
		SecondaryColor: FormControl<string | null | undefined>,
		ShortName: FormControl<string | null | undefined>,
		TeamId: FormControl<number | null | undefined>,
		TertiaryColor: FormControl<string | null | undefined>,
		Twitter: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Website: FormControl<string | null | undefined>,
		YouTube: FormControl<string | null | undefined>,
		'[Key]': FormControl<string | null | undefined>,
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
			'[Key]': new FormControl<string | null | undefined>(undefined),
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
		MembershipId?: number | null;
		PlayerId?: number | null;
		PlayerName?: string | null;
		StartDate?: string | null;
		TeamArea?: string | null;
		TeamId?: number | null;
		TeamName?: string | null;
		Updated?: string | null;
	}
	export interface MembershipFormProperties {
		Active: FormControl<boolean | null | undefined>,
		EndDate: FormControl<string | null | undefined>,
		MembershipId: FormControl<number | null | undefined>,
		PlayerId: FormControl<number | null | undefined>,
		PlayerName: FormControl<string | null | undefined>,
		StartDate: FormControl<string | null | undefined>,
		TeamArea: FormControl<string | null | undefined>,
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
		SeasonId?: number | null;
		SeasonTeamId?: number | null;
		Team?: Team;
		TeamId?: number | null;
		TeamName?: string | null;
		Type?: string | null;
	}
	export interface SeasonTeamFormProperties {
		Active: FormControl<boolean | null | undefined>,
		Gender: FormControl<string | null | undefined>,
		SeasonId: FormControl<number | null | undefined>,
		SeasonTeamId: FormControl<number | null | undefined>,
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
		Games?: number | null;
		Group?: string | null;
		Losses?: number | null;
		Name?: string | null;
		Points?: number | null;
		RoundId?: number | null;
		ScoreAgainst?: number | null;
		ScoreDifference?: number | null;
		ScoreFor?: number | null;
		StandingId?: number | null;
		TeamId?: number | null;
		Wins?: number | null;
		'[Order]'?: number | null;
	}
	export interface StandingFormProperties {
		Games: FormControl<number | null | undefined>,
		Group: FormControl<string | null | undefined>,
		Losses: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Points: FormControl<number | null | undefined>,
		RoundId: FormControl<number | null | undefined>,
		ScoreAgainst: FormControl<number | null | undefined>,
		ScoreDifference: FormControl<number | null | undefined>,
		ScoreFor: FormControl<number | null | undefined>,
		StandingId: FormControl<number | null | undefined>,
		TeamId: FormControl<number | null | undefined>,
		Wins: FormControl<number | null | undefined>,
		'[Order]': FormControl<number | null | undefined>,
	}
	export function CreateStandingFormGroup() {
		return new FormGroup<StandingFormProperties>({
			Games: new FormControl<number | null | undefined>(undefined),
			Group: new FormControl<string | null | undefined>(undefined),
			Losses: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Points: new FormControl<number | null | undefined>(undefined),
			RoundId: new FormControl<number | null | undefined>(undefined),
			ScoreAgainst: new FormControl<number | null | undefined>(undefined),
			ScoreDifference: new FormControl<number | null | undefined>(undefined),
			ScoreFor: new FormControl<number | null | undefined>(undefined),
			StandingId: new FormControl<number | null | undefined>(undefined),
			TeamId: new FormControl<number | null | undefined>(undefined),
			Wins: new FormControl<number | null | undefined>(undefined),
			'[Order]': new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Team {
		Active?: boolean | null;
		AreaId?: number | null;
		AreaName?: string | null;
		Email?: string | null;
		Facebook?: string | null;
		Founded?: number | null;
		Gender?: string | null;
		Instagram?: string | null;
		Name?: string | null;
		PrimaryColor?: string | null;
		QuaternaryColor?: string | null;
		SecondaryColor?: string | null;
		ShortName?: string | null;
		TeamId?: number | null;
		TertiaryColor?: string | null;
		Twitter?: string | null;
		Type?: string | null;
		Website?: string | null;
		YouTube?: string | null;
		'[Key]'?: string | null;
	}
	export interface TeamFormProperties {
		Active: FormControl<boolean | null | undefined>,
		AreaId: FormControl<number | null | undefined>,
		AreaName: FormControl<string | null | undefined>,
		Email: FormControl<string | null | undefined>,
		Facebook: FormControl<string | null | undefined>,
		Founded: FormControl<number | null | undefined>,
		Gender: FormControl<string | null | undefined>,
		Instagram: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PrimaryColor: FormControl<string | null | undefined>,
		QuaternaryColor: FormControl<string | null | undefined>,
		SecondaryColor: FormControl<string | null | undefined>,
		ShortName: FormControl<string | null | undefined>,
		TeamId: FormControl<number | null | undefined>,
		TertiaryColor: FormControl<string | null | undefined>,
		Twitter: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Website: FormControl<string | null | undefined>,
		YouTube: FormControl<string | null | undefined>,
		'[Key]': FormControl<string | null | undefined>,
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
			'[Key]': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Venue {
		Address?: string | null;
		Capacity?: number | null;
		City?: string | null;
		Country?: string | null;
		GeoLat?: number | null;
		GeoLong?: number | null;
		Name?: string | null;
		Nickname1?: string | null;
		Nickname2?: string | null;
		Opened?: number | null;
		VenueId?: number | null;
		Zip?: string | null;
		'[Open]'?: boolean | null;
	}
	export interface VenueFormProperties {
		Address: FormControl<string | null | undefined>,
		Capacity: FormControl<number | null | undefined>,
		City: FormControl<string | null | undefined>,
		Country: FormControl<string | null | undefined>,
		GeoLat: FormControl<number | null | undefined>,
		GeoLong: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Nickname1: FormControl<string | null | undefined>,
		Nickname2: FormControl<string | null | undefined>,
		Opened: FormControl<number | null | undefined>,
		VenueId: FormControl<number | null | undefined>,
		Zip: FormControl<string | null | undefined>,
		'[Open]': FormControl<boolean | null | undefined>,
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
			Opened: new FormControl<number | null | undefined>(undefined),
			VenueId: new FormControl<number | null | undefined>(undefined),
			Zip: new FormControl<string | null | undefined>(undefined),
			'[Open]': new FormControl<boolean | null | undefined>(undefined),
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
		 * @return {Array<Membership>} 
		 */
		MembershipsActive(format: MembershipsActiveFormat): Observable<Array<Membership>> {
			return this.http.get<Array<Membership>>(this.baseUri + format + '/ActiveMemberships', {});
		}

		/**
		 * Areas (Countries)
		 * Areas (Countries)
		 * Get {format}/Areas
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<Area>} 
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
		 * @return {Array<BoxScore>} 
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
		 * @return {Array<BoxScore>} 
		 */
		BoxScoresByDate(format: MembershipsActiveFormat, date: string): Observable<Array<BoxScore>> {
			return this.http.get<Array<BoxScore>>(this.baseUri + format + '/BoxScores/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * Champions
		 * Areas (Countries)
		 * Get {format}/Champions
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<Champion>} 
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
		 * @return {CompetitionDetail} 
		 */
		CompetitionFixturesLeagueDetails(format: MembershipsActiveFormat, competitionid: string): Observable<CompetitionDetail> {
			return this.http.get<CompetitionDetail>(this.baseUri + format + '/CompetitionDetails/' + (competitionid == null ? '' : encodeURIComponent(competitionid)) + '', {});
		}

		/**
		 * Competitions (Leagues)
		 * Competitions (Leagues)
		 * Get {format}/Competitions
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<Competition>} 
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
		 * @return {Array<Game>} 
		 */
		GamesByDate(format: MembershipsActiveFormat, date: string): Observable<Array<Game>> {
			return this.http.get<Array<Game>>(this.baseUri + format + '/GamesByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * Memberships (Historical)
		 * Memberships (Historical)
		 * Get {format}/HistoricalMemberships
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<Membership>} 
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
		 * @return {Array<Membership>} 
		 */
		MembershipsByTeamHistorical(format: MembershipsActiveFormat, teamid: string): Observable<Array<Membership>> {
			return this.http.get<Array<Membership>>(this.baseUri + format + '/HistoricalMembershipsByTeam/' + (teamid == null ? '' : encodeURIComponent(teamid)) + '', {});
		}

		/**
		 * Items
		 * Competitions (Leagues)
		 * Get {format}/Items
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<Item>} 
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
		 * @return {Array<Membership>} 
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
		 * @return {Player} 
		 */
		Player(format: MembershipsActiveFormat, playerid: string): Observable<Player> {
			return this.http.get<Player>(this.baseUri + format + '/Player/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}

		/**
		 * Players
		 * Players
		 * Get {format}/Players
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<Player>} 
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
		 * @return {Array<Player>} 
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
		 * @return {Array<Game>} 
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
		 * @return {Array<SeasonTeam>} 
		 */
		SeasonTeams(format: MembershipsActiveFormat, seasonid: string): Observable<Array<SeasonTeam>> {
			return this.http.get<Array<SeasonTeam>>(this.baseUri + format + '/SeasonTeams/' + (seasonid == null ? '' : encodeURIComponent(seasonid)) + '', {});
		}

		/**
		 * Spells
		 * Areas (Countries)
		 * Get {format}/Spells
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<Spell>} 
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
		 * @return {Array<Standing>} 
		 */
		Standings(format: MembershipsActiveFormat, roundid: string): Observable<Array<Standing>> {
			return this.http.get<Array<Standing>>(this.baseUri + format + '/Standings/' + (roundid == null ? '' : encodeURIComponent(roundid)) + '', {});
		}

		/**
		 * Teams
		 * Teams
		 * Get {format}/Teams
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<Team>} 
		 */
		Teams(format: MembershipsActiveFormat): Observable<Array<Team>> {
			return this.http.get<Array<Team>>(this.baseUri + format + '/Teams', {});
		}

		/**
		 * Venues
		 * Venues
		 * Get {format}/Venues
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<Venue>} 
		 */
		Venues(format: MembershipsActiveFormat): Observable<Array<Venue>> {
			return this.http.get<Array<Venue>>(this.baseUri + format + '/Venues', {});
		}
	}

	export enum MembershipsActiveFormat { xml = 0, json = 1 }

}

