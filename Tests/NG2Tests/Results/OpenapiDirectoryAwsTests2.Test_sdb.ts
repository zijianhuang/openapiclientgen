import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface DeletableItem {
		Name: string;
		Attributes?: Array<DeletableAttribute>;
	}
	export interface DeletableItemFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeletableItemFormGroup() {
		return new FormGroup<DeletableItemFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeletableAttribute {
		Name: string;
		Value?: string | null;
	}
	export interface DeletableAttributeFormProperties {
		Name: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateDeletableAttributeFormGroup() {
		return new FormGroup<DeletableAttributeFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReplaceableItem {
		Name: string;
		Attributes: Array<ReplaceableAttribute>;
	}
	export interface ReplaceableItemFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateReplaceableItemFormGroup() {
		return new FormGroup<ReplaceableItemFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReplaceableAttribute {
		Name: string;
		Value: string;
		Replace?: boolean | null;
	}
	export interface ReplaceableAttributeFormProperties {
		Name: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
		Replace: FormControl<boolean | null | undefined>,
	}
	export function CreateReplaceableAttributeFormGroup() {
		return new FormGroup<ReplaceableAttributeFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
			Replace: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The item name was specified more than once.  */
	export interface DuplicateItemName {
		BoxUsage?: number | null;
	}

	/** The item name was specified more than once.  */
	export interface DuplicateItemNameFormProperties {
		BoxUsage: FormControl<number | null | undefined>,
	}
	export function CreateDuplicateItemNameFormGroup() {
		return new FormGroup<DuplicateItemNameFormProperties>({
			BoxUsage: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The value for a parameter is invalid. */
	export interface InvalidParameterValue {
		BoxUsage?: number | null;
	}

	/** The value for a parameter is invalid. */
	export interface InvalidParameterValueFormProperties {
		BoxUsage: FormControl<number | null | undefined>,
	}
	export function CreateInvalidParameterValueFormGroup() {
		return new FormGroup<InvalidParameterValueFormProperties>({
			BoxUsage: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The request must contain the specified missing parameter. */
	export interface MissingParameter {
		BoxUsage?: number | null;
	}

	/** The request must contain the specified missing parameter. */
	export interface MissingParameterFormProperties {
		BoxUsage: FormControl<number | null | undefined>,
	}
	export function CreateMissingParameterFormGroup() {
		return new FormGroup<MissingParameterFormProperties>({
			BoxUsage: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The specified domain does not exist. */
	export interface NoSuchDomain {
		BoxUsage?: number | null;
	}

	/** The specified domain does not exist. */
	export interface NoSuchDomainFormProperties {
		BoxUsage: FormControl<number | null | undefined>,
	}
	export function CreateNoSuchDomainFormGroup() {
		return new FormGroup<NoSuchDomainFormProperties>({
			BoxUsage: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Too many attributes in this item. */
	export interface NumberItemAttributesExceeded {
		BoxUsage?: number | null;
	}

	/** Too many attributes in this item. */
	export interface NumberItemAttributesExceededFormProperties {
		BoxUsage: FormControl<number | null | undefined>,
	}
	export function CreateNumberItemAttributesExceededFormGroup() {
		return new FormGroup<NumberItemAttributesExceededFormProperties>({
			BoxUsage: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Too many attributes in this domain. */
	export interface NumberDomainAttributesExceeded {
		BoxUsage?: number | null;
	}

	/** Too many attributes in this domain. */
	export interface NumberDomainAttributesExceededFormProperties {
		BoxUsage: FormControl<number | null | undefined>,
	}
	export function CreateNumberDomainAttributesExceededFormGroup() {
		return new FormGroup<NumberDomainAttributesExceededFormProperties>({
			BoxUsage: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Too many bytes in this domain. */
	export interface NumberDomainBytesExceeded {
		BoxUsage?: number | null;
	}

	/** Too many bytes in this domain. */
	export interface NumberDomainBytesExceededFormProperties {
		BoxUsage: FormControl<number | null | undefined>,
	}
	export function CreateNumberDomainBytesExceededFormGroup() {
		return new FormGroup<NumberDomainBytesExceededFormProperties>({
			BoxUsage: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Too many items exist in a single call. */
	export interface NumberSubmittedItemsExceeded {
		BoxUsage?: number | null;
	}

	/** Too many items exist in a single call. */
	export interface NumberSubmittedItemsExceededFormProperties {
		BoxUsage: FormControl<number | null | undefined>,
	}
	export function CreateNumberSubmittedItemsExceededFormGroup() {
		return new FormGroup<NumberSubmittedItemsExceededFormProperties>({
			BoxUsage: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Too many attributes exist in a single call. */
	export interface NumberSubmittedAttributesExceeded {
		BoxUsage?: number | null;
	}

	/** Too many attributes exist in a single call. */
	export interface NumberSubmittedAttributesExceededFormProperties {
		BoxUsage: FormControl<number | null | undefined>,
	}
	export function CreateNumberSubmittedAttributesExceededFormGroup() {
		return new FormGroup<NumberSubmittedAttributesExceededFormProperties>({
			BoxUsage: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Too many domains exist per this account. */
	export interface NumberDomainsExceeded {
		BoxUsage?: number | null;
	}

	/** Too many domains exist per this account. */
	export interface NumberDomainsExceededFormProperties {
		BoxUsage: FormControl<number | null | undefined>,
	}
	export function CreateNumberDomainsExceededFormGroup() {
		return new FormGroup<NumberDomainsExceededFormProperties>({
			BoxUsage: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The specified attribute does not exist. */
	export interface AttributeDoesNotExist {
		BoxUsage?: number | null;
	}

	/** The specified attribute does not exist. */
	export interface AttributeDoesNotExistFormProperties {
		BoxUsage: FormControl<number | null | undefined>,
	}
	export function CreateAttributeDoesNotExistFormGroup() {
		return new FormGroup<AttributeDoesNotExistFormProperties>({
			BoxUsage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DomainMetadataResult {
		ItemCount?: number | null;
		ItemNamesSizeBytes?: number | null;
		AttributeNameCount?: number | null;
		AttributeNamesSizeBytes?: number | null;
		AttributeValueCount?: number | null;
		AttributeValuesSizeBytes?: number | null;
		Timestamp?: number | null;
	}
	export interface DomainMetadataResultFormProperties {
		ItemCount: FormControl<number | null | undefined>,
		ItemNamesSizeBytes: FormControl<number | null | undefined>,
		AttributeNameCount: FormControl<number | null | undefined>,
		AttributeNamesSizeBytes: FormControl<number | null | undefined>,
		AttributeValueCount: FormControl<number | null | undefined>,
		AttributeValuesSizeBytes: FormControl<number | null | undefined>,
		Timestamp: FormControl<number | null | undefined>,
	}
	export function CreateDomainMetadataResultFormGroup() {
		return new FormGroup<DomainMetadataResultFormProperties>({
			ItemCount: new FormControl<number | null | undefined>(undefined),
			ItemNamesSizeBytes: new FormControl<number | null | undefined>(undefined),
			AttributeNameCount: new FormControl<number | null | undefined>(undefined),
			AttributeNamesSizeBytes: new FormControl<number | null | undefined>(undefined),
			AttributeValueCount: new FormControl<number | null | undefined>(undefined),
			AttributeValuesSizeBytes: new FormControl<number | null | undefined>(undefined),
			Timestamp: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetAttributesResult {
		Attributes?: Array<Attribute>;
	}
	export interface GetAttributesResultFormProperties {
	}
	export function CreateGetAttributesResultFormGroup() {
		return new FormGroup<GetAttributesResultFormProperties>({
		});

	}

	export interface Attribute {
		Name: string;
		AlternateNameEncoding?: string | null;
		Value: string;
		AlternateValueEncoding?: string | null;
	}
	export interface AttributeFormProperties {
		Name: FormControl<string | null | undefined>,
		AlternateNameEncoding: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
		AlternateValueEncoding: FormControl<string | null | undefined>,
	}
	export function CreateAttributeFormGroup() {
		return new FormGroup<AttributeFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			AlternateNameEncoding: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
			AlternateValueEncoding: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDomainsResult {
		DomainNames?: Array<string>;
		NextToken?: string | null;
	}
	export interface ListDomainsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDomainsResultFormGroup() {
		return new FormGroup<ListDomainsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The specified NextToken is not valid.  */
	export interface InvalidNextToken {
		BoxUsage?: number | null;
	}

	/** The specified NextToken is not valid.  */
	export interface InvalidNextTokenFormProperties {
		BoxUsage: FormControl<number | null | undefined>,
	}
	export function CreateInvalidNextTokenFormGroup() {
		return new FormGroup<InvalidNextTokenFormProperties>({
			BoxUsage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SelectResult {
		Items?: Array<Item>;
		NextToken?: string | null;
	}
	export interface SelectResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateSelectResultFormGroup() {
		return new FormGroup<SelectResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Item {
		Name: string;
		AlternateNameEncoding?: string | null;
		Attributes: Array<Attribute>;
	}
	export interface ItemFormProperties {
		Name: FormControl<string | null | undefined>,
		AlternateNameEncoding: FormControl<string | null | undefined>,
	}
	export function CreateItemFormGroup() {
		return new FormGroup<ItemFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			AlternateNameEncoding: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Too many predicates exist in the query expression. */
	export interface InvalidNumberPredicates {
		BoxUsage?: number | null;
	}

	/** Too many predicates exist in the query expression. */
	export interface InvalidNumberPredicatesFormProperties {
		BoxUsage: FormControl<number | null | undefined>,
	}
	export function CreateInvalidNumberPredicatesFormGroup() {
		return new FormGroup<InvalidNumberPredicatesFormProperties>({
			BoxUsage: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Too many predicates exist in the query expression. */
	export interface InvalidNumberValueTests {
		BoxUsage?: number | null;
	}

	/** Too many predicates exist in the query expression. */
	export interface InvalidNumberValueTestsFormProperties {
		BoxUsage: FormControl<number | null | undefined>,
	}
	export function CreateInvalidNumberValueTestsFormGroup() {
		return new FormGroup<InvalidNumberValueTestsFormProperties>({
			BoxUsage: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The specified query expression syntax is not valid. */
	export interface InvalidQueryExpression {
		BoxUsage?: number | null;
	}

	/** The specified query expression syntax is not valid. */
	export interface InvalidQueryExpressionFormProperties {
		BoxUsage: FormControl<number | null | undefined>,
	}
	export function CreateInvalidQueryExpressionFormGroup() {
		return new FormGroup<InvalidQueryExpressionFormProperties>({
			BoxUsage: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A timeout occurred when attempting to query the specified domain with specified query expression. */
	export interface RequestTimeout {
		BoxUsage?: number | null;
	}

	/** A timeout occurred when attempting to query the specified domain with specified query expression. */
	export interface RequestTimeoutFormProperties {
		BoxUsage: FormControl<number | null | undefined>,
	}
	export function CreateRequestTimeoutFormGroup() {
		return new FormGroup<RequestTimeoutFormProperties>({
			BoxUsage: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Too many attributes requested. */
	export interface TooManyRequestedAttributes {
		BoxUsage?: number | null;
	}

	/** Too many attributes requested. */
	export interface TooManyRequestedAttributesFormProperties {
		BoxUsage: FormControl<number | null | undefined>,
	}
	export function CreateTooManyRequestedAttributesFormGroup() {
		return new FormGroup<TooManyRequestedAttributesFormProperties>({
			BoxUsage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BatchDeleteAttributesRequest {
		DomainName: string;
		Items: Array<DeletableItem>;
	}
	export interface BatchDeleteAttributesRequestFormProperties {
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateBatchDeleteAttributesRequestFormGroup() {
		return new FormGroup<BatchDeleteAttributesRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchPutAttributesRequest {
		DomainName: string;
		Items: Array<ReplaceableItem>;
	}
	export interface BatchPutAttributesRequestFormProperties {
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateBatchPutAttributesRequestFormGroup() {
		return new FormGroup<BatchPutAttributesRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDomainRequest {
		DomainName: string;
	}
	export interface CreateDomainRequestFormProperties {
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateCreateDomainRequestFormGroup() {
		return new FormGroup<CreateDomainRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Specifies the conditions under which data should be updated. If an update condition is specified for a request, the data will only be updated if the condition is satisfied. For example, if an attribute with a specific name and value exists, or if a specific attribute doesn't exist.  */
	export interface UpdateCondition {
		Name?: string | null;
		Value?: string | null;
		Exists?: boolean | null;
	}

	/**  Specifies the conditions under which data should be updated. If an update condition is specified for a request, the data will only be updated if the condition is satisfied. For example, if an attribute with a specific name and value exists, or if a specific attribute doesn't exist.  */
	export interface UpdateConditionFormProperties {
		Name: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
		Exists: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateConditionFormGroup() {
		return new FormGroup<UpdateConditionFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
			Exists: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DeleteAttributesRequest {
		DomainName: string;
		ItemName: string;
		Attributes?: Array<DeletableAttribute>;

		/** Specifies the conditions under which data should be updated. If an update condition is specified for a request, the data will only be updated if the condition is satisfied. For example, if an attribute with a specific name and value exists, or if a specific attribute doesn't exist. */
		Expected?: UpdateCondition;
	}
	export interface DeleteAttributesRequestFormProperties {
		DomainName: FormControl<string | null | undefined>,
		ItemName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAttributesRequestFormGroup() {
		return new FormGroup<DeleteAttributesRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined),
			ItemName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteDomainRequest {
		DomainName: string;
	}
	export interface DeleteDomainRequestFormProperties {
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDomainRequestFormGroup() {
		return new FormGroup<DeleteDomainRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DomainMetadataRequest {
		DomainName: string;
	}
	export interface DomainMetadataRequestFormProperties {
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateDomainMetadataRequestFormGroup() {
		return new FormGroup<DomainMetadataRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAttributesRequest {
		DomainName: string;
		ItemName: string;
		AttributeNames?: Array<string>;
		ConsistentRead?: boolean | null;
	}
	export interface GetAttributesRequestFormProperties {
		DomainName: FormControl<string | null | undefined>,
		ItemName: FormControl<string | null | undefined>,
		ConsistentRead: FormControl<boolean | null | undefined>,
	}
	export function CreateGetAttributesRequestFormGroup() {
		return new FormGroup<GetAttributesRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined),
			ItemName: new FormControl<string | null | undefined>(undefined),
			ConsistentRead: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListDomainsRequest {
		MaxNumberOfDomains?: number | null;
		NextToken?: string | null;
	}
	export interface ListDomainsRequestFormProperties {
		MaxNumberOfDomains: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDomainsRequestFormGroup() {
		return new FormGroup<ListDomainsRequestFormProperties>({
			MaxNumberOfDomains: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutAttributesRequest {
		DomainName: string;
		ItemName: string;
		Attributes: Array<ReplaceableAttribute>;

		/** Specifies the conditions under which data should be updated. If an update condition is specified for a request, the data will only be updated if the condition is satisfied. For example, if an attribute with a specific name and value exists, or if a specific attribute doesn't exist. */
		Expected?: UpdateCondition;
	}
	export interface PutAttributesRequestFormProperties {
		DomainName: FormControl<string | null | undefined>,
		ItemName: FormControl<string | null | undefined>,
	}
	export function CreatePutAttributesRequestFormGroup() {
		return new FormGroup<PutAttributesRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined),
			ItemName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SelectRequest {
		SelectExpression: string;
		NextToken?: string | null;
		ConsistentRead?: boolean | null;
	}
	export interface SelectRequestFormProperties {
		SelectExpression: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		ConsistentRead: FormControl<boolean | null | undefined>,
	}
	export function CreateSelectRequestFormGroup() {
		return new FormGroup<SelectRequestFormProperties>({
			SelectExpression: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			ConsistentRead: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p> Performs multiple DeleteAttributes operations in a single call, which reduces round trips and latencies. This enables Amazon SimpleDB to optimize requests, which generally yields better throughput. </p> <note> <p> If you specify BatchDeleteAttributes without attributes or values, all the attributes for the item are deleted. </p> <p> BatchDeleteAttributes is an idempotent operation; running it multiple times on the same item or attribute doesn't result in an error. </p> <p> The BatchDeleteAttributes operation succeeds or fails in its entirety. There are no partial deletes. You can execute multiple BatchDeleteAttributes operations and other operations in parallel. However, large numbers of concurrent BatchDeleteAttributes calls can result in Service Unavailable (503) responses. </p> <p> This operation is vulnerable to exceeding the maximum URL size when making a REST request using the HTTP GET method. </p> <p> This operation does not support conditions using Expected.X.Name, Expected.X.Value, or Expected.X.Exists. </p> </note> <p> The following limitations are enforced for this operation: <ul> <li>1 MB request size</li> <li>25 item limit per BatchDeleteAttributes operation</li> </ul> </p>
		 * Get #Action=BatchDeleteAttributes
		 * @param {string} DomainName The name of the domain in which the attributes are being deleted.
		 * @param {Array<DeletableItem>} Items A list of items on which to perform the operation.
		 * @return {void} Success
		 */
		GET_BatchDeleteAttributes(DomainName: string, Items: Array<DeletableItem>, Action: GET_BatchDeleteAttributesAction, Version: GET_BatchDeleteAttributesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=BatchDeleteAttributes?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&' + Items.map(z => `Items=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p> The <code>BatchPutAttributes</code> operation creates or replaces attributes within one or more items. By using this operation, the client can perform multiple <a>PutAttribute</a> operation with a single call. This helps yield savings in round trips and latencies, enabling Amazon SimpleDB to optimize requests and generally produce better throughput. </p> <p> The client may specify the item name with the <code>Item.X.ItemName</code> parameter. The client may specify new attributes using a combination of the <code>Item.X.Attribute.Y.Name</code> and <code>Item.X.Attribute.Y.Value</code> parameters. The client may specify the first attribute for the first item using the parameters <code>Item.0.Attribute.0.Name</code> and <code>Item.0.Attribute.0.Value</code>, and for the second attribute for the first item by the parameters <code>Item.0.Attribute.1.Name</code> and <code>Item.0.Attribute.1.Value</code>, and so on. </p> <p> Attributes are uniquely identified within an item by their name/value combination. For example, a single item can have the attributes <code>{ "first_name", "first_value" }</code> and <code>{ "first_name", "second_value" }</code>. However, it cannot have two attribute instances where both the <code>Item.X.Attribute.Y.Name</code> and <code>Item.X.Attribute.Y.Value</code> are the same. </p> <p> Optionally, the requester can supply the <code>Replace</code> parameter for each individual value. Setting this value to <code>true</code> will cause the new attribute values to replace the existing attribute values. For example, if an item <code>I</code> has the attributes <code>{ 'a', '1' }, { 'b', '2'}</code> and <code>{ 'b', '3' }</code> and the requester does a BatchPutAttributes of <code>{'I', 'b', '4' }</code> with the Replace parameter set to true, the final attributes of the item will be <code>{ 'a', '1' }</code> and <code>{ 'b', '4' }</code>, replacing the previous values of the 'b' attribute with the new value. </p> <note> You cannot specify an empty string as an item or as an attribute name. The <code>BatchPutAttributes</code> operation succeeds or fails in its entirety. There are no partial puts. </note> <important> This operation is vulnerable to exceeding the maximum URL size when making a REST request using the HTTP GET method. This operation does not support conditions using <code>Expected.X.Name</code>, <code>Expected.X.Value</code>, or <code>Expected.X.Exists</code>. </important> <p> You can execute multiple <code>BatchPutAttributes</code> operations and other operations in parallel. However, large numbers of concurrent <code>BatchPutAttributes</code> calls can result in Service Unavailable (503) responses. </p> <p> The following limitations are enforced for this operation: <ul> <li>256 attribute name-value pairs per item</li> <li>1 MB request size</li> <li>1 billion attributes per domain</li> <li>10 GB of total user data storage per domain</li> <li>25 item limit per <code>BatchPutAttributes</code> operation</li> </ul> </p>
		 * Get #Action=BatchPutAttributes
		 * @param {string} DomainName The name of the domain in which the attributes are being stored.
		 * @param {Array<ReplaceableItem>} Items A list of items on which to perform the operation.
		 * @return {void} Success
		 */
		GET_BatchPutAttributes(DomainName: string, Items: Array<ReplaceableItem>, Action: GET_BatchPutAttributesAction, Version: GET_BatchPutAttributesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=BatchPutAttributes?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&' + Items.map(z => `Items=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p> The <code>CreateDomain</code> operation creates a new domain. The domain name should be unique among the domains associated with the Access Key ID provided in the request. The <code>CreateDomain</code> operation may take 10 or more seconds to complete. </p> <note> CreateDomain is an idempotent operation; running it multiple times using the same domain name will not result in an error response. </note> <p> The client can create up to 100 domains per account. </p> <p> If the client requires additional domains, go to <a href="http://aws.amazon.com/contact-us/simpledb-limit-request/"> http://aws.amazon.com/contact-us/simpledb-limit-request/</a>. </p>
		 * Get #Action=CreateDomain
		 * @param {string} DomainName The name of the domain to create. The name can range between 3 and 255 characters and can contain the following characters: a-z, A-Z, 0-9, '_', '-', and '.'.
		 * @return {void} Success
		 */
		GET_CreateDomain(DomainName: string, Action: GET_CreateDomainAction, Version: GET_CreateDomainVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateDomain?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p> Deletes one or more attributes associated with an item. If all attributes of the item are deleted, the item is deleted. </p> <note> If <code>DeleteAttributes</code> is called without being passed any attributes or values specified, all the attributes for the item are deleted. </note> <p> <code>DeleteAttributes</code> is an idempotent operation; running it multiple times on the same item or attribute does not result in an error response. </p> <p> Because Amazon SimpleDB makes multiple copies of item data and uses an eventual consistency update model, performing a <a>GetAttributes</a> or <a>Select</a> operation (read) immediately after a <code>DeleteAttributes</code> or <a>PutAttributes</a> operation (write) might not return updated item data. </p>
		 * Get #Action=DeleteAttributes
		 * @param {string} DomainName The name of the domain in which to perform the operation.
		 * @param {string} ItemName The name of the item. Similar to rows on a spreadsheet, items represent individual objects that contain one or more value-attribute pairs.
		 * @param {Array<DeletableAttribute>} Attributes A list of Attributes. Similar to columns on a spreadsheet, attributes represent categories of data that can be assigned to items.
		 * @param {GET_DeleteAttributesExpected} Expected The update condition which, if specified, determines whether the specified attributes will be deleted or not. The update condition must be satisfied in order for this request to be processed and the attributes to be deleted.
		 * @return {void} Success
		 */
		GET_DeleteAttributes(DomainName: string, ItemName: string, Attributes: Array<DeletableAttribute> | null | undefined, Expected: GET_DeleteAttributesExpected | null | undefined, Action: GET_DeleteAttributesAction, Version: GET_DeleteAttributesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteAttributes?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&ItemName=' + (ItemName == null ? '' : encodeURIComponent(ItemName)) + '&' + Attributes?.map(z => `Attributes=${z}`).join('&') + '&Expected=' + Expected + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p> The <code>DeleteDomain</code> operation deletes a domain. Any items (and their attributes) in the domain are deleted as well. The <code>DeleteDomain</code> operation might take 10 or more seconds to complete. </p> <note> Running <code>DeleteDomain</code> on a domain that does not exist or running the function multiple times using the same domain name will not result in an error response. </note>
		 * Get #Action=DeleteDomain
		 * @param {string} DomainName The name of the domain to delete.
		 * @return {void} Success
		 */
		GET_DeleteDomain(DomainName: string, Action: GET_DeleteDomainAction, Version: GET_DeleteDomainVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteDomain?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information about the domain, including when the domain was created, the number of items and attributes in the domain, and the size of the attribute names and values.
		 * Get #Action=DomainMetadata
		 * @param {string} DomainName The name of the domain for which to display the metadata of.
		 * @return {void} Success
		 */
		GET_DomainMetadata(DomainName: string, Action: GET_DomainMetadataAction, Version: GET_DomainMetadataVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DomainMetadata?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p> Returns all of the attributes associated with the specified item. Optionally, the attributes returned can be limited to one or more attributes by specifying an attribute name parameter. </p> <p> If the item does not exist on the replica that was accessed for this operation, an empty set is returned. The system does not return an error as it cannot guarantee the item does not exist on other replicas. </p> <note> If GetAttributes is called without being passed any attribute names, all the attributes for the item are returned. </note>
		 * Get #Action=GetAttributes
		 * @param {string} DomainName The name of the domain in which to perform the operation.
		 * @param {string} ItemName The name of the item.
		 * @param {Array<string>} AttributeNames The names of the attributes.
		 * @param {boolean} ConsistentRead Determines whether or not strong consistency should be enforced when data is read from SimpleDB. If <code>true</code>, any data previously written to SimpleDB will be returned. Otherwise, results will be consistent eventually, and the client may not see data that was written immediately before your read.
		 * @return {void} Success
		 */
		GET_GetAttributes(DomainName: string, ItemName: string, AttributeNames: Array<string> | null | undefined, ConsistentRead: boolean | null | undefined, Action: GET_GetAttributesAction, Version: GET_GetAttributesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetAttributes?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&ItemName=' + (ItemName == null ? '' : encodeURIComponent(ItemName)) + '&' + AttributeNames?.map(z => `AttributeNames=${encodeURIComponent(z)}`).join('&') + '&ConsistentRead=' + ConsistentRead + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * The <code>ListDomains</code> operation lists all domains associated with the Access Key ID. It returns domain names up to the limit set by <a href="#MaxNumberOfDomains">MaxNumberOfDomains</a>. A <a href="#NextToken">NextToken</a> is returned if there are more than <code>MaxNumberOfDomains</code> domains. Calling <code>ListDomains</code> successive times with the <code>NextToken</code> provided by the operation returns up to <code>MaxNumberOfDomains</code> more domain names with each successive operation call.
		 * Get #Action=ListDomains
		 * @param {number} MaxNumberOfDomains The maximum number of domain names you want returned. The range is 1 to 100. The default setting is 100.
		 * @param {string} NextToken A string informing Amazon SimpleDB where to start the next list of domain names.
		 * @return {void} Success
		 */
		GET_ListDomains(MaxNumberOfDomains: number | null | undefined, NextToken: string | null | undefined, Action: GET_ListDomainsAction, Version: GET_ListDomainsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListDomains?MaxNumberOfDomains=' + MaxNumberOfDomains + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p> The PutAttributes operation creates or replaces attributes in an item. The client may specify new attributes using a combination of the <code>Attribute.X.Name</code> and <code>Attribute.X.Value</code> parameters. The client specifies the first attribute by the parameters <code>Attribute.0.Name</code> and <code>Attribute.0.Value</code>, the second attribute by the parameters <code>Attribute.1.Name</code> and <code>Attribute.1.Value</code>, and so on. </p> <p> Attributes are uniquely identified in an item by their name/value combination. For example, a single item can have the attributes <code>{ "first_name", "first_value" }</code> and <code>{ "first_name", second_value" }</code>. However, it cannot have two attribute instances where both the <code>Attribute.X.Name</code> and <code>Attribute.X.Value</code> are the same. </p> <p> Optionally, the requestor can supply the <code>Replace</code> parameter for each individual attribute. Setting this value to <code>true</code> causes the new attribute value to replace the existing attribute value(s). For example, if an item has the attributes <code>{ 'a', '1' }</code>, <code>{ 'b', '2'}</code> and <code>{ 'b', '3' }</code> and the requestor calls <code>PutAttributes</code> using the attributes <code>{ 'b', '4' }</code> with the <code>Replace</code> parameter set to true, the final attributes of the item are changed to <code>{ 'a', '1' }</code> and <code>{ 'b', '4' }</code>, which replaces the previous values of the 'b' attribute with the new value. </p> <note> Using <code>PutAttributes</code> to replace attribute values that do not exist will not result in an error response. </note> <p> You cannot specify an empty string as an attribute name. </p> <p> Because Amazon SimpleDB makes multiple copies of client data and uses an eventual consistency update model, an immediate <a>GetAttributes</a> or <a>Select</a> operation (read) immediately after a <a>PutAttributes</a> or <a>DeleteAttributes</a> operation (write) might not return the updated data. </p> <p> The following limitations are enforced for this operation: <ul> <li>256 total attribute name-value pairs per item</li> <li>One billion attributes per domain</li> <li>10 GB of total user data storage per domain</li> </ul> </p>
		 * Get #Action=PutAttributes
		 * @param {string} DomainName The name of the domain in which to perform the operation.
		 * @param {string} ItemName The name of the item.
		 * @param {Array<ReplaceableAttribute>} Attributes The list of attributes.
		 * @param {GET_PutAttributesExpected} Expected The update condition which, if specified, determines whether the specified attributes will be updated or not. The update condition must be satisfied in order for this request to be processed and the attributes to be updated.
		 * @return {void} Success
		 */
		GET_PutAttributes(DomainName: string, ItemName: string, Attributes: Array<ReplaceableAttribute>, Expected: GET_PutAttributesExpected | null | undefined, Action: GET_PutAttributesAction, Version: GET_PutAttributesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=PutAttributes?DomainName=' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '&ItemName=' + (ItemName == null ? '' : encodeURIComponent(ItemName)) + '&' + Attributes.map(z => `Attributes=${z}`).join('&') + '&Expected=' + Expected + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p> The <code>Select</code> operation returns a set of attributes for <code>ItemNames</code> that match the select expression. <code>Select</code> is similar to the standard SQL SELECT statement. </p> <p> The total size of the response cannot exceed 1 MB in total size. Amazon SimpleDB automatically adjusts the number of items returned per page to enforce this limit. For example, if the client asks to retrieve 2500 items, but each individual item is 10 kB in size, the system returns 100 items and an appropriate <code>NextToken</code> so the client can access the next page of results. </p> <p> For information on how to construct select expressions, see Using Select to Create Amazon SimpleDB Queries in the Developer Guide. </p>
		 * Get #Action=Select
		 * @param {string} SelectExpression The expression used to query the domain.
		 * @param {string} NextToken A string informing Amazon SimpleDB where to start the next list of <code>ItemNames</code>.
		 * @param {boolean} ConsistentRead Determines whether or not strong consistency should be enforced when data is read from SimpleDB. If <code>true</code>, any data previously written to SimpleDB will be returned. Otherwise, results will be consistent eventually, and the client may not see data that was written immediately before your read.
		 * @return {void} Success
		 */
		GET_Select(SelectExpression: string, NextToken: string | null | undefined, ConsistentRead: boolean | null | undefined, Action: GET_SelectAction, Version: GET_SelectVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=Select?SelectExpression=' + (SelectExpression == null ? '' : encodeURIComponent(SelectExpression)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&ConsistentRead=' + ConsistentRead + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}
	}

	export enum GET_BatchDeleteAttributesAction { BatchDeleteAttributes = 0 }

	export enum GET_BatchDeleteAttributesVersion { _2009_04_15 = 0 }

	export enum POST_BatchDeleteAttributesVersion { _2009_04_15 = 0 }

	export enum GET_BatchPutAttributesAction { BatchPutAttributes = 0 }

	export enum GET_BatchPutAttributesVersion { _2009_04_15 = 0 }

	export enum POST_BatchPutAttributesVersion { _2009_04_15 = 0 }

	export enum GET_CreateDomainAction { CreateDomain = 0 }

	export enum GET_CreateDomainVersion { _2009_04_15 = 0 }

	export enum POST_CreateDomainVersion { _2009_04_15 = 0 }

	export interface GET_DeleteAttributesExpected {
		Name?: string | null;
		Value?: string | null;
		Exists?: boolean | null;
	}
	export interface GET_DeleteAttributesExpectedFormProperties {
		Name: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
		Exists: FormControl<boolean | null | undefined>,
	}
	export function CreateGET_DeleteAttributesExpectedFormGroup() {
		return new FormGroup<GET_DeleteAttributesExpectedFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
			Exists: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GET_DeleteAttributesAction { DeleteAttributes = 0 }

	export enum GET_DeleteAttributesVersion { _2009_04_15 = 0 }

	export enum POST_DeleteAttributesVersion { _2009_04_15 = 0 }

	export enum GET_DeleteDomainAction { DeleteDomain = 0 }

	export enum GET_DeleteDomainVersion { _2009_04_15 = 0 }

	export enum POST_DeleteDomainVersion { _2009_04_15 = 0 }

	export enum GET_DomainMetadataAction { DomainMetadata = 0 }

	export enum GET_DomainMetadataVersion { _2009_04_15 = 0 }

	export enum POST_DomainMetadataVersion { _2009_04_15 = 0 }

	export enum GET_GetAttributesAction { GetAttributes = 0 }

	export enum GET_GetAttributesVersion { _2009_04_15 = 0 }

	export enum POST_GetAttributesVersion { _2009_04_15 = 0 }

	export enum GET_ListDomainsAction { ListDomains = 0 }

	export enum GET_ListDomainsVersion { _2009_04_15 = 0 }

	export enum POST_ListDomainsVersion { _2009_04_15 = 0 }

	export interface GET_PutAttributesExpected {
		Name?: string | null;
		Value?: string | null;
		Exists?: boolean | null;
	}
	export interface GET_PutAttributesExpectedFormProperties {
		Name: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
		Exists: FormControl<boolean | null | undefined>,
	}
	export function CreateGET_PutAttributesExpectedFormGroup() {
		return new FormGroup<GET_PutAttributesExpectedFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
			Exists: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GET_PutAttributesAction { PutAttributes = 0 }

	export enum GET_PutAttributesVersion { _2009_04_15 = 0 }

	export enum POST_PutAttributesVersion { _2009_04_15 = 0 }

	export enum GET_SelectAction { Select = 0 }

	export enum GET_SelectVersion { _2009_04_15 = 0 }

	export enum POST_SelectVersion { _2009_04_15 = 0 }

}

