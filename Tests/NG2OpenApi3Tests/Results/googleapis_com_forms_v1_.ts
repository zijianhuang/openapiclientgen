import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The submitted answer for a question. */
	export interface Answer {

		/** All submitted files for a FileUpload question. */
		fileUploadAnswers?: FileUploadAnswers;

		/** Grade information associated with a respondent's answer to a question. */
		grade?: Grade;

		/** Output only. The question's ID. See also Question.question_id. */
		questionId?: string | null;

		/** A question's answers as text. */
		textAnswers?: TextAnswers;
	}

	/** The submitted answer for a question. */
	export interface AnswerFormProperties {

		/** Output only. The question's ID. See also Question.question_id. */
		questionId: FormControl<string | null | undefined>,
	}
	export function CreateAnswerFormGroup() {
		return new FormGroup<AnswerFormProperties>({
			questionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** All submitted files for a FileUpload question. */
	export interface FileUploadAnswers {

		/** Output only. All submitted files for a FileUpload question. */
		answers?: Array<FileUploadAnswer>;
	}

	/** All submitted files for a FileUpload question. */
	export interface FileUploadAnswersFormProperties {
	}
	export function CreateFileUploadAnswersFormGroup() {
		return new FormGroup<FileUploadAnswersFormProperties>({
		});

	}


	/** Info for a single file submitted to a file upload question. */
	export interface FileUploadAnswer {

		/** Output only. The ID of the Google Drive file. */
		fileId?: string | null;

		/** Output only. The file name, as stored in Google Drive on upload. */
		fileName?: string | null;

		/** Output only. The MIME type of the file, as stored in Google Drive on upload. */
		mimeType?: string | null;
	}

	/** Info for a single file submitted to a file upload question. */
	export interface FileUploadAnswerFormProperties {

		/** Output only. The ID of the Google Drive file. */
		fileId: FormControl<string | null | undefined>,

		/** Output only. The file name, as stored in Google Drive on upload. */
		fileName: FormControl<string | null | undefined>,

		/** Output only. The MIME type of the file, as stored in Google Drive on upload. */
		mimeType: FormControl<string | null | undefined>,
	}
	export function CreateFileUploadAnswerFormGroup() {
		return new FormGroup<FileUploadAnswerFormProperties>({
			fileId: new FormControl<string | null | undefined>(undefined),
			fileName: new FormControl<string | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Grade information associated with a respondent's answer to a question. */
	export interface Grade {

		/** Output only. Whether the question was answered correctly or not. A zero-point score is not enough to infer incorrectness, since a correctly answered question could be worth zero points. */
		correct?: boolean | null;

		/** Feedback for a respondent about their response to a question. */
		feedback?: Feedback;

		/** Output only. The numeric score awarded for the answer. */
		score?: number | null;
	}

	/** Grade information associated with a respondent's answer to a question. */
	export interface GradeFormProperties {

		/** Output only. Whether the question was answered correctly or not. A zero-point score is not enough to infer incorrectness, since a correctly answered question could be worth zero points. */
		correct: FormControl<boolean | null | undefined>,

		/** Output only. The numeric score awarded for the answer. */
		score: FormControl<number | null | undefined>,
	}
	export function CreateGradeFormGroup() {
		return new FormGroup<GradeFormProperties>({
			correct: new FormControl<boolean | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Feedback for a respondent about their response to a question. */
	export interface Feedback {

		/** Additional information provided as part of the feedback, often used to point the respondent to more reading and resources. */
		material?: Array<ExtraMaterial>;

		/** Required. The main text of the feedback. */
		text?: string | null;
	}

	/** Feedback for a respondent about their response to a question. */
	export interface FeedbackFormProperties {

		/** Required. The main text of the feedback. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateFeedbackFormGroup() {
		return new FormGroup<FeedbackFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Supplementary material to the feedback. */
	export interface ExtraMaterial {

		/** Link for text. */
		link?: TextLink;

		/** Link to a video. */
		video?: VideoLink;
	}

	/** Supplementary material to the feedback. */
	export interface ExtraMaterialFormProperties {
	}
	export function CreateExtraMaterialFormGroup() {
		return new FormGroup<ExtraMaterialFormProperties>({
		});

	}


	/** Link for text. */
	export interface TextLink {

		/** Required. Display text for the URI. */
		displayText?: string | null;

		/** Required. The URI. */
		uri?: string | null;
	}

	/** Link for text. */
	export interface TextLinkFormProperties {

		/** Required. Display text for the URI. */
		displayText: FormControl<string | null | undefined>,

		/** Required. The URI. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateTextLinkFormGroup() {
		return new FormGroup<TextLinkFormProperties>({
			displayText: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Link to a video. */
	export interface VideoLink {

		/** Required. The display text for the link. */
		displayText?: string | null;

		/** The URI of a YouTube video. */
		youtubeUri?: string | null;
	}

	/** Link to a video. */
	export interface VideoLinkFormProperties {

		/** Required. The display text for the link. */
		displayText: FormControl<string | null | undefined>,

		/** The URI of a YouTube video. */
		youtubeUri: FormControl<string | null | undefined>,
	}
	export function CreateVideoLinkFormGroup() {
		return new FormGroup<VideoLinkFormProperties>({
			displayText: new FormControl<string | null | undefined>(undefined),
			youtubeUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A question's answers as text. */
	export interface TextAnswers {

		/** Output only. Answers to a question. For multiple-value ChoiceQuestions, each answer is a separate value. */
		answers?: Array<TextAnswer>;
	}

	/** A question's answers as text. */
	export interface TextAnswersFormProperties {
	}
	export function CreateTextAnswersFormGroup() {
		return new FormGroup<TextAnswersFormProperties>({
		});

	}


	/** An answer to a question represented as text. */
	export interface TextAnswer {

		/** Output only. The answer value. Formatting used for different kinds of question: * ChoiceQuestion * `RADIO` or `DROP_DOWN`: A single string corresponding to the option that was selected. * `CHECKBOX`: Multiple strings corresponding to each option that was selected. * TextQuestion: The text that the user entered. * ScaleQuestion: A string containing the number that was selected. * DateQuestion * Without time or year: MM-DD e.g. "05-19" * With year: YYYY-MM-DD e.g. "1986-05-19" * With time: MM-DD HH:MM e.g. "05-19 14:51" * With year and time: YYYY-MM-DD HH:MM e.g. "1986-05-19 14:51" * TimeQuestion: String with time or duration in HH:MM format e.g. "14:51" * RowQuestion within QuestionGroupItem: The answer for each row of a QuestionGroupItem is represented as a separate Answer. Each will contain one string for `RADIO`-type choices or multiple strings for `CHECKBOX` choices. */
		value?: string | null;
	}

	/** An answer to a question represented as text. */
	export interface TextAnswerFormProperties {

		/** Output only. The answer value. Formatting used for different kinds of question: * ChoiceQuestion * `RADIO` or `DROP_DOWN`: A single string corresponding to the option that was selected. * `CHECKBOX`: Multiple strings corresponding to each option that was selected. * TextQuestion: The text that the user entered. * ScaleQuestion: A string containing the number that was selected. * DateQuestion * Without time or year: MM-DD e.g. "05-19" * With year: YYYY-MM-DD e.g. "1986-05-19" * With time: MM-DD HH:MM e.g. "05-19 14:51" * With year and time: YYYY-MM-DD HH:MM e.g. "1986-05-19 14:51" * TimeQuestion: String with time or duration in HH:MM format e.g. "14:51" * RowQuestion within QuestionGroupItem: The answer for each row of a QuestionGroupItem is represented as a separate Answer. Each will contain one string for `RADIO`-type choices or multiple strings for `CHECKBOX` choices. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateTextAnswerFormGroup() {
		return new FormGroup<TextAnswerFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A batch of updates to perform on a form. All the specified updates are made or none of them are. */
	export interface BatchUpdateFormRequest {

		/** Whether to return an updated version of the model in the response. */
		includeFormInResponse?: boolean | null;

		/** Required. The update requests of this batch. */
		requests?: Array<Request>;

		/** Provides control over how write requests are executed. */
		writeControl?: WriteControl;
	}

	/** A batch of updates to perform on a form. All the specified updates are made or none of them are. */
	export interface BatchUpdateFormRequestFormProperties {

		/** Whether to return an updated version of the model in the response. */
		includeFormInResponse: FormControl<boolean | null | undefined>,
	}
	export function CreateBatchUpdateFormRequestFormGroup() {
		return new FormGroup<BatchUpdateFormRequestFormProperties>({
			includeFormInResponse: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The kinds of update requests that can be made. */
	export interface Request {

		/** Create an item in a form. */
		createItem?: CreateItemRequest;

		/** Delete an item in a form. */
		deleteItem?: DeleteItemRequest;

		/** Move an item in a form. */
		moveItem?: MoveItemRequest;

		/** Update Form's Info. */
		updateFormInfo?: UpdateFormInfoRequest;

		/** Update an item in a form. */
		updateItem?: UpdateItemRequest;

		/** Update Form's FormSettings. */
		updateSettings?: UpdateSettingsRequest;
	}

	/** The kinds of update requests that can be made. */
	export interface RequestFormProperties {
	}
	export function CreateRequestFormGroup() {
		return new FormGroup<RequestFormProperties>({
		});

	}


	/** Create an item in a form. */
	export interface CreateItemRequest {

		/** A single item of the form. `kind` defines which kind of item it is. */
		item?: Item;

		/** A specific location in a form. */
		location?: Location;
	}

	/** Create an item in a form. */
	export interface CreateItemRequestFormProperties {
	}
	export function CreateCreateItemRequestFormGroup() {
		return new FormGroup<CreateItemRequestFormProperties>({
		});

	}


	/** A single item of the form. `kind` defines which kind of item it is. */
	export interface Item {

		/** The description of the item. */
		description?: string | null;

		/** An item containing an image. */
		imageItem?: ImageItem;

		/** The item ID. On creation, it can be provided but the ID must not be already used in the form. If not provided, a new ID is assigned. */
		itemId?: string | null;

		/** A page break. The title and description of this item are shown at the top of the new page. */
		pageBreakItem?: PageBreakItem;

		/** Defines a question that comprises multiple questions grouped together. */
		questionGroupItem?: QuestionGroupItem;

		/** A form item containing a single question. */
		questionItem?: QuestionItem;

		/** A text item. */
		textItem?: TextItem;

		/** The title of the item. */
		title?: string | null;

		/** An item containing a video. */
		videoItem?: VideoItem;
	}

	/** A single item of the form. `kind` defines which kind of item it is. */
	export interface ItemFormProperties {

		/** The description of the item. */
		description: FormControl<string | null | undefined>,

		/** The item ID. On creation, it can be provided but the ID must not be already used in the form. If not provided, a new ID is assigned. */
		itemId: FormControl<string | null | undefined>,

		/** The title of the item. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateItemFormGroup() {
		return new FormGroup<ItemFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			itemId: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An item containing an image. */
	export interface ImageItem {

		/** Data representing an image. */
		image?: Image;
	}

	/** An item containing an image. */
	export interface ImageItemFormProperties {
	}
	export function CreateImageItemFormGroup() {
		return new FormGroup<ImageItemFormProperties>({
		});

	}


	/** Data representing an image. */
	export interface Image {

		/** A description of the image that is shown on hover and read by screenreaders. */
		altText?: string | null;

		/** Output only. A URI from which you can download the image; this is valid only for a limited time. */
		contentUri?: string | null;

		/** Properties of the media. */
		properties?: MediaProperties;

		/** Input only. The source URI is the URI used to insert the image. The source URI can be empty when fetched. */
		sourceUri?: string | null;
	}

	/** Data representing an image. */
	export interface ImageFormProperties {

		/** A description of the image that is shown on hover and read by screenreaders. */
		altText: FormControl<string | null | undefined>,

		/** Output only. A URI from which you can download the image; this is valid only for a limited time. */
		contentUri: FormControl<string | null | undefined>,

		/** Input only. The source URI is the URI used to insert the image. The source URI can be empty when fetched. */
		sourceUri: FormControl<string | null | undefined>,
	}
	export function CreateImageFormGroup() {
		return new FormGroup<ImageFormProperties>({
			altText: new FormControl<string | null | undefined>(undefined),
			contentUri: new FormControl<string | null | undefined>(undefined),
			sourceUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of the media. */
	export interface MediaProperties {

		/** Position of the media. */
		alignment?: MediaPropertiesAlignment | null;

		/** The width of the media in pixels. When the media is displayed, it is scaled to the smaller of this value or the width of the displayed form. The original aspect ratio of the media is preserved. If a width is not specified when the media is added to the form, it is set to the width of the media source. Width must be between 0 and 740, inclusive. Setting width to 0 or unspecified is only permitted when updating the media source. */
		width?: number | null;
	}

	/** Properties of the media. */
	export interface MediaPropertiesFormProperties {

		/** Position of the media. */
		alignment: FormControl<MediaPropertiesAlignment | null | undefined>,

		/** The width of the media in pixels. When the media is displayed, it is scaled to the smaller of this value or the width of the displayed form. The original aspect ratio of the media is preserved. If a width is not specified when the media is added to the form, it is set to the width of the media source. Width must be between 0 and 740, inclusive. Setting width to 0 or unspecified is only permitted when updating the media source. */
		width: FormControl<number | null | undefined>,
	}
	export function CreateMediaPropertiesFormGroup() {
		return new FormGroup<MediaPropertiesFormProperties>({
			alignment: new FormControl<MediaPropertiesAlignment | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum MediaPropertiesAlignment { ALIGNMENT_UNSPECIFIED = 'ALIGNMENT_UNSPECIFIED', LEFT = 'LEFT', RIGHT = 'RIGHT', CENTER = 'CENTER' }


	/** A page break. The title and description of this item are shown at the top of the new page. */
	export interface PageBreakItem {
	}

	/** A page break. The title and description of this item are shown at the top of the new page. */
	export interface PageBreakItemFormProperties {
	}
	export function CreatePageBreakItemFormGroup() {
		return new FormGroup<PageBreakItemFormProperties>({
		});

	}


	/** Defines a question that comprises multiple questions grouped together. */
	export interface QuestionGroupItem {

		/** A grid of choices (radio or check boxes) with each row constituting a separate question. Each row has the same choices, which are shown as the columns. */
		grid?: Grid;

		/** Data representing an image. */
		image?: Image;

		/** Required. A list of questions that belong in this question group. A question must only belong to one group. The `kind` of the group may affect what types of questions are allowed. */
		questions?: Array<Question>;
	}

	/** Defines a question that comprises multiple questions grouped together. */
	export interface QuestionGroupItemFormProperties {
	}
	export function CreateQuestionGroupItemFormGroup() {
		return new FormGroup<QuestionGroupItemFormProperties>({
		});

	}


	/** A grid of choices (radio or check boxes) with each row constituting a separate question. Each row has the same choices, which are shown as the columns. */
	export interface Grid {

		/** A radio/checkbox/dropdown question. */
		columns?: ChoiceQuestion;

		/** If `true`, the questions are randomly ordered. In other words, the rows appear in a different order for every respondent. */
		shuffleQuestions?: boolean | null;
	}

	/** A grid of choices (radio or check boxes) with each row constituting a separate question. Each row has the same choices, which are shown as the columns. */
	export interface GridFormProperties {

		/** If `true`, the questions are randomly ordered. In other words, the rows appear in a different order for every respondent. */
		shuffleQuestions: FormControl<boolean | null | undefined>,
	}
	export function CreateGridFormGroup() {
		return new FormGroup<GridFormProperties>({
			shuffleQuestions: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A radio/checkbox/dropdown question. */
	export interface ChoiceQuestion {

		/** Required. List of options that a respondent must choose from. */
		options?: Array<Option>;

		/** Whether the options should be displayed in random order for different instances of the quiz. This is often used to prevent cheating by respondents who might be looking at another respondent's screen, or to address bias in a survey that might be introduced by always putting the same options first or last. */
		shuffle?: boolean | null;

		/** Required. The type of choice question. */
		type?: ChoiceQuestionType | null;
	}

	/** A radio/checkbox/dropdown question. */
	export interface ChoiceQuestionFormProperties {

		/** Whether the options should be displayed in random order for different instances of the quiz. This is often used to prevent cheating by respondents who might be looking at another respondent's screen, or to address bias in a survey that might be introduced by always putting the same options first or last. */
		shuffle: FormControl<boolean | null | undefined>,

		/** Required. The type of choice question. */
		type: FormControl<ChoiceQuestionType | null | undefined>,
	}
	export function CreateChoiceQuestionFormGroup() {
		return new FormGroup<ChoiceQuestionFormProperties>({
			shuffle: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<ChoiceQuestionType | null | undefined>(undefined),
		});

	}


	/** An option for a Choice question. */
	export interface Option {

		/** Section navigation type. */
		goToAction?: OptionGoToAction | null;

		/** Item ID of section header to go to. */
		goToSectionId?: string | null;

		/** Data representing an image. */
		image?: Image;

		/** Whether the option is "other". Currently only applies to `RADIO` and `CHECKBOX` choice types, but is not allowed in a QuestionGroupItem. */
		isOther?: boolean | null;

		/** Required. The choice as presented to the user. */
		value?: string | null;
	}

	/** An option for a Choice question. */
	export interface OptionFormProperties {

		/** Section navigation type. */
		goToAction: FormControl<OptionGoToAction | null | undefined>,

		/** Item ID of section header to go to. */
		goToSectionId: FormControl<string | null | undefined>,

		/** Whether the option is "other". Currently only applies to `RADIO` and `CHECKBOX` choice types, but is not allowed in a QuestionGroupItem. */
		isOther: FormControl<boolean | null | undefined>,

		/** Required. The choice as presented to the user. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateOptionFormGroup() {
		return new FormGroup<OptionFormProperties>({
			goToAction: new FormControl<OptionGoToAction | null | undefined>(undefined),
			goToSectionId: new FormControl<string | null | undefined>(undefined),
			isOther: new FormControl<boolean | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OptionGoToAction { GO_TO_ACTION_UNSPECIFIED = 'GO_TO_ACTION_UNSPECIFIED', NEXT_SECTION = 'NEXT_SECTION', RESTART_FORM = 'RESTART_FORM', SUBMIT_FORM = 'SUBMIT_FORM' }

	export enum ChoiceQuestionType { CHOICE_TYPE_UNSPECIFIED = 'CHOICE_TYPE_UNSPECIFIED', RADIO = 'RADIO', CHECKBOX = 'CHECKBOX', DROP_DOWN = 'DROP_DOWN' }


	/** Any question. The specific type of question is known by its `kind`. */
	export interface Question {

		/** A radio/checkbox/dropdown question. */
		choiceQuestion?: ChoiceQuestion;

		/** A date question. Date questions default to just month + day. */
		dateQuestion?: DateQuestion;

		/** A file upload question. The API currently does not support creating file upload questions. */
		fileUploadQuestion?: FileUploadQuestion;

		/** Grading for a single question */
		grading?: Grading;

		/** Read only. The question ID. On creation, it can be provided but the ID must not be already used in the form. If not provided, a new ID is assigned. */
		questionId?: string | null;

		/** Whether the question must be answered in order for a respondent to submit their response. */
		required?: boolean | null;

		/** Configuration for a question that is part of a question group. */
		rowQuestion?: RowQuestion;

		/** A scale question. The user has a range of numeric values to choose from. */
		scaleQuestion?: ScaleQuestion;

		/** A text-based question. */
		textQuestion?: TextQuestion;

		/** A time question. */
		timeQuestion?: TimeQuestion;
	}

	/** Any question. The specific type of question is known by its `kind`. */
	export interface QuestionFormProperties {

		/** Read only. The question ID. On creation, it can be provided but the ID must not be already used in the form. If not provided, a new ID is assigned. */
		questionId: FormControl<string | null | undefined>,

		/** Whether the question must be answered in order for a respondent to submit their response. */
		required: FormControl<boolean | null | undefined>,
	}
	export function CreateQuestionFormGroup() {
		return new FormGroup<QuestionFormProperties>({
			questionId: new FormControl<string | null | undefined>(undefined),
			required: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A date question. Date questions default to just month + day. */
	export interface DateQuestion {

		/** Whether to include the time as part of the question. */
		includeTime?: boolean | null;

		/** Whether to include the year as part of the question. */
		includeYear?: boolean | null;
	}

	/** A date question. Date questions default to just month + day. */
	export interface DateQuestionFormProperties {

		/** Whether to include the time as part of the question. */
		includeTime: FormControl<boolean | null | undefined>,

		/** Whether to include the year as part of the question. */
		includeYear: FormControl<boolean | null | undefined>,
	}
	export function CreateDateQuestionFormGroup() {
		return new FormGroup<DateQuestionFormProperties>({
			includeTime: new FormControl<boolean | null | undefined>(undefined),
			includeYear: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A file upload question. The API currently does not support creating file upload questions. */
	export interface FileUploadQuestion {

		/** Required. The ID of the Drive folder where uploaded files are stored. */
		folderId?: string | null;

		/** Maximum number of bytes allowed for any single file uploaded to this question. */
		maxFileSize?: string | null;

		/** Maximum number of files that can be uploaded for this question in a single response. */
		maxFiles?: number | null;

		/** File types accepted by this question. */
		types?: Array<string>;
	}

	/** A file upload question. The API currently does not support creating file upload questions. */
	export interface FileUploadQuestionFormProperties {

		/** Required. The ID of the Drive folder where uploaded files are stored. */
		folderId: FormControl<string | null | undefined>,

		/** Maximum number of bytes allowed for any single file uploaded to this question. */
		maxFileSize: FormControl<string | null | undefined>,

		/** Maximum number of files that can be uploaded for this question in a single response. */
		maxFiles: FormControl<number | null | undefined>,
	}
	export function CreateFileUploadQuestionFormGroup() {
		return new FormGroup<FileUploadQuestionFormProperties>({
			folderId: new FormControl<string | null | undefined>(undefined),
			maxFileSize: new FormControl<string | null | undefined>(undefined),
			maxFiles: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Grading for a single question */
	export interface Grading {

		/** The answer key for a question. */
		correctAnswers?: CorrectAnswers;

		/** Feedback for a respondent about their response to a question. */
		generalFeedback?: Feedback;

		/** Required. The maximum number of points a respondent can automatically get for a correct answer. This must not be negative. */
		pointValue?: number | null;

		/** Feedback for a respondent about their response to a question. */
		whenRight?: Feedback;

		/** Feedback for a respondent about their response to a question. */
		whenWrong?: Feedback;
	}

	/** Grading for a single question */
	export interface GradingFormProperties {

		/** Required. The maximum number of points a respondent can automatically get for a correct answer. This must not be negative. */
		pointValue: FormControl<number | null | undefined>,
	}
	export function CreateGradingFormGroup() {
		return new FormGroup<GradingFormProperties>({
			pointValue: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The answer key for a question. */
	export interface CorrectAnswers {

		/** A list of correct answers. A quiz response can be automatically graded based on these answers. For single-valued questions, a response is marked correct if it matches any value in this list (in other words, multiple correct answers are possible). For multiple-valued (`CHECKBOX`) questions, a response is marked correct if it contains exactly the values in this list. */
		answers?: Array<CorrectAnswer>;
	}

	/** The answer key for a question. */
	export interface CorrectAnswersFormProperties {
	}
	export function CreateCorrectAnswersFormGroup() {
		return new FormGroup<CorrectAnswersFormProperties>({
		});

	}


	/** A single correct answer for a question. For multiple-valued (`CHECKBOX`) questions, several `CorrectAnswer`s may be needed to represent a single correct response option. */
	export interface CorrectAnswer {

		/** Required. The correct answer value. See the documentation for TextAnswer.value for details on how various value types are formatted. */
		value?: string | null;
	}

	/** A single correct answer for a question. For multiple-valued (`CHECKBOX`) questions, several `CorrectAnswer`s may be needed to represent a single correct response option. */
	export interface CorrectAnswerFormProperties {

		/** Required. The correct answer value. See the documentation for TextAnswer.value for details on how various value types are formatted. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateCorrectAnswerFormGroup() {
		return new FormGroup<CorrectAnswerFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for a question that is part of a question group. */
	export interface RowQuestion {

		/** Required. The title for the single row in the QuestionGroupItem. */
		title?: string | null;
	}

	/** Configuration for a question that is part of a question group. */
	export interface RowQuestionFormProperties {

		/** Required. The title for the single row in the QuestionGroupItem. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateRowQuestionFormGroup() {
		return new FormGroup<RowQuestionFormProperties>({
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A scale question. The user has a range of numeric values to choose from. */
	export interface ScaleQuestion {

		/** Required. The highest possible value for the scale. */
		high?: number | null;

		/** The label to display describing the highest point on the scale. */
		highLabel?: string | null;

		/** Required. The lowest possible value for the scale. */
		low?: number | null;

		/** The label to display describing the lowest point on the scale. */
		lowLabel?: string | null;
	}

	/** A scale question. The user has a range of numeric values to choose from. */
	export interface ScaleQuestionFormProperties {

		/** Required. The highest possible value for the scale. */
		high: FormControl<number | null | undefined>,

		/** The label to display describing the highest point on the scale. */
		highLabel: FormControl<string | null | undefined>,

		/** Required. The lowest possible value for the scale. */
		low: FormControl<number | null | undefined>,

		/** The label to display describing the lowest point on the scale. */
		lowLabel: FormControl<string | null | undefined>,
	}
	export function CreateScaleQuestionFormGroup() {
		return new FormGroup<ScaleQuestionFormProperties>({
			high: new FormControl<number | null | undefined>(undefined),
			highLabel: new FormControl<string | null | undefined>(undefined),
			low: new FormControl<number | null | undefined>(undefined),
			lowLabel: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A text-based question. */
	export interface TextQuestion {

		/** Whether the question is a paragraph question or not. If not, the question is a short text question. */
		paragraph?: boolean | null;
	}

	/** A text-based question. */
	export interface TextQuestionFormProperties {

		/** Whether the question is a paragraph question or not. If not, the question is a short text question. */
		paragraph: FormControl<boolean | null | undefined>,
	}
	export function CreateTextQuestionFormGroup() {
		return new FormGroup<TextQuestionFormProperties>({
			paragraph: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A time question. */
	export interface TimeQuestion {

		/** `true` if the question is about an elapsed time. Otherwise it is about a time of day. */
		duration?: boolean | null;
	}

	/** A time question. */
	export interface TimeQuestionFormProperties {

		/** `true` if the question is about an elapsed time. Otherwise it is about a time of day. */
		duration: FormControl<boolean | null | undefined>,
	}
	export function CreateTimeQuestionFormGroup() {
		return new FormGroup<TimeQuestionFormProperties>({
			duration: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A form item containing a single question. */
	export interface QuestionItem {

		/** Data representing an image. */
		image?: Image;

		/** Any question. The specific type of question is known by its `kind`. */
		question?: Question;
	}

	/** A form item containing a single question. */
	export interface QuestionItemFormProperties {
	}
	export function CreateQuestionItemFormGroup() {
		return new FormGroup<QuestionItemFormProperties>({
		});

	}


	/** A text item. */
	export interface TextItem {
	}

	/** A text item. */
	export interface TextItemFormProperties {
	}
	export function CreateTextItemFormGroup() {
		return new FormGroup<TextItemFormProperties>({
		});

	}


	/** An item containing a video. */
	export interface VideoItem {

		/** The text displayed below the video. */
		caption?: string | null;

		/** Data representing a video. */
		video?: Video;
	}

	/** An item containing a video. */
	export interface VideoItemFormProperties {

		/** The text displayed below the video. */
		caption: FormControl<string | null | undefined>,
	}
	export function CreateVideoItemFormGroup() {
		return new FormGroup<VideoItemFormProperties>({
			caption: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data representing a video. */
	export interface Video {

		/** Properties of the media. */
		properties?: MediaProperties;

		/** Required. A YouTube URI. */
		youtubeUri?: string | null;
	}

	/** Data representing a video. */
	export interface VideoFormProperties {

		/** Required. A YouTube URI. */
		youtubeUri: FormControl<string | null | undefined>,
	}
	export function CreateVideoFormGroup() {
		return new FormGroup<VideoFormProperties>({
			youtubeUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A specific location in a form. */
	export interface Location {

		/** The index of an item in the form. This must be in the range [0..*N*), where *N* is the number of items in the form. */
		index?: number | null;
	}

	/** A specific location in a form. */
	export interface LocationFormProperties {

		/** The index of an item in the form. This must be in the range [0..*N*), where *N* is the number of items in the form. */
		index: FormControl<number | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			index: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Delete an item in a form. */
	export interface DeleteItemRequest {

		/** A specific location in a form. */
		location?: Location;
	}

	/** Delete an item in a form. */
	export interface DeleteItemRequestFormProperties {
	}
	export function CreateDeleteItemRequestFormGroup() {
		return new FormGroup<DeleteItemRequestFormProperties>({
		});

	}


	/** Move an item in a form. */
	export interface MoveItemRequest {

		/** A specific location in a form. */
		newLocation?: Location;

		/** A specific location in a form. */
		originalLocation?: Location;
	}

	/** Move an item in a form. */
	export interface MoveItemRequestFormProperties {
	}
	export function CreateMoveItemRequestFormGroup() {
		return new FormGroup<MoveItemRequestFormProperties>({
		});

	}


	/** Update Form's Info. */
	export interface UpdateFormInfoRequest {

		/** The general information for a form. */
		info?: Info;

		/** Required. Only values named in this mask are changed. At least one field must be specified. The root `info` is implied and should not be specified. A single `"*"` can be used as short-hand for updating every field. */
		updateMask?: string | null;
	}

	/** Update Form's Info. */
	export interface UpdateFormInfoRequestFormProperties {

		/** Required. Only values named in this mask are changed. At least one field must be specified. The root `info` is implied and should not be specified. A single `"*"` can be used as short-hand for updating every field. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFormInfoRequestFormGroup() {
		return new FormGroup<UpdateFormInfoRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The general information for a form. */
	export interface Info {

		/** The description of the form. */
		description?: string | null;

		/** Output only. The title of the document which is visible in Drive. If `Info.title` is empty, `document_title` may appear in its place in the Google Forms UI and be visible to responders. `document_title` can be set on create, but cannot be modified by a batchUpdate request. Please use the [Google Drive API](https://developers.google.com/drive/api/v3/reference/files/update) if you need to programmatically update `document_title`. */
		documentTitle?: string | null;

		/** Required. The title of the form which is visible to responders. */
		title?: string | null;
	}

	/** The general information for a form. */
	export interface InfoFormProperties {

		/** The description of the form. */
		description: FormControl<string | null | undefined>,

		/** Output only. The title of the document which is visible in Drive. If `Info.title` is empty, `document_title` may appear in its place in the Google Forms UI and be visible to responders. `document_title` can be set on create, but cannot be modified by a batchUpdate request. Please use the [Google Drive API](https://developers.google.com/drive/api/v3/reference/files/update) if you need to programmatically update `document_title`. */
		documentTitle: FormControl<string | null | undefined>,

		/** Required. The title of the form which is visible to responders. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateInfoFormGroup() {
		return new FormGroup<InfoFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			documentTitle: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Update an item in a form. */
	export interface UpdateItemRequest {

		/** A single item of the form. `kind` defines which kind of item it is. */
		item?: Item;

		/** A specific location in a form. */
		location?: Location;

		/** Required. Only values named in this mask are changed. */
		updateMask?: string | null;
	}

	/** Update an item in a form. */
	export interface UpdateItemRequestFormProperties {

		/** Required. Only values named in this mask are changed. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateUpdateItemRequestFormGroup() {
		return new FormGroup<UpdateItemRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Update Form's FormSettings. */
	export interface UpdateSettingsRequest {

		/** A form's settings. */
		settings?: FormSettings;

		/** Required. Only values named in this mask are changed. At least one field must be specified. The root `settings` is implied and should not be specified. A single `"*"` can be used as short-hand for updating every field. */
		updateMask?: string | null;
	}

	/** Update Form's FormSettings. */
	export interface UpdateSettingsRequestFormProperties {

		/** Required. Only values named in this mask are changed. At least one field must be specified. The root `settings` is implied and should not be specified. A single `"*"` can be used as short-hand for updating every field. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSettingsRequestFormGroup() {
		return new FormGroup<UpdateSettingsRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A form's settings. */
	export interface FormSettings {

		/** Settings related to quiz forms and grading. These must be updated with the UpdateSettingsRequest. */
		quizSettings?: QuizSettings;
	}

	/** A form's settings. */
	export interface FormSettingsFormProperties {
	}
	export function CreateFormSettingsFormGroup() {
		return new FormGroup<FormSettingsFormProperties>({
		});

	}


	/** Settings related to quiz forms and grading. These must be updated with the UpdateSettingsRequest. */
	export interface QuizSettings {

		/** Whether this form is a quiz or not. When true, responses are graded based on question Grading. Upon setting to false, all question Grading is deleted. */
		isQuiz?: boolean | null;
	}

	/** Settings related to quiz forms and grading. These must be updated with the UpdateSettingsRequest. */
	export interface QuizSettingsFormProperties {

		/** Whether this form is a quiz or not. When true, responses are graded based on question Grading. Upon setting to false, all question Grading is deleted. */
		isQuiz: FormControl<boolean | null | undefined>,
	}
	export function CreateQuizSettingsFormGroup() {
		return new FormGroup<QuizSettingsFormProperties>({
			isQuiz: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Provides control over how write requests are executed. */
	export interface WriteControl {

		/** The revision ID of the form that the write request is applied to. If this is not the latest revision of the form, the request is not processed and returns a 400 bad request error. */
		requiredRevisionId?: string | null;

		/** The target revision ID of the form that the write request is applied to. If changes have occurred after this revision, the changes in this update request are transformed against those changes. This results in a new revision of the form that incorporates both the changes in the request and the intervening changes, with the server resolving conflicting changes. The target revision ID may only be used to write to recent versions of a form. If the target revision is too far behind the latest revision, the request is not processed and returns a 400 (Bad Request Error). The request may be retried after reading the latest version of the form. In most cases a target revision ID remains valid for several minutes after it is read, but for frequently-edited forms this window may be shorter. */
		targetRevisionId?: string | null;
	}

	/** Provides control over how write requests are executed. */
	export interface WriteControlFormProperties {

		/** The revision ID of the form that the write request is applied to. If this is not the latest revision of the form, the request is not processed and returns a 400 bad request error. */
		requiredRevisionId: FormControl<string | null | undefined>,

		/** The target revision ID of the form that the write request is applied to. If changes have occurred after this revision, the changes in this update request are transformed against those changes. This results in a new revision of the form that incorporates both the changes in the request and the intervening changes, with the server resolving conflicting changes. The target revision ID may only be used to write to recent versions of a form. If the target revision is too far behind the latest revision, the request is not processed and returns a 400 (Bad Request Error). The request may be retried after reading the latest version of the form. In most cases a target revision ID remains valid for several minutes after it is read, but for frequently-edited forms this window may be shorter. */
		targetRevisionId: FormControl<string | null | undefined>,
	}
	export function CreateWriteControlFormGroup() {
		return new FormGroup<WriteControlFormProperties>({
			requiredRevisionId: new FormControl<string | null | undefined>(undefined),
			targetRevisionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to a BatchUpdateFormRequest. */
	export interface BatchUpdateFormResponse {

		/** A Google Forms document. A form is created in Drive, and deleting a form or changing its access protections is done via the [Drive API](https://developers.google.com/drive/api/v3/about-sdk). */
		form?: Form;

		/** The reply of the updates. This maps 1:1 with the update requests, although replies to some requests may be empty. */
		replies?: Array<Response>;

		/** Provides control over how write requests are executed. */
		writeControl?: WriteControl;
	}

	/** Response to a BatchUpdateFormRequest. */
	export interface BatchUpdateFormResponseFormProperties {
	}
	export function CreateBatchUpdateFormResponseFormGroup() {
		return new FormGroup<BatchUpdateFormResponseFormProperties>({
		});

	}


	/** A Google Forms document. A form is created in Drive, and deleting a form or changing its access protections is done via the [Drive API](https://developers.google.com/drive/api/v3/about-sdk). */
	export interface Form {

		/** Output only. The form ID. */
		formId?: string | null;

		/** The general information for a form. */
		info?: Info;

		/** Required. A list of the form's items, which can include section headers, questions, embedded media, etc. */
		items?: Array<Item>;

		/** Output only. The ID of the linked Google Sheet which is accumulating responses from this Form (if such a Sheet exists). */
		linkedSheetId?: string | null;

		/** Output only. The form URI to share with responders. This opens a page that allows the user to submit responses but not edit the questions. */
		responderUri?: string | null;

		/** Output only. The revision ID of the form. Used in the WriteControl in update requests to identify the revision on which the changes are based. The format of the revision ID may change over time, so it should be treated opaquely. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the form has not changed. Conversely, a changed ID (for the same form and user) usually means the form has been updated; however, a changed ID can also be due to internal factors such as ID format changes. */
		revisionId?: string | null;

		/** A form's settings. */
		settings?: FormSettings;
	}

	/** A Google Forms document. A form is created in Drive, and deleting a form or changing its access protections is done via the [Drive API](https://developers.google.com/drive/api/v3/about-sdk). */
	export interface FormFormProperties {

		/** Output only. The form ID. */
		formId: FormControl<string | null | undefined>,

		/** Output only. The ID of the linked Google Sheet which is accumulating responses from this Form (if such a Sheet exists). */
		linkedSheetId: FormControl<string | null | undefined>,

		/** Output only. The form URI to share with responders. This opens a page that allows the user to submit responses but not edit the questions. */
		responderUri: FormControl<string | null | undefined>,

		/** Output only. The revision ID of the form. Used in the WriteControl in update requests to identify the revision on which the changes are based. The format of the revision ID may change over time, so it should be treated opaquely. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the form has not changed. Conversely, a changed ID (for the same form and user) usually means the form has been updated; however, a changed ID can also be due to internal factors such as ID format changes. */
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreateFormFormGroup() {
		return new FormGroup<FormFormProperties>({
			formId: new FormControl<string | null | undefined>(undefined),
			linkedSheetId: new FormControl<string | null | undefined>(undefined),
			responderUri: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single response from an update. */
	export interface Response {

		/** The result of creating an item. */
		createItem?: CreateItemResponse;
	}

	/** A single response from an update. */
	export interface ResponseFormProperties {
	}
	export function CreateResponseFormGroup() {
		return new FormGroup<ResponseFormProperties>({
		});

	}


	/** The result of creating an item. */
	export interface CreateItemResponse {

		/** The ID of the created item. */
		itemId?: string | null;

		/** The ID of the question created as part of this item, for a question group it lists IDs of all the questions created for this item. */
		questionId?: Array<string>;
	}

	/** The result of creating an item. */
	export interface CreateItemResponseFormProperties {

		/** The ID of the created item. */
		itemId: FormControl<string | null | undefined>,
	}
	export function CreateCreateItemResponseFormGroup() {
		return new FormGroup<CreateItemResponseFormProperties>({
			itemId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Pub/Sub topic. */
	export interface CloudPubsubTopic {

		/** Required. A fully qualified Pub/Sub topic name to publish the events to. This topic must be owned by the calling project and already exist in Pub/Sub. */
		topicName?: string | null;
	}

	/** A Pub/Sub topic. */
	export interface CloudPubsubTopicFormProperties {

		/** Required. A fully qualified Pub/Sub topic name to publish the events to. This topic must be owned by the calling project and already exist in Pub/Sub. */
		topicName: FormControl<string | null | undefined>,
	}
	export function CreateCloudPubsubTopicFormGroup() {
		return new FormGroup<CloudPubsubTopicFormProperties>({
			topicName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Create a new watch. */
	export interface CreateWatchRequest {

		/** A watch for events for a form. When the designated event happens, a notification will be published to the specified target. The notification's attributes will include a `formId` key that has the ID of the watched form and an `eventType` key that has the string of the type. Messages are sent with at-least-once delivery and are only dropped in extraordinary circumstances. Typically all notifications should be reliably delivered within a few seconds; however, in some situations notifications may be delayed. A watch expires seven days after it is created unless it is renewed with watches.renew */
		watch?: Watch;

		/** The ID to use for the watch. If specified, the ID must not already be in use. If not specified, an ID is generated. This value should be 4-63 characters, and valid characters are /a-z-/. */
		watchId?: string | null;
	}

	/** Create a new watch. */
	export interface CreateWatchRequestFormProperties {

		/** The ID to use for the watch. If specified, the ID must not already be in use. If not specified, an ID is generated. This value should be 4-63 characters, and valid characters are /a-z-/. */
		watchId: FormControl<string | null | undefined>,
	}
	export function CreateCreateWatchRequestFormGroup() {
		return new FormGroup<CreateWatchRequestFormProperties>({
			watchId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A watch for events for a form. When the designated event happens, a notification will be published to the specified target. The notification's attributes will include a `formId` key that has the ID of the watched form and an `eventType` key that has the string of the type. Messages are sent with at-least-once delivery and are only dropped in extraordinary circumstances. Typically all notifications should be reliably delivered within a few seconds; however, in some situations notifications may be delayed. A watch expires seven days after it is created unless it is renewed with watches.renew */
	export interface Watch {

		/** Output only. Timestamp of when this was created. */
		createTime?: string | null;

		/** Output only. The most recent error type for an attempted delivery. To begin watching the form again a call can be made to watches.renew which also clears this error information. */
		errorType?: WatchErrorType | null;

		/** Required. Which event type to watch for. */
		eventType?: WatchEventType | null;

		/** Output only. Timestamp for when this will expire. Each watches.renew call resets this to seven days in the future. */
		expireTime?: string | null;

		/** Output only. The ID of this watch. See notes on CreateWatchRequest.watch_id. */
		id?: string | null;

		/** Output only. The current state of the watch. Additional details about suspended watches can be found by checking the `error_type`. */
		state?: WatchState | null;

		/** The target for notification delivery. */
		target?: WatchTarget;
	}

	/** A watch for events for a form. When the designated event happens, a notification will be published to the specified target. The notification's attributes will include a `formId` key that has the ID of the watched form and an `eventType` key that has the string of the type. Messages are sent with at-least-once delivery and are only dropped in extraordinary circumstances. Typically all notifications should be reliably delivered within a few seconds; however, in some situations notifications may be delayed. A watch expires seven days after it is created unless it is renewed with watches.renew */
	export interface WatchFormProperties {

		/** Output only. Timestamp of when this was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The most recent error type for an attempted delivery. To begin watching the form again a call can be made to watches.renew which also clears this error information. */
		errorType: FormControl<WatchErrorType | null | undefined>,

		/** Required. Which event type to watch for. */
		eventType: FormControl<WatchEventType | null | undefined>,

		/** Output only. Timestamp for when this will expire. Each watches.renew call resets this to seven days in the future. */
		expireTime: FormControl<string | null | undefined>,

		/** Output only. The ID of this watch. See notes on CreateWatchRequest.watch_id. */
		id: FormControl<string | null | undefined>,

		/** Output only. The current state of the watch. Additional details about suspended watches can be found by checking the `error_type`. */
		state: FormControl<WatchState | null | undefined>,
	}
	export function CreateWatchFormGroup() {
		return new FormGroup<WatchFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			errorType: new FormControl<WatchErrorType | null | undefined>(undefined),
			eventType: new FormControl<WatchEventType | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<WatchState | null | undefined>(undefined),
		});

	}

	export enum WatchErrorType { ERROR_TYPE_UNSPECIFIED = 'ERROR_TYPE_UNSPECIFIED', PROJECT_NOT_AUTHORIZED = 'PROJECT_NOT_AUTHORIZED', NO_USER_ACCESS = 'NO_USER_ACCESS', OTHER_ERRORS = 'OTHER_ERRORS' }

	export enum WatchEventType { EVENT_TYPE_UNSPECIFIED = 'EVENT_TYPE_UNSPECIFIED', SCHEMA = 'SCHEMA', RESPONSES = 'RESPONSES' }

	export enum WatchState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', ACTIVE = 'ACTIVE', SUSPENDED = 'SUSPENDED' }


	/** The target for notification delivery. */
	export interface WatchTarget {

		/** A Pub/Sub topic. */
		topic?: CloudPubsubTopic;
	}

	/** The target for notification delivery. */
	export interface WatchTargetFormProperties {
	}
	export function CreateWatchTargetFormGroup() {
		return new FormGroup<WatchTargetFormProperties>({
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface Empty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** A form response. */
	export interface FormResponse {

		/** Output only. The actual answers to the questions, keyed by question_id. */
		answers?: {[id: string]: Answer };

		/** Output only. Timestamp for the first time the response was submitted. */
		createTime?: string | null;

		/** Output only. The form ID. */
		formId?: string | null;

		/** Output only. Timestamp for the most recent time the response was submitted. Does not track changes to grades. */
		lastSubmittedTime?: string | null;

		/** Output only. The email address (if collected) for the respondent. */
		respondentEmail?: string | null;

		/** Output only. The response ID. */
		responseId?: string | null;

		/** Output only. The total number of points the respondent received for their submission Only set if the form was a quiz and the response was graded. This includes points automatically awarded via autograding adjusted by any manual corrections entered by the form owner. */
		totalScore?: number | null;
	}

	/** A form response. */
	export interface FormResponseFormProperties {

		/** Output only. The actual answers to the questions, keyed by question_id. */
		answers: FormControl<{[id: string]: Answer } | null | undefined>,

		/** Output only. Timestamp for the first time the response was submitted. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The form ID. */
		formId: FormControl<string | null | undefined>,

		/** Output only. Timestamp for the most recent time the response was submitted. Does not track changes to grades. */
		lastSubmittedTime: FormControl<string | null | undefined>,

		/** Output only. The email address (if collected) for the respondent. */
		respondentEmail: FormControl<string | null | undefined>,

		/** Output only. The response ID. */
		responseId: FormControl<string | null | undefined>,

		/** Output only. The total number of points the respondent received for their submission Only set if the form was a quiz and the response was graded. This includes points automatically awarded via autograding adjusted by any manual corrections entered by the form owner. */
		totalScore: FormControl<number | null | undefined>,
	}
	export function CreateFormResponseFormGroup() {
		return new FormGroup<FormResponseFormProperties>({
			answers: new FormControl<{[id: string]: Answer } | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			formId: new FormControl<string | null | undefined>(undefined),
			lastSubmittedTime: new FormControl<string | null | undefined>(undefined),
			respondentEmail: new FormControl<string | null | undefined>(undefined),
			responseId: new FormControl<string | null | undefined>(undefined),
			totalScore: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response to a ListFormResponsesRequest. */
	export interface ListFormResponsesResponse {

		/** If set, there are more responses. To get the next page of responses, provide this as `page_token` in a future request. */
		nextPageToken?: string | null;

		/** The returned form responses. Note: The `formId` field is not returned in the `FormResponse` object for list requests. */
		responses?: Array<FormResponse>;
	}

	/** Response to a ListFormResponsesRequest. */
	export interface ListFormResponsesResponseFormProperties {

		/** If set, there are more responses. To get the next page of responses, provide this as `page_token` in a future request. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListFormResponsesResponseFormGroup() {
		return new FormGroup<ListFormResponsesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response of a ListWatchesRequest. */
	export interface ListWatchesResponse {

		/** The returned watches. */
		watches?: Array<Watch>;
	}

	/** The response of a ListWatchesRequest. */
	export interface ListWatchesResponseFormProperties {
	}
	export function CreateListWatchesResponseFormGroup() {
		return new FormGroup<ListWatchesResponseFormProperties>({
		});

	}


	/** Renew an existing Watch for seven days. */
	export interface RenewWatchRequest {
	}

	/** Renew an existing Watch for seven days. */
	export interface RenewWatchRequestFormProperties {
	}
	export function CreateRenewWatchRequestFormGroup() {
		return new FormGroup<RenewWatchRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Create a new form using the title given in the provided form message in the request. *Important:* Only the form.info.title and form.info.document_title fields are copied to the new form. All other fields including the form description, items and settings are disallowed. To create a new form and add items, you must first call forms.create to create an empty form with a title and (optional) document title, and then call forms.update to add the items.
		 * Post v1/forms
		 * @return {Form} Successful response
		 */
		Forms_forms_create(requestBody: Form): Observable<Form> {
			return this.http.post<Form>(this.baseUri + 'v1/forms', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a form.
		 * Get v1/forms/{formId}
		 * @param {string} formId Required. The form ID.
		 * @return {Form} Successful response
		 */
		Forms_forms_get(formId: string): Observable<Form> {
			return this.http.get<Form>(this.baseUri + 'v1/forms/' + (formId == null ? '' : encodeURIComponent(formId)), {});
		}

		/**
		 * List a form's responses.
		 * Get v1/forms/{formId}/responses
		 * @param {string} formId Required. ID of the Form whose responses to list.
		 * @param {string} filter Which form responses to return. Currently, the only supported filters are: * timestamp > *N* which means to get all form responses submitted after (but not at) timestamp *N*. * timestamp >= *N* which means to get all form responses submitted at and after timestamp *N*. For both supported filters, timestamp must be formatted in RFC3339 UTC "Zulu" format. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
		 * @param {number} pageSize The maximum number of responses to return. The service may return fewer than this value. If unspecified or zero, at most 5000 responses are returned.
		 * @param {string} pageToken A page token returned by a previous list response. If this field is set, the form and the values of the filter must be the same as for the original request.
		 * @return {ListFormResponsesResponse} Successful response
		 */
		Forms_forms_responses_list(formId: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListFormResponsesResponse> {
			return this.http.get<ListFormResponsesResponse>(this.baseUri + 'v1/forms/' + (formId == null ? '' : encodeURIComponent(formId)) + '/responses&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Get one response from the form.
		 * Get v1/forms/{formId}/responses/{responseId}
		 * @param {string} formId Required. The form ID.
		 * @param {string} responseId Required. The response ID within the form.
		 * @return {FormResponse} Successful response
		 */
		Forms_forms_responses_get(formId: string, responseId: string): Observable<FormResponse> {
			return this.http.get<FormResponse>(this.baseUri + 'v1/forms/' + (formId == null ? '' : encodeURIComponent(formId)) + '/responses/' + (responseId == null ? '' : encodeURIComponent(responseId)), {});
		}

		/**
		 * Return a list of the watches owned by the invoking project. The maximum number of watches is two: For each invoker, the limit is one for each event type per form.
		 * Get v1/forms/{formId}/watches
		 * @param {string} formId Required. ID of the Form whose watches to list.
		 * @return {ListWatchesResponse} Successful response
		 */
		Forms_forms_watches_list(formId: string): Observable<ListWatchesResponse> {
			return this.http.get<ListWatchesResponse>(this.baseUri + 'v1/forms/' + (formId == null ? '' : encodeURIComponent(formId)) + '/watches', {});
		}

		/**
		 * Create a new watch. If a watch ID is provided, it must be unused. For each invoking project, the per form limit is one watch per Watch.EventType. A watch expires seven days after it is created (see Watch.expire_time).
		 * Post v1/forms/{formId}/watches
		 * @param {string} formId Required. ID of the Form to watch.
		 * @return {Watch} Successful response
		 */
		Forms_forms_watches_create(formId: string, requestBody: CreateWatchRequest): Observable<Watch> {
			return this.http.post<Watch>(this.baseUri + 'v1/forms/' + (formId == null ? '' : encodeURIComponent(formId)) + '/watches', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a watch.
		 * Delete v1/forms/{formId}/watches/{watchId}
		 * @param {string} formId Required. The ID of the Form.
		 * @param {string} watchId Required. The ID of the Watch to delete.
		 * @return {Empty} Successful response
		 */
		Forms_forms_watches_delete(formId: string, watchId: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/forms/' + (formId == null ? '' : encodeURIComponent(formId)) + '/watches/' + (watchId == null ? '' : encodeURIComponent(watchId)), {});
		}

		/**
		 * Renew an existing watch for seven days. The state of the watch after renewal is `ACTIVE`, and the `expire_time` is seven days from the renewal. Renewing a watch in an error state (e.g. `SUSPENDED`) succeeds if the error is no longer present, but fail otherwise. After a watch has expired, RenewWatch returns `NOT_FOUND`.
		 * Post v1/forms/{formId}/watches/{watchId}:renew
		 * @param {string} formId Required. The ID of the Form.
		 * @param {string} watchId Required. The ID of the Watch to renew.
		 * @return {Watch} Successful response
		 */
		Forms_forms_watches_renew(formId: string, watchId: string, requestBody: RenewWatchRequest): Observable<Watch> {
			return this.http.post<Watch>(this.baseUri + 'v1/forms/' + (formId == null ? '' : encodeURIComponent(formId)) + '/watches/' + (watchId == null ? '' : encodeURIComponent(watchId)) + ':renew', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Change the form with a batch of updates.
		 * Post v1/forms/{formId}:batchUpdate
		 * @param {string} formId Required. The form ID.
		 * @return {BatchUpdateFormResponse} Successful response
		 */
		Forms_forms_batchUpdate(formId: string, requestBody: BatchUpdateFormRequest): Observable<BatchUpdateFormResponse> {
			return this.http.post<BatchUpdateFormResponse>(this.baseUri + 'v1/forms/' + (formId == null ? '' : encodeURIComponent(formId)) + ':batchUpdate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

