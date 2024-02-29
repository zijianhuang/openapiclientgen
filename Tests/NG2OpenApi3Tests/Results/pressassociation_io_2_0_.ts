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
		 * Asset Collection
		 * Return a collection of Assets.
		 * Get asset
		 * @param {string} updatedAfter Updated After
		 * @param {number} limit Limit the the number of items to be returned per page. For example: 5.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} aliases Flag to display Legacy and Provider Ids.
		 */
		ListAssets(updatedAfter: string | null | undefined, limit: number | null | undefined, aliases: boolean | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'asset?updatedAfter=' + (updatedAfter == null ? '' : encodeURIComponent(updatedAfter)) + '&limit=' + limit + '&aliases=' + aliases, { responseType: 'text' });
		}

		/**
		 * Asset Detail
		 * Return the content of the selected asset.
		 * Get asset/{assetId}
		 * @param {string} assetId A asset ID filter for the schedule collection. This can be a reference to any type of asset i.e. movie, season, series or episode.
		 * @param {boolean} aliases Flag to display Legacy and Provider Ids.
		 */
		GetAsset(assetId: string, aliases: boolean | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'asset/' + (assetId == null ? '' : encodeURIComponent(assetId)) + '&aliases=' + aliases, { responseType: 'text' });
		}

		/**
		 * Asset Contributors
		 * Return the contributors of the selected asset.
		 * Get asset/{assetId}/contributor
		 * @param {string} assetId A asset ID filter for the schedule collection. This can be a reference to any type of asset i.e. movie, season, series or episode.
		 * @param {boolean} aliases Flag to display Legacy and Provider Ids.
		 */
		GetAssetContributors(assetId: string, aliases: boolean | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'asset/' + (assetId == null ? '' : encodeURIComponent(assetId)) + '/contributor&aliases=' + aliases, { responseType: 'text' });
		}

		/**
		 * Catalogue Collection
		 * Return a collection of Catalogues.
		 * Get catalogue
		 */
		ListCatalogues(): Observable<string> {
			return this.http.get(this.baseUri + 'catalogue', { responseType: 'text' });
		}

		/**
		 * Catalogue Detail
		 * Return the content of the selected catalogue.
		 * Get catalogue/{catalogueId}
		 * @param {string} catalogueId The identifier for the selected catalogue.
		 */
		GetCatalogue(catalogueId: string): Observable<string> {
			return this.http.get(this.baseUri + 'catalogue/' + (catalogueId == null ? '' : encodeURIComponent(catalogueId)), { responseType: 'text' });
		}

		/**
		 * Catalogue Asset Collection
		 * Return the content of the selected catalogue.
		 * Get catalogue/{catalogueId}/asset
		 * @param {string} catalogueId The identifier for the selected catalogue.
		 * @param {string} title The query string for a title search
		 * @param {string} start The Start Date for the catalogue date range.
		 * @param {string} end The End Date for the catalogue date range.
		 * @param {string} updatedAfter Retrieve items only that have been updated after this point.
		 * @param {number} limit Restrict number of returned items Min = 1, Max = 500.
		 *     Type: double
		 * @param {boolean} aliases Flag to display Legacy and Provider Ids.
		 */
		GetCatalogueAsset(catalogueId: string, title: string | null | undefined, start: string | null | undefined, end: string | null | undefined, updatedAfter: string | null | undefined, limit: number | null | undefined, aliases: boolean | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'catalogue/' + (catalogueId == null ? '' : encodeURIComponent(catalogueId)) + '/asset&title=' + (title == null ? '' : encodeURIComponent(title)) + '&start=' + (start == null ? '' : encodeURIComponent(start)) + '&end=' + (end == null ? '' : encodeURIComponent(end)) + '&updatedAfter=' + (updatedAfter == null ? '' : encodeURIComponent(updatedAfter)) + '&limit=' + limit + '&aliases=' + aliases, { responseType: 'text' });
		}

		/**
		 * Catalogue Asset Detail
		 * Return the content of the selected catalogue asset.
		 * Get catalogue/{catalogueId}/asset/{assetId}
		 * @param {string} catalogueId The identifier for the selected catalogue.
		 * @param {string} assetId The identifier for the selected catalogue asset.
		 */
		GetCatalogueAssetDetail(catalogueId: string, assetId: string): Observable<string> {
			return this.http.get(this.baseUri + 'catalogue/' + (catalogueId == null ? '' : encodeURIComponent(catalogueId)) + '/asset/' + (assetId == null ? '' : encodeURIComponent(assetId)), { responseType: 'text' });
		}

		/**
		 * Channel Collection
		 * If you are interested in a list of channels that have had there schedule updated you can filter by the following query params.
		 * - scheduleStart
		 * - scheduleEnd
		 * - scheduleUpdatedSince
		 * adding these query params will filter the channel collection to only return channels that have been updated within the given range, updatedSince stores the state of your previous call.
		 * Example Usage: Every 10 minutes get me the channels that have updated schedules for the next 2 weeks.
		 * /channel?platform={uuid}&scheduleStart={today}&scheduleEnd={today + 2 weeks}&updatedSince={10 minutes ago}
		 * Also please note epg numbers are only exposed when a platform and region are passed to the query.
		 * Get channel
		 * @param {string} platformId The identifier for the selected platform. Multiple platforms can be passed to the API without a region Id. Passing multiple platforms without a region will not return epg numbers as these are linked to a platform and region.
		 * @param {string} regionId The platform region ID for the channel selection.
		 * @param {boolean} aliases Flag to display Legacy and Provider Ids.
		 * @param {string} date Date of the Channel State to select, this will display channel names and attributes in the future or past.
		 * @param {string} scheduleStart The Start Date for the schedule.
		 * @param {string} scheduleEnd The End Date for the schedule.
		 * @param {string} scheduleUpdatedSince Schedule Updated Since
		 */
		ListChannels(platformId: string | null | undefined, regionId: string | null | undefined, aliases: boolean | null | undefined, date: string | null | undefined, scheduleStart: string | null | undefined, scheduleEnd: string | null | undefined, scheduleUpdatedSince: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'channel?platformId=' + (platformId == null ? '' : encodeURIComponent(platformId)) + '&regionId=' + (regionId == null ? '' : encodeURIComponent(regionId)) + '&aliases=' + aliases + '&date=' + (date == null ? '' : encodeURIComponent(date)) + '&scheduleStart=' + (scheduleStart == null ? '' : encodeURIComponent(scheduleStart)) + '&scheduleEnd=' + (scheduleEnd == null ? '' : encodeURIComponent(scheduleEnd)) + '&scheduleUpdatedSince=' + (scheduleUpdatedSince == null ? '' : encodeURIComponent(scheduleUpdatedSince)), { responseType: 'text' });
		}

		/**
		 * Channel Detail
		 * Return the content of the selected channel.
		 * Get channel/{channelId}
		 * @param {string} channelId The identifier for the selected channel.
		 * @param {boolean} aliases Flag to display Legacy and Provider Ids.
		 */
		GetChannel(channelId: string, aliases: boolean | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'channel/' + (channelId == null ? '' : encodeURIComponent(channelId)) + '&aliases=' + aliases, { responseType: 'text' });
		}

		/**
		 * Contributor Collection
		 * Return a collection of Contributors.
		 * Get contributor
		 * @param {string} updatedAfter Updated After
		 * @param {number} limit Limit the the number of items to be returned per page. For example: 5.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} aliases Flag to display Legacy and Provider Ids.
		 */
		ListContributor(updatedAfter: string | null | undefined, limit: number | null | undefined, aliases: boolean | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'contributor?updatedAfter=' + (updatedAfter == null ? '' : encodeURIComponent(updatedAfter)) + '&limit=' + limit + '&aliases=' + aliases, { responseType: 'text' });
		}

		/**
		 * Contributor Detail
		 * Return the content of the selected contributor.
		 * Get contributor/{contributorId}
		 * @param {string} contributorId Filter the schedule items by contributor ID
		 * @param {boolean} aliases Flag to display Legacy and Provider Ids.
		 */
		GetContributor(contributorId: string, aliases: boolean | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'contributor/' + (contributorId == null ? '' : encodeURIComponent(contributorId)) + '&aliases=' + aliases, { responseType: 'text' });
		}

		/**
		 * Feature Collection
		 * Return a collection of Feature.
		 * Get feature
		 * @param {string} type The namespace of the feature type.
		 * @param {string} date Date of the collection of feature items.
		 * @param {string} start Start date for a range of features.
		 * @param {string} end End date for a range of features.
		 */
		ListFeatures(type: string | null | undefined, date: string | null | undefined, start: string | null | undefined, end: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'feature?type=' + (type == null ? '' : encodeURIComponent(type)) + '&date=' + (date == null ? '' : encodeURIComponent(date)) + '&start=' + (start == null ? '' : encodeURIComponent(start)) + '&end=' + (end == null ? '' : encodeURIComponent(end)), { responseType: 'text' });
		}

		/**
		 * Feature Type Collection
		 * Return a collection of Feature Types.
		 * Get feature-type
		 */
		ListFeatureTypes(): Observable<string> {
			return this.http.get(this.baseUri + 'feature-type', { responseType: 'text' });
		}

		/**
		 * Feature Detail
		 * Return the content of the selected feature.
		 * Get feature/{featureId}
		 * @param {string} featureId The identifier for the selected feature.
		 */
		GetFeature(featureId: string): Observable<string> {
			return this.http.get(this.baseUri + 'feature/' + (featureId == null ? '' : encodeURIComponent(featureId)), { responseType: 'text' });
		}

		/**
		 * Platform Collection
		 * Return a list of available platforms.
		 * Get platform
		 * @param {boolean} aliases Flag to display Legacy and Provider Ids.
		 */
		ListPlatforms(aliases: boolean | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'platform?aliases=' + aliases, { responseType: 'text' });
		}

		/**
		 * Platform Detail
		 * Return the content of the selected platform.
		 * Get platform/{platformId}
		 * @param {string} platformId The identifier for the selected platform.
		 */
		GetPlatform(platformId: string): Observable<string> {
			return this.http.get(this.baseUri + 'platform/' + (platformId == null ? '' : encodeURIComponent(platformId)), { responseType: 'text' });
		}

		/**
		 * Platform Region Collection
		 * Return a list of regions for a platform.
		 * Get platform/{platformId}/region
		 * @param {string} platformId The identifier for the selected platform.
		 * @param {boolean} aliases Flag to display Legacy and Provider Ids.
		 */
		ListPlatformRegions(platformId: string, aliases: boolean | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'platform/' + (platformId == null ? '' : encodeURIComponent(platformId)) + '/region&aliases=' + aliases, { responseType: 'text' });
		}

		/**
		 * Schedule Collection
		 * The schedule endpoint produces a linear TV schedule for a given channel and date range.
		 * - The date range supplied must be no larger than 21 days.
		 * - If no end data is passed the API will default to start date + 24 hours.
		 * Get schedule
		 * @param {string} channelId The identifier for the selected channel.
		 * @param {string} start The Start Date for the schedule.
		 * @param {string} end The End Date for the schedule.
		 * @param {boolean} aliases Flag to display Legacy and Provider Ids.
		 */
		ListSchedule(channelId: string, start: string, end: string | null | undefined, aliases: boolean | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'schedule?channelId=' + (channelId == null ? '' : encodeURIComponent(channelId)) + '&start=' + (start == null ? '' : encodeURIComponent(start)) + '&end=' + (end == null ? '' : encodeURIComponent(end)) + '&aliases=' + aliases, { responseType: 'text' });
		}
	}

}

