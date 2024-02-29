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
		 * Posts the user's review to Stellastra
		 * Post post-review
		 * @param {string} user_email User's email to which the review verification will be sent. 
		 * @param {string} user_name The user's name, defaults to empty string "".  Thus, if this is omitted, the email to the user will not use the user's name. 
		 * @param {Post_reviewPostByUser_emailAndUser_nameAndRatingRating} rating The user's star rating, must be a single integer from [1, 2, 3, 4, 5]
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Post_reviewPostByUser_emailAndUser_nameAndRatingPostBody} requestBody The request body requires the user_email and rating. The parameter use_name is optional. 
		 * @return {Post_reviewPostByUser_emailAndUser_nameAndRatingReturn} A response code of 200 means the request was succesful, and the user has been sent an email confirming their review.
		 */
		Post_reviewPostByUser_emailAndUser_nameAndRating(user_email: string, user_name: string | null | undefined, rating: Post_reviewPostByUser_emailAndUser_nameAndRatingRating, requestBody: Post_reviewPostByUser_emailAndUser_nameAndRatingPostBody, headersHandler?: () => HttpHeaders): Observable<Post_reviewPostByUser_emailAndUser_nameAndRatingReturn> {
			return this.http.post<Post_reviewPostByUser_emailAndUser_nameAndRatingReturn>(this.baseUri + 'post-review?user_email=' + (user_email == null ? '' : encodeURIComponent(user_email)) + '&user_name=' + (user_name == null ? '' : encodeURIComponent(user_name)) + '&rating=' + rating, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}
	}

	export enum Post_reviewPostByUser_emailAndUser_nameAndRatingRating { _1 = 0, _2 = 1, _3 = 2, _4 = 3, _5 = 4 }

	export interface Post_reviewPostByUser_emailAndUser_nameAndRatingPostBody {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rating: number;

		/** Required */
		user_email: string;
		user_name?: string | null;
	}
	export interface Post_reviewPostByUser_emailAndUser_nameAndRatingPostBodyFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rating: FormControl<number | null | undefined>,

		/** Required */
		user_email: FormControl<string | null | undefined>,
		user_name: FormControl<string | null | undefined>,
	}
	export function CreatePost_reviewPostByUser_emailAndUser_nameAndRatingPostBodyFormGroup() {
		return new FormGroup<Post_reviewPostByUser_emailAndUser_nameAndRatingPostBodyFormProperties>({
			rating: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			user_email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			user_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Post_reviewPostByUser_emailAndUser_nameAndRatingReturn {
		data?: string | null;
	}
	export interface Post_reviewPostByUser_emailAndUser_nameAndRatingReturnFormProperties {
		data: FormControl<string | null | undefined>,
	}
	export function CreatePost_reviewPostByUser_emailAndUser_nameAndRatingReturnFormGroup() {
		return new FormGroup<Post_reviewPostByUser_emailAndUser_nameAndRatingReturnFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
		});

	}

}

