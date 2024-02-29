import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A response message that contains the status of a newly created domain. */
	export interface CreateDomainResponse {

		/** The current status of the search domain. */
		DomainStatus?: DomainStatus;
	}

	/** A response message that contains the status of a newly created domain. */
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
		 * A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed.
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: string;
		Created?: boolean | null;
		Deleted?: boolean | null;
		NumSearchableDocs?: number | null;
		DocService?: ServiceEndpoint;
		SearchService?: ServiceEndpoint;

		/** Required */
		RequiresIndexDocuments: boolean;
		Processing?: boolean | null;
		SearchInstanceType?: string;
		SearchPartitionCount?: number | null;
		SearchInstanceCount?: number | null;
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
		 * A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed.
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: FormControl<string | null | undefined>,
		Created: FormControl<boolean | null | undefined>,
		Deleted: FormControl<boolean | null | undefined>,
		NumSearchableDocs: FormControl<number | null | undefined>,

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
			Created: new FormControl<boolean | null | undefined>(undefined),
			Deleted: new FormControl<boolean | null | undefined>(undefined),
			NumSearchableDocs: new FormControl<number | null | undefined>(undefined),
			RequiresIndexDocuments: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			Processing: new FormControl<boolean | null | undefined>(undefined),
			SearchInstanceType: new FormControl<string | null | undefined>(undefined),
			SearchPartitionCount: new FormControl<number | null | undefined>(undefined),
			SearchInstanceCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The endpoint to which service requests can be submitted, including the actual URL prefix for sending requests and the Amazon Resource Name (ARN) so the endpoint can be referenced in other API calls such as <a>UpdateServiceAccessPolicies</a>. */
	export interface ServiceEndpoint {

		/** An Amazon Resource Name (ARN). See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information. */
		Arn?: string | null;

		/** The URL (including /version/pathPrefix) to which service requests can be submitted. */
		Endpoint?: string | null;
	}

	/** The endpoint to which service requests can be submitted, including the actual URL prefix for sending requests and the Amazon Resource Name (ARN) so the endpoint can be referenced in other API calls such as <a>UpdateServiceAccessPolicies</a>. */
	export interface ServiceEndpointFormProperties {

		/** An Amazon Resource Name (ARN). See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information. */
		Arn: FormControl<string | null | undefined>,

		/** The URL (including /version/pathPrefix) to which service requests can be submitted. */
		Endpoint: FormControl<string | null | undefined>,
	}
	export function CreateServiceEndpointFormGroup() {
		return new FormGroup<ServiceEndpointFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Endpoint: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An error occurred while processing the request. */
	export interface BaseException {

		/** A machine-parsable string error or warning code. */
		Code?: string | null;

		/** A human-readable string error or warning message. */
		Message?: string | null;
	}

	/** An error occurred while processing the request. */
	export interface BaseExceptionFormProperties {

		/** A machine-parsable string error or warning code. */
		Code: FormControl<string | null | undefined>,

		/** A human-readable string error or warning message. */
		Message: FormControl<string | null | undefined>,
	}
	export function CreateBaseExceptionFormGroup() {
		return new FormGroup<BaseExceptionFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An internal error occurred while processing the request. If this problem persists, report an issue from the <a href="http://status.aws.amazon.com/">Service Health Dashboard</a>. */
	export interface InternalException {
	}

	/** An internal error occurred while processing the request. If this problem persists, report an issue from the <a href="http://status.aws.amazon.com/">Service Health Dashboard</a>. */
	export interface InternalExceptionFormProperties {
	}
	export function CreateInternalExceptionFormGroup() {
		return new FormGroup<InternalExceptionFormProperties>({
		});

	}


	/** The request was rejected because a resource limit has already been met. */
	export interface LimitExceededException {
	}

	/** The request was rejected because a resource limit has already been met. */
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
		});

	}


	/** A response message that contains the status of an updated index field. */
	export interface DefineIndexFieldResponse {

		/**
		 * The value of an <code>IndexField</code> and its current status.
		 * Required
		 */
		IndexField: IndexFieldStatus;
	}

	/** A response message that contains the status of an updated index field. */
	export interface DefineIndexFieldResponseFormProperties {
	}
	export function CreateDefineIndexFieldResponseFormGroup() {
		return new FormGroup<DefineIndexFieldResponseFormProperties>({
		});

	}


	/** The value of an <code>IndexField</code> and its current status. */
	export interface IndexFieldStatus {

		/**
		 * Defines a field in the index, including its name, type, and the source of its data. The <code>IndexFieldType</code> indicates which of the options will be present. It is invalid to specify options for a type other than the <code>IndexFieldType</code>.
		 * Required
		 */
		Options: IndexField;

		/**
		 * The status of an option, including when it was last updated and whether it is actively in use for searches.
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


	/** Defines a field in the index, including its name, type, and the source of its data. The <code>IndexFieldType</code> indicates which of the options will be present. It is invalid to specify options for a type other than the <code>IndexFieldType</code>. */
	export interface IndexField {

		/** Required */
		IndexFieldName: string;

		/** Required */
		IndexFieldType: IndexFieldType;
		UIntOptions?: UIntOptions;
		LiteralOptions?: LiteralOptions;
		TextOptions?: TextOptions;
		SourceAttributes?: Array<SourceAttribute>;
	}

	/** Defines a field in the index, including its name, type, and the source of its data. The <code>IndexFieldType</code> indicates which of the options will be present. It is invalid to specify options for a type other than the <code>IndexFieldType</code>. */
	export interface IndexFieldFormProperties {

		/** Required */
		IndexFieldName: FormControl<string | null | undefined>,

		/** Required */
		IndexFieldType: FormControl<IndexFieldType | null | undefined>,
	}
	export function CreateIndexFieldFormGroup() {
		return new FormGroup<IndexFieldFormProperties>({
			IndexFieldName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IndexFieldType: new FormControl<IndexFieldType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The type of <code>IndexField</code>. */
	export enum IndexFieldType { uint = 'uint', literal = 'literal', text = 'text' }


	/** Options that define a <code>uint</code> field in the search index. */
	export interface UIntOptions {
		DefaultValue?: number | null;
	}

	/** Options that define a <code>uint</code> field in the search index. */
	export interface UIntOptionsFormProperties {
		DefaultValue: FormControl<number | null | undefined>,
	}
	export function CreateUIntOptionsFormGroup() {
		return new FormGroup<UIntOptionsFormProperties>({
			DefaultValue: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Options that define a literal field in the search index. */
	export interface LiteralOptions {
		DefaultValue?: string;
		SearchEnabled?: boolean | null;
		FacetEnabled?: boolean | null;
		ResultEnabled?: boolean | null;
	}

	/** Options that define a literal field in the search index. */
	export interface LiteralOptionsFormProperties {
		DefaultValue: FormControl<string | null | undefined>,
		SearchEnabled: FormControl<boolean | null | undefined>,
		FacetEnabled: FormControl<boolean | null | undefined>,
		ResultEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateLiteralOptionsFormGroup() {
		return new FormGroup<LiteralOptionsFormProperties>({
			DefaultValue: new FormControl<string | null | undefined>(undefined),
			SearchEnabled: new FormControl<boolean | null | undefined>(undefined),
			FacetEnabled: new FormControl<boolean | null | undefined>(undefined),
			ResultEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Options that define a text field in the search index. */
	export interface TextOptions {
		DefaultValue?: string;
		FacetEnabled?: boolean | null;
		ResultEnabled?: boolean | null;
		TextProcessor?: string;
	}

	/** Options that define a text field in the search index. */
	export interface TextOptionsFormProperties {
		DefaultValue: FormControl<string | null | undefined>,
		FacetEnabled: FormControl<boolean | null | undefined>,
		ResultEnabled: FormControl<boolean | null | undefined>,
		TextProcessor: FormControl<string | null | undefined>,
	}
	export function CreateTextOptionsFormGroup() {
		return new FormGroup<TextOptionsFormProperties>({
			DefaultValue: new FormControl<string | null | undefined>(undefined),
			FacetEnabled: new FormControl<boolean | null | undefined>(undefined),
			ResultEnabled: new FormControl<boolean | null | undefined>(undefined),
			TextProcessor: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Identifies the source data for an index field. An optional data transformation can be applied to the source data when populating the index field. By default, the value of the source attribute is copied to the index field. */
	export interface SourceAttribute {

		/** Required */
		SourceDataFunction: SourceDataFunction;
		SourceDataCopy?: SourceData;
		SourceDataTrimTitle?: SourceDataTrimTitle;
		SourceDataMap?: SourceDataMap;
	}

	/** Identifies the source data for an index field. An optional data transformation can be applied to the source data when populating the index field. By default, the value of the source attribute is copied to the index field. */
	export interface SourceAttributeFormProperties {

		/** Required */
		SourceDataFunction: FormControl<SourceDataFunction | null | undefined>,
	}
	export function CreateSourceAttributeFormGroup() {
		return new FormGroup<SourceAttributeFormProperties>({
			SourceDataFunction: new FormControl<SourceDataFunction | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SourceDataFunction { Copy = 'Copy', TrimTitle = 'TrimTitle', Map = 'Map' }


	/** The source attribute name and an optional default value to use if a document doesn't have an attribute of that name. */
	export interface SourceData {

		/** Required */
		SourceName: string;
		DefaultValue?: string;
	}

	/** The source attribute name and an optional default value to use if a document doesn't have an attribute of that name. */
	export interface SourceDataFormProperties {

		/** Required */
		SourceName: FormControl<string | null | undefined>,
		DefaultValue: FormControl<string | null | undefined>,
	}
	export function CreateSourceDataFormGroup() {
		return new FormGroup<SourceDataFormProperties>({
			SourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DefaultValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies how to trim common words from the beginning of a field to enable title sorting by that field. */
	export interface SourceDataTrimTitle {

		/** Required */
		SourceName: string;
		DefaultValue?: string;
		Separator?: string;

		/** An <a href="http://tools.ietf.org/html/rfc4646">IETF RFC 4646</a> language code. Only the primary language is considered. English (en) is currently the only supported language. */
		Language?: string | null;
	}

	/** Specifies how to trim common words from the beginning of a field to enable title sorting by that field. */
	export interface SourceDataTrimTitleFormProperties {

		/** Required */
		SourceName: FormControl<string | null | undefined>,
		DefaultValue: FormControl<string | null | undefined>,
		Separator: FormControl<string | null | undefined>,

		/** An <a href="http://tools.ietf.org/html/rfc4646">IETF RFC 4646</a> language code. Only the primary language is considered. English (en) is currently the only supported language. */
		Language: FormControl<string | null | undefined>,
	}
	export function CreateSourceDataTrimTitleFormGroup() {
		return new FormGroup<SourceDataTrimTitleFormProperties>({
			SourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DefaultValue: new FormControl<string | null | undefined>(undefined),
			Separator: new FormControl<string | null | undefined>(undefined),
			Language: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[a-zA-Z]{2,8}(?:-[a-zA-Z]{2,8})*')]),
		});

	}


	/** Specifies how to map source attribute values to custom values when populating an <code>IndexField</code>. */
	export interface SourceDataMap {

		/** Required */
		SourceName: string;
		DefaultValue?: string;
		Cases?: StringCaseMap;
	}

	/** Specifies how to map source attribute values to custom values when populating an <code>IndexField</code>. */
	export interface SourceDataMapFormProperties {

		/** Required */
		SourceName: FormControl<string | null | undefined>,
		DefaultValue: FormControl<string | null | undefined>,
	}
	export function CreateSourceDataMapFormGroup() {
		return new FormGroup<SourceDataMapFormProperties>({
			SourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DefaultValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StringCaseMap {
	}
	export interface StringCaseMapFormProperties {
	}
	export function CreateStringCaseMapFormGroup() {
		return new FormGroup<StringCaseMapFormProperties>({
		});

	}


	/** The status of an option, including when it was last updated and whether it is actively in use for searches. */
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

	/** The status of an option, including when it was last updated and whether it is actively in use for searches. */
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


	/** The state of processing a change to an option. */
	export enum OptionState { RequiresIndexDocuments = 'RequiresIndexDocuments', Processing = 'Processing', Active = 'Active' }


	/** The request was rejected because it specified an invalid type definition. */
	export interface InvalidTypeException {
	}

	/** The request was rejected because it specified an invalid type definition. */
	export interface InvalidTypeExceptionFormProperties {
	}
	export function CreateInvalidTypeExceptionFormGroup() {
		return new FormGroup<InvalidTypeExceptionFormProperties>({
		});

	}


	/** The request was rejected because it attempted to reference a resource that does not exist. */
	export interface ResourceNotFoundException {
	}

	/** The request was rejected because it attempted to reference a resource that does not exist. */
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}


	/** A response message that contains the status of an updated <code>RankExpression</code>. */
	export interface DefineRankExpressionResponse {

		/**
		 * The value of a <code>RankExpression</code> and its current status.
		 * Required
		 */
		RankExpression: RankExpressionStatus;
	}

	/** A response message that contains the status of an updated <code>RankExpression</code>. */
	export interface DefineRankExpressionResponseFormProperties {
	}
	export function CreateDefineRankExpressionResponseFormGroup() {
		return new FormGroup<DefineRankExpressionResponseFormProperties>({
		});

	}


	/** The value of a <code>RankExpression</code> and its current status. */
	export interface RankExpressionStatus {

		/** Required */
		Options: NamedRankExpression;

		/**
		 * The status of an option, including when it was last updated and whether it is actively in use for searches.
		 * Required
		 */
		Status: OptionStatus;
	}

	/** The value of a <code>RankExpression</code> and its current status. */
	export interface RankExpressionStatusFormProperties {
	}
	export function CreateRankExpressionStatusFormGroup() {
		return new FormGroup<RankExpressionStatusFormProperties>({
		});

	}


	/** A named expression that can be evaluated at search time and used for ranking or thresholding in a search query.  */
	export interface NamedRankExpression {

		/** Required */
		RankName: string;

		/** Required */
		RankExpression: string;
	}

	/** A named expression that can be evaluated at search time and used for ranking or thresholding in a search query.  */
	export interface NamedRankExpressionFormProperties {

		/** Required */
		RankName: FormControl<string | null | undefined>,

		/** Required */
		RankExpression: FormControl<string | null | undefined>,
	}
	export function CreateNamedRankExpressionFormGroup() {
		return new FormGroup<NamedRankExpressionFormProperties>({
			RankName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RankExpression: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A response message that contains the status of a newly deleted domain, or no status if the domain has already been completely deleted. */
	export interface DeleteDomainResponse {

		/** The current status of the search domain. */
		DomainStatus?: DomainStatus;
	}

	/** A response message that contains the status of a newly deleted domain, or no status if the domain has already been completely deleted. */
	export interface DeleteDomainResponseFormProperties {
	}
	export function CreateDeleteDomainResponseFormGroup() {
		return new FormGroup<DeleteDomainResponseFormProperties>({
		});

	}


	/** A response message that contains the status of a deleted index field. */
	export interface DeleteIndexFieldResponse {

		/**
		 * The value of an <code>IndexField</code> and its current status.
		 * Required
		 */
		IndexField: IndexFieldStatus;
	}

	/** A response message that contains the status of a deleted index field. */
	export interface DeleteIndexFieldResponseFormProperties {
	}
	export function CreateDeleteIndexFieldResponseFormGroup() {
		return new FormGroup<DeleteIndexFieldResponseFormProperties>({
		});

	}


	/** A response message that contains the status of a deleted <code>RankExpression</code>. */
	export interface DeleteRankExpressionResponse {

		/**
		 * The value of a <code>RankExpression</code> and its current status.
		 * Required
		 */
		RankExpression: RankExpressionStatus;
	}

	/** A response message that contains the status of a deleted <code>RankExpression</code>. */
	export interface DeleteRankExpressionResponseFormProperties {
	}
	export function CreateDeleteRankExpressionResponseFormGroup() {
		return new FormGroup<DeleteRankExpressionResponseFormProperties>({
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
		 * The status of an option, including when it was last updated and whether it is actively in use for searches.
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


	/** The request was rejected because it attempted an operation which is not enabled. */
	export interface DisabledOperationException {
	}

	/** The request was rejected because it attempted an operation which is not enabled. */
	export interface DisabledOperationExceptionFormProperties {
	}
	export function CreateDisabledOperationExceptionFormGroup() {
		return new FormGroup<DisabledOperationExceptionFormProperties>({
		});

	}


	/** A response message that contains the default search field for a search domain. */
	export interface DescribeDefaultSearchFieldResponse {

		/** Required */
		DefaultSearchField: DefaultSearchFieldStatus;
	}

	/** A response message that contains the default search field for a search domain. */
	export interface DescribeDefaultSearchFieldResponseFormProperties {
	}
	export function CreateDescribeDefaultSearchFieldResponseFormGroup() {
		return new FormGroup<DescribeDefaultSearchFieldResponseFormProperties>({
		});

	}


	/** The value of the <code>DefaultSearchField</code> configured for this search domain and its current status. */
	export interface DefaultSearchFieldStatus {

		/** Required */
		Options: string;

		/**
		 * The status of an option, including when it was last updated and whether it is actively in use for searches.
		 * Required
		 */
		Status: OptionStatus;
	}

	/** The value of the <code>DefaultSearchField</code> configured for this search domain and its current status. */
	export interface DefaultSearchFieldStatusFormProperties {

		/** Required */
		Options: FormControl<string | null | undefined>,
	}
	export function CreateDefaultSearchFieldStatusFormGroup() {
		return new FormGroup<DefaultSearchFieldStatusFormProperties>({
			Options: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A response message that contains the status of one or more domains. */
	export interface DescribeDomainsResponse {

		/**
		 * The current status of all of your search domains.
		 * Required
		 */
		DomainStatusList: Array<DomainStatus>;
	}

	/** A response message that contains the status of one or more domains. */
	export interface DescribeDomainsResponseFormProperties {
	}
	export function CreateDescribeDomainsResponseFormGroup() {
		return new FormGroup<DescribeDomainsResponseFormProperties>({
		});

	}


	/** A response message that contains the index fields for a search domain. */
	export interface DescribeIndexFieldsResponse {

		/** Required */
		IndexFields: Array<IndexFieldStatus>;
	}

	/** A response message that contains the index fields for a search domain. */
	export interface DescribeIndexFieldsResponseFormProperties {
	}
	export function CreateDescribeIndexFieldsResponseFormGroup() {
		return new FormGroup<DescribeIndexFieldsResponseFormProperties>({
		});

	}


	/** A response message that contains the rank expressions for a search domain. */
	export interface DescribeRankExpressionsResponse {

		/** Required */
		RankExpressions: Array<RankExpressionStatus>;
	}

	/** A response message that contains the rank expressions for a search domain. */
	export interface DescribeRankExpressionsResponseFormProperties {
	}
	export function CreateDescribeRankExpressionsResponseFormGroup() {
		return new FormGroup<DescribeRankExpressionsResponseFormProperties>({
		});

	}


	/** A response message that contains the access policies for a domain. */
	export interface DescribeServiceAccessPoliciesResponse {

		/**
		 * A <code>PolicyDocument</code> that specifies access policies for the search domain's services, and the current status of those policies.
		 * Required
		 */
		AccessPolicies: AccessPoliciesStatus;
	}

	/** A response message that contains the access policies for a domain. */
	export interface DescribeServiceAccessPoliciesResponseFormProperties {
	}
	export function CreateDescribeServiceAccessPoliciesResponseFormGroup() {
		return new FormGroup<DescribeServiceAccessPoliciesResponseFormProperties>({
		});

	}


	/** A <code>PolicyDocument</code> that specifies access policies for the search domain's services, and the current status of those policies. */
	export interface AccessPoliciesStatus {

		/**
		 * <p>An IAM access policy as described in <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?AccessPolicyLanguage.html" target="_blank">The Access Policy Language</a> in <i>Using AWS Identity and Access Management</i>. The maximum size of an access policy document is 100 KB.</p> <p>Example: <code>{"Statement": [{"Effect":"Allow", "Action": "*", "Resource": "arn:aws:cs:us-east-1:1234567890:search/movies", "Condition": { "IpAddress": { "aws:SourceIp": ["203.0.113.1/32"] } }}, {"Effect":"Allow", "Action": "*", "Resource": "arn:aws:cs:us-east-1:1234567890:documents/movies", "Condition": { "IpAddress": { "aws:SourceIp": ["203.0.113.1/32"] } }} ] }</code></p>
		 * Required
		 */
		Options: string;

		/**
		 * The status of an option, including when it was last updated and whether it is actively in use for searches.
		 * Required
		 */
		Status: OptionStatus;
	}

	/** A <code>PolicyDocument</code> that specifies access policies for the search domain's services, and the current status of those policies. */
	export interface AccessPoliciesStatusFormProperties {

		/**
		 * <p>An IAM access policy as described in <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?AccessPolicyLanguage.html" target="_blank">The Access Policy Language</a> in <i>Using AWS Identity and Access Management</i>. The maximum size of an access policy document is 100 KB.</p> <p>Example: <code>{"Statement": [{"Effect":"Allow", "Action": "*", "Resource": "arn:aws:cs:us-east-1:1234567890:search/movies", "Condition": { "IpAddress": { "aws:SourceIp": ["203.0.113.1/32"] } }}, {"Effect":"Allow", "Action": "*", "Resource": "arn:aws:cs:us-east-1:1234567890:documents/movies", "Condition": { "IpAddress": { "aws:SourceIp": ["203.0.113.1/32"] } }} ] }</code></p>
		 * Required
		 */
		Options: FormControl<string | null | undefined>,
	}
	export function CreateAccessPoliciesStatusFormGroup() {
		return new FormGroup<AccessPoliciesStatusFormProperties>({
			Options: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A response message that contains the stemming options for a search domain. */
	export interface DescribeStemmingOptionsResponse {

		/**
		 * The stemming options configured for this search domain and the current status of those options.
		 * Required
		 */
		Stems: StemmingOptionsStatus;
	}

	/** A response message that contains the stemming options for a search domain. */
	export interface DescribeStemmingOptionsResponseFormProperties {
	}
	export function CreateDescribeStemmingOptionsResponseFormGroup() {
		return new FormGroup<DescribeStemmingOptionsResponseFormProperties>({
		});

	}


	/** The stemming options configured for this search domain and the current status of those options. */
	export interface StemmingOptionsStatus {

		/**
		 * Maps terms to their stems, serialized as a JSON document. The document has a single object with one property "stems" whose value is an object mapping terms to their stems. The maximum size of a stemming document is 500 KB. Example: <code>{ "stems": {"people": "person", "walking": "walk"} }</code>
		 * Required
		 */
		Options: string;

		/**
		 * The status of an option, including when it was last updated and whether it is actively in use for searches.
		 * Required
		 */
		Status: OptionStatus;
	}

	/** The stemming options configured for this search domain and the current status of those options. */
	export interface StemmingOptionsStatusFormProperties {

		/**
		 * Maps terms to their stems, serialized as a JSON document. The document has a single object with one property "stems" whose value is an object mapping terms to their stems. The maximum size of a stemming document is 500 KB. Example: <code>{ "stems": {"people": "person", "walking": "walk"} }</code>
		 * Required
		 */
		Options: FormControl<string | null | undefined>,
	}
	export function CreateStemmingOptionsStatusFormGroup() {
		return new FormGroup<StemmingOptionsStatusFormProperties>({
			Options: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A response message that contains the stopword options for a search domain. */
	export interface DescribeStopwordOptionsResponse {

		/**
		 * The stopword options configured for this search domain and the current status of those options.
		 * Required
		 */
		Stopwords: StopwordOptionsStatus;
	}

	/** A response message that contains the stopword options for a search domain. */
	export interface DescribeStopwordOptionsResponseFormProperties {
	}
	export function CreateDescribeStopwordOptionsResponseFormGroup() {
		return new FormGroup<DescribeStopwordOptionsResponseFormProperties>({
		});

	}


	/** The stopword options configured for this search domain and the current status of those options. */
	export interface StopwordOptionsStatus {

		/**
		 * Lists stopwords serialized as a JSON document. The document has a single object with one property "stopwords" whose value is an array of strings. The maximum size of a stopwords document is 10 KB. Example: <code>{ "stopwords": ["a", "an", "the", "of"] }</code>
		 * Required
		 */
		Options: string;

		/**
		 * The status of an option, including when it was last updated and whether it is actively in use for searches.
		 * Required
		 */
		Status: OptionStatus;
	}

	/** The stopword options configured for this search domain and the current status of those options. */
	export interface StopwordOptionsStatusFormProperties {

		/**
		 * Lists stopwords serialized as a JSON document. The document has a single object with one property "stopwords" whose value is an array of strings. The maximum size of a stopwords document is 10 KB. Example: <code>{ "stopwords": ["a", "an", "the", "of"] }</code>
		 * Required
		 */
		Options: FormControl<string | null | undefined>,
	}
	export function CreateStopwordOptionsStatusFormGroup() {
		return new FormGroup<StopwordOptionsStatusFormProperties>({
			Options: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A response message that contains the synonym options for a search domain. */
	export interface DescribeSynonymOptionsResponse {

		/**
		 * The synonym options configured for this search domain and the current status of those options.
		 * Required
		 */
		Synonyms: SynonymOptionsStatus;
	}

	/** A response message that contains the synonym options for a search domain. */
	export interface DescribeSynonymOptionsResponseFormProperties {
	}
	export function CreateDescribeSynonymOptionsResponseFormGroup() {
		return new FormGroup<DescribeSynonymOptionsResponseFormProperties>({
		});

	}


	/** The synonym options configured for this search domain and the current status of those options. */
	export interface SynonymOptionsStatus {

		/**
		 * Maps terms to their synonyms, serialized as a JSON document. The document has a single object with one property "synonyms" whose value is an object mapping terms to their synonyms. Each synonym is a simple string or an array of strings. The maximum size of a stopwords document is 100 KB. Example: <code>{ "synonyms": {"cat": ["feline", "kitten"], "puppy": "dog"} }</code>
		 * Required
		 */
		Options: string;

		/**
		 * The status of an option, including when it was last updated and whether it is actively in use for searches.
		 * Required
		 */
		Status: OptionStatus;
	}

	/** The synonym options configured for this search domain and the current status of those options. */
	export interface SynonymOptionsStatusFormProperties {

		/**
		 * Maps terms to their synonyms, serialized as a JSON document. The document has a single object with one property "synonyms" whose value is an object mapping terms to their synonyms. Each synonym is a simple string or an array of strings. The maximum size of a stopwords document is 100 KB. Example: <code>{ "synonyms": {"cat": ["feline", "kitten"], "puppy": "dog"} }</code>
		 * Required
		 */
		Options: FormControl<string | null | undefined>,
	}
	export function CreateSynonymOptionsStatusFormGroup() {
		return new FormGroup<SynonymOptionsStatusFormProperties>({
			Options: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The result of an <code>IndexDocuments</code> action. */
	export interface IndexDocumentsResponse {
		FieldNames?: Array<string>;
	}

	/** The result of an <code>IndexDocuments</code> action. */
	export interface IndexDocumentsResponseFormProperties {
	}
	export function CreateIndexDocumentsResponseFormGroup() {
		return new FormGroup<IndexDocumentsResponseFormProperties>({
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


	/** A response message that contains the status of an updated default search field. */
	export interface UpdateDefaultSearchFieldResponse {

		/**
		 * The value of the <code>DefaultSearchField</code> configured for this search domain and its current status.
		 * Required
		 */
		DefaultSearchField: DefaultSearchFieldStatus;
	}

	/** A response message that contains the status of an updated default search field. */
	export interface UpdateDefaultSearchFieldResponseFormProperties {
	}
	export function CreateUpdateDefaultSearchFieldResponseFormGroup() {
		return new FormGroup<UpdateDefaultSearchFieldResponseFormProperties>({
		});

	}


	/** A response message that contains the status of updated access policies. */
	export interface UpdateServiceAccessPoliciesResponse {

		/**
		 * A <code>PolicyDocument</code> that specifies access policies for the search domain's services, and the current status of those policies.
		 * Required
		 */
		AccessPolicies: AccessPoliciesStatus;
	}

	/** A response message that contains the status of updated access policies. */
	export interface UpdateServiceAccessPoliciesResponseFormProperties {
	}
	export function CreateUpdateServiceAccessPoliciesResponseFormGroup() {
		return new FormGroup<UpdateServiceAccessPoliciesResponseFormProperties>({
		});

	}


	/** A response message that contains the status of updated stemming options. */
	export interface UpdateStemmingOptionsResponse {

		/**
		 * The stemming options configured for this search domain and the current status of those options.
		 * Required
		 */
		Stems: StemmingOptionsStatus;
	}

	/** A response message that contains the status of updated stemming options. */
	export interface UpdateStemmingOptionsResponseFormProperties {
	}
	export function CreateUpdateStemmingOptionsResponseFormGroup() {
		return new FormGroup<UpdateStemmingOptionsResponseFormProperties>({
		});

	}


	/** A response message that contains the status of updated stopword options. */
	export interface UpdateStopwordOptionsResponse {

		/**
		 * The stopword options configured for this search domain and the current status of those options.
		 * Required
		 */
		Stopwords: StopwordOptionsStatus;
	}

	/** A response message that contains the status of updated stopword options. */
	export interface UpdateStopwordOptionsResponseFormProperties {
	}
	export function CreateUpdateStopwordOptionsResponseFormGroup() {
		return new FormGroup<UpdateStopwordOptionsResponseFormProperties>({
		});

	}


	/** A response message that contains the status of updated synonym options. */
	export interface UpdateSynonymOptionsResponse {

		/**
		 * The synonym options configured for this search domain and the current status of those options.
		 * Required
		 */
		Synonyms: SynonymOptionsStatus;
	}

	/** A response message that contains the status of updated synonym options. */
	export interface UpdateSynonymOptionsResponseFormProperties {
	}
	export function CreateUpdateSynonymOptionsResponseFormGroup() {
		return new FormGroup<UpdateSynonymOptionsResponseFormProperties>({
		});

	}

	export interface CreateDomainRequest {

		/**
		 * A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed.
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: string;
	}
	export interface CreateDomainRequestFormProperties {

		/**
		 * A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed.
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateCreateDomainRequestFormGroup() {
		return new FormGroup<CreateDomainRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
		});

	}

	export interface DefineIndexFieldRequest {

		/**
		 * A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed.
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: string;

		/**
		 * Defines a field in the index, including its name, type, and the source of its data. The <code>IndexFieldType</code> indicates which of the options will be present. It is invalid to specify options for a type other than the <code>IndexFieldType</code>.
		 * Required
		 */
		IndexField: IndexField;
	}
	export interface DefineIndexFieldRequestFormProperties {

		/**
		 * A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed.
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

	export interface DefineRankExpressionRequest {

		/**
		 * A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed.
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: string;

		/**
		 * A named expression that can be evaluated at search time and used for ranking or thresholding in a search query.
		 * Required
		 */
		RankExpression: NamedRankExpression;
	}
	export interface DefineRankExpressionRequestFormProperties {

		/**
		 * A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed.
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateDefineRankExpressionRequestFormGroup() {
		return new FormGroup<DefineRankExpressionRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
		});

	}

	export interface DeleteDomainRequest {

		/**
		 * A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed.
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: string;
	}
	export interface DeleteDomainRequestFormProperties {

		/**
		 * A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed.
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDomainRequestFormGroup() {
		return new FormGroup<DeleteDomainRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
		});

	}

	export interface DeleteIndexFieldRequest {

		/**
		 * A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed.
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: string;

		/**
		 * A string that represents the name of an index field. Field names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore). Uppercase letters and hyphens are not allowed. The names "body", "docid", and "text_relevance" are reserved and cannot be specified as field or rank expression names.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		IndexFieldName: string;
	}
	export interface DeleteIndexFieldRequestFormProperties {

		/**
		 * A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed.
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: FormControl<string | null | undefined>,

		/**
		 * A string that represents the name of an index field. Field names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore). Uppercase letters and hyphens are not allowed. The names "body", "docid", and "text_relevance" are reserved and cannot be specified as field or rank expression names.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		IndexFieldName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteIndexFieldRequestFormGroup() {
		return new FormGroup<DeleteIndexFieldRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
			IndexFieldName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-z][a-z0-9_]*')]),
		});

	}

	export interface DeleteRankExpressionRequest {

		/**
		 * A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed.
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: string;

		/** Required */
		RankName: string;
	}
	export interface DeleteRankExpressionRequestFormProperties {

		/**
		 * A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed.
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: FormControl<string | null | undefined>,

		/** Required */
		RankName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRankExpressionRequestFormGroup() {
		return new FormGroup<DeleteRankExpressionRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
			RankName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Container for the parameters to the <code><a>DescribeAvailabilityOptions</a></code> operation. Specifies the name of the domain you want to describe. To show the active configuration and exclude any pending changes, set the Deployed option to <code>true</code>. */
	export interface DescribeAvailabilityOptionsRequest {

		/** Required */
		DomainName: string;
	}

	/** Container for the parameters to the <code><a>DescribeAvailabilityOptions</a></code> operation. Specifies the name of the domain you want to describe. To show the active configuration and exclude any pending changes, set the Deployed option to <code>true</code>. */
	export interface DescribeAvailabilityOptionsRequestFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAvailabilityOptionsRequestFormGroup() {
		return new FormGroup<DescribeAvailabilityOptionsRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeDefaultSearchFieldRequest {

		/**
		 * A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed.
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: string;
	}
	export interface DescribeDefaultSearchFieldRequestFormProperties {

		/**
		 * A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed.
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDefaultSearchFieldRequestFormGroup() {
		return new FormGroup<DescribeDefaultSearchFieldRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
		});

	}

	export interface DescribeDomainsRequest {
		DomainNames?: Array<string>;
	}
	export interface DescribeDomainsRequestFormProperties {
	}
	export function CreateDescribeDomainsRequestFormGroup() {
		return new FormGroup<DescribeDomainsRequestFormProperties>({
		});

	}

	export interface DescribeIndexFieldsRequest {

		/**
		 * A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed.
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: string;
		FieldNames?: Array<string>;
	}
	export interface DescribeIndexFieldsRequestFormProperties {

		/**
		 * A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed.
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeIndexFieldsRequestFormGroup() {
		return new FormGroup<DescribeIndexFieldsRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
		});

	}

	export interface DescribeRankExpressionsRequest {

		/**
		 * A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed.
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: string;
		RankNames?: Array<string>;
	}
	export interface DescribeRankExpressionsRequestFormProperties {

		/**
		 * A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed.
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRankExpressionsRequestFormGroup() {
		return new FormGroup<DescribeRankExpressionsRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
		});

	}

	export interface DescribeServiceAccessPoliciesRequest {

		/**
		 * A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed.
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: string;
	}
	export interface DescribeServiceAccessPoliciesRequestFormProperties {

		/**
		 * A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed.
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeServiceAccessPoliciesRequestFormGroup() {
		return new FormGroup<DescribeServiceAccessPoliciesRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
		});

	}

	export interface DescribeStemmingOptionsRequest {

		/**
		 * A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed.
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: string;
	}
	export interface DescribeStemmingOptionsRequestFormProperties {

		/**
		 * A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed.
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStemmingOptionsRequestFormGroup() {
		return new FormGroup<DescribeStemmingOptionsRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
		});

	}

	export interface DescribeStopwordOptionsRequest {

		/**
		 * A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed.
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: string;
	}
	export interface DescribeStopwordOptionsRequestFormProperties {

		/**
		 * A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed.
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStopwordOptionsRequestFormGroup() {
		return new FormGroup<DescribeStopwordOptionsRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
		});

	}

	export interface DescribeSynonymOptionsRequest {

		/**
		 * A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed.
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: string;
	}
	export interface DescribeSynonymOptionsRequestFormProperties {

		/**
		 * A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed.
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSynonymOptionsRequestFormGroup() {
		return new FormGroup<DescribeSynonymOptionsRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
		});

	}

	export interface IndexDocumentsRequest {

		/**
		 * A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed.
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: string;
	}
	export interface IndexDocumentsRequestFormProperties {

		/**
		 * A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed.
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
		 * A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed.
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
		 * A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed.
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

	export interface UpdateDefaultSearchFieldRequest {

		/**
		 * A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed.
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: string;

		/** Required */
		DefaultSearchField: string;
	}
	export interface UpdateDefaultSearchFieldRequestFormProperties {

		/**
		 * A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed.
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: FormControl<string | null | undefined>,

		/** Required */
		DefaultSearchField: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDefaultSearchFieldRequestFormGroup() {
		return new FormGroup<UpdateDefaultSearchFieldRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
			DefaultSearchField: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateServiceAccessPoliciesRequest {

		/**
		 * A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed.
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: string;

		/**
		 * <p>An IAM access policy as described in <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?AccessPolicyLanguage.html" target="_blank">The Access Policy Language</a> in <i>Using AWS Identity and Access Management</i>. The maximum size of an access policy document is 100 KB.</p> <p>Example: <code>{"Statement": [{"Effect":"Allow", "Action": "*", "Resource": "arn:aws:cs:us-east-1:1234567890:search/movies", "Condition": { "IpAddress": { "aws:SourceIp": ["203.0.113.1/32"] } }}, {"Effect":"Allow", "Action": "*", "Resource": "arn:aws:cs:us-east-1:1234567890:documents/movies", "Condition": { "IpAddress": { "aws:SourceIp": ["203.0.113.1/32"] } }} ] }</code></p>
		 * Required
		 */
		AccessPolicies: string;
	}
	export interface UpdateServiceAccessPoliciesRequestFormProperties {

		/**
		 * A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed.
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: FormControl<string | null | undefined>,

		/**
		 * <p>An IAM access policy as described in <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?AccessPolicyLanguage.html" target="_blank">The Access Policy Language</a> in <i>Using AWS Identity and Access Management</i>. The maximum size of an access policy document is 100 KB.</p> <p>Example: <code>{"Statement": [{"Effect":"Allow", "Action": "*", "Resource": "arn:aws:cs:us-east-1:1234567890:search/movies", "Condition": { "IpAddress": { "aws:SourceIp": ["203.0.113.1/32"] } }}, {"Effect":"Allow", "Action": "*", "Resource": "arn:aws:cs:us-east-1:1234567890:documents/movies", "Condition": { "IpAddress": { "aws:SourceIp": ["203.0.113.1/32"] } }} ] }</code></p>
		 * Required
		 */
		AccessPolicies: FormControl<string | null | undefined>,
	}
	export function CreateUpdateServiceAccessPoliciesRequestFormGroup() {
		return new FormGroup<UpdateServiceAccessPoliciesRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
			AccessPolicies: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateStemmingOptionsRequest {

		/**
		 * A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed.
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: string;

		/**
		 * Maps terms to their stems, serialized as a JSON document. The document has a single object with one property "stems" whose value is an object mapping terms to their stems. The maximum size of a stemming document is 500 KB. Example: <code>{ "stems": {"people": "person", "walking": "walk"} }</code>
		 * Required
		 */
		Stems: string;
	}
	export interface UpdateStemmingOptionsRequestFormProperties {

		/**
		 * A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed.
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: FormControl<string | null | undefined>,

		/**
		 * Maps terms to their stems, serialized as a JSON document. The document has a single object with one property "stems" whose value is an object mapping terms to their stems. The maximum size of a stemming document is 500 KB. Example: <code>{ "stems": {"people": "person", "walking": "walk"} }</code>
		 * Required
		 */
		Stems: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStemmingOptionsRequestFormGroup() {
		return new FormGroup<UpdateStemmingOptionsRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
			Stems: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateStopwordOptionsRequest {

		/**
		 * A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed.
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: string;

		/**
		 * Lists stopwords serialized as a JSON document. The document has a single object with one property "stopwords" whose value is an array of strings. The maximum size of a stopwords document is 10 KB. Example: <code>{ "stopwords": ["a", "an", "the", "of"] }</code>
		 * Required
		 */
		Stopwords: string;
	}
	export interface UpdateStopwordOptionsRequestFormProperties {

		/**
		 * A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed.
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: FormControl<string | null | undefined>,

		/**
		 * Lists stopwords serialized as a JSON document. The document has a single object with one property "stopwords" whose value is an array of strings. The maximum size of a stopwords document is 10 KB. Example: <code>{ "stopwords": ["a", "an", "the", "of"] }</code>
		 * Required
		 */
		Stopwords: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStopwordOptionsRequestFormGroup() {
		return new FormGroup<UpdateStopwordOptionsRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
			Stopwords: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateSynonymOptionsRequest {

		/**
		 * A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed.
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: string;

		/**
		 * Maps terms to their synonyms, serialized as a JSON document. The document has a single object with one property "synonyms" whose value is an object mapping terms to their synonyms. Each synonym is a simple string or an array of strings. The maximum size of a stopwords document is 100 KB. Example: <code>{ "synonyms": {"cat": ["feline", "kitten"], "puppy": "dog"} }</code>
		 * Required
		 */
		Synonyms: string;
	}
	export interface UpdateSynonymOptionsRequestFormProperties {

		/**
		 * A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed.
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: FormControl<string | null | undefined>,

		/**
		 * Maps terms to their synonyms, serialized as a JSON document. The document has a single object with one property "synonyms" whose value is an object mapping terms to their synonyms. Each synonym is a simple string or an array of strings. The maximum size of a stopwords document is 100 KB. Example: <code>{ "synonyms": {"cat": ["feline", "kitten"], "puppy": "dog"} }</code>
		 * Required
		 */
		Synonyms: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSynonymOptionsRequestFormGroup() {
		return new FormGroup<UpdateSynonymOptionsRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
			Synonyms: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a new search domain.
		 * Get #Action=CreateDomain
		 * @param {string} DomainName Min length: 3
		 *     Max length: 28
		 * @return {void} Success
		 */
		GET_CreateDomain(DomainName: string, Action: GET_CreateDomainAction, Version: GET_CreateDomainVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateDomain?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Configures an <code>IndexField</code> for the search domain. Used to create new fields and modify existing ones. If the field exists, the new configuration replaces the old one. You can configure a maximum of 200 index fields.
		 * Get #Action=DefineIndexField
		 * @param {string} DomainName Min length: 3
		 *     Max length: 28
		 * @return {void} Success
		 */
		GET_DefineIndexField(DomainName: string, IndexField: GET_DefineIndexFieldIndexField, Action: GET_DefineIndexFieldAction, Version: GET_CreateDomainVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DefineIndexField?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&IndexField=' + IndexField + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Configures a <code>RankExpression</code> for the search domain. Used to create new rank expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. You can configure a maximum of 50 rank expressions.
		 * Get #Action=DefineRankExpression
		 * @param {string} DomainName Min length: 3
		 *     Max length: 28
		 * @return {void} Success
		 */
		GET_DefineRankExpression(DomainName: string, RankExpression: GET_DefineRankExpressionRankExpression, Action: GET_DefineRankExpressionAction, Version: GET_CreateDomainVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DefineRankExpression?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&RankExpression=' + RankExpression + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Permanently deletes a search domain and all of its data.
		 * Get #Action=DeleteDomain
		 * @param {string} DomainName Min length: 3
		 *     Max length: 28
		 * @return {void} Success
		 */
		GET_DeleteDomain(DomainName: string, Action: GET_DeleteDomainAction, Version: GET_CreateDomainVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteDomain?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes an <code>IndexField</code> from the search domain.
		 * Get #Action=DeleteIndexField
		 * @param {string} DomainName Min length: 3
		 *     Max length: 28
		 * @param {string} IndexFieldName Min length: 1
		 *     Max length: 64
		 * @return {void} Success
		 */
		GET_DeleteIndexField(DomainName: string, IndexFieldName: string, Action: GET_DeleteIndexFieldAction, Version: GET_CreateDomainVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteIndexField?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&IndexFieldName=' + (IndexFieldName == null ? '' : encodeURIComponent(IndexFieldName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes a <code>RankExpression</code> from the search domain.
		 * Get #Action=DeleteRankExpression
		 * @param {string} DomainName Min length: 3
		 *     Max length: 28
		 * @param {string} RankName The name of the <code>RankExpression</code> to delete.
		 *     Min length: 1    Max length: 64
		 * @return {void} Success
		 */
		GET_DeleteRankExpression(DomainName: string, RankName: string, Action: GET_DeleteRankExpressionAction, Version: GET_CreateDomainVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteRankExpression?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&RankName=' + (RankName == null ? '' : encodeURIComponent(RankName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Get #Action=DescribeAvailabilityOptions
		 * @param {string} DomainName The name of the domain you want to describe.
		 *     Min length: 3    Max length: 28
		 * @return {void} Success
		 */
		GET_DescribeAvailabilityOptions(DomainName: string, Action: GET_DescribeAvailabilityOptionsAction, Version: GET_CreateDomainVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeAvailabilityOptions?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the default search field configured for the search domain.
		 * Get #Action=DescribeDefaultSearchField
		 * @param {string} DomainName Min length: 3
		 *     Max length: 28
		 * @return {void} Success
		 */
		GET_DescribeDefaultSearchField(DomainName: string, Action: GET_DescribeDefaultSearchFieldAction, Version: GET_CreateDomainVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeDefaultSearchField?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default.
		 * Get #Action=DescribeDomains
		 * @param {Array<string>} DomainNames Limits the DescribeDomains response to the specified search domains.
		 * @return {void} Success
		 */
		GET_DescribeDomains(DomainNames: Array<string> | null | undefined, Action: GET_DescribeDomainsAction, Version: GET_CreateDomainVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeDomains?' + DomainNames?.map(z => `DomainNames=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. Shows all fields by default.
		 * Get #Action=DescribeIndexFields
		 * @param {string} DomainName Min length: 3
		 *     Max length: 28
		 * @param {Array<string>} FieldNames Limits the <code>DescribeIndexFields</code> response to the specified fields.
		 * @return {void} Success
		 */
		GET_DescribeIndexFields(DomainName: string, FieldNames: Array<string> | null | undefined, Action: GET_DescribeIndexFieldsAction, Version: GET_CreateDomainVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeIndexFields?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&' + FieldNames?.map(z => `FieldNames=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the rank expressions configured for the search domain. Can be limited to specific rank expressions by name. Shows all rank expressions by default.
		 * Get #Action=DescribeRankExpressions
		 * @param {string} DomainName Min length: 3
		 *     Max length: 28
		 * @param {Array<string>} RankNames Limits the <code>DescribeRankExpressions</code> response to the specified fields.
		 * @return {void} Success
		 */
		GET_DescribeRankExpressions(DomainName: string, RankNames: Array<string> | null | undefined, Action: GET_DescribeRankExpressionsAction, Version: GET_CreateDomainVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeRankExpressions?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&' + RankNames?.map(z => `RankNames=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about the resource-based policies that control access to the domain's document and search services.
		 * Get #Action=DescribeServiceAccessPolicies
		 * @param {string} DomainName Min length: 3
		 *     Max length: 28
		 * @return {void} Success
		 */
		GET_DescribeServiceAccessPolicies(DomainName: string, Action: GET_DescribeServiceAccessPoliciesAction, Version: GET_CreateDomainVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeServiceAccessPolicies?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the stemming dictionary configured for the search domain.
		 * Get #Action=DescribeStemmingOptions
		 * @param {string} DomainName Min length: 3
		 *     Max length: 28
		 * @return {void} Success
		 */
		GET_DescribeStemmingOptions(DomainName: string, Action: GET_DescribeStemmingOptionsAction, Version: GET_CreateDomainVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeStemmingOptions?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the stopwords configured for the search domain.
		 * Get #Action=DescribeStopwordOptions
		 * @param {string} DomainName Min length: 3
		 *     Max length: 28
		 * @return {void} Success
		 */
		GET_DescribeStopwordOptions(DomainName: string, Action: GET_DescribeStopwordOptionsAction, Version: GET_CreateDomainVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeStopwordOptions?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the synonym dictionary configured for the search domain.
		 * Get #Action=DescribeSynonymOptions
		 * @param {string} DomainName Min length: 3
		 *     Max length: 28
		 * @return {void} Success
		 */
		GET_DescribeSynonymOptions(DomainName: string, Action: GET_DescribeSynonymOptionsAction, Version: GET_CreateDomainVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeSynonymOptions?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Tells the search domain to start indexing its documents using the latest text processing options and <code>IndexFields</code>. This operation must be invoked to make options whose <a>OptionStatus</a> has <code>OptionState</code> of <code>RequiresIndexDocuments</code> visible in search results.
		 * Get #Action=IndexDocuments
		 * @param {string} DomainName Min length: 3
		 *     Max length: 28
		 * @return {void} Success
		 */
		GET_IndexDocuments(DomainName: string, Action: GET_IndexDocumentsAction, Version: GET_CreateDomainVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=IndexDocuments?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
		 * Get #Action=UpdateAvailabilityOptions
		 * @param {string} DomainName Min length: 3
		 *     Max length: 28
		 * @param {boolean} MultiAZ You expand an existing search domain to a second Availability Zone by setting the Multi-AZ option to true. Similarly, you can turn off the Multi-AZ option to downgrade the domain to a single Availability Zone by setting the Multi-AZ option to <code>false</code>. 
		 * @return {void} Success
		 */
		GET_UpdateAvailabilityOptions(DomainName: string, MultiAZ: boolean, Action: GET_UpdateAvailabilityOptionsAction, Version: GET_CreateDomainVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateAvailabilityOptions?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&MultiAZ=' + MultiAZ + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Configures the default search field for the search domain. The default search field is the text field that is searched when a search request does not specify which fields to search. By default, it is configured to include the contents of all of the domain's text fields.
		 * Get #Action=UpdateDefaultSearchField
		 * @param {string} DomainName Min length: 3
		 *     Max length: 28
		 * @param {string} DefaultSearchField The text field to search if the search request does not specify which field to search. The default search field is used when search terms are specified with the <code>q</code> parameter, or if a match expression specified with the <code>bq</code> parameter does not constrain the search to a particular field. The default is an empty string, which automatically searches all text fields.
		 * @return {void} Success
		 */
		GET_UpdateDefaultSearchField(DomainName: string, DefaultSearchField: string, Action: GET_UpdateDefaultSearchFieldAction, Version: GET_CreateDomainVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateDefaultSearchField?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&DefaultSearchField=' + (DefaultSearchField == null ? '' : encodeURIComponent(DefaultSearchField)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Configures the policies that control access to the domain's document and search services. The maximum size of an access policy document is 100 KB.
		 * Get #Action=UpdateServiceAccessPolicies
		 * @param {string} DomainName Min length: 3
		 *     Max length: 28
		 * @return {void} Success
		 */
		GET_UpdateServiceAccessPolicies(DomainName: string, AccessPolicies: string, Action: GET_UpdateServiceAccessPoliciesAction, Version: GET_CreateDomainVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateServiceAccessPolicies?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&AccessPolicies=' + (AccessPolicies == null ? '' : encodeURIComponent(AccessPolicies)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Configures a stemming dictionary for the search domain. The stemming dictionary is used during indexing and when processing search requests. The maximum size of the stemming dictionary is 500 KB.
		 * Get #Action=UpdateStemmingOptions
		 * @param {string} DomainName Min length: 3
		 *     Max length: 28
		 * @return {void} Success
		 */
		GET_UpdateStemmingOptions(DomainName: string, Stems: string, Action: GET_UpdateStemmingOptionsAction, Version: GET_CreateDomainVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateStemmingOptions?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&Stems=' + (Stems == null ? '' : encodeURIComponent(Stems)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Configures stopwords for the search domain. Stopwords are used during indexing and when processing search requests. The maximum size of the stopwords dictionary is 10 KB.
		 * Get #Action=UpdateStopwordOptions
		 * @param {string} DomainName Min length: 3
		 *     Max length: 28
		 * @return {void} Success
		 */
		GET_UpdateStopwordOptions(DomainName: string, Stopwords: string, Action: GET_UpdateStopwordOptionsAction, Version: GET_CreateDomainVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateStopwordOptions?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&Stopwords=' + (Stopwords == null ? '' : encodeURIComponent(Stopwords)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Configures a synonym dictionary for the search domain. The synonym dictionary is used during indexing to configure mappings for terms that occur in text fields. The maximum size of the synonym dictionary is 100 KB.
		 * Get #Action=UpdateSynonymOptions
		 * @param {string} DomainName Min length: 3
		 *     Max length: 28
		 * @return {void} Success
		 */
		GET_UpdateSynonymOptions(DomainName: string, Synonyms: string, Action: GET_UpdateSynonymOptionsAction, Version: GET_CreateDomainVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateSynonymOptions?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&Synonyms=' + (Synonyms == null ? '' : encodeURIComponent(Synonyms)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}
	}

	export enum GET_CreateDomainAction { CreateDomain = 'CreateDomain' }

	export enum GET_CreateDomainVersion { '2011-02-01' = '2011-02-01' }

	export interface GET_DefineIndexFieldIndexField {

		/** Required */
		IndexFieldName: string;

		/** Required */
		IndexFieldType: IndexFieldType;
		UIntOptions?: UIntOptions;
		LiteralOptions?: LiteralOptions;
		TextOptions?: TextOptions;
		SourceAttributes?: Array<SourceAttribute>;
	}
	export interface GET_DefineIndexFieldIndexFieldFormProperties {

		/** Required */
		IndexFieldName: FormControl<string | null | undefined>,

		/** Required */
		IndexFieldType: FormControl<IndexFieldType | null | undefined>,
	}
	export function CreateGET_DefineIndexFieldIndexFieldFormGroup() {
		return new FormGroup<GET_DefineIndexFieldIndexFieldFormProperties>({
			IndexFieldName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IndexFieldType: new FormControl<IndexFieldType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum GET_DefineIndexFieldAction { DefineIndexField = 'DefineIndexField' }

	export interface GET_DefineRankExpressionRankExpression {

		/** Required */
		RankName: string;

		/** Required */
		RankExpression: string;
	}
	export interface GET_DefineRankExpressionRankExpressionFormProperties {

		/** Required */
		RankName: FormControl<string | null | undefined>,

		/** Required */
		RankExpression: FormControl<string | null | undefined>,
	}
	export function CreateGET_DefineRankExpressionRankExpressionFormGroup() {
		return new FormGroup<GET_DefineRankExpressionRankExpressionFormProperties>({
			RankName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RankExpression: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum GET_DefineRankExpressionAction { DefineRankExpression = 'DefineRankExpression' }

	export enum GET_DeleteDomainAction { DeleteDomain = 'DeleteDomain' }

	export enum GET_DeleteIndexFieldAction { DeleteIndexField = 'DeleteIndexField' }

	export enum GET_DeleteRankExpressionAction { DeleteRankExpression = 'DeleteRankExpression' }

	export enum GET_DescribeAvailabilityOptionsAction { DescribeAvailabilityOptions = 'DescribeAvailabilityOptions' }

	export enum GET_DescribeDefaultSearchFieldAction { DescribeDefaultSearchField = 'DescribeDefaultSearchField' }

	export enum GET_DescribeDomainsAction { DescribeDomains = 'DescribeDomains' }

	export enum GET_DescribeIndexFieldsAction { DescribeIndexFields = 'DescribeIndexFields' }

	export enum GET_DescribeRankExpressionsAction { DescribeRankExpressions = 'DescribeRankExpressions' }

	export enum GET_DescribeServiceAccessPoliciesAction { DescribeServiceAccessPolicies = 'DescribeServiceAccessPolicies' }

	export enum GET_DescribeStemmingOptionsAction { DescribeStemmingOptions = 'DescribeStemmingOptions' }

	export enum GET_DescribeStopwordOptionsAction { DescribeStopwordOptions = 'DescribeStopwordOptions' }

	export enum GET_DescribeSynonymOptionsAction { DescribeSynonymOptions = 'DescribeSynonymOptions' }

	export enum GET_IndexDocumentsAction { IndexDocuments = 'IndexDocuments' }

	export enum GET_UpdateAvailabilityOptionsAction { UpdateAvailabilityOptions = 'UpdateAvailabilityOptions' }

	export enum GET_UpdateDefaultSearchFieldAction { UpdateDefaultSearchField = 'UpdateDefaultSearchField' }

	export enum GET_UpdateServiceAccessPoliciesAction { UpdateServiceAccessPolicies = 'UpdateServiceAccessPolicies' }

	export enum GET_UpdateStemmingOptionsAction { UpdateStemmingOptions = 'UpdateStemmingOptions' }

	export enum GET_UpdateStopwordOptionsAction { UpdateStopwordOptions = 'UpdateStopwordOptions' }

	export enum GET_UpdateSynonymOptionsAction { UpdateSynonymOptions = 'UpdateSynonymOptions' }

}

