import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface DescribeEntitiesDetectionV2JobResponse {

		/** Provides information about a detection job. */
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
		JobId?: string | null;
		JobName?: string | null;
		JobStatus?: ComprehendMedicalAsyncJobPropertiesJobStatus | null;
		Message?: string | null;
		SubmitTime?: Date | null;
		EndTime?: Date | null;
		ExpirationTime?: Date | null;

		/** The input properties for an entities detection job. This includes the name of the S3 bucket and the path to the files to be analyzed. See <a>batch-manifest</a> for more information. */
		InputDataConfig?: InputDataConfig;

		/** The output properties for a detection job. */
		OutputDataConfig?: OutputDataConfig;
		LanguageCode?: ComprehendMedicalAsyncJobPropertiesLanguageCode | null;
		DataAccessRoleArn?: string | null;
		ManifestFilePath?: string | null;
		KMSKey?: string | null;
		ModelVersion?: string | null;
	}

	/** Provides information about a detection job. */
	export interface ComprehendMedicalAsyncJobPropertiesFormProperties {
		JobId: FormControl<string | null | undefined>,
		JobName: FormControl<string | null | undefined>,
		JobStatus: FormControl<ComprehendMedicalAsyncJobPropertiesJobStatus | null | undefined>,
		Message: FormControl<string | null | undefined>,
		SubmitTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		ExpirationTime: FormControl<Date | null | undefined>,
		LanguageCode: FormControl<ComprehendMedicalAsyncJobPropertiesLanguageCode | null | undefined>,
		DataAccessRoleArn: FormControl<string | null | undefined>,
		ManifestFilePath: FormControl<string | null | undefined>,
		KMSKey: FormControl<string | null | undefined>,
		ModelVersion: FormControl<string | null | undefined>,
	}
	export function CreateComprehendMedicalAsyncJobPropertiesFormGroup() {
		return new FormGroup<ComprehendMedicalAsyncJobPropertiesFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			JobName: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<ComprehendMedicalAsyncJobPropertiesJobStatus | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			SubmitTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			ExpirationTime: new FormControl<Date | null | undefined>(undefined),
			LanguageCode: new FormControl<ComprehendMedicalAsyncJobPropertiesLanguageCode | null | undefined>(undefined),
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			ManifestFilePath: new FormControl<string | null | undefined>(undefined),
			KMSKey: new FormControl<string | null | undefined>(undefined),
			ModelVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ComprehendMedicalAsyncJobPropertiesJobStatus { SUBMITTED = 0, IN_PROGRESS = 1, COMPLETED = 2, PARTIAL_SUCCESS = 3, FAILED = 4, STOP_REQUESTED = 5, STOPPED = 6 }


	/** The input properties for an entities detection job. This includes the name of the S3 bucket and the path to the files to be analyzed. See <a>batch-manifest</a> for more information.  */
	export interface InputDataConfig {
		S3Bucket: string;
		S3Key?: string | null;
	}

	/** The input properties for an entities detection job. This includes the name of the S3 bucket and the path to the files to be analyzed. See <a>batch-manifest</a> for more information.  */
	export interface InputDataConfigFormProperties {
		S3Bucket: FormControl<string | null | undefined>,
		S3Key: FormControl<string | null | undefined>,
	}
	export function CreateInputDataConfigFormGroup() {
		return new FormGroup<InputDataConfigFormProperties>({
			S3Bucket: new FormControl<string | null | undefined>(undefined),
			S3Key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The output properties for a detection job. */
	export interface OutputDataConfig {
		S3Bucket: string;
		S3Key?: string | null;
	}

	/** The output properties for a detection job. */
	export interface OutputDataConfigFormProperties {
		S3Bucket: FormControl<string | null | undefined>,
		S3Key: FormControl<string | null | undefined>,
	}
	export function CreateOutputDataConfigFormGroup() {
		return new FormGroup<OutputDataConfigFormProperties>({
			S3Bucket: new FormControl<string | null | undefined>(undefined),
			S3Key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ComprehendMedicalAsyncJobPropertiesLanguageCode { en = 0 }

	export interface DescribeEntitiesDetectionV2JobRequest {
		JobId: string;
	}
	export interface DescribeEntitiesDetectionV2JobRequestFormProperties {
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEntitiesDetectionV2JobRequestFormGroup() {
		return new FormGroup<DescribeEntitiesDetectionV2JobRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
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

		/** Provides information about a detection job. */
		ComprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties;
	}
	export interface DescribeICD10CMInferenceJobResponseFormProperties {
	}
	export function CreateDescribeICD10CMInferenceJobResponseFormGroup() {
		return new FormGroup<DescribeICD10CMInferenceJobResponseFormProperties>({
		});

	}

	export interface DescribeICD10CMInferenceJobRequest {
		JobId: string;
	}
	export interface DescribeICD10CMInferenceJobRequestFormProperties {
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeICD10CMInferenceJobRequestFormGroup() {
		return new FormGroup<DescribeICD10CMInferenceJobRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribePHIDetectionJobResponse {

		/** Provides information about a detection job. */
		ComprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties;
	}
	export interface DescribePHIDetectionJobResponseFormProperties {
	}
	export function CreateDescribePHIDetectionJobResponseFormGroup() {
		return new FormGroup<DescribePHIDetectionJobResponseFormProperties>({
		});

	}

	export interface DescribePHIDetectionJobRequest {
		JobId: string;
	}
	export interface DescribePHIDetectionJobRequestFormProperties {
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateDescribePHIDetectionJobRequestFormGroup() {
		return new FormGroup<DescribePHIDetectionJobRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeRxNormInferenceJobResponse {

		/** Provides information about a detection job. */
		ComprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties;
	}
	export interface DescribeRxNormInferenceJobResponseFormProperties {
	}
	export function CreateDescribeRxNormInferenceJobResponseFormGroup() {
		return new FormGroup<DescribeRxNormInferenceJobResponseFormProperties>({
		});

	}

	export interface DescribeRxNormInferenceJobRequest {
		JobId: string;
	}
	export interface DescribeRxNormInferenceJobRequestFormProperties {
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRxNormInferenceJobRequestFormGroup() {
		return new FormGroup<DescribeRxNormInferenceJobRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DetectEntitiesResponse {
		Entities: Array<Entity>;
		UnmappedAttributes?: Array<UnmappedAttribute>;
		PaginationToken?: string | null;
		ModelVersion: string;
	}
	export interface DetectEntitiesResponseFormProperties {
		PaginationToken: FormControl<string | null | undefined>,
		ModelVersion: FormControl<string | null | undefined>,
	}
	export function CreateDetectEntitiesResponseFormGroup() {
		return new FormGroup<DetectEntitiesResponseFormProperties>({
			PaginationToken: new FormControl<string | null | undefined>(undefined),
			ModelVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Provides information about an extracted medical entity. */
	export interface Entity {
		Id?: number | null;
		BeginOffset?: number | null;
		EndOffset?: number | null;
		Score?: number | null;
		Text?: string | null;
		Category?: EntityCategory | null;
		Type?: EntityType | null;
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
		Category: FormControl<EntityCategory | null | undefined>,
		Type: FormControl<EntityType | null | undefined>,
	}
	export function CreateEntityFormGroup() {
		return new FormGroup<EntityFormProperties>({
			Id: new FormControl<number | null | undefined>(undefined),
			BeginOffset: new FormControl<number | null | undefined>(undefined),
			EndOffset: new FormControl<number | null | undefined>(undefined),
			Score: new FormControl<number | null | undefined>(undefined),
			Text: new FormControl<string | null | undefined>(undefined),
			Category: new FormControl<EntityCategory | null | undefined>(undefined),
			Type: new FormControl<EntityType | null | undefined>(undefined),
		});

	}

	export enum EntityCategory { MEDICATION = 0, MEDICAL_CONDITION = 1, PROTECTED_HEALTH_INFORMATION = 2, TEST_TREATMENT_PROCEDURE = 3, ANATOMY = 4, TIME_EXPRESSION = 5 }

	export enum EntityType { NAME = 0, DOSAGE = 1, ROUTE_OR_MODE = 2, FORM = 3, FREQUENCY = 4, DURATION = 5, GENERIC_NAME = 6, BRAND_NAME = 7, STRENGTH = 8, RATE = 9, ACUITY = 10, TEST_NAME = 11, TEST_VALUE = 12, TEST_UNITS = 13, PROCEDURE_NAME = 14, TREATMENT_NAME = 15, DATE = 16, AGE = 17, CONTACT_POINT = 18, EMAIL = 19, IDENTIFIER = 20, URL = 21, ADDRESS = 22, PROFESSION = 23, SYSTEM_ORGAN_SITE = 24, DIRECTION = 25, QUALITY = 26, QUANTITY = 27, TIME_EXPRESSION = 28, TIME_TO_MEDICATION_NAME = 29, TIME_TO_DX_NAME = 30, TIME_TO_TEST_NAME = 31, TIME_TO_PROCEDURE_NAME = 32, TIME_TO_TREATMENT_NAME = 33 }


	/**  Provides contextual information about the extracted entity.  */
	export interface Trait {
		Name?: TraitName | null;
		Score?: number | null;
	}

	/**  Provides contextual information about the extracted entity.  */
	export interface TraitFormProperties {
		Name: FormControl<TraitName | null | undefined>,
		Score: FormControl<number | null | undefined>,
	}
	export function CreateTraitFormGroup() {
		return new FormGroup<TraitFormProperties>({
			Name: new FormControl<TraitName | null | undefined>(undefined),
			Score: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum TraitName { SIGN = 0, SYMPTOM = 1, DIAGNOSIS = 2, NEGATION = 3 }


	/**  An extracted segment of the text that is an attribute of an entity, or otherwise related to an entity, such as the dosage of a medication taken. It contains information about the attribute such as id, begin and end offset within the input text, and the segment of the input text.  */
	export interface Attribute {
		Type?: EntityType | null;
		Score?: number | null;
		RelationshipScore?: number | null;
		RelationshipType?: AttributeRelationshipType | null;
		Id?: number | null;
		BeginOffset?: number | null;
		EndOffset?: number | null;
		Text?: string | null;
		Category?: EntityCategory | null;
		Traits?: Array<Trait>;
	}

	/**  An extracted segment of the text that is an attribute of an entity, or otherwise related to an entity, such as the dosage of a medication taken. It contains information about the attribute such as id, begin and end offset within the input text, and the segment of the input text.  */
	export interface AttributeFormProperties {
		Type: FormControl<EntityType | null | undefined>,
		Score: FormControl<number | null | undefined>,
		RelationshipScore: FormControl<number | null | undefined>,
		RelationshipType: FormControl<AttributeRelationshipType | null | undefined>,
		Id: FormControl<number | null | undefined>,
		BeginOffset: FormControl<number | null | undefined>,
		EndOffset: FormControl<number | null | undefined>,
		Text: FormControl<string | null | undefined>,
		Category: FormControl<EntityCategory | null | undefined>,
	}
	export function CreateAttributeFormGroup() {
		return new FormGroup<AttributeFormProperties>({
			Type: new FormControl<EntityType | null | undefined>(undefined),
			Score: new FormControl<number | null | undefined>(undefined),
			RelationshipScore: new FormControl<number | null | undefined>(undefined),
			RelationshipType: new FormControl<AttributeRelationshipType | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			BeginOffset: new FormControl<number | null | undefined>(undefined),
			EndOffset: new FormControl<number | null | undefined>(undefined),
			Text: new FormControl<string | null | undefined>(undefined),
			Category: new FormControl<EntityCategory | null | undefined>(undefined),
		});

	}

	export enum AttributeRelationshipType { EVERY = 0, WITH_DOSAGE = 1, ADMINISTERED_VIA = 2, FOR = 3, NEGATIVE = 4, OVERLAP = 5, DOSAGE = 6, ROUTE_OR_MODE = 7, FORM = 8, FREQUENCY = 9, DURATION = 10, STRENGTH = 11, RATE = 12, ACUITY = 13, TEST_VALUE = 14, TEST_UNITS = 15, DIRECTION = 16 }


	/**  An attribute that we extracted, but were unable to relate to an entity.  */
	export interface UnmappedAttribute {
		Type?: EntityCategory | null;

		/** An extracted segment of the text that is an attribute of an entity, or otherwise related to an entity, such as the dosage of a medication taken. It contains information about the attribute such as id, begin and end offset within the input text, and the segment of the input text. */
		Attribute?: Attribute;
	}

	/**  An attribute that we extracted, but were unable to relate to an entity.  */
	export interface UnmappedAttributeFormProperties {
		Type: FormControl<EntityCategory | null | undefined>,
	}
	export function CreateUnmappedAttributeFormGroup() {
		return new FormGroup<UnmappedAttributeFormProperties>({
			Type: new FormControl<EntityCategory | null | undefined>(undefined),
		});

	}

	export interface DetectEntitiesRequest {
		Text: string;
	}
	export interface DetectEntitiesRequestFormProperties {
		Text: FormControl<string | null | undefined>,
	}
	export function CreateDetectEntitiesRequestFormGroup() {
		return new FormGroup<DetectEntitiesRequestFormProperties>({
			Text: new FormControl<string | null | undefined>(undefined),
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
		Entities: Array<Entity>;
		UnmappedAttributes?: Array<UnmappedAttribute>;
		PaginationToken?: string | null;
		ModelVersion: string;
	}
	export interface DetectEntitiesV2ResponseFormProperties {
		PaginationToken: FormControl<string | null | undefined>,
		ModelVersion: FormControl<string | null | undefined>,
	}
	export function CreateDetectEntitiesV2ResponseFormGroup() {
		return new FormGroup<DetectEntitiesV2ResponseFormProperties>({
			PaginationToken: new FormControl<string | null | undefined>(undefined),
			ModelVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DetectEntitiesV2Request {
		Text: string;
	}
	export interface DetectEntitiesV2RequestFormProperties {
		Text: FormControl<string | null | undefined>,
	}
	export function CreateDetectEntitiesV2RequestFormGroup() {
		return new FormGroup<DetectEntitiesV2RequestFormProperties>({
			Text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DetectPHIResponse {
		Entities: Array<Entity>;
		PaginationToken?: string | null;
		ModelVersion: string;
	}
	export interface DetectPHIResponseFormProperties {
		PaginationToken: FormControl<string | null | undefined>,
		ModelVersion: FormControl<string | null | undefined>,
	}
	export function CreateDetectPHIResponseFormGroup() {
		return new FormGroup<DetectPHIResponseFormProperties>({
			PaginationToken: new FormControl<string | null | undefined>(undefined),
			ModelVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DetectPHIRequest {
		Text: string;
	}
	export interface DetectPHIRequestFormProperties {
		Text: FormControl<string | null | undefined>,
	}
	export function CreateDetectPHIRequestFormGroup() {
		return new FormGroup<DetectPHIRequestFormProperties>({
			Text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InferICD10CMResponse {
		Entities: Array<ICD10CMEntity>;
		PaginationToken?: string | null;
		ModelVersion?: string | null;
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
		Text?: string | null;
		Category?: ICD10CMEntityCategory | null;
		Type?: ICD10CMEntityType | null;
		Score?: number | null;
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

	export enum ICD10CMEntityCategory { MEDICAL_CONDITION = 0 }

	export enum ICD10CMEntityType { DX_NAME = 0 }


	/** The detected attributes that relate to an entity. This includes an extracted segment of the text that is an attribute of an entity, or otherwise related to an entity. InferICD10CM detects the following attributes: <code>Direction</code>, <code>System, Organ or Site</code>, and <code>Acuity</code>. */
	export interface ICD10CMAttribute {
		Type?: ICD10CMAttributeType | null;
		Score?: number | null;
		RelationshipScore?: number | null;
		Id?: number | null;
		BeginOffset?: number | null;
		EndOffset?: number | null;
		Text?: string | null;
		Traits?: Array<ICD10CMTrait>;
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
		});

	}

	export enum ICD10CMAttributeType { ACUITY = 0, DIRECTION = 1, SYSTEM_ORGAN_SITE = 2, QUALITY = 3, QUANTITY = 4 }


	/** Contextual information for the entity. The traits recognized by InferICD10CM are <code>DIAGNOSIS</code>, <code>SIGN</code>, <code>SYMPTOM</code>, and <code>NEGATION</code>. */
	export interface ICD10CMTrait {
		Name?: ICD10CMTraitName | null;
		Score?: number | null;
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

	export enum ICD10CMTraitName { NEGATION = 0, DIAGNOSIS = 1, SIGN = 2, SYMPTOM = 3 }


	/**  The ICD-10-CM concepts that the entity could refer to, along with a score indicating the likelihood of the match. */
	export interface ICD10CMConcept {
		Description?: string | null;
		Code?: string | null;
		Score?: number | null;
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
		Text: string;
	}
	export interface InferICD10CMRequestFormProperties {
		Text: FormControl<string | null | undefined>,
	}
	export function CreateInferICD10CMRequestFormGroup() {
		return new FormGroup<InferICD10CMRequestFormProperties>({
			Text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InferRxNormResponse {
		Entities: Array<RxNormEntity>;
		PaginationToken?: string | null;
		ModelVersion?: string | null;
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
		Text?: string | null;
		Category?: RxNormEntityCategory | null;
		Type?: RxNormEntityType | null;
		Score?: number | null;
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

	export enum RxNormEntityCategory { MEDICATION = 0 }

	export enum RxNormEntityType { BRAND_NAME = 0, GENERIC_NAME = 1 }


	/** The extracted attributes that relate to this entity. The attributes recognized by InferRxNorm are <code>DOSAGE</code>, <code>DURATION</code>, <code>FORM</code>, <code>FREQUENCY</code>, <code>RATE</code>, <code>ROUTE_OR_MODE</code>. */
	export interface RxNormAttribute {
		Type?: RxNormAttributeType | null;
		Score?: number | null;
		RelationshipScore?: number | null;
		Id?: number | null;
		BeginOffset?: number | null;
		EndOffset?: number | null;
		Text?: string | null;
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

	export enum RxNormAttributeType { DOSAGE = 0, DURATION = 1, FORM = 2, FREQUENCY = 3, RATE = 4, ROUTE_OR_MODE = 5, STRENGTH = 6 }


	/** The contextual information for the entity. InferRxNorm recognizes the trait <code>NEGATION</code>, which is any indication that the patient is not taking a medication.  */
	export interface RxNormTrait {
		Name?: RxNormTraitName | null;
		Score?: number | null;
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

	export enum RxNormTraitName { NEGATION = 0 }


	/** The RxNorm concept that the entity could refer to, along with a score indicating the likelihood of the match. */
	export interface RxNormConcept {
		Description?: string | null;
		Code?: string | null;
		Score?: number | null;
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
		Text: string;
	}
	export interface InferRxNormRequestFormProperties {
		Text: FormControl<string | null | undefined>,
	}
	export function CreateInferRxNormRequestFormGroup() {
		return new FormGroup<InferRxNormRequestFormProperties>({
			Text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListEntitiesDetectionV2JobsResponse {
		ComprehendMedicalAsyncJobPropertiesList?: Array<ComprehendMedicalAsyncJobProperties>;
		NextToken?: string | null;
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

		/** Provides information for filtering a list of detection jobs. */
		Filter?: ComprehendMedicalAsyncJobFilter;
		NextToken?: string | null;
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
		JobName?: string | null;
		JobStatus?: ComprehendMedicalAsyncJobPropertiesJobStatus | null;
		SubmitTimeBefore?: Date | null;
		SubmitTimeAfter?: Date | null;
	}

	/** Provides information for filtering a list of detection jobs. */
	export interface ComprehendMedicalAsyncJobFilterFormProperties {
		JobName: FormControl<string | null | undefined>,
		JobStatus: FormControl<ComprehendMedicalAsyncJobPropertiesJobStatus | null | undefined>,
		SubmitTimeBefore: FormControl<Date | null | undefined>,
		SubmitTimeAfter: FormControl<Date | null | undefined>,
	}
	export function CreateComprehendMedicalAsyncJobFilterFormGroup() {
		return new FormGroup<ComprehendMedicalAsyncJobFilterFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<ComprehendMedicalAsyncJobPropertiesJobStatus | null | undefined>(undefined),
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
		NextToken?: string | null;
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

		/** Provides information for filtering a list of detection jobs. */
		Filter?: ComprehendMedicalAsyncJobFilter;
		NextToken?: string | null;
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
		NextToken?: string | null;
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

		/** Provides information for filtering a list of detection jobs. */
		Filter?: ComprehendMedicalAsyncJobFilter;
		NextToken?: string | null;
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
		NextToken?: string | null;
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

		/** Provides information for filtering a list of detection jobs. */
		Filter?: ComprehendMedicalAsyncJobFilter;
		NextToken?: string | null;
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

	export interface StartEntitiesDetectionV2JobResponse {
		JobId?: string | null;
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

		/**
		 * The input properties for an entities detection job. This includes the name of the S3 bucket and the path to the files to be analyzed. See <a>batch-manifest</a> for more information.
		 * Required
		 */
		InputDataConfig: InputDataConfig;

		/**
		 * The output properties for a detection job.
		 * Required
		 */
		OutputDataConfig: OutputDataConfig;
		DataAccessRoleArn: string;
		JobName?: string | null;
		ClientRequestToken?: string | null;
		KMSKey?: string | null;
		LanguageCode: ComprehendMedicalAsyncJobPropertiesLanguageCode;
	}
	export interface StartEntitiesDetectionV2JobRequestFormProperties {
		DataAccessRoleArn: FormControl<string | null | undefined>,
		JobName: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
		KMSKey: FormControl<string | null | undefined>,
		LanguageCode: FormControl<ComprehendMedicalAsyncJobPropertiesLanguageCode | null | undefined>,
	}
	export function CreateStartEntitiesDetectionV2JobRequestFormGroup() {
		return new FormGroup<StartEntitiesDetectionV2JobRequestFormProperties>({
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			JobName: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			KMSKey: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<ComprehendMedicalAsyncJobPropertiesLanguageCode | null | undefined>(undefined),
		});

	}

	export interface StartICD10CMInferenceJobResponse {
		JobId?: string | null;
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

		/**
		 * The input properties for an entities detection job. This includes the name of the S3 bucket and the path to the files to be analyzed. See <a>batch-manifest</a> for more information.
		 * Required
		 */
		InputDataConfig: InputDataConfig;

		/**
		 * The output properties for a detection job.
		 * Required
		 */
		OutputDataConfig: OutputDataConfig;
		DataAccessRoleArn: string;
		JobName?: string | null;
		ClientRequestToken?: string | null;
		KMSKey?: string | null;
		LanguageCode: ComprehendMedicalAsyncJobPropertiesLanguageCode;
	}
	export interface StartICD10CMInferenceJobRequestFormProperties {
		DataAccessRoleArn: FormControl<string | null | undefined>,
		JobName: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
		KMSKey: FormControl<string | null | undefined>,
		LanguageCode: FormControl<ComprehendMedicalAsyncJobPropertiesLanguageCode | null | undefined>,
	}
	export function CreateStartICD10CMInferenceJobRequestFormGroup() {
		return new FormGroup<StartICD10CMInferenceJobRequestFormProperties>({
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			JobName: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			KMSKey: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<ComprehendMedicalAsyncJobPropertiesLanguageCode | null | undefined>(undefined),
		});

	}

	export interface StartPHIDetectionJobResponse {
		JobId?: string | null;
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

		/**
		 * The input properties for an entities detection job. This includes the name of the S3 bucket and the path to the files to be analyzed. See <a>batch-manifest</a> for more information.
		 * Required
		 */
		InputDataConfig: InputDataConfig;

		/**
		 * The output properties for a detection job.
		 * Required
		 */
		OutputDataConfig: OutputDataConfig;
		DataAccessRoleArn: string;
		JobName?: string | null;
		ClientRequestToken?: string | null;
		KMSKey?: string | null;
		LanguageCode: ComprehendMedicalAsyncJobPropertiesLanguageCode;
	}
	export interface StartPHIDetectionJobRequestFormProperties {
		DataAccessRoleArn: FormControl<string | null | undefined>,
		JobName: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
		KMSKey: FormControl<string | null | undefined>,
		LanguageCode: FormControl<ComprehendMedicalAsyncJobPropertiesLanguageCode | null | undefined>,
	}
	export function CreateStartPHIDetectionJobRequestFormGroup() {
		return new FormGroup<StartPHIDetectionJobRequestFormProperties>({
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			JobName: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			KMSKey: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<ComprehendMedicalAsyncJobPropertiesLanguageCode | null | undefined>(undefined),
		});

	}

	export interface StartRxNormInferenceJobResponse {
		JobId?: string | null;
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

		/**
		 * The input properties for an entities detection job. This includes the name of the S3 bucket and the path to the files to be analyzed. See <a>batch-manifest</a> for more information.
		 * Required
		 */
		InputDataConfig: InputDataConfig;

		/**
		 * The output properties for a detection job.
		 * Required
		 */
		OutputDataConfig: OutputDataConfig;
		DataAccessRoleArn: string;
		JobName?: string | null;
		ClientRequestToken?: string | null;
		KMSKey?: string | null;
		LanguageCode: ComprehendMedicalAsyncJobPropertiesLanguageCode;
	}
	export interface StartRxNormInferenceJobRequestFormProperties {
		DataAccessRoleArn: FormControl<string | null | undefined>,
		JobName: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
		KMSKey: FormControl<string | null | undefined>,
		LanguageCode: FormControl<ComprehendMedicalAsyncJobPropertiesLanguageCode | null | undefined>,
	}
	export function CreateStartRxNormInferenceJobRequestFormGroup() {
		return new FormGroup<StartRxNormInferenceJobRequestFormProperties>({
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			JobName: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			KMSKey: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<ComprehendMedicalAsyncJobPropertiesLanguageCode | null | undefined>(undefined),
		});

	}

	export interface StopEntitiesDetectionV2JobResponse {
		JobId?: string | null;
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
		JobId: string;
	}
	export interface StopEntitiesDetectionV2JobRequestFormProperties {
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStopEntitiesDetectionV2JobRequestFormGroup() {
		return new FormGroup<StopEntitiesDetectionV2JobRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StopICD10CMInferenceJobResponse {
		JobId?: string | null;
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
		JobId: string;
	}
	export interface StopICD10CMInferenceJobRequestFormProperties {
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStopICD10CMInferenceJobRequestFormGroup() {
		return new FormGroup<StopICD10CMInferenceJobRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StopPHIDetectionJobResponse {
		JobId?: string | null;
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
		JobId: string;
	}
	export interface StopPHIDetectionJobRequestFormProperties {
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStopPHIDetectionJobRequestFormGroup() {
		return new FormGroup<StopPHIDetectionJobRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StopRxNormInferenceJobResponse {
		JobId?: string | null;
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
		JobId: string;
	}
	export interface StopRxNormInferenceJobRequestFormProperties {
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStopRxNormInferenceJobRequestFormGroup() {
		return new FormGroup<StopRxNormInferenceJobRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EntitySubType { NAME = 0, DOSAGE = 1, ROUTE_OR_MODE = 2, FORM = 3, FREQUENCY = 4, DURATION = 5, GENERIC_NAME = 6, BRAND_NAME = 7, STRENGTH = 8, RATE = 9, ACUITY = 10, TEST_NAME = 11, TEST_VALUE = 12, TEST_UNITS = 13, PROCEDURE_NAME = 14, TREATMENT_NAME = 15, DATE = 16, AGE = 17, CONTACT_POINT = 18, EMAIL = 19, IDENTIFIER = 20, URL = 21, ADDRESS = 22, PROFESSION = 23, SYSTEM_ORGAN_SITE = 24, DIRECTION = 25, QUALITY = 26, QUANTITY = 27, TIME_EXPRESSION = 28, TIME_TO_MEDICATION_NAME = 29, TIME_TO_DX_NAME = 30, TIME_TO_TEST_NAME = 31, TIME_TO_PROCEDURE_NAME = 32, TIME_TO_TREATMENT_NAME = 33 }

	export enum RelationshipType { EVERY = 0, WITH_DOSAGE = 1, ADMINISTERED_VIA = 2, FOR = 3, NEGATIVE = 4, OVERLAP = 5, DOSAGE = 6, ROUTE_OR_MODE = 7, FORM = 8, FREQUENCY = 9, DURATION = 10, STRENGTH = 11, RATE = 12, ACUITY = 13, TEST_VALUE = 14, TEST_UNITS = 15, DIRECTION = 16 }

	export enum AttributeName { SIGN = 0, SYMPTOM = 1, DIAGNOSIS = 2, NEGATION = 3 }

	export enum JobStatus { SUBMITTED = 0, IN_PROGRESS = 1, COMPLETED = 2, PARTIAL_SUCCESS = 3, FAILED = 4, STOP_REQUESTED = 5, STOPPED = 6 }

	export enum LanguageCode { en = 0 }

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
		 * <p>The <code>DetectEntities</code> operation is deprecated. You should use the <a>DetectEntitiesV2</a> operation instead.</p> <p> Inspects the clinical text for a variety of medical entities and returns specific information about them such as entity category, location, and confidence score on that information .</p>
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
		 * Gets a list of protected health information (PHI) detection jobs that you have submitted.
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
	}

	export enum DescribeEntitiesDetectionV2JobX_Amz_Target { ComprehendMedical_20181030_DescribeEntitiesDetectionV2Job = 0 }

	export enum DescribeICD10CMInferenceJobX_Amz_Target { ComprehendMedical_20181030_DescribeICD10CMInferenceJob = 0 }

	export enum DescribePHIDetectionJobX_Amz_Target { ComprehendMedical_20181030_DescribePHIDetectionJob = 0 }

	export enum DescribeRxNormInferenceJobX_Amz_Target { ComprehendMedical_20181030_DescribeRxNormInferenceJob = 0 }

	export enum DetectEntitiesX_Amz_Target { ComprehendMedical_20181030_DetectEntities = 0 }

	export enum DetectEntitiesV2X_Amz_Target { ComprehendMedical_20181030_DetectEntitiesV2 = 0 }

	export enum DetectPHIX_Amz_Target { ComprehendMedical_20181030_DetectPHI = 0 }

	export enum InferICD10CMX_Amz_Target { ComprehendMedical_20181030_InferICD10CM = 0 }

	export enum InferRxNormX_Amz_Target { ComprehendMedical_20181030_InferRxNorm = 0 }

	export enum ListEntitiesDetectionV2JobsX_Amz_Target { ComprehendMedical_20181030_ListEntitiesDetectionV2Jobs = 0 }

	export enum ListICD10CMInferenceJobsX_Amz_Target { ComprehendMedical_20181030_ListICD10CMInferenceJobs = 0 }

	export enum ListPHIDetectionJobsX_Amz_Target { ComprehendMedical_20181030_ListPHIDetectionJobs = 0 }

	export enum ListRxNormInferenceJobsX_Amz_Target { ComprehendMedical_20181030_ListRxNormInferenceJobs = 0 }

	export enum StartEntitiesDetectionV2JobX_Amz_Target { ComprehendMedical_20181030_StartEntitiesDetectionV2Job = 0 }

	export enum StartICD10CMInferenceJobX_Amz_Target { ComprehendMedical_20181030_StartICD10CMInferenceJob = 0 }

	export enum StartPHIDetectionJobX_Amz_Target { ComprehendMedical_20181030_StartPHIDetectionJob = 0 }

	export enum StartRxNormInferenceJobX_Amz_Target { ComprehendMedical_20181030_StartRxNormInferenceJob = 0 }

	export enum StopEntitiesDetectionV2JobX_Amz_Target { ComprehendMedical_20181030_StopEntitiesDetectionV2Job = 0 }

	export enum StopICD10CMInferenceJobX_Amz_Target { ComprehendMedical_20181030_StopICD10CMInferenceJob = 0 }

	export enum StopPHIDetectionJobX_Amz_Target { ComprehendMedical_20181030_StopPHIDetectionJob = 0 }

	export enum StopRxNormInferenceJobX_Amz_Target { ComprehendMedical_20181030_StopRxNormInferenceJob = 0 }

}

