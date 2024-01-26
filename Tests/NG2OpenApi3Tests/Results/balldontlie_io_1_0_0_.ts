import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * all games (example parameters)
		 * all games (example parameters)
		 * Get api/v1/games
		 * @return {void} 
		 */
		AllGamesExampleParameters(seasons_: string | null | undefined, team_ids_: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/games?seasons_=' + (seasons_ == null ? '' : encodeURIComponent(seasons_)) + '&team_ids_=' + (team_ids_ == null ? '' : encodeURIComponent(team_ids_)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * specific game
		 * specific game
		 * Get api/v1/games/32881
		 * @return {void} 
		 */
		SpecificGame(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/games/32881', { observe: 'response', responseType: 'text' });
		}

		/**
		 * all players (search)
		 * all players (search)
		 * Get api/v1/players
		 * @return {void} 
		 */
		AllPlayersSearch(search: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/players?search=' + (search == null ? '' : encodeURIComponent(search)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * specific player
		 * specific player
		 * Get api/v1/players/237
		 * @return {void} 
		 */
		SpecificPlayer(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/players/237', { observe: 'response', responseType: 'text' });
		}

		/**
		 * all stats (example parameters)
		 * all stats (example parameters)
		 * Get api/v1/stats
		 * @return {void} 
		 */
		AllStatsExampleParameters(season_: string | null | undefined, player_ids_: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/stats?season_=' + (season_ == null ? '' : encodeURIComponent(season_)) + '&player_ids_=' + (player_ids_ == null ? '' : encodeURIComponent(player_ids_)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * all teams
		 * all teams
		 * Get api/v1/teams
		 * @return {void} 
		 */
		AllTeams(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/teams', { observe: 'response', responseType: 'text' });
		}

		/**
		 * specific team
		 * specific team
		 * Get api/v1/teams/1
		 * @return {void} 
		 */
		SpecificTeam(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/teams/1', { observe: 'response', responseType: 'text' });
		}
	}

}

