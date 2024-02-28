import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Bye {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;
		Team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Week?: number | null;
	}
	export interface ByeFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayAssistedTackles?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayBlockedKickReturnTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayBlockedKickReturnYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayBlockedKicks?: number | null;

		/** Type: double */
		AwayCompletionPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayExtraPointKickingAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayExtraPointKickingConversions?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayExtraPointPassingAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayExtraPointPassingConversions?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayExtraPointRushingAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayExtraPointRushingConversions?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayExtraPointsHadBlocked?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayFieldGoalAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayFieldGoalReturnTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayFieldGoalReturnYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayFieldGoalsHadBlocked?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayFieldGoalsMade?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayFirstDowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayFirstDownsByPassing?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayFirstDownsByPenalty?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayFirstDownsByRushing?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayFourthDownAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayFourthDownConversions?: number | null;

		/** Type: double */
		AwayFourthDownPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayFumbleReturnTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayFumbleReturnYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayFumbles?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayFumblesForced?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayFumblesLost?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayFumblesRecovered?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayGiveaways?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayGoalToGoAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayGoalToGoConversions?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayInterceptionReturnTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayInterceptionReturnYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayInterceptionReturns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayKickReturnLong?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayKickReturnTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayKickReturnYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayKickReturns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayKickoffTouchbacks?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayKickoffs?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayKickoffsInEndZone?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayOffensivePlays?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayOffensiveYards?: number | null;

		/** Type: double */
		AwayOffensiveYardsPerPlay?: number | null;

		/** Type: double */
		AwayPasserRating?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayPassesDefended?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayPassingAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayPassingCompletions?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayPassingInterceptions?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayPassingTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayPassingYards?: number | null;

		/** Type: double */
		AwayPassingYardsPerAttempt?: number | null;

		/** Type: double */
		AwayPassingYardsPerCompletion?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayPenalties?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayPenaltyYards?: number | null;

		/** Type: double */
		AwayPuntAverage?: number | null;

		/** Type: double */
		AwayPuntNetAverage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayPuntNetYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayPuntReturnLong?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayPuntReturnTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayPuntReturnYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayPuntReturns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayPuntYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayPunts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayPuntsHadBlocked?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayQuarterbackHits?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayRedZoneAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayRedZoneConversions?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayReturnYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayRushingAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayRushingTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayRushingYards?: number | null;

		/** Type: double */
		AwayRushingYardsPerAttempt?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwaySackYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwaySacks?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwaySafeties?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayScore?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayScoreOvertime?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayScoreQuarter1?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayScoreQuarter2?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayScoreQuarter3?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayScoreQuarter4?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwaySoloTackles?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTacklesForLoss?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTakeaways?: number | null;
		AwayTeam?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayThirdDownAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayThirdDownConversions?: number | null;

		/** Type: double */
		AwayThirdDownPercentage?: number | null;
		AwayTimeOfPossession?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTimesSacked?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTimesSackedYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTurnoverDifferential?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTwoPointConversionReturns?: number | null;
		Date?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GameID?: number | null;
		GameKey?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeAssistedTackles?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeBlockedKickReturnTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeBlockedKickReturnYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeBlockedKicks?: number | null;

		/** Type: double */
		HomeCompletionPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeExtraPointKickingAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeExtraPointKickingConversions?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeExtraPointPassingAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeExtraPointPassingConversions?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeExtraPointRushingAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeExtraPointRushingConversions?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeExtraPointsHadBlocked?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeFieldGoalAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeFieldGoalReturnTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeFieldGoalReturnYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeFieldGoalsHadBlocked?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeFieldGoalsMade?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeFirstDowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeFirstDownsByPassing?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeFirstDownsByPenalty?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeFirstDownsByRushing?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeFourthDownAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeFourthDownConversions?: number | null;

		/** Type: double */
		HomeFourthDownPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeFumbleReturnTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeFumbleReturnYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeFumbles?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeFumblesForced?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeFumblesLost?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeFumblesRecovered?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeGiveaways?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeGoalToGoAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeGoalToGoConversions?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeInterceptionReturnTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeInterceptionReturnYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeInterceptionReturns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeKickReturnLong?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeKickReturnTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeKickReturnYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeKickReturns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeKickoffTouchbacks?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeKickoffs?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeKickoffsInEndZone?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeOffensivePlays?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeOffensiveYards?: number | null;

		/** Type: double */
		HomeOffensiveYardsPerPlay?: number | null;

		/** Type: double */
		HomePasserRating?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomePassesDefended?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomePassingAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomePassingCompletions?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomePassingInterceptions?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomePassingTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomePassingYards?: number | null;

		/** Type: double */
		HomePassingYardsPerAttempt?: number | null;

		/** Type: double */
		HomePassingYardsPerCompletion?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomePenalties?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomePenaltyYards?: number | null;

		/** Type: double */
		HomePuntAverage?: number | null;

		/** Type: double */
		HomePuntNetAverage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomePuntNetYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomePuntReturnLong?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomePuntReturnTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomePuntReturnYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomePuntReturns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomePuntYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomePunts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomePuntsHadBlocked?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeQuarterbackHits?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeRedZoneAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeRedZoneConversions?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeReturnYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeRushingAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeRushingTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeRushingYards?: number | null;

		/** Type: double */
		HomeRushingYardsPerAttempt?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeSackYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeSacks?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeSafeties?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeScore?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeScoreOvertime?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeScoreQuarter1?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeScoreQuarter2?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeScoreQuarter3?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeScoreQuarter4?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeSoloTackles?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTacklesForLoss?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTakeaways?: number | null;
		HomeTeam?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeThirdDownAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeThirdDownConversions?: number | null;

		/** Type: double */
		HomeThirdDownPercentage?: number | null;
		HomeTimeOfPossession?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTimesSacked?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTimesSackedYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTurnoverDifferential?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTwoPointConversionReturns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Humidity?: number | null;
		IsGameOver?: boolean | null;

		/** Type: double */
		OverUnder?: number | null;
		PlayingSurface?: string | null;

		/** Type: double */
		PointSpread?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType?: number | null;
		Stadium?: string | null;
		StadiumDetails?: Stadium;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StadiumID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Temperature?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TotalScore?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Week?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		WindSpeed?: number | null;
	}
	export interface GameFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayAssistedTackles: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayBlockedKickReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayBlockedKickReturnYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayBlockedKicks: FormControl<number | null | undefined>,

		/** Type: double */
		AwayCompletionPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayExtraPointKickingAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayExtraPointKickingConversions: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayExtraPointPassingAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayExtraPointPassingConversions: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayExtraPointRushingAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayExtraPointRushingConversions: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayExtraPointsHadBlocked: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayFieldGoalAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayFieldGoalReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayFieldGoalReturnYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayFieldGoalsHadBlocked: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayFieldGoalsMade: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayFirstDowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayFirstDownsByPassing: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayFirstDownsByPenalty: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayFirstDownsByRushing: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayFourthDownAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayFourthDownConversions: FormControl<number | null | undefined>,

		/** Type: double */
		AwayFourthDownPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayFumbleReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayFumbleReturnYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayFumbles: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayFumblesForced: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayFumblesLost: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayFumblesRecovered: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayGiveaways: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayGoalToGoAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayGoalToGoConversions: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayInterceptionReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayInterceptionReturnYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayInterceptionReturns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayKickReturnLong: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayKickReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayKickReturnYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayKickReturns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayKickoffTouchbacks: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayKickoffs: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayKickoffsInEndZone: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayOffensivePlays: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayOffensiveYards: FormControl<number | null | undefined>,

		/** Type: double */
		AwayOffensiveYardsPerPlay: FormControl<number | null | undefined>,

		/** Type: double */
		AwayPasserRating: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayPassesDefended: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayPassingAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayPassingCompletions: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayPassingInterceptions: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayPassingTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayPassingYards: FormControl<number | null | undefined>,

		/** Type: double */
		AwayPassingYardsPerAttempt: FormControl<number | null | undefined>,

		/** Type: double */
		AwayPassingYardsPerCompletion: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayPenalties: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayPenaltyYards: FormControl<number | null | undefined>,

		/** Type: double */
		AwayPuntAverage: FormControl<number | null | undefined>,

		/** Type: double */
		AwayPuntNetAverage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayPuntNetYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayPuntReturnLong: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayPuntReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayPuntReturnYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayPuntReturns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayPuntYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayPunts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayPuntsHadBlocked: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayQuarterbackHits: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayRedZoneAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayRedZoneConversions: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayReturnYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayRushingAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayRushingTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayRushingYards: FormControl<number | null | undefined>,

		/** Type: double */
		AwayRushingYardsPerAttempt: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwaySackYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwaySacks: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwaySafeties: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayScore: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayScoreOvertime: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayScoreQuarter1: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayScoreQuarter2: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayScoreQuarter3: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayScoreQuarter4: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwaySoloTackles: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTacklesForLoss: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTakeaways: FormControl<number | null | undefined>,
		AwayTeam: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayThirdDownAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayThirdDownConversions: FormControl<number | null | undefined>,

		/** Type: double */
		AwayThirdDownPercentage: FormControl<number | null | undefined>,
		AwayTimeOfPossession: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTimesSacked: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTimesSackedYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTurnoverDifferential: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTwoPointConversionReturns: FormControl<number | null | undefined>,
		Date: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GameID: FormControl<number | null | undefined>,
		GameKey: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeAssistedTackles: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeBlockedKickReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeBlockedKickReturnYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeBlockedKicks: FormControl<number | null | undefined>,

		/** Type: double */
		HomeCompletionPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeExtraPointKickingAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeExtraPointKickingConversions: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeExtraPointPassingAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeExtraPointPassingConversions: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeExtraPointRushingAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeExtraPointRushingConversions: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeExtraPointsHadBlocked: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeFieldGoalAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeFieldGoalReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeFieldGoalReturnYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeFieldGoalsHadBlocked: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeFieldGoalsMade: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeFirstDowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeFirstDownsByPassing: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeFirstDownsByPenalty: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeFirstDownsByRushing: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeFourthDownAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeFourthDownConversions: FormControl<number | null | undefined>,

		/** Type: double */
		HomeFourthDownPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeFumbleReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeFumbleReturnYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeFumbles: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeFumblesForced: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeFumblesLost: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeFumblesRecovered: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeGiveaways: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeGoalToGoAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeGoalToGoConversions: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeInterceptionReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeInterceptionReturnYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeInterceptionReturns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeKickReturnLong: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeKickReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeKickReturnYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeKickReturns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeKickoffTouchbacks: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeKickoffs: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeKickoffsInEndZone: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeOffensivePlays: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeOffensiveYards: FormControl<number | null | undefined>,

		/** Type: double */
		HomeOffensiveYardsPerPlay: FormControl<number | null | undefined>,

		/** Type: double */
		HomePasserRating: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomePassesDefended: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomePassingAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomePassingCompletions: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomePassingInterceptions: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomePassingTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomePassingYards: FormControl<number | null | undefined>,

		/** Type: double */
		HomePassingYardsPerAttempt: FormControl<number | null | undefined>,

		/** Type: double */
		HomePassingYardsPerCompletion: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomePenalties: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomePenaltyYards: FormControl<number | null | undefined>,

		/** Type: double */
		HomePuntAverage: FormControl<number | null | undefined>,

		/** Type: double */
		HomePuntNetAverage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomePuntNetYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomePuntReturnLong: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomePuntReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomePuntReturnYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomePuntReturns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomePuntYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomePunts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomePuntsHadBlocked: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeQuarterbackHits: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeRedZoneAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeRedZoneConversions: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeReturnYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeRushingAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeRushingTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeRushingYards: FormControl<number | null | undefined>,

		/** Type: double */
		HomeRushingYardsPerAttempt: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeSackYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeSacks: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeSafeties: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeScore: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeScoreOvertime: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeScoreQuarter1: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeScoreQuarter2: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeScoreQuarter3: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeScoreQuarter4: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeSoloTackles: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTacklesForLoss: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTakeaways: FormControl<number | null | undefined>,
		HomeTeam: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeThirdDownAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeThirdDownConversions: FormControl<number | null | undefined>,

		/** Type: double */
		HomeThirdDownPercentage: FormControl<number | null | undefined>,
		HomeTimeOfPossession: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTimesSacked: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTimesSackedYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTurnoverDifferential: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTwoPointConversionReturns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Humidity: FormControl<number | null | undefined>,
		IsGameOver: FormControl<boolean | null | undefined>,

		/** Type: double */
		OverUnder: FormControl<number | null | undefined>,
		PlayingSurface: FormControl<string | null | undefined>,

		/** Type: double */
		PointSpread: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType: FormControl<number | null | undefined>,
		Stadium: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StadiumID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Temperature: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TotalScore: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Week: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		NewsID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID2?: number | null;
		Source?: string | null;
		Team?: string | null;
		Team2?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		NewsID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID2: FormControl<number | null | undefined>,
		Source: FormControl<string | null | undefined>,
		Team: FormControl<string | null | undefined>,
		Team2: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

	export interface PlayerDetail {
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
		LatestNews?: Array<News>;
		Name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Number?: number | null;
		PhotoUrl?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID?: number | null;
		PlayerSeason?: PlayerSeason;
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
	export interface PlayerDetailFormProperties {
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
	export interface PlayerSeasonFormProperties {

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
			ScoringType: new FormControl<string | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			Week: new FormControl<number | null | undefined>(undefined),
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

	export interface Score {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayRotationNumber?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayScore?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayScoreOvertime?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayScoreQuarter1?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayScoreQuarter2?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayScoreQuarter3?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayScoreQuarter4?: number | null;
		AwayTeam?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamMoneyLine?: number | null;
		Canceled?: boolean | null;
		Channel?: string | null;
		Closed?: boolean | null;
		Date?: string | null;
		DateTime?: string | null;
		Day?: string | null;
		Distance?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Down?: number | null;
		DownAndDistance?: string | null;
		ForecastDescription?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ForecastTempHigh?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ForecastTempLow?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ForecastWindChill?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ForecastWindSpeed?: number | null;
		GameEndDateTime?: string | null;
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
		Has1stQuarterStarted?: boolean | null;
		Has2ndQuarterStarted?: boolean | null;
		Has3rdQuarterStarted?: boolean | null;
		Has4thQuarterStarted?: boolean | null;
		HasStarted?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeRotationNumber?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeScore?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeScoreOvertime?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeScoreQuarter1?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeScoreQuarter2?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeScoreQuarter3?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeScoreQuarter4?: number | null;
		HomeTeam?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamMoneyLine?: number | null;
		IsInProgress?: boolean | null;
		IsOver?: boolean | null;
		IsOvertime?: boolean | null;
		LastPlay?: string | null;
		LastUpdated?: string | null;

		/** Type: double */
		OverUnder?: number | null;

		/** Type: double */
		PointSpread?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PointSpreadAwayTeamMoneyLine?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PointSpreadHomeTeamMoneyLine?: number | null;
		Possession?: string | null;
		Quarter?: string | null;
		QuarterDescription?: string | null;
		RedZone?: string | null;

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
		TimeRemaining?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Week?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		YardLine?: number | null;
		YardLineTerritory?: string | null;
	}
	export interface ScoreFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayRotationNumber: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayScore: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayScoreOvertime: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayScoreQuarter1: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayScoreQuarter2: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayScoreQuarter3: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayScoreQuarter4: FormControl<number | null | undefined>,
		AwayTeam: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamMoneyLine: FormControl<number | null | undefined>,
		Canceled: FormControl<boolean | null | undefined>,
		Channel: FormControl<string | null | undefined>,
		Closed: FormControl<boolean | null | undefined>,
		Date: FormControl<string | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,
		Distance: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Down: FormControl<number | null | undefined>,
		DownAndDistance: FormControl<string | null | undefined>,
		ForecastDescription: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ForecastTempHigh: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ForecastTempLow: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ForecastWindChill: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ForecastWindSpeed: FormControl<number | null | undefined>,
		GameEndDateTime: FormControl<string | null | undefined>,
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
		Has1stQuarterStarted: FormControl<boolean | null | undefined>,
		Has2ndQuarterStarted: FormControl<boolean | null | undefined>,
		Has3rdQuarterStarted: FormControl<boolean | null | undefined>,
		Has4thQuarterStarted: FormControl<boolean | null | undefined>,
		HasStarted: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeRotationNumber: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeScore: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeScoreOvertime: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeScoreQuarter1: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeScoreQuarter2: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeScoreQuarter3: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeScoreQuarter4: FormControl<number | null | undefined>,
		HomeTeam: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamMoneyLine: FormControl<number | null | undefined>,
		IsInProgress: FormControl<boolean | null | undefined>,
		IsOver: FormControl<boolean | null | undefined>,
		IsOvertime: FormControl<boolean | null | undefined>,
		LastPlay: FormControl<string | null | undefined>,
		LastUpdated: FormControl<string | null | undefined>,

		/** Type: double */
		OverUnder: FormControl<number | null | undefined>,

		/** Type: double */
		PointSpread: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PointSpreadAwayTeamMoneyLine: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PointSpreadHomeTeamMoneyLine: FormControl<number | null | undefined>,
		Possession: FormControl<string | null | undefined>,
		Quarter: FormControl<string | null | undefined>,
		QuarterDescription: FormControl<string | null | undefined>,
		RedZone: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StadiumID: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,
		TimeRemaining: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Week: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

	export interface Standing {
		Conference?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ConferenceLosses?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ConferenceTies?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ConferenceWins?: number | null;
		Division?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DivisionLosses?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DivisionTies?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DivisionWins?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Losses?: number | null;
		Name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		NetPoints?: number | null;

		/** Type: double */
		Percentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PointsAgainst?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PointsFor?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType?: number | null;
		Team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Ties?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Touchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Wins?: number | null;
	}
	export interface StandingFormProperties {
		Conference: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ConferenceLosses: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ConferenceTies: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ConferenceWins: FormControl<number | null | undefined>,
		Division: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DivisionLosses: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DivisionTies: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DivisionWins: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Losses: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		NetPoints: FormControl<number | null | undefined>,

		/** Type: double */
		Percentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PointsAgainst: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PointsFor: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Ties: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Touchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: double */
		AverageDraftPosition?: number | null;

		/** Type: double */
		AverageDraftPosition2QB?: number | null;

		/** Type: double */
		AverageDraftPositionDynasty?: number | null;

		/** Type: double */
		AverageDraftPositionPPR?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ByeWeek?: number | null;
		City?: string | null;
		Conference?: string | null;
		DefensiveCoordinator?: string | null;
		DefensiveScheme?: string | null;
		Division?: string | null;
		DraftKingsName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DraftKingsPlayerID?: number | null;
		FanDuelName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FanDuelPlayerID?: number | null;
		FantasyDraftName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FantasyDraftPlayerID?: number | null;
		FullName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID?: number | null;
		HeadCoach?: string | null;
		Key?: string | null;
		Name?: string | null;
		OffensiveCoordinator?: string | null;
		OffensiveScheme?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID?: number | null;
		PrimaryColor?: string | null;
		QuaternaryColor?: string | null;
		SecondaryColor?: string | null;
		SpecialTeamsCoach?: string | null;
		StadiumDetails?: Stadium;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StadiumID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID?: number | null;
		TertiaryColor?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UpcomingDraftKingsSalary?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UpcomingFanDuelSalary?: number | null;
		UpcomingOpponent?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UpcomingOpponentPositionRank?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UpcomingOpponentRank?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UpcomingSalary?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UpcomingYahooSalary?: number | null;
		WikipediaLogoUrl?: string | null;
		WikipediaWordMarkUrl?: string | null;
		YahooName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		YahooPlayerID?: number | null;
	}
	export interface TeamFormProperties {

		/** Type: double */
		AverageDraftPosition: FormControl<number | null | undefined>,

		/** Type: double */
		AverageDraftPosition2QB: FormControl<number | null | undefined>,

		/** Type: double */
		AverageDraftPositionDynasty: FormControl<number | null | undefined>,

		/** Type: double */
		AverageDraftPositionPPR: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ByeWeek: FormControl<number | null | undefined>,
		City: FormControl<string | null | undefined>,
		Conference: FormControl<string | null | undefined>,
		DefensiveCoordinator: FormControl<string | null | undefined>,
		DefensiveScheme: FormControl<string | null | undefined>,
		Division: FormControl<string | null | undefined>,
		DraftKingsName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DraftKingsPlayerID: FormControl<number | null | undefined>,
		FanDuelName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FanDuelPlayerID: FormControl<number | null | undefined>,
		FantasyDraftName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FantasyDraftPlayerID: FormControl<number | null | undefined>,
		FullName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID: FormControl<number | null | undefined>,
		HeadCoach: FormControl<string | null | undefined>,
		Key: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		OffensiveCoordinator: FormControl<string | null | undefined>,
		OffensiveScheme: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID: FormControl<number | null | undefined>,
		PrimaryColor: FormControl<string | null | undefined>,
		QuaternaryColor: FormControl<string | null | undefined>,
		SecondaryColor: FormControl<string | null | undefined>,
		SpecialTeamsCoach: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StadiumID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID: FormControl<number | null | undefined>,
		TertiaryColor: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UpcomingDraftKingsSalary: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UpcomingFanDuelSalary: FormControl<number | null | undefined>,
		UpcomingOpponent: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UpcomingOpponentPositionRank: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UpcomingOpponentRank: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UpcomingSalary: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UpcomingYahooSalary: FormControl<number | null | undefined>,
		WikipediaLogoUrl: FormControl<string | null | undefined>,
		WikipediaWordMarkUrl: FormControl<string | null | undefined>,
		YahooName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AssistedTackles?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		BlockedKickReturnTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		BlockedKickReturnYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		BlockedKicks?: number | null;

		/** Type: double */
		CompletionPercentage?: number | null;
		Date?: string | null;
		DateTime?: string | null;
		Day?: string | null;
		DayOfWeek?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ExtraPointKickingAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ExtraPointKickingConversions?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ExtraPointPassingAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ExtraPointPassingConversions?: number | null;

		/** Type: double */
		ExtraPointPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ExtraPointRushingAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ExtraPointRushingConversions?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ExtraPointsHadBlocked?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalAttempts?: number | null;

		/** Type: double */
		FieldGoalPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalReturnTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalReturnYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalsHadBlocked?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalsMade?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FirstDowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FirstDownsByPassing?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FirstDownsByPenalty?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FirstDownsByRushing?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FourthDownAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FourthDownConversions?: number | null;

		/** Type: double */
		FourthDownPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FumbleReturnTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FumbleReturnYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Fumbles?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FumblesForced?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FumblesLost?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FumblesRecovered?: number | null;
		GameKey?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Giveaways?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalGameID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalOpponentID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GoalToGoAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GoalToGoConversions?: number | null;

		/** Type: double */
		GoalToGoPercentage?: number | null;
		HomeOrAway?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Humidity?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		InterceptionReturnTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		InterceptionReturnYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		InterceptionReturns?: number | null;
		IsGameOver?: boolean | null;

		/** Type: double */
		KickReturnAverage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		KickReturnLong?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		KickReturnTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		KickReturnYardDifferential?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		KickReturnYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		KickReturns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		KickoffTouchbacks?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Kickoffs?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		KickoffsInEndZone?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OffensivePlays?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OffensiveYards?: number | null;

		/** Type: double */
		OffensiveYardsPerPlay?: number | null;
		Opponent?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentAssistedTackles?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentBlockedKickReturnTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentBlockedKickReturnYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentBlockedKicks?: number | null;

		/** Type: double */
		OpponentCompletionPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentExtraPointKickingAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentExtraPointKickingConversions?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentExtraPointPassingAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentExtraPointPassingConversions?: number | null;

		/** Type: double */
		OpponentExtraPointPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentExtraPointRushingAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentExtraPointRushingConversions?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentExtraPointsHadBlocked?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFieldGoalAttempts?: number | null;

		/** Type: double */
		OpponentFieldGoalPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFieldGoalReturnTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFieldGoalReturnYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFieldGoalsHadBlocked?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFieldGoalsMade?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFirstDowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFirstDownsByPassing?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFirstDownsByPenalty?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFirstDownsByRushing?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFourthDownAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFourthDownConversions?: number | null;

		/** Type: double */
		OpponentFourthDownPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFumbleReturnTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFumbleReturnYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFumbles?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFumblesForced?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFumblesLost?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFumblesRecovered?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentGiveaways?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentGoalToGoAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentGoalToGoConversions?: number | null;

		/** Type: double */
		OpponentGoalToGoPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentInterceptionReturnTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentInterceptionReturnYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentInterceptionReturns?: number | null;

		/** Type: double */
		OpponentKickReturnAverage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentKickReturnLong?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentKickReturnTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentKickReturnYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentKickReturns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentKickoffTouchbacks?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentKickoffs?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentKickoffsInEndZone?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentOffensivePlays?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentOffensiveYards?: number | null;

		/** Type: double */
		OpponentOffensiveYardsPerPlay?: number | null;

		/** Type: double */
		OpponentPasserRating?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPassesDefended?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPassingAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPassingCompletions?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPassingDropbacks?: number | null;

		/** Type: double */
		OpponentPassingInterceptionPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPassingInterceptions?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPassingTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPassingYards?: number | null;

		/** Type: double */
		OpponentPassingYardsPerAttempt?: number | null;

		/** Type: double */
		OpponentPassingYardsPerCompletion?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPenalties?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPenaltyYards?: number | null;

		/** Type: double */
		OpponentPuntAverage?: number | null;

		/** Type: double */
		OpponentPuntNetAverage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPuntNetYards?: number | null;

		/** Type: double */
		OpponentPuntReturnAverage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPuntReturnLong?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPuntReturnTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPuntReturnYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPuntReturns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPuntYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPunts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPuntsHadBlocked?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentQuarterbackHits?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentQuarterbackHitsDifferential?: number | null;

		/** Type: double */
		OpponentQuarterbackHitsPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentQuarterbackSacksDifferential?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentRedZoneAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentRedZoneConversions?: number | null;

		/** Type: double */
		OpponentRedZonePercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentReturnYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentRushingAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentRushingTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentRushingYards?: number | null;

		/** Type: double */
		OpponentRushingYardsPerAttempt?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentSackYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentSacks?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentSafeties?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentScore?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentScoreOvertime?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentScoreQuarter1?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentScoreQuarter2?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentScoreQuarter3?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentScoreQuarter4?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentSoloTackles?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentTacklesForLoss?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentTacklesForLossDifferential?: number | null;

		/** Type: double */
		OpponentTacklesForLossPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentTakeaways?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentThirdDownAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentThirdDownConversions?: number | null;

		/** Type: double */
		OpponentThirdDownPercentage?: number | null;
		OpponentTimeOfPossession?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentTimeOfPossessionMinutes?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentTimeOfPossessionSeconds?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentTimesSacked?: number | null;

		/** Type: double */
		OpponentTimesSackedPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentTimesSackedYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentTurnoverDifferential?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentTwoPointConversionReturns?: number | null;

		/** Type: double */
		OverUnder?: number | null;

		/** Type: double */
		PasserRating?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PassesDefended?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PassingAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PassingCompletions?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PassingDropbacks?: number | null;

		/** Type: double */
		PassingInterceptionPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PassingInterceptions?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PassingTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PassingYards?: number | null;

		/** Type: double */
		PassingYardsPerAttempt?: number | null;

		/** Type: double */
		PassingYardsPerCompletion?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Penalties?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PenaltyYardDifferential?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PenaltyYards?: number | null;
		PlayingSurface?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PointDifferential?: number | null;

		/** Type: double */
		PointSpread?: number | null;

		/** Type: double */
		PuntAverage?: number | null;

		/** Type: double */
		PuntNetAverage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PuntNetYards?: number | null;

		/** Type: double */
		PuntReturnAverage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PuntReturnLong?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PuntReturnTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PuntReturnYardDifferential?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PuntReturnYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PuntReturns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PuntYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Punts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PuntsHadBlocked?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		QuarterbackHits?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		QuarterbackHitsDifferential?: number | null;

		/** Type: double */
		QuarterbackHitsPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		QuarterbackSacksDifferential?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RedZoneAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RedZoneConversions?: number | null;

		/** Type: double */
		RedZonePercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ReturnYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RushingAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RushingTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RushingYards?: number | null;

		/** Type: double */
		RushingYardsPerAttempt?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SackYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Sacks?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Safeties?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Score?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreOvertime?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreQuarter1?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreQuarter2?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreQuarter3?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreQuarter4?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SoloTackles?: number | null;
		Stadium?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TacklesForLoss?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TacklesForLossDifferential?: number | null;

		/** Type: double */
		TacklesForLossPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Takeaways?: number | null;
		Team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamGameID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID?: number | null;
		TeamName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Temperature?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ThirdDownAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ThirdDownConversions?: number | null;

		/** Type: double */
		ThirdDownPercentage?: number | null;
		TimeOfPossession?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimeOfPossessionMinutes?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimeOfPossessionSeconds?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimesSacked?: number | null;

		/** Type: double */
		TimesSackedPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimesSackedYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TotalScore?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Touchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TurnoverDifferential?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TwoPointConversionReturns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Week?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		WindSpeed?: number | null;
	}
	export interface TeamGameFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AssistedTackles: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		BlockedKickReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		BlockedKickReturnYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		BlockedKicks: FormControl<number | null | undefined>,

		/** Type: double */
		CompletionPercentage: FormControl<number | null | undefined>,
		Date: FormControl<string | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,
		DayOfWeek: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ExtraPointKickingAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ExtraPointKickingConversions: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ExtraPointPassingAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ExtraPointPassingConversions: FormControl<number | null | undefined>,

		/** Type: double */
		ExtraPointPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ExtraPointRushingAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ExtraPointRushingConversions: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ExtraPointsHadBlocked: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalAttempts: FormControl<number | null | undefined>,

		/** Type: double */
		FieldGoalPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalReturnYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalsHadBlocked: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalsMade: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FirstDowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FirstDownsByPassing: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FirstDownsByPenalty: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FirstDownsByRushing: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FourthDownAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FourthDownConversions: FormControl<number | null | undefined>,

		/** Type: double */
		FourthDownPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FumbleReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FumbleReturnYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Fumbles: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FumblesForced: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FumblesLost: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FumblesRecovered: FormControl<number | null | undefined>,
		GameKey: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Giveaways: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalGameID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalOpponentID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GoalToGoAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GoalToGoConversions: FormControl<number | null | undefined>,

		/** Type: double */
		GoalToGoPercentage: FormControl<number | null | undefined>,
		HomeOrAway: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Humidity: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		InterceptionReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		InterceptionReturnYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		InterceptionReturns: FormControl<number | null | undefined>,
		IsGameOver: FormControl<boolean | null | undefined>,

		/** Type: double */
		KickReturnAverage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		KickReturnLong: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		KickReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		KickReturnYardDifferential: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		KickReturnYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		KickReturns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		KickoffTouchbacks: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Kickoffs: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		KickoffsInEndZone: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OffensivePlays: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OffensiveYards: FormControl<number | null | undefined>,

		/** Type: double */
		OffensiveYardsPerPlay: FormControl<number | null | undefined>,
		Opponent: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentAssistedTackles: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentBlockedKickReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentBlockedKickReturnYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentBlockedKicks: FormControl<number | null | undefined>,

		/** Type: double */
		OpponentCompletionPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentExtraPointKickingAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentExtraPointKickingConversions: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentExtraPointPassingAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentExtraPointPassingConversions: FormControl<number | null | undefined>,

		/** Type: double */
		OpponentExtraPointPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentExtraPointRushingAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentExtraPointRushingConversions: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentExtraPointsHadBlocked: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFieldGoalAttempts: FormControl<number | null | undefined>,

		/** Type: double */
		OpponentFieldGoalPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFieldGoalReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFieldGoalReturnYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFieldGoalsHadBlocked: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFieldGoalsMade: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFirstDowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFirstDownsByPassing: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFirstDownsByPenalty: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFirstDownsByRushing: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFourthDownAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFourthDownConversions: FormControl<number | null | undefined>,

		/** Type: double */
		OpponentFourthDownPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFumbleReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFumbleReturnYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFumbles: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFumblesForced: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFumblesLost: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFumblesRecovered: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentGiveaways: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentGoalToGoAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentGoalToGoConversions: FormControl<number | null | undefined>,

		/** Type: double */
		OpponentGoalToGoPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentInterceptionReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentInterceptionReturnYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentInterceptionReturns: FormControl<number | null | undefined>,

		/** Type: double */
		OpponentKickReturnAverage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentKickReturnLong: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentKickReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentKickReturnYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentKickReturns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentKickoffTouchbacks: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentKickoffs: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentKickoffsInEndZone: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentOffensivePlays: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentOffensiveYards: FormControl<number | null | undefined>,

		/** Type: double */
		OpponentOffensiveYardsPerPlay: FormControl<number | null | undefined>,

		/** Type: double */
		OpponentPasserRating: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPassesDefended: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPassingAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPassingCompletions: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPassingDropbacks: FormControl<number | null | undefined>,

		/** Type: double */
		OpponentPassingInterceptionPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPassingInterceptions: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPassingTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPassingYards: FormControl<number | null | undefined>,

		/** Type: double */
		OpponentPassingYardsPerAttempt: FormControl<number | null | undefined>,

		/** Type: double */
		OpponentPassingYardsPerCompletion: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPenalties: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPenaltyYards: FormControl<number | null | undefined>,

		/** Type: double */
		OpponentPuntAverage: FormControl<number | null | undefined>,

		/** Type: double */
		OpponentPuntNetAverage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPuntNetYards: FormControl<number | null | undefined>,

		/** Type: double */
		OpponentPuntReturnAverage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPuntReturnLong: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPuntReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPuntReturnYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPuntReturns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPuntYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPunts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPuntsHadBlocked: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentQuarterbackHits: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentQuarterbackHitsDifferential: FormControl<number | null | undefined>,

		/** Type: double */
		OpponentQuarterbackHitsPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentQuarterbackSacksDifferential: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentRedZoneAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentRedZoneConversions: FormControl<number | null | undefined>,

		/** Type: double */
		OpponentRedZonePercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentReturnYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentRushingAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentRushingTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentRushingYards: FormControl<number | null | undefined>,

		/** Type: double */
		OpponentRushingYardsPerAttempt: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentSackYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentSacks: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentSafeties: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentScore: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentScoreOvertime: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentScoreQuarter1: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentScoreQuarter2: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentScoreQuarter3: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentScoreQuarter4: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentSoloTackles: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentTacklesForLoss: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentTacklesForLossDifferential: FormControl<number | null | undefined>,

		/** Type: double */
		OpponentTacklesForLossPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentTakeaways: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentThirdDownAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentThirdDownConversions: FormControl<number | null | undefined>,

		/** Type: double */
		OpponentThirdDownPercentage: FormControl<number | null | undefined>,
		OpponentTimeOfPossession: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentTimeOfPossessionMinutes: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentTimeOfPossessionSeconds: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentTimesSacked: FormControl<number | null | undefined>,

		/** Type: double */
		OpponentTimesSackedPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentTimesSackedYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentTurnoverDifferential: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentTwoPointConversionReturns: FormControl<number | null | undefined>,

		/** Type: double */
		OverUnder: FormControl<number | null | undefined>,

		/** Type: double */
		PasserRating: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PassesDefended: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PassingAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PassingCompletions: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PassingDropbacks: FormControl<number | null | undefined>,

		/** Type: double */
		PassingInterceptionPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PassingInterceptions: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PassingTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PassingYards: FormControl<number | null | undefined>,

		/** Type: double */
		PassingYardsPerAttempt: FormControl<number | null | undefined>,

		/** Type: double */
		PassingYardsPerCompletion: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Penalties: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PenaltyYardDifferential: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PenaltyYards: FormControl<number | null | undefined>,
		PlayingSurface: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PointDifferential: FormControl<number | null | undefined>,

		/** Type: double */
		PointSpread: FormControl<number | null | undefined>,

		/** Type: double */
		PuntAverage: FormControl<number | null | undefined>,

		/** Type: double */
		PuntNetAverage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PuntNetYards: FormControl<number | null | undefined>,

		/** Type: double */
		PuntReturnAverage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PuntReturnLong: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PuntReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PuntReturnYardDifferential: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PuntReturnYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PuntReturns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PuntYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Punts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PuntsHadBlocked: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		QuarterbackHits: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		QuarterbackHitsDifferential: FormControl<number | null | undefined>,

		/** Type: double */
		QuarterbackHitsPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		QuarterbackSacksDifferential: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RedZoneAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RedZoneConversions: FormControl<number | null | undefined>,

		/** Type: double */
		RedZonePercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ReturnYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RushingAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RushingTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RushingYards: FormControl<number | null | undefined>,

		/** Type: double */
		RushingYardsPerAttempt: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SackYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Sacks: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Safeties: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Score: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreOvertime: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreQuarter1: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreQuarter2: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreQuarter3: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreQuarter4: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SoloTackles: FormControl<number | null | undefined>,
		Stadium: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TacklesForLoss: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TacklesForLossDifferential: FormControl<number | null | undefined>,

		/** Type: double */
		TacklesForLossPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Takeaways: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamGameID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID: FormControl<number | null | undefined>,
		TeamName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Temperature: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ThirdDownAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ThirdDownConversions: FormControl<number | null | undefined>,

		/** Type: double */
		ThirdDownPercentage: FormControl<number | null | undefined>,
		TimeOfPossession: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimeOfPossessionMinutes: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimeOfPossessionSeconds: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimesSacked: FormControl<number | null | undefined>,

		/** Type: double */
		TimesSackedPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimesSackedYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TotalScore: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Touchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TurnoverDifferential: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TwoPointConversionReturns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Week: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AssistedTackles?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		BlockedKickReturnTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		BlockedKickReturnYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		BlockedKicks?: number | null;

		/** Type: double */
		CompletionPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ExtraPointKickingAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ExtraPointKickingConversions?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ExtraPointPassingAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ExtraPointPassingConversions?: number | null;

		/** Type: double */
		ExtraPointPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ExtraPointRushingAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ExtraPointRushingConversions?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ExtraPointsHadBlocked?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalAttempts?: number | null;

		/** Type: double */
		FieldGoalPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalReturnTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalReturnYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalsHadBlocked?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalsMade?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FirstDowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FirstDownsByPassing?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FirstDownsByPenalty?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FirstDownsByRushing?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FourthDownAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FourthDownConversions?: number | null;

		/** Type: double */
		FourthDownPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FumbleReturnTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FumbleReturnYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Fumbles?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FumblesForced?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FumblesLost?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FumblesRecovered?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Games?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Giveaways?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GoalToGoAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GoalToGoConversions?: number | null;

		/** Type: double */
		GoalToGoPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Humidity?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		InterceptionReturnTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		InterceptionReturnYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		InterceptionReturns?: number | null;

		/** Type: double */
		KickReturnAverage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		KickReturnLong?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		KickReturnTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		KickReturnYardDifferential?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		KickReturnYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		KickReturns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		KickoffTouchbacks?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Kickoffs?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		KickoffsInEndZone?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OffensivePlays?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OffensiveYards?: number | null;

		/** Type: double */
		OffensiveYardsPerPlay?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentAssistedTackles?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentBlockedKickReturnTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentBlockedKickReturnYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentBlockedKicks?: number | null;

		/** Type: double */
		OpponentCompletionPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentExtraPointKickingAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentExtraPointKickingConversions?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentExtraPointPassingAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentExtraPointPassingConversions?: number | null;

		/** Type: double */
		OpponentExtraPointPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentExtraPointRushingAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentExtraPointRushingConversions?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentExtraPointsHadBlocked?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFieldGoalAttempts?: number | null;

		/** Type: double */
		OpponentFieldGoalPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFieldGoalReturnTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFieldGoalReturnYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFieldGoalsHadBlocked?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFieldGoalsMade?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFirstDowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFirstDownsByPassing?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFirstDownsByPenalty?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFirstDownsByRushing?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFourthDownAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFourthDownConversions?: number | null;

		/** Type: double */
		OpponentFourthDownPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFumbleReturnTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFumbleReturnYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFumbles?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFumblesForced?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFumblesLost?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFumblesRecovered?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentGiveaways?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentGoalToGoAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentGoalToGoConversions?: number | null;

		/** Type: double */
		OpponentGoalToGoPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentInterceptionReturnTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentInterceptionReturnYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentInterceptionReturns?: number | null;

		/** Type: double */
		OpponentKickReturnAverage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentKickReturnLong?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentKickReturnTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentKickReturnYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentKickReturns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentKickoffTouchbacks?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentKickoffs?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentKickoffsInEndZone?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentOffensivePlays?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentOffensiveYards?: number | null;

		/** Type: double */
		OpponentOffensiveYardsPerPlay?: number | null;

		/** Type: double */
		OpponentPasserRating?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPassesDefended?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPassingAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPassingCompletions?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPassingDropbacks?: number | null;

		/** Type: double */
		OpponentPassingInterceptionPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPassingInterceptions?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPassingTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPassingYards?: number | null;

		/** Type: double */
		OpponentPassingYardsPerAttempt?: number | null;

		/** Type: double */
		OpponentPassingYardsPerCompletion?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPenalties?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPenaltyYards?: number | null;

		/** Type: double */
		OpponentPuntAverage?: number | null;

		/** Type: double */
		OpponentPuntNetAverage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPuntNetYards?: number | null;

		/** Type: double */
		OpponentPuntReturnAverage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPuntReturnLong?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPuntReturnTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPuntReturnYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPuntReturns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPuntYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPunts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPuntsHadBlocked?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentQuarterbackHits?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentQuarterbackHitsDifferential?: number | null;

		/** Type: double */
		OpponentQuarterbackHitsPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentQuarterbackSacksDifferential?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentRedZoneAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentRedZoneConversions?: number | null;

		/** Type: double */
		OpponentRedZonePercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentReturnYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentRushingAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentRushingTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentRushingYards?: number | null;

		/** Type: double */
		OpponentRushingYardsPerAttempt?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentSackYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentSacks?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentSafeties?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentScore?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentScoreOvertime?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentScoreQuarter1?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentScoreQuarter2?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentScoreQuarter3?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentScoreQuarter4?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentSoloTackles?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentTacklesForLoss?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentTacklesForLossDifferential?: number | null;

		/** Type: double */
		OpponentTacklesForLossPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentTakeaways?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentThirdDownAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentThirdDownConversions?: number | null;

		/** Type: double */
		OpponentThirdDownPercentage?: number | null;
		OpponentTimeOfPossession?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentTimesSacked?: number | null;

		/** Type: double */
		OpponentTimesSackedPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentTimesSackedYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentTurnoverDifferential?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentTwoPointConversionReturns?: number | null;

		/** Type: double */
		OverUnder?: number | null;

		/** Type: double */
		PasserRating?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PassesDefended?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PassingAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PassingCompletions?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PassingDropbacks?: number | null;

		/** Type: double */
		PassingInterceptionPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PassingInterceptions?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PassingTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PassingYards?: number | null;

		/** Type: double */
		PassingYardsPerAttempt?: number | null;

		/** Type: double */
		PassingYardsPerCompletion?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Penalties?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PenaltyYardDifferential?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PenaltyYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PointDifferential?: number | null;

		/** Type: double */
		PointSpread?: number | null;

		/** Type: double */
		PuntAverage?: number | null;

		/** Type: double */
		PuntNetAverage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PuntNetYards?: number | null;

		/** Type: double */
		PuntReturnAverage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PuntReturnLong?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PuntReturnTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PuntReturnYardDifferential?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PuntReturnYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PuntReturns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PuntYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Punts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PuntsHadBlocked?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		QuarterbackHits?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		QuarterbackHitsDifferential?: number | null;

		/** Type: double */
		QuarterbackHitsPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		QuarterbackSacksDifferential?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RedZoneAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RedZoneConversions?: number | null;

		/** Type: double */
		RedZonePercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ReturnYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RushingAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RushingTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RushingYards?: number | null;

		/** Type: double */
		RushingYardsPerAttempt?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SackYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Sacks?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Safeties?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Score?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreOvertime?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreQuarter1?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreQuarter2?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreQuarter3?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreQuarter4?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SoloTackles?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TacklesForLoss?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TacklesForLossDifferential?: number | null;

		/** Type: double */
		TacklesForLossPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Takeaways?: number | null;
		Team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID?: number | null;
		TeamName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamSeasonID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Temperature?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ThirdDownAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ThirdDownConversions?: number | null;

		/** Type: double */
		ThirdDownPercentage?: number | null;
		TimeOfPossession?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimesSacked?: number | null;

		/** Type: double */
		TimesSackedPercentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimesSackedYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TotalScore?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Touchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TurnoverDifferential?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TwoPointConversionReturns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		WindSpeed?: number | null;
	}
	export interface TeamSeasonFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AssistedTackles: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		BlockedKickReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		BlockedKickReturnYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		BlockedKicks: FormControl<number | null | undefined>,

		/** Type: double */
		CompletionPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ExtraPointKickingAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ExtraPointKickingConversions: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ExtraPointPassingAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ExtraPointPassingConversions: FormControl<number | null | undefined>,

		/** Type: double */
		ExtraPointPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ExtraPointRushingAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ExtraPointRushingConversions: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ExtraPointsHadBlocked: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalAttempts: FormControl<number | null | undefined>,

		/** Type: double */
		FieldGoalPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalReturnYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalsHadBlocked: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalsMade: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FirstDowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FirstDownsByPassing: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FirstDownsByPenalty: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FirstDownsByRushing: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FourthDownAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FourthDownConversions: FormControl<number | null | undefined>,

		/** Type: double */
		FourthDownPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FumbleReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FumbleReturnYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Fumbles: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FumblesForced: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FumblesLost: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FumblesRecovered: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Games: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Giveaways: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GoalToGoAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GoalToGoConversions: FormControl<number | null | undefined>,

		/** Type: double */
		GoalToGoPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Humidity: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		InterceptionReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		InterceptionReturnYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		InterceptionReturns: FormControl<number | null | undefined>,

		/** Type: double */
		KickReturnAverage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		KickReturnLong: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		KickReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		KickReturnYardDifferential: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		KickReturnYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		KickReturns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		KickoffTouchbacks: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Kickoffs: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		KickoffsInEndZone: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OffensivePlays: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OffensiveYards: FormControl<number | null | undefined>,

		/** Type: double */
		OffensiveYardsPerPlay: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentAssistedTackles: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentBlockedKickReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentBlockedKickReturnYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentBlockedKicks: FormControl<number | null | undefined>,

		/** Type: double */
		OpponentCompletionPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentExtraPointKickingAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentExtraPointKickingConversions: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentExtraPointPassingAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentExtraPointPassingConversions: FormControl<number | null | undefined>,

		/** Type: double */
		OpponentExtraPointPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentExtraPointRushingAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentExtraPointRushingConversions: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentExtraPointsHadBlocked: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFieldGoalAttempts: FormControl<number | null | undefined>,

		/** Type: double */
		OpponentFieldGoalPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFieldGoalReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFieldGoalReturnYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFieldGoalsHadBlocked: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFieldGoalsMade: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFirstDowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFirstDownsByPassing: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFirstDownsByPenalty: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFirstDownsByRushing: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFourthDownAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFourthDownConversions: FormControl<number | null | undefined>,

		/** Type: double */
		OpponentFourthDownPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFumbleReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFumbleReturnYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFumbles: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFumblesForced: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFumblesLost: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentFumblesRecovered: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentGiveaways: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentGoalToGoAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentGoalToGoConversions: FormControl<number | null | undefined>,

		/** Type: double */
		OpponentGoalToGoPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentInterceptionReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentInterceptionReturnYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentInterceptionReturns: FormControl<number | null | undefined>,

		/** Type: double */
		OpponentKickReturnAverage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentKickReturnLong: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentKickReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentKickReturnYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentKickReturns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentKickoffTouchbacks: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentKickoffs: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentKickoffsInEndZone: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentOffensivePlays: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentOffensiveYards: FormControl<number | null | undefined>,

		/** Type: double */
		OpponentOffensiveYardsPerPlay: FormControl<number | null | undefined>,

		/** Type: double */
		OpponentPasserRating: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPassesDefended: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPassingAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPassingCompletions: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPassingDropbacks: FormControl<number | null | undefined>,

		/** Type: double */
		OpponentPassingInterceptionPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPassingInterceptions: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPassingTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPassingYards: FormControl<number | null | undefined>,

		/** Type: double */
		OpponentPassingYardsPerAttempt: FormControl<number | null | undefined>,

		/** Type: double */
		OpponentPassingYardsPerCompletion: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPenalties: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPenaltyYards: FormControl<number | null | undefined>,

		/** Type: double */
		OpponentPuntAverage: FormControl<number | null | undefined>,

		/** Type: double */
		OpponentPuntNetAverage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPuntNetYards: FormControl<number | null | undefined>,

		/** Type: double */
		OpponentPuntReturnAverage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPuntReturnLong: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPuntReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPuntReturnYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPuntReturns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPuntYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPunts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentPuntsHadBlocked: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentQuarterbackHits: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentQuarterbackHitsDifferential: FormControl<number | null | undefined>,

		/** Type: double */
		OpponentQuarterbackHitsPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentQuarterbackSacksDifferential: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentRedZoneAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentRedZoneConversions: FormControl<number | null | undefined>,

		/** Type: double */
		OpponentRedZonePercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentReturnYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentRushingAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentRushingTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentRushingYards: FormControl<number | null | undefined>,

		/** Type: double */
		OpponentRushingYardsPerAttempt: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentSackYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentSacks: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentSafeties: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentScore: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentScoreOvertime: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentScoreQuarter1: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentScoreQuarter2: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentScoreQuarter3: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentScoreQuarter4: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentSoloTackles: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentTacklesForLoss: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentTacklesForLossDifferential: FormControl<number | null | undefined>,

		/** Type: double */
		OpponentTacklesForLossPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentTakeaways: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentThirdDownAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentThirdDownConversions: FormControl<number | null | undefined>,

		/** Type: double */
		OpponentThirdDownPercentage: FormControl<number | null | undefined>,
		OpponentTimeOfPossession: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentTimesSacked: FormControl<number | null | undefined>,

		/** Type: double */
		OpponentTimesSackedPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentTimesSackedYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentTurnoverDifferential: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentTwoPointConversionReturns: FormControl<number | null | undefined>,

		/** Type: double */
		OverUnder: FormControl<number | null | undefined>,

		/** Type: double */
		PasserRating: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PassesDefended: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PassingAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PassingCompletions: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PassingDropbacks: FormControl<number | null | undefined>,

		/** Type: double */
		PassingInterceptionPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PassingInterceptions: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PassingTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PassingYards: FormControl<number | null | undefined>,

		/** Type: double */
		PassingYardsPerAttempt: FormControl<number | null | undefined>,

		/** Type: double */
		PassingYardsPerCompletion: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Penalties: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PenaltyYardDifferential: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PenaltyYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PointDifferential: FormControl<number | null | undefined>,

		/** Type: double */
		PointSpread: FormControl<number | null | undefined>,

		/** Type: double */
		PuntAverage: FormControl<number | null | undefined>,

		/** Type: double */
		PuntNetAverage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PuntNetYards: FormControl<number | null | undefined>,

		/** Type: double */
		PuntReturnAverage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PuntReturnLong: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PuntReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PuntReturnYardDifferential: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PuntReturnYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PuntReturns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PuntYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Punts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PuntsHadBlocked: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		QuarterbackHits: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		QuarterbackHitsDifferential: FormControl<number | null | undefined>,

		/** Type: double */
		QuarterbackHitsPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		QuarterbackSacksDifferential: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RedZoneAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RedZoneConversions: FormControl<number | null | undefined>,

		/** Type: double */
		RedZonePercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ReturnYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RushingAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RushingTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RushingYards: FormControl<number | null | undefined>,

		/** Type: double */
		RushingYardsPerAttempt: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SackYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Sacks: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Safeties: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Score: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreOvertime: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreQuarter1: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreQuarter2: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreQuarter3: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreQuarter4: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SoloTackles: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TacklesForLoss: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TacklesForLossDifferential: FormControl<number | null | undefined>,

		/** Type: double */
		TacklesForLossPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Takeaways: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID: FormControl<number | null | undefined>,
		TeamName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamSeasonID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Temperature: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ThirdDownAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ThirdDownConversions: FormControl<number | null | undefined>,

		/** Type: double */
		ThirdDownPercentage: FormControl<number | null | undefined>,
		TimeOfPossession: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimesSacked: FormControl<number | null | undefined>,

		/** Type: double */
		TimesSackedPercentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimesSackedYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TotalScore: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Touchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TurnoverDifferential: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TwoPointConversionReturns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType?: number | null;
		ShortName?: string | null;
		StartDate?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType: FormControl<number | null | undefined>,
		ShortName: FormControl<string | null | undefined>,
		StartDate: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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
		 */
		TeamsAll(format: TeamsAllFormat): Observable<Array<Team>> {
			return this.http.get<Array<Team>>(this.baseUri + format + '/AllTeams', {});
		}

		/**
		 * Are Games In Progress
		 * Returns <code>true</code> if there is at least one game being played at the time of the request or <code>false</code> if there are none.
		 * Get {format}/AreAnyGamesInProgress
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
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
		 */
		ByeWeeks(format: TeamsAllFormat, season: string): Observable<Array<Bye>> {
			return this.http.get<Array<Bye>>(this.baseUri + format + '/Byes/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * Season Current
		 * Year of the current NFL season. This value changes on July 1st. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985.
		 * Get {format}/CurrentSeason
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {number} Type: int, -2,147,483,648 to 2,147,483,647
		 */
		SeasonCurrent(format: TeamsAllFormat): Observable<number> {
			return this.http.get<number>(this.baseUri + format + '/CurrentSeason', {});
		}

		/**
		 * Week Current
		 * Number of the current week of the NFL season. This value usually changes on Tuesday nights or Wednesday mornings at midnight EST. Week number is an integer between 1 and 21 or the word current. Weeks 1 through 17 are regular season weeks. Weeks 18 through 21 are post-season weeks.
		 * Get {format}/CurrentWeek
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {number} Type: int, -2,147,483,648 to 2,147,483,647
		 */
		WeekCurrent(format: TeamsAllFormat): Observable<number> {
			return this.http.get<number>(this.baseUri + format + '/CurrentWeek', {});
		}

		/**
		 * Player Details by Free Agents
		 * Get {format}/FreeAgents
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
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
		 */
		GameStatsByWeekDeprecatedUseTeamGameStatsInstead(format: TeamsAllFormat, season: string, week: string): Observable<Array<Game>> {
			return this.http.get<Array<Game>>(this.baseUri + format + '/GameStatsByWeek/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (week == null ? '' : encodeURIComponent(week)) + '', {});
		}

		/**
		 * Season Last Completed
		 * Year of the most recently completed season. this value changes immediately after the Super Bowl. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985.
		 * Get {format}/LastCompletedSeason
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {number} Type: int, -2,147,483,648 to 2,147,483,647
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
		 * @return {number} Type: int, -2,147,483,648 to 2,147,483,647
		 */
		WeekLastCompleted(format: TeamsAllFormat): Observable<number> {
			return this.http.get<number>(this.baseUri + format + '/LastCompletedWeek', {});
		}

		/**
		 * News
		 * Get {format}/News
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
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
		 */
		NewsByPlayer(format: TeamsAllFormat, playerid: string): Observable<Array<News>> {
			return this.http.get<Array<News>>(this.baseUri + format + '/NewsByPlayerID/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}

		/**
		 * News by Team
		 * Get {format}/NewsByTeam/{team}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} team Abbreviation of the team. Example: <code>WAS</code>.
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
		 */
		XPing(format: TeamsAllFormat, seconds: string): Observable<string> {
			return this.http.get(this.baseUri + format + '/Ping/' + (seconds == null ? '' : encodeURIComponent(seconds)) + '', { responseType: 'text' });
		}

		/**
		 * Player Details by Player
		 * Get {format}/Player/{playerid}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} playerid Each NFL player has a unique ID assigned by FantasyData. Player IDs can be determined by pulling player related data. Example:<code>732</code>.
		 */
		PlayerDetailsByPlayer(format: TeamsAllFormat, playerid: string): Observable<PlayerDetail> {
			return this.http.get<PlayerDetail>(this.baseUri + format + '/Player/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}

		/**
		 * Player Details by Available
		 * Get {format}/Players
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 */
		PlayerDetailsByAvailable(format: TeamsAllFormat): Observable<Array<Player>> {
			return this.http.get<Array<Player>>(this.baseUri + format + '/Players', {});
		}

		/**
		 * Player Details by Team
		 * Get {format}/Players/{team}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} team Abbreviation of the team. Example: <code>WAS</code>.
		 */
		PlayerDetailsByTeam(format: TeamsAllFormat, team: string): Observable<Array<PlayerDetail>> {
			return this.http.get<Array<PlayerDetail>>(this.baseUri + format + '/Players/' + (team == null ? '' : encodeURIComponent(team)) + '', {});
		}

		/**
		 * Player Details by Rookie Draft Year
		 * Get {format}/Rookies/{season}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season.<br>Examples: <code>2018</code>, <code>2019</code>, etc.
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
		 */
		ScoresByWeekSimulation(format: TeamsAllFormat, numberofplays: string): Observable<Array<Score>> {
			return this.http.get<Array<Score>>(this.baseUri + format + '/SimulatedScores/' + (numberofplays == null ? '' : encodeURIComponent(numberofplays)) + '', {});
		}

		/**
		 * Stadiums
		 * This method returns all stadiums.
		 * Get {format}/Stadiums
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
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
		 */
		TeamSeasonStats(format: TeamsAllFormat, season: string): Observable<Array<TeamSeason>> {
			return this.http.get<Array<TeamSeason>>(this.baseUri + format + '/TeamSeasonStats/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * Teams (Active)
		 * Gets all active teams.
		 * Get {format}/Teams
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
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
		 */
		Timeframes(format: TeamsAllFormat, type: TimeframesType): Observable<Array<Timeframe>> {
			return this.http.get<Array<Timeframe>>(this.baseUri + format + '/Timeframes/' + type + '', {});
		}

		/**
		 * Season Upcoming
		 * Year of the current NFL season, if we are in the mid-season. If we are in the off-season, then year of the next upcoming season. This value changes immediately after the Super Bowl. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985.
		 * Get {format}/UpcomingSeason
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {number} Type: int, -2,147,483,648 to 2,147,483,647
		 */
		SeasonUpcoming(format: TeamsAllFormat): Observable<number> {
			return this.http.get<number>(this.baseUri + format + '/UpcomingSeason', {});
		}

		/**
		 * Week Upcoming
		 * Number of the upcoming week of the NFL season. This value changes immediately after the final game of the week is completed. We consider upcoming week to be the current week, until current week is over. Week number is an integer between 1 and 21 or the word current. Weeks 1 through 17 are regular season weeks. Weeks 18 through 21 are post-season weeks.
		 * Get {format}/UpcomingWeek
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {number} Type: int, -2,147,483,648 to 2,147,483,647
		 */
		WeekUpcoming(format: TeamsAllFormat): Observable<number> {
			return this.http.get<number>(this.baseUri + format + '/UpcomingWeek', {});
		}
	}

	export enum TeamsAllFormat { XML = 'XML', JSON = 'JSON' }

	export enum TimeframesType { current = 'current', upcoming = 'upcoming', completed = 'completed', recent = 'recent', all = 'all' }

}

