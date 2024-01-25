import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ArtistData {

		/** Required */
		facebook_page_url: string;
		id?: number | null;

		/** Required */
		image_url: string;

		/** Required */
		mbid: string;

		/** Required */
		name: string;

		/** Required */
		thumb_url: string;

		/** Required */
		tracker_count: number;

		/** Required */
		upcoming_event_count: number;

		/** Required */
		url: string;
	}
	export interface ArtistDataFormProperties {

		/** Required */
		facebook_page_url: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,

		/** Required */
		image_url: FormControl<string | null | undefined>,

		/** Required */
		mbid: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		thumb_url: FormControl<string | null | undefined>,

		/** Required */
		tracker_count: FormControl<number | null | undefined>,

		/** Required */
		upcoming_event_count: FormControl<number | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateArtistDataFormGroup() {
		return new FormGroup<ArtistDataFormProperties>({
			facebook_page_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined),
			image_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			mbid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			thumb_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tracker_count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			upcoming_event_count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EventData {

		/** Required */
		artist_id: string;

		/** Required */
		datetime: string;
		description?: string | null;

		/** Required */
		id: string;

		/** Required */
		lineup: Array<string>;

		/** Required */
		offers: Array<OfferData>;

		/** Required */
		on_sale_datetime: string;

		/** Required */
		url: string;

		/** Required */
		venue: VenueData;
	}
	export interface EventDataFormProperties {

		/** Required */
		artist_id: FormControl<string | null | undefined>,

		/** Required */
		datetime: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		on_sale_datetime: FormControl<string | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateEventDataFormGroup() {
		return new FormGroup<EventDataFormProperties>({
			artist_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			datetime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			on_sale_datetime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OfferData {

		/** Required */
		status: string;

		/** Required */
		type: string;

		/** Required */
		url: string;
	}
	export interface OfferDataFormProperties {

		/** Required */
		status: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateOfferDataFormGroup() {
		return new FormGroup<OfferDataFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VenueData {

		/** Required */
		city: string;

		/** Required */
		country: string;

		/** Required */
		latitude: string;

		/** Required */
		longitude: string;

		/** Required */
		name: string;

		/** Required */
		region: string;
	}
	export interface VenueDataFormProperties {

		/** Required */
		city: FormControl<string | null | undefined>,

		/** Required */
		country: FormControl<string | null | undefined>,

		/** Required */
		latitude: FormControl<string | null | undefined>,

		/** Required */
		longitude: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		region: FormControl<string | null | undefined>,
	}
	export function CreateVenueDataFormGroup() {
		return new FormGroup<VenueDataFormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			latitude: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			longitude: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get artist information
		 * Get artist information
		 * Get artists/{artistname}
		 * @param {string} artistname The name of the artist. If it contains one of the special characters below, please be sure to replace it by the corresponding code: for / use %252F, for ? use %253F, for * use %252A, and for " use %27C
		 * @param {string} app_id The application ID assigned to you by Bandsintown
		 * @return {ArtistData} 200 response
		 */
		Artist(artistname: string, app_id: string): Observable<ArtistData> {
			return this.http.get<ArtistData>(this.baseUri + 'artists/' + (artistname == null ? '' : encodeURIComponent(artistname)) + '&app_id=' + (app_id == null ? '' : encodeURIComponent(app_id)), {});
		}

		/**
		 * Get upcoming, past, or all artist events, or events within a date range
		 * artist events
		 * Get artists/{artistname}/events
		 * @param {string} artistname The name of the artist. If it contains one of the special characters below, please be sure to replace it by the corresponding code: for / use %252F, for ? use %253F, for * use %252A, and for " use %27C
		 * @param {string} app_id The application ID assigned to you by Bandsintown
		 * @param {string} date Can be one of the following values: "upcoming", "past", "all", or a date range e.g. "2015-05-05,2017-05-05". If not specified, only upcoming shows are returned
		 * @return {Array<EventData>} Shows within a date range for the selected artist
		 */
		ArtistEvents(artistname: string, app_id: string, date: string | null | undefined): Observable<Array<EventData>> {
			return this.http.get<Array<EventData>>(this.baseUri + 'artists/' + (artistname == null ? '' : encodeURIComponent(artistname)) + '/events&app_id=' + (app_id == null ? '' : encodeURIComponent(app_id)) + '&date=' + (date == null ? '' : encodeURIComponent(date)), {});
		}
	}

}

