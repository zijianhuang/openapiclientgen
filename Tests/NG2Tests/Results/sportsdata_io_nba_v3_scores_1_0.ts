import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Game {
		Attendance?: number | null;
		AwayTeam?: string | null;
		AwayTeamID?: number | null;
		AwayTeamMoneyLine?: number | null;
		AwayTeamScore?: number | null;
		Channel?: string | null;
		DateTime?: string | null;
		Day?: string | null;
		GameEndDateTime?: string | null;
		GameID?: number | null;
		GlobalAwayTeamID?: number | null;
		GlobalGameID?: number | null;
		GlobalHomeTeamID?: number | null;
		HomeTeam?: string | null;
		HomeTeamID?: number | null;
		HomeTeamMoneyLine?: number | null;
		HomeTeamScore?: number | null;
		IsClosed?: boolean | null;
		LastPlay?: string | null;
		OverUnder?: number | null;
		PointSpread?: number | null;
		PointSpreadAwayTeamMoneyLine?: number | null;
		PointSpreadHomeTeamMoneyLine?: number | null;
		Quarter?: string | null;
		Quarters?: Array<Quarter>;
		Season?: number | null;
		SeasonType?: number | null;
		StadiumID?: number | null;
		Status?: string | null;
		TimeRemainingMinutes?: number | null;
		TimeRemainingSeconds?: number | null;
		Updated?: string | null;
	}
	export interface GameFormProperties {
		Attendance: FormControl<number | null | undefined>,
		AwayTeam: FormControl<string | null | undefined>,
		AwayTeamID: FormControl<number | null | undefined>,
		AwayTeamMoneyLine: FormControl<number | null | undefined>,
		AwayTeamScore: FormControl<number | null | undefined>,
		Channel: FormControl<string | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,
		GameEndDateTime: FormControl<string | null | undefined>,
		GameID: FormControl<number | null | undefined>,
		GlobalAwayTeamID: FormControl<number | null | undefined>,
		GlobalGameID: FormControl<number | null | undefined>,
		GlobalHomeTeamID: FormControl<number | null | undefined>,
		HomeTeam: FormControl<string | null | undefined>,
		HomeTeamID: FormControl<number | null | undefined>,
		HomeTeamMoneyLine: FormControl<number | null | undefined>,
		HomeTeamScore: FormControl<number | null | undefined>,
		IsClosed: FormControl<boolean | null | undefined>,
		LastPlay: FormControl<string | null | undefined>,
		OverUnder: FormControl<number | null | undefined>,
		PointSpread: FormControl<number | null | undefined>,
		PointSpreadAwayTeamMoneyLine: FormControl<number | null | undefined>,
		PointSpreadHomeTeamMoneyLine: FormControl<number | null | undefined>,
		Quarter: FormControl<string | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		StadiumID: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,
		TimeRemainingMinutes: FormControl<number | null | undefined>,
		TimeRemainingSeconds: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
	}
	export function CreateGameFormGroup() {
		return new FormGroup<GameFormProperties>({
			Attendance: new FormControl<number | null | undefined>(undefined),
			AwayTeam: new FormControl<string | null | undefined>(undefined),
			AwayTeamID: new FormControl<number | null | undefined>(undefined),
			AwayTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			AwayTeamScore: new FormControl<number | null | undefined>(undefined),
			Channel: new FormControl<string | null | undefined>(undefined),
			DateTime: new FormControl<string | null | undefined>(undefined),
			Day: new FormControl<string | null | undefined>(undefined),
			GameEndDateTime: new FormControl<string | null | undefined>(undefined),
			GameID: new FormControl<number | null | undefined>(undefined),
			GlobalAwayTeamID: new FormControl<number | null | undefined>(undefined),
			GlobalGameID: new FormControl<number | null | undefined>(undefined),
			GlobalHomeTeamID: new FormControl<number | null | undefined>(undefined),
			HomeTeam: new FormControl<string | null | undefined>(undefined),
			HomeTeamID: new FormControl<number | null | undefined>(undefined),
			HomeTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			HomeTeamScore: new FormControl<number | null | undefined>(undefined),
			IsClosed: new FormControl<boolean | null | undefined>(undefined),
			LastPlay: new FormControl<string | null | undefined>(undefined),
			OverUnder: new FormControl<number | null | undefined>(undefined),
			PointSpread: new FormControl<number | null | undefined>(undefined),
			PointSpreadAwayTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			PointSpreadHomeTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			Quarter: new FormControl<string | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			StadiumID: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			TimeRemainingMinutes: new FormControl<number | null | undefined>(undefined),
			TimeRemainingSeconds: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Quarter {
		AwayScore?: number | null;
		GameID?: number | null;
		HomeScore?: number | null;
		Name?: string | null;
		Number?: number | null;
		QuarterID?: number | null;
	}
	export interface QuarterFormProperties {
		AwayScore: FormControl<number | null | undefined>,
		GameID: FormControl<number | null | undefined>,
		HomeScore: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Number: FormControl<number | null | undefined>,
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

	export interface News {
		Author?: string | null;
		Categories?: string | null;
		Content?: string | null;
		NewsID?: number | null;
		PlayerID?: number | null;
		PlayerID2?: number | null;
		Source?: string | null;
		Team?: string | null;
		Team2?: string | null;
		TeamID?: number | null;
		TeamID2?: number | null;
		TermsOfUse?: string | null;
		TimeAgo?: string | null;
		Title?: string | null;
		Updated?: string | null;
		Url?: string | null;
	}
	export interface NewsFormProperties {
		Author: FormControl<string | null | undefined>,
		Categories: FormControl<string | null | undefined>,
		Content: FormControl<string | null | undefined>,
		NewsID: FormControl<number | null | undefined>,
		PlayerID: FormControl<number | null | undefined>,
		PlayerID2: FormControl<number | null | undefined>,
		Source: FormControl<string | null | undefined>,
		Team: FormControl<string | null | undefined>,
		Team2: FormControl<string | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
		TeamID2: FormControl<number | null | undefined>,
		TermsOfUse: FormControl<string | null | undefined>,
		TimeAgo: FormControl<string | null | undefined>,
		Title: FormControl<string | null | undefined>,
		Updated: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateNewsFormGroup() {
		return new FormGroup<NewsFormProperties>({
			Author: new FormControl<string | null | undefined>(undefined),
			Categories: new FormControl<string | null | undefined>(undefined),
			Content: new FormControl<string | null | undefined>(undefined),
			NewsID: new FormControl<number | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			PlayerID2: new FormControl<number | null | undefined>(undefined),
			Source: new FormControl<string | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			Team2: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			TeamID2: new FormControl<number | null | undefined>(undefined),
			TermsOfUse: new FormControl<string | null | undefined>(undefined),
			TimeAgo: new FormControl<string | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OpponentSeason {
		Assists?: number | null;
		AssistsPercentage?: number | null;
		BlockedShots?: number | null;
		BlocksPercentage?: number | null;
		DefensiveRebounds?: number | null;
		DefensiveReboundsPercentage?: number | null;
		DoubleDoubles?: number | null;
		EffectiveFieldGoalsPercentage?: number | null;
		FantasyPoints?: number | null;
		FantasyPointsDraftKings?: number | null;
		FantasyPointsFanDuel?: number | null;
		FantasyPointsFantasyDraft?: number | null;
		FantasyPointsYahoo?: number | null;
		FieldGoalsAttempted?: number | null;
		FieldGoalsMade?: number | null;
		FieldGoalsPercentage?: number | null;
		FreeThrowsAttempted?: number | null;
		FreeThrowsMade?: number | null;
		FreeThrowsPercentage?: number | null;
		Games?: number | null;
		GlobalTeamID?: number | null;
		IsClosed?: boolean | null;
		Losses?: number | null;
		Minutes?: number | null;
		Name?: string | null;
		OffensiveRebounds?: number | null;
		OffensiveReboundsPercentage?: number | null;
		OpponentPosition?: string | null;
		OpponentStat?: OpponentSeason;
		PersonalFouls?: number | null;
		PlayerEfficiencyRating?: number | null;
		PlusMinus?: number | null;
		Points?: number | null;
		Possessions?: number | null;
		Rebounds?: number | null;
		Season?: number | null;
		SeasonType?: number | null;
		Seconds?: number | null;
		StatID?: number | null;
		Steals?: number | null;
		StealsPercentage?: number | null;
		Team?: string | null;
		TeamID?: number | null;
		ThreePointersAttempted?: number | null;
		ThreePointersMade?: number | null;
		ThreePointersPercentage?: number | null;
		TotalReboundsPercentage?: number | null;
		TripleDoubles?: number | null;
		TrueShootingAttempts?: number | null;
		TrueShootingPercentage?: number | null;
		TurnOversPercentage?: number | null;
		Turnovers?: number | null;
		TwoPointersAttempted?: number | null;
		TwoPointersMade?: number | null;
		TwoPointersPercentage?: number | null;
		Updated?: string | null;
		UsageRatePercentage?: number | null;
		Wins?: number | null;
	}
	export interface OpponentSeasonFormProperties {
		Assists: FormControl<number | null | undefined>,
		AssistsPercentage: FormControl<number | null | undefined>,
		BlockedShots: FormControl<number | null | undefined>,
		BlocksPercentage: FormControl<number | null | undefined>,
		DefensiveRebounds: FormControl<number | null | undefined>,
		DefensiveReboundsPercentage: FormControl<number | null | undefined>,
		DoubleDoubles: FormControl<number | null | undefined>,
		EffectiveFieldGoalsPercentage: FormControl<number | null | undefined>,
		FantasyPoints: FormControl<number | null | undefined>,
		FantasyPointsDraftKings: FormControl<number | null | undefined>,
		FantasyPointsFanDuel: FormControl<number | null | undefined>,
		FantasyPointsFantasyDraft: FormControl<number | null | undefined>,
		FantasyPointsYahoo: FormControl<number | null | undefined>,
		FieldGoalsAttempted: FormControl<number | null | undefined>,
		FieldGoalsMade: FormControl<number | null | undefined>,
		FieldGoalsPercentage: FormControl<number | null | undefined>,
		FreeThrowsAttempted: FormControl<number | null | undefined>,
		FreeThrowsMade: FormControl<number | null | undefined>,
		FreeThrowsPercentage: FormControl<number | null | undefined>,
		Games: FormControl<number | null | undefined>,
		GlobalTeamID: FormControl<number | null | undefined>,
		IsClosed: FormControl<boolean | null | undefined>,
		Losses: FormControl<number | null | undefined>,
		Minutes: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		OffensiveRebounds: FormControl<number | null | undefined>,
		OffensiveReboundsPercentage: FormControl<number | null | undefined>,
		OpponentPosition: FormControl<string | null | undefined>,
		PersonalFouls: FormControl<number | null | undefined>,
		PlayerEfficiencyRating: FormControl<number | null | undefined>,
		PlusMinus: FormControl<number | null | undefined>,
		Points: FormControl<number | null | undefined>,
		Possessions: FormControl<number | null | undefined>,
		Rebounds: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		Seconds: FormControl<number | null | undefined>,
		StatID: FormControl<number | null | undefined>,
		Steals: FormControl<number | null | undefined>,
		StealsPercentage: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
		ThreePointersAttempted: FormControl<number | null | undefined>,
		ThreePointersMade: FormControl<number | null | undefined>,
		ThreePointersPercentage: FormControl<number | null | undefined>,
		TotalReboundsPercentage: FormControl<number | null | undefined>,
		TripleDoubles: FormControl<number | null | undefined>,
		TrueShootingAttempts: FormControl<number | null | undefined>,
		TrueShootingPercentage: FormControl<number | null | undefined>,
		TurnOversPercentage: FormControl<number | null | undefined>,
		Turnovers: FormControl<number | null | undefined>,
		TwoPointersAttempted: FormControl<number | null | undefined>,
		TwoPointersMade: FormControl<number | null | undefined>,
		TwoPointersPercentage: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
		UsageRatePercentage: FormControl<number | null | undefined>,
		Wins: FormControl<number | null | undefined>,
	}
	export function CreateOpponentSeasonFormGroup() {
		return new FormGroup<OpponentSeasonFormProperties>({
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
			Losses: new FormControl<number | null | undefined>(undefined),
			Minutes: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			OffensiveRebounds: new FormControl<number | null | undefined>(undefined),
			OffensiveReboundsPercentage: new FormControl<number | null | undefined>(undefined),
			OpponentPosition: new FormControl<string | null | undefined>(undefined),
			PersonalFouls: new FormControl<number | null | undefined>(undefined),
			PlayerEfficiencyRating: new FormControl<number | null | undefined>(undefined),
			PlusMinus: new FormControl<number | null | undefined>(undefined),
			Points: new FormControl<number | null | undefined>(undefined),
			Possessions: new FormControl<number | null | undefined>(undefined),
			Rebounds: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			Seconds: new FormControl<number | null | undefined>(undefined),
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
			Wins: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Player {
		BirthCity?: string | null;
		BirthCountry?: string | null;
		BirthDate?: string | null;
		BirthState?: string | null;
		College?: string | null;
		DepthChartOrder?: number | null;
		DepthChartPosition?: string | null;
		DraftKingsName?: string | null;
		DraftKingsPlayerID?: number | null;
		Experience?: number | null;
		FanDuelName?: string | null;
		FanDuelPlayerID?: number | null;
		FantasyAlarmPlayerID?: number | null;
		FantasyDraftName?: string | null;
		FantasyDraftPlayerID?: number | null;
		FirstName?: string | null;
		GlobalTeamID?: number | null;
		Height?: number | null;
		HighSchool?: string | null;
		InjuryBodyPart?: string | null;
		InjuryNotes?: string | null;
		InjuryStartDate?: string | null;
		InjuryStatus?: string | null;
		Jersey?: number | null;
		LastName?: string | null;
		NbaDotComPlayerID?: number | null;
		PhotoUrl?: string | null;
		PlayerID?: number | null;
		Position?: string | null;
		PositionCategory?: string | null;
		RotoWirePlayerID?: number | null;
		RotoworldPlayerID?: number | null;
		Salary?: number | null;
		SportRadarPlayerID?: string | null;
		SportsDataID?: string | null;
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
		BirthCountry: FormControl<string | null | undefined>,
		BirthDate: FormControl<string | null | undefined>,
		BirthState: FormControl<string | null | undefined>,
		College: FormControl<string | null | undefined>,
		DepthChartOrder: FormControl<number | null | undefined>,
		DepthChartPosition: FormControl<string | null | undefined>,
		DraftKingsName: FormControl<string | null | undefined>,
		DraftKingsPlayerID: FormControl<number | null | undefined>,
		Experience: FormControl<number | null | undefined>,
		FanDuelName: FormControl<string | null | undefined>,
		FanDuelPlayerID: FormControl<number | null | undefined>,
		FantasyAlarmPlayerID: FormControl<number | null | undefined>,
		FantasyDraftName: FormControl<string | null | undefined>,
		FantasyDraftPlayerID: FormControl<number | null | undefined>,
		FirstName: FormControl<string | null | undefined>,
		GlobalTeamID: FormControl<number | null | undefined>,
		Height: FormControl<number | null | undefined>,
		HighSchool: FormControl<string | null | undefined>,
		InjuryBodyPart: FormControl<string | null | undefined>,
		InjuryNotes: FormControl<string | null | undefined>,
		InjuryStartDate: FormControl<string | null | undefined>,
		InjuryStatus: FormControl<string | null | undefined>,
		Jersey: FormControl<number | null | undefined>,
		LastName: FormControl<string | null | undefined>,
		NbaDotComPlayerID: FormControl<number | null | undefined>,
		PhotoUrl: FormControl<string | null | undefined>,
		PlayerID: FormControl<number | null | undefined>,
		Position: FormControl<string | null | undefined>,
		PositionCategory: FormControl<string | null | undefined>,
		RotoWirePlayerID: FormControl<number | null | undefined>,
		RotoworldPlayerID: FormControl<number | null | undefined>,
		Salary: FormControl<number | null | undefined>,
		SportRadarPlayerID: FormControl<string | null | undefined>,
		SportsDataID: FormControl<string | null | undefined>,
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

	export interface Season {
		ApiSeason?: string | null;
		Description?: string | null;
		EndYear?: number | null;
		PostSeasonStartDate?: string | null;
		RegularSeasonStartDate?: string | null;
		Season1?: number | null;
		SeasonType?: string | null;
		StartYear?: number | null;
	}
	export interface SeasonFormProperties {
		ApiSeason: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		EndYear: FormControl<number | null | undefined>,
		PostSeasonStartDate: FormControl<string | null | undefined>,
		RegularSeasonStartDate: FormControl<string | null | undefined>,
		Season1: FormControl<number | null | undefined>,
		SeasonType: FormControl<string | null | undefined>,
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
			SeasonType: new FormControl<string | null | undefined>(undefined),
			StartYear: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Stadium {
		Active?: boolean | null;
		Address?: string | null;
		Capacity?: number | null;
		City?: string | null;
		Country?: string | null;
		GeoLat?: number | null;
		GeoLong?: number | null;
		Name?: string | null;
		StadiumID?: number | null;
		State?: string | null;
		Zip?: string | null;
	}
	export interface StadiumFormProperties {
		Active: FormControl<boolean | null | undefined>,
		Address: FormControl<string | null | undefined>,
		Capacity: FormControl<number | null | undefined>,
		City: FormControl<string | null | undefined>,
		Country: FormControl<string | null | undefined>,
		GeoLat: FormControl<number | null | undefined>,
		GeoLong: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
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

	export interface Standing {
		AwayLosses?: number | null;
		AwayWins?: number | null;
		City?: string | null;
		Conference?: string | null;
		ConferenceLosses?: number | null;
		ConferenceWins?: number | null;
		Division?: string | null;
		DivisionLosses?: number | null;
		DivisionWins?: number | null;
		GamesBack?: number | null;
		GlobalTeamID?: number | null;
		HomeLosses?: number | null;
		HomeWins?: number | null;
		Key?: string | null;
		LastTenLosses?: number | null;
		LastTenWins?: number | null;
		Losses?: number | null;
		Name?: string | null;
		Percentage?: number | null;
		PointsPerGameAgainst?: number | null;
		PointsPerGameFor?: number | null;
		Season?: number | null;
		SeasonType?: number | null;
		Streak?: number | null;
		StreakDescription?: string | null;
		TeamID?: number | null;
		Wins?: number | null;
	}
	export interface StandingFormProperties {
		AwayLosses: FormControl<number | null | undefined>,
		AwayWins: FormControl<number | null | undefined>,
		City: FormControl<string | null | undefined>,
		Conference: FormControl<string | null | undefined>,
		ConferenceLosses: FormControl<number | null | undefined>,
		ConferenceWins: FormControl<number | null | undefined>,
		Division: FormControl<string | null | undefined>,
		DivisionLosses: FormControl<number | null | undefined>,
		DivisionWins: FormControl<number | null | undefined>,
		GamesBack: FormControl<number | null | undefined>,
		GlobalTeamID: FormControl<number | null | undefined>,
		HomeLosses: FormControl<number | null | undefined>,
		HomeWins: FormControl<number | null | undefined>,
		Key: FormControl<string | null | undefined>,
		LastTenLosses: FormControl<number | null | undefined>,
		LastTenWins: FormControl<number | null | undefined>,
		Losses: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Percentage: FormControl<number | null | undefined>,
		PointsPerGameAgainst: FormControl<number | null | undefined>,
		PointsPerGameFor: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		Streak: FormControl<number | null | undefined>,
		StreakDescription: FormControl<string | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
		Wins: FormControl<number | null | undefined>,
	}
	export function CreateStandingFormGroup() {
		return new FormGroup<StandingFormProperties>({
			AwayLosses: new FormControl<number | null | undefined>(undefined),
			AwayWins: new FormControl<number | null | undefined>(undefined),
			City: new FormControl<string | null | undefined>(undefined),
			Conference: new FormControl<string | null | undefined>(undefined),
			ConferenceLosses: new FormControl<number | null | undefined>(undefined),
			ConferenceWins: new FormControl<number | null | undefined>(undefined),
			Division: new FormControl<string | null | undefined>(undefined),
			DivisionLosses: new FormControl<number | null | undefined>(undefined),
			DivisionWins: new FormControl<number | null | undefined>(undefined),
			GamesBack: new FormControl<number | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			HomeLosses: new FormControl<number | null | undefined>(undefined),
			HomeWins: new FormControl<number | null | undefined>(undefined),
			Key: new FormControl<string | null | undefined>(undefined),
			LastTenLosses: new FormControl<number | null | undefined>(undefined),
			LastTenWins: new FormControl<number | null | undefined>(undefined),
			Losses: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Percentage: new FormControl<number | null | undefined>(undefined),
			PointsPerGameAgainst: new FormControl<number | null | undefined>(undefined),
			PointsPerGameFor: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			Streak: new FormControl<number | null | undefined>(undefined),
			StreakDescription: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			Wins: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Team {
		Active?: boolean | null;
		City?: string | null;
		Conference?: string | null;
		Division?: string | null;
		GlobalTeamID?: number | null;
		LeagueID?: number | null;
		Name?: string | null;
		NbaDotComTeamID?: number | null;
		PrimaryColor?: string | null;
		QuaternaryColor?: string | null;
		SecondaryColor?: string | null;
		StadiumID?: number | null;
		TeamID?: number | null;
		TertiaryColor?: string | null;
		WikipediaLogoUrl?: string | null;
		WikipediaWordMarkUrl?: string | null;
		'[Key]'?: string | null;
	}
	export interface TeamFormProperties {
		Active: FormControl<boolean | null | undefined>,
		City: FormControl<string | null | undefined>,
		Conference: FormControl<string | null | undefined>,
		Division: FormControl<string | null | undefined>,
		GlobalTeamID: FormControl<number | null | undefined>,
		LeagueID: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		NbaDotComTeamID: FormControl<number | null | undefined>,
		PrimaryColor: FormControl<string | null | undefined>,
		QuaternaryColor: FormControl<string | null | undefined>,
		SecondaryColor: FormControl<string | null | undefined>,
		StadiumID: FormControl<number | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
		TertiaryColor: FormControl<string | null | undefined>,
		WikipediaLogoUrl: FormControl<string | null | undefined>,
		WikipediaWordMarkUrl: FormControl<string | null | undefined>,
		'[Key]': FormControl<string | null | undefined>,
	}
	export function CreateTeamFormGroup() {
		return new FormGroup<TeamFormProperties>({
			Active: new FormControl<boolean | null | undefined>(undefined),
			City: new FormControl<string | null | undefined>(undefined),
			Conference: new FormControl<string | null | undefined>(undefined),
			Division: new FormControl<string | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			LeagueID: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			NbaDotComTeamID: new FormControl<number | null | undefined>(undefined),
			PrimaryColor: new FormControl<string | null | undefined>(undefined),
			QuaternaryColor: new FormControl<string | null | undefined>(undefined),
			SecondaryColor: new FormControl<string | null | undefined>(undefined),
			StadiumID: new FormControl<number | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			TertiaryColor: new FormControl<string | null | undefined>(undefined),
			WikipediaLogoUrl: new FormControl<string | null | undefined>(undefined),
			WikipediaWordMarkUrl: new FormControl<string | null | undefined>(undefined),
			'[Key]': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TeamGame {
		Assists?: number | null;
		AssistsPercentage?: number | null;
		BlockedShots?: number | null;
		BlocksPercentage?: number | null;
		DateTime?: string | null;
		Day?: string | null;
		DefensiveRebounds?: number | null;
		DefensiveReboundsPercentage?: number | null;
		DoubleDoubles?: number | null;
		EffectiveFieldGoalsPercentage?: number | null;
		FantasyPoints?: number | null;
		FantasyPointsDraftKings?: number | null;
		FantasyPointsFanDuel?: number | null;
		FantasyPointsFantasyDraft?: number | null;
		FantasyPointsYahoo?: number | null;
		FieldGoalsAttempted?: number | null;
		FieldGoalsMade?: number | null;
		FieldGoalsPercentage?: number | null;
		FreeThrowsAttempted?: number | null;
		FreeThrowsMade?: number | null;
		FreeThrowsPercentage?: number | null;
		GameID?: number | null;
		Games?: number | null;
		GlobalGameID?: number | null;
		GlobalOpponentID?: number | null;
		GlobalTeamID?: number | null;
		HomeOrAway?: string | null;
		IsClosed?: boolean | null;
		IsGameOver?: boolean | null;
		Losses?: number | null;
		Minutes?: number | null;
		Name?: string | null;
		OffensiveRebounds?: number | null;
		OffensiveReboundsPercentage?: number | null;
		Opponent?: string | null;
		OpponentID?: number | null;
		PersonalFouls?: number | null;
		PlayerEfficiencyRating?: number | null;
		PlusMinus?: number | null;
		Points?: number | null;
		Possessions?: number | null;
		Rebounds?: number | null;
		Season?: number | null;
		SeasonType?: number | null;
		Seconds?: number | null;
		StatID?: number | null;
		Steals?: number | null;
		StealsPercentage?: number | null;
		Team?: string | null;
		TeamID?: number | null;
		ThreePointersAttempted?: number | null;
		ThreePointersMade?: number | null;
		ThreePointersPercentage?: number | null;
		TotalReboundsPercentage?: number | null;
		TripleDoubles?: number | null;
		TrueShootingAttempts?: number | null;
		TrueShootingPercentage?: number | null;
		TurnOversPercentage?: number | null;
		Turnovers?: number | null;
		TwoPointersAttempted?: number | null;
		TwoPointersMade?: number | null;
		TwoPointersPercentage?: number | null;
		Updated?: string | null;
		UsageRatePercentage?: number | null;
		Wins?: number | null;
	}
	export interface TeamGameFormProperties {
		Assists: FormControl<number | null | undefined>,
		AssistsPercentage: FormControl<number | null | undefined>,
		BlockedShots: FormControl<number | null | undefined>,
		BlocksPercentage: FormControl<number | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,
		DefensiveRebounds: FormControl<number | null | undefined>,
		DefensiveReboundsPercentage: FormControl<number | null | undefined>,
		DoubleDoubles: FormControl<number | null | undefined>,
		EffectiveFieldGoalsPercentage: FormControl<number | null | undefined>,
		FantasyPoints: FormControl<number | null | undefined>,
		FantasyPointsDraftKings: FormControl<number | null | undefined>,
		FantasyPointsFanDuel: FormControl<number | null | undefined>,
		FantasyPointsFantasyDraft: FormControl<number | null | undefined>,
		FantasyPointsYahoo: FormControl<number | null | undefined>,
		FieldGoalsAttempted: FormControl<number | null | undefined>,
		FieldGoalsMade: FormControl<number | null | undefined>,
		FieldGoalsPercentage: FormControl<number | null | undefined>,
		FreeThrowsAttempted: FormControl<number | null | undefined>,
		FreeThrowsMade: FormControl<number | null | undefined>,
		FreeThrowsPercentage: FormControl<number | null | undefined>,
		GameID: FormControl<number | null | undefined>,
		Games: FormControl<number | null | undefined>,
		GlobalGameID: FormControl<number | null | undefined>,
		GlobalOpponentID: FormControl<number | null | undefined>,
		GlobalTeamID: FormControl<number | null | undefined>,
		HomeOrAway: FormControl<string | null | undefined>,
		IsClosed: FormControl<boolean | null | undefined>,
		IsGameOver: FormControl<boolean | null | undefined>,
		Losses: FormControl<number | null | undefined>,
		Minutes: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		OffensiveRebounds: FormControl<number | null | undefined>,
		OffensiveReboundsPercentage: FormControl<number | null | undefined>,
		Opponent: FormControl<string | null | undefined>,
		OpponentID: FormControl<number | null | undefined>,
		PersonalFouls: FormControl<number | null | undefined>,
		PlayerEfficiencyRating: FormControl<number | null | undefined>,
		PlusMinus: FormControl<number | null | undefined>,
		Points: FormControl<number | null | undefined>,
		Possessions: FormControl<number | null | undefined>,
		Rebounds: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		Seconds: FormControl<number | null | undefined>,
		StatID: FormControl<number | null | undefined>,
		Steals: FormControl<number | null | undefined>,
		StealsPercentage: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
		ThreePointersAttempted: FormControl<number | null | undefined>,
		ThreePointersMade: FormControl<number | null | undefined>,
		ThreePointersPercentage: FormControl<number | null | undefined>,
		TotalReboundsPercentage: FormControl<number | null | undefined>,
		TripleDoubles: FormControl<number | null | undefined>,
		TrueShootingAttempts: FormControl<number | null | undefined>,
		TrueShootingPercentage: FormControl<number | null | undefined>,
		TurnOversPercentage: FormControl<number | null | undefined>,
		Turnovers: FormControl<number | null | undefined>,
		TwoPointersAttempted: FormControl<number | null | undefined>,
		TwoPointersMade: FormControl<number | null | undefined>,
		TwoPointersPercentage: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
		UsageRatePercentage: FormControl<number | null | undefined>,
		Wins: FormControl<number | null | undefined>,
	}
	export function CreateTeamGameFormGroup() {
		return new FormGroup<TeamGameFormProperties>({
			Assists: new FormControl<number | null | undefined>(undefined),
			AssistsPercentage: new FormControl<number | null | undefined>(undefined),
			BlockedShots: new FormControl<number | null | undefined>(undefined),
			BlocksPercentage: new FormControl<number | null | undefined>(undefined),
			DateTime: new FormControl<string | null | undefined>(undefined),
			Day: new FormControl<string | null | undefined>(undefined),
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
			GameID: new FormControl<number | null | undefined>(undefined),
			Games: new FormControl<number | null | undefined>(undefined),
			GlobalGameID: new FormControl<number | null | undefined>(undefined),
			GlobalOpponentID: new FormControl<number | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			HomeOrAway: new FormControl<string | null | undefined>(undefined),
			IsClosed: new FormControl<boolean | null | undefined>(undefined),
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
			PlusMinus: new FormControl<number | null | undefined>(undefined),
			Points: new FormControl<number | null | undefined>(undefined),
			Possessions: new FormControl<number | null | undefined>(undefined),
			Rebounds: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			Seconds: new FormControl<number | null | undefined>(undefined),
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
			Wins: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TeamSeason {
		Assists?: number | null;
		AssistsPercentage?: number | null;
		BlockedShots?: number | null;
		BlocksPercentage?: number | null;
		DefensiveRebounds?: number | null;
		DefensiveReboundsPercentage?: number | null;
		DoubleDoubles?: number | null;
		EffectiveFieldGoalsPercentage?: number | null;
		FantasyPoints?: number | null;
		FantasyPointsDraftKings?: number | null;
		FantasyPointsFanDuel?: number | null;
		FantasyPointsFantasyDraft?: number | null;
		FantasyPointsYahoo?: number | null;
		FieldGoalsAttempted?: number | null;
		FieldGoalsMade?: number | null;
		FieldGoalsPercentage?: number | null;
		FreeThrowsAttempted?: number | null;
		FreeThrowsMade?: number | null;
		FreeThrowsPercentage?: number | null;
		Games?: number | null;
		GlobalTeamID?: number | null;
		IsClosed?: boolean | null;
		Losses?: number | null;
		Minutes?: number | null;
		Name?: string | null;
		OffensiveRebounds?: number | null;
		OffensiveReboundsPercentage?: number | null;
		OpponentPosition?: string | null;
		OpponentStat?: OpponentSeason;
		PersonalFouls?: number | null;
		PlayerEfficiencyRating?: number | null;
		PlusMinus?: number | null;
		Points?: number | null;
		Possessions?: number | null;
		Rebounds?: number | null;
		Season?: number | null;
		SeasonType?: number | null;
		Seconds?: number | null;
		StatID?: number | null;
		Steals?: number | null;
		StealsPercentage?: number | null;
		Team?: string | null;
		TeamID?: number | null;
		ThreePointersAttempted?: number | null;
		ThreePointersMade?: number | null;
		ThreePointersPercentage?: number | null;
		TotalReboundsPercentage?: number | null;
		TripleDoubles?: number | null;
		TrueShootingAttempts?: number | null;
		TrueShootingPercentage?: number | null;
		TurnOversPercentage?: number | null;
		Turnovers?: number | null;
		TwoPointersAttempted?: number | null;
		TwoPointersMade?: number | null;
		TwoPointersPercentage?: number | null;
		Updated?: string | null;
		UsageRatePercentage?: number | null;
		Wins?: number | null;
	}
	export interface TeamSeasonFormProperties {
		Assists: FormControl<number | null | undefined>,
		AssistsPercentage: FormControl<number | null | undefined>,
		BlockedShots: FormControl<number | null | undefined>,
		BlocksPercentage: FormControl<number | null | undefined>,
		DefensiveRebounds: FormControl<number | null | undefined>,
		DefensiveReboundsPercentage: FormControl<number | null | undefined>,
		DoubleDoubles: FormControl<number | null | undefined>,
		EffectiveFieldGoalsPercentage: FormControl<number | null | undefined>,
		FantasyPoints: FormControl<number | null | undefined>,
		FantasyPointsDraftKings: FormControl<number | null | undefined>,
		FantasyPointsFanDuel: FormControl<number | null | undefined>,
		FantasyPointsFantasyDraft: FormControl<number | null | undefined>,
		FantasyPointsYahoo: FormControl<number | null | undefined>,
		FieldGoalsAttempted: FormControl<number | null | undefined>,
		FieldGoalsMade: FormControl<number | null | undefined>,
		FieldGoalsPercentage: FormControl<number | null | undefined>,
		FreeThrowsAttempted: FormControl<number | null | undefined>,
		FreeThrowsMade: FormControl<number | null | undefined>,
		FreeThrowsPercentage: FormControl<number | null | undefined>,
		Games: FormControl<number | null | undefined>,
		GlobalTeamID: FormControl<number | null | undefined>,
		IsClosed: FormControl<boolean | null | undefined>,
		Losses: FormControl<number | null | undefined>,
		Minutes: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		OffensiveRebounds: FormControl<number | null | undefined>,
		OffensiveReboundsPercentage: FormControl<number | null | undefined>,
		OpponentPosition: FormControl<string | null | undefined>,
		PersonalFouls: FormControl<number | null | undefined>,
		PlayerEfficiencyRating: FormControl<number | null | undefined>,
		PlusMinus: FormControl<number | null | undefined>,
		Points: FormControl<number | null | undefined>,
		Possessions: FormControl<number | null | undefined>,
		Rebounds: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		Seconds: FormControl<number | null | undefined>,
		StatID: FormControl<number | null | undefined>,
		Steals: FormControl<number | null | undefined>,
		StealsPercentage: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
		ThreePointersAttempted: FormControl<number | null | undefined>,
		ThreePointersMade: FormControl<number | null | undefined>,
		ThreePointersPercentage: FormControl<number | null | undefined>,
		TotalReboundsPercentage: FormControl<number | null | undefined>,
		TripleDoubles: FormControl<number | null | undefined>,
		TrueShootingAttempts: FormControl<number | null | undefined>,
		TrueShootingPercentage: FormControl<number | null | undefined>,
		TurnOversPercentage: FormControl<number | null | undefined>,
		Turnovers: FormControl<number | null | undefined>,
		TwoPointersAttempted: FormControl<number | null | undefined>,
		TwoPointersMade: FormControl<number | null | undefined>,
		TwoPointersPercentage: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
		UsageRatePercentage: FormControl<number | null | undefined>,
		Wins: FormControl<number | null | undefined>,
	}
	export function CreateTeamSeasonFormGroup() {
		return new FormGroup<TeamSeasonFormProperties>({
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
			Losses: new FormControl<number | null | undefined>(undefined),
			Minutes: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			OffensiveRebounds: new FormControl<number | null | undefined>(undefined),
			OffensiveReboundsPercentage: new FormControl<number | null | undefined>(undefined),
			OpponentPosition: new FormControl<string | null | undefined>(undefined),
			PersonalFouls: new FormControl<number | null | undefined>(undefined),
			PlayerEfficiencyRating: new FormControl<number | null | undefined>(undefined),
			PlusMinus: new FormControl<number | null | undefined>(undefined),
			Points: new FormControl<number | null | undefined>(undefined),
			Possessions: new FormControl<number | null | undefined>(undefined),
			Rebounds: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			Seconds: new FormControl<number | null | undefined>(undefined),
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
			Wins: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Teams (All)
		 * Get {format}/AllTeams
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<Team>} 
		 */
		TeamsAll(format: TeamsAllFormat): Observable<Array<Team>> {
			return this.http.get<Array<Team>>(this.baseUri + format + '/AllTeams', {});
		}

		/**
		 * Are Games In Progress
		 * Returns <code>true</code> if there is at least one game being played at the time of the request or <code>false</code> if there are none.
		 * Get {format}/AreAnyGamesInProgress
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {boolean} 
		 */
		AreGamesInProgress(format: TeamsAllFormat): Observable<boolean> {
			return this.http.get<boolean>(this.baseUri + format + '/AreAnyGamesInProgress', {});
		}

		/**
		 * Current Season
		 * Get {format}/CurrentSeason
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Season} 
		 */
		CurrentSeason(format: TeamsAllFormat): Observable<Season> {
			return this.http.get<Season>(this.baseUri + format + '/CurrentSeason', {});
		}

		/**
		 * Player Details by Free Agent
		 * Get {format}/FreeAgents
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<Player>} 
		 */
		PlayerDetailsByFreeAgent(format: TeamsAllFormat): Observable<Array<Player>> {
			return this.http.get<Array<Player>>(this.baseUri + format + '/FreeAgents', {});
		}

		/**
		 * Schedules
		 * Get {format}/Games/{season}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.
		 * @return {Array<Game>} 
		 */
		Schedules(format: TeamsAllFormat, season: string): Observable<Array<Game>> {
			return this.http.get<Array<Game>>(this.baseUri + format + '/Games/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * Games by Date
		 * Get {format}/GamesByDate/{date}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s).
		 * <br>Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>.
		 * @return {Array<Game>} 
		 */
		GamesByDate(format: TeamsAllFormat, date: string): Observable<Array<Game>> {
			return this.http.get<Array<Game>>(this.baseUri + format + '/GamesByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * News
		 * Get {format}/News
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<News>} 
		 */
		News(format: TeamsAllFormat): Observable<Array<News>> {
			return this.http.get<Array<News>>(this.baseUri + format + '/News', {});
		}

		/**
		 * News by Date
		 * Get {format}/NewsByDate/{date}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the news.
		 * <br>Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>.
		 * @return {Array<News>} 
		 */
		NewsByDate(format: TeamsAllFormat, date: string): Observable<Array<News>> {
			return this.http.get<Array<News>>(this.baseUri + format + '/NewsByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * News by Player
		 * Get {format}/NewsByPlayerID/{playerid}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} playerid Unique FantasyData Player ID.
		 * Example:<code>10000507</code>.
		 * @return {Array<News>} 
		 */
		NewsByPlayer(format: TeamsAllFormat, playerid: string): Observable<Array<News>> {
			return this.http.get<Array<News>>(this.baseUri + format + '/NewsByPlayerID/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}

		/**
		 * Player Details by Player
		 * Get {format}/Player/{playerid}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} playerid Unique FantasyData Player ID. Example:<code>20000571</code>.
		 * @return {Player} 
		 */
		PlayerDetailsByPlayer(format: TeamsAllFormat, playerid: string): Observable<Player> {
			return this.http.get<Player>(this.baseUri + format + '/Player/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}

		/**
		 * Player Details by Active
		 * Get {format}/Players
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<Player>} 
		 */
		PlayerDetailsByActive(format: TeamsAllFormat): Observable<Array<Player>> {
			return this.http.get<Array<Player>>(this.baseUri + format + '/Players', {});
		}

		/**
		 * Stadiums
		 * Get {format}/Stadiums
		 * @param {StadiumsFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<Stadium>} 
		 */
		Stadiums(format: StadiumsFormat): Observable<Array<Stadium>> {
			return this.http.get<Array<Stadium>>(this.baseUri + format + '/Stadiums', {});
		}

		/**
		 * Standings
		 * Get {format}/Standings/{season}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season.
		 * <br>Examples: <code>2015</code>, <code>2016</code>.
		 * @return {Array<Standing>} 
		 */
		Standings(format: TeamsAllFormat, season: string): Observable<Array<Standing>> {
			return this.http.get<Array<Standing>>(this.baseUri + format + '/Standings/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * Team Game Stats by Date
		 * Get {format}/TeamGameStatsByDate/{date}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s).
		 * <br>Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>.
		 * @return {Array<TeamGame>} 
		 */
		TeamGameStatsByDate(format: TeamsAllFormat, date: string): Observable<Array<TeamGame>> {
			return this.http.get<Array<TeamGame>>(this.baseUri + format + '/TeamGameStatsByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * Team Season Stats
		 * Get {format}/TeamSeasonStats/{season}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season.
		 * <br>Examples: <code>2015</code>, <code>2016</code>.
		 * @return {Array<TeamSeason>} 
		 */
		TeamSeasonStats(format: TeamsAllFormat, season: string): Observable<Array<TeamSeason>> {
			return this.http.get<Array<TeamSeason>>(this.baseUri + format + '/TeamSeasonStats/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * Teams (Active)
		 * Get {format}/teams
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<Team>} 
		 */
		TeamsActive(format: TeamsAllFormat): Observable<Array<Team>> {
			return this.http.get<Array<Team>>(this.baseUri + format + '/teams', {});
		}
	}

	export enum TeamsAllFormat { XML = 'XML', JSON = 'JSON' }

	export enum StadiumsFormat { xml = 'xml', json = 'json' }

}

