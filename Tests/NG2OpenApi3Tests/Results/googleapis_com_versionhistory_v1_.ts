import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Each Channel is owned by a Platform and owns a collection of versions. Possible Channels are listed in the Channel enum below. Not all Channels are available for every Platform (e.g. CANARY does not exist for LINUX). */
	export interface Channel {

		/** Type of channel. */
		channelType?: ChannelChannelType | null;

		/** Channel name. Format is "{product}/platforms/{platform}/channels/{channel}" */
		name?: string | null;
	}

	/** Each Channel is owned by a Platform and owns a collection of versions. Possible Channels are listed in the Channel enum below. Not all Channels are available for every Platform (e.g. CANARY does not exist for LINUX). */
	export interface ChannelFormProperties {

		/** Type of channel. */
		channelType: FormControl<ChannelChannelType | null | undefined>,

		/** Channel name. Format is "{product}/platforms/{platform}/channels/{channel}" */
		name: FormControl<string | null | undefined>,
	}
	export function CreateChannelFormGroup() {
		return new FormGroup<ChannelFormProperties>({
			channelType: new FormControl<ChannelChannelType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ChannelChannelType { CHANNEL_TYPE_UNSPECIFIED = 'CHANNEL_TYPE_UNSPECIFIED', STABLE = 'STABLE', BETA = 'BETA', DEV = 'DEV', CANARY = 'CANARY', CANARY_ASAN = 'CANARY_ASAN', ALL = 'ALL', EXTENDED = 'EXTENDED' }


	/** Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive). The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time. */
	export interface Interval {

		/** Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end. */
		endTime?: string | null;

		/** Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start. */
		startTime?: string | null;
	}

	/** Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive). The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time. */
	export interface IntervalFormProperties {

		/** Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end. */
		endTime: FormControl<string | null | undefined>,

		/** Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateIntervalFormGroup() {
		return new FormGroup<IntervalFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListChannels. */
	export interface ListChannelsResponse {

		/** The list of channels. */
		channels?: Array<Channel>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for ListChannels. */
	export interface ListChannelsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListChannelsResponseFormGroup() {
		return new FormGroup<ListChannelsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListPlatforms. */
	export interface ListPlatformsResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The list of platforms. */
		platforms?: Array<Platform>;
	}

	/** Response message for ListPlatforms. */
	export interface ListPlatformsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPlatformsResponseFormGroup() {
		return new FormGroup<ListPlatformsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Each Platform is owned by a Product and owns a collection of channels. Available platforms are listed in Platform enum below. Not all Channels are available for every Platform (e.g. CANARY does not exist for LINUX). */
	export interface Platform {

		/** Platform name. Format is "{product}/platforms/{platform}" */
		name?: string | null;

		/** Type of platform. */
		platformType?: PlatformPlatformType | null;
	}

	/** Each Platform is owned by a Product and owns a collection of channels. Available platforms are listed in Platform enum below. Not all Channels are available for every Platform (e.g. CANARY does not exist for LINUX). */
	export interface PlatformFormProperties {

		/** Platform name. Format is "{product}/platforms/{platform}" */
		name: FormControl<string | null | undefined>,

		/** Type of platform. */
		platformType: FormControl<PlatformPlatformType | null | undefined>,
	}
	export function CreatePlatformFormGroup() {
		return new FormGroup<PlatformFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			platformType: new FormControl<PlatformPlatformType | null | undefined>(undefined),
		});

	}

	export enum PlatformPlatformType { PLATFORM_TYPE_UNSPECIFIED = 'PLATFORM_TYPE_UNSPECIFIED', WIN = 'WIN', WIN64 = 'WIN64', MAC = 'MAC', LINUX = 'LINUX', ANDROID = 'ANDROID', WEBVIEW = 'WEBVIEW', IOS = 'IOS', ALL = 'ALL', MAC_ARM64 = 'MAC_ARM64', LACROS = 'LACROS', LACROS_ARM32 = 'LACROS_ARM32', CHROMEOS = 'CHROMEOS', LACROS_ARM64 = 'LACROS_ARM64', FUCHSIA = 'FUCHSIA' }


	/** Response message for ListReleases. */
	export interface ListReleasesResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The list of releases. */
		releases?: Array<Release>;
	}

	/** Response message for ListReleases. */
	export interface ListReleasesResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListReleasesResponseFormGroup() {
		return new FormGroup<ListReleasesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Release is owned by a Version. A Release contains information about the release(s) of its parent version. This includes when the release began and ended, as well as what percentage it was released at. If the version is released again, or if the serving percentage changes, it will create another release under the version. */
	export interface Release {

		/** Rollout fraction. This fraction indicates the fraction of people that should receive this version in this release. If the fraction is not specified in ReleaseManager, the API will assume fraction is 1. */
		fraction?: number | null;

		/** Rollout fraction group. Only fractions with the same fraction_group are statistically comparable: there may be non-fractional differences between different fraction groups. */
		fractionGroup?: string | null;

		/** Release name. Format is "{product}/platforms/{platform}/channels/{channel}/versions/{version}/releases/{release}" */
		name?: string | null;

		/** Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive). The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time. */
		serving?: Interval;

		/** String containing just the version number. e.g. "84.0.4147.38" */
		version?: string | null;
	}

	/** A Release is owned by a Version. A Release contains information about the release(s) of its parent version. This includes when the release began and ended, as well as what percentage it was released at. If the version is released again, or if the serving percentage changes, it will create another release under the version. */
	export interface ReleaseFormProperties {

		/** Rollout fraction. This fraction indicates the fraction of people that should receive this version in this release. If the fraction is not specified in ReleaseManager, the API will assume fraction is 1. */
		fraction: FormControl<number | null | undefined>,

		/** Rollout fraction group. Only fractions with the same fraction_group are statistically comparable: there may be non-fractional differences between different fraction groups. */
		fractionGroup: FormControl<string | null | undefined>,

		/** Release name. Format is "{product}/platforms/{platform}/channels/{channel}/versions/{version}/releases/{release}" */
		name: FormControl<string | null | undefined>,

		/** String containing just the version number. e.g. "84.0.4147.38" */
		version: FormControl<string | null | undefined>,
	}
	export function CreateReleaseFormGroup() {
		return new FormGroup<ReleaseFormProperties>({
			fraction: new FormControl<number | null | undefined>(undefined),
			fractionGroup: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListVersions. */
	export interface ListVersionsResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The list of versions. */
		versions?: Array<Version>;
	}

	/** Response message for ListVersions. */
	export interface ListVersionsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListVersionsResponseFormGroup() {
		return new FormGroup<ListVersionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Each Version is owned by a Channel. A Version only displays the Version number (e.g. 84.0.4147.38). A Version owns a collection of releases. */
	export interface Version {

		/** Version name. Format is "{product}/platforms/{platform}/channels/{channel}/versions/{version}" e.g. "chrome/platforms/win/channels/beta/versions/84.0.4147.38" */
		name?: string | null;

		/** String containing just the version number. e.g. "84.0.4147.38" */
		version?: string | null;
	}

	/** Each Version is owned by a Channel. A Version only displays the Version number (e.g. 84.0.4147.38). A Version owns a collection of releases. */
	export interface VersionFormProperties {

		/** Version name. Format is "{product}/platforms/{platform}/channels/{channel}/versions/{version}" e.g. "chrome/platforms/win/channels/beta/versions/84.0.4147.38" */
		name: FormControl<string | null | undefined>,

		/** String containing just the version number. e.g. "84.0.4147.38" */
		version: FormControl<string | null | undefined>,
	}
	export function CreateVersionFormGroup() {
		return new FormGroup<VersionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns list of channels that are available for a given platform.
		 * Get v1/{parent}/channels
		 * @param {string} parent Required. The platform, which owns this collection of channels. Format: {product}/platforms/{platform}
		 * @param {number} pageSize Optional. Optional limit on the number of channels to include in the response. If unspecified, the server will pick an appropriate default.
		 * @param {string} pageToken Optional. A page token, received from a previous `ListChannels` call. Provide this to retrieve the subsequent page.
		 * @return {ListChannelsResponse} Successful response
		 */
		Versionhistory_platforms_channels_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListChannelsResponse> {
			return this.http.get<ListChannelsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/channels&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Returns list of platforms that are available for a given product. The resource "product" has no resource name in its name.
		 * Get v1/{parent}/platforms
		 * @param {string} parent Required. The product, which owns this collection of platforms. Format: {product}
		 * @param {number} pageSize Optional. Optional limit on the number of channels to include in the response. If unspecified, the server will pick an appropriate default.
		 * @param {string} pageToken Optional. A page token, received from a previous `ListChannels` call. Provide this to retrieve the subsequent page.
		 * @return {ListPlatformsResponse} Successful response
		 */
		Versionhistory_platforms_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListPlatformsResponse> {
			return this.http.get<ListPlatformsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/platforms&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Returns list of releases of the given version.
		 * Get v1/{parent}/releases
		 * @param {string} parent Required. The version, which owns this collection of releases. Format: {product}/platforms/{platform}/channels/{channel}/versions/{version}
		 * @param {string} filter Optional. Filter string. Format is a comma separated list of All comma separated filter clauses are conjoined with a logical "and". Valid field_names are "version", "name", "platform", "channel", "fraction" "starttime", and "endtime". Valid operators are "<", "<=", "=", ">=", and ">". Channel comparison is done by distance from stable. must be a valid channel when filtering by channel. Ex) stable < beta, beta < dev, canary < canary_asan. Version comparison is done numerically. Ex) 1.0.0.8 < 1.0.0.10. If version is not entirely written, the version will be appended with 0 for the missing fields. Ex) version > 80 becoms version > 80.0.0.0 When filtering by starttime or endtime, string must be in RFC 3339 date string format. Name and platform are filtered by string comparison. Ex) "...?filter=channel<=beta, version >= 80 Ex) "...?filter=version > 80, version < 81 Ex) "...?filter=starttime>2020-01-01T00:00:00Z
		 * @param {string} orderBy Optional. Ordering string. Valid order_by strings are "version", "name", "starttime", "endtime", "platform", "channel", and "fraction". Optionally, you can append "desc" or "asc" to specify the sorting order. Multiple order_by strings can be used in a comma separated list. Ordering by channel will sort by distance from the stable channel (not alphabetically). A list of channels sorted in this order is: stable, beta, dev, canary, and canary_asan. Sorting by name may cause unexpected behaviour as it is a naive string sort. For example, 1.0.0.8 will be before 1.0.0.10 in descending order. If order_by is not specified the response will be sorted by starttime in descending order. Ex) "...?order_by=starttime asc" Ex) "...?order_by=platform desc, channel, startime desc"
		 * @param {number} pageSize Optional. Optional limit on the number of releases to include in the response. If unspecified, the server will pick an appropriate default.
		 * @param {string} pageToken Optional. A page token, received from a previous `ListReleases` call. Provide this to retrieve the subsequent page.
		 * @return {ListReleasesResponse} Successful response
		 */
		Versionhistory_platforms_channels_versions_releases_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListReleasesResponse> {
			return this.http.get<ListReleasesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/releases&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Returns list of version for the given platform/channel.
		 * Get v1/{parent}/versions
		 * @param {string} parent Required. The channel, which owns this collection of versions. Format: {product}/platforms/{platform}/channels/{channel}
		 * @param {string} filter Optional. Filter string. Format is a comma separated list of All comma separated filter clauses are conjoined with a logical "and". Valid field_names are "version", "name", "platform", and "channel". Valid operators are "<", "<=", "=", ">=", and ">". Channel comparison is done by distance from stable. Ex) stable < beta, beta < dev, canary < canary_asan. Version comparison is done numerically. If version is not entirely written, the version will be appended with 0 in missing fields. Ex) version > 80 becoms version > 80.0.0.0 Name and platform are filtered by string comparison. Ex) "...?filter=channel<=beta, version >= 80 Ex) "...?filter=version > 80, version < 81
		 * @param {string} orderBy Optional. Ordering string. Valid order_by strings are "version", "name", "platform", and "channel". Optionally, you can append " desc" or " asc" to specify the sorting order. Multiple order_by strings can be used in a comma separated list. Ordering by channel will sort by distance from the stable channel (not alphabetically). A list of channels sorted in this order is: stable, beta, dev, canary, and canary_asan. Sorting by name may cause unexpected behaviour as it is a naive string sort. For example, 1.0.0.8 will be before 1.0.0.10 in descending order. If order_by is not specified the response will be sorted by version in descending order. Ex) "...?order_by=version asc" Ex) "...?order_by=platform desc, channel, version"
		 * @param {number} pageSize Optional. Optional limit on the number of versions to include in the response. If unspecified, the server will pick an appropriate default.
		 * @param {string} pageToken Optional. A page token, received from a previous `ListVersions` call. Provide this to retrieve the subsequent page.
		 * @return {ListVersionsResponse} Successful response
		 */
		Versionhistory_platforms_channels_versions_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListVersionsResponse> {
			return this.http.get<ListVersionsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/versions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}
	}

}

