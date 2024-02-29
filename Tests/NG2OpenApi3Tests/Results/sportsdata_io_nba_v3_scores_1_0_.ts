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

	export interface News {
		Author?: string | null;
		Categories?: string | null;
		Content?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		NewsID?: number | null;
		OriginalSource?: string | null;
		OriginalSourceUrl?: string | null;

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
		OriginalSource: FormControl<string | null | undefined>,
		OriginalSourceUrl: FormControl<string | null | undefined>,

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
			OriginalSource: new FormControl<string | null | undefined>(undefined),
			OriginalSourceUrl: new FormControl<string | null | undefined>(undefined),
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
		Losses?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Minutes?: number | null;
		Name?: string | null;

		/** Type: double */
		OffensiveRebounds?: number | null;

		/** Type: double */
		OffensiveReboundsPercentage?: number | null;
		OpponentPosition?: string | null;

		/** Type: double */
		PersonalFouls?: number | null;

		/** Type: double */
		PlayerEfficiencyRating?: number | null;

		/** Type: double */
		PlusMinus?: number | null;

		/** Type: double */
		Points?: number | null;

		/** Type: double */
		Possessions?: number | null;

		/** Type: double */
		Rebounds?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Seconds?: number | null;

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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Wins?: number | null;
	}
	export interface OpponentSeasonFormProperties {

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
		Losses: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Minutes: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: double */
		OffensiveRebounds: FormControl<number | null | undefined>,

		/** Type: double */
		OffensiveReboundsPercentage: FormControl<number | null | undefined>,
		OpponentPosition: FormControl<string | null | undefined>,

		/** Type: double */
		PersonalFouls: FormControl<number | null | undefined>,

		/** Type: double */
		PlayerEfficiencyRating: FormControl<number | null | undefined>,

		/** Type: double */
		PlusMinus: FormControl<number | null | undefined>,

		/** Type: double */
		Points: FormControl<number | null | undefined>,

		/** Type: double */
		Possessions: FormControl<number | null | undefined>,

		/** Type: double */
		Rebounds: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Seconds: FormControl<number | null | undefined>,

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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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
			LineupConfirmed: new FormControl<boolean | null | undefined>(undefined),
			LineupStatus: new FormControl<string | null | undefined>(undefined),
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

	export interface PlayerBasic {
		BirthCity?: string | null;
		BirthCountry?: string | null;
		BirthDate?: string | null;
		BirthState?: string | null;
		FirstName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Height?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Jersey?: number | null;
		LastName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID?: number | null;
		Position?: string | null;
		PositionCategory?: string | null;
		SportsDataID?: string | null;
		Status?: string | null;
		Team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Weight?: number | null;
	}
	export interface PlayerBasicFormProperties {
		BirthCity: FormControl<string | null | undefined>,
		BirthCountry: FormControl<string | null | undefined>,
		BirthDate: FormControl<string | null | undefined>,
		BirthState: FormControl<string | null | undefined>,
		FirstName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Height: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Jersey: FormControl<number | null | undefined>,
		LastName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID: FormControl<number | null | undefined>,
		Position: FormControl<string | null | undefined>,
		PositionCategory: FormControl<string | null | undefined>,
		SportsDataID: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Weight: FormControl<number | null | undefined>,
	}
	export function CreatePlayerBasicFormGroup() {
		return new FormGroup<PlayerBasicFormProperties>({
			BirthCity: new FormControl<string | null | undefined>(undefined),
			BirthCountry: new FormControl<string | null | undefined>(undefined),
			BirthDate: new FormControl<string | null | undefined>(undefined),
			BirthState: new FormControl<string | null | undefined>(undefined),
			FirstName: new FormControl<string | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			Height: new FormControl<number | null | undefined>(undefined),
			Jersey: new FormControl<number | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			Position: new FormControl<string | null | undefined>(undefined),
			PositionCategory: new FormControl<string | null | undefined>(undefined),
			SportsDataID: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			Weight: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Referee {
		College?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Experience?: number | null;
		Name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Number?: number | null;
		Position?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RefereeID?: number | null;
	}
	export interface RefereeFormProperties {
		College: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Experience: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Number: FormControl<number | null | undefined>,
		Position: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RefereeID: FormControl<number | null | undefined>,
	}
	export function CreateRefereeFormGroup() {
		return new FormGroup<RefereeFormProperties>({
			College: new FormControl<string | null | undefined>(undefined),
			Experience: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Number: new FormControl<number | null | undefined>(undefined),
			Position: new FormControl<string | null | undefined>(undefined),
			RefereeID: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ScheduleBasic {
		AwayTeam?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamScore?: number | null;
		DateTime?: string | null;
		DateTimeUTC?: string | null;
		Day?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GameID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalAwayTeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalGameID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalHomeTeamID?: number | null;
		HomeTeam?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamScore?: number | null;
		IsClosed?: boolean | null;
		NeutralVenue?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StadiumID?: number | null;
		Status?: string | null;
		Updated?: string | null;
	}
	export interface ScheduleBasicFormProperties {
		AwayTeam: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamScore: FormControl<number | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		DateTimeUTC: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GameID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalAwayTeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalGameID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalHomeTeamID: FormControl<number | null | undefined>,
		HomeTeam: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamScore: FormControl<number | null | undefined>,
		IsClosed: FormControl<boolean | null | undefined>,
		NeutralVenue: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StadiumID: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Updated: FormControl<string | null | undefined>,
	}
	export function CreateScheduleBasicFormGroup() {
		return new FormGroup<ScheduleBasicFormProperties>({
			AwayTeam: new FormControl<string | null | undefined>(undefined),
			AwayTeamID: new FormControl<number | null | undefined>(undefined),
			AwayTeamScore: new FormControl<number | null | undefined>(undefined),
			DateTime: new FormControl<string | null | undefined>(undefined),
			DateTimeUTC: new FormControl<string | null | undefined>(undefined),
			Day: new FormControl<string | null | undefined>(undefined),
			GameID: new FormControl<number | null | undefined>(undefined),
			GlobalAwayTeamID: new FormControl<number | null | undefined>(undefined),
			GlobalGameID: new FormControl<number | null | undefined>(undefined),
			GlobalHomeTeamID: new FormControl<number | null | undefined>(undefined),
			HomeTeam: new FormControl<string | null | undefined>(undefined),
			HomeTeamID: new FormControl<number | null | undefined>(undefined),
			HomeTeamScore: new FormControl<number | null | undefined>(undefined),
			IsClosed: new FormControl<boolean | null | undefined>(undefined),
			NeutralVenue: new FormControl<boolean | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			StadiumID: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ScoreBasic {
		AwayTeam?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamScore?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamScore2?: number | null;
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
		HomeTeam?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamScore?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamScore2?: number | null;
		IsClosed?: boolean | null;
		NeutralVenue?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType?: number | null;
		SeriesInfo?: Series;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StadiumID?: number | null;
		Status?: string | null;
		Updated?: string | null;
	}
	export interface ScoreBasicFormProperties {
		AwayTeam: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamScore: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamScore2: FormControl<number | null | undefined>,
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
		HomeTeam: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamScore: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamScore2: FormControl<number | null | undefined>,
		IsClosed: FormControl<boolean | null | undefined>,
		NeutralVenue: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StadiumID: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Updated: FormControl<string | null | undefined>,
	}
	export function CreateScoreBasicFormGroup() {
		return new FormGroup<ScoreBasicFormProperties>({
			AwayTeam: new FormControl<string | null | undefined>(undefined),
			AwayTeamID: new FormControl<number | null | undefined>(undefined),
			AwayTeamScore: new FormControl<number | null | undefined>(undefined),
			AwayTeamScore2: new FormControl<number | null | undefined>(undefined),
			DateTime: new FormControl<string | null | undefined>(undefined),
			DateTimeUTC: new FormControl<string | null | undefined>(undefined),
			Day: new FormControl<string | null | undefined>(undefined),
			GameEndDateTime: new FormControl<string | null | undefined>(undefined),
			GameID: new FormControl<number | null | undefined>(undefined),
			GlobalAwayTeamID: new FormControl<number | null | undefined>(undefined),
			GlobalGameID: new FormControl<number | null | undefined>(undefined),
			GlobalHomeTeamID: new FormControl<number | null | undefined>(undefined),
			HomeTeam: new FormControl<string | null | undefined>(undefined),
			HomeTeamID: new FormControl<number | null | undefined>(undefined),
			HomeTeamScore: new FormControl<number | null | undefined>(undefined),
			HomeTeamScore2: new FormControl<number | null | undefined>(undefined),
			IsClosed: new FormControl<boolean | null | undefined>(undefined),
			NeutralVenue: new FormControl<boolean | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			StadiumID: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Season {
		ApiSeason?: string | null;
		Description?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		EndYear?: number | null;
		PostSeasonStartDate?: string | null;
		RegularSeasonStartDate?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season1?: number | null;
		SeasonType?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StartYear?: number | null;
	}
	export interface SeasonFormProperties {
		ApiSeason: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		EndYear: FormControl<number | null | undefined>,
		PostSeasonStartDate: FormControl<string | null | undefined>,
		RegularSeasonStartDate: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season1: FormControl<number | null | undefined>,
		SeasonType: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

	export interface Stadium {
		Active?: boolean | null;
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StadiumID?: number | null;
		State?: string | null;
		Zip?: string | null;
	}
	export interface StadiumFormProperties {
		Active: FormControl<boolean | null | undefined>,
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayLosses?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayWins?: number | null;
		City?: string | null;
		Conference?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ConferenceLosses?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ConferenceRank?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ConferenceWins?: number | null;
		Division?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DivisionLosses?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DivisionRank?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DivisionWins?: number | null;

		/** Type: double */
		GamesBack?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeLosses?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeWins?: number | null;
		Key?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		LastTenLosses?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		LastTenWins?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Losses?: number | null;
		Name?: string | null;

		/** Type: double */
		Percentage?: number | null;

		/** Type: double */
		PointsPerGameAgainst?: number | null;

		/** Type: double */
		PointsPerGameFor?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Streak?: number | null;
		StreakDescription?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Wins?: number | null;
	}
	export interface StandingFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayLosses: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayWins: FormControl<number | null | undefined>,
		City: FormControl<string | null | undefined>,
		Conference: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ConferenceLosses: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ConferenceRank: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ConferenceWins: FormControl<number | null | undefined>,
		Division: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DivisionLosses: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DivisionRank: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DivisionWins: FormControl<number | null | undefined>,

		/** Type: double */
		GamesBack: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeLosses: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeWins: FormControl<number | null | undefined>,
		Key: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		LastTenLosses: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		LastTenWins: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Losses: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: double */
		Percentage: FormControl<number | null | undefined>,

		/** Type: double */
		PointsPerGameAgainst: FormControl<number | null | undefined>,

		/** Type: double */
		PointsPerGameFor: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Streak: FormControl<number | null | undefined>,
		StreakDescription: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Wins: FormControl<number | null | undefined>,
	}
	export function CreateStandingFormGroup() {
		return new FormGroup<StandingFormProperties>({
			AwayLosses: new FormControl<number | null | undefined>(undefined),
			AwayWins: new FormControl<number | null | undefined>(undefined),
			City: new FormControl<string | null | undefined>(undefined),
			Conference: new FormControl<string | null | undefined>(undefined),
			ConferenceLosses: new FormControl<number | null | undefined>(undefined),
			ConferenceRank: new FormControl<number | null | undefined>(undefined),
			ConferenceWins: new FormControl<number | null | undefined>(undefined),
			Division: new FormControl<string | null | undefined>(undefined),
			DivisionLosses: new FormControl<number | null | undefined>(undefined),
			DivisionRank: new FormControl<number | null | undefined>(undefined),
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID?: number | null;
		Key?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		LeagueID?: number | null;
		Name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		NbaDotComTeamID?: number | null;
		PrimaryColor?: string | null;
		QuaternaryColor?: string | null;
		SecondaryColor?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StadiumID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID?: number | null;
		TertiaryColor?: string | null;
		WikipediaLogoUrl?: string | null;
		WikipediaWordMarkUrl?: string | null;
	}
	export interface TeamFormProperties {
		Active: FormControl<boolean | null | undefined>,
		City: FormControl<string | null | undefined>,
		Conference: FormControl<string | null | undefined>,
		Division: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID: FormControl<number | null | undefined>,
		Key: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		LeagueID: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		NbaDotComTeamID: FormControl<number | null | undefined>,
		PrimaryColor: FormControl<string | null | undefined>,
		QuaternaryColor: FormControl<string | null | undefined>,
		SecondaryColor: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StadiumID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID: FormControl<number | null | undefined>,
		TertiaryColor: FormControl<string | null | undefined>,
		WikipediaLogoUrl: FormControl<string | null | undefined>,
		WikipediaWordMarkUrl: FormControl<string | null | undefined>,
	}
	export function CreateTeamFormGroup() {
		return new FormGroup<TeamFormProperties>({
			Active: new FormControl<boolean | null | undefined>(undefined),
			City: new FormControl<string | null | undefined>(undefined),
			Conference: new FormControl<string | null | undefined>(undefined),
			Division: new FormControl<string | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			Key: new FormControl<string | null | undefined>(undefined),
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

	export interface TeamGame {

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
		IsClosed?: boolean | null;
		IsGameOver?: boolean | null;
		LineupConfirmed?: boolean | null;
		LineupStatus?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Losses?: number | null;

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

		/** Type: double */
		PersonalFouls?: number | null;

		/** Type: double */
		PlayerEfficiencyRating?: number | null;

		/** Type: double */
		PlusMinus?: number | null;

		/** Type: double */
		Points?: number | null;

		/** Type: double */
		Possessions?: number | null;

		/** Type: double */
		Rebounds?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Seconds?: number | null;

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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Wins?: number | null;
	}
	export interface TeamGameFormProperties {

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
		IsClosed: FormControl<boolean | null | undefined>,
		IsGameOver: FormControl<boolean | null | undefined>,
		LineupConfirmed: FormControl<boolean | null | undefined>,
		LineupStatus: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Losses: FormControl<number | null | undefined>,

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

		/** Type: double */
		PersonalFouls: FormControl<number | null | undefined>,

		/** Type: double */
		PlayerEfficiencyRating: FormControl<number | null | undefined>,

		/** Type: double */
		PlusMinus: FormControl<number | null | undefined>,

		/** Type: double */
		Points: FormControl<number | null | undefined>,

		/** Type: double */
		Possessions: FormControl<number | null | undefined>,

		/** Type: double */
		Rebounds: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Seconds: FormControl<number | null | undefined>,

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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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
			LineupConfirmed: new FormControl<boolean | null | undefined>(undefined),
			LineupStatus: new FormControl<string | null | undefined>(undefined),
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
		Losses?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Minutes?: number | null;
		Name?: string | null;

		/** Type: double */
		OffensiveRebounds?: number | null;

		/** Type: double */
		OffensiveReboundsPercentage?: number | null;
		OpponentPosition?: string | null;
		OpponentStat?: OpponentSeason;

		/** Type: double */
		PersonalFouls?: number | null;

		/** Type: double */
		PlayerEfficiencyRating?: number | null;

		/** Type: double */
		PlusMinus?: number | null;

		/** Type: double */
		Points?: number | null;

		/** Type: double */
		Possessions?: number | null;

		/** Type: double */
		Rebounds?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Seconds?: number | null;

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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Wins?: number | null;
	}
	export interface TeamSeasonFormProperties {

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
		Losses: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Minutes: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: double */
		OffensiveRebounds: FormControl<number | null | undefined>,

		/** Type: double */
		OffensiveReboundsPercentage: FormControl<number | null | undefined>,
		OpponentPosition: FormControl<string | null | undefined>,

		/** Type: double */
		PersonalFouls: FormControl<number | null | undefined>,

		/** Type: double */
		PlayerEfficiencyRating: FormControl<number | null | undefined>,

		/** Type: double */
		PlusMinus: FormControl<number | null | undefined>,

		/** Type: double */
		Points: FormControl<number | null | undefined>,

		/** Type: double */
		Possessions: FormControl<number | null | undefined>,

		/** Type: double */
		Rebounds: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Seconds: FormControl<number | null | undefined>,

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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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
			LineupConfirmed: new FormControl<boolean | null | undefined>(undefined),
			LineupStatus: new FormControl<string | null | undefined>(undefined),
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
		 * Current Season
		 * Get {format}/CurrentSeason
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 */
		CurrentSeason(format: TeamsAllFormat): Observable<Season> {
			return this.http.get<Season>(this.baseUri + format + '/CurrentSeason', {});
		}

		/**
		 * Depth Charts
		 * Returns the full list of NBA Referees.
		 * Get {format}/DepthCharts
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 */
		DepthCharts(format: TeamsAllFormat): Observable<Array<TeamDepthChart>> {
			return this.http.get<Array<TeamDepthChart>>(this.baseUri + format + '/DepthCharts', {});
		}

		/**
		 * Player Details by Free Agent
		 * Get {format}/FreeAgents
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 */
		PlayerDetailsByFreeAgent(format: TeamsAllFormat): Observable<Array<Player>> {
			return this.http.get<Array<Player>>(this.baseUri + format + '/FreeAgents', {});
		}

		/**
		 * Schedules
		 * Get {format}/Games/{season}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.
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
		 */
		GamesByDate(format: TeamsAllFormat, date: string): Observable<Array<Game>> {
			return this.http.get<Array<Game>>(this.baseUri + format + '/GamesByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
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
		 * <br>Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>.
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
		 */
		NewsByPlayer(format: TeamsAllFormat, playerid: string): Observable<Array<News>> {
			return this.http.get<Array<News>>(this.baseUri + format + '/NewsByPlayerID/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}

		/**
		 * Player Details by Player
		 * Get {format}/Player/{playerid}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} playerid Unique FantasyData Player ID. Example:<code>20000571</code>.
		 */
		PlayerDetailsByPlayer(format: TeamsAllFormat, playerid: string): Observable<Player> {
			return this.http.get<Player>(this.baseUri + format + '/Player/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}

		/**
		 * Player Details by Active
		 * Get {format}/Players
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 */
		PlayerDetailsByActive(format: TeamsAllFormat): Observable<Array<Player>> {
			return this.http.get<Array<Player>>(this.baseUri + format + '/Players', {});
		}

		/**
		 * Players by Team
		 * This endpoint provides active player details by team.
		 * Get {format}/Players/{team}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} team The abbreviation of the requested team.<br>Examples: <code>PHI</code>, <code>BKN</code>.
		 */
		PlayersByTeam(format: TeamsAllFormat, team: string): Observable<Array<Player>> {
			return this.http.get<Array<Player>>(this.baseUri + format + '/Players/' + (team == null ? '' : encodeURIComponent(team)) + '', {});
		}

		/**
		 * Players by Team (Basic)
		 * This endpoint provides active player details by team.
		 * Get {format}/PlayersBasic/{team}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} team The abbreviation of the requested team.<br>Examples: <code>PHI</code>, <code>BKN</code>.
		 */
		PlayersByTeamBasic(format: TeamsAllFormat, team: string): Observable<Array<PlayerBasic>> {
			return this.http.get<Array<PlayerBasic>>(this.baseUri + format + '/PlayersBasic/' + (team == null ? '' : encodeURIComponent(team)) + '', {});
		}

		/**
		 * Referees
		 * Returns the full list of NBA Referees.
		 * Get {format}/Referees
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 */
		Referees(format: TeamsAllFormat): Observable<Array<Referee>> {
			return this.http.get<Array<Referee>>(this.baseUri + format + '/Referees', {});
		}

		/**
		 * Schedules (Basic)
		 * Get {format}/SchedulesBasic/{season}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.
		 */
		SchedulesBasic(format: TeamsAllFormat, season: string): Observable<Array<ScheduleBasic>> {
			return this.http.get<Array<ScheduleBasic>>(this.baseUri + format + '/SchedulesBasic/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * Games by Date (Basic)
		 * Get {format}/ScoresBasic/{date}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s).
		 * <br>Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>.
		 */
		GamesByDateBasic(format: TeamsAllFormat, date: string): Observable<Array<ScoreBasic>> {
			return this.http.get<Array<ScoreBasic>>(this.baseUri + format + '/ScoresBasic/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * Stadiums
		 * Get {format}/Stadiums
		 * @param {StadiumsFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
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
		 */
		TeamGameStatsByDate(format: TeamsAllFormat, date: string): Observable<Array<TeamGame>> {
			return this.http.get<Array<TeamGame>>(this.baseUri + format + '/TeamGameStatsByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * Team Game Logs By Season
		 * Game by game log of total team statistics.
		 * Get {format}/TeamGameStatsBySeason/{season}/{teamid}/{numberofgames}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Season to get games from. Example <code>2019POST</code>, <code>2020</code>
		 * @param {string} teamid Unique ID of team.  Example <code> 8 </code>
		 * @param {string} numberofgames How many games to return. Example <code>all</code>, <code>10</code>, <code>25</code>
		 */
		TeamGameLogsBySeason(format: TeamsAllFormat, season: string, teamid: string, numberofgames: string): Observable<Array<TeamGame>> {
			return this.http.get<Array<TeamGame>>(this.baseUri + format + '/TeamGameStatsBySeason/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (teamid == null ? '' : encodeURIComponent(teamid)) + '/' + (numberofgames == null ? '' : encodeURIComponent(numberofgames)) + '', {});
		}

		/**
		 * Team Season Stats
		 * Get {format}/TeamSeasonStats/{season}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season.
		 * <br>Examples: <code>2015</code>, <code>2016</code>.
		 */
		TeamSeasonStats(format: TeamsAllFormat, season: string): Observable<Array<TeamSeason>> {
			return this.http.get<Array<TeamSeason>>(this.baseUri + format + '/TeamSeasonStats/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * Teams (Active)
		 * Get {format}/teams
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 */
		TeamsActive(format: TeamsAllFormat): Observable<Array<Team>> {
			return this.http.get<Array<Team>>(this.baseUri + format + '/teams', {});
		}
	}

	export enum TeamsAllFormat { XML = 'XML', JSON = 'JSON' }

	export enum StadiumsFormat { xml = 'xml', json = 'json' }

}

