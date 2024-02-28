import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** ARM error response body. */
	export interface ARMErrorResponseBody {

		/** Gets or sets the string that can be used to programmatically identify the error. */
		code?: string | null;

		/** Gets or sets the string that describes the error in detail and provides debugging information. */
		message?: string | null;
	}

	/** ARM error response body. */
	export interface ARMErrorResponseBodyFormProperties {

		/** Gets or sets the string that can be used to programmatically identify the error. */
		code: FormControl<string | null | undefined>,

		/** Gets or sets the string that describes the error in detail and provides debugging information. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateARMErrorResponseBodyFormGroup() {
		return new FormGroup<ARMErrorResponseBodyFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ArmErrorResponse {

		/** ARM error response body. */
		error?: ARMErrorResponseBody;
	}
	export interface ArmErrorResponseFormProperties {
	}
	export function CreateArmErrorResponseFormGroup() {
		return new FormGroup<ArmErrorResponseFormProperties>({
		});

	}


	/** The Advisor configuration data structure. */
	export interface ConfigData {

		/** Configuration data properties */
		properties?: ConfigDataProperties;
	}

	/** The Advisor configuration data structure. */
	export interface ConfigDataFormProperties {
	}
	export function CreateConfigDataFormGroup() {
		return new FormGroup<ConfigDataFormProperties>({
		});

	}


	/** Configuration data properties */
	export interface ConfigDataProperties {

		/** Advisor digest configuration. Valid only for subscriptions */
		digests?: Array<DigestConfig>;

		/** Exclude the resource from Advisor evaluations. Valid values: False (default) or True. */
		exclude?: boolean | null;

		/** Minimum percentage threshold for Advisor low CPU utilization evaluation. Valid only for subscriptions. Valid values: 5 (default), 10, 15 or 20. */
		lowCpuThreshold?: ConfigDataPropertiesLowCpuThreshold | null;
	}

	/** Configuration data properties */
	export interface ConfigDataPropertiesFormProperties {

		/** Exclude the resource from Advisor evaluations. Valid values: False (default) or True. */
		exclude: FormControl<boolean | null | undefined>,

		/** Minimum percentage threshold for Advisor low CPU utilization evaluation. Valid only for subscriptions. Valid values: 5 (default), 10, 15 or 20. */
		lowCpuThreshold: FormControl<ConfigDataPropertiesLowCpuThreshold | null | undefined>,
	}
	export function CreateConfigDataPropertiesFormGroup() {
		return new FormGroup<ConfigDataPropertiesFormProperties>({
			exclude: new FormControl<boolean | null | undefined>(undefined),
			lowCpuThreshold: new FormControl<ConfigDataPropertiesLowCpuThreshold | null | undefined>(undefined),
		});

	}


	/** Advisor Digest configuration entity */
	export interface DigestConfig {

		/** Action group resource id used by digest. */
		actionGroupResourceId?: string | null;

		/** Categories to send digest for. If categories are not provided, then digest will be sent for all categories. */
		categories?: Array<string>;

		/**
		 * Frequency that digest will be triggered, in days. Value must be between 7 and 30 days inclusive.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		frequency?: number | null;

		/** Language for digest content body. Value must be ISO 639-1 code for one of Azure portal supported languages. Otherwise, it will be converted into one. Default value is English (en). */
		language?: string | null;

		/** Name of digest configuration. Value is case-insensitive and must be unique within a subscription. */
		name?: string | null;

		/** State of digest configuration. */
		state?: DigestConfigState | null;
	}

	/** Advisor Digest configuration entity */
	export interface DigestConfigFormProperties {

		/** Action group resource id used by digest. */
		actionGroupResourceId: FormControl<string | null | undefined>,

		/**
		 * Frequency that digest will be triggered, in days. Value must be between 7 and 30 days inclusive.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		frequency: FormControl<number | null | undefined>,

		/** Language for digest content body. Value must be ISO 639-1 code for one of Azure portal supported languages. Otherwise, it will be converted into one. Default value is English (en). */
		language: FormControl<string | null | undefined>,

		/** Name of digest configuration. Value is case-insensitive and must be unique within a subscription. */
		name: FormControl<string | null | undefined>,

		/** State of digest configuration. */
		state: FormControl<DigestConfigState | null | undefined>,
	}
	export function CreateDigestConfigFormGroup() {
		return new FormGroup<DigestConfigFormProperties>({
			actionGroupResourceId: new FormControl<string | null | undefined>(undefined),
			frequency: new FormControl<number | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<DigestConfigState | null | undefined>(undefined),
		});

	}

	export enum DigestConfigState { Active = 'Active', Disabled = 'Disabled' }

	export enum ConfigDataPropertiesLowCpuThreshold { _5 = '5', _10 = '10', _15 = '15', _20 = '20' }


	/** The list of Advisor configurations. */
	export interface ConfigurationListResult {

		/** The link used to get the next page of configurations. */
		nextLink?: string | null;

		/** The list of configurations. */
		value?: Array<ConfigData>;
	}

	/** The list of Advisor configurations. */
	export interface ConfigurationListResultFormProperties {

		/** The link used to get the next page of configurations. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateConfigurationListResultFormGroup() {
		return new FormGroup<ConfigurationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The metadata entity contract. */
	export interface MetadataEntity {

		/** The resource Id of the metadata entity. */
		id?: string | null;

		/** The name of the metadata entity. */
		name?: string | null;

		/** The metadata entity properties */
		properties?: MetadataEntityProperties;

		/** The type of the metadata entity. */
		type?: string | null;
	}

	/** The metadata entity contract. */
	export interface MetadataEntityFormProperties {

		/** The resource Id of the metadata entity. */
		id: FormControl<string | null | undefined>,

		/** The name of the metadata entity. */
		name: FormControl<string | null | undefined>,

		/** The type of the metadata entity. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateMetadataEntityFormGroup() {
		return new FormGroup<MetadataEntityFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The metadata entity properties */
	export interface MetadataEntityProperties {

		/** The list of scenarios applicable to this metadata entity. */
		applicableScenarios?: Array<string>;

		/** The list of keys on which this entity depends on. */
		dependsOn?: Array<string>;

		/** The display name. */
		displayName?: string | null;

		/** The list of supported values. */
		supportedValues?: Array<MetadataSupportedValueDetail>;
	}

	/** The metadata entity properties */
	export interface MetadataEntityPropertiesFormProperties {

		/** The display name. */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateMetadataEntityPropertiesFormGroup() {
		return new FormGroup<MetadataEntityPropertiesFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The metadata supported value detail. */
	export interface MetadataSupportedValueDetail {

		/** The display name. */
		displayName?: string | null;

		/** The id. */
		id?: string | null;
	}

	/** The metadata supported value detail. */
	export interface MetadataSupportedValueDetailFormProperties {

		/** The display name. */
		displayName: FormControl<string | null | undefined>,

		/** The id. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateMetadataSupportedValueDetailFormGroup() {
		return new FormGroup<MetadataSupportedValueDetailFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list of metadata entities */
	export interface MetadataEntityListResult {

		/** The link used to get the next page of metadata. */
		nextLink?: string | null;

		/** The list of metadata entities. */
		value?: Array<MetadataEntity>;
	}

	/** The list of metadata entities */
	export interface MetadataEntityListResultFormProperties {

		/** The link used to get the next page of metadata. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateMetadataEntityListResultFormGroup() {
		return new FormGroup<MetadataEntityListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The operation supported by Advisor. */
	export interface OperationDisplayInfo {

		/** The description of the operation. */
		description?: string | null;

		/** The action that users can perform, based on their permission level. */
		operation?: string | null;

		/** Service provider: Microsoft Advisor. */
		provider?: string | null;

		/** Resource on which the operation is performed. */
		resource?: string | null;
	}

	/** The operation supported by Advisor. */
	export interface OperationDisplayInfoFormProperties {

		/** The description of the operation. */
		description: FormControl<string | null | undefined>,

		/** The action that users can perform, based on their permission level. */
		operation: FormControl<string | null | undefined>,

		/** Service provider: Microsoft Advisor. */
		provider: FormControl<string | null | undefined>,

		/** Resource on which the operation is performed. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateOperationDisplayInfoFormGroup() {
		return new FormGroup<OperationDisplayInfoFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The operation supported by Advisor. */
	export interface OperationEntity {

		/** The operation supported by Advisor. */
		display?: OperationDisplayInfo;

		/** Operation name: {provider}/{resource}/{operation}. */
		name?: string | null;
	}

	/** The operation supported by Advisor. */
	export interface OperationEntityFormProperties {

		/** Operation name: {provider}/{resource}/{operation}. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationEntityFormGroup() {
		return new FormGroup<OperationEntityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list of Advisor operations. */
	export interface OperationEntityListResult {

		/** The link used to get the next page of operations. */
		nextLink?: string | null;

		/** The list of operations. */
		value?: Array<OperationEntity>;
	}

	/** The list of Advisor operations. */
	export interface OperationEntityListResultFormProperties {

		/** The link used to get the next page of operations. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationEntityListResultFormGroup() {
		return new FormGroup<OperationEntityListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties of the recommendation. */
	export interface RecommendationProperties {

		/** The category of the recommendation. */
		category?: RecommendationPropertiesCategory | null;

		/** Extended properties */
		extendedProperties?: {[id: string]: string };

		/** The business impact of the recommendation. */
		impact?: RecommendationPropertiesImpact | null;

		/** The resource type identified by Advisor. */
		impactedField?: string | null;

		/** The resource identified by Advisor. */
		impactedValue?: string | null;

		/** The most recent time that Advisor checked the validity of the recommendation. */
		lastUpdated?: Date | null;

		/** The recommendation metadata. */
		metadata?: {[id: string]: any };

		/** The recommendation-type GUID. */
		recommendationTypeId?: string | null;

		/** The potential risk of not implementing the recommendation. */
		risk?: RecommendationPropertiesRisk | null;

		/** A summary of the recommendation. */
		shortDescription?: ShortDescription;

		/** The list of snoozed and dismissed rules for the recommendation. */
		suppressionIds?: Array<string>;
	}

	/** The properties of the recommendation. */
	export interface RecommendationPropertiesFormProperties {

		/** The category of the recommendation. */
		category: FormControl<RecommendationPropertiesCategory | null | undefined>,

		/** Extended properties */
		extendedProperties: FormControl<{[id: string]: string } | null | undefined>,

		/** The business impact of the recommendation. */
		impact: FormControl<RecommendationPropertiesImpact | null | undefined>,

		/** The resource type identified by Advisor. */
		impactedField: FormControl<string | null | undefined>,

		/** The resource identified by Advisor. */
		impactedValue: FormControl<string | null | undefined>,

		/** The most recent time that Advisor checked the validity of the recommendation. */
		lastUpdated: FormControl<Date | null | undefined>,

		/** The recommendation metadata. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The recommendation-type GUID. */
		recommendationTypeId: FormControl<string | null | undefined>,

		/** The potential risk of not implementing the recommendation. */
		risk: FormControl<RecommendationPropertiesRisk | null | undefined>,
	}
	export function CreateRecommendationPropertiesFormGroup() {
		return new FormGroup<RecommendationPropertiesFormProperties>({
			category: new FormControl<RecommendationPropertiesCategory | null | undefined>(undefined),
			extendedProperties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			impact: new FormControl<RecommendationPropertiesImpact | null | undefined>(undefined),
			impactedField: new FormControl<string | null | undefined>(undefined),
			impactedValue: new FormControl<string | null | undefined>(undefined),
			lastUpdated: new FormControl<Date | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			recommendationTypeId: new FormControl<string | null | undefined>(undefined),
			risk: new FormControl<RecommendationPropertiesRisk | null | undefined>(undefined),
		});

	}

	export enum RecommendationPropertiesCategory { HighAvailability = 'HighAvailability', Security = 'Security', Performance = 'Performance', Cost = 'Cost', OperationalExcellence = 'OperationalExcellence' }

	export enum RecommendationPropertiesImpact { High = 'High', Medium = 'Medium', Low = 'Low' }

	export enum RecommendationPropertiesRisk { Error = 'Error', Warning = 'Warning', None = 'None' }


	/** A summary of the recommendation. */
	export interface ShortDescription {

		/** The issue or opportunity identified by the recommendation. */
		problem?: string | null;

		/** The remediation action suggested by the recommendation. */
		solution?: string | null;
	}

	/** A summary of the recommendation. */
	export interface ShortDescriptionFormProperties {

		/** The issue or opportunity identified by the recommendation. */
		problem: FormControl<string | null | undefined>,

		/** The remediation action suggested by the recommendation. */
		solution: FormControl<string | null | undefined>,
	}
	export function CreateShortDescriptionFormGroup() {
		return new FormGroup<ShortDescriptionFormProperties>({
			problem: new FormControl<string | null | undefined>(undefined),
			solution: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Azure resource. */
	export interface Resource {

		/** The resource ID. */
		id?: string | null;

		/** The name of the resource. */
		name?: string | null;

		/** The type of the resource. */
		type?: string | null;
	}

	/** An Azure resource. */
	export interface ResourceFormProperties {

		/** The resource ID. */
		id: FormControl<string | null | undefined>,

		/** The name of the resource. */
		name: FormControl<string | null | undefined>,

		/** The type of the resource. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Advisor Recommendation. */
	export interface ResourceRecommendationBase {

		/** The properties of the recommendation. */
		properties?: RecommendationProperties;
	}

	/** Advisor Recommendation. */
	export interface ResourceRecommendationBaseFormProperties {
	}
	export function CreateResourceRecommendationBaseFormGroup() {
		return new FormGroup<ResourceRecommendationBaseFormProperties>({
		});

	}


	/** The list of Advisor recommendations. */
	export interface ResourceRecommendationBaseListResult {

		/** The link used to get the next page of recommendations. */
		nextLink?: string | null;

		/** The list of recommendations. */
		value?: Array<ResourceRecommendationBase>;
	}

	/** The list of Advisor recommendations. */
	export interface ResourceRecommendationBaseListResultFormProperties {

		/** The link used to get the next page of recommendations. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateResourceRecommendationBaseListResultFormGroup() {
		return new FormGroup<ResourceRecommendationBaseListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details of the snoozed or dismissed rule; for example, the duration, name, and GUID associated with the rule. */
	export interface SuppressionContract {

		/** The properties of the suppression. */
		properties?: SuppressionProperties;
	}

	/** The details of the snoozed or dismissed rule; for example, the duration, name, and GUID associated with the rule. */
	export interface SuppressionContractFormProperties {
	}
	export function CreateSuppressionContractFormGroup() {
		return new FormGroup<SuppressionContractFormProperties>({
		});

	}


	/** The properties of the suppression. */
	export interface SuppressionProperties {

		/** The GUID of the suppression. */
		suppressionId?: string | null;

		/** The duration for which the suppression is valid. */
		ttl?: string | null;
	}

	/** The properties of the suppression. */
	export interface SuppressionPropertiesFormProperties {

		/** The GUID of the suppression. */
		suppressionId: FormControl<string | null | undefined>,

		/** The duration for which the suppression is valid. */
		ttl: FormControl<string | null | undefined>,
	}
	export function CreateSuppressionPropertiesFormGroup() {
		return new FormGroup<SuppressionPropertiesFormProperties>({
			suppressionId: new FormControl<string | null | undefined>(undefined),
			ttl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list of Advisor suppressions. */
	export interface SuppressionContractListResult {

		/** The link used to get the next page of suppressions. */
		nextLink?: string | null;

		/** The list of suppressions. */
		value?: Array<SuppressionContract>;
	}

	/** The list of Advisor suppressions. */
	export interface SuppressionContractListResultFormProperties {

		/** The link used to get the next page of suppressions. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSuppressionContractListResultFormGroup() {
		return new FormGroup<SuppressionContractListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets the list of metadata entities.
		 * Get providers/Microsoft.Advisor/metadata
		 * @param {string} api_version The version of the API to be used with the client request.
		 * @return {MetadataEntityListResult} OK. Successfully retrieved metadata entities
		 */
		RecommendationMetadata_List(api_version: string): Observable<MetadataEntityListResult> {
			return this.http.get<MetadataEntityListResult>(this.baseUri + 'providers/Microsoft.Advisor/metadata?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the metadata entity.
		 * Get providers/Microsoft.Advisor/metadata/{name}
		 * @param {string} name Name of metadata entity.
		 * @param {string} api_version The version of the API to be used with the client request.
		 * @return {MetadataEntity} OK. Successfully retrieved metadata entities
		 */
		RecommendationMetadata_Get(name: string, api_version: string): Observable<MetadataEntity> {
			return this.http.get<MetadataEntity>(this.baseUri + 'providers/Microsoft.Advisor/metadata/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all the available Advisor REST API operations.
		 * Get providers/Microsoft.Advisor/operations
		 * @param {string} api_version The version of the API to be used with the client request.
		 * @return {OperationEntityListResult} OK. Successfully retrieved operation list.
		 */
		Operations_List(api_version: string): Observable<OperationEntityListResult> {
			return this.http.get<OperationEntityListResult>(this.baseUri + 'providers/Microsoft.Advisor/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieve Azure Advisor configurations.
		 * Retrieve Azure Advisor configurations and also retrieve configurations of contained resource groups.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Advisor/configurations
		 * @param {string} api_version The version of the API to be used with the client request.
		 * @param {string} subscriptionId The Azure subscription ID.
		 * @return {ConfigurationListResult} OK. Successfully retrieved zero or more configurations.
		 */
		Configurations_ListBySubscription(api_version: string, subscriptionId: string): Observable<ConfigurationListResult> {
			return this.http.get<ConfigurationListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Advisor/configurations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create/Overwrite Azure Advisor configuration.
		 * Create/Overwrite Azure Advisor configuration and also delete all configurations of contained resource groups.
		 * Put subscriptions/{subscriptionId}/providers/Microsoft.Advisor/configurations/{configurationName}
		 * @param {string} api_version The version of the API to be used with the client request.
		 * @param {string} subscriptionId The Azure subscription ID.
		 * @param {Configurations_CreateInSubscriptionConfigurationName} configurationName Advisor configuration name. Value must be 'default'
		 * @param {ConfigData} requestBody The Azure Advisor configuration data structure.
		 * @return {ConfigData} Successfully created/overwrote configuration.
		 */
		Configurations_CreateInSubscription(api_version: string, subscriptionId: string, configurationName: Configurations_CreateInSubscriptionConfigurationName, requestBody: ConfigData): Observable<ConfigData> {
			return this.http.put<ConfigData>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Advisor/configurations/' + configurationName + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Initiates the recommendation generation or computation process for a subscription. This operation is asynchronous. The generated recommendations are stored in a cache in the Advisor service.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.Advisor/generateRecommendations
		 * @param {string} subscriptionId The Azure subscription ID.
		 * @param {string} api_version The version of the API to be used with the client request.
		 * @return {void} 
		 */
		Recommendations_Generate(subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Advisor/generateRecommendations&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the status of the recommendation computation or generation process. Invoke this API after calling the generation recommendation. The URI of this API is returned in the Location field of the response header.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Advisor/generateRecommendations/{operationId}
		 * @param {string} subscriptionId The Azure subscription ID.
		 * @param {string} operationId The operation ID, which can be found from the Location field in the generate recommendation response header.
		 * @param {string} api_version The version of the API to be used with the client request.
		 * @return {void} 
		 */
		Recommendations_GetGenerateStatus(subscriptionId: string, operationId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Advisor/generateRecommendations/' + (operationId == null ? '' : encodeURIComponent(operationId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Obtains cached recommendations for a subscription. The recommendations are generated or computed by invoking generateRecommendations.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Advisor/recommendations
		 * @param {string} subscriptionId The Azure subscription ID.
		 * @param {string} api_version The version of the API to be used with the client request.
		 * @param {string} filter The filter to apply to the recommendations.
		 * @param {number} top The number of recommendations per page if a paged version of this API is being used.
		 * @param {string} skipToken The page-continuation token to use with a paged version of this API.
		 * @return {ResourceRecommendationBaseListResult} OK. Successfully obtained cached recommendations.
		 */
		Recommendations_List(subscriptionId: string, api_version: string, filter: string | null | undefined, top: number | null | undefined, skipToken: string | null | undefined): Observable<ResourceRecommendationBaseListResult> {
			return this.http.get<ResourceRecommendationBaseListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Advisor/recommendations&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skipToken=' + (skipToken == null ? '' : encodeURIComponent(skipToken)), {});
		}

		/**
		 * Retrieves the list of snoozed or dismissed suppressions for a subscription. The snoozed or dismissed attribute of a recommendation is referred to as a suppression.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Advisor/suppressions
		 * @param {string} subscriptionId The Azure subscription ID.
		 * @param {string} api_version The version of the API to be used with the client request.
		 * @param {number} top The number of suppressions per page if a paged version of this API is being used.
		 * @param {string} skipToken The page-continuation token to use with a paged version of this API.
		 * @return {SuppressionContractListResult} OK. Successfully got all suppressions in a subscription.
		 */
		Suppressions_List(subscriptionId: string, api_version: string, top: number | null | undefined, skipToken: string | null | undefined): Observable<SuppressionContractListResult> {
			return this.http.get<SuppressionContractListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Advisor/suppressions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&top=' + top + '&skipToken=' + (skipToken == null ? '' : encodeURIComponent(skipToken)), {});
		}

		/**
		 * Retrieve Azure Advisor configurations.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Advisor/configurations
		 * @param {string} api_version The version of the API to be used with the client request.
		 * @param {string} subscriptionId The Azure subscription ID.
		 * @param {string} resourceGroup The name of the Azure resource group.
		 * @return {ConfigurationListResult} OK. Successfully retrieved zero or more configurations.
		 */
		Configurations_ListByResourceGroup(api_version: string, subscriptionId: string, resourceGroup: string): Observable<ConfigurationListResult> {
			return this.http.get<ConfigurationListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.Advisor/configurations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create/Overwrite Azure Advisor configuration.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Advisor/configurations/{configurationName}
		 * @param {string} api_version The version of the API to be used with the client request.
		 * @param {string} subscriptionId The Azure subscription ID.
		 * @param {Configurations_CreateInSubscriptionConfigurationName} configurationName Advisor configuration name. Value must be 'default'
		 * @param {string} resourceGroup The name of the Azure resource group.
		 * @param {ConfigData} requestBody The Azure Advisor configuration data structure.
		 * @return {ConfigData} Successfully created/overwrote configuration.
		 */
		Configurations_CreateInResourceGroup(api_version: string, subscriptionId: string, configurationName: Configurations_CreateInSubscriptionConfigurationName, resourceGroup: string, requestBody: ConfigData): Observable<ConfigData> {
			return this.http.put<ConfigData>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.Advisor/configurations/' + configurationName + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Obtains details of a cached recommendation.
		 * Get {resourceUri}/providers/Microsoft.Advisor/recommendations/{recommendationId}
		 * @param {string} resourceUri The fully qualified Azure Resource Manager identifier of the resource to which the recommendation applies.
		 * @param {string} recommendationId The recommendation ID.
		 * @param {string} api_version The version of the API to be used with the client request.
		 * @return {ResourceRecommendationBase} OK. Successfully got recommendation detail.
		 */
		Recommendations_Get(resourceUri: string, recommendationId: string, api_version: string): Observable<ResourceRecommendationBase> {
			return this.http.get<ResourceRecommendationBase>(this.baseUri + (resourceUri == null ? '' : encodeURIComponent(resourceUri)) + '/providers/Microsoft.Advisor/recommendations/' + (recommendationId == null ? '' : encodeURIComponent(recommendationId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Obtains the details of a suppression.
		 * Get {resourceUri}/providers/Microsoft.Advisor/recommendations/{recommendationId}/suppressions/{name}
		 * @param {string} resourceUri The fully qualified Azure Resource Manager identifier of the resource to which the recommendation applies.
		 * @param {string} recommendationId The recommendation ID.
		 * @param {string} name The name of the suppression.
		 * @param {string} api_version The version of the API to be used with the client request.
		 * @return {SuppressionContract} OK. Successfully got suppression detail.
		 */
		Suppressions_Get(resourceUri: string, recommendationId: string, name: string, api_version: string): Observable<SuppressionContract> {
			return this.http.get<SuppressionContract>(this.baseUri + (resourceUri == null ? '' : encodeURIComponent(resourceUri)) + '/providers/Microsoft.Advisor/recommendations/' + (recommendationId == null ? '' : encodeURIComponent(recommendationId)) + '/suppressions/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Enables the snoozed or dismissed attribute of a recommendation. The snoozed or dismissed attribute is referred to as a suppression. Use this API to create or update the snoozed or dismissed status of a recommendation.
		 * Put {resourceUri}/providers/Microsoft.Advisor/recommendations/{recommendationId}/suppressions/{name}
		 * @param {string} resourceUri The fully qualified Azure Resource Manager identifier of the resource to which the recommendation applies.
		 * @param {string} recommendationId The recommendation ID.
		 * @param {string} name The name of the suppression.
		 * @param {string} api_version The version of the API to be used with the client request.
		 * @param {SuppressionContract} requestBody The snoozed or dismissed attribute; for example, the snooze duration.
		 * @return {SuppressionContract} OK. Successfully created suppression.
		 */
		Suppressions_Create(resourceUri: string, recommendationId: string, name: string, api_version: string, requestBody: SuppressionContract): Observable<SuppressionContract> {
			return this.http.put<SuppressionContract>(this.baseUri + (resourceUri == null ? '' : encodeURIComponent(resourceUri)) + '/providers/Microsoft.Advisor/recommendations/' + (recommendationId == null ? '' : encodeURIComponent(recommendationId)) + '/suppressions/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enables the activation of a snoozed or dismissed recommendation. The snoozed or dismissed attribute of a recommendation is referred to as a suppression.
		 * Delete {resourceUri}/providers/Microsoft.Advisor/recommendations/{recommendationId}/suppressions/{name}
		 * @param {string} resourceUri The fully qualified Azure Resource Manager identifier of the resource to which the recommendation applies.
		 * @param {string} recommendationId The recommendation ID.
		 * @param {string} name The name of the suppression.
		 * @param {string} api_version The version of the API to be used with the client request.
		 * @return {void} 
		 */
		Suppressions_Delete(resourceUri: string, recommendationId: string, name: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (resourceUri == null ? '' : encodeURIComponent(resourceUri)) + '/providers/Microsoft.Advisor/recommendations/' + (recommendationId == null ? '' : encodeURIComponent(recommendationId)) + '/suppressions/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', { observe: 'response', responseType: 'text' });
		}
	}

	export enum Configurations_CreateInSubscriptionConfigurationName { default = 'default' }

}

