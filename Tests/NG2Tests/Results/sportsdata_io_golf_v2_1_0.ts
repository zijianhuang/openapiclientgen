import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface DfsSlate {
		DfsSlatePlayers?: Array<DfsSlatePlayer>;
		DfsSlateTournaments?: Array<DfsSlateTournament>;
		IsMultiDaySlate?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		NumberOfTournaments?: number | null;
		Operator?: string | null;
		OperatorDay?: string | null;
		OperatorGameType?: string | null;
		OperatorName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OperatorSlateID?: number | null;
		OperatorStartTime?: string | null;
		RemovedByOperator?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SalaryCap?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SlateID?: number | null;
		SlateRosterSlots?: Array<string>;
	}
	export interface DfsSlateFormProperties {
		IsMultiDaySlate: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		NumberOfTournaments: FormControl<number | null | undefined>,
		Operator: FormControl<string | null | undefined>,
		OperatorDay: FormControl<string | null | undefined>,
		OperatorGameType: FormControl<string | null | undefined>,
		OperatorName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OperatorSlateID: FormControl<number | null | undefined>,
		OperatorStartTime: FormControl<string | null | undefined>,
		RemovedByOperator: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SalaryCap: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SlateID: FormControl<number | null | undefined>,
	}
	export function CreateDfsSlateFormGroup() {
		return new FormGroup<DfsSlateFormProperties>({
			IsMultiDaySlate: new FormControl<boolean | null | undefined>(undefined),
			NumberOfTournaments: new FormControl<number | null | undefined>(undefined),
			Operator: new FormControl<string | null | undefined>(undefined),
			OperatorDay: new FormControl<string | null | undefined>(undefined),
			OperatorGameType: new FormControl<string | null | undefined>(undefined),
			OperatorName: new FormControl<string | null | undefined>(undefined),
			OperatorSlateID: new FormControl<number | null | undefined>(undefined),
			OperatorStartTime: new FormControl<string | null | undefined>(undefined),
			RemovedByOperator: new FormControl<boolean | null | undefined>(undefined),
			SalaryCap: new FormControl<number | null | undefined>(undefined),
			SlateID: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DfsSlatePlayer {
		OperatorPlayerID?: string | null;
		OperatorPlayerName?: string | null;
		OperatorPosition?: string | null;
		OperatorRosterSlots?: Array<string>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OperatorSalary?: number | null;
		OperatorSlatePlayerID?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerTournamentProjectionID?: number | null;
		RemovedByOperator?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SlateID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SlatePlayerID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SlateTournamentID?: number | null;
	}
	export interface DfsSlatePlayerFormProperties {
		OperatorPlayerID: FormControl<string | null | undefined>,
		OperatorPlayerName: FormControl<string | null | undefined>,
		OperatorPosition: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OperatorSalary: FormControl<number | null | undefined>,
		OperatorSlatePlayerID: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerTournamentProjectionID: FormControl<number | null | undefined>,
		RemovedByOperator: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SlateID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SlatePlayerID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SlateTournamentID: FormControl<number | null | undefined>,
	}
	export function CreateDfsSlatePlayerFormGroup() {
		return new FormGroup<DfsSlatePlayerFormProperties>({
			OperatorPlayerID: new FormControl<string | null | undefined>(undefined),
			OperatorPlayerName: new FormControl<string | null | undefined>(undefined),
			OperatorPosition: new FormControl<string | null | undefined>(undefined),
			OperatorSalary: new FormControl<number | null | undefined>(undefined),
			OperatorSlatePlayerID: new FormControl<string | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			PlayerTournamentProjectionID: new FormControl<number | null | undefined>(undefined),
			RemovedByOperator: new FormControl<boolean | null | undefined>(undefined),
			SlateID: new FormControl<number | null | undefined>(undefined),
			SlatePlayerID: new FormControl<number | null | undefined>(undefined),
			SlateTournamentID: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DfsSlateTournament {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OperatorTournamentID?: number | null;
		RemovedByOperator?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SlateID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SlateTournamentID?: number | null;
		Tournament?: Tournament;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TournamentID?: number | null;
	}
	export interface DfsSlateTournamentFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OperatorTournamentID: FormControl<number | null | undefined>,
		RemovedByOperator: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SlateID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SlateTournamentID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TournamentID: FormControl<number | null | undefined>,
	}
	export function CreateDfsSlateTournamentFormGroup() {
		return new FormGroup<DfsSlateTournamentFormProperties>({
			OperatorTournamentID: new FormControl<number | null | undefined>(undefined),
			RemovedByOperator: new FormControl<boolean | null | undefined>(undefined),
			SlateID: new FormControl<number | null | undefined>(undefined),
			SlateTournamentID: new FormControl<number | null | undefined>(undefined),
			TournamentID: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Injury {
		Active?: boolean | null;
		BodyPart?: string | null;
		ExpectedReturn?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		InjuryID?: number | null;
		Name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID?: number | null;
		StartDate?: string | null;
		Status?: string | null;
	}
	export interface InjuryFormProperties {
		Active: FormControl<boolean | null | undefined>,
		BodyPart: FormControl<string | null | undefined>,
		ExpectedReturn: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		InjuryID: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID: FormControl<number | null | undefined>,
		StartDate: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateInjuryFormGroup() {
		return new FormGroup<InjuryFormProperties>({
			Active: new FormControl<boolean | null | undefined>(undefined),
			BodyPart: new FormControl<string | null | undefined>(undefined),
			ExpectedReturn: new FormControl<string | null | undefined>(undefined),
			InjuryID: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			StartDate: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Leaderboard {
		Players?: Array<PlayerTournament>;
		Tournament?: Tournament;
	}
	export interface LeaderboardFormProperties {
	}
	export function CreateLeaderboardFormGroup() {
		return new FormGroup<LeaderboardFormProperties>({
		});

	}

	export interface PlayerTournament {

		/** Type: double */
		Birdies?: number | null;

		/** Type: double */
		BogeyFreeRounds?: number | null;

		/** Type: double */
		Bogeys?: number | null;

		/** Type: double */
		BounceBackCount?: number | null;

		/** Type: double */
		ConsecutiveBirdieOrBetterCount?: number | null;
		Country?: string | null;

		/** Type: double */
		DoubleBogeys?: number | null;

		/** Type: double */
		DoubleEagles?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DraftKingsSalary?: number | null;

		/** Type: double */
		Eagles?: number | null;

		/** Type: double */
		Earnings?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FanDuelSalary?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FantasyDraftSalary?: number | null;

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
		FedExPoints?: number | null;

		/** Type: double */
		HoleInOnes?: number | null;
		IsAlternate?: boolean | null;
		IsWithdrawn?: boolean | null;

		/** Type: double */
		MadeCut?: number | null;
		MadeCutDidNotFinish?: boolean | null;
		Name?: string | null;

		/** Type: double */
		OddsToWin?: number | null;
		OddsToWinDescription?: string | null;

		/** Type: double */
		Pars?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerTournamentID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Rank?: number | null;
		Rounds?: Array<PlayerRound>;

		/** Type: double */
		RoundsUnderSeventy?: number | null;

		/** Type: double */
		RoundsWithFiveOrMoreBirdiesOrBetter ?: number | null;

		/** Type: double */
		StreaksOfFiveBirdiesOrBetter?: number | null;

		/** Type: double */
		StreaksOfFourBirdiesOrBetter?: number | null;

		/** Type: double */
		StreaksOfSixBirdiesOrBetter?: number | null;

		/** Type: double */
		StreaksOfThreeBirdiesOrBetter?: number | null;
		TeeTime?: string | null;

		/** Type: double */
		TotalScore?: number | null;

		/** Type: double */
		TotalStrokes?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TotalThrough?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TournamentID?: number | null;
		TournamentStatus?: string | null;

		/** Type: double */
		TripleBogeys?: number | null;

		/** Type: double */
		Win?: number | null;

		/** Type: double */
		WorseThanDoubleBogey?: number | null;

		/** Type: double */
		WorseThanTripleBogey?: number | null;
	}
	export interface PlayerTournamentFormProperties {

		/** Type: double */
		Birdies: FormControl<number | null | undefined>,

		/** Type: double */
		BogeyFreeRounds: FormControl<number | null | undefined>,

		/** Type: double */
		Bogeys: FormControl<number | null | undefined>,

		/** Type: double */
		BounceBackCount: FormControl<number | null | undefined>,

		/** Type: double */
		ConsecutiveBirdieOrBetterCount: FormControl<number | null | undefined>,
		Country: FormControl<string | null | undefined>,

		/** Type: double */
		DoubleBogeys: FormControl<number | null | undefined>,

		/** Type: double */
		DoubleEagles: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DraftKingsSalary: FormControl<number | null | undefined>,

		/** Type: double */
		Eagles: FormControl<number | null | undefined>,

		/** Type: double */
		Earnings: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FanDuelSalary: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FantasyDraftSalary: FormControl<number | null | undefined>,

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
		FedExPoints: FormControl<number | null | undefined>,

		/** Type: double */
		HoleInOnes: FormControl<number | null | undefined>,
		IsAlternate: FormControl<boolean | null | undefined>,
		IsWithdrawn: FormControl<boolean | null | undefined>,

		/** Type: double */
		MadeCut: FormControl<number | null | undefined>,
		MadeCutDidNotFinish: FormControl<boolean | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: double */
		OddsToWin: FormControl<number | null | undefined>,
		OddsToWinDescription: FormControl<string | null | undefined>,

		/** Type: double */
		Pars: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerTournamentID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Rank: FormControl<number | null | undefined>,

		/** Type: double */
		RoundsUnderSeventy: FormControl<number | null | undefined>,

		/** Type: double */
		RoundsWithFiveOrMoreBirdiesOrBetter : FormControl<number | null | undefined>,

		/** Type: double */
		StreaksOfFiveBirdiesOrBetter: FormControl<number | null | undefined>,

		/** Type: double */
		StreaksOfFourBirdiesOrBetter: FormControl<number | null | undefined>,

		/** Type: double */
		StreaksOfSixBirdiesOrBetter: FormControl<number | null | undefined>,

		/** Type: double */
		StreaksOfThreeBirdiesOrBetter: FormControl<number | null | undefined>,
		TeeTime: FormControl<string | null | undefined>,

		/** Type: double */
		TotalScore: FormControl<number | null | undefined>,

		/** Type: double */
		TotalStrokes: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TotalThrough: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TournamentID: FormControl<number | null | undefined>,
		TournamentStatus: FormControl<string | null | undefined>,

		/** Type: double */
		TripleBogeys: FormControl<number | null | undefined>,

		/** Type: double */
		Win: FormControl<number | null | undefined>,

		/** Type: double */
		WorseThanDoubleBogey: FormControl<number | null | undefined>,

		/** Type: double */
		WorseThanTripleBogey: FormControl<number | null | undefined>,
	}
	export function CreatePlayerTournamentFormGroup() {
		return new FormGroup<PlayerTournamentFormProperties>({
			Birdies: new FormControl<number | null | undefined>(undefined),
			BogeyFreeRounds: new FormControl<number | null | undefined>(undefined),
			Bogeys: new FormControl<number | null | undefined>(undefined),
			BounceBackCount: new FormControl<number | null | undefined>(undefined),
			ConsecutiveBirdieOrBetterCount: new FormControl<number | null | undefined>(undefined),
			Country: new FormControl<string | null | undefined>(undefined),
			DoubleBogeys: new FormControl<number | null | undefined>(undefined),
			DoubleEagles: new FormControl<number | null | undefined>(undefined),
			DraftKingsSalary: new FormControl<number | null | undefined>(undefined),
			Eagles: new FormControl<number | null | undefined>(undefined),
			Earnings: new FormControl<number | null | undefined>(undefined),
			FanDuelSalary: new FormControl<number | null | undefined>(undefined),
			FantasyDraftSalary: new FormControl<number | null | undefined>(undefined),
			FantasyPoints: new FormControl<number | null | undefined>(undefined),
			FantasyPointsDraftKings: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFanDuel: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFantasyDraft: new FormControl<number | null | undefined>(undefined),
			FantasyPointsYahoo: new FormControl<number | null | undefined>(undefined),
			FedExPoints: new FormControl<number | null | undefined>(undefined),
			HoleInOnes: new FormControl<number | null | undefined>(undefined),
			IsAlternate: new FormControl<boolean | null | undefined>(undefined),
			IsWithdrawn: new FormControl<boolean | null | undefined>(undefined),
			MadeCut: new FormControl<number | null | undefined>(undefined),
			MadeCutDidNotFinish: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			OddsToWin: new FormControl<number | null | undefined>(undefined),
			OddsToWinDescription: new FormControl<string | null | undefined>(undefined),
			Pars: new FormControl<number | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			PlayerTournamentID: new FormControl<number | null | undefined>(undefined),
			Rank: new FormControl<number | null | undefined>(undefined),
			RoundsUnderSeventy: new FormControl<number | null | undefined>(undefined),
			RoundsWithFiveOrMoreBirdiesOrBetter : new FormControl<number | null | undefined>(undefined),
			StreaksOfFiveBirdiesOrBetter: new FormControl<number | null | undefined>(undefined),
			StreaksOfFourBirdiesOrBetter: new FormControl<number | null | undefined>(undefined),
			StreaksOfSixBirdiesOrBetter: new FormControl<number | null | undefined>(undefined),
			StreaksOfThreeBirdiesOrBetter: new FormControl<number | null | undefined>(undefined),
			TeeTime: new FormControl<string | null | undefined>(undefined),
			TotalScore: new FormControl<number | null | undefined>(undefined),
			TotalStrokes: new FormControl<number | null | undefined>(undefined),
			TotalThrough: new FormControl<number | null | undefined>(undefined),
			TournamentID: new FormControl<number | null | undefined>(undefined),
			TournamentStatus: new FormControl<string | null | undefined>(undefined),
			TripleBogeys: new FormControl<number | null | undefined>(undefined),
			Win: new FormControl<number | null | undefined>(undefined),
			WorseThanDoubleBogey: new FormControl<number | null | undefined>(undefined),
			WorseThanTripleBogey: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PlayerRound {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Birdies?: number | null;
		BogeyFree?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Bogeys?: number | null;

		/** Type: double */
		BounceBackCount?: number | null;

		/** Type: double */
		ConsecutiveBirdieOrBetterCount?: number | null;
		Day?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DoubleBogeys?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DoubleEagles?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Eagles?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HoleInOnes?: number | null;
		Holes?: Array<PlayerHole>;
		IncludesFiveOrMoreBirdiesOrBetter?: boolean | null;
		IncludesStreakOfFiveBirdiesOrBetter?: boolean | null;
		IncludesStreakOfFourBirdiesOrBetter?: boolean | null;
		IncludesStreakOfSixBirdiesOrBetter?: boolean | null;
		IncludesStreakOfThreeBirdiesOrBetter?: boolean | null;

		/** Type: double */
		LongestBirdieOrBetterStreak?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Number?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Par?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Pars?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerRoundID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerTournamentID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Score?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TripleBogeys?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		WorseThanDoubleBogey?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		WorseThanTripleBogey?: number | null;
	}
	export interface PlayerRoundFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Birdies: FormControl<number | null | undefined>,
		BogeyFree: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Bogeys: FormControl<number | null | undefined>,

		/** Type: double */
		BounceBackCount: FormControl<number | null | undefined>,

		/** Type: double */
		ConsecutiveBirdieOrBetterCount: FormControl<number | null | undefined>,
		Day: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DoubleBogeys: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DoubleEagles: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Eagles: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HoleInOnes: FormControl<number | null | undefined>,
		IncludesFiveOrMoreBirdiesOrBetter: FormControl<boolean | null | undefined>,
		IncludesStreakOfFiveBirdiesOrBetter: FormControl<boolean | null | undefined>,
		IncludesStreakOfFourBirdiesOrBetter: FormControl<boolean | null | undefined>,
		IncludesStreakOfSixBirdiesOrBetter: FormControl<boolean | null | undefined>,
		IncludesStreakOfThreeBirdiesOrBetter: FormControl<boolean | null | undefined>,

		/** Type: double */
		LongestBirdieOrBetterStreak: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Number: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Par: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Pars: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerRoundID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerTournamentID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Score: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TripleBogeys: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		WorseThanDoubleBogey: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		WorseThanTripleBogey: FormControl<number | null | undefined>,
	}
	export function CreatePlayerRoundFormGroup() {
		return new FormGroup<PlayerRoundFormProperties>({
			Birdies: new FormControl<number | null | undefined>(undefined),
			BogeyFree: new FormControl<boolean | null | undefined>(undefined),
			Bogeys: new FormControl<number | null | undefined>(undefined),
			BounceBackCount: new FormControl<number | null | undefined>(undefined),
			ConsecutiveBirdieOrBetterCount: new FormControl<number | null | undefined>(undefined),
			Day: new FormControl<string | null | undefined>(undefined),
			DoubleBogeys: new FormControl<number | null | undefined>(undefined),
			DoubleEagles: new FormControl<number | null | undefined>(undefined),
			Eagles: new FormControl<number | null | undefined>(undefined),
			HoleInOnes: new FormControl<number | null | undefined>(undefined),
			IncludesFiveOrMoreBirdiesOrBetter: new FormControl<boolean | null | undefined>(undefined),
			IncludesStreakOfFiveBirdiesOrBetter: new FormControl<boolean | null | undefined>(undefined),
			IncludesStreakOfFourBirdiesOrBetter: new FormControl<boolean | null | undefined>(undefined),
			IncludesStreakOfSixBirdiesOrBetter: new FormControl<boolean | null | undefined>(undefined),
			IncludesStreakOfThreeBirdiesOrBetter: new FormControl<boolean | null | undefined>(undefined),
			LongestBirdieOrBetterStreak: new FormControl<number | null | undefined>(undefined),
			Number: new FormControl<number | null | undefined>(undefined),
			Par: new FormControl<number | null | undefined>(undefined),
			Pars: new FormControl<number | null | undefined>(undefined),
			PlayerRoundID: new FormControl<number | null | undefined>(undefined),
			PlayerTournamentID: new FormControl<number | null | undefined>(undefined),
			Score: new FormControl<number | null | undefined>(undefined),
			TripleBogeys: new FormControl<number | null | undefined>(undefined),
			WorseThanDoubleBogey: new FormControl<number | null | undefined>(undefined),
			WorseThanTripleBogey: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PlayerHole {
		Birdie?: boolean | null;
		Bogey?: boolean | null;
		DoubleBogey?: boolean | null;
		DoubleEagle?: boolean | null;
		Eagle?: boolean | null;
		HoleInOne?: boolean | null;
		IsPar?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Number?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Par?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerRoundID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Score?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ToPar?: number | null;
		WorseThanDoubleBogey?: boolean | null;
	}
	export interface PlayerHoleFormProperties {
		Birdie: FormControl<boolean | null | undefined>,
		Bogey: FormControl<boolean | null | undefined>,
		DoubleBogey: FormControl<boolean | null | undefined>,
		DoubleEagle: FormControl<boolean | null | undefined>,
		Eagle: FormControl<boolean | null | undefined>,
		HoleInOne: FormControl<boolean | null | undefined>,
		IsPar: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Number: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Par: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerRoundID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Score: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ToPar: FormControl<number | null | undefined>,
		WorseThanDoubleBogey: FormControl<boolean | null | undefined>,
	}
	export function CreatePlayerHoleFormGroup() {
		return new FormGroup<PlayerHoleFormProperties>({
			Birdie: new FormControl<boolean | null | undefined>(undefined),
			Bogey: new FormControl<boolean | null | undefined>(undefined),
			DoubleBogey: new FormControl<boolean | null | undefined>(undefined),
			DoubleEagle: new FormControl<boolean | null | undefined>(undefined),
			Eagle: new FormControl<boolean | null | undefined>(undefined),
			HoleInOne: new FormControl<boolean | null | undefined>(undefined),
			IsPar: new FormControl<boolean | null | undefined>(undefined),
			Number: new FormControl<number | null | undefined>(undefined),
			Par: new FormControl<number | null | undefined>(undefined),
			PlayerRoundID: new FormControl<number | null | undefined>(undefined),
			Score: new FormControl<number | null | undefined>(undefined),
			ToPar: new FormControl<number | null | undefined>(undefined),
			WorseThanDoubleBogey: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface News {
		Content?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		NewsID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID?: number | null;
		Source?: string | null;
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
			TermsOfUse: new FormControl<string | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Player {
		BirthCity?: string | null;
		BirthDate?: string | null;
		BirthState?: string | null;
		College?: string | null;
		Country?: string | null;
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
		LastName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PgaDebut?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PgaTourPlayerID?: number | null;
		PhotoUrl?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RotoWirePlayerID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RotoworldPlayerID?: number | null;
		SportRadarPlayerID?: string | null;
		Swings?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Weight?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		YahooPlayerID?: number | null;
	}
	export interface PlayerFormProperties {
		BirthCity: FormControl<string | null | undefined>,
		BirthDate: FormControl<string | null | undefined>,
		BirthState: FormControl<string | null | undefined>,
		College: FormControl<string | null | undefined>,
		Country: FormControl<string | null | undefined>,
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
		LastName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PgaDebut: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PgaTourPlayerID: FormControl<number | null | undefined>,
		PhotoUrl: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RotoWirePlayerID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RotoworldPlayerID: FormControl<number | null | undefined>,
		SportRadarPlayerID: FormControl<string | null | undefined>,
		Swings: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Weight: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		YahooPlayerID: FormControl<number | null | undefined>,
	}
	export function CreatePlayerFormGroup() {
		return new FormGroup<PlayerFormProperties>({
			BirthCity: new FormControl<string | null | undefined>(undefined),
			BirthDate: new FormControl<string | null | undefined>(undefined),
			BirthState: new FormControl<string | null | undefined>(undefined),
			College: new FormControl<string | null | undefined>(undefined),
			Country: new FormControl<string | null | undefined>(undefined),
			DraftKingsName: new FormControl<string | null | undefined>(undefined),
			DraftKingsPlayerID: new FormControl<number | null | undefined>(undefined),
			FanDuelName: new FormControl<string | null | undefined>(undefined),
			FanDuelPlayerID: new FormControl<number | null | undefined>(undefined),
			FantasyAlarmPlayerID: new FormControl<number | null | undefined>(undefined),
			FantasyDraftName: new FormControl<string | null | undefined>(undefined),
			FantasyDraftPlayerID: new FormControl<number | null | undefined>(undefined),
			FirstName: new FormControl<string | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
			PgaDebut: new FormControl<number | null | undefined>(undefined),
			PgaTourPlayerID: new FormControl<number | null | undefined>(undefined),
			PhotoUrl: new FormControl<string | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			RotoWirePlayerID: new FormControl<number | null | undefined>(undefined),
			RotoworldPlayerID: new FormControl<number | null | undefined>(undefined),
			SportRadarPlayerID: new FormControl<string | null | undefined>(undefined),
			Swings: new FormControl<string | null | undefined>(undefined),
			Weight: new FormControl<number | null | undefined>(undefined),
			YahooPlayerID: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PlayerSeason {

		/** Type: double */
		AveragePoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Events?: number | null;
		Name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerSeasonID?: number | null;

		/** Type: double */
		PointsGained?: number | null;

		/** Type: double */
		PointsLost?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: double */
		TotalPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		WorldGolfRank?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		WorldGolfRankLastWeek?: number | null;
	}
	export interface PlayerSeasonFormProperties {

		/** Type: double */
		AveragePoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Events: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerSeasonID: FormControl<number | null | undefined>,

		/** Type: double */
		PointsGained: FormControl<number | null | undefined>,

		/** Type: double */
		PointsLost: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: double */
		TotalPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		WorldGolfRank: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		WorldGolfRankLastWeek: FormControl<number | null | undefined>,
	}
	export function CreatePlayerSeasonFormGroup() {
		return new FormGroup<PlayerSeasonFormProperties>({
			AveragePoints: new FormControl<number | null | undefined>(undefined),
			Events: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			PlayerSeasonID: new FormControl<number | null | undefined>(undefined),
			PointsGained: new FormControl<number | null | undefined>(undefined),
			PointsLost: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			TotalPoints: new FormControl<number | null | undefined>(undefined),
			WorldGolfRank: new FormControl<number | null | undefined>(undefined),
			WorldGolfRankLastWeek: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PlayerTournamentProjection {

		/** Type: double */
		Birdies?: number | null;

		/** Type: double */
		BogeyFreeRounds?: number | null;

		/** Type: double */
		Bogeys?: number | null;

		/** Type: double */
		BounceBackCount?: number | null;

		/** Type: double */
		ConsecutiveBirdieOrBetterCount?: number | null;
		Country?: string | null;

		/** Type: double */
		DoubleBogeys?: number | null;

		/** Type: double */
		DoubleEagles?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DraftKingsSalary?: number | null;

		/** Type: double */
		Eagles?: number | null;

		/** Type: double */
		Earnings?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FanDuelSalary?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FantasyDraftSalary?: number | null;

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
		FedExPoints?: number | null;

		/** Type: double */
		HoleInOnes?: number | null;
		IsAlternate?: boolean | null;
		IsWithdrawn?: boolean | null;

		/** Type: double */
		MadeCut?: number | null;
		MadeCutDidNotFinish?: boolean | null;
		Name?: string | null;

		/** Type: double */
		OddsToWin?: number | null;
		OddsToWinDescription?: string | null;

		/** Type: double */
		Pars?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerTournamentID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Rank?: number | null;
		Rounds?: Array<PlayerRound>;

		/** Type: double */
		RoundsUnderSeventy?: number | null;

		/** Type: double */
		RoundsWithFiveOrMoreBirdiesOrBetter ?: number | null;

		/** Type: double */
		StreaksOfFiveBirdiesOrBetter?: number | null;

		/** Type: double */
		StreaksOfFourBirdiesOrBetter?: number | null;

		/** Type: double */
		StreaksOfSixBirdiesOrBetter?: number | null;

		/** Type: double */
		StreaksOfThreeBirdiesOrBetter?: number | null;
		TeeTime?: string | null;

		/** Type: double */
		TotalScore?: number | null;

		/** Type: double */
		TotalStrokes?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TotalThrough?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TournamentID?: number | null;
		TournamentStatus?: string | null;

		/** Type: double */
		TripleBogeys?: number | null;

		/** Type: double */
		Win?: number | null;

		/** Type: double */
		WorseThanDoubleBogey?: number | null;

		/** Type: double */
		WorseThanTripleBogey?: number | null;
	}
	export interface PlayerTournamentProjectionFormProperties {

		/** Type: double */
		Birdies: FormControl<number | null | undefined>,

		/** Type: double */
		BogeyFreeRounds: FormControl<number | null | undefined>,

		/** Type: double */
		Bogeys: FormControl<number | null | undefined>,

		/** Type: double */
		BounceBackCount: FormControl<number | null | undefined>,

		/** Type: double */
		ConsecutiveBirdieOrBetterCount: FormControl<number | null | undefined>,
		Country: FormControl<string | null | undefined>,

		/** Type: double */
		DoubleBogeys: FormControl<number | null | undefined>,

		/** Type: double */
		DoubleEagles: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DraftKingsSalary: FormControl<number | null | undefined>,

		/** Type: double */
		Eagles: FormControl<number | null | undefined>,

		/** Type: double */
		Earnings: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FanDuelSalary: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FantasyDraftSalary: FormControl<number | null | undefined>,

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
		FedExPoints: FormControl<number | null | undefined>,

		/** Type: double */
		HoleInOnes: FormControl<number | null | undefined>,
		IsAlternate: FormControl<boolean | null | undefined>,
		IsWithdrawn: FormControl<boolean | null | undefined>,

		/** Type: double */
		MadeCut: FormControl<number | null | undefined>,
		MadeCutDidNotFinish: FormControl<boolean | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: double */
		OddsToWin: FormControl<number | null | undefined>,
		OddsToWinDescription: FormControl<string | null | undefined>,

		/** Type: double */
		Pars: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerTournamentID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Rank: FormControl<number | null | undefined>,

		/** Type: double */
		RoundsUnderSeventy: FormControl<number | null | undefined>,

		/** Type: double */
		RoundsWithFiveOrMoreBirdiesOrBetter : FormControl<number | null | undefined>,

		/** Type: double */
		StreaksOfFiveBirdiesOrBetter: FormControl<number | null | undefined>,

		/** Type: double */
		StreaksOfFourBirdiesOrBetter: FormControl<number | null | undefined>,

		/** Type: double */
		StreaksOfSixBirdiesOrBetter: FormControl<number | null | undefined>,

		/** Type: double */
		StreaksOfThreeBirdiesOrBetter: FormControl<number | null | undefined>,
		TeeTime: FormControl<string | null | undefined>,

		/** Type: double */
		TotalScore: FormControl<number | null | undefined>,

		/** Type: double */
		TotalStrokes: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TotalThrough: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TournamentID: FormControl<number | null | undefined>,
		TournamentStatus: FormControl<string | null | undefined>,

		/** Type: double */
		TripleBogeys: FormControl<number | null | undefined>,

		/** Type: double */
		Win: FormControl<number | null | undefined>,

		/** Type: double */
		WorseThanDoubleBogey: FormControl<number | null | undefined>,

		/** Type: double */
		WorseThanTripleBogey: FormControl<number | null | undefined>,
	}
	export function CreatePlayerTournamentProjectionFormGroup() {
		return new FormGroup<PlayerTournamentProjectionFormProperties>({
			Birdies: new FormControl<number | null | undefined>(undefined),
			BogeyFreeRounds: new FormControl<number | null | undefined>(undefined),
			Bogeys: new FormControl<number | null | undefined>(undefined),
			BounceBackCount: new FormControl<number | null | undefined>(undefined),
			ConsecutiveBirdieOrBetterCount: new FormControl<number | null | undefined>(undefined),
			Country: new FormControl<string | null | undefined>(undefined),
			DoubleBogeys: new FormControl<number | null | undefined>(undefined),
			DoubleEagles: new FormControl<number | null | undefined>(undefined),
			DraftKingsSalary: new FormControl<number | null | undefined>(undefined),
			Eagles: new FormControl<number | null | undefined>(undefined),
			Earnings: new FormControl<number | null | undefined>(undefined),
			FanDuelSalary: new FormControl<number | null | undefined>(undefined),
			FantasyDraftSalary: new FormControl<number | null | undefined>(undefined),
			FantasyPoints: new FormControl<number | null | undefined>(undefined),
			FantasyPointsDraftKings: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFanDuel: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFantasyDraft: new FormControl<number | null | undefined>(undefined),
			FantasyPointsYahoo: new FormControl<number | null | undefined>(undefined),
			FedExPoints: new FormControl<number | null | undefined>(undefined),
			HoleInOnes: new FormControl<number | null | undefined>(undefined),
			IsAlternate: new FormControl<boolean | null | undefined>(undefined),
			IsWithdrawn: new FormControl<boolean | null | undefined>(undefined),
			MadeCut: new FormControl<number | null | undefined>(undefined),
			MadeCutDidNotFinish: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			OddsToWin: new FormControl<number | null | undefined>(undefined),
			OddsToWinDescription: new FormControl<string | null | undefined>(undefined),
			Pars: new FormControl<number | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			PlayerTournamentID: new FormControl<number | null | undefined>(undefined),
			Rank: new FormControl<number | null | undefined>(undefined),
			RoundsUnderSeventy: new FormControl<number | null | undefined>(undefined),
			RoundsWithFiveOrMoreBirdiesOrBetter : new FormControl<number | null | undefined>(undefined),
			StreaksOfFiveBirdiesOrBetter: new FormControl<number | null | undefined>(undefined),
			StreaksOfFourBirdiesOrBetter: new FormControl<number | null | undefined>(undefined),
			StreaksOfSixBirdiesOrBetter: new FormControl<number | null | undefined>(undefined),
			StreaksOfThreeBirdiesOrBetter: new FormControl<number | null | undefined>(undefined),
			TeeTime: new FormControl<string | null | undefined>(undefined),
			TotalScore: new FormControl<number | null | undefined>(undefined),
			TotalStrokes: new FormControl<number | null | undefined>(undefined),
			TotalThrough: new FormControl<number | null | undefined>(undefined),
			TournamentID: new FormControl<number | null | undefined>(undefined),
			TournamentStatus: new FormControl<string | null | undefined>(undefined),
			TripleBogeys: new FormControl<number | null | undefined>(undefined),
			Win: new FormControl<number | null | undefined>(undefined),
			WorseThanDoubleBogey: new FormControl<number | null | undefined>(undefined),
			WorseThanTripleBogey: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Round {
		Day?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Number?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RoundID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TournamentID?: number | null;
	}
	export interface RoundFormProperties {
		Day: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Number: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RoundID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TournamentID: FormControl<number | null | undefined>,
	}
	export function CreateRoundFormGroup() {
		return new FormGroup<RoundFormProperties>({
			Day: new FormControl<string | null | undefined>(undefined),
			Number: new FormControl<number | null | undefined>(undefined),
			RoundID: new FormControl<number | null | undefined>(undefined),
			TournamentID: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Tournament {
		Canceled?: boolean | null;
		City?: string | null;
		Country?: string | null;
		Covered?: boolean | null;
		EndDate?: string | null;
		Format?: string | null;
		IsInProgress?: boolean | null;
		IsOver?: boolean | null;
		Location?: string | null;
		Name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Par?: number | null;

		/** Type: double */
		Purse?: number | null;
		Rounds?: Array<Round>;
		SportRadarTournamentID?: string | null;
		StartDate?: string | null;
		StartDateTime?: string | null;
		State?: string | null;
		TimeZone?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TournamentID?: number | null;
		Venue?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Yards?: number | null;
		ZipCode?: string | null;
	}
	export interface TournamentFormProperties {
		Canceled: FormControl<boolean | null | undefined>,
		City: FormControl<string | null | undefined>,
		Country: FormControl<string | null | undefined>,
		Covered: FormControl<boolean | null | undefined>,
		EndDate: FormControl<string | null | undefined>,
		Format: FormControl<string | null | undefined>,
		IsInProgress: FormControl<boolean | null | undefined>,
		IsOver: FormControl<boolean | null | undefined>,
		Location: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Par: FormControl<number | null | undefined>,

		/** Type: double */
		Purse: FormControl<number | null | undefined>,
		SportRadarTournamentID: FormControl<string | null | undefined>,
		StartDate: FormControl<string | null | undefined>,
		StartDateTime: FormControl<string | null | undefined>,
		State: FormControl<string | null | undefined>,
		TimeZone: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TournamentID: FormControl<number | null | undefined>,
		Venue: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Yards: FormControl<number | null | undefined>,
		ZipCode: FormControl<string | null | undefined>,
	}
	export function CreateTournamentFormGroup() {
		return new FormGroup<TournamentFormProperties>({
			Canceled: new FormControl<boolean | null | undefined>(undefined),
			City: new FormControl<string | null | undefined>(undefined),
			Country: new FormControl<string | null | undefined>(undefined),
			Covered: new FormControl<boolean | null | undefined>(undefined),
			EndDate: new FormControl<string | null | undefined>(undefined),
			Format: new FormControl<string | null | undefined>(undefined),
			IsInProgress: new FormControl<boolean | null | undefined>(undefined),
			IsOver: new FormControl<boolean | null | undefined>(undefined),
			Location: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Par: new FormControl<number | null | undefined>(undefined),
			Purse: new FormControl<number | null | undefined>(undefined),
			SportRadarTournamentID: new FormControl<string | null | undefined>(undefined),
			StartDate: new FormControl<string | null | undefined>(undefined),
			StartDateTime: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
			TimeZone: new FormControl<string | null | undefined>(undefined),
			TournamentID: new FormControl<number | null | undefined>(undefined),
			Venue: new FormControl<string | null | undefined>(undefined),
			Yards: new FormControl<number | null | undefined>(undefined),
			ZipCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * DFS Slates
		 * Get {format}/DfsSlatesByTournament/{tournamentid}
		 * @param {DfsSlatesFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} tournamentid The TournamentID of a tournament.  TournamentIDs can be found in the Tournaments API.  Valid entries are <code>58</code>, <code>61</code>, etc.
		 */
		DfsSlates(format: DfsSlatesFormat, tournamentid: string): Observable<Array<DfsSlate>> {
			return this.http.get<Array<DfsSlate>>(this.baseUri + format + '/DfsSlatesByTournament/' + (tournamentid == null ? '' : encodeURIComponent(tournamentid)) + '', {});
		}

		/**
		 * Injuries
		 * Get {format}/Injuries
		 * @param {DfsSlatesFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 */
		Injuries(format: DfsSlatesFormat): Observable<Array<Injury>> {
			return this.http.get<Array<Injury>>(this.baseUri + format + '/Injuries', {});
		}

		/**
		 * Injuries (Historical)
		 * Get {format}/InjuriesByHistorical
		 * @param {DfsSlatesFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 */
		InjuriesHistorical(format: DfsSlatesFormat): Observable<Array<Injury>> {
			return this.http.get<Array<Injury>>(this.baseUri + format + '/InjuriesByHistorical', {});
		}

		/**
		 * Leaderboard
		 * Get {format}/Leaderboard/{tournamentid}
		 * @param {DfsSlatesFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} tournamentid The TournamentID of a tournament.  TournamentIDs can be found in the Tournaments API.  Valid entries are <code>58</code>, <code>61</code>, etc.
		 */
		Leaderboard(format: DfsSlatesFormat, tournamentid: string): Observable<Leaderboard> {
			return this.http.get<Leaderboard>(this.baseUri + format + '/Leaderboard/' + (tournamentid == null ? '' : encodeURIComponent(tournamentid)) + '', {});
		}

		/**
		 * News
		 * Get {format}/News
		 * @param {DfsSlatesFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 */
		News(format: DfsSlatesFormat): Observable<Array<News>> {
			return this.http.get<Array<News>>(this.baseUri + format + '/News', {});
		}

		/**
		 * News by Date
		 * Get {format}/NewsByDate/{date}
		 * @param {DfsSlatesFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s).
		 * <br>Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>.
		 */
		NewsByDate(format: DfsSlatesFormat, date: string): Observable<Array<News>> {
			return this.http.get<Array<News>>(this.baseUri + format + '/NewsByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * News by Player
		 * Get {format}/NewsByPlayerID/{playerid}
		 * @param {DfsSlatesFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} playerid Unique FantasyData Player ID.
		 * Example:<code>40000019</code>.
		 */
		NewsByPlayer(format: DfsSlatesFormat, playerid: string): Observable<Array<News>> {
			return this.http.get<Array<News>>(this.baseUri + format + '/NewsByPlayerID/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}

		/**
		 * Player
		 * Get {format}/Player/{playerid}
		 * @param {DfsSlatesFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} playerid Unique FantasyData Player ID.
		 * Example:<code>40000019</code>.
		 */
		Player(format: DfsSlatesFormat, playerid: string): Observable<Player> {
			return this.http.get<Player>(this.baseUri + format + '/Player/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}

		/**
		 * Player Season Stats (w/ World Golf Rankings)
		 * Get {format}/PlayerSeasonStats/{season}
		 * @param {DfsSlatesFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season.
		 * <br>Examples: <code>2016</code>, <code>2017</code>.
		 */
		PlayerSeasonStatsWWorldGolfRankings(format: DfsSlatesFormat, season: string): Observable<Array<PlayerSeason>> {
			return this.http.get<Array<PlayerSeason>>(this.baseUri + format + '/PlayerSeasonStats/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * Player Tournament Projected Stats (w/ DraftKings Salaries)
		 * Get {format}/PlayerTournamentProjectionStats/{tournamentid}
		 * @param {DfsSlatesFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} tournamentid The TournamentID of a tournament.  TournamentIDs can be found in the Tournaments API.  Valid entries are <code>78</code>, <code>79</code>, <code>80</code>, etc.
		 */
		PlayerTournamentProjectedStatsWDraftkingsSalaries(format: DfsSlatesFormat, tournamentid: string): Observable<Array<PlayerTournamentProjection>> {
			return this.http.get<Array<PlayerTournamentProjection>>(this.baseUri + format + '/PlayerTournamentProjectionStats/' + (tournamentid == null ? '' : encodeURIComponent(tournamentid)) + '', {});
		}

		/**
		 * Player Tournament Stats By Player
		 * Get {format}/PlayerTournamentStatsByPlayer/{tournamentid}/{playerid}
		 * @param {DfsSlatesFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} tournamentid The TournamentID of a tournament.  TournamentIDs can be found in the Tournaments API.  Valid entries are <code>58</code>, <code>61</code>, etc.
		 * @param {string} playerid Unique FantasyData Player ID.
		 * Example:<code>40000019</code>.
		 */
		PlayerTournamentStatsByPlayer(format: DfsSlatesFormat, tournamentid: string, playerid: string): Observable<PlayerTournament> {
			return this.http.get<PlayerTournament>(this.baseUri + format + '/PlayerTournamentStatsByPlayer/' + (tournamentid == null ? '' : encodeURIComponent(tournamentid)) + '/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}

		/**
		 * Players
		 * Get {format}/Players
		 * @param {DfsSlatesFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 */
		Players(format: DfsSlatesFormat): Observable<Array<Player>> {
			return this.http.get<Array<Player>>(this.baseUri + format + '/Players', {});
		}

		/**
		 * Schedule
		 * Get {format}/Tournaments
		 * @param {DfsSlatesFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 */
		Schedule(format: DfsSlatesFormat): Observable<Array<Tournament>> {
			return this.http.get<Array<Tournament>>(this.baseUri + format + '/Tournaments', {});
		}

		/**
		 * Schedule by Season
		 * Get {format}/Tournaments/{season}
		 * @param {DfsSlatesFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season.
		 * <br>Examples: <code>2016</code>, <code>2017</code>.
		 */
		ScheduleBySeason(format: DfsSlatesFormat, season: string): Observable<Array<Tournament>> {
			return this.http.get<Array<Tournament>>(this.baseUri + format + '/Tournaments/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}
	}

	export enum DfsSlatesFormat { XML = 'XML', JSON = 'JSON' }

}

