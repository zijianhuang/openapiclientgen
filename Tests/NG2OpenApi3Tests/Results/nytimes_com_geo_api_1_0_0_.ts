import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Event {
		city?: string | null;
		critic_name?: string | null;
		event_detail_url?: string | null;
		event_id?: number | null;
		event_name?: string | null;
		event_schedule_id?: number | null;
		festival?: boolean | null;
		film_rating?: boolean | null;
		free?: boolean | null;
		kid_friendly?: boolean | null;
		last_chance?: boolean | null;
		last_modified?: string | null;
		long_running_show?: boolean | null;
		previews_and_openings?: boolean | null;
		recur_days?: Array<string>;
		recurring_start_date?: string | null;
		state?: string | null;
		times_pick?: boolean | null;
		web_description?: string | null;
	}
	export interface EventFormProperties {
		city: FormControl<string | null | undefined>,
		critic_name: FormControl<string | null | undefined>,
		event_detail_url: FormControl<string | null | undefined>,
		event_id: FormControl<number | null | undefined>,
		event_name: FormControl<string | null | undefined>,
		event_schedule_id: FormControl<number | null | undefined>,
		festival: FormControl<boolean | null | undefined>,
		film_rating: FormControl<boolean | null | undefined>,
		free: FormControl<boolean | null | undefined>,
		kid_friendly: FormControl<boolean | null | undefined>,
		last_chance: FormControl<boolean | null | undefined>,
		last_modified: FormControl<string | null | undefined>,
		long_running_show: FormControl<boolean | null | undefined>,
		previews_and_openings: FormControl<boolean | null | undefined>,
		recurring_start_date: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,
		times_pick: FormControl<boolean | null | undefined>,
		web_description: FormControl<string | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			city: new FormControl<string | null | undefined>(undefined),
			critic_name: new FormControl<string | null | undefined>(undefined),
			event_detail_url: new FormControl<string | null | undefined>(undefined),
			event_id: new FormControl<number | null | undefined>(undefined),
			event_name: new FormControl<string | null | undefined>(undefined),
			event_schedule_id: new FormControl<number | null | undefined>(undefined),
			festival: new FormControl<boolean | null | undefined>(undefined),
			film_rating: new FormControl<boolean | null | undefined>(undefined),
			free: new FormControl<boolean | null | undefined>(undefined),
			kid_friendly: new FormControl<boolean | null | undefined>(undefined),
			last_chance: new FormControl<boolean | null | undefined>(undefined),
			last_modified: new FormControl<string | null | undefined>(undefined),
			long_running_show: new FormControl<boolean | null | undefined>(undefined),
			previews_and_openings: new FormControl<boolean | null | undefined>(undefined),
			recurring_start_date: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			times_pick: new FormControl<boolean | null | undefined>(undefined),
			web_description: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Geographic API
		 * Geographic API
		 * Get query.json
		 * @param {string} name A displayable name for the specified place.
		 * @param {string} latitude The latitude of the specified place.
		 * @param {string} longitude The longitude of the specified place.
		 * @param {number} elevation The elevation of the specified place, in meters.
		 * @param {string} sw Along with ne, forms a bounded box using the longitude and latitude coordinates specified as the southwest corner. The search results are limited to the resulting box. Two float values, separated by a comma `latitude,longitude` <br/> The ne parameter is required to use this parameter.
		 * @param {string} query Search keywords to perform a text search on the fields: web_description, event_name and venue_name. 'AND' searches can be performed by wrapping query terms in quotes. If you do not specify a query, all results will be returned.
		 * @param {string} filter Filters search results based on the facets provided.  For more information on the values you can filter on, see Facets.
		 * @param {string} date_range Start date to end date in the following format- YYYY-MM-DD:YYYY-MM-DD
		 * @param {EventsGetByNameAndLatitudeAndLongitudeAndElevationAndSwAndQueryAndFilterAndDate_rangeAndFacetsAndSortAndLimitAndOffsetFacets} facets When facets is set to 1, a count of all facets will be included in the response.
		 * @param {string} sort Sorts your results on the fields specified. <br/> `sort_value1+[asc | desc],sort_value2+[asc|desc],[...]`<br/> Appending +asc to a facet or response will sort results on that value in ascending order. Appending +desc to a facet or response  will sort results in descending order. You can sort on multiple fields. You can sort on any facet. For the list of responses you can sort on, see the Sortable Field column in the Response table. <br/><br/>If you are doing a spatial search with the ll parameter, you can also sort by the distance from the center of the search: dist+[asc | desc] <br/> **Note:** either +asc or +desc is required when using the sort parameter.
		 * @param {number} limit Limits the number of results returned
		 * @param {number} offset Sets the starting point of the result set
		 * @return {EventsGetByNameAndLatitudeAndLongitudeAndElevationAndSwAndQueryAndFilterAndDate_rangeAndFacetsAndSortAndLimitAndOffsetReturn} An array of events
		 */
		EventsGetByNameAndLatitudeAndLongitudeAndElevationAndSwAndQueryAndFilterAndDate_rangeAndFacetsAndSortAndLimitAndOffset(name: string | null | undefined, latitude: string | null | undefined, longitude: string | null | undefined, elevation: number | null | undefined, sw: string | null | undefined, query: string | null | undefined, filter: string | null | undefined, date_range: string | null | undefined, facets: EventsGetByNameAndLatitudeAndLongitudeAndElevationAndSwAndQueryAndFilterAndDate_rangeAndFacetsAndSortAndLimitAndOffsetFacets | null | undefined, sort: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined): Observable<EventsGetByNameAndLatitudeAndLongitudeAndElevationAndSwAndQueryAndFilterAndDate_rangeAndFacetsAndSortAndLimitAndOffsetReturn> {
			return this.http.get<EventsGetByNameAndLatitudeAndLongitudeAndElevationAndSwAndQueryAndFilterAndDate_rangeAndFacetsAndSortAndLimitAndOffsetReturn>(this.baseUri + 'query.json?name=' + (name == null ? '' : encodeURIComponent(name)) + '&latitude=' + (latitude == null ? '' : encodeURIComponent(latitude)) + '&longitude=' + (longitude == null ? '' : encodeURIComponent(longitude)) + '&elevation=' + elevation + '&sw=' + (sw == null ? '' : encodeURIComponent(sw)) + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&date_range=' + (date_range == null ? '' : encodeURIComponent(date_range)) + '&facets=' + facets + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&limit=' + limit + '&offset=' + offset, {});
		}
	}

	export enum EventsGetByNameAndLatitudeAndLongitudeAndElevationAndSwAndQueryAndFilterAndDate_rangeAndFacetsAndSortAndLimitAndOffsetFacets { _0 = 0, _1 = 1 }

	export interface EventsGetByNameAndLatitudeAndLongitudeAndElevationAndSwAndQueryAndFilterAndDate_rangeAndFacetsAndSortAndLimitAndOffsetReturn {
		results?: Array<Event>;
	}
	export interface EventsGetByNameAndLatitudeAndLongitudeAndElevationAndSwAndQueryAndFilterAndDate_rangeAndFacetsAndSortAndLimitAndOffsetReturnFormProperties {
	}
	export function CreateEventsGetByNameAndLatitudeAndLongitudeAndElevationAndSwAndQueryAndFilterAndDate_rangeAndFacetsAndSortAndLimitAndOffsetReturnFormGroup() {
		return new FormGroup<EventsGetByNameAndLatitudeAndLongitudeAndElevationAndSwAndQueryAndFilterAndDate_rangeAndFacetsAndSortAndLimitAndOffsetReturnFormProperties>({
		});

	}

}

