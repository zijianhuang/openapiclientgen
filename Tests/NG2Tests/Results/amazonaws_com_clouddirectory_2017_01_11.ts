import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AddFacetToObjectResponse {
	}
	export interface AddFacetToObjectResponseFormProperties {
	}
	export function CreateAddFacetToObjectResponseFormGroup() {
		return new FormGroup<AddFacetToObjectResponseFormProperties>({
		});

	}


	/** The combination of an attribute key and an attribute value. */
	export interface AttributeKeyAndValue {

		/**
		 * A unique identifier for an attribute.
		 * Required
		 */
		Key: AttributeKey;

		/**
		 * Represents the data for a typed attribute. You can set one, and only one, of the elements. Each attribute in an item is a name-value pair. Attributes have a single value.
		 * Required
		 */
		Value: TypedAttributeValue;
	}

	/** The combination of an attribute key and an attribute value. */
	export interface AttributeKeyAndValueFormProperties {
	}
	export function CreateAttributeKeyAndValueFormGroup() {
		return new FormGroup<AttributeKeyAndValueFormProperties>({
		});

	}


	/** A unique identifier for an attribute. */
	export interface AttributeKey {

		/** Required */
		SchemaArn: string;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		FacetName: string;

		/**
		 * Required
		 * Max length: 230
		 * Min length: 1
		 */
		Name: string;
	}

	/** A unique identifier for an attribute. */
	export interface AttributeKeyFormProperties {

		/** Required */
		SchemaArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		FacetName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 230
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateAttributeKeyFormGroup() {
		return new FormGroup<AttributeKeyFormProperties>({
			SchemaArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FacetName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9._-]*$')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(230), Validators.pattern('^[a-zA-Z0-9._:-]*$')]),
		});

	}


	/** Represents the data for a typed attribute. You can set one, and only one, of the elements. Each attribute in an item is a name-value pair. Attributes have a single value. */
	export interface TypedAttributeValue {
		StringValue?: string | null;
		BinaryValue?: string | null;
		BooleanValue?: boolean | null;
		NumberValue?: string | null;
		DatetimeValue?: Date | null;
	}

	/** Represents the data for a typed attribute. You can set one, and only one, of the elements. Each attribute in an item is a name-value pair. Attributes have a single value. */
	export interface TypedAttributeValueFormProperties {
		StringValue: FormControl<string | null | undefined>,
		BinaryValue: FormControl<string | null | undefined>,
		BooleanValue: FormControl<boolean | null | undefined>,
		NumberValue: FormControl<string | null | undefined>,
		DatetimeValue: FormControl<Date | null | undefined>,
	}
	export function CreateTypedAttributeValueFormGroup() {
		return new FormGroup<TypedAttributeValueFormProperties>({
			StringValue: new FormControl<string | null | undefined>(undefined),
			BinaryValue: new FormControl<string | null | undefined>(undefined),
			BooleanValue: new FormControl<boolean | null | undefined>(undefined),
			NumberValue: new FormControl<string | null | undefined>(undefined),
			DatetimeValue: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface InternalServiceException {
	}
	export interface InternalServiceExceptionFormProperties {
	}
	export function CreateInternalServiceExceptionFormGroup() {
		return new FormGroup<InternalServiceExceptionFormProperties>({
		});

	}

	export interface InvalidArnException {
	}
	export interface InvalidArnExceptionFormProperties {
	}
	export function CreateInvalidArnExceptionFormGroup() {
		return new FormGroup<InvalidArnExceptionFormProperties>({
		});

	}

	export interface RetryableConflictException {
	}
	export interface RetryableConflictExceptionFormProperties {
	}
	export function CreateRetryableConflictExceptionFormGroup() {
		return new FormGroup<RetryableConflictExceptionFormProperties>({
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

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
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

	export interface DirectoryNotEnabledException {
	}
	export interface DirectoryNotEnabledExceptionFormProperties {
	}
	export function CreateDirectoryNotEnabledExceptionFormGroup() {
		return new FormGroup<DirectoryNotEnabledExceptionFormProperties>({
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

	export interface FacetValidationException {
	}
	export interface FacetValidationExceptionFormProperties {
	}
	export function CreateFacetValidationExceptionFormGroup() {
		return new FormGroup<FacetValidationExceptionFormProperties>({
		});

	}

	export interface ApplySchemaResponse {
		AppliedSchemaArn?: string | null;
		DirectoryArn?: string | null;
	}
	export interface ApplySchemaResponseFormProperties {
		AppliedSchemaArn: FormControl<string | null | undefined>,
		DirectoryArn: FormControl<string | null | undefined>,
	}
	export function CreateApplySchemaResponseFormGroup() {
		return new FormGroup<ApplySchemaResponseFormProperties>({
			AppliedSchemaArn: new FormControl<string | null | undefined>(undefined),
			DirectoryArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SchemaAlreadyExistsException {
	}
	export interface SchemaAlreadyExistsExceptionFormProperties {
	}
	export function CreateSchemaAlreadyExistsExceptionFormGroup() {
		return new FormGroup<SchemaAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface InvalidAttachmentException {
	}
	export interface InvalidAttachmentExceptionFormProperties {
	}
	export function CreateInvalidAttachmentExceptionFormGroup() {
		return new FormGroup<InvalidAttachmentExceptionFormProperties>({
		});

	}

	export interface AttachObjectResponse {
		AttachedObjectIdentifier?: string | null;
	}
	export interface AttachObjectResponseFormProperties {
		AttachedObjectIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateAttachObjectResponseFormGroup() {
		return new FormGroup<AttachObjectResponseFormProperties>({
			AttachedObjectIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LinkNameAlreadyInUseException {
	}
	export interface LinkNameAlreadyInUseExceptionFormProperties {
	}
	export function CreateLinkNameAlreadyInUseExceptionFormGroup() {
		return new FormGroup<LinkNameAlreadyInUseExceptionFormProperties>({
		});

	}

	export interface AttachPolicyResponse {
	}
	export interface AttachPolicyResponseFormProperties {
	}
	export function CreateAttachPolicyResponseFormGroup() {
		return new FormGroup<AttachPolicyResponseFormProperties>({
		});

	}

	export interface NotPolicyException {
	}
	export interface NotPolicyExceptionFormProperties {
	}
	export function CreateNotPolicyExceptionFormGroup() {
		return new FormGroup<NotPolicyExceptionFormProperties>({
		});

	}

	export interface AttachToIndexResponse {
		AttachedObjectIdentifier?: string | null;
	}
	export interface AttachToIndexResponseFormProperties {
		AttachedObjectIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateAttachToIndexResponseFormGroup() {
		return new FormGroup<AttachToIndexResponseFormProperties>({
			AttachedObjectIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IndexedAttributeMissingException {
	}
	export interface IndexedAttributeMissingExceptionFormProperties {
	}
	export function CreateIndexedAttributeMissingExceptionFormGroup() {
		return new FormGroup<IndexedAttributeMissingExceptionFormProperties>({
		});

	}

	export interface NotIndexException {
	}
	export interface NotIndexExceptionFormProperties {
	}
	export function CreateNotIndexExceptionFormGroup() {
		return new FormGroup<NotIndexExceptionFormProperties>({
		});

	}

	export interface AttachTypedLinkResponse {

		/** Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch. */
		TypedLinkSpecifier?: TypedLinkSpecifier;
	}
	export interface AttachTypedLinkResponseFormProperties {
	}
	export function CreateAttachTypedLinkResponseFormGroup() {
		return new FormGroup<AttachTypedLinkResponseFormProperties>({
		});

	}


	/** Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch. */
	export interface TypedLinkSpecifier {

		/**
		 * Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link.
		 * Required
		 */
		TypedLinkFacet: TypedLinkSchemaAndFacetName;

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		SourceObjectReference: ObjectReference;

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		TargetObjectReference: ObjectReference;

		/** Required */
		IdentityAttributeValues: Array<AttributeNameAndValue>;
	}

	/** Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch. */
	export interface TypedLinkSpecifierFormProperties {
	}
	export function CreateTypedLinkSpecifierFormGroup() {
		return new FormGroup<TypedLinkSpecifierFormProperties>({
		});

	}


	/** Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link. */
	export interface TypedLinkSchemaAndFacetName {

		/** Required */
		SchemaArn: string;

		/** Required */
		TypedLinkName: string;
	}

	/** Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link. */
	export interface TypedLinkSchemaAndFacetNameFormProperties {

		/** Required */
		SchemaArn: FormControl<string | null | undefined>,

		/** Required */
		TypedLinkName: FormControl<string | null | undefined>,
	}
	export function CreateTypedLinkSchemaAndFacetNameFormGroup() {
		return new FormGroup<TypedLinkSchemaAndFacetNameFormProperties>({
			SchemaArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TypedLinkName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-zA-Z0-9._-]*$')]),
		});

	}


	/** The reference that identifies an object. */
	export interface ObjectReference {
		Selector?: string | null;
	}

	/** The reference that identifies an object. */
	export interface ObjectReferenceFormProperties {
		Selector: FormControl<string | null | undefined>,
	}
	export function CreateObjectReferenceFormGroup() {
		return new FormGroup<ObjectReferenceFormProperties>({
			Selector: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Identifies the attribute name and value for a typed link. */
	export interface AttributeNameAndValue {

		/**
		 * Required
		 * Max length: 230
		 * Min length: 1
		 */
		AttributeName: string;

		/**
		 * Represents the data for a typed attribute. You can set one, and only one, of the elements. Each attribute in an item is a name-value pair. Attributes have a single value.
		 * Required
		 */
		Value: TypedAttributeValue;
	}

	/** Identifies the attribute name and value for a typed link. */
	export interface AttributeNameAndValueFormProperties {

		/**
		 * Required
		 * Max length: 230
		 * Min length: 1
		 */
		AttributeName: FormControl<string | null | undefined>,
	}
	export function CreateAttributeNameAndValueFormGroup() {
		return new FormGroup<AttributeNameAndValueFormProperties>({
			AttributeName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(230), Validators.pattern('^[a-zA-Z0-9._:-]*$')]),
		});

	}

	export interface BatchReadResponse {
		Responses?: Array<BatchReadOperationResponse>;
	}
	export interface BatchReadResponseFormProperties {
	}
	export function CreateBatchReadResponseFormGroup() {
		return new FormGroup<BatchReadResponseFormProperties>({
		});

	}


	/** Represents the output of a <code>BatchRead</code> response operation. */
	export interface BatchReadOperationResponse {

		/** Represents the output of a <code>BatchRead</code> success response operation. */
		SuccessfulResponse?: BatchReadSuccessfulResponse;

		/** The batch read exception structure, which contains the exception type and message. */
		ExceptionResponse?: BatchReadException;
	}

	/** Represents the output of a <code>BatchRead</code> response operation. */
	export interface BatchReadOperationResponseFormProperties {
	}
	export function CreateBatchReadOperationResponseFormGroup() {
		return new FormGroup<BatchReadOperationResponseFormProperties>({
		});

	}


	/** Represents the output of a <code>BatchRead</code> success response operation. */
	export interface BatchReadSuccessfulResponse {

		/** Represents the output of a <a>ListObjectAttributes</a> response operation. */
		ListObjectAttributes?: BatchListObjectAttributesResponse;

		/** Represents the output of a <a>ListObjectChildren</a> response operation. */
		ListObjectChildren?: BatchListObjectChildrenResponse;

		/** Represents the output of a <a>GetObjectInformation</a> response operation. */
		GetObjectInformation?: BatchGetObjectInformationResponse;

		/** Represents the output of a <a>GetObjectAttributes</a> response operation. */
		GetObjectAttributes?: BatchGetObjectAttributesResponse;

		/** Represents the output of a <a>ListAttachedIndices</a> response operation. */
		ListAttachedIndices?: BatchListAttachedIndicesResponse;

		/** Represents the output of a <a>ListObjectParentPaths</a> response operation. */
		ListObjectParentPaths?: BatchListObjectParentPathsResponse;

		/** Represents the output of a <a>ListObjectPolicies</a> response operation. */
		ListObjectPolicies?: BatchListObjectPoliciesResponse;

		/** Represents the output of a <a>ListPolicyAttachments</a> response operation. */
		ListPolicyAttachments?: BatchListPolicyAttachmentsResponse;

		/** Represents the output of a <a>LookupPolicy</a> response operation. */
		LookupPolicy?: BatchLookupPolicyResponse;

		/** Represents the output of a <a>ListIndex</a> response operation. */
		ListIndex?: BatchListIndexResponse;

		/** Represents the output of a <a>ListOutgoingTypedLinks</a> response operation. */
		ListOutgoingTypedLinks?: BatchListOutgoingTypedLinksResponse;

		/** Represents the output of a <a>ListIncomingTypedLinks</a> response operation. */
		ListIncomingTypedLinks?: BatchListIncomingTypedLinksResponse;

		/** Represents the output of a <a>GetLinkAttributes</a> response operation. */
		GetLinkAttributes?: BatchGetLinkAttributesResponse;
		ListObjectParents?: BatchListObjectParentsResponse;
	}

	/** Represents the output of a <code>BatchRead</code> success response operation. */
	export interface BatchReadSuccessfulResponseFormProperties {
	}
	export function CreateBatchReadSuccessfulResponseFormGroup() {
		return new FormGroup<BatchReadSuccessfulResponseFormProperties>({
		});

	}


	/** Represents the output of a <a>ListObjectAttributes</a> response operation. */
	export interface BatchListObjectAttributesResponse {
		Attributes?: Array<AttributeKeyAndValue>;
		NextToken?: string | null;
	}

	/** Represents the output of a <a>ListObjectAttributes</a> response operation. */
	export interface BatchListObjectAttributesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateBatchListObjectAttributesResponseFormGroup() {
		return new FormGroup<BatchListObjectAttributesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of a <a>ListObjectChildren</a> response operation. */
	export interface BatchListObjectChildrenResponse {
		Children?: LinkNameToObjectIdentifierMap;
		NextToken?: string | null;
	}

	/** Represents the output of a <a>ListObjectChildren</a> response operation. */
	export interface BatchListObjectChildrenResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateBatchListObjectChildrenResponseFormGroup() {
		return new FormGroup<BatchListObjectChildrenResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LinkNameToObjectIdentifierMap {
	}
	export interface LinkNameToObjectIdentifierMapFormProperties {
	}
	export function CreateLinkNameToObjectIdentifierMapFormGroup() {
		return new FormGroup<LinkNameToObjectIdentifierMapFormProperties>({
		});

	}


	/** Represents the output of a <a>GetObjectInformation</a> response operation. */
	export interface BatchGetObjectInformationResponse {
		SchemaFacets?: Array<SchemaFacet>;
		ObjectIdentifier?: string | null;
	}

	/** Represents the output of a <a>GetObjectInformation</a> response operation. */
	export interface BatchGetObjectInformationResponseFormProperties {
		ObjectIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetObjectInformationResponseFormGroup() {
		return new FormGroup<BatchGetObjectInformationResponseFormProperties>({
			ObjectIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A facet. */
	export interface SchemaFacet {
		SchemaArn?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		FacetName?: string | null;
	}

	/** A facet. */
	export interface SchemaFacetFormProperties {
		SchemaArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		FacetName: FormControl<string | null | undefined>,
	}
	export function CreateSchemaFacetFormGroup() {
		return new FormGroup<SchemaFacetFormProperties>({
			SchemaArn: new FormControl<string | null | undefined>(undefined),
			FacetName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9._-]*$')]),
		});

	}


	/** Represents the output of a <a>GetObjectAttributes</a> response operation. */
	export interface BatchGetObjectAttributesResponse {
		Attributes?: Array<AttributeKeyAndValue>;
	}

	/** Represents the output of a <a>GetObjectAttributes</a> response operation. */
	export interface BatchGetObjectAttributesResponseFormProperties {
	}
	export function CreateBatchGetObjectAttributesResponseFormGroup() {
		return new FormGroup<BatchGetObjectAttributesResponseFormProperties>({
		});

	}


	/** Represents the output of a <a>ListAttachedIndices</a> response operation. */
	export interface BatchListAttachedIndicesResponse {
		IndexAttachments?: Array<IndexAttachment>;
		NextToken?: string | null;
	}

	/** Represents the output of a <a>ListAttachedIndices</a> response operation. */
	export interface BatchListAttachedIndicesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateBatchListAttachedIndicesResponseFormGroup() {
		return new FormGroup<BatchListAttachedIndicesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an index and an attached object. */
	export interface IndexAttachment {
		IndexedAttributes?: Array<AttributeKeyAndValue>;
		ObjectIdentifier?: string | null;
	}

	/** Represents an index and an attached object. */
	export interface IndexAttachmentFormProperties {
		ObjectIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateIndexAttachmentFormGroup() {
		return new FormGroup<IndexAttachmentFormProperties>({
			ObjectIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of a <a>ListObjectParentPaths</a> response operation. */
	export interface BatchListObjectParentPathsResponse {
		PathToObjectIdentifiersList?: Array<PathToObjectIdentifiers>;
		NextToken?: string | null;
	}

	/** Represents the output of a <a>ListObjectParentPaths</a> response operation. */
	export interface BatchListObjectParentPathsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateBatchListObjectParentPathsResponseFormGroup() {
		return new FormGroup<BatchListObjectParentPathsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns the path to the <code>ObjectIdentifiers</code> that is associated with the directory. */
	export interface PathToObjectIdentifiers {
		Path?: string | null;
		ObjectIdentifiers?: Array<string>;
	}

	/** Returns the path to the <code>ObjectIdentifiers</code> that is associated with the directory. */
	export interface PathToObjectIdentifiersFormProperties {
		Path: FormControl<string | null | undefined>,
	}
	export function CreatePathToObjectIdentifiersFormGroup() {
		return new FormGroup<PathToObjectIdentifiersFormProperties>({
			Path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of a <a>ListObjectPolicies</a> response operation. */
	export interface BatchListObjectPoliciesResponse {
		AttachedPolicyIds?: Array<string>;
		NextToken?: string | null;
	}

	/** Represents the output of a <a>ListObjectPolicies</a> response operation. */
	export interface BatchListObjectPoliciesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateBatchListObjectPoliciesResponseFormGroup() {
		return new FormGroup<BatchListObjectPoliciesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of a <a>ListPolicyAttachments</a> response operation. */
	export interface BatchListPolicyAttachmentsResponse {
		ObjectIdentifiers?: Array<string>;
		NextToken?: string | null;
	}

	/** Represents the output of a <a>ListPolicyAttachments</a> response operation. */
	export interface BatchListPolicyAttachmentsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateBatchListPolicyAttachmentsResponseFormGroup() {
		return new FormGroup<BatchListPolicyAttachmentsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of a <a>LookupPolicy</a> response operation. */
	export interface BatchLookupPolicyResponse {
		PolicyToPathList?: Array<PolicyToPath>;
		NextToken?: string | null;
	}

	/** Represents the output of a <a>LookupPolicy</a> response operation. */
	export interface BatchLookupPolicyResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateBatchLookupPolicyResponseFormGroup() {
		return new FormGroup<BatchLookupPolicyResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Used when a regular object exists in a <a>Directory</a> and you want to find all of the policies that are associated with that object and the parent to that object. */
	export interface PolicyToPath {
		Path?: string | null;
		Policies?: Array<PolicyAttachment>;
	}

	/** Used when a regular object exists in a <a>Directory</a> and you want to find all of the policies that are associated with that object and the parent to that object. */
	export interface PolicyToPathFormProperties {
		Path: FormControl<string | null | undefined>,
	}
	export function CreatePolicyToPathFormGroup() {
		return new FormGroup<PolicyToPathFormProperties>({
			Path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the <code>PolicyType</code>, <code>PolicyId</code>, and the <code>ObjectIdentifier</code> to which it is attached. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>. */
	export interface PolicyAttachment {
		PolicyId?: string | null;
		ObjectIdentifier?: string | null;
		PolicyType?: string | null;
	}

	/** Contains the <code>PolicyType</code>, <code>PolicyId</code>, and the <code>ObjectIdentifier</code> to which it is attached. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>. */
	export interface PolicyAttachmentFormProperties {
		PolicyId: FormControl<string | null | undefined>,
		ObjectIdentifier: FormControl<string | null | undefined>,
		PolicyType: FormControl<string | null | undefined>,
	}
	export function CreatePolicyAttachmentFormGroup() {
		return new FormGroup<PolicyAttachmentFormProperties>({
			PolicyId: new FormControl<string | null | undefined>(undefined),
			ObjectIdentifier: new FormControl<string | null | undefined>(undefined),
			PolicyType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of a <a>ListIndex</a> response operation. */
	export interface BatchListIndexResponse {
		IndexAttachments?: Array<IndexAttachment>;
		NextToken?: string | null;
	}

	/** Represents the output of a <a>ListIndex</a> response operation. */
	export interface BatchListIndexResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateBatchListIndexResponseFormGroup() {
		return new FormGroup<BatchListIndexResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of a <a>ListOutgoingTypedLinks</a> response operation. */
	export interface BatchListOutgoingTypedLinksResponse {
		TypedLinkSpecifiers?: Array<TypedLinkSpecifier>;
		NextToken?: string | null;
	}

	/** Represents the output of a <a>ListOutgoingTypedLinks</a> response operation. */
	export interface BatchListOutgoingTypedLinksResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateBatchListOutgoingTypedLinksResponseFormGroup() {
		return new FormGroup<BatchListOutgoingTypedLinksResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of a <a>ListIncomingTypedLinks</a> response operation. */
	export interface BatchListIncomingTypedLinksResponse {
		LinkSpecifiers?: Array<TypedLinkSpecifier>;
		NextToken?: string | null;
	}

	/** Represents the output of a <a>ListIncomingTypedLinks</a> response operation. */
	export interface BatchListIncomingTypedLinksResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateBatchListIncomingTypedLinksResponseFormGroup() {
		return new FormGroup<BatchListIncomingTypedLinksResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of a <a>GetLinkAttributes</a> response operation. */
	export interface BatchGetLinkAttributesResponse {
		Attributes?: Array<AttributeKeyAndValue>;
	}

	/** Represents the output of a <a>GetLinkAttributes</a> response operation. */
	export interface BatchGetLinkAttributesResponseFormProperties {
	}
	export function CreateBatchGetLinkAttributesResponseFormGroup() {
		return new FormGroup<BatchGetLinkAttributesResponseFormProperties>({
		});

	}

	export interface BatchListObjectParentsResponse {
		ParentLinks?: Array<ObjectIdentifierAndLinkNameTuple>;
		NextToken?: string | null;
	}
	export interface BatchListObjectParentsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateBatchListObjectParentsResponseFormGroup() {
		return new FormGroup<BatchListObjectParentsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A pair of ObjectIdentifier and LinkName. */
	export interface ObjectIdentifierAndLinkNameTuple {
		ObjectIdentifier?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		LinkName?: string | null;
	}

	/** A pair of ObjectIdentifier and LinkName. */
	export interface ObjectIdentifierAndLinkNameTupleFormProperties {
		ObjectIdentifier: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		LinkName: FormControl<string | null | undefined>,
	}
	export function CreateObjectIdentifierAndLinkNameTupleFormGroup() {
		return new FormGroup<ObjectIdentifierAndLinkNameTupleFormProperties>({
			ObjectIdentifier: new FormControl<string | null | undefined>(undefined),
			LinkName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[^\/\[\]\(\):\{\}#@!?\s\\;]+')]),
		});

	}


	/** The batch read exception structure, which contains the exception type and message. */
	export interface BatchReadException {
		Type?: BatchReadExceptionType | null;
		Message?: string | null;
	}

	/** The batch read exception structure, which contains the exception type and message. */
	export interface BatchReadExceptionFormProperties {
		Type: FormControl<BatchReadExceptionType | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateBatchReadExceptionFormGroup() {
		return new FormGroup<BatchReadExceptionFormProperties>({
			Type: new FormControl<BatchReadExceptionType | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BatchReadExceptionType { ValidationException = 0, InvalidArnException = 1, ResourceNotFoundException = 2, InvalidNextTokenException = 3, AccessDeniedException = 4, NotNodeException = 5, FacetValidationException = 6, CannotListParentOfRootException = 7, NotIndexException = 8, NotPolicyException = 9, DirectoryNotEnabledException = 10, LimitExceededException = 11, InternalServiceException = 12 }


	/** Represents the output of a <code>BatchRead</code> operation. */
	export interface BatchReadOperation {

		/** Represents the output of a <a>ListObjectAttributes</a> operation. */
		ListObjectAttributes?: BatchListObjectAttributes;

		/** Represents the output of a <a>ListObjectChildren</a> operation. */
		ListObjectChildren?: BatchListObjectChildren;

		/** Lists indices attached to an object inside a <a>BatchRead</a> operation. For more information, see <a>ListAttachedIndices</a> and <a>BatchReadRequest$Operations</a>. */
		ListAttachedIndices?: BatchListAttachedIndices;

		/** Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects inside a <a>BatchRead</a> operation. For more information, see <a>ListObjectParentPaths</a> and <a>BatchReadRequest$Operations</a>. */
		ListObjectParentPaths?: BatchListObjectParentPaths;

		/** Retrieves metadata about an object inside a <a>BatchRead</a> operation. For more information, see <a>GetObjectInformation</a> and <a>BatchReadRequest$Operations</a>. */
		GetObjectInformation?: BatchGetObjectInformation;

		/** Retrieves attributes within a facet that are associated with an object inside an <a>BatchRead</a> operation. For more information, see <a>GetObjectAttributes</a> and <a>BatchReadRequest$Operations</a>. */
		GetObjectAttributes?: BatchGetObjectAttributes;
		ListObjectParents?: BatchListObjectParents;

		/** Returns policies attached to an object in pagination fashion inside a <a>BatchRead</a> operation. For more information, see <a>ListObjectPolicies</a> and <a>BatchReadRequest$Operations</a>. */
		ListObjectPolicies?: BatchListObjectPolicies;

		/** Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached inside a <a>BatchRead</a> operation. For more information, see <a>ListPolicyAttachments</a> and <a>BatchReadRequest$Operations</a>. */
		ListPolicyAttachments?: BatchListPolicyAttachments;

		/** Lists all policies from the root of the Directory to the object specified inside a <a>BatchRead</a> operation. For more information, see <a>LookupPolicy</a> and <a>BatchReadRequest$Operations</a>. */
		LookupPolicy?: BatchLookupPolicy;

		/** Lists objects attached to the specified index inside a <a>BatchRead</a> operation. For more information, see <a>ListIndex</a> and <a>BatchReadRequest$Operations</a>. */
		ListIndex?: BatchListIndex;

		/** Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object inside a <a>BatchRead</a> operation. For more information, see <a>ListOutgoingTypedLinks</a> and <a>BatchReadRequest$Operations</a>. */
		ListOutgoingTypedLinks?: BatchListOutgoingTypedLinks;

		/** Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a> information for an object inside a <a>BatchRead</a> operation. For more information, see <a>ListIncomingTypedLinks</a> and <a>BatchReadRequest$Operations</a>. */
		ListIncomingTypedLinks?: BatchListIncomingTypedLinks;

		/** Retrieves attributes that are associated with a typed link inside a <a>BatchRead</a> operation. For more information, see <a>GetLinkAttributes</a> and <a>BatchReadRequest$Operations</a>. */
		GetLinkAttributes?: BatchGetLinkAttributes;
	}

	/** Represents the output of a <code>BatchRead</code> operation. */
	export interface BatchReadOperationFormProperties {
	}
	export function CreateBatchReadOperationFormGroup() {
		return new FormGroup<BatchReadOperationFormProperties>({
		});

	}


	/** Represents the output of a <a>ListObjectAttributes</a> operation. */
	export interface BatchListObjectAttributes {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
		NextToken?: string | null;

		/** Minimum: 1 */
		MaxResults?: number | null;

		/** A facet. */
		FacetFilter?: SchemaFacet;
	}

	/** Represents the output of a <a>ListObjectAttributes</a> operation. */
	export interface BatchListObjectAttributesFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateBatchListObjectAttributesFormGroup() {
		return new FormGroup<BatchListObjectAttributesFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}


	/** Represents the output of a <a>ListObjectChildren</a> operation. */
	export interface BatchListObjectChildren {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
		NextToken?: string | null;

		/** Minimum: 1 */
		MaxResults?: number | null;
	}

	/** Represents the output of a <a>ListObjectChildren</a> operation. */
	export interface BatchListObjectChildrenFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateBatchListObjectChildrenFormGroup() {
		return new FormGroup<BatchListObjectChildrenFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}


	/** Lists indices attached to an object inside a <a>BatchRead</a> operation. For more information, see <a>ListAttachedIndices</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchListAttachedIndices {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		TargetReference: ObjectReference;
		NextToken?: string | null;

		/** Minimum: 1 */
		MaxResults?: number | null;
	}

	/** Lists indices attached to an object inside a <a>BatchRead</a> operation. For more information, see <a>ListAttachedIndices</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchListAttachedIndicesFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateBatchListAttachedIndicesFormGroup() {
		return new FormGroup<BatchListAttachedIndicesFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}


	/** Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects inside a <a>BatchRead</a> operation. For more information, see <a>ListObjectParentPaths</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchListObjectParentPaths {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
		NextToken?: string | null;

		/** Minimum: 1 */
		MaxResults?: number | null;
	}

	/** Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects inside a <a>BatchRead</a> operation. For more information, see <a>ListObjectParentPaths</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchListObjectParentPathsFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateBatchListObjectParentPathsFormGroup() {
		return new FormGroup<BatchListObjectParentPathsFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}


	/** Retrieves metadata about an object inside a <a>BatchRead</a> operation. For more information, see <a>GetObjectInformation</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchGetObjectInformation {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
	}

	/** Retrieves metadata about an object inside a <a>BatchRead</a> operation. For more information, see <a>GetObjectInformation</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchGetObjectInformationFormProperties {
	}
	export function CreateBatchGetObjectInformationFormGroup() {
		return new FormGroup<BatchGetObjectInformationFormProperties>({
		});

	}


	/** Retrieves attributes within a facet that are associated with an object inside an <a>BatchRead</a> operation. For more information, see <a>GetObjectAttributes</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchGetObjectAttributes {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;

		/**
		 * A facet.
		 * Required
		 */
		SchemaFacet: SchemaFacet;

		/** Required */
		AttributeNames: Array<string>;
	}

	/** Retrieves attributes within a facet that are associated with an object inside an <a>BatchRead</a> operation. For more information, see <a>GetObjectAttributes</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchGetObjectAttributesFormProperties {
	}
	export function CreateBatchGetObjectAttributesFormGroup() {
		return new FormGroup<BatchGetObjectAttributesFormProperties>({
		});

	}

	export interface BatchListObjectParents {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
		NextToken?: string | null;

		/** Minimum: 1 */
		MaxResults?: number | null;
	}
	export interface BatchListObjectParentsFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateBatchListObjectParentsFormGroup() {
		return new FormGroup<BatchListObjectParentsFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}


	/** Returns policies attached to an object in pagination fashion inside a <a>BatchRead</a> operation. For more information, see <a>ListObjectPolicies</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchListObjectPolicies {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
		NextToken?: string | null;

		/** Minimum: 1 */
		MaxResults?: number | null;
	}

	/** Returns policies attached to an object in pagination fashion inside a <a>BatchRead</a> operation. For more information, see <a>ListObjectPolicies</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchListObjectPoliciesFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateBatchListObjectPoliciesFormGroup() {
		return new FormGroup<BatchListObjectPoliciesFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}


	/** Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached inside a <a>BatchRead</a> operation. For more information, see <a>ListPolicyAttachments</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchListPolicyAttachments {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		PolicyReference: ObjectReference;
		NextToken?: string | null;

		/** Minimum: 1 */
		MaxResults?: number | null;
	}

	/** Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached inside a <a>BatchRead</a> operation. For more information, see <a>ListPolicyAttachments</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchListPolicyAttachmentsFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateBatchListPolicyAttachmentsFormGroup() {
		return new FormGroup<BatchListPolicyAttachmentsFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}


	/** Lists all policies from the root of the Directory to the object specified inside a <a>BatchRead</a> operation. For more information, see <a>LookupPolicy</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchLookupPolicy {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
		NextToken?: string | null;

		/** Minimum: 1 */
		MaxResults?: number | null;
	}

	/** Lists all policies from the root of the Directory to the object specified inside a <a>BatchRead</a> operation. For more information, see <a>LookupPolicy</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchLookupPolicyFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateBatchLookupPolicyFormGroup() {
		return new FormGroup<BatchLookupPolicyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}


	/** Lists objects attached to the specified index inside a <a>BatchRead</a> operation. For more information, see <a>ListIndex</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchListIndex {
		RangesOnIndexedValues?: Array<ObjectAttributeRange>;

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		IndexReference: ObjectReference;

		/** Minimum: 1 */
		MaxResults?: number | null;
		NextToken?: string | null;
	}

	/** Lists objects attached to the specified index inside a <a>BatchRead</a> operation. For more information, see <a>ListIndex</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchListIndexFormProperties {

		/** Minimum: 1 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateBatchListIndexFormGroup() {
		return new FormGroup<BatchListIndexFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A range of attributes. */
	export interface ObjectAttributeRange {

		/** A unique identifier for an attribute. */
		AttributeKey?: AttributeKey;

		/** A range of attribute values. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_range_filters.html">Range Filters</a>. */
		Range?: TypedAttributeValueRange;
	}

	/** A range of attributes. */
	export interface ObjectAttributeRangeFormProperties {
	}
	export function CreateObjectAttributeRangeFormGroup() {
		return new FormGroup<ObjectAttributeRangeFormProperties>({
		});

	}


	/** A range of attribute values. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_range_filters.html">Range Filters</a>. */
	export interface TypedAttributeValueRange {

		/** Required */
		StartMode: TypedAttributeValueRangeStartMode;

		/** Represents the data for a typed attribute. You can set one, and only one, of the elements. Each attribute in an item is a name-value pair. Attributes have a single value. */
		StartValue?: TypedAttributeValue;

		/** Required */
		EndMode: TypedAttributeValueRangeStartMode;

		/** Represents the data for a typed attribute. You can set one, and only one, of the elements. Each attribute in an item is a name-value pair. Attributes have a single value. */
		EndValue?: TypedAttributeValue;
	}

	/** A range of attribute values. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_range_filters.html">Range Filters</a>. */
	export interface TypedAttributeValueRangeFormProperties {

		/** Required */
		StartMode: FormControl<TypedAttributeValueRangeStartMode | null | undefined>,

		/** Required */
		EndMode: FormControl<TypedAttributeValueRangeStartMode | null | undefined>,
	}
	export function CreateTypedAttributeValueRangeFormGroup() {
		return new FormGroup<TypedAttributeValueRangeFormProperties>({
			StartMode: new FormControl<TypedAttributeValueRangeStartMode | null | undefined>(undefined, [Validators.required]),
			EndMode: new FormControl<TypedAttributeValueRangeStartMode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TypedAttributeValueRangeStartMode { FIRST = 0, LAST = 1, LAST_BEFORE_MISSING_VALUES = 2, INCLUSIVE = 3, EXCLUSIVE = 4 }


	/** Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object inside a <a>BatchRead</a> operation. For more information, see <a>ListOutgoingTypedLinks</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchListOutgoingTypedLinks {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
		FilterAttributeRanges?: Array<TypedLinkAttributeRange>;

		/** Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link. */
		FilterTypedLink?: TypedLinkSchemaAndFacetName;
		NextToken?: string | null;

		/** Minimum: 1 */
		MaxResults?: number | null;
	}

	/** Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object inside a <a>BatchRead</a> operation. For more information, see <a>ListOutgoingTypedLinks</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchListOutgoingTypedLinksFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateBatchListOutgoingTypedLinksFormGroup() {
		return new FormGroup<BatchListOutgoingTypedLinksFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}


	/** Identifies the range of attributes that are used by a specified filter. */
	export interface TypedLinkAttributeRange {

		/**
		 * Max length: 230
		 * Min length: 1
		 */
		AttributeName?: string | null;

		/**
		 * A range of attribute values. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_range_filters.html">Range Filters</a>.
		 * Required
		 */
		Range: TypedAttributeValueRange;
	}

	/** Identifies the range of attributes that are used by a specified filter. */
	export interface TypedLinkAttributeRangeFormProperties {

		/**
		 * Max length: 230
		 * Min length: 1
		 */
		AttributeName: FormControl<string | null | undefined>,
	}
	export function CreateTypedLinkAttributeRangeFormGroup() {
		return new FormGroup<TypedLinkAttributeRangeFormProperties>({
			AttributeName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(230), Validators.pattern('^[a-zA-Z0-9._:-]*$')]),
		});

	}


	/** Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a> information for an object inside a <a>BatchRead</a> operation. For more information, see <a>ListIncomingTypedLinks</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchListIncomingTypedLinks {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
		FilterAttributeRanges?: Array<TypedLinkAttributeRange>;

		/** Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link. */
		FilterTypedLink?: TypedLinkSchemaAndFacetName;
		NextToken?: string | null;

		/** Minimum: 1 */
		MaxResults?: number | null;
	}

	/** Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a> information for an object inside a <a>BatchRead</a> operation. For more information, see <a>ListIncomingTypedLinks</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchListIncomingTypedLinksFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateBatchListIncomingTypedLinksFormGroup() {
		return new FormGroup<BatchListIncomingTypedLinksFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}


	/** Retrieves attributes that are associated with a typed link inside a <a>BatchRead</a> operation. For more information, see <a>GetLinkAttributes</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchGetLinkAttributes {

		/**
		 * Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.
		 * Required
		 */
		TypedLinkSpecifier: TypedLinkSpecifier;

		/** Required */
		AttributeNames: Array<string>;
	}

	/** Retrieves attributes that are associated with a typed link inside a <a>BatchRead</a> operation. For more information, see <a>GetLinkAttributes</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchGetLinkAttributesFormProperties {
	}
	export function CreateBatchGetLinkAttributesFormGroup() {
		return new FormGroup<BatchGetLinkAttributesFormProperties>({
		});

	}

	export interface BatchWriteResponse {
		Responses?: Array<BatchWriteOperationResponse>;
	}
	export interface BatchWriteResponseFormProperties {
	}
	export function CreateBatchWriteResponseFormGroup() {
		return new FormGroup<BatchWriteResponseFormProperties>({
		});

	}


	/** Represents the output of a <code>BatchWrite</code> response operation. */
	export interface BatchWriteOperationResponse {

		/** Represents the output of a <a>CreateObject</a> response operation. */
		CreateObject?: BatchCreateObjectResponse;

		/** Represents the output batch <a>AttachObject</a> response operation. */
		AttachObject?: BatchAttachObjectResponse;

		/** Represents the output of a <a>DetachObject</a> response operation. */
		DetachObject?: BatchDetachObjectResponse;

		/** Represents the output of a <code>BatchUpdate</code> response operation. */
		UpdateObjectAttributes?: BatchUpdateObjectAttributesResponse;

		/** Represents the output of a <a>DeleteObject</a> response operation. */
		DeleteObject?: BatchDeleteObjectResponse;

		/** The result of a batch add facet to object operation. */
		AddFacetToObject?: BatchAddFacetToObjectResponse;

		/** An empty result that represents success. */
		RemoveFacetFromObject?: BatchRemoveFacetFromObjectResponse;

		/** Represents the output of an <a>AttachPolicy</a> response operation. */
		AttachPolicy?: BatchAttachPolicyResponse;

		/** Represents the output of a <a>DetachPolicy</a> response operation. */
		DetachPolicy?: BatchDetachPolicyResponse;

		/** Represents the output of a <a>CreateIndex</a> response operation. */
		CreateIndex?: BatchCreateIndexResponse;

		/** Represents the output of a <a>AttachToIndex</a> response operation. */
		AttachToIndex?: BatchAttachToIndexResponse;

		/** Represents the output of a <a>DetachFromIndex</a> response operation. */
		DetachFromIndex?: BatchDetachFromIndexResponse;

		/** Represents the output of a <a>AttachTypedLink</a> response operation. */
		AttachTypedLink?: BatchAttachTypedLinkResponse;

		/** Represents the output of a <a>DetachTypedLink</a> response operation. */
		DetachTypedLink?: BatchDetachTypedLinkResponse;

		/** Represents the output of a <a>UpdateLinkAttributes</a> response operation. */
		UpdateLinkAttributes?: BatchUpdateLinkAttributesResponse;
	}

	/** Represents the output of a <code>BatchWrite</code> response operation. */
	export interface BatchWriteOperationResponseFormProperties {
	}
	export function CreateBatchWriteOperationResponseFormGroup() {
		return new FormGroup<BatchWriteOperationResponseFormProperties>({
		});

	}


	/** Represents the output of a <a>CreateObject</a> response operation. */
	export interface BatchCreateObjectResponse {
		ObjectIdentifier?: string | null;
	}

	/** Represents the output of a <a>CreateObject</a> response operation. */
	export interface BatchCreateObjectResponseFormProperties {
		ObjectIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateBatchCreateObjectResponseFormGroup() {
		return new FormGroup<BatchCreateObjectResponseFormProperties>({
			ObjectIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output batch <a>AttachObject</a> response operation. */
	export interface BatchAttachObjectResponse {
		attachedObjectIdentifier?: string | null;
	}

	/** Represents the output batch <a>AttachObject</a> response operation. */
	export interface BatchAttachObjectResponseFormProperties {
		attachedObjectIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateBatchAttachObjectResponseFormGroup() {
		return new FormGroup<BatchAttachObjectResponseFormProperties>({
			attachedObjectIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of a <a>DetachObject</a> response operation. */
	export interface BatchDetachObjectResponse {
		detachedObjectIdentifier?: string | null;
	}

	/** Represents the output of a <a>DetachObject</a> response operation. */
	export interface BatchDetachObjectResponseFormProperties {
		detachedObjectIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateBatchDetachObjectResponseFormGroup() {
		return new FormGroup<BatchDetachObjectResponseFormProperties>({
			detachedObjectIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of a <code>BatchUpdate</code> response operation. */
	export interface BatchUpdateObjectAttributesResponse {
		ObjectIdentifier?: string | null;
	}

	/** Represents the output of a <code>BatchUpdate</code> response operation. */
	export interface BatchUpdateObjectAttributesResponseFormProperties {
		ObjectIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateBatchUpdateObjectAttributesResponseFormGroup() {
		return new FormGroup<BatchUpdateObjectAttributesResponseFormProperties>({
			ObjectIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of a <a>DeleteObject</a> response operation. */
	export interface BatchDeleteObjectResponse {
	}

	/** Represents the output of a <a>DeleteObject</a> response operation. */
	export interface BatchDeleteObjectResponseFormProperties {
	}
	export function CreateBatchDeleteObjectResponseFormGroup() {
		return new FormGroup<BatchDeleteObjectResponseFormProperties>({
		});

	}


	/** The result of a batch add facet to object operation. */
	export interface BatchAddFacetToObjectResponse {
	}

	/** The result of a batch add facet to object operation. */
	export interface BatchAddFacetToObjectResponseFormProperties {
	}
	export function CreateBatchAddFacetToObjectResponseFormGroup() {
		return new FormGroup<BatchAddFacetToObjectResponseFormProperties>({
		});

	}


	/** An empty result that represents success. */
	export interface BatchRemoveFacetFromObjectResponse {
	}

	/** An empty result that represents success. */
	export interface BatchRemoveFacetFromObjectResponseFormProperties {
	}
	export function CreateBatchRemoveFacetFromObjectResponseFormGroup() {
		return new FormGroup<BatchRemoveFacetFromObjectResponseFormProperties>({
		});

	}


	/** Represents the output of an <a>AttachPolicy</a> response operation. */
	export interface BatchAttachPolicyResponse {
	}

	/** Represents the output of an <a>AttachPolicy</a> response operation. */
	export interface BatchAttachPolicyResponseFormProperties {
	}
	export function CreateBatchAttachPolicyResponseFormGroup() {
		return new FormGroup<BatchAttachPolicyResponseFormProperties>({
		});

	}


	/** Represents the output of a <a>DetachPolicy</a> response operation. */
	export interface BatchDetachPolicyResponse {
	}

	/** Represents the output of a <a>DetachPolicy</a> response operation. */
	export interface BatchDetachPolicyResponseFormProperties {
	}
	export function CreateBatchDetachPolicyResponseFormGroup() {
		return new FormGroup<BatchDetachPolicyResponseFormProperties>({
		});

	}


	/** Represents the output of a <a>CreateIndex</a> response operation. */
	export interface BatchCreateIndexResponse {
		ObjectIdentifier?: string | null;
	}

	/** Represents the output of a <a>CreateIndex</a> response operation. */
	export interface BatchCreateIndexResponseFormProperties {
		ObjectIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateBatchCreateIndexResponseFormGroup() {
		return new FormGroup<BatchCreateIndexResponseFormProperties>({
			ObjectIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of a <a>AttachToIndex</a> response operation. */
	export interface BatchAttachToIndexResponse {
		AttachedObjectIdentifier?: string | null;
	}

	/** Represents the output of a <a>AttachToIndex</a> response operation. */
	export interface BatchAttachToIndexResponseFormProperties {
		AttachedObjectIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateBatchAttachToIndexResponseFormGroup() {
		return new FormGroup<BatchAttachToIndexResponseFormProperties>({
			AttachedObjectIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of a <a>DetachFromIndex</a> response operation. */
	export interface BatchDetachFromIndexResponse {
		DetachedObjectIdentifier?: string | null;
	}

	/** Represents the output of a <a>DetachFromIndex</a> response operation. */
	export interface BatchDetachFromIndexResponseFormProperties {
		DetachedObjectIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateBatchDetachFromIndexResponseFormGroup() {
		return new FormGroup<BatchDetachFromIndexResponseFormProperties>({
			DetachedObjectIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of a <a>AttachTypedLink</a> response operation. */
	export interface BatchAttachTypedLinkResponse {

		/** Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch. */
		TypedLinkSpecifier?: TypedLinkSpecifier;
	}

	/** Represents the output of a <a>AttachTypedLink</a> response operation. */
	export interface BatchAttachTypedLinkResponseFormProperties {
	}
	export function CreateBatchAttachTypedLinkResponseFormGroup() {
		return new FormGroup<BatchAttachTypedLinkResponseFormProperties>({
		});

	}


	/** Represents the output of a <a>DetachTypedLink</a> response operation. */
	export interface BatchDetachTypedLinkResponse {
	}

	/** Represents the output of a <a>DetachTypedLink</a> response operation. */
	export interface BatchDetachTypedLinkResponseFormProperties {
	}
	export function CreateBatchDetachTypedLinkResponseFormGroup() {
		return new FormGroup<BatchDetachTypedLinkResponseFormProperties>({
		});

	}


	/** Represents the output of a <a>UpdateLinkAttributes</a> response operation. */
	export interface BatchUpdateLinkAttributesResponse {
	}

	/** Represents the output of a <a>UpdateLinkAttributes</a> response operation. */
	export interface BatchUpdateLinkAttributesResponseFormProperties {
	}
	export function CreateBatchUpdateLinkAttributesResponseFormGroup() {
		return new FormGroup<BatchUpdateLinkAttributesResponseFormProperties>({
		});

	}


	/** Represents the output of a <code>BatchWrite</code> operation.  */
	export interface BatchWriteOperation {

		/** Represents the output of a <a>CreateObject</a> operation. */
		CreateObject?: BatchCreateObject;

		/** Represents the output of an <a>AttachObject</a> operation. */
		AttachObject?: BatchAttachObject;

		/** Represents the output of a <a>DetachObject</a> operation. */
		DetachObject?: BatchDetachObject;

		/** Represents the output of a <code>BatchUpdate</code> operation. */
		UpdateObjectAttributes?: BatchUpdateObjectAttributes;

		/** Represents the output of a <a>DeleteObject</a> operation. */
		DeleteObject?: BatchDeleteObject;

		/** Represents the output of a batch add facet to object operation. */
		AddFacetToObject?: BatchAddFacetToObject;

		/** A batch operation to remove a facet from an object. */
		RemoveFacetFromObject?: BatchRemoveFacetFromObject;

		/** Attaches a policy object to a regular object inside a <a>BatchRead</a> operation. For more information, see <a>AttachPolicy</a> and <a>BatchReadRequest$Operations</a>. */
		AttachPolicy?: BatchAttachPolicy;

		/** Detaches the specified policy from the specified directory inside a <a>BatchWrite</a> operation. For more information, see <a>DetachPolicy</a> and <a>BatchWriteRequest$Operations</a>. */
		DetachPolicy?: BatchDetachPolicy;

		/** Creates an index object inside of a <a>BatchRead</a> operation. For more information, see <a>CreateIndex</a> and <a>BatchReadRequest$Operations</a>. */
		CreateIndex?: BatchCreateIndex;

		/** Attaches the specified object to the specified index inside a <a>BatchRead</a> operation. For more information, see <a>AttachToIndex</a> and <a>BatchReadRequest$Operations</a>. */
		AttachToIndex?: BatchAttachToIndex;

		/** Detaches the specified object from the specified index inside a <a>BatchRead</a> operation. For more information, see <a>DetachFromIndex</a> and <a>BatchReadRequest$Operations</a>. */
		DetachFromIndex?: BatchDetachFromIndex;

		/** Attaches a typed link to a specified source and target object inside a <a>BatchRead</a> operation. For more information, see <a>AttachTypedLink</a> and <a>BatchReadRequest$Operations</a>. */
		AttachTypedLink?: BatchAttachTypedLink;

		/** Detaches a typed link from a specified source and target object inside a <a>BatchRead</a> operation. For more information, see <a>DetachTypedLink</a> and <a>BatchReadRequest$Operations</a>. */
		DetachTypedLink?: BatchDetachTypedLink;

		/** Updates a given typed link’s attributes inside a <a>BatchRead</a> operation. Attributes to be updated must not contribute to the typed link’s identity, as defined by its <code>IdentityAttributeOrder</code>. For more information, see <a>UpdateLinkAttributes</a> and <a>BatchReadRequest$Operations</a>. */
		UpdateLinkAttributes?: BatchUpdateLinkAttributes;
	}

	/** Represents the output of a <code>BatchWrite</code> operation.  */
	export interface BatchWriteOperationFormProperties {
	}
	export function CreateBatchWriteOperationFormGroup() {
		return new FormGroup<BatchWriteOperationFormProperties>({
		});

	}


	/** Represents the output of a <a>CreateObject</a> operation. */
	export interface BatchCreateObject {

		/** Required */
		SchemaFacet: Array<SchemaFacet>;

		/** Required */
		ObjectAttributeList: Array<AttributeKeyAndValue>;

		/** The reference that identifies an object. */
		ParentReference?: ObjectReference;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		LinkName?: string | null;
		BatchReferenceName?: string | null;
	}

	/** Represents the output of a <a>CreateObject</a> operation. */
	export interface BatchCreateObjectFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		LinkName: FormControl<string | null | undefined>,
		BatchReferenceName: FormControl<string | null | undefined>,
	}
	export function CreateBatchCreateObjectFormGroup() {
		return new FormGroup<BatchCreateObjectFormProperties>({
			LinkName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[^\/\[\]\(\):\{\}#@!?\s\\;]+')]),
			BatchReferenceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of an <a>AttachObject</a> operation. */
	export interface BatchAttachObject {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ParentReference: ObjectReference;

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ChildReference: ObjectReference;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		LinkName: string;
	}

	/** Represents the output of an <a>AttachObject</a> operation. */
	export interface BatchAttachObjectFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		LinkName: FormControl<string | null | undefined>,
	}
	export function CreateBatchAttachObjectFormGroup() {
		return new FormGroup<BatchAttachObjectFormProperties>({
			LinkName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[^\/\[\]\(\):\{\}#@!?\s\\;]+')]),
		});

	}


	/** Represents the output of a <a>DetachObject</a> operation. */
	export interface BatchDetachObject {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ParentReference: ObjectReference;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		LinkName: string;
		BatchReferenceName?: string | null;
	}

	/** Represents the output of a <a>DetachObject</a> operation. */
	export interface BatchDetachObjectFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		LinkName: FormControl<string | null | undefined>,
		BatchReferenceName: FormControl<string | null | undefined>,
	}
	export function CreateBatchDetachObjectFormGroup() {
		return new FormGroup<BatchDetachObjectFormProperties>({
			LinkName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[^\/\[\]\(\):\{\}#@!?\s\\;]+')]),
			BatchReferenceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of a <code>BatchUpdate</code> operation.  */
	export interface BatchUpdateObjectAttributes {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;

		/** Required */
		AttributeUpdates: Array<ObjectAttributeUpdate>;
	}

	/** Represents the output of a <code>BatchUpdate</code> operation.  */
	export interface BatchUpdateObjectAttributesFormProperties {
	}
	export function CreateBatchUpdateObjectAttributesFormGroup() {
		return new FormGroup<BatchUpdateObjectAttributesFormProperties>({
		});

	}


	/** Structure that contains attribute update information. */
	export interface ObjectAttributeUpdate {

		/** A unique identifier for an attribute. */
		ObjectAttributeKey?: AttributeKey;

		/** The action to take on the object attribute. */
		ObjectAttributeAction?: ObjectAttributeAction;
	}

	/** Structure that contains attribute update information. */
	export interface ObjectAttributeUpdateFormProperties {
	}
	export function CreateObjectAttributeUpdateFormGroup() {
		return new FormGroup<ObjectAttributeUpdateFormProperties>({
		});

	}


	/** The action to take on the object attribute. */
	export interface ObjectAttributeAction {
		ObjectAttributeActionType?: ObjectAttributeActionObjectAttributeActionType | null;

		/** Represents the data for a typed attribute. You can set one, and only one, of the elements. Each attribute in an item is a name-value pair. Attributes have a single value. */
		ObjectAttributeUpdateValue?: TypedAttributeValue;
	}

	/** The action to take on the object attribute. */
	export interface ObjectAttributeActionFormProperties {
		ObjectAttributeActionType: FormControl<ObjectAttributeActionObjectAttributeActionType | null | undefined>,
	}
	export function CreateObjectAttributeActionFormGroup() {
		return new FormGroup<ObjectAttributeActionFormProperties>({
			ObjectAttributeActionType: new FormControl<ObjectAttributeActionObjectAttributeActionType | null | undefined>(undefined),
		});

	}

	export enum ObjectAttributeActionObjectAttributeActionType { CREATE_OR_UPDATE = 0, DELETE = 1 }


	/** Represents the output of a <a>DeleteObject</a> operation. */
	export interface BatchDeleteObject {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
	}

	/** Represents the output of a <a>DeleteObject</a> operation. */
	export interface BatchDeleteObjectFormProperties {
	}
	export function CreateBatchDeleteObjectFormGroup() {
		return new FormGroup<BatchDeleteObjectFormProperties>({
		});

	}


	/** Represents the output of a batch add facet to object operation. */
	export interface BatchAddFacetToObject {

		/**
		 * A facet.
		 * Required
		 */
		SchemaFacet: SchemaFacet;

		/** Required */
		ObjectAttributeList: Array<AttributeKeyAndValue>;

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
	}

	/** Represents the output of a batch add facet to object operation. */
	export interface BatchAddFacetToObjectFormProperties {
	}
	export function CreateBatchAddFacetToObjectFormGroup() {
		return new FormGroup<BatchAddFacetToObjectFormProperties>({
		});

	}


	/** A batch operation to remove a facet from an object. */
	export interface BatchRemoveFacetFromObject {

		/**
		 * A facet.
		 * Required
		 */
		SchemaFacet: SchemaFacet;

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
	}

	/** A batch operation to remove a facet from an object. */
	export interface BatchRemoveFacetFromObjectFormProperties {
	}
	export function CreateBatchRemoveFacetFromObjectFormGroup() {
		return new FormGroup<BatchRemoveFacetFromObjectFormProperties>({
		});

	}


	/** Attaches a policy object to a regular object inside a <a>BatchRead</a> operation. For more information, see <a>AttachPolicy</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchAttachPolicy {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		PolicyReference: ObjectReference;

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
	}

	/** Attaches a policy object to a regular object inside a <a>BatchRead</a> operation. For more information, see <a>AttachPolicy</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchAttachPolicyFormProperties {
	}
	export function CreateBatchAttachPolicyFormGroup() {
		return new FormGroup<BatchAttachPolicyFormProperties>({
		});

	}


	/** Detaches the specified policy from the specified directory inside a <a>BatchWrite</a> operation. For more information, see <a>DetachPolicy</a> and <a>BatchWriteRequest$Operations</a>. */
	export interface BatchDetachPolicy {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		PolicyReference: ObjectReference;

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
	}

	/** Detaches the specified policy from the specified directory inside a <a>BatchWrite</a> operation. For more information, see <a>DetachPolicy</a> and <a>BatchWriteRequest$Operations</a>. */
	export interface BatchDetachPolicyFormProperties {
	}
	export function CreateBatchDetachPolicyFormGroup() {
		return new FormGroup<BatchDetachPolicyFormProperties>({
		});

	}


	/** Creates an index object inside of a <a>BatchRead</a> operation. For more information, see <a>CreateIndex</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchCreateIndex {

		/** Required */
		OrderedIndexedAttributeList: Array<AttributeKey>;

		/** Required */
		IsUnique: boolean;

		/** The reference that identifies an object. */
		ParentReference?: ObjectReference;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		LinkName?: string | null;
		BatchReferenceName?: string | null;
	}

	/** Creates an index object inside of a <a>BatchRead</a> operation. For more information, see <a>CreateIndex</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchCreateIndexFormProperties {

		/** Required */
		IsUnique: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		LinkName: FormControl<string | null | undefined>,
		BatchReferenceName: FormControl<string | null | undefined>,
	}
	export function CreateBatchCreateIndexFormGroup() {
		return new FormGroup<BatchCreateIndexFormProperties>({
			IsUnique: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			LinkName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[^\/\[\]\(\):\{\}#@!?\s\\;]+')]),
			BatchReferenceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Attaches the specified object to the specified index inside a <a>BatchRead</a> operation. For more information, see <a>AttachToIndex</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchAttachToIndex {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		IndexReference: ObjectReference;

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		TargetReference: ObjectReference;
	}

	/** Attaches the specified object to the specified index inside a <a>BatchRead</a> operation. For more information, see <a>AttachToIndex</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchAttachToIndexFormProperties {
	}
	export function CreateBatchAttachToIndexFormGroup() {
		return new FormGroup<BatchAttachToIndexFormProperties>({
		});

	}


	/** Detaches the specified object from the specified index inside a <a>BatchRead</a> operation. For more information, see <a>DetachFromIndex</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchDetachFromIndex {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		IndexReference: ObjectReference;

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		TargetReference: ObjectReference;
	}

	/** Detaches the specified object from the specified index inside a <a>BatchRead</a> operation. For more information, see <a>DetachFromIndex</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchDetachFromIndexFormProperties {
	}
	export function CreateBatchDetachFromIndexFormGroup() {
		return new FormGroup<BatchDetachFromIndexFormProperties>({
		});

	}


	/** Attaches a typed link to a specified source and target object inside a <a>BatchRead</a> operation. For more information, see <a>AttachTypedLink</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchAttachTypedLink {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		SourceObjectReference: ObjectReference;

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		TargetObjectReference: ObjectReference;

		/**
		 * Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link.
		 * Required
		 */
		TypedLinkFacet: TypedLinkSchemaAndFacetName;

		/** Required */
		Attributes: Array<AttributeNameAndValue>;
	}

	/** Attaches a typed link to a specified source and target object inside a <a>BatchRead</a> operation. For more information, see <a>AttachTypedLink</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchAttachTypedLinkFormProperties {
	}
	export function CreateBatchAttachTypedLinkFormGroup() {
		return new FormGroup<BatchAttachTypedLinkFormProperties>({
		});

	}


	/** Detaches a typed link from a specified source and target object inside a <a>BatchRead</a> operation. For more information, see <a>DetachTypedLink</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchDetachTypedLink {

		/**
		 * Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.
		 * Required
		 */
		TypedLinkSpecifier: TypedLinkSpecifier;
	}

	/** Detaches a typed link from a specified source and target object inside a <a>BatchRead</a> operation. For more information, see <a>DetachTypedLink</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchDetachTypedLinkFormProperties {
	}
	export function CreateBatchDetachTypedLinkFormGroup() {
		return new FormGroup<BatchDetachTypedLinkFormProperties>({
		});

	}


	/** Updates a given typed link’s attributes inside a <a>BatchRead</a> operation. Attributes to be updated must not contribute to the typed link’s identity, as defined by its <code>IdentityAttributeOrder</code>. For more information, see <a>UpdateLinkAttributes</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchUpdateLinkAttributes {

		/**
		 * Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.
		 * Required
		 */
		TypedLinkSpecifier: TypedLinkSpecifier;

		/** Required */
		AttributeUpdates: Array<LinkAttributeUpdate>;
	}

	/** Updates a given typed link’s attributes inside a <a>BatchRead</a> operation. Attributes to be updated must not contribute to the typed link’s identity, as defined by its <code>IdentityAttributeOrder</code>. For more information, see <a>UpdateLinkAttributes</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchUpdateLinkAttributesFormProperties {
	}
	export function CreateBatchUpdateLinkAttributesFormGroup() {
		return new FormGroup<BatchUpdateLinkAttributesFormProperties>({
		});

	}


	/** Structure that contains attribute update information. */
	export interface LinkAttributeUpdate {

		/** A unique identifier for an attribute. */
		AttributeKey?: AttributeKey;

		/** The action to take on a typed link attribute value. Updates are only supported for attributes which don’t contribute to link identity. */
		AttributeAction?: LinkAttributeAction;
	}

	/** Structure that contains attribute update information. */
	export interface LinkAttributeUpdateFormProperties {
	}
	export function CreateLinkAttributeUpdateFormGroup() {
		return new FormGroup<LinkAttributeUpdateFormProperties>({
		});

	}


	/** The action to take on a typed link attribute value. Updates are only supported for attributes which don’t contribute to link identity. */
	export interface LinkAttributeAction {
		AttributeActionType?: ObjectAttributeActionObjectAttributeActionType | null;

		/** Represents the data for a typed attribute. You can set one, and only one, of the elements. Each attribute in an item is a name-value pair. Attributes have a single value. */
		AttributeUpdateValue?: TypedAttributeValue;
	}

	/** The action to take on a typed link attribute value. Updates are only supported for attributes which don’t contribute to link identity. */
	export interface LinkAttributeActionFormProperties {
		AttributeActionType: FormControl<ObjectAttributeActionObjectAttributeActionType | null | undefined>,
	}
	export function CreateLinkAttributeActionFormGroup() {
		return new FormGroup<LinkAttributeActionFormProperties>({
			AttributeActionType: new FormControl<ObjectAttributeActionObjectAttributeActionType | null | undefined>(undefined),
		});

	}

	export interface BatchWriteException {
	}
	export interface BatchWriteExceptionFormProperties {
	}
	export function CreateBatchWriteExceptionFormGroup() {
		return new FormGroup<BatchWriteExceptionFormProperties>({
		});

	}

	export interface CreateDirectoryResponse {

		/** Required */
		DirectoryArn: string;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: string;

		/** Required */
		ObjectIdentifier: string;

		/** Required */
		AppliedSchemaArn: string;
	}
	export interface CreateDirectoryResponseFormProperties {

		/** Required */
		DirectoryArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Required */
		ObjectIdentifier: FormControl<string | null | undefined>,

		/** Required */
		AppliedSchemaArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDirectoryResponseFormGroup() {
		return new FormGroup<CreateDirectoryResponseFormProperties>({
			DirectoryArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9._-]*$')]),
			ObjectIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AppliedSchemaArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DirectoryAlreadyExistsException {
	}
	export interface DirectoryAlreadyExistsExceptionFormProperties {
	}
	export function CreateDirectoryAlreadyExistsExceptionFormGroup() {
		return new FormGroup<DirectoryAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface CreateFacetResponse {
	}
	export interface CreateFacetResponseFormProperties {
	}
	export function CreateCreateFacetResponseFormGroup() {
		return new FormGroup<CreateFacetResponseFormProperties>({
		});

	}


	/** An attribute that is associated with the <a>Facet</a>. */
	export interface FacetAttribute {

		/**
		 * Required
		 * Max length: 230
		 * Min length: 1
		 */
		Name: string;

		/** A facet attribute definition. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information. */
		AttributeDefinition?: FacetAttributeDefinition;

		/** The facet attribute reference that specifies the attribute definition that contains the attribute facet name and attribute name. */
		AttributeReference?: FacetAttributeReference;
		RequiredBehavior?: FacetAttributeRequiredBehavior | null;
	}

	/** An attribute that is associated with the <a>Facet</a>. */
	export interface FacetAttributeFormProperties {

		/**
		 * Required
		 * Max length: 230
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		RequiredBehavior: FormControl<FacetAttributeRequiredBehavior | null | undefined>,
	}
	export function CreateFacetAttributeFormGroup() {
		return new FormGroup<FacetAttributeFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(230), Validators.pattern('^[a-zA-Z0-9._:-]*$')]),
			RequiredBehavior: new FormControl<FacetAttributeRequiredBehavior | null | undefined>(undefined),
		});

	}


	/** A facet attribute definition. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information. */
	export interface FacetAttributeDefinition {

		/** Required */
		Type: FacetAttributeDefinitionType;

		/** Represents the data for a typed attribute. You can set one, and only one, of the elements. Each attribute in an item is a name-value pair. Attributes have a single value. */
		DefaultValue?: TypedAttributeValue;
		IsImmutable?: boolean | null;
		Rules?: RuleMap;
	}

	/** A facet attribute definition. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information. */
	export interface FacetAttributeDefinitionFormProperties {

		/** Required */
		Type: FormControl<FacetAttributeDefinitionType | null | undefined>,
		IsImmutable: FormControl<boolean | null | undefined>,
	}
	export function CreateFacetAttributeDefinitionFormGroup() {
		return new FormGroup<FacetAttributeDefinitionFormProperties>({
			Type: new FormControl<FacetAttributeDefinitionType | null | undefined>(undefined, [Validators.required]),
			IsImmutable: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum FacetAttributeDefinitionType { STRING = 0, BINARY = 1, BOOLEAN = 2, NUMBER = 3, DATETIME = 4, VARIANT = 5 }

	export interface RuleMap {
	}
	export interface RuleMapFormProperties {
	}
	export function CreateRuleMapFormGroup() {
		return new FormGroup<RuleMapFormProperties>({
		});

	}


	/** The facet attribute reference that specifies the attribute definition that contains the attribute facet name and attribute name. */
	export interface FacetAttributeReference {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		TargetFacetName: string;

		/**
		 * Required
		 * Max length: 230
		 * Min length: 1
		 */
		TargetAttributeName: string;
	}

	/** The facet attribute reference that specifies the attribute definition that contains the attribute facet name and attribute name. */
	export interface FacetAttributeReferenceFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		TargetFacetName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 230
		 * Min length: 1
		 */
		TargetAttributeName: FormControl<string | null | undefined>,
	}
	export function CreateFacetAttributeReferenceFormGroup() {
		return new FormGroup<FacetAttributeReferenceFormProperties>({
			TargetFacetName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9._-]*$')]),
			TargetAttributeName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(230), Validators.pattern('^[a-zA-Z0-9._:-]*$')]),
		});

	}

	export enum FacetAttributeRequiredBehavior { REQUIRED_ALWAYS = 0, NOT_REQUIRED = 1 }

	export interface FacetAlreadyExistsException {
	}
	export interface FacetAlreadyExistsExceptionFormProperties {
	}
	export function CreateFacetAlreadyExistsExceptionFormGroup() {
		return new FormGroup<FacetAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface InvalidRuleException {
	}
	export interface InvalidRuleExceptionFormProperties {
	}
	export function CreateInvalidRuleExceptionFormGroup() {
		return new FormGroup<InvalidRuleExceptionFormProperties>({
		});

	}

	export interface CreateIndexResponse {
		ObjectIdentifier?: string | null;
	}
	export interface CreateIndexResponseFormProperties {
		ObjectIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateCreateIndexResponseFormGroup() {
		return new FormGroup<CreateIndexResponseFormProperties>({
			ObjectIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UnsupportedIndexTypeException {
	}
	export interface UnsupportedIndexTypeExceptionFormProperties {
	}
	export function CreateUnsupportedIndexTypeExceptionFormGroup() {
		return new FormGroup<UnsupportedIndexTypeExceptionFormProperties>({
		});

	}

	export interface CreateObjectResponse {
		ObjectIdentifier?: string | null;
	}
	export interface CreateObjectResponseFormProperties {
		ObjectIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateCreateObjectResponseFormGroup() {
		return new FormGroup<CreateObjectResponseFormProperties>({
			ObjectIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSchemaResponse {
		SchemaArn?: string | null;
	}
	export interface CreateSchemaResponseFormProperties {
		SchemaArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateSchemaResponseFormGroup() {
		return new FormGroup<CreateSchemaResponseFormProperties>({
			SchemaArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateTypedLinkFacetResponse {
	}
	export interface CreateTypedLinkFacetResponseFormProperties {
	}
	export function CreateCreateTypedLinkFacetResponseFormGroup() {
		return new FormGroup<CreateTypedLinkFacetResponseFormProperties>({
		});

	}


	/** A typed link attribute definition. */
	export interface TypedLinkAttributeDefinition {

		/**
		 * Required
		 * Max length: 230
		 * Min length: 1
		 */
		Name: string;

		/** Required */
		Type: FacetAttributeDefinitionType;

		/** Represents the data for a typed attribute. You can set one, and only one, of the elements. Each attribute in an item is a name-value pair. Attributes have a single value. */
		DefaultValue?: TypedAttributeValue;
		IsImmutable?: boolean | null;
		Rules?: RuleMap;

		/** Required */
		RequiredBehavior: FacetAttributeRequiredBehavior;
	}

	/** A typed link attribute definition. */
	export interface TypedLinkAttributeDefinitionFormProperties {

		/**
		 * Required
		 * Max length: 230
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<FacetAttributeDefinitionType | null | undefined>,
		IsImmutable: FormControl<boolean | null | undefined>,

		/** Required */
		RequiredBehavior: FormControl<FacetAttributeRequiredBehavior | null | undefined>,
	}
	export function CreateTypedLinkAttributeDefinitionFormGroup() {
		return new FormGroup<TypedLinkAttributeDefinitionFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(230), Validators.pattern('^[a-zA-Z0-9._:-]*$')]),
			Type: new FormControl<FacetAttributeDefinitionType | null | undefined>(undefined, [Validators.required]),
			IsImmutable: new FormControl<boolean | null | undefined>(undefined),
			RequiredBehavior: new FormControl<FacetAttributeRequiredBehavior | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteDirectoryResponse {

		/** Required */
		DirectoryArn: string;
	}
	export interface DeleteDirectoryResponseFormProperties {

		/** Required */
		DirectoryArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDirectoryResponseFormGroup() {
		return new FormGroup<DeleteDirectoryResponseFormProperties>({
			DirectoryArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DirectoryNotDisabledException {
	}
	export interface DirectoryNotDisabledExceptionFormProperties {
	}
	export function CreateDirectoryNotDisabledExceptionFormGroup() {
		return new FormGroup<DirectoryNotDisabledExceptionFormProperties>({
		});

	}

	export interface DirectoryDeletedException {
	}
	export interface DirectoryDeletedExceptionFormProperties {
	}
	export function CreateDirectoryDeletedExceptionFormGroup() {
		return new FormGroup<DirectoryDeletedExceptionFormProperties>({
		});

	}

	export interface DeleteFacetResponse {
	}
	export interface DeleteFacetResponseFormProperties {
	}
	export function CreateDeleteFacetResponseFormGroup() {
		return new FormGroup<DeleteFacetResponseFormProperties>({
		});

	}

	export interface FacetNotFoundException {
	}
	export interface FacetNotFoundExceptionFormProperties {
	}
	export function CreateFacetNotFoundExceptionFormGroup() {
		return new FormGroup<FacetNotFoundExceptionFormProperties>({
		});

	}

	export interface FacetInUseException {
	}
	export interface FacetInUseExceptionFormProperties {
	}
	export function CreateFacetInUseExceptionFormGroup() {
		return new FormGroup<FacetInUseExceptionFormProperties>({
		});

	}

	export interface DeleteObjectResponse {
	}
	export interface DeleteObjectResponseFormProperties {
	}
	export function CreateDeleteObjectResponseFormGroup() {
		return new FormGroup<DeleteObjectResponseFormProperties>({
		});

	}

	export interface ObjectNotDetachedException {
	}
	export interface ObjectNotDetachedExceptionFormProperties {
	}
	export function CreateObjectNotDetachedExceptionFormGroup() {
		return new FormGroup<ObjectNotDetachedExceptionFormProperties>({
		});

	}

	export interface DeleteSchemaResponse {
		SchemaArn?: string | null;
	}
	export interface DeleteSchemaResponseFormProperties {
		SchemaArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSchemaResponseFormGroup() {
		return new FormGroup<DeleteSchemaResponseFormProperties>({
			SchemaArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StillContainsLinksException {
	}
	export interface StillContainsLinksExceptionFormProperties {
	}
	export function CreateStillContainsLinksExceptionFormGroup() {
		return new FormGroup<StillContainsLinksExceptionFormProperties>({
		});

	}

	export interface DeleteTypedLinkFacetResponse {
	}
	export interface DeleteTypedLinkFacetResponseFormProperties {
	}
	export function CreateDeleteTypedLinkFacetResponseFormGroup() {
		return new FormGroup<DeleteTypedLinkFacetResponseFormProperties>({
		});

	}

	export interface DetachFromIndexResponse {
		DetachedObjectIdentifier?: string | null;
	}
	export interface DetachFromIndexResponseFormProperties {
		DetachedObjectIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateDetachFromIndexResponseFormGroup() {
		return new FormGroup<DetachFromIndexResponseFormProperties>({
			DetachedObjectIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ObjectAlreadyDetachedException {
	}
	export interface ObjectAlreadyDetachedExceptionFormProperties {
	}
	export function CreateObjectAlreadyDetachedExceptionFormGroup() {
		return new FormGroup<ObjectAlreadyDetachedExceptionFormProperties>({
		});

	}

	export interface DetachObjectResponse {
		DetachedObjectIdentifier?: string | null;
	}
	export interface DetachObjectResponseFormProperties {
		DetachedObjectIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateDetachObjectResponseFormGroup() {
		return new FormGroup<DetachObjectResponseFormProperties>({
			DetachedObjectIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NotNodeException {
	}
	export interface NotNodeExceptionFormProperties {
	}
	export function CreateNotNodeExceptionFormGroup() {
		return new FormGroup<NotNodeExceptionFormProperties>({
		});

	}

	export interface DetachPolicyResponse {
	}
	export interface DetachPolicyResponseFormProperties {
	}
	export function CreateDetachPolicyResponseFormGroup() {
		return new FormGroup<DetachPolicyResponseFormProperties>({
		});

	}

	export interface DisableDirectoryResponse {

		/** Required */
		DirectoryArn: string;
	}
	export interface DisableDirectoryResponseFormProperties {

		/** Required */
		DirectoryArn: FormControl<string | null | undefined>,
	}
	export function CreateDisableDirectoryResponseFormGroup() {
		return new FormGroup<DisableDirectoryResponseFormProperties>({
			DirectoryArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EnableDirectoryResponse {

		/** Required */
		DirectoryArn: string;
	}
	export interface EnableDirectoryResponseFormProperties {

		/** Required */
		DirectoryArn: FormControl<string | null | undefined>,
	}
	export function CreateEnableDirectoryResponseFormGroup() {
		return new FormGroup<EnableDirectoryResponseFormProperties>({
			DirectoryArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetAppliedSchemaVersionResponse {
		AppliedSchemaArn?: string | null;
	}
	export interface GetAppliedSchemaVersionResponseFormProperties {
		AppliedSchemaArn: FormControl<string | null | undefined>,
	}
	export function CreateGetAppliedSchemaVersionResponseFormGroup() {
		return new FormGroup<GetAppliedSchemaVersionResponseFormProperties>({
			AppliedSchemaArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDirectoryResponse {

		/**
		 * Directory structure that includes the directory name and directory ARN.
		 * Required
		 */
		Directory: Directory;
	}
	export interface GetDirectoryResponseFormProperties {
	}
	export function CreateGetDirectoryResponseFormGroup() {
		return new FormGroup<GetDirectoryResponseFormProperties>({
		});

	}


	/** Directory structure that includes the directory name and directory ARN. */
	export interface Directory {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		Name?: string | null;
		DirectoryArn?: string | null;
		State?: DirectoryState | null;
		CreationDateTime?: Date | null;
	}

	/** Directory structure that includes the directory name and directory ARN. */
	export interface DirectoryFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		DirectoryArn: FormControl<string | null | undefined>,
		State: FormControl<DirectoryState | null | undefined>,
		CreationDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateDirectoryFormGroup() {
		return new FormGroup<DirectoryFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9._-]*$')]),
			DirectoryArn: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<DirectoryState | null | undefined>(undefined),
			CreationDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum DirectoryState { ENABLED = 0, DISABLED = 1, DELETED = 2 }

	export interface GetFacetResponse {

		/** A structure that contains <code>Name</code>, <code>ARN</code>, <code>Attributes</code>, <code> <a>Rule</a>s</code>, and <code>ObjectTypes</code>. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_whatarefacets.html">Facets</a> for more information. */
		Facet?: Facet;
	}
	export interface GetFacetResponseFormProperties {
	}
	export function CreateGetFacetResponseFormGroup() {
		return new FormGroup<GetFacetResponseFormProperties>({
		});

	}


	/** A structure that contains <code>Name</code>, <code>ARN</code>, <code>Attributes</code>, <code> <a>Rule</a>s</code>, and <code>ObjectTypes</code>. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_whatarefacets.html">Facets</a> for more information. */
	export interface Facet {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		Name?: string | null;
		ObjectType?: FacetObjectType | null;
		FacetStyle?: FacetFacetStyle | null;
	}

	/** A structure that contains <code>Name</code>, <code>ARN</code>, <code>Attributes</code>, <code> <a>Rule</a>s</code>, and <code>ObjectTypes</code>. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_whatarefacets.html">Facets</a> for more information. */
	export interface FacetFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		ObjectType: FormControl<FacetObjectType | null | undefined>,
		FacetStyle: FormControl<FacetFacetStyle | null | undefined>,
	}
	export function CreateFacetFormGroup() {
		return new FormGroup<FacetFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9._-]*$')]),
			ObjectType: new FormControl<FacetObjectType | null | undefined>(undefined),
			FacetStyle: new FormControl<FacetFacetStyle | null | undefined>(undefined),
		});

	}

	export enum FacetObjectType { NODE = 0, LEAF_NODE = 1, POLICY = 2, INDEX = 3 }

	export enum FacetFacetStyle { STATIC = 0, DYNAMIC = 1 }

	export interface GetLinkAttributesResponse {
		Attributes?: Array<AttributeKeyAndValue>;
	}
	export interface GetLinkAttributesResponseFormProperties {
	}
	export function CreateGetLinkAttributesResponseFormGroup() {
		return new FormGroup<GetLinkAttributesResponseFormProperties>({
		});

	}

	export interface GetObjectAttributesResponse {
		Attributes?: Array<AttributeKeyAndValue>;
	}
	export interface GetObjectAttributesResponseFormProperties {
	}
	export function CreateGetObjectAttributesResponseFormGroup() {
		return new FormGroup<GetObjectAttributesResponseFormProperties>({
		});

	}

	export interface GetObjectInformationResponse {
		SchemaFacets?: Array<SchemaFacet>;
		ObjectIdentifier?: string | null;
	}
	export interface GetObjectInformationResponseFormProperties {
		ObjectIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateGetObjectInformationResponseFormGroup() {
		return new FormGroup<GetObjectInformationResponseFormProperties>({
			ObjectIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSchemaAsJsonResponse {

		/**
		 * Max length: 32
		 * Min length: 1
		 */
		Name?: string | null;
		Document?: string | null;
	}
	export interface GetSchemaAsJsonResponseFormProperties {

		/**
		 * Max length: 32
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		Document: FormControl<string | null | undefined>,
	}
	export function CreateGetSchemaAsJsonResponseFormGroup() {
		return new FormGroup<GetSchemaAsJsonResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(32), Validators.pattern('^[a-zA-Z0-9._-]*$')]),
			Document: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTypedLinkFacetInformationResponse {
		IdentityAttributeOrder?: Array<string>;
	}
	export interface GetTypedLinkFacetInformationResponseFormProperties {
	}
	export function CreateGetTypedLinkFacetInformationResponseFormGroup() {
		return new FormGroup<GetTypedLinkFacetInformationResponseFormProperties>({
		});

	}

	export interface InvalidNextTokenException {
	}
	export interface InvalidNextTokenExceptionFormProperties {
	}
	export function CreateInvalidNextTokenExceptionFormGroup() {
		return new FormGroup<InvalidNextTokenExceptionFormProperties>({
		});

	}

	export interface ListAppliedSchemaArnsResponse {
		SchemaArns?: Array<string>;
		NextToken?: string | null;
	}
	export interface ListAppliedSchemaArnsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAppliedSchemaArnsResponseFormGroup() {
		return new FormGroup<ListAppliedSchemaArnsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAttachedIndicesResponse {
		IndexAttachments?: Array<IndexAttachment>;
		NextToken?: string | null;
	}
	export interface ListAttachedIndicesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAttachedIndicesResponseFormGroup() {
		return new FormGroup<ListAttachedIndicesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDevelopmentSchemaArnsResponse {
		SchemaArns?: Array<string>;
		NextToken?: string | null;
	}
	export interface ListDevelopmentSchemaArnsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDevelopmentSchemaArnsResponseFormGroup() {
		return new FormGroup<ListDevelopmentSchemaArnsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDirectoriesResponse {

		/** Required */
		Directories: Array<Directory>;
		NextToken?: string | null;
	}
	export interface ListDirectoriesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDirectoriesResponseFormGroup() {
		return new FormGroup<ListDirectoriesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFacetAttributesResponse {
		Attributes?: Array<FacetAttribute>;
		NextToken?: string | null;
	}
	export interface ListFacetAttributesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFacetAttributesResponseFormGroup() {
		return new FormGroup<ListFacetAttributesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFacetNamesResponse {
		FacetNames?: Array<string>;
		NextToken?: string | null;
	}
	export interface ListFacetNamesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFacetNamesResponseFormGroup() {
		return new FormGroup<ListFacetNamesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListIncomingTypedLinksResponse {
		LinkSpecifiers?: Array<TypedLinkSpecifier>;
		NextToken?: string | null;
	}
	export interface ListIncomingTypedLinksResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIncomingTypedLinksResponseFormGroup() {
		return new FormGroup<ListIncomingTypedLinksResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListIndexResponse {
		IndexAttachments?: Array<IndexAttachment>;
		NextToken?: string | null;
	}
	export interface ListIndexResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIndexResponseFormGroup() {
		return new FormGroup<ListIndexResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListManagedSchemaArnsResponse {
		SchemaArns?: Array<string>;
		NextToken?: string | null;
	}
	export interface ListManagedSchemaArnsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListManagedSchemaArnsResponseFormGroup() {
		return new FormGroup<ListManagedSchemaArnsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListObjectAttributesResponse {
		Attributes?: Array<AttributeKeyAndValue>;
		NextToken?: string | null;
	}
	export interface ListObjectAttributesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListObjectAttributesResponseFormGroup() {
		return new FormGroup<ListObjectAttributesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListObjectChildrenResponse {
		Children?: LinkNameToObjectIdentifierMap;
		NextToken?: string | null;
	}
	export interface ListObjectChildrenResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListObjectChildrenResponseFormGroup() {
		return new FormGroup<ListObjectChildrenResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListObjectParentPathsResponse {
		PathToObjectIdentifiersList?: Array<PathToObjectIdentifiers>;
		NextToken?: string | null;
	}
	export interface ListObjectParentPathsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListObjectParentPathsResponseFormGroup() {
		return new FormGroup<ListObjectParentPathsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListObjectParentsResponse {
		Parents?: ObjectIdentifierToLinkNameMap;
		NextToken?: string | null;
		ParentLinks?: Array<ObjectIdentifierAndLinkNameTuple>;
	}
	export interface ListObjectParentsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListObjectParentsResponseFormGroup() {
		return new FormGroup<ListObjectParentsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ObjectIdentifierToLinkNameMap {
	}
	export interface ObjectIdentifierToLinkNameMapFormProperties {
	}
	export function CreateObjectIdentifierToLinkNameMapFormGroup() {
		return new FormGroup<ObjectIdentifierToLinkNameMapFormProperties>({
		});

	}

	export interface CannotListParentOfRootException {
	}
	export interface CannotListParentOfRootExceptionFormProperties {
	}
	export function CreateCannotListParentOfRootExceptionFormGroup() {
		return new FormGroup<CannotListParentOfRootExceptionFormProperties>({
		});

	}

	export interface ListObjectPoliciesResponse {
		AttachedPolicyIds?: Array<string>;
		NextToken?: string | null;
	}
	export interface ListObjectPoliciesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListObjectPoliciesResponseFormGroup() {
		return new FormGroup<ListObjectPoliciesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListOutgoingTypedLinksResponse {
		TypedLinkSpecifiers?: Array<TypedLinkSpecifier>;
		NextToken?: string | null;
	}
	export interface ListOutgoingTypedLinksResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListOutgoingTypedLinksResponseFormGroup() {
		return new FormGroup<ListOutgoingTypedLinksResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPolicyAttachmentsResponse {
		ObjectIdentifiers?: Array<string>;
		NextToken?: string | null;
	}
	export interface ListPolicyAttachmentsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPolicyAttachmentsResponseFormGroup() {
		return new FormGroup<ListPolicyAttachmentsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPublishedSchemaArnsResponse {
		SchemaArns?: Array<string>;
		NextToken?: string | null;
	}
	export interface ListPublishedSchemaArnsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPublishedSchemaArnsResponseFormGroup() {
		return new FormGroup<ListPublishedSchemaArnsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
		NextToken?: string | null;
	}
	export interface ListTagsForResourceResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The tag structure that contains a tag key and value. */
	export interface Tag {
		Key?: string | null;
		Value?: string | null;
	}

	/** The tag structure that contains a tag key and value. */
	export interface TagFormProperties {
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidTaggingRequestException {
	}
	export interface InvalidTaggingRequestExceptionFormProperties {
	}
	export function CreateInvalidTaggingRequestExceptionFormGroup() {
		return new FormGroup<InvalidTaggingRequestExceptionFormProperties>({
		});

	}

	export interface ListTypedLinkFacetAttributesResponse {
		Attributes?: Array<TypedLinkAttributeDefinition>;
		NextToken?: string | null;
	}
	export interface ListTypedLinkFacetAttributesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTypedLinkFacetAttributesResponseFormGroup() {
		return new FormGroup<ListTypedLinkFacetAttributesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTypedLinkFacetNamesResponse {
		FacetNames?: Array<string>;
		NextToken?: string | null;
	}
	export interface ListTypedLinkFacetNamesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTypedLinkFacetNamesResponseFormGroup() {
		return new FormGroup<ListTypedLinkFacetNamesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LookupPolicyResponse {
		PolicyToPathList?: Array<PolicyToPath>;
		NextToken?: string | null;
	}
	export interface LookupPolicyResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateLookupPolicyResponseFormGroup() {
		return new FormGroup<LookupPolicyResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PublishSchemaResponse {
		PublishedSchemaArn?: string | null;
	}
	export interface PublishSchemaResponseFormProperties {
		PublishedSchemaArn: FormControl<string | null | undefined>,
	}
	export function CreatePublishSchemaResponseFormGroup() {
		return new FormGroup<PublishSchemaResponseFormProperties>({
			PublishedSchemaArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SchemaAlreadyPublishedException {
	}
	export interface SchemaAlreadyPublishedExceptionFormProperties {
	}
	export function CreateSchemaAlreadyPublishedExceptionFormGroup() {
		return new FormGroup<SchemaAlreadyPublishedExceptionFormProperties>({
		});

	}

	export interface PutSchemaFromJsonResponse {
		Arn?: string | null;
	}
	export interface PutSchemaFromJsonResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
	}
	export function CreatePutSchemaFromJsonResponseFormGroup() {
		return new FormGroup<PutSchemaFromJsonResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidSchemaDocException {
	}
	export interface InvalidSchemaDocExceptionFormProperties {
	}
	export function CreateInvalidSchemaDocExceptionFormGroup() {
		return new FormGroup<InvalidSchemaDocExceptionFormProperties>({
		});

	}

	export interface RemoveFacetFromObjectResponse {
	}
	export interface RemoveFacetFromObjectResponseFormProperties {
	}
	export function CreateRemoveFacetFromObjectResponseFormGroup() {
		return new FormGroup<RemoveFacetFromObjectResponseFormProperties>({
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

	export interface UpdateFacetResponse {
	}
	export interface UpdateFacetResponseFormProperties {
	}
	export function CreateUpdateFacetResponseFormGroup() {
		return new FormGroup<UpdateFacetResponseFormProperties>({
		});

	}


	/** A structure that contains information used to update an attribute. */
	export interface FacetAttributeUpdate {

		/** An attribute that is associated with the <a>Facet</a>. */
		Attribute?: FacetAttribute;
		Action?: ObjectAttributeActionObjectAttributeActionType | null;
	}

	/** A structure that contains information used to update an attribute. */
	export interface FacetAttributeUpdateFormProperties {
		Action: FormControl<ObjectAttributeActionObjectAttributeActionType | null | undefined>,
	}
	export function CreateFacetAttributeUpdateFormGroup() {
		return new FormGroup<FacetAttributeUpdateFormProperties>({
			Action: new FormControl<ObjectAttributeActionObjectAttributeActionType | null | undefined>(undefined),
		});

	}

	export interface InvalidFacetUpdateException {
	}
	export interface InvalidFacetUpdateExceptionFormProperties {
	}
	export function CreateInvalidFacetUpdateExceptionFormGroup() {
		return new FormGroup<InvalidFacetUpdateExceptionFormProperties>({
		});

	}

	export interface UpdateLinkAttributesResponse {
	}
	export interface UpdateLinkAttributesResponseFormProperties {
	}
	export function CreateUpdateLinkAttributesResponseFormGroup() {
		return new FormGroup<UpdateLinkAttributesResponseFormProperties>({
		});

	}

	export interface UpdateObjectAttributesResponse {
		ObjectIdentifier?: string | null;
	}
	export interface UpdateObjectAttributesResponseFormProperties {
		ObjectIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateUpdateObjectAttributesResponseFormGroup() {
		return new FormGroup<UpdateObjectAttributesResponseFormProperties>({
			ObjectIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSchemaResponse {
		SchemaArn?: string | null;
	}
	export interface UpdateSchemaResponseFormProperties {
		SchemaArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSchemaResponseFormGroup() {
		return new FormGroup<UpdateSchemaResponseFormProperties>({
			SchemaArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateTypedLinkFacetResponse {
	}
	export interface UpdateTypedLinkFacetResponseFormProperties {
	}
	export function CreateUpdateTypedLinkFacetResponseFormGroup() {
		return new FormGroup<UpdateTypedLinkFacetResponseFormProperties>({
		});

	}


	/** A typed link facet attribute update. */
	export interface TypedLinkFacetAttributeUpdate {

		/**
		 * A typed link attribute definition.
		 * Required
		 */
		Attribute: TypedLinkAttributeDefinition;

		/** Required */
		Action: ObjectAttributeActionObjectAttributeActionType;
	}

	/** A typed link facet attribute update. */
	export interface TypedLinkFacetAttributeUpdateFormProperties {

		/** Required */
		Action: FormControl<ObjectAttributeActionObjectAttributeActionType | null | undefined>,
	}
	export function CreateTypedLinkFacetAttributeUpdateFormGroup() {
		return new FormGroup<TypedLinkFacetAttributeUpdateFormProperties>({
			Action: new FormControl<ObjectAttributeActionObjectAttributeActionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpgradeAppliedSchemaResponse {
		UpgradedSchemaArn?: string | null;
		DirectoryArn?: string | null;
	}
	export interface UpgradeAppliedSchemaResponseFormProperties {
		UpgradedSchemaArn: FormControl<string | null | undefined>,
		DirectoryArn: FormControl<string | null | undefined>,
	}
	export function CreateUpgradeAppliedSchemaResponseFormGroup() {
		return new FormGroup<UpgradeAppliedSchemaResponseFormProperties>({
			UpgradedSchemaArn: new FormControl<string | null | undefined>(undefined),
			DirectoryArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IncompatibleSchemaException {
	}
	export interface IncompatibleSchemaExceptionFormProperties {
	}
	export function CreateIncompatibleSchemaExceptionFormGroup() {
		return new FormGroup<IncompatibleSchemaExceptionFormProperties>({
		});

	}

	export interface UpgradePublishedSchemaResponse {
		UpgradedSchemaArn?: string | null;
	}
	export interface UpgradePublishedSchemaResponseFormProperties {
		UpgradedSchemaArn: FormControl<string | null | undefined>,
	}
	export function CreateUpgradePublishedSchemaResponseFormGroup() {
		return new FormGroup<UpgradePublishedSchemaResponseFormProperties>({
			UpgradedSchemaArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddFacetToObjectRequest {

		/**
		 * A facet.
		 * Required
		 */
		SchemaFacet: SchemaFacet;
		ObjectAttributeList?: Array<AttributeKeyAndValue>;

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
	}
	export interface AddFacetToObjectRequestFormProperties {
	}
	export function CreateAddFacetToObjectRequestFormGroup() {
		return new FormGroup<AddFacetToObjectRequestFormProperties>({
		});

	}

	export interface ApplySchemaRequest {

		/** Required */
		PublishedSchemaArn: string;
	}
	export interface ApplySchemaRequestFormProperties {

		/** Required */
		PublishedSchemaArn: FormControl<string | null | undefined>,
	}
	export function CreateApplySchemaRequestFormGroup() {
		return new FormGroup<ApplySchemaRequestFormProperties>({
			PublishedSchemaArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AttachObjectRequest {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ParentReference: ObjectReference;

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ChildReference: ObjectReference;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		LinkName: string;
	}
	export interface AttachObjectRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		LinkName: FormControl<string | null | undefined>,
	}
	export function CreateAttachObjectRequestFormGroup() {
		return new FormGroup<AttachObjectRequestFormProperties>({
			LinkName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[^\/\[\]\(\):\{\}#@!?\s\\;]+')]),
		});

	}

	export interface AttachPolicyRequest {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		PolicyReference: ObjectReference;

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
	}
	export interface AttachPolicyRequestFormProperties {
	}
	export function CreateAttachPolicyRequestFormGroup() {
		return new FormGroup<AttachPolicyRequestFormProperties>({
		});

	}

	export interface AttachToIndexRequest {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		IndexReference: ObjectReference;

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		TargetReference: ObjectReference;
	}
	export interface AttachToIndexRequestFormProperties {
	}
	export function CreateAttachToIndexRequestFormGroup() {
		return new FormGroup<AttachToIndexRequestFormProperties>({
		});

	}

	export interface AttachTypedLinkRequest {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		SourceObjectReference: ObjectReference;

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		TargetObjectReference: ObjectReference;

		/**
		 * Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link.
		 * Required
		 */
		TypedLinkFacet: TypedLinkSchemaAndFacetName;

		/** Required */
		Attributes: Array<AttributeNameAndValue>;
	}
	export interface AttachTypedLinkRequestFormProperties {
	}
	export function CreateAttachTypedLinkRequestFormGroup() {
		return new FormGroup<AttachTypedLinkRequestFormProperties>({
		});

	}

	export enum ConsistencyLevel { SERIALIZABLE = 0, EVENTUAL = 1 }

	export interface BatchReadRequest {

		/** Required */
		Operations: Array<BatchReadOperation>;
	}
	export interface BatchReadRequestFormProperties {
	}
	export function CreateBatchReadRequestFormGroup() {
		return new FormGroup<BatchReadRequestFormProperties>({
		});

	}

	export interface BatchWriteRequest {

		/** Required */
		Operations: Array<BatchWriteOperation>;
	}
	export interface BatchWriteRequestFormProperties {
	}
	export function CreateBatchWriteRequestFormGroup() {
		return new FormGroup<BatchWriteRequestFormProperties>({
		});

	}

	export interface CreateDirectoryRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: string;
	}
	export interface CreateDirectoryRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateDirectoryRequestFormGroup() {
		return new FormGroup<CreateDirectoryRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9._-]*$')]),
		});

	}

	export enum ObjectType { NODE = 0, LEAF_NODE = 1, POLICY = 2, INDEX = 3 }

	export enum FacetStyle { STATIC = 0, DYNAMIC = 1 }

	export interface CreateFacetRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: string;
		Attributes?: Array<FacetAttribute>;
		ObjectType?: FacetObjectType | null;
		FacetStyle?: FacetFacetStyle | null;
	}
	export interface CreateFacetRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		ObjectType: FormControl<FacetObjectType | null | undefined>,
		FacetStyle: FormControl<FacetFacetStyle | null | undefined>,
	}
	export function CreateCreateFacetRequestFormGroup() {
		return new FormGroup<CreateFacetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9._-]*$')]),
			ObjectType: new FormControl<FacetObjectType | null | undefined>(undefined),
			FacetStyle: new FormControl<FacetFacetStyle | null | undefined>(undefined),
		});

	}

	export interface CreateIndexRequest {

		/** Required */
		OrderedIndexedAttributeList: Array<AttributeKey>;

		/** Required */
		IsUnique: boolean;

		/** The reference that identifies an object. */
		ParentReference?: ObjectReference;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		LinkName?: string | null;
	}
	export interface CreateIndexRequestFormProperties {

		/** Required */
		IsUnique: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		LinkName: FormControl<string | null | undefined>,
	}
	export function CreateCreateIndexRequestFormGroup() {
		return new FormGroup<CreateIndexRequestFormProperties>({
			IsUnique: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			LinkName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[^\/\[\]\(\):\{\}#@!?\s\\;]+')]),
		});

	}

	export interface CreateObjectRequest {

		/** Required */
		SchemaFacets: Array<SchemaFacet>;
		ObjectAttributeList?: Array<AttributeKeyAndValue>;

		/** The reference that identifies an object. */
		ParentReference?: ObjectReference;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		LinkName?: string | null;
	}
	export interface CreateObjectRequestFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		LinkName: FormControl<string | null | undefined>,
	}
	export function CreateCreateObjectRequestFormGroup() {
		return new FormGroup<CreateObjectRequestFormProperties>({
			LinkName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[^\/\[\]\(\):\{\}#@!?\s\\;]+')]),
		});

	}

	export interface CreateSchemaRequest {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		Name: string;
	}
	export interface CreateSchemaRequestFormProperties {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateSchemaRequestFormGroup() {
		return new FormGroup<CreateSchemaRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(32), Validators.pattern('^[a-zA-Z0-9._-]*$')]),
		});

	}


	/** Defines the typed links structure and its attributes. To create a typed link facet, use the <a>CreateTypedLinkFacet</a> API. */
	export interface TypedLinkFacet {

		/** Required */
		Name: string;

		/** Required */
		Attributes: Array<TypedLinkAttributeDefinition>;

		/** Required */
		IdentityAttributeOrder: Array<string>;
	}

	/** Defines the typed links structure and its attributes. To create a typed link facet, use the <a>CreateTypedLinkFacet</a> API. */
	export interface TypedLinkFacetFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateTypedLinkFacetFormGroup() {
		return new FormGroup<TypedLinkFacetFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-zA-Z0-9._-]*$')]),
		});

	}

	export interface CreateTypedLinkFacetRequest {

		/**
		 * Defines the typed links structure and its attributes. To create a typed link facet, use the <a>CreateTypedLinkFacet</a> API.
		 * Required
		 */
		Facet: TypedLinkFacet;
	}
	export interface CreateTypedLinkFacetRequestFormProperties {
	}
	export function CreateCreateTypedLinkFacetRequestFormGroup() {
		return new FormGroup<CreateTypedLinkFacetRequestFormProperties>({
		});

	}

	export interface DeleteDirectoryRequest {
	}
	export interface DeleteDirectoryRequestFormProperties {
	}
	export function CreateDeleteDirectoryRequestFormGroup() {
		return new FormGroup<DeleteDirectoryRequestFormProperties>({
		});

	}

	export interface DeleteFacetRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: string;
	}
	export interface DeleteFacetRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFacetRequestFormGroup() {
		return new FormGroup<DeleteFacetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9._-]*$')]),
		});

	}

	export interface DeleteObjectRequest {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
	}
	export interface DeleteObjectRequestFormProperties {
	}
	export function CreateDeleteObjectRequestFormGroup() {
		return new FormGroup<DeleteObjectRequestFormProperties>({
		});

	}

	export interface DeleteSchemaRequest {
	}
	export interface DeleteSchemaRequestFormProperties {
	}
	export function CreateDeleteSchemaRequestFormGroup() {
		return new FormGroup<DeleteSchemaRequestFormProperties>({
		});

	}

	export interface DeleteTypedLinkFacetRequest {

		/** Required */
		Name: string;
	}
	export interface DeleteTypedLinkFacetRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTypedLinkFacetRequestFormGroup() {
		return new FormGroup<DeleteTypedLinkFacetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-zA-Z0-9._-]*$')]),
		});

	}

	export interface DetachFromIndexRequest {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		IndexReference: ObjectReference;

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		TargetReference: ObjectReference;
	}
	export interface DetachFromIndexRequestFormProperties {
	}
	export function CreateDetachFromIndexRequestFormGroup() {
		return new FormGroup<DetachFromIndexRequestFormProperties>({
		});

	}

	export interface DetachObjectRequest {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ParentReference: ObjectReference;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		LinkName: string;
	}
	export interface DetachObjectRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		LinkName: FormControl<string | null | undefined>,
	}
	export function CreateDetachObjectRequestFormGroup() {
		return new FormGroup<DetachObjectRequestFormProperties>({
			LinkName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[^\/\[\]\(\):\{\}#@!?\s\\;]+')]),
		});

	}

	export interface DetachPolicyRequest {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		PolicyReference: ObjectReference;

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
	}
	export interface DetachPolicyRequestFormProperties {
	}
	export function CreateDetachPolicyRequestFormGroup() {
		return new FormGroup<DetachPolicyRequestFormProperties>({
		});

	}

	export interface DetachTypedLinkRequest {

		/**
		 * Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.
		 * Required
		 */
		TypedLinkSpecifier: TypedLinkSpecifier;
	}
	export interface DetachTypedLinkRequestFormProperties {
	}
	export function CreateDetachTypedLinkRequestFormGroup() {
		return new FormGroup<DetachTypedLinkRequestFormProperties>({
		});

	}

	export interface DisableDirectoryRequest {
	}
	export interface DisableDirectoryRequestFormProperties {
	}
	export function CreateDisableDirectoryRequestFormGroup() {
		return new FormGroup<DisableDirectoryRequestFormProperties>({
		});

	}

	export interface EnableDirectoryRequest {
	}
	export interface EnableDirectoryRequestFormProperties {
	}
	export function CreateEnableDirectoryRequestFormGroup() {
		return new FormGroup<EnableDirectoryRequestFormProperties>({
		});

	}

	export enum RequiredAttributeBehavior { REQUIRED_ALWAYS = 0, NOT_REQUIRED = 1 }

	export enum FacetAttributeType { STRING = 0, BINARY = 1, BOOLEAN = 2, NUMBER = 3, DATETIME = 4, VARIANT = 5 }

	export enum UpdateActionType { CREATE_OR_UPDATE = 0, DELETE = 1 }

	export interface GetAppliedSchemaVersionRequest {

		/** Required */
		SchemaArn: string;
	}
	export interface GetAppliedSchemaVersionRequestFormProperties {

		/** Required */
		SchemaArn: FormControl<string | null | undefined>,
	}
	export function CreateGetAppliedSchemaVersionRequestFormGroup() {
		return new FormGroup<GetAppliedSchemaVersionRequestFormProperties>({
			SchemaArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetDirectoryRequest {
	}
	export interface GetDirectoryRequestFormProperties {
	}
	export function CreateGetDirectoryRequestFormGroup() {
		return new FormGroup<GetDirectoryRequestFormProperties>({
		});

	}

	export interface GetFacetRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: string;
	}
	export interface GetFacetRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGetFacetRequestFormGroup() {
		return new FormGroup<GetFacetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9._-]*$')]),
		});

	}

	export interface GetLinkAttributesRequest {

		/**
		 * Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.
		 * Required
		 */
		TypedLinkSpecifier: TypedLinkSpecifier;

		/** Required */
		AttributeNames: Array<string>;
		ConsistencyLevel?: ConsistencyLevel | null;
	}
	export interface GetLinkAttributesRequestFormProperties {
		ConsistencyLevel: FormControl<ConsistencyLevel | null | undefined>,
	}
	export function CreateGetLinkAttributesRequestFormGroup() {
		return new FormGroup<GetLinkAttributesRequestFormProperties>({
			ConsistencyLevel: new FormControl<ConsistencyLevel | null | undefined>(undefined),
		});

	}

	export interface GetObjectAttributesRequest {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;

		/**
		 * A facet.
		 * Required
		 */
		SchemaFacet: SchemaFacet;

		/** Required */
		AttributeNames: Array<string>;
	}
	export interface GetObjectAttributesRequestFormProperties {
	}
	export function CreateGetObjectAttributesRequestFormGroup() {
		return new FormGroup<GetObjectAttributesRequestFormProperties>({
		});

	}

	export interface GetObjectInformationRequest {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
	}
	export interface GetObjectInformationRequestFormProperties {
	}
	export function CreateGetObjectInformationRequestFormGroup() {
		return new FormGroup<GetObjectInformationRequestFormProperties>({
		});

	}

	export interface GetSchemaAsJsonRequest {
	}
	export interface GetSchemaAsJsonRequestFormProperties {
	}
	export function CreateGetSchemaAsJsonRequestFormGroup() {
		return new FormGroup<GetSchemaAsJsonRequestFormProperties>({
		});

	}

	export interface GetTypedLinkFacetInformationRequest {

		/** Required */
		Name: string;
	}
	export interface GetTypedLinkFacetInformationRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGetTypedLinkFacetInformationRequestFormGroup() {
		return new FormGroup<GetTypedLinkFacetInformationRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-zA-Z0-9._-]*$')]),
		});

	}

	export interface ListAppliedSchemaArnsRequest {

		/** Required */
		DirectoryArn: string;
		SchemaArn?: string | null;
		NextToken?: string | null;

		/** Minimum: 1 */
		MaxResults?: number | null;
	}
	export interface ListAppliedSchemaArnsRequestFormProperties {

		/** Required */
		DirectoryArn: FormControl<string | null | undefined>,
		SchemaArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListAppliedSchemaArnsRequestFormGroup() {
		return new FormGroup<ListAppliedSchemaArnsRequestFormProperties>({
			DirectoryArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SchemaArn: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface ListAttachedIndicesRequest {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		TargetReference: ObjectReference;
		NextToken?: string | null;

		/** Minimum: 1 */
		MaxResults?: number | null;
	}
	export interface ListAttachedIndicesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListAttachedIndicesRequestFormGroup() {
		return new FormGroup<ListAttachedIndicesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface ListDevelopmentSchemaArnsRequest {
		NextToken?: string | null;

		/** Minimum: 1 */
		MaxResults?: number | null;
	}
	export interface ListDevelopmentSchemaArnsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDevelopmentSchemaArnsRequestFormGroup() {
		return new FormGroup<ListDevelopmentSchemaArnsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface ListDirectoriesRequest {
		NextToken?: string | null;

		/** Minimum: 1 */
		MaxResults?: number | null;
		state?: DirectoryState | null;
	}
	export interface ListDirectoriesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		MaxResults: FormControl<number | null | undefined>,
		state: FormControl<DirectoryState | null | undefined>,
	}
	export function CreateListDirectoriesRequestFormGroup() {
		return new FormGroup<ListDirectoriesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			state: new FormControl<DirectoryState | null | undefined>(undefined),
		});

	}

	export interface ListFacetAttributesRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: string;
		NextToken?: string | null;

		/** Minimum: 1 */
		MaxResults?: number | null;
	}
	export interface ListFacetAttributesRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListFacetAttributesRequestFormGroup() {
		return new FormGroup<ListFacetAttributesRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9._-]*$')]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface ListFacetNamesRequest {
		NextToken?: string | null;

		/** Minimum: 1 */
		MaxResults?: number | null;
	}
	export interface ListFacetNamesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListFacetNamesRequestFormGroup() {
		return new FormGroup<ListFacetNamesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface ListIncomingTypedLinksRequest {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
		FilterAttributeRanges?: Array<TypedLinkAttributeRange>;

		/** Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link. */
		FilterTypedLink?: TypedLinkSchemaAndFacetName;
		NextToken?: string | null;

		/** Minimum: 1 */
		MaxResults?: number | null;
		ConsistencyLevel?: ConsistencyLevel | null;
	}
	export interface ListIncomingTypedLinksRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		MaxResults: FormControl<number | null | undefined>,
		ConsistencyLevel: FormControl<ConsistencyLevel | null | undefined>,
	}
	export function CreateListIncomingTypedLinksRequestFormGroup() {
		return new FormGroup<ListIncomingTypedLinksRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			ConsistencyLevel: new FormControl<ConsistencyLevel | null | undefined>(undefined),
		});

	}

	export interface ListIndexRequest {
		RangesOnIndexedValues?: Array<ObjectAttributeRange>;

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		IndexReference: ObjectReference;

		/** Minimum: 1 */
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface ListIndexRequestFormProperties {

		/** Minimum: 1 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIndexRequestFormGroup() {
		return new FormGroup<ListIndexRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListManagedSchemaArnsRequest {
		SchemaArn?: string | null;
		NextToken?: string | null;

		/** Minimum: 1 */
		MaxResults?: number | null;
	}
	export interface ListManagedSchemaArnsRequestFormProperties {
		SchemaArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListManagedSchemaArnsRequestFormGroup() {
		return new FormGroup<ListManagedSchemaArnsRequestFormProperties>({
			SchemaArn: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface ListObjectAttributesRequest {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
		NextToken?: string | null;

		/** Minimum: 1 */
		MaxResults?: number | null;

		/** A facet. */
		FacetFilter?: SchemaFacet;
	}
	export interface ListObjectAttributesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListObjectAttributesRequestFormGroup() {
		return new FormGroup<ListObjectAttributesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface ListObjectChildrenRequest {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
		NextToken?: string | null;

		/** Minimum: 1 */
		MaxResults?: number | null;
	}
	export interface ListObjectChildrenRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListObjectChildrenRequestFormGroup() {
		return new FormGroup<ListObjectChildrenRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface ListObjectParentPathsRequest {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
		NextToken?: string | null;

		/** Minimum: 1 */
		MaxResults?: number | null;
	}
	export interface ListObjectParentPathsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListObjectParentPathsRequestFormGroup() {
		return new FormGroup<ListObjectParentPathsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface ListObjectParentsRequest {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
		NextToken?: string | null;

		/** Minimum: 1 */
		MaxResults?: number | null;
		IncludeAllLinksToEachParent?: boolean | null;
	}
	export interface ListObjectParentsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		MaxResults: FormControl<number | null | undefined>,
		IncludeAllLinksToEachParent: FormControl<boolean | null | undefined>,
	}
	export function CreateListObjectParentsRequestFormGroup() {
		return new FormGroup<ListObjectParentsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			IncludeAllLinksToEachParent: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListObjectPoliciesRequest {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
		NextToken?: string | null;

		/** Minimum: 1 */
		MaxResults?: number | null;
	}
	export interface ListObjectPoliciesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListObjectPoliciesRequestFormGroup() {
		return new FormGroup<ListObjectPoliciesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface ListOutgoingTypedLinksRequest {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
		FilterAttributeRanges?: Array<TypedLinkAttributeRange>;

		/** Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link. */
		FilterTypedLink?: TypedLinkSchemaAndFacetName;
		NextToken?: string | null;

		/** Minimum: 1 */
		MaxResults?: number | null;
		ConsistencyLevel?: ConsistencyLevel | null;
	}
	export interface ListOutgoingTypedLinksRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		MaxResults: FormControl<number | null | undefined>,
		ConsistencyLevel: FormControl<ConsistencyLevel | null | undefined>,
	}
	export function CreateListOutgoingTypedLinksRequestFormGroup() {
		return new FormGroup<ListOutgoingTypedLinksRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			ConsistencyLevel: new FormControl<ConsistencyLevel | null | undefined>(undefined),
		});

	}

	export interface ListPolicyAttachmentsRequest {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		PolicyReference: ObjectReference;
		NextToken?: string | null;

		/** Minimum: 1 */
		MaxResults?: number | null;
	}
	export interface ListPolicyAttachmentsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListPolicyAttachmentsRequestFormGroup() {
		return new FormGroup<ListPolicyAttachmentsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface ListPublishedSchemaArnsRequest {
		SchemaArn?: string | null;
		NextToken?: string | null;

		/** Minimum: 1 */
		MaxResults?: number | null;
	}
	export interface ListPublishedSchemaArnsRequestFormProperties {
		SchemaArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListPublishedSchemaArnsRequestFormGroup() {
		return new FormGroup<ListPublishedSchemaArnsRequestFormProperties>({
			SchemaArn: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface ListTagsForResourceRequest {

		/** Required */
		ResourceArn: string;
		NextToken?: string | null;

		/** Minimum: 50 */
		MaxResults?: number | null;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/** Minimum: 50 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(50)]),
		});

	}

	export interface ListTypedLinkFacetAttributesRequest {

		/** Required */
		Name: string;
		NextToken?: string | null;

		/** Minimum: 1 */
		MaxResults?: number | null;
	}
	export interface ListTypedLinkFacetAttributesRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTypedLinkFacetAttributesRequestFormGroup() {
		return new FormGroup<ListTypedLinkFacetAttributesRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-zA-Z0-9._-]*$')]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface ListTypedLinkFacetNamesRequest {
		NextToken?: string | null;

		/** Minimum: 1 */
		MaxResults?: number | null;
	}
	export interface ListTypedLinkFacetNamesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTypedLinkFacetNamesRequestFormGroup() {
		return new FormGroup<ListTypedLinkFacetNamesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface LookupPolicyRequest {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
		NextToken?: string | null;

		/** Minimum: 1 */
		MaxResults?: number | null;
	}
	export interface LookupPolicyRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateLookupPolicyRequestFormGroup() {
		return new FormGroup<LookupPolicyRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface PublishSchemaRequest {

		/**
		 * Required
		 * Max length: 10
		 * Min length: 1
		 */
		Version: string;

		/**
		 * Max length: 10
		 * Min length: 1
		 */
		MinorVersion?: string | null;

		/**
		 * Max length: 32
		 * Min length: 1
		 */
		Name?: string | null;
	}
	export interface PublishSchemaRequestFormProperties {

		/**
		 * Required
		 * Max length: 10
		 * Min length: 1
		 */
		Version: FormControl<string | null | undefined>,

		/**
		 * Max length: 10
		 * Min length: 1
		 */
		MinorVersion: FormControl<string | null | undefined>,

		/**
		 * Max length: 32
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreatePublishSchemaRequestFormGroup() {
		return new FormGroup<PublishSchemaRequestFormProperties>({
			Version: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(10), Validators.pattern('^[a-zA-Z0-9._-]*$')]),
			MinorVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(10), Validators.pattern('^[a-zA-Z0-9._-]*$')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(32), Validators.pattern('^[a-zA-Z0-9._-]*$')]),
		});

	}

	export interface PutSchemaFromJsonRequest {

		/** Required */
		Document: string;
	}
	export interface PutSchemaFromJsonRequestFormProperties {

		/** Required */
		Document: FormControl<string | null | undefined>,
	}
	export function CreatePutSchemaFromJsonRequestFormGroup() {
		return new FormGroup<PutSchemaFromJsonRequestFormProperties>({
			Document: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RangeMode { FIRST = 0, LAST = 1, LAST_BEFORE_MISSING_VALUES = 2, INCLUSIVE = 3, EXCLUSIVE = 4 }

	export interface RemoveFacetFromObjectRequest {

		/**
		 * A facet.
		 * Required
		 */
		SchemaFacet: SchemaFacet;

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
	}
	export interface RemoveFacetFromObjectRequestFormProperties {
	}
	export function CreateRemoveFacetFromObjectRequestFormGroup() {
		return new FormGroup<RemoveFacetFromObjectRequestFormProperties>({
		});

	}

	export enum RuleType { BINARY_LENGTH = 0, NUMBER_COMPARISON = 1, STRING_FROM_SET = 2, STRING_LENGTH = 3 }

	export interface RuleParameterMap {
	}
	export interface RuleParameterMapFormProperties {
	}
	export function CreateRuleParameterMapFormGroup() {
		return new FormGroup<RuleParameterMapFormProperties>({
		});

	}


	/** Contains an Amazon Resource Name (ARN) and parameters that are associated with the rule. */
	export interface Rule {
		Type?: RuleType | null;
		Parameters?: RuleParameterMap;
	}

	/** Contains an Amazon Resource Name (ARN) and parameters that are associated with the rule. */
	export interface RuleFormProperties {
		Type: FormControl<RuleType | null | undefined>,
	}
	export function CreateRuleFormGroup() {
		return new FormGroup<RuleFormProperties>({
			Type: new FormControl<RuleType | null | undefined>(undefined),
		});

	}

	export interface TagResourceRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UntagResourceRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateFacetRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: string;
		AttributeUpdates?: Array<FacetAttributeUpdate>;
		ObjectType?: FacetObjectType | null;
	}
	export interface UpdateFacetRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		ObjectType: FormControl<FacetObjectType | null | undefined>,
	}
	export function CreateUpdateFacetRequestFormGroup() {
		return new FormGroup<UpdateFacetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9._-]*$')]),
			ObjectType: new FormControl<FacetObjectType | null | undefined>(undefined),
		});

	}

	export interface UpdateLinkAttributesRequest {

		/**
		 * Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.
		 * Required
		 */
		TypedLinkSpecifier: TypedLinkSpecifier;

		/** Required */
		AttributeUpdates: Array<LinkAttributeUpdate>;
	}
	export interface UpdateLinkAttributesRequestFormProperties {
	}
	export function CreateUpdateLinkAttributesRequestFormGroup() {
		return new FormGroup<UpdateLinkAttributesRequestFormProperties>({
		});

	}

	export interface UpdateObjectAttributesRequest {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;

		/** Required */
		AttributeUpdates: Array<ObjectAttributeUpdate>;
	}
	export interface UpdateObjectAttributesRequestFormProperties {
	}
	export function CreateUpdateObjectAttributesRequestFormGroup() {
		return new FormGroup<UpdateObjectAttributesRequestFormProperties>({
		});

	}

	export interface UpdateSchemaRequest {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		Name: string;
	}
	export interface UpdateSchemaRequestFormProperties {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSchemaRequestFormGroup() {
		return new FormGroup<UpdateSchemaRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(32), Validators.pattern('^[a-zA-Z0-9._-]*$')]),
		});

	}

	export interface UpdateTypedLinkFacetRequest {

		/** Required */
		Name: string;

		/** Required */
		AttributeUpdates: Array<TypedLinkFacetAttributeUpdate>;

		/** Required */
		IdentityAttributeOrder: Array<string>;
	}
	export interface UpdateTypedLinkFacetRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTypedLinkFacetRequestFormGroup() {
		return new FormGroup<UpdateTypedLinkFacetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-zA-Z0-9._-]*$')]),
		});

	}

	export interface UpgradeAppliedSchemaRequest {

		/** Required */
		PublishedSchemaArn: string;

		/** Required */
		DirectoryArn: string;
		DryRun?: boolean | null;
	}
	export interface UpgradeAppliedSchemaRequestFormProperties {

		/** Required */
		PublishedSchemaArn: FormControl<string | null | undefined>,

		/** Required */
		DirectoryArn: FormControl<string | null | undefined>,
		DryRun: FormControl<boolean | null | undefined>,
	}
	export function CreateUpgradeAppliedSchemaRequestFormGroup() {
		return new FormGroup<UpgradeAppliedSchemaRequestFormProperties>({
			PublishedSchemaArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DirectoryArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DryRun: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpgradePublishedSchemaRequest {

		/** Required */
		DevelopmentSchemaArn: string;

		/** Required */
		PublishedSchemaArn: string;

		/**
		 * Required
		 * Max length: 10
		 * Min length: 1
		 */
		MinorVersion: string;
		DryRun?: boolean | null;
	}
	export interface UpgradePublishedSchemaRequestFormProperties {

		/** Required */
		DevelopmentSchemaArn: FormControl<string | null | undefined>,

		/** Required */
		PublishedSchemaArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 10
		 * Min length: 1
		 */
		MinorVersion: FormControl<string | null | undefined>,
		DryRun: FormControl<boolean | null | undefined>,
	}
	export function CreateUpgradePublishedSchemaRequestFormGroup() {
		return new FormGroup<UpgradePublishedSchemaRequestFormProperties>({
			DevelopmentSchemaArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PublishedSchemaArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MinorVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(10), Validators.pattern('^[a-zA-Z0-9._-]*$')]),
			DryRun: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Adds a new <a>Facet</a> to an object. An object can have more than one facet applied on it.
		 * Put amazonclouddirectory/2017-01-11/object/facets#x-amz-data-partition
		 * @return {AddFacetToObjectResponse} Success
		 */
		AddFacetToObject(requestBody: AddFacetToObjectPutBody): Observable<AddFacetToObjectResponse> {
			return this.http.put<AddFacetToObjectResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/object/facets#x-amz-data-partition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Copies the input published schema, at the specified version, into the <a>Directory</a> with the same name and version as that of the published schema.
		 * Put amazonclouddirectory/2017-01-11/schema/apply#x-amz-data-partition
		 * @return {ApplySchemaResponse} Success
		 */
		ApplySchema(requestBody: ApplySchemaPutBody): Observable<ApplySchemaResponse> {
			return this.http.put<ApplySchemaResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/schema/apply#x-amz-data-partition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Attaches an existing object to another object. An object can be accessed in two ways:</p> <ol> <li> <p>Using the path</p> </li> <li> <p>Using <code>ObjectIdentifier</code> </p> </li> </ol>
		 * Put amazonclouddirectory/2017-01-11/object/attach#x-amz-data-partition
		 * @return {AttachObjectResponse} Success
		 */
		AttachObject(requestBody: AttachObjectPutBody): Observable<AttachObjectResponse> {
			return this.http.put<AttachObjectResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/object/attach#x-amz-data-partition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Attaches a policy object to a regular object. An object can have a limited number of attached policies.
		 * Put amazonclouddirectory/2017-01-11/policy/attach#x-amz-data-partition
		 * @return {AttachPolicyResponse} Success
		 */
		AttachPolicy(requestBody: AttachPolicyPutBody): Observable<AttachPolicyResponse> {
			return this.http.put<AttachPolicyResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/policy/attach#x-amz-data-partition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Attaches the specified object to the specified index.
		 * Put amazonclouddirectory/2017-01-11/index/attach#x-amz-data-partition
		 * @return {AttachToIndexResponse} Success
		 */
		AttachToIndex(requestBody: AttachToIndexPutBody): Observable<AttachToIndexResponse> {
			return this.http.put<AttachToIndexResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/index/attach#x-amz-data-partition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Attaches a typed link to a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
		 * Put amazonclouddirectory/2017-01-11/typedlink/attach#x-amz-data-partition
		 * @return {AttachTypedLinkResponse} Success
		 */
		AttachTypedLink(requestBody: AttachTypedLinkPutBody): Observable<AttachTypedLinkResponse> {
			return this.http.put<AttachTypedLinkResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/typedlink/attach#x-amz-data-partition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Performs all the read operations in a batch.
		 * Post amazonclouddirectory/2017-01-11/batchread#x-amz-data-partition
		 * @return {BatchReadResponse} Success
		 */
		BatchRead(requestBody: BatchReadPostBody): Observable<BatchReadResponse> {
			return this.http.post<BatchReadResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/batchread#x-amz-data-partition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Performs all the write operations in a batch. Either all the operations succeed or none.
		 * Put amazonclouddirectory/2017-01-11/batchwrite#x-amz-data-partition
		 * @return {BatchWriteResponse} Success
		 */
		BatchWrite(requestBody: BatchWritePutBody): Observable<BatchWriteResponse> {
			return this.http.put<BatchWriteResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/batchwrite#x-amz-data-partition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a <a>Directory</a> by copying the published schema into the directory. A directory cannot be created without a schema.</p> <p>You can also quickly create a directory using a managed schema, called the <code>QuickStartSchema</code>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_managed.html">Managed Schema</a> in the <i>Amazon Cloud Directory Developer Guide</i>.</p>
		 * Put amazonclouddirectory/2017-01-11/directory/create#x-amz-data-partition
		 * @return {CreateDirectoryResponse} Success
		 */
		CreateDirectory(requestBody: CreateDirectoryPutBody): Observable<CreateDirectoryResponse> {
			return this.http.put<CreateDirectoryResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/directory/create#x-amz-data-partition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new <a>Facet</a> in a schema. Facet creation is allowed only in development or applied schemas.
		 * Put amazonclouddirectory/2017-01-11/facet/create#x-amz-data-partition
		 * @return {CreateFacetResponse} Success
		 */
		CreateFacet(requestBody: CreateFacetPutBody): Observable<CreateFacetResponse> {
			return this.http.put<CreateFacetResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/facet/create#x-amz-data-partition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an index object. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/indexing_search.html">Indexing and search</a> for more information.
		 * Put amazonclouddirectory/2017-01-11/index#x-amz-data-partition
		 * @return {CreateIndexResponse} Success
		 */
		CreateIndex(requestBody: CreateIndexPutBody): Observable<CreateIndexResponse> {
			return this.http.put<CreateIndexResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/index#x-amz-data-partition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an object in a <a>Directory</a>. Additionally attaches the object to a parent, if a parent reference and <code>LinkName</code> is specified. An object is simply a collection of <a>Facet</a> attributes. You can also use this API call to create a policy object, if the facet from which you create the object is a policy facet.
		 * Put amazonclouddirectory/2017-01-11/object#x-amz-data-partition
		 * @return {CreateObjectResponse} Success
		 */
		CreateObject(requestBody: CreateObjectPutBody): Observable<CreateObjectResponse> {
			return this.http.put<CreateObjectResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/object#x-amz-data-partition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new schema in a development state. A schema can exist in three phases:</p> <ul> <li> <p> <i>Development:</i> This is a mutable phase of the schema. All new schemas are in the development phase. Once the schema is finalized, it can be published.</p> </li> <li> <p> <i>Published:</i> Published schemas are immutable and have a version associated with them.</p> </li> <li> <p> <i>Applied:</i> Applied schemas are mutable in a way that allows you to add new schema facets. You can also add new, nonrequired attributes to existing schema facets. You can apply only published schemas to directories. </p> </li> </ul>
		 * Put amazonclouddirectory/2017-01-11/schema/create
		 * @return {CreateSchemaResponse} Success
		 */
		CreateSchema(requestBody: CreateSchemaPutBody): Observable<CreateSchemaResponse> {
			return this.http.put<CreateSchemaResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/schema/create', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
		 * Put amazonclouddirectory/2017-01-11/typedlink/facet/create#x-amz-data-partition
		 * @return {CreateTypedLinkFacetResponse} Success
		 */
		CreateTypedLinkFacet(requestBody: CreateTypedLinkFacetPutBody): Observable<CreateTypedLinkFacetResponse> {
			return this.http.put<CreateTypedLinkFacetResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/typedlink/facet/create#x-amz-data-partition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a directory. Only disabled directories can be deleted. A deleted directory cannot be undone. Exercise extreme caution when deleting directories.
		 * Put amazonclouddirectory/2017-01-11/directory#x-amz-data-partition
		 * @return {DeleteDirectoryResponse} Success
		 */
		DeleteDirectory(): Observable<DeleteDirectoryResponse> {
			return this.http.put<DeleteDirectoryResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/directory#x-amz-data-partition', null, {});
		}

		/**
		 * Deletes a given <a>Facet</a>. All attributes and <a>Rule</a>s that are associated with the facet will be deleted. Only development schema facets are allowed deletion.
		 * Put amazonclouddirectory/2017-01-11/facet/delete#x-amz-data-partition
		 * @return {DeleteFacetResponse} Success
		 */
		DeleteFacet(requestBody: DeleteFacetPutBody): Observable<DeleteFacetResponse> {
			return this.http.put<DeleteFacetResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/facet/delete#x-amz-data-partition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an object and its associated attributes. Only objects with no children and no parents can be deleted. The maximum number of attributes that can be deleted during an object deletion is 30. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Amazon Cloud Directory Limits</a>.
		 * Put amazonclouddirectory/2017-01-11/object/delete#x-amz-data-partition
		 * @return {DeleteObjectResponse} Success
		 */
		DeleteObject(requestBody: DeleteObjectPutBody): Observable<DeleteObjectResponse> {
			return this.http.put<DeleteObjectResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/object/delete#x-amz-data-partition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a given schema. Schemas in a development and published state can only be deleted.
		 * Put amazonclouddirectory/2017-01-11/schema#x-amz-data-partition
		 * @return {DeleteSchemaResponse} Success
		 */
		DeleteSchema(): Observable<DeleteSchemaResponse> {
			return this.http.put<DeleteSchemaResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/schema#x-amz-data-partition', null, {});
		}

		/**
		 * Deletes a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
		 * Put amazonclouddirectory/2017-01-11/typedlink/facet/delete#x-amz-data-partition
		 * @return {DeleteTypedLinkFacetResponse} Success
		 */
		DeleteTypedLinkFacet(requestBody: DeleteTypedLinkFacetPutBody): Observable<DeleteTypedLinkFacetResponse> {
			return this.http.put<DeleteTypedLinkFacetResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/typedlink/facet/delete#x-amz-data-partition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Detaches the specified object from the specified index.
		 * Put amazonclouddirectory/2017-01-11/index/detach#x-amz-data-partition
		 * @return {DetachFromIndexResponse} Success
		 */
		DetachFromIndex(requestBody: DetachFromIndexPutBody): Observable<DetachFromIndexResponse> {
			return this.http.put<DetachFromIndexResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/index/detach#x-amz-data-partition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Detaches a given object from the parent object. The object that is to be detached from the parent is specified by the link name.
		 * Put amazonclouddirectory/2017-01-11/object/detach#x-amz-data-partition
		 * @return {DetachObjectResponse} Success
		 */
		DetachObject(requestBody: DetachObjectPutBody): Observable<DetachObjectResponse> {
			return this.http.put<DetachObjectResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/object/detach#x-amz-data-partition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Detaches a policy from an object.
		 * Put amazonclouddirectory/2017-01-11/policy/detach#x-amz-data-partition
		 * @return {DetachPolicyResponse} Success
		 */
		DetachPolicy(requestBody: DetachPolicyPutBody): Observable<DetachPolicyResponse> {
			return this.http.put<DetachPolicyResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/policy/detach#x-amz-data-partition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Detaches a typed link from a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
		 * Put amazonclouddirectory/2017-01-11/typedlink/detach#x-amz-data-partition
		 * @return {void} Success
		 */
		DetachTypedLink(requestBody: DetachTypedLinkPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'amazonclouddirectory/2017-01-11/typedlink/detach#x-amz-data-partition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Disables the specified directory. Disabled directories cannot be read or written to. Only enabled directories can be disabled. Disabled directories may be reenabled.
		 * Put amazonclouddirectory/2017-01-11/directory/disable#x-amz-data-partition
		 * @return {DisableDirectoryResponse} Success
		 */
		DisableDirectory(): Observable<DisableDirectoryResponse> {
			return this.http.put<DisableDirectoryResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/directory/disable#x-amz-data-partition', null, {});
		}

		/**
		 * Enables the specified directory. Only disabled directories can be enabled. Once enabled, the directory can then be read and written to.
		 * Put amazonclouddirectory/2017-01-11/directory/enable#x-amz-data-partition
		 * @return {EnableDirectoryResponse} Success
		 */
		EnableDirectory(): Observable<EnableDirectoryResponse> {
			return this.http.put<EnableDirectoryResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/directory/enable#x-amz-data-partition', null, {});
		}

		/**
		 * Returns current applied schema version ARN, including the minor version in use.
		 * Post amazonclouddirectory/2017-01-11/schema/getappliedschema
		 * @return {GetAppliedSchemaVersionResponse} Success
		 */
		GetAppliedSchemaVersion(requestBody: GetAppliedSchemaVersionPostBody): Observable<GetAppliedSchemaVersionResponse> {
			return this.http.post<GetAppliedSchemaVersionResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/schema/getappliedschema', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves metadata about a directory.
		 * Post amazonclouddirectory/2017-01-11/directory/get#x-amz-data-partition
		 * @return {GetDirectoryResponse} Success
		 */
		GetDirectory(): Observable<GetDirectoryResponse> {
			return this.http.post<GetDirectoryResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/directory/get#x-amz-data-partition', null, {});
		}

		/**
		 * Gets details of the <a>Facet</a>, such as facet name, attributes, <a>Rule</a>s, or <code>ObjectType</code>. You can call this on all kinds of schema facets -- published, development, or applied.
		 * Post amazonclouddirectory/2017-01-11/facet#x-amz-data-partition
		 * @return {GetFacetResponse} Success
		 */
		GetFacet(requestBody: GetFacetPostBody): Observable<GetFacetResponse> {
			return this.http.post<GetFacetResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/facet#x-amz-data-partition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Does the following:</p> <ol> <li> <p>Adds new <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> <li> <p>Updates existing <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> <li> <p>Deletes existing <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> </ol>
		 * Put amazonclouddirectory/2017-01-11/facet#x-amz-data-partition
		 * @return {UpdateFacetResponse} Success
		 */
		UpdateFacet(requestBody: UpdateFacetPutBody): Observable<UpdateFacetResponse> {
			return this.http.put<UpdateFacetResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/facet#x-amz-data-partition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves attributes that are associated with a typed link.
		 * Post amazonclouddirectory/2017-01-11/typedlink/attributes/get#x-amz-data-partition
		 * @return {GetLinkAttributesResponse} Success
		 */
		GetLinkAttributes(requestBody: GetLinkAttributesPostBody): Observable<GetLinkAttributesResponse> {
			return this.http.post<GetLinkAttributesResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/typedlink/attributes/get#x-amz-data-partition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves attributes within a facet that are associated with an object.
		 * Post amazonclouddirectory/2017-01-11/object/attributes/get#x-amz-data-partition
		 * @return {GetObjectAttributesResponse} Success
		 */
		GetObjectAttributes(requestBody: GetObjectAttributesPostBody): Observable<GetObjectAttributesResponse> {
			return this.http.post<GetObjectAttributesResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/object/attributes/get#x-amz-data-partition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves metadata about an object.
		 * Post amazonclouddirectory/2017-01-11/object/information#x-amz-data-partition
		 * @return {GetObjectInformationResponse} Success
		 */
		GetObjectInformation(requestBody: GetObjectInformationPostBody): Observable<GetObjectInformationResponse> {
			return this.http.post<GetObjectInformationResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/object/information#x-amz-data-partition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a JSON representation of the schema. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_jsonformat.html#schemas_json">JSON Schema Format</a> for more information.
		 * Post amazonclouddirectory/2017-01-11/schema/json#x-amz-data-partition
		 * @return {GetSchemaAsJsonResponse} Success
		 */
		GetSchemaAsJson(): Observable<GetSchemaAsJsonResponse> {
			return this.http.post<GetSchemaAsJsonResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/schema/json#x-amz-data-partition', null, {});
		}

		/**
		 * Allows a schema to be updated using JSON upload. Only available for development schemas. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_jsonformat.html#schemas_json">JSON Schema Format</a> for more information.
		 * Put amazonclouddirectory/2017-01-11/schema/json#x-amz-data-partition
		 * @return {PutSchemaFromJsonResponse} Success
		 */
		PutSchemaFromJson(requestBody: PutSchemaFromJsonPutBody): Observable<PutSchemaFromJsonResponse> {
			return this.http.put<PutSchemaFromJsonResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/schema/json#x-amz-data-partition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the identity attribute order for a specific <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
		 * Post amazonclouddirectory/2017-01-11/typedlink/facet/get#x-amz-data-partition
		 * @return {GetTypedLinkFacetInformationResponse} Success
		 */
		GetTypedLinkFacetInformation(requestBody: GetTypedLinkFacetInformationPostBody): Observable<GetTypedLinkFacetInformationResponse> {
			return this.http.post<GetTypedLinkFacetInformationResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/typedlink/facet/get#x-amz-data-partition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists schema major versions applied to a directory. If <code>SchemaArn</code> is provided, lists the minor version.
		 * Post amazonclouddirectory/2017-01-11/schema/applied
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAppliedSchemaArnsResponse} Success
		 */
		ListAppliedSchemaArns(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListAppliedSchemaArnsPostBody): Observable<ListAppliedSchemaArnsResponse> {
			return this.http.post<ListAppliedSchemaArnsResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/schema/applied?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists indices attached to the specified object.
		 * Post amazonclouddirectory/2017-01-11/object/indices#x-amz-data-partition
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAttachedIndicesResponse} Success
		 */
		ListAttachedIndices(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListAttachedIndicesPostBody): Observable<ListAttachedIndicesResponse> {
			return this.http.post<ListAttachedIndicesResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/object/indices#x-amz-data-partition?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves each Amazon Resource Name (ARN) of schemas in the development state.
		 * Post amazonclouddirectory/2017-01-11/schema/development
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDevelopmentSchemaArnsResponse} Success
		 */
		ListDevelopmentSchemaArns(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListDevelopmentSchemaArnsPostBody): Observable<ListDevelopmentSchemaArnsResponse> {
			return this.http.post<ListDevelopmentSchemaArnsResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/schema/development?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists directories created within an account.
		 * Post amazonclouddirectory/2017-01-11/directory/list
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDirectoriesResponse} Success
		 */
		ListDirectories(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListDirectoriesPostBody): Observable<ListDirectoriesResponse> {
			return this.http.post<ListDirectoriesResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/directory/list?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves attributes attached to the facet.
		 * Post amazonclouddirectory/2017-01-11/facet/attributes#x-amz-data-partition
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListFacetAttributesResponse} Success
		 */
		ListFacetAttributes(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListFacetAttributesPostBody): Observable<ListFacetAttributesResponse> {
			return this.http.post<ListFacetAttributesResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/facet/attributes#x-amz-data-partition?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the names of facets that exist in a schema.
		 * Post amazonclouddirectory/2017-01-11/facet/list#x-amz-data-partition
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListFacetNamesResponse} Success
		 */
		ListFacetNames(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListFacetNamesPostBody): Observable<ListFacetNamesResponse> {
			return this.http.post<ListFacetNamesResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/facet/list#x-amz-data-partition?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
		 * Post amazonclouddirectory/2017-01-11/typedlink/incoming#x-amz-data-partition
		 * @return {ListIncomingTypedLinksResponse} Success
		 */
		ListIncomingTypedLinks(requestBody: ListIncomingTypedLinksPostBody): Observable<ListIncomingTypedLinksResponse> {
			return this.http.post<ListIncomingTypedLinksResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/typedlink/incoming#x-amz-data-partition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists objects attached to the specified index.
		 * Post amazonclouddirectory/2017-01-11/index/targets#x-amz-data-partition
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListIndexResponse} Success
		 */
		ListIndex(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListIndexPostBody): Observable<ListIndexResponse> {
			return this.http.post<ListIndexResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/index/targets#x-amz-data-partition?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the major version families of each managed schema. If a major version ARN is provided as SchemaArn, the minor version revisions in that family are listed instead.
		 * Post amazonclouddirectory/2017-01-11/schema/managed
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListManagedSchemaArnsResponse} Success
		 */
		ListManagedSchemaArns(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListManagedSchemaArnsPostBody): Observable<ListManagedSchemaArnsResponse> {
			return this.http.post<ListManagedSchemaArnsResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/schema/managed?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all attributes that are associated with an object.
		 * Post amazonclouddirectory/2017-01-11/object/attributes#x-amz-data-partition
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListObjectAttributesResponse} Success
		 */
		ListObjectAttributes(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListObjectAttributesPostBody): Observable<ListObjectAttributesResponse> {
			return this.http.post<ListObjectAttributesResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/object/attributes#x-amz-data-partition?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a paginated list of child objects that are associated with a given object.
		 * Post amazonclouddirectory/2017-01-11/object/children#x-amz-data-partition
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListObjectChildrenResponse} Success
		 */
		ListObjectChildren(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListObjectChildrenPostBody): Observable<ListObjectChildrenResponse> {
			return this.http.post<ListObjectChildrenResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/object/children#x-amz-data-partition?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects. For more information about objects, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directorystructure.html">Directory Structure</a>.</p> <p>Use this API to evaluate all parents for an object. The call returns all objects from the root of the directory up to the requested object. The API returns the number of paths based on user-defined <code>MaxResults</code>, in case there are multiple paths to the parent. The order of the paths and nodes returned is consistent among multiple API calls unless the objects are deleted or moved. Paths not leading to the directory root are ignored from the target object.</p>
		 * Post amazonclouddirectory/2017-01-11/object/parentpaths#x-amz-data-partition
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListObjectParentPathsResponse} Success
		 */
		ListObjectParentPaths(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListObjectParentPathsPostBody): Observable<ListObjectParentPathsResponse> {
			return this.http.post<ListObjectParentPathsResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/object/parentpaths#x-amz-data-partition?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists parent objects that are associated with a given object in pagination fashion.
		 * Post amazonclouddirectory/2017-01-11/object/parent#x-amz-data-partition
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListObjectParentsResponse} Success
		 */
		ListObjectParents(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListObjectParentsPostBody): Observable<ListObjectParentsResponse> {
			return this.http.post<ListObjectParentsResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/object/parent#x-amz-data-partition?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns policies attached to an object in pagination fashion.
		 * Post amazonclouddirectory/2017-01-11/object/policy#x-amz-data-partition
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListObjectPoliciesResponse} Success
		 */
		ListObjectPolicies(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListObjectPoliciesPostBody): Observable<ListObjectPoliciesResponse> {
			return this.http.post<ListObjectPoliciesResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/object/policy#x-amz-data-partition?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
		 * Post amazonclouddirectory/2017-01-11/typedlink/outgoing#x-amz-data-partition
		 * @return {ListOutgoingTypedLinksResponse} Success
		 */
		ListOutgoingTypedLinks(requestBody: ListOutgoingTypedLinksPostBody): Observable<ListOutgoingTypedLinksResponse> {
			return this.http.post<ListOutgoingTypedLinksResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/typedlink/outgoing#x-amz-data-partition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached.
		 * Post amazonclouddirectory/2017-01-11/policy/attachment#x-amz-data-partition
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPolicyAttachmentsResponse} Success
		 */
		ListPolicyAttachments(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListPolicyAttachmentsPostBody): Observable<ListPolicyAttachmentsResponse> {
			return this.http.post<ListPolicyAttachmentsResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/policy/attachment#x-amz-data-partition?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the major version families of each published schema. If a major version ARN is provided as <code>SchemaArn</code>, the minor version revisions in that family are listed instead.
		 * Post amazonclouddirectory/2017-01-11/schema/published
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPublishedSchemaArnsResponse} Success
		 */
		ListPublishedSchemaArns(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListPublishedSchemaArnsPostBody): Observable<ListPublishedSchemaArnsResponse> {
			return this.http.post<ListPublishedSchemaArnsResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/schema/published?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns tags for a resource. Tagging is currently supported only for directories with a limit of 50 tags per directory. All 50 tags are returned for a given directory with this API call.
		 * Post amazonclouddirectory/2017-01-11/tags
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListTagsForResourcePostBody): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/tags?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a paginated list of all attribute definitions for a particular <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
		 * Post amazonclouddirectory/2017-01-11/typedlink/facet/attributes#x-amz-data-partition
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTypedLinkFacetAttributesResponse} Success
		 */
		ListTypedLinkFacetAttributes(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListTypedLinkFacetAttributesPostBody): Observable<ListTypedLinkFacetAttributesResponse> {
			return this.http.post<ListTypedLinkFacetAttributesResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/typedlink/facet/attributes#x-amz-data-partition?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a paginated list of <code>TypedLink</code> facet names for a particular schema. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
		 * Post amazonclouddirectory/2017-01-11/typedlink/facet/list#x-amz-data-partition
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTypedLinkFacetNamesResponse} Success
		 */
		ListTypedLinkFacetNames(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListTypedLinkFacetNamesPostBody): Observable<ListTypedLinkFacetNamesResponse> {
			return this.http.post<ListTypedLinkFacetNamesResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/typedlink/facet/list#x-amz-data-partition?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all policies from the root of the <a>Directory</a> to the object specified. If there are no policies present, an empty list is returned. If policies are present, and if some objects don't have the policies attached, it returns the <code>ObjectIdentifier</code> for such objects. If policies are present, it returns <code>ObjectIdentifier</code>, <code>policyId</code>, and <code>policyType</code>. Paths that don't lead to the root from the target object are ignored. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.
		 * Post amazonclouddirectory/2017-01-11/policy/lookup#x-amz-data-partition
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {LookupPolicyResponse} Success
		 */
		LookupPolicy(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: LookupPolicyPostBody): Observable<LookupPolicyResponse> {
			return this.http.post<LookupPolicyResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/policy/lookup#x-amz-data-partition?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Publishes a development schema with a major version and a recommended minor version.
		 * Put amazonclouddirectory/2017-01-11/schema/publish#x-amz-data-partition
		 * @return {PublishSchemaResponse} Success
		 */
		PublishSchema(requestBody: PublishSchemaPutBody): Observable<PublishSchemaResponse> {
			return this.http.put<PublishSchemaResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/schema/publish#x-amz-data-partition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the specified facet from the specified object.
		 * Put amazonclouddirectory/2017-01-11/object/facets/delete#x-amz-data-partition
		 * @return {RemoveFacetFromObjectResponse} Success
		 */
		RemoveFacetFromObject(requestBody: RemoveFacetFromObjectPutBody): Observable<RemoveFacetFromObjectResponse> {
			return this.http.put<RemoveFacetFromObjectResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/object/facets/delete#x-amz-data-partition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * An API operation for adding tags to a resource.
		 * Put amazonclouddirectory/2017-01-11/tags/add
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourcePutBody): Observable<TagResourceResponse> {
			return this.http.put<TagResourceResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/tags/add', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * An API operation for removing tags from a resource.
		 * Put amazonclouddirectory/2017-01-11/tags/remove
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourcePutBody): Observable<UntagResourceResponse> {
			return this.http.put<UntagResourceResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/tags/remove', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a given typed link’s attributes. Attributes to be updated must not contribute to the typed link’s identity, as defined by its <code>IdentityAttributeOrder</code>.
		 * Post amazonclouddirectory/2017-01-11/typedlink/attributes/update#x-amz-data-partition
		 * @return {UpdateLinkAttributesResponse} Success
		 */
		UpdateLinkAttributes(requestBody: UpdateLinkAttributesPostBody): Observable<UpdateLinkAttributesResponse> {
			return this.http.post<UpdateLinkAttributesResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/typedlink/attributes/update#x-amz-data-partition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a given object's attributes.
		 * Put amazonclouddirectory/2017-01-11/object/update#x-amz-data-partition
		 * @return {UpdateObjectAttributesResponse} Success
		 */
		UpdateObjectAttributes(requestBody: UpdateObjectAttributesPutBody): Observable<UpdateObjectAttributesResponse> {
			return this.http.put<UpdateObjectAttributesResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/object/update#x-amz-data-partition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the schema name with a new name. Only development schema names can be updated.
		 * Put amazonclouddirectory/2017-01-11/schema/update#x-amz-data-partition
		 * @return {UpdateSchemaResponse} Success
		 */
		UpdateSchema(requestBody: UpdateSchemaPutBody): Observable<UpdateSchemaResponse> {
			return this.http.put<UpdateSchemaResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/schema/update#x-amz-data-partition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
		 * Put amazonclouddirectory/2017-01-11/typedlink/facet#x-amz-data-partition
		 * @return {UpdateTypedLinkFacetResponse} Success
		 */
		UpdateTypedLinkFacet(requestBody: UpdateTypedLinkFacetPutBody): Observable<UpdateTypedLinkFacetResponse> {
			return this.http.put<UpdateTypedLinkFacetResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/typedlink/facet#x-amz-data-partition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Upgrades a single directory in-place using the <code>PublishedSchemaArn</code> with schema updates found in <code>MinorVersion</code>. Backwards-compatible minor version upgrades are instantaneously available for readers on all objects in the directory. Note: This is a synchronous API call and upgrades only one schema on a given directory per call. To upgrade multiple directories from one schema, you would need to call this API on each directory.
		 * Put amazonclouddirectory/2017-01-11/schema/upgradeapplied
		 * @return {UpgradeAppliedSchemaResponse} Success
		 */
		UpgradeAppliedSchema(requestBody: UpgradeAppliedSchemaPutBody): Observable<UpgradeAppliedSchemaResponse> {
			return this.http.put<UpgradeAppliedSchemaResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/schema/upgradeapplied', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Upgrades a published schema under a new minor version revision using the current contents of <code>DevelopmentSchemaArn</code>.
		 * Put amazonclouddirectory/2017-01-11/schema/upgradepublished
		 * @return {UpgradePublishedSchemaResponse} Success
		 */
		UpgradePublishedSchema(requestBody: UpgradePublishedSchemaPutBody): Observable<UpgradePublishedSchemaResponse> {
			return this.http.put<UpgradePublishedSchemaResponse>(this.baseUri + 'amazonclouddirectory/2017-01-11/schema/upgradepublished', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface AddFacetToObjectPutBody {

		/**
		 * A facet.
		 * Required
		 */
		SchemaFacet: AddFacetToObjectPutBodySchemaFacet;

		/** Attributes on the facet that you are adding to the object. */
		ObjectAttributeList?: Array<AttributeKeyAndValue>;

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: AddFacetToObjectPutBodyObjectReference;
	}
	export interface AddFacetToObjectPutBodyFormProperties {
	}
	export function CreateAddFacetToObjectPutBodyFormGroup() {
		return new FormGroup<AddFacetToObjectPutBodyFormProperties>({
		});

	}

	export interface AddFacetToObjectPutBodySchemaFacet {
		SchemaArn?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		FacetName?: string | null;
	}
	export interface AddFacetToObjectPutBodySchemaFacetFormProperties {
		SchemaArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		FacetName: FormControl<string | null | undefined>,
	}
	export function CreateAddFacetToObjectPutBodySchemaFacetFormGroup() {
		return new FormGroup<AddFacetToObjectPutBodySchemaFacetFormProperties>({
			SchemaArn: new FormControl<string | null | undefined>(undefined),
			FacetName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9._-]*$')]),
		});

	}

	export interface AddFacetToObjectPutBodyObjectReference {
		Selector?: string | null;
	}
	export interface AddFacetToObjectPutBodyObjectReferenceFormProperties {
		Selector: FormControl<string | null | undefined>,
	}
	export function CreateAddFacetToObjectPutBodyObjectReferenceFormGroup() {
		return new FormGroup<AddFacetToObjectPutBodyObjectReferenceFormProperties>({
			Selector: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApplySchemaPutBody {

		/**
		 * Published schema Amazon Resource Name (ARN) that needs to be copied. For more information, see <a>arns</a>.
		 * Required
		 */
		PublishedSchemaArn: string;
	}
	export interface ApplySchemaPutBodyFormProperties {

		/**
		 * Published schema Amazon Resource Name (ARN) that needs to be copied. For more information, see <a>arns</a>.
		 * Required
		 */
		PublishedSchemaArn: FormControl<string | null | undefined>,
	}
	export function CreateApplySchemaPutBodyFormGroup() {
		return new FormGroup<ApplySchemaPutBodyFormProperties>({
			PublishedSchemaArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AttachObjectPutBody {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ParentReference: AttachObjectPutBodyParentReference;

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ChildReference: AttachObjectPutBodyChildReference;

		/**
		 * The link name with which the child object is attached to the parent.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		LinkName: string;
	}
	export interface AttachObjectPutBodyFormProperties {

		/**
		 * The link name with which the child object is attached to the parent.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		LinkName: FormControl<string | null | undefined>,
	}
	export function CreateAttachObjectPutBodyFormGroup() {
		return new FormGroup<AttachObjectPutBodyFormProperties>({
			LinkName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[^\/\[\]\(\):\{\}#@!?\s\\;]+')]),
		});

	}

	export interface AttachObjectPutBodyParentReference {
		Selector?: string | null;
	}
	export interface AttachObjectPutBodyParentReferenceFormProperties {
		Selector: FormControl<string | null | undefined>,
	}
	export function CreateAttachObjectPutBodyParentReferenceFormGroup() {
		return new FormGroup<AttachObjectPutBodyParentReferenceFormProperties>({
			Selector: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AttachObjectPutBodyChildReference {
		Selector?: string | null;
	}
	export interface AttachObjectPutBodyChildReferenceFormProperties {
		Selector: FormControl<string | null | undefined>,
	}
	export function CreateAttachObjectPutBodyChildReferenceFormGroup() {
		return new FormGroup<AttachObjectPutBodyChildReferenceFormProperties>({
			Selector: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AttachPolicyPutBody {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		PolicyReference: AttachPolicyPutBodyPolicyReference;

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: AttachPolicyPutBodyObjectReference;
	}
	export interface AttachPolicyPutBodyFormProperties {
	}
	export function CreateAttachPolicyPutBodyFormGroup() {
		return new FormGroup<AttachPolicyPutBodyFormProperties>({
		});

	}

	export interface AttachPolicyPutBodyPolicyReference {
		Selector?: string | null;
	}
	export interface AttachPolicyPutBodyPolicyReferenceFormProperties {
		Selector: FormControl<string | null | undefined>,
	}
	export function CreateAttachPolicyPutBodyPolicyReferenceFormGroup() {
		return new FormGroup<AttachPolicyPutBodyPolicyReferenceFormProperties>({
			Selector: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AttachPolicyPutBodyObjectReference {
		Selector?: string | null;
	}
	export interface AttachPolicyPutBodyObjectReferenceFormProperties {
		Selector: FormControl<string | null | undefined>,
	}
	export function CreateAttachPolicyPutBodyObjectReferenceFormGroup() {
		return new FormGroup<AttachPolicyPutBodyObjectReferenceFormProperties>({
			Selector: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AttachToIndexPutBody {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		IndexReference: AttachToIndexPutBodyIndexReference;

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		TargetReference: AttachToIndexPutBodyTargetReference;
	}
	export interface AttachToIndexPutBodyFormProperties {
	}
	export function CreateAttachToIndexPutBodyFormGroup() {
		return new FormGroup<AttachToIndexPutBodyFormProperties>({
		});

	}

	export interface AttachToIndexPutBodyIndexReference {
		Selector?: string | null;
	}
	export interface AttachToIndexPutBodyIndexReferenceFormProperties {
		Selector: FormControl<string | null | undefined>,
	}
	export function CreateAttachToIndexPutBodyIndexReferenceFormGroup() {
		return new FormGroup<AttachToIndexPutBodyIndexReferenceFormProperties>({
			Selector: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AttachToIndexPutBodyTargetReference {
		Selector?: string | null;
	}
	export interface AttachToIndexPutBodyTargetReferenceFormProperties {
		Selector: FormControl<string | null | undefined>,
	}
	export function CreateAttachToIndexPutBodyTargetReferenceFormGroup() {
		return new FormGroup<AttachToIndexPutBodyTargetReferenceFormProperties>({
			Selector: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AttachTypedLinkPutBody {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		SourceObjectReference: AttachTypedLinkPutBodySourceObjectReference;

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		TargetObjectReference: AttachTypedLinkPutBodyTargetObjectReference;

		/**
		 * Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link.
		 * Required
		 */
		TypedLinkFacet: AttachTypedLinkPutBodyTypedLinkFacet;

		/**
		 * A set of attributes that are associated with the typed link.
		 * Required
		 */
		Attributes: Array<AttributeNameAndValue>;
	}
	export interface AttachTypedLinkPutBodyFormProperties {
	}
	export function CreateAttachTypedLinkPutBodyFormGroup() {
		return new FormGroup<AttachTypedLinkPutBodyFormProperties>({
		});

	}

	export interface AttachTypedLinkPutBodySourceObjectReference {
		Selector?: string | null;
	}
	export interface AttachTypedLinkPutBodySourceObjectReferenceFormProperties {
		Selector: FormControl<string | null | undefined>,
	}
	export function CreateAttachTypedLinkPutBodySourceObjectReferenceFormGroup() {
		return new FormGroup<AttachTypedLinkPutBodySourceObjectReferenceFormProperties>({
			Selector: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AttachTypedLinkPutBodyTargetObjectReference {
		Selector?: string | null;
	}
	export interface AttachTypedLinkPutBodyTargetObjectReferenceFormProperties {
		Selector: FormControl<string | null | undefined>,
	}
	export function CreateAttachTypedLinkPutBodyTargetObjectReferenceFormGroup() {
		return new FormGroup<AttachTypedLinkPutBodyTargetObjectReferenceFormProperties>({
			Selector: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AttachTypedLinkPutBodyTypedLinkFacet {
		SchemaArn?: string | null;
		TypedLinkName?: string | null;
	}
	export interface AttachTypedLinkPutBodyTypedLinkFacetFormProperties {
		SchemaArn: FormControl<string | null | undefined>,
		TypedLinkName: FormControl<string | null | undefined>,
	}
	export function CreateAttachTypedLinkPutBodyTypedLinkFacetFormGroup() {
		return new FormGroup<AttachTypedLinkPutBodyTypedLinkFacetFormProperties>({
			SchemaArn: new FormControl<string | null | undefined>(undefined),
			TypedLinkName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9._-]*$')]),
		});

	}

	export interface BatchReadPostBody {

		/**
		 * A list of operations that are part of the batch.
		 * Required
		 */
		Operations: Array<BatchReadOperation>;
	}
	export interface BatchReadPostBodyFormProperties {
	}
	export function CreateBatchReadPostBodyFormGroup() {
		return new FormGroup<BatchReadPostBodyFormProperties>({
		});

	}

	export interface BatchWritePutBody {

		/**
		 * A list of operations that are part of the batch.
		 * Required
		 */
		Operations: Array<BatchWriteOperation>;
	}
	export interface BatchWritePutBodyFormProperties {
	}
	export function CreateBatchWritePutBodyFormGroup() {
		return new FormGroup<BatchWritePutBodyFormProperties>({
		});

	}

	export interface CreateDirectoryPutBody {

		/**
		 * The name of the <a>Directory</a>. Should be unique per account, per region.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: string;
	}
	export interface CreateDirectoryPutBodyFormProperties {

		/**
		 * The name of the <a>Directory</a>. Should be unique per account, per region.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateDirectoryPutBodyFormGroup() {
		return new FormGroup<CreateDirectoryPutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9._-]*$')]),
		});

	}

	export interface CreateFacetPutBody {

		/**
		 * The name of the <a>Facet</a>, which is unique for a given schema.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: string;

		/** The attributes that are associated with the <a>Facet</a>. */
		Attributes?: Array<FacetAttribute>;

		/** <p>Specifies whether a given object created from this facet is of type node, leaf node, policy or index.</p> <ul> <li> <p>Node: Can have multiple children but one parent.</p> </li> </ul> <ul> <li> <p>Leaf node: Cannot have children but can have multiple parents.</p> </li> </ul> <ul> <li> <p>Policy: Allows you to store a policy document and policy type. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p> </li> </ul> <ul> <li> <p>Index: Can be created with the Index API.</p> </li> </ul> */
		ObjectType?: FacetObjectType | null;

		/** There are two different styles that you can define on any given facet, <code>Static</code> and <code>Dynamic</code>. For static facets, all attributes must be defined in the schema. For dynamic facets, attributes can be defined during data plane operations. */
		FacetStyle?: FacetFacetStyle | null;
	}
	export interface CreateFacetPutBodyFormProperties {

		/**
		 * The name of the <a>Facet</a>, which is unique for a given schema.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** <p>Specifies whether a given object created from this facet is of type node, leaf node, policy or index.</p> <ul> <li> <p>Node: Can have multiple children but one parent.</p> </li> </ul> <ul> <li> <p>Leaf node: Cannot have children but can have multiple parents.</p> </li> </ul> <ul> <li> <p>Policy: Allows you to store a policy document and policy type. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p> </li> </ul> <ul> <li> <p>Index: Can be created with the Index API.</p> </li> </ul> */
		ObjectType: FormControl<FacetObjectType | null | undefined>,

		/** There are two different styles that you can define on any given facet, <code>Static</code> and <code>Dynamic</code>. For static facets, all attributes must be defined in the schema. For dynamic facets, attributes can be defined during data plane operations. */
		FacetStyle: FormControl<FacetFacetStyle | null | undefined>,
	}
	export function CreateCreateFacetPutBodyFormGroup() {
		return new FormGroup<CreateFacetPutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9._-]*$')]),
			ObjectType: new FormControl<FacetObjectType | null | undefined>(undefined),
			FacetStyle: new FormControl<FacetFacetStyle | null | undefined>(undefined),
		});

	}

	export interface CreateIndexPutBody {

		/**
		 * Specifies the attributes that should be indexed on. Currently only a single attribute is supported.
		 * Required
		 */
		OrderedIndexedAttributeList: Array<AttributeKey>;

		/**
		 * Indicates whether the attribute that is being indexed has unique values or not.
		 * Required
		 */
		IsUnique: boolean;

		/** The reference that identifies an object. */
		ParentReference?: CreateIndexPutBodyParentReference;

		/**
		 * The name of the link between the parent object and the index object.
		 * Max length: 64
		 * Min length: 1
		 */
		LinkName?: string | null;
	}
	export interface CreateIndexPutBodyFormProperties {

		/**
		 * Indicates whether the attribute that is being indexed has unique values or not.
		 * Required
		 */
		IsUnique: FormControl<boolean | null | undefined>,

		/**
		 * The name of the link between the parent object and the index object.
		 * Max length: 64
		 * Min length: 1
		 */
		LinkName: FormControl<string | null | undefined>,
	}
	export function CreateCreateIndexPutBodyFormGroup() {
		return new FormGroup<CreateIndexPutBodyFormProperties>({
			IsUnique: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			LinkName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[^\/\[\]\(\):\{\}#@!?\s\\;]+')]),
		});

	}

	export interface CreateIndexPutBodyParentReference {
		Selector?: string | null;
	}
	export interface CreateIndexPutBodyParentReferenceFormProperties {
		Selector: FormControl<string | null | undefined>,
	}
	export function CreateCreateIndexPutBodyParentReferenceFormGroup() {
		return new FormGroup<CreateIndexPutBodyParentReferenceFormProperties>({
			Selector: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateObjectPutBody {

		/**
		 * A list of schema facets to be associated with the object. Do not provide minor version components. See <a>SchemaFacet</a> for details.
		 * Required
		 */
		SchemaFacets: Array<SchemaFacet>;

		/** The attribute map whose attribute ARN contains the key and attribute value as the map value. */
		ObjectAttributeList?: Array<AttributeKeyAndValue>;

		/** The reference that identifies an object. */
		ParentReference?: CreateObjectPutBodyParentReference;

		/**
		 * The name of link that is used to attach this object to a parent.
		 * Max length: 64
		 * Min length: 1
		 */
		LinkName?: string | null;
	}
	export interface CreateObjectPutBodyFormProperties {

		/**
		 * The name of link that is used to attach this object to a parent.
		 * Max length: 64
		 * Min length: 1
		 */
		LinkName: FormControl<string | null | undefined>,
	}
	export function CreateCreateObjectPutBodyFormGroup() {
		return new FormGroup<CreateObjectPutBodyFormProperties>({
			LinkName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[^\/\[\]\(\):\{\}#@!?\s\\;]+')]),
		});

	}

	export interface CreateObjectPutBodyParentReference {
		Selector?: string | null;
	}
	export interface CreateObjectPutBodyParentReferenceFormProperties {
		Selector: FormControl<string | null | undefined>,
	}
	export function CreateCreateObjectPutBodyParentReferenceFormGroup() {
		return new FormGroup<CreateObjectPutBodyParentReferenceFormProperties>({
			Selector: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSchemaPutBody {

		/**
		 * The name that is associated with the schema. This is unique to each account and in each region.
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		Name: string;
	}
	export interface CreateSchemaPutBodyFormProperties {

		/**
		 * The name that is associated with the schema. This is unique to each account and in each region.
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateSchemaPutBodyFormGroup() {
		return new FormGroup<CreateSchemaPutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(32), Validators.pattern('^[a-zA-Z0-9._-]*$')]),
		});

	}

	export interface CreateTypedLinkFacetPutBody {

		/**
		 * Defines the typed links structure and its attributes. To create a typed link facet, use the <a>CreateTypedLinkFacet</a> API.
		 * Required
		 */
		Facet: CreateTypedLinkFacetPutBodyFacet;
	}
	export interface CreateTypedLinkFacetPutBodyFormProperties {
	}
	export function CreateCreateTypedLinkFacetPutBodyFormGroup() {
		return new FormGroup<CreateTypedLinkFacetPutBodyFormProperties>({
		});

	}

	export interface CreateTypedLinkFacetPutBodyFacet {
		Name?: string | null;
		Attributes?: Array<TypedLinkAttributeDefinition>;
		IdentityAttributeOrder?: Array<string>;
	}
	export interface CreateTypedLinkFacetPutBodyFacetFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateTypedLinkFacetPutBodyFacetFormGroup() {
		return new FormGroup<CreateTypedLinkFacetPutBodyFacetFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9._-]*$')]),
		});

	}

	export interface DeleteFacetPutBody {

		/**
		 * The name of the facet to delete.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: string;
	}
	export interface DeleteFacetPutBodyFormProperties {

		/**
		 * The name of the facet to delete.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFacetPutBodyFormGroup() {
		return new FormGroup<DeleteFacetPutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9._-]*$')]),
		});

	}

	export interface DeleteObjectPutBody {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: DeleteObjectPutBodyObjectReference;
	}
	export interface DeleteObjectPutBodyFormProperties {
	}
	export function CreateDeleteObjectPutBodyFormGroup() {
		return new FormGroup<DeleteObjectPutBodyFormProperties>({
		});

	}

	export interface DeleteObjectPutBodyObjectReference {
		Selector?: string | null;
	}
	export interface DeleteObjectPutBodyObjectReferenceFormProperties {
		Selector: FormControl<string | null | undefined>,
	}
	export function CreateDeleteObjectPutBodyObjectReferenceFormGroup() {
		return new FormGroup<DeleteObjectPutBodyObjectReferenceFormProperties>({
			Selector: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteTypedLinkFacetPutBody {

		/**
		 * The unique name of the typed link facet.
		 * Required
		 */
		Name: string;
	}
	export interface DeleteTypedLinkFacetPutBodyFormProperties {

		/**
		 * The unique name of the typed link facet.
		 * Required
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTypedLinkFacetPutBodyFormGroup() {
		return new FormGroup<DeleteTypedLinkFacetPutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-zA-Z0-9._-]*$')]),
		});

	}

	export interface DetachFromIndexPutBody {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		IndexReference: DetachFromIndexPutBodyIndexReference;

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		TargetReference: DetachFromIndexPutBodyTargetReference;
	}
	export interface DetachFromIndexPutBodyFormProperties {
	}
	export function CreateDetachFromIndexPutBodyFormGroup() {
		return new FormGroup<DetachFromIndexPutBodyFormProperties>({
		});

	}

	export interface DetachFromIndexPutBodyIndexReference {
		Selector?: string | null;
	}
	export interface DetachFromIndexPutBodyIndexReferenceFormProperties {
		Selector: FormControl<string | null | undefined>,
	}
	export function CreateDetachFromIndexPutBodyIndexReferenceFormGroup() {
		return new FormGroup<DetachFromIndexPutBodyIndexReferenceFormProperties>({
			Selector: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DetachFromIndexPutBodyTargetReference {
		Selector?: string | null;
	}
	export interface DetachFromIndexPutBodyTargetReferenceFormProperties {
		Selector: FormControl<string | null | undefined>,
	}
	export function CreateDetachFromIndexPutBodyTargetReferenceFormGroup() {
		return new FormGroup<DetachFromIndexPutBodyTargetReferenceFormProperties>({
			Selector: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DetachObjectPutBody {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ParentReference: DetachObjectPutBodyParentReference;

		/**
		 * The link name associated with the object that needs to be detached.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		LinkName: string;
	}
	export interface DetachObjectPutBodyFormProperties {

		/**
		 * The link name associated with the object that needs to be detached.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		LinkName: FormControl<string | null | undefined>,
	}
	export function CreateDetachObjectPutBodyFormGroup() {
		return new FormGroup<DetachObjectPutBodyFormProperties>({
			LinkName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[^\/\[\]\(\):\{\}#@!?\s\\;]+')]),
		});

	}

	export interface DetachObjectPutBodyParentReference {
		Selector?: string | null;
	}
	export interface DetachObjectPutBodyParentReferenceFormProperties {
		Selector: FormControl<string | null | undefined>,
	}
	export function CreateDetachObjectPutBodyParentReferenceFormGroup() {
		return new FormGroup<DetachObjectPutBodyParentReferenceFormProperties>({
			Selector: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DetachPolicyPutBody {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		PolicyReference: DetachPolicyPutBodyPolicyReference;

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: DetachPolicyPutBodyObjectReference;
	}
	export interface DetachPolicyPutBodyFormProperties {
	}
	export function CreateDetachPolicyPutBodyFormGroup() {
		return new FormGroup<DetachPolicyPutBodyFormProperties>({
		});

	}

	export interface DetachPolicyPutBodyPolicyReference {
		Selector?: string | null;
	}
	export interface DetachPolicyPutBodyPolicyReferenceFormProperties {
		Selector: FormControl<string | null | undefined>,
	}
	export function CreateDetachPolicyPutBodyPolicyReferenceFormGroup() {
		return new FormGroup<DetachPolicyPutBodyPolicyReferenceFormProperties>({
			Selector: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DetachPolicyPutBodyObjectReference {
		Selector?: string | null;
	}
	export interface DetachPolicyPutBodyObjectReferenceFormProperties {
		Selector: FormControl<string | null | undefined>,
	}
	export function CreateDetachPolicyPutBodyObjectReferenceFormGroup() {
		return new FormGroup<DetachPolicyPutBodyObjectReferenceFormProperties>({
			Selector: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DetachTypedLinkPutBody {

		/**
		 * Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.
		 * Required
		 */
		TypedLinkSpecifier: DetachTypedLinkPutBodyTypedLinkSpecifier;
	}
	export interface DetachTypedLinkPutBodyFormProperties {
	}
	export function CreateDetachTypedLinkPutBodyFormGroup() {
		return new FormGroup<DetachTypedLinkPutBodyFormProperties>({
		});

	}

	export interface DetachTypedLinkPutBodyTypedLinkSpecifier {

		/** Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link. */
		TypedLinkFacet?: TypedLinkSchemaAndFacetName;

		/** The reference that identifies an object. */
		SourceObjectReference?: ObjectReference;

		/** The reference that identifies an object. */
		TargetObjectReference?: ObjectReference;
		IdentityAttributeValues?: Array<AttributeNameAndValue>;
	}
	export interface DetachTypedLinkPutBodyTypedLinkSpecifierFormProperties {
	}
	export function CreateDetachTypedLinkPutBodyTypedLinkSpecifierFormGroup() {
		return new FormGroup<DetachTypedLinkPutBodyTypedLinkSpecifierFormProperties>({
		});

	}

	export interface GetAppliedSchemaVersionPostBody {

		/**
		 * The ARN of the applied schema.
		 * Required
		 */
		SchemaArn: string;
	}
	export interface GetAppliedSchemaVersionPostBodyFormProperties {

		/**
		 * The ARN of the applied schema.
		 * Required
		 */
		SchemaArn: FormControl<string | null | undefined>,
	}
	export function CreateGetAppliedSchemaVersionPostBodyFormGroup() {
		return new FormGroup<GetAppliedSchemaVersionPostBodyFormProperties>({
			SchemaArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetFacetPostBody {

		/**
		 * The name of the facet to retrieve.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: string;
	}
	export interface GetFacetPostBodyFormProperties {

		/**
		 * The name of the facet to retrieve.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGetFacetPostBodyFormGroup() {
		return new FormGroup<GetFacetPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9._-]*$')]),
		});

	}

	export interface UpdateFacetPutBody {

		/**
		 * The name of the facet.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: string;

		/** List of attributes that need to be updated in a given schema <a>Facet</a>. Each attribute is followed by <code>AttributeAction</code>, which specifies the type of update operation to perform. */
		AttributeUpdates?: Array<FacetAttributeUpdate>;

		/** The object type that is associated with the facet. See <a>CreateFacetRequest$ObjectType</a> for more details. */
		ObjectType?: FacetObjectType | null;
	}
	export interface UpdateFacetPutBodyFormProperties {

		/**
		 * The name of the facet.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** The object type that is associated with the facet. See <a>CreateFacetRequest$ObjectType</a> for more details. */
		ObjectType: FormControl<FacetObjectType | null | undefined>,
	}
	export function CreateUpdateFacetPutBodyFormGroup() {
		return new FormGroup<UpdateFacetPutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9._-]*$')]),
			ObjectType: new FormControl<FacetObjectType | null | undefined>(undefined),
		});

	}

	export interface GetLinkAttributesPostBody {

		/**
		 * Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.
		 * Required
		 */
		TypedLinkSpecifier: GetLinkAttributesPostBodyTypedLinkSpecifier;

		/**
		 * A list of attribute names whose values will be retrieved.
		 * Required
		 */
		AttributeNames: Array<string>;

		/** The consistency level at which to retrieve the attributes on a typed link. */
		ConsistencyLevel?: ConsistencyLevel | null;
	}
	export interface GetLinkAttributesPostBodyFormProperties {

		/** The consistency level at which to retrieve the attributes on a typed link. */
		ConsistencyLevel: FormControl<ConsistencyLevel | null | undefined>,
	}
	export function CreateGetLinkAttributesPostBodyFormGroup() {
		return new FormGroup<GetLinkAttributesPostBodyFormProperties>({
			ConsistencyLevel: new FormControl<ConsistencyLevel | null | undefined>(undefined),
		});

	}

	export interface GetLinkAttributesPostBodyTypedLinkSpecifier {

		/** Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link. */
		TypedLinkFacet?: TypedLinkSchemaAndFacetName;

		/** The reference that identifies an object. */
		SourceObjectReference?: ObjectReference;

		/** The reference that identifies an object. */
		TargetObjectReference?: ObjectReference;
		IdentityAttributeValues?: Array<AttributeNameAndValue>;
	}
	export interface GetLinkAttributesPostBodyTypedLinkSpecifierFormProperties {
	}
	export function CreateGetLinkAttributesPostBodyTypedLinkSpecifierFormGroup() {
		return new FormGroup<GetLinkAttributesPostBodyTypedLinkSpecifierFormProperties>({
		});

	}

	export interface GetObjectAttributesPostBody {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: GetObjectAttributesPostBodyObjectReference;

		/**
		 * A facet.
		 * Required
		 */
		SchemaFacet: GetObjectAttributesPostBodySchemaFacet;

		/**
		 * List of attribute names whose values will be retrieved.
		 * Required
		 */
		AttributeNames: Array<string>;
	}
	export interface GetObjectAttributesPostBodyFormProperties {
	}
	export function CreateGetObjectAttributesPostBodyFormGroup() {
		return new FormGroup<GetObjectAttributesPostBodyFormProperties>({
		});

	}

	export interface GetObjectAttributesPostBodyObjectReference {
		Selector?: string | null;
	}
	export interface GetObjectAttributesPostBodyObjectReferenceFormProperties {
		Selector: FormControl<string | null | undefined>,
	}
	export function CreateGetObjectAttributesPostBodyObjectReferenceFormGroup() {
		return new FormGroup<GetObjectAttributesPostBodyObjectReferenceFormProperties>({
			Selector: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetObjectAttributesPostBodySchemaFacet {
		SchemaArn?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		FacetName?: string | null;
	}
	export interface GetObjectAttributesPostBodySchemaFacetFormProperties {
		SchemaArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		FacetName: FormControl<string | null | undefined>,
	}
	export function CreateGetObjectAttributesPostBodySchemaFacetFormGroup() {
		return new FormGroup<GetObjectAttributesPostBodySchemaFacetFormProperties>({
			SchemaArn: new FormControl<string | null | undefined>(undefined),
			FacetName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9._-]*$')]),
		});

	}

	export interface GetObjectInformationPostBody {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: GetObjectInformationPostBodyObjectReference;
	}
	export interface GetObjectInformationPostBodyFormProperties {
	}
	export function CreateGetObjectInformationPostBodyFormGroup() {
		return new FormGroup<GetObjectInformationPostBodyFormProperties>({
		});

	}

	export interface GetObjectInformationPostBodyObjectReference {
		Selector?: string | null;
	}
	export interface GetObjectInformationPostBodyObjectReferenceFormProperties {
		Selector: FormControl<string | null | undefined>,
	}
	export function CreateGetObjectInformationPostBodyObjectReferenceFormGroup() {
		return new FormGroup<GetObjectInformationPostBodyObjectReferenceFormProperties>({
			Selector: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutSchemaFromJsonPutBody {

		/**
		 * The replacement JSON schema.
		 * Required
		 */
		Document: string;
	}
	export interface PutSchemaFromJsonPutBodyFormProperties {

		/**
		 * The replacement JSON schema.
		 * Required
		 */
		Document: FormControl<string | null | undefined>,
	}
	export function CreatePutSchemaFromJsonPutBodyFormGroup() {
		return new FormGroup<PutSchemaFromJsonPutBodyFormProperties>({
			Document: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetTypedLinkFacetInformationPostBody {

		/**
		 * The unique name of the typed link facet.
		 * Required
		 */
		Name: string;
	}
	export interface GetTypedLinkFacetInformationPostBodyFormProperties {

		/**
		 * The unique name of the typed link facet.
		 * Required
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGetTypedLinkFacetInformationPostBodyFormGroup() {
		return new FormGroup<GetTypedLinkFacetInformationPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-zA-Z0-9._-]*$')]),
		});

	}

	export interface ListAppliedSchemaArnsPostBody {

		/**
		 * The ARN of the directory you are listing.
		 * Required
		 */
		DirectoryArn: string;

		/** The response for <code>ListAppliedSchemaArns</code> when this parameter is used will list all minor version ARNs for a major version. */
		SchemaArn?: string | null;

		/** The pagination token. */
		NextToken?: string | null;

		/**
		 * The maximum number of results to retrieve.
		 * Minimum: 1
		 */
		MaxResults?: number | null;
	}
	export interface ListAppliedSchemaArnsPostBodyFormProperties {

		/**
		 * The ARN of the directory you are listing.
		 * Required
		 */
		DirectoryArn: FormControl<string | null | undefined>,

		/** The response for <code>ListAppliedSchemaArns</code> when this parameter is used will list all minor version ARNs for a major version. */
		SchemaArn: FormControl<string | null | undefined>,

		/** The pagination token. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to retrieve.
		 * Minimum: 1
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListAppliedSchemaArnsPostBodyFormGroup() {
		return new FormGroup<ListAppliedSchemaArnsPostBodyFormProperties>({
			DirectoryArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SchemaArn: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface ListAttachedIndicesPostBody {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		TargetReference: ListAttachedIndicesPostBodyTargetReference;

		/** The pagination token. */
		NextToken?: string | null;

		/**
		 * The maximum number of results to retrieve.
		 * Minimum: 1
		 */
		MaxResults?: number | null;
	}
	export interface ListAttachedIndicesPostBodyFormProperties {

		/** The pagination token. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to retrieve.
		 * Minimum: 1
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListAttachedIndicesPostBodyFormGroup() {
		return new FormGroup<ListAttachedIndicesPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface ListAttachedIndicesPostBodyTargetReference {
		Selector?: string | null;
	}
	export interface ListAttachedIndicesPostBodyTargetReferenceFormProperties {
		Selector: FormControl<string | null | undefined>,
	}
	export function CreateListAttachedIndicesPostBodyTargetReferenceFormGroup() {
		return new FormGroup<ListAttachedIndicesPostBodyTargetReferenceFormProperties>({
			Selector: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDevelopmentSchemaArnsPostBody {

		/** The pagination token. */
		NextToken?: string | null;

		/**
		 * The maximum number of results to retrieve.
		 * Minimum: 1
		 */
		MaxResults?: number | null;
	}
	export interface ListDevelopmentSchemaArnsPostBodyFormProperties {

		/** The pagination token. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to retrieve.
		 * Minimum: 1
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDevelopmentSchemaArnsPostBodyFormGroup() {
		return new FormGroup<ListDevelopmentSchemaArnsPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface ListDirectoriesPostBody {

		/** The pagination token. */
		NextToken?: string | null;

		/**
		 * The maximum number of results to retrieve.
		 * Minimum: 1
		 */
		MaxResults?: number | null;

		/** The state of the directories in the list. Can be either Enabled, Disabled, or Deleted. */
		state?: DirectoryState | null;
	}
	export interface ListDirectoriesPostBodyFormProperties {

		/** The pagination token. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to retrieve.
		 * Minimum: 1
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** The state of the directories in the list. Can be either Enabled, Disabled, or Deleted. */
		state: FormControl<DirectoryState | null | undefined>,
	}
	export function CreateListDirectoriesPostBodyFormGroup() {
		return new FormGroup<ListDirectoriesPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			state: new FormControl<DirectoryState | null | undefined>(undefined),
		});

	}

	export interface ListFacetAttributesPostBody {

		/**
		 * The name of the facet whose attributes will be retrieved.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: string;

		/** The pagination token. */
		NextToken?: string | null;

		/**
		 * The maximum number of results to retrieve.
		 * Minimum: 1
		 */
		MaxResults?: number | null;
	}
	export interface ListFacetAttributesPostBodyFormProperties {

		/**
		 * The name of the facet whose attributes will be retrieved.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** The pagination token. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to retrieve.
		 * Minimum: 1
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListFacetAttributesPostBodyFormGroup() {
		return new FormGroup<ListFacetAttributesPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9._-]*$')]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface ListFacetNamesPostBody {

		/** The pagination token. */
		NextToken?: string | null;

		/**
		 * The maximum number of results to retrieve.
		 * Minimum: 1
		 */
		MaxResults?: number | null;
	}
	export interface ListFacetNamesPostBodyFormProperties {

		/** The pagination token. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to retrieve.
		 * Minimum: 1
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListFacetNamesPostBodyFormGroup() {
		return new FormGroup<ListFacetNamesPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface ListIncomingTypedLinksPostBody {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ListIncomingTypedLinksPostBodyObjectReference;

		/** Provides range filters for multiple attributes. When providing ranges to typed link selection, any inexact ranges must be specified at the end. Any attributes that do not have a range specified are presumed to match the entire range. */
		FilterAttributeRanges?: Array<TypedLinkAttributeRange>;

		/** Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link. */
		FilterTypedLink?: ListIncomingTypedLinksPostBodyFilterTypedLink;

		/** The pagination token. */
		NextToken?: string | null;

		/**
		 * The maximum number of results to retrieve.
		 * Minimum: 1
		 */
		MaxResults?: number | null;

		/** The consistency level to execute the request at. */
		ConsistencyLevel?: ConsistencyLevel | null;
	}
	export interface ListIncomingTypedLinksPostBodyFormProperties {

		/** The pagination token. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to retrieve.
		 * Minimum: 1
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** The consistency level to execute the request at. */
		ConsistencyLevel: FormControl<ConsistencyLevel | null | undefined>,
	}
	export function CreateListIncomingTypedLinksPostBodyFormGroup() {
		return new FormGroup<ListIncomingTypedLinksPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			ConsistencyLevel: new FormControl<ConsistencyLevel | null | undefined>(undefined),
		});

	}

	export interface ListIncomingTypedLinksPostBodyObjectReference {
		Selector?: string | null;
	}
	export interface ListIncomingTypedLinksPostBodyObjectReferenceFormProperties {
		Selector: FormControl<string | null | undefined>,
	}
	export function CreateListIncomingTypedLinksPostBodyObjectReferenceFormGroup() {
		return new FormGroup<ListIncomingTypedLinksPostBodyObjectReferenceFormProperties>({
			Selector: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListIncomingTypedLinksPostBodyFilterTypedLink {
		SchemaArn?: string | null;
		TypedLinkName?: string | null;
	}
	export interface ListIncomingTypedLinksPostBodyFilterTypedLinkFormProperties {
		SchemaArn: FormControl<string | null | undefined>,
		TypedLinkName: FormControl<string | null | undefined>,
	}
	export function CreateListIncomingTypedLinksPostBodyFilterTypedLinkFormGroup() {
		return new FormGroup<ListIncomingTypedLinksPostBodyFilterTypedLinkFormProperties>({
			SchemaArn: new FormControl<string | null | undefined>(undefined),
			TypedLinkName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9._-]*$')]),
		});

	}

	export interface ListIndexPostBody {

		/** Specifies the ranges of indexed values that you want to query. */
		RangesOnIndexedValues?: Array<ObjectAttributeRange>;

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		IndexReference: ListIndexPostBodyIndexReference;

		/**
		 * The maximum number of objects in a single page to retrieve from the index during a request. For more information, see <a href="http://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Amazon Cloud Directory Limits</a>.
		 * Minimum: 1
		 */
		MaxResults?: number | null;

		/** The pagination token. */
		NextToken?: string | null;
	}
	export interface ListIndexPostBodyFormProperties {

		/**
		 * The maximum number of objects in a single page to retrieve from the index during a request. For more information, see <a href="http://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Amazon Cloud Directory Limits</a>.
		 * Minimum: 1
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** The pagination token. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIndexPostBodyFormGroup() {
		return new FormGroup<ListIndexPostBodyFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListIndexPostBodyIndexReference {
		Selector?: string | null;
	}
	export interface ListIndexPostBodyIndexReferenceFormProperties {
		Selector: FormControl<string | null | undefined>,
	}
	export function CreateListIndexPostBodyIndexReferenceFormGroup() {
		return new FormGroup<ListIndexPostBodyIndexReferenceFormProperties>({
			Selector: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListManagedSchemaArnsPostBody {

		/** The response for ListManagedSchemaArns. When this parameter is used, all minor version ARNs for a major version are listed. */
		SchemaArn?: string | null;

		/** The pagination token. */
		NextToken?: string | null;

		/**
		 * The maximum number of results to retrieve.
		 * Minimum: 1
		 */
		MaxResults?: number | null;
	}
	export interface ListManagedSchemaArnsPostBodyFormProperties {

		/** The response for ListManagedSchemaArns. When this parameter is used, all minor version ARNs for a major version are listed. */
		SchemaArn: FormControl<string | null | undefined>,

		/** The pagination token. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to retrieve.
		 * Minimum: 1
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListManagedSchemaArnsPostBodyFormGroup() {
		return new FormGroup<ListManagedSchemaArnsPostBodyFormProperties>({
			SchemaArn: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface ListObjectAttributesPostBody {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ListObjectAttributesPostBodyObjectReference;

		/** The pagination token. */
		NextToken?: string | null;

		/**
		 * The maximum number of items to be retrieved in a single call. This is an approximate number.
		 * Minimum: 1
		 */
		MaxResults?: number | null;

		/** A facet. */
		FacetFilter?: ListObjectAttributesPostBodyFacetFilter;
	}
	export interface ListObjectAttributesPostBodyFormProperties {

		/** The pagination token. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of items to be retrieved in a single call. This is an approximate number.
		 * Minimum: 1
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListObjectAttributesPostBodyFormGroup() {
		return new FormGroup<ListObjectAttributesPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface ListObjectAttributesPostBodyObjectReference {
		Selector?: string | null;
	}
	export interface ListObjectAttributesPostBodyObjectReferenceFormProperties {
		Selector: FormControl<string | null | undefined>,
	}
	export function CreateListObjectAttributesPostBodyObjectReferenceFormGroup() {
		return new FormGroup<ListObjectAttributesPostBodyObjectReferenceFormProperties>({
			Selector: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListObjectAttributesPostBodyFacetFilter {
		SchemaArn?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		FacetName?: string | null;
	}
	export interface ListObjectAttributesPostBodyFacetFilterFormProperties {
		SchemaArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		FacetName: FormControl<string | null | undefined>,
	}
	export function CreateListObjectAttributesPostBodyFacetFilterFormGroup() {
		return new FormGroup<ListObjectAttributesPostBodyFacetFilterFormProperties>({
			SchemaArn: new FormControl<string | null | undefined>(undefined),
			FacetName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9._-]*$')]),
		});

	}

	export interface ListObjectChildrenPostBody {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ListObjectChildrenPostBodyObjectReference;

		/** The pagination token. */
		NextToken?: string | null;

		/**
		 * The maximum number of items to be retrieved in a single call. This is an approximate number.
		 * Minimum: 1
		 */
		MaxResults?: number | null;
	}
	export interface ListObjectChildrenPostBodyFormProperties {

		/** The pagination token. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of items to be retrieved in a single call. This is an approximate number.
		 * Minimum: 1
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListObjectChildrenPostBodyFormGroup() {
		return new FormGroup<ListObjectChildrenPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface ListObjectChildrenPostBodyObjectReference {
		Selector?: string | null;
	}
	export interface ListObjectChildrenPostBodyObjectReferenceFormProperties {
		Selector: FormControl<string | null | undefined>,
	}
	export function CreateListObjectChildrenPostBodyObjectReferenceFormGroup() {
		return new FormGroup<ListObjectChildrenPostBodyObjectReferenceFormProperties>({
			Selector: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListObjectParentPathsPostBody {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ListObjectParentPathsPostBodyObjectReference;

		/** The pagination token. */
		NextToken?: string | null;

		/**
		 * The maximum number of items to be retrieved in a single call. This is an approximate number.
		 * Minimum: 1
		 */
		MaxResults?: number | null;
	}
	export interface ListObjectParentPathsPostBodyFormProperties {

		/** The pagination token. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of items to be retrieved in a single call. This is an approximate number.
		 * Minimum: 1
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListObjectParentPathsPostBodyFormGroup() {
		return new FormGroup<ListObjectParentPathsPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface ListObjectParentPathsPostBodyObjectReference {
		Selector?: string | null;
	}
	export interface ListObjectParentPathsPostBodyObjectReferenceFormProperties {
		Selector: FormControl<string | null | undefined>,
	}
	export function CreateListObjectParentPathsPostBodyObjectReferenceFormGroup() {
		return new FormGroup<ListObjectParentPathsPostBodyObjectReferenceFormProperties>({
			Selector: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListObjectParentsPostBody {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ListObjectParentsPostBodyObjectReference;

		/** The pagination token. */
		NextToken?: string | null;

		/**
		 * The maximum number of items to be retrieved in a single call. This is an approximate number.
		 * Minimum: 1
		 */
		MaxResults?: number | null;

		/** When set to True, returns all <a>ListObjectParentsResponse$ParentLinks</a>. There could be multiple links between a parent-child pair. */
		IncludeAllLinksToEachParent?: boolean | null;
	}
	export interface ListObjectParentsPostBodyFormProperties {

		/** The pagination token. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of items to be retrieved in a single call. This is an approximate number.
		 * Minimum: 1
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** When set to True, returns all <a>ListObjectParentsResponse$ParentLinks</a>. There could be multiple links between a parent-child pair. */
		IncludeAllLinksToEachParent: FormControl<boolean | null | undefined>,
	}
	export function CreateListObjectParentsPostBodyFormGroup() {
		return new FormGroup<ListObjectParentsPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			IncludeAllLinksToEachParent: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListObjectParentsPostBodyObjectReference {
		Selector?: string | null;
	}
	export interface ListObjectParentsPostBodyObjectReferenceFormProperties {
		Selector: FormControl<string | null | undefined>,
	}
	export function CreateListObjectParentsPostBodyObjectReferenceFormGroup() {
		return new FormGroup<ListObjectParentsPostBodyObjectReferenceFormProperties>({
			Selector: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListObjectPoliciesPostBody {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ListObjectPoliciesPostBodyObjectReference;

		/** The pagination token. */
		NextToken?: string | null;

		/**
		 * The maximum number of items to be retrieved in a single call. This is an approximate number.
		 * Minimum: 1
		 */
		MaxResults?: number | null;
	}
	export interface ListObjectPoliciesPostBodyFormProperties {

		/** The pagination token. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of items to be retrieved in a single call. This is an approximate number.
		 * Minimum: 1
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListObjectPoliciesPostBodyFormGroup() {
		return new FormGroup<ListObjectPoliciesPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface ListObjectPoliciesPostBodyObjectReference {
		Selector?: string | null;
	}
	export interface ListObjectPoliciesPostBodyObjectReferenceFormProperties {
		Selector: FormControl<string | null | undefined>,
	}
	export function CreateListObjectPoliciesPostBodyObjectReferenceFormGroup() {
		return new FormGroup<ListObjectPoliciesPostBodyObjectReferenceFormProperties>({
			Selector: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListOutgoingTypedLinksPostBody {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ListOutgoingTypedLinksPostBodyObjectReference;

		/** Provides range filters for multiple attributes. When providing ranges to typed link selection, any inexact ranges must be specified at the end. Any attributes that do not have a range specified are presumed to match the entire range. */
		FilterAttributeRanges?: Array<TypedLinkAttributeRange>;

		/** Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link. */
		FilterTypedLink?: ListOutgoingTypedLinksPostBodyFilterTypedLink;

		/** The pagination token. */
		NextToken?: string | null;

		/**
		 * The maximum number of results to retrieve.
		 * Minimum: 1
		 */
		MaxResults?: number | null;

		/** The consistency level to execute the request at. */
		ConsistencyLevel?: ConsistencyLevel | null;
	}
	export interface ListOutgoingTypedLinksPostBodyFormProperties {

		/** The pagination token. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to retrieve.
		 * Minimum: 1
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** The consistency level to execute the request at. */
		ConsistencyLevel: FormControl<ConsistencyLevel | null | undefined>,
	}
	export function CreateListOutgoingTypedLinksPostBodyFormGroup() {
		return new FormGroup<ListOutgoingTypedLinksPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			ConsistencyLevel: new FormControl<ConsistencyLevel | null | undefined>(undefined),
		});

	}

	export interface ListOutgoingTypedLinksPostBodyObjectReference {
		Selector?: string | null;
	}
	export interface ListOutgoingTypedLinksPostBodyObjectReferenceFormProperties {
		Selector: FormControl<string | null | undefined>,
	}
	export function CreateListOutgoingTypedLinksPostBodyObjectReferenceFormGroup() {
		return new FormGroup<ListOutgoingTypedLinksPostBodyObjectReferenceFormProperties>({
			Selector: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListOutgoingTypedLinksPostBodyFilterTypedLink {
		SchemaArn?: string | null;
		TypedLinkName?: string | null;
	}
	export interface ListOutgoingTypedLinksPostBodyFilterTypedLinkFormProperties {
		SchemaArn: FormControl<string | null | undefined>,
		TypedLinkName: FormControl<string | null | undefined>,
	}
	export function CreateListOutgoingTypedLinksPostBodyFilterTypedLinkFormGroup() {
		return new FormGroup<ListOutgoingTypedLinksPostBodyFilterTypedLinkFormProperties>({
			SchemaArn: new FormControl<string | null | undefined>(undefined),
			TypedLinkName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9._-]*$')]),
		});

	}

	export interface ListPolicyAttachmentsPostBody {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		PolicyReference: ListPolicyAttachmentsPostBodyPolicyReference;

		/** The pagination token. */
		NextToken?: string | null;

		/**
		 * The maximum number of items to be retrieved in a single call. This is an approximate number.
		 * Minimum: 1
		 */
		MaxResults?: number | null;
	}
	export interface ListPolicyAttachmentsPostBodyFormProperties {

		/** The pagination token. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of items to be retrieved in a single call. This is an approximate number.
		 * Minimum: 1
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListPolicyAttachmentsPostBodyFormGroup() {
		return new FormGroup<ListPolicyAttachmentsPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface ListPolicyAttachmentsPostBodyPolicyReference {
		Selector?: string | null;
	}
	export interface ListPolicyAttachmentsPostBodyPolicyReferenceFormProperties {
		Selector: FormControl<string | null | undefined>,
	}
	export function CreateListPolicyAttachmentsPostBodyPolicyReferenceFormGroup() {
		return new FormGroup<ListPolicyAttachmentsPostBodyPolicyReferenceFormProperties>({
			Selector: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPublishedSchemaArnsPostBody {

		/** The response for <code>ListPublishedSchemaArns</code> when this parameter is used will list all minor version ARNs for a major version. */
		SchemaArn?: string | null;

		/** The pagination token. */
		NextToken?: string | null;

		/**
		 * The maximum number of results to retrieve.
		 * Minimum: 1
		 */
		MaxResults?: number | null;
	}
	export interface ListPublishedSchemaArnsPostBodyFormProperties {

		/** The response for <code>ListPublishedSchemaArns</code> when this parameter is used will list all minor version ARNs for a major version. */
		SchemaArn: FormControl<string | null | undefined>,

		/** The pagination token. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to retrieve.
		 * Minimum: 1
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListPublishedSchemaArnsPostBodyFormGroup() {
		return new FormGroup<ListPublishedSchemaArnsPostBodyFormProperties>({
			SchemaArn: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface ListTagsForResourcePostBody {

		/**
		 * The Amazon Resource Name (ARN) of the resource. Tagging is only supported for directories.
		 * Required
		 */
		ResourceArn: string;

		/** The pagination token. This is for future use. Currently pagination is not supported for tagging. */
		NextToken?: string | null;

		/**
		 * The <code>MaxResults</code> parameter sets the maximum number of results returned in a single page. This is for future use and is not supported currently.
		 * Minimum: 50
		 */
		MaxResults?: number | null;
	}
	export interface ListTagsForResourcePostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the resource. Tagging is only supported for directories.
		 * Required
		 */
		ResourceArn: FormControl<string | null | undefined>,

		/** The pagination token. This is for future use. Currently pagination is not supported for tagging. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The <code>MaxResults</code> parameter sets the maximum number of results returned in a single page. This is for future use and is not supported currently.
		 * Minimum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTagsForResourcePostBodyFormGroup() {
		return new FormGroup<ListTagsForResourcePostBodyFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(50)]),
		});

	}

	export interface ListTypedLinkFacetAttributesPostBody {

		/**
		 * The unique name of the typed link facet.
		 * Required
		 */
		Name: string;

		/** The pagination token. */
		NextToken?: string | null;

		/**
		 * The maximum number of results to retrieve.
		 * Minimum: 1
		 */
		MaxResults?: number | null;
	}
	export interface ListTypedLinkFacetAttributesPostBodyFormProperties {

		/**
		 * The unique name of the typed link facet.
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/** The pagination token. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to retrieve.
		 * Minimum: 1
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTypedLinkFacetAttributesPostBodyFormGroup() {
		return new FormGroup<ListTypedLinkFacetAttributesPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-zA-Z0-9._-]*$')]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface ListTypedLinkFacetNamesPostBody {

		/** The pagination token. */
		NextToken?: string | null;

		/**
		 * The maximum number of results to retrieve.
		 * Minimum: 1
		 */
		MaxResults?: number | null;
	}
	export interface ListTypedLinkFacetNamesPostBodyFormProperties {

		/** The pagination token. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to retrieve.
		 * Minimum: 1
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTypedLinkFacetNamesPostBodyFormGroup() {
		return new FormGroup<ListTypedLinkFacetNamesPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface LookupPolicyPostBody {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: LookupPolicyPostBodyObjectReference;

		/** The token to request the next page of results. */
		NextToken?: string | null;

		/**
		 * The maximum number of items to be retrieved in a single call. This is an approximate number.
		 * Minimum: 1
		 */
		MaxResults?: number | null;
	}
	export interface LookupPolicyPostBodyFormProperties {

		/** The token to request the next page of results. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of items to be retrieved in a single call. This is an approximate number.
		 * Minimum: 1
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateLookupPolicyPostBodyFormGroup() {
		return new FormGroup<LookupPolicyPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface LookupPolicyPostBodyObjectReference {
		Selector?: string | null;
	}
	export interface LookupPolicyPostBodyObjectReferenceFormProperties {
		Selector: FormControl<string | null | undefined>,
	}
	export function CreateLookupPolicyPostBodyObjectReferenceFormGroup() {
		return new FormGroup<LookupPolicyPostBodyObjectReferenceFormProperties>({
			Selector: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PublishSchemaPutBody {

		/**
		 * The major version under which the schema will be published. Schemas have both a major and minor version associated with them.
		 * Required
		 * Max length: 10
		 * Min length: 1
		 */
		Version: string;

		/**
		 * The minor version under which the schema will be published. This parameter is recommended. Schemas have both a major and minor version associated with them.
		 * Max length: 10
		 * Min length: 1
		 */
		MinorVersion?: string | null;

		/**
		 * The new name under which the schema will be published. If this is not provided, the development schema is considered.
		 * Max length: 32
		 * Min length: 1
		 */
		Name?: string | null;
	}
	export interface PublishSchemaPutBodyFormProperties {

		/**
		 * The major version under which the schema will be published. Schemas have both a major and minor version associated with them.
		 * Required
		 * Max length: 10
		 * Min length: 1
		 */
		Version: FormControl<string | null | undefined>,

		/**
		 * The minor version under which the schema will be published. This parameter is recommended. Schemas have both a major and minor version associated with them.
		 * Max length: 10
		 * Min length: 1
		 */
		MinorVersion: FormControl<string | null | undefined>,

		/**
		 * The new name under which the schema will be published. If this is not provided, the development schema is considered.
		 * Max length: 32
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreatePublishSchemaPutBodyFormGroup() {
		return new FormGroup<PublishSchemaPutBodyFormProperties>({
			Version: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(10), Validators.pattern('^[a-zA-Z0-9._-]*$')]),
			MinorVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(10), Validators.pattern('^[a-zA-Z0-9._-]*$')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(32), Validators.pattern('^[a-zA-Z0-9._-]*$')]),
		});

	}

	export interface RemoveFacetFromObjectPutBody {

		/**
		 * A facet.
		 * Required
		 */
		SchemaFacet: RemoveFacetFromObjectPutBodySchemaFacet;

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: RemoveFacetFromObjectPutBodyObjectReference;
	}
	export interface RemoveFacetFromObjectPutBodyFormProperties {
	}
	export function CreateRemoveFacetFromObjectPutBodyFormGroup() {
		return new FormGroup<RemoveFacetFromObjectPutBodyFormProperties>({
		});

	}

	export interface RemoveFacetFromObjectPutBodySchemaFacet {
		SchemaArn?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		FacetName?: string | null;
	}
	export interface RemoveFacetFromObjectPutBodySchemaFacetFormProperties {
		SchemaArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		FacetName: FormControl<string | null | undefined>,
	}
	export function CreateRemoveFacetFromObjectPutBodySchemaFacetFormGroup() {
		return new FormGroup<RemoveFacetFromObjectPutBodySchemaFacetFormProperties>({
			SchemaArn: new FormControl<string | null | undefined>(undefined),
			FacetName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9._-]*$')]),
		});

	}

	export interface RemoveFacetFromObjectPutBodyObjectReference {
		Selector?: string | null;
	}
	export interface RemoveFacetFromObjectPutBodyObjectReferenceFormProperties {
		Selector: FormControl<string | null | undefined>,
	}
	export function CreateRemoveFacetFromObjectPutBodyObjectReferenceFormGroup() {
		return new FormGroup<RemoveFacetFromObjectPutBodyObjectReferenceFormProperties>({
			Selector: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourcePutBody {

		/**
		 * The Amazon Resource Name (ARN) of the resource. Tagging is only supported for directories.
		 * Required
		 */
		ResourceArn: string;

		/**
		 * A list of tag key-value pairs.
		 * Required
		 */
		Tags: Array<Tag>;
	}
	export interface TagResourcePutBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the resource. Tagging is only supported for directories.
		 * Required
		 */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourcePutBodyFormGroup() {
		return new FormGroup<TagResourcePutBodyFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UntagResourcePutBody {

		/**
		 * The Amazon Resource Name (ARN) of the resource. Tagging is only supported for directories.
		 * Required
		 */
		ResourceArn: string;

		/**
		 * Keys of the tag that need to be removed from the resource.
		 * Required
		 */
		TagKeys: Array<string>;
	}
	export interface UntagResourcePutBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the resource. Tagging is only supported for directories.
		 * Required
		 */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourcePutBodyFormGroup() {
		return new FormGroup<UntagResourcePutBodyFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateLinkAttributesPostBody {

		/**
		 * Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.
		 * Required
		 */
		TypedLinkSpecifier: UpdateLinkAttributesPostBodyTypedLinkSpecifier;

		/**
		 * The attributes update structure.
		 * Required
		 */
		AttributeUpdates: Array<LinkAttributeUpdate>;
	}
	export interface UpdateLinkAttributesPostBodyFormProperties {
	}
	export function CreateUpdateLinkAttributesPostBodyFormGroup() {
		return new FormGroup<UpdateLinkAttributesPostBodyFormProperties>({
		});

	}

	export interface UpdateLinkAttributesPostBodyTypedLinkSpecifier {

		/** Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link. */
		TypedLinkFacet?: TypedLinkSchemaAndFacetName;

		/** The reference that identifies an object. */
		SourceObjectReference?: ObjectReference;

		/** The reference that identifies an object. */
		TargetObjectReference?: ObjectReference;
		IdentityAttributeValues?: Array<AttributeNameAndValue>;
	}
	export interface UpdateLinkAttributesPostBodyTypedLinkSpecifierFormProperties {
	}
	export function CreateUpdateLinkAttributesPostBodyTypedLinkSpecifierFormGroup() {
		return new FormGroup<UpdateLinkAttributesPostBodyTypedLinkSpecifierFormProperties>({
		});

	}

	export interface UpdateObjectAttributesPutBody {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: UpdateObjectAttributesPutBodyObjectReference;

		/**
		 * The attributes update structure.
		 * Required
		 */
		AttributeUpdates: Array<ObjectAttributeUpdate>;
	}
	export interface UpdateObjectAttributesPutBodyFormProperties {
	}
	export function CreateUpdateObjectAttributesPutBodyFormGroup() {
		return new FormGroup<UpdateObjectAttributesPutBodyFormProperties>({
		});

	}

	export interface UpdateObjectAttributesPutBodyObjectReference {
		Selector?: string | null;
	}
	export interface UpdateObjectAttributesPutBodyObjectReferenceFormProperties {
		Selector: FormControl<string | null | undefined>,
	}
	export function CreateUpdateObjectAttributesPutBodyObjectReferenceFormGroup() {
		return new FormGroup<UpdateObjectAttributesPutBodyObjectReferenceFormProperties>({
			Selector: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSchemaPutBody {

		/**
		 * The name of the schema.
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		Name: string;
	}
	export interface UpdateSchemaPutBodyFormProperties {

		/**
		 * The name of the schema.
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSchemaPutBodyFormGroup() {
		return new FormGroup<UpdateSchemaPutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(32), Validators.pattern('^[a-zA-Z0-9._-]*$')]),
		});

	}

	export interface UpdateTypedLinkFacetPutBody {

		/**
		 * The unique name of the typed link facet.
		 * Required
		 */
		Name: string;

		/**
		 * Attributes update structure.
		 * Required
		 */
		AttributeUpdates: Array<TypedLinkFacetAttributeUpdate>;

		/**
		 * The order of identity attributes for the facet, from most significant to least significant. The ability to filter typed links considers the order that the attributes are defined on the typed link facet. When providing ranges to a typed link selection, any inexact ranges must be specified at the end. Any attributes that do not have a range specified are presumed to match the entire range. Filters are interpreted in the order of the attributes on the typed link facet, not the order in which they are supplied to any API calls. For more information about identity attributes, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
		 * Required
		 */
		IdentityAttributeOrder: Array<string>;
	}
	export interface UpdateTypedLinkFacetPutBodyFormProperties {

		/**
		 * The unique name of the typed link facet.
		 * Required
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTypedLinkFacetPutBodyFormGroup() {
		return new FormGroup<UpdateTypedLinkFacetPutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-zA-Z0-9._-]*$')]),
		});

	}

	export interface UpgradeAppliedSchemaPutBody {

		/**
		 * The revision of the published schema to upgrade the directory to.
		 * Required
		 */
		PublishedSchemaArn: string;

		/**
		 * The ARN for the directory to which the upgraded schema will be applied.
		 * Required
		 */
		DirectoryArn: string;

		/** Used for testing whether the major version schemas are backward compatible or not. If schema compatibility fails, an exception would be thrown else the call would succeed but no changes will be saved. This parameter is optional. */
		DryRun?: boolean | null;
	}
	export interface UpgradeAppliedSchemaPutBodyFormProperties {

		/**
		 * The revision of the published schema to upgrade the directory to.
		 * Required
		 */
		PublishedSchemaArn: FormControl<string | null | undefined>,

		/**
		 * The ARN for the directory to which the upgraded schema will be applied.
		 * Required
		 */
		DirectoryArn: FormControl<string | null | undefined>,

		/** Used for testing whether the major version schemas are backward compatible or not. If schema compatibility fails, an exception would be thrown else the call would succeed but no changes will be saved. This parameter is optional. */
		DryRun: FormControl<boolean | null | undefined>,
	}
	export function CreateUpgradeAppliedSchemaPutBodyFormGroup() {
		return new FormGroup<UpgradeAppliedSchemaPutBodyFormProperties>({
			PublishedSchemaArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DirectoryArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DryRun: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpgradePublishedSchemaPutBody {

		/**
		 * The ARN of the development schema with the changes used for the upgrade.
		 * Required
		 */
		DevelopmentSchemaArn: string;

		/**
		 * The ARN of the published schema to be upgraded.
		 * Required
		 */
		PublishedSchemaArn: string;

		/**
		 * Identifies the minor version of the published schema that will be created. This parameter is NOT optional.
		 * Required
		 * Max length: 10
		 * Min length: 1
		 */
		MinorVersion: string;

		/** Used for testing whether the Development schema provided is backwards compatible, or not, with the publish schema provided by the user to be upgraded. If schema compatibility fails, an exception would be thrown else the call would succeed. This parameter is optional and defaults to false. */
		DryRun?: boolean | null;
	}
	export interface UpgradePublishedSchemaPutBodyFormProperties {

		/**
		 * The ARN of the development schema with the changes used for the upgrade.
		 * Required
		 */
		DevelopmentSchemaArn: FormControl<string | null | undefined>,

		/**
		 * The ARN of the published schema to be upgraded.
		 * Required
		 */
		PublishedSchemaArn: FormControl<string | null | undefined>,

		/**
		 * Identifies the minor version of the published schema that will be created. This parameter is NOT optional.
		 * Required
		 * Max length: 10
		 * Min length: 1
		 */
		MinorVersion: FormControl<string | null | undefined>,

		/** Used for testing whether the Development schema provided is backwards compatible, or not, with the publish schema provided by the user to be upgraded. If schema compatibility fails, an exception would be thrown else the call would succeed. This parameter is optional and defaults to false. */
		DryRun: FormControl<boolean | null | undefined>,
	}
	export function CreateUpgradePublishedSchemaPutBodyFormGroup() {
		return new FormGroup<UpgradePublishedSchemaPutBodyFormProperties>({
			DevelopmentSchemaArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PublishedSchemaArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MinorVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(10), Validators.pattern('^[a-zA-Z0-9._-]*$')]),
			DryRun: new FormControl<boolean | null | undefined>(undefined),
		});

	}

}

