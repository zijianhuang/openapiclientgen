import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** Contains the output of ActivatePipeline. */
	export interface ActivatePipelineOutput {
	}


	/** Contains the parameters for ActivatePipeline. */
	export interface ActivatePipelineInput {
		pipelineId: string;
		parameterValues?: Array<ParameterValue> | null;
		startTimestamp?: Date | null;
	}


	/** A value or list of parameter values.  */
	export interface ParameterValue {
		id: string;
		stringValue: string;
	}


	/** The specified pipeline was not found. Verify that you used the correct user and account identifiers. */
	export interface PipelineNotFoundException {
		message?: string | null;
	}


	/** The specified pipeline has been deleted. */
	export interface PipelineDeletedException {
		message?: string | null;
	}


	/** An internal service error occurred. */
	export interface InternalServiceError {
		message?: string | null;
	}


	/** The request was not valid. Verify that your request was properly formatted, that the signature was generated with the correct credentials, and that you haven't exceeded any of the service limits for your account. */
	export interface InvalidRequestException {
		message?: string | null;
	}


	/** Contains the output of AddTags. */
	export interface AddTagsOutput {
	}


	/** Contains the parameters for AddTags. */
	export interface AddTagsInput {
		pipelineId: string;
		tags: Array<Tag>;
	}


	/** Tags are key/value pairs defined by a user and associated with a pipeline to control access. AWS Data Pipeline allows you to associate ten tags per pipeline. For more information, see <a href="http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-control-access.html">Controlling User Access to Pipelines</a> in the <i>AWS Data Pipeline Developer Guide</i>. */
	export interface Tag {
		key: string;
		value: string;
	}


	/** Contains the output of CreatePipeline. */
	export interface CreatePipelineOutput {
		pipelineId: string;
	}


	/** Contains the parameters for CreatePipeline. */
	export interface CreatePipelineInput {
		name: string;
		uniqueId: string;
		description?: string | null;
		tags?: Array<Tag> | null;
	}


	/** Contains the output of DeactivatePipeline. */
	export interface DeactivatePipelineOutput {
	}


	/** Contains the parameters for DeactivatePipeline. */
	export interface DeactivatePipelineInput {
		pipelineId: string;
		cancelActive?: boolean | null;
	}


	/** Contains the parameters for DeletePipeline. */
	export interface DeletePipelineInput {
		pipelineId: string;
	}


	/** Contains the output of DescribeObjects. */
	export interface DescribeObjectsOutput {
		pipelineObjects: Array<PipelineObject>;
		marker?: string | null;
		hasMoreResults?: boolean | null;
	}


	/** Contains information about a pipeline object. This can be a logical, physical, or physical attempt pipeline object. The complete set of components of a pipeline defines the pipeline. */
	export interface PipelineObject {
		id: string;
		name: string;
		fields: Array<Field>;
	}


	/** A key-value pair that describes a property of a pipeline object. The value is specified as either a string value (<code>StringValue</code>) or a reference to another object (<code>RefValue</code>) but not as both. */
	export interface Field {
		key: string;
		stringValue?: string | null;
		refValue?: string | null;
	}


	/** Contains the parameters for DescribeObjects. */
	export interface DescribeObjectsInput {
		pipelineId: string;
		objectIds: Array<string>;
		evaluateExpressions?: boolean | null;
		marker?: string | null;
	}


	/** Contains the output of DescribePipelines. */
	export interface DescribePipelinesOutput {
		pipelineDescriptionList: Array<PipelineDescription>;
	}


	/** Contains pipeline metadata. */
	export interface PipelineDescription {
		pipelineId: string;
		name: string;
		fields: Array<Field>;
		description?: string | null;
		tags?: Array<Tag> | null;
	}


	/** Contains the parameters for DescribePipelines. */
	export interface DescribePipelinesInput {
		pipelineIds: Array<string>;
	}


	/** Contains the output of EvaluateExpression. */
	export interface EvaluateExpressionOutput {
		evaluatedExpression: string;
	}


	/** Contains the parameters for EvaluateExpression. */
	export interface EvaluateExpressionInput {
		pipelineId: string;
		objectId: string;
		expression: string;
	}


	/** The specified task was not found.  */
	export interface TaskNotFoundException {
		message?: string | null;
	}


	/** Contains the output of GetPipelineDefinition. */
	export interface GetPipelineDefinitionOutput {
		pipelineObjects?: Array<PipelineObject> | null;
		parameterObjects?: Array<ParameterObject> | null;
		parameterValues?: Array<ParameterValue> | null;
	}


	/** Contains information about a parameter object. */
	export interface ParameterObject {
		id: string;
		attributes: Array<ParameterAttribute>;
	}


	/** The attributes allowed or specified with a parameter object. */
	export interface ParameterAttribute {
		key: string;
		stringValue: string;
	}


	/** Contains the parameters for GetPipelineDefinition. */
	export interface GetPipelineDefinitionInput {
		pipelineId: string;
		version?: string | null;
	}


	/** Contains the output of ListPipelines. */
	export interface ListPipelinesOutput {
		pipelineIdList: Array<PipelineIdName>;
		marker?: string | null;
		hasMoreResults?: boolean | null;
	}


	/** Contains the name and identifier of a pipeline. */
	export interface PipelineIdName {
		id?: string | null;
		name?: string | null;
	}


	/** Contains the parameters for ListPipelines. */
	export interface ListPipelinesInput {
		marker?: string | null;
	}


	/** Contains the output of PollForTask. */
	export interface PollForTaskOutput {

		/** Contains information about a pipeline task that is assigned to a task runner. */
		taskObject?: TaskObject | null;
	}


	/** Contains information about a pipeline task that is assigned to a task runner. */
	export interface TaskObject {
		taskId?: string | null;
		pipelineId?: string | null;
		attemptId?: string | null;
		objects?: PipelineObjectMap | null;
	}

	export interface PipelineObjectMap {
	}


	/** Contains the parameters for PollForTask. */
	export interface PollForTaskInput {
		workerGroup: string;
		hostname?: string | null;

		/** <p><p>Identity information for the EC2 instance that is hosting the task runner. You can get this value by calling a metadata URI from the EC2 instance. For more information, see <a href="http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AESDG-chapter-instancedata.html">Instance Metadata</a> in the <i>Amazon Elastic Compute Cloud User Guide.</i> Passing in this value proves that your task runner is running on an EC2 instance, and ensures the proper AWS Data Pipeline service charges are applied to your pipeline.</p></p> */
		instanceIdentity?: InstanceIdentity | null;
	}


	/** <p><p>Identity information for the EC2 instance that is hosting the task runner. You can get this value by calling a metadata URI from the EC2 instance. For more information, see <a href="http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AESDG-chapter-instancedata.html">Instance Metadata</a> in the <i>Amazon Elastic Compute Cloud User Guide.</i> Passing in this value proves that your task runner is running on an EC2 instance, and ensures the proper AWS Data Pipeline service charges are applied to your pipeline.</p></p> */
	export interface InstanceIdentity {
		document?: string | null;
		signature?: string | null;
	}


	/** Contains the output of PutPipelineDefinition. */
	export interface PutPipelineDefinitionOutput {
		validationErrors?: Array<ValidationError> | null;
		validationWarnings?: Array<ValidationWarning> | null;
		errored: boolean;
	}


	/** Defines a validation error. Validation errors prevent pipeline activation. The set of validation errors that can be returned are defined by AWS Data Pipeline. */
	export interface ValidationError {
		id?: string | null;
		errors?: Array<string> | null;
	}


	/** Defines a validation warning. Validation warnings do not prevent pipeline activation. The set of validation warnings that can be returned are defined by AWS Data Pipeline. */
	export interface ValidationWarning {
		id?: string | null;
		warnings?: Array<string> | null;
	}


	/** Contains the parameters for PutPipelineDefinition. */
	export interface PutPipelineDefinitionInput {
		pipelineId: string;
		pipelineObjects: Array<PipelineObject>;
		parameterObjects?: Array<ParameterObject> | null;
		parameterValues?: Array<ParameterValue> | null;
	}


	/** Contains the output of QueryObjects. */
	export interface QueryObjectsOutput {
		ids?: Array<string> | null;
		marker?: string | null;
		hasMoreResults?: boolean | null;
	}


	/** Contains the parameters for QueryObjects. */
	export interface QueryObjectsInput {
		pipelineId: string;

		/** Defines the query to run against an object. */
		query?: Query | null;
		sphere: string;
		marker?: string | null;
		limit?: number | null;
	}


	/** Defines the query to run against an object. */
	export interface Query {

		/** The list of Selectors that define queries on individual fields. */
		selectors?: Array<Selector> | null;
	}


	/** A comparision that is used to determine whether a query should return this object. */
	export interface Selector {
		fieldName?: string | null;

		/** Contains a logical operation for comparing the value of a field with a specified value. */
		operator?: Operator | null;
	}


	/** Contains a logical operation for comparing the value of a field with a specified value. */
	export interface Operator {
		type?: OperatorType | null;
		values?: Array<string> | null;
	}

	export enum OperatorType { EQ = 0, REF_EQ = 1, LE = 2, GE = 3, BETWEEN = 4 }


	/** Contains the output of RemoveTags. */
	export interface RemoveTagsOutput {
	}


	/** Contains the parameters for RemoveTags. */
	export interface RemoveTagsInput {
		pipelineId: string;
		tagKeys: Array<string>;
	}


	/** Contains the output of ReportTaskProgress. */
	export interface ReportTaskProgressOutput {
		canceled: boolean;
	}


	/** Contains the parameters for ReportTaskProgress. */
	export interface ReportTaskProgressInput {
		taskId: string;
		fields?: Array<Field> | null;
	}


	/** Contains the output of ReportTaskRunnerHeartbeat. */
	export interface ReportTaskRunnerHeartbeatOutput {
		terminate: boolean;
	}


	/** Contains the parameters for ReportTaskRunnerHeartbeat. */
	export interface ReportTaskRunnerHeartbeatInput {
		taskrunnerId: string;
		workerGroup?: string | null;
		hostname?: string | null;
	}


	/** Contains the parameters for SetStatus. */
	export interface SetStatusInput {
		pipelineId: string;
		objectIds: Array<string>;
		status: string;
	}


	/** Contains the output of SetTaskStatus. */
	export interface SetTaskStatusOutput {
	}


	/** Contains the parameters for SetTaskStatus. */
	export interface SetTaskStatusInput {
		taskId: string;
		taskStatus: SetTaskStatusInputTaskStatus;
		errorId?: string | null;
		errorMessage?: string | null;
		errorStackTrace?: string | null;
	}

	export enum SetTaskStatusInputTaskStatus { FINISHED = 0, FAILED = 1, FALSE = 2 }


	/** Contains the output of ValidatePipelineDefinition. */
	export interface ValidatePipelineDefinitionOutput {
		validationErrors?: Array<ValidationError> | null;
		validationWarnings?: Array<ValidationWarning> | null;
		errored: boolean;
	}


	/** Contains the parameters for ValidatePipelineDefinition. */
	export interface ValidatePipelineDefinitionInput {
		pipelineId: string;
		pipelineObjects: Array<PipelineObject>;
		parameterObjects?: Array<ParameterObject> | null;
		parameterValues?: Array<ParameterValue> | null;
	}

	export enum TaskStatus { FINISHED = 0, FAILED = 1, FALSE = 2 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Validates the specified pipeline and starts processing pipeline tasks. If the pipeline does not pass validation, activation fails.</p> <p>If you need to pause the pipeline to investigate an issue with a component, such as a data source or script, call <a>DeactivatePipeline</a>.</p> <p>To activate a finished pipeline, modify the end date for the pipeline and then activate it.</p>
		 * Post #X-Amz-Target=DataPipeline.ActivatePipeline
		 * @return {ActivatePipelineOutput} Success
		 */
		ActivatePipeline(requestBody: ActivatePipelineInput): Observable<ActivatePipelineOutput> {
			return this.http.post<ActivatePipelineOutput>(this.baseUri + '#X-Amz-Target=DataPipeline.ActivatePipeline', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds or modifies tags for the specified pipeline.
		 * Post #X-Amz-Target=DataPipeline.AddTags
		 * @return {AddTagsOutput} Success
		 */
		AddTags(requestBody: AddTagsInput): Observable<AddTagsOutput> {
			return this.http.post<AddTagsOutput>(this.baseUri + '#X-Amz-Target=DataPipeline.AddTags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new, empty pipeline. Use <a>PutPipelineDefinition</a> to populate the pipeline.
		 * Post #X-Amz-Target=DataPipeline.CreatePipeline
		 * @return {CreatePipelineOutput} Success
		 */
		CreatePipeline(requestBody: CreatePipelineInput): Observable<CreatePipelineOutput> {
			return this.http.post<CreatePipelineOutput>(this.baseUri + '#X-Amz-Target=DataPipeline.CreatePipeline', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deactivates the specified running pipeline. The pipeline is set to the <code>DEACTIVATING</code> state until the deactivation process completes.</p> <p>To resume a deactivated pipeline, use <a>ActivatePipeline</a>. By default, the pipeline resumes from the last completed execution. Optionally, you can specify the date and time to resume the pipeline.</p>
		 * Post #X-Amz-Target=DataPipeline.DeactivatePipeline
		 * @return {DeactivatePipelineOutput} Success
		 */
		DeactivatePipeline(requestBody: DeactivatePipelineInput): Observable<DeactivatePipelineOutput> {
			return this.http.post<DeactivatePipelineOutput>(this.baseUri + '#X-Amz-Target=DataPipeline.DeactivatePipeline', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a pipeline, its pipeline definition, and its run history. AWS Data Pipeline attempts to cancel instances associated with the pipeline that are currently being processed by task runners.</p> <p>Deleting a pipeline cannot be undone. You cannot query or restore a deleted pipeline. To temporarily pause a pipeline instead of deleting it, call <a>SetStatus</a> with the status set to <code>PAUSE</code> on individual components. Components that are paused by <a>SetStatus</a> can be resumed.</p>
		 * Post #X-Amz-Target=DataPipeline.DeletePipeline
		 * @return {void} Success
		 */
		DeletePipeline(requestBody: DeletePipelineInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=DataPipeline.DeletePipeline', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the object definitions for a set of objects associated with the pipeline. Object definitions are composed of a set of fields that define the properties of the object.
		 * Post #X-Amz-Target=DataPipeline.DescribeObjects
		 * @param {string} marker Pagination token
		 * @return {DescribeObjectsOutput} Success
		 */
		DescribeObjects(marker: string | null | undefined, requestBody: DescribeObjectsInput): Observable<DescribeObjectsOutput> {
			return this.http.post<DescribeObjectsOutput>(this.baseUri + '#X-Amz-Target=DataPipeline.DescribeObjects?marker=' + (marker == null ? '' : encodeURIComponent(marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves metadata about one or more pipelines. The information retrieved includes the name of the pipeline, the pipeline identifier, its current state, and the user account that owns the pipeline. Using account credentials, you can retrieve metadata about pipelines that you or your IAM users have created. If you are using an IAM user account, you can retrieve metadata about only those pipelines for which you have read permissions.</p> <p>To retrieve the full pipeline definition instead of metadata about the pipeline, call <a>GetPipelineDefinition</a>.</p>
		 * Post #X-Amz-Target=DataPipeline.DescribePipelines
		 * @return {DescribePipelinesOutput} Success
		 */
		DescribePipelines(requestBody: DescribePipelinesInput): Observable<DescribePipelinesOutput> {
			return this.http.post<DescribePipelinesOutput>(this.baseUri + '#X-Amz-Target=DataPipeline.DescribePipelines', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Task runners call <code>EvaluateExpression</code> to evaluate a string in the context of the specified object. For example, a task runner can evaluate SQL queries stored in Amazon S3.
		 * Post #X-Amz-Target=DataPipeline.EvaluateExpression
		 * @return {EvaluateExpressionOutput} Success
		 */
		EvaluateExpression(requestBody: EvaluateExpressionInput): Observable<EvaluateExpressionOutput> {
			return this.http.post<EvaluateExpressionOutput>(this.baseUri + '#X-Amz-Target=DataPipeline.EvaluateExpression', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the definition of the specified pipeline. You can call <code>GetPipelineDefinition</code> to retrieve the pipeline definition that you provided using <a>PutPipelineDefinition</a>.
		 * Post #X-Amz-Target=DataPipeline.GetPipelineDefinition
		 * @return {GetPipelineDefinitionOutput} Success
		 */
		GetPipelineDefinition(requestBody: GetPipelineDefinitionInput): Observable<GetPipelineDefinitionOutput> {
			return this.http.post<GetPipelineDefinitionOutput>(this.baseUri + '#X-Amz-Target=DataPipeline.GetPipelineDefinition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the pipeline identifiers for all active pipelines that you have permission to access.
		 * Post #X-Amz-Target=DataPipeline.ListPipelines
		 * @param {string} marker Pagination token
		 * @return {ListPipelinesOutput} Success
		 */
		ListPipelines(marker: string | null | undefined, requestBody: ListPipelinesInput): Observable<ListPipelinesOutput> {
			return this.http.post<ListPipelinesOutput>(this.baseUri + '#X-Amz-Target=DataPipeline.ListPipelines?marker=' + (marker == null ? '' : encodeURIComponent(marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Task runners call <code>PollForTask</code> to receive a task to perform from AWS Data Pipeline. The task runner specifies which tasks it can perform by setting a value for the <code>workerGroup</code> parameter. The task returned can come from any of the pipelines that match the <code>workerGroup</code> value passed in by the task runner and that was launched using the IAM user credentials specified by the task runner.</p> <p>If tasks are ready in the work queue, <code>PollForTask</code> returns a response immediately. If no tasks are available in the queue, <code>PollForTask</code> uses long-polling and holds on to a poll connection for up to a 90 seconds, during which time the first newly scheduled task is handed to the task runner. To accomodate this, set the socket timeout in your task runner to 90 seconds. The task runner should not call <code>PollForTask</code> again on the same <code>workerGroup</code> until it receives a response, and this can take up to 90 seconds. </p>
		 * Post #X-Amz-Target=DataPipeline.PollForTask
		 * @return {PollForTaskOutput} Success
		 */
		PollForTask(requestBody: PollForTaskInput): Observable<PollForTaskOutput> {
			return this.http.post<PollForTaskOutput>(this.baseUri + '#X-Amz-Target=DataPipeline.PollForTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds tasks, schedules, and preconditions to the specified pipeline. You can use <code>PutPipelineDefinition</code> to populate a new pipeline.</p> <p> <code>PutPipelineDefinition</code> also validates the configuration as it adds it to the pipeline. Changes to the pipeline are saved unless one of the following three validation errors exists in the pipeline. </p> <ol> <li>An object is missing a name or identifier field.</li> <li>A string or reference field is empty.</li> <li>The number of objects in the pipeline exceeds the maximum allowed objects.</li> <li>The pipeline is in a FINISHED state.</li> </ol> <p> Pipeline object definitions are passed to the <code>PutPipelineDefinition</code> action and returned by the <a>GetPipelineDefinition</a> action. </p>
		 * Post #X-Amz-Target=DataPipeline.PutPipelineDefinition
		 * @return {PutPipelineDefinitionOutput} Success
		 */
		PutPipelineDefinition(requestBody: PutPipelineDefinitionInput): Observable<PutPipelineDefinitionOutput> {
			return this.http.post<PutPipelineDefinitionOutput>(this.baseUri + '#X-Amz-Target=DataPipeline.PutPipelineDefinition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Queries the specified pipeline for the names of objects that match the specified set of conditions.
		 * Post #X-Amz-Target=DataPipeline.QueryObjects
		 * @param {string} limit Pagination limit
		 * @param {string} marker Pagination token
		 * @return {QueryObjectsOutput} Success
		 */
		QueryObjects(limit: string | null | undefined, marker: string | null | undefined, requestBody: QueryObjectsInput): Observable<QueryObjectsOutput> {
			return this.http.post<QueryObjectsOutput>(this.baseUri + '#X-Amz-Target=DataPipeline.QueryObjects?limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes existing tags from the specified pipeline.
		 * Post #X-Amz-Target=DataPipeline.RemoveTags
		 * @return {RemoveTagsOutput} Success
		 */
		RemoveTags(requestBody: RemoveTagsInput): Observable<RemoveTagsOutput> {
			return this.http.post<RemoveTagsOutput>(this.baseUri + '#X-Amz-Target=DataPipeline.RemoveTags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Task runners call <code>ReportTaskProgress</code> when assigned a task to acknowledge that it has the task. If the web service does not receive this acknowledgement within 2 minutes, it assigns the task in a subsequent <a>PollForTask</a> call. After this initial acknowledgement, the task runner only needs to report progress every 15 minutes to maintain its ownership of the task. You can change this reporting time from 15 minutes by specifying a <code>reportProgressTimeout</code> field in your pipeline.</p> <p>If a task runner does not report its status after 5 minutes, AWS Data Pipeline assumes that the task runner is unable to process the task and reassigns the task in a subsequent response to <a>PollForTask</a>. Task runners should call <code>ReportTaskProgress</code> every 60 seconds.</p>
		 * Post #X-Amz-Target=DataPipeline.ReportTaskProgress
		 * @return {ReportTaskProgressOutput} Success
		 */
		ReportTaskProgress(requestBody: ReportTaskProgressInput): Observable<ReportTaskProgressOutput> {
			return this.http.post<ReportTaskProgressOutput>(this.baseUri + '#X-Amz-Target=DataPipeline.ReportTaskProgress', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Task runners call <code>ReportTaskRunnerHeartbeat</code> every 15 minutes to indicate that they are operational. If the AWS Data Pipeline Task Runner is launched on a resource managed by AWS Data Pipeline, the web service can use this call to detect when the task runner application has failed and restart a new instance.
		 * Post #X-Amz-Target=DataPipeline.ReportTaskRunnerHeartbeat
		 * @return {ReportTaskRunnerHeartbeatOutput} Success
		 */
		ReportTaskRunnerHeartbeat(requestBody: ReportTaskRunnerHeartbeatInput): Observable<ReportTaskRunnerHeartbeatOutput> {
			return this.http.post<ReportTaskRunnerHeartbeatOutput>(this.baseUri + '#X-Amz-Target=DataPipeline.ReportTaskRunnerHeartbeat', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Requests that the status of the specified physical or logical pipeline objects be updated in the specified pipeline. This update might not occur immediately, but is eventually consistent. The status that can be set depends on the type of object (for example, DataNode or Activity). You cannot perform this operation on <code>FINISHED</code> pipelines and attempting to do so returns <code>InvalidRequestException</code>.
		 * Post #X-Amz-Target=DataPipeline.SetStatus
		 * @return {void} Success
		 */
		SetStatus(requestBody: SetStatusInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=DataPipeline.SetStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Task runners call <code>SetTaskStatus</code> to notify AWS Data Pipeline that a task is completed and provide information about the final status. A task runner makes this call regardless of whether the task was sucessful. A task runner does not need to call <code>SetTaskStatus</code> for tasks that are canceled by the web service during a call to <a>ReportTaskProgress</a>.
		 * Post #X-Amz-Target=DataPipeline.SetTaskStatus
		 * @return {SetTaskStatusOutput} Success
		 */
		SetTaskStatus(requestBody: SetTaskStatusInput): Observable<SetTaskStatusOutput> {
			return this.http.post<SetTaskStatusOutput>(this.baseUri + '#X-Amz-Target=DataPipeline.SetTaskStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Validates the specified pipeline definition to ensure that it is well formed and can be run without error.
		 * Post #X-Amz-Target=DataPipeline.ValidatePipelineDefinition
		 * @return {ValidatePipelineDefinitionOutput} Success
		 */
		ValidatePipelineDefinition(requestBody: ValidatePipelineDefinitionInput): Observable<ValidatePipelineDefinitionOutput> {
			return this.http.post<ValidatePipelineDefinitionOutput>(this.baseUri + '#X-Amz-Target=DataPipeline.ValidatePipelineDefinition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum ActivatePipelineX_Amz_Target { DataPipeline_ActivatePipeline = 0 }

	export enum AddTagsX_Amz_Target { DataPipeline_AddTags = 0 }

	export enum CreatePipelineX_Amz_Target { DataPipeline_CreatePipeline = 0 }

	export enum DeactivatePipelineX_Amz_Target { DataPipeline_DeactivatePipeline = 0 }

	export enum DeletePipelineX_Amz_Target { DataPipeline_DeletePipeline = 0 }

	export enum DescribeObjectsX_Amz_Target { DataPipeline_DescribeObjects = 0 }

	export enum DescribePipelinesX_Amz_Target { DataPipeline_DescribePipelines = 0 }

	export enum EvaluateExpressionX_Amz_Target { DataPipeline_EvaluateExpression = 0 }

	export enum GetPipelineDefinitionX_Amz_Target { DataPipeline_GetPipelineDefinition = 0 }

	export enum ListPipelinesX_Amz_Target { DataPipeline_ListPipelines = 0 }

	export enum PollForTaskX_Amz_Target { DataPipeline_PollForTask = 0 }

	export enum PutPipelineDefinitionX_Amz_Target { DataPipeline_PutPipelineDefinition = 0 }

	export enum QueryObjectsX_Amz_Target { DataPipeline_QueryObjects = 0 }

	export enum RemoveTagsX_Amz_Target { DataPipeline_RemoveTags = 0 }

	export enum ReportTaskProgressX_Amz_Target { DataPipeline_ReportTaskProgress = 0 }

	export enum ReportTaskRunnerHeartbeatX_Amz_Target { DataPipeline_ReportTaskRunnerHeartbeat = 0 }

	export enum SetStatusX_Amz_Target { DataPipeline_SetStatus = 0 }

	export enum SetTaskStatusX_Amz_Target { DataPipeline_SetTaskStatus = 0 }

	export enum ValidatePipelineDefinitionX_Amz_Target { DataPipeline_ValidatePipelineDefinition = 0 }

}

