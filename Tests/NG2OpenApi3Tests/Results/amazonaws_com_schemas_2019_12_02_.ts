import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateDiscovererResponse {
		Description?: string;
		DiscovererArn?: string;
		DiscovererId?: string;
		SourceArn?: string;
		State?: DiscovererState;
		CrossAccount?: boolean | null;
		Tags?: Tags;
	}
	export interface CreateDiscovererResponseFormProperties {
		Description: FormControl<string | null | undefined>,
		DiscovererArn: FormControl<string | null | undefined>,
		DiscovererId: FormControl<string | null | undefined>,
		SourceArn: FormControl<string | null | undefined>,
		State: FormControl<DiscovererState | null | undefined>,
		CrossAccount: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateDiscovererResponseFormGroup() {
		return new FormGroup<CreateDiscovererResponseFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			DiscovererArn: new FormControl<string | null | undefined>(undefined),
			DiscovererId: new FormControl<string | null | undefined>(undefined),
			SourceArn: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<DiscovererState | null | undefined>(undefined),
			CrossAccount: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum DiscovererState { STARTED = 'STARTED', STOPPED = 'STOPPED' }


	/** Key-value pairs associated with a resource. */
	export interface Tags {
	}

	/** Key-value pairs associated with a resource. */
	export interface TagsFormProperties {
	}
	export function CreateTagsFormGroup() {
		return new FormGroup<TagsFormProperties>({
		});

	}

	export interface BadRequestException {
	}
	export interface BadRequestExceptionFormProperties {
	}
	export function CreateBadRequestExceptionFormGroup() {
		return new FormGroup<BadRequestExceptionFormProperties>({
		});

	}

	export interface InternalServerErrorException {
	}
	export interface InternalServerErrorExceptionFormProperties {
	}
	export function CreateInternalServerErrorExceptionFormGroup() {
		return new FormGroup<InternalServerErrorExceptionFormProperties>({
		});

	}

	export interface UnauthorizedException {
	}
	export interface UnauthorizedExceptionFormProperties {
	}
	export function CreateUnauthorizedExceptionFormGroup() {
		return new FormGroup<UnauthorizedExceptionFormProperties>({
		});

	}

	export interface ForbiddenException {
	}
	export interface ForbiddenExceptionFormProperties {
	}
	export function CreateForbiddenExceptionFormGroup() {
		return new FormGroup<ForbiddenExceptionFormProperties>({
		});

	}

	export interface ServiceUnavailableException {
	}
	export interface ServiceUnavailableExceptionFormProperties {
	}
	export function CreateServiceUnavailableExceptionFormGroup() {
		return new FormGroup<ServiceUnavailableExceptionFormProperties>({
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

	export interface CreateRegistryResponse {
		Description?: string;
		RegistryArn?: string;
		RegistryName?: string;
		Tags?: Tags;
	}
	export interface CreateRegistryResponseFormProperties {
		Description: FormControl<string | null | undefined>,
		RegistryArn: FormControl<string | null | undefined>,
		RegistryName: FormControl<string | null | undefined>,
	}
	export function CreateCreateRegistryResponseFormGroup() {
		return new FormGroup<CreateRegistryResponseFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			RegistryArn: new FormControl<string | null | undefined>(undefined),
			RegistryName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSchemaResponse {
		Description?: string;
		LastModified?: Date;
		SchemaArn?: string;
		SchemaName?: string;
		SchemaVersion?: string;
		Tags?: Tags;
		Type?: string;
		VersionCreatedDate?: Date;
	}
	export interface CreateSchemaResponseFormProperties {
		Description: FormControl<string | null | undefined>,
		LastModified: FormControl<Date | null | undefined>,
		SchemaArn: FormControl<string | null | undefined>,
		SchemaName: FormControl<string | null | undefined>,
		SchemaVersion: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		VersionCreatedDate: FormControl<Date | null | undefined>,
	}
	export function CreateCreateSchemaResponseFormGroup() {
		return new FormGroup<CreateSchemaResponseFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			LastModified: new FormControl<Date | null | undefined>(undefined),
			SchemaArn: new FormControl<string | null | undefined>(undefined),
			SchemaName: new FormControl<string | null | undefined>(undefined),
			SchemaVersion: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			VersionCreatedDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface NotFoundException {
	}
	export interface NotFoundExceptionFormProperties {
	}
	export function CreateNotFoundExceptionFormGroup() {
		return new FormGroup<NotFoundExceptionFormProperties>({
		});

	}

	export interface DescribeCodeBindingResponse {
		CreationDate?: Date;
		LastModified?: Date;
		SchemaVersion?: string;
		Status?: CodeGenerationStatus;
	}
	export interface DescribeCodeBindingResponseFormProperties {
		CreationDate: FormControl<Date | null | undefined>,
		LastModified: FormControl<Date | null | undefined>,
		SchemaVersion: FormControl<string | null | undefined>,
		Status: FormControl<CodeGenerationStatus | null | undefined>,
	}
	export function CreateDescribeCodeBindingResponseFormGroup() {
		return new FormGroup<DescribeCodeBindingResponseFormProperties>({
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			LastModified: new FormControl<Date | null | undefined>(undefined),
			SchemaVersion: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<CodeGenerationStatus | null | undefined>(undefined),
		});

	}

	export enum CodeGenerationStatus { CREATE_IN_PROGRESS = 'CREATE_IN_PROGRESS', CREATE_COMPLETE = 'CREATE_COMPLETE', CREATE_FAILED = 'CREATE_FAILED' }

	export interface TooManyRequestsException {
	}
	export interface TooManyRequestsExceptionFormProperties {
	}
	export function CreateTooManyRequestsExceptionFormGroup() {
		return new FormGroup<TooManyRequestsExceptionFormProperties>({
		});

	}

	export interface DescribeDiscovererResponse {
		Description?: string;
		DiscovererArn?: string;
		DiscovererId?: string;
		SourceArn?: string;
		State?: DiscovererState;
		CrossAccount?: boolean | null;
		Tags?: Tags;
	}
	export interface DescribeDiscovererResponseFormProperties {
		Description: FormControl<string | null | undefined>,
		DiscovererArn: FormControl<string | null | undefined>,
		DiscovererId: FormControl<string | null | undefined>,
		SourceArn: FormControl<string | null | undefined>,
		State: FormControl<DiscovererState | null | undefined>,
		CrossAccount: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeDiscovererResponseFormGroup() {
		return new FormGroup<DescribeDiscovererResponseFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			DiscovererArn: new FormControl<string | null | undefined>(undefined),
			DiscovererId: new FormControl<string | null | undefined>(undefined),
			SourceArn: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<DiscovererState | null | undefined>(undefined),
			CrossAccount: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribeRegistryResponse {
		Description?: string;
		RegistryArn?: string;
		RegistryName?: string;
		Tags?: Tags;
	}
	export interface DescribeRegistryResponseFormProperties {
		Description: FormControl<string | null | undefined>,
		RegistryArn: FormControl<string | null | undefined>,
		RegistryName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRegistryResponseFormGroup() {
		return new FormGroup<DescribeRegistryResponseFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			RegistryArn: new FormControl<string | null | undefined>(undefined),
			RegistryName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeSchemaResponse {
		Content?: string;
		Description?: string;
		LastModified?: Date;
		SchemaArn?: string;
		SchemaName?: string;
		SchemaVersion?: string;
		Tags?: Tags;
		Type?: string;
		VersionCreatedDate?: Date;
	}
	export interface DescribeSchemaResponseFormProperties {
		Content: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		LastModified: FormControl<Date | null | undefined>,
		SchemaArn: FormControl<string | null | undefined>,
		SchemaName: FormControl<string | null | undefined>,
		SchemaVersion: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		VersionCreatedDate: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeSchemaResponseFormGroup() {
		return new FormGroup<DescribeSchemaResponseFormProperties>({
			Content: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			LastModified: new FormControl<Date | null | undefined>(undefined),
			SchemaArn: new FormControl<string | null | undefined>(undefined),
			SchemaName: new FormControl<string | null | undefined>(undefined),
			SchemaVersion: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			VersionCreatedDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ExportSchemaResponse {
		Content?: string | null;
		SchemaArn?: string | null;
		SchemaName?: string | null;
		SchemaVersion?: string | null;
		Type?: string | null;
	}
	export interface ExportSchemaResponseFormProperties {
		Content: FormControl<string | null | undefined>,
		SchemaArn: FormControl<string | null | undefined>,
		SchemaName: FormControl<string | null | undefined>,
		SchemaVersion: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateExportSchemaResponseFormGroup() {
		return new FormGroup<ExportSchemaResponseFormProperties>({
			Content: new FormControl<string | null | undefined>(undefined),
			SchemaArn: new FormControl<string | null | undefined>(undefined),
			SchemaName: new FormControl<string | null | undefined>(undefined),
			SchemaVersion: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCodeBindingSourceResponse {
		Body?: string | null;
	}
	export interface GetCodeBindingSourceResponseFormProperties {
		Body: FormControl<string | null | undefined>,
	}
	export function CreateGetCodeBindingSourceResponseFormGroup() {
		return new FormGroup<GetCodeBindingSourceResponseFormProperties>({
			Body: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDiscoveredSchemaResponse {
		Content?: string;
	}
	export interface GetDiscoveredSchemaResponseFormProperties {
		Content: FormControl<string | null | undefined>,
	}
	export function CreateGetDiscoveredSchemaResponseFormGroup() {
		return new FormGroup<GetDiscoveredSchemaResponseFormProperties>({
			Content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetResourcePolicyResponse {
		Policy?: string;
		RevisionId?: string;
	}
	export interface GetResourcePolicyResponseFormProperties {
		Policy: FormControl<string | null | undefined>,
		RevisionId: FormControl<string | null | undefined>,
	}
	export function CreateGetResourcePolicyResponseFormGroup() {
		return new FormGroup<GetResourcePolicyResponseFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined),
			RevisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDiscoverersResponse {
		Discoverers?: Array<DiscovererSummary>;
		NextToken?: string;
	}
	export interface ListDiscoverersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDiscoverersResponseFormGroup() {
		return new FormGroup<ListDiscoverersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DiscovererSummary {
		DiscovererArn?: string;
		DiscovererId?: string;
		SourceArn?: string;
		State?: DiscovererState;
		CrossAccount?: boolean | null;
		Tags?: Tags;
	}
	export interface DiscovererSummaryFormProperties {
		DiscovererArn: FormControl<string | null | undefined>,
		DiscovererId: FormControl<string | null | undefined>,
		SourceArn: FormControl<string | null | undefined>,
		State: FormControl<DiscovererState | null | undefined>,
		CrossAccount: FormControl<boolean | null | undefined>,
	}
	export function CreateDiscovererSummaryFormGroup() {
		return new FormGroup<DiscovererSummaryFormProperties>({
			DiscovererArn: new FormControl<string | null | undefined>(undefined),
			DiscovererId: new FormControl<string | null | undefined>(undefined),
			SourceArn: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<DiscovererState | null | undefined>(undefined),
			CrossAccount: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListRegistriesResponse {
		NextToken?: string;
		Registries?: Array<RegistrySummary>;
	}
	export interface ListRegistriesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRegistriesResponseFormGroup() {
		return new FormGroup<ListRegistriesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegistrySummary {
		RegistryArn?: string;
		RegistryName?: string;
		Tags?: Tags;
	}
	export interface RegistrySummaryFormProperties {
		RegistryArn: FormControl<string | null | undefined>,
		RegistryName: FormControl<string | null | undefined>,
	}
	export function CreateRegistrySummaryFormGroup() {
		return new FormGroup<RegistrySummaryFormProperties>({
			RegistryArn: new FormControl<string | null | undefined>(undefined),
			RegistryName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSchemaVersionsResponse {
		NextToken?: string;
		SchemaVersions?: Array<SchemaVersionSummary>;
	}
	export interface ListSchemaVersionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSchemaVersionsResponseFormGroup() {
		return new FormGroup<ListSchemaVersionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SchemaVersionSummary {
		SchemaArn?: string;
		SchemaName?: string;
		SchemaVersion?: string;
		Type?: Type;
	}
	export interface SchemaVersionSummaryFormProperties {
		SchemaArn: FormControl<string | null | undefined>,
		SchemaName: FormControl<string | null | undefined>,
		SchemaVersion: FormControl<string | null | undefined>,
		Type: FormControl<Type | null | undefined>,
	}
	export function CreateSchemaVersionSummaryFormGroup() {
		return new FormGroup<SchemaVersionSummaryFormProperties>({
			SchemaArn: new FormControl<string | null | undefined>(undefined),
			SchemaName: new FormControl<string | null | undefined>(undefined),
			SchemaVersion: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<Type | null | undefined>(undefined),
		});

	}

	export enum Type { OpenApi3 = 'OpenApi3', JSONSchemaDraft4 = 'JSONSchemaDraft4' }

	export interface ListSchemasResponse {
		NextToken?: string;
		Schemas?: Array<SchemaSummary>;
	}
	export interface ListSchemasResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSchemasResponseFormGroup() {
		return new FormGroup<ListSchemasResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A summary of schema details. */
	export interface SchemaSummary {
		LastModified?: Date;
		SchemaArn?: string;
		SchemaName?: string;
		Tags?: Tags;
		VersionCount?: number | null;
	}

	/** A summary of schema details. */
	export interface SchemaSummaryFormProperties {
		LastModified: FormControl<Date | null | undefined>,
		SchemaArn: FormControl<string | null | undefined>,
		SchemaName: FormControl<string | null | undefined>,
		VersionCount: FormControl<number | null | undefined>,
	}
	export function CreateSchemaSummaryFormGroup() {
		return new FormGroup<SchemaSummaryFormProperties>({
			LastModified: new FormControl<Date | null | undefined>(undefined),
			SchemaArn: new FormControl<string | null | undefined>(undefined),
			SchemaName: new FormControl<string | null | undefined>(undefined),
			VersionCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: Tags;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface PutCodeBindingResponse {
		CreationDate?: Date;
		LastModified?: Date;
		SchemaVersion?: string;
		Status?: CodeGenerationStatus;
	}
	export interface PutCodeBindingResponseFormProperties {
		CreationDate: FormControl<Date | null | undefined>,
		LastModified: FormControl<Date | null | undefined>,
		SchemaVersion: FormControl<string | null | undefined>,
		Status: FormControl<CodeGenerationStatus | null | undefined>,
	}
	export function CreatePutCodeBindingResponseFormGroup() {
		return new FormGroup<PutCodeBindingResponseFormProperties>({
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			LastModified: new FormControl<Date | null | undefined>(undefined),
			SchemaVersion: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<CodeGenerationStatus | null | undefined>(undefined),
		});

	}

	export interface GoneException {
	}
	export interface GoneExceptionFormProperties {
	}
	export function CreateGoneExceptionFormGroup() {
		return new FormGroup<GoneExceptionFormProperties>({
		});

	}

	export interface PutResourcePolicyResponse {
		Policy?: string;
		RevisionId?: string;
	}
	export interface PutResourcePolicyResponseFormProperties {
		Policy: FormControl<string | null | undefined>,
		RevisionId: FormControl<string | null | undefined>,
	}
	export function CreatePutResourcePolicyResponseFormGroup() {
		return new FormGroup<PutResourcePolicyResponseFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined),
			RevisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PreconditionFailedException {
	}
	export interface PreconditionFailedExceptionFormProperties {
	}
	export function CreatePreconditionFailedExceptionFormGroup() {
		return new FormGroup<PreconditionFailedExceptionFormProperties>({
		});

	}

	export interface SearchSchemasResponse {
		NextToken?: string;
		Schemas?: Array<SearchSchemaSummary>;
	}
	export interface SearchSchemasResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchSchemasResponseFormGroup() {
		return new FormGroup<SearchSchemasResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchSchemaSummary {
		RegistryName?: string;
		SchemaArn?: string;
		SchemaName?: string;
		SchemaVersions?: Array<SearchSchemaVersionSummary>;
	}
	export interface SearchSchemaSummaryFormProperties {
		RegistryName: FormControl<string | null | undefined>,
		SchemaArn: FormControl<string | null | undefined>,
		SchemaName: FormControl<string | null | undefined>,
	}
	export function CreateSearchSchemaSummaryFormGroup() {
		return new FormGroup<SearchSchemaSummaryFormProperties>({
			RegistryName: new FormControl<string | null | undefined>(undefined),
			SchemaArn: new FormControl<string | null | undefined>(undefined),
			SchemaName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchSchemaVersionSummary {
		CreatedDate?: Date;
		SchemaVersion?: string;
		Type?: Type;
	}
	export interface SearchSchemaVersionSummaryFormProperties {
		CreatedDate: FormControl<Date | null | undefined>,
		SchemaVersion: FormControl<string | null | undefined>,
		Type: FormControl<Type | null | undefined>,
	}
	export function CreateSearchSchemaVersionSummaryFormGroup() {
		return new FormGroup<SearchSchemaVersionSummaryFormProperties>({
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			SchemaVersion: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<Type | null | undefined>(undefined),
		});

	}

	export interface StartDiscovererResponse {
		DiscovererId?: string;
		State?: DiscovererState;
	}
	export interface StartDiscovererResponseFormProperties {
		DiscovererId: FormControl<string | null | undefined>,
		State: FormControl<DiscovererState | null | undefined>,
	}
	export function CreateStartDiscovererResponseFormGroup() {
		return new FormGroup<StartDiscovererResponseFormProperties>({
			DiscovererId: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<DiscovererState | null | undefined>(undefined),
		});

	}

	export interface StopDiscovererResponse {
		DiscovererId?: string;
		State?: DiscovererState;
	}
	export interface StopDiscovererResponseFormProperties {
		DiscovererId: FormControl<string | null | undefined>,
		State: FormControl<DiscovererState | null | undefined>,
	}
	export function CreateStopDiscovererResponseFormGroup() {
		return new FormGroup<StopDiscovererResponseFormProperties>({
			DiscovererId: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<DiscovererState | null | undefined>(undefined),
		});

	}

	export interface UpdateDiscovererResponse {
		Description?: string;
		DiscovererArn?: string;
		DiscovererId?: string;
		SourceArn?: string;
		State?: DiscovererState;
		CrossAccount?: boolean | null;
		Tags?: Tags;
	}
	export interface UpdateDiscovererResponseFormProperties {
		Description: FormControl<string | null | undefined>,
		DiscovererArn: FormControl<string | null | undefined>,
		DiscovererId: FormControl<string | null | undefined>,
		SourceArn: FormControl<string | null | undefined>,
		State: FormControl<DiscovererState | null | undefined>,
		CrossAccount: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateDiscovererResponseFormGroup() {
		return new FormGroup<UpdateDiscovererResponseFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			DiscovererArn: new FormControl<string | null | undefined>(undefined),
			DiscovererId: new FormControl<string | null | undefined>(undefined),
			SourceArn: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<DiscovererState | null | undefined>(undefined),
			CrossAccount: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateRegistryResponse {
		Description?: string;
		RegistryArn?: string;
		RegistryName?: string;
		Tags?: Tags;
	}
	export interface UpdateRegistryResponseFormProperties {
		Description: FormControl<string | null | undefined>,
		RegistryArn: FormControl<string | null | undefined>,
		RegistryName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRegistryResponseFormGroup() {
		return new FormGroup<UpdateRegistryResponseFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			RegistryArn: new FormControl<string | null | undefined>(undefined),
			RegistryName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSchemaResponse {
		Description?: string;
		LastModified?: Date;
		SchemaArn?: string;
		SchemaName?: string;
		SchemaVersion?: string;
		Tags?: Tags;
		Type?: string;
		VersionCreatedDate?: Date;
	}
	export interface UpdateSchemaResponseFormProperties {
		Description: FormControl<string | null | undefined>,
		LastModified: FormControl<Date | null | undefined>,
		SchemaArn: FormControl<string | null | undefined>,
		SchemaName: FormControl<string | null | undefined>,
		SchemaVersion: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		VersionCreatedDate: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateSchemaResponseFormGroup() {
		return new FormGroup<UpdateSchemaResponseFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			LastModified: new FormControl<Date | null | undefined>(undefined),
			SchemaArn: new FormControl<string | null | undefined>(undefined),
			SchemaName: new FormControl<string | null | undefined>(undefined),
			SchemaVersion: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			VersionCreatedDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface CreateDiscovererRequest {
		Description?: string;

		/** Required */
		SourceArn: string;
		CrossAccount?: boolean | null;
		Tags?: Tags;
	}
	export interface CreateDiscovererRequestFormProperties {
		Description: FormControl<string | null | undefined>,

		/** Required */
		SourceArn: FormControl<string | null | undefined>,
		CrossAccount: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateDiscovererRequestFormGroup() {
		return new FormGroup<CreateDiscovererRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			SourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CrossAccount: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateRegistryRequest {
		Description?: string;
		Tags?: Tags;
	}
	export interface CreateRegistryRequestFormProperties {
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateRegistryRequestFormGroup() {
		return new FormGroup<CreateRegistryRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSchemaRequest {

		/** Required */
		Content: string;
		Description?: string;
		Tags?: Tags;

		/** Required */
		Type: Type;
	}
	export interface CreateSchemaRequestFormProperties {

		/** Required */
		Content: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<Type | null | undefined>,
	}
	export function CreateCreateSchemaRequestFormGroup() {
		return new FormGroup<CreateSchemaRequestFormProperties>({
			Content: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<Type | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteDiscovererRequest {
	}
	export interface DeleteDiscovererRequestFormProperties {
	}
	export function CreateDeleteDiscovererRequestFormGroup() {
		return new FormGroup<DeleteDiscovererRequestFormProperties>({
		});

	}

	export interface DeleteRegistryRequest {
	}
	export interface DeleteRegistryRequestFormProperties {
	}
	export function CreateDeleteRegistryRequestFormGroup() {
		return new FormGroup<DeleteRegistryRequestFormProperties>({
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

	export interface DeleteSchemaRequest {
	}
	export interface DeleteSchemaRequestFormProperties {
	}
	export function CreateDeleteSchemaRequestFormGroup() {
		return new FormGroup<DeleteSchemaRequestFormProperties>({
		});

	}

	export interface DeleteSchemaVersionRequest {
	}
	export interface DeleteSchemaVersionRequestFormProperties {
	}
	export function CreateDeleteSchemaVersionRequestFormGroup() {
		return new FormGroup<DeleteSchemaVersionRequestFormProperties>({
		});

	}

	export interface DescribeCodeBindingRequest {
	}
	export interface DescribeCodeBindingRequestFormProperties {
	}
	export function CreateDescribeCodeBindingRequestFormGroup() {
		return new FormGroup<DescribeCodeBindingRequestFormProperties>({
		});

	}

	export interface DescribeDiscovererRequest {
	}
	export interface DescribeDiscovererRequestFormProperties {
	}
	export function CreateDescribeDiscovererRequestFormGroup() {
		return new FormGroup<DescribeDiscovererRequestFormProperties>({
		});

	}

	export interface DescribeRegistryRequest {
	}
	export interface DescribeRegistryRequestFormProperties {
	}
	export function CreateDescribeRegistryRequestFormGroup() {
		return new FormGroup<DescribeRegistryRequestFormProperties>({
		});

	}

	export interface DescribeSchemaRequest {
	}
	export interface DescribeSchemaRequestFormProperties {
	}
	export function CreateDescribeSchemaRequestFormGroup() {
		return new FormGroup<DescribeSchemaRequestFormProperties>({
		});

	}

	export interface ExportSchemaRequest {
	}
	export interface ExportSchemaRequestFormProperties {
	}
	export function CreateExportSchemaRequestFormGroup() {
		return new FormGroup<ExportSchemaRequestFormProperties>({
		});

	}

	export interface GetCodeBindingSourceRequest {
	}
	export interface GetCodeBindingSourceRequestFormProperties {
	}
	export function CreateGetCodeBindingSourceRequestFormGroup() {
		return new FormGroup<GetCodeBindingSourceRequestFormProperties>({
		});

	}

	export interface GetDiscoveredSchemaRequest {

		/** Required */
		Events: Array<string>;

		/** Required */
		Type: Type;
	}
	export interface GetDiscoveredSchemaRequestFormProperties {

		/** Required */
		Type: FormControl<Type | null | undefined>,
	}
	export function CreateGetDiscoveredSchemaRequestFormGroup() {
		return new FormGroup<GetDiscoveredSchemaRequestFormProperties>({
			Type: new FormControl<Type | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetResourcePolicyRequest {
	}
	export interface GetResourcePolicyRequestFormProperties {
	}
	export function CreateGetResourcePolicyRequestFormGroup() {
		return new FormGroup<GetResourcePolicyRequestFormProperties>({
		});

	}

	export interface ListDiscoverersRequest {
	}
	export interface ListDiscoverersRequestFormProperties {
	}
	export function CreateListDiscoverersRequestFormGroup() {
		return new FormGroup<ListDiscoverersRequestFormProperties>({
		});

	}

	export interface ListRegistriesRequest {
	}
	export interface ListRegistriesRequestFormProperties {
	}
	export function CreateListRegistriesRequestFormGroup() {
		return new FormGroup<ListRegistriesRequestFormProperties>({
		});

	}

	export interface ListSchemaVersionsRequest {
	}
	export interface ListSchemaVersionsRequestFormProperties {
	}
	export function CreateListSchemaVersionsRequestFormGroup() {
		return new FormGroup<ListSchemaVersionsRequestFormProperties>({
		});

	}

	export interface ListSchemasRequest {
	}
	export interface ListSchemasRequestFormProperties {
	}
	export function CreateListSchemasRequestFormGroup() {
		return new FormGroup<ListSchemasRequestFormProperties>({
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

	export interface PutCodeBindingRequest {
	}
	export interface PutCodeBindingRequestFormProperties {
	}
	export function CreatePutCodeBindingRequestFormGroup() {
		return new FormGroup<PutCodeBindingRequestFormProperties>({
		});

	}


	/** The name of the policy. */
	export interface PutResourcePolicyRequest {

		/** Required */
		Policy: string;
		RevisionId?: string;
	}

	/** The name of the policy. */
	export interface PutResourcePolicyRequestFormProperties {

		/** Required */
		Policy: FormControl<string | null | undefined>,
		RevisionId: FormControl<string | null | undefined>,
	}
	export function CreatePutResourcePolicyRequestFormGroup() {
		return new FormGroup<PutResourcePolicyRequestFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RevisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchSchemasRequest {
	}
	export interface SearchSchemasRequestFormProperties {
	}
	export function CreateSearchSchemasRequestFormGroup() {
		return new FormGroup<SearchSchemasRequestFormProperties>({
		});

	}

	export interface StartDiscovererRequest {
	}
	export interface StartDiscovererRequestFormProperties {
	}
	export function CreateStartDiscovererRequestFormGroup() {
		return new FormGroup<StartDiscovererRequestFormProperties>({
		});

	}

	export interface StopDiscovererRequest {
	}
	export interface StopDiscovererRequestFormProperties {
	}
	export function CreateStopDiscovererRequestFormGroup() {
		return new FormGroup<StopDiscovererRequestFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/** Required */
		Tags: Tags;
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

	export interface UpdateDiscovererRequest {
		Description?: string;
		CrossAccount?: boolean | null;
	}
	export interface UpdateDiscovererRequestFormProperties {
		Description: FormControl<string | null | undefined>,
		CrossAccount: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateDiscovererRequestFormGroup() {
		return new FormGroup<UpdateDiscovererRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			CrossAccount: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Updates the registry. */
	export interface UpdateRegistryRequest {
		Description?: string;
	}

	/** Updates the registry. */
	export interface UpdateRegistryRequestFormProperties {
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRegistryRequestFormGroup() {
		return new FormGroup<UpdateRegistryRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSchemaRequest {
		ClientTokenId?: string;
		Content?: string;
		Description?: string;
		Type?: Type;
	}
	export interface UpdateSchemaRequestFormProperties {
		ClientTokenId: FormControl<string | null | undefined>,
		Content: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Type: FormControl<Type | null | undefined>,
	}
	export function CreateUpdateSchemaRequestFormGroup() {
		return new FormGroup<UpdateSchemaRequestFormProperties>({
			ClientTokenId: new FormControl<string | null | undefined>(undefined),
			Content: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<Type | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a discoverer.
		 * Post v1/discoverers
		 * @return {void} 
		 */
		CreateDiscoverer(requestBody: CreateDiscovererPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/discoverers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List the discoverers.
		 * Get v1/discoverers
		 * @param {string} discovererIdPrefix Specifying this limits the results to only those discoverer IDs that start with the specified prefix.
		 * @param {string} nextToken The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.
		 * @param {string} sourceArnPrefix Specifying this limits the results to only those ARNs that start with the specified prefix.
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDiscoverersResponse} Success
		 */
		ListDiscoverers(discovererIdPrefix: string | null | undefined, limit: number | null | undefined, nextToken: string | null | undefined, sourceArnPrefix: string | null | undefined, Limit: string | null | undefined, NextToken: string | null | undefined): Observable<ListDiscoverersResponse> {
			return this.http.get<ListDiscoverersResponse>(this.baseUri + 'v1/discoverers?discovererIdPrefix=' + (discovererIdPrefix == null ? '' : encodeURIComponent(discovererIdPrefix)) + '&limit=' + limit + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&sourceArnPrefix=' + (sourceArnPrefix == null ? '' : encodeURIComponent(sourceArnPrefix)) + '&Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a registry.
		 * Post v1/registries/name/{registryName}
		 * @param {string} registryName The name of the registry.
		 * @return {void} 
		 */
		CreateRegistry(registryName: string, requestBody: CreateRegistryPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/registries/name/' + (registryName == null ? '' : encodeURIComponent(registryName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a Registry.
		 * Delete v1/registries/name/{registryName}
		 * @param {string} registryName The name of the registry.
		 * @return {void} 
		 */
		DeleteRegistry(registryName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/registries/name/' + (registryName == null ? '' : encodeURIComponent(registryName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the registry.
		 * Get v1/registries/name/{registryName}
		 * @param {string} registryName The name of the registry.
		 * @return {DescribeRegistryResponse} Success
		 */
		DescribeRegistry(registryName: string): Observable<DescribeRegistryResponse> {
			return this.http.get<DescribeRegistryResponse>(this.baseUri + 'v1/registries/name/' + (registryName == null ? '' : encodeURIComponent(registryName)), {});
		}

		/**
		 * Updates a registry.
		 * Put v1/registries/name/{registryName}
		 * @param {string} registryName The name of the registry.
		 * @return {UpdateRegistryResponse} Success
		 */
		UpdateRegistry(registryName: string, requestBody: UpdateRegistryPutBody): Observable<UpdateRegistryResponse> {
			return this.http.put<UpdateRegistryResponse>(this.baseUri + 'v1/registries/name/' + (registryName == null ? '' : encodeURIComponent(registryName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a schema definition.</p> <note><p>Inactive schemas will be deleted after two years.</p></note>
		 * Post v1/registries/name/{registryName}/schemas/name/{schemaName}
		 * @param {string} registryName The name of the registry.
		 * @param {string} schemaName The name of the schema.
		 * @return {void} 
		 */
		CreateSchema(registryName: string, schemaName: string, requestBody: CreateSchemaPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/registries/name/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/schemas/name/' + (schemaName == null ? '' : encodeURIComponent(schemaName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a schema definition.
		 * Delete v1/registries/name/{registryName}/schemas/name/{schemaName}
		 * @param {string} registryName The name of the registry.
		 * @param {string} schemaName The name of the schema.
		 * @return {void} 
		 */
		DeleteSchema(registryName: string, schemaName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/registries/name/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/schemas/name/' + (schemaName == null ? '' : encodeURIComponent(schemaName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve the schema definition.
		 * Get v1/registries/name/{registryName}/schemas/name/{schemaName}
		 * @param {string} registryName The name of the registry.
		 * @param {string} schemaName The name of the schema.
		 * @param {string} schemaVersion Specifying this limits the results to only this schema version.
		 * @return {DescribeSchemaResponse} Success
		 */
		DescribeSchema(registryName: string, schemaName: string, schemaVersion: string | null | undefined): Observable<DescribeSchemaResponse> {
			return this.http.get<DescribeSchemaResponse>(this.baseUri + 'v1/registries/name/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/schemas/name/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '&schemaVersion=' + (schemaVersion == null ? '' : encodeURIComponent(schemaVersion)), {});
		}

		/**
		 * <p>Updates the schema definition</p> <note><p>Inactive schemas will be deleted after two years.</p></note>
		 * Put v1/registries/name/{registryName}/schemas/name/{schemaName}
		 * @param {string} registryName The name of the registry.
		 * @param {string} schemaName The name of the schema.
		 * @return {UpdateSchemaResponse} Success
		 */
		UpdateSchema(registryName: string, schemaName: string, requestBody: UpdateSchemaPutBody): Observable<UpdateSchemaResponse> {
			return this.http.put<UpdateSchemaResponse>(this.baseUri + 'v1/registries/name/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/schemas/name/' + (schemaName == null ? '' : encodeURIComponent(schemaName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a discoverer.
		 * Delete v1/discoverers/id/{discovererId}
		 * @param {string} discovererId The ID of the discoverer.
		 * @return {void} 
		 */
		DeleteDiscoverer(discovererId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/discoverers/id/' + (discovererId == null ? '' : encodeURIComponent(discovererId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the discoverer.
		 * Get v1/discoverers/id/{discovererId}
		 * @param {string} discovererId The ID of the discoverer.
		 * @return {DescribeDiscovererResponse} Success
		 */
		DescribeDiscoverer(discovererId: string): Observable<DescribeDiscovererResponse> {
			return this.http.get<DescribeDiscovererResponse>(this.baseUri + 'v1/discoverers/id/' + (discovererId == null ? '' : encodeURIComponent(discovererId)), {});
		}

		/**
		 * Updates the discoverer
		 * Put v1/discoverers/id/{discovererId}
		 * @param {string} discovererId The ID of the discoverer.
		 * @return {UpdateDiscovererResponse} Success
		 */
		UpdateDiscoverer(discovererId: string, requestBody: UpdateDiscovererPutBody): Observable<UpdateDiscovererResponse> {
			return this.http.put<UpdateDiscovererResponse>(this.baseUri + 'v1/discoverers/id/' + (discovererId == null ? '' : encodeURIComponent(discovererId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete the resource-based policy attached to the specified registry.
		 * Delete v1/policy
		 * @param {string} registryName The name of the registry.
		 * @return {void} 
		 */
		DeleteResourcePolicy(registryName: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/policy?registryName=' + (registryName == null ? '' : encodeURIComponent(registryName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the resource-based policy attached to a given registry.
		 * Get v1/policy
		 * @param {string} registryName The name of the registry.
		 * @return {GetResourcePolicyResponse} Success
		 */
		GetResourcePolicy(registryName: string | null | undefined): Observable<GetResourcePolicyResponse> {
			return this.http.get<GetResourcePolicyResponse>(this.baseUri + 'v1/policy?registryName=' + (registryName == null ? '' : encodeURIComponent(registryName)), {});
		}

		/**
		 * The name of the policy.
		 * Put v1/policy
		 * @param {string} registryName The name of the registry.
		 * @return {PutResourcePolicyResponse} Success
		 */
		PutResourcePolicy(registryName: string | null | undefined, requestBody: PutResourcePolicyPutBody): Observable<PutResourcePolicyResponse> {
			return this.http.put<PutResourcePolicyResponse>(this.baseUri + 'v1/policy?registryName=' + (registryName == null ? '' : encodeURIComponent(registryName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete the schema version definition
		 * Delete v1/registries/name/{registryName}/schemas/name/{schemaName}/version/{schemaVersion}
		 * @param {string} registryName The name of the registry.
		 * @param {string} schemaName The name of the schema.
		 * @param {string} schemaVersion The version number of the schema
		 * @return {void} 
		 */
		DeleteSchemaVersion(registryName: string, schemaName: string, schemaVersion: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/registries/name/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/schemas/name/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '/version/' + (schemaVersion == null ? '' : encodeURIComponent(schemaVersion)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describe the code binding URI.
		 * Get v1/registries/name/{registryName}/schemas/name/{schemaName}/language/{language}
		 * @param {string} language The language of the code binding.
		 * @param {string} registryName The name of the registry.
		 * @param {string} schemaName The name of the schema.
		 * @param {string} schemaVersion Specifying this limits the results to only this schema version.
		 * @return {DescribeCodeBindingResponse} Success
		 */
		DescribeCodeBinding(language: string, registryName: string, schemaName: string, schemaVersion: string | null | undefined): Observable<DescribeCodeBindingResponse> {
			return this.http.get<DescribeCodeBindingResponse>(this.baseUri + 'v1/registries/name/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/schemas/name/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '/language/' + (language == null ? '' : encodeURIComponent(language)) + '&schemaVersion=' + (schemaVersion == null ? '' : encodeURIComponent(schemaVersion)), {});
		}

		/**
		 * Put code binding URI
		 * Post v1/registries/name/{registryName}/schemas/name/{schemaName}/language/{language}
		 * @param {string} language The language of the code binding.
		 * @param {string} registryName The name of the registry.
		 * @param {string} schemaName The name of the schema.
		 * @param {string} schemaVersion Specifying this limits the results to only this schema version.
		 * @return {void} 
		 */
		PutCodeBinding(language: string, registryName: string, schemaName: string, schemaVersion: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/registries/name/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/schemas/name/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '/language/' + (language == null ? '' : encodeURIComponent(language)) + '&schemaVersion=' + (schemaVersion == null ? '' : encodeURIComponent(schemaVersion)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/registries/name/{registryName}/schemas/name/{schemaName}/export#type
		 * @param {string} registryName The name of the registry.
		 * @param {string} schemaName The name of the schema.
		 * @param {string} schemaVersion Specifying this limits the results to only this schema version.
		 * @return {ExportSchemaResponse} Success
		 */
		ExportSchema(registryName: string, schemaName: string, schemaVersion: string | null | undefined, type: string): Observable<ExportSchemaResponse> {
			return this.http.get<ExportSchemaResponse>(this.baseUri + 'v1/registries/name/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/schemas/name/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '/export#type&schemaVersion=' + (schemaVersion == null ? '' : encodeURIComponent(schemaVersion)) + '&type=' + (type == null ? '' : encodeURIComponent(type)), {});
		}

		/**
		 * Get the code binding source URI.
		 * Get v1/registries/name/{registryName}/schemas/name/{schemaName}/language/{language}/source
		 * @param {string} language The language of the code binding.
		 * @param {string} registryName The name of the registry.
		 * @param {string} schemaName The name of the schema.
		 * @param {string} schemaVersion Specifying this limits the results to only this schema version.
		 * @return {GetCodeBindingSourceResponse} Success
		 */
		GetCodeBindingSource(language: string, registryName: string, schemaName: string, schemaVersion: string | null | undefined): Observable<GetCodeBindingSourceResponse> {
			return this.http.get<GetCodeBindingSourceResponse>(this.baseUri + 'v1/registries/name/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/schemas/name/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '/language/' + (language == null ? '' : encodeURIComponent(language)) + '/source&schemaVersion=' + (schemaVersion == null ? '' : encodeURIComponent(schemaVersion)), {});
		}

		/**
		 * Get the discovered schema that was generated based on sampled events.
		 * Post v1/discover
		 * @return {GetDiscoveredSchemaResponse} Success
		 */
		GetDiscoveredSchema(requestBody: GetDiscoveredSchemaPostBody): Observable<GetDiscoveredSchemaResponse> {
			return this.http.post<GetDiscoveredSchemaResponse>(this.baseUri + 'v1/discover', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the registries.
		 * Get v1/registries
		 * @param {string} nextToken The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.
		 * @param {string} registryNamePrefix Specifying this limits the results to only those registry names that start with the specified prefix.
		 * @param {string} scope Can be set to Local or AWS to limit responses to your custom registries, or the ones provided by AWS.
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListRegistriesResponse} Success
		 */
		ListRegistries(limit: number | null | undefined, nextToken: string | null | undefined, registryNamePrefix: string | null | undefined, scope: string | null | undefined, Limit: string | null | undefined, NextToken: string | null | undefined): Observable<ListRegistriesResponse> {
			return this.http.get<ListRegistriesResponse>(this.baseUri + 'v1/registries?limit=' + limit + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&registryNamePrefix=' + (registryNamePrefix == null ? '' : encodeURIComponent(registryNamePrefix)) + '&scope=' + (scope == null ? '' : encodeURIComponent(scope)) + '&Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Provides a list of the schema versions and related information.
		 * Get v1/registries/name/{registryName}/schemas/name/{schemaName}/versions
		 * @param {string} nextToken The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.
		 * @param {string} registryName The name of the registry.
		 * @param {string} schemaName The name of the schema.
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSchemaVersionsResponse} Success
		 */
		ListSchemaVersions(limit: number | null | undefined, nextToken: string | null | undefined, registryName: string, schemaName: string, Limit: string | null | undefined, NextToken: string | null | undefined): Observable<ListSchemaVersionsResponse> {
			return this.http.get<ListSchemaVersionsResponse>(this.baseUri + 'v1/registries/name/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/schemas/name/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '/versions?limit=' + limit + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * List the schemas.
		 * Get v1/registries/name/{registryName}/schemas
		 * @param {string} nextToken The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.
		 * @param {string} registryName The name of the registry.
		 * @param {string} schemaNamePrefix Specifying this limits the results to only those schema names that start with the specified prefix.
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSchemasResponse} Success
		 */
		ListSchemas(limit: number | null | undefined, nextToken: string | null | undefined, registryName: string, schemaNamePrefix: string | null | undefined, Limit: string | null | undefined, NextToken: string | null | undefined): Observable<ListSchemasResponse> {
			return this.http.get<ListSchemasResponse>(this.baseUri + 'v1/registries/name/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/schemas?limit=' + limit + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&schemaNamePrefix=' + (schemaNamePrefix == null ? '' : encodeURIComponent(schemaNamePrefix)) + '&Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Get tags for resource.
		 * Get tags/{resource_arn}
		 * @param {string} resource_arn The ARN of the resource.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resource_arn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/{resource_arn}', {});
		}

		/**
		 * Add tags to a resource.
		 * Post tags/{resource_arn}
		 * @param {string} resource_arn The ARN of the resource.
		 * @return {void} 
		 */
		TagResource(resource_arn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags/{resource_arn}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Search the schemas
		 * Get v1/registries/name/{registryName}/schemas/search#keywords
		 * @param {string} keywords Specifying this limits the results to only schemas that include the provided keywords.
		 * @param {string} nextToken The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.
		 * @param {string} registryName The name of the registry.
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {SearchSchemasResponse} Success
		 */
		SearchSchemas(keywords: string, limit: number | null | undefined, nextToken: string | null | undefined, registryName: string, Limit: string | null | undefined, NextToken: string | null | undefined): Observable<SearchSchemasResponse> {
			return this.http.get<SearchSchemasResponse>(this.baseUri + 'v1/registries/name/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/schemas/search#keywords?keywords=' + (keywords == null ? '' : encodeURIComponent(keywords)) + '&limit=' + limit + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Starts the discoverer
		 * Post v1/discoverers/id/{discovererId}/start
		 * @param {string} discovererId The ID of the discoverer.
		 * @return {StartDiscovererResponse} Success
		 */
		StartDiscoverer(discovererId: string): Observable<StartDiscovererResponse> {
			return this.http.post<StartDiscovererResponse>(this.baseUri + 'v1/discoverers/id/' + (discovererId == null ? '' : encodeURIComponent(discovererId)) + '/start', null, {});
		}

		/**
		 * Stops the discoverer
		 * Post v1/discoverers/id/{discovererId}/stop
		 * @param {string} discovererId The ID of the discoverer.
		 * @return {StopDiscovererResponse} Success
		 */
		StopDiscoverer(discovererId: string): Observable<StopDiscovererResponse> {
			return this.http.post<StopDiscovererResponse>(this.baseUri + 'v1/discoverers/id/' + (discovererId == null ? '' : encodeURIComponent(discovererId)) + '/stop', null, {});
		}

		/**
		 * Removes tags from a resource.
		 * Delete tags/{resource_arn}#tagKeys
		 * @param {string} resource_arn The ARN of the resource.
		 * @param {Array<string>} tagKeys Keys of key-value pairs.
		 * @return {void} 
		 */
		UntagResource(resource_arn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tags/{resource_arn}#tagKeys?' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}
	}

	export interface CreateDiscovererPostBody {

		/**
		 * A description for the discoverer.
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string | null;

		/**
		 * The ARN of the event bus.
		 * Required
		 * Max length: 1600
		 * Min length: 20
		 */
		SourceArn: string;

		/** Support discovery of schemas in events sent to the bus from another account. (default: true). */
		CrossAccount?: boolean | null;

		/** Key-value pairs associated with a resource. */
		tags?: {[id: string]: string };
	}
	export interface CreateDiscovererPostBodyFormProperties {

		/**
		 * A description for the discoverer.
		 * Max length: 256
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The ARN of the event bus.
		 * Required
		 * Max length: 1600
		 * Min length: 20
		 */
		SourceArn: FormControl<string | null | undefined>,

		/** Support discovery of schemas in events sent to the bus from another account. (default: true). */
		CrossAccount: FormControl<boolean | null | undefined>,

		/** Key-value pairs associated with a resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateDiscovererPostBodyFormGroup() {
		return new FormGroup<CreateDiscovererPostBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256)]),
			SourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(1600)]),
			CrossAccount: new FormControl<boolean | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateRegistryPostBody {

		/**
		 * A description of the registry to be created.
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string | null;

		/** Key-value pairs associated with a resource. */
		tags?: {[id: string]: string };
	}
	export interface CreateRegistryPostBodyFormProperties {

		/**
		 * A description of the registry to be created.
		 * Max length: 256
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/** Key-value pairs associated with a resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateRegistryPostBodyFormGroup() {
		return new FormGroup<CreateRegistryPostBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256)]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface UpdateRegistryPutBody {

		/**
		 * The description of the registry to update.
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string | null;
	}
	export interface UpdateRegistryPutBodyFormProperties {

		/**
		 * The description of the registry to update.
		 * Max length: 256
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRegistryPutBodyFormGroup() {
		return new FormGroup<UpdateRegistryPutBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256)]),
		});

	}

	export interface CreateSchemaPostBody {

		/**
		 * The source of the schema definition.
		 * Required
		 * Max length: 100000
		 * Min length: 1
		 */
		Content: string;

		/**
		 * A description of the schema.
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string | null;

		/** Key-value pairs associated with a resource. */
		tags?: {[id: string]: string };

		/**
		 * The type of schema.
		 * Required
		 */
		Type: Type;
	}
	export interface CreateSchemaPostBodyFormProperties {

		/**
		 * The source of the schema definition.
		 * Required
		 * Max length: 100000
		 * Min length: 1
		 */
		Content: FormControl<string | null | undefined>,

		/**
		 * A description of the schema.
		 * Max length: 256
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/** Key-value pairs associated with a resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The type of schema.
		 * Required
		 */
		Type: FormControl<Type | null | undefined>,
	}
	export function CreateCreateSchemaPostBodyFormGroup() {
		return new FormGroup<CreateSchemaPostBodyFormProperties>({
			Content: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100000)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256)]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			Type: new FormControl<Type | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateSchemaPutBody {

		/**
		 * The ID of the client token.
		 * Max length: 36
		 * Min length: 0
		 */
		ClientTokenId?: string | null;

		/**
		 * The source of the schema definition.
		 * Max length: 100000
		 * Min length: 1
		 */
		Content?: string | null;

		/**
		 * The description of the schema.
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string | null;

		/** The schema type for the events schema. */
		Type?: Type | null;
	}
	export interface UpdateSchemaPutBodyFormProperties {

		/**
		 * The ID of the client token.
		 * Max length: 36
		 * Min length: 0
		 */
		ClientTokenId: FormControl<string | null | undefined>,

		/**
		 * The source of the schema definition.
		 * Max length: 100000
		 * Min length: 1
		 */
		Content: FormControl<string | null | undefined>,

		/**
		 * The description of the schema.
		 * Max length: 256
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/** The schema type for the events schema. */
		Type: FormControl<Type | null | undefined>,
	}
	export function CreateUpdateSchemaPutBodyFormGroup() {
		return new FormGroup<UpdateSchemaPutBodyFormProperties>({
			ClientTokenId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(36)]),
			Content: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100000)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256)]),
			Type: new FormControl<Type | null | undefined>(undefined),
		});

	}

	export interface UpdateDiscovererPutBody {

		/**
		 * The description of the discoverer to update.
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string | null;

		/** Support discovery of schemas in events sent to the bus from another account. (default: true) */
		CrossAccount?: boolean | null;
	}
	export interface UpdateDiscovererPutBodyFormProperties {

		/**
		 * The description of the discoverer to update.
		 * Max length: 256
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/** Support discovery of schemas in events sent to the bus from another account. (default: true) */
		CrossAccount: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateDiscovererPutBodyFormGroup() {
		return new FormGroup<UpdateDiscovererPutBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256)]),
			CrossAccount: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutResourcePolicyPutBody {

		/**
		 * The resource-based policy.
		 * Required
		 */
		Policy: string;

		/** The revision ID of the policy. */
		RevisionId?: string | null;
	}
	export interface PutResourcePolicyPutBodyFormProperties {

		/**
		 * The resource-based policy.
		 * Required
		 */
		Policy: FormControl<string | null | undefined>,

		/** The revision ID of the policy. */
		RevisionId: FormControl<string | null | undefined>,
	}
	export function CreatePutResourcePolicyPutBodyFormGroup() {
		return new FormGroup<PutResourcePolicyPutBodyFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RevisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDiscoveredSchemaPostBody {

		/**
		 * An array of strings where each string is a JSON event. These are the events that were used to generate the schema. The array includes a single type of event and has a maximum size of 10 events.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		Events: Array<string>;

		/**
		 * The type of event.
		 * Required
		 */
		Type: Type;
	}
	export interface GetDiscoveredSchemaPostBodyFormProperties {

		/**
		 * The type of event.
		 * Required
		 */
		Type: FormControl<Type | null | undefined>,
	}
	export function CreateGetDiscoveredSchemaPostBodyFormGroup() {
		return new FormGroup<GetDiscoveredSchemaPostBodyFormProperties>({
			Type: new FormControl<Type | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * Key-value pairs associated with a resource.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * Key-value pairs associated with a resource.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

}

