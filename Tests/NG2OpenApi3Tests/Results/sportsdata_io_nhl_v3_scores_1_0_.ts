import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Game {

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
		Period?: string | null;
		Periods?: Array<Period>;

		/** Type: double */
		PointSpread?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PointSpreadAwayTeamMoneyLine?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PointSpreadHomeTeamMoneyLine?: number | null;

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
		UnderPayout?: number | null;
		Updated?: string | null;
	}
	export interface GameFormProperties {

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
		Period: FormControl<string | null | undefined>,

		/** Type: double */
		PointSpread: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PointSpreadAwayTeamMoneyLine: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PointSpreadHomeTeamMoneyLine: FormControl<number | null | undefined>,

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
		UnderPayout: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
	}
	export function CreateGameFormGroup() {
		return new FormGroup<GameFormProperties>({
			Attendance: new FormControl<number | null | undefined>(undefined),
			AwayRotationNumber: new FormControl<number | null | undefined>(undefined),
			AwayTeam: new FormControl<string | null | undefined>(undefined),
			AwayTeamID: new FormControl<number | null | undefined>(undefined),
			AwayTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			AwayTeamScore: new FormControl<number | null | undefined>(undefined),
			Channel: new FormControl<string | null | undefined>(undefined),
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
			Period: new FormControl<string | null | undefined>(undefined),
			PointSpread: new FormControl<number | null | undefined>(undefined),
			PointSpreadAwayTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			PointSpreadHomeTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			StadiumID: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			TimeRemainingMinutes: new FormControl<number | null | undefined>(undefined),
			TimeRemainingSeconds: new FormControl<number | null | undefined>(undefined),
			UnderPayout: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Period {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayScore?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GameID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeScore?: number | null;
		Name?: string | null;
		Penalties?: Array<Penalty>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PeriodID?: number | null;
		ScoringPlays?: Array<ScoringPlay>;
	}
	export interface PeriodFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayScore: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GameID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeScore: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PeriodID: FormControl<number | null | undefined>,
	}
	export function CreatePeriodFormGroup() {
		return new FormGroup<PeriodFormProperties>({
			AwayScore: new FormControl<number | null | undefined>(undefined),
			GameID: new FormControl<number | null | undefined>(undefined),
			HomeScore: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PeriodID: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Penalty {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		BenchPenaltyServedByPlayerID?: number | null;
		Description?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DrawnByPlayerID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DrawnByTeamID?: number | null;
		IsBenchPenalty?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PenalizedPlayerID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PenalizedTeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PenaltyID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PenaltyMinutes?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PeriodID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Sequence?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimeRemainingMinutes?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimeRemainingSeconds?: number | null;
	}
	export interface PenaltyFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		BenchPenaltyServedByPlayerID: FormControl<number | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DrawnByPlayerID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DrawnByTeamID: FormControl<number | null | undefined>,
		IsBenchPenalty: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PenalizedPlayerID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PenalizedTeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PenaltyID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PenaltyMinutes: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PeriodID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Sequence: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimeRemainingMinutes: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimeRemainingSeconds: FormControl<number | null | undefined>,
	}
	export function CreatePenaltyFormGroup() {
		return new FormGroup<PenaltyFormProperties>({
			BenchPenaltyServedByPlayerID: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DrawnByPlayerID: new FormControl<number | null | undefined>(undefined),
			DrawnByTeamID: new FormControl<number | null | undefined>(undefined),
			IsBenchPenalty: new FormControl<boolean | null | undefined>(undefined),
			PenalizedPlayerID: new FormControl<number | null | undefined>(undefined),
			PenalizedTeamID: new FormControl<number | null | undefined>(undefined),
			PenaltyID: new FormControl<number | null | undefined>(undefined),
			PenaltyMinutes: new FormControl<number | null | undefined>(undefined),
			PeriodID: new FormControl<number | null | undefined>(undefined),
			Sequence: new FormControl<number | null | undefined>(undefined),
			TimeRemainingMinutes: new FormControl<number | null | undefined>(undefined),
			TimeRemainingSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ScoringPlay {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AllowedByTeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AssistedByPlayerID1?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AssistedByPlayerID2?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamScore?: number | null;
		EmptyNet?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamScore?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PeriodID?: number | null;
		PowerPlay?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoredByPlayerID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoredByTeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoringPlayID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Sequence?: number | null;
		ShortHanded?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimeRemainingMinutes?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimeRemainingSeconds?: number | null;
	}
	export interface ScoringPlayFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AllowedByTeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AssistedByPlayerID1: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AssistedByPlayerID2: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamScore: FormControl<number | null | undefined>,
		EmptyNet: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamScore: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PeriodID: FormControl<number | null | undefined>,
		PowerPlay: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoredByPlayerID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoredByTeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoringPlayID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Sequence: FormControl<number | null | undefined>,
		ShortHanded: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimeRemainingMinutes: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimeRemainingSeconds: FormControl<number | null | undefined>,
	}
	export function CreateScoringPlayFormGroup() {
		return new FormGroup<ScoringPlayFormProperties>({
			AllowedByTeamID: new FormControl<number | null | undefined>(undefined),
			AssistedByPlayerID1: new FormControl<number | null | undefined>(undefined),
			AssistedByPlayerID2: new FormControl<number | null | undefined>(undefined),
			AwayTeamScore: new FormControl<number | null | undefined>(undefined),
			EmptyNet: new FormControl<boolean | null | undefined>(undefined),
			HomeTeamScore: new FormControl<number | null | undefined>(undefined),
			PeriodID: new FormControl<number | null | undefined>(undefined),
			PowerPlay: new FormControl<boolean | null | undefined>(undefined),
			ScoredByPlayerID: new FormControl<number | null | undefined>(undefined),
			ScoredByTeamID: new FormControl<number | null | undefined>(undefined),
			ScoringPlayID: new FormControl<number | null | undefined>(undefined),
			Sequence: new FormControl<number | null | undefined>(undefined),
			ShortHanded: new FormControl<boolean | null | undefined>(undefined),
			TimeRemainingMinutes: new FormControl<number | null | undefined>(undefined),
			TimeRemainingSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface News {
		Content?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		NewsID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID?: number | null;
		Source?: string | null;
		Team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID?: number | null;
		TermsOfUse?: string | null;
		Title?: string | null;
		Updated?: string | null;
		Url?: string | null;
	}
	export interface NewsFormProperties {
		Content: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		NewsID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID: FormControl<number | null | undefined>,
		Source: FormControl<string | null | undefined>,
		Team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID: FormControl<number | null | undefined>,
		TermsOfUse: FormControl<string | null | undefined>,
		Title: FormControl<string | null | undefined>,
		Updated: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateNewsFormGroup() {
		return new FormGroup<NewsFormProperties>({
			Content: new FormControl<string | null | undefined>(undefined),
			NewsID: new FormControl<number | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			Source: new FormControl<string | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			TermsOfUse: new FormControl<string | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OpponentSeason {

		/** Type: double */
		Assists?: number | null;

		/** Type: double */
		BenchPenaltyMinutes?: number | null;

		/** Type: double */
		Blocks?: number | null;

		/** Type: double */
		EmptyNetGoals?: number | null;

		/** Type: double */
		FaceoffsLost?: number | null;

		/** Type: double */
		FaceoffsWon?: number | null;

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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Games?: number | null;

		/** Type: double */
		Giveaways?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID?: number | null;

		/** Type: double */
		Goals?: number | null;

		/** Type: double */
		GoaltendingGoalsAgainst?: number | null;

		/** Type: double */
		GoaltendingLosses?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GoaltendingMinutes?: number | null;

		/** Type: double */
		GoaltendingOvertimeLosses?: number | null;

		/** Type: double */
		GoaltendingSaves?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GoaltendingSeconds?: number | null;

		/** Type: double */
		GoaltendingShotsAgainst?: number | null;

		/** Type: double */
		GoaltendingShutouts?: number | null;

		/** Type: double */
		GoaltendingWins?: number | null;

		/** Type: double */
		HatTricks?: number | null;

		/** Type: double */
		Hits?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Losses?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Minutes?: number | null;
		Name?: string | null;
		OpponentPosition?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OvertimeLosses?: number | null;

		/** Type: double */
		PenaltyMinutes?: number | null;

		/** Type: double */
		PlusMinus?: number | null;

		/** Type: double */
		PowerPlayAssists?: number | null;

		/** Type: double */
		PowerPlayGoals?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Seconds?: number | null;

		/** Type: double */
		Shifts?: number | null;

		/** Type: double */
		ShootoutGoals?: number | null;

		/** Type: double */
		ShortHandedAssists?: number | null;

		/** Type: double */
		ShortHandedGoals?: number | null;

		/** Type: double */
		ShotsOnGoal?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Started?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StatID?: number | null;

		/** Type: double */
		Takeaways?: number | null;
		Team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID?: number | null;
		Updated?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Wins?: number | null;
	}
	export interface OpponentSeasonFormProperties {

		/** Type: double */
		Assists: FormControl<number | null | undefined>,

		/** Type: double */
		BenchPenaltyMinutes: FormControl<number | null | undefined>,

		/** Type: double */
		Blocks: FormControl<number | null | undefined>,

		/** Type: double */
		EmptyNetGoals: FormControl<number | null | undefined>,

		/** Type: double */
		FaceoffsLost: FormControl<number | null | undefined>,

		/** Type: double */
		FaceoffsWon: FormControl<number | null | undefined>,

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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Games: FormControl<number | null | undefined>,

		/** Type: double */
		Giveaways: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID: FormControl<number | null | undefined>,

		/** Type: double */
		Goals: FormControl<number | null | undefined>,

		/** Type: double */
		GoaltendingGoalsAgainst: FormControl<number | null | undefined>,

		/** Type: double */
		GoaltendingLosses: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GoaltendingMinutes: FormControl<number | null | undefined>,

		/** Type: double */
		GoaltendingOvertimeLosses: FormControl<number | null | undefined>,

		/** Type: double */
		GoaltendingSaves: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GoaltendingSeconds: FormControl<number | null | undefined>,

		/** Type: double */
		GoaltendingShotsAgainst: FormControl<number | null | undefined>,

		/** Type: double */
		GoaltendingShutouts: FormControl<number | null | undefined>,

		/** Type: double */
		GoaltendingWins: FormControl<number | null | undefined>,

		/** Type: double */
		HatTricks: FormControl<number | null | undefined>,

		/** Type: double */
		Hits: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Losses: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Minutes: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		OpponentPosition: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OvertimeLosses: FormControl<number | null | undefined>,

		/** Type: double */
		PenaltyMinutes: FormControl<number | null | undefined>,

		/** Type: double */
		PlusMinus: FormControl<number | null | undefined>,

		/** Type: double */
		PowerPlayAssists: FormControl<number | null | undefined>,

		/** Type: double */
		PowerPlayGoals: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Seconds: FormControl<number | null | undefined>,

		/** Type: double */
		Shifts: FormControl<number | null | undefined>,

		/** Type: double */
		ShootoutGoals: FormControl<number | null | undefined>,

		/** Type: double */
		ShortHandedAssists: FormControl<number | null | undefined>,

		/** Type: double */
		ShortHandedGoals: FormControl<number | null | undefined>,

		/** Type: double */
		ShotsOnGoal: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Started: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StatID: FormControl<number | null | undefined>,

		/** Type: double */
		Takeaways: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Wins: FormControl<number | null | undefined>,
	}
	export function CreateOpponentSeasonFormGroup() {
		return new FormGroup<OpponentSeasonFormProperties>({
			Assists: new FormControl<number | null | undefined>(undefined),
			BenchPenaltyMinutes: new FormControl<number | null | undefined>(undefined),
			Blocks: new FormControl<number | null | undefined>(undefined),
			EmptyNetGoals: new FormControl<number | null | undefined>(undefined),
			FaceoffsLost: new FormControl<number | null | undefined>(undefined),
			FaceoffsWon: new FormControl<number | null | undefined>(undefined),
			FantasyPoints: new FormControl<number | null | undefined>(undefined),
			FantasyPointsDraftKings: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFanDuel: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFantasyDraft: new FormControl<number | null | undefined>(undefined),
			FantasyPointsYahoo: new FormControl<number | null | undefined>(undefined),
			Games: new FormControl<number | null | undefined>(undefined),
			Giveaways: new FormControl<number | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			Goals: new FormControl<number | null | undefined>(undefined),
			GoaltendingGoalsAgainst: new FormControl<number | null | undefined>(undefined),
			GoaltendingLosses: new FormControl<number | null | undefined>(undefined),
			GoaltendingMinutes: new FormControl<number | null | undefined>(undefined),
			GoaltendingOvertimeLosses: new FormControl<number | null | undefined>(undefined),
			GoaltendingSaves: new FormControl<number | null | undefined>(undefined),
			GoaltendingSeconds: new FormControl<number | null | undefined>(undefined),
			GoaltendingShotsAgainst: new FormControl<number | null | undefined>(undefined),
			GoaltendingShutouts: new FormControl<number | null | undefined>(undefined),
			GoaltendingWins: new FormControl<number | null | undefined>(undefined),
			HatTricks: new FormControl<number | null | undefined>(undefined),
			Hits: new FormControl<number | null | undefined>(undefined),
			Losses: new FormControl<number | null | undefined>(undefined),
			Minutes: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			OpponentPosition: new FormControl<string | null | undefined>(undefined),
			OvertimeLosses: new FormControl<number | null | undefined>(undefined),
			PenaltyMinutes: new FormControl<number | null | undefined>(undefined),
			PlusMinus: new FormControl<number | null | undefined>(undefined),
			PowerPlayAssists: new FormControl<number | null | undefined>(undefined),
			PowerPlayGoals: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			Seconds: new FormControl<number | null | undefined>(undefined),
			Shifts: new FormControl<number | null | undefined>(undefined),
			ShootoutGoals: new FormControl<number | null | undefined>(undefined),
			ShortHandedAssists: new FormControl<number | null | undefined>(undefined),
			ShortHandedGoals: new FormControl<number | null | undefined>(undefined),
			ShotsOnGoal: new FormControl<number | null | undefined>(undefined),
			Started: new FormControl<number | null | undefined>(undefined),
			StatID: new FormControl<number | null | undefined>(undefined),
			Takeaways: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
			Wins: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Player {
		BirthCity?: string | null;
		BirthDate?: string | null;
		BirthState?: string | null;
		Catches?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DepthChartOrder?: number | null;
		DepthChartPosition?: string | null;
		DraftKingsName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DraftKingsPlayerID?: number | null;
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
		InjuryBodyPart?: string | null;
		InjuryNotes?: string | null;
		InjuryStartDate?: string | null;
		InjuryStatus?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Jersey?: number | null;
		LastName?: string | null;
		PhotoUrl?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID?: number | null;
		Position?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RotoWirePlayerID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RotoworldPlayerID?: number | null;
		Shoots?: string | null;
		SportRadarPlayerID?: string | null;

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
		BirthDate: FormControl<string | null | undefined>,
		BirthState: FormControl<string | null | undefined>,
		Catches: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DepthChartOrder: FormControl<number | null | undefined>,
		DepthChartPosition: FormControl<string | null | undefined>,
		DraftKingsName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DraftKingsPlayerID: FormControl<number | null | undefined>,
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
		InjuryBodyPart: FormControl<string | null | undefined>,
		InjuryNotes: FormControl<string | null | undefined>,
		InjuryStartDate: FormControl<string | null | undefined>,
		InjuryStatus: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Jersey: FormControl<number | null | undefined>,
		LastName: FormControl<string | null | undefined>,
		PhotoUrl: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID: FormControl<number | null | undefined>,
		Position: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RotoWirePlayerID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RotoworldPlayerID: FormControl<number | null | undefined>,
		Shoots: FormControl<string | null | undefined>,
		SportRadarPlayerID: FormControl<string | null | undefined>,

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
			BirthDate: new FormControl<string | null | undefined>(undefined),
			BirthState: new FormControl<string | null | undefined>(undefined),
			Catches: new FormControl<string | null | undefined>(undefined),
			DepthChartOrder: new FormControl<number | null | undefined>(undefined),
			DepthChartPosition: new FormControl<string | null | undefined>(undefined),
			DraftKingsName: new FormControl<string | null | undefined>(undefined),
			DraftKingsPlayerID: new FormControl<number | null | undefined>(undefined),
			FanDuelName: new FormControl<string | null | undefined>(undefined),
			FanDuelPlayerID: new FormControl<number | null | undefined>(undefined),
			FantasyAlarmPlayerID: new FormControl<number | null | undefined>(undefined),
			FantasyDraftName: new FormControl<string | null | undefined>(undefined),
			FantasyDraftPlayerID: new FormControl<number | null | undefined>(undefined),
			FirstName: new FormControl<string | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			Height: new FormControl<number | null | undefined>(undefined),
			InjuryBodyPart: new FormControl<string | null | undefined>(undefined),
			InjuryNotes: new FormControl<string | null | undefined>(undefined),
			InjuryStartDate: new FormControl<string | null | undefined>(undefined),
			InjuryStatus: new FormControl<string | null | undefined>(undefined),
			Jersey: new FormControl<number | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
			PhotoUrl: new FormControl<string | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			Position: new FormControl<string | null | undefined>(undefined),
			RotoWirePlayerID: new FormControl<number | null | undefined>(undefined),
			RotoworldPlayerID: new FormControl<number | null | undefined>(undefined),
			Shoots: new FormControl<string | null | undefined>(undefined),
			SportRadarPlayerID: new FormControl<string | null | undefined>(undefined),
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
		Status?: string | null;
		Team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Weight?: number | null;
	}
	export interface PlayerBasicFormProperties {
		BirthCity: FormControl<string | null | undefined>,
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
			BirthDate: new FormControl<string | null | undefined>(undefined),
			BirthState: new FormControl<string | null | undefined>(undefined),
			FirstName: new FormControl<string | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			Height: new FormControl<number | null | undefined>(undefined),
			Jersey: new FormControl<number | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			Position: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			Weight: new FormControl<number | null | undefined>(undefined),
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
	export interface ScheduleBasicFormProperties {
		AwayTeam: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamScore: FormControl<number | null | undefined>,
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
			GameEndDateTime: new FormControl<string | null | undefined>(undefined),
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
		DateTime?: string | null;
		Day?: string | null;
		GameEndDateTime?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GameID?: number | null;
		HomeTeam?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamScore?: number | null;
		IsClosed?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType?: number | null;

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
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,
		GameEndDateTime: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GameID: FormControl<number | null | undefined>,
		HomeTeam: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamScore: FormControl<number | null | undefined>,
		IsClosed: FormControl<boolean | null | undefined>,

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
			DateTime: new FormControl<string | null | undefined>(undefined),
			Day: new FormControl<string | null | undefined>(undefined),
			GameEndDateTime: new FormControl<string | null | undefined>(undefined),
			GameID: new FormControl<number | null | undefined>(undefined),
			HomeTeam: new FormControl<string | null | undefined>(undefined),
			HomeTeamID: new FormControl<number | null | undefined>(undefined),
			HomeTeamScore: new FormControl<number | null | undefined>(undefined),
			IsClosed: new FormControl<boolean | null | undefined>(undefined),
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID?: number | null;
		Key?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Losses?: number | null;
		Name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OvertimeLosses?: number | null;

		/** Type: double */
		Percentage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ShutoutWins?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Wins?: number | null;
	}
	export interface StandingFormProperties {
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID: FormControl<number | null | undefined>,
		Key: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Losses: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OvertimeLosses: FormControl<number | null | undefined>,

		/** Type: double */
		Percentage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ShutoutWins: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Wins: FormControl<number | null | undefined>,
	}
	export function CreateStandingFormGroup() {
		return new FormGroup<StandingFormProperties>({
			City: new FormControl<string | null | undefined>(undefined),
			Conference: new FormControl<string | null | undefined>(undefined),
			ConferenceLosses: new FormControl<number | null | undefined>(undefined),
			ConferenceRank: new FormControl<number | null | undefined>(undefined),
			ConferenceWins: new FormControl<number | null | undefined>(undefined),
			Division: new FormControl<string | null | undefined>(undefined),
			DivisionLosses: new FormControl<number | null | undefined>(undefined),
			DivisionRank: new FormControl<number | null | undefined>(undefined),
			DivisionWins: new FormControl<number | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			Key: new FormControl<string | null | undefined>(undefined),
			Losses: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			OvertimeLosses: new FormControl<number | null | undefined>(undefined),
			Percentage: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			ShutoutWins: new FormControl<number | null | undefined>(undefined),
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
		Name?: string | null;
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
		Name: FormControl<string | null | undefined>,
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
			Name: new FormControl<string | null | undefined>(undefined),
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

	export interface TeamGame {

		/** Type: double */
		Assists?: number | null;

		/** Type: double */
		BenchPenaltyMinutes?: number | null;

		/** Type: double */
		Blocks?: number | null;
		DateTime?: string | null;
		Day?: string | null;

		/** Type: double */
		EmptyNetGoals?: number | null;

		/** Type: double */
		FaceoffsLost?: number | null;

		/** Type: double */
		FaceoffsWon?: number | null;

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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GameID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Games?: number | null;

		/** Type: double */
		Giveaways?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalGameID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalOpponentID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID?: number | null;

		/** Type: double */
		Goals?: number | null;

		/** Type: double */
		GoaltendingGoalsAgainst?: number | null;

		/** Type: double */
		GoaltendingLosses?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GoaltendingMinutes?: number | null;

		/** Type: double */
		GoaltendingOvertimeLosses?: number | null;

		/** Type: double */
		GoaltendingSaves?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GoaltendingSeconds?: number | null;

		/** Type: double */
		GoaltendingShotsAgainst?: number | null;

		/** Type: double */
		GoaltendingShutouts?: number | null;

		/** Type: double */
		GoaltendingWins?: number | null;

		/** Type: double */
		HatTricks?: number | null;

		/** Type: double */
		Hits?: number | null;
		HomeOrAway?: string | null;
		IsGameOver?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Losses?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Minutes?: number | null;
		Name?: string | null;
		Opponent?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OvertimeLosses?: number | null;

		/** Type: double */
		PenaltyMinutes?: number | null;

		/** Type: double */
		PlusMinus?: number | null;

		/** Type: double */
		PowerPlayAssists?: number | null;

		/** Type: double */
		PowerPlayGoals?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Seconds?: number | null;

		/** Type: double */
		Shifts?: number | null;

		/** Type: double */
		ShootoutGoals?: number | null;

		/** Type: double */
		ShortHandedAssists?: number | null;

		/** Type: double */
		ShortHandedGoals?: number | null;

		/** Type: double */
		ShotsOnGoal?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Started?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StatID?: number | null;

		/** Type: double */
		Takeaways?: number | null;
		Team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID?: number | null;
		Updated?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Wins?: number | null;
	}
	export interface TeamGameFormProperties {

		/** Type: double */
		Assists: FormControl<number | null | undefined>,

		/** Type: double */
		BenchPenaltyMinutes: FormControl<number | null | undefined>,

		/** Type: double */
		Blocks: FormControl<number | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,

		/** Type: double */
		EmptyNetGoals: FormControl<number | null | undefined>,

		/** Type: double */
		FaceoffsLost: FormControl<number | null | undefined>,

		/** Type: double */
		FaceoffsWon: FormControl<number | null | undefined>,

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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GameID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Games: FormControl<number | null | undefined>,

		/** Type: double */
		Giveaways: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalGameID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalOpponentID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID: FormControl<number | null | undefined>,

		/** Type: double */
		Goals: FormControl<number | null | undefined>,

		/** Type: double */
		GoaltendingGoalsAgainst: FormControl<number | null | undefined>,

		/** Type: double */
		GoaltendingLosses: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GoaltendingMinutes: FormControl<number | null | undefined>,

		/** Type: double */
		GoaltendingOvertimeLosses: FormControl<number | null | undefined>,

		/** Type: double */
		GoaltendingSaves: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GoaltendingSeconds: FormControl<number | null | undefined>,

		/** Type: double */
		GoaltendingShotsAgainst: FormControl<number | null | undefined>,

		/** Type: double */
		GoaltendingShutouts: FormControl<number | null | undefined>,

		/** Type: double */
		GoaltendingWins: FormControl<number | null | undefined>,

		/** Type: double */
		HatTricks: FormControl<number | null | undefined>,

		/** Type: double */
		Hits: FormControl<number | null | undefined>,
		HomeOrAway: FormControl<string | null | undefined>,
		IsGameOver: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Losses: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Minutes: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Opponent: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OvertimeLosses: FormControl<number | null | undefined>,

		/** Type: double */
		PenaltyMinutes: FormControl<number | null | undefined>,

		/** Type: double */
		PlusMinus: FormControl<number | null | undefined>,

		/** Type: double */
		PowerPlayAssists: FormControl<number | null | undefined>,

		/** Type: double */
		PowerPlayGoals: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Seconds: FormControl<number | null | undefined>,

		/** Type: double */
		Shifts: FormControl<number | null | undefined>,

		/** Type: double */
		ShootoutGoals: FormControl<number | null | undefined>,

		/** Type: double */
		ShortHandedAssists: FormControl<number | null | undefined>,

		/** Type: double */
		ShortHandedGoals: FormControl<number | null | undefined>,

		/** Type: double */
		ShotsOnGoal: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Started: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StatID: FormControl<number | null | undefined>,

		/** Type: double */
		Takeaways: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Wins: FormControl<number | null | undefined>,
	}
	export function CreateTeamGameFormGroup() {
		return new FormGroup<TeamGameFormProperties>({
			Assists: new FormControl<number | null | undefined>(undefined),
			BenchPenaltyMinutes: new FormControl<number | null | undefined>(undefined),
			Blocks: new FormControl<number | null | undefined>(undefined),
			DateTime: new FormControl<string | null | undefined>(undefined),
			Day: new FormControl<string | null | undefined>(undefined),
			EmptyNetGoals: new FormControl<number | null | undefined>(undefined),
			FaceoffsLost: new FormControl<number | null | undefined>(undefined),
			FaceoffsWon: new FormControl<number | null | undefined>(undefined),
			FantasyPoints: new FormControl<number | null | undefined>(undefined),
			FantasyPointsDraftKings: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFanDuel: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFantasyDraft: new FormControl<number | null | undefined>(undefined),
			FantasyPointsYahoo: new FormControl<number | null | undefined>(undefined),
			GameID: new FormControl<number | null | undefined>(undefined),
			Games: new FormControl<number | null | undefined>(undefined),
			Giveaways: new FormControl<number | null | undefined>(undefined),
			GlobalGameID: new FormControl<number | null | undefined>(undefined),
			GlobalOpponentID: new FormControl<number | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			Goals: new FormControl<number | null | undefined>(undefined),
			GoaltendingGoalsAgainst: new FormControl<number | null | undefined>(undefined),
			GoaltendingLosses: new FormControl<number | null | undefined>(undefined),
			GoaltendingMinutes: new FormControl<number | null | undefined>(undefined),
			GoaltendingOvertimeLosses: new FormControl<number | null | undefined>(undefined),
			GoaltendingSaves: new FormControl<number | null | undefined>(undefined),
			GoaltendingSeconds: new FormControl<number | null | undefined>(undefined),
			GoaltendingShotsAgainst: new FormControl<number | null | undefined>(undefined),
			GoaltendingShutouts: new FormControl<number | null | undefined>(undefined),
			GoaltendingWins: new FormControl<number | null | undefined>(undefined),
			HatTricks: new FormControl<number | null | undefined>(undefined),
			Hits: new FormControl<number | null | undefined>(undefined),
			HomeOrAway: new FormControl<string | null | undefined>(undefined),
			IsGameOver: new FormControl<boolean | null | undefined>(undefined),
			Losses: new FormControl<number | null | undefined>(undefined),
			Minutes: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Opponent: new FormControl<string | null | undefined>(undefined),
			OpponentID: new FormControl<number | null | undefined>(undefined),
			OvertimeLosses: new FormControl<number | null | undefined>(undefined),
			PenaltyMinutes: new FormControl<number | null | undefined>(undefined),
			PlusMinus: new FormControl<number | null | undefined>(undefined),
			PowerPlayAssists: new FormControl<number | null | undefined>(undefined),
			PowerPlayGoals: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			Seconds: new FormControl<number | null | undefined>(undefined),
			Shifts: new FormControl<number | null | undefined>(undefined),
			ShootoutGoals: new FormControl<number | null | undefined>(undefined),
			ShortHandedAssists: new FormControl<number | null | undefined>(undefined),
			ShortHandedGoals: new FormControl<number | null | undefined>(undefined),
			ShotsOnGoal: new FormControl<number | null | undefined>(undefined),
			Started: new FormControl<number | null | undefined>(undefined),
			StatID: new FormControl<number | null | undefined>(undefined),
			Takeaways: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
			Wins: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TeamSeason {

		/** Type: double */
		Assists?: number | null;

		/** Type: double */
		BenchPenaltyMinutes?: number | null;

		/** Type: double */
		Blocks?: number | null;

		/** Type: double */
		EmptyNetGoals?: number | null;

		/** Type: double */
		FaceoffsLost?: number | null;

		/** Type: double */
		FaceoffsWon?: number | null;

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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Games?: number | null;

		/** Type: double */
		Giveaways?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID?: number | null;

		/** Type: double */
		Goals?: number | null;

		/** Type: double */
		GoaltendingGoalsAgainst?: number | null;

		/** Type: double */
		GoaltendingLosses?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GoaltendingMinutes?: number | null;

		/** Type: double */
		GoaltendingOvertimeLosses?: number | null;

		/** Type: double */
		GoaltendingSaves?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GoaltendingSeconds?: number | null;

		/** Type: double */
		GoaltendingShotsAgainst?: number | null;

		/** Type: double */
		GoaltendingShutouts?: number | null;

		/** Type: double */
		GoaltendingWins?: number | null;

		/** Type: double */
		HatTricks?: number | null;

		/** Type: double */
		Hits?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Losses?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Minutes?: number | null;
		Name?: string | null;
		OpponentPosition?: string | null;
		OpponentStat?: OpponentSeason;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OvertimeLosses?: number | null;

		/** Type: double */
		PenaltyMinutes?: number | null;

		/** Type: double */
		PlusMinus?: number | null;

		/** Type: double */
		PowerPlayAssists?: number | null;

		/** Type: double */
		PowerPlayGoals?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Seconds?: number | null;

		/** Type: double */
		Shifts?: number | null;

		/** Type: double */
		ShootoutGoals?: number | null;

		/** Type: double */
		ShortHandedAssists?: number | null;

		/** Type: double */
		ShortHandedGoals?: number | null;

		/** Type: double */
		ShotsOnGoal?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Started?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StatID?: number | null;

		/** Type: double */
		Takeaways?: number | null;
		Team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID?: number | null;
		Updated?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Wins?: number | null;
	}
	export interface TeamSeasonFormProperties {

		/** Type: double */
		Assists: FormControl<number | null | undefined>,

		/** Type: double */
		BenchPenaltyMinutes: FormControl<number | null | undefined>,

		/** Type: double */
		Blocks: FormControl<number | null | undefined>,

		/** Type: double */
		EmptyNetGoals: FormControl<number | null | undefined>,

		/** Type: double */
		FaceoffsLost: FormControl<number | null | undefined>,

		/** Type: double */
		FaceoffsWon: FormControl<number | null | undefined>,

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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Games: FormControl<number | null | undefined>,

		/** Type: double */
		Giveaways: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID: FormControl<number | null | undefined>,

		/** Type: double */
		Goals: FormControl<number | null | undefined>,

		/** Type: double */
		GoaltendingGoalsAgainst: FormControl<number | null | undefined>,

		/** Type: double */
		GoaltendingLosses: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GoaltendingMinutes: FormControl<number | null | undefined>,

		/** Type: double */
		GoaltendingOvertimeLosses: FormControl<number | null | undefined>,

		/** Type: double */
		GoaltendingSaves: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GoaltendingSeconds: FormControl<number | null | undefined>,

		/** Type: double */
		GoaltendingShotsAgainst: FormControl<number | null | undefined>,

		/** Type: double */
		GoaltendingShutouts: FormControl<number | null | undefined>,

		/** Type: double */
		GoaltendingWins: FormControl<number | null | undefined>,

		/** Type: double */
		HatTricks: FormControl<number | null | undefined>,

		/** Type: double */
		Hits: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Losses: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Minutes: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		OpponentPosition: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OvertimeLosses: FormControl<number | null | undefined>,

		/** Type: double */
		PenaltyMinutes: FormControl<number | null | undefined>,

		/** Type: double */
		PlusMinus: FormControl<number | null | undefined>,

		/** Type: double */
		PowerPlayAssists: FormControl<number | null | undefined>,

		/** Type: double */
		PowerPlayGoals: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Seconds: FormControl<number | null | undefined>,

		/** Type: double */
		Shifts: FormControl<number | null | undefined>,

		/** Type: double */
		ShootoutGoals: FormControl<number | null | undefined>,

		/** Type: double */
		ShortHandedAssists: FormControl<number | null | undefined>,

		/** Type: double */
		ShortHandedGoals: FormControl<number | null | undefined>,

		/** Type: double */
		ShotsOnGoal: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Started: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StatID: FormControl<number | null | undefined>,

		/** Type: double */
		Takeaways: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Wins: FormControl<number | null | undefined>,
	}
	export function CreateTeamSeasonFormGroup() {
		return new FormGroup<TeamSeasonFormProperties>({
			Assists: new FormControl<number | null | undefined>(undefined),
			BenchPenaltyMinutes: new FormControl<number | null | undefined>(undefined),
			Blocks: new FormControl<number | null | undefined>(undefined),
			EmptyNetGoals: new FormControl<number | null | undefined>(undefined),
			FaceoffsLost: new FormControl<number | null | undefined>(undefined),
			FaceoffsWon: new FormControl<number | null | undefined>(undefined),
			FantasyPoints: new FormControl<number | null | undefined>(undefined),
			FantasyPointsDraftKings: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFanDuel: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFantasyDraft: new FormControl<number | null | undefined>(undefined),
			FantasyPointsYahoo: new FormControl<number | null | undefined>(undefined),
			Games: new FormControl<number | null | undefined>(undefined),
			Giveaways: new FormControl<number | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			Goals: new FormControl<number | null | undefined>(undefined),
			GoaltendingGoalsAgainst: new FormControl<number | null | undefined>(undefined),
			GoaltendingLosses: new FormControl<number | null | undefined>(undefined),
			GoaltendingMinutes: new FormControl<number | null | undefined>(undefined),
			GoaltendingOvertimeLosses: new FormControl<number | null | undefined>(undefined),
			GoaltendingSaves: new FormControl<number | null | undefined>(undefined),
			GoaltendingSeconds: new FormControl<number | null | undefined>(undefined),
			GoaltendingShotsAgainst: new FormControl<number | null | undefined>(undefined),
			GoaltendingShutouts: new FormControl<number | null | undefined>(undefined),
			GoaltendingWins: new FormControl<number | null | undefined>(undefined),
			HatTricks: new FormControl<number | null | undefined>(undefined),
			Hits: new FormControl<number | null | undefined>(undefined),
			Losses: new FormControl<number | null | undefined>(undefined),
			Minutes: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			OpponentPosition: new FormControl<string | null | undefined>(undefined),
			OvertimeLosses: new FormControl<number | null | undefined>(undefined),
			PenaltyMinutes: new FormControl<number | null | undefined>(undefined),
			PlusMinus: new FormControl<number | null | undefined>(undefined),
			PowerPlayAssists: new FormControl<number | null | undefined>(undefined),
			PowerPlayGoals: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			Seconds: new FormControl<number | null | undefined>(undefined),
			Shifts: new FormControl<number | null | undefined>(undefined),
			ShootoutGoals: new FormControl<number | null | undefined>(undefined),
			ShortHandedAssists: new FormControl<number | null | undefined>(undefined),
			ShortHandedGoals: new FormControl<number | null | undefined>(undefined),
			ShotsOnGoal: new FormControl<number | null | undefined>(undefined),
			Started: new FormControl<number | null | undefined>(undefined),
			StatID: new FormControl<number | null | undefined>(undefined),
			Takeaways: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
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
		 *  <br>Examples: <code>2018-JAN-31</code>, <code>2017-OCT-01</code>.
		 *  
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
		 *  <br>Examples: <code>2018-JAN-31</code>, <code>2017-OCT-01</code>.
		 *  
		 */
		NewsByDate(format: TeamsAllFormat, date: string): Observable<Array<News>> {
			return this.http.get<Array<News>>(this.baseUri + format + '/NewsByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * News by Player
		 * Get {format}/NewsByPlayerID/{playerid}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} playerid Unique FantasyData Player ID.
		 *  Example:<code>10000507</code>.
		 *  
		 */
		NewsByPlayer(format: TeamsAllFormat, playerid: string): Observable<Array<News>> {
			return this.http.get<Array<News>>(this.baseUri + format + '/NewsByPlayerID/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}

		/**
		 * Player Details by Player
		 * Get {format}/Player/{playerid}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} playerid Unique FantasyData Player ID.
		 * Example:<code>30000007</code>.
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
		 * Get {format}/Players/{team}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} team The abbreviation of the requested team.
		 *  <br>Examples: <code>SF</code>, <code>NYY</code>.
		 *  
		 */
		PlayersByTeam(format: TeamsAllFormat, team: string): Observable<Array<Player>> {
			return this.http.get<Array<Player>>(this.baseUri + format + '/Players/' + (team == null ? '' : encodeURIComponent(team)) + '', {});
		}

		/**
		 * Players by Team (Basic)
		 * Get {format}/PlayersBasic/{team}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} team The abbreviation of the requested team.
		 *  <br>Examples: <code>SF</code>, <code>NYY</code>.
		 *  
		 */
		PlayersByTeamBasic(format: TeamsAllFormat, team: string): Observable<Array<PlayerBasic>> {
			return this.http.get<Array<PlayerBasic>>(this.baseUri + format + '/PlayersBasic/' + (team == null ? '' : encodeURIComponent(team)) + '', {});
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
		 *  <br>Examples: <code>2018-JAN-31</code>, <code>2017-OCT-01</code>.
		 *  
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
		 *  <br>Examples: <code>2016</code>, <code>2017</code>.
		 *  
		 */
		Standings(format: TeamsAllFormat, season: string): Observable<Array<Standing>> {
			return this.http.get<Array<Standing>>(this.baseUri + format + '/Standings/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * Team Game Stats by Date
		 * Get {format}/TeamGameStatsByDate/{date}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s).
		 *  <br>Examples: <code>2018-JAN-31</code>, <code>2017-OCT-01</code>.
		 *  
		 */
		TeamGameStatsByDate(format: TeamsAllFormat, date: string): Observable<Array<TeamGame>> {
			return this.http.get<Array<TeamGame>>(this.baseUri + format + '/TeamGameStatsByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * Team Game Logs By Season
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
		 *  <br>Examples: <code>2016</code>, <code>2017</code>.
		 *  
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

