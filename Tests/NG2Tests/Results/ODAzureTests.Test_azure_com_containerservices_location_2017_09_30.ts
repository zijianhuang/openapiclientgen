import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Contains information about orchestrator. */
	export interface OrchestratorProfile {

		/**
		 * Orchestrator type.
		 * Required
		 */
		orchestratorType: string;

		/**
		 * Orchestrator version (major, minor, patch).
		 * Required
		 */
		orchestratorVersion: string;
	}

	/** Contains information about orchestrator. */
	export interface OrchestratorProfileFormProperties {

		/**
		 * Orchestrator type.
		 * Required
		 */
		orchestratorType: FormControl<string | null | undefined>,

		/**
		 * Orchestrator version (major, minor, patch).
		 * Required
		 */
		orchestratorVersion: FormControl<string | null | undefined>,
	}
	export function CreateOrchestratorProfileFormGroup() {
		return new FormGroup<OrchestratorProfileFormProperties>({
			orchestratorType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			orchestratorVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The profile of an orchestrator and its available versions. */
	export interface OrchestratorVersionProfile {

		/**
		 * Installed by default if version is not specified.
		 * Required
		 */
		default: boolean;

		/**
		 * Orchestrator type.
		 * Required
		 */
		orchestratorType: string;

		/**
		 * Orchestrator version (major, minor, patch).
		 * Required
		 */
		orchestratorVersion: string;

		/**
		 * The list of available upgrade versions.
		 * Required
		 */
		upgrades: Array<OrchestratorProfile>;
	}

	/** The profile of an orchestrator and its available versions. */
	export interface OrchestratorVersionProfileFormProperties {

		/**
		 * Installed by default if version is not specified.
		 * Required
		 */
		default: FormControl<boolean | null | undefined>,

		/**
		 * Orchestrator type.
		 * Required
		 */
		orchestratorType: FormControl<string | null | undefined>,

		/**
		 * Orchestrator version (major, minor, patch).
		 * Required
		 */
		orchestratorVersion: FormControl<string | null | undefined>,
	}
	export function CreateOrchestratorVersionProfileFormGroup() {
		return new FormGroup<OrchestratorVersionProfileFormProperties>({
			default: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			orchestratorType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			orchestratorVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The list of versions for supported orchestrators. */
	export interface OrchestratorVersionProfileListResult {

		/** Id of the orchestrator version profile list result. */
		id?: string | null;

		/** Name of the orchestrator version profile list result. */
		name?: string | null;

		/**
		 * The properties of an orchestrator version profile.
		 * Required
		 */
		properties: OrchestratorVersionProfileProperties;

		/** Type of the orchestrator version profile list result. */
		type?: string | null;
	}

	/** The list of versions for supported orchestrators. */
	export interface OrchestratorVersionProfileListResultFormProperties {

		/** Id of the orchestrator version profile list result. */
		id: FormControl<string | null | undefined>,

		/** Name of the orchestrator version profile list result. */
		name: FormControl<string | null | undefined>,

		/** Type of the orchestrator version profile list result. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateOrchestratorVersionProfileListResultFormGroup() {
		return new FormGroup<OrchestratorVersionProfileListResultFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties of an orchestrator version profile. */
	export interface OrchestratorVersionProfileProperties {

		/**
		 * List of orchestrator version profiles.
		 * Required
		 */
		orchestrators: Array<OrchestratorVersionProfile>;
	}

	/** The properties of an orchestrator version profile. */
	export interface OrchestratorVersionProfilePropertiesFormProperties {
	}
	export function CreateOrchestratorVersionProfilePropertiesFormGroup() {
		return new FormGroup<OrchestratorVersionProfilePropertiesFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a list of supported orchestrators in the specified subscription.
		 * Gets a list of supported orchestrators in the specified subscription. The operation returns properties of each orchestrator including version and available upgrades.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.ContainerService/locations/{location}/orchestrators
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} location The name of a supported Azure region.
		 * @param {string} resource_type resource type for which the list of orchestrators needs to be returned
		 * @return {OrchestratorVersionProfileListResult} OK
		 */
		ContainerServices_ListOrchestrators(api_version: string, subscriptionId: string, location: string, resource_type: string | null | undefined): Observable<OrchestratorVersionProfileListResult> {
			return this.http.get<OrchestratorVersionProfileListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.ContainerService/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/orchestrators?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&resource_type=' + (resource_type == null ? '' : encodeURIComponent(resource_type)), {});
		}
	}

}

