import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Conference {
		ConferenceID?: number | null;
		ConferenceName?: string | null;
		DivisionName?: string | null;
		Name?: string | null;
		Teams?: Array<Team>;
	}
	export interface ConferenceFormProperties {
		ConferenceID: FormControl<number | null | undefined>,
		ConferenceName: FormControl<string | null | undefined>,
		DivisionName: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateConferenceFormGroup() {
		return new FormGroup<ConferenceFormProperties>({
			ConferenceID: new FormControl<number | null | undefined>(undefined),
			ConferenceName: new FormControl<string | null | undefined>(undefined),
			DivisionName: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Team {
		Active?: boolean | null;
		ApRank?: number | null;
		CoachesRank?: number | null;
		Conference?: string | null;
		ConferenceID?: number | null;
		ConferenceLosses?: number | null;
		ConferenceWins?: number | null;
		GlobalTeamID?: number | null;
		Losses?: number | null;
		Name?: string | null;
		PlayoffRank?: number | null;
		RankSeason?: number | null;
		RankSeasonType?: number | null;
		RankWeek?: number | null;
		School?: string | null;
		ShortDisplayName?: string | null;
		StadiumID?: number | null;
		TeamID?: number | null;
		TeamLogoUrl?: string | null;
		Wins?: number | null;
		'[Key]'?: string | null;
	}
	export interface TeamFormProperties {
		Active: FormControl<boolean | null | undefined>,
		ApRank: FormControl<number | null | undefined>,
		CoachesRank: FormControl<number | null | undefined>,
		Conference: FormControl<string | null | undefined>,
		ConferenceID: FormControl<number | null | undefined>,
		ConferenceLosses: FormControl<number | null | undefined>,
		ConferenceWins: FormControl<number | null | undefined>,
		GlobalTeamID: FormControl<number | null | undefined>,
		Losses: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PlayoffRank: FormControl<number | null | undefined>,
		RankSeason: FormControl<number | null | undefined>,
		RankSeasonType: FormControl<number | null | undefined>,
		RankWeek: FormControl<number | null | undefined>,
		School: FormControl<string | null | undefined>,
		ShortDisplayName: FormControl<string | null | undefined>,
		StadiumID: FormControl<number | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
		TeamLogoUrl: FormControl<string | null | undefined>,
		Wins: FormControl<number | null | undefined>,
		'[Key]': FormControl<string | null | undefined>,
	}
	export function CreateTeamFormGroup() {
		return new FormGroup<TeamFormProperties>({
			Active: new FormControl<boolean | null | undefined>(undefined),
			ApRank: new FormControl<number | null | undefined>(undefined),
			CoachesRank: new FormControl<number | null | undefined>(undefined),
			Conference: new FormControl<string | null | undefined>(undefined),
			ConferenceID: new FormControl<number | null | undefined>(undefined),
			ConferenceLosses: new FormControl<number | null | undefined>(undefined),
			ConferenceWins: new FormControl<number | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			Losses: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PlayoffRank: new FormControl<number | null | undefined>(undefined),
			RankSeason: new FormControl<number | null | undefined>(undefined),
			RankSeasonType: new FormControl<number | null | undefined>(undefined),
			RankWeek: new FormControl<number | null | undefined>(undefined),
			School: new FormControl<string | null | undefined>(undefined),
			ShortDisplayName: new FormControl<string | null | undefined>(undefined),
			StadiumID: new FormControl<number | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			TeamLogoUrl: new FormControl<string | null | undefined>(undefined),
			Wins: new FormControl<number | null | undefined>(undefined),
			'[Key]': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Game {
		AwayRotationNumber?: number | null;
		AwayTeam?: string | null;
		AwayTeamID?: number | null;
		AwayTeamMoneyLine?: number | null;
		AwayTeamName?: string | null;
		AwayTeamScore?: number | null;
		Created?: string | null;
		DateTime?: string | null;
		Day?: string | null;
		Distance?: number | null;
		Down?: number | null;
		GameEndDateTime?: string | null;
		GameID?: number | null;
		GlobalAwayTeamID?: number | null;
		GlobalGameID?: number | null;
		GlobalHomeTeamID?: number | null;
		HomeRotationNumber?: number | null;
		HomeTeam?: string | null;
		HomeTeamID?: number | null;
		HomeTeamMoneyLine?: number | null;
		HomeTeamName?: string | null;
		HomeTeamScore?: number | null;
		IsClosed?: boolean | null;
		OverUnder?: number | null;
		Period?: string | null;
		Periods?: Array<Period>;
		PointSpread?: number | null;
		Possession?: string | null;
		Season?: number | null;
		SeasonType?: number | null;
		Stadium?: Stadium;
		StadiumID?: number | null;
		Status?: string | null;
		TimeRemainingMinutes?: number | null;
		TimeRemainingSeconds?: number | null;
		Title?: string | null;
		Updated?: string | null;
		Week?: number | null;
		YardLine?: number | null;
		YardLineTerritory?: string | null;
	}
	export interface GameFormProperties {
		AwayRotationNumber: FormControl<number | null | undefined>,
		AwayTeam: FormControl<string | null | undefined>,
		AwayTeamID: FormControl<number | null | undefined>,
		AwayTeamMoneyLine: FormControl<number | null | undefined>,
		AwayTeamName: FormControl<string | null | undefined>,
		AwayTeamScore: FormControl<number | null | undefined>,
		Created: FormControl<string | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,
		Distance: FormControl<number | null | undefined>,
		Down: FormControl<number | null | undefined>,
		GameEndDateTime: FormControl<string | null | undefined>,
		GameID: FormControl<number | null | undefined>,
		GlobalAwayTeamID: FormControl<number | null | undefined>,
		GlobalGameID: FormControl<number | null | undefined>,
		GlobalHomeTeamID: FormControl<number | null | undefined>,
		HomeRotationNumber: FormControl<number | null | undefined>,
		HomeTeam: FormControl<string | null | undefined>,
		HomeTeamID: FormControl<number | null | undefined>,
		HomeTeamMoneyLine: FormControl<number | null | undefined>,
		HomeTeamName: FormControl<string | null | undefined>,
		HomeTeamScore: FormControl<number | null | undefined>,
		IsClosed: FormControl<boolean | null | undefined>,
		OverUnder: FormControl<number | null | undefined>,
		Period: FormControl<string | null | undefined>,
		PointSpread: FormControl<number | null | undefined>,
		Possession: FormControl<string | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		StadiumID: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,
		TimeRemainingMinutes: FormControl<number | null | undefined>,
		TimeRemainingSeconds: FormControl<number | null | undefined>,
		Title: FormControl<string | null | undefined>,
		Updated: FormControl<string | null | undefined>,
		Week: FormControl<number | null | undefined>,
		YardLine: FormControl<number | null | undefined>,
		YardLineTerritory: FormControl<string | null | undefined>,
	}
	export function CreateGameFormGroup() {
		return new FormGroup<GameFormProperties>({
			AwayRotationNumber: new FormControl<number | null | undefined>(undefined),
			AwayTeam: new FormControl<string | null | undefined>(undefined),
			AwayTeamID: new FormControl<number | null | undefined>(undefined),
			AwayTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			AwayTeamName: new FormControl<string | null | undefined>(undefined),
			AwayTeamScore: new FormControl<number | null | undefined>(undefined),
			Created: new FormControl<string | null | undefined>(undefined),
			DateTime: new FormControl<string | null | undefined>(undefined),
			Day: new FormControl<string | null | undefined>(undefined),
			Distance: new FormControl<number | null | undefined>(undefined),
			Down: new FormControl<number | null | undefined>(undefined),
			GameEndDateTime: new FormControl<string | null | undefined>(undefined),
			GameID: new FormControl<number | null | undefined>(undefined),
			GlobalAwayTeamID: new FormControl<number | null | undefined>(undefined),
			GlobalGameID: new FormControl<number | null | undefined>(undefined),
			GlobalHomeTeamID: new FormControl<number | null | undefined>(undefined),
			HomeRotationNumber: new FormControl<number | null | undefined>(undefined),
			HomeTeam: new FormControl<string | null | undefined>(undefined),
			HomeTeamID: new FormControl<number | null | undefined>(undefined),
			HomeTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			HomeTeamName: new FormControl<string | null | undefined>(undefined),
			HomeTeamScore: new FormControl<number | null | undefined>(undefined),
			IsClosed: new FormControl<boolean | null | undefined>(undefined),
			OverUnder: new FormControl<number | null | undefined>(undefined),
			Period: new FormControl<string | null | undefined>(undefined),
			PointSpread: new FormControl<number | null | undefined>(undefined),
			Possession: new FormControl<string | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			StadiumID: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			TimeRemainingMinutes: new FormControl<number | null | undefined>(undefined),
			TimeRemainingSeconds: new FormControl<number | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
			Week: new FormControl<number | null | undefined>(undefined),
			YardLine: new FormControl<number | null | undefined>(undefined),
			YardLineTerritory: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Period {
		AwayScore?: number | null;
		GameID?: number | null;
		HomeScore?: number | null;
		Name?: string | null;
		Number?: number | null;
		PeriodID?: number | null;
	}
	export interface PeriodFormProperties {
		AwayScore: FormControl<number | null | undefined>,
		GameID: FormControl<number | null | undefined>,
		HomeScore: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Number: FormControl<number | null | undefined>,
		PeriodID: FormControl<number | null | undefined>,
	}
	export function CreatePeriodFormGroup() {
		return new FormGroup<PeriodFormProperties>({
			AwayScore: new FormControl<number | null | undefined>(undefined),
			GameID: new FormControl<number | null | undefined>(undefined),
			HomeScore: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Number: new FormControl<number | null | undefined>(undefined),
			PeriodID: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Season {
		ApiSeason?: string | null;
		ApiWeek?: number | null;
		Description?: string | null;
		EndYear?: number | null;
		Season1?: number | null;
		StartYear?: number | null;
	}
	export interface SeasonFormProperties {
		ApiSeason: FormControl<string | null | undefined>,
		ApiWeek: FormControl<number | null | undefined>,
		Description: FormControl<string | null | undefined>,
		EndYear: FormControl<number | null | undefined>,
		Season1: FormControl<number | null | undefined>,
		StartYear: FormControl<number | null | undefined>,
	}
	export function CreateSeasonFormGroup() {
		return new FormGroup<SeasonFormProperties>({
			ApiSeason: new FormControl<string | null | undefined>(undefined),
			ApiWeek: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			EndYear: new FormControl<number | null | undefined>(undefined),
			Season1: new FormControl<number | null | undefined>(undefined),
			StartYear: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Stadium {
		Active?: boolean | null;
		City?: string | null;
		Dome?: boolean | null;
		Name?: string | null;
		StadiumID?: number | null;
		State?: string | null;
	}
	export interface StadiumFormProperties {
		Active: FormControl<boolean | null | undefined>,
		City: FormControl<string | null | undefined>,
		Dome: FormControl<boolean | null | undefined>,
		Name: FormControl<string | null | undefined>,
		StadiumID: FormControl<number | null | undefined>,
		State: FormControl<string | null | undefined>,
	}
	export function CreateStadiumFormGroup() {
		return new FormGroup<StadiumFormProperties>({
			Active: new FormControl<boolean | null | undefined>(undefined),
			City: new FormControl<string | null | undefined>(undefined),
			Dome: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			StadiumID: new FormControl<number | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TeamGame {
		AssistedTackles?: number | null;
		Created?: string | null;
		DateTime?: string | null;
		Day?: string | null;
		ExtraPointsAttempted?: number | null;
		ExtraPointsMade?: number | null;
		FantasyPoints?: number | null;
		FieldGoalPercentage?: number | null;
		FieldGoalsAttempted?: number | null;
		FieldGoalsLongestMade?: number | null;
		FieldGoalsMade?: number | null;
		FirstDowns?: number | null;
		FourthDownAttempts?: number | null;
		FourthDownConversions?: number | null;
		FumbleReturnTouchdowns?: number | null;
		Fumbles?: number | null;
		FumblesLost?: number | null;
		FumblesRecovered?: number | null;
		GameID?: number | null;
		Games?: number | null;
		GlobalGameID?: number | null;
		GlobalOpponentID?: number | null;
		GlobalTeamID?: number | null;
		HomeOrAway?: string | null;
		InterceptionReturnTouchdowns?: number | null;
		InterceptionReturnYards?: number | null;
		Interceptions?: number | null;
		IsGameOver?: boolean | null;
		KickReturnLong?: number | null;
		KickReturnTouchdowns?: number | null;
		KickReturnYards?: number | null;
		KickReturnYardsPerAttempt?: number | null;
		KickReturns?: number | null;
		Name?: string | null;
		Opponent?: string | null;
		OpponentID?: number | null;
		OpponentScore?: number | null;
		PassesDefended?: number | null;
		PassingAttempts?: number | null;
		PassingCompletionPercentage?: number | null;
		PassingCompletions?: number | null;
		PassingInterceptions?: number | null;
		PassingRating?: number | null;
		PassingTouchdowns?: number | null;
		PassingYards?: number | null;
		PassingYardsPerAttempt?: number | null;
		PassingYardsPerCompletion?: number | null;
		Penalties?: number | null;
		PenaltyYards?: number | null;
		PuntAverage?: number | null;
		PuntLong?: number | null;
		PuntReturnLong?: number | null;
		PuntReturnTouchdowns?: number | null;
		PuntReturnYards?: number | null;
		PuntReturnYardsPerAttempt?: number | null;
		PuntReturns?: number | null;
		PuntYards?: number | null;
		Punts?: number | null;
		QuarterbackHurries?: number | null;
		ReceivingLong?: number | null;
		ReceivingTouchdowns?: number | null;
		ReceivingYards?: number | null;
		ReceivingYardsPerReception?: number | null;
		Receptions?: number | null;
		RushingAttempts?: number | null;
		RushingLong?: number | null;
		RushingTouchdowns?: number | null;
		RushingYards?: number | null;
		RushingYardsPerAttempt?: number | null;
		Sacks?: number | null;
		Score?: number | null;
		Season?: number | null;
		SeasonType?: number | null;
		SoloTackles?: number | null;
		StatID?: number | null;
		TacklesForLoss?: number | null;
		Team?: string | null;
		TeamID?: number | null;
		ThirdDownAttempts?: number | null;
		ThirdDownConversions?: number | null;
		TimeOfPossessionMinutes?: number | null;
		TimeOfPossessionSeconds?: number | null;
		Updated?: string | null;
		Week?: number | null;
	}
	export interface TeamGameFormProperties {
		AssistedTackles: FormControl<number | null | undefined>,
		Created: FormControl<string | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,
		ExtraPointsAttempted: FormControl<number | null | undefined>,
		ExtraPointsMade: FormControl<number | null | undefined>,
		FantasyPoints: FormControl<number | null | undefined>,
		FieldGoalPercentage: FormControl<number | null | undefined>,
		FieldGoalsAttempted: FormControl<number | null | undefined>,
		FieldGoalsLongestMade: FormControl<number | null | undefined>,
		FieldGoalsMade: FormControl<number | null | undefined>,
		FirstDowns: FormControl<number | null | undefined>,
		FourthDownAttempts: FormControl<number | null | undefined>,
		FourthDownConversions: FormControl<number | null | undefined>,
		FumbleReturnTouchdowns: FormControl<number | null | undefined>,
		Fumbles: FormControl<number | null | undefined>,
		FumblesLost: FormControl<number | null | undefined>,
		FumblesRecovered: FormControl<number | null | undefined>,
		GameID: FormControl<number | null | undefined>,
		Games: FormControl<number | null | undefined>,
		GlobalGameID: FormControl<number | null | undefined>,
		GlobalOpponentID: FormControl<number | null | undefined>,
		GlobalTeamID: FormControl<number | null | undefined>,
		HomeOrAway: FormControl<string | null | undefined>,
		InterceptionReturnTouchdowns: FormControl<number | null | undefined>,
		InterceptionReturnYards: FormControl<number | null | undefined>,
		Interceptions: FormControl<number | null | undefined>,
		IsGameOver: FormControl<boolean | null | undefined>,
		KickReturnLong: FormControl<number | null | undefined>,
		KickReturnTouchdowns: FormControl<number | null | undefined>,
		KickReturnYards: FormControl<number | null | undefined>,
		KickReturnYardsPerAttempt: FormControl<number | null | undefined>,
		KickReturns: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Opponent: FormControl<string | null | undefined>,
		OpponentID: FormControl<number | null | undefined>,
		OpponentScore: FormControl<number | null | undefined>,
		PassesDefended: FormControl<number | null | undefined>,
		PassingAttempts: FormControl<number | null | undefined>,
		PassingCompletionPercentage: FormControl<number | null | undefined>,
		PassingCompletions: FormControl<number | null | undefined>,
		PassingInterceptions: FormControl<number | null | undefined>,
		PassingRating: FormControl<number | null | undefined>,
		PassingTouchdowns: FormControl<number | null | undefined>,
		PassingYards: FormControl<number | null | undefined>,
		PassingYardsPerAttempt: FormControl<number | null | undefined>,
		PassingYardsPerCompletion: FormControl<number | null | undefined>,
		Penalties: FormControl<number | null | undefined>,
		PenaltyYards: FormControl<number | null | undefined>,
		PuntAverage: FormControl<number | null | undefined>,
		PuntLong: FormControl<number | null | undefined>,
		PuntReturnLong: FormControl<number | null | undefined>,
		PuntReturnTouchdowns: FormControl<number | null | undefined>,
		PuntReturnYards: FormControl<number | null | undefined>,
		PuntReturnYardsPerAttempt: FormControl<number | null | undefined>,
		PuntReturns: FormControl<number | null | undefined>,
		PuntYards: FormControl<number | null | undefined>,
		Punts: FormControl<number | null | undefined>,
		QuarterbackHurries: FormControl<number | null | undefined>,
		ReceivingLong: FormControl<number | null | undefined>,
		ReceivingTouchdowns: FormControl<number | null | undefined>,
		ReceivingYards: FormControl<number | null | undefined>,
		ReceivingYardsPerReception: FormControl<number | null | undefined>,
		Receptions: FormControl<number | null | undefined>,
		RushingAttempts: FormControl<number | null | undefined>,
		RushingLong: FormControl<number | null | undefined>,
		RushingTouchdowns: FormControl<number | null | undefined>,
		RushingYards: FormControl<number | null | undefined>,
		RushingYardsPerAttempt: FormControl<number | null | undefined>,
		Sacks: FormControl<number | null | undefined>,
		Score: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		SoloTackles: FormControl<number | null | undefined>,
		StatID: FormControl<number | null | undefined>,
		TacklesForLoss: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
		ThirdDownAttempts: FormControl<number | null | undefined>,
		ThirdDownConversions: FormControl<number | null | undefined>,
		TimeOfPossessionMinutes: FormControl<number | null | undefined>,
		TimeOfPossessionSeconds: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
		Week: FormControl<number | null | undefined>,
	}
	export function CreateTeamGameFormGroup() {
		return new FormGroup<TeamGameFormProperties>({
			AssistedTackles: new FormControl<number | null | undefined>(undefined),
			Created: new FormControl<string | null | undefined>(undefined),
			DateTime: new FormControl<string | null | undefined>(undefined),
			Day: new FormControl<string | null | undefined>(undefined),
			ExtraPointsAttempted: new FormControl<number | null | undefined>(undefined),
			ExtraPointsMade: new FormControl<number | null | undefined>(undefined),
			FantasyPoints: new FormControl<number | null | undefined>(undefined),
			FieldGoalPercentage: new FormControl<number | null | undefined>(undefined),
			FieldGoalsAttempted: new FormControl<number | null | undefined>(undefined),
			FieldGoalsLongestMade: new FormControl<number | null | undefined>(undefined),
			FieldGoalsMade: new FormControl<number | null | undefined>(undefined),
			FirstDowns: new FormControl<number | null | undefined>(undefined),
			FourthDownAttempts: new FormControl<number | null | undefined>(undefined),
			FourthDownConversions: new FormControl<number | null | undefined>(undefined),
			FumbleReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			Fumbles: new FormControl<number | null | undefined>(undefined),
			FumblesLost: new FormControl<number | null | undefined>(undefined),
			FumblesRecovered: new FormControl<number | null | undefined>(undefined),
			GameID: new FormControl<number | null | undefined>(undefined),
			Games: new FormControl<number | null | undefined>(undefined),
			GlobalGameID: new FormControl<number | null | undefined>(undefined),
			GlobalOpponentID: new FormControl<number | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			HomeOrAway: new FormControl<string | null | undefined>(undefined),
			InterceptionReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			InterceptionReturnYards: new FormControl<number | null | undefined>(undefined),
			Interceptions: new FormControl<number | null | undefined>(undefined),
			IsGameOver: new FormControl<boolean | null | undefined>(undefined),
			KickReturnLong: new FormControl<number | null | undefined>(undefined),
			KickReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			KickReturnYards: new FormControl<number | null | undefined>(undefined),
			KickReturnYardsPerAttempt: new FormControl<number | null | undefined>(undefined),
			KickReturns: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Opponent: new FormControl<string | null | undefined>(undefined),
			OpponentID: new FormControl<number | null | undefined>(undefined),
			OpponentScore: new FormControl<number | null | undefined>(undefined),
			PassesDefended: new FormControl<number | null | undefined>(undefined),
			PassingAttempts: new FormControl<number | null | undefined>(undefined),
			PassingCompletionPercentage: new FormControl<number | null | undefined>(undefined),
			PassingCompletions: new FormControl<number | null | undefined>(undefined),
			PassingInterceptions: new FormControl<number | null | undefined>(undefined),
			PassingRating: new FormControl<number | null | undefined>(undefined),
			PassingTouchdowns: new FormControl<number | null | undefined>(undefined),
			PassingYards: new FormControl<number | null | undefined>(undefined),
			PassingYardsPerAttempt: new FormControl<number | null | undefined>(undefined),
			PassingYardsPerCompletion: new FormControl<number | null | undefined>(undefined),
			Penalties: new FormControl<number | null | undefined>(undefined),
			PenaltyYards: new FormControl<number | null | undefined>(undefined),
			PuntAverage: new FormControl<number | null | undefined>(undefined),
			PuntLong: new FormControl<number | null | undefined>(undefined),
			PuntReturnLong: new FormControl<number | null | undefined>(undefined),
			PuntReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			PuntReturnYards: new FormControl<number | null | undefined>(undefined),
			PuntReturnYardsPerAttempt: new FormControl<number | null | undefined>(undefined),
			PuntReturns: new FormControl<number | null | undefined>(undefined),
			PuntYards: new FormControl<number | null | undefined>(undefined),
			Punts: new FormControl<number | null | undefined>(undefined),
			QuarterbackHurries: new FormControl<number | null | undefined>(undefined),
			ReceivingLong: new FormControl<number | null | undefined>(undefined),
			ReceivingTouchdowns: new FormControl<number | null | undefined>(undefined),
			ReceivingYards: new FormControl<number | null | undefined>(undefined),
			ReceivingYardsPerReception: new FormControl<number | null | undefined>(undefined),
			Receptions: new FormControl<number | null | undefined>(undefined),
			RushingAttempts: new FormControl<number | null | undefined>(undefined),
			RushingLong: new FormControl<number | null | undefined>(undefined),
			RushingTouchdowns: new FormControl<number | null | undefined>(undefined),
			RushingYards: new FormControl<number | null | undefined>(undefined),
			RushingYardsPerAttempt: new FormControl<number | null | undefined>(undefined),
			Sacks: new FormControl<number | null | undefined>(undefined),
			Score: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			SoloTackles: new FormControl<number | null | undefined>(undefined),
			StatID: new FormControl<number | null | undefined>(undefined),
			TacklesForLoss: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			ThirdDownAttempts: new FormControl<number | null | undefined>(undefined),
			ThirdDownConversions: new FormControl<number | null | undefined>(undefined),
			TimeOfPossessionMinutes: new FormControl<number | null | undefined>(undefined),
			TimeOfPossessionSeconds: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
			Week: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TeamSeason {
		AssistedTackles?: number | null;
		ConferenceLosses?: number | null;
		ConferencePointsAgainst?: number | null;
		ConferencePointsFor?: number | null;
		ConferenceWins?: number | null;
		Created?: string | null;
		ExtraPointsAttempted?: number | null;
		ExtraPointsMade?: number | null;
		FantasyPoints?: number | null;
		FieldGoalPercentage?: number | null;
		FieldGoalsAttempted?: number | null;
		FieldGoalsLongestMade?: number | null;
		FieldGoalsMade?: number | null;
		FirstDowns?: number | null;
		FourthDownAttempts?: number | null;
		FourthDownConversions?: number | null;
		FumbleReturnTouchdowns?: number | null;
		Fumbles?: number | null;
		FumblesLost?: number | null;
		FumblesRecovered?: number | null;
		Games?: number | null;
		GlobalTeamID?: number | null;
		HomeLosses?: number | null;
		HomeWins?: number | null;
		InterceptionReturnTouchdowns?: number | null;
		InterceptionReturnYards?: number | null;
		Interceptions?: number | null;
		KickReturnLong?: number | null;
		KickReturnTouchdowns?: number | null;
		KickReturnYards?: number | null;
		KickReturnYardsPerAttempt?: number | null;
		KickReturns?: number | null;
		Losses?: number | null;
		Name?: string | null;
		OpponentScore?: number | null;
		PassesDefended?: number | null;
		PassingAttempts?: number | null;
		PassingCompletionPercentage?: number | null;
		PassingCompletions?: number | null;
		PassingInterceptions?: number | null;
		PassingRating?: number | null;
		PassingTouchdowns?: number | null;
		PassingYards?: number | null;
		PassingYardsPerAttempt?: number | null;
		PassingYardsPerCompletion?: number | null;
		Penalties?: number | null;
		PenaltyYards?: number | null;
		PointsAgainst?: number | null;
		PointsFor?: number | null;
		PuntAverage?: number | null;
		PuntLong?: number | null;
		PuntReturnLong?: number | null;
		PuntReturnTouchdowns?: number | null;
		PuntReturnYards?: number | null;
		PuntReturnYardsPerAttempt?: number | null;
		PuntReturns?: number | null;
		PuntYards?: number | null;
		Punts?: number | null;
		QuarterbackHurries?: number | null;
		ReceivingLong?: number | null;
		ReceivingTouchdowns?: number | null;
		ReceivingYards?: number | null;
		ReceivingYardsPerReception?: number | null;
		Receptions?: number | null;
		RoadLosses?: number | null;
		RoadWins?: number | null;
		RushingAttempts?: number | null;
		RushingLong?: number | null;
		RushingTouchdowns?: number | null;
		RushingYards?: number | null;
		RushingYardsPerAttempt?: number | null;
		Sacks?: number | null;
		Score?: number | null;
		Season?: number | null;
		SeasonType?: number | null;
		SoloTackles?: number | null;
		StatID?: number | null;
		Streak?: number | null;
		TacklesForLoss?: number | null;
		Team?: string | null;
		TeamID?: number | null;
		ThirdDownAttempts?: number | null;
		ThirdDownConversions?: number | null;
		TimeOfPossessionMinutes?: number | null;
		TimeOfPossessionSeconds?: number | null;
		Updated?: string | null;
		Wins?: number | null;
	}
	export interface TeamSeasonFormProperties {
		AssistedTackles: FormControl<number | null | undefined>,
		ConferenceLosses: FormControl<number | null | undefined>,
		ConferencePointsAgainst: FormControl<number | null | undefined>,
		ConferencePointsFor: FormControl<number | null | undefined>,
		ConferenceWins: FormControl<number | null | undefined>,
		Created: FormControl<string | null | undefined>,
		ExtraPointsAttempted: FormControl<number | null | undefined>,
		ExtraPointsMade: FormControl<number | null | undefined>,
		FantasyPoints: FormControl<number | null | undefined>,
		FieldGoalPercentage: FormControl<number | null | undefined>,
		FieldGoalsAttempted: FormControl<number | null | undefined>,
		FieldGoalsLongestMade: FormControl<number | null | undefined>,
		FieldGoalsMade: FormControl<number | null | undefined>,
		FirstDowns: FormControl<number | null | undefined>,
		FourthDownAttempts: FormControl<number | null | undefined>,
		FourthDownConversions: FormControl<number | null | undefined>,
		FumbleReturnTouchdowns: FormControl<number | null | undefined>,
		Fumbles: FormControl<number | null | undefined>,
		FumblesLost: FormControl<number | null | undefined>,
		FumblesRecovered: FormControl<number | null | undefined>,
		Games: FormControl<number | null | undefined>,
		GlobalTeamID: FormControl<number | null | undefined>,
		HomeLosses: FormControl<number | null | undefined>,
		HomeWins: FormControl<number | null | undefined>,
		InterceptionReturnTouchdowns: FormControl<number | null | undefined>,
		InterceptionReturnYards: FormControl<number | null | undefined>,
		Interceptions: FormControl<number | null | undefined>,
		KickReturnLong: FormControl<number | null | undefined>,
		KickReturnTouchdowns: FormControl<number | null | undefined>,
		KickReturnYards: FormControl<number | null | undefined>,
		KickReturnYardsPerAttempt: FormControl<number | null | undefined>,
		KickReturns: FormControl<number | null | undefined>,
		Losses: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		OpponentScore: FormControl<number | null | undefined>,
		PassesDefended: FormControl<number | null | undefined>,
		PassingAttempts: FormControl<number | null | undefined>,
		PassingCompletionPercentage: FormControl<number | null | undefined>,
		PassingCompletions: FormControl<number | null | undefined>,
		PassingInterceptions: FormControl<number | null | undefined>,
		PassingRating: FormControl<number | null | undefined>,
		PassingTouchdowns: FormControl<number | null | undefined>,
		PassingYards: FormControl<number | null | undefined>,
		PassingYardsPerAttempt: FormControl<number | null | undefined>,
		PassingYardsPerCompletion: FormControl<number | null | undefined>,
		Penalties: FormControl<number | null | undefined>,
		PenaltyYards: FormControl<number | null | undefined>,
		PointsAgainst: FormControl<number | null | undefined>,
		PointsFor: FormControl<number | null | undefined>,
		PuntAverage: FormControl<number | null | undefined>,
		PuntLong: FormControl<number | null | undefined>,
		PuntReturnLong: FormControl<number | null | undefined>,
		PuntReturnTouchdowns: FormControl<number | null | undefined>,
		PuntReturnYards: FormControl<number | null | undefined>,
		PuntReturnYardsPerAttempt: FormControl<number | null | undefined>,
		PuntReturns: FormControl<number | null | undefined>,
		PuntYards: FormControl<number | null | undefined>,
		Punts: FormControl<number | null | undefined>,
		QuarterbackHurries: FormControl<number | null | undefined>,
		ReceivingLong: FormControl<number | null | undefined>,
		ReceivingTouchdowns: FormControl<number | null | undefined>,
		ReceivingYards: FormControl<number | null | undefined>,
		ReceivingYardsPerReception: FormControl<number | null | undefined>,
		Receptions: FormControl<number | null | undefined>,
		RoadLosses: FormControl<number | null | undefined>,
		RoadWins: FormControl<number | null | undefined>,
		RushingAttempts: FormControl<number | null | undefined>,
		RushingLong: FormControl<number | null | undefined>,
		RushingTouchdowns: FormControl<number | null | undefined>,
		RushingYards: FormControl<number | null | undefined>,
		RushingYardsPerAttempt: FormControl<number | null | undefined>,
		Sacks: FormControl<number | null | undefined>,
		Score: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		SoloTackles: FormControl<number | null | undefined>,
		StatID: FormControl<number | null | undefined>,
		Streak: FormControl<number | null | undefined>,
		TacklesForLoss: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
		ThirdDownAttempts: FormControl<number | null | undefined>,
		ThirdDownConversions: FormControl<number | null | undefined>,
		TimeOfPossessionMinutes: FormControl<number | null | undefined>,
		TimeOfPossessionSeconds: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
		Wins: FormControl<number | null | undefined>,
	}
	export function CreateTeamSeasonFormGroup() {
		return new FormGroup<TeamSeasonFormProperties>({
			AssistedTackles: new FormControl<number | null | undefined>(undefined),
			ConferenceLosses: new FormControl<number | null | undefined>(undefined),
			ConferencePointsAgainst: new FormControl<number | null | undefined>(undefined),
			ConferencePointsFor: new FormControl<number | null | undefined>(undefined),
			ConferenceWins: new FormControl<number | null | undefined>(undefined),
			Created: new FormControl<string | null | undefined>(undefined),
			ExtraPointsAttempted: new FormControl<number | null | undefined>(undefined),
			ExtraPointsMade: new FormControl<number | null | undefined>(undefined),
			FantasyPoints: new FormControl<number | null | undefined>(undefined),
			FieldGoalPercentage: new FormControl<number | null | undefined>(undefined),
			FieldGoalsAttempted: new FormControl<number | null | undefined>(undefined),
			FieldGoalsLongestMade: new FormControl<number | null | undefined>(undefined),
			FieldGoalsMade: new FormControl<number | null | undefined>(undefined),
			FirstDowns: new FormControl<number | null | undefined>(undefined),
			FourthDownAttempts: new FormControl<number | null | undefined>(undefined),
			FourthDownConversions: new FormControl<number | null | undefined>(undefined),
			FumbleReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			Fumbles: new FormControl<number | null | undefined>(undefined),
			FumblesLost: new FormControl<number | null | undefined>(undefined),
			FumblesRecovered: new FormControl<number | null | undefined>(undefined),
			Games: new FormControl<number | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			HomeLosses: new FormControl<number | null | undefined>(undefined),
			HomeWins: new FormControl<number | null | undefined>(undefined),
			InterceptionReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			InterceptionReturnYards: new FormControl<number | null | undefined>(undefined),
			Interceptions: new FormControl<number | null | undefined>(undefined),
			KickReturnLong: new FormControl<number | null | undefined>(undefined),
			KickReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			KickReturnYards: new FormControl<number | null | undefined>(undefined),
			KickReturnYardsPerAttempt: new FormControl<number | null | undefined>(undefined),
			KickReturns: new FormControl<number | null | undefined>(undefined),
			Losses: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			OpponentScore: new FormControl<number | null | undefined>(undefined),
			PassesDefended: new FormControl<number | null | undefined>(undefined),
			PassingAttempts: new FormControl<number | null | undefined>(undefined),
			PassingCompletionPercentage: new FormControl<number | null | undefined>(undefined),
			PassingCompletions: new FormControl<number | null | undefined>(undefined),
			PassingInterceptions: new FormControl<number | null | undefined>(undefined),
			PassingRating: new FormControl<number | null | undefined>(undefined),
			PassingTouchdowns: new FormControl<number | null | undefined>(undefined),
			PassingYards: new FormControl<number | null | undefined>(undefined),
			PassingYardsPerAttempt: new FormControl<number | null | undefined>(undefined),
			PassingYardsPerCompletion: new FormControl<number | null | undefined>(undefined),
			Penalties: new FormControl<number | null | undefined>(undefined),
			PenaltyYards: new FormControl<number | null | undefined>(undefined),
			PointsAgainst: new FormControl<number | null | undefined>(undefined),
			PointsFor: new FormControl<number | null | undefined>(undefined),
			PuntAverage: new FormControl<number | null | undefined>(undefined),
			PuntLong: new FormControl<number | null | undefined>(undefined),
			PuntReturnLong: new FormControl<number | null | undefined>(undefined),
			PuntReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			PuntReturnYards: new FormControl<number | null | undefined>(undefined),
			PuntReturnYardsPerAttempt: new FormControl<number | null | undefined>(undefined),
			PuntReturns: new FormControl<number | null | undefined>(undefined),
			PuntYards: new FormControl<number | null | undefined>(undefined),
			Punts: new FormControl<number | null | undefined>(undefined),
			QuarterbackHurries: new FormControl<number | null | undefined>(undefined),
			ReceivingLong: new FormControl<number | null | undefined>(undefined),
			ReceivingTouchdowns: new FormControl<number | null | undefined>(undefined),
			ReceivingYards: new FormControl<number | null | undefined>(undefined),
			ReceivingYardsPerReception: new FormControl<number | null | undefined>(undefined),
			Receptions: new FormControl<number | null | undefined>(undefined),
			RoadLosses: new FormControl<number | null | undefined>(undefined),
			RoadWins: new FormControl<number | null | undefined>(undefined),
			RushingAttempts: new FormControl<number | null | undefined>(undefined),
			RushingLong: new FormControl<number | null | undefined>(undefined),
			RushingTouchdowns: new FormControl<number | null | undefined>(undefined),
			RushingYards: new FormControl<number | null | undefined>(undefined),
			RushingYardsPerAttempt: new FormControl<number | null | undefined>(undefined),
			Sacks: new FormControl<number | null | undefined>(undefined),
			Score: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			SoloTackles: new FormControl<number | null | undefined>(undefined),
			StatID: new FormControl<number | null | undefined>(undefined),
			Streak: new FormControl<number | null | undefined>(undefined),
			TacklesForLoss: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			ThirdDownAttempts: new FormControl<number | null | undefined>(undefined),
			ThirdDownConversions: new FormControl<number | null | undefined>(undefined),
			TimeOfPossessionMinutes: new FormControl<number | null | undefined>(undefined),
			TimeOfPossessionSeconds: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
			Wins: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Are Games In Progress
		 * Returns <code>true</code> if there is at least one game being played at the time of the request or <code>false</code> if there are none.
		 * Get {format}/AreAnyGamesInProgress
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
		 * @return {boolean} 
		 */
		AreGamesInProgress(format: AreGamesInProgressFormat): Observable<boolean> {
			return this.http.get<boolean>(this.baseUri + format + '/AreAnyGamesInProgress', {});
		}

		/**
		 * Current Season
		 * Get {format}/CurrentSeason
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
		 * @return {number} 
		 */
		CurrentSeason(format: AreGamesInProgressFormat): Observable<number> {
			return this.http.get<number>(this.baseUri + format + '/CurrentSeason', {});
		}

		/**
		 * Current Season Details
		 * Get {format}/CurrentSeasonDetails
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
		 * @return {Season} 
		 */
		CurrentSeasonDetails(format: AreGamesInProgressFormat): Observable<Season> {
			return this.http.get<Season>(this.baseUri + format + '/CurrentSeasonDetails', {});
		}

		/**
		 * Current SeasonType
		 * Get {format}/CurrentSeasonType
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
		 * @return {string} 
		 */
		CurrentSeasontype(format: AreGamesInProgressFormat): Observable<string> {
			return this.http.get(this.baseUri + format + '/CurrentSeasonType', { responseType: 'text' });
		}

		/**
		 * Current Week
		 * Get {format}/CurrentWeek
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
		 * @return {number} 
		 */
		CurrentWeek(format: AreGamesInProgressFormat): Observable<number> {
			return this.http.get<number>(this.baseUri + format + '/CurrentWeek', {});
		}

		/**
		 * Schedules
		 * Get {format}/Games/{season}
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
		 * @param {string} season Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.
		 * @return {Array<Game>} 
		 */
		Schedules(format: AreGamesInProgressFormat, season: string): Observable<Array<Game>> {
			return this.http.get<Array<Game>>(this.baseUri + format + '/Games/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * Games by Date
		 * Get {format}/GamesByDate/{date}
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
		 * @param {string} date 
		 *           The date of the game(s).
		 *           <br>Examples: <code>2016-SEP-01</code>, <code>2017-SEP-10</code>.
		 *         
		 * @return {Array<Game>} 
		 */
		GamesByDate(format: AreGamesInProgressFormat, date: string): Observable<Array<Game>> {
			return this.http.get<Array<Game>>(this.baseUri + format + '/GamesByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * Games by Week
		 * Get {format}/GamesByWeek/{season}/{week}
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
		 * @param {string} season 
		 *           Year of the season.
		 *           <br>Examples: <code>2015</code>, <code>2016</code>, etc.
		 *         
		 * @param {string} week 
		 *           The week of the game(s).
		 *           <br>Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc.
		 *         
		 * @return {Array<Game>} 
		 */
		GamesByWeek(format: AreGamesInProgressFormat, season: string, week: string): Observable<Array<Game>> {
			return this.http.get<Array<Game>>(this.baseUri + format + '/GamesByWeek/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (week == null ? '' : encodeURIComponent(week)) + '', {});
		}

		/**
		 * Conference Hierarchy (with Teams)
		 * Get {format}/LeagueHierarchy
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
		 * @return {Array<Conference>} 
		 */
		ConferenceHierarchyWithTeams(format: AreGamesInProgressFormat): Observable<Array<Conference>> {
			return this.http.get<Array<Conference>>(this.baseUri + format + '/LeagueHierarchy', {});
		}

		/**
		 * Stadiums
		 * Get {format}/Stadiums
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
		 * @return {Array<Stadium>} 
		 */
		Stadiums(format: AreGamesInProgressFormat): Observable<Array<Stadium>> {
			return this.http.get<Array<Stadium>>(this.baseUri + format + '/Stadiums', {});
		}

		/**
		 * Team Game Stats by Week
		 * Get {format}/TeamGameStatsByWeek/{season}/{week}
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
		 * @param {string} season 
		 *           Year of the season.
		 *           <br>Examples: <code>2015</code>, <code>2016</code>, etc.
		 *         
		 * @param {string} week 
		 *           The week of the game(s).
		 *           <br>Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc.
		 *         
		 * @return {Array<TeamGame>} 
		 */
		TeamGameStatsByWeek(format: AreGamesInProgressFormat, season: string, week: string): Observable<Array<TeamGame>> {
			return this.http.get<Array<TeamGame>>(this.baseUri + format + '/TeamGameStatsByWeek/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (week == null ? '' : encodeURIComponent(week)) + '', {});
		}

		/**
		 * Team Season Stats & Standings
		 * Get {format}/TeamSeasonStats/{season}
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
		 * @param {string} season Year of the season (with optional season type).<br>Examples: <code>2017</code>, <code>2017POST</code>, <code>2018</code>.
		 * @return {Array<TeamSeason>} 
		 */
		TeamSeasonStatsStandings(format: AreGamesInProgressFormat, season: string): Observable<Array<TeamSeason>> {
			return this.http.get<Array<TeamSeason>>(this.baseUri + format + '/TeamSeasonStats/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * Teams
		 * Get {format}/Teams
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
		 * @return {Array<Team>} 
		 */
		Teams(format: AreGamesInProgressFormat): Observable<Array<Team>> {
			return this.http.get<Array<Team>>(this.baseUri + format + '/Teams', {});
		}
	}

	export enum AreGamesInProgressFormat { XML = 0, JSON = 1 }

}

