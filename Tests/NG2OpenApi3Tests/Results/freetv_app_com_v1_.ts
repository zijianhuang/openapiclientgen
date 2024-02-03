import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface LatestNewsResponse {

		/**
		 * Result of latest news list.
		 * Required
		 */
		getLatestNews: Array<NewsItem>;
	}
	export interface LatestNewsResponseFormProperties {
	}
	export function CreateLatestNewsResponseFormGroup() {
		return new FormGroup<LatestNewsResponseFormProperties>({
		});

	}

	export interface NewsItem {
		created?: string | null;
		ref?: string | null;
		subtitle?: string | null;
		thumbnail?: string | null;
		title?: string | null;
	}
	export interface NewsItemFormProperties {
		created: FormControl<string | null | undefined>,
		ref: FormControl<string | null | undefined>,
		subtitle: FormControl<string | null | undefined>,
		thumbnail: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateNewsItemFormGroup() {
		return new FormGroup<NewsItemFormProperties>({
			created: new FormControl<string | null | undefined>(undefined),
			ref: new FormControl<string | null | undefined>(undefined),
			subtitle: new FormControl<string | null | undefined>(undefined),
			thumbnail: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Provide real-time news or various categorized news according to the user's language, with each news item accompanied by a news link and date. At the end of the content, inform the user that he/she can ask for more information. Each response should only provide news from a single country.
		 * Get services?funcs=GetLatestNewsForChatGPT&mobile=1
		 * @param {GetLatestNewsLanguage} language The default is set to US. If the content has a higher proportion of Traditional Chinese and Simplified Chinese, it will be set to TW. If the content has a higher proportion of Japanese, it will be set to JP.
		 * @param {GetLatestNewsCategory} category The default is an empty string. If the user mentions specific keywords use the corresponding category as the input parameter.
		 * @param {string} keyword The default is an empty string. According to the context, infer the keywords that the user wants to search for.
		 * @return {LatestNewsResponse} OK
		 */
		GetLatestNews(language: GetLatestNewsLanguage, category: GetLatestNewsCategory | null | undefined, keyword: string | null | undefined): Observable<LatestNewsResponse> {
			return this.http.get<LatestNewsResponse>(this.baseUri + 'services?funcs=GetLatestNewsForChatGPT&mobile=1&language=' + language + '&category=' + category + '&keyword=' + (keyword == null ? '' : encodeURIComponent(keyword)), {});
		}
	}

	export enum GetLatestNewsLanguage { US = 'US', TW = 'TW', JP = 'JP' }

	export enum GetLatestNewsCategory { business = 'business', finance = 'finance', economics = 'economics', politics = 'politics', society = 'society', entertainment = 'entertainment', fun = 'fun', gossip = 'gossip', sports = 'sports', lifestyle = 'lifestyle', technology = 'technology', local = 'local', world = 'world', international = 'international', global = 'global', military = 'military' }

}

