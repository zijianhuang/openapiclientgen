import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BatchCreateCustomVocabularyItemResponse {
		botId?: string;
		botVersion?: string;
		localeId?: string;
		errors?: Array<FailedCustomVocabularyItem>;
		resources?: Array<CustomVocabularyItem>;
	}
	export interface BatchCreateCustomVocabularyItemResponseFormProperties {
		botId: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,
		localeId: FormControl<string | null | undefined>,
	}
	export function CreateBatchCreateCustomVocabularyItemResponseFormGroup() {
		return new FormGroup<BatchCreateCustomVocabularyItemResponseFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
			localeId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The unique failed custom vocabulary item from the custom vocabulary list. */
	export interface FailedCustomVocabularyItem {
		itemId?: string;
		errorMessage?: string;
		errorCode?: ErrorCode;
	}

	/** The unique failed custom vocabulary item from the custom vocabulary list. */
	export interface FailedCustomVocabularyItemFormProperties {
		itemId: FormControl<string | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
		errorCode: FormControl<ErrorCode | null | undefined>,
	}
	export function CreateFailedCustomVocabularyItemFormGroup() {
		return new FormGroup<FailedCustomVocabularyItemFormProperties>({
			itemId: new FormControl<string | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			errorCode: new FormControl<ErrorCode | null | undefined>(undefined),
		});

	}

	export enum ErrorCode { DUPLICATE_INPUT = 'DUPLICATE_INPUT', RESOURCE_DOES_NOT_EXIST = 'RESOURCE_DOES_NOT_EXIST', RESOURCE_ALREADY_EXISTS = 'RESOURCE_ALREADY_EXISTS', INTERNAL_SERVER_FAILURE = 'INTERNAL_SERVER_FAILURE' }


	/** The unique custom vocabulary item from the custom vocabulary list. */
	export interface CustomVocabularyItem {

		/** Required */
		itemId: string;

		/** Required */
		phrase: string;
		weight?: number | null;
		displayAs?: string;
	}

	/** The unique custom vocabulary item from the custom vocabulary list. */
	export interface CustomVocabularyItemFormProperties {

		/** Required */
		itemId: FormControl<string | null | undefined>,

		/** Required */
		phrase: FormControl<string | null | undefined>,
		weight: FormControl<number | null | undefined>,
		displayAs: FormControl<string | null | undefined>,
	}
	export function CreateCustomVocabularyItemFormGroup() {
		return new FormGroup<CustomVocabularyItemFormProperties>({
			itemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			phrase: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			weight: new FormControl<number | null | undefined>(undefined),
			displayAs: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The new custom vocabulary item from the custom vocabulary list. */
	export interface NewCustomVocabularyItem {

		/** Required */
		phrase: string;
		weight?: number | null;
		displayAs?: string;
	}

	/** The new custom vocabulary item from the custom vocabulary list. */
	export interface NewCustomVocabularyItemFormProperties {

		/** Required */
		phrase: FormControl<string | null | undefined>,
		weight: FormControl<number | null | undefined>,
		displayAs: FormControl<string | null | undefined>,
	}
	export function CreateNewCustomVocabularyItemFormGroup() {
		return new FormGroup<NewCustomVocabularyItemFormProperties>({
			phrase: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			weight: new FormControl<number | null | undefined>(undefined),
			displayAs: new FormControl<string | null | undefined>(undefined),
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

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
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

	export interface BatchDeleteCustomVocabularyItemResponse {
		botId?: string;
		botVersion?: string;
		localeId?: string;
		errors?: Array<FailedCustomVocabularyItem>;
		resources?: Array<CustomVocabularyItem>;
	}
	export interface BatchDeleteCustomVocabularyItemResponseFormProperties {
		botId: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,
		localeId: FormControl<string | null | undefined>,
	}
	export function CreateBatchDeleteCustomVocabularyItemResponseFormGroup() {
		return new FormGroup<BatchDeleteCustomVocabularyItemResponseFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
			localeId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The unique entry identifier for the custom vocabulary items. */
	export interface CustomVocabularyEntryId {

		/** Required */
		itemId: string;
	}

	/** The unique entry identifier for the custom vocabulary items. */
	export interface CustomVocabularyEntryIdFormProperties {

		/** Required */
		itemId: FormControl<string | null | undefined>,
	}
	export function CreateCustomVocabularyEntryIdFormGroup() {
		return new FormGroup<CustomVocabularyEntryIdFormProperties>({
			itemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BatchUpdateCustomVocabularyItemResponse {
		botId?: string;
		botVersion?: string;
		localeId?: string;
		errors?: Array<FailedCustomVocabularyItem>;
		resources?: Array<CustomVocabularyItem>;
	}
	export interface BatchUpdateCustomVocabularyItemResponseFormProperties {
		botId: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,
		localeId: FormControl<string | null | undefined>,
	}
	export function CreateBatchUpdateCustomVocabularyItemResponseFormGroup() {
		return new FormGroup<BatchUpdateCustomVocabularyItemResponseFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
			localeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BuildBotLocaleResponse {
		botId?: string;
		botVersion?: string;
		localeId?: string;
		botLocaleStatus?: BotLocaleStatus;
		lastBuildSubmittedDateTime?: Date;
	}
	export interface BuildBotLocaleResponseFormProperties {
		botId: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,
		localeId: FormControl<string | null | undefined>,
		botLocaleStatus: FormControl<BotLocaleStatus | null | undefined>,
		lastBuildSubmittedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateBuildBotLocaleResponseFormGroup() {
		return new FormGroup<BuildBotLocaleResponseFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
			localeId: new FormControl<string | null | undefined>(undefined),
			botLocaleStatus: new FormControl<BotLocaleStatus | null | undefined>(undefined),
			lastBuildSubmittedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum BotLocaleStatus { Creating = 'Creating', Building = 'Building', Built = 'Built', ReadyExpressTesting = 'ReadyExpressTesting', Failed = 'Failed', Deleting = 'Deleting', NotBuilt = 'NotBuilt', Importing = 'Importing', Processing = 'Processing' }

	export interface PreconditionFailedException {
	}
	export interface PreconditionFailedExceptionFormProperties {
	}
	export function CreatePreconditionFailedExceptionFormGroup() {
		return new FormGroup<PreconditionFailedExceptionFormProperties>({
		});

	}

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface CreateBotResponse {
		botId?: string;
		botName?: string;
		description?: string;
		roleArn?: string;
		dataPrivacy?: DataPrivacy;
		idleSessionTTLInSeconds?: number | null;
		botStatus?: BotStatus;
		creationDateTime?: Date;
		botTags?: TagMap;
		testBotAliasTags?: TagMap;
		botType?: BotType;
		botMembers?: Array<BotMember>;
	}
	export interface CreateBotResponseFormProperties {
		botId: FormControl<string | null | undefined>,
		botName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
		idleSessionTTLInSeconds: FormControl<number | null | undefined>,
		botStatus: FormControl<BotStatus | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		botType: FormControl<BotType | null | undefined>,
	}
	export function CreateCreateBotResponseFormGroup() {
		return new FormGroup<CreateBotResponseFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined),
			botName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
			idleSessionTTLInSeconds: new FormControl<number | null | undefined>(undefined),
			botStatus: new FormControl<BotStatus | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			botType: new FormControl<BotType | null | undefined>(undefined),
		});

	}


	/** By default, data stored by Amazon Lex is encrypted. The <code>DataPrivacy</code> structure provides settings that determine how Amazon Lex handles special cases of securing the data for your bot.  */
	export interface DataPrivacy {

		/** Required */
		childDirected: boolean;
	}

	/** By default, data stored by Amazon Lex is encrypted. The <code>DataPrivacy</code> structure provides settings that determine how Amazon Lex handles special cases of securing the data for your bot.  */
	export interface DataPrivacyFormProperties {

		/** Required */
		childDirected: FormControl<boolean | null | undefined>,
	}
	export function CreateDataPrivacyFormGroup() {
		return new FormGroup<DataPrivacyFormProperties>({
			childDirected: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum BotStatus { Creating = 'Creating', Available = 'Available', Inactive = 'Inactive', Deleting = 'Deleting', Failed = 'Failed', Versioning = 'Versioning', Importing = 'Importing', Updating = 'Updating' }

	export interface TagMap {
	}
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
		});

	}

	export enum BotType { Bot = 'Bot', BotNetwork = 'BotNetwork' }


	/** A bot that is a member of a network of bots. */
	export interface BotMember {

		/** Required */
		botMemberId: string;

		/** Required */
		botMemberName: string;

		/** Required */
		botMemberAliasId: string;

		/** Required */
		botMemberAliasName: string;

		/** Required */
		botMemberVersion: string;
	}

	/** A bot that is a member of a network of bots. */
	export interface BotMemberFormProperties {

		/** Required */
		botMemberId: FormControl<string | null | undefined>,

		/** Required */
		botMemberName: FormControl<string | null | undefined>,

		/** Required */
		botMemberAliasId: FormControl<string | null | undefined>,

		/** Required */
		botMemberAliasName: FormControl<string | null | undefined>,

		/** Required */
		botMemberVersion: FormControl<string | null | undefined>,
	}
	export function CreateBotMemberFormGroup() {
		return new FormGroup<BotMemberFormProperties>({
			botMemberId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			botMemberName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			botMemberAliasId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			botMemberAliasName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			botMemberVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateBotAliasResponse {
		botAliasId?: string;
		botAliasName?: string;
		description?: string;
		botVersion?: string;
		botAliasLocaleSettings?: BotAliasLocaleSettingsMap;
		conversationLogSettings?: ConversationLogSettings;

		/** Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances. */
		sentimentAnalysisSettings?: SentimentAnalysisSettings;
		botAliasStatus?: BotAliasStatus;
		botId?: string;
		creationDateTime?: Date;
		tags?: TagMap;
	}
	export interface CreateBotAliasResponseFormProperties {
		botAliasId: FormControl<string | null | undefined>,
		botAliasName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,
		botAliasStatus: FormControl<BotAliasStatus | null | undefined>,
		botId: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateCreateBotAliasResponseFormGroup() {
		return new FormGroup<CreateBotAliasResponseFormProperties>({
			botAliasId: new FormControl<string | null | undefined>(undefined),
			botAliasName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
			botAliasStatus: new FormControl<BotAliasStatus | null | undefined>(undefined),
			botId: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface BotAliasLocaleSettingsMap {
	}
	export interface BotAliasLocaleSettingsMapFormProperties {
	}
	export function CreateBotAliasLocaleSettingsMapFormGroup() {
		return new FormGroup<BotAliasLocaleSettingsMapFormProperties>({
		});

	}


	/** Configures conversation logging that saves audio, text, and metadata for the conversations with your users. */
	export interface ConversationLogSettings {
		textLogSettings?: Array<TextLogSetting>;
		audioLogSettings?: Array<AudioLogSetting>;
	}

	/** Configures conversation logging that saves audio, text, and metadata for the conversations with your users. */
	export interface ConversationLogSettingsFormProperties {
	}
	export function CreateConversationLogSettingsFormGroup() {
		return new FormGroup<ConversationLogSettingsFormProperties>({
		});

	}


	/** Defines settings to enable text conversation logs. */
	export interface TextLogSetting {

		/** Required */
		enabled: boolean;

		/**
		 * Defines the Amazon CloudWatch Logs destination log group for conversation text logs.
		 * Required
		 */
		destination: TextLogDestination;
	}

	/** Defines settings to enable text conversation logs. */
	export interface TextLogSettingFormProperties {

		/** Required */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateTextLogSettingFormGroup() {
		return new FormGroup<TextLogSettingFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines the Amazon CloudWatch Logs destination log group for conversation text logs. */
	export interface TextLogDestination {

		/** Required */
		cloudWatch: CloudWatchLogGroupLogDestination;
	}

	/** Defines the Amazon CloudWatch Logs destination log group for conversation text logs. */
	export interface TextLogDestinationFormProperties {
	}
	export function CreateTextLogDestinationFormGroup() {
		return new FormGroup<TextLogDestinationFormProperties>({
		});

	}


	/** The Amazon CloudWatch Logs log group where the text and metadata logs are delivered. The log group must exist before you enable logging. */
	export interface CloudWatchLogGroupLogDestination {

		/** Required */
		cloudWatchLogGroupArn: string;

		/** Required */
		logPrefix: string;
	}

	/** The Amazon CloudWatch Logs log group where the text and metadata logs are delivered. The log group must exist before you enable logging. */
	export interface CloudWatchLogGroupLogDestinationFormProperties {

		/** Required */
		cloudWatchLogGroupArn: FormControl<string | null | undefined>,

		/** Required */
		logPrefix: FormControl<string | null | undefined>,
	}
	export function CreateCloudWatchLogGroupLogDestinationFormGroup() {
		return new FormGroup<CloudWatchLogGroupLogDestinationFormProperties>({
			cloudWatchLogGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			logPrefix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Settings for logging audio of conversations between Amazon Lex and a user. You specify whether to log audio and the Amazon S3 bucket where the audio file is stored. */
	export interface AudioLogSetting {

		/** Required */
		enabled: boolean;

		/**
		 * The location of audio log files collected when conversation logging is enabled for a bot.
		 * Required
		 */
		destination: AudioLogDestination;
	}

	/** Settings for logging audio of conversations between Amazon Lex and a user. You specify whether to log audio and the Amazon S3 bucket where the audio file is stored. */
	export interface AudioLogSettingFormProperties {

		/** Required */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAudioLogSettingFormGroup() {
		return new FormGroup<AudioLogSettingFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The location of audio log files collected when conversation logging is enabled for a bot. */
	export interface AudioLogDestination {

		/** Required */
		s3Bucket: S3BucketLogDestination;
	}

	/** The location of audio log files collected when conversation logging is enabled for a bot. */
	export interface AudioLogDestinationFormProperties {
	}
	export function CreateAudioLogDestinationFormGroup() {
		return new FormGroup<AudioLogDestinationFormProperties>({
		});

	}


	/** Specifies an Amazon S3 bucket for logging audio conversations */
	export interface S3BucketLogDestination {
		kmsKeyArn?: string;

		/** Required */
		s3BucketArn: string;

		/** Required */
		logPrefix: string;
	}

	/** Specifies an Amazon S3 bucket for logging audio conversations */
	export interface S3BucketLogDestinationFormProperties {
		kmsKeyArn: FormControl<string | null | undefined>,

		/** Required */
		s3BucketArn: FormControl<string | null | undefined>,

		/** Required */
		logPrefix: FormControl<string | null | undefined>,
	}
	export function CreateS3BucketLogDestinationFormGroup() {
		return new FormGroup<S3BucketLogDestinationFormProperties>({
			kmsKeyArn: new FormControl<string | null | undefined>(undefined),
			s3BucketArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			logPrefix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances. */
	export interface SentimentAnalysisSettings {

		/** Required */
		detectSentiment: boolean;
	}

	/** Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances. */
	export interface SentimentAnalysisSettingsFormProperties {

		/** Required */
		detectSentiment: FormControl<boolean | null | undefined>,
	}
	export function CreateSentimentAnalysisSettingsFormGroup() {
		return new FormGroup<SentimentAnalysisSettingsFormProperties>({
			detectSentiment: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum BotAliasStatus { Creating = 'Creating', Available = 'Available', Deleting = 'Deleting', Failed = 'Failed' }


	/** Specifies settings that are unique to a locale. For example, you can use different Lambda function depending on the bot's locale. */
	export interface BotAliasLocaleSettings {

		/** Required */
		enabled: boolean;
		codeHookSpecification?: CodeHookSpecification;
	}

	/** Specifies settings that are unique to a locale. For example, you can use different Lambda function depending on the bot's locale. */
	export interface BotAliasLocaleSettingsFormProperties {

		/** Required */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateBotAliasLocaleSettingsFormGroup() {
		return new FormGroup<BotAliasLocaleSettingsFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains information about code hooks that Amazon Lex calls during a conversation. */
	export interface CodeHookSpecification {

		/**
		 * Specifies a Lambda function that verifies requests to a bot or fulfills the user's request to a bot.
		 * Required
		 */
		lambdaCodeHook: LambdaCodeHook;
	}

	/** Contains information about code hooks that Amazon Lex calls during a conversation. */
	export interface CodeHookSpecificationFormProperties {
	}
	export function CreateCodeHookSpecificationFormGroup() {
		return new FormGroup<CodeHookSpecificationFormProperties>({
		});

	}


	/** Specifies a Lambda function that verifies requests to a bot or fulfills the user's request to a bot. */
	export interface LambdaCodeHook {

		/** Required */
		lambdaARN: string;

		/** Required */
		codeHookInterfaceVersion: string;
	}

	/** Specifies a Lambda function that verifies requests to a bot or fulfills the user's request to a bot. */
	export interface LambdaCodeHookFormProperties {

		/** Required */
		lambdaARN: FormControl<string | null | undefined>,

		/** Required */
		codeHookInterfaceVersion: FormControl<string | null | undefined>,
	}
	export function CreateLambdaCodeHookFormGroup() {
		return new FormGroup<LambdaCodeHookFormProperties>({
			lambdaARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			codeHookInterfaceVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateBotLocaleResponse {
		botId?: string;
		botVersion?: string;
		localeName?: string;
		localeId?: string;
		description?: string;
		nluIntentConfidenceThreshold?: number | null;
		voiceSettings?: VoiceSettings;
		botLocaleStatus?: BotLocaleStatus;
		creationDateTime?: Date;
	}
	export interface CreateBotLocaleResponseFormProperties {
		botId: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,
		localeName: FormControl<string | null | undefined>,
		localeId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		nluIntentConfidenceThreshold: FormControl<number | null | undefined>,
		botLocaleStatus: FormControl<BotLocaleStatus | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateCreateBotLocaleResponseFormGroup() {
		return new FormGroup<CreateBotLocaleResponseFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
			localeName: new FormControl<string | null | undefined>(undefined),
			localeId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			nluIntentConfidenceThreshold: new FormControl<number | null | undefined>(undefined),
			botLocaleStatus: new FormControl<BotLocaleStatus | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Defines settings for using an Amazon Polly voice to communicate with a user. */
	export interface VoiceSettings {

		/** Required */
		voiceId: string;
		engine?: VoiceEngine;
	}

	/** Defines settings for using an Amazon Polly voice to communicate with a user. */
	export interface VoiceSettingsFormProperties {

		/** Required */
		voiceId: FormControl<string | null | undefined>,
		engine: FormControl<VoiceEngine | null | undefined>,
	}
	export function CreateVoiceSettingsFormGroup() {
		return new FormGroup<VoiceSettingsFormProperties>({
			voiceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			engine: new FormControl<VoiceEngine | null | undefined>(undefined),
		});

	}

	export enum VoiceEngine { standard = 'standard', neural = 'neural' }

	export interface CreateBotVersionResponse {
		botId?: string;
		description?: string;
		botVersion?: string;
		botVersionLocaleSpecification?: BotVersionLocaleSpecification;
		botStatus?: BotStatus;
		creationDateTime?: Date;
	}
	export interface CreateBotVersionResponseFormProperties {
		botId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,
		botStatus: FormControl<BotStatus | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateCreateBotVersionResponseFormGroup() {
		return new FormGroup<CreateBotVersionResponseFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
			botStatus: new FormControl<BotStatus | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface BotVersionLocaleSpecification {
	}
	export interface BotVersionLocaleSpecificationFormProperties {
	}
	export function CreateBotVersionLocaleSpecificationFormGroup() {
		return new FormGroup<BotVersionLocaleSpecificationFormProperties>({
		});

	}


	/** The version of a bot used for a bot locale. */
	export interface BotVersionLocaleDetails {

		/** Required */
		sourceBotVersion: string;
	}

	/** The version of a bot used for a bot locale. */
	export interface BotVersionLocaleDetailsFormProperties {

		/** Required */
		sourceBotVersion: FormControl<string | null | undefined>,
	}
	export function CreateBotVersionLocaleDetailsFormGroup() {
		return new FormGroup<BotVersionLocaleDetailsFormProperties>({
			sourceBotVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateExportResponse {
		exportId?: string;
		resourceSpecification?: ExportResourceSpecification;
		fileFormat?: ImportExportFileFormat;
		exportStatus?: ExportStatus;
		creationDateTime?: Date;
	}
	export interface CreateExportResponseFormProperties {
		exportId: FormControl<string | null | undefined>,
		fileFormat: FormControl<ImportExportFileFormat | null | undefined>,
		exportStatus: FormControl<ExportStatus | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateCreateExportResponseFormGroup() {
		return new FormGroup<CreateExportResponseFormProperties>({
			exportId: new FormControl<string | null | undefined>(undefined),
			fileFormat: new FormControl<ImportExportFileFormat | null | undefined>(undefined),
			exportStatus: new FormControl<ExportStatus | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Provides information about the bot or bot locale that you want to export. You can specify the <code>botExportSpecification</code> or the <code>botLocaleExportSpecification</code>, but not both. */
	export interface ExportResourceSpecification {
		botExportSpecification?: BotExportSpecification;
		botLocaleExportSpecification?: BotLocaleExportSpecification;
		customVocabularyExportSpecification?: CustomVocabularyExportSpecification;
		testSetExportSpecification?: TestSetExportSpecification;
	}

	/** Provides information about the bot or bot locale that you want to export. You can specify the <code>botExportSpecification</code> or the <code>botLocaleExportSpecification</code>, but not both. */
	export interface ExportResourceSpecificationFormProperties {
	}
	export function CreateExportResourceSpecificationFormGroup() {
		return new FormGroup<ExportResourceSpecificationFormProperties>({
		});

	}


	/** Provides the identity of a the bot that was exported. */
	export interface BotExportSpecification {

		/** Required */
		botId: string;

		/** Required */
		botVersion: string;
	}

	/** Provides the identity of a the bot that was exported. */
	export interface BotExportSpecificationFormProperties {

		/** Required */
		botId: FormControl<string | null | undefined>,

		/** Required */
		botVersion: FormControl<string | null | undefined>,
	}
	export function CreateBotExportSpecificationFormGroup() {
		return new FormGroup<BotExportSpecificationFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			botVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the bot locale parameters required for exporting a bot locale. */
	export interface BotLocaleExportSpecification {

		/** Required */
		botId: string;

		/** Required */
		botVersion: string;

		/** Required */
		localeId: string;
	}

	/** Provides the bot locale parameters required for exporting a bot locale. */
	export interface BotLocaleExportSpecificationFormProperties {

		/** Required */
		botId: FormControl<string | null | undefined>,

		/** Required */
		botVersion: FormControl<string | null | undefined>,

		/** Required */
		localeId: FormControl<string | null | undefined>,
	}
	export function CreateBotLocaleExportSpecificationFormGroup() {
		return new FormGroup<BotLocaleExportSpecificationFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			botVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			localeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the parameters required for exporting a custom vocabulary. */
	export interface CustomVocabularyExportSpecification {

		/** Required */
		botId: string;

		/** Required */
		botVersion: string;

		/** Required */
		localeId: string;
	}

	/** Provides the parameters required for exporting a custom vocabulary. */
	export interface CustomVocabularyExportSpecificationFormProperties {

		/** Required */
		botId: FormControl<string | null | undefined>,

		/** Required */
		botVersion: FormControl<string | null | undefined>,

		/** Required */
		localeId: FormControl<string | null | undefined>,
	}
	export function CreateCustomVocabularyExportSpecificationFormGroup() {
		return new FormGroup<CustomVocabularyExportSpecificationFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			botVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			localeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains information about the test set that is exported. */
	export interface TestSetExportSpecification {

		/** Required */
		testSetId: string;
	}

	/** Contains information about the test set that is exported. */
	export interface TestSetExportSpecificationFormProperties {

		/** Required */
		testSetId: FormControl<string | null | undefined>,
	}
	export function CreateTestSetExportSpecificationFormGroup() {
		return new FormGroup<TestSetExportSpecificationFormProperties>({
			testSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ImportExportFileFormat { LexJson = 'LexJson', TSV = 'TSV', CSV = 'CSV' }

	export enum ExportStatus { InProgress = 'InProgress', Completed = 'Completed', Failed = 'Failed', Deleting = 'Deleting' }

	export interface CreateIntentResponse {
		intentId?: string;
		intentName?: string;
		description?: string;
		parentIntentSignature?: string;
		sampleUtterances?: Array<SampleUtterance>;
		dialogCodeHook?: DialogCodeHookSettings;
		fulfillmentCodeHook?: FulfillmentCodeHookSettings;
		intentConfirmationSetting?: IntentConfirmationSetting;
		intentClosingSetting?: IntentClosingSetting;
		inputContexts?: Array<InputContext>;
		outputContexts?: Array<OutputContext>;
		kendraConfiguration?: KendraConfiguration;
		botId?: string;
		botVersion?: string;
		localeId?: string;
		creationDateTime?: Date;
		initialResponseSetting?: InitialResponseSetting;
	}
	export interface CreateIntentResponseFormProperties {
		intentId: FormControl<string | null | undefined>,
		intentName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		parentIntentSignature: FormControl<string | null | undefined>,
		botId: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,
		localeId: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateCreateIntentResponseFormGroup() {
		return new FormGroup<CreateIntentResponseFormProperties>({
			intentId: new FormControl<string | null | undefined>(undefined),
			intentName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			parentIntentSignature: new FormControl<string | null | undefined>(undefined),
			botId: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
			localeId: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** A sample utterance that invokes an intent or respond to a slot elicitation prompt. */
	export interface SampleUtterance {

		/** Required */
		utterance: string;
	}

	/** A sample utterance that invokes an intent or respond to a slot elicitation prompt. */
	export interface SampleUtteranceFormProperties {

		/** Required */
		utterance: FormControl<string | null | undefined>,
	}
	export function CreateSampleUtteranceFormGroup() {
		return new FormGroup<SampleUtteranceFormProperties>({
			utterance: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Settings that determine the Lambda function that Amazon Lex uses for processing user responses. */
	export interface DialogCodeHookSettings {

		/** Required */
		enabled: boolean;
	}

	/** Settings that determine the Lambda function that Amazon Lex uses for processing user responses. */
	export interface DialogCodeHookSettingsFormProperties {

		/** Required */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateDialogCodeHookSettingsFormGroup() {
		return new FormGroup<DialogCodeHookSettingsFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Determines if a Lambda function should be invoked for a specific intent. */
	export interface FulfillmentCodeHookSettings {

		/** Required */
		enabled: boolean;
		postFulfillmentStatusSpecification?: PostFulfillmentStatusSpecification;
		fulfillmentUpdatesSpecification?: FulfillmentUpdatesSpecification;
		active?: boolean | null;
	}

	/** Determines if a Lambda function should be invoked for a specific intent. */
	export interface FulfillmentCodeHookSettingsFormProperties {

		/** Required */
		enabled: FormControl<boolean | null | undefined>,
		active: FormControl<boolean | null | undefined>,
	}
	export function CreateFulfillmentCodeHookSettingsFormGroup() {
		return new FormGroup<FulfillmentCodeHookSettingsFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			active: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Provides a setting that determines whether the post-fulfillment response is sent to the user. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/streaming-progress.html#progress-complete">https://docs.aws.amazon.com/lexv2/latest/dg/streaming-progress.html#progress-complete</a>  */
	export interface PostFulfillmentStatusSpecification {

		/** Specifies a list of message groups that Amazon Lex uses to respond the user input. */
		successResponse?: ResponseSpecification;

		/** Specifies a list of message groups that Amazon Lex uses to respond the user input. */
		failureResponse?: ResponseSpecification;

		/** Specifies a list of message groups that Amazon Lex uses to respond the user input. */
		timeoutResponse?: ResponseSpecification;
		successNextStep?: DialogState;
		successConditional?: ConditionalSpecification;
		failureNextStep?: DialogState;
		failureConditional?: ConditionalSpecification;
		timeoutNextStep?: DialogState;
		timeoutConditional?: ConditionalSpecification;
	}

	/** Provides a setting that determines whether the post-fulfillment response is sent to the user. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/streaming-progress.html#progress-complete">https://docs.aws.amazon.com/lexv2/latest/dg/streaming-progress.html#progress-complete</a>  */
	export interface PostFulfillmentStatusSpecificationFormProperties {
	}
	export function CreatePostFulfillmentStatusSpecificationFormGroup() {
		return new FormGroup<PostFulfillmentStatusSpecificationFormProperties>({
		});

	}


	/** Specifies a list of message groups that Amazon Lex uses to respond the user input. */
	export interface ResponseSpecification {

		/** Required */
		messageGroups: Array<MessageGroup>;
		allowInterrupt?: boolean | null;
	}

	/** Specifies a list of message groups that Amazon Lex uses to respond the user input. */
	export interface ResponseSpecificationFormProperties {
		allowInterrupt: FormControl<boolean | null | undefined>,
	}
	export function CreateResponseSpecificationFormGroup() {
		return new FormGroup<ResponseSpecificationFormProperties>({
			allowInterrupt: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Provides one or more messages that Amazon Lex should send to the user. */
	export interface MessageGroup {

		/** Required */
		message: Message;
		variations?: Array<Message>;
	}

	/** Provides one or more messages that Amazon Lex should send to the user. */
	export interface MessageGroupFormProperties {
	}
	export function CreateMessageGroupFormGroup() {
		return new FormGroup<MessageGroupFormProperties>({
		});

	}


	/** The object that provides message text and its type. */
	export interface Message {
		plainTextMessage?: PlainTextMessage;
		customPayload?: CustomPayload;
		ssmlMessage?: SSMLMessage;
		imageResponseCard?: ImageResponseCard;
	}

	/** The object that provides message text and its type. */
	export interface MessageFormProperties {
	}
	export function CreateMessageFormGroup() {
		return new FormGroup<MessageFormProperties>({
		});

	}


	/** Defines an ASCII text message to send to the user. */
	export interface PlainTextMessage {

		/** Required */
		value: string;
	}

	/** Defines an ASCII text message to send to the user. */
	export interface PlainTextMessageFormProperties {

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreatePlainTextMessageFormGroup() {
		return new FormGroup<PlainTextMessageFormProperties>({
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A custom response string that Amazon Lex sends to your application. You define the content and structure the string. */
	export interface CustomPayload {

		/** Required */
		value: string;
	}

	/** A custom response string that Amazon Lex sends to your application. You define the content and structure the string. */
	export interface CustomPayloadFormProperties {

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateCustomPayloadFormGroup() {
		return new FormGroup<CustomPayloadFormProperties>({
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines a Speech Synthesis Markup Language (SSML) prompt. */
	export interface SSMLMessage {

		/** Required */
		value: string;
	}

	/** Defines a Speech Synthesis Markup Language (SSML) prompt. */
	export interface SSMLMessageFormProperties {

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateSSMLMessageFormGroup() {
		return new FormGroup<SSMLMessageFormProperties>({
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>A card that is shown to the user by a messaging platform. You define the contents of the card, the card is displayed by the platform. </p> <p>When you use a response card, the response from the user is constrained to the text associated with a button on the card.</p> */
	export interface ImageResponseCard {

		/** Required */
		title: string;
		subtitle?: string;
		imageUrl?: string;
		buttons?: Array<Button>;
	}

	/** <p>A card that is shown to the user by a messaging platform. You define the contents of the card, the card is displayed by the platform. </p> <p>When you use a response card, the response from the user is constrained to the text associated with a button on the card.</p> */
	export interface ImageResponseCardFormProperties {

		/** Required */
		title: FormControl<string | null | undefined>,
		subtitle: FormControl<string | null | undefined>,
		imageUrl: FormControl<string | null | undefined>,
	}
	export function CreateImageResponseCardFormGroup() {
		return new FormGroup<ImageResponseCardFormProperties>({
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subtitle: new FormControl<string | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a button to use on a response card used to gather slot values from a user. */
	export interface Button {

		/** Required */
		text: string;

		/** Required */
		value: string;
	}

	/** Describes a button to use on a response card used to gather slot values from a user. */
	export interface ButtonFormProperties {

		/** Required */
		text: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateButtonFormGroup() {
		return new FormGroup<ButtonFormProperties>({
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The current state of the conversation with the user. */
	export interface DialogState {

		/** Defines the action that the bot executes at runtime when the conversation reaches this step. */
		dialogAction?: DialogAction;

		/** Override settings to configure the intent state. */
		intent?: IntentOverride;
		sessionAttributes?: StringMap;
	}

	/** The current state of the conversation with the user. */
	export interface DialogStateFormProperties {
	}
	export function CreateDialogStateFormGroup() {
		return new FormGroup<DialogStateFormProperties>({
		});

	}


	/** Defines the action that the bot executes at runtime when the conversation reaches this step. */
	export interface DialogAction {

		/** Required */
		type: DialogActionType;
		slotToElicit?: string;
		suppressNextMessage?: boolean | null;
	}

	/** Defines the action that the bot executes at runtime when the conversation reaches this step. */
	export interface DialogActionFormProperties {

		/** Required */
		type: FormControl<DialogActionType | null | undefined>,
		slotToElicit: FormControl<string | null | undefined>,
		suppressNextMessage: FormControl<boolean | null | undefined>,
	}
	export function CreateDialogActionFormGroup() {
		return new FormGroup<DialogActionFormProperties>({
			type: new FormControl<DialogActionType | null | undefined>(undefined, [Validators.required]),
			slotToElicit: new FormControl<string | null | undefined>(undefined),
			suppressNextMessage: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum DialogActionType { ElicitIntent = 'ElicitIntent', StartIntent = 'StartIntent', ElicitSlot = 'ElicitSlot', EvaluateConditional = 'EvaluateConditional', InvokeDialogCodeHook = 'InvokeDialogCodeHook', ConfirmIntent = 'ConfirmIntent', FulfillIntent = 'FulfillIntent', CloseIntent = 'CloseIntent', EndConversation = 'EndConversation' }


	/** Override settings to configure the intent state. */
	export interface IntentOverride {
		name?: string;
		slots?: SlotValueOverrideMap;
	}

	/** Override settings to configure the intent state. */
	export interface IntentOverrideFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateIntentOverrideFormGroup() {
		return new FormGroup<IntentOverrideFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SlotValueOverrideMap {
	}
	export interface SlotValueOverrideMapFormProperties {
	}
	export function CreateSlotValueOverrideMapFormGroup() {
		return new FormGroup<SlotValueOverrideMapFormProperties>({
		});

	}

	export interface StringMap {
	}
	export interface StringMapFormProperties {
	}
	export function CreateStringMapFormGroup() {
		return new FormGroup<StringMapFormProperties>({
		});

	}


	/** Provides a list of conditional branches. Branches are evaluated in the order that they are entered in the list. The first branch with a condition that evaluates to true is executed. The last branch in the list is the default branch. The default branch should not have any condition expression. The default branch is executed if no other branch has a matching condition. */
	export interface ConditionalSpecification {

		/** Required */
		active: boolean;

		/** Required */
		conditionalBranches: Array<ConditionalBranch>;

		/** Required */
		defaultBranch: DefaultConditionalBranch;
	}

	/** Provides a list of conditional branches. Branches are evaluated in the order that they are entered in the list. The first branch with a condition that evaluates to true is executed. The last branch in the list is the default branch. The default branch should not have any condition expression. The default branch is executed if no other branch has a matching condition. */
	export interface ConditionalSpecificationFormProperties {

		/** Required */
		active: FormControl<boolean | null | undefined>,
	}
	export function CreateConditionalSpecificationFormGroup() {
		return new FormGroup<ConditionalSpecificationFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A set of actions that Amazon Lex should run if the condition is matched. */
	export interface ConditionalBranch {

		/** Required */
		name: string;

		/** Required */
		condition: Condition;

		/** Required */
		nextStep: DialogState;

		/** Specifies a list of message groups that Amazon Lex uses to respond the user input. */
		response?: ResponseSpecification;
	}

	/** A set of actions that Amazon Lex should run if the condition is matched. */
	export interface ConditionalBranchFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateConditionalBranchFormGroup() {
		return new FormGroup<ConditionalBranchFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides an expression that evaluates to true or false.  */
	export interface Condition {

		/** Required */
		expressionString: string;
	}

	/** Provides an expression that evaluates to true or false.  */
	export interface ConditionFormProperties {

		/** Required */
		expressionString: FormControl<string | null | undefined>,
	}
	export function CreateConditionFormGroup() {
		return new FormGroup<ConditionFormProperties>({
			expressionString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A set of actions that Amazon Lex should run if none of the other conditions are met. */
	export interface DefaultConditionalBranch {
		nextStep?: DialogState;

		/** Specifies a list of message groups that Amazon Lex uses to respond the user input. */
		response?: ResponseSpecification;
	}

	/** A set of actions that Amazon Lex should run if none of the other conditions are met. */
	export interface DefaultConditionalBranchFormProperties {
	}
	export function CreateDefaultConditionalBranchFormGroup() {
		return new FormGroup<DefaultConditionalBranchFormProperties>({
		});

	}


	/** Provides information for updating the user on the progress of fulfilling an intent. */
	export interface FulfillmentUpdatesSpecification {

		/** Required */
		active: boolean;
		startResponse?: FulfillmentStartResponseSpecification;
		updateResponse?: FulfillmentUpdateResponseSpecification;
		timeoutInSeconds?: number | null;
	}

	/** Provides information for updating the user on the progress of fulfilling an intent. */
	export interface FulfillmentUpdatesSpecificationFormProperties {

		/** Required */
		active: FormControl<boolean | null | undefined>,
		timeoutInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateFulfillmentUpdatesSpecificationFormGroup() {
		return new FormGroup<FulfillmentUpdatesSpecificationFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			timeoutInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides settings for a message that is sent to the user when a fulfillment Lambda function starts running. */
	export interface FulfillmentStartResponseSpecification {

		/** Required */
		delayInSeconds: number;

		/** Required */
		messageGroups: Array<MessageGroup>;
		allowInterrupt?: boolean | null;
	}

	/** Provides settings for a message that is sent to the user when a fulfillment Lambda function starts running. */
	export interface FulfillmentStartResponseSpecificationFormProperties {

		/** Required */
		delayInSeconds: FormControl<number | null | undefined>,
		allowInterrupt: FormControl<boolean | null | undefined>,
	}
	export function CreateFulfillmentStartResponseSpecificationFormGroup() {
		return new FormGroup<FulfillmentStartResponseSpecificationFormProperties>({
			delayInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			allowInterrupt: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Provides settings for a message that is sent periodically to the user while a fulfillment Lambda function is running. */
	export interface FulfillmentUpdateResponseSpecification {

		/** Required */
		frequencyInSeconds: number;

		/** Required */
		messageGroups: Array<MessageGroup>;
		allowInterrupt?: boolean | null;
	}

	/** Provides settings for a message that is sent periodically to the user while a fulfillment Lambda function is running. */
	export interface FulfillmentUpdateResponseSpecificationFormProperties {

		/** Required */
		frequencyInSeconds: FormControl<number | null | undefined>,
		allowInterrupt: FormControl<boolean | null | undefined>,
	}
	export function CreateFulfillmentUpdateResponseSpecificationFormGroup() {
		return new FormGroup<FulfillmentUpdateResponseSpecificationFormProperties>({
			frequencyInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			allowInterrupt: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Provides a prompt for making sure that the user is ready for the intent to be fulfilled. */
	export interface IntentConfirmationSetting {

		/** Required */
		promptSpecification: PromptSpecification;
		declinationResponse?: ResponseSpecification;
		active?: boolean | null;

		/** Specifies a list of message groups that Amazon Lex uses to respond the user input. */
		confirmationResponse?: ResponseSpecification;
		confirmationNextStep?: DialogState;
		confirmationConditional?: ConditionalSpecification;
		declinationNextStep?: DialogState;
		declinationConditional?: ConditionalSpecification;

		/** Specifies a list of message groups that Amazon Lex uses to respond the user input. */
		failureResponse?: ResponseSpecification;
		failureNextStep?: DialogState;

		/** Provides a list of conditional branches. Branches are evaluated in the order that they are entered in the list. The first branch with a condition that evaluates to true is executed. The last branch in the list is the default branch. The default branch should not have any condition expression. The default branch is executed if no other branch has a matching condition. */
		failureConditional?: ConditionalSpecification;
		codeHook?: DialogCodeHookInvocationSetting;
		elicitationCodeHook?: ElicitationCodeHookInvocationSetting;
	}

	/** Provides a prompt for making sure that the user is ready for the intent to be fulfilled. */
	export interface IntentConfirmationSettingFormProperties {
		active: FormControl<boolean | null | undefined>,
	}
	export function CreateIntentConfirmationSettingFormGroup() {
		return new FormGroup<IntentConfirmationSettingFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifies a list of message groups that Amazon Lex sends to a user to elicit a response. */
	export interface PromptSpecification {

		/** Required */
		messageGroups: Array<MessageGroup>;

		/** Required */
		maxRetries: number;
		allowInterrupt?: boolean | null;
		messageSelectionStrategy?: MessageSelectionStrategy;
		promptAttemptsSpecification?: PromptAttemptsSpecificationMap;
	}

	/** Specifies a list of message groups that Amazon Lex sends to a user to elicit a response. */
	export interface PromptSpecificationFormProperties {

		/** Required */
		maxRetries: FormControl<number | null | undefined>,
		allowInterrupt: FormControl<boolean | null | undefined>,
		messageSelectionStrategy: FormControl<MessageSelectionStrategy | null | undefined>,
	}
	export function CreatePromptSpecificationFormGroup() {
		return new FormGroup<PromptSpecificationFormProperties>({
			maxRetries: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			allowInterrupt: new FormControl<boolean | null | undefined>(undefined),
			messageSelectionStrategy: new FormControl<MessageSelectionStrategy | null | undefined>(undefined),
		});

	}

	export enum MessageSelectionStrategy { Random = 'Random', Ordered = 'Ordered' }

	export interface PromptAttemptsSpecificationMap {
	}
	export interface PromptAttemptsSpecificationMapFormProperties {
	}
	export function CreatePromptAttemptsSpecificationMapFormGroup() {
		return new FormGroup<PromptAttemptsSpecificationMapFormProperties>({
		});

	}


	/** Settings that specify the dialog code hook that is called by Amazon Lex at a step of the conversation.  */
	export interface DialogCodeHookInvocationSetting {

		/** Required */
		enableCodeHookInvocation: boolean;

		/** Required */
		active: boolean;
		invocationLabel?: string;

		/** Required */
		postCodeHookSpecification: PostDialogCodeHookInvocationSpecification;
	}

	/** Settings that specify the dialog code hook that is called by Amazon Lex at a step of the conversation.  */
	export interface DialogCodeHookInvocationSettingFormProperties {

		/** Required */
		enableCodeHookInvocation: FormControl<boolean | null | undefined>,

		/** Required */
		active: FormControl<boolean | null | undefined>,
		invocationLabel: FormControl<string | null | undefined>,
	}
	export function CreateDialogCodeHookInvocationSettingFormGroup() {
		return new FormGroup<DialogCodeHookInvocationSettingFormProperties>({
			enableCodeHookInvocation: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			active: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			invocationLabel: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies next steps to run after the dialog code hook finishes. */
	export interface PostDialogCodeHookInvocationSpecification {

		/** Specifies a list of message groups that Amazon Lex uses to respond the user input. */
		successResponse?: ResponseSpecification;
		successNextStep?: DialogState;
		successConditional?: ConditionalSpecification;

		/** Specifies a list of message groups that Amazon Lex uses to respond the user input. */
		failureResponse?: ResponseSpecification;
		failureNextStep?: DialogState;
		failureConditional?: ConditionalSpecification;

		/** Specifies a list of message groups that Amazon Lex uses to respond the user input. */
		timeoutResponse?: ResponseSpecification;
		timeoutNextStep?: DialogState;
		timeoutConditional?: ConditionalSpecification;
	}

	/** Specifies next steps to run after the dialog code hook finishes. */
	export interface PostDialogCodeHookInvocationSpecificationFormProperties {
	}
	export function CreatePostDialogCodeHookInvocationSpecificationFormGroup() {
		return new FormGroup<PostDialogCodeHookInvocationSpecificationFormProperties>({
		});

	}


	/** Settings that specify the dialog code hook that is called by Amazon Lex between eliciting slot values. */
	export interface ElicitationCodeHookInvocationSetting {

		/** Required */
		enableCodeHookInvocation: boolean;
		invocationLabel?: string;
	}

	/** Settings that specify the dialog code hook that is called by Amazon Lex between eliciting slot values. */
	export interface ElicitationCodeHookInvocationSettingFormProperties {

		/** Required */
		enableCodeHookInvocation: FormControl<boolean | null | undefined>,
		invocationLabel: FormControl<string | null | undefined>,
	}
	export function CreateElicitationCodeHookInvocationSettingFormGroup() {
		return new FormGroup<ElicitationCodeHookInvocationSettingFormProperties>({
			enableCodeHookInvocation: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			invocationLabel: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides a statement the Amazon Lex conveys to the user when the intent is successfully fulfilled. */
	export interface IntentClosingSetting {
		closingResponse?: ResponseSpecification;
		active?: boolean | null;
		nextStep?: DialogState;
		conditional?: ConditionalSpecification;
	}

	/** Provides a statement the Amazon Lex conveys to the user when the intent is successfully fulfilled. */
	export interface IntentClosingSettingFormProperties {
		active: FormControl<boolean | null | undefined>,
	}
	export function CreateIntentClosingSettingFormGroup() {
		return new FormGroup<IntentClosingSettingFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A context that must be active for an intent to be selected by Amazon Lex. */
	export interface InputContext {

		/** Required */
		name: string;
	}

	/** A context that must be active for an intent to be selected by Amazon Lex. */
	export interface InputContextFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateInputContextFormGroup() {
		return new FormGroup<InputContextFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes a session context that is activated when an intent is fulfilled. */
	export interface OutputContext {

		/** Required */
		name: string;

		/** Required */
		timeToLiveInSeconds: number;

		/** Required */
		turnsToLive: number;
	}

	/** Describes a session context that is activated when an intent is fulfilled. */
	export interface OutputContextFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		timeToLiveInSeconds: FormControl<number | null | undefined>,

		/** Required */
		turnsToLive: FormControl<number | null | undefined>,
	}
	export function CreateOutputContextFormGroup() {
		return new FormGroup<OutputContextFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timeToLiveInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			turnsToLive: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides configuration information for the <code>AMAZON.KendraSearchIntent</code> intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance. */
	export interface KendraConfiguration {

		/** Required */
		kendraIndex: string;
		queryFilterStringEnabled?: boolean | null;
		queryFilterString?: string;
	}

	/** Provides configuration information for the <code>AMAZON.KendraSearchIntent</code> intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance. */
	export interface KendraConfigurationFormProperties {

		/** Required */
		kendraIndex: FormControl<string | null | undefined>,
		queryFilterStringEnabled: FormControl<boolean | null | undefined>,
		queryFilterString: FormControl<string | null | undefined>,
	}
	export function CreateKendraConfigurationFormGroup() {
		return new FormGroup<KendraConfigurationFormProperties>({
			kendraIndex: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			queryFilterStringEnabled: new FormControl<boolean | null | undefined>(undefined),
			queryFilterString: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration setting for a response sent to the user before Amazon Lex starts eliciting slots. */
	export interface InitialResponseSetting {

		/** Specifies a list of message groups that Amazon Lex uses to respond the user input. */
		initialResponse?: ResponseSpecification;
		nextStep?: DialogState;

		/** Provides a list of conditional branches. Branches are evaluated in the order that they are entered in the list. The first branch with a condition that evaluates to true is executed. The last branch in the list is the default branch. The default branch should not have any condition expression. The default branch is executed if no other branch has a matching condition. */
		conditional?: ConditionalSpecification;

		/** Settings that specify the dialog code hook that is called by Amazon Lex at a step of the conversation. */
		codeHook?: DialogCodeHookInvocationSetting;
	}

	/** Configuration setting for a response sent to the user before Amazon Lex starts eliciting slots. */
	export interface InitialResponseSettingFormProperties {
	}
	export function CreateInitialResponseSettingFormGroup() {
		return new FormGroup<InitialResponseSettingFormProperties>({
		});

	}

	export interface CreateResourcePolicyResponse {
		resourceArn?: string;
		revisionId?: string;
	}
	export interface CreateResourcePolicyResponseFormProperties {
		resourceArn: FormControl<string | null | undefined>,
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreateCreateResourcePolicyResponseFormGroup() {
		return new FormGroup<CreateResourcePolicyResponseFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateResourcePolicyStatementResponse {
		resourceArn?: string;
		revisionId?: string;
	}
	export interface CreateResourcePolicyStatementResponseFormProperties {
		resourceArn: FormControl<string | null | undefined>,
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreateCreateResourcePolicyStatementResponseFormGroup() {
		return new FormGroup<CreateResourcePolicyStatementResponseFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The IAM principal that you allowing or denying access to an Amazon Lex action. You must provide a <code>service</code> or an <code>arn</code>, but not both in the same statement. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html"> AWS JSON policy elements: Principal </a>. */
	export interface Principal {
		service?: string;
		arn?: string;
	}

	/** The IAM principal that you allowing or denying access to an Amazon Lex action. You must provide a <code>service</code> or an <code>arn</code>, but not both in the same statement. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html"> AWS JSON policy elements: Principal </a>. */
	export interface PrincipalFormProperties {
		service: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
	}
	export function CreatePrincipalFormGroup() {
		return new FormGroup<PrincipalFormProperties>({
			service: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConditionKeyValueMap {
	}
	export interface ConditionKeyValueMapFormProperties {
	}
	export function CreateConditionKeyValueMapFormGroup() {
		return new FormGroup<ConditionKeyValueMapFormProperties>({
		});

	}

	export interface CreateSlotResponse {
		slotId?: string;
		slotName?: string;
		description?: string;
		slotTypeId?: string;
		valueElicitationSetting?: SlotValueElicitationSetting;
		obfuscationSetting?: ObfuscationSetting;
		botId?: string;
		botVersion?: string;
		localeId?: string;
		intentId?: string;
		creationDateTime?: Date;
		multipleValuesSetting?: MultipleValuesSetting;
		subSlotSetting?: SubSlotSetting;
	}
	export interface CreateSlotResponseFormProperties {
		slotId: FormControl<string | null | undefined>,
		slotName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		slotTypeId: FormControl<string | null | undefined>,
		botId: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,
		localeId: FormControl<string | null | undefined>,
		intentId: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateCreateSlotResponseFormGroup() {
		return new FormGroup<CreateSlotResponseFormProperties>({
			slotId: new FormControl<string | null | undefined>(undefined),
			slotName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			slotTypeId: new FormControl<string | null | undefined>(undefined),
			botId: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
			localeId: new FormControl<string | null | undefined>(undefined),
			intentId: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Specifies the elicitation setting details eliciting a slot. */
	export interface SlotValueElicitationSetting {
		defaultValueSpecification?: SlotDefaultValueSpecification;

		/** Required */
		slotConstraint: SlotConstraint;
		promptSpecification?: PromptSpecification;
		sampleUtterances?: Array<SampleUtterance>;

		/** Specifies the prompts that Amazon Lex uses while a bot is waiting for customer input. */
		waitAndContinueSpecification?: WaitAndContinueSpecification;
		slotCaptureSetting?: SlotCaptureSetting;
	}

	/** Specifies the elicitation setting details eliciting a slot. */
	export interface SlotValueElicitationSettingFormProperties {

		/** Required */
		slotConstraint: FormControl<SlotConstraint | null | undefined>,
	}
	export function CreateSlotValueElicitationSettingFormGroup() {
		return new FormGroup<SlotValueElicitationSettingFormProperties>({
			slotConstraint: new FormControl<SlotConstraint | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines a list of values that Amazon Lex should use as the default value for a slot. */
	export interface SlotDefaultValueSpecification {

		/** Required */
		defaultValueList: Array<SlotDefaultValue>;
	}

	/** Defines a list of values that Amazon Lex should use as the default value for a slot. */
	export interface SlotDefaultValueSpecificationFormProperties {
	}
	export function CreateSlotDefaultValueSpecificationFormGroup() {
		return new FormGroup<SlotDefaultValueSpecificationFormProperties>({
		});

	}


	/** Specifies the default value to use when a user doesn't provide a value for a slot. */
	export interface SlotDefaultValue {

		/** Required */
		defaultValue: string;
	}

	/** Specifies the default value to use when a user doesn't provide a value for a slot. */
	export interface SlotDefaultValueFormProperties {

		/** Required */
		defaultValue: FormControl<string | null | undefined>,
	}
	export function CreateSlotDefaultValueFormGroup() {
		return new FormGroup<SlotDefaultValueFormProperties>({
			defaultValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SlotConstraint { Required = 'Required', Optional = 'Optional' }


	/** Specifies the prompts that Amazon Lex uses while a bot is waiting for customer input.  */
	export interface WaitAndContinueSpecification {

		/** Required */
		waitingResponse: ResponseSpecification;

		/** Required */
		continueResponse: ResponseSpecification;
		stillWaitingResponse?: StillWaitingResponseSpecification;
		active?: boolean | null;
	}

	/** Specifies the prompts that Amazon Lex uses while a bot is waiting for customer input.  */
	export interface WaitAndContinueSpecificationFormProperties {
		active: FormControl<boolean | null | undefined>,
	}
	export function CreateWaitAndContinueSpecificationFormGroup() {
		return new FormGroup<WaitAndContinueSpecificationFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Defines the messages that Amazon Lex sends to a user to remind them that the bot is waiting for a response. */
	export interface StillWaitingResponseSpecification {

		/** Required */
		messageGroups: Array<MessageGroup>;

		/** Required */
		frequencyInSeconds: number;

		/** Required */
		timeoutInSeconds: number;
		allowInterrupt?: boolean | null;
	}

	/** Defines the messages that Amazon Lex sends to a user to remind them that the bot is waiting for a response. */
	export interface StillWaitingResponseSpecificationFormProperties {

		/** Required */
		frequencyInSeconds: FormControl<number | null | undefined>,

		/** Required */
		timeoutInSeconds: FormControl<number | null | undefined>,
		allowInterrupt: FormControl<boolean | null | undefined>,
	}
	export function CreateStillWaitingResponseSpecificationFormGroup() {
		return new FormGroup<StillWaitingResponseSpecificationFormProperties>({
			frequencyInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			timeoutInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			allowInterrupt: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Settings used when Amazon Lex successfully captures a slot value from a user. */
	export interface SlotCaptureSetting {

		/** Specifies a list of message groups that Amazon Lex uses to respond the user input. */
		captureResponse?: ResponseSpecification;
		captureNextStep?: DialogState;
		captureConditional?: ConditionalSpecification;

		/** Specifies a list of message groups that Amazon Lex uses to respond the user input. */
		failureResponse?: ResponseSpecification;
		failureNextStep?: DialogState;
		failureConditional?: ConditionalSpecification;
		codeHook?: DialogCodeHookInvocationSetting;
		elicitationCodeHook?: ElicitationCodeHookInvocationSetting;
	}

	/** Settings used when Amazon Lex successfully captures a slot value from a user. */
	export interface SlotCaptureSettingFormProperties {
	}
	export function CreateSlotCaptureSettingFormGroup() {
		return new FormGroup<SlotCaptureSettingFormProperties>({
		});

	}


	/** Determines whether Amazon Lex obscures slot values in conversation logs.  */
	export interface ObfuscationSetting {

		/** Required */
		obfuscationSettingType: ObfuscationSettingType;
	}

	/** Determines whether Amazon Lex obscures slot values in conversation logs.  */
	export interface ObfuscationSettingFormProperties {

		/** Required */
		obfuscationSettingType: FormControl<ObfuscationSettingType | null | undefined>,
	}
	export function CreateObfuscationSettingFormGroup() {
		return new FormGroup<ObfuscationSettingFormProperties>({
			obfuscationSettingType: new FormControl<ObfuscationSettingType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ObfuscationSettingType { None = 'None', DefaultObfuscation = 'DefaultObfuscation' }


	/** Indicates whether a slot can return multiple values. */
	export interface MultipleValuesSetting {
		allowMultipleValues?: boolean | null;
	}

	/** Indicates whether a slot can return multiple values. */
	export interface MultipleValuesSettingFormProperties {
		allowMultipleValues: FormControl<boolean | null | undefined>,
	}
	export function CreateMultipleValuesSettingFormGroup() {
		return new FormGroup<MultipleValuesSettingFormProperties>({
			allowMultipleValues: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifications for the constituent sub slots and the expression for the composite slot. */
	export interface SubSlotSetting {
		expression?: string;
		slotSpecifications?: SubSlotSpecificationMap;
	}

	/** Specifications for the constituent sub slots and the expression for the composite slot. */
	export interface SubSlotSettingFormProperties {
		expression: FormControl<string | null | undefined>,
	}
	export function CreateSubSlotSettingFormGroup() {
		return new FormGroup<SubSlotSettingFormProperties>({
			expression: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SubSlotSpecificationMap {
	}
	export interface SubSlotSpecificationMapFormProperties {
	}
	export function CreateSubSlotSpecificationMapFormGroup() {
		return new FormGroup<SubSlotSpecificationMapFormProperties>({
		});

	}

	export interface CreateSlotTypeResponse {
		slotTypeId?: string;
		slotTypeName?: string;
		description?: string;
		slotTypeValues?: Array<SlotTypeValue>;
		valueSelectionSetting?: SlotValueSelectionSetting;
		parentSlotTypeSignature?: string;
		botId?: string;
		botVersion?: string;
		localeId?: string;
		creationDateTime?: Date;
		externalSourceSetting?: ExternalSourceSetting;
		compositeSlotTypeSetting?: CompositeSlotTypeSetting;
	}
	export interface CreateSlotTypeResponseFormProperties {
		slotTypeId: FormControl<string | null | undefined>,
		slotTypeName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		parentSlotTypeSignature: FormControl<string | null | undefined>,
		botId: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,
		localeId: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateCreateSlotTypeResponseFormGroup() {
		return new FormGroup<CreateSlotTypeResponseFormProperties>({
			slotTypeId: new FormControl<string | null | undefined>(undefined),
			slotTypeName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			parentSlotTypeSignature: new FormControl<string | null | undefined>(undefined),
			botId: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
			localeId: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Each slot type can have a set of values. Each <code>SlotTypeValue</code> represents a value that the slot type can take. */
	export interface SlotTypeValue {
		sampleValue?: SampleValue;
		synonyms?: Array<SampleValue>;
	}

	/** Each slot type can have a set of values. Each <code>SlotTypeValue</code> represents a value that the slot type can take. */
	export interface SlotTypeValueFormProperties {
	}
	export function CreateSlotTypeValueFormGroup() {
		return new FormGroup<SlotTypeValueFormProperties>({
		});

	}


	/** Defines one of the values for a slot type. */
	export interface SampleValue {

		/** Required */
		value: string;
	}

	/** Defines one of the values for a slot type. */
	export interface SampleValueFormProperties {

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateSampleValueFormGroup() {
		return new FormGroup<SampleValueFormProperties>({
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains settings used by Amazon Lex to select a slot value. */
	export interface SlotValueSelectionSetting {

		/** Required */
		resolutionStrategy: SlotValueResolutionStrategy;
		regexFilter?: SlotValueRegexFilter;
		advancedRecognitionSetting?: AdvancedRecognitionSetting;
	}

	/** Contains settings used by Amazon Lex to select a slot value. */
	export interface SlotValueSelectionSettingFormProperties {

		/** Required */
		resolutionStrategy: FormControl<SlotValueResolutionStrategy | null | undefined>,
	}
	export function CreateSlotValueSelectionSettingFormGroup() {
		return new FormGroup<SlotValueSelectionSettingFormProperties>({
			resolutionStrategy: new FormControl<SlotValueResolutionStrategy | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SlotValueResolutionStrategy { OriginalValue = 'OriginalValue', TopResolution = 'TopResolution', Concatenation = 'Concatenation' }


	/** Provides a regular expression used to validate the value of a slot. */
	export interface SlotValueRegexFilter {

		/** Required */
		pattern: string;
	}

	/** Provides a regular expression used to validate the value of a slot. */
	export interface SlotValueRegexFilterFormProperties {

		/** Required */
		pattern: FormControl<string | null | undefined>,
	}
	export function CreateSlotValueRegexFilterFormGroup() {
		return new FormGroup<SlotValueRegexFilterFormProperties>({
			pattern: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides settings that enable advanced recognition settings for slot values. */
	export interface AdvancedRecognitionSetting {
		audioRecognitionStrategy?: AudioRecognitionStrategy;
	}

	/** Provides settings that enable advanced recognition settings for slot values. */
	export interface AdvancedRecognitionSettingFormProperties {
		audioRecognitionStrategy: FormControl<AudioRecognitionStrategy | null | undefined>,
	}
	export function CreateAdvancedRecognitionSettingFormGroup() {
		return new FormGroup<AdvancedRecognitionSettingFormProperties>({
			audioRecognitionStrategy: new FormControl<AudioRecognitionStrategy | null | undefined>(undefined),
		});

	}

	export enum AudioRecognitionStrategy { UseSlotValuesAsCustomVocabulary = 'UseSlotValuesAsCustomVocabulary' }


	/** Provides information about the external source of the slot type's definition. */
	export interface ExternalSourceSetting {
		grammarSlotTypeSetting?: GrammarSlotTypeSetting;
	}

	/** Provides information about the external source of the slot type's definition. */
	export interface ExternalSourceSettingFormProperties {
	}
	export function CreateExternalSourceSettingFormGroup() {
		return new FormGroup<ExternalSourceSettingFormProperties>({
		});

	}


	/** Settings requried for a slot type based on a grammar that you provide. */
	export interface GrammarSlotTypeSetting {
		source?: GrammarSlotTypeSource;
	}

	/** Settings requried for a slot type based on a grammar that you provide. */
	export interface GrammarSlotTypeSettingFormProperties {
	}
	export function CreateGrammarSlotTypeSettingFormGroup() {
		return new FormGroup<GrammarSlotTypeSettingFormProperties>({
		});

	}


	/** Describes the Amazon S3 bucket name and location for the grammar that is the source for the slot type. */
	export interface GrammarSlotTypeSource {

		/** Required */
		s3BucketName: string;

		/** Required */
		s3ObjectKey: string;
		kmsKeyArn?: string;
	}

	/** Describes the Amazon S3 bucket name and location for the grammar that is the source for the slot type. */
	export interface GrammarSlotTypeSourceFormProperties {

		/** Required */
		s3BucketName: FormControl<string | null | undefined>,

		/** Required */
		s3ObjectKey: FormControl<string | null | undefined>,
		kmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateGrammarSlotTypeSourceFormGroup() {
		return new FormGroup<GrammarSlotTypeSourceFormProperties>({
			s3BucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			s3ObjectKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			kmsKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A composite slot is a combination of two or more slots that capture multiple pieces of information in a single user input. */
	export interface CompositeSlotTypeSetting {
		subSlots?: Array<SubSlotTypeComposition>;
	}

	/** A composite slot is a combination of two or more slots that capture multiple pieces of information in a single user input. */
	export interface CompositeSlotTypeSettingFormProperties {
	}
	export function CreateCompositeSlotTypeSettingFormGroup() {
		return new FormGroup<CompositeSlotTypeSettingFormProperties>({
		});

	}


	/** Subslot type composition. */
	export interface SubSlotTypeComposition {

		/** Required */
		name: string;

		/** Required */
		slotTypeId: string;
	}

	/** Subslot type composition. */
	export interface SubSlotTypeCompositionFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		slotTypeId: FormControl<string | null | undefined>,
	}
	export function CreateSubSlotTypeCompositionFormGroup() {
		return new FormGroup<SubSlotTypeCompositionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			slotTypeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateTestSetDiscrepancyReportResponse {
		testSetDiscrepancyReportId?: string;
		creationDateTime?: Date;
		testSetId?: string;
		target?: TestSetDiscrepancyReportResourceTarget;
	}
	export interface CreateTestSetDiscrepancyReportResponseFormProperties {
		testSetDiscrepancyReportId: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		testSetId: FormControl<string | null | undefined>,
	}
	export function CreateCreateTestSetDiscrepancyReportResponseFormGroup() {
		return new FormGroup<CreateTestSetDiscrepancyReportResponseFormProperties>({
			testSetDiscrepancyReportId: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			testSetId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the resource used for the test set discrepancy report. */
	export interface TestSetDiscrepancyReportResourceTarget {
		botAliasTarget?: TestSetDiscrepancyReportBotAliasTarget;
	}

	/** Contains information about the resource used for the test set discrepancy report. */
	export interface TestSetDiscrepancyReportResourceTargetFormProperties {
	}
	export function CreateTestSetDiscrepancyReportResourceTargetFormGroup() {
		return new FormGroup<TestSetDiscrepancyReportResourceTargetFormProperties>({
		});

	}


	/** Contains information about the bot alias used for the test set discrepancy report. */
	export interface TestSetDiscrepancyReportBotAliasTarget {

		/** Required */
		botId: string;

		/** Required */
		botAliasId: string;

		/** Required */
		localeId: string;
	}

	/** Contains information about the bot alias used for the test set discrepancy report. */
	export interface TestSetDiscrepancyReportBotAliasTargetFormProperties {

		/** Required */
		botId: FormControl<string | null | undefined>,

		/** Required */
		botAliasId: FormControl<string | null | undefined>,

		/** Required */
		localeId: FormControl<string | null | undefined>,
	}
	export function CreateTestSetDiscrepancyReportBotAliasTargetFormGroup() {
		return new FormGroup<TestSetDiscrepancyReportBotAliasTargetFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			botAliasId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			localeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUploadUrlResponse {
		importId?: string;
		uploadUrl?: string;
	}
	export interface CreateUploadUrlResponseFormProperties {
		importId: FormControl<string | null | undefined>,
		uploadUrl: FormControl<string | null | undefined>,
	}
	export function CreateCreateUploadUrlResponseFormGroup() {
		return new FormGroup<CreateUploadUrlResponseFormProperties>({
			importId: new FormControl<string | null | undefined>(undefined),
			uploadUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteBotResponse {
		botId?: string;
		botStatus?: BotStatus;
	}
	export interface DeleteBotResponseFormProperties {
		botId: FormControl<string | null | undefined>,
		botStatus: FormControl<BotStatus | null | undefined>,
	}
	export function CreateDeleteBotResponseFormGroup() {
		return new FormGroup<DeleteBotResponseFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined),
			botStatus: new FormControl<BotStatus | null | undefined>(undefined),
		});

	}

	export interface DeleteBotAliasResponse {
		botAliasId?: string;
		botId?: string;
		botAliasStatus?: BotAliasStatus;
	}
	export interface DeleteBotAliasResponseFormProperties {
		botAliasId: FormControl<string | null | undefined>,
		botId: FormControl<string | null | undefined>,
		botAliasStatus: FormControl<BotAliasStatus | null | undefined>,
	}
	export function CreateDeleteBotAliasResponseFormGroup() {
		return new FormGroup<DeleteBotAliasResponseFormProperties>({
			botAliasId: new FormControl<string | null | undefined>(undefined),
			botId: new FormControl<string | null | undefined>(undefined),
			botAliasStatus: new FormControl<BotAliasStatus | null | undefined>(undefined),
		});

	}

	export interface DeleteBotLocaleResponse {
		botId?: string;
		botVersion?: string;
		localeId?: string;
		botLocaleStatus?: BotLocaleStatus;
	}
	export interface DeleteBotLocaleResponseFormProperties {
		botId: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,
		localeId: FormControl<string | null | undefined>,
		botLocaleStatus: FormControl<BotLocaleStatus | null | undefined>,
	}
	export function CreateDeleteBotLocaleResponseFormGroup() {
		return new FormGroup<DeleteBotLocaleResponseFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
			localeId: new FormControl<string | null | undefined>(undefined),
			botLocaleStatus: new FormControl<BotLocaleStatus | null | undefined>(undefined),
		});

	}

	export interface DeleteBotVersionResponse {
		botId?: string;
		botVersion?: string;
		botStatus?: BotStatus;
	}
	export interface DeleteBotVersionResponseFormProperties {
		botId: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,
		botStatus: FormControl<BotStatus | null | undefined>,
	}
	export function CreateDeleteBotVersionResponseFormGroup() {
		return new FormGroup<DeleteBotVersionResponseFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
			botStatus: new FormControl<BotStatus | null | undefined>(undefined),
		});

	}

	export interface DeleteCustomVocabularyResponse {
		botId?: string;
		botVersion?: string;
		localeId?: string;
		customVocabularyStatus?: CustomVocabularyStatus;
	}
	export interface DeleteCustomVocabularyResponseFormProperties {
		botId: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,
		localeId: FormControl<string | null | undefined>,
		customVocabularyStatus: FormControl<CustomVocabularyStatus | null | undefined>,
	}
	export function CreateDeleteCustomVocabularyResponseFormGroup() {
		return new FormGroup<DeleteCustomVocabularyResponseFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
			localeId: new FormControl<string | null | undefined>(undefined),
			customVocabularyStatus: new FormControl<CustomVocabularyStatus | null | undefined>(undefined),
		});

	}

	export enum CustomVocabularyStatus { Ready = 'Ready', Deleting = 'Deleting', Exporting = 'Exporting', Importing = 'Importing', Creating = 'Creating' }

	export interface DeleteExportResponse {
		exportId?: string;
		exportStatus?: ExportStatus;
	}
	export interface DeleteExportResponseFormProperties {
		exportId: FormControl<string | null | undefined>,
		exportStatus: FormControl<ExportStatus | null | undefined>,
	}
	export function CreateDeleteExportResponseFormGroup() {
		return new FormGroup<DeleteExportResponseFormProperties>({
			exportId: new FormControl<string | null | undefined>(undefined),
			exportStatus: new FormControl<ExportStatus | null | undefined>(undefined),
		});

	}

	export interface DeleteImportResponse {
		importId?: string;
		importStatus?: ExportStatus;
	}
	export interface DeleteImportResponseFormProperties {
		importId: FormControl<string | null | undefined>,
		importStatus: FormControl<ExportStatus | null | undefined>,
	}
	export function CreateDeleteImportResponseFormGroup() {
		return new FormGroup<DeleteImportResponseFormProperties>({
			importId: new FormControl<string | null | undefined>(undefined),
			importStatus: new FormControl<ExportStatus | null | undefined>(undefined),
		});

	}

	export interface DeleteResourcePolicyResponse {
		resourceArn?: string;
		revisionId?: string;
	}
	export interface DeleteResourcePolicyResponseFormProperties {
		resourceArn: FormControl<string | null | undefined>,
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteResourcePolicyResponseFormGroup() {
		return new FormGroup<DeleteResourcePolicyResponseFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteResourcePolicyStatementResponse {
		resourceArn?: string;
		revisionId?: string;
	}
	export interface DeleteResourcePolicyStatementResponseFormProperties {
		resourceArn: FormControl<string | null | undefined>,
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteResourcePolicyStatementResponseFormGroup() {
		return new FormGroup<DeleteResourcePolicyStatementResponseFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteUtterancesResponse {
	}
	export interface DeleteUtterancesResponseFormProperties {
	}
	export function CreateDeleteUtterancesResponseFormGroup() {
		return new FormGroup<DeleteUtterancesResponseFormProperties>({
		});

	}

	export interface DescribeBotResponse {
		botId?: string;
		botName?: string;
		description?: string;
		roleArn?: string;
		dataPrivacy?: DataPrivacy;
		idleSessionTTLInSeconds?: number | null;
		botStatus?: BotStatus;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
		botType?: BotType;
		botMembers?: Array<BotMember>;
		failureReasons?: Array<string>;
	}
	export interface DescribeBotResponseFormProperties {
		botId: FormControl<string | null | undefined>,
		botName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
		idleSessionTTLInSeconds: FormControl<number | null | undefined>,
		botStatus: FormControl<BotStatus | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		botType: FormControl<BotType | null | undefined>,
	}
	export function CreateDescribeBotResponseFormGroup() {
		return new FormGroup<DescribeBotResponseFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined),
			botName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
			idleSessionTTLInSeconds: new FormControl<number | null | undefined>(undefined),
			botStatus: new FormControl<BotStatus | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			botType: new FormControl<BotType | null | undefined>(undefined),
		});

	}

	export interface DescribeBotAliasResponse {
		botAliasId?: string;
		botAliasName?: string;
		description?: string;
		botVersion?: string;
		botAliasLocaleSettings?: BotAliasLocaleSettingsMap;
		conversationLogSettings?: ConversationLogSettings;

		/** Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances. */
		sentimentAnalysisSettings?: SentimentAnalysisSettings;
		botAliasHistoryEvents?: Array<BotAliasHistoryEvent>;
		botAliasStatus?: BotAliasStatus;
		botId?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
		parentBotNetworks?: Array<ParentBotNetwork>;
	}
	export interface DescribeBotAliasResponseFormProperties {
		botAliasId: FormControl<string | null | undefined>,
		botAliasName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,
		botAliasStatus: FormControl<BotAliasStatus | null | undefined>,
		botId: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeBotAliasResponseFormGroup() {
		return new FormGroup<DescribeBotAliasResponseFormProperties>({
			botAliasId: new FormControl<string | null | undefined>(undefined),
			botAliasName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
			botAliasStatus: new FormControl<BotAliasStatus | null | undefined>(undefined),
			botId: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Provides a record of an event that affects a bot alias. For example, when the version of a bot that the alias points to changes. */
	export interface BotAliasHistoryEvent {
		botVersion?: string;
		startDate?: Date;
		endDate?: Date;
	}

	/** Provides a record of an event that affects a bot alias. For example, when the version of a bot that the alias points to changes. */
	export interface BotAliasHistoryEventFormProperties {
		botVersion: FormControl<string | null | undefined>,
		startDate: FormControl<Date | null | undefined>,
		endDate: FormControl<Date | null | undefined>,
	}
	export function CreateBotAliasHistoryEventFormGroup() {
		return new FormGroup<BotAliasHistoryEventFormProperties>({
			botVersion: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
			endDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** A network of bots. */
	export interface ParentBotNetwork {

		/** Required */
		botId: string;

		/** Required */
		botVersion: string;
	}

	/** A network of bots. */
	export interface ParentBotNetworkFormProperties {

		/** Required */
		botId: FormControl<string | null | undefined>,

		/** Required */
		botVersion: FormControl<string | null | undefined>,
	}
	export function CreateParentBotNetworkFormGroup() {
		return new FormGroup<ParentBotNetworkFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			botVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeBotLocaleResponse {
		botId?: string;
		botVersion?: string;
		localeId?: string;
		localeName?: string;
		description?: string;
		nluIntentConfidenceThreshold?: number | null;
		voiceSettings?: VoiceSettings;
		intentsCount?: number | null;
		slotTypesCount?: number | null;
		botLocaleStatus?: BotLocaleStatus;
		failureReasons?: Array<string>;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
		lastBuildSubmittedDateTime?: Date;
		botLocaleHistoryEvents?: Array<BotLocaleHistoryEvent>;
		recommendedActions?: Array<string>;
	}
	export interface DescribeBotLocaleResponseFormProperties {
		botId: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,
		localeId: FormControl<string | null | undefined>,
		localeName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		nluIntentConfidenceThreshold: FormControl<number | null | undefined>,
		intentsCount: FormControl<number | null | undefined>,
		slotTypesCount: FormControl<number | null | undefined>,
		botLocaleStatus: FormControl<BotLocaleStatus | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		lastBuildSubmittedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeBotLocaleResponseFormGroup() {
		return new FormGroup<DescribeBotLocaleResponseFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
			localeId: new FormControl<string | null | undefined>(undefined),
			localeName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			nluIntentConfidenceThreshold: new FormControl<number | null | undefined>(undefined),
			intentsCount: new FormControl<number | null | undefined>(undefined),
			slotTypesCount: new FormControl<number | null | undefined>(undefined),
			botLocaleStatus: new FormControl<BotLocaleStatus | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			lastBuildSubmittedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Provides information about an event that occurred affecting the bot locale. */
	export interface BotLocaleHistoryEvent {

		/** Required */
		event: string;

		/** Required */
		eventDate: Date;
	}

	/** Provides information about an event that occurred affecting the bot locale. */
	export interface BotLocaleHistoryEventFormProperties {

		/** Required */
		event: FormControl<string | null | undefined>,

		/** Required */
		eventDate: FormControl<Date | null | undefined>,
	}
	export function CreateBotLocaleHistoryEventFormGroup() {
		return new FormGroup<BotLocaleHistoryEventFormProperties>({
			event: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			eventDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeBotRecommendationResponse {
		botId?: string;
		botVersion?: string;
		localeId?: string;
		botRecommendationStatus?: BotRecommendationStatus;
		botRecommendationId?: string;
		failureReasons?: Array<string>;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
		transcriptSourceSetting?: TranscriptSourceSetting;
		encryptionSetting?: EncryptionSetting;
		botRecommendationResults?: BotRecommendationResults;
	}
	export interface DescribeBotRecommendationResponseFormProperties {
		botId: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,
		localeId: FormControl<string | null | undefined>,
		botRecommendationStatus: FormControl<BotRecommendationStatus | null | undefined>,
		botRecommendationId: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeBotRecommendationResponseFormGroup() {
		return new FormGroup<DescribeBotRecommendationResponseFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
			localeId: new FormControl<string | null | undefined>(undefined),
			botRecommendationStatus: new FormControl<BotRecommendationStatus | null | undefined>(undefined),
			botRecommendationId: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum BotRecommendationStatus { Processing = 'Processing', Deleting = 'Deleting', Deleted = 'Deleted', Downloading = 'Downloading', Updating = 'Updating', Available = 'Available', Failed = 'Failed', Stopping = 'Stopping', Stopped = 'Stopped' }


	/** Indicates the setting of the location where the transcript is stored. */
	export interface TranscriptSourceSetting {
		s3BucketTranscriptSource?: S3BucketTranscriptSource;
	}

	/** Indicates the setting of the location where the transcript is stored. */
	export interface TranscriptSourceSettingFormProperties {
	}
	export function CreateTranscriptSourceSettingFormGroup() {
		return new FormGroup<TranscriptSourceSettingFormProperties>({
		});

	}


	/** The object representing the Amazon S3 bucket containing the transcript, as well as the associated metadata. */
	export interface S3BucketTranscriptSource {

		/** Required */
		s3BucketName: string;
		pathFormat?: PathFormat;

		/** Required */
		transcriptFormat: TranscriptFormat;
		transcriptFilter?: TranscriptFilter;
		kmsKeyArn?: string;
	}

	/** The object representing the Amazon S3 bucket containing the transcript, as well as the associated metadata. */
	export interface S3BucketTranscriptSourceFormProperties {

		/** Required */
		s3BucketName: FormControl<string | null | undefined>,

		/** Required */
		transcriptFormat: FormControl<TranscriptFormat | null | undefined>,
		kmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateS3BucketTranscriptSourceFormGroup() {
		return new FormGroup<S3BucketTranscriptSourceFormProperties>({
			s3BucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			transcriptFormat: new FormControl<TranscriptFormat | null | undefined>(undefined, [Validators.required]),
			kmsKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The object that contains a path format that will be applied when Amazon Lex reads the transcript file in the bucket you provide. Specify this object if you only want Lex to read a subset of files in your Amazon S3 bucket. */
	export interface PathFormat {
		objectPrefixes?: Array<string>;
	}

	/** The object that contains a path format that will be applied when Amazon Lex reads the transcript file in the bucket you provide. Specify this object if you only want Lex to read a subset of files in your Amazon S3 bucket. */
	export interface PathFormatFormProperties {
	}
	export function CreatePathFormatFormGroup() {
		return new FormGroup<PathFormatFormProperties>({
		});

	}

	export enum TranscriptFormat { Lex = 'Lex' }


	/** The object representing the filter that Amazon Lex will use to select the appropriate transcript. */
	export interface TranscriptFilter {
		lexTranscriptFilter?: LexTranscriptFilter;
	}

	/** The object representing the filter that Amazon Lex will use to select the appropriate transcript. */
	export interface TranscriptFilterFormProperties {
	}
	export function CreateTranscriptFilterFormGroup() {
		return new FormGroup<TranscriptFilterFormProperties>({
		});

	}


	/** The object that contains transcript filter details that are associated with a bot recommendation. */
	export interface LexTranscriptFilter {
		dateRangeFilter?: DateRangeFilter;
	}

	/** The object that contains transcript filter details that are associated with a bot recommendation. */
	export interface LexTranscriptFilterFormProperties {
	}
	export function CreateLexTranscriptFilterFormGroup() {
		return new FormGroup<LexTranscriptFilterFormProperties>({
		});

	}


	/** The object used for specifying the data range that the customer wants Amazon Lex to read through in the input transcripts. */
	export interface DateRangeFilter {

		/** Required */
		startDateTime: Date;

		/** Required */
		endDateTime: Date;
	}

	/** The object used for specifying the data range that the customer wants Amazon Lex to read through in the input transcripts. */
	export interface DateRangeFilterFormProperties {

		/** Required */
		startDateTime: FormControl<Date | null | undefined>,

		/** Required */
		endDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateDateRangeFilterFormGroup() {
		return new FormGroup<DateRangeFilterFormProperties>({
			startDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			endDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The object representing the passwords that were used to encrypt the data related to the bot recommendation, as well as the KMS key ARN used to encrypt the associated metadata. */
	export interface EncryptionSetting {
		kmsKeyArn?: string;
		botLocaleExportPassword?: string;
		associatedTranscriptsPassword?: string;
	}

	/** The object representing the passwords that were used to encrypt the data related to the bot recommendation, as well as the KMS key ARN used to encrypt the associated metadata. */
	export interface EncryptionSettingFormProperties {
		kmsKeyArn: FormControl<string | null | undefined>,
		botLocaleExportPassword: FormControl<string | null | undefined>,
		associatedTranscriptsPassword: FormControl<string | null | undefined>,
	}
	export function CreateEncryptionSettingFormGroup() {
		return new FormGroup<EncryptionSettingFormProperties>({
			kmsKeyArn: new FormControl<string | null | undefined>(undefined),
			botLocaleExportPassword: new FormControl<string | null | undefined>(undefined),
			associatedTranscriptsPassword: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The object representing the URL of the bot definition, the URL of the associated transcript, and a statistical summary of the bot recommendation results. */
	export interface BotRecommendationResults {
		botLocaleExportUrl?: string;
		associatedTranscriptsUrl?: string;
		statistics?: BotRecommendationResultStatistics;
	}

	/** The object representing the URL of the bot definition, the URL of the associated transcript, and a statistical summary of the bot recommendation results. */
	export interface BotRecommendationResultsFormProperties {
		botLocaleExportUrl: FormControl<string | null | undefined>,
		associatedTranscriptsUrl: FormControl<string | null | undefined>,
	}
	export function CreateBotRecommendationResultsFormGroup() {
		return new FormGroup<BotRecommendationResultsFormProperties>({
			botLocaleExportUrl: new FormControl<string | null | undefined>(undefined),
			associatedTranscriptsUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A statistical summary of the bot recommendation results. */
	export interface BotRecommendationResultStatistics {
		intents?: IntentStatistics;
		slotTypes?: SlotTypeStatistics;
	}

	/** A statistical summary of the bot recommendation results. */
	export interface BotRecommendationResultStatisticsFormProperties {
	}
	export function CreateBotRecommendationResultStatisticsFormGroup() {
		return new FormGroup<BotRecommendationResultStatisticsFormProperties>({
		});

	}


	/** The object that contains the statistical summary of recommended intents associated with the bot recommendation. */
	export interface IntentStatistics {
		discoveredIntentCount?: number | null;
	}

	/** The object that contains the statistical summary of recommended intents associated with the bot recommendation. */
	export interface IntentStatisticsFormProperties {
		discoveredIntentCount: FormControl<number | null | undefined>,
	}
	export function CreateIntentStatisticsFormGroup() {
		return new FormGroup<IntentStatisticsFormProperties>({
			discoveredIntentCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The object that contains the statistical summary of the recommended slot type associated with the bot recommendation. */
	export interface SlotTypeStatistics {
		discoveredSlotTypeCount?: number | null;
	}

	/** The object that contains the statistical summary of the recommended slot type associated with the bot recommendation. */
	export interface SlotTypeStatisticsFormProperties {
		discoveredSlotTypeCount: FormControl<number | null | undefined>,
	}
	export function CreateSlotTypeStatisticsFormGroup() {
		return new FormGroup<SlotTypeStatisticsFormProperties>({
			discoveredSlotTypeCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeBotVersionResponse {
		botId?: string;
		botName?: string;
		botVersion?: string;
		description?: string;
		roleArn?: string;
		dataPrivacy?: DataPrivacy;
		idleSessionTTLInSeconds?: number | null;
		botStatus?: BotStatus;
		failureReasons?: Array<string>;
		creationDateTime?: Date;
		parentBotNetworks?: Array<ParentBotNetwork>;
		botType?: BotType;
		botMembers?: Array<BotMember>;
	}
	export interface DescribeBotVersionResponseFormProperties {
		botId: FormControl<string | null | undefined>,
		botName: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
		idleSessionTTLInSeconds: FormControl<number | null | undefined>,
		botStatus: FormControl<BotStatus | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		botType: FormControl<BotType | null | undefined>,
	}
	export function CreateDescribeBotVersionResponseFormGroup() {
		return new FormGroup<DescribeBotVersionResponseFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined),
			botName: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
			idleSessionTTLInSeconds: new FormControl<number | null | undefined>(undefined),
			botStatus: new FormControl<BotStatus | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			botType: new FormControl<BotType | null | undefined>(undefined),
		});

	}

	export interface DescribeCustomVocabularyMetadataResponse {
		botId?: string;
		botVersion?: string;
		localeId?: string;
		customVocabularyStatus?: CustomVocabularyStatus;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
	}
	export interface DescribeCustomVocabularyMetadataResponseFormProperties {
		botId: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,
		localeId: FormControl<string | null | undefined>,
		customVocabularyStatus: FormControl<CustomVocabularyStatus | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeCustomVocabularyMetadataResponseFormGroup() {
		return new FormGroup<DescribeCustomVocabularyMetadataResponseFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
			localeId: new FormControl<string | null | undefined>(undefined),
			customVocabularyStatus: new FormControl<CustomVocabularyStatus | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeExportResponse {
		exportId?: string;
		resourceSpecification?: ExportResourceSpecification;
		fileFormat?: ImportExportFileFormat;
		exportStatus?: ExportStatus;
		failureReasons?: Array<string>;
		downloadUrl?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
	}
	export interface DescribeExportResponseFormProperties {
		exportId: FormControl<string | null | undefined>,
		fileFormat: FormControl<ImportExportFileFormat | null | undefined>,
		exportStatus: FormControl<ExportStatus | null | undefined>,
		downloadUrl: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeExportResponseFormGroup() {
		return new FormGroup<DescribeExportResponseFormProperties>({
			exportId: new FormControl<string | null | undefined>(undefined),
			fileFormat: new FormControl<ImportExportFileFormat | null | undefined>(undefined),
			exportStatus: new FormControl<ExportStatus | null | undefined>(undefined),
			downloadUrl: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeImportResponse {
		importId?: string;
		resourceSpecification?: ImportResourceSpecification;
		importedResourceId?: string;
		importedResourceName?: string;
		mergeStrategy?: MergeStrategy;
		importStatus?: ExportStatus;
		failureReasons?: Array<string>;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
	}
	export interface DescribeImportResponseFormProperties {
		importId: FormControl<string | null | undefined>,
		importedResourceId: FormControl<string | null | undefined>,
		importedResourceName: FormControl<string | null | undefined>,
		mergeStrategy: FormControl<MergeStrategy | null | undefined>,
		importStatus: FormControl<ExportStatus | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeImportResponseFormGroup() {
		return new FormGroup<DescribeImportResponseFormProperties>({
			importId: new FormControl<string | null | undefined>(undefined),
			importedResourceId: new FormControl<string | null | undefined>(undefined),
			importedResourceName: new FormControl<string | null | undefined>(undefined),
			mergeStrategy: new FormControl<MergeStrategy | null | undefined>(undefined),
			importStatus: new FormControl<ExportStatus | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Provides information about the bot or bot locale that you want to import. You can specify the <code>botImportSpecification</code> or the <code>botLocaleImportSpecification</code>, but not both. */
	export interface ImportResourceSpecification {
		botImportSpecification?: BotImportSpecification;
		botLocaleImportSpecification?: BotLocaleImportSpecification;

		/** Provides the parameters required for importing a custom vocabulary. */
		customVocabularyImportSpecification?: CustomVocabularyImportSpecification;
		testSetImportResourceSpecification?: TestSetImportResourceSpecification;
	}

	/** Provides information about the bot or bot locale that you want to import. You can specify the <code>botImportSpecification</code> or the <code>botLocaleImportSpecification</code>, but not both. */
	export interface ImportResourceSpecificationFormProperties {
	}
	export function CreateImportResourceSpecificationFormGroup() {
		return new FormGroup<ImportResourceSpecificationFormProperties>({
		});

	}


	/** Provides the bot parameters required for importing a bot. */
	export interface BotImportSpecification {

		/** Required */
		botName: string;

		/** Required */
		roleArn: string;

		/**
		 * By default, data stored by Amazon Lex is encrypted. The <code>DataPrivacy</code> structure provides settings that determine how Amazon Lex handles special cases of securing the data for your bot.
		 * Required
		 */
		dataPrivacy: DataPrivacy;
		idleSessionTTLInSeconds?: number | null;
		botTags?: TagMap;
		testBotAliasTags?: TagMap;
	}

	/** Provides the bot parameters required for importing a bot. */
	export interface BotImportSpecificationFormProperties {

		/** Required */
		botName: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
		idleSessionTTLInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateBotImportSpecificationFormGroup() {
		return new FormGroup<BotImportSpecificationFormProperties>({
			botName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			idleSessionTTLInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides the bot locale parameters required for importing a bot locale. */
	export interface BotLocaleImportSpecification {

		/** Required */
		botId: string;

		/** Required */
		botVersion: string;

		/** Required */
		localeId: string;
		nluIntentConfidenceThreshold?: number | null;

		/** Defines settings for using an Amazon Polly voice to communicate with a user. */
		voiceSettings?: VoiceSettings;
	}

	/** Provides the bot locale parameters required for importing a bot locale. */
	export interface BotLocaleImportSpecificationFormProperties {

		/** Required */
		botId: FormControl<string | null | undefined>,

		/** Required */
		botVersion: FormControl<string | null | undefined>,

		/** Required */
		localeId: FormControl<string | null | undefined>,
		nluIntentConfidenceThreshold: FormControl<number | null | undefined>,
	}
	export function CreateBotLocaleImportSpecificationFormGroup() {
		return new FormGroup<BotLocaleImportSpecificationFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			botVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			localeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nluIntentConfidenceThreshold: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides the parameters required for importing a custom vocabulary. */
	export interface CustomVocabularyImportSpecification {

		/** Required */
		botId: string;

		/** Required */
		botVersion: string;

		/** Required */
		localeId: string;
	}

	/** Provides the parameters required for importing a custom vocabulary. */
	export interface CustomVocabularyImportSpecificationFormProperties {

		/** Required */
		botId: FormControl<string | null | undefined>,

		/** Required */
		botVersion: FormControl<string | null | undefined>,

		/** Required */
		localeId: FormControl<string | null | undefined>,
	}
	export function CreateCustomVocabularyImportSpecificationFormGroup() {
		return new FormGroup<CustomVocabularyImportSpecificationFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			botVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			localeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains information about the test set that is imported. */
	export interface TestSetImportResourceSpecification {

		/** Required */
		testSetName: string;
		description?: string;

		/** Required */
		roleArn: string;

		/** Required */
		storageLocation: TestSetStorageLocation;

		/** Required */
		importInputLocation: TestSetImportInputLocation;

		/** Required */
		modality: TestSetModality;
		testSetTags?: TagMap;
	}

	/** Contains information about the test set that is imported. */
	export interface TestSetImportResourceSpecificationFormProperties {

		/** Required */
		testSetName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,

		/** Required */
		modality: FormControl<TestSetModality | null | undefined>,
	}
	export function CreateTestSetImportResourceSpecificationFormGroup() {
		return new FormGroup<TestSetImportResourceSpecificationFormProperties>({
			testSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modality: new FormControl<TestSetModality | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains information about the location in which the test set is stored. */
	export interface TestSetStorageLocation {

		/** Required */
		s3BucketName: string;

		/** Required */
		s3Path: string;
		kmsKeyArn?: string;
	}

	/** Contains information about the location in which the test set is stored. */
	export interface TestSetStorageLocationFormProperties {

		/** Required */
		s3BucketName: FormControl<string | null | undefined>,

		/** Required */
		s3Path: FormControl<string | null | undefined>,
		kmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateTestSetStorageLocationFormGroup() {
		return new FormGroup<TestSetStorageLocationFormProperties>({
			s3BucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			s3Path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			kmsKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the Amazon S3 location from which the test set is imported. */
	export interface TestSetImportInputLocation {

		/** Required */
		s3BucketName: string;

		/** Required */
		s3Path: string;
	}

	/** Contains information about the Amazon S3 location from which the test set is imported. */
	export interface TestSetImportInputLocationFormProperties {

		/** Required */
		s3BucketName: FormControl<string | null | undefined>,

		/** Required */
		s3Path: FormControl<string | null | undefined>,
	}
	export function CreateTestSetImportInputLocationFormGroup() {
		return new FormGroup<TestSetImportInputLocationFormProperties>({
			s3BucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			s3Path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TestSetModality { Text = 'Text', Audio = 'Audio' }

	export enum MergeStrategy { Overwrite = 'Overwrite', FailOnConflict = 'FailOnConflict', Append = 'Append' }

	export interface DescribeIntentResponse {
		intentId?: string;
		intentName?: string;
		description?: string;
		parentIntentSignature?: string;
		sampleUtterances?: Array<SampleUtterance>;
		dialogCodeHook?: DialogCodeHookSettings;
		fulfillmentCodeHook?: FulfillmentCodeHookSettings;
		slotPriorities?: Array<SlotPriority>;
		intentConfirmationSetting?: IntentConfirmationSetting;
		intentClosingSetting?: IntentClosingSetting;
		inputContexts?: Array<InputContext>;
		outputContexts?: Array<OutputContext>;
		kendraConfiguration?: KendraConfiguration;
		botId?: string;
		botVersion?: string;
		localeId?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
		initialResponseSetting?: InitialResponseSetting;
	}
	export interface DescribeIntentResponseFormProperties {
		intentId: FormControl<string | null | undefined>,
		intentName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		parentIntentSignature: FormControl<string | null | undefined>,
		botId: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,
		localeId: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeIntentResponseFormGroup() {
		return new FormGroup<DescribeIntentResponseFormProperties>({
			intentId: new FormControl<string | null | undefined>(undefined),
			intentName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			parentIntentSignature: new FormControl<string | null | undefined>(undefined),
			botId: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
			localeId: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Sets the priority that Amazon Lex should use when eliciting slot values from a user. */
	export interface SlotPriority {

		/** Required */
		priority: number;

		/** Required */
		slotId: string;
	}

	/** Sets the priority that Amazon Lex should use when eliciting slot values from a user. */
	export interface SlotPriorityFormProperties {

		/** Required */
		priority: FormControl<number | null | undefined>,

		/** Required */
		slotId: FormControl<string | null | undefined>,
	}
	export function CreateSlotPriorityFormGroup() {
		return new FormGroup<SlotPriorityFormProperties>({
			priority: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			slotId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeResourcePolicyResponse {
		resourceArn?: string;
		policy?: string;
		revisionId?: string;
	}
	export interface DescribeResourcePolicyResponseFormProperties {
		resourceArn: FormControl<string | null | undefined>,
		policy: FormControl<string | null | undefined>,
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeResourcePolicyResponseFormGroup() {
		return new FormGroup<DescribeResourcePolicyResponseFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined),
			policy: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeSlotResponse {
		slotId?: string;
		slotName?: string;
		description?: string;
		slotTypeId?: string;
		valueElicitationSetting?: SlotValueElicitationSetting;
		obfuscationSetting?: ObfuscationSetting;
		botId?: string;
		botVersion?: string;
		localeId?: string;
		intentId?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
		multipleValuesSetting?: MultipleValuesSetting;
		subSlotSetting?: SubSlotSetting;
	}
	export interface DescribeSlotResponseFormProperties {
		slotId: FormControl<string | null | undefined>,
		slotName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		slotTypeId: FormControl<string | null | undefined>,
		botId: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,
		localeId: FormControl<string | null | undefined>,
		intentId: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeSlotResponseFormGroup() {
		return new FormGroup<DescribeSlotResponseFormProperties>({
			slotId: new FormControl<string | null | undefined>(undefined),
			slotName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			slotTypeId: new FormControl<string | null | undefined>(undefined),
			botId: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
			localeId: new FormControl<string | null | undefined>(undefined),
			intentId: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeSlotTypeResponse {
		slotTypeId?: string;
		slotTypeName?: string;
		description?: string;
		slotTypeValues?: Array<SlotTypeValue>;
		valueSelectionSetting?: SlotValueSelectionSetting;
		parentSlotTypeSignature?: string;
		botId?: string;
		botVersion?: string;
		localeId?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;

		/** Provides information about the external source of the slot type's definition. */
		externalSourceSetting?: ExternalSourceSetting;
		compositeSlotTypeSetting?: CompositeSlotTypeSetting;
	}
	export interface DescribeSlotTypeResponseFormProperties {
		slotTypeId: FormControl<string | null | undefined>,
		slotTypeName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		parentSlotTypeSignature: FormControl<string | null | undefined>,
		botId: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,
		localeId: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeSlotTypeResponseFormGroup() {
		return new FormGroup<DescribeSlotTypeResponseFormProperties>({
			slotTypeId: new FormControl<string | null | undefined>(undefined),
			slotTypeName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			parentSlotTypeSignature: new FormControl<string | null | undefined>(undefined),
			botId: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
			localeId: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeTestExecutionResponse {
		testExecutionId?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
		testExecutionStatus?: TestExecutionStatus;
		testSetId?: string;
		testSetName?: string;
		target?: TestExecutionTarget;
		apiMode?: TestExecutionApiMode;
		testExecutionModality?: TestSetModality;
		failureReasons?: Array<string>;
	}
	export interface DescribeTestExecutionResponseFormProperties {
		testExecutionId: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		testExecutionStatus: FormControl<TestExecutionStatus | null | undefined>,
		testSetId: FormControl<string | null | undefined>,
		testSetName: FormControl<string | null | undefined>,
		apiMode: FormControl<TestExecutionApiMode | null | undefined>,
		testExecutionModality: FormControl<TestSetModality | null | undefined>,
	}
	export function CreateDescribeTestExecutionResponseFormGroup() {
		return new FormGroup<DescribeTestExecutionResponseFormProperties>({
			testExecutionId: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			testExecutionStatus: new FormControl<TestExecutionStatus | null | undefined>(undefined),
			testSetId: new FormControl<string | null | undefined>(undefined),
			testSetName: new FormControl<string | null | undefined>(undefined),
			apiMode: new FormControl<TestExecutionApiMode | null | undefined>(undefined),
			testExecutionModality: new FormControl<TestSetModality | null | undefined>(undefined),
		});

	}

	export enum TestExecutionStatus { Pending = 'Pending', Waiting = 'Waiting', InProgress = 'InProgress', Completed = 'Completed', Failed = 'Failed', Stopping = 'Stopping', Stopped = 'Stopped' }


	/** Contains information about the bot used for the test execution. */
	export interface TestExecutionTarget {
		botAliasTarget?: BotAliasTestExecutionTarget;
	}

	/** Contains information about the bot used for the test execution. */
	export interface TestExecutionTargetFormProperties {
	}
	export function CreateTestExecutionTargetFormGroup() {
		return new FormGroup<TestExecutionTargetFormProperties>({
		});

	}


	/** The target Amazon S3 location for the test set execution using a bot alias. */
	export interface BotAliasTestExecutionTarget {

		/** Required */
		botId: string;

		/** Required */
		botAliasId: string;

		/** Required */
		localeId: string;
	}

	/** The target Amazon S3 location for the test set execution using a bot alias. */
	export interface BotAliasTestExecutionTargetFormProperties {

		/** Required */
		botId: FormControl<string | null | undefined>,

		/** Required */
		botAliasId: FormControl<string | null | undefined>,

		/** Required */
		localeId: FormControl<string | null | undefined>,
	}
	export function CreateBotAliasTestExecutionTargetFormGroup() {
		return new FormGroup<BotAliasTestExecutionTargetFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			botAliasId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			localeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TestExecutionApiMode { Streaming = 'Streaming', NonStreaming = 'NonStreaming' }

	export interface DescribeTestSetResponse {
		testSetId?: string;
		testSetName?: string;
		description?: string;
		modality?: TestSetModality;
		status?: TestSetStatus;
		roleArn?: string;
		numTurns?: number | null;
		storageLocation?: TestSetStorageLocation;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
	}
	export interface DescribeTestSetResponseFormProperties {
		testSetId: FormControl<string | null | undefined>,
		testSetName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		modality: FormControl<TestSetModality | null | undefined>,
		status: FormControl<TestSetStatus | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
		numTurns: FormControl<number | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeTestSetResponseFormGroup() {
		return new FormGroup<DescribeTestSetResponseFormProperties>({
			testSetId: new FormControl<string | null | undefined>(undefined),
			testSetName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			modality: new FormControl<TestSetModality | null | undefined>(undefined),
			status: new FormControl<TestSetStatus | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
			numTurns: new FormControl<number | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum TestSetStatus { Importing = 'Importing', PendingAnnotation = 'PendingAnnotation', Deleting = 'Deleting', ValidationError = 'ValidationError', Ready = 'Ready' }

	export interface DescribeTestSetDiscrepancyReportResponse {
		testSetDiscrepancyReportId?: string;
		testSetId?: string;
		creationDateTime?: Date;
		target?: TestSetDiscrepancyReportResourceTarget;
		testSetDiscrepancyReportStatus?: TestSetDiscrepancyReportStatus;
		lastUpdatedDataTime?: Date;
		testSetDiscrepancyTopErrors?: TestSetDiscrepancyErrors;
		testSetDiscrepancyRawOutputUrl?: string;
		failureReasons?: Array<string>;
	}
	export interface DescribeTestSetDiscrepancyReportResponseFormProperties {
		testSetDiscrepancyReportId: FormControl<string | null | undefined>,
		testSetId: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		testSetDiscrepancyReportStatus: FormControl<TestSetDiscrepancyReportStatus | null | undefined>,
		lastUpdatedDataTime: FormControl<Date | null | undefined>,
		testSetDiscrepancyRawOutputUrl: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTestSetDiscrepancyReportResponseFormGroup() {
		return new FormGroup<DescribeTestSetDiscrepancyReportResponseFormProperties>({
			testSetDiscrepancyReportId: new FormControl<string | null | undefined>(undefined),
			testSetId: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			testSetDiscrepancyReportStatus: new FormControl<TestSetDiscrepancyReportStatus | null | undefined>(undefined),
			lastUpdatedDataTime: new FormControl<Date | null | undefined>(undefined),
			testSetDiscrepancyRawOutputUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TestSetDiscrepancyReportStatus { InProgress = 'InProgress', Completed = 'Completed', Failed = 'Failed' }


	/** Contains details about the errors in the test set discrepancy report */
	export interface TestSetDiscrepancyErrors {

		/** Required */
		intentDiscrepancies: Array<TestSetIntentDiscrepancyItem>;

		/** Required */
		slotDiscrepancies: Array<TestSetSlotDiscrepancyItem>;
	}

	/** Contains details about the errors in the test set discrepancy report */
	export interface TestSetDiscrepancyErrorsFormProperties {
	}
	export function CreateTestSetDiscrepancyErrorsFormGroup() {
		return new FormGroup<TestSetDiscrepancyErrorsFormProperties>({
		});

	}


	/** Contains information about discrepancy in an intent information between the test set and the bot. */
	export interface TestSetIntentDiscrepancyItem {

		/** Required */
		intentName: string;

		/** Required */
		errorMessage: string;
	}

	/** Contains information about discrepancy in an intent information between the test set and the bot. */
	export interface TestSetIntentDiscrepancyItemFormProperties {

		/** Required */
		intentName: FormControl<string | null | undefined>,

		/** Required */
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateTestSetIntentDiscrepancyItemFormGroup() {
		return new FormGroup<TestSetIntentDiscrepancyItemFormProperties>({
			intentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			errorMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains information about discrepancy in a slot information between the test set and the bot. */
	export interface TestSetSlotDiscrepancyItem {

		/** Required */
		intentName: string;

		/** Required */
		slotName: string;

		/** Required */
		errorMessage: string;
	}

	/** Contains information about discrepancy in a slot information between the test set and the bot. */
	export interface TestSetSlotDiscrepancyItemFormProperties {

		/** Required */
		intentName: FormControl<string | null | undefined>,

		/** Required */
		slotName: FormControl<string | null | undefined>,

		/** Required */
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateTestSetSlotDiscrepancyItemFormGroup() {
		return new FormGroup<TestSetSlotDiscrepancyItemFormProperties>({
			intentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			slotName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			errorMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeTestSetGenerationResponse {
		testSetGenerationId?: string;
		testSetGenerationStatus?: TestSetGenerationStatus;
		failureReasons?: Array<string>;
		testSetId?: string;
		testSetName?: string;
		description?: string;
		storageLocation?: TestSetStorageLocation;
		generationDataSource?: TestSetGenerationDataSource;
		roleArn?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
	}
	export interface DescribeTestSetGenerationResponseFormProperties {
		testSetGenerationId: FormControl<string | null | undefined>,
		testSetGenerationStatus: FormControl<TestSetGenerationStatus | null | undefined>,
		testSetId: FormControl<string | null | undefined>,
		testSetName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeTestSetGenerationResponseFormGroup() {
		return new FormGroup<DescribeTestSetGenerationResponseFormProperties>({
			testSetGenerationId: new FormControl<string | null | undefined>(undefined),
			testSetGenerationStatus: new FormControl<TestSetGenerationStatus | null | undefined>(undefined),
			testSetId: new FormControl<string | null | undefined>(undefined),
			testSetName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum TestSetGenerationStatus { Generating = 'Generating', Ready = 'Ready', Failed = 'Failed', Pending = 'Pending' }


	/** Contains information about the data source from which the test set is generated. */
	export interface TestSetGenerationDataSource {
		conversationLogsDataSource?: ConversationLogsDataSource;
	}

	/** Contains information about the data source from which the test set is generated. */
	export interface TestSetGenerationDataSourceFormProperties {
	}
	export function CreateTestSetGenerationDataSourceFormGroup() {
		return new FormGroup<TestSetGenerationDataSourceFormProperties>({
		});

	}


	/** The data source that uses conversation logs. */
	export interface ConversationLogsDataSource {

		/** Required */
		botId: string;

		/** Required */
		botAliasId: string;

		/** Required */
		localeId: string;

		/** Required */
		filter: ConversationLogsDataSourceFilterBy;
	}

	/** The data source that uses conversation logs. */
	export interface ConversationLogsDataSourceFormProperties {

		/** Required */
		botId: FormControl<string | null | undefined>,

		/** Required */
		botAliasId: FormControl<string | null | undefined>,

		/** Required */
		localeId: FormControl<string | null | undefined>,
	}
	export function CreateConversationLogsDataSourceFormGroup() {
		return new FormGroup<ConversationLogsDataSourceFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			botAliasId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			localeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The selected data source to filter the conversation log. */
	export interface ConversationLogsDataSourceFilterBy {

		/** Required */
		startTime: Date;

		/** Required */
		endTime: Date;

		/** Required */
		inputMode: ConversationLogsInputModeFilter;
	}

	/** The selected data source to filter the conversation log. */
	export interface ConversationLogsDataSourceFilterByFormProperties {

		/** Required */
		startTime: FormControl<Date | null | undefined>,

		/** Required */
		endTime: FormControl<Date | null | undefined>,

		/** Required */
		inputMode: FormControl<ConversationLogsInputModeFilter | null | undefined>,
	}
	export function CreateConversationLogsDataSourceFilterByFormGroup() {
		return new FormGroup<ConversationLogsDataSourceFilterByFormProperties>({
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			endTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			inputMode: new FormControl<ConversationLogsInputModeFilter | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ConversationLogsInputModeFilter { Speech = 'Speech', Text = 'Text' }

	export interface GetTestExecutionArtifactsUrlResponse {
		testExecutionId?: string;
		downloadArtifactsUrl?: string;
	}
	export interface GetTestExecutionArtifactsUrlResponseFormProperties {
		testExecutionId: FormControl<string | null | undefined>,
		downloadArtifactsUrl: FormControl<string | null | undefined>,
	}
	export function CreateGetTestExecutionArtifactsUrlResponseFormGroup() {
		return new FormGroup<GetTestExecutionArtifactsUrlResponseFormProperties>({
			testExecutionId: new FormControl<string | null | undefined>(undefined),
			downloadArtifactsUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAggregatedUtterancesResponse {
		botId?: string;
		botAliasId?: string;
		botVersion?: string;
		localeId?: string;
		aggregationDuration?: UtteranceAggregationDuration;
		aggregationWindowStartTime?: Date;
		aggregationWindowEndTime?: Date;
		aggregationLastRefreshedDateTime?: Date;
		aggregatedUtterancesSummaries?: Array<AggregatedUtterancesSummary>;
		nextToken?: string;
	}
	export interface ListAggregatedUtterancesResponseFormProperties {
		botId: FormControl<string | null | undefined>,
		botAliasId: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,
		localeId: FormControl<string | null | undefined>,
		aggregationWindowStartTime: FormControl<Date | null | undefined>,
		aggregationWindowEndTime: FormControl<Date | null | undefined>,
		aggregationLastRefreshedDateTime: FormControl<Date | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAggregatedUtterancesResponseFormGroup() {
		return new FormGroup<ListAggregatedUtterancesResponseFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined),
			botAliasId: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
			localeId: new FormControl<string | null | undefined>(undefined),
			aggregationWindowStartTime: new FormControl<Date | null | undefined>(undefined),
			aggregationWindowEndTime: new FormControl<Date | null | undefined>(undefined),
			aggregationLastRefreshedDateTime: new FormControl<Date | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides parameters for setting the time window and duration for aggregating utterance data. */
	export interface UtteranceAggregationDuration {

		/** Required */
		relativeAggregationDuration: RelativeAggregationDuration;
	}

	/** Provides parameters for setting the time window and duration for aggregating utterance data. */
	export interface UtteranceAggregationDurationFormProperties {
	}
	export function CreateUtteranceAggregationDurationFormGroup() {
		return new FormGroup<UtteranceAggregationDurationFormProperties>({
		});

	}


	/** <p>Specifies the time window that utterance statistics are returned for. The time window is always relative to the last time that the that utterances were aggregated. For example, if the <code>ListAggregatedUtterances</code> operation is called at 1600, the time window is set to 1 hour, and the last refresh time was 1530, only utterances made between 1430 and 1530 are returned.</p> <p>You can choose the time window that statistics should be returned for.</p> <ul> <li> <p> <b>Hours</b> - You can request utterance statistics for 1, 3, 6, 12, or 24 hour time windows. Statistics are refreshed every half hour for 1 hour time windows, and hourly for the other time windows.</p> </li> <li> <p> <b>Days</b> - You can request utterance statistics for 3 days. Statistics are refreshed every 6 hours.</p> </li> <li> <p> <b>Weeks</b> - You can see statistics for one or two weeks. Statistics are refreshed every 12 hours for one week time windows, and once per day for two week time windows.</p> </li> </ul> */
	export interface RelativeAggregationDuration {

		/** Required */
		timeDimension: TimeDimension;

		/** Required */
		timeValue: number;
	}

	/** <p>Specifies the time window that utterance statistics are returned for. The time window is always relative to the last time that the that utterances were aggregated. For example, if the <code>ListAggregatedUtterances</code> operation is called at 1600, the time window is set to 1 hour, and the last refresh time was 1530, only utterances made between 1430 and 1530 are returned.</p> <p>You can choose the time window that statistics should be returned for.</p> <ul> <li> <p> <b>Hours</b> - You can request utterance statistics for 1, 3, 6, 12, or 24 hour time windows. Statistics are refreshed every half hour for 1 hour time windows, and hourly for the other time windows.</p> </li> <li> <p> <b>Days</b> - You can request utterance statistics for 3 days. Statistics are refreshed every 6 hours.</p> </li> <li> <p> <b>Weeks</b> - You can see statistics for one or two weeks. Statistics are refreshed every 12 hours for one week time windows, and once per day for two week time windows.</p> </li> </ul> */
	export interface RelativeAggregationDurationFormProperties {

		/** Required */
		timeDimension: FormControl<TimeDimension | null | undefined>,

		/** Required */
		timeValue: FormControl<number | null | undefined>,
	}
	export function CreateRelativeAggregationDurationFormGroup() {
		return new FormGroup<RelativeAggregationDurationFormProperties>({
			timeDimension: new FormControl<TimeDimension | null | undefined>(undefined, [Validators.required]),
			timeValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TimeDimension { Hours = 'Hours', Days = 'Days', Weeks = 'Weeks' }


	/** Provides summary information for aggregated utterances. The <code>ListAggregatedUtterances</code> operations combines all instances of the same utterance into a single aggregated summary. */
	export interface AggregatedUtterancesSummary {
		utterance?: string;
		hitCount?: number | null;
		missedCount?: number | null;
		utteranceFirstRecordedInAggregationDuration?: Date;
		utteranceLastRecordedInAggregationDuration?: Date;
		containsDataFromDeletedResources?: boolean | null;
	}

	/** Provides summary information for aggregated utterances. The <code>ListAggregatedUtterances</code> operations combines all instances of the same utterance into a single aggregated summary. */
	export interface AggregatedUtterancesSummaryFormProperties {
		utterance: FormControl<string | null | undefined>,
		hitCount: FormControl<number | null | undefined>,
		missedCount: FormControl<number | null | undefined>,
		utteranceFirstRecordedInAggregationDuration: FormControl<Date | null | undefined>,
		utteranceLastRecordedInAggregationDuration: FormControl<Date | null | undefined>,
		containsDataFromDeletedResources: FormControl<boolean | null | undefined>,
	}
	export function CreateAggregatedUtterancesSummaryFormGroup() {
		return new FormGroup<AggregatedUtterancesSummaryFormProperties>({
			utterance: new FormControl<string | null | undefined>(undefined),
			hitCount: new FormControl<number | null | undefined>(undefined),
			missedCount: new FormControl<number | null | undefined>(undefined),
			utteranceFirstRecordedInAggregationDuration: new FormControl<Date | null | undefined>(undefined),
			utteranceLastRecordedInAggregationDuration: new FormControl<Date | null | undefined>(undefined),
			containsDataFromDeletedResources: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum AggregatedUtterancesSortAttribute { HitCount = 'HitCount', MissedCount = 'MissedCount' }

	export enum SortOrder { Ascending = 'Ascending', Descending = 'Descending' }


	/** Filters responses returned by the <code>ListAggregatedUtterances</code> operation. */
	export interface AggregatedUtterancesFilter {

		/** Required */
		name: AggregatedUtterancesFilterName;

		/** Required */
		values: Array<string>;

		/** Required */
		operator: AggregatedUtterancesFilterOperator;
	}

	/** Filters responses returned by the <code>ListAggregatedUtterances</code> operation. */
	export interface AggregatedUtterancesFilterFormProperties {

		/** Required */
		name: FormControl<AggregatedUtterancesFilterName | null | undefined>,

		/** Required */
		operator: FormControl<AggregatedUtterancesFilterOperator | null | undefined>,
	}
	export function CreateAggregatedUtterancesFilterFormGroup() {
		return new FormGroup<AggregatedUtterancesFilterFormProperties>({
			name: new FormControl<AggregatedUtterancesFilterName | null | undefined>(undefined, [Validators.required]),
			operator: new FormControl<AggregatedUtterancesFilterOperator | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AggregatedUtterancesFilterName { Utterance = 'Utterance' }

	export enum AggregatedUtterancesFilterOperator { CO = 'CO', EQ = 'EQ' }

	export interface ListBotAliasesResponse {
		botAliasSummaries?: Array<BotAliasSummary>;
		nextToken?: string;
		botId?: string;
	}
	export interface ListBotAliasesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
		botId: FormControl<string | null | undefined>,
	}
	export function CreateListBotAliasesResponseFormGroup() {
		return new FormGroup<ListBotAliasesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			botId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information about bot aliases returned from the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBotAliases.html">ListBotAliases</a> operation. */
	export interface BotAliasSummary {
		botAliasId?: string;
		botAliasName?: string;
		description?: string;
		botVersion?: string;
		botAliasStatus?: BotAliasStatus;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
	}

	/** Summary information about bot aliases returned from the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBotAliases.html">ListBotAliases</a> operation. */
	export interface BotAliasSummaryFormProperties {
		botAliasId: FormControl<string | null | undefined>,
		botAliasName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,
		botAliasStatus: FormControl<BotAliasStatus | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateBotAliasSummaryFormGroup() {
		return new FormGroup<BotAliasSummaryFormProperties>({
			botAliasId: new FormControl<string | null | undefined>(undefined),
			botAliasName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
			botAliasStatus: new FormControl<BotAliasStatus | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListBotLocalesResponse {
		botId?: string;
		botVersion?: string;
		nextToken?: string;
		botLocaleSummaries?: Array<BotLocaleSummary>;
	}
	export interface ListBotLocalesResponseFormProperties {
		botId: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBotLocalesResponseFormGroup() {
		return new FormGroup<ListBotLocalesResponseFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information about bot locales returned by the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBotLocales.html">ListBotLocales</a> operation. */
	export interface BotLocaleSummary {
		localeId?: string;
		localeName?: string;
		description?: string;
		botLocaleStatus?: BotLocaleStatus;
		lastUpdatedDateTime?: Date;
		lastBuildSubmittedDateTime?: Date;
	}

	/** Summary information about bot locales returned by the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBotLocales.html">ListBotLocales</a> operation. */
	export interface BotLocaleSummaryFormProperties {
		localeId: FormControl<string | null | undefined>,
		localeName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		botLocaleStatus: FormControl<BotLocaleStatus | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		lastBuildSubmittedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateBotLocaleSummaryFormGroup() {
		return new FormGroup<BotLocaleSummaryFormProperties>({
			localeId: new FormControl<string | null | undefined>(undefined),
			localeName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			botLocaleStatus: new FormControl<BotLocaleStatus | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			lastBuildSubmittedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum BotLocaleSortAttribute { BotLocaleName = 'BotLocaleName' }


	/** Filters responses returned by the <code>ListBotLocales</code> operation. */
	export interface BotLocaleFilter {

		/** Required */
		name: BotLocaleSortAttribute;

		/** Required */
		values: Array<string>;

		/** Required */
		operator: AggregatedUtterancesFilterOperator;
	}

	/** Filters responses returned by the <code>ListBotLocales</code> operation. */
	export interface BotLocaleFilterFormProperties {

		/** Required */
		name: FormControl<BotLocaleSortAttribute | null | undefined>,

		/** Required */
		operator: FormControl<AggregatedUtterancesFilterOperator | null | undefined>,
	}
	export function CreateBotLocaleFilterFormGroup() {
		return new FormGroup<BotLocaleFilterFormProperties>({
			name: new FormControl<BotLocaleSortAttribute | null | undefined>(undefined, [Validators.required]),
			operator: new FormControl<AggregatedUtterancesFilterOperator | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListBotRecommendationsResponse {
		botId?: string;
		botVersion?: string;
		localeId?: string;
		botRecommendationSummaries?: Array<BotRecommendationSummary>;
		nextToken?: string;
	}
	export interface ListBotRecommendationsResponseFormProperties {
		botId: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,
		localeId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBotRecommendationsResponseFormGroup() {
		return new FormGroup<ListBotRecommendationsResponseFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
			localeId: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A summary of the bot recommendation. */
	export interface BotRecommendationSummary {

		/** Required */
		botRecommendationStatus: BotRecommendationStatus;

		/** Required */
		botRecommendationId: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
	}

	/** A summary of the bot recommendation. */
	export interface BotRecommendationSummaryFormProperties {

		/** Required */
		botRecommendationStatus: FormControl<BotRecommendationStatus | null | undefined>,

		/** Required */
		botRecommendationId: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateBotRecommendationSummaryFormGroup() {
		return new FormGroup<BotRecommendationSummaryFormProperties>({
			botRecommendationStatus: new FormControl<BotRecommendationStatus | null | undefined>(undefined, [Validators.required]),
			botRecommendationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListBotVersionsResponse {
		botId?: string;
		botVersionSummaries?: Array<BotVersionSummary>;
		nextToken?: string;
	}
	export interface ListBotVersionsResponseFormProperties {
		botId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBotVersionsResponseFormGroup() {
		return new FormGroup<ListBotVersionsResponseFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information about a bot version returned by the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBotVersions.html">ListBotVersions</a> operation. */
	export interface BotVersionSummary {
		botName?: string;
		botVersion?: string;
		description?: string;
		botStatus?: BotStatus;
		creationDateTime?: Date;
	}

	/** Summary information about a bot version returned by the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBotVersions.html">ListBotVersions</a> operation. */
	export interface BotVersionSummaryFormProperties {
		botName: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		botStatus: FormControl<BotStatus | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateBotVersionSummaryFormGroup() {
		return new FormGroup<BotVersionSummaryFormProperties>({
			botName: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			botStatus: new FormControl<BotStatus | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum BotVersionSortAttribute { BotVersion = 'BotVersion' }

	export interface ListBotsResponse {
		botSummaries?: Array<BotSummary>;
		nextToken?: string;
	}
	export interface ListBotsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBotsResponseFormGroup() {
		return new FormGroup<ListBotsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information about a bot returned by the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBots.html">ListBots</a> operation. */
	export interface BotSummary {
		botId?: string;
		botName?: string;
		description?: string;
		botStatus?: BotStatus;
		latestBotVersion?: string;
		lastUpdatedDateTime?: Date;
		botType?: BotType;
	}

	/** Summary information about a bot returned by the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBots.html">ListBots</a> operation. */
	export interface BotSummaryFormProperties {
		botId: FormControl<string | null | undefined>,
		botName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		botStatus: FormControl<BotStatus | null | undefined>,
		latestBotVersion: FormControl<string | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		botType: FormControl<BotType | null | undefined>,
	}
	export function CreateBotSummaryFormGroup() {
		return new FormGroup<BotSummaryFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined),
			botName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			botStatus: new FormControl<BotStatus | null | undefined>(undefined),
			latestBotVersion: new FormControl<string | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			botType: new FormControl<BotType | null | undefined>(undefined),
		});

	}

	export enum BotSortAttribute { BotName = 'BotName' }


	/** Filters the responses returned by the <code>ListBots</code> operation. */
	export interface BotFilter {

		/** Required */
		name: BotFilterName;

		/** Required */
		values: Array<string>;

		/** Required */
		operator: BotFilterOperator;
	}

	/** Filters the responses returned by the <code>ListBots</code> operation. */
	export interface BotFilterFormProperties {

		/** Required */
		name: FormControl<BotFilterName | null | undefined>,

		/** Required */
		operator: FormControl<BotFilterOperator | null | undefined>,
	}
	export function CreateBotFilterFormGroup() {
		return new FormGroup<BotFilterFormProperties>({
			name: new FormControl<BotFilterName | null | undefined>(undefined, [Validators.required]),
			operator: new FormControl<BotFilterOperator | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum BotFilterName { BotName = 'BotName', BotType = 'BotType' }

	export enum BotFilterOperator { CO = 'CO', EQ = 'EQ', NE = 'NE' }

	export interface ListBuiltInIntentsResponse {
		builtInIntentSummaries?: Array<BuiltInIntentSummary>;
		nextToken?: string;
		localeId?: string;
	}
	export interface ListBuiltInIntentsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
		localeId: FormControl<string | null | undefined>,
	}
	export function CreateListBuiltInIntentsResponseFormGroup() {
		return new FormGroup<ListBuiltInIntentsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			localeId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides summary information about a built-in intent for the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBuiltInIntents.html"> ListBuiltInIntents </a> operation. */
	export interface BuiltInIntentSummary {
		intentSignature?: string;
		description?: string;
	}

	/** Provides summary information about a built-in intent for the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBuiltInIntents.html"> ListBuiltInIntents </a> operation. */
	export interface BuiltInIntentSummaryFormProperties {
		intentSignature: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateBuiltInIntentSummaryFormGroup() {
		return new FormGroup<BuiltInIntentSummaryFormProperties>({
			intentSignature: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BuiltInIntentSortAttribute { IntentSignature = 'IntentSignature' }

	export interface ListBuiltInSlotTypesResponse {
		builtInSlotTypeSummaries?: Array<BuiltInSlotTypeSummary>;
		nextToken?: string;
		localeId?: string;
	}
	export interface ListBuiltInSlotTypesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
		localeId: FormControl<string | null | undefined>,
	}
	export function CreateListBuiltInSlotTypesResponseFormGroup() {
		return new FormGroup<ListBuiltInSlotTypesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			localeId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides summary information about a built-in slot type for the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBuiltInSlotTypes.html"> ListBuiltInSlotTypes </a> operation. */
	export interface BuiltInSlotTypeSummary {
		slotTypeSignature?: string;
		description?: string;
	}

	/** Provides summary information about a built-in slot type for the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBuiltInSlotTypes.html"> ListBuiltInSlotTypes </a> operation. */
	export interface BuiltInSlotTypeSummaryFormProperties {
		slotTypeSignature: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateBuiltInSlotTypeSummaryFormGroup() {
		return new FormGroup<BuiltInSlotTypeSummaryFormProperties>({
			slotTypeSignature: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BuiltInSlotTypeSortAttribute { SlotTypeSignature = 'SlotTypeSignature' }

	export interface ListCustomVocabularyItemsResponse {
		botId?: string;
		botVersion?: string;
		localeId?: string;
		customVocabularyItems?: Array<CustomVocabularyItem>;
		nextToken?: string;
	}
	export interface ListCustomVocabularyItemsResponseFormProperties {
		botId: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,
		localeId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCustomVocabularyItemsResponseFormGroup() {
		return new FormGroup<ListCustomVocabularyItemsResponseFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
			localeId: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListExportsResponse {
		botId?: string;
		botVersion?: string;
		exportSummaries?: Array<ExportSummary>;
		nextToken?: string;
		localeId?: string;
	}
	export interface ListExportsResponseFormProperties {
		botId: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		localeId: FormControl<string | null | undefined>,
	}
	export function CreateListExportsResponseFormGroup() {
		return new FormGroup<ListExportsResponseFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			localeId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides summary information about an export in an export list.  */
	export interface ExportSummary {
		exportId?: string;
		resourceSpecification?: ExportResourceSpecification;
		fileFormat?: ImportExportFileFormat;
		exportStatus?: ExportStatus;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
	}

	/** Provides summary information about an export in an export list.  */
	export interface ExportSummaryFormProperties {
		exportId: FormControl<string | null | undefined>,
		fileFormat: FormControl<ImportExportFileFormat | null | undefined>,
		exportStatus: FormControl<ExportStatus | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateExportSummaryFormGroup() {
		return new FormGroup<ExportSummaryFormProperties>({
			exportId: new FormControl<string | null | undefined>(undefined),
			fileFormat: new FormControl<ImportExportFileFormat | null | undefined>(undefined),
			exportStatus: new FormControl<ExportStatus | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ExportSortAttribute { LastUpdatedDateTime = 'LastUpdatedDateTime' }


	/** Filters the response form the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListExports.html">ListExports</a> operation */
	export interface ExportFilter {

		/** Required */
		name: ExportFilterName;

		/** Required */
		values: Array<string>;

		/** Required */
		operator: AggregatedUtterancesFilterOperator;
	}

	/** Filters the response form the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListExports.html">ListExports</a> operation */
	export interface ExportFilterFormProperties {

		/** Required */
		name: FormControl<ExportFilterName | null | undefined>,

		/** Required */
		operator: FormControl<AggregatedUtterancesFilterOperator | null | undefined>,
	}
	export function CreateExportFilterFormGroup() {
		return new FormGroup<ExportFilterFormProperties>({
			name: new FormControl<ExportFilterName | null | undefined>(undefined, [Validators.required]),
			operator: new FormControl<AggregatedUtterancesFilterOperator | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ExportFilterName { ExportResourceType = 'ExportResourceType' }

	export interface ListImportsResponse {
		botId?: string;
		botVersion?: string;
		importSummaries?: Array<ImportSummary>;
		nextToken?: string;
		localeId?: string;
	}
	export interface ListImportsResponseFormProperties {
		botId: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		localeId: FormControl<string | null | undefined>,
	}
	export function CreateListImportsResponseFormGroup() {
		return new FormGroup<ListImportsResponseFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			localeId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides summary information about an import in an import list. */
	export interface ImportSummary {
		importId?: string;
		importedResourceId?: string;
		importedResourceName?: string;
		importStatus?: ExportStatus;
		mergeStrategy?: MergeStrategy;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
		importedResourceType?: ImportResourceType;
	}

	/** Provides summary information about an import in an import list. */
	export interface ImportSummaryFormProperties {
		importId: FormControl<string | null | undefined>,
		importedResourceId: FormControl<string | null | undefined>,
		importedResourceName: FormControl<string | null | undefined>,
		importStatus: FormControl<ExportStatus | null | undefined>,
		mergeStrategy: FormControl<MergeStrategy | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		importedResourceType: FormControl<ImportResourceType | null | undefined>,
	}
	export function CreateImportSummaryFormGroup() {
		return new FormGroup<ImportSummaryFormProperties>({
			importId: new FormControl<string | null | undefined>(undefined),
			importedResourceId: new FormControl<string | null | undefined>(undefined),
			importedResourceName: new FormControl<string | null | undefined>(undefined),
			importStatus: new FormControl<ExportStatus | null | undefined>(undefined),
			mergeStrategy: new FormControl<MergeStrategy | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			importedResourceType: new FormControl<ImportResourceType | null | undefined>(undefined),
		});

	}

	export enum ImportResourceType { Bot = 'Bot', BotLocale = 'BotLocale', CustomVocabulary = 'CustomVocabulary', TestSet = 'TestSet' }

	export enum ImportSortAttribute { LastUpdatedDateTime = 'LastUpdatedDateTime' }


	/** Filters the response from the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListImports.html">ListImports</a> operation. */
	export interface ImportFilter {

		/** Required */
		name: ImportFilterName;

		/** Required */
		values: Array<string>;

		/** Required */
		operator: AggregatedUtterancesFilterOperator;
	}

	/** Filters the response from the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListImports.html">ListImports</a> operation. */
	export interface ImportFilterFormProperties {

		/** Required */
		name: FormControl<ImportFilterName | null | undefined>,

		/** Required */
		operator: FormControl<AggregatedUtterancesFilterOperator | null | undefined>,
	}
	export function CreateImportFilterFormGroup() {
		return new FormGroup<ImportFilterFormProperties>({
			name: new FormControl<ImportFilterName | null | undefined>(undefined, [Validators.required]),
			operator: new FormControl<AggregatedUtterancesFilterOperator | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ImportFilterName { ImportResourceType = 'ImportResourceType' }

	export interface ListIntentMetricsResponse {
		botId?: string;
		results?: Array<AnalyticsIntentResult>;
		nextToken?: string;
	}
	export interface ListIntentMetricsResponseFormProperties {
		botId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIntentMetricsResponseFormGroup() {
		return new FormGroup<ListIntentMetricsResponseFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object containing the results for the intent metrics you requested and the bin and/or group(s) they refer to, if applicable. */
	export interface AnalyticsIntentResult {
		binKeys?: Array<AnalyticsBinKey>;
		groupByKeys?: Array<AnalyticsIntentGroupByKey>;
		metricsResults?: Array<AnalyticsIntentMetricResult>;
	}

	/** An object containing the results for the intent metrics you requested and the bin and/or group(s) they refer to, if applicable. */
	export interface AnalyticsIntentResultFormProperties {
	}
	export function CreateAnalyticsIntentResultFormGroup() {
		return new FormGroup<AnalyticsIntentResultFormProperties>({
		});

	}


	/** An object containing the criterion by which to bin the results and the value that defines that bin. */
	export interface AnalyticsBinKey {
		name?: AnalyticsBinByName;
		value?: number | null;
	}

	/** An object containing the criterion by which to bin the results and the value that defines that bin. */
	export interface AnalyticsBinKeyFormProperties {
		name: FormControl<AnalyticsBinByName | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateAnalyticsBinKeyFormGroup() {
		return new FormGroup<AnalyticsBinKeyFormProperties>({
			name: new FormControl<AnalyticsBinByName | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AnalyticsBinByName { ConversationStartTime = 'ConversationStartTime', UtteranceTimestamp = 'UtteranceTimestamp' }


	/** Contains the category by which the intent analytics were grouped and a member of that category. */
	export interface AnalyticsIntentGroupByKey {
		name?: AnalyticsIntentField;
		value?: string;
	}

	/** Contains the category by which the intent analytics were grouped and a member of that category. */
	export interface AnalyticsIntentGroupByKeyFormProperties {
		name: FormControl<AnalyticsIntentField | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateAnalyticsIntentGroupByKeyFormGroup() {
		return new FormGroup<AnalyticsIntentGroupByKeyFormProperties>({
			name: new FormControl<AnalyticsIntentField | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AnalyticsIntentField { IntentName = 'IntentName', IntentEndState = 'IntentEndState', IntentLevel = 'IntentLevel' }


	/** An object containing the results for the intent metric you requested. */
	export interface AnalyticsIntentMetricResult {
		name?: AnalyticsIntentMetricName;
		statistic?: AnalyticsMetricStatistic;
		value?: number | null;
	}

	/** An object containing the results for the intent metric you requested. */
	export interface AnalyticsIntentMetricResultFormProperties {
		name: FormControl<AnalyticsIntentMetricName | null | undefined>,
		statistic: FormControl<AnalyticsMetricStatistic | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateAnalyticsIntentMetricResultFormGroup() {
		return new FormGroup<AnalyticsIntentMetricResultFormProperties>({
			name: new FormControl<AnalyticsIntentMetricName | null | undefined>(undefined),
			statistic: new FormControl<AnalyticsMetricStatistic | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AnalyticsIntentMetricName { Count = 'Count', Success = 'Success', Failure = 'Failure', Switched = 'Switched', Dropped = 'Dropped' }

	export enum AnalyticsMetricStatistic { Sum = 'Sum', Avg = 'Avg', Max = 'Max' }


	/** Contains the metric and the summary statistic you want to calculate, and the order in which to sort the results, for the intents in the bot. */
	export interface AnalyticsIntentMetric {

		/** Required */
		name: AnalyticsIntentMetricName;

		/** Required */
		statistic: AnalyticsMetricStatistic;
		order?: SortOrder;
	}

	/** Contains the metric and the summary statistic you want to calculate, and the order in which to sort the results, for the intents in the bot. */
	export interface AnalyticsIntentMetricFormProperties {

		/** Required */
		name: FormControl<AnalyticsIntentMetricName | null | undefined>,

		/** Required */
		statistic: FormControl<AnalyticsMetricStatistic | null | undefined>,
		order: FormControl<SortOrder | null | undefined>,
	}
	export function CreateAnalyticsIntentMetricFormGroup() {
		return new FormGroup<AnalyticsIntentMetricFormProperties>({
			name: new FormControl<AnalyticsIntentMetricName | null | undefined>(undefined, [Validators.required]),
			statistic: new FormControl<AnalyticsMetricStatistic | null | undefined>(undefined, [Validators.required]),
			order: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}


	/** Contains the time metric, interval, and method by which to bin the analytics data. */
	export interface AnalyticsBinBySpecification {

		/** Required */
		name: AnalyticsBinByName;

		/** Required */
		interval: AnalyticsInterval;
		order?: SortOrder;
	}

	/** Contains the time metric, interval, and method by which to bin the analytics data. */
	export interface AnalyticsBinBySpecificationFormProperties {

		/** Required */
		name: FormControl<AnalyticsBinByName | null | undefined>,

		/** Required */
		interval: FormControl<AnalyticsInterval | null | undefined>,
		order: FormControl<SortOrder | null | undefined>,
	}
	export function CreateAnalyticsBinBySpecificationFormGroup() {
		return new FormGroup<AnalyticsBinBySpecificationFormProperties>({
			name: new FormControl<AnalyticsBinByName | null | undefined>(undefined, [Validators.required]),
			interval: new FormControl<AnalyticsInterval | null | undefined>(undefined, [Validators.required]),
			order: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}

	export enum AnalyticsInterval { OneHour = 'OneHour', OneDay = 'OneDay' }


	/** Contains the category by which to group the intents. */
	export interface AnalyticsIntentGroupBySpecification {

		/** Required */
		name: AnalyticsIntentField;
	}

	/** Contains the category by which to group the intents. */
	export interface AnalyticsIntentGroupBySpecificationFormProperties {

		/** Required */
		name: FormControl<AnalyticsIntentField | null | undefined>,
	}
	export function CreateAnalyticsIntentGroupBySpecificationFormGroup() {
		return new FormGroup<AnalyticsIntentGroupBySpecificationFormProperties>({
			name: new FormControl<AnalyticsIntentField | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Contains fields describing a condition by which to filter the intents. The expression may be understood as <code>name</code> <code>operator</code> <code>values</code>. For example:</p> <ul> <li> <p> <code>IntentName CO Book</code> – The intent name contains the string "Book."</p> </li> <li> <p> <code>BotVersion EQ 2</code> – The bot version is equal to two.</p> </li> </ul> <p>The operators that each filter supports are listed below:</p> <ul> <li> <p> <code>BotAlias</code> – <code>EQ</code>.</p> </li> <li> <p> <code>BotVersion</code> – <code>EQ</code>.</p> </li> <li> <p> <code>LocaleId</code> – <code>EQ</code>.</p> </li> <li> <p> <code>Modality</code> – <code>EQ</code>.</p> </li> <li> <p> <code>Channel</code> – <code>EQ</code>.</p> </li> <li> <p> <code>SessionId</code> – <code>EQ</code>.</p> </li> <li> <p> <code>OriginatingRequestId</code> – <code>EQ</code>.</p> </li> <li> <p> <code>IntentName</code> – <code>EQ</code>, <code>CO</code>.</p> </li> <li> <p> <code>IntentEndState</code> – <code>EQ</code>, <code>CO</code>.</p> </li> </ul> */
	export interface AnalyticsIntentFilter {

		/** Required */
		name: AnalyticsIntentFilterName;

		/** Required */
		operator: AnalyticsFilterOperator;

		/** Required */
		values: Array<string>;
	}

	/** <p>Contains fields describing a condition by which to filter the intents. The expression may be understood as <code>name</code> <code>operator</code> <code>values</code>. For example:</p> <ul> <li> <p> <code>IntentName CO Book</code> – The intent name contains the string "Book."</p> </li> <li> <p> <code>BotVersion EQ 2</code> – The bot version is equal to two.</p> </li> </ul> <p>The operators that each filter supports are listed below:</p> <ul> <li> <p> <code>BotAlias</code> – <code>EQ</code>.</p> </li> <li> <p> <code>BotVersion</code> – <code>EQ</code>.</p> </li> <li> <p> <code>LocaleId</code> – <code>EQ</code>.</p> </li> <li> <p> <code>Modality</code> – <code>EQ</code>.</p> </li> <li> <p> <code>Channel</code> – <code>EQ</code>.</p> </li> <li> <p> <code>SessionId</code> – <code>EQ</code>.</p> </li> <li> <p> <code>OriginatingRequestId</code> – <code>EQ</code>.</p> </li> <li> <p> <code>IntentName</code> – <code>EQ</code>, <code>CO</code>.</p> </li> <li> <p> <code>IntentEndState</code> – <code>EQ</code>, <code>CO</code>.</p> </li> </ul> */
	export interface AnalyticsIntentFilterFormProperties {

		/** Required */
		name: FormControl<AnalyticsIntentFilterName | null | undefined>,

		/** Required */
		operator: FormControl<AnalyticsFilterOperator | null | undefined>,
	}
	export function CreateAnalyticsIntentFilterFormGroup() {
		return new FormGroup<AnalyticsIntentFilterFormProperties>({
			name: new FormControl<AnalyticsIntentFilterName | null | undefined>(undefined, [Validators.required]),
			operator: new FormControl<AnalyticsFilterOperator | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AnalyticsIntentFilterName { BotAliasId = 'BotAliasId', BotVersion = 'BotVersion', LocaleId = 'LocaleId', Modality = 'Modality', Channel = 'Channel', SessionId = 'SessionId', OriginatingRequestId = 'OriginatingRequestId', IntentName = 'IntentName', IntentEndState = 'IntentEndState' }

	export enum AnalyticsFilterOperator { EQ = 'EQ', GT = 'GT', LT = 'LT' }

	export interface ListIntentPathsResponse {
		nodeSummaries?: Array<AnalyticsIntentNodeSummary>;
	}
	export interface ListIntentPathsResponseFormProperties {
	}
	export function CreateListIntentPathsResponseFormGroup() {
		return new FormGroup<ListIntentPathsResponseFormProperties>({
		});

	}


	/** An object containing information about the requested path. */
	export interface AnalyticsIntentNodeSummary {
		intentName?: string;
		intentPath?: string;
		intentCount?: number | null;
		intentLevel?: number | null;
		nodeType?: AnalyticsNodeType;
	}

	/** An object containing information about the requested path. */
	export interface AnalyticsIntentNodeSummaryFormProperties {
		intentName: FormControl<string | null | undefined>,
		intentPath: FormControl<string | null | undefined>,
		intentCount: FormControl<number | null | undefined>,
		intentLevel: FormControl<number | null | undefined>,
		nodeType: FormControl<AnalyticsNodeType | null | undefined>,
	}
	export function CreateAnalyticsIntentNodeSummaryFormGroup() {
		return new FormGroup<AnalyticsIntentNodeSummaryFormProperties>({
			intentName: new FormControl<string | null | undefined>(undefined),
			intentPath: new FormControl<string | null | undefined>(undefined),
			intentCount: new FormControl<number | null | undefined>(undefined),
			intentLevel: new FormControl<number | null | undefined>(undefined),
			nodeType: new FormControl<AnalyticsNodeType | null | undefined>(undefined),
		});

	}

	export enum AnalyticsNodeType { Inner = 'Inner', Exit = 'Exit' }


	/** <p>Contains fields describing a condition by which to filter the paths. The expression may be understood as <code>name</code> <code>operator</code> <code>values</code>. For example:</p> <ul> <li> <p> <code>LocaleId EQ en</code> – The locale is "en".</p> </li> <li> <p> <code>BotVersion EQ 2</code> – The bot version is equal to two.</p> </li> </ul> <p>The operators that each filter supports are listed below:</p> <ul> <li> <p> <code>BotAlias</code> – <code>EQ</code>.</p> </li> <li> <p> <code>BotVersion</code> – <code>EQ</code>.</p> </li> <li> <p> <code>LocaleId</code> – <code>EQ</code>.</p> </li> <li> <p> <code>Modality</code> – <code>EQ</code>.</p> </li> <li> <p> <code>Channel</code> – <code>EQ</code>.</p> </li> </ul> */
	export interface AnalyticsPathFilter {

		/** Required */
		name: AnalyticsCommonFilterName;

		/** Required */
		operator: AnalyticsFilterOperator;

		/** Required */
		values: Array<string>;
	}

	/** <p>Contains fields describing a condition by which to filter the paths. The expression may be understood as <code>name</code> <code>operator</code> <code>values</code>. For example:</p> <ul> <li> <p> <code>LocaleId EQ en</code> – The locale is "en".</p> </li> <li> <p> <code>BotVersion EQ 2</code> – The bot version is equal to two.</p> </li> </ul> <p>The operators that each filter supports are listed below:</p> <ul> <li> <p> <code>BotAlias</code> – <code>EQ</code>.</p> </li> <li> <p> <code>BotVersion</code> – <code>EQ</code>.</p> </li> <li> <p> <code>LocaleId</code> – <code>EQ</code>.</p> </li> <li> <p> <code>Modality</code> – <code>EQ</code>.</p> </li> <li> <p> <code>Channel</code> – <code>EQ</code>.</p> </li> </ul> */
	export interface AnalyticsPathFilterFormProperties {

		/** Required */
		name: FormControl<AnalyticsCommonFilterName | null | undefined>,

		/** Required */
		operator: FormControl<AnalyticsFilterOperator | null | undefined>,
	}
	export function CreateAnalyticsPathFilterFormGroup() {
		return new FormGroup<AnalyticsPathFilterFormProperties>({
			name: new FormControl<AnalyticsCommonFilterName | null | undefined>(undefined, [Validators.required]),
			operator: new FormControl<AnalyticsFilterOperator | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AnalyticsCommonFilterName { BotAliasId = 'BotAliasId', BotVersion = 'BotVersion', LocaleId = 'LocaleId', Modality = 'Modality', Channel = 'Channel' }

	export interface ListIntentStageMetricsResponse {
		botId?: string;
		results?: Array<AnalyticsIntentStageResult>;
		nextToken?: string;
	}
	export interface ListIntentStageMetricsResponseFormProperties {
		botId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIntentStageMetricsResponseFormGroup() {
		return new FormGroup<ListIntentStageMetricsResponseFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object containing the results for the intent stage metrics you requested and the bin and/or group they refer to, if applicable. */
	export interface AnalyticsIntentStageResult {
		binKeys?: Array<AnalyticsBinKey>;
		groupByKeys?: Array<AnalyticsIntentStageGroupByKey>;
		metricsResults?: Array<AnalyticsIntentStageMetricResult>;
	}

	/** An object containing the results for the intent stage metrics you requested and the bin and/or group they refer to, if applicable. */
	export interface AnalyticsIntentStageResultFormProperties {
	}
	export function CreateAnalyticsIntentStageResultFormGroup() {
		return new FormGroup<AnalyticsIntentStageResultFormProperties>({
		});

	}


	/** Contains the category by which the intent stage analytics and the values for that category were grouped. */
	export interface AnalyticsIntentStageGroupByKey {
		name?: AnalyticsIntentStageField;
		value?: string;
	}

	/** Contains the category by which the intent stage analytics and the values for that category were grouped. */
	export interface AnalyticsIntentStageGroupByKeyFormProperties {
		name: FormControl<AnalyticsIntentStageField | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateAnalyticsIntentStageGroupByKeyFormGroup() {
		return new FormGroup<AnalyticsIntentStageGroupByKeyFormProperties>({
			name: new FormControl<AnalyticsIntentStageField | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AnalyticsIntentStageField { IntentStageName = 'IntentStageName', SwitchedToIntent = 'SwitchedToIntent' }


	/** An object containing the results for an intent stage metric you requested. */
	export interface AnalyticsIntentStageMetricResult {
		name?: AnalyticsIntentStageMetricName;
		statistic?: AnalyticsMetricStatistic;
		value?: number | null;
	}

	/** An object containing the results for an intent stage metric you requested. */
	export interface AnalyticsIntentStageMetricResultFormProperties {
		name: FormControl<AnalyticsIntentStageMetricName | null | undefined>,
		statistic: FormControl<AnalyticsMetricStatistic | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateAnalyticsIntentStageMetricResultFormGroup() {
		return new FormGroup<AnalyticsIntentStageMetricResultFormProperties>({
			name: new FormControl<AnalyticsIntentStageMetricName | null | undefined>(undefined),
			statistic: new FormControl<AnalyticsMetricStatistic | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AnalyticsIntentStageMetricName { Count = 'Count', Success = 'Success', Failed = 'Failed', Dropped = 'Dropped', Retry = 'Retry' }


	/** Contains the metric and the summary statistic you want to calculate, and the order in which to sort the results, for the intent stages across the user sessions with the bot. */
	export interface AnalyticsIntentStageMetric {

		/** Required */
		name: AnalyticsIntentStageMetricName;

		/** Required */
		statistic: AnalyticsMetricStatistic;
		order?: SortOrder;
	}

	/** Contains the metric and the summary statistic you want to calculate, and the order in which to sort the results, for the intent stages across the user sessions with the bot. */
	export interface AnalyticsIntentStageMetricFormProperties {

		/** Required */
		name: FormControl<AnalyticsIntentStageMetricName | null | undefined>,

		/** Required */
		statistic: FormControl<AnalyticsMetricStatistic | null | undefined>,
		order: FormControl<SortOrder | null | undefined>,
	}
	export function CreateAnalyticsIntentStageMetricFormGroup() {
		return new FormGroup<AnalyticsIntentStageMetricFormProperties>({
			name: new FormControl<AnalyticsIntentStageMetricName | null | undefined>(undefined, [Validators.required]),
			statistic: new FormControl<AnalyticsMetricStatistic | null | undefined>(undefined, [Validators.required]),
			order: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}


	/** Contains the category by which to group the intent stages. */
	export interface AnalyticsIntentStageGroupBySpecification {

		/** Required */
		name: AnalyticsIntentStageField;
	}

	/** Contains the category by which to group the intent stages. */
	export interface AnalyticsIntentStageGroupBySpecificationFormProperties {

		/** Required */
		name: FormControl<AnalyticsIntentStageField | null | undefined>,
	}
	export function CreateAnalyticsIntentStageGroupBySpecificationFormGroup() {
		return new FormGroup<AnalyticsIntentStageGroupBySpecificationFormProperties>({
			name: new FormControl<AnalyticsIntentStageField | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Contains fields describing a condition by which to filter the intent stages. The expression may be understood as <code>name</code> <code>operator</code> <code>values</code>. For example:</p> <ul> <li> <p> <code>IntentName CO Book</code> – The intent name contains the string "Book."</p> </li> <li> <p> <code>BotVersion EQ 2</code> – The bot version is equal to two.</p> </li> </ul> <p>The operators that each filter supports are listed below:</p> <ul> <li> <p> <code>BotAlias</code> – <code>EQ</code>.</p> </li> <li> <p> <code>BotVersion</code> – <code>EQ</code>.</p> </li> <li> <p> <code>LocaleId</code> – <code>EQ</code>.</p> </li> <li> <p> <code>Modality</code> – <code>EQ</code>.</p> </li> <li> <p> <code>Channel</code> – <code>EQ</code>.</p> </li> <li> <p> <code>SessionId</code> – <code>EQ</code>.</p> </li> <li> <p> <code>OriginatingRequestId</code> – <code>EQ</code>.</p> </li> <li> <p> <code>IntentName</code> – <code>EQ</code>, <code>CO</code>.</p> </li> <li> <p> <code>IntentStageName</code> – <code>EQ</code>, <code>CO</code>.</p> </li> </ul> */
	export interface AnalyticsIntentStageFilter {

		/** Required */
		name: AnalyticsIntentStageFilterName;

		/** Required */
		operator: AnalyticsFilterOperator;

		/** Required */
		values: Array<string>;
	}

	/** <p>Contains fields describing a condition by which to filter the intent stages. The expression may be understood as <code>name</code> <code>operator</code> <code>values</code>. For example:</p> <ul> <li> <p> <code>IntentName CO Book</code> – The intent name contains the string "Book."</p> </li> <li> <p> <code>BotVersion EQ 2</code> – The bot version is equal to two.</p> </li> </ul> <p>The operators that each filter supports are listed below:</p> <ul> <li> <p> <code>BotAlias</code> – <code>EQ</code>.</p> </li> <li> <p> <code>BotVersion</code> – <code>EQ</code>.</p> </li> <li> <p> <code>LocaleId</code> – <code>EQ</code>.</p> </li> <li> <p> <code>Modality</code> – <code>EQ</code>.</p> </li> <li> <p> <code>Channel</code> – <code>EQ</code>.</p> </li> <li> <p> <code>SessionId</code> – <code>EQ</code>.</p> </li> <li> <p> <code>OriginatingRequestId</code> – <code>EQ</code>.</p> </li> <li> <p> <code>IntentName</code> – <code>EQ</code>, <code>CO</code>.</p> </li> <li> <p> <code>IntentStageName</code> – <code>EQ</code>, <code>CO</code>.</p> </li> </ul> */
	export interface AnalyticsIntentStageFilterFormProperties {

		/** Required */
		name: FormControl<AnalyticsIntentStageFilterName | null | undefined>,

		/** Required */
		operator: FormControl<AnalyticsFilterOperator | null | undefined>,
	}
	export function CreateAnalyticsIntentStageFilterFormGroup() {
		return new FormGroup<AnalyticsIntentStageFilterFormProperties>({
			name: new FormControl<AnalyticsIntentStageFilterName | null | undefined>(undefined, [Validators.required]),
			operator: new FormControl<AnalyticsFilterOperator | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AnalyticsIntentStageFilterName { BotAliasId = 'BotAliasId', BotVersion = 'BotVersion', LocaleId = 'LocaleId', Modality = 'Modality', Channel = 'Channel', SessionId = 'SessionId', OriginatingRequestId = 'OriginatingRequestId', IntentName = 'IntentName', IntentStageName = 'IntentStageName' }

	export interface ListIntentsResponse {
		botId?: string;
		botVersion?: string;
		localeId?: string;
		intentSummaries?: Array<IntentSummary>;
		nextToken?: string;
	}
	export interface ListIntentsResponseFormProperties {
		botId: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,
		localeId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIntentsResponseFormGroup() {
		return new FormGroup<ListIntentsResponseFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
			localeId: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information about an intent returned by the <code>ListIntents</code> operation. */
	export interface IntentSummary {
		intentId?: string;
		intentName?: string;
		description?: string;
		parentIntentSignature?: string;
		inputContexts?: Array<InputContext>;
		outputContexts?: Array<OutputContext>;
		lastUpdatedDateTime?: Date;
	}

	/** Summary information about an intent returned by the <code>ListIntents</code> operation. */
	export interface IntentSummaryFormProperties {
		intentId: FormControl<string | null | undefined>,
		intentName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		parentIntentSignature: FormControl<string | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateIntentSummaryFormGroup() {
		return new FormGroup<IntentSummaryFormProperties>({
			intentId: new FormControl<string | null | undefined>(undefined),
			intentName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			parentIntentSignature: new FormControl<string | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum IntentSortAttribute { IntentName = 'IntentName', LastUpdatedDateTime = 'LastUpdatedDateTime' }


	/** Filters the response from the <code>ListIntents</code> operation. */
	export interface IntentFilter {

		/** Required */
		name: IntentFilterName;

		/** Required */
		values: Array<string>;

		/** Required */
		operator: AggregatedUtterancesFilterOperator;
	}

	/** Filters the response from the <code>ListIntents</code> operation. */
	export interface IntentFilterFormProperties {

		/** Required */
		name: FormControl<IntentFilterName | null | undefined>,

		/** Required */
		operator: FormControl<AggregatedUtterancesFilterOperator | null | undefined>,
	}
	export function CreateIntentFilterFormGroup() {
		return new FormGroup<IntentFilterFormProperties>({
			name: new FormControl<IntentFilterName | null | undefined>(undefined, [Validators.required]),
			operator: new FormControl<AggregatedUtterancesFilterOperator | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum IntentFilterName { IntentName = 'IntentName' }

	export interface ListRecommendedIntentsResponse {
		botId?: string;
		botVersion?: string;
		localeId?: string;
		botRecommendationId?: string;
		summaryList?: Array<RecommendedIntentSummary>;
		nextToken?: string;
	}
	export interface ListRecommendedIntentsResponseFormProperties {
		botId: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,
		localeId: FormControl<string | null | undefined>,
		botRecommendationId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRecommendedIntentsResponseFormGroup() {
		return new FormGroup<ListRecommendedIntentsResponseFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
			localeId: new FormControl<string | null | undefined>(undefined),
			botRecommendationId: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that contains a summary of a recommended intent. */
	export interface RecommendedIntentSummary {
		intentId?: string;
		intentName?: string;
		sampleUtterancesCount?: number | null;
	}

	/** An object that contains a summary of a recommended intent. */
	export interface RecommendedIntentSummaryFormProperties {
		intentId: FormControl<string | null | undefined>,
		intentName: FormControl<string | null | undefined>,
		sampleUtterancesCount: FormControl<number | null | undefined>,
	}
	export function CreateRecommendedIntentSummaryFormGroup() {
		return new FormGroup<RecommendedIntentSummaryFormProperties>({
			intentId: new FormControl<string | null | undefined>(undefined),
			intentName: new FormControl<string | null | undefined>(undefined),
			sampleUtterancesCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListSessionAnalyticsDataResponse {
		botId?: string;
		nextToken?: string;
		sessions?: Array<SessionSpecification>;
	}
	export interface ListSessionAnalyticsDataResponseFormProperties {
		botId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSessionAnalyticsDataResponseFormGroup() {
		return new FormGroup<ListSessionAnalyticsDataResponseFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object containing information about a specific session. */
	export interface SessionSpecification {
		botAliasId?: string;
		botVersion?: string;
		localeId?: string;
		channel?: string;
		sessionId?: string;
		conversationStartTime?: Date;
		conversationEndTime?: Date;
		conversationDurationSeconds?: number | null;
		conversationEndState?: ConversationEndState;
		mode?: AnalyticsModality;
		numberOfTurns?: number | null;
		invokedIntentSamples?: Array<InvokedIntentSample>;
		originatingRequestId?: string;
	}

	/** An object containing information about a specific session. */
	export interface SessionSpecificationFormProperties {
		botAliasId: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,
		localeId: FormControl<string | null | undefined>,
		channel: FormControl<string | null | undefined>,
		sessionId: FormControl<string | null | undefined>,
		conversationStartTime: FormControl<Date | null | undefined>,
		conversationEndTime: FormControl<Date | null | undefined>,
		conversationDurationSeconds: FormControl<number | null | undefined>,
		conversationEndState: FormControl<ConversationEndState | null | undefined>,
		mode: FormControl<AnalyticsModality | null | undefined>,
		numberOfTurns: FormControl<number | null | undefined>,
		originatingRequestId: FormControl<string | null | undefined>,
	}
	export function CreateSessionSpecificationFormGroup() {
		return new FormGroup<SessionSpecificationFormProperties>({
			botAliasId: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
			localeId: new FormControl<string | null | undefined>(undefined),
			channel: new FormControl<string | null | undefined>(undefined),
			sessionId: new FormControl<string | null | undefined>(undefined),
			conversationStartTime: new FormControl<Date | null | undefined>(undefined),
			conversationEndTime: new FormControl<Date | null | undefined>(undefined),
			conversationDurationSeconds: new FormControl<number | null | undefined>(undefined),
			conversationEndState: new FormControl<ConversationEndState | null | undefined>(undefined),
			mode: new FormControl<AnalyticsModality | null | undefined>(undefined),
			numberOfTurns: new FormControl<number | null | undefined>(undefined),
			originatingRequestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ConversationEndState { Success = 'Success', Failure = 'Failure', Dropped = 'Dropped' }

	export enum AnalyticsModality { Speech = 'Speech', Text = 'Text', DTMF = 'DTMF', MultiMode = 'MultiMode' }


	/** An object containing the name of an intent that was invoked. */
	export interface InvokedIntentSample {
		intentName?: string;
	}

	/** An object containing the name of an intent that was invoked. */
	export interface InvokedIntentSampleFormProperties {
		intentName: FormControl<string | null | undefined>,
	}
	export function CreateInvokedIntentSampleFormGroup() {
		return new FormGroup<InvokedIntentSampleFormProperties>({
			intentName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AnalyticsSessionSortByName { ConversationStartTime = 'ConversationStartTime', NumberOfTurns = 'NumberOfTurns', Duration = 'Duration' }

	export enum AnalyticsSortOrder { Ascending = 'Ascending', Descending = 'Descending' }


	/** <p>Contains fields describing a condition by which to filter the sessions. The expression may be understood as <code>name</code> <code>operator</code> <code>values</code>. For example:</p> <ul> <li> <p> <code>LocaleId EQ en</code> – The locale is "en".</p> </li> <li> <p> <code>Duration GT 200</code> – The duration is greater than 200 seconds.</p> </li> </ul> <p>The operators that each filter supports are listed below:</p> <ul> <li> <p> <code>BotAlias</code> – <code>EQ</code>.</p> </li> <li> <p> <code>BotVersion</code> – <code>EQ</code>.</p> </li> <li> <p> <code>LocaleId</code> – <code>EQ</code>.</p> </li> <li> <p> <code>Modality</code> – <code>EQ</code>.</p> </li> <li> <p> <code>Channel</code> – <code>EQ</code>.</p> </li> <li> <p> <code>Duration</code> – <code>EQ</code>, <code>GT</code>, <code>LT</code>.</p> </li> <li> <p> <code>conversationEndState</code> – <code>EQ</code>, <code>CO</code>.</p> </li> <li> <p> <code>SessionId</code> – <code>EQ</code>.</p> </li> <li> <p> <code>OriginatingRequestId</code> – <code>EQ</code>.</p> </li> <li> <p> <code>IntentPath</code> – <code>EQ</code>.</p> </li> </ul> */
	export interface AnalyticsSessionFilter {

		/** Required */
		name: AnalyticsSessionFilterName;

		/** Required */
		operator: AnalyticsFilterOperator;

		/** Required */
		values: Array<string>;
	}

	/** <p>Contains fields describing a condition by which to filter the sessions. The expression may be understood as <code>name</code> <code>operator</code> <code>values</code>. For example:</p> <ul> <li> <p> <code>LocaleId EQ en</code> – The locale is "en".</p> </li> <li> <p> <code>Duration GT 200</code> – The duration is greater than 200 seconds.</p> </li> </ul> <p>The operators that each filter supports are listed below:</p> <ul> <li> <p> <code>BotAlias</code> – <code>EQ</code>.</p> </li> <li> <p> <code>BotVersion</code> – <code>EQ</code>.</p> </li> <li> <p> <code>LocaleId</code> – <code>EQ</code>.</p> </li> <li> <p> <code>Modality</code> – <code>EQ</code>.</p> </li> <li> <p> <code>Channel</code> – <code>EQ</code>.</p> </li> <li> <p> <code>Duration</code> – <code>EQ</code>, <code>GT</code>, <code>LT</code>.</p> </li> <li> <p> <code>conversationEndState</code> – <code>EQ</code>, <code>CO</code>.</p> </li> <li> <p> <code>SessionId</code> – <code>EQ</code>.</p> </li> <li> <p> <code>OriginatingRequestId</code> – <code>EQ</code>.</p> </li> <li> <p> <code>IntentPath</code> – <code>EQ</code>.</p> </li> </ul> */
	export interface AnalyticsSessionFilterFormProperties {

		/** Required */
		name: FormControl<AnalyticsSessionFilterName | null | undefined>,

		/** Required */
		operator: FormControl<AnalyticsFilterOperator | null | undefined>,
	}
	export function CreateAnalyticsSessionFilterFormGroup() {
		return new FormGroup<AnalyticsSessionFilterFormProperties>({
			name: new FormControl<AnalyticsSessionFilterName | null | undefined>(undefined, [Validators.required]),
			operator: new FormControl<AnalyticsFilterOperator | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AnalyticsSessionFilterName { BotAliasId = 'BotAliasId', BotVersion = 'BotVersion', LocaleId = 'LocaleId', Modality = 'Modality', Channel = 'Channel', Duration = 'Duration', ConversationEndState = 'ConversationEndState', SessionId = 'SessionId', OriginatingRequestId = 'OriginatingRequestId', IntentPath = 'IntentPath' }

	export interface ListSessionMetricsResponse {
		botId?: string;
		results?: Array<AnalyticsSessionResult>;
		nextToken?: string;
	}
	export interface ListSessionMetricsResponseFormProperties {
		botId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSessionMetricsResponseFormGroup() {
		return new FormGroup<ListSessionMetricsResponseFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object containing the results for the session metrics you requested and the bin and/or group(s) they refer to, if applicable. */
	export interface AnalyticsSessionResult {
		binKeys?: Array<AnalyticsBinKey>;
		groupByKeys?: Array<AnalyticsSessionGroupByKey>;
		metricsResults?: Array<AnalyticsSessionMetricResult>;
	}

	/** An object containing the results for the session metrics you requested and the bin and/or group(s) they refer to, if applicable. */
	export interface AnalyticsSessionResultFormProperties {
	}
	export function CreateAnalyticsSessionResultFormGroup() {
		return new FormGroup<AnalyticsSessionResultFormProperties>({
		});

	}


	/** Contains the category by which the session analytics were grouped and a member of that category. */
	export interface AnalyticsSessionGroupByKey {
		name?: AnalyticsSessionField;
		value?: string;
	}

	/** Contains the category by which the session analytics were grouped and a member of that category. */
	export interface AnalyticsSessionGroupByKeyFormProperties {
		name: FormControl<AnalyticsSessionField | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateAnalyticsSessionGroupByKeyFormGroup() {
		return new FormGroup<AnalyticsSessionGroupByKeyFormProperties>({
			name: new FormControl<AnalyticsSessionField | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AnalyticsSessionField { ConversationEndState = 'ConversationEndState', LocaleId = 'LocaleId' }


	/** An object containing the results for a session metric you requested. */
	export interface AnalyticsSessionMetricResult {
		name?: AnalyticsSessionMetricName;
		statistic?: AnalyticsMetricStatistic;
		value?: number | null;
	}

	/** An object containing the results for a session metric you requested. */
	export interface AnalyticsSessionMetricResultFormProperties {
		name: FormControl<AnalyticsSessionMetricName | null | undefined>,
		statistic: FormControl<AnalyticsMetricStatistic | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateAnalyticsSessionMetricResultFormGroup() {
		return new FormGroup<AnalyticsSessionMetricResultFormProperties>({
			name: new FormControl<AnalyticsSessionMetricName | null | undefined>(undefined),
			statistic: new FormControl<AnalyticsMetricStatistic | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AnalyticsSessionMetricName { Count = 'Count', Success = 'Success', Failure = 'Failure', Dropped = 'Dropped', Duration = 'Duration', TurnsPerConversation = 'TurnsPerConversation', Concurrency = 'Concurrency' }


	/** Contains the metric and the summary statistic you want to calculate, and the order in which to sort the results, for the user sessions with the bot. */
	export interface AnalyticsSessionMetric {

		/** Required */
		name: AnalyticsSessionMetricName;

		/** Required */
		statistic: AnalyticsMetricStatistic;
		order?: SortOrder;
	}

	/** Contains the metric and the summary statistic you want to calculate, and the order in which to sort the results, for the user sessions with the bot. */
	export interface AnalyticsSessionMetricFormProperties {

		/** Required */
		name: FormControl<AnalyticsSessionMetricName | null | undefined>,

		/** Required */
		statistic: FormControl<AnalyticsMetricStatistic | null | undefined>,
		order: FormControl<SortOrder | null | undefined>,
	}
	export function CreateAnalyticsSessionMetricFormGroup() {
		return new FormGroup<AnalyticsSessionMetricFormProperties>({
			name: new FormControl<AnalyticsSessionMetricName | null | undefined>(undefined, [Validators.required]),
			statistic: new FormControl<AnalyticsMetricStatistic | null | undefined>(undefined, [Validators.required]),
			order: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}


	/** Contains the category by which to group the sessions. */
	export interface AnalyticsSessionGroupBySpecification {

		/** Required */
		name: AnalyticsSessionField;
	}

	/** Contains the category by which to group the sessions. */
	export interface AnalyticsSessionGroupBySpecificationFormProperties {

		/** Required */
		name: FormControl<AnalyticsSessionField | null | undefined>,
	}
	export function CreateAnalyticsSessionGroupBySpecificationFormGroup() {
		return new FormGroup<AnalyticsSessionGroupBySpecificationFormProperties>({
			name: new FormControl<AnalyticsSessionField | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListSlotTypesResponse {
		botId?: string;
		botVersion?: string;
		localeId?: string;
		slotTypeSummaries?: Array<SlotTypeSummary>;
		nextToken?: string;
	}
	export interface ListSlotTypesResponseFormProperties {
		botId: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,
		localeId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSlotTypesResponseFormGroup() {
		return new FormGroup<ListSlotTypesResponseFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
			localeId: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides summary information about a slot type. */
	export interface SlotTypeSummary {
		slotTypeId?: string;
		slotTypeName?: string;
		description?: string;
		parentSlotTypeSignature?: string;
		lastUpdatedDateTime?: Date;
		slotTypeCategory?: SlotTypeCategory;
	}

	/** Provides summary information about a slot type. */
	export interface SlotTypeSummaryFormProperties {
		slotTypeId: FormControl<string | null | undefined>,
		slotTypeName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		parentSlotTypeSignature: FormControl<string | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		slotTypeCategory: FormControl<SlotTypeCategory | null | undefined>,
	}
	export function CreateSlotTypeSummaryFormGroup() {
		return new FormGroup<SlotTypeSummaryFormProperties>({
			slotTypeId: new FormControl<string | null | undefined>(undefined),
			slotTypeName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			parentSlotTypeSignature: new FormControl<string | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			slotTypeCategory: new FormControl<SlotTypeCategory | null | undefined>(undefined),
		});

	}

	export enum SlotTypeCategory { Custom = 'Custom', Extended = 'Extended', ExternalGrammar = 'ExternalGrammar', Composite = 'Composite' }

	export enum SlotTypeSortAttribute { SlotTypeName = 'SlotTypeName', LastUpdatedDateTime = 'LastUpdatedDateTime' }


	/** Filters the response from the <code>ListSlotTypes</code> operation. */
	export interface SlotTypeFilter {

		/** Required */
		name: SlotTypeFilterName;

		/** Required */
		values: Array<string>;

		/** Required */
		operator: AggregatedUtterancesFilterOperator;
	}

	/** Filters the response from the <code>ListSlotTypes</code> operation. */
	export interface SlotTypeFilterFormProperties {

		/** Required */
		name: FormControl<SlotTypeFilterName | null | undefined>,

		/** Required */
		operator: FormControl<AggregatedUtterancesFilterOperator | null | undefined>,
	}
	export function CreateSlotTypeFilterFormGroup() {
		return new FormGroup<SlotTypeFilterFormProperties>({
			name: new FormControl<SlotTypeFilterName | null | undefined>(undefined, [Validators.required]),
			operator: new FormControl<AggregatedUtterancesFilterOperator | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SlotTypeFilterName { SlotTypeName = 'SlotTypeName', ExternalSourceType = 'ExternalSourceType' }

	export interface ListSlotsResponse {
		botId?: string;
		botVersion?: string;
		localeId?: string;
		intentId?: string;
		slotSummaries?: Array<SlotSummary>;
		nextToken?: string;
	}
	export interface ListSlotsResponseFormProperties {
		botId: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,
		localeId: FormControl<string | null | undefined>,
		intentId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSlotsResponseFormGroup() {
		return new FormGroup<ListSlotsResponseFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
			localeId: new FormControl<string | null | undefined>(undefined),
			intentId: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information about a slot, a value that the bot elicits from the user. */
	export interface SlotSummary {
		slotId?: string;
		slotName?: string;
		description?: string;
		slotConstraint?: SlotConstraint;
		slotTypeId?: string;
		valueElicitationPromptSpecification?: PromptSpecification;
		lastUpdatedDateTime?: Date;
	}

	/** Summary information about a slot, a value that the bot elicits from the user. */
	export interface SlotSummaryFormProperties {
		slotId: FormControl<string | null | undefined>,
		slotName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		slotConstraint: FormControl<SlotConstraint | null | undefined>,
		slotTypeId: FormControl<string | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateSlotSummaryFormGroup() {
		return new FormGroup<SlotSummaryFormProperties>({
			slotId: new FormControl<string | null | undefined>(undefined),
			slotName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			slotConstraint: new FormControl<SlotConstraint | null | undefined>(undefined),
			slotTypeId: new FormControl<string | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum SlotSortAttribute { SlotName = 'SlotName', LastUpdatedDateTime = 'LastUpdatedDateTime' }


	/** Filters the response from the <code>ListSlots</code> operation. */
	export interface SlotFilter {

		/** Required */
		name: SlotFilterName;

		/** Required */
		values: Array<string>;

		/** Required */
		operator: AggregatedUtterancesFilterOperator;
	}

	/** Filters the response from the <code>ListSlots</code> operation. */
	export interface SlotFilterFormProperties {

		/** Required */
		name: FormControl<SlotFilterName | null | undefined>,

		/** Required */
		operator: FormControl<AggregatedUtterancesFilterOperator | null | undefined>,
	}
	export function CreateSlotFilterFormGroup() {
		return new FormGroup<SlotFilterFormProperties>({
			name: new FormControl<SlotFilterName | null | undefined>(undefined, [Validators.required]),
			operator: new FormControl<AggregatedUtterancesFilterOperator | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SlotFilterName { SlotName = 'SlotName' }

	export interface ListTagsForResourceResponse {
		tags?: TagMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface ListTestExecutionResultItemsResponse {
		testExecutionResults?: TestExecutionResultItems;
		nextToken?: string;
	}
	export interface ListTestExecutionResultItemsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTestExecutionResultItemsResponseFormGroup() {
		return new FormGroup<ListTestExecutionResultItemsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the results of the test execution, grouped by type of results. See <a href="https://docs.aws.amazon.com/lexv2/latest/dg/test-results-details-test-set.html">Test result details"&gt;Test results details</a> for details about different types of results. */
	export interface TestExecutionResultItems {
		overallTestResults?: OverallTestResults;
		conversationLevelTestResults?: ConversationLevelTestResults;
		intentClassificationTestResults?: IntentClassificationTestResults;
		intentLevelSlotResolutionTestResults?: IntentLevelSlotResolutionTestResults;
		utteranceLevelTestResults?: UtteranceLevelTestResults;
	}

	/** Contains the results of the test execution, grouped by type of results. See <a href="https://docs.aws.amazon.com/lexv2/latest/dg/test-results-details-test-set.html">Test result details"&gt;Test results details</a> for details about different types of results. */
	export interface TestExecutionResultItemsFormProperties {
	}
	export function CreateTestExecutionResultItemsFormGroup() {
		return new FormGroup<TestExecutionResultItemsFormProperties>({
		});

	}


	/** Information about the overall test results. */
	export interface OverallTestResults {

		/** Required */
		items: Array<OverallTestResultItem>;
	}

	/** Information about the overall test results. */
	export interface OverallTestResultsFormProperties {
	}
	export function CreateOverallTestResultsFormGroup() {
		return new FormGroup<OverallTestResultsFormProperties>({
		});

	}


	/** Information about the overall results for a test execution result. */
	export interface OverallTestResultItem {

		/** Required */
		multiTurnConversation: boolean;

		/** Required */
		totalResultCount: number;
		speechTranscriptionResultCounts?: TestResultMatchStatusCountMap;

		/** Required */
		endToEndResultCounts: TestResultMatchStatusCountMap;
	}

	/** Information about the overall results for a test execution result. */
	export interface OverallTestResultItemFormProperties {

		/** Required */
		multiTurnConversation: FormControl<boolean | null | undefined>,

		/** Required */
		totalResultCount: FormControl<number | null | undefined>,
	}
	export function CreateOverallTestResultItemFormGroup() {
		return new FormGroup<OverallTestResultItemFormProperties>({
			multiTurnConversation: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			totalResultCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TestResultMatchStatusCountMap {
	}
	export interface TestResultMatchStatusCountMapFormProperties {
	}
	export function CreateTestResultMatchStatusCountMapFormGroup() {
		return new FormGroup<TestResultMatchStatusCountMapFormProperties>({
		});

	}


	/** The test set results data at the conversation level. */
	export interface ConversationLevelTestResults {

		/** Required */
		items: Array<ConversationLevelTestResultItem>;
	}

	/** The test set results data at the conversation level. */
	export interface ConversationLevelTestResultsFormProperties {
	}
	export function CreateConversationLevelTestResultsFormGroup() {
		return new FormGroup<ConversationLevelTestResultsFormProperties>({
		});

	}


	/** The test result evaluation item at the conversation level. */
	export interface ConversationLevelTestResultItem {

		/** Required */
		conversationId: string;

		/** Required */
		endToEndResult: TestResultMatchStatus;
		speechTranscriptionResult?: TestResultMatchStatus;

		/** Required */
		intentClassificationResults: Array<ConversationLevelIntentClassificationResultItem>;

		/** Required */
		slotResolutionResults: Array<ConversationLevelSlotResolutionResultItem>;
	}

	/** The test result evaluation item at the conversation level. */
	export interface ConversationLevelTestResultItemFormProperties {

		/** Required */
		conversationId: FormControl<string | null | undefined>,

		/** Required */
		endToEndResult: FormControl<TestResultMatchStatus | null | undefined>,
		speechTranscriptionResult: FormControl<TestResultMatchStatus | null | undefined>,
	}
	export function CreateConversationLevelTestResultItemFormGroup() {
		return new FormGroup<ConversationLevelTestResultItemFormProperties>({
			conversationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			endToEndResult: new FormControl<TestResultMatchStatus | null | undefined>(undefined, [Validators.required]),
			speechTranscriptionResult: new FormControl<TestResultMatchStatus | null | undefined>(undefined),
		});

	}

	export enum TestResultMatchStatus { Matched = 'Matched', Mismatched = 'Mismatched', ExecutionError = 'ExecutionError' }


	/** The item listing the evaluation of intent level success or failure. */
	export interface ConversationLevelIntentClassificationResultItem {

		/** Required */
		intentName: string;

		/** Required */
		matchResult: TestResultMatchStatus;
	}

	/** The item listing the evaluation of intent level success or failure. */
	export interface ConversationLevelIntentClassificationResultItemFormProperties {

		/** Required */
		intentName: FormControl<string | null | undefined>,

		/** Required */
		matchResult: FormControl<TestResultMatchStatus | null | undefined>,
	}
	export function CreateConversationLevelIntentClassificationResultItemFormGroup() {
		return new FormGroup<ConversationLevelIntentClassificationResultItemFormProperties>({
			intentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			matchResult: new FormControl<TestResultMatchStatus | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The slots used for the slot resolution in the conversation. */
	export interface ConversationLevelSlotResolutionResultItem {

		/** Required */
		intentName: string;

		/** Required */
		slotName: string;

		/** Required */
		matchResult: TestResultMatchStatus;
	}

	/** The slots used for the slot resolution in the conversation. */
	export interface ConversationLevelSlotResolutionResultItemFormProperties {

		/** Required */
		intentName: FormControl<string | null | undefined>,

		/** Required */
		slotName: FormControl<string | null | undefined>,

		/** Required */
		matchResult: FormControl<TestResultMatchStatus | null | undefined>,
	}
	export function CreateConversationLevelSlotResolutionResultItemFormGroup() {
		return new FormGroup<ConversationLevelSlotResolutionResultItemFormProperties>({
			intentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			slotName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			matchResult: new FormControl<TestResultMatchStatus | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information for the results of the intent classification test.  */
	export interface IntentClassificationTestResults {

		/** Required */
		items: Array<IntentClassificationTestResultItem>;
	}

	/** Information for the results of the intent classification test.  */
	export interface IntentClassificationTestResultsFormProperties {
	}
	export function CreateIntentClassificationTestResultsFormGroup() {
		return new FormGroup<IntentClassificationTestResultsFormProperties>({
		});

	}


	/** Information for an intent that is classified by the test workbench. */
	export interface IntentClassificationTestResultItem {

		/** Required */
		intentName: string;

		/** Required */
		multiTurnConversation: boolean;

		/** Required */
		resultCounts: IntentClassificationTestResultItemCounts;
	}

	/** Information for an intent that is classified by the test workbench. */
	export interface IntentClassificationTestResultItemFormProperties {

		/** Required */
		intentName: FormControl<string | null | undefined>,

		/** Required */
		multiTurnConversation: FormControl<boolean | null | undefined>,
	}
	export function CreateIntentClassificationTestResultItemFormGroup() {
		return new FormGroup<IntentClassificationTestResultItemFormProperties>({
			intentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			multiTurnConversation: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The number of items in the intent classification test. */
	export interface IntentClassificationTestResultItemCounts {

		/** Required */
		totalResultCount: number;
		speechTranscriptionResultCounts?: TestResultMatchStatusCountMap;

		/** Required */
		intentMatchResultCounts: TestResultMatchStatusCountMap;
	}

	/** The number of items in the intent classification test. */
	export interface IntentClassificationTestResultItemCountsFormProperties {

		/** Required */
		totalResultCount: FormControl<number | null | undefined>,
	}
	export function CreateIntentClassificationTestResultItemCountsFormGroup() {
		return new FormGroup<IntentClassificationTestResultItemCountsFormProperties>({
			totalResultCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Indicates the success or failure of slots at the intent level. */
	export interface IntentLevelSlotResolutionTestResults {

		/** Required */
		items: Array<IntentLevelSlotResolutionTestResultItem>;
	}

	/** Indicates the success or failure of slots at the intent level. */
	export interface IntentLevelSlotResolutionTestResultsFormProperties {
	}
	export function CreateIntentLevelSlotResolutionTestResultsFormGroup() {
		return new FormGroup<IntentLevelSlotResolutionTestResultsFormProperties>({
		});

	}


	/** Information about intent-level slot resolution in a test result. */
	export interface IntentLevelSlotResolutionTestResultItem {

		/** Required */
		intentName: string;

		/** Required */
		multiTurnConversation: boolean;

		/** Required */
		slotResolutionResults: Array<SlotResolutionTestResultItem>;
	}

	/** Information about intent-level slot resolution in a test result. */
	export interface IntentLevelSlotResolutionTestResultItemFormProperties {

		/** Required */
		intentName: FormControl<string | null | undefined>,

		/** Required */
		multiTurnConversation: FormControl<boolean | null | undefined>,
	}
	export function CreateIntentLevelSlotResolutionTestResultItemFormGroup() {
		return new FormGroup<IntentLevelSlotResolutionTestResultItemFormProperties>({
			intentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			multiTurnConversation: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about the success and failure rate of slot resolution in the results of a test execution. */
	export interface SlotResolutionTestResultItem {

		/** Required */
		slotName: string;

		/** Required */
		resultCounts: SlotResolutionTestResultItemCounts;
	}

	/** Information about the success and failure rate of slot resolution in the results of a test execution. */
	export interface SlotResolutionTestResultItemFormProperties {

		/** Required */
		slotName: FormControl<string | null | undefined>,
	}
	export function CreateSlotResolutionTestResultItemFormGroup() {
		return new FormGroup<SlotResolutionTestResultItemFormProperties>({
			slotName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about the counts for a slot resolution in the results of a test execution. */
	export interface SlotResolutionTestResultItemCounts {

		/** Required */
		totalResultCount: number;
		speechTranscriptionResultCounts?: TestResultMatchStatusCountMap;

		/** Required */
		slotMatchResultCounts: TestResultMatchStatusCountMap;
	}

	/** Information about the counts for a slot resolution in the results of a test execution. */
	export interface SlotResolutionTestResultItemCountsFormProperties {

		/** Required */
		totalResultCount: FormControl<number | null | undefined>,
	}
	export function CreateSlotResolutionTestResultItemCountsFormGroup() {
		return new FormGroup<SlotResolutionTestResultItemCountsFormProperties>({
			totalResultCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains information about the utterances in the results of the test set execution. */
	export interface UtteranceLevelTestResults {

		/** Required */
		items: Array<UtteranceLevelTestResultItem>;
	}

	/** Contains information about the utterances in the results of the test set execution. */
	export interface UtteranceLevelTestResultsFormProperties {
	}
	export function CreateUtteranceLevelTestResultsFormGroup() {
		return new FormGroup<UtteranceLevelTestResultsFormProperties>({
		});

	}


	/** Contains information about multiple utterances in the results of a test set execution. */
	export interface UtteranceLevelTestResultItem {

		/** Required */
		recordNumber: number;
		conversationId?: string;

		/** Required */
		turnResult: TestSetTurnResult;
	}

	/** Contains information about multiple utterances in the results of a test set execution. */
	export interface UtteranceLevelTestResultItemFormProperties {

		/** Required */
		recordNumber: FormControl<number | null | undefined>,
		conversationId: FormControl<string | null | undefined>,
	}
	export function CreateUtteranceLevelTestResultItemFormGroup() {
		return new FormGroup<UtteranceLevelTestResultItemFormProperties>({
			recordNumber: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			conversationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the results of the analysis of a turn in the test set. */
	export interface TestSetTurnResult {
		agent?: AgentTurnResult;
		user?: UserTurnResult;
	}

	/** Contains information about the results of the analysis of a turn in the test set. */
	export interface TestSetTurnResultFormProperties {
	}
	export function CreateTestSetTurnResultFormGroup() {
		return new FormGroup<TestSetTurnResultFormProperties>({
		});

	}


	/** The information about the agent turn in a test set execution. */
	export interface AgentTurnResult {

		/** Required */
		expectedAgentPrompt: string;
		actualAgentPrompt?: string;

		/** Details about an error in an execution of a test set. */
		errorDetails?: ExecutionErrorDetails;
		actualElicitedSlot?: string;
		actualIntent?: string;
	}

	/** The information about the agent turn in a test set execution. */
	export interface AgentTurnResultFormProperties {

		/** Required */
		expectedAgentPrompt: FormControl<string | null | undefined>,
		actualAgentPrompt: FormControl<string | null | undefined>,
		actualElicitedSlot: FormControl<string | null | undefined>,
		actualIntent: FormControl<string | null | undefined>,
	}
	export function CreateAgentTurnResultFormGroup() {
		return new FormGroup<AgentTurnResultFormProperties>({
			expectedAgentPrompt: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			actualAgentPrompt: new FormControl<string | null | undefined>(undefined),
			actualElicitedSlot: new FormControl<string | null | undefined>(undefined),
			actualIntent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about an error in an execution of a test set. */
	export interface ExecutionErrorDetails {

		/** Required */
		errorCode: string;

		/** Required */
		errorMessage: string;
	}

	/** Details about an error in an execution of a test set. */
	export interface ExecutionErrorDetailsFormProperties {

		/** Required */
		errorCode: FormControl<string | null | undefined>,

		/** Required */
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateExecutionErrorDetailsFormGroup() {
		return new FormGroup<ExecutionErrorDetailsFormProperties>({
			errorCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			errorMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the results for the user turn by the test execution. */
	export interface UserTurnResult {

		/** Required */
		input: UserTurnInputSpecification;

		/** Required */
		expectedOutput: UserTurnOutputSpecification;
		actualOutput?: UserTurnOutputSpecification;

		/** Details about an error in an execution of a test set. */
		errorDetails?: ExecutionErrorDetails;
		endToEndResult?: TestResultMatchStatus;
		intentMatchResult?: TestResultMatchStatus;
		slotMatchResult?: TestResultMatchStatus;
		speechTranscriptionResult?: TestResultMatchStatus;
		conversationLevelResult?: ConversationLevelResultDetail;
	}

	/** Contains the results for the user turn by the test execution. */
	export interface UserTurnResultFormProperties {
		endToEndResult: FormControl<TestResultMatchStatus | null | undefined>,
		intentMatchResult: FormControl<TestResultMatchStatus | null | undefined>,
		slotMatchResult: FormControl<TestResultMatchStatus | null | undefined>,
		speechTranscriptionResult: FormControl<TestResultMatchStatus | null | undefined>,
	}
	export function CreateUserTurnResultFormGroup() {
		return new FormGroup<UserTurnResultFormProperties>({
			endToEndResult: new FormControl<TestResultMatchStatus | null | undefined>(undefined),
			intentMatchResult: new FormControl<TestResultMatchStatus | null | undefined>(undefined),
			slotMatchResult: new FormControl<TestResultMatchStatus | null | undefined>(undefined),
			speechTranscriptionResult: new FormControl<TestResultMatchStatus | null | undefined>(undefined),
		});

	}


	/** Contains information about the user messages in the turn in the input. */
	export interface UserTurnInputSpecification {

		/** Required */
		utteranceInput: UtteranceInputSpecification;
		requestAttributes?: StringMap;
		sessionState?: InputSessionStateSpecification;
	}

	/** Contains information about the user messages in the turn in the input. */
	export interface UserTurnInputSpecificationFormProperties {
	}
	export function CreateUserTurnInputSpecificationFormGroup() {
		return new FormGroup<UserTurnInputSpecificationFormProperties>({
		});

	}


	/** Contains information about input of an utterance. */
	export interface UtteranceInputSpecification {
		textInput?: string;
		audioInput?: UtteranceAudioInputSpecification;
	}

	/** Contains information about input of an utterance. */
	export interface UtteranceInputSpecificationFormProperties {
		textInput: FormControl<string | null | undefined>,
	}
	export function CreateUtteranceInputSpecificationFormGroup() {
		return new FormGroup<UtteranceInputSpecificationFormProperties>({
			textInput: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the audio for an utterance. */
	export interface UtteranceAudioInputSpecification {

		/** Required */
		audioFileS3Location: string;
	}

	/** Contains information about the audio for an utterance. */
	export interface UtteranceAudioInputSpecificationFormProperties {

		/** Required */
		audioFileS3Location: FormControl<string | null | undefined>,
	}
	export function CreateUtteranceAudioInputSpecificationFormGroup() {
		return new FormGroup<UtteranceAudioInputSpecificationFormProperties>({
			audioFileS3Location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifications for the current state of the dialog between the user and the bot in the test set. */
	export interface InputSessionStateSpecification {
		sessionAttributes?: StringMap;
		activeContexts?: Array<ActiveContext>;
		runtimeHints?: RuntimeHints;
	}

	/** Specifications for the current state of the dialog between the user and the bot in the test set. */
	export interface InputSessionStateSpecificationFormProperties {
	}
	export function CreateInputSessionStateSpecificationFormGroup() {
		return new FormGroup<InputSessionStateSpecificationFormProperties>({
		});

	}


	/** The active context used in the test execution. */
	export interface ActiveContext {

		/** Required */
		name: string;
	}

	/** The active context used in the test execution. */
	export interface ActiveContextFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateActiveContextFormGroup() {
		return new FormGroup<ActiveContextFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>You can provide Amazon Lex with hints to the phrases that a customer is likely to use for a slot. When a slot with hints is resolved, the phrases in the runtime hints are preferred in the resolution. You can provide hints for a maximum of 100 intents. You can provide a maximum of 100 slots.</p> <p>Before you can use runtime hints with an existing bot, you must first rebuild the bot.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/using-hints.html">Using runtime hints to improve recognition of slot values</a>.</p> */
	export interface RuntimeHints {
		slotHints?: SlotHintsIntentMap;
	}

	/** <p>You can provide Amazon Lex with hints to the phrases that a customer is likely to use for a slot. When a slot with hints is resolved, the phrases in the runtime hints are preferred in the resolution. You can provide hints for a maximum of 100 intents. You can provide a maximum of 100 slots.</p> <p>Before you can use runtime hints with an existing bot, you must first rebuild the bot.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/using-hints.html">Using runtime hints to improve recognition of slot values</a>.</p> */
	export interface RuntimeHintsFormProperties {
	}
	export function CreateRuntimeHintsFormGroup() {
		return new FormGroup<RuntimeHintsFormProperties>({
		});

	}

	export interface SlotHintsIntentMap {
	}
	export interface SlotHintsIntentMapFormProperties {
	}
	export function CreateSlotHintsIntentMapFormGroup() {
		return new FormGroup<SlotHintsIntentMapFormProperties>({
		});

	}


	/** Contains results that are output for the user turn by the test execution. */
	export interface UserTurnOutputSpecification {

		/** Required */
		intent: UserTurnIntentOutput;
		activeContexts?: Array<ActiveContext>;
		transcript?: string;
	}

	/** Contains results that are output for the user turn by the test execution. */
	export interface UserTurnOutputSpecificationFormProperties {
		transcript: FormControl<string | null | undefined>,
	}
	export function CreateUserTurnOutputSpecificationFormGroup() {
		return new FormGroup<UserTurnOutputSpecificationFormProperties>({
			transcript: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the intent that is output for the turn by the test execution. */
	export interface UserTurnIntentOutput {

		/** Required */
		name: string;
		slots?: UserTurnSlotOutputMap;
	}

	/** Contains information about the intent that is output for the turn by the test execution. */
	export interface UserTurnIntentOutputFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUserTurnIntentOutputFormGroup() {
		return new FormGroup<UserTurnIntentOutputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UserTurnSlotOutputMap {
	}
	export interface UserTurnSlotOutputMapFormProperties {
	}
	export function CreateUserTurnSlotOutputMapFormGroup() {
		return new FormGroup<UserTurnSlotOutputMapFormProperties>({
		});

	}


	/** The conversation level details of the conversation used in the test set. */
	export interface ConversationLevelResultDetail {

		/** Required */
		endToEndResult: TestResultMatchStatus;
		speechTranscriptionResult?: TestResultMatchStatus;
	}

	/** The conversation level details of the conversation used in the test set. */
	export interface ConversationLevelResultDetailFormProperties {

		/** Required */
		endToEndResult: FormControl<TestResultMatchStatus | null | undefined>,
		speechTranscriptionResult: FormControl<TestResultMatchStatus | null | undefined>,
	}
	export function CreateConversationLevelResultDetailFormGroup() {
		return new FormGroup<ConversationLevelResultDetailFormProperties>({
			endToEndResult: new FormControl<TestResultMatchStatus | null | undefined>(undefined, [Validators.required]),
			speechTranscriptionResult: new FormControl<TestResultMatchStatus | null | undefined>(undefined),
		});

	}

	export enum TestResultTypeFilter { OverallTestResults = 'OverallTestResults', ConversationLevelTestResults = 'ConversationLevelTestResults', IntentClassificationTestResults = 'IntentClassificationTestResults', SlotResolutionTestResults = 'SlotResolutionTestResults', UtteranceLevelResults = 'UtteranceLevelResults' }


	/** The selection to filter the test set results data at the conversation level. */
	export interface ConversationLevelTestResultsFilterBy {
		endToEndResult?: TestResultMatchStatus;
	}

	/** The selection to filter the test set results data at the conversation level. */
	export interface ConversationLevelTestResultsFilterByFormProperties {
		endToEndResult: FormControl<TestResultMatchStatus | null | undefined>,
	}
	export function CreateConversationLevelTestResultsFilterByFormGroup() {
		return new FormGroup<ConversationLevelTestResultsFilterByFormProperties>({
			endToEndResult: new FormControl<TestResultMatchStatus | null | undefined>(undefined),
		});

	}

	export interface ListTestExecutionsResponse {
		testExecutions?: Array<TestExecutionSummary>;
		nextToken?: string;
	}
	export interface ListTestExecutionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTestExecutionsResponseFormGroup() {
		return new FormGroup<ListTestExecutionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summarizes metadata about the test execution. */
	export interface TestExecutionSummary {
		testExecutionId?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
		testExecutionStatus?: TestExecutionStatus;
		testSetId?: string;
		testSetName?: string;
		target?: TestExecutionTarget;
		apiMode?: TestExecutionApiMode;
		testExecutionModality?: TestSetModality;
	}

	/** Summarizes metadata about the test execution. */
	export interface TestExecutionSummaryFormProperties {
		testExecutionId: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		testExecutionStatus: FormControl<TestExecutionStatus | null | undefined>,
		testSetId: FormControl<string | null | undefined>,
		testSetName: FormControl<string | null | undefined>,
		apiMode: FormControl<TestExecutionApiMode | null | undefined>,
		testExecutionModality: FormControl<TestSetModality | null | undefined>,
	}
	export function CreateTestExecutionSummaryFormGroup() {
		return new FormGroup<TestExecutionSummaryFormProperties>({
			testExecutionId: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			testExecutionStatus: new FormControl<TestExecutionStatus | null | undefined>(undefined),
			testSetId: new FormControl<string | null | undefined>(undefined),
			testSetName: new FormControl<string | null | undefined>(undefined),
			apiMode: new FormControl<TestExecutionApiMode | null | undefined>(undefined),
			testExecutionModality: new FormControl<TestSetModality | null | undefined>(undefined),
		});

	}

	export enum TestExecutionSortAttribute { TestSetName = 'TestSetName', CreationDateTime = 'CreationDateTime' }

	export interface ListTestSetRecordsResponse {
		testSetRecords?: Array<TestSetTurnRecord>;
		nextToken?: string;
	}
	export interface ListTestSetRecordsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTestSetRecordsResponseFormGroup() {
		return new FormGroup<ListTestSetRecordsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a turn in a test set. */
	export interface TestSetTurnRecord {

		/** Required */
		recordNumber: number;
		conversationId?: string;
		turnNumber?: number | null;

		/** Required */
		turnSpecification: TurnSpecification;
	}

	/** Contains information about a turn in a test set. */
	export interface TestSetTurnRecordFormProperties {

		/** Required */
		recordNumber: FormControl<number | null | undefined>,
		conversationId: FormControl<string | null | undefined>,
		turnNumber: FormControl<number | null | undefined>,
	}
	export function CreateTestSetTurnRecordFormGroup() {
		return new FormGroup<TestSetTurnRecordFormProperties>({
			recordNumber: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			conversationId: new FormControl<string | null | undefined>(undefined),
			turnNumber: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains information about the messages in the turn. */
	export interface TurnSpecification {
		agentTurn?: AgentTurnSpecification;
		userTurn?: UserTurnSpecification;
	}

	/** Contains information about the messages in the turn. */
	export interface TurnSpecificationFormProperties {
	}
	export function CreateTurnSpecificationFormGroup() {
		return new FormGroup<TurnSpecificationFormProperties>({
		});

	}


	/** The specification of an agent turn. */
	export interface AgentTurnSpecification {

		/** Required */
		agentPrompt: string;
	}

	/** The specification of an agent turn. */
	export interface AgentTurnSpecificationFormProperties {

		/** Required */
		agentPrompt: FormControl<string | null | undefined>,
	}
	export function CreateAgentTurnSpecificationFormGroup() {
		return new FormGroup<AgentTurnSpecificationFormProperties>({
			agentPrompt: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains information about the expected and input values for the user turn. */
	export interface UserTurnSpecification {

		/** Required */
		input: UserTurnInputSpecification;

		/** Required */
		expected: UserTurnOutputSpecification;
	}

	/** Contains information about the expected and input values for the user turn. */
	export interface UserTurnSpecificationFormProperties {
	}
	export function CreateUserTurnSpecificationFormGroup() {
		return new FormGroup<UserTurnSpecificationFormProperties>({
		});

	}

	export interface ListTestSetsResponse {
		testSets?: Array<TestSetSummary>;
		nextToken?: string;
	}
	export interface ListTestSetsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTestSetsResponseFormGroup() {
		return new FormGroup<ListTestSetsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains summary information about the test set. */
	export interface TestSetSummary {
		testSetId?: string;
		testSetName?: string;
		description?: string;
		modality?: TestSetModality;
		status?: TestSetStatus;
		roleArn?: string;
		numTurns?: number | null;
		storageLocation?: TestSetStorageLocation;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
	}

	/** Contains summary information about the test set. */
	export interface TestSetSummaryFormProperties {
		testSetId: FormControl<string | null | undefined>,
		testSetName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		modality: FormControl<TestSetModality | null | undefined>,
		status: FormControl<TestSetStatus | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
		numTurns: FormControl<number | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateTestSetSummaryFormGroup() {
		return new FormGroup<TestSetSummaryFormProperties>({
			testSetId: new FormControl<string | null | undefined>(undefined),
			testSetName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			modality: new FormControl<TestSetModality | null | undefined>(undefined),
			status: new FormControl<TestSetStatus | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
			numTurns: new FormControl<number | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum TestSetSortAttribute { TestSetName = 'TestSetName', LastUpdatedDateTime = 'LastUpdatedDateTime' }

	export interface ListUtteranceAnalyticsDataResponse {
		botId?: string;
		nextToken?: string;
		utterances?: Array<UtteranceSpecification>;
	}
	export interface ListUtteranceAnalyticsDataResponseFormProperties {
		botId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUtteranceAnalyticsDataResponseFormGroup() {
		return new FormGroup<ListUtteranceAnalyticsDataResponseFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object containing information about a specific utterance. */
	export interface UtteranceSpecification {
		botAliasId?: string;
		botVersion?: string;
		localeId?: string;
		sessionId?: string;
		channel?: string;
		mode?: AnalyticsModality;
		conversationStartTime?: Date;
		conversationEndTime?: Date;
		utterance?: string;
		utteranceTimestamp?: Date;
		audioVoiceDurationMillis?: number | null;
		utteranceUnderstood?: boolean | null;
		inputType?: string;
		outputType?: string;
		associatedIntentName?: string;
		associatedSlotName?: string;
		intentState?: IntentState;
		dialogActionType?: string;
		botResponseAudioVoiceId?: string;
		slotsFilledInSession?: string;
		utteranceRequestId?: string;
		botResponses?: Array<UtteranceBotResponse>;
	}

	/** An object containing information about a specific utterance. */
	export interface UtteranceSpecificationFormProperties {
		botAliasId: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,
		localeId: FormControl<string | null | undefined>,
		sessionId: FormControl<string | null | undefined>,
		channel: FormControl<string | null | undefined>,
		mode: FormControl<AnalyticsModality | null | undefined>,
		conversationStartTime: FormControl<Date | null | undefined>,
		conversationEndTime: FormControl<Date | null | undefined>,
		utterance: FormControl<string | null | undefined>,
		utteranceTimestamp: FormControl<Date | null | undefined>,
		audioVoiceDurationMillis: FormControl<number | null | undefined>,
		utteranceUnderstood: FormControl<boolean | null | undefined>,
		inputType: FormControl<string | null | undefined>,
		outputType: FormControl<string | null | undefined>,
		associatedIntentName: FormControl<string | null | undefined>,
		associatedSlotName: FormControl<string | null | undefined>,
		intentState: FormControl<IntentState | null | undefined>,
		dialogActionType: FormControl<string | null | undefined>,
		botResponseAudioVoiceId: FormControl<string | null | undefined>,
		slotsFilledInSession: FormControl<string | null | undefined>,
		utteranceRequestId: FormControl<string | null | undefined>,
	}
	export function CreateUtteranceSpecificationFormGroup() {
		return new FormGroup<UtteranceSpecificationFormProperties>({
			botAliasId: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
			localeId: new FormControl<string | null | undefined>(undefined),
			sessionId: new FormControl<string | null | undefined>(undefined),
			channel: new FormControl<string | null | undefined>(undefined),
			mode: new FormControl<AnalyticsModality | null | undefined>(undefined),
			conversationStartTime: new FormControl<Date | null | undefined>(undefined),
			conversationEndTime: new FormControl<Date | null | undefined>(undefined),
			utterance: new FormControl<string | null | undefined>(undefined),
			utteranceTimestamp: new FormControl<Date | null | undefined>(undefined),
			audioVoiceDurationMillis: new FormControl<number | null | undefined>(undefined),
			utteranceUnderstood: new FormControl<boolean | null | undefined>(undefined),
			inputType: new FormControl<string | null | undefined>(undefined),
			outputType: new FormControl<string | null | undefined>(undefined),
			associatedIntentName: new FormControl<string | null | undefined>(undefined),
			associatedSlotName: new FormControl<string | null | undefined>(undefined),
			intentState: new FormControl<IntentState | null | undefined>(undefined),
			dialogActionType: new FormControl<string | null | undefined>(undefined),
			botResponseAudioVoiceId: new FormControl<string | null | undefined>(undefined),
			slotsFilledInSession: new FormControl<string | null | undefined>(undefined),
			utteranceRequestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum IntentState { Failed = 'Failed', Fulfilled = 'Fulfilled', InProgress = 'InProgress', ReadyForFulfillment = 'ReadyForFulfillment', Waiting = 'Waiting', FulfillmentInProgress = 'FulfillmentInProgress' }


	/** An object that contains a response to the utterance from the bot. */
	export interface UtteranceBotResponse {
		content?: string;
		contentType?: UtteranceContentType;

		/** <p>A card that is shown to the user by a messaging platform. You define the contents of the card, the card is displayed by the platform. </p> <p>When you use a response card, the response from the user is constrained to the text associated with a button on the card.</p> */
		imageResponseCard?: ImageResponseCard;
	}

	/** An object that contains a response to the utterance from the bot. */
	export interface UtteranceBotResponseFormProperties {
		content: FormControl<string | null | undefined>,
		contentType: FormControl<UtteranceContentType | null | undefined>,
	}
	export function CreateUtteranceBotResponseFormGroup() {
		return new FormGroup<UtteranceBotResponseFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			contentType: new FormControl<UtteranceContentType | null | undefined>(undefined),
		});

	}

	export enum UtteranceContentType { PlainText = 'PlainText', CustomPayload = 'CustomPayload', SSML = 'SSML', ImageResponseCard = 'ImageResponseCard' }

	export enum AnalyticsUtteranceSortByName { UtteranceTimestamp = 'UtteranceTimestamp' }


	/** <p>Contains fields describing a condition by which to filter the utterances. The expression may be understood as <code>name</code> <code>operator</code> <code>values</code>. For example:</p> <ul> <li> <p> <code>LocaleId EQ Book</code> – The locale is the string "en".</p> </li> <li> <p> <code>UtteranceText CO help</code> – The text of the utterance contains the string "help".</p> </li> </ul> <p>The operators that each filter supports are listed below:</p> <ul> <li> <p> <code>BotAlias</code> – <code>EQ</code>.</p> </li> <li> <p> <code>BotVersion</code> – <code>EQ</code>.</p> </li> <li> <p> <code>LocaleId</code> – <code>EQ</code>.</p> </li> <li> <p> <code>Modality</code> – <code>EQ</code>.</p> </li> <li> <p> <code>Channel</code> – <code>EQ</code>.</p> </li> <li> <p> <code>SessionId</code> – <code>EQ</code>.</p> </li> <li> <p> <code>OriginatingRequestId</code> – <code>EQ</code>.</p> </li> <li> <p> <code>UtteranceState</code> – <code>EQ</code>.</p> </li> <li> <p> <code>UtteranceText</code> – <code>EQ</code>, <code>CO</code>.</p> </li> </ul> */
	export interface AnalyticsUtteranceFilter {

		/** Required */
		name: AnalyticsUtteranceFilterName;

		/** Required */
		operator: AnalyticsFilterOperator;

		/** Required */
		values: Array<string>;
	}

	/** <p>Contains fields describing a condition by which to filter the utterances. The expression may be understood as <code>name</code> <code>operator</code> <code>values</code>. For example:</p> <ul> <li> <p> <code>LocaleId EQ Book</code> – The locale is the string "en".</p> </li> <li> <p> <code>UtteranceText CO help</code> – The text of the utterance contains the string "help".</p> </li> </ul> <p>The operators that each filter supports are listed below:</p> <ul> <li> <p> <code>BotAlias</code> – <code>EQ</code>.</p> </li> <li> <p> <code>BotVersion</code> – <code>EQ</code>.</p> </li> <li> <p> <code>LocaleId</code> – <code>EQ</code>.</p> </li> <li> <p> <code>Modality</code> – <code>EQ</code>.</p> </li> <li> <p> <code>Channel</code> – <code>EQ</code>.</p> </li> <li> <p> <code>SessionId</code> – <code>EQ</code>.</p> </li> <li> <p> <code>OriginatingRequestId</code> – <code>EQ</code>.</p> </li> <li> <p> <code>UtteranceState</code> – <code>EQ</code>.</p> </li> <li> <p> <code>UtteranceText</code> – <code>EQ</code>, <code>CO</code>.</p> </li> </ul> */
	export interface AnalyticsUtteranceFilterFormProperties {

		/** Required */
		name: FormControl<AnalyticsUtteranceFilterName | null | undefined>,

		/** Required */
		operator: FormControl<AnalyticsFilterOperator | null | undefined>,
	}
	export function CreateAnalyticsUtteranceFilterFormGroup() {
		return new FormGroup<AnalyticsUtteranceFilterFormProperties>({
			name: new FormControl<AnalyticsUtteranceFilterName | null | undefined>(undefined, [Validators.required]),
			operator: new FormControl<AnalyticsFilterOperator | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AnalyticsUtteranceFilterName { BotAliasId = 'BotAliasId', BotVersion = 'BotVersion', LocaleId = 'LocaleId', Modality = 'Modality', Channel = 'Channel', SessionId = 'SessionId', OriginatingRequestId = 'OriginatingRequestId', UtteranceState = 'UtteranceState', UtteranceText = 'UtteranceText' }

	export interface ListUtteranceMetricsResponse {
		botId?: string;
		results?: Array<AnalyticsUtteranceResult>;
		nextToken?: string;
	}
	export interface ListUtteranceMetricsResponseFormProperties {
		botId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUtteranceMetricsResponseFormGroup() {
		return new FormGroup<ListUtteranceMetricsResponseFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object containing the results for the utterance metrics you requested and the bin and/or group(s) they refer to, if applicable. */
	export interface AnalyticsUtteranceResult {
		binKeys?: Array<AnalyticsBinKey>;
		groupByKeys?: Array<AnalyticsUtteranceGroupByKey>;
		metricsResults?: Array<AnalyticsUtteranceMetricResult>;
		attributeResults?: Array<AnalyticsUtteranceAttributeResult>;
	}

	/** An object containing the results for the utterance metrics you requested and the bin and/or group(s) they refer to, if applicable. */
	export interface AnalyticsUtteranceResultFormProperties {
	}
	export function CreateAnalyticsUtteranceResultFormGroup() {
		return new FormGroup<AnalyticsUtteranceResultFormProperties>({
		});

	}


	/** Contains the category by which the utterance analytics were grouped and the values for that category. */
	export interface AnalyticsUtteranceGroupByKey {
		name?: AnalyticsUtteranceField;
		value?: string;
	}

	/** Contains the category by which the utterance analytics were grouped and the values for that category. */
	export interface AnalyticsUtteranceGroupByKeyFormProperties {
		name: FormControl<AnalyticsUtteranceField | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateAnalyticsUtteranceGroupByKeyFormGroup() {
		return new FormGroup<AnalyticsUtteranceGroupByKeyFormProperties>({
			name: new FormControl<AnalyticsUtteranceField | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AnalyticsUtteranceField { UtteranceText = 'UtteranceText', UtteranceState = 'UtteranceState' }


	/** An object containing the results for the utterance metric you requested. */
	export interface AnalyticsUtteranceMetricResult {
		name?: AnalyticsUtteranceMetricName;
		statistic?: AnalyticsMetricStatistic;
		value?: number | null;
	}

	/** An object containing the results for the utterance metric you requested. */
	export interface AnalyticsUtteranceMetricResultFormProperties {
		name: FormControl<AnalyticsUtteranceMetricName | null | undefined>,
		statistic: FormControl<AnalyticsMetricStatistic | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateAnalyticsUtteranceMetricResultFormGroup() {
		return new FormGroup<AnalyticsUtteranceMetricResultFormProperties>({
			name: new FormControl<AnalyticsUtteranceMetricName | null | undefined>(undefined),
			statistic: new FormControl<AnalyticsMetricStatistic | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AnalyticsUtteranceMetricName { Count = 'Count', Missed = 'Missed', Detected = 'Detected', UtteranceTimestamp = 'UtteranceTimestamp' }


	/** An object containing the intent that the bot mapped the utterance to. */
	export interface AnalyticsUtteranceAttributeResult {
		lastUsedIntent?: string;
	}

	/** An object containing the intent that the bot mapped the utterance to. */
	export interface AnalyticsUtteranceAttributeResultFormProperties {
		lastUsedIntent: FormControl<string | null | undefined>,
	}
	export function CreateAnalyticsUtteranceAttributeResultFormGroup() {
		return new FormGroup<AnalyticsUtteranceAttributeResultFormProperties>({
			lastUsedIntent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the metric and the summary statistic you want to calculate, and the order in which to sort the results, for the utterances across the user sessions with the bot. */
	export interface AnalyticsUtteranceMetric {

		/** Required */
		name: AnalyticsUtteranceMetricName;

		/** Required */
		statistic: AnalyticsMetricStatistic;
		order?: SortOrder;
	}

	/** Contains the metric and the summary statistic you want to calculate, and the order in which to sort the results, for the utterances across the user sessions with the bot. */
	export interface AnalyticsUtteranceMetricFormProperties {

		/** Required */
		name: FormControl<AnalyticsUtteranceMetricName | null | undefined>,

		/** Required */
		statistic: FormControl<AnalyticsMetricStatistic | null | undefined>,
		order: FormControl<SortOrder | null | undefined>,
	}
	export function CreateAnalyticsUtteranceMetricFormGroup() {
		return new FormGroup<AnalyticsUtteranceMetricFormProperties>({
			name: new FormControl<AnalyticsUtteranceMetricName | null | undefined>(undefined, [Validators.required]),
			statistic: new FormControl<AnalyticsMetricStatistic | null | undefined>(undefined, [Validators.required]),
			order: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}


	/** Contains the category by which to group the utterances. */
	export interface AnalyticsUtteranceGroupBySpecification {

		/** Required */
		name: AnalyticsUtteranceField;
	}

	/** Contains the category by which to group the utterances. */
	export interface AnalyticsUtteranceGroupBySpecificationFormProperties {

		/** Required */
		name: FormControl<AnalyticsUtteranceField | null | undefined>,
	}
	export function CreateAnalyticsUtteranceGroupBySpecificationFormGroup() {
		return new FormGroup<AnalyticsUtteranceGroupBySpecificationFormProperties>({
			name: new FormControl<AnalyticsUtteranceField | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that specifies the last used intent at the time of the utterance as an attribute to return. */
	export interface AnalyticsUtteranceAttribute {

		/** Required */
		name: AnalyticsUtteranceAttributeName;
	}

	/** An object that specifies the last used intent at the time of the utterance as an attribute to return. */
	export interface AnalyticsUtteranceAttributeFormProperties {

		/** Required */
		name: FormControl<AnalyticsUtteranceAttributeName | null | undefined>,
	}
	export function CreateAnalyticsUtteranceAttributeFormGroup() {
		return new FormGroup<AnalyticsUtteranceAttributeFormProperties>({
			name: new FormControl<AnalyticsUtteranceAttributeName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AnalyticsUtteranceAttributeName { LastUsedIntent = 'LastUsedIntent' }

	export interface SearchAssociatedTranscriptsResponse {
		botId?: string;
		botVersion?: string;
		localeId?: string;
		botRecommendationId?: string;
		nextIndex?: number | null;
		associatedTranscripts?: Array<AssociatedTranscript>;
		totalResults?: number | null;
	}
	export interface SearchAssociatedTranscriptsResponseFormProperties {
		botId: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,
		localeId: FormControl<string | null | undefined>,
		botRecommendationId: FormControl<string | null | undefined>,
		nextIndex: FormControl<number | null | undefined>,
		totalResults: FormControl<number | null | undefined>,
	}
	export function CreateSearchAssociatedTranscriptsResponseFormGroup() {
		return new FormGroup<SearchAssociatedTranscriptsResponseFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
			localeId: new FormControl<string | null | undefined>(undefined),
			botRecommendationId: new FormControl<string | null | undefined>(undefined),
			nextIndex: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The object containing information that associates the recommended intent/slot type with a conversation. */
	export interface AssociatedTranscript {
		transcript?: string;
	}

	/** The object containing information that associates the recommended intent/slot type with a conversation. */
	export interface AssociatedTranscriptFormProperties {
		transcript: FormControl<string | null | undefined>,
	}
	export function CreateAssociatedTranscriptFormGroup() {
		return new FormGroup<AssociatedTranscriptFormProperties>({
			transcript: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Filters to search for the associated transcript. */
	export interface AssociatedTranscriptFilter {

		/** Required */
		name: AssociatedTranscriptFilterName;

		/** Required */
		values: Array<string>;
	}

	/** Filters to search for the associated transcript. */
	export interface AssociatedTranscriptFilterFormProperties {

		/** Required */
		name: FormControl<AssociatedTranscriptFilterName | null | undefined>,
	}
	export function CreateAssociatedTranscriptFilterFormGroup() {
		return new FormGroup<AssociatedTranscriptFilterFormProperties>({
			name: new FormControl<AssociatedTranscriptFilterName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AssociatedTranscriptFilterName { IntentId = 'IntentId', SlotTypeId = 'SlotTypeId' }

	export interface StartBotRecommendationResponse {
		botId?: string;
		botVersion?: string;
		localeId?: string;
		botRecommendationStatus?: BotRecommendationStatus;
		botRecommendationId?: string;
		creationDateTime?: Date;
		transcriptSourceSetting?: TranscriptSourceSetting;
		encryptionSetting?: EncryptionSetting;
	}
	export interface StartBotRecommendationResponseFormProperties {
		botId: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,
		localeId: FormControl<string | null | undefined>,
		botRecommendationStatus: FormControl<BotRecommendationStatus | null | undefined>,
		botRecommendationId: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateStartBotRecommendationResponseFormGroup() {
		return new FormGroup<StartBotRecommendationResponseFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
			localeId: new FormControl<string | null | undefined>(undefined),
			botRecommendationStatus: new FormControl<BotRecommendationStatus | null | undefined>(undefined),
			botRecommendationId: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface StartImportResponse {
		importId?: string;
		resourceSpecification?: ImportResourceSpecification;
		mergeStrategy?: MergeStrategy;
		importStatus?: ExportStatus;
		creationDateTime?: Date;
	}
	export interface StartImportResponseFormProperties {
		importId: FormControl<string | null | undefined>,
		mergeStrategy: FormControl<MergeStrategy | null | undefined>,
		importStatus: FormControl<ExportStatus | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateStartImportResponseFormGroup() {
		return new FormGroup<StartImportResponseFormProperties>({
			importId: new FormControl<string | null | undefined>(undefined),
			mergeStrategy: new FormControl<MergeStrategy | null | undefined>(undefined),
			importStatus: new FormControl<ExportStatus | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface StartTestExecutionResponse {
		testExecutionId?: string;
		creationDateTime?: Date;
		testSetId?: string;
		target?: TestExecutionTarget;
		apiMode?: TestExecutionApiMode;
		testExecutionModality?: TestSetModality;
	}
	export interface StartTestExecutionResponseFormProperties {
		testExecutionId: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		testSetId: FormControl<string | null | undefined>,
		apiMode: FormControl<TestExecutionApiMode | null | undefined>,
		testExecutionModality: FormControl<TestSetModality | null | undefined>,
	}
	export function CreateStartTestExecutionResponseFormGroup() {
		return new FormGroup<StartTestExecutionResponseFormProperties>({
			testExecutionId: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			testSetId: new FormControl<string | null | undefined>(undefined),
			apiMode: new FormControl<TestExecutionApiMode | null | undefined>(undefined),
			testExecutionModality: new FormControl<TestSetModality | null | undefined>(undefined),
		});

	}

	export interface StartTestSetGenerationResponse {
		testSetGenerationId?: string;
		creationDateTime?: Date;
		testSetGenerationStatus?: TestSetGenerationStatus;
		testSetName?: string;
		description?: string;
		storageLocation?: TestSetStorageLocation;
		generationDataSource?: TestSetGenerationDataSource;
		roleArn?: string;
		testSetTags?: TagMap;
	}
	export interface StartTestSetGenerationResponseFormProperties {
		testSetGenerationId: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		testSetGenerationStatus: FormControl<TestSetGenerationStatus | null | undefined>,
		testSetName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateStartTestSetGenerationResponseFormGroup() {
		return new FormGroup<StartTestSetGenerationResponseFormProperties>({
			testSetGenerationId: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			testSetGenerationStatus: new FormControl<TestSetGenerationStatus | null | undefined>(undefined),
			testSetName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StopBotRecommendationResponse {
		botId?: string;
		botVersion?: string;
		localeId?: string;
		botRecommendationStatus?: BotRecommendationStatus;
		botRecommendationId?: string;
	}
	export interface StopBotRecommendationResponseFormProperties {
		botId: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,
		localeId: FormControl<string | null | undefined>,
		botRecommendationStatus: FormControl<BotRecommendationStatus | null | undefined>,
		botRecommendationId: FormControl<string | null | undefined>,
	}
	export function CreateStopBotRecommendationResponseFormGroup() {
		return new FormGroup<StopBotRecommendationResponseFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
			localeId: new FormControl<string | null | undefined>(undefined),
			botRecommendationStatus: new FormControl<BotRecommendationStatus | null | undefined>(undefined),
			botRecommendationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourceResponse {
	}
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export interface UpdateBotResponse {
		botId?: string;
		botName?: string;
		description?: string;
		roleArn?: string;
		dataPrivacy?: DataPrivacy;
		idleSessionTTLInSeconds?: number | null;
		botStatus?: BotStatus;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
		botType?: BotType;
		botMembers?: Array<BotMember>;
	}
	export interface UpdateBotResponseFormProperties {
		botId: FormControl<string | null | undefined>,
		botName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
		idleSessionTTLInSeconds: FormControl<number | null | undefined>,
		botStatus: FormControl<BotStatus | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		botType: FormControl<BotType | null | undefined>,
	}
	export function CreateUpdateBotResponseFormGroup() {
		return new FormGroup<UpdateBotResponseFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined),
			botName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
			idleSessionTTLInSeconds: new FormControl<number | null | undefined>(undefined),
			botStatus: new FormControl<BotStatus | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			botType: new FormControl<BotType | null | undefined>(undefined),
		});

	}

	export interface UpdateBotAliasResponse {
		botAliasId?: string;
		botAliasName?: string;
		description?: string;
		botVersion?: string;
		botAliasLocaleSettings?: BotAliasLocaleSettingsMap;
		conversationLogSettings?: ConversationLogSettings;

		/** Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances. */
		sentimentAnalysisSettings?: SentimentAnalysisSettings;
		botAliasStatus?: BotAliasStatus;
		botId?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
	}
	export interface UpdateBotAliasResponseFormProperties {
		botAliasId: FormControl<string | null | undefined>,
		botAliasName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,
		botAliasStatus: FormControl<BotAliasStatus | null | undefined>,
		botId: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateBotAliasResponseFormGroup() {
		return new FormGroup<UpdateBotAliasResponseFormProperties>({
			botAliasId: new FormControl<string | null | undefined>(undefined),
			botAliasName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
			botAliasStatus: new FormControl<BotAliasStatus | null | undefined>(undefined),
			botId: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface UpdateBotLocaleResponse {
		botId?: string;
		botVersion?: string;
		localeId?: string;
		localeName?: string;
		description?: string;
		nluIntentConfidenceThreshold?: number | null;
		voiceSettings?: VoiceSettings;
		botLocaleStatus?: BotLocaleStatus;
		failureReasons?: Array<string>;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
		recommendedActions?: Array<string>;
	}
	export interface UpdateBotLocaleResponseFormProperties {
		botId: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,
		localeId: FormControl<string | null | undefined>,
		localeName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		nluIntentConfidenceThreshold: FormControl<number | null | undefined>,
		botLocaleStatus: FormControl<BotLocaleStatus | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateBotLocaleResponseFormGroup() {
		return new FormGroup<UpdateBotLocaleResponseFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
			localeId: new FormControl<string | null | undefined>(undefined),
			localeName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			nluIntentConfidenceThreshold: new FormControl<number | null | undefined>(undefined),
			botLocaleStatus: new FormControl<BotLocaleStatus | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface UpdateBotRecommendationResponse {
		botId?: string;
		botVersion?: string;
		localeId?: string;
		botRecommendationStatus?: BotRecommendationStatus;
		botRecommendationId?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
		transcriptSourceSetting?: TranscriptSourceSetting;
		encryptionSetting?: EncryptionSetting;
	}
	export interface UpdateBotRecommendationResponseFormProperties {
		botId: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,
		localeId: FormControl<string | null | undefined>,
		botRecommendationStatus: FormControl<BotRecommendationStatus | null | undefined>,
		botRecommendationId: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateBotRecommendationResponseFormGroup() {
		return new FormGroup<UpdateBotRecommendationResponseFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
			localeId: new FormControl<string | null | undefined>(undefined),
			botRecommendationStatus: new FormControl<BotRecommendationStatus | null | undefined>(undefined),
			botRecommendationId: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface UpdateExportResponse {
		exportId?: string;
		resourceSpecification?: ExportResourceSpecification;
		fileFormat?: ImportExportFileFormat;
		exportStatus?: ExportStatus;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
	}
	export interface UpdateExportResponseFormProperties {
		exportId: FormControl<string | null | undefined>,
		fileFormat: FormControl<ImportExportFileFormat | null | undefined>,
		exportStatus: FormControl<ExportStatus | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateExportResponseFormGroup() {
		return new FormGroup<UpdateExportResponseFormProperties>({
			exportId: new FormControl<string | null | undefined>(undefined),
			fileFormat: new FormControl<ImportExportFileFormat | null | undefined>(undefined),
			exportStatus: new FormControl<ExportStatus | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface UpdateIntentResponse {
		intentId?: string;
		intentName?: string;
		description?: string;
		parentIntentSignature?: string;
		sampleUtterances?: Array<SampleUtterance>;
		dialogCodeHook?: DialogCodeHookSettings;
		fulfillmentCodeHook?: FulfillmentCodeHookSettings;
		slotPriorities?: Array<SlotPriority>;
		intentConfirmationSetting?: IntentConfirmationSetting;
		intentClosingSetting?: IntentClosingSetting;
		inputContexts?: Array<InputContext>;
		outputContexts?: Array<OutputContext>;
		kendraConfiguration?: KendraConfiguration;
		botId?: string;
		botVersion?: string;
		localeId?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
		initialResponseSetting?: InitialResponseSetting;
	}
	export interface UpdateIntentResponseFormProperties {
		intentId: FormControl<string | null | undefined>,
		intentName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		parentIntentSignature: FormControl<string | null | undefined>,
		botId: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,
		localeId: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateIntentResponseFormGroup() {
		return new FormGroup<UpdateIntentResponseFormProperties>({
			intentId: new FormControl<string | null | undefined>(undefined),
			intentName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			parentIntentSignature: new FormControl<string | null | undefined>(undefined),
			botId: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
			localeId: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface UpdateResourcePolicyResponse {
		resourceArn?: string;
		revisionId?: string;
	}
	export interface UpdateResourcePolicyResponseFormProperties {
		resourceArn: FormControl<string | null | undefined>,
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateResourcePolicyResponseFormGroup() {
		return new FormGroup<UpdateResourcePolicyResponseFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSlotResponse {
		slotId?: string;
		slotName?: string;
		description?: string;
		slotTypeId?: string;
		valueElicitationSetting?: SlotValueElicitationSetting;
		obfuscationSetting?: ObfuscationSetting;
		botId?: string;
		botVersion?: string;
		localeId?: string;
		intentId?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
		multipleValuesSetting?: MultipleValuesSetting;
		subSlotSetting?: SubSlotSetting;
	}
	export interface UpdateSlotResponseFormProperties {
		slotId: FormControl<string | null | undefined>,
		slotName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		slotTypeId: FormControl<string | null | undefined>,
		botId: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,
		localeId: FormControl<string | null | undefined>,
		intentId: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateSlotResponseFormGroup() {
		return new FormGroup<UpdateSlotResponseFormProperties>({
			slotId: new FormControl<string | null | undefined>(undefined),
			slotName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			slotTypeId: new FormControl<string | null | undefined>(undefined),
			botId: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
			localeId: new FormControl<string | null | undefined>(undefined),
			intentId: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface UpdateSlotTypeResponse {
		slotTypeId?: string;
		slotTypeName?: string;
		description?: string;
		slotTypeValues?: Array<SlotTypeValue>;
		valueSelectionSetting?: SlotValueSelectionSetting;
		parentSlotTypeSignature?: string;
		botId?: string;
		botVersion?: string;
		localeId?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;

		/** Provides information about the external source of the slot type's definition. */
		externalSourceSetting?: ExternalSourceSetting;
		compositeSlotTypeSetting?: CompositeSlotTypeSetting;
	}
	export interface UpdateSlotTypeResponseFormProperties {
		slotTypeId: FormControl<string | null | undefined>,
		slotTypeName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		parentSlotTypeSignature: FormControl<string | null | undefined>,
		botId: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,
		localeId: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateSlotTypeResponseFormGroup() {
		return new FormGroup<UpdateSlotTypeResponseFormProperties>({
			slotTypeId: new FormControl<string | null | undefined>(undefined),
			slotTypeName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			parentSlotTypeSignature: new FormControl<string | null | undefined>(undefined),
			botId: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
			localeId: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface UpdateTestSetResponse {
		testSetId?: string;
		testSetName?: string;
		description?: string;
		modality?: TestSetModality;
		status?: TestSetStatus;
		roleArn?: string;
		numTurns?: number | null;
		storageLocation?: TestSetStorageLocation;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
	}
	export interface UpdateTestSetResponseFormProperties {
		testSetId: FormControl<string | null | undefined>,
		testSetName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		modality: FormControl<TestSetModality | null | undefined>,
		status: FormControl<TestSetStatus | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
		numTurns: FormControl<number | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateTestSetResponseFormGroup() {
		return new FormGroup<UpdateTestSetResponseFormProperties>({
			testSetId: new FormControl<string | null | undefined>(undefined),
			testSetName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			modality: new FormControl<TestSetModality | null | undefined>(undefined),
			status: new FormControl<TestSetStatus | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
			numTurns: new FormControl<number | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Specifies attributes for sorting a list of utterances. */
	export interface AggregatedUtterancesSortBy {

		/** Required */
		attribute: AggregatedUtterancesSortAttribute;

		/** Required */
		order: SortOrder;
	}

	/** Specifies attributes for sorting a list of utterances. */
	export interface AggregatedUtterancesSortByFormProperties {

		/** Required */
		attribute: FormControl<AggregatedUtterancesSortAttribute | null | undefined>,

		/** Required */
		order: FormControl<SortOrder | null | undefined>,
	}
	export function CreateAggregatedUtterancesSortByFormGroup() {
		return new FormGroup<AggregatedUtterancesSortByFormProperties>({
			attribute: new FormControl<AggregatedUtterancesSortAttribute | null | undefined>(undefined, [Validators.required]),
			order: new FormControl<SortOrder | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies the allowed input types. */
	export interface AllowedInputTypes {

		/** Required */
		allowAudioInput: boolean;

		/** Required */
		allowDTMFInput: boolean;
	}

	/** Specifies the allowed input types. */
	export interface AllowedInputTypesFormProperties {

		/** Required */
		allowAudioInput: FormControl<boolean | null | undefined>,

		/** Required */
		allowDTMFInput: FormControl<boolean | null | undefined>,
	}
	export function CreateAllowedInputTypesFormGroup() {
		return new FormGroup<AllowedInputTypesFormProperties>({
			allowAudioInput: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			allowDTMFInput: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies the audio input specifications. */
	export interface AudioSpecification {

		/** Required */
		maxLengthMs: number;

		/** Required */
		endTimeoutMs: number;
	}

	/** Specifies the audio input specifications. */
	export interface AudioSpecificationFormProperties {

		/** Required */
		maxLengthMs: FormControl<number | null | undefined>,

		/** Required */
		endTimeoutMs: FormControl<number | null | undefined>,
	}
	export function CreateAudioSpecificationFormGroup() {
		return new FormGroup<AudioSpecificationFormProperties>({
			maxLengthMs: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			endTimeoutMs: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies the DTMF input specifications. */
	export interface DTMFSpecification {

		/** Required */
		maxLength: number;

		/** Required */
		endTimeoutMs: number;

		/** Required */
		deletionCharacter: string;

		/** Required */
		endCharacter: string;
	}

	/** Specifies the DTMF input specifications. */
	export interface DTMFSpecificationFormProperties {

		/** Required */
		maxLength: FormControl<number | null | undefined>,

		/** Required */
		endTimeoutMs: FormControl<number | null | undefined>,

		/** Required */
		deletionCharacter: FormControl<string | null | undefined>,

		/** Required */
		endCharacter: FormControl<string | null | undefined>,
	}
	export function CreateDTMFSpecificationFormGroup() {
		return new FormGroup<DTMFSpecificationFormProperties>({
			maxLength: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			endTimeoutMs: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			deletionCharacter: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			endCharacter: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies the audio and DTMF input specification. */
	export interface AudioAndDTMFInputSpecification {

		/** Required */
		startTimeoutMs: number;
		audioSpecification?: AudioSpecification;
		dtmfSpecification?: DTMFSpecification;
	}

	/** Specifies the audio and DTMF input specification. */
	export interface AudioAndDTMFInputSpecificationFormProperties {

		/** Required */
		startTimeoutMs: FormControl<number | null | undefined>,
	}
	export function CreateAudioAndDTMFInputSpecificationFormGroup() {
		return new FormGroup<AudioAndDTMFInputSpecificationFormProperties>({
			startTimeoutMs: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BatchCreateCustomVocabularyItemRequest {

		/** Required */
		customVocabularyItemList: Array<NewCustomVocabularyItem>;
	}
	export interface BatchCreateCustomVocabularyItemRequestFormProperties {
	}
	export function CreateBatchCreateCustomVocabularyItemRequestFormGroup() {
		return new FormGroup<BatchCreateCustomVocabularyItemRequestFormProperties>({
		});

	}

	export interface BatchDeleteCustomVocabularyItemRequest {

		/** Required */
		customVocabularyItemList: Array<CustomVocabularyEntryId>;
	}
	export interface BatchDeleteCustomVocabularyItemRequestFormProperties {
	}
	export function CreateBatchDeleteCustomVocabularyItemRequestFormGroup() {
		return new FormGroup<BatchDeleteCustomVocabularyItemRequestFormProperties>({
		});

	}

	export interface BatchUpdateCustomVocabularyItemRequest {

		/** Required */
		customVocabularyItemList: Array<CustomVocabularyItem>;
	}
	export interface BatchUpdateCustomVocabularyItemRequestFormProperties {
	}
	export function CreateBatchUpdateCustomVocabularyItemRequestFormGroup() {
		return new FormGroup<BatchUpdateCustomVocabularyItemRequestFormProperties>({
		});

	}

	export enum BotLocaleFilterName { BotLocaleName = 'BotLocaleName' }

	export enum BotLocaleFilterOperator { CO = 'CO', EQ = 'EQ' }


	/** Specifies attributes for sorting a list of bot locales. */
	export interface BotLocaleSortBy {

		/** Required */
		attribute: BotLocaleSortAttribute;

		/** Required */
		order: SortOrder;
	}

	/** Specifies attributes for sorting a list of bot locales. */
	export interface BotLocaleSortByFormProperties {

		/** Required */
		attribute: FormControl<BotLocaleSortAttribute | null | undefined>,

		/** Required */
		order: FormControl<SortOrder | null | undefined>,
	}
	export function CreateBotLocaleSortByFormGroup() {
		return new FormGroup<BotLocaleSortByFormProperties>({
			attribute: new FormControl<BotLocaleSortAttribute | null | undefined>(undefined, [Validators.required]),
			order: new FormControl<SortOrder | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies attributes for sorting a list of bots. */
	export interface BotSortBy {

		/** Required */
		attribute: BotSortAttribute;

		/** Required */
		order: SortOrder;
	}

	/** Specifies attributes for sorting a list of bots. */
	export interface BotSortByFormProperties {

		/** Required */
		attribute: FormControl<BotSortAttribute | null | undefined>,

		/** Required */
		order: FormControl<SortOrder | null | undefined>,
	}
	export function CreateBotSortByFormGroup() {
		return new FormGroup<BotSortByFormProperties>({
			attribute: new FormControl<BotSortAttribute | null | undefined>(undefined, [Validators.required]),
			order: new FormControl<SortOrder | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies attributes for sorting a list of bot versions. */
	export interface BotVersionSortBy {

		/** Required */
		attribute: BotVersionSortAttribute;

		/** Required */
		order: SortOrder;
	}

	/** Specifies attributes for sorting a list of bot versions. */
	export interface BotVersionSortByFormProperties {

		/** Required */
		attribute: FormControl<BotVersionSortAttribute | null | undefined>,

		/** Required */
		order: FormControl<SortOrder | null | undefined>,
	}
	export function CreateBotVersionSortByFormGroup() {
		return new FormGroup<BotVersionSortByFormProperties>({
			attribute: new FormControl<BotVersionSortAttribute | null | undefined>(undefined, [Validators.required]),
			order: new FormControl<SortOrder | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BuildBotLocaleRequest {
	}
	export interface BuildBotLocaleRequestFormProperties {
	}
	export function CreateBuildBotLocaleRequestFormGroup() {
		return new FormGroup<BuildBotLocaleRequestFormProperties>({
		});

	}


	/** Specifies attributes for sorting a list of built-in intents. */
	export interface BuiltInIntentSortBy {

		/** Required */
		attribute: BuiltInIntentSortAttribute;

		/** Required */
		order: SortOrder;
	}

	/** Specifies attributes for sorting a list of built-in intents. */
	export interface BuiltInIntentSortByFormProperties {

		/** Required */
		attribute: FormControl<BuiltInIntentSortAttribute | null | undefined>,

		/** Required */
		order: FormControl<SortOrder | null | undefined>,
	}
	export function CreateBuiltInIntentSortByFormGroup() {
		return new FormGroup<BuiltInIntentSortByFormProperties>({
			attribute: new FormControl<BuiltInIntentSortAttribute | null | undefined>(undefined, [Validators.required]),
			order: new FormControl<SortOrder | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies attributes for sorting a list of built-in slot types. */
	export interface BuiltInSlotTypeSortBy {

		/** Required */
		attribute: BuiltInSlotTypeSortAttribute;

		/** Required */
		order: SortOrder;
	}

	/** Specifies attributes for sorting a list of built-in slot types. */
	export interface BuiltInSlotTypeSortByFormProperties {

		/** Required */
		attribute: FormControl<BuiltInSlotTypeSortAttribute | null | undefined>,

		/** Required */
		order: FormControl<SortOrder | null | undefined>,
	}
	export function CreateBuiltInSlotTypeSortByFormGroup() {
		return new FormGroup<BuiltInSlotTypeSortByFormProperties>({
			attribute: new FormControl<BuiltInSlotTypeSortAttribute | null | undefined>(undefined, [Validators.required]),
			order: new FormControl<SortOrder | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConditionMap {
	}
	export interface ConditionMapFormProperties {
	}
	export function CreateConditionMapFormGroup() {
		return new FormGroup<ConditionMapFormProperties>({
		});

	}

	export interface CreateBotAliasRequest {

		/** Required */
		botAliasName: string;
		description?: string;
		botVersion?: string;
		botAliasLocaleSettings?: BotAliasLocaleSettingsMap;
		conversationLogSettings?: ConversationLogSettings;

		/** Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances. */
		sentimentAnalysisSettings?: SentimentAnalysisSettings;
		tags?: TagMap;
	}
	export interface CreateBotAliasRequestFormProperties {

		/** Required */
		botAliasName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateBotAliasRequestFormGroup() {
		return new FormGroup<CreateBotAliasRequestFormProperties>({
			botAliasName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateBotLocaleRequest {

		/** Required */
		localeId: string;
		description?: string;

		/** Required */
		nluIntentConfidenceThreshold: number;
		voiceSettings?: VoiceSettings;
	}
	export interface CreateBotLocaleRequestFormProperties {

		/** Required */
		localeId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		nluIntentConfidenceThreshold: FormControl<number | null | undefined>,
	}
	export function CreateCreateBotLocaleRequestFormGroup() {
		return new FormGroup<CreateBotLocaleRequestFormProperties>({
			localeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			nluIntentConfidenceThreshold: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateBotRequest {

		/** Required */
		botName: string;
		description?: string;

		/** Required */
		roleArn: string;

		/** Required */
		dataPrivacy: DataPrivacy;

		/** Required */
		idleSessionTTLInSeconds: number;
		botTags?: TagMap;
		testBotAliasTags?: TagMap;
		botType?: BotType;
		botMembers?: Array<BotMember>;
	}
	export interface CreateBotRequestFormProperties {

		/** Required */
		botName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,

		/** Required */
		idleSessionTTLInSeconds: FormControl<number | null | undefined>,
		botType: FormControl<BotType | null | undefined>,
	}
	export function CreateCreateBotRequestFormGroup() {
		return new FormGroup<CreateBotRequestFormProperties>({
			botName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			idleSessionTTLInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			botType: new FormControl<BotType | null | undefined>(undefined),
		});

	}

	export interface CreateBotVersionRequest {
		description?: string;

		/** Required */
		botVersionLocaleSpecification: BotVersionLocaleSpecification;
	}
	export interface CreateBotVersionRequestFormProperties {
		description: FormControl<string | null | undefined>,
	}
	export function CreateCreateBotVersionRequestFormGroup() {
		return new FormGroup<CreateBotVersionRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateExportRequest {

		/** Required */
		resourceSpecification: ExportResourceSpecification;

		/** Required */
		fileFormat: ImportExportFileFormat;
		filePassword?: string;
	}
	export interface CreateExportRequestFormProperties {

		/** Required */
		fileFormat: FormControl<ImportExportFileFormat | null | undefined>,
		filePassword: FormControl<string | null | undefined>,
	}
	export function CreateCreateExportRequestFormGroup() {
		return new FormGroup<CreateExportRequestFormProperties>({
			fileFormat: new FormControl<ImportExportFileFormat | null | undefined>(undefined, [Validators.required]),
			filePassword: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateIntentRequest {

		/** Required */
		intentName: string;
		description?: string;
		parentIntentSignature?: string;
		sampleUtterances?: Array<SampleUtterance>;
		dialogCodeHook?: DialogCodeHookSettings;
		fulfillmentCodeHook?: FulfillmentCodeHookSettings;
		intentConfirmationSetting?: IntentConfirmationSetting;
		intentClosingSetting?: IntentClosingSetting;
		inputContexts?: Array<InputContext>;
		outputContexts?: Array<OutputContext>;
		kendraConfiguration?: KendraConfiguration;
		initialResponseSetting?: InitialResponseSetting;
	}
	export interface CreateIntentRequestFormProperties {

		/** Required */
		intentName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		parentIntentSignature: FormControl<string | null | undefined>,
	}
	export function CreateCreateIntentRequestFormGroup() {
		return new FormGroup<CreateIntentRequestFormProperties>({
			intentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			parentIntentSignature: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateResourcePolicyRequest {

		/** Required */
		policy: string;
	}
	export interface CreateResourcePolicyRequestFormProperties {

		/** Required */
		policy: FormControl<string | null | undefined>,
	}
	export function CreateCreateResourcePolicyRequestFormGroup() {
		return new FormGroup<CreateResourcePolicyRequestFormProperties>({
			policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Effect { Allow = 'Allow', Deny = 'Deny' }

	export interface CreateResourcePolicyStatementRequest {

		/** Required */
		statementId: string;

		/** Required */
		effect: Effect;

		/** Required */
		principal: Array<Principal>;

		/** Required */
		action: Array<string>;
		condition?: ConditionMap;
	}
	export interface CreateResourcePolicyStatementRequestFormProperties {

		/** Required */
		statementId: FormControl<string | null | undefined>,

		/** Required */
		effect: FormControl<Effect | null | undefined>,
	}
	export function CreateCreateResourcePolicyStatementRequestFormGroup() {
		return new FormGroup<CreateResourcePolicyStatementRequestFormProperties>({
			statementId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			effect: new FormControl<Effect | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateSlotRequest {

		/** Required */
		slotName: string;
		description?: string;
		slotTypeId?: string;

		/** Required */
		valueElicitationSetting: SlotValueElicitationSetting;
		obfuscationSetting?: ObfuscationSetting;
		multipleValuesSetting?: MultipleValuesSetting;
		subSlotSetting?: SubSlotSetting;
	}
	export interface CreateSlotRequestFormProperties {

		/** Required */
		slotName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		slotTypeId: FormControl<string | null | undefined>,
	}
	export function CreateCreateSlotRequestFormGroup() {
		return new FormGroup<CreateSlotRequestFormProperties>({
			slotName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			slotTypeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSlotTypeRequest {

		/** Required */
		slotTypeName: string;
		description?: string;
		slotTypeValues?: Array<SlotTypeValue>;
		valueSelectionSetting?: SlotValueSelectionSetting;
		parentSlotTypeSignature?: string;
		externalSourceSetting?: ExternalSourceSetting;
		compositeSlotTypeSetting?: CompositeSlotTypeSetting;
	}
	export interface CreateSlotTypeRequestFormProperties {

		/** Required */
		slotTypeName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		parentSlotTypeSignature: FormControl<string | null | undefined>,
	}
	export function CreateCreateSlotTypeRequestFormGroup() {
		return new FormGroup<CreateSlotTypeRequestFormProperties>({
			slotTypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			parentSlotTypeSignature: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateTestSetDiscrepancyReportRequest {

		/** Required */
		target: TestSetDiscrepancyReportResourceTarget;
	}
	export interface CreateTestSetDiscrepancyReportRequestFormProperties {
	}
	export function CreateCreateTestSetDiscrepancyReportRequestFormGroup() {
		return new FormGroup<CreateTestSetDiscrepancyReportRequestFormProperties>({
		});

	}

	export interface CreateUploadUrlRequest {
	}
	export interface CreateUploadUrlRequestFormProperties {
	}
	export function CreateCreateUploadUrlRequestFormGroup() {
		return new FormGroup<CreateUploadUrlRequestFormProperties>({
		});

	}

	export interface DeleteBotAliasRequest {
	}
	export interface DeleteBotAliasRequestFormProperties {
	}
	export function CreateDeleteBotAliasRequestFormGroup() {
		return new FormGroup<DeleteBotAliasRequestFormProperties>({
		});

	}

	export interface DeleteBotLocaleRequest {
	}
	export interface DeleteBotLocaleRequestFormProperties {
	}
	export function CreateDeleteBotLocaleRequestFormGroup() {
		return new FormGroup<DeleteBotLocaleRequestFormProperties>({
		});

	}

	export interface DeleteBotRequest {
	}
	export interface DeleteBotRequestFormProperties {
	}
	export function CreateDeleteBotRequestFormGroup() {
		return new FormGroup<DeleteBotRequestFormProperties>({
		});

	}

	export interface DeleteBotVersionRequest {
	}
	export interface DeleteBotVersionRequestFormProperties {
	}
	export function CreateDeleteBotVersionRequestFormGroup() {
		return new FormGroup<DeleteBotVersionRequestFormProperties>({
		});

	}

	export interface DeleteCustomVocabularyRequest {
	}
	export interface DeleteCustomVocabularyRequestFormProperties {
	}
	export function CreateDeleteCustomVocabularyRequestFormGroup() {
		return new FormGroup<DeleteCustomVocabularyRequestFormProperties>({
		});

	}

	export interface DeleteExportRequest {
	}
	export interface DeleteExportRequestFormProperties {
	}
	export function CreateDeleteExportRequestFormGroup() {
		return new FormGroup<DeleteExportRequestFormProperties>({
		});

	}

	export interface DeleteImportRequest {
	}
	export interface DeleteImportRequestFormProperties {
	}
	export function CreateDeleteImportRequestFormGroup() {
		return new FormGroup<DeleteImportRequestFormProperties>({
		});

	}

	export enum ImportStatus { InProgress = 'InProgress', Completed = 'Completed', Failed = 'Failed', Deleting = 'Deleting' }

	export interface DeleteIntentRequest {
	}
	export interface DeleteIntentRequestFormProperties {
	}
	export function CreateDeleteIntentRequestFormGroup() {
		return new FormGroup<DeleteIntentRequestFormProperties>({
		});

	}

	export interface DeleteResourcePolicyRequest {
	}
	export interface DeleteResourcePolicyRequestFormProperties {
	}
	export function CreateDeleteResourcePolicyRequestFormGroup() {
		return new FormGroup<DeleteResourcePolicyRequestFormProperties>({
		});

	}

	export interface DeleteResourcePolicyStatementRequest {
	}
	export interface DeleteResourcePolicyStatementRequestFormProperties {
	}
	export function CreateDeleteResourcePolicyStatementRequestFormGroup() {
		return new FormGroup<DeleteResourcePolicyStatementRequestFormProperties>({
		});

	}

	export interface DeleteSlotRequest {
	}
	export interface DeleteSlotRequestFormProperties {
	}
	export function CreateDeleteSlotRequestFormGroup() {
		return new FormGroup<DeleteSlotRequestFormProperties>({
		});

	}

	export interface DeleteSlotTypeRequest {
	}
	export interface DeleteSlotTypeRequestFormProperties {
	}
	export function CreateDeleteSlotTypeRequestFormGroup() {
		return new FormGroup<DeleteSlotTypeRequestFormProperties>({
		});

	}

	export interface DeleteTestSetRequest {
	}
	export interface DeleteTestSetRequestFormProperties {
	}
	export function CreateDeleteTestSetRequestFormGroup() {
		return new FormGroup<DeleteTestSetRequestFormProperties>({
		});

	}

	export interface DeleteUtterancesRequest {
	}
	export interface DeleteUtterancesRequestFormProperties {
	}
	export function CreateDeleteUtterancesRequestFormGroup() {
		return new FormGroup<DeleteUtterancesRequestFormProperties>({
		});

	}

	export interface DescribeBotAliasRequest {
	}
	export interface DescribeBotAliasRequestFormProperties {
	}
	export function CreateDescribeBotAliasRequestFormGroup() {
		return new FormGroup<DescribeBotAliasRequestFormProperties>({
		});

	}

	export interface DescribeBotLocaleRequest {
	}
	export interface DescribeBotLocaleRequestFormProperties {
	}
	export function CreateDescribeBotLocaleRequestFormGroup() {
		return new FormGroup<DescribeBotLocaleRequestFormProperties>({
		});

	}

	export interface DescribeBotRecommendationRequest {
	}
	export interface DescribeBotRecommendationRequestFormProperties {
	}
	export function CreateDescribeBotRecommendationRequestFormGroup() {
		return new FormGroup<DescribeBotRecommendationRequestFormProperties>({
		});

	}

	export interface DescribeBotRequest {
	}
	export interface DescribeBotRequestFormProperties {
	}
	export function CreateDescribeBotRequestFormGroup() {
		return new FormGroup<DescribeBotRequestFormProperties>({
		});

	}

	export interface DescribeBotVersionRequest {
	}
	export interface DescribeBotVersionRequestFormProperties {
	}
	export function CreateDescribeBotVersionRequestFormGroup() {
		return new FormGroup<DescribeBotVersionRequestFormProperties>({
		});

	}

	export interface DescribeCustomVocabularyMetadataRequest {
	}
	export interface DescribeCustomVocabularyMetadataRequestFormProperties {
	}
	export function CreateDescribeCustomVocabularyMetadataRequestFormGroup() {
		return new FormGroup<DescribeCustomVocabularyMetadataRequestFormProperties>({
		});

	}

	export interface DescribeExportRequest {
	}
	export interface DescribeExportRequestFormProperties {
	}
	export function CreateDescribeExportRequestFormGroup() {
		return new FormGroup<DescribeExportRequestFormProperties>({
		});

	}

	export interface DescribeImportRequest {
	}
	export interface DescribeImportRequestFormProperties {
	}
	export function CreateDescribeImportRequestFormGroup() {
		return new FormGroup<DescribeImportRequestFormProperties>({
		});

	}

	export interface DescribeIntentRequest {
	}
	export interface DescribeIntentRequestFormProperties {
	}
	export function CreateDescribeIntentRequestFormGroup() {
		return new FormGroup<DescribeIntentRequestFormProperties>({
		});

	}

	export interface DescribeResourcePolicyRequest {
	}
	export interface DescribeResourcePolicyRequestFormProperties {
	}
	export function CreateDescribeResourcePolicyRequestFormGroup() {
		return new FormGroup<DescribeResourcePolicyRequestFormProperties>({
		});

	}

	export interface DescribeSlotRequest {
	}
	export interface DescribeSlotRequestFormProperties {
	}
	export function CreateDescribeSlotRequestFormGroup() {
		return new FormGroup<DescribeSlotRequestFormProperties>({
		});

	}

	export interface DescribeSlotTypeRequest {
	}
	export interface DescribeSlotTypeRequestFormProperties {
	}
	export function CreateDescribeSlotTypeRequestFormGroup() {
		return new FormGroup<DescribeSlotTypeRequestFormProperties>({
		});

	}

	export interface DescribeTestExecutionRequest {
	}
	export interface DescribeTestExecutionRequestFormProperties {
	}
	export function CreateDescribeTestExecutionRequestFormGroup() {
		return new FormGroup<DescribeTestExecutionRequestFormProperties>({
		});

	}

	export enum TestExecutionModality { Text = 'Text', Audio = 'Audio' }

	export interface DescribeTestSetDiscrepancyReportRequest {
	}
	export interface DescribeTestSetDiscrepancyReportRequestFormProperties {
	}
	export function CreateDescribeTestSetDiscrepancyReportRequestFormGroup() {
		return new FormGroup<DescribeTestSetDiscrepancyReportRequestFormProperties>({
		});

	}

	export interface DescribeTestSetGenerationRequest {
	}
	export interface DescribeTestSetGenerationRequestFormProperties {
	}
	export function CreateDescribeTestSetGenerationRequestFormGroup() {
		return new FormGroup<DescribeTestSetGenerationRequestFormProperties>({
		});

	}

	export interface DescribeTestSetRequest {
	}
	export interface DescribeTestSetRequestFormProperties {
	}
	export function CreateDescribeTestSetRequestFormGroup() {
		return new FormGroup<DescribeTestSetRequestFormProperties>({
		});

	}

	export enum ExportFilterOperator { CO = 'CO', EQ = 'EQ' }


	/** Provides information about sorting a list of exports. */
	export interface ExportSortBy {

		/** Required */
		attribute: ExportSortAttribute;

		/** Required */
		order: SortOrder;
	}

	/** Provides information about sorting a list of exports. */
	export interface ExportSortByFormProperties {

		/** Required */
		attribute: FormControl<ExportSortAttribute | null | undefined>,

		/** Required */
		order: FormControl<SortOrder | null | undefined>,
	}
	export function CreateExportSortByFormGroup() {
		return new FormGroup<ExportSortByFormProperties>({
			attribute: new FormControl<ExportSortAttribute | null | undefined>(undefined, [Validators.required]),
			order: new FormControl<SortOrder | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetTestExecutionArtifactsUrlRequest {
	}
	export interface GetTestExecutionArtifactsUrlRequestFormProperties {
	}
	export function CreateGetTestExecutionArtifactsUrlRequestFormGroup() {
		return new FormGroup<GetTestExecutionArtifactsUrlRequestFormProperties>({
		});

	}

	export enum ImportFilterOperator { CO = 'CO', EQ = 'EQ' }


	/** Provides information for sorting a list of imports. */
	export interface ImportSortBy {

		/** Required */
		attribute: ExportSortAttribute;

		/** Required */
		order: SortOrder;
	}

	/** Provides information for sorting a list of imports. */
	export interface ImportSortByFormProperties {

		/** Required */
		attribute: FormControl<ExportSortAttribute | null | undefined>,

		/** Required */
		order: FormControl<SortOrder | null | undefined>,
	}
	export function CreateImportSortByFormGroup() {
		return new FormGroup<ImportSortByFormProperties>({
			attribute: new FormControl<ExportSortAttribute | null | undefined>(undefined, [Validators.required]),
			order: new FormControl<SortOrder | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum IntentFilterOperator { CO = 'CO', EQ = 'EQ' }


	/** Specifies attributes for sorting a list of intents. */
	export interface IntentSortBy {

		/** Required */
		attribute: IntentSortAttribute;

		/** Required */
		order: SortOrder;
	}

	/** Specifies attributes for sorting a list of intents. */
	export interface IntentSortByFormProperties {

		/** Required */
		attribute: FormControl<IntentSortAttribute | null | undefined>,

		/** Required */
		order: FormControl<SortOrder | null | undefined>,
	}
	export function CreateIntentSortByFormGroup() {
		return new FormGroup<IntentSortByFormProperties>({
			attribute: new FormControl<IntentSortAttribute | null | undefined>(undefined, [Validators.required]),
			order: new FormControl<SortOrder | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListAggregatedUtterancesRequest {
		botAliasId?: string;
		botVersion?: string;

		/** Required */
		localeId: string;

		/** Required */
		aggregationDuration: UtteranceAggregationDuration;
		sortBy?: AggregatedUtterancesSortBy;
		filters?: Array<AggregatedUtterancesFilter>;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListAggregatedUtterancesRequestFormProperties {
		botAliasId: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,

		/** Required */
		localeId: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAggregatedUtterancesRequestFormGroup() {
		return new FormGroup<ListAggregatedUtterancesRequestFormProperties>({
			botAliasId: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
			localeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBotAliasesRequest {
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListBotAliasesRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBotAliasesRequestFormGroup() {
		return new FormGroup<ListBotAliasesRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBotLocalesRequest {
		sortBy?: BotLocaleSortBy;
		filters?: Array<BotLocaleFilter>;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListBotLocalesRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBotLocalesRequestFormGroup() {
		return new FormGroup<ListBotLocalesRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBotRecommendationsRequest {
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListBotRecommendationsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBotRecommendationsRequestFormGroup() {
		return new FormGroup<ListBotRecommendationsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBotVersionsRequest {
		sortBy?: BotVersionSortBy;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListBotVersionsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBotVersionsRequestFormGroup() {
		return new FormGroup<ListBotVersionsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBotsRequest {
		sortBy?: BotSortBy;
		filters?: Array<BotFilter>;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListBotsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBotsRequestFormGroup() {
		return new FormGroup<ListBotsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBuiltInIntentsRequest {
		sortBy?: BuiltInIntentSortBy;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListBuiltInIntentsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBuiltInIntentsRequestFormGroup() {
		return new FormGroup<ListBuiltInIntentsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBuiltInSlotTypesRequest {
		sortBy?: BuiltInSlotTypeSortBy;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListBuiltInSlotTypesRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBuiltInSlotTypesRequestFormGroup() {
		return new FormGroup<ListBuiltInSlotTypesRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCustomVocabularyItemsRequest {
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListCustomVocabularyItemsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCustomVocabularyItemsRequestFormGroup() {
		return new FormGroup<ListCustomVocabularyItemsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListExportsRequest {
		botId?: string;
		botVersion?: string;
		sortBy?: ExportSortBy;
		filters?: Array<ExportFilter>;
		maxResults?: number | null;
		nextToken?: string;
		localeId?: string;
	}
	export interface ListExportsRequestFormProperties {
		botId: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		localeId: FormControl<string | null | undefined>,
	}
	export function CreateListExportsRequestFormGroup() {
		return new FormGroup<ListExportsRequestFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			localeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListImportsRequest {
		botId?: string;
		botVersion?: string;
		sortBy?: ImportSortBy;
		filters?: Array<ImportFilter>;
		maxResults?: number | null;
		nextToken?: string;
		localeId?: string;
	}
	export interface ListImportsRequestFormProperties {
		botId: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		localeId: FormControl<string | null | undefined>,
	}
	export function CreateListImportsRequestFormGroup() {
		return new FormGroup<ListImportsRequestFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			localeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListIntentMetricsRequest {

		/** Required */
		startDateTime: Date;

		/** Required */
		endDateTime: Date;

		/** Required */
		metrics: Array<AnalyticsIntentMetric>;
		binBy?: Array<AnalyticsBinBySpecification>;
		groupBy?: Array<AnalyticsIntentGroupBySpecification>;
		filters?: Array<AnalyticsIntentFilter>;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListIntentMetricsRequestFormProperties {

		/** Required */
		startDateTime: FormControl<Date | null | undefined>,

		/** Required */
		endDateTime: FormControl<Date | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIntentMetricsRequestFormGroup() {
		return new FormGroup<ListIntentMetricsRequestFormProperties>({
			startDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			endDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListIntentPathsRequest {

		/** Required */
		startDateTime: Date;

		/** Required */
		endDateTime: Date;

		/** Required */
		intentPath: string;
		filters?: Array<AnalyticsPathFilter>;
	}
	export interface ListIntentPathsRequestFormProperties {

		/** Required */
		startDateTime: FormControl<Date | null | undefined>,

		/** Required */
		endDateTime: FormControl<Date | null | undefined>,

		/** Required */
		intentPath: FormControl<string | null | undefined>,
	}
	export function CreateListIntentPathsRequestFormGroup() {
		return new FormGroup<ListIntentPathsRequestFormProperties>({
			startDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			endDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			intentPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListIntentStageMetricsRequest {

		/** Required */
		startDateTime: Date;

		/** Required */
		endDateTime: Date;

		/** Required */
		metrics: Array<AnalyticsIntentStageMetric>;
		binBy?: Array<AnalyticsBinBySpecification>;
		groupBy?: Array<AnalyticsIntentStageGroupBySpecification>;
		filters?: Array<AnalyticsIntentStageFilter>;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListIntentStageMetricsRequestFormProperties {

		/** Required */
		startDateTime: FormControl<Date | null | undefined>,

		/** Required */
		endDateTime: FormControl<Date | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIntentStageMetricsRequestFormGroup() {
		return new FormGroup<ListIntentStageMetricsRequestFormProperties>({
			startDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			endDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListIntentsRequest {
		sortBy?: IntentSortBy;
		filters?: Array<IntentFilter>;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListIntentsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIntentsRequestFormGroup() {
		return new FormGroup<ListIntentsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRecommendedIntentsRequest {
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListRecommendedIntentsRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListRecommendedIntentsRequestFormGroup() {
		return new FormGroup<ListRecommendedIntentsRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object specifying the measure and method by which to sort the session analytics data. */
	export interface SessionDataSortBy {

		/** Required */
		name: AnalyticsSessionSortByName;

		/** Required */
		order: SortOrder;
	}

	/** An object specifying the measure and method by which to sort the session analytics data. */
	export interface SessionDataSortByFormProperties {

		/** Required */
		name: FormControl<AnalyticsSessionSortByName | null | undefined>,

		/** Required */
		order: FormControl<SortOrder | null | undefined>,
	}
	export function CreateSessionDataSortByFormGroup() {
		return new FormGroup<SessionDataSortByFormProperties>({
			name: new FormControl<AnalyticsSessionSortByName | null | undefined>(undefined, [Validators.required]),
			order: new FormControl<SortOrder | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListSessionAnalyticsDataRequest {

		/** Required */
		startDateTime: Date;

		/** Required */
		endDateTime: Date;
		sortBy?: SessionDataSortBy;
		filters?: Array<AnalyticsSessionFilter>;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListSessionAnalyticsDataRequestFormProperties {

		/** Required */
		startDateTime: FormControl<Date | null | undefined>,

		/** Required */
		endDateTime: FormControl<Date | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSessionAnalyticsDataRequestFormGroup() {
		return new FormGroup<ListSessionAnalyticsDataRequestFormProperties>({
			startDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			endDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSessionMetricsRequest {

		/** Required */
		startDateTime: Date;

		/** Required */
		endDateTime: Date;

		/** Required */
		metrics: Array<AnalyticsSessionMetric>;
		binBy?: Array<AnalyticsBinBySpecification>;
		groupBy?: Array<AnalyticsSessionGroupBySpecification>;
		filters?: Array<AnalyticsSessionFilter>;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListSessionMetricsRequestFormProperties {

		/** Required */
		startDateTime: FormControl<Date | null | undefined>,

		/** Required */
		endDateTime: FormControl<Date | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSessionMetricsRequestFormGroup() {
		return new FormGroup<ListSessionMetricsRequestFormProperties>({
			startDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			endDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies attributes for sorting a list of slot types. */
	export interface SlotTypeSortBy {

		/** Required */
		attribute: SlotTypeSortAttribute;

		/** Required */
		order: SortOrder;
	}

	/** Specifies attributes for sorting a list of slot types. */
	export interface SlotTypeSortByFormProperties {

		/** Required */
		attribute: FormControl<SlotTypeSortAttribute | null | undefined>,

		/** Required */
		order: FormControl<SortOrder | null | undefined>,
	}
	export function CreateSlotTypeSortByFormGroup() {
		return new FormGroup<SlotTypeSortByFormProperties>({
			attribute: new FormControl<SlotTypeSortAttribute | null | undefined>(undefined, [Validators.required]),
			order: new FormControl<SortOrder | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListSlotTypesRequest {
		sortBy?: SlotTypeSortBy;
		filters?: Array<SlotTypeFilter>;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListSlotTypesRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSlotTypesRequestFormGroup() {
		return new FormGroup<ListSlotTypesRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies attributes for sorting a list of bots. */
	export interface SlotSortBy {

		/** Required */
		attribute: SlotSortAttribute;

		/** Required */
		order: SortOrder;
	}

	/** Specifies attributes for sorting a list of bots. */
	export interface SlotSortByFormProperties {

		/** Required */
		attribute: FormControl<SlotSortAttribute | null | undefined>,

		/** Required */
		order: FormControl<SortOrder | null | undefined>,
	}
	export function CreateSlotSortByFormGroup() {
		return new FormGroup<SlotSortByFormProperties>({
			attribute: new FormControl<SlotSortAttribute | null | undefined>(undefined, [Validators.required]),
			order: new FormControl<SortOrder | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListSlotsRequest {
		sortBy?: SlotSortBy;
		filters?: Array<SlotFilter>;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListSlotsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSlotsRequestFormGroup() {
		return new FormGroup<ListSlotsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceRequest {
	}
	export interface ListTagsForResourceRequestFormProperties {
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
		});

	}


	/** Contains information about the method by which to filter the results of the test execution. */
	export interface TestExecutionResultFilterBy {

		/** Required */
		resultTypeFilter: TestResultTypeFilter;
		conversationLevelTestResultsFilterBy?: ConversationLevelTestResultsFilterBy;
	}

	/** Contains information about the method by which to filter the results of the test execution. */
	export interface TestExecutionResultFilterByFormProperties {

		/** Required */
		resultTypeFilter: FormControl<TestResultTypeFilter | null | undefined>,
	}
	export function CreateTestExecutionResultFilterByFormGroup() {
		return new FormGroup<TestExecutionResultFilterByFormProperties>({
			resultTypeFilter: new FormControl<TestResultTypeFilter | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTestExecutionResultItemsRequest {

		/** Required */
		resultFilterBy: TestExecutionResultFilterBy;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListTestExecutionResultItemsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTestExecutionResultItemsRequestFormGroup() {
		return new FormGroup<ListTestExecutionResultItemsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the method by which to sort the instances of test executions you have carried out. */
	export interface TestExecutionSortBy {

		/** Required */
		attribute: TestExecutionSortAttribute;

		/** Required */
		order: SortOrder;
	}

	/** Contains information about the method by which to sort the instances of test executions you have carried out. */
	export interface TestExecutionSortByFormProperties {

		/** Required */
		attribute: FormControl<TestExecutionSortAttribute | null | undefined>,

		/** Required */
		order: FormControl<SortOrder | null | undefined>,
	}
	export function CreateTestExecutionSortByFormGroup() {
		return new FormGroup<TestExecutionSortByFormProperties>({
			attribute: new FormControl<TestExecutionSortAttribute | null | undefined>(undefined, [Validators.required]),
			order: new FormControl<SortOrder | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTestExecutionsRequest {
		sortBy?: TestExecutionSortBy;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListTestExecutionsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTestExecutionsRequestFormGroup() {
		return new FormGroup<ListTestExecutionsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTestSetRecordsRequest {
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListTestSetRecordsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTestSetRecordsRequestFormGroup() {
		return new FormGroup<ListTestSetRecordsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the methods by which to sort the test set. */
	export interface TestSetSortBy {

		/** Required */
		attribute: TestSetSortAttribute;

		/** Required */
		order: SortOrder;
	}

	/** Contains information about the methods by which to sort the test set. */
	export interface TestSetSortByFormProperties {

		/** Required */
		attribute: FormControl<TestSetSortAttribute | null | undefined>,

		/** Required */
		order: FormControl<SortOrder | null | undefined>,
	}
	export function CreateTestSetSortByFormGroup() {
		return new FormGroup<TestSetSortByFormProperties>({
			attribute: new FormControl<TestSetSortAttribute | null | undefined>(undefined, [Validators.required]),
			order: new FormControl<SortOrder | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTestSetsRequest {
		sortBy?: TestSetSortBy;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListTestSetsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTestSetsRequestFormGroup() {
		return new FormGroup<ListTestSetsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object specifying the measure and method by which to sort the utterance data. */
	export interface UtteranceDataSortBy {

		/** Required */
		name: AnalyticsUtteranceSortByName;

		/** Required */
		order: SortOrder;
	}

	/** An object specifying the measure and method by which to sort the utterance data. */
	export interface UtteranceDataSortByFormProperties {

		/** Required */
		name: FormControl<AnalyticsUtteranceSortByName | null | undefined>,

		/** Required */
		order: FormControl<SortOrder | null | undefined>,
	}
	export function CreateUtteranceDataSortByFormGroup() {
		return new FormGroup<UtteranceDataSortByFormProperties>({
			name: new FormControl<AnalyticsUtteranceSortByName | null | undefined>(undefined, [Validators.required]),
			order: new FormControl<SortOrder | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListUtteranceAnalyticsDataRequest {

		/** Required */
		startDateTime: Date;

		/** Required */
		endDateTime: Date;
		sortBy?: UtteranceDataSortBy;
		filters?: Array<AnalyticsUtteranceFilter>;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListUtteranceAnalyticsDataRequestFormProperties {

		/** Required */
		startDateTime: FormControl<Date | null | undefined>,

		/** Required */
		endDateTime: FormControl<Date | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUtteranceAnalyticsDataRequestFormGroup() {
		return new FormGroup<ListUtteranceAnalyticsDataRequestFormProperties>({
			startDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			endDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListUtteranceMetricsRequest {

		/** Required */
		startDateTime: Date;

		/** Required */
		endDateTime: Date;

		/** Required */
		metrics: Array<AnalyticsUtteranceMetric>;
		binBy?: Array<AnalyticsBinBySpecification>;
		groupBy?: Array<AnalyticsUtteranceGroupBySpecification>;
		attributes?: Array<AnalyticsUtteranceAttribute>;
		filters?: Array<AnalyticsUtteranceFilter>;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListUtteranceMetricsRequestFormProperties {

		/** Required */
		startDateTime: FormControl<Date | null | undefined>,

		/** Required */
		endDateTime: FormControl<Date | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUtteranceMetricsRequestFormGroup() {
		return new FormGroup<ListUtteranceMetricsRequestFormProperties>({
			startDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			endDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The attempt name of attempts of a prompt. */
	export enum PromptAttempt { Initial = 'Initial', Retry1 = 'Retry1', Retry2 = 'Retry2', Retry3 = 'Retry3', Retry4 = 'Retry4', Retry5 = 'Retry5' }


	/** Specifies the text input specifications. */
	export interface TextInputSpecification {

		/** Required */
		startTimeoutMs: number;
	}

	/** Specifies the text input specifications. */
	export interface TextInputSpecificationFormProperties {

		/** Required */
		startTimeoutMs: FormControl<number | null | undefined>,
	}
	export function CreateTextInputSpecificationFormGroup() {
		return new FormGroup<TextInputSpecificationFormProperties>({
			startTimeoutMs: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies the settings on a prompt attempt. */
	export interface PromptAttemptSpecification {
		allowInterrupt?: boolean | null;

		/** Required */
		allowedInputTypes: AllowedInputTypes;
		audioAndDTMFInputSpecification?: AudioAndDTMFInputSpecification;
		textInputSpecification?: TextInputSpecification;
	}

	/** Specifies the settings on a prompt attempt. */
	export interface PromptAttemptSpecificationFormProperties {
		allowInterrupt: FormControl<boolean | null | undefined>,
	}
	export function CreatePromptAttemptSpecificationFormGroup() {
		return new FormGroup<PromptAttemptSpecificationFormProperties>({
			allowInterrupt: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Provides the phrase that Amazon Lex should look for in the user's input to the bot. */
	export interface RuntimeHintValue {

		/** Required */
		phrase: string;
	}

	/** Provides the phrase that Amazon Lex should look for in the user's input to the bot. */
	export interface RuntimeHintValueFormProperties {

		/** Required */
		phrase: FormControl<string | null | undefined>,
	}
	export function CreateRuntimeHintValueFormGroup() {
		return new FormGroup<RuntimeHintValueFormProperties>({
			phrase: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SlotHintsSlotMap {
	}
	export interface SlotHintsSlotMapFormProperties {
	}
	export function CreateSlotHintsSlotMapFormGroup() {
		return new FormGroup<SlotHintsSlotMapFormProperties>({
		});

	}


	/** Provides an array of phrases that should be given preference when resolving values for a slot. */
	export interface RuntimeHintDetails {
		runtimeHintValues?: Array<RuntimeHintValue>;
		subSlotHints?: SlotHintsSlotMap;
	}

	/** Provides an array of phrases that should be given preference when resolving values for a slot. */
	export interface RuntimeHintDetailsFormProperties {
	}
	export function CreateRuntimeHintDetailsFormGroup() {
		return new FormGroup<RuntimeHintDetailsFormProperties>({
		});

	}

	export enum SearchOrder { Ascending = 'Ascending', Descending = 'Descending' }

	export interface SearchAssociatedTranscriptsRequest {
		searchOrder?: SortOrder;

		/** Required */
		filters: Array<AssociatedTranscriptFilter>;
		maxResults?: number | null;
		nextIndex?: number | null;
	}
	export interface SearchAssociatedTranscriptsRequestFormProperties {
		searchOrder: FormControl<SortOrder | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextIndex: FormControl<number | null | undefined>,
	}
	export function CreateSearchAssociatedTranscriptsRequestFormGroup() {
		return new FormGroup<SearchAssociatedTranscriptsRequestFormProperties>({
			searchOrder: new FormControl<SortOrder | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextIndex: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum SlotFilterOperator { CO = 'CO', EQ = 'EQ' }

	export enum SlotShape { Scalar = 'Scalar', List = 'List' }

	export enum SlotTypeFilterOperator { CO = 'CO', EQ = 'EQ' }


	/** The value to set in a slot. */
	export interface SlotValue {
		interpretedValue?: string;
	}

	/** The value to set in a slot. */
	export interface SlotValueFormProperties {
		interpretedValue: FormControl<string | null | undefined>,
	}
	export function CreateSlotValueFormGroup() {
		return new FormGroup<SlotValueFormProperties>({
			interpretedValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The slot values that Amazon Lex uses when it sets slot values in a dialog step. */
	export interface SlotValueOverride {
		value?: SlotValue;
		values?: Array<SlotValueOverride>;
	}

	/** The slot values that Amazon Lex uses when it sets slot values in a dialog step. */
	export interface SlotValueOverrideFormProperties {
	}
	export function CreateSlotValueOverrideFormGroup() {
		return new FormGroup<SlotValueOverrideFormProperties>({
		});

	}


	/** <p>Subslot elicitation settings.</p> <p> <code>DefaultValueSpecification</code> is a list of default values for a constituent sub slot in a composite slot. Default values are used when Amazon Lex hasn't determined a value for a slot. You can specify default values from context variables, session attributes, and defined values. This is similar to <code>DefaultValueSpecification</code> for slots.</p> <p> <code>PromptSpecification</code> is the prompt that Amazon Lex uses to elicit the sub slot value from the user. This is similar to <code>PromptSpecification</code> for slots.</p> */
	export interface SubSlotValueElicitationSetting {

		/** Defines a list of values that Amazon Lex should use as the default value for a slot. */
		defaultValueSpecification?: SlotDefaultValueSpecification;

		/**
		 * Specifies a list of message groups that Amazon Lex sends to a user to elicit a response.
		 * Required
		 */
		promptSpecification: PromptSpecification;
		sampleUtterances?: Array<SampleUtterance>;

		/** Specifies the prompts that Amazon Lex uses while a bot is waiting for customer input. */
		waitAndContinueSpecification?: WaitAndContinueSpecification;
	}

	/** <p>Subslot elicitation settings.</p> <p> <code>DefaultValueSpecification</code> is a list of default values for a constituent sub slot in a composite slot. Default values are used when Amazon Lex hasn't determined a value for a slot. You can specify default values from context variables, session attributes, and defined values. This is similar to <code>DefaultValueSpecification</code> for slots.</p> <p> <code>PromptSpecification</code> is the prompt that Amazon Lex uses to elicit the sub slot value from the user. This is similar to <code>PromptSpecification</code> for slots.</p> */
	export interface SubSlotValueElicitationSettingFormProperties {
	}
	export function CreateSubSlotValueElicitationSettingFormGroup() {
		return new FormGroup<SubSlotValueElicitationSettingFormProperties>({
		});

	}


	/** Subslot specifications. */
	export interface Specifications {

		/** Required */
		slotTypeId: string;

		/** Required */
		valueElicitationSetting: SubSlotValueElicitationSetting;
	}

	/** Subslot specifications. */
	export interface SpecificationsFormProperties {

		/** Required */
		slotTypeId: FormControl<string | null | undefined>,
	}
	export function CreateSpecificationsFormGroup() {
		return new FormGroup<SpecificationsFormProperties>({
			slotTypeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartBotRecommendationRequest {

		/** Required */
		transcriptSourceSetting: TranscriptSourceSetting;
		encryptionSetting?: EncryptionSetting;
	}
	export interface StartBotRecommendationRequestFormProperties {
	}
	export function CreateStartBotRecommendationRequestFormGroup() {
		return new FormGroup<StartBotRecommendationRequestFormProperties>({
		});

	}

	export interface StartImportRequest {

		/** Required */
		importId: string;

		/** Required */
		resourceSpecification: ImportResourceSpecification;

		/** Required */
		mergeStrategy: MergeStrategy;
		filePassword?: string;
	}
	export interface StartImportRequestFormProperties {

		/** Required */
		importId: FormControl<string | null | undefined>,

		/** Required */
		mergeStrategy: FormControl<MergeStrategy | null | undefined>,
		filePassword: FormControl<string | null | undefined>,
	}
	export function CreateStartImportRequestFormGroup() {
		return new FormGroup<StartImportRequestFormProperties>({
			importId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			mergeStrategy: new FormControl<MergeStrategy | null | undefined>(undefined, [Validators.required]),
			filePassword: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartTestExecutionRequest {

		/** Required */
		target: TestExecutionTarget;

		/** Required */
		apiMode: TestExecutionApiMode;
		testExecutionModality?: TestSetModality;
	}
	export interface StartTestExecutionRequestFormProperties {

		/** Required */
		apiMode: FormControl<TestExecutionApiMode | null | undefined>,
		testExecutionModality: FormControl<TestSetModality | null | undefined>,
	}
	export function CreateStartTestExecutionRequestFormGroup() {
		return new FormGroup<StartTestExecutionRequestFormProperties>({
			apiMode: new FormControl<TestExecutionApiMode | null | undefined>(undefined, [Validators.required]),
			testExecutionModality: new FormControl<TestSetModality | null | undefined>(undefined),
		});

	}

	export interface StartTestSetGenerationRequest {

		/** Required */
		testSetName: string;
		description?: string;

		/** Required */
		storageLocation: TestSetStorageLocation;

		/** Required */
		generationDataSource: TestSetGenerationDataSource;

		/** Required */
		roleArn: string;
		testSetTags?: TagMap;
	}
	export interface StartTestSetGenerationRequestFormProperties {

		/** Required */
		testSetName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateStartTestSetGenerationRequestFormGroup() {
		return new FormGroup<StartTestSetGenerationRequestFormProperties>({
			testSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopBotRecommendationRequest {
	}
	export interface StopBotRecommendationRequestFormProperties {
	}
	export function CreateStopBotRecommendationRequestFormGroup() {
		return new FormGroup<StopBotRecommendationRequestFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/** Required */
		tags: TagMap;
	}
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}

	export interface UntagResourceRequest {
	}
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}

	export interface UpdateBotAliasRequest {

		/** Required */
		botAliasName: string;
		description?: string;
		botVersion?: string;
		botAliasLocaleSettings?: BotAliasLocaleSettingsMap;
		conversationLogSettings?: ConversationLogSettings;

		/** Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances. */
		sentimentAnalysisSettings?: SentimentAnalysisSettings;
	}
	export interface UpdateBotAliasRequestFormProperties {

		/** Required */
		botAliasName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		botVersion: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBotAliasRequestFormGroup() {
		return new FormGroup<UpdateBotAliasRequestFormProperties>({
			botAliasName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			botVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateBotLocaleRequest {
		description?: string;

		/** Required */
		nluIntentConfidenceThreshold: number;
		voiceSettings?: VoiceSettings;
	}
	export interface UpdateBotLocaleRequestFormProperties {
		description: FormControl<string | null | undefined>,

		/** Required */
		nluIntentConfidenceThreshold: FormControl<number | null | undefined>,
	}
	export function CreateUpdateBotLocaleRequestFormGroup() {
		return new FormGroup<UpdateBotLocaleRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			nluIntentConfidenceThreshold: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateBotRecommendationRequest {

		/** Required */
		encryptionSetting: EncryptionSetting;
	}
	export interface UpdateBotRecommendationRequestFormProperties {
	}
	export function CreateUpdateBotRecommendationRequestFormGroup() {
		return new FormGroup<UpdateBotRecommendationRequestFormProperties>({
		});

	}

	export interface UpdateBotRequest {

		/** Required */
		botName: string;
		description?: string;

		/** Required */
		roleArn: string;

		/** Required */
		dataPrivacy: DataPrivacy;

		/** Required */
		idleSessionTTLInSeconds: number;
		botType?: BotType;
		botMembers?: Array<BotMember>;
	}
	export interface UpdateBotRequestFormProperties {

		/** Required */
		botName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,

		/** Required */
		idleSessionTTLInSeconds: FormControl<number | null | undefined>,
		botType: FormControl<BotType | null | undefined>,
	}
	export function CreateUpdateBotRequestFormGroup() {
		return new FormGroup<UpdateBotRequestFormProperties>({
			botName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			idleSessionTTLInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			botType: new FormControl<BotType | null | undefined>(undefined),
		});

	}

	export interface UpdateExportRequest {
		filePassword?: string;
	}
	export interface UpdateExportRequestFormProperties {
		filePassword: FormControl<string | null | undefined>,
	}
	export function CreateUpdateExportRequestFormGroup() {
		return new FormGroup<UpdateExportRequestFormProperties>({
			filePassword: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateIntentRequest {

		/** Required */
		intentName: string;
		description?: string;
		parentIntentSignature?: string;
		sampleUtterances?: Array<SampleUtterance>;
		dialogCodeHook?: DialogCodeHookSettings;
		fulfillmentCodeHook?: FulfillmentCodeHookSettings;
		slotPriorities?: Array<SlotPriority>;
		intentConfirmationSetting?: IntentConfirmationSetting;
		intentClosingSetting?: IntentClosingSetting;
		inputContexts?: Array<InputContext>;
		outputContexts?: Array<OutputContext>;
		kendraConfiguration?: KendraConfiguration;
		initialResponseSetting?: InitialResponseSetting;
	}
	export interface UpdateIntentRequestFormProperties {

		/** Required */
		intentName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		parentIntentSignature: FormControl<string | null | undefined>,
	}
	export function CreateUpdateIntentRequestFormGroup() {
		return new FormGroup<UpdateIntentRequestFormProperties>({
			intentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			parentIntentSignature: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateResourcePolicyRequest {

		/** Required */
		policy: string;
	}
	export interface UpdateResourcePolicyRequestFormProperties {

		/** Required */
		policy: FormControl<string | null | undefined>,
	}
	export function CreateUpdateResourcePolicyRequestFormGroup() {
		return new FormGroup<UpdateResourcePolicyRequestFormProperties>({
			policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateSlotRequest {

		/** Required */
		slotName: string;
		description?: string;
		slotTypeId?: string;

		/** Required */
		valueElicitationSetting: SlotValueElicitationSetting;
		obfuscationSetting?: ObfuscationSetting;
		multipleValuesSetting?: MultipleValuesSetting;
		subSlotSetting?: SubSlotSetting;
	}
	export interface UpdateSlotRequestFormProperties {

		/** Required */
		slotName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		slotTypeId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSlotRequestFormGroup() {
		return new FormGroup<UpdateSlotRequestFormProperties>({
			slotName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			slotTypeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSlotTypeRequest {

		/** Required */
		slotTypeName: string;
		description?: string;
		slotTypeValues?: Array<SlotTypeValue>;
		valueSelectionSetting?: SlotValueSelectionSetting;
		parentSlotTypeSignature?: string;

		/** Provides information about the external source of the slot type's definition. */
		externalSourceSetting?: ExternalSourceSetting;
		compositeSlotTypeSetting?: CompositeSlotTypeSetting;
	}
	export interface UpdateSlotTypeRequestFormProperties {

		/** Required */
		slotTypeName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		parentSlotTypeSignature: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSlotTypeRequestFormGroup() {
		return new FormGroup<UpdateSlotTypeRequestFormProperties>({
			slotTypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			parentSlotTypeSignature: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateTestSetRequest {

		/** Required */
		testSetName: string;
		description?: string;
	}
	export interface UpdateTestSetRequestFormProperties {

		/** Required */
		testSetName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTestSetRequestFormGroup() {
		return new FormGroup<UpdateTestSetRequestFormProperties>({
			testSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a slot output by the test set execution. */
	export interface UserTurnSlotOutput {
		value?: string;
		values?: Array<UserTurnSlotOutput>;
		subSlots?: UserTurnSlotOutputMap;
	}

	/** Contains information about a slot output by the test set execution. */
	export interface UserTurnSlotOutputFormProperties {
		value: FormControl<string | null | undefined>,
	}
	export function CreateUserTurnSlotOutputFormGroup() {
		return new FormGroup<UserTurnSlotOutputFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Create a batch of custom vocabulary items for a given bot locale's custom vocabulary.
		 * Put bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/batchcreate
		 * @param {string} botId The identifier of the bot associated with this custom vocabulary.
		 *     Min length: 10    Max length: 10
		 * @param {string} botVersion The identifier of the version of the bot associated with this custom vocabulary.
		 *     Min length: 1    Max length: 5
		 * @param {string} localeId The identifier of the language and locale where this custom vocabulary is used. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html"> Supported Languages </a>.
		 * @return {BatchCreateCustomVocabularyItemResponse} Success
		 */
		BatchCreateCustomVocabularyItem(botId: string, botVersion: string, localeId: string, requestBody: BatchCreateCustomVocabularyItemPutBody): Observable<BatchCreateCustomVocabularyItemResponse> {
			return this.http.put<BatchCreateCustomVocabularyItemResponse>(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/botversions/' + (botVersion == null ? '' : encodeURIComponent(botVersion)) + '/botlocales/' + (localeId == null ? '' : encodeURIComponent(localeId)) + '/customvocabulary/DEFAULT/batchcreate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a batch of custom vocabulary items for a given bot locale's custom vocabulary.
		 * Post bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/batchdelete
		 * @param {string} botId The identifier of the bot associated with this custom vocabulary.
		 *     Min length: 10    Max length: 10
		 * @param {string} botVersion The identifier of the version of the bot associated with this custom vocabulary.
		 *     Min length: 1    Max length: 5
		 * @param {string} localeId The identifier of the language and locale where this custom vocabulary is used. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html"> Supported Languages </a>.
		 * @return {BatchDeleteCustomVocabularyItemResponse} Success
		 */
		BatchDeleteCustomVocabularyItem(botId: string, botVersion: string, localeId: string, requestBody: BatchDeleteCustomVocabularyItemPostBody): Observable<BatchDeleteCustomVocabularyItemResponse> {
			return this.http.post<BatchDeleteCustomVocabularyItemResponse>(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/botversions/' + (botVersion == null ? '' : encodeURIComponent(botVersion)) + '/botlocales/' + (localeId == null ? '' : encodeURIComponent(localeId)) + '/customvocabulary/DEFAULT/batchdelete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update a batch of custom vocabulary items for a given bot locale's custom vocabulary.
		 * Put bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/batchupdate
		 * @param {string} botId The identifier of the bot associated with this custom vocabulary
		 *     Min length: 10    Max length: 10
		 * @param {string} botVersion The identifier of the version of the bot associated with this custom vocabulary.
		 *     Min length: 1    Max length: 5
		 * @param {string} localeId The identifier of the language and locale where this custom vocabulary is used. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html"> Supported Languages </a>.
		 * @return {BatchUpdateCustomVocabularyItemResponse} Success
		 */
		BatchUpdateCustomVocabularyItem(botId: string, botVersion: string, localeId: string, requestBody: BatchUpdateCustomVocabularyItemPutBody): Observable<BatchUpdateCustomVocabularyItemResponse> {
			return this.http.put<BatchUpdateCustomVocabularyItemResponse>(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/botversions/' + (botVersion == null ? '' : encodeURIComponent(botVersion)) + '/botlocales/' + (localeId == null ? '' : encodeURIComponent(localeId)) + '/customvocabulary/DEFAULT/batchupdate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Builds a bot, its intents, and its slot types into a specific locale. A bot can be built into multiple locales. At runtime the locale is used to choose a specific build of the bot.
		 * Post bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/
		 * @param {string} botId The identifier of the bot to build. The identifier is returned in the response from the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateBot.html">CreateBot</a> operation.
		 *     Min length: 10    Max length: 10
		 * @param {string} botVersion The version of the bot to build. This can only be the draft version of the bot.
		 *     Min length: 5    Max length: 5
		 * @param {string} localeId The identifier of the language and locale that the bot will be used in. The string must match one of the supported locales. All of the intents, slot types, and slots used in the bot must have the same locale. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.
		 * @return {void} 
		 */
		BuildBotLocale(botId: string, botVersion: string, localeId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/botversions/' + (botVersion == null ? '' : encodeURIComponent(botVersion)) + '/botlocales/' + (localeId == null ? '' : encodeURIComponent(localeId)) + '/', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Removes a locale from a bot.</p> <p>When you delete a locale, all intents, slots, and slot types defined for the locale are also deleted.</p>
		 * Delete bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/
		 * @param {string} botId The unique identifier of the bot that contains the locale.
		 *     Min length: 10    Max length: 10
		 * @param {string} botVersion The version of the bot that contains the locale. 
		 *     Min length: 5    Max length: 5
		 * @param {string} localeId The identifier of the language and locale that will be deleted. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.
		 * @return {void} 
		 */
		DeleteBotLocale(botId: string, botVersion: string, localeId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/botversions/' + (botVersion == null ? '' : encodeURIComponent(botVersion)) + '/botlocales/' + (localeId == null ? '' : encodeURIComponent(localeId)) + '/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the settings that a bot has for a specific locale.
		 * Get bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/
		 * @param {string} botId The identifier of the bot associated with the locale.
		 *     Min length: 10    Max length: 10
		 * @param {string} botVersion The version of the bot associated with the locale.
		 *     Min length: 1    Max length: 5
		 * @param {string} localeId The unique identifier of the locale to describe. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>. 
		 * @return {DescribeBotLocaleResponse} Success
		 */
		DescribeBotLocale(botId: string, botVersion: string, localeId: string): Observable<DescribeBotLocaleResponse> {
			return this.http.get<DescribeBotLocaleResponse>(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/botversions/' + (botVersion == null ? '' : encodeURIComponent(botVersion)) + '/botlocales/' + (localeId == null ? '' : encodeURIComponent(localeId)) + '/', {});
		}

		/**
		 * Updates the settings that a bot has for a specific locale.
		 * Put bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/
		 * @param {string} botId The unique identifier of the bot that contains the locale.
		 *     Min length: 10    Max length: 10
		 * @param {string} botVersion The version of the bot that contains the locale to be updated. The version can only be the <code>DRAFT</code> version.
		 *     Min length: 5    Max length: 5
		 * @param {string} localeId The identifier of the language and locale to update. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.
		 * @return {void} 
		 */
		UpdateBotLocale(botId: string, botVersion: string, localeId: string, requestBody: UpdateBotLocalePutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/botversions/' + (botVersion == null ? '' : encodeURIComponent(botVersion)) + '/botlocales/' + (localeId == null ? '' : encodeURIComponent(localeId)) + '/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates an Amazon Lex conversational bot.
		 * Put bots/
		 * @return {void} 
		 */
		CreateBot(requestBody: CreateBotPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'bots/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a list of available bots.
		 * Post bots/
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListBotsResponse} Success
		 */
		ListBots(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListBotsPostBody): Observable<ListBotsResponse> {
			return this.http.post<ListBotsResponse>(this.baseUri + 'bots/?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an alias for the specified version of a bot. Use an alias to enable you to change the version of a bot without updating applications that use the bot.</p> <p>For example, you can create an alias called "PROD" that your applications use to call the Amazon Lex bot. </p>
		 * Put bots/{botId}/botaliases/
		 * @param {string} botId The unique identifier of the bot that the alias applies to.
		 *     Min length: 10    Max length: 10
		 * @return {void} 
		 */
		CreateBotAlias(botId: string, requestBody: CreateBotAliasPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/botaliases/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a list of aliases for the specified bot.
		 * Post bots/{botId}/botaliases/
		 * @param {string} botId The identifier of the bot to list aliases for.
		 *     Min length: 10    Max length: 10
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListBotAliasesResponse} Success
		 */
		ListBotAliases(botId: string, maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListBotAliasesPostBody): Observable<ListBotAliasesResponse> {
			return this.http.post<ListBotAliasesResponse>(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/botaliases/&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a locale in the bot. The locale contains the intents and slot types that the bot uses in conversations with users in the specified language and locale. You must add a locale to a bot before you can add intents and slot types to the bot.
		 * Put bots/{botId}/botversions/{botVersion}/botlocales/
		 * @param {string} botId The identifier of the bot to create the locale for.
		 *     Min length: 10    Max length: 10
		 * @param {string} botVersion The version of the bot to create the locale for. This can only be the draft version of the bot.
		 *     Min length: 5    Max length: 5
		 * @return {void} 
		 */
		CreateBotLocale(botId: string, botVersion: string, requestBody: CreateBotLocalePutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/botversions/' + (botVersion == null ? '' : encodeURIComponent(botVersion)) + '/botlocales/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a list of locales for the specified bot.
		 * Post bots/{botId}/botversions/{botVersion}/botlocales/
		 * @param {string} botId The identifier of the bot to list locales for.
		 *     Min length: 10    Max length: 10
		 * @param {string} botVersion The version of the bot to list locales for.
		 *     Min length: 1    Max length: 5
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListBotLocalesResponse} Success
		 */
		ListBotLocales(botId: string, botVersion: string, maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListBotLocalesPostBody): Observable<ListBotLocalesResponse> {
			return this.http.post<ListBotLocalesResponse>(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/botversions/' + (botVersion == null ? '' : encodeURIComponent(botVersion)) + '/botlocales/&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new version of the bot based on the <code>DRAFT</code> version. If the <code>DRAFT</code> version of this resource hasn't changed since you created the last version, Amazon Lex doesn't create a new version, it returns the last created version.</p> <p>When you create the first version of a bot, Amazon Lex sets the version to 1. Subsequent versions increment by 1.</p>
		 * Put bots/{botId}/botversions/
		 * @param {string} botId The identifier of the bot to create the version for.
		 *     Min length: 10    Max length: 10
		 * @return {void} 
		 */
		CreateBotVersion(botId: string, requestBody: CreateBotVersionPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/botversions/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets information about all of the versions of a bot.</p> <p>The <code>ListBotVersions</code> operation returns a summary of each version of a bot. For example, if a bot has three numbered versions, the <code>ListBotVersions</code> operation returns for summaries, one for each numbered version and one for the <code>DRAFT</code> version.</p> <p>The <code>ListBotVersions</code> operation always returns at least one version, the <code>DRAFT</code> version.</p>
		 * Post bots/{botId}/botversions/
		 * @param {string} botId The identifier of the bot to list versions for.
		 *     Min length: 10    Max length: 10
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListBotVersionsResponse} Success
		 */
		ListBotVersions(botId: string, maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListBotVersionsPostBody): Observable<ListBotVersionsResponse> {
			return this.http.post<ListBotVersionsResponse>(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/botversions/&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a zip archive containing the contents of a bot or a bot locale. The archive contains a directory structure that contains JSON files that define the bot.</p> <p>You can create an archive that contains the complete definition of a bot, or you can specify that the archive contain only the definition of a single bot locale.</p> <p>For more information about exporting bots, and about the structure of the export archive, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/importing-exporting.html"> Importing and exporting bots </a> </p>
		 * Put exports/
		 * @return {void} 
		 */
		CreateExport(requestBody: CreateExportPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'exports/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the exports for a bot, bot locale, or custom vocabulary. Exports are kept in the list for 7 days.
		 * Post exports/
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListExportsResponse} Success
		 */
		ListExports(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListExportsPostBody): Observable<ListExportsResponse> {
			return this.http.post<ListExportsResponse>(this.baseUri + 'exports/?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an intent.</p> <p>To define the interaction between the user and your bot, you define one or more intents. For example, for a pizza ordering bot you would create an <code>OrderPizza</code> intent.</p> <p>When you create an intent, you must provide a name. You can optionally provide the following:</p> <ul> <li> <p>Sample utterances. For example, "I want to order a pizza" and "Can I order a pizza." You can't provide utterances for built-in intents.</p> </li> <li> <p>Information to be gathered. You specify slots for the information that you bot requests from the user. You can specify standard slot types, such as date and time, or custom slot types for your application.</p> </li> <li> <p>How the intent is fulfilled. You can provide a Lambda function or configure the intent to return the intent information to your client application. If you use a Lambda function, Amazon Lex invokes the function when all of the intent information is available.</p> </li> <li> <p>A confirmation prompt to send to the user to confirm an intent. For example, "Shall I order your pizza?"</p> </li> <li> <p>A conclusion statement to send to the user after the intent is fulfilled. For example, "I ordered your pizza."</p> </li> <li> <p>A follow-up prompt that asks the user for additional activity. For example, "Do you want a drink with your pizza?"</p> </li> </ul>
		 * Put bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/
		 * @param {string} botId The identifier of the bot associated with this intent.
		 *     Min length: 10    Max length: 10
		 * @param {string} botVersion The version of the bot associated with this intent.
		 *     Min length: 5    Max length: 5
		 * @param {string} localeId The identifier of the language and locale where this intent is used. All of the bots, slot types, and slots used by the intent must have the same locale. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.
		 * @return {CreateIntentResponse} Success
		 */
		CreateIntent(botId: string, botVersion: string, localeId: string, requestBody: CreateIntentPutBody): Observable<CreateIntentResponse> {
			return this.http.put<CreateIntentResponse>(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/botversions/' + (botVersion == null ? '' : encodeURIComponent(botVersion)) + '/botlocales/' + (localeId == null ? '' : encodeURIComponent(localeId)) + '/intents/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a list of intents that meet the specified criteria.
		 * Post bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/
		 * @param {string} botId The unique identifier of the bot that contains the intent.
		 *     Min length: 10    Max length: 10
		 * @param {string} botVersion The version of the bot that contains the intent.
		 *     Min length: 1    Max length: 5
		 * @param {string} localeId The identifier of the language and locale of the intents to list. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListIntentsResponse} Success
		 */
		ListIntents(botId: string, botVersion: string, localeId: string, maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListIntentsPostBody): Observable<ListIntentsResponse> {
			return this.http.post<ListIntentsResponse>(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/botversions/' + (botVersion == null ? '' : encodeURIComponent(botVersion)) + '/botlocales/' + (localeId == null ? '' : encodeURIComponent(localeId)) + '/intents/&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new resource policy with the specified policy statements.
		 * Post policy/{resourceArn}/
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy is attached to.
		 *     Min length: 1    Max length: 1011
		 * @return {CreateResourcePolicyResponse} Success
		 */
		CreateResourcePolicy(resourceArn: string, requestBody: CreateResourcePolicyPostBody): Observable<CreateResourcePolicyResponse> {
			return this.http.post<CreateResourcePolicyResponse>(this.baseUri + 'policy/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes an existing policy from a bot or bot alias. If the resource doesn't have a policy attached, Amazon Lex returns an exception.
		 * Delete policy/{resourceArn}/
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the bot or bot alias that has the resource policy attached.
		 *     Min length: 1    Max length: 1011
		 * @param {string} expectedRevisionId <p>The identifier of the revision to edit. If this ID doesn't match the current revision number, Amazon Lex returns an exception</p> <p>If you don't specify a revision ID, Amazon Lex will delete the current policy.</p>
		 *     Min length: 1    Max length: 5
		 * @return {void} 
		 */
		DeleteResourcePolicy(resourceArn: string, expectedRevisionId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'policy/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '/&expectedRevisionId=' + (expectedRevisionId == null ? '' : encodeURIComponent(expectedRevisionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the resource policy and policy revision for a bot or bot alias.
		 * Get policy/{resourceArn}/
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy is attached to.
		 *     Min length: 1    Max length: 1011
		 * @return {DescribeResourcePolicyResponse} Success
		 */
		DescribeResourcePolicy(resourceArn: string): Observable<DescribeResourcePolicyResponse> {
			return this.http.get<DescribeResourcePolicyResponse>(this.baseUri + 'policy/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '/', {});
		}

		/**
		 * Replaces the existing resource policy for a bot or bot alias with a new one. If the policy doesn't exist, Amazon Lex returns an exception.
		 * Put policy/{resourceArn}/
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy is attached to.
		 *     Min length: 1    Max length: 1011
		 * @param {string} expectedRevisionId <p>The identifier of the revision of the policy to update. If this revision ID doesn't match the current revision ID, Amazon Lex throws an exception.</p> <p>If you don't specify a revision, Amazon Lex overwrites the contents of the policy with the new values.</p>
		 *     Min length: 1    Max length: 5
		 * @return {UpdateResourcePolicyResponse} Success
		 */
		UpdateResourcePolicy(resourceArn: string, expectedRevisionId: string | null | undefined, requestBody: UpdateResourcePolicyPutBody): Observable<UpdateResourcePolicyResponse> {
			return this.http.put<UpdateResourcePolicyResponse>(this.baseUri + 'policy/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '/&expectedRevisionId=' + (expectedRevisionId == null ? '' : encodeURIComponent(expectedRevisionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds a new resource policy statement to a bot or bot alias. If a resource policy exists, the statement is added to the current resource policy. If a policy doesn't exist, a new policy is created.</p> <p>You can't create a resource policy statement that allows cross-account access.</p>
		 * Post policy/{resourceArn}/statements/
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy is attached to.
		 *     Min length: 1    Max length: 1011
		 * @param {string} expectedRevisionId <p>The identifier of the revision of the policy to edit. If this revision ID doesn't match the current revision ID, Amazon Lex throws an exception.</p> <p>If you don't specify a revision, Amazon Lex overwrites the contents of the policy with the new values.</p>
		 *     Min length: 1    Max length: 5
		 * @return {CreateResourcePolicyStatementResponse} Success
		 */
		CreateResourcePolicyStatement(resourceArn: string, expectedRevisionId: string | null | undefined, requestBody: CreateResourcePolicyStatementPostBody): Observable<CreateResourcePolicyStatementResponse> {
			return this.http.post<CreateResourcePolicyStatementResponse>(this.baseUri + 'policy/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '/statements/&expectedRevisionId=' + (expectedRevisionId == null ? '' : encodeURIComponent(expectedRevisionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a slot in an intent. A slot is a variable needed to fulfill an intent. For example, an <code>OrderPizza</code> intent might need slots for size, crust, and number of pizzas. For each slot, you define one or more utterances that Amazon Lex uses to elicit a response from the user.
		 * Put bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/
		 * @param {string} botId The identifier of the bot associated with the slot.
		 *     Min length: 10    Max length: 10
		 * @param {string} botVersion The version of the bot associated with the slot.
		 *     Min length: 5    Max length: 5
		 * @param {string} localeId The identifier of the language and locale that the slot will be used in. The string must match one of the supported locales. All of the bots, intents, slot types used by the slot must have the same locale. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.
		 * @param {string} intentId The identifier of the intent that contains the slot.
		 *     Min length: 10    Max length: 10
		 * @return {CreateSlotResponse} Success
		 */
		CreateSlot(botId: string, botVersion: string, localeId: string, intentId: string, requestBody: CreateSlotPutBody): Observable<CreateSlotResponse> {
			return this.http.put<CreateSlotResponse>(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/botversions/' + (botVersion == null ? '' : encodeURIComponent(botVersion)) + '/botlocales/' + (localeId == null ? '' : encodeURIComponent(localeId)) + '/intents/' + (intentId == null ? '' : encodeURIComponent(intentId)) + '/slots/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of slots that match the specified criteria.
		 * Post bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/
		 * @param {string} botId The identifier of the bot that contains the slot.
		 *     Min length: 10    Max length: 10
		 * @param {string} botVersion The version of the bot that contains the slot.
		 *     Min length: 1    Max length: 5
		 * @param {string} localeId The identifier of the language and locale of the slots to list. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.
		 * @param {string} intentId The unique identifier of the intent that contains the slot.
		 *     Min length: 10    Max length: 10
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListSlotsResponse} Success
		 */
		ListSlots(botId: string, botVersion: string, localeId: string, intentId: string, maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListSlotsPostBody): Observable<ListSlotsResponse> {
			return this.http.post<ListSlotsResponse>(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/botversions/' + (botVersion == null ? '' : encodeURIComponent(botVersion)) + '/botlocales/' + (localeId == null ? '' : encodeURIComponent(localeId)) + '/intents/' + (intentId == null ? '' : encodeURIComponent(intentId)) + '/slots/&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a custom slot type</p> <p> To create a custom slot type, specify a name for the slot type and a set of enumeration values, the values that a slot of this type can assume. </p>
		 * Put bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/
		 * @param {string} botId The identifier of the bot associated with this slot type.
		 *     Min length: 10    Max length: 10
		 * @param {string} botVersion The identifier of the bot version associated with this slot type.
		 *     Min length: 5    Max length: 5
		 * @param {string} localeId The identifier of the language and locale that the slot type will be used in. The string must match one of the supported locales. All of the bots, intents, and slots used by the slot type must have the same locale. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.
		 * @return {CreateSlotTypeResponse} Success
		 */
		CreateSlotType(botId: string, botVersion: string, localeId: string, requestBody: CreateSlotTypePutBody): Observable<CreateSlotTypeResponse> {
			return this.http.put<CreateSlotTypeResponse>(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/botversions/' + (botVersion == null ? '' : encodeURIComponent(botVersion)) + '/botlocales/' + (localeId == null ? '' : encodeURIComponent(localeId)) + '/slottypes/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of slot types that match the specified criteria.
		 * Post bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/
		 * @param {string} botId The unique identifier of the bot that contains the slot types.
		 *     Min length: 10    Max length: 10
		 * @param {string} botVersion The version of the bot that contains the slot type.
		 *     Min length: 1    Max length: 5
		 * @param {string} localeId The identifier of the language and locale of the slot types to list. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListSlotTypesResponse} Success
		 */
		ListSlotTypes(botId: string, botVersion: string, localeId: string, maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListSlotTypesPostBody): Observable<ListSlotTypesResponse> {
			return this.http.post<ListSlotTypesResponse>(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/botversions/' + (botVersion == null ? '' : encodeURIComponent(botVersion)) + '/botlocales/' + (localeId == null ? '' : encodeURIComponent(localeId)) + '/slottypes/&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create a report that describes the differences between the bot and the test set.
		 * Post testsets/{testSetId}/testsetdiscrepancy
		 * @param {string} testSetId The test set Id for the test set discrepancy report.
		 *     Min length: 10    Max length: 10
		 * @return {void} 
		 */
		CreateTestSetDiscrepancyReport(testSetId: string, requestBody: CreateTestSetDiscrepancyReportPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'testsets/' + (testSetId == null ? '' : encodeURIComponent(testSetId)) + '/testsetdiscrepancy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a pre-signed S3 write URL that you use to upload the zip archive when importing a bot or a bot locale.
		 * Post createuploadurl/
		 * @return {CreateUploadUrlResponse} Success
		 */
		CreateUploadUrl(): Observable<CreateUploadUrlResponse> {
			return this.http.post<CreateUploadUrlResponse>(this.baseUri + 'createuploadurl/', null, {});
		}

		/**
		 * <p>Deletes all versions of a bot, including the <code>Draft</code> version. To delete a specific version, use the <code>DeleteBotVersion</code> operation.</p> <p>When you delete a bot, all of the resources contained in the bot are also deleted. Deleting a bot removes all locales, intents, slot, and slot types defined for the bot.</p> <p>If a bot has an alias, the <code>DeleteBot</code> operation returns a <code>ResourceInUseException</code> exception. If you want to delete the bot and the alias, set the <code>skipResourceInUseCheck</code> parameter to <code>true</code>.</p>
		 * Delete bots/{botId}/
		 * @param {string} botId The identifier of the bot to delete. 
		 *     Min length: 10    Max length: 10
		 * @param {boolean} skipResourceInUseCheck By default, Amazon Lex checks if any other resource, such as an alias or bot network, is using the bot version before it is deleted and throws a <code>ResourceInUseException</code> exception if the bot is being used by another resource. Set this parameter to <code>true</code> to skip this check and remove the bot even if it is being used by another resource.
		 * @return {void} 
		 */
		DeleteBot(botId: string, skipResourceInUseCheck: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/&skipResourceInUseCheck=' + skipResourceInUseCheck, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Provides metadata information about a bot.
		 * Get bots/{botId}/
		 * @param {string} botId The unique identifier of the bot to describe.
		 *     Min length: 10    Max length: 10
		 * @return {DescribeBotResponse} Success
		 */
		DescribeBot(botId: string): Observable<DescribeBotResponse> {
			return this.http.get<DescribeBotResponse>(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/', {});
		}

		/**
		 * Updates the configuration of an existing bot.
		 * Put bots/{botId}/
		 * @param {string} botId The unique identifier of the bot to update. This identifier is returned by the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateBot.html">CreateBot</a> operation.
		 *     Min length: 10    Max length: 10
		 * @return {void} 
		 */
		UpdateBot(botId: string, requestBody: UpdateBotPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified bot alias.
		 * Delete bots/{botId}/botaliases/{botAliasId}/
		 * @param {string} botAliasId The unique identifier of the bot alias to delete.
		 *     Min length: 10    Max length: 10
		 * @param {string} botId The unique identifier of the bot associated with the alias to delete.
		 *     Min length: 10    Max length: 10
		 * @param {boolean} skipResourceInUseCheck By default, Amazon Lex checks if any other resource, such as a bot network, is using the bot alias before it is deleted and throws a <code>ResourceInUseException</code> exception if the alias is being used by another resource. Set this parameter to <code>true</code> to skip this check and remove the alias even if it is being used by another resource.
		 * @return {void} 
		 */
		DeleteBotAlias(botAliasId: string, botId: string, skipResourceInUseCheck: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/botaliases/' + (botAliasId == null ? '' : encodeURIComponent(botAliasId)) + '/&skipResourceInUseCheck=' + skipResourceInUseCheck, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get information about a specific bot alias.
		 * Get bots/{botId}/botaliases/{botAliasId}/
		 * @param {string} botAliasId The identifier of the bot alias to describe.
		 *     Min length: 10    Max length: 10
		 * @param {string} botId The identifier of the bot associated with the bot alias to describe.
		 *     Min length: 10    Max length: 10
		 * @return {DescribeBotAliasResponse} Success
		 */
		DescribeBotAlias(botAliasId: string, botId: string): Observable<DescribeBotAliasResponse> {
			return this.http.get<DescribeBotAliasResponse>(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/botaliases/' + (botAliasId == null ? '' : encodeURIComponent(botAliasId)) + '/', {});
		}

		/**
		 * Updates the configuration of an existing bot alias.
		 * Put bots/{botId}/botaliases/{botAliasId}/
		 * @param {string} botAliasId The unique identifier of the bot alias.
		 *     Min length: 10    Max length: 10
		 * @param {string} botId The identifier of the bot with the updated alias.
		 *     Min length: 10    Max length: 10
		 * @return {void} 
		 */
		UpdateBotAlias(botAliasId: string, botId: string, requestBody: UpdateBotAliasPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/botaliases/' + (botAliasId == null ? '' : encodeURIComponent(botAliasId)) + '/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a specific version of a bot. To delete all versions of a bot, use the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DeleteBot.html">DeleteBot</a> operation.
		 * Delete bots/{botId}/botversions/{botVersion}/
		 * @param {string} botId The identifier of the bot that contains the version.
		 *     Min length: 10    Max length: 10
		 * @param {string} botVersion The version of the bot to delete.
		 *     Min length: 1    Max length: 5
		 * @param {boolean} skipResourceInUseCheck By default, Amazon Lex checks if any other resource, such as an alias or bot network, is using the bot version before it is deleted and throws a <code>ResourceInUseException</code> exception if the version is being used by another resource. Set this parameter to <code>true</code> to skip this check and remove the version even if it is being used by another resource.
		 * @return {void} 
		 */
		DeleteBotVersion(botId: string, botVersion: string, skipResourceInUseCheck: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/botversions/' + (botVersion == null ? '' : encodeURIComponent(botVersion)) + '/&skipResourceInUseCheck=' + skipResourceInUseCheck, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Provides metadata about a version of a bot.
		 * Get bots/{botId}/botversions/{botVersion}/
		 * @param {string} botId The identifier of the bot containing the version to return metadata for.
		 *     Min length: 10    Max length: 10
		 * @param {string} botVersion The version of the bot to return metadata for.
		 *     Min length: 1    Max length: 5
		 * @return {DescribeBotVersionResponse} Success
		 */
		DescribeBotVersion(botId: string, botVersion: string): Observable<DescribeBotVersionResponse> {
			return this.http.get<DescribeBotVersionResponse>(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/botversions/' + (botVersion == null ? '' : encodeURIComponent(botVersion)) + '/', {});
		}

		/**
		 * Removes a custom vocabulary from the specified locale in the specified bot.
		 * Delete bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary
		 * @param {string} botId The unique identifier of the bot to remove the custom vocabulary from.
		 *     Min length: 10    Max length: 10
		 * @param {string} botVersion The version of the bot to remove the custom vocabulary from.
		 *     Min length: 5    Max length: 5
		 * @param {string} localeId The locale identifier for the locale that contains the custom vocabulary to remove.
		 * @return {void} 
		 */
		DeleteCustomVocabulary(botId: string, botVersion: string, localeId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/botversions/' + (botVersion == null ? '' : encodeURIComponent(botVersion)) + '/botlocales/' + (localeId == null ? '' : encodeURIComponent(localeId)) + '/customvocabulary', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes a previous export and the associated files stored in an S3 bucket.
		 * Delete exports/{exportId}/
		 * @param {string} exportId The unique identifier of the export to delete.
		 *     Min length: 10    Max length: 10
		 * @return {void} 
		 */
		DeleteExport(exportId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'exports/' + (exportId == null ? '' : encodeURIComponent(exportId)) + '/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about a specific export.
		 * Get exports/{exportId}/
		 * @param {string} exportId The unique identifier of the export to describe.
		 *     Min length: 10    Max length: 10
		 * @return {DescribeExportResponse} Success
		 */
		DescribeExport(exportId: string): Observable<DescribeExportResponse> {
			return this.http.get<DescribeExportResponse>(this.baseUri + 'exports/' + (exportId == null ? '' : encodeURIComponent(exportId)) + '/', {});
		}

		/**
		 * <p>Updates the password used to protect an export zip archive.</p> <p>The password is not required. If you don't supply a password, Amazon Lex generates a zip file that is not protected by a password. This is the archive that is available at the pre-signed S3 URL provided by the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeExport.html">DescribeExport</a> operation.</p>
		 * Put exports/{exportId}/
		 * @param {string} exportId The unique identifier Amazon Lex assigned to the export.
		 *     Min length: 10    Max length: 10
		 * @return {void} 
		 */
		UpdateExport(exportId: string, requestBody: UpdateExportPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'exports/' + (exportId == null ? '' : encodeURIComponent(exportId)) + '/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes a previous import and the associated file stored in an S3 bucket.
		 * Delete imports/{importId}/
		 * @param {string} importId The unique identifier of the import to delete.
		 *     Min length: 10    Max length: 10
		 * @return {void} 
		 */
		DeleteImport(importId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'imports/' + (importId == null ? '' : encodeURIComponent(importId)) + '/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about a specific import.
		 * Get imports/{importId}/
		 * @param {string} importId The unique identifier of the import to describe.
		 *     Min length: 10    Max length: 10
		 * @return {DescribeImportResponse} Success
		 */
		DescribeImport(importId: string): Observable<DescribeImportResponse> {
			return this.http.get<DescribeImportResponse>(this.baseUri + 'imports/' + (importId == null ? '' : encodeURIComponent(importId)) + '/', {});
		}

		/**
		 * <p>Removes the specified intent.</p> <p>Deleting an intent also deletes the slots associated with the intent.</p>
		 * Delete bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/
		 * @param {string} intentId The unique identifier of the intent to delete.
		 *     Min length: 10    Max length: 10
		 * @param {string} botId The identifier of the bot associated with the intent.
		 *     Min length: 10    Max length: 10
		 * @param {string} botVersion The version of the bot associated with the intent.
		 *     Min length: 5    Max length: 5
		 * @param {string} localeId The identifier of the language and locale where the bot will be deleted. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.
		 * @return {void} 
		 */
		DeleteIntent(intentId: string, botId: string, botVersion: string, localeId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/botversions/' + (botVersion == null ? '' : encodeURIComponent(botVersion)) + '/botlocales/' + (localeId == null ? '' : encodeURIComponent(localeId)) + '/intents/' + (intentId == null ? '' : encodeURIComponent(intentId)) + '/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns metadata about an intent.
		 * Get bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/
		 * @param {string} intentId The identifier of the intent to describe.
		 *     Min length: 10    Max length: 10
		 * @param {string} botId The identifier of the bot associated with the intent.
		 *     Min length: 10    Max length: 10
		 * @param {string} botVersion The version of the bot associated with the intent.
		 *     Min length: 1    Max length: 5
		 * @param {string} localeId The identifier of the language and locale of the intent to describe. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.
		 * @return {DescribeIntentResponse} Success
		 */
		DescribeIntent(intentId: string, botId: string, botVersion: string, localeId: string): Observable<DescribeIntentResponse> {
			return this.http.get<DescribeIntentResponse>(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/botversions/' + (botVersion == null ? '' : encodeURIComponent(botVersion)) + '/botlocales/' + (localeId == null ? '' : encodeURIComponent(localeId)) + '/intents/' + (intentId == null ? '' : encodeURIComponent(intentId)) + '/', {});
		}

		/**
		 * Updates the settings for an intent.
		 * Put bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/
		 * @param {string} intentId The unique identifier of the intent to update.
		 *     Min length: 10    Max length: 10
		 * @param {string} botId The identifier of the bot that contains the intent.
		 *     Min length: 10    Max length: 10
		 * @param {string} botVersion The version of the bot that contains the intent. Must be <code>DRAFT</code>.
		 *     Min length: 5    Max length: 5
		 * @param {string} localeId The identifier of the language and locale where this intent is used. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.
		 * @return {UpdateIntentResponse} Success
		 */
		UpdateIntent(intentId: string, botId: string, botVersion: string, localeId: string, requestBody: UpdateIntentPutBody): Observable<UpdateIntentResponse> {
			return this.http.put<UpdateIntentResponse>(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/botversions/' + (botVersion == null ? '' : encodeURIComponent(botVersion)) + '/botlocales/' + (localeId == null ? '' : encodeURIComponent(localeId)) + '/intents/' + (intentId == null ? '' : encodeURIComponent(intentId)) + '/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a policy statement from a resource policy. If you delete the last statement from a policy, the policy is deleted. If you specify a statement ID that doesn't exist in the policy, or if the bot or bot alias doesn't have a policy attached, Amazon Lex returns an exception.
		 * Delete policy/{resourceArn}/statements/{statementId}/
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy is attached to.
		 *     Min length: 1    Max length: 1011
		 * @param {string} statementId The name of the statement (SID) to delete from the policy.
		 *     Min length: 1    Max length: 100
		 * @param {string} expectedRevisionId <p>The identifier of the revision of the policy to delete the statement from. If this revision ID doesn't match the current revision ID, Amazon Lex throws an exception.</p> <p>If you don't specify a revision, Amazon Lex removes the current contents of the statement. </p>
		 *     Min length: 1    Max length: 5
		 * @return {void} 
		 */
		DeleteResourcePolicyStatement(resourceArn: string, statementId: string, expectedRevisionId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'policy/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '/statements/' + (statementId == null ? '' : encodeURIComponent(statementId)) + '/&expectedRevisionId=' + (expectedRevisionId == null ? '' : encodeURIComponent(expectedRevisionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified slot from an intent.
		 * Delete bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}/
		 * @param {string} slotId The identifier of the slot to delete. 
		 *     Min length: 10    Max length: 10
		 * @param {string} botId The identifier of the bot associated with the slot to delete.
		 *     Min length: 10    Max length: 10
		 * @param {string} botVersion The version of the bot associated with the slot to delete.
		 *     Min length: 5    Max length: 5
		 * @param {string} localeId The identifier of the language and locale that the slot will be deleted from. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.
		 * @param {string} intentId The identifier of the intent associated with the slot.
		 *     Min length: 10    Max length: 10
		 * @return {void} 
		 */
		DeleteSlot(slotId: string, botId: string, botVersion: string, localeId: string, intentId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/botversions/' + (botVersion == null ? '' : encodeURIComponent(botVersion)) + '/botlocales/' + (localeId == null ? '' : encodeURIComponent(localeId)) + '/intents/' + (intentId == null ? '' : encodeURIComponent(intentId)) + '/slots/' + (slotId == null ? '' : encodeURIComponent(slotId)) + '/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets metadata information about a slot.
		 * Get bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}/
		 * @param {string} slotId The unique identifier for the slot.
		 *     Min length: 10    Max length: 10
		 * @param {string} botId The identifier of the bot associated with the slot.
		 *     Min length: 10    Max length: 10
		 * @param {string} botVersion The version of the bot associated with the slot.
		 *     Min length: 1    Max length: 5
		 * @param {string} localeId The identifier of the language and locale of the slot to describe. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.
		 * @param {string} intentId The identifier of the intent that contains the slot.
		 *     Min length: 10    Max length: 10
		 * @return {DescribeSlotResponse} Success
		 */
		DescribeSlot(slotId: string, botId: string, botVersion: string, localeId: string, intentId: string): Observable<DescribeSlotResponse> {
			return this.http.get<DescribeSlotResponse>(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/botversions/' + (botVersion == null ? '' : encodeURIComponent(botVersion)) + '/botlocales/' + (localeId == null ? '' : encodeURIComponent(localeId)) + '/intents/' + (intentId == null ? '' : encodeURIComponent(intentId)) + '/slots/' + (slotId == null ? '' : encodeURIComponent(slotId)) + '/', {});
		}

		/**
		 * Updates the settings for a slot.
		 * Put bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}/
		 * @param {string} slotId The unique identifier for the slot to update.
		 *     Min length: 10    Max length: 10
		 * @param {string} botId The unique identifier of the bot that contains the slot.
		 *     Min length: 10    Max length: 10
		 * @param {string} botVersion The version of the bot that contains the slot. Must always be <code>DRAFT</code>.
		 *     Min length: 5    Max length: 5
		 * @param {string} localeId The identifier of the language and locale that contains the slot. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.
		 * @param {string} intentId The identifier of the intent that contains the slot.
		 *     Min length: 10    Max length: 10
		 * @return {UpdateSlotResponse} Success
		 */
		UpdateSlot(slotId: string, botId: string, botVersion: string, localeId: string, intentId: string, requestBody: UpdateSlotPutBody): Observable<UpdateSlotResponse> {
			return this.http.put<UpdateSlotResponse>(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/botversions/' + (botVersion == null ? '' : encodeURIComponent(botVersion)) + '/botlocales/' + (localeId == null ? '' : encodeURIComponent(localeId)) + '/intents/' + (intentId == null ? '' : encodeURIComponent(intentId)) + '/slots/' + (slotId == null ? '' : encodeURIComponent(slotId)) + '/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a slot type from a bot locale.</p> <p>If a slot is using the slot type, Amazon Lex throws a <code>ResourceInUseException</code> exception. To avoid the exception, set the <code>skipResourceInUseCheck</code> parameter to <code>true</code>.</p>
		 * Delete bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}/
		 * @param {string} slotTypeId The identifier of the slot type to delete.
		 *     Min length: 10    Max length: 10
		 * @param {string} botId The identifier of the bot associated with the slot type.
		 *     Min length: 10    Max length: 10
		 * @param {string} botVersion The version of the bot associated with the slot type.
		 *     Min length: 5    Max length: 5
		 * @param {string} localeId The identifier of the language and locale that the slot type will be deleted from. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.
		 * @param {boolean} skipResourceInUseCheck By default, the <code>DeleteSlotType</code> operations throws a <code>ResourceInUseException</code> exception if you try to delete a slot type used by a slot. Set the <code>skipResourceInUseCheck</code> parameter to <code>true</code> to skip this check and remove the slot type even if a slot uses it.
		 * @return {void} 
		 */
		DeleteSlotType(slotTypeId: string, botId: string, botVersion: string, localeId: string, skipResourceInUseCheck: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/botversions/' + (botVersion == null ? '' : encodeURIComponent(botVersion)) + '/botlocales/' + (localeId == null ? '' : encodeURIComponent(localeId)) + '/slottypes/' + (slotTypeId == null ? '' : encodeURIComponent(slotTypeId)) + '/&skipResourceInUseCheck=' + skipResourceInUseCheck, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets metadata information about a slot type.
		 * Get bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}/
		 * @param {string} slotTypeId The identifier of the slot type.
		 *     Min length: 10    Max length: 10
		 * @param {string} botId The identifier of the bot associated with the slot type.
		 *     Min length: 10    Max length: 10
		 * @param {string} botVersion The version of the bot associated with the slot type.
		 *     Min length: 1    Max length: 5
		 * @param {string} localeId The identifier of the language and locale of the slot type to describe. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.
		 * @return {DescribeSlotTypeResponse} Success
		 */
		DescribeSlotType(slotTypeId: string, botId: string, botVersion: string, localeId: string): Observable<DescribeSlotTypeResponse> {
			return this.http.get<DescribeSlotTypeResponse>(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/botversions/' + (botVersion == null ? '' : encodeURIComponent(botVersion)) + '/botlocales/' + (localeId == null ? '' : encodeURIComponent(localeId)) + '/slottypes/' + (slotTypeId == null ? '' : encodeURIComponent(slotTypeId)) + '/', {});
		}

		/**
		 * Updates the configuration of an existing slot type.
		 * Put bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}/
		 * @param {string} slotTypeId The unique identifier of the slot type to update.
		 *     Min length: 10    Max length: 10
		 * @param {string} botId The identifier of the bot that contains the slot type.
		 *     Min length: 10    Max length: 10
		 * @param {string} botVersion The version of the bot that contains the slot type. Must be <code>DRAFT</code>.
		 *     Min length: 5    Max length: 5
		 * @param {string} localeId The identifier of the language and locale that contains the slot type. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.
		 * @return {void} 
		 */
		UpdateSlotType(slotTypeId: string, botId: string, botVersion: string, localeId: string, requestBody: UpdateSlotTypePutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/botversions/' + (botVersion == null ? '' : encodeURIComponent(botVersion)) + '/botlocales/' + (localeId == null ? '' : encodeURIComponent(localeId)) + '/slottypes/' + (slotTypeId == null ? '' : encodeURIComponent(slotTypeId)) + '/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * The action to delete the selected test set.
		 * Delete testsets/{testSetId}
		 * @param {string} testSetId The test set Id of the test set to be deleted.
		 *     Min length: 10    Max length: 10
		 * @return {void} 
		 */
		DeleteTestSet(testSetId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'testsets/' + (testSetId == null ? '' : encodeURIComponent(testSetId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets metadata information about the test set.
		 * Get testsets/{testSetId}
		 * @param {string} testSetId The test set Id for the test set request.
		 *     Min length: 10    Max length: 10
		 * @return {DescribeTestSetResponse} Success
		 */
		DescribeTestSet(testSetId: string): Observable<DescribeTestSetResponse> {
			return this.http.get<DescribeTestSetResponse>(this.baseUri + 'testsets/' + (testSetId == null ? '' : encodeURIComponent(testSetId)), {});
		}

		/**
		 * The action to update the test set.
		 * Put testsets/{testSetId}
		 * @param {string} testSetId The test set Id for which update test operation to be performed.
		 *     Min length: 10    Max length: 10
		 * @return {UpdateTestSetResponse} Success
		 */
		UpdateTestSet(testSetId: string, requestBody: UpdateTestSetPutBody): Observable<UpdateTestSetResponse> {
			return this.http.put<UpdateTestSetResponse>(this.baseUri + 'testsets/' + (testSetId == null ? '' : encodeURIComponent(testSetId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes stored utterances.</p> <p>Amazon Lex stores the utterances that users send to your bot. Utterances are stored for 15 days for use with the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListAggregatedUtterances.html">ListAggregatedUtterances</a> operation, and then stored indefinitely for use in improving the ability of your bot to respond to user input..</p> <p>Use the <code>DeleteUtterances</code> operation to manually delete utterances for a specific session. When you use the <code>DeleteUtterances</code> operation, utterances stored for improving your bot's ability to respond to user input are deleted immediately. Utterances stored for use with the <code>ListAggregatedUtterances</code> operation are deleted after 15 days.</p>
		 * Delete bots/{botId}/utterances/
		 * @param {string} botId The unique identifier of the bot that contains the utterances.
		 *     Min length: 10    Max length: 10
		 * @param {string} localeId The identifier of the language and locale where the utterances were collected. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.
		 * @param {string} sessionId The unique identifier of the session with the user. The ID is returned in the response from the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_runtime_RecognizeText.html">RecognizeText</a> and <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_runtime_RecognizeUtterance.html">RecognizeUtterance</a> operations.
		 *     Min length: 2    Max length: 100
		 * @return {void} 
		 */
		DeleteUtterances(botId: string, localeId: string | null | undefined, sessionId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/utterances/&localeId=' + (localeId == null ? '' : encodeURIComponent(localeId)) + '&sessionId=' + (sessionId == null ? '' : encodeURIComponent(sessionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Provides metadata information about a bot recommendation. This information will enable you to get a description on the request inputs, to download associated transcripts after processing is complete, and to download intents and slot-types generated by the bot recommendation.
		 * Get bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}/
		 * @param {string} botId The unique identifier of the bot associated with the bot recommendation.
		 *     Min length: 10    Max length: 10
		 * @param {string} botVersion The version of the bot associated with the bot recommendation.
		 *     Min length: 5    Max length: 5
		 * @param {string} localeId The identifier of the language and locale of the bot recommendation to describe. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.
		 * @param {string} botRecommendationId The identifier of the bot recommendation to describe.
		 *     Min length: 10    Max length: 10
		 * @return {DescribeBotRecommendationResponse} Success
		 */
		DescribeBotRecommendation(botId: string, botVersion: string, localeId: string, botRecommendationId: string): Observable<DescribeBotRecommendationResponse> {
			return this.http.get<DescribeBotRecommendationResponse>(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/botversions/' + (botVersion == null ? '' : encodeURIComponent(botVersion)) + '/botlocales/' + (localeId == null ? '' : encodeURIComponent(localeId)) + '/botrecommendations/' + (botRecommendationId == null ? '' : encodeURIComponent(botRecommendationId)) + '/', {});
		}

		/**
		 * Updates an existing bot recommendation request.
		 * Put bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}/
		 * @param {string} botId The unique identifier of the bot containing the bot recommendation to be updated.
		 *     Min length: 10    Max length: 10
		 * @param {string} botVersion The version of the bot containing the bot recommendation to be updated.
		 *     Min length: 5    Max length: 5
		 * @param {string} localeId The identifier of the language and locale of the bot recommendation to update. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a> 
		 * @param {string} botRecommendationId The unique identifier of the bot recommendation to be updated.
		 *     Min length: 10    Max length: 10
		 * @return {void} 
		 */
		UpdateBotRecommendation(botId: string, botVersion: string, localeId: string, botRecommendationId: string, requestBody: UpdateBotRecommendationPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/botversions/' + (botVersion == null ? '' : encodeURIComponent(botVersion)) + '/botlocales/' + (localeId == null ? '' : encodeURIComponent(localeId)) + '/botrecommendations/' + (botRecommendationId == null ? '' : encodeURIComponent(botRecommendationId)) + '/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Provides metadata information about a custom vocabulary.
		 * Get bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/metadata
		 * @param {string} botId The unique identifier of the bot that contains the custom vocabulary.
		 *     Min length: 10    Max length: 10
		 * @param {string} botVersion The bot version of the bot to return metadata for.
		 *     Min length: 1    Max length: 5
		 * @param {string} localeId The locale to return the custom vocabulary information for. The locale must be <code>en_GB</code>.
		 * @return {DescribeCustomVocabularyMetadataResponse} Success
		 */
		DescribeCustomVocabularyMetadata(botId: string, botVersion: string, localeId: string): Observable<DescribeCustomVocabularyMetadataResponse> {
			return this.http.get<DescribeCustomVocabularyMetadataResponse>(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/botversions/' + (botVersion == null ? '' : encodeURIComponent(botVersion)) + '/botlocales/' + (localeId == null ? '' : encodeURIComponent(localeId)) + '/customvocabulary/DEFAULT/metadata', {});
		}

		/**
		 * Gets metadata information about the test execution.
		 * Get testexecutions/{testExecutionId}
		 * @param {string} testExecutionId The execution Id of the test set execution.
		 *     Min length: 10    Max length: 10
		 * @return {DescribeTestExecutionResponse} Success
		 */
		DescribeTestExecution(testExecutionId: string): Observable<DescribeTestExecutionResponse> {
			return this.http.get<DescribeTestExecutionResponse>(this.baseUri + 'testexecutions/' + (testExecutionId == null ? '' : encodeURIComponent(testExecutionId)), {});
		}

		/**
		 * Gets metadata information about the test set discrepancy report.
		 * Get testsetdiscrepancy/{testSetDiscrepancyReportId}
		 * @param {string} testSetDiscrepancyReportId The unique identifier of the test set discrepancy report.
		 *     Min length: 10    Max length: 10
		 * @return {DescribeTestSetDiscrepancyReportResponse} Success
		 */
		DescribeTestSetDiscrepancyReport(testSetDiscrepancyReportId: string): Observable<DescribeTestSetDiscrepancyReportResponse> {
			return this.http.get<DescribeTestSetDiscrepancyReportResponse>(this.baseUri + 'testsetdiscrepancy/' + (testSetDiscrepancyReportId == null ? '' : encodeURIComponent(testSetDiscrepancyReportId)), {});
		}

		/**
		 * Gets metadata information about the test set generation.
		 * Get testsetgenerations/{testSetGenerationId}
		 * @param {string} testSetGenerationId The unique identifier of the test set generation.
		 *     Min length: 10    Max length: 10
		 * @return {DescribeTestSetGenerationResponse} Success
		 */
		DescribeTestSetGeneration(testSetGenerationId: string): Observable<DescribeTestSetGenerationResponse> {
			return this.http.get<DescribeTestSetGenerationResponse>(this.baseUri + 'testsetgenerations/' + (testSetGenerationId == null ? '' : encodeURIComponent(testSetGenerationId)), {});
		}

		/**
		 * The pre-signed Amazon S3 URL to download the test execution result artifacts.
		 * Get testexecutions/{testExecutionId}/artifacturl
		 * @param {string} testExecutionId The unique identifier of the completed test execution.
		 *     Min length: 10    Max length: 10
		 * @return {GetTestExecutionArtifactsUrlResponse} Success
		 */
		GetTestExecutionArtifactsUrl(testExecutionId: string): Observable<GetTestExecutionArtifactsUrlResponse> {
			return this.http.get<GetTestExecutionArtifactsUrlResponse>(this.baseUri + 'testexecutions/' + (testExecutionId == null ? '' : encodeURIComponent(testExecutionId)) + '/artifacturl', {});
		}

		/**
		 * <p>Provides a list of utterances that users have sent to the bot.</p> <p>Utterances are aggregated by the text of the utterance. For example, all instances where customers used the phrase "I want to order pizza" are aggregated into the same line in the response.</p> <p>You can see both detected utterances and missed utterances. A detected utterance is where the bot properly recognized the utterance and activated the associated intent. A missed utterance was not recognized by the bot and didn't activate an intent.</p> <p>Utterances can be aggregated for a bot alias or for a bot version, but not both at the same time.</p> <p>Utterances statistics are not generated under the following conditions:</p> <ul> <li> <p>The <code>childDirected</code> field was set to true when the bot was created.</p> </li> <li> <p>You are using slot obfuscation with one or more slots.</p> </li> <li> <p>You opted out of participating in improving Amazon Lex.</p> </li> </ul>
		 * Post bots/{botId}/aggregatedutterances/
		 * @param {string} botId The unique identifier of the bot associated with this request.
		 *     Min length: 10    Max length: 10
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListAggregatedUtterancesResponse} Success
		 */
		ListAggregatedUtterances(botId: string, maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListAggregatedUtterancesPostBody): Observable<ListAggregatedUtterancesResponse> {
			return this.http.post<ListAggregatedUtterancesResponse>(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/aggregatedutterances/&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a list of bot recommendations that meet the specified criteria.
		 * Post bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/
		 * @param {string} botId The unique identifier of the bot that contains the bot recommendation list.
		 *     Min length: 10    Max length: 10
		 * @param {string} botVersion The version of the bot that contains the bot recommendation list.
		 *     Min length: 5    Max length: 5
		 * @param {string} localeId The identifier of the language and locale of the bot recommendation list.
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListBotRecommendationsResponse} Success
		 */
		ListBotRecommendations(botId: string, botVersion: string, localeId: string, maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListBotRecommendationsPostBody): Observable<ListBotRecommendationsResponse> {
			return this.http.post<ListBotRecommendationsResponse>(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/botversions/' + (botVersion == null ? '' : encodeURIComponent(botVersion)) + '/botlocales/' + (localeId == null ? '' : encodeURIComponent(localeId)) + '/botrecommendations/&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Use this to provide your transcript data, and to start the bot recommendation process.
		 * Put bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/
		 * @param {string} botId The unique identifier of the bot containing the bot recommendation.
		 *     Min length: 10    Max length: 10
		 * @param {string} botVersion The version of the bot containing the bot recommendation.
		 *     Min length: 5    Max length: 5
		 * @param {string} localeId The identifier of the language and locale of the bot recommendation to start. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a> 
		 * @return {void} 
		 */
		StartBotRecommendation(botId: string, botVersion: string, localeId: string, requestBody: StartBotRecommendationPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/botversions/' + (botVersion == null ? '' : encodeURIComponent(botVersion)) + '/botlocales/' + (localeId == null ? '' : encodeURIComponent(localeId)) + '/botrecommendations/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets a list of built-in intents provided by Amazon Lex that you can use in your bot. </p> <p>To use a built-in intent as a the base for your own intent, include the built-in intent signature in the <code>parentIntentSignature</code> parameter when you call the <code>CreateIntent</code> operation. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateIntent.html">CreateIntent</a>.</p>
		 * Post builtins/locales/{localeId}/intents/
		 * @param {string} localeId The identifier of the language and locale of the intents to list. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListBuiltInIntentsResponse} Success
		 */
		ListBuiltInIntents(localeId: string, maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListBuiltInIntentsPostBody): Observable<ListBuiltInIntentsResponse> {
			return this.http.post<ListBuiltInIntentsResponse>(this.baseUri + 'builtins/locales/' + (localeId == null ? '' : encodeURIComponent(localeId)) + '/intents/&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of built-in slot types that meet the specified criteria.
		 * Post builtins/locales/{localeId}/slottypes/
		 * @param {string} localeId The identifier of the language and locale of the slot types to list. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListBuiltInSlotTypesResponse} Success
		 */
		ListBuiltInSlotTypes(localeId: string, maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListBuiltInSlotTypesPostBody): Observable<ListBuiltInSlotTypesResponse> {
			return this.http.post<ListBuiltInSlotTypesResponse>(this.baseUri + 'builtins/locales/' + (localeId == null ? '' : encodeURIComponent(localeId)) + '/slottypes/&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Paginated list of custom vocabulary items for a given bot locale's custom vocabulary.
		 * Post bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/list
		 * @param {string} botId The identifier of the version of the bot associated with this custom vocabulary.
		 *     Min length: 10    Max length: 10
		 * @param {string} botVersion The bot version of the bot to the list custom vocabulary request.
		 *     Min length: 1    Max length: 5
		 * @param {string} localeId The identifier of the language and locale where this custom vocabulary is used. The string must match one of the supported locales. For more information, see Supported languages (https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html).
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListCustomVocabularyItemsResponse} Success
		 */
		ListCustomVocabularyItems(botId: string, botVersion: string, localeId: string, maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListCustomVocabularyItemsPostBody): Observable<ListCustomVocabularyItemsResponse> {
			return this.http.post<ListCustomVocabularyItemsResponse>(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/botversions/' + (botVersion == null ? '' : encodeURIComponent(botVersion)) + '/botlocales/' + (localeId == null ? '' : encodeURIComponent(localeId)) + '/customvocabulary/DEFAULT/list&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the imports for a bot, bot locale, or custom vocabulary. Imports are kept in the list for 7 days.
		 * Post imports/
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListImportsResponse} Success
		 */
		ListImports(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListImportsPostBody): Observable<ListImportsResponse> {
			return this.http.post<ListImportsResponse>(this.baseUri + 'imports/?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts importing a bot, bot locale, or custom vocabulary from a zip archive that you uploaded to an S3 bucket.
		 * Put imports/
		 * @return {void} 
		 */
		StartImport(requestBody: StartImportPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'imports/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves summary metrics for the intents in your bot. The following fields are required:</p> <ul> <li> <p> <code>metrics</code> – A list of <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_AnalyticsIntentMetric.html">AnalyticsIntentMetric</a> objects. In each object, use the <code>name</code> field to specify the metric to calculate, the <code>statistic</code> field to specify whether to calculate the <code>Sum</code>, <code>Average</code>, or <code>Max</code> number, and the <code>order</code> field to specify whether to sort the results in <code>Ascending</code> or <code>Descending</code> order.</p> </li> <li> <p> <code>startDateTime</code> and <code>endDateTime</code> – Define a time range for which you want to retrieve results.</p> </li> </ul> <p>Of the optional fields, you can organize the results in the following ways:</p> <ul> <li> <p>Use the <code>filters</code> field to filter the results, the <code>groupBy</code> field to specify categories by which to group the results, and the <code>binBy</code> field to specify time intervals by which to group the results.</p> </li> <li> <p>Use the <code>maxResults</code> field to limit the number of results to return in a single response and the <code>nextToken</code> field to return the next batch of results if the response does not return the full set of results.</p> </li> </ul> <p>Note that an <code>order</code> field exists in both <code>binBy</code> and <code>metrics</code>. You can specify only one <code>order</code> in a given request.</p>
		 * Post bots/{botId}/analytics/intentmetrics
		 * @param {string} botId The identifier for the bot for which you want to retrieve intent metrics.
		 *     Min length: 10    Max length: 10
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListIntentMetricsResponse} Success
		 */
		ListIntentMetrics(botId: string, maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListIntentMetricsPostBody): Observable<ListIntentMetricsResponse> {
			return this.http.post<ListIntentMetricsResponse>(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/analytics/intentmetrics&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves summary statistics for a path of intents that users take over sessions with your bot. The following fields are required:</p> <ul> <li> <p> <code>startDateTime</code> and <code>endDateTime</code> – Define a time range for which you want to retrieve results.</p> </li> <li> <p> <code>intentPath</code> – Define an order of intents for which you want to retrieve metrics. Separate intents in the path with a forward slash. For example, populate the <code>intentPath</code> field with <code>/BookCar/BookHotel</code> to see details about how many times users invoked the <code>BookCar</code> and <code>BookHotel</code> intents in that order.</p> </li> </ul> <p>Use the optional <code>filters</code> field to filter the results.</p>
		 * Post bots/{botId}/analytics/intentpaths
		 * @param {string} botId The identifier for the bot for which you want to retrieve intent path metrics.
		 *     Min length: 10    Max length: 10
		 * @return {ListIntentPathsResponse} Success
		 */
		ListIntentPaths(botId: string, requestBody: ListIntentPathsPostBody): Observable<ListIntentPathsResponse> {
			return this.http.post<ListIntentPathsResponse>(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/analytics/intentpaths', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves summary metrics for the stages within intents in your bot. The following fields are required:</p> <ul> <li> <p> <code>metrics</code> – A list of <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_AnalyticsIntentStageMetric.html">AnalyticsIntentStageMetric</a> objects. In each object, use the <code>name</code> field to specify the metric to calculate, the <code>statistic</code> field to specify whether to calculate the <code>Sum</code>, <code>Average</code>, or <code>Max</code> number, and the <code>order</code> field to specify whether to sort the results in <code>Ascending</code> or <code>Descending</code> order.</p> </li> <li> <p> <code>startDateTime</code> and <code>endDateTime</code> – Define a time range for which you want to retrieve results.</p> </li> </ul> <p>Of the optional fields, you can organize the results in the following ways:</p> <ul> <li> <p>Use the <code>filters</code> field to filter the results, the <code>groupBy</code> field to specify categories by which to group the results, and the <code>binBy</code> field to specify time intervals by which to group the results.</p> </li> <li> <p>Use the <code>maxResults</code> field to limit the number of results to return in a single response and the <code>nextToken</code> field to return the next batch of results if the response does not return the full set of results.</p> </li> </ul> <p>Note that an <code>order</code> field exists in both <code>binBy</code> and <code>metrics</code>. You can only specify one <code>order</code> in a given request.</p>
		 * Post bots/{botId}/analytics/intentstagemetrics
		 * @param {string} botId The identifier for the bot for which you want to retrieve intent stage metrics.
		 *     Min length: 10    Max length: 10
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListIntentStageMetricsResponse} Success
		 */
		ListIntentStageMetrics(botId: string, maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListIntentStageMetricsPostBody): Observable<ListIntentStageMetricsResponse> {
			return this.http.post<ListIntentStageMetricsResponse>(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/analytics/intentstagemetrics&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of recommended intents provided by the bot recommendation that you can use in your bot. Intents in the response are ordered by relevance.
		 * Post bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}/intents
		 * @param {string} botId The unique identifier of the bot associated with the recommended intents.
		 *     Min length: 10    Max length: 10
		 * @param {string} botVersion The version of the bot that contains the recommended intents.
		 *     Min length: 5    Max length: 5
		 * @param {string} localeId The identifier of the language and locale of the recommended intents.
		 * @param {string} botRecommendationId The identifier of the bot recommendation that contains the recommended intents.
		 *     Min length: 10    Max length: 10
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListRecommendedIntentsResponse} Success
		 */
		ListRecommendedIntents(botId: string, botVersion: string, localeId: string, botRecommendationId: string, maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListRecommendedIntentsPostBody): Observable<ListRecommendedIntentsResponse> {
			return this.http.post<ListRecommendedIntentsResponse>(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/botversions/' + (botVersion == null ? '' : encodeURIComponent(botVersion)) + '/botlocales/' + (localeId == null ? '' : encodeURIComponent(localeId)) + '/botrecommendations/' + (botRecommendationId == null ? '' : encodeURIComponent(botRecommendationId)) + '/intents&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves a list of metadata for individual user sessions with your bot. The <code>startDateTime</code> and <code>endDateTime</code> fields are required. These fields define a time range for which you want to retrieve results. Of the optional fields, you can organize the results in the following ways:</p> <ul> <li> <p>Use the <code>filters</code> field to filter the results and the <code>sortBy</code> field to specify the values by which to sort the results.</p> </li> <li> <p>Use the <code>maxResults</code> field to limit the number of results to return in a single response and the <code>nextToken</code> field to return the next batch of results if the response does not return the full set of results.</p> </li> </ul>
		 * Post bots/{botId}/analytics/sessions
		 * @param {string} botId The identifier for the bot for which you want to retrieve session analytics.
		 *     Min length: 10    Max length: 10
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListSessionAnalyticsDataResponse} Success
		 */
		ListSessionAnalyticsData(botId: string, maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListSessionAnalyticsDataPostBody): Observable<ListSessionAnalyticsDataResponse> {
			return this.http.post<ListSessionAnalyticsDataResponse>(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/analytics/sessions&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves summary metrics for the user sessions with your bot. The following fields are required:</p> <ul> <li> <p> <code>metrics</code> – A list of <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_AnalyticsSessionMetric.html">AnalyticsSessionMetric</a> objects. In each object, use the <code>name</code> field to specify the metric to calculate, the <code>statistic</code> field to specify whether to calculate the <code>Sum</code>, <code>Average</code>, or <code>Max</code> number, and the <code>order</code> field to specify whether to sort the results in <code>Ascending</code> or <code>Descending</code> order.</p> </li> <li> <p> <code>startDateTime</code> and <code>endDateTime</code> – Define a time range for which you want to retrieve results.</p> </li> </ul> <p>Of the optional fields, you can organize the results in the following ways:</p> <ul> <li> <p>Use the <code>filters</code> field to filter the results, the <code>groupBy</code> field to specify categories by which to group the results, and the <code>binBy</code> field to specify time intervals by which to group the results.</p> </li> <li> <p>Use the <code>maxResults</code> field to limit the number of results to return in a single response and the <code>nextToken</code> field to return the next batch of results if the response does not return the full set of results.</p> </li> </ul> <p>Note that an <code>order</code> field exists in both <code>binBy</code> and <code>metrics</code>. Currently, you can specify it in either field, but not in both.</p>
		 * Post bots/{botId}/analytics/sessionmetrics
		 * @param {string} botId The identifier for the bot for which you want to retrieve session metrics.
		 *     Min length: 10    Max length: 10
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListSessionMetricsResponse} Success
		 */
		ListSessionMetrics(botId: string, maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListSessionMetricsPostBody): Observable<ListSessionMetricsResponse> {
			return this.http.post<ListSessionMetricsResponse>(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/analytics/sessionmetrics&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of tags associated with a resource. Only bots, bot aliases, and bot channels can have tags associated with them.
		 * Get tags/{resourceARN}
		 * @param {string} resourceARN The Amazon Resource Name (ARN) of the resource to get a list of tags for.
		 *     Min length: 1    Max length: 1011
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceARN: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceARN == null ? '' : encodeURIComponent(resourceARN)), {});
		}

		/**
		 * Adds the specified tags to the specified resource. If a tag key already exists, the existing value is replaced with the new value.
		 * Post tags/{resourceARN}
		 * @param {string} resourceARN The Amazon Resource Name (ARN) of the bot, bot alias, or bot channel to tag.
		 *     Min length: 1    Max length: 1011
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceARN: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceARN == null ? '' : encodeURIComponent(resourceARN)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of test execution result items.
		 * Post testexecutions/{testExecutionId}/results
		 * @param {string} testExecutionId The unique identifier of the test execution to list the result items.
		 *     Min length: 10    Max length: 10
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListTestExecutionResultItemsResponse} Success
		 */
		ListTestExecutionResultItems(testExecutionId: string, maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListTestExecutionResultItemsPostBody): Observable<ListTestExecutionResultItemsResponse> {
			return this.http.post<ListTestExecutionResultItemsResponse>(this.baseUri + 'testexecutions/' + (testExecutionId == null ? '' : encodeURIComponent(testExecutionId)) + '/results&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The list of test set executions.
		 * Post testexecutions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListTestExecutionsResponse} Success
		 */
		ListTestExecutions(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListTestExecutionsPostBody): Observable<ListTestExecutionsResponse> {
			return this.http.post<ListTestExecutionsResponse>(this.baseUri + 'testexecutions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The list of test set records.
		 * Post testsets/{testSetId}/records
		 * @param {string} testSetId The identifier of the test set to list its test set records.
		 *     Min length: 10    Max length: 10
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListTestSetRecordsResponse} Success
		 */
		ListTestSetRecords(testSetId: string, maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListTestSetRecordsPostBody): Observable<ListTestSetRecordsResponse> {
			return this.http.post<ListTestSetRecordsResponse>(this.baseUri + 'testsets/' + (testSetId == null ? '' : encodeURIComponent(testSetId)) + '/records&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The list of the test sets
		 * Post testsets
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListTestSetsResponse} Success
		 */
		ListTestSets(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListTestSetsPostBody): Observable<ListTestSetsResponse> {
			return this.http.post<ListTestSetsResponse>(this.baseUri + 'testsets?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>To use this API operation, your IAM role must have permissions to perform the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListAggregatedUtterances.html">ListAggregatedUtterances</a> operation, which provides access to utterance-related analytics. See <a href="https://docs.aws.amazon.com/lexv2/latest/dg/monitoring-utterances.html">Viewing utterance statistics</a> for the IAM policy to apply to the IAM role.</p> </note> <p>Retrieves a list of metadata for individual user utterances to your bot. The following fields are required:</p> <ul> <li> <p> <code>startDateTime</code> and <code>endDateTime</code> – Define a time range for which you want to retrieve results.</p> </li> </ul> <p>Of the optional fields, you can organize the results in the following ways:</p> <ul> <li> <p>Use the <code>filters</code> field to filter the results and the <code>sortBy</code> field to specify the values by which to sort the results.</p> </li> <li> <p>Use the <code>maxResults</code> field to limit the number of results to return in a single response and the <code>nextToken</code> field to return the next batch of results if the response does not return the full set of results.</p> </li> </ul>
		 * Post bots/{botId}/analytics/utterances
		 * @param {string} botId The identifier for the bot for which you want to retrieve utterance analytics.
		 *     Min length: 10    Max length: 10
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListUtteranceAnalyticsDataResponse} Success
		 */
		ListUtteranceAnalyticsData(botId: string, maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListUtteranceAnalyticsDataPostBody): Observable<ListUtteranceAnalyticsDataResponse> {
			return this.http.post<ListUtteranceAnalyticsDataResponse>(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/analytics/utterances&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>To use this API operation, your IAM role must have permissions to perform the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListAggregatedUtterances.html">ListAggregatedUtterances</a> operation, which provides access to utterance-related analytics. See <a href="https://docs.aws.amazon.com/lexv2/latest/dg/monitoring-utterances.html">Viewing utterance statistics</a> for the IAM policy to apply to the IAM role.</p> </note> <p>Retrieves summary metrics for the utterances in your bot. The following fields are required:</p> <ul> <li> <p> <code>metrics</code> – A list of <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_AnalyticsUtteranceMetric.html">AnalyticsUtteranceMetric</a> objects. In each object, use the <code>name</code> field to specify the metric to calculate, the <code>statistic</code> field to specify whether to calculate the <code>Sum</code>, <code>Average</code>, or <code>Max</code> number, and the <code>order</code> field to specify whether to sort the results in <code>Ascending</code> or <code>Descending</code> order.</p> </li> <li> <p> <code>startDateTime</code> and <code>endDateTime</code> – Define a time range for which you want to retrieve results.</p> </li> </ul> <p>Of the optional fields, you can organize the results in the following ways:</p> <ul> <li> <p>Use the <code>filters</code> field to filter the results, the <code>groupBy</code> field to specify categories by which to group the results, and the <code>binBy</code> field to specify time intervals by which to group the results.</p> </li> <li> <p>Use the <code>maxResults</code> field to limit the number of results to return in a single response and the <code>nextToken</code> field to return the next batch of results if the response does not return the full set of results.</p> </li> </ul> <p>Note that an <code>order</code> field exists in both <code>binBy</code> and <code>metrics</code>. Currently, you can specify it in either field, but not in both.</p>
		 * Post bots/{botId}/analytics/utterancemetrics
		 * @param {string} botId The identifier for the bot for which you want to retrieve utterance metrics.
		 *     Min length: 10    Max length: 10
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListUtteranceMetricsResponse} Success
		 */
		ListUtteranceMetrics(botId: string, maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListUtteranceMetricsPostBody): Observable<ListUtteranceMetricsResponse> {
			return this.http.post<ListUtteranceMetricsResponse>(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/analytics/utterancemetrics&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Search for associated transcripts that meet the specified criteria.
		 * Post bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}/associatedtranscripts
		 * @param {string} botId The unique identifier of the bot associated with the transcripts that you are searching.
		 *     Min length: 10    Max length: 10
		 * @param {string} botVersion The version of the bot containing the transcripts that you are searching.
		 *     Min length: 1    Max length: 5
		 * @param {string} localeId The identifier of the language and locale of the transcripts to search. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a> 
		 * @param {string} botRecommendationId The unique identifier of the bot recommendation associated with the transcripts to search.
		 *     Min length: 10    Max length: 10
		 * @return {SearchAssociatedTranscriptsResponse} Success
		 */
		SearchAssociatedTranscripts(botId: string, botVersion: string, localeId: string, botRecommendationId: string, requestBody: SearchAssociatedTranscriptsPostBody): Observable<SearchAssociatedTranscriptsResponse> {
			return this.http.post<SearchAssociatedTranscriptsResponse>(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/botversions/' + (botVersion == null ? '' : encodeURIComponent(botVersion)) + '/botlocales/' + (localeId == null ? '' : encodeURIComponent(localeId)) + '/botrecommendations/' + (botRecommendationId == null ? '' : encodeURIComponent(botRecommendationId)) + '/associatedtranscripts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The action to start test set execution.
		 * Post testsets/{testSetId}/testexecutions
		 * @param {string} testSetId The test set Id for the test set execution.
		 *     Min length: 10    Max length: 10
		 * @return {void} 
		 */
		StartTestExecution(testSetId: string, requestBody: StartTestExecutionPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'testsets/' + (testSetId == null ? '' : encodeURIComponent(testSetId)) + '/testexecutions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * The action to start the generation of test set.
		 * Put testsetgenerations
		 * @return {void} 
		 */
		StartTestSetGeneration(requestBody: StartTestSetGenerationPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'testsetgenerations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Stop an already running Bot Recommendation request.
		 * Put bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}/stopbotrecommendation
		 * @param {string} botId The unique identifier of the bot containing the bot recommendation to be stopped.
		 *     Min length: 10    Max length: 10
		 * @param {string} botVersion The version of the bot containing the bot recommendation.
		 *     Min length: 5    Max length: 5
		 * @param {string} localeId The identifier of the language and locale of the bot recommendation to stop. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a> 
		 * @param {string} botRecommendationId The unique identifier of the bot recommendation to be stopped.
		 *     Min length: 10    Max length: 10
		 * @return {void} 
		 */
		StopBotRecommendation(botId: string, botVersion: string, localeId: string, botRecommendationId: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/botversions/' + (botVersion == null ? '' : encodeURIComponent(botVersion)) + '/botlocales/' + (localeId == null ? '' : encodeURIComponent(localeId)) + '/botrecommendations/' + (botRecommendationId == null ? '' : encodeURIComponent(botRecommendationId)) + '/stopbotrecommendation', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes tags from a bot, bot alias, or bot channel.
		 * Delete tags/{resourceARN}#tagKeys
		 * @param {string} resourceARN The Amazon Resource Name (ARN) of the resource to remove the tags from.
		 *     Min length: 1    Max length: 1011
		 * @param {Array<string>} tagKeys A list of tag keys to remove from the resource. If a tag key does not exist on the resource, it is ignored.
		 *     Minimum items: 0    Maximum items: 200
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceARN: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceARN == null ? '' : encodeURIComponent(resourceARN)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface BatchCreateCustomVocabularyItemPutBody {

		/**
		 * A list of new custom vocabulary items. Each entry must contain a phrase and can optionally contain a displayAs and/or a weight.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		customVocabularyItemList: Array<NewCustomVocabularyItem>;
	}
	export interface BatchCreateCustomVocabularyItemPutBodyFormProperties {
	}
	export function CreateBatchCreateCustomVocabularyItemPutBodyFormGroup() {
		return new FormGroup<BatchCreateCustomVocabularyItemPutBodyFormProperties>({
		});

	}

	export interface BatchDeleteCustomVocabularyItemPostBody {

		/**
		 * A list of custom vocabulary items requested to be deleted. Each entry must contain the unique custom vocabulary entry identifier.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		customVocabularyItemList: Array<CustomVocabularyEntryId>;
	}
	export interface BatchDeleteCustomVocabularyItemPostBodyFormProperties {
	}
	export function CreateBatchDeleteCustomVocabularyItemPostBodyFormGroup() {
		return new FormGroup<BatchDeleteCustomVocabularyItemPostBodyFormProperties>({
		});

	}

	export interface BatchUpdateCustomVocabularyItemPutBody {

		/**
		 * A list of custom vocabulary items with updated fields. Each entry must contain a phrase and can optionally contain a displayAs and/or a weight.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		customVocabularyItemList: Array<CustomVocabularyItem>;
	}
	export interface BatchUpdateCustomVocabularyItemPutBodyFormProperties {
	}
	export function CreateBatchUpdateCustomVocabularyItemPutBodyFormGroup() {
		return new FormGroup<BatchUpdateCustomVocabularyItemPutBodyFormProperties>({
		});

	}

	export interface UpdateBotLocalePutBody {

		/**
		 * The new description of the locale.
		 * Min length: 0
		 * Max length: 200
		 */
		description?: string | null;

		/**
		 * The new confidence threshold where Amazon Lex inserts the <code>AMAZON.FallbackIntent</code> and <code>AMAZON.KendraSearchIntent</code> intents in the list of possible intents for an utterance.
		 * Required
		 * Minimum: 0
		 * Maximum: 1
		 */
		nluIntentConfidenceThreshold: number;

		/** Defines settings for using an Amazon Polly voice to communicate with a user. */
		voiceSettings?: UpdateBotLocalePutBodyVoiceSettings;
	}
	export interface UpdateBotLocalePutBodyFormProperties {

		/**
		 * The new description of the locale.
		 * Min length: 0
		 * Max length: 200
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The new confidence threshold where Amazon Lex inserts the <code>AMAZON.FallbackIntent</code> and <code>AMAZON.KendraSearchIntent</code> intents in the list of possible intents for an utterance.
		 * Required
		 * Minimum: 0
		 * Maximum: 1
		 */
		nluIntentConfidenceThreshold: FormControl<number | null | undefined>,
	}
	export function CreateUpdateBotLocalePutBodyFormGroup() {
		return new FormGroup<UpdateBotLocalePutBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(200)]),
			nluIntentConfidenceThreshold: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(1)]),
		});

	}

	export interface UpdateBotLocalePutBodyVoiceSettings {
		voiceId?: string;
		engine?: VoiceEngine;
	}
	export interface UpdateBotLocalePutBodyVoiceSettingsFormProperties {
		voiceId: FormControl<string | null | undefined>,
		engine: FormControl<VoiceEngine | null | undefined>,
	}
	export function CreateUpdateBotLocalePutBodyVoiceSettingsFormGroup() {
		return new FormGroup<UpdateBotLocalePutBodyVoiceSettingsFormProperties>({
			voiceId: new FormControl<string | null | undefined>(undefined),
			engine: new FormControl<VoiceEngine | null | undefined>(undefined),
		});

	}

	export interface CreateBotPutBody {

		/**
		 * The name of the bot. The bot name must be unique in the account that creates the bot.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		botName: string;

		/**
		 * A description of the bot. It appears in lists to help you identify a particular bot.
		 * Min length: 0
		 * Max length: 200
		 */
		description?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of an IAM role that has permission to access the bot.
		 * Required
		 * Min length: 32
		 * Max length: 2048
		 */
		roleArn: string;

		/**
		 * By default, data stored by Amazon Lex is encrypted. The <code>DataPrivacy</code> structure provides settings that determine how Amazon Lex handles special cases of securing the data for your bot.
		 * Required
		 */
		dataPrivacy: CreateBotPutBodyDataPrivacy;

		/**
		 * <p>The time, in seconds, that Amazon Lex should keep information about a user's conversation with the bot. </p> <p>A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Lex deletes any data provided before the timeout.</p> <p>You can specify between 60 (1 minute) and 86,400 (24 hours) seconds.</p>
		 * Required
		 * Minimum: 60
		 * Maximum: 86400
		 */
		idleSessionTTLInSeconds: number;

		/** A list of tags to add to the bot. You can only add tags when you create a bot. You can't use the <code>UpdateBot</code> operation to update tags. To update tags, use the <code>TagResource</code> operation. */
		botTags?: {[id: string]: string };

		/** A list of tags to add to the test alias for a bot. You can only add tags when you create a bot. You can't use the <code>UpdateAlias</code> operation to update tags. To update tags on the test alias, use the <code>TagResource</code> operation. */
		testBotAliasTags?: {[id: string]: string };

		/** The type of a bot to create. */
		botType?: BotType | null;

		/**
		 * The list of bot members in a network to be created.
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		botMembers?: Array<BotMember>;
	}
	export interface CreateBotPutBodyFormProperties {

		/**
		 * The name of the bot. The bot name must be unique in the account that creates the bot.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		botName: FormControl<string | null | undefined>,

		/**
		 * A description of the bot. It appears in lists to help you identify a particular bot.
		 * Min length: 0
		 * Max length: 200
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of an IAM role that has permission to access the bot.
		 * Required
		 * Min length: 32
		 * Max length: 2048
		 */
		roleArn: FormControl<string | null | undefined>,

		/**
		 * <p>The time, in seconds, that Amazon Lex should keep information about a user's conversation with the bot. </p> <p>A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Lex deletes any data provided before the timeout.</p> <p>You can specify between 60 (1 minute) and 86,400 (24 hours) seconds.</p>
		 * Required
		 * Minimum: 60
		 * Maximum: 86400
		 */
		idleSessionTTLInSeconds: FormControl<number | null | undefined>,

		/** A list of tags to add to the bot. You can only add tags when you create a bot. You can't use the <code>UpdateBot</code> operation to update tags. To update tags, use the <code>TagResource</code> operation. */
		botTags: FormControl<{[id: string]: string } | null | undefined>,

		/** A list of tags to add to the test alias for a bot. You can only add tags when you create a bot. You can't use the <code>UpdateAlias</code> operation to update tags. To update tags on the test alias, use the <code>TagResource</code> operation. */
		testBotAliasTags: FormControl<{[id: string]: string } | null | undefined>,

		/** The type of a bot to create. */
		botType: FormControl<BotType | null | undefined>,
	}
	export function CreateCreateBotPutBodyFormGroup() {
		return new FormGroup<CreateBotPutBodyFormProperties>({
			botName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^([0-9a-zA-Z][_-]?){1,100}$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(200)]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(32), Validators.maxLength(2048), Validators.pattern('^arn:aws:iam::[0-9]{12}:role/.*$')]),
			idleSessionTTLInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(60), Validators.max(86400)]),
			botTags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			testBotAliasTags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			botType: new FormControl<BotType | null | undefined>(undefined),
		});

	}

	export interface CreateBotPutBodyDataPrivacy {
		childDirected?: boolean | null;
	}
	export interface CreateBotPutBodyDataPrivacyFormProperties {
		childDirected: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateBotPutBodyDataPrivacyFormGroup() {
		return new FormGroup<CreateBotPutBodyDataPrivacyFormProperties>({
			childDirected: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListBotsPostBody {

		/** Specifies attributes for sorting a list of bots. */
		sortBy?: ListBotsPostBodySortBy;

		/**
		 * Provides the specification of a filter used to limit the bots in the response to only those that match the filter specification. You can only specify one filter and one string to filter on.
		 * Minimum items: 1
		 * Maximum items: 2
		 */
		filters?: Array<BotFilter>;

		/**
		 * The maximum number of bots to return in each page of results. If there are fewer results than the maximum page size, only the actual number of results are returned.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults?: number | null;

		/** <p>If the response from the <code>ListBots</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response. </p> <p>Use the returned token in the <code>nextToken</code> parameter of a <code>ListBots</code> request to return the next page of results. For a complete set of results, call the <code>ListBots</code> operation until the <code>nextToken</code> returned in the response is null.</p> */
		nextToken?: string | null;
	}
	export interface ListBotsPostBodyFormProperties {

		/**
		 * The maximum number of bots to return in each page of results. If there are fewer results than the maximum page size, only the actual number of results are returned.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,

		/** <p>If the response from the <code>ListBots</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response. </p> <p>Use the returned token in the <code>nextToken</code> parameter of a <code>ListBots</code> request to return the next page of results. For a complete set of results, call the <code>ListBots</code> operation until the <code>nextToken</code> returned in the response is null.</p> */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBotsPostBodyFormGroup() {
		return new FormGroup<ListBotsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBotsPostBodySortBy {
		attribute?: BotSortAttribute;
		order?: SortOrder;
	}
	export interface ListBotsPostBodySortByFormProperties {
		attribute: FormControl<BotSortAttribute | null | undefined>,
		order: FormControl<SortOrder | null | undefined>,
	}
	export function CreateListBotsPostBodySortByFormGroup() {
		return new FormGroup<ListBotsPostBodySortByFormProperties>({
			attribute: new FormControl<BotSortAttribute | null | undefined>(undefined),
			order: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}

	export interface CreateBotAliasPutBody {

		/**
		 * The alias to create. The name must be unique for the bot.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		botAliasName: string;

		/**
		 * A description of the alias. Use this description to help identify the alias.
		 * Min length: 0
		 * Max length: 200
		 */
		description?: string | null;

		/**
		 * The version of the bot that this alias points to. You can use the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_UpdateBotAlias.html">UpdateBotAlias</a> operation to change the bot version associated with the alias.
		 * Min length: 1
		 * Max length: 5
		 */
		botVersion?: string | null;

		/** Maps configuration information to a specific locale. You can use this parameter to specify a specific Lambda function to run different functions in different locales. */
		botAliasLocaleSettings?: {[id: string]: BotAliasLocaleSettings };

		/** Configures conversation logging that saves audio, text, and metadata for the conversations with your users. */
		conversationLogSettings?: CreateBotAliasPutBodyConversationLogSettings;

		/** Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances. */
		sentimentAnalysisSettings?: CreateBotAliasPutBodySentimentAnalysisSettings;

		/** A list of tags to add to the bot alias. You can only add tags when you create an alias, you can't use the <code>UpdateBotAlias</code> operation to update the tags on a bot alias. To update tags, use the <code>TagResource</code> operation. */
		tags?: {[id: string]: string };
	}
	export interface CreateBotAliasPutBodyFormProperties {

		/**
		 * The alias to create. The name must be unique for the bot.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		botAliasName: FormControl<string | null | undefined>,

		/**
		 * A description of the alias. Use this description to help identify the alias.
		 * Min length: 0
		 * Max length: 200
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The version of the bot that this alias points to. You can use the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_UpdateBotAlias.html">UpdateBotAlias</a> operation to change the bot version associated with the alias.
		 * Min length: 1
		 * Max length: 5
		 */
		botVersion: FormControl<string | null | undefined>,

		/** Maps configuration information to a specific locale. You can use this parameter to specify a specific Lambda function to run different functions in different locales. */
		botAliasLocaleSettings: FormControl<{[id: string]: BotAliasLocaleSettings } | null | undefined>,

		/** A list of tags to add to the bot alias. You can only add tags when you create an alias, you can't use the <code>UpdateBotAlias</code> operation to update the tags on a bot alias. To update tags, use the <code>TagResource</code> operation. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateBotAliasPutBodyFormGroup() {
		return new FormGroup<CreateBotAliasPutBodyFormProperties>({
			botAliasName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^([0-9a-zA-Z][_-]?){1,100}$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(200)]),
			botVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(5), Validators.pattern('^[0-9]+$')]),
			botAliasLocaleSettings: new FormControl<{[id: string]: BotAliasLocaleSettings } | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateBotAliasPutBodyConversationLogSettings {
		textLogSettings?: Array<TextLogSetting>;
		audioLogSettings?: Array<AudioLogSetting>;
	}
	export interface CreateBotAliasPutBodyConversationLogSettingsFormProperties {
	}
	export function CreateCreateBotAliasPutBodyConversationLogSettingsFormGroup() {
		return new FormGroup<CreateBotAliasPutBodyConversationLogSettingsFormProperties>({
		});

	}

	export interface CreateBotAliasPutBodySentimentAnalysisSettings {
		detectSentiment?: boolean | null;
	}
	export interface CreateBotAliasPutBodySentimentAnalysisSettingsFormProperties {
		detectSentiment: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateBotAliasPutBodySentimentAnalysisSettingsFormGroup() {
		return new FormGroup<CreateBotAliasPutBodySentimentAnalysisSettingsFormProperties>({
			detectSentiment: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListBotAliasesPostBody {

		/**
		 * The maximum number of aliases to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults?: number | null;

		/** If the response from the <code>ListBotAliases</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response. Use that token in the <code>nextToken</code> parameter to return the next page of results. */
		nextToken?: string | null;
	}
	export interface ListBotAliasesPostBodyFormProperties {

		/**
		 * The maximum number of aliases to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,

		/** If the response from the <code>ListBotAliases</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response. Use that token in the <code>nextToken</code> parameter to return the next page of results. */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBotAliasesPostBodyFormGroup() {
		return new FormGroup<ListBotAliasesPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateBotLocalePutBody {

		/**
		 * The identifier of the language and locale that the bot will be used in. The string must match one of the supported locales. All of the intents, slot types, and slots used in the bot must have the same locale. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.
		 * Required
		 */
		localeId: string;

		/**
		 * A description of the bot locale. Use this to help identify the bot locale in lists.
		 * Min length: 0
		 * Max length: 200
		 */
		description?: string | null;

		/**
		 * <p>Determines the threshold where Amazon Lex will insert the <code>AMAZON.FallbackIntent</code>, <code>AMAZON.KendraSearchIntent</code>, or both when returning alternative intents. <code>AMAZON.FallbackIntent</code> and <code>AMAZON.KendraSearchIntent</code> are only inserted if they are configured for the bot.</p> <p>For example, suppose a bot is configured with the confidence threshold of 0.80 and the <code>AMAZON.FallbackIntent</code>. Amazon Lex returns three alternative intents with the following confidence scores: IntentA (0.70), IntentB (0.60), IntentC (0.50). The response from the <code>RecognizeText</code> operation would be:</p> <ul> <li> <p>AMAZON.FallbackIntent</p> </li> <li> <p>IntentA</p> </li> <li> <p>IntentB</p> </li> <li> <p>IntentC</p> </li> </ul>
		 * Required
		 * Minimum: 0
		 * Maximum: 1
		 */
		nluIntentConfidenceThreshold: number;

		/** Defines settings for using an Amazon Polly voice to communicate with a user. */
		voiceSettings?: CreateBotLocalePutBodyVoiceSettings;
	}
	export interface CreateBotLocalePutBodyFormProperties {

		/**
		 * The identifier of the language and locale that the bot will be used in. The string must match one of the supported locales. All of the intents, slot types, and slots used in the bot must have the same locale. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.
		 * Required
		 */
		localeId: FormControl<string | null | undefined>,

		/**
		 * A description of the bot locale. Use this to help identify the bot locale in lists.
		 * Min length: 0
		 * Max length: 200
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * <p>Determines the threshold where Amazon Lex will insert the <code>AMAZON.FallbackIntent</code>, <code>AMAZON.KendraSearchIntent</code>, or both when returning alternative intents. <code>AMAZON.FallbackIntent</code> and <code>AMAZON.KendraSearchIntent</code> are only inserted if they are configured for the bot.</p> <p>For example, suppose a bot is configured with the confidence threshold of 0.80 and the <code>AMAZON.FallbackIntent</code>. Amazon Lex returns three alternative intents with the following confidence scores: IntentA (0.70), IntentB (0.60), IntentC (0.50). The response from the <code>RecognizeText</code> operation would be:</p> <ul> <li> <p>AMAZON.FallbackIntent</p> </li> <li> <p>IntentA</p> </li> <li> <p>IntentB</p> </li> <li> <p>IntentC</p> </li> </ul>
		 * Required
		 * Minimum: 0
		 * Maximum: 1
		 */
		nluIntentConfidenceThreshold: FormControl<number | null | undefined>,
	}
	export function CreateCreateBotLocalePutBodyFormGroup() {
		return new FormGroup<CreateBotLocalePutBodyFormProperties>({
			localeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(200)]),
			nluIntentConfidenceThreshold: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(1)]),
		});

	}

	export interface CreateBotLocalePutBodyVoiceSettings {
		voiceId?: string;
		engine?: VoiceEngine;
	}
	export interface CreateBotLocalePutBodyVoiceSettingsFormProperties {
		voiceId: FormControl<string | null | undefined>,
		engine: FormControl<VoiceEngine | null | undefined>,
	}
	export function CreateCreateBotLocalePutBodyVoiceSettingsFormGroup() {
		return new FormGroup<CreateBotLocalePutBodyVoiceSettingsFormProperties>({
			voiceId: new FormControl<string | null | undefined>(undefined),
			engine: new FormControl<VoiceEngine | null | undefined>(undefined),
		});

	}

	export interface ListBotLocalesPostBody {

		/** Specifies attributes for sorting a list of bot locales. */
		sortBy?: ListBotLocalesPostBodySortBy;

		/**
		 * Provides the specification for a filter used to limit the response to only those locales that match the filter specification. You can only specify one filter and one value to filter on.
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		filters?: Array<BotLocaleFilter>;

		/**
		 * The maximum number of aliases to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults?: number | null;

		/** If the response from the <code>ListBotLocales</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response. Use that token as the <code>nextToken</code> parameter to return the next page of results. */
		nextToken?: string | null;
	}
	export interface ListBotLocalesPostBodyFormProperties {

		/**
		 * The maximum number of aliases to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,

		/** If the response from the <code>ListBotLocales</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response. Use that token as the <code>nextToken</code> parameter to return the next page of results. */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBotLocalesPostBodyFormGroup() {
		return new FormGroup<ListBotLocalesPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBotLocalesPostBodySortBy {
		attribute?: BotLocaleSortAttribute;
		order?: SortOrder;
	}
	export interface ListBotLocalesPostBodySortByFormProperties {
		attribute: FormControl<BotLocaleSortAttribute | null | undefined>,
		order: FormControl<SortOrder | null | undefined>,
	}
	export function CreateListBotLocalesPostBodySortByFormGroup() {
		return new FormGroup<ListBotLocalesPostBodySortByFormProperties>({
			attribute: new FormControl<BotLocaleSortAttribute | null | undefined>(undefined),
			order: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}

	export interface CreateBotVersionPutBody {

		/**
		 * A description of the version. Use the description to help identify the version in lists.
		 * Min length: 0
		 * Max length: 200
		 */
		description?: string | null;

		/**
		 * Specifies the locales that Amazon Lex adds to this version. You can choose the <code>Draft</code> version or any other previously published version for each locale. When you specify a source version, the locale data is copied from the source version to the new version.
		 * Required
		 */
		botVersionLocaleSpecification: {[id: string]: BotVersionLocaleDetails };
	}
	export interface CreateBotVersionPutBodyFormProperties {

		/**
		 * A description of the version. Use the description to help identify the version in lists.
		 * Min length: 0
		 * Max length: 200
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Specifies the locales that Amazon Lex adds to this version. You can choose the <code>Draft</code> version or any other previously published version for each locale. When you specify a source version, the locale data is copied from the source version to the new version.
		 * Required
		 */
		botVersionLocaleSpecification: FormControl<{[id: string]: BotVersionLocaleDetails } | null | undefined>,
	}
	export function CreateCreateBotVersionPutBodyFormGroup() {
		return new FormGroup<CreateBotVersionPutBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(200)]),
			botVersionLocaleSpecification: new FormControl<{[id: string]: BotVersionLocaleDetails } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListBotVersionsPostBody {

		/** Specifies attributes for sorting a list of bot versions. */
		sortBy?: ListBotVersionsPostBodySortBy;

		/**
		 * The maximum number of versions to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults?: number | null;

		/** If the response to the <code>ListBotVersion</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response. Use that token in the <code>nextToken</code> parameter to return the next page of results. */
		nextToken?: string | null;
	}
	export interface ListBotVersionsPostBodyFormProperties {

		/**
		 * The maximum number of versions to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,

		/** If the response to the <code>ListBotVersion</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response. Use that token in the <code>nextToken</code> parameter to return the next page of results. */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBotVersionsPostBodyFormGroup() {
		return new FormGroup<ListBotVersionsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBotVersionsPostBodySortBy {
		attribute?: BotVersionSortAttribute;
		order?: SortOrder;
	}
	export interface ListBotVersionsPostBodySortByFormProperties {
		attribute: FormControl<BotVersionSortAttribute | null | undefined>,
		order: FormControl<SortOrder | null | undefined>,
	}
	export function CreateListBotVersionsPostBodySortByFormGroup() {
		return new FormGroup<ListBotVersionsPostBodySortByFormProperties>({
			attribute: new FormControl<BotVersionSortAttribute | null | undefined>(undefined),
			order: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}

	export interface CreateExportPutBody {

		/**
		 * Provides information about the bot or bot locale that you want to export. You can specify the <code>botExportSpecification</code> or the <code>botLocaleExportSpecification</code>, but not both.
		 * Required
		 */
		resourceSpecification: CreateExportPutBodyResourceSpecification;

		/**
		 * The file format of the bot or bot locale definition files.
		 * Required
		 */
		fileFormat: ImportExportFileFormat;

		/**
		 * An password to use to encrypt the exported archive. Using a password is optional, but you should encrypt the archive to protect the data in transit between Amazon Lex and your local computer.
		 * Min length: 1
		 * Max length: 1024
		 */
		filePassword?: string | null;
	}
	export interface CreateExportPutBodyFormProperties {

		/**
		 * The file format of the bot or bot locale definition files.
		 * Required
		 */
		fileFormat: FormControl<ImportExportFileFormat | null | undefined>,

		/**
		 * An password to use to encrypt the exported archive. Using a password is optional, but you should encrypt the archive to protect the data in transit between Amazon Lex and your local computer.
		 * Min length: 1
		 * Max length: 1024
		 */
		filePassword: FormControl<string | null | undefined>,
	}
	export function CreateCreateExportPutBodyFormGroup() {
		return new FormGroup<CreateExportPutBodyFormProperties>({
			fileFormat: new FormControl<ImportExportFileFormat | null | undefined>(undefined, [Validators.required]),
			filePassword: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface CreateExportPutBodyResourceSpecification {
		botExportSpecification?: BotExportSpecification;
		botLocaleExportSpecification?: BotLocaleExportSpecification;
		customVocabularyExportSpecification?: CustomVocabularyExportSpecification;
		testSetExportSpecification?: TestSetExportSpecification;
	}
	export interface CreateExportPutBodyResourceSpecificationFormProperties {
	}
	export function CreateCreateExportPutBodyResourceSpecificationFormGroup() {
		return new FormGroup<CreateExportPutBodyResourceSpecificationFormProperties>({
		});

	}

	export interface ListExportsPostBody {

		/**
		 * The unique identifier that Amazon Lex assigned to the bot.
		 * Min length: 10
		 * Max length: 10
		 */
		botId?: string | null;

		/**
		 * The version of the bot to list exports for.
		 * Min length: 1
		 * Max length: 5
		 */
		botVersion?: string | null;

		/** Provides information about sorting a list of exports. */
		sortBy?: ListExportsPostBodySortBy;

		/**
		 * Provides the specification of a filter used to limit the exports in the response to only those that match the filter specification. You can only specify one filter and one string to filter on.
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		filters?: Array<ExportFilter>;

		/**
		 * The maximum number of exports to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults?: number | null;

		/** <p>If the response from the <code>ListExports</code> operation contains more results that specified in the <code>maxResults</code> parameter, a token is returned in the response. </p> <p>Use the returned token in the <code>nextToken</code> parameter of a <code>ListExports</code> request to return the next page of results. For a complete set of results, call the <code>ListExports</code> operation until the <code>nextToken</code> returned in the response is null.</p> */
		nextToken?: string | null;

		/** Specifies the resources that should be exported. If you don't specify a resource type in the <code>filters</code> parameter, both bot locales and custom vocabularies are exported. */
		localeId?: string | null;
	}
	export interface ListExportsPostBodyFormProperties {

		/**
		 * The unique identifier that Amazon Lex assigned to the bot.
		 * Min length: 10
		 * Max length: 10
		 */
		botId: FormControl<string | null | undefined>,

		/**
		 * The version of the bot to list exports for.
		 * Min length: 1
		 * Max length: 5
		 */
		botVersion: FormControl<string | null | undefined>,

		/**
		 * The maximum number of exports to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,

		/** <p>If the response from the <code>ListExports</code> operation contains more results that specified in the <code>maxResults</code> parameter, a token is returned in the response. </p> <p>Use the returned token in the <code>nextToken</code> parameter of a <code>ListExports</code> request to return the next page of results. For a complete set of results, call the <code>ListExports</code> operation until the <code>nextToken</code> returned in the response is null.</p> */
		nextToken: FormControl<string | null | undefined>,

		/** Specifies the resources that should be exported. If you don't specify a resource type in the <code>filters</code> parameter, both bot locales and custom vocabularies are exported. */
		localeId: FormControl<string | null | undefined>,
	}
	export function CreateListExportsPostBodyFormGroup() {
		return new FormGroup<ListExportsPostBodyFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9a-zA-Z]+$')]),
			botVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(5), Validators.pattern('^(DRAFT|[0-9]+)$')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			localeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListExportsPostBodySortBy {
		attribute?: ExportSortAttribute;
		order?: SortOrder;
	}
	export interface ListExportsPostBodySortByFormProperties {
		attribute: FormControl<ExportSortAttribute | null | undefined>,
		order: FormControl<SortOrder | null | undefined>,
	}
	export function CreateListExportsPostBodySortByFormGroup() {
		return new FormGroup<ListExportsPostBodySortByFormProperties>({
			attribute: new FormControl<ExportSortAttribute | null | undefined>(undefined),
			order: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}

	export interface CreateIntentPutBody {

		/**
		 * The name of the intent. Intent names must be unique in the locale that contains the intent and cannot match the name of any built-in intent.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		intentName: string;

		/**
		 * A description of the intent. Use the description to help identify the intent in lists.
		 * Min length: 0
		 * Max length: 200
		 */
		description?: string | null;

		/** A unique identifier for the built-in intent to base this intent on. */
		parentIntentSignature?: string | null;

		/** <p>An array of strings that a user might say to signal the intent. For example, "I want a pizza", or "I want a {PizzaSize} pizza". </p> <p>In an utterance, slot names are enclosed in curly braces ("{", "}") to indicate where they should be displayed in the utterance shown to the user.. </p> */
		sampleUtterances?: Array<SampleUtterance>;

		/** Settings that determine the Lambda function that Amazon Lex uses for processing user responses. */
		dialogCodeHook?: CreateIntentPutBodyDialogCodeHook;

		/** Determines if a Lambda function should be invoked for a specific intent. */
		fulfillmentCodeHook?: CreateIntentPutBodyFulfillmentCodeHook;

		/** Provides a prompt for making sure that the user is ready for the intent to be fulfilled. */
		intentConfirmationSetting?: CreateIntentPutBodyIntentConfirmationSetting;

		/** Provides a statement the Amazon Lex conveys to the user when the intent is successfully fulfilled. */
		intentClosingSetting?: CreateIntentPutBodyIntentClosingSetting;

		/**
		 * <p>A list of contexts that must be active for this intent to be considered by Amazon Lex.</p> <p>When an intent has an input context list, Amazon Lex only considers using the intent in an interaction with the user when the specified contexts are included in the active context list for the session. If the contexts are not active, then Amazon Lex will not use the intent.</p> <p>A context can be automatically activated using the <code>outputContexts</code> property or it can be set at runtime.</p> <p> For example, if there are two intents with different input contexts that respond to the same utterances, only the intent with the active context will respond.</p> <p>An intent may have up to 5 input contexts. If an intent has multiple input contexts, all of the contexts must be active to consider the intent.</p>
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		inputContexts?: Array<InputContext>;

		/**
		 * <p>A lists of contexts that the intent activates when it is fulfilled.</p> <p>You can use an output context to indicate the intents that Amazon Lex should consider for the next turn of the conversation with a customer. </p> <p>When you use the <code>outputContextsList</code> property, all of the contexts specified in the list are activated when the intent is fulfilled. You can set up to 10 output contexts. You can also set the number of conversation turns that the context should be active, or the length of time that the context should be active.</p>
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		outputContexts?: Array<OutputContext>;

		/** Provides configuration information for the <code>AMAZON.KendraSearchIntent</code> intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance. */
		kendraConfiguration?: CreateIntentPutBodyKendraConfiguration;

		/** Configuration setting for a response sent to the user before Amazon Lex starts eliciting slots. */
		initialResponseSetting?: CreateIntentPutBodyInitialResponseSetting;
	}
	export interface CreateIntentPutBodyFormProperties {

		/**
		 * The name of the intent. Intent names must be unique in the locale that contains the intent and cannot match the name of any built-in intent.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		intentName: FormControl<string | null | undefined>,

		/**
		 * A description of the intent. Use the description to help identify the intent in lists.
		 * Min length: 0
		 * Max length: 200
		 */
		description: FormControl<string | null | undefined>,

		/** A unique identifier for the built-in intent to base this intent on. */
		parentIntentSignature: FormControl<string | null | undefined>,
	}
	export function CreateCreateIntentPutBodyFormGroup() {
		return new FormGroup<CreateIntentPutBodyFormProperties>({
			intentName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^([0-9a-zA-Z][_-]?){1,100}$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(200)]),
			parentIntentSignature: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateIntentPutBodyDialogCodeHook {
		enabled?: boolean | null;
	}
	export interface CreateIntentPutBodyDialogCodeHookFormProperties {
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateIntentPutBodyDialogCodeHookFormGroup() {
		return new FormGroup<CreateIntentPutBodyDialogCodeHookFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateIntentPutBodyFulfillmentCodeHook {
		enabled?: boolean | null;
		postFulfillmentStatusSpecification?: PostFulfillmentStatusSpecification;
		fulfillmentUpdatesSpecification?: FulfillmentUpdatesSpecification;
		active?: boolean | null;
	}
	export interface CreateIntentPutBodyFulfillmentCodeHookFormProperties {
		enabled: FormControl<boolean | null | undefined>,
		active: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateIntentPutBodyFulfillmentCodeHookFormGroup() {
		return new FormGroup<CreateIntentPutBodyFulfillmentCodeHookFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			active: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateIntentPutBodyIntentConfirmationSetting {
		promptSpecification?: PromptSpecification;
		declinationResponse?: ResponseSpecification;
		active?: boolean | null;

		/** Specifies a list of message groups that Amazon Lex uses to respond the user input. */
		confirmationResponse?: ResponseSpecification;
		confirmationNextStep?: DialogState;
		confirmationConditional?: ConditionalSpecification;
		declinationNextStep?: DialogState;
		declinationConditional?: ConditionalSpecification;

		/** Specifies a list of message groups that Amazon Lex uses to respond the user input. */
		failureResponse?: ResponseSpecification;
		failureNextStep?: DialogState;

		/** Provides a list of conditional branches. Branches are evaluated in the order that they are entered in the list. The first branch with a condition that evaluates to true is executed. The last branch in the list is the default branch. The default branch should not have any condition expression. The default branch is executed if no other branch has a matching condition. */
		failureConditional?: ConditionalSpecification;
		codeHook?: DialogCodeHookInvocationSetting;
		elicitationCodeHook?: ElicitationCodeHookInvocationSetting;
	}
	export interface CreateIntentPutBodyIntentConfirmationSettingFormProperties {
		active: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateIntentPutBodyIntentConfirmationSettingFormGroup() {
		return new FormGroup<CreateIntentPutBodyIntentConfirmationSettingFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateIntentPutBodyIntentClosingSetting {
		closingResponse?: ResponseSpecification;
		active?: boolean | null;
		nextStep?: DialogState;
		conditional?: ConditionalSpecification;
	}
	export interface CreateIntentPutBodyIntentClosingSettingFormProperties {
		active: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateIntentPutBodyIntentClosingSettingFormGroup() {
		return new FormGroup<CreateIntentPutBodyIntentClosingSettingFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateIntentPutBodyKendraConfiguration {
		kendraIndex?: string;
		queryFilterStringEnabled?: boolean | null;
		queryFilterString?: string;
	}
	export interface CreateIntentPutBodyKendraConfigurationFormProperties {
		kendraIndex: FormControl<string | null | undefined>,
		queryFilterStringEnabled: FormControl<boolean | null | undefined>,
		queryFilterString: FormControl<string | null | undefined>,
	}
	export function CreateCreateIntentPutBodyKendraConfigurationFormGroup() {
		return new FormGroup<CreateIntentPutBodyKendraConfigurationFormProperties>({
			kendraIndex: new FormControl<string | null | undefined>(undefined),
			queryFilterStringEnabled: new FormControl<boolean | null | undefined>(undefined),
			queryFilterString: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateIntentPutBodyInitialResponseSetting {

		/** Specifies a list of message groups that Amazon Lex uses to respond the user input. */
		initialResponse?: ResponseSpecification;
		nextStep?: DialogState;

		/** Provides a list of conditional branches. Branches are evaluated in the order that they are entered in the list. The first branch with a condition that evaluates to true is executed. The last branch in the list is the default branch. The default branch should not have any condition expression. The default branch is executed if no other branch has a matching condition. */
		conditional?: ConditionalSpecification;

		/** Settings that specify the dialog code hook that is called by Amazon Lex at a step of the conversation. */
		codeHook?: DialogCodeHookInvocationSetting;
	}
	export interface CreateIntentPutBodyInitialResponseSettingFormProperties {
	}
	export function CreateCreateIntentPutBodyInitialResponseSettingFormGroup() {
		return new FormGroup<CreateIntentPutBodyInitialResponseSettingFormProperties>({
		});

	}

	export interface ListIntentsPostBody {

		/** Specifies attributes for sorting a list of intents. */
		sortBy?: ListIntentsPostBodySortBy;

		/**
		 * Provides the specification of a filter used to limit the intents in the response to only those that match the filter specification. You can only specify one filter and only one string to filter on.
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		filters?: Array<IntentFilter>;

		/**
		 * The maximum number of intents to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults?: number | null;

		/** <p>If the response from the <code>ListIntents</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response.</p> <p>Use the returned token in the <code>nextToken</code> parameter of a <code>ListIntents</code> request to return the next page of results. For a complete set of results, call the <code>ListIntents</code> operation until the <code>nextToken</code> returned in the response is null.</p> */
		nextToken?: string | null;
	}
	export interface ListIntentsPostBodyFormProperties {

		/**
		 * The maximum number of intents to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,

		/** <p>If the response from the <code>ListIntents</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response.</p> <p>Use the returned token in the <code>nextToken</code> parameter of a <code>ListIntents</code> request to return the next page of results. For a complete set of results, call the <code>ListIntents</code> operation until the <code>nextToken</code> returned in the response is null.</p> */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIntentsPostBodyFormGroup() {
		return new FormGroup<ListIntentsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListIntentsPostBodySortBy {
		attribute?: IntentSortAttribute;
		order?: SortOrder;
	}
	export interface ListIntentsPostBodySortByFormProperties {
		attribute: FormControl<IntentSortAttribute | null | undefined>,
		order: FormControl<SortOrder | null | undefined>,
	}
	export function CreateListIntentsPostBodySortByFormGroup() {
		return new FormGroup<ListIntentsPostBodySortByFormProperties>({
			attribute: new FormControl<IntentSortAttribute | null | undefined>(undefined),
			order: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}

	export interface CreateResourcePolicyPostBody {

		/**
		 * <p>A resource policy to add to the resource. The policy is a JSON structure that contains one or more statements that define the policy. The policy must follow the IAM syntax. For more information about the contents of a JSON policy document, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies.html"> IAM JSON policy reference </a>. </p> <p>If the policy isn't valid, Amazon Lex returns a validation exception.</p>
		 * Required
		 * Min length: 2
		 */
		policy: string;
	}
	export interface CreateResourcePolicyPostBodyFormProperties {

		/**
		 * <p>A resource policy to add to the resource. The policy is a JSON structure that contains one or more statements that define the policy. The policy must follow the IAM syntax. For more information about the contents of a JSON policy document, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies.html"> IAM JSON policy reference </a>. </p> <p>If the policy isn't valid, Amazon Lex returns a validation exception.</p>
		 * Required
		 * Min length: 2
		 */
		policy: FormControl<string | null | undefined>,
	}
	export function CreateCreateResourcePolicyPostBodyFormGroup() {
		return new FormGroup<CreateResourcePolicyPostBodyFormProperties>({
			policy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2)]),
		});

	}

	export interface UpdateResourcePolicyPutBody {

		/**
		 * <p>A resource policy to add to the resource. The policy is a JSON structure that contains one or more statements that define the policy. The policy must follow the IAM syntax. For more information about the contents of a JSON policy document, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies.html"> IAM JSON policy reference </a>. </p> <p>If the policy isn't valid, Amazon Lex returns a validation exception.</p>
		 * Required
		 * Min length: 2
		 */
		policy: string;
	}
	export interface UpdateResourcePolicyPutBodyFormProperties {

		/**
		 * <p>A resource policy to add to the resource. The policy is a JSON structure that contains one or more statements that define the policy. The policy must follow the IAM syntax. For more information about the contents of a JSON policy document, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies.html"> IAM JSON policy reference </a>. </p> <p>If the policy isn't valid, Amazon Lex returns a validation exception.</p>
		 * Required
		 * Min length: 2
		 */
		policy: FormControl<string | null | undefined>,
	}
	export function CreateUpdateResourcePolicyPutBodyFormGroup() {
		return new FormGroup<UpdateResourcePolicyPutBodyFormProperties>({
			policy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2)]),
		});

	}

	export interface CreateResourcePolicyStatementPostBody {

		/**
		 * The name of the statement. The ID is the same as the <code>Sid</code> IAM property. The statement name must be unique within the policy. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html">IAM JSON policy elements: Sid</a>.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		statementId: string;

		/**
		 * Determines whether the statement allows or denies access to the resource.
		 * Required
		 */
		effect: Effect;

		/**
		 * An IAM principal, such as an IAM user, IAM role, or Amazon Web Services services that is allowed or denied access to a resource. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html">Amazon Web Services JSON policy elements: Principal</a>.
		 * Required
		 */
		principal: Array<Principal>;

		/**
		 * The Amazon Lex action that this policy either allows or denies. The action must apply to the resource type of the specified ARN. For more information, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlexv2.html"> Actions, resources, and condition keys for Amazon Lex V2</a>.
		 * Required
		 */
		action: Array<string>;

		/** <p>Specifies a condition when the policy is in effect. If the principal of the policy is a service principal, you must provide two condition blocks, one with a SourceAccount global condition key and one with a SourceArn global condition key.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition.html">IAM JSON policy elements: Condition </a>.</p> */
		condition?: {[id: string]: ConditionKeyValueMap };
	}
	export interface CreateResourcePolicyStatementPostBodyFormProperties {

		/**
		 * The name of the statement. The ID is the same as the <code>Sid</code> IAM property. The statement name must be unique within the policy. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html">IAM JSON policy elements: Sid</a>.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		statementId: FormControl<string | null | undefined>,

		/**
		 * Determines whether the statement allows or denies access to the resource.
		 * Required
		 */
		effect: FormControl<Effect | null | undefined>,

		/** <p>Specifies a condition when the policy is in effect. If the principal of the policy is a service principal, you must provide two condition blocks, one with a SourceAccount global condition key and one with a SourceArn global condition key.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition.html">IAM JSON policy elements: Condition </a>.</p> */
		condition: FormControl<{[id: string]: ConditionKeyValueMap } | null | undefined>,
	}
	export function CreateCreateResourcePolicyStatementPostBodyFormGroup() {
		return new FormGroup<CreateResourcePolicyStatementPostBodyFormProperties>({
			statementId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^([0-9a-zA-Z][_-]?){1,100}$')]),
			effect: new FormControl<Effect | null | undefined>(undefined, [Validators.required]),
			condition: new FormControl<{[id: string]: ConditionKeyValueMap } | null | undefined>(undefined),
		});

	}

	export interface CreateSlotPutBody {

		/**
		 * The name of the slot. Slot names must be unique within the bot that contains the slot.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		slotName: string;

		/**
		 * A description of the slot. Use this to help identify the slot in lists.
		 * Min length: 0
		 * Max length: 200
		 */
		description?: string | null;

		/**
		 * The unique identifier for the slot type associated with this slot. The slot type determines the values that can be entered into the slot.
		 * Min length: 1
		 * Max length: 25
		 */
		slotTypeId?: string | null;

		/**
		 * Specifies the elicitation setting details eliciting a slot.
		 * Required
		 */
		valueElicitationSetting: CreateSlotPutBodyValueElicitationSetting;

		/** Determines whether Amazon Lex obscures slot values in conversation logs. */
		obfuscationSetting?: CreateSlotPutBodyObfuscationSetting;

		/** Indicates whether a slot can return multiple values. */
		multipleValuesSetting?: CreateSlotPutBodyMultipleValuesSetting;

		/** Specifications for the constituent sub slots and the expression for the composite slot. */
		subSlotSetting?: CreateSlotPutBodySubSlotSetting;
	}
	export interface CreateSlotPutBodyFormProperties {

		/**
		 * The name of the slot. Slot names must be unique within the bot that contains the slot.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		slotName: FormControl<string | null | undefined>,

		/**
		 * A description of the slot. Use this to help identify the slot in lists.
		 * Min length: 0
		 * Max length: 200
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The unique identifier for the slot type associated with this slot. The slot type determines the values that can be entered into the slot.
		 * Min length: 1
		 * Max length: 25
		 */
		slotTypeId: FormControl<string | null | undefined>,
	}
	export function CreateCreateSlotPutBodyFormGroup() {
		return new FormGroup<CreateSlotPutBodyFormProperties>({
			slotName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^([0-9a-zA-Z][_-]?){1,100}$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(200)]),
			slotTypeId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(25), Validators.pattern('^((AMAZON\.)[a-zA-Z_]+?|[0-9a-zA-Z]+)$')]),
		});

	}

	export interface CreateSlotPutBodyValueElicitationSetting {
		defaultValueSpecification?: SlotDefaultValueSpecification;
		slotConstraint?: SlotConstraint;
		promptSpecification?: PromptSpecification;
		sampleUtterances?: Array<SampleUtterance>;

		/** Specifies the prompts that Amazon Lex uses while a bot is waiting for customer input. */
		waitAndContinueSpecification?: WaitAndContinueSpecification;
		slotCaptureSetting?: SlotCaptureSetting;
	}
	export interface CreateSlotPutBodyValueElicitationSettingFormProperties {
		slotConstraint: FormControl<SlotConstraint | null | undefined>,
	}
	export function CreateCreateSlotPutBodyValueElicitationSettingFormGroup() {
		return new FormGroup<CreateSlotPutBodyValueElicitationSettingFormProperties>({
			slotConstraint: new FormControl<SlotConstraint | null | undefined>(undefined),
		});

	}

	export interface CreateSlotPutBodyObfuscationSetting {
		obfuscationSettingType?: ObfuscationSettingType;
	}
	export interface CreateSlotPutBodyObfuscationSettingFormProperties {
		obfuscationSettingType: FormControl<ObfuscationSettingType | null | undefined>,
	}
	export function CreateCreateSlotPutBodyObfuscationSettingFormGroup() {
		return new FormGroup<CreateSlotPutBodyObfuscationSettingFormProperties>({
			obfuscationSettingType: new FormControl<ObfuscationSettingType | null | undefined>(undefined),
		});

	}

	export interface CreateSlotPutBodyMultipleValuesSetting {
		allowMultipleValues?: boolean | null;
	}
	export interface CreateSlotPutBodyMultipleValuesSettingFormProperties {
		allowMultipleValues: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateSlotPutBodyMultipleValuesSettingFormGroup() {
		return new FormGroup<CreateSlotPutBodyMultipleValuesSettingFormProperties>({
			allowMultipleValues: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateSlotPutBodySubSlotSetting {
		expression?: string;
		slotSpecifications?: SubSlotSpecificationMap;
	}
	export interface CreateSlotPutBodySubSlotSettingFormProperties {
		expression: FormControl<string | null | undefined>,
	}
	export function CreateCreateSlotPutBodySubSlotSettingFormGroup() {
		return new FormGroup<CreateSlotPutBodySubSlotSettingFormProperties>({
			expression: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSlotsPostBody {

		/** Specifies attributes for sorting a list of bots. */
		sortBy?: ListSlotsPostBodySortBy;

		/**
		 * Provides the specification of a filter used to limit the slots in the response to only those that match the filter specification. You can only specify one filter and only one string to filter on.
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		filters?: Array<SlotFilter>;

		/**
		 * The maximum number of slots to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults?: number | null;

		/** If the response from the <code>ListSlots</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response. Use that token in the <code>nextToken</code> parameter to return the next page of results. */
		nextToken?: string | null;
	}
	export interface ListSlotsPostBodyFormProperties {

		/**
		 * The maximum number of slots to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,

		/** If the response from the <code>ListSlots</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response. Use that token in the <code>nextToken</code> parameter to return the next page of results. */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSlotsPostBodyFormGroup() {
		return new FormGroup<ListSlotsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSlotsPostBodySortBy {
		attribute?: SlotSortAttribute;
		order?: SortOrder;
	}
	export interface ListSlotsPostBodySortByFormProperties {
		attribute: FormControl<SlotSortAttribute | null | undefined>,
		order: FormControl<SortOrder | null | undefined>,
	}
	export function CreateListSlotsPostBodySortByFormGroup() {
		return new FormGroup<ListSlotsPostBodySortByFormProperties>({
			attribute: new FormControl<SlotSortAttribute | null | undefined>(undefined),
			order: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}

	export interface CreateSlotTypePutBody {

		/**
		 * The name for the slot. A slot type name must be unique within the intent.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		slotTypeName: string;

		/**
		 * A description of the slot type. Use the description to help identify the slot type in lists.
		 * Min length: 0
		 * Max length: 200
		 */
		description?: string | null;

		/**
		 * A list of <code>SlotTypeValue</code> objects that defines the values that the slot type can take. Each value can have a list of synonyms, additional values that help train the machine learning model about the values that it resolves for a slot.
		 * Minimum items: 1
		 * Maximum items: 10000
		 */
		slotTypeValues?: Array<SlotTypeValue>;

		/** Contains settings used by Amazon Lex to select a slot value. */
		valueSelectionSetting?: CreateSlotTypePutBodyValueSelectionSetting;

		/** <p>The built-in slot type used as a parent of this slot type. When you define a parent slot type, the new slot type has the configuration of the parent slot type.</p> <p>Only <code>AMAZON.AlphaNumeric</code> is supported.</p> */
		parentSlotTypeSignature?: string | null;

		/** Provides information about the external source of the slot type's definition. */
		externalSourceSetting?: CreateSlotTypePutBodyExternalSourceSetting;

		/** A composite slot is a combination of two or more slots that capture multiple pieces of information in a single user input. */
		compositeSlotTypeSetting?: CreateSlotTypePutBodyCompositeSlotTypeSetting;
	}
	export interface CreateSlotTypePutBodyFormProperties {

		/**
		 * The name for the slot. A slot type name must be unique within the intent.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		slotTypeName: FormControl<string | null | undefined>,

		/**
		 * A description of the slot type. Use the description to help identify the slot type in lists.
		 * Min length: 0
		 * Max length: 200
		 */
		description: FormControl<string | null | undefined>,

		/** <p>The built-in slot type used as a parent of this slot type. When you define a parent slot type, the new slot type has the configuration of the parent slot type.</p> <p>Only <code>AMAZON.AlphaNumeric</code> is supported.</p> */
		parentSlotTypeSignature: FormControl<string | null | undefined>,
	}
	export function CreateCreateSlotTypePutBodyFormGroup() {
		return new FormGroup<CreateSlotTypePutBodyFormProperties>({
			slotTypeName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^([0-9a-zA-Z][_-]?){1,100}$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(200)]),
			parentSlotTypeSignature: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSlotTypePutBodyValueSelectionSetting {
		resolutionStrategy?: SlotValueResolutionStrategy;
		regexFilter?: SlotValueRegexFilter;
		advancedRecognitionSetting?: AdvancedRecognitionSetting;
	}
	export interface CreateSlotTypePutBodyValueSelectionSettingFormProperties {
		resolutionStrategy: FormControl<SlotValueResolutionStrategy | null | undefined>,
	}
	export function CreateCreateSlotTypePutBodyValueSelectionSettingFormGroup() {
		return new FormGroup<CreateSlotTypePutBodyValueSelectionSettingFormProperties>({
			resolutionStrategy: new FormControl<SlotValueResolutionStrategy | null | undefined>(undefined),
		});

	}

	export interface CreateSlotTypePutBodyExternalSourceSetting {
		grammarSlotTypeSetting?: GrammarSlotTypeSetting;
	}
	export interface CreateSlotTypePutBodyExternalSourceSettingFormProperties {
	}
	export function CreateCreateSlotTypePutBodyExternalSourceSettingFormGroup() {
		return new FormGroup<CreateSlotTypePutBodyExternalSourceSettingFormProperties>({
		});

	}

	export interface CreateSlotTypePutBodyCompositeSlotTypeSetting {
		subSlots?: Array<SubSlotTypeComposition>;
	}
	export interface CreateSlotTypePutBodyCompositeSlotTypeSettingFormProperties {
	}
	export function CreateCreateSlotTypePutBodyCompositeSlotTypeSettingFormGroup() {
		return new FormGroup<CreateSlotTypePutBodyCompositeSlotTypeSettingFormProperties>({
		});

	}

	export interface ListSlotTypesPostBody {

		/** Specifies attributes for sorting a list of slot types. */
		sortBy?: ListSlotTypesPostBodySortBy;

		/**
		 * Provides the specification of a filter used to limit the slot types in the response to only those that match the filter specification. You can only specify one filter and only one string to filter on.
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		filters?: Array<SlotTypeFilter>;

		/**
		 * The maximum number of slot types to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults?: number | null;

		/** If the response from the <code>ListSlotTypes</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response. Use that token in the <code>nextToken</code> parameter to return the next page of results. */
		nextToken?: string | null;
	}
	export interface ListSlotTypesPostBodyFormProperties {

		/**
		 * The maximum number of slot types to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,

		/** If the response from the <code>ListSlotTypes</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response. Use that token in the <code>nextToken</code> parameter to return the next page of results. */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSlotTypesPostBodyFormGroup() {
		return new FormGroup<ListSlotTypesPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSlotTypesPostBodySortBy {
		attribute?: SlotTypeSortAttribute;
		order?: SortOrder;
	}
	export interface ListSlotTypesPostBodySortByFormProperties {
		attribute: FormControl<SlotTypeSortAttribute | null | undefined>,
		order: FormControl<SortOrder | null | undefined>,
	}
	export function CreateListSlotTypesPostBodySortByFormGroup() {
		return new FormGroup<ListSlotTypesPostBodySortByFormProperties>({
			attribute: new FormControl<SlotTypeSortAttribute | null | undefined>(undefined),
			order: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}

	export interface CreateTestSetDiscrepancyReportPostBody {

		/**
		 * Contains information about the resource used for the test set discrepancy report.
		 * Required
		 */
		target: CreateTestSetDiscrepancyReportPostBodyTarget;
	}
	export interface CreateTestSetDiscrepancyReportPostBodyFormProperties {
	}
	export function CreateCreateTestSetDiscrepancyReportPostBodyFormGroup() {
		return new FormGroup<CreateTestSetDiscrepancyReportPostBodyFormProperties>({
		});

	}

	export interface CreateTestSetDiscrepancyReportPostBodyTarget {
		botAliasTarget?: TestSetDiscrepancyReportBotAliasTarget;
	}
	export interface CreateTestSetDiscrepancyReportPostBodyTargetFormProperties {
	}
	export function CreateCreateTestSetDiscrepancyReportPostBodyTargetFormGroup() {
		return new FormGroup<CreateTestSetDiscrepancyReportPostBodyTargetFormProperties>({
		});

	}

	export interface UpdateBotPutBody {

		/**
		 * The new name of the bot. The name must be unique in the account that creates the bot.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		botName: string;

		/**
		 * A description of the bot.
		 * Min length: 0
		 * Max length: 200
		 */
		description?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of an IAM role that has permissions to access the bot.
		 * Required
		 * Min length: 32
		 * Max length: 2048
		 */
		roleArn: string;

		/**
		 * By default, data stored by Amazon Lex is encrypted. The <code>DataPrivacy</code> structure provides settings that determine how Amazon Lex handles special cases of securing the data for your bot.
		 * Required
		 */
		dataPrivacy: UpdateBotPutBodyDataPrivacy;

		/**
		 * <p>The time, in seconds, that Amazon Lex should keep information about a user's conversation with the bot.</p> <p>A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Lex deletes any data provided before the timeout.</p> <p>You can specify between 60 (1 minute) and 86,400 (24 hours) seconds.</p>
		 * Required
		 * Minimum: 60
		 * Maximum: 86400
		 */
		idleSessionTTLInSeconds: number;

		/** The type of the bot to be updated. */
		botType?: BotType | null;

		/**
		 * The list of bot members in the network associated with the update action.
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		botMembers?: Array<BotMember>;
	}
	export interface UpdateBotPutBodyFormProperties {

		/**
		 * The new name of the bot. The name must be unique in the account that creates the bot.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		botName: FormControl<string | null | undefined>,

		/**
		 * A description of the bot.
		 * Min length: 0
		 * Max length: 200
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of an IAM role that has permissions to access the bot.
		 * Required
		 * Min length: 32
		 * Max length: 2048
		 */
		roleArn: FormControl<string | null | undefined>,

		/**
		 * <p>The time, in seconds, that Amazon Lex should keep information about a user's conversation with the bot.</p> <p>A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Lex deletes any data provided before the timeout.</p> <p>You can specify between 60 (1 minute) and 86,400 (24 hours) seconds.</p>
		 * Required
		 * Minimum: 60
		 * Maximum: 86400
		 */
		idleSessionTTLInSeconds: FormControl<number | null | undefined>,

		/** The type of the bot to be updated. */
		botType: FormControl<BotType | null | undefined>,
	}
	export function CreateUpdateBotPutBodyFormGroup() {
		return new FormGroup<UpdateBotPutBodyFormProperties>({
			botName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^([0-9a-zA-Z][_-]?){1,100}$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(200)]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(32), Validators.maxLength(2048), Validators.pattern('^arn:aws:iam::[0-9]{12}:role/.*$')]),
			idleSessionTTLInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(60), Validators.max(86400)]),
			botType: new FormControl<BotType | null | undefined>(undefined),
		});

	}

	export interface UpdateBotPutBodyDataPrivacy {
		childDirected?: boolean | null;
	}
	export interface UpdateBotPutBodyDataPrivacyFormProperties {
		childDirected: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateBotPutBodyDataPrivacyFormGroup() {
		return new FormGroup<UpdateBotPutBodyDataPrivacyFormProperties>({
			childDirected: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateBotAliasPutBody {

		/**
		 * The new name to assign to the bot alias.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		botAliasName: string;

		/**
		 * The new description to assign to the bot alias.
		 * Min length: 0
		 * Max length: 200
		 */
		description?: string | null;

		/**
		 * The new bot version to assign to the bot alias.
		 * Min length: 1
		 * Max length: 5
		 */
		botVersion?: string | null;

		/** The new Lambda functions to use in each locale for the bot alias. */
		botAliasLocaleSettings?: {[id: string]: BotAliasLocaleSettings };

		/** Configures conversation logging that saves audio, text, and metadata for the conversations with your users. */
		conversationLogSettings?: UpdateBotAliasPutBodyConversationLogSettings;

		/** Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances. */
		sentimentAnalysisSettings?: UpdateBotAliasPutBodySentimentAnalysisSettings;
	}
	export interface UpdateBotAliasPutBodyFormProperties {

		/**
		 * The new name to assign to the bot alias.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		botAliasName: FormControl<string | null | undefined>,

		/**
		 * The new description to assign to the bot alias.
		 * Min length: 0
		 * Max length: 200
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The new bot version to assign to the bot alias.
		 * Min length: 1
		 * Max length: 5
		 */
		botVersion: FormControl<string | null | undefined>,

		/** The new Lambda functions to use in each locale for the bot alias. */
		botAliasLocaleSettings: FormControl<{[id: string]: BotAliasLocaleSettings } | null | undefined>,
	}
	export function CreateUpdateBotAliasPutBodyFormGroup() {
		return new FormGroup<UpdateBotAliasPutBodyFormProperties>({
			botAliasName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^([0-9a-zA-Z][_-]?){1,100}$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(200)]),
			botVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(5), Validators.pattern('^(DRAFT|[0-9]+)$')]),
			botAliasLocaleSettings: new FormControl<{[id: string]: BotAliasLocaleSettings } | null | undefined>(undefined),
		});

	}

	export interface UpdateBotAliasPutBodyConversationLogSettings {
		textLogSettings?: Array<TextLogSetting>;
		audioLogSettings?: Array<AudioLogSetting>;
	}
	export interface UpdateBotAliasPutBodyConversationLogSettingsFormProperties {
	}
	export function CreateUpdateBotAliasPutBodyConversationLogSettingsFormGroup() {
		return new FormGroup<UpdateBotAliasPutBodyConversationLogSettingsFormProperties>({
		});

	}

	export interface UpdateBotAliasPutBodySentimentAnalysisSettings {
		detectSentiment?: boolean | null;
	}
	export interface UpdateBotAliasPutBodySentimentAnalysisSettingsFormProperties {
		detectSentiment: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateBotAliasPutBodySentimentAnalysisSettingsFormGroup() {
		return new FormGroup<UpdateBotAliasPutBodySentimentAnalysisSettingsFormProperties>({
			detectSentiment: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateExportPutBody {

		/**
		 * The new password to use to encrypt the export zip archive.
		 * Min length: 1
		 * Max length: 1024
		 */
		filePassword?: string | null;
	}
	export interface UpdateExportPutBodyFormProperties {

		/**
		 * The new password to use to encrypt the export zip archive.
		 * Min length: 1
		 * Max length: 1024
		 */
		filePassword: FormControl<string | null | undefined>,
	}
	export function CreateUpdateExportPutBodyFormGroup() {
		return new FormGroup<UpdateExportPutBodyFormProperties>({
			filePassword: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface UpdateIntentPutBody {

		/**
		 * The new name for the intent.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		intentName: string;

		/**
		 * The new description of the intent.
		 * Min length: 0
		 * Max length: 200
		 */
		description?: string | null;

		/** The signature of the new built-in intent to use as the parent of this intent. */
		parentIntentSignature?: string | null;

		/** New utterances used to invoke the intent. */
		sampleUtterances?: Array<SampleUtterance>;

		/** Settings that determine the Lambda function that Amazon Lex uses for processing user responses. */
		dialogCodeHook?: UpdateIntentPutBodyDialogCodeHook;

		/** Determines if a Lambda function should be invoked for a specific intent. */
		fulfillmentCodeHook?: UpdateIntentPutBodyFulfillmentCodeHook;

		/** A new list of slots and their priorities that are contained by the intent. */
		slotPriorities?: Array<SlotPriority>;

		/** Provides a prompt for making sure that the user is ready for the intent to be fulfilled. */
		intentConfirmationSetting?: UpdateIntentPutBodyIntentConfirmationSetting;

		/** Provides a statement the Amazon Lex conveys to the user when the intent is successfully fulfilled. */
		intentClosingSetting?: UpdateIntentPutBodyIntentClosingSetting;

		/**
		 * A new list of contexts that must be active in order for Amazon Lex to consider the intent.
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		inputContexts?: Array<InputContext>;

		/**
		 * A new list of contexts that Amazon Lex activates when the intent is fulfilled.
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		outputContexts?: Array<OutputContext>;

		/** Provides configuration information for the <code>AMAZON.KendraSearchIntent</code> intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance. */
		kendraConfiguration?: UpdateIntentPutBodyKendraConfiguration;

		/** Configuration setting for a response sent to the user before Amazon Lex starts eliciting slots. */
		initialResponseSetting?: UpdateIntentPutBodyInitialResponseSetting;
	}
	export interface UpdateIntentPutBodyFormProperties {

		/**
		 * The new name for the intent.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		intentName: FormControl<string | null | undefined>,

		/**
		 * The new description of the intent.
		 * Min length: 0
		 * Max length: 200
		 */
		description: FormControl<string | null | undefined>,

		/** The signature of the new built-in intent to use as the parent of this intent. */
		parentIntentSignature: FormControl<string | null | undefined>,
	}
	export function CreateUpdateIntentPutBodyFormGroup() {
		return new FormGroup<UpdateIntentPutBodyFormProperties>({
			intentName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^([0-9a-zA-Z][_-]?){1,100}$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(200)]),
			parentIntentSignature: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateIntentPutBodyDialogCodeHook {
		enabled?: boolean | null;
	}
	export interface UpdateIntentPutBodyDialogCodeHookFormProperties {
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateIntentPutBodyDialogCodeHookFormGroup() {
		return new FormGroup<UpdateIntentPutBodyDialogCodeHookFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateIntentPutBodyFulfillmentCodeHook {
		enabled?: boolean | null;
		postFulfillmentStatusSpecification?: PostFulfillmentStatusSpecification;
		fulfillmentUpdatesSpecification?: FulfillmentUpdatesSpecification;
		active?: boolean | null;
	}
	export interface UpdateIntentPutBodyFulfillmentCodeHookFormProperties {
		enabled: FormControl<boolean | null | undefined>,
		active: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateIntentPutBodyFulfillmentCodeHookFormGroup() {
		return new FormGroup<UpdateIntentPutBodyFulfillmentCodeHookFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			active: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateIntentPutBodyIntentConfirmationSetting {
		promptSpecification?: PromptSpecification;
		declinationResponse?: ResponseSpecification;
		active?: boolean | null;

		/** Specifies a list of message groups that Amazon Lex uses to respond the user input. */
		confirmationResponse?: ResponseSpecification;
		confirmationNextStep?: DialogState;
		confirmationConditional?: ConditionalSpecification;
		declinationNextStep?: DialogState;
		declinationConditional?: ConditionalSpecification;

		/** Specifies a list of message groups that Amazon Lex uses to respond the user input. */
		failureResponse?: ResponseSpecification;
		failureNextStep?: DialogState;

		/** Provides a list of conditional branches. Branches are evaluated in the order that they are entered in the list. The first branch with a condition that evaluates to true is executed. The last branch in the list is the default branch. The default branch should not have any condition expression. The default branch is executed if no other branch has a matching condition. */
		failureConditional?: ConditionalSpecification;
		codeHook?: DialogCodeHookInvocationSetting;
		elicitationCodeHook?: ElicitationCodeHookInvocationSetting;
	}
	export interface UpdateIntentPutBodyIntentConfirmationSettingFormProperties {
		active: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateIntentPutBodyIntentConfirmationSettingFormGroup() {
		return new FormGroup<UpdateIntentPutBodyIntentConfirmationSettingFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateIntentPutBodyIntentClosingSetting {
		closingResponse?: ResponseSpecification;
		active?: boolean | null;
		nextStep?: DialogState;
		conditional?: ConditionalSpecification;
	}
	export interface UpdateIntentPutBodyIntentClosingSettingFormProperties {
		active: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateIntentPutBodyIntentClosingSettingFormGroup() {
		return new FormGroup<UpdateIntentPutBodyIntentClosingSettingFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateIntentPutBodyKendraConfiguration {
		kendraIndex?: string;
		queryFilterStringEnabled?: boolean | null;
		queryFilterString?: string;
	}
	export interface UpdateIntentPutBodyKendraConfigurationFormProperties {
		kendraIndex: FormControl<string | null | undefined>,
		queryFilterStringEnabled: FormControl<boolean | null | undefined>,
		queryFilterString: FormControl<string | null | undefined>,
	}
	export function CreateUpdateIntentPutBodyKendraConfigurationFormGroup() {
		return new FormGroup<UpdateIntentPutBodyKendraConfigurationFormProperties>({
			kendraIndex: new FormControl<string | null | undefined>(undefined),
			queryFilterStringEnabled: new FormControl<boolean | null | undefined>(undefined),
			queryFilterString: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateIntentPutBodyInitialResponseSetting {

		/** Specifies a list of message groups that Amazon Lex uses to respond the user input. */
		initialResponse?: ResponseSpecification;
		nextStep?: DialogState;

		/** Provides a list of conditional branches. Branches are evaluated in the order that they are entered in the list. The first branch with a condition that evaluates to true is executed. The last branch in the list is the default branch. The default branch should not have any condition expression. The default branch is executed if no other branch has a matching condition. */
		conditional?: ConditionalSpecification;

		/** Settings that specify the dialog code hook that is called by Amazon Lex at a step of the conversation. */
		codeHook?: DialogCodeHookInvocationSetting;
	}
	export interface UpdateIntentPutBodyInitialResponseSettingFormProperties {
	}
	export function CreateUpdateIntentPutBodyInitialResponseSettingFormGroup() {
		return new FormGroup<UpdateIntentPutBodyInitialResponseSettingFormProperties>({
		});

	}

	export interface UpdateSlotPutBody {

		/**
		 * The new name for the slot.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		slotName: string;

		/**
		 * The new description for the slot.
		 * Min length: 0
		 * Max length: 200
		 */
		description?: string | null;

		/**
		 * The unique identifier of the new slot type to associate with this slot.
		 * Min length: 1
		 * Max length: 25
		 */
		slotTypeId?: string | null;

		/**
		 * Specifies the elicitation setting details eliciting a slot.
		 * Required
		 */
		valueElicitationSetting: UpdateSlotPutBodyValueElicitationSetting;

		/** Determines whether Amazon Lex obscures slot values in conversation logs. */
		obfuscationSetting?: UpdateSlotPutBodyObfuscationSetting;

		/** Indicates whether a slot can return multiple values. */
		multipleValuesSetting?: UpdateSlotPutBodyMultipleValuesSetting;

		/** Specifications for the constituent sub slots and the expression for the composite slot. */
		subSlotSetting?: UpdateSlotPutBodySubSlotSetting;
	}
	export interface UpdateSlotPutBodyFormProperties {

		/**
		 * The new name for the slot.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		slotName: FormControl<string | null | undefined>,

		/**
		 * The new description for the slot.
		 * Min length: 0
		 * Max length: 200
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The unique identifier of the new slot type to associate with this slot.
		 * Min length: 1
		 * Max length: 25
		 */
		slotTypeId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSlotPutBodyFormGroup() {
		return new FormGroup<UpdateSlotPutBodyFormProperties>({
			slotName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^([0-9a-zA-Z][_-]?){1,100}$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(200)]),
			slotTypeId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(25), Validators.pattern('^((AMAZON\.)[a-zA-Z_]+?|[0-9a-zA-Z]+)$')]),
		});

	}

	export interface UpdateSlotPutBodyValueElicitationSetting {
		defaultValueSpecification?: SlotDefaultValueSpecification;
		slotConstraint?: SlotConstraint;
		promptSpecification?: PromptSpecification;
		sampleUtterances?: Array<SampleUtterance>;

		/** Specifies the prompts that Amazon Lex uses while a bot is waiting for customer input. */
		waitAndContinueSpecification?: WaitAndContinueSpecification;
		slotCaptureSetting?: SlotCaptureSetting;
	}
	export interface UpdateSlotPutBodyValueElicitationSettingFormProperties {
		slotConstraint: FormControl<SlotConstraint | null | undefined>,
	}
	export function CreateUpdateSlotPutBodyValueElicitationSettingFormGroup() {
		return new FormGroup<UpdateSlotPutBodyValueElicitationSettingFormProperties>({
			slotConstraint: new FormControl<SlotConstraint | null | undefined>(undefined),
		});

	}

	export interface UpdateSlotPutBodyObfuscationSetting {
		obfuscationSettingType?: ObfuscationSettingType;
	}
	export interface UpdateSlotPutBodyObfuscationSettingFormProperties {
		obfuscationSettingType: FormControl<ObfuscationSettingType | null | undefined>,
	}
	export function CreateUpdateSlotPutBodyObfuscationSettingFormGroup() {
		return new FormGroup<UpdateSlotPutBodyObfuscationSettingFormProperties>({
			obfuscationSettingType: new FormControl<ObfuscationSettingType | null | undefined>(undefined),
		});

	}

	export interface UpdateSlotPutBodyMultipleValuesSetting {
		allowMultipleValues?: boolean | null;
	}
	export interface UpdateSlotPutBodyMultipleValuesSettingFormProperties {
		allowMultipleValues: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateSlotPutBodyMultipleValuesSettingFormGroup() {
		return new FormGroup<UpdateSlotPutBodyMultipleValuesSettingFormProperties>({
			allowMultipleValues: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateSlotPutBodySubSlotSetting {
		expression?: string;
		slotSpecifications?: SubSlotSpecificationMap;
	}
	export interface UpdateSlotPutBodySubSlotSettingFormProperties {
		expression: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSlotPutBodySubSlotSettingFormGroup() {
		return new FormGroup<UpdateSlotPutBodySubSlotSettingFormProperties>({
			expression: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSlotTypePutBody {

		/**
		 * The new name of the slot type.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		slotTypeName: string;

		/**
		 * The new description of the slot type.
		 * Min length: 0
		 * Max length: 200
		 */
		description?: string | null;

		/**
		 * A new list of values and their optional synonyms that define the values that the slot type can take.
		 * Minimum items: 1
		 * Maximum items: 10000
		 */
		slotTypeValues?: Array<SlotTypeValue>;

		/** Contains settings used by Amazon Lex to select a slot value. */
		valueSelectionSetting?: UpdateSlotTypePutBodyValueSelectionSetting;

		/** The new built-in slot type that should be used as the parent of this slot type. */
		parentSlotTypeSignature?: string | null;

		/** Provides information about the external source of the slot type's definition. */
		externalSourceSetting?: UpdateSlotTypePutBodyExternalSourceSetting;

		/** A composite slot is a combination of two or more slots that capture multiple pieces of information in a single user input. */
		compositeSlotTypeSetting?: UpdateSlotTypePutBodyCompositeSlotTypeSetting;
	}
	export interface UpdateSlotTypePutBodyFormProperties {

		/**
		 * The new name of the slot type.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		slotTypeName: FormControl<string | null | undefined>,

		/**
		 * The new description of the slot type.
		 * Min length: 0
		 * Max length: 200
		 */
		description: FormControl<string | null | undefined>,

		/** The new built-in slot type that should be used as the parent of this slot type. */
		parentSlotTypeSignature: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSlotTypePutBodyFormGroup() {
		return new FormGroup<UpdateSlotTypePutBodyFormProperties>({
			slotTypeName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^([0-9a-zA-Z][_-]?){1,100}$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(200)]),
			parentSlotTypeSignature: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSlotTypePutBodyValueSelectionSetting {
		resolutionStrategy?: SlotValueResolutionStrategy;
		regexFilter?: SlotValueRegexFilter;
		advancedRecognitionSetting?: AdvancedRecognitionSetting;
	}
	export interface UpdateSlotTypePutBodyValueSelectionSettingFormProperties {
		resolutionStrategy: FormControl<SlotValueResolutionStrategy | null | undefined>,
	}
	export function CreateUpdateSlotTypePutBodyValueSelectionSettingFormGroup() {
		return new FormGroup<UpdateSlotTypePutBodyValueSelectionSettingFormProperties>({
			resolutionStrategy: new FormControl<SlotValueResolutionStrategy | null | undefined>(undefined),
		});

	}

	export interface UpdateSlotTypePutBodyExternalSourceSetting {
		grammarSlotTypeSetting?: GrammarSlotTypeSetting;
	}
	export interface UpdateSlotTypePutBodyExternalSourceSettingFormProperties {
	}
	export function CreateUpdateSlotTypePutBodyExternalSourceSettingFormGroup() {
		return new FormGroup<UpdateSlotTypePutBodyExternalSourceSettingFormProperties>({
		});

	}

	export interface UpdateSlotTypePutBodyCompositeSlotTypeSetting {
		subSlots?: Array<SubSlotTypeComposition>;
	}
	export interface UpdateSlotTypePutBodyCompositeSlotTypeSettingFormProperties {
	}
	export function CreateUpdateSlotTypePutBodyCompositeSlotTypeSettingFormGroup() {
		return new FormGroup<UpdateSlotTypePutBodyCompositeSlotTypeSettingFormProperties>({
		});

	}

	export interface UpdateTestSetPutBody {

		/**
		 * The new test set name.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		testSetName: string;

		/**
		 * The new test set description.
		 * Min length: 0
		 * Max length: 200
		 */
		description?: string | null;
	}
	export interface UpdateTestSetPutBodyFormProperties {

		/**
		 * The new test set name.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		testSetName: FormControl<string | null | undefined>,

		/**
		 * The new test set description.
		 * Min length: 0
		 * Max length: 200
		 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTestSetPutBodyFormGroup() {
		return new FormGroup<UpdateTestSetPutBodyFormProperties>({
			testSetName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^([0-9a-zA-Z][_-]?){1,100}$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(200)]),
		});

	}

	export interface UpdateBotRecommendationPutBody {

		/**
		 * The object representing the passwords that were used to encrypt the data related to the bot recommendation, as well as the KMS key ARN used to encrypt the associated metadata.
		 * Required
		 */
		encryptionSetting: UpdateBotRecommendationPutBodyEncryptionSetting;
	}
	export interface UpdateBotRecommendationPutBodyFormProperties {
	}
	export function CreateUpdateBotRecommendationPutBodyFormGroup() {
		return new FormGroup<UpdateBotRecommendationPutBodyFormProperties>({
		});

	}

	export interface UpdateBotRecommendationPutBodyEncryptionSetting {
		kmsKeyArn?: string;
		botLocaleExportPassword?: string;
		associatedTranscriptsPassword?: string;
	}
	export interface UpdateBotRecommendationPutBodyEncryptionSettingFormProperties {
		kmsKeyArn: FormControl<string | null | undefined>,
		botLocaleExportPassword: FormControl<string | null | undefined>,
		associatedTranscriptsPassword: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBotRecommendationPutBodyEncryptionSettingFormGroup() {
		return new FormGroup<UpdateBotRecommendationPutBodyEncryptionSettingFormProperties>({
			kmsKeyArn: new FormControl<string | null | undefined>(undefined),
			botLocaleExportPassword: new FormControl<string | null | undefined>(undefined),
			associatedTranscriptsPassword: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAggregatedUtterancesPostBody {

		/**
		 * The identifier of the bot alias associated with this request. If you specify the bot alias, you can't specify the bot version.
		 * Min length: 10
		 * Max length: 10
		 */
		botAliasId?: string | null;

		/**
		 * The identifier of the bot version associated with this request. If you specify the bot version, you can't specify the bot alias.
		 * Min length: 1
		 * Max length: 5
		 */
		botVersion?: string | null;

		/**
		 * The identifier of the language and locale where the utterances were collected. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.
		 * Required
		 */
		localeId: string;

		/**
		 * Provides parameters for setting the time window and duration for aggregating utterance data.
		 * Required
		 */
		aggregationDuration: ListAggregatedUtterancesPostBodyAggregationDuration;

		/** Specifies attributes for sorting a list of utterances. */
		sortBy?: ListAggregatedUtterancesPostBodySortBy;

		/**
		 * Provides the specification of a filter used to limit the utterances in the response to only those that match the filter specification. You can only specify one filter and one string to filter on.
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		filters?: Array<AggregatedUtterancesFilter>;

		/**
		 * The maximum number of utterances to return in each page of results. If there are fewer results than the maximum page size, only the actual number of results are returned. If you don't specify the <code>maxResults</code> parameter, 1,000 results are returned.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults?: number | null;

		/** If the response from the <code>ListAggregatedUtterances</code> operation contains more results that specified in the <code>maxResults</code> parameter, a token is returned in the response. Use that token in the <code>nextToken</code> parameter to return the next page of results. */
		nextToken?: string | null;
	}
	export interface ListAggregatedUtterancesPostBodyFormProperties {

		/**
		 * The identifier of the bot alias associated with this request. If you specify the bot alias, you can't specify the bot version.
		 * Min length: 10
		 * Max length: 10
		 */
		botAliasId: FormControl<string | null | undefined>,

		/**
		 * The identifier of the bot version associated with this request. If you specify the bot version, you can't specify the bot alias.
		 * Min length: 1
		 * Max length: 5
		 */
		botVersion: FormControl<string | null | undefined>,

		/**
		 * The identifier of the language and locale where the utterances were collected. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.
		 * Required
		 */
		localeId: FormControl<string | null | undefined>,

		/**
		 * The maximum number of utterances to return in each page of results. If there are fewer results than the maximum page size, only the actual number of results are returned. If you don't specify the <code>maxResults</code> parameter, 1,000 results are returned.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,

		/** If the response from the <code>ListAggregatedUtterances</code> operation contains more results that specified in the <code>maxResults</code> parameter, a token is returned in the response. Use that token in the <code>nextToken</code> parameter to return the next page of results. */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAggregatedUtterancesPostBodyFormGroup() {
		return new FormGroup<ListAggregatedUtterancesPostBodyFormProperties>({
			botAliasId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^(\bTSTALIASID\b|[0-9a-zA-Z]+)$')]),
			botVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(5), Validators.pattern('^(DRAFT|[0-9]+)$')]),
			localeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAggregatedUtterancesPostBodyAggregationDuration {
		relativeAggregationDuration?: RelativeAggregationDuration;
	}
	export interface ListAggregatedUtterancesPostBodyAggregationDurationFormProperties {
	}
	export function CreateListAggregatedUtterancesPostBodyAggregationDurationFormGroup() {
		return new FormGroup<ListAggregatedUtterancesPostBodyAggregationDurationFormProperties>({
		});

	}

	export interface ListAggregatedUtterancesPostBodySortBy {
		attribute?: AggregatedUtterancesSortAttribute;
		order?: SortOrder;
	}
	export interface ListAggregatedUtterancesPostBodySortByFormProperties {
		attribute: FormControl<AggregatedUtterancesSortAttribute | null | undefined>,
		order: FormControl<SortOrder | null | undefined>,
	}
	export function CreateListAggregatedUtterancesPostBodySortByFormGroup() {
		return new FormGroup<ListAggregatedUtterancesPostBodySortByFormProperties>({
			attribute: new FormControl<AggregatedUtterancesSortAttribute | null | undefined>(undefined),
			order: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}

	export interface ListBotRecommendationsPostBody {

		/**
		 * The maximum number of bot recommendations to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults?: number | null;

		/** If the response from the ListBotRecommendation operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use that token in the nextToken parameter to return the next page of results. */
		nextToken?: string | null;
	}
	export interface ListBotRecommendationsPostBodyFormProperties {

		/**
		 * The maximum number of bot recommendations to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,

		/** If the response from the ListBotRecommendation operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use that token in the nextToken parameter to return the next page of results. */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBotRecommendationsPostBodyFormGroup() {
		return new FormGroup<ListBotRecommendationsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartBotRecommendationPutBody {

		/**
		 * Indicates the setting of the location where the transcript is stored.
		 * Required
		 */
		transcriptSourceSetting: StartBotRecommendationPutBodyTranscriptSourceSetting;

		/** The object representing the passwords that were used to encrypt the data related to the bot recommendation, as well as the KMS key ARN used to encrypt the associated metadata. */
		encryptionSetting?: StartBotRecommendationPutBodyEncryptionSetting;
	}
	export interface StartBotRecommendationPutBodyFormProperties {
	}
	export function CreateStartBotRecommendationPutBodyFormGroup() {
		return new FormGroup<StartBotRecommendationPutBodyFormProperties>({
		});

	}

	export interface StartBotRecommendationPutBodyTranscriptSourceSetting {
		s3BucketTranscriptSource?: S3BucketTranscriptSource;
	}
	export interface StartBotRecommendationPutBodyTranscriptSourceSettingFormProperties {
	}
	export function CreateStartBotRecommendationPutBodyTranscriptSourceSettingFormGroup() {
		return new FormGroup<StartBotRecommendationPutBodyTranscriptSourceSettingFormProperties>({
		});

	}

	export interface StartBotRecommendationPutBodyEncryptionSetting {
		kmsKeyArn?: string;
		botLocaleExportPassword?: string;
		associatedTranscriptsPassword?: string;
	}
	export interface StartBotRecommendationPutBodyEncryptionSettingFormProperties {
		kmsKeyArn: FormControl<string | null | undefined>,
		botLocaleExportPassword: FormControl<string | null | undefined>,
		associatedTranscriptsPassword: FormControl<string | null | undefined>,
	}
	export function CreateStartBotRecommendationPutBodyEncryptionSettingFormGroup() {
		return new FormGroup<StartBotRecommendationPutBodyEncryptionSettingFormProperties>({
			kmsKeyArn: new FormControl<string | null | undefined>(undefined),
			botLocaleExportPassword: new FormControl<string | null | undefined>(undefined),
			associatedTranscriptsPassword: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBuiltInIntentsPostBody {

		/** Specifies attributes for sorting a list of built-in intents. */
		sortBy?: ListBuiltInIntentsPostBodySortBy;

		/**
		 * The maximum number of built-in intents to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
		 * Minimum: 20
		 * Maximum: 20
		 */
		maxResults?: number | null;

		/** If the response from the <code>ListBuiltInIntents</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response. Use that token in the <code>nextToken</code> parameter to return the next page of results. */
		nextToken?: string | null;
	}
	export interface ListBuiltInIntentsPostBodyFormProperties {

		/**
		 * The maximum number of built-in intents to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
		 * Minimum: 20
		 * Maximum: 20
		 */
		maxResults: FormControl<number | null | undefined>,

		/** If the response from the <code>ListBuiltInIntents</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response. Use that token in the <code>nextToken</code> parameter to return the next page of results. */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBuiltInIntentsPostBodyFormGroup() {
		return new FormGroup<ListBuiltInIntentsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(20), Validators.max(20)]),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBuiltInIntentsPostBodySortBy {
		attribute?: BuiltInIntentSortAttribute;
		order?: SortOrder;
	}
	export interface ListBuiltInIntentsPostBodySortByFormProperties {
		attribute: FormControl<BuiltInIntentSortAttribute | null | undefined>,
		order: FormControl<SortOrder | null | undefined>,
	}
	export function CreateListBuiltInIntentsPostBodySortByFormGroup() {
		return new FormGroup<ListBuiltInIntentsPostBodySortByFormProperties>({
			attribute: new FormControl<BuiltInIntentSortAttribute | null | undefined>(undefined),
			order: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}

	export interface ListBuiltInSlotTypesPostBody {

		/** Specifies attributes for sorting a list of built-in slot types. */
		sortBy?: ListBuiltInSlotTypesPostBodySortBy;

		/**
		 * The maximum number of built-in slot types to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
		 * Minimum: 20
		 * Maximum: 20
		 */
		maxResults?: number | null;

		/** If the response from the <code>ListBuiltInSlotTypes</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response. Use that token in the <code>nextToken</code> parameter to return the next page of results. */
		nextToken?: string | null;
	}
	export interface ListBuiltInSlotTypesPostBodyFormProperties {

		/**
		 * The maximum number of built-in slot types to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
		 * Minimum: 20
		 * Maximum: 20
		 */
		maxResults: FormControl<number | null | undefined>,

		/** If the response from the <code>ListBuiltInSlotTypes</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response. Use that token in the <code>nextToken</code> parameter to return the next page of results. */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBuiltInSlotTypesPostBodyFormGroup() {
		return new FormGroup<ListBuiltInSlotTypesPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(20), Validators.max(20)]),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBuiltInSlotTypesPostBodySortBy {
		attribute?: BuiltInSlotTypeSortAttribute;
		order?: SortOrder;
	}
	export interface ListBuiltInSlotTypesPostBodySortByFormProperties {
		attribute: FormControl<BuiltInSlotTypeSortAttribute | null | undefined>,
		order: FormControl<SortOrder | null | undefined>,
	}
	export function CreateListBuiltInSlotTypesPostBodySortByFormGroup() {
		return new FormGroup<ListBuiltInSlotTypesPostBodySortByFormProperties>({
			attribute: new FormControl<BuiltInSlotTypeSortAttribute | null | undefined>(undefined),
			order: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}

	export interface ListCustomVocabularyItemsPostBody {

		/**
		 * The maximum number of items returned by the list operation.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults?: number | null;

		/** The nextToken identifier to the list custom vocabulary request. */
		nextToken?: string | null;
	}
	export interface ListCustomVocabularyItemsPostBodyFormProperties {

		/**
		 * The maximum number of items returned by the list operation.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,

		/** The nextToken identifier to the list custom vocabulary request. */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCustomVocabularyItemsPostBodyFormGroup() {
		return new FormGroup<ListCustomVocabularyItemsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListImportsPostBody {

		/**
		 * The unique identifier that Amazon Lex assigned to the bot.
		 * Min length: 10
		 * Max length: 10
		 */
		botId?: string | null;

		/**
		 * The version of the bot to list imports for.
		 * Min length: 5
		 * Max length: 5
		 */
		botVersion?: string | null;

		/** Provides information for sorting a list of imports. */
		sortBy?: ListImportsPostBodySortBy;

		/**
		 * Provides the specification of a filter used to limit the bots in the response to only those that match the filter specification. You can only specify one filter and one string to filter on.
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		filters?: Array<ImportFilter>;

		/**
		 * The maximum number of imports to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults?: number | null;

		/** <p>If the response from the <code>ListImports</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response.</p> <p>Use the returned token in the <code>nextToken</code> parameter of a <code>ListImports</code> request to return the next page of results. For a complete set of results, call the <code>ListImports</code> operation until the <code>nextToken</code> returned in the response is null.</p> */
		nextToken?: string | null;

		/** Specifies the locale that should be present in the list. If you don't specify a resource type in the <code>filters</code> parameter, the list contains both bot locales and custom vocabularies. */
		localeId?: string | null;
	}
	export interface ListImportsPostBodyFormProperties {

		/**
		 * The unique identifier that Amazon Lex assigned to the bot.
		 * Min length: 10
		 * Max length: 10
		 */
		botId: FormControl<string | null | undefined>,

		/**
		 * The version of the bot to list imports for.
		 * Min length: 5
		 * Max length: 5
		 */
		botVersion: FormControl<string | null | undefined>,

		/**
		 * The maximum number of imports to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,

		/** <p>If the response from the <code>ListImports</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response.</p> <p>Use the returned token in the <code>nextToken</code> parameter of a <code>ListImports</code> request to return the next page of results. For a complete set of results, call the <code>ListImports</code> operation until the <code>nextToken</code> returned in the response is null.</p> */
		nextToken: FormControl<string | null | undefined>,

		/** Specifies the locale that should be present in the list. If you don't specify a resource type in the <code>filters</code> parameter, the list contains both bot locales and custom vocabularies. */
		localeId: FormControl<string | null | undefined>,
	}
	export function CreateListImportsPostBodyFormGroup() {
		return new FormGroup<ListImportsPostBodyFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9a-zA-Z]+$')]),
			botVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(5), Validators.maxLength(5), Validators.pattern('^DRAFT$')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			localeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListImportsPostBodySortBy {
		attribute?: ExportSortAttribute;
		order?: SortOrder;
	}
	export interface ListImportsPostBodySortByFormProperties {
		attribute: FormControl<ExportSortAttribute | null | undefined>,
		order: FormControl<SortOrder | null | undefined>,
	}
	export function CreateListImportsPostBodySortByFormGroup() {
		return new FormGroup<ListImportsPostBodySortByFormProperties>({
			attribute: new FormControl<ExportSortAttribute | null | undefined>(undefined),
			order: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}

	export interface StartImportPutBody {

		/**
		 * The unique identifier for the import. It is included in the response from the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateUploadUrl.html">CreateUploadUrl</a> operation.
		 * Required
		 * Min length: 10
		 * Max length: 10
		 */
		importId: string;

		/**
		 * Provides information about the bot or bot locale that you want to import. You can specify the <code>botImportSpecification</code> or the <code>botLocaleImportSpecification</code>, but not both.
		 * Required
		 */
		resourceSpecification: StartImportPutBodyResourceSpecification;

		/**
		 * The strategy to use when there is a name conflict between the imported resource and an existing resource. When the merge strategy is <code>FailOnConflict</code> existing resources are not overwritten and the import fails.
		 * Required
		 */
		mergeStrategy: MergeStrategy;

		/**
		 * The password used to encrypt the zip archive that contains the resource definition. You should always encrypt the zip archive to protect it during transit between your site and Amazon Lex.
		 * Min length: 1
		 * Max length: 1024
		 */
		filePassword?: string | null;
	}
	export interface StartImportPutBodyFormProperties {

		/**
		 * The unique identifier for the import. It is included in the response from the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateUploadUrl.html">CreateUploadUrl</a> operation.
		 * Required
		 * Min length: 10
		 * Max length: 10
		 */
		importId: FormControl<string | null | undefined>,

		/**
		 * The strategy to use when there is a name conflict between the imported resource and an existing resource. When the merge strategy is <code>FailOnConflict</code> existing resources are not overwritten and the import fails.
		 * Required
		 */
		mergeStrategy: FormControl<MergeStrategy | null | undefined>,

		/**
		 * The password used to encrypt the zip archive that contains the resource definition. You should always encrypt the zip archive to protect it during transit between your site and Amazon Lex.
		 * Min length: 1
		 * Max length: 1024
		 */
		filePassword: FormControl<string | null | undefined>,
	}
	export function CreateStartImportPutBodyFormGroup() {
		return new FormGroup<StartImportPutBodyFormProperties>({
			importId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9a-zA-Z]+$')]),
			mergeStrategy: new FormControl<MergeStrategy | null | undefined>(undefined, [Validators.required]),
			filePassword: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface StartImportPutBodyResourceSpecification {
		botImportSpecification?: BotImportSpecification;
		botLocaleImportSpecification?: BotLocaleImportSpecification;

		/** Provides the parameters required for importing a custom vocabulary. */
		customVocabularyImportSpecification?: CustomVocabularyImportSpecification;
		testSetImportResourceSpecification?: TestSetImportResourceSpecification;
	}
	export interface StartImportPutBodyResourceSpecificationFormProperties {
	}
	export function CreateStartImportPutBodyResourceSpecificationFormGroup() {
		return new FormGroup<StartImportPutBodyResourceSpecificationFormProperties>({
		});

	}

	export interface ListIntentMetricsPostBody {

		/**
		 * The timestamp that marks the beginning of the range of time for which you want to see intent metrics.
		 * Required
		 */
		startDateTime: Date;

		/**
		 * The date and time that marks the end of the range of time for which you want to see intent metrics.
		 * Required
		 */
		endDateTime: Date;

		/**
		 * A list of objects, each of which contains a metric you want to list, the statistic for the metric you want to return, and the order by which to organize the results.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		metrics: Array<AnalyticsIntentMetric>;

		/**
		 * A list of objects, each of which contains specifications for organizing the results by time.
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		binBy?: Array<AnalyticsBinBySpecification>;

		/**
		 * <p>A list of objects, each of which specifies how to group the results. You can group by the following criteria:</p> <ul> <li> <p> <code>IntentName</code> – The name of the intent.</p> </li> <li> <p> <code>IntentEndState</code> – The final state of the intent. The possible end states are detailed in <a href="https://docs.aws.amazon.com/analytics-key-definitions-intents">Key definitions</a> in the user guide.</p> </li> </ul>
		 * Minimum items: 1
		 * Maximum items: 3
		 */
		groupBy?: Array<AnalyticsIntentGroupBySpecification>;

		/**
		 * A list of objects, each of which describes a condition by which you want to filter the results.
		 * Minimum items: 1
		 * Maximum items: 9
		 */
		filters?: Array<AnalyticsIntentFilter>;

		/**
		 * The maximum number of results to return in each page of results. If there are fewer results than the maximum page size, only the actual number of results are returned.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults?: number | null;

		/** <p>If the response from the ListIntentMetrics operation contains more results than specified in the maxResults parameter, a token is returned in the response.</p> <p>Use the returned token in the nextToken parameter of a ListIntentMetrics request to return the next page of results. For a complete set of results, call the ListIntentMetrics operation until the nextToken returned in the response is null.</p> */
		nextToken?: string | null;
	}
	export interface ListIntentMetricsPostBodyFormProperties {

		/**
		 * The timestamp that marks the beginning of the range of time for which you want to see intent metrics.
		 * Required
		 */
		startDateTime: FormControl<Date | null | undefined>,

		/**
		 * The date and time that marks the end of the range of time for which you want to see intent metrics.
		 * Required
		 */
		endDateTime: FormControl<Date | null | undefined>,

		/**
		 * The maximum number of results to return in each page of results. If there are fewer results than the maximum page size, only the actual number of results are returned.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,

		/** <p>If the response from the ListIntentMetrics operation contains more results than specified in the maxResults parameter, a token is returned in the response.</p> <p>Use the returned token in the nextToken parameter of a ListIntentMetrics request to return the next page of results. For a complete set of results, call the ListIntentMetrics operation until the nextToken returned in the response is null.</p> */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIntentMetricsPostBodyFormGroup() {
		return new FormGroup<ListIntentMetricsPostBodyFormProperties>({
			startDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			endDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListIntentPathsPostBody {

		/**
		 * The date and time that marks the beginning of the range of time for which you want to see intent path metrics.
		 * Required
		 */
		startDateTime: Date;

		/**
		 * The date and time that marks the end of the range of time for which you want to see intent path metrics.
		 * Required
		 */
		endDateTime: Date;

		/**
		 * <p>The intent path for which you want to retrieve metrics. Use a forward slash to separate intents in the path. For example:</p> <ul> <li> <p>/BookCar</p> </li> <li> <p>/BookCar/BookHotel</p> </li> <li> <p>/BookHotel/BookCar</p> </li> </ul>
		 * Required
		 * Min length: 1
		 * Max length: 1024
		 */
		intentPath: string;

		/**
		 * A list of objects, each describes a condition by which you want to filter the results.
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		filters?: Array<AnalyticsPathFilter>;
	}
	export interface ListIntentPathsPostBodyFormProperties {

		/**
		 * The date and time that marks the beginning of the range of time for which you want to see intent path metrics.
		 * Required
		 */
		startDateTime: FormControl<Date | null | undefined>,

		/**
		 * The date and time that marks the end of the range of time for which you want to see intent path metrics.
		 * Required
		 */
		endDateTime: FormControl<Date | null | undefined>,

		/**
		 * <p>The intent path for which you want to retrieve metrics. Use a forward slash to separate intents in the path. For example:</p> <ul> <li> <p>/BookCar</p> </li> <li> <p>/BookCar/BookHotel</p> </li> <li> <p>/BookHotel/BookCar</p> </li> </ul>
		 * Required
		 * Min length: 1
		 * Max length: 1024
		 */
		intentPath: FormControl<string | null | undefined>,
	}
	export function CreateListIntentPathsPostBodyFormGroup() {
		return new FormGroup<ListIntentPathsPostBodyFormProperties>({
			startDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			endDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			intentPath: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface ListIntentStageMetricsPostBody {

		/**
		 * The date and time that marks the beginning of the range of time for which you want to see intent stage metrics.
		 * Required
		 */
		startDateTime: Date;

		/**
		 * The date and time that marks the end of the range of time for which you want to see intent stage metrics.
		 * Required
		 */
		endDateTime: Date;

		/**
		 * A list of objects, each of which contains a metric you want to list, the statistic for the metric you want to return, and the method by which to organize the results.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		metrics: Array<AnalyticsIntentStageMetric>;

		/**
		 * A list of objects, each of which contains specifications for organizing the results by time.
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		binBy?: Array<AnalyticsBinBySpecification>;

		/**
		 * <p>A list of objects, each of which specifies how to group the results. You can group by the following criteria:</p> <ul> <li> <p> <code>IntentStageName</code> – The name of the intent stage.</p> </li> <li> <p> <code>SwitchedToIntent</code> – The intent to which the conversation was switched (if any).</p> </li> </ul>
		 * Minimum items: 1
		 * Maximum items: 2
		 */
		groupBy?: Array<AnalyticsIntentStageGroupBySpecification>;

		/**
		 * A list of objects, each of which describes a condition by which you want to filter the results.
		 * Minimum items: 1
		 * Maximum items: 9
		 */
		filters?: Array<AnalyticsIntentStageFilter>;

		/**
		 * The maximum number of results to return in each page of results. If there are fewer results than the maximum page size, only the actual number of results are returned.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults?: number | null;

		/** <p>If the response from the ListIntentStageMetrics operation contains more results than specified in the maxResults parameter, a token is returned in the response.</p> <p>Use the returned token in the nextToken parameter of a ListIntentStageMetrics request to return the next page of results. For a complete set of results, call the ListIntentStageMetrics operation until the nextToken returned in the response is null.</p> */
		nextToken?: string | null;
	}
	export interface ListIntentStageMetricsPostBodyFormProperties {

		/**
		 * The date and time that marks the beginning of the range of time for which you want to see intent stage metrics.
		 * Required
		 */
		startDateTime: FormControl<Date | null | undefined>,

		/**
		 * The date and time that marks the end of the range of time for which you want to see intent stage metrics.
		 * Required
		 */
		endDateTime: FormControl<Date | null | undefined>,

		/**
		 * The maximum number of results to return in each page of results. If there are fewer results than the maximum page size, only the actual number of results are returned.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,

		/** <p>If the response from the ListIntentStageMetrics operation contains more results than specified in the maxResults parameter, a token is returned in the response.</p> <p>Use the returned token in the nextToken parameter of a ListIntentStageMetrics request to return the next page of results. For a complete set of results, call the ListIntentStageMetrics operation until the nextToken returned in the response is null.</p> */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIntentStageMetricsPostBodyFormGroup() {
		return new FormGroup<ListIntentStageMetricsPostBodyFormProperties>({
			startDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			endDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRecommendedIntentsPostBody {

		/** If the response from the ListRecommendedIntents operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use that token in the nextToken parameter to return the next page of results. */
		nextToken?: string | null;

		/**
		 * The maximum number of bot recommendations to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults?: number | null;
	}
	export interface ListRecommendedIntentsPostBodyFormProperties {

		/** If the response from the ListRecommendedIntents operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use that token in the nextToken parameter to return the next page of results. */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of bot recommendations to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListRecommendedIntentsPostBodyFormGroup() {
		return new FormGroup<ListRecommendedIntentsPostBodyFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
		});

	}

	export interface ListSessionAnalyticsDataPostBody {

		/**
		 * The date and time that marks the beginning of the range of time for which you want to see session analytics.
		 * Required
		 */
		startDateTime: Date;

		/**
		 * The date and time that marks the end of the range of time for which you want to see session analytics.
		 * Required
		 */
		endDateTime: Date;

		/** An object specifying the measure and method by which to sort the session analytics data. */
		sortBy?: ListSessionAnalyticsDataPostBodySortBy;

		/**
		 * A list of objects, each of which describes a condition by which you want to filter the results.
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		filters?: Array<AnalyticsSessionFilter>;

		/**
		 * The maximum number of results to return in each page of results. If there are fewer results than the maximum page size, only the actual number of results are returned.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults?: number | null;

		/** <p>If the response from the ListSessionAnalyticsData operation contains more results than specified in the maxResults parameter, a token is returned in the response.</p> <p>Use the returned token in the nextToken parameter of a ListSessionAnalyticsData request to return the next page of results. For a complete set of results, call the ListSessionAnalyticsData operation until the nextToken returned in the response is null.</p> */
		nextToken?: string | null;
	}
	export interface ListSessionAnalyticsDataPostBodyFormProperties {

		/**
		 * The date and time that marks the beginning of the range of time for which you want to see session analytics.
		 * Required
		 */
		startDateTime: FormControl<Date | null | undefined>,

		/**
		 * The date and time that marks the end of the range of time for which you want to see session analytics.
		 * Required
		 */
		endDateTime: FormControl<Date | null | undefined>,

		/**
		 * The maximum number of results to return in each page of results. If there are fewer results than the maximum page size, only the actual number of results are returned.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,

		/** <p>If the response from the ListSessionAnalyticsData operation contains more results than specified in the maxResults parameter, a token is returned in the response.</p> <p>Use the returned token in the nextToken parameter of a ListSessionAnalyticsData request to return the next page of results. For a complete set of results, call the ListSessionAnalyticsData operation until the nextToken returned in the response is null.</p> */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSessionAnalyticsDataPostBodyFormGroup() {
		return new FormGroup<ListSessionAnalyticsDataPostBodyFormProperties>({
			startDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			endDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSessionAnalyticsDataPostBodySortBy {
		name?: AnalyticsSessionSortByName;
		order?: SortOrder;
	}
	export interface ListSessionAnalyticsDataPostBodySortByFormProperties {
		name: FormControl<AnalyticsSessionSortByName | null | undefined>,
		order: FormControl<SortOrder | null | undefined>,
	}
	export function CreateListSessionAnalyticsDataPostBodySortByFormGroup() {
		return new FormGroup<ListSessionAnalyticsDataPostBodySortByFormProperties>({
			name: new FormControl<AnalyticsSessionSortByName | null | undefined>(undefined),
			order: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}

	export interface ListSessionMetricsPostBody {

		/**
		 * The date and time that marks the beginning of the range of time for which you want to see session metrics.
		 * Required
		 */
		startDateTime: Date;

		/**
		 * The date and time that marks the end of the range of time for which you want to see session metrics.
		 * Required
		 */
		endDateTime: Date;

		/**
		 * A list of objects, each of which contains a metric you want to list, the statistic for the metric you want to return, and the method by which to organize the results.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 7
		 */
		metrics: Array<AnalyticsSessionMetric>;

		/**
		 * A list of objects, each of which contains specifications for organizing the results by time.
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		binBy?: Array<AnalyticsBinBySpecification>;

		/**
		 * <p>A list of objects, each of which specifies how to group the results. You can group by the following criteria:</p> <ul> <li> <p> <code>ConversationEndState</code> – The final state of the conversation. The possible end states are detailed in <a href="https://docs.aws.amazon.com/analytics-key-definitions-conversations">Key definitions</a> in the user guide.</p> </li> <li> <p> <code>LocaleId</code> – The unique identifier of the bot locale.</p> </li> </ul>
		 * Minimum items: 1
		 * Maximum items: 2
		 */
		groupBy?: Array<AnalyticsSessionGroupBySpecification>;

		/**
		 * A list of objects, each of which describes a condition by which you want to filter the results.
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		filters?: Array<AnalyticsSessionFilter>;

		/**
		 * The maximum number of results to return in each page of results. If there are fewer results than the maximum page size, only the actual number of results are returned.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults?: number | null;

		/** <p>If the response from the ListSessionMetrics operation contains more results than specified in the maxResults parameter, a token is returned in the response.</p> <p>Use the returned token in the nextToken parameter of a ListSessionMetrics request to return the next page of results. For a complete set of results, call the ListSessionMetrics operation until the nextToken returned in the response is null.</p> */
		nextToken?: string | null;
	}
	export interface ListSessionMetricsPostBodyFormProperties {

		/**
		 * The date and time that marks the beginning of the range of time for which you want to see session metrics.
		 * Required
		 */
		startDateTime: FormControl<Date | null | undefined>,

		/**
		 * The date and time that marks the end of the range of time for which you want to see session metrics.
		 * Required
		 */
		endDateTime: FormControl<Date | null | undefined>,

		/**
		 * The maximum number of results to return in each page of results. If there are fewer results than the maximum page size, only the actual number of results are returned.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,

		/** <p>If the response from the ListSessionMetrics operation contains more results than specified in the maxResults parameter, a token is returned in the response.</p> <p>Use the returned token in the nextToken parameter of a ListSessionMetrics request to return the next page of results. For a complete set of results, call the ListSessionMetrics operation until the nextToken returned in the response is null.</p> */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSessionMetricsPostBodyFormGroup() {
		return new FormGroup<ListSessionMetricsPostBodyFormProperties>({
			startDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			endDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * A list of tag keys to add to the resource. If a tag key already exists, the existing value is replaced with the new value.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * A list of tag keys to add to the resource. If a tag key already exists, the existing value is replaced with the new value.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTestExecutionResultItemsPostBody {

		/**
		 * Contains information about the method by which to filter the results of the test execution.
		 * Required
		 */
		resultFilterBy: ListTestExecutionResultItemsPostBodyResultFilterBy;

		/**
		 * The maximum number of test execution result items to return in each page. If there are fewer results than the max page size, only the actual number of results are returned.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults?: number | null;

		/** If the response from the <code>ListTestExecutionResultItems</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response. Use that token in the <code>nextToken</code> parameter to return the next page of results. */
		nextToken?: string | null;
	}
	export interface ListTestExecutionResultItemsPostBodyFormProperties {

		/**
		 * The maximum number of test execution result items to return in each page. If there are fewer results than the max page size, only the actual number of results are returned.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,

		/** If the response from the <code>ListTestExecutionResultItems</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response. Use that token in the <code>nextToken</code> parameter to return the next page of results. */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTestExecutionResultItemsPostBodyFormGroup() {
		return new FormGroup<ListTestExecutionResultItemsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTestExecutionResultItemsPostBodyResultFilterBy {
		resultTypeFilter?: TestResultTypeFilter;
		conversationLevelTestResultsFilterBy?: ConversationLevelTestResultsFilterBy;
	}
	export interface ListTestExecutionResultItemsPostBodyResultFilterByFormProperties {
		resultTypeFilter: FormControl<TestResultTypeFilter | null | undefined>,
	}
	export function CreateListTestExecutionResultItemsPostBodyResultFilterByFormGroup() {
		return new FormGroup<ListTestExecutionResultItemsPostBodyResultFilterByFormProperties>({
			resultTypeFilter: new FormControl<TestResultTypeFilter | null | undefined>(undefined),
		});

	}

	export interface ListTestExecutionsPostBody {

		/** Contains information about the method by which to sort the instances of test executions you have carried out. */
		sortBy?: ListTestExecutionsPostBodySortBy;

		/**
		 * The maximum number of test executions to return in each page. If there are fewer results than the max page size, only the actual number of results are returned.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults?: number | null;

		/** If the response from the ListTestExecutions operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use that token in the nextToken parameter to return the next page of results. */
		nextToken?: string | null;
	}
	export interface ListTestExecutionsPostBodyFormProperties {

		/**
		 * The maximum number of test executions to return in each page. If there are fewer results than the max page size, only the actual number of results are returned.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,

		/** If the response from the ListTestExecutions operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use that token in the nextToken parameter to return the next page of results. */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTestExecutionsPostBodyFormGroup() {
		return new FormGroup<ListTestExecutionsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTestExecutionsPostBodySortBy {
		attribute?: TestExecutionSortAttribute;
		order?: SortOrder;
	}
	export interface ListTestExecutionsPostBodySortByFormProperties {
		attribute: FormControl<TestExecutionSortAttribute | null | undefined>,
		order: FormControl<SortOrder | null | undefined>,
	}
	export function CreateListTestExecutionsPostBodySortByFormGroup() {
		return new FormGroup<ListTestExecutionsPostBodySortByFormProperties>({
			attribute: new FormControl<TestExecutionSortAttribute | null | undefined>(undefined),
			order: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}

	export interface ListTestSetRecordsPostBody {

		/**
		 * The maximum number of test set records to return in each page. If there are fewer records than the max page size, only the actual number of records are returned.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults?: number | null;

		/** If the response from the ListTestSetRecords operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use that token in the nextToken parameter to return the next page of results. */
		nextToken?: string | null;
	}
	export interface ListTestSetRecordsPostBodyFormProperties {

		/**
		 * The maximum number of test set records to return in each page. If there are fewer records than the max page size, only the actual number of records are returned.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,

		/** If the response from the ListTestSetRecords operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use that token in the nextToken parameter to return the next page of results. */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTestSetRecordsPostBodyFormGroup() {
		return new FormGroup<ListTestSetRecordsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTestSetsPostBody {

		/** Contains information about the methods by which to sort the test set. */
		sortBy?: ListTestSetsPostBodySortBy;

		/**
		 * The maximum number of test sets to return in each page. If there are fewer results than the max page size, only the actual number of results are returned.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults?: number | null;

		/** If the response from the ListTestSets operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use that token in the nextToken parameter to return the next page of results. */
		nextToken?: string | null;
	}
	export interface ListTestSetsPostBodyFormProperties {

		/**
		 * The maximum number of test sets to return in each page. If there are fewer results than the max page size, only the actual number of results are returned.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,

		/** If the response from the ListTestSets operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use that token in the nextToken parameter to return the next page of results. */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTestSetsPostBodyFormGroup() {
		return new FormGroup<ListTestSetsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTestSetsPostBodySortBy {
		attribute?: TestSetSortAttribute;
		order?: SortOrder;
	}
	export interface ListTestSetsPostBodySortByFormProperties {
		attribute: FormControl<TestSetSortAttribute | null | undefined>,
		order: FormControl<SortOrder | null | undefined>,
	}
	export function CreateListTestSetsPostBodySortByFormGroup() {
		return new FormGroup<ListTestSetsPostBodySortByFormProperties>({
			attribute: new FormControl<TestSetSortAttribute | null | undefined>(undefined),
			order: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}

	export interface ListUtteranceAnalyticsDataPostBody {

		/**
		 * The date and time that marks the beginning of the range of time for which you want to see utterance analytics.
		 * Required
		 */
		startDateTime: Date;

		/**
		 * The date and time that marks the end of the range of time for which you want to see utterance analytics.
		 * Required
		 */
		endDateTime: Date;

		/** An object specifying the measure and method by which to sort the utterance data. */
		sortBy?: ListUtteranceAnalyticsDataPostBodySortBy;

		/**
		 * A list of objects, each of which describes a condition by which you want to filter the results.
		 * Minimum items: 1
		 * Maximum items: 9
		 */
		filters?: Array<AnalyticsUtteranceFilter>;

		/**
		 * The maximum number of results to return in each page of results. If there are fewer results than the maximum page size, only the actual number of results are returned.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults?: number | null;

		/** <p>If the response from the ListUtteranceAnalyticsData operation contains more results than specified in the maxResults parameter, a token is returned in the response.</p> <p>Use the returned token in the nextToken parameter of a ListUtteranceAnalyticsData request to return the next page of results. For a complete set of results, call the ListUtteranceAnalyticsData operation until the nextToken returned in the response is null.</p> */
		nextToken?: string | null;
	}
	export interface ListUtteranceAnalyticsDataPostBodyFormProperties {

		/**
		 * The date and time that marks the beginning of the range of time for which you want to see utterance analytics.
		 * Required
		 */
		startDateTime: FormControl<Date | null | undefined>,

		/**
		 * The date and time that marks the end of the range of time for which you want to see utterance analytics.
		 * Required
		 */
		endDateTime: FormControl<Date | null | undefined>,

		/**
		 * The maximum number of results to return in each page of results. If there are fewer results than the maximum page size, only the actual number of results are returned.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,

		/** <p>If the response from the ListUtteranceAnalyticsData operation contains more results than specified in the maxResults parameter, a token is returned in the response.</p> <p>Use the returned token in the nextToken parameter of a ListUtteranceAnalyticsData request to return the next page of results. For a complete set of results, call the ListUtteranceAnalyticsData operation until the nextToken returned in the response is null.</p> */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUtteranceAnalyticsDataPostBodyFormGroup() {
		return new FormGroup<ListUtteranceAnalyticsDataPostBodyFormProperties>({
			startDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			endDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListUtteranceAnalyticsDataPostBodySortBy {
		name?: AnalyticsUtteranceSortByName;
		order?: SortOrder;
	}
	export interface ListUtteranceAnalyticsDataPostBodySortByFormProperties {
		name: FormControl<AnalyticsUtteranceSortByName | null | undefined>,
		order: FormControl<SortOrder | null | undefined>,
	}
	export function CreateListUtteranceAnalyticsDataPostBodySortByFormGroup() {
		return new FormGroup<ListUtteranceAnalyticsDataPostBodySortByFormProperties>({
			name: new FormControl<AnalyticsUtteranceSortByName | null | undefined>(undefined),
			order: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}

	export interface ListUtteranceMetricsPostBody {

		/**
		 * The date and time that marks the beginning of the range of time for which you want to see utterance metrics.
		 * Required
		 */
		startDateTime: Date;

		/**
		 * The date and time that marks the end of the range of time for which you want to see utterance metrics.
		 * Required
		 */
		endDateTime: Date;

		/**
		 * A list of objects, each of which contains a metric you want to list, the statistic for the metric you want to return, and the method by which to organize the results.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 4
		 */
		metrics: Array<AnalyticsUtteranceMetric>;

		/**
		 * A list of objects, each of which contains specifications for organizing the results by time.
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		binBy?: Array<AnalyticsBinBySpecification>;

		/**
		 * <p>A list of objects, each of which specifies how to group the results. You can group by the following criteria:</p> <ul> <li> <p> <code>UtteranceText</code> – The transcription of the utterance.</p> </li> <li> <p> <code>UtteranceState</code> – The state of the utterance. The possible states are detailed in <a href="https://docs.aws.amazon.com/analytics-key-definitions-utterances">Key definitions</a> in the user guide.</p> </li> </ul>
		 * Minimum items: 1
		 * Maximum items: 2
		 */
		groupBy?: Array<AnalyticsUtteranceGroupBySpecification>;

		/**
		 * <p>A list containing attributes related to the utterance that you want the response to return. The following attributes are possible:</p> <ul> <li> <p> <code>LastUsedIntent</code> – The last used intent at the time of the utterance.</p> </li> </ul>
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		attributes?: Array<AnalyticsUtteranceAttribute>;

		/**
		 * A list of objects, each of which describes a condition by which you want to filter the results.
		 * Minimum items: 1
		 * Maximum items: 9
		 */
		filters?: Array<AnalyticsUtteranceFilter>;

		/**
		 * The maximum number of results to return in each page of results. If there are fewer results than the maximum page size, only the actual number of results are returned.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults?: number | null;

		/** <p>If the response from the ListUtteranceMetrics operation contains more results than specified in the maxResults parameter, a token is returned in the response.</p> <p>Use the returned token in the nextToken parameter of a ListUtteranceMetrics request to return the next page of results. For a complete set of results, call the ListUtteranceMetrics operation until the nextToken returned in the response is null.</p> */
		nextToken?: string | null;
	}
	export interface ListUtteranceMetricsPostBodyFormProperties {

		/**
		 * The date and time that marks the beginning of the range of time for which you want to see utterance metrics.
		 * Required
		 */
		startDateTime: FormControl<Date | null | undefined>,

		/**
		 * The date and time that marks the end of the range of time for which you want to see utterance metrics.
		 * Required
		 */
		endDateTime: FormControl<Date | null | undefined>,

		/**
		 * The maximum number of results to return in each page of results. If there are fewer results than the maximum page size, only the actual number of results are returned.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,

		/** <p>If the response from the ListUtteranceMetrics operation contains more results than specified in the maxResults parameter, a token is returned in the response.</p> <p>Use the returned token in the nextToken parameter of a ListUtteranceMetrics request to return the next page of results. For a complete set of results, call the ListUtteranceMetrics operation until the nextToken returned in the response is null.</p> */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUtteranceMetricsPostBodyFormGroup() {
		return new FormGroup<ListUtteranceMetricsPostBodyFormProperties>({
			startDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			endDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchAssociatedTranscriptsPostBody {

		/** How SearchResults are ordered. Valid values are Ascending or Descending. The default is Descending. */
		searchOrder?: SortOrder | null;

		/**
		 * A list of filter objects.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		filters: Array<AssociatedTranscriptFilter>;

		/**
		 * The maximum number of bot recommendations to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults?: number | null;

		/**
		 * If the response from the SearchAssociatedTranscriptsRequest operation contains more results than specified in the maxResults parameter, an index is returned in the response. Use that index in the nextIndex parameter to return the next page of results.
		 * Minimum: 0
		 * Maximum: 10000000
		 */
		nextIndex?: number | null;
	}
	export interface SearchAssociatedTranscriptsPostBodyFormProperties {

		/** How SearchResults are ordered. Valid values are Ascending or Descending. The default is Descending. */
		searchOrder: FormControl<SortOrder | null | undefined>,

		/**
		 * The maximum number of bot recommendations to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * If the response from the SearchAssociatedTranscriptsRequest operation contains more results than specified in the maxResults parameter, an index is returned in the response. Use that index in the nextIndex parameter to return the next page of results.
		 * Minimum: 0
		 * Maximum: 10000000
		 */
		nextIndex: FormControl<number | null | undefined>,
	}
	export function CreateSearchAssociatedTranscriptsPostBodyFormGroup() {
		return new FormGroup<SearchAssociatedTranscriptsPostBodyFormProperties>({
			searchOrder: new FormControl<SortOrder | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			nextIndex: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(10000000)]),
		});

	}

	export interface StartTestExecutionPostBody {

		/**
		 * Contains information about the bot used for the test execution.
		 * Required
		 */
		target: StartTestExecutionPostBodyTarget;

		/**
		 * Indicates whether we use streaming or non-streaming APIs for the test set execution. For streaming, StartConversation Runtime API is used. Whereas, for non-streaming, RecognizeUtterance and RecognizeText Amazon Lex Runtime API are used.
		 * Required
		 */
		apiMode: TestExecutionApiMode;

		/** Indicates whether audio or text is used. */
		testExecutionModality?: TestSetModality | null;
	}
	export interface StartTestExecutionPostBodyFormProperties {

		/**
		 * Indicates whether we use streaming or non-streaming APIs for the test set execution. For streaming, StartConversation Runtime API is used. Whereas, for non-streaming, RecognizeUtterance and RecognizeText Amazon Lex Runtime API are used.
		 * Required
		 */
		apiMode: FormControl<TestExecutionApiMode | null | undefined>,

		/** Indicates whether audio or text is used. */
		testExecutionModality: FormControl<TestSetModality | null | undefined>,
	}
	export function CreateStartTestExecutionPostBodyFormGroup() {
		return new FormGroup<StartTestExecutionPostBodyFormProperties>({
			apiMode: new FormControl<TestExecutionApiMode | null | undefined>(undefined, [Validators.required]),
			testExecutionModality: new FormControl<TestSetModality | null | undefined>(undefined),
		});

	}

	export interface StartTestExecutionPostBodyTarget {
		botAliasTarget?: BotAliasTestExecutionTarget;
	}
	export interface StartTestExecutionPostBodyTargetFormProperties {
	}
	export function CreateStartTestExecutionPostBodyTargetFormGroup() {
		return new FormGroup<StartTestExecutionPostBodyTargetFormProperties>({
		});

	}

	export interface StartTestSetGenerationPutBody {

		/**
		 * The test set name for the test set generation request.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		testSetName: string;

		/**
		 * The test set description for the test set generation request.
		 * Min length: 0
		 * Max length: 200
		 */
		description?: string | null;

		/**
		 * Contains information about the location in which the test set is stored.
		 * Required
		 */
		storageLocation: StartTestSetGenerationPutBodyStorageLocation;

		/**
		 * Contains information about the data source from which the test set is generated.
		 * Required
		 */
		generationDataSource: StartTestSetGenerationPutBodyGenerationDataSource;

		/**
		 * The roleARN used for any operation in the test set to access resources in the Amazon Web Services account.
		 * Required
		 * Min length: 32
		 * Max length: 2048
		 */
		roleArn: string;

		/** A list of tags to add to the test set. You can only add tags when you import/generate a new test set. You can't use the <code>UpdateTestSet</code> operation to update tags. To update tags, use the <code>TagResource</code> operation. */
		testSetTags?: {[id: string]: string };
	}
	export interface StartTestSetGenerationPutBodyFormProperties {

		/**
		 * The test set name for the test set generation request.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		testSetName: FormControl<string | null | undefined>,

		/**
		 * The test set description for the test set generation request.
		 * Min length: 0
		 * Max length: 200
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The roleARN used for any operation in the test set to access resources in the Amazon Web Services account.
		 * Required
		 * Min length: 32
		 * Max length: 2048
		 */
		roleArn: FormControl<string | null | undefined>,

		/** A list of tags to add to the test set. You can only add tags when you import/generate a new test set. You can't use the <code>UpdateTestSet</code> operation to update tags. To update tags, use the <code>TagResource</code> operation. */
		testSetTags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateStartTestSetGenerationPutBodyFormGroup() {
		return new FormGroup<StartTestSetGenerationPutBodyFormProperties>({
			testSetName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^([0-9a-zA-Z][_-]?){1,100}$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(200)]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(32), Validators.maxLength(2048), Validators.pattern('^arn:aws:iam::[0-9]{12}:role/.*$')]),
			testSetTags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface StartTestSetGenerationPutBodyStorageLocation {
		s3BucketName?: string;
		s3Path?: string;
		kmsKeyArn?: string;
	}
	export interface StartTestSetGenerationPutBodyStorageLocationFormProperties {
		s3BucketName: FormControl<string | null | undefined>,
		s3Path: FormControl<string | null | undefined>,
		kmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateStartTestSetGenerationPutBodyStorageLocationFormGroup() {
		return new FormGroup<StartTestSetGenerationPutBodyStorageLocationFormProperties>({
			s3BucketName: new FormControl<string | null | undefined>(undefined),
			s3Path: new FormControl<string | null | undefined>(undefined),
			kmsKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartTestSetGenerationPutBodyGenerationDataSource {
		conversationLogsDataSource?: ConversationLogsDataSource;
	}
	export interface StartTestSetGenerationPutBodyGenerationDataSourceFormProperties {
	}
	export function CreateStartTestSetGenerationPutBodyGenerationDataSourceFormGroup() {
		return new FormGroup<StartTestSetGenerationPutBodyGenerationDataSourceFormProperties>({
		});

	}

}

