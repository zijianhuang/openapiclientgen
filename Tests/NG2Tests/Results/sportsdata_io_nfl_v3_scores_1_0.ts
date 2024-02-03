import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Bye {
		Season?: number | null;
		Team?: string | null;
		Week?: number | null;
	}
	export interface ByeFormProperties {
		Season: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,
		Week: FormControl<number | null | undefined>,
	}
	export function CreateByeFormGroup() {
		return new FormGroup<ByeFormProperties>({
			Season: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			Week: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Game {
		AwayAssistedTackles?: number | null;
		AwayBlockedKickReturnTouchdowns?: number | null;
		AwayBlockedKickReturnYards?: number | null;
		AwayBlockedKicks?: number | null;
		AwayCompletionPercentage?: number | null;
		AwayExtraPointKickingAttempts?: number | null;
		AwayExtraPointKickingConversions?: number | null;
		AwayExtraPointPassingAttempts?: number | null;
		AwayExtraPointPassingConversions?: number | null;
		AwayExtraPointRushingAttempts?: number | null;
		AwayExtraPointRushingConversions?: number | null;
		AwayExtraPointsHadBlocked?: number | null;
		AwayFieldGoalAttempts?: number | null;
		AwayFieldGoalReturnTouchdowns?: number | null;
		AwayFieldGoalReturnYards?: number | null;
		AwayFieldGoalsHadBlocked?: number | null;
		AwayFieldGoalsMade?: number | null;
		AwayFirstDowns?: number | null;
		AwayFirstDownsByPassing?: number | null;
		AwayFirstDownsByPenalty?: number | null;
		AwayFirstDownsByRushing?: number | null;
		AwayFourthDownAttempts?: number | null;
		AwayFourthDownConversions?: number | null;
		AwayFourthDownPercentage?: number | null;
		AwayFumbleReturnTouchdowns?: number | null;
		AwayFumbleReturnYards?: number | null;
		AwayFumbles?: number | null;
		AwayFumblesForced?: number | null;
		AwayFumblesLost?: number | null;
		AwayFumblesRecovered?: number | null;
		AwayGiveaways?: number | null;
		AwayGoalToGoAttempts?: number | null;
		AwayGoalToGoConversions?: number | null;
		AwayInterceptionReturnTouchdowns?: number | null;
		AwayInterceptionReturnYards?: number | null;
		AwayInterceptionReturns?: number | null;
		AwayKickReturnLong?: number | null;
		AwayKickReturnTouchdowns?: number | null;
		AwayKickReturnYards?: number | null;
		AwayKickReturns?: number | null;
		AwayKickoffTouchbacks?: number | null;
		AwayKickoffs?: number | null;
		AwayKickoffsInEndZone?: number | null;
		AwayOffensivePlays?: number | null;
		AwayOffensiveYards?: number | null;
		AwayOffensiveYardsPerPlay?: number | null;
		AwayPasserRating?: number | null;
		AwayPassesDefended?: number | null;
		AwayPassingAttempts?: number | null;
		AwayPassingCompletions?: number | null;
		AwayPassingInterceptions?: number | null;
		AwayPassingTouchdowns?: number | null;
		AwayPassingYards?: number | null;
		AwayPassingYardsPerAttempt?: number | null;
		AwayPassingYardsPerCompletion?: number | null;
		AwayPenalties?: number | null;
		AwayPenaltyYards?: number | null;
		AwayPuntAverage?: number | null;
		AwayPuntNetAverage?: number | null;
		AwayPuntNetYards?: number | null;
		AwayPuntReturnLong?: number | null;
		AwayPuntReturnTouchdowns?: number | null;
		AwayPuntReturnYards?: number | null;
		AwayPuntReturns?: number | null;
		AwayPuntYards?: number | null;
		AwayPunts?: number | null;
		AwayPuntsHadBlocked?: number | null;
		AwayQuarterbackHits?: number | null;
		AwayRedZoneAttempts?: number | null;
		AwayRedZoneConversions?: number | null;
		AwayReturnYards?: number | null;
		AwayRushingAttempts?: number | null;
		AwayRushingTouchdowns?: number | null;
		AwayRushingYards?: number | null;
		AwayRushingYardsPerAttempt?: number | null;
		AwaySackYards?: number | null;
		AwaySacks?: number | null;
		AwaySafeties?: number | null;
		AwayScore?: number | null;
		AwayScoreOvertime?: number | null;
		AwayScoreQuarter1?: number | null;
		AwayScoreQuarter2?: number | null;
		AwayScoreQuarter3?: number | null;
		AwayScoreQuarter4?: number | null;
		AwaySoloTackles?: number | null;
		AwayTacklesForLoss?: number | null;
		AwayTakeaways?: number | null;
		AwayTeam?: string | null;
		AwayThirdDownAttempts?: number | null;
		AwayThirdDownConversions?: number | null;
		AwayThirdDownPercentage?: number | null;
		AwayTimeOfPossession?: string | null;
		AwayTimesSacked?: number | null;
		AwayTimesSackedYards?: number | null;
		AwayTouchdowns?: number | null;
		AwayTurnoverDifferential?: number | null;
		AwayTwoPointConversionReturns?: number | null;
		Date?: string | null;
		GameID?: number | null;
		GameKey?: string | null;
		HomeAssistedTackles?: number | null;
		HomeBlockedKickReturnTouchdowns?: number | null;
		HomeBlockedKickReturnYards?: number | null;
		HomeBlockedKicks?: number | null;
		HomeCompletionPercentage?: number | null;
		HomeExtraPointKickingAttempts?: number | null;
		HomeExtraPointKickingConversions?: number | null;
		HomeExtraPointPassingAttempts?: number | null;
		HomeExtraPointPassingConversions?: number | null;
		HomeExtraPointRushingAttempts?: number | null;
		HomeExtraPointRushingConversions?: number | null;
		HomeExtraPointsHadBlocked?: number | null;
		HomeFieldGoalAttempts?: number | null;
		HomeFieldGoalReturnTouchdowns?: number | null;
		HomeFieldGoalReturnYards?: number | null;
		HomeFieldGoalsHadBlocked?: number | null;
		HomeFieldGoalsMade?: number | null;
		HomeFirstDowns?: number | null;
		HomeFirstDownsByPassing?: number | null;
		HomeFirstDownsByPenalty?: number | null;
		HomeFirstDownsByRushing?: number | null;
		HomeFourthDownAttempts?: number | null;
		HomeFourthDownConversions?: number | null;
		HomeFourthDownPercentage?: number | null;
		HomeFumbleReturnTouchdowns?: number | null;
		HomeFumbleReturnYards?: number | null;
		HomeFumbles?: number | null;
		HomeFumblesForced?: number | null;
		HomeFumblesLost?: number | null;
		HomeFumblesRecovered?: number | null;
		HomeGiveaways?: number | null;
		HomeGoalToGoAttempts?: number | null;
		HomeGoalToGoConversions?: number | null;
		HomeInterceptionReturnTouchdowns?: number | null;
		HomeInterceptionReturnYards?: number | null;
		HomeInterceptionReturns?: number | null;
		HomeKickReturnLong?: number | null;
		HomeKickReturnTouchdowns?: number | null;
		HomeKickReturnYards?: number | null;
		HomeKickReturns?: number | null;
		HomeKickoffTouchbacks?: number | null;
		HomeKickoffs?: number | null;
		HomeKickoffsInEndZone?: number | null;
		HomeOffensivePlays?: number | null;
		HomeOffensiveYards?: number | null;
		HomeOffensiveYardsPerPlay?: number | null;
		HomePasserRating?: number | null;
		HomePassesDefended?: number | null;
		HomePassingAttempts?: number | null;
		HomePassingCompletions?: number | null;
		HomePassingInterceptions?: number | null;
		HomePassingTouchdowns?: number | null;
		HomePassingYards?: number | null;
		HomePassingYardsPerAttempt?: number | null;
		HomePassingYardsPerCompletion?: number | null;
		HomePenalties?: number | null;
		HomePenaltyYards?: number | null;
		HomePuntAverage?: number | null;
		HomePuntNetAverage?: number | null;
		HomePuntNetYards?: number | null;
		HomePuntReturnLong?: number | null;
		HomePuntReturnTouchdowns?: number | null;
		HomePuntReturnYards?: number | null;
		HomePuntReturns?: number | null;
		HomePuntYards?: number | null;
		HomePunts?: number | null;
		HomePuntsHadBlocked?: number | null;
		HomeQuarterbackHits?: number | null;
		HomeRedZoneAttempts?: number | null;
		HomeRedZoneConversions?: number | null;
		HomeReturnYards?: number | null;
		HomeRushingAttempts?: number | null;
		HomeRushingTouchdowns?: number | null;
		HomeRushingYards?: number | null;
		HomeRushingYardsPerAttempt?: number | null;
		HomeSackYards?: number | null;
		HomeSacks?: number | null;
		HomeSafeties?: number | null;
		HomeScore?: number | null;
		HomeScoreOvertime?: number | null;
		HomeScoreQuarter1?: number | null;
		HomeScoreQuarter2?: number | null;
		HomeScoreQuarter3?: number | null;
		HomeScoreQuarter4?: number | null;
		HomeSoloTackles?: number | null;
		HomeTacklesForLoss?: number | null;
		HomeTakeaways?: number | null;
		HomeTeam?: string | null;
		HomeThirdDownAttempts?: number | null;
		HomeThirdDownConversions?: number | null;
		HomeThirdDownPercentage?: number | null;
		HomeTimeOfPossession?: string | null;
		HomeTimesSacked?: number | null;
		HomeTimesSackedYards?: number | null;
		HomeTouchdowns?: number | null;
		HomeTurnoverDifferential?: number | null;
		HomeTwoPointConversionReturns?: number | null;
		Humidity?: number | null;
		IsGameOver?: boolean | null;
		OverUnder?: number | null;
		PlayingSurface?: string | null;
		PointSpread?: number | null;
		ScoreID?: number | null;
		Season?: number | null;
		SeasonType?: number | null;
		Stadium?: string | null;
		StadiumDetails?: Stadium;
		StadiumID?: number | null;
		Temperature?: number | null;
		TotalScore?: number | null;
		Week?: number | null;
		WindSpeed?: number | null;
	}
	export interface GameFormProperties {
		AwayAssistedTackles: FormControl<number | null | undefined>,
		AwayBlockedKickReturnTouchdowns: FormControl<number | null | undefined>,
		AwayBlockedKickReturnYards: FormControl<number | null | undefined>,
		AwayBlockedKicks: FormControl<number | null | undefined>,
		AwayCompletionPercentage: FormControl<number | null | undefined>,
		AwayExtraPointKickingAttempts: FormControl<number | null | undefined>,
		AwayExtraPointKickingConversions: FormControl<number | null | undefined>,
		AwayExtraPointPassingAttempts: FormControl<number | null | undefined>,
		AwayExtraPointPassingConversions: FormControl<number | null | undefined>,
		AwayExtraPointRushingAttempts: FormControl<number | null | undefined>,
		AwayExtraPointRushingConversions: FormControl<number | null | undefined>,
		AwayExtraPointsHadBlocked: FormControl<number | null | undefined>,
		AwayFieldGoalAttempts: FormControl<number | null | undefined>,
		AwayFieldGoalReturnTouchdowns: FormControl<number | null | undefined>,
		AwayFieldGoalReturnYards: FormControl<number | null | undefined>,
		AwayFieldGoalsHadBlocked: FormControl<number | null | undefined>,
		AwayFieldGoalsMade: FormControl<number | null | undefined>,
		AwayFirstDowns: FormControl<number | null | undefined>,
		AwayFirstDownsByPassing: FormControl<number | null | undefined>,
		AwayFirstDownsByPenalty: FormControl<number | null | undefined>,
		AwayFirstDownsByRushing: FormControl<number | null | undefined>,
		AwayFourthDownAttempts: FormControl<number | null | undefined>,
		AwayFourthDownConversions: FormControl<number | null | undefined>,
		AwayFourthDownPercentage: FormControl<number | null | undefined>,
		AwayFumbleReturnTouchdowns: FormControl<number | null | undefined>,
		AwayFumbleReturnYards: FormControl<number | null | undefined>,
		AwayFumbles: FormControl<number | null | undefined>,
		AwayFumblesForced: FormControl<number | null | undefined>,
		AwayFumblesLost: FormControl<number | null | undefined>,
		AwayFumblesRecovered: FormControl<number | null | undefined>,
		AwayGiveaways: FormControl<number | null | undefined>,
		AwayGoalToGoAttempts: FormControl<number | null | undefined>,
		AwayGoalToGoConversions: FormControl<number | null | undefined>,
		AwayInterceptionReturnTouchdowns: FormControl<number | null | undefined>,
		AwayInterceptionReturnYards: FormControl<number | null | undefined>,
		AwayInterceptionReturns: FormControl<number | null | undefined>,
		AwayKickReturnLong: FormControl<number | null | undefined>,
		AwayKickReturnTouchdowns: FormControl<number | null | undefined>,
		AwayKickReturnYards: FormControl<number | null | undefined>,
		AwayKickReturns: FormControl<number | null | undefined>,
		AwayKickoffTouchbacks: FormControl<number | null | undefined>,
		AwayKickoffs: FormControl<number | null | undefined>,
		AwayKickoffsInEndZone: FormControl<number | null | undefined>,
		AwayOffensivePlays: FormControl<number | null | undefined>,
		AwayOffensiveYards: FormControl<number | null | undefined>,
		AwayOffensiveYardsPerPlay: FormControl<number | null | undefined>,
		AwayPasserRating: FormControl<number | null | undefined>,
		AwayPassesDefended: FormControl<number | null | undefined>,
		AwayPassingAttempts: FormControl<number | null | undefined>,
		AwayPassingCompletions: FormControl<number | null | undefined>,
		AwayPassingInterceptions: FormControl<number | null | undefined>,
		AwayPassingTouchdowns: FormControl<number | null | undefined>,
		AwayPassingYards: FormControl<number | null | undefined>,
		AwayPassingYardsPerAttempt: FormControl<number | null | undefined>,
		AwayPassingYardsPerCompletion: FormControl<number | null | undefined>,
		AwayPenalties: FormControl<number | null | undefined>,
		AwayPenaltyYards: FormControl<number | null | undefined>,
		AwayPuntAverage: FormControl<number | null | undefined>,
		AwayPuntNetAverage: FormControl<number | null | undefined>,
		AwayPuntNetYards: FormControl<number | null | undefined>,
		AwayPuntReturnLong: FormControl<number | null | undefined>,
		AwayPuntReturnTouchdowns: FormControl<number | null | undefined>,
		AwayPuntReturnYards: FormControl<number | null | undefined>,
		AwayPuntReturns: FormControl<number | null | undefined>,
		AwayPuntYards: FormControl<number | null | undefined>,
		AwayPunts: FormControl<number | null | undefined>,
		AwayPuntsHadBlocked: FormControl<number | null | undefined>,
		AwayQuarterbackHits: FormControl<number | null | undefined>,
		AwayRedZoneAttempts: FormControl<number | null | undefined>,
		AwayRedZoneConversions: FormControl<number | null | undefined>,
		AwayReturnYards: FormControl<number | null | undefined>,
		AwayRushingAttempts: FormControl<number | null | undefined>,
		AwayRushingTouchdowns: FormControl<number | null | undefined>,
		AwayRushingYards: FormControl<number | null | undefined>,
		AwayRushingYardsPerAttempt: FormControl<number | null | undefined>,
		AwaySackYards: FormControl<number | null | undefined>,
		AwaySacks: FormControl<number | null | undefined>,
		AwaySafeties: FormControl<number | null | undefined>,
		AwayScore: FormControl<number | null | undefined>,
		AwayScoreOvertime: FormControl<number | null | undefined>,
		AwayScoreQuarter1: FormControl<number | null | undefined>,
		AwayScoreQuarter2: FormControl<number | null | undefined>,
		AwayScoreQuarter3: FormControl<number | null | undefined>,
		AwayScoreQuarter4: FormControl<number | null | undefined>,
		AwaySoloTackles: FormControl<number | null | undefined>,
		AwayTacklesForLoss: FormControl<number | null | undefined>,
		AwayTakeaways: FormControl<number | null | undefined>,
		AwayTeam: FormControl<string | null | undefined>,
		AwayThirdDownAttempts: FormControl<number | null | undefined>,
		AwayThirdDownConversions: FormControl<number | null | undefined>,
		AwayThirdDownPercentage: FormControl<number | null | undefined>,
		AwayTimeOfPossession: FormControl<string | null | undefined>,
		AwayTimesSacked: FormControl<number | null | undefined>,
		AwayTimesSackedYards: FormControl<number | null | undefined>,
		AwayTouchdowns: FormControl<number | null | undefined>,
		AwayTurnoverDifferential: FormControl<number | null | undefined>,
		AwayTwoPointConversionReturns: FormControl<number | null | undefined>,
		Date: FormControl<string | null | undefined>,
		GameID: FormControl<number | null | undefined>,
		GameKey: FormControl<string | null | undefined>,
		HomeAssistedTackles: FormControl<number | null | undefined>,
		HomeBlockedKickReturnTouchdowns: FormControl<number | null | undefined>,
		HomeBlockedKickReturnYards: FormControl<number | null | undefined>,
		HomeBlockedKicks: FormControl<number | null | undefined>,
		HomeCompletionPercentage: FormControl<number | null | undefined>,
		HomeExtraPointKickingAttempts: FormControl<number | null | undefined>,
		HomeExtraPointKickingConversions: FormControl<number | null | undefined>,
		HomeExtraPointPassingAttempts: FormControl<number | null | undefined>,
		HomeExtraPointPassingConversions: FormControl<number | null | undefined>,
		HomeExtraPointRushingAttempts: FormControl<number | null | undefined>,
		HomeExtraPointRushingConversions: FormControl<number | null | undefined>,
		HomeExtraPointsHadBlocked: FormControl<number | null | undefined>,
		HomeFieldGoalAttempts: FormControl<number | null | undefined>,
		HomeFieldGoalReturnTouchdowns: FormControl<number | null | undefined>,
		HomeFieldGoalReturnYards: FormControl<number | null | undefined>,
		HomeFieldGoalsHadBlocked: FormControl<number | null | undefined>,
		HomeFieldGoalsMade: FormControl<number | null | undefined>,
		HomeFirstDowns: FormControl<number | null | undefined>,
		HomeFirstDownsByPassing: FormControl<number | null | undefined>,
		HomeFirstDownsByPenalty: FormControl<number | null | undefined>,
		HomeFirstDownsByRushing: FormControl<number | null | undefined>,
		HomeFourthDownAttempts: FormControl<number | null | undefined>,
		HomeFourthDownConversions: FormControl<number | null | undefined>,
		HomeFourthDownPercentage: FormControl<number | null | undefined>,
		HomeFumbleReturnTouchdowns: FormControl<number | null | undefined>,
		HomeFumbleReturnYards: FormControl<number | null | undefined>,
		HomeFumbles: FormControl<number | null | undefined>,
		HomeFumblesForced: FormControl<number | null | undefined>,
		HomeFumblesLost: FormControl<number | null | undefined>,
		HomeFumblesRecovered: FormControl<number | null | undefined>,
		HomeGiveaways: FormControl<number | null | undefined>,
		HomeGoalToGoAttempts: FormControl<number | null | undefined>,
		HomeGoalToGoConversions: FormControl<number | null | undefined>,
		HomeInterceptionReturnTouchdowns: FormControl<number | null | undefined>,
		HomeInterceptionReturnYards: FormControl<number | null | undefined>,
		HomeInterceptionReturns: FormControl<number | null | undefined>,
		HomeKickReturnLong: FormControl<number | null | undefined>,
		HomeKickReturnTouchdowns: FormControl<number | null | undefined>,
		HomeKickReturnYards: FormControl<number | null | undefined>,
		HomeKickReturns: FormControl<number | null | undefined>,
		HomeKickoffTouchbacks: FormControl<number | null | undefined>,
		HomeKickoffs: FormControl<number | null | undefined>,
		HomeKickoffsInEndZone: FormControl<number | null | undefined>,
		HomeOffensivePlays: FormControl<number | null | undefined>,
		HomeOffensiveYards: FormControl<number | null | undefined>,
		HomeOffensiveYardsPerPlay: FormControl<number | null | undefined>,
		HomePasserRating: FormControl<number | null | undefined>,
		HomePassesDefended: FormControl<number | null | undefined>,
		HomePassingAttempts: FormControl<number | null | undefined>,
		HomePassingCompletions: FormControl<number | null | undefined>,
		HomePassingInterceptions: FormControl<number | null | undefined>,
		HomePassingTouchdowns: FormControl<number | null | undefined>,
		HomePassingYards: FormControl<number | null | undefined>,
		HomePassingYardsPerAttempt: FormControl<number | null | undefined>,
		HomePassingYardsPerCompletion: FormControl<number | null | undefined>,
		HomePenalties: FormControl<number | null | undefined>,
		HomePenaltyYards: FormControl<number | null | undefined>,
		HomePuntAverage: FormControl<number | null | undefined>,
		HomePuntNetAverage: FormControl<number | null | undefined>,
		HomePuntNetYards: FormControl<number | null | undefined>,
		HomePuntReturnLong: FormControl<number | null | undefined>,
		HomePuntReturnTouchdowns: FormControl<number | null | undefined>,
		HomePuntReturnYards: FormControl<number | null | undefined>,
		HomePuntReturns: FormControl<number | null | undefined>,
		HomePuntYards: FormControl<number | null | undefined>,
		HomePunts: FormControl<number | null | undefined>,
		HomePuntsHadBlocked: FormControl<number | null | undefined>,
		HomeQuarterbackHits: FormControl<number | null | undefined>,
		HomeRedZoneAttempts: FormControl<number | null | undefined>,
		HomeRedZoneConversions: FormControl<number | null | undefined>,
		HomeReturnYards: FormControl<number | null | undefined>,
		HomeRushingAttempts: FormControl<number | null | undefined>,
		HomeRushingTouchdowns: FormControl<number | null | undefined>,
		HomeRushingYards: FormControl<number | null | undefined>,
		HomeRushingYardsPerAttempt: FormControl<number | null | undefined>,
		HomeSackYards: FormControl<number | null | undefined>,
		HomeSacks: FormControl<number | null | undefined>,
		HomeSafeties: FormControl<number | null | undefined>,
		HomeScore: FormControl<number | null | undefined>,
		HomeScoreOvertime: FormControl<number | null | undefined>,
		HomeScoreQuarter1: FormControl<number | null | undefined>,
		HomeScoreQuarter2: FormControl<number | null | undefined>,
		HomeScoreQuarter3: FormControl<number | null | undefined>,
		HomeScoreQuarter4: FormControl<number | null | undefined>,
		HomeSoloTackles: FormControl<number | null | undefined>,
		HomeTacklesForLoss: FormControl<number | null | undefined>,
		HomeTakeaways: FormControl<number | null | undefined>,
		HomeTeam: FormControl<string | null | undefined>,
		HomeThirdDownAttempts: FormControl<number | null | undefined>,
		HomeThirdDownConversions: FormControl<number | null | undefined>,
		HomeThirdDownPercentage: FormControl<number | null | undefined>,
		HomeTimeOfPossession: FormControl<string | null | undefined>,
		HomeTimesSacked: FormControl<number | null | undefined>,
		HomeTimesSackedYards: FormControl<number | null | undefined>,
		HomeTouchdowns: FormControl<number | null | undefined>,
		HomeTurnoverDifferential: FormControl<number | null | undefined>,
		HomeTwoPointConversionReturns: FormControl<number | null | undefined>,
		Humidity: FormControl<number | null | undefined>,
		IsGameOver: FormControl<boolean | null | undefined>,
		OverUnder: FormControl<number | null | undefined>,
		PlayingSurface: FormControl<string | null | undefined>,
		PointSpread: FormControl<number | null | undefined>,
		ScoreID: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		Stadium: FormControl<string | null | undefined>,
		StadiumID: FormControl<number | null | undefined>,
		Temperature: FormControl<number | null | undefined>,
		TotalScore: FormControl<number | null | undefined>,
		Week: FormControl<number | null | undefined>,
		WindSpeed: FormControl<number | null | undefined>,
	}
	export function CreateGameFormGroup() {
		return new FormGroup<GameFormProperties>({
			AwayAssistedTackles: new FormControl<number | null | undefined>(undefined),
			AwayBlockedKickReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			AwayBlockedKickReturnYards: new FormControl<number | null | undefined>(undefined),
			AwayBlockedKicks: new FormControl<number | null | undefined>(undefined),
			AwayCompletionPercentage: new FormControl<number | null | undefined>(undefined),
			AwayExtraPointKickingAttempts: new FormControl<number | null | undefined>(undefined),
			AwayExtraPointKickingConversions: new FormControl<number | null | undefined>(undefined),
			AwayExtraPointPassingAttempts: new FormControl<number | null | undefined>(undefined),
			AwayExtraPointPassingConversions: new FormControl<number | null | undefined>(undefined),
			AwayExtraPointRushingAttempts: new FormControl<number | null | undefined>(undefined),
			AwayExtraPointRushingConversions: new FormControl<number | null | undefined>(undefined),
			AwayExtraPointsHadBlocked: new FormControl<number | null | undefined>(undefined),
			AwayFieldGoalAttempts: new FormControl<number | null | undefined>(undefined),
			AwayFieldGoalReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			AwayFieldGoalReturnYards: new FormControl<number | null | undefined>(undefined),
			AwayFieldGoalsHadBlocked: new FormControl<number | null | undefined>(undefined),
			AwayFieldGoalsMade: new FormControl<number | null | undefined>(undefined),
			AwayFirstDowns: new FormControl<number | null | undefined>(undefined),
			AwayFirstDownsByPassing: new FormControl<number | null | undefined>(undefined),
			AwayFirstDownsByPenalty: new FormControl<number | null | undefined>(undefined),
			AwayFirstDownsByRushing: new FormControl<number | null | undefined>(undefined),
			AwayFourthDownAttempts: new FormControl<number | null | undefined>(undefined),
			AwayFourthDownConversions: new FormControl<number | null | undefined>(undefined),
			AwayFourthDownPercentage: new FormControl<number | null | undefined>(undefined),
			AwayFumbleReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			AwayFumbleReturnYards: new FormControl<number | null | undefined>(undefined),
			AwayFumbles: new FormControl<number | null | undefined>(undefined),
			AwayFumblesForced: new FormControl<number | null | undefined>(undefined),
			AwayFumblesLost: new FormControl<number | null | undefined>(undefined),
			AwayFumblesRecovered: new FormControl<number | null | undefined>(undefined),
			AwayGiveaways: new FormControl<number | null | undefined>(undefined),
			AwayGoalToGoAttempts: new FormControl<number | null | undefined>(undefined),
			AwayGoalToGoConversions: new FormControl<number | null | undefined>(undefined),
			AwayInterceptionReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			AwayInterceptionReturnYards: new FormControl<number | null | undefined>(undefined),
			AwayInterceptionReturns: new FormControl<number | null | undefined>(undefined),
			AwayKickReturnLong: new FormControl<number | null | undefined>(undefined),
			AwayKickReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			AwayKickReturnYards: new FormControl<number | null | undefined>(undefined),
			AwayKickReturns: new FormControl<number | null | undefined>(undefined),
			AwayKickoffTouchbacks: new FormControl<number | null | undefined>(undefined),
			AwayKickoffs: new FormControl<number | null | undefined>(undefined),
			AwayKickoffsInEndZone: new FormControl<number | null | undefined>(undefined),
			AwayOffensivePlays: new FormControl<number | null | undefined>(undefined),
			AwayOffensiveYards: new FormControl<number | null | undefined>(undefined),
			AwayOffensiveYardsPerPlay: new FormControl<number | null | undefined>(undefined),
			AwayPasserRating: new FormControl<number | null | undefined>(undefined),
			AwayPassesDefended: new FormControl<number | null | undefined>(undefined),
			AwayPassingAttempts: new FormControl<number | null | undefined>(undefined),
			AwayPassingCompletions: new FormControl<number | null | undefined>(undefined),
			AwayPassingInterceptions: new FormControl<number | null | undefined>(undefined),
			AwayPassingTouchdowns: new FormControl<number | null | undefined>(undefined),
			AwayPassingYards: new FormControl<number | null | undefined>(undefined),
			AwayPassingYardsPerAttempt: new FormControl<number | null | undefined>(undefined),
			AwayPassingYardsPerCompletion: new FormControl<number | null | undefined>(undefined),
			AwayPenalties: new FormControl<number | null | undefined>(undefined),
			AwayPenaltyYards: new FormControl<number | null | undefined>(undefined),
			AwayPuntAverage: new FormControl<number | null | undefined>(undefined),
			AwayPuntNetAverage: new FormControl<number | null | undefined>(undefined),
			AwayPuntNetYards: new FormControl<number | null | undefined>(undefined),
			AwayPuntReturnLong: new FormControl<number | null | undefined>(undefined),
			AwayPuntReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			AwayPuntReturnYards: new FormControl<number | null | undefined>(undefined),
			AwayPuntReturns: new FormControl<number | null | undefined>(undefined),
			AwayPuntYards: new FormControl<number | null | undefined>(undefined),
			AwayPunts: new FormControl<number | null | undefined>(undefined),
			AwayPuntsHadBlocked: new FormControl<number | null | undefined>(undefined),
			AwayQuarterbackHits: new FormControl<number | null | undefined>(undefined),
			AwayRedZoneAttempts: new FormControl<number | null | undefined>(undefined),
			AwayRedZoneConversions: new FormControl<number | null | undefined>(undefined),
			AwayReturnYards: new FormControl<number | null | undefined>(undefined),
			AwayRushingAttempts: new FormControl<number | null | undefined>(undefined),
			AwayRushingTouchdowns: new FormControl<number | null | undefined>(undefined),
			AwayRushingYards: new FormControl<number | null | undefined>(undefined),
			AwayRushingYardsPerAttempt: new FormControl<number | null | undefined>(undefined),
			AwaySackYards: new FormControl<number | null | undefined>(undefined),
			AwaySacks: new FormControl<number | null | undefined>(undefined),
			AwaySafeties: new FormControl<number | null | undefined>(undefined),
			AwayScore: new FormControl<number | null | undefined>(undefined),
			AwayScoreOvertime: new FormControl<number | null | undefined>(undefined),
			AwayScoreQuarter1: new FormControl<number | null | undefined>(undefined),
			AwayScoreQuarter2: new FormControl<number | null | undefined>(undefined),
			AwayScoreQuarter3: new FormControl<number | null | undefined>(undefined),
			AwayScoreQuarter4: new FormControl<number | null | undefined>(undefined),
			AwaySoloTackles: new FormControl<number | null | undefined>(undefined),
			AwayTacklesForLoss: new FormControl<number | null | undefined>(undefined),
			AwayTakeaways: new FormControl<number | null | undefined>(undefined),
			AwayTeam: new FormControl<string | null | undefined>(undefined),
			AwayThirdDownAttempts: new FormControl<number | null | undefined>(undefined),
			AwayThirdDownConversions: new FormControl<number | null | undefined>(undefined),
			AwayThirdDownPercentage: new FormControl<number | null | undefined>(undefined),
			AwayTimeOfPossession: new FormControl<string | null | undefined>(undefined),
			AwayTimesSacked: new FormControl<number | null | undefined>(undefined),
			AwayTimesSackedYards: new FormControl<number | null | undefined>(undefined),
			AwayTouchdowns: new FormControl<number | null | undefined>(undefined),
			AwayTurnoverDifferential: new FormControl<number | null | undefined>(undefined),
			AwayTwoPointConversionReturns: new FormControl<number | null | undefined>(undefined),
			Date: new FormControl<string | null | undefined>(undefined),
			GameID: new FormControl<number | null | undefined>(undefined),
			GameKey: new FormControl<string | null | undefined>(undefined),
			HomeAssistedTackles: new FormControl<number | null | undefined>(undefined),
			HomeBlockedKickReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			HomeBlockedKickReturnYards: new FormControl<number | null | undefined>(undefined),
			HomeBlockedKicks: new FormControl<number | null | undefined>(undefined),
			HomeCompletionPercentage: new FormControl<number | null | undefined>(undefined),
			HomeExtraPointKickingAttempts: new FormControl<number | null | undefined>(undefined),
			HomeExtraPointKickingConversions: new FormControl<number | null | undefined>(undefined),
			HomeExtraPointPassingAttempts: new FormControl<number | null | undefined>(undefined),
			HomeExtraPointPassingConversions: new FormControl<number | null | undefined>(undefined),
			HomeExtraPointRushingAttempts: new FormControl<number | null | undefined>(undefined),
			HomeExtraPointRushingConversions: new FormControl<number | null | undefined>(undefined),
			HomeExtraPointsHadBlocked: new FormControl<number | null | undefined>(undefined),
			HomeFieldGoalAttempts: new FormControl<number | null | undefined>(undefined),
			HomeFieldGoalReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			HomeFieldGoalReturnYards: new FormControl<number | null | undefined>(undefined),
			HomeFieldGoalsHadBlocked: new FormControl<number | null | undefined>(undefined),
			HomeFieldGoalsMade: new FormControl<number | null | undefined>(undefined),
			HomeFirstDowns: new FormControl<number | null | undefined>(undefined),
			HomeFirstDownsByPassing: new FormControl<number | null | undefined>(undefined),
			HomeFirstDownsByPenalty: new FormControl<number | null | undefined>(undefined),
			HomeFirstDownsByRushing: new FormControl<number | null | undefined>(undefined),
			HomeFourthDownAttempts: new FormControl<number | null | undefined>(undefined),
			HomeFourthDownConversions: new FormControl<number | null | undefined>(undefined),
			HomeFourthDownPercentage: new FormControl<number | null | undefined>(undefined),
			HomeFumbleReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			HomeFumbleReturnYards: new FormControl<number | null | undefined>(undefined),
			HomeFumbles: new FormControl<number | null | undefined>(undefined),
			HomeFumblesForced: new FormControl<number | null | undefined>(undefined),
			HomeFumblesLost: new FormControl<number | null | undefined>(undefined),
			HomeFumblesRecovered: new FormControl<number | null | undefined>(undefined),
			HomeGiveaways: new FormControl<number | null | undefined>(undefined),
			HomeGoalToGoAttempts: new FormControl<number | null | undefined>(undefined),
			HomeGoalToGoConversions: new FormControl<number | null | undefined>(undefined),
			HomeInterceptionReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			HomeInterceptionReturnYards: new FormControl<number | null | undefined>(undefined),
			HomeInterceptionReturns: new FormControl<number | null | undefined>(undefined),
			HomeKickReturnLong: new FormControl<number | null | undefined>(undefined),
			HomeKickReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			HomeKickReturnYards: new FormControl<number | null | undefined>(undefined),
			HomeKickReturns: new FormControl<number | null | undefined>(undefined),
			HomeKickoffTouchbacks: new FormControl<number | null | undefined>(undefined),
			HomeKickoffs: new FormControl<number | null | undefined>(undefined),
			HomeKickoffsInEndZone: new FormControl<number | null | undefined>(undefined),
			HomeOffensivePlays: new FormControl<number | null | undefined>(undefined),
			HomeOffensiveYards: new FormControl<number | null | undefined>(undefined),
			HomeOffensiveYardsPerPlay: new FormControl<number | null | undefined>(undefined),
			HomePasserRating: new FormControl<number | null | undefined>(undefined),
			HomePassesDefended: new FormControl<number | null | undefined>(undefined),
			HomePassingAttempts: new FormControl<number | null | undefined>(undefined),
			HomePassingCompletions: new FormControl<number | null | undefined>(undefined),
			HomePassingInterceptions: new FormControl<number | null | undefined>(undefined),
			HomePassingTouchdowns: new FormControl<number | null | undefined>(undefined),
			HomePassingYards: new FormControl<number | null | undefined>(undefined),
			HomePassingYardsPerAttempt: new FormControl<number | null | undefined>(undefined),
			HomePassingYardsPerCompletion: new FormControl<number | null | undefined>(undefined),
			HomePenalties: new FormControl<number | null | undefined>(undefined),
			HomePenaltyYards: new FormControl<number | null | undefined>(undefined),
			HomePuntAverage: new FormControl<number | null | undefined>(undefined),
			HomePuntNetAverage: new FormControl<number | null | undefined>(undefined),
			HomePuntNetYards: new FormControl<number | null | undefined>(undefined),
			HomePuntReturnLong: new FormControl<number | null | undefined>(undefined),
			HomePuntReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			HomePuntReturnYards: new FormControl<number | null | undefined>(undefined),
			HomePuntReturns: new FormControl<number | null | undefined>(undefined),
			HomePuntYards: new FormControl<number | null | undefined>(undefined),
			HomePunts: new FormControl<number | null | undefined>(undefined),
			HomePuntsHadBlocked: new FormControl<number | null | undefined>(undefined),
			HomeQuarterbackHits: new FormControl<number | null | undefined>(undefined),
			HomeRedZoneAttempts: new FormControl<number | null | undefined>(undefined),
			HomeRedZoneConversions: new FormControl<number | null | undefined>(undefined),
			HomeReturnYards: new FormControl<number | null | undefined>(undefined),
			HomeRushingAttempts: new FormControl<number | null | undefined>(undefined),
			HomeRushingTouchdowns: new FormControl<number | null | undefined>(undefined),
			HomeRushingYards: new FormControl<number | null | undefined>(undefined),
			HomeRushingYardsPerAttempt: new FormControl<number | null | undefined>(undefined),
			HomeSackYards: new FormControl<number | null | undefined>(undefined),
			HomeSacks: new FormControl<number | null | undefined>(undefined),
			HomeSafeties: new FormControl<number | null | undefined>(undefined),
			HomeScore: new FormControl<number | null | undefined>(undefined),
			HomeScoreOvertime: new FormControl<number | null | undefined>(undefined),
			HomeScoreQuarter1: new FormControl<number | null | undefined>(undefined),
			HomeScoreQuarter2: new FormControl<number | null | undefined>(undefined),
			HomeScoreQuarter3: new FormControl<number | null | undefined>(undefined),
			HomeScoreQuarter4: new FormControl<number | null | undefined>(undefined),
			HomeSoloTackles: new FormControl<number | null | undefined>(undefined),
			HomeTacklesForLoss: new FormControl<number | null | undefined>(undefined),
			HomeTakeaways: new FormControl<number | null | undefined>(undefined),
			HomeTeam: new FormControl<string | null | undefined>(undefined),
			HomeThirdDownAttempts: new FormControl<number | null | undefined>(undefined),
			HomeThirdDownConversions: new FormControl<number | null | undefined>(undefined),
			HomeThirdDownPercentage: new FormControl<number | null | undefined>(undefined),
			HomeTimeOfPossession: new FormControl<string | null | undefined>(undefined),
			HomeTimesSacked: new FormControl<number | null | undefined>(undefined),
			HomeTimesSackedYards: new FormControl<number | null | undefined>(undefined),
			HomeTouchdowns: new FormControl<number | null | undefined>(undefined),
			HomeTurnoverDifferential: new FormControl<number | null | undefined>(undefined),
			HomeTwoPointConversionReturns: new FormControl<number | null | undefined>(undefined),
			Humidity: new FormControl<number | null | undefined>(undefined),
			IsGameOver: new FormControl<boolean | null | undefined>(undefined),
			OverUnder: new FormControl<number | null | undefined>(undefined),
			PlayingSurface: new FormControl<string | null | undefined>(undefined),
			PointSpread: new FormControl<number | null | undefined>(undefined),
			ScoreID: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			Stadium: new FormControl<string | null | undefined>(undefined),
			StadiumID: new FormControl<number | null | undefined>(undefined),
			Temperature: new FormControl<number | null | undefined>(undefined),
			TotalScore: new FormControl<number | null | undefined>(undefined),
			Week: new FormControl<number | null | undefined>(undefined),
			WindSpeed: new FormControl<number | null | undefined>(undefined),
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

	export interface Player {
		Active?: boolean | null;
		Age?: number | null;
		AverageDraftPosition?: number | null;
		BirthDate?: string | null;
		BirthDateString?: string | null;
		ByeWeek?: number | null;
		College?: string | null;
		CollegeDraftPick?: number | null;
		CollegeDraftRound?: number | null;
		CollegeDraftTeam?: string | null;
		CollegeDraftYear?: number | null;
		CurrentStatus?: string | null;
		CurrentTeam?: string | null;
		DeclaredInactive?: boolean | null;
		DepthDisplayOrder?: number | null;
		DepthOrder?: number | null;
		DepthPosition?: string | null;
		DepthPositionCategory?: string | null;
		DraftKingsName?: string | null;
		DraftKingsPlayerID?: number | null;
		Experience?: number | null;
		ExperienceString?: string | null;
		FanDuelName?: string | null;
		FanDuelPlayerID?: number | null;
		FantasyAlarmPlayerID?: number | null;
		FantasyDraftName?: string | null;
		FantasyDraftPlayerID?: number | null;
		FantasyPosition?: string | null;
		FantasyPositionDepthOrder?: number | null;
		FirstName?: string | null;
		GlobalTeamID?: number | null;
		Height?: string | null;
		HeightFeet?: number | null;
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
		Number?: number | null;
		PhotoUrl?: string | null;
		PlayerID?: number | null;
		Position?: string | null;
		PositionCategory?: string | null;
		RotoWirePlayerID?: number | null;
		RotoworldPlayerID?: number | null;
		ShortName?: string | null;
		SportRadarPlayerID?: string | null;
		SportsDirectPlayerID?: number | null;
		StatsPlayerID?: number | null;
		Status?: string | null;
		Team?: string | null;
		TeamID?: number | null;
		UpcomingDraftKingsSalary?: number | null;
		UpcomingFanDuelSalary?: number | null;
		UpcomingGameOpponent?: string | null;
		UpcomingGameWeek?: number | null;
		UpcomingOpponentPositionRank?: number | null;
		UpcomingOpponentRank?: number | null;
		UpcomingSalary?: number | null;
		UpcomingYahooSalary?: number | null;
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
		Active: FormControl<boolean | null | undefined>,
		Age: FormControl<number | null | undefined>,
		AverageDraftPosition: FormControl<number | null | undefined>,
		BirthDate: FormControl<string | null | undefined>,
		BirthDateString: FormControl<string | null | undefined>,
		ByeWeek: FormControl<number | null | undefined>,
		College: FormControl<string | null | undefined>,
		CollegeDraftPick: FormControl<number | null | undefined>,
		CollegeDraftRound: FormControl<number | null | undefined>,
		CollegeDraftTeam: FormControl<string | null | undefined>,
		CollegeDraftYear: FormControl<number | null | undefined>,
		CurrentStatus: FormControl<string | null | undefined>,
		CurrentTeam: FormControl<string | null | undefined>,
		DeclaredInactive: FormControl<boolean | null | undefined>,
		DepthDisplayOrder: FormControl<number | null | undefined>,
		DepthOrder: FormControl<number | null | undefined>,
		DepthPosition: FormControl<string | null | undefined>,
		DepthPositionCategory: FormControl<string | null | undefined>,
		DraftKingsName: FormControl<string | null | undefined>,
		DraftKingsPlayerID: FormControl<number | null | undefined>,
		Experience: FormControl<number | null | undefined>,
		ExperienceString: FormControl<string | null | undefined>,
		FanDuelName: FormControl<string | null | undefined>,
		FanDuelPlayerID: FormControl<number | null | undefined>,
		FantasyAlarmPlayerID: FormControl<number | null | undefined>,
		FantasyDraftName: FormControl<string | null | undefined>,
		FantasyDraftPlayerID: FormControl<number | null | undefined>,
		FantasyPosition: FormControl<string | null | undefined>,
		FantasyPositionDepthOrder: FormControl<number | null | undefined>,
		FirstName: FormControl<string | null | undefined>,
		GlobalTeamID: FormControl<number | null | undefined>,
		Height: FormControl<string | null | undefined>,
		HeightFeet: FormControl<number | null | undefined>,
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
		Number: FormControl<number | null | undefined>,
		PhotoUrl: FormControl<string | null | undefined>,
		PlayerID: FormControl<number | null | undefined>,
		Position: FormControl<string | null | undefined>,
		PositionCategory: FormControl<string | null | undefined>,
		RotoWirePlayerID: FormControl<number | null | undefined>,
		RotoworldPlayerID: FormControl<number | null | undefined>,
		ShortName: FormControl<string | null | undefined>,
		SportRadarPlayerID: FormControl<string | null | undefined>,
		SportsDirectPlayerID: FormControl<number | null | undefined>,
		StatsPlayerID: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Team: FormControl<string | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
		UpcomingDraftKingsSalary: FormControl<number | null | undefined>,
		UpcomingFanDuelSalary: FormControl<number | null | undefined>,
		UpcomingGameOpponent: FormControl<string | null | undefined>,
		UpcomingGameWeek: FormControl<number | null | undefined>,
		UpcomingOpponentPositionRank: FormControl<number | null | undefined>,
		UpcomingOpponentRank: FormControl<number | null | undefined>,
		UpcomingSalary: FormControl<number | null | undefined>,
		UpcomingYahooSalary: FormControl<number | null | undefined>,
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

	export interface PlayerDetail {
		Active?: boolean | null;
		Age?: number | null;
		AverageDraftPosition?: number | null;
		BirthDate?: string | null;
		BirthDateString?: string | null;
		ByeWeek?: number | null;
		College?: string | null;
		CollegeDraftPick?: number | null;
		CollegeDraftRound?: number | null;
		CollegeDraftTeam?: string | null;
		CollegeDraftYear?: number | null;
		CurrentStatus?: string | null;
		CurrentTeam?: string | null;
		DeclaredInactive?: boolean | null;
		DepthDisplayOrder?: number | null;
		DepthOrder?: number | null;
		DepthPosition?: string | null;
		DepthPositionCategory?: string | null;
		DraftKingsName?: string | null;
		DraftKingsPlayerID?: number | null;
		Experience?: number | null;
		ExperienceString?: string | null;
		FanDuelName?: string | null;
		FanDuelPlayerID?: number | null;
		FantasyAlarmPlayerID?: number | null;
		FantasyDraftName?: string | null;
		FantasyDraftPlayerID?: number | null;
		FantasyPosition?: string | null;
		FantasyPositionDepthOrder?: number | null;
		FirstName?: string | null;
		GlobalTeamID?: number | null;
		Height?: string | null;
		HeightFeet?: number | null;
		HeightInches?: number | null;
		InjuryBodyPart?: string | null;
		InjuryNotes?: string | null;
		InjuryPractice?: string | null;
		InjuryPracticeDescription?: string | null;
		InjuryStartDate?: string | null;
		InjuryStatus?: string | null;
		IsUndraftedFreeAgent?: boolean | null;
		LastName?: string | null;
		LatestNews?: Array<News>;
		Name?: string | null;
		Number?: number | null;
		PhotoUrl?: string | null;
		PlayerID?: number | null;
		PlayerSeason?: PlayerSeason;
		Position?: string | null;
		PositionCategory?: string | null;
		RotoWirePlayerID?: number | null;
		RotoworldPlayerID?: number | null;
		ShortName?: string | null;
		SportRadarPlayerID?: string | null;
		SportsDirectPlayerID?: number | null;
		StatsPlayerID?: number | null;
		Status?: string | null;
		Team?: string | null;
		TeamID?: number | null;
		UpcomingDraftKingsSalary?: number | null;
		UpcomingFanDuelSalary?: number | null;
		UpcomingGameOpponent?: string | null;
		UpcomingGameWeek?: number | null;
		UpcomingOpponentPositionRank?: number | null;
		UpcomingOpponentRank?: number | null;
		UpcomingSalary?: number | null;
		UpcomingYahooSalary?: number | null;
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
	export interface PlayerDetailFormProperties {
		Active: FormControl<boolean | null | undefined>,
		Age: FormControl<number | null | undefined>,
		AverageDraftPosition: FormControl<number | null | undefined>,
		BirthDate: FormControl<string | null | undefined>,
		BirthDateString: FormControl<string | null | undefined>,
		ByeWeek: FormControl<number | null | undefined>,
		College: FormControl<string | null | undefined>,
		CollegeDraftPick: FormControl<number | null | undefined>,
		CollegeDraftRound: FormControl<number | null | undefined>,
		CollegeDraftTeam: FormControl<string | null | undefined>,
		CollegeDraftYear: FormControl<number | null | undefined>,
		CurrentStatus: FormControl<string | null | undefined>,
		CurrentTeam: FormControl<string | null | undefined>,
		DeclaredInactive: FormControl<boolean | null | undefined>,
		DepthDisplayOrder: FormControl<number | null | undefined>,
		DepthOrder: FormControl<number | null | undefined>,
		DepthPosition: FormControl<string | null | undefined>,
		DepthPositionCategory: FormControl<string | null | undefined>,
		DraftKingsName: FormControl<string | null | undefined>,
		DraftKingsPlayerID: FormControl<number | null | undefined>,
		Experience: FormControl<number | null | undefined>,
		ExperienceString: FormControl<string | null | undefined>,
		FanDuelName: FormControl<string | null | undefined>,
		FanDuelPlayerID: FormControl<number | null | undefined>,
		FantasyAlarmPlayerID: FormControl<number | null | undefined>,
		FantasyDraftName: FormControl<string | null | undefined>,
		FantasyDraftPlayerID: FormControl<number | null | undefined>,
		FantasyPosition: FormControl<string | null | undefined>,
		FantasyPositionDepthOrder: FormControl<number | null | undefined>,
		FirstName: FormControl<string | null | undefined>,
		GlobalTeamID: FormControl<number | null | undefined>,
		Height: FormControl<string | null | undefined>,
		HeightFeet: FormControl<number | null | undefined>,
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
		Number: FormControl<number | null | undefined>,
		PhotoUrl: FormControl<string | null | undefined>,
		PlayerID: FormControl<number | null | undefined>,
		Position: FormControl<string | null | undefined>,
		PositionCategory: FormControl<string | null | undefined>,
		RotoWirePlayerID: FormControl<number | null | undefined>,
		RotoworldPlayerID: FormControl<number | null | undefined>,
		ShortName: FormControl<string | null | undefined>,
		SportRadarPlayerID: FormControl<string | null | undefined>,
		SportsDirectPlayerID: FormControl<number | null | undefined>,
		StatsPlayerID: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Team: FormControl<string | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
		UpcomingDraftKingsSalary: FormControl<number | null | undefined>,
		UpcomingFanDuelSalary: FormControl<number | null | undefined>,
		UpcomingGameOpponent: FormControl<string | null | undefined>,
		UpcomingGameWeek: FormControl<number | null | undefined>,
		UpcomingOpponentPositionRank: FormControl<number | null | undefined>,
		UpcomingOpponentRank: FormControl<number | null | undefined>,
		UpcomingSalary: FormControl<number | null | undefined>,
		UpcomingYahooSalary: FormControl<number | null | undefined>,
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
	export function CreatePlayerDetailFormGroup() {
		return new FormGroup<PlayerDetailFormProperties>({
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

	export interface PlayerSeason {
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
	export interface PlayerSeasonFormProperties {
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
	export function CreatePlayerSeasonFormGroup() {
		return new FormGroup<PlayerSeasonFormProperties>({
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

	export interface Score {
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
		Canceled?: boolean | null;
		Channel?: string | null;
		Closed?: boolean | null;
		Date?: string | null;
		DateTime?: string | null;
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
		IsInProgress?: boolean | null;
		IsOver?: boolean | null;
		IsOvertime?: boolean | null;
		LastPlay?: string | null;
		LastUpdated?: string | null;
		OverUnder?: number | null;
		PointSpread?: number | null;
		PointSpreadAwayTeamMoneyLine?: number | null;
		PointSpreadHomeTeamMoneyLine?: number | null;
		Possession?: string | null;
		Quarter?: string | null;
		QuarterDescription?: string | null;
		RedZone?: string | null;
		ScoreID?: number | null;
		Season?: number | null;
		SeasonType?: number | null;
		StadiumDetails?: Stadium;
		StadiumID?: number | null;
		Status?: string | null;
		TimeRemaining?: string | null;
		Week?: number | null;
		YardLine?: number | null;
		YardLineTerritory?: string | null;
	}
	export interface ScoreFormProperties {
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
		Canceled: FormControl<boolean | null | undefined>,
		Channel: FormControl<string | null | undefined>,
		Closed: FormControl<boolean | null | undefined>,
		Date: FormControl<string | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
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
		IsInProgress: FormControl<boolean | null | undefined>,
		IsOver: FormControl<boolean | null | undefined>,
		IsOvertime: FormControl<boolean | null | undefined>,
		LastPlay: FormControl<string | null | undefined>,
		LastUpdated: FormControl<string | null | undefined>,
		OverUnder: FormControl<number | null | undefined>,
		PointSpread: FormControl<number | null | undefined>,
		PointSpreadAwayTeamMoneyLine: FormControl<number | null | undefined>,
		PointSpreadHomeTeamMoneyLine: FormControl<number | null | undefined>,
		Possession: FormControl<string | null | undefined>,
		Quarter: FormControl<string | null | undefined>,
		QuarterDescription: FormControl<string | null | undefined>,
		RedZone: FormControl<string | null | undefined>,
		ScoreID: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		StadiumID: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,
		TimeRemaining: FormControl<string | null | undefined>,
		Week: FormControl<number | null | undefined>,
		YardLine: FormControl<number | null | undefined>,
		YardLineTerritory: FormControl<string | null | undefined>,
	}
	export function CreateScoreFormGroup() {
		return new FormGroup<ScoreFormProperties>({
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
			Canceled: new FormControl<boolean | null | undefined>(undefined),
			Channel: new FormControl<string | null | undefined>(undefined),
			Closed: new FormControl<boolean | null | undefined>(undefined),
			Date: new FormControl<string | null | undefined>(undefined),
			DateTime: new FormControl<string | null | undefined>(undefined),
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
			IsInProgress: new FormControl<boolean | null | undefined>(undefined),
			IsOver: new FormControl<boolean | null | undefined>(undefined),
			IsOvertime: new FormControl<boolean | null | undefined>(undefined),
			LastPlay: new FormControl<string | null | undefined>(undefined),
			LastUpdated: new FormControl<string | null | undefined>(undefined),
			OverUnder: new FormControl<number | null | undefined>(undefined),
			PointSpread: new FormControl<number | null | undefined>(undefined),
			PointSpreadAwayTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			PointSpreadHomeTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			Possession: new FormControl<string | null | undefined>(undefined),
			Quarter: new FormControl<string | null | undefined>(undefined),
			QuarterDescription: new FormControl<string | null | undefined>(undefined),
			RedZone: new FormControl<string | null | undefined>(undefined),
			ScoreID: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			StadiumID: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			TimeRemaining: new FormControl<string | null | undefined>(undefined),
			Week: new FormControl<number | null | undefined>(undefined),
			YardLine: new FormControl<number | null | undefined>(undefined),
			YardLineTerritory: new FormControl<string | null | undefined>(undefined),
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

	export interface Standing {
		Conference?: string | null;
		ConferenceLosses?: number | null;
		ConferenceTies?: number | null;
		ConferenceWins?: number | null;
		Division?: string | null;
		DivisionLosses?: number | null;
		DivisionTies?: number | null;
		DivisionWins?: number | null;
		GlobalTeamID?: number | null;
		Losses?: number | null;
		Name?: string | null;
		NetPoints?: number | null;
		Percentage?: number | null;
		PointsAgainst?: number | null;
		PointsFor?: number | null;
		Season?: number | null;
		SeasonType?: number | null;
		Team?: string | null;
		TeamID?: number | null;
		Ties?: number | null;
		Touchdowns?: number | null;
		Wins?: number | null;
	}
	export interface StandingFormProperties {
		Conference: FormControl<string | null | undefined>,
		ConferenceLosses: FormControl<number | null | undefined>,
		ConferenceTies: FormControl<number | null | undefined>,
		ConferenceWins: FormControl<number | null | undefined>,
		Division: FormControl<string | null | undefined>,
		DivisionLosses: FormControl<number | null | undefined>,
		DivisionTies: FormControl<number | null | undefined>,
		DivisionWins: FormControl<number | null | undefined>,
		GlobalTeamID: FormControl<number | null | undefined>,
		Losses: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		NetPoints: FormControl<number | null | undefined>,
		Percentage: FormControl<number | null | undefined>,
		PointsAgainst: FormControl<number | null | undefined>,
		PointsFor: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
		Ties: FormControl<number | null | undefined>,
		Touchdowns: FormControl<number | null | undefined>,
		Wins: FormControl<number | null | undefined>,
	}
	export function CreateStandingFormGroup() {
		return new FormGroup<StandingFormProperties>({
			Conference: new FormControl<string | null | undefined>(undefined),
			ConferenceLosses: new FormControl<number | null | undefined>(undefined),
			ConferenceTies: new FormControl<number | null | undefined>(undefined),
			ConferenceWins: new FormControl<number | null | undefined>(undefined),
			Division: new FormControl<string | null | undefined>(undefined),
			DivisionLosses: new FormControl<number | null | undefined>(undefined),
			DivisionTies: new FormControl<number | null | undefined>(undefined),
			DivisionWins: new FormControl<number | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			Losses: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			NetPoints: new FormControl<number | null | undefined>(undefined),
			Percentage: new FormControl<number | null | undefined>(undefined),
			PointsAgainst: new FormControl<number | null | undefined>(undefined),
			PointsFor: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			Ties: new FormControl<number | null | undefined>(undefined),
			Touchdowns: new FormControl<number | null | undefined>(undefined),
			Wins: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Team {
		AverageDraftPosition?: number | null;
		AverageDraftPosition2QB?: number | null;
		AverageDraftPositionDynasty?: number | null;
		AverageDraftPositionPPR?: number | null;
		ByeWeek?: number | null;
		City?: string | null;
		Conference?: string | null;
		DefensiveCoordinator?: string | null;
		DefensiveScheme?: string | null;
		Division?: string | null;
		DraftKingsName?: string | null;
		DraftKingsPlayerID?: number | null;
		FanDuelName?: string | null;
		FanDuelPlayerID?: number | null;
		FantasyDraftName?: string | null;
		FantasyDraftPlayerID?: number | null;
		FullName?: string | null;
		GlobalTeamID?: number | null;
		HeadCoach?: string | null;
		Key?: string | null;
		Name?: string | null;
		OffensiveCoordinator?: string | null;
		OffensiveScheme?: string | null;
		PlayerID?: number | null;
		PrimaryColor?: string | null;
		QuaternaryColor?: string | null;
		SecondaryColor?: string | null;
		SpecialTeamsCoach?: string | null;
		StadiumDetails?: Stadium;
		StadiumID?: number | null;
		TeamID?: number | null;
		TertiaryColor?: string | null;
		UpcomingDraftKingsSalary?: number | null;
		UpcomingFanDuelSalary?: number | null;
		UpcomingOpponent?: string | null;
		UpcomingOpponentPositionRank?: number | null;
		UpcomingOpponentRank?: number | null;
		UpcomingSalary?: number | null;
		UpcomingYahooSalary?: number | null;
		WikipediaLogoUrl?: string | null;
		WikipediaWordMarkUrl?: string | null;
		YahooName?: string | null;
		YahooPlayerID?: number | null;
	}
	export interface TeamFormProperties {
		AverageDraftPosition: FormControl<number | null | undefined>,
		AverageDraftPosition2QB: FormControl<number | null | undefined>,
		AverageDraftPositionDynasty: FormControl<number | null | undefined>,
		AverageDraftPositionPPR: FormControl<number | null | undefined>,
		ByeWeek: FormControl<number | null | undefined>,
		City: FormControl<string | null | undefined>,
		Conference: FormControl<string | null | undefined>,
		DefensiveCoordinator: FormControl<string | null | undefined>,
		DefensiveScheme: FormControl<string | null | undefined>,
		Division: FormControl<string | null | undefined>,
		DraftKingsName: FormControl<string | null | undefined>,
		DraftKingsPlayerID: FormControl<number | null | undefined>,
		FanDuelName: FormControl<string | null | undefined>,
		FanDuelPlayerID: FormControl<number | null | undefined>,
		FantasyDraftName: FormControl<string | null | undefined>,
		FantasyDraftPlayerID: FormControl<number | null | undefined>,
		FullName: FormControl<string | null | undefined>,
		GlobalTeamID: FormControl<number | null | undefined>,
		HeadCoach: FormControl<string | null | undefined>,
		Key: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		OffensiveCoordinator: FormControl<string | null | undefined>,
		OffensiveScheme: FormControl<string | null | undefined>,
		PlayerID: FormControl<number | null | undefined>,
		PrimaryColor: FormControl<string | null | undefined>,
		QuaternaryColor: FormControl<string | null | undefined>,
		SecondaryColor: FormControl<string | null | undefined>,
		SpecialTeamsCoach: FormControl<string | null | undefined>,
		StadiumID: FormControl<number | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
		TertiaryColor: FormControl<string | null | undefined>,
		UpcomingDraftKingsSalary: FormControl<number | null | undefined>,
		UpcomingFanDuelSalary: FormControl<number | null | undefined>,
		UpcomingOpponent: FormControl<string | null | undefined>,
		UpcomingOpponentPositionRank: FormControl<number | null | undefined>,
		UpcomingOpponentRank: FormControl<number | null | undefined>,
		UpcomingSalary: FormControl<number | null | undefined>,
		UpcomingYahooSalary: FormControl<number | null | undefined>,
		WikipediaLogoUrl: FormControl<string | null | undefined>,
		WikipediaWordMarkUrl: FormControl<string | null | undefined>,
		YahooName: FormControl<string | null | undefined>,
		YahooPlayerID: FormControl<number | null | undefined>,
	}
	export function CreateTeamFormGroup() {
		return new FormGroup<TeamFormProperties>({
			AverageDraftPosition: new FormControl<number | null | undefined>(undefined),
			AverageDraftPosition2QB: new FormControl<number | null | undefined>(undefined),
			AverageDraftPositionDynasty: new FormControl<number | null | undefined>(undefined),
			AverageDraftPositionPPR: new FormControl<number | null | undefined>(undefined),
			ByeWeek: new FormControl<number | null | undefined>(undefined),
			City: new FormControl<string | null | undefined>(undefined),
			Conference: new FormControl<string | null | undefined>(undefined),
			DefensiveCoordinator: new FormControl<string | null | undefined>(undefined),
			DefensiveScheme: new FormControl<string | null | undefined>(undefined),
			Division: new FormControl<string | null | undefined>(undefined),
			DraftKingsName: new FormControl<string | null | undefined>(undefined),
			DraftKingsPlayerID: new FormControl<number | null | undefined>(undefined),
			FanDuelName: new FormControl<string | null | undefined>(undefined),
			FanDuelPlayerID: new FormControl<number | null | undefined>(undefined),
			FantasyDraftName: new FormControl<string | null | undefined>(undefined),
			FantasyDraftPlayerID: new FormControl<number | null | undefined>(undefined),
			FullName: new FormControl<string | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			HeadCoach: new FormControl<string | null | undefined>(undefined),
			Key: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			OffensiveCoordinator: new FormControl<string | null | undefined>(undefined),
			OffensiveScheme: new FormControl<string | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			PrimaryColor: new FormControl<string | null | undefined>(undefined),
			QuaternaryColor: new FormControl<string | null | undefined>(undefined),
			SecondaryColor: new FormControl<string | null | undefined>(undefined),
			SpecialTeamsCoach: new FormControl<string | null | undefined>(undefined),
			StadiumID: new FormControl<number | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			TertiaryColor: new FormControl<string | null | undefined>(undefined),
			UpcomingDraftKingsSalary: new FormControl<number | null | undefined>(undefined),
			UpcomingFanDuelSalary: new FormControl<number | null | undefined>(undefined),
			UpcomingOpponent: new FormControl<string | null | undefined>(undefined),
			UpcomingOpponentPositionRank: new FormControl<number | null | undefined>(undefined),
			UpcomingOpponentRank: new FormControl<number | null | undefined>(undefined),
			UpcomingSalary: new FormControl<number | null | undefined>(undefined),
			UpcomingYahooSalary: new FormControl<number | null | undefined>(undefined),
			WikipediaLogoUrl: new FormControl<string | null | undefined>(undefined),
			WikipediaWordMarkUrl: new FormControl<string | null | undefined>(undefined),
			YahooName: new FormControl<string | null | undefined>(undefined),
			YahooPlayerID: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TeamGame {
		AssistedTackles?: number | null;
		BlockedKickReturnTouchdowns?: number | null;
		BlockedKickReturnYards?: number | null;
		BlockedKicks?: number | null;
		CompletionPercentage?: number | null;
		Date?: string | null;
		DateTime?: string | null;
		Day?: string | null;
		DayOfWeek?: string | null;
		ExtraPointKickingAttempts?: number | null;
		ExtraPointKickingConversions?: number | null;
		ExtraPointPassingAttempts?: number | null;
		ExtraPointPassingConversions?: number | null;
		ExtraPointPercentage?: number | null;
		ExtraPointRushingAttempts?: number | null;
		ExtraPointRushingConversions?: number | null;
		ExtraPointsHadBlocked?: number | null;
		FieldGoalAttempts?: number | null;
		FieldGoalPercentage?: number | null;
		FieldGoalReturnTouchdowns?: number | null;
		FieldGoalReturnYards?: number | null;
		FieldGoalsHadBlocked?: number | null;
		FieldGoalsMade?: number | null;
		FirstDowns?: number | null;
		FirstDownsByPassing?: number | null;
		FirstDownsByPenalty?: number | null;
		FirstDownsByRushing?: number | null;
		FourthDownAttempts?: number | null;
		FourthDownConversions?: number | null;
		FourthDownPercentage?: number | null;
		FumbleReturnTouchdowns?: number | null;
		FumbleReturnYards?: number | null;
		Fumbles?: number | null;
		FumblesForced?: number | null;
		FumblesLost?: number | null;
		FumblesRecovered?: number | null;
		GameKey?: string | null;
		Giveaways?: number | null;
		GlobalGameID?: number | null;
		GlobalOpponentID?: number | null;
		GlobalTeamID?: number | null;
		GoalToGoAttempts?: number | null;
		GoalToGoConversions?: number | null;
		GoalToGoPercentage?: number | null;
		HomeOrAway?: string | null;
		Humidity?: number | null;
		InterceptionReturnTouchdowns?: number | null;
		InterceptionReturnYards?: number | null;
		InterceptionReturns?: number | null;
		IsGameOver?: boolean | null;
		KickReturnAverage?: number | null;
		KickReturnLong?: number | null;
		KickReturnTouchdowns?: number | null;
		KickReturnYardDifferential?: number | null;
		KickReturnYards?: number | null;
		KickReturns?: number | null;
		KickoffTouchbacks?: number | null;
		Kickoffs?: number | null;
		KickoffsInEndZone?: number | null;
		OffensivePlays?: number | null;
		OffensiveYards?: number | null;
		OffensiveYardsPerPlay?: number | null;
		Opponent?: string | null;
		OpponentAssistedTackles?: number | null;
		OpponentBlockedKickReturnTouchdowns?: number | null;
		OpponentBlockedKickReturnYards?: number | null;
		OpponentBlockedKicks?: number | null;
		OpponentCompletionPercentage?: number | null;
		OpponentExtraPointKickingAttempts?: number | null;
		OpponentExtraPointKickingConversions?: number | null;
		OpponentExtraPointPassingAttempts?: number | null;
		OpponentExtraPointPassingConversions?: number | null;
		OpponentExtraPointPercentage?: number | null;
		OpponentExtraPointRushingAttempts?: number | null;
		OpponentExtraPointRushingConversions?: number | null;
		OpponentExtraPointsHadBlocked?: number | null;
		OpponentFieldGoalAttempts?: number | null;
		OpponentFieldGoalPercentage?: number | null;
		OpponentFieldGoalReturnTouchdowns?: number | null;
		OpponentFieldGoalReturnYards?: number | null;
		OpponentFieldGoalsHadBlocked?: number | null;
		OpponentFieldGoalsMade?: number | null;
		OpponentFirstDowns?: number | null;
		OpponentFirstDownsByPassing?: number | null;
		OpponentFirstDownsByPenalty?: number | null;
		OpponentFirstDownsByRushing?: number | null;
		OpponentFourthDownAttempts?: number | null;
		OpponentFourthDownConversions?: number | null;
		OpponentFourthDownPercentage?: number | null;
		OpponentFumbleReturnTouchdowns?: number | null;
		OpponentFumbleReturnYards?: number | null;
		OpponentFumbles?: number | null;
		OpponentFumblesForced?: number | null;
		OpponentFumblesLost?: number | null;
		OpponentFumblesRecovered?: number | null;
		OpponentGiveaways?: number | null;
		OpponentGoalToGoAttempts?: number | null;
		OpponentGoalToGoConversions?: number | null;
		OpponentGoalToGoPercentage?: number | null;
		OpponentID?: number | null;
		OpponentInterceptionReturnTouchdowns?: number | null;
		OpponentInterceptionReturnYards?: number | null;
		OpponentInterceptionReturns?: number | null;
		OpponentKickReturnAverage?: number | null;
		OpponentKickReturnLong?: number | null;
		OpponentKickReturnTouchdowns?: number | null;
		OpponentKickReturnYards?: number | null;
		OpponentKickReturns?: number | null;
		OpponentKickoffTouchbacks?: number | null;
		OpponentKickoffs?: number | null;
		OpponentKickoffsInEndZone?: number | null;
		OpponentOffensivePlays?: number | null;
		OpponentOffensiveYards?: number | null;
		OpponentOffensiveYardsPerPlay?: number | null;
		OpponentPasserRating?: number | null;
		OpponentPassesDefended?: number | null;
		OpponentPassingAttempts?: number | null;
		OpponentPassingCompletions?: number | null;
		OpponentPassingDropbacks?: number | null;
		OpponentPassingInterceptionPercentage?: number | null;
		OpponentPassingInterceptions?: number | null;
		OpponentPassingTouchdowns?: number | null;
		OpponentPassingYards?: number | null;
		OpponentPassingYardsPerAttempt?: number | null;
		OpponentPassingYardsPerCompletion?: number | null;
		OpponentPenalties?: number | null;
		OpponentPenaltyYards?: number | null;
		OpponentPuntAverage?: number | null;
		OpponentPuntNetAverage?: number | null;
		OpponentPuntNetYards?: number | null;
		OpponentPuntReturnAverage?: number | null;
		OpponentPuntReturnLong?: number | null;
		OpponentPuntReturnTouchdowns?: number | null;
		OpponentPuntReturnYards?: number | null;
		OpponentPuntReturns?: number | null;
		OpponentPuntYards?: number | null;
		OpponentPunts?: number | null;
		OpponentPuntsHadBlocked?: number | null;
		OpponentQuarterbackHits?: number | null;
		OpponentQuarterbackHitsDifferential?: number | null;
		OpponentQuarterbackHitsPercentage?: number | null;
		OpponentQuarterbackSacksDifferential?: number | null;
		OpponentRedZoneAttempts?: number | null;
		OpponentRedZoneConversions?: number | null;
		OpponentRedZonePercentage?: number | null;
		OpponentReturnYards?: number | null;
		OpponentRushingAttempts?: number | null;
		OpponentRushingTouchdowns?: number | null;
		OpponentRushingYards?: number | null;
		OpponentRushingYardsPerAttempt?: number | null;
		OpponentSackYards?: number | null;
		OpponentSacks?: number | null;
		OpponentSafeties?: number | null;
		OpponentScore?: number | null;
		OpponentScoreOvertime?: number | null;
		OpponentScoreQuarter1?: number | null;
		OpponentScoreQuarter2?: number | null;
		OpponentScoreQuarter3?: number | null;
		OpponentScoreQuarter4?: number | null;
		OpponentSoloTackles?: number | null;
		OpponentTacklesForLoss?: number | null;
		OpponentTacklesForLossDifferential?: number | null;
		OpponentTacklesForLossPercentage?: number | null;
		OpponentTakeaways?: number | null;
		OpponentThirdDownAttempts?: number | null;
		OpponentThirdDownConversions?: number | null;
		OpponentThirdDownPercentage?: number | null;
		OpponentTimeOfPossession?: string | null;
		OpponentTimeOfPossessionMinutes?: number | null;
		OpponentTimeOfPossessionSeconds?: number | null;
		OpponentTimesSacked?: number | null;
		OpponentTimesSackedPercentage?: number | null;
		OpponentTimesSackedYards?: number | null;
		OpponentTouchdowns?: number | null;
		OpponentTurnoverDifferential?: number | null;
		OpponentTwoPointConversionReturns?: number | null;
		OverUnder?: number | null;
		PasserRating?: number | null;
		PassesDefended?: number | null;
		PassingAttempts?: number | null;
		PassingCompletions?: number | null;
		PassingDropbacks?: number | null;
		PassingInterceptionPercentage?: number | null;
		PassingInterceptions?: number | null;
		PassingTouchdowns?: number | null;
		PassingYards?: number | null;
		PassingYardsPerAttempt?: number | null;
		PassingYardsPerCompletion?: number | null;
		Penalties?: number | null;
		PenaltyYardDifferential?: number | null;
		PenaltyYards?: number | null;
		PlayingSurface?: string | null;
		PointDifferential?: number | null;
		PointSpread?: number | null;
		PuntAverage?: number | null;
		PuntNetAverage?: number | null;
		PuntNetYards?: number | null;
		PuntReturnAverage?: number | null;
		PuntReturnLong?: number | null;
		PuntReturnTouchdowns?: number | null;
		PuntReturnYardDifferential?: number | null;
		PuntReturnYards?: number | null;
		PuntReturns?: number | null;
		PuntYards?: number | null;
		Punts?: number | null;
		PuntsHadBlocked?: number | null;
		QuarterbackHits?: number | null;
		QuarterbackHitsDifferential?: number | null;
		QuarterbackHitsPercentage?: number | null;
		QuarterbackSacksDifferential?: number | null;
		RedZoneAttempts?: number | null;
		RedZoneConversions?: number | null;
		RedZonePercentage?: number | null;
		ReturnYards?: number | null;
		RushingAttempts?: number | null;
		RushingTouchdowns?: number | null;
		RushingYards?: number | null;
		RushingYardsPerAttempt?: number | null;
		SackYards?: number | null;
		Sacks?: number | null;
		Safeties?: number | null;
		Score?: number | null;
		ScoreID?: number | null;
		ScoreOvertime?: number | null;
		ScoreQuarter1?: number | null;
		ScoreQuarter2?: number | null;
		ScoreQuarter3?: number | null;
		ScoreQuarter4?: number | null;
		Season?: number | null;
		SeasonType?: number | null;
		SoloTackles?: number | null;
		Stadium?: string | null;
		TacklesForLoss?: number | null;
		TacklesForLossDifferential?: number | null;
		TacklesForLossPercentage?: number | null;
		Takeaways?: number | null;
		Team?: string | null;
		TeamGameID?: number | null;
		TeamID?: number | null;
		TeamName?: string | null;
		Temperature?: number | null;
		ThirdDownAttempts?: number | null;
		ThirdDownConversions?: number | null;
		ThirdDownPercentage?: number | null;
		TimeOfPossession?: string | null;
		TimeOfPossessionMinutes?: number | null;
		TimeOfPossessionSeconds?: number | null;
		TimesSacked?: number | null;
		TimesSackedPercentage?: number | null;
		TimesSackedYards?: number | null;
		TotalScore?: number | null;
		Touchdowns?: number | null;
		TurnoverDifferential?: number | null;
		TwoPointConversionReturns?: number | null;
		Week?: number | null;
		WindSpeed?: number | null;
	}
	export interface TeamGameFormProperties {
		AssistedTackles: FormControl<number | null | undefined>,
		BlockedKickReturnTouchdowns: FormControl<number | null | undefined>,
		BlockedKickReturnYards: FormControl<number | null | undefined>,
		BlockedKicks: FormControl<number | null | undefined>,
		CompletionPercentage: FormControl<number | null | undefined>,
		Date: FormControl<string | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,
		DayOfWeek: FormControl<string | null | undefined>,
		ExtraPointKickingAttempts: FormControl<number | null | undefined>,
		ExtraPointKickingConversions: FormControl<number | null | undefined>,
		ExtraPointPassingAttempts: FormControl<number | null | undefined>,
		ExtraPointPassingConversions: FormControl<number | null | undefined>,
		ExtraPointPercentage: FormControl<number | null | undefined>,
		ExtraPointRushingAttempts: FormControl<number | null | undefined>,
		ExtraPointRushingConversions: FormControl<number | null | undefined>,
		ExtraPointsHadBlocked: FormControl<number | null | undefined>,
		FieldGoalAttempts: FormControl<number | null | undefined>,
		FieldGoalPercentage: FormControl<number | null | undefined>,
		FieldGoalReturnTouchdowns: FormControl<number | null | undefined>,
		FieldGoalReturnYards: FormControl<number | null | undefined>,
		FieldGoalsHadBlocked: FormControl<number | null | undefined>,
		FieldGoalsMade: FormControl<number | null | undefined>,
		FirstDowns: FormControl<number | null | undefined>,
		FirstDownsByPassing: FormControl<number | null | undefined>,
		FirstDownsByPenalty: FormControl<number | null | undefined>,
		FirstDownsByRushing: FormControl<number | null | undefined>,
		FourthDownAttempts: FormControl<number | null | undefined>,
		FourthDownConversions: FormControl<number | null | undefined>,
		FourthDownPercentage: FormControl<number | null | undefined>,
		FumbleReturnTouchdowns: FormControl<number | null | undefined>,
		FumbleReturnYards: FormControl<number | null | undefined>,
		Fumbles: FormControl<number | null | undefined>,
		FumblesForced: FormControl<number | null | undefined>,
		FumblesLost: FormControl<number | null | undefined>,
		FumblesRecovered: FormControl<number | null | undefined>,
		GameKey: FormControl<string | null | undefined>,
		Giveaways: FormControl<number | null | undefined>,
		GlobalGameID: FormControl<number | null | undefined>,
		GlobalOpponentID: FormControl<number | null | undefined>,
		GlobalTeamID: FormControl<number | null | undefined>,
		GoalToGoAttempts: FormControl<number | null | undefined>,
		GoalToGoConversions: FormControl<number | null | undefined>,
		GoalToGoPercentage: FormControl<number | null | undefined>,
		HomeOrAway: FormControl<string | null | undefined>,
		Humidity: FormControl<number | null | undefined>,
		InterceptionReturnTouchdowns: FormControl<number | null | undefined>,
		InterceptionReturnYards: FormControl<number | null | undefined>,
		InterceptionReturns: FormControl<number | null | undefined>,
		IsGameOver: FormControl<boolean | null | undefined>,
		KickReturnAverage: FormControl<number | null | undefined>,
		KickReturnLong: FormControl<number | null | undefined>,
		KickReturnTouchdowns: FormControl<number | null | undefined>,
		KickReturnYardDifferential: FormControl<number | null | undefined>,
		KickReturnYards: FormControl<number | null | undefined>,
		KickReturns: FormControl<number | null | undefined>,
		KickoffTouchbacks: FormControl<number | null | undefined>,
		Kickoffs: FormControl<number | null | undefined>,
		KickoffsInEndZone: FormControl<number | null | undefined>,
		OffensivePlays: FormControl<number | null | undefined>,
		OffensiveYards: FormControl<number | null | undefined>,
		OffensiveYardsPerPlay: FormControl<number | null | undefined>,
		Opponent: FormControl<string | null | undefined>,
		OpponentAssistedTackles: FormControl<number | null | undefined>,
		OpponentBlockedKickReturnTouchdowns: FormControl<number | null | undefined>,
		OpponentBlockedKickReturnYards: FormControl<number | null | undefined>,
		OpponentBlockedKicks: FormControl<number | null | undefined>,
		OpponentCompletionPercentage: FormControl<number | null | undefined>,
		OpponentExtraPointKickingAttempts: FormControl<number | null | undefined>,
		OpponentExtraPointKickingConversions: FormControl<number | null | undefined>,
		OpponentExtraPointPassingAttempts: FormControl<number | null | undefined>,
		OpponentExtraPointPassingConversions: FormControl<number | null | undefined>,
		OpponentExtraPointPercentage: FormControl<number | null | undefined>,
		OpponentExtraPointRushingAttempts: FormControl<number | null | undefined>,
		OpponentExtraPointRushingConversions: FormControl<number | null | undefined>,
		OpponentExtraPointsHadBlocked: FormControl<number | null | undefined>,
		OpponentFieldGoalAttempts: FormControl<number | null | undefined>,
		OpponentFieldGoalPercentage: FormControl<number | null | undefined>,
		OpponentFieldGoalReturnTouchdowns: FormControl<number | null | undefined>,
		OpponentFieldGoalReturnYards: FormControl<number | null | undefined>,
		OpponentFieldGoalsHadBlocked: FormControl<number | null | undefined>,
		OpponentFieldGoalsMade: FormControl<number | null | undefined>,
		OpponentFirstDowns: FormControl<number | null | undefined>,
		OpponentFirstDownsByPassing: FormControl<number | null | undefined>,
		OpponentFirstDownsByPenalty: FormControl<number | null | undefined>,
		OpponentFirstDownsByRushing: FormControl<number | null | undefined>,
		OpponentFourthDownAttempts: FormControl<number | null | undefined>,
		OpponentFourthDownConversions: FormControl<number | null | undefined>,
		OpponentFourthDownPercentage: FormControl<number | null | undefined>,
		OpponentFumbleReturnTouchdowns: FormControl<number | null | undefined>,
		OpponentFumbleReturnYards: FormControl<number | null | undefined>,
		OpponentFumbles: FormControl<number | null | undefined>,
		OpponentFumblesForced: FormControl<number | null | undefined>,
		OpponentFumblesLost: FormControl<number | null | undefined>,
		OpponentFumblesRecovered: FormControl<number | null | undefined>,
		OpponentGiveaways: FormControl<number | null | undefined>,
		OpponentGoalToGoAttempts: FormControl<number | null | undefined>,
		OpponentGoalToGoConversions: FormControl<number | null | undefined>,
		OpponentGoalToGoPercentage: FormControl<number | null | undefined>,
		OpponentID: FormControl<number | null | undefined>,
		OpponentInterceptionReturnTouchdowns: FormControl<number | null | undefined>,
		OpponentInterceptionReturnYards: FormControl<number | null | undefined>,
		OpponentInterceptionReturns: FormControl<number | null | undefined>,
		OpponentKickReturnAverage: FormControl<number | null | undefined>,
		OpponentKickReturnLong: FormControl<number | null | undefined>,
		OpponentKickReturnTouchdowns: FormControl<number | null | undefined>,
		OpponentKickReturnYards: FormControl<number | null | undefined>,
		OpponentKickReturns: FormControl<number | null | undefined>,
		OpponentKickoffTouchbacks: FormControl<number | null | undefined>,
		OpponentKickoffs: FormControl<number | null | undefined>,
		OpponentKickoffsInEndZone: FormControl<number | null | undefined>,
		OpponentOffensivePlays: FormControl<number | null | undefined>,
		OpponentOffensiveYards: FormControl<number | null | undefined>,
		OpponentOffensiveYardsPerPlay: FormControl<number | null | undefined>,
		OpponentPasserRating: FormControl<number | null | undefined>,
		OpponentPassesDefended: FormControl<number | null | undefined>,
		OpponentPassingAttempts: FormControl<number | null | undefined>,
		OpponentPassingCompletions: FormControl<number | null | undefined>,
		OpponentPassingDropbacks: FormControl<number | null | undefined>,
		OpponentPassingInterceptionPercentage: FormControl<number | null | undefined>,
		OpponentPassingInterceptions: FormControl<number | null | undefined>,
		OpponentPassingTouchdowns: FormControl<number | null | undefined>,
		OpponentPassingYards: FormControl<number | null | undefined>,
		OpponentPassingYardsPerAttempt: FormControl<number | null | undefined>,
		OpponentPassingYardsPerCompletion: FormControl<number | null | undefined>,
		OpponentPenalties: FormControl<number | null | undefined>,
		OpponentPenaltyYards: FormControl<number | null | undefined>,
		OpponentPuntAverage: FormControl<number | null | undefined>,
		OpponentPuntNetAverage: FormControl<number | null | undefined>,
		OpponentPuntNetYards: FormControl<number | null | undefined>,
		OpponentPuntReturnAverage: FormControl<number | null | undefined>,
		OpponentPuntReturnLong: FormControl<number | null | undefined>,
		OpponentPuntReturnTouchdowns: FormControl<number | null | undefined>,
		OpponentPuntReturnYards: FormControl<number | null | undefined>,
		OpponentPuntReturns: FormControl<number | null | undefined>,
		OpponentPuntYards: FormControl<number | null | undefined>,
		OpponentPunts: FormControl<number | null | undefined>,
		OpponentPuntsHadBlocked: FormControl<number | null | undefined>,
		OpponentQuarterbackHits: FormControl<number | null | undefined>,
		OpponentQuarterbackHitsDifferential: FormControl<number | null | undefined>,
		OpponentQuarterbackHitsPercentage: FormControl<number | null | undefined>,
		OpponentQuarterbackSacksDifferential: FormControl<number | null | undefined>,
		OpponentRedZoneAttempts: FormControl<number | null | undefined>,
		OpponentRedZoneConversions: FormControl<number | null | undefined>,
		OpponentRedZonePercentage: FormControl<number | null | undefined>,
		OpponentReturnYards: FormControl<number | null | undefined>,
		OpponentRushingAttempts: FormControl<number | null | undefined>,
		OpponentRushingTouchdowns: FormControl<number | null | undefined>,
		OpponentRushingYards: FormControl<number | null | undefined>,
		OpponentRushingYardsPerAttempt: FormControl<number | null | undefined>,
		OpponentSackYards: FormControl<number | null | undefined>,
		OpponentSacks: FormControl<number | null | undefined>,
		OpponentSafeties: FormControl<number | null | undefined>,
		OpponentScore: FormControl<number | null | undefined>,
		OpponentScoreOvertime: FormControl<number | null | undefined>,
		OpponentScoreQuarter1: FormControl<number | null | undefined>,
		OpponentScoreQuarter2: FormControl<number | null | undefined>,
		OpponentScoreQuarter3: FormControl<number | null | undefined>,
		OpponentScoreQuarter4: FormControl<number | null | undefined>,
		OpponentSoloTackles: FormControl<number | null | undefined>,
		OpponentTacklesForLoss: FormControl<number | null | undefined>,
		OpponentTacklesForLossDifferential: FormControl<number | null | undefined>,
		OpponentTacklesForLossPercentage: FormControl<number | null | undefined>,
		OpponentTakeaways: FormControl<number | null | undefined>,
		OpponentThirdDownAttempts: FormControl<number | null | undefined>,
		OpponentThirdDownConversions: FormControl<number | null | undefined>,
		OpponentThirdDownPercentage: FormControl<number | null | undefined>,
		OpponentTimeOfPossession: FormControl<string | null | undefined>,
		OpponentTimeOfPossessionMinutes: FormControl<number | null | undefined>,
		OpponentTimeOfPossessionSeconds: FormControl<number | null | undefined>,
		OpponentTimesSacked: FormControl<number | null | undefined>,
		OpponentTimesSackedPercentage: FormControl<number | null | undefined>,
		OpponentTimesSackedYards: FormControl<number | null | undefined>,
		OpponentTouchdowns: FormControl<number | null | undefined>,
		OpponentTurnoverDifferential: FormControl<number | null | undefined>,
		OpponentTwoPointConversionReturns: FormControl<number | null | undefined>,
		OverUnder: FormControl<number | null | undefined>,
		PasserRating: FormControl<number | null | undefined>,
		PassesDefended: FormControl<number | null | undefined>,
		PassingAttempts: FormControl<number | null | undefined>,
		PassingCompletions: FormControl<number | null | undefined>,
		PassingDropbacks: FormControl<number | null | undefined>,
		PassingInterceptionPercentage: FormControl<number | null | undefined>,
		PassingInterceptions: FormControl<number | null | undefined>,
		PassingTouchdowns: FormControl<number | null | undefined>,
		PassingYards: FormControl<number | null | undefined>,
		PassingYardsPerAttempt: FormControl<number | null | undefined>,
		PassingYardsPerCompletion: FormControl<number | null | undefined>,
		Penalties: FormControl<number | null | undefined>,
		PenaltyYardDifferential: FormControl<number | null | undefined>,
		PenaltyYards: FormControl<number | null | undefined>,
		PlayingSurface: FormControl<string | null | undefined>,
		PointDifferential: FormControl<number | null | undefined>,
		PointSpread: FormControl<number | null | undefined>,
		PuntAverage: FormControl<number | null | undefined>,
		PuntNetAverage: FormControl<number | null | undefined>,
		PuntNetYards: FormControl<number | null | undefined>,
		PuntReturnAverage: FormControl<number | null | undefined>,
		PuntReturnLong: FormControl<number | null | undefined>,
		PuntReturnTouchdowns: FormControl<number | null | undefined>,
		PuntReturnYardDifferential: FormControl<number | null | undefined>,
		PuntReturnYards: FormControl<number | null | undefined>,
		PuntReturns: FormControl<number | null | undefined>,
		PuntYards: FormControl<number | null | undefined>,
		Punts: FormControl<number | null | undefined>,
		PuntsHadBlocked: FormControl<number | null | undefined>,
		QuarterbackHits: FormControl<number | null | undefined>,
		QuarterbackHitsDifferential: FormControl<number | null | undefined>,
		QuarterbackHitsPercentage: FormControl<number | null | undefined>,
		QuarterbackSacksDifferential: FormControl<number | null | undefined>,
		RedZoneAttempts: FormControl<number | null | undefined>,
		RedZoneConversions: FormControl<number | null | undefined>,
		RedZonePercentage: FormControl<number | null | undefined>,
		ReturnYards: FormControl<number | null | undefined>,
		RushingAttempts: FormControl<number | null | undefined>,
		RushingTouchdowns: FormControl<number | null | undefined>,
		RushingYards: FormControl<number | null | undefined>,
		RushingYardsPerAttempt: FormControl<number | null | undefined>,
		SackYards: FormControl<number | null | undefined>,
		Sacks: FormControl<number | null | undefined>,
		Safeties: FormControl<number | null | undefined>,
		Score: FormControl<number | null | undefined>,
		ScoreID: FormControl<number | null | undefined>,
		ScoreOvertime: FormControl<number | null | undefined>,
		ScoreQuarter1: FormControl<number | null | undefined>,
		ScoreQuarter2: FormControl<number | null | undefined>,
		ScoreQuarter3: FormControl<number | null | undefined>,
		ScoreQuarter4: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		SoloTackles: FormControl<number | null | undefined>,
		Stadium: FormControl<string | null | undefined>,
		TacklesForLoss: FormControl<number | null | undefined>,
		TacklesForLossDifferential: FormControl<number | null | undefined>,
		TacklesForLossPercentage: FormControl<number | null | undefined>,
		Takeaways: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,
		TeamGameID: FormControl<number | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
		TeamName: FormControl<string | null | undefined>,
		Temperature: FormControl<number | null | undefined>,
		ThirdDownAttempts: FormControl<number | null | undefined>,
		ThirdDownConversions: FormControl<number | null | undefined>,
		ThirdDownPercentage: FormControl<number | null | undefined>,
		TimeOfPossession: FormControl<string | null | undefined>,
		TimeOfPossessionMinutes: FormControl<number | null | undefined>,
		TimeOfPossessionSeconds: FormControl<number | null | undefined>,
		TimesSacked: FormControl<number | null | undefined>,
		TimesSackedPercentage: FormControl<number | null | undefined>,
		TimesSackedYards: FormControl<number | null | undefined>,
		TotalScore: FormControl<number | null | undefined>,
		Touchdowns: FormControl<number | null | undefined>,
		TurnoverDifferential: FormControl<number | null | undefined>,
		TwoPointConversionReturns: FormControl<number | null | undefined>,
		Week: FormControl<number | null | undefined>,
		WindSpeed: FormControl<number | null | undefined>,
	}
	export function CreateTeamGameFormGroup() {
		return new FormGroup<TeamGameFormProperties>({
			AssistedTackles: new FormControl<number | null | undefined>(undefined),
			BlockedKickReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			BlockedKickReturnYards: new FormControl<number | null | undefined>(undefined),
			BlockedKicks: new FormControl<number | null | undefined>(undefined),
			CompletionPercentage: new FormControl<number | null | undefined>(undefined),
			Date: new FormControl<string | null | undefined>(undefined),
			DateTime: new FormControl<string | null | undefined>(undefined),
			Day: new FormControl<string | null | undefined>(undefined),
			DayOfWeek: new FormControl<string | null | undefined>(undefined),
			ExtraPointKickingAttempts: new FormControl<number | null | undefined>(undefined),
			ExtraPointKickingConversions: new FormControl<number | null | undefined>(undefined),
			ExtraPointPassingAttempts: new FormControl<number | null | undefined>(undefined),
			ExtraPointPassingConversions: new FormControl<number | null | undefined>(undefined),
			ExtraPointPercentage: new FormControl<number | null | undefined>(undefined),
			ExtraPointRushingAttempts: new FormControl<number | null | undefined>(undefined),
			ExtraPointRushingConversions: new FormControl<number | null | undefined>(undefined),
			ExtraPointsHadBlocked: new FormControl<number | null | undefined>(undefined),
			FieldGoalAttempts: new FormControl<number | null | undefined>(undefined),
			FieldGoalPercentage: new FormControl<number | null | undefined>(undefined),
			FieldGoalReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			FieldGoalReturnYards: new FormControl<number | null | undefined>(undefined),
			FieldGoalsHadBlocked: new FormControl<number | null | undefined>(undefined),
			FieldGoalsMade: new FormControl<number | null | undefined>(undefined),
			FirstDowns: new FormControl<number | null | undefined>(undefined),
			FirstDownsByPassing: new FormControl<number | null | undefined>(undefined),
			FirstDownsByPenalty: new FormControl<number | null | undefined>(undefined),
			FirstDownsByRushing: new FormControl<number | null | undefined>(undefined),
			FourthDownAttempts: new FormControl<number | null | undefined>(undefined),
			FourthDownConversions: new FormControl<number | null | undefined>(undefined),
			FourthDownPercentage: new FormControl<number | null | undefined>(undefined),
			FumbleReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			FumbleReturnYards: new FormControl<number | null | undefined>(undefined),
			Fumbles: new FormControl<number | null | undefined>(undefined),
			FumblesForced: new FormControl<number | null | undefined>(undefined),
			FumblesLost: new FormControl<number | null | undefined>(undefined),
			FumblesRecovered: new FormControl<number | null | undefined>(undefined),
			GameKey: new FormControl<string | null | undefined>(undefined),
			Giveaways: new FormControl<number | null | undefined>(undefined),
			GlobalGameID: new FormControl<number | null | undefined>(undefined),
			GlobalOpponentID: new FormControl<number | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			GoalToGoAttempts: new FormControl<number | null | undefined>(undefined),
			GoalToGoConversions: new FormControl<number | null | undefined>(undefined),
			GoalToGoPercentage: new FormControl<number | null | undefined>(undefined),
			HomeOrAway: new FormControl<string | null | undefined>(undefined),
			Humidity: new FormControl<number | null | undefined>(undefined),
			InterceptionReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			InterceptionReturnYards: new FormControl<number | null | undefined>(undefined),
			InterceptionReturns: new FormControl<number | null | undefined>(undefined),
			IsGameOver: new FormControl<boolean | null | undefined>(undefined),
			KickReturnAverage: new FormControl<number | null | undefined>(undefined),
			KickReturnLong: new FormControl<number | null | undefined>(undefined),
			KickReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			KickReturnYardDifferential: new FormControl<number | null | undefined>(undefined),
			KickReturnYards: new FormControl<number | null | undefined>(undefined),
			KickReturns: new FormControl<number | null | undefined>(undefined),
			KickoffTouchbacks: new FormControl<number | null | undefined>(undefined),
			Kickoffs: new FormControl<number | null | undefined>(undefined),
			KickoffsInEndZone: new FormControl<number | null | undefined>(undefined),
			OffensivePlays: new FormControl<number | null | undefined>(undefined),
			OffensiveYards: new FormControl<number | null | undefined>(undefined),
			OffensiveYardsPerPlay: new FormControl<number | null | undefined>(undefined),
			Opponent: new FormControl<string | null | undefined>(undefined),
			OpponentAssistedTackles: new FormControl<number | null | undefined>(undefined),
			OpponentBlockedKickReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			OpponentBlockedKickReturnYards: new FormControl<number | null | undefined>(undefined),
			OpponentBlockedKicks: new FormControl<number | null | undefined>(undefined),
			OpponentCompletionPercentage: new FormControl<number | null | undefined>(undefined),
			OpponentExtraPointKickingAttempts: new FormControl<number | null | undefined>(undefined),
			OpponentExtraPointKickingConversions: new FormControl<number | null | undefined>(undefined),
			OpponentExtraPointPassingAttempts: new FormControl<number | null | undefined>(undefined),
			OpponentExtraPointPassingConversions: new FormControl<number | null | undefined>(undefined),
			OpponentExtraPointPercentage: new FormControl<number | null | undefined>(undefined),
			OpponentExtraPointRushingAttempts: new FormControl<number | null | undefined>(undefined),
			OpponentExtraPointRushingConversions: new FormControl<number | null | undefined>(undefined),
			OpponentExtraPointsHadBlocked: new FormControl<number | null | undefined>(undefined),
			OpponentFieldGoalAttempts: new FormControl<number | null | undefined>(undefined),
			OpponentFieldGoalPercentage: new FormControl<number | null | undefined>(undefined),
			OpponentFieldGoalReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			OpponentFieldGoalReturnYards: new FormControl<number | null | undefined>(undefined),
			OpponentFieldGoalsHadBlocked: new FormControl<number | null | undefined>(undefined),
			OpponentFieldGoalsMade: new FormControl<number | null | undefined>(undefined),
			OpponentFirstDowns: new FormControl<number | null | undefined>(undefined),
			OpponentFirstDownsByPassing: new FormControl<number | null | undefined>(undefined),
			OpponentFirstDownsByPenalty: new FormControl<number | null | undefined>(undefined),
			OpponentFirstDownsByRushing: new FormControl<number | null | undefined>(undefined),
			OpponentFourthDownAttempts: new FormControl<number | null | undefined>(undefined),
			OpponentFourthDownConversions: new FormControl<number | null | undefined>(undefined),
			OpponentFourthDownPercentage: new FormControl<number | null | undefined>(undefined),
			OpponentFumbleReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			OpponentFumbleReturnYards: new FormControl<number | null | undefined>(undefined),
			OpponentFumbles: new FormControl<number | null | undefined>(undefined),
			OpponentFumblesForced: new FormControl<number | null | undefined>(undefined),
			OpponentFumblesLost: new FormControl<number | null | undefined>(undefined),
			OpponentFumblesRecovered: new FormControl<number | null | undefined>(undefined),
			OpponentGiveaways: new FormControl<number | null | undefined>(undefined),
			OpponentGoalToGoAttempts: new FormControl<number | null | undefined>(undefined),
			OpponentGoalToGoConversions: new FormControl<number | null | undefined>(undefined),
			OpponentGoalToGoPercentage: new FormControl<number | null | undefined>(undefined),
			OpponentID: new FormControl<number | null | undefined>(undefined),
			OpponentInterceptionReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			OpponentInterceptionReturnYards: new FormControl<number | null | undefined>(undefined),
			OpponentInterceptionReturns: new FormControl<number | null | undefined>(undefined),
			OpponentKickReturnAverage: new FormControl<number | null | undefined>(undefined),
			OpponentKickReturnLong: new FormControl<number | null | undefined>(undefined),
			OpponentKickReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			OpponentKickReturnYards: new FormControl<number | null | undefined>(undefined),
			OpponentKickReturns: new FormControl<number | null | undefined>(undefined),
			OpponentKickoffTouchbacks: new FormControl<number | null | undefined>(undefined),
			OpponentKickoffs: new FormControl<number | null | undefined>(undefined),
			OpponentKickoffsInEndZone: new FormControl<number | null | undefined>(undefined),
			OpponentOffensivePlays: new FormControl<number | null | undefined>(undefined),
			OpponentOffensiveYards: new FormControl<number | null | undefined>(undefined),
			OpponentOffensiveYardsPerPlay: new FormControl<number | null | undefined>(undefined),
			OpponentPasserRating: new FormControl<number | null | undefined>(undefined),
			OpponentPassesDefended: new FormControl<number | null | undefined>(undefined),
			OpponentPassingAttempts: new FormControl<number | null | undefined>(undefined),
			OpponentPassingCompletions: new FormControl<number | null | undefined>(undefined),
			OpponentPassingDropbacks: new FormControl<number | null | undefined>(undefined),
			OpponentPassingInterceptionPercentage: new FormControl<number | null | undefined>(undefined),
			OpponentPassingInterceptions: new FormControl<number | null | undefined>(undefined),
			OpponentPassingTouchdowns: new FormControl<number | null | undefined>(undefined),
			OpponentPassingYards: new FormControl<number | null | undefined>(undefined),
			OpponentPassingYardsPerAttempt: new FormControl<number | null | undefined>(undefined),
			OpponentPassingYardsPerCompletion: new FormControl<number | null | undefined>(undefined),
			OpponentPenalties: new FormControl<number | null | undefined>(undefined),
			OpponentPenaltyYards: new FormControl<number | null | undefined>(undefined),
			OpponentPuntAverage: new FormControl<number | null | undefined>(undefined),
			OpponentPuntNetAverage: new FormControl<number | null | undefined>(undefined),
			OpponentPuntNetYards: new FormControl<number | null | undefined>(undefined),
			OpponentPuntReturnAverage: new FormControl<number | null | undefined>(undefined),
			OpponentPuntReturnLong: new FormControl<number | null | undefined>(undefined),
			OpponentPuntReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			OpponentPuntReturnYards: new FormControl<number | null | undefined>(undefined),
			OpponentPuntReturns: new FormControl<number | null | undefined>(undefined),
			OpponentPuntYards: new FormControl<number | null | undefined>(undefined),
			OpponentPunts: new FormControl<number | null | undefined>(undefined),
			OpponentPuntsHadBlocked: new FormControl<number | null | undefined>(undefined),
			OpponentQuarterbackHits: new FormControl<number | null | undefined>(undefined),
			OpponentQuarterbackHitsDifferential: new FormControl<number | null | undefined>(undefined),
			OpponentQuarterbackHitsPercentage: new FormControl<number | null | undefined>(undefined),
			OpponentQuarterbackSacksDifferential: new FormControl<number | null | undefined>(undefined),
			OpponentRedZoneAttempts: new FormControl<number | null | undefined>(undefined),
			OpponentRedZoneConversions: new FormControl<number | null | undefined>(undefined),
			OpponentRedZonePercentage: new FormControl<number | null | undefined>(undefined),
			OpponentReturnYards: new FormControl<number | null | undefined>(undefined),
			OpponentRushingAttempts: new FormControl<number | null | undefined>(undefined),
			OpponentRushingTouchdowns: new FormControl<number | null | undefined>(undefined),
			OpponentRushingYards: new FormControl<number | null | undefined>(undefined),
			OpponentRushingYardsPerAttempt: new FormControl<number | null | undefined>(undefined),
			OpponentSackYards: new FormControl<number | null | undefined>(undefined),
			OpponentSacks: new FormControl<number | null | undefined>(undefined),
			OpponentSafeties: new FormControl<number | null | undefined>(undefined),
			OpponentScore: new FormControl<number | null | undefined>(undefined),
			OpponentScoreOvertime: new FormControl<number | null | undefined>(undefined),
			OpponentScoreQuarter1: new FormControl<number | null | undefined>(undefined),
			OpponentScoreQuarter2: new FormControl<number | null | undefined>(undefined),
			OpponentScoreQuarter3: new FormControl<number | null | undefined>(undefined),
			OpponentScoreQuarter4: new FormControl<number | null | undefined>(undefined),
			OpponentSoloTackles: new FormControl<number | null | undefined>(undefined),
			OpponentTacklesForLoss: new FormControl<number | null | undefined>(undefined),
			OpponentTacklesForLossDifferential: new FormControl<number | null | undefined>(undefined),
			OpponentTacklesForLossPercentage: new FormControl<number | null | undefined>(undefined),
			OpponentTakeaways: new FormControl<number | null | undefined>(undefined),
			OpponentThirdDownAttempts: new FormControl<number | null | undefined>(undefined),
			OpponentThirdDownConversions: new FormControl<number | null | undefined>(undefined),
			OpponentThirdDownPercentage: new FormControl<number | null | undefined>(undefined),
			OpponentTimeOfPossession: new FormControl<string | null | undefined>(undefined),
			OpponentTimeOfPossessionMinutes: new FormControl<number | null | undefined>(undefined),
			OpponentTimeOfPossessionSeconds: new FormControl<number | null | undefined>(undefined),
			OpponentTimesSacked: new FormControl<number | null | undefined>(undefined),
			OpponentTimesSackedPercentage: new FormControl<number | null | undefined>(undefined),
			OpponentTimesSackedYards: new FormControl<number | null | undefined>(undefined),
			OpponentTouchdowns: new FormControl<number | null | undefined>(undefined),
			OpponentTurnoverDifferential: new FormControl<number | null | undefined>(undefined),
			OpponentTwoPointConversionReturns: new FormControl<number | null | undefined>(undefined),
			OverUnder: new FormControl<number | null | undefined>(undefined),
			PasserRating: new FormControl<number | null | undefined>(undefined),
			PassesDefended: new FormControl<number | null | undefined>(undefined),
			PassingAttempts: new FormControl<number | null | undefined>(undefined),
			PassingCompletions: new FormControl<number | null | undefined>(undefined),
			PassingDropbacks: new FormControl<number | null | undefined>(undefined),
			PassingInterceptionPercentage: new FormControl<number | null | undefined>(undefined),
			PassingInterceptions: new FormControl<number | null | undefined>(undefined),
			PassingTouchdowns: new FormControl<number | null | undefined>(undefined),
			PassingYards: new FormControl<number | null | undefined>(undefined),
			PassingYardsPerAttempt: new FormControl<number | null | undefined>(undefined),
			PassingYardsPerCompletion: new FormControl<number | null | undefined>(undefined),
			Penalties: new FormControl<number | null | undefined>(undefined),
			PenaltyYardDifferential: new FormControl<number | null | undefined>(undefined),
			PenaltyYards: new FormControl<number | null | undefined>(undefined),
			PlayingSurface: new FormControl<string | null | undefined>(undefined),
			PointDifferential: new FormControl<number | null | undefined>(undefined),
			PointSpread: new FormControl<number | null | undefined>(undefined),
			PuntAverage: new FormControl<number | null | undefined>(undefined),
			PuntNetAverage: new FormControl<number | null | undefined>(undefined),
			PuntNetYards: new FormControl<number | null | undefined>(undefined),
			PuntReturnAverage: new FormControl<number | null | undefined>(undefined),
			PuntReturnLong: new FormControl<number | null | undefined>(undefined),
			PuntReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			PuntReturnYardDifferential: new FormControl<number | null | undefined>(undefined),
			PuntReturnYards: new FormControl<number | null | undefined>(undefined),
			PuntReturns: new FormControl<number | null | undefined>(undefined),
			PuntYards: new FormControl<number | null | undefined>(undefined),
			Punts: new FormControl<number | null | undefined>(undefined),
			PuntsHadBlocked: new FormControl<number | null | undefined>(undefined),
			QuarterbackHits: new FormControl<number | null | undefined>(undefined),
			QuarterbackHitsDifferential: new FormControl<number | null | undefined>(undefined),
			QuarterbackHitsPercentage: new FormControl<number | null | undefined>(undefined),
			QuarterbackSacksDifferential: new FormControl<number | null | undefined>(undefined),
			RedZoneAttempts: new FormControl<number | null | undefined>(undefined),
			RedZoneConversions: new FormControl<number | null | undefined>(undefined),
			RedZonePercentage: new FormControl<number | null | undefined>(undefined),
			ReturnYards: new FormControl<number | null | undefined>(undefined),
			RushingAttempts: new FormControl<number | null | undefined>(undefined),
			RushingTouchdowns: new FormControl<number | null | undefined>(undefined),
			RushingYards: new FormControl<number | null | undefined>(undefined),
			RushingYardsPerAttempt: new FormControl<number | null | undefined>(undefined),
			SackYards: new FormControl<number | null | undefined>(undefined),
			Sacks: new FormControl<number | null | undefined>(undefined),
			Safeties: new FormControl<number | null | undefined>(undefined),
			Score: new FormControl<number | null | undefined>(undefined),
			ScoreID: new FormControl<number | null | undefined>(undefined),
			ScoreOvertime: new FormControl<number | null | undefined>(undefined),
			ScoreQuarter1: new FormControl<number | null | undefined>(undefined),
			ScoreQuarter2: new FormControl<number | null | undefined>(undefined),
			ScoreQuarter3: new FormControl<number | null | undefined>(undefined),
			ScoreQuarter4: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			SoloTackles: new FormControl<number | null | undefined>(undefined),
			Stadium: new FormControl<string | null | undefined>(undefined),
			TacklesForLoss: new FormControl<number | null | undefined>(undefined),
			TacklesForLossDifferential: new FormControl<number | null | undefined>(undefined),
			TacklesForLossPercentage: new FormControl<number | null | undefined>(undefined),
			Takeaways: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamGameID: new FormControl<number | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			TeamName: new FormControl<string | null | undefined>(undefined),
			Temperature: new FormControl<number | null | undefined>(undefined),
			ThirdDownAttempts: new FormControl<number | null | undefined>(undefined),
			ThirdDownConversions: new FormControl<number | null | undefined>(undefined),
			ThirdDownPercentage: new FormControl<number | null | undefined>(undefined),
			TimeOfPossession: new FormControl<string | null | undefined>(undefined),
			TimeOfPossessionMinutes: new FormControl<number | null | undefined>(undefined),
			TimeOfPossessionSeconds: new FormControl<number | null | undefined>(undefined),
			TimesSacked: new FormControl<number | null | undefined>(undefined),
			TimesSackedPercentage: new FormControl<number | null | undefined>(undefined),
			TimesSackedYards: new FormControl<number | null | undefined>(undefined),
			TotalScore: new FormControl<number | null | undefined>(undefined),
			Touchdowns: new FormControl<number | null | undefined>(undefined),
			TurnoverDifferential: new FormControl<number | null | undefined>(undefined),
			TwoPointConversionReturns: new FormControl<number | null | undefined>(undefined),
			Week: new FormControl<number | null | undefined>(undefined),
			WindSpeed: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TeamSeason {
		AssistedTackles?: number | null;
		BlockedKickReturnTouchdowns?: number | null;
		BlockedKickReturnYards?: number | null;
		BlockedKicks?: number | null;
		CompletionPercentage?: number | null;
		ExtraPointKickingAttempts?: number | null;
		ExtraPointKickingConversions?: number | null;
		ExtraPointPassingAttempts?: number | null;
		ExtraPointPassingConversions?: number | null;
		ExtraPointPercentage?: number | null;
		ExtraPointRushingAttempts?: number | null;
		ExtraPointRushingConversions?: number | null;
		ExtraPointsHadBlocked?: number | null;
		FieldGoalAttempts?: number | null;
		FieldGoalPercentage?: number | null;
		FieldGoalReturnTouchdowns?: number | null;
		FieldGoalReturnYards?: number | null;
		FieldGoalsHadBlocked?: number | null;
		FieldGoalsMade?: number | null;
		FirstDowns?: number | null;
		FirstDownsByPassing?: number | null;
		FirstDownsByPenalty?: number | null;
		FirstDownsByRushing?: number | null;
		FourthDownAttempts?: number | null;
		FourthDownConversions?: number | null;
		FourthDownPercentage?: number | null;
		FumbleReturnTouchdowns?: number | null;
		FumbleReturnYards?: number | null;
		Fumbles?: number | null;
		FumblesForced?: number | null;
		FumblesLost?: number | null;
		FumblesRecovered?: number | null;
		Games?: number | null;
		Giveaways?: number | null;
		GlobalTeamID?: number | null;
		GoalToGoAttempts?: number | null;
		GoalToGoConversions?: number | null;
		GoalToGoPercentage?: number | null;
		Humidity?: number | null;
		InterceptionReturnTouchdowns?: number | null;
		InterceptionReturnYards?: number | null;
		InterceptionReturns?: number | null;
		KickReturnAverage?: number | null;
		KickReturnLong?: number | null;
		KickReturnTouchdowns?: number | null;
		KickReturnYardDifferential?: number | null;
		KickReturnYards?: number | null;
		KickReturns?: number | null;
		KickoffTouchbacks?: number | null;
		Kickoffs?: number | null;
		KickoffsInEndZone?: number | null;
		OffensivePlays?: number | null;
		OffensiveYards?: number | null;
		OffensiveYardsPerPlay?: number | null;
		OpponentAssistedTackles?: number | null;
		OpponentBlockedKickReturnTouchdowns?: number | null;
		OpponentBlockedKickReturnYards?: number | null;
		OpponentBlockedKicks?: number | null;
		OpponentCompletionPercentage?: number | null;
		OpponentExtraPointKickingAttempts?: number | null;
		OpponentExtraPointKickingConversions?: number | null;
		OpponentExtraPointPassingAttempts?: number | null;
		OpponentExtraPointPassingConversions?: number | null;
		OpponentExtraPointPercentage?: number | null;
		OpponentExtraPointRushingAttempts?: number | null;
		OpponentExtraPointRushingConversions?: number | null;
		OpponentExtraPointsHadBlocked?: number | null;
		OpponentFieldGoalAttempts?: number | null;
		OpponentFieldGoalPercentage?: number | null;
		OpponentFieldGoalReturnTouchdowns?: number | null;
		OpponentFieldGoalReturnYards?: number | null;
		OpponentFieldGoalsHadBlocked?: number | null;
		OpponentFieldGoalsMade?: number | null;
		OpponentFirstDowns?: number | null;
		OpponentFirstDownsByPassing?: number | null;
		OpponentFirstDownsByPenalty?: number | null;
		OpponentFirstDownsByRushing?: number | null;
		OpponentFourthDownAttempts?: number | null;
		OpponentFourthDownConversions?: number | null;
		OpponentFourthDownPercentage?: number | null;
		OpponentFumbleReturnTouchdowns?: number | null;
		OpponentFumbleReturnYards?: number | null;
		OpponentFumbles?: number | null;
		OpponentFumblesForced?: number | null;
		OpponentFumblesLost?: number | null;
		OpponentFumblesRecovered?: number | null;
		OpponentGiveaways?: number | null;
		OpponentGoalToGoAttempts?: number | null;
		OpponentGoalToGoConversions?: number | null;
		OpponentGoalToGoPercentage?: number | null;
		OpponentInterceptionReturnTouchdowns?: number | null;
		OpponentInterceptionReturnYards?: number | null;
		OpponentInterceptionReturns?: number | null;
		OpponentKickReturnAverage?: number | null;
		OpponentKickReturnLong?: number | null;
		OpponentKickReturnTouchdowns?: number | null;
		OpponentKickReturnYards?: number | null;
		OpponentKickReturns?: number | null;
		OpponentKickoffTouchbacks?: number | null;
		OpponentKickoffs?: number | null;
		OpponentKickoffsInEndZone?: number | null;
		OpponentOffensivePlays?: number | null;
		OpponentOffensiveYards?: number | null;
		OpponentOffensiveYardsPerPlay?: number | null;
		OpponentPasserRating?: number | null;
		OpponentPassesDefended?: number | null;
		OpponentPassingAttempts?: number | null;
		OpponentPassingCompletions?: number | null;
		OpponentPassingDropbacks?: number | null;
		OpponentPassingInterceptionPercentage?: number | null;
		OpponentPassingInterceptions?: number | null;
		OpponentPassingTouchdowns?: number | null;
		OpponentPassingYards?: number | null;
		OpponentPassingYardsPerAttempt?: number | null;
		OpponentPassingYardsPerCompletion?: number | null;
		OpponentPenalties?: number | null;
		OpponentPenaltyYards?: number | null;
		OpponentPuntAverage?: number | null;
		OpponentPuntNetAverage?: number | null;
		OpponentPuntNetYards?: number | null;
		OpponentPuntReturnAverage?: number | null;
		OpponentPuntReturnLong?: number | null;
		OpponentPuntReturnTouchdowns?: number | null;
		OpponentPuntReturnYards?: number | null;
		OpponentPuntReturns?: number | null;
		OpponentPuntYards?: number | null;
		OpponentPunts?: number | null;
		OpponentPuntsHadBlocked?: number | null;
		OpponentQuarterbackHits?: number | null;
		OpponentQuarterbackHitsDifferential?: number | null;
		OpponentQuarterbackHitsPercentage?: number | null;
		OpponentQuarterbackSacksDifferential?: number | null;
		OpponentRedZoneAttempts?: number | null;
		OpponentRedZoneConversions?: number | null;
		OpponentRedZonePercentage?: number | null;
		OpponentReturnYards?: number | null;
		OpponentRushingAttempts?: number | null;
		OpponentRushingTouchdowns?: number | null;
		OpponentRushingYards?: number | null;
		OpponentRushingYardsPerAttempt?: number | null;
		OpponentSackYards?: number | null;
		OpponentSacks?: number | null;
		OpponentSafeties?: number | null;
		OpponentScore?: number | null;
		OpponentScoreOvertime?: number | null;
		OpponentScoreQuarter1?: number | null;
		OpponentScoreQuarter2?: number | null;
		OpponentScoreQuarter3?: number | null;
		OpponentScoreQuarter4?: number | null;
		OpponentSoloTackles?: number | null;
		OpponentTacklesForLoss?: number | null;
		OpponentTacklesForLossDifferential?: number | null;
		OpponentTacklesForLossPercentage?: number | null;
		OpponentTakeaways?: number | null;
		OpponentThirdDownAttempts?: number | null;
		OpponentThirdDownConversions?: number | null;
		OpponentThirdDownPercentage?: number | null;
		OpponentTimeOfPossession?: string | null;
		OpponentTimesSacked?: number | null;
		OpponentTimesSackedPercentage?: number | null;
		OpponentTimesSackedYards?: number | null;
		OpponentTouchdowns?: number | null;
		OpponentTurnoverDifferential?: number | null;
		OpponentTwoPointConversionReturns?: number | null;
		OverUnder?: number | null;
		PasserRating?: number | null;
		PassesDefended?: number | null;
		PassingAttempts?: number | null;
		PassingCompletions?: number | null;
		PassingDropbacks?: number | null;
		PassingInterceptionPercentage?: number | null;
		PassingInterceptions?: number | null;
		PassingTouchdowns?: number | null;
		PassingYards?: number | null;
		PassingYardsPerAttempt?: number | null;
		PassingYardsPerCompletion?: number | null;
		Penalties?: number | null;
		PenaltyYardDifferential?: number | null;
		PenaltyYards?: number | null;
		PointDifferential?: number | null;
		PointSpread?: number | null;
		PuntAverage?: number | null;
		PuntNetAverage?: number | null;
		PuntNetYards?: number | null;
		PuntReturnAverage?: number | null;
		PuntReturnLong?: number | null;
		PuntReturnTouchdowns?: number | null;
		PuntReturnYardDifferential?: number | null;
		PuntReturnYards?: number | null;
		PuntReturns?: number | null;
		PuntYards?: number | null;
		Punts?: number | null;
		PuntsHadBlocked?: number | null;
		QuarterbackHits?: number | null;
		QuarterbackHitsDifferential?: number | null;
		QuarterbackHitsPercentage?: number | null;
		QuarterbackSacksDifferential?: number | null;
		RedZoneAttempts?: number | null;
		RedZoneConversions?: number | null;
		RedZonePercentage?: number | null;
		ReturnYards?: number | null;
		RushingAttempts?: number | null;
		RushingTouchdowns?: number | null;
		RushingYards?: number | null;
		RushingYardsPerAttempt?: number | null;
		SackYards?: number | null;
		Sacks?: number | null;
		Safeties?: number | null;
		Score?: number | null;
		ScoreOvertime?: number | null;
		ScoreQuarter1?: number | null;
		ScoreQuarter2?: number | null;
		ScoreQuarter3?: number | null;
		ScoreQuarter4?: number | null;
		Season?: number | null;
		SeasonType?: number | null;
		SoloTackles?: number | null;
		TacklesForLoss?: number | null;
		TacklesForLossDifferential?: number | null;
		TacklesForLossPercentage?: number | null;
		Takeaways?: number | null;
		Team?: string | null;
		TeamID?: number | null;
		TeamName?: string | null;
		TeamSeasonID?: number | null;
		Temperature?: number | null;
		ThirdDownAttempts?: number | null;
		ThirdDownConversions?: number | null;
		ThirdDownPercentage?: number | null;
		TimeOfPossession?: string | null;
		TimesSacked?: number | null;
		TimesSackedPercentage?: number | null;
		TimesSackedYards?: number | null;
		TotalScore?: number | null;
		Touchdowns?: number | null;
		TurnoverDifferential?: number | null;
		TwoPointConversionReturns?: number | null;
		WindSpeed?: number | null;
	}
	export interface TeamSeasonFormProperties {
		AssistedTackles: FormControl<number | null | undefined>,
		BlockedKickReturnTouchdowns: FormControl<number | null | undefined>,
		BlockedKickReturnYards: FormControl<number | null | undefined>,
		BlockedKicks: FormControl<number | null | undefined>,
		CompletionPercentage: FormControl<number | null | undefined>,
		ExtraPointKickingAttempts: FormControl<number | null | undefined>,
		ExtraPointKickingConversions: FormControl<number | null | undefined>,
		ExtraPointPassingAttempts: FormControl<number | null | undefined>,
		ExtraPointPassingConversions: FormControl<number | null | undefined>,
		ExtraPointPercentage: FormControl<number | null | undefined>,
		ExtraPointRushingAttempts: FormControl<number | null | undefined>,
		ExtraPointRushingConversions: FormControl<number | null | undefined>,
		ExtraPointsHadBlocked: FormControl<number | null | undefined>,
		FieldGoalAttempts: FormControl<number | null | undefined>,
		FieldGoalPercentage: FormControl<number | null | undefined>,
		FieldGoalReturnTouchdowns: FormControl<number | null | undefined>,
		FieldGoalReturnYards: FormControl<number | null | undefined>,
		FieldGoalsHadBlocked: FormControl<number | null | undefined>,
		FieldGoalsMade: FormControl<number | null | undefined>,
		FirstDowns: FormControl<number | null | undefined>,
		FirstDownsByPassing: FormControl<number | null | undefined>,
		FirstDownsByPenalty: FormControl<number | null | undefined>,
		FirstDownsByRushing: FormControl<number | null | undefined>,
		FourthDownAttempts: FormControl<number | null | undefined>,
		FourthDownConversions: FormControl<number | null | undefined>,
		FourthDownPercentage: FormControl<number | null | undefined>,
		FumbleReturnTouchdowns: FormControl<number | null | undefined>,
		FumbleReturnYards: FormControl<number | null | undefined>,
		Fumbles: FormControl<number | null | undefined>,
		FumblesForced: FormControl<number | null | undefined>,
		FumblesLost: FormControl<number | null | undefined>,
		FumblesRecovered: FormControl<number | null | undefined>,
		Games: FormControl<number | null | undefined>,
		Giveaways: FormControl<number | null | undefined>,
		GlobalTeamID: FormControl<number | null | undefined>,
		GoalToGoAttempts: FormControl<number | null | undefined>,
		GoalToGoConversions: FormControl<number | null | undefined>,
		GoalToGoPercentage: FormControl<number | null | undefined>,
		Humidity: FormControl<number | null | undefined>,
		InterceptionReturnTouchdowns: FormControl<number | null | undefined>,
		InterceptionReturnYards: FormControl<number | null | undefined>,
		InterceptionReturns: FormControl<number | null | undefined>,
		KickReturnAverage: FormControl<number | null | undefined>,
		KickReturnLong: FormControl<number | null | undefined>,
		KickReturnTouchdowns: FormControl<number | null | undefined>,
		KickReturnYardDifferential: FormControl<number | null | undefined>,
		KickReturnYards: FormControl<number | null | undefined>,
		KickReturns: FormControl<number | null | undefined>,
		KickoffTouchbacks: FormControl<number | null | undefined>,
		Kickoffs: FormControl<number | null | undefined>,
		KickoffsInEndZone: FormControl<number | null | undefined>,
		OffensivePlays: FormControl<number | null | undefined>,
		OffensiveYards: FormControl<number | null | undefined>,
		OffensiveYardsPerPlay: FormControl<number | null | undefined>,
		OpponentAssistedTackles: FormControl<number | null | undefined>,
		OpponentBlockedKickReturnTouchdowns: FormControl<number | null | undefined>,
		OpponentBlockedKickReturnYards: FormControl<number | null | undefined>,
		OpponentBlockedKicks: FormControl<number | null | undefined>,
		OpponentCompletionPercentage: FormControl<number | null | undefined>,
		OpponentExtraPointKickingAttempts: FormControl<number | null | undefined>,
		OpponentExtraPointKickingConversions: FormControl<number | null | undefined>,
		OpponentExtraPointPassingAttempts: FormControl<number | null | undefined>,
		OpponentExtraPointPassingConversions: FormControl<number | null | undefined>,
		OpponentExtraPointPercentage: FormControl<number | null | undefined>,
		OpponentExtraPointRushingAttempts: FormControl<number | null | undefined>,
		OpponentExtraPointRushingConversions: FormControl<number | null | undefined>,
		OpponentExtraPointsHadBlocked: FormControl<number | null | undefined>,
		OpponentFieldGoalAttempts: FormControl<number | null | undefined>,
		OpponentFieldGoalPercentage: FormControl<number | null | undefined>,
		OpponentFieldGoalReturnTouchdowns: FormControl<number | null | undefined>,
		OpponentFieldGoalReturnYards: FormControl<number | null | undefined>,
		OpponentFieldGoalsHadBlocked: FormControl<number | null | undefined>,
		OpponentFieldGoalsMade: FormControl<number | null | undefined>,
		OpponentFirstDowns: FormControl<number | null | undefined>,
		OpponentFirstDownsByPassing: FormControl<number | null | undefined>,
		OpponentFirstDownsByPenalty: FormControl<number | null | undefined>,
		OpponentFirstDownsByRushing: FormControl<number | null | undefined>,
		OpponentFourthDownAttempts: FormControl<number | null | undefined>,
		OpponentFourthDownConversions: FormControl<number | null | undefined>,
		OpponentFourthDownPercentage: FormControl<number | null | undefined>,
		OpponentFumbleReturnTouchdowns: FormControl<number | null | undefined>,
		OpponentFumbleReturnYards: FormControl<number | null | undefined>,
		OpponentFumbles: FormControl<number | null | undefined>,
		OpponentFumblesForced: FormControl<number | null | undefined>,
		OpponentFumblesLost: FormControl<number | null | undefined>,
		OpponentFumblesRecovered: FormControl<number | null | undefined>,
		OpponentGiveaways: FormControl<number | null | undefined>,
		OpponentGoalToGoAttempts: FormControl<number | null | undefined>,
		OpponentGoalToGoConversions: FormControl<number | null | undefined>,
		OpponentGoalToGoPercentage: FormControl<number | null | undefined>,
		OpponentInterceptionReturnTouchdowns: FormControl<number | null | undefined>,
		OpponentInterceptionReturnYards: FormControl<number | null | undefined>,
		OpponentInterceptionReturns: FormControl<number | null | undefined>,
		OpponentKickReturnAverage: FormControl<number | null | undefined>,
		OpponentKickReturnLong: FormControl<number | null | undefined>,
		OpponentKickReturnTouchdowns: FormControl<number | null | undefined>,
		OpponentKickReturnYards: FormControl<number | null | undefined>,
		OpponentKickReturns: FormControl<number | null | undefined>,
		OpponentKickoffTouchbacks: FormControl<number | null | undefined>,
		OpponentKickoffs: FormControl<number | null | undefined>,
		OpponentKickoffsInEndZone: FormControl<number | null | undefined>,
		OpponentOffensivePlays: FormControl<number | null | undefined>,
		OpponentOffensiveYards: FormControl<number | null | undefined>,
		OpponentOffensiveYardsPerPlay: FormControl<number | null | undefined>,
		OpponentPasserRating: FormControl<number | null | undefined>,
		OpponentPassesDefended: FormControl<number | null | undefined>,
		OpponentPassingAttempts: FormControl<number | null | undefined>,
		OpponentPassingCompletions: FormControl<number | null | undefined>,
		OpponentPassingDropbacks: FormControl<number | null | undefined>,
		OpponentPassingInterceptionPercentage: FormControl<number | null | undefined>,
		OpponentPassingInterceptions: FormControl<number | null | undefined>,
		OpponentPassingTouchdowns: FormControl<number | null | undefined>,
		OpponentPassingYards: FormControl<number | null | undefined>,
		OpponentPassingYardsPerAttempt: FormControl<number | null | undefined>,
		OpponentPassingYardsPerCompletion: FormControl<number | null | undefined>,
		OpponentPenalties: FormControl<number | null | undefined>,
		OpponentPenaltyYards: FormControl<number | null | undefined>,
		OpponentPuntAverage: FormControl<number | null | undefined>,
		OpponentPuntNetAverage: FormControl<number | null | undefined>,
		OpponentPuntNetYards: FormControl<number | null | undefined>,
		OpponentPuntReturnAverage: FormControl<number | null | undefined>,
		OpponentPuntReturnLong: FormControl<number | null | undefined>,
		OpponentPuntReturnTouchdowns: FormControl<number | null | undefined>,
		OpponentPuntReturnYards: FormControl<number | null | undefined>,
		OpponentPuntReturns: FormControl<number | null | undefined>,
		OpponentPuntYards: FormControl<number | null | undefined>,
		OpponentPunts: FormControl<number | null | undefined>,
		OpponentPuntsHadBlocked: FormControl<number | null | undefined>,
		OpponentQuarterbackHits: FormControl<number | null | undefined>,
		OpponentQuarterbackHitsDifferential: FormControl<number | null | undefined>,
		OpponentQuarterbackHitsPercentage: FormControl<number | null | undefined>,
		OpponentQuarterbackSacksDifferential: FormControl<number | null | undefined>,
		OpponentRedZoneAttempts: FormControl<number | null | undefined>,
		OpponentRedZoneConversions: FormControl<number | null | undefined>,
		OpponentRedZonePercentage: FormControl<number | null | undefined>,
		OpponentReturnYards: FormControl<number | null | undefined>,
		OpponentRushingAttempts: FormControl<number | null | undefined>,
		OpponentRushingTouchdowns: FormControl<number | null | undefined>,
		OpponentRushingYards: FormControl<number | null | undefined>,
		OpponentRushingYardsPerAttempt: FormControl<number | null | undefined>,
		OpponentSackYards: FormControl<number | null | undefined>,
		OpponentSacks: FormControl<number | null | undefined>,
		OpponentSafeties: FormControl<number | null | undefined>,
		OpponentScore: FormControl<number | null | undefined>,
		OpponentScoreOvertime: FormControl<number | null | undefined>,
		OpponentScoreQuarter1: FormControl<number | null | undefined>,
		OpponentScoreQuarter2: FormControl<number | null | undefined>,
		OpponentScoreQuarter3: FormControl<number | null | undefined>,
		OpponentScoreQuarter4: FormControl<number | null | undefined>,
		OpponentSoloTackles: FormControl<number | null | undefined>,
		OpponentTacklesForLoss: FormControl<number | null | undefined>,
		OpponentTacklesForLossDifferential: FormControl<number | null | undefined>,
		OpponentTacklesForLossPercentage: FormControl<number | null | undefined>,
		OpponentTakeaways: FormControl<number | null | undefined>,
		OpponentThirdDownAttempts: FormControl<number | null | undefined>,
		OpponentThirdDownConversions: FormControl<number | null | undefined>,
		OpponentThirdDownPercentage: FormControl<number | null | undefined>,
		OpponentTimeOfPossession: FormControl<string | null | undefined>,
		OpponentTimesSacked: FormControl<number | null | undefined>,
		OpponentTimesSackedPercentage: FormControl<number | null | undefined>,
		OpponentTimesSackedYards: FormControl<number | null | undefined>,
		OpponentTouchdowns: FormControl<number | null | undefined>,
		OpponentTurnoverDifferential: FormControl<number | null | undefined>,
		OpponentTwoPointConversionReturns: FormControl<number | null | undefined>,
		OverUnder: FormControl<number | null | undefined>,
		PasserRating: FormControl<number | null | undefined>,
		PassesDefended: FormControl<number | null | undefined>,
		PassingAttempts: FormControl<number | null | undefined>,
		PassingCompletions: FormControl<number | null | undefined>,
		PassingDropbacks: FormControl<number | null | undefined>,
		PassingInterceptionPercentage: FormControl<number | null | undefined>,
		PassingInterceptions: FormControl<number | null | undefined>,
		PassingTouchdowns: FormControl<number | null | undefined>,
		PassingYards: FormControl<number | null | undefined>,
		PassingYardsPerAttempt: FormControl<number | null | undefined>,
		PassingYardsPerCompletion: FormControl<number | null | undefined>,
		Penalties: FormControl<number | null | undefined>,
		PenaltyYardDifferential: FormControl<number | null | undefined>,
		PenaltyYards: FormControl<number | null | undefined>,
		PointDifferential: FormControl<number | null | undefined>,
		PointSpread: FormControl<number | null | undefined>,
		PuntAverage: FormControl<number | null | undefined>,
		PuntNetAverage: FormControl<number | null | undefined>,
		PuntNetYards: FormControl<number | null | undefined>,
		PuntReturnAverage: FormControl<number | null | undefined>,
		PuntReturnLong: FormControl<number | null | undefined>,
		PuntReturnTouchdowns: FormControl<number | null | undefined>,
		PuntReturnYardDifferential: FormControl<number | null | undefined>,
		PuntReturnYards: FormControl<number | null | undefined>,
		PuntReturns: FormControl<number | null | undefined>,
		PuntYards: FormControl<number | null | undefined>,
		Punts: FormControl<number | null | undefined>,
		PuntsHadBlocked: FormControl<number | null | undefined>,
		QuarterbackHits: FormControl<number | null | undefined>,
		QuarterbackHitsDifferential: FormControl<number | null | undefined>,
		QuarterbackHitsPercentage: FormControl<number | null | undefined>,
		QuarterbackSacksDifferential: FormControl<number | null | undefined>,
		RedZoneAttempts: FormControl<number | null | undefined>,
		RedZoneConversions: FormControl<number | null | undefined>,
		RedZonePercentage: FormControl<number | null | undefined>,
		ReturnYards: FormControl<number | null | undefined>,
		RushingAttempts: FormControl<number | null | undefined>,
		RushingTouchdowns: FormControl<number | null | undefined>,
		RushingYards: FormControl<number | null | undefined>,
		RushingYardsPerAttempt: FormControl<number | null | undefined>,
		SackYards: FormControl<number | null | undefined>,
		Sacks: FormControl<number | null | undefined>,
		Safeties: FormControl<number | null | undefined>,
		Score: FormControl<number | null | undefined>,
		ScoreOvertime: FormControl<number | null | undefined>,
		ScoreQuarter1: FormControl<number | null | undefined>,
		ScoreQuarter2: FormControl<number | null | undefined>,
		ScoreQuarter3: FormControl<number | null | undefined>,
		ScoreQuarter4: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		SoloTackles: FormControl<number | null | undefined>,
		TacklesForLoss: FormControl<number | null | undefined>,
		TacklesForLossDifferential: FormControl<number | null | undefined>,
		TacklesForLossPercentage: FormControl<number | null | undefined>,
		Takeaways: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
		TeamName: FormControl<string | null | undefined>,
		TeamSeasonID: FormControl<number | null | undefined>,
		Temperature: FormControl<number | null | undefined>,
		ThirdDownAttempts: FormControl<number | null | undefined>,
		ThirdDownConversions: FormControl<number | null | undefined>,
		ThirdDownPercentage: FormControl<number | null | undefined>,
		TimeOfPossession: FormControl<string | null | undefined>,
		TimesSacked: FormControl<number | null | undefined>,
		TimesSackedPercentage: FormControl<number | null | undefined>,
		TimesSackedYards: FormControl<number | null | undefined>,
		TotalScore: FormControl<number | null | undefined>,
		Touchdowns: FormControl<number | null | undefined>,
		TurnoverDifferential: FormControl<number | null | undefined>,
		TwoPointConversionReturns: FormControl<number | null | undefined>,
		WindSpeed: FormControl<number | null | undefined>,
	}
	export function CreateTeamSeasonFormGroup() {
		return new FormGroup<TeamSeasonFormProperties>({
			AssistedTackles: new FormControl<number | null | undefined>(undefined),
			BlockedKickReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			BlockedKickReturnYards: new FormControl<number | null | undefined>(undefined),
			BlockedKicks: new FormControl<number | null | undefined>(undefined),
			CompletionPercentage: new FormControl<number | null | undefined>(undefined),
			ExtraPointKickingAttempts: new FormControl<number | null | undefined>(undefined),
			ExtraPointKickingConversions: new FormControl<number | null | undefined>(undefined),
			ExtraPointPassingAttempts: new FormControl<number | null | undefined>(undefined),
			ExtraPointPassingConversions: new FormControl<number | null | undefined>(undefined),
			ExtraPointPercentage: new FormControl<number | null | undefined>(undefined),
			ExtraPointRushingAttempts: new FormControl<number | null | undefined>(undefined),
			ExtraPointRushingConversions: new FormControl<number | null | undefined>(undefined),
			ExtraPointsHadBlocked: new FormControl<number | null | undefined>(undefined),
			FieldGoalAttempts: new FormControl<number | null | undefined>(undefined),
			FieldGoalPercentage: new FormControl<number | null | undefined>(undefined),
			FieldGoalReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			FieldGoalReturnYards: new FormControl<number | null | undefined>(undefined),
			FieldGoalsHadBlocked: new FormControl<number | null | undefined>(undefined),
			FieldGoalsMade: new FormControl<number | null | undefined>(undefined),
			FirstDowns: new FormControl<number | null | undefined>(undefined),
			FirstDownsByPassing: new FormControl<number | null | undefined>(undefined),
			FirstDownsByPenalty: new FormControl<number | null | undefined>(undefined),
			FirstDownsByRushing: new FormControl<number | null | undefined>(undefined),
			FourthDownAttempts: new FormControl<number | null | undefined>(undefined),
			FourthDownConversions: new FormControl<number | null | undefined>(undefined),
			FourthDownPercentage: new FormControl<number | null | undefined>(undefined),
			FumbleReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			FumbleReturnYards: new FormControl<number | null | undefined>(undefined),
			Fumbles: new FormControl<number | null | undefined>(undefined),
			FumblesForced: new FormControl<number | null | undefined>(undefined),
			FumblesLost: new FormControl<number | null | undefined>(undefined),
			FumblesRecovered: new FormControl<number | null | undefined>(undefined),
			Games: new FormControl<number | null | undefined>(undefined),
			Giveaways: new FormControl<number | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			GoalToGoAttempts: new FormControl<number | null | undefined>(undefined),
			GoalToGoConversions: new FormControl<number | null | undefined>(undefined),
			GoalToGoPercentage: new FormControl<number | null | undefined>(undefined),
			Humidity: new FormControl<number | null | undefined>(undefined),
			InterceptionReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			InterceptionReturnYards: new FormControl<number | null | undefined>(undefined),
			InterceptionReturns: new FormControl<number | null | undefined>(undefined),
			KickReturnAverage: new FormControl<number | null | undefined>(undefined),
			KickReturnLong: new FormControl<number | null | undefined>(undefined),
			KickReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			KickReturnYardDifferential: new FormControl<number | null | undefined>(undefined),
			KickReturnYards: new FormControl<number | null | undefined>(undefined),
			KickReturns: new FormControl<number | null | undefined>(undefined),
			KickoffTouchbacks: new FormControl<number | null | undefined>(undefined),
			Kickoffs: new FormControl<number | null | undefined>(undefined),
			KickoffsInEndZone: new FormControl<number | null | undefined>(undefined),
			OffensivePlays: new FormControl<number | null | undefined>(undefined),
			OffensiveYards: new FormControl<number | null | undefined>(undefined),
			OffensiveYardsPerPlay: new FormControl<number | null | undefined>(undefined),
			OpponentAssistedTackles: new FormControl<number | null | undefined>(undefined),
			OpponentBlockedKickReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			OpponentBlockedKickReturnYards: new FormControl<number | null | undefined>(undefined),
			OpponentBlockedKicks: new FormControl<number | null | undefined>(undefined),
			OpponentCompletionPercentage: new FormControl<number | null | undefined>(undefined),
			OpponentExtraPointKickingAttempts: new FormControl<number | null | undefined>(undefined),
			OpponentExtraPointKickingConversions: new FormControl<number | null | undefined>(undefined),
			OpponentExtraPointPassingAttempts: new FormControl<number | null | undefined>(undefined),
			OpponentExtraPointPassingConversions: new FormControl<number | null | undefined>(undefined),
			OpponentExtraPointPercentage: new FormControl<number | null | undefined>(undefined),
			OpponentExtraPointRushingAttempts: new FormControl<number | null | undefined>(undefined),
			OpponentExtraPointRushingConversions: new FormControl<number | null | undefined>(undefined),
			OpponentExtraPointsHadBlocked: new FormControl<number | null | undefined>(undefined),
			OpponentFieldGoalAttempts: new FormControl<number | null | undefined>(undefined),
			OpponentFieldGoalPercentage: new FormControl<number | null | undefined>(undefined),
			OpponentFieldGoalReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			OpponentFieldGoalReturnYards: new FormControl<number | null | undefined>(undefined),
			OpponentFieldGoalsHadBlocked: new FormControl<number | null | undefined>(undefined),
			OpponentFieldGoalsMade: new FormControl<number | null | undefined>(undefined),
			OpponentFirstDowns: new FormControl<number | null | undefined>(undefined),
			OpponentFirstDownsByPassing: new FormControl<number | null | undefined>(undefined),
			OpponentFirstDownsByPenalty: new FormControl<number | null | undefined>(undefined),
			OpponentFirstDownsByRushing: new FormControl<number | null | undefined>(undefined),
			OpponentFourthDownAttempts: new FormControl<number | null | undefined>(undefined),
			OpponentFourthDownConversions: new FormControl<number | null | undefined>(undefined),
			OpponentFourthDownPercentage: new FormControl<number | null | undefined>(undefined),
			OpponentFumbleReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			OpponentFumbleReturnYards: new FormControl<number | null | undefined>(undefined),
			OpponentFumbles: new FormControl<number | null | undefined>(undefined),
			OpponentFumblesForced: new FormControl<number | null | undefined>(undefined),
			OpponentFumblesLost: new FormControl<number | null | undefined>(undefined),
			OpponentFumblesRecovered: new FormControl<number | null | undefined>(undefined),
			OpponentGiveaways: new FormControl<number | null | undefined>(undefined),
			OpponentGoalToGoAttempts: new FormControl<number | null | undefined>(undefined),
			OpponentGoalToGoConversions: new FormControl<number | null | undefined>(undefined),
			OpponentGoalToGoPercentage: new FormControl<number | null | undefined>(undefined),
			OpponentInterceptionReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			OpponentInterceptionReturnYards: new FormControl<number | null | undefined>(undefined),
			OpponentInterceptionReturns: new FormControl<number | null | undefined>(undefined),
			OpponentKickReturnAverage: new FormControl<number | null | undefined>(undefined),
			OpponentKickReturnLong: new FormControl<number | null | undefined>(undefined),
			OpponentKickReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			OpponentKickReturnYards: new FormControl<number | null | undefined>(undefined),
			OpponentKickReturns: new FormControl<number | null | undefined>(undefined),
			OpponentKickoffTouchbacks: new FormControl<number | null | undefined>(undefined),
			OpponentKickoffs: new FormControl<number | null | undefined>(undefined),
			OpponentKickoffsInEndZone: new FormControl<number | null | undefined>(undefined),
			OpponentOffensivePlays: new FormControl<number | null | undefined>(undefined),
			OpponentOffensiveYards: new FormControl<number | null | undefined>(undefined),
			OpponentOffensiveYardsPerPlay: new FormControl<number | null | undefined>(undefined),
			OpponentPasserRating: new FormControl<number | null | undefined>(undefined),
			OpponentPassesDefended: new FormControl<number | null | undefined>(undefined),
			OpponentPassingAttempts: new FormControl<number | null | undefined>(undefined),
			OpponentPassingCompletions: new FormControl<number | null | undefined>(undefined),
			OpponentPassingDropbacks: new FormControl<number | null | undefined>(undefined),
			OpponentPassingInterceptionPercentage: new FormControl<number | null | undefined>(undefined),
			OpponentPassingInterceptions: new FormControl<number | null | undefined>(undefined),
			OpponentPassingTouchdowns: new FormControl<number | null | undefined>(undefined),
			OpponentPassingYards: new FormControl<number | null | undefined>(undefined),
			OpponentPassingYardsPerAttempt: new FormControl<number | null | undefined>(undefined),
			OpponentPassingYardsPerCompletion: new FormControl<number | null | undefined>(undefined),
			OpponentPenalties: new FormControl<number | null | undefined>(undefined),
			OpponentPenaltyYards: new FormControl<number | null | undefined>(undefined),
			OpponentPuntAverage: new FormControl<number | null | undefined>(undefined),
			OpponentPuntNetAverage: new FormControl<number | null | undefined>(undefined),
			OpponentPuntNetYards: new FormControl<number | null | undefined>(undefined),
			OpponentPuntReturnAverage: new FormControl<number | null | undefined>(undefined),
			OpponentPuntReturnLong: new FormControl<number | null | undefined>(undefined),
			OpponentPuntReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			OpponentPuntReturnYards: new FormControl<number | null | undefined>(undefined),
			OpponentPuntReturns: new FormControl<number | null | undefined>(undefined),
			OpponentPuntYards: new FormControl<number | null | undefined>(undefined),
			OpponentPunts: new FormControl<number | null | undefined>(undefined),
			OpponentPuntsHadBlocked: new FormControl<number | null | undefined>(undefined),
			OpponentQuarterbackHits: new FormControl<number | null | undefined>(undefined),
			OpponentQuarterbackHitsDifferential: new FormControl<number | null | undefined>(undefined),
			OpponentQuarterbackHitsPercentage: new FormControl<number | null | undefined>(undefined),
			OpponentQuarterbackSacksDifferential: new FormControl<number | null | undefined>(undefined),
			OpponentRedZoneAttempts: new FormControl<number | null | undefined>(undefined),
			OpponentRedZoneConversions: new FormControl<number | null | undefined>(undefined),
			OpponentRedZonePercentage: new FormControl<number | null | undefined>(undefined),
			OpponentReturnYards: new FormControl<number | null | undefined>(undefined),
			OpponentRushingAttempts: new FormControl<number | null | undefined>(undefined),
			OpponentRushingTouchdowns: new FormControl<number | null | undefined>(undefined),
			OpponentRushingYards: new FormControl<number | null | undefined>(undefined),
			OpponentRushingYardsPerAttempt: new FormControl<number | null | undefined>(undefined),
			OpponentSackYards: new FormControl<number | null | undefined>(undefined),
			OpponentSacks: new FormControl<number | null | undefined>(undefined),
			OpponentSafeties: new FormControl<number | null | undefined>(undefined),
			OpponentScore: new FormControl<number | null | undefined>(undefined),
			OpponentScoreOvertime: new FormControl<number | null | undefined>(undefined),
			OpponentScoreQuarter1: new FormControl<number | null | undefined>(undefined),
			OpponentScoreQuarter2: new FormControl<number | null | undefined>(undefined),
			OpponentScoreQuarter3: new FormControl<number | null | undefined>(undefined),
			OpponentScoreQuarter4: new FormControl<number | null | undefined>(undefined),
			OpponentSoloTackles: new FormControl<number | null | undefined>(undefined),
			OpponentTacklesForLoss: new FormControl<number | null | undefined>(undefined),
			OpponentTacklesForLossDifferential: new FormControl<number | null | undefined>(undefined),
			OpponentTacklesForLossPercentage: new FormControl<number | null | undefined>(undefined),
			OpponentTakeaways: new FormControl<number | null | undefined>(undefined),
			OpponentThirdDownAttempts: new FormControl<number | null | undefined>(undefined),
			OpponentThirdDownConversions: new FormControl<number | null | undefined>(undefined),
			OpponentThirdDownPercentage: new FormControl<number | null | undefined>(undefined),
			OpponentTimeOfPossession: new FormControl<string | null | undefined>(undefined),
			OpponentTimesSacked: new FormControl<number | null | undefined>(undefined),
			OpponentTimesSackedPercentage: new FormControl<number | null | undefined>(undefined),
			OpponentTimesSackedYards: new FormControl<number | null | undefined>(undefined),
			OpponentTouchdowns: new FormControl<number | null | undefined>(undefined),
			OpponentTurnoverDifferential: new FormControl<number | null | undefined>(undefined),
			OpponentTwoPointConversionReturns: new FormControl<number | null | undefined>(undefined),
			OverUnder: new FormControl<number | null | undefined>(undefined),
			PasserRating: new FormControl<number | null | undefined>(undefined),
			PassesDefended: new FormControl<number | null | undefined>(undefined),
			PassingAttempts: new FormControl<number | null | undefined>(undefined),
			PassingCompletions: new FormControl<number | null | undefined>(undefined),
			PassingDropbacks: new FormControl<number | null | undefined>(undefined),
			PassingInterceptionPercentage: new FormControl<number | null | undefined>(undefined),
			PassingInterceptions: new FormControl<number | null | undefined>(undefined),
			PassingTouchdowns: new FormControl<number | null | undefined>(undefined),
			PassingYards: new FormControl<number | null | undefined>(undefined),
			PassingYardsPerAttempt: new FormControl<number | null | undefined>(undefined),
			PassingYardsPerCompletion: new FormControl<number | null | undefined>(undefined),
			Penalties: new FormControl<number | null | undefined>(undefined),
			PenaltyYardDifferential: new FormControl<number | null | undefined>(undefined),
			PenaltyYards: new FormControl<number | null | undefined>(undefined),
			PointDifferential: new FormControl<number | null | undefined>(undefined),
			PointSpread: new FormControl<number | null | undefined>(undefined),
			PuntAverage: new FormControl<number | null | undefined>(undefined),
			PuntNetAverage: new FormControl<number | null | undefined>(undefined),
			PuntNetYards: new FormControl<number | null | undefined>(undefined),
			PuntReturnAverage: new FormControl<number | null | undefined>(undefined),
			PuntReturnLong: new FormControl<number | null | undefined>(undefined),
			PuntReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			PuntReturnYardDifferential: new FormControl<number | null | undefined>(undefined),
			PuntReturnYards: new FormControl<number | null | undefined>(undefined),
			PuntReturns: new FormControl<number | null | undefined>(undefined),
			PuntYards: new FormControl<number | null | undefined>(undefined),
			Punts: new FormControl<number | null | undefined>(undefined),
			PuntsHadBlocked: new FormControl<number | null | undefined>(undefined),
			QuarterbackHits: new FormControl<number | null | undefined>(undefined),
			QuarterbackHitsDifferential: new FormControl<number | null | undefined>(undefined),
			QuarterbackHitsPercentage: new FormControl<number | null | undefined>(undefined),
			QuarterbackSacksDifferential: new FormControl<number | null | undefined>(undefined),
			RedZoneAttempts: new FormControl<number | null | undefined>(undefined),
			RedZoneConversions: new FormControl<number | null | undefined>(undefined),
			RedZonePercentage: new FormControl<number | null | undefined>(undefined),
			ReturnYards: new FormControl<number | null | undefined>(undefined),
			RushingAttempts: new FormControl<number | null | undefined>(undefined),
			RushingTouchdowns: new FormControl<number | null | undefined>(undefined),
			RushingYards: new FormControl<number | null | undefined>(undefined),
			RushingYardsPerAttempt: new FormControl<number | null | undefined>(undefined),
			SackYards: new FormControl<number | null | undefined>(undefined),
			Sacks: new FormControl<number | null | undefined>(undefined),
			Safeties: new FormControl<number | null | undefined>(undefined),
			Score: new FormControl<number | null | undefined>(undefined),
			ScoreOvertime: new FormControl<number | null | undefined>(undefined),
			ScoreQuarter1: new FormControl<number | null | undefined>(undefined),
			ScoreQuarter2: new FormControl<number | null | undefined>(undefined),
			ScoreQuarter3: new FormControl<number | null | undefined>(undefined),
			ScoreQuarter4: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			SoloTackles: new FormControl<number | null | undefined>(undefined),
			TacklesForLoss: new FormControl<number | null | undefined>(undefined),
			TacklesForLossDifferential: new FormControl<number | null | undefined>(undefined),
			TacklesForLossPercentage: new FormControl<number | null | undefined>(undefined),
			Takeaways: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			TeamName: new FormControl<string | null | undefined>(undefined),
			TeamSeasonID: new FormControl<number | null | undefined>(undefined),
			Temperature: new FormControl<number | null | undefined>(undefined),
			ThirdDownAttempts: new FormControl<number | null | undefined>(undefined),
			ThirdDownConversions: new FormControl<number | null | undefined>(undefined),
			ThirdDownPercentage: new FormControl<number | null | undefined>(undefined),
			TimeOfPossession: new FormControl<string | null | undefined>(undefined),
			TimesSacked: new FormControl<number | null | undefined>(undefined),
			TimesSackedPercentage: new FormControl<number | null | undefined>(undefined),
			TimesSackedYards: new FormControl<number | null | undefined>(undefined),
			TotalScore: new FormControl<number | null | undefined>(undefined),
			Touchdowns: new FormControl<number | null | undefined>(undefined),
			TurnoverDifferential: new FormControl<number | null | undefined>(undefined),
			TwoPointConversionReturns: new FormControl<number | null | undefined>(undefined),
			WindSpeed: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Timeframe {
		ApiSeason?: string | null;
		ApiWeek?: string | null;
		EndDate?: string | null;
		FirstGameEnd?: string | null;
		FirstGameStart?: string | null;
		HasEnded?: boolean | null;
		HasFirstGameEnded?: boolean | null;
		HasFirstGameStarted?: boolean | null;
		HasGames?: boolean | null;
		HasLastGameEnded?: boolean | null;
		HasStarted?: boolean | null;
		LastGameEnd?: string | null;
		Name?: string | null;
		Season?: number | null;
		SeasonType?: number | null;
		ShortName?: string | null;
		StartDate?: string | null;
		Week?: number | null;
	}
	export interface TimeframeFormProperties {
		ApiSeason: FormControl<string | null | undefined>,
		ApiWeek: FormControl<string | null | undefined>,
		EndDate: FormControl<string | null | undefined>,
		FirstGameEnd: FormControl<string | null | undefined>,
		FirstGameStart: FormControl<string | null | undefined>,
		HasEnded: FormControl<boolean | null | undefined>,
		HasFirstGameEnded: FormControl<boolean | null | undefined>,
		HasFirstGameStarted: FormControl<boolean | null | undefined>,
		HasGames: FormControl<boolean | null | undefined>,
		HasLastGameEnded: FormControl<boolean | null | undefined>,
		HasStarted: FormControl<boolean | null | undefined>,
		LastGameEnd: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		ShortName: FormControl<string | null | undefined>,
		StartDate: FormControl<string | null | undefined>,
		Week: FormControl<number | null | undefined>,
	}
	export function CreateTimeframeFormGroup() {
		return new FormGroup<TimeframeFormProperties>({
			ApiSeason: new FormControl<string | null | undefined>(undefined),
			ApiWeek: new FormControl<string | null | undefined>(undefined),
			EndDate: new FormControl<string | null | undefined>(undefined),
			FirstGameEnd: new FormControl<string | null | undefined>(undefined),
			FirstGameStart: new FormControl<string | null | undefined>(undefined),
			HasEnded: new FormControl<boolean | null | undefined>(undefined),
			HasFirstGameEnded: new FormControl<boolean | null | undefined>(undefined),
			HasFirstGameStarted: new FormControl<boolean | null | undefined>(undefined),
			HasGames: new FormControl<boolean | null | undefined>(undefined),
			HasLastGameEnded: new FormControl<boolean | null | undefined>(undefined),
			HasStarted: new FormControl<boolean | null | undefined>(undefined),
			LastGameEnd: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			ShortName: new FormControl<string | null | undefined>(undefined),
			StartDate: new FormControl<string | null | undefined>(undefined),
			Week: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Teams (All)
		 * Gets all teams, including pro bowl teams.
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
		 * Bye Weeks
		 * Get bye weeks for the teams during a specified NFL season.
		 * Get {format}/Byes/{season}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season 
		 *           Year of the season and the season type. If no season type is provided, then the default is regular season.
		 *           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
		 *         
		 * @return {Array<Bye>} 
		 */
		ByeWeeks(format: TeamsAllFormat, season: string): Observable<Array<Bye>> {
			return this.http.get<Array<Bye>>(this.baseUri + format + '/Byes/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * Season Current
		 * Year of the current NFL season. This value changes on July 1st. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985.
		 * Get {format}/CurrentSeason
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {number} 
		 */
		SeasonCurrent(format: TeamsAllFormat): Observable<number> {
			return this.http.get<number>(this.baseUri + format + '/CurrentSeason', {});
		}

		/**
		 * Week Current
		 * Number of the current week of the NFL season. This value usually changes on Tuesday nights or Wednesday mornings at midnight EST. Week number is an integer between 1 and 21 or the word current. Weeks 1 through 17 are regular season weeks. Weeks 18 through 21 are post-season weeks.
		 * Get {format}/CurrentWeek
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {number} 
		 */
		WeekCurrent(format: TeamsAllFormat): Observable<number> {
			return this.http.get<number>(this.baseUri + format + '/CurrentWeek', {});
		}

		/**
		 * Player Details by Free Agents
		 * Get {format}/FreeAgents
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<Player>} 
		 */
		PlayerDetailsByFreeAgents(format: TeamsAllFormat): Observable<Array<Player>> {
			return this.http.get<Array<Player>>(this.baseUri + format + '/FreeAgents', {});
		}

		/**
		 * Game Stats by Season (Deprecated, use Team Game Stats instead)
		 * Get {format}/GameStats/{season}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season and the season type. If no season type is provided, then the default is regular season.
		 *           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
		 *         
		 * @return {Array<Game>} 
		 */
		GameStatsBySeasonDeprecatedUseTeamGameStatsInstead(format: TeamsAllFormat, season: string): Observable<Array<Game>> {
			return this.http.get<Array<Game>>(this.baseUri + format + '/GameStats/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * Game Stats by Week (Deprecated, use Team Game Stats instead)
		 * Get {format}/GameStatsByWeek/{season}/{week}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season 
		 *           Year of the season and the season type. If no season type is provided, then the default is regular season.
		 *           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
		 *         
		 * @param {string} week 
		 *           Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.
		 *           Example: <code>1</code>
		 *         
		 * @return {Array<Game>} 
		 */
		GameStatsByWeekDeprecatedUseTeamGameStatsInstead(format: TeamsAllFormat, season: string, week: string): Observable<Array<Game>> {
			return this.http.get<Array<Game>>(this.baseUri + format + '/GameStatsByWeek/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (week == null ? '' : encodeURIComponent(week)) + '', {});
		}

		/**
		 * Season Last Completed
		 * Year of the most recently completed season. this value changes immediately after the Super Bowl. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985.
		 * Get {format}/LastCompletedSeason
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {number} 
		 */
		SeasonLastCompleted(format: TeamsAllFormat): Observable<number> {
			return this.http.get<number>(this.baseUri + format + '/LastCompletedSeason', {});
		}

		/**
		 * Week Last Completed
		 * Number of the last completed week in the current NFL season. This value changes immediately after the last game of the week is completed and the data is available. This usually happens right after the Monday night game.
		 * Week number is an integer between 1 and 21 or the word current. Weeks 1 through 17 are regular season weeks. Weeks 18 through 21 are post-season weeks.
		 * Get {format}/LastCompletedWeek
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {number} 
		 */
		WeekLastCompleted(format: TeamsAllFormat): Observable<number> {
			return this.http.get<number>(this.baseUri + format + '/LastCompletedWeek', {});
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
		 * <br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.
		 * @return {Array<News>} 
		 */
		NewsByDate(format: TeamsAllFormat, date: string): Observable<Array<News>> {
			return this.http.get<Array<News>>(this.baseUri + format + '/NewsByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * News by Player
		 * Get {format}/NewsByPlayerID/{playerid}
		 * @param {TeamsAllFormat} format 
		 *           Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 *         
		 * @param {string} playerid Each NFL player has a unique ID assigned by FantasyData. Player IDs can be determined by pulling player related data. Example:<code>14257</code>.
		 * @return {Array<News>} 
		 */
		NewsByPlayer(format: TeamsAllFormat, playerid: string): Observable<Array<News>> {
			return this.http.get<Array<News>>(this.baseUri + format + '/NewsByPlayerID/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}

		/**
		 * News by Team
		 * Get {format}/NewsByTeam/{team}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} team Abbreviation of the team. Example: <code>WAS</code>.
		 * @return {Array<News>} 
		 */
		NewsByTeam(format: TeamsAllFormat, team: string): Observable<Array<News>> {
			return this.http.get<Array<News>>(this.baseUri + format + '/NewsByTeam/' + (team == null ? '' : encodeURIComponent(team)) + '', {});
		}

		/**
		 * X Ping
		 * Ping NFL API
		 * Get {format}/Ping/{seconds}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} seconds Number of seconds to sleep before responding
		 * @return {string} 
		 */
		XPing(format: TeamsAllFormat, seconds: string): Observable<string> {
			return this.http.get(this.baseUri + format + '/Ping/' + (seconds == null ? '' : encodeURIComponent(seconds)) + '', { responseType: 'text' });
		}

		/**
		 * Player Details by Player
		 * Get {format}/Player/{playerid}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} playerid Each NFL player has a unique ID assigned by FantasyData. Player IDs can be determined by pulling player related data. Example:<code>732</code>.
		 * @return {PlayerDetail} 
		 */
		PlayerDetailsByPlayer(format: TeamsAllFormat, playerid: string): Observable<PlayerDetail> {
			return this.http.get<PlayerDetail>(this.baseUri + format + '/Player/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}

		/**
		 * Player Details by Available
		 * Get {format}/Players
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<Player>} 
		 */
		PlayerDetailsByAvailable(format: TeamsAllFormat): Observable<Array<Player>> {
			return this.http.get<Array<Player>>(this.baseUri + format + '/Players', {});
		}

		/**
		 * Player Details by Team
		 * Get {format}/Players/{team}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} team Abbreviation of the team. Example: <code>WAS</code>.
		 * @return {Array<PlayerDetail>} 
		 */
		PlayerDetailsByTeam(format: TeamsAllFormat, team: string): Observable<Array<PlayerDetail>> {
			return this.http.get<Array<PlayerDetail>>(this.baseUri + format + '/Players/' + (team == null ? '' : encodeURIComponent(team)) + '', {});
		}

		/**
		 * Player Details by Rookie Draft Year
		 * Get {format}/Rookies/{season}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season.<br>Examples: <code>2018</code>, <code>2019</code>, etc.
		 * @return {Array<Player>} 
		 */
		PlayerDetailsByRookieDraftYear(format: TeamsAllFormat, season: string): Observable<Array<Player>> {
			return this.http.get<Array<Player>>(this.baseUri + format + '/Rookies/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * Schedule
		 * Game schedule for a specified season.
		 * Get {format}/Schedules/{season}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.
		 * @return {Array<Schedule>} 
		 */
		Schedule(format: TeamsAllFormat, season: string): Observable<Array<Schedule>> {
			return this.http.get<Array<Schedule>>(this.baseUri + format + '/Schedules/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * Scores by Season
		 * Game scores for a specified season.
		 * Get {format}/Scores/{season}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.
		 * @return {Array<Score>} 
		 */
		ScoresBySeason(format: TeamsAllFormat, season: string): Observable<Array<Score>> {
			return this.http.get<Array<Score>>(this.baseUri + format + '/Scores/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * Scores by Week
		 * Get game scores for a specified week of a season.
		 * Get {format}/ScoresByWeek/{season}/{week}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season 
		 *           Year of the season and the season type. If no season type is provided, then the default is regular season.
		 *           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
		 *         
		 * @param {string} week 
		 *           Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.
		 *           Example: <code>1</code>
		 *         
		 * @return {Array<Score>} 
		 */
		ScoresByWeek(format: TeamsAllFormat, season: string, week: string): Observable<Array<Score>> {
			return this.http.get<Array<Score>>(this.baseUri + format + '/ScoresByWeek/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (week == null ? '' : encodeURIComponent(week)) + '', {});
		}

		/**
		 * Scores by Week Simulation
		 * Gets simulated live scores of NFL games, covering the Conference Championship games on January 21, 2018.
		 * Get {format}/SimulatedScores/{numberofplays}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} numberofplays The number of plays to progress in this NFL live game simulation. Example entries are <code>0</code>, <code>1</code>, <code>2</code>, <code>3</code>, <code>150</code>, <code>200</code>, etc.
		 * @return {Array<Score>} 
		 */
		ScoresByWeekSimulation(format: TeamsAllFormat, numberofplays: string): Observable<Array<Score>> {
			return this.http.get<Array<Score>>(this.baseUri + format + '/SimulatedScores/' + (numberofplays == null ? '' : encodeURIComponent(numberofplays)) + '', {});
		}

		/**
		 * Stadiums
		 * This method returns all stadiums.
		 * Get {format}/Stadiums
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<Stadium>} 
		 */
		Stadiums(format: TeamsAllFormat): Observable<Array<Stadium>> {
			return this.http.get<Array<Stadium>>(this.baseUri + format + '/Stadiums', {});
		}

		/**
		 * Standings
		 * Get {format}/Standings/{season}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season 
		 *           Year of the season and the season type. If no season type is provided, then the default is regular season.
		 *           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
		 *         
		 * @return {Array<Standing>} 
		 */
		Standings(format: TeamsAllFormat, season: string): Observable<Array<Standing>> {
			return this.http.get<Array<Standing>>(this.baseUri + format + '/Standings/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * Team Game Stats
		 * Get {format}/TeamGameStats/{season}/{week}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season 
		 *           Year of the season and the season type. If no season type is provided, then the default is regular season.
		 *           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
		 *         
		 * @param {string} week 
		 *           Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.
		 *           Example: <code>1</code>
		 *         
		 * @return {Array<TeamGame>} 
		 */
		TeamGameStats(format: TeamsAllFormat, season: string, week: string): Observable<Array<TeamGame>> {
			return this.http.get<Array<TeamGame>>(this.baseUri + format + '/TeamGameStats/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (week == null ? '' : encodeURIComponent(week)) + '', {});
		}

		/**
		 * Team Season Stats
		 * Get {format}/TeamSeasonStats/{season}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season 
		 *           Year of the season and the season type. If no season type is provided, then the default is regular season.
		 *           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
		 *         
		 * @return {Array<TeamSeason>} 
		 */
		TeamSeasonStats(format: TeamsAllFormat, season: string): Observable<Array<TeamSeason>> {
			return this.http.get<Array<TeamSeason>>(this.baseUri + format + '/TeamSeasonStats/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * Teams (Active)
		 * Gets all active teams.
		 * Get {format}/Teams
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<Team>} 
		 */
		TeamsActive(format: TeamsAllFormat): Observable<Array<Team>> {
			return this.http.get<Array<Team>>(this.baseUri + format + '/Teams', {});
		}

		/**
		 * Teams by Season
		 * List of teams playing in a specified season.
		 * Get {format}/Teams/{season}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season 
		 *           Year of the season and the season type. If no season type is provided, then the default is regular season.
		 *           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
		 *         
		 * @return {Array<Team>} 
		 */
		TeamsBySeason(format: TeamsAllFormat, season: string): Observable<Array<Team>> {
			return this.http.get<Array<Team>>(this.baseUri + format + '/Teams/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * Timeframes
		 * Get detailed information about past, present, and future timeframes.
		 * Get {format}/Timeframes/{type}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {TimeframesType} type The type of timeframes to return.  Valid entries are <code>current</code> or <code>upcoming</code> or <code>completed</code> or <code>recent</code> or <code>all</code>.
		 * @return {Array<Timeframe>} 
		 */
		Timeframes(format: TeamsAllFormat, type: TimeframesType): Observable<Array<Timeframe>> {
			return this.http.get<Array<Timeframe>>(this.baseUri + format + '/Timeframes/' + type + '', {});
		}

		/**
		 * Season Upcoming
		 * Year of the current NFL season, if we are in the mid-season. If we are in the off-season, then year of the next upcoming season. This value changes immediately after the Super Bowl. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985.
		 * Get {format}/UpcomingSeason
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {number} 
		 */
		SeasonUpcoming(format: TeamsAllFormat): Observable<number> {
			return this.http.get<number>(this.baseUri + format + '/UpcomingSeason', {});
		}

		/**
		 * Week Upcoming
		 * Number of the upcoming week of the NFL season. This value changes immediately after the final game of the week is completed. We consider upcoming week to be the current week, until current week is over. Week number is an integer between 1 and 21 or the word current. Weeks 1 through 17 are regular season weeks. Weeks 18 through 21 are post-season weeks.
		 * Get {format}/UpcomingWeek
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {number} 
		 */
		WeekUpcoming(format: TeamsAllFormat): Observable<number> {
			return this.http.get<number>(this.baseUri + format + '/UpcomingWeek', {});
		}
	}

	export enum TeamsAllFormat { XML = 'XML', JSON = 'JSON' }

	export enum TimeframesType { current = 'current', upcoming = 'upcoming', completed = 'completed', recent = 'recent', all = 'all' }

}

