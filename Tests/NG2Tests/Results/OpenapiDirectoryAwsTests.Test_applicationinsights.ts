import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateApplicationResponse {

		/** Describes the status of the application. */
		ApplicationInfo?: ApplicationInfo;
	}
	export interface CreateApplicationResponseFormProperties {
	}
	export function CreateCreateApplicationResponseFormGroup() {
		return new FormGroup<CreateApplicationResponseFormProperties>({
		});

	}


	/** Describes the status of the application. */
	export interface ApplicationInfo {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName?: string | null;
		LifeCycle?: string | null;

		/**
		 * Max length: 300
		 * Min length: 20
		 */
		OpsItemSNSTopicArn?: string | null;
		OpsCenterEnabled?: boolean | null;
		CWEMonitorEnabled?: boolean | null;
		Remarks?: string | null;
	}

	/** Describes the status of the application. */
	export interface ApplicationInfoFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName: FormControl<string | null | undefined>,
		LifeCycle: FormControl<string | null | undefined>,

		/**
		 * Max length: 300
		 * Min length: 20
		 */
		OpsItemSNSTopicArn: FormControl<string | null | undefined>,
		OpsCenterEnabled: FormControl<boolean | null | undefined>,
		CWEMonitorEnabled: FormControl<boolean | null | undefined>,
		Remarks: FormControl<string | null | undefined>,
	}
	export function CreateApplicationInfoFormGroup() {
		return new FormGroup<ApplicationInfoFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9\.\-_]*')]),
			LifeCycle: new FormControl<string | null | undefined>(undefined),
			OpsItemSNSTopicArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(300), Validators.minLength(20)]),
			OpsCenterEnabled: new FormControl<boolean | null | undefined>(undefined),
			CWEMonitorEnabled: new FormControl<boolean | null | undefined>(undefined),
			Remarks: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateApplicationRequest {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName: string;
		OpsCenterEnabled?: boolean | null;
		CWEMonitorEnabled?: boolean | null;

		/**
		 * Max length: 300
		 * Min length: 20
		 */
		OpsItemSNSTopicArn?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateApplicationRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName: FormControl<string | null | undefined>,
		OpsCenterEnabled: FormControl<boolean | null | undefined>,
		CWEMonitorEnabled: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 300
		 * Min length: 20
		 */
		OpsItemSNSTopicArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateApplicationRequestFormGroup() {
		return new FormGroup<CreateApplicationRequestFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9\.\-_]*')]),
			OpsCenterEnabled: new FormControl<boolean | null | undefined>(undefined),
			CWEMonitorEnabled: new FormControl<boolean | null | undefined>(undefined),
			OpsItemSNSTopicArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(300), Validators.minLength(20)]),
		});

	}


	/** <p>An object that defines the tags associated with an application. A <i>tag</i> is a label that you optionally define and associate with an application. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for a more specific tag value. A tag value acts as a descriptor within a tag key. A tag key can contain as many as 128 characters. A tag value can contain as many as 256 characters. The characters can be Unicode letters, digits, white space, or one of the following symbols: _ . : / = + -. The following additional restrictions apply to tags:</p> <ul> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>For each associated resource, each tag key must be unique and it can have only one value.</p> </li> <li> <p>The <code>aws:</code> prefix is reserved for use by AWS; you can’t use it in any tag keys or values that you define. In addition, you can't edit or remove tag keys or values that use this prefix. </p> </li> </ul> */
	export interface Tag {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Key: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		Value: string;
	}

	/** <p>An object that defines the tags associated with an application. A <i>tag</i> is a label that you optionally define and associate with an application. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for a more specific tag value. A tag value acts as a descriptor within a tag key. A tag key can contain as many as 128 characters. A tag value can contain as many as 256 characters. The characters can be Unicode letters, digits, white space, or one of the following symbols: _ . : / = + -. The following additional restrictions apply to tags:</p> <ul> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>For each associated resource, each tag key must be unique and it can have only one value.</p> </li> <li> <p>The <code>aws:</code> prefix is reserved for use by AWS; you can’t use it in any tag keys or values that you define. In addition, you can't edit or remove tag keys or values that use this prefix. </p> </li> </ul> */
	export interface TagFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(0)]),
		});

	}

	export interface ResourceInUseException {
	}
	export interface ResourceInUseExceptionFormProperties {
	}
	export function CreateResourceInUseExceptionFormGroup() {
		return new FormGroup<ResourceInUseExceptionFormProperties>({
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

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface TagsAlreadyExistException {
	}
	export interface TagsAlreadyExistExceptionFormProperties {
	}
	export function CreateTagsAlreadyExistExceptionFormGroup() {
		return new FormGroup<TagsAlreadyExistExceptionFormProperties>({
		});

	}

	export interface CreateComponentResponse {
	}
	export interface CreateComponentResponseFormProperties {
	}
	export function CreateCreateComponentResponseFormGroup() {
		return new FormGroup<CreateComponentResponseFormProperties>({
		});

	}

	export interface CreateComponentRequest {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName: string;

		/** Required */
		ComponentName: string;

		/** Required */
		ResourceList: Array<string>;
	}
	export interface CreateComponentRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName: FormControl<string | null | undefined>,

		/** Required */
		ComponentName: FormControl<string | null | undefined>,
	}
	export function CreateCreateComponentRequestFormGroup() {
		return new FormGroup<CreateComponentRequestFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9\.\-_]*')]),
			ComponentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateLogPatternResponse {

		/** An object that defines the log patterns that belongs to a <code>LogPatternSet</code>. */
		LogPattern?: LogPattern;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName?: string | null;
	}
	export interface CreateLogPatternResponseFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName: FormControl<string | null | undefined>,
	}
	export function CreateCreateLogPatternResponseFormGroup() {
		return new FormGroup<CreateLogPatternResponseFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9\.\-_]*')]),
		});

	}


	/** An object that defines the log patterns that belongs to a <code>LogPatternSet</code>. */
	export interface LogPattern {

		/**
		 * Max length: 30
		 * Min length: 1
		 */
		PatternSetName?: string | null;

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		PatternName?: string | null;

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		Pattern?: string | null;
		Rank?: number | null;
	}

	/** An object that defines the log patterns that belongs to a <code>LogPatternSet</code>. */
	export interface LogPatternFormProperties {

		/**
		 * Max length: 30
		 * Min length: 1
		 */
		PatternSetName: FormControl<string | null | undefined>,

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		PatternName: FormControl<string | null | undefined>,

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		Pattern: FormControl<string | null | undefined>,
		Rank: FormControl<number | null | undefined>,
	}
	export function CreateLogPatternFormGroup() {
		return new FormGroup<LogPatternFormProperties>({
			PatternSetName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(30), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9\.\-_]*')]),
			PatternName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9\.\-_]*')]),
			Pattern: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50), Validators.minLength(1)]),
			Rank: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateLogPatternRequest {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName: string;

		/**
		 * Required
		 * Max length: 30
		 * Min length: 1
		 */
		PatternSetName: string;

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		PatternName: string;

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		Pattern: string;

		/** Required */
		Rank: number;
	}
	export interface CreateLogPatternRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 30
		 * Min length: 1
		 */
		PatternSetName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		PatternName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		Pattern: FormControl<string | null | undefined>,

		/** Required */
		Rank: FormControl<number | null | undefined>,
	}
	export function CreateCreateLogPatternRequestFormGroup() {
		return new FormGroup<CreateLogPatternRequestFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9\.\-_]*')]),
			PatternSetName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(30), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9\.\-_]*')]),
			PatternName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(50), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9\.\-_]*')]),
			Pattern: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(50), Validators.minLength(1)]),
			Rank: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteApplicationResponse {
	}
	export interface DeleteApplicationResponseFormProperties {
	}
	export function CreateDeleteApplicationResponseFormGroup() {
		return new FormGroup<DeleteApplicationResponseFormProperties>({
		});

	}

	export interface DeleteApplicationRequest {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName: string;
	}
	export interface DeleteApplicationRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteApplicationRequestFormGroup() {
		return new FormGroup<DeleteApplicationRequestFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9\.\-_]*')]),
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

	export interface DeleteComponentResponse {
	}
	export interface DeleteComponentResponseFormProperties {
	}
	export function CreateDeleteComponentResponseFormGroup() {
		return new FormGroup<DeleteComponentResponseFormProperties>({
		});

	}

	export interface DeleteComponentRequest {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName: string;

		/** Required */
		ComponentName: string;
	}
	export interface DeleteComponentRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName: FormControl<string | null | undefined>,

		/** Required */
		ComponentName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteComponentRequestFormGroup() {
		return new FormGroup<DeleteComponentRequestFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9\.\-_]*')]),
			ComponentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteLogPatternResponse {
	}
	export interface DeleteLogPatternResponseFormProperties {
	}
	export function CreateDeleteLogPatternResponseFormGroup() {
		return new FormGroup<DeleteLogPatternResponseFormProperties>({
		});

	}

	export interface DeleteLogPatternRequest {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName: string;

		/**
		 * Required
		 * Max length: 30
		 * Min length: 1
		 */
		PatternSetName: string;

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		PatternName: string;
	}
	export interface DeleteLogPatternRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 30
		 * Min length: 1
		 */
		PatternSetName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		PatternName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteLogPatternRequestFormGroup() {
		return new FormGroup<DeleteLogPatternRequestFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9\.\-_]*')]),
			PatternSetName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(30), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9\.\-_]*')]),
			PatternName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(50), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9\.\-_]*')]),
		});

	}

	export interface DescribeApplicationResponse {

		/** Describes the status of the application. */
		ApplicationInfo?: ApplicationInfo;
	}
	export interface DescribeApplicationResponseFormProperties {
	}
	export function CreateDescribeApplicationResponseFormGroup() {
		return new FormGroup<DescribeApplicationResponseFormProperties>({
		});

	}

	export interface DescribeApplicationRequest {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName: string;
	}
	export interface DescribeApplicationRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeApplicationRequestFormGroup() {
		return new FormGroup<DescribeApplicationRequestFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9\.\-_]*')]),
		});

	}

	export interface DescribeComponentResponse {

		/** Describes a standalone resource or similarly grouped resources that the application is made up of. */
		ApplicationComponent?: ApplicationComponent;
		ResourceList?: Array<string>;
	}
	export interface DescribeComponentResponseFormProperties {
	}
	export function CreateDescribeComponentResponseFormGroup() {
		return new FormGroup<DescribeComponentResponseFormProperties>({
		});

	}


	/** Describes a standalone resource or similarly grouped resources that the application is made up of. */
	export interface ApplicationComponent {
		ComponentName?: string | null;
		ResourceType?: string | null;

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		Tier?: ApplicationComponentTier | null;
		Monitor?: boolean | null;
	}

	/** Describes a standalone resource or similarly grouped resources that the application is made up of. */
	export interface ApplicationComponentFormProperties {
		ComponentName: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		Tier: FormControl<ApplicationComponentTier | null | undefined>,
		Monitor: FormControl<boolean | null | undefined>,
	}
	export function CreateApplicationComponentFormGroup() {
		return new FormGroup<ApplicationComponentFormProperties>({
			ComponentName: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined),
			Tier: new FormControl<ApplicationComponentTier | null | undefined>(undefined, [Validators.maxLength(50), Validators.minLength(1)]),
			Monitor: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ApplicationComponentTier { DEFAULT = 0, DOT_NET_CORE = 1, DOT_NET_WORKER = 2, DOT_NET_WEB = 3, SQL_SERVER = 4 }

	export interface DescribeComponentRequest {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName: string;

		/** Required */
		ComponentName: string;
	}
	export interface DescribeComponentRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName: FormControl<string | null | undefined>,

		/** Required */
		ComponentName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeComponentRequestFormGroup() {
		return new FormGroup<DescribeComponentRequestFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9\.\-_]*')]),
			ComponentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeComponentConfigurationResponse {
		Monitor?: boolean | null;

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		Tier?: ApplicationComponentTier | null;

		/**
		 * Max length: 10000
		 * Min length: 1
		 */
		ComponentConfiguration?: string | null;
	}
	export interface DescribeComponentConfigurationResponseFormProperties {
		Monitor: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		Tier: FormControl<ApplicationComponentTier | null | undefined>,

		/**
		 * Max length: 10000
		 * Min length: 1
		 */
		ComponentConfiguration: FormControl<string | null | undefined>,
	}
	export function CreateDescribeComponentConfigurationResponseFormGroup() {
		return new FormGroup<DescribeComponentConfigurationResponseFormProperties>({
			Monitor: new FormControl<boolean | null | undefined>(undefined),
			Tier: new FormControl<ApplicationComponentTier | null | undefined>(undefined, [Validators.maxLength(50), Validators.minLength(1)]),
			ComponentConfiguration: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(10000), Validators.minLength(1)]),
		});

	}

	export interface DescribeComponentConfigurationRequest {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName: string;

		/** Required */
		ComponentName: string;
	}
	export interface DescribeComponentConfigurationRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName: FormControl<string | null | undefined>,

		/** Required */
		ComponentName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeComponentConfigurationRequestFormGroup() {
		return new FormGroup<DescribeComponentConfigurationRequestFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9\.\-_]*')]),
			ComponentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeComponentConfigurationRecommendationResponse {

		/**
		 * Max length: 10000
		 * Min length: 1
		 */
		ComponentConfiguration?: string | null;
	}
	export interface DescribeComponentConfigurationRecommendationResponseFormProperties {

		/**
		 * Max length: 10000
		 * Min length: 1
		 */
		ComponentConfiguration: FormControl<string | null | undefined>,
	}
	export function CreateDescribeComponentConfigurationRecommendationResponseFormGroup() {
		return new FormGroup<DescribeComponentConfigurationRecommendationResponseFormProperties>({
			ComponentConfiguration: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(10000), Validators.minLength(1)]),
		});

	}

	export interface DescribeComponentConfigurationRecommendationRequest {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName: string;

		/** Required */
		ComponentName: string;

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		Tier: ApplicationComponentTier;
	}
	export interface DescribeComponentConfigurationRecommendationRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName: FormControl<string | null | undefined>,

		/** Required */
		ComponentName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		Tier: FormControl<ApplicationComponentTier | null | undefined>,
	}
	export function CreateDescribeComponentConfigurationRecommendationRequestFormGroup() {
		return new FormGroup<DescribeComponentConfigurationRecommendationRequestFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9\.\-_]*')]),
			ComponentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Tier: new FormControl<ApplicationComponentTier | null | undefined>(undefined, [Validators.required, Validators.maxLength(50), Validators.minLength(1)]),
		});

	}

	export interface DescribeLogPatternResponse {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName?: string | null;

		/** An object that defines the log patterns that belongs to a <code>LogPatternSet</code>. */
		LogPattern?: LogPattern;
	}
	export interface DescribeLogPatternResponseFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLogPatternResponseFormGroup() {
		return new FormGroup<DescribeLogPatternResponseFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9\.\-_]*')]),
		});

	}

	export interface DescribeLogPatternRequest {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName: string;

		/**
		 * Required
		 * Max length: 30
		 * Min length: 1
		 */
		PatternSetName: string;

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		PatternName: string;
	}
	export interface DescribeLogPatternRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 30
		 * Min length: 1
		 */
		PatternSetName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		PatternName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLogPatternRequestFormGroup() {
		return new FormGroup<DescribeLogPatternRequestFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9\.\-_]*')]),
			PatternSetName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(30), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9\.\-_]*')]),
			PatternName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(50), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9\.\-_]*')]),
		});

	}

	export interface DescribeObservationResponse {

		/** Describes an anomaly or error with the application. */
		Observation?: Observation;
	}
	export interface DescribeObservationResponseFormProperties {
	}
	export function CreateDescribeObservationResponseFormGroup() {
		return new FormGroup<DescribeObservationResponseFormProperties>({
		});

	}


	/** Describes an anomaly or error with the application. */
	export interface Observation {

		/**
		 * Max length: 38
		 * Min length: 38
		 */
		Id?: string | null;
		StartTime?: Date | null;
		EndTime?: Date | null;
		SourceType?: string | null;
		SourceARN?: string | null;
		LogGroup?: string | null;
		LineTime?: Date | null;
		LogText?: string | null;
		LogFilter?: ObservationLogFilter | null;
		MetricNamespace?: string | null;
		MetricName?: string | null;
		Unit?: string | null;
		Value?: number | null;
		CloudWatchEventId?: string | null;
		CloudWatchEventSource?: ObservationCloudWatchEventSource | null;
		CloudWatchEventDetailType?: string | null;
		HealthEventArn?: string | null;
		HealthService?: string | null;
		HealthEventTypeCode?: string | null;
		HealthEventTypeCategory?: string | null;
		HealthEventDescription?: string | null;
		CodeDeployDeploymentId?: string | null;
		CodeDeployDeploymentGroup?: string | null;
		CodeDeployState?: string | null;
		CodeDeployApplication?: string | null;
		CodeDeployInstanceGroupId?: string | null;
		Ec2State?: string | null;
		XRayFaultPercent?: number | null;
		XRayThrottlePercent?: number | null;
		XRayErrorPercent?: number | null;
		XRayRequestCount?: number | null;
		XRayRequestAverageLatency?: number | null;
		XRayNodeName?: string | null;
		XRayNodeType?: string | null;
	}

	/** Describes an anomaly or error with the application. */
	export interface ObservationFormProperties {

		/**
		 * Max length: 38
		 * Min length: 38
		 */
		Id: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		SourceType: FormControl<string | null | undefined>,
		SourceARN: FormControl<string | null | undefined>,
		LogGroup: FormControl<string | null | undefined>,
		LineTime: FormControl<Date | null | undefined>,
		LogText: FormControl<string | null | undefined>,
		LogFilter: FormControl<ObservationLogFilter | null | undefined>,
		MetricNamespace: FormControl<string | null | undefined>,
		MetricName: FormControl<string | null | undefined>,
		Unit: FormControl<string | null | undefined>,
		Value: FormControl<number | null | undefined>,
		CloudWatchEventId: FormControl<string | null | undefined>,
		CloudWatchEventSource: FormControl<ObservationCloudWatchEventSource | null | undefined>,
		CloudWatchEventDetailType: FormControl<string | null | undefined>,
		HealthEventArn: FormControl<string | null | undefined>,
		HealthService: FormControl<string | null | undefined>,
		HealthEventTypeCode: FormControl<string | null | undefined>,
		HealthEventTypeCategory: FormControl<string | null | undefined>,
		HealthEventDescription: FormControl<string | null | undefined>,
		CodeDeployDeploymentId: FormControl<string | null | undefined>,
		CodeDeployDeploymentGroup: FormControl<string | null | undefined>,
		CodeDeployState: FormControl<string | null | undefined>,
		CodeDeployApplication: FormControl<string | null | undefined>,
		CodeDeployInstanceGroupId: FormControl<string | null | undefined>,
		Ec2State: FormControl<string | null | undefined>,
		XRayFaultPercent: FormControl<number | null | undefined>,
		XRayThrottlePercent: FormControl<number | null | undefined>,
		XRayErrorPercent: FormControl<number | null | undefined>,
		XRayRequestCount: FormControl<number | null | undefined>,
		XRayRequestAverageLatency: FormControl<number | null | undefined>,
		XRayNodeName: FormControl<string | null | undefined>,
		XRayNodeType: FormControl<string | null | undefined>,
	}
	export function CreateObservationFormGroup() {
		return new FormGroup<ObservationFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(38), Validators.minLength(38), Validators.pattern('o-[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}')]),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			SourceType: new FormControl<string | null | undefined>(undefined),
			SourceARN: new FormControl<string | null | undefined>(undefined),
			LogGroup: new FormControl<string | null | undefined>(undefined),
			LineTime: new FormControl<Date | null | undefined>(undefined),
			LogText: new FormControl<string | null | undefined>(undefined),
			LogFilter: new FormControl<ObservationLogFilter | null | undefined>(undefined),
			MetricNamespace: new FormControl<string | null | undefined>(undefined),
			MetricName: new FormControl<string | null | undefined>(undefined),
			Unit: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<number | null | undefined>(undefined),
			CloudWatchEventId: new FormControl<string | null | undefined>(undefined),
			CloudWatchEventSource: new FormControl<ObservationCloudWatchEventSource | null | undefined>(undefined),
			CloudWatchEventDetailType: new FormControl<string | null | undefined>(undefined),
			HealthEventArn: new FormControl<string | null | undefined>(undefined),
			HealthService: new FormControl<string | null | undefined>(undefined),
			HealthEventTypeCode: new FormControl<string | null | undefined>(undefined),
			HealthEventTypeCategory: new FormControl<string | null | undefined>(undefined),
			HealthEventDescription: new FormControl<string | null | undefined>(undefined),
			CodeDeployDeploymentId: new FormControl<string | null | undefined>(undefined),
			CodeDeployDeploymentGroup: new FormControl<string | null | undefined>(undefined),
			CodeDeployState: new FormControl<string | null | undefined>(undefined),
			CodeDeployApplication: new FormControl<string | null | undefined>(undefined),
			CodeDeployInstanceGroupId: new FormControl<string | null | undefined>(undefined),
			Ec2State: new FormControl<string | null | undefined>(undefined),
			XRayFaultPercent: new FormControl<number | null | undefined>(undefined),
			XRayThrottlePercent: new FormControl<number | null | undefined>(undefined),
			XRayErrorPercent: new FormControl<number | null | undefined>(undefined),
			XRayRequestCount: new FormControl<number | null | undefined>(undefined),
			XRayRequestAverageLatency: new FormControl<number | null | undefined>(undefined),
			XRayNodeName: new FormControl<string | null | undefined>(undefined),
			XRayNodeType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ObservationLogFilter { ERROR = 0, WARN = 1, INFO = 2 }

	export enum ObservationCloudWatchEventSource { EC2 = 0, CODE_DEPLOY = 1, HEALTH = 2 }

	export interface DescribeObservationRequest {

		/**
		 * Required
		 * Max length: 38
		 * Min length: 38
		 */
		ObservationId: string;
	}
	export interface DescribeObservationRequestFormProperties {

		/**
		 * Required
		 * Max length: 38
		 * Min length: 38
		 */
		ObservationId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeObservationRequestFormGroup() {
		return new FormGroup<DescribeObservationRequestFormProperties>({
			ObservationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(38), Validators.minLength(38), Validators.pattern('o-[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}')]),
		});

	}

	export interface DescribeProblemResponse {

		/** Describes a problem that is detected by correlating observations. */
		Problem?: Problem;
	}
	export interface DescribeProblemResponseFormProperties {
	}
	export function CreateDescribeProblemResponseFormGroup() {
		return new FormGroup<DescribeProblemResponseFormProperties>({
		});

	}


	/** Describes a problem that is detected by correlating observations. */
	export interface Problem {

		/**
		 * Max length: 38
		 * Min length: 38
		 */
		Id?: string | null;
		Title?: string | null;
		Insights?: string | null;
		Status?: ProblemStatus | null;
		AffectedResource?: string | null;
		StartTime?: Date | null;
		EndTime?: Date | null;
		SeverityLevel?: ProblemSeverityLevel | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName?: string | null;
		Feedback?: Feedback;
	}

	/** Describes a problem that is detected by correlating observations. */
	export interface ProblemFormProperties {

		/**
		 * Max length: 38
		 * Min length: 38
		 */
		Id: FormControl<string | null | undefined>,
		Title: FormControl<string | null | undefined>,
		Insights: FormControl<string | null | undefined>,
		Status: FormControl<ProblemStatus | null | undefined>,
		AffectedResource: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		SeverityLevel: FormControl<ProblemSeverityLevel | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName: FormControl<string | null | undefined>,
	}
	export function CreateProblemFormGroup() {
		return new FormGroup<ProblemFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(38), Validators.minLength(38), Validators.pattern('p-[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}')]),
			Title: new FormControl<string | null | undefined>(undefined),
			Insights: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ProblemStatus | null | undefined>(undefined),
			AffectedResource: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			SeverityLevel: new FormControl<ProblemSeverityLevel | null | undefined>(undefined),
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9\.\-_]*')]),
		});

	}

	export enum ProblemStatus { IGNORE = 0, RESOLVED = 1, PENDING = 2 }

	export enum ProblemSeverityLevel { Low = 0, Medium = 1, High = 2 }

	export interface Feedback {
	}
	export interface FeedbackFormProperties {
	}
	export function CreateFeedbackFormGroup() {
		return new FormGroup<FeedbackFormProperties>({
		});

	}

	export interface DescribeProblemRequest {

		/**
		 * Required
		 * Max length: 38
		 * Min length: 38
		 */
		ProblemId: string;
	}
	export interface DescribeProblemRequestFormProperties {

		/**
		 * Required
		 * Max length: 38
		 * Min length: 38
		 */
		ProblemId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeProblemRequestFormGroup() {
		return new FormGroup<DescribeProblemRequestFormProperties>({
			ProblemId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(38), Validators.minLength(38), Validators.pattern('p-[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}')]),
		});

	}

	export interface DescribeProblemObservationsResponse {

		/** Describes observations related to the problem. */
		RelatedObservations?: RelatedObservations;
	}
	export interface DescribeProblemObservationsResponseFormProperties {
	}
	export function CreateDescribeProblemObservationsResponseFormGroup() {
		return new FormGroup<DescribeProblemObservationsResponseFormProperties>({
		});

	}


	/** Describes observations related to the problem. */
	export interface RelatedObservations {
		ObservationList?: Array<Observation>;
	}

	/** Describes observations related to the problem. */
	export interface RelatedObservationsFormProperties {
	}
	export function CreateRelatedObservationsFormGroup() {
		return new FormGroup<RelatedObservationsFormProperties>({
		});

	}

	export interface DescribeProblemObservationsRequest {

		/**
		 * Required
		 * Max length: 38
		 * Min length: 38
		 */
		ProblemId: string;
	}
	export interface DescribeProblemObservationsRequestFormProperties {

		/**
		 * Required
		 * Max length: 38
		 * Min length: 38
		 */
		ProblemId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeProblemObservationsRequestFormGroup() {
		return new FormGroup<DescribeProblemObservationsRequestFormProperties>({
			ProblemId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(38), Validators.minLength(38), Validators.pattern('p-[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}')]),
		});

	}

	export interface ListApplicationsResponse {
		ApplicationInfoList?: Array<ApplicationInfo>;
		NextToken?: string | null;
	}
	export interface ListApplicationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListApplicationsResponseFormGroup() {
		return new FormGroup<ListApplicationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListApplicationsRequest {

		/**
		 * Minimum: 1
		 * Maximum: 40
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface ListApplicationsRequestFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 40
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListApplicationsRequestFormGroup() {
		return new FormGroup<ListApplicationsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(40)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListComponentsResponse {
		ApplicationComponentList?: Array<ApplicationComponent>;
		NextToken?: string | null;
	}
	export interface ListComponentsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListComponentsResponseFormGroup() {
		return new FormGroup<ListComponentsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListComponentsRequest {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName: string;

		/**
		 * Minimum: 1
		 * Maximum: 40
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface ListComponentsRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 40
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListComponentsRequestFormGroup() {
		return new FormGroup<ListComponentsRequestFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9\.\-_]*')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(40)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListConfigurationHistoryResponse {
		EventList?: Array<ConfigurationEvent>;
		NextToken?: string | null;
	}
	export interface ListConfigurationHistoryResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListConfigurationHistoryResponseFormGroup() {
		return new FormGroup<ListConfigurationHistoryResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The event information.  */
	export interface ConfigurationEvent {
		MonitoredResourceARN?: string | null;
		EventStatus?: ConfigurationEventEventStatus | null;
		EventResourceType?: ConfigurationEventEventResourceType | null;
		EventTime?: Date | null;
		EventDetail?: string | null;
		EventResourceName?: string | null;
	}

	/**  The event information.  */
	export interface ConfigurationEventFormProperties {
		MonitoredResourceARN: FormControl<string | null | undefined>,
		EventStatus: FormControl<ConfigurationEventEventStatus | null | undefined>,
		EventResourceType: FormControl<ConfigurationEventEventResourceType | null | undefined>,
		EventTime: FormControl<Date | null | undefined>,
		EventDetail: FormControl<string | null | undefined>,
		EventResourceName: FormControl<string | null | undefined>,
	}
	export function CreateConfigurationEventFormGroup() {
		return new FormGroup<ConfigurationEventFormProperties>({
			MonitoredResourceARN: new FormControl<string | null | undefined>(undefined),
			EventStatus: new FormControl<ConfigurationEventEventStatus | null | undefined>(undefined),
			EventResourceType: new FormControl<ConfigurationEventEventResourceType | null | undefined>(undefined),
			EventTime: new FormControl<Date | null | undefined>(undefined),
			EventDetail: new FormControl<string | null | undefined>(undefined),
			EventResourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ConfigurationEventEventStatus { INFO = 0, WARN = 1, ERROR = 2 }

	export enum ConfigurationEventEventResourceType { CLOUDWATCH_ALARM = 0, CLOUDFORMATION = 1, SSM_ASSOCIATION = 2 }

	export interface ListConfigurationHistoryRequest {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName?: string | null;
		StartTime?: Date | null;
		EndTime?: Date | null;
		EventStatus?: ConfigurationEventEventStatus | null;

		/**
		 * Minimum: 1
		 * Maximum: 40
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface ListConfigurationHistoryRequestFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		EventStatus: FormControl<ConfigurationEventEventStatus | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 40
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListConfigurationHistoryRequestFormGroup() {
		return new FormGroup<ListConfigurationHistoryRequestFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9\.\-_]*')]),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			EventStatus: new FormControl<ConfigurationEventEventStatus | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(40)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListLogPatternSetsResponse {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName?: string | null;
		LogPatternSets?: Array<string>;
		NextToken?: string | null;
	}
	export interface ListLogPatternSetsResponseFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLogPatternSetsResponseFormGroup() {
		return new FormGroup<ListLogPatternSetsResponseFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9\.\-_]*')]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListLogPatternSetsRequest {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName: string;

		/**
		 * Minimum: 1
		 * Maximum: 40
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface ListLogPatternSetsRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 40
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLogPatternSetsRequestFormGroup() {
		return new FormGroup<ListLogPatternSetsRequestFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9\.\-_]*')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(40)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListLogPatternsResponse {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName?: string | null;
		LogPatterns?: Array<LogPattern>;
		NextToken?: string | null;
	}
	export interface ListLogPatternsResponseFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLogPatternsResponseFormGroup() {
		return new FormGroup<ListLogPatternsResponseFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9\.\-_]*')]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListLogPatternsRequest {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName: string;

		/**
		 * Max length: 30
		 * Min length: 1
		 */
		PatternSetName?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 40
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface ListLogPatternsRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName: FormControl<string | null | undefined>,

		/**
		 * Max length: 30
		 * Min length: 1
		 */
		PatternSetName: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 40
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLogPatternsRequestFormGroup() {
		return new FormGroup<ListLogPatternsRequestFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9\.\-_]*')]),
			PatternSetName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(30), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9\.\-_]*')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(40)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListProblemsResponse {
		ProblemList?: Array<Problem>;
		NextToken?: string | null;
	}
	export interface ListProblemsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProblemsResponseFormGroup() {
		return new FormGroup<ListProblemsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListProblemsRequest {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName?: string | null;
		StartTime?: Date | null;
		EndTime?: Date | null;

		/**
		 * Minimum: 1
		 * Maximum: 40
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface ListProblemsRequestFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 40
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProblemsRequestFormGroup() {
		return new FormGroup<ListProblemsRequestFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9\.\-_]*')]),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(40)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {

		/**
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {

		/**
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		ResourceARN: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/**
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1011), Validators.minLength(1)]),
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

	export interface TagResourceRequest {

		/**
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		ResourceARN: string;

		/**
		 * Required
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/**
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1011), Validators.minLength(1)]),
		});

	}

	export interface TooManyTagsException {
	}
	export interface TooManyTagsExceptionFormProperties {
	}
	export function CreateTooManyTagsExceptionFormGroup() {
		return new FormGroup<TooManyTagsExceptionFormProperties>({
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

	export interface UntagResourceRequest {

		/**
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		ResourceARN: string;

		/**
		 * Required
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/**
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1011), Validators.minLength(1)]),
		});

	}

	export interface UpdateApplicationResponse {

		/** Describes the status of the application. */
		ApplicationInfo?: ApplicationInfo;
	}
	export interface UpdateApplicationResponseFormProperties {
	}
	export function CreateUpdateApplicationResponseFormGroup() {
		return new FormGroup<UpdateApplicationResponseFormProperties>({
		});

	}

	export interface UpdateApplicationRequest {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName: string;
		OpsCenterEnabled?: boolean | null;
		CWEMonitorEnabled?: boolean | null;

		/**
		 * Max length: 300
		 * Min length: 20
		 */
		OpsItemSNSTopicArn?: string | null;
		RemoveSNSTopic?: boolean | null;
	}
	export interface UpdateApplicationRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName: FormControl<string | null | undefined>,
		OpsCenterEnabled: FormControl<boolean | null | undefined>,
		CWEMonitorEnabled: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 300
		 * Min length: 20
		 */
		OpsItemSNSTopicArn: FormControl<string | null | undefined>,
		RemoveSNSTopic: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateApplicationRequestFormGroup() {
		return new FormGroup<UpdateApplicationRequestFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9\.\-_]*')]),
			OpsCenterEnabled: new FormControl<boolean | null | undefined>(undefined),
			CWEMonitorEnabled: new FormControl<boolean | null | undefined>(undefined),
			OpsItemSNSTopicArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(300), Validators.minLength(20)]),
			RemoveSNSTopic: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateComponentResponse {
	}
	export interface UpdateComponentResponseFormProperties {
	}
	export function CreateUpdateComponentResponseFormGroup() {
		return new FormGroup<UpdateComponentResponseFormProperties>({
		});

	}

	export interface UpdateComponentRequest {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName: string;

		/** Required */
		ComponentName: string;
		NewComponentName?: string | null;
		ResourceList?: Array<string>;
	}
	export interface UpdateComponentRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName: FormControl<string | null | undefined>,

		/** Required */
		ComponentName: FormControl<string | null | undefined>,
		NewComponentName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateComponentRequestFormGroup() {
		return new FormGroup<UpdateComponentRequestFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9\.\-_]*')]),
			ComponentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NewComponentName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateComponentConfigurationResponse {
	}
	export interface UpdateComponentConfigurationResponseFormProperties {
	}
	export function CreateUpdateComponentConfigurationResponseFormGroup() {
		return new FormGroup<UpdateComponentConfigurationResponseFormProperties>({
		});

	}

	export interface UpdateComponentConfigurationRequest {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName: string;

		/** Required */
		ComponentName: string;
		Monitor?: boolean | null;

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		Tier?: ApplicationComponentTier | null;

		/**
		 * Max length: 10000
		 * Min length: 1
		 */
		ComponentConfiguration?: string | null;
	}
	export interface UpdateComponentConfigurationRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName: FormControl<string | null | undefined>,

		/** Required */
		ComponentName: FormControl<string | null | undefined>,
		Monitor: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		Tier: FormControl<ApplicationComponentTier | null | undefined>,

		/**
		 * Max length: 10000
		 * Min length: 1
		 */
		ComponentConfiguration: FormControl<string | null | undefined>,
	}
	export function CreateUpdateComponentConfigurationRequestFormGroup() {
		return new FormGroup<UpdateComponentConfigurationRequestFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9\.\-_]*')]),
			ComponentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Monitor: new FormControl<boolean | null | undefined>(undefined),
			Tier: new FormControl<ApplicationComponentTier | null | undefined>(undefined, [Validators.maxLength(50), Validators.minLength(1)]),
			ComponentConfiguration: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(10000), Validators.minLength(1)]),
		});

	}

	export interface UpdateLogPatternResponse {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName?: string | null;

		/** An object that defines the log patterns that belongs to a <code>LogPatternSet</code>. */
		LogPattern?: LogPattern;
	}
	export interface UpdateLogPatternResponseFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLogPatternResponseFormGroup() {
		return new FormGroup<UpdateLogPatternResponseFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9\.\-_]*')]),
		});

	}

	export interface UpdateLogPatternRequest {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName: string;

		/**
		 * Required
		 * Max length: 30
		 * Min length: 1
		 */
		PatternSetName: string;

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		PatternName: string;

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		Pattern?: string | null;
		Rank?: number | null;
	}
	export interface UpdateLogPatternRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceGroupName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 30
		 * Min length: 1
		 */
		PatternSetName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		PatternName: FormControl<string | null | undefined>,

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		Pattern: FormControl<string | null | undefined>,
		Rank: FormControl<number | null | undefined>,
	}
	export function CreateUpdateLogPatternRequestFormGroup() {
		return new FormGroup<UpdateLogPatternRequestFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9\.\-_]*')]),
			PatternSetName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(30), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9\.\-_]*')]),
			PatternName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(50), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9\.\-_]*')]),
			Pattern: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50), Validators.minLength(1)]),
			Rank: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum Tier { DEFAULT = 0, DOT_NET_CORE = 1, DOT_NET_WORKER = 2, DOT_NET_WEB = 3, SQL_SERVER = 4 }

	export enum CloudWatchEventSource { EC2 = 0, CODE_DEPLOY = 1, HEALTH = 2 }

	export enum ConfigurationEventStatus { INFO = 0, WARN = 1, ERROR = 2 }

	export enum ConfigurationEventResourceType { CLOUDWATCH_ALARM = 0, CLOUDFORMATION = 1, SSM_ASSOCIATION = 2 }

	export enum FeedbackValue { NOT_SPECIFIED = 0, USEFUL = 1, NOT_USEFUL = 2 }

	export enum FeedbackKey { INSIGHTS_FEEDBACK = 0 }

	export enum LogFilter { ERROR = 0, WARN = 1, INFO = 2 }

	export enum Status { IGNORE = 0, RESOLVED = 1, PENDING = 2 }

	export enum SeverityLevel { Low = 0, Medium = 1, High = 2 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Adds an application that is created from a resource group.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.CreateApplication
		 * @return {CreateApplicationResponse} Success
		 */
		CreateApplication(requestBody: CreateApplicationRequest): Observable<CreateApplicationResponse> {
			return this.http.post<CreateApplicationResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.CreateApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a custom component by grouping similar standalone instances to monitor.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.CreateComponent
		 * @return {CreateComponentResponse} Success
		 */
		CreateComponent(requestBody: CreateComponentRequest): Observable<CreateComponentResponse> {
			return this.http.post<CreateComponentResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.CreateComponent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds an log pattern to a <code>LogPatternSet</code>.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.CreateLogPattern
		 * @return {CreateLogPatternResponse} Success
		 */
		CreateLogPattern(requestBody: CreateLogPatternRequest): Observable<CreateLogPatternResponse> {
			return this.http.post<CreateLogPatternResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.CreateLogPattern', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the specified application from monitoring. Does not delete the application.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.DeleteApplication
		 * @return {DeleteApplicationResponse} Success
		 */
		DeleteApplication(requestBody: DeleteApplicationRequest): Observable<DeleteApplicationResponse> {
			return this.http.post<DeleteApplicationResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.DeleteApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Ungroups a custom component. When you ungroup custom components, all applicable monitors that are set up for the component are removed and the instances revert to their standalone status.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.DeleteComponent
		 * @return {DeleteComponentResponse} Success
		 */
		DeleteComponent(requestBody: DeleteComponentRequest): Observable<DeleteComponentResponse> {
			return this.http.post<DeleteComponentResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.DeleteComponent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the specified log pattern from a <code>LogPatternSet</code>.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.DeleteLogPattern
		 * @return {DeleteLogPatternResponse} Success
		 */
		DeleteLogPattern(requestBody: DeleteLogPatternRequest): Observable<DeleteLogPatternResponse> {
			return this.http.post<DeleteLogPatternResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.DeleteLogPattern', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the application.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.DescribeApplication
		 * @return {DescribeApplicationResponse} Success
		 */
		DescribeApplication(requestBody: DescribeApplicationRequest): Observable<DescribeApplicationResponse> {
			return this.http.post<DescribeApplicationResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.DescribeApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes a component and lists the resources that are grouped together in a component.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.DescribeComponent
		 * @return {DescribeComponentResponse} Success
		 */
		DescribeComponent(requestBody: DescribeComponentRequest): Observable<DescribeComponentResponse> {
			return this.http.post<DescribeComponentResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.DescribeComponent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the monitoring configuration of the component.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfiguration
		 * @return {DescribeComponentConfigurationResponse} Success
		 */
		DescribeComponentConfiguration(requestBody: DescribeComponentConfigurationRequest): Observable<DescribeComponentConfigurationResponse> {
			return this.http.post<DescribeComponentConfigurationResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the recommended monitoring configuration of the component.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation
		 * @return {DescribeComponentConfigurationRecommendationResponse} Success
		 */
		DescribeComponentConfigurationRecommendation(requestBody: DescribeComponentConfigurationRecommendationRequest): Observable<DescribeComponentConfigurationRecommendationResponse> {
			return this.http.post<DescribeComponentConfigurationRecommendationResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describe a specific log pattern from a <code>LogPatternSet</code>.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.DescribeLogPattern
		 * @return {DescribeLogPatternResponse} Success
		 */
		DescribeLogPattern(requestBody: DescribeLogPatternRequest): Observable<DescribeLogPatternResponse> {
			return this.http.post<DescribeLogPatternResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.DescribeLogPattern', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes an anomaly or error with the application.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.DescribeObservation
		 * @return {DescribeObservationResponse} Success
		 */
		DescribeObservation(requestBody: DescribeObservationRequest): Observable<DescribeObservationResponse> {
			return this.http.post<DescribeObservationResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.DescribeObservation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes an application problem.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.DescribeProblem
		 * @return {DescribeProblemResponse} Success
		 */
		DescribeProblem(requestBody: DescribeProblemRequest): Observable<DescribeProblemResponse> {
			return this.http.post<DescribeProblemResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.DescribeProblem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the anomalies or errors associated with the problem.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.DescribeProblemObservations
		 * @return {DescribeProblemObservationsResponse} Success
		 */
		DescribeProblemObservations(requestBody: DescribeProblemObservationsRequest): Observable<DescribeProblemObservationsResponse> {
			return this.http.post<DescribeProblemObservationsResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.DescribeProblemObservations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the IDs of the applications that you are monitoring.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.ListApplications
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListApplicationsResponse} Success
		 */
		ListApplications(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListApplicationsRequest): Observable<ListApplicationsResponse> {
			return this.http.post<ListApplicationsResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.ListApplications?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the auto-grouped, standalone, and custom components of the application.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.ListComponents
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListComponentsResponse} Success
		 */
		ListComponents(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListComponentsRequest): Observable<ListComponentsResponse> {
			return this.http.post<ListComponentsResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.ListComponents?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Lists the INFO, WARN, and ERROR events for periodic configuration updates performed by Application Insights. Examples of events represented are: </p> <ul> <li> <p>INFO: creating a new alarm or updating an alarm threshold.</p> </li> <li> <p>WARN: alarm not created due to insufficient data points used to predict thresholds.</p> </li> <li> <p>ERROR: alarm not created due to permission errors or exceeding quotas. </p> </li> </ul>
		 * Post #X-Amz-Target=EC2WindowsBarleyService.ListConfigurationHistory
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListConfigurationHistoryResponse} Success
		 */
		ListConfigurationHistory(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListConfigurationHistoryRequest): Observable<ListConfigurationHistoryResponse> {
			return this.http.post<ListConfigurationHistoryResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.ListConfigurationHistory?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the log pattern sets in the specific application.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.ListLogPatternSets
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListLogPatternSetsResponse} Success
		 */
		ListLogPatternSets(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListLogPatternSetsRequest): Observable<ListLogPatternSetsResponse> {
			return this.http.post<ListLogPatternSetsResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.ListLogPatternSets?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the log patterns in the specific log <code>LogPatternSet</code>.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.ListLogPatterns
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListLogPatternsResponse} Success
		 */
		ListLogPatterns(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListLogPatternsRequest): Observable<ListLogPatternsResponse> {
			return this.http.post<ListLogPatternsResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.ListLogPatterns?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the problems with your application.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.ListProblems
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListProblemsResponse} Success
		 */
		ListProblems(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListProblemsRequest): Observable<ListProblemsResponse> {
			return this.http.post<ListProblemsResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.ListProblems?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve a list of the tags (keys and values) that are associated with a specified application. A <i>tag</i> is a label that you optionally define and associate with an application. Each tag consists of a required <i>tag key</i> and an optional associated <i>tag value</i>. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Add one or more tags (keys and values) to a specified application. A <i>tag</i> is a label that you optionally define and associate with an application. Tags can help you categorize and manage application in different ways, such as by purpose, owner, environment, or other criteria. </p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.</p>
		 * Post #X-Amz-Target=EC2WindowsBarleyService.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove one or more tags (keys and values) from a specified application.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the application.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.UpdateApplication
		 * @return {UpdateApplicationResponse} Success
		 */
		UpdateApplication(requestBody: UpdateApplicationRequest): Observable<UpdateApplicationResponse> {
			return this.http.post<UpdateApplicationResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.UpdateApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the custom component name and/or the list of resources that make up the component.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.UpdateComponent
		 * @return {UpdateComponentResponse} Success
		 */
		UpdateComponent(requestBody: UpdateComponentRequest): Observable<UpdateComponentResponse> {
			return this.http.post<UpdateComponentResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.UpdateComponent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the monitoring configurations for the component. The configuration input parameter is an escaped JSON of the configuration and should match the schema of what is returned by <code>DescribeComponentConfigurationRecommendation</code>.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.UpdateComponentConfiguration
		 * @return {UpdateComponentConfigurationResponse} Success
		 */
		UpdateComponentConfiguration(requestBody: UpdateComponentConfigurationRequest): Observable<UpdateComponentConfigurationResponse> {
			return this.http.post<UpdateComponentConfigurationResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.UpdateComponentConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds a log pattern to a <code>LogPatternSet</code>.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.UpdateLogPattern
		 * @return {UpdateLogPatternResponse} Success
		 */
		UpdateLogPattern(requestBody: UpdateLogPatternRequest): Observable<UpdateLogPatternResponse> {
			return this.http.post<UpdateLogPatternResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.UpdateLogPattern', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum CreateApplicationX_Amz_Target { EC2WindowsBarleyService_CreateApplication = 0 }

	export enum CreateComponentX_Amz_Target { EC2WindowsBarleyService_CreateComponent = 0 }

	export enum CreateLogPatternX_Amz_Target { EC2WindowsBarleyService_CreateLogPattern = 0 }

	export enum DeleteApplicationX_Amz_Target { EC2WindowsBarleyService_DeleteApplication = 0 }

	export enum DeleteComponentX_Amz_Target { EC2WindowsBarleyService_DeleteComponent = 0 }

	export enum DeleteLogPatternX_Amz_Target { EC2WindowsBarleyService_DeleteLogPattern = 0 }

	export enum DescribeApplicationX_Amz_Target { EC2WindowsBarleyService_DescribeApplication = 0 }

	export enum DescribeComponentX_Amz_Target { EC2WindowsBarleyService_DescribeComponent = 0 }

	export enum DescribeComponentConfigurationX_Amz_Target { EC2WindowsBarleyService_DescribeComponentConfiguration = 0 }

	export enum DescribeComponentConfigurationRecommendationX_Amz_Target { EC2WindowsBarleyService_DescribeComponentConfigurationRecommendation = 0 }

	export enum DescribeLogPatternX_Amz_Target { EC2WindowsBarleyService_DescribeLogPattern = 0 }

	export enum DescribeObservationX_Amz_Target { EC2WindowsBarleyService_DescribeObservation = 0 }

	export enum DescribeProblemX_Amz_Target { EC2WindowsBarleyService_DescribeProblem = 0 }

	export enum DescribeProblemObservationsX_Amz_Target { EC2WindowsBarleyService_DescribeProblemObservations = 0 }

	export enum ListApplicationsX_Amz_Target { EC2WindowsBarleyService_ListApplications = 0 }

	export enum ListComponentsX_Amz_Target { EC2WindowsBarleyService_ListComponents = 0 }

	export enum ListConfigurationHistoryX_Amz_Target { EC2WindowsBarleyService_ListConfigurationHistory = 0 }

	export enum ListLogPatternSetsX_Amz_Target { EC2WindowsBarleyService_ListLogPatternSets = 0 }

	export enum ListLogPatternsX_Amz_Target { EC2WindowsBarleyService_ListLogPatterns = 0 }

	export enum ListProblemsX_Amz_Target { EC2WindowsBarleyService_ListProblems = 0 }

	export enum ListTagsForResourceX_Amz_Target { EC2WindowsBarleyService_ListTagsForResource = 0 }

	export enum TagResourceX_Amz_Target { EC2WindowsBarleyService_TagResource = 0 }

	export enum UntagResourceX_Amz_Target { EC2WindowsBarleyService_UntagResource = 0 }

	export enum UpdateApplicationX_Amz_Target { EC2WindowsBarleyService_UpdateApplication = 0 }

	export enum UpdateComponentX_Amz_Target { EC2WindowsBarleyService_UpdateComponent = 0 }

	export enum UpdateComponentConfigurationX_Amz_Target { EC2WindowsBarleyService_UpdateComponentConfiguration = 0 }

	export enum UpdateLogPatternX_Amz_Target { EC2WindowsBarleyService_UpdateLogPattern = 0 }

}

