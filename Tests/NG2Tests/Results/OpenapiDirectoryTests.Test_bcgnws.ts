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
		 * Get all feature categories
		 * Gets a list of all feature categories used by the BC Geographical Names Information System (BCGNIS).  Note: there are three levels of classification in the BCGNIS feature taxonomy: classes, categories and types.  A type is a subset of a category, and a category is a subset of a class.
		 * Get featureCategories
		 * @param {FeatureCategoriesGetByOutputFormatOutputFormat} outputFormat The format of the output.
		 * @return {void} A list of feature categories
		 */
		FeatureCategoriesGetByOutputFormat(outputFormat: FeatureCategoriesGetByOutputFormatOutputFormat, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'featureCategories?outputFormat=' + outputFormat, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all feature classes
		 * Gets a list of all feature classes used by the BC Geographical Names Information System (BCGNIS).  Note: there are three levels of classification in the BCGNIS feature taxonomy: classes, categories and types.  A type is a subset of a category, and a category is a subset of a class.
		 * Get featureClasses
		 * @param {FeatureCategoriesGetByOutputFormatOutputFormat} outputFormat The format of the output.
		 * @return {void} A list of feature classes
		 */
		FeatureClassesGetByOutputFormat(outputFormat: FeatureCategoriesGetByOutputFormatOutputFormat, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'featureClasses?outputFormat=' + outputFormat, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all feature types
		 * Gets a list of all feature types used by the BC Geographical Names Information System (BCGNIS).  Note: there are three levels of classification in the BCGNIS feature taxonomy: classes, categories and types.  A type is a subset of a category, and a category is a subset of a class.
		 * Get featureTypes
		 * @param {FeatureCategoriesGetByOutputFormatOutputFormat} outputFormat The format of the output.
		 * @return {void} A list of feature types
		 */
		FeatureTypesGetByOutputFormat(outputFormat: FeatureCategoriesGetByOutputFormatOutputFormat, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'featureTypes?outputFormat=' + outputFormat, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a feature by its featureId
		 * Get information about the geographical feature with the specified featureId.
		 * Get features/{featureId}
		 * @param {number} featureId The unique identifier for a feature
		 * @return {void} Information about the feature with the specified featureId (XML format only)
		 */
		Features_featureIdGet(featureId: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'features/' + featureId, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all name authorities
		 * Gets a list of all name authorities responsible for naming decisions of the geographical names in the BC Geographical Names Information System (BCGNIS)
		 * Get nameAuthorities
		 * @param {FeatureCategoriesGetByOutputFormatOutputFormat} outputFormat The format of the output.
		 * @return {void} A list of name authorities
		 */
		NameAuthoritiesGetByOutputFormat(outputFormat: FeatureCategoriesGetByOutputFormatOutputFormat, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'nameAuthorities?outputFormat=' + outputFormat, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Search for names with metadata changes in a given period
		 * Search for information about geographical names which have changed most recently within a specified time window.  Changes may include status cupdates and metadata corrections.
		 * Get names/changes
		 * @param {NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputFormat} outputFormat The format of the output.
		 * @param {number} fromDate Defines the earliest date (YYYY-MM-DD format) of the change time window for the search
		 * @param {number} toDate Defines the latest date (YYYY-MM-DD format) of the change time window for the search
		 * @param {string} featureClass A filter to limit the search to names associated with features of a certain 'class'  The value of this parameter should be a 'featureClassCode' value returned by the /featureClasses resource, or an asterisk (*) to request that all feature classes be included.
		 * @param {string} featureCategory A filter to limit the search to names associated with features of a certain 'category'  The value of this parameter should be a 'featureCategoryCode' value returned by the /featureCategories resource, or an asterisk (*) to request that all feature categories be included.
		 * @param {string} featureType A filter to limit the search to names associated with features of a certain 'type'  The value of this parameter should be a 'featureTypeCode' value returned by the /featureTypes resource, or an asterisk (*) to request that all feature types be included
		 * @param {NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexSortBy} sortBy The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.
		 * @param {NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputSRS} outputSRS The EPSG code of the spatial reference system (SRS) to use for output geometries.
		 * @param {NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexEmbed} embed A flag to indicate whether to embed the corresponding 'feature' into each matching name
		 * @param {NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputStyle} outputStyle A flag indicating whether to include with each matching name a succinct list of attributes (summary), or a comprehensive list of attributes (detail)
		 * @param {number} itemsPerPage The number of search results to return (1-200)
		 * @param {number} startIndex The index of the first record to be returned (>= 1)
		 * @return {void} A list of names matching the search criteria
		 */
		NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndex(outputFormat: NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputFormat, fromDate: number, toDate: number, featureClass: string | null | undefined, featureCategory: string | null | undefined, featureType: string | null | undefined, sortBy: NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexSortBy | null | undefined, outputSRS: NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputSRS | null | undefined, embed: NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexEmbed | null | undefined, outputStyle: NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputStyle | null | undefined, itemsPerPage: number | null | undefined, startIndex: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'names/changes?outputFormat=' + outputFormat + '&fromDate=' + fromDate + '&toDate=' + toDate + '&featureClass=' + (featureClass == null ? '' : encodeURIComponent(featureClass)) + '&featureCategory=' + (featureCategory == null ? '' : encodeURIComponent(featureCategory)) + '&featureType=' + (featureType == null ? '' : encodeURIComponent(featureType)) + '&sortBy=' + sortBy + '&outputSRS=' + outputSRS + '&embed=' + embed + '&outputStyle=' + outputStyle + '&itemsPerPage=' + itemsPerPage + '&startIndex=' + startIndex, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Search for names affected by recent naming decision
		 * Search for information about geographical names affected by naming 'decisions' made by the BC Geographical Names Office (naming authority) within the last X days.
		 * Get names/decisions/recent
		 * @param {NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputFormat} outputFormat The format of the output.
		 * @param {number} days The number of days used to define the time window of naming decisions to search.  The number is interpreted as searching for 'names affected by decisions within the last X days'.
		 * @param {string} featureClass A filter to limit the search to names associated with features of a certain 'class'  The value of this parameter should be a 'featureClassCode' value returned by the /featureClasses resource, or an asterisk (*) to request that all feature classes be included.
		 * @param {string} featureCategory A filter to limit the search to names associated with features of a certain 'category'  The value of this parameter should be a 'featureCategoryCode' value returned by the /featureCategories resource, or an asterisk (*) to request that all feature categories be included.
		 * @param {string} featureType A filter to limit the search to names associated with features of a certain 'type'  The value of this parameter should be a 'featureTypeCode' value returned by the /featureTypes resource, or an asterisk (*) to request that all feature types be included
		 * @param {NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexSortBy} sortBy The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.
		 * @param {NamesDecisionsRecentGetByOutputFormatAndDaysAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputSRS} outputSRS The EPSG code of the spatial reference system (SRS) to use for output geometries.
		 * @param {NamesDecisionsRecentGetByOutputFormatAndDaysAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexEmbed} embed A flag to indicate whether to embed the corresponding 'feature' into each matching name
		 * @param {NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputStyle} outputStyle A flag indicating whether to include with each matching name a succinct list of attributes (summary), or a comprehensive list of attributes (detail)
		 * @param {number} itemsPerPage The number of search results to return (1-200)
		 * @param {number} startIndex The index of the first record to be returned (>= 1)
		 * @return {void} A list of names matching the search criteria
		 */
		NamesDecisionsRecentGetByOutputFormatAndDaysAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndex(outputFormat: NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputFormat, days: number, featureClass: string | null | undefined, featureCategory: string | null | undefined, featureType: string | null | undefined, sortBy: NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexSortBy | null | undefined, outputSRS: NamesDecisionsRecentGetByOutputFormatAndDaysAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputSRS | null | undefined, embed: NamesDecisionsRecentGetByOutputFormatAndDaysAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexEmbed | null | undefined, outputStyle: NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputStyle | null | undefined, itemsPerPage: number | null | undefined, startIndex: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'names/decisions/recent?outputFormat=' + outputFormat + '&days=' + days + '&featureClass=' + (featureClass == null ? '' : encodeURIComponent(featureClass)) + '&featureCategory=' + (featureCategory == null ? '' : encodeURIComponent(featureCategory)) + '&featureType=' + (featureType == null ? '' : encodeURIComponent(featureType)) + '&sortBy=' + sortBy + '&outputSRS=' + outputSRS + '&embed=' + embed + '&outputStyle=' + outputStyle + '&itemsPerPage=' + itemsPerPage + '&startIndex=' + startIndex, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Search for names affected by naming decisions in a given year
		 * Search for information about geographical names affected by naming 'decisions' made by the BC Geographical Names Office (naming authority) in a given year.
		 * Get names/decisions/year
		 * @param {NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputFormat} outputFormat The format of the output.
		 * @param {number} year The year in which to search for names affected by naming decisions'.
		 * @param {string} featureClass A filter to limit the search to names associated with features of a certain 'class'  The value of this parameter should be a 'featureClassCode' value returned by the /featureClasses resource, or an asterisk (*) to request that all feature classes be included.
		 * @param {string} featureCategory A filter to limit the search to names associated with features of a certain 'category'  The value of this parameter should be a 'featureCategoryCode' value returned by the /featureCategories resource, or an asterisk (*) to request that all feature categories be included.
		 * @param {string} featureType A filter to limit the search to names associated with features of a certain 'type'  The value of this parameter should be a 'featureTypeCode' value returned by the /featureTypes resource, or an asterisk (*) to request that all feature types be included
		 * @param {NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexSortBy} sortBy The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.
		 * @param {NamesDecisionsYearGetByOutputFormatAndYearAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputSRS} outputSRS The EPSG code of the spatial reference system (SRS) to use for output geometries.
		 * @param {NamesDecisionsYearGetByOutputFormatAndYearAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexEmbed} embed A flag to indicate whether to embed the corresponding 'feature' into each matching name
		 * @param {NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputStyle} outputStyle A flag indicating whether to include with each matching name a succinct list of attributes (summary), or a comprehensive list of attributes (detail)
		 * @param {number} itemsPerPage The number of search results to return (1-200)
		 * @param {number} startIndex The index of the first record to be returned (>= 1)
		 * @return {void} A list of names matching the search criteria
		 */
		NamesDecisionsYearGetByOutputFormatAndYearAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndex(outputFormat: NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputFormat, year: number, featureClass: string | null | undefined, featureCategory: string | null | undefined, featureType: string | null | undefined, sortBy: NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexSortBy | null | undefined, outputSRS: NamesDecisionsYearGetByOutputFormatAndYearAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputSRS | null | undefined, embed: NamesDecisionsYearGetByOutputFormatAndYearAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexEmbed | null | undefined, outputStyle: NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputStyle | null | undefined, itemsPerPage: number | null | undefined, startIndex: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'names/decisions/year?outputFormat=' + outputFormat + '&year=' + year + '&featureClass=' + (featureClass == null ? '' : encodeURIComponent(featureClass)) + '&featureCategory=' + (featureCategory == null ? '' : encodeURIComponent(featureCategory)) + '&featureType=' + (featureType == null ? '' : encodeURIComponent(featureType)) + '&sortBy=' + sortBy + '&outputSRS=' + outputSRS + '&embed=' + embed + '&outputStyle=' + outputStyle + '&itemsPerPage=' + itemsPerPage + '&startIndex=' + startIndex, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Search in a geographic area
		 * Search for information about geographical names that correspond to features within a geographic bounding box.  Various options and filter parameters are available to refine the search.
		 * Get names/inside
		 * @param {NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputFormat} outputFormat The format of the output.
		 * @param {string} bbox A geographic bounding box defining the search area.  Must be specified as a string of the form 'minLongitude,minLatitude,maxLongitude,maxLatitude' (WGS84). e.g. -119,49,-118,50
		 * @param {string} featureClass A filter to limit the search to names associated with features of a certain 'class'  The value of this parameter should be a 'featureClassCode' value returned by the /featureClasses resource, or an asterisk (*) to request that all feature classes be included.
		 * @param {string} featureCategory A filter to limit the search to names associated with features of a certain 'category'  The value of this parameter should be a 'featureCategoryCode' value returned by the /featureCategories resource, or an asterisk (*) to request that all feature categories be included.
		 * @param {string} featureType A filter to limit the search to names associated with features of a certain 'type'  The value of this parameter should be a 'featureTypeCode' value returned by the /featureTypes resource, or an asterisk (*) to request that all feature types be included
		 * @param {NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexSortBy} sortBy The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.
		 * @param {NamesInsideGetByOutputFormatAndBboxAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputSRS} outputSRS The EPSG code of the spatial reference system (SRS) to use for output geometries.
		 * @param {NamesInsideGetByOutputFormatAndBboxAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexEmbed} embed A flag to indicate whether to embed the corresponding 'feature' into each matching name
		 * @param {NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputStyle} outputStyle A flag indicating whether to include with each matching name a succinct list of attributes (summary), or a comprehensive list of attributes (detail)
		 * @param {number} itemsPerPage The number of search results to return (1-200)
		 * @param {number} startIndex The index of the first record to be returned (>= 1)
		 * @return {void} A list of names matching the search criteria
		 */
		NamesInsideGetByOutputFormatAndBboxAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndex(outputFormat: NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputFormat, bbox: string, featureClass: string | null | undefined, featureCategory: string | null | undefined, featureType: string | null | undefined, sortBy: NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexSortBy | null | undefined, outputSRS: NamesInsideGetByOutputFormatAndBboxAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputSRS | null | undefined, embed: NamesInsideGetByOutputFormatAndBboxAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexEmbed | null | undefined, outputStyle: NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputStyle | null | undefined, itemsPerPage: number | null | undefined, startIndex: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'names/inside?outputFormat=' + outputFormat + '&bbox=' + (bbox == null ? '' : encodeURIComponent(bbox)) + '&featureClass=' + (featureClass == null ? '' : encodeURIComponent(featureClass)) + '&featureCategory=' + (featureCategory == null ? '' : encodeURIComponent(featureCategory)) + '&featureType=' + (featureType == null ? '' : encodeURIComponent(featureType)) + '&sortBy=' + sortBy + '&outputSRS=' + outputSRS + '&embed=' + embed + '&outputStyle=' + outputStyle + '&itemsPerPage=' + itemsPerPage + '&startIndex=' + startIndex, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Search near to a geographic point
		 * Search for information about geographical names that correspond to features within a geographic area defined by a centre point and a radius.  Various options and filter parameters are available to refine the search.
		 * Get names/near
		 * @param {NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputFormat} outputFormat The format of the output.
		 * @param {string} featurePoint A geographic coordinate specifying the centre point of the search area.  Must be specified as a string of the form 'longitude,latitude' (WGS84).  e.g. -120,51
		 * @param {string} distance A radius (in kilometres) around the centre point.
		 * @param {string} featureClass A filter to limit the search to names associated with features of a certain 'class'  The value of this parameter should be a 'featureClassCode' value returned by the /featureClasses resource, or an asterisk (*) to request that all feature classes be included.
		 * @param {string} featureCategory A filter to limit the search to names associated with features of a certain 'category'  The value of this parameter should be a 'featureCategoryCode' value returned by the /featureCategories resource, or an asterisk (*) to request that all feature categories be included.
		 * @param {string} featureType A filter to limit the search to names associated with features of a certain 'type'  The value of this parameter should be a 'featureTypeCode' value returned by the /featureTypes resource, or an asterisk (*) to request that all feature types be included
		 * @param {NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexSortBy} sortBy The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.
		 * @param {NamesNearGetByOutputFormatAndFeaturePointAndDistanceAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputSRS} outputSRS The EPSG code of the spatial reference system (SRS) to use for output geometries.
		 * @param {NamesNearGetByOutputFormatAndFeaturePointAndDistanceAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexEmbed} embed A flag to indicate whether to embed the corresponding 'feature' into each matching name
		 * @param {NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputStyle} outputStyle A flag indicating whether to include with each matching name a succinct list of attributes (summary), or a comprehensive list of attributes (detail)
		 * @param {number} itemsPerPage The number of search results to return (1-200)
		 * @param {number} startIndex The index of the first record to be returned (>= 1)
		 * @return {void} A list of names matching the search criteria
		 */
		NamesNearGetByOutputFormatAndFeaturePointAndDistanceAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndex(outputFormat: NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputFormat, featurePoint: string, distance: string, featureClass: string | null | undefined, featureCategory: string | null | undefined, featureType: string | null | undefined, sortBy: NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexSortBy | null | undefined, outputSRS: NamesNearGetByOutputFormatAndFeaturePointAndDistanceAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputSRS | null | undefined, embed: NamesNearGetByOutputFormatAndFeaturePointAndDistanceAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexEmbed | null | undefined, outputStyle: NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputStyle | null | undefined, itemsPerPage: number | null | undefined, startIndex: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'names/near?outputFormat=' + outputFormat + '&featurePoint=' + (featurePoint == null ? '' : encodeURIComponent(featurePoint)) + '&distance=' + (distance == null ? '' : encodeURIComponent(distance)) + '&featureClass=' + (featureClass == null ? '' : encodeURIComponent(featureClass)) + '&featureCategory=' + (featureCategory == null ? '' : encodeURIComponent(featureCategory)) + '&featureType=' + (featureType == null ? '' : encodeURIComponent(featureType)) + '&sortBy=' + sortBy + '&outputSRS=' + outputSRS + '&embed=' + embed + '&outputStyle=' + outputStyle + '&itemsPerPage=' + itemsPerPage + '&startIndex=' + startIndex, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Search by name, limit to unofficial names only
		 * Search for information about unofficial geographical names by the text of the name itself.  Various options and filter parameters are available to refine the search.
		 * Get names/notOfficial/search
		 * @param {NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputFormat} outputFormat The format of the output.
		 * @param {string} name A filter to search based on the the text of the name itself.  Use the asterisk (*) as a wildcard character.  For example 'vancouv*'
		 * @param {NamesNotOfficialSearchGetByOutputFormatAndNameAndExactSpellingAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexExactSpelling} exactSpelling If the 'name' parameter is specified, 'exactSpelling' specifies whether to include only names that exactly match the search text (exactSpelling=1), or whether to also include names with similar spellings (exactSpelling=0)
		 * @param {string} featureClass A filter to limit the search to names associated with features of a certain 'class'  The value of this parameter should be a 'featureClassCode' value returned by the /featureClasses resource, or an asterisk (*) to request that all feature classes be included.
		 * @param {string} featureCategory A filter to limit the search to names associated with features of a certain 'category'  The value of this parameter should be a 'featureCategoryCode' value returned by the /featureCategories resource, or an asterisk (*) to request that all feature categories be included.
		 * @param {string} featureType A filter to limit the search to names associated with features of a certain 'type'  The value of this parameter should be a 'featureTypeCode' value returned by the /featureTypes resource, or an asterisk (*) to request that all feature types be included
		 * @param {NamesNotOfficialSearchGetByOutputFormatAndNameAndExactSpellingAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexSortBy} sortBy The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.
		 * @param {NamesNotOfficialSearchGetByOutputFormatAndNameAndExactSpellingAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputSRS} outputSRS The EPSG code of the spatial reference system (SRS) to use for output geometries.
		 * @param {NamesNotOfficialSearchGetByOutputFormatAndNameAndExactSpellingAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexEmbed} embed A flag to indicate whether to embed the corresponding 'feature' into each matching name
		 * @param {NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputStyle} outputStyle A flag indicating whether to include with each matching name a succinct list of attributes (summary), or a comprehensive list of attributes (detail)
		 * @param {number} itemsPerPage The number of search results to return (1-200)
		 * @param {number} startIndex The index of the first record to be returned (>= 1)
		 * @return {void} A list of names matching the search criteria
		 */
		NamesNotOfficialSearchGetByOutputFormatAndNameAndExactSpellingAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndex(outputFormat: NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputFormat, name: string, exactSpelling: NamesNotOfficialSearchGetByOutputFormatAndNameAndExactSpellingAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexExactSpelling | null | undefined, featureClass: string | null | undefined, featureCategory: string | null | undefined, featureType: string | null | undefined, sortBy: NamesNotOfficialSearchGetByOutputFormatAndNameAndExactSpellingAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexSortBy | null | undefined, outputSRS: NamesNotOfficialSearchGetByOutputFormatAndNameAndExactSpellingAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputSRS | null | undefined, embed: NamesNotOfficialSearchGetByOutputFormatAndNameAndExactSpellingAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexEmbed | null | undefined, outputStyle: NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputStyle | null | undefined, itemsPerPage: number | null | undefined, startIndex: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'names/notOfficial/search?outputFormat=' + outputFormat + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&exactSpelling=' + exactSpelling + '&featureClass=' + (featureClass == null ? '' : encodeURIComponent(featureClass)) + '&featureCategory=' + (featureCategory == null ? '' : encodeURIComponent(featureCategory)) + '&featureType=' + (featureType == null ? '' : encodeURIComponent(featureType)) + '&sortBy=' + sortBy + '&outputSRS=' + outputSRS + '&embed=' + embed + '&outputStyle=' + outputStyle + '&itemsPerPage=' + itemsPerPage + '&startIndex=' + startIndex, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Search by name, limit to official names only
		 * Search for information about official geographical names by the text of the name itself.  Various options and filter parameters are available to refine the search.
		 * Get names/official/search
		 * @param {NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputFormat} outputFormat The format of the output.
		 * @param {string} name A filter to search based on the the text of the name itself.  Use the asterisk (*) as a wildcard character.  For example 'vancouv*'
		 * @param {NamesOfficialSearchGetByOutputFormatAndNameAndExactSpellingAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexExactSpelling} exactSpelling If the 'name' parameter is specified, 'exactSpelling' specifies whether to include only names that exactly match the search text (exactSpelling=1), or whether to also include names with similar spellings (exactSpelling=0)
		 * @param {string} featureClass A filter to limit the search to names associated with features of a certain 'class'  The value of this parameter should be a 'featureClassCode' value returned by the /featureClasses resource, or an asterisk (*) to request that all feature classes be included.
		 * @param {string} featureCategory A filter to limit the search to names associated with features of a certain 'category'  The value of this parameter should be a 'featureCategoryCode' value returned by the /featureCategories resource, or an asterisk (*) to request that all feature categories be included.
		 * @param {string} featureType A filter to limit the search to names associated with features of a certain 'type'  The value of this parameter should be a 'featureTypeCode' value returned by the /featureTypes resource, or an asterisk (*) to request that all feature types be included
		 * @param {NamesNotOfficialSearchGetByOutputFormatAndNameAndExactSpellingAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexSortBy} sortBy The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.
		 * @param {NamesOfficialSearchGetByOutputFormatAndNameAndExactSpellingAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputSRS} outputSRS The EPSG code of the spatial reference system (SRS) to use for output geometries.
		 * @param {NamesOfficialSearchGetByOutputFormatAndNameAndExactSpellingAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexEmbed} embed A flag to indicate whether to embed the corresponding 'feature' into each matching name
		 * @param {NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputStyle} outputStyle A flag indicating whether to include with each matching name a succinct list of attributes (summary), or a comprehensive list of attributes (detail)
		 * @param {number} itemsPerPage The number of search results to return (1-200)
		 * @param {number} startIndex The index of the first record to be returned (>= 1)
		 * @return {void} A list of names matching the search criteria
		 */
		NamesOfficialSearchGetByOutputFormatAndNameAndExactSpellingAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndex(outputFormat: NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputFormat, name: string, exactSpelling: NamesOfficialSearchGetByOutputFormatAndNameAndExactSpellingAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexExactSpelling | null | undefined, featureClass: string | null | undefined, featureCategory: string | null | undefined, featureType: string | null | undefined, sortBy: NamesNotOfficialSearchGetByOutputFormatAndNameAndExactSpellingAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexSortBy | null | undefined, outputSRS: NamesOfficialSearchGetByOutputFormatAndNameAndExactSpellingAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputSRS | null | undefined, embed: NamesOfficialSearchGetByOutputFormatAndNameAndExactSpellingAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexEmbed | null | undefined, outputStyle: NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputStyle | null | undefined, itemsPerPage: number | null | undefined, startIndex: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'names/official/search?outputFormat=' + outputFormat + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&exactSpelling=' + exactSpelling + '&featureClass=' + (featureClass == null ? '' : encodeURIComponent(featureClass)) + '&featureCategory=' + (featureCategory == null ? '' : encodeURIComponent(featureCategory)) + '&featureType=' + (featureType == null ? '' : encodeURIComponent(featureType)) + '&sortBy=' + sortBy + '&outputSRS=' + outputSRS + '&embed=' + embed + '&outputStyle=' + outputStyle + '&itemsPerPage=' + itemsPerPage + '&startIndex=' + startIndex, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Search by name
		 * Search for information about geographical names by the text of the name itself.  The response will include both official and unofficial names.  Various options and filter parameters are available to refine the search.
		 * Get names/search
		 * @param {NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputFormat} outputFormat The format of the output.
		 * @param {string} name A filter to search based on the the text of the name itself.  Use the asterisk (*) as a wildcard character.  For example 'vancouv*'
		 * @param {NamesSearchGetByOutputFormatAndNameAndExactSpellingAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexExactSpelling} exactSpelling If the 'name' parameter is specified, 'exactSpelling' specifies whether to include only names that exactly match the search text (exactSpelling=1), or whether to also include names with similar spellings (exactSpelling=0)
		 * @param {string} featureClass A filter to limit the search to names associated with features of a certain 'class'  The value of this parameter should be a 'featureClassCode' value returned by the /featureClasses resource, or an asterisk (*) to request that all feature classes be included.
		 * @param {string} featureCategory A filter to limit the search to names associated with features of a certain 'category'  The value of this parameter should be a 'featureCategoryCode' value returned by the /featureCategories resource, or an asterisk (*) to request that all feature categories be included.
		 * @param {string} featureType A filter to limit the search to names associated with features of a certain 'type'  The value of this parameter should be a 'featureTypeCode' value returned by the /featureTypes resource, or an asterisk (*) to request that all feature types be included
		 * @param {NamesNotOfficialSearchGetByOutputFormatAndNameAndExactSpellingAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexSortBy} sortBy The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.
		 * @param {NamesSearchGetByOutputFormatAndNameAndExactSpellingAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputSRS} outputSRS The EPSG code of the spatial reference system (SRS) to use for output geometries.
		 * @param {NamesSearchGetByOutputFormatAndNameAndExactSpellingAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexEmbed} embed A flag to indicate whether to embed the corresponding 'feature' into each matching name
		 * @param {NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputStyle} outputStyle A flag indicating whether to include with each matching name a succinct list of attributes (summary), or a comprehensive list of attributes (detail)
		 * @param {number} itemsPerPage The number of search results to return (1-200)
		 * @param {number} startIndex The index of the first record to be returned (>= 1)
		 * @return {void} A list of names matching the search criteria
		 */
		NamesSearchGetByOutputFormatAndNameAndExactSpellingAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndex(outputFormat: NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputFormat, name: string, exactSpelling: NamesSearchGetByOutputFormatAndNameAndExactSpellingAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexExactSpelling | null | undefined, featureClass: string | null | undefined, featureCategory: string | null | undefined, featureType: string | null | undefined, sortBy: NamesNotOfficialSearchGetByOutputFormatAndNameAndExactSpellingAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexSortBy | null | undefined, outputSRS: NamesSearchGetByOutputFormatAndNameAndExactSpellingAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputSRS | null | undefined, embed: NamesSearchGetByOutputFormatAndNameAndExactSpellingAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexEmbed | null | undefined, outputStyle: NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputStyle | null | undefined, itemsPerPage: number | null | undefined, startIndex: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'names/search?outputFormat=' + outputFormat + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&exactSpelling=' + exactSpelling + '&featureClass=' + (featureClass == null ? '' : encodeURIComponent(featureClass)) + '&featureCategory=' + (featureCategory == null ? '' : encodeURIComponent(featureCategory)) + '&featureType=' + (featureType == null ? '' : encodeURIComponent(featureType)) + '&sortBy=' + sortBy + '&outputSRS=' + outputSRS + '&embed=' + embed + '&outputStyle=' + outputStyle + '&itemsPerPage=' + itemsPerPage + '&startIndex=' + startIndex, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a name by its nameId
		 * Get information about the geographical name with the specified nameId.
		 * Get names/{nameId}.{outputFormat}
		 * @param {number} nameId The unique identifier for a name
		 * @param {Names_nameId__outputFormatGetOutputFormat} outputFormat The format of the output.
		 * @return {void} Information about the name with the specified nameId
		 */
		Names_nameId__outputFormatGet(nameId: number, outputFormat: Names_nameId__outputFormatGetOutputFormat, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'names/' + nameId + '.' + outputFormat, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

	export enum FeatureCategoriesGetByOutputFormatOutputFormat { json = 0, xml = 1 }

	export enum NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputFormat { json = 0, xml = 1, kml = 2, csv = 3 }

	export enum NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexSortBy { name = 0, featureType = 1, decisionDate = 2 }

	export enum NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputSRS { _4326 = 0, _4269 = 1, _3005 = 2, _3857 = 3, _26907 = 4, _26908 = 5, _26909 = 6, _26910 = 7, _26911 = 8 }

	export enum NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexEmbed { _0 = 0, _1 = 1 }

	export enum NamesChangesGetByOutputFormatAndFromDateAndToDateAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputStyle { summary = 0, detail = 1 }

	export enum NamesDecisionsRecentGetByOutputFormatAndDaysAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputSRS { _4326 = 0, _4269 = 1, _3005 = 2, _3857 = 3, _26907 = 4, _26908 = 5, _26909 = 6, _26910 = 7, _26911 = 8 }

	export enum NamesDecisionsRecentGetByOutputFormatAndDaysAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexEmbed { _0 = 0, _1 = 1 }

	export enum NamesDecisionsYearGetByOutputFormatAndYearAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputSRS { _4326 = 0, _4269 = 1, _3005 = 2, _3857 = 3, _26907 = 4, _26908 = 5, _26909 = 6, _26910 = 7, _26911 = 8 }

	export enum NamesDecisionsYearGetByOutputFormatAndYearAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexEmbed { _0 = 0, _1 = 1 }

	export enum NamesInsideGetByOutputFormatAndBboxAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputSRS { _4326 = 0, _4269 = 1, _3005 = 2, _3857 = 3, _26907 = 4, _26908 = 5, _26909 = 6, _26910 = 7, _26911 = 8 }

	export enum NamesInsideGetByOutputFormatAndBboxAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexEmbed { _0 = 0, _1 = 1 }

	export enum NamesNearGetByOutputFormatAndFeaturePointAndDistanceAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputSRS { _4326 = 0, _4269 = 1, _3005 = 2, _3857 = 3, _26907 = 4, _26908 = 5, _26909 = 6, _26910 = 7, _26911 = 8 }

	export enum NamesNearGetByOutputFormatAndFeaturePointAndDistanceAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexEmbed { _0 = 0, _1 = 1 }

	export enum NamesNotOfficialSearchGetByOutputFormatAndNameAndExactSpellingAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexExactSpelling { _0 = 0, _1 = 1 }

	export enum NamesNotOfficialSearchGetByOutputFormatAndNameAndExactSpellingAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexSortBy { relevance = 0, name = 1, featureType = 2, decisionDate = 3 }

	export enum NamesNotOfficialSearchGetByOutputFormatAndNameAndExactSpellingAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputSRS { _4326 = 0, _4269 = 1, _3005 = 2, _3857 = 3, _26907 = 4, _26908 = 5, _26909 = 6, _26910 = 7, _26911 = 8 }

	export enum NamesNotOfficialSearchGetByOutputFormatAndNameAndExactSpellingAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexEmbed { _0 = 0, _1 = 1 }

	export enum NamesOfficialSearchGetByOutputFormatAndNameAndExactSpellingAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexExactSpelling { _0 = 0, _1 = 1 }

	export enum NamesOfficialSearchGetByOutputFormatAndNameAndExactSpellingAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputSRS { _4326 = 0, _4269 = 1, _3005 = 2, _3857 = 3, _26907 = 4, _26908 = 5, _26909 = 6, _26910 = 7, _26911 = 8 }

	export enum NamesOfficialSearchGetByOutputFormatAndNameAndExactSpellingAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexEmbed { _0 = 0, _1 = 1 }

	export enum NamesSearchGetByOutputFormatAndNameAndExactSpellingAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexExactSpelling { _0 = 0, _1 = 1 }

	export enum NamesSearchGetByOutputFormatAndNameAndExactSpellingAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexOutputSRS { _4326 = 0, _4269 = 1, _3005 = 2, _3857 = 3, _26907 = 4, _26908 = 5, _26909 = 6, _26910 = 7, _26911 = 8 }

	export enum NamesSearchGetByOutputFormatAndNameAndExactSpellingAndFeatureClassAndFeatureCategoryAndFeatureTypeAndSortByAndOutputSRSAndEmbedAndOutputStyleAndItemsPerPageAndStartIndexEmbed { _0 = 0, _1 = 1 }

	export enum Names_nameId__outputFormatGetOutputFormat { json = 0, xml = 1, kml = 2, csv = 3, html = 4 }

}

