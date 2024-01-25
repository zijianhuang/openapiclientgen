import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Area {
		AreaId?: number | null;
		Competitions?: Array<Competition>;
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

	export interface Competition {
		AreaId?: number | null;
		AreaName?: string | null;
		CompetitionId?: number | null;
		Format?: string | null;
		Gender?: string | null;
		Key?: string | null;
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
		Key: FormControl<string | null | undefined>,
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
			Key: new FormControl<string | null | undefined>(undefined),
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
		Key?: string | null;
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
		Key: FormControl<string | null | undefined>,
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
			Key: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Game {
		Attendance?: number | null;
		AwayTeamCountryCode?: string | null;
		AwayTeamId?: number | null;
		AwayTeamKey?: string | null;
		AwayTeamMoneyLine?: number | null;
		AwayTeamName?: string | null;
		AwayTeamPointSpreadPayout?: number | null;
		AwayTeamScore?: number | null;
		AwayTeamScoreExtraTime?: number | null;
		AwayTeamScorePenalty?: number | null;
		AwayTeamScorePeriod1?: number | null;
		AwayTeamScorePeriod2?: number | null;
		Clock?: number | null;
		ClockDisplay?: string | null;
		ClockExtra?: number | null;
		DateTime?: string | null;
		Day?: string | null;
		DrawMoneyLine?: number | null;
		GameId?: number | null;
		GlobalAwayTeamId?: number | null;
		GlobalGameId?: number | null;
		GlobalHomeTeamId?: number | null;
		Group?: string | null;
		HomeTeamCountryCode?: string | null;
		HomeTeamId?: number | null;
		HomeTeamKey?: string | null;
		HomeTeamMoneyLine?: number | null;
		HomeTeamName?: string | null;
		HomeTeamPointSpreadPayout?: number | null;
		HomeTeamScore?: number | null;
		HomeTeamScoreExtraTime?: number | null;
		HomeTeamScorePenalty?: number | null;
		HomeTeamScorePeriod1?: number | null;
		HomeTeamScorePeriod2?: number | null;
		IsClosed?: boolean | null;
		OverPayout?: number | null;
		OverUnder?: number | null;
		Period?: string | null;
		PointSpread?: number | null;
		RoundId?: number | null;
		Season?: number | null;
		SeasonType?: number | null;
		Status?: string | null;
		UnderPayout?: number | null;
		Updated?: string | null;
		UpdatedUtc?: string | null;
		VenueId?: number | null;
		VenueType?: string | null;
		Week?: number | null;
		Winner?: string | null;
	}
	export interface GameFormProperties {
		Attendance: FormControl<number | null | undefined>,
		AwayTeamCountryCode: FormControl<string | null | undefined>,
		AwayTeamId: FormControl<number | null | undefined>,
		AwayTeamKey: FormControl<string | null | undefined>,
		AwayTeamMoneyLine: FormControl<number | null | undefined>,
		AwayTeamName: FormControl<string | null | undefined>,
		AwayTeamPointSpreadPayout: FormControl<number | null | undefined>,
		AwayTeamScore: FormControl<number | null | undefined>,
		AwayTeamScoreExtraTime: FormControl<number | null | undefined>,
		AwayTeamScorePenalty: FormControl<number | null | undefined>,
		AwayTeamScorePeriod1: FormControl<number | null | undefined>,
		AwayTeamScorePeriod2: FormControl<number | null | undefined>,
		Clock: FormControl<number | null | undefined>,
		ClockDisplay: FormControl<string | null | undefined>,
		ClockExtra: FormControl<number | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,
		DrawMoneyLine: FormControl<number | null | undefined>,
		GameId: FormControl<number | null | undefined>,
		GlobalAwayTeamId: FormControl<number | null | undefined>,
		GlobalGameId: FormControl<number | null | undefined>,
		GlobalHomeTeamId: FormControl<number | null | undefined>,
		Group: FormControl<string | null | undefined>,
		HomeTeamCountryCode: FormControl<string | null | undefined>,
		HomeTeamId: FormControl<number | null | undefined>,
		HomeTeamKey: FormControl<string | null | undefined>,
		HomeTeamMoneyLine: FormControl<number | null | undefined>,
		HomeTeamName: FormControl<string | null | undefined>,
		HomeTeamPointSpreadPayout: FormControl<number | null | undefined>,
		HomeTeamScore: FormControl<number | null | undefined>,
		HomeTeamScoreExtraTime: FormControl<number | null | undefined>,
		HomeTeamScorePenalty: FormControl<number | null | undefined>,
		HomeTeamScorePeriod1: FormControl<number | null | undefined>,
		HomeTeamScorePeriod2: FormControl<number | null | undefined>,
		IsClosed: FormControl<boolean | null | undefined>,
		OverPayout: FormControl<number | null | undefined>,
		OverUnder: FormControl<number | null | undefined>,
		Period: FormControl<string | null | undefined>,
		PointSpread: FormControl<number | null | undefined>,
		RoundId: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,
		UnderPayout: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
		UpdatedUtc: FormControl<string | null | undefined>,
		VenueId: FormControl<number | null | undefined>,
		VenueType: FormControl<string | null | undefined>,
		Week: FormControl<number | null | undefined>,
		Winner: FormControl<string | null | undefined>,
	}
	export function CreateGameFormGroup() {
		return new FormGroup<GameFormProperties>({
			Attendance: new FormControl<number | null | undefined>(undefined),
			AwayTeamCountryCode: new FormControl<string | null | undefined>(undefined),
			AwayTeamId: new FormControl<number | null | undefined>(undefined),
			AwayTeamKey: new FormControl<string | null | undefined>(undefined),
			AwayTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			AwayTeamName: new FormControl<string | null | undefined>(undefined),
			AwayTeamPointSpreadPayout: new FormControl<number | null | undefined>(undefined),
			AwayTeamScore: new FormControl<number | null | undefined>(undefined),
			AwayTeamScoreExtraTime: new FormControl<number | null | undefined>(undefined),
			AwayTeamScorePenalty: new FormControl<number | null | undefined>(undefined),
			AwayTeamScorePeriod1: new FormControl<number | null | undefined>(undefined),
			AwayTeamScorePeriod2: new FormControl<number | null | undefined>(undefined),
			Clock: new FormControl<number | null | undefined>(undefined),
			ClockDisplay: new FormControl<string | null | undefined>(undefined),
			ClockExtra: new FormControl<number | null | undefined>(undefined),
			DateTime: new FormControl<string | null | undefined>(undefined),
			Day: new FormControl<string | null | undefined>(undefined),
			DrawMoneyLine: new FormControl<number | null | undefined>(undefined),
			GameId: new FormControl<number | null | undefined>(undefined),
			GlobalAwayTeamId: new FormControl<number | null | undefined>(undefined),
			GlobalGameId: new FormControl<number | null | undefined>(undefined),
			GlobalHomeTeamId: new FormControl<number | null | undefined>(undefined),
			Group: new FormControl<string | null | undefined>(undefined),
			HomeTeamCountryCode: new FormControl<string | null | undefined>(undefined),
			HomeTeamId: new FormControl<number | null | undefined>(undefined),
			HomeTeamKey: new FormControl<string | null | undefined>(undefined),
			HomeTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			HomeTeamName: new FormControl<string | null | undefined>(undefined),
			HomeTeamPointSpreadPayout: new FormControl<number | null | undefined>(undefined),
			HomeTeamScore: new FormControl<number | null | undefined>(undefined),
			HomeTeamScoreExtraTime: new FormControl<number | null | undefined>(undefined),
			HomeTeamScorePenalty: new FormControl<number | null | undefined>(undefined),
			HomeTeamScorePeriod1: new FormControl<number | null | undefined>(undefined),
			HomeTeamScorePeriod2: new FormControl<number | null | undefined>(undefined),
			IsClosed: new FormControl<boolean | null | undefined>(undefined),
			OverPayout: new FormControl<number | null | undefined>(undefined),
			OverUnder: new FormControl<number | null | undefined>(undefined),
			Period: new FormControl<string | null | undefined>(undefined),
			PointSpread: new FormControl<number | null | undefined>(undefined),
			RoundId: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			UnderPayout: new FormControl<number | null | undefined>(undefined),
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
		Address?: string | null;
		AreaId?: number | null;
		AreaName?: string | null;
		City?: string | null;
		ClubColor1?: string | null;
		ClubColor2?: string | null;
		ClubColor3?: string | null;
		Email?: string | null;
		Fax?: string | null;
		Founded?: number | null;
		FullName?: string | null;
		Gender?: string | null;
		GlobalTeamId?: number | null;
		Name?: string | null;
		Nickname1?: string | null;
		Nickname2?: string | null;
		Nickname3?: string | null;
		Phone?: string | null;
		Players?: Array<Player>;
		TeamId?: number | null;
		Type?: string | null;
		VenueId?: number | null;
		VenueName?: string | null;
		Website?: string | null;
		WikipediaLogoUrl?: string | null;
		WikipediaWordMarkUrl?: string | null;
		Zip?: string | null;
		'[Key]'?: string | null;
	}
	export interface TeamDetailFormProperties {
		Active: FormControl<boolean | null | undefined>,
		Address: FormControl<string | null | undefined>,
		AreaId: FormControl<number | null | undefined>,
		AreaName: FormControl<string | null | undefined>,
		City: FormControl<string | null | undefined>,
		ClubColor1: FormControl<string | null | undefined>,
		ClubColor2: FormControl<string | null | undefined>,
		ClubColor3: FormControl<string | null | undefined>,
		Email: FormControl<string | null | undefined>,
		Fax: FormControl<string | null | undefined>,
		Founded: FormControl<number | null | undefined>,
		FullName: FormControl<string | null | undefined>,
		Gender: FormControl<string | null | undefined>,
		GlobalTeamId: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Nickname1: FormControl<string | null | undefined>,
		Nickname2: FormControl<string | null | undefined>,
		Nickname3: FormControl<string | null | undefined>,
		Phone: FormControl<string | null | undefined>,
		TeamId: FormControl<number | null | undefined>,
		Type: FormControl<string | null | undefined>,
		VenueId: FormControl<number | null | undefined>,
		VenueName: FormControl<string | null | undefined>,
		Website: FormControl<string | null | undefined>,
		WikipediaLogoUrl: FormControl<string | null | undefined>,
		WikipediaWordMarkUrl: FormControl<string | null | undefined>,
		Zip: FormControl<string | null | undefined>,
		'[Key]': FormControl<string | null | undefined>,
	}
	export function CreateTeamDetailFormGroup() {
		return new FormGroup<TeamDetailFormProperties>({
			Active: new FormControl<boolean | null | undefined>(undefined),
			Address: new FormControl<string | null | undefined>(undefined),
			AreaId: new FormControl<number | null | undefined>(undefined),
			AreaName: new FormControl<string | null | undefined>(undefined),
			City: new FormControl<string | null | undefined>(undefined),
			ClubColor1: new FormControl<string | null | undefined>(undefined),
			ClubColor2: new FormControl<string | null | undefined>(undefined),
			ClubColor3: new FormControl<string | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			Fax: new FormControl<string | null | undefined>(undefined),
			Founded: new FormControl<number | null | undefined>(undefined),
			FullName: new FormControl<string | null | undefined>(undefined),
			Gender: new FormControl<string | null | undefined>(undefined),
			GlobalTeamId: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Nickname1: new FormControl<string | null | undefined>(undefined),
			Nickname2: new FormControl<string | null | undefined>(undefined),
			Nickname3: new FormControl<string | null | undefined>(undefined),
			Phone: new FormControl<string | null | undefined>(undefined),
			TeamId: new FormControl<number | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			VenueId: new FormControl<number | null | undefined>(undefined),
			VenueName: new FormControl<string | null | undefined>(undefined),
			Website: new FormControl<string | null | undefined>(undefined),
			WikipediaLogoUrl: new FormControl<string | null | undefined>(undefined),
			WikipediaWordMarkUrl: new FormControl<string | null | undefined>(undefined),
			Zip: new FormControl<string | null | undefined>(undefined),
			'[Key]': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Player {
		BirthCity?: string | null;
		BirthCountry?: string | null;
		BirthDate?: string | null;
		CommonName?: string | null;
		DraftKingsPosition?: string | null;
		FirstName?: string | null;
		Foot?: string | null;
		Gender?: string | null;
		Height?: number | null;
		InjuryBodyPart?: string | null;
		InjuryNotes?: string | null;
		InjuryStartDate?: string | null;
		InjuryStatus?: string | null;
		Jersey?: number | null;
		LastName?: string | null;
		Nationality?: string | null;
		PhotoUrl?: string | null;
		PlayerId?: number | null;
		Position?: string | null;
		PositionCategory?: string | null;
		RotoWirePlayerID?: number | null;
		ShortName?: string | null;
		Updated?: string | null;
		UsaTodayHeadshotNoBackgroundUpdated?: string | null;
		UsaTodayHeadshotNoBackgroundUrl?: string | null;
		UsaTodayHeadshotUpdated?: string | null;
		UsaTodayHeadshotUrl?: string | null;
		UsaTodayPlayerID?: number | null;
		Weight?: number | null;
	}
	export interface PlayerFormProperties {
		BirthCity: FormControl<string | null | undefined>,
		BirthCountry: FormControl<string | null | undefined>,
		BirthDate: FormControl<string | null | undefined>,
		CommonName: FormControl<string | null | undefined>,
		DraftKingsPosition: FormControl<string | null | undefined>,
		FirstName: FormControl<string | null | undefined>,
		Foot: FormControl<string | null | undefined>,
		Gender: FormControl<string | null | undefined>,
		Height: FormControl<number | null | undefined>,
		InjuryBodyPart: FormControl<string | null | undefined>,
		InjuryNotes: FormControl<string | null | undefined>,
		InjuryStartDate: FormControl<string | null | undefined>,
		InjuryStatus: FormControl<string | null | undefined>,
		Jersey: FormControl<number | null | undefined>,
		LastName: FormControl<string | null | undefined>,
		Nationality: FormControl<string | null | undefined>,
		PhotoUrl: FormControl<string | null | undefined>,
		PlayerId: FormControl<number | null | undefined>,
		Position: FormControl<string | null | undefined>,
		PositionCategory: FormControl<string | null | undefined>,
		RotoWirePlayerID: FormControl<number | null | undefined>,
		ShortName: FormControl<string | null | undefined>,
		Updated: FormControl<string | null | undefined>,
		UsaTodayHeadshotNoBackgroundUpdated: FormControl<string | null | undefined>,
		UsaTodayHeadshotNoBackgroundUrl: FormControl<string | null | undefined>,
		UsaTodayHeadshotUpdated: FormControl<string | null | undefined>,
		UsaTodayHeadshotUrl: FormControl<string | null | undefined>,
		UsaTodayPlayerID: FormControl<number | null | undefined>,
		Weight: FormControl<number | null | undefined>,
	}
	export function CreatePlayerFormGroup() {
		return new FormGroup<PlayerFormProperties>({
			BirthCity: new FormControl<string | null | undefined>(undefined),
			BirthCountry: new FormControl<string | null | undefined>(undefined),
			BirthDate: new FormControl<string | null | undefined>(undefined),
			CommonName: new FormControl<string | null | undefined>(undefined),
			DraftKingsPosition: new FormControl<string | null | undefined>(undefined),
			FirstName: new FormControl<string | null | undefined>(undefined),
			Foot: new FormControl<string | null | undefined>(undefined),
			Gender: new FormControl<string | null | undefined>(undefined),
			Height: new FormControl<number | null | undefined>(undefined),
			InjuryBodyPart: new FormControl<string | null | undefined>(undefined),
			InjuryNotes: new FormControl<string | null | undefined>(undefined),
			InjuryStartDate: new FormControl<string | null | undefined>(undefined),
			InjuryStatus: new FormControl<string | null | undefined>(undefined),
			Jersey: new FormControl<number | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
			Nationality: new FormControl<string | null | undefined>(undefined),
			PhotoUrl: new FormControl<string | null | undefined>(undefined),
			PlayerId: new FormControl<number | null | undefined>(undefined),
			Position: new FormControl<string | null | undefined>(undefined),
			PositionCategory: new FormControl<string | null | undefined>(undefined),
			RotoWirePlayerID: new FormControl<number | null | undefined>(undefined),
			ShortName: new FormControl<string | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
			UsaTodayHeadshotNoBackgroundUpdated: new FormControl<string | null | undefined>(undefined),
			UsaTodayHeadshotNoBackgroundUrl: new FormControl<string | null | undefined>(undefined),
			UsaTodayHeadshotUpdated: new FormControl<string | null | undefined>(undefined),
			UsaTodayHeadshotUrl: new FormControl<string | null | undefined>(undefined),
			UsaTodayPlayerID: new FormControl<number | null | undefined>(undefined),
			Weight: new FormControl<number | null | undefined>(undefined),
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
		Draws?: number | null;
		Games?: number | null;
		GlobalTeamID?: number | null;
		GoalsAgainst?: number | null;
		GoalsDifferential?: number | null;
		GoalsScored?: number | null;
		Group?: string | null;
		Losses?: number | null;
		Name?: string | null;
		Points?: number | null;
		RoundId?: number | null;
		Scope?: string | null;
		ShortName?: string | null;
		StandingId?: number | null;
		TeamId?: number | null;
		Wins?: number | null;
		'[Order]'?: number | null;
	}
	export interface StandingFormProperties {
		Draws: FormControl<number | null | undefined>,
		Games: FormControl<number | null | undefined>,
		GlobalTeamID: FormControl<number | null | undefined>,
		GoalsAgainst: FormControl<number | null | undefined>,
		GoalsDifferential: FormControl<number | null | undefined>,
		GoalsScored: FormControl<number | null | undefined>,
		Group: FormControl<string | null | undefined>,
		Losses: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Points: FormControl<number | null | undefined>,
		RoundId: FormControl<number | null | undefined>,
		Scope: FormControl<string | null | undefined>,
		ShortName: FormControl<string | null | undefined>,
		StandingId: FormControl<number | null | undefined>,
		TeamId: FormControl<number | null | undefined>,
		Wins: FormControl<number | null | undefined>,
		'[Order]': FormControl<number | null | undefined>,
	}
	export function CreateStandingFormGroup() {
		return new FormGroup<StandingFormProperties>({
			Draws: new FormControl<number | null | undefined>(undefined),
			Games: new FormControl<number | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			GoalsAgainst: new FormControl<number | null | undefined>(undefined),
			GoalsDifferential: new FormControl<number | null | undefined>(undefined),
			GoalsScored: new FormControl<number | null | undefined>(undefined),
			Group: new FormControl<string | null | undefined>(undefined),
			Losses: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Points: new FormControl<number | null | undefined>(undefined),
			RoundId: new FormControl<number | null | undefined>(undefined),
			Scope: new FormControl<string | null | undefined>(undefined),
			ShortName: new FormControl<string | null | undefined>(undefined),
			StandingId: new FormControl<number | null | undefined>(undefined),
			TeamId: new FormControl<number | null | undefined>(undefined),
			Wins: new FormControl<number | null | undefined>(undefined),
			'[Order]': new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Team {
		Active?: boolean | null;
		Address?: string | null;
		AreaId?: number | null;
		AreaName?: string | null;
		City?: string | null;
		ClubColor1?: string | null;
		ClubColor2?: string | null;
		ClubColor3?: string | null;
		Email?: string | null;
		Fax?: string | null;
		Founded?: number | null;
		FullName?: string | null;
		Gender?: string | null;
		GlobalTeamId?: number | null;
		Name?: string | null;
		Nickname1?: string | null;
		Nickname2?: string | null;
		Nickname3?: string | null;
		Phone?: string | null;
		TeamId?: number | null;
		Type?: string | null;
		VenueId?: number | null;
		VenueName?: string | null;
		Website?: string | null;
		WikipediaLogoUrl?: string | null;
		WikipediaWordMarkUrl?: string | null;
		Zip?: string | null;
		'[Key]'?: string | null;
	}
	export interface TeamFormProperties {
		Active: FormControl<boolean | null | undefined>,
		Address: FormControl<string | null | undefined>,
		AreaId: FormControl<number | null | undefined>,
		AreaName: FormControl<string | null | undefined>,
		City: FormControl<string | null | undefined>,
		ClubColor1: FormControl<string | null | undefined>,
		ClubColor2: FormControl<string | null | undefined>,
		ClubColor3: FormControl<string | null | undefined>,
		Email: FormControl<string | null | undefined>,
		Fax: FormControl<string | null | undefined>,
		Founded: FormControl<number | null | undefined>,
		FullName: FormControl<string | null | undefined>,
		Gender: FormControl<string | null | undefined>,
		GlobalTeamId: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Nickname1: FormControl<string | null | undefined>,
		Nickname2: FormControl<string | null | undefined>,
		Nickname3: FormControl<string | null | undefined>,
		Phone: FormControl<string | null | undefined>,
		TeamId: FormControl<number | null | undefined>,
		Type: FormControl<string | null | undefined>,
		VenueId: FormControl<number | null | undefined>,
		VenueName: FormControl<string | null | undefined>,
		Website: FormControl<string | null | undefined>,
		WikipediaLogoUrl: FormControl<string | null | undefined>,
		WikipediaWordMarkUrl: FormControl<string | null | undefined>,
		Zip: FormControl<string | null | undefined>,
		'[Key]': FormControl<string | null | undefined>,
	}
	export function CreateTeamFormGroup() {
		return new FormGroup<TeamFormProperties>({
			Active: new FormControl<boolean | null | undefined>(undefined),
			Address: new FormControl<string | null | undefined>(undefined),
			AreaId: new FormControl<number | null | undefined>(undefined),
			AreaName: new FormControl<string | null | undefined>(undefined),
			City: new FormControl<string | null | undefined>(undefined),
			ClubColor1: new FormControl<string | null | undefined>(undefined),
			ClubColor2: new FormControl<string | null | undefined>(undefined),
			ClubColor3: new FormControl<string | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			Fax: new FormControl<string | null | undefined>(undefined),
			Founded: new FormControl<number | null | undefined>(undefined),
			FullName: new FormControl<string | null | undefined>(undefined),
			Gender: new FormControl<string | null | undefined>(undefined),
			GlobalTeamId: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Nickname1: new FormControl<string | null | undefined>(undefined),
			Nickname2: new FormControl<string | null | undefined>(undefined),
			Nickname3: new FormControl<string | null | undefined>(undefined),
			Phone: new FormControl<string | null | undefined>(undefined),
			TeamId: new FormControl<number | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			VenueId: new FormControl<number | null | undefined>(undefined),
			VenueName: new FormControl<string | null | undefined>(undefined),
			Website: new FormControl<string | null | undefined>(undefined),
			WikipediaLogoUrl: new FormControl<string | null | undefined>(undefined),
			WikipediaWordMarkUrl: new FormControl<string | null | undefined>(undefined),
			Zip: new FormControl<string | null | undefined>(undefined),
			'[Key]': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TeamGame {
		Assists?: number | null;
		BlockedShots?: number | null;
		CornersWon?: number | null;
		Crosses?: number | null;
		DateTime?: string | null;
		Day?: string | null;
		DefenderCleanSheets?: number | null;
		FantasyPoints?: number | null;
		FantasyPointsDraftKings?: number | null;
		FantasyPointsFanDuel?: number | null;
		FantasyPointsMondogoal?: number | null;
		FantasyPointsYahoo?: number | null;
		Fouled?: number | null;
		Fouls?: number | null;
		GameId?: number | null;
		Games?: number | null;
		GlobalGameId?: number | null;
		GlobalOpponentId?: number | null;
		GlobalTeamId?: number | null;
		GoalkeeperCleanSheets?: number | null;
		GoalkeeperGoalsAgainst?: number | null;
		GoalkeeperSaves?: number | null;
		GoalkeeperSingleGoalAgainst?: number | null;
		GoalkeeperWins?: number | null;
		Goals?: number | null;
		HomeOrAway?: string | null;
		Interceptions?: number | null;
		IsGameOver?: boolean | null;
		LastManTackle?: number | null;
		Minutes?: number | null;
		Name?: string | null;
		Offsides?: number | null;
		Opponent?: string | null;
		OpponentId?: number | null;
		OpponentScore?: number | null;
		OwnGoals?: number | null;
		Passes?: number | null;
		PassesCompleted?: number | null;
		PenaltiesConceded?: number | null;
		PenaltiesWon?: number | null;
		PenaltyKickGoals?: number | null;
		PenaltyKickMisses?: number | null;
		PenaltyKickSaves?: number | null;
		RedCards?: number | null;
		RoundId?: number | null;
		Score?: number | null;
		Season?: number | null;
		SeasonType?: number | null;
		Shots?: number | null;
		ShotsOnGoal?: number | null;
		StatId?: number | null;
		TacklesWon?: number | null;
		Team?: string | null;
		TeamId?: number | null;
		Touches?: number | null;
		Updated?: string | null;
		UpdatedUtc?: string | null;
		YellowCards?: number | null;
		YellowRedCards?: number | null;
	}
	export interface TeamGameFormProperties {
		Assists: FormControl<number | null | undefined>,
		BlockedShots: FormControl<number | null | undefined>,
		CornersWon: FormControl<number | null | undefined>,
		Crosses: FormControl<number | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,
		DefenderCleanSheets: FormControl<number | null | undefined>,
		FantasyPoints: FormControl<number | null | undefined>,
		FantasyPointsDraftKings: FormControl<number | null | undefined>,
		FantasyPointsFanDuel: FormControl<number | null | undefined>,
		FantasyPointsMondogoal: FormControl<number | null | undefined>,
		FantasyPointsYahoo: FormControl<number | null | undefined>,
		Fouled: FormControl<number | null | undefined>,
		Fouls: FormControl<number | null | undefined>,
		GameId: FormControl<number | null | undefined>,
		Games: FormControl<number | null | undefined>,
		GlobalGameId: FormControl<number | null | undefined>,
		GlobalOpponentId: FormControl<number | null | undefined>,
		GlobalTeamId: FormControl<number | null | undefined>,
		GoalkeeperCleanSheets: FormControl<number | null | undefined>,
		GoalkeeperGoalsAgainst: FormControl<number | null | undefined>,
		GoalkeeperSaves: FormControl<number | null | undefined>,
		GoalkeeperSingleGoalAgainst: FormControl<number | null | undefined>,
		GoalkeeperWins: FormControl<number | null | undefined>,
		Goals: FormControl<number | null | undefined>,
		HomeOrAway: FormControl<string | null | undefined>,
		Interceptions: FormControl<number | null | undefined>,
		IsGameOver: FormControl<boolean | null | undefined>,
		LastManTackle: FormControl<number | null | undefined>,
		Minutes: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Offsides: FormControl<number | null | undefined>,
		Opponent: FormControl<string | null | undefined>,
		OpponentId: FormControl<number | null | undefined>,
		OpponentScore: FormControl<number | null | undefined>,
		OwnGoals: FormControl<number | null | undefined>,
		Passes: FormControl<number | null | undefined>,
		PassesCompleted: FormControl<number | null | undefined>,
		PenaltiesConceded: FormControl<number | null | undefined>,
		PenaltiesWon: FormControl<number | null | undefined>,
		PenaltyKickGoals: FormControl<number | null | undefined>,
		PenaltyKickMisses: FormControl<number | null | undefined>,
		PenaltyKickSaves: FormControl<number | null | undefined>,
		RedCards: FormControl<number | null | undefined>,
		RoundId: FormControl<number | null | undefined>,
		Score: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		Shots: FormControl<number | null | undefined>,
		ShotsOnGoal: FormControl<number | null | undefined>,
		StatId: FormControl<number | null | undefined>,
		TacklesWon: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,
		TeamId: FormControl<number | null | undefined>,
		Touches: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
		UpdatedUtc: FormControl<string | null | undefined>,
		YellowCards: FormControl<number | null | undefined>,
		YellowRedCards: FormControl<number | null | undefined>,
	}
	export function CreateTeamGameFormGroup() {
		return new FormGroup<TeamGameFormProperties>({
			Assists: new FormControl<number | null | undefined>(undefined),
			BlockedShots: new FormControl<number | null | undefined>(undefined),
			CornersWon: new FormControl<number | null | undefined>(undefined),
			Crosses: new FormControl<number | null | undefined>(undefined),
			DateTime: new FormControl<string | null | undefined>(undefined),
			Day: new FormControl<string | null | undefined>(undefined),
			DefenderCleanSheets: new FormControl<number | null | undefined>(undefined),
			FantasyPoints: new FormControl<number | null | undefined>(undefined),
			FantasyPointsDraftKings: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFanDuel: new FormControl<number | null | undefined>(undefined),
			FantasyPointsMondogoal: new FormControl<number | null | undefined>(undefined),
			FantasyPointsYahoo: new FormControl<number | null | undefined>(undefined),
			Fouled: new FormControl<number | null | undefined>(undefined),
			Fouls: new FormControl<number | null | undefined>(undefined),
			GameId: new FormControl<number | null | undefined>(undefined),
			Games: new FormControl<number | null | undefined>(undefined),
			GlobalGameId: new FormControl<number | null | undefined>(undefined),
			GlobalOpponentId: new FormControl<number | null | undefined>(undefined),
			GlobalTeamId: new FormControl<number | null | undefined>(undefined),
			GoalkeeperCleanSheets: new FormControl<number | null | undefined>(undefined),
			GoalkeeperGoalsAgainst: new FormControl<number | null | undefined>(undefined),
			GoalkeeperSaves: new FormControl<number | null | undefined>(undefined),
			GoalkeeperSingleGoalAgainst: new FormControl<number | null | undefined>(undefined),
			GoalkeeperWins: new FormControl<number | null | undefined>(undefined),
			Goals: new FormControl<number | null | undefined>(undefined),
			HomeOrAway: new FormControl<string | null | undefined>(undefined),
			Interceptions: new FormControl<number | null | undefined>(undefined),
			IsGameOver: new FormControl<boolean | null | undefined>(undefined),
			LastManTackle: new FormControl<number | null | undefined>(undefined),
			Minutes: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Offsides: new FormControl<number | null | undefined>(undefined),
			Opponent: new FormControl<string | null | undefined>(undefined),
			OpponentId: new FormControl<number | null | undefined>(undefined),
			OpponentScore: new FormControl<number | null | undefined>(undefined),
			OwnGoals: new FormControl<number | null | undefined>(undefined),
			Passes: new FormControl<number | null | undefined>(undefined),
			PassesCompleted: new FormControl<number | null | undefined>(undefined),
			PenaltiesConceded: new FormControl<number | null | undefined>(undefined),
			PenaltiesWon: new FormControl<number | null | undefined>(undefined),
			PenaltyKickGoals: new FormControl<number | null | undefined>(undefined),
			PenaltyKickMisses: new FormControl<number | null | undefined>(undefined),
			PenaltyKickSaves: new FormControl<number | null | undefined>(undefined),
			RedCards: new FormControl<number | null | undefined>(undefined),
			RoundId: new FormControl<number | null | undefined>(undefined),
			Score: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			Shots: new FormControl<number | null | undefined>(undefined),
			ShotsOnGoal: new FormControl<number | null | undefined>(undefined),
			StatId: new FormControl<number | null | undefined>(undefined),
			TacklesWon: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamId: new FormControl<number | null | undefined>(undefined),
			Touches: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
			UpdatedUtc: new FormControl<string | null | undefined>(undefined),
			YellowCards: new FormControl<number | null | undefined>(undefined),
			YellowRedCards: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TeamSeason {
		Assists?: number | null;
		BlockedShots?: number | null;
		CornersWon?: number | null;
		Crosses?: number | null;
		DefenderCleanSheets?: number | null;
		FantasyPoints?: number | null;
		FantasyPointsDraftKings?: number | null;
		FantasyPointsFanDuel?: number | null;
		FantasyPointsMondogoal?: number | null;
		FantasyPointsYahoo?: number | null;
		Fouled?: number | null;
		Fouls?: number | null;
		Games?: number | null;
		GlobalTeamId?: number | null;
		GoalkeeperCleanSheets?: number | null;
		GoalkeeperGoalsAgainst?: number | null;
		GoalkeeperSaves?: number | null;
		GoalkeeperSingleGoalAgainst?: number | null;
		GoalkeeperWins?: number | null;
		Goals?: number | null;
		Interceptions?: number | null;
		LastManTackle?: number | null;
		Minutes?: number | null;
		Name?: string | null;
		Offsides?: number | null;
		OpponentScore?: number | null;
		OwnGoals?: number | null;
		Passes?: number | null;
		PassesCompleted?: number | null;
		PenaltiesConceded?: number | null;
		PenaltiesWon?: number | null;
		PenaltyKickGoals?: number | null;
		PenaltyKickMisses?: number | null;
		PenaltyKickSaves?: number | null;
		RedCards?: number | null;
		RoundId?: number | null;
		Score?: number | null;
		Season?: number | null;
		SeasonType?: number | null;
		Shots?: number | null;
		ShotsOnGoal?: number | null;
		StatId?: number | null;
		TacklesWon?: number | null;
		Team?: string | null;
		TeamId?: number | null;
		Touches?: number | null;
		Updated?: string | null;
		UpdatedUtc?: string | null;
		YellowCards?: number | null;
		YellowRedCards?: number | null;
	}
	export interface TeamSeasonFormProperties {
		Assists: FormControl<number | null | undefined>,
		BlockedShots: FormControl<number | null | undefined>,
		CornersWon: FormControl<number | null | undefined>,
		Crosses: FormControl<number | null | undefined>,
		DefenderCleanSheets: FormControl<number | null | undefined>,
		FantasyPoints: FormControl<number | null | undefined>,
		FantasyPointsDraftKings: FormControl<number | null | undefined>,
		FantasyPointsFanDuel: FormControl<number | null | undefined>,
		FantasyPointsMondogoal: FormControl<number | null | undefined>,
		FantasyPointsYahoo: FormControl<number | null | undefined>,
		Fouled: FormControl<number | null | undefined>,
		Fouls: FormControl<number | null | undefined>,
		Games: FormControl<number | null | undefined>,
		GlobalTeamId: FormControl<number | null | undefined>,
		GoalkeeperCleanSheets: FormControl<number | null | undefined>,
		GoalkeeperGoalsAgainst: FormControl<number | null | undefined>,
		GoalkeeperSaves: FormControl<number | null | undefined>,
		GoalkeeperSingleGoalAgainst: FormControl<number | null | undefined>,
		GoalkeeperWins: FormControl<number | null | undefined>,
		Goals: FormControl<number | null | undefined>,
		Interceptions: FormControl<number | null | undefined>,
		LastManTackle: FormControl<number | null | undefined>,
		Minutes: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Offsides: FormControl<number | null | undefined>,
		OpponentScore: FormControl<number | null | undefined>,
		OwnGoals: FormControl<number | null | undefined>,
		Passes: FormControl<number | null | undefined>,
		PassesCompleted: FormControl<number | null | undefined>,
		PenaltiesConceded: FormControl<number | null | undefined>,
		PenaltiesWon: FormControl<number | null | undefined>,
		PenaltyKickGoals: FormControl<number | null | undefined>,
		PenaltyKickMisses: FormControl<number | null | undefined>,
		PenaltyKickSaves: FormControl<number | null | undefined>,
		RedCards: FormControl<number | null | undefined>,
		RoundId: FormControl<number | null | undefined>,
		Score: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		Shots: FormControl<number | null | undefined>,
		ShotsOnGoal: FormControl<number | null | undefined>,
		StatId: FormControl<number | null | undefined>,
		TacklesWon: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,
		TeamId: FormControl<number | null | undefined>,
		Touches: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
		UpdatedUtc: FormControl<string | null | undefined>,
		YellowCards: FormControl<number | null | undefined>,
		YellowRedCards: FormControl<number | null | undefined>,
	}
	export function CreateTeamSeasonFormGroup() {
		return new FormGroup<TeamSeasonFormProperties>({
			Assists: new FormControl<number | null | undefined>(undefined),
			BlockedShots: new FormControl<number | null | undefined>(undefined),
			CornersWon: new FormControl<number | null | undefined>(undefined),
			Crosses: new FormControl<number | null | undefined>(undefined),
			DefenderCleanSheets: new FormControl<number | null | undefined>(undefined),
			FantasyPoints: new FormControl<number | null | undefined>(undefined),
			FantasyPointsDraftKings: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFanDuel: new FormControl<number | null | undefined>(undefined),
			FantasyPointsMondogoal: new FormControl<number | null | undefined>(undefined),
			FantasyPointsYahoo: new FormControl<number | null | undefined>(undefined),
			Fouled: new FormControl<number | null | undefined>(undefined),
			Fouls: new FormControl<number | null | undefined>(undefined),
			Games: new FormControl<number | null | undefined>(undefined),
			GlobalTeamId: new FormControl<number | null | undefined>(undefined),
			GoalkeeperCleanSheets: new FormControl<number | null | undefined>(undefined),
			GoalkeeperGoalsAgainst: new FormControl<number | null | undefined>(undefined),
			GoalkeeperSaves: new FormControl<number | null | undefined>(undefined),
			GoalkeeperSingleGoalAgainst: new FormControl<number | null | undefined>(undefined),
			GoalkeeperWins: new FormControl<number | null | undefined>(undefined),
			Goals: new FormControl<number | null | undefined>(undefined),
			Interceptions: new FormControl<number | null | undefined>(undefined),
			LastManTackle: new FormControl<number | null | undefined>(undefined),
			Minutes: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Offsides: new FormControl<number | null | undefined>(undefined),
			OpponentScore: new FormControl<number | null | undefined>(undefined),
			OwnGoals: new FormControl<number | null | undefined>(undefined),
			Passes: new FormControl<number | null | undefined>(undefined),
			PassesCompleted: new FormControl<number | null | undefined>(undefined),
			PenaltiesConceded: new FormControl<number | null | undefined>(undefined),
			PenaltiesWon: new FormControl<number | null | undefined>(undefined),
			PenaltyKickGoals: new FormControl<number | null | undefined>(undefined),
			PenaltyKickMisses: new FormControl<number | null | undefined>(undefined),
			PenaltyKickSaves: new FormControl<number | null | undefined>(undefined),
			RedCards: new FormControl<number | null | undefined>(undefined),
			RoundId: new FormControl<number | null | undefined>(undefined),
			Score: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			Shots: new FormControl<number | null | undefined>(undefined),
			ShotsOnGoal: new FormControl<number | null | undefined>(undefined),
			StatId: new FormControl<number | null | undefined>(undefined),
			TacklesWon: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamId: new FormControl<number | null | undefined>(undefined),
			Touches: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
			UpdatedUtc: new FormControl<string | null | undefined>(undefined),
			YellowCards: new FormControl<number | null | undefined>(undefined),
			YellowRedCards: new FormControl<number | null | undefined>(undefined),
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
		Surface?: string | null;
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
		Surface: FormControl<string | null | undefined>,
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
			Surface: new FormControl<string | null | undefined>(undefined),
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
		 * Get {format}/ActiveMemberships
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<Membership>} 
		 */
		MembershipsActive(format: MembershipsActiveFormat): Observable<Array<Membership>> {
			return this.http.get<Array<Membership>>(this.baseUri + format + '/ActiveMemberships', {});
		}

		/**
		 * Areas (Countries)
		 * Get {format}/Areas
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<Area>} 
		 */
		AreasCountries(format: MembershipsActiveFormat): Observable<Array<Area>> {
			return this.http.get<Array<Area>>(this.baseUri + format + '/Areas', {});
		}

		/**
		 * Competition Fixtures (League Details)
		 * Get {format}/CompetitionDetails/{competition}
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} competition An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.
		 * @return {CompetitionDetail} 
		 */
		CompetitionFixturesLeagueDetails(format: MembershipsActiveFormat, competition: string): Observable<CompetitionDetail> {
			return this.http.get<CompetitionDetail>(this.baseUri + format + '/CompetitionDetails/' + (competition == null ? '' : encodeURIComponent(competition)) + '', {});
		}

		/**
		 * Competition Hierarchy (League Hierarchy)
		 * Get {format}/CompetitionHierarchy
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<Area>} 
		 */
		CompetitionHierarchyLeagueHierarchy(format: MembershipsActiveFormat): Observable<Array<Area>> {
			return this.http.get<Array<Area>>(this.baseUri + format + '/CompetitionHierarchy', {});
		}

		/**
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
		 * Get {format}/GamesByDate/{date}
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s).
		 * <br>Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.
		 * @return {Array<Game>} 
		 */
		GamesByDate(format: MembershipsActiveFormat, date: string): Observable<Array<Game>> {
			return this.http.get<Array<Game>>(this.baseUri + format + '/GamesByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * Memberships (Historical)
		 * Get {format}/HistoricalMemberships
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<Membership>} 
		 */
		MembershipsHistorical(format: MembershipsActiveFormat): Observable<Array<Membership>> {
			return this.http.get<Array<Membership>>(this.baseUri + format + '/HistoricalMemberships', {});
		}

		/**
		 * Memberships by Competition (Historical)
		 * Get {format}/HistoricalMembershipsByCompetition/{competition}
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} competition An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.
		 * @return {Array<Membership>} 
		 */
		MembershipsByCompetitionHistorical(format: MembershipsActiveFormat, competition: string): Observable<Array<Membership>> {
			return this.http.get<Array<Membership>>(this.baseUri + format + '/HistoricalMembershipsByCompetition/' + (competition == null ? '' : encodeURIComponent(competition)) + '', {});
		}

		/**
		 * Memberships by Team (Historical)
		 * Get {format}/HistoricalMembershipsByTeam/{teamid}
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} teamid Unique FantasyData Team ID. 
		 * Example:<code>516</code>.
		 * @return {Array<Membership>} 
		 */
		MembershipsByTeamHistorical(format: MembershipsActiveFormat, teamid: string): Observable<Array<Membership>> {
			return this.http.get<Array<Membership>>(this.baseUri + format + '/HistoricalMembershipsByTeam/' + (teamid == null ? '' : encodeURIComponent(teamid)) + '', {});
		}

		/**
		 * Memberships by Competition (Active)
		 * Get {format}/MembershipsByCompetition/{competition}
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} competition An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.
		 * @return {Array<Membership>} 
		 */
		MembershipsByCompetitionActive(format: MembershipsActiveFormat, competition: string): Observable<Array<Membership>> {
			return this.http.get<Array<Membership>>(this.baseUri + format + '/MembershipsByCompetition/' + (competition == null ? '' : encodeURIComponent(competition)) + '', {});
		}

		/**
		 * Memberships by Team (Active)
		 * Get {format}/MembershipsByTeam/{teamid}
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} teamid Unique FantasyData Team ID. 
		 * Example:<code>516</code>.
		 * @return {Array<Membership>} 
		 */
		MembershipsByTeamActive(format: MembershipsActiveFormat, teamid: string): Observable<Array<Membership>> {
			return this.http.get<Array<Membership>>(this.baseUri + format + '/MembershipsByTeam/' + (teamid == null ? '' : encodeURIComponent(teamid)) + '', {});
		}

		/**
		 * Player
		 * Get {format}/Player/{playerid}
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} playerid Unique FantasyData Player ID.
		 * Example:<code>90026231</code>.
		 * @return {Player} 
		 */
		Player(format: MembershipsActiveFormat, playerid: string): Observable<Player> {
			return this.http.get<Player>(this.baseUri + format + '/Player/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}

		/**
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
		 * Get {format}/PlayersByTeam/{teamid}
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} teamid Unique FantasyData Team ID. 
		 * Example:<code>516</code>.
		 * @return {Array<Player>} 
		 */
		PlayersByTeam(format: MembershipsActiveFormat, teamid: string): Observable<Array<Player>> {
			return this.http.get<Array<Player>>(this.baseUri + format + '/PlayersByTeam/' + (teamid == null ? '' : encodeURIComponent(teamid)) + '', {});
		}

		/**
		 * Memberships (Recently Changed)
		 * Get {format}/RecentlyChangedMemberships/{days}
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} days The number of days since memberships were updated. For example, if you pass <code>3</code>, you'll receive all memberships that have been updated in the past 3 days. Valid entries are: <code>1</code>, <code>2</code> ... <code>30</code>
		 * @return {Array<Membership>} 
		 */
		MembershipsRecentlyChanged(format: MembershipsActiveFormat, days: string): Observable<Array<Membership>> {
			return this.http.get<Array<Membership>>(this.baseUri + format + '/RecentlyChangedMemberships/' + (days == null ? '' : encodeURIComponent(days)) + '', {});
		}

		/**
		 * Schedule
		 * Get {format}/Schedule/{roundid}
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} roundid Unique FantasyData Round ID. RoundIDs can be found in the Competition Hierarchy (League Hierarchy). 
		 * Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc
		 * @return {Array<Game>} 
		 */
		Schedule(format: MembershipsActiveFormat, roundid: string): Observable<Array<Game>> {
			return this.http.get<Array<Game>>(this.baseUri + format + '/Schedule/' + (roundid == null ? '' : encodeURIComponent(roundid)) + '', {});
		}

		/**
		 * Season Teams
		 * Get {format}/SeasonTeams/{seasonid}
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} seasonid Unique FantasyData Season ID. SeasonIDs can be found in the Competition Hierarchy (League Hierarchy). 
		 * Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc
		 * @return {Array<SeasonTeam>} 
		 */
		SeasonTeams(format: MembershipsActiveFormat, seasonid: string): Observable<Array<SeasonTeam>> {
			return this.http.get<Array<SeasonTeam>>(this.baseUri + format + '/SeasonTeams/' + (seasonid == null ? '' : encodeURIComponent(seasonid)) + '', {});
		}

		/**
		 * Standings
		 * Get {format}/Standings/{roundid}
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} roundid Unique FantasyData Round ID. RoundIDs can be found in the Competition Hierarchy (League Hierarchy). 
		 * Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc
		 * @return {Array<Standing>} 
		 */
		Standings(format: MembershipsActiveFormat, roundid: string): Observable<Array<Standing>> {
			return this.http.get<Array<Standing>>(this.baseUri + format + '/Standings/' + (roundid == null ? '' : encodeURIComponent(roundid)) + '', {});
		}

		/**
		 * Team Game Stats by Date
		 * Get {format}/TeamGameStatsByDate/{date}
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s).
		 * <br>Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.
		 * @return {Array<TeamGame>} 
		 */
		TeamGameStatsByDate(format: MembershipsActiveFormat, date: string): Observable<Array<TeamGame>> {
			return this.http.get<Array<TeamGame>>(this.baseUri + format + '/TeamGameStatsByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * Team Season Stats
		 * Get {format}/TeamSeasonStats/{roundid}
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} roundid Unique FantasyData Round ID. RoundIDs can be found in the Competition Hierarchy (League Hierarchy). 
		 * Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc
		 * @return {Array<TeamSeason>} 
		 */
		TeamSeasonStats(format: MembershipsActiveFormat, roundid: string): Observable<Array<TeamSeason>> {
			return this.http.get<Array<TeamSeason>>(this.baseUri + format + '/TeamSeasonStats/' + (roundid == null ? '' : encodeURIComponent(roundid)) + '', {});
		}

		/**
		 * Teams
		 * Get {format}/Teams
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<Team>} 
		 */
		Teams(format: MembershipsActiveFormat): Observable<Array<Team>> {
			return this.http.get<Array<Team>>(this.baseUri + format + '/Teams', {});
		}

		/**
		 * Upcoming Schedule By Player
		 * Get {format}/UpcomingScheduleByPlayer/{playerid}
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} playerid Unique FantasyData Player ID.
		 * Example:<code>90026231</code>.
		 * @return {Array<Game>} 
		 */
		UpcomingScheduleByPlayer(format: MembershipsActiveFormat, playerid: string): Observable<Array<Game>> {
			return this.http.get<Array<Game>>(this.baseUri + format + '/UpcomingScheduleByPlayer/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}

		/**
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

