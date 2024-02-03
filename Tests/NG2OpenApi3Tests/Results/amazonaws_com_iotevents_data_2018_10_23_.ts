import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BatchAcknowledgeAlarmResponse {
		errorEntries?: Array<BatchAlarmActionErrorEntry>;
	}
	export interface BatchAcknowledgeAlarmResponseFormProperties {
	}
	export function CreateBatchAcknowledgeAlarmResponseFormGroup() {
		return new FormGroup<BatchAcknowledgeAlarmResponseFormProperties>({
		});

	}


	/** <p>Contains error messages associated with one of the following requests:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchAcknowledgeAlarm.html">BatchAcknowledgeAlarm</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchDisableAlarm.html">BatchDisableAlarm</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchEnableAlarm.html">BatchEnableAlarm</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchResetAlarm.html">BatchResetAlarm</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchSnoozeAlarm.html">BatchSnoozeAlarm</a> </p> </li> </ul> */
	export interface BatchAlarmActionErrorEntry {
		requestId?: string;
		errorCode?: ErrorCode;
		errorMessage?: string;
	}

	/** <p>Contains error messages associated with one of the following requests:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchAcknowledgeAlarm.html">BatchAcknowledgeAlarm</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchDisableAlarm.html">BatchDisableAlarm</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchEnableAlarm.html">BatchEnableAlarm</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchResetAlarm.html">BatchResetAlarm</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchSnoozeAlarm.html">BatchSnoozeAlarm</a> </p> </li> </ul> */
	export interface BatchAlarmActionErrorEntryFormProperties {
		requestId: FormControl<string | null | undefined>,
		errorCode: FormControl<ErrorCode | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateBatchAlarmActionErrorEntryFormGroup() {
		return new FormGroup<BatchAlarmActionErrorEntryFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			errorCode: new FormControl<ErrorCode | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ErrorCode { ResourceNotFoundException = 'ResourceNotFoundException', InvalidRequestException = 'InvalidRequestException', InternalFailureException = 'InternalFailureException', ServiceUnavailableException = 'ServiceUnavailableException', ThrottlingException = 'ThrottlingException' }


	/** Information needed to acknowledge the alarm. */
	export interface AcknowledgeAlarmActionRequest {

		/** Required */
		requestId: string;

		/** Required */
		alarmModelName: string;
		keyValue?: string;
		note?: string;
	}

	/** Information needed to acknowledge the alarm. */
	export interface AcknowledgeAlarmActionRequestFormProperties {

		/** Required */
		requestId: FormControl<string | null | undefined>,

		/** Required */
		alarmModelName: FormControl<string | null | undefined>,
		keyValue: FormControl<string | null | undefined>,
		note: FormControl<string | null | undefined>,
	}
	export function CreateAcknowledgeAlarmActionRequestFormGroup() {
		return new FormGroup<AcknowledgeAlarmActionRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			alarmModelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			keyValue: new FormControl<string | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidRequestException {
	}
	export interface InvalidRequestExceptionFormProperties {
	}
	export function CreateInvalidRequestExceptionFormGroup() {
		return new FormGroup<InvalidRequestExceptionFormProperties>({
		});

	}

	export interface InternalFailureException {
	}
	export interface InternalFailureExceptionFormProperties {
	}
	export function CreateInternalFailureExceptionFormGroup() {
		return new FormGroup<InternalFailureExceptionFormProperties>({
		});

	}

	export interface ServiceUnavailableException {
	}
	export interface ServiceUnavailableExceptionFormProperties {
	}
	export function CreateServiceUnavailableExceptionFormGroup() {
		return new FormGroup<ServiceUnavailableExceptionFormProperties>({
		});

	}

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
		});

	}

	export interface BatchDeleteDetectorResponse {
		batchDeleteDetectorErrorEntries?: Array<BatchDeleteDetectorErrorEntry>;
	}
	export interface BatchDeleteDetectorResponseFormProperties {
	}
	export function CreateBatchDeleteDetectorResponseFormGroup() {
		return new FormGroup<BatchDeleteDetectorResponseFormProperties>({
		});

	}


	/** Contains error messages associated with the deletion request. */
	export interface BatchDeleteDetectorErrorEntry {
		messageId?: string;
		errorCode?: ErrorCode;
		errorMessage?: string;
	}

	/** Contains error messages associated with the deletion request. */
	export interface BatchDeleteDetectorErrorEntryFormProperties {
		messageId: FormControl<string | null | undefined>,
		errorCode: FormControl<ErrorCode | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateBatchDeleteDetectorErrorEntryFormGroup() {
		return new FormGroup<BatchDeleteDetectorErrorEntryFormProperties>({
			messageId: new FormControl<string | null | undefined>(undefined),
			errorCode: new FormControl<ErrorCode | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information used to delete the detector model. */
	export interface DeleteDetectorRequest {

		/** Required */
		messageId: string;

		/** Required */
		detectorModelName: string;
		keyValue?: string;
	}

	/** Information used to delete the detector model. */
	export interface DeleteDetectorRequestFormProperties {

		/** Required */
		messageId: FormControl<string | null | undefined>,

		/** Required */
		detectorModelName: FormControl<string | null | undefined>,
		keyValue: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDetectorRequestFormGroup() {
		return new FormGroup<DeleteDetectorRequestFormProperties>({
			messageId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			detectorModelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			keyValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchDisableAlarmResponse {
		errorEntries?: Array<BatchAlarmActionErrorEntry>;
	}
	export interface BatchDisableAlarmResponseFormProperties {
	}
	export function CreateBatchDisableAlarmResponseFormGroup() {
		return new FormGroup<BatchDisableAlarmResponseFormProperties>({
		});

	}


	/** Information used to disable the alarm. */
	export interface DisableAlarmActionRequest {

		/** Required */
		requestId: string;

		/** Required */
		alarmModelName: string;
		keyValue?: string;
		note?: string;
	}

	/** Information used to disable the alarm. */
	export interface DisableAlarmActionRequestFormProperties {

		/** Required */
		requestId: FormControl<string | null | undefined>,

		/** Required */
		alarmModelName: FormControl<string | null | undefined>,
		keyValue: FormControl<string | null | undefined>,
		note: FormControl<string | null | undefined>,
	}
	export function CreateDisableAlarmActionRequestFormGroup() {
		return new FormGroup<DisableAlarmActionRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			alarmModelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			keyValue: new FormControl<string | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchEnableAlarmResponse {
		errorEntries?: Array<BatchAlarmActionErrorEntry>;
	}
	export interface BatchEnableAlarmResponseFormProperties {
	}
	export function CreateBatchEnableAlarmResponseFormGroup() {
		return new FormGroup<BatchEnableAlarmResponseFormProperties>({
		});

	}


	/** Information needed to enable the alarm. */
	export interface EnableAlarmActionRequest {

		/** Required */
		requestId: string;

		/** Required */
		alarmModelName: string;
		keyValue?: string;
		note?: string;
	}

	/** Information needed to enable the alarm. */
	export interface EnableAlarmActionRequestFormProperties {

		/** Required */
		requestId: FormControl<string | null | undefined>,

		/** Required */
		alarmModelName: FormControl<string | null | undefined>,
		keyValue: FormControl<string | null | undefined>,
		note: FormControl<string | null | undefined>,
	}
	export function CreateEnableAlarmActionRequestFormGroup() {
		return new FormGroup<EnableAlarmActionRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			alarmModelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			keyValue: new FormControl<string | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchPutMessageResponse {
		BatchPutMessageErrorEntries?: Array<BatchPutMessageErrorEntry>;
	}
	export interface BatchPutMessageResponseFormProperties {
	}
	export function CreateBatchPutMessageResponseFormGroup() {
		return new FormGroup<BatchPutMessageResponseFormProperties>({
		});

	}


	/** Contains information about the errors encountered. */
	export interface BatchPutMessageErrorEntry {
		messageId?: string;
		errorCode?: ErrorCode;
		errorMessage?: string;
	}

	/** Contains information about the errors encountered. */
	export interface BatchPutMessageErrorEntryFormProperties {
		messageId: FormControl<string | null | undefined>,
		errorCode: FormControl<ErrorCode | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateBatchPutMessageErrorEntryFormGroup() {
		return new FormGroup<BatchPutMessageErrorEntryFormProperties>({
			messageId: new FormControl<string | null | undefined>(undefined),
			errorCode: new FormControl<ErrorCode | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a message. */
	export interface Message {

		/** Required */
		messageId: string;

		/** Required */
		inputName: string;

		/** Required */
		payload: string;
		timestamp?: TimestampValue;
	}

	/** Information about a message. */
	export interface MessageFormProperties {

		/** Required */
		messageId: FormControl<string | null | undefined>,

		/** Required */
		inputName: FormControl<string | null | undefined>,

		/** Required */
		payload: FormControl<string | null | undefined>,
	}
	export function CreateMessageFormGroup() {
		return new FormGroup<MessageFormProperties>({
			messageId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			inputName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			payload: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains information about a timestamp. */
	export interface TimestampValue {
		timeInMillis?: number | null;
	}

	/** Contains information about a timestamp. */
	export interface TimestampValueFormProperties {
		timeInMillis: FormControl<number | null | undefined>,
	}
	export function CreateTimestampValueFormGroup() {
		return new FormGroup<TimestampValueFormProperties>({
			timeInMillis: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BatchResetAlarmResponse {
		errorEntries?: Array<BatchAlarmActionErrorEntry>;
	}
	export interface BatchResetAlarmResponseFormProperties {
	}
	export function CreateBatchResetAlarmResponseFormGroup() {
		return new FormGroup<BatchResetAlarmResponseFormProperties>({
		});

	}


	/** Information needed to reset the alarm. */
	export interface ResetAlarmActionRequest {

		/** Required */
		requestId: string;

		/** Required */
		alarmModelName: string;
		keyValue?: string;
		note?: string;
	}

	/** Information needed to reset the alarm. */
	export interface ResetAlarmActionRequestFormProperties {

		/** Required */
		requestId: FormControl<string | null | undefined>,

		/** Required */
		alarmModelName: FormControl<string | null | undefined>,
		keyValue: FormControl<string | null | undefined>,
		note: FormControl<string | null | undefined>,
	}
	export function CreateResetAlarmActionRequestFormGroup() {
		return new FormGroup<ResetAlarmActionRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			alarmModelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			keyValue: new FormControl<string | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchSnoozeAlarmResponse {
		errorEntries?: Array<BatchAlarmActionErrorEntry>;
	}
	export interface BatchSnoozeAlarmResponseFormProperties {
	}
	export function CreateBatchSnoozeAlarmResponseFormGroup() {
		return new FormGroup<BatchSnoozeAlarmResponseFormProperties>({
		});

	}


	/** Information needed to snooze the alarm. */
	export interface SnoozeAlarmActionRequest {

		/** Required */
		requestId: string;

		/** Required */
		alarmModelName: string;
		keyValue?: string;
		note?: string;

		/** Required */
		snoozeDuration: number;
	}

	/** Information needed to snooze the alarm. */
	export interface SnoozeAlarmActionRequestFormProperties {

		/** Required */
		requestId: FormControl<string | null | undefined>,

		/** Required */
		alarmModelName: FormControl<string | null | undefined>,
		keyValue: FormControl<string | null | undefined>,
		note: FormControl<string | null | undefined>,

		/** Required */
		snoozeDuration: FormControl<number | null | undefined>,
	}
	export function CreateSnoozeAlarmActionRequestFormGroup() {
		return new FormGroup<SnoozeAlarmActionRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			alarmModelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			keyValue: new FormControl<string | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
			snoozeDuration: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BatchUpdateDetectorResponse {
		batchUpdateDetectorErrorEntries?: Array<BatchUpdateDetectorErrorEntry>;
	}
	export interface BatchUpdateDetectorResponseFormProperties {
	}
	export function CreateBatchUpdateDetectorResponseFormGroup() {
		return new FormGroup<BatchUpdateDetectorResponseFormProperties>({
		});

	}


	/** Information about the error that occurred when attempting to update a detector. */
	export interface BatchUpdateDetectorErrorEntry {
		messageId?: string;
		errorCode?: ErrorCode;
		errorMessage?: string;
	}

	/** Information about the error that occurred when attempting to update a detector. */
	export interface BatchUpdateDetectorErrorEntryFormProperties {
		messageId: FormControl<string | null | undefined>,
		errorCode: FormControl<ErrorCode | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateBatchUpdateDetectorErrorEntryFormGroup() {
		return new FormGroup<BatchUpdateDetectorErrorEntryFormProperties>({
			messageId: new FormControl<string | null | undefined>(undefined),
			errorCode: new FormControl<ErrorCode | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information used to update the detector (instance). */
	export interface UpdateDetectorRequest {

		/** Required */
		messageId: string;

		/** Required */
		detectorModelName: string;
		keyValue?: string;

		/** Required */
		state: DetectorStateDefinition;
	}

	/** Information used to update the detector (instance). */
	export interface UpdateDetectorRequestFormProperties {

		/** Required */
		messageId: FormControl<string | null | undefined>,

		/** Required */
		detectorModelName: FormControl<string | null | undefined>,
		keyValue: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDetectorRequestFormGroup() {
		return new FormGroup<UpdateDetectorRequestFormProperties>({
			messageId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			detectorModelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			keyValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The new state, variable values, and timer settings of the detector (instance). */
	export interface DetectorStateDefinition {

		/** Required */
		stateName: string;

		/** Required */
		variables: Array<VariableDefinition>;

		/** Required */
		timers: Array<TimerDefinition>;
	}

	/** The new state, variable values, and timer settings of the detector (instance). */
	export interface DetectorStateDefinitionFormProperties {

		/** Required */
		stateName: FormControl<string | null | undefined>,
	}
	export function CreateDetectorStateDefinitionFormGroup() {
		return new FormGroup<DetectorStateDefinitionFormProperties>({
			stateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The new value of the variable. */
	export interface VariableDefinition {

		/** Required */
		name: string;

		/** Required */
		value: string;
	}

	/** The new value of the variable. */
	export interface VariableDefinitionFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateVariableDefinitionFormGroup() {
		return new FormGroup<VariableDefinitionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The new setting of a timer. */
	export interface TimerDefinition {

		/** Required */
		name: string;

		/** Required */
		seconds: number;
	}

	/** The new setting of a timer. */
	export interface TimerDefinitionFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		seconds: FormControl<number | null | undefined>,
	}
	export function CreateTimerDefinitionFormGroup() {
		return new FormGroup<TimerDefinitionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			seconds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeAlarmResponse {
		alarm?: Alarm;
	}
	export interface DescribeAlarmResponseFormProperties {
	}
	export function CreateDescribeAlarmResponseFormGroup() {
		return new FormGroup<DescribeAlarmResponseFormProperties>({
		});

	}


	/** Contains information about an alarm. */
	export interface Alarm {
		alarmModelName?: string;
		alarmModelVersion?: string;
		keyValue?: string;
		alarmState?: AlarmState;
		severity?: number | null;
		creationTime?: Date;
		lastUpdateTime?: Date;
	}

	/** Contains information about an alarm. */
	export interface AlarmFormProperties {
		alarmModelName: FormControl<string | null | undefined>,
		alarmModelVersion: FormControl<string | null | undefined>,
		keyValue: FormControl<string | null | undefined>,
		severity: FormControl<number | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateAlarmFormGroup() {
		return new FormGroup<AlarmFormProperties>({
			alarmModelName: new FormControl<string | null | undefined>(undefined),
			alarmModelVersion: new FormControl<string | null | undefined>(undefined),
			keyValue: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<number | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Contains information about the current state of the alarm. */
	export interface AlarmState {
		stateName?: AlarmStateName;
		ruleEvaluation?: RuleEvaluation;
		customerAction?: CustomerAction;
		systemEvent?: SystemEvent;
	}

	/** Contains information about the current state of the alarm. */
	export interface AlarmStateFormProperties {
		stateName: FormControl<AlarmStateName | null | undefined>,
	}
	export function CreateAlarmStateFormGroup() {
		return new FormGroup<AlarmStateFormProperties>({
			stateName: new FormControl<AlarmStateName | null | undefined>(undefined),
		});

	}

	export enum AlarmStateName { DISABLED = 'DISABLED', NORMAL = 'NORMAL', ACTIVE = 'ACTIVE', ACKNOWLEDGED = 'ACKNOWLEDGED', SNOOZE_DISABLED = 'SNOOZE_DISABLED', LATCHED = 'LATCHED' }


	/** Information needed to evaluate data. */
	export interface RuleEvaluation {
		simpleRuleEvaluation?: SimpleRuleEvaluation;
	}

	/** Information needed to evaluate data. */
	export interface RuleEvaluationFormProperties {
	}
	export function CreateRuleEvaluationFormGroup() {
		return new FormGroup<RuleEvaluationFormProperties>({
		});

	}


	/** Information needed to compare two values with a comparison operator. */
	export interface SimpleRuleEvaluation {
		inputPropertyValue?: string;
		operator?: ComparisonOperator;
		thresholdValue?: string;
	}

	/** Information needed to compare two values with a comparison operator. */
	export interface SimpleRuleEvaluationFormProperties {
		inputPropertyValue: FormControl<string | null | undefined>,
		operator: FormControl<ComparisonOperator | null | undefined>,
		thresholdValue: FormControl<string | null | undefined>,
	}
	export function CreateSimpleRuleEvaluationFormGroup() {
		return new FormGroup<SimpleRuleEvaluationFormProperties>({
			inputPropertyValue: new FormControl<string | null | undefined>(undefined),
			operator: new FormControl<ComparisonOperator | null | undefined>(undefined),
			thresholdValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ComparisonOperator { GREATER = 'GREATER', GREATER_OR_EQUAL = 'GREATER_OR_EQUAL', LESS = 'LESS', LESS_OR_EQUAL = 'LESS_OR_EQUAL', EQUAL = 'EQUAL', NOT_EQUAL = 'NOT_EQUAL' }


	/** Contains information about the action that you can take to respond to the alarm. */
	export interface CustomerAction {
		actionName?: CustomerActionName;
		snoozeActionConfiguration?: SnoozeActionConfiguration;
		enableActionConfiguration?: EnableActionConfiguration;
		disableActionConfiguration?: DisableActionConfiguration;
		acknowledgeActionConfiguration?: AcknowledgeActionConfiguration;
		resetActionConfiguration?: ResetActionConfiguration;
	}

	/** Contains information about the action that you can take to respond to the alarm. */
	export interface CustomerActionFormProperties {
		actionName: FormControl<CustomerActionName | null | undefined>,
	}
	export function CreateCustomerActionFormGroup() {
		return new FormGroup<CustomerActionFormProperties>({
			actionName: new FormControl<CustomerActionName | null | undefined>(undefined),
		});

	}

	export enum CustomerActionName { SNOOZE = 'SNOOZE', ENABLE = 'ENABLE', DISABLE = 'DISABLE', ACKNOWLEDGE = 'ACKNOWLEDGE', RESET = 'RESET' }


	/** Contains the configuration information of a snooze action. */
	export interface SnoozeActionConfiguration {
		snoozeDuration?: number | null;
		note?: string;
	}

	/** Contains the configuration information of a snooze action. */
	export interface SnoozeActionConfigurationFormProperties {
		snoozeDuration: FormControl<number | null | undefined>,
		note: FormControl<string | null | undefined>,
	}
	export function CreateSnoozeActionConfigurationFormGroup() {
		return new FormGroup<SnoozeActionConfigurationFormProperties>({
			snoozeDuration: new FormControl<number | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the configuration information of an enable action. */
	export interface EnableActionConfiguration {
		note?: string;
	}

	/** Contains the configuration information of an enable action. */
	export interface EnableActionConfigurationFormProperties {
		note: FormControl<string | null | undefined>,
	}
	export function CreateEnableActionConfigurationFormGroup() {
		return new FormGroup<EnableActionConfigurationFormProperties>({
			note: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the configuration information of a disable action. */
	export interface DisableActionConfiguration {
		note?: string;
	}

	/** Contains the configuration information of a disable action. */
	export interface DisableActionConfigurationFormProperties {
		note: FormControl<string | null | undefined>,
	}
	export function CreateDisableActionConfigurationFormGroup() {
		return new FormGroup<DisableActionConfigurationFormProperties>({
			note: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the configuration information of an acknowledge action. */
	export interface AcknowledgeActionConfiguration {
		note?: string;
	}

	/** Contains the configuration information of an acknowledge action. */
	export interface AcknowledgeActionConfigurationFormProperties {
		note: FormControl<string | null | undefined>,
	}
	export function CreateAcknowledgeActionConfigurationFormGroup() {
		return new FormGroup<AcknowledgeActionConfigurationFormProperties>({
			note: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the configuration information of a reset action. */
	export interface ResetActionConfiguration {
		note?: string;
	}

	/** Contains the configuration information of a reset action. */
	export interface ResetActionConfigurationFormProperties {
		note: FormControl<string | null | undefined>,
	}
	export function CreateResetActionConfigurationFormGroup() {
		return new FormGroup<ResetActionConfigurationFormProperties>({
			note: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about alarm state changes. */
	export interface SystemEvent {
		eventType?: EventType;
		stateChangeConfiguration?: StateChangeConfiguration;
	}

	/** Contains information about alarm state changes. */
	export interface SystemEventFormProperties {
		eventType: FormControl<EventType | null | undefined>,
	}
	export function CreateSystemEventFormGroup() {
		return new FormGroup<SystemEventFormProperties>({
			eventType: new FormControl<EventType | null | undefined>(undefined),
		});

	}

	export enum EventType { STATE_CHANGE = 'STATE_CHANGE' }


	/** Contains the configuration information of alarm state changes. */
	export interface StateChangeConfiguration {
		triggerType?: TriggerType;
	}

	/** Contains the configuration information of alarm state changes. */
	export interface StateChangeConfigurationFormProperties {
		triggerType: FormControl<TriggerType | null | undefined>,
	}
	export function CreateStateChangeConfigurationFormGroup() {
		return new FormGroup<StateChangeConfigurationFormProperties>({
			triggerType: new FormControl<TriggerType | null | undefined>(undefined),
		});

	}

	export enum TriggerType { SNOOZE_TIMEOUT = 'SNOOZE_TIMEOUT' }

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface DescribeDetectorResponse {
		detector?: Detector;
	}
	export interface DescribeDetectorResponseFormProperties {
	}
	export function CreateDescribeDetectorResponseFormGroup() {
		return new FormGroup<DescribeDetectorResponseFormProperties>({
		});

	}


	/** Information about the detector (instance). */
	export interface Detector {
		detectorModelName?: string;
		keyValue?: string;
		detectorModelVersion?: string;
		state?: DetectorState;
		creationTime?: Date;
		lastUpdateTime?: Date;
	}

	/** Information about the detector (instance). */
	export interface DetectorFormProperties {
		detectorModelName: FormControl<string | null | undefined>,
		keyValue: FormControl<string | null | undefined>,
		detectorModelVersion: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateDetectorFormGroup() {
		return new FormGroup<DetectorFormProperties>({
			detectorModelName: new FormControl<string | null | undefined>(undefined),
			keyValue: new FormControl<string | null | undefined>(undefined),
			detectorModelVersion: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Information about the current state of the detector instance. */
	export interface DetectorState {

		/** Required */
		stateName: string;

		/** Required */
		variables: Array<Variable>;

		/** Required */
		timers: Array<Timer>;
	}

	/** Information about the current state of the detector instance. */
	export interface DetectorStateFormProperties {

		/** Required */
		stateName: FormControl<string | null | undefined>,
	}
	export function CreateDetectorStateFormGroup() {
		return new FormGroup<DetectorStateFormProperties>({
			stateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The current state of the variable. */
	export interface Variable {

		/** Required */
		name: string;

		/** Required */
		value: string;
	}

	/** The current state of the variable. */
	export interface VariableFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateVariableFormGroup() {
		return new FormGroup<VariableFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The current state of a timer. */
	export interface Timer {

		/** Required */
		name: string;

		/** Required */
		timestamp: Date;
	}

	/** The current state of a timer. */
	export interface TimerFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateTimerFormGroup() {
		return new FormGroup<TimerFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListAlarmsResponse {
		alarmSummaries?: Array<AlarmSummary>;
		nextToken?: string;
	}
	export interface ListAlarmsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAlarmsResponseFormGroup() {
		return new FormGroup<ListAlarmsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a summary of an alarm. */
	export interface AlarmSummary {
		alarmModelName?: string;
		alarmModelVersion?: string;
		keyValue?: string;
		stateName?: AlarmStateName;
		creationTime?: Date;
		lastUpdateTime?: Date;
	}

	/** Contains a summary of an alarm. */
	export interface AlarmSummaryFormProperties {
		alarmModelName: FormControl<string | null | undefined>,
		alarmModelVersion: FormControl<string | null | undefined>,
		keyValue: FormControl<string | null | undefined>,
		stateName: FormControl<AlarmStateName | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateAlarmSummaryFormGroup() {
		return new FormGroup<AlarmSummaryFormProperties>({
			alarmModelName: new FormControl<string | null | undefined>(undefined),
			alarmModelVersion: new FormControl<string | null | undefined>(undefined),
			keyValue: new FormControl<string | null | undefined>(undefined),
			stateName: new FormControl<AlarmStateName | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListDetectorsResponse {
		detectorSummaries?: Array<DetectorSummary>;
		nextToken?: string;
	}
	export interface ListDetectorsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDetectorsResponseFormGroup() {
		return new FormGroup<ListDetectorsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the detector (instance). */
	export interface DetectorSummary {
		detectorModelName?: string;
		keyValue?: string;
		detectorModelVersion?: string;
		state?: DetectorStateSummary;
		creationTime?: Date;
		lastUpdateTime?: Date;
	}

	/** Information about the detector (instance). */
	export interface DetectorSummaryFormProperties {
		detectorModelName: FormControl<string | null | undefined>,
		keyValue: FormControl<string | null | undefined>,
		detectorModelVersion: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateDetectorSummaryFormGroup() {
		return new FormGroup<DetectorSummaryFormProperties>({
			detectorModelName: new FormControl<string | null | undefined>(undefined),
			keyValue: new FormControl<string | null | undefined>(undefined),
			detectorModelVersion: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Information about the detector state. */
	export interface DetectorStateSummary {
		stateName?: string;
	}

	/** Information about the detector state. */
	export interface DetectorStateSummaryFormProperties {
		stateName: FormControl<string | null | undefined>,
	}
	export function CreateDetectorStateSummaryFormGroup() {
		return new FormGroup<DetectorStateSummaryFormProperties>({
			stateName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchAcknowledgeAlarmRequest {

		/** Required */
		acknowledgeActionRequests: Array<AcknowledgeAlarmActionRequest>;
	}
	export interface BatchAcknowledgeAlarmRequestFormProperties {
	}
	export function CreateBatchAcknowledgeAlarmRequestFormGroup() {
		return new FormGroup<BatchAcknowledgeAlarmRequestFormProperties>({
		});

	}

	export interface BatchDeleteDetectorRequest {

		/** Required */
		detectors: Array<DeleteDetectorRequest>;
	}
	export interface BatchDeleteDetectorRequestFormProperties {
	}
	export function CreateBatchDeleteDetectorRequestFormGroup() {
		return new FormGroup<BatchDeleteDetectorRequestFormProperties>({
		});

	}

	export interface BatchDisableAlarmRequest {

		/** Required */
		disableActionRequests: Array<DisableAlarmActionRequest>;
	}
	export interface BatchDisableAlarmRequestFormProperties {
	}
	export function CreateBatchDisableAlarmRequestFormGroup() {
		return new FormGroup<BatchDisableAlarmRequestFormProperties>({
		});

	}

	export interface BatchEnableAlarmRequest {

		/** Required */
		enableActionRequests: Array<EnableAlarmActionRequest>;
	}
	export interface BatchEnableAlarmRequestFormProperties {
	}
	export function CreateBatchEnableAlarmRequestFormGroup() {
		return new FormGroup<BatchEnableAlarmRequestFormProperties>({
		});

	}

	export interface BatchPutMessageRequest {

		/** Required */
		messages: Array<Message>;
	}
	export interface BatchPutMessageRequestFormProperties {
	}
	export function CreateBatchPutMessageRequestFormGroup() {
		return new FormGroup<BatchPutMessageRequestFormProperties>({
		});

	}

	export interface BatchResetAlarmRequest {

		/** Required */
		resetActionRequests: Array<ResetAlarmActionRequest>;
	}
	export interface BatchResetAlarmRequestFormProperties {
	}
	export function CreateBatchResetAlarmRequestFormGroup() {
		return new FormGroup<BatchResetAlarmRequestFormProperties>({
		});

	}

	export interface BatchSnoozeAlarmRequest {

		/** Required */
		snoozeActionRequests: Array<SnoozeAlarmActionRequest>;
	}
	export interface BatchSnoozeAlarmRequestFormProperties {
	}
	export function CreateBatchSnoozeAlarmRequestFormGroup() {
		return new FormGroup<BatchSnoozeAlarmRequestFormProperties>({
		});

	}

	export interface BatchUpdateDetectorRequest {

		/** Required */
		detectors: Array<UpdateDetectorRequest>;
	}
	export interface BatchUpdateDetectorRequestFormProperties {
	}
	export function CreateBatchUpdateDetectorRequestFormGroup() {
		return new FormGroup<BatchUpdateDetectorRequestFormProperties>({
		});

	}

	export interface DescribeAlarmRequest {
	}
	export interface DescribeAlarmRequestFormProperties {
	}
	export function CreateDescribeAlarmRequestFormGroup() {
		return new FormGroup<DescribeAlarmRequestFormProperties>({
		});

	}

	export interface DescribeDetectorRequest {
	}
	export interface DescribeDetectorRequestFormProperties {
	}
	export function CreateDescribeDetectorRequestFormGroup() {
		return new FormGroup<DescribeDetectorRequestFormProperties>({
		});

	}

	export interface ListAlarmsRequest {
	}
	export interface ListAlarmsRequestFormProperties {
	}
	export function CreateListAlarmsRequestFormGroup() {
		return new FormGroup<ListAlarmsRequestFormProperties>({
		});

	}

	export interface ListDetectorsRequest {
	}
	export interface ListDetectorsRequestFormProperties {
	}
	export function CreateListDetectorsRequestFormGroup() {
		return new FormGroup<ListDetectorsRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Acknowledges one or more alarms. The alarms change to the <code>ACKNOWLEDGED</code> state after you acknowledge them.
		 * Post alarms/acknowledge
		 * @return {void} 
		 */
		BatchAcknowledgeAlarm(requestBody: BatchAcknowledgeAlarmPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'alarms/acknowledge', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes one or more detectors that were created. When a detector is deleted, its state will be cleared and the detector will be removed from the list of detectors. The deleted detector will no longer appear if referenced in the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_ListDetectors.html">ListDetectors</a> API call.
		 * Post detectors/delete
		 * @return {BatchDeleteDetectorResponse} Success
		 */
		BatchDeleteDetector(requestBody: BatchDeleteDetectorPostBody): Observable<BatchDeleteDetectorResponse> {
			return this.http.post<BatchDeleteDetectorResponse>(this.baseUri + 'detectors/delete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disables one or more alarms. The alarms change to the <code>DISABLED</code> state after you disable them.
		 * Post alarms/disable
		 * @return {void} 
		 */
		BatchDisableAlarm(requestBody: BatchDisableAlarmPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'alarms/disable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Enables one or more alarms. The alarms change to the <code>NORMAL</code> state after you enable them.
		 * Post alarms/enable
		 * @return {void} 
		 */
		BatchEnableAlarm(requestBody: BatchEnableAlarmPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'alarms/enable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Sends a set of messages to the IoT Events system. Each message payload is transformed into the input you specify (<code>"inputName"</code>) and ingested into any detectors that monitor that input. If multiple messages are sent, the order in which the messages are processed isn't guaranteed. To guarantee ordering, you must send messages one at a time and wait for a successful response.
		 * Post inputs/messages
		 * @return {BatchPutMessageResponse} Success
		 */
		BatchPutMessage(requestBody: BatchPutMessagePostBody): Observable<BatchPutMessageResponse> {
			return this.http.post<BatchPutMessageResponse>(this.baseUri + 'inputs/messages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Resets one or more alarms. The alarms return to the <code>NORMAL</code> state after you reset them.
		 * Post alarms/reset
		 * @return {void} 
		 */
		BatchResetAlarm(requestBody: BatchResetAlarmPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'alarms/reset', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Changes one or more alarms to the snooze mode. The alarms change to the <code>SNOOZE_DISABLED</code> state after you set them to the snooze mode.
		 * Post alarms/snooze
		 * @return {void} 
		 */
		BatchSnoozeAlarm(requestBody: BatchSnoozeAlarmPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'alarms/snooze', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the state, variable values, and timer settings of one or more detectors (instances) of a specified detector model.
		 * Post detectors
		 * @return {BatchUpdateDetectorResponse} Success
		 */
		BatchUpdateDetector(requestBody: BatchUpdateDetectorPostBody): Observable<BatchUpdateDetectorResponse> {
			return this.http.post<BatchUpdateDetectorResponse>(this.baseUri + 'detectors', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about an alarm.
		 * Get alarms/{alarmModelName}/keyValues/
		 * @param {string} alarmModelName The name of the alarm model.
		 * @param {string} keyValue The value of the key used as a filter to select only the alarms associated with the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_CreateAlarmModel.html#iotevents-CreateAlarmModel-request-key">key</a>.
		 * @return {DescribeAlarmResponse} Success
		 */
		DescribeAlarm(alarmModelName: string, keyValue: string | null | undefined): Observable<DescribeAlarmResponse> {
			return this.http.get<DescribeAlarmResponse>(this.baseUri + 'alarms/' + (alarmModelName == null ? '' : encodeURIComponent(alarmModelName)) + '/keyValues/&keyValue=' + (keyValue == null ? '' : encodeURIComponent(keyValue)), {});
		}

		/**
		 * Returns information about the specified detector (instance).
		 * Get detectors/{detectorModelName}/keyValues/
		 * @param {string} detectorModelName The name of the detector model whose detectors (instances) you want information about.
		 * @param {string} keyValue A filter used to limit results to detectors (instances) created because of the given key ID.
		 * @return {DescribeDetectorResponse} Success
		 */
		DescribeDetector(detectorModelName: string, keyValue: string | null | undefined): Observable<DescribeDetectorResponse> {
			return this.http.get<DescribeDetectorResponse>(this.baseUri + 'detectors/' + (detectorModelName == null ? '' : encodeURIComponent(detectorModelName)) + '/keyValues/&keyValue=' + (keyValue == null ? '' : encodeURIComponent(keyValue)), {});
		}

		/**
		 * Lists one or more alarms. The operation returns only the metadata associated with each alarm.
		 * Get alarms/{alarmModelName}
		 * @param {string} alarmModelName The name of the alarm model.
		 * @param {string} nextToken The token that you can use to return the next set of results.
		 * @param {number} maxResults The maximum number of results to be returned per request.
		 * @return {ListAlarmsResponse} Success
		 */
		ListAlarms(alarmModelName: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListAlarmsResponse> {
			return this.http.get<ListAlarmsResponse>(this.baseUri + 'alarms/' + (alarmModelName == null ? '' : encodeURIComponent(alarmModelName)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Lists detectors (the instances of a detector model).
		 * Get detectors/{detectorModelName}
		 * @param {string} detectorModelName The name of the detector model whose detectors (instances) are listed.
		 * @param {string} stateName A filter that limits results to those detectors (instances) in the given state.
		 * @param {string} nextToken The token that you can use to return the next set of results.
		 * @param {number} maxResults The maximum number of results to be returned per request.
		 * @return {ListDetectorsResponse} Success
		 */
		ListDetectors(detectorModelName: string, stateName: string | null | undefined, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListDetectorsResponse> {
			return this.http.get<ListDetectorsResponse>(this.baseUri + 'detectors/' + (detectorModelName == null ? '' : encodeURIComponent(detectorModelName)) + '&stateName=' + (stateName == null ? '' : encodeURIComponent(stateName)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}
	}

	export interface BatchAcknowledgeAlarmPostBody {

		/**
		 * The list of acknowledge action requests. You can specify up to 10 requests per operation.
		 * Required
		 * Minimum items: 1
		 */
		acknowledgeActionRequests: Array<AcknowledgeAlarmActionRequest>;
	}
	export interface BatchAcknowledgeAlarmPostBodyFormProperties {
	}
	export function CreateBatchAcknowledgeAlarmPostBodyFormGroup() {
		return new FormGroup<BatchAcknowledgeAlarmPostBodyFormProperties>({
		});

	}

	export interface BatchDeleteDetectorPostBody {

		/**
		 * The list of one or more detectors to be deleted.
		 * Required
		 * Minimum items: 1
		 */
		detectors: Array<DeleteDetectorRequest>;
	}
	export interface BatchDeleteDetectorPostBodyFormProperties {
	}
	export function CreateBatchDeleteDetectorPostBodyFormGroup() {
		return new FormGroup<BatchDeleteDetectorPostBodyFormProperties>({
		});

	}

	export interface BatchDisableAlarmPostBody {

		/**
		 * The list of disable action requests. You can specify up to 10 requests per operation.
		 * Required
		 * Minimum items: 1
		 */
		disableActionRequests: Array<DisableAlarmActionRequest>;
	}
	export interface BatchDisableAlarmPostBodyFormProperties {
	}
	export function CreateBatchDisableAlarmPostBodyFormGroup() {
		return new FormGroup<BatchDisableAlarmPostBodyFormProperties>({
		});

	}

	export interface BatchEnableAlarmPostBody {

		/**
		 * The list of enable action requests. You can specify up to 10 requests per operation.
		 * Required
		 * Minimum items: 1
		 */
		enableActionRequests: Array<EnableAlarmActionRequest>;
	}
	export interface BatchEnableAlarmPostBodyFormProperties {
	}
	export function CreateBatchEnableAlarmPostBodyFormGroup() {
		return new FormGroup<BatchEnableAlarmPostBodyFormProperties>({
		});

	}

	export interface BatchPutMessagePostBody {

		/**
		 * The list of messages to send. Each message has the following format: <code>'{ "messageId": "string", "inputName": "string", "payload": "string"}'</code>
		 * Required
		 * Minimum items: 1
		 */
		messages: Array<Message>;
	}
	export interface BatchPutMessagePostBodyFormProperties {
	}
	export function CreateBatchPutMessagePostBodyFormGroup() {
		return new FormGroup<BatchPutMessagePostBodyFormProperties>({
		});

	}

	export interface BatchResetAlarmPostBody {

		/**
		 * The list of reset action requests. You can specify up to 10 requests per operation.
		 * Required
		 * Minimum items: 1
		 */
		resetActionRequests: Array<ResetAlarmActionRequest>;
	}
	export interface BatchResetAlarmPostBodyFormProperties {
	}
	export function CreateBatchResetAlarmPostBodyFormGroup() {
		return new FormGroup<BatchResetAlarmPostBodyFormProperties>({
		});

	}

	export interface BatchSnoozeAlarmPostBody {

		/**
		 * The list of snooze action requests. You can specify up to 10 requests per operation.
		 * Required
		 * Minimum items: 1
		 */
		snoozeActionRequests: Array<SnoozeAlarmActionRequest>;
	}
	export interface BatchSnoozeAlarmPostBodyFormProperties {
	}
	export function CreateBatchSnoozeAlarmPostBodyFormGroup() {
		return new FormGroup<BatchSnoozeAlarmPostBodyFormProperties>({
		});

	}

	export interface BatchUpdateDetectorPostBody {

		/**
		 * The list of detectors (instances) to update, along with the values to update.
		 * Required
		 * Minimum items: 1
		 */
		detectors: Array<UpdateDetectorRequest>;
	}
	export interface BatchUpdateDetectorPostBodyFormProperties {
	}
	export function CreateBatchUpdateDetectorPostBodyFormGroup() {
		return new FormGroup<BatchUpdateDetectorPostBodyFormProperties>({
		});

	}

}

