import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AnalyzeDocumentResponse {
		DocumentMetadata?: DocumentMetadata;
		Blocks?: Array<Block>;
		HumanLoopActivationOutput?: HumanLoopActivationOutput;
		AnalyzeDocumentModelVersion?: string;
	}
	export interface AnalyzeDocumentResponseFormProperties {
		AnalyzeDocumentModelVersion: FormControl<string | null | undefined>,
	}
	export function CreateAnalyzeDocumentResponseFormGroup() {
		return new FormGroup<AnalyzeDocumentResponseFormProperties>({
			AnalyzeDocumentModelVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the input document. */
	export interface DocumentMetadata {
		Pages?: number | null;
	}

	/** Information about the input document. */
	export interface DocumentMetadataFormProperties {
		Pages: FormControl<number | null | undefined>,
	}
	export function CreateDocumentMetadataFormGroup() {
		return new FormGroup<DocumentMetadataFormProperties>({
			Pages: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>A <code>Block</code> represents items that are recognized in a document within a group of pixels close to each other. The information returned in a <code>Block</code> object depends on the type of operation. In text detection for documents (for example <a>DetectDocumentText</a>), you get information about the detected words and lines of text. In text analysis (for example <a>AnalyzeDocument</a>), you can also get information about the fields, tables, and selection elements that are detected in the document.</p> <p>An array of <code>Block</code> objects is returned by both synchronous and asynchronous operations. In synchronous operations, such as <a>DetectDocumentText</a>, the array of <code>Block</code> objects is the entire set of results. In asynchronous operations, such as <a>GetDocumentAnalysis</a>, the array is returned over one or more responses.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works.html">How Amazon Textract Works</a>.</p> */
	export interface Block {
		BlockType?: BlockType;
		Confidence?: number;
		Text?: string;
		TextType?: TextType;
		RowIndex?: number | null;
		ColumnIndex?: number | null;
		RowSpan?: number | null;
		ColumnSpan?: number | null;
		Geometry?: Geometry;
		Id?: string;
		Relationships?: Array<Relationship>;
		EntityTypes?: Array<EntityType>;
		SelectionStatus?: SelectionStatus;
		Page?: number | null;
		Query?: Query;
	}

	/** <p>A <code>Block</code> represents items that are recognized in a document within a group of pixels close to each other. The information returned in a <code>Block</code> object depends on the type of operation. In text detection for documents (for example <a>DetectDocumentText</a>), you get information about the detected words and lines of text. In text analysis (for example <a>AnalyzeDocument</a>), you can also get information about the fields, tables, and selection elements that are detected in the document.</p> <p>An array of <code>Block</code> objects is returned by both synchronous and asynchronous operations. In synchronous operations, such as <a>DetectDocumentText</a>, the array of <code>Block</code> objects is the entire set of results. In asynchronous operations, such as <a>GetDocumentAnalysis</a>, the array is returned over one or more responses.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works.html">How Amazon Textract Works</a>.</p> */
	export interface BlockFormProperties {
		BlockType: FormControl<BlockType | null | undefined>,
		Confidence: FormControl<number | null | undefined>,
		Text: FormControl<string | null | undefined>,
		TextType: FormControl<TextType | null | undefined>,
		RowIndex: FormControl<number | null | undefined>,
		ColumnIndex: FormControl<number | null | undefined>,
		RowSpan: FormControl<number | null | undefined>,
		ColumnSpan: FormControl<number | null | undefined>,
		Id: FormControl<string | null | undefined>,
		SelectionStatus: FormControl<SelectionStatus | null | undefined>,
		Page: FormControl<number | null | undefined>,
	}
	export function CreateBlockFormGroup() {
		return new FormGroup<BlockFormProperties>({
			BlockType: new FormControl<BlockType | null | undefined>(undefined),
			Confidence: new FormControl<number | null | undefined>(undefined),
			Text: new FormControl<string | null | undefined>(undefined),
			TextType: new FormControl<TextType | null | undefined>(undefined),
			RowIndex: new FormControl<number | null | undefined>(undefined),
			ColumnIndex: new FormControl<number | null | undefined>(undefined),
			RowSpan: new FormControl<number | null | undefined>(undefined),
			ColumnSpan: new FormControl<number | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			SelectionStatus: new FormControl<SelectionStatus | null | undefined>(undefined),
			Page: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum BlockType { KEY_VALUE_SET = 0, PAGE = 1, LINE = 2, WORD = 3, TABLE = 4, CELL = 5, SELECTION_ELEMENT = 6, MERGED_CELL = 7, TITLE = 8, QUERY = 9, QUERY_RESULT = 10, SIGNATURE = 11, TABLE_TITLE = 12, TABLE_FOOTER = 13 }

	export enum TextType { HANDWRITING = 0, PRINTED = 1 }


	/** Information about where the following items are located on a document page: detected page, text, key-value pairs, tables, table cells, and selection elements. */
	export interface Geometry {
		BoundingBox?: BoundingBox;
		Polygon?: Array<Point>;
	}

	/** Information about where the following items are located on a document page: detected page, text, key-value pairs, tables, table cells, and selection elements. */
	export interface GeometryFormProperties {
	}
	export function CreateGeometryFormGroup() {
		return new FormGroup<GeometryFormProperties>({
		});

	}


	/** <p>The bounding box around the detected page, text, key-value pair, table, table cell, or selection element on a document page. The <code>left</code> (x-coordinate) and <code>top</code> (y-coordinate) are coordinates that represent the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0). </p> <p>The <code>top</code> and <code>left</code> values returned are ratios of the overall document page size. For example, if the input image is 700 x 200 pixels, and the top-left coordinate of the bounding box is 350 x 50 pixels, the API returns a <code>left</code> value of 0.5 (350/700) and a <code>top</code> value of 0.25 (50/200).</p> <p>The <code>width</code> and <code>height</code> values represent the dimensions of the bounding box as a ratio of the overall document page dimension. For example, if the document page size is 700 x 200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1. </p> */
	export interface BoundingBox {
		Width?: number;
		Height?: number;
		Left?: number;
		Top?: number;
	}

	/** <p>The bounding box around the detected page, text, key-value pair, table, table cell, or selection element on a document page. The <code>left</code> (x-coordinate) and <code>top</code> (y-coordinate) are coordinates that represent the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0). </p> <p>The <code>top</code> and <code>left</code> values returned are ratios of the overall document page size. For example, if the input image is 700 x 200 pixels, and the top-left coordinate of the bounding box is 350 x 50 pixels, the API returns a <code>left</code> value of 0.5 (350/700) and a <code>top</code> value of 0.25 (50/200).</p> <p>The <code>width</code> and <code>height</code> values represent the dimensions of the bounding box as a ratio of the overall document page dimension. For example, if the document page size is 700 x 200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1. </p> */
	export interface BoundingBoxFormProperties {
		Width: FormControl<number | null | undefined>,
		Height: FormControl<number | null | undefined>,
		Left: FormControl<number | null | undefined>,
		Top: FormControl<number | null | undefined>,
	}
	export function CreateBoundingBoxFormGroup() {
		return new FormGroup<BoundingBoxFormProperties>({
			Width: new FormControl<number | null | undefined>(undefined),
			Height: new FormControl<number | null | undefined>(undefined),
			Left: new FormControl<number | null | undefined>(undefined),
			Top: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>The X and Y coordinates of a point on a document page. The X and Y values that are returned are ratios of the overall document page size. For example, if the input document is 700 x 200 and the operation returns X=0.5 and Y=0.25, then the point is at the (350,50) pixel coordinate on the document page.</p> <p>An array of <code>Point</code> objects, <code>Polygon</code>, is returned by <a>DetectDocumentText</a>. <code>Polygon</code> represents a fine-grained polygon around detected text. For more information, see Geometry in the Amazon Textract Developer Guide. </p> */
	export interface Point {
		X?: number;
		Y?: number;
	}

	/** <p>The X and Y coordinates of a point on a document page. The X and Y values that are returned are ratios of the overall document page size. For example, if the input document is 700 x 200 and the operation returns X=0.5 and Y=0.25, then the point is at the (350,50) pixel coordinate on the document page.</p> <p>An array of <code>Point</code> objects, <code>Polygon</code>, is returned by <a>DetectDocumentText</a>. <code>Polygon</code> represents a fine-grained polygon around detected text. For more information, see Geometry in the Amazon Textract Developer Guide. </p> */
	export interface PointFormProperties {
		X: FormControl<number | null | undefined>,
		Y: FormControl<number | null | undefined>,
	}
	export function CreatePointFormGroup() {
		return new FormGroup<PointFormProperties>({
			X: new FormControl<number | null | undefined>(undefined),
			Y: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>Information about how blocks are related to each other. A <code>Block</code> object contains 0 or more <code>Relation</code> objects in a list, <code>Relationships</code>. For more information, see <a>Block</a>.</p> <p>The <code>Type</code> element provides the type of the relationship for all blocks in the <code>IDs</code> array. </p> */
	export interface Relationship {
		Type?: RelationshipType;
		Ids?: Array<string>;
	}

	/** <p>Information about how blocks are related to each other. A <code>Block</code> object contains 0 or more <code>Relation</code> objects in a list, <code>Relationships</code>. For more information, see <a>Block</a>.</p> <p>The <code>Type</code> element provides the type of the relationship for all blocks in the <code>IDs</code> array. </p> */
	export interface RelationshipFormProperties {
		Type: FormControl<RelationshipType | null | undefined>,
	}
	export function CreateRelationshipFormGroup() {
		return new FormGroup<RelationshipFormProperties>({
			Type: new FormControl<RelationshipType | null | undefined>(undefined),
		});

	}

	export enum RelationshipType { VALUE = 0, CHILD = 1, COMPLEX_FEATURES = 2, MERGED_CELL = 3, TITLE = 4, ANSWER = 5, TABLE = 6, TABLE_TITLE = 7, TABLE_FOOTER = 8 }

	export enum EntityType { KEY = 0, VALUE = 1, COLUMN_HEADER = 2, TABLE_TITLE = 3, TABLE_FOOTER = 4, TABLE_SECTION_TITLE = 5, TABLE_SUMMARY = 6, STRUCTURED_TABLE = 7, SEMI_STRUCTURED_TABLE = 8 }

	export enum SelectionStatus { SELECTED = 0, NOT_SELECTED = 1 }


	/** Each query contains the question you want to ask in the Text and the alias you want to associate. */
	export interface Query {

		/** Required */
		Text: string;
		Alias?: string;
		Pages?: Array<string>;
	}

	/** Each query contains the question you want to ask in the Text and the alias you want to associate. */
	export interface QueryFormProperties {

		/** Required */
		Text: FormControl<string | null | undefined>,
		Alias: FormControl<string | null | undefined>,
	}
	export function CreateQueryFormGroup() {
		return new FormGroup<QueryFormProperties>({
			Text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Alias: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Shows the results of the human in the loop evaluation. If there is no HumanLoopArn, the input did not trigger human review. */
	export interface HumanLoopActivationOutput {
		HumanLoopArn?: string;
		HumanLoopActivationReasons?: Array<string>;
		HumanLoopActivationConditionsEvaluationResults?: string;
	}

	/** Shows the results of the human in the loop evaluation. If there is no HumanLoopArn, the input did not trigger human review. */
	export interface HumanLoopActivationOutputFormProperties {
		HumanLoopArn: FormControl<string | null | undefined>,
		HumanLoopActivationConditionsEvaluationResults: FormControl<string | null | undefined>,
	}
	export function CreateHumanLoopActivationOutputFormGroup() {
		return new FormGroup<HumanLoopActivationOutputFormProperties>({
			HumanLoopArn: new FormControl<string | null | undefined>(undefined),
			HumanLoopActivationConditionsEvaluationResults: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AnalyzeDocumentRequest {

		/** Required */
		Document: Document;

		/** Required */
		FeatureTypes: Array<FeatureType>;
		HumanLoopConfig?: HumanLoopConfig;
		QueriesConfig?: QueriesConfig;
	}
	export interface AnalyzeDocumentRequestFormProperties {
	}
	export function CreateAnalyzeDocumentRequestFormGroup() {
		return new FormGroup<AnalyzeDocumentRequestFormProperties>({
		});

	}


	/** <p>The input document, either as bytes or as an S3 object.</p> <p>You pass image bytes to an Amazon Textract API operation by using the <code>Bytes</code> property. For example, you would use the <code>Bytes</code> property to pass a document loaded from a local file system. Image bytes passed by using the <code>Bytes</code> property must be base64 encoded. Your code might not need to encode document file bytes if you're using an AWS SDK to call Amazon Textract API operations. </p> <p>You pass images stored in an S3 bucket to an Amazon Textract API operation by using the <code>S3Object</code> property. Documents stored in an S3 bucket don't need to be base64 encoded.</p> <p>The AWS Region for the S3 bucket that contains the S3 object must match the AWS Region that you use for Amazon Textract operations.</p> <p>If you use the AWS CLI to call Amazon Textract operations, passing image bytes using the Bytes property isn't supported. You must first upload the document to an Amazon S3 bucket, and then call the operation using the S3Object property.</p> <p>For Amazon Textract to process an S3 object, the user must have permission to access the S3 object. </p> */
	export interface Document {
		Bytes?: string;
		S3Object?: S3Object;
	}

	/** <p>The input document, either as bytes or as an S3 object.</p> <p>You pass image bytes to an Amazon Textract API operation by using the <code>Bytes</code> property. For example, you would use the <code>Bytes</code> property to pass a document loaded from a local file system. Image bytes passed by using the <code>Bytes</code> property must be base64 encoded. Your code might not need to encode document file bytes if you're using an AWS SDK to call Amazon Textract API operations. </p> <p>You pass images stored in an S3 bucket to an Amazon Textract API operation by using the <code>S3Object</code> property. Documents stored in an S3 bucket don't need to be base64 encoded.</p> <p>The AWS Region for the S3 bucket that contains the S3 object must match the AWS Region that you use for Amazon Textract operations.</p> <p>If you use the AWS CLI to call Amazon Textract operations, passing image bytes using the Bytes property isn't supported. You must first upload the document to an Amazon S3 bucket, and then call the operation using the S3Object property.</p> <p>For Amazon Textract to process an S3 object, the user must have permission to access the S3 object. </p> */
	export interface DocumentFormProperties {
		Bytes: FormControl<string | null | undefined>,
	}
	export function CreateDocumentFormGroup() {
		return new FormGroup<DocumentFormProperties>({
			Bytes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The S3 bucket name and file name that identifies the document.</p> <p>The AWS Region for the S3 bucket that contains the document must match the Region that you use for Amazon Textract operations.</p> <p>For Amazon Textract to process a file in an S3 bucket, the user must have permission to access the S3 bucket and file. </p> */
	export interface S3Object {
		Bucket?: string;
		Name?: string;
		Version?: string;
	}

	/** <p>The S3 bucket name and file name that identifies the document.</p> <p>The AWS Region for the S3 bucket that contains the document must match the Region that you use for Amazon Textract operations.</p> <p>For Amazon Textract to process a file in an S3 bucket, the user must have permission to access the S3 bucket and file. </p> */
	export interface S3ObjectFormProperties {
		Bucket: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateS3ObjectFormGroup() {
		return new FormGroup<S3ObjectFormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FeatureType { TABLES = 0, FORMS = 1, QUERIES = 2, SIGNATURES = 3 }


	/** Sets up the human review workflow the document will be sent to if one of the conditions is met. You can also set certain attributes of the image before review.  */
	export interface HumanLoopConfig {

		/** Required */
		HumanLoopName: string;

		/** Required */
		FlowDefinitionArn: string;
		DataAttributes?: HumanLoopDataAttributes;
	}

	/** Sets up the human review workflow the document will be sent to if one of the conditions is met. You can also set certain attributes of the image before review.  */
	export interface HumanLoopConfigFormProperties {

		/** Required */
		HumanLoopName: FormControl<string | null | undefined>,

		/** Required */
		FlowDefinitionArn: FormControl<string | null | undefined>,
	}
	export function CreateHumanLoopConfigFormGroup() {
		return new FormGroup<HumanLoopConfigFormProperties>({
			HumanLoopName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FlowDefinitionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Allows you to set attributes of the image. Currently, you can declare an image as free of personally identifiable information and adult content.  */
	export interface HumanLoopDataAttributes {
		ContentClassifiers?: Array<ContentClassifier>;
	}

	/** Allows you to set attributes of the image. Currently, you can declare an image as free of personally identifiable information and adult content.  */
	export interface HumanLoopDataAttributesFormProperties {
	}
	export function CreateHumanLoopDataAttributesFormGroup() {
		return new FormGroup<HumanLoopDataAttributesFormProperties>({
		});

	}

	export enum ContentClassifier { FreeOfPersonallyIdentifiableInformation = 0, FreeOfAdultContent = 1 }


	/** <p/> */
	export interface QueriesConfig {

		/** Required */
		Queries: Array<Query>;
	}

	/** <p/> */
	export interface QueriesConfigFormProperties {
	}
	export function CreateQueriesConfigFormGroup() {
		return new FormGroup<QueriesConfigFormProperties>({
		});

	}

	export interface InvalidParameterException {
	}
	export interface InvalidParameterExceptionFormProperties {
	}
	export function CreateInvalidParameterExceptionFormGroup() {
		return new FormGroup<InvalidParameterExceptionFormProperties>({
		});

	}

	export interface InvalidS3ObjectException {
	}
	export interface InvalidS3ObjectExceptionFormProperties {
	}
	export function CreateInvalidS3ObjectExceptionFormGroup() {
		return new FormGroup<InvalidS3ObjectExceptionFormProperties>({
		});

	}

	export interface UnsupportedDocumentException {
	}
	export interface UnsupportedDocumentExceptionFormProperties {
	}
	export function CreateUnsupportedDocumentExceptionFormGroup() {
		return new FormGroup<UnsupportedDocumentExceptionFormProperties>({
		});

	}

	export interface DocumentTooLargeException {
	}
	export interface DocumentTooLargeExceptionFormProperties {
	}
	export function CreateDocumentTooLargeExceptionFormGroup() {
		return new FormGroup<DocumentTooLargeExceptionFormProperties>({
		});

	}

	export interface BadDocumentException {
	}
	export interface BadDocumentExceptionFormProperties {
	}
	export function CreateBadDocumentExceptionFormGroup() {
		return new FormGroup<BadDocumentExceptionFormProperties>({
		});

	}

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface ProvisionedThroughputExceededException {
	}
	export interface ProvisionedThroughputExceededExceptionFormProperties {
	}
	export function CreateProvisionedThroughputExceededExceptionFormGroup() {
		return new FormGroup<ProvisionedThroughputExceededExceptionFormProperties>({
		});

	}

	export interface InternalServerError {
	}
	export interface InternalServerErrorFormProperties {
	}
	export function CreateInternalServerErrorFormGroup() {
		return new FormGroup<InternalServerErrorFormProperties>({
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

	export interface HumanLoopQuotaExceededException {
	}
	export interface HumanLoopQuotaExceededExceptionFormProperties {
	}
	export function CreateHumanLoopQuotaExceededExceptionFormGroup() {
		return new FormGroup<HumanLoopQuotaExceededExceptionFormProperties>({
		});

	}

	export interface AnalyzeExpenseResponse {

		/** Information about the input document. */
		DocumentMetadata?: DocumentMetadata;
		ExpenseDocuments?: Array<ExpenseDocument>;
	}
	export interface AnalyzeExpenseResponseFormProperties {
	}
	export function CreateAnalyzeExpenseResponseFormGroup() {
		return new FormGroup<AnalyzeExpenseResponseFormProperties>({
		});

	}


	/** The structure holding all the information returned by AnalyzeExpense */
	export interface ExpenseDocument {
		ExpenseIndex?: number | null;
		SummaryFields?: Array<ExpenseField>;
		LineItemGroups?: Array<LineItemGroup>;
		Blocks?: Array<Block>;
	}

	/** The structure holding all the information returned by AnalyzeExpense */
	export interface ExpenseDocumentFormProperties {
		ExpenseIndex: FormControl<number | null | undefined>,
	}
	export function CreateExpenseDocumentFormGroup() {
		return new FormGroup<ExpenseDocumentFormProperties>({
			ExpenseIndex: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Breakdown of detected information, seperated into the catagories Type, LabelDetection, and ValueDetection */
	export interface ExpenseField {
		Type?: ExpenseType;
		LabelDetection?: ExpenseDetection;
		ValueDetection?: ExpenseDetection;
		PageNumber?: number | null;
		Currency?: ExpenseCurrency;
		GroupProperties?: Array<ExpenseGroupProperty>;
	}

	/** Breakdown of detected information, seperated into the catagories Type, LabelDetection, and ValueDetection */
	export interface ExpenseFieldFormProperties {
		PageNumber: FormControl<number | null | undefined>,
	}
	export function CreateExpenseFieldFormGroup() {
		return new FormGroup<ExpenseFieldFormProperties>({
			PageNumber: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object used to store information about the Type detected by Amazon Textract. */
	export interface ExpenseType {
		Text?: string;
		Confidence?: number;
	}

	/** An object used to store information about the Type detected by Amazon Textract. */
	export interface ExpenseTypeFormProperties {
		Text: FormControl<string | null | undefined>,
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreateExpenseTypeFormGroup() {
		return new FormGroup<ExpenseTypeFormProperties>({
			Text: new FormControl<string | null | undefined>(undefined),
			Confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object used to store information about the Value or Label detected by Amazon Textract. */
	export interface ExpenseDetection {
		Text?: string;

		/** Information about where the following items are located on a document page: detected page, text, key-value pairs, tables, table cells, and selection elements. */
		Geometry?: Geometry;
		Confidence?: number;
	}

	/** An object used to store information about the Value or Label detected by Amazon Textract. */
	export interface ExpenseDetectionFormProperties {
		Text: FormControl<string | null | undefined>,
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreateExpenseDetectionFormGroup() {
		return new FormGroup<ExpenseDetectionFormProperties>({
			Text: new FormControl<string | null | undefined>(undefined),
			Confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Returns the kind of currency detected. */
	export interface ExpenseCurrency {
		Code?: string;
		Confidence?: number;
	}

	/** Returns the kind of currency detected. */
	export interface ExpenseCurrencyFormProperties {
		Code: FormControl<string | null | undefined>,
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreateExpenseCurrencyFormGroup() {
		return new FormGroup<ExpenseCurrencyFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined),
			Confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Shows the group that a certain key belongs to. This helps differentiate between names and addresses for different organizations, that can be hard to determine via JSON response. */
	export interface ExpenseGroupProperty {
		Types?: Array<string>;
		Id?: string;
	}

	/** Shows the group that a certain key belongs to. This helps differentiate between names and addresses for different organizations, that can be hard to determine via JSON response. */
	export interface ExpenseGroupPropertyFormProperties {
		Id: FormControl<string | null | undefined>,
	}
	export function CreateExpenseGroupPropertyFormGroup() {
		return new FormGroup<ExpenseGroupPropertyFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A grouping of tables which contain LineItems, with each table identified by the table's <code>LineItemGroupIndex</code>. */
	export interface LineItemGroup {
		LineItemGroupIndex?: number | null;
		LineItems?: Array<LineItemFields>;
	}

	/** A grouping of tables which contain LineItems, with each table identified by the table's <code>LineItemGroupIndex</code>. */
	export interface LineItemGroupFormProperties {
		LineItemGroupIndex: FormControl<number | null | undefined>,
	}
	export function CreateLineItemGroupFormGroup() {
		return new FormGroup<LineItemGroupFormProperties>({
			LineItemGroupIndex: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A structure that holds information about the different lines found in a document's tables. */
	export interface LineItemFields {
		LineItemExpenseFields?: Array<ExpenseField>;
	}

	/** A structure that holds information about the different lines found in a document's tables. */
	export interface LineItemFieldsFormProperties {
	}
	export function CreateLineItemFieldsFormGroup() {
		return new FormGroup<LineItemFieldsFormProperties>({
		});

	}

	export interface AnalyzeExpenseRequest {

		/**
		 * <p>The input document, either as bytes or as an S3 object.</p> <p>You pass image bytes to an Amazon Textract API operation by using the <code>Bytes</code> property. For example, you would use the <code>Bytes</code> property to pass a document loaded from a local file system. Image bytes passed by using the <code>Bytes</code> property must be base64 encoded. Your code might not need to encode document file bytes if you're using an AWS SDK to call Amazon Textract API operations. </p> <p>You pass images stored in an S3 bucket to an Amazon Textract API operation by using the <code>S3Object</code> property. Documents stored in an S3 bucket don't need to be base64 encoded.</p> <p>The AWS Region for the S3 bucket that contains the S3 object must match the AWS Region that you use for Amazon Textract operations.</p> <p>If you use the AWS CLI to call Amazon Textract operations, passing image bytes using the Bytes property isn't supported. You must first upload the document to an Amazon S3 bucket, and then call the operation using the S3Object property.</p> <p>For Amazon Textract to process an S3 object, the user must have permission to access the S3 object. </p>
		 * Required
		 */
		Document: Document;
	}
	export interface AnalyzeExpenseRequestFormProperties {
	}
	export function CreateAnalyzeExpenseRequestFormGroup() {
		return new FormGroup<AnalyzeExpenseRequestFormProperties>({
		});

	}

	export interface AnalyzeIDResponse {
		IdentityDocuments?: Array<IdentityDocument>;

		/** Information about the input document. */
		DocumentMetadata?: DocumentMetadata;
		AnalyzeIDModelVersion?: string;
	}
	export interface AnalyzeIDResponseFormProperties {
		AnalyzeIDModelVersion: FormControl<string | null | undefined>,
	}
	export function CreateAnalyzeIDResponseFormGroup() {
		return new FormGroup<AnalyzeIDResponseFormProperties>({
			AnalyzeIDModelVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The structure that lists each document processed in an AnalyzeID operation. */
	export interface IdentityDocument {
		DocumentIndex?: number | null;
		IdentityDocumentFields?: Array<IdentityDocumentField>;
		Blocks?: Array<Block>;
	}

	/** The structure that lists each document processed in an AnalyzeID operation. */
	export interface IdentityDocumentFormProperties {
		DocumentIndex: FormControl<number | null | undefined>,
	}
	export function CreateIdentityDocumentFormGroup() {
		return new FormGroup<IdentityDocumentFormProperties>({
			DocumentIndex: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Structure containing both the normalized type of the extracted information and the text associated with it. These are extracted as Type and Value respectively. */
	export interface IdentityDocumentField {

		/** Used to contain the information detected by an AnalyzeID operation. */
		Type?: AnalyzeIDDetections;

		/** Used to contain the information detected by an AnalyzeID operation. */
		ValueDetection?: AnalyzeIDDetections;
	}

	/** Structure containing both the normalized type of the extracted information and the text associated with it. These are extracted as Type and Value respectively. */
	export interface IdentityDocumentFieldFormProperties {
	}
	export function CreateIdentityDocumentFieldFormGroup() {
		return new FormGroup<IdentityDocumentFieldFormProperties>({
		});

	}


	/** Used to contain the information detected by an AnalyzeID operation. */
	export interface AnalyzeIDDetections {

		/** Required */
		Text: string;
		NormalizedValue?: NormalizedValue;
		Confidence?: number;
	}

	/** Used to contain the information detected by an AnalyzeID operation. */
	export interface AnalyzeIDDetectionsFormProperties {

		/** Required */
		Text: FormControl<string | null | undefined>,
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreateAnalyzeIDDetectionsFormGroup() {
		return new FormGroup<AnalyzeIDDetectionsFormProperties>({
			Text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains information relating to dates in a document, including the type of value, and the value. */
	export interface NormalizedValue {
		Value?: string;
		ValueType?: ValueType;
	}

	/** Contains information relating to dates in a document, including the type of value, and the value. */
	export interface NormalizedValueFormProperties {
		Value: FormControl<string | null | undefined>,
		ValueType: FormControl<ValueType | null | undefined>,
	}
	export function CreateNormalizedValueFormGroup() {
		return new FormGroup<NormalizedValueFormProperties>({
			Value: new FormControl<string | null | undefined>(undefined),
			ValueType: new FormControl<ValueType | null | undefined>(undefined),
		});

	}

	export enum ValueType { DATE = 0 }

	export interface AnalyzeIDRequest {

		/** Required */
		DocumentPages: Array<Document>;
	}
	export interface AnalyzeIDRequestFormProperties {
	}
	export function CreateAnalyzeIDRequestFormGroup() {
		return new FormGroup<AnalyzeIDRequestFormProperties>({
		});

	}

	export interface DetectDocumentTextResponse {
		DocumentMetadata?: DocumentMetadata;
		Blocks?: Array<Block>;
		DetectDocumentTextModelVersion?: string;
	}
	export interface DetectDocumentTextResponseFormProperties {
		DetectDocumentTextModelVersion: FormControl<string | null | undefined>,
	}
	export function CreateDetectDocumentTextResponseFormGroup() {
		return new FormGroup<DetectDocumentTextResponseFormProperties>({
			DetectDocumentTextModelVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DetectDocumentTextRequest {

		/** Required */
		Document: Document;
	}
	export interface DetectDocumentTextRequestFormProperties {
	}
	export function CreateDetectDocumentTextRequestFormGroup() {
		return new FormGroup<DetectDocumentTextRequestFormProperties>({
		});

	}

	export interface GetDocumentAnalysisResponse {
		DocumentMetadata?: DocumentMetadata;
		JobStatus?: JobStatus;
		NextToken?: string;
		Blocks?: Array<Block>;
		Warnings?: Array<Warning>;
		StatusMessage?: string;
		AnalyzeDocumentModelVersion?: string;
	}
	export interface GetDocumentAnalysisResponseFormProperties {
		JobStatus: FormControl<JobStatus | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		AnalyzeDocumentModelVersion: FormControl<string | null | undefined>,
	}
	export function CreateGetDocumentAnalysisResponseFormGroup() {
		return new FormGroup<GetDocumentAnalysisResponseFormProperties>({
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			AnalyzeDocumentModelVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum JobStatus { IN_PROGRESS = 0, SUCCEEDED = 1, FAILED = 2, PARTIAL_SUCCESS = 3 }


	/** A warning about an issue that occurred during asynchronous text analysis (<a>StartDocumentAnalysis</a>) or asynchronous document text detection (<a>StartDocumentTextDetection</a>).  */
	export interface Warning {
		ErrorCode?: string;
		Pages?: Array<number> | null;
	}

	/** A warning about an issue that occurred during asynchronous text analysis (<a>StartDocumentAnalysis</a>) or asynchronous document text detection (<a>StartDocumentTextDetection</a>).  */
	export interface WarningFormProperties {
		ErrorCode: FormControl<string | null | undefined>,
	}
	export function CreateWarningFormGroup() {
		return new FormGroup<WarningFormProperties>({
			ErrorCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDocumentAnalysisRequest {

		/** Required */
		JobId: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface GetDocumentAnalysisRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetDocumentAnalysisRequestFormGroup() {
		return new FormGroup<GetDocumentAnalysisRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidJobIdException {
	}
	export interface InvalidJobIdExceptionFormProperties {
	}
	export function CreateInvalidJobIdExceptionFormGroup() {
		return new FormGroup<InvalidJobIdExceptionFormProperties>({
		});

	}

	export interface InvalidKMSKeyException {
	}
	export interface InvalidKMSKeyExceptionFormProperties {
	}
	export function CreateInvalidKMSKeyExceptionFormGroup() {
		return new FormGroup<InvalidKMSKeyExceptionFormProperties>({
		});

	}

	export interface GetDocumentTextDetectionResponse {
		DocumentMetadata?: DocumentMetadata;
		JobStatus?: JobStatus;
		NextToken?: string;
		Blocks?: Array<Block>;
		Warnings?: Array<Warning>;
		StatusMessage?: string;
		DetectDocumentTextModelVersion?: string;
	}
	export interface GetDocumentTextDetectionResponseFormProperties {
		JobStatus: FormControl<JobStatus | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		DetectDocumentTextModelVersion: FormControl<string | null | undefined>,
	}
	export function CreateGetDocumentTextDetectionResponseFormGroup() {
		return new FormGroup<GetDocumentTextDetectionResponseFormProperties>({
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			DetectDocumentTextModelVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDocumentTextDetectionRequest {

		/** Required */
		JobId: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface GetDocumentTextDetectionRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetDocumentTextDetectionRequestFormGroup() {
		return new FormGroup<GetDocumentTextDetectionRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetExpenseAnalysisResponse {
		DocumentMetadata?: DocumentMetadata;
		JobStatus?: JobStatus;
		NextToken?: string;
		ExpenseDocuments?: Array<ExpenseDocument>;
		Warnings?: Array<Warning>;
		StatusMessage?: string;
		AnalyzeExpenseModelVersion?: string;
	}
	export interface GetExpenseAnalysisResponseFormProperties {
		JobStatus: FormControl<JobStatus | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		AnalyzeExpenseModelVersion: FormControl<string | null | undefined>,
	}
	export function CreateGetExpenseAnalysisResponseFormGroup() {
		return new FormGroup<GetExpenseAnalysisResponseFormProperties>({
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			AnalyzeExpenseModelVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetExpenseAnalysisRequest {

		/** Required */
		JobId: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface GetExpenseAnalysisRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetExpenseAnalysisRequestFormGroup() {
		return new FormGroup<GetExpenseAnalysisRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetLendingAnalysisResponse {

		/** Information about the input document. */
		DocumentMetadata?: DocumentMetadata;
		JobStatus?: JobStatus;
		NextToken?: string;
		Results?: Array<LendingResult>;
		Warnings?: Array<Warning>;
		StatusMessage?: string;
		AnalyzeLendingModelVersion?: string;
	}
	export interface GetLendingAnalysisResponseFormProperties {
		JobStatus: FormControl<JobStatus | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		AnalyzeLendingModelVersion: FormControl<string | null | undefined>,
	}
	export function CreateGetLendingAnalysisResponseFormGroup() {
		return new FormGroup<GetLendingAnalysisResponseFormProperties>({
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			AnalyzeLendingModelVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the detections for each page analyzed through the Analyze Lending API. */
	export interface LendingResult {
		Page?: number | null;
		PageClassification?: PageClassification;
		Extractions?: Array<Extraction>;
	}

	/** Contains the detections for each page analyzed through the Analyze Lending API. */
	export interface LendingResultFormProperties {
		Page: FormControl<number | null | undefined>,
	}
	export function CreateLendingResultFormGroup() {
		return new FormGroup<LendingResultFormProperties>({
			Page: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The class assigned to a Page object detected in an input document. Contains information regarding the predicted type/class of a document's page and the page number that the Page object was detected on. */
	export interface PageClassification {

		/** Required */
		PageType: Array<Prediction>;

		/** Required */
		PageNumber: Array<Prediction>;
	}

	/** The class assigned to a Page object detected in an input document. Contains information regarding the predicted type/class of a document's page and the page number that the Page object was detected on. */
	export interface PageClassificationFormProperties {
	}
	export function CreatePageClassificationFormGroup() {
		return new FormGroup<PageClassificationFormProperties>({
		});

	}


	/** Contains information regarding predicted values returned by Amazon Textract operations, including the predicted value and the confidence in the predicted value. */
	export interface Prediction {
		Value?: string;
		Confidence?: number;
	}

	/** Contains information regarding predicted values returned by Amazon Textract operations, including the predicted value and the confidence in the predicted value. */
	export interface PredictionFormProperties {
		Value: FormControl<string | null | undefined>,
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreatePredictionFormGroup() {
		return new FormGroup<PredictionFormProperties>({
			Value: new FormControl<string | null | undefined>(undefined),
			Confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains information extracted by an analysis operation after using StartLendingAnalysis. */
	export interface Extraction {
		LendingDocument?: LendingDocument;

		/** The structure holding all the information returned by AnalyzeExpense */
		ExpenseDocument?: ExpenseDocument;

		/** The structure that lists each document processed in an AnalyzeID operation. */
		IdentityDocument?: IdentityDocument;
	}

	/** Contains information extracted by an analysis operation after using StartLendingAnalysis. */
	export interface ExtractionFormProperties {
	}
	export function CreateExtractionFormGroup() {
		return new FormGroup<ExtractionFormProperties>({
		});

	}


	/** Holds the structured data returned by AnalyzeDocument for lending documents. */
	export interface LendingDocument {
		LendingFields?: Array<LendingField>;
		SignatureDetections?: Array<SignatureDetection>;
	}

	/** Holds the structured data returned by AnalyzeDocument for lending documents. */
	export interface LendingDocumentFormProperties {
	}
	export function CreateLendingDocumentFormGroup() {
		return new FormGroup<LendingDocumentFormProperties>({
		});

	}


	/** Holds the normalized key-value pairs returned by AnalyzeDocument, including the document type, detected text, and geometry. */
	export interface LendingField {
		Type?: string;

		/** The results extracted for a lending document. */
		KeyDetection?: LendingDetection;
		ValueDetections?: Array<LendingDetection>;
	}

	/** Holds the normalized key-value pairs returned by AnalyzeDocument, including the document type, detected text, and geometry. */
	export interface LendingFieldFormProperties {
		Type: FormControl<string | null | undefined>,
	}
	export function CreateLendingFieldFormGroup() {
		return new FormGroup<LendingFieldFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The results extracted for a lending document. */
	export interface LendingDetection {
		Text?: string;
		SelectionStatus?: SelectionStatus;

		/** Information about where the following items are located on a document page: detected page, text, key-value pairs, tables, table cells, and selection elements. */
		Geometry?: Geometry;
		Confidence?: number;
	}

	/** The results extracted for a lending document. */
	export interface LendingDetectionFormProperties {
		Text: FormControl<string | null | undefined>,
		SelectionStatus: FormControl<SelectionStatus | null | undefined>,
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreateLendingDetectionFormGroup() {
		return new FormGroup<LendingDetectionFormProperties>({
			Text: new FormControl<string | null | undefined>(undefined),
			SelectionStatus: new FormControl<SelectionStatus | null | undefined>(undefined),
			Confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information regarding a detected signature on a page. */
	export interface SignatureDetection {
		Confidence?: number;

		/** Information about where the following items are located on a document page: detected page, text, key-value pairs, tables, table cells, and selection elements. */
		Geometry?: Geometry;
	}

	/** Information regarding a detected signature on a page. */
	export interface SignatureDetectionFormProperties {
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreateSignatureDetectionFormGroup() {
		return new FormGroup<SignatureDetectionFormProperties>({
			Confidence: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetLendingAnalysisRequest {

		/** Required */
		JobId: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface GetLendingAnalysisRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetLendingAnalysisRequestFormGroup() {
		return new FormGroup<GetLendingAnalysisRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetLendingAnalysisSummaryResponse {

		/** Information about the input document. */
		DocumentMetadata?: DocumentMetadata;
		JobStatus?: JobStatus;
		Summary?: LendingSummary;
		Warnings?: Array<Warning>;
		StatusMessage?: string;
		AnalyzeLendingModelVersion?: string;
	}
	export interface GetLendingAnalysisSummaryResponseFormProperties {
		JobStatus: FormControl<JobStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		AnalyzeLendingModelVersion: FormControl<string | null | undefined>,
	}
	export function CreateGetLendingAnalysisSummaryResponseFormGroup() {
		return new FormGroup<GetLendingAnalysisSummaryResponseFormProperties>({
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			AnalyzeLendingModelVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information regarding DocumentGroups and UndetectedDocumentTypes. */
	export interface LendingSummary {
		DocumentGroups?: Array<DocumentGroup>;
		UndetectedDocumentTypes?: Array<string>;
	}

	/** Contains information regarding DocumentGroups and UndetectedDocumentTypes. */
	export interface LendingSummaryFormProperties {
	}
	export function CreateLendingSummaryFormGroup() {
		return new FormGroup<LendingSummaryFormProperties>({
		});

	}


	/** Summary information about documents grouped by the same document type. */
	export interface DocumentGroup {
		Type?: string;
		SplitDocuments?: Array<SplitDocument>;
		DetectedSignatures?: Array<DetectedSignature>;
		UndetectedSignatures?: Array<UndetectedSignature>;
	}

	/** Summary information about documents grouped by the same document type. */
	export interface DocumentGroupFormProperties {
		Type: FormControl<string | null | undefined>,
	}
	export function CreateDocumentGroupFormGroup() {
		return new FormGroup<DocumentGroupFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the pages of a document, defined by logical boundary. */
	export interface SplitDocument {
		Index?: number | null;
		Pages?: Array<number> | null;
	}

	/** Contains information about the pages of a document, defined by logical boundary. */
	export interface SplitDocumentFormProperties {
		Index: FormControl<number | null | undefined>,
	}
	export function CreateSplitDocumentFormGroup() {
		return new FormGroup<SplitDocumentFormProperties>({
			Index: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A structure that holds information regarding a detected signature on a page. */
	export interface DetectedSignature {
		Page?: number | null;
	}

	/** A structure that holds information regarding a detected signature on a page. */
	export interface DetectedSignatureFormProperties {
		Page: FormControl<number | null | undefined>,
	}
	export function CreateDetectedSignatureFormGroup() {
		return new FormGroup<DetectedSignatureFormProperties>({
			Page: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A structure containing information about an undetected signature on a page where it was expected but not found. */
	export interface UndetectedSignature {
		Page?: number | null;
	}

	/** A structure containing information about an undetected signature on a page where it was expected but not found. */
	export interface UndetectedSignatureFormProperties {
		Page: FormControl<number | null | undefined>,
	}
	export function CreateUndetectedSignatureFormGroup() {
		return new FormGroup<UndetectedSignatureFormProperties>({
			Page: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetLendingAnalysisSummaryRequest {

		/** Required */
		JobId: string;
	}
	export interface GetLendingAnalysisSummaryRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateGetLendingAnalysisSummaryRequestFormGroup() {
		return new FormGroup<GetLendingAnalysisSummaryRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartDocumentAnalysisResponse {
		JobId?: string;
	}
	export interface StartDocumentAnalysisResponseFormProperties {
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStartDocumentAnalysisResponseFormGroup() {
		return new FormGroup<StartDocumentAnalysisResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartDocumentAnalysisRequest {

		/** Required */
		DocumentLocation: DocumentLocation;

		/** Required */
		FeatureTypes: Array<FeatureType>;
		ClientRequestToken?: string;
		JobTag?: string;
		NotificationChannel?: NotificationChannel;
		OutputConfig?: OutputConfig;
		KMSKeyId?: string;

		/** <p/> */
		QueriesConfig?: QueriesConfig;
	}
	export interface StartDocumentAnalysisRequestFormProperties {
		ClientRequestToken: FormControl<string | null | undefined>,
		JobTag: FormControl<string | null | undefined>,
		KMSKeyId: FormControl<string | null | undefined>,
	}
	export function CreateStartDocumentAnalysisRequestFormGroup() {
		return new FormGroup<StartDocumentAnalysisRequestFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			JobTag: new FormControl<string | null | undefined>(undefined),
			KMSKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The Amazon S3 bucket that contains the document to be processed. It's used by asynchronous operations.</p> <p>The input document can be an image file in JPEG or PNG format. It can also be a file in PDF format.</p> */
	export interface DocumentLocation {
		S3Object?: S3Object;
	}

	/** <p>The Amazon S3 bucket that contains the document to be processed. It's used by asynchronous operations.</p> <p>The input document can be an image file in JPEG or PNG format. It can also be a file in PDF format.</p> */
	export interface DocumentLocationFormProperties {
	}
	export function CreateDocumentLocationFormGroup() {
		return new FormGroup<DocumentLocationFormProperties>({
		});

	}


	/** The Amazon Simple Notification Service (Amazon SNS) topic to which Amazon Textract publishes the completion status of an asynchronous document operation.  */
	export interface NotificationChannel {

		/** Required */
		SNSTopicArn: string;

		/** Required */
		RoleArn: string;
	}

	/** The Amazon Simple Notification Service (Amazon SNS) topic to which Amazon Textract publishes the completion status of an asynchronous document operation.  */
	export interface NotificationChannelFormProperties {

		/** Required */
		SNSTopicArn: FormControl<string | null | undefined>,

		/** Required */
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateNotificationChannelFormGroup() {
		return new FormGroup<NotificationChannelFormProperties>({
			SNSTopicArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Sets whether or not your output will go to a user created bucket. Used to set the name of the bucket, and the prefix on the output file.</p> <p> <code>OutputConfig</code> is an optional parameter which lets you adjust where your output will be placed. By default, Amazon Textract will store the results internally and can only be accessed by the Get API operations. With <code>OutputConfig</code> enabled, you can set the name of the bucket the output will be sent to the file prefix of the results where you can download your results. Additionally, you can set the <code>KMSKeyID</code> parameter to a customer master key (CMK) to encrypt your output. Without this parameter set Amazon Textract will encrypt server-side using the AWS managed CMK for Amazon S3.</p> <p>Decryption of Customer Content is necessary for processing of the documents by Amazon Textract. If your account is opted out under an AI services opt out policy then all unencrypted Customer Content is immediately and permanently deleted after the Customer Content has been processed by the service. No copy of of the output is retained by Amazon Textract. For information about how to opt out, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html"> Managing AI services opt-out policy. </a> </p> <p>For more information on data privacy, see the <a href="https://aws.amazon.com/compliance/data-privacy-faq/">Data Privacy FAQ</a>.</p> */
	export interface OutputConfig {

		/** Required */
		S3Bucket: string;
		S3Prefix?: string;
	}

	/** <p>Sets whether or not your output will go to a user created bucket. Used to set the name of the bucket, and the prefix on the output file.</p> <p> <code>OutputConfig</code> is an optional parameter which lets you adjust where your output will be placed. By default, Amazon Textract will store the results internally and can only be accessed by the Get API operations. With <code>OutputConfig</code> enabled, you can set the name of the bucket the output will be sent to the file prefix of the results where you can download your results. Additionally, you can set the <code>KMSKeyID</code> parameter to a customer master key (CMK) to encrypt your output. Without this parameter set Amazon Textract will encrypt server-side using the AWS managed CMK for Amazon S3.</p> <p>Decryption of Customer Content is necessary for processing of the documents by Amazon Textract. If your account is opted out under an AI services opt out policy then all unencrypted Customer Content is immediately and permanently deleted after the Customer Content has been processed by the service. No copy of of the output is retained by Amazon Textract. For information about how to opt out, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html"> Managing AI services opt-out policy. </a> </p> <p>For more information on data privacy, see the <a href="https://aws.amazon.com/compliance/data-privacy-faq/">Data Privacy FAQ</a>.</p> */
	export interface OutputConfigFormProperties {

		/** Required */
		S3Bucket: FormControl<string | null | undefined>,
		S3Prefix: FormControl<string | null | undefined>,
	}
	export function CreateOutputConfigFormGroup() {
		return new FormGroup<OutputConfigFormProperties>({
			S3Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			S3Prefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IdempotentParameterMismatchException {
	}
	export interface IdempotentParameterMismatchExceptionFormProperties {
	}
	export function CreateIdempotentParameterMismatchExceptionFormGroup() {
		return new FormGroup<IdempotentParameterMismatchExceptionFormProperties>({
		});

	}

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
		});

	}

	export interface StartDocumentTextDetectionResponse {
		JobId?: string;
	}
	export interface StartDocumentTextDetectionResponseFormProperties {
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStartDocumentTextDetectionResponseFormGroup() {
		return new FormGroup<StartDocumentTextDetectionResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartDocumentTextDetectionRequest {

		/** Required */
		DocumentLocation: DocumentLocation;
		ClientRequestToken?: string;
		JobTag?: string;
		NotificationChannel?: NotificationChannel;
		OutputConfig?: OutputConfig;
		KMSKeyId?: string;
	}
	export interface StartDocumentTextDetectionRequestFormProperties {
		ClientRequestToken: FormControl<string | null | undefined>,
		JobTag: FormControl<string | null | undefined>,
		KMSKeyId: FormControl<string | null | undefined>,
	}
	export function CreateStartDocumentTextDetectionRequestFormGroup() {
		return new FormGroup<StartDocumentTextDetectionRequestFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			JobTag: new FormControl<string | null | undefined>(undefined),
			KMSKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartExpenseAnalysisResponse {
		JobId?: string;
	}
	export interface StartExpenseAnalysisResponseFormProperties {
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStartExpenseAnalysisResponseFormGroup() {
		return new FormGroup<StartExpenseAnalysisResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartExpenseAnalysisRequest {

		/** Required */
		DocumentLocation: DocumentLocation;
		ClientRequestToken?: string;
		JobTag?: string;
		NotificationChannel?: NotificationChannel;
		OutputConfig?: OutputConfig;
		KMSKeyId?: string;
	}
	export interface StartExpenseAnalysisRequestFormProperties {
		ClientRequestToken: FormControl<string | null | undefined>,
		JobTag: FormControl<string | null | undefined>,
		KMSKeyId: FormControl<string | null | undefined>,
	}
	export function CreateStartExpenseAnalysisRequestFormGroup() {
		return new FormGroup<StartExpenseAnalysisRequestFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			JobTag: new FormControl<string | null | undefined>(undefined),
			KMSKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartLendingAnalysisResponse {
		JobId?: string;
	}
	export interface StartLendingAnalysisResponseFormProperties {
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStartLendingAnalysisResponseFormGroup() {
		return new FormGroup<StartLendingAnalysisResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartLendingAnalysisRequest {

		/**
		 * <p>The Amazon S3 bucket that contains the document to be processed. It's used by asynchronous operations.</p> <p>The input document can be an image file in JPEG or PNG format. It can also be a file in PDF format.</p>
		 * Required
		 */
		DocumentLocation: DocumentLocation;
		ClientRequestToken?: string;
		JobTag?: string;

		/** The Amazon Simple Notification Service (Amazon SNS) topic to which Amazon Textract publishes the completion status of an asynchronous document operation. */
		NotificationChannel?: NotificationChannel;

		/** <p>Sets whether or not your output will go to a user created bucket. Used to set the name of the bucket, and the prefix on the output file.</p> <p> <code>OutputConfig</code> is an optional parameter which lets you adjust where your output will be placed. By default, Amazon Textract will store the results internally and can only be accessed by the Get API operations. With <code>OutputConfig</code> enabled, you can set the name of the bucket the output will be sent to the file prefix of the results where you can download your results. Additionally, you can set the <code>KMSKeyID</code> parameter to a customer master key (CMK) to encrypt your output. Without this parameter set Amazon Textract will encrypt server-side using the AWS managed CMK for Amazon S3.</p> <p>Decryption of Customer Content is necessary for processing of the documents by Amazon Textract. If your account is opted out under an AI services opt out policy then all unencrypted Customer Content is immediately and permanently deleted after the Customer Content has been processed by the service. No copy of of the output is retained by Amazon Textract. For information about how to opt out, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html"> Managing AI services opt-out policy. </a> </p> <p>For more information on data privacy, see the <a href="https://aws.amazon.com/compliance/data-privacy-faq/">Data Privacy FAQ</a>.</p> */
		OutputConfig?: OutputConfig;
		KMSKeyId?: string;
	}
	export interface StartLendingAnalysisRequestFormProperties {
		ClientRequestToken: FormControl<string | null | undefined>,
		JobTag: FormControl<string | null | undefined>,
		KMSKeyId: FormControl<string | null | undefined>,
	}
	export function CreateStartLendingAnalysisRequestFormGroup() {
		return new FormGroup<StartLendingAnalysisRequestFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			JobTag: new FormControl<string | null | undefined>(undefined),
			KMSKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Analyzes an input document for relationships between detected items. </p> <p>The types of information returned are as follows: </p> <ul> <li> <p>Form data (key-value pairs). The related information is returned in two <a>Block</a> objects, each of type <code>KEY_VALUE_SET</code>: a KEY <code>Block</code> object and a VALUE <code>Block</code> object. For example, <i>Name: Ana Silva Carolina</i> contains a key and value. <i>Name:</i> is the key. <i>Ana Silva Carolina</i> is the value.</p> </li> <li> <p>Table and table cell data. A TABLE <code>Block</code> object contains information about a detected table. A CELL <code>Block</code> object is returned for each cell in a table.</p> </li> <li> <p>Lines and words of text. A LINE <code>Block</code> object contains one or more WORD <code>Block</code> objects. All lines and words that are detected in the document are returned (including text that doesn't have a relationship with the value of <code>FeatureTypes</code>). </p> </li> <li> <p>Signatures. A SIGNATURE <code>Block</code> object contains the location information of a signature in a document. If used in conjunction with forms or tables, a signature can be given a Key-Value pairing or be detected in the cell of a table.</p> </li> <li> <p>Query. A QUERY Block object contains the query text, alias and link to the associated Query results block object.</p> </li> <li> <p>Query Result. A QUERY_RESULT Block object contains the answer to the query and an ID that connects it to the query asked. This Block also contains a confidence score.</p> </li> </ul> <p>Selection elements such as check boxes and option buttons (radio buttons) can be detected in form data and in tables. A SELECTION_ELEMENT <code>Block</code> object contains information about a selection element, including the selection status.</p> <p>You can choose which type of analysis to perform by specifying the <code>FeatureTypes</code> list. </p> <p>The output is returned in a list of <code>Block</code> objects.</p> <p> <code>AnalyzeDocument</code> is a synchronous operation. To analyze documents asynchronously, use <a>StartDocumentAnalysis</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-analyzing.html">Document Text Analysis</a>.</p>
		 * Post #X-Amz-Target=Textract.AnalyzeDocument
		 * @return {AnalyzeDocumentResponse} Success
		 */
		AnalyzeDocument(requestBody: AnalyzeDocumentRequest): Observable<AnalyzeDocumentResponse> {
			return this.http.post<AnalyzeDocumentResponse>(this.baseUri + '#X-Amz-Target=Textract.AnalyzeDocument', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> <code>AnalyzeExpense</code> synchronously analyzes an input document for financially related relationships between text.</p> <p>Information is returned as <code>ExpenseDocuments</code> and seperated as follows:</p> <ul> <li> <p> <code>LineItemGroups</code>- A data set containing <code>LineItems</code> which store information about the lines of text, such as an item purchased and its price on a receipt.</p> </li> <li> <p> <code>SummaryFields</code>- Contains all other information a receipt, such as header information or the vendors name.</p> </li> </ul>
		 * Post #X-Amz-Target=Textract.AnalyzeExpense
		 * @return {AnalyzeExpenseResponse} Success
		 */
		AnalyzeExpense(requestBody: AnalyzeExpenseRequest): Observable<AnalyzeExpenseResponse> {
			return this.http.post<AnalyzeExpenseResponse>(this.baseUri + '#X-Amz-Target=Textract.AnalyzeExpense', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Analyzes identity documents for relevant information. This information is extracted and returned as <code>IdentityDocumentFields</code>, which records both the normalized field and value of the extracted text. Unlike other Amazon Textract operations, <code>AnalyzeID</code> doesn't return any Geometry data.
		 * Post #X-Amz-Target=Textract.AnalyzeID
		 * @return {AnalyzeIDResponse} Success
		 */
		AnalyzeID(requestBody: AnalyzeIDRequest): Observable<AnalyzeIDResponse> {
			return this.http.post<AnalyzeIDResponse>(this.baseUri + '#X-Amz-Target=Textract.AnalyzeID', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Detects text in the input document. Amazon Textract can detect lines of text and the words that make up a line of text. The input document must be in one of the following image formats: JPEG, PNG, PDF, or TIFF. <code>DetectDocumentText</code> returns the detected text in an array of <a>Block</a> objects. </p> <p>Each document page has as an associated <code>Block</code> of type PAGE. Each PAGE <code>Block</code> object is the parent of LINE <code>Block</code> objects that represent the lines of detected text on a page. A LINE <code>Block</code> object is a parent for each word that makes up the line. Words are represented by <code>Block</code> objects of type WORD.</p> <p> <code>DetectDocumentText</code> is a synchronous operation. To analyze documents asynchronously, use <a>StartDocumentTextDetection</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-detecting.html">Document Text Detection</a>.</p>
		 * Post #X-Amz-Target=Textract.DetectDocumentText
		 * @return {DetectDocumentTextResponse} Success
		 */
		DetectDocumentText(requestBody: DetectDocumentTextRequest): Observable<DetectDocumentTextResponse> {
			return this.http.post<DetectDocumentTextResponse>(this.baseUri + '#X-Amz-Target=Textract.DetectDocumentText', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets the results for an Amazon Textract asynchronous operation that analyzes text in a document.</p> <p>You start asynchronous text analysis by calling <a>StartDocumentAnalysis</a>, which returns a job identifier (<code>JobId</code>). When the text analysis operation finishes, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that's registered in the initial call to <code>StartDocumentAnalysis</code>. To get the results of the text-detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <code>GetDocumentAnalysis</code>, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartDocumentAnalysis</code>.</p> <p> <code>GetDocumentAnalysis</code> returns an array of <a>Block</a> objects. The following types of information are returned: </p> <ul> <li> <p>Form data (key-value pairs). The related information is returned in two <a>Block</a> objects, each of type <code>KEY_VALUE_SET</code>: a KEY <code>Block</code> object and a VALUE <code>Block</code> object. For example, <i>Name: Ana Silva Carolina</i> contains a key and value. <i>Name:</i> is the key. <i>Ana Silva Carolina</i> is the value.</p> </li> <li> <p>Table and table cell data. A TABLE <code>Block</code> object contains information about a detected table. A CELL <code>Block</code> object is returned for each cell in a table.</p> </li> <li> <p>Lines and words of text. A LINE <code>Block</code> object contains one or more WORD <code>Block</code> objects. All lines and words that are detected in the document are returned (including text that doesn't have a relationship with the value of the <code>StartDocumentAnalysis</code> <code>FeatureTypes</code> input parameter). </p> </li> <li> <p>Query. A QUERY Block object contains the query text, alias and link to the associated Query results block object.</p> </li> <li> <p>Query Results. A QUERY_RESULT Block object contains the answer to the query and an ID that connects it to the query asked. This Block also contains a confidence score.</p> </li> </ul> <note> <p>While processing a document with queries, look out for <code>INVALID_REQUEST_PARAMETERS</code> output. This indicates that either the per page query limit has been exceeded or that the operation is trying to query a page in the document which doesn’t exist. </p> </note> <p>Selection elements such as check boxes and option buttons (radio buttons) can be detected in form data and in tables. A SELECTION_ELEMENT <code>Block</code> object contains information about a selection element, including the selection status.</p> <p>Use the <code>MaxResults</code> parameter to limit the number of blocks that are returned. If there are more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call <code>GetDocumentAnalysis</code>, and populate the <code>NextToken</code> request parameter with the token value that's returned from the previous call to <code>GetDocumentAnalysis</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-analyzing.html">Document Text Analysis</a>.</p>
		 * Post #X-Amz-Target=Textract.GetDocumentAnalysis
		 * @return {GetDocumentAnalysisResponse} Success
		 */
		GetDocumentAnalysis(requestBody: GetDocumentAnalysisRequest): Observable<GetDocumentAnalysisResponse> {
			return this.http.post<GetDocumentAnalysisResponse>(this.baseUri + '#X-Amz-Target=Textract.GetDocumentAnalysis', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets the results for an Amazon Textract asynchronous operation that detects text in a document. Amazon Textract can detect lines of text and the words that make up a line of text.</p> <p>You start asynchronous text detection by calling <a>StartDocumentTextDetection</a>, which returns a job identifier (<code>JobId</code>). When the text detection operation finishes, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that's registered in the initial call to <code>StartDocumentTextDetection</code>. To get the results of the text-detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <code>GetDocumentTextDetection</code>, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartDocumentTextDetection</code>.</p> <p> <code>GetDocumentTextDetection</code> returns an array of <a>Block</a> objects. </p> <p>Each document page has as an associated <code>Block</code> of type PAGE. Each PAGE <code>Block</code> object is the parent of LINE <code>Block</code> objects that represent the lines of detected text on a page. A LINE <code>Block</code> object is a parent for each word that makes up the line. Words are represented by <code>Block</code> objects of type WORD.</p> <p>Use the MaxResults parameter to limit the number of blocks that are returned. If there are more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call <code>GetDocumentTextDetection</code>, and populate the <code>NextToken</code> request parameter with the token value that's returned from the previous call to <code>GetDocumentTextDetection</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-detecting.html">Document Text Detection</a>.</p>
		 * Post #X-Amz-Target=Textract.GetDocumentTextDetection
		 * @return {GetDocumentTextDetectionResponse} Success
		 */
		GetDocumentTextDetection(requestBody: GetDocumentTextDetectionRequest): Observable<GetDocumentTextDetectionResponse> {
			return this.http.post<GetDocumentTextDetectionResponse>(this.baseUri + '#X-Amz-Target=Textract.GetDocumentTextDetection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets the results for an Amazon Textract asynchronous operation that analyzes invoices and receipts. Amazon Textract finds contact information, items purchased, and vendor name, from input invoices and receipts.</p> <p>You start asynchronous invoice/receipt analysis by calling <a>StartExpenseAnalysis</a>, which returns a job identifier (<code>JobId</code>). Upon completion of the invoice/receipt analysis, Amazon Textract publishes the completion status to the Amazon Simple Notification Service (Amazon SNS) topic. This topic must be registered in the initial call to <code>StartExpenseAnalysis</code>. To get the results of the invoice/receipt analysis operation, first ensure that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <code>GetExpenseAnalysis</code>, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartExpenseAnalysis</code>.</p> <p>Use the MaxResults parameter to limit the number of blocks that are returned. If there are more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call <code>GetExpenseAnalysis</code>, and populate the <code>NextToken</code> request parameter with the token value that's returned from the previous call to <code>GetExpenseAnalysis</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/invoices-receipts.html">Analyzing Invoices and Receipts</a>.</p>
		 * Post #X-Amz-Target=Textract.GetExpenseAnalysis
		 * @return {GetExpenseAnalysisResponse} Success
		 */
		GetExpenseAnalysis(requestBody: GetExpenseAnalysisRequest): Observable<GetExpenseAnalysisResponse> {
			return this.http.post<GetExpenseAnalysisResponse>(this.baseUri + '#X-Amz-Target=Textract.GetExpenseAnalysis', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets the results for an Amazon Textract asynchronous operation that analyzes text in a lending document. </p> <p>You start asynchronous text analysis by calling <code>StartLendingAnalysis</code>, which returns a job identifier (<code>JobId</code>). When the text analysis operation finishes, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that's registered in the initial call to <code>StartLendingAnalysis</code>. </p> <p>To get the results of the text analysis operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetLendingAnalysis, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartLendingAnalysis</code>.</p>
		 * Post #X-Amz-Target=Textract.GetLendingAnalysis
		 * @return {GetLendingAnalysisResponse} Success
		 */
		GetLendingAnalysis(requestBody: GetLendingAnalysisRequest): Observable<GetLendingAnalysisResponse> {
			return this.http.post<GetLendingAnalysisResponse>(this.baseUri + '#X-Amz-Target=Textract.GetLendingAnalysis', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets summarized results for the <code>StartLendingAnalysis</code> operation, which analyzes text in a lending document. The returned summary consists of information about documents grouped together by a common document type. Information like detected signatures, page numbers, and split documents is returned with respect to the type of grouped document. </p> <p>You start asynchronous text analysis by calling <code>StartLendingAnalysis</code>, which returns a job identifier (<code>JobId</code>). When the text analysis operation finishes, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that's registered in the initial call to <code>StartLendingAnalysis</code>. </p> <p>To get the results of the text analysis operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call <code>GetLendingAnalysisSummary</code>, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartLendingAnalysis</code>.</p>
		 * Post #X-Amz-Target=Textract.GetLendingAnalysisSummary
		 * @return {GetLendingAnalysisSummaryResponse} Success
		 */
		GetLendingAnalysisSummary(requestBody: GetLendingAnalysisSummaryRequest): Observable<GetLendingAnalysisSummaryResponse> {
			return this.http.post<GetLendingAnalysisSummaryResponse>(this.baseUri + '#X-Amz-Target=Textract.GetLendingAnalysisSummary', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts the asynchronous analysis of an input document for relationships between detected items such as key-value pairs, tables, and selection elements.</p> <p> <code>StartDocumentAnalysis</code> can analyze text in documents that are in JPEG, PNG, TIFF, and PDF format. The documents are stored in an Amazon S3 bucket. Use <a>DocumentLocation</a> to specify the bucket name and file name of the document. </p> <p> <code>StartDocumentAnalysis</code> returns a job identifier (<code>JobId</code>) that you use to get the results of the operation. When text analysis is finished, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that you specify in <code>NotificationChannel</code>. To get the results of the text analysis operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetDocumentAnalysis</a>, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartDocumentAnalysis</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-analyzing.html">Document Text Analysis</a>.</p>
		 * Post #X-Amz-Target=Textract.StartDocumentAnalysis
		 * @return {StartDocumentAnalysisResponse} Success
		 */
		StartDocumentAnalysis(requestBody: StartDocumentAnalysisRequest): Observable<StartDocumentAnalysisResponse> {
			return this.http.post<StartDocumentAnalysisResponse>(this.baseUri + '#X-Amz-Target=Textract.StartDocumentAnalysis', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts the asynchronous detection of text in a document. Amazon Textract can detect lines of text and the words that make up a line of text.</p> <p> <code>StartDocumentTextDetection</code> can analyze text in documents that are in JPEG, PNG, TIFF, and PDF format. The documents are stored in an Amazon S3 bucket. Use <a>DocumentLocation</a> to specify the bucket name and file name of the document. </p> <p> <code>StartTextDetection</code> returns a job identifier (<code>JobId</code>) that you use to get the results of the operation. When text detection is finished, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that you specify in <code>NotificationChannel</code>. To get the results of the text detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetDocumentTextDetection</a>, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartDocumentTextDetection</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-detecting.html">Document Text Detection</a>.</p>
		 * Post #X-Amz-Target=Textract.StartDocumentTextDetection
		 * @return {StartDocumentTextDetectionResponse} Success
		 */
		StartDocumentTextDetection(requestBody: StartDocumentTextDetectionRequest): Observable<StartDocumentTextDetectionResponse> {
			return this.http.post<StartDocumentTextDetectionResponse>(this.baseUri + '#X-Amz-Target=Textract.StartDocumentTextDetection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts the asynchronous analysis of invoices or receipts for data like contact information, items purchased, and vendor names.</p> <p> <code>StartExpenseAnalysis</code> can analyze text in documents that are in JPEG, PNG, and PDF format. The documents must be stored in an Amazon S3 bucket. Use the <a>DocumentLocation</a> parameter to specify the name of your S3 bucket and the name of the document in that bucket. </p> <p> <code>StartExpenseAnalysis</code> returns a job identifier (<code>JobId</code>) that you will provide to <code>GetExpenseAnalysis</code> to retrieve the results of the operation. When the analysis of the input invoices/receipts is finished, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that you provide to the <code>NotificationChannel</code>. To obtain the results of the invoice and receipt analysis operation, ensure that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetExpenseAnalysis</a>, and pass the job identifier (<code>JobId</code>) that was returned by your call to <code>StartExpenseAnalysis</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/invoice-receipts.html">Analyzing Invoices and Receipts</a>.</p>
		 * Post #X-Amz-Target=Textract.StartExpenseAnalysis
		 * @return {StartExpenseAnalysisResponse} Success
		 */
		StartExpenseAnalysis(requestBody: StartExpenseAnalysisRequest): Observable<StartExpenseAnalysisResponse> {
			return this.http.post<StartExpenseAnalysisResponse>(this.baseUri + '#X-Amz-Target=Textract.StartExpenseAnalysis', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts the classification and analysis of an input document. <code>StartLendingAnalysis</code> initiates the classification and analysis of a packet of lending documents. <code>StartLendingAnalysis</code> operates on a document file located in an Amazon S3 bucket.</p> <p> <code>StartLendingAnalysis</code> can analyze text in documents that are in one of the following formats: JPEG, PNG, TIFF, PDF. Use <code>DocumentLocation</code> to specify the bucket name and the file name of the document. </p> <p> <code>StartLendingAnalysis</code> returns a job identifier (<code>JobId</code>) that you use to get the results of the operation. When the text analysis is finished, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that you specify in <code>NotificationChannel</code>. To get the results of the text analysis operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If the status is SUCCEEDED you can call either <code>GetLendingAnalysis</code> or <code>GetLendingAnalysisSummary</code> and provide the <code>JobId</code> to obtain the results of the analysis.</p> <p>If using <code>OutputConfig</code> to specify an Amazon S3 bucket, the output will be contained within the specified prefix in a directory labeled with the job-id. In the directory there are 3 sub-directories: </p> <ul> <li> <p>detailedResponse (contains the GetLendingAnalysis response)</p> </li> <li> <p>summaryResponse (for the GetLendingAnalysisSummary response)</p> </li> <li> <p>splitDocuments (documents split across logical boundaries)</p> </li> </ul>
		 * Post #X-Amz-Target=Textract.StartLendingAnalysis
		 * @return {StartLendingAnalysisResponse} Success
		 */
		StartLendingAnalysis(requestBody: StartLendingAnalysisRequest): Observable<StartLendingAnalysisResponse> {
			return this.http.post<StartLendingAnalysisResponse>(this.baseUri + '#X-Amz-Target=Textract.StartLendingAnalysis', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AnalyzeDocumentX_Amz_Target { 'Textract.AnalyzeDocument' = 0 }

	export enum AnalyzeExpenseX_Amz_Target { 'Textract.AnalyzeExpense' = 0 }

	export enum AnalyzeIDX_Amz_Target { 'Textract.AnalyzeID' = 0 }

	export enum DetectDocumentTextX_Amz_Target { 'Textract.DetectDocumentText' = 0 }

	export enum GetDocumentAnalysisX_Amz_Target { 'Textract.GetDocumentAnalysis' = 0 }

	export enum GetDocumentTextDetectionX_Amz_Target { 'Textract.GetDocumentTextDetection' = 0 }

	export enum GetExpenseAnalysisX_Amz_Target { 'Textract.GetExpenseAnalysis' = 0 }

	export enum GetLendingAnalysisX_Amz_Target { 'Textract.GetLendingAnalysis' = 0 }

	export enum GetLendingAnalysisSummaryX_Amz_Target { 'Textract.GetLendingAnalysisSummary' = 0 }

	export enum StartDocumentAnalysisX_Amz_Target { 'Textract.StartDocumentAnalysis' = 0 }

	export enum StartDocumentTextDetectionX_Amz_Target { 'Textract.StartDocumentTextDetection' = 0 }

	export enum StartExpenseAnalysisX_Amz_Target { 'Textract.StartExpenseAnalysis' = 0 }

	export enum StartLendingAnalysisX_Amz_Target { 'Textract.StartLendingAnalysis' = 0 }

}

