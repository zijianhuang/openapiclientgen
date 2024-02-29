import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Area {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AreaId?: number | null;
		CountryCode?: string | null;
		Name?: string | null;
	}
	export interface AreaFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

	export interface BoxScore {
		Game?: Game;
		Maps?: Array<Map>;
	}
	export interface BoxScoreFormProperties {
	}
	export function CreateBoxScoreFormGroup() {
		return new FormGroup<BoxScoreFormProperties>({
		});

	}

	export interface Map {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		CurrentRound?: number | null;
		Leaderboards?: Array<Leaderboard>;
		Name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Number?: number | null;
		Status?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamAScore?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamBScore?: number | null;
	}
	export interface MapFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		CurrentRound: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Number: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamAScore: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamBScore: FormControl<number | null | undefined>,
	}
	export function CreateMapFormGroup() {
		return new FormGroup<MapFormProperties>({
			CurrentRound: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Number: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			TeamAScore: new FormControl<number | null | undefined>(undefined),
			TeamBScore: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Leaderboard {

		/** Type: double */
		Aces?: number | null;

		/** Type: double */
		Assists?: number | null;

		/** Type: double */
		AverageDamagePerRound?: number | null;

		/** Type: double */
		Clutch1v2s?: number | null;

		/** Type: double */
		Clutch1v3s?: number | null;

		/** Type: double */
		Clutch1v4s?: number | null;

		/** Type: double */
		Clutch1v5s?: number | null;
		DateTime?: string | null;
		Day?: string | null;

		/** Type: double */
		Deaths?: number | null;

		/** Type: double */
		EntryKills?: number | null;

		/** Type: double */
		FantasyPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GameId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Games?: number | null;

		/** Type: double */
		Headshots?: number | null;
		IsClosed?: boolean | null;

		/** Type: double */
		Kast?: number | null;

		/** Type: double */
		Kills?: number | null;

		/** Type: double */
		Maps?: number | null;
		MatchName?: string | null;
		Name?: string | null;
		Opponent?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerId?: number | null;

		/** Type: double */
		QuadKills?: number | null;

		/** Type: double */
		Rating?: number | null;
		Team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamId?: number | null;
		Updated?: string | null;
		UpdatedUtc?: string | null;
	}
	export interface LeaderboardFormProperties {

		/** Type: double */
		Aces: FormControl<number | null | undefined>,

		/** Type: double */
		Assists: FormControl<number | null | undefined>,

		/** Type: double */
		AverageDamagePerRound: FormControl<number | null | undefined>,

		/** Type: double */
		Clutch1v2s: FormControl<number | null | undefined>,

		/** Type: double */
		Clutch1v3s: FormControl<number | null | undefined>,

		/** Type: double */
		Clutch1v4s: FormControl<number | null | undefined>,

		/** Type: double */
		Clutch1v5s: FormControl<number | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,

		/** Type: double */
		Deaths: FormControl<number | null | undefined>,

		/** Type: double */
		EntryKills: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GameId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Games: FormControl<number | null | undefined>,

		/** Type: double */
		Headshots: FormControl<number | null | undefined>,
		IsClosed: FormControl<boolean | null | undefined>,

		/** Type: double */
		Kast: FormControl<number | null | undefined>,

		/** Type: double */
		Kills: FormControl<number | null | undefined>,

		/** Type: double */
		Maps: FormControl<number | null | undefined>,
		MatchName: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Opponent: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerId: FormControl<number | null | undefined>,

		/** Type: double */
		QuadKills: FormControl<number | null | undefined>,

		/** Type: double */
		Rating: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamId: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
		UpdatedUtc: FormControl<string | null | undefined>,
	}
	export function CreateLeaderboardFormGroup() {
		return new FormGroup<LeaderboardFormProperties>({
			Aces: new FormControl<number | null | undefined>(undefined),
			Assists: new FormControl<number | null | undefined>(undefined),
			AverageDamagePerRound: new FormControl<number | null | undefined>(undefined),
			Clutch1v2s: new FormControl<number | null | undefined>(undefined),
			Clutch1v3s: new FormControl<number | null | undefined>(undefined),
			Clutch1v4s: new FormControl<number | null | undefined>(undefined),
			Clutch1v5s: new FormControl<number | null | undefined>(undefined),
			DateTime: new FormControl<string | null | undefined>(undefined),
			Day: new FormControl<string | null | undefined>(undefined),
			Deaths: new FormControl<number | null | undefined>(undefined),
			EntryKills: new FormControl<number | null | undefined>(undefined),
			FantasyPoints: new FormControl<number | null | undefined>(undefined),
			GameId: new FormControl<number | null | undefined>(undefined),
			Games: new FormControl<number | null | undefined>(undefined),
			Headshots: new FormControl<number | null | undefined>(undefined),
			IsClosed: new FormControl<boolean | null | undefined>(undefined),
			Kast: new FormControl<number | null | undefined>(undefined),
			Kills: new FormControl<number | null | undefined>(undefined),
			Maps: new FormControl<number | null | undefined>(undefined),
			MatchName: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Opponent: new FormControl<string | null | undefined>(undefined),
			OpponentId: new FormControl<number | null | undefined>(undefined),
			PlayerId: new FormControl<number | null | undefined>(undefined),
			QuadKills: new FormControl<number | null | undefined>(undefined),
			Rating: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamId: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
			UpdatedUtc: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Competition {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AreaId?: number | null;
		AreaName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		CompetitionId?: number | null;
		Format?: string | null;
		Gender?: string | null;
		Name?: string | null;
		PlayerStatsCoverage?: boolean | null;
		Seasons?: Array<Season>;
		Type?: string | null;
	}
	export interface CompetitionFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AreaId: FormControl<number | null | undefined>,
		AreaName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		CompetitionId: FormControl<number | null | undefined>,
		Format: FormControl<string | null | undefined>,
		Gender: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PlayerStatsCoverage: FormControl<boolean | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateCompetitionFormGroup() {
		return new FormGroup<CompetitionFormProperties>({
			AreaId: new FormControl<number | null | undefined>(undefined),
			AreaName: new FormControl<string | null | undefined>(undefined),
			CompetitionId: new FormControl<number | null | undefined>(undefined),
			Format: new FormControl<string | null | undefined>(undefined),
			Gender: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PlayerStatsCoverage: new FormControl<boolean | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Season {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		CompetitionId?: number | null;
		CompetitionName?: string | null;
		CurrentSeason?: boolean | null;
		EndDate?: string | null;
		Name?: string | null;
		Rounds?: Array<Round>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season1?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonId?: number | null;
		StartDate?: string | null;
	}
	export interface SeasonFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		CompetitionId: FormControl<number | null | undefined>,
		CompetitionName: FormControl<string | null | undefined>,
		CurrentSeason: FormControl<boolean | null | undefined>,
		EndDate: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season1: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		CurrentWeek?: number | null;
		EndDate?: string | null;
		Name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RoundId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType?: number | null;
		StartDate?: string | null;
		Type?: string | null;
	}
	export interface RoundFormProperties {
		CurrentRound: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		CurrentWeek: FormControl<number | null | undefined>,
		EndDate: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RoundId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AreaId?: number | null;
		AreaName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		CompetitionId?: number | null;
		CurrentSeason?: Season;
		Format?: string | null;
		Games?: Array<Game>;
		Gender?: string | null;
		Name?: string | null;
		PlayerStatsCoverage?: boolean | null;
		Seasons?: Array<Season>;
		Teams?: Array<TeamDetail>;
		Type?: string | null;
	}
	export interface CompetitionDetailFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AreaId: FormControl<number | null | undefined>,
		AreaName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		CompetitionId: FormControl<number | null | undefined>,
		Format: FormControl<string | null | undefined>,
		Gender: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PlayerStatsCoverage: FormControl<boolean | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateCompetitionDetailFormGroup() {
		return new FormGroup<CompetitionDetailFormProperties>({
			AreaId: new FormControl<number | null | undefined>(undefined),
			AreaName: new FormControl<string | null | undefined>(undefined),
			CompetitionId: new FormControl<number | null | undefined>(undefined),
			Format: new FormControl<string | null | undefined>(undefined),
			Gender: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PlayerStatsCoverage: new FormControl<boolean | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Game {
		BestOf?: string | null;
		DateTime?: string | null;
		Day?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DrawMoneyLine?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GameId?: number | null;
		Group?: string | null;
		IsClosed?: boolean | null;

		/** Type: double */
		PointSpread?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RoundId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType?: number | null;
		Status?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamAId?: number | null;
		TeamAKey?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamAMoneyLine?: number | null;
		TeamAName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamAPointSpreadPayout?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamAScore?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamBId?: number | null;
		TeamBKey?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamBMoneyLine?: number | null;
		TeamBName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamBPointSpreadPayout?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamBScore?: number | null;
		Updated?: string | null;
		UpdatedUtc?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		VenueId?: number | null;
		VenueType?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Week?: number | null;
		Winner?: string | null;
	}
	export interface GameFormProperties {
		BestOf: FormControl<string | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DrawMoneyLine: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GameId: FormControl<number | null | undefined>,
		Group: FormControl<string | null | undefined>,
		IsClosed: FormControl<boolean | null | undefined>,

		/** Type: double */
		PointSpread: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RoundId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamAId: FormControl<number | null | undefined>,
		TeamAKey: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamAMoneyLine: FormControl<number | null | undefined>,
		TeamAName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamAPointSpreadPayout: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamAScore: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamBId: FormControl<number | null | undefined>,
		TeamBKey: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamBMoneyLine: FormControl<number | null | undefined>,
		TeamBName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamBPointSpreadPayout: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamBScore: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
		UpdatedUtc: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		VenueId: FormControl<number | null | undefined>,
		VenueType: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Week: FormControl<number | null | undefined>,
		Winner: FormControl<string | null | undefined>,
	}
	export function CreateGameFormGroup() {
		return new FormGroup<GameFormProperties>({
			BestOf: new FormControl<string | null | undefined>(undefined),
			DateTime: new FormControl<string | null | undefined>(undefined),
			Day: new FormControl<string | null | undefined>(undefined),
			DrawMoneyLine: new FormControl<number | null | undefined>(undefined),
			GameId: new FormControl<number | null | undefined>(undefined),
			Group: new FormControl<string | null | undefined>(undefined),
			IsClosed: new FormControl<boolean | null | undefined>(undefined),
			PointSpread: new FormControl<number | null | undefined>(undefined),
			RoundId: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			TeamAId: new FormControl<number | null | undefined>(undefined),
			TeamAKey: new FormControl<string | null | undefined>(undefined),
			TeamAMoneyLine: new FormControl<number | null | undefined>(undefined),
			TeamAName: new FormControl<string | null | undefined>(undefined),
			TeamAPointSpreadPayout: new FormControl<number | null | undefined>(undefined),
			TeamAScore: new FormControl<number | null | undefined>(undefined),
			TeamBId: new FormControl<number | null | undefined>(undefined),
			TeamBKey: new FormControl<string | null | undefined>(undefined),
			TeamBMoneyLine: new FormControl<number | null | undefined>(undefined),
			TeamBName: new FormControl<string | null | undefined>(undefined),
			TeamBPointSpreadPayout: new FormControl<number | null | undefined>(undefined),
			TeamBScore: new FormControl<number | null | undefined>(undefined),
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AreaId?: number | null;
		AreaName?: string | null;
		Email?: string | null;
		Facebook?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Founded?: number | null;
		Gender?: string | null;
		Instagram?: string | null;
		Key?: string | null;
		Name?: string | null;
		Players?: Array<Player>;
		PrimaryColor?: string | null;
		QuaternaryColor?: string | null;
		SecondaryColor?: string | null;
		ShortName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamId?: number | null;
		TertiaryColor?: string | null;
		Twitter?: string | null;
		Type?: string | null;
		Website?: string | null;
		YouTube?: string | null;
	}
	export interface TeamDetailFormProperties {
		Active: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AreaId: FormControl<number | null | undefined>,
		AreaName: FormControl<string | null | undefined>,
		Email: FormControl<string | null | undefined>,
		Facebook: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Founded: FormControl<number | null | undefined>,
		Gender: FormControl<string | null | undefined>,
		Instagram: FormControl<string | null | undefined>,
		Key: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PrimaryColor: FormControl<string | null | undefined>,
		QuaternaryColor: FormControl<string | null | undefined>,
		SecondaryColor: FormControl<string | null | undefined>,
		ShortName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamId: FormControl<number | null | undefined>,
		TertiaryColor: FormControl<string | null | undefined>,
		Twitter: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Website: FormControl<string | null | undefined>,
		YouTube: FormControl<string | null | undefined>,
	}
	export function CreateTeamDetailFormGroup() {
		return new FormGroup<TeamDetailFormProperties>({
			Active: new FormControl<boolean | null | undefined>(undefined),
			AreaId: new FormControl<number | null | undefined>(undefined),
			AreaName: new FormControl<string | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			Facebook: new FormControl<string | null | undefined>(undefined),
			Founded: new FormControl<number | null | undefined>(undefined),
			Gender: new FormControl<string | null | undefined>(undefined),
			Instagram: new FormControl<string | null | undefined>(undefined),
			Key: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PrimaryColor: new FormControl<string | null | undefined>(undefined),
			QuaternaryColor: new FormControl<string | null | undefined>(undefined),
			SecondaryColor: new FormControl<string | null | undefined>(undefined),
			ShortName: new FormControl<string | null | undefined>(undefined),
			TeamId: new FormControl<number | null | undefined>(undefined),
			TertiaryColor: new FormControl<string | null | undefined>(undefined),
			Twitter: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			Website: new FormControl<string | null | undefined>(undefined),
			YouTube: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Player {
		BirthCity?: string | null;
		BirthCountry?: string | null;
		BirthDate?: string | null;
		CommonName?: string | null;
		FirstName?: string | null;
		Gender?: string | null;
		LastName?: string | null;
		MatchName?: string | null;
		Nationality?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerId?: number | null;
		Position?: string | null;
		Updated?: string | null;
	}
	export interface PlayerFormProperties {
		BirthCity: FormControl<string | null | undefined>,
		BirthCountry: FormControl<string | null | undefined>,
		BirthDate: FormControl<string | null | undefined>,
		CommonName: FormControl<string | null | undefined>,
		FirstName: FormControl<string | null | undefined>,
		Gender: FormControl<string | null | undefined>,
		LastName: FormControl<string | null | undefined>,
		MatchName: FormControl<string | null | undefined>,
		Nationality: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerId: FormControl<number | null | undefined>,
		Position: FormControl<string | null | undefined>,
		Updated: FormControl<string | null | undefined>,
	}
	export function CreatePlayerFormGroup() {
		return new FormGroup<PlayerFormProperties>({
			BirthCity: new FormControl<string | null | undefined>(undefined),
			BirthCountry: new FormControl<string | null | undefined>(undefined),
			BirthDate: new FormControl<string | null | undefined>(undefined),
			CommonName: new FormControl<string | null | undefined>(undefined),
			FirstName: new FormControl<string | null | undefined>(undefined),
			Gender: new FormControl<string | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
			MatchName: new FormControl<string | null | undefined>(undefined),
			Nationality: new FormControl<string | null | undefined>(undefined),
			PlayerId: new FormControl<number | null | undefined>(undefined),
			Position: new FormControl<string | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Membership {
		Active?: boolean | null;
		EndDate?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		MembershipId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerId?: number | null;
		PlayerName?: string | null;
		StartDate?: string | null;
		TeamArea?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamId?: number | null;
		TeamName?: string | null;
		Updated?: string | null;
	}
	export interface MembershipFormProperties {
		Active: FormControl<boolean | null | undefined>,
		EndDate: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		MembershipId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerId: FormControl<number | null | undefined>,
		PlayerName: FormControl<string | null | undefined>,
		StartDate: FormControl<string | null | undefined>,
		TeamArea: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonTeamId?: number | null;
		Team?: Team;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamId?: number | null;
		TeamName?: string | null;
		Type?: string | null;
	}
	export interface SeasonTeamFormProperties {
		Active: FormControl<boolean | null | undefined>,
		Gender: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonTeamId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Games?: number | null;
		Group?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Losses?: number | null;
		Name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Order?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Points?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RoundId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreAgainst?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreDifference?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreFor?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StandingId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Wins?: number | null;
	}
	export interface StandingFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Games: FormControl<number | null | undefined>,
		Group: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Losses: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Order: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Points: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RoundId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreAgainst: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreDifference: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreFor: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StandingId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Wins: FormControl<number | null | undefined>,
	}
	export function CreateStandingFormGroup() {
		return new FormGroup<StandingFormProperties>({
			Games: new FormControl<number | null | undefined>(undefined),
			Group: new FormControl<string | null | undefined>(undefined),
			Losses: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Order: new FormControl<number | null | undefined>(undefined),
			Points: new FormControl<number | null | undefined>(undefined),
			RoundId: new FormControl<number | null | undefined>(undefined),
			ScoreAgainst: new FormControl<number | null | undefined>(undefined),
			ScoreDifference: new FormControl<number | null | undefined>(undefined),
			ScoreFor: new FormControl<number | null | undefined>(undefined),
			StandingId: new FormControl<number | null | undefined>(undefined),
			TeamId: new FormControl<number | null | undefined>(undefined),
			Wins: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Team {
		Active?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AreaId?: number | null;
		AreaName?: string | null;
		Email?: string | null;
		Facebook?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Founded?: number | null;
		Gender?: string | null;
		Instagram?: string | null;
		Key?: string | null;
		Name?: string | null;
		PrimaryColor?: string | null;
		QuaternaryColor?: string | null;
		SecondaryColor?: string | null;
		ShortName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamId?: number | null;
		TertiaryColor?: string | null;
		Twitter?: string | null;
		Type?: string | null;
		Website?: string | null;
		YouTube?: string | null;
	}
	export interface TeamFormProperties {
		Active: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AreaId: FormControl<number | null | undefined>,
		AreaName: FormControl<string | null | undefined>,
		Email: FormControl<string | null | undefined>,
		Facebook: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Founded: FormControl<number | null | undefined>,
		Gender: FormControl<string | null | undefined>,
		Instagram: FormControl<string | null | undefined>,
		Key: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PrimaryColor: FormControl<string | null | undefined>,
		QuaternaryColor: FormControl<string | null | undefined>,
		SecondaryColor: FormControl<string | null | undefined>,
		ShortName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamId: FormControl<number | null | undefined>,
		TertiaryColor: FormControl<string | null | undefined>,
		Twitter: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Website: FormControl<string | null | undefined>,
		YouTube: FormControl<string | null | undefined>,
	}
	export function CreateTeamFormGroup() {
		return new FormGroup<TeamFormProperties>({
			Active: new FormControl<boolean | null | undefined>(undefined),
			AreaId: new FormControl<number | null | undefined>(undefined),
			AreaName: new FormControl<string | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			Facebook: new FormControl<string | null | undefined>(undefined),
			Founded: new FormControl<number | null | undefined>(undefined),
			Gender: new FormControl<string | null | undefined>(undefined),
			Instagram: new FormControl<string | null | undefined>(undefined),
			Key: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PrimaryColor: new FormControl<string | null | undefined>(undefined),
			QuaternaryColor: new FormControl<string | null | undefined>(undefined),
			SecondaryColor: new FormControl<string | null | undefined>(undefined),
			ShortName: new FormControl<string | null | undefined>(undefined),
			TeamId: new FormControl<number | null | undefined>(undefined),
			TertiaryColor: new FormControl<string | null | undefined>(undefined),
			Twitter: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			Website: new FormControl<string | null | undefined>(undefined),
			YouTube: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Venue {
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
		Nickname1?: string | null;
		Nickname2?: string | null;
		Open?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Opened?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		VenueId?: number | null;
		Zip?: string | null;
	}
	export interface VenueFormProperties {
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
		Nickname1: FormControl<string | null | undefined>,
		Nickname2: FormControl<string | null | undefined>,
		Open: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Opened: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		VenueId: FormControl<number | null | undefined>,
		Zip: FormControl<string | null | undefined>,
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
			Open: new FormControl<boolean | null | undefined>(undefined),
			Opened: new FormControl<number | null | undefined>(undefined),
			VenueId: new FormControl<number | null | undefined>(undefined),
			Zip: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Memberships (Active)
		 * Memberships (Active)
		 * Get {format}/ActiveMemberships
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 */
		MembershipsActive(format: MembershipsActiveFormat): Observable<Array<Membership>> {
			return this.http.get<Array<Membership>>(this.baseUri + format + '/ActiveMemberships', {});
		}

		/**
		 * Areas (Countries)
		 * Areas (Countries)
		 * Get {format}/Areas
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 */
		AreasCountries(format: MembershipsActiveFormat): Observable<Array<Area>> {
			return this.http.get<Array<Area>>(this.baseUri + format + '/Areas', {});
		}

		/**
		 * Box Score
		 * Box Scores by Date
		 * Get {format}/BoxScore/{gameid}
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} gameid Unique GameId for the desired box scores. Examples: <code>100000091</code>
		 */
		BoxScore(format: MembershipsActiveFormat, gameid: string): Observable<Array<BoxScore>> {
			return this.http.get<Array<BoxScore>>(this.baseUri + format + '/BoxScore/' + (gameid == null ? '' : encodeURIComponent(gameid)) + '', {});
		}

		/**
		 * Box Scores by Date
		 * Box Scores by Date
		 * Get {format}/BoxScores/{date}
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s).
		 * <br>Examples: <code>2018-01-13</code>, <code>2018-06-13</code>.
		 */
		BoxScoresByDate(format: MembershipsActiveFormat, date: string): Observable<Array<BoxScore>> {
			return this.http.get<Array<BoxScore>>(this.baseUri + format + '/BoxScores/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * Competition Fixtures (League Details)
		 * Competition Fixtures (League Details)
		 * Get {format}/CompetitionDetails/{competitionid}
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} competitionid A CS:GO competition/league unique CompetitionId. Possible values include: <code>100000009</code>, etc.
		 */
		CompetitionFixturesLeagueDetails(format: MembershipsActiveFormat, competitionid: string): Observable<CompetitionDetail> {
			return this.http.get<CompetitionDetail>(this.baseUri + format + '/CompetitionDetails/' + (competitionid == null ? '' : encodeURIComponent(competitionid)) + '', {});
		}

		/**
		 * Competitions (Leagues)
		 * Competitions (Leagues)
		 * Get {format}/Competitions
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 */
		CompetitionsLeagues(format: MembershipsActiveFormat): Observable<Array<Competition>> {
			return this.http.get<Array<Competition>>(this.baseUri + format + '/Competitions', {});
		}

		/**
		 * Games by Date
		 * Games by Date
		 * Get {format}/GamesByDate/{date}
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s).
		 * <br>Examples: <code>2018-01-13</code>, <code>2018-06-13</code>.
		 */
		GamesByDate(format: MembershipsActiveFormat, date: string): Observable<Array<Game>> {
			return this.http.get<Array<Game>>(this.baseUri + format + '/GamesByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * Memberships (Historical)
		 * Memberships (Historical)
		 * Get {format}/HistoricalMemberships
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 */
		MembershipsHistorical(format: MembershipsActiveFormat): Observable<Array<Membership>> {
			return this.http.get<Array<Membership>>(this.baseUri + format + '/HistoricalMemberships', {});
		}

		/**
		 * Memberships by Team (Historical)
		 * Memberships by Team (Historical)
		 * Get {format}/HistoricalMembershipsByTeam/{teamid}
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} teamid Unique FantasyData Team ID. 
		 * Example:<code>100000001</code>.
		 */
		MembershipsByTeamHistorical(format: MembershipsActiveFormat, teamid: string): Observable<Array<Membership>> {
			return this.http.get<Array<Membership>>(this.baseUri + format + '/HistoricalMembershipsByTeam/' + (teamid == null ? '' : encodeURIComponent(teamid)) + '', {});
		}

		/**
		 * Memberships by Team (Active)
		 * Memberships by Team (Active)
		 * Get {format}/MembershipsByTeam/{teamid}
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} teamid Unique FantasyData Team ID. 
		 * Example:<code>100000001</code>.
		 */
		MembershipsByTeamActive(format: MembershipsActiveFormat, teamid: string): Observable<Array<Membership>> {
			return this.http.get<Array<Membership>>(this.baseUri + format + '/MembershipsByTeam/' + (teamid == null ? '' : encodeURIComponent(teamid)) + '', {});
		}

		/**
		 * Player
		 * Player
		 * Get {format}/Player/{playerid}
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} playerid Unique FantasyData Player ID.
		 * Example:<code>100000576</code>.
		 */
		Player(format: MembershipsActiveFormat, playerid: string): Observable<Player> {
			return this.http.get<Player>(this.baseUri + format + '/Player/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}

		/**
		 * Players
		 * Players
		 * Get {format}/Players
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 */
		Players(format: MembershipsActiveFormat): Observable<Array<Player>> {
			return this.http.get<Array<Player>>(this.baseUri + format + '/Players', {});
		}

		/**
		 * Players by Team
		 * Players by Team
		 * Get {format}/PlayersByTeam/{teamid}
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} teamid Unique FantasyData Team ID. 
		 * Example:<code>100000001</code>.
		 */
		PlayersByTeam(format: MembershipsActiveFormat, teamid: string): Observable<Array<Player>> {
			return this.http.get<Array<Player>>(this.baseUri + format + '/PlayersByTeam/' + (teamid == null ? '' : encodeURIComponent(teamid)) + '', {});
		}

		/**
		 * Schedule
		 * Schedule
		 * Get {format}/Schedule/{roundid}
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} roundid Unique FantasyData Round ID. RoundIDs can be found in the Competitions and Competition Details endpoints. 
		 * Examples: <code>100000138</code>, <code>1000001412</code>, etc
		 */
		Schedule(format: MembershipsActiveFormat, roundid: string): Observable<Array<Game>> {
			return this.http.get<Array<Game>>(this.baseUri + format + '/Schedule/' + (roundid == null ? '' : encodeURIComponent(roundid)) + '', {});
		}

		/**
		 * Season Teams
		 * Season Teams
		 * Get {format}/SeasonTeams/{seasonid}
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} seasonid Unique FantasyData Season ID. SeasonIDs can be found in the Competitions and Competition Details endpoints. 
		 * Examples: <code>100000023</code>, <code>100000024</code>, etc
		 */
		SeasonTeams(format: MembershipsActiveFormat, seasonid: string): Observable<Array<SeasonTeam>> {
			return this.http.get<Array<SeasonTeam>>(this.baseUri + format + '/SeasonTeams/' + (seasonid == null ? '' : encodeURIComponent(seasonid)) + '', {});
		}

		/**
		 * Standings
		 * Schedule
		 * Get {format}/Standings/{roundid}
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} roundid Unique FantasyData Round ID. RoundIDs can be found in the Competitions and Competition Details endpoints. 
		 * Example: <code>100000138</code>, etc
		 */
		Standings(format: MembershipsActiveFormat, roundid: string): Observable<Array<Standing>> {
			return this.http.get<Array<Standing>>(this.baseUri + format + '/Standings/' + (roundid == null ? '' : encodeURIComponent(roundid)) + '', {});
		}

		/**
		 * Teams
		 * Teams
		 * Get {format}/Teams
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 */
		Teams(format: MembershipsActiveFormat): Observable<Array<Team>> {
			return this.http.get<Array<Team>>(this.baseUri + format + '/Teams', {});
		}

		/**
		 * Venues
		 * Venues
		 * Get {format}/Venues
		 * @param {MembershipsActiveFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 */
		Venues(format: MembershipsActiveFormat): Observable<Array<Venue>> {
			return this.http.get<Array<Venue>>(this.baseUri + format + '/Venues', {});
		}
	}

	export enum MembershipsActiveFormat { xml = 'xml', json = 'json' }

}

