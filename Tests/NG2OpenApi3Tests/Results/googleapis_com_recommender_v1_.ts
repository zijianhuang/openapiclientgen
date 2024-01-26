import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Contains metadata about how much money a recommendation can save or incur. */
	export interface GoogleCloudRecommenderV1CostProjection {

		/** Represents an amount of money with its currency type. */
		cost?: GoogleTypeMoney;

		/** Represents an amount of money with its currency type. */
		costInLocalCurrency?: GoogleTypeMoney;

		/** Duration for which this cost applies. */
		duration?: string | null;
	}

	/** Contains metadata about how much money a recommendation can save or incur. */
	export interface GoogleCloudRecommenderV1CostProjectionFormProperties {

		/** Duration for which this cost applies. */
		duration: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecommenderV1CostProjectionFormGroup() {
		return new FormGroup<GoogleCloudRecommenderV1CostProjectionFormProperties>({
			duration: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an amount of money with its currency type. */
	export interface GoogleTypeMoney {

		/** The three-letter currency code defined in ISO 4217. */
		currencyCode?: string | null;

		/** Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000. */
		nanos?: number | null;

		/** The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar. */
		units?: string | null;
	}

	/** Represents an amount of money with its currency type. */
	export interface GoogleTypeMoneyFormProperties {

		/** The three-letter currency code defined in ISO 4217. */
		currencyCode: FormControl<string | null | undefined>,

		/** Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000. */
		nanos: FormControl<number | null | undefined>,

		/** The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar. */
		units: FormControl<string | null | undefined>,
	}
	export function CreateGoogleTypeMoneyFormGroup() {
		return new FormGroup<GoogleTypeMoneyFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined),
			nanos: new FormControl<number | null | undefined>(undefined),
			units: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the impact a recommendation can have for a given category. */
	export interface GoogleCloudRecommenderV1Impact {

		/** Category that is being targeted. */
		category?: GoogleCloudRecommenderV1ImpactCategory | null;

		/** Contains metadata about how much money a recommendation can save or incur. */
		costProjection?: GoogleCloudRecommenderV1CostProjection;

		/** Contains information on the impact of a reliability recommendation. */
		reliabilityProjection?: GoogleCloudRecommenderV1ReliabilityProjection;

		/** Contains various ways of describing the impact on Security. */
		securityProjection?: GoogleCloudRecommenderV1SecurityProjection;

		/** Contains metadata about how much sustainability a recommendation can save or incur. */
		sustainabilityProjection?: GoogleCloudRecommenderV1SustainabilityProjection;
	}

	/** Contains the impact a recommendation can have for a given category. */
	export interface GoogleCloudRecommenderV1ImpactFormProperties {

		/** Category that is being targeted. */
		category: FormControl<GoogleCloudRecommenderV1ImpactCategory | null | undefined>,
	}
	export function CreateGoogleCloudRecommenderV1ImpactFormGroup() {
		return new FormGroup<GoogleCloudRecommenderV1ImpactFormProperties>({
			category: new FormControl<GoogleCloudRecommenderV1ImpactCategory | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudRecommenderV1ImpactCategory { CATEGORY_UNSPECIFIED = 0, COST = 1, SECURITY = 2, PERFORMANCE = 3, MANAGEABILITY = 4, SUSTAINABILITY = 5, RELIABILITY = 6 }


	/** Contains information on the impact of a reliability recommendation. */
	export interface GoogleCloudRecommenderV1ReliabilityProjection {

		/** Per-recommender projection. */
		details?: {[id: string]: any };

		/** Reliability risks mitigated by this recommendation. */
		risks?: Array<string>;
	}

	/** Contains information on the impact of a reliability recommendation. */
	export interface GoogleCloudRecommenderV1ReliabilityProjectionFormProperties {

		/** Per-recommender projection. */
		details: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleCloudRecommenderV1ReliabilityProjectionFormGroup() {
		return new FormGroup<GoogleCloudRecommenderV1ReliabilityProjectionFormProperties>({
			details: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Contains various ways of describing the impact on Security. */
	export interface GoogleCloudRecommenderV1SecurityProjection {

		/** Additional security impact details that is provided by the recommender. */
		details?: {[id: string]: any };
	}

	/** Contains various ways of describing the impact on Security. */
	export interface GoogleCloudRecommenderV1SecurityProjectionFormProperties {

		/** Additional security impact details that is provided by the recommender. */
		details: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleCloudRecommenderV1SecurityProjectionFormGroup() {
		return new FormGroup<GoogleCloudRecommenderV1SecurityProjectionFormProperties>({
			details: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Contains metadata about how much sustainability a recommendation can save or incur. */
	export interface GoogleCloudRecommenderV1SustainabilityProjection {

		/** Duration for which this sustainability applies. */
		duration?: string | null;

		/** Carbon Footprint generated in kg of CO2 equivalent. Chose kg_c_o2e so that the name renders correctly in camelCase (kgCO2e). */
		kgCO2e?: number | null;
	}

	/** Contains metadata about how much sustainability a recommendation can save or incur. */
	export interface GoogleCloudRecommenderV1SustainabilityProjectionFormProperties {

		/** Duration for which this sustainability applies. */
		duration: FormControl<string | null | undefined>,

		/** Carbon Footprint generated in kg of CO2 equivalent. Chose kg_c_o2e so that the name renders correctly in camelCase (kgCO2e). */
		kgCO2e: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudRecommenderV1SustainabilityProjectionFormGroup() {
		return new FormGroup<GoogleCloudRecommenderV1SustainabilityProjectionFormProperties>({
			duration: new FormControl<string | null | undefined>(undefined),
			kgCO2e: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An insight along with the information used to derive the insight. The insight may have associated recommendations as well. */
	export interface GoogleCloudRecommenderV1Insight {

		/** Recommendations derived from this insight. */
		associatedRecommendations?: Array<GoogleCloudRecommenderV1InsightRecommendationReference>;

		/** Category being targeted by the insight. */
		category?: GoogleCloudRecommenderV1ImpactCategory | null;

		/** A struct of custom fields to explain the insight. Example: "grantedPermissionsCount": "1000" */
		content?: {[id: string]: any };

		/** Free-form human readable summary in English. The maximum length is 500 characters. */
		description?: string | null;

		/** Fingerprint of the Insight. Provides optimistic locking when updating states. */
		etag?: string | null;

		/** Insight subtype. Insight content schema will be stable for a given subtype. */
		insightSubtype?: string | null;

		/** Timestamp of the latest data used to generate the insight. */
		lastRefreshTime?: string | null;

		/** Name of the insight. */
		name?: string | null;

		/** Observation period that led to the insight. The source data used to generate the insight ends at last_refresh_time and begins at (last_refresh_time - observation_period). */
		observationPeriod?: string | null;

		/** Insight's severity. */
		severity?: GoogleCloudRecommenderV1InsightSeverity | null;

		/** Information related to insight state. */
		stateInfo?: GoogleCloudRecommenderV1InsightStateInfo;

		/** Fully qualified resource names that this insight is targeting. */
		targetResources?: Array<string>;
	}

	/** An insight along with the information used to derive the insight. The insight may have associated recommendations as well. */
	export interface GoogleCloudRecommenderV1InsightFormProperties {

		/** Category being targeted by the insight. */
		category: FormControl<GoogleCloudRecommenderV1ImpactCategory | null | undefined>,

		/** A struct of custom fields to explain the insight. Example: "grantedPermissionsCount": "1000" */
		content: FormControl<{[id: string]: any } | null | undefined>,

		/** Free-form human readable summary in English. The maximum length is 500 characters. */
		description: FormControl<string | null | undefined>,

		/** Fingerprint of the Insight. Provides optimistic locking when updating states. */
		etag: FormControl<string | null | undefined>,

		/** Insight subtype. Insight content schema will be stable for a given subtype. */
		insightSubtype: FormControl<string | null | undefined>,

		/** Timestamp of the latest data used to generate the insight. */
		lastRefreshTime: FormControl<string | null | undefined>,

		/** Name of the insight. */
		name: FormControl<string | null | undefined>,

		/** Observation period that led to the insight. The source data used to generate the insight ends at last_refresh_time and begins at (last_refresh_time - observation_period). */
		observationPeriod: FormControl<string | null | undefined>,

		/** Insight's severity. */
		severity: FormControl<GoogleCloudRecommenderV1InsightSeverity | null | undefined>,
	}
	export function CreateGoogleCloudRecommenderV1InsightFormGroup() {
		return new FormGroup<GoogleCloudRecommenderV1InsightFormProperties>({
			category: new FormControl<GoogleCloudRecommenderV1ImpactCategory | null | undefined>(undefined),
			content: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			insightSubtype: new FormControl<string | null | undefined>(undefined),
			lastRefreshTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			observationPeriod: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<GoogleCloudRecommenderV1InsightSeverity | null | undefined>(undefined),
		});

	}


	/** Reference to an associated recommendation. */
	export interface GoogleCloudRecommenderV1InsightRecommendationReference {

		/** Recommendation resource name, e.g. projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/recommendations/[RECOMMENDATION_ID] */
		recommendation?: string | null;
	}

	/** Reference to an associated recommendation. */
	export interface GoogleCloudRecommenderV1InsightRecommendationReferenceFormProperties {

		/** Recommendation resource name, e.g. projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/recommendations/[RECOMMENDATION_ID] */
		recommendation: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecommenderV1InsightRecommendationReferenceFormGroup() {
		return new FormGroup<GoogleCloudRecommenderV1InsightRecommendationReferenceFormProperties>({
			recommendation: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudRecommenderV1InsightSeverity { SEVERITY_UNSPECIFIED = 0, LOW = 1, MEDIUM = 2, HIGH = 3, CRITICAL = 4 }


	/** Information related to insight state. */
	export interface GoogleCloudRecommenderV1InsightStateInfo {

		/** Insight state. */
		state?: GoogleCloudRecommenderV1InsightStateInfoState | null;

		/** A map of metadata for the state, provided by user or automations systems. */
		stateMetadata?: {[id: string]: string };
	}

	/** Information related to insight state. */
	export interface GoogleCloudRecommenderV1InsightStateInfoFormProperties {

		/** Insight state. */
		state: FormControl<GoogleCloudRecommenderV1InsightStateInfoState | null | undefined>,

		/** A map of metadata for the state, provided by user or automations systems. */
		stateMetadata: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateGoogleCloudRecommenderV1InsightStateInfoFormGroup() {
		return new FormGroup<GoogleCloudRecommenderV1InsightStateInfoFormProperties>({
			state: new FormControl<GoogleCloudRecommenderV1InsightStateInfoState | null | undefined>(undefined),
			stateMetadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudRecommenderV1InsightStateInfoState { STATE_UNSPECIFIED = 0, ACTIVE = 1, ACCEPTED = 2, DISMISSED = 3 }


	/** Configuration for an InsightType. */
	export interface GoogleCloudRecommenderV1InsightTypeConfig {

		/** Allows clients to store small amounts of arbitrary data. Annotations must follow the Kubernetes syntax. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between. */
		annotations?: {[id: string]: string };

		/** A user-settable field to provide a human-readable name to be used in user interfaces. */
		displayName?: string | null;

		/** Fingerprint of the InsightTypeConfig. Provides optimistic locking when updating. */
		etag?: string | null;

		/** A configuration to customize the generation of insights. Eg, customizing the lookback period considered when generating a insight. */
		insightTypeGenerationConfig?: GoogleCloudRecommenderV1InsightTypeGenerationConfig;

		/** Name of insight type config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config */
		name?: string | null;

		/** Output only. Immutable. The revision ID of the config. A new revision is committed whenever the config is changed in any way. The format is an 8-character hexadecimal string. */
		revisionId?: string | null;

		/** Last time when the config was updated. */
		updateTime?: string | null;
	}

	/** Configuration for an InsightType. */
	export interface GoogleCloudRecommenderV1InsightTypeConfigFormProperties {

		/** Allows clients to store small amounts of arbitrary data. Annotations must follow the Kubernetes syntax. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between. */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/** A user-settable field to provide a human-readable name to be used in user interfaces. */
		displayName: FormControl<string | null | undefined>,

		/** Fingerprint of the InsightTypeConfig. Provides optimistic locking when updating. */
		etag: FormControl<string | null | undefined>,

		/** Name of insight type config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config */
		name: FormControl<string | null | undefined>,

		/** Output only. Immutable. The revision ID of the config. A new revision is committed whenever the config is changed in any way. The format is an 8-character hexadecimal string. */
		revisionId: FormControl<string | null | undefined>,

		/** Last time when the config was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecommenderV1InsightTypeConfigFormGroup() {
		return new FormGroup<GoogleCloudRecommenderV1InsightTypeConfigFormProperties>({
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A configuration to customize the generation of insights. Eg, customizing the lookback period considered when generating a insight. */
	export interface GoogleCloudRecommenderV1InsightTypeGenerationConfig {

		/** Parameters for this InsightTypeGenerationConfig. These configs can be used by or are applied to all subtypes. */
		params?: {[id: string]: any };
	}

	/** A configuration to customize the generation of insights. Eg, customizing the lookback period considered when generating a insight. */
	export interface GoogleCloudRecommenderV1InsightTypeGenerationConfigFormProperties {

		/** Parameters for this InsightTypeGenerationConfig. These configs can be used by or are applied to all subtypes. */
		params: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleCloudRecommenderV1InsightTypeGenerationConfigFormGroup() {
		return new FormGroup<GoogleCloudRecommenderV1InsightTypeGenerationConfigFormProperties>({
			params: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Response to the `ListInsights` method. */
	export interface GoogleCloudRecommenderV1ListInsightsResponse {

		/** The set of insights for the `parent` resource. */
		insights?: Array<GoogleCloudRecommenderV1Insight>;

		/** A token that can be used to request the next page of results. This field is empty if there are no additional results. */
		nextPageToken?: string | null;
	}

	/** Response to the `ListInsights` method. */
	export interface GoogleCloudRecommenderV1ListInsightsResponseFormProperties {

		/** A token that can be used to request the next page of results. This field is empty if there are no additional results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecommenderV1ListInsightsResponseFormGroup() {
		return new FormGroup<GoogleCloudRecommenderV1ListInsightsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to the `ListRecommendations` method. */
	export interface GoogleCloudRecommenderV1ListRecommendationsResponse {

		/** A token that can be used to request the next page of results. This field is empty if there are no additional results. */
		nextPageToken?: string | null;

		/** The set of recommendations for the `parent` resource. */
		recommendations?: Array<GoogleCloudRecommenderV1Recommendation>;
	}

	/** Response to the `ListRecommendations` method. */
	export interface GoogleCloudRecommenderV1ListRecommendationsResponseFormProperties {

		/** A token that can be used to request the next page of results. This field is empty if there are no additional results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecommenderV1ListRecommendationsResponseFormGroup() {
		return new FormGroup<GoogleCloudRecommenderV1ListRecommendationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A recommendation along with a suggested action. E.g., a rightsizing recommendation for an underutilized VM, IAM role recommendations, etc */
	export interface GoogleCloudRecommenderV1Recommendation {

		/** Optional set of additional impact that this recommendation may have when trying to optimize for the primary category. These may be positive or negative. */
		additionalImpact?: Array<GoogleCloudRecommenderV1Impact>;

		/** Insights that led to this recommendation. */
		associatedInsights?: Array<GoogleCloudRecommenderV1RecommendationInsightReference>;

		/** Contains what resources are changing and how they are changing. */
		content?: GoogleCloudRecommenderV1RecommendationContent;

		/** Free-form human readable summary in English. The maximum length is 500 characters. */
		description?: string | null;

		/** Fingerprint of the Recommendation. Provides optimistic locking when updating states. */
		etag?: string | null;

		/** Last time this recommendation was refreshed by the system that created it in the first place. */
		lastRefreshTime?: string | null;

		/** Name of recommendation. */
		name?: string | null;

		/** Contains the impact a recommendation can have for a given category. */
		primaryImpact?: GoogleCloudRecommenderV1Impact;

		/** Recommendation's priority. */
		priority?: GoogleCloudRecommenderV1RecommendationPriority | null;

		/** Contains an identifier for a subtype of recommendations produced for the same recommender. Subtype is a function of content and impact, meaning a new subtype might be added when significant changes to `content` or `primary_impact.category` are introduced. See the Recommenders section to see a list of subtypes for a given Recommender. Examples: For recommender = "google.iam.policy.Recommender", recommender_subtype can be one of "REMOVE_ROLE"/"REPLACE_ROLE" */
		recommenderSubtype?: string | null;

		/** Information for state. Contains state and metadata. */
		stateInfo?: GoogleCloudRecommenderV1RecommendationStateInfo;

		/** Corresponds to a mutually exclusive group ID within a recommender. A non-empty ID indicates that the recommendation belongs to a mutually exclusive group. This means that only one recommendation within the group is suggested to be applied. */
		xorGroupId?: string | null;
	}

	/** A recommendation along with a suggested action. E.g., a rightsizing recommendation for an underutilized VM, IAM role recommendations, etc */
	export interface GoogleCloudRecommenderV1RecommendationFormProperties {

		/** Free-form human readable summary in English. The maximum length is 500 characters. */
		description: FormControl<string | null | undefined>,

		/** Fingerprint of the Recommendation. Provides optimistic locking when updating states. */
		etag: FormControl<string | null | undefined>,

		/** Last time this recommendation was refreshed by the system that created it in the first place. */
		lastRefreshTime: FormControl<string | null | undefined>,

		/** Name of recommendation. */
		name: FormControl<string | null | undefined>,

		/** Recommendation's priority. */
		priority: FormControl<GoogleCloudRecommenderV1RecommendationPriority | null | undefined>,

		/** Contains an identifier for a subtype of recommendations produced for the same recommender. Subtype is a function of content and impact, meaning a new subtype might be added when significant changes to `content` or `primary_impact.category` are introduced. See the Recommenders section to see a list of subtypes for a given Recommender. Examples: For recommender = "google.iam.policy.Recommender", recommender_subtype can be one of "REMOVE_ROLE"/"REPLACE_ROLE" */
		recommenderSubtype: FormControl<string | null | undefined>,

		/** Corresponds to a mutually exclusive group ID within a recommender. A non-empty ID indicates that the recommendation belongs to a mutually exclusive group. This means that only one recommendation within the group is suggested to be applied. */
		xorGroupId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecommenderV1RecommendationFormGroup() {
		return new FormGroup<GoogleCloudRecommenderV1RecommendationFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			lastRefreshTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<GoogleCloudRecommenderV1RecommendationPriority | null | undefined>(undefined),
			recommenderSubtype: new FormControl<string | null | undefined>(undefined),
			xorGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Reference to an associated insight. */
	export interface GoogleCloudRecommenderV1RecommendationInsightReference {

		/** Insight resource name, e.g. projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/insights/[INSIGHT_ID] */
		insight?: string | null;
	}

	/** Reference to an associated insight. */
	export interface GoogleCloudRecommenderV1RecommendationInsightReferenceFormProperties {

		/** Insight resource name, e.g. projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/insights/[INSIGHT_ID] */
		insight: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecommenderV1RecommendationInsightReferenceFormGroup() {
		return new FormGroup<GoogleCloudRecommenderV1RecommendationInsightReferenceFormProperties>({
			insight: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains what resources are changing and how they are changing. */
	export interface GoogleCloudRecommenderV1RecommendationContent {

		/** Operations to one or more Google Cloud resources grouped in such a way that, all operations within one group are expected to be performed atomically and in an order. */
		operationGroups?: Array<GoogleCloudRecommenderV1OperationGroup>;

		/** Condensed overview information about the recommendation. */
		overview?: {[id: string]: any };
	}

	/** Contains what resources are changing and how they are changing. */
	export interface GoogleCloudRecommenderV1RecommendationContentFormProperties {

		/** Condensed overview information about the recommendation. */
		overview: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleCloudRecommenderV1RecommendationContentFormGroup() {
		return new FormGroup<GoogleCloudRecommenderV1RecommendationContentFormProperties>({
			overview: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Group of operations that need to be performed atomically. */
	export interface GoogleCloudRecommenderV1OperationGroup {

		/** List of operations across one or more resources that belong to this group. Loosely based on RFC6902 and should be performed in the order they appear. */
		operations?: Array<GoogleCloudRecommenderV1Operation>;
	}

	/** Group of operations that need to be performed atomically. */
	export interface GoogleCloudRecommenderV1OperationGroupFormProperties {
	}
	export function CreateGoogleCloudRecommenderV1OperationGroupFormGroup() {
		return new FormGroup<GoogleCloudRecommenderV1OperationGroupFormProperties>({
		});

	}


	/** Contains an operation for a resource loosely based on the JSON-PATCH format with support for: * Custom filters for describing partial array patch. * Extended path values for describing nested arrays. * Custom fields for describing the resource for which the operation is being described. * Allows extension to custom operations not natively supported by RFC6902. See https://tools.ietf.org/html/rfc6902 for details on the original RFC. */
	export interface GoogleCloudRecommenderV1Operation {

		/** Type of this operation. Contains one of 'add', 'remove', 'replace', 'move', 'copy', 'test' and custom operations. This field is case-insensitive and always populated. */
		action?: string | null;

		/** Path to the target field being operated on. If the operation is at the resource level, then path should be "/". This field is always populated. */
		path?: string | null;

		/** Set of filters to apply if `path` refers to array elements or nested array elements in order to narrow down to a single unique element that is being tested/modified. This is intended to be an exact match per filter. To perform advanced matching, use path_value_matchers. * Example: ``` { "/versions/name" : "it-123" "/versions/targetSize/percent": 20 } ``` * Example: ``` { "/bindings/role": "roles/owner" "/bindings/condition" : null } ``` * Example: ``` { "/bindings/role": "roles/owner" "/bindings/members/*" : ["x@example.com", "y@example.com"] } ``` When both path_filters and path_value_matchers are set, an implicit AND must be performed. */
		pathFilters?: {[id: string]: any };

		/** Similar to path_filters, this contains set of filters to apply if `path` field refers to array elements. This is meant to support value matching beyond exact match. To perform exact match, use path_filters. When both path_filters and path_value_matchers are set, an implicit AND must be performed. */
		pathValueMatchers?: {[id: string]: GoogleCloudRecommenderV1ValueMatcher };

		/** Contains the fully qualified resource name. This field is always populated. ex: //cloudresourcemanager.googleapis.com/projects/foo. */
		resource?: string | null;

		/** Type of GCP resource being modified/tested. This field is always populated. Example: cloudresourcemanager.googleapis.com/Project, compute.googleapis.com/Instance */
		resourceType?: string | null;

		/** Can be set with action 'copy' or 'move' to indicate the source field within resource or source_resource, ignored if provided for other operation types. */
		sourcePath?: string | null;

		/** Can be set with action 'copy' to copy resource configuration across different resources of the same type. Example: A resource clone can be done via action = 'copy', path = "/", from = "/", source_resource = and resource_name = . This field is empty for all other values of `action`. */
		sourceResource?: string | null;

		/** Value for the `path` field. Will be set for actions:'add'/'replace'. Maybe set for action: 'test'. Either this or `value_matcher` will be set for 'test' operation. An exact match must be performed. */
		value?: any;

		/** Contains various matching options for values for a GCP resource field. */
		valueMatcher?: GoogleCloudRecommenderV1ValueMatcher;
	}

	/** Contains an operation for a resource loosely based on the JSON-PATCH format with support for: * Custom filters for describing partial array patch. * Extended path values for describing nested arrays. * Custom fields for describing the resource for which the operation is being described. * Allows extension to custom operations not natively supported by RFC6902. See https://tools.ietf.org/html/rfc6902 for details on the original RFC. */
	export interface GoogleCloudRecommenderV1OperationFormProperties {

		/** Type of this operation. Contains one of 'add', 'remove', 'replace', 'move', 'copy', 'test' and custom operations. This field is case-insensitive and always populated. */
		action: FormControl<string | null | undefined>,

		/** Path to the target field being operated on. If the operation is at the resource level, then path should be "/". This field is always populated. */
		path: FormControl<string | null | undefined>,

		/** Set of filters to apply if `path` refers to array elements or nested array elements in order to narrow down to a single unique element that is being tested/modified. This is intended to be an exact match per filter. To perform advanced matching, use path_value_matchers. * Example: ``` { "/versions/name" : "it-123" "/versions/targetSize/percent": 20 } ``` * Example: ``` { "/bindings/role": "roles/owner" "/bindings/condition" : null } ``` * Example: ``` { "/bindings/role": "roles/owner" "/bindings/members/*" : ["x@example.com", "y@example.com"] } ``` When both path_filters and path_value_matchers are set, an implicit AND must be performed. */
		pathFilters: FormControl<{[id: string]: any } | null | undefined>,

		/** Similar to path_filters, this contains set of filters to apply if `path` field refers to array elements. This is meant to support value matching beyond exact match. To perform exact match, use path_filters. When both path_filters and path_value_matchers are set, an implicit AND must be performed. */
		pathValueMatchers: FormControl<{[id: string]: GoogleCloudRecommenderV1ValueMatcher } | null | undefined>,

		/** Contains the fully qualified resource name. This field is always populated. ex: //cloudresourcemanager.googleapis.com/projects/foo. */
		resource: FormControl<string | null | undefined>,

		/** Type of GCP resource being modified/tested. This field is always populated. Example: cloudresourcemanager.googleapis.com/Project, compute.googleapis.com/Instance */
		resourceType: FormControl<string | null | undefined>,

		/** Can be set with action 'copy' or 'move' to indicate the source field within resource or source_resource, ignored if provided for other operation types. */
		sourcePath: FormControl<string | null | undefined>,

		/** Can be set with action 'copy' to copy resource configuration across different resources of the same type. Example: A resource clone can be done via action = 'copy', path = "/", from = "/", source_resource = and resource_name = . This field is empty for all other values of `action`. */
		sourceResource: FormControl<string | null | undefined>,

		/** Value for the `path` field. Will be set for actions:'add'/'replace'. Maybe set for action: 'test'. Either this or `value_matcher` will be set for 'test' operation. An exact match must be performed. */
		value: FormControl<any | null | undefined>,
	}
	export function CreateGoogleCloudRecommenderV1OperationFormGroup() {
		return new FormGroup<GoogleCloudRecommenderV1OperationFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			pathFilters: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			pathValueMatchers: new FormControl<{[id: string]: GoogleCloudRecommenderV1ValueMatcher } | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
			sourcePath: new FormControl<string | null | undefined>(undefined),
			sourceResource: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Contains various matching options for values for a GCP resource field. */
	export interface GoogleCloudRecommenderV1ValueMatcher {

		/** To be used for full regex matching. The regular expression is using the Google RE2 syntax (https://github.com/google/re2/wiki/Syntax), so to be used with RE2::FullMatch */
		matchesPattern?: string | null;
	}

	/** Contains various matching options for values for a GCP resource field. */
	export interface GoogleCloudRecommenderV1ValueMatcherFormProperties {

		/** To be used for full regex matching. The regular expression is using the Google RE2 syntax (https://github.com/google/re2/wiki/Syntax), so to be used with RE2::FullMatch */
		matchesPattern: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecommenderV1ValueMatcherFormGroup() {
		return new FormGroup<GoogleCloudRecommenderV1ValueMatcherFormProperties>({
			matchesPattern: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudRecommenderV1RecommendationPriority { PRIORITY_UNSPECIFIED = 0, P4 = 1, P3 = 2, P2 = 3, P1 = 4 }


	/** Information for state. Contains state and metadata. */
	export interface GoogleCloudRecommenderV1RecommendationStateInfo {

		/** The state of the recommendation, Eg ACTIVE, SUCCEEDED, FAILED. */
		state?: GoogleCloudRecommenderV1RecommendationStateInfoState | null;

		/** A map of metadata for the state, provided by user or automations systems. */
		stateMetadata?: {[id: string]: string };
	}

	/** Information for state. Contains state and metadata. */
	export interface GoogleCloudRecommenderV1RecommendationStateInfoFormProperties {

		/** The state of the recommendation, Eg ACTIVE, SUCCEEDED, FAILED. */
		state: FormControl<GoogleCloudRecommenderV1RecommendationStateInfoState | null | undefined>,

		/** A map of metadata for the state, provided by user or automations systems. */
		stateMetadata: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateGoogleCloudRecommenderV1RecommendationStateInfoFormGroup() {
		return new FormGroup<GoogleCloudRecommenderV1RecommendationStateInfoFormProperties>({
			state: new FormControl<GoogleCloudRecommenderV1RecommendationStateInfoState | null | undefined>(undefined),
			stateMetadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudRecommenderV1RecommendationStateInfoState { STATE_UNSPECIFIED = 0, ACTIVE = 1, CLAIMED = 2, SUCCEEDED = 3, FAILED = 4, DISMISSED = 5 }


	/** Request for the `MarkInsightAccepted` method. */
	export interface GoogleCloudRecommenderV1MarkInsightAcceptedRequest {

		/** Required. Fingerprint of the Insight. Provides optimistic locking. */
		etag?: string | null;

		/** Optional. State properties user wish to include with this state. Full replace of the current state_metadata. */
		stateMetadata?: {[id: string]: string };
	}

	/** Request for the `MarkInsightAccepted` method. */
	export interface GoogleCloudRecommenderV1MarkInsightAcceptedRequestFormProperties {

		/** Required. Fingerprint of the Insight. Provides optimistic locking. */
		etag: FormControl<string | null | undefined>,

		/** Optional. State properties user wish to include with this state. Full replace of the current state_metadata. */
		stateMetadata: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateGoogleCloudRecommenderV1MarkInsightAcceptedRequestFormGroup() {
		return new FormGroup<GoogleCloudRecommenderV1MarkInsightAcceptedRequestFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			stateMetadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Request for the `MarkRecommendationClaimed` Method. */
	export interface GoogleCloudRecommenderV1MarkRecommendationClaimedRequest {

		/** Required. Fingerprint of the Recommendation. Provides optimistic locking. */
		etag?: string | null;

		/** State properties to include with this state. Overwrites any existing `state_metadata`. Keys must match the regex `/^a-z0-9{0,62}$/`. Values must match the regex `/^[a-zA-Z0-9_./-]{0,255}$/`. */
		stateMetadata?: {[id: string]: string };
	}

	/** Request for the `MarkRecommendationClaimed` Method. */
	export interface GoogleCloudRecommenderV1MarkRecommendationClaimedRequestFormProperties {

		/** Required. Fingerprint of the Recommendation. Provides optimistic locking. */
		etag: FormControl<string | null | undefined>,

		/** State properties to include with this state. Overwrites any existing `state_metadata`. Keys must match the regex `/^a-z0-9{0,62}$/`. Values must match the regex `/^[a-zA-Z0-9_./-]{0,255}$/`. */
		stateMetadata: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateGoogleCloudRecommenderV1MarkRecommendationClaimedRequestFormGroup() {
		return new FormGroup<GoogleCloudRecommenderV1MarkRecommendationClaimedRequestFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			stateMetadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Request for the `MarkRecommendationDismissed` Method. */
	export interface GoogleCloudRecommenderV1MarkRecommendationDismissedRequest {

		/** Fingerprint of the Recommendation. Provides optimistic locking. */
		etag?: string | null;
	}

	/** Request for the `MarkRecommendationDismissed` Method. */
	export interface GoogleCloudRecommenderV1MarkRecommendationDismissedRequestFormProperties {

		/** Fingerprint of the Recommendation. Provides optimistic locking. */
		etag: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecommenderV1MarkRecommendationDismissedRequestFormGroup() {
		return new FormGroup<GoogleCloudRecommenderV1MarkRecommendationDismissedRequestFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for the `MarkRecommendationFailed` Method. */
	export interface GoogleCloudRecommenderV1MarkRecommendationFailedRequest {

		/** Required. Fingerprint of the Recommendation. Provides optimistic locking. */
		etag?: string | null;

		/** State properties to include with this state. Overwrites any existing `state_metadata`. Keys must match the regex `/^a-z0-9{0,62}$/`. Values must match the regex `/^[a-zA-Z0-9_./-]{0,255}$/`. */
		stateMetadata?: {[id: string]: string };
	}

	/** Request for the `MarkRecommendationFailed` Method. */
	export interface GoogleCloudRecommenderV1MarkRecommendationFailedRequestFormProperties {

		/** Required. Fingerprint of the Recommendation. Provides optimistic locking. */
		etag: FormControl<string | null | undefined>,

		/** State properties to include with this state. Overwrites any existing `state_metadata`. Keys must match the regex `/^a-z0-9{0,62}$/`. Values must match the regex `/^[a-zA-Z0-9_./-]{0,255}$/`. */
		stateMetadata: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateGoogleCloudRecommenderV1MarkRecommendationFailedRequestFormGroup() {
		return new FormGroup<GoogleCloudRecommenderV1MarkRecommendationFailedRequestFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			stateMetadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Request for the `MarkRecommendationSucceeded` Method. */
	export interface GoogleCloudRecommenderV1MarkRecommendationSucceededRequest {

		/** Required. Fingerprint of the Recommendation. Provides optimistic locking. */
		etag?: string | null;

		/** State properties to include with this state. Overwrites any existing `state_metadata`. Keys must match the regex `/^a-z0-9{0,62}$/`. Values must match the regex `/^[a-zA-Z0-9_./-]{0,255}$/`. */
		stateMetadata?: {[id: string]: string };
	}

	/** Request for the `MarkRecommendationSucceeded` Method. */
	export interface GoogleCloudRecommenderV1MarkRecommendationSucceededRequestFormProperties {

		/** Required. Fingerprint of the Recommendation. Provides optimistic locking. */
		etag: FormControl<string | null | undefined>,

		/** State properties to include with this state. Overwrites any existing `state_metadata`. Keys must match the regex `/^a-z0-9{0,62}$/`. Values must match the regex `/^[a-zA-Z0-9_./-]{0,255}$/`. */
		stateMetadata: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateGoogleCloudRecommenderV1MarkRecommendationSucceededRequestFormGroup() {
		return new FormGroup<GoogleCloudRecommenderV1MarkRecommendationSucceededRequestFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			stateMetadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Configuration for a Recommender. */
	export interface GoogleCloudRecommenderV1RecommenderConfig {

		/** Allows clients to store small amounts of arbitrary data. Annotations must follow the Kubernetes syntax. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between. */
		annotations?: {[id: string]: string };

		/** A user-settable field to provide a human-readable name to be used in user interfaces. */
		displayName?: string | null;

		/** Fingerprint of the RecommenderConfig. Provides optimistic locking when updating. */
		etag?: string | null;

		/** Name of recommender config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config */
		name?: string | null;

		/** A Configuration to customize the generation of recommendations. Eg, customizing the lookback period considered when generating a recommendation. */
		recommenderGenerationConfig?: GoogleCloudRecommenderV1RecommenderGenerationConfig;

		/** Output only. Immutable. The revision ID of the config. A new revision is committed whenever the config is changed in any way. The format is an 8-character hexadecimal string. */
		revisionId?: string | null;

		/** Last time when the config was updated. */
		updateTime?: string | null;
	}

	/** Configuration for a Recommender. */
	export interface GoogleCloudRecommenderV1RecommenderConfigFormProperties {

		/** Allows clients to store small amounts of arbitrary data. Annotations must follow the Kubernetes syntax. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between. */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/** A user-settable field to provide a human-readable name to be used in user interfaces. */
		displayName: FormControl<string | null | undefined>,

		/** Fingerprint of the RecommenderConfig. Provides optimistic locking when updating. */
		etag: FormControl<string | null | undefined>,

		/** Name of recommender config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config */
		name: FormControl<string | null | undefined>,

		/** Output only. Immutable. The revision ID of the config. A new revision is committed whenever the config is changed in any way. The format is an 8-character hexadecimal string. */
		revisionId: FormControl<string | null | undefined>,

		/** Last time when the config was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecommenderV1RecommenderConfigFormGroup() {
		return new FormGroup<GoogleCloudRecommenderV1RecommenderConfigFormProperties>({
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Configuration to customize the generation of recommendations. Eg, customizing the lookback period considered when generating a recommendation. */
	export interface GoogleCloudRecommenderV1RecommenderGenerationConfig {

		/** Parameters for this RecommenderGenerationConfig. These configs can be used by or are applied to all subtypes. */
		params?: {[id: string]: any };
	}

	/** A Configuration to customize the generation of recommendations. Eg, customizing the lookback period considered when generating a recommendation. */
	export interface GoogleCloudRecommenderV1RecommenderGenerationConfigFormProperties {

		/** Parameters for this RecommenderGenerationConfig. These configs can be used by or are applied to all subtypes. */
		params: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleCloudRecommenderV1RecommenderGenerationConfigFormGroup() {
		return new FormGroup<GoogleCloudRecommenderV1RecommenderGenerationConfigFormProperties>({
			params: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets the requested recommendation. Requires the recommender.*.get IAM permission for the specified recommender.
		 * Get v1/{name}
		 * @param {string} name Required. Name of the recommendation.
		 * @return {GoogleCloudRecommenderV1Recommendation} Successful response
		 */
		Recommender_projects_locations_recommenders_recommendations_get(name: string): Observable<GoogleCloudRecommenderV1Recommendation> {
			return this.http.get<GoogleCloudRecommenderV1Recommendation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates a Recommender Config. This will create a new revision of the config.
		 * Patch v1/{name}
		 * @param {string} name Name of recommender config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config
		 * @param {string} updateMask The list of fields to be updated.
		 * @param {boolean} validateOnly If true, validate the request and preview the change, but do not actually update it.
		 * @return {GoogleCloudRecommenderV1RecommenderConfig} Successful response
		 */
		Recommender_projects_locations_recommenders_updateConfig(name: string, updateMask: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: GoogleCloudRecommenderV1RecommenderConfig): Observable<GoogleCloudRecommenderV1RecommenderConfig> {
			return this.http.patch<GoogleCloudRecommenderV1RecommenderConfig>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Marks the Insight State as Accepted. Users can use this method to indicate to the Recommender API that they have applied some action based on the insight. This stops the insight content from being updated. MarkInsightAccepted can be applied to insights in ACTIVE state. Requires the recommender.*.update IAM permission for the specified insight.
		 * Post v1/{name}:markAccepted
		 * @param {string} name Required. Name of the insight.
		 * @return {GoogleCloudRecommenderV1Insight} Successful response
		 */
		Recommender_projects_locations_insightTypes_insights_markAccepted(name: string, requestBody: GoogleCloudRecommenderV1MarkInsightAcceptedRequest): Observable<GoogleCloudRecommenderV1Insight> {
			return this.http.post<GoogleCloudRecommenderV1Insight>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':markAccepted', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Marks the Recommendation State as Claimed. Users can use this method to indicate to the Recommender API that they are starting to apply the recommendation themselves. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationClaimed can be applied to recommendations in CLAIMED, SUCCEEDED, FAILED, or ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.
		 * Post v1/{name}:markClaimed
		 * @param {string} name Required. Name of the recommendation.
		 * @return {GoogleCloudRecommenderV1Recommendation} Successful response
		 */
		Recommender_projects_locations_recommenders_recommendations_markClaimed(name: string, requestBody: GoogleCloudRecommenderV1MarkRecommendationClaimedRequest): Observable<GoogleCloudRecommenderV1Recommendation> {
			return this.http.post<GoogleCloudRecommenderV1Recommendation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':markClaimed', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Mark the Recommendation State as Dismissed. Users can use this method to indicate to the Recommender API that an ACTIVE recommendation has to be marked back as DISMISSED. MarkRecommendationDismissed can be applied to recommendations in ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.
		 * Post v1/{name}:markDismissed
		 * @param {string} name Required. Name of the recommendation.
		 * @return {GoogleCloudRecommenderV1Recommendation} Successful response
		 */
		Recommender_projects_locations_recommenders_recommendations_markDismissed(name: string, requestBody: GoogleCloudRecommenderV1MarkRecommendationDismissedRequest): Observable<GoogleCloudRecommenderV1Recommendation> {
			return this.http.post<GoogleCloudRecommenderV1Recommendation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':markDismissed', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Marks the Recommendation State as Failed. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation failed. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationFailed can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.
		 * Post v1/{name}:markFailed
		 * @param {string} name Required. Name of the recommendation.
		 * @return {GoogleCloudRecommenderV1Recommendation} Successful response
		 */
		Recommender_projects_locations_recommenders_recommendations_markFailed(name: string, requestBody: GoogleCloudRecommenderV1MarkRecommendationFailedRequest): Observable<GoogleCloudRecommenderV1Recommendation> {
			return this.http.post<GoogleCloudRecommenderV1Recommendation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':markFailed', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Marks the Recommendation State as Succeeded. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation was successful. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationSucceeded can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.
		 * Post v1/{name}:markSucceeded
		 * @param {string} name Required. Name of the recommendation.
		 * @return {GoogleCloudRecommenderV1Recommendation} Successful response
		 */
		Recommender_projects_locations_recommenders_recommendations_markSucceeded(name: string, requestBody: GoogleCloudRecommenderV1MarkRecommendationSucceededRequest): Observable<GoogleCloudRecommenderV1Recommendation> {
			return this.http.post<GoogleCloudRecommenderV1Recommendation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':markSucceeded', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists insights for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified insight type.
		 * Get v1/{parent}/insights
		 * @param {string} parent Required. The container resource on which to execute the request. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `projects/[PROJECT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `folders/[FOLDER_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ INSIGHT_TYPE_ID refers to supported insight types: https://cloud.google.com/recommender/docs/insights/insight-types.
		 * @param {string} filter Optional. Filter expression to restrict the insights returned. Supported filter fields: * `stateInfo.state` * `insightSubtype` * `severity` * `targetResources` Examples: * `stateInfo.state = ACTIVE OR stateInfo.state = DISMISSED` * `insightSubtype = PERMISSIONS_USAGE` * `severity = CRITICAL OR severity = HIGH` * `targetResources : //compute.googleapis.com/projects/1234/zones/us-central1-a/instances/instance-1` * `stateInfo.state = ACTIVE AND (severity = CRITICAL OR severity = HIGH)` The max allowed filter length is 500 characters. (These expressions are based on the filter language described at https://google.aip.dev/160)
		 * @param {number} pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return.
		 * @param {string} pageToken Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call.
		 * @return {GoogleCloudRecommenderV1ListInsightsResponse} Successful response
		 */
		Recommender_projects_locations_insightTypes_insights_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudRecommenderV1ListInsightsResponse> {
			return this.http.get<GoogleCloudRecommenderV1ListInsightsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/insights&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists recommendations for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified recommender.
		 * Get v1/{parent}/recommendations
		 * @param {string} parent Required. The container resource on which to execute the request. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `projects/[PROJECT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `folders/[FOLDER_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ RECOMMENDER_ID refers to supported recommenders: https://cloud.google.com/recommender/docs/recommenders.
		 * @param {string} filter Filter expression to restrict the recommendations returned. Supported filter fields: * `state_info.state` * `recommenderSubtype` * `priority` * `targetResources` Examples: * `stateInfo.state = ACTIVE OR stateInfo.state = DISMISSED` * `recommenderSubtype = REMOVE_ROLE OR recommenderSubtype = REPLACE_ROLE` * `priority = P1 OR priority = P2` * `targetResources : //compute.googleapis.com/projects/1234/zones/us-central1-a/instances/instance-1` * `stateInfo.state = ACTIVE AND (priority = P1 OR priority = P2)` The max allowed filter length is 500 characters. (These expressions are based on the filter language described at https://google.aip.dev/160)
		 * @param {number} pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return.
		 * @param {string} pageToken Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call.
		 * @return {GoogleCloudRecommenderV1ListRecommendationsResponse} Successful response
		 */
		Recommender_projects_locations_recommenders_recommendations_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudRecommenderV1ListRecommendationsResponse> {
			return this.http.get<GoogleCloudRecommenderV1ListRecommendationsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/recommendations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}
	}

}

