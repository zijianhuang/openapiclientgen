import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Extension {
		avg_rating?: number | null;
		extension_id?: number | null;
		install_count?: number | null;
		prev_avg_rating?: number | null;
		prev_install_count?: number | null;
		prev_rating_count?: number | null;
		rating_count?: number | null;
		update_ts?: Date | null;
		url?: string | null;
	}
	export interface ExtensionFormProperties {
		avg_rating: FormControl<number | null | undefined>,
		extension_id: FormControl<number | null | undefined>,
		install_count: FormControl<number | null | undefined>,
		prev_avg_rating: FormControl<number | null | undefined>,
		prev_install_count: FormControl<number | null | undefined>,
		prev_rating_count: FormControl<number | null | undefined>,
		rating_count: FormControl<number | null | undefined>,
		update_ts: FormControl<Date | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateExtensionFormGroup() {
		return new FormGroup<ExtensionFormProperties>({
			avg_rating: new FormControl<number | null | undefined>(undefined),
			extension_id: new FormControl<number | null | undefined>(undefined),
			install_count: new FormControl<number | null | undefined>(undefined),
			prev_avg_rating: new FormControl<number | null | undefined>(undefined),
			prev_install_count: new FormControl<number | null | undefined>(undefined),
			prev_rating_count: new FormControl<number | null | undefined>(undefined),
			rating_count: new FormControl<number | null | undefined>(undefined),
			update_ts: new FormControl<Date | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get User Extensions
		 * This endpoint allows you to get list of your extensions including extensions from the watchlist.
		 * Get user-extensions
		 * @return {Array<Extension>} successful operation
		 */
		GetUserExtensions(): Observable<Array<Extension>> {
			return this.http.get<Array<Extension>>(this.baseUri + 'user-extensions', {});
		}
	}

}

