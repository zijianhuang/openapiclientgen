import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Contains the information necessary to perform a resource move (rename). */
	export interface ResourceMoveDefinition {

		/**
		 * The target ID for the resource
		 * Required
		 */
		id: string;
	}

	/** Contains the information necessary to perform a resource move (rename). */
	export interface ResourceMoveDefinitionFormProperties {

		/**
		 * The target ID for the resource
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateResourceMoveDefinitionFormGroup() {
		return new FormGroup<ResourceMoveDefinitionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Renames a database.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/move
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database to rename.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {ResourceMoveDefinition} requestBody The resource move definition for renaming this database.
		 * @return {void} Successfully renamed the database.
		 */
		Databases_Rename(resourceGroupName: string, serverName: string, databaseName: string, subscriptionId: string, api_version: string, requestBody: ResourceMoveDefinition): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/move&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

