import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Conference {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ConferenceID?: number | null;
		ConferenceName?: string | null;
		DivisionName?: string | null;
		Name?: string | null;
		Teams?: Array<Team>;
	}
	export interface ConferenceFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ApRank?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		CoachesRank?: number | null;
		Conference?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ConferenceID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ConferenceLosses?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ConferenceWins?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID?: number | null;
		Key?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Losses?: number | null;
		Name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayoffRank?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RankSeason?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RankSeasonType?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RankWeek?: number | null;
		School?: string | null;
		ShortDisplayName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StadiumID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID?: number | null;
		TeamLogoUrl?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Wins?: number | null;
	}
	export interface TeamFormProperties {
		Active: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ApRank: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		CoachesRank: FormControl<number | null | undefined>,
		Conference: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ConferenceID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ConferenceLosses: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ConferenceWins: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID: FormControl<number | null | undefined>,
		Key: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Losses: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayoffRank: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RankSeason: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RankSeasonType: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RankWeek: FormControl<number | null | undefined>,
		School: FormControl<string | null | undefined>,
		ShortDisplayName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StadiumID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID: FormControl<number | null | undefined>,
		TeamLogoUrl: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Wins: FormControl<number | null | undefined>,
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
			Key: new FormControl<string | null | undefined>(undefined),
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
		});

	}

	export interface Game {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Attendance?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayPointSpreadPayout?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayRotationNumber?: number | null;
		AwayTeam?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamMoneyLine?: number | null;
		AwayTeamName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamScore?: number | null;
		Channel?: string | null;
		Created?: string | null;
		DateTime?: string | null;
		DateTimeUTC?: string | null;
		Day?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Distance?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Down?: number | null;
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
		HomePointSpreadPayout?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeRotationNumber?: number | null;
		HomeTeam?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamMoneyLine?: number | null;
		HomeTeamName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamScore?: number | null;
		IsClosed?: boolean | null;
		NeutralVenue?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OverPayout?: number | null;

		/** Type: double */
		OverUnder?: number | null;
		Period?: string | null;
		Periods?: Array<Period>;

		/** Type: double */
		PointSpread?: number | null;
		Possession?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType?: number | null;
		Stadium?: Stadium;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StadiumID?: number | null;
		Status?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimeRemainingMinutes?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimeRemainingSeconds?: number | null;
		Title?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UnderPayout?: number | null;
		Updated?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Week?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		YardLine?: number | null;
		YardLineTerritory?: string | null;
	}
	export interface GameFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Attendance: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayPointSpreadPayout: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayRotationNumber: FormControl<number | null | undefined>,
		AwayTeam: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamMoneyLine: FormControl<number | null | undefined>,
		AwayTeamName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamScore: FormControl<number | null | undefined>,
		Channel: FormControl<string | null | undefined>,
		Created: FormControl<string | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		DateTimeUTC: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Distance: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Down: FormControl<number | null | undefined>,
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
		HomePointSpreadPayout: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeRotationNumber: FormControl<number | null | undefined>,
		HomeTeam: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamMoneyLine: FormControl<number | null | undefined>,
		HomeTeamName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamScore: FormControl<number | null | undefined>,
		IsClosed: FormControl<boolean | null | undefined>,
		NeutralVenue: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OverPayout: FormControl<number | null | undefined>,

		/** Type: double */
		OverUnder: FormControl<number | null | undefined>,
		Period: FormControl<string | null | undefined>,

		/** Type: double */
		PointSpread: FormControl<number | null | undefined>,
		Possession: FormControl<string | null | undefined>,

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
		Title: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UnderPayout: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Week: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		YardLine: FormControl<number | null | undefined>,
		YardLineTerritory: FormControl<string | null | undefined>,
	}
	export function CreateGameFormGroup() {
		return new FormGroup<GameFormProperties>({
			Attendance: new FormControl<number | null | undefined>(undefined),
			AwayPointSpreadPayout: new FormControl<number | null | undefined>(undefined),
			AwayRotationNumber: new FormControl<number | null | undefined>(undefined),
			AwayTeam: new FormControl<string | null | undefined>(undefined),
			AwayTeamID: new FormControl<number | null | undefined>(undefined),
			AwayTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			AwayTeamName: new FormControl<string | null | undefined>(undefined),
			AwayTeamScore: new FormControl<number | null | undefined>(undefined),
			Channel: new FormControl<string | null | undefined>(undefined),
			Created: new FormControl<string | null | undefined>(undefined),
			DateTime: new FormControl<string | null | undefined>(undefined),
			DateTimeUTC: new FormControl<string | null | undefined>(undefined),
			Day: new FormControl<string | null | undefined>(undefined),
			Distance: new FormControl<number | null | undefined>(undefined),
			Down: new FormControl<number | null | undefined>(undefined),
			GameEndDateTime: new FormControl<string | null | undefined>(undefined),
			GameID: new FormControl<number | null | undefined>(undefined),
			GlobalAwayTeamID: new FormControl<number | null | undefined>(undefined),
			GlobalGameID: new FormControl<number | null | undefined>(undefined),
			GlobalHomeTeamID: new FormControl<number | null | undefined>(undefined),
			HomePointSpreadPayout: new FormControl<number | null | undefined>(undefined),
			HomeRotationNumber: new FormControl<number | null | undefined>(undefined),
			HomeTeam: new FormControl<string | null | undefined>(undefined),
			HomeTeamID: new FormControl<number | null | undefined>(undefined),
			HomeTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			HomeTeamName: new FormControl<string | null | undefined>(undefined),
			HomeTeamScore: new FormControl<number | null | undefined>(undefined),
			IsClosed: new FormControl<boolean | null | undefined>(undefined),
			NeutralVenue: new FormControl<boolean | null | undefined>(undefined),
			OverPayout: new FormControl<number | null | undefined>(undefined),
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
			UnderPayout: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
			Week: new FormControl<number | null | undefined>(undefined),
			YardLine: new FormControl<number | null | undefined>(undefined),
			YardLineTerritory: new FormControl<string | null | undefined>(undefined),
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Number?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PeriodID?: number | null;
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
		Number: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

	export interface Player {
		BirthCity?: string | null;
		BirthState?: string | null;
		Class?: string | null;
		Created?: string | null;
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID?: number | null;
		Position?: string | null;
		PositionCategory?: string | null;
		Team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID?: number | null;
		Updated?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Weight?: number | null;
	}
	export interface PlayerFormProperties {
		BirthCity: FormControl<string | null | undefined>,
		BirthState: FormControl<string | null | undefined>,
		Class: FormControl<string | null | undefined>,
		Created: FormControl<string | null | undefined>,
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID: FormControl<number | null | undefined>,
		Position: FormControl<string | null | undefined>,
		PositionCategory: FormControl<string | null | undefined>,
		Team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Weight: FormControl<number | null | undefined>,
	}
	export function CreatePlayerFormGroup() {
		return new FormGroup<PlayerFormProperties>({
			BirthCity: new FormControl<string | null | undefined>(undefined),
			BirthState: new FormControl<string | null | undefined>(undefined),
			Class: new FormControl<string | null | undefined>(undefined),
			Created: new FormControl<string | null | undefined>(undefined),
			FirstName: new FormControl<string | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			Height: new FormControl<number | null | undefined>(undefined),
			InjuryBodyPart: new FormControl<string | null | undefined>(undefined),
			InjuryNotes: new FormControl<string | null | undefined>(undefined),
			InjuryStartDate: new FormControl<string | null | undefined>(undefined),
			InjuryStatus: new FormControl<string | null | undefined>(undefined),
			Jersey: new FormControl<number | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			Position: new FormControl<string | null | undefined>(undefined),
			PositionCategory: new FormControl<string | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
			Weight: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PlayerBasic {
		BirthCity?: string | null;
		BirthState?: string | null;
		Class?: string | null;
		Created?: string | null;
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
		Team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID?: number | null;
		Updated?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Weight?: number | null;
	}
	export interface PlayerBasicFormProperties {
		BirthCity: FormControl<string | null | undefined>,
		BirthState: FormControl<string | null | undefined>,
		Class: FormControl<string | null | undefined>,
		Created: FormControl<string | null | undefined>,
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
		Team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Weight: FormControl<number | null | undefined>,
	}
	export function CreatePlayerBasicFormGroup() {
		return new FormGroup<PlayerBasicFormProperties>({
			BirthCity: new FormControl<string | null | undefined>(undefined),
			BirthState: new FormControl<string | null | undefined>(undefined),
			Class: new FormControl<string | null | undefined>(undefined),
			Created: new FormControl<string | null | undefined>(undefined),
			FirstName: new FormControl<string | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			Height: new FormControl<number | null | undefined>(undefined),
			Jersey: new FormControl<number | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			Position: new FormControl<string | null | undefined>(undefined),
			PositionCategory: new FormControl<string | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
			Weight: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ScheduleBasic {
		AwayTeam?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamID?: number | null;
		AwayTeamName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamScore?: number | null;
		Created?: string | null;
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
		HomeTeamName?: string | null;

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
		Title?: string | null;
		Updated?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Week?: number | null;
	}
	export interface ScheduleBasicFormProperties {
		AwayTeam: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamID: FormControl<number | null | undefined>,
		AwayTeamName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamScore: FormControl<number | null | undefined>,
		Created: FormControl<string | null | undefined>,
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
		HomeTeamName: FormControl<string | null | undefined>,

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
		Title: FormControl<string | null | undefined>,
		Updated: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Week: FormControl<number | null | undefined>,
	}
	export function CreateScheduleBasicFormGroup() {
		return new FormGroup<ScheduleBasicFormProperties>({
			AwayTeam: new FormControl<string | null | undefined>(undefined),
			AwayTeamID: new FormControl<number | null | undefined>(undefined),
			AwayTeamName: new FormControl<string | null | undefined>(undefined),
			AwayTeamScore: new FormControl<number | null | undefined>(undefined),
			Created: new FormControl<string | null | undefined>(undefined),
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
			HomeTeamName: new FormControl<string | null | undefined>(undefined),
			HomeTeamScore: new FormControl<number | null | undefined>(undefined),
			IsClosed: new FormControl<boolean | null | undefined>(undefined),
			NeutralVenue: new FormControl<boolean | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			StadiumID: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
			Week: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Season {
		ApiSeason?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ApiWeek?: number | null;
		Description?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		EndYear?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season1?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StartYear?: number | null;
	}
	export interface SeasonFormProperties {
		ApiSeason: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ApiWeek: FormControl<number | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		EndYear: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season1: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: double */
		GeoLat?: number | null;

		/** Type: double */
		GeoLong?: number | null;
		Name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StadiumID?: number | null;
		State?: string | null;
	}
	export interface StadiumFormProperties {
		Active: FormControl<boolean | null | undefined>,
		City: FormControl<string | null | undefined>,
		Dome: FormControl<boolean | null | undefined>,

		/** Type: double */
		GeoLat: FormControl<number | null | undefined>,

		/** Type: double */
		GeoLong: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StadiumID: FormControl<number | null | undefined>,
		State: FormControl<string | null | undefined>,
	}
	export function CreateStadiumFormGroup() {
		return new FormGroup<StadiumFormProperties>({
			Active: new FormControl<boolean | null | undefined>(undefined),
			City: new FormControl<string | null | undefined>(undefined),
			Dome: new FormControl<boolean | null | undefined>(undefined),
			GeoLat: new FormControl<number | null | undefined>(undefined),
			GeoLong: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			StadiumID: new FormControl<number | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TeamBasic {
		Active?: boolean | null;
		Conference?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ConferenceID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID?: number | null;
		Key?: string | null;
		Name?: string | null;
		School?: string | null;
		ShortDisplayName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StadiumID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID?: number | null;
		TeamLogoUrl?: string | null;
	}
	export interface TeamBasicFormProperties {
		Active: FormControl<boolean | null | undefined>,
		Conference: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ConferenceID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID: FormControl<number | null | undefined>,
		Key: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		School: FormControl<string | null | undefined>,
		ShortDisplayName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StadiumID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID: FormControl<number | null | undefined>,
		TeamLogoUrl: FormControl<string | null | undefined>,
	}
	export function CreateTeamBasicFormGroup() {
		return new FormGroup<TeamBasicFormProperties>({
			Active: new FormControl<boolean | null | undefined>(undefined),
			Conference: new FormControl<string | null | undefined>(undefined),
			ConferenceID: new FormControl<number | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			Key: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			School: new FormControl<string | null | undefined>(undefined),
			ShortDisplayName: new FormControl<string | null | undefined>(undefined),
			StadiumID: new FormControl<number | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			TeamLogoUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TeamGame {

		/** Type: double */
		AssistedTackles?: number | null;
		Created?: string | null;
		DateTime?: string | null;
		Day?: string | null;

		/** Type: double */
		ExtraPointsAttempted?: number | null;

		/** Type: double */
		ExtraPointsMade?: number | null;

		/** Type: double */
		FantasyPoints?: number | null;

		/** Type: double */
		FieldGoalPercentage?: number | null;

		/** Type: double */
		FieldGoalsAttempted?: number | null;

		/** Type: double */
		FieldGoalsLongestMade?: number | null;

		/** Type: double */
		FieldGoalsMade?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FirstDowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FourthDownAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FourthDownConversions?: number | null;

		/** Type: double */
		FumbleReturnTouchdowns?: number | null;

		/** Type: double */
		Fumbles?: number | null;

		/** Type: double */
		FumblesLost?: number | null;

		/** Type: double */
		FumblesRecovered?: number | null;

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

		/** Type: double */
		InterceptionReturnTouchdowns?: number | null;

		/** Type: double */
		InterceptionReturnYards?: number | null;

		/** Type: double */
		Interceptions?: number | null;
		IsGameOver?: boolean | null;

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
		Name?: string | null;
		Opponent?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentScore?: number | null;

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
		PassingRating?: number | null;

		/** Type: double */
		PassingTouchdowns?: number | null;

		/** Type: double */
		PassingYards?: number | null;

		/** Type: double */
		PassingYardsPerAttempt?: number | null;

		/** Type: double */
		PassingYardsPerCompletion?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Penalties?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PenaltyYards?: number | null;

		/** Type: double */
		PuntAverage?: number | null;

		/** Type: double */
		PuntLong?: number | null;

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
		PuntYards?: number | null;

		/** Type: double */
		Punts?: number | null;

		/** Type: double */
		QuarterbackHurries?: number | null;

		/** Type: double */
		ReceivingLong?: number | null;

		/** Type: double */
		ReceivingTouchdowns?: number | null;

		/** Type: double */
		ReceivingYards?: number | null;

		/** Type: double */
		ReceivingYardsPerReception?: number | null;

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
		Sacks?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Score?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType?: number | null;

		/** Type: double */
		SoloTackles?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StatID?: number | null;

		/** Type: double */
		TacklesForLoss?: number | null;
		Team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ThirdDownAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ThirdDownConversions?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimeOfPossessionMinutes?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimeOfPossessionSeconds?: number | null;
		Updated?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Week?: number | null;
	}
	export interface TeamGameFormProperties {

		/** Type: double */
		AssistedTackles: FormControl<number | null | undefined>,
		Created: FormControl<string | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,

		/** Type: double */
		ExtraPointsAttempted: FormControl<number | null | undefined>,

		/** Type: double */
		ExtraPointsMade: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPoints: FormControl<number | null | undefined>,

		/** Type: double */
		FieldGoalPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		FieldGoalsAttempted: FormControl<number | null | undefined>,

		/** Type: double */
		FieldGoalsLongestMade: FormControl<number | null | undefined>,

		/** Type: double */
		FieldGoalsMade: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FirstDowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FourthDownAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FourthDownConversions: FormControl<number | null | undefined>,

		/** Type: double */
		FumbleReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: double */
		Fumbles: FormControl<number | null | undefined>,

		/** Type: double */
		FumblesLost: FormControl<number | null | undefined>,

		/** Type: double */
		FumblesRecovered: FormControl<number | null | undefined>,

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

		/** Type: double */
		InterceptionReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: double */
		InterceptionReturnYards: FormControl<number | null | undefined>,

		/** Type: double */
		Interceptions: FormControl<number | null | undefined>,
		IsGameOver: FormControl<boolean | null | undefined>,

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
		Name: FormControl<string | null | undefined>,
		Opponent: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentScore: FormControl<number | null | undefined>,

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
		PassingRating: FormControl<number | null | undefined>,

		/** Type: double */
		PassingTouchdowns: FormControl<number | null | undefined>,

		/** Type: double */
		PassingYards: FormControl<number | null | undefined>,

		/** Type: double */
		PassingYardsPerAttempt: FormControl<number | null | undefined>,

		/** Type: double */
		PassingYardsPerCompletion: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Penalties: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PenaltyYards: FormControl<number | null | undefined>,

		/** Type: double */
		PuntAverage: FormControl<number | null | undefined>,

		/** Type: double */
		PuntLong: FormControl<number | null | undefined>,

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
		PuntYards: FormControl<number | null | undefined>,

		/** Type: double */
		Punts: FormControl<number | null | undefined>,

		/** Type: double */
		QuarterbackHurries: FormControl<number | null | undefined>,

		/** Type: double */
		ReceivingLong: FormControl<number | null | undefined>,

		/** Type: double */
		ReceivingTouchdowns: FormControl<number | null | undefined>,

		/** Type: double */
		ReceivingYards: FormControl<number | null | undefined>,

		/** Type: double */
		ReceivingYardsPerReception: FormControl<number | null | undefined>,

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
		Sacks: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Score: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType: FormControl<number | null | undefined>,

		/** Type: double */
		SoloTackles: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StatID: FormControl<number | null | undefined>,

		/** Type: double */
		TacklesForLoss: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ThirdDownAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ThirdDownConversions: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimeOfPossessionMinutes: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimeOfPossessionSeconds: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: double */
		AssistedTackles?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ConferenceLosses?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ConferencePointsAgainst?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ConferencePointsFor?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ConferenceRank?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ConferenceWins?: number | null;
		Created?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DivisionRank?: number | null;

		/** Type: double */
		ExtraPointsAttempted?: number | null;

		/** Type: double */
		ExtraPointsMade?: number | null;

		/** Type: double */
		FantasyPoints?: number | null;

		/** Type: double */
		FieldGoalPercentage?: number | null;

		/** Type: double */
		FieldGoalsAttempted?: number | null;

		/** Type: double */
		FieldGoalsLongestMade?: number | null;

		/** Type: double */
		FieldGoalsMade?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FirstDowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FourthDownAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FourthDownConversions?: number | null;

		/** Type: double */
		FumbleReturnTouchdowns?: number | null;

		/** Type: double */
		Fumbles?: number | null;

		/** Type: double */
		FumblesLost?: number | null;

		/** Type: double */
		FumblesRecovered?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Games?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeLosses?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeWins?: number | null;

		/** Type: double */
		InterceptionReturnTouchdowns?: number | null;

		/** Type: double */
		InterceptionReturnYards?: number | null;

		/** Type: double */
		Interceptions?: number | null;

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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Losses?: number | null;
		Name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentScore?: number | null;

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
		PassingRating?: number | null;

		/** Type: double */
		PassingTouchdowns?: number | null;

		/** Type: double */
		PassingYards?: number | null;

		/** Type: double */
		PassingYardsPerAttempt?: number | null;

		/** Type: double */
		PassingYardsPerCompletion?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Penalties?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PenaltyYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PointsAgainst?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PointsFor?: number | null;

		/** Type: double */
		PuntAverage?: number | null;

		/** Type: double */
		PuntLong?: number | null;

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
		PuntYards?: number | null;

		/** Type: double */
		Punts?: number | null;

		/** Type: double */
		QuarterbackHurries?: number | null;

		/** Type: double */
		ReceivingLong?: number | null;

		/** Type: double */
		ReceivingTouchdowns?: number | null;

		/** Type: double */
		ReceivingYards?: number | null;

		/** Type: double */
		ReceivingYardsPerReception?: number | null;

		/** Type: double */
		Receptions?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RoadLosses?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RoadWins?: number | null;

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
		Sacks?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Score?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType?: number | null;

		/** Type: double */
		SoloTackles?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StatID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Streak?: number | null;

		/** Type: double */
		TacklesForLoss?: number | null;
		Team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ThirdDownAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ThirdDownConversions?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimeOfPossessionMinutes?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimeOfPossessionSeconds?: number | null;
		Updated?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Wins?: number | null;
	}
	export interface TeamSeasonFormProperties {

		/** Type: double */
		AssistedTackles: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ConferenceLosses: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ConferencePointsAgainst: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ConferencePointsFor: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ConferenceRank: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ConferenceWins: FormControl<number | null | undefined>,
		Created: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DivisionRank: FormControl<number | null | undefined>,

		/** Type: double */
		ExtraPointsAttempted: FormControl<number | null | undefined>,

		/** Type: double */
		ExtraPointsMade: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPoints: FormControl<number | null | undefined>,

		/** Type: double */
		FieldGoalPercentage: FormControl<number | null | undefined>,

		/** Type: double */
		FieldGoalsAttempted: FormControl<number | null | undefined>,

		/** Type: double */
		FieldGoalsLongestMade: FormControl<number | null | undefined>,

		/** Type: double */
		FieldGoalsMade: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FirstDowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FourthDownAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FourthDownConversions: FormControl<number | null | undefined>,

		/** Type: double */
		FumbleReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: double */
		Fumbles: FormControl<number | null | undefined>,

		/** Type: double */
		FumblesLost: FormControl<number | null | undefined>,

		/** Type: double */
		FumblesRecovered: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Games: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeLosses: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeWins: FormControl<number | null | undefined>,

		/** Type: double */
		InterceptionReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: double */
		InterceptionReturnYards: FormControl<number | null | undefined>,

		/** Type: double */
		Interceptions: FormControl<number | null | undefined>,

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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Losses: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentScore: FormControl<number | null | undefined>,

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
		PassingRating: FormControl<number | null | undefined>,

		/** Type: double */
		PassingTouchdowns: FormControl<number | null | undefined>,

		/** Type: double */
		PassingYards: FormControl<number | null | undefined>,

		/** Type: double */
		PassingYardsPerAttempt: FormControl<number | null | undefined>,

		/** Type: double */
		PassingYardsPerCompletion: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Penalties: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PenaltyYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PointsAgainst: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PointsFor: FormControl<number | null | undefined>,

		/** Type: double */
		PuntAverage: FormControl<number | null | undefined>,

		/** Type: double */
		PuntLong: FormControl<number | null | undefined>,

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
		PuntYards: FormControl<number | null | undefined>,

		/** Type: double */
		Punts: FormControl<number | null | undefined>,

		/** Type: double */
		QuarterbackHurries: FormControl<number | null | undefined>,

		/** Type: double */
		ReceivingLong: FormControl<number | null | undefined>,

		/** Type: double */
		ReceivingTouchdowns: FormControl<number | null | undefined>,

		/** Type: double */
		ReceivingYards: FormControl<number | null | undefined>,

		/** Type: double */
		ReceivingYardsPerReception: FormControl<number | null | undefined>,

		/** Type: double */
		Receptions: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RoadLosses: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RoadWins: FormControl<number | null | undefined>,

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
		Sacks: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Score: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType: FormControl<number | null | undefined>,

		/** Type: double */
		SoloTackles: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StatID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Streak: FormControl<number | null | undefined>,

		/** Type: double */
		TacklesForLoss: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ThirdDownAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ThirdDownConversions: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimeOfPossessionMinutes: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimeOfPossessionSeconds: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Wins: FormControl<number | null | undefined>,
	}
	export function CreateTeamSeasonFormGroup() {
		return new FormGroup<TeamSeasonFormProperties>({
			AssistedTackles: new FormControl<number | null | undefined>(undefined),
			ConferenceLosses: new FormControl<number | null | undefined>(undefined),
			ConferencePointsAgainst: new FormControl<number | null | undefined>(undefined),
			ConferencePointsFor: new FormControl<number | null | undefined>(undefined),
			ConferenceRank: new FormControl<number | null | undefined>(undefined),
			ConferenceWins: new FormControl<number | null | undefined>(undefined),
			Created: new FormControl<string | null | undefined>(undefined),
			DivisionRank: new FormControl<number | null | undefined>(undefined),
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
		 */
		AreGamesInProgress(format: AreGamesInProgressFormat): Observable<boolean> {
			return this.http.get<boolean>(this.baseUri + format + '/AreAnyGamesInProgress', {});
		}

		/**
		 * Current Season
		 * Get {format}/CurrentSeason
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
		 * @return {number} Type: int, -2,147,483,648 to 2,147,483,647
		 */
		CurrentSeason(format: AreGamesInProgressFormat): Observable<number> {
			return this.http.get<number>(this.baseUri + format + '/CurrentSeason', {});
		}

		/**
		 * Current Season Details
		 * Get {format}/CurrentSeasonDetails
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
		 */
		CurrentSeasonDetails(format: AreGamesInProgressFormat): Observable<Season> {
			return this.http.get<Season>(this.baseUri + format + '/CurrentSeasonDetails', {});
		}

		/**
		 * Current SeasonType
		 * Get {format}/CurrentSeasonType
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
		 */
		CurrentSeasontype(format: AreGamesInProgressFormat): Observable<string> {
			return this.http.get(this.baseUri + format + '/CurrentSeasonType', { responseType: 'text' });
		}

		/**
		 * Current Week
		 * Get {format}/CurrentWeek
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
		 * @return {number} Type: int, -2,147,483,648 to 2,147,483,647
		 */
		CurrentWeek(format: AreGamesInProgressFormat): Observable<number> {
			return this.http.get<number>(this.baseUri + format + '/CurrentWeek', {});
		}

		/**
		 * Schedules
		 * Get {format}/Games/{season}
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
		 * @param {string} season Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.
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
		 */
		GamesByWeek(format: AreGamesInProgressFormat, season: string, week: string): Observable<Array<Game>> {
			return this.http.get<Array<Game>>(this.baseUri + format + '/GamesByWeek/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (week == null ? '' : encodeURIComponent(week)) + '', {});
		}

		/**
		 * Injured Players
		 * This endpoint provides all currently injured college football players, along with injury details.
		 * Get {format}/InjuredPlayers
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
		 */
		InjuredPlayers(format: AreGamesInProgressFormat): Observable<Array<Player>> {
			return this.http.get<Array<Player>>(this.baseUri + format + '/InjuredPlayers', {});
		}

		/**
		 * Conference Hierarchy (with Teams)
		 * Get {format}/LeagueHierarchy
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
		 */
		ConferenceHierarchyWithTeams(format: AreGamesInProgressFormat): Observable<Array<Conference>> {
			return this.http.get<Array<Conference>>(this.baseUri + format + '/LeagueHierarchy', {});
		}

		/**
		 * Player Details By Player
		 * Get {format}/Player/{playerid}
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} playerid 
		 *           Unique FantasyData Player ID.
		 *           Example:<code>50002016</code>.
		 *         
		 */
		PlayerDetailsByPlayer(format: AreGamesInProgressFormat, playerid: string): Observable<Array<Player>> {
			return this.http.get<Array<Player>>(this.baseUri + format + '/Player/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}

		/**
		 * Player Details By Active
		 * Get {format}/Players
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 */
		PlayerDetailsByActive(format: AreGamesInProgressFormat): Observable<Array<Player>> {
			return this.http.get<Array<Player>>(this.baseUri + format + '/Players', {});
		}

		/**
		 * Player Details by Team
		 * Get {format}/Players/{team}
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} team 
		 *           The abbreviation of the requested team.
		 *           <br>Examples: <code>SF</code>, <code>NYY</code>.
		 *         
		 */
		PlayerDetailsByTeam(format: AreGamesInProgressFormat, team: string): Observable<Array<Player>> {
			return this.http.get<Array<Player>>(this.baseUri + format + '/Players/' + (team == null ? '' : encodeURIComponent(team)) + '', {});
		}

		/**
		 * Players by Team (Basic)
		 * Get {format}/PlayersBasic/{team}
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} team 
		 *           The abbreviation of the requested team.
		 *           <br>Examples: <code>SF</code>, <code>NYY</code>.
		 *         
		 */
		PlayersByTeamBasic(format: AreGamesInProgressFormat, team: string): Observable<Array<PlayerBasic>> {
			return this.http.get<Array<PlayerBasic>>(this.baseUri + format + '/PlayersBasic/' + (team == null ? '' : encodeURIComponent(team)) + '', {});
		}

		/**
		 * Schedules (Basic)
		 * Get {format}/SchedulesBasic/{season}
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
		 * @param {string} season Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.
		 */
		SchedulesBasic(format: AreGamesInProgressFormat, season: string): Observable<Array<ScheduleBasic>> {
			return this.http.get<Array<ScheduleBasic>>(this.baseUri + format + '/SchedulesBasic/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * Games by Week (Basic)
		 * Get {format}/ScoresBasic/{season}/{week}
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
		 * @param {string} season 
		 *           Year of the season.
		 *           <br>Examples: <code>2015</code>, <code>2016</code>, etc.
		 *         
		 * @param {string} week 
		 *           The week of the game(s).
		 *           <br>Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc.
		 *         
		 */
		GamesByWeekBasic(format: AreGamesInProgressFormat, season: string, week: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + format + '/ScoresBasic/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (week == null ? '' : encodeURIComponent(week)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Stadiums
		 * Get {format}/Stadiums
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
		 */
		Stadiums(format: AreGamesInProgressFormat): Observable<Array<Stadium>> {
			return this.http.get<Array<Stadium>>(this.baseUri + format + '/Stadiums', {});
		}

		/**
		 * Team Game Logs By Season
		 * Game by game log of total team statistics.
		 * Get {format}/TeamGameStatsBySeason/{season}/{teamid}/{numberofgames}
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
		 * @param {string} season Season to get games from. Example <code>2019POST</code>, <code>2020</code>        
		 * @param {string} teamid Unique ID of team.  Example <code> 1 </code>
		 * @param {string} numberofgames How many games to return. Example <code>all</code>, <code>10</code>, <code>25</code>
		 */
		TeamGameLogsBySeason(format: AreGamesInProgressFormat, season: string, teamid: string, numberofgames: string): Observable<Array<TeamGame>> {
			return this.http.get<Array<TeamGame>>(this.baseUri + format + '/TeamGameStatsBySeason/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (teamid == null ? '' : encodeURIComponent(teamid)) + '/' + (numberofgames == null ? '' : encodeURIComponent(numberofgames)) + '', {});
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
		 */
		TeamGameStatsByWeek(format: AreGamesInProgressFormat, season: string, week: string): Observable<Array<TeamGame>> {
			return this.http.get<Array<TeamGame>>(this.baseUri + format + '/TeamGameStatsByWeek/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (week == null ? '' : encodeURIComponent(week)) + '', {});
		}

		/**
		 * Team Season Stats & Standings
		 * Get {format}/TeamSeasonStats/{season}
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
		 * @param {string} season Year of the season (with optional season type).<br>Examples: <code>2017</code>, <code>2017POST</code>, <code>2018</code>.
		 */
		TeamSeasonStatsStandings(format: AreGamesInProgressFormat, season: string): Observable<Array<TeamSeason>> {
			return this.http.get<Array<TeamSeason>>(this.baseUri + format + '/TeamSeasonStats/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * Teams
		 * Get {format}/Teams
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
		 */
		Teams(format: AreGamesInProgressFormat): Observable<Array<Team>> {
			return this.http.get<Array<Team>>(this.baseUri + format + '/Teams', {});
		}

		/**
		 * Teams (Basic)
		 * Get {format}/TeamsBasic
		 * @param {AreGamesInProgressFormat} format Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
		 */
		TeamsBasic(format: AreGamesInProgressFormat): Observable<Array<TeamBasic>> {
			return this.http.get<Array<TeamBasic>>(this.baseUri + format + '/TeamsBasic', {});
		}
	}

	export enum AreGamesInProgressFormat { XML = 'XML', JSON = 'JSON' }

}

