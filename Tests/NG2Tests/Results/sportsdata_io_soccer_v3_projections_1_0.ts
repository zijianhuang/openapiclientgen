import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface PlayerGameProjection {
		Assists?: number | null;
		BlockedShots?: number | null;
		Captain?: boolean | null;
		CornersWon?: number | null;
		Crosses?: number | null;
		DateTime?: string | null;
		Day?: string | null;
		DefenderCleanSheets?: number | null;
		DraftKingsPosition?: string | null;
		DraftKingsSalary?: number | null;
		FanDuelPosition?: string | null;
		FanDuelSalary?: number | null;
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
		InjuryBodyPart?: string | null;
		InjuryNotes?: string | null;
		InjuryStartDate?: string | null;
		InjuryStatus?: string | null;
		Interceptions?: number | null;
		IsGameOver?: boolean | null;
		Jersey?: number | null;
		LastManTackle?: number | null;
		Minutes?: number | null;
		MondogoalPosition?: string | null;
		MondogoalSalary?: number | null;
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
		PlayerId?: number | null;
		Position?: string | null;
		PositionCategory?: string | null;
		RedCards?: number | null;
		RoundId?: number | null;
		Score?: number | null;
		Season?: number | null;
		SeasonType?: number | null;
		ShortName?: string | null;
		Shots?: number | null;
		ShotsOnGoal?: number | null;
		Started?: number | null;
		StatId?: number | null;
		Suspension?: boolean | null;
		SuspensionReason?: string | null;
		TacklesWon?: number | null;
		Team?: string | null;
		TeamId?: number | null;
		Touches?: number | null;
		Updated?: string | null;
		UpdatedUtc?: string | null;
		YahooPosition?: string | null;
		YahooSalary?: number | null;
		YellowCards?: number | null;
		YellowRedCards?: number | null;
	}
	export interface PlayerGameProjectionFormProperties {
		Assists: FormControl<number | null | undefined>,
		BlockedShots: FormControl<number | null | undefined>,
		Captain: FormControl<boolean | null | undefined>,
		CornersWon: FormControl<number | null | undefined>,
		Crosses: FormControl<number | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,
		DefenderCleanSheets: FormControl<number | null | undefined>,
		DraftKingsPosition: FormControl<string | null | undefined>,
		DraftKingsSalary: FormControl<number | null | undefined>,
		FanDuelPosition: FormControl<string | null | undefined>,
		FanDuelSalary: FormControl<number | null | undefined>,
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
		InjuryBodyPart: FormControl<string | null | undefined>,
		InjuryNotes: FormControl<string | null | undefined>,
		InjuryStartDate: FormControl<string | null | undefined>,
		InjuryStatus: FormControl<string | null | undefined>,
		Interceptions: FormControl<number | null | undefined>,
		IsGameOver: FormControl<boolean | null | undefined>,
		Jersey: FormControl<number | null | undefined>,
		LastManTackle: FormControl<number | null | undefined>,
		Minutes: FormControl<number | null | undefined>,
		MondogoalPosition: FormControl<string | null | undefined>,
		MondogoalSalary: FormControl<number | null | undefined>,
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
		PlayerId: FormControl<number | null | undefined>,
		Position: FormControl<string | null | undefined>,
		PositionCategory: FormControl<string | null | undefined>,
		RedCards: FormControl<number | null | undefined>,
		RoundId: FormControl<number | null | undefined>,
		Score: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		ShortName: FormControl<string | null | undefined>,
		Shots: FormControl<number | null | undefined>,
		ShotsOnGoal: FormControl<number | null | undefined>,
		Started: FormControl<number | null | undefined>,
		StatId: FormControl<number | null | undefined>,
		Suspension: FormControl<boolean | null | undefined>,
		SuspensionReason: FormControl<string | null | undefined>,
		TacklesWon: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,
		TeamId: FormControl<number | null | undefined>,
		Touches: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
		UpdatedUtc: FormControl<string | null | undefined>,
		YahooPosition: FormControl<string | null | undefined>,
		YahooSalary: FormControl<number | null | undefined>,
		YellowCards: FormControl<number | null | undefined>,
		YellowRedCards: FormControl<number | null | undefined>,
	}
	export function CreatePlayerGameProjectionFormGroup() {
		return new FormGroup<PlayerGameProjectionFormProperties>({
			Assists: new FormControl<number | null | undefined>(undefined),
			BlockedShots: new FormControl<number | null | undefined>(undefined),
			Captain: new FormControl<boolean | null | undefined>(undefined),
			CornersWon: new FormControl<number | null | undefined>(undefined),
			Crosses: new FormControl<number | null | undefined>(undefined),
			DateTime: new FormControl<string | null | undefined>(undefined),
			Day: new FormControl<string | null | undefined>(undefined),
			DefenderCleanSheets: new FormControl<number | null | undefined>(undefined),
			DraftKingsPosition: new FormControl<string | null | undefined>(undefined),
			DraftKingsSalary: new FormControl<number | null | undefined>(undefined),
			FanDuelPosition: new FormControl<string | null | undefined>(undefined),
			FanDuelSalary: new FormControl<number | null | undefined>(undefined),
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
			InjuryBodyPart: new FormControl<string | null | undefined>(undefined),
			InjuryNotes: new FormControl<string | null | undefined>(undefined),
			InjuryStartDate: new FormControl<string | null | undefined>(undefined),
			InjuryStatus: new FormControl<string | null | undefined>(undefined),
			Interceptions: new FormControl<number | null | undefined>(undefined),
			IsGameOver: new FormControl<boolean | null | undefined>(undefined),
			Jersey: new FormControl<number | null | undefined>(undefined),
			LastManTackle: new FormControl<number | null | undefined>(undefined),
			Minutes: new FormControl<number | null | undefined>(undefined),
			MondogoalPosition: new FormControl<string | null | undefined>(undefined),
			MondogoalSalary: new FormControl<number | null | undefined>(undefined),
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
			PlayerId: new FormControl<number | null | undefined>(undefined),
			Position: new FormControl<string | null | undefined>(undefined),
			PositionCategory: new FormControl<string | null | undefined>(undefined),
			RedCards: new FormControl<number | null | undefined>(undefined),
			RoundId: new FormControl<number | null | undefined>(undefined),
			Score: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			ShortName: new FormControl<string | null | undefined>(undefined),
			Shots: new FormControl<number | null | undefined>(undefined),
			ShotsOnGoal: new FormControl<number | null | undefined>(undefined),
			Started: new FormControl<number | null | undefined>(undefined),
			StatId: new FormControl<number | null | undefined>(undefined),
			Suspension: new FormControl<boolean | null | undefined>(undefined),
			SuspensionReason: new FormControl<string | null | undefined>(undefined),
			TacklesWon: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamId: new FormControl<number | null | undefined>(undefined),
			Touches: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
			UpdatedUtc: new FormControl<string | null | undefined>(undefined),
			YahooPosition: new FormControl<string | null | undefined>(undefined),
			YahooSalary: new FormControl<number | null | undefined>(undefined),
			YellowCards: new FormControl<number | null | undefined>(undefined),
			YellowRedCards: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Projected Player Game Stats by Competition (w/ DFS Salaries)
		 * Get {format}/PlayerGameProjectionStatsByCompetition/{competition}/{date}
		 * @param {ProjectedPlayerGameStatsByCompetitionWDfsSalariesFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} competition An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.
		 * @param {string} date The date of the game(s).
		 * <br>Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.
		 * @return {Array<PlayerGameProjection>} 
		 */
		ProjectedPlayerGameStatsByCompetitionWDfsSalaries(format: ProjectedPlayerGameStatsByCompetitionWDfsSalariesFormat, competition: string, date: string): Observable<Array<PlayerGameProjection>> {
			return this.http.get<Array<PlayerGameProjection>>(this.baseUri + format + '/PlayerGameProjectionStatsByCompetition/' + (competition == null ? '' : encodeURIComponent(competition)) + '/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * Projected Player Game Stats by Date (w/ DFS Salaries)
		 * Get {format}/PlayerGameProjectionStatsByDate/{date}
		 * @param {ProjectedPlayerGameStatsByCompetitionWDfsSalariesFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s).
		 * <br>Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.
		 * @return {Array<PlayerGameProjection>} 
		 */
		ProjectedPlayerGameStatsByDateWDfsSalaries(format: ProjectedPlayerGameStatsByCompetitionWDfsSalariesFormat, date: string): Observable<Array<PlayerGameProjection>> {
			return this.http.get<Array<PlayerGameProjection>>(this.baseUri + format + '/PlayerGameProjectionStatsByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * Projected Player Game Stats by Player (w/ DFS Salaries)
		 * Get {format}/PlayerGameProjectionStatsByPlayer/{date}/{playerid}
		 * @param {ProjectedPlayerGameStatsByCompetitionWDfsSalariesFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s).
		 * <br>Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.
		 * @param {string} playerid Unique FantasyData Player ID.
		 * Example:<code>90026231</code>.
		 * @return {Array<PlayerGameProjection>} 
		 */
		ProjectedPlayerGameStatsByPlayerWDfsSalaries(format: ProjectedPlayerGameStatsByCompetitionWDfsSalariesFormat, date: string, playerid: string): Observable<Array<PlayerGameProjection>> {
			return this.http.get<Array<PlayerGameProjection>>(this.baseUri + format + '/PlayerGameProjectionStatsByPlayer/' + (date == null ? '' : encodeURIComponent(date)) + '/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}
	}

	export enum ProjectedPlayerGameStatsByCompetitionWDfsSalariesFormat { xml = 0, json = 1 }

}

