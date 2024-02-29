import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AiPlanningLevelRequest {
		data?: Array<PlanningLevelDataDto>;

		/** Required */
		method: AiPlanningLevelRequestMethod;
		params?: PlanningLevelInfoRequest;

		/** Required */
		planningLevelId: string;

		/** Required */
		startDate: string;
	}
	export interface AiPlanningLevelRequestFormProperties {

		/** Required */
		method: FormControl<AiPlanningLevelRequestMethod | null | undefined>,

		/** Required */
		planningLevelId: FormControl<string | null | undefined>,

		/** Required */
		startDate: FormControl<string | null | undefined>,
	}
	export function CreateAiPlanningLevelRequestFormGroup() {
		return new FormGroup<AiPlanningLevelRequestFormProperties>({
			method: new FormControl<AiPlanningLevelRequestMethod | null | undefined>(undefined, [Validators.required]),
			planningLevelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PlanningLevelDataDto {
		historyValues?: Array<number>;
		timeSeriesId?: string | null;
	}
	export interface PlanningLevelDataDtoFormProperties {
		timeSeriesId: FormControl<string | null | undefined>,
	}
	export function CreatePlanningLevelDataDtoFormGroup() {
		return new FormGroup<PlanningLevelDataDtoFormProperties>({
			timeSeriesId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AiPlanningLevelRequestMethod { icueMLP = 'icueMLP', icueMLO = 'icueMLO', icueMLN = 'icueMLN' }

	export interface PlanningLevelInfoRequest {

		/** Required */
		discardData: boolean;

		/** Required */
		errorType: PlanningLevelInfoRequestErrorType;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		holdOutPeriod: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		noFcst: number;

		/** Required */
		outlierDetection: boolean;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		periodicity: number;
	}
	export interface PlanningLevelInfoRequestFormProperties {

		/** Required */
		discardData: FormControl<boolean | null | undefined>,

		/** Required */
		errorType: FormControl<PlanningLevelInfoRequestErrorType | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		holdOutPeriod: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		noFcst: FormControl<number | null | undefined>,

		/** Required */
		outlierDetection: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		periodicity: FormControl<number | null | undefined>,
	}
	export function CreatePlanningLevelInfoRequestFormGroup() {
		return new FormGroup<PlanningLevelInfoRequestFormProperties>({
			discardData: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			errorType: new FormControl<PlanningLevelInfoRequestErrorType | null | undefined>(undefined, [Validators.required]),
			holdOutPeriod: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			noFcst: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			outlierDetection: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			periodicity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PlanningLevelInfoRequestErrorType { MeanAbsolutePercentageError = 'MeanAbsolutePercentageError', MeanSquaredError = 'MeanSquaredError', MeanAbsoluteError = 'MeanAbsoluteError', MedianAbsoluteDeviation = 'MedianAbsoluteDeviation', None = 'None' }

	export interface EntityResponse {
		address?: string | null;
		dbConnection?: string | null;
		email?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		isActive?: boolean | null;
		name?: string | null;
		token?: string | null;
	}
	export interface EntityResponseFormProperties {
		address: FormControl<string | null | undefined>,
		dbConnection: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		token: FormControl<string | null | undefined>,
	}
	export function CreateEntityResponseFormGroup() {
		return new FormGroup<EntityResponseFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			dbConnection: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ForecastBottomUpResponse {
		forecastData?: Array<PlanningLevelForecastResultData>;
		hyperparameters?: ForecastHyperparameterResponse;
	}
	export interface ForecastBottomUpResponseFormProperties {
	}
	export function CreateForecastBottomUpResponseFormGroup() {
		return new FormGroup<ForecastBottomUpResponseFormProperties>({
		});

	}

	export interface PlanningLevelForecastResultData {
		date?: string | null;

		/** Type: double */
		value?: number | null;
	}
	export interface PlanningLevelForecastResultDataFormProperties {
		date: FormControl<string | null | undefined>,

		/** Type: double */
		value: FormControl<number | null | undefined>,
	}
	export function CreatePlanningLevelForecastResultDataFormGroup() {
		return new FormGroup<PlanningLevelForecastResultDataFormProperties>({
			date: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ForecastHyperparameterResponse {
		discardData?: boolean | null;
		errorType?: PlanningLevelInfoRequestErrorType | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		holdOutPeriod?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		noFcst?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		periodicity?: number | null;
	}
	export interface ForecastHyperparameterResponseFormProperties {
		discardData: FormControl<boolean | null | undefined>,
		errorType: FormControl<PlanningLevelInfoRequestErrorType | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		holdOutPeriod: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		noFcst: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		periodicity: FormControl<number | null | undefined>,
	}
	export function CreateForecastHyperparameterResponseFormGroup() {
		return new FormGroup<ForecastHyperparameterResponseFormProperties>({
			discardData: new FormControl<boolean | null | undefined>(undefined),
			errorType: new FormControl<PlanningLevelInfoRequestErrorType | null | undefined>(undefined),
			holdOutPeriod: new FormControl<number | null | undefined>(undefined),
			noFcst: new FormControl<number | null | undefined>(undefined),
			periodicity: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ForecastOptimalParametersResponse {

		/** Type: double */
		alpha?: number | null;

		/** Type: double */
		beta?: number | null;

		/** Type: double */
		gamma?: number | null;
	}
	export interface ForecastOptimalParametersResponseFormProperties {

		/** Type: double */
		alpha: FormControl<number | null | undefined>,

		/** Type: double */
		beta: FormControl<number | null | undefined>,

		/** Type: double */
		gamma: FormControl<number | null | undefined>,
	}
	export function CreateForecastOptimalParametersResponseFormGroup() {
		return new FormGroup<ForecastOptimalParametersResponseFormProperties>({
			alpha: new FormControl<number | null | undefined>(undefined),
			beta: new FormControl<number | null | undefined>(undefined),
			gamma: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ForecastPerformanceDataRequest {
		forecastValues?: Array<number>;
		historyValues?: Array<number>;
		timeSeriesId?: string | null;
	}
	export interface ForecastPerformanceDataRequestFormProperties {
		timeSeriesId: FormControl<string | null | undefined>,
	}
	export function CreateForecastPerformanceDataRequestFormGroup() {
		return new FormGroup<ForecastPerformanceDataRequestFormProperties>({
			timeSeriesId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ForecastPerformanceRequest {

		/** Type: double */
		costOfError?: number | null;
		data?: Array<ForecastPerformanceDataRequest>;

		/** Required */
		method: string;
		params?: PlanningLevelInfoRequest;

		/** Required */
		planningLevelId: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rewindTimeFrame: number;

		/** Required */
		startDate: string;
	}
	export interface ForecastPerformanceRequestFormProperties {

		/** Type: double */
		costOfError: FormControl<number | null | undefined>,

		/** Required */
		method: FormControl<string | null | undefined>,

		/** Required */
		planningLevelId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rewindTimeFrame: FormControl<number | null | undefined>,

		/** Required */
		startDate: FormControl<string | null | undefined>,
	}
	export function CreateForecastPerformanceRequestFormGroup() {
		return new FormGroup<ForecastPerformanceRequestFormProperties>({
			costOfError: new FormControl<number | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			planningLevelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rewindTimeFrame: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ForecastResponse {
		hyperparameters?: ForecastHyperparameterResponse;
		timeSeries?: Array<TimeSeriesForecastResponse>;
	}
	export interface ForecastResponseFormProperties {
	}
	export function CreateForecastResponseFormGroup() {
		return new FormGroup<ForecastResponseFormProperties>({
		});

	}

	export interface TimeSeriesForecastResponse {

		/** Type: double */
		error?: number | null;
		forecastData?: Array<PlanningLevelForecastResultData>;
		method?: string | null;
		timeSeriesId?: string | null;
	}
	export interface TimeSeriesForecastResponseFormProperties {

		/** Type: double */
		error: FormControl<number | null | undefined>,
		method: FormControl<string | null | undefined>,
		timeSeriesId: FormControl<string | null | undefined>,
	}
	export function CreateTimeSeriesForecastResponseFormGroup() {
		return new FormGroup<TimeSeriesForecastResponseFormProperties>({
			error: new FormControl<number | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			timeSeriesId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FullDetailsForecastResponse {
		hyperparameters?: ForecastHyperparameterResponse;
		timeSeries?: Array<TimeSeriesFullDetailsResponse>;
	}
	export interface FullDetailsForecastResponseFormProperties {
	}
	export function CreateFullDetailsForecastResponseFormGroup() {
		return new FormGroup<FullDetailsForecastResponseFormProperties>({
		});

	}

	export interface TimeSeriesFullDetailsResponse {

		/** Type: double */
		error?: number | null;
		forecastData?: Array<PlanningLevelForecastResultData>;
		historyData?: Array<PlanningLevelForecastResultData>;
		method?: string | null;
		optimalParameters?: ForecastOptimalParametersResponse;
		outliers?: Array<OutlierResponse>;
		timeSeriesId?: string | null;
	}
	export interface TimeSeriesFullDetailsResponseFormProperties {

		/** Type: double */
		error: FormControl<number | null | undefined>,
		method: FormControl<string | null | undefined>,
		timeSeriesId: FormControl<string | null | undefined>,
	}
	export function CreateTimeSeriesFullDetailsResponseFormGroup() {
		return new FormGroup<TimeSeriesFullDetailsResponseFormProperties>({
			error: new FormControl<number | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			timeSeriesId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OutlierResponse {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		index?: number | null;
		type?: OutlierResponseType | null;

		/** Type: double */
		value?: number | null;
	}
	export interface OutlierResponseFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		index: FormControl<number | null | undefined>,
		type: FormControl<OutlierResponseType | null | undefined>,

		/** Type: double */
		value: FormControl<number | null | undefined>,
	}
	export function CreateOutlierResponseFormGroup() {
		return new FormGroup<OutlierResponseFormProperties>({
			index: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<OutlierResponseType | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum OutlierResponseType { Additive = 'Additive', LevelShift = 'LevelShift', TemporaryChange = 'TemporaryChange', Seasonal = 'Seasonal' }

	export interface HistoryAndForecastResponse {
		hyperparameters?: ForecastHyperparameterResponse;
		timeSeries?: Array<TimeSeriesHistoryAndForecastResponse>;
	}
	export interface HistoryAndForecastResponseFormProperties {
	}
	export function CreateHistoryAndForecastResponseFormGroup() {
		return new FormGroup<HistoryAndForecastResponseFormProperties>({
		});

	}

	export interface TimeSeriesHistoryAndForecastResponse {

		/** Type: double */
		error?: number | null;
		forecastData?: Array<PlanningLevelForecastResultData>;
		historyData?: Array<PlanningLevelForecastResultData>;
		method?: string | null;
		timeSeriesId?: string | null;
	}
	export interface TimeSeriesHistoryAndForecastResponseFormProperties {

		/** Type: double */
		error: FormControl<number | null | undefined>,
		method: FormControl<string | null | undefined>,
		timeSeriesId: FormControl<string | null | undefined>,
	}
	export function CreateTimeSeriesHistoryAndForecastResponseFormGroup() {
		return new FormGroup<TimeSeriesHistoryAndForecastResponseFormProperties>({
			error: new FormControl<number | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			timeSeriesId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HyperparameterModel {

		/** Type: double */
		abcClassificationThresholdA?: number | null;

		/** Type: double */
		abcClassificationThresholdB?: number | null;

		/** Type: double */
		abcClassificationThresholdC?: number | null;
		discardData?: boolean | null;
		errorType?: PlanningLevelInfoRequestErrorType | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		holdOutPeriod?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		noFcst?: number | null;
		outlierDetection?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		periodicity?: number | null;

		/** Type: double */
		xyzClassificationThresholdX?: number | null;

		/** Type: double */
		xyzClassificationThresholdY?: number | null;

		/** Type: double */
		xyzClassificationThresholdZ?: number | null;
	}
	export interface HyperparameterModelFormProperties {

		/** Type: double */
		abcClassificationThresholdA: FormControl<number | null | undefined>,

		/** Type: double */
		abcClassificationThresholdB: FormControl<number | null | undefined>,

		/** Type: double */
		abcClassificationThresholdC: FormControl<number | null | undefined>,
		discardData: FormControl<boolean | null | undefined>,
		errorType: FormControl<PlanningLevelInfoRequestErrorType | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		holdOutPeriod: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		noFcst: FormControl<number | null | undefined>,
		outlierDetection: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		periodicity: FormControl<number | null | undefined>,

		/** Type: double */
		xyzClassificationThresholdX: FormControl<number | null | undefined>,

		/** Type: double */
		xyzClassificationThresholdY: FormControl<number | null | undefined>,

		/** Type: double */
		xyzClassificationThresholdZ: FormControl<number | null | undefined>,
	}
	export function CreateHyperparameterModelFormGroup() {
		return new FormGroup<HyperparameterModelFormProperties>({
			abcClassificationThresholdA: new FormControl<number | null | undefined>(undefined),
			abcClassificationThresholdB: new FormControl<number | null | undefined>(undefined),
			abcClassificationThresholdC: new FormControl<number | null | undefined>(undefined),
			discardData: new FormControl<boolean | null | undefined>(undefined),
			errorType: new FormControl<PlanningLevelInfoRequestErrorType | null | undefined>(undefined),
			holdOutPeriod: new FormControl<number | null | undefined>(undefined),
			noFcst: new FormControl<number | null | undefined>(undefined),
			outlierDetection: new FormControl<boolean | null | undefined>(undefined),
			periodicity: new FormControl<number | null | undefined>(undefined),
			xyzClassificationThresholdX: new FormControl<number | null | undefined>(undefined),
			xyzClassificationThresholdY: new FormControl<number | null | undefined>(undefined),
			xyzClassificationThresholdZ: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface JobResponse {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		jobId?: number | null;
	}
	export interface JobResponseFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		jobId: FormControl<number | null | undefined>,
	}
	export function CreateJobResponseFormGroup() {
		return new FormGroup<JobResponseFormProperties>({
			jobId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface JsonForecastResponse {
		data?: Array<PlanningLevelDataDto>;
		planningLevelId?: string | null;
		startDate?: string | null;
	}
	export interface JsonForecastResponseFormProperties {
		planningLevelId: FormControl<string | null | undefined>,
		startDate: FormControl<string | null | undefined>,
	}
	export function CreateJsonForecastResponseFormGroup() {
		return new FormGroup<JsonForecastResponseFormProperties>({
			planningLevelId: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LifecycleManyToOneRequest {
		data?: Array<PlanningLevelDataDto>;

		/** Required */
		planningLevelId: string;
		ratios?: Array<number>;
	}
	export interface LifecycleManyToOneRequestFormProperties {

		/** Required */
		planningLevelId: FormControl<string | null | undefined>,
	}
	export function CreateLifecycleManyToOneRequestFormGroup() {
		return new FormGroup<LifecycleManyToOneRequestFormProperties>({
			planningLevelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LifecycleOneToOneRequest {
		data?: PlanningLevelDataDto;

		/** Required */
		planningLevelId: string;

		/** Type: double */
		ratio?: number | null;
	}
	export interface LifecycleOneToOneRequestFormProperties {

		/** Required */
		planningLevelId: FormControl<string | null | undefined>,

		/** Type: double */
		ratio: FormControl<number | null | undefined>,
	}
	export function CreateLifecycleOneToOneRequestFormGroup() {
		return new FormGroup<LifecycleOneToOneRequestFormProperties>({
			planningLevelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ratio: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface MethodDto {
		key?: string | null;
		name?: string | null;
		queue?: string | null;
		replyQueue?: string | null;
	}
	export interface MethodDtoFormProperties {
		key: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		queue: FormControl<string | null | undefined>,
		replyQueue: FormControl<string | null | undefined>,
	}
	export function CreateMethodDtoFormGroup() {
		return new FormGroup<MethodDtoFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			queue: new FormControl<string | null | undefined>(undefined),
			replyQueue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NewEntityRequest {
		address?: string | null;
		email?: string | null;
		name?: string | null;
	}
	export interface NewEntityRequestFormProperties {
		address: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateNewEntityRequestFormGroup() {
		return new FormGroup<NewEntityRequestFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NewModelRequest {
		key?: string | null;
		name?: string | null;
	}
	export interface NewModelRequestFormProperties {
		key: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateNewModelRequestFormGroup() {
		return new FormGroup<NewModelRequestFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NewTokenRequest {
		entityToken?: string | null;
		expirationDate?: Date | null;
		userToken?: string | null;
	}
	export interface NewTokenRequestFormProperties {
		entityToken: FormControl<string | null | undefined>,
		expirationDate: FormControl<Date | null | undefined>,
		userToken: FormControl<string | null | undefined>,
	}
	export function CreateNewTokenRequestFormGroup() {
		return new FormGroup<NewTokenRequestFormProperties>({
			entityToken: new FormControl<string | null | undefined>(undefined),
			expirationDate: new FormControl<Date | null | undefined>(undefined),
			userToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NewUserRequest {
		email?: string | null;
		entityToken?: string | null;
		firstname?: string | null;
		isActive?: boolean | null;
		lastname?: string | null;
		phone?: string | null;
	}
	export interface NewUserRequestFormProperties {
		email: FormControl<string | null | undefined>,
		entityToken: FormControl<string | null | undefined>,
		firstname: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		lastname: FormControl<string | null | undefined>,
		phone: FormControl<string | null | undefined>,
	}
	export function CreateNewUserRequestFormGroup() {
		return new FormGroup<NewUserRequestFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			entityToken: new FormControl<string | null | undefined>(undefined),
			firstname: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			lastname: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OptimalParameterResponse {
		hyperparameters?: ForecastHyperparameterResponse;
		timeSeries?: Array<TimeSeriesOptimalParametersResponse>;
	}
	export interface OptimalParameterResponseFormProperties {
	}
	export function CreateOptimalParameterResponseFormGroup() {
		return new FormGroup<OptimalParameterResponseFormProperties>({
		});

	}

	export interface TimeSeriesOptimalParametersResponse {
		method?: string | null;
		optimalParameters?: ForecastOptimalParametersResponse;
		timeSeriesId?: string | null;
	}
	export interface TimeSeriesOptimalParametersResponseFormProperties {
		method: FormControl<string | null | undefined>,
		timeSeriesId: FormControl<string | null | undefined>,
	}
	export function CreateTimeSeriesOptimalParametersResponseFormGroup() {
		return new FormGroup<TimeSeriesOptimalParametersResponseFormProperties>({
			method: new FormControl<string | null | undefined>(undefined),
			timeSeriesId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OutliersRequest {
		data?: Array<PlanningLevelDataDto>;

		/** Required */
		planningLevelId: string;

		/** Required */
		startDate: string;
	}
	export interface OutliersRequestFormProperties {

		/** Required */
		planningLevelId: FormControl<string | null | undefined>,

		/** Required */
		startDate: FormControl<string | null | undefined>,
	}
	export function CreateOutliersRequestFormGroup() {
		return new FormGroup<OutliersRequestFormProperties>({
			planningLevelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PlanningLevelReRunRequest {

		/** Required */
		method: string;
		params?: PlanningLevelInfoRequest;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		planningLevelId: number;
	}
	export interface PlanningLevelReRunRequestFormProperties {

		/** Required */
		method: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		planningLevelId: FormControl<number | null | undefined>,
	}
	export function CreatePlanningLevelReRunRequestFormGroup() {
		return new FormGroup<PlanningLevelReRunRequestFormProperties>({
			method: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			planningLevelId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PlanningLevelRequest {
		data?: Array<PlanningLevelDataDto>;

		/** Required */
		method: string;
		override?: boolean | null;
		params?: PlanningLevelInfoRequest;

		/** Required */
		planningLevelId: string;

		/** Required */
		startDate: string;
	}
	export interface PlanningLevelRequestFormProperties {

		/** Required */
		method: FormControl<string | null | undefined>,
		override: FormControl<boolean | null | undefined>,

		/** Required */
		planningLevelId: FormControl<string | null | undefined>,

		/** Required */
		startDate: FormControl<string | null | undefined>,
	}
	export function CreatePlanningLevelRequestFormGroup() {
		return new FormGroup<PlanningLevelRequestFormProperties>({
			method: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			override: new FormControl<boolean | null | undefined>(undefined),
			planningLevelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PortfolioAbcModel {
		abc12?: string | null;

		/** Type: double */
		abc12Value?: number | null;
		abc6?: string | null;

		/** Type: double */
		abc6Value?: number | null;
		abc9?: string | null;

		/** Type: double */
		abc9Value?: number | null;
		id?: string | null;

		/** Type: double */
		thresholdA?: number | null;

		/** Type: double */
		thresholdB?: number | null;

		/** Type: double */
		thresholdC?: number | null;
	}
	export interface PortfolioAbcModelFormProperties {
		abc12: FormControl<string | null | undefined>,

		/** Type: double */
		abc12Value: FormControl<number | null | undefined>,
		abc6: FormControl<string | null | undefined>,

		/** Type: double */
		abc6Value: FormControl<number | null | undefined>,
		abc9: FormControl<string | null | undefined>,

		/** Type: double */
		abc9Value: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** Type: double */
		thresholdA: FormControl<number | null | undefined>,

		/** Type: double */
		thresholdB: FormControl<number | null | undefined>,

		/** Type: double */
		thresholdC: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioAbcModelFormGroup() {
		return new FormGroup<PortfolioAbcModelFormProperties>({
			abc12: new FormControl<string | null | undefined>(undefined),
			abc12Value: new FormControl<number | null | undefined>(undefined),
			abc6: new FormControl<string | null | undefined>(undefined),
			abc6Value: new FormControl<number | null | undefined>(undefined),
			abc9: new FormControl<string | null | undefined>(undefined),
			abc9Value: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			thresholdA: new FormControl<number | null | undefined>(undefined),
			thresholdB: new FormControl<number | null | undefined>(undefined),
			thresholdC: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PortfolioModel {
		abc12?: string | null;

		/** Type: double */
		abc12Value?: number | null;
		abc6?: string | null;

		/** Type: double */
		abc6Value?: number | null;
		abc9?: string | null;

		/** Type: double */
		abc9Value?: number | null;
		id?: string | null;

		/** Type: double */
		thresholdA?: number | null;

		/** Type: double */
		thresholdB?: number | null;

		/** Type: double */
		thresholdC?: number | null;

		/** Type: double */
		thresholdX?: number | null;

		/** Type: double */
		thresholdY?: number | null;

		/** Type: double */
		thresholdZ?: number | null;
		xyz12?: string | null;

		/** Type: double */
		xyz12Value?: number | null;
		xyz6?: string | null;

		/** Type: double */
		xyz6Value?: number | null;
		xyz9?: string | null;

		/** Type: double */
		xyz9Value?: number | null;
	}
	export interface PortfolioModelFormProperties {
		abc12: FormControl<string | null | undefined>,

		/** Type: double */
		abc12Value: FormControl<number | null | undefined>,
		abc6: FormControl<string | null | undefined>,

		/** Type: double */
		abc6Value: FormControl<number | null | undefined>,
		abc9: FormControl<string | null | undefined>,

		/** Type: double */
		abc9Value: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** Type: double */
		thresholdA: FormControl<number | null | undefined>,

		/** Type: double */
		thresholdB: FormControl<number | null | undefined>,

		/** Type: double */
		thresholdC: FormControl<number | null | undefined>,

		/** Type: double */
		thresholdX: FormControl<number | null | undefined>,

		/** Type: double */
		thresholdY: FormControl<number | null | undefined>,

		/** Type: double */
		thresholdZ: FormControl<number | null | undefined>,
		xyz12: FormControl<string | null | undefined>,

		/** Type: double */
		xyz12Value: FormControl<number | null | undefined>,
		xyz6: FormControl<string | null | undefined>,

		/** Type: double */
		xyz6Value: FormControl<number | null | undefined>,
		xyz9: FormControl<string | null | undefined>,

		/** Type: double */
		xyz9Value: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioModelFormGroup() {
		return new FormGroup<PortfolioModelFormProperties>({
			abc12: new FormControl<string | null | undefined>(undefined),
			abc12Value: new FormControl<number | null | undefined>(undefined),
			abc6: new FormControl<string | null | undefined>(undefined),
			abc6Value: new FormControl<number | null | undefined>(undefined),
			abc9: new FormControl<string | null | undefined>(undefined),
			abc9Value: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			thresholdA: new FormControl<number | null | undefined>(undefined),
			thresholdB: new FormControl<number | null | undefined>(undefined),
			thresholdC: new FormControl<number | null | undefined>(undefined),
			thresholdX: new FormControl<number | null | undefined>(undefined),
			thresholdY: new FormControl<number | null | undefined>(undefined),
			thresholdZ: new FormControl<number | null | undefined>(undefined),
			xyz12: new FormControl<string | null | undefined>(undefined),
			xyz12Value: new FormControl<number | null | undefined>(undefined),
			xyz6: new FormControl<string | null | undefined>(undefined),
			xyz6Value: new FormControl<number | null | undefined>(undefined),
			xyz9: new FormControl<string | null | undefined>(undefined),
			xyz9Value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PortfolioRequest {
		data?: Array<PlanningLevelDataDto>;

		/** Required */
		planningLevelId: string;

		/** Required */
		startDate: string;
	}
	export interface PortfolioRequestFormProperties {

		/** Required */
		planningLevelId: FormControl<string | null | undefined>,

		/** Required */
		startDate: FormControl<string | null | undefined>,
	}
	export function CreatePortfolioRequestFormGroup() {
		return new FormGroup<PortfolioRequestFormProperties>({
			planningLevelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PortfolioXyzModel {
		id?: string | null;

		/** Type: double */
		thresholdX?: number | null;

		/** Type: double */
		thresholdY?: number | null;

		/** Type: double */
		thresholdZ?: number | null;
		xyz12?: string | null;

		/** Type: double */
		xyz12Value?: number | null;
		xyz6?: string | null;

		/** Type: double */
		xyz6Value?: number | null;
		xyz9?: string | null;

		/** Type: double */
		xyz9Value?: number | null;
	}
	export interface PortfolioXyzModelFormProperties {
		id: FormControl<string | null | undefined>,

		/** Type: double */
		thresholdX: FormControl<number | null | undefined>,

		/** Type: double */
		thresholdY: FormControl<number | null | undefined>,

		/** Type: double */
		thresholdZ: FormControl<number | null | undefined>,
		xyz12: FormControl<string | null | undefined>,

		/** Type: double */
		xyz12Value: FormControl<number | null | undefined>,
		xyz6: FormControl<string | null | undefined>,

		/** Type: double */
		xyz6Value: FormControl<number | null | undefined>,
		xyz9: FormControl<string | null | undefined>,

		/** Type: double */
		xyz9Value: FormControl<number | null | undefined>,
	}
	export function CreatePortfolioXyzModelFormGroup() {
		return new FormGroup<PortfolioXyzModelFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			thresholdX: new FormControl<number | null | undefined>(undefined),
			thresholdY: new FormControl<number | null | undefined>(undefined),
			thresholdZ: new FormControl<number | null | undefined>(undefined),
			xyz12: new FormControl<string | null | undefined>(undefined),
			xyz12Value: new FormControl<number | null | undefined>(undefined),
			xyz6: new FormControl<string | null | undefined>(undefined),
			xyz6Value: new FormControl<number | null | undefined>(undefined),
			xyz9: new FormControl<string | null | undefined>(undefined),
			xyz9Value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RewindHyperparameterResponse {

		/** Type: double */
		costOfError?: number | null;
		discardData?: boolean | null;
		errorType?: PlanningLevelInfoRequestErrorType | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		holdOutPeriod?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		noFcst?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		periodicity?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		rewindTimeFrame?: number | null;
	}
	export interface RewindHyperparameterResponseFormProperties {

		/** Type: double */
		costOfError: FormControl<number | null | undefined>,
		discardData: FormControl<boolean | null | undefined>,
		errorType: FormControl<PlanningLevelInfoRequestErrorType | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		holdOutPeriod: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		noFcst: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		periodicity: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		rewindTimeFrame: FormControl<number | null | undefined>,
	}
	export function CreateRewindHyperparameterResponseFormGroup() {
		return new FormGroup<RewindHyperparameterResponseFormProperties>({
			costOfError: new FormControl<number | null | undefined>(undefined),
			discardData: new FormControl<boolean | null | undefined>(undefined),
			errorType: new FormControl<PlanningLevelInfoRequestErrorType | null | undefined>(undefined),
			holdOutPeriod: new FormControl<number | null | undefined>(undefined),
			noFcst: new FormControl<number | null | undefined>(undefined),
			periodicity: new FormControl<number | null | undefined>(undefined),
			rewindTimeFrame: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RewindResponse {
		hyperparameters?: RewindHyperparameterResponse;
		timeSeries?: Array<RewindTimeSeriesResponse>;

		/** Type: double */
		totalCost?: number | null;
	}
	export interface RewindResponseFormProperties {

		/** Type: double */
		totalCost: FormControl<number | null | undefined>,
	}
	export function CreateRewindResponseFormGroup() {
		return new FormGroup<RewindResponseFormProperties>({
			totalCost: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RewindTimeSeriesResponse {

		/** Type: double */
		customerError?: number | null;

		/** Type: double */
		errorDiff?: number | null;

		/** Type: double */
		icueError?: number | null;
		timeSeries?: string | null;

		/** Type: double */
		totalCost?: number | null;
		useIcue?: boolean | null;
	}
	export interface RewindTimeSeriesResponseFormProperties {

		/** Type: double */
		customerError: FormControl<number | null | undefined>,

		/** Type: double */
		errorDiff: FormControl<number | null | undefined>,

		/** Type: double */
		icueError: FormControl<number | null | undefined>,
		timeSeries: FormControl<string | null | undefined>,

		/** Type: double */
		totalCost: FormControl<number | null | undefined>,
		useIcue: FormControl<boolean | null | undefined>,
	}
	export function CreateRewindTimeSeriesResponseFormGroup() {
		return new FormGroup<RewindTimeSeriesResponseFormProperties>({
			customerError: new FormControl<number | null | undefined>(undefined),
			errorDiff: new FormControl<number | null | undefined>(undefined),
			icueError: new FormControl<number | null | undefined>(undefined),
			timeSeries: new FormControl<string | null | undefined>(undefined),
			totalCost: new FormControl<number | null | undefined>(undefined),
			useIcue: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface TimeSeriesOutliersResponse {
		outliers?: Array<OutlierResponse>;
		timeSeriesId?: string | null;
	}
	export interface TimeSeriesOutliersResponseFormProperties {
		timeSeriesId: FormControl<string | null | undefined>,
	}
	export function CreateTimeSeriesOutliersResponseFormGroup() {
		return new FormGroup<TimeSeriesOutliersResponseFormProperties>({
			timeSeriesId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ToggleRequest {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		isActive?: boolean | null;
	}
	export interface ToggleRequestFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
	}
	export function CreateToggleRequestFormGroup() {
		return new FormGroup<ToggleRequestFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ToggleUserRequest {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		entityId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		isActive?: boolean | null;
	}
	export interface ToggleUserRequestFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		entityId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
	}
	export function CreateToggleUserRequestFormGroup() {
		return new FormGroup<ToggleUserRequestFormProperties>({
			entityId: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get all organizations
		 * This is an iCUE only endpoint or Enterprise feature.
		 * Get administration/entity
		 * @return {Array<EntityResponse>} Success
		 */
		AdministrationEntityGet(headersHandler?: () => HttpHeaders): Observable<Array<EntityResponse>> {
			return this.http.get<Array<EntityResponse>>(this.baseUri + 'administration/entity', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create organization
		 * This is an iCUE only endpoint or Enterprise feature.
		 * Post administration/entity
		 * @return {string} Success
		 */
		AdministrationEntityPost(requestBody: NewEntityRequest, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.post(this.baseUri + 'administration/entity', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }),  responseType: 'text' });
		}

		/**
		 * Pause organization
		 * This is an iCUE only endpoint or Enterprise feature.
		 * Put administration/entity
		 * @return {void} Success
		 */
		AdministrationEntityPut(requestBody: ToggleRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'administration/entity', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete organization
		 * This is an iCUE only endpoint or Enterprise feature.
		 * Delete administration/entity/{id}
		 * @param {number} id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Success
		 */
		AdministrationEntity_idDelete(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'administration/entity/' + id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all common Models
		 * Returns models that are common for all Organizations
		 * Get administration/model
		 * @return {Array<MethodDto>} Success
		 */
		AdministrationModelGet(headersHandler?: () => HttpHeaders): Observable<Array<MethodDto>> {
			return this.http.get<Array<MethodDto>>(this.baseUri + 'administration/model', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Register new forecasting model
		 * Register new forecasting model for all organziations
		 * Post administration/model
		 * @return {MethodDto} Success
		 */
		AdministrationModelPost(requestBody: NewModelRequest, headersHandler?: () => HttpHeaders): Observable<MethodDto> {
			return this.http.post<MethodDto>(this.baseUri + 'administration/model', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get Models for Organization
		 * Returns models registered for Organization
		 * Get administration/model/{entityId}
		 * @param {number} entityId Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<MethodDto>} Success
		 */
		AdministrationModel_entityIdGet(entityId: number, headersHandler?: () => HttpHeaders): Observable<Array<MethodDto>> {
			return this.http.get<Array<MethodDto>>(this.baseUri + 'administration/model/' + entityId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Register new forecasting model
		 * Register new forecasting model for single organziation
		 * Post administration/model/{entityId}
		 * @param {number} entityId Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {MethodDto} Success
		 */
		AdministrationModel_entityIdPost(entityId: number, requestBody: NewModelRequest, headersHandler?: () => HttpHeaders): Observable<MethodDto> {
			return this.http.post<MethodDto>(this.baseUri + 'administration/model/' + entityId, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lock planning level
		 * Lock planning level against modification. This is an Enterprise feature.
		 * Post administration/planning-level/lock
		 * @return {void} Success
		 */
		AdministrationPlanning_levelLockPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'administration/planning-level/lock', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete planning level
		 * Delete planning level. This is an Enterprise feature.
		 * Delete administration/planning-level/{entityId}/{id}
		 * @param {number} entityId Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Success
		 */
		AdministrationPlanning_level_entityId_idDelete(entityId: number, id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'administration/planning-level/' + entityId + '/' + id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Issue a token
		 * This is an iCUE only endpoint.
		 * Post administration/token
		 * @return {string} Success
		 */
		AdministrationTokenPost(requestBody: NewTokenRequest, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.post(this.baseUri + 'administration/token', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }),  responseType: 'text' });
		}

		/**
		 * Create user
		 * Create new user for entity/organization. This can be done by entity administrator.
		 * Post administration/user
		 * @return {string} Success
		 */
		AdministrationUserPost(requestBody: NewUserRequest, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.post(this.baseUri + 'administration/user', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }),  responseType: 'text' });
		}

		/**
		 * Update user
		 * Update user
		 * Put administration/user
		 * @return {void} Success
		 */
		AdministrationUserPut(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'administration/user', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lock user
		 * After lock user won't be able to use iCUE API endpoints.
		 * Put administration/user/lock
		 * @return {void} Success
		 */
		AdministrationUserLockPut(requestBody: ToggleUserRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'administration/user/lock', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all users
		 * Get all users
		 * Get administration/user/{entityId}
		 * @param {number} entityId Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Success
		 */
		AdministrationUser_entityIdGet(entityId: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'administration/user/' + entityId, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete user
		 * Delete user
		 * Delete administration/user/{entityId}/{id}
		 * @param {number} entityId Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Success
		 */
		AdministrationUser_entityId_idDelete(entityId: number, id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'administration/user/' + entityId + '/' + id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Forecasts only, for faster results
		 * To support maximum operation and integration speed, this endpoint only returns the calculated forecast.
		 * Post forecast
		 * @return {ForecastResponse} Success
		 */
		ForecastPost(requestBody: PlanningLevelRequest, headersHandler?: () => HttpHeaders): Observable<ForecastResponse> {
			return this.http.post<ForecastResponse>(this.baseUri + 'forecast', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Forecast utilizing advanced machine learning models
		 * Forecast AI is utilizing advanced machine learning models. Please be mindful of enhanced execution times (~1-2s per timeseries).
		 * Post forecast/AI
		 * @return {JobResponse} Success
		 */
		ForecastAIPost(requestBody: AiPlanningLevelRequest, headersHandler?: () => HttpHeaders): Observable<JobResponse> {
			return this.http.post<JobResponse>(this.baseUri + 'forecast/AI', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * History and forecast utilizing advanced machine learning models
		 * History and forecast utilizing advanced machine learning models. Please be mindful of enhanced execution times (~1-2s per timeseries).
		 * Post forecast/AI/history-and-forecast
		 * @return {JobResponse} Success
		 */
		ForecastAIHistory_and_forecastPost(requestBody: AiPlanningLevelRequest, headersHandler?: () => HttpHeaders): Observable<JobResponse> {
			return this.http.post<JobResponse>(this.baseUri + 'forecast/AI/history-and-forecast', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Bottom up forecasting
		 * Calculate forecast by timeseries and sum results up to establish forecast for top level timeseries.
		 * Post forecast/forecast-bottom-up
		 * @return {ForecastBottomUpResponse} Success
		 */
		ForecastForecast_bottom_upPost(requestBody: PlanningLevelRequest, headersHandler?: () => HttpHeaders): Observable<ForecastBottomUpResponse> {
			return this.http.post<ForecastBottomUpResponse>(this.baseUri + 'forecast/forecast-bottom-up', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Top down forecasting
		 * Calculate forecast based on sum of of lower level timeseries and distribute forecast down based on ratios. Great feature for planning levels with dynamic timeseries.
		 * Post forecast/forecast-top-down
		 * @return {void} Success
		 */
		ForecastForecast_top_downPost(requestBody: PlanningLevelRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'forecast/forecast-top-down', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Full forecast result details, including error, trend seasonality and outlier
		 * Response provides full forecast result details, including error, trend seasonality and outlier. Great for advanced analysis.
		 * Post forecast/full-detail
		 * @return {FullDetailsForecastResponse} Success
		 */
		ForecastFull_detailPost(requestBody: PlanningLevelRequest, headersHandler?: () => HttpHeaders): Observable<FullDetailsForecastResponse> {
			return this.http.post<FullDetailsForecastResponse>(this.baseUri + 'forecast/full-detail', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * History and forecast for fast timeseries view
		 * Reponse provides history and forecast per timeseries. Great for visualizing results.
		 * Post forecast/history-and-forecast
		 * @return {HistoryAndForecastResponse} Success
		 */
		ForecastHistory_and_forecastPost(requestBody: PlanningLevelRequest, headersHandler?: () => HttpHeaders): Observable<HistoryAndForecastResponse> {
			return this.http.post<HistoryAndForecastResponse>(this.baseUri + 'forecast/history-and-forecast', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get optimal parameter per method
		 * Use the optimal parameter sets created by iCUE to set the method parameters of your internal planning system.
		 * Post forecast/optimal-parameter
		 * @return {OptimalParameterResponse} Success
		 */
		ForecastOptimal_parameterPost(requestBody: PlanningLevelRequest, headersHandler?: () => HttpHeaders): Observable<OptimalParameterResponse> {
			return this.http.post<OptimalParameterResponse>(this.baseUri + 'forecast/optimal-parameter', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Rerun previously uploaded planning level
		 * Rerun previously uploaded planning level.
		 * Post forecast/rerun
		 * @return {ForecastResponse} Success
		 */
		ForecastRerunPost(requestBody: PlanningLevelReRunRequest, headersHandler?: () => HttpHeaders): Observable<ForecastResponse> {
			return this.http.post<ForecastResponse>(this.baseUri + 'forecast/rerun', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Forecast result
		 * Get result for forecast job
		 * Get forecast/result/{jobId}
		 * @param {number} jobId Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Success
		 */
		ForecastResult_jobIdGet(jobId: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'forecast/result/' + jobId, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Forecast status
		 * Get status for forecast job
		 * Get forecast/status/{jobId}
		 * @param {number} jobId Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Success
		 */
		ForecastStatus_jobIdGet(jobId: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'forecast/status/' + jobId, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get hyperparameters
		 * Get entity global hyperparameters.
		 * Get hyperparameter
		 * @return {HyperparameterModel} Success
		 */
		HyperparameterGet(headersHandler?: () => HttpHeaders): Observable<HyperparameterModel> {
			return this.http.get<HyperparameterModel>(this.baseUri + 'hyperparameter', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Set hyperparameters
		 * Set entity global hyperparameters. Hyperparameters can be overwritten by user and planning level (add to JSON body).
		 * Post hyperparameter
		 * @return {void} Success
		 */
		HyperparameterPost(requestBody: HyperparameterModel, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'hyperparameter', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Calculate Amazon Inventory Performance Index (IPI)
		 * Calculate Amazon Inventory Performance Index (IPI)
		 * Post inventory/amazon-ipi
		 * @return {void} Success
		 */
		InventoryAmazon_ipiPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'inventory/amazon-ipi', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Carrying Cost
		 * Carrying Cost
		 * Post inventory/caryying-cost
		 * @return {void} Success
		 */
		InventoryCaryying_costPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'inventory/caryying-cost', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Calculate economic order quantity
		 * Calculate economic order quantity
		 * Post inventory/eoq
		 * @return {void} Success
		 */
		InventoryEoqPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'inventory/eoq', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Calculate fill rate
		 * Calculate fill rate
		 * Post inventory/fill-rate
		 * @return {void} Success
		 */
		InventoryFill_ratePost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'inventory/fill-rate', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Calculate financial impact of forecast accuracy
		 * Calculate financial impact of forecast accuracy
		 * Post inventory/financial-imapct-forecast-accuracy
		 * @return {void} Success
		 */
		InventoryFinancial_imapct_forecast_accuracyPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'inventory/financial-imapct-forecast-accuracy', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Inventroy Turn-over
		 * Inventroy Turn-over
		 * Post inventory/inventory-turnover
		 * @return {void} Success
		 */
		InventoryInventory_turnoverPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'inventory/inventory-turnover', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Calculate lead time demand
		 * Calculate lead time demand
		 * Post inventory/ltd
		 * @return {void} Success
		 */
		InventoryLtdPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'inventory/ltd', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Calculate minimum order quantity
		 * Calculate minimum order quantity
		 * Post inventory/moq
		 * @return {void} Success
		 */
		InventoryMoqPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'inventory/moq', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Calculate optimal service level
		 * Calculate optimal service level
		 * Post inventory/optimal-service-level
		 * @return {void} Success
		 */
		InventoryOptimal_service_levelPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'inventory/optimal-service-level', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Re-order Point
		 * Re-order Point
		 * Post inventory/reorder-point
		 * @return {void} Success
		 */
		InventoryReorder_pointPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'inventory/reorder-point', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Safety Stock
		 * Safety Stock
		 * Post inventory/safety-stock
		 * @return {void} Success
		 */
		InventorySafety_stockPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'inventory/safety-stock', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Calculate service level
		 * Calculate service level
		 * Post inventory/service-level
		 * @return {void} Success
		 */
		InventoryService_levelPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'inventory/service-level', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Calculate inventory turns
		 * Calculate inventory turns
		 * Post inventory/turns
		 * @return {void} Success
		 */
		InventoryTurnsPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'inventory/turns', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Map from old product to new product to create artifical history
		 * Supports the creation of artificial startup history for new products, based on a flexible mapping of old to new. This is an Enterprise feature.
		 * Post lifecycle/many-to-one
		 * @return {PlanningLevelDataDto} Success
		 */
		LifecycleMany_to_onePost(requestBody: LifecycleManyToOneRequest, headersHandler?: () => HttpHeaders): Observable<PlanningLevelDataDto> {
			return this.http.post<PlanningLevelDataDto>(this.baseUri + 'lifecycle/many-to-one', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Map from old product to new product to create artifical history
		 * Supports the creation of artificial startup history for new products, based on a flexible mapping of old to new. This is an Enterprise feature.
		 * Post lifecycle/one-to-one
		 * @return {PlanningLevelDataDto} Success
		 */
		LifecycleOne_to_onePost(requestBody: LifecycleOneToOneRequest, headersHandler?: () => HttpHeaders): Observable<PlanningLevelDataDto> {
			return this.http.post<PlanningLevelDataDto>(this.baseUri + 'lifecycle/one-to-one', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get outlier
		 * Identify outliers (single and repetitive spikes, seasonality, masked outliers, trend and level jumps, amongst other topics) and use for cleansing of the history stream prior to forecast claculation. Depending on math model used, this approach often improves results dramatically, as it removes disturbances.
		 * Post outlier
		 * @return {Array<TimeSeriesOutliersResponse>} Success
		 */
		OutlierPost(requestBody: OutliersRequest, headersHandler?: () => HttpHeaders): Observable<Array<TimeSeriesOutliersResponse>> {
			return this.http.post<Array<TimeSeriesOutliersResponse>>(this.baseUri + 'outlier', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * ABCxyz Analysis
		 * Calculate and retrieve results of ABC (pareto analysis) and xyz (Coefficient of variation) per timeseries and planning level. This analysis is a powerful means to estbalish a proper planning cadence, best accuracy messures and optimal hyperparameters for the organization. It provides a balanced and actionable overview of the entire product portfolio.
		 * Post portfolio
		 * @return {Array<PortfolioModel>} Success
		 */
		PortfolioPost(requestBody: PortfolioRequest, headersHandler?: () => HttpHeaders): Observable<Array<PortfolioModel>> {
			return this.http.post<Array<PortfolioModel>>(this.baseUri + 'portfolio', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * ABC Analysis
		 * Calculate and retrieve results of ABC (pareto analysis) per timeseries and planning level.
		 * Post portfolio/abc
		 * @return {Array<PortfolioAbcModel>} Success
		 */
		PortfolioAbcPost(requestBody: PortfolioRequest, headersHandler?: () => HttpHeaders): Observable<Array<PortfolioAbcModel>> {
			return this.http.post<Array<PortfolioAbcModel>>(this.baseUri + 'portfolio/abc', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Planning level rewind to calculate and measure performance potential (internal versus iCUE).
		 * Planning level rewind to calculate and measure performance potential (internal versus iCUE).
		 * Post portfolio/forecast-performance-rewind
		 * @return {RewindResponse} Success
		 */
		PortfolioForecast_performance_rewindPost(requestBody: ForecastPerformanceRequest, headersHandler?: () => HttpHeaders): Observable<RewindResponse> {
			return this.http.post<RewindResponse>(this.baseUri + 'portfolio/forecast-performance-rewind', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * xyz Analysis
		 * Calculate and retrieve results of xyz (Coefficient of variation) per timeseries and planning level.
		 * Post portfolio/xyz
		 * @return {Array<PortfolioXyzModel>} Success
		 */
		PortfolioXyzPost(requestBody: PortfolioRequest, headersHandler?: () => HttpHeaders): Observable<Array<PortfolioXyzModel>> {
			return this.http.post<Array<PortfolioXyzModel>>(this.baseUri + 'portfolio/xyz', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Bundle pricing
		 * Bundle pricing
		 * Post pricing/bundle-pricing
		 * @return {void} Success
		 */
		PricingBundle_pricingPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'pricing/bundle-pricing', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post pricing/competitive-pricing
		 * @return {void} Success
		 */
		PricingCompetitive_pricingPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'pricing/competitive-pricing', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post pricing/cost-plus-pricing
		 * @return {void} Success
		 */
		PricingCost_plus_pricingPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'pricing/cost-plus-pricing', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post pricing/decoy-pricing
		 * @return {void} Success
		 */
		PricingDecoy_pricingPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'pricing/decoy-pricing', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post pricing/odd-pricing
		 * @return {void} Success
		 */
		PricingOdd_pricingPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'pricing/odd-pricing', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post pricing/penetration-pricing
		 * @return {void} Success
		 */
		PricingPenetration_pricingPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'pricing/penetration-pricing', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post pricing/price-elasticity-of-demand
		 * @return {void} Success
		 */
		PricingPrice_elasticity_of_demandPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'pricing/price-elasticity-of-demand', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * SKU rationalization report
		 * SKU rationalization report
		 * Get report/performance/sku-rationalization/{planningLevelId}
		 * @param {number} planningLevelId Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<PortfolioModel>} Success
		 */
		ReportPerformanceSku_rationalization_planningLevelIdGet(planningLevelId: number, headersHandler?: () => HttpHeaders): Observable<Array<PortfolioModel>> {
			return this.http.get<Array<PortfolioModel>>(this.baseUri + 'report/performance/sku-rationalization/' + planningLevelId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Month over month performance per planning level
		 * Month over month performance per planning level
		 * Get report/performance/{planningLevelId}
		 * @return {void} Success
		 */
		ReportPerformance_planningLevelIdGet(planningLevelId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'report/performance/' + (planningLevelId == null ? '' : encodeURIComponent(planningLevelId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get list of plannign levels by organization
		 * Get list of plannign levels by organization
		 * Get report/planning-level/organization
		 * @return {void} Success
		 */
		ReportPlanning_levelOrganizationGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'report/planning-level/organization', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get list of plannign levels by user
		 * Get list of plannign levels by user
		 * Get report/planning-level/user
		 * @return {void} Success
		 */
		ReportPlanning_levelUserGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'report/planning-level/user', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get usage statistics per user
		 * Get usage statistics per user
		 * Get report/user
		 * @return {void} Success
		 */
		ReportUserGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'report/user', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

}

