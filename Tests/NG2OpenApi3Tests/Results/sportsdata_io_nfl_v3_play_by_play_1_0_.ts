import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Play {
		Created?: string | null;
		Description?: string | null;
		Distance?: number | null;
		Down?: number | null;
		IsScoringPlay?: boolean | null;
		Opponent?: string | null;
		PlayID?: number | null;
		PlayStats?: Array<PlayStat>;
		PlayTime?: string | null;
		QuarterID?: number | null;
		QuarterName?: string | null;
		ScoringPlay?: ScoringPlay;
		Sequence?: number | null;
		Team?: string | null;
		TimeRemainingMinutes?: number | null;
		TimeRemainingSeconds?: number | null;
		Type?: string | null;
		Updated?: string | null;
		YardLine?: number | null;
		YardLineTerritory?: string | null;
		YardsGained?: number | null;
		YardsToEndZone?: number | null;
	}
	export interface PlayFormProperties {
		Created: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Distance: FormControl<number | null | undefined>,
		Down: FormControl<number | null | undefined>,
		IsScoringPlay: FormControl<boolean | null | undefined>,
		Opponent: FormControl<string | null | undefined>,
		PlayID: FormControl<number | null | undefined>,
		PlayTime: FormControl<string | null | undefined>,
		QuarterID: FormControl<number | null | undefined>,
		QuarterName: FormControl<string | null | undefined>,
		Sequence: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,
		TimeRemainingMinutes: FormControl<number | null | undefined>,
		TimeRemainingSeconds: FormControl<number | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Updated: FormControl<string | null | undefined>,
		YardLine: FormControl<number | null | undefined>,
		YardLineTerritory: FormControl<string | null | undefined>,
		YardsGained: FormControl<number | null | undefined>,
		YardsToEndZone: FormControl<number | null | undefined>,
	}
	export function CreatePlayFormGroup() {
		return new FormGroup<PlayFormProperties>({
			Created: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Distance: new FormControl<number | null | undefined>(undefined),
			Down: new FormControl<number | null | undefined>(undefined),
			IsScoringPlay: new FormControl<boolean | null | undefined>(undefined),
			Opponent: new FormControl<string | null | undefined>(undefined),
			PlayID: new FormControl<number | null | undefined>(undefined),
			PlayTime: new FormControl<string | null | undefined>(undefined),
			QuarterID: new FormControl<number | null | undefined>(undefined),
			QuarterName: new FormControl<string | null | undefined>(undefined),
			Sequence: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TimeRemainingMinutes: new FormControl<number | null | undefined>(undefined),
			TimeRemainingSeconds: new FormControl<number | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
			YardLine: new FormControl<number | null | undefined>(undefined),
			YardLineTerritory: new FormControl<string | null | undefined>(undefined),
			YardsGained: new FormControl<number | null | undefined>(undefined),
			YardsToEndZone: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PlayStat {
		AssistedTackles?: number | null;
		BlockedKickReturnTouchdowns?: number | null;
		BlockedKickReturnYards?: number | null;
		BlockedKickReturns?: number | null;
		BlockedKicks?: number | null;
		Created?: string | null;
		Direction?: string | null;
		ExtraPointsAttempted?: number | null;
		ExtraPointsHadBlocked?: number | null;
		ExtraPointsMade?: number | null;
		FieldGoalReturnTouchdowns?: number | null;
		FieldGoalReturnYards?: number | null;
		FieldGoalReturns?: number | null;
		FieldGoalsAttempted?: number | null;
		FieldGoalsHadBlocked?: number | null;
		FieldGoalsMade?: number | null;
		FieldGoalsYards?: number | null;
		FumbleReturnTouchdowns?: number | null;
		FumbleReturnYards?: number | null;
		Fumbles?: number | null;
		FumblesForced?: number | null;
		FumblesLost?: number | null;
		FumblesRecovered?: number | null;
		HomeOrAway?: string | null;
		InterceptionReturnTouchdowns?: number | null;
		InterceptionReturnYards?: number | null;
		Interceptions?: number | null;
		KickReturnTouchdowns?: number | null;
		KickReturnYards?: number | null;
		KickReturns?: number | null;
		KickoffTouchbacks?: number | null;
		KickoffYards?: number | null;
		Kickoffs?: number | null;
		Name?: string | null;
		Opponent?: string | null;
		PassesDefended?: number | null;
		PassingAttempts?: number | null;
		PassingCompletions?: number | null;
		PassingInterceptions?: number | null;
		PassingSackYards?: number | null;
		PassingSacks?: number | null;
		PassingTouchdowns?: number | null;
		PassingYards?: number | null;
		Penalties?: number | null;
		PenaltyYards?: number | null;
		PlayID?: number | null;
		PlayStatID?: number | null;
		PlayerID?: number | null;
		PuntReturnTouchdowns?: number | null;
		PuntReturnYards?: number | null;
		PuntReturns?: number | null;
		PuntTouchbacks?: number | null;
		PuntYards?: number | null;
		Punts?: number | null;
		PuntsHadBlocked?: number | null;
		ReceivingTargets?: number | null;
		ReceivingTouchdowns?: number | null;
		ReceivingYards?: number | null;
		Receptions?: number | null;
		RushingAttempts?: number | null;
		RushingTouchdowns?: number | null;
		RushingYards?: number | null;
		SackYards?: number | null;
		Sacks?: number | null;
		Safeties?: number | null;
		Sequence?: number | null;
		SoloTackles?: number | null;
		TacklesForLoss?: number | null;
		Team?: string | null;
		TwoPointConversionAttempts?: number | null;
		TwoPointConversionPasses?: number | null;
		TwoPointConversionReceptions?: number | null;
		TwoPointConversionReturns?: number | null;
		TwoPointConversionRuns?: number | null;
		Updated?: string | null;
	}
	export interface PlayStatFormProperties {
		AssistedTackles: FormControl<number | null | undefined>,
		BlockedKickReturnTouchdowns: FormControl<number | null | undefined>,
		BlockedKickReturnYards: FormControl<number | null | undefined>,
		BlockedKickReturns: FormControl<number | null | undefined>,
		BlockedKicks: FormControl<number | null | undefined>,
		Created: FormControl<string | null | undefined>,
		Direction: FormControl<string | null | undefined>,
		ExtraPointsAttempted: FormControl<number | null | undefined>,
		ExtraPointsHadBlocked: FormControl<number | null | undefined>,
		ExtraPointsMade: FormControl<number | null | undefined>,
		FieldGoalReturnTouchdowns: FormControl<number | null | undefined>,
		FieldGoalReturnYards: FormControl<number | null | undefined>,
		FieldGoalReturns: FormControl<number | null | undefined>,
		FieldGoalsAttempted: FormControl<number | null | undefined>,
		FieldGoalsHadBlocked: FormControl<number | null | undefined>,
		FieldGoalsMade: FormControl<number | null | undefined>,
		FieldGoalsYards: FormControl<number | null | undefined>,
		FumbleReturnTouchdowns: FormControl<number | null | undefined>,
		FumbleReturnYards: FormControl<number | null | undefined>,
		Fumbles: FormControl<number | null | undefined>,
		FumblesForced: FormControl<number | null | undefined>,
		FumblesLost: FormControl<number | null | undefined>,
		FumblesRecovered: FormControl<number | null | undefined>,
		HomeOrAway: FormControl<string | null | undefined>,
		InterceptionReturnTouchdowns: FormControl<number | null | undefined>,
		InterceptionReturnYards: FormControl<number | null | undefined>,
		Interceptions: FormControl<number | null | undefined>,
		KickReturnTouchdowns: FormControl<number | null | undefined>,
		KickReturnYards: FormControl<number | null | undefined>,
		KickReturns: FormControl<number | null | undefined>,
		KickoffTouchbacks: FormControl<number | null | undefined>,
		KickoffYards: FormControl<number | null | undefined>,
		Kickoffs: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Opponent: FormControl<string | null | undefined>,
		PassesDefended: FormControl<number | null | undefined>,
		PassingAttempts: FormControl<number | null | undefined>,
		PassingCompletions: FormControl<number | null | undefined>,
		PassingInterceptions: FormControl<number | null | undefined>,
		PassingSackYards: FormControl<number | null | undefined>,
		PassingSacks: FormControl<number | null | undefined>,
		PassingTouchdowns: FormControl<number | null | undefined>,
		PassingYards: FormControl<number | null | undefined>,
		Penalties: FormControl<number | null | undefined>,
		PenaltyYards: FormControl<number | null | undefined>,
		PlayID: FormControl<number | null | undefined>,
		PlayStatID: FormControl<number | null | undefined>,
		PlayerID: FormControl<number | null | undefined>,
		PuntReturnTouchdowns: FormControl<number | null | undefined>,
		PuntReturnYards: FormControl<number | null | undefined>,
		PuntReturns: FormControl<number | null | undefined>,
		PuntTouchbacks: FormControl<number | null | undefined>,
		PuntYards: FormControl<number | null | undefined>,
		Punts: FormControl<number | null | undefined>,
		PuntsHadBlocked: FormControl<number | null | undefined>,
		ReceivingTargets: FormControl<number | null | undefined>,
		ReceivingTouchdowns: FormControl<number | null | undefined>,
		ReceivingYards: FormControl<number | null | undefined>,
		Receptions: FormControl<number | null | undefined>,
		RushingAttempts: FormControl<number | null | undefined>,
		RushingTouchdowns: FormControl<number | null | undefined>,
		RushingYards: FormControl<number | null | undefined>,
		SackYards: FormControl<number | null | undefined>,
		Sacks: FormControl<number | null | undefined>,
		Safeties: FormControl<number | null | undefined>,
		Sequence: FormControl<number | null | undefined>,
		SoloTackles: FormControl<number | null | undefined>,
		TacklesForLoss: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,
		TwoPointConversionAttempts: FormControl<number | null | undefined>,
		TwoPointConversionPasses: FormControl<number | null | undefined>,
		TwoPointConversionReceptions: FormControl<number | null | undefined>,
		TwoPointConversionReturns: FormControl<number | null | undefined>,
		TwoPointConversionRuns: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
	}
	export function CreatePlayStatFormGroup() {
		return new FormGroup<PlayStatFormProperties>({
			AssistedTackles: new FormControl<number | null | undefined>(undefined),
			BlockedKickReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			BlockedKickReturnYards: new FormControl<number | null | undefined>(undefined),
			BlockedKickReturns: new FormControl<number | null | undefined>(undefined),
			BlockedKicks: new FormControl<number | null | undefined>(undefined),
			Created: new FormControl<string | null | undefined>(undefined),
			Direction: new FormControl<string | null | undefined>(undefined),
			ExtraPointsAttempted: new FormControl<number | null | undefined>(undefined),
			ExtraPointsHadBlocked: new FormControl<number | null | undefined>(undefined),
			ExtraPointsMade: new FormControl<number | null | undefined>(undefined),
			FieldGoalReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			FieldGoalReturnYards: new FormControl<number | null | undefined>(undefined),
			FieldGoalReturns: new FormControl<number | null | undefined>(undefined),
			FieldGoalsAttempted: new FormControl<number | null | undefined>(undefined),
			FieldGoalsHadBlocked: new FormControl<number | null | undefined>(undefined),
			FieldGoalsMade: new FormControl<number | null | undefined>(undefined),
			FieldGoalsYards: new FormControl<number | null | undefined>(undefined),
			FumbleReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			FumbleReturnYards: new FormControl<number | null | undefined>(undefined),
			Fumbles: new FormControl<number | null | undefined>(undefined),
			FumblesForced: new FormControl<number | null | undefined>(undefined),
			FumblesLost: new FormControl<number | null | undefined>(undefined),
			FumblesRecovered: new FormControl<number | null | undefined>(undefined),
			HomeOrAway: new FormControl<string | null | undefined>(undefined),
			InterceptionReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			InterceptionReturnYards: new FormControl<number | null | undefined>(undefined),
			Interceptions: new FormControl<number | null | undefined>(undefined),
			KickReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			KickReturnYards: new FormControl<number | null | undefined>(undefined),
			KickReturns: new FormControl<number | null | undefined>(undefined),
			KickoffTouchbacks: new FormControl<number | null | undefined>(undefined),
			KickoffYards: new FormControl<number | null | undefined>(undefined),
			Kickoffs: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Opponent: new FormControl<string | null | undefined>(undefined),
			PassesDefended: new FormControl<number | null | undefined>(undefined),
			PassingAttempts: new FormControl<number | null | undefined>(undefined),
			PassingCompletions: new FormControl<number | null | undefined>(undefined),
			PassingInterceptions: new FormControl<number | null | undefined>(undefined),
			PassingSackYards: new FormControl<number | null | undefined>(undefined),
			PassingSacks: new FormControl<number | null | undefined>(undefined),
			PassingTouchdowns: new FormControl<number | null | undefined>(undefined),
			PassingYards: new FormControl<number | null | undefined>(undefined),
			Penalties: new FormControl<number | null | undefined>(undefined),
			PenaltyYards: new FormControl<number | null | undefined>(undefined),
			PlayID: new FormControl<number | null | undefined>(undefined),
			PlayStatID: new FormControl<number | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			PuntReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			PuntReturnYards: new FormControl<number | null | undefined>(undefined),
			PuntReturns: new FormControl<number | null | undefined>(undefined),
			PuntTouchbacks: new FormControl<number | null | undefined>(undefined),
			PuntYards: new FormControl<number | null | undefined>(undefined),
			Punts: new FormControl<number | null | undefined>(undefined),
			PuntsHadBlocked: new FormControl<number | null | undefined>(undefined),
			ReceivingTargets: new FormControl<number | null | undefined>(undefined),
			ReceivingTouchdowns: new FormControl<number | null | undefined>(undefined),
			ReceivingYards: new FormControl<number | null | undefined>(undefined),
			Receptions: new FormControl<number | null | undefined>(undefined),
			RushingAttempts: new FormControl<number | null | undefined>(undefined),
			RushingTouchdowns: new FormControl<number | null | undefined>(undefined),
			RushingYards: new FormControl<number | null | undefined>(undefined),
			SackYards: new FormControl<number | null | undefined>(undefined),
			Sacks: new FormControl<number | null | undefined>(undefined),
			Safeties: new FormControl<number | null | undefined>(undefined),
			Sequence: new FormControl<number | null | undefined>(undefined),
			SoloTackles: new FormControl<number | null | undefined>(undefined),
			TacklesForLoss: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TwoPointConversionAttempts: new FormControl<number | null | undefined>(undefined),
			TwoPointConversionPasses: new FormControl<number | null | undefined>(undefined),
			TwoPointConversionReceptions: new FormControl<number | null | undefined>(undefined),
			TwoPointConversionReturns: new FormControl<number | null | undefined>(undefined),
			TwoPointConversionRuns: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlayByPlay {
		Plays?: Array<Play>;
		Quarters?: Array<Quarter>;
		Score?: Score;
	}
	export interface PlayByPlayFormProperties {
	}
	export function CreatePlayByPlayFormGroup() {
		return new FormGroup<PlayByPlayFormProperties>({
		});

	}

	export interface Quarter {
		AwayTeamScore?: number | null;
		Created?: string | null;
		Description?: string | null;
		HomeTeamScore?: number | null;
		Name?: string | null;
		Number?: number | null;
		QuarterID?: number | null;
		ScoreID?: number | null;
		Updated?: string | null;
	}
	export interface QuarterFormProperties {
		AwayTeamScore: FormControl<number | null | undefined>,
		Created: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		HomeTeamScore: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Number: FormControl<number | null | undefined>,
		QuarterID: FormControl<number | null | undefined>,
		ScoreID: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
	}
	export function CreateQuarterFormGroup() {
		return new FormGroup<QuarterFormProperties>({
			AwayTeamScore: new FormControl<number | null | undefined>(undefined),
			Created: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			HomeTeamScore: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Number: new FormControl<number | null | undefined>(undefined),
			QuarterID: new FormControl<number | null | undefined>(undefined),
			ScoreID: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Score {
		Attendance?: number | null;
		AwayRotationNumber?: number | null;
		AwayScore?: number | null;
		AwayScoreOvertime?: number | null;
		AwayScoreQuarter1?: number | null;
		AwayScoreQuarter2?: number | null;
		AwayScoreQuarter3?: number | null;
		AwayScoreQuarter4?: number | null;
		AwayTeam?: string | null;
		AwayTeamID?: number | null;
		AwayTeamMoneyLine?: number | null;
		AwayTimeouts?: number | null;
		Canceled?: boolean | null;
		Channel?: string | null;
		Closed?: boolean | null;
		Date?: string | null;
		DateTime?: string | null;
		DateTimeUTC?: string | null;
		Day?: string | null;
		Distance?: string | null;
		Down?: number | null;
		DownAndDistance?: string | null;
		ForecastDescription?: string | null;
		ForecastTempHigh?: number | null;
		ForecastTempLow?: number | null;
		ForecastWindChill?: number | null;
		ForecastWindSpeed?: number | null;
		GameEndDateTime?: string | null;
		GameKey?: string | null;
		GeoLat?: number | null;
		GeoLong?: number | null;
		GlobalAwayTeamID?: number | null;
		GlobalGameID?: number | null;
		GlobalHomeTeamID?: number | null;
		Has1stQuarterStarted?: boolean | null;
		Has2ndQuarterStarted?: boolean | null;
		Has3rdQuarterStarted?: boolean | null;
		Has4thQuarterStarted?: boolean | null;
		HasStarted?: boolean | null;
		HomeRotationNumber?: number | null;
		HomeScore?: number | null;
		HomeScoreOvertime?: number | null;
		HomeScoreQuarter1?: number | null;
		HomeScoreQuarter2?: number | null;
		HomeScoreQuarter3?: number | null;
		HomeScoreQuarter4?: number | null;
		HomeTeam?: string | null;
		HomeTeamID?: number | null;
		HomeTeamMoneyLine?: number | null;
		HomeTimeouts?: number | null;
		IsInProgress?: boolean | null;
		IsOver?: boolean | null;
		IsOvertime?: boolean | null;
		LastPlay?: string | null;
		LastUpdated?: string | null;
		NeutralVenue?: boolean | null;
		OverPayout?: number | null;
		OverUnder?: number | null;
		PointSpread?: number | null;
		PointSpreadAwayTeamMoneyLine?: number | null;
		PointSpreadHomeTeamMoneyLine?: number | null;
		Possession?: string | null;
		Quarter?: string | null;
		QuarterDescription?: string | null;
		RedZone?: string | null;
		RefereeID?: number | null;
		ScoreID?: number | null;
		Season?: number | null;
		SeasonType?: number | null;
		StadiumDetails?: Stadium;
		StadiumID?: number | null;
		Status?: string | null;
		TimeRemaining?: string | null;
		UnderPayout?: number | null;
		Week?: number | null;
		YardLine?: number | null;
		YardLineTerritory?: string | null;
	}
	export interface ScoreFormProperties {
		Attendance: FormControl<number | null | undefined>,
		AwayRotationNumber: FormControl<number | null | undefined>,
		AwayScore: FormControl<number | null | undefined>,
		AwayScoreOvertime: FormControl<number | null | undefined>,
		AwayScoreQuarter1: FormControl<number | null | undefined>,
		AwayScoreQuarter2: FormControl<number | null | undefined>,
		AwayScoreQuarter3: FormControl<number | null | undefined>,
		AwayScoreQuarter4: FormControl<number | null | undefined>,
		AwayTeam: FormControl<string | null | undefined>,
		AwayTeamID: FormControl<number | null | undefined>,
		AwayTeamMoneyLine: FormControl<number | null | undefined>,
		AwayTimeouts: FormControl<number | null | undefined>,
		Canceled: FormControl<boolean | null | undefined>,
		Channel: FormControl<string | null | undefined>,
		Closed: FormControl<boolean | null | undefined>,
		Date: FormControl<string | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		DateTimeUTC: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,
		Distance: FormControl<string | null | undefined>,
		Down: FormControl<number | null | undefined>,
		DownAndDistance: FormControl<string | null | undefined>,
		ForecastDescription: FormControl<string | null | undefined>,
		ForecastTempHigh: FormControl<number | null | undefined>,
		ForecastTempLow: FormControl<number | null | undefined>,
		ForecastWindChill: FormControl<number | null | undefined>,
		ForecastWindSpeed: FormControl<number | null | undefined>,
		GameEndDateTime: FormControl<string | null | undefined>,
		GameKey: FormControl<string | null | undefined>,
		GeoLat: FormControl<number | null | undefined>,
		GeoLong: FormControl<number | null | undefined>,
		GlobalAwayTeamID: FormControl<number | null | undefined>,
		GlobalGameID: FormControl<number | null | undefined>,
		GlobalHomeTeamID: FormControl<number | null | undefined>,
		Has1stQuarterStarted: FormControl<boolean | null | undefined>,
		Has2ndQuarterStarted: FormControl<boolean | null | undefined>,
		Has3rdQuarterStarted: FormControl<boolean | null | undefined>,
		Has4thQuarterStarted: FormControl<boolean | null | undefined>,
		HasStarted: FormControl<boolean | null | undefined>,
		HomeRotationNumber: FormControl<number | null | undefined>,
		HomeScore: FormControl<number | null | undefined>,
		HomeScoreOvertime: FormControl<number | null | undefined>,
		HomeScoreQuarter1: FormControl<number | null | undefined>,
		HomeScoreQuarter2: FormControl<number | null | undefined>,
		HomeScoreQuarter3: FormControl<number | null | undefined>,
		HomeScoreQuarter4: FormControl<number | null | undefined>,
		HomeTeam: FormControl<string | null | undefined>,
		HomeTeamID: FormControl<number | null | undefined>,
		HomeTeamMoneyLine: FormControl<number | null | undefined>,
		HomeTimeouts: FormControl<number | null | undefined>,
		IsInProgress: FormControl<boolean | null | undefined>,
		IsOver: FormControl<boolean | null | undefined>,
		IsOvertime: FormControl<boolean | null | undefined>,
		LastPlay: FormControl<string | null | undefined>,
		LastUpdated: FormControl<string | null | undefined>,
		NeutralVenue: FormControl<boolean | null | undefined>,
		OverPayout: FormControl<number | null | undefined>,
		OverUnder: FormControl<number | null | undefined>,
		PointSpread: FormControl<number | null | undefined>,
		PointSpreadAwayTeamMoneyLine: FormControl<number | null | undefined>,
		PointSpreadHomeTeamMoneyLine: FormControl<number | null | undefined>,
		Possession: FormControl<string | null | undefined>,
		Quarter: FormControl<string | null | undefined>,
		QuarterDescription: FormControl<string | null | undefined>,
		RedZone: FormControl<string | null | undefined>,
		RefereeID: FormControl<number | null | undefined>,
		ScoreID: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		StadiumID: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,
		TimeRemaining: FormControl<string | null | undefined>,
		UnderPayout: FormControl<number | null | undefined>,
		Week: FormControl<number | null | undefined>,
		YardLine: FormControl<number | null | undefined>,
		YardLineTerritory: FormControl<string | null | undefined>,
	}
	export function CreateScoreFormGroup() {
		return new FormGroup<ScoreFormProperties>({
			Attendance: new FormControl<number | null | undefined>(undefined),
			AwayRotationNumber: new FormControl<number | null | undefined>(undefined),
			AwayScore: new FormControl<number | null | undefined>(undefined),
			AwayScoreOvertime: new FormControl<number | null | undefined>(undefined),
			AwayScoreQuarter1: new FormControl<number | null | undefined>(undefined),
			AwayScoreQuarter2: new FormControl<number | null | undefined>(undefined),
			AwayScoreQuarter3: new FormControl<number | null | undefined>(undefined),
			AwayScoreQuarter4: new FormControl<number | null | undefined>(undefined),
			AwayTeam: new FormControl<string | null | undefined>(undefined),
			AwayTeamID: new FormControl<number | null | undefined>(undefined),
			AwayTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			AwayTimeouts: new FormControl<number | null | undefined>(undefined),
			Canceled: new FormControl<boolean | null | undefined>(undefined),
			Channel: new FormControl<string | null | undefined>(undefined),
			Closed: new FormControl<boolean | null | undefined>(undefined),
			Date: new FormControl<string | null | undefined>(undefined),
			DateTime: new FormControl<string | null | undefined>(undefined),
			DateTimeUTC: new FormControl<string | null | undefined>(undefined),
			Day: new FormControl<string | null | undefined>(undefined),
			Distance: new FormControl<string | null | undefined>(undefined),
			Down: new FormControl<number | null | undefined>(undefined),
			DownAndDistance: new FormControl<string | null | undefined>(undefined),
			ForecastDescription: new FormControl<string | null | undefined>(undefined),
			ForecastTempHigh: new FormControl<number | null | undefined>(undefined),
			ForecastTempLow: new FormControl<number | null | undefined>(undefined),
			ForecastWindChill: new FormControl<number | null | undefined>(undefined),
			ForecastWindSpeed: new FormControl<number | null | undefined>(undefined),
			GameEndDateTime: new FormControl<string | null | undefined>(undefined),
			GameKey: new FormControl<string | null | undefined>(undefined),
			GeoLat: new FormControl<number | null | undefined>(undefined),
			GeoLong: new FormControl<number | null | undefined>(undefined),
			GlobalAwayTeamID: new FormControl<number | null | undefined>(undefined),
			GlobalGameID: new FormControl<number | null | undefined>(undefined),
			GlobalHomeTeamID: new FormControl<number | null | undefined>(undefined),
			Has1stQuarterStarted: new FormControl<boolean | null | undefined>(undefined),
			Has2ndQuarterStarted: new FormControl<boolean | null | undefined>(undefined),
			Has3rdQuarterStarted: new FormControl<boolean | null | undefined>(undefined),
			Has4thQuarterStarted: new FormControl<boolean | null | undefined>(undefined),
			HasStarted: new FormControl<boolean | null | undefined>(undefined),
			HomeRotationNumber: new FormControl<number | null | undefined>(undefined),
			HomeScore: new FormControl<number | null | undefined>(undefined),
			HomeScoreOvertime: new FormControl<number | null | undefined>(undefined),
			HomeScoreQuarter1: new FormControl<number | null | undefined>(undefined),
			HomeScoreQuarter2: new FormControl<number | null | undefined>(undefined),
			HomeScoreQuarter3: new FormControl<number | null | undefined>(undefined),
			HomeScoreQuarter4: new FormControl<number | null | undefined>(undefined),
			HomeTeam: new FormControl<string | null | undefined>(undefined),
			HomeTeamID: new FormControl<number | null | undefined>(undefined),
			HomeTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			HomeTimeouts: new FormControl<number | null | undefined>(undefined),
			IsInProgress: new FormControl<boolean | null | undefined>(undefined),
			IsOver: new FormControl<boolean | null | undefined>(undefined),
			IsOvertime: new FormControl<boolean | null | undefined>(undefined),
			LastPlay: new FormControl<string | null | undefined>(undefined),
			LastUpdated: new FormControl<string | null | undefined>(undefined),
			NeutralVenue: new FormControl<boolean | null | undefined>(undefined),
			OverPayout: new FormControl<number | null | undefined>(undefined),
			OverUnder: new FormControl<number | null | undefined>(undefined),
			PointSpread: new FormControl<number | null | undefined>(undefined),
			PointSpreadAwayTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			PointSpreadHomeTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			Possession: new FormControl<string | null | undefined>(undefined),
			Quarter: new FormControl<string | null | undefined>(undefined),
			QuarterDescription: new FormControl<string | null | undefined>(undefined),
			RedZone: new FormControl<string | null | undefined>(undefined),
			RefereeID: new FormControl<number | null | undefined>(undefined),
			ScoreID: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			StadiumID: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			TimeRemaining: new FormControl<string | null | undefined>(undefined),
			UnderPayout: new FormControl<number | null | undefined>(undefined),
			Week: new FormControl<number | null | undefined>(undefined),
			YardLine: new FormControl<number | null | undefined>(undefined),
			YardLineTerritory: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ScoringPlay {
		AwayScore?: number | null;
		AwayTeam?: string | null;
		Date?: string | null;
		GameKey?: string | null;
		HomeScore?: number | null;
		HomeTeam?: string | null;
		PlayDescription?: string | null;
		Quarter?: string | null;
		ScoreID?: number | null;
		ScoringPlayID?: number | null;
		Season?: number | null;
		SeasonType?: number | null;
		Sequence?: number | null;
		Team?: string | null;
		TimeRemaining?: string | null;
		Week?: number | null;
	}
	export interface ScoringPlayFormProperties {
		AwayScore: FormControl<number | null | undefined>,
		AwayTeam: FormControl<string | null | undefined>,
		Date: FormControl<string | null | undefined>,
		GameKey: FormControl<string | null | undefined>,
		HomeScore: FormControl<number | null | undefined>,
		HomeTeam: FormControl<string | null | undefined>,
		PlayDescription: FormControl<string | null | undefined>,
		Quarter: FormControl<string | null | undefined>,
		ScoreID: FormControl<number | null | undefined>,
		ScoringPlayID: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		Sequence: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,
		TimeRemaining: FormControl<string | null | undefined>,
		Week: FormControl<number | null | undefined>,
	}
	export function CreateScoringPlayFormGroup() {
		return new FormGroup<ScoringPlayFormProperties>({
			AwayScore: new FormControl<number | null | undefined>(undefined),
			AwayTeam: new FormControl<string | null | undefined>(undefined),
			Date: new FormControl<string | null | undefined>(undefined),
			GameKey: new FormControl<string | null | undefined>(undefined),
			HomeScore: new FormControl<number | null | undefined>(undefined),
			HomeTeam: new FormControl<string | null | undefined>(undefined),
			PlayDescription: new FormControl<string | null | undefined>(undefined),
			Quarter: new FormControl<string | null | undefined>(undefined),
			ScoreID: new FormControl<number | null | undefined>(undefined),
			ScoringPlayID: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			Sequence: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TimeRemaining: new FormControl<string | null | undefined>(undefined),
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
		 * Play By Play
		 * Get {format}/PlayByPlay/{season}/{week}/{hometeam}
		 * @param {PlayByPlayFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season and the season type. If no season type is provided, then the default is regular season.
		 *           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
		 *         
		 * @param {string} week Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.
		 *           Example: <code>1</code>
		 *         
		 * @param {string} hometeam Abbreviation of the home team. Example: <code>WAS</code>.
		 * @return {PlayByPlay} 
		 */
		PlayByPlay(format: PlayByPlayFormat, season: string, week: string, hometeam: string): Observable<PlayByPlay> {
			return this.http.get<PlayByPlay>(this.baseUri + format + '/PlayByPlay/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (week == null ? '' : encodeURIComponent(week)) + '/' + (hometeam == null ? '' : encodeURIComponent(hometeam)) + '', {});
		}

		/**
		 * Play By Play Delta
		 * Get {format}/PlayByPlayDelta/{season}/{week}/{minutes}
		 * @param {PlayByPlayFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season and the season type. If no season type is provided, then the default is regular season.
		 *           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
		 *         
		 * @param {string} week Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.
		 *           Example: <code>1</code>
		 *         
		 * @param {string} minutes Only returns player statistics that have changed in the last X minutes.  You specify how many minutes in time to go back.  Valid entries are:<br>
		 *           <code>1</code> or <code>2</code>.
		 *         
		 * @return {Array<PlayByPlay>} 
		 */
		PlayByPlayDelta(format: PlayByPlayFormat, season: string, week: string, minutes: string): Observable<Array<PlayByPlay>> {
			return this.http.get<Array<PlayByPlay>>(this.baseUri + format + '/PlayByPlayDelta/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (week == null ? '' : encodeURIComponent(week)) + '/' + (minutes == null ? '' : encodeURIComponent(minutes)) + '', {});
		}

		/**
		 * Play By Play Simulation
		 * Gets simulated live play-by-play of NFL games, covering the Conference Championship games on January 21, 2018.
		 * Get {format}/SimulatedPlayByPlay/{numberofplays}
		 * @param {PlayByPlayFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} numberofplays The number of plays to progress in this NFL live game simulation. Example entries are <code>0</code>, <code>1</code>, <code>2</code>, <code>3</code>, <code>150</code>, <code>200</code>, etc.
		 * @return {Array<PlayByPlay>} 
		 */
		PlayByPlaySimulation(format: PlayByPlayFormat, numberofplays: string): Observable<Array<PlayByPlay>> {
			return this.http.get<Array<PlayByPlay>>(this.baseUri + format + '/SimulatedPlayByPlay/' + (numberofplays == null ? '' : encodeURIComponent(numberofplays)) + '', {});
		}
	}

	export enum PlayByPlayFormat { XML = 0, JSON = 1 }

}

