import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface DfsSlate {
		DfsSlatePlayers?: Array<DfsSlatePlayer>;
		DfsSlateTournaments?: Array<DfsSlateTournament>;
		IsMultiDaySlate?: boolean | null;
		NumberOfTournaments?: number | null;
		Operator?: string | null;
		OperatorDay?: string | null;
		OperatorGameType?: string | null;
		OperatorName?: string | null;
		OperatorSlateID?: number | null;
		OperatorStartTime?: string | null;
		RemovedByOperator?: boolean | null;
		SalaryCap?: number | null;
		SlateID?: number | null;
		SlateRosterSlots?: Array<string>;
	}
	export interface DfsSlateFormProperties {
		IsMultiDaySlate: FormControl<boolean | null | undefined>,
		NumberOfTournaments: FormControl<number | null | undefined>,
		Operator: FormControl<string | null | undefined>,
		OperatorDay: FormControl<string | null | undefined>,
		OperatorGameType: FormControl<string | null | undefined>,
		OperatorName: FormControl<string | null | undefined>,
		OperatorSlateID: FormControl<number | null | undefined>,
		OperatorStartTime: FormControl<string | null | undefined>,
		RemovedByOperator: FormControl<boolean | null | undefined>,
		SalaryCap: FormControl<number | null | undefined>,
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
		OperatorSalary?: number | null;
		OperatorSlatePlayerID?: string | null;
		PlayerID?: number | null;
		PlayerTournamentProjectionID?: number | null;
		RemovedByOperator?: boolean | null;
		SlateID?: number | null;
		SlatePlayerID?: number | null;
		SlateTournamentID?: number | null;
	}
	export interface DfsSlatePlayerFormProperties {
		OperatorPlayerID: FormControl<string | null | undefined>,
		OperatorPlayerName: FormControl<string | null | undefined>,
		OperatorPosition: FormControl<string | null | undefined>,
		OperatorSalary: FormControl<number | null | undefined>,
		OperatorSlatePlayerID: FormControl<string | null | undefined>,
		PlayerID: FormControl<number | null | undefined>,
		PlayerTournamentProjectionID: FormControl<number | null | undefined>,
		RemovedByOperator: FormControl<boolean | null | undefined>,
		SlateID: FormControl<number | null | undefined>,
		SlatePlayerID: FormControl<number | null | undefined>,
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
		OperatorTournamentID?: number | null;
		RemovedByOperator?: boolean | null;
		SlateID?: number | null;
		SlateTournamentID?: number | null;
		Tournament?: Tournament;
		TournamentID?: number | null;
	}
	export interface DfsSlateTournamentFormProperties {
		OperatorTournamentID: FormControl<number | null | undefined>,
		RemovedByOperator: FormControl<boolean | null | undefined>,
		SlateID: FormControl<number | null | undefined>,
		SlateTournamentID: FormControl<number | null | undefined>,
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
		InjuryID?: number | null;
		Name?: string | null;
		PlayerID?: number | null;
		StartDate?: string | null;
		Status?: string | null;
	}
	export interface InjuryFormProperties {
		Active: FormControl<boolean | null | undefined>,
		BodyPart: FormControl<string | null | undefined>,
		ExpectedReturn: FormControl<string | null | undefined>,
		InjuryID: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
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
		Birdies?: number | null;
		BogeyFreeRounds?: number | null;
		Bogeys?: number | null;
		BounceBackCount?: number | null;
		ConsecutiveBirdieOrBetterCount?: number | null;
		Country?: string | null;
		DoubleBogeys?: number | null;
		DoubleEagles?: number | null;
		DraftKingsSalary?: number | null;
		Eagles?: number | null;
		Earnings?: number | null;
		FanDuelSalary?: number | null;
		FantasyDraftSalary?: number | null;
		FantasyPoints?: number | null;
		FantasyPointsDraftKings?: number | null;
		FantasyPointsFanDuel?: number | null;
		FantasyPointsFantasyDraft?: number | null;
		FantasyPointsYahoo?: number | null;
		FedExPoints?: number | null;
		HoleInOnes?: number | null;
		IsAlternate?: boolean | null;
		IsWithdrawn?: boolean | null;
		MadeCut?: number | null;
		MadeCutDidNotFinish?: boolean | null;
		Name?: string | null;
		OddsToWin?: number | null;
		OddsToWinDescription?: string | null;
		Pars?: number | null;
		PlayerID?: number | null;
		PlayerTournamentID?: number | null;
		Rank?: number | null;
		Rounds?: Array<PlayerRound>;
		RoundsUnderSeventy?: number | null;
		RoundsWithFiveOrMoreBirdiesOrBetter ?: number | null;
		StreaksOfFiveBirdiesOrBetter?: number | null;
		StreaksOfFourBirdiesOrBetter?: number | null;
		StreaksOfSixBirdiesOrBetter?: number | null;
		StreaksOfThreeBirdiesOrBetter?: number | null;
		TeeTime?: string | null;
		TotalScore?: number | null;
		TotalStrokes?: number | null;
		TotalThrough?: number | null;
		TournamentID?: number | null;
		TournamentStatus?: string | null;
		TripleBogeys?: number | null;
		Win?: number | null;
		WorseThanDoubleBogey?: number | null;
		WorseThanTripleBogey?: number | null;
	}
	export interface PlayerTournamentFormProperties {
		Birdies: FormControl<number | null | undefined>,
		BogeyFreeRounds: FormControl<number | null | undefined>,
		Bogeys: FormControl<number | null | undefined>,
		BounceBackCount: FormControl<number | null | undefined>,
		ConsecutiveBirdieOrBetterCount: FormControl<number | null | undefined>,
		Country: FormControl<string | null | undefined>,
		DoubleBogeys: FormControl<number | null | undefined>,
		DoubleEagles: FormControl<number | null | undefined>,
		DraftKingsSalary: FormControl<number | null | undefined>,
		Eagles: FormControl<number | null | undefined>,
		Earnings: FormControl<number | null | undefined>,
		FanDuelSalary: FormControl<number | null | undefined>,
		FantasyDraftSalary: FormControl<number | null | undefined>,
		FantasyPoints: FormControl<number | null | undefined>,
		FantasyPointsDraftKings: FormControl<number | null | undefined>,
		FantasyPointsFanDuel: FormControl<number | null | undefined>,
		FantasyPointsFantasyDraft: FormControl<number | null | undefined>,
		FantasyPointsYahoo: FormControl<number | null | undefined>,
		FedExPoints: FormControl<number | null | undefined>,
		HoleInOnes: FormControl<number | null | undefined>,
		IsAlternate: FormControl<boolean | null | undefined>,
		IsWithdrawn: FormControl<boolean | null | undefined>,
		MadeCut: FormControl<number | null | undefined>,
		MadeCutDidNotFinish: FormControl<boolean | null | undefined>,
		Name: FormControl<string | null | undefined>,
		OddsToWin: FormControl<number | null | undefined>,
		OddsToWinDescription: FormControl<string | null | undefined>,
		Pars: FormControl<number | null | undefined>,
		PlayerID: FormControl<number | null | undefined>,
		PlayerTournamentID: FormControl<number | null | undefined>,
		Rank: FormControl<number | null | undefined>,
		RoundsUnderSeventy: FormControl<number | null | undefined>,
		RoundsWithFiveOrMoreBirdiesOrBetter : FormControl<number | null | undefined>,
		StreaksOfFiveBirdiesOrBetter: FormControl<number | null | undefined>,
		StreaksOfFourBirdiesOrBetter: FormControl<number | null | undefined>,
		StreaksOfSixBirdiesOrBetter: FormControl<number | null | undefined>,
		StreaksOfThreeBirdiesOrBetter: FormControl<number | null | undefined>,
		TeeTime: FormControl<string | null | undefined>,
		TotalScore: FormControl<number | null | undefined>,
		TotalStrokes: FormControl<number | null | undefined>,
		TotalThrough: FormControl<number | null | undefined>,
		TournamentID: FormControl<number | null | undefined>,
		TournamentStatus: FormControl<string | null | undefined>,
		TripleBogeys: FormControl<number | null | undefined>,
		Win: FormControl<number | null | undefined>,
		WorseThanDoubleBogey: FormControl<number | null | undefined>,
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
		Birdies?: number | null;
		BogeyFree?: boolean | null;
		Bogeys?: number | null;
		BounceBackCount?: number | null;
		ConsecutiveBirdieOrBetterCount?: number | null;
		Day?: string | null;
		DoubleBogeys?: number | null;
		DoubleEagles?: number | null;
		Eagles?: number | null;
		HoleInOnes?: number | null;
		Holes?: Array<PlayerHole>;
		IncludesFiveOrMoreBirdiesOrBetter?: boolean | null;
		IncludesStreakOfFiveBirdiesOrBetter?: boolean | null;
		IncludesStreakOfFourBirdiesOrBetter?: boolean | null;
		IncludesStreakOfSixBirdiesOrBetter?: boolean | null;
		IncludesStreakOfThreeBirdiesOrBetter?: boolean | null;
		LongestBirdieOrBetterStreak?: number | null;
		Number?: number | null;
		Par?: number | null;
		Pars?: number | null;
		PlayerRoundID?: number | null;
		PlayerTournamentID?: number | null;
		Score?: number | null;
		TripleBogeys?: number | null;
		WorseThanDoubleBogey?: number | null;
		WorseThanTripleBogey?: number | null;
	}
	export interface PlayerRoundFormProperties {
		Birdies: FormControl<number | null | undefined>,
		BogeyFree: FormControl<boolean | null | undefined>,
		Bogeys: FormControl<number | null | undefined>,
		BounceBackCount: FormControl<number | null | undefined>,
		ConsecutiveBirdieOrBetterCount: FormControl<number | null | undefined>,
		Day: FormControl<string | null | undefined>,
		DoubleBogeys: FormControl<number | null | undefined>,
		DoubleEagles: FormControl<number | null | undefined>,
		Eagles: FormControl<number | null | undefined>,
		HoleInOnes: FormControl<number | null | undefined>,
		IncludesFiveOrMoreBirdiesOrBetter: FormControl<boolean | null | undefined>,
		IncludesStreakOfFiveBirdiesOrBetter: FormControl<boolean | null | undefined>,
		IncludesStreakOfFourBirdiesOrBetter: FormControl<boolean | null | undefined>,
		IncludesStreakOfSixBirdiesOrBetter: FormControl<boolean | null | undefined>,
		IncludesStreakOfThreeBirdiesOrBetter: FormControl<boolean | null | undefined>,
		LongestBirdieOrBetterStreak: FormControl<number | null | undefined>,
		Number: FormControl<number | null | undefined>,
		Par: FormControl<number | null | undefined>,
		Pars: FormControl<number | null | undefined>,
		PlayerRoundID: FormControl<number | null | undefined>,
		PlayerTournamentID: FormControl<number | null | undefined>,
		Score: FormControl<number | null | undefined>,
		TripleBogeys: FormControl<number | null | undefined>,
		WorseThanDoubleBogey: FormControl<number | null | undefined>,
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
		Number?: number | null;
		Par?: number | null;
		PlayerRoundID?: number | null;
		Score?: number | null;
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
		Number: FormControl<number | null | undefined>,
		Par: FormControl<number | null | undefined>,
		PlayerRoundID: FormControl<number | null | undefined>,
		Score: FormControl<number | null | undefined>,
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
		NewsID?: number | null;
		PlayerID?: number | null;
		Source?: string | null;
		TermsOfUse?: string | null;
		Title?: string | null;
		Updated?: string | null;
		Url?: string | null;
	}
	export interface NewsFormProperties {
		Content: FormControl<string | null | undefined>,
		NewsID: FormControl<number | null | undefined>,
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
		DraftKingsPlayerID?: number | null;
		FanDuelName?: string | null;
		FanDuelPlayerID?: number | null;
		FantasyAlarmPlayerID?: number | null;
		FantasyDraftName?: string | null;
		FantasyDraftPlayerID?: number | null;
		FirstName?: string | null;
		LastName?: string | null;
		PgaDebut?: number | null;
		PgaTourPlayerID?: number | null;
		PhotoUrl?: string | null;
		PlayerID?: number | null;
		RotoWirePlayerID?: number | null;
		RotoworldPlayerID?: number | null;
		SportRadarPlayerID?: string | null;
		Swings?: string | null;
		Weight?: number | null;
		YahooPlayerID?: number | null;
	}
	export interface PlayerFormProperties {
		BirthCity: FormControl<string | null | undefined>,
		BirthDate: FormControl<string | null | undefined>,
		BirthState: FormControl<string | null | undefined>,
		College: FormControl<string | null | undefined>,
		Country: FormControl<string | null | undefined>,
		DraftKingsName: FormControl<string | null | undefined>,
		DraftKingsPlayerID: FormControl<number | null | undefined>,
		FanDuelName: FormControl<string | null | undefined>,
		FanDuelPlayerID: FormControl<number | null | undefined>,
		FantasyAlarmPlayerID: FormControl<number | null | undefined>,
		FantasyDraftName: FormControl<string | null | undefined>,
		FantasyDraftPlayerID: FormControl<number | null | undefined>,
		FirstName: FormControl<string | null | undefined>,
		LastName: FormControl<string | null | undefined>,
		PgaDebut: FormControl<number | null | undefined>,
		PgaTourPlayerID: FormControl<number | null | undefined>,
		PhotoUrl: FormControl<string | null | undefined>,
		PlayerID: FormControl<number | null | undefined>,
		RotoWirePlayerID: FormControl<number | null | undefined>,
		RotoworldPlayerID: FormControl<number | null | undefined>,
		SportRadarPlayerID: FormControl<string | null | undefined>,
		Swings: FormControl<string | null | undefined>,
		Weight: FormControl<number | null | undefined>,
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
		AveragePoints?: number | null;
		Events?: number | null;
		Name?: string | null;
		PlayerID?: number | null;
		PlayerSeasonID?: number | null;
		PointsGained?: number | null;
		PointsLost?: number | null;
		Season?: number | null;
		TotalPoints?: number | null;
		WorldGolfRank?: number | null;
		WorldGolfRankLastWeek?: number | null;
	}
	export interface PlayerSeasonFormProperties {
		AveragePoints: FormControl<number | null | undefined>,
		Events: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PlayerID: FormControl<number | null | undefined>,
		PlayerSeasonID: FormControl<number | null | undefined>,
		PointsGained: FormControl<number | null | undefined>,
		PointsLost: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		TotalPoints: FormControl<number | null | undefined>,
		WorldGolfRank: FormControl<number | null | undefined>,
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
		Birdies?: number | null;
		BogeyFreeRounds?: number | null;
		Bogeys?: number | null;
		BounceBackCount?: number | null;
		ConsecutiveBirdieOrBetterCount?: number | null;
		Country?: string | null;
		DoubleBogeys?: number | null;
		DoubleEagles?: number | null;
		DraftKingsSalary?: number | null;
		Eagles?: number | null;
		Earnings?: number | null;
		FanDuelSalary?: number | null;
		FantasyDraftSalary?: number | null;
		FantasyPoints?: number | null;
		FantasyPointsDraftKings?: number | null;
		FantasyPointsFanDuel?: number | null;
		FantasyPointsFantasyDraft?: number | null;
		FantasyPointsYahoo?: number | null;
		FedExPoints?: number | null;
		HoleInOnes?: number | null;
		IsAlternate?: boolean | null;
		IsWithdrawn?: boolean | null;
		MadeCut?: number | null;
		MadeCutDidNotFinish?: boolean | null;
		Name?: string | null;
		OddsToWin?: number | null;
		OddsToWinDescription?: string | null;
		Pars?: number | null;
		PlayerID?: number | null;
		PlayerTournamentID?: number | null;
		Rank?: number | null;
		Rounds?: Array<PlayerRound>;
		RoundsUnderSeventy?: number | null;
		RoundsWithFiveOrMoreBirdiesOrBetter ?: number | null;
		StreaksOfFiveBirdiesOrBetter?: number | null;
		StreaksOfFourBirdiesOrBetter?: number | null;
		StreaksOfSixBirdiesOrBetter?: number | null;
		StreaksOfThreeBirdiesOrBetter?: number | null;
		TeeTime?: string | null;
		TotalScore?: number | null;
		TotalStrokes?: number | null;
		TotalThrough?: number | null;
		TournamentID?: number | null;
		TournamentStatus?: string | null;
		TripleBogeys?: number | null;
		Win?: number | null;
		WorseThanDoubleBogey?: number | null;
		WorseThanTripleBogey?: number | null;
	}
	export interface PlayerTournamentProjectionFormProperties {
		Birdies: FormControl<number | null | undefined>,
		BogeyFreeRounds: FormControl<number | null | undefined>,
		Bogeys: FormControl<number | null | undefined>,
		BounceBackCount: FormControl<number | null | undefined>,
		ConsecutiveBirdieOrBetterCount: FormControl<number | null | undefined>,
		Country: FormControl<string | null | undefined>,
		DoubleBogeys: FormControl<number | null | undefined>,
		DoubleEagles: FormControl<number | null | undefined>,
		DraftKingsSalary: FormControl<number | null | undefined>,
		Eagles: FormControl<number | null | undefined>,
		Earnings: FormControl<number | null | undefined>,
		FanDuelSalary: FormControl<number | null | undefined>,
		FantasyDraftSalary: FormControl<number | null | undefined>,
		FantasyPoints: FormControl<number | null | undefined>,
		FantasyPointsDraftKings: FormControl<number | null | undefined>,
		FantasyPointsFanDuel: FormControl<number | null | undefined>,
		FantasyPointsFantasyDraft: FormControl<number | null | undefined>,
		FantasyPointsYahoo: FormControl<number | null | undefined>,
		FedExPoints: FormControl<number | null | undefined>,
		HoleInOnes: FormControl<number | null | undefined>,
		IsAlternate: FormControl<boolean | null | undefined>,
		IsWithdrawn: FormControl<boolean | null | undefined>,
		MadeCut: FormControl<number | null | undefined>,
		MadeCutDidNotFinish: FormControl<boolean | null | undefined>,
		Name: FormControl<string | null | undefined>,
		OddsToWin: FormControl<number | null | undefined>,
		OddsToWinDescription: FormControl<string | null | undefined>,
		Pars: FormControl<number | null | undefined>,
		PlayerID: FormControl<number | null | undefined>,
		PlayerTournamentID: FormControl<number | null | undefined>,
		Rank: FormControl<number | null | undefined>,
		RoundsUnderSeventy: FormControl<number | null | undefined>,
		RoundsWithFiveOrMoreBirdiesOrBetter : FormControl<number | null | undefined>,
		StreaksOfFiveBirdiesOrBetter: FormControl<number | null | undefined>,
		StreaksOfFourBirdiesOrBetter: FormControl<number | null | undefined>,
		StreaksOfSixBirdiesOrBetter: FormControl<number | null | undefined>,
		StreaksOfThreeBirdiesOrBetter: FormControl<number | null | undefined>,
		TeeTime: FormControl<string | null | undefined>,
		TotalScore: FormControl<number | null | undefined>,
		TotalStrokes: FormControl<number | null | undefined>,
		TotalThrough: FormControl<number | null | undefined>,
		TournamentID: FormControl<number | null | undefined>,
		TournamentStatus: FormControl<string | null | undefined>,
		TripleBogeys: FormControl<number | null | undefined>,
		Win: FormControl<number | null | undefined>,
		WorseThanDoubleBogey: FormControl<number | null | undefined>,
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
		Number?: number | null;
		RoundID?: number | null;
		TournamentID?: number | null;
	}
	export interface RoundFormProperties {
		Day: FormControl<string | null | undefined>,
		Number: FormControl<number | null | undefined>,
		RoundID: FormControl<number | null | undefined>,
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
		Par?: number | null;
		Purse?: number | null;
		Rounds?: Array<Round>;
		SportRadarTournamentID?: string | null;
		StartDate?: string | null;
		StartDateTime?: string | null;
		State?: string | null;
		TimeZone?: string | null;
		TournamentID?: number | null;
		Venue?: string | null;
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
		Par: FormControl<number | null | undefined>,
		Purse: FormControl<number | null | undefined>,
		SportRadarTournamentID: FormControl<string | null | undefined>,
		StartDate: FormControl<string | null | undefined>,
		StartDateTime: FormControl<string | null | undefined>,
		State: FormControl<string | null | undefined>,
		TimeZone: FormControl<string | null | undefined>,
		TournamentID: FormControl<number | null | undefined>,
		Venue: FormControl<string | null | undefined>,
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
		 * @return {Array<DfsSlate>} 
		 */
		DfsSlates(format: DfsSlatesFormat, tournamentid: string): Observable<Array<DfsSlate>> {
			return this.http.get<Array<DfsSlate>>(this.baseUri + format + '/DfsSlatesByTournament/' + (tournamentid == null ? '' : encodeURIComponent(tournamentid)) + '', {});
		}

		/**
		 * Injuries
		 * Get {format}/Injuries
		 * @param {DfsSlatesFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<Injury>} 
		 */
		Injuries(format: DfsSlatesFormat): Observable<Array<Injury>> {
			return this.http.get<Array<Injury>>(this.baseUri + format + '/Injuries', {});
		}

		/**
		 * Injuries (Historical)
		 * Get {format}/InjuriesByHistorical
		 * @param {DfsSlatesFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<Injury>} 
		 */
		InjuriesHistorical(format: DfsSlatesFormat): Observable<Array<Injury>> {
			return this.http.get<Array<Injury>>(this.baseUri + format + '/InjuriesByHistorical', {});
		}

		/**
		 * Leaderboard
		 * Get {format}/Leaderboard/{tournamentid}
		 * @param {DfsSlatesFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} tournamentid The TournamentID of a tournament.  TournamentIDs can be found in the Tournaments API.  Valid entries are <code>58</code>, <code>61</code>, etc.
		 * @return {Leaderboard} 
		 */
		Leaderboard(format: DfsSlatesFormat, tournamentid: string): Observable<Leaderboard> {
			return this.http.get<Leaderboard>(this.baseUri + format + '/Leaderboard/' + (tournamentid == null ? '' : encodeURIComponent(tournamentid)) + '', {});
		}

		/**
		 * News
		 * Get {format}/News
		 * @param {DfsSlatesFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<News>} 
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
		 * @return {Array<News>} 
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
		 * @return {Array<News>} 
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
		 * @return {Player} 
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
		 * @return {Array<PlayerSeason>} 
		 */
		PlayerSeasonStatsWWorldGolfRankings(format: DfsSlatesFormat, season: string): Observable<Array<PlayerSeason>> {
			return this.http.get<Array<PlayerSeason>>(this.baseUri + format + '/PlayerSeasonStats/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * Player Tournament Projected Stats (w/ DraftKings Salaries)
		 * Get {format}/PlayerTournamentProjectionStats/{tournamentid}
		 * @param {DfsSlatesFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} tournamentid The TournamentID of a tournament.  TournamentIDs can be found in the Tournaments API.  Valid entries are <code>78</code>, <code>79</code>, <code>80</code>, etc.
		 * @return {Array<PlayerTournamentProjection>} 
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
		 * @return {PlayerTournament} 
		 */
		PlayerTournamentStatsByPlayer(format: DfsSlatesFormat, tournamentid: string, playerid: string): Observable<PlayerTournament> {
			return this.http.get<PlayerTournament>(this.baseUri + format + '/PlayerTournamentStatsByPlayer/' + (tournamentid == null ? '' : encodeURIComponent(tournamentid)) + '/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}

		/**
		 * Players
		 * Get {format}/Players
		 * @param {DfsSlatesFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<Player>} 
		 */
		Players(format: DfsSlatesFormat): Observable<Array<Player>> {
			return this.http.get<Array<Player>>(this.baseUri + format + '/Players', {});
		}

		/**
		 * Schedule
		 * Get {format}/Tournaments
		 * @param {DfsSlatesFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<Tournament>} 
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
		 * @return {Array<Tournament>} 
		 */
		ScheduleBySeason(format: DfsSlatesFormat, season: string): Observable<Array<Tournament>> {
			return this.http.get<Array<Tournament>>(this.baseUri + format + '/Tournaments/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}
	}

	export enum DfsSlatesFormat { XML = 'XML', JSON = 'JSON' }

}

