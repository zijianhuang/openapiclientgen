import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Authorization tuple containing principal Id (of user/service principal/security group) and role definition id. */
	export interface Authorization {

		/**
		 * Principal Id of the security group/service principal/user that would be assigned permissions to the projected subscription
		 * Required
		 */
		principalId: string;

		/**
		 * The role definition identifier. This role will define all the permissions that the security group/service principal/user must have on the projected subscription. This role cannot be an owner role.
		 * Required
		 */
		roleDefinitionId: string;
	}

	/** Authorization tuple containing principal Id (of user/service principal/security group) and role definition id. */
	export interface AuthorizationFormProperties {

		/**
		 * Principal Id of the security group/service principal/user that would be assigned permissions to the projected subscription
		 * Required
		 */
		principalId: FormControl<string | null | undefined>,

		/**
		 * The role definition identifier. This role will define all the permissions that the security group/service principal/user must have on the projected subscription. This role cannot be an owner role.
		 * Required
		 */
		roleDefinitionId: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizationFormGroup() {
		return new FormGroup<AuthorizationFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleDefinitionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Error response. */
	export interface ErrorResponse {

		/** Error response indicates Azure Resource Manager is not able to process the incoming request. The reason is provided in the error message. */
		error?: ErrorResponseError;
	}

	/** Error response. */
	export interface ErrorResponseFormProperties {
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
		});

	}

	export interface ErrorResponseError {

		/**
		 * Error code.
		 * Required
		 */
		code: string;

		/**
		 * Error message indicating why the operation failed.
		 * Required
		 */
		message: string;
	}
	export interface ErrorResponseErrorFormProperties {

		/**
		 * Error code.
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * Error message indicating why the operation failed.
		 * Required
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorResponseErrorFormGroup() {
		return new FormGroup<ErrorResponseErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of marketplace registration definitions. */
	export interface MarketplaceRegistrationDefinitionList {

		/** Link to next page of marketplace registration definitions. */
		nextLink?: string | null;

		/** List of marketplace registration definitions. */
		value?: Array<RegistrationDefinition>;
	}

	/** List of marketplace registration definitions. */
	export interface MarketplaceRegistrationDefinitionListFormProperties {

		/** Link to next page of marketplace registration definitions. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateMarketplaceRegistrationDefinitionListFormGroup() {
		return new FormGroup<MarketplaceRegistrationDefinitionListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Registration definition. */
	export interface RegistrationDefinition {

		/** Fully qualified path of the registration definition. */
		id?: string | null;

		/** Name of the registration definition. */
		name?: string | null;

		/** Plan details for the managed services. */
		plan?: Plan;

		/** Properties of a registration definition. */
		properties?: RegistrationDefinitionProperties;

		/** Type of the resource. */
		type?: string | null;
	}

	/** Registration definition. */
	export interface RegistrationDefinitionFormProperties {

		/** Fully qualified path of the registration definition. */
		id: FormControl<string | null | undefined>,

		/** Name of the registration definition. */
		name: FormControl<string | null | undefined>,

		/** Type of the resource. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateRegistrationDefinitionFormGroup() {
		return new FormGroup<RegistrationDefinitionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Plan details for the managed services. */
	export interface Plan {

		/**
		 * The plan name.
		 * Required
		 */
		name: string;

		/**
		 * The product code.
		 * Required
		 */
		product: string;

		/**
		 * The publisher ID.
		 * Required
		 */
		publisher: string;

		/**
		 * The plan's version.
		 * Required
		 */
		version: string;
	}

	/** Plan details for the managed services. */
	export interface PlanFormProperties {

		/**
		 * The plan name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The product code.
		 * Required
		 */
		product: FormControl<string | null | undefined>,

		/**
		 * The publisher ID.
		 * Required
		 */
		publisher: FormControl<string | null | undefined>,

		/**
		 * The plan's version.
		 * Required
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreatePlanFormGroup() {
		return new FormGroup<PlanFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			product: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			publisher: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Properties of a registration definition. */
	export interface RegistrationDefinitionProperties {

		/**
		 * Authorization tuple containing principal id of the user/security group or service principal and id of the build-in role.
		 * Required
		 */
		authorizations: Array<Authorization>;

		/** Description of the registration definition. */
		description?: string | null;

		/**
		 * Id of the managedBy tenant.
		 * Required
		 */
		managedByTenantId: string;

		/** Name of the managedBy tenant. */
		managedByTenantName?: string | null;

		/** Current state of the registration definition. */
		provisioningState?: RegistrationDefinitionPropertiesProvisioningState | null;

		/** Name of the registration definition. */
		registrationDefinitionName?: string | null;
	}

	/** Properties of a registration definition. */
	export interface RegistrationDefinitionPropertiesFormProperties {

		/** Description of the registration definition. */
		description: FormControl<string | null | undefined>,

		/**
		 * Id of the managedBy tenant.
		 * Required
		 */
		managedByTenantId: FormControl<string | null | undefined>,

		/** Name of the managedBy tenant. */
		managedByTenantName: FormControl<string | null | undefined>,

		/** Current state of the registration definition. */
		provisioningState: FormControl<RegistrationDefinitionPropertiesProvisioningState | null | undefined>,

		/** Name of the registration definition. */
		registrationDefinitionName: FormControl<string | null | undefined>,
	}
	export function CreateRegistrationDefinitionPropertiesFormGroup() {
		return new FormGroup<RegistrationDefinitionPropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			managedByTenantId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			managedByTenantName: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<RegistrationDefinitionPropertiesProvisioningState | null | undefined>(undefined),
			registrationDefinitionName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RegistrationDefinitionPropertiesProvisioningState { NotSpecified = 0, Accepted = 1, Running = 2, Ready = 3, Creating = 4, Created = 5, Deleting = 6, Deleted = 7, Canceled = 8, Failed = 9, Succeeded = 10, Updating = 11 }


	/** Object that describes a single Microsoft.ManagedServices operation. */
	export interface Operation {

		/** The object that represents the operation. */
		display?: any;

		/** Operation name: {provider}/{resource}/{operation} */
		name?: string | null;
	}

	/** Object that describes a single Microsoft.ManagedServices operation. */
	export interface OperationFormProperties {

		/** The object that represents the operation. */
		display: FormControl<any | null | undefined>,

		/** Operation name: {provider}/{resource}/{operation} */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			display: new FormControl<any | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of the operations. */
	export interface OperationList {

		/** List of Microsoft.ManagedServices operations. */
		value?: Array<Operation>;
	}

	/** List of the operations. */
	export interface OperationListFormProperties {
	}
	export function CreateOperationListFormGroup() {
		return new FormGroup<OperationListFormProperties>({
		});

	}


	/** Registration assignment. */
	export interface RegistrationAssignment {

		/** The fully qualified path of the registration assignment. */
		id?: string | null;

		/** Name of the registration assignment. */
		name?: string | null;

		/** Properties of a registration assignment. */
		properties?: RegistrationAssignmentProperties;

		/** Type of the resource. */
		type?: string | null;
	}

	/** Registration assignment. */
	export interface RegistrationAssignmentFormProperties {

		/** The fully qualified path of the registration assignment. */
		id: FormControl<string | null | undefined>,

		/** Name of the registration assignment. */
		name: FormControl<string | null | undefined>,

		/** Type of the resource. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateRegistrationAssignmentFormGroup() {
		return new FormGroup<RegistrationAssignmentFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of a registration assignment. */
	export interface RegistrationAssignmentProperties {

		/** Current state of the registration assignment. */
		provisioningState?: RegistrationDefinitionPropertiesProvisioningState | null;

		/** Registration definition inside registration assignment. */
		registrationDefinition?: RegistrationAssignmentPropertiesRegistrationDefinition;

		/**
		 * Fully qualified path of the registration definition.
		 * Required
		 */
		registrationDefinitionId: string;
	}

	/** Properties of a registration assignment. */
	export interface RegistrationAssignmentPropertiesFormProperties {

		/** Current state of the registration assignment. */
		provisioningState: FormControl<RegistrationDefinitionPropertiesProvisioningState | null | undefined>,

		/**
		 * Fully qualified path of the registration definition.
		 * Required
		 */
		registrationDefinitionId: FormControl<string | null | undefined>,
	}
	export function CreateRegistrationAssignmentPropertiesFormGroup() {
		return new FormGroup<RegistrationAssignmentPropertiesFormProperties>({
			provisioningState: new FormControl<RegistrationDefinitionPropertiesProvisioningState | null | undefined>(undefined),
			registrationDefinitionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RegistrationAssignmentPropertiesRegistrationDefinition {

		/** Fully qualified path of the registration definition. */
		id?: string | null;

		/** Name of the registration definition. */
		name?: string | null;

		/** Plan details for the managed services. */
		plan?: Plan;

		/** Properties of registration definition inside registration assignment. */
		properties?: any;

		/** Type of the resource (Microsoft.ManagedServices/registrationDefinitions). */
		type?: string | null;
	}
	export interface RegistrationAssignmentPropertiesRegistrationDefinitionFormProperties {

		/** Fully qualified path of the registration definition. */
		id: FormControl<string | null | undefined>,

		/** Name of the registration definition. */
		name: FormControl<string | null | undefined>,

		/** Properties of registration definition inside registration assignment. */
		properties: FormControl<any | null | undefined>,

		/** Type of the resource (Microsoft.ManagedServices/registrationDefinitions). */
		type: FormControl<string | null | undefined>,
	}
	export function CreateRegistrationAssignmentPropertiesRegistrationDefinitionFormGroup() {
		return new FormGroup<RegistrationAssignmentPropertiesRegistrationDefinitionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<any | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of registration assignments. */
	export interface RegistrationAssignmentList {

		/** Link to next page of registration assignments. */
		nextLink?: string | null;

		/** List of registration assignments. */
		value?: Array<RegistrationAssignment>;
	}

	/** List of registration assignments. */
	export interface RegistrationAssignmentListFormProperties {

		/** Link to next page of registration assignments. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateRegistrationAssignmentListFormGroup() {
		return new FormGroup<RegistrationAssignmentListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of registration definitions. */
	export interface RegistrationDefinitionList {

		/** Link to next page of registration definitions. */
		nextLink?: string | null;

		/** List of registration definitions. */
		value?: Array<RegistrationDefinition>;
	}

	/** List of registration definitions. */
	export interface RegistrationDefinitionListFormProperties {

		/** Link to next page of registration definitions. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateRegistrationDefinitionListFormGroup() {
		return new FormGroup<RegistrationDefinitionListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a list of the operations.
		 * Get providers/Microsoft.ManagedServices/operations
		 * @param {string} api_version The API version to use for this operation.
		 * @return {OperationList} OK - Returns a list of operations.
		 */
		Operations_List(api_version: string): Observable<OperationList> {
			return this.http.get<OperationList>(this.baseUri + 'providers/Microsoft.ManagedServices/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a list of the marketplace registration definitions for the marketplace identifier.
		 * Get {scope}/providers/Microsoft.ManagedServices/marketplaceRegistrationDefinitions
		 * @param {string} scope Scope of the resource.
		 * @param {string} filter The filter query parameter. Might be used to filter marketplace registration definition by plan identifier, publisher, version etc.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {MarketplaceRegistrationDefinitionList} OK - Returns a list of the marketplace registration definitions.
		 */
		MarketplaceRegistrationDefinitions_List(scope: string, filter: string | null | undefined, api_version: string): Observable<MarketplaceRegistrationDefinitionList> {
			return this.http.get<MarketplaceRegistrationDefinitionList>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.ManagedServices/marketplaceRegistrationDefinitions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Get the marketplace registration definition for the marketplace identifier.
		 * Get {scope}/providers/Microsoft.ManagedServices/marketplaceRegistrationDefinitions/{marketplaceIdentifier}
		 * @param {string} scope Scope of the resource.
		 * @param {string} marketplaceIdentifier Market place identifer. Expected Formats - {publisher}.{product[-preview]}.{planName}.{version} or {publisher}.{product[-preview]}.{planName} or {publisher}.{product[-preview]} or {publisher}).
		 * @param {string} api_version The API version to use for this operation.
		 * @return {RegistrationDefinition} OK - Returns the details of the marketplace registration definition.
		 */
		MarketplaceRegistrationDefinitions_Get(scope: string, marketplaceIdentifier: string, api_version: string): Observable<RegistrationDefinition> {
			return this.http.get<RegistrationDefinition>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.ManagedServices/marketplaceRegistrationDefinitions/' + (marketplaceIdentifier == null ? '' : encodeURIComponent(marketplaceIdentifier)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Gets a list of the registration assignments.
		 * Get {scope}/providers/Microsoft.ManagedServices/registrationAssignments
		 * @param {string} scope Scope of the resource.
		 * @param {boolean} expandRegistrationDefinition Tells whether to return registration definition details also along with registration assignment details.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {RegistrationAssignmentList} OK - Returns a list of the registration assignments.
		 */
		RegistrationAssignments_List(scope: string, expandRegistrationDefinition: boolean | null | undefined, api_version: string): Observable<RegistrationAssignmentList> {
			return this.http.get<RegistrationAssignmentList>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.ManagedServices/registrationAssignments&expandRegistrationDefinition=' + expandRegistrationDefinition + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Gets the details of specified registration assignment.
		 * Get {scope}/providers/Microsoft.ManagedServices/registrationAssignments/{registrationAssignmentId}
		 * @param {string} scope Scope of the resource.
		 * @param {string} registrationAssignmentId Guid of the registration assignment.
		 * @param {boolean} expandRegistrationDefinition Tells whether to return registration definition details also along with registration assignment details.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {RegistrationAssignment} OK - Returns the registration assignment.
		 */
		RegistrationAssignments_Get(scope: string, registrationAssignmentId: string, expandRegistrationDefinition: boolean | null | undefined, api_version: string): Observable<RegistrationAssignment> {
			return this.http.get<RegistrationAssignment>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.ManagedServices/registrationAssignments/' + (registrationAssignmentId == null ? '' : encodeURIComponent(registrationAssignmentId)) + '&expandRegistrationDefinition=' + expandRegistrationDefinition + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Creates or updates a registration assignment.
		 * Put {scope}/providers/Microsoft.ManagedServices/registrationAssignments/{registrationAssignmentId}
		 * @param {string} scope Scope of the resource.
		 * @param {string} registrationAssignmentId Guid of the registration assignment.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {RegistrationAssignment} requestBody The parameters required to create new registration assignment.
		 * @return {RegistrationAssignment} Ok - Returns information about the updated registration assignment.
		 */
		RegistrationAssignments_CreateOrUpdate(scope: string, registrationAssignmentId: string, api_version: string, requestBody: RegistrationAssignment): Observable<RegistrationAssignment> {
			return this.http.put<RegistrationAssignment>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.ManagedServices/registrationAssignments/' + (registrationAssignmentId == null ? '' : encodeURIComponent(registrationAssignmentId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified registration assignment.
		 * Delete {scope}/providers/Microsoft.ManagedServices/registrationAssignments/{registrationAssignmentId}
		 * @param {string} scope Scope of the resource.
		 * @param {string} registrationAssignmentId Guid of the registration assignment.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {void} OK - The registration assignment is deleted.
		 */
		RegistrationAssignments_Delete(scope: string, registrationAssignmentId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.ManagedServices/registrationAssignments/' + (registrationAssignmentId == null ? '' : encodeURIComponent(registrationAssignmentId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a list of the registration definitions.
		 * Get {scope}/providers/Microsoft.ManagedServices/registrationDefinitions
		 * @param {string} scope Scope of the resource.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {RegistrationDefinitionList} OK - Returns a list of the registration definitions.
		 */
		RegistrationDefinitions_List(scope: string, api_version: string): Observable<RegistrationDefinitionList> {
			return this.http.get<RegistrationDefinitionList>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.ManagedServices/registrationDefinitions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Gets the registration definition details.
		 * Get {scope}/providers/Microsoft.ManagedServices/registrationDefinitions/{registrationDefinitionId}
		 * @param {string} scope Scope of the resource.
		 * @param {string} registrationDefinitionId Guid of the registration definition.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {RegistrationDefinition} OK - Returns the complete registration definition with plan details.
		 */
		RegistrationDefinitions_Get(scope: string, registrationDefinitionId: string, api_version: string): Observable<RegistrationDefinition> {
			return this.http.get<RegistrationDefinition>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.ManagedServices/registrationDefinitions/' + (registrationDefinitionId == null ? '' : encodeURIComponent(registrationDefinitionId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Creates or updates a registration definition.
		 * Put {scope}/providers/Microsoft.ManagedServices/registrationDefinitions/{registrationDefinitionId}
		 * @param {string} registrationDefinitionId Guid of the registration definition.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} scope Scope of the resource.
		 * @param {RegistrationDefinition} requestBody The parameters required to create new registration definition.
		 * @return {RegistrationDefinition} Ok - Returns information about the updated registration definition.
		 */
		RegistrationDefinitions_CreateOrUpdate(registrationDefinitionId: string, api_version: string, scope: string, requestBody: RegistrationDefinition): Observable<RegistrationDefinition> {
			return this.http.put<RegistrationDefinition>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.ManagedServices/registrationDefinitions/' + (registrationDefinitionId == null ? '' : encodeURIComponent(registrationDefinitionId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the registration definition.
		 * Delete {scope}/providers/Microsoft.ManagedServices/registrationDefinitions/{registrationDefinitionId}
		 * @param {string} registrationDefinitionId Guid of the registration definition.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} scope Scope of the resource.
		 * @return {void} OK - The registration definition is deleted.
		 */
		RegistrationDefinitions_Delete(registrationDefinitionId: string, api_version: string, scope: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.ManagedServices/registrationDefinitions/' + (registrationDefinitionId == null ? '' : encodeURIComponent(registrationDefinitionId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', { observe: 'response', responseType: 'text' });
		}
	}

}

