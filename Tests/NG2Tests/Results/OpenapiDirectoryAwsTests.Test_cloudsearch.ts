import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** The result of a <code>BuildSuggester</code> request. Contains a list of the fields used for suggestions. */
	export interface BuildSuggestersResponse {

		/** A list of field names. */
		FieldNames?: Array<string>;
	}

	export interface BaseException {
	}

	export interface InternalException {
	}

	export interface ResourceNotFoundException {
	}


	/** The result of a <code>CreateDomainRequest</code>. Contains the status of a newly created domain. */
	export interface CreateDomainResponse {

		/** The current status of the search domain. */
		DomainStatus?: DomainStatus;
	}


	/** The current status of the search domain. */
	export interface DomainStatus {

		/**
		 * An internally generated unique identifier for a domain.
		 * Max length: 64
		 * Min length: 1
		 */
		DomainId: string;

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName: string;

		/** The Amazon Resource Name (ARN) of the search domain. See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information. */
		ARN?: string;
		Created?: boolean;
		Deleted?: boolean;

		/** The endpoint to which service requests can be submitted. */
		DocService?: ServiceEndpoint;

		/** The endpoint to which service requests can be submitted. */
		SearchService?: ServiceEndpoint;
		RequiresIndexDocuments: boolean;
		Processing?: boolean;

		/** The instance type (such as <code>search.m1.small</code>) that is being used to process search requests. */
		SearchInstanceType?: string;

		/**
		 * The number of partitions used to hold the domain's index.
		 * Minimum: 1
		 */
		SearchPartitionCount?: number;
		SearchInstanceCount?: number;
		Limits?: Limits;
	}


	/** The endpoint to which service requests can be submitted. */
	export interface ServiceEndpoint {

		/** The endpoint to which service requests can be submitted. For example, <code>search-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.cloudsearch.amazonaws.com</code> or <code>doc-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.cloudsearch.amazonaws.com</code>. */
		Endpoint?: string;
	}

	export interface Limits {
		MaximumReplicationCount: number;
		MaximumPartitionCount: number;
	}

	export interface LimitExceededException {
	}


	/** The result of a <code><a>DefineAnalysisScheme</a></code> request. Contains the status of the newly-configured analysis scheme. */
	export interface DefineAnalysisSchemeResponse {

		/** The status and configuration of an <code>AnalysisScheme</code>. */
		AnalysisScheme: AnalysisSchemeStatus;
	}


	/** The status and configuration of an <code>AnalysisScheme</code>. */
	export interface AnalysisSchemeStatus {

		/** Configuration information for an analysis scheme. Each analysis scheme has a unique name and specifies the language of the text to be processed. The following options can be configured for an analysis scheme: <code>Synonyms</code>, <code>Stopwords</code>, <code>StemmingDictionary</code>, <code>JapaneseTokenizationDictionary</code> and <code>AlgorithmicStemming</code>. */
		Options: AnalysisScheme;

		/** The status of domain configuration option. */
		Status: OptionStatus;
	}


	/** Configuration information for an analysis scheme. Each analysis scheme has a unique name and specifies the language of the text to be processed. The following options can be configured for an analysis scheme: <code>Synonyms</code>, <code>Stopwords</code>, <code>StemmingDictionary</code>, <code>JapaneseTokenizationDictionary</code> and <code>AlgorithmicStemming</code>. */
	export interface AnalysisScheme {

		/**
		 * Names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore).
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-z][a-z0-9_]*
		 */
		AnalysisSchemeName: string;

		/** An <a href="http://tools.ietf.org/html/rfc4646" target="_blank">IETF RFC 4646</a> language code or <code>mul</code> for multiple languages. */
		AnalysisSchemeLanguage: AnalysisSchemeAnalysisSchemeLanguage;

		/** Synonyms, stopwords, and stemming options for an analysis scheme. Includes tokenization dictionary for Japanese. */
		AnalysisOptions?: AnalysisOptions;
	}

	export enum AnalysisSchemeAnalysisSchemeLanguage { ar = 0, bg = 1, ca = 2, cs = 3, da = 4, de = 5, el = 6, en = 7, es = 8, eu = 9, fa = 10, fi = 11, fr = 12, ga = 13, gl = 14, he = 15, hi = 16, hu = 17, hy = 18, id = 19, it = 20, ja = 21, ko = 22, lv = 23, mul = 24, nl = 25, no = 26, pt = 27, ro = 28, ru = 29, sv = 30, th = 31, tr = 32, zh_Hans = 33, zh_Hant = 34 }


	/** Synonyms, stopwords, and stemming options for an analysis scheme. Includes tokenization dictionary for Japanese. */
	export interface AnalysisOptions {
		Synonyms?: string;
		Stopwords?: string;
		StemmingDictionary?: string;
		JapaneseTokenizationDictionary?: string;
		AlgorithmicStemming?: AnalysisOptionsAlgorithmicStemming;
	}

	export enum AnalysisOptionsAlgorithmicStemming { none = 0, minimal = 1, light = 2, full = 3 }


	/** The status of domain configuration option. */
	export interface OptionStatus {
		CreationDate: Date;
		UpdateDate: Date;
		UpdateVersion?: number;

		/** <p>The state of processing a change to an option. One of:</p> <ul> <li>RequiresIndexDocuments: The option's latest value will not be deployed until <a>IndexDocuments</a> has been called and indexing is complete.</li> <li>Processing: The option's latest value is in the process of being activated.</li> <li>Active: The option's latest value is fully deployed. </li> <li>FailedToValidate: The option value is not compatible with the domain's data and cannot be used to index the data. You must either modify the option value or update or remove the incompatible documents.</li> </ul> */
		State: OptionStatusState;
		PendingDeletion?: boolean;
	}

	export enum OptionStatusState { RequiresIndexDocuments = 0, Processing = 1, Active = 2, FailedToValidate = 3 }


	/** An <a href="http://tools.ietf.org/html/rfc4646" target="_blank">IETF RFC 4646</a> language code or <code>mul</code> for multiple languages. */
	export enum AnalysisSchemeLanguage { ar = 0, bg = 1, ca = 2, cs = 3, da = 4, de = 5, el = 6, en = 7, es = 8, eu = 9, fa = 10, fi = 11, fr = 12, ga = 13, gl = 14, he = 15, hi = 16, hu = 17, hy = 18, id = 19, it = 20, ja = 21, ko = 22, lv = 23, mul = 24, nl = 25, no = 26, pt = 27, ro = 28, ru = 29, sv = 30, th = 31, tr = 32, zh_Hans = 33, zh_Hant = 34 }

	export interface InvalidTypeException {
	}


	/** The result of a <code>DefineExpression</code> request. Contains the status of the newly-configured expression. */
	export interface DefineExpressionResponse {

		/** The value of an <code>Expression</code> and its current status. */
		Expression: ExpressionStatus;
	}


	/** The value of an <code>Expression</code> and its current status. */
	export interface ExpressionStatus {

		/** A named expression that can be evaluated at search time. Can be used to sort the search results, define other expressions, or return computed information in the search results. */
		Options: Expression;

		/** The status of domain configuration option. */
		Status: OptionStatus;
	}


	/** A named expression that can be evaluated at search time. Can be used to sort the search results, define other expressions, or return computed information in the search results.  */
	export interface Expression {

		/**
		 * Names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore).
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-z][a-z0-9_]*
		 */
		ExpressionName: string;

		/**
		 * The expression to evaluate for sorting while processing a search request. The <code>Expression</code> syntax is based on JavaScript expressions. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Max length: 10240
		 * Min length: 1
		 */
		ExpressionValue: string;
	}


	/** The result of a <code><a>DefineIndexField</a></code> request. Contains the status of the newly-configured index field. */
	export interface DefineIndexFieldResponse {

		/** The value of an <code>IndexField</code> and its current status. */
		IndexField: IndexFieldStatus;
	}


	/** The value of an <code>IndexField</code> and its current status. */
	export interface IndexFieldStatus {

		/** Configuration information for a field in the index, including its name, type, and options. The supported options depend on the <code><a>IndexFieldType</a></code>. */
		Options: IndexField;

		/** The status of domain configuration option. */
		Status: OptionStatus;
	}


	/** Configuration information for a field in the index, including its name, type, and options. The supported options depend on the <code><a>IndexFieldType</a></code>. */
	export interface IndexField {
		IndexFieldName: string;

		/** The type of field. The valid options for a field depend on the field type. For more information about the supported field types, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>. */
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

	export enum IndexFieldIndexFieldType { _int = 0, _double = 1, literal = 2, text = 3, date = 4, latlon = 5, int_array = 6, double_array = 7, literal_array = 8, text_array = 9, date_array = 10 }


	/** Options for a 64-bit signed integer field. Present if <code>IndexFieldType</code> specifies the field is of type <code>int</code>. All options are enabled by default. */
	export interface IntOptions {
		DefaultValue?: number;

		/**
		 * <p>A string that represents the name of an index field. CloudSearch supports regular index fields as well as dynamic fields. A dynamic field's name defines a pattern that begins or ends with a wildcard. Any document fields that don't map to a regular index field but do match a dynamic field's pattern are configured with the dynamic field's indexing options. </p> <p>Regular field names begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore). Dynamic field names must begin or end with a wildcard (*). The wildcard can also be the only character in a dynamic field name. Multiple wildcards, and wildcards embedded within a string are not supported. </p> <p>The name <code>score</code> is reserved and cannot be used as a field name. To reference a document's ID, you can use the name <code>_id</code>. </p>
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-z][a-z0-9_]*
		 */
		SourceField?: string;
		FacetEnabled?: boolean;
		SearchEnabled?: boolean;
		ReturnEnabled?: boolean;
		SortEnabled?: boolean;
	}


	/** Options for a double-precision 64-bit floating point field. Present if <code>IndexFieldType</code> specifies the field is of type <code>double</code>. All options are enabled by default. */
	export interface DoubleOptions {
		DefaultValue?: number;

		/**
		 * <p>A string that represents the name of an index field. CloudSearch supports regular index fields as well as dynamic fields. A dynamic field's name defines a pattern that begins or ends with a wildcard. Any document fields that don't map to a regular index field but do match a dynamic field's pattern are configured with the dynamic field's indexing options. </p> <p>Regular field names begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore). Dynamic field names must begin or end with a wildcard (*). The wildcard can also be the only character in a dynamic field name. Multiple wildcards, and wildcards embedded within a string are not supported. </p> <p>The name <code>score</code> is reserved and cannot be used as a field name. To reference a document's ID, you can use the name <code>_id</code>. </p>
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-z][a-z0-9_]*
		 */
		SourceField?: string;
		FacetEnabled?: boolean;
		SearchEnabled?: boolean;
		ReturnEnabled?: boolean;
		SortEnabled?: boolean;
	}


	/** Options for literal field. Present if <code>IndexFieldType</code> specifies the field is of type <code>literal</code>. All options are enabled by default. */
	export interface LiteralOptions {

		/**
		 * The value of a field attribute.
		 * Max length: 1024
		 * Min length: 0
		 */
		DefaultValue?: string;

		/**
		 * <p>A string that represents the name of an index field. CloudSearch supports regular index fields as well as dynamic fields. A dynamic field's name defines a pattern that begins or ends with a wildcard. Any document fields that don't map to a regular index field but do match a dynamic field's pattern are configured with the dynamic field's indexing options. </p> <p>Regular field names begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore). Dynamic field names must begin or end with a wildcard (*). The wildcard can also be the only character in a dynamic field name. Multiple wildcards, and wildcards embedded within a string are not supported. </p> <p>The name <code>score</code> is reserved and cannot be used as a field name. To reference a document's ID, you can use the name <code>_id</code>. </p>
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-z][a-z0-9_]*
		 */
		SourceField?: string;
		FacetEnabled?: boolean;
		SearchEnabled?: boolean;
		ReturnEnabled?: boolean;
		SortEnabled?: boolean;
	}


	/** Options for text field. Present if <code>IndexFieldType</code> specifies the field is of type <code>text</code>. A <code>text</code> field is always searchable. All options are enabled by default. */
	export interface TextOptions {

		/**
		 * The value of a field attribute.
		 * Max length: 1024
		 * Min length: 0
		 */
		DefaultValue?: string;

		/**
		 * <p>A string that represents the name of an index field. CloudSearch supports regular index fields as well as dynamic fields. A dynamic field's name defines a pattern that begins or ends with a wildcard. Any document fields that don't map to a regular index field but do match a dynamic field's pattern are configured with the dynamic field's indexing options. </p> <p>Regular field names begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore). Dynamic field names must begin or end with a wildcard (*). The wildcard can also be the only character in a dynamic field name. Multiple wildcards, and wildcards embedded within a string are not supported. </p> <p>The name <code>score</code> is reserved and cannot be used as a field name. To reference a document's ID, you can use the name <code>_id</code>. </p>
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-z][a-z0-9_]*
		 */
		SourceField?: string;
		ReturnEnabled?: boolean;
		SortEnabled?: boolean;
		HighlightEnabled?: boolean;
		AnalysisScheme?: string;
	}


	/** Options for a date field. Dates and times are specified in UTC (Coordinated Universal Time) according to IETF RFC3339: yyyy-mm-ddT00:00:00Z. Present if <code>IndexFieldType</code> specifies the field is of type <code>date</code>. All options are enabled by default. */
	export interface DateOptions {

		/**
		 * The value of a field attribute.
		 * Max length: 1024
		 * Min length: 0
		 */
		DefaultValue?: string;

		/**
		 * <p>A string that represents the name of an index field. CloudSearch supports regular index fields as well as dynamic fields. A dynamic field's name defines a pattern that begins or ends with a wildcard. Any document fields that don't map to a regular index field but do match a dynamic field's pattern are configured with the dynamic field's indexing options. </p> <p>Regular field names begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore). Dynamic field names must begin or end with a wildcard (*). The wildcard can also be the only character in a dynamic field name. Multiple wildcards, and wildcards embedded within a string are not supported. </p> <p>The name <code>score</code> is reserved and cannot be used as a field name. To reference a document's ID, you can use the name <code>_id</code>. </p>
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-z][a-z0-9_]*
		 */
		SourceField?: string;
		FacetEnabled?: boolean;
		SearchEnabled?: boolean;
		ReturnEnabled?: boolean;
		SortEnabled?: boolean;
	}


	/** Options for a latlon field. A latlon field contains a location stored as a latitude and longitude value pair. Present if <code>IndexFieldType</code> specifies the field is of type <code>latlon</code>. All options are enabled by default. */
	export interface LatLonOptions {

		/**
		 * The value of a field attribute.
		 * Max length: 1024
		 * Min length: 0
		 */
		DefaultValue?: string;

		/**
		 * <p>A string that represents the name of an index field. CloudSearch supports regular index fields as well as dynamic fields. A dynamic field's name defines a pattern that begins or ends with a wildcard. Any document fields that don't map to a regular index field but do match a dynamic field's pattern are configured with the dynamic field's indexing options. </p> <p>Regular field names begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore). Dynamic field names must begin or end with a wildcard (*). The wildcard can also be the only character in a dynamic field name. Multiple wildcards, and wildcards embedded within a string are not supported. </p> <p>The name <code>score</code> is reserved and cannot be used as a field name. To reference a document's ID, you can use the name <code>_id</code>. </p>
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-z][a-z0-9_]*
		 */
		SourceField?: string;
		FacetEnabled?: boolean;
		SearchEnabled?: boolean;
		ReturnEnabled?: boolean;
		SortEnabled?: boolean;
	}


	/** Options for a field that contains an array of 64-bit signed integers. Present if <code>IndexFieldType</code> specifies the field is of type <code>int-array</code>. All options are enabled by default. */
	export interface IntArrayOptions {
		DefaultValue?: number;
		SourceFields?: string;
		FacetEnabled?: boolean;
		SearchEnabled?: boolean;
		ReturnEnabled?: boolean;
	}


	/** Options for a field that contains an array of double-precision 64-bit floating point values. Present if <code>IndexFieldType</code> specifies the field is of type <code>double-array</code>. All options are enabled by default. */
	export interface DoubleArrayOptions {
		DefaultValue?: number;
		SourceFields?: string;
		FacetEnabled?: boolean;
		SearchEnabled?: boolean;
		ReturnEnabled?: boolean;
	}


	/** Options for a field that contains an array of literal strings. Present if <code>IndexFieldType</code> specifies the field is of type <code>literal-array</code>. All options are enabled by default. */
	export interface LiteralArrayOptions {

		/**
		 * The value of a field attribute.
		 * Max length: 1024
		 * Min length: 0
		 */
		DefaultValue?: string;
		SourceFields?: string;
		FacetEnabled?: boolean;
		SearchEnabled?: boolean;
		ReturnEnabled?: boolean;
	}


	/** Options for a field that contains an array of text strings. Present if <code>IndexFieldType</code> specifies the field is of type <code>text-array</code>. A <code>text-array</code> field is always searchable. All options are enabled by default. */
	export interface TextArrayOptions {

		/**
		 * The value of a field attribute.
		 * Max length: 1024
		 * Min length: 0
		 */
		DefaultValue?: string;
		SourceFields?: string;
		ReturnEnabled?: boolean;
		HighlightEnabled?: boolean;
		AnalysisScheme?: string;
	}


	/** Options for a field that contains an array of dates. Present if <code>IndexFieldType</code> specifies the field is of type <code>date-array</code>. All options are enabled by default. */
	export interface DateArrayOptions {

		/**
		 * The value of a field attribute.
		 * Max length: 1024
		 * Min length: 0
		 */
		DefaultValue?: string;
		SourceFields?: string;
		FacetEnabled?: boolean;
		SearchEnabled?: boolean;
		ReturnEnabled?: boolean;
	}


	/** The type of field. The valid options for a field depend on the field type. For more information about the supported field types, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>. */
	export enum IndexFieldType { _int = 0, _double = 1, literal = 2, text = 3, date = 4, latlon = 5, int_array = 6, double_array = 7, literal_array = 8, text_array = 9, date_array = 10 }


	/** The result of a <code>DefineSuggester</code> request. Contains the status of the newly-configured suggester. */
	export interface DefineSuggesterResponse {

		/** The value of a <code>Suggester</code> and its current status. */
		Suggester: SuggesterStatus;
	}


	/** The value of a <code>Suggester</code> and its current status. */
	export interface SuggesterStatus {

		/** Configuration information for a search suggester. Each suggester has a unique name and specifies the text field you want to use for suggestions. The following options can be configured for a suggester: <code>FuzzyMatching</code>, <code>SortExpression</code>. */
		Options: Suggester;

		/** The status of domain configuration option. */
		Status: OptionStatus;
	}


	/** Configuration information for a search suggester. Each suggester has a unique name and specifies the text field you want to use for suggestions. The following options can be configured for a suggester: <code>FuzzyMatching</code>, <code>SortExpression</code>.  */
	export interface Suggester {

		/**
		 * Names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore).
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-z][a-z0-9_]*
		 */
		SuggesterName: string;

		/** Options for a search suggester. */
		DocumentSuggesterOptions: DocumentSuggesterOptions;
	}


	/** Options for a search suggester. */
	export interface DocumentSuggesterOptions {

		/**
		 * <p>A string that represents the name of an index field. CloudSearch supports regular index fields as well as dynamic fields. A dynamic field's name defines a pattern that begins or ends with a wildcard. Any document fields that don't map to a regular index field but do match a dynamic field's pattern are configured with the dynamic field's indexing options. </p> <p>Regular field names begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore). Dynamic field names must begin or end with a wildcard (*). The wildcard can also be the only character in a dynamic field name. Multiple wildcards, and wildcards embedded within a string are not supported. </p> <p>The name <code>score</code> is reserved and cannot be used as a field name. To reference a document's ID, you can use the name <code>_id</code>. </p>
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-z][a-z0-9_]*
		 */
		SourceField: string;
		FuzzyMatching?: DocumentSuggesterOptionsFuzzyMatching;
		SortExpression?: string;
	}

	export enum DocumentSuggesterOptionsFuzzyMatching { none = 0, low = 1, high = 2 }


	/** The result of a <code>DeleteAnalysisScheme</code> request. Contains the status of the deleted analysis scheme. */
	export interface DeleteAnalysisSchemeResponse {

		/** The status and configuration of an <code>AnalysisScheme</code>. */
		AnalysisScheme: AnalysisSchemeStatus;
	}


	/** The result of a <code>DeleteDomain</code> request. Contains the status of a newly deleted domain, or no status if the domain has already been completely deleted. */
	export interface DeleteDomainResponse {

		/** The current status of the search domain. */
		DomainStatus?: DomainStatus;
	}


	/** The result of a <code><a>DeleteExpression</a></code> request. Specifies the expression being deleted. */
	export interface DeleteExpressionResponse {

		/** The value of an <code>Expression</code> and its current status. */
		Expression: ExpressionStatus;
	}


	/** The result of a <code><a>DeleteIndexField</a></code> request. */
	export interface DeleteIndexFieldResponse {

		/** The value of an <code>IndexField</code> and its current status. */
		IndexField: IndexFieldStatus;
	}


	/** The result of a <code>DeleteSuggester</code> request. Contains the status of the deleted suggester. */
	export interface DeleteSuggesterResponse {

		/** The value of a <code>Suggester</code> and its current status. */
		Suggester: SuggesterStatus;
	}


	/** The result of a <code>DescribeAnalysisSchemes</code> request. Contains the analysis schemes configured for the domain specified in the request. */
	export interface DescribeAnalysisSchemesResponse {

		/** A list of the analysis schemes configured for a domain. */
		AnalysisSchemes: Array<AnalysisSchemeStatus>;
	}


	/** The result of a <code>DescribeAvailabilityOptions</code> request. Indicates whether or not the Multi-AZ option is enabled for the domain specified in the request.  */
	export interface DescribeAvailabilityOptionsResponse {

		/** The status and configuration of the domain's availability options. */
		AvailabilityOptions?: AvailabilityOptionsStatus;
	}


	/** The status and configuration of the domain's availability options. */
	export interface AvailabilityOptionsStatus {
		Options: boolean;

		/** The status of domain configuration option. */
		Status: OptionStatus;
	}

	export interface DisabledOperationException {
	}


	/** The result of a <code>DescribeDomainEndpointOptions</code> request. Contains the status and configuration of a search domain's endpoint options.  */
	export interface DescribeDomainEndpointOptionsResponse {

		/** The configuration and status of the domain's endpoint options. */
		DomainEndpointOptions?: DomainEndpointOptionsStatus;
	}


	/** The configuration and status of the domain's endpoint options. */
	export interface DomainEndpointOptionsStatus {

		/** The domain's endpoint options. */
		Options: DomainEndpointOptions;

		/** The status of domain configuration option. */
		Status: OptionStatus;
	}


	/** The domain's endpoint options. */
	export interface DomainEndpointOptions {
		EnforceHTTPS?: boolean;

		/** The minimum required TLS version. */
		TLSSecurityPolicy?: DomainEndpointOptionsTLSSecurityPolicy;
	}

	export enum DomainEndpointOptionsTLSSecurityPolicy { Policy_Min_TLS_1_0_2019_07 = 0, Policy_Min_TLS_1_2_2019_07 = 1 }


	/** The result of a <code>DescribeDomains</code> request. Contains the status of the domains specified in the request or all domains owned by the account. */
	export interface DescribeDomainsResponse {

		/** A list that contains the status of each requested domain. */
		DomainStatusList: Array<DomainStatus>;
	}


	/** The result of a <code>DescribeExpressions</code> request. Contains the expressions configured for the domain specified in the request. */
	export interface DescribeExpressionsResponse {

		/** Contains the status of multiple expressions. */
		Expressions: Array<ExpressionStatus>;
	}


	/** The result of a <code>DescribeIndexFields</code> request. Contains the index fields configured for the domain specified in the request. */
	export interface DescribeIndexFieldsResponse {

		/** Contains the status of multiple index fields. */
		IndexFields: Array<IndexFieldStatus>;
	}


	/** The result of a <code>DescribeScalingParameters</code> request. Contains the scaling parameters configured for the domain specified in the request. */
	export interface DescribeScalingParametersResponse {

		/** The status and configuration of a search domain's scaling parameters. */
		ScalingParameters: ScalingParametersStatus;
	}


	/** The status and configuration of a search domain's scaling parameters.  */
	export interface ScalingParametersStatus {

		/** The desired instance type and desired number of replicas of each index partition. */
		Options: ScalingParameters;

		/** The status of domain configuration option. */
		Status: OptionStatus;
	}


	/** The desired instance type and desired number of replicas of each index partition. */
	export interface ScalingParameters {

		/** The instance type (such as <code>search.m1.small</code>) on which an index partition is hosted. */
		DesiredInstanceType?: ScalingParametersDesiredInstanceType;
		DesiredReplicationCount?: number;
		DesiredPartitionCount?: number;
	}

	export enum ScalingParametersDesiredInstanceType { search_m1_small = 0, search_m1_large = 1, search_m2_xlarge = 2, search_m2_2xlarge = 3, search_m3_medium = 4, search_m3_large = 5, search_m3_xlarge = 6, search_m3_2xlarge = 7 }


	/** The result of a <code>DescribeServiceAccessPolicies</code> request. */
	export interface DescribeServiceAccessPoliciesResponse {

		/** The configured access rules for the domain's document and search endpoints, and the current status of those rules. */
		AccessPolicies: AccessPoliciesStatus;
	}


	/** The configured access rules for the domain's document and search endpoints, and the current status of those rules. */
	export interface AccessPoliciesStatus {

		/** Access rules for a domain's document or search service endpoints. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank">Configuring Access for a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>. The maximum size of a policy document is 100 KB. */
		Options: string;

		/** The status of domain configuration option. */
		Status: OptionStatus;
	}


	/** The result of a <code>DescribeSuggesters</code> request. */
	export interface DescribeSuggestersResponse {

		/** Contains the status of multiple suggesters. */
		Suggesters: Array<SuggesterStatus>;
	}


	/** The result of an <code>IndexDocuments</code> request. Contains the status of the indexing operation, including the fields being indexed. */
	export interface IndexDocumentsResponse {

		/** A list of field names. */
		FieldNames?: Array<string>;
	}


	/** The result of a <code>ListDomainNames</code> request. Contains a list of the domains owned by an account. */
	export interface ListDomainNamesResponse {

		/** A collection of domain names. */
		DomainNames?: DomainNameMap;
	}


	/** A collection of domain names. */
	export interface DomainNameMap {
	}


	/** The result of a <code>UpdateAvailabilityOptions</code> request. Contains the status of the domain's availability options.  */
	export interface UpdateAvailabilityOptionsResponse {

		/** The status and configuration of the domain's availability options. */
		AvailabilityOptions?: AvailabilityOptionsStatus;
	}

	export interface ValidationException {
	}


	/** The result of a <code>UpdateDomainEndpointOptions</code> request. Contains the configuration and status of the domain's endpoint options.  */
	export interface UpdateDomainEndpointOptionsResponse {

		/** The configuration and status of the domain's endpoint options. */
		DomainEndpointOptions?: DomainEndpointOptionsStatus;
	}


	/** The minimum required TLS version. */
	export enum TLSSecurityPolicy { Policy_Min_TLS_1_0_2019_07 = 0, Policy_Min_TLS_1_2_2019_07 = 1 }


	/** The result of a <code>UpdateScalingParameters</code> request. Contains the status of the newly-configured scaling parameters. */
	export interface UpdateScalingParametersResponse {

		/** The status and configuration of a search domain's scaling parameters. */
		ScalingParameters: ScalingParametersStatus;
	}


	/** The instance type (such as <code>search.m1.small</code>) on which an index partition is hosted. */
	export enum PartitionInstanceType { search_m1_small = 0, search_m1_large = 1, search_m2_xlarge = 2, search_m2_2xlarge = 3, search_m3_medium = 4, search_m3_large = 5, search_m3_xlarge = 6, search_m3_2xlarge = 7 }


	/** The result of an <code>UpdateServiceAccessPolicies</code> request. Contains the new access policies. */
	export interface UpdateServiceAccessPoliciesResponse {

		/** The configured access rules for the domain's document and search endpoints, and the current status of those rules. */
		AccessPolicies: AccessPoliciesStatus;
	}

	export enum AlgorithmicStemming { none = 0, minimal = 1, light = 2, full = 3 }


	/** Container for the parameters to the <code><a>BuildSuggester</a></code> operation. Specifies the name of the domain you want to update. */
	export interface BuildSuggestersRequest {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName: string;
	}


	/** Container for the parameters to the <code><a>CreateDomain</a></code> operation. Specifies a name for the new search domain. */
	export interface CreateDomainRequest {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName: string;
	}


	/** Container for the parameters to the <code><a>DefineAnalysisScheme</a></code> operation. Specifies the name of the domain you want to update and the analysis scheme configuration. */
	export interface DefineAnalysisSchemeRequest {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName: string;

		/** Configuration information for an analysis scheme. Each analysis scheme has a unique name and specifies the language of the text to be processed. The following options can be configured for an analysis scheme: <code>Synonyms</code>, <code>Stopwords</code>, <code>StemmingDictionary</code>, <code>JapaneseTokenizationDictionary</code> and <code>AlgorithmicStemming</code>. */
		AnalysisScheme: AnalysisScheme;
	}


	/** Container for the parameters to the <code><a>DefineExpression</a></code> operation. Specifies the name of the domain you want to update and the expression you want to configure. */
	export interface DefineExpressionRequest {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName: string;

		/** A named expression that can be evaluated at search time. Can be used to sort the search results, define other expressions, or return computed information in the search results. */
		Expression: Expression;
	}


	/** Container for the parameters to the <code><a>DefineIndexField</a></code> operation. Specifies the name of the domain you want to update and the index field configuration. */
	export interface DefineIndexFieldRequest {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName: string;

		/** Configuration information for a field in the index, including its name, type, and options. The supported options depend on the <code><a>IndexFieldType</a></code>. */
		IndexField: IndexField;
	}


	/** Container for the parameters to the <code><a>DefineSuggester</a></code> operation. Specifies the name of the domain you want to update and the suggester configuration. */
	export interface DefineSuggesterRequest {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName: string;

		/** Configuration information for a search suggester. Each suggester has a unique name and specifies the text field you want to use for suggestions. The following options can be configured for a suggester: <code>FuzzyMatching</code>, <code>SortExpression</code>. */
		Suggester: Suggester;
	}


	/** Container for the parameters to the <code><a>DeleteAnalysisScheme</a></code> operation. Specifies the name of the domain you want to update and the analysis scheme you want to delete.  */
	export interface DeleteAnalysisSchemeRequest {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName: string;

		/**
		 * Names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore).
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-z][a-z0-9_]*
		 */
		AnalysisSchemeName: string;
	}


	/** Container for the parameters to the <code><a>DeleteDomain</a></code> operation. Specifies the name of the domain you want to delete. */
	export interface DeleteDomainRequest {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName: string;
	}


	/** Container for the parameters to the <code><a>DeleteExpression</a></code> operation. Specifies the name of the domain you want to update and the name of the expression you want to delete. */
	export interface DeleteExpressionRequest {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName: string;

		/**
		 * Names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore).
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-z][a-z0-9_]*
		 */
		ExpressionName: string;
	}


	/** Container for the parameters to the <code><a>DeleteIndexField</a></code> operation. Specifies the name of the domain you want to update and the name of the index field you want to delete. */
	export interface DeleteIndexFieldRequest {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName: string;
		IndexFieldName: string;
	}


	/** Container for the parameters to the <code><a>DeleteSuggester</a></code> operation. Specifies the name of the domain you want to update and name of the suggester you want to delete. */
	export interface DeleteSuggesterRequest {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName: string;

		/**
		 * Names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore).
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-z][a-z0-9_]*
		 */
		SuggesterName: string;
	}


	/** Container for the parameters to the <code><a>DescribeAnalysisSchemes</a></code> operation. Specifies the name of the domain you want to describe. To limit the response to particular analysis schemes, specify the names of the analysis schemes you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>.  */
	export interface DescribeAnalysisSchemesRequest {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName: string;
		AnalysisSchemeNames?: Array<string>;
		Deployed?: boolean;
	}


	/** Container for the parameters to the <code><a>DescribeAvailabilityOptions</a></code> operation. Specifies the name of the domain you want to describe. To show the active configuration and exclude any pending changes, set the Deployed option to <code>true</code>. */
	export interface DescribeAvailabilityOptionsRequest {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName: string;
		Deployed?: boolean;
	}


	/** Container for the parameters to the <code><a>DescribeDomainEndpointOptions</a></code> operation. Specify the name of the domain you want to describe. To show the active configuration and exclude any pending changes, set the Deployed option to <code>true</code>. */
	export interface DescribeDomainEndpointOptionsRequest {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName: string;
		Deployed?: boolean;
	}


	/** Container for the parameters to the <code><a>DescribeDomains</a></code> operation. By default shows the status of all domains. To restrict the response to particular domains, specify the names of the domains you want to describe. */
	export interface DescribeDomainsRequest {

		/** A list of domain names. */
		DomainNames?: Array<string>;
	}


	/** Container for the parameters to the <code><a>DescribeDomains</a></code> operation. Specifies the name of the domain you want to describe. To restrict the response to particular expressions, specify the names of the expressions you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>. */
	export interface DescribeExpressionsRequest {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName: string;
		ExpressionNames?: Array<string>;
		Deployed?: boolean;
	}


	/** Container for the parameters to the <code><a>DescribeIndexFields</a></code> operation. Specifies the name of the domain you want to describe. To restrict the response to particular index fields, specify the names of the index fields you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>. */
	export interface DescribeIndexFieldsRequest {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName: string;
		FieldNames?: Array<string>;
		Deployed?: boolean;
	}


	/** Container for the parameters to the <code><a>DescribeScalingParameters</a></code> operation. Specifies the name of the domain you want to describe.  */
	export interface DescribeScalingParametersRequest {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName: string;
	}


	/** Container for the parameters to the <code><a>DescribeServiceAccessPolicies</a></code> operation. Specifies the name of the domain you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>. */
	export interface DescribeServiceAccessPoliciesRequest {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName: string;
		Deployed?: boolean;
	}


	/** Container for the parameters to the <code><a>DescribeSuggester</a></code> operation. Specifies the name of the domain you want to describe. To restrict the response to particular suggesters, specify the names of the suggesters you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>. */
	export interface DescribeSuggestersRequest {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName: string;
		SuggesterNames?: Array<string>;
		Deployed?: boolean;
	}

	export enum SuggesterFuzzyMatching { none = 0, low = 1, high = 2 }


	/** Container for the parameters to the <code><a>IndexDocuments</a></code> operation. Specifies the name of the domain you want to re-index. */
	export interface IndexDocumentsRequest {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName: string;
	}


	/** <p>The state of processing a change to an option. One of:</p> <ul> <li>RequiresIndexDocuments: The option's latest value will not be deployed until <a>IndexDocuments</a> has been called and indexing is complete.</li> <li>Processing: The option's latest value is in the process of being activated.</li> <li>Active: The option's latest value is fully deployed. </li> <li>FailedToValidate: The option value is not compatible with the domain's data and cannot be used to index the data. You must either modify the option value or update or remove the incompatible documents.</li> </ul> */
	export enum OptionState { RequiresIndexDocuments = 0, Processing = 1, Active = 2, FailedToValidate = 3 }


	/** Container for the parameters to the <code><a>UpdateAvailabilityOptions</a></code> operation. Specifies the name of the domain you want to update and the Multi-AZ availability option. */
	export interface UpdateAvailabilityOptionsRequest {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName: string;
		MultiAZ: boolean;
	}


	/** Container for the parameters to the <code><a>UpdateDomainEndpointOptions</a></code> operation. Specifies the name of the domain you want to update and the domain endpoint options. */
	export interface UpdateDomainEndpointOptionsRequest {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName: string;

		/** The domain's endpoint options. */
		DomainEndpointOptions: DomainEndpointOptions;
	}


	/** Container for the parameters to the <code><a>UpdateScalingParameters</a></code> operation. Specifies the name of the domain you want to update and the scaling parameters you want to configure. */
	export interface UpdateScalingParametersRequest {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName: string;

		/** The desired instance type and desired number of replicas of each index partition. */
		ScalingParameters: ScalingParameters;
	}


	/** Container for the parameters to the <code><a>UpdateServiceAccessPolicies</a></code> operation. Specifies the name of the domain you want to update and the access rules you want to configure. */
	export interface UpdateServiceAccessPoliciesRequest {

		/**
		 * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName: string;

		/** Access rules for a domain's document or search service endpoints. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank">Configuring Access for a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>. The maximum size of a policy document is 100 KB. */
		AccessPolicies: string;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Indexes the search suggestions. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html#configuring-suggesters">Configuring Suggesters</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Get #Action=BuildSuggesters
		 * @return {void} Success
		 */
		GET_BuildSuggesters(DomainName: string, Action: GET_BuildSuggestersAction, Version: GET_BuildSuggestersVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=BuildSuggesters?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/creating-domains.html" target="_blank">Creating a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Get #Action=CreateDomain
		 * @param {string} DomainName A name for the domain you are creating. Allowed characters are a-z (lower-case letters), 0-9, and hyphen (-). Domain names must start with a letter or number and be at least 3 and no more than 28 characters long.
		 * @return {void} Success
		 */
		GET_CreateDomain(DomainName: string, Action: GET_CreateDomainAction, Version: GET_CreateDomainVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateDomain?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Configures an analysis scheme that can be applied to a <code>text</code> or <code>text-array</code> field to define language-specific text processing options. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Get #Action=DefineAnalysisScheme
		 * @return {void} Success
		 */
		GET_DefineAnalysisScheme(DomainName: string, AnalysisScheme: GET_DefineAnalysisSchemeAnalysisScheme, Action: GET_DefineAnalysisSchemeAction, Version: GET_DefineAnalysisSchemeVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DefineAnalysisScheme?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&AnalysisScheme=' + AnalysisScheme + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Configures an <code><a>Expression</a></code> for the search domain. Used to create new expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Get #Action=DefineExpression
		 * @return {void} Success
		 */
		GET_DefineExpression(DomainName: string, Expression: GET_DefineExpressionExpression, Action: GET_DefineExpressionAction, Version: GET_DefineExpressionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DefineExpression?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&Expression=' + Expression + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Configures an <code><a>IndexField</a></code> for the search domain. Used to create new fields and modify existing ones. You must specify the name of the domain you are configuring and an index field configuration. The index field configuration specifies a unique name, the index field type, and the options you want to configure for the field. The options you can specify depend on the <code><a>IndexFieldType</a></code>. If the field exists, the new configuration replaces the old one. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Get #Action=DefineIndexField
		 * @param {GET_DefineIndexFieldIndexField} IndexField The index field and field options you want to configure. 
		 * @return {void} Success
		 */
		GET_DefineIndexField(DomainName: string, IndexField: GET_DefineIndexFieldIndexField, Action: GET_DefineIndexFieldAction, Version: GET_DefineIndexFieldVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DefineIndexField?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&IndexField=' + IndexField + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Configures a suggester for a domain. A suggester enables you to display possible matches before users finish typing their queries. When you configure a suggester, you must specify the name of the text field you want to search for possible matches and a unique name for the suggester. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Get #Action=DefineSuggester
		 * @return {void} Success
		 */
		GET_DefineSuggester(DomainName: string, Suggester: GET_DefineSuggesterSuggester, Action: GET_DefineSuggesterAction, Version: GET_DefineSuggesterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DefineSuggester?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&Suggester=' + Suggester + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an analysis scheme. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Get #Action=DeleteAnalysisScheme
		 * @param {string} AnalysisSchemeName The name of the analysis scheme you want to delete.
		 * @return {void} Success
		 */
		GET_DeleteAnalysisScheme(DomainName: string, AnalysisSchemeName: string, Action: GET_DeleteAnalysisSchemeAction, Version: GET_DeleteAnalysisSchemeVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteAnalysisScheme?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&AnalysisSchemeName=' + (AnalysisSchemeName == null ? '' : encodeURIComponent(AnalysisSchemeName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Permanently deletes a search domain and all of its data. Once a domain has been deleted, it cannot be recovered. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/deleting-domains.html" target="_blank">Deleting a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Get #Action=DeleteDomain
		 * @param {string} DomainName The name of the domain you want to permanently delete.
		 * @return {void} Success
		 */
		GET_DeleteDomain(DomainName: string, Action: GET_DeleteDomainAction, Version: GET_DeleteDomainVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteDomain?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes an <code><a>Expression</a></code> from the search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Get #Action=DeleteExpression
		 * @param {string} ExpressionName The name of the <code><a>Expression</a></code> to delete.
		 * @return {void} Success
		 */
		GET_DeleteExpression(DomainName: string, ExpressionName: string, Action: GET_DeleteExpressionAction, Version: GET_DeleteExpressionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteExpression?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&ExpressionName=' + (ExpressionName == null ? '' : encodeURIComponent(ExpressionName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes an <code><a>IndexField</a></code> from the search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Get #Action=DeleteIndexField
		 * @param {string} IndexFieldName The name of the index field your want to remove from the domain's indexing options.
		 * @return {void} Success
		 */
		GET_DeleteIndexField(DomainName: string, IndexFieldName: string, Action: GET_DeleteIndexFieldAction, Version: GET_DeleteIndexFieldVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteIndexField?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&IndexFieldName=' + (IndexFieldName == null ? '' : encodeURIComponent(IndexFieldName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a suggester. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Get #Action=DeleteSuggester
		 * @param {string} SuggesterName Specifies the name of the suggester you want to delete.
		 * @return {void} Success
		 */
		GET_DeleteSuggester(DomainName: string, SuggesterName: string, Action: GET_DeleteSuggesterAction, Version: GET_DeleteSuggesterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteSuggester?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&SuggesterName=' + (SuggesterName == null ? '' : encodeURIComponent(SuggesterName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the analysis schemes configured for a domain. An analysis scheme defines language-specific text processing options for a <code>text</code> field. Can be limited to specific analysis schemes by name. By default, shows all analysis schemes and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Get #Action=DescribeAnalysisSchemes
		 * @param {string} DomainName The name of the domain you want to describe.
		 * @param {Array<string>} AnalysisSchemeNames The analysis schemes you want to describe.
		 * @param {boolean} Deployed Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.
		 * @return {void} Success
		 */
		GET_DescribeAnalysisSchemes(DomainName: string, AnalysisSchemeNames: Array<string>, Deployed: boolean, Action: GET_DescribeAnalysisSchemesAction, Version: GET_DescribeAnalysisSchemesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeAnalysisSchemes?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&' + AnalysisSchemeNames.map(z => `AnalysisSchemeNames=${encodeURIComponent(z)}`).join('&') + '&Deployed=' + Deployed + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Get #Action=DescribeAvailabilityOptions
		 * @param {string} DomainName The name of the domain you want to describe.
		 * @param {boolean} Deployed Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.
		 * @return {void} Success
		 */
		GET_DescribeAvailabilityOptions(DomainName: string, Deployed: boolean, Action: GET_DescribeAvailabilityOptionsAction, Version: GET_DescribeAvailabilityOptionsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeAvailabilityOptions?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&Deployed=' + Deployed + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html" target="_blank">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Get #Action=DescribeDomainEndpointOptions
		 * @param {string} DomainName A string that represents the name of a domain.
		 * @param {boolean} Deployed Whether to retrieve the latest configuration (which might be in a Processing state) or the current, active configuration. Defaults to <code>false</code>.
		 * @return {void} Success
		 */
		GET_DescribeDomainEndpointOptions(DomainName: string, Deployed: boolean, Action: GET_DescribeDomainEndpointOptionsAction, Version: GET_DescribeDomainEndpointOptionsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeDomainEndpointOptions?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&Deployed=' + Deployed + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default. To get the number of searchable documents in a domain, use the console or submit a <code>matchall</code> request to your domain's search endpoint: <code>q=matchall&amp;amp;q.parser=structured&amp;amp;size=0</code>. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Information about a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Get #Action=DescribeDomains
		 * @param {Array<string>} DomainNames The names of the domains you want to include in the response.
		 * @return {void} Success
		 */
		GET_DescribeDomains(DomainNames: Array<string>, Action: GET_DescribeDomainsAction, Version: GET_DescribeDomainsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeDomains?' + DomainNames.map(z => `DomainNames=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the expressions configured for the search domain. Can be limited to specific expressions by name. By default, shows all expressions and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Get #Action=DescribeExpressions
		 * @param {string} DomainName The name of the domain you want to describe.
		 * @param {Array<string>} ExpressionNames Limits the <code><a>DescribeExpressions</a></code> response to the specified expressions. If not specified, all expressions are shown.
		 * @param {boolean} Deployed Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.
		 * @return {void} Success
		 */
		GET_DescribeExpressions(DomainName: string, ExpressionNames: Array<string>, Deployed: boolean, Action: GET_DescribeExpressionsAction, Version: GET_DescribeExpressionsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeExpressions?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&' + ExpressionNames.map(z => `ExpressionNames=${encodeURIComponent(z)}`).join('&') + '&Deployed=' + Deployed + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. By default, shows all fields and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Domain Information</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Get #Action=DescribeIndexFields
		 * @param {string} DomainName The name of the domain you want to describe.
		 * @param {Array<string>} FieldNames A list of the index fields you want to describe. If not specified, information is returned for all configured index fields.
		 * @param {boolean} Deployed Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.
		 * @return {void} Success
		 */
		GET_DescribeIndexFields(DomainName: string, FieldNames: Array<string>, Deployed: boolean, Action: GET_DescribeIndexFieldsAction, Version: GET_DescribeIndexFieldsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeIndexFields?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&' + FieldNames.map(z => `FieldNames=${encodeURIComponent(z)}`).join('&') + '&Deployed=' + Deployed + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the scaling parameters configured for a domain. A domain's scaling parameters specify the desired search instance type and replication count. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Get #Action=DescribeScalingParameters
		 * @return {void} Success
		 */
		GET_DescribeScalingParameters(DomainName: string, Action: GET_DescribeScalingParametersAction, Version: GET_DescribeScalingParametersVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeScalingParameters?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about the access policies that control access to the domain's document and search endpoints. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank">Configuring Access for a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Get #Action=DescribeServiceAccessPolicies
		 * @param {string} DomainName The name of the domain you want to describe.
		 * @param {boolean} Deployed Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.
		 * @return {void} Success
		 */
		GET_DescribeServiceAccessPolicies(DomainName: string, Deployed: boolean, Action: GET_DescribeServiceAccessPoliciesAction, Version: GET_DescribeServiceAccessPoliciesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeServiceAccessPolicies?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&Deployed=' + Deployed + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the suggesters configured for a domain. A suggester enables you to display possible matches before users finish typing their queries. Can be limited to specific suggesters by name. By default, shows all suggesters and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Get #Action=DescribeSuggesters
		 * @param {string} DomainName The name of the domain you want to describe.
		 * @param {Array<string>} SuggesterNames The suggesters you want to describe.
		 * @param {boolean} Deployed Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.
		 * @return {void} Success
		 */
		GET_DescribeSuggesters(DomainName: string, SuggesterNames: Array<string>, Deployed: boolean, Action: GET_DescribeSuggestersAction, Version: GET_DescribeSuggestersVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeSuggesters?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&' + SuggesterNames.map(z => `SuggesterNames=${encodeURIComponent(z)}`).join('&') + '&Deployed=' + Deployed + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Tells the search domain to start indexing its documents using the latest indexing options. This operation must be invoked to activate options whose <a>OptionStatus</a> is <code>RequiresIndexDocuments</code>.
		 * Get #Action=IndexDocuments
		 * @return {void} Success
		 */
		GET_IndexDocuments(DomainName: string, Action: GET_IndexDocumentsAction, Version: GET_IndexDocumentsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=IndexDocuments?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all search domains owned by an account.
		 * Get #Action=ListDomainNames
		 * @return {void} Success
		 */
		GET_ListDomainNames(Action: GET_ListDomainNamesAction, Version: GET_ListDomainNamesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListDomainNames?Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all search domains owned by an account.
		 * Post #Action=ListDomainNames
		 * @return {void} Success
		 */
		POST_ListDomainNames(Action: GET_ListDomainNamesAction, Version: POST_ListDomainNamesVersion): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#Action=ListDomainNames?Action=' + Action + '&Version=' + Version, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Get #Action=UpdateAvailabilityOptions
		 * @param {boolean} MultiAZ You expand an existing search domain to a second Availability Zone by setting the Multi-AZ option to true. Similarly, you can turn off the Multi-AZ option to downgrade the domain to a single Availability Zone by setting the Multi-AZ option to <code>false</code>. 
		 * @return {void} Success
		 */
		GET_UpdateAvailabilityOptions(DomainName: string, MultiAZ: boolean, Action: GET_UpdateAvailabilityOptionsAction, Version: GET_UpdateAvailabilityOptionsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateAvailabilityOptions?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&MultiAZ=' + MultiAZ + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html" target="_blank">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Get #Action=UpdateDomainEndpointOptions
		 * @param {string} DomainName A string that represents the name of a domain.
		 * @param {GET_UpdateDomainEndpointOptionsDomainEndpointOptions} DomainEndpointOptions Whether to require that all requests to the domain arrive over HTTPS. We recommend Policy-Min-TLS-1-2-2019-07 for TLSSecurityPolicy. For compatibility with older clients, the default is Policy-Min-TLS-1-0-2019-07. 
		 * @return {void} Success
		 */
		GET_UpdateDomainEndpointOptions(DomainName: string, DomainEndpointOptions: GET_UpdateDomainEndpointOptionsDomainEndpointOptions, Action: GET_UpdateDomainEndpointOptionsAction, Version: GET_UpdateDomainEndpointOptionsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateDomainEndpointOptions?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&DomainEndpointOptions=' + DomainEndpointOptions + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Configures scaling parameters for a domain. A domain's scaling parameters specify the desired search instance type and replication count. Amazon CloudSearch will still automatically scale your domain based on the volume of data and traffic, but not below the desired instance type and replication count. If the Multi-AZ option is enabled, these values control the resources used per Availability Zone. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Get #Action=UpdateScalingParameters
		 * @return {void} Success
		 */
		GET_UpdateScalingParameters(DomainName: string, ScalingParameters: GET_UpdateScalingParametersScalingParameters, Action: GET_UpdateScalingParametersAction, Version: GET_UpdateScalingParametersVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateScalingParameters?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&ScalingParameters=' + ScalingParameters + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Configures the access rules that control access to the domain's document and search endpoints. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank"> Configuring Access for an Amazon CloudSearch Domain</a>.
		 * Get #Action=UpdateServiceAccessPolicies
		 * @param {string} AccessPolicies The access rules you want to configure. These rules replace any existing rules. 
		 * @return {void} Success
		 */
		GET_UpdateServiceAccessPolicies(DomainName: string, AccessPolicies: string, Action: GET_UpdateServiceAccessPoliciesAction, Version: GET_UpdateServiceAccessPoliciesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateServiceAccessPolicies?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&AccessPolicies=' + (AccessPolicies == null ? '' : encodeURIComponent(AccessPolicies)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}
	}

	export enum GET_BuildSuggestersAction { BuildSuggesters = 0 }

	export enum GET_BuildSuggestersVersion { _2013_01_01 = 0 }

	export enum POST_BuildSuggestersVersion { _2013_01_01 = 0 }

	export enum GET_CreateDomainAction { CreateDomain = 0 }

	export enum GET_CreateDomainVersion { _2013_01_01 = 0 }

	export enum POST_CreateDomainVersion { _2013_01_01 = 0 }

	export interface GET_DefineAnalysisSchemeAnalysisScheme {

		/**
		 * Names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore).
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-z][a-z0-9_]*
		 */
		AnalysisSchemeName: string;

		/** An <a href="http://tools.ietf.org/html/rfc4646" target="_blank">IETF RFC 4646</a> language code or <code>mul</code> for multiple languages. */
		AnalysisSchemeLanguage: GET_DefineAnalysisSchemeAnalysisSchemeAnalysisSchemeLanguage;

		/** Synonyms, stopwords, and stemming options for an analysis scheme. Includes tokenization dictionary for Japanese. */
		AnalysisOptions?: AnalysisOptions;
	}

	export enum GET_DefineAnalysisSchemeAnalysisSchemeAnalysisSchemeLanguage { ar = 0, bg = 1, ca = 2, cs = 3, da = 4, de = 5, el = 6, en = 7, es = 8, eu = 9, fa = 10, fi = 11, fr = 12, ga = 13, gl = 14, he = 15, hi = 16, hu = 17, hy = 18, id = 19, it = 20, ja = 21, ko = 22, lv = 23, mul = 24, nl = 25, no = 26, pt = 27, ro = 28, ru = 29, sv = 30, th = 31, tr = 32, zh_Hans = 33, zh_Hant = 34 }

	export enum GET_DefineAnalysisSchemeAction { DefineAnalysisScheme = 0 }

	export enum GET_DefineAnalysisSchemeVersion { _2013_01_01 = 0 }

	export enum POST_DefineAnalysisSchemeVersion { _2013_01_01 = 0 }

	export interface GET_DefineExpressionExpression {

		/**
		 * Names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore).
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-z][a-z0-9_]*
		 */
		ExpressionName: string;

		/**
		 * The expression to evaluate for sorting while processing a search request. The <code>Expression</code> syntax is based on JavaScript expressions. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Max length: 10240
		 * Min length: 1
		 */
		ExpressionValue: string;
	}

	export enum GET_DefineExpressionAction { DefineExpression = 0 }

	export enum GET_DefineExpressionVersion { _2013_01_01 = 0 }

	export enum POST_DefineExpressionVersion { _2013_01_01 = 0 }

	export interface GET_DefineIndexFieldIndexField {
		IndexFieldName: string;

		/** The type of field. The valid options for a field depend on the field type. For more information about the supported field types, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>. */
		IndexFieldType: GET_DefineIndexFieldIndexFieldIndexFieldType;

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

	export enum GET_DefineIndexFieldIndexFieldIndexFieldType { _int = 0, _double = 1, literal = 2, text = 3, date = 4, latlon = 5, int_array = 6, double_array = 7, literal_array = 8, text_array = 9, date_array = 10 }

	export enum GET_DefineIndexFieldAction { DefineIndexField = 0 }

	export enum GET_DefineIndexFieldVersion { _2013_01_01 = 0 }

	export enum POST_DefineIndexFieldVersion { _2013_01_01 = 0 }

	export interface GET_DefineSuggesterSuggester {

		/**
		 * Names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore).
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-z][a-z0-9_]*
		 */
		SuggesterName: string;

		/** Options for a search suggester. */
		DocumentSuggesterOptions: DocumentSuggesterOptions;
	}

	export enum GET_DefineSuggesterAction { DefineSuggester = 0 }

	export enum GET_DefineSuggesterVersion { _2013_01_01 = 0 }

	export enum POST_DefineSuggesterVersion { _2013_01_01 = 0 }

	export enum GET_DeleteAnalysisSchemeAction { DeleteAnalysisScheme = 0 }

	export enum GET_DeleteAnalysisSchemeVersion { _2013_01_01 = 0 }

	export enum POST_DeleteAnalysisSchemeVersion { _2013_01_01 = 0 }

	export enum GET_DeleteDomainAction { DeleteDomain = 0 }

	export enum GET_DeleteDomainVersion { _2013_01_01 = 0 }

	export enum POST_DeleteDomainVersion { _2013_01_01 = 0 }

	export enum GET_DeleteExpressionAction { DeleteExpression = 0 }

	export enum GET_DeleteExpressionVersion { _2013_01_01 = 0 }

	export enum POST_DeleteExpressionVersion { _2013_01_01 = 0 }

	export enum GET_DeleteIndexFieldAction { DeleteIndexField = 0 }

	export enum GET_DeleteIndexFieldVersion { _2013_01_01 = 0 }

	export enum POST_DeleteIndexFieldVersion { _2013_01_01 = 0 }

	export enum GET_DeleteSuggesterAction { DeleteSuggester = 0 }

	export enum GET_DeleteSuggesterVersion { _2013_01_01 = 0 }

	export enum POST_DeleteSuggesterVersion { _2013_01_01 = 0 }

	export enum GET_DescribeAnalysisSchemesAction { DescribeAnalysisSchemes = 0 }

	export enum GET_DescribeAnalysisSchemesVersion { _2013_01_01 = 0 }

	export enum POST_DescribeAnalysisSchemesVersion { _2013_01_01 = 0 }

	export enum GET_DescribeAvailabilityOptionsAction { DescribeAvailabilityOptions = 0 }

	export enum GET_DescribeAvailabilityOptionsVersion { _2013_01_01 = 0 }

	export enum POST_DescribeAvailabilityOptionsVersion { _2013_01_01 = 0 }

	export enum GET_DescribeDomainEndpointOptionsAction { DescribeDomainEndpointOptions = 0 }

	export enum GET_DescribeDomainEndpointOptionsVersion { _2013_01_01 = 0 }

	export enum POST_DescribeDomainEndpointOptionsVersion { _2013_01_01 = 0 }

	export enum GET_DescribeDomainsAction { DescribeDomains = 0 }

	export enum GET_DescribeDomainsVersion { _2013_01_01 = 0 }

	export enum POST_DescribeDomainsVersion { _2013_01_01 = 0 }

	export enum GET_DescribeExpressionsAction { DescribeExpressions = 0 }

	export enum GET_DescribeExpressionsVersion { _2013_01_01 = 0 }

	export enum POST_DescribeExpressionsVersion { _2013_01_01 = 0 }

	export enum GET_DescribeIndexFieldsAction { DescribeIndexFields = 0 }

	export enum GET_DescribeIndexFieldsVersion { _2013_01_01 = 0 }

	export enum POST_DescribeIndexFieldsVersion { _2013_01_01 = 0 }

	export enum GET_DescribeScalingParametersAction { DescribeScalingParameters = 0 }

	export enum GET_DescribeScalingParametersVersion { _2013_01_01 = 0 }

	export enum POST_DescribeScalingParametersVersion { _2013_01_01 = 0 }

	export enum GET_DescribeServiceAccessPoliciesAction { DescribeServiceAccessPolicies = 0 }

	export enum GET_DescribeServiceAccessPoliciesVersion { _2013_01_01 = 0 }

	export enum POST_DescribeServiceAccessPoliciesVersion { _2013_01_01 = 0 }

	export enum GET_DescribeSuggestersAction { DescribeSuggesters = 0 }

	export enum GET_DescribeSuggestersVersion { _2013_01_01 = 0 }

	export enum POST_DescribeSuggestersVersion { _2013_01_01 = 0 }

	export enum GET_IndexDocumentsAction { IndexDocuments = 0 }

	export enum GET_IndexDocumentsVersion { _2013_01_01 = 0 }

	export enum POST_IndexDocumentsVersion { _2013_01_01 = 0 }

	export enum GET_ListDomainNamesAction { ListDomainNames = 0 }

	export enum GET_ListDomainNamesVersion { _2013_01_01 = 0 }

	export enum POST_ListDomainNamesVersion { _2013_01_01 = 0 }

	export enum GET_UpdateAvailabilityOptionsAction { UpdateAvailabilityOptions = 0 }

	export enum GET_UpdateAvailabilityOptionsVersion { _2013_01_01 = 0 }

	export enum POST_UpdateAvailabilityOptionsVersion { _2013_01_01 = 0 }

	export interface GET_UpdateDomainEndpointOptionsDomainEndpointOptions {
		EnforceHTTPS?: boolean;

		/** The minimum required TLS version. */
		TLSSecurityPolicy?: GET_UpdateDomainEndpointOptionsDomainEndpointOptionsTLSSecurityPolicy;
	}

	export enum GET_UpdateDomainEndpointOptionsDomainEndpointOptionsTLSSecurityPolicy { Policy_Min_TLS_1_0_2019_07 = 0, Policy_Min_TLS_1_2_2019_07 = 1 }

	export enum GET_UpdateDomainEndpointOptionsAction { UpdateDomainEndpointOptions = 0 }

	export enum GET_UpdateDomainEndpointOptionsVersion { _2013_01_01 = 0 }

	export enum POST_UpdateDomainEndpointOptionsVersion { _2013_01_01 = 0 }

	export interface GET_UpdateScalingParametersScalingParameters {

		/** The instance type (such as <code>search.m1.small</code>) on which an index partition is hosted. */
		DesiredInstanceType?: GET_UpdateScalingParametersScalingParametersDesiredInstanceType;
		DesiredReplicationCount?: number;
		DesiredPartitionCount?: number;
	}

	export enum GET_UpdateScalingParametersScalingParametersDesiredInstanceType { search_m1_small = 0, search_m1_large = 1, search_m2_xlarge = 2, search_m2_2xlarge = 3, search_m3_medium = 4, search_m3_large = 5, search_m3_xlarge = 6, search_m3_2xlarge = 7 }

	export enum GET_UpdateScalingParametersAction { UpdateScalingParameters = 0 }

	export enum GET_UpdateScalingParametersVersion { _2013_01_01 = 0 }

	export enum POST_UpdateScalingParametersVersion { _2013_01_01 = 0 }

	export enum GET_UpdateServiceAccessPoliciesAction { UpdateServiceAccessPolicies = 0 }

	export enum GET_UpdateServiceAccessPoliciesVersion { _2013_01_01 = 0 }

	export enum POST_UpdateServiceAccessPoliciesVersion { _2013_01_01 = 0 }

}

