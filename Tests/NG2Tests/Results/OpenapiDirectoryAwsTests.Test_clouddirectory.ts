import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface AddFacetToObjectResponse {
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


	/** A unique identifier for an attribute. */
	export interface AttributeKey {
		SchemaArn: string;
		FacetName: string;
		Name: string;
	}


	/** Represents the data for a typed attribute. You can set one, and only one, of the elements. Each attribute in an item is a name-value pair. Attributes have a single value. */
	export interface TypedAttributeValue {
		StringValue?: string | null;
		BinaryValue?: string | null;
		BooleanValue?: boolean | null;
		NumberValue?: string | null;
		DatetimeValue?: Date | null;
	}

	export interface InternalServiceException {
	}

	export interface InvalidArnException {
	}

	export interface RetryableConflictException {
	}

	export interface ValidationException {
	}

	export interface LimitExceededException {
	}

	export interface AccessDeniedException {
	}

	export interface DirectoryNotEnabledException {
	}

	export interface ResourceNotFoundException {
	}

	export interface FacetValidationException {
	}

	export interface ApplySchemaResponse {
		AppliedSchemaArn?: string | null;
		DirectoryArn?: string | null;
	}

	export interface SchemaAlreadyExistsException {
	}

	export interface InvalidAttachmentException {
	}

	export interface AttachObjectResponse {
		AttachedObjectIdentifier?: string | null;
	}

	export interface LinkNameAlreadyInUseException {
	}

	export interface AttachPolicyResponse {
	}

	export interface NotPolicyException {
	}

	export interface AttachToIndexResponse {
		AttachedObjectIdentifier?: string | null;
	}

	export interface IndexedAttributeMissingException {
	}

	export interface NotIndexException {
	}

	export interface AttachTypedLinkResponse {

		/** Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch. */
		TypedLinkSpecifier?: TypedLinkSpecifier | null;
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
		IdentityAttributeValues: Array<AttributeNameAndValue>;
	}


	/** Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link. */
	export interface TypedLinkSchemaAndFacetName {
		SchemaArn: string;
		TypedLinkName: string;
	}


	/** The reference that identifies an object. */
	export interface ObjectReference {
		Selector?: string | null;
	}


	/** Identifies the attribute name and value for a typed link. */
	export interface AttributeNameAndValue {
		AttributeName: string;

		/**
		 * Represents the data for a typed attribute. You can set one, and only one, of the elements. Each attribute in an item is a name-value pair. Attributes have a single value.
		 * Required
		 */
		Value: TypedAttributeValue;
	}

	export interface BatchReadResponse {
		Responses?: Array<BatchReadOperationResponse> | null;
	}


	/** Represents the output of a <code>BatchRead</code> response operation. */
	export interface BatchReadOperationResponse {

		/** Represents the output of a <code>BatchRead</code> success response operation. */
		SuccessfulResponse?: BatchReadSuccessfulResponse | null;

		/** The batch read exception structure, which contains the exception type and message. */
		ExceptionResponse?: BatchReadException | null;
	}


	/** Represents the output of a <code>BatchRead</code> success response operation. */
	export interface BatchReadSuccessfulResponse {

		/** Represents the output of a <a>ListObjectAttributes</a> response operation. */
		ListObjectAttributes?: BatchListObjectAttributesResponse | null;

		/** Represents the output of a <a>ListObjectChildren</a> response operation. */
		ListObjectChildren?: BatchListObjectChildrenResponse | null;

		/** Represents the output of a <a>GetObjectInformation</a> response operation. */
		GetObjectInformation?: BatchGetObjectInformationResponse | null;

		/** Represents the output of a <a>GetObjectAttributes</a> response operation. */
		GetObjectAttributes?: BatchGetObjectAttributesResponse | null;

		/** Represents the output of a <a>ListAttachedIndices</a> response operation. */
		ListAttachedIndices?: BatchListAttachedIndicesResponse | null;

		/** Represents the output of a <a>ListObjectParentPaths</a> response operation. */
		ListObjectParentPaths?: BatchListObjectParentPathsResponse | null;

		/** Represents the output of a <a>ListObjectPolicies</a> response operation. */
		ListObjectPolicies?: BatchListObjectPoliciesResponse | null;

		/** Represents the output of a <a>ListPolicyAttachments</a> response operation. */
		ListPolicyAttachments?: BatchListPolicyAttachmentsResponse | null;

		/** Represents the output of a <a>LookupPolicy</a> response operation. */
		LookupPolicy?: BatchLookupPolicyResponse | null;

		/** Represents the output of a <a>ListIndex</a> response operation. */
		ListIndex?: BatchListIndexResponse | null;

		/** Represents the output of a <a>ListOutgoingTypedLinks</a> response operation. */
		ListOutgoingTypedLinks?: BatchListOutgoingTypedLinksResponse | null;

		/** Represents the output of a <a>ListIncomingTypedLinks</a> response operation. */
		ListIncomingTypedLinks?: BatchListIncomingTypedLinksResponse | null;

		/** Represents the output of a <a>GetLinkAttributes</a> response operation. */
		GetLinkAttributes?: BatchGetLinkAttributesResponse | null;
		ListObjectParents?: BatchListObjectParentsResponse | null;
	}


	/** Represents the output of a <a>ListObjectAttributes</a> response operation. */
	export interface BatchListObjectAttributesResponse {
		Attributes?: Array<AttributeKeyAndValue> | null;
		NextToken?: string | null;
	}


	/** Represents the output of a <a>ListObjectChildren</a> response operation. */
	export interface BatchListObjectChildrenResponse {
		Children?: LinkNameToObjectIdentifierMap | null;
		NextToken?: string | null;
	}

	export interface LinkNameToObjectIdentifierMap {
	}


	/** Represents the output of a <a>GetObjectInformation</a> response operation. */
	export interface BatchGetObjectInformationResponse {
		SchemaFacets?: Array<SchemaFacet> | null;
		ObjectIdentifier?: string | null;
	}


	/** A facet. */
	export interface SchemaFacet {
		SchemaArn?: string | null;
		FacetName?: string | null;
	}


	/** Represents the output of a <a>GetObjectAttributes</a> response operation. */
	export interface BatchGetObjectAttributesResponse {
		Attributes?: Array<AttributeKeyAndValue> | null;
	}


	/** Represents the output of a <a>ListAttachedIndices</a> response operation. */
	export interface BatchListAttachedIndicesResponse {
		IndexAttachments?: Array<IndexAttachment> | null;
		NextToken?: string | null;
	}


	/** Represents an index and an attached object. */
	export interface IndexAttachment {
		IndexedAttributes?: Array<AttributeKeyAndValue> | null;
		ObjectIdentifier?: string | null;
	}


	/** Represents the output of a <a>ListObjectParentPaths</a> response operation. */
	export interface BatchListObjectParentPathsResponse {
		PathToObjectIdentifiersList?: Array<PathToObjectIdentifiers> | null;
		NextToken?: string | null;
	}


	/** Returns the path to the <code>ObjectIdentifiers</code> that is associated with the directory. */
	export interface PathToObjectIdentifiers {
		Path?: string | null;
		ObjectIdentifiers?: Array<string> | null;
	}


	/** Represents the output of a <a>ListObjectPolicies</a> response operation. */
	export interface BatchListObjectPoliciesResponse {
		AttachedPolicyIds?: Array<string> | null;
		NextToken?: string | null;
	}


	/** Represents the output of a <a>ListPolicyAttachments</a> response operation. */
	export interface BatchListPolicyAttachmentsResponse {
		ObjectIdentifiers?: Array<string> | null;
		NextToken?: string | null;
	}


	/** Represents the output of a <a>LookupPolicy</a> response operation. */
	export interface BatchLookupPolicyResponse {
		PolicyToPathList?: Array<PolicyToPath> | null;
		NextToken?: string | null;
	}


	/** Used when a regular object exists in a <a>Directory</a> and you want to find all of the policies that are associated with that object and the parent to that object. */
	export interface PolicyToPath {
		Path?: string | null;
		Policies?: Array<PolicyAttachment> | null;
	}


	/** Contains the <code>PolicyType</code>, <code>PolicyId</code>, and the <code>ObjectIdentifier</code> to which it is attached. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>. */
	export interface PolicyAttachment {
		PolicyId?: string | null;
		ObjectIdentifier?: string | null;
		PolicyType?: string | null;
	}


	/** Represents the output of a <a>ListIndex</a> response operation. */
	export interface BatchListIndexResponse {
		IndexAttachments?: Array<IndexAttachment> | null;
		NextToken?: string | null;
	}


	/** Represents the output of a <a>ListOutgoingTypedLinks</a> response operation. */
	export interface BatchListOutgoingTypedLinksResponse {
		TypedLinkSpecifiers?: Array<TypedLinkSpecifier> | null;
		NextToken?: string | null;
	}


	/** Represents the output of a <a>ListIncomingTypedLinks</a> response operation. */
	export interface BatchListIncomingTypedLinksResponse {
		LinkSpecifiers?: Array<TypedLinkSpecifier> | null;
		NextToken?: string | null;
	}


	/** Represents the output of a <a>GetLinkAttributes</a> response operation. */
	export interface BatchGetLinkAttributesResponse {
		Attributes?: Array<AttributeKeyAndValue> | null;
	}

	export interface BatchListObjectParentsResponse {
		ParentLinks?: Array<ObjectIdentifierAndLinkNameTuple> | null;
		NextToken?: string | null;
	}


	/** A pair of ObjectIdentifier and LinkName. */
	export interface ObjectIdentifierAndLinkNameTuple {
		ObjectIdentifier?: string | null;
		LinkName?: string | null;
	}


	/** The batch read exception structure, which contains the exception type and message. */
	export interface BatchReadException {
		Type?: BatchReadExceptionType | null;
		Message?: string | null;
	}

	export enum BatchReadExceptionType { ValidationException = 0, InvalidArnException = 1, ResourceNotFoundException = 2, InvalidNextTokenException = 3, AccessDeniedException = 4, NotNodeException = 5, FacetValidationException = 6, CannotListParentOfRootException = 7, NotIndexException = 8, NotPolicyException = 9, DirectoryNotEnabledException = 10, LimitExceededException = 11, InternalServiceException = 12 }


	/** Represents the output of a <code>BatchRead</code> operation. */
	export interface BatchReadOperation {

		/** Represents the output of a <a>ListObjectAttributes</a> operation. */
		ListObjectAttributes?: BatchListObjectAttributes | null;

		/** Represents the output of a <a>ListObjectChildren</a> operation. */
		ListObjectChildren?: BatchListObjectChildren | null;

		/** Lists indices attached to an object inside a <a>BatchRead</a> operation. For more information, see <a>ListAttachedIndices</a> and <a>BatchReadRequest$Operations</a>. */
		ListAttachedIndices?: BatchListAttachedIndices | null;

		/** Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects inside a <a>BatchRead</a> operation. For more information, see <a>ListObjectParentPaths</a> and <a>BatchReadRequest$Operations</a>. */
		ListObjectParentPaths?: BatchListObjectParentPaths | null;

		/** Retrieves metadata about an object inside a <a>BatchRead</a> operation. For more information, see <a>GetObjectInformation</a> and <a>BatchReadRequest$Operations</a>. */
		GetObjectInformation?: BatchGetObjectInformation | null;

		/** Retrieves attributes within a facet that are associated with an object inside an <a>BatchRead</a> operation. For more information, see <a>GetObjectAttributes</a> and <a>BatchReadRequest$Operations</a>. */
		GetObjectAttributes?: BatchGetObjectAttributes | null;
		ListObjectParents?: BatchListObjectParents | null;

		/** Returns policies attached to an object in pagination fashion inside a <a>BatchRead</a> operation. For more information, see <a>ListObjectPolicies</a> and <a>BatchReadRequest$Operations</a>. */
		ListObjectPolicies?: BatchListObjectPolicies | null;

		/** Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached inside a <a>BatchRead</a> operation. For more information, see <a>ListPolicyAttachments</a> and <a>BatchReadRequest$Operations</a>. */
		ListPolicyAttachments?: BatchListPolicyAttachments | null;

		/** Lists all policies from the root of the Directory to the object specified inside a <a>BatchRead</a> operation. For more information, see <a>LookupPolicy</a> and <a>BatchReadRequest$Operations</a>. */
		LookupPolicy?: BatchLookupPolicy | null;

		/** Lists objects attached to the specified index inside a <a>BatchRead</a> operation. For more information, see <a>ListIndex</a> and <a>BatchReadRequest$Operations</a>. */
		ListIndex?: BatchListIndex | null;

		/** Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object inside a <a>BatchRead</a> operation. For more information, see <a>ListOutgoingTypedLinks</a> and <a>BatchReadRequest$Operations</a>. */
		ListOutgoingTypedLinks?: BatchListOutgoingTypedLinks | null;

		/** Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a> information for an object inside a <a>BatchRead</a> operation. For more information, see <a>ListIncomingTypedLinks</a> and <a>BatchReadRequest$Operations</a>. */
		ListIncomingTypedLinks?: BatchListIncomingTypedLinks | null;

		/** Retrieves attributes that are associated with a typed link inside a <a>BatchRead</a> operation. For more information, see <a>GetLinkAttributes</a> and <a>BatchReadRequest$Operations</a>. */
		GetLinkAttributes?: BatchGetLinkAttributes | null;
	}


	/** Represents the output of a <a>ListObjectAttributes</a> operation. */
	export interface BatchListObjectAttributes {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
		NextToken?: string | null;
		MaxResults?: number | null;

		/** A facet. */
		FacetFilter?: SchemaFacet | null;
	}


	/** Represents the output of a <a>ListObjectChildren</a> operation. */
	export interface BatchListObjectChildren {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
		NextToken?: string | null;
		MaxResults?: number | null;
	}


	/** Lists indices attached to an object inside a <a>BatchRead</a> operation. For more information, see <a>ListAttachedIndices</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchListAttachedIndices {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		TargetReference: ObjectReference;
		NextToken?: string | null;
		MaxResults?: number | null;
	}


	/** Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects inside a <a>BatchRead</a> operation. For more information, see <a>ListObjectParentPaths</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchListObjectParentPaths {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
		NextToken?: string | null;
		MaxResults?: number | null;
	}


	/** Retrieves metadata about an object inside a <a>BatchRead</a> operation. For more information, see <a>GetObjectInformation</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchGetObjectInformation {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
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
		AttributeNames: Array<string>;
	}

	export interface BatchListObjectParents {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
		NextToken?: string | null;
		MaxResults?: number | null;
	}


	/** Returns policies attached to an object in pagination fashion inside a <a>BatchRead</a> operation. For more information, see <a>ListObjectPolicies</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchListObjectPolicies {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
		NextToken?: string | null;
		MaxResults?: number | null;
	}


	/** Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached inside a <a>BatchRead</a> operation. For more information, see <a>ListPolicyAttachments</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchListPolicyAttachments {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		PolicyReference: ObjectReference;
		NextToken?: string | null;
		MaxResults?: number | null;
	}


	/** Lists all policies from the root of the Directory to the object specified inside a <a>BatchRead</a> operation. For more information, see <a>LookupPolicy</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchLookupPolicy {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
		NextToken?: string | null;
		MaxResults?: number | null;
	}


	/** Lists objects attached to the specified index inside a <a>BatchRead</a> operation. For more information, see <a>ListIndex</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchListIndex {
		RangesOnIndexedValues?: Array<ObjectAttributeRange> | null;

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		IndexReference: ObjectReference;
		MaxResults?: number | null;
		NextToken?: string | null;
	}


	/** A range of attributes. */
	export interface ObjectAttributeRange {

		/** A unique identifier for an attribute. */
		AttributeKey?: AttributeKey | null;

		/** A range of attribute values. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_range_filters.html">Range Filters</a>. */
		Range?: TypedAttributeValueRange | null;
	}


	/** A range of attribute values. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_range_filters.html">Range Filters</a>. */
	export interface TypedAttributeValueRange {
		StartMode: TypedAttributeValueRangeStartMode;

		/** Represents the data for a typed attribute. You can set one, and only one, of the elements. Each attribute in an item is a name-value pair. Attributes have a single value. */
		StartValue?: TypedAttributeValue | null;
		EndMode: TypedAttributeValueRangeStartMode;

		/** Represents the data for a typed attribute. You can set one, and only one, of the elements. Each attribute in an item is a name-value pair. Attributes have a single value. */
		EndValue?: TypedAttributeValue | null;
	}

	export enum TypedAttributeValueRangeStartMode { FIRST = 0, LAST = 1, LAST_BEFORE_MISSING_VALUES = 2, INCLUSIVE = 3, EXCLUSIVE = 4 }


	/** Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object inside a <a>BatchRead</a> operation. For more information, see <a>ListOutgoingTypedLinks</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchListOutgoingTypedLinks {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
		FilterAttributeRanges?: Array<TypedLinkAttributeRange> | null;

		/** Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link. */
		FilterTypedLink?: TypedLinkSchemaAndFacetName | null;
		NextToken?: string | null;
		MaxResults?: number | null;
	}


	/** Identifies the range of attributes that are used by a specified filter. */
	export interface TypedLinkAttributeRange {
		AttributeName?: string | null;

		/**
		 * A range of attribute values. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_range_filters.html">Range Filters</a>.
		 * Required
		 */
		Range: TypedAttributeValueRange;
	}


	/** Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a> information for an object inside a <a>BatchRead</a> operation. For more information, see <a>ListIncomingTypedLinks</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchListIncomingTypedLinks {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
		FilterAttributeRanges?: Array<TypedLinkAttributeRange> | null;

		/** Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link. */
		FilterTypedLink?: TypedLinkSchemaAndFacetName | null;
		NextToken?: string | null;
		MaxResults?: number | null;
	}


	/** Retrieves attributes that are associated with a typed link inside a <a>BatchRead</a> operation. For more information, see <a>GetLinkAttributes</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchGetLinkAttributes {

		/**
		 * Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.
		 * Required
		 */
		TypedLinkSpecifier: TypedLinkSpecifier;
		AttributeNames: Array<string>;
	}

	export interface BatchWriteResponse {
		Responses?: Array<BatchWriteOperationResponse> | null;
	}


	/** Represents the output of a <code>BatchWrite</code> response operation. */
	export interface BatchWriteOperationResponse {

		/** Represents the output of a <a>CreateObject</a> response operation. */
		CreateObject?: BatchCreateObjectResponse | null;

		/** Represents the output batch <a>AttachObject</a> response operation. */
		AttachObject?: BatchAttachObjectResponse | null;

		/** Represents the output of a <a>DetachObject</a> response operation. */
		DetachObject?: BatchDetachObjectResponse | null;

		/** Represents the output of a <code>BatchUpdate</code> response operation. */
		UpdateObjectAttributes?: BatchUpdateObjectAttributesResponse | null;

		/** Represents the output of a <a>DeleteObject</a> response operation. */
		DeleteObject?: BatchDeleteObjectResponse | null;

		/** The result of a batch add facet to object operation. */
		AddFacetToObject?: BatchAddFacetToObjectResponse | null;

		/** An empty result that represents success. */
		RemoveFacetFromObject?: BatchRemoveFacetFromObjectResponse | null;

		/** Represents the output of an <a>AttachPolicy</a> response operation. */
		AttachPolicy?: BatchAttachPolicyResponse | null;

		/** Represents the output of a <a>DetachPolicy</a> response operation. */
		DetachPolicy?: BatchDetachPolicyResponse | null;

		/** Represents the output of a <a>CreateIndex</a> response operation. */
		CreateIndex?: BatchCreateIndexResponse | null;

		/** Represents the output of a <a>AttachToIndex</a> response operation. */
		AttachToIndex?: BatchAttachToIndexResponse | null;

		/** Represents the output of a <a>DetachFromIndex</a> response operation. */
		DetachFromIndex?: BatchDetachFromIndexResponse | null;

		/** Represents the output of a <a>AttachTypedLink</a> response operation. */
		AttachTypedLink?: BatchAttachTypedLinkResponse | null;

		/** Represents the output of a <a>DetachTypedLink</a> response operation. */
		DetachTypedLink?: BatchDetachTypedLinkResponse | null;

		/** Represents the output of a <a>UpdateLinkAttributes</a> response operation. */
		UpdateLinkAttributes?: BatchUpdateLinkAttributesResponse | null;
	}


	/** Represents the output of a <a>CreateObject</a> response operation. */
	export interface BatchCreateObjectResponse {
		ObjectIdentifier?: string | null;
	}


	/** Represents the output batch <a>AttachObject</a> response operation. */
	export interface BatchAttachObjectResponse {
		attachedObjectIdentifier?: string | null;
	}


	/** Represents the output of a <a>DetachObject</a> response operation. */
	export interface BatchDetachObjectResponse {
		detachedObjectIdentifier?: string | null;
	}


	/** Represents the output of a <code>BatchUpdate</code> response operation. */
	export interface BatchUpdateObjectAttributesResponse {
		ObjectIdentifier?: string | null;
	}


	/** Represents the output of a <a>DeleteObject</a> response operation. */
	export interface BatchDeleteObjectResponse {
	}


	/** The result of a batch add facet to object operation. */
	export interface BatchAddFacetToObjectResponse {
	}


	/** An empty result that represents success. */
	export interface BatchRemoveFacetFromObjectResponse {
	}


	/** Represents the output of an <a>AttachPolicy</a> response operation. */
	export interface BatchAttachPolicyResponse {
	}


	/** Represents the output of a <a>DetachPolicy</a> response operation. */
	export interface BatchDetachPolicyResponse {
	}


	/** Represents the output of a <a>CreateIndex</a> response operation. */
	export interface BatchCreateIndexResponse {
		ObjectIdentifier?: string | null;
	}


	/** Represents the output of a <a>AttachToIndex</a> response operation. */
	export interface BatchAttachToIndexResponse {
		AttachedObjectIdentifier?: string | null;
	}


	/** Represents the output of a <a>DetachFromIndex</a> response operation. */
	export interface BatchDetachFromIndexResponse {
		DetachedObjectIdentifier?: string | null;
	}


	/** Represents the output of a <a>AttachTypedLink</a> response operation. */
	export interface BatchAttachTypedLinkResponse {

		/** Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch. */
		TypedLinkSpecifier?: TypedLinkSpecifier | null;
	}


	/** Represents the output of a <a>DetachTypedLink</a> response operation. */
	export interface BatchDetachTypedLinkResponse {
	}


	/** Represents the output of a <a>UpdateLinkAttributes</a> response operation. */
	export interface BatchUpdateLinkAttributesResponse {
	}


	/** Represents the output of a <code>BatchWrite</code> operation.  */
	export interface BatchWriteOperation {

		/** Represents the output of a <a>CreateObject</a> operation. */
		CreateObject?: BatchCreateObject | null;

		/** Represents the output of an <a>AttachObject</a> operation. */
		AttachObject?: BatchAttachObject | null;

		/** Represents the output of a <a>DetachObject</a> operation. */
		DetachObject?: BatchDetachObject | null;

		/** Represents the output of a <code>BatchUpdate</code> operation. */
		UpdateObjectAttributes?: BatchUpdateObjectAttributes | null;

		/** Represents the output of a <a>DeleteObject</a> operation. */
		DeleteObject?: BatchDeleteObject | null;

		/** Represents the output of a batch add facet to object operation. */
		AddFacetToObject?: BatchAddFacetToObject | null;

		/** A batch operation to remove a facet from an object. */
		RemoveFacetFromObject?: BatchRemoveFacetFromObject | null;

		/** Attaches a policy object to a regular object inside a <a>BatchRead</a> operation. For more information, see <a>AttachPolicy</a> and <a>BatchReadRequest$Operations</a>. */
		AttachPolicy?: BatchAttachPolicy | null;

		/** Detaches the specified policy from the specified directory inside a <a>BatchWrite</a> operation. For more information, see <a>DetachPolicy</a> and <a>BatchWriteRequest$Operations</a>. */
		DetachPolicy?: BatchDetachPolicy | null;

		/** Creates an index object inside of a <a>BatchRead</a> operation. For more information, see <a>CreateIndex</a> and <a>BatchReadRequest$Operations</a>. */
		CreateIndex?: BatchCreateIndex | null;

		/** Attaches the specified object to the specified index inside a <a>BatchRead</a> operation. For more information, see <a>AttachToIndex</a> and <a>BatchReadRequest$Operations</a>. */
		AttachToIndex?: BatchAttachToIndex | null;

		/** Detaches the specified object from the specified index inside a <a>BatchRead</a> operation. For more information, see <a>DetachFromIndex</a> and <a>BatchReadRequest$Operations</a>. */
		DetachFromIndex?: BatchDetachFromIndex | null;

		/** Attaches a typed link to a specified source and target object inside a <a>BatchRead</a> operation. For more information, see <a>AttachTypedLink</a> and <a>BatchReadRequest$Operations</a>. */
		AttachTypedLink?: BatchAttachTypedLink | null;

		/** Detaches a typed link from a specified source and target object inside a <a>BatchRead</a> operation. For more information, see <a>DetachTypedLink</a> and <a>BatchReadRequest$Operations</a>. */
		DetachTypedLink?: BatchDetachTypedLink | null;

		/** Updates a given typed link’s attributes inside a <a>BatchRead</a> operation. Attributes to be updated must not contribute to the typed link’s identity, as defined by its <code>IdentityAttributeOrder</code>. For more information, see <a>UpdateLinkAttributes</a> and <a>BatchReadRequest$Operations</a>. */
		UpdateLinkAttributes?: BatchUpdateLinkAttributes | null;
	}


	/** Represents the output of a <a>CreateObject</a> operation. */
	export interface BatchCreateObject {
		SchemaFacet: Array<SchemaFacet>;
		ObjectAttributeList: Array<AttributeKeyAndValue>;

		/** The reference that identifies an object. */
		ParentReference?: ObjectReference | null;
		LinkName?: string | null;
		BatchReferenceName?: string | null;
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
		LinkName: string;
	}


	/** Represents the output of a <a>DetachObject</a> operation. */
	export interface BatchDetachObject {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ParentReference: ObjectReference;
		LinkName: string;
		BatchReferenceName?: string | null;
	}


	/** Represents the output of a <code>BatchUpdate</code> operation.  */
	export interface BatchUpdateObjectAttributes {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
		AttributeUpdates: Array<ObjectAttributeUpdate>;
	}


	/** Structure that contains attribute update information. */
	export interface ObjectAttributeUpdate {

		/** A unique identifier for an attribute. */
		ObjectAttributeKey?: AttributeKey | null;

		/** The action to take on the object attribute. */
		ObjectAttributeAction?: ObjectAttributeAction | null;
	}


	/** The action to take on the object attribute. */
	export interface ObjectAttributeAction {
		ObjectAttributeActionType?: ObjectAttributeActionObjectAttributeActionType | null;

		/** Represents the data for a typed attribute. You can set one, and only one, of the elements. Each attribute in an item is a name-value pair. Attributes have a single value. */
		ObjectAttributeUpdateValue?: TypedAttributeValue | null;
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


	/** Represents the output of a batch add facet to object operation. */
	export interface BatchAddFacetToObject {

		/**
		 * A facet.
		 * Required
		 */
		SchemaFacet: SchemaFacet;
		ObjectAttributeList: Array<AttributeKeyAndValue>;

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
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


	/** Creates an index object inside of a <a>BatchRead</a> operation. For more information, see <a>CreateIndex</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchCreateIndex {
		OrderedIndexedAttributeList: Array<AttributeKey>;
		IsUnique: boolean;

		/** The reference that identifies an object. */
		ParentReference?: ObjectReference | null;
		LinkName?: string | null;
		BatchReferenceName?: string | null;
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
		Attributes: Array<AttributeNameAndValue>;
	}


	/** Detaches a typed link from a specified source and target object inside a <a>BatchRead</a> operation. For more information, see <a>DetachTypedLink</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchDetachTypedLink {

		/**
		 * Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.
		 * Required
		 */
		TypedLinkSpecifier: TypedLinkSpecifier;
	}


	/** Updates a given typed link’s attributes inside a <a>BatchRead</a> operation. Attributes to be updated must not contribute to the typed link’s identity, as defined by its <code>IdentityAttributeOrder</code>. For more information, see <a>UpdateLinkAttributes</a> and <a>BatchReadRequest$Operations</a>. */
	export interface BatchUpdateLinkAttributes {

		/**
		 * Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.
		 * Required
		 */
		TypedLinkSpecifier: TypedLinkSpecifier;
		AttributeUpdates: Array<LinkAttributeUpdate>;
	}


	/** Structure that contains attribute update information. */
	export interface LinkAttributeUpdate {

		/** A unique identifier for an attribute. */
		AttributeKey?: AttributeKey | null;

		/** The action to take on a typed link attribute value. Updates are only supported for attributes which don’t contribute to link identity. */
		AttributeAction?: LinkAttributeAction | null;
	}


	/** The action to take on a typed link attribute value. Updates are only supported for attributes which don’t contribute to link identity. */
	export interface LinkAttributeAction {
		AttributeActionType?: ObjectAttributeActionObjectAttributeActionType | null;

		/** Represents the data for a typed attribute. You can set one, and only one, of the elements. Each attribute in an item is a name-value pair. Attributes have a single value. */
		AttributeUpdateValue?: TypedAttributeValue | null;
	}

	export interface BatchWriteException {
	}

	export interface CreateDirectoryResponse {
		DirectoryArn: string;
		Name: string;
		ObjectIdentifier: string;
		AppliedSchemaArn: string;
	}

	export interface DirectoryAlreadyExistsException {
	}

	export interface CreateFacetResponse {
	}


	/** An attribute that is associated with the <a>Facet</a>. */
	export interface FacetAttribute {
		Name: string;

		/** A facet attribute definition. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information. */
		AttributeDefinition?: FacetAttributeDefinition | null;

		/** The facet attribute reference that specifies the attribute definition that contains the attribute facet name and attribute name. */
		AttributeReference?: FacetAttributeReference | null;
		RequiredBehavior?: FacetAttributeRequiredBehavior | null;
	}


	/** A facet attribute definition. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information. */
	export interface FacetAttributeDefinition {
		Type: FacetAttributeDefinitionType;

		/** Represents the data for a typed attribute. You can set one, and only one, of the elements. Each attribute in an item is a name-value pair. Attributes have a single value. */
		DefaultValue?: TypedAttributeValue | null;
		IsImmutable?: boolean | null;
		Rules?: RuleMap | null;
	}

	export enum FacetAttributeDefinitionType { STRING = 0, BINARY = 1, BOOLEAN = 2, NUMBER = 3, DATETIME = 4, VARIANT = 5 }

	export interface RuleMap {
	}


	/** The facet attribute reference that specifies the attribute definition that contains the attribute facet name and attribute name. */
	export interface FacetAttributeReference {
		TargetFacetName: string;
		TargetAttributeName: string;
	}

	export enum FacetAttributeRequiredBehavior { REQUIRED_ALWAYS = 0, NOT_REQUIRED = 1 }

	export interface FacetAlreadyExistsException {
	}

	export interface InvalidRuleException {
	}

	export interface CreateIndexResponse {
		ObjectIdentifier?: string | null;
	}

	export interface UnsupportedIndexTypeException {
	}

	export interface CreateObjectResponse {
		ObjectIdentifier?: string | null;
	}

	export interface CreateSchemaResponse {
		SchemaArn?: string | null;
	}

	export interface CreateTypedLinkFacetResponse {
	}


	/** A typed link attribute definition. */
	export interface TypedLinkAttributeDefinition {
		Name: string;
		Type: FacetAttributeDefinitionType;

		/** Represents the data for a typed attribute. You can set one, and only one, of the elements. Each attribute in an item is a name-value pair. Attributes have a single value. */
		DefaultValue?: TypedAttributeValue | null;
		IsImmutable?: boolean | null;
		Rules?: RuleMap | null;
		RequiredBehavior: FacetAttributeRequiredBehavior;
	}

	export interface DeleteDirectoryResponse {
		DirectoryArn: string;
	}

	export interface DirectoryNotDisabledException {
	}

	export interface DirectoryDeletedException {
	}

	export interface DeleteFacetResponse {
	}

	export interface FacetNotFoundException {
	}

	export interface FacetInUseException {
	}

	export interface DeleteObjectResponse {
	}

	export interface ObjectNotDetachedException {
	}

	export interface DeleteSchemaResponse {
		SchemaArn?: string | null;
	}

	export interface StillContainsLinksException {
	}

	export interface DeleteTypedLinkFacetResponse {
	}

	export interface DetachFromIndexResponse {
		DetachedObjectIdentifier?: string | null;
	}

	export interface ObjectAlreadyDetachedException {
	}

	export interface DetachObjectResponse {
		DetachedObjectIdentifier?: string | null;
	}

	export interface NotNodeException {
	}

	export interface DetachPolicyResponse {
	}

	export interface DisableDirectoryResponse {
		DirectoryArn: string;
	}

	export interface EnableDirectoryResponse {
		DirectoryArn: string;
	}

	export interface GetAppliedSchemaVersionResponse {
		AppliedSchemaArn?: string | null;
	}

	export interface GetDirectoryResponse {

		/**
		 * Directory structure that includes the directory name and directory ARN.
		 * Required
		 */
		Directory: Directory;
	}


	/** Directory structure that includes the directory name and directory ARN. */
	export interface Directory {
		Name?: string | null;
		DirectoryArn?: string | null;
		State?: DirectoryState | null;
		CreationDateTime?: Date | null;
	}

	export enum DirectoryState { ENABLED = 0, DISABLED = 1, DELETED = 2 }

	export interface GetFacetResponse {

		/** A structure that contains <code>Name</code>, <code>ARN</code>, <code>Attributes</code>, <code> <a>Rule</a>s</code>, and <code>ObjectTypes</code>. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_whatarefacets.html">Facets</a> for more information. */
		Facet?: Facet | null;
	}


	/** A structure that contains <code>Name</code>, <code>ARN</code>, <code>Attributes</code>, <code> <a>Rule</a>s</code>, and <code>ObjectTypes</code>. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_whatarefacets.html">Facets</a> for more information. */
	export interface Facet {
		Name?: string | null;
		ObjectType?: FacetObjectType | null;
		FacetStyle?: FacetFacetStyle | null;
	}

	export enum FacetObjectType { NODE = 0, LEAF_NODE = 1, POLICY = 2, INDEX = 3 }

	export enum FacetFacetStyle { STATIC = 0, DYNAMIC = 1 }

	export interface GetLinkAttributesResponse {
		Attributes?: Array<AttributeKeyAndValue> | null;
	}

	export interface GetObjectAttributesResponse {
		Attributes?: Array<AttributeKeyAndValue> | null;
	}

	export interface GetObjectInformationResponse {
		SchemaFacets?: Array<SchemaFacet> | null;
		ObjectIdentifier?: string | null;
	}

	export interface GetSchemaAsJsonResponse {
		Name?: string | null;
		Document?: string | null;
	}

	export interface GetTypedLinkFacetInformationResponse {
		IdentityAttributeOrder?: Array<string> | null;
	}

	export interface InvalidNextTokenException {
	}

	export interface ListAppliedSchemaArnsResponse {
		SchemaArns?: Array<string> | null;
		NextToken?: string | null;
	}

	export interface ListAttachedIndicesResponse {
		IndexAttachments?: Array<IndexAttachment> | null;
		NextToken?: string | null;
	}

	export interface ListDevelopmentSchemaArnsResponse {
		SchemaArns?: Array<string> | null;
		NextToken?: string | null;
	}

	export interface ListDirectoriesResponse {
		Directories: Array<Directory>;
		NextToken?: string | null;
	}

	export interface ListFacetAttributesResponse {
		Attributes?: Array<FacetAttribute> | null;
		NextToken?: string | null;
	}

	export interface ListFacetNamesResponse {
		FacetNames?: Array<string> | null;
		NextToken?: string | null;
	}

	export interface ListIncomingTypedLinksResponse {
		LinkSpecifiers?: Array<TypedLinkSpecifier> | null;
		NextToken?: string | null;
	}

	export interface ListIndexResponse {
		IndexAttachments?: Array<IndexAttachment> | null;
		NextToken?: string | null;
	}

	export interface ListManagedSchemaArnsResponse {
		SchemaArns?: Array<string> | null;
		NextToken?: string | null;
	}

	export interface ListObjectAttributesResponse {
		Attributes?: Array<AttributeKeyAndValue> | null;
		NextToken?: string | null;
	}

	export interface ListObjectChildrenResponse {
		Children?: LinkNameToObjectIdentifierMap | null;
		NextToken?: string | null;
	}

	export interface ListObjectParentPathsResponse {
		PathToObjectIdentifiersList?: Array<PathToObjectIdentifiers> | null;
		NextToken?: string | null;
	}

	export interface ListObjectParentsResponse {
		Parents?: ObjectIdentifierToLinkNameMap | null;
		NextToken?: string | null;
		ParentLinks?: Array<ObjectIdentifierAndLinkNameTuple> | null;
	}

	export interface ObjectIdentifierToLinkNameMap {
	}

	export interface CannotListParentOfRootException {
	}

	export interface ListObjectPoliciesResponse {
		AttachedPolicyIds?: Array<string> | null;
		NextToken?: string | null;
	}

	export interface ListOutgoingTypedLinksResponse {
		TypedLinkSpecifiers?: Array<TypedLinkSpecifier> | null;
		NextToken?: string | null;
	}

	export interface ListPolicyAttachmentsResponse {
		ObjectIdentifiers?: Array<string> | null;
		NextToken?: string | null;
	}

	export interface ListPublishedSchemaArnsResponse {
		SchemaArns?: Array<string> | null;
		NextToken?: string | null;
	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag> | null;
		NextToken?: string | null;
	}


	/** The tag structure that contains a tag key and value. */
	export interface Tag {
		Key?: string | null;
		Value?: string | null;
	}

	export interface InvalidTaggingRequestException {
	}

	export interface ListTypedLinkFacetAttributesResponse {
		Attributes?: Array<TypedLinkAttributeDefinition> | null;
		NextToken?: string | null;
	}

	export interface ListTypedLinkFacetNamesResponse {
		FacetNames?: Array<string> | null;
		NextToken?: string | null;
	}

	export interface LookupPolicyResponse {
		PolicyToPathList?: Array<PolicyToPath> | null;
		NextToken?: string | null;
	}

	export interface PublishSchemaResponse {
		PublishedSchemaArn?: string | null;
	}

	export interface SchemaAlreadyPublishedException {
	}

	export interface PutSchemaFromJsonResponse {
		Arn?: string | null;
	}

	export interface InvalidSchemaDocException {
	}

	export interface RemoveFacetFromObjectResponse {
	}

	export interface TagResourceResponse {
	}

	export interface UntagResourceResponse {
	}

	export interface UpdateFacetResponse {
	}


	/** A structure that contains information used to update an attribute. */
	export interface FacetAttributeUpdate {

		/** An attribute that is associated with the <a>Facet</a>. */
		Attribute?: FacetAttribute | null;
		Action?: ObjectAttributeActionObjectAttributeActionType | null;
	}

	export interface InvalidFacetUpdateException {
	}

	export interface UpdateLinkAttributesResponse {
	}

	export interface UpdateObjectAttributesResponse {
		ObjectIdentifier?: string | null;
	}

	export interface UpdateSchemaResponse {
		SchemaArn?: string | null;
	}

	export interface UpdateTypedLinkFacetResponse {
	}


	/** A typed link facet attribute update. */
	export interface TypedLinkFacetAttributeUpdate {

		/**
		 * A typed link attribute definition.
		 * Required
		 */
		Attribute: TypedLinkAttributeDefinition;
		Action: ObjectAttributeActionObjectAttributeActionType;
	}

	export interface UpgradeAppliedSchemaResponse {
		UpgradedSchemaArn?: string | null;
		DirectoryArn?: string | null;
	}

	export interface IncompatibleSchemaException {
	}

	export interface UpgradePublishedSchemaResponse {
		UpgradedSchemaArn?: string | null;
	}

	export interface AddFacetToObjectRequest {

		/**
		 * A facet.
		 * Required
		 */
		SchemaFacet: SchemaFacet;
		ObjectAttributeList?: Array<AttributeKeyAndValue> | null;

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
	}

	export interface ApplySchemaRequest {
		PublishedSchemaArn: string;
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
		LinkName: string;
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
		Attributes: Array<AttributeNameAndValue>;
	}

	export enum ConsistencyLevel { SERIALIZABLE = 0, EVENTUAL = 1 }

	export interface BatchReadRequest {
		Operations: Array<BatchReadOperation>;
	}

	export interface BatchWriteRequest {
		Operations: Array<BatchWriteOperation>;
	}

	export interface CreateDirectoryRequest {
		Name: string;
	}

	export enum ObjectType { NODE = 0, LEAF_NODE = 1, POLICY = 2, INDEX = 3 }

	export enum FacetStyle { STATIC = 0, DYNAMIC = 1 }

	export interface CreateFacetRequest {
		Name: string;
		Attributes?: Array<FacetAttribute> | null;
		ObjectType?: FacetObjectType | null;
		FacetStyle?: FacetFacetStyle | null;
	}

	export interface CreateIndexRequest {
		OrderedIndexedAttributeList: Array<AttributeKey>;
		IsUnique: boolean;

		/** The reference that identifies an object. */
		ParentReference?: ObjectReference | null;
		LinkName?: string | null;
	}

	export interface CreateObjectRequest {
		SchemaFacets: Array<SchemaFacet>;
		ObjectAttributeList?: Array<AttributeKeyAndValue> | null;

		/** The reference that identifies an object. */
		ParentReference?: ObjectReference | null;
		LinkName?: string | null;
	}

	export interface CreateSchemaRequest {
		Name: string;
	}


	/** Defines the typed links structure and its attributes. To create a typed link facet, use the <a>CreateTypedLinkFacet</a> API. */
	export interface TypedLinkFacet {
		Name: string;
		Attributes: Array<TypedLinkAttributeDefinition>;
		IdentityAttributeOrder: Array<string>;
	}

	export interface CreateTypedLinkFacetRequest {

		/**
		 * Defines the typed links structure and its attributes. To create a typed link facet, use the <a>CreateTypedLinkFacet</a> API.
		 * Required
		 */
		Facet: TypedLinkFacet;
	}

	export interface DeleteDirectoryRequest {
	}

	export interface DeleteFacetRequest {
		Name: string;
	}

	export interface DeleteObjectRequest {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
	}

	export interface DeleteSchemaRequest {
	}

	export interface DeleteTypedLinkFacetRequest {
		Name: string;
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

	export interface DetachObjectRequest {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ParentReference: ObjectReference;
		LinkName: string;
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

	export interface DetachTypedLinkRequest {

		/**
		 * Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.
		 * Required
		 */
		TypedLinkSpecifier: TypedLinkSpecifier;
	}

	export interface DisableDirectoryRequest {
	}

	export interface EnableDirectoryRequest {
	}

	export enum RequiredAttributeBehavior { REQUIRED_ALWAYS = 0, NOT_REQUIRED = 1 }

	export enum FacetAttributeType { STRING = 0, BINARY = 1, BOOLEAN = 2, NUMBER = 3, DATETIME = 4, VARIANT = 5 }

	export enum UpdateActionType { CREATE_OR_UPDATE = 0, DELETE = 1 }

	export interface GetAppliedSchemaVersionRequest {
		SchemaArn: string;
	}

	export interface GetDirectoryRequest {
	}

	export interface GetFacetRequest {
		Name: string;
	}

	export interface GetLinkAttributesRequest {

		/**
		 * Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.
		 * Required
		 */
		TypedLinkSpecifier: TypedLinkSpecifier;
		AttributeNames: Array<string>;
		ConsistencyLevel?: ConsistencyLevel | null;
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
		AttributeNames: Array<string>;
	}

	export interface GetObjectInformationRequest {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
	}

	export interface GetSchemaAsJsonRequest {
	}

	export interface GetTypedLinkFacetInformationRequest {
		Name: string;
	}

	export interface ListAppliedSchemaArnsRequest {
		DirectoryArn: string;
		SchemaArn?: string | null;
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	export interface ListAttachedIndicesRequest {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		TargetReference: ObjectReference;
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	export interface ListDevelopmentSchemaArnsRequest {
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	export interface ListDirectoriesRequest {
		NextToken?: string | null;
		MaxResults?: number | null;
		state?: DirectoryState | null;
	}

	export interface ListFacetAttributesRequest {
		Name: string;
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	export interface ListFacetNamesRequest {
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	export interface ListIncomingTypedLinksRequest {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
		FilterAttributeRanges?: Array<TypedLinkAttributeRange> | null;

		/** Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link. */
		FilterTypedLink?: TypedLinkSchemaAndFacetName | null;
		NextToken?: string | null;
		MaxResults?: number | null;
		ConsistencyLevel?: ConsistencyLevel | null;
	}

	export interface ListIndexRequest {
		RangesOnIndexedValues?: Array<ObjectAttributeRange> | null;

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		IndexReference: ObjectReference;
		MaxResults?: number | null;
		NextToken?: string | null;
	}

	export interface ListManagedSchemaArnsRequest {
		SchemaArn?: string | null;
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	export interface ListObjectAttributesRequest {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
		NextToken?: string | null;
		MaxResults?: number | null;

		/** A facet. */
		FacetFilter?: SchemaFacet | null;
	}

	export interface ListObjectChildrenRequest {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	export interface ListObjectParentPathsRequest {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	export interface ListObjectParentsRequest {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
		NextToken?: string | null;
		MaxResults?: number | null;
		IncludeAllLinksToEachParent?: boolean | null;
	}

	export interface ListObjectPoliciesRequest {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	export interface ListOutgoingTypedLinksRequest {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
		FilterAttributeRanges?: Array<TypedLinkAttributeRange> | null;

		/** Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link. */
		FilterTypedLink?: TypedLinkSchemaAndFacetName | null;
		NextToken?: string | null;
		MaxResults?: number | null;
		ConsistencyLevel?: ConsistencyLevel | null;
	}

	export interface ListPolicyAttachmentsRequest {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		PolicyReference: ObjectReference;
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	export interface ListPublishedSchemaArnsRequest {
		SchemaArn?: string | null;
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	export interface ListTagsForResourceRequest {
		ResourceArn: string;
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	export interface ListTypedLinkFacetAttributesRequest {
		Name: string;
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	export interface ListTypedLinkFacetNamesRequest {
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	export interface LookupPolicyRequest {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	export interface PublishSchemaRequest {
		Version: string;
		MinorVersion?: string | null;
		Name?: string | null;
	}

	export interface PutSchemaFromJsonRequest {
		Document: string;
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

	export enum RuleType { BINARY_LENGTH = 0, NUMBER_COMPARISON = 1, STRING_FROM_SET = 2, STRING_LENGTH = 3 }

	export interface RuleParameterMap {
	}


	/** Contains an Amazon Resource Name (ARN) and parameters that are associated with the rule. */
	export interface Rule {
		Type?: RuleType | null;
		Parameters?: RuleParameterMap | null;
	}

	export interface TagResourceRequest {
		ResourceArn: string;
		Tags: Array<Tag>;
	}

	export interface UntagResourceRequest {
		ResourceArn: string;
		TagKeys: Array<string>;
	}

	export interface UpdateFacetRequest {
		Name: string;
		AttributeUpdates?: Array<FacetAttributeUpdate> | null;
		ObjectType?: FacetObjectType | null;
	}

	export interface UpdateLinkAttributesRequest {

		/**
		 * Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.
		 * Required
		 */
		TypedLinkSpecifier: TypedLinkSpecifier;
		AttributeUpdates: Array<LinkAttributeUpdate>;
	}

	export interface UpdateObjectAttributesRequest {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ObjectReference;
		AttributeUpdates: Array<ObjectAttributeUpdate>;
	}

	export interface UpdateSchemaRequest {
		Name: string;
	}

	export interface UpdateTypedLinkFacetRequest {
		Name: string;
		AttributeUpdates: Array<TypedLinkFacetAttributeUpdate>;
		IdentityAttributeOrder: Array<string>;
	}

	export interface UpgradeAppliedSchemaRequest {
		PublishedSchemaArn: string;
		DirectoryArn: string;
		DryRun?: boolean | null;
	}

	export interface UpgradePublishedSchemaRequest {
		DevelopmentSchemaArn: string;
		PublishedSchemaArn: string;
		MinorVersion: string;
		DryRun?: boolean | null;
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
		ObjectAttributeList?: Array<AttributeKeyAndValue> | null;

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: AddFacetToObjectPutBodyObjectReference;
	}

	export interface AddFacetToObjectPutBodySchemaFacet {
		SchemaArn?: string | null;
		FacetName?: string | null;
	}

	export interface AddFacetToObjectPutBodyObjectReference {
		Selector?: string | null;
	}

	export interface ApplySchemaPutBody {

		/**
		 * Published schema Amazon Resource Name (ARN) that needs to be copied. For more information, see <a>arns</a>.
		 * Required
		 */
		PublishedSchemaArn: string;
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
		 * Pattern: [^\/\[\]\(\):\{\}#@!?\s\\;]+
		 */
		LinkName: string;
	}

	export interface AttachObjectPutBodyParentReference {
		Selector?: string | null;
	}

	export interface AttachObjectPutBodyChildReference {
		Selector?: string | null;
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

	export interface AttachPolicyPutBodyPolicyReference {
		Selector?: string | null;
	}

	export interface AttachPolicyPutBodyObjectReference {
		Selector?: string | null;
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

	export interface AttachToIndexPutBodyIndexReference {
		Selector?: string | null;
	}

	export interface AttachToIndexPutBodyTargetReference {
		Selector?: string | null;
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

	export interface AttachTypedLinkPutBodySourceObjectReference {
		Selector?: string | null;
	}

	export interface AttachTypedLinkPutBodyTargetObjectReference {
		Selector?: string | null;
	}

	export interface AttachTypedLinkPutBodyTypedLinkFacet {
		SchemaArn?: string | null;
		TypedLinkName?: string | null;
	}

	export interface BatchReadPostBody {

		/**
		 * A list of operations that are part of the batch.
		 * Required
		 */
		Operations: Array<BatchReadOperation>;
	}

	export interface BatchWritePutBody {

		/**
		 * A list of operations that are part of the batch.
		 * Required
		 */
		Operations: Array<BatchWriteOperation>;
	}

	export interface CreateDirectoryPutBody {

		/**
		 * The name of the <a>Directory</a>. Should be unique per account, per region.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9._-]*$
		 */
		Name: string;
	}

	export interface CreateFacetPutBody {

		/**
		 * The name of the <a>Facet</a>, which is unique for a given schema.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9._-]*$
		 */
		Name: string;

		/** The attributes that are associated with the <a>Facet</a>. */
		Attributes?: Array<FacetAttribute> | null;

		/** <p>Specifies whether a given object created from this facet is of type node, leaf node, policy or index.</p> <ul> <li> <p>Node: Can have multiple children but one parent.</p> </li> </ul> <ul> <li> <p>Leaf node: Cannot have children but can have multiple parents.</p> </li> </ul> <ul> <li> <p>Policy: Allows you to store a policy document and policy type. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p> </li> </ul> <ul> <li> <p>Index: Can be created with the Index API.</p> </li> </ul> */
		ObjectType?: FacetObjectType | null;

		/** There are two different styles that you can define on any given facet, <code>Static</code> and <code>Dynamic</code>. For static facets, all attributes must be defined in the schema. For dynamic facets, attributes can be defined during data plane operations. */
		FacetStyle?: FacetFacetStyle | null;
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
		ParentReference?: CreateIndexPutBodyParentReference | null;

		/**
		 * The name of the link between the parent object and the index object.
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [^\/\[\]\(\):\{\}#@!?\s\\;]+
		 */
		LinkName?: string | null;
	}

	export interface CreateIndexPutBodyParentReference {
		Selector?: string | null;
	}

	export interface CreateObjectPutBody {

		/**
		 * A list of schema facets to be associated with the object. Do not provide minor version components. See <a>SchemaFacet</a> for details.
		 * Required
		 */
		SchemaFacets: Array<SchemaFacet>;

		/** The attribute map whose attribute ARN contains the key and attribute value as the map value. */
		ObjectAttributeList?: Array<AttributeKeyAndValue> | null;

		/** The reference that identifies an object. */
		ParentReference?: CreateObjectPutBodyParentReference | null;

		/**
		 * The name of link that is used to attach this object to a parent.
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [^\/\[\]\(\):\{\}#@!?\s\\;]+
		 */
		LinkName?: string | null;
	}

	export interface CreateObjectPutBodyParentReference {
		Selector?: string | null;
	}

	export interface CreateSchemaPutBody {

		/**
		 * The name that is associated with the schema. This is unique to each account and in each region.
		 * Required
		 * Max length: 32
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9._-]*$
		 */
		Name: string;
	}

	export interface CreateTypedLinkFacetPutBody {

		/**
		 * Defines the typed links structure and its attributes. To create a typed link facet, use the <a>CreateTypedLinkFacet</a> API.
		 * Required
		 */
		Facet: CreateTypedLinkFacetPutBodyFacet;
	}

	export interface CreateTypedLinkFacetPutBodyFacet {
		Name?: string | null;
		Attributes?: Array<TypedLinkAttributeDefinition> | null;
		IdentityAttributeOrder?: Array<string> | null;
	}

	export interface DeleteFacetPutBody {

		/**
		 * The name of the facet to delete.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9._-]*$
		 */
		Name: string;
	}

	export interface DeleteObjectPutBody {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: DeleteObjectPutBodyObjectReference;
	}

	export interface DeleteObjectPutBodyObjectReference {
		Selector?: string | null;
	}

	export interface DeleteTypedLinkFacetPutBody {

		/**
		 * The unique name of the typed link facet.
		 * Required
		 * Pattern: ^[a-zA-Z0-9._-]*$
		 */
		Name: string;
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

	export interface DetachFromIndexPutBodyIndexReference {
		Selector?: string | null;
	}

	export interface DetachFromIndexPutBodyTargetReference {
		Selector?: string | null;
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
		 * Pattern: [^\/\[\]\(\):\{\}#@!?\s\\;]+
		 */
		LinkName: string;
	}

	export interface DetachObjectPutBodyParentReference {
		Selector?: string | null;
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

	export interface DetachPolicyPutBodyPolicyReference {
		Selector?: string | null;
	}

	export interface DetachPolicyPutBodyObjectReference {
		Selector?: string | null;
	}

	export interface DetachTypedLinkPutBody {

		/**
		 * Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.
		 * Required
		 */
		TypedLinkSpecifier: DetachTypedLinkPutBodyTypedLinkSpecifier;
	}

	export interface DetachTypedLinkPutBodyTypedLinkSpecifier {

		/** Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link. */
		TypedLinkFacet?: TypedLinkSchemaAndFacetName | null;

		/** The reference that identifies an object. */
		SourceObjectReference?: ObjectReference | null;

		/** The reference that identifies an object. */
		TargetObjectReference?: ObjectReference | null;
		IdentityAttributeValues?: Array<AttributeNameAndValue> | null;
	}

	export interface GetAppliedSchemaVersionPostBody {

		/**
		 * The ARN of the applied schema.
		 * Required
		 */
		SchemaArn: string;
	}

	export interface GetFacetPostBody {

		/**
		 * The name of the facet to retrieve.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9._-]*$
		 */
		Name: string;
	}

	export interface UpdateFacetPutBody {

		/**
		 * The name of the facet.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9._-]*$
		 */
		Name: string;

		/** List of attributes that need to be updated in a given schema <a>Facet</a>. Each attribute is followed by <code>AttributeAction</code>, which specifies the type of update operation to perform. */
		AttributeUpdates?: Array<FacetAttributeUpdate> | null;

		/** The object type that is associated with the facet. See <a>CreateFacetRequest$ObjectType</a> for more details. */
		ObjectType?: FacetObjectType | null;
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

	export interface GetLinkAttributesPostBodyTypedLinkSpecifier {

		/** Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link. */
		TypedLinkFacet?: TypedLinkSchemaAndFacetName | null;

		/** The reference that identifies an object. */
		SourceObjectReference?: ObjectReference | null;

		/** The reference that identifies an object. */
		TargetObjectReference?: ObjectReference | null;
		IdentityAttributeValues?: Array<AttributeNameAndValue> | null;
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

	export interface GetObjectAttributesPostBodyObjectReference {
		Selector?: string | null;
	}

	export interface GetObjectAttributesPostBodySchemaFacet {
		SchemaArn?: string | null;
		FacetName?: string | null;
	}

	export interface GetObjectInformationPostBody {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: GetObjectInformationPostBodyObjectReference;
	}

	export interface GetObjectInformationPostBodyObjectReference {
		Selector?: string | null;
	}

	export interface PutSchemaFromJsonPutBody {

		/**
		 * The replacement JSON schema.
		 * Required
		 */
		Document: string;
	}

	export interface GetTypedLinkFacetInformationPostBody {

		/**
		 * The unique name of the typed link facet.
		 * Required
		 * Pattern: ^[a-zA-Z0-9._-]*$
		 */
		Name: string;
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

	export interface ListAttachedIndicesPostBodyTargetReference {
		Selector?: string | null;
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

	export interface ListFacetAttributesPostBody {

		/**
		 * The name of the facet whose attributes will be retrieved.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9._-]*$
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

	export interface ListFacetNamesPostBody {

		/** The pagination token. */
		NextToken?: string | null;

		/**
		 * The maximum number of results to retrieve.
		 * Minimum: 1
		 */
		MaxResults?: number | null;
	}

	export interface ListIncomingTypedLinksPostBody {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ListIncomingTypedLinksPostBodyObjectReference;

		/** Provides range filters for multiple attributes. When providing ranges to typed link selection, any inexact ranges must be specified at the end. Any attributes that do not have a range specified are presumed to match the entire range. */
		FilterAttributeRanges?: Array<TypedLinkAttributeRange> | null;

		/** Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link. */
		FilterTypedLink?: ListIncomingTypedLinksPostBodyFilterTypedLink | null;

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

	export interface ListIncomingTypedLinksPostBodyObjectReference {
		Selector?: string | null;
	}

	export interface ListIncomingTypedLinksPostBodyFilterTypedLink {
		SchemaArn?: string | null;
		TypedLinkName?: string | null;
	}

	export interface ListIndexPostBody {

		/** Specifies the ranges of indexed values that you want to query. */
		RangesOnIndexedValues?: Array<ObjectAttributeRange> | null;

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

	export interface ListIndexPostBodyIndexReference {
		Selector?: string | null;
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
		FacetFilter?: ListObjectAttributesPostBodyFacetFilter | null;
	}

	export interface ListObjectAttributesPostBodyObjectReference {
		Selector?: string | null;
	}

	export interface ListObjectAttributesPostBodyFacetFilter {
		SchemaArn?: string | null;
		FacetName?: string | null;
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

	export interface ListObjectChildrenPostBodyObjectReference {
		Selector?: string | null;
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

	export interface ListObjectParentPathsPostBodyObjectReference {
		Selector?: string | null;
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

	export interface ListObjectParentsPostBodyObjectReference {
		Selector?: string | null;
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

	export interface ListObjectPoliciesPostBodyObjectReference {
		Selector?: string | null;
	}

	export interface ListOutgoingTypedLinksPostBody {

		/**
		 * The reference that identifies an object.
		 * Required
		 */
		ObjectReference: ListOutgoingTypedLinksPostBodyObjectReference;

		/** Provides range filters for multiple attributes. When providing ranges to typed link selection, any inexact ranges must be specified at the end. Any attributes that do not have a range specified are presumed to match the entire range. */
		FilterAttributeRanges?: Array<TypedLinkAttributeRange> | null;

		/** Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link. */
		FilterTypedLink?: ListOutgoingTypedLinksPostBodyFilterTypedLink | null;

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

	export interface ListOutgoingTypedLinksPostBodyObjectReference {
		Selector?: string | null;
	}

	export interface ListOutgoingTypedLinksPostBodyFilterTypedLink {
		SchemaArn?: string | null;
		TypedLinkName?: string | null;
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

	export interface ListPolicyAttachmentsPostBodyPolicyReference {
		Selector?: string | null;
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

	export interface ListTypedLinkFacetAttributesPostBody {

		/**
		 * The unique name of the typed link facet.
		 * Required
		 * Pattern: ^[a-zA-Z0-9._-]*$
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

	export interface ListTypedLinkFacetNamesPostBody {

		/** The pagination token. */
		NextToken?: string | null;

		/**
		 * The maximum number of results to retrieve.
		 * Minimum: 1
		 */
		MaxResults?: number | null;
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

	export interface LookupPolicyPostBodyObjectReference {
		Selector?: string | null;
	}

	export interface PublishSchemaPutBody {

		/**
		 * The major version under which the schema will be published. Schemas have both a major and minor version associated with them.
		 * Required
		 * Max length: 10
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9._-]*$
		 */
		Version: string;

		/**
		 * The minor version under which the schema will be published. This parameter is recommended. Schemas have both a major and minor version associated with them.
		 * Max length: 10
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9._-]*$
		 */
		MinorVersion?: string | null;

		/**
		 * The new name under which the schema will be published. If this is not provided, the development schema is considered.
		 * Max length: 32
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9._-]*$
		 */
		Name?: string | null;
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

	export interface RemoveFacetFromObjectPutBodySchemaFacet {
		SchemaArn?: string | null;
		FacetName?: string | null;
	}

	export interface RemoveFacetFromObjectPutBodyObjectReference {
		Selector?: string | null;
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

	export interface UpdateLinkAttributesPostBodyTypedLinkSpecifier {

		/** Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link. */
		TypedLinkFacet?: TypedLinkSchemaAndFacetName | null;

		/** The reference that identifies an object. */
		SourceObjectReference?: ObjectReference | null;

		/** The reference that identifies an object. */
		TargetObjectReference?: ObjectReference | null;
		IdentityAttributeValues?: Array<AttributeNameAndValue> | null;
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

	export interface UpdateObjectAttributesPutBodyObjectReference {
		Selector?: string | null;
	}

	export interface UpdateSchemaPutBody {

		/**
		 * The name of the schema.
		 * Required
		 * Max length: 32
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9._-]*$
		 */
		Name: string;
	}

	export interface UpdateTypedLinkFacetPutBody {

		/**
		 * The unique name of the typed link facet.
		 * Required
		 * Pattern: ^[a-zA-Z0-9._-]*$
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
		 * Pattern: ^[a-zA-Z0-9._-]*$
		 */
		MinorVersion: string;

		/** Used for testing whether the Development schema provided is backwards compatible, or not, with the publish schema provided by the user to be upgraded. If schema compatibility fails, an exception would be thrown else the call would succeed. This parameter is optional and defaults to false. */
		DryRun?: boolean | null;
	}

}

