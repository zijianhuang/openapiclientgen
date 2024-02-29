import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Extension {

		/** Type: float */
		avg_rating?: number | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		extension_id?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		install_count?: string | null;

		/** Type: float */
		prev_avg_rating?: number | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		prev_install_count?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		prev_rating_count?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		rating_count?: string | null;
		update_ts?: Date | null;
		url?: string | null;
	}
	export interface ExtensionFormProperties {

		/** Type: float */
		avg_rating: FormControl<number | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		extension_id: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		install_count: FormControl<string | null | undefined>,

		/** Type: float */
		prev_avg_rating: FormControl<number | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		prev_install_count: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		prev_rating_count: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		rating_count: FormControl<string | null | undefined>,
		update_ts: FormControl<Date | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateExtensionFormGroup() {
		return new FormGroup<ExtensionFormProperties>({
			avg_rating: new FormControl<number | null | undefined>(undefined),
			extension_id: new FormControl<string | null | undefined>(undefined),
			install_count: new FormControl<string | null | undefined>(undefined),
			prev_avg_rating: new FormControl<number | null | undefined>(undefined),
			prev_install_count: new FormControl<string | null | undefined>(undefined),
			prev_rating_count: new FormControl<string | null | undefined>(undefined),
			rating_count: new FormControl<string | null | undefined>(undefined),
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

