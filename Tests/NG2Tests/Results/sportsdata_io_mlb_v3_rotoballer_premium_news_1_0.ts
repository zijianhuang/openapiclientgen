import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface News {
		Author?: string | null;
		Categories?: string | null;
		Content?: string | null;
		NewsID?: number | null;
		PlayerID?: number | null;
		PlayerID2?: number | null;
		Source?: string | null;
		Team?: string | null;
		Team2?: string | null;
		TeamID?: number | null;
		TeamID2?: number | null;
		TermsOfUse?: string | null;
		TimeAgo?: string | null;
		Title?: string | null;
		Updated?: string | null;
		Url?: string | null;
	}
	export interface NewsFormProperties {
		Author: FormControl<string | null | undefined>,
		Categories: FormControl<string | null | undefined>,
		Content: FormControl<string | null | undefined>,
		NewsID: FormControl<number | null | undefined>,
		PlayerID: FormControl<number | null | undefined>,
		PlayerID2: FormControl<number | null | undefined>,
		Source: FormControl<string | null | undefined>,
		Team: FormControl<string | null | undefined>,
		Team2: FormControl<string | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
		TeamID2: FormControl<number | null | undefined>,
		TermsOfUse: FormControl<string | null | undefined>,
		TimeAgo: FormControl<string | null | undefined>,
		Title: FormControl<string | null | undefined>,
		Updated: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateNewsFormGroup() {
		return new FormGroup<NewsFormProperties>({
			Author: new FormControl<string | null | undefined>(undefined),
			Categories: new FormControl<string | null | undefined>(undefined),
			Content: new FormControl<string | null | undefined>(undefined),
			NewsID: new FormControl<number | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			PlayerID2: new FormControl<number | null | undefined>(undefined),
			Source: new FormControl<string | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			Team2: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			TeamID2: new FormControl<number | null | undefined>(undefined),
			TermsOfUse: new FormControl<string | null | undefined>(undefined),
			TimeAgo: new FormControl<string | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Premium News
		 * Get {format}/RotoBallerPremiumNews
		 * @param {PremiumNewsFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<News>} 
		 */
		PremiumNews(format: PremiumNewsFormat): Observable<Array<News>> {
			return this.http.get<Array<News>>(this.baseUri + format + '/RotoBallerPremiumNews', {});
		}

		/**
		 * Premium News by Date
		 * Get {format}/RotoBallerPremiumNewsByDate/{date}
		 * @param {PremiumNewsFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the news.
		 * <br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.
		 * @return {Array<News>} 
		 */
		PremiumNewsByDate(format: PremiumNewsFormat, date: string): Observable<Array<News>> {
			return this.http.get<Array<News>>(this.baseUri + format + '/RotoBallerPremiumNewsByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * Premium News by Player
		 * Get {format}/RotoBallerPremiumNewsByPlayerID/{playerid}
		 * @param {PremiumNewsFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} playerid Unique FantasyData Player ID.
		 * Example:<code>10000507</code>.
		 * @return {Array<News>} 
		 */
		PremiumNewsByPlayer(format: PremiumNewsFormat, playerid: string): Observable<Array<News>> {
			return this.http.get<Array<News>>(this.baseUri + format + '/RotoBallerPremiumNewsByPlayerID/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}
	}

	export enum PremiumNewsFormat { xml = 'xml', json = 'json' }

}

