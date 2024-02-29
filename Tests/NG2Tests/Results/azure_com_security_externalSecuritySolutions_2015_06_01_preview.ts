import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Describes an Azure resource with kind */
	export interface AadConnectivityState {
		connectivityState?: AadConnectivityStateConnectivityState | null;
	}

	/** Describes an Azure resource with kind */
	export interface AadConnectivityStateFormProperties {
		connectivityState: FormControl<AadConnectivityStateConnectivityState | null | undefined>,
	}
	export function CreateAadConnectivityStateFormGroup() {
		return new FormGroup<AadConnectivityStateFormProperties>({
			connectivityState: new FormControl<AadConnectivityStateConnectivityState | null | undefined>(undefined),
		});

	}

	export enum AadConnectivityStateConnectivityState { Discovered = 'Discovered', NotLicensed = 'NotLicensed', Connected = 'Connected' }


	/** Represents an AAD identity protection solution which sends logs to an OMS workspace. */
	export interface AadExternalSecuritySolution {
		properties?: AadSolutionProperties;
	}

	/** Represents an AAD identity protection solution which sends logs to an OMS workspace. */
	export interface AadExternalSecuritySolutionFormProperties {
	}
	export function CreateAadExternalSecuritySolutionFormGroup() {
		return new FormGroup<AadExternalSecuritySolutionFormProperties>({
		});

	}

	export interface AadSolutionProperties {
	}
	export interface AadSolutionPropertiesFormProperties {
	}
	export function CreateAadSolutionPropertiesFormGroup() {
		return new FormGroup<AadSolutionPropertiesFormProperties>({
		});

	}


	/** Represents an ATA security solution which sends logs to an OMS workspace */
	export interface AtaExternalSecuritySolution {
		properties?: AtaSolutionProperties;
	}

	/** Represents an ATA security solution which sends logs to an OMS workspace */
	export interface AtaExternalSecuritySolutionFormProperties {
	}
	export function CreateAtaExternalSecuritySolutionFormGroup() {
		return new FormGroup<AtaExternalSecuritySolutionFormProperties>({
		});

	}

	export interface AtaSolutionProperties {
		lastEventReceived?: string | null;
	}
	export interface AtaSolutionPropertiesFormProperties {
		lastEventReceived: FormControl<string | null | undefined>,
	}
	export function CreateAtaSolutionPropertiesFormGroup() {
		return new FormGroup<AtaSolutionPropertiesFormProperties>({
			lastEventReceived: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a security solution which sends CEF logs to an OMS workspace */
	export interface CefExternalSecuritySolution {
		properties?: CefSolutionProperties;
	}

	/** Represents a security solution which sends CEF logs to an OMS workspace */
	export interface CefExternalSecuritySolutionFormProperties {
	}
	export function CreateCefExternalSecuritySolutionFormGroup() {
		return new FormGroup<CefExternalSecuritySolutionFormProperties>({
		});

	}

	export interface CefSolutionProperties {
		agent?: string | null;
		hostname?: string | null;
		lastEventReceived?: string | null;
	}
	export interface CefSolutionPropertiesFormProperties {
		agent: FormControl<string | null | undefined>,
		hostname: FormControl<string | null | undefined>,
		lastEventReceived: FormControl<string | null | undefined>,
	}
	export function CreateCefSolutionPropertiesFormGroup() {
		return new FormGroup<CefSolutionPropertiesFormProperties>({
			agent: new FormControl<string | null | undefined>(undefined),
			hostname: new FormControl<string | null | undefined>(undefined),
			lastEventReceived: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConnectedWorkspace {

		/** Azure resource ID of the connected OMS workspace */
		id?: string | null;
	}
	export interface ConnectedWorkspaceFormProperties {

		/** Azure resource ID of the connected OMS workspace */
		id: FormControl<string | null | undefined>,
	}
	export function CreateConnectedWorkspaceFormGroup() {
		return new FormGroup<ConnectedWorkspaceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a security solution external to Azure Security Center which sends information to an OMS workspace and whose data is displayed by Azure Security Center. */
	export interface ExternalSecuritySolution {
	}

	/** Represents a security solution external to Azure Security Center which sends information to an OMS workspace and whose data is displayed by Azure Security Center. */
	export interface ExternalSecuritySolutionFormProperties {
	}
	export function CreateExternalSecuritySolutionFormGroup() {
		return new FormGroup<ExternalSecuritySolutionFormProperties>({
		});

	}


	/** Describes an Azure resource with kind */
	export interface ExternalSecuritySolutionKind {

		/** The kind of the external solution */
		kind?: ExternalSecuritySolutionKindKind | null;
	}

	/** Describes an Azure resource with kind */
	export interface ExternalSecuritySolutionKindFormProperties {

		/** The kind of the external solution */
		kind: FormControl<ExternalSecuritySolutionKindKind | null | undefined>,
	}
	export function CreateExternalSecuritySolutionKindFormGroup() {
		return new FormGroup<ExternalSecuritySolutionKindFormProperties>({
			kind: new FormControl<ExternalSecuritySolutionKindKind | null | undefined>(undefined),
		});

	}

	export enum ExternalSecuritySolutionKindKind { CEF = 'CEF', ATA = 'ATA', AAD = 'AAD' }

	export interface ExternalSecuritySolutionList {

		/** The URI to fetch the next page. */
		nextLink?: string | null;
		value?: Array<ExternalSecuritySolution>;
	}
	export interface ExternalSecuritySolutionListFormProperties {

		/** The URI to fetch the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateExternalSecuritySolutionListFormGroup() {
		return new FormGroup<ExternalSecuritySolutionListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The solution properties (correspond to the solution kind) */
	export interface ExternalSecuritySolutionProperties {
		deviceType?: string | null;
		deviceVendor?: string | null;
		workspace?: ConnectedWorkspace;
	}

	/** The solution properties (correspond to the solution kind) */
	export interface ExternalSecuritySolutionPropertiesFormProperties {
		deviceType: FormControl<string | null | undefined>,
		deviceVendor: FormControl<string | null | undefined>,
	}
	export function CreateExternalSecuritySolutionPropertiesFormGroup() {
		return new FormGroup<ExternalSecuritySolutionPropertiesFormProperties>({
			deviceType: new FormControl<string | null | undefined>(undefined),
			deviceVendor: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a list of external security solutions for the subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Security/externalSecuritySolutions
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @return {ExternalSecuritySolutionList} OK
		 */
		ExternalSecuritySolutions_List(api_version: string, subscriptionId: string): Observable<ExternalSecuritySolutionList> {
			return this.http.get<ExternalSecuritySolutionList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/externalSecuritySolutions?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a list of external Security Solutions for the subscription and location.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/ExternalSecuritySolutions
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} ascLocation The location where ASC stores the data of the subscription. can be retrieved from Get locations
		 * @param {string} api_version API version for the operation
		 * @return {ExternalSecuritySolutionList} OK
		 */
		ExternalSecuritySolutions_ListByHomeRegion(subscriptionId: string, ascLocation: string, api_version: string): Observable<ExternalSecuritySolutionList> {
			return this.http.get<ExternalSecuritySolutionList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/locations/' + (ascLocation == null ? '' : encodeURIComponent(ascLocation)) + '/ExternalSecuritySolutions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a specific external Security Solution.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/ExternalSecuritySolutions/{externalSecuritySolutionsName}
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} ascLocation The location where ASC stores the data of the subscription. can be retrieved from Get locations
		 * @param {string} externalSecuritySolutionsName Name of an external security solution.
		 * @param {string} api_version API version for the operation
		 * @return {ExternalSecuritySolution} OK
		 */
		ExternalSecuritySolutions_Get(subscriptionId: string, resourceGroupName: string, ascLocation: string, externalSecuritySolutionsName: string, api_version: string): Observable<ExternalSecuritySolution> {
			return this.http.get<ExternalSecuritySolution>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Security/locations/' + (ascLocation == null ? '' : encodeURIComponent(ascLocation)) + '/ExternalSecuritySolutions/' + (externalSecuritySolutionsName == null ? '' : encodeURIComponent(externalSecuritySolutionsName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

