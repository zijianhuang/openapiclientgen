import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Contains the output of ActivatePipeline. */
	export interface ActivatePipelineOutput {
	}

	/** Contains the output of ActivatePipeline. */
	export interface ActivatePipelineOutputFormProperties {
	}
	export function CreateActivatePipelineOutputFormGroup() {
		return new FormGroup<ActivatePipelineOutputFormProperties>({
		});

	}


	/** Contains the parameters for ActivatePipeline. */
	export interface ActivatePipelineInput {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		pipelineId: string;
		parameterValues?: Array<ParameterValue>;
		startTimestamp?: Date | null;
	}

	/** Contains the parameters for ActivatePipeline. */
	export interface ActivatePipelineInputFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		pipelineId: FormControl<string | null | undefined>,
		startTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateActivatePipelineInputFormGroup() {
		return new FormGroup<ActivatePipelineInputFormProperties>({
			pipelineId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
			startTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** A value or list of parameter values.  */
	export interface ParameterValue {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		id: string;

		/**
		 * Required
		 * Max length: 10240
		 * Min length: 0
		 */
		stringValue: string;
	}

	/** A value or list of parameter values.  */
	export interface ParameterValueFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 10240
		 * Min length: 0
		 */
		stringValue: FormControl<string | null | undefined>,
	}
	export function CreateParameterValueFormGroup() {
		return new FormGroup<ParameterValueFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			stringValue: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(10240), Validators.minLength(0)]),
		});

	}


	/** The specified pipeline was not found. Verify that you used the correct user and account identifiers. */
	export interface PipelineNotFoundException {
		message?: string | null;
	}

	/** The specified pipeline was not found. Verify that you used the correct user and account identifiers. */
	export interface PipelineNotFoundExceptionFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreatePipelineNotFoundExceptionFormGroup() {
		return new FormGroup<PipelineNotFoundExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The specified pipeline has been deleted. */
	export interface PipelineDeletedException {
		message?: string | null;
	}

	/** The specified pipeline has been deleted. */
	export interface PipelineDeletedExceptionFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreatePipelineDeletedExceptionFormGroup() {
		return new FormGroup<PipelineDeletedExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An internal service error occurred. */
	export interface InternalServiceError {
		message?: string | null;
	}

	/** An internal service error occurred. */
	export interface InternalServiceErrorFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreateInternalServiceErrorFormGroup() {
		return new FormGroup<InternalServiceErrorFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request was not valid. Verify that your request was properly formatted, that the signature was generated with the correct credentials, and that you haven't exceeded any of the service limits for your account. */
	export interface InvalidRequestException {
		message?: string | null;
	}

	/** The request was not valid. Verify that your request was properly formatted, that the signature was generated with the correct credentials, and that you haven't exceeded any of the service limits for your account. */
	export interface InvalidRequestExceptionFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreateInvalidRequestExceptionFormGroup() {
		return new FormGroup<InvalidRequestExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the output of AddTags. */
	export interface AddTagsOutput {
	}

	/** Contains the output of AddTags. */
	export interface AddTagsOutputFormProperties {
	}
	export function CreateAddTagsOutputFormGroup() {
		return new FormGroup<AddTagsOutputFormProperties>({
		});

	}


	/** Contains the parameters for AddTags. */
	export interface AddTagsInput {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		pipelineId: string;

		/**
		 * Required
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		tags: Array<Tag>;
	}

	/** Contains the parameters for AddTags. */
	export interface AddTagsInputFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		pipelineId: FormControl<string | null | undefined>,
	}
	export function CreateAddTagsInputFormGroup() {
		return new FormGroup<AddTagsInputFormProperties>({
			pipelineId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
		});

	}


	/** Tags are key/value pairs defined by a user and associated with a pipeline to control access. AWS Data Pipeline allows you to associate ten tags per pipeline. For more information, see <a href="http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-control-access.html">Controlling User Access to Pipelines</a> in the <i>AWS Data Pipeline Developer Guide</i>. */
	export interface Tag {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		key: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		value: string;
	}

	/** Tags are key/value pairs defined by a user and associated with a pipeline to control access. AWS Data Pipeline allows you to associate ten tags per pipeline. For more information, see <a href="http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-control-access.html">Controlling User Access to Pipelines</a> in the <i>AWS Data Pipeline Developer Guide</i>. */
	export interface TagFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		key: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(0)]),
		});

	}


	/** Contains the output of CreatePipeline. */
	export interface CreatePipelineOutput {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		pipelineId: string;
	}

	/** Contains the output of CreatePipeline. */
	export interface CreatePipelineOutputFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		pipelineId: FormControl<string | null | undefined>,
	}
	export function CreateCreatePipelineOutputFormGroup() {
		return new FormGroup<CreatePipelineOutputFormProperties>({
			pipelineId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
		});

	}


	/** Contains the parameters for CreatePipeline. */
	export interface CreatePipelineInput {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		name: string;

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		uniqueId: string;

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		tags?: Array<Tag>;
	}

	/** Contains the parameters for CreatePipeline. */
	export interface CreatePipelineInputFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		uniqueId: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateCreatePipelineInputFormGroup() {
		return new FormGroup<CreatePipelineInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
			uniqueId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(0)]),
		});

	}


	/** Contains the output of DeactivatePipeline. */
	export interface DeactivatePipelineOutput {
	}

	/** Contains the output of DeactivatePipeline. */
	export interface DeactivatePipelineOutputFormProperties {
	}
	export function CreateDeactivatePipelineOutputFormGroup() {
		return new FormGroup<DeactivatePipelineOutputFormProperties>({
		});

	}


	/** Contains the parameters for DeactivatePipeline. */
	export interface DeactivatePipelineInput {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		pipelineId: string;
		cancelActive?: boolean | null;
	}

	/** Contains the parameters for DeactivatePipeline. */
	export interface DeactivatePipelineInputFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		pipelineId: FormControl<string | null | undefined>,
		cancelActive: FormControl<boolean | null | undefined>,
	}
	export function CreateDeactivatePipelineInputFormGroup() {
		return new FormGroup<DeactivatePipelineInputFormProperties>({
			pipelineId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
			cancelActive: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains the parameters for DeletePipeline. */
	export interface DeletePipelineInput {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		pipelineId: string;
	}

	/** Contains the parameters for DeletePipeline. */
	export interface DeletePipelineInputFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		pipelineId: FormControl<string | null | undefined>,
	}
	export function CreateDeletePipelineInputFormGroup() {
		return new FormGroup<DeletePipelineInputFormProperties>({
			pipelineId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
		});

	}


	/** Contains the output of DescribeObjects. */
	export interface DescribeObjectsOutput {

		/** Required */
		pipelineObjects: Array<PipelineObject>;

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		marker?: string | null;
		hasMoreResults?: boolean | null;
	}

	/** Contains the output of DescribeObjects. */
	export interface DescribeObjectsOutputFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		marker: FormControl<string | null | undefined>,
		hasMoreResults: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeObjectsOutputFormGroup() {
		return new FormGroup<DescribeObjectsOutputFormProperties>({
			marker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(0)]),
			hasMoreResults: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains information about a pipeline object. This can be a logical, physical, or physical attempt pipeline object. The complete set of components of a pipeline defines the pipeline. */
	export interface PipelineObject {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		id: string;

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		name: string;

		/** Required */
		fields: Array<Field>;
	}

	/** Contains information about a pipeline object. This can be a logical, physical, or physical attempt pipeline object. The complete set of components of a pipeline defines the pipeline. */
	export interface PipelineObjectFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePipelineObjectFormGroup() {
		return new FormGroup<PipelineObjectFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
		});

	}


	/** A key-value pair that describes a property of a pipeline object. The value is specified as either a string value (<code>StringValue</code>) or a reference to another object (<code>RefValue</code>) but not as both. */
	export interface Field {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		key: string;

		/**
		 * Max length: 10240
		 * Min length: 0
		 */
		stringValue?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		refValue?: string | null;
	}

	/** A key-value pair that describes a property of a pipeline object. The value is specified as either a string value (<code>StringValue</code>) or a reference to another object (<code>RefValue</code>) but not as both. */
	export interface FieldFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		key: FormControl<string | null | undefined>,

		/**
		 * Max length: 10240
		 * Min length: 0
		 */
		stringValue: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		refValue: FormControl<string | null | undefined>,
	}
	export function CreateFieldFormGroup() {
		return new FormGroup<FieldFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			stringValue: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(10240), Validators.minLength(0)]),
			refValue: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1)]),
		});

	}


	/** Contains the parameters for DescribeObjects. */
	export interface DescribeObjectsInput {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		pipelineId: string;

		/** Required */
		objectIds: Array<string>;
		evaluateExpressions?: boolean | null;

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		marker?: string | null;
	}

	/** Contains the parameters for DescribeObjects. */
	export interface DescribeObjectsInputFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		pipelineId: FormControl<string | null | undefined>,
		evaluateExpressions: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeObjectsInputFormGroup() {
		return new FormGroup<DescribeObjectsInputFormProperties>({
			pipelineId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
			evaluateExpressions: new FormControl<boolean | null | undefined>(undefined),
			marker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(0)]),
		});

	}


	/** Contains the output of DescribePipelines. */
	export interface DescribePipelinesOutput {

		/** Required */
		pipelineDescriptionList: Array<PipelineDescription>;
	}

	/** Contains the output of DescribePipelines. */
	export interface DescribePipelinesOutputFormProperties {
	}
	export function CreateDescribePipelinesOutputFormGroup() {
		return new FormGroup<DescribePipelinesOutputFormProperties>({
		});

	}


	/** Contains pipeline metadata. */
	export interface PipelineDescription {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		pipelineId: string;

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		name: string;

		/** Required */
		fields: Array<Field>;

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		tags?: Array<Tag>;
	}

	/** Contains pipeline metadata. */
	export interface PipelineDescriptionFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		pipelineId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,
	}
	export function CreatePipelineDescriptionFormGroup() {
		return new FormGroup<PipelineDescriptionFormProperties>({
			pipelineId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(0)]),
		});

	}


	/** Contains the parameters for DescribePipelines. */
	export interface DescribePipelinesInput {

		/** Required */
		pipelineIds: Array<string>;
	}

	/** Contains the parameters for DescribePipelines. */
	export interface DescribePipelinesInputFormProperties {
	}
	export function CreateDescribePipelinesInputFormGroup() {
		return new FormGroup<DescribePipelinesInputFormProperties>({
		});

	}


	/** Contains the output of EvaluateExpression. */
	export interface EvaluateExpressionOutput {

		/**
		 * Required
		 * Max length: 20971520
		 * Min length: 0
		 */
		evaluatedExpression: string;
	}

	/** Contains the output of EvaluateExpression. */
	export interface EvaluateExpressionOutputFormProperties {

		/**
		 * Required
		 * Max length: 20971520
		 * Min length: 0
		 */
		evaluatedExpression: FormControl<string | null | undefined>,
	}
	export function CreateEvaluateExpressionOutputFormGroup() {
		return new FormGroup<EvaluateExpressionOutputFormProperties>({
			evaluatedExpression: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(20971520), Validators.minLength(0)]),
		});

	}


	/** Contains the parameters for EvaluateExpression. */
	export interface EvaluateExpressionInput {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		pipelineId: string;

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		objectId: string;

		/**
		 * Required
		 * Max length: 20971520
		 * Min length: 0
		 */
		expression: string;
	}

	/** Contains the parameters for EvaluateExpression. */
	export interface EvaluateExpressionInputFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		pipelineId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		objectId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 20971520
		 * Min length: 0
		 */
		expression: FormControl<string | null | undefined>,
	}
	export function CreateEvaluateExpressionInputFormGroup() {
		return new FormGroup<EvaluateExpressionInputFormProperties>({
			pipelineId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
			objectId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
			expression: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(20971520), Validators.minLength(0)]),
		});

	}


	/** The specified task was not found.  */
	export interface TaskNotFoundException {
		message?: string | null;
	}

	/** The specified task was not found.  */
	export interface TaskNotFoundExceptionFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreateTaskNotFoundExceptionFormGroup() {
		return new FormGroup<TaskNotFoundExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the output of GetPipelineDefinition. */
	export interface GetPipelineDefinitionOutput {
		pipelineObjects?: Array<PipelineObject>;
		parameterObjects?: Array<ParameterObject>;
		parameterValues?: Array<ParameterValue>;
	}

	/** Contains the output of GetPipelineDefinition. */
	export interface GetPipelineDefinitionOutputFormProperties {
	}
	export function CreateGetPipelineDefinitionOutputFormGroup() {
		return new FormGroup<GetPipelineDefinitionOutputFormProperties>({
		});

	}


	/** Contains information about a parameter object. */
	export interface ParameterObject {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		id: string;

		/** Required */
		attributes: Array<ParameterAttribute>;
	}

	/** Contains information about a parameter object. */
	export interface ParameterObjectFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateParameterObjectFormGroup() {
		return new FormGroup<ParameterObjectFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
		});

	}


	/** The attributes allowed or specified with a parameter object. */
	export interface ParameterAttribute {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		key: string;

		/**
		 * Required
		 * Max length: 10240
		 * Min length: 0
		 */
		stringValue: string;
	}

	/** The attributes allowed or specified with a parameter object. */
	export interface ParameterAttributeFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		key: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 10240
		 * Min length: 0
		 */
		stringValue: FormControl<string | null | undefined>,
	}
	export function CreateParameterAttributeFormGroup() {
		return new FormGroup<ParameterAttributeFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			stringValue: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(10240), Validators.minLength(0)]),
		});

	}


	/** Contains the parameters for GetPipelineDefinition. */
	export interface GetPipelineDefinitionInput {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		pipelineId: string;

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		version?: string | null;
	}

	/** Contains the parameters for GetPipelineDefinition. */
	export interface GetPipelineDefinitionInputFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		pipelineId: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGetPipelineDefinitionInputFormGroup() {
		return new FormGroup<GetPipelineDefinitionInputFormProperties>({
			pipelineId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(0)]),
		});

	}


	/** Contains the output of ListPipelines. */
	export interface ListPipelinesOutput {

		/** Required */
		pipelineIdList: Array<PipelineIdName>;

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		marker?: string | null;
		hasMoreResults?: boolean | null;
	}

	/** Contains the output of ListPipelines. */
	export interface ListPipelinesOutputFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		marker: FormControl<string | null | undefined>,
		hasMoreResults: FormControl<boolean | null | undefined>,
	}
	export function CreateListPipelinesOutputFormGroup() {
		return new FormGroup<ListPipelinesOutputFormProperties>({
			marker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(0)]),
			hasMoreResults: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains the name and identifier of a pipeline. */
	export interface PipelineIdName {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		id?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		name?: string | null;
	}

	/** Contains the name and identifier of a pipeline. */
	export interface PipelineIdNameFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePipelineIdNameFormGroup() {
		return new FormGroup<PipelineIdNameFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
		});

	}


	/** Contains the parameters for ListPipelines. */
	export interface ListPipelinesInput {

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		marker?: string | null;
	}

	/** Contains the parameters for ListPipelines. */
	export interface ListPipelinesInputFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		marker: FormControl<string | null | undefined>,
	}
	export function CreateListPipelinesInputFormGroup() {
		return new FormGroup<ListPipelinesInputFormProperties>({
			marker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(0)]),
		});

	}


	/** Contains the output of PollForTask. */
	export interface PollForTaskOutput {

		/** Contains information about a pipeline task that is assigned to a task runner. */
		taskObject?: TaskObject;
	}

	/** Contains the output of PollForTask. */
	export interface PollForTaskOutputFormProperties {
	}
	export function CreatePollForTaskOutputFormGroup() {
		return new FormGroup<PollForTaskOutputFormProperties>({
		});

	}


	/** Contains information about a pipeline task that is assigned to a task runner. */
	export interface TaskObject {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		taskId?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		pipelineId?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		attemptId?: string | null;
		objects?: PipelineObjectMap;
	}

	/** Contains information about a pipeline task that is assigned to a task runner. */
	export interface TaskObjectFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		taskId: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		pipelineId: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		attemptId: FormControl<string | null | undefined>,
	}
	export function CreateTaskObjectFormGroup() {
		return new FormGroup<TaskObjectFormProperties>({
			taskId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
			pipelineId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
			attemptId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
		});

	}

	export interface PipelineObjectMap {
	}
	export interface PipelineObjectMapFormProperties {
	}
	export function CreatePipelineObjectMapFormGroup() {
		return new FormGroup<PipelineObjectMapFormProperties>({
		});

	}


	/** Contains the parameters for PollForTask. */
	export interface PollForTaskInput {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 0
		 */
		workerGroup: string;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		hostname?: string | null;

		/** <p><p>Identity information for the EC2 instance that is hosting the task runner. You can get this value by calling a metadata URI from the EC2 instance. For more information, see <a href="http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AESDG-chapter-instancedata.html">Instance Metadata</a> in the <i>Amazon Elastic Compute Cloud User Guide.</i> Passing in this value proves that your task runner is running on an EC2 instance, and ensures the proper AWS Data Pipeline service charges are applied to your pipeline.</p></p> */
		instanceIdentity?: InstanceIdentity;
	}

	/** Contains the parameters for PollForTask. */
	export interface PollForTaskInputFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 0
		 */
		workerGroup: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		hostname: FormControl<string | null | undefined>,
	}
	export function CreatePollForTaskInputFormGroup() {
		return new FormGroup<PollForTaskInputFormProperties>({
			workerGroup: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(0)]),
			hostname: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
		});

	}


	/** <p><p>Identity information for the EC2 instance that is hosting the task runner. You can get this value by calling a metadata URI from the EC2 instance. For more information, see <a href="http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AESDG-chapter-instancedata.html">Instance Metadata</a> in the <i>Amazon Elastic Compute Cloud User Guide.</i> Passing in this value proves that your task runner is running on an EC2 instance, and ensures the proper AWS Data Pipeline service charges are applied to your pipeline.</p></p> */
	export interface InstanceIdentity {

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		document?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		signature?: string | null;
	}

	/** <p><p>Identity information for the EC2 instance that is hosting the task runner. You can get this value by calling a metadata URI from the EC2 instance. For more information, see <a href="http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AESDG-chapter-instancedata.html">Instance Metadata</a> in the <i>Amazon Elastic Compute Cloud User Guide.</i> Passing in this value proves that your task runner is running on an EC2 instance, and ensures the proper AWS Data Pipeline service charges are applied to your pipeline.</p></p> */
	export interface InstanceIdentityFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		document: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		signature: FormControl<string | null | undefined>,
	}
	export function CreateInstanceIdentityFormGroup() {
		return new FormGroup<InstanceIdentityFormProperties>({
			document: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(0)]),
			signature: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(0)]),
		});

	}


	/** Contains the output of PutPipelineDefinition. */
	export interface PutPipelineDefinitionOutput {
		validationErrors?: Array<ValidationError>;
		validationWarnings?: Array<ValidationWarning>;

		/** Required */
		errored: boolean;
	}

	/** Contains the output of PutPipelineDefinition. */
	export interface PutPipelineDefinitionOutputFormProperties {

		/** Required */
		errored: FormControl<boolean | null | undefined>,
	}
	export function CreatePutPipelineDefinitionOutputFormGroup() {
		return new FormGroup<PutPipelineDefinitionOutputFormProperties>({
			errored: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines a validation error. Validation errors prevent pipeline activation. The set of validation errors that can be returned are defined by AWS Data Pipeline. */
	export interface ValidationError {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		id?: string | null;
		errors?: Array<string>;
	}

	/** Defines a validation error. Validation errors prevent pipeline activation. The set of validation errors that can be returned are defined by AWS Data Pipeline. */
	export interface ValidationErrorFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateValidationErrorFormGroup() {
		return new FormGroup<ValidationErrorFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
		});

	}


	/** Defines a validation warning. Validation warnings do not prevent pipeline activation. The set of validation warnings that can be returned are defined by AWS Data Pipeline. */
	export interface ValidationWarning {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		id?: string | null;
		warnings?: Array<string>;
	}

	/** Defines a validation warning. Validation warnings do not prevent pipeline activation. The set of validation warnings that can be returned are defined by AWS Data Pipeline. */
	export interface ValidationWarningFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateValidationWarningFormGroup() {
		return new FormGroup<ValidationWarningFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
		});

	}


	/** Contains the parameters for PutPipelineDefinition. */
	export interface PutPipelineDefinitionInput {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		pipelineId: string;

		/** Required */
		pipelineObjects: Array<PipelineObject>;
		parameterObjects?: Array<ParameterObject>;
		parameterValues?: Array<ParameterValue>;
	}

	/** Contains the parameters for PutPipelineDefinition. */
	export interface PutPipelineDefinitionInputFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		pipelineId: FormControl<string | null | undefined>,
	}
	export function CreatePutPipelineDefinitionInputFormGroup() {
		return new FormGroup<PutPipelineDefinitionInputFormProperties>({
			pipelineId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
		});

	}


	/** Contains the output of QueryObjects. */
	export interface QueryObjectsOutput {
		ids?: Array<string>;

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		marker?: string | null;
		hasMoreResults?: boolean | null;
	}

	/** Contains the output of QueryObjects. */
	export interface QueryObjectsOutputFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		marker: FormControl<string | null | undefined>,
		hasMoreResults: FormControl<boolean | null | undefined>,
	}
	export function CreateQueryObjectsOutputFormGroup() {
		return new FormGroup<QueryObjectsOutputFormProperties>({
			marker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(0)]),
			hasMoreResults: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains the parameters for QueryObjects. */
	export interface QueryObjectsInput {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		pipelineId: string;

		/** Defines the query to run against an object. */
		query?: Query;

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 0
		 */
		sphere: string;

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		marker?: string | null;
		limit?: number | null;
	}

	/** Contains the parameters for QueryObjects. */
	export interface QueryObjectsInputFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		pipelineId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 0
		 */
		sphere: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		marker: FormControl<string | null | undefined>,
		limit: FormControl<number | null | undefined>,
	}
	export function CreateQueryObjectsInputFormGroup() {
		return new FormGroup<QueryObjectsInputFormProperties>({
			pipelineId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
			sphere: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(0)]),
			marker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(0)]),
			limit: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Defines the query to run against an object. */
	export interface Query {

		/** The list of Selectors that define queries on individual fields. */
		selectors?: Array<Selector>;
	}

	/** Defines the query to run against an object. */
	export interface QueryFormProperties {
	}
	export function CreateQueryFormGroup() {
		return new FormGroup<QueryFormProperties>({
		});

	}


	/** A comparision that is used to determine whether a query should return this object. */
	export interface Selector {

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		fieldName?: string | null;

		/** Contains a logical operation for comparing the value of a field with a specified value. */
		operator?: Operator;
	}

	/** A comparision that is used to determine whether a query should return this object. */
	export interface SelectorFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		fieldName: FormControl<string | null | undefined>,
	}
	export function CreateSelectorFormGroup() {
		return new FormGroup<SelectorFormProperties>({
			fieldName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(0)]),
		});

	}


	/** Contains a logical operation for comparing the value of a field with a specified value. */
	export interface Operator {
		type?: OperatorType | null;
		values?: Array<string>;
	}

	/** Contains a logical operation for comparing the value of a field with a specified value. */
	export interface OperatorFormProperties {
		type: FormControl<OperatorType | null | undefined>,
	}
	export function CreateOperatorFormGroup() {
		return new FormGroup<OperatorFormProperties>({
			type: new FormControl<OperatorType | null | undefined>(undefined),
		});

	}

	export enum OperatorType { EQ = 0, REF_EQ = 1, LE = 2, GE = 3, BETWEEN = 4 }


	/** Contains the output of RemoveTags. */
	export interface RemoveTagsOutput {
	}

	/** Contains the output of RemoveTags. */
	export interface RemoveTagsOutputFormProperties {
	}
	export function CreateRemoveTagsOutputFormGroup() {
		return new FormGroup<RemoveTagsOutputFormProperties>({
		});

	}


	/** Contains the parameters for RemoveTags. */
	export interface RemoveTagsInput {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		pipelineId: string;

		/** Required */
		tagKeys: Array<string>;
	}

	/** Contains the parameters for RemoveTags. */
	export interface RemoveTagsInputFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		pipelineId: FormControl<string | null | undefined>,
	}
	export function CreateRemoveTagsInputFormGroup() {
		return new FormGroup<RemoveTagsInputFormProperties>({
			pipelineId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
		});

	}


	/** Contains the output of ReportTaskProgress. */
	export interface ReportTaskProgressOutput {

		/** Required */
		canceled: boolean;
	}

	/** Contains the output of ReportTaskProgress. */
	export interface ReportTaskProgressOutputFormProperties {

		/** Required */
		canceled: FormControl<boolean | null | undefined>,
	}
	export function CreateReportTaskProgressOutputFormGroup() {
		return new FormGroup<ReportTaskProgressOutputFormProperties>({
			canceled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the parameters for ReportTaskProgress. */
	export interface ReportTaskProgressInput {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		taskId: string;
		fields?: Array<Field>;
	}

	/** Contains the parameters for ReportTaskProgress. */
	export interface ReportTaskProgressInputFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		taskId: FormControl<string | null | undefined>,
	}
	export function CreateReportTaskProgressInputFormGroup() {
		return new FormGroup<ReportTaskProgressInputFormProperties>({
			taskId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}


	/** Contains the output of ReportTaskRunnerHeartbeat. */
	export interface ReportTaskRunnerHeartbeatOutput {

		/** Required */
		terminate: boolean;
	}

	/** Contains the output of ReportTaskRunnerHeartbeat. */
	export interface ReportTaskRunnerHeartbeatOutputFormProperties {

		/** Required */
		terminate: FormControl<boolean | null | undefined>,
	}
	export function CreateReportTaskRunnerHeartbeatOutputFormGroup() {
		return new FormGroup<ReportTaskRunnerHeartbeatOutputFormProperties>({
			terminate: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the parameters for ReportTaskRunnerHeartbeat. */
	export interface ReportTaskRunnerHeartbeatInput {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		taskrunnerId: string;

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		workerGroup?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		hostname?: string | null;
	}

	/** Contains the parameters for ReportTaskRunnerHeartbeat. */
	export interface ReportTaskRunnerHeartbeatInputFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		taskrunnerId: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		workerGroup: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		hostname: FormControl<string | null | undefined>,
	}
	export function CreateReportTaskRunnerHeartbeatInputFormGroup() {
		return new FormGroup<ReportTaskRunnerHeartbeatInputFormProperties>({
			taskrunnerId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
			workerGroup: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(0)]),
			hostname: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
		});

	}


	/** Contains the parameters for SetStatus. */
	export interface SetStatusInput {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		pipelineId: string;

		/** Required */
		objectIds: Array<string>;

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 0
		 */
		status: string;
	}

	/** Contains the parameters for SetStatus. */
	export interface SetStatusInputFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		pipelineId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 0
		 */
		status: FormControl<string | null | undefined>,
	}
	export function CreateSetStatusInputFormGroup() {
		return new FormGroup<SetStatusInputFormProperties>({
			pipelineId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(0)]),
		});

	}


	/** Contains the output of SetTaskStatus. */
	export interface SetTaskStatusOutput {
	}

	/** Contains the output of SetTaskStatus. */
	export interface SetTaskStatusOutputFormProperties {
	}
	export function CreateSetTaskStatusOutputFormGroup() {
		return new FormGroup<SetTaskStatusOutputFormProperties>({
		});

	}


	/** Contains the parameters for SetTaskStatus. */
	export interface SetTaskStatusInput {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		taskId: string;

		/** Required */
		taskStatus: SetTaskStatusInputTaskStatus;

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		errorId?: string | null;
		errorMessage?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		errorStackTrace?: string | null;
	}

	/** Contains the parameters for SetTaskStatus. */
	export interface SetTaskStatusInputFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		taskId: FormControl<string | null | undefined>,

		/** Required */
		taskStatus: FormControl<SetTaskStatusInputTaskStatus | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		errorId: FormControl<string | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		errorStackTrace: FormControl<string | null | undefined>,
	}
	export function CreateSetTaskStatusInputFormGroup() {
		return new FormGroup<SetTaskStatusInputFormProperties>({
			taskId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1)]),
			taskStatus: new FormControl<SetTaskStatusInputTaskStatus | null | undefined>(undefined, [Validators.required]),
			errorId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(0)]),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			errorStackTrace: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(0)]),
		});

	}

	export enum SetTaskStatusInputTaskStatus { FINISHED = 0, FAILED = 1, FALSE = 2 }


	/** Contains the output of ValidatePipelineDefinition. */
	export interface ValidatePipelineDefinitionOutput {
		validationErrors?: Array<ValidationError>;
		validationWarnings?: Array<ValidationWarning>;

		/** Required */
		errored: boolean;
	}

	/** Contains the output of ValidatePipelineDefinition. */
	export interface ValidatePipelineDefinitionOutputFormProperties {

		/** Required */
		errored: FormControl<boolean | null | undefined>,
	}
	export function CreateValidatePipelineDefinitionOutputFormGroup() {
		return new FormGroup<ValidatePipelineDefinitionOutputFormProperties>({
			errored: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the parameters for ValidatePipelineDefinition. */
	export interface ValidatePipelineDefinitionInput {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		pipelineId: string;

		/** Required */
		pipelineObjects: Array<PipelineObject>;
		parameterObjects?: Array<ParameterObject>;
		parameterValues?: Array<ParameterValue>;
	}

	/** Contains the parameters for ValidatePipelineDefinition. */
	export interface ValidatePipelineDefinitionInputFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		pipelineId: FormControl<string | null | undefined>,
	}
	export function CreateValidatePipelineDefinitionInputFormGroup() {
		return new FormGroup<ValidatePipelineDefinitionInputFormProperties>({
			pipelineId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
		});

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

