import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** JSON response template for groups migration API. */
	export interface Groups {

		/** The kind of insert resource this is. */
		kind?: string | null;

		/** The status of the insert request. */
		responseCode?: string | null;
	}

	/** JSON response template for groups migration API. */
	export interface GroupsFormProperties {

		/** The kind of insert resource this is. */
		kind: FormControl<string | null | undefined>,

		/** The status of the insert request. */
		responseCode: FormControl<string | null | undefined>,
	}
	export function CreateGroupsFormGroup() {
		return new FormGroup<GroupsFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			responseCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Inserts a new mail into the archive of the Google group.
		 * Post {groupId}/archive
		 * @param {string} groupId The group ID
		 * @return {void} Successful response
		 */
		Groupsmigration_archive_insert(groupId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (groupId == null ? '' : encodeURIComponent(groupId)) + '/archive', null, { observe: 'response', responseType: 'text' });
		}
	}

}

