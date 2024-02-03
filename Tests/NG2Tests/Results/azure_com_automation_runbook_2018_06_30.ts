import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Definition of the runbook property type. */
	export interface ContentHash {

		/**
		 * Gets or sets the content hash algorithm used to hash the content.
		 * Required
		 */
		algorithm: string;

		/**
		 * Gets or sets expected hash value of the content.
		 * Required
		 */
		value: string;
	}

	/** Definition of the runbook property type. */
	export interface ContentHashFormProperties {

		/**
		 * Gets or sets the content hash algorithm used to hash the content.
		 * Required
		 */
		algorithm: FormControl<string | null | undefined>,

		/**
		 * Gets or sets expected hash value of the content.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateContentHashFormGroup() {
		return new FormGroup<ContentHashFormProperties>({
			algorithm: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Definition of the content link. */
	export interface ContentLink {

		/** Definition of the runbook property type. */
		contentHash?: ContentHash;

		/** Gets or sets the uri of the runbook content. */
		uri?: string | null;

		/** Gets or sets the version of the content. */
		version?: string | null;
	}

	/** Definition of the content link. */
	export interface ContentLinkFormProperties {

		/** Gets or sets the uri of the runbook content. */
		uri: FormControl<string | null | undefined>,

		/** Gets or sets the version of the content. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateContentLinkFormGroup() {
		return new FormGroup<ContentLinkFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition of the job stream. */
	export interface JobStream {

		/** Gets or sets the id of the resource. */
		id?: string | null;

		/** Definition of the job stream. */
		properties?: JobStreamProperties;
	}

	/** Definition of the job stream. */
	export interface JobStreamFormProperties {

		/** Gets or sets the id of the resource. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateJobStreamFormGroup() {
		return new FormGroup<JobStreamFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response model for the list job stream operation. */
	export interface JobStreamListResult {

		/** Gets or sets the next link. */
		nextLink?: string | null;

		/** A list of job streams. */
		value?: Array<JobStream>;
	}

	/** The response model for the list job stream operation. */
	export interface JobStreamListResultFormProperties {

		/** Gets or sets the next link. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateJobStreamListResultFormGroup() {
		return new FormGroup<JobStreamListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition of the job stream. */
	export interface JobStreamProperties {

		/** Gets or sets the id of the job stream. */
		jobStreamId?: string | null;

		/** Gets or sets the stream text. */
		streamText?: string | null;

		/** Gets or sets the stream type. */
		streamType?: JobStreamPropertiesStreamType | null;

		/** Gets or sets the summary. */
		summary?: string | null;

		/** Gets or sets the creation time of the job. */
		time?: Date | null;

		/** Gets or sets the values of the job stream. */
		value?: {[id: string]: any };
	}

	/** Definition of the job stream. */
	export interface JobStreamPropertiesFormProperties {

		/** Gets or sets the id of the job stream. */
		jobStreamId: FormControl<string | null | undefined>,

		/** Gets or sets the stream text. */
		streamText: FormControl<string | null | undefined>,

		/** Gets or sets the stream type. */
		streamType: FormControl<JobStreamPropertiesStreamType | null | undefined>,

		/** Gets or sets the summary. */
		summary: FormControl<string | null | undefined>,

		/** Gets or sets the creation time of the job. */
		time: FormControl<Date | null | undefined>,

		/** Gets or sets the values of the job stream. */
		value: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateJobStreamPropertiesFormGroup() {
		return new FormGroup<JobStreamPropertiesFormProperties>({
			jobStreamId: new FormControl<string | null | undefined>(undefined),
			streamText: new FormControl<string | null | undefined>(undefined),
			streamType: new FormControl<JobStreamPropertiesStreamType | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<Date | null | undefined>(undefined),
			value: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}

	export enum JobStreamPropertiesStreamType { Progress = 'Progress', Output = 'Output', Warning = 'Warning', Error = 'Error', Debug = 'Debug', Verbose = 'Verbose', Any = 'Any' }

	export interface Runbook {
	}
	export interface RunbookFormProperties {
	}
	export function CreateRunbookFormGroup() {
		return new FormGroup<RunbookFormProperties>({
		});

	}


	/** The parameters supplied to the create or update runbook operation. */
	export interface RunbookCreateOrUpdateDraftParameters {

		/**
		 * Content of the Runbook.
		 * Required
		 */
		runbookContent: string;
	}

	/** The parameters supplied to the create or update runbook operation. */
	export interface RunbookCreateOrUpdateDraftParametersFormProperties {

		/**
		 * Content of the Runbook.
		 * Required
		 */
		runbookContent: FormControl<string | null | undefined>,
	}
	export function CreateRunbookCreateOrUpdateDraftParametersFormGroup() {
		return new FormGroup<RunbookCreateOrUpdateDraftParametersFormProperties>({
			runbookContent: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The parameters supplied to the create or update draft runbook properties. */
	export interface RunbookCreateOrUpdateDraftProperties {

		/** Gets or sets the description of the runbook. */
		description?: string | null;

		/** Required */
		draft: RunbookDraft;

		/** Gets or sets the activity-level tracing options of the runbook. */
		logActivityTrace?: number | null;

		/** Gets or sets progress log option. */
		logProgress?: boolean | null;

		/** Gets or sets verbose log option. */
		logVerbose?: boolean | null;

		/**
		 * Gets or sets the type of the runbook.
		 * Required
		 */
		runbookType: RunbookCreateOrUpdateDraftPropertiesRunbookType;
	}

	/** The parameters supplied to the create or update draft runbook properties. */
	export interface RunbookCreateOrUpdateDraftPropertiesFormProperties {

		/** Gets or sets the description of the runbook. */
		description: FormControl<string | null | undefined>,

		/** Gets or sets the activity-level tracing options of the runbook. */
		logActivityTrace: FormControl<number | null | undefined>,

		/** Gets or sets progress log option. */
		logProgress: FormControl<boolean | null | undefined>,

		/** Gets or sets verbose log option. */
		logVerbose: FormControl<boolean | null | undefined>,

		/**
		 * Gets or sets the type of the runbook.
		 * Required
		 */
		runbookType: FormControl<RunbookCreateOrUpdateDraftPropertiesRunbookType | null | undefined>,
	}
	export function CreateRunbookCreateOrUpdateDraftPropertiesFormGroup() {
		return new FormGroup<RunbookCreateOrUpdateDraftPropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			logActivityTrace: new FormControl<number | null | undefined>(undefined),
			logProgress: new FormControl<boolean | null | undefined>(undefined),
			logVerbose: new FormControl<boolean | null | undefined>(undefined),
			runbookType: new FormControl<RunbookCreateOrUpdateDraftPropertiesRunbookType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RunbookCreateOrUpdateDraftPropertiesRunbookType { Script = 'Script', Graph = 'Graph', PowerShellWorkflow = 'PowerShellWorkflow', PowerShell = 'PowerShell', GraphPowerShellWorkflow = 'GraphPowerShellWorkflow', GraphPowerShell = 'GraphPowerShell' }


	/** The parameters supplied to the create or update runbook operation. */
	export interface RunbookCreateOrUpdateParameters {

		/** Gets or sets the location of the resource. */
		location?: string | null;

		/** Gets or sets the name of the resource. */
		name?: string | null;

		/**
		 * The parameters supplied to the create or update runbook properties.
		 * Required
		 */
		properties: RunbookCreateOrUpdateProperties;

		/** Gets or sets the tags attached to the resource. */
		tags?: {[id: string]: string };
	}

	/** The parameters supplied to the create or update runbook operation. */
	export interface RunbookCreateOrUpdateParametersFormProperties {

		/** Gets or sets the location of the resource. */
		location: FormControl<string | null | undefined>,

		/** Gets or sets the name of the resource. */
		name: FormControl<string | null | undefined>,

		/** Gets or sets the tags attached to the resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateRunbookCreateOrUpdateParametersFormGroup() {
		return new FormGroup<RunbookCreateOrUpdateParametersFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The parameters supplied to the create or update runbook properties. */
	export interface RunbookCreateOrUpdateProperties {

		/** Gets or sets the description of the runbook. */
		description?: string | null;
		draft?: RunbookDraft;

		/** Gets or sets the activity-level tracing options of the runbook. */
		logActivityTrace?: number | null;

		/** Gets or sets progress log option. */
		logProgress?: boolean | null;

		/** Gets or sets verbose log option. */
		logVerbose?: boolean | null;

		/** Definition of the content link. */
		publishContentLink?: ContentLink;

		/**
		 * Gets or sets the type of the runbook.
		 * Required
		 */
		runbookType: RunbookCreateOrUpdateDraftPropertiesRunbookType;
	}

	/** The parameters supplied to the create or update runbook properties. */
	export interface RunbookCreateOrUpdatePropertiesFormProperties {

		/** Gets or sets the description of the runbook. */
		description: FormControl<string | null | undefined>,

		/** Gets or sets the activity-level tracing options of the runbook. */
		logActivityTrace: FormControl<number | null | undefined>,

		/** Gets or sets progress log option. */
		logProgress: FormControl<boolean | null | undefined>,

		/** Gets or sets verbose log option. */
		logVerbose: FormControl<boolean | null | undefined>,

		/**
		 * Gets or sets the type of the runbook.
		 * Required
		 */
		runbookType: FormControl<RunbookCreateOrUpdateDraftPropertiesRunbookType | null | undefined>,
	}
	export function CreateRunbookCreateOrUpdatePropertiesFormGroup() {
		return new FormGroup<RunbookCreateOrUpdatePropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			logActivityTrace: new FormControl<number | null | undefined>(undefined),
			logProgress: new FormControl<boolean | null | undefined>(undefined),
			logVerbose: new FormControl<boolean | null | undefined>(undefined),
			runbookType: new FormControl<RunbookCreateOrUpdateDraftPropertiesRunbookType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RunbookDraft {

		/** Gets or sets the creation time of the runbook draft. */
		creationTime?: Date | null;

		/** Definition of the content link. */
		draftContentLink?: ContentLink;

		/** Gets or sets whether runbook is in edit mode. */
		inEdit?: boolean | null;

		/** Gets or sets the last modified time of the runbook draft. */
		lastModifiedTime?: Date | null;

		/** Gets or sets the runbook output types. */
		outputTypes?: Array<string>;

		/** Gets or sets the runbook draft parameters. */
		parameters?: {[id: string]: RunbookParameter };
	}
	export interface RunbookDraftFormProperties {

		/** Gets or sets the creation time of the runbook draft. */
		creationTime: FormControl<Date | null | undefined>,

		/** Gets or sets whether runbook is in edit mode. */
		inEdit: FormControl<boolean | null | undefined>,

		/** Gets or sets the last modified time of the runbook draft. */
		lastModifiedTime: FormControl<Date | null | undefined>,

		/** Gets or sets the runbook draft parameters. */
		parameters: FormControl<{[id: string]: RunbookParameter } | null | undefined>,
	}
	export function CreateRunbookDraftFormGroup() {
		return new FormGroup<RunbookDraftFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			inEdit: new FormControl<boolean | null | undefined>(undefined),
			lastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: RunbookParameter } | null | undefined>(undefined),
		});

	}


	/** The response model for the undo edit runbook operation. */
	export interface RunbookDraftUndoEditResult {
		requestId?: string | null;
		statusCode?: RunbookDraftUndoEditResultStatusCode | null;
	}

	/** The response model for the undo edit runbook operation. */
	export interface RunbookDraftUndoEditResultFormProperties {
		requestId: FormControl<string | null | undefined>,
		statusCode: FormControl<RunbookDraftUndoEditResultStatusCode | null | undefined>,
	}
	export function CreateRunbookDraftUndoEditResultFormGroup() {
		return new FormGroup<RunbookDraftUndoEditResultFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			statusCode: new FormControl<RunbookDraftUndoEditResultStatusCode | null | undefined>(undefined),
		});

	}

	export enum RunbookDraftUndoEditResultStatusCode { Continue = 'Continue', SwitchingProtocols = 'SwitchingProtocols', OK = 'OK', Created = 'Created', Accepted = 'Accepted', NonAuthoritativeInformation = 'NonAuthoritativeInformation', NoContent = 'NoContent', ResetContent = 'ResetContent', PartialContent = 'PartialContent', MultipleChoices = 'MultipleChoices', Ambiguous = 'Ambiguous', MovedPermanently = 'MovedPermanently', Moved = 'Moved', Found = 'Found', Redirect = 'Redirect', SeeOther = 'SeeOther', RedirectMethod = 'RedirectMethod', NotModified = 'NotModified', UseProxy = 'UseProxy', Unused = 'Unused', TemporaryRedirect = 'TemporaryRedirect', RedirectKeepVerb = 'RedirectKeepVerb', BadRequest = 'BadRequest', Unauthorized = 'Unauthorized', PaymentRequired = 'PaymentRequired', Forbidden = 'Forbidden', NotFound = 'NotFound', MethodNotAllowed = 'MethodNotAllowed', NotAcceptable = 'NotAcceptable', ProxyAuthenticationRequired = 'ProxyAuthenticationRequired', RequestTimeout = 'RequestTimeout', Conflict = 'Conflict', Gone = 'Gone', LengthRequired = 'LengthRequired', PreconditionFailed = 'PreconditionFailed', RequestEntityTooLarge = 'RequestEntityTooLarge', RequestUriTooLong = 'RequestUriTooLong', UnsupportedMediaType = 'UnsupportedMediaType', RequestedRangeNotSatisfiable = 'RequestedRangeNotSatisfiable', ExpectationFailed = 'ExpectationFailed', UpgradeRequired = 'UpgradeRequired', InternalServerError = 'InternalServerError', NotImplemented = 'NotImplemented', BadGateway = 'BadGateway', ServiceUnavailable = 'ServiceUnavailable', GatewayTimeout = 'GatewayTimeout', HttpVersionNotSupported = 'HttpVersionNotSupported' }


	/** The response model for the list runbook operation. */
	export interface RunbookListResult {

		/** Gets or sets the next link. */
		nextLink?: string | null;

		/** Gets or sets a list of runbooks. */
		value?: Array<Runbook>;
	}

	/** The response model for the list runbook operation. */
	export interface RunbookListResultFormProperties {

		/** Gets or sets the next link. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateRunbookListResultFormGroup() {
		return new FormGroup<RunbookListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition of the runbook parameter type. */
	export interface RunbookParameter {

		/** Gets or sets the default value of parameter. */
		defaultValue?: string | null;

		/** Gets or sets a Boolean value to indicate whether the parameter is mandatory or not. */
		isMandatory?: boolean | null;

		/** Get or sets the position of the parameter. */
		position?: number | null;

		/** Gets or sets the type of the parameter. */
		type?: string | null;
	}

	/** Definition of the runbook parameter type. */
	export interface RunbookParameterFormProperties {

		/** Gets or sets the default value of parameter. */
		defaultValue: FormControl<string | null | undefined>,

		/** Gets or sets a Boolean value to indicate whether the parameter is mandatory or not. */
		isMandatory: FormControl<boolean | null | undefined>,

		/** Get or sets the position of the parameter. */
		position: FormControl<number | null | undefined>,

		/** Gets or sets the type of the parameter. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateRunbookParameterFormGroup() {
		return new FormGroup<RunbookParameterFormProperties>({
			defaultValue: new FormControl<string | null | undefined>(undefined),
			isMandatory: new FormControl<boolean | null | undefined>(undefined),
			position: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition of the runbook property type. */
	export interface RunbookProperties {

		/** Gets or sets the creation time. */
		creationTime?: Date | null;

		/** Gets or sets the description. */
		description?: string | null;
		draft?: RunbookDraft;

		/** Gets or sets the job count of the runbook. */
		jobCount?: number | null;

		/** Gets or sets the last modified by. */
		lastModifiedBy?: string | null;

		/** Gets or sets the last modified time. */
		lastModifiedTime?: Date | null;

		/** Gets or sets the option to log activity trace of the runbook. */
		logActivityTrace?: number | null;

		/** Gets or sets progress log option. */
		logProgress?: boolean | null;

		/** Gets or sets verbose log option. */
		logVerbose?: boolean | null;

		/** Gets or sets the runbook output types. */
		outputTypes?: Array<string>;

		/** Gets or sets the runbook parameters. */
		parameters?: {[id: string]: RunbookParameter };

		/** Gets or sets the provisioning state of the runbook. */
		provisioningState?: RunbookPropertiesProvisioningState | null;

		/** Definition of the content link. */
		publishContentLink?: ContentLink;

		/** Gets or sets the type of the runbook. */
		runbookType?: RunbookCreateOrUpdateDraftPropertiesRunbookType | null;

		/** Gets or sets the state of the runbook. */
		state?: RunbookPropertiesState | null;
	}

	/** Definition of the runbook property type. */
	export interface RunbookPropertiesFormProperties {

		/** Gets or sets the creation time. */
		creationTime: FormControl<Date | null | undefined>,

		/** Gets or sets the description. */
		description: FormControl<string | null | undefined>,

		/** Gets or sets the job count of the runbook. */
		jobCount: FormControl<number | null | undefined>,

		/** Gets or sets the last modified by. */
		lastModifiedBy: FormControl<string | null | undefined>,

		/** Gets or sets the last modified time. */
		lastModifiedTime: FormControl<Date | null | undefined>,

		/** Gets or sets the option to log activity trace of the runbook. */
		logActivityTrace: FormControl<number | null | undefined>,

		/** Gets or sets progress log option. */
		logProgress: FormControl<boolean | null | undefined>,

		/** Gets or sets verbose log option. */
		logVerbose: FormControl<boolean | null | undefined>,

		/** Gets or sets the runbook parameters. */
		parameters: FormControl<{[id: string]: RunbookParameter } | null | undefined>,

		/** Gets or sets the provisioning state of the runbook. */
		provisioningState: FormControl<RunbookPropertiesProvisioningState | null | undefined>,

		/** Gets or sets the type of the runbook. */
		runbookType: FormControl<RunbookCreateOrUpdateDraftPropertiesRunbookType | null | undefined>,

		/** Gets or sets the state of the runbook. */
		state: FormControl<RunbookPropertiesState | null | undefined>,
	}
	export function CreateRunbookPropertiesFormGroup() {
		return new FormGroup<RunbookPropertiesFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			jobCount: new FormControl<number | null | undefined>(undefined),
			lastModifiedBy: new FormControl<string | null | undefined>(undefined),
			lastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			logActivityTrace: new FormControl<number | null | undefined>(undefined),
			logProgress: new FormControl<boolean | null | undefined>(undefined),
			logVerbose: new FormControl<boolean | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: RunbookParameter } | null | undefined>(undefined),
			provisioningState: new FormControl<RunbookPropertiesProvisioningState | null | undefined>(undefined),
			runbookType: new FormControl<RunbookCreateOrUpdateDraftPropertiesRunbookType | null | undefined>(undefined),
			state: new FormControl<RunbookPropertiesState | null | undefined>(undefined),
		});

	}

	export enum RunbookPropertiesProvisioningState { Succeeded = 'Succeeded' }

	export enum RunbookPropertiesState { New = 'New', Edit = 'Edit', Published = 'Published' }


	/** The parameters supplied to the update runbook operation. */
	export interface RunbookUpdateParameters {

		/** Gets or sets the location of the resource. */
		location?: string | null;

		/** Gets or sets the name of the resource. */
		name?: string | null;

		/** The parameters supplied to the update runbook properties. */
		properties?: RunbookUpdateProperties;

		/** Gets or sets the tags attached to the resource. */
		tags?: {[id: string]: string };
	}

	/** The parameters supplied to the update runbook operation. */
	export interface RunbookUpdateParametersFormProperties {

		/** Gets or sets the location of the resource. */
		location: FormControl<string | null | undefined>,

		/** Gets or sets the name of the resource. */
		name: FormControl<string | null | undefined>,

		/** Gets or sets the tags attached to the resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateRunbookUpdateParametersFormGroup() {
		return new FormGroup<RunbookUpdateParametersFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The parameters supplied to the update runbook properties. */
	export interface RunbookUpdateProperties {

		/** Gets or sets the description of the runbook. */
		description?: string | null;

		/** Gets or sets the activity-level tracing options of the runbook. */
		logActivityTrace?: number | null;

		/** Gets or sets progress log option. */
		logProgress?: boolean | null;

		/** Gets or sets verbose log option. */
		logVerbose?: boolean | null;
	}

	/** The parameters supplied to the update runbook properties. */
	export interface RunbookUpdatePropertiesFormProperties {

		/** Gets or sets the description of the runbook. */
		description: FormControl<string | null | undefined>,

		/** Gets or sets the activity-level tracing options of the runbook. */
		logActivityTrace: FormControl<number | null | undefined>,

		/** Gets or sets progress log option. */
		logProgress: FormControl<boolean | null | undefined>,

		/** Gets or sets verbose log option. */
		logVerbose: FormControl<boolean | null | undefined>,
	}
	export function CreateRunbookUpdatePropertiesFormGroup() {
		return new FormGroup<RunbookUpdatePropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			logActivityTrace: new FormControl<number | null | undefined>(undefined),
			logProgress: new FormControl<boolean | null | undefined>(undefined),
			logVerbose: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Definition of the test job. */
	export interface TestJob {

		/** Gets or sets the creation time of the test job. */
		creationTime?: Date | null;

		/** Gets or sets the end time of the test job. */
		endTime?: Date | null;

		/** Gets or sets the exception of the test job. */
		exception?: string | null;

		/** Gets or sets the last modified time of the test job. */
		lastModifiedTime?: Date | null;

		/** Gets or sets the last status modified time of the test job. */
		lastStatusModifiedTime?: Date | null;

		/** The activity-level tracing options of the runbook. */
		logActivityTrace?: number | null;

		/** Gets or sets the parameters of the test job. */
		parameters?: {[id: string]: string };

		/** Gets or sets the runOn which specifies the group name where the job is to be executed. */
		runOn?: string | null;

		/** Gets or sets the start time of the test job. */
		startTime?: Date | null;

		/** Gets or sets the status of the test job. */
		status?: string | null;

		/** Gets or sets the status details of the test job. */
		statusDetails?: string | null;
	}

	/** Definition of the test job. */
	export interface TestJobFormProperties {

		/** Gets or sets the creation time of the test job. */
		creationTime: FormControl<Date | null | undefined>,

		/** Gets or sets the end time of the test job. */
		endTime: FormControl<Date | null | undefined>,

		/** Gets or sets the exception of the test job. */
		exception: FormControl<string | null | undefined>,

		/** Gets or sets the last modified time of the test job. */
		lastModifiedTime: FormControl<Date | null | undefined>,

		/** Gets or sets the last status modified time of the test job. */
		lastStatusModifiedTime: FormControl<Date | null | undefined>,

		/** The activity-level tracing options of the runbook. */
		logActivityTrace: FormControl<number | null | undefined>,

		/** Gets or sets the parameters of the test job. */
		parameters: FormControl<{[id: string]: string } | null | undefined>,

		/** Gets or sets the runOn which specifies the group name where the job is to be executed. */
		runOn: FormControl<string | null | undefined>,

		/** Gets or sets the start time of the test job. */
		startTime: FormControl<Date | null | undefined>,

		/** Gets or sets the status of the test job. */
		status: FormControl<string | null | undefined>,

		/** Gets or sets the status details of the test job. */
		statusDetails: FormControl<string | null | undefined>,
	}
	export function CreateTestJobFormGroup() {
		return new FormGroup<TestJobFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			exception: new FormControl<string | null | undefined>(undefined),
			lastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			lastStatusModifiedTime: new FormControl<Date | null | undefined>(undefined),
			logActivityTrace: new FormControl<number | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			runOn: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			statusDetails: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The parameters supplied to the create test job operation. */
	export interface TestJobCreateParameters {

		/** Gets or sets the parameters of the test job. */
		parameters?: {[id: string]: string };

		/** Gets or sets the runOn which specifies the group name where the job is to be executed. */
		runOn?: string | null;
	}

	/** The parameters supplied to the create test job operation. */
	export interface TestJobCreateParametersFormProperties {

		/** Gets or sets the parameters of the test job. */
		parameters: FormControl<{[id: string]: string } | null | undefined>,

		/** Gets or sets the runOn which specifies the group name where the job is to be executed. */
		runOn: FormControl<string | null | undefined>,
	}
	export function CreateTestJobCreateParametersFormGroup() {
		return new FormGroup<TestJobCreateParametersFormProperties>({
			parameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			runOn: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve a list of runbooks.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} api_version Client Api Version.
		 * @return {RunbookListResult} OK
		 */
		Runbook_ListByAutomationAccount(subscriptionId: string, resourceGroupName: string, automationAccountName: string, api_version: string): Observable<RunbookListResult> {
			return this.http.get<RunbookListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/runbooks&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieve the runbook identified by runbook name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} runbookName The runbook name.
		 * @param {string} api_version Client Api Version.
		 * @return {Runbook} OK
		 */
		Runbook_Get(subscriptionId: string, resourceGroupName: string, automationAccountName: string, runbookName: string, api_version: string): Observable<Runbook> {
			return this.http.get<Runbook>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/runbooks/' + (runbookName == null ? '' : encodeURIComponent(runbookName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create the runbook identified by runbook name.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} runbookName The runbook name.
		 * @param {string} api_version Client Api Version.
		 * @param {RunbookCreateOrUpdateParameters} requestBody The create or update parameters for runbook. Provide either content link for a published runbook or draft, not both.
		 * @return {Runbook} OK
		 */
		Runbook_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, automationAccountName: string, runbookName: string, api_version: string, requestBody: RunbookCreateOrUpdateParameters): Observable<Runbook> {
			return this.http.put<Runbook>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/runbooks/' + (runbookName == null ? '' : encodeURIComponent(runbookName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete the runbook by name.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} runbookName The runbook name.
		 * @param {string} api_version Client Api Version.
		 * @return {void} OK
		 */
		Runbook_Delete(subscriptionId: string, resourceGroupName: string, automationAccountName: string, runbookName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/runbooks/' + (runbookName == null ? '' : encodeURIComponent(runbookName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update the runbook identified by runbook name.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} runbookName The runbook name.
		 * @param {string} api_version Client Api Version.
		 * @param {RunbookUpdateParameters} requestBody The update parameters for runbook.
		 * @return {Runbook} OK
		 */
		Runbook_Update(subscriptionId: string, resourceGroupName: string, automationAccountName: string, runbookName: string, api_version: string, requestBody: RunbookUpdateParameters): Observable<Runbook> {
			return this.http.patch<Runbook>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/runbooks/' + (runbookName == null ? '' : encodeURIComponent(runbookName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve the content of runbook identified by runbook name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/content
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} runbookName The runbook name.
		 * @param {string} api_version Client Api Version.
		 * @return {void} OK
		 */
		Runbook_GetContent(subscriptionId: string, resourceGroupName: string, automationAccountName: string, runbookName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/runbooks/' + (runbookName == null ? '' : encodeURIComponent(runbookName)) + '/content&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve the runbook draft identified by runbook name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/draft
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} runbookName The runbook name.
		 * @param {string} api_version Client Api Version.
		 * @return {RunbookDraft} OK
		 */
		RunbookDraft_Get(subscriptionId: string, resourceGroupName: string, automationAccountName: string, runbookName: string, api_version: string): Observable<RunbookDraft> {
			return this.http.get<RunbookDraft>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/runbooks/' + (runbookName == null ? '' : encodeURIComponent(runbookName)) + '/draft&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieve the content of runbook draft identified by runbook name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/draft/content
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} runbookName The runbook name.
		 * @param {string} api_version Client Api Version.
		 * @return {void} OK
		 */
		RunbookDraft_GetContent(subscriptionId: string, resourceGroupName: string, automationAccountName: string, runbookName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/runbooks/' + (runbookName == null ? '' : encodeURIComponent(runbookName)) + '/draft/content&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve the test job for the specified runbook.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/draft/testJob
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} runbookName The runbook name.
		 * @param {string} api_version Client Api Version.
		 * @return {TestJob} OK
		 */
		TestJob_Get(subscriptionId: string, resourceGroupName: string, automationAccountName: string, runbookName: string, api_version: string): Observable<TestJob> {
			return this.http.get<TestJob>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/runbooks/' + (runbookName == null ? '' : encodeURIComponent(runbookName)) + '/draft/testJob&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create a test job of the runbook.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/draft/testJob
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} runbookName The parameters supplied to the create test job operation.
		 * @param {string} api_version Client Api Version.
		 * @param {TestJobCreateParameters} requestBody The parameters supplied to the create test job operation.
		 * @return {void} 
		 */
		TestJob_Create(subscriptionId: string, resourceGroupName: string, automationAccountName: string, runbookName: string, api_version: string, requestBody: TestJobCreateParameters): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/runbooks/' + (runbookName == null ? '' : encodeURIComponent(runbookName)) + '/draft/testJob&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Resume the test job.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/draft/testJob/resume
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} runbookName The runbook name.
		 * @param {string} api_version Client Api Version.
		 * @return {void} OK
		 */
		TestJob_Resume(subscriptionId: string, resourceGroupName: string, automationAccountName: string, runbookName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/runbooks/' + (runbookName == null ? '' : encodeURIComponent(runbookName)) + '/draft/testJob/resume&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Stop the test job.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/draft/testJob/stop
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} runbookName The runbook name.
		 * @param {string} api_version Client Api Version.
		 * @return {void} OK
		 */
		TestJob_Stop(subscriptionId: string, resourceGroupName: string, automationAccountName: string, runbookName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/runbooks/' + (runbookName == null ? '' : encodeURIComponent(runbookName)) + '/draft/testJob/stop&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a list of test job streams identified by runbook name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/draft/testJob/streams
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} runbookName The runbook name.
		 * @param {string} filter The filter to apply on the operation.
		 * @param {string} api_version Client Api Version.
		 * @return {JobStreamListResult} OK
		 */
		TestJobStreams_ListByTestJob(subscriptionId: string, resourceGroupName: string, automationAccountName: string, runbookName: string, filter: string | null | undefined, api_version: string): Observable<JobStreamListResult> {
			return this.http.get<JobStreamListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/runbooks/' + (runbookName == null ? '' : encodeURIComponent(runbookName)) + '/draft/testJob/streams&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieve a test job stream of the test job identified by runbook name and stream id.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/draft/testJob/streams/{jobStreamId}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} runbookName The runbook name.
		 * @param {string} jobStreamId The job stream id.
		 * @param {string} api_version Client Api Version.
		 * @return {JobStream} OK
		 */
		TestJobStreams_Get(subscriptionId: string, resourceGroupName: string, automationAccountName: string, runbookName: string, jobStreamId: string, api_version: string): Observable<JobStream> {
			return this.http.get<JobStream>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/runbooks/' + (runbookName == null ? '' : encodeURIComponent(runbookName)) + '/draft/testJob/streams/' + (jobStreamId == null ? '' : encodeURIComponent(jobStreamId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Suspend the test job.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/draft/testJob/suspend
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} runbookName The runbook name.
		 * @param {string} api_version Client Api Version.
		 * @return {void} OK
		 */
		TestJob_Suspend(subscriptionId: string, resourceGroupName: string, automationAccountName: string, runbookName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/runbooks/' + (runbookName == null ? '' : encodeURIComponent(runbookName)) + '/draft/testJob/suspend&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Undo draft edit to last known published state identified by runbook name.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/draft/undoEdit
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} runbookName The runbook name.
		 * @param {string} api_version Client Api Version.
		 * @return {RunbookDraftUndoEditResult} OK
		 */
		RunbookDraft_UndoEdit(subscriptionId: string, resourceGroupName: string, automationAccountName: string, runbookName: string, api_version: string): Observable<RunbookDraftUndoEditResult> {
			return this.http.post<RunbookDraftUndoEditResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/runbooks/' + (runbookName == null ? '' : encodeURIComponent(runbookName)) + '/draft/undoEdit&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Publish runbook draft.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/publish
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} runbookName The parameters supplied to the publish runbook operation.
		 * @param {string} api_version Client Api Version.
		 * @return {void} 
		 */
		Runbook_Publish(subscriptionId: string, resourceGroupName: string, automationAccountName: string, runbookName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/runbooks/' + (runbookName == null ? '' : encodeURIComponent(runbookName)) + '/publish&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}
	}

}

