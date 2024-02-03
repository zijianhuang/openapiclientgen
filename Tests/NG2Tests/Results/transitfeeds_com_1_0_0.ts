import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** This element contains information about a 401 Unauthorized error. */
	export interface API401Response {

		/** Description of the error. */
		msg?: string | null;

		/** Indicates the status of this request. */
		status?: API401ResponseStatus | null;

		/** Indicates the timestamp (in number of seconds since the epoch (January 1 1970 00:00:00 GMT). */
		ts?: number | null;
	}

	/** This element contains information about a 401 Unauthorized error. */
	export interface API401ResponseFormProperties {

		/** Description of the error. */
		msg: FormControl<string | null | undefined>,

		/** Indicates the status of this request. */
		status: FormControl<API401ResponseStatus | null | undefined>,

		/** Indicates the timestamp (in number of seconds since the epoch (January 1 1970 00:00:00 GMT). */
		ts: FormControl<number | null | undefined>,
	}
	export function CreateAPI401ResponseFormGroup() {
		return new FormGroup<API401ResponseFormProperties>({
			msg: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<API401ResponseStatus | null | undefined>(undefined),
			ts: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum API401ResponseStatus { INVALIDKEY = 'INVALIDKEY', PERMISSIONDENIED = 'PERMISSIONDENIED' }


	/** This element contains information about a 404 File Not Found error. */
	export interface API404Response {

		/** Description of the error. */
		msg?: string | null;

		/** Indicates the status of this request. */
		status?: API404ResponseStatus | null;

		/** Indicates the timestamp (in number of seconds since the epoch (January 1 1970 00:00:00 GMT). */
		ts?: number | null;
	}

	/** This element contains information about a 404 File Not Found error. */
	export interface API404ResponseFormProperties {

		/** Description of the error. */
		msg: FormControl<string | null | undefined>,

		/** Indicates the status of this request. */
		status: FormControl<API404ResponseStatus | null | undefined>,

		/** Indicates the timestamp (in number of seconds since the epoch (January 1 1970 00:00:00 GMT). */
		ts: FormControl<number | null | undefined>,
	}
	export function CreateAPI404ResponseFormGroup() {
		return new FormGroup<API404ResponseFormProperties>({
			msg: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<API404ResponseStatus | null | undefined>(undefined),
			ts: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum API404ResponseStatus { INVALIDMETHOD = 'INVALIDMETHOD' }


	/** Contains the information about a single feed. */
	export interface Feed {

		/**
		 * The unique ID for this feed. This is constructed using the ID of the feed's provider and an internal ID. This ID
		 * can be used in other calls, such as `/getFeedVersions` or `/getLatestFeedVersion`.
		 * Required
		 */
		id: string;

		/**
		 * Contains the information about a single location.
		 * Required
		 */
		l: Location;

		/**
		 * If available, contains information about the latest version of this feed. This can help to determine if you need to call
		 * `/getLatestFeedVersion` to retrieve a newer version of a feed.
		 */
		latest?: FeedLatest;

		/**
		 * The title of the feed as it appears on TransitFeeds.com
		 * Required
		 */
		t: string;

		/**
		 * The type of feed (such as GTFS or GTFS-realtime).
		 * Required
		 */
		ty: FeedTy;

		/** Contains URLs with additional information about this feed. */
		u?: FeedU;
	}

	/** Contains the information about a single feed. */
	export interface FeedFormProperties {

		/**
		 * The unique ID for this feed. This is constructed using the ID of the feed's provider and an internal ID. This ID
		 * can be used in other calls, such as `/getFeedVersions` or `/getLatestFeedVersion`.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The title of the feed as it appears on TransitFeeds.com
		 * Required
		 */
		t: FormControl<string | null | undefined>,

		/**
		 * The type of feed (such as GTFS or GTFS-realtime).
		 * Required
		 */
		ty: FormControl<FeedTy | null | undefined>,
	}
	export function CreateFeedFormGroup() {
		return new FormGroup<FeedFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			t: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ty: new FormControl<FeedTy | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the information about a single location. */
	export interface Location {

		/**
		 * The unique ID for this location.
		 * Required
		 */
		id: number;

		/**
		 * The latitude of the approximate point of this location.
		 * Required
		 */
		lat: number;

		/**
		 * The longitude of the approximate point of this location.
		 * Required
		 */
		lng: number;

		/**
		 * The title of this location on its own (i.e. without any state or country information).
		 * Required
		 */
		n: string;

		/**
		 * The ID for the parent location. If a location has no parent this value is `0`.
		 * Required
		 */
		pid: number;

		/**
		 * The title of this location. This may include state/province and country, depending
		 * on the location of type it refers to.
		 * Required
		 */
		t: string;
	}

	/** Contains the information about a single location. */
	export interface LocationFormProperties {

		/**
		 * The unique ID for this location.
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * The latitude of the approximate point of this location.
		 * Required
		 */
		lat: FormControl<number | null | undefined>,

		/**
		 * The longitude of the approximate point of this location.
		 * Required
		 */
		lng: FormControl<number | null | undefined>,

		/**
		 * The title of this location on its own (i.e. without any state or country information).
		 * Required
		 */
		n: FormControl<string | null | undefined>,

		/**
		 * The ID for the parent location. If a location has no parent this value is `0`.
		 * Required
		 */
		pid: FormControl<number | null | undefined>,

		/**
		 * The title of this location. This may include state/province and country, depending
		 * on the location of type it refers to.
		 * Required
		 */
		t: FormControl<string | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			lat: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			lng: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			n: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pid: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			t: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FeedLatest {

		/** Indicates the timestamp of the latest feed version (in number of seconds since the epoch (January 1 1970 00:00:00 GMT). */
		ts?: number | null;
	}
	export interface FeedLatestFormProperties {

		/** Indicates the timestamp of the latest feed version (in number of seconds since the epoch (January 1 1970 00:00:00 GMT). */
		ts: FormControl<number | null | undefined>,
	}
	export function CreateFeedLatestFormGroup() {
		return new FormGroup<FeedLatestFormProperties>({
			ts: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum FeedTy { gtfs = 'gtfs', gtfsrealtime = 'gtfsrealtime' }

	export interface FeedU {

		/**
		 * If available, this contains a URL to download the feed directly from the provider (as opposed to downloading from TransitFeeds.com).
		 */
		d?: string | null;

		/**
		 * If available, this contains a URL with additional information about registering or downloading the feed from the provider.
		 */
		i?: string | null;
	}
	export interface FeedUFormProperties {

		/**
		 * If available, this contains a URL to download the feed directly from the provider (as opposed to downloading from TransitFeeds.com).
		 */
		d: FormControl<string | null | undefined>,

		/**
		 * If available, this contains a URL with additional information about registering or downloading the feed from the provider.
		 */
		i: FormControl<string | null | undefined>,
	}
	export function CreateFeedUFormGroup() {
		return new FormGroup<FeedUFormProperties>({
			d: new FormControl<string | null | undefined>(undefined),
			i: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the information about a single feed version. */
	export interface FeedVersion {

		/**
		 * Contains the start/finish dates for this feed version, if available.
		 */
		d?: FeedVersionD;

		/** If you have included an `err` value of `1` in your request, then any errors detected when importing this feed version are included. */
		err?: Array<FeedVersionIssue>;

		/**
		 * Contains the information about a single feed.
		 * Required
		 */
		f: Feed;

		/**
		 * The unique ID for this feed. This is constructed using the feed ID and an internal ID (generally the date it was imported, but not always, so do not rely on this).
		 * Required
		 */
		id: string;

		/**
		 * The filesize in bytes of the feed version when compressed.
		 * Required
		 */
		size: number;

		/**
		 * The timestamp of when this feed version was registered in the TransitFeeds.com system (in number of seconds since the epoch (January 1 1970 00:00:00 GMT).
		 * Required
		 */
		ts: number;

		/**
		 * This is the URL to directly download the feed version via the TranstiFeeds.com web site (and not via the API). In other words,
		 * you can provide a download URL without exposing your API key to others.
		 * Required
		 */
		url: string;

		/** If you have included a `warn` value of `1` in your request, then any warnings detected when importing this feed version are included. */
		warn?: Array<FeedVersionIssue>;
	}

	/** Contains the information about a single feed version. */
	export interface FeedVersionFormProperties {

		/**
		 * The unique ID for this feed. This is constructed using the feed ID and an internal ID (generally the date it was imported, but not always, so do not rely on this).
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The filesize in bytes of the feed version when compressed.
		 * Required
		 */
		size: FormControl<number | null | undefined>,

		/**
		 * The timestamp of when this feed version was registered in the TransitFeeds.com system (in number of seconds since the epoch (January 1 1970 00:00:00 GMT).
		 * Required
		 */
		ts: FormControl<number | null | undefined>,

		/**
		 * This is the URL to directly download the feed version via the TranstiFeeds.com web site (and not via the API). In other words,
		 * you can provide a download URL without exposing your API key to others.
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateFeedVersionFormGroup() {
		return new FormGroup<FeedVersionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ts: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FeedVersionD {

		/** The start date of the feed version, in `YYYYMMDD` format. */
		f?: string | null;

		/** The start date of the feed version, in `YYYYMMDD` format. */
		s?: string | null;
	}
	export interface FeedVersionDFormProperties {

		/** The start date of the feed version, in `YYYYMMDD` format. */
		f: FormControl<string | null | undefined>,

		/** The start date of the feed version, in `YYYYMMDD` format. */
		s: FormControl<string | null | undefined>,
	}
	export function CreateFeedVersionDFormGroup() {
		return new FormGroup<FeedVersionDFormProperties>({
			f: new FormControl<string | null | undefined>(undefined),
			s: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the information about a single error or warning associated with a feed version. */
	export interface FeedVersionIssue {

		/** The column name (if referring to a GTFS file / CSV file) associated with the issue. */
		c?: string | null;

		/** The filename associated with this issue. */
		f?: string | null;

		/** The line number in the given file associated with the issue. */
		l?: string | null;

		/** A description of the issue. */
		m?: string | null;
	}

	/** Contains the information about a single error or warning associated with a feed version. */
	export interface FeedVersionIssueFormProperties {

		/** The column name (if referring to a GTFS file / CSV file) associated with the issue. */
		c: FormControl<string | null | undefined>,

		/** The filename associated with this issue. */
		f: FormControl<string | null | undefined>,

		/** The line number in the given file associated with the issue. */
		l: FormControl<string | null | undefined>,

		/** A description of the issue. */
		m: FormControl<string | null | undefined>,
	}
	export function CreateFeedVersionIssueFormGroup() {
		return new FormGroup<FeedVersionIssueFormProperties>({
			c: new FormControl<string | null | undefined>(undefined),
			f: new FormControl<string | null | undefined>(undefined),
			l: new FormControl<string | null | undefined>(undefined),
			m: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This element contains the response for a `/getFeedVersions` request. */
	export interface GetFeedVersionsResponse {

		/** Description of the error, if the `status` value was not `OK`. */
		msg?: string | null;

		/** Contains requested data for a valid request. */
		results?: GetFeedVersionsResponseResults;

		/**
		 * Indicates the success status of this request. The following values are possible:
		 * * `OK` - Request was valid.
		 * * `DEPRECATED` - Request resolved to a deprecated resource which will not be returned.
		 * * `EMPTYKEY` - Request was missing API key.
		 * * `MISSINGINPUT` - A required request parameter was missing.
		 * * `INVALIDINPUT` - A request parameter was invalid.
		 */
		status?: GetFeedVersionsResponseStatus | null;

		/** Indicates the timestamp (in number of seconds since the epoch (January 1 1970 00:00:00 GMT). */
		ts?: number | null;
	}

	/** This element contains the response for a `/getFeedVersions` request. */
	export interface GetFeedVersionsResponseFormProperties {

		/** Description of the error, if the `status` value was not `OK`. */
		msg: FormControl<string | null | undefined>,

		/**
		 * Indicates the success status of this request. The following values are possible:
		 * * `OK` - Request was valid.
		 * * `DEPRECATED` - Request resolved to a deprecated resource which will not be returned.
		 * * `EMPTYKEY` - Request was missing API key.
		 * * `MISSINGINPUT` - A required request parameter was missing.
		 * * `INVALIDINPUT` - A request parameter was invalid.
		 */
		status: FormControl<GetFeedVersionsResponseStatus | null | undefined>,

		/** Indicates the timestamp (in number of seconds since the epoch (January 1 1970 00:00:00 GMT). */
		ts: FormControl<number | null | undefined>,
	}
	export function CreateGetFeedVersionsResponseFormGroup() {
		return new FormGroup<GetFeedVersionsResponseFormProperties>({
			msg: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GetFeedVersionsResponseStatus | null | undefined>(undefined),
			ts: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetFeedVersionsResponseResults {

		/** An array of zero or more feed versions. */
		feeds?: Array<FeedVersion>;

		/** If the status value is `MISSINGINPUT` or `INVALIDINPUT`, this field contains the name of the offending field. */
		input?: string | null;

		/**
		 * The maximum number of feed versions that can be returned in this response. If the final page is being
		 * requested then this number may be larger than the number of feed versions returned in `versions`.
		 */
		limit?: number | null;

		/** The number of pages available, based on the `total` and `limit`. */
		numPages?: number | null;

		/** The page number being requested, based on the maximum number than can be returned from in `limit`. */
		page?: number | null;

		/**
		 * The total number of feed versions found based on the request input. Note that this number may be larger
		 * than the number of feed versions returned in `versions`, based on the values for `limit` and `page`.
		 */
		total?: number | null;
	}
	export interface GetFeedVersionsResponseResultsFormProperties {

		/** If the status value is `MISSINGINPUT` or `INVALIDINPUT`, this field contains the name of the offending field. */
		input: FormControl<string | null | undefined>,

		/**
		 * The maximum number of feed versions that can be returned in this response. If the final page is being
		 * requested then this number may be larger than the number of feed versions returned in `versions`.
		 */
		limit: FormControl<number | null | undefined>,

		/** The number of pages available, based on the `total` and `limit`. */
		numPages: FormControl<number | null | undefined>,

		/** The page number being requested, based on the maximum number than can be returned from in `limit`. */
		page: FormControl<number | null | undefined>,

		/**
		 * The total number of feed versions found based on the request input. Note that this number may be larger
		 * than the number of feed versions returned in `versions`, based on the values for `limit` and `page`.
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateGetFeedVersionsResponseResultsFormGroup() {
		return new FormGroup<GetFeedVersionsResponseResultsFormProperties>({
			input: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			numPages: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GetFeedVersionsResponseStatus { OK = 'OK', DEPRECATED = 'DEPRECATED', EMPTYKEY = 'EMPTYKEY', MISSINGINPUT = 'MISSINGINPUT', INVALIDINPUT = 'INVALIDINPUT' }


	/** This element contains the response for a `/getFeeds` request. */
	export interface GetFeedsResponse {

		/** Description of the error, if the `status` value was not `OK`. */
		msg?: string | null;

		/** Contains requested data for a valid request. */
		results?: GetFeedsResponseResults;

		/**
		 * Indicates the success status of this request. The following values are possible:
		 * * `OK` - Request was valid.
		 * * `EMPTYKEY` - Request was missing API key.
		 * * `MISSINGINPUT` - A required request parameter was missing.
		 * * `INVALIDINPUT` - A request parameter was invalid.
		 */
		status?: GetFeedsResponseStatus | null;

		/** Indicates the timestamp (in number of seconds since the epoch (January 1 1970 00:00:00 GMT). */
		ts?: number | null;
	}

	/** This element contains the response for a `/getFeeds` request. */
	export interface GetFeedsResponseFormProperties {

		/** Description of the error, if the `status` value was not `OK`. */
		msg: FormControl<string | null | undefined>,

		/**
		 * Indicates the success status of this request. The following values are possible:
		 * * `OK` - Request was valid.
		 * * `EMPTYKEY` - Request was missing API key.
		 * * `MISSINGINPUT` - A required request parameter was missing.
		 * * `INVALIDINPUT` - A request parameter was invalid.
		 */
		status: FormControl<GetFeedsResponseStatus | null | undefined>,

		/** Indicates the timestamp (in number of seconds since the epoch (January 1 1970 00:00:00 GMT). */
		ts: FormControl<number | null | undefined>,
	}
	export function CreateGetFeedsResponseFormGroup() {
		return new FormGroup<GetFeedsResponseFormProperties>({
			msg: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GetFeedsResponseStatus | null | undefined>(undefined),
			ts: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetFeedsResponseResults {

		/** An array of zero or more feeds. */
		feeds?: Array<Feed>;

		/** If the status value is `MISSINGINPUT` or `INVALIDINPUT`, this field contains the name of the offending field. */
		input?: string | null;

		/**
		 * The maximum number of feeds that can be returned in this response. If the final page is being
		 * requested then this number may be larger than the number of feeds returned in `feeds`.
		 */
		limit?: number | null;

		/** The number of pages available, based on the `total` and `limit`. */
		numPages?: number | null;

		/** The page number being requested, based on the maximum number than can be returned from in `limit`. */
		page?: number | null;

		/**
		 * The total number of feeds found based on the request input. Note that this number may be larger
		 * than the number of feeds returned in `feeds`, based on the values for `limit` and `page`.
		 */
		total?: number | null;
	}
	export interface GetFeedsResponseResultsFormProperties {

		/** If the status value is `MISSINGINPUT` or `INVALIDINPUT`, this field contains the name of the offending field. */
		input: FormControl<string | null | undefined>,

		/**
		 * The maximum number of feeds that can be returned in this response. If the final page is being
		 * requested then this number may be larger than the number of feeds returned in `feeds`.
		 */
		limit: FormControl<number | null | undefined>,

		/** The number of pages available, based on the `total` and `limit`. */
		numPages: FormControl<number | null | undefined>,

		/** The page number being requested, based on the maximum number than can be returned from in `limit`. */
		page: FormControl<number | null | undefined>,

		/**
		 * The total number of feeds found based on the request input. Note that this number may be larger
		 * than the number of feeds returned in `feeds`, based on the values for `limit` and `page`.
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateGetFeedsResponseResultsFormGroup() {
		return new FormGroup<GetFeedsResponseResultsFormProperties>({
			input: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			numPages: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GetFeedsResponseStatus { OK = 'OK', EMPTYKEY = 'EMPTYKEY', MISSINGINPUT = 'MISSINGINPUT', INVALIDINPUT = 'INVALIDINPUT' }


	/** This element contains the response for a `/getLatestFeedVersion` request. */
	export interface GetLatestFeedVersionResponse {

		/** Description of the error, if the `status` value was not `OK`. */
		msg?: string | null;

		/** Contains requested data for a valid request. */
		results?: GetLatestFeedVersionResponseResults;

		/**
		 * Indicates the success status of this request. The following values are possible:
		 * * `OK` - Request was valid.
		 * * `DEPRECATED` - Request resolved to a deprecated resource which will not be returned.
		 * * `EMPTYKEY` - Request was missing API key.
		 * * `MISSINGINPUT` - A required request parameter was missing.
		 * * `INVALIDINPUT` - A request parameter was invalid.
		 * * `OTHER` - Some other error occurred.
		 */
		status?: GetLatestFeedVersionResponseStatus | null;

		/** Indicates the timestamp (in number of seconds since the epoch (January 1 1970 00:00:00 GMT). */
		ts?: number | null;
	}

	/** This element contains the response for a `/getLatestFeedVersion` request. */
	export interface GetLatestFeedVersionResponseFormProperties {

		/** Description of the error, if the `status` value was not `OK`. */
		msg: FormControl<string | null | undefined>,

		/**
		 * Indicates the success status of this request. The following values are possible:
		 * * `OK` - Request was valid.
		 * * `DEPRECATED` - Request resolved to a deprecated resource which will not be returned.
		 * * `EMPTYKEY` - Request was missing API key.
		 * * `MISSINGINPUT` - A required request parameter was missing.
		 * * `INVALIDINPUT` - A request parameter was invalid.
		 * * `OTHER` - Some other error occurred.
		 */
		status: FormControl<GetLatestFeedVersionResponseStatus | null | undefined>,

		/** Indicates the timestamp (in number of seconds since the epoch (January 1 1970 00:00:00 GMT). */
		ts: FormControl<number | null | undefined>,
	}
	export function CreateGetLatestFeedVersionResponseFormGroup() {
		return new FormGroup<GetLatestFeedVersionResponseFormProperties>({
			msg: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GetLatestFeedVersionResponseStatus | null | undefined>(undefined),
			ts: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetLatestFeedVersionResponseResults {

		/** An array of zero or more feed versions. */
		feeds?: Array<FeedVersion>;

		/** If the status value is `MISSINGINPUT` or `INVALIDINPUT`, this field contains the name of the offending field. */
		input?: string | null;

		/**
		 * The maximum number of feed versions that can be returned in this response. If the final page is being
		 * requested then this number may be larger than the number of feed versions returned in `versions`.
		 */
		limit?: number | null;

		/** The number of pages available, based on the `total` and `limit`. */
		numPages?: number | null;

		/** The page number being requested, based on the maximum number than can be returned from in `limit`. */
		page?: number | null;

		/**
		 * The total number of feed versions found based on the request input. Note that this number may be larger
		 * than the number of feed versions returned in `versions`, based on the values for `limit` and `page`.
		 */
		total?: number | null;
	}
	export interface GetLatestFeedVersionResponseResultsFormProperties {

		/** If the status value is `MISSINGINPUT` or `INVALIDINPUT`, this field contains the name of the offending field. */
		input: FormControl<string | null | undefined>,

		/**
		 * The maximum number of feed versions that can be returned in this response. If the final page is being
		 * requested then this number may be larger than the number of feed versions returned in `versions`.
		 */
		limit: FormControl<number | null | undefined>,

		/** The number of pages available, based on the `total` and `limit`. */
		numPages: FormControl<number | null | undefined>,

		/** The page number being requested, based on the maximum number than can be returned from in `limit`. */
		page: FormControl<number | null | undefined>,

		/**
		 * The total number of feed versions found based on the request input. Note that this number may be larger
		 * than the number of feed versions returned in `versions`, based on the values for `limit` and `page`.
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateGetLatestFeedVersionResponseResultsFormGroup() {
		return new FormGroup<GetLatestFeedVersionResponseResultsFormProperties>({
			input: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			numPages: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GetLatestFeedVersionResponseStatus { OK = 'OK', DEPRECATED = 'DEPRECATED', EMPTYKEY = 'EMPTYKEY', MISSINGINPUT = 'MISSINGINPUT', INVALIDINPUT = 'INVALIDINPUT', OTHER = 'OTHER' }


	/** This element contains the response for a `/getLocations` request. */
	export interface GetLocationsResponse {

		/** Description of the error, if the `status` value was not `OK`. */
		msg?: string | null;

		/** Contains requested data for a valid request. */
		results?: GetLocationsResponseResults;

		/**
		 * Indicates the success status of this request. The following values are possible:
		 * * `OK` - Request was valid.
		 * * `EMPTYKEY` - Request was missing API key.
		 * * `MISSINGINPUT` - A required request parameter was missing.
		 * * `INVALIDINPUT` - A request parameter was invalid.
		 */
		status?: GetFeedsResponseStatus | null;

		/** Indicates the timestamp (in number of seconds since the epoch (January 1 1970 00:00:00 GMT). */
		ts?: number | null;
	}

	/** This element contains the response for a `/getLocations` request. */
	export interface GetLocationsResponseFormProperties {

		/** Description of the error, if the `status` value was not `OK`. */
		msg: FormControl<string | null | undefined>,

		/**
		 * Indicates the success status of this request. The following values are possible:
		 * * `OK` - Request was valid.
		 * * `EMPTYKEY` - Request was missing API key.
		 * * `MISSINGINPUT` - A required request parameter was missing.
		 * * `INVALIDINPUT` - A request parameter was invalid.
		 */
		status: FormControl<GetFeedsResponseStatus | null | undefined>,

		/** Indicates the timestamp (in number of seconds since the epoch (January 1 1970 00:00:00 GMT). */
		ts: FormControl<number | null | undefined>,
	}
	export function CreateGetLocationsResponseFormGroup() {
		return new FormGroup<GetLocationsResponseFormProperties>({
			msg: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GetFeedsResponseStatus | null | undefined>(undefined),
			ts: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetLocationsResponseResults {

		/** If the status value is `MISSINGINPUT` or `INVALIDINPUT`, this field contains the name of the offending field. */
		input?: string | null;

		/** An array of zero or more locations. */
		locations?: Array<Location>;
	}
	export interface GetLocationsResponseResultsFormProperties {

		/** If the status value is `MISSINGINPUT` or `INVALIDINPUT`, this field contains the name of the offending field. */
		input: FormControl<string | null | undefined>,
	}
	export function CreateGetLocationsResponseResultsFormGroup() {
		return new FormGroup<GetLocationsResponseResultsFormProperties>({
			input: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve a list of versions of specified (or all) feeds.
		 * This API call allows you to easily see every single feed update in the TranstiFeeds.com system. Since this can be quite
		 * long, it's also possible to filter this list by a single feed ID.
		 * Get getFeedVersions
		 * @param {string} key Your personal API key, used for authentication.
		 * @param {string} feed If you only want to retrieve feed versions for a particular feed, include its ID here. You can use the `/getFeeds` call to discover feed IDs.
		 * @param {number} page The page number of results to return. For example, if you specify a `page` of `2` with a `limit` of 10, then results 11-20 are returned.
		 * The number of pages available is included in the response.
		 * @param {number} limit The maximum number of results to return..
		 * @param {GetFeedVersionsErr} err To include any errors detected when importing this feed in the response, specify a valud of `1`.
		 * @param {GetFeedVersionsWarn} warn To include any warnings detected when importing this feed in the response, specify a valud of `1`.
		 * @return {GetFeedVersionsResponse} The response for a valid `/getFeedVersions` API call.
		 */
		GetFeedVersions(key: string, feed: string | null | undefined, page: number | null | undefined, limit: number | null | undefined, err: GetFeedVersionsErr | null | undefined, warn: GetFeedVersionsWarn | null | undefined): Observable<GetFeedVersionsResponse> {
			return this.http.get<GetFeedVersionsResponse>(this.baseUri + 'getFeedVersions?key=' + (key == null ? '' : encodeURIComponent(key)) + '&feed=' + (feed == null ? '' : encodeURIComponent(feed)) + '&page=' + page + '&limit=' + limit + '&err=' + err + '&warn=' + warn, {});
		}

		/**
		 * Retrieve a list of feeds.
		 * Used this API to retrieve a list of feeds in the system. Doing so can be usedful to discover feed IDs that
		 * can be used in other API calls.
		 * Get getFeeds
		 * @param {string} key Your personal API key, used for authentication.
		 * @param {number} location This is the unique ID of a location. If specified, feeds will only be returned that belong to this location
		 * (and perhaps sub-locations too, depending on the `descendants` value). You can use the `/getLocations` API
		 * endpoint to determine location IDs.
		 * @param {GetFeedsDescendants} descendants If a location is specified in `location`, this flag can be used to control if returned feeds must be assigned directly to the location, or if feeds belonging to sub-locations can also be returned. If `0`, then feeds must be assigned directly to the specified location.
		 * @param {number} page The page number of results to return. For example, if you specify a `page` of `2` with a `limit` of 10, then results 11-20 are returned.
		 * The number of pages available is included in the response.
		 * @param {number} limit The maximum number of results to return..
		 * @param {FeedTy} type The type of feeds to return. If unspecified, feeds of all types are returned.
		 * @return {GetFeedsResponse} The response for a valid `/getFeeds` API call.
		 */
		GetFeeds(key: string, location: number | null | undefined, descendants: GetFeedsDescendants | null | undefined, page: number | null | undefined, limit: number | null | undefined, type: FeedTy | null | undefined): Observable<GetFeedsResponse> {
			return this.http.get<GetFeedsResponse>(this.baseUri + 'getFeeds?key=' + (key == null ? '' : encodeURIComponent(key)) + '&location=' + location + '&descendants=' + descendants + '&page=' + page + '&limit=' + limit + '&type=' + type, {});
		}

		/**
		 * Retrieve the download URL for the latest version of a feed.
		 * Once you have used `/getFeeds` to discover a feed's URL, you can use this endpoint to download its latest version from TranstiFeeds.
		 * It will be unmodified in the original format from the provider.
		 * Get getLatestFeedVersion
		 * @param {string} key Your personal API key, used for authentication.
		 * @param {string} feed The ID of the feed to retrieve the latest feed version for. You can use the `/getFeeds` call to discover feed IDs.
		 * @return {GetLatestFeedVersionResponse} The response for a `/getLatestFeedVersion` API call that includes invalid request parameters.
		 */
		GetLatestFeedVersion(key: string, feed: string): Observable<GetLatestFeedVersionResponse> {
			return this.http.get<GetLatestFeedVersionResponse>(this.baseUri + 'getLatestFeedVersion?key=' + (key == null ? '' : encodeURIComponent(key)) + '&feed=' + (feed == null ? '' : encodeURIComponent(feed)), {});
		}

		/**
		 * Retrieve a list of locations.
		 * Retrieve a list of locations. Each location (except for the root) has a parent location, and each
		 * location has zero or more child locations. This hierarchy is generally structured so countries contain
		 * states, states contain cities (although this typically depends on the country).
		 * Get getLocations
		 * @param {string} key Your personal API key, used for authentication.
		 * @return {GetLocationsResponse} The response for a valid `getLocations` API call.
		 */
		GetLocations(key: string): Observable<GetLocationsResponse> {
			return this.http.get<GetLocationsResponse>(this.baseUri + 'getLocations?key=' + (key == null ? '' : encodeURIComponent(key)), {});
		}
	}

	export enum GetFeedVersionsErr { _0 = 0, _1 = 1 }

	export enum GetFeedVersionsWarn { _0 = 0, _1 = 1 }

	export enum GetFeedsDescendants { _0 = 0, _1 = 1 }

}

