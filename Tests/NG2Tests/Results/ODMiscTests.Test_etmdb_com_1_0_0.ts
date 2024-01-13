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
		 * Return cinema details search result
		 * Return cinema details search result
		 * ### Response Class (Status 200)
		 * * __{cinema_name}__: Used as a key word to search cinemas,
		 * For more details on how cinemas are listed [see here][ref].
		 * [ref]: https://etmdb.com/en/cinema-list/-updated_date
		 * Get api/v1/cinema-detail/search/{cinema_name}
		 * @return {void} 
		 */
		Cinema_detail_search_read(cinema_name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/cinema-detail/search/' + (cinema_name == null ? '' : encodeURIComponent(cinema_name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return cinema schedule search result
		 * Return cinema schedule search result
		 * ### Response Class (Status 200)
		 * * __{movie_title}__: Used as a key word to search movie cast
		 * * You can use both Amharic or English charset/font to search
		 * For more details about cinema schedule, check each cinema from the cinema list [see here][ref].
		 * [ref]: https://etmdb.com/en/movie-list/-updated_date
		 * Get api/v1/cinema-schedule/search/{movie_title}
		 * @return {void} 
		 */
		Cinema_schedule_search_read(movie_title: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/cinema-schedule/search/' + (movie_title == null ? '' : encodeURIComponent(movie_title)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return cinema schedule search result
		 * Return cinema schedule search result
		 * ### Response Class (Status 200)
		 * __{param}__ argument can be
		 * * movie title
		 * * cinema name
		 * * cinema hall name or
		 * * cinema technology
		 * For more details about cinema schedule, check each cinema from the cinema list [see here][ref].
		 * [ref]: https://etmdb.com/en/movie-list/-updated_date
		 * Get api/v1/cinema-schedule/searchall/{param}
		 * @return {void} 
		 */
		Cinema_schedule_searchall_read(param: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/cinema-schedule/searchall/' + (param == null ? '' : encodeURIComponent(param)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return cinema schedule and showtime search result
		 * Return cinema schedule and showtime search result
		 * ### Response Class (Status 200)
		 * * __{movie_title}__: Used as a key word to search movie cast
		 * * You can use both Amharic or English charset/font to search
		 * For more details about cinema schedule showtime, check each cinema from the cinema list [see here][ref].
		 * [ref]: https://etmdb.com/en/movie-list/-updated_date
		 * Get api/v1/cinema-shedule-showtime/search/{movie_title}
		 * @return {void} 
		 */
		Cinema_shedule_showtime_search_read(movie_title: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/cinema-shedule-showtime/search/' + (movie_title == null ? '' : encodeURIComponent(movie_title)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return cinema schedule and showtime search result
		 * Return cinema schedule and showtime search result
		 * ### Response Class (Status 200)
		 * __{param}__ argument can be
		 * * movie title
		 * * cinema name
		 * * cinema hall name
		 * * showtime starting date
		 * * showtime ending date or
		 * * cinema technology
		 * For more details about cinema schedule, check each cinema from the cinema list [see here][ref].
		 * [ref]: https://etmdb.com/en/movie-list/-updated_date
		 * Get api/v1/cinema-shedule-showtime/searchall/{param}
		 * @return {void} 
		 */
		Cinema_shedule_showtime_searchall_read(param: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/cinema-shedule-showtime/searchall/' + (param == null ? '' : encodeURIComponent(param)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return cinema search result
		 * Return cinema search result
		 * ### Response Class (Status 200)
		 * * __{id}__: Used as a key to search cinemas,
		 * For more details on how cinemas are listed [see here][ref].
		 * [ref]: https://etmdb.com/en/cinema-list/-updated_date
		 * Get api/v1/cinema/search/{id}
		 * @return {void} 
		 */
		Cinema_search_read(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/cinema/search/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return company credits search result
		 * Return company credits search result
		 * ### Response Class (Status 200)
		 * * __{movie_title}__: Used as a key word to search company credits for the movie
		 * * You can use both Amharic or English charset/font to search
		 * For more details on how company credits are listed [see here][ref].
		 * [ref]: https://etmdb.com/en/movie-list/-updated_date
		 * Get api/v1/company-credits/search/{movie_title}
		 * @return {void} 
		 */
		Company_credits_search_read(movie_title: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/company-credits/search/' + (movie_title == null ? '' : encodeURIComponent(movie_title)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return company credits search result
		 * Return company credits search result
		 * ### Response Class (Status 200)
		 * __{param}__ argument can be
		 * * company name
		 * * movie title or
		 * * company credit description (such as production, cinematography, etc)
		 * For more details on how company credits are listed [see here][ref].
		 * [ref]: https://etmdb.com/en/company-list/company_name
		 * Get api/v1/company-credits/searchall/{param}
		 * @return {void} 
		 */
		Company_credits_searchall_read(param: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/company-credits/searchall/' + (param == null ? '' : encodeURIComponent(param)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return company search result
		 * Return company search result
		 * ### Response Class (Status 200)
		 * * __{company_name}__: Used as a key word to search companies,
		 * For more details on how companies are listed [see here][ref].
		 * [ref]: https://etmdb.com/en/company-list/-updated_date
		 * Get api/v1/company/search/{company_name}
		 * @return {void} 
		 */
		Company_search_read(company_name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/company/search/' + (company_name == null ? '' : encodeURIComponent(company_name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return filmography type search result
		 * Return filmography type search result
		 * ### Response Class (Status 200)
		 * * __{filmography_description}__: Used as a key word to search filmography types
		 * For more details on how filmography types are listed [see here][ref].
		 * [ref]: https://etmdb.com/en/movie-list/-updated_date
		 * Get api/v1/filmography-type/search/{filmography_description}
		 * @return {void} 
		 */
		Filmography_type_search_read(filmography_description: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/filmography-type/search/' + (filmography_description == null ? '' : encodeURIComponent(filmography_description)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return filmography search result
		 * Return filmography search result
		 * ### Response Class (Status 200)
		 * * __{movie_title}__: Used as a key word to search movies
		 * * You can use both Amharic or English charset/font to search
		 * For more details on how filmographies are listed [see here][ref].
		 * [ref]: https://etmdb.com/en/movie-list/-updated_date
		 * Get api/v1/filmography/search/{movie_title}
		 * @return {void} 
		 */
		Filmography_search_read(movie_title: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/filmography/search/' + (movie_title == null ? '' : encodeURIComponent(movie_title)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return filmography search result
		 * Return filmography search result
		 * ### Response Class (Status 200)
		 * __{param}__ argument can be
		 * * artist first name
		 * * artist last name
		 * * artist username
		 * * movie title or
		 * * filmography description (such as director, actor, producer, etc)
		 * For more details on how filmographies are listed [see here][ref].
		 * [ref]: https://etmdb.com/en/movie-list/-updated_date
		 * Get api/v1/filmography/searchall/{param}
		 * @return {void} 
		 */
		Filmography_searchall_read(param: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/filmography/searchall/' + (param == null ? '' : encodeURIComponent(param)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return genre type search result
		 * Return genre type search result
		 * ### Response Class (Status 200)
		 * * __{genre_description}__: Used as a key word to search genre types
		 * For more details on how genre types are listed [see here][ref].
		 * [ref]: https://etmdb.com/en/movie-list/-updated_date
		 * Get api/v1/genre-type/search/{genre_description}
		 * @return {void} 
		 */
		Genre_type_search_read(genre_description: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/genre-type/search/' + (genre_description == null ? '' : encodeURIComponent(genre_description)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return movie genre search result
		 * Return movie genre search result
		 * ### Response Class (Status 200)
		 * * __{movie_title}__: Used as a key word to search movie genres
		 * * You can use both Amharic or English charset/font to search
		 * For more details on how movies are listed [see here][ref].
		 * [ref]: https://etmdb.com/en/movie-list/-updated_date
		 * Get api/v1/genre/search/{movie_title}
		 * @return {void} 
		 */
		Genre_search_read(movie_title: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/genre/search/' + (movie_title == null ? '' : encodeURIComponent(movie_title)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return movie genre search result
		 * Return movie genre search result
		 * ### Response Class (Status 200)
		 * * __{movie_genre_type}__: Used as a key word to search movie genres
		 * For more details on how movies are listed [see here][ref].
		 * [ref]: https://etmdb.com/en/movie-list/-updated_date
		 * Get api/v1/genre/searchall/{movie_genre_type}
		 * @return {void} 
		 */
		Genre_searchall_read(movie_genre_type: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/genre/searchall/' + (movie_genre_type == null ? '' : encodeURIComponent(movie_genre_type)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return job details search result
		 * Return job details search result
		 * ### Response Class (Status 200)
		 * * __{job_title}__: Used as a key word to search jobs,
		 * For more details on how job are listed [see here][ref].
		 * [ref]: https://etmdb.com/en/job-list/-updated_date
		 * Get api/v1/job/search/{job_title}
		 * @return {void} 
		 */
		Job_search_read(job_title: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/job/search/' + (job_title == null ? '' : encodeURIComponent(job_title)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return job details search result
		 * Return job details search result
		 * ### Response Class (Status 200)
		 * * __{company_name}__: Used as a key word to search jobs,
		 * For more details on how job are listed [see here][ref].
		 * [ref]: https://etmdb.com/en/job-list/-updated_date
		 * Get api/v1/job/searchall/{company_name}
		 * @return {void} 
		 */
		Job_searchall_read(company_name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/job/searchall/' + (company_name == null ? '' : encodeURIComponent(company_name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return movie media search result
		 * Return movie media search result
		 * ### Response Class (Status 200)
		 * * __{movie_title}__: Used as a key word to search media for movies
		 * * You can use both Amharic or English charset/font to search
		 * For more details on how media is listed [see here][ref].
		 * [ref]: https://etmdb.com/en/movie-list/-updated_date
		 * Get api/v1/media/search/{movie_title}
		 * @return {void} 
		 */
		Media_search_read(movie_title: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/media/search/' + (movie_title == null ? '' : encodeURIComponent(movie_title)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return cast media search result
		 * Return cast media search result
		 * ### Response Class (Status 200)
		 * __{user}__ argument can be
		 * * artist first name
		 * * artist last name
		 * * artist username
		 * For more details on how cast media is listed [see here][ref].
		 * [ref]: https://etmdb.com/en/cast-list/-updated_date
		 * Get api/v1/media/searchall/{user}
		 * @return {void} 
		 */
		Media_searchall_read(user: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/media/searchall/' + (user == null ? '' : encodeURIComponent(user)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return movie cast search result
		 * Return movie cast search result
		 * ### Response Class (Status 200)
		 * * __{movie_title}__: Used as a key word to search movie cast
		 * * You can use both Amharic or English charset/font to search
		 * For more details on how movie casts are listed [see here][ref].
		 * [ref]: https://etmdb.com/en/movie-list/-updated_date
		 * Get api/v1/movie-cast/search/{movie_title}
		 * @return {void} 
		 */
		Movie_cast_search_read(movie_title: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/movie-cast/search/' + (movie_title == null ? '' : encodeURIComponent(movie_title)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return movie cast search result
		 * Return movie cast search result
		 * ### Response Class (Status 200)
		 * __{param}__ argument can be
		 * * artist first name
		 * * artist last name
		 * * artist username
		 * * movie title or
		 * * character name
		 * For more details on how movie casts are listed [see here][ref].
		 * [ref]: https://etmdb.com/en/movie-list/-updated_date
		 * Get api/v1/movie-cast/searchall/{param}
		 * @return {void} 
		 */
		Movie_cast_searchall_read(param: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/movie-cast/searchall/' + (param == null ? '' : encodeURIComponent(param)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return movie search result
		 * Return movie search result
		 * ### Response Class (Status 200)
		 * * __{movie_title}__: Used as a key word to search movies
		 * * You can use both Amharic or English charset/font to search
		 * For more details on how movies are listed [see here][ref].
		 * [ref]: https://etmdb.com/en/movie-list/-updated_date
		 * Get api/v1/movie/search/{movie_title}
		 * @return {void} 
		 */
		Movie_search_read(movie_title: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/movie/search/' + (movie_title == null ? '' : encodeURIComponent(movie_title)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return news or article search result
		 * Return news or article search result
		 * ### Response Class (Status 200)
		 * * __{title}__: Used as a key word to search news and articles,
		 * For more details on how news & articles are listed [see here][ref].
		 * [ref]: https://etmdb.com/en/news-list/-updated_date
		 * Get api/v1/news/search/{title}
		 * @return {void} 
		 */
		News_search_read(title: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/news/search/' + (title == null ? '' : encodeURIComponent(title)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return cast search result
		 * Return cast search result
		 * ### Response Class (Status 200)
		 * __{param}__ argument can be
		 * * artist first name
		 * * artist last name
		 * * artist username
		 * For more details on how cast are listed [see here][ref].
		 * [ref]: https://etmdb.com/en/cast-list/-updated_date
		 * Get api/v1/people/search/{user}
		 * @return {void} 
		 */
		People_search_read(user: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/people/search/' + (user == null ? '' : encodeURIComponent(user)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return showtime search result
		 * Return showtime search result
		 * ### Response Class (Status 200)
		 * __{param}__ argument can be
		 * * show time or
		 * * day of the week [Mon=1, Tue=2, Wed=3, Thu=4, Fri=5, Sat=6, Sun=7]
		 * For more details about showtime, check each cinema from the cinema list [see here][ref].
		 * [ref]: https://etmdb.com/en/movie-list/-updated_date
		 * Get api/v1/showtime/searchall/{param}
		 * @return {void} 
		 */
		Showtime_searchall_read(param: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/showtime/searchall/' + (param == null ? '' : encodeURIComponent(param)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return watchlist search result
		 * Return watchlist search result
		 * ### Response Class (Status 200)
		 * * __{movie_title}__: Used as a key word to search movies on watchlist
		 * * You can use both Amharic or English charset/font to search
		 * For more details on how watchlist are listed [see here][ref].
		 * [ref]: https://etmdb.com/en/movies/watchlist/id
		 * Get api/v1/watchlist/search/{movie_title}
		 * @return {void} 
		 */
		Watchlist_search_read(movie_title: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/watchlist/search/' + (movie_title == null ? '' : encodeURIComponent(movie_title)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return watchlist search result
		 * Return watchlist search result
		 * ### Response Class (Status 200)
		 * __{param}__ argument can be
		 * * artist first name
		 * * artist last name
		 * * artist username
		 * * movie title or
		 * For more details on how watchlist are listed [see here][ref].
		 * [ref]: https://etmdb.com/en/movies/watchlist/id
		 * Get api/v1/watchlist/searchall/{param}
		 * @return {void} 
		 */
		Watchlist_searchall_read(param: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/watchlist/searchall/' + (param == null ? '' : encodeURIComponent(param)), { observe: 'response', responseType: 'text' });
		}
	}

}

