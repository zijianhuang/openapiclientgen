import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** Contains metadata about how much money a recommendation can save or incur. */
	export interface GoogleCloudRecommenderV1beta1CostProjection {

		/** Represents an amount of money with its currency type. */
		cost?: GoogleTypeMoney;

		/** Duration for which this cost applies. */
		duration?: string;
	}


	/** Represents an amount of money with its currency type. */
	export interface GoogleTypeMoney {

		/** The 3-letter currency code defined in ISO 4217. */
		currencyCode?: string;

		/**
		 * Number of nano (10^-9) units of the amount.
		 * The value must be between -999,999,999 and +999,999,999 inclusive.
		 * If `units` is positive, `nanos` must be positive or zero.
		 * If `units` is zero, `nanos` can be positive, zero, or negative.
		 * If `units` is negative, `nanos` must be negative or zero.
		 * For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
		 */
		nanos?: number;

		/**
		 * The whole units of the amount.
		 * For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.
		 */
		units?: string;
	}


	/** Contains the impact a recommendation can have for a given category. */
	export interface GoogleCloudRecommenderV1beta1Impact {

		/** Category that is being targeted. */
		category?: GoogleCloudRecommenderV1beta1ImpactCategory;

		/** Contains metadata about how much money a recommendation can save or incur. */
		costProjection?: GoogleCloudRecommenderV1beta1CostProjection;
	}

	export enum GoogleCloudRecommenderV1beta1ImpactCategory { CATEGORY_UNSPECIFIED = 0, COST = 1, SECURITY = 2, PERFORMANCE = 3, MANAGEABILITY = 4 }


	/**
	 * An insight along with the information used to derive the insight. The insight
	 * may have associated recomendations as well.
	 */
	export interface GoogleCloudRecommenderV1beta1Insight {

		/** Recommendations derived from this insight. */
		associatedRecommendations?: Array<GoogleCloudRecommenderV1beta1InsightRecommendationReference>;

		/** Category being targeted by the insight. */
		category?: GoogleCloudRecommenderV1beta1ImpactCategory;

		/**
		 * A struct of custom fields to explain the insight.
		 * Example: "grantedPermissionsCount": "1000"
		 */
		content?: {[id: string]: any };

		/**
		 * Free-form human readable summary in English. The maximum length is 500
		 * characters.
		 */
		description?: string;

		/**
		 * Fingerprint of the Insight. Provides optimistic locking when updating
		 * states.
		 */
		etag?: string;

		/** Insight subtype. Insight content schema will be stable for a given subtype. */
		insightSubtype?: string;

		/** Timestamp of the latest data used to generate the insight. */
		lastRefreshTime?: string;

		/** Name of the insight. */
		name?: string;

		/**
		 * Observation period that led to the insight. The source data used to
		 * generate the insight ends at last_refresh_time and begins at
		 * (last_refresh_time - observation_period).
		 */
		observationPeriod?: string;

		/** Information related to insight state. */
		stateInfo?: GoogleCloudRecommenderV1beta1InsightStateInfo;

		/** Fully qualified resource names that this insight is targeting. */
		targetResources?: Array<string>;
	}


	/** Reference to an associated recommendation. */
	export interface GoogleCloudRecommenderV1beta1InsightRecommendationReference {

		/**
		 * Recommendation resource name, e.g.
		 * projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/recommendations/[RECOMMENDATION_ID]
		 */
		recommendation?: string;
	}


	/** Information related to insight state. */
	export interface GoogleCloudRecommenderV1beta1InsightStateInfo {

		/** Insight state. */
		state?: GoogleCloudRecommenderV1beta1InsightStateInfoState;

		/** A map of metadata for the state, provided by user or automations systems. */
		stateMetadata?: {[id: string]: any };
	}

	export enum GoogleCloudRecommenderV1beta1InsightStateInfoState { STATE_UNSPECIFIED = 0, ACTIVE = 1, ACCEPTED = 2, DISMISSED = 3 }


	/** Response to the `ListInsights` method. */
	export interface GoogleCloudRecommenderV1beta1ListInsightsResponse {

		/** The set of insights for the `parent` resource. */
		insights?: Array<GoogleCloudRecommenderV1beta1Insight>;

		/**
		 * A token that can be used to request the next page of results. This field is
		 * empty if there are no additional results.
		 */
		nextPageToken?: string;
	}


	/** Response to the `ListRecommendations` method. */
	export interface GoogleCloudRecommenderV1beta1ListRecommendationsResponse {

		/**
		 * A token that can be used to request the next page of results. This field is
		 * empty if there are no additional results.
		 */
		nextPageToken?: string;

		/** The set of recommendations for the `parent` resource. */
		recommendations?: Array<GoogleCloudRecommenderV1beta1Recommendation>;
	}


	/**
	 * A recommendation along with a suggested action. E.g., a rightsizing
	 * recommendation for an underutilized VM, IAM role recommendations, etc
	 */
	export interface GoogleCloudRecommenderV1beta1Recommendation {

		/**
		 * Optional set of additional impact that this recommendation may have when
		 * trying to optimize for the primary category. These may be positive
		 * or negative.
		 */
		additionalImpact?: Array<GoogleCloudRecommenderV1beta1Impact>;

		/** Insights that led to this recommendation. */
		associatedInsights?: Array<GoogleCloudRecommenderV1beta1RecommendationInsightReference>;

		/** Contains what resources are changing and how they are changing. */
		content?: GoogleCloudRecommenderV1beta1RecommendationContent;

		/**
		 * Free-form human readable summary in English. The maximum length is 500
		 * characters.
		 */
		description?: string;

		/**
		 * Fingerprint of the Recommendation. Provides optimistic locking when
		 * updating states.
		 */
		etag?: string;

		/**
		 * Last time this recommendation was refreshed by the system that created it
		 * in the first place.
		 */
		lastRefreshTime?: string;

		/** Name of recommendation. */
		name?: string;

		/** Contains the impact a recommendation can have for a given category. */
		primaryImpact?: GoogleCloudRecommenderV1beta1Impact;

		/**
		 * Contains an identifier for a subtype of recommendations produced for the
		 * same recommender. Subtype is a function of content and impact, meaning a
		 * new subtype might be added when significant changes to `content` or
		 * `primary_impact.category` are introduced. See the Recommenders section
		 * to see a list of subtypes for a given Recommender.
		 * Examples:
		 * For recommender = "google.iam.policy.Recommender",
		 * recommender_subtype can be one of "REMOVE_ROLE"/"REPLACE_ROLE"
		 */
		recommenderSubtype?: string;

		/** Information for state. Contains state and metadata. */
		stateInfo?: GoogleCloudRecommenderV1beta1RecommendationStateInfo;
	}


	/** Reference to an associated insight. */
	export interface GoogleCloudRecommenderV1beta1RecommendationInsightReference {

		/**
		 * Insight resource name, e.g.
		 * projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/insights/[INSIGHT_ID]
		 */
		insight?: string;
	}


	/** Contains what resources are changing and how they are changing. */
	export interface GoogleCloudRecommenderV1beta1RecommendationContent {

		/**
		 * Operations to one or more Google Cloud resources grouped in such a way
		 * that, all operations within one group are expected to be performed
		 * atomically and in an order.
		 */
		operationGroups?: Array<GoogleCloudRecommenderV1beta1OperationGroup>;
	}


	/** Group of operations that need to be performed atomically. */
	export interface GoogleCloudRecommenderV1beta1OperationGroup {

		/**
		 * List of operations across one or more resources that belong to this group.
		 * Loosely based on RFC6902 and should be performed in the order they appear.
		 */
		operations?: Array<GoogleCloudRecommenderV1beta1Operation>;
	}


	/**
	 * Contains an operation for a resource loosely based on the JSON-PATCH format
	 * with support for:
	 * * Custom filters for describing partial array patch.
	 * * Extended path values for describing nested arrays.
	 * * Custom fields for describing the resource for which the operation is being
	 *   described.
	 * * Allows extension to custom operations not natively supported by RFC6902.
	 * See https://tools.ietf.org/html/rfc6902 for details on the original RFC.
	 */
	export interface GoogleCloudRecommenderV1beta1Operation {

		/**
		 * Type of this operation. Contains one of 'and', 'remove', 'replace', 'move',
		 * 'copy', 'test' and 'custom' operations. This field is case-insensitive and
		 * always populated.
		 */
		action?: string;

		/**
		 * Path to the target field being operated on. If the operation is at the
		 * resource level, then path should be "/". This field is always populated.
		 */
		path?: string;

		/**
		 * Set of filters to apply if `path` refers to array elements or nested array
		 * elements in order to narrow down to a single unique element that is being
		 * tested/modified.
		 * This is intended to be an exact match per filter. To perform advanced
		 * matching, use path_value_matchers.
		 * * Example: {
		 * "/versions/name" : "it-123"
		 * "/versions/targetSize/percent": 20
		 * }
		 * * Example: {
		 * "/bindings/role": "roles/admin"
		 * "/bindings/condition" : null
		 * }
		 * * Example: {
		 * "/bindings/role": "roles/admin"
		 * "/bindings/members/*" : ["x@google.com", "y@google.com"]
		 * }
		 * When both path_filters and path_value_matchers are set, an implicit AND
		 * must be performed.
		 */
		pathFilters?: {[id: string]: any };

		/**
		 * Similar to path_filters, this contains set of filters to apply if `path`
		 * field referes to array elements. This is meant to support value matching
		 * beyond exact match. To perform exact match, use path_filters.
		 * When both path_filters and path_value_matchers are set, an implicit AND
		 * must be performed.
		 */
		pathValueMatchers?: {[id: string]: GoogleCloudRecommenderV1beta1ValueMatcher };

		/**
		 * Contains the fully qualified resource name. This field is always populated.
		 * ex: //cloudresourcemanager.googleapis.com/projects/foo.
		 */
		resource?: string;

		/**
		 * Type of GCP resource being modified/tested. This field is always populated.
		 * Example: cloudresourcemanager.googleapis.com/Project,
		 * compute.googleapis.com/Instance
		 */
		resourceType?: string;

		/**
		 * Can be set with action 'copy' or 'move' to indicate the source field within
		 * resource or source_resource, ignored if provided for other operation types.
		 */
		sourcePath?: string;

		/**
		 * Can be set with action 'copy' to copy resource configuration across
		 * different resources of the same type. Example: A resource clone can be
		 * done via action = 'copy', path = "/", from = "/",
		 * source_resource = <source> and resource_name = <target>.
		 * This field is empty for all other values of `action`.
		 */
		sourceResource?: string;

		/**
		 * Value for the `path` field. Will be set for actions:'add'/'replace'.
		 * Maybe set for action: 'test'. Either this or `value_matcher` will be set
		 * for 'test' operation. An exact match must be performed.
		 */
		value?: any;

		/** Contains various matching options for values for a GCP resource field. */
		valueMatcher?: GoogleCloudRecommenderV1beta1ValueMatcher;
	}


	/** Contains various matching options for values for a GCP resource field. */
	export interface GoogleCloudRecommenderV1beta1ValueMatcher {

		/**
		 * To be used for full regex matching. The regular expression is using the
		 * Google RE2 syntax (https://github.com/google/re2/wiki/Syntax), so to be
		 * used with RE2::FullMatch
		 */
		matchesPattern?: string;
	}


	/** Information for state. Contains state and metadata. */
	export interface GoogleCloudRecommenderV1beta1RecommendationStateInfo {

		/** The state of the recommendation, Eg ACTIVE, SUCCEEDED, FAILED. */
		state?: GoogleCloudRecommenderV1beta1RecommendationStateInfoState;

		/** A map of metadata for the state, provided by user or automations systems. */
		stateMetadata?: {[id: string]: any };
	}

	export enum GoogleCloudRecommenderV1beta1RecommendationStateInfoState { STATE_UNSPECIFIED = 0, ACTIVE = 1, CLAIMED = 2, SUCCEEDED = 3, FAILED = 4, DISMISSED = 5 }


	/** Request for the `MarkInsightAccepted` method. */
	export interface GoogleCloudRecommenderV1beta1MarkInsightAcceptedRequest {

		/** Required. Fingerprint of the Insight. Provides optimistic locking. */
		etag?: string;

		/**
		 * Optional. State properties user wish to include with this state.  Full replace of the
		 * current state_metadata.
		 */
		stateMetadata?: {[id: string]: any };
	}


	/** Request for the `MarkRecommendationClaimed` Method. */
	export interface GoogleCloudRecommenderV1beta1MarkRecommendationClaimedRequest {

		/** Required. Fingerprint of the Recommendation. Provides optimistic locking. */
		etag?: string;

		/**
		 * State properties to include with this state. Overwrites any existing
		 * `state_metadata`.
		 * Keys must match the regex /^a-z0-9{0,62}$/.
		 * Values must match the regex /^[a-zA-Z0-9_./-]{0,255}$/.
		 */
		stateMetadata?: {[id: string]: any };
	}


	/** Request for the `MarkRecommendationFailed` Method. */
	export interface GoogleCloudRecommenderV1beta1MarkRecommendationFailedRequest {

		/** Required. Fingerprint of the Recommendation. Provides optimistic locking. */
		etag?: string;

		/**
		 * State properties to include with this state. Overwrites any existing
		 * `state_metadata`.
		 * Keys must match the regex /^a-z0-9{0,62}$/.
		 * Values must match the regex /^[a-zA-Z0-9_./-]{0,255}$/.
		 */
		stateMetadata?: {[id: string]: any };
	}


	/** Request for the `MarkRecommendationSucceeded` Method. */
	export interface GoogleCloudRecommenderV1beta1MarkRecommendationSucceededRequest {

		/** Required. Fingerprint of the Recommendation. Provides optimistic locking. */
		etag?: string;

		/**
		 * State properties to include with this state. Overwrites any existing
		 * `state_metadata`.
		 * Keys must match the regex /^a-z0-9{0,62}$/.
		 * Values must match the regex /^[a-zA-Z0-9_./-]{0,255}$/.
		 */
		stateMetadata?: {[id: string]: any };
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets the requested recommendation. Requires the recommender.*.get
		 * IAM permission for the specified recommender.
		 * Get v1beta1/{name}
		 * @param {string} name Required. Name of the recommendation.
		 * @return {void} Successful response
		 */
		Recommender_projects_locations_recommenders_recommendations_get(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Marks the Insight State as Accepted. Users can use this method to
		 * indicate to the Recommender API that they have applied some action based
		 * on the insight. This stops the insight content from being updated.
		 * MarkInsightAccepted can be applied to insights in ACTIVE state. Requires
		 * the recommender.*.update IAM permission for the specified insight.
		 * Post v1beta1/{name}:markAccepted
		 * @param {string} name Required. Name of the insight.
		 * @return {void} Successful response
		 */
		Recommender_projects_locations_insightTypes_insights_markAccepted(name: string, requestBody: GoogleCloudRecommenderV1beta1MarkInsightAcceptedRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':markAccepted', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Marks the Recommendation State as Claimed. Users can use this method to
		 * indicate to the Recommender API that they are starting to apply the
		 * recommendation themselves. This stops the recommendation content from being
		 * updated. Associated insights are frozen and placed in the ACCEPTED state.
		 * MarkRecommendationClaimed can be applied to recommendations in CLAIMED or
		 * ACTIVE state.
		 * Requires the recommender.*.update IAM permission for the specified
		 * recommender.
		 * Post v1beta1/{name}:markClaimed
		 * @param {string} name Required. Name of the recommendation.
		 * @return {void} Successful response
		 */
		Recommender_projects_locations_recommenders_recommendations_markClaimed(name: string, requestBody: GoogleCloudRecommenderV1beta1MarkRecommendationClaimedRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':markClaimed', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Marks the Recommendation State as Failed. Users can use this method to
		 * indicate to the Recommender API that they have applied the recommendation
		 * themselves, and the operation failed. This stops the recommendation content
		 * from being updated. Associated insights are frozen and placed in the
		 * ACCEPTED state.
		 * MarkRecommendationFailed can be applied to recommendations in ACTIVE,
		 * CLAIMED, SUCCEEDED, or FAILED state.
		 * Requires the recommender.*.update IAM permission for the specified
		 * recommender.
		 * Post v1beta1/{name}:markFailed
		 * @param {string} name Required. Name of the recommendation.
		 * @return {void} Successful response
		 */
		Recommender_projects_locations_recommenders_recommendations_markFailed(name: string, requestBody: GoogleCloudRecommenderV1beta1MarkRecommendationFailedRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':markFailed', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Marks the Recommendation State as Succeeded. Users can use this method to
		 * indicate to the Recommender API that they have applied the recommendation
		 * themselves, and the operation was successful. This stops the recommendation
		 * content from being updated. Associated insights are frozen and placed in
		 * the ACCEPTED state.
		 * MarkRecommendationSucceeded can be applied to recommendations in ACTIVE,
		 * CLAIMED, SUCCEEDED, or FAILED state.
		 * Requires the recommender.*.update IAM permission for the specified
		 * recommender.
		 * Post v1beta1/{name}:markSucceeded
		 * @param {string} name Required. Name of the recommendation.
		 * @return {void} Successful response
		 */
		Recommender_projects_locations_recommenders_recommendations_markSucceeded(name: string, requestBody: GoogleCloudRecommenderV1beta1MarkRecommendationSucceededRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':markSucceeded', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists insights for a Cloud project. Requires the recommender.*.list IAM
		 * permission for the specified insight type.
		 * Get v1beta1/{parent}/insights
		 * @param {string} parent Required. The container resource on which to execute the request.
		 * Acceptable formats:
		 * 1.
		 * "projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]",
		 * LOCATION here refers to GCP Locations:
		 * https://cloud.google.com/about/locations/
		 * @param {string} filter Optional. Filter expression to restrict the insights returned. Supported
		 * filter fields: state
		 * Eg: `state:"DISMISSED" or state:"ACTIVE"
		 * @param {number} pageSize Optional. The maximum number of results to return from this request.  Non-positive
		 * values are ignored. If not specified, the server will determine the number
		 * of results to return.
		 * @param {string} pageToken Optional. If present, retrieves the next batch of results from the preceding call to
		 * this method. `page_token` must be the value of `next_page_token` from the
		 * previous response. The values of other method parameters must be identical
		 * to those in the previous call.
		 * @return {void} Successful response
		 */
		Recommender_projects_locations_insightTypes_insights_list(parent: string, filter: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/insights&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists recommendations for a Cloud project. Requires the recommender.*.list
		 * IAM permission for the specified recommender.
		 * Get v1beta1/{parent}/recommendations
		 * @param {string} parent Required. The container resource on which to execute the request.
		 * Acceptable formats:
		 * 1.
		 * "projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]",
		 * LOCATION here refers to GCP Locations:
		 * https://cloud.google.com/about/locations/
		 * @param {string} filter Filter expression to restrict the recommendations returned. Supported
		 * filter fields: state_info.state
		 * Eg: `state_info.state:"DISMISSED" or state_info.state:"FAILED"
		 * @param {number} pageSize Optional. The maximum number of results to return from this request.  Non-positive
		 * values are ignored. If not specified, the server will determine the number
		 * of results to return.
		 * @param {string} pageToken Optional. If present, retrieves the next batch of results from the preceding call to
		 * this method. `page_token` must be the value of `next_page_token` from the
		 * previous response. The values of other method parameters must be identical
		 * to those in the previous call.
		 * @return {void} Successful response
		 */
		Recommender_projects_locations_recommenders_recommendations_list(parent: string, filter: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/recommendations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}
	}

}

