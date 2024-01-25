import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Over_12K_of_curated_job_titles_and_skills_as_list {
	}
	export interface Over_12K_of_curated_job_titles_and_skills_as_listFormProperties {
	}
	export function CreateOver_12K_of_curated_job_titles_and_skills_as_listFormGroup() {
		return new FormGroup<Over_12K_of_curated_job_titles_and_skills_as_listFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Sample response. Each skill or job title comes as a pair of NAME and SLUG.
		 * Get api/v1/skills
		 * @return {void} OK
		 */
		ApiV1SkillsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/skills', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

}

