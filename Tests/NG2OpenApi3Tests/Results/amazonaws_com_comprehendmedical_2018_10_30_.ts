import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface DescribeEntitiesDetectionV2JobResponse {
		ComprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties;
	}
	export interface DescribeEntitiesDetectionV2JobResponseFormProperties {
	}
	export function CreateDescribeEntitiesDetectionV2JobResponseFormGroup() {
		return new FormGroup<DescribeEntitiesDetectionV2JobResponseFormProperties>({
		});

	}


	/** Provides information about a detection job. */
	export interface ComprehendMedicalAsyncJobProperties {
		JobId?: string;
		JobName?: string;
		JobStatus?: JobStatus;
		Message?: string;
		SubmitTime?: Date;
		EndTime?: Date;
		ExpirationTime?: Date;
		InputDataConfig?: InputDataConfig;
		OutputDataConfig?: OutputDataConfig;
		LanguageCode?: LanguageCode;
		DataAccessRoleArn?: string;
		ManifestFilePath?: string;
		KMSKey?: string;
		ModelVersion?: string;
	}

	/** Provides information about a detection job. */
	export interface ComprehendMedicalAsyncJobPropertiesFormProperties {
		JobId: FormControl<string | null | undefined>,
		JobName: FormControl<string | null | undefined>,
		JobStatus: FormControl<JobStatus | null | undefined>,
		Message: FormControl<string | null | undefined>,
		SubmitTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		ExpirationTime: FormControl<Date | null | undefined>,
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		DataAccessRoleArn: FormControl<string | null | undefined>,
		ManifestFilePath: FormControl<string | null | undefined>,
		KMSKey: FormControl<string | null | undefined>,
		ModelVersion: FormControl<string | null | undefined>,
	}
	export function CreateComprehendMedicalAsyncJobPropertiesFormGroup() {
		return new FormGroup<ComprehendMedicalAsyncJobPropertiesFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			JobName: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			SubmitTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			ExpirationTime: new FormControl<Date | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined),
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			ManifestFilePath: new FormControl<string | null | undefined>(undefined),
			KMSKey: new FormControl<string | null | undefined>(undefined),
			ModelVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum JobStatus { SUBMITTED = 'SUBMITTED', IN_PROGRESS = 'IN_PROGRESS', COMPLETED = 'COMPLETED', PARTIAL_SUCCESS = 'PARTIAL_SUCCESS', FAILED = 'FAILED', STOP_REQUESTED = 'STOP_REQUESTED', STOPPED = 'STOPPED' }


	/** The input properties for an entities detection job. This includes the name of the S3 bucket and the path to the files to be analyzed.  */
	export interface InputDataConfig {

		/** Required */
		S3Bucket: string;
		S3Key?: string;
	}

	/** The input properties for an entities detection job. This includes the name of the S3 bucket and the path to the files to be analyzed.  */
	export interface InputDataConfigFormProperties {

		/** Required */
		S3Bucket: FormControl<string | null | undefined>,
		S3Key: FormControl<string | null | undefined>,
	}
	export function CreateInputDataConfigFormGroup() {
		return new FormGroup<InputDataConfigFormProperties>({
			S3Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			S3Key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The output properties for a detection job. */
	export interface OutputDataConfig {

		/** Required */
		S3Bucket: string;
		S3Key?: string;
	}

	/** The output properties for a detection job. */
	export interface OutputDataConfigFormProperties {

		/** Required */
		S3Bucket: FormControl<string | null | undefined>,
		S3Key: FormControl<string | null | undefined>,
	}
	export function CreateOutputDataConfigFormGroup() {
		return new FormGroup<OutputDataConfigFormProperties>({
			S3Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			S3Key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LanguageCode { en = 'en' }

	export interface DescribeEntitiesDetectionV2JobRequest {

		/** Required */
		JobId: string;
	}
	export interface DescribeEntitiesDetectionV2JobRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEntitiesDetectionV2JobRequestFormGroup() {
		return new FormGroup<DescribeEntitiesDetectionV2JobRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface TooManyRequestsException {
	}
	export interface TooManyRequestsExceptionFormProperties {
	}
	export function CreateTooManyRequestsExceptionFormGroup() {
		return new FormGroup<TooManyRequestsExceptionFormProperties>({
		});

	}

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface DescribeICD10CMInferenceJobResponse {
		ComprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties;
	}
	export interface DescribeICD10CMInferenceJobResponseFormProperties {
	}
	export function CreateDescribeICD10CMInferenceJobResponseFormGroup() {
		return new FormGroup<DescribeICD10CMInferenceJobResponseFormProperties>({
		});

	}

	export interface DescribeICD10CMInferenceJobRequest {

		/** Required */
		JobId: string;
	}
	export interface DescribeICD10CMInferenceJobRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeICD10CMInferenceJobRequestFormGroup() {
		return new FormGroup<DescribeICD10CMInferenceJobRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribePHIDetectionJobResponse {
		ComprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties;
	}
	export interface DescribePHIDetectionJobResponseFormProperties {
	}
	export function CreateDescribePHIDetectionJobResponseFormGroup() {
		return new FormGroup<DescribePHIDetectionJobResponseFormProperties>({
		});

	}

	export interface DescribePHIDetectionJobRequest {

		/** Required */
		JobId: string;
	}
	export interface DescribePHIDetectionJobRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateDescribePHIDetectionJobRequestFormGroup() {
		return new FormGroup<DescribePHIDetectionJobRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeRxNormInferenceJobResponse {
		ComprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties;
	}
	export interface DescribeRxNormInferenceJobResponseFormProperties {
	}
	export function CreateDescribeRxNormInferenceJobResponseFormGroup() {
		return new FormGroup<DescribeRxNormInferenceJobResponseFormProperties>({
		});

	}

	export interface DescribeRxNormInferenceJobRequest {

		/** Required */
		JobId: string;
	}
	export interface DescribeRxNormInferenceJobRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRxNormInferenceJobRequestFormGroup() {
		return new FormGroup<DescribeRxNormInferenceJobRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeSNOMEDCTInferenceJobResponse {

		/** Provides information about a detection job. */
		ComprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties;
	}
	export interface DescribeSNOMEDCTInferenceJobResponseFormProperties {
	}
	export function CreateDescribeSNOMEDCTInferenceJobResponseFormGroup() {
		return new FormGroup<DescribeSNOMEDCTInferenceJobResponseFormProperties>({
		});

	}

	export interface DescribeSNOMEDCTInferenceJobRequest {

		/** Required */
		JobId: string;
	}
	export interface DescribeSNOMEDCTInferenceJobRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSNOMEDCTInferenceJobRequestFormGroup() {
		return new FormGroup<DescribeSNOMEDCTInferenceJobRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DetectEntitiesResponse {

		/** Required */
		Entities: Array<Entity>;
		UnmappedAttributes?: Array<UnmappedAttribute>;
		PaginationToken?: string;

		/** Required */
		ModelVersion: string;
	}
	export interface DetectEntitiesResponseFormProperties {
		PaginationToken: FormControl<string | null | undefined>,

		/** Required */
		ModelVersion: FormControl<string | null | undefined>,
	}
	export function CreateDetectEntitiesResponseFormGroup() {
		return new FormGroup<DetectEntitiesResponseFormProperties>({
			PaginationToken: new FormControl<string | null | undefined>(undefined),
			ModelVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  Provides information about an extracted medical entity. */
	export interface Entity {
		Id?: number | null;
		BeginOffset?: number | null;
		EndOffset?: number | null;
		Score?: number;
		Text?: string;
		Category?: EntityType;
		Type?: EntitySubType;
		Traits?: Array<Trait>;
		Attributes?: Array<Attribute>;
	}

	/**  Provides information about an extracted medical entity. */
	export interface EntityFormProperties {
		Id: FormControl<number | null | undefined>,
		BeginOffset: FormControl<number | null | undefined>,
		EndOffset: FormControl<number | null | undefined>,
		Score: FormControl<number | null | undefined>,
		Text: FormControl<string | null | undefined>,
		Category: FormControl<EntityType | null | undefined>,
		Type: FormControl<EntitySubType | null | undefined>,
	}
	export function CreateEntityFormGroup() {
		return new FormGroup<EntityFormProperties>({
			Id: new FormControl<number | null | undefined>(undefined),
			BeginOffset: new FormControl<number | null | undefined>(undefined),
			EndOffset: new FormControl<number | null | undefined>(undefined),
			Score: new FormControl<number | null | undefined>(undefined),
			Text: new FormControl<string | null | undefined>(undefined),
			Category: new FormControl<EntityType | null | undefined>(undefined),
			Type: new FormControl<EntitySubType | null | undefined>(undefined),
		});

	}

	export enum EntityType { MEDICATION = 'MEDICATION', MEDICAL_CONDITION = 'MEDICAL_CONDITION', PROTECTED_HEALTH_INFORMATION = 'PROTECTED_HEALTH_INFORMATION', TEST_TREATMENT_PROCEDURE = 'TEST_TREATMENT_PROCEDURE', ANATOMY = 'ANATOMY', TIME_EXPRESSION = 'TIME_EXPRESSION', BEHAVIORAL_ENVIRONMENTAL_SOCIAL = 'BEHAVIORAL_ENVIRONMENTAL_SOCIAL' }

	export enum EntitySubType { NAME = 'NAME', DX_NAME = 'DX_NAME', DOSAGE = 'DOSAGE', ROUTE_OR_MODE = 'ROUTE_OR_MODE', FORM = 'FORM', FREQUENCY = 'FREQUENCY', DURATION = 'DURATION', GENERIC_NAME = 'GENERIC_NAME', BRAND_NAME = 'BRAND_NAME', STRENGTH = 'STRENGTH', RATE = 'RATE', ACUITY = 'ACUITY', TEST_NAME = 'TEST_NAME', TEST_VALUE = 'TEST_VALUE', TEST_UNITS = 'TEST_UNITS', TEST_UNIT = 'TEST_UNIT', PROCEDURE_NAME = 'PROCEDURE_NAME', TREATMENT_NAME = 'TREATMENT_NAME', DATE = 'DATE', AGE = 'AGE', CONTACT_POINT = 'CONTACT_POINT', PHONE_OR_FAX = 'PHONE_OR_FAX', EMAIL = 'EMAIL', IDENTIFIER = 'IDENTIFIER', ID = 'ID', URL = 'URL', ADDRESS = 'ADDRESS', PROFESSION = 'PROFESSION', SYSTEM_ORGAN_SITE = 'SYSTEM_ORGAN_SITE', DIRECTION = 'DIRECTION', QUALITY = 'QUALITY', QUANTITY = 'QUANTITY', TIME_EXPRESSION = 'TIME_EXPRESSION', TIME_TO_MEDICATION_NAME = 'TIME_TO_MEDICATION_NAME', TIME_TO_DX_NAME = 'TIME_TO_DX_NAME', TIME_TO_TEST_NAME = 'TIME_TO_TEST_NAME', TIME_TO_PROCEDURE_NAME = 'TIME_TO_PROCEDURE_NAME', TIME_TO_TREATMENT_NAME = 'TIME_TO_TREATMENT_NAME', AMOUNT = 'AMOUNT', GENDER = 'GENDER', RACE_ETHNICITY = 'RACE_ETHNICITY', ALLERGIES = 'ALLERGIES', TOBACCO_USE = 'TOBACCO_USE', ALCOHOL_CONSUMPTION = 'ALCOHOL_CONSUMPTION', REC_DRUG_USE = 'REC_DRUG_USE' }


	/**  Provides contextual information about the extracted entity.  */
	export interface Trait {
		Name?: AttributeName;
		Score?: number;
	}

	/**  Provides contextual information about the extracted entity.  */
	export interface TraitFormProperties {
		Name: FormControl<AttributeName | null | undefined>,
		Score: FormControl<number | null | undefined>,
	}
	export function CreateTraitFormGroup() {
		return new FormGroup<TraitFormProperties>({
			Name: new FormControl<AttributeName | null | undefined>(undefined),
			Score: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AttributeName { SIGN = 'SIGN', SYMPTOM = 'SYMPTOM', DIAGNOSIS = 'DIAGNOSIS', NEGATION = 'NEGATION', PERTAINS_TO_FAMILY = 'PERTAINS_TO_FAMILY', HYPOTHETICAL = 'HYPOTHETICAL', LOW_CONFIDENCE = 'LOW_CONFIDENCE', PAST_HISTORY = 'PAST_HISTORY', FUTURE = 'FUTURE' }


	/**  An extracted segment of the text that is an attribute of an entity, or otherwise related to an entity, such as the dosage of a medication taken. It contains information about the attribute such as id, begin and end offset within the input text, and the segment of the input text.  */
	export interface Attribute {
		Type?: EntitySubType;
		Score?: number;
		RelationshipScore?: number;
		RelationshipType?: RelationshipType;
		Id?: number | null;
		BeginOffset?: number | null;
		EndOffset?: number | null;
		Text?: string;
		Category?: EntityType;
		Traits?: Array<Trait>;
	}

	/**  An extracted segment of the text that is an attribute of an entity, or otherwise related to an entity, such as the dosage of a medication taken. It contains information about the attribute such as id, begin and end offset within the input text, and the segment of the input text.  */
	export interface AttributeFormProperties {
		Type: FormControl<EntitySubType | null | undefined>,
		Score: FormControl<number | null | undefined>,
		RelationshipScore: FormControl<number | null | undefined>,
		RelationshipType: FormControl<RelationshipType | null | undefined>,
		Id: FormControl<number | null | undefined>,
		BeginOffset: FormControl<number | null | undefined>,
		EndOffset: FormControl<number | null | undefined>,
		Text: FormControl<string | null | undefined>,
		Category: FormControl<EntityType | null | undefined>,
	}
	export function CreateAttributeFormGroup() {
		return new FormGroup<AttributeFormProperties>({
			Type: new FormControl<EntitySubType | null | undefined>(undefined),
			Score: new FormControl<number | null | undefined>(undefined),
			RelationshipScore: new FormControl<number | null | undefined>(undefined),
			RelationshipType: new FormControl<RelationshipType | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			BeginOffset: new FormControl<number | null | undefined>(undefined),
			EndOffset: new FormControl<number | null | undefined>(undefined),
			Text: new FormControl<string | null | undefined>(undefined),
			Category: new FormControl<EntityType | null | undefined>(undefined),
		});

	}

	export enum RelationshipType { EVERY = 'EVERY', WITH_DOSAGE = 'WITH_DOSAGE', ADMINISTERED_VIA = 'ADMINISTERED_VIA', FOR = 'FOR', NEGATIVE = 'NEGATIVE', OVERLAP = 'OVERLAP', DOSAGE = 'DOSAGE', ROUTE_OR_MODE = 'ROUTE_OR_MODE', FORM = 'FORM', FREQUENCY = 'FREQUENCY', DURATION = 'DURATION', STRENGTH = 'STRENGTH', RATE = 'RATE', ACUITY = 'ACUITY', TEST_VALUE = 'TEST_VALUE', TEST_UNITS = 'TEST_UNITS', TEST_UNIT = 'TEST_UNIT', DIRECTION = 'DIRECTION', SYSTEM_ORGAN_SITE = 'SYSTEM_ORGAN_SITE', AMOUNT = 'AMOUNT', USAGE = 'USAGE', QUALITY = 'QUALITY' }


	/** An attribute that was extracted, but Amazon Comprehend Medical was unable to relate to an entity.  */
	export interface UnmappedAttribute {
		Type?: EntityType;
		Attribute?: Attribute;
	}

	/** An attribute that was extracted, but Amazon Comprehend Medical was unable to relate to an entity.  */
	export interface UnmappedAttributeFormProperties {
		Type: FormControl<EntityType | null | undefined>,
	}
	export function CreateUnmappedAttributeFormGroup() {
		return new FormGroup<UnmappedAttributeFormProperties>({
			Type: new FormControl<EntityType | null | undefined>(undefined),
		});

	}

	export interface DetectEntitiesRequest {

		/** Required */
		Text: string;
	}
	export interface DetectEntitiesRequestFormProperties {

		/** Required */
		Text: FormControl<string | null | undefined>,
	}
	export function CreateDetectEntitiesRequestFormGroup() {
		return new FormGroup<DetectEntitiesRequestFormProperties>({
			Text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface InvalidEncodingException {
	}
	export interface InvalidEncodingExceptionFormProperties {
	}
	export function CreateInvalidEncodingExceptionFormGroup() {
		return new FormGroup<InvalidEncodingExceptionFormProperties>({
		});

	}

	export interface TextSizeLimitExceededException {
	}
	export interface TextSizeLimitExceededExceptionFormProperties {
	}
	export function CreateTextSizeLimitExceededExceptionFormGroup() {
		return new FormGroup<TextSizeLimitExceededExceptionFormProperties>({
		});

	}

	export interface DetectEntitiesV2Response {

		/** Required */
		Entities: Array<Entity>;
		UnmappedAttributes?: Array<UnmappedAttribute>;
		PaginationToken?: string;

		/** Required */
		ModelVersion: string;
	}
	export interface DetectEntitiesV2ResponseFormProperties {
		PaginationToken: FormControl<string | null | undefined>,

		/** Required */
		ModelVersion: FormControl<string | null | undefined>,
	}
	export function CreateDetectEntitiesV2ResponseFormGroup() {
		return new FormGroup<DetectEntitiesV2ResponseFormProperties>({
			PaginationToken: new FormControl<string | null | undefined>(undefined),
			ModelVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DetectEntitiesV2Request {

		/** Required */
		Text: string;
	}
	export interface DetectEntitiesV2RequestFormProperties {

		/** Required */
		Text: FormControl<string | null | undefined>,
	}
	export function CreateDetectEntitiesV2RequestFormGroup() {
		return new FormGroup<DetectEntitiesV2RequestFormProperties>({
			Text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DetectPHIResponse {

		/** Required */
		Entities: Array<Entity>;
		PaginationToken?: string;

		/** Required */
		ModelVersion: string;
	}
	export interface DetectPHIResponseFormProperties {
		PaginationToken: FormControl<string | null | undefined>,

		/** Required */
		ModelVersion: FormControl<string | null | undefined>,
	}
	export function CreateDetectPHIResponseFormGroup() {
		return new FormGroup<DetectPHIResponseFormProperties>({
			PaginationToken: new FormControl<string | null | undefined>(undefined),
			ModelVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DetectPHIRequest {

		/** Required */
		Text: string;
	}
	export interface DetectPHIRequestFormProperties {

		/** Required */
		Text: FormControl<string | null | undefined>,
	}
	export function CreateDetectPHIRequestFormGroup() {
		return new FormGroup<DetectPHIRequestFormProperties>({
			Text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InferICD10CMResponse {

		/** Required */
		Entities: Array<ICD10CMEntity>;
		PaginationToken?: string;
		ModelVersion?: string;
	}
	export interface InferICD10CMResponseFormProperties {
		PaginationToken: FormControl<string | null | undefined>,
		ModelVersion: FormControl<string | null | undefined>,
	}
	export function CreateInferICD10CMResponseFormGroup() {
		return new FormGroup<InferICD10CMResponseFormProperties>({
			PaginationToken: new FormControl<string | null | undefined>(undefined),
			ModelVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The collection of medical entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Amazon Comprehend Medical has in the detection and analysis. Attributes and traits of the entity are also returned.  */
	export interface ICD10CMEntity {
		Id?: number | null;
		Text?: string;
		Category?: ICD10CMEntityCategory;
		Type?: ICD10CMEntityType;
		Score?: number;
		BeginOffset?: number | null;
		EndOffset?: number | null;
		Attributes?: Array<ICD10CMAttribute>;
		Traits?: Array<ICD10CMTrait>;
		ICD10CMConcepts?: Array<ICD10CMConcept>;
	}

	/** The collection of medical entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Amazon Comprehend Medical has in the detection and analysis. Attributes and traits of the entity are also returned.  */
	export interface ICD10CMEntityFormProperties {
		Id: FormControl<number | null | undefined>,
		Text: FormControl<string | null | undefined>,
		Category: FormControl<ICD10CMEntityCategory | null | undefined>,
		Type: FormControl<ICD10CMEntityType | null | undefined>,
		Score: FormControl<number | null | undefined>,
		BeginOffset: FormControl<number | null | undefined>,
		EndOffset: FormControl<number | null | undefined>,
	}
	export function CreateICD10CMEntityFormGroup() {
		return new FormGroup<ICD10CMEntityFormProperties>({
			Id: new FormControl<number | null | undefined>(undefined),
			Text: new FormControl<string | null | undefined>(undefined),
			Category: new FormControl<ICD10CMEntityCategory | null | undefined>(undefined),
			Type: new FormControl<ICD10CMEntityType | null | undefined>(undefined),
			Score: new FormControl<number | null | undefined>(undefined),
			BeginOffset: new FormControl<number | null | undefined>(undefined),
			EndOffset: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ICD10CMEntityCategory { MEDICAL_CONDITION = 'MEDICAL_CONDITION' }

	export enum ICD10CMEntityType { DX_NAME = 'DX_NAME', TIME_EXPRESSION = 'TIME_EXPRESSION' }


	/** The detected attributes that relate to an entity. This includes an extracted segment of the text that is an attribute of an entity, or otherwise related to an entity. InferICD10CM detects the following attributes: <code>Direction</code>, <code>System, Organ or Site</code>, and <code>Acuity</code>. */
	export interface ICD10CMAttribute {
		Type?: ICD10CMAttributeType;
		Score?: number;
		RelationshipScore?: number;
		Id?: number | null;
		BeginOffset?: number | null;
		EndOffset?: number | null;
		Text?: string;
		Traits?: Array<ICD10CMTrait>;
		Category?: ICD10CMEntityType;
		RelationshipType?: ICD10CMRelationshipType;
	}

	/** The detected attributes that relate to an entity. This includes an extracted segment of the text that is an attribute of an entity, or otherwise related to an entity. InferICD10CM detects the following attributes: <code>Direction</code>, <code>System, Organ or Site</code>, and <code>Acuity</code>. */
	export interface ICD10CMAttributeFormProperties {
		Type: FormControl<ICD10CMAttributeType | null | undefined>,
		Score: FormControl<number | null | undefined>,
		RelationshipScore: FormControl<number | null | undefined>,
		Id: FormControl<number | null | undefined>,
		BeginOffset: FormControl<number | null | undefined>,
		EndOffset: FormControl<number | null | undefined>,
		Text: FormControl<string | null | undefined>,
		Category: FormControl<ICD10CMEntityType | null | undefined>,
		RelationshipType: FormControl<ICD10CMRelationshipType | null | undefined>,
	}
	export function CreateICD10CMAttributeFormGroup() {
		return new FormGroup<ICD10CMAttributeFormProperties>({
			Type: new FormControl<ICD10CMAttributeType | null | undefined>(undefined),
			Score: new FormControl<number | null | undefined>(undefined),
			RelationshipScore: new FormControl<number | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			BeginOffset: new FormControl<number | null | undefined>(undefined),
			EndOffset: new FormControl<number | null | undefined>(undefined),
			Text: new FormControl<string | null | undefined>(undefined),
			Category: new FormControl<ICD10CMEntityType | null | undefined>(undefined),
			RelationshipType: new FormControl<ICD10CMRelationshipType | null | undefined>(undefined),
		});

	}

	export enum ICD10CMAttributeType { ACUITY = 'ACUITY', DIRECTION = 'DIRECTION', SYSTEM_ORGAN_SITE = 'SYSTEM_ORGAN_SITE', QUALITY = 'QUALITY', QUANTITY = 'QUANTITY', TIME_TO_DX_NAME = 'TIME_TO_DX_NAME', TIME_EXPRESSION = 'TIME_EXPRESSION' }


	/** Contextual information for the entity. The traits recognized by InferICD10CM are <code>DIAGNOSIS</code>, <code>SIGN</code>, <code>SYMPTOM</code>, and <code>NEGATION</code>. */
	export interface ICD10CMTrait {
		Name?: ICD10CMTraitName;
		Score?: number;
	}

	/** Contextual information for the entity. The traits recognized by InferICD10CM are <code>DIAGNOSIS</code>, <code>SIGN</code>, <code>SYMPTOM</code>, and <code>NEGATION</code>. */
	export interface ICD10CMTraitFormProperties {
		Name: FormControl<ICD10CMTraitName | null | undefined>,
		Score: FormControl<number | null | undefined>,
	}
	export function CreateICD10CMTraitFormGroup() {
		return new FormGroup<ICD10CMTraitFormProperties>({
			Name: new FormControl<ICD10CMTraitName | null | undefined>(undefined),
			Score: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ICD10CMTraitName { NEGATION = 'NEGATION', DIAGNOSIS = 'DIAGNOSIS', SIGN = 'SIGN', SYMPTOM = 'SYMPTOM', PERTAINS_TO_FAMILY = 'PERTAINS_TO_FAMILY', HYPOTHETICAL = 'HYPOTHETICAL', LOW_CONFIDENCE = 'LOW_CONFIDENCE' }

	export enum ICD10CMRelationshipType { OVERLAP = 'OVERLAP', SYSTEM_ORGAN_SITE = 'SYSTEM_ORGAN_SITE', QUALITY = 'QUALITY' }


	/**  The ICD-10-CM concepts that the entity could refer to, along with a score indicating the likelihood of the match. */
	export interface ICD10CMConcept {
		Description?: string;
		Code?: string;
		Score?: number;
	}

	/**  The ICD-10-CM concepts that the entity could refer to, along with a score indicating the likelihood of the match. */
	export interface ICD10CMConceptFormProperties {
		Description: FormControl<string | null | undefined>,
		Code: FormControl<string | null | undefined>,
		Score: FormControl<number | null | undefined>,
	}
	export function CreateICD10CMConceptFormGroup() {
		return new FormGroup<ICD10CMConceptFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Code: new FormControl<string | null | undefined>(undefined),
			Score: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface InferICD10CMRequest {

		/** Required */
		Text: string;
	}
	export interface InferICD10CMRequestFormProperties {

		/** Required */
		Text: FormControl<string | null | undefined>,
	}
	export function CreateInferICD10CMRequestFormGroup() {
		return new FormGroup<InferICD10CMRequestFormProperties>({
			Text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InferRxNormResponse {

		/** Required */
		Entities: Array<RxNormEntity>;
		PaginationToken?: string;
		ModelVersion?: string;
	}
	export interface InferRxNormResponseFormProperties {
		PaginationToken: FormControl<string | null | undefined>,
		ModelVersion: FormControl<string | null | undefined>,
	}
	export function CreateInferRxNormResponseFormGroup() {
		return new FormGroup<InferRxNormResponseFormProperties>({
			PaginationToken: new FormControl<string | null | undefined>(undefined),
			ModelVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The collection of medical entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Amazon Comprehend Medical has in the detection and analysis. Attributes and traits of the entity are also returned.  */
	export interface RxNormEntity {
		Id?: number | null;
		Text?: string;
		Category?: RxNormEntityCategory;
		Type?: RxNormEntityType;
		Score?: number;
		BeginOffset?: number | null;
		EndOffset?: number | null;
		Attributes?: Array<RxNormAttribute>;
		Traits?: Array<RxNormTrait>;
		RxNormConcepts?: Array<RxNormConcept>;
	}

	/** The collection of medical entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Amazon Comprehend Medical has in the detection and analysis. Attributes and traits of the entity are also returned.  */
	export interface RxNormEntityFormProperties {
		Id: FormControl<number | null | undefined>,
		Text: FormControl<string | null | undefined>,
		Category: FormControl<RxNormEntityCategory | null | undefined>,
		Type: FormControl<RxNormEntityType | null | undefined>,
		Score: FormControl<number | null | undefined>,
		BeginOffset: FormControl<number | null | undefined>,
		EndOffset: FormControl<number | null | undefined>,
	}
	export function CreateRxNormEntityFormGroup() {
		return new FormGroup<RxNormEntityFormProperties>({
			Id: new FormControl<number | null | undefined>(undefined),
			Text: new FormControl<string | null | undefined>(undefined),
			Category: new FormControl<RxNormEntityCategory | null | undefined>(undefined),
			Type: new FormControl<RxNormEntityType | null | undefined>(undefined),
			Score: new FormControl<number | null | undefined>(undefined),
			BeginOffset: new FormControl<number | null | undefined>(undefined),
			EndOffset: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum RxNormEntityCategory { MEDICATION = 'MEDICATION' }

	export enum RxNormEntityType { BRAND_NAME = 'BRAND_NAME', GENERIC_NAME = 'GENERIC_NAME' }


	/** The extracted attributes that relate to this entity. The attributes recognized by InferRxNorm are <code>DOSAGE</code>, <code>DURATION</code>, <code>FORM</code>, <code>FREQUENCY</code>, <code>RATE</code>, <code>ROUTE_OR_MODE</code>. */
	export interface RxNormAttribute {
		Type?: RxNormAttributeType;
		Score?: number;
		RelationshipScore?: number;
		Id?: number | null;
		BeginOffset?: number | null;
		EndOffset?: number | null;
		Text?: string;
		Traits?: Array<RxNormTrait>;
	}

	/** The extracted attributes that relate to this entity. The attributes recognized by InferRxNorm are <code>DOSAGE</code>, <code>DURATION</code>, <code>FORM</code>, <code>FREQUENCY</code>, <code>RATE</code>, <code>ROUTE_OR_MODE</code>. */
	export interface RxNormAttributeFormProperties {
		Type: FormControl<RxNormAttributeType | null | undefined>,
		Score: FormControl<number | null | undefined>,
		RelationshipScore: FormControl<number | null | undefined>,
		Id: FormControl<number | null | undefined>,
		BeginOffset: FormControl<number | null | undefined>,
		EndOffset: FormControl<number | null | undefined>,
		Text: FormControl<string | null | undefined>,
	}
	export function CreateRxNormAttributeFormGroup() {
		return new FormGroup<RxNormAttributeFormProperties>({
			Type: new FormControl<RxNormAttributeType | null | undefined>(undefined),
			Score: new FormControl<number | null | undefined>(undefined),
			RelationshipScore: new FormControl<number | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			BeginOffset: new FormControl<number | null | undefined>(undefined),
			EndOffset: new FormControl<number | null | undefined>(undefined),
			Text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RxNormAttributeType { DOSAGE = 'DOSAGE', DURATION = 'DURATION', FORM = 'FORM', FREQUENCY = 'FREQUENCY', RATE = 'RATE', ROUTE_OR_MODE = 'ROUTE_OR_MODE', STRENGTH = 'STRENGTH' }


	/** The contextual information for the entity. InferRxNorm recognizes the trait <code>NEGATION</code>, which is any indication that the patient is not taking a medication.  */
	export interface RxNormTrait {
		Name?: RxNormTraitName;
		Score?: number;
	}

	/** The contextual information for the entity. InferRxNorm recognizes the trait <code>NEGATION</code>, which is any indication that the patient is not taking a medication.  */
	export interface RxNormTraitFormProperties {
		Name: FormControl<RxNormTraitName | null | undefined>,
		Score: FormControl<number | null | undefined>,
	}
	export function CreateRxNormTraitFormGroup() {
		return new FormGroup<RxNormTraitFormProperties>({
			Name: new FormControl<RxNormTraitName | null | undefined>(undefined),
			Score: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum RxNormTraitName { NEGATION = 'NEGATION', PAST_HISTORY = 'PAST_HISTORY' }


	/** The RxNorm concept that the entity could refer to, along with a score indicating the likelihood of the match. */
	export interface RxNormConcept {
		Description?: string;
		Code?: string;
		Score?: number;
	}

	/** The RxNorm concept that the entity could refer to, along with a score indicating the likelihood of the match. */
	export interface RxNormConceptFormProperties {
		Description: FormControl<string | null | undefined>,
		Code: FormControl<string | null | undefined>,
		Score: FormControl<number | null | undefined>,
	}
	export function CreateRxNormConceptFormGroup() {
		return new FormGroup<RxNormConceptFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Code: new FormControl<string | null | undefined>(undefined),
			Score: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface InferRxNormRequest {

		/** Required */
		Text: string;
	}
	export interface InferRxNormRequestFormProperties {

		/** Required */
		Text: FormControl<string | null | undefined>,
	}
	export function CreateInferRxNormRequestFormGroup() {
		return new FormGroup<InferRxNormRequestFormProperties>({
			Text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InferSNOMEDCTResponse {

		/** Required */
		Entities: Array<SNOMEDCTEntity>;
		PaginationToken?: string;
		ModelVersion?: string;
		SNOMEDCTDetails?: SNOMEDCTDetails;
		Characters?: Characters;
	}
	export interface InferSNOMEDCTResponseFormProperties {
		PaginationToken: FormControl<string | null | undefined>,
		ModelVersion: FormControl<string | null | undefined>,
	}
	export function CreateInferSNOMEDCTResponseFormGroup() {
		return new FormGroup<InferSNOMEDCTResponseFormProperties>({
			PaginationToken: new FormControl<string | null | undefined>(undefined),
			ModelVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The collection of medical entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Amazon Comprehend Medical has in the detection and analysis. Attributes and traits of the entity are also returned.  */
	export interface SNOMEDCTEntity {
		Id?: number | null;
		Text?: string;
		Category?: SNOMEDCTEntityCategory;
		Type?: SNOMEDCTEntityType;
		Score?: number;
		BeginOffset?: number | null;
		EndOffset?: number | null;
		Attributes?: Array<SNOMEDCTAttribute>;
		Traits?: Array<SNOMEDCTTrait>;
		SNOMEDCTConcepts?: Array<SNOMEDCTConcept>;
	}

	/**  The collection of medical entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Amazon Comprehend Medical has in the detection and analysis. Attributes and traits of the entity are also returned.  */
	export interface SNOMEDCTEntityFormProperties {
		Id: FormControl<number | null | undefined>,
		Text: FormControl<string | null | undefined>,
		Category: FormControl<SNOMEDCTEntityCategory | null | undefined>,
		Type: FormControl<SNOMEDCTEntityType | null | undefined>,
		Score: FormControl<number | null | undefined>,
		BeginOffset: FormControl<number | null | undefined>,
		EndOffset: FormControl<number | null | undefined>,
	}
	export function CreateSNOMEDCTEntityFormGroup() {
		return new FormGroup<SNOMEDCTEntityFormProperties>({
			Id: new FormControl<number | null | undefined>(undefined),
			Text: new FormControl<string | null | undefined>(undefined),
			Category: new FormControl<SNOMEDCTEntityCategory | null | undefined>(undefined),
			Type: new FormControl<SNOMEDCTEntityType | null | undefined>(undefined),
			Score: new FormControl<number | null | undefined>(undefined),
			BeginOffset: new FormControl<number | null | undefined>(undefined),
			EndOffset: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum SNOMEDCTEntityCategory { MEDICAL_CONDITION = 'MEDICAL_CONDITION', ANATOMY = 'ANATOMY', TEST_TREATMENT_PROCEDURE = 'TEST_TREATMENT_PROCEDURE' }

	export enum SNOMEDCTEntityType { DX_NAME = 'DX_NAME', TEST_NAME = 'TEST_NAME', PROCEDURE_NAME = 'PROCEDURE_NAME', TREATMENT_NAME = 'TREATMENT_NAME' }


	/**  The extracted attributes that relate to an entity. An extracted segment of the text that is an attribute of an entity, or otherwise related to an entity, such as the dosage of a medication taken.  */
	export interface SNOMEDCTAttribute {
		Category?: SNOMEDCTEntityCategory;
		Type?: SNOMEDCTAttributeType;
		Score?: number;
		RelationshipScore?: number;
		RelationshipType?: SNOMEDCTRelationshipType;
		Id?: number | null;
		BeginOffset?: number | null;
		EndOffset?: number | null;
		Text?: string;
		Traits?: Array<SNOMEDCTTrait>;
		SNOMEDCTConcepts?: Array<SNOMEDCTConcept>;
	}

	/**  The extracted attributes that relate to an entity. An extracted segment of the text that is an attribute of an entity, or otherwise related to an entity, such as the dosage of a medication taken.  */
	export interface SNOMEDCTAttributeFormProperties {
		Category: FormControl<SNOMEDCTEntityCategory | null | undefined>,
		Type: FormControl<SNOMEDCTAttributeType | null | undefined>,
		Score: FormControl<number | null | undefined>,
		RelationshipScore: FormControl<number | null | undefined>,
		RelationshipType: FormControl<SNOMEDCTRelationshipType | null | undefined>,
		Id: FormControl<number | null | undefined>,
		BeginOffset: FormControl<number | null | undefined>,
		EndOffset: FormControl<number | null | undefined>,
		Text: FormControl<string | null | undefined>,
	}
	export function CreateSNOMEDCTAttributeFormGroup() {
		return new FormGroup<SNOMEDCTAttributeFormProperties>({
			Category: new FormControl<SNOMEDCTEntityCategory | null | undefined>(undefined),
			Type: new FormControl<SNOMEDCTAttributeType | null | undefined>(undefined),
			Score: new FormControl<number | null | undefined>(undefined),
			RelationshipScore: new FormControl<number | null | undefined>(undefined),
			RelationshipType: new FormControl<SNOMEDCTRelationshipType | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			BeginOffset: new FormControl<number | null | undefined>(undefined),
			EndOffset: new FormControl<number | null | undefined>(undefined),
			Text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SNOMEDCTAttributeType { ACUITY = 'ACUITY', QUALITY = 'QUALITY', DIRECTION = 'DIRECTION', SYSTEM_ORGAN_SITE = 'SYSTEM_ORGAN_SITE', TEST_VALUE = 'TEST_VALUE', TEST_UNIT = 'TEST_UNIT' }

	export enum SNOMEDCTRelationshipType { ACUITY = 'ACUITY', QUALITY = 'QUALITY', TEST_VALUE = 'TEST_VALUE', TEST_UNITS = 'TEST_UNITS', DIRECTION = 'DIRECTION', SYSTEM_ORGAN_SITE = 'SYSTEM_ORGAN_SITE', TEST_UNIT = 'TEST_UNIT' }


	/**  Contextual information for an entity.  */
	export interface SNOMEDCTTrait {
		Name?: SNOMEDCTTraitName;
		Score?: number;
	}

	/**  Contextual information for an entity.  */
	export interface SNOMEDCTTraitFormProperties {
		Name: FormControl<SNOMEDCTTraitName | null | undefined>,
		Score: FormControl<number | null | undefined>,
	}
	export function CreateSNOMEDCTTraitFormGroup() {
		return new FormGroup<SNOMEDCTTraitFormProperties>({
			Name: new FormControl<SNOMEDCTTraitName | null | undefined>(undefined),
			Score: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum SNOMEDCTTraitName { NEGATION = 'NEGATION', DIAGNOSIS = 'DIAGNOSIS', SIGN = 'SIGN', SYMPTOM = 'SYMPTOM', PERTAINS_TO_FAMILY = 'PERTAINS_TO_FAMILY', HYPOTHETICAL = 'HYPOTHETICAL', LOW_CONFIDENCE = 'LOW_CONFIDENCE', PAST_HISTORY = 'PAST_HISTORY', FUTURE = 'FUTURE' }


	/**  The SNOMED-CT concepts that the entity could refer to, along with a score indicating the likelihood of the match.  */
	export interface SNOMEDCTConcept {
		Description?: string;
		Code?: string;
		Score?: number;
	}

	/**  The SNOMED-CT concepts that the entity could refer to, along with a score indicating the likelihood of the match.  */
	export interface SNOMEDCTConceptFormProperties {
		Description: FormControl<string | null | undefined>,
		Code: FormControl<string | null | undefined>,
		Score: FormControl<number | null | undefined>,
	}
	export function CreateSNOMEDCTConceptFormGroup() {
		return new FormGroup<SNOMEDCTConceptFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Code: new FormControl<string | null | undefined>(undefined),
			Score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  The information about the revision of the SNOMED-CT ontology in the response. Specifically, the details include the SNOMED-CT edition, language, and version date.  */
	export interface SNOMEDCTDetails {
		Edition?: string;
		Language?: string;
		VersionDate?: string;
	}

	/**  The information about the revision of the SNOMED-CT ontology in the response. Specifically, the details include the SNOMED-CT edition, language, and version date.  */
	export interface SNOMEDCTDetailsFormProperties {
		Edition: FormControl<string | null | undefined>,
		Language: FormControl<string | null | undefined>,
		VersionDate: FormControl<string | null | undefined>,
	}
	export function CreateSNOMEDCTDetailsFormGroup() {
		return new FormGroup<SNOMEDCTDetailsFormProperties>({
			Edition: new FormControl<string | null | undefined>(undefined),
			Language: new FormControl<string | null | undefined>(undefined),
			VersionDate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The number of characters in the input text to be analyzed.  */
	export interface Characters {
		OriginalTextCharacters?: number | null;
	}

	/**  The number of characters in the input text to be analyzed.  */
	export interface CharactersFormProperties {
		OriginalTextCharacters: FormControl<number | null | undefined>,
	}
	export function CreateCharactersFormGroup() {
		return new FormGroup<CharactersFormProperties>({
			OriginalTextCharacters: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface InferSNOMEDCTRequest {

		/** Required */
		Text: string;
	}
	export interface InferSNOMEDCTRequestFormProperties {

		/** Required */
		Text: FormControl<string | null | undefined>,
	}
	export function CreateInferSNOMEDCTRequestFormGroup() {
		return new FormGroup<InferSNOMEDCTRequestFormProperties>({
			Text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListEntitiesDetectionV2JobsResponse {
		ComprehendMedicalAsyncJobPropertiesList?: Array<ComprehendMedicalAsyncJobProperties>;
		NextToken?: string;
	}
	export interface ListEntitiesDetectionV2JobsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEntitiesDetectionV2JobsResponseFormGroup() {
		return new FormGroup<ListEntitiesDetectionV2JobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListEntitiesDetectionV2JobsRequest {
		Filter?: ComprehendMedicalAsyncJobFilter;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListEntitiesDetectionV2JobsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListEntitiesDetectionV2JobsRequestFormGroup() {
		return new FormGroup<ListEntitiesDetectionV2JobsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides information for filtering a list of detection jobs. */
	export interface ComprehendMedicalAsyncJobFilter {
		JobName?: string;
		JobStatus?: JobStatus;
		SubmitTimeBefore?: Date;
		SubmitTimeAfter?: Date;
	}

	/** Provides information for filtering a list of detection jobs. */
	export interface ComprehendMedicalAsyncJobFilterFormProperties {
		JobName: FormControl<string | null | undefined>,
		JobStatus: FormControl<JobStatus | null | undefined>,
		SubmitTimeBefore: FormControl<Date | null | undefined>,
		SubmitTimeAfter: FormControl<Date | null | undefined>,
	}
	export function CreateComprehendMedicalAsyncJobFilterFormGroup() {
		return new FormGroup<ComprehendMedicalAsyncJobFilterFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
			SubmitTimeBefore: new FormControl<Date | null | undefined>(undefined),
			SubmitTimeAfter: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}

	export interface ListICD10CMInferenceJobsResponse {
		ComprehendMedicalAsyncJobPropertiesList?: Array<ComprehendMedicalAsyncJobProperties>;
		NextToken?: string;
	}
	export interface ListICD10CMInferenceJobsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListICD10CMInferenceJobsResponseFormGroup() {
		return new FormGroup<ListICD10CMInferenceJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListICD10CMInferenceJobsRequest {
		Filter?: ComprehendMedicalAsyncJobFilter;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListICD10CMInferenceJobsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListICD10CMInferenceJobsRequestFormGroup() {
		return new FormGroup<ListICD10CMInferenceJobsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListPHIDetectionJobsResponse {
		ComprehendMedicalAsyncJobPropertiesList?: Array<ComprehendMedicalAsyncJobProperties>;
		NextToken?: string;
	}
	export interface ListPHIDetectionJobsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPHIDetectionJobsResponseFormGroup() {
		return new FormGroup<ListPHIDetectionJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPHIDetectionJobsRequest {
		Filter?: ComprehendMedicalAsyncJobFilter;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListPHIDetectionJobsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListPHIDetectionJobsRequestFormGroup() {
		return new FormGroup<ListPHIDetectionJobsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListRxNormInferenceJobsResponse {
		ComprehendMedicalAsyncJobPropertiesList?: Array<ComprehendMedicalAsyncJobProperties>;
		NextToken?: string;
	}
	export interface ListRxNormInferenceJobsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRxNormInferenceJobsResponseFormGroup() {
		return new FormGroup<ListRxNormInferenceJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRxNormInferenceJobsRequest {
		Filter?: ComprehendMedicalAsyncJobFilter;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListRxNormInferenceJobsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListRxNormInferenceJobsRequestFormGroup() {
		return new FormGroup<ListRxNormInferenceJobsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListSNOMEDCTInferenceJobsResponse {
		ComprehendMedicalAsyncJobPropertiesList?: Array<ComprehendMedicalAsyncJobProperties>;
		NextToken?: string;
	}
	export interface ListSNOMEDCTInferenceJobsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSNOMEDCTInferenceJobsResponseFormGroup() {
		return new FormGroup<ListSNOMEDCTInferenceJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSNOMEDCTInferenceJobsRequest {

		/** Provides information for filtering a list of detection jobs. */
		Filter?: ComprehendMedicalAsyncJobFilter;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListSNOMEDCTInferenceJobsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListSNOMEDCTInferenceJobsRequestFormGroup() {
		return new FormGroup<ListSNOMEDCTInferenceJobsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface StartEntitiesDetectionV2JobResponse {
		JobId?: string;
	}
	export interface StartEntitiesDetectionV2JobResponseFormProperties {
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStartEntitiesDetectionV2JobResponseFormGroup() {
		return new FormGroup<StartEntitiesDetectionV2JobResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartEntitiesDetectionV2JobRequest {

		/** Required */
		InputDataConfig: InputDataConfig;

		/** Required */
		OutputDataConfig: OutputDataConfig;

		/** Required */
		DataAccessRoleArn: string;
		JobName?: string;
		ClientRequestToken?: string;
		KMSKey?: string;

		/** Required */
		LanguageCode: LanguageCode;
	}
	export interface StartEntitiesDetectionV2JobRequestFormProperties {

		/** Required */
		DataAccessRoleArn: FormControl<string | null | undefined>,
		JobName: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
		KMSKey: FormControl<string | null | undefined>,

		/** Required */
		LanguageCode: FormControl<LanguageCode | null | undefined>,
	}
	export function CreateStartEntitiesDetectionV2JobRequestFormGroup() {
		return new FormGroup<StartEntitiesDetectionV2JobRequestFormProperties>({
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JobName: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			KMSKey: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartICD10CMInferenceJobResponse {
		JobId?: string;
	}
	export interface StartICD10CMInferenceJobResponseFormProperties {
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStartICD10CMInferenceJobResponseFormGroup() {
		return new FormGroup<StartICD10CMInferenceJobResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartICD10CMInferenceJobRequest {

		/** Required */
		InputDataConfig: InputDataConfig;

		/** Required */
		OutputDataConfig: OutputDataConfig;

		/** Required */
		DataAccessRoleArn: string;
		JobName?: string;
		ClientRequestToken?: string;
		KMSKey?: string;

		/** Required */
		LanguageCode: LanguageCode;
	}
	export interface StartICD10CMInferenceJobRequestFormProperties {

		/** Required */
		DataAccessRoleArn: FormControl<string | null | undefined>,
		JobName: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
		KMSKey: FormControl<string | null | undefined>,

		/** Required */
		LanguageCode: FormControl<LanguageCode | null | undefined>,
	}
	export function CreateStartICD10CMInferenceJobRequestFormGroup() {
		return new FormGroup<StartICD10CMInferenceJobRequestFormProperties>({
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JobName: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			KMSKey: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartPHIDetectionJobResponse {
		JobId?: string;
	}
	export interface StartPHIDetectionJobResponseFormProperties {
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStartPHIDetectionJobResponseFormGroup() {
		return new FormGroup<StartPHIDetectionJobResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartPHIDetectionJobRequest {

		/** Required */
		InputDataConfig: InputDataConfig;

		/** Required */
		OutputDataConfig: OutputDataConfig;

		/** Required */
		DataAccessRoleArn: string;
		JobName?: string;
		ClientRequestToken?: string;
		KMSKey?: string;

		/** Required */
		LanguageCode: LanguageCode;
	}
	export interface StartPHIDetectionJobRequestFormProperties {

		/** Required */
		DataAccessRoleArn: FormControl<string | null | undefined>,
		JobName: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
		KMSKey: FormControl<string | null | undefined>,

		/** Required */
		LanguageCode: FormControl<LanguageCode | null | undefined>,
	}
	export function CreateStartPHIDetectionJobRequestFormGroup() {
		return new FormGroup<StartPHIDetectionJobRequestFormProperties>({
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JobName: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			KMSKey: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartRxNormInferenceJobResponse {
		JobId?: string;
	}
	export interface StartRxNormInferenceJobResponseFormProperties {
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStartRxNormInferenceJobResponseFormGroup() {
		return new FormGroup<StartRxNormInferenceJobResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartRxNormInferenceJobRequest {

		/** Required */
		InputDataConfig: InputDataConfig;

		/** Required */
		OutputDataConfig: OutputDataConfig;

		/** Required */
		DataAccessRoleArn: string;
		JobName?: string;
		ClientRequestToken?: string;
		KMSKey?: string;

		/** Required */
		LanguageCode: LanguageCode;
	}
	export interface StartRxNormInferenceJobRequestFormProperties {

		/** Required */
		DataAccessRoleArn: FormControl<string | null | undefined>,
		JobName: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
		KMSKey: FormControl<string | null | undefined>,

		/** Required */
		LanguageCode: FormControl<LanguageCode | null | undefined>,
	}
	export function CreateStartRxNormInferenceJobRequestFormGroup() {
		return new FormGroup<StartRxNormInferenceJobRequestFormProperties>({
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JobName: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			KMSKey: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartSNOMEDCTInferenceJobResponse {
		JobId?: string;
	}
	export interface StartSNOMEDCTInferenceJobResponseFormProperties {
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStartSNOMEDCTInferenceJobResponseFormGroup() {
		return new FormGroup<StartSNOMEDCTInferenceJobResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartSNOMEDCTInferenceJobRequest {

		/**
		 * The input properties for an entities detection job. This includes the name of the S3 bucket and the path to the files to be analyzed.
		 * Required
		 */
		InputDataConfig: InputDataConfig;

		/**
		 * The output properties for a detection job.
		 * Required
		 */
		OutputDataConfig: OutputDataConfig;

		/** Required */
		DataAccessRoleArn: string;
		JobName?: string;
		ClientRequestToken?: string;
		KMSKey?: string;

		/** Required */
		LanguageCode: LanguageCode;
	}
	export interface StartSNOMEDCTInferenceJobRequestFormProperties {

		/** Required */
		DataAccessRoleArn: FormControl<string | null | undefined>,
		JobName: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
		KMSKey: FormControl<string | null | undefined>,

		/** Required */
		LanguageCode: FormControl<LanguageCode | null | undefined>,
	}
	export function CreateStartSNOMEDCTInferenceJobRequestFormGroup() {
		return new FormGroup<StartSNOMEDCTInferenceJobRequestFormProperties>({
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JobName: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			KMSKey: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopEntitiesDetectionV2JobResponse {
		JobId?: string;
	}
	export interface StopEntitiesDetectionV2JobResponseFormProperties {
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStopEntitiesDetectionV2JobResponseFormGroup() {
		return new FormGroup<StopEntitiesDetectionV2JobResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StopEntitiesDetectionV2JobRequest {

		/** Required */
		JobId: string;
	}
	export interface StopEntitiesDetectionV2JobRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStopEntitiesDetectionV2JobRequestFormGroup() {
		return new FormGroup<StopEntitiesDetectionV2JobRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopICD10CMInferenceJobResponse {
		JobId?: string;
	}
	export interface StopICD10CMInferenceJobResponseFormProperties {
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStopICD10CMInferenceJobResponseFormGroup() {
		return new FormGroup<StopICD10CMInferenceJobResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StopICD10CMInferenceJobRequest {

		/** Required */
		JobId: string;
	}
	export interface StopICD10CMInferenceJobRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStopICD10CMInferenceJobRequestFormGroup() {
		return new FormGroup<StopICD10CMInferenceJobRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopPHIDetectionJobResponse {
		JobId?: string;
	}
	export interface StopPHIDetectionJobResponseFormProperties {
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStopPHIDetectionJobResponseFormGroup() {
		return new FormGroup<StopPHIDetectionJobResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StopPHIDetectionJobRequest {

		/** Required */
		JobId: string;
	}
	export interface StopPHIDetectionJobRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStopPHIDetectionJobRequestFormGroup() {
		return new FormGroup<StopPHIDetectionJobRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopRxNormInferenceJobResponse {
		JobId?: string;
	}
	export interface StopRxNormInferenceJobResponseFormProperties {
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStopRxNormInferenceJobResponseFormGroup() {
		return new FormGroup<StopRxNormInferenceJobResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StopRxNormInferenceJobRequest {

		/** Required */
		JobId: string;
	}
	export interface StopRxNormInferenceJobRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStopRxNormInferenceJobRequestFormGroup() {
		return new FormGroup<StopRxNormInferenceJobRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopSNOMEDCTInferenceJobResponse {
		JobId?: string;
	}
	export interface StopSNOMEDCTInferenceJobResponseFormProperties {
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStopSNOMEDCTInferenceJobResponseFormGroup() {
		return new FormGroup<StopSNOMEDCTInferenceJobResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StopSNOMEDCTInferenceJobRequest {

		/** Required */
		JobId: string;
	}
	export interface StopSNOMEDCTInferenceJobRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStopSNOMEDCTInferenceJobRequestFormGroup() {
		return new FormGroup<StopSNOMEDCTInferenceJobRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets the properties associated with a medical entities detection job. Use this operation to get the status of a detection job.
		 * Post #X-Amz-Target=ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job
		 * @return {DescribeEntitiesDetectionV2JobResponse} Success
		 */
		DescribeEntitiesDetectionV2Job(requestBody: DescribeEntitiesDetectionV2JobRequest): Observable<DescribeEntitiesDetectionV2JobResponse> {
			return this.http.post<DescribeEntitiesDetectionV2JobResponse>(this.baseUri + '#X-Amz-Target=ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the properties associated with an InferICD10CM job. Use this operation to get the status of an inference job.
		 * Post #X-Amz-Target=ComprehendMedical_20181030.DescribeICD10CMInferenceJob
		 * @return {DescribeICD10CMInferenceJobResponse} Success
		 */
		DescribeICD10CMInferenceJob(requestBody: DescribeICD10CMInferenceJobRequest): Observable<DescribeICD10CMInferenceJobResponse> {
			return this.http.post<DescribeICD10CMInferenceJobResponse>(this.baseUri + '#X-Amz-Target=ComprehendMedical_20181030.DescribeICD10CMInferenceJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the properties associated with a protected health information (PHI) detection job. Use this operation to get the status of a detection job.
		 * Post #X-Amz-Target=ComprehendMedical_20181030.DescribePHIDetectionJob
		 * @return {DescribePHIDetectionJobResponse} Success
		 */
		DescribePHIDetectionJob(requestBody: DescribePHIDetectionJobRequest): Observable<DescribePHIDetectionJobResponse> {
			return this.http.post<DescribePHIDetectionJobResponse>(this.baseUri + '#X-Amz-Target=ComprehendMedical_20181030.DescribePHIDetectionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the properties associated with an InferRxNorm job. Use this operation to get the status of an inference job.
		 * Post #X-Amz-Target=ComprehendMedical_20181030.DescribeRxNormInferenceJob
		 * @return {DescribeRxNormInferenceJobResponse} Success
		 */
		DescribeRxNormInferenceJob(requestBody: DescribeRxNormInferenceJobRequest): Observable<DescribeRxNormInferenceJobResponse> {
			return this.http.post<DescribeRxNormInferenceJobResponse>(this.baseUri + '#X-Amz-Target=ComprehendMedical_20181030.DescribeRxNormInferenceJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the properties associated with an InferSNOMEDCT job. Use this operation to get the status of an inference job.
		 * Post #X-Amz-Target=ComprehendMedical_20181030.DescribeSNOMEDCTInferenceJob
		 * @return {DescribeSNOMEDCTInferenceJobResponse} Success
		 */
		DescribeSNOMEDCTInferenceJob(requestBody: DescribeSNOMEDCTInferenceJobRequest): Observable<DescribeSNOMEDCTInferenceJobResponse> {
			return this.http.post<DescribeSNOMEDCTInferenceJobResponse>(this.baseUri + '#X-Amz-Target=ComprehendMedical_20181030.DescribeSNOMEDCTInferenceJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>The <code>DetectEntities</code> operation is deprecated. You should use the <a>DetectEntitiesV2</a> operation instead.</p> <p>Inspects the clinical text for a variety of medical entities and returns specific information about them such as entity category, location, and confidence score on that information.</p>
		 * Post #X-Amz-Target=ComprehendMedical_20181030.DetectEntities
		 * @return {DetectEntitiesResponse} Success
		 */
		DetectEntities(requestBody: DetectEntitiesRequest): Observable<DetectEntitiesResponse> {
			return this.http.post<DetectEntitiesResponse>(this.baseUri + '#X-Amz-Target=ComprehendMedical_20181030.DetectEntities', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Inspects the clinical text for a variety of medical entities and returns specific information about them such as entity category, location, and confidence score on that information. Amazon Comprehend Medical only detects medical entities in English language texts.</p> <p>The <code>DetectEntitiesV2</code> operation replaces the <a>DetectEntities</a> operation. This new action uses a different model for determining the entities in your medical text and changes the way that some entities are returned in the output. You should use the <code>DetectEntitiesV2</code> operation in all new applications.</p> <p>The <code>DetectEntitiesV2</code> operation returns the <code>Acuity</code> and <code>Direction</code> entities as attributes instead of types. </p>
		 * Post #X-Amz-Target=ComprehendMedical_20181030.DetectEntitiesV2
		 * @return {DetectEntitiesV2Response} Success
		 */
		DetectEntitiesV2(requestBody: DetectEntitiesV2Request): Observable<DetectEntitiesV2Response> {
			return this.http.post<DetectEntitiesV2Response>(this.baseUri + '#X-Amz-Target=ComprehendMedical_20181030.DetectEntitiesV2', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Inspects the clinical text for protected health information (PHI) entities and returns the entity category, location, and confidence score for each entity. Amazon Comprehend Medical only detects entities in English language texts.
		 * Post #X-Amz-Target=ComprehendMedical_20181030.DetectPHI
		 * @return {DetectPHIResponse} Success
		 */
		DetectPHI(requestBody: DetectPHIRequest): Observable<DetectPHIResponse> {
			return this.http.post<DetectPHIResponse>(this.baseUri + '#X-Amz-Target=ComprehendMedical_20181030.DetectPHI', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * InferICD10CM detects medical conditions as entities listed in a patient record and links those entities to normalized concept identifiers in the ICD-10-CM knowledge base from the Centers for Disease Control. Amazon Comprehend Medical only detects medical entities in English language texts.
		 * Post #X-Amz-Target=ComprehendMedical_20181030.InferICD10CM
		 * @return {InferICD10CMResponse} Success
		 */
		InferICD10CM(requestBody: InferICD10CMRequest): Observable<InferICD10CMResponse> {
			return this.http.post<InferICD10CMResponse>(this.baseUri + '#X-Amz-Target=ComprehendMedical_20181030.InferICD10CM', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * InferRxNorm detects medications as entities listed in a patient record and links to the normalized concept identifiers in the RxNorm database from the National Library of Medicine. Amazon Comprehend Medical only detects medical entities in English language texts.
		 * Post #X-Amz-Target=ComprehendMedical_20181030.InferRxNorm
		 * @return {InferRxNormResponse} Success
		 */
		InferRxNorm(requestBody: InferRxNormRequest): Observable<InferRxNormResponse> {
			return this.http.post<InferRxNormResponse>(this.baseUri + '#X-Amz-Target=ComprehendMedical_20181030.InferRxNorm', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * InferSNOMEDCT detects possible medical concepts as entities and links them to codes from the Systematized Nomenclature of Medicine, Clinical Terms (SNOMED-CT) ontology
		 * Post #X-Amz-Target=ComprehendMedical_20181030.InferSNOMEDCT
		 * @return {InferSNOMEDCTResponse} Success
		 */
		InferSNOMEDCT(requestBody: InferSNOMEDCTRequest): Observable<InferSNOMEDCTResponse> {
			return this.http.post<InferSNOMEDCTResponse>(this.baseUri + '#X-Amz-Target=ComprehendMedical_20181030.InferSNOMEDCT', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of medical entity detection jobs that you have submitted.
		 * Post #X-Amz-Target=ComprehendMedical_20181030.ListEntitiesDetectionV2Jobs
		 * @return {ListEntitiesDetectionV2JobsResponse} Success
		 */
		ListEntitiesDetectionV2Jobs(requestBody: ListEntitiesDetectionV2JobsRequest): Observable<ListEntitiesDetectionV2JobsResponse> {
			return this.http.post<ListEntitiesDetectionV2JobsResponse>(this.baseUri + '#X-Amz-Target=ComprehendMedical_20181030.ListEntitiesDetectionV2Jobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of InferICD10CM jobs that you have submitted.
		 * Post #X-Amz-Target=ComprehendMedical_20181030.ListICD10CMInferenceJobs
		 * @return {ListICD10CMInferenceJobsResponse} Success
		 */
		ListICD10CMInferenceJobs(requestBody: ListICD10CMInferenceJobsRequest): Observable<ListICD10CMInferenceJobsResponse> {
			return this.http.post<ListICD10CMInferenceJobsResponse>(this.baseUri + '#X-Amz-Target=ComprehendMedical_20181030.ListICD10CMInferenceJobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of protected health information (PHI) detection jobs you have submitted.
		 * Post #X-Amz-Target=ComprehendMedical_20181030.ListPHIDetectionJobs
		 * @return {ListPHIDetectionJobsResponse} Success
		 */
		ListPHIDetectionJobs(requestBody: ListPHIDetectionJobsRequest): Observable<ListPHIDetectionJobsResponse> {
			return this.http.post<ListPHIDetectionJobsResponse>(this.baseUri + '#X-Amz-Target=ComprehendMedical_20181030.ListPHIDetectionJobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of InferRxNorm jobs that you have submitted.
		 * Post #X-Amz-Target=ComprehendMedical_20181030.ListRxNormInferenceJobs
		 * @return {ListRxNormInferenceJobsResponse} Success
		 */
		ListRxNormInferenceJobs(requestBody: ListRxNormInferenceJobsRequest): Observable<ListRxNormInferenceJobsResponse> {
			return this.http.post<ListRxNormInferenceJobsResponse>(this.baseUri + '#X-Amz-Target=ComprehendMedical_20181030.ListRxNormInferenceJobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of InferSNOMEDCT jobs a user has submitted.
		 * Post #X-Amz-Target=ComprehendMedical_20181030.ListSNOMEDCTInferenceJobs
		 * @return {ListSNOMEDCTInferenceJobsResponse} Success
		 */
		ListSNOMEDCTInferenceJobs(requestBody: ListSNOMEDCTInferenceJobsRequest): Observable<ListSNOMEDCTInferenceJobsResponse> {
			return this.http.post<ListSNOMEDCTInferenceJobsResponse>(this.baseUri + '#X-Amz-Target=ComprehendMedical_20181030.ListSNOMEDCTInferenceJobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts an asynchronous medical entity detection job for a collection of documents. Use the <code>DescribeEntitiesDetectionV2Job</code> operation to track the status of a job.
		 * Post #X-Amz-Target=ComprehendMedical_20181030.StartEntitiesDetectionV2Job
		 * @return {StartEntitiesDetectionV2JobResponse} Success
		 */
		StartEntitiesDetectionV2Job(requestBody: StartEntitiesDetectionV2JobRequest): Observable<StartEntitiesDetectionV2JobResponse> {
			return this.http.post<StartEntitiesDetectionV2JobResponse>(this.baseUri + '#X-Amz-Target=ComprehendMedical_20181030.StartEntitiesDetectionV2Job', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts an asynchronous job to detect medical conditions and link them to the ICD-10-CM ontology. Use the <code>DescribeICD10CMInferenceJob</code> operation to track the status of a job.
		 * Post #X-Amz-Target=ComprehendMedical_20181030.StartICD10CMInferenceJob
		 * @return {StartICD10CMInferenceJobResponse} Success
		 */
		StartICD10CMInferenceJob(requestBody: StartICD10CMInferenceJobRequest): Observable<StartICD10CMInferenceJobResponse> {
			return this.http.post<StartICD10CMInferenceJobResponse>(this.baseUri + '#X-Amz-Target=ComprehendMedical_20181030.StartICD10CMInferenceJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts an asynchronous job to detect protected health information (PHI). Use the <code>DescribePHIDetectionJob</code> operation to track the status of a job.
		 * Post #X-Amz-Target=ComprehendMedical_20181030.StartPHIDetectionJob
		 * @return {StartPHIDetectionJobResponse} Success
		 */
		StartPHIDetectionJob(requestBody: StartPHIDetectionJobRequest): Observable<StartPHIDetectionJobResponse> {
			return this.http.post<StartPHIDetectionJobResponse>(this.baseUri + '#X-Amz-Target=ComprehendMedical_20181030.StartPHIDetectionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts an asynchronous job to detect medication entities and link them to the RxNorm ontology. Use the <code>DescribeRxNormInferenceJob</code> operation to track the status of a job.
		 * Post #X-Amz-Target=ComprehendMedical_20181030.StartRxNormInferenceJob
		 * @return {StartRxNormInferenceJobResponse} Success
		 */
		StartRxNormInferenceJob(requestBody: StartRxNormInferenceJobRequest): Observable<StartRxNormInferenceJobResponse> {
			return this.http.post<StartRxNormInferenceJobResponse>(this.baseUri + '#X-Amz-Target=ComprehendMedical_20181030.StartRxNormInferenceJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts an asynchronous job to detect medical concepts and link them to the SNOMED-CT ontology. Use the DescribeSNOMEDCTInferenceJob operation to track the status of a job.
		 * Post #X-Amz-Target=ComprehendMedical_20181030.StartSNOMEDCTInferenceJob
		 * @return {StartSNOMEDCTInferenceJobResponse} Success
		 */
		StartSNOMEDCTInferenceJob(requestBody: StartSNOMEDCTInferenceJobRequest): Observable<StartSNOMEDCTInferenceJobResponse> {
			return this.http.post<StartSNOMEDCTInferenceJobResponse>(this.baseUri + '#X-Amz-Target=ComprehendMedical_20181030.StartSNOMEDCTInferenceJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops a medical entities detection job in progress.
		 * Post #X-Amz-Target=ComprehendMedical_20181030.StopEntitiesDetectionV2Job
		 * @return {StopEntitiesDetectionV2JobResponse} Success
		 */
		StopEntitiesDetectionV2Job(requestBody: StopEntitiesDetectionV2JobRequest): Observable<StopEntitiesDetectionV2JobResponse> {
			return this.http.post<StopEntitiesDetectionV2JobResponse>(this.baseUri + '#X-Amz-Target=ComprehendMedical_20181030.StopEntitiesDetectionV2Job', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops an InferICD10CM inference job in progress.
		 * Post #X-Amz-Target=ComprehendMedical_20181030.StopICD10CMInferenceJob
		 * @return {StopICD10CMInferenceJobResponse} Success
		 */
		StopICD10CMInferenceJob(requestBody: StopICD10CMInferenceJobRequest): Observable<StopICD10CMInferenceJobResponse> {
			return this.http.post<StopICD10CMInferenceJobResponse>(this.baseUri + '#X-Amz-Target=ComprehendMedical_20181030.StopICD10CMInferenceJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops a protected health information (PHI) detection job in progress.
		 * Post #X-Amz-Target=ComprehendMedical_20181030.StopPHIDetectionJob
		 * @return {StopPHIDetectionJobResponse} Success
		 */
		StopPHIDetectionJob(requestBody: StopPHIDetectionJobRequest): Observable<StopPHIDetectionJobResponse> {
			return this.http.post<StopPHIDetectionJobResponse>(this.baseUri + '#X-Amz-Target=ComprehendMedical_20181030.StopPHIDetectionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops an InferRxNorm inference job in progress.
		 * Post #X-Amz-Target=ComprehendMedical_20181030.StopRxNormInferenceJob
		 * @return {StopRxNormInferenceJobResponse} Success
		 */
		StopRxNormInferenceJob(requestBody: StopRxNormInferenceJobRequest): Observable<StopRxNormInferenceJobResponse> {
			return this.http.post<StopRxNormInferenceJobResponse>(this.baseUri + '#X-Amz-Target=ComprehendMedical_20181030.StopRxNormInferenceJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops an InferSNOMEDCT inference job in progress.
		 * Post #X-Amz-Target=ComprehendMedical_20181030.StopSNOMEDCTInferenceJob
		 * @return {StopSNOMEDCTInferenceJobResponse} Success
		 */
		StopSNOMEDCTInferenceJob(requestBody: StopSNOMEDCTInferenceJobRequest): Observable<StopSNOMEDCTInferenceJobResponse> {
			return this.http.post<StopSNOMEDCTInferenceJobResponse>(this.baseUri + '#X-Amz-Target=ComprehendMedical_20181030.StopSNOMEDCTInferenceJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum DescribeEntitiesDetectionV2JobX_Amz_Target { 'ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job' = 'ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job' }

	export enum DescribeICD10CMInferenceJobX_Amz_Target { 'ComprehendMedical_20181030.DescribeICD10CMInferenceJob' = 'ComprehendMedical_20181030.DescribeICD10CMInferenceJob' }

	export enum DescribePHIDetectionJobX_Amz_Target { 'ComprehendMedical_20181030.DescribePHIDetectionJob' = 'ComprehendMedical_20181030.DescribePHIDetectionJob' }

	export enum DescribeRxNormInferenceJobX_Amz_Target { 'ComprehendMedical_20181030.DescribeRxNormInferenceJob' = 'ComprehendMedical_20181030.DescribeRxNormInferenceJob' }

	export enum DescribeSNOMEDCTInferenceJobX_Amz_Target { 'ComprehendMedical_20181030.DescribeSNOMEDCTInferenceJob' = 'ComprehendMedical_20181030.DescribeSNOMEDCTInferenceJob' }

	export enum DetectEntitiesX_Amz_Target { 'ComprehendMedical_20181030.DetectEntities' = 'ComprehendMedical_20181030.DetectEntities' }

	export enum DetectEntitiesV2X_Amz_Target { 'ComprehendMedical_20181030.DetectEntitiesV2' = 'ComprehendMedical_20181030.DetectEntitiesV2' }

	export enum DetectPHIX_Amz_Target { 'ComprehendMedical_20181030.DetectPHI' = 'ComprehendMedical_20181030.DetectPHI' }

	export enum InferICD10CMX_Amz_Target { 'ComprehendMedical_20181030.InferICD10CM' = 'ComprehendMedical_20181030.InferICD10CM' }

	export enum InferRxNormX_Amz_Target { 'ComprehendMedical_20181030.InferRxNorm' = 'ComprehendMedical_20181030.InferRxNorm' }

	export enum InferSNOMEDCTX_Amz_Target { 'ComprehendMedical_20181030.InferSNOMEDCT' = 'ComprehendMedical_20181030.InferSNOMEDCT' }

	export enum ListEntitiesDetectionV2JobsX_Amz_Target { 'ComprehendMedical_20181030.ListEntitiesDetectionV2Jobs' = 'ComprehendMedical_20181030.ListEntitiesDetectionV2Jobs' }

	export enum ListICD10CMInferenceJobsX_Amz_Target { 'ComprehendMedical_20181030.ListICD10CMInferenceJobs' = 'ComprehendMedical_20181030.ListICD10CMInferenceJobs' }

	export enum ListPHIDetectionJobsX_Amz_Target { 'ComprehendMedical_20181030.ListPHIDetectionJobs' = 'ComprehendMedical_20181030.ListPHIDetectionJobs' }

	export enum ListRxNormInferenceJobsX_Amz_Target { 'ComprehendMedical_20181030.ListRxNormInferenceJobs' = 'ComprehendMedical_20181030.ListRxNormInferenceJobs' }

	export enum ListSNOMEDCTInferenceJobsX_Amz_Target { 'ComprehendMedical_20181030.ListSNOMEDCTInferenceJobs' = 'ComprehendMedical_20181030.ListSNOMEDCTInferenceJobs' }

	export enum StartEntitiesDetectionV2JobX_Amz_Target { 'ComprehendMedical_20181030.StartEntitiesDetectionV2Job' = 'ComprehendMedical_20181030.StartEntitiesDetectionV2Job' }

	export enum StartICD10CMInferenceJobX_Amz_Target { 'ComprehendMedical_20181030.StartICD10CMInferenceJob' = 'ComprehendMedical_20181030.StartICD10CMInferenceJob' }

	export enum StartPHIDetectionJobX_Amz_Target { 'ComprehendMedical_20181030.StartPHIDetectionJob' = 'ComprehendMedical_20181030.StartPHIDetectionJob' }

	export enum StartRxNormInferenceJobX_Amz_Target { 'ComprehendMedical_20181030.StartRxNormInferenceJob' = 'ComprehendMedical_20181030.StartRxNormInferenceJob' }

	export enum StartSNOMEDCTInferenceJobX_Amz_Target { 'ComprehendMedical_20181030.StartSNOMEDCTInferenceJob' = 'ComprehendMedical_20181030.StartSNOMEDCTInferenceJob' }

	export enum StopEntitiesDetectionV2JobX_Amz_Target { 'ComprehendMedical_20181030.StopEntitiesDetectionV2Job' = 'ComprehendMedical_20181030.StopEntitiesDetectionV2Job' }

	export enum StopICD10CMInferenceJobX_Amz_Target { 'ComprehendMedical_20181030.StopICD10CMInferenceJob' = 'ComprehendMedical_20181030.StopICD10CMInferenceJob' }

	export enum StopPHIDetectionJobX_Amz_Target { 'ComprehendMedical_20181030.StopPHIDetectionJob' = 'ComprehendMedical_20181030.StopPHIDetectionJob' }

	export enum StopRxNormInferenceJobX_Amz_Target { 'ComprehendMedical_20181030.StopRxNormInferenceJob' = 'ComprehendMedical_20181030.StopRxNormInferenceJob' }

	export enum StopSNOMEDCTInferenceJobX_Amz_Target { 'ComprehendMedical_20181030.StopSNOMEDCTInferenceJob' = 'ComprehendMedical_20181030.StopSNOMEDCTInferenceJob' }

}

