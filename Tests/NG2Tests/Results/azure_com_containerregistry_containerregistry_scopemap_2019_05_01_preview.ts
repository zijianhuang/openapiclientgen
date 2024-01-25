import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The parameters used to generate credentials for a specified token or user of a container registry. */
	export interface GenerateCredentialsParameters {

		/** The expiry date of the generated credentials after which the credentials become invalid. */
		expiry?: Date | null;

		/** Specifies name of the password which should be regenerated if any -- password1 or password2. */
		name?: GenerateCredentialsParametersName | null;

		/** The resource ID of the token for which credentials have to be generated. */
		tokenId?: string | null;
	}

	/** The parameters used to generate credentials for a specified token or user of a container registry. */
	export interface GenerateCredentialsParametersFormProperties {

		/** The expiry date of the generated credentials after which the credentials become invalid. */
		expiry: FormControl<Date | null | undefined>,

		/** Specifies name of the password which should be regenerated if any -- password1 or password2. */
		name: FormControl<GenerateCredentialsParametersName | null | undefined>,

		/** The resource ID of the token for which credentials have to be generated. */
		tokenId: FormControl<string | null | undefined>,
	}
	export function CreateGenerateCredentialsParametersFormGroup() {
		return new FormGroup<GenerateCredentialsParametersFormProperties>({
			expiry: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<GenerateCredentialsParametersName | null | undefined>(undefined),
			tokenId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GenerateCredentialsParametersName { password1 = 0, password2 = 1 }


	/** The response from the GenerateCredentials operation. */
	export interface GenerateCredentialsResult {

		/** The list of passwords for a container registry. */
		passwords?: Array<TokenPassword>;

		/** The username for a container registry. */
		username?: string | null;
	}

	/** The response from the GenerateCredentials operation. */
	export interface GenerateCredentialsResultFormProperties {

		/** The username for a container registry. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateGenerateCredentialsResultFormGroup() {
		return new FormGroup<GenerateCredentialsResultFormProperties>({
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The password that will be used for authenticating the token of a container registry. */
	export interface TokenPassword {

		/** The creation datetime of the password. */
		creationTime?: Date | null;

		/** The expiry datetime of the password. */
		expiry?: Date | null;

		/** The password name "password1" or "password2" */
		name?: GenerateCredentialsParametersName | null;

		/** The password value. */
		value?: string | null;
	}

	/** The password that will be used for authenticating the token of a container registry. */
	export interface TokenPasswordFormProperties {

		/** The creation datetime of the password. */
		creationTime: FormControl<Date | null | undefined>,

		/** The expiry datetime of the password. */
		expiry: FormControl<Date | null | undefined>,

		/** The password name "password1" or "password2" */
		name: FormControl<GenerateCredentialsParametersName | null | undefined>,

		/** The password value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateTokenPasswordFormGroup() {
		return new FormGroup<TokenPasswordFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			expiry: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<GenerateCredentialsParametersName | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The resource model definition for a ARM proxy resource. It will have everything other than required location and tags. */
	export interface ProxyResource {

		/** The resource ID. */
		id?: string | null;

		/** The name of the resource. */
		name?: string | null;

		/** The type of the resource. */
		type?: string | null;
	}

	/** The resource model definition for a ARM proxy resource. It will have everything other than required location and tags. */
	export interface ProxyResourceFormProperties {

		/** The resource ID. */
		id: FormControl<string | null | undefined>,

		/** The name of the resource. */
		name: FormControl<string | null | undefined>,

		/** The type of the resource. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateProxyResourceFormGroup() {
		return new FormGroup<ProxyResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that represents a scope map for a container registry. */
	export interface ScopeMap {

		/** The properties of a scope map. */
		properties?: ScopeMapProperties;
	}

	/** An object that represents a scope map for a container registry. */
	export interface ScopeMapFormProperties {
	}
	export function CreateScopeMapFormGroup() {
		return new FormGroup<ScopeMapFormProperties>({
		});

	}


	/** The properties of a scope map. */
	export interface ScopeMapProperties {

		/**
		 * The list of scoped permissions for registry artifacts.
		 * E.g. repositories/repository-name/content/read,
		 * repositories/repository-name/metadata/write
		 * Required
		 */
		actions: Array<string>;

		/** The creation date of scope map. */
		creationDate?: Date | null;

		/** The user friendly description of the scope map. */
		description?: string | null;

		/** Provisioning state of the resource. */
		provisioningState?: ScopeMapPropertiesProvisioningState | null;

		/** The type of the scope map. E.g. BuildIn scope map. */
		type?: string | null;
	}

	/** The properties of a scope map. */
	export interface ScopeMapPropertiesFormProperties {

		/** The creation date of scope map. */
		creationDate: FormControl<Date | null | undefined>,

		/** The user friendly description of the scope map. */
		description: FormControl<string | null | undefined>,

		/** Provisioning state of the resource. */
		provisioningState: FormControl<ScopeMapPropertiesProvisioningState | null | undefined>,

		/** The type of the scope map. E.g. BuildIn scope map. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateScopeMapPropertiesFormGroup() {
		return new FormGroup<ScopeMapPropertiesFormProperties>({
			creationDate: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<ScopeMapPropertiesProvisioningState | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ScopeMapPropertiesProvisioningState { Creating = 0, Updating = 1, Deleting = 2, Succeeded = 3, Failed = 4, Canceled = 5 }


	/** The result of a request to list scope maps for a container registry. */
	export interface ScopeMapListResult {

		/** The URI that can be used to request the next list of scope maps. */
		nextLink?: string | null;

		/** The list of scope maps. Since this list may be incomplete, the nextLink field should be used to request the next list of scope maps. */
		value?: Array<ScopeMap>;
	}

	/** The result of a request to list scope maps for a container registry. */
	export interface ScopeMapListResultFormProperties {

		/** The URI that can be used to request the next list of scope maps. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateScopeMapListResultFormGroup() {
		return new FormGroup<ScopeMapListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The update parameters for scope map properties. */
	export interface ScopeMapPropertiesUpdateParameters {

		/**
		 * The list of scope permissions for registry artifacts.
		 * E.g. repositories/repository-name/pull,
		 * repositories/repository-name/delete
		 */
		actions?: Array<string>;

		/** The user friendly description of the scope map. */
		description?: string | null;
	}

	/** The update parameters for scope map properties. */
	export interface ScopeMapPropertiesUpdateParametersFormProperties {

		/** The user friendly description of the scope map. */
		description: FormControl<string | null | undefined>,
	}
	export function CreateScopeMapPropertiesUpdateParametersFormGroup() {
		return new FormGroup<ScopeMapPropertiesUpdateParametersFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties for updating the scope map. */
	export interface ScopeMapUpdateParameters {

		/** The update parameters for scope map properties. */
		properties?: ScopeMapPropertiesUpdateParameters;
	}

	/** The properties for updating the scope map. */
	export interface ScopeMapUpdateParametersFormProperties {
	}
	export function CreateScopeMapUpdateParametersFormGroup() {
		return new FormGroup<ScopeMapUpdateParametersFormProperties>({
		});

	}


	/** An object that represents a token for a container registry. */
	export interface Token {

		/** The properties of a token. */
		properties?: TokenProperties;
	}

	/** An object that represents a token for a container registry. */
	export interface TokenFormProperties {
	}
	export function CreateTokenFormGroup() {
		return new FormGroup<TokenFormProperties>({
		});

	}


	/** The properties of a token. */
	export interface TokenProperties {

		/** The creation date of scope map. */
		creationDate?: Date | null;

		/** The properties of the credentials that can be used for authenticating the token. */
		credentials?: TokenCredentialsProperties;

		/** The user/group/application object ID for which the token has to be created. */
		objectId?: string | null;

		/** Provisioning state of the resource. */
		provisioningState?: ScopeMapPropertiesProvisioningState | null;

		/** The resource ID of the scope map to which the token will be associated with. */
		scopeMapId?: string | null;

		/** The status of the token example enabled or disabled. */
		status?: TokenPropertiesStatus | null;
	}

	/** The properties of a token. */
	export interface TokenPropertiesFormProperties {

		/** The creation date of scope map. */
		creationDate: FormControl<Date | null | undefined>,

		/** The user/group/application object ID for which the token has to be created. */
		objectId: FormControl<string | null | undefined>,

		/** Provisioning state of the resource. */
		provisioningState: FormControl<ScopeMapPropertiesProvisioningState | null | undefined>,

		/** The resource ID of the scope map to which the token will be associated with. */
		scopeMapId: FormControl<string | null | undefined>,

		/** The status of the token example enabled or disabled. */
		status: FormControl<TokenPropertiesStatus | null | undefined>,
	}
	export function CreateTokenPropertiesFormGroup() {
		return new FormGroup<TokenPropertiesFormProperties>({
			creationDate: new FormControl<Date | null | undefined>(undefined),
			objectId: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<ScopeMapPropertiesProvisioningState | null | undefined>(undefined),
			scopeMapId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<TokenPropertiesStatus | null | undefined>(undefined),
		});

	}


	/** The properties of the credentials that can be used for authenticating the token. */
	export interface TokenCredentialsProperties {
		certificates?: Array<TokenCertificate>;
		passwords?: Array<TokenPassword>;
	}

	/** The properties of the credentials that can be used for authenticating the token. */
	export interface TokenCredentialsPropertiesFormProperties {
	}
	export function CreateTokenCredentialsPropertiesFormGroup() {
		return new FormGroup<TokenCredentialsPropertiesFormProperties>({
		});

	}


	/** The properties of a certificate used for authenticating a token. */
	export interface TokenCertificate {

		/** Base 64 encoded string of the public certificate1 in PEM format that will be used for authenticating the token. */
		encodedPemCertificate?: string | null;

		/** The expiry datetime of the certificate. */
		expiry?: Date | null;
		name?: TokenCertificateName | null;

		/** The thumbprint of the certificate. */
		thumbprint?: string | null;
	}

	/** The properties of a certificate used for authenticating a token. */
	export interface TokenCertificateFormProperties {

		/** Base 64 encoded string of the public certificate1 in PEM format that will be used for authenticating the token. */
		encodedPemCertificate: FormControl<string | null | undefined>,

		/** The expiry datetime of the certificate. */
		expiry: FormControl<Date | null | undefined>,
		name: FormControl<TokenCertificateName | null | undefined>,

		/** The thumbprint of the certificate. */
		thumbprint: FormControl<string | null | undefined>,
	}
	export function CreateTokenCertificateFormGroup() {
		return new FormGroup<TokenCertificateFormProperties>({
			encodedPemCertificate: new FormControl<string | null | undefined>(undefined),
			expiry: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<TokenCertificateName | null | undefined>(undefined),
			thumbprint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TokenCertificateName { certificate1 = 0, certificate2 = 1 }

	export enum TokenPropertiesStatus { enabled = 0, disabled = 1 }


	/** The result of a request to list tokens for a container registry. */
	export interface TokenListResult {

		/** The URI that can be used to request the next list of tokens. */
		nextLink?: string | null;

		/** The list of tokens. Since this list may be incomplete, the nextLink field should be used to request the next list of tokens. */
		value?: Array<Token>;
	}

	/** The result of a request to list tokens for a container registry. */
	export interface TokenListResultFormProperties {

		/** The URI that can be used to request the next list of tokens. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateTokenListResultFormGroup() {
		return new FormGroup<TokenListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The parameters for updating a token. */
	export interface TokenUpdateParameters {

		/** The parameters for updating token properties. */
		properties?: TokenUpdateProperties;
	}

	/** The parameters for updating a token. */
	export interface TokenUpdateParametersFormProperties {
	}
	export function CreateTokenUpdateParametersFormGroup() {
		return new FormGroup<TokenUpdateParametersFormProperties>({
		});

	}


	/** The parameters for updating token properties. */
	export interface TokenUpdateProperties {

		/** The properties of the credentials that can be used for authenticating the token. */
		credentials?: TokenCredentialsProperties;

		/** The resource ID of the scope map to which the token will be associated with. */
		scopeMapId?: string | null;

		/** The status of the token example enabled or disabled. */
		status?: TokenPropertiesStatus | null;
	}

	/** The parameters for updating token properties. */
	export interface TokenUpdatePropertiesFormProperties {

		/** The resource ID of the scope map to which the token will be associated with. */
		scopeMapId: FormControl<string | null | undefined>,

		/** The status of the token example enabled or disabled. */
		status: FormControl<TokenPropertiesStatus | null | undefined>,
	}
	export function CreateTokenUpdatePropertiesFormGroup() {
		return new FormGroup<TokenUpdatePropertiesFormProperties>({
			scopeMapId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<TokenPropertiesStatus | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Generate keys for a token of a specified container registry.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/generateCredentials
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @param {GenerateCredentialsParameters} requestBody The parameters for generating credentials.
		 * @return {GenerateCredentialsResult} The request was successful; the request was well-formed and received properly.
		 */
		Registries_GenerateCredentials(api_version: string, subscriptionId: string, resourceGroupName: string, registryName: string, requestBody: GenerateCredentialsParameters): Observable<GenerateCredentialsResult> {
			return this.http.post<GenerateCredentialsResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/generateCredentials?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the scope maps for the specified container registry.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/scopeMaps
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @return {ScopeMapListResult} The request was successful; the request was well-formed and received properly.
		 */
		ScopeMaps_List(api_version: string, subscriptionId: string, resourceGroupName: string, registryName: string): Observable<ScopeMapListResult> {
			return this.http.get<ScopeMapListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/scopeMaps?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the properties of the specified scope map.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/scopeMaps/{scopeMapName}
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @param {string} scopeMapName The name of the scope map.
		 * @return {ScopeMap} The request was successful; the request was well-formed and received properly.
		 */
		ScopeMaps_Get(api_version: string, subscriptionId: string, resourceGroupName: string, registryName: string, scopeMapName: string): Observable<ScopeMap> {
			return this.http.get<ScopeMap>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/scopeMaps/' + (scopeMapName == null ? '' : encodeURIComponent(scopeMapName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a scope map for a container registry with the specified parameters.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/scopeMaps/{scopeMapName}
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @param {string} scopeMapName The name of the scope map.
		 * @param {ScopeMap} requestBody The parameters for creating a scope map.
		 * @return {ScopeMap} The request was successful; the request was well-formed and received properly.
		 */
		ScopeMaps_Create(api_version: string, subscriptionId: string, resourceGroupName: string, registryName: string, scopeMapName: string, requestBody: ScopeMap): Observable<ScopeMap> {
			return this.http.put<ScopeMap>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/scopeMaps/' + (scopeMapName == null ? '' : encodeURIComponent(scopeMapName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a scope map from a container registry.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/scopeMaps/{scopeMapName}
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @param {string} scopeMapName The name of the scope map.
		 * @return {void} The request was successful; the request was well-formed and received properly.
		 */
		ScopeMaps_Delete(api_version: string, subscriptionId: string, resourceGroupName: string, registryName: string, scopeMapName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/scopeMaps/' + (scopeMapName == null ? '' : encodeURIComponent(scopeMapName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a scope map with the specified parameters.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/scopeMaps/{scopeMapName}
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @param {string} scopeMapName The name of the scope map.
		 * @param {ScopeMapUpdateParameters} requestBody The parameters for updating a scope map.
		 * @return {ScopeMap} The request was successful; the request was well-formed and received properly.
		 */
		ScopeMaps_Update(api_version: string, subscriptionId: string, resourceGroupName: string, registryName: string, scopeMapName: string, requestBody: ScopeMapUpdateParameters): Observable<ScopeMap> {
			return this.http.patch<ScopeMap>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/scopeMaps/' + (scopeMapName == null ? '' : encodeURIComponent(scopeMapName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the tokens for the specified container registry.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/tokens
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @return {TokenListResult} The request was successful; the request was well-formed and received properly.
		 */
		Tokens_List(api_version: string, subscriptionId: string, resourceGroupName: string, registryName: string): Observable<TokenListResult> {
			return this.http.get<TokenListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/tokens?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the properties of the specified token.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/tokens/{tokenName}
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @param {string} tokenName The name of the token.
		 * @return {Token} The request was successful; the request was well-formed and received properly.
		 */
		Tokens_Get(api_version: string, subscriptionId: string, resourceGroupName: string, registryName: string, tokenName: string): Observable<Token> {
			return this.http.get<Token>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/tokens/' + (tokenName == null ? '' : encodeURIComponent(tokenName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a token for a container registry with the specified parameters.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/tokens/{tokenName}
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @param {string} tokenName The name of the token.
		 * @param {Token} requestBody The parameters for creating a token.
		 * @return {Token} The request was successful; the request was well-formed and received properly.
		 */
		Tokens_Create(api_version: string, subscriptionId: string, resourceGroupName: string, registryName: string, tokenName: string, requestBody: Token): Observable<Token> {
			return this.http.put<Token>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/tokens/' + (tokenName == null ? '' : encodeURIComponent(tokenName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a token from a container registry.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/tokens/{tokenName}
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @param {string} tokenName The name of the token.
		 * @return {void} The request was successful; the request was well-formed and received properly.
		 */
		Tokens_Delete(api_version: string, subscriptionId: string, resourceGroupName: string, registryName: string, tokenName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/tokens/' + (tokenName == null ? '' : encodeURIComponent(tokenName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a token with the specified parameters.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/tokens/{tokenName}
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @param {string} tokenName The name of the token.
		 * @param {TokenUpdateParameters} requestBody The parameters for updating a token.
		 * @return {Token} The request was successful; the request was well-formed and received properly.
		 */
		Tokens_Update(api_version: string, subscriptionId: string, resourceGroupName: string, registryName: string, tokenName: string, requestBody: TokenUpdateParameters): Observable<Token> {
			return this.http.patch<Token>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/tokens/' + (tokenName == null ? '' : encodeURIComponent(tokenName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

