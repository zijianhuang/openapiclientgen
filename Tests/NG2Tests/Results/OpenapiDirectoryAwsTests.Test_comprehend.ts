import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface BatchDetectDominantLanguageResponse {
		ResultList: Array<BatchDetectDominantLanguageItemResult>;
		ErrorList: Array<BatchItemError>;
	}


	/** The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation. */
	export interface BatchDetectDominantLanguageItemResult {
		Index?: number | null;
		Languages?: Array<DominantLanguage> | null;
	}


	/** Returns the code for the dominant language in the input text and the level of confidence that Amazon Comprehend has in the accuracy of the detection. */
	export interface DominantLanguage {
		LanguageCode?: string | null;
		Score?: number | null;
	}


	/** Describes an error that occurred while processing a document in a batch. The operation returns on <code>BatchItemError</code> object for each document that contained an error. */
	export interface BatchItemError {
		Index?: number | null;
		ErrorCode?: string | null;
		ErrorMessage?: string | null;
	}

	export interface BatchDetectDominantLanguageRequest {
		TextList: Array<string>;
	}

	export interface InvalidRequestException {
	}

	export interface TextSizeLimitExceededException {
	}

	export interface BatchSizeLimitExceededException {
	}

	export interface InternalServerException {
	}

	export interface BatchDetectEntitiesResponse {
		ResultList: Array<BatchDetectEntitiesItemResult>;
		ErrorList: Array<BatchItemError>;
	}


	/** The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation. */
	export interface BatchDetectEntitiesItemResult {
		Index?: number | null;
		Entities?: Array<Entity> | null;
	}


	/** <p>Provides information about an entity. </p> <p> </p> */
	export interface Entity {
		Score?: number | null;
		Type?: EntityType | null;
		Text?: string | null;
		BeginOffset?: number | null;
		EndOffset?: number | null;
	}

	export enum EntityType { PERSON = 0, LOCATION = 1, ORGANIZATION = 2, COMMERCIAL_ITEM = 3, EVENT = 4, DATE = 5, QUANTITY = 6, TITLE = 7, OTHER = 8 }

	export interface BatchDetectEntitiesRequest {
		TextList: Array<string>;
		LanguageCode: BatchDetectEntitiesRequestLanguageCode;
	}

	export enum BatchDetectEntitiesRequestLanguageCode { en = 0, es = 1, fr = 2, de = 3, it = 4, pt = 5, ar = 6, hi = 7, ja = 8, ko = 9, zh = 10, zh_TW = 11 }

	export interface UnsupportedLanguageException {
	}

	export interface BatchDetectKeyPhrasesResponse {
		ResultList: Array<BatchDetectKeyPhrasesItemResult>;
		ErrorList: Array<BatchItemError>;
	}


	/** The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation. */
	export interface BatchDetectKeyPhrasesItemResult {
		Index?: number | null;
		KeyPhrases?: Array<KeyPhrase> | null;
	}


	/** Describes a key noun phrase. */
	export interface KeyPhrase {
		Score?: number | null;
		Text?: string | null;
		BeginOffset?: number | null;
		EndOffset?: number | null;
	}

	export interface BatchDetectKeyPhrasesRequest {
		TextList: Array<string>;
		LanguageCode: BatchDetectKeyPhrasesRequestLanguageCode;
	}

	export enum BatchDetectKeyPhrasesRequestLanguageCode { en = 0, es = 1, fr = 2, de = 3, it = 4, pt = 5, ar = 6, hi = 7, ja = 8, ko = 9, zh = 10, zh_TW = 11 }

	export interface BatchDetectSentimentResponse {
		ResultList: Array<BatchDetectSentimentItemResult>;
		ErrorList: Array<BatchItemError>;
	}


	/** The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation. */
	export interface BatchDetectSentimentItemResult {
		Index?: number | null;
		Sentiment?: BatchDetectSentimentItemResultSentiment | null;

		/** Describes the level of confidence that Amazon Comprehend has in the accuracy of its detection of sentiments. */
		SentimentScore?: SentimentScore | null;
	}

	export enum BatchDetectSentimentItemResultSentiment { POSITIVE = 0, NEGATIVE = 1, NEUTRAL = 2, MIXED = 3 }


	/** Describes the level of confidence that Amazon Comprehend has in the accuracy of its detection of sentiments. */
	export interface SentimentScore {
		Positive?: number | null;
		Negative?: number | null;
		Neutral?: number | null;
		Mixed?: number | null;
	}

	export interface BatchDetectSentimentRequest {
		TextList: Array<string>;
		LanguageCode: BatchDetectSentimentRequestLanguageCode;
	}

	export enum BatchDetectSentimentRequestLanguageCode { en = 0, es = 1, fr = 2, de = 3, it = 4, pt = 5, ar = 6, hi = 7, ja = 8, ko = 9, zh = 10, zh_TW = 11 }

	export interface BatchDetectSyntaxResponse {
		ResultList: Array<BatchDetectSyntaxItemResult>;
		ErrorList: Array<BatchItemError>;
	}


	/** The result of calling the operation. The operation returns one object that is successfully processed by the operation. */
	export interface BatchDetectSyntaxItemResult {
		Index?: number | null;
		SyntaxTokens?: Array<SyntaxToken> | null;
	}


	/** Represents a work in the input text that was recognized and assigned a part of speech. There is one syntax token record for each word in the source text. */
	export interface SyntaxToken {
		TokenId?: number | null;
		Text?: string | null;
		BeginOffset?: number | null;
		EndOffset?: number | null;

		/** Identifies the part of speech represented by the token and gives the confidence that Amazon Comprehend has that the part of speech was correctly identified. For more information about the parts of speech that Amazon Comprehend can identify, see <a>how-syntax</a>. */
		PartOfSpeech?: PartOfSpeechTag | null;
	}


	/** Identifies the part of speech represented by the token and gives the confidence that Amazon Comprehend has that the part of speech was correctly identified. For more information about the parts of speech that Amazon Comprehend can identify, see <a>how-syntax</a>. */
	export interface PartOfSpeechTag {
		Tag?: PartOfSpeechTagTag | null;
		Score?: number | null;
	}

	export enum PartOfSpeechTagTag { ADJ = 0, ADP = 1, ADV = 2, AUX = 3, CONJ = 4, CCONJ = 5, DET = 6, INTJ = 7, NOUN = 8, NUM = 9, O = 10, PART = 11, PRON = 12, PROPN = 13, PUNCT = 14, SCONJ = 15, SYM = 16, VERB = 17 }

	export interface BatchDetectSyntaxRequest {
		TextList: Array<string>;
		LanguageCode: BatchDetectSyntaxRequestLanguageCode;
	}

	export enum BatchDetectSyntaxRequestLanguageCode { en = 0, es = 1, fr = 2, de = 3, it = 4, pt = 5 }

	export interface ClassifyDocumentResponse {
		Classes?: Array<DocumentClass> | null;
		Labels?: Array<DocumentLabel> | null;
	}


	/** Specifies the class that categorizes the document being analyzed */
	export interface DocumentClass {
		Name?: string | null;
		Score?: number | null;
	}


	/** Specifies one of the label or labels that categorize the document being analyzed. */
	export interface DocumentLabel {
		Name?: string | null;
		Score?: number | null;
	}

	export interface ClassifyDocumentRequest {
		Text: string;
		EndpointArn: string;
	}

	export interface ResourceUnavailableException {
	}

	export interface CreateDocumentClassifierResponse {
		DocumentClassifierArn?: string | null;
	}

	export interface CreateDocumentClassifierRequest {
		DocumentClassifierName: string;
		DataAccessRoleArn: string;
		Tags?: Array<Tag> | null;

		/**
		 * <p>The input properties for training a document classifier. </p> <p>For more information on how the input file is formatted, see <a>how-document-classification-training-data</a>. </p>
		 * Required
		 */
		InputDataConfig: DocumentClassifierInputDataConfig;

		/** Provides output results configuration parameters for custom classifier jobs. */
		OutputDataConfig?: DocumentClassifierOutputDataConfig | null;
		ClientRequestToken?: string | null;
		LanguageCode: CreateDocumentClassifierRequestLanguageCode;
		VolumeKmsKeyId?: string | null;

		/** Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. */
		VpcConfig?: VpcConfig | null;
		Mode?: CreateDocumentClassifierRequestMode | null;
	}


	/** A key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with the key-value pair ‘Department’:’Sales’ might be added to a resource to indicate its use by a particular department.  */
	export interface Tag {
		Key: string;
		Value?: string | null;
	}


	/** <p>The input properties for training a document classifier. </p> <p>For more information on how the input file is formatted, see <a>how-document-classification-training-data</a>. </p> */
	export interface DocumentClassifierInputDataConfig {
		S3Uri: string;
		LabelDelimiter?: string | null;
	}


	/** Provides output results configuration parameters for custom classifier jobs.  */
	export interface DocumentClassifierOutputDataConfig {
		S3Uri?: string | null;
		KmsKeyId?: string | null;
	}

	export enum CreateDocumentClassifierRequestLanguageCode { en = 0, es = 1, fr = 2, de = 3, it = 4, pt = 5, ar = 6, hi = 7, ja = 8, ko = 9, zh = 10, zh_TW = 11 }


	/**  Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>.  */
	export interface VpcConfig {
		SecurityGroupIds: Array<string>;
		Subnets: Array<string>;
	}

	export enum CreateDocumentClassifierRequestMode { MULTI_CLASS = 0, MULTI_LABEL = 1 }

	export interface ResourceInUseException {
	}

	export interface TooManyTagsException {
	}

	export interface TooManyRequestsException {
	}

	export interface ResourceLimitExceededException {
	}

	export interface KmsKeyValidationException {
	}

	export interface CreateEndpointResponse {
		EndpointArn?: string | null;
	}

	export interface CreateEndpointRequest {
		EndpointName: string;
		ModelArn: string;
		DesiredInferenceUnits: number;
		ClientRequestToken?: string | null;
		Tags?: Array<Tag> | null;
	}

	export interface ResourceNotFoundException {
	}

	export interface CreateEntityRecognizerResponse {
		EntityRecognizerArn?: string | null;
	}

	export interface CreateEntityRecognizerRequest {
		RecognizerName: string;
		DataAccessRoleArn: string;
		Tags?: Array<Tag> | null;

		/**
		 * Specifies the format and location of the input data.
		 * Required
		 */
		InputDataConfig: EntityRecognizerInputDataConfig;
		ClientRequestToken?: string | null;
		LanguageCode: CreateEntityRecognizerRequestLanguageCode;
		VolumeKmsKeyId?: string | null;

		/** Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. */
		VpcConfig?: VpcConfig | null;
	}


	/** Specifies the format and location of the input data. */
	export interface EntityRecognizerInputDataConfig {
		EntityTypes: Array<EntityTypesListItem>;

		/**
		 * Describes the training documents submitted with an entity recognizer.
		 * Required
		 */
		Documents: EntityRecognizerDocuments;

		/** Describes the annotations associated with a entity recognizer. */
		Annotations?: EntityRecognizerAnnotations | null;

		/** Describes the entity recognizer submitted with an entity recognizer. */
		EntityList?: EntityRecognizerEntityList | null;
	}


	/** Information about an individual item on a list of entity types. */
	export interface EntityTypesListItem {
		Type: string;
	}


	/** Describes the training documents submitted with an entity recognizer. */
	export interface EntityRecognizerDocuments {
		S3Uri: string;
	}


	/** Describes the annotations associated with a entity recognizer. */
	export interface EntityRecognizerAnnotations {
		S3Uri: string;
	}


	/** Describes the entity recognizer submitted with an entity recognizer. */
	export interface EntityRecognizerEntityList {
		S3Uri: string;
	}

	export enum CreateEntityRecognizerRequestLanguageCode { en = 0, es = 1, fr = 2, de = 3, it = 4, pt = 5, ar = 6, hi = 7, ja = 8, ko = 9, zh = 10, zh_TW = 11 }

	export interface DeleteDocumentClassifierResponse {
	}

	export interface DeleteDocumentClassifierRequest {
		DocumentClassifierArn: string;
	}

	export interface DeleteEndpointResponse {
	}

	export interface DeleteEndpointRequest {
		EndpointArn: string;
	}

	export interface DeleteEntityRecognizerResponse {
	}

	export interface DeleteEntityRecognizerRequest {
		EntityRecognizerArn: string;
	}

	export interface DescribeDocumentClassificationJobResponse {

		/** Provides information about a document classification job. */
		DocumentClassificationJobProperties?: DocumentClassificationJobProperties | null;
	}


	/** Provides information about a document classification job. */
	export interface DocumentClassificationJobProperties {
		JobId?: string | null;
		JobName?: string | null;
		JobStatus?: DocumentClassificationJobPropertiesJobStatus | null;
		Message?: string | null;
		SubmitTime?: Date | null;
		EndTime?: Date | null;
		DocumentClassifierArn?: string | null;

		/** The input properties for a topic detection job. */
		InputDataConfig?: InputDataConfig | null;

		/** <p>Provides configuration parameters for the output of topic detection jobs.</p> <p/> */
		OutputDataConfig?: OutputDataConfig | null;
		DataAccessRoleArn?: string | null;
		VolumeKmsKeyId?: string | null;

		/** Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. */
		VpcConfig?: VpcConfig | null;
	}

	export enum DocumentClassificationJobPropertiesJobStatus { SUBMITTED = 0, IN_PROGRESS = 1, COMPLETED = 2, FAILED = 3, STOP_REQUESTED = 4, STOPPED = 5 }


	/** The input properties for a topic detection job. */
	export interface InputDataConfig {
		S3Uri: string;
		InputFormat?: InputDataConfigInputFormat | null;
	}

	export enum InputDataConfigInputFormat { ONE_DOC_PER_FILE = 0, ONE_DOC_PER_LINE = 1 }


	/** <p>Provides configuration parameters for the output of topic detection jobs.</p> <p/> */
	export interface OutputDataConfig {
		S3Uri: string;
		KmsKeyId?: string | null;
	}

	export interface DescribeDocumentClassificationJobRequest {
		JobId: string;
	}

	export interface JobNotFoundException {
	}

	export interface DescribeDocumentClassifierResponse {

		/** Provides information about a document classifier. */
		DocumentClassifierProperties?: DocumentClassifierProperties | null;
	}


	/** Provides information about a document classifier. */
	export interface DocumentClassifierProperties {
		DocumentClassifierArn?: string | null;
		LanguageCode?: DocumentClassifierPropertiesLanguageCode | null;
		Status?: DocumentClassifierPropertiesStatus | null;
		Message?: string | null;
		SubmitTime?: Date | null;
		EndTime?: Date | null;
		TrainingStartTime?: Date | null;
		TrainingEndTime?: Date | null;

		/** <p>The input properties for training a document classifier. </p> <p>For more information on how the input file is formatted, see <a>how-document-classification-training-data</a>. </p> */
		InputDataConfig?: DocumentClassifierInputDataConfig | null;

		/** Provides output results configuration parameters for custom classifier jobs. */
		OutputDataConfig?: DocumentClassifierOutputDataConfig | null;

		/** Provides information about a document classifier. */
		ClassifierMetadata?: ClassifierMetadata | null;
		DataAccessRoleArn?: string | null;
		VolumeKmsKeyId?: string | null;

		/** Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. */
		VpcConfig?: VpcConfig | null;
		Mode?: CreateDocumentClassifierRequestMode | null;
	}

	export enum DocumentClassifierPropertiesLanguageCode { en = 0, es = 1, fr = 2, de = 3, it = 4, pt = 5, ar = 6, hi = 7, ja = 8, ko = 9, zh = 10, zh_TW = 11 }

	export enum DocumentClassifierPropertiesStatus { SUBMITTED = 0, TRAINING = 1, DELETING = 2, STOP_REQUESTED = 3, STOPPED = 4, IN_ERROR = 5, TRAINED = 6 }


	/** Provides information about a document classifier. */
	export interface ClassifierMetadata {
		NumberOfLabels?: number | null;
		NumberOfTrainedDocuments?: number | null;
		NumberOfTestDocuments?: number | null;

		/** Describes the result metrics for the test data associated with an documentation classifier. */
		EvaluationMetrics?: ClassifierEvaluationMetrics | null;
	}


	/** Describes the result metrics for the test data associated with an documentation classifier. */
	export interface ClassifierEvaluationMetrics {
		Accuracy?: number | null;
		Precision?: number | null;
		Recall?: number | null;
		F1Score?: number | null;
		MicroPrecision?: number | null;
		MicroRecall?: number | null;
		MicroF1Score?: number | null;
		HammingLoss?: number | null;
	}

	export interface DescribeDocumentClassifierRequest {
		DocumentClassifierArn: string;
	}

	export interface DescribeDominantLanguageDetectionJobResponse {

		/** Provides information about a dominant language detection job. */
		DominantLanguageDetectionJobProperties?: DominantLanguageDetectionJobProperties | null;
	}


	/** Provides information about a dominant language detection job. */
	export interface DominantLanguageDetectionJobProperties {
		JobId?: string | null;
		JobName?: string | null;
		JobStatus?: DocumentClassificationJobPropertiesJobStatus | null;
		Message?: string | null;
		SubmitTime?: Date | null;
		EndTime?: Date | null;

		/** The input properties for a topic detection job. */
		InputDataConfig?: InputDataConfig | null;

		/** <p>Provides configuration parameters for the output of topic detection jobs.</p> <p/> */
		OutputDataConfig?: OutputDataConfig | null;
		DataAccessRoleArn?: string | null;
		VolumeKmsKeyId?: string | null;

		/** Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. */
		VpcConfig?: VpcConfig | null;
	}

	export interface DescribeDominantLanguageDetectionJobRequest {
		JobId: string;
	}

	export interface DescribeEndpointResponse {

		/** Specifies information about the specified endpoint. */
		EndpointProperties?: EndpointProperties | null;
	}


	/** Specifies information about the specified endpoint. */
	export interface EndpointProperties {
		EndpointArn?: string | null;
		Status?: EndpointPropertiesStatus | null;
		Message?: string | null;
		ModelArn?: string | null;
		DesiredInferenceUnits?: number | null;
		CurrentInferenceUnits?: number | null;
		CreationTime?: Date | null;
		LastModifiedTime?: Date | null;
	}

	export enum EndpointPropertiesStatus { CREATING = 0, DELETING = 1, FAILED = 2, IN_SERVICE = 3, UPDATING = 4 }

	export interface DescribeEndpointRequest {
		EndpointArn: string;
	}

	export interface DescribeEntitiesDetectionJobResponse {

		/** Provides information about an entities detection job. */
		EntitiesDetectionJobProperties?: EntitiesDetectionJobProperties | null;
	}


	/** Provides information about an entities detection job. */
	export interface EntitiesDetectionJobProperties {
		JobId?: string | null;
		JobName?: string | null;
		JobStatus?: DocumentClassificationJobPropertiesJobStatus | null;
		Message?: string | null;
		SubmitTime?: Date | null;
		EndTime?: Date | null;
		EntityRecognizerArn?: string | null;

		/** The input properties for a topic detection job. */
		InputDataConfig?: InputDataConfig | null;

		/** <p>Provides configuration parameters for the output of topic detection jobs.</p> <p/> */
		OutputDataConfig?: OutputDataConfig | null;
		LanguageCode?: EntitiesDetectionJobPropertiesLanguageCode | null;
		DataAccessRoleArn?: string | null;
		VolumeKmsKeyId?: string | null;

		/** Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. */
		VpcConfig?: VpcConfig | null;
	}

	export enum EntitiesDetectionJobPropertiesLanguageCode { en = 0, es = 1, fr = 2, de = 3, it = 4, pt = 5, ar = 6, hi = 7, ja = 8, ko = 9, zh = 10, zh_TW = 11 }

	export interface DescribeEntitiesDetectionJobRequest {
		JobId: string;
	}

	export interface DescribeEntityRecognizerResponse {

		/** Describes information about an entity recognizer. */
		EntityRecognizerProperties?: EntityRecognizerProperties | null;
	}


	/** Describes information about an entity recognizer. */
	export interface EntityRecognizerProperties {
		EntityRecognizerArn?: string | null;
		LanguageCode?: EntityRecognizerPropertiesLanguageCode | null;
		Status?: DocumentClassifierPropertiesStatus | null;
		Message?: string | null;
		SubmitTime?: Date | null;
		EndTime?: Date | null;
		TrainingStartTime?: Date | null;
		TrainingEndTime?: Date | null;

		/** Specifies the format and location of the input data. */
		InputDataConfig?: EntityRecognizerInputDataConfig | null;

		/** Detailed information about an entity recognizer. */
		RecognizerMetadata?: EntityRecognizerMetadata | null;
		DataAccessRoleArn?: string | null;
		VolumeKmsKeyId?: string | null;

		/** Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. */
		VpcConfig?: VpcConfig | null;
	}

	export enum EntityRecognizerPropertiesLanguageCode { en = 0, es = 1, fr = 2, de = 3, it = 4, pt = 5, ar = 6, hi = 7, ja = 8, ko = 9, zh = 10, zh_TW = 11 }


	/** Detailed information about an entity recognizer. */
	export interface EntityRecognizerMetadata {
		NumberOfTrainedDocuments?: number | null;
		NumberOfTestDocuments?: number | null;

		/** Detailed information about the accuracy of an entity recognizer. */
		EvaluationMetrics?: EntityRecognizerEvaluationMetrics | null;
		EntityTypes?: Array<EntityRecognizerMetadataEntityTypesListItem> | null;
	}


	/** Detailed information about the accuracy of an entity recognizer.  */
	export interface EntityRecognizerEvaluationMetrics {
		Precision?: number | null;
		Recall?: number | null;
		F1Score?: number | null;
	}


	/** Individual item from the list of entity types in the metadata of an entity recognizer. */
	export interface EntityRecognizerMetadataEntityTypesListItem {
		Type?: string | null;

		/** Detailed information about the accuracy of an entity recognizer for a specific entity type. */
		EvaluationMetrics?: EntityTypesEvaluationMetrics | null;
		NumberOfTrainMentions?: number | null;
	}


	/** Detailed information about the accuracy of an entity recognizer for a specific entity type.  */
	export interface EntityTypesEvaluationMetrics {
		Precision?: number | null;
		Recall?: number | null;
		F1Score?: number | null;
	}

	export interface DescribeEntityRecognizerRequest {
		EntityRecognizerArn: string;
	}

	export interface DescribeKeyPhrasesDetectionJobResponse {

		/** Provides information about a key phrases detection job. */
		KeyPhrasesDetectionJobProperties?: KeyPhrasesDetectionJobProperties | null;
	}


	/** Provides information about a key phrases detection job. */
	export interface KeyPhrasesDetectionJobProperties {
		JobId?: string | null;
		JobName?: string | null;
		JobStatus?: DocumentClassificationJobPropertiesJobStatus | null;
		Message?: string | null;
		SubmitTime?: Date | null;
		EndTime?: Date | null;

		/** The input properties for a topic detection job. */
		InputDataConfig?: InputDataConfig | null;

		/** <p>Provides configuration parameters for the output of topic detection jobs.</p> <p/> */
		OutputDataConfig?: OutputDataConfig | null;
		LanguageCode?: KeyPhrasesDetectionJobPropertiesLanguageCode | null;
		DataAccessRoleArn?: string | null;
		VolumeKmsKeyId?: string | null;

		/** Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. */
		VpcConfig?: VpcConfig | null;
	}

	export enum KeyPhrasesDetectionJobPropertiesLanguageCode { en = 0, es = 1, fr = 2, de = 3, it = 4, pt = 5, ar = 6, hi = 7, ja = 8, ko = 9, zh = 10, zh_TW = 11 }

	export interface DescribeKeyPhrasesDetectionJobRequest {
		JobId: string;
	}

	export interface DescribeSentimentDetectionJobResponse {

		/** Provides information about a sentiment detection job. */
		SentimentDetectionJobProperties?: SentimentDetectionJobProperties | null;
	}


	/** Provides information about a sentiment detection job. */
	export interface SentimentDetectionJobProperties {
		JobId?: string | null;
		JobName?: string | null;
		JobStatus?: DocumentClassificationJobPropertiesJobStatus | null;
		Message?: string | null;
		SubmitTime?: Date | null;
		EndTime?: Date | null;

		/** The input properties for a topic detection job. */
		InputDataConfig?: InputDataConfig | null;

		/** <p>Provides configuration parameters for the output of topic detection jobs.</p> <p/> */
		OutputDataConfig?: OutputDataConfig | null;
		LanguageCode?: SentimentDetectionJobPropertiesLanguageCode | null;
		DataAccessRoleArn?: string | null;
		VolumeKmsKeyId?: string | null;

		/** Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. */
		VpcConfig?: VpcConfig | null;
	}

	export enum SentimentDetectionJobPropertiesLanguageCode { en = 0, es = 1, fr = 2, de = 3, it = 4, pt = 5, ar = 6, hi = 7, ja = 8, ko = 9, zh = 10, zh_TW = 11 }

	export interface DescribeSentimentDetectionJobRequest {
		JobId: string;
	}

	export interface DescribeTopicsDetectionJobResponse {

		/** Provides information about a topic detection job. */
		TopicsDetectionJobProperties?: TopicsDetectionJobProperties | null;
	}


	/** Provides information about a topic detection job. */
	export interface TopicsDetectionJobProperties {
		JobId?: string | null;
		JobName?: string | null;
		JobStatus?: DocumentClassificationJobPropertiesJobStatus | null;
		Message?: string | null;
		SubmitTime?: Date | null;
		EndTime?: Date | null;

		/** The input properties for a topic detection job. */
		InputDataConfig?: InputDataConfig | null;

		/** <p>Provides configuration parameters for the output of topic detection jobs.</p> <p/> */
		OutputDataConfig?: OutputDataConfig | null;
		NumberOfTopics?: number | null;
		DataAccessRoleArn?: string | null;
		VolumeKmsKeyId?: string | null;

		/** Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. */
		VpcConfig?: VpcConfig | null;
	}

	export interface DescribeTopicsDetectionJobRequest {
		JobId: string;
	}

	export interface DetectDominantLanguageResponse {
		Languages?: Array<DominantLanguage> | null;
	}

	export interface DetectDominantLanguageRequest {
		Text: string;
	}

	export interface DetectEntitiesResponse {
		Entities?: Array<Entity> | null;
	}

	export interface DetectEntitiesRequest {
		Text: string;
		LanguageCode: DetectEntitiesRequestLanguageCode;
	}

	export enum DetectEntitiesRequestLanguageCode { en = 0, es = 1, fr = 2, de = 3, it = 4, pt = 5, ar = 6, hi = 7, ja = 8, ko = 9, zh = 10, zh_TW = 11 }

	export interface DetectKeyPhrasesResponse {
		KeyPhrases?: Array<KeyPhrase> | null;
	}

	export interface DetectKeyPhrasesRequest {
		Text: string;
		LanguageCode: DetectKeyPhrasesRequestLanguageCode;
	}

	export enum DetectKeyPhrasesRequestLanguageCode { en = 0, es = 1, fr = 2, de = 3, it = 4, pt = 5, ar = 6, hi = 7, ja = 8, ko = 9, zh = 10, zh_TW = 11 }

	export interface DetectSentimentResponse {
		Sentiment?: BatchDetectSentimentItemResultSentiment | null;

		/** Describes the level of confidence that Amazon Comprehend has in the accuracy of its detection of sentiments. */
		SentimentScore?: SentimentScore | null;
	}

	export interface DetectSentimentRequest {
		Text: string;
		LanguageCode: DetectSentimentRequestLanguageCode;
	}

	export enum DetectSentimentRequestLanguageCode { en = 0, es = 1, fr = 2, de = 3, it = 4, pt = 5, ar = 6, hi = 7, ja = 8, ko = 9, zh = 10, zh_TW = 11 }

	export interface DetectSyntaxResponse {
		SyntaxTokens?: Array<SyntaxToken> | null;
	}

	export interface DetectSyntaxRequest {
		Text: string;
		LanguageCode: BatchDetectSyntaxRequestLanguageCode;
	}

	export interface ListDocumentClassificationJobsResponse {
		DocumentClassificationJobPropertiesList?: Array<DocumentClassificationJobProperties> | null;
		NextToken?: string | null;
	}

	export interface ListDocumentClassificationJobsRequest {

		/** Provides information for filtering a list of document classification jobs. For more information, see the operation. You can provide only one filter parameter in each request. */
		Filter?: DocumentClassificationJobFilter | null;
		NextToken?: string | null;
		MaxResults?: number | null;
	}


	/** Provides information for filtering a list of document classification jobs. For more information, see the operation. You can provide only one filter parameter in each request. */
	export interface DocumentClassificationJobFilter {
		JobName?: string | null;
		JobStatus?: DocumentClassificationJobPropertiesJobStatus | null;
		SubmitTimeBefore?: Date | null;
		SubmitTimeAfter?: Date | null;
	}

	export interface InvalidFilterException {
	}

	export interface ListDocumentClassifiersResponse {
		DocumentClassifierPropertiesList?: Array<DocumentClassifierProperties> | null;
		NextToken?: string | null;
	}

	export interface ListDocumentClassifiersRequest {

		/** Provides information for filtering a list of document classifiers. You can only specify one filtering parameter in a request. For more information, see the operation. */
		Filter?: DocumentClassifierFilter | null;
		NextToken?: string | null;
		MaxResults?: number | null;
	}


	/** Provides information for filtering a list of document classifiers. You can only specify one filtering parameter in a request. For more information, see the operation. */
	export interface DocumentClassifierFilter {
		Status?: DocumentClassifierPropertiesStatus | null;
		SubmitTimeBefore?: Date | null;
		SubmitTimeAfter?: Date | null;
	}

	export interface ListDominantLanguageDetectionJobsResponse {
		DominantLanguageDetectionJobPropertiesList?: Array<DominantLanguageDetectionJobProperties> | null;
		NextToken?: string | null;
	}

	export interface ListDominantLanguageDetectionJobsRequest {

		/** Provides information for filtering a list of dominant language detection jobs. For more information, see the operation. */
		Filter?: DominantLanguageDetectionJobFilter | null;
		NextToken?: string | null;
		MaxResults?: number | null;
	}


	/** Provides information for filtering a list of dominant language detection jobs. For more information, see the operation. */
	export interface DominantLanguageDetectionJobFilter {
		JobName?: string | null;
		JobStatus?: DocumentClassificationJobPropertiesJobStatus | null;
		SubmitTimeBefore?: Date | null;
		SubmitTimeAfter?: Date | null;
	}

	export interface ListEndpointsResponse {
		EndpointPropertiesList?: Array<EndpointProperties> | null;
		NextToken?: string | null;
	}

	export interface ListEndpointsRequest {

		/** The filter used to determine which endpoints are are returned. You can filter jobs on their name, model, status, or the date and time that they were created. You can only set one filter at a time. */
		Filter?: EndpointFilter | null;
		NextToken?: string | null;
		MaxResults?: number | null;
	}


	/** The filter used to determine which endpoints are are returned. You can filter jobs on their name, model, status, or the date and time that they were created. You can only set one filter at a time.  */
	export interface EndpointFilter {
		ModelArn?: string | null;
		Status?: EndpointPropertiesStatus | null;
		CreationTimeBefore?: Date | null;
		CreationTimeAfter?: Date | null;
	}

	export interface ListEntitiesDetectionJobsResponse {
		EntitiesDetectionJobPropertiesList?: Array<EntitiesDetectionJobProperties> | null;
		NextToken?: string | null;
	}

	export interface ListEntitiesDetectionJobsRequest {

		/** Provides information for filtering a list of dominant language detection jobs. For more information, see the operation. */
		Filter?: EntitiesDetectionJobFilter | null;
		NextToken?: string | null;
		MaxResults?: number | null;
	}


	/** Provides information for filtering a list of dominant language detection jobs. For more information, see the operation. */
	export interface EntitiesDetectionJobFilter {
		JobName?: string | null;
		JobStatus?: DocumentClassificationJobPropertiesJobStatus | null;
		SubmitTimeBefore?: Date | null;
		SubmitTimeAfter?: Date | null;
	}

	export interface ListEntityRecognizersResponse {
		EntityRecognizerPropertiesList?: Array<EntityRecognizerProperties> | null;
		NextToken?: string | null;
	}

	export interface ListEntityRecognizersRequest {

		/** Provides information for filtering a list of entity recognizers. You can only specify one filtering parameter in a request. For more information, see the operation./&gt; */
		Filter?: EntityRecognizerFilter | null;
		NextToken?: string | null;
		MaxResults?: number | null;
	}


	/** Provides information for filtering a list of entity recognizers. You can only specify one filtering parameter in a request. For more information, see the operation./&gt; */
	export interface EntityRecognizerFilter {
		Status?: DocumentClassifierPropertiesStatus | null;
		SubmitTimeBefore?: Date | null;
		SubmitTimeAfter?: Date | null;
	}

	export interface ListKeyPhrasesDetectionJobsResponse {
		KeyPhrasesDetectionJobPropertiesList?: Array<KeyPhrasesDetectionJobProperties> | null;
		NextToken?: string | null;
	}

	export interface ListKeyPhrasesDetectionJobsRequest {

		/** Provides information for filtering a list of dominant language detection jobs. For more information, see the operation. */
		Filter?: KeyPhrasesDetectionJobFilter | null;
		NextToken?: string | null;
		MaxResults?: number | null;
	}


	/** Provides information for filtering a list of dominant language detection jobs. For more information, see the operation. */
	export interface KeyPhrasesDetectionJobFilter {
		JobName?: string | null;
		JobStatus?: DocumentClassificationJobPropertiesJobStatus | null;
		SubmitTimeBefore?: Date | null;
		SubmitTimeAfter?: Date | null;
	}

	export interface ListSentimentDetectionJobsResponse {
		SentimentDetectionJobPropertiesList?: Array<SentimentDetectionJobProperties> | null;
		NextToken?: string | null;
	}

	export interface ListSentimentDetectionJobsRequest {

		/** Provides information for filtering a list of dominant language detection jobs. For more information, see the operation. */
		Filter?: SentimentDetectionJobFilter | null;
		NextToken?: string | null;
		MaxResults?: number | null;
	}


	/** Provides information for filtering a list of dominant language detection jobs. For more information, see the operation. */
	export interface SentimentDetectionJobFilter {
		JobName?: string | null;
		JobStatus?: DocumentClassificationJobPropertiesJobStatus | null;
		SubmitTimeBefore?: Date | null;
		SubmitTimeAfter?: Date | null;
	}

	export interface ListTagsForResourceResponse {
		ResourceArn?: string | null;
		Tags?: Array<Tag> | null;
	}

	export interface ListTagsForResourceRequest {
		ResourceArn: string;
	}

	export interface ListTopicsDetectionJobsResponse {
		TopicsDetectionJobPropertiesList?: Array<TopicsDetectionJobProperties> | null;
		NextToken?: string | null;
	}

	export interface ListTopicsDetectionJobsRequest {

		/** Provides information for filtering topic detection jobs. For more information, see . */
		Filter?: TopicsDetectionJobFilter | null;
		NextToken?: string | null;
		MaxResults?: number | null;
	}


	/** Provides information for filtering topic detection jobs. For more information, see . */
	export interface TopicsDetectionJobFilter {
		JobName?: string | null;
		JobStatus?: DocumentClassificationJobPropertiesJobStatus | null;
		SubmitTimeBefore?: Date | null;
		SubmitTimeAfter?: Date | null;
	}

	export interface StartDocumentClassificationJobResponse {
		JobId?: string | null;
		JobStatus?: DocumentClassificationJobPropertiesJobStatus | null;
	}

	export interface StartDocumentClassificationJobRequest {
		JobName?: string | null;
		DocumentClassifierArn: string;

		/**
		 * The input properties for a topic detection job.
		 * Required
		 */
		InputDataConfig: InputDataConfig;

		/**
		 * <p>Provides configuration parameters for the output of topic detection jobs.</p> <p/>
		 * Required
		 */
		OutputDataConfig: OutputDataConfig;
		DataAccessRoleArn: string;
		ClientRequestToken?: string | null;
		VolumeKmsKeyId?: string | null;

		/** Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. */
		VpcConfig?: VpcConfig | null;
	}

	export interface StartDominantLanguageDetectionJobResponse {
		JobId?: string | null;
		JobStatus?: DocumentClassificationJobPropertiesJobStatus | null;
	}

	export interface StartDominantLanguageDetectionJobRequest {

		/**
		 * The input properties for a topic detection job.
		 * Required
		 */
		InputDataConfig: InputDataConfig;

		/**
		 * <p>Provides configuration parameters for the output of topic detection jobs.</p> <p/>
		 * Required
		 */
		OutputDataConfig: OutputDataConfig;
		DataAccessRoleArn: string;
		JobName?: string | null;
		ClientRequestToken?: string | null;
		VolumeKmsKeyId?: string | null;

		/** Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. */
		VpcConfig?: VpcConfig | null;
	}

	export interface StartEntitiesDetectionJobResponse {
		JobId?: string | null;
		JobStatus?: DocumentClassificationJobPropertiesJobStatus | null;
	}

	export interface StartEntitiesDetectionJobRequest {

		/**
		 * The input properties for a topic detection job.
		 * Required
		 */
		InputDataConfig: InputDataConfig;

		/**
		 * <p>Provides configuration parameters for the output of topic detection jobs.</p> <p/>
		 * Required
		 */
		OutputDataConfig: OutputDataConfig;
		DataAccessRoleArn: string;
		JobName?: string | null;
		EntityRecognizerArn?: string | null;
		LanguageCode: StartEntitiesDetectionJobRequestLanguageCode;
		ClientRequestToken?: string | null;
		VolumeKmsKeyId?: string | null;

		/** Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. */
		VpcConfig?: VpcConfig | null;
	}

	export enum StartEntitiesDetectionJobRequestLanguageCode { en = 0, es = 1, fr = 2, de = 3, it = 4, pt = 5, ar = 6, hi = 7, ja = 8, ko = 9, zh = 10, zh_TW = 11 }

	export interface StartKeyPhrasesDetectionJobResponse {
		JobId?: string | null;
		JobStatus?: DocumentClassificationJobPropertiesJobStatus | null;
	}

	export interface StartKeyPhrasesDetectionJobRequest {

		/**
		 * The input properties for a topic detection job.
		 * Required
		 */
		InputDataConfig: InputDataConfig;

		/**
		 * <p>Provides configuration parameters for the output of topic detection jobs.</p> <p/>
		 * Required
		 */
		OutputDataConfig: OutputDataConfig;
		DataAccessRoleArn: string;
		JobName?: string | null;
		LanguageCode: StartKeyPhrasesDetectionJobRequestLanguageCode;
		ClientRequestToken?: string | null;
		VolumeKmsKeyId?: string | null;

		/** Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. */
		VpcConfig?: VpcConfig | null;
	}

	export enum StartKeyPhrasesDetectionJobRequestLanguageCode { en = 0, es = 1, fr = 2, de = 3, it = 4, pt = 5, ar = 6, hi = 7, ja = 8, ko = 9, zh = 10, zh_TW = 11 }

	export interface StartSentimentDetectionJobResponse {
		JobId?: string | null;
		JobStatus?: DocumentClassificationJobPropertiesJobStatus | null;
	}

	export interface StartSentimentDetectionJobRequest {

		/**
		 * The input properties for a topic detection job.
		 * Required
		 */
		InputDataConfig: InputDataConfig;

		/**
		 * <p>Provides configuration parameters for the output of topic detection jobs.</p> <p/>
		 * Required
		 */
		OutputDataConfig: OutputDataConfig;
		DataAccessRoleArn: string;
		JobName?: string | null;
		LanguageCode: StartSentimentDetectionJobRequestLanguageCode;
		ClientRequestToken?: string | null;
		VolumeKmsKeyId?: string | null;

		/** Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. */
		VpcConfig?: VpcConfig | null;
	}

	export enum StartSentimentDetectionJobRequestLanguageCode { en = 0, es = 1, fr = 2, de = 3, it = 4, pt = 5, ar = 6, hi = 7, ja = 8, ko = 9, zh = 10, zh_TW = 11 }

	export interface StartTopicsDetectionJobResponse {
		JobId?: string | null;
		JobStatus?: DocumentClassificationJobPropertiesJobStatus | null;
	}

	export interface StartTopicsDetectionJobRequest {

		/**
		 * The input properties for a topic detection job.
		 * Required
		 */
		InputDataConfig: InputDataConfig;

		/**
		 * <p>Provides configuration parameters for the output of topic detection jobs.</p> <p/>
		 * Required
		 */
		OutputDataConfig: OutputDataConfig;
		DataAccessRoleArn: string;
		JobName?: string | null;
		NumberOfTopics?: number | null;
		ClientRequestToken?: string | null;
		VolumeKmsKeyId?: string | null;

		/** Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. */
		VpcConfig?: VpcConfig | null;
	}

	export interface StopDominantLanguageDetectionJobResponse {
		JobId?: string | null;
		JobStatus?: DocumentClassificationJobPropertiesJobStatus | null;
	}

	export interface StopDominantLanguageDetectionJobRequest {
		JobId: string;
	}

	export interface StopEntitiesDetectionJobResponse {
		JobId?: string | null;
		JobStatus?: DocumentClassificationJobPropertiesJobStatus | null;
	}

	export interface StopEntitiesDetectionJobRequest {
		JobId: string;
	}

	export interface StopKeyPhrasesDetectionJobResponse {
		JobId?: string | null;
		JobStatus?: DocumentClassificationJobPropertiesJobStatus | null;
	}

	export interface StopKeyPhrasesDetectionJobRequest {
		JobId: string;
	}

	export interface StopSentimentDetectionJobResponse {
		JobId?: string | null;
		JobStatus?: DocumentClassificationJobPropertiesJobStatus | null;
	}

	export interface StopSentimentDetectionJobRequest {
		JobId: string;
	}

	export interface StopTrainingDocumentClassifierResponse {
	}

	export interface StopTrainingDocumentClassifierRequest {
		DocumentClassifierArn: string;
	}

	export interface StopTrainingEntityRecognizerResponse {
	}

	export interface StopTrainingEntityRecognizerRequest {
		EntityRecognizerArn: string;
	}

	export interface TagResourceResponse {
	}

	export interface TagResourceRequest {
		ResourceArn: string;
		Tags: Array<Tag>;
	}

	export interface ConcurrentModificationException {
	}

	export interface UntagResourceResponse {
	}

	export interface UntagResourceRequest {
		ResourceArn: string;
		TagKeys: Array<string>;
	}

	export interface TooManyTagKeysException {
	}

	export interface UpdateEndpointResponse {
	}

	export interface UpdateEndpointRequest {
		EndpointArn: string;
		DesiredInferenceUnits: number;
	}

	export enum LanguageCode { en = 0, es = 1, fr = 2, de = 3, it = 4, pt = 5, ar = 6, hi = 7, ja = 8, ko = 9, zh = 10, zh_TW = 11 }

	export enum SentimentType { POSITIVE = 0, NEGATIVE = 1, NEUTRAL = 2, MIXED = 3 }

	export enum SyntaxLanguageCode { en = 0, es = 1, fr = 2, de = 3, it = 4, pt = 5 }

	export enum DocumentClassifierMode { MULTI_CLASS = 0, MULTI_LABEL = 1 }

	export enum JobStatus { SUBMITTED = 0, IN_PROGRESS = 1, COMPLETED = 2, FAILED = 3, STOP_REQUESTED = 4, STOPPED = 5 }

	export enum ModelStatus { SUBMITTED = 0, TRAINING = 1, DELETING = 2, STOP_REQUESTED = 3, STOPPED = 4, IN_ERROR = 5, TRAINED = 6 }

	export enum EndpointStatus { CREATING = 0, DELETING = 1, FAILED = 2, IN_SERVICE = 3, UPDATING = 4 }

	export enum InputFormat { ONE_DOC_PER_FILE = 0, ONE_DOC_PER_LINE = 1 }

	export enum PartOfSpeechTagType { ADJ = 0, ADP = 1, ADV = 2, AUX = 3, CONJ = 4, CCONJ = 5, DET = 6, INTJ = 7, NOUN = 8, NUM = 9, O = 10, PART = 11, PRON = 12, PROPN = 13, PUNCT = 14, SCONJ = 15, SYM = 16, VERB = 17 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Determines the dominant language of the input text for a batch of documents. For a list of languages that Amazon Comprehend can detect, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-languages.html">Amazon Comprehend Supported Languages</a>.
		 * Post #X-Amz-Target=Comprehend_20171127.BatchDetectDominantLanguage
		 * @return {BatchDetectDominantLanguageResponse} Success
		 */
		BatchDetectDominantLanguage(requestBody: BatchDetectDominantLanguageRequest): Observable<BatchDetectDominantLanguageResponse> {
			return this.http.post<BatchDetectDominantLanguageResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.BatchDetectDominantLanguage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Inspects the text of a batch of documents for named entities and returns information about them. For more information about named entities, see <a>how-entities</a>
		 * Post #X-Amz-Target=Comprehend_20171127.BatchDetectEntities
		 * @return {BatchDetectEntitiesResponse} Success
		 */
		BatchDetectEntities(requestBody: BatchDetectEntitiesRequest): Observable<BatchDetectEntitiesResponse> {
			return this.http.post<BatchDetectEntitiesResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.BatchDetectEntities', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Detects the key noun phrases found in a batch of documents.
		 * Post #X-Amz-Target=Comprehend_20171127.BatchDetectKeyPhrases
		 * @return {BatchDetectKeyPhrasesResponse} Success
		 */
		BatchDetectKeyPhrases(requestBody: BatchDetectKeyPhrasesRequest): Observable<BatchDetectKeyPhrasesResponse> {
			return this.http.post<BatchDetectKeyPhrasesResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.BatchDetectKeyPhrases', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Inspects a batch of documents and returns an inference of the prevailing sentiment, <code>POSITIVE</code>, <code>NEUTRAL</code>, <code>MIXED</code>, or <code>NEGATIVE</code>, in each one.
		 * Post #X-Amz-Target=Comprehend_20171127.BatchDetectSentiment
		 * @return {BatchDetectSentimentResponse} Success
		 */
		BatchDetectSentiment(requestBody: BatchDetectSentimentRequest): Observable<BatchDetectSentimentResponse> {
			return this.http.post<BatchDetectSentimentResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.BatchDetectSentiment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Inspects the text of a batch of documents for the syntax and part of speech of the words in the document and returns information about them. For more information, see <a>how-syntax</a>.
		 * Post #X-Amz-Target=Comprehend_20171127.BatchDetectSyntax
		 * @return {BatchDetectSyntaxResponse} Success
		 */
		BatchDetectSyntax(requestBody: BatchDetectSyntaxRequest): Observable<BatchDetectSyntaxResponse> {
			return this.http.post<BatchDetectSyntaxResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.BatchDetectSyntax', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new document classification request to analyze a single document in real-time, using a previously created and trained custom model and an endpoint.
		 * Post #X-Amz-Target=Comprehend_20171127.ClassifyDocument
		 * @return {ClassifyDocumentResponse} Success
		 */
		ClassifyDocument(requestBody: ClassifyDocumentRequest): Observable<ClassifyDocumentResponse> {
			return this.http.post<ClassifyDocumentResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.ClassifyDocument', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new document classifier that you can use to categorize documents. To create a classifier you provide a set of training documents that labeled with the categories that you want to use. After the classifier is trained you can use it to categorize a set of labeled documents into the categories. For more information, see <a>how-document-classification</a>.
		 * Post #X-Amz-Target=Comprehend_20171127.CreateDocumentClassifier
		 * @return {CreateDocumentClassifierResponse} Success
		 */
		CreateDocumentClassifier(requestBody: CreateDocumentClassifierRequest): Observable<CreateDocumentClassifierResponse> {
			return this.http.post<CreateDocumentClassifierResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.CreateDocumentClassifier', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a model-specific endpoint for synchronous inference for a previously trained custom model
		 * Post #X-Amz-Target=Comprehend_20171127.CreateEndpoint
		 * @return {CreateEndpointResponse} Success
		 */
		CreateEndpoint(requestBody: CreateEndpointRequest): Observable<CreateEndpointResponse> {
			return this.http.post<CreateEndpointResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.CreateEndpoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an entity recognizer using submitted files. After your <code>CreateEntityRecognizer</code> request is submitted, you can check job status using the API.
		 * Post #X-Amz-Target=Comprehend_20171127.CreateEntityRecognizer
		 * @return {CreateEntityRecognizerResponse} Success
		 */
		CreateEntityRecognizer(requestBody: CreateEntityRecognizerRequest): Observable<CreateEntityRecognizerResponse> {
			return this.http.post<CreateEntityRecognizerResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.CreateEntityRecognizer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a previously created document classifier</p> <p>Only those classifiers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a <code>ResourceInUseException</code> will be returned.</p> <p>This is an asynchronous action that puts the classifier into a DELETING state, and it is then removed by a background job. Once removed, the classifier disappears from your account and is no longer available for use. </p>
		 * Post #X-Amz-Target=Comprehend_20171127.DeleteDocumentClassifier
		 * @return {DeleteDocumentClassifierResponse} Success
		 */
		DeleteDocumentClassifier(requestBody: DeleteDocumentClassifierRequest): Observable<DeleteDocumentClassifierResponse> {
			return this.http.post<DeleteDocumentClassifierResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.DeleteDocumentClassifier', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a model-specific endpoint for a previously-trained custom model. All endpoints must be deleted in order for the model to be deleted.
		 * Post #X-Amz-Target=Comprehend_20171127.DeleteEndpoint
		 * @return {DeleteEndpointResponse} Success
		 */
		DeleteEndpoint(requestBody: DeleteEndpointRequest): Observable<DeleteEndpointResponse> {
			return this.http.post<DeleteEndpointResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.DeleteEndpoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an entity recognizer.</p> <p>Only those recognizers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a <code>ResourceInUseException</code> will be returned.</p> <p>This is an asynchronous action that puts the recognizer into a DELETING state, and it is then removed by a background job. Once removed, the recognizer disappears from your account and is no longer available for use. </p>
		 * Post #X-Amz-Target=Comprehend_20171127.DeleteEntityRecognizer
		 * @return {DeleteEntityRecognizerResponse} Success
		 */
		DeleteEntityRecognizer(requestBody: DeleteEntityRecognizerRequest): Observable<DeleteEntityRecognizerResponse> {
			return this.http.post<DeleteEntityRecognizerResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.DeleteEntityRecognizer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the properties associated with a document classification job. Use this operation to get the status of a classification job.
		 * Post #X-Amz-Target=Comprehend_20171127.DescribeDocumentClassificationJob
		 * @return {DescribeDocumentClassificationJobResponse} Success
		 */
		DescribeDocumentClassificationJob(requestBody: DescribeDocumentClassificationJobRequest): Observable<DescribeDocumentClassificationJobResponse> {
			return this.http.post<DescribeDocumentClassificationJobResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassificationJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the properties associated with a document classifier.
		 * Post #X-Amz-Target=Comprehend_20171127.DescribeDocumentClassifier
		 * @return {DescribeDocumentClassifierResponse} Success
		 */
		DescribeDocumentClassifier(requestBody: DescribeDocumentClassifierRequest): Observable<DescribeDocumentClassifierResponse> {
			return this.http.post<DescribeDocumentClassifierResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassifier', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the properties associated with a dominant language detection job. Use this operation to get the status of a detection job.
		 * Post #X-Amz-Target=Comprehend_20171127.DescribeDominantLanguageDetectionJob
		 * @return {DescribeDominantLanguageDetectionJobResponse} Success
		 */
		DescribeDominantLanguageDetectionJob(requestBody: DescribeDominantLanguageDetectionJobRequest): Observable<DescribeDominantLanguageDetectionJobResponse> {
			return this.http.post<DescribeDominantLanguageDetectionJobResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.DescribeDominantLanguageDetectionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the properties associated with a specific endpoint. Use this operation to get the status of an endpoint.
		 * Post #X-Amz-Target=Comprehend_20171127.DescribeEndpoint
		 * @return {DescribeEndpointResponse} Success
		 */
		DescribeEndpoint(requestBody: DescribeEndpointRequest): Observable<DescribeEndpointResponse> {
			return this.http.post<DescribeEndpointResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.DescribeEndpoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the properties associated with an entities detection job. Use this operation to get the status of a detection job.
		 * Post #X-Amz-Target=Comprehend_20171127.DescribeEntitiesDetectionJob
		 * @return {DescribeEntitiesDetectionJobResponse} Success
		 */
		DescribeEntitiesDetectionJob(requestBody: DescribeEntitiesDetectionJobRequest): Observable<DescribeEntitiesDetectionJobResponse> {
			return this.http.post<DescribeEntitiesDetectionJobResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.DescribeEntitiesDetectionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides details about an entity recognizer including status, S3 buckets containing training data, recognizer metadata, metrics, and so on.
		 * Post #X-Amz-Target=Comprehend_20171127.DescribeEntityRecognizer
		 * @return {DescribeEntityRecognizerResponse} Success
		 */
		DescribeEntityRecognizer(requestBody: DescribeEntityRecognizerRequest): Observable<DescribeEntityRecognizerResponse> {
			return this.http.post<DescribeEntityRecognizerResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.DescribeEntityRecognizer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the properties associated with a key phrases detection job. Use this operation to get the status of a detection job.
		 * Post #X-Amz-Target=Comprehend_20171127.DescribeKeyPhrasesDetectionJob
		 * @return {DescribeKeyPhrasesDetectionJobResponse} Success
		 */
		DescribeKeyPhrasesDetectionJob(requestBody: DescribeKeyPhrasesDetectionJobRequest): Observable<DescribeKeyPhrasesDetectionJobResponse> {
			return this.http.post<DescribeKeyPhrasesDetectionJobResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.DescribeKeyPhrasesDetectionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the properties associated with a sentiment detection job. Use this operation to get the status of a detection job.
		 * Post #X-Amz-Target=Comprehend_20171127.DescribeSentimentDetectionJob
		 * @return {DescribeSentimentDetectionJobResponse} Success
		 */
		DescribeSentimentDetectionJob(requestBody: DescribeSentimentDetectionJobRequest): Observable<DescribeSentimentDetectionJobResponse> {
			return this.http.post<DescribeSentimentDetectionJobResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.DescribeSentimentDetectionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the properties associated with a topic detection job. Use this operation to get the status of a detection job.
		 * Post #X-Amz-Target=Comprehend_20171127.DescribeTopicsDetectionJob
		 * @return {DescribeTopicsDetectionJobResponse} Success
		 */
		DescribeTopicsDetectionJob(requestBody: DescribeTopicsDetectionJobRequest): Observable<DescribeTopicsDetectionJobResponse> {
			return this.http.post<DescribeTopicsDetectionJobResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.DescribeTopicsDetectionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Determines the dominant language of the input text. For a list of languages that Amazon Comprehend can detect, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-languages.html">Amazon Comprehend Supported Languages</a>.
		 * Post #X-Amz-Target=Comprehend_20171127.DetectDominantLanguage
		 * @return {DetectDominantLanguageResponse} Success
		 */
		DetectDominantLanguage(requestBody: DetectDominantLanguageRequest): Observable<DetectDominantLanguageResponse> {
			return this.http.post<DetectDominantLanguageResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.DetectDominantLanguage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Inspects text for named entities, and returns information about them. For more information, about named entities, see <a>how-entities</a>.
		 * Post #X-Amz-Target=Comprehend_20171127.DetectEntities
		 * @return {DetectEntitiesResponse} Success
		 */
		DetectEntities(requestBody: DetectEntitiesRequest): Observable<DetectEntitiesResponse> {
			return this.http.post<DetectEntitiesResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.DetectEntities', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Detects the key noun phrases found in the text.
		 * Post #X-Amz-Target=Comprehend_20171127.DetectKeyPhrases
		 * @return {DetectKeyPhrasesResponse} Success
		 */
		DetectKeyPhrases(requestBody: DetectKeyPhrasesRequest): Observable<DetectKeyPhrasesResponse> {
			return this.http.post<DetectKeyPhrasesResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.DetectKeyPhrases', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Inspects text and returns an inference of the prevailing sentiment (<code>POSITIVE</code>, <code>NEUTRAL</code>, <code>MIXED</code>, or <code>NEGATIVE</code>).
		 * Post #X-Amz-Target=Comprehend_20171127.DetectSentiment
		 * @return {DetectSentimentResponse} Success
		 */
		DetectSentiment(requestBody: DetectSentimentRequest): Observable<DetectSentimentResponse> {
			return this.http.post<DetectSentimentResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.DetectSentiment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Inspects text for syntax and the part of speech of words in the document. For more information, <a>how-syntax</a>.
		 * Post #X-Amz-Target=Comprehend_20171127.DetectSyntax
		 * @return {DetectSyntaxResponse} Success
		 */
		DetectSyntax(requestBody: DetectSyntaxRequest): Observable<DetectSyntaxResponse> {
			return this.http.post<DetectSyntaxResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.DetectSyntax', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of the documentation classification jobs that you have submitted.
		 * Post #X-Amz-Target=Comprehend_20171127.ListDocumentClassificationJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDocumentClassificationJobsResponse} Success
		 */
		ListDocumentClassificationJobs(MaxResults: string, NextToken: string, requestBody: ListDocumentClassificationJobsRequest): Observable<ListDocumentClassificationJobsResponse> {
			return this.http.post<ListDocumentClassificationJobsResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.ListDocumentClassificationJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of the document classifiers that you have created.
		 * Post #X-Amz-Target=Comprehend_20171127.ListDocumentClassifiers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDocumentClassifiersResponse} Success
		 */
		ListDocumentClassifiers(MaxResults: string, NextToken: string, requestBody: ListDocumentClassifiersRequest): Observable<ListDocumentClassifiersResponse> {
			return this.http.post<ListDocumentClassifiersResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.ListDocumentClassifiers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of the dominant language detection jobs that you have submitted.
		 * Post #X-Amz-Target=Comprehend_20171127.ListDominantLanguageDetectionJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDominantLanguageDetectionJobsResponse} Success
		 */
		ListDominantLanguageDetectionJobs(MaxResults: string, NextToken: string, requestBody: ListDominantLanguageDetectionJobsRequest): Observable<ListDominantLanguageDetectionJobsResponse> {
			return this.http.post<ListDominantLanguageDetectionJobsResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.ListDominantLanguageDetectionJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of all existing endpoints that you've created.
		 * Post #X-Amz-Target=Comprehend_20171127.ListEndpoints
		 * @return {ListEndpointsResponse} Success
		 */
		ListEndpoints(requestBody: ListEndpointsRequest): Observable<ListEndpointsResponse> {
			return this.http.post<ListEndpointsResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.ListEndpoints', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of the entity detection jobs that you have submitted.
		 * Post #X-Amz-Target=Comprehend_20171127.ListEntitiesDetectionJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListEntitiesDetectionJobsResponse} Success
		 */
		ListEntitiesDetectionJobs(MaxResults: string, NextToken: string, requestBody: ListEntitiesDetectionJobsRequest): Observable<ListEntitiesDetectionJobsResponse> {
			return this.http.post<ListEntitiesDetectionJobsResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.ListEntitiesDetectionJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets a list of the properties of all entity recognizers that you created, including recognizers currently in training. Allows you to filter the list of recognizers based on criteria such as status and submission time. This call returns up to 500 entity recognizers in the list, with a default number of 100 recognizers in the list.</p> <p>The results of this list are not in any particular order. Please get the list and sort locally if needed.</p>
		 * Post #X-Amz-Target=Comprehend_20171127.ListEntityRecognizers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListEntityRecognizersResponse} Success
		 */
		ListEntityRecognizers(MaxResults: string, NextToken: string, requestBody: ListEntityRecognizersRequest): Observable<ListEntityRecognizersResponse> {
			return this.http.post<ListEntityRecognizersResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.ListEntityRecognizers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a list of key phrase detection jobs that you have submitted.
		 * Post #X-Amz-Target=Comprehend_20171127.ListKeyPhrasesDetectionJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListKeyPhrasesDetectionJobsResponse} Success
		 */
		ListKeyPhrasesDetectionJobs(MaxResults: string, NextToken: string, requestBody: ListKeyPhrasesDetectionJobsRequest): Observable<ListKeyPhrasesDetectionJobsResponse> {
			return this.http.post<ListKeyPhrasesDetectionJobsResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.ListKeyPhrasesDetectionJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of sentiment detection jobs that you have submitted.
		 * Post #X-Amz-Target=Comprehend_20171127.ListSentimentDetectionJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSentimentDetectionJobsResponse} Success
		 */
		ListSentimentDetectionJobs(MaxResults: string, NextToken: string, requestBody: ListSentimentDetectionJobsRequest): Observable<ListSentimentDetectionJobsResponse> {
			return this.http.post<ListSentimentDetectionJobsResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.ListSentimentDetectionJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all tags associated with a given Amazon Comprehend resource.
		 * Post #X-Amz-Target=Comprehend_20171127.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of the topic detection jobs that you have submitted.
		 * Post #X-Amz-Target=Comprehend_20171127.ListTopicsDetectionJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTopicsDetectionJobsResponse} Success
		 */
		ListTopicsDetectionJobs(MaxResults: string, NextToken: string, requestBody: ListTopicsDetectionJobsRequest): Observable<ListTopicsDetectionJobsResponse> {
			return this.http.post<ListTopicsDetectionJobsResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.ListTopicsDetectionJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts an asynchronous document classification job. Use the operation to track the progress of the job.
		 * Post #X-Amz-Target=Comprehend_20171127.StartDocumentClassificationJob
		 * @return {StartDocumentClassificationJobResponse} Success
		 */
		StartDocumentClassificationJob(requestBody: StartDocumentClassificationJobRequest): Observable<StartDocumentClassificationJobResponse> {
			return this.http.post<StartDocumentClassificationJobResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.StartDocumentClassificationJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts an asynchronous dominant language detection job for a collection of documents. Use the operation to track the status of a job.
		 * Post #X-Amz-Target=Comprehend_20171127.StartDominantLanguageDetectionJob
		 * @return {StartDominantLanguageDetectionJobResponse} Success
		 */
		StartDominantLanguageDetectionJob(requestBody: StartDominantLanguageDetectionJobRequest): Observable<StartDominantLanguageDetectionJobResponse> {
			return this.http.post<StartDominantLanguageDetectionJobResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.StartDominantLanguageDetectionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts an asynchronous entity detection job for a collection of documents. Use the operation to track the status of a job.</p> <p>This API can be used for either standard entity detection or custom entity recognition. In order to be used for custom entity recognition, the optional <code>EntityRecognizerArn</code> must be used in order to provide access to the recognizer being used to detect the custom entity.</p>
		 * Post #X-Amz-Target=Comprehend_20171127.StartEntitiesDetectionJob
		 * @return {StartEntitiesDetectionJobResponse} Success
		 */
		StartEntitiesDetectionJob(requestBody: StartEntitiesDetectionJobRequest): Observable<StartEntitiesDetectionJobResponse> {
			return this.http.post<StartEntitiesDetectionJobResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.StartEntitiesDetectionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts an asynchronous key phrase detection job for a collection of documents. Use the operation to track the status of a job.
		 * Post #X-Amz-Target=Comprehend_20171127.StartKeyPhrasesDetectionJob
		 * @return {StartKeyPhrasesDetectionJobResponse} Success
		 */
		StartKeyPhrasesDetectionJob(requestBody: StartKeyPhrasesDetectionJobRequest): Observable<StartKeyPhrasesDetectionJobResponse> {
			return this.http.post<StartKeyPhrasesDetectionJobResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.StartKeyPhrasesDetectionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts an asynchronous sentiment detection job for a collection of documents. use the operation to track the status of a job.
		 * Post #X-Amz-Target=Comprehend_20171127.StartSentimentDetectionJob
		 * @return {StartSentimentDetectionJobResponse} Success
		 */
		StartSentimentDetectionJob(requestBody: StartSentimentDetectionJobRequest): Observable<StartSentimentDetectionJobResponse> {
			return this.http.post<StartSentimentDetectionJobResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.StartSentimentDetectionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts an asynchronous topic detection job. Use the <code>DescribeTopicDetectionJob</code> operation to track the status of a job.
		 * Post #X-Amz-Target=Comprehend_20171127.StartTopicsDetectionJob
		 * @return {StartTopicsDetectionJobResponse} Success
		 */
		StartTopicsDetectionJob(requestBody: StartTopicsDetectionJobRequest): Observable<StartTopicsDetectionJobResponse> {
			return this.http.post<StartTopicsDetectionJobResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.StartTopicsDetectionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Stops a dominant language detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>
		 * Post #X-Amz-Target=Comprehend_20171127.StopDominantLanguageDetectionJob
		 * @return {StopDominantLanguageDetectionJobResponse} Success
		 */
		StopDominantLanguageDetectionJob(requestBody: StopDominantLanguageDetectionJobRequest): Observable<StopDominantLanguageDetectionJobResponse> {
			return this.http.post<StopDominantLanguageDetectionJobResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.StopDominantLanguageDetectionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Stops an entities detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>
		 * Post #X-Amz-Target=Comprehend_20171127.StopEntitiesDetectionJob
		 * @return {StopEntitiesDetectionJobResponse} Success
		 */
		StopEntitiesDetectionJob(requestBody: StopEntitiesDetectionJobRequest): Observable<StopEntitiesDetectionJobResponse> {
			return this.http.post<StopEntitiesDetectionJobResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.StopEntitiesDetectionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Stops a key phrases detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>
		 * Post #X-Amz-Target=Comprehend_20171127.StopKeyPhrasesDetectionJob
		 * @return {StopKeyPhrasesDetectionJobResponse} Success
		 */
		StopKeyPhrasesDetectionJob(requestBody: StopKeyPhrasesDetectionJobRequest): Observable<StopKeyPhrasesDetectionJobResponse> {
			return this.http.post<StopKeyPhrasesDetectionJobResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.StopKeyPhrasesDetectionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Stops a sentiment detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is be stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>
		 * Post #X-Amz-Target=Comprehend_20171127.StopSentimentDetectionJob
		 * @return {StopSentimentDetectionJobResponse} Success
		 */
		StopSentimentDetectionJob(requestBody: StopSentimentDetectionJobRequest): Observable<StopSentimentDetectionJobResponse> {
			return this.http.post<StopSentimentDetectionJobResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.StopSentimentDetectionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Stops a document classifier training job while in progress.</p> <p>If the training job state is <code>TRAINING</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the training job completes before it can be stopped, it is put into the <code>TRAINED</code>; otherwise the training job is stopped and put into the <code>STOPPED</code> state and the service sends back an HTTP 200 response with an empty HTTP body. </p>
		 * Post #X-Amz-Target=Comprehend_20171127.StopTrainingDocumentClassifier
		 * @return {StopTrainingDocumentClassifierResponse} Success
		 */
		StopTrainingDocumentClassifier(requestBody: StopTrainingDocumentClassifierRequest): Observable<StopTrainingDocumentClassifierResponse> {
			return this.http.post<StopTrainingDocumentClassifierResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.StopTrainingDocumentClassifier', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Stops an entity recognizer training job while in progress.</p> <p>If the training job state is <code>TRAINING</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the training job completes before it can be stopped, it is put into the <code>TRAINED</code>; otherwise the training job is stopped and putted into the <code>STOPPED</code> state and the service sends back an HTTP 200 response with an empty HTTP body.</p>
		 * Post #X-Amz-Target=Comprehend_20171127.StopTrainingEntityRecognizer
		 * @return {StopTrainingEntityRecognizerResponse} Success
		 */
		StopTrainingEntityRecognizer(requestBody: StopTrainingEntityRecognizerRequest): Observable<StopTrainingEntityRecognizerResponse> {
			return this.http.post<StopTrainingEntityRecognizerResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.StopTrainingEntityRecognizer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associates a specific tag with an Amazon Comprehend resource. A tag is a key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department.
		 * Post #X-Amz-Target=Comprehend_20171127.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a specific tag associated with an Amazon Comprehend resource.
		 * Post #X-Amz-Target=Comprehend_20171127.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates information about the specified endpoint.
		 * Post #X-Amz-Target=Comprehend_20171127.UpdateEndpoint
		 * @return {UpdateEndpointResponse} Success
		 */
		UpdateEndpoint(requestBody: UpdateEndpointRequest): Observable<UpdateEndpointResponse> {
			return this.http.post<UpdateEndpointResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.UpdateEndpoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum BatchDetectDominantLanguageX_Amz_Target { Comprehend_20171127_BatchDetectDominantLanguage = 0 }

	export enum BatchDetectEntitiesX_Amz_Target { Comprehend_20171127_BatchDetectEntities = 0 }

	export enum BatchDetectKeyPhrasesX_Amz_Target { Comprehend_20171127_BatchDetectKeyPhrases = 0 }

	export enum BatchDetectSentimentX_Amz_Target { Comprehend_20171127_BatchDetectSentiment = 0 }

	export enum BatchDetectSyntaxX_Amz_Target { Comprehend_20171127_BatchDetectSyntax = 0 }

	export enum ClassifyDocumentX_Amz_Target { Comprehend_20171127_ClassifyDocument = 0 }

	export enum CreateDocumentClassifierX_Amz_Target { Comprehend_20171127_CreateDocumentClassifier = 0 }

	export enum CreateEndpointX_Amz_Target { Comprehend_20171127_CreateEndpoint = 0 }

	export enum CreateEntityRecognizerX_Amz_Target { Comprehend_20171127_CreateEntityRecognizer = 0 }

	export enum DeleteDocumentClassifierX_Amz_Target { Comprehend_20171127_DeleteDocumentClassifier = 0 }

	export enum DeleteEndpointX_Amz_Target { Comprehend_20171127_DeleteEndpoint = 0 }

	export enum DeleteEntityRecognizerX_Amz_Target { Comprehend_20171127_DeleteEntityRecognizer = 0 }

	export enum DescribeDocumentClassificationJobX_Amz_Target { Comprehend_20171127_DescribeDocumentClassificationJob = 0 }

	export enum DescribeDocumentClassifierX_Amz_Target { Comprehend_20171127_DescribeDocumentClassifier = 0 }

	export enum DescribeDominantLanguageDetectionJobX_Amz_Target { Comprehend_20171127_DescribeDominantLanguageDetectionJob = 0 }

	export enum DescribeEndpointX_Amz_Target { Comprehend_20171127_DescribeEndpoint = 0 }

	export enum DescribeEntitiesDetectionJobX_Amz_Target { Comprehend_20171127_DescribeEntitiesDetectionJob = 0 }

	export enum DescribeEntityRecognizerX_Amz_Target { Comprehend_20171127_DescribeEntityRecognizer = 0 }

	export enum DescribeKeyPhrasesDetectionJobX_Amz_Target { Comprehend_20171127_DescribeKeyPhrasesDetectionJob = 0 }

	export enum DescribeSentimentDetectionJobX_Amz_Target { Comprehend_20171127_DescribeSentimentDetectionJob = 0 }

	export enum DescribeTopicsDetectionJobX_Amz_Target { Comprehend_20171127_DescribeTopicsDetectionJob = 0 }

	export enum DetectDominantLanguageX_Amz_Target { Comprehend_20171127_DetectDominantLanguage = 0 }

	export enum DetectEntitiesX_Amz_Target { Comprehend_20171127_DetectEntities = 0 }

	export enum DetectKeyPhrasesX_Amz_Target { Comprehend_20171127_DetectKeyPhrases = 0 }

	export enum DetectSentimentX_Amz_Target { Comprehend_20171127_DetectSentiment = 0 }

	export enum DetectSyntaxX_Amz_Target { Comprehend_20171127_DetectSyntax = 0 }

	export enum ListDocumentClassificationJobsX_Amz_Target { Comprehend_20171127_ListDocumentClassificationJobs = 0 }

	export enum ListDocumentClassifiersX_Amz_Target { Comprehend_20171127_ListDocumentClassifiers = 0 }

	export enum ListDominantLanguageDetectionJobsX_Amz_Target { Comprehend_20171127_ListDominantLanguageDetectionJobs = 0 }

	export enum ListEndpointsX_Amz_Target { Comprehend_20171127_ListEndpoints = 0 }

	export enum ListEntitiesDetectionJobsX_Amz_Target { Comprehend_20171127_ListEntitiesDetectionJobs = 0 }

	export enum ListEntityRecognizersX_Amz_Target { Comprehend_20171127_ListEntityRecognizers = 0 }

	export enum ListKeyPhrasesDetectionJobsX_Amz_Target { Comprehend_20171127_ListKeyPhrasesDetectionJobs = 0 }

	export enum ListSentimentDetectionJobsX_Amz_Target { Comprehend_20171127_ListSentimentDetectionJobs = 0 }

	export enum ListTagsForResourceX_Amz_Target { Comprehend_20171127_ListTagsForResource = 0 }

	export enum ListTopicsDetectionJobsX_Amz_Target { Comprehend_20171127_ListTopicsDetectionJobs = 0 }

	export enum StartDocumentClassificationJobX_Amz_Target { Comprehend_20171127_StartDocumentClassificationJob = 0 }

	export enum StartDominantLanguageDetectionJobX_Amz_Target { Comprehend_20171127_StartDominantLanguageDetectionJob = 0 }

	export enum StartEntitiesDetectionJobX_Amz_Target { Comprehend_20171127_StartEntitiesDetectionJob = 0 }

	export enum StartKeyPhrasesDetectionJobX_Amz_Target { Comprehend_20171127_StartKeyPhrasesDetectionJob = 0 }

	export enum StartSentimentDetectionJobX_Amz_Target { Comprehend_20171127_StartSentimentDetectionJob = 0 }

	export enum StartTopicsDetectionJobX_Amz_Target { Comprehend_20171127_StartTopicsDetectionJob = 0 }

	export enum StopDominantLanguageDetectionJobX_Amz_Target { Comprehend_20171127_StopDominantLanguageDetectionJob = 0 }

	export enum StopEntitiesDetectionJobX_Amz_Target { Comprehend_20171127_StopEntitiesDetectionJob = 0 }

	export enum StopKeyPhrasesDetectionJobX_Amz_Target { Comprehend_20171127_StopKeyPhrasesDetectionJob = 0 }

	export enum StopSentimentDetectionJobX_Amz_Target { Comprehend_20171127_StopSentimentDetectionJob = 0 }

	export enum StopTrainingDocumentClassifierX_Amz_Target { Comprehend_20171127_StopTrainingDocumentClassifier = 0 }

	export enum StopTrainingEntityRecognizerX_Amz_Target { Comprehend_20171127_StopTrainingEntityRecognizer = 0 }

	export enum TagResourceX_Amz_Target { Comprehend_20171127_TagResource = 0 }

	export enum UntagResourceX_Amz_Target { Comprehend_20171127_UntagResource = 0 }

	export enum UpdateEndpointX_Amz_Target { Comprehend_20171127_UpdateEndpoint = 0 }

}

