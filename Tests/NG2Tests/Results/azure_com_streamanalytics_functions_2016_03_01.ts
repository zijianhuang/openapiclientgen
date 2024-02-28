import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The binding to an Azure Machine Learning web service. */
	export interface AzureMachineLearningWebServiceFunctionBinding extends FunctionBinding {

		/** The binding properties associated with an Azure Machine learning web service. */
		properties?: AzureMachineLearningWebServiceFunctionBindingProperties;
	}

	/** The binding to an Azure Machine Learning web service. */
	export interface AzureMachineLearningWebServiceFunctionBindingFormProperties extends FunctionBindingFormProperties {
	}
	export function CreateAzureMachineLearningWebServiceFunctionBindingFormGroup() {
		return new FormGroup<AzureMachineLearningWebServiceFunctionBindingFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The binding properties associated with an Azure Machine learning web service. */
	export interface AzureMachineLearningWebServiceFunctionBindingProperties {

		/** The API key used to authenticate with Request-Response endpoint. */
		apiKey?: string | null;

		/**
		 * Number between 1 and 10000 describing maximum number of rows for every Azure ML RRS execute request. Default is 1000.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		batchSize?: number | null;

		/** The Request-Response execute endpoint of the Azure Machine Learning web service. Find out more here: https://docs.microsoft.com/en-us/azure/machine-learning/machine-learning-consume-web-services#request-response-service-rrs */
		endpoint?: string | null;

		/** The inputs for the Azure Machine Learning web service endpoint. */
		inputs?: AzureMachineLearningWebServiceInputs;

		/** A list of outputs from the Azure Machine Learning web service endpoint execution. */
		outputs?: Array<AzureMachineLearningWebServiceOutputColumn>;
	}

	/** The binding properties associated with an Azure Machine learning web service. */
	export interface AzureMachineLearningWebServiceFunctionBindingPropertiesFormProperties {

		/** The API key used to authenticate with Request-Response endpoint. */
		apiKey: FormControl<string | null | undefined>,

		/**
		 * Number between 1 and 10000 describing maximum number of rows for every Azure ML RRS execute request. Default is 1000.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		batchSize: FormControl<number | null | undefined>,

		/** The Request-Response execute endpoint of the Azure Machine Learning web service. Find out more here: https://docs.microsoft.com/en-us/azure/machine-learning/machine-learning-consume-web-services#request-response-service-rrs */
		endpoint: FormControl<string | null | undefined>,
	}
	export function CreateAzureMachineLearningWebServiceFunctionBindingPropertiesFormGroup() {
		return new FormGroup<AzureMachineLearningWebServiceFunctionBindingPropertiesFormProperties>({
			apiKey: new FormControl<string | null | undefined>(undefined),
			batchSize: new FormControl<number | null | undefined>(undefined),
			endpoint: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an output column for the Azure Machine Learning web service endpoint. */
	export interface AzureMachineLearningWebServiceOutputColumn {

		/** The (Azure Machine Learning supported) data type of the output column. A list of valid  Azure Machine Learning data types are described at https://msdn.microsoft.com/en-us/library/azure/dn905923.aspx . */
		dataType?: string | null;

		/** The name of the output column. */
		name?: string | null;
	}

	/** Describes an output column for the Azure Machine Learning web service endpoint. */
	export interface AzureMachineLearningWebServiceOutputColumnFormProperties {

		/** The (Azure Machine Learning supported) data type of the output column. A list of valid  Azure Machine Learning data types are described at https://msdn.microsoft.com/en-us/library/azure/dn905923.aspx . */
		dataType: FormControl<string | null | undefined>,

		/** The name of the output column. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAzureMachineLearningWebServiceOutputColumnFormGroup() {
		return new FormGroup<AzureMachineLearningWebServiceOutputColumnFormProperties>({
			dataType: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The binding retrieval properties associated with an Azure Machine learning web service. */
	export interface AzureMachineLearningWebServiceFunctionBindingRetrievalProperties {

		/** The Request-Response execute endpoint of the Azure Machine Learning web service. Find out more here: https://docs.microsoft.com/en-us/azure/machine-learning/machine-learning-consume-web-services#request-response-service-rrs */
		executeEndpoint?: string | null;

		/** The function type. */
		udfType?: AzureMachineLearningWebServiceFunctionBindingRetrievalPropertiesUdfType | null;
	}

	/** The binding retrieval properties associated with an Azure Machine learning web service. */
	export interface AzureMachineLearningWebServiceFunctionBindingRetrievalPropertiesFormProperties {

		/** The Request-Response execute endpoint of the Azure Machine Learning web service. Find out more here: https://docs.microsoft.com/en-us/azure/machine-learning/machine-learning-consume-web-services#request-response-service-rrs */
		executeEndpoint: FormControl<string | null | undefined>,

		/** The function type. */
		udfType: FormControl<AzureMachineLearningWebServiceFunctionBindingRetrievalPropertiesUdfType | null | undefined>,
	}
	export function CreateAzureMachineLearningWebServiceFunctionBindingRetrievalPropertiesFormGroup() {
		return new FormGroup<AzureMachineLearningWebServiceFunctionBindingRetrievalPropertiesFormProperties>({
			executeEndpoint: new FormControl<string | null | undefined>(undefined),
			udfType: new FormControl<AzureMachineLearningWebServiceFunctionBindingRetrievalPropertiesUdfType | null | undefined>(undefined),
		});

	}

	export enum AzureMachineLearningWebServiceFunctionBindingRetrievalPropertiesUdfType { Scalar = 'Scalar' }


	/** The parameters needed to retrieve the default function definition for an Azure Machine Learning web service function. */
	export interface AzureMachineLearningWebServiceFunctionRetrieveDefaultDefinitionParameters extends FunctionRetrieveDefaultDefinitionParameters {

		/** The binding retrieval properties associated with an Azure Machine learning web service. */
		bindingRetrievalProperties?: AzureMachineLearningWebServiceFunctionBindingRetrievalProperties;
	}

	/** The parameters needed to retrieve the default function definition for an Azure Machine Learning web service function. */
	export interface AzureMachineLearningWebServiceFunctionRetrieveDefaultDefinitionParametersFormProperties extends FunctionRetrieveDefaultDefinitionParametersFormProperties {
	}
	export function CreateAzureMachineLearningWebServiceFunctionRetrieveDefaultDefinitionParametersFormGroup() {
		return new FormGroup<AzureMachineLearningWebServiceFunctionRetrieveDefaultDefinitionParametersFormProperties>({
			bindingType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an input column for the Azure Machine Learning web service endpoint. */
	export interface AzureMachineLearningWebServiceInputColumn {

		/** The (Azure Machine Learning supported) data type of the input column. A list of valid  Azure Machine Learning data types are described at https://msdn.microsoft.com/en-us/library/azure/dn905923.aspx . */
		dataType?: string | null;

		/**
		 * The zero based index of the function parameter this input maps to.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		mapTo?: number | null;

		/** The name of the input column. */
		name?: string | null;
	}

	/** Describes an input column for the Azure Machine Learning web service endpoint. */
	export interface AzureMachineLearningWebServiceInputColumnFormProperties {

		/** The (Azure Machine Learning supported) data type of the input column. A list of valid  Azure Machine Learning data types are described at https://msdn.microsoft.com/en-us/library/azure/dn905923.aspx . */
		dataType: FormControl<string | null | undefined>,

		/**
		 * The zero based index of the function parameter this input maps to.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		mapTo: FormControl<number | null | undefined>,

		/** The name of the input column. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAzureMachineLearningWebServiceInputColumnFormGroup() {
		return new FormGroup<AzureMachineLearningWebServiceInputColumnFormProperties>({
			dataType: new FormControl<string | null | undefined>(undefined),
			mapTo: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The inputs for the Azure Machine Learning web service endpoint. */
	export interface AzureMachineLearningWebServiceInputs {

		/** A list of input columns for the Azure Machine Learning web service endpoint. */
		columnNames?: Array<AzureMachineLearningWebServiceInputColumn>;

		/** The name of the input. This is the name provided while authoring the endpoint. */
		name?: string | null;
	}

	/** The inputs for the Azure Machine Learning web service endpoint. */
	export interface AzureMachineLearningWebServiceInputsFormProperties {

		/** The name of the input. This is the name provided while authoring the endpoint. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAzureMachineLearningWebServiceInputsFormGroup() {
		return new FormGroup<AzureMachineLearningWebServiceInputsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A function object, containing all information associated with the named function. All functions are contained under a streaming job. */
	export interface Function extends SubResource {

		/** The properties that are associated with a function. */
		properties?: FunctionProperties;
	}

	/** A function object, containing all information associated with the named function. All functions are contained under a streaming job. */
	export interface FunctionFormProperties extends SubResourceFormProperties {
	}
	export function CreateFunctionFormGroup() {
		return new FormGroup<FunctionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The physical binding of the function. For example, in the Azure Machine Learning web service’s case, this describes the endpoint. */
	export interface FunctionBinding {

		/** Indicates the function binding type. */
		type?: string | null;
	}

	/** The physical binding of the function. For example, in the Azure Machine Learning web service’s case, this describes the endpoint. */
	export interface FunctionBindingFormProperties {

		/** Indicates the function binding type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateFunctionBindingFormGroup() {
		return new FormGroup<FunctionBindingFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes one input parameter of a function. */
	export interface FunctionInput {

		/** The (Azure Stream Analytics supported) data type of the function input parameter. A list of valid Azure Stream Analytics data types are described at https://msdn.microsoft.com/en-us/library/azure/dn835065.aspx */
		dataType?: string | null;

		/** A flag indicating if the parameter is a configuration parameter. True if this input parameter is expected to be a constant. Default is false. */
		isConfigurationParameter?: boolean | null;
	}

	/** Describes one input parameter of a function. */
	export interface FunctionInputFormProperties {

		/** The (Azure Stream Analytics supported) data type of the function input parameter. A list of valid Azure Stream Analytics data types are described at https://msdn.microsoft.com/en-us/library/azure/dn835065.aspx */
		dataType: FormControl<string | null | undefined>,

		/** A flag indicating if the parameter is a configuration parameter. True if this input parameter is expected to be a constant. Default is false. */
		isConfigurationParameter: FormControl<boolean | null | undefined>,
	}
	export function CreateFunctionInputFormGroup() {
		return new FormGroup<FunctionInputFormProperties>({
			dataType: new FormControl<string | null | undefined>(undefined),
			isConfigurationParameter: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Object containing a list of functions under a streaming job. */
	export interface FunctionListResult {

		/** The link (url) to the next page of results. */
		nextLink?: string | null;

		/** A list of functions under a streaming job. Populated by a 'List' operation. */
		value?: Array<Function>;
	}

	/** Object containing a list of functions under a streaming job. */
	export interface FunctionListResultFormProperties {

		/** The link (url) to the next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateFunctionListResultFormGroup() {
		return new FormGroup<FunctionListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the output of a function. */
	export interface FunctionOutput {

		/** The (Azure Stream Analytics supported) data type of the function output. A list of valid Azure Stream Analytics data types are described at https://msdn.microsoft.com/en-us/library/azure/dn835065.aspx */
		dataType?: string | null;
	}

	/** Describes the output of a function. */
	export interface FunctionOutputFormProperties {

		/** The (Azure Stream Analytics supported) data type of the function output. A list of valid Azure Stream Analytics data types are described at https://msdn.microsoft.com/en-us/library/azure/dn835065.aspx */
		dataType: FormControl<string | null | undefined>,
	}
	export function CreateFunctionOutputFormGroup() {
		return new FormGroup<FunctionOutputFormProperties>({
			dataType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties that are associated with a function. */
	export interface FunctionProperties {

		/** The current entity tag for the function. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency. */
		etag?: string | null;

		/** Indicates the type of function. */
		type?: string | null;
	}

	/** The properties that are associated with a function. */
	export interface FunctionPropertiesFormProperties {

		/** The current entity tag for the function. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency. */
		etag: FormControl<string | null | undefined>,

		/** Indicates the type of function. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateFunctionPropertiesFormGroup() {
		return new FormGroup<FunctionPropertiesFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters used to specify the type of function to retrieve the default definition for. */
	export interface FunctionRetrieveDefaultDefinitionParameters {

		/** Indicates the function binding type. */
		bindingType?: string | null;
	}

	/** Parameters used to specify the type of function to retrieve the default definition for. */
	export interface FunctionRetrieveDefaultDefinitionParametersFormProperties {

		/** Indicates the function binding type. */
		bindingType: FormControl<string | null | undefined>,
	}
	export function CreateFunctionRetrieveDefaultDefinitionParametersFormGroup() {
		return new FormGroup<FunctionRetrieveDefaultDefinitionParametersFormProperties>({
			bindingType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The binding to a JavaScript function. */
	export interface JavaScriptFunctionBinding extends FunctionBinding {

		/** The binding properties associated with a JavaScript function. */
		properties?: JavaScriptFunctionBindingProperties;
	}

	/** The binding to a JavaScript function. */
	export interface JavaScriptFunctionBindingFormProperties extends FunctionBindingFormProperties {
	}
	export function CreateJavaScriptFunctionBindingFormGroup() {
		return new FormGroup<JavaScriptFunctionBindingFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The binding properties associated with a JavaScript function. */
	export interface JavaScriptFunctionBindingProperties {

		/** The JavaScript code containing a single function definition. For example: 'function (x, y) { return x + y; }' */
		script?: string | null;
	}

	/** The binding properties associated with a JavaScript function. */
	export interface JavaScriptFunctionBindingPropertiesFormProperties {

		/** The JavaScript code containing a single function definition. For example: 'function (x, y) { return x + y; }' */
		script: FormControl<string | null | undefined>,
	}
	export function CreateJavaScriptFunctionBindingPropertiesFormGroup() {
		return new FormGroup<JavaScriptFunctionBindingPropertiesFormProperties>({
			script: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The binding retrieval properties associated with a JavaScript function. */
	export interface JavaScriptFunctionBindingRetrievalProperties {

		/** The JavaScript code containing a single function definition. For example: 'function (x, y) { return x + y; }'. */
		script?: string | null;

		/** The function type. */
		udfType?: AzureMachineLearningWebServiceFunctionBindingRetrievalPropertiesUdfType | null;
	}

	/** The binding retrieval properties associated with a JavaScript function. */
	export interface JavaScriptFunctionBindingRetrievalPropertiesFormProperties {

		/** The JavaScript code containing a single function definition. For example: 'function (x, y) { return x + y; }'. */
		script: FormControl<string | null | undefined>,

		/** The function type. */
		udfType: FormControl<AzureMachineLearningWebServiceFunctionBindingRetrievalPropertiesUdfType | null | undefined>,
	}
	export function CreateJavaScriptFunctionBindingRetrievalPropertiesFormGroup() {
		return new FormGroup<JavaScriptFunctionBindingRetrievalPropertiesFormProperties>({
			script: new FormControl<string | null | undefined>(undefined),
			udfType: new FormControl<AzureMachineLearningWebServiceFunctionBindingRetrievalPropertiesUdfType | null | undefined>(undefined),
		});

	}


	/** The parameters needed to retrieve the default function definition for a JavaScript function. */
	export interface JavaScriptFunctionRetrieveDefaultDefinitionParameters extends FunctionRetrieveDefaultDefinitionParameters {

		/** The binding retrieval properties associated with a JavaScript function. */
		bindingRetrievalProperties?: JavaScriptFunctionBindingRetrievalProperties;
	}

	/** The parameters needed to retrieve the default function definition for a JavaScript function. */
	export interface JavaScriptFunctionRetrieveDefaultDefinitionParametersFormProperties extends FunctionRetrieveDefaultDefinitionParametersFormProperties {
	}
	export function CreateJavaScriptFunctionRetrieveDefaultDefinitionParametersFormGroup() {
		return new FormGroup<JavaScriptFunctionRetrieveDefaultDefinitionParametersFormProperties>({
			bindingType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the configuration of the scalar function. */
	export interface ScalarFunctionConfiguration {

		/** The physical binding of the function. For example, in the Azure Machine Learning web service’s case, this describes the endpoint. */
		binding?: FunctionBinding;

		/** A list of inputs describing the parameters of the function. */
		inputs?: Array<FunctionInput>;

		/** Describes the output of a function. */
		output?: FunctionOutput;
	}

	/** Describes the configuration of the scalar function. */
	export interface ScalarFunctionConfigurationFormProperties {
	}
	export function CreateScalarFunctionConfigurationFormGroup() {
		return new FormGroup<ScalarFunctionConfigurationFormProperties>({
		});

	}


	/** The properties that are associated with a scalar function. */
	export interface ScalarFunctionProperties extends FunctionProperties {

		/** Describes the configuration of the scalar function. */
		properties?: ScalarFunctionConfiguration;
	}

	/** The properties that are associated with a scalar function. */
	export interface ScalarFunctionPropertiesFormProperties extends FunctionPropertiesFormProperties {
	}
	export function CreateScalarFunctionPropertiesFormGroup() {
		return new FormGroup<ScalarFunctionPropertiesFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The base sub-resource model definition. */
	export interface SubResource {

		/** Resource Id */
		id?: string | null;

		/** Resource name */
		name?: string | null;

		/** Resource type */
		type?: string | null;
	}

	/** The base sub-resource model definition. */
	export interface SubResourceFormProperties {

		/** Resource Id */
		id: FormControl<string | null | undefined>,

		/** Resource name */
		name: FormControl<string | null | undefined>,

		/** Resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSubResourceFormGroup() {
		return new FormGroup<SubResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The function type. */
	export enum UdfType { Scalar = 'Scalar' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the functions under the specified streaming job.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/functions
		 * @param {string} select The $select OData query parameter. This is a comma-separated list of structural properties to include in the response, or "*" to include all properties. By default, all properties are returned except diagnostics. Currently only accepts '*' as a valid value.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} jobName The name of the streaming job.
		 * @return {FunctionListResult} Successfully listed the functions under the specified streaming job.
		 */
		Functions_ListByStreamingJob(select: string | null | undefined, api_version: string, subscriptionId: string, resourceGroupName: string, jobName: string): Observable<FunctionListResult> {
			return this.http.get<FunctionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StreamAnalytics/streamingjobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/functions?select=' + (select == null ? '' : encodeURIComponent(select)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets details about the specified function.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/functions/{functionName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} jobName The name of the streaming job.
		 * @param {string} functionName The name of the function.
		 * @return {Function} Successfully retrieved the specified function.
		 */
		Functions_Get(api_version: string, subscriptionId: string, resourceGroupName: string, jobName: string, functionName: string): Observable<Function> {
			return this.http.get<Function>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StreamAnalytics/streamingjobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/functions/' + (functionName == null ? '' : encodeURIComponent(functionName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a function or replaces an already existing function under an existing streaming job.
		 * Put subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/functions/{functionName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} jobName The name of the streaming job.
		 * @param {string} functionName The name of the function.
		 * @param {Function} requestBody The definition of the function that will be used to create a new function or replace the existing one under the streaming job.
		 * @return {Function} The function was successfully created or replaced.
		 */
		Functions_CreateOrReplace(api_version: string, subscriptionId: string, resourceGroupName: string, jobName: string, functionName: string, requestBody: Function): Observable<Function> {
			return this.http.put<Function>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StreamAnalytics/streamingjobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/functions/' + (functionName == null ? '' : encodeURIComponent(functionName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a function from the streaming job.
		 * Delete subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/functions/{functionName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} jobName The name of the streaming job.
		 * @param {string} functionName The name of the function.
		 * @return {void} The function was successfully deleted.
		 */
		Functions_Delete(api_version: string, subscriptionId: string, resourceGroupName: string, jobName: string, functionName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StreamAnalytics/streamingjobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/functions/' + (functionName == null ? '' : encodeURIComponent(functionName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing function under an existing streaming job. This can be used to partially update (ie. update one or two properties) a function without affecting the rest the job or function definition.
		 * Patch subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/functions/{functionName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} jobName The name of the streaming job.
		 * @param {string} functionName The name of the function.
		 * @param {Function} requestBody A function object. The properties specified here will overwrite the corresponding properties in the existing function (ie. Those properties will be updated). Any properties that are set to null here will mean that the corresponding property in the existing function will remain the same and not change as a result of this PATCH operation.
		 * @return {Function} The function was successfully updated.
		 */
		Functions_Update(api_version: string, subscriptionId: string, resourceGroupName: string, jobName: string, functionName: string, requestBody: Function): Observable<Function> {
			return this.http.patch<Function>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StreamAnalytics/streamingjobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/functions/' + (functionName == null ? '' : encodeURIComponent(functionName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the default definition of a function based on the parameters specified.
		 * Post subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/functions/{functionName}/RetrieveDefaultDefinition
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} jobName The name of the streaming job.
		 * @param {string} functionName The name of the function.
		 * @param {FunctionRetrieveDefaultDefinitionParameters} requestBody Parameters used to specify the type of function to retrieve the default definition for.
		 * @return {Function} Successfully retrieved the function's default definition.
		 */
		Functions_RetrieveDefaultDefinition(api_version: string, subscriptionId: string, resourceGroupName: string, jobName: string, functionName: string, requestBody: FunctionRetrieveDefaultDefinitionParameters): Observable<Function> {
			return this.http.post<Function>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StreamAnalytics/streamingjobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/functions/' + (functionName == null ? '' : encodeURIComponent(functionName)) + '/RetrieveDefaultDefinition?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Tests if the information provided for a function is valid. This can range from testing the connection to the underlying web service behind the function or making sure the function code provided is syntactically correct.
		 * Post subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/functions/{functionName}/test
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} jobName The name of the streaming job.
		 * @param {string} functionName The name of the function.
		 * @param {Function} requestBody If the function specified does not already exist, this parameter must contain the full function definition intended to be tested. If the function specified already exists, this parameter can be left null to test the existing function as is or if specified, the properties specified will overwrite the corresponding properties in the existing function (exactly like a PATCH operation) and the resulting function will be tested.
		 * @return {any} The test operation completed successfully.
		 */
		Functions_Test(api_version: string, subscriptionId: string, resourceGroupName: string, jobName: string, functionName: string, requestBody: Function): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StreamAnalytics/streamingjobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/functions/' + (functionName == null ? '' : encodeURIComponent(functionName)) + '/test?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

