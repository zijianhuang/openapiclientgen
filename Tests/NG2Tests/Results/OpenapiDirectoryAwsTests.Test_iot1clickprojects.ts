import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface AssociateDeviceWithPlacementResponse {
	}

	export interface InternalFailureException {
	}

	export interface InvalidRequestException {
	}

	export interface ResourceConflictException {
	}

	export interface ResourceNotFoundException {
	}

	export interface CreatePlacementResponse {
	}

	export interface CreateProjectResponse {
	}

	export interface DefaultPlacementAttributeMap {
	}

	export interface DeviceTemplateMap {
	}

	export interface DeletePlacementResponse {
	}

	export interface TooManyRequestsException {
	}

	export interface DeleteProjectResponse {
	}

	export interface DescribePlacementResponse {

		/**
		 * An object describing a project's placement.
		 * Required
		 */
		placement: PlacementDescription;
	}


	/** An object describing a project's placement. */
	export interface PlacementDescription {
		projectName: string;
		placementName: string;
		attributes: PlacementAttributeMap;
		createdDate: Date;
		updatedDate: Date;
	}

	export interface PlacementAttributeMap {
	}

	export interface DescribeProjectResponse {

		/**
		 * An object providing detailed information for a particular project associated with an AWS account and region.
		 * Required
		 */
		project: ProjectDescription;
	}


	/** An object providing detailed information for a particular project associated with an AWS account and region. */
	export interface ProjectDescription {
		arn?: string;
		projectName: string;
		description?: string;
		createdDate: Date;
		updatedDate: Date;

		/** An object defining the template for a placement. */
		placementTemplate?: PlacementTemplate;
		tags?: TagMap;
	}


	/** An object defining the template for a placement. */
	export interface PlacementTemplate {
		defaultAttributes?: DefaultPlacementAttributeMap;
		deviceTemplates?: DeviceTemplateMap;
	}

	export interface TagMap {
	}

	export interface DisassociateDeviceFromPlacementResponse {
	}

	export interface GetDevicesInPlacementResponse {
		devices: DeviceMap;
	}

	export interface DeviceMap {
	}

	export interface ListPlacementsResponse {
		placements: Array<PlacementSummary>;
		nextToken?: string;
	}


	/** An object providing summary information for a particular placement. */
	export interface PlacementSummary {
		projectName: string;
		placementName: string;
		createdDate: Date;
		updatedDate: Date;
	}

	export interface ListProjectsResponse {
		projects: Array<ProjectSummary>;
		nextToken?: string;
	}


	/** An object providing summary information for a particular project for an associated AWS account and region. */
	export interface ProjectSummary {
		arn?: string;
		projectName: string;
		createdDate: Date;
		updatedDate: Date;
		tags?: TagMap;
	}

	export interface ListTagsForResourceResponse {
		tags?: TagMap;
	}

	export interface TagResourceResponse {
	}

	export interface UntagResourceResponse {
	}

	export interface UpdatePlacementResponse {
	}

	export interface UpdateProjectResponse {
	}

	export interface AssociateDeviceWithPlacementRequest {
		deviceId: string;
	}

	export interface CreatePlacementRequest {
		placementName: string;
		attributes?: PlacementAttributeMap;
	}

	export interface CreateProjectRequest {
		projectName: string;
		description?: string;

		/** An object defining the template for a placement. */
		placementTemplate?: PlacementTemplate;
		tags?: TagMap;
	}

	export interface DeletePlacementRequest {
	}

	export interface DeleteProjectRequest {
	}

	export interface DescribePlacementRequest {
	}

	export interface DescribeProjectRequest {
	}

	export interface DeviceCallbackOverrideMap {
	}


	/** An object representing a device for a placement template (see <a>PlacementTemplate</a>). */
	export interface DeviceTemplate {
		deviceType?: string;
		callbackOverrides?: DeviceCallbackOverrideMap;
	}

	export interface DisassociateDeviceFromPlacementRequest {
	}

	export interface GetDevicesInPlacementRequest {
	}

	export interface ListPlacementsRequest {
	}

	export interface ListProjectsRequest {
	}

	export interface ListTagsForResourceRequest {
	}

	export interface TagResourceRequest {
		tags: TagMap;
	}

	export interface UntagResourceRequest {
	}

	export interface UpdatePlacementRequest {
		attributes?: PlacementAttributeMap;
	}

	export interface UpdateProjectRequest {
		description?: string;

		/** An object defining the template for a placement. */
		placementTemplate?: PlacementTemplate;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Associates a physical device with a placement.
		 * Put projects/{projectName}/placements/{placementName}/devices/{deviceTemplateName}
		 * @param {string} projectName The name of the project containing the placement in which to associate the device.
		 * @param {string} placementName The name of the placement in which to associate the device.
		 * @param {string} deviceTemplateName The device template name to associate with the device ID.
		 * @return {AssociateDeviceWithPlacementResponse} Success
		 */
		AssociateDeviceWithPlacement(projectName: string, placementName: string, deviceTemplateName: string, requestBody: AssociateDeviceWithPlacementPutBody): Observable<AssociateDeviceWithPlacementResponse> {
			return this.http.put<AssociateDeviceWithPlacementResponse>(this.baseUri + 'projects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/placements/' + (placementName == null ? '' : encodeURIComponent(placementName)) + '/devices/' + (deviceTemplateName == null ? '' : encodeURIComponent(deviceTemplateName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a physical device from a placement.
		 * Delete projects/{projectName}/placements/{placementName}/devices/{deviceTemplateName}
		 * @param {string} projectName The name of the project that contains the placement.
		 * @param {string} placementName The name of the placement that the device should be removed from.
		 * @param {string} deviceTemplateName The device ID that should be removed from the placement.
		 * @return {DisassociateDeviceFromPlacementResponse} Success
		 */
		DisassociateDeviceFromPlacement(projectName: string, placementName: string, deviceTemplateName: string): Observable<DisassociateDeviceFromPlacementResponse> {
			return this.http.delete<DisassociateDeviceFromPlacementResponse>(this.baseUri + 'projects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/placements/' + (placementName == null ? '' : encodeURIComponent(placementName)) + '/devices/' + (deviceTemplateName == null ? '' : encodeURIComponent(deviceTemplateName)), {});
		}

		/**
		 * Creates an empty placement.
		 * Post projects/{projectName}/placements
		 * @param {string} projectName The name of the project in which to create the placement.
		 * @return {CreatePlacementResponse} Success
		 */
		CreatePlacement(projectName: string, requestBody: CreatePlacementPostBody): Observable<CreatePlacementResponse> {
			return this.http.post<CreatePlacementResponse>(this.baseUri + 'projects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/placements', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the placement(s) of a project.
		 * Get projects/{projectName}/placements
		 * @param {string} projectName The project containing the placements to be listed.
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return per request. If not set, a default value of 100 is used.
		 * @return {ListPlacementsResponse} Success
		 */
		ListPlacements(projectName: string, nextToken: string, maxResults: number): Observable<ListPlacementsResponse> {
			return this.http.get<ListPlacementsResponse>(this.baseUri + 'projects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/placements&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Creates an empty project with a placement template. A project contains zero or more placements that adhere to the placement template defined in the project.
		 * Post projects
		 * @return {CreateProjectResponse} Success
		 */
		CreateProject(requestBody: CreateProjectPostBody): Observable<CreateProjectResponse> {
			return this.http.post<CreateProjectResponse>(this.baseUri + 'projects', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the AWS IoT 1-Click project(s) associated with your AWS account and region.
		 * Get projects
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return per request. If not set, a default value of 100 is used.
		 * @return {ListProjectsResponse} Success
		 */
		ListProjects(nextToken: string, maxResults: number): Observable<ListProjectsResponse> {
			return this.http.get<ListProjectsResponse>(this.baseUri + 'projects?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * <p>Deletes a placement. To delete a placement, it must not have any devices associated with it.</p> <note> <p>When you delete a placement, all associated data becomes irretrievable.</p> </note>
		 * Delete projects/{projectName}/placements/{placementName}
		 * @param {string} placementName The name of the empty placement to delete.
		 * @param {string} projectName The project containing the empty placement to delete.
		 * @return {DeletePlacementResponse} Success
		 */
		DeletePlacement(placementName: string, projectName: string): Observable<DeletePlacementResponse> {
			return this.http.delete<DeletePlacementResponse>(this.baseUri + 'projects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/placements/' + (placementName == null ? '' : encodeURIComponent(placementName)), {});
		}

		/**
		 * Describes a placement in a project.
		 * Get projects/{projectName}/placements/{placementName}
		 * @param {string} placementName The name of the placement within a project.
		 * @param {string} projectName The project containing the placement to be described.
		 * @return {DescribePlacementResponse} Success
		 */
		DescribePlacement(placementName: string, projectName: string): Observable<DescribePlacementResponse> {
			return this.http.get<DescribePlacementResponse>(this.baseUri + 'projects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/placements/' + (placementName == null ? '' : encodeURIComponent(placementName)), {});
		}

		/**
		 * Updates a placement with the given attributes. To clear an attribute, pass an empty value (i.e., "").
		 * Put projects/{projectName}/placements/{placementName}
		 * @param {string} placementName The name of the placement to update.
		 * @param {string} projectName The name of the project containing the placement to be updated.
		 * @return {UpdatePlacementResponse} Success
		 */
		UpdatePlacement(placementName: string, projectName: string, requestBody: UpdatePlacementPutBody): Observable<UpdatePlacementResponse> {
			return this.http.put<UpdatePlacementResponse>(this.baseUri + 'projects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/placements/' + (placementName == null ? '' : encodeURIComponent(placementName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a project. To delete a project, it must not have any placements associated with it.</p> <note> <p>When you delete a project, all associated data becomes irretrievable.</p> </note>
		 * Delete projects/{projectName}
		 * @param {string} projectName The name of the empty project to delete.
		 * @return {DeleteProjectResponse} Success
		 */
		DeleteProject(projectName: string): Observable<DeleteProjectResponse> {
			return this.http.delete<DeleteProjectResponse>(this.baseUri + 'projects/' + (projectName == null ? '' : encodeURIComponent(projectName)), {});
		}

		/**
		 * Returns an object describing a project.
		 * Get projects/{projectName}
		 * @param {string} projectName The name of the project to be described.
		 * @return {DescribeProjectResponse} Success
		 */
		DescribeProject(projectName: string): Observable<DescribeProjectResponse> {
			return this.http.get<DescribeProjectResponse>(this.baseUri + 'projects/' + (projectName == null ? '' : encodeURIComponent(projectName)), {});
		}

		/**
		 * Updates a project associated with your AWS account and region. With the exception of device template names, you can pass just the values that need to be updated because the update request will change only the values that are provided. To clear a value, pass the empty string (i.e., <code>""</code>).
		 * Put projects/{projectName}
		 * @param {string} projectName The name of the project to be updated.
		 * @return {UpdateProjectResponse} Success
		 */
		UpdateProject(projectName: string, requestBody: UpdateProjectPutBody): Observable<UpdateProjectResponse> {
			return this.http.put<UpdateProjectResponse>(this.baseUri + 'projects/' + (projectName == null ? '' : encodeURIComponent(projectName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns an object enumerating the devices in a placement.
		 * Get projects/{projectName}/placements/{placementName}/devices
		 * @param {string} projectName The name of the project containing the placement.
		 * @param {string} placementName The name of the placement to get the devices from.
		 * @return {GetDevicesInPlacementResponse} Success
		 */
		GetDevicesInPlacement(projectName: string, placementName: string): Observable<GetDevicesInPlacementResponse> {
			return this.http.get<GetDevicesInPlacementResponse>(this.baseUri + 'projects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/placements/' + (placementName == null ? '' : encodeURIComponent(placementName)) + '/devices', {});
		}

		/**
		 * Lists the tags (metadata key/value pairs) which you have assigned to the resource.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The ARN of the resource whose tags you want to list.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Creates or modifies tags for a resource. Tags are key/value pairs (metadata) that can be used to manage a resource. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS Tagging Strategies</a>.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The ARN of the resouce for which tag(s) should be added or modified.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes one or more tags (metadata key/value pairs) from a resource.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The ARN of the resource whose tag you want to remove.
		 * @param {Array<string>} tagKeys The keys of those tags which you want to remove.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface AssociateDeviceWithPlacementPutBody {

		/**
		 * The ID of the physical device to be associated with the given placement in the project. Note that a mandatory 4 character prefix is required for all <code>deviceId</code> values.
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		deviceId: string;
	}

	export interface CreatePlacementPostBody {

		/**
		 * The name of the placement to be created.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9_-]+$
		 */
		placementName: string;

		/** Optional user-defined key/value pairs providing contextual data (such as location or function) for the placement. */
		attributes?: {[id: string]: string };
	}

	export interface CreateProjectPostBody {

		/**
		 * The name of the project to create.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[0-9A-Za-z_-]+$
		 */
		projectName: string;

		/**
		 * An optional description for the project.
		 * Max length: 500
		 * Min length: 0
		 */
		description?: string;

		/** An object defining the template for a placement. */
		placementTemplate?: CreateProjectPostBodyPlacementTemplate;

		/** Optional tags (metadata key/value pairs) to be associated with the project. For example, <code>{ {"key1": "value1", "key2": "value2"} }</code>. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS Tagging Strategies</a>. */
		tags?: {[id: string]: string };
	}

	export interface CreateProjectPostBodyPlacementTemplate {
		defaultAttributes?: DefaultPlacementAttributeMap;
		deviceTemplates?: DeviceTemplateMap;
	}

	export interface UpdatePlacementPutBody {

		/** The user-defined object of attributes used to update the placement. The maximum number of key/value pairs is 50. */
		attributes?: {[id: string]: string };
	}

	export interface UpdateProjectPutBody {

		/**
		 * An optional user-defined description for the project.
		 * Max length: 500
		 * Min length: 0
		 */
		description?: string;

		/** An object defining the template for a placement. */
		placementTemplate?: UpdateProjectPutBodyPlacementTemplate;
	}

	export interface UpdateProjectPutBodyPlacementTemplate {
		defaultAttributes?: DefaultPlacementAttributeMap;
		deviceTemplates?: DeviceTemplateMap;
	}

	export interface TagResourcePostBody {

		/**
		 * The new or modifying tag(s) for the resource. See <a href="https://docs.aws.amazon.com/iot-1-click/latest/developerguide/1click-appendix.html#1click-limits">AWS IoT 1-Click Service Limits</a> for the maximum number of tags allowed per resource.
		 * Required
		 */
		tags: {[id: string]: string };
	}

}

