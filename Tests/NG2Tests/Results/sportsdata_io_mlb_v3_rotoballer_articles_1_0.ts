import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Article {
		ArticleID?: number | null;
		Author?: string | null;
		Content?: string | null;
		Players?: Array<PlayerInfo>;
		Source?: string | null;
		TermsOfUse?: string | null;
		Title?: string | null;
		Updated?: string | null;
		Url?: string | null;
	}
	export interface ArticleFormProperties {
		ArticleID: FormControl<number | null | undefined>,
		Author: FormControl<string | null | undefined>,
		Content: FormControl<string | null | undefined>,
		Source: FormControl<string | null | undefined>,
		TermsOfUse: FormControl<string | null | undefined>,
		Title: FormControl<string | null | undefined>,
		Updated: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateArticleFormGroup() {
		return new FormGroup<ArticleFormProperties>({
			ArticleID: new FormControl<number | null | undefined>(undefined),
			Author: new FormControl<string | null | undefined>(undefined),
			Content: new FormControl<string | null | undefined>(undefined),
			Source: new FormControl<string | null | undefined>(undefined),
			TermsOfUse: new FormControl<string | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlayerInfo {
		Name?: string | null;
		PlayerID?: number | null;
		Position?: string | null;
		Team?: string | null;
		TeamID?: number | null;
	}
	export interface PlayerInfoFormProperties {
		Name: FormControl<string | null | undefined>,
		PlayerID: FormControl<number | null | undefined>,
		Position: FormControl<string | null | undefined>,
		Team: FormControl<string | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
	}
	export function CreatePlayerInfoFormGroup() {
		return new FormGroup<PlayerInfoFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			Position: new FormControl<string | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * RotoBaller Articles
		 * Get {format}/RotoBallerArticles
		 * @param {RotoballerArticlesFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<Article>} 
		 */
		RotoballerArticles(format: RotoballerArticlesFormat): Observable<Array<Article>> {
			return this.http.get<Array<Article>>(this.baseUri + format + '/RotoBallerArticles', {});
		}

		/**
		 * RotoBaller Articles By Date
		 * Get {format}/RotoBallerArticlesByDate/{date}
		 * @param {RotoballerArticlesFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the news.
		 * <br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.
		 * @return {Array<Article>} 
		 */
		RotoballerArticlesByDate(format: RotoballerArticlesFormat, date: string): Observable<Array<Article>> {
			return this.http.get<Array<Article>>(this.baseUri + format + '/RotoBallerArticlesByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * RotoBaller Articles By Player
		 * Get {format}/RotoBallerArticlesByPlayerID/{playerid}
		 * @param {RotoballerArticlesFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} playerid Unique FantasyData Player ID.
		 * Example:<code>10000507</code>.
		 * @return {Array<Article>} 
		 */
		RotoballerArticlesByPlayer(format: RotoballerArticlesFormat, playerid: string): Observable<Array<Article>> {
			return this.http.get<Array<Article>>(this.baseUri + format + '/RotoBallerArticlesByPlayerID/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}
	}

	export enum RotoballerArticlesFormat { xml = 'xml', json = 'json' }

}

