import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** CreateProfileRequest describes a profile resource online creation request. The deployment field must be populated. The profile_type specifies the list of profile types supported by the agent. The creation call will hang until a profile of one of these types needs to be collected.  */
	export interface CreateProfileRequest {

		/** Deployment contains the deployment identification information. */
		deployment?: Deployment;

		/** One or more profile types that the agent is capable of providing. */
		profileType?: Array<string>;
	}

	/** CreateProfileRequest describes a profile resource online creation request. The deployment field must be populated. The profile_type specifies the list of profile types supported by the agent. The creation call will hang until a profile of one of these types needs to be collected.  */
	export interface CreateProfileRequestFormProperties {
	}
	export function CreateCreateProfileRequestFormGroup() {
		return new FormGroup<CreateProfileRequestFormProperties>({
		});

	}


	/** Deployment contains the deployment identification information. */
	export interface Deployment {

		/** Labels identify the deployment within the user universe and same target. Validation regex for label names: `^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$`. Value for an individual label must be <= 512 bytes, the total size of all label names and values must be <= 1024 bytes. Label named "language" can be used to record the programming language of the profiled deployment. The standard choices for the value include "java", "go", "python", "ruby", "nodejs", "php", "dotnet". For deployments running on Google Cloud Platform, "zone" or "region" label should be present describing the deployment location. An example of a zone is "us-central1-a", an example of a region is "us-central1" or "us-central". */
		labels?: {[id: string]: string };

		/** Project ID is the ID of a cloud project. Validation regex: `^a-z{4,61}[a-z0-9]$`. */
		projectId?: string | null;

		/** Target is the service name used to group related deployments: * Service name for App Engine Flex / Standard. * Cluster and container name for GKE. * User-specified string for direct Compute Engine profiling (e.g. Java). * Job name for Dataflow. Validation regex: `^[a-z0-9]([-a-z0-9_.]{0,253}[a-z0-9])?$`. */
		target?: string | null;
	}

	/** Deployment contains the deployment identification information. */
	export interface DeploymentFormProperties {

		/** Labels identify the deployment within the user universe and same target. Validation regex for label names: `^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$`. Value for an individual label must be <= 512 bytes, the total size of all label names and values must be <= 1024 bytes. Label named "language" can be used to record the programming language of the profiled deployment. The standard choices for the value include "java", "go", "python", "ruby", "nodejs", "php", "dotnet". For deployments running on Google Cloud Platform, "zone" or "region" label should be present describing the deployment location. An example of a zone is "us-central1-a", an example of a region is "us-central1" or "us-central". */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Project ID is the ID of a cloud project. Validation regex: `^a-z{4,61}[a-z0-9]$`. */
		projectId: FormControl<string | null | undefined>,

		/** Target is the service name used to group related deployments: * Service name for App Engine Flex / Standard. * Cluster and container name for GKE. * User-specified string for direct Compute Engine profiling (e.g. Java). * Job name for Dataflow. Validation regex: `^[a-z0-9]([-a-z0-9_.]{0,253}[a-z0-9])?$`. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentFormGroup() {
		return new FormGroup<DeploymentFormProperties>({
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ListProfileResponse contains the list of collected profiles for deployments in projects which the user has permissions to view. */
	export interface ListProfilesResponse {

		/** Token to receive the next page of results. This field maybe empty if there are no more profiles to fetch. */
		nextPageToken?: string | null;

		/** List of profiles fetched. */
		profiles?: Array<Profile>;

		/** Number of profiles that were skipped in the current page since they were not able to be fetched successfully. This should typically be zero. A non-zero value may indicate a transient failure, in which case if the number is too high for your use case, the call may be retried. */
		skippedProfiles?: number | null;
	}

	/** ListProfileResponse contains the list of collected profiles for deployments in projects which the user has permissions to view. */
	export interface ListProfilesResponseFormProperties {

		/** Token to receive the next page of results. This field maybe empty if there are no more profiles to fetch. */
		nextPageToken: FormControl<string | null | undefined>,

		/** Number of profiles that were skipped in the current page since they were not able to be fetched successfully. This should typically be zero. A non-zero value may indicate a transient failure, in which case if the number is too high for your use case, the call may be retried. */
		skippedProfiles: FormControl<number | null | undefined>,
	}
	export function CreateListProfilesResponseFormGroup() {
		return new FormGroup<ListProfilesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			skippedProfiles: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Profile resource. */
	export interface Profile {

		/** Deployment contains the deployment identification information. */
		deployment?: Deployment;

		/** Duration of the profiling session. Input (for the offline mode) or output (for the online mode). The field represents requested profiling duration. It may slightly differ from the effective profiling duration, which is recorded in the profile data, in case the profiling can't be stopped immediately (e.g. in case stopping the profiling is handled asynchronously). */
		duration?: string | null;

		/** Input only. Labels associated to this specific profile. These labels will get merged with the deployment labels for the final data set. See documentation on deployment labels for validation rules and limits. */
		labels?: {[id: string]: string };

		/** Output only. Opaque, server-assigned, unique ID for this profile. */
		name?: string | null;

		/** Input only. Profile bytes, as a gzip compressed serialized proto, the format is https://github.com/google/pprof/blob/master/proto/profile.proto. */
		profileBytes?: string | null;

		/** Type of profile. For offline mode, this must be specified when creating the profile. For online mode it is assigned and returned by the server. */
		profileType?: ProfileProfileType | null;
	}

	/** Profile resource. */
	export interface ProfileFormProperties {

		/** Duration of the profiling session. Input (for the offline mode) or output (for the online mode). The field represents requested profiling duration. It may slightly differ from the effective profiling duration, which is recorded in the profile data, in case the profiling can't be stopped immediately (e.g. in case stopping the profiling is handled asynchronously). */
		duration: FormControl<string | null | undefined>,

		/** Input only. Labels associated to this specific profile. These labels will get merged with the deployment labels for the final data set. See documentation on deployment labels for validation rules and limits. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Opaque, server-assigned, unique ID for this profile. */
		name: FormControl<string | null | undefined>,

		/** Input only. Profile bytes, as a gzip compressed serialized proto, the format is https://github.com/google/pprof/blob/master/proto/profile.proto. */
		profileBytes: FormControl<string | null | undefined>,

		/** Type of profile. For offline mode, this must be specified when creating the profile. For online mode it is assigned and returned by the server. */
		profileType: FormControl<ProfileProfileType | null | undefined>,
	}
	export function CreateProfileFormGroup() {
		return new FormGroup<ProfileFormProperties>({
			duration: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			profileBytes: new FormControl<string | null | undefined>(undefined),
			profileType: new FormControl<ProfileProfileType | null | undefined>(undefined),
		});

	}

	export enum ProfileProfileType { PROFILE_TYPE_UNSPECIFIED = 'PROFILE_TYPE_UNSPECIFIED', CPU = 'CPU', WALL = 'WALL', HEAP = 'HEAP', THREADS = 'THREADS', CONTENTION = 'CONTENTION', PEAK_HEAP = 'PEAK_HEAP', HEAP_ALLOC = 'HEAP_ALLOC' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * UpdateProfile updates the profile bytes and labels on the profile resource created in the online mode. Updating the bytes for profiles created in the offline mode is currently not supported: the profile content must be provided at the time of the profile creation.
		 * Patch v2/{name}
		 * @param {string} name Output only. Opaque, server-assigned, unique ID for this profile.
		 * @param {string} updateMask Field mask used to specify the fields to be overwritten. Currently only profile_bytes and labels fields are supported by UpdateProfile, so only those fields can be specified in the mask. When no mask is provided, all fields are overwritten.
		 * @return {Profile} Successful response
		 */
		Cloudprofiler_projects_profiles_patch(name: string, updateMask: string | null | undefined, requestBody: Profile): Observable<Profile> {
			return this.http.patch<Profile>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists profiles which have been collected so far and for which the caller has permission to view.
		 * Get v2/{parent}/profiles
		 * @param {string} parent Required. The parent, which owns this collection of profiles. Format: projects/{user_project_id}
		 * @param {number} pageSize The maximum number of items to return. Default page_size is 1000. Max limit is 1000.
		 * @param {string} pageToken The token to continue pagination and get profiles from a particular page. When paginating, all other parameters provided to `ListProfiles` must match the call that provided the page token.
		 * @return {ListProfilesResponse} Successful response
		 */
		Cloudprofiler_projects_profiles_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListProfilesResponse> {
			return this.http.get<ListProfilesResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/profiles&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * CreateProfile creates a new profile resource in the online mode. The server ensures that the new profiles are created at a constant rate per deployment, so the creation request may hang for some time until the next profile session is available. The request may fail with ABORTED error if the creation is not available within ~1m, the response will indicate the duration of the backoff the client should take before attempting creating a profile again. The backoff duration is returned in google.rpc.RetryInfo extension on the response status. To a gRPC client, the extension will be return as a binary-serialized proto in the trailing metadata item named "google.rpc.retryinfo-bin".
		 * Post v2/{parent}/profiles
		 * @param {string} parent Parent project to create the profile in.
		 * @return {Profile} Successful response
		 */
		Cloudprofiler_projects_profiles_create(parent: string, requestBody: CreateProfileRequest): Observable<Profile> {
			return this.http.post<Profile>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/profiles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * CreateOfflineProfile creates a new profile resource in the offline mode. The client provides the profile to create along with the profile bytes, the server records it.
		 * Post v2/{parent}/profiles:createOffline
		 * @param {string} parent Parent project to create the profile in.
		 * @return {Profile} Successful response
		 */
		Cloudprofiler_projects_profiles_createOffline(parent: string, requestBody: Profile): Observable<Profile> {
			return this.http.post<Profile>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/profiles:createOffline', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

