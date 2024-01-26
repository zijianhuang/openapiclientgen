import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Frontlinev1user {

		/** The avatar URL which will be shown in Frontline application. */
		avatar?: string | null;

		/** The string that you assigned to describe the User. */
		friendly_name?: string | null;

		/** The application-defined string that uniquely identifies the resource's User. This value is often a username or an email address, and is case-sensitive. */
		identity?: string | null;

		/** Whether the User is available for new conversations. Defaults to `false` for new users. */
		is_available?: boolean | null;

		/**
		 * The unique string that we created to identify the User resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;
		state?: Frontlinev1userState | null;

		/** An absolute API resource URL for this user. */
		url?: string | null;
	}
	export interface Frontlinev1userFormProperties {

		/** The avatar URL which will be shown in Frontline application. */
		avatar: FormControl<string | null | undefined>,

		/** The string that you assigned to describe the User. */
		friendly_name: FormControl<string | null | undefined>,

		/** The application-defined string that uniquely identifies the resource's User. This value is often a username or an email address, and is case-sensitive. */
		identity: FormControl<string | null | undefined>,

		/** Whether the User is available for new conversations. Defaults to `false` for new users. */
		is_available: FormControl<boolean | null | undefined>,

		/**
		 * The unique string that we created to identify the User resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,
		state: FormControl<Frontlinev1userState | null | undefined>,

		/** An absolute API resource URL for this user. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateFrontlinev1userFormGroup() {
		return new FormGroup<Frontlinev1userFormProperties>({
			avatar: new FormControl<string | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			identity: new FormControl<string | null | undefined>(undefined),
			is_available: new FormControl<boolean | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^US[0-9a-fA-F]{32}$')]),
			state: new FormControl<Frontlinev1userState | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Frontlinev1userState { active = 0, deactivated = 1 }

	export enum User_enum_state_type { active = 0, deactivated = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Fetch a frontline user
		 * Get v1/Users/{Sid}
		 * @param {string} Sid The SID of the User resource to fetch. This value can be either the `sid` or the `identity` of the User resource to fetch.
		 * @return {Frontlinev1user} OK
		 */
		FetchUser(Sid: string): Observable<Frontlinev1user> {
			return this.http.get<Frontlinev1user>(this.baseUri + 'v1/Users/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}
	}

}

