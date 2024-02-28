import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface PlayerGameProjection {

		/** Type: double */
		Assists?: number | null;

		/** Type: double */
		BlockedShots?: number | null;
		Captain?: boolean | null;

		/** Type: double */
		CornersWon?: number | null;

		/** Type: double */
		Crosses?: number | null;
		DateTime?: string | null;
		Day?: string | null;

		/** Type: double */
		DefenderCleanSheets?: number | null;
		DraftKingsPosition?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DraftKingsSalary?: number | null;
		FanDuelPosition?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FanDuelSalary?: number | null;

		/** Type: double */
		FantasyPoints?: number | null;

		/** Type: double */
		FantasyPointsDraftKings?: number | null;

		/** Type: double */
		FantasyPointsFanDuel?: number | null;

		/** Type: double */
		FantasyPointsMondogoal?: number | null;

		/** Type: double */
		FantasyPointsYahoo?: number | null;

		/** Type: double */
		Fouled?: number | null;

		/** Type: double */
		Fouls?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GameId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Games?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalGameId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalOpponentId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamId?: number | null;

		/** Type: double */
		GoalkeeperCleanSheets?: number | null;

		/** Type: double */
		GoalkeeperGoalsAgainst?: number | null;

		/** Type: double */
		GoalkeeperSaves?: number | null;

		/** Type: double */
		GoalkeeperSingleGoalAgainst?: number | null;

		/** Type: double */
		GoalkeeperWins?: number | null;

		/** Type: double */
		Goals?: number | null;
		HomeOrAway?: string | null;
		InjuryBodyPart?: string | null;
		InjuryNotes?: string | null;
		InjuryStartDate?: string | null;
		InjuryStatus?: string | null;

		/** Type: double */
		Interceptions?: number | null;
		IsGameOver?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Jersey?: number | null;

		/** Type: double */
		LastManTackle?: number | null;

		/** Type: double */
		Minutes?: number | null;
		MondogoalPosition?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		MondogoalSalary?: number | null;
		Name?: string | null;

		/** Type: double */
		Offsides?: number | null;
		Opponent?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentId?: number | null;

		/** Type: double */
		OpponentScore?: number | null;

		/** Type: double */
		OwnGoals?: number | null;

		/** Type: double */
		Passes?: number | null;

		/** Type: double */
		PassesCompleted?: number | null;

		/** Type: double */
		PenaltiesConceded?: number | null;

		/** Type: double */
		PenaltiesWon?: number | null;

		/** Type: double */
		PenaltyKickGoals?: number | null;

		/** Type: double */
		PenaltyKickMisses?: number | null;

		/** Type: double */
		PenaltyKickSaves?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerId?: number | null;
		Position?: string | null;
		PositionCategory?: string | null;

		/** Type: double */
		RedCards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RoundId?: number | null;

		/** Type: double */
		Score?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType?: number | null;
		ShortName?: string | null;

		/** Type: double */
		Shots?: number | null;

		/** Type: double */
		ShotsOnGoal?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Started?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StatId?: number | null;
		Suspension?: boolean | null;
		SuspensionReason?: string | null;

		/** Type: double */
		TacklesWon?: number | null;
		Team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamId?: number | null;

		/** Type: double */
		Touches?: number | null;
		Updated?: string | null;
		UpdatedUtc?: string | null;
		YahooPosition?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		YahooSalary?: number | null;

		/** Type: double */
		YellowCards?: number | null;

		/** Type: double */
		YellowRedCards?: number | null;
	}
	export interface PlayerGameProjectionFormProperties {

		/** Type: double */
		Assists: FormControl<number | null | undefined>,

		/** Type: double */
		BlockedShots: FormControl<number | null | undefined>,
		Captain: FormControl<boolean | null | undefined>,

		/** Type: double */
		CornersWon: FormControl<number | null | undefined>,

		/** Type: double */
		Crosses: FormControl<number | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,

		/** Type: double */
		DefenderCleanSheets: FormControl<number | null | undefined>,
		DraftKingsPosition: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		DraftKingsSalary: FormControl<number | null | undefined>,
		FanDuelPosition: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FanDuelSalary: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPoints: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPointsDraftKings: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPointsFanDuel: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPointsMondogoal: FormControl<number | null | undefined>,

		/** Type: double */
		FantasyPointsYahoo: FormControl<number | null | undefined>,

		/** Type: double */
		Fouled: FormControl<number | null | undefined>,

		/** Type: double */
		Fouls: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GameId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Games: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalGameId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalOpponentId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalTeamId: FormControl<number | null | undefined>,

		/** Type: double */
		GoalkeeperCleanSheets: FormControl<number | null | undefined>,

		/** Type: double */
		GoalkeeperGoalsAgainst: FormControl<number | null | undefined>,

		/** Type: double */
		GoalkeeperSaves: FormControl<number | null | undefined>,

		/** Type: double */
		GoalkeeperSingleGoalAgainst: FormControl<number | null | undefined>,

		/** Type: double */
		GoalkeeperWins: FormControl<number | null | undefined>,

		/** Type: double */
		Goals: FormControl<number | null | undefined>,
		HomeOrAway: FormControl<string | null | undefined>,
		InjuryBodyPart: FormControl<string | null | undefined>,
		InjuryNotes: FormControl<string | null | undefined>,
		InjuryStartDate: FormControl<string | null | undefined>,
		InjuryStatus: FormControl<string | null | undefined>,

		/** Type: double */
		Interceptions: FormControl<number | null | undefined>,
		IsGameOver: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Jersey: FormControl<number | null | undefined>,

		/** Type: double */
		LastManTackle: FormControl<number | null | undefined>,

		/** Type: double */
		Minutes: FormControl<number | null | undefined>,
		MondogoalPosition: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		MondogoalSalary: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: double */
		Offsides: FormControl<number | null | undefined>,
		Opponent: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OpponentId: FormControl<number | null | undefined>,

		/** Type: double */
		OpponentScore: FormControl<number | null | undefined>,

		/** Type: double */
		OwnGoals: FormControl<number | null | undefined>,

		/** Type: double */
		Passes: FormControl<number | null | undefined>,

		/** Type: double */
		PassesCompleted: FormControl<number | null | undefined>,

		/** Type: double */
		PenaltiesConceded: FormControl<number | null | undefined>,

		/** Type: double */
		PenaltiesWon: FormControl<number | null | undefined>,

		/** Type: double */
		PenaltyKickGoals: FormControl<number | null | undefined>,

		/** Type: double */
		PenaltyKickMisses: FormControl<number | null | undefined>,

		/** Type: double */
		PenaltyKickSaves: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerId: FormControl<number | null | undefined>,
		Position: FormControl<string | null | undefined>,
		PositionCategory: FormControl<string | null | undefined>,

		/** Type: double */
		RedCards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RoundId: FormControl<number | null | undefined>,

		/** Type: double */
		Score: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType: FormControl<number | null | undefined>,
		ShortName: FormControl<string | null | undefined>,

		/** Type: double */
		Shots: FormControl<number | null | undefined>,

		/** Type: double */
		ShotsOnGoal: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Started: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StatId: FormControl<number | null | undefined>,
		Suspension: FormControl<boolean | null | undefined>,
		SuspensionReason: FormControl<string | null | undefined>,

		/** Type: double */
		TacklesWon: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TeamId: FormControl<number | null | undefined>,

		/** Type: double */
		Touches: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
		UpdatedUtc: FormControl<string | null | undefined>,
		YahooPosition: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		YahooSalary: FormControl<number | null | undefined>,

		/** Type: double */
		YellowCards: FormControl<number | null | undefined>,

		/** Type: double */
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
		 */
		ProjectedPlayerGameStatsByPlayerWDfsSalaries(format: ProjectedPlayerGameStatsByCompetitionWDfsSalariesFormat, date: string, playerid: string): Observable<Array<PlayerGameProjection>> {
			return this.http.get<Array<PlayerGameProjection>>(this.baseUri + format + '/PlayerGameProjectionStatsByPlayer/' + (date == null ? '' : encodeURIComponent(date)) + '/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}
	}

	export enum ProjectedPlayerGameStatsByCompetitionWDfsSalariesFormat { xml = 'xml', json = 'json' }

}

