import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The result of a <code>BuildSuggester</code> request. Contains a list of the fields used for suggestions. */
	export interface BuildSuggestersResponse {

		/** A list of field names. */
		FieldNames?: Array<string>;
	}

	/** The result of a <code>BuildSuggester</code> request. Contains a list of the fields used for suggestions. */
	export interface BuildSuggestersResponseFormProperties {
	}
	export function CreateBuildSuggestersResponseFormGroup() {
		return new FormGroup<BuildSuggestersResponseFormProperties>({
		});

	}

	export interface BaseException {
	}
	export interface BaseExceptionFormProperties {
	}
	export function CreateBaseExceptionFormGroup() {
		return new FormGroup<BaseExceptionFormProperties>({
		});

	}

	export interface InternalException {
	}
	export interface InternalExceptionFormProperties {
	}
	export function CreateInternalExceptionFormGroup() {
		return new FormGroup<InternalExceptionFormProperties>({
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

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}


	/** The result of a <code>CreateDomainRequest</code>. Contains the status of a newly created domain. */
	export interface CreateDomainResponse {

		/** The current status of the search domain. */
		DomainStatus?: DomainStatus;
	}

	/** The result of a <code>CreateDomainRequest</code>. Contains the status of a newly created domain. */
	export interface CreateDomainResponseFormProperties {
	}
	export function CreateCreateDomainResponseFormGroup() {
		return new FormGroup<CreateDomainResponseFormProperties>({
		});

	}


	/** The current status of the search domain. */
	export interface DomainStatus {

		/**
		 * An internally generated unique identifier for a domain.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		DomainId: string;

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: string;

		/** The Amazon Resource Name (ARN) of the search domain. See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information. */
		ARN?: string | null;
		Created?: boolean | null;
		Deleted?: boolean | null;
		DocService?: ServiceEndpoint;
		SearchService?: ServiceEndpoint;

		/** Required */
		RequiresIndexDocuments: boolean;
		Processing?: boolean | null;
		SearchInstanceType?: string;
		SearchPartitionCount?: number | null;
		SearchInstanceCount?: number | null;
		Limits?: Limits;
	}

	/** The current status of the search domain. */
	export interface DomainStatusFormProperties {

		/**
		 * An internally generated unique identifier for a domain.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		DomainId: FormControl<string | null | undefined>,

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: FormControl<string | null | undefined>,

		/** The Amazon Resource Name (ARN) of the search domain. See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information. */
		ARN: FormControl<string | null | undefined>,
		Created: FormControl<boolean | null | undefined>,
		Deleted: FormControl<boolean | null | undefined>,

		/** Required */
		RequiresIndexDocuments: FormControl<boolean | null | undefined>,
		Processing: FormControl<boolean | null | undefined>,
		SearchInstanceType: FormControl<string | null | undefined>,
		SearchPartitionCount: FormControl<number | null | undefined>,
		SearchInstanceCount: FormControl<number | null | undefined>,
	}
	export function CreateDomainStatusFormGroup() {
		return new FormGroup<DomainStatusFormProperties>({
			DomainId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
			ARN: new FormControl<string | null | undefined>(undefined),
			Created: new FormControl<boolean | null | undefined>(undefined),
			Deleted: new FormControl<boolean | null | undefined>(undefined),
			RequiresIndexDocuments: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			Processing: new FormControl<boolean | null | undefined>(undefined),
			SearchInstanceType: new FormControl<string | null | undefined>(undefined),
			SearchPartitionCount: new FormControl<number | null | undefined>(undefined),
			SearchInstanceCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The endpoint to which service requests can be submitted. */
	export interface ServiceEndpoint {

		/** The endpoint to which service requests can be submitted. For example, <code>search-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.cloudsearch.amazonaws.com</code> or <code>doc-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.cloudsearch.amazonaws.com</code>. */
		Endpoint?: string | null;
	}

	/** The endpoint to which service requests can be submitted. */
	export interface ServiceEndpointFormProperties {

		/** The endpoint to which service requests can be submitted. For example, <code>search-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.cloudsearch.amazonaws.com</code> or <code>doc-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.cloudsearch.amazonaws.com</code>. */
		Endpoint: FormControl<string | null | undefined>,
	}
	export function CreateServiceEndpointFormGroup() {
		return new FormGroup<ServiceEndpointFormProperties>({
			Endpoint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Limits {

		/**
		 * Required
		 * Minimum: 1
		 */
		MaximumReplicationCount: number;

		/**
		 * Required
		 * Minimum: 1
		 */
		MaximumPartitionCount: number;
	}
	export interface LimitsFormProperties {

		/**
		 * Required
		 * Minimum: 1
		 */
		MaximumReplicationCount: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 */
		MaximumPartitionCount: FormControl<number | null | undefined>,
	}
	export function CreateLimitsFormGroup() {
		return new FormGroup<LimitsFormProperties>({
			MaximumReplicationCount: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
			MaximumPartitionCount: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
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

	export interface ResourceAlreadyExistsException {
	}
	export interface ResourceAlreadyExistsExceptionFormProperties {
	}
	export function CreateResourceAlreadyExistsExceptionFormGroup() {
		return new FormGroup<ResourceAlreadyExistsExceptionFormProperties>({
		});

	}


	/** The result of a <code><a>DefineAnalysisScheme</a></code> request. Contains the status of the newly-configured analysis scheme. */
	export interface DefineAnalysisSchemeResponse {

		/**
		 * The status and configuration of an <code>AnalysisScheme</code>.
		 * Required
		 */
		AnalysisScheme: AnalysisSchemeStatus;
	}

	/** The result of a <code><a>DefineAnalysisScheme</a></code> request. Contains the status of the newly-configured analysis scheme. */
	export interface DefineAnalysisSchemeResponseFormProperties {
	}
	export function CreateDefineAnalysisSchemeResponseFormGroup() {
		return new FormGroup<DefineAnalysisSchemeResponseFormProperties>({
		});

	}


	/** The status and configuration of an <code>AnalysisScheme</code>. */
	export interface AnalysisSchemeStatus {

		/**
		 * Configuration information for an analysis scheme. Each analysis scheme has a unique name and specifies the language of the text to be processed. The following options can be configured for an analysis scheme: <code>Synonyms</code>, <code>Stopwords</code>, <code>StemmingDictionary</code>, <code>JapaneseTokenizationDictionary</code> and <code>AlgorithmicStemming</code>.
		 * Required
		 */
		Options: AnalysisScheme;

		/**
		 * The status of domain configuration option.
		 * Required
		 */
		Status: OptionStatus;
	}

	/** The status and configuration of an <code>AnalysisScheme</code>. */
	export interface AnalysisSchemeStatusFormProperties {
	}
	export function CreateAnalysisSchemeStatusFormGroup() {
		return new FormGroup<AnalysisSchemeStatusFormProperties>({
		});

	}


	/** Configuration information for an analysis scheme. Each analysis scheme has a unique name and specifies the language of the text to be processed. The following options can be configured for an analysis scheme: <code>Synonyms</code>, <code>Stopwords</code>, <code>StemmingDictionary</code>, <code>JapaneseTokenizationDictionary</code> and <code>AlgorithmicStemming</code>. */
	export interface AnalysisScheme {

		/**
		 * Names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore).
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		AnalysisSchemeName: string;

		/**
		 * An <a href="http://tools.ietf.org/html/rfc4646" target="_blank">IETF RFC 4646</a> language code or <code>mul</code> for multiple languages.
		 * Required
		 */
		AnalysisSchemeLanguage: AnalysisSchemeAnalysisSchemeLanguage;

		/** Synonyms, stopwords, and stemming options for an analysis scheme. Includes tokenization dictionary for Japanese. */
		AnalysisOptions?: AnalysisOptions;
	}

	/** Configuration information for an analysis scheme. Each analysis scheme has a unique name and specifies the language of the text to be processed. The following options can be configured for an analysis scheme: <code>Synonyms</code>, <code>Stopwords</code>, <code>StemmingDictionary</code>, <code>JapaneseTokenizationDictionary</code> and <code>AlgorithmicStemming</code>. */
	export interface AnalysisSchemeFormProperties {

		/**
		 * Names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore).
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		AnalysisSchemeName: FormControl<string | null | undefined>,

		/**
		 * An <a href="http://tools.ietf.org/html/rfc4646" target="_blank">IETF RFC 4646</a> language code or <code>mul</code> for multiple languages.
		 * Required
		 */
		AnalysisSchemeLanguage: FormControl<AnalysisSchemeAnalysisSchemeLanguage | null | undefined>,
	}
	export function CreateAnalysisSchemeFormGroup() {
		return new FormGroup<AnalysisSchemeFormProperties>({
			AnalysisSchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-z][a-z0-9_]*')]),
			AnalysisSchemeLanguage: new FormControl<AnalysisSchemeAnalysisSchemeLanguage | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AnalysisSchemeAnalysisSchemeLanguage { ar = 'ar', bg = 'bg', ca = 'ca', cs = 'cs', da = 'da', de = 'de', el = 'el', en = 'en', es = 'es', eu = 'eu', fa = 'fa', fi = 'fi', fr = 'fr', ga = 'ga', gl = 'gl', he = 'he', hi = 'hi', hu = 'hu', hy = 'hy', id = 'id', it = 'it', ja = 'ja', ko = 'ko', lv = 'lv', mul = 'mul', nl = 'nl', no = 'no', pt = 'pt', ro = 'ro', ru = 'ru', sv = 'sv', th = 'th', tr = 'tr', 'zh-Hans' = 'zh-Hans', 'zh-Hant' = 'zh-Hant' }


	/** Synonyms, stopwords, and stemming options for an analysis scheme. Includes tokenization dictionary for Japanese. */
	export interface AnalysisOptions {
		Synonyms?: string;
		Stopwords?: string;
		StemmingDictionary?: string;
		JapaneseTokenizationDictionary?: string;
		AlgorithmicStemming?: AlgorithmicStemming;
	}

	/** Synonyms, stopwords, and stemming options for an analysis scheme. Includes tokenization dictionary for Japanese. */
	export interface AnalysisOptionsFormProperties {
		Synonyms: FormControl<string | null | undefined>,
		Stopwords: FormControl<string | null | undefined>,
		StemmingDictionary: FormControl<string | null | undefined>,
		JapaneseTokenizationDictionary: FormControl<string | null | undefined>,
		AlgorithmicStemming: FormControl<AlgorithmicStemming | null | undefined>,
	}
	export function CreateAnalysisOptionsFormGroup() {
		return new FormGroup<AnalysisOptionsFormProperties>({
			Synonyms: new FormControl<string | null | undefined>(undefined),
			Stopwords: new FormControl<string | null | undefined>(undefined),
			StemmingDictionary: new FormControl<string | null | undefined>(undefined),
			JapaneseTokenizationDictionary: new FormControl<string | null | undefined>(undefined),
			AlgorithmicStemming: new FormControl<AlgorithmicStemming | null | undefined>(undefined),
		});

	}

	export enum AlgorithmicStemming { none = 'none', minimal = 'minimal', light = 'light', full = 'full' }


	/** The status of domain configuration option. */
	export interface OptionStatus {

		/** Required */
		CreationDate: Date;

		/** Required */
		UpdateDate: Date;
		UpdateVersion?: number | null;

		/** Required */
		State: OptionState;
		PendingDeletion?: boolean | null;
	}

	/** The status of domain configuration option. */
	export interface OptionStatusFormProperties {

		/** Required */
		CreationDate: FormControl<Date | null | undefined>,

		/** Required */
		UpdateDate: FormControl<Date | null | undefined>,
		UpdateVersion: FormControl<number | null | undefined>,

		/** Required */
		State: FormControl<OptionState | null | undefined>,
		PendingDeletion: FormControl<boolean | null | undefined>,
	}
	export function CreateOptionStatusFormGroup() {
		return new FormGroup<OptionStatusFormProperties>({
			CreationDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			UpdateDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			UpdateVersion: new FormControl<number | null | undefined>(undefined),
			State: new FormControl<OptionState | null | undefined>(undefined, [Validators.required]),
			PendingDeletion: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>The state of processing a change to an option. One of:</p> <ul> <li>RequiresIndexDocuments: The option's latest value will not be deployed until <a>IndexDocuments</a> has been called and indexing is complete.</li> <li>Processing: The option's latest value is in the process of being activated.</li> <li>Active: The option's latest value is fully deployed. </li> <li>FailedToValidate: The option value is not compatible with the domain's data and cannot be used to index the data. You must either modify the option value or update or remove the incompatible documents.</li> </ul> */
	export enum OptionState { RequiresIndexDocuments = 'RequiresIndexDocuments', Processing = 'Processing', Active = 'Active', FailedToValidate = 'FailedToValidate' }


	/** An <a href="http://tools.ietf.org/html/rfc4646" target="_blank">IETF RFC 4646</a> language code or <code>mul</code> for multiple languages. */
	export enum AnalysisSchemeLanguage { ar = 'ar', bg = 'bg', ca = 'ca', cs = 'cs', da = 'da', de = 'de', el = 'el', en = 'en', es = 'es', eu = 'eu', fa = 'fa', fi = 'fi', fr = 'fr', ga = 'ga', gl = 'gl', he = 'he', hi = 'hi', hu = 'hu', hy = 'hy', id = 'id', it = 'it', ja = 'ja', ko = 'ko', lv = 'lv', mul = 'mul', nl = 'nl', no = 'no', pt = 'pt', ro = 'ro', ru = 'ru', sv = 'sv', th = 'th', tr = 'tr', 'zh-Hans' = 'zh-Hans', 'zh-Hant' = 'zh-Hant' }

	export interface InvalidTypeException {
	}
	export interface InvalidTypeExceptionFormProperties {
	}
	export function CreateInvalidTypeExceptionFormGroup() {
		return new FormGroup<InvalidTypeExceptionFormProperties>({
		});

	}


	/** The result of a <code>DefineExpression</code> request. Contains the status of the newly-configured expression. */
	export interface DefineExpressionResponse {

		/**
		 * The value of an <code>Expression</code> and its current status.
		 * Required
		 */
		Expression: ExpressionStatus;
	}

	/** The result of a <code>DefineExpression</code> request. Contains the status of the newly-configured expression. */
	export interface DefineExpressionResponseFormProperties {
	}
	export function CreateDefineExpressionResponseFormGroup() {
		return new FormGroup<DefineExpressionResponseFormProperties>({
		});

	}


	/** The value of an <code>Expression</code> and its current status. */
	export interface ExpressionStatus {

		/** Required */
		Options: Expression;

		/**
		 * The status of domain configuration option.
		 * Required
		 */
		Status: OptionStatus;
	}

	/** The value of an <code>Expression</code> and its current status. */
	export interface ExpressionStatusFormProperties {
	}
	export function CreateExpressionStatusFormGroup() {
		return new FormGroup<ExpressionStatusFormProperties>({
		});

	}


	/** A named expression that can be evaluated at search time. Can be used to sort the search results, define other expressions, or return computed information in the search results.  */
	export interface Expression {

		/**
		 * Names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore).
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		ExpressionName: string;

		/**
		 * The expression to evaluate for sorting while processing a search request. The <code>Expression</code> syntax is based on JavaScript expressions. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Required
		 * Min length: 1
		 * Max length: 10240
		 */
		ExpressionValue: string;
	}

	/** A named expression that can be evaluated at search time. Can be used to sort the search results, define other expressions, or return computed information in the search results.  */
	export interface ExpressionFormProperties {

		/**
		 * Names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore).
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		ExpressionName: FormControl<string | null | undefined>,

		/**
		 * The expression to evaluate for sorting while processing a search request. The <code>Expression</code> syntax is based on JavaScript expressions. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Required
		 * Min length: 1
		 * Max length: 10240
		 */
		ExpressionValue: FormControl<string | null | undefined>,
	}
	export function CreateExpressionFormGroup() {
		return new FormGroup<ExpressionFormProperties>({
			ExpressionName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-z][a-z0-9_]*')]),
			ExpressionValue: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(10240)]),
		});

	}


	/** The result of a <code><a>DefineIndexField</a></code> request. Contains the status of the newly-configured index field. */
	export interface DefineIndexFieldResponse {

		/**
		 * The value of an <code>IndexField</code> and its current status.
		 * Required
		 */
		IndexField: IndexFieldStatus;
	}

	/** The result of a <code><a>DefineIndexField</a></code> request. Contains the status of the newly-configured index field. */
	export interface DefineIndexFieldResponseFormProperties {
	}
	export function CreateDefineIndexFieldResponseFormGroup() {
		return new FormGroup<DefineIndexFieldResponseFormProperties>({
		});

	}


	/** The value of an <code>IndexField</code> and its current status. */
	export interface IndexFieldStatus {

		/**
		 * Configuration information for a field in the index, including its name, type, and options. The supported options depend on the <code><a>IndexFieldType</a></code>.
		 * Required
		 */
		Options: IndexField;

		/**
		 * The status of domain configuration option.
		 * Required
		 */
		Status: OptionStatus;
	}

	/** The value of an <code>IndexField</code> and its current status. */
	export interface IndexFieldStatusFormProperties {
	}
	export function CreateIndexFieldStatusFormGroup() {
		return new FormGroup<IndexFieldStatusFormProperties>({
		});

	}


	/** Configuration information for a field in the index, including its name, type, and options. The supported options depend on the <code><a>IndexFieldType</a></code>. */
	export interface IndexField {

		/** Required */
		IndexFieldName: string;

		/**
		 * The type of field. The valid options for a field depend on the field type. For more information about the supported field types, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Required
		 */
		IndexFieldType: IndexFieldIndexFieldType;

		/** Options for a 64-bit signed integer field. Present if <code>IndexFieldType</code> specifies the field is of type <code>int</code>. All options are enabled by default. */
		IntOptions?: IntOptions;

		/** Options for a double-precision 64-bit floating point field. Present if <code>IndexFieldType</code> specifies the field is of type <code>double</code>. All options are enabled by default. */
		DoubleOptions?: DoubleOptions;

		/** Options for literal field. Present if <code>IndexFieldType</code> specifies the field is of type <code>literal</code>. All options are enabled by default. */
		LiteralOptions?: LiteralOptions;

		/** Options for text field. Present if <code>IndexFieldType</code> specifies the field is of type <code>text</code>. A <code>text</code> field is always searchable. All options are enabled by default. */
		TextOptions?: TextOptions;

		/** Options for a date field. Dates and times are specified in UTC (Coordinated Universal Time) according to IETF RFC3339: yyyy-mm-ddT00:00:00Z. Present if <code>IndexFieldType</code> specifies the field is of type <code>date</code>. All options are enabled by default. */
		DateOptions?: DateOptions;

		/** Options for a latlon field. A latlon field contains a location stored as a latitude and longitude value pair. Present if <code>IndexFieldType</code> specifies the field is of type <code>latlon</code>. All options are enabled by default. */
		LatLonOptions?: LatLonOptions;

		/** Options for a field that contains an array of 64-bit signed integers. Present if <code>IndexFieldType</code> specifies the field is of type <code>int-array</code>. All options are enabled by default. */
		IntArrayOptions?: IntArrayOptions;

		/** Options for a field that contains an array of double-precision 64-bit floating point values. Present if <code>IndexFieldType</code> specifies the field is of type <code>double-array</code>. All options are enabled by default. */
		DoubleArrayOptions?: DoubleArrayOptions;

		/** Options for a field that contains an array of literal strings. Present if <code>IndexFieldType</code> specifies the field is of type <code>literal-array</code>. All options are enabled by default. */
		LiteralArrayOptions?: LiteralArrayOptions;

		/** Options for a field that contains an array of text strings. Present if <code>IndexFieldType</code> specifies the field is of type <code>text-array</code>. A <code>text-array</code> field is always searchable. All options are enabled by default. */
		TextArrayOptions?: TextArrayOptions;

		/** Options for a field that contains an array of dates. Present if <code>IndexFieldType</code> specifies the field is of type <code>date-array</code>. All options are enabled by default. */
		DateArrayOptions?: DateArrayOptions;
	}

	/** Configuration information for a field in the index, including its name, type, and options. The supported options depend on the <code><a>IndexFieldType</a></code>. */
	export interface IndexFieldFormProperties {

		/** Required */
		IndexFieldName: FormControl<string | null | undefined>,

		/**
		 * The type of field. The valid options for a field depend on the field type. For more information about the supported field types, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Required
		 */
		IndexFieldType: FormControl<IndexFieldIndexFieldType | null | undefined>,
	}
	export function CreateIndexFieldFormGroup() {
		return new FormGroup<IndexFieldFormProperties>({
			IndexFieldName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IndexFieldType: new FormControl<IndexFieldIndexFieldType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum IndexFieldIndexFieldType { int = 'int', double = 'double', literal = 'literal', text = 'text', date = 'date', latlon = 'latlon', 'int-array' = 'int-array', 'double-array' = 'double-array', 'literal-array' = 'literal-array', 'text-array' = 'text-array', 'date-array' = 'date-array' }


	/** Options for a 64-bit signed integer field. Present if <code>IndexFieldType</code> specifies the field is of type <code>int</code>. All options are enabled by default. */
	export interface IntOptions {
		DefaultValue?: number | null;
		SourceField?: string;
		FacetEnabled?: boolean | null;
		SearchEnabled?: boolean | null;
		ReturnEnabled?: boolean | null;
		SortEnabled?: boolean | null;
	}

	/** Options for a 64-bit signed integer field. Present if <code>IndexFieldType</code> specifies the field is of type <code>int</code>. All options are enabled by default. */
	export interface IntOptionsFormProperties {
		DefaultValue: FormControl<number | null | undefined>,
		SourceField: FormControl<string | null | undefined>,
		FacetEnabled: FormControl<boolean | null | undefined>,
		SearchEnabled: FormControl<boolean | null | undefined>,
		ReturnEnabled: FormControl<boolean | null | undefined>,
		SortEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateIntOptionsFormGroup() {
		return new FormGroup<IntOptionsFormProperties>({
			DefaultValue: new FormControl<number | null | undefined>(undefined),
			SourceField: new FormControl<string | null | undefined>(undefined),
			FacetEnabled: new FormControl<boolean | null | undefined>(undefined),
			SearchEnabled: new FormControl<boolean | null | undefined>(undefined),
			ReturnEnabled: new FormControl<boolean | null | undefined>(undefined),
			SortEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Options for a double-precision 64-bit floating point field. Present if <code>IndexFieldType</code> specifies the field is of type <code>double</code>. All options are enabled by default. */
	export interface DoubleOptions {
		DefaultValue?: number | null;
		SourceField?: string;
		FacetEnabled?: boolean | null;
		SearchEnabled?: boolean | null;
		ReturnEnabled?: boolean | null;
		SortEnabled?: boolean | null;
	}

	/** Options for a double-precision 64-bit floating point field. Present if <code>IndexFieldType</code> specifies the field is of type <code>double</code>. All options are enabled by default. */
	export interface DoubleOptionsFormProperties {
		DefaultValue: FormControl<number | null | undefined>,
		SourceField: FormControl<string | null | undefined>,
		FacetEnabled: FormControl<boolean | null | undefined>,
		SearchEnabled: FormControl<boolean | null | undefined>,
		ReturnEnabled: FormControl<boolean | null | undefined>,
		SortEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateDoubleOptionsFormGroup() {
		return new FormGroup<DoubleOptionsFormProperties>({
			DefaultValue: new FormControl<number | null | undefined>(undefined),
			SourceField: new FormControl<string | null | undefined>(undefined),
			FacetEnabled: new FormControl<boolean | null | undefined>(undefined),
			SearchEnabled: new FormControl<boolean | null | undefined>(undefined),
			ReturnEnabled: new FormControl<boolean | null | undefined>(undefined),
			SortEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Options for literal field. Present if <code>IndexFieldType</code> specifies the field is of type <code>literal</code>. All options are enabled by default. */
	export interface LiteralOptions {
		DefaultValue?: string;

		/**
		 * <p>A string that represents the name of an index field. CloudSearch supports regular index fields as well as dynamic fields. A dynamic field's name defines a pattern that begins or ends with a wildcard. Any document fields that don't map to a regular index field but do match a dynamic field's pattern are configured with the dynamic field's indexing options. </p> <p>Regular field names begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore). Dynamic field names must begin or end with a wildcard (*). The wildcard can also be the only character in a dynamic field name. Multiple wildcards, and wildcards embedded within a string are not supported. </p> <p>The name <code>score</code> is reserved and cannot be used as a field name. To reference a document's ID, you can use the name <code>_id</code>. </p>
		 * Min length: 1
		 * Max length: 64
		 */
		SourceField?: string | null;
		FacetEnabled?: boolean | null;
		SearchEnabled?: boolean | null;
		ReturnEnabled?: boolean | null;
		SortEnabled?: boolean | null;
	}

	/** Options for literal field. Present if <code>IndexFieldType</code> specifies the field is of type <code>literal</code>. All options are enabled by default. */
	export interface LiteralOptionsFormProperties {
		DefaultValue: FormControl<string | null | undefined>,

		/**
		 * <p>A string that represents the name of an index field. CloudSearch supports regular index fields as well as dynamic fields. A dynamic field's name defines a pattern that begins or ends with a wildcard. Any document fields that don't map to a regular index field but do match a dynamic field's pattern are configured with the dynamic field's indexing options. </p> <p>Regular field names begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore). Dynamic field names must begin or end with a wildcard (*). The wildcard can also be the only character in a dynamic field name. Multiple wildcards, and wildcards embedded within a string are not supported. </p> <p>The name <code>score</code> is reserved and cannot be used as a field name. To reference a document's ID, you can use the name <code>_id</code>. </p>
		 * Min length: 1
		 * Max length: 64
		 */
		SourceField: FormControl<string | null | undefined>,
		FacetEnabled: FormControl<boolean | null | undefined>,
		SearchEnabled: FormControl<boolean | null | undefined>,
		ReturnEnabled: FormControl<boolean | null | undefined>,
		SortEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateLiteralOptionsFormGroup() {
		return new FormGroup<LiteralOptionsFormProperties>({
			DefaultValue: new FormControl<string | null | undefined>(undefined),
			SourceField: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-z][a-z0-9_]*')]),
			FacetEnabled: new FormControl<boolean | null | undefined>(undefined),
			SearchEnabled: new FormControl<boolean | null | undefined>(undefined),
			ReturnEnabled: new FormControl<boolean | null | undefined>(undefined),
			SortEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Options for text field. Present if <code>IndexFieldType</code> specifies the field is of type <code>text</code>. A <code>text</code> field is always searchable. All options are enabled by default. */
	export interface TextOptions {
		DefaultValue?: string;

		/**
		 * <p>A string that represents the name of an index field. CloudSearch supports regular index fields as well as dynamic fields. A dynamic field's name defines a pattern that begins or ends with a wildcard. Any document fields that don't map to a regular index field but do match a dynamic field's pattern are configured with the dynamic field's indexing options. </p> <p>Regular field names begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore). Dynamic field names must begin or end with a wildcard (*). The wildcard can also be the only character in a dynamic field name. Multiple wildcards, and wildcards embedded within a string are not supported. </p> <p>The name <code>score</code> is reserved and cannot be used as a field name. To reference a document's ID, you can use the name <code>_id</code>. </p>
		 * Min length: 1
		 * Max length: 64
		 */
		SourceField?: string | null;
		ReturnEnabled?: boolean | null;
		SortEnabled?: boolean | null;
		HighlightEnabled?: boolean | null;
		AnalysisScheme?: string;
	}

	/** Options for text field. Present if <code>IndexFieldType</code> specifies the field is of type <code>text</code>. A <code>text</code> field is always searchable. All options are enabled by default. */
	export interface TextOptionsFormProperties {
		DefaultValue: FormControl<string | null | undefined>,

		/**
		 * <p>A string that represents the name of an index field. CloudSearch supports regular index fields as well as dynamic fields. A dynamic field's name defines a pattern that begins or ends with a wildcard. Any document fields that don't map to a regular index field but do match a dynamic field's pattern are configured with the dynamic field's indexing options. </p> <p>Regular field names begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore). Dynamic field names must begin or end with a wildcard (*). The wildcard can also be the only character in a dynamic field name. Multiple wildcards, and wildcards embedded within a string are not supported. </p> <p>The name <code>score</code> is reserved and cannot be used as a field name. To reference a document's ID, you can use the name <code>_id</code>. </p>
		 * Min length: 1
		 * Max length: 64
		 */
		SourceField: FormControl<string | null | undefined>,
		ReturnEnabled: FormControl<boolean | null | undefined>,
		SortEnabled: FormControl<boolean | null | undefined>,
		HighlightEnabled: FormControl<boolean | null | undefined>,
		AnalysisScheme: FormControl<string | null | undefined>,
	}
	export function CreateTextOptionsFormGroup() {
		return new FormGroup<TextOptionsFormProperties>({
			DefaultValue: new FormControl<string | null | undefined>(undefined),
			SourceField: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-z][a-z0-9_]*')]),
			ReturnEnabled: new FormControl<boolean | null | undefined>(undefined),
			SortEnabled: new FormControl<boolean | null | undefined>(undefined),
			HighlightEnabled: new FormControl<boolean | null | undefined>(undefined),
			AnalysisScheme: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Options for a date field. Dates and times are specified in UTC (Coordinated Universal Time) according to IETF RFC3339: yyyy-mm-ddT00:00:00Z. Present if <code>IndexFieldType</code> specifies the field is of type <code>date</code>. All options are enabled by default. */
	export interface DateOptions {
		DefaultValue?: string;

		/**
		 * <p>A string that represents the name of an index field. CloudSearch supports regular index fields as well as dynamic fields. A dynamic field's name defines a pattern that begins or ends with a wildcard. Any document fields that don't map to a regular index field but do match a dynamic field's pattern are configured with the dynamic field's indexing options. </p> <p>Regular field names begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore). Dynamic field names must begin or end with a wildcard (*). The wildcard can also be the only character in a dynamic field name. Multiple wildcards, and wildcards embedded within a string are not supported. </p> <p>The name <code>score</code> is reserved and cannot be used as a field name. To reference a document's ID, you can use the name <code>_id</code>. </p>
		 * Min length: 1
		 * Max length: 64
		 */
		SourceField?: string | null;
		FacetEnabled?: boolean | null;
		SearchEnabled?: boolean | null;
		ReturnEnabled?: boolean | null;
		SortEnabled?: boolean | null;
	}

	/** Options for a date field. Dates and times are specified in UTC (Coordinated Universal Time) according to IETF RFC3339: yyyy-mm-ddT00:00:00Z. Present if <code>IndexFieldType</code> specifies the field is of type <code>date</code>. All options are enabled by default. */
	export interface DateOptionsFormProperties {
		DefaultValue: FormControl<string | null | undefined>,

		/**
		 * <p>A string that represents the name of an index field. CloudSearch supports regular index fields as well as dynamic fields. A dynamic field's name defines a pattern that begins or ends with a wildcard. Any document fields that don't map to a regular index field but do match a dynamic field's pattern are configured with the dynamic field's indexing options. </p> <p>Regular field names begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore). Dynamic field names must begin or end with a wildcard (*). The wildcard can also be the only character in a dynamic field name. Multiple wildcards, and wildcards embedded within a string are not supported. </p> <p>The name <code>score</code> is reserved and cannot be used as a field name. To reference a document's ID, you can use the name <code>_id</code>. </p>
		 * Min length: 1
		 * Max length: 64
		 */
		SourceField: FormControl<string | null | undefined>,
		FacetEnabled: FormControl<boolean | null | undefined>,
		SearchEnabled: FormControl<boolean | null | undefined>,
		ReturnEnabled: FormControl<boolean | null | undefined>,
		SortEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateDateOptionsFormGroup() {
		return new FormGroup<DateOptionsFormProperties>({
			DefaultValue: new FormControl<string | null | undefined>(undefined),
			SourceField: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-z][a-z0-9_]*')]),
			FacetEnabled: new FormControl<boolean | null | undefined>(undefined),
			SearchEnabled: new FormControl<boolean | null | undefined>(undefined),
			ReturnEnabled: new FormControl<boolean | null | undefined>(undefined),
			SortEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Options for a latlon field. A latlon field contains a location stored as a latitude and longitude value pair. Present if <code>IndexFieldType</code> specifies the field is of type <code>latlon</code>. All options are enabled by default. */
	export interface LatLonOptions {
		DefaultValue?: string;

		/**
		 * <p>A string that represents the name of an index field. CloudSearch supports regular index fields as well as dynamic fields. A dynamic field's name defines a pattern that begins or ends with a wildcard. Any document fields that don't map to a regular index field but do match a dynamic field's pattern are configured with the dynamic field's indexing options. </p> <p>Regular field names begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore). Dynamic field names must begin or end with a wildcard (*). The wildcard can also be the only character in a dynamic field name. Multiple wildcards, and wildcards embedded within a string are not supported. </p> <p>The name <code>score</code> is reserved and cannot be used as a field name. To reference a document's ID, you can use the name <code>_id</code>. </p>
		 * Min length: 1
		 * Max length: 64
		 */
		SourceField?: string | null;
		FacetEnabled?: boolean | null;
		SearchEnabled?: boolean | null;
		ReturnEnabled?: boolean | null;
		SortEnabled?: boolean | null;
	}

	/** Options for a latlon field. A latlon field contains a location stored as a latitude and longitude value pair. Present if <code>IndexFieldType</code> specifies the field is of type <code>latlon</code>. All options are enabled by default. */
	export interface LatLonOptionsFormProperties {
		DefaultValue: FormControl<string | null | undefined>,

		/**
		 * <p>A string that represents the name of an index field. CloudSearch supports regular index fields as well as dynamic fields. A dynamic field's name defines a pattern that begins or ends with a wildcard. Any document fields that don't map to a regular index field but do match a dynamic field's pattern are configured with the dynamic field's indexing options. </p> <p>Regular field names begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore). Dynamic field names must begin or end with a wildcard (*). The wildcard can also be the only character in a dynamic field name. Multiple wildcards, and wildcards embedded within a string are not supported. </p> <p>The name <code>score</code> is reserved and cannot be used as a field name. To reference a document's ID, you can use the name <code>_id</code>. </p>
		 * Min length: 1
		 * Max length: 64
		 */
		SourceField: FormControl<string | null | undefined>,
		FacetEnabled: FormControl<boolean | null | undefined>,
		SearchEnabled: FormControl<boolean | null | undefined>,
		ReturnEnabled: FormControl<boolean | null | undefined>,
		SortEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateLatLonOptionsFormGroup() {
		return new FormGroup<LatLonOptionsFormProperties>({
			DefaultValue: new FormControl<string | null | undefined>(undefined),
			SourceField: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-z][a-z0-9_]*')]),
			FacetEnabled: new FormControl<boolean | null | undefined>(undefined),
			SearchEnabled: new FormControl<boolean | null | undefined>(undefined),
			ReturnEnabled: new FormControl<boolean | null | undefined>(undefined),
			SortEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Options for a field that contains an array of 64-bit signed integers. Present if <code>IndexFieldType</code> specifies the field is of type <code>int-array</code>. All options are enabled by default. */
	export interface IntArrayOptions {
		DefaultValue?: number | null;
		SourceFields?: string;
		FacetEnabled?: boolean | null;
		SearchEnabled?: boolean | null;
		ReturnEnabled?: boolean | null;
	}

	/** Options for a field that contains an array of 64-bit signed integers. Present if <code>IndexFieldType</code> specifies the field is of type <code>int-array</code>. All options are enabled by default. */
	export interface IntArrayOptionsFormProperties {
		DefaultValue: FormControl<number | null | undefined>,
		SourceFields: FormControl<string | null | undefined>,
		FacetEnabled: FormControl<boolean | null | undefined>,
		SearchEnabled: FormControl<boolean | null | undefined>,
		ReturnEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateIntArrayOptionsFormGroup() {
		return new FormGroup<IntArrayOptionsFormProperties>({
			DefaultValue: new FormControl<number | null | undefined>(undefined),
			SourceFields: new FormControl<string | null | undefined>(undefined),
			FacetEnabled: new FormControl<boolean | null | undefined>(undefined),
			SearchEnabled: new FormControl<boolean | null | undefined>(undefined),
			ReturnEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Options for a field that contains an array of double-precision 64-bit floating point values. Present if <code>IndexFieldType</code> specifies the field is of type <code>double-array</code>. All options are enabled by default. */
	export interface DoubleArrayOptions {
		DefaultValue?: number | null;
		SourceFields?: string;
		FacetEnabled?: boolean | null;
		SearchEnabled?: boolean | null;
		ReturnEnabled?: boolean | null;
	}

	/** Options for a field that contains an array of double-precision 64-bit floating point values. Present if <code>IndexFieldType</code> specifies the field is of type <code>double-array</code>. All options are enabled by default. */
	export interface DoubleArrayOptionsFormProperties {
		DefaultValue: FormControl<number | null | undefined>,
		SourceFields: FormControl<string | null | undefined>,
		FacetEnabled: FormControl<boolean | null | undefined>,
		SearchEnabled: FormControl<boolean | null | undefined>,
		ReturnEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateDoubleArrayOptionsFormGroup() {
		return new FormGroup<DoubleArrayOptionsFormProperties>({
			DefaultValue: new FormControl<number | null | undefined>(undefined),
			SourceFields: new FormControl<string | null | undefined>(undefined),
			FacetEnabled: new FormControl<boolean | null | undefined>(undefined),
			SearchEnabled: new FormControl<boolean | null | undefined>(undefined),
			ReturnEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Options for a field that contains an array of literal strings. Present if <code>IndexFieldType</code> specifies the field is of type <code>literal-array</code>. All options are enabled by default. */
	export interface LiteralArrayOptions {
		DefaultValue?: string;
		SourceFields?: string;
		FacetEnabled?: boolean | null;
		SearchEnabled?: boolean | null;
		ReturnEnabled?: boolean | null;
	}

	/** Options for a field that contains an array of literal strings. Present if <code>IndexFieldType</code> specifies the field is of type <code>literal-array</code>. All options are enabled by default. */
	export interface LiteralArrayOptionsFormProperties {
		DefaultValue: FormControl<string | null | undefined>,
		SourceFields: FormControl<string | null | undefined>,
		FacetEnabled: FormControl<boolean | null | undefined>,
		SearchEnabled: FormControl<boolean | null | undefined>,
		ReturnEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateLiteralArrayOptionsFormGroup() {
		return new FormGroup<LiteralArrayOptionsFormProperties>({
			DefaultValue: new FormControl<string | null | undefined>(undefined),
			SourceFields: new FormControl<string | null | undefined>(undefined),
			FacetEnabled: new FormControl<boolean | null | undefined>(undefined),
			SearchEnabled: new FormControl<boolean | null | undefined>(undefined),
			ReturnEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Options for a field that contains an array of text strings. Present if <code>IndexFieldType</code> specifies the field is of type <code>text-array</code>. A <code>text-array</code> field is always searchable. All options are enabled by default. */
	export interface TextArrayOptions {
		DefaultValue?: string;
		SourceFields?: string;
		ReturnEnabled?: boolean | null;
		HighlightEnabled?: boolean | null;
		AnalysisScheme?: string;
	}

	/** Options for a field that contains an array of text strings. Present if <code>IndexFieldType</code> specifies the field is of type <code>text-array</code>. A <code>text-array</code> field is always searchable. All options are enabled by default. */
	export interface TextArrayOptionsFormProperties {
		DefaultValue: FormControl<string | null | undefined>,
		SourceFields: FormControl<string | null | undefined>,
		ReturnEnabled: FormControl<boolean | null | undefined>,
		HighlightEnabled: FormControl<boolean | null | undefined>,
		AnalysisScheme: FormControl<string | null | undefined>,
	}
	export function CreateTextArrayOptionsFormGroup() {
		return new FormGroup<TextArrayOptionsFormProperties>({
			DefaultValue: new FormControl<string | null | undefined>(undefined),
			SourceFields: new FormControl<string | null | undefined>(undefined),
			ReturnEnabled: new FormControl<boolean | null | undefined>(undefined),
			HighlightEnabled: new FormControl<boolean | null | undefined>(undefined),
			AnalysisScheme: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Options for a field that contains an array of dates. Present if <code>IndexFieldType</code> specifies the field is of type <code>date-array</code>. All options are enabled by default. */
	export interface DateArrayOptions {
		DefaultValue?: string;
		SourceFields?: string;
		FacetEnabled?: boolean | null;
		SearchEnabled?: boolean | null;
		ReturnEnabled?: boolean | null;
	}

	/** Options for a field that contains an array of dates. Present if <code>IndexFieldType</code> specifies the field is of type <code>date-array</code>. All options are enabled by default. */
	export interface DateArrayOptionsFormProperties {
		DefaultValue: FormControl<string | null | undefined>,
		SourceFields: FormControl<string | null | undefined>,
		FacetEnabled: FormControl<boolean | null | undefined>,
		SearchEnabled: FormControl<boolean | null | undefined>,
		ReturnEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateDateArrayOptionsFormGroup() {
		return new FormGroup<DateArrayOptionsFormProperties>({
			DefaultValue: new FormControl<string | null | undefined>(undefined),
			SourceFields: new FormControl<string | null | undefined>(undefined),
			FacetEnabled: new FormControl<boolean | null | undefined>(undefined),
			SearchEnabled: new FormControl<boolean | null | undefined>(undefined),
			ReturnEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The type of field. The valid options for a field depend on the field type. For more information about the supported field types, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>. */
	export enum IndexFieldType { int = 'int', double = 'double', literal = 'literal', text = 'text', date = 'date', latlon = 'latlon', 'int-array' = 'int-array', 'double-array' = 'double-array', 'literal-array' = 'literal-array', 'text-array' = 'text-array', 'date-array' = 'date-array' }


	/** The result of a <code>DefineSuggester</code> request. Contains the status of the newly-configured suggester. */
	export interface DefineSuggesterResponse {

		/**
		 * The value of a <code>Suggester</code> and its current status.
		 * Required
		 */
		Suggester: SuggesterStatus;
	}

	/** The result of a <code>DefineSuggester</code> request. Contains the status of the newly-configured suggester. */
	export interface DefineSuggesterResponseFormProperties {
	}
	export function CreateDefineSuggesterResponseFormGroup() {
		return new FormGroup<DefineSuggesterResponseFormProperties>({
		});

	}


	/** The value of a <code>Suggester</code> and its current status. */
	export interface SuggesterStatus {

		/**
		 * Configuration information for a search suggester. Each suggester has a unique name and specifies the text field you want to use for suggestions. The following options can be configured for a suggester: <code>FuzzyMatching</code>, <code>SortExpression</code>.
		 * Required
		 */
		Options: Suggester;

		/**
		 * The status of domain configuration option.
		 * Required
		 */
		Status: OptionStatus;
	}

	/** The value of a <code>Suggester</code> and its current status. */
	export interface SuggesterStatusFormProperties {
	}
	export function CreateSuggesterStatusFormGroup() {
		return new FormGroup<SuggesterStatusFormProperties>({
		});

	}


	/** Configuration information for a search suggester. Each suggester has a unique name and specifies the text field you want to use for suggestions. The following options can be configured for a suggester: <code>FuzzyMatching</code>, <code>SortExpression</code>.  */
	export interface Suggester {

		/**
		 * Names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore).
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		SuggesterName: string;

		/**
		 * Options for a search suggester.
		 * Required
		 */
		DocumentSuggesterOptions: DocumentSuggesterOptions;
	}

	/** Configuration information for a search suggester. Each suggester has a unique name and specifies the text field you want to use for suggestions. The following options can be configured for a suggester: <code>FuzzyMatching</code>, <code>SortExpression</code>.  */
	export interface SuggesterFormProperties {

		/**
		 * Names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore).
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		SuggesterName: FormControl<string | null | undefined>,
	}
	export function CreateSuggesterFormGroup() {
		return new FormGroup<SuggesterFormProperties>({
			SuggesterName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-z][a-z0-9_]*')]),
		});

	}


	/** Options for a search suggester. */
	export interface DocumentSuggesterOptions {

		/** Required */
		SourceField: string;
		FuzzyMatching?: SuggesterFuzzyMatching;
		SortExpression?: string;
	}

	/** Options for a search suggester. */
	export interface DocumentSuggesterOptionsFormProperties {

		/** Required */
		SourceField: FormControl<string | null | undefined>,
		FuzzyMatching: FormControl<SuggesterFuzzyMatching | null | undefined>,
		SortExpression: FormControl<string | null | undefined>,
	}
	export function CreateDocumentSuggesterOptionsFormGroup() {
		return new FormGroup<DocumentSuggesterOptionsFormProperties>({
			SourceField: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FuzzyMatching: new FormControl<SuggesterFuzzyMatching | null | undefined>(undefined),
			SortExpression: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SuggesterFuzzyMatching { none = 'none', low = 'low', high = 'high' }


	/** The result of a <code>DeleteAnalysisScheme</code> request. Contains the status of the deleted analysis scheme. */
	export interface DeleteAnalysisSchemeResponse {

		/** Required */
		AnalysisScheme: AnalysisSchemeStatus;
	}

	/** The result of a <code>DeleteAnalysisScheme</code> request. Contains the status of the deleted analysis scheme. */
	export interface DeleteAnalysisSchemeResponseFormProperties {
	}
	export function CreateDeleteAnalysisSchemeResponseFormGroup() {
		return new FormGroup<DeleteAnalysisSchemeResponseFormProperties>({
		});

	}


	/** The result of a <code>DeleteDomain</code> request. Contains the status of a newly deleted domain, or no status if the domain has already been completely deleted. */
	export interface DeleteDomainResponse {

		/** The current status of the search domain. */
		DomainStatus?: DomainStatus;
	}

	/** The result of a <code>DeleteDomain</code> request. Contains the status of a newly deleted domain, or no status if the domain has already been completely deleted. */
	export interface DeleteDomainResponseFormProperties {
	}
	export function CreateDeleteDomainResponseFormGroup() {
		return new FormGroup<DeleteDomainResponseFormProperties>({
		});

	}


	/** The result of a <code><a>DeleteExpression</a></code> request. Specifies the expression being deleted. */
	export interface DeleteExpressionResponse {

		/** Required */
		Expression: ExpressionStatus;
	}

	/** The result of a <code><a>DeleteExpression</a></code> request. Specifies the expression being deleted. */
	export interface DeleteExpressionResponseFormProperties {
	}
	export function CreateDeleteExpressionResponseFormGroup() {
		return new FormGroup<DeleteExpressionResponseFormProperties>({
		});

	}


	/** The result of a <code><a>DeleteIndexField</a></code> request. */
	export interface DeleteIndexFieldResponse {

		/** Required */
		IndexField: IndexFieldStatus;
	}

	/** The result of a <code><a>DeleteIndexField</a></code> request. */
	export interface DeleteIndexFieldResponseFormProperties {
	}
	export function CreateDeleteIndexFieldResponseFormGroup() {
		return new FormGroup<DeleteIndexFieldResponseFormProperties>({
		});

	}


	/** The result of a <code>DeleteSuggester</code> request. Contains the status of the deleted suggester. */
	export interface DeleteSuggesterResponse {

		/** Required */
		Suggester: SuggesterStatus;
	}

	/** The result of a <code>DeleteSuggester</code> request. Contains the status of the deleted suggester. */
	export interface DeleteSuggesterResponseFormProperties {
	}
	export function CreateDeleteSuggesterResponseFormGroup() {
		return new FormGroup<DeleteSuggesterResponseFormProperties>({
		});

	}


	/** The result of a <code>DescribeAnalysisSchemes</code> request. Contains the analysis schemes configured for the domain specified in the request. */
	export interface DescribeAnalysisSchemesResponse {

		/** Required */
		AnalysisSchemes: Array<AnalysisSchemeStatus>;
	}

	/** The result of a <code>DescribeAnalysisSchemes</code> request. Contains the analysis schemes configured for the domain specified in the request. */
	export interface DescribeAnalysisSchemesResponseFormProperties {
	}
	export function CreateDescribeAnalysisSchemesResponseFormGroup() {
		return new FormGroup<DescribeAnalysisSchemesResponseFormProperties>({
		});

	}


	/** The result of a <code>DescribeAvailabilityOptions</code> request. Indicates whether or not the Multi-AZ option is enabled for the domain specified in the request.  */
	export interface DescribeAvailabilityOptionsResponse {
		AvailabilityOptions?: AvailabilityOptionsStatus;
	}

	/** The result of a <code>DescribeAvailabilityOptions</code> request. Indicates whether or not the Multi-AZ option is enabled for the domain specified in the request.  */
	export interface DescribeAvailabilityOptionsResponseFormProperties {
	}
	export function CreateDescribeAvailabilityOptionsResponseFormGroup() {
		return new FormGroup<DescribeAvailabilityOptionsResponseFormProperties>({
		});

	}


	/** The status and configuration of the domain's availability options. */
	export interface AvailabilityOptionsStatus {

		/** Required */
		Options: boolean;

		/**
		 * The status of domain configuration option.
		 * Required
		 */
		Status: OptionStatus;
	}

	/** The status and configuration of the domain's availability options. */
	export interface AvailabilityOptionsStatusFormProperties {

		/** Required */
		Options: FormControl<boolean | null | undefined>,
	}
	export function CreateAvailabilityOptionsStatusFormGroup() {
		return new FormGroup<AvailabilityOptionsStatusFormProperties>({
			Options: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisabledOperationException {
	}
	export interface DisabledOperationExceptionFormProperties {
	}
	export function CreateDisabledOperationExceptionFormGroup() {
		return new FormGroup<DisabledOperationExceptionFormProperties>({
		});

	}


	/** The result of a <code>DescribeDomainEndpointOptions</code> request. Contains the status and configuration of a search domain's endpoint options.  */
	export interface DescribeDomainEndpointOptionsResponse {
		DomainEndpointOptions?: DomainEndpointOptionsStatus;
	}

	/** The result of a <code>DescribeDomainEndpointOptions</code> request. Contains the status and configuration of a search domain's endpoint options.  */
	export interface DescribeDomainEndpointOptionsResponseFormProperties {
	}
	export function CreateDescribeDomainEndpointOptionsResponseFormGroup() {
		return new FormGroup<DescribeDomainEndpointOptionsResponseFormProperties>({
		});

	}


	/** The configuration and status of the domain's endpoint options. */
	export interface DomainEndpointOptionsStatus {

		/** Required */
		Options: DomainEndpointOptions;

		/** Required */
		Status: OptionStatus;
	}

	/** The configuration and status of the domain's endpoint options. */
	export interface DomainEndpointOptionsStatusFormProperties {
	}
	export function CreateDomainEndpointOptionsStatusFormGroup() {
		return new FormGroup<DomainEndpointOptionsStatusFormProperties>({
		});

	}


	/** The domain's endpoint options. */
	export interface DomainEndpointOptions {
		EnforceHTTPS?: boolean | null;
		TLSSecurityPolicy?: TLSSecurityPolicy;
	}

	/** The domain's endpoint options. */
	export interface DomainEndpointOptionsFormProperties {
		EnforceHTTPS: FormControl<boolean | null | undefined>,
		TLSSecurityPolicy: FormControl<TLSSecurityPolicy | null | undefined>,
	}
	export function CreateDomainEndpointOptionsFormGroup() {
		return new FormGroup<DomainEndpointOptionsFormProperties>({
			EnforceHTTPS: new FormControl<boolean | null | undefined>(undefined),
			TLSSecurityPolicy: new FormControl<TLSSecurityPolicy | null | undefined>(undefined),
		});

	}


	/** The minimum required TLS version. */
	export enum TLSSecurityPolicy { 'Policy-Min-TLS-1-0-2019-07' = 'Policy-Min-TLS-1-0-2019-07', 'Policy-Min-TLS-1-2-2019-07' = 'Policy-Min-TLS-1-2-2019-07' }


	/** The result of a <code>DescribeDomains</code> request. Contains the status of the domains specified in the request or all domains owned by the account. */
	export interface DescribeDomainsResponse {

		/**
		 * A list that contains the status of each requested domain.
		 * Required
		 */
		DomainStatusList: Array<DomainStatus>;
	}

	/** The result of a <code>DescribeDomains</code> request. Contains the status of the domains specified in the request or all domains owned by the account. */
	export interface DescribeDomainsResponseFormProperties {
	}
	export function CreateDescribeDomainsResponseFormGroup() {
		return new FormGroup<DescribeDomainsResponseFormProperties>({
		});

	}


	/** The result of a <code>DescribeExpressions</code> request. Contains the expressions configured for the domain specified in the request. */
	export interface DescribeExpressionsResponse {

		/** Required */
		Expressions: Array<ExpressionStatus>;
	}

	/** The result of a <code>DescribeExpressions</code> request. Contains the expressions configured for the domain specified in the request. */
	export interface DescribeExpressionsResponseFormProperties {
	}
	export function CreateDescribeExpressionsResponseFormGroup() {
		return new FormGroup<DescribeExpressionsResponseFormProperties>({
		});

	}


	/** The result of a <code>DescribeIndexFields</code> request. Contains the index fields configured for the domain specified in the request. */
	export interface DescribeIndexFieldsResponse {

		/** Required */
		IndexFields: Array<IndexFieldStatus>;
	}

	/** The result of a <code>DescribeIndexFields</code> request. Contains the index fields configured for the domain specified in the request. */
	export interface DescribeIndexFieldsResponseFormProperties {
	}
	export function CreateDescribeIndexFieldsResponseFormGroup() {
		return new FormGroup<DescribeIndexFieldsResponseFormProperties>({
		});

	}


	/** The result of a <code>DescribeScalingParameters</code> request. Contains the scaling parameters configured for the domain specified in the request. */
	export interface DescribeScalingParametersResponse {

		/**
		 * The status and configuration of a search domain's scaling parameters.
		 * Required
		 */
		ScalingParameters: ScalingParametersStatus;
	}

	/** The result of a <code>DescribeScalingParameters</code> request. Contains the scaling parameters configured for the domain specified in the request. */
	export interface DescribeScalingParametersResponseFormProperties {
	}
	export function CreateDescribeScalingParametersResponseFormGroup() {
		return new FormGroup<DescribeScalingParametersResponseFormProperties>({
		});

	}


	/** The status and configuration of a search domain's scaling parameters.  */
	export interface ScalingParametersStatus {

		/**
		 * The desired instance type and desired number of replicas of each index partition.
		 * Required
		 */
		Options: ScalingParameters;

		/**
		 * The status of domain configuration option.
		 * Required
		 */
		Status: OptionStatus;
	}

	/** The status and configuration of a search domain's scaling parameters.  */
	export interface ScalingParametersStatusFormProperties {
	}
	export function CreateScalingParametersStatusFormGroup() {
		return new FormGroup<ScalingParametersStatusFormProperties>({
		});

	}


	/** The desired instance type and desired number of replicas of each index partition. */
	export interface ScalingParameters {
		DesiredInstanceType?: PartitionInstanceType;
		DesiredReplicationCount?: number | null;
		DesiredPartitionCount?: number | null;
	}

	/** The desired instance type and desired number of replicas of each index partition. */
	export interface ScalingParametersFormProperties {
		DesiredInstanceType: FormControl<PartitionInstanceType | null | undefined>,
		DesiredReplicationCount: FormControl<number | null | undefined>,
		DesiredPartitionCount: FormControl<number | null | undefined>,
	}
	export function CreateScalingParametersFormGroup() {
		return new FormGroup<ScalingParametersFormProperties>({
			DesiredInstanceType: new FormControl<PartitionInstanceType | null | undefined>(undefined),
			DesiredReplicationCount: new FormControl<number | null | undefined>(undefined),
			DesiredPartitionCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The instance type (such as <code>search.m1.small</code>) on which an index partition is hosted. */
	export enum PartitionInstanceType { 'search.m1.small' = 'search.m1.small', 'search.m1.large' = 'search.m1.large', 'search.m2.xlarge' = 'search.m2.xlarge', 'search.m2.2xlarge' = 'search.m2.2xlarge', 'search.m3.medium' = 'search.m3.medium', 'search.m3.large' = 'search.m3.large', 'search.m3.xlarge' = 'search.m3.xlarge', 'search.m3.2xlarge' = 'search.m3.2xlarge', 'search.small' = 'search.small', 'search.medium' = 'search.medium', 'search.large' = 'search.large', 'search.xlarge' = 'search.xlarge', 'search.2xlarge' = 'search.2xlarge', 'search.previousgeneration.small' = 'search.previousgeneration.small', 'search.previousgeneration.large' = 'search.previousgeneration.large', 'search.previousgeneration.xlarge' = 'search.previousgeneration.xlarge', 'search.previousgeneration.2xlarge' = 'search.previousgeneration.2xlarge' }


	/** The result of a <code>DescribeServiceAccessPolicies</code> request. */
	export interface DescribeServiceAccessPoliciesResponse {

		/** Required */
		AccessPolicies: AccessPoliciesStatus;
	}

	/** The result of a <code>DescribeServiceAccessPolicies</code> request. */
	export interface DescribeServiceAccessPoliciesResponseFormProperties {
	}
	export function CreateDescribeServiceAccessPoliciesResponseFormGroup() {
		return new FormGroup<DescribeServiceAccessPoliciesResponseFormProperties>({
		});

	}


	/** The configured access rules for the domain's document and search endpoints, and the current status of those rules. */
	export interface AccessPoliciesStatus {

		/**
		 * Access rules for a domain's document or search service endpoints. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank">Configuring Access for a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>. The maximum size of a policy document is 100 KB.
		 * Required
		 */
		Options: string;

		/**
		 * The status of domain configuration option.
		 * Required
		 */
		Status: OptionStatus;
	}

	/** The configured access rules for the domain's document and search endpoints, and the current status of those rules. */
	export interface AccessPoliciesStatusFormProperties {

		/**
		 * Access rules for a domain's document or search service endpoints. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank">Configuring Access for a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>. The maximum size of a policy document is 100 KB.
		 * Required
		 */
		Options: FormControl<string | null | undefined>,
	}
	export function CreateAccessPoliciesStatusFormGroup() {
		return new FormGroup<AccessPoliciesStatusFormProperties>({
			Options: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The result of a <code>DescribeSuggesters</code> request. */
	export interface DescribeSuggestersResponse {

		/** Required */
		Suggesters: Array<SuggesterStatus>;
	}

	/** The result of a <code>DescribeSuggesters</code> request. */
	export interface DescribeSuggestersResponseFormProperties {
	}
	export function CreateDescribeSuggestersResponseFormGroup() {
		return new FormGroup<DescribeSuggestersResponseFormProperties>({
		});

	}


	/** The result of an <code>IndexDocuments</code> request. Contains the status of the indexing operation, including the fields being indexed. */
	export interface IndexDocumentsResponse {
		FieldNames?: Array<string>;
	}

	/** The result of an <code>IndexDocuments</code> request. Contains the status of the indexing operation, including the fields being indexed. */
	export interface IndexDocumentsResponseFormProperties {
	}
	export function CreateIndexDocumentsResponseFormGroup() {
		return new FormGroup<IndexDocumentsResponseFormProperties>({
		});

	}


	/** The result of a <code>ListDomainNames</code> request. Contains a list of the domains owned by an account. */
	export interface ListDomainNamesResponse {
		DomainNames?: DomainNameMap;
	}

	/** The result of a <code>ListDomainNames</code> request. Contains a list of the domains owned by an account. */
	export interface ListDomainNamesResponseFormProperties {
	}
	export function CreateListDomainNamesResponseFormGroup() {
		return new FormGroup<ListDomainNamesResponseFormProperties>({
		});

	}


	/** A collection of domain names. */
	export interface DomainNameMap {
	}

	/** A collection of domain names. */
	export interface DomainNameMapFormProperties {
	}
	export function CreateDomainNameMapFormGroup() {
		return new FormGroup<DomainNameMapFormProperties>({
		});

	}


	/** The result of a <code>UpdateAvailabilityOptions</code> request. Contains the status of the domain's availability options.  */
	export interface UpdateAvailabilityOptionsResponse {
		AvailabilityOptions?: AvailabilityOptionsStatus;
	}

	/** The result of a <code>UpdateAvailabilityOptions</code> request. Contains the status of the domain's availability options.  */
	export interface UpdateAvailabilityOptionsResponseFormProperties {
	}
	export function CreateUpdateAvailabilityOptionsResponseFormGroup() {
		return new FormGroup<UpdateAvailabilityOptionsResponseFormProperties>({
		});

	}


	/** The result of a <code>UpdateDomainEndpointOptions</code> request. Contains the configuration and status of the domain's endpoint options.  */
	export interface UpdateDomainEndpointOptionsResponse {
		DomainEndpointOptions?: DomainEndpointOptionsStatus;
	}

	/** The result of a <code>UpdateDomainEndpointOptions</code> request. Contains the configuration and status of the domain's endpoint options.  */
	export interface UpdateDomainEndpointOptionsResponseFormProperties {
	}
	export function CreateUpdateDomainEndpointOptionsResponseFormGroup() {
		return new FormGroup<UpdateDomainEndpointOptionsResponseFormProperties>({
		});

	}


	/** The result of a <code>UpdateScalingParameters</code> request. Contains the status of the newly-configured scaling parameters. */
	export interface UpdateScalingParametersResponse {

		/**
		 * The status and configuration of a search domain's scaling parameters.
		 * Required
		 */
		ScalingParameters: ScalingParametersStatus;
	}

	/** The result of a <code>UpdateScalingParameters</code> request. Contains the status of the newly-configured scaling parameters. */
	export interface UpdateScalingParametersResponseFormProperties {
	}
	export function CreateUpdateScalingParametersResponseFormGroup() {
		return new FormGroup<UpdateScalingParametersResponseFormProperties>({
		});

	}


	/** The result of an <code>UpdateServiceAccessPolicies</code> request. Contains the new access policies. */
	export interface UpdateServiceAccessPoliciesResponse {

		/** Required */
		AccessPolicies: AccessPoliciesStatus;
	}

	/** The result of an <code>UpdateServiceAccessPolicies</code> request. Contains the new access policies. */
	export interface UpdateServiceAccessPoliciesResponseFormProperties {
	}
	export function CreateUpdateServiceAccessPoliciesResponseFormGroup() {
		return new FormGroup<UpdateServiceAccessPoliciesResponseFormProperties>({
		});

	}


	/** Container for the parameters to the <code><a>BuildSuggester</a></code> operation. Specifies the name of the domain you want to update. */
	export interface BuildSuggestersRequest {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: string;
	}

	/** Container for the parameters to the <code><a>BuildSuggester</a></code> operation. Specifies the name of the domain you want to update. */
	export interface BuildSuggestersRequestFormProperties {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateBuildSuggestersRequestFormGroup() {
		return new FormGroup<BuildSuggestersRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
		});

	}


	/** Container for the parameters to the <code><a>CreateDomain</a></code> operation. Specifies a name for the new search domain. */
	export interface CreateDomainRequest {

		/** Required */
		DomainName: string;
	}

	/** Container for the parameters to the <code><a>CreateDomain</a></code> operation. Specifies a name for the new search domain. */
	export interface CreateDomainRequestFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateCreateDomainRequestFormGroup() {
		return new FormGroup<CreateDomainRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Container for the parameters to the <code><a>DefineAnalysisScheme</a></code> operation. Specifies the name of the domain you want to update and the analysis scheme configuration. */
	export interface DefineAnalysisSchemeRequest {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: string;

		/**
		 * Configuration information for an analysis scheme. Each analysis scheme has a unique name and specifies the language of the text to be processed. The following options can be configured for an analysis scheme: <code>Synonyms</code>, <code>Stopwords</code>, <code>StemmingDictionary</code>, <code>JapaneseTokenizationDictionary</code> and <code>AlgorithmicStemming</code>.
		 * Required
		 */
		AnalysisScheme: AnalysisScheme;
	}

	/** Container for the parameters to the <code><a>DefineAnalysisScheme</a></code> operation. Specifies the name of the domain you want to update and the analysis scheme configuration. */
	export interface DefineAnalysisSchemeRequestFormProperties {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateDefineAnalysisSchemeRequestFormGroup() {
		return new FormGroup<DefineAnalysisSchemeRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
		});

	}


	/** Container for the parameters to the <code><a>DefineExpression</a></code> operation. Specifies the name of the domain you want to update and the expression you want to configure. */
	export interface DefineExpressionRequest {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: string;

		/**
		 * A named expression that can be evaluated at search time. Can be used to sort the search results, define other expressions, or return computed information in the search results.
		 * Required
		 */
		Expression: Expression;
	}

	/** Container for the parameters to the <code><a>DefineExpression</a></code> operation. Specifies the name of the domain you want to update and the expression you want to configure. */
	export interface DefineExpressionRequestFormProperties {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateDefineExpressionRequestFormGroup() {
		return new FormGroup<DefineExpressionRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
		});

	}


	/** Container for the parameters to the <code><a>DefineIndexField</a></code> operation. Specifies the name of the domain you want to update and the index field configuration. */
	export interface DefineIndexFieldRequest {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: string;

		/** Required */
		IndexField: IndexField;
	}

	/** Container for the parameters to the <code><a>DefineIndexField</a></code> operation. Specifies the name of the domain you want to update and the index field configuration. */
	export interface DefineIndexFieldRequestFormProperties {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateDefineIndexFieldRequestFormGroup() {
		return new FormGroup<DefineIndexFieldRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
		});

	}


	/** Container for the parameters to the <code><a>DefineSuggester</a></code> operation. Specifies the name of the domain you want to update and the suggester configuration. */
	export interface DefineSuggesterRequest {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: string;

		/**
		 * Configuration information for a search suggester. Each suggester has a unique name and specifies the text field you want to use for suggestions. The following options can be configured for a suggester: <code>FuzzyMatching</code>, <code>SortExpression</code>.
		 * Required
		 */
		Suggester: Suggester;
	}

	/** Container for the parameters to the <code><a>DefineSuggester</a></code> operation. Specifies the name of the domain you want to update and the suggester configuration. */
	export interface DefineSuggesterRequestFormProperties {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateDefineSuggesterRequestFormGroup() {
		return new FormGroup<DefineSuggesterRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
		});

	}


	/** Container for the parameters to the <code><a>DeleteAnalysisScheme</a></code> operation. Specifies the name of the domain you want to update and the analysis scheme you want to delete.  */
	export interface DeleteAnalysisSchemeRequest {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: string;

		/** Required */
		AnalysisSchemeName: string;
	}

	/** Container for the parameters to the <code><a>DeleteAnalysisScheme</a></code> operation. Specifies the name of the domain you want to update and the analysis scheme you want to delete.  */
	export interface DeleteAnalysisSchemeRequestFormProperties {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: FormControl<string | null | undefined>,

		/** Required */
		AnalysisSchemeName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAnalysisSchemeRequestFormGroup() {
		return new FormGroup<DeleteAnalysisSchemeRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
			AnalysisSchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Container for the parameters to the <code><a>DeleteDomain</a></code> operation. Specifies the name of the domain you want to delete. */
	export interface DeleteDomainRequest {

		/** Required */
		DomainName: string;
	}

	/** Container for the parameters to the <code><a>DeleteDomain</a></code> operation. Specifies the name of the domain you want to delete. */
	export interface DeleteDomainRequestFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDomainRequestFormGroup() {
		return new FormGroup<DeleteDomainRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Container for the parameters to the <code><a>DeleteExpression</a></code> operation. Specifies the name of the domain you want to update and the name of the expression you want to delete. */
	export interface DeleteExpressionRequest {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: string;

		/** Required */
		ExpressionName: string;
	}

	/** Container for the parameters to the <code><a>DeleteExpression</a></code> operation. Specifies the name of the domain you want to update and the name of the expression you want to delete. */
	export interface DeleteExpressionRequestFormProperties {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: FormControl<string | null | undefined>,

		/** Required */
		ExpressionName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteExpressionRequestFormGroup() {
		return new FormGroup<DeleteExpressionRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
			ExpressionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Container for the parameters to the <code><a>DeleteIndexField</a></code> operation. Specifies the name of the domain you want to update and the name of the index field you want to delete. */
	export interface DeleteIndexFieldRequest {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: string;

		/** Required */
		IndexFieldName: string;
	}

	/** Container for the parameters to the <code><a>DeleteIndexField</a></code> operation. Specifies the name of the domain you want to update and the name of the index field you want to delete. */
	export interface DeleteIndexFieldRequestFormProperties {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: FormControl<string | null | undefined>,

		/** Required */
		IndexFieldName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteIndexFieldRequestFormGroup() {
		return new FormGroup<DeleteIndexFieldRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
			IndexFieldName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Container for the parameters to the <code><a>DeleteSuggester</a></code> operation. Specifies the name of the domain you want to update and name of the suggester you want to delete. */
	export interface DeleteSuggesterRequest {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: string;

		/** Required */
		SuggesterName: string;
	}

	/** Container for the parameters to the <code><a>DeleteSuggester</a></code> operation. Specifies the name of the domain you want to update and name of the suggester you want to delete. */
	export interface DeleteSuggesterRequestFormProperties {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: FormControl<string | null | undefined>,

		/** Required */
		SuggesterName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSuggesterRequestFormGroup() {
		return new FormGroup<DeleteSuggesterRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
			SuggesterName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Container for the parameters to the <code><a>DescribeAnalysisSchemes</a></code> operation. Specifies the name of the domain you want to describe. To limit the response to particular analysis schemes, specify the names of the analysis schemes you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>.  */
	export interface DescribeAnalysisSchemesRequest {

		/** Required */
		DomainName: string;
		AnalysisSchemeNames?: Array<string>;
		Deployed?: boolean | null;
	}

	/** Container for the parameters to the <code><a>DescribeAnalysisSchemes</a></code> operation. Specifies the name of the domain you want to describe. To limit the response to particular analysis schemes, specify the names of the analysis schemes you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>.  */
	export interface DescribeAnalysisSchemesRequestFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,
		Deployed: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeAnalysisSchemesRequestFormGroup() {
		return new FormGroup<DescribeAnalysisSchemesRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Deployed: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Container for the parameters to the <code><a>DescribeAvailabilityOptions</a></code> operation. Specifies the name of the domain you want to describe. To show the active configuration and exclude any pending changes, set the Deployed option to <code>true</code>. */
	export interface DescribeAvailabilityOptionsRequest {

		/** Required */
		DomainName: string;
		Deployed?: boolean | null;
	}

	/** Container for the parameters to the <code><a>DescribeAvailabilityOptions</a></code> operation. Specifies the name of the domain you want to describe. To show the active configuration and exclude any pending changes, set the Deployed option to <code>true</code>. */
	export interface DescribeAvailabilityOptionsRequestFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,
		Deployed: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeAvailabilityOptionsRequestFormGroup() {
		return new FormGroup<DescribeAvailabilityOptionsRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Deployed: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Container for the parameters to the <code><a>DescribeDomainEndpointOptions</a></code> operation. Specify the name of the domain you want to describe. To show the active configuration and exclude any pending changes, set the Deployed option to <code>true</code>. */
	export interface DescribeDomainEndpointOptionsRequest {

		/** Required */
		DomainName: string;
		Deployed?: boolean | null;
	}

	/** Container for the parameters to the <code><a>DescribeDomainEndpointOptions</a></code> operation. Specify the name of the domain you want to describe. To show the active configuration and exclude any pending changes, set the Deployed option to <code>true</code>. */
	export interface DescribeDomainEndpointOptionsRequestFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,
		Deployed: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeDomainEndpointOptionsRequestFormGroup() {
		return new FormGroup<DescribeDomainEndpointOptionsRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Deployed: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Container for the parameters to the <code><a>DescribeDomains</a></code> operation. By default shows the status of all domains. To restrict the response to particular domains, specify the names of the domains you want to describe. */
	export interface DescribeDomainsRequest {
		DomainNames?: Array<string>;
	}

	/** Container for the parameters to the <code><a>DescribeDomains</a></code> operation. By default shows the status of all domains. To restrict the response to particular domains, specify the names of the domains you want to describe. */
	export interface DescribeDomainsRequestFormProperties {
	}
	export function CreateDescribeDomainsRequestFormGroup() {
		return new FormGroup<DescribeDomainsRequestFormProperties>({
		});

	}


	/** Container for the parameters to the <code><a>DescribeDomains</a></code> operation. Specifies the name of the domain you want to describe. To restrict the response to particular expressions, specify the names of the expressions you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>. */
	export interface DescribeExpressionsRequest {

		/** Required */
		DomainName: string;
		ExpressionNames?: Array<string>;
		Deployed?: boolean | null;
	}

	/** Container for the parameters to the <code><a>DescribeDomains</a></code> operation. Specifies the name of the domain you want to describe. To restrict the response to particular expressions, specify the names of the expressions you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>. */
	export interface DescribeExpressionsRequestFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,
		Deployed: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeExpressionsRequestFormGroup() {
		return new FormGroup<DescribeExpressionsRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Deployed: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Container for the parameters to the <code><a>DescribeIndexFields</a></code> operation. Specifies the name of the domain you want to describe. To restrict the response to particular index fields, specify the names of the index fields you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>. */
	export interface DescribeIndexFieldsRequest {

		/** Required */
		DomainName: string;
		FieldNames?: Array<string>;
		Deployed?: boolean | null;
	}

	/** Container for the parameters to the <code><a>DescribeIndexFields</a></code> operation. Specifies the name of the domain you want to describe. To restrict the response to particular index fields, specify the names of the index fields you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>. */
	export interface DescribeIndexFieldsRequestFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,
		Deployed: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeIndexFieldsRequestFormGroup() {
		return new FormGroup<DescribeIndexFieldsRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Deployed: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Container for the parameters to the <code><a>DescribeScalingParameters</a></code> operation. Specifies the name of the domain you want to describe.  */
	export interface DescribeScalingParametersRequest {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: string;
	}

	/** Container for the parameters to the <code><a>DescribeScalingParameters</a></code> operation. Specifies the name of the domain you want to describe.  */
	export interface DescribeScalingParametersRequestFormProperties {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeScalingParametersRequestFormGroup() {
		return new FormGroup<DescribeScalingParametersRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
		});

	}


	/** Container for the parameters to the <code><a>DescribeServiceAccessPolicies</a></code> operation. Specifies the name of the domain you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>. */
	export interface DescribeServiceAccessPoliciesRequest {

		/** Required */
		DomainName: string;
		Deployed?: boolean | null;
	}

	/** Container for the parameters to the <code><a>DescribeServiceAccessPolicies</a></code> operation. Specifies the name of the domain you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>. */
	export interface DescribeServiceAccessPoliciesRequestFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,
		Deployed: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeServiceAccessPoliciesRequestFormGroup() {
		return new FormGroup<DescribeServiceAccessPoliciesRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Deployed: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Container for the parameters to the <code><a>DescribeSuggester</a></code> operation. Specifies the name of the domain you want to describe. To restrict the response to particular suggesters, specify the names of the suggesters you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>. */
	export interface DescribeSuggestersRequest {

		/** Required */
		DomainName: string;
		SuggesterNames?: Array<string>;
		Deployed?: boolean | null;
	}

	/** Container for the parameters to the <code><a>DescribeSuggester</a></code> operation. Specifies the name of the domain you want to describe. To restrict the response to particular suggesters, specify the names of the suggesters you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>. */
	export interface DescribeSuggestersRequestFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,
		Deployed: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeSuggestersRequestFormGroup() {
		return new FormGroup<DescribeSuggestersRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Deployed: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Container for the parameters to the <code><a>IndexDocuments</a></code> operation. Specifies the name of the domain you want to re-index. */
	export interface IndexDocumentsRequest {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: string;
	}

	/** Container for the parameters to the <code><a>IndexDocuments</a></code> operation. Specifies the name of the domain you want to re-index. */
	export interface IndexDocumentsRequestFormProperties {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateIndexDocumentsRequestFormGroup() {
		return new FormGroup<IndexDocumentsRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
		});

	}


	/** Container for the parameters to the <code><a>UpdateAvailabilityOptions</a></code> operation. Specifies the name of the domain you want to update and the Multi-AZ availability option. */
	export interface UpdateAvailabilityOptionsRequest {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: string;

		/** Required */
		MultiAZ: boolean;
	}

	/** Container for the parameters to the <code><a>UpdateAvailabilityOptions</a></code> operation. Specifies the name of the domain you want to update and the Multi-AZ availability option. */
	export interface UpdateAvailabilityOptionsRequestFormProperties {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: FormControl<string | null | undefined>,

		/** Required */
		MultiAZ: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateAvailabilityOptionsRequestFormGroup() {
		return new FormGroup<UpdateAvailabilityOptionsRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
			MultiAZ: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Container for the parameters to the <code><a>UpdateDomainEndpointOptions</a></code> operation. Specifies the name of the domain you want to update and the domain endpoint options. */
	export interface UpdateDomainEndpointOptionsRequest {

		/** Required */
		DomainName: string;

		/** Required */
		DomainEndpointOptions: DomainEndpointOptions;
	}

	/** Container for the parameters to the <code><a>UpdateDomainEndpointOptions</a></code> operation. Specifies the name of the domain you want to update and the domain endpoint options. */
	export interface UpdateDomainEndpointOptionsRequestFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDomainEndpointOptionsRequestFormGroup() {
		return new FormGroup<UpdateDomainEndpointOptionsRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Container for the parameters to the <code><a>UpdateScalingParameters</a></code> operation. Specifies the name of the domain you want to update and the scaling parameters you want to configure. */
	export interface UpdateScalingParametersRequest {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: string;

		/**
		 * The desired instance type and desired number of replicas of each index partition.
		 * Required
		 */
		ScalingParameters: ScalingParameters;
	}

	/** Container for the parameters to the <code><a>UpdateScalingParameters</a></code> operation. Specifies the name of the domain you want to update and the scaling parameters you want to configure. */
	export interface UpdateScalingParametersRequestFormProperties {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateScalingParametersRequestFormGroup() {
		return new FormGroup<UpdateScalingParametersRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
		});

	}


	/** Container for the parameters to the <code><a>UpdateServiceAccessPolicies</a></code> operation. Specifies the name of the domain you want to update and the access rules you want to configure. */
	export interface UpdateServiceAccessPoliciesRequest {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: string;

		/** Required */
		AccessPolicies: string;
	}

	/** Container for the parameters to the <code><a>UpdateServiceAccessPolicies</a></code> operation. Specifies the name of the domain you want to update and the access rules you want to configure. */
	export interface UpdateServiceAccessPoliciesRequestFormProperties {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: FormControl<string | null | undefined>,

		/** Required */
		AccessPolicies: FormControl<string | null | undefined>,
	}
	export function CreateUpdateServiceAccessPoliciesRequestFormGroup() {
		return new FormGroup<UpdateServiceAccessPoliciesRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
			AccessPolicies: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Indexes the search suggestions. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html#configuring-suggesters">Configuring Suggesters</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Get #Action=BuildSuggesters
		 * @param {string} DomainName Min length: 3
		 *     Max length: 28
		 * @return {void} Success
		 */
		GET_BuildSuggesters(DomainName: string, Action: GET_BuildSuggestersAction, Version: GET_BuildSuggestersVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=BuildSuggesters?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/creating-domains.html" target="_blank">Creating a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Get #Action=CreateDomain
		 * @param {string} DomainName A name for the domain you are creating. Allowed characters are a-z (lower-case letters), 0-9, and hyphen (-). Domain names must start with a letter or number and be at least 3 and no more than 28 characters long.
		 *     Min length: 3    Max length: 28
		 * @return {void} Success
		 */
		GET_CreateDomain(DomainName: string, Action: GET_CreateDomainAction, Version: GET_BuildSuggestersVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateDomain?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Configures an analysis scheme that can be applied to a <code>text</code> or <code>text-array</code> field to define language-specific text processing options. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Get #Action=DefineAnalysisScheme
		 * @param {string} DomainName Min length: 3
		 *     Max length: 28
		 * @return {void} Success
		 */
		GET_DefineAnalysisScheme(DomainName: string, AnalysisScheme: GET_DefineAnalysisSchemeAnalysisScheme, Action: GET_DefineAnalysisSchemeAction, Version: GET_BuildSuggestersVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DefineAnalysisScheme?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&AnalysisScheme=' + AnalysisScheme + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Configures an <code><a>Expression</a></code> for the search domain. Used to create new expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Get #Action=DefineExpression
		 * @param {string} DomainName Min length: 3
		 *     Max length: 28
		 * @return {void} Success
		 */
		GET_DefineExpression(DomainName: string, Expression: GET_DefineExpressionExpression, Action: GET_DefineExpressionAction, Version: GET_BuildSuggestersVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DefineExpression?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&Expression=' + Expression + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Configures an <code><a>IndexField</a></code> for the search domain. Used to create new fields and modify existing ones. You must specify the name of the domain you are configuring and an index field configuration. The index field configuration specifies a unique name, the index field type, and the options you want to configure for the field. The options you can specify depend on the <code><a>IndexFieldType</a></code>. If the field exists, the new configuration replaces the old one. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Get #Action=DefineIndexField
		 * @param {string} DomainName Min length: 3
		 *     Max length: 28
		 * @param {GET_DefineIndexFieldIndexField} IndexField The index field and field options you want to configure. 
		 * @return {void} Success
		 */
		GET_DefineIndexField(DomainName: string, IndexField: GET_DefineIndexFieldIndexField, Action: GET_DefineIndexFieldAction, Version: GET_BuildSuggestersVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DefineIndexField?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&IndexField=' + IndexField + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Configures a suggester for a domain. A suggester enables you to display possible matches before users finish typing their queries. When you configure a suggester, you must specify the name of the text field you want to search for possible matches and a unique name for the suggester. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Get #Action=DefineSuggester
		 * @param {string} DomainName Min length: 3
		 *     Max length: 28
		 * @return {void} Success
		 */
		GET_DefineSuggester(DomainName: string, Suggester: GET_DefineSuggesterSuggester, Action: GET_DefineSuggesterAction, Version: GET_BuildSuggestersVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DefineSuggester?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&Suggester=' + Suggester + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an analysis scheme. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Get #Action=DeleteAnalysisScheme
		 * @param {string} DomainName Min length: 3
		 *     Max length: 28
		 * @param {string} AnalysisSchemeName The name of the analysis scheme you want to delete.
		 *     Min length: 1    Max length: 64
		 * @return {void} Success
		 */
		GET_DeleteAnalysisScheme(DomainName: string, AnalysisSchemeName: string, Action: GET_DeleteAnalysisSchemeAction, Version: GET_BuildSuggestersVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteAnalysisScheme?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&AnalysisSchemeName=' + (AnalysisSchemeName == null ? '' : encodeURIComponent(AnalysisSchemeName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Permanently deletes a search domain and all of its data. Once a domain has been deleted, it cannot be recovered. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/deleting-domains.html" target="_blank">Deleting a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Get #Action=DeleteDomain
		 * @param {string} DomainName The name of the domain you want to permanently delete.
		 *     Min length: 3    Max length: 28
		 * @return {void} Success
		 */
		GET_DeleteDomain(DomainName: string, Action: GET_DeleteDomainAction, Version: GET_BuildSuggestersVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteDomain?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes an <code><a>Expression</a></code> from the search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Get #Action=DeleteExpression
		 * @param {string} DomainName Min length: 3
		 *     Max length: 28
		 * @param {string} ExpressionName The name of the <code><a>Expression</a></code> to delete.
		 *     Min length: 1    Max length: 64
		 * @return {void} Success
		 */
		GET_DeleteExpression(DomainName: string, ExpressionName: string, Action: GET_DeleteExpressionAction, Version: GET_BuildSuggestersVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteExpression?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&ExpressionName=' + (ExpressionName == null ? '' : encodeURIComponent(ExpressionName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes an <code><a>IndexField</a></code> from the search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Get #Action=DeleteIndexField
		 * @param {string} DomainName Min length: 3
		 *     Max length: 28
		 * @param {string} IndexFieldName The name of the index field your want to remove from the domain's indexing options.
		 *     Min length: 1    Max length: 64
		 * @return {void} Success
		 */
		GET_DeleteIndexField(DomainName: string, IndexFieldName: string, Action: GET_DeleteIndexFieldAction, Version: GET_BuildSuggestersVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteIndexField?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&IndexFieldName=' + (IndexFieldName == null ? '' : encodeURIComponent(IndexFieldName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a suggester. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Get #Action=DeleteSuggester
		 * @param {string} DomainName Min length: 3
		 *     Max length: 28
		 * @param {string} SuggesterName Specifies the name of the suggester you want to delete.
		 *     Min length: 1    Max length: 64
		 * @return {void} Success
		 */
		GET_DeleteSuggester(DomainName: string, SuggesterName: string, Action: GET_DeleteSuggesterAction, Version: GET_BuildSuggestersVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteSuggester?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&SuggesterName=' + (SuggesterName == null ? '' : encodeURIComponent(SuggesterName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the analysis schemes configured for a domain. An analysis scheme defines language-specific text processing options for a <code>text</code> field. Can be limited to specific analysis schemes by name. By default, shows all analysis schemes and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Get #Action=DescribeAnalysisSchemes
		 * @param {string} DomainName The name of the domain you want to describe.
		 *     Min length: 3    Max length: 28
		 * @param {Array<string>} AnalysisSchemeNames The analysis schemes you want to describe.
		 * @param {boolean} Deployed Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.
		 * @return {void} Success
		 */
		GET_DescribeAnalysisSchemes(DomainName: string, AnalysisSchemeNames: Array<string> | null | undefined, Deployed: boolean | null | undefined, Action: GET_DescribeAnalysisSchemesAction, Version: GET_BuildSuggestersVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeAnalysisSchemes?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&' + AnalysisSchemeNames?.map(z => `AnalysisSchemeNames=${encodeURIComponent(z)}`).join('&') + '&Deployed=' + Deployed + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Get #Action=DescribeAvailabilityOptions
		 * @param {string} DomainName The name of the domain you want to describe.
		 *     Min length: 3    Max length: 28
		 * @param {boolean} Deployed Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.
		 * @return {void} Success
		 */
		GET_DescribeAvailabilityOptions(DomainName: string, Deployed: boolean | null | undefined, Action: GET_DescribeAvailabilityOptionsAction, Version: GET_BuildSuggestersVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeAvailabilityOptions?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&Deployed=' + Deployed + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html" target="_blank">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Get #Action=DescribeDomainEndpointOptions
		 * @param {string} DomainName A string that represents the name of a domain.
		 *     Min length: 3    Max length: 28
		 * @param {boolean} Deployed Whether to retrieve the latest configuration (which might be in a Processing state) or the current, active configuration. Defaults to <code>false</code>.
		 * @return {void} Success
		 */
		GET_DescribeDomainEndpointOptions(DomainName: string, Deployed: boolean | null | undefined, Action: GET_DescribeDomainEndpointOptionsAction, Version: GET_BuildSuggestersVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeDomainEndpointOptions?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&Deployed=' + Deployed + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default. To get the number of searchable documents in a domain, use the console or submit a <code>matchall</code> request to your domain's search endpoint: <code>q=matchall&amp;amp;q.parser=structured&amp;amp;size=0</code>. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Information about a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Get #Action=DescribeDomains
		 * @param {Array<string>} DomainNames The names of the domains you want to include in the response.
		 * @return {void} Success
		 */
		GET_DescribeDomains(DomainNames: Array<string> | null | undefined, Action: GET_DescribeDomainsAction, Version: GET_BuildSuggestersVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeDomains?' + DomainNames?.map(z => `DomainNames=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the expressions configured for the search domain. Can be limited to specific expressions by name. By default, shows all expressions and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Get #Action=DescribeExpressions
		 * @param {string} DomainName The name of the domain you want to describe.
		 *     Min length: 3    Max length: 28
		 * @param {Array<string>} ExpressionNames Limits the <code><a>DescribeExpressions</a></code> response to the specified expressions. If not specified, all expressions are shown.
		 * @param {boolean} Deployed Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.
		 * @return {void} Success
		 */
		GET_DescribeExpressions(DomainName: string, ExpressionNames: Array<string> | null | undefined, Deployed: boolean | null | undefined, Action: GET_DescribeExpressionsAction, Version: GET_BuildSuggestersVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeExpressions?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&' + ExpressionNames?.map(z => `ExpressionNames=${encodeURIComponent(z)}`).join('&') + '&Deployed=' + Deployed + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. By default, shows all fields and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Domain Information</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Get #Action=DescribeIndexFields
		 * @param {string} DomainName The name of the domain you want to describe.
		 *     Min length: 3    Max length: 28
		 * @param {Array<string>} FieldNames A list of the index fields you want to describe. If not specified, information is returned for all configured index fields.
		 * @param {boolean} Deployed Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.
		 * @return {void} Success
		 */
		GET_DescribeIndexFields(DomainName: string, FieldNames: Array<string> | null | undefined, Deployed: boolean | null | undefined, Action: GET_DescribeIndexFieldsAction, Version: GET_BuildSuggestersVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeIndexFields?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&' + FieldNames?.map(z => `FieldNames=${encodeURIComponent(z)}`).join('&') + '&Deployed=' + Deployed + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the scaling parameters configured for a domain. A domain's scaling parameters specify the desired search instance type and replication count. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Get #Action=DescribeScalingParameters
		 * @param {string} DomainName Min length: 3
		 *     Max length: 28
		 * @return {void} Success
		 */
		GET_DescribeScalingParameters(DomainName: string, Action: GET_DescribeScalingParametersAction, Version: GET_BuildSuggestersVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeScalingParameters?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about the access policies that control access to the domain's document and search endpoints. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank">Configuring Access for a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Get #Action=DescribeServiceAccessPolicies
		 * @param {string} DomainName The name of the domain you want to describe.
		 *     Min length: 3    Max length: 28
		 * @param {boolean} Deployed Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.
		 * @return {void} Success
		 */
		GET_DescribeServiceAccessPolicies(DomainName: string, Deployed: boolean | null | undefined, Action: GET_DescribeServiceAccessPoliciesAction, Version: GET_BuildSuggestersVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeServiceAccessPolicies?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&Deployed=' + Deployed + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the suggesters configured for a domain. A suggester enables you to display possible matches before users finish typing their queries. Can be limited to specific suggesters by name. By default, shows all suggesters and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Get #Action=DescribeSuggesters
		 * @param {string} DomainName The name of the domain you want to describe.
		 *     Min length: 3    Max length: 28
		 * @param {Array<string>} SuggesterNames The suggesters you want to describe.
		 * @param {boolean} Deployed Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.
		 * @return {void} Success
		 */
		GET_DescribeSuggesters(DomainName: string, SuggesterNames: Array<string> | null | undefined, Deployed: boolean | null | undefined, Action: GET_DescribeSuggestersAction, Version: GET_BuildSuggestersVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeSuggesters?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&' + SuggesterNames?.map(z => `SuggesterNames=${encodeURIComponent(z)}`).join('&') + '&Deployed=' + Deployed + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Tells the search domain to start indexing its documents using the latest indexing options. This operation must be invoked to activate options whose <a>OptionStatus</a> is <code>RequiresIndexDocuments</code>.
		 * Get #Action=IndexDocuments
		 * @param {string} DomainName Min length: 3
		 *     Max length: 28
		 * @return {void} Success
		 */
		GET_IndexDocuments(DomainName: string, Action: GET_IndexDocumentsAction, Version: GET_BuildSuggestersVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=IndexDocuments?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all search domains owned by an account.
		 * Get #Action=ListDomainNames
		 * @return {void} Success
		 */
		GET_ListDomainNames(Action: GET_ListDomainNamesAction, Version: GET_BuildSuggestersVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListDomainNames?Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all search domains owned by an account.
		 * Post #Action=ListDomainNames
		 * @return {void} Success
		 */
		POST_ListDomainNames(Action: GET_ListDomainNamesAction, Version: GET_BuildSuggestersVersion): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#Action=ListDomainNames?Action=' + Action + '&Version=' + Version, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Get #Action=UpdateAvailabilityOptions
		 * @param {string} DomainName Min length: 3
		 *     Max length: 28
		 * @param {boolean} MultiAZ You expand an existing search domain to a second Availability Zone by setting the Multi-AZ option to true. Similarly, you can turn off the Multi-AZ option to downgrade the domain to a single Availability Zone by setting the Multi-AZ option to <code>false</code>. 
		 * @return {void} Success
		 */
		GET_UpdateAvailabilityOptions(DomainName: string, MultiAZ: boolean, Action: GET_UpdateAvailabilityOptionsAction, Version: GET_BuildSuggestersVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateAvailabilityOptions?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&MultiAZ=' + MultiAZ + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html" target="_blank">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Get #Action=UpdateDomainEndpointOptions
		 * @param {string} DomainName A string that represents the name of a domain.
		 *     Min length: 3    Max length: 28
		 * @param {GET_UpdateDomainEndpointOptionsDomainEndpointOptions} DomainEndpointOptions Whether to require that all requests to the domain arrive over HTTPS. We recommend Policy-Min-TLS-1-2-2019-07 for TLSSecurityPolicy. For compatibility with older clients, the default is Policy-Min-TLS-1-0-2019-07. 
		 * @return {void} Success
		 */
		GET_UpdateDomainEndpointOptions(DomainName: string, DomainEndpointOptions: GET_UpdateDomainEndpointOptionsDomainEndpointOptions, Action: GET_UpdateDomainEndpointOptionsAction, Version: GET_BuildSuggestersVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateDomainEndpointOptions?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&DomainEndpointOptions=' + DomainEndpointOptions + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Configures scaling parameters for a domain. A domain's scaling parameters specify the desired search instance type and replication count. Amazon CloudSearch will still automatically scale your domain based on the volume of data and traffic, but not below the desired instance type and replication count. If the Multi-AZ option is enabled, these values control the resources used per Availability Zone. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Get #Action=UpdateScalingParameters
		 * @param {string} DomainName Min length: 3
		 *     Max length: 28
		 * @return {void} Success
		 */
		GET_UpdateScalingParameters(DomainName: string, ScalingParameters: GET_UpdateScalingParametersScalingParameters, Action: GET_UpdateScalingParametersAction, Version: GET_BuildSuggestersVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateScalingParameters?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&ScalingParameters=' + ScalingParameters + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Configures the access rules that control access to the domain's document and search endpoints. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank"> Configuring Access for an Amazon CloudSearch Domain</a>.
		 * Get #Action=UpdateServiceAccessPolicies
		 * @param {string} DomainName Min length: 3
		 *     Max length: 28
		 * @param {string} AccessPolicies The access rules you want to configure. These rules replace any existing rules. 
		 * @return {void} Success
		 */
		GET_UpdateServiceAccessPolicies(DomainName: string, AccessPolicies: string, Action: GET_UpdateServiceAccessPoliciesAction, Version: GET_BuildSuggestersVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateServiceAccessPolicies?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&AccessPolicies=' + (AccessPolicies == null ? '' : encodeURIComponent(AccessPolicies)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}
	}

	export enum GET_BuildSuggestersAction { BuildSuggesters = 'BuildSuggesters' }

	export enum GET_BuildSuggestersVersion { '2013-01-01' = '2013-01-01' }

	export enum GET_CreateDomainAction { CreateDomain = 'CreateDomain' }

	export interface GET_DefineAnalysisSchemeAnalysisScheme {

		/**
		 * Names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore).
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		AnalysisSchemeName: string;

		/**
		 * An <a href="http://tools.ietf.org/html/rfc4646" target="_blank">IETF RFC 4646</a> language code or <code>mul</code> for multiple languages.
		 * Required
		 */
		AnalysisSchemeLanguage: AnalysisSchemeAnalysisSchemeLanguage;

		/** Synonyms, stopwords, and stemming options for an analysis scheme. Includes tokenization dictionary for Japanese. */
		AnalysisOptions?: AnalysisOptions;
	}
	export interface GET_DefineAnalysisSchemeAnalysisSchemeFormProperties {

		/**
		 * Names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore).
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		AnalysisSchemeName: FormControl<string | null | undefined>,

		/**
		 * An <a href="http://tools.ietf.org/html/rfc4646" target="_blank">IETF RFC 4646</a> language code or <code>mul</code> for multiple languages.
		 * Required
		 */
		AnalysisSchemeLanguage: FormControl<AnalysisSchemeAnalysisSchemeLanguage | null | undefined>,
	}
	export function CreateGET_DefineAnalysisSchemeAnalysisSchemeFormGroup() {
		return new FormGroup<GET_DefineAnalysisSchemeAnalysisSchemeFormProperties>({
			AnalysisSchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-z][a-z0-9_]*')]),
			AnalysisSchemeLanguage: new FormControl<AnalysisSchemeAnalysisSchemeLanguage | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum GET_DefineAnalysisSchemeAction { DefineAnalysisScheme = 'DefineAnalysisScheme' }

	export interface GET_DefineExpressionExpression {

		/**
		 * Names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore).
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		ExpressionName: string;

		/**
		 * The expression to evaluate for sorting while processing a search request. The <code>Expression</code> syntax is based on JavaScript expressions. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Required
		 * Min length: 1
		 * Max length: 10240
		 */
		ExpressionValue: string;
	}
	export interface GET_DefineExpressionExpressionFormProperties {

		/**
		 * Names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore).
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		ExpressionName: FormControl<string | null | undefined>,

		/**
		 * The expression to evaluate for sorting while processing a search request. The <code>Expression</code> syntax is based on JavaScript expressions. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Required
		 * Min length: 1
		 * Max length: 10240
		 */
		ExpressionValue: FormControl<string | null | undefined>,
	}
	export function CreateGET_DefineExpressionExpressionFormGroup() {
		return new FormGroup<GET_DefineExpressionExpressionFormProperties>({
			ExpressionName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-z][a-z0-9_]*')]),
			ExpressionValue: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(10240)]),
		});

	}

	export enum GET_DefineExpressionAction { DefineExpression = 'DefineExpression' }

	export interface GET_DefineIndexFieldIndexField {

		/** Required */
		IndexFieldName: string;

		/**
		 * The type of field. The valid options for a field depend on the field type. For more information about the supported field types, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Required
		 */
		IndexFieldType: IndexFieldIndexFieldType;

		/** Options for a 64-bit signed integer field. Present if <code>IndexFieldType</code> specifies the field is of type <code>int</code>. All options are enabled by default. */
		IntOptions?: IntOptions;

		/** Options for a double-precision 64-bit floating point field. Present if <code>IndexFieldType</code> specifies the field is of type <code>double</code>. All options are enabled by default. */
		DoubleOptions?: DoubleOptions;

		/** Options for literal field. Present if <code>IndexFieldType</code> specifies the field is of type <code>literal</code>. All options are enabled by default. */
		LiteralOptions?: LiteralOptions;

		/** Options for text field. Present if <code>IndexFieldType</code> specifies the field is of type <code>text</code>. A <code>text</code> field is always searchable. All options are enabled by default. */
		TextOptions?: TextOptions;

		/** Options for a date field. Dates and times are specified in UTC (Coordinated Universal Time) according to IETF RFC3339: yyyy-mm-ddT00:00:00Z. Present if <code>IndexFieldType</code> specifies the field is of type <code>date</code>. All options are enabled by default. */
		DateOptions?: DateOptions;

		/** Options for a latlon field. A latlon field contains a location stored as a latitude and longitude value pair. Present if <code>IndexFieldType</code> specifies the field is of type <code>latlon</code>. All options are enabled by default. */
		LatLonOptions?: LatLonOptions;

		/** Options for a field that contains an array of 64-bit signed integers. Present if <code>IndexFieldType</code> specifies the field is of type <code>int-array</code>. All options are enabled by default. */
		IntArrayOptions?: IntArrayOptions;

		/** Options for a field that contains an array of double-precision 64-bit floating point values. Present if <code>IndexFieldType</code> specifies the field is of type <code>double-array</code>. All options are enabled by default. */
		DoubleArrayOptions?: DoubleArrayOptions;

		/** Options for a field that contains an array of literal strings. Present if <code>IndexFieldType</code> specifies the field is of type <code>literal-array</code>. All options are enabled by default. */
		LiteralArrayOptions?: LiteralArrayOptions;

		/** Options for a field that contains an array of text strings. Present if <code>IndexFieldType</code> specifies the field is of type <code>text-array</code>. A <code>text-array</code> field is always searchable. All options are enabled by default. */
		TextArrayOptions?: TextArrayOptions;

		/** Options for a field that contains an array of dates. Present if <code>IndexFieldType</code> specifies the field is of type <code>date-array</code>. All options are enabled by default. */
		DateArrayOptions?: DateArrayOptions;
	}
	export interface GET_DefineIndexFieldIndexFieldFormProperties {

		/** Required */
		IndexFieldName: FormControl<string | null | undefined>,

		/**
		 * The type of field. The valid options for a field depend on the field type. For more information about the supported field types, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Required
		 */
		IndexFieldType: FormControl<IndexFieldIndexFieldType | null | undefined>,
	}
	export function CreateGET_DefineIndexFieldIndexFieldFormGroup() {
		return new FormGroup<GET_DefineIndexFieldIndexFieldFormProperties>({
			IndexFieldName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IndexFieldType: new FormControl<IndexFieldIndexFieldType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum GET_DefineIndexFieldAction { DefineIndexField = 'DefineIndexField' }

	export interface GET_DefineSuggesterSuggester {

		/**
		 * Names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore).
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		SuggesterName: string;

		/**
		 * Options for a search suggester.
		 * Required
		 */
		DocumentSuggesterOptions: DocumentSuggesterOptions;
	}
	export interface GET_DefineSuggesterSuggesterFormProperties {

		/**
		 * Names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore).
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		SuggesterName: FormControl<string | null | undefined>,
	}
	export function CreateGET_DefineSuggesterSuggesterFormGroup() {
		return new FormGroup<GET_DefineSuggesterSuggesterFormProperties>({
			SuggesterName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-z][a-z0-9_]*')]),
		});

	}

	export enum GET_DefineSuggesterAction { DefineSuggester = 'DefineSuggester' }

	export enum GET_DeleteAnalysisSchemeAction { DeleteAnalysisScheme = 'DeleteAnalysisScheme' }

	export enum GET_DeleteDomainAction { DeleteDomain = 'DeleteDomain' }

	export enum GET_DeleteExpressionAction { DeleteExpression = 'DeleteExpression' }

	export enum GET_DeleteIndexFieldAction { DeleteIndexField = 'DeleteIndexField' }

	export enum GET_DeleteSuggesterAction { DeleteSuggester = 'DeleteSuggester' }

	export enum GET_DescribeAnalysisSchemesAction { DescribeAnalysisSchemes = 'DescribeAnalysisSchemes' }

	export enum GET_DescribeAvailabilityOptionsAction { DescribeAvailabilityOptions = 'DescribeAvailabilityOptions' }

	export enum GET_DescribeDomainEndpointOptionsAction { DescribeDomainEndpointOptions = 'DescribeDomainEndpointOptions' }

	export enum GET_DescribeDomainsAction { DescribeDomains = 'DescribeDomains' }

	export enum GET_DescribeExpressionsAction { DescribeExpressions = 'DescribeExpressions' }

	export enum GET_DescribeIndexFieldsAction { DescribeIndexFields = 'DescribeIndexFields' }

	export enum GET_DescribeScalingParametersAction { DescribeScalingParameters = 'DescribeScalingParameters' }

	export enum GET_DescribeServiceAccessPoliciesAction { DescribeServiceAccessPolicies = 'DescribeServiceAccessPolicies' }

	export enum GET_DescribeSuggestersAction { DescribeSuggesters = 'DescribeSuggesters' }

	export enum GET_IndexDocumentsAction { IndexDocuments = 'IndexDocuments' }

	export enum GET_ListDomainNamesAction { ListDomainNames = 'ListDomainNames' }

	export enum GET_UpdateAvailabilityOptionsAction { UpdateAvailabilityOptions = 'UpdateAvailabilityOptions' }

	export interface GET_UpdateDomainEndpointOptionsDomainEndpointOptions {
		EnforceHTTPS?: boolean | null;
		TLSSecurityPolicy?: TLSSecurityPolicy;
	}
	export interface GET_UpdateDomainEndpointOptionsDomainEndpointOptionsFormProperties {
		EnforceHTTPS: FormControl<boolean | null | undefined>,
		TLSSecurityPolicy: FormControl<TLSSecurityPolicy | null | undefined>,
	}
	export function CreateGET_UpdateDomainEndpointOptionsDomainEndpointOptionsFormGroup() {
		return new FormGroup<GET_UpdateDomainEndpointOptionsDomainEndpointOptionsFormProperties>({
			EnforceHTTPS: new FormControl<boolean | null | undefined>(undefined),
			TLSSecurityPolicy: new FormControl<TLSSecurityPolicy | null | undefined>(undefined),
		});

	}

	export enum GET_UpdateDomainEndpointOptionsAction { UpdateDomainEndpointOptions = 'UpdateDomainEndpointOptions' }

	export interface GET_UpdateScalingParametersScalingParameters {
		DesiredInstanceType?: PartitionInstanceType;
		DesiredReplicationCount?: number | null;
		DesiredPartitionCount?: number | null;
	}
	export interface GET_UpdateScalingParametersScalingParametersFormProperties {
		DesiredInstanceType: FormControl<PartitionInstanceType | null | undefined>,
		DesiredReplicationCount: FormControl<number | null | undefined>,
		DesiredPartitionCount: FormControl<number | null | undefined>,
	}
	export function CreateGET_UpdateScalingParametersScalingParametersFormGroup() {
		return new FormGroup<GET_UpdateScalingParametersScalingParametersFormProperties>({
			DesiredInstanceType: new FormControl<PartitionInstanceType | null | undefined>(undefined),
			DesiredReplicationCount: new FormControl<number | null | undefined>(undefined),
			DesiredPartitionCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GET_UpdateScalingParametersAction { UpdateScalingParameters = 'UpdateScalingParameters' }

	export enum GET_UpdateServiceAccessPoliciesAction { UpdateServiceAccessPolicies = 'UpdateServiceAccessPolicies' }

}

