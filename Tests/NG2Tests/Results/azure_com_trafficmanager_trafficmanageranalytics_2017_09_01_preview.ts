import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An error returned by the Azure Resource Manager */
	export interface CloudError {

		/** The content of an error returned by the Azure Resource Manager */
		error?: CloudErrorBody;
	}

	/** An error returned by the Azure Resource Manager */
	export interface CloudErrorFormProperties {
	}
	export function CreateCloudErrorFormGroup() {
		return new FormGroup<CloudErrorFormProperties>({
		});

	}


	/** The content of an error returned by the Azure Resource Manager */
	export interface CloudErrorBody {

		/** Error code */
		code?: string | null;

		/** Error details */
		details?: Array<CloudErrorBody>;

		/** Error message */
		message?: string | null;

		/** Error target */
		target?: string | null;
	}

	/** The content of an error returned by the Azure Resource Manager */
	export interface CloudErrorBodyFormProperties {

		/** Error code */
		code: FormControl<string | null | undefined>,

		/** Error message */
		message: FormControl<string | null | undefined>,

		/** Error target */
		target: FormControl<string | null | undefined>,
	}
	export function CreateCloudErrorBodyFormGroup() {
		return new FormGroup<CloudErrorBodyFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of the request or operation. */
	export interface DeleteOperationResult {

		/** The result of the operation or request. */
		boolean?: boolean | null;
	}

	/** The result of the request or operation. */
	export interface DeleteOperationResultFormProperties {

		/** The result of the operation or request. */
		boolean: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteOperationResultFormGroup() {
		return new FormGroup<DeleteOperationResultFormProperties>({
			boolean: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Class which is a sparse representation of a Traffic Manager endpoint. */
	export interface HeatMapEndpoint {

		/** A number uniquely identifying this endpoint in query experiences. */
		endpointId?: number | null;

		/** The ARM Resource ID of this Traffic Manager endpoint. */
		resourceId?: string | null;
	}

	/** Class which is a sparse representation of a Traffic Manager endpoint. */
	export interface HeatMapEndpointFormProperties {

		/** A number uniquely identifying this endpoint in query experiences. */
		endpointId: FormControl<number | null | undefined>,

		/** The ARM Resource ID of this Traffic Manager endpoint. */
		resourceId: FormControl<string | null | undefined>,
	}
	export function CreateHeatMapEndpointFormGroup() {
		return new FormGroup<HeatMapEndpointFormProperties>({
			endpointId: new FormControl<number | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Class representing a Traffic Manager HeatMap. */
	export interface HeatMapModel extends ProxyResource {

		/** Class representing a Traffic Manager HeatMap properties. */
		properties?: HeatMapProperties;
	}

	/** Class representing a Traffic Manager HeatMap. */
	export interface HeatMapModelFormProperties extends ProxyResourceFormProperties {
	}
	export function CreateHeatMapModelFormGroup() {
		return new FormGroup<HeatMapModelFormProperties>({
		});

	}


	/** Class representing a Traffic Manager HeatMap properties. */
	export interface HeatMapProperties {

		/** The ending of the time window for this HeatMap, exclusive. */
		endTime?: Date | null;

		/** The endpoints used in this HeatMap calculation. */
		endpoints?: Array<HeatMapEndpoint>;

		/** The beginning of the time window for this HeatMap, inclusive. */
		startTime?: Date | null;

		/** The traffic flows produced in this HeatMap calculation. */
		trafficFlows?: Array<TrafficFlow>;
	}

	/** Class representing a Traffic Manager HeatMap properties. */
	export interface HeatMapPropertiesFormProperties {

		/** The ending of the time window for this HeatMap, exclusive. */
		endTime: FormControl<Date | null | undefined>,

		/** The beginning of the time window for this HeatMap, inclusive. */
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateHeatMapPropertiesFormGroup() {
		return new FormGroup<HeatMapPropertiesFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Class representing a Traffic Manager HeatMap traffic flow properties. */
	export interface TrafficFlow {

		/** The approximate latitude that these queries originated from. */
		latitude?: number | null;

		/** The approximate longitude that these queries originated from. */
		longitude?: number | null;

		/** The query experiences produced in this HeatMap calculation. */
		queryExperiences?: Array<QueryExperience>;

		/** The IP address that this query experience originated from. */
		sourceIp?: string | null;
	}

	/** Class representing a Traffic Manager HeatMap traffic flow properties. */
	export interface TrafficFlowFormProperties {

		/** The approximate latitude that these queries originated from. */
		latitude: FormControl<number | null | undefined>,

		/** The approximate longitude that these queries originated from. */
		longitude: FormControl<number | null | undefined>,

		/** The IP address that this query experience originated from. */
		sourceIp: FormControl<string | null | undefined>,
	}
	export function CreateTrafficFlowFormGroup() {
		return new FormGroup<TrafficFlowFormProperties>({
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
			sourceIp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Class representing a Traffic Manager HeatMap query experience properties. */
	export interface QueryExperience {

		/**
		 * The id of the endpoint from the 'endpoints' array which these queries were routed to.
		 * Required
		 */
		endpointId: number;

		/** The latency experienced by queries originating from this location. */
		latency?: number | null;

		/**
		 * The number of queries originating from this location.
		 * Required
		 */
		queryCount: number;
	}

	/** Class representing a Traffic Manager HeatMap query experience properties. */
	export interface QueryExperienceFormProperties {

		/**
		 * The id of the endpoint from the 'endpoints' array which these queries were routed to.
		 * Required
		 */
		endpointId: FormControl<number | null | undefined>,

		/** The latency experienced by queries originating from this location. */
		latency: FormControl<number | null | undefined>,

		/**
		 * The number of queries originating from this location.
		 * Required
		 */
		queryCount: FormControl<number | null | undefined>,
	}
	export function CreateQueryExperienceFormGroup() {
		return new FormGroup<QueryExperienceFormProperties>({
			endpointId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			latency: new FormControl<number | null | undefined>(undefined),
			queryCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The resource model definition for a ARM proxy resource. It will have everything other than required location and tags */
	export interface ProxyResource {
	}

	/** The resource model definition for a ARM proxy resource. It will have everything other than required location and tags */
	export interface ProxyResourceFormProperties {
	}
	export function CreateProxyResourceFormGroup() {
		return new FormGroup<ProxyResourceFormProperties>({
		});

	}


	/** The core properties of ARM resources */
	export interface Resource {

		/** Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{resourceName} */
		id?: string | null;

		/** The name of the resource */
		name?: string | null;

		/** The type of the resource. Ex- Microsoft.Network/trafficManagerProfiles. */
		type?: string | null;
	}

	/** The core properties of ARM resources */
	export interface ResourceFormProperties {

		/** Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{resourceName} */
		id: FormControl<string | null | undefined>,

		/** The name of the resource */
		name: FormControl<string | null | undefined>,

		/** The type of the resource. Ex- Microsoft.Network/trafficManagerProfiles. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The resource model definition for a ARM tracked top level resource */
	export interface TrackedResource extends Resource {

		/** The Azure Region where the resource lives */
		location?: string | null;

		/** Resource tags. */
		tags?: {[id: string]: string };
	}

	/** The resource model definition for a ARM tracked top level resource */
	export interface TrackedResourceFormProperties extends ResourceFormProperties {

		/** The Azure Region where the resource lives */
		location: FormControl<string | null | undefined>,

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTrackedResourceFormGroup() {
		return new FormGroup<TrackedResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Class representing a Traffic Manager Real User Metrics key response. */
	export interface TrafficManagerUserMetricsKeyModel extends ProxyResource {

		/** Fully qualified resource Id for the resource. Ex - /providers/Microsoft.Network/trafficManagerUserMetricsKeys */
		id?: string | null;

		/** The key returned by the Real User Metrics operation. */
		key?: string | null;

		/** The word default. */
		name?: string | null;

		/** The type of the resource. Ex- Microsoft.Network/trafficManagerUserMetricsKeys. */
		type?: string | null;
	}

	/** Class representing a Traffic Manager Real User Metrics key response. */
	export interface TrafficManagerUserMetricsKeyModelFormProperties extends ProxyResourceFormProperties {

		/** Fully qualified resource Id for the resource. Ex - /providers/Microsoft.Network/trafficManagerUserMetricsKeys */
		id: FormControl<string | null | undefined>,

		/** The key returned by the Real User Metrics operation. */
		key: FormControl<string | null | undefined>,

		/** The word default. */
		name: FormControl<string | null | undefined>,

		/** The type of the resource. Ex- Microsoft.Network/trafficManagerUserMetricsKeys. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateTrafficManagerUserMetricsKeyModelFormGroup() {
		return new FormGroup<TrafficManagerUserMetricsKeyModelFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get the subscription-level key used for Real User Metrics collection.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Network/trafficManagerUserMetricsKeys
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {TrafficManagerUserMetricsKeyModel} The subscription-level Traffic Manager Real User Metrics key.
		 */
		TrafficManagerUserMetricsKeys_Get(api_version: string, subscriptionId: string): Observable<TrafficManagerUserMetricsKeyModel> {
			return this.http.get<TrafficManagerUserMetricsKeyModel>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Network/trafficManagerUserMetricsKeys?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update a subscription-level key used for Real User Metrics collection.
		 * Put subscriptions/{subscriptionId}/providers/Microsoft.Network/trafficManagerUserMetricsKeys
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} 
		 */
		TrafficManagerUserMetricsKeys_CreateOrUpdate(api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Network/trafficManagerUserMetricsKeys?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a subscription-level key used for Real User Metrics collection.
		 * Delete subscriptions/{subscriptionId}/providers/Microsoft.Network/trafficManagerUserMetricsKeys
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {DeleteOperationResult} The Traffic Manager Real User Metrics key was deleted successfully.
		 */
		TrafficManagerUserMetricsKeys_Delete(api_version: string, subscriptionId: string): Observable<DeleteOperationResult> {
			return this.http.delete<DeleteOperationResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Network/trafficManagerUserMetricsKeys?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets latest heatmap for Traffic Manager profile.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficmanagerprofiles/{profileName}/heatMaps/{heatMapType}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group containing the Traffic Manager endpoint.
		 * @param {string} profileName The name of the Traffic Manager profile.
		 * @param {HeatMap_GetHeatMapType} heatMapType The type of HeatMap for the Traffic Manager profile.
		 * @param {Array<number>} topLeft The top left latitude,longitude pair of the rectangular viewport to query for.
		 * @param {Array<number>} botRight The bottom right latitude,longitude pair of the rectangular viewport to query for.
		 * @param {string} api_version Client Api Version.
		 * @return {HeatMapModel} The Traffic Manager heatmap.
		 */
		HeatMap_Get(subscriptionId: string, resourceGroupName: string, profileName: string, heatMapType: HeatMap_GetHeatMapType, topLeft: Array<number> | null | undefined, botRight: Array<number> | null | undefined, api_version: string): Observable<HeatMapModel> {
			return this.http.get<HeatMapModel>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/trafficmanagerprofiles/' + (profileName == null ? '' : encodeURIComponent(profileName)) + '/heatMaps/' + heatMapType + '&' + topLeft?.map(z => `topLeft=${z}`).join('&') + '&' + botRight?.map(z => `botRight=${z}`).join('&') + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

	export enum HeatMap_GetHeatMapType { default = 0 }

}

