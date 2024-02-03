import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Application related details of a job posting. */
	export interface ApplicationInfo {

		/** Use this field to specify email address(es) to which resumes or applications can be sent. The maximum number of allowed characters for each entry is 255. */
		emails?: Array<string>;

		/** Use this field to provide instructions, such as "Mail your application to ...", that a candidate can follow to apply for the job. This field accepts and sanitizes HTML input, and also accepts bold, italic, ordered list, and unordered list markup tags. The maximum number of allowed characters is 3,000. */
		instruction?: string | null;

		/** Use this URI field to direct an applicant to a website, for example to link to an online application form. The maximum number of allowed characters for each entry is 2,000. */
		uris?: Array<string>;
	}

	/** Application related details of a job posting. */
	export interface ApplicationInfoFormProperties {

		/** Use this field to provide instructions, such as "Mail your application to ...", that a candidate can follow to apply for the job. This field accepts and sanitizes HTML input, and also accepts bold, italic, ordered list, and unordered list markup tags. The maximum number of allowed characters is 3,000. */
		instruction: FormControl<string | null | undefined>,
	}
	export function CreateApplicationInfoFormGroup() {
		return new FormGroup<ApplicationInfoFormProperties>({
			instruction: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to create a batch of jobs. */
	export interface BatchCreateJobsRequest {

		/** Required. The jobs to be created. A maximum of 200 jobs can be created in a batch. */
		jobs?: Array<Job>;
	}

	/** Request to create a batch of jobs. */
	export interface BatchCreateJobsRequestFormProperties {
	}
	export function CreateBatchCreateJobsRequestFormGroup() {
		return new FormGroup<BatchCreateJobsRequestFormProperties>({
		});

	}


	/** A Job resource represents a job posting (also referred to as a "job listing" or "job requisition"). A job belongs to a Company, which is the hiring entity responsible for the job. */
	export interface Job {

		/** Strongly recommended for the best service experience. Location(s) where the employer is looking to hire for this job posting. Specifying the full street address(es) of the hiring location enables better API results, especially job searches by commute time. At most 50 locations are allowed for best search performance. If a job has more locations, it is suggested to split it into multiple jobs with unique requisition_ids (e.g. 'ReqA' becomes 'ReqA-1', 'ReqA-2', and so on.) as multiple jobs with the same company, language_code and requisition_id are not allowed. If the original requisition_id must be preserved, a custom field should be used for storage. It is also suggested to group the locations that close to each other in the same job for better search experience. Jobs with multiple addresses must have their addresses with the same LocationType to allow location filtering to work properly. (For example, a Job with addresses "1600 Amphitheatre Parkway, Mountain View, CA, USA" and "London, UK" may not have location filters applied correctly at search time since the first is a LocationType.STREET_ADDRESS and the second is a LocationType.LOCALITY.) If a job needs to have multiple addresses, it is suggested to split it into multiple jobs with same LocationTypes. The maximum number of allowed characters is 500. */
		addresses?: Array<string>;

		/** Application related details of a job posting. */
		applicationInfo?: ApplicationInfo;

		/** Required. The resource name of the company listing the job. The format is "projects/{project_id}/tenants/{tenant_id}/companies/{company_id}". For example, "projects/foo/tenants/bar/companies/baz". */
		company?: string | null;

		/** Output only. Display name of the company listing the job. */
		companyDisplayName?: string | null;

		/** Job compensation details. */
		compensationInfo?: CompensationInfo;

		/** A map of fields to hold both filterable and non-filterable custom job attributes that are not covered by the provided structured fields. The keys of the map are strings up to 64 bytes and must match the pattern: `a-zA-Z*`. For example, key0LikeThis or KEY_1_LIKE_THIS. At most 100 filterable and at most 100 unfilterable keys are supported. For filterable `string_values`, across all keys at most 200 values are allowed, with each string no more than 255 characters. For unfilterable `string_values`, the maximum total size of `string_values` across all keys is 50KB. */
		customAttributes?: {[id: string]: CustomAttribute };

		/** The desired education degrees for the job, such as Bachelors, Masters. */
		degreeTypes?: Array<string>;

		/** The department or functional area within the company with the open position. The maximum number of allowed characters is 255. */
		department?: string | null;

		/** Derived details about the job posting. */
		derivedInfo?: JobDerivedInfo;

		/** Required. The description of the job, which typically includes a multi-paragraph description of the company and related information. Separate fields are provided on the job object for responsibilities, qualifications, and other job characteristics. Use of these separate job fields is recommended. This field accepts and sanitizes HTML input, and also accepts bold, italic, ordered list, and unordered list markup tags. The maximum number of allowed characters is 100,000. */
		description?: string | null;

		/** The employment type(s) of a job, for example, full time or part time. */
		employmentTypes?: Array<string>;

		/** A description of bonus, commission, and other compensation incentives associated with the job not including salary or pay. The maximum number of allowed characters is 10,000. */
		incentives?: string | null;

		/** The benefits included with the job. */
		jobBenefits?: Array<string>;

		/** The end timestamp of the job. Typically this field is used for contracting engagements. Invalid timestamps are ignored. */
		jobEndTime?: string | null;

		/** The experience level associated with the job, such as "Entry Level". */
		jobLevel?: JobJobLevel | null;

		/** The start timestamp of the job in UTC time zone. Typically this field is used for contracting engagements. Invalid timestamps are ignored. */
		jobStartTime?: string | null;

		/** The language of the posting. This field is distinct from any requirements for fluency that are associated with the job. Language codes must be in BCP-47 format, such as "en-US" or "sr-Latn". For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47){: class="external" target="_blank" }. If this field is unspecified and Job.description is present, detected language code based on Job.description is assigned, otherwise defaults to 'en_US'. */
		languageCode?: string | null;

		/** Required during job update. The resource name for the job. This is generated by the service when a job is created. The format is "projects/{project_id}/tenants/{tenant_id}/jobs/{job_id}". For example, "projects/foo/tenants/bar/jobs/baz". Use of this field in job queries and API calls is preferred over the use of requisition_id since this value is unique. */
		name?: string | null;

		/** Output only. The timestamp when this job posting was created. */
		postingCreateTime?: string | null;

		/** Strongly recommended for the best service experience. The expiration timestamp of the job. After this timestamp, the job is marked as expired, and it no longer appears in search results. The expired job can't be listed by the ListJobs API, but it can be retrieved with the GetJob API or updated with the UpdateJob API or deleted with the DeleteJob API. An expired job can be updated and opened again by using a future expiration timestamp. Updating an expired job fails if there is another existing open job with same company, language_code and requisition_id. The expired jobs are retained in our system for 90 days. However, the overall expired job count cannot exceed 3 times the maximum number of open jobs over previous 7 days. If this threshold is exceeded, expired jobs are cleaned out in order of earliest expire time. Expired jobs are no longer accessible after they are cleaned out. Invalid timestamps are ignored, and treated as expire time not provided. If the timestamp is before the instant request is made, the job is treated as expired immediately on creation. This kind of job can not be updated. And when creating a job with past timestamp, the posting_publish_time must be set before posting_expire_time. The purpose of this feature is to allow other objects, such as Application, to refer a job that didn't exist in the system prior to becoming expired. If you want to modify a job that was expired on creation, delete it and create a new one. If this value isn't provided at the time of job creation or is invalid, the job posting expires after 30 days from the job's creation time. For example, if the job was created on 2017/01/01 13:00AM UTC with an unspecified expiration date, the job expires after 2017/01/31 13:00AM UTC. If this value isn't provided on job update, it depends on the field masks set by UpdateJobRequest.update_mask. If the field masks include job_end_time, or the masks are empty meaning that every field is updated, the job posting expires after 30 days from the job's last update time. Otherwise the expiration date isn't updated. */
		postingExpireTime?: string | null;

		/** The timestamp this job posting was most recently published. The default value is the time the request arrives at the server. Invalid timestamps are ignored. */
		postingPublishTime?: string | null;

		/** The job PostingRegion (for example, state, country) throughout which the job is available. If this field is set, a LocationFilter in a search query within the job region finds this job posting if an exact location match isn't specified. If this field is set to PostingRegion.NATION or PostingRegion.ADMINISTRATIVE_AREA, setting job Job.addresses to the same location level as this field is strongly recommended. */
		postingRegion?: JobPostingRegion | null;

		/** Output only. The timestamp when this job posting was last updated. */
		postingUpdateTime?: string | null;

		/** Options for job processing. */
		processingOptions?: ProcessingOptions;

		/** A promotion value of the job, as determined by the client. The value determines the sort order of the jobs returned when searching for jobs using the featured jobs search call, with higher promotional values being returned first and ties being resolved by relevance sort. Only the jobs with a promotionValue >0 are returned in a FEATURED_JOB_SEARCH. Default value is 0, and negative values are treated as 0. */
		promotionValue?: number | null;

		/** A description of the qualifications required to perform the job. The use of this field is recommended as an alternative to using the more general description field. This field accepts and sanitizes HTML input, and also accepts bold, italic, ordered list, and unordered list markup tags. The maximum number of allowed characters is 10,000. */
		qualifications?: string | null;

		/** Required. The requisition ID, also referred to as the posting ID, is assigned by the client to identify a job. This field is intended to be used by clients for client identification and tracking of postings. A job isn't allowed to be created if there is another job with the same company, language_code and requisition_id. The maximum number of allowed characters is 255. */
		requisitionId?: string | null;

		/** A description of job responsibilities. The use of this field is recommended as an alternative to using the more general description field. This field accepts and sanitizes HTML input, and also accepts bold, italic, ordered list, and unordered list markup tags. The maximum number of allowed characters is 10,000. */
		responsibilities?: string | null;

		/** Required. The title of the job, such as "Software Engineer" The maximum number of allowed characters is 500. */
		title?: string | null;

		/** Deprecated. The job is only visible to the owner. The visibility of the job. Defaults to Visibility.ACCOUNT_ONLY if not specified. */
		visibility?: JobVisibility | null;
	}

	/** A Job resource represents a job posting (also referred to as a "job listing" or "job requisition"). A job belongs to a Company, which is the hiring entity responsible for the job. */
	export interface JobFormProperties {

		/** Required. The resource name of the company listing the job. The format is "projects/{project_id}/tenants/{tenant_id}/companies/{company_id}". For example, "projects/foo/tenants/bar/companies/baz". */
		company: FormControl<string | null | undefined>,

		/** Output only. Display name of the company listing the job. */
		companyDisplayName: FormControl<string | null | undefined>,

		/** A map of fields to hold both filterable and non-filterable custom job attributes that are not covered by the provided structured fields. The keys of the map are strings up to 64 bytes and must match the pattern: `a-zA-Z*`. For example, key0LikeThis or KEY_1_LIKE_THIS. At most 100 filterable and at most 100 unfilterable keys are supported. For filterable `string_values`, across all keys at most 200 values are allowed, with each string no more than 255 characters. For unfilterable `string_values`, the maximum total size of `string_values` across all keys is 50KB. */
		customAttributes: FormControl<{[id: string]: CustomAttribute } | null | undefined>,

		/** The department or functional area within the company with the open position. The maximum number of allowed characters is 255. */
		department: FormControl<string | null | undefined>,

		/** Required. The description of the job, which typically includes a multi-paragraph description of the company and related information. Separate fields are provided on the job object for responsibilities, qualifications, and other job characteristics. Use of these separate job fields is recommended. This field accepts and sanitizes HTML input, and also accepts bold, italic, ordered list, and unordered list markup tags. The maximum number of allowed characters is 100,000. */
		description: FormControl<string | null | undefined>,

		/** A description of bonus, commission, and other compensation incentives associated with the job not including salary or pay. The maximum number of allowed characters is 10,000. */
		incentives: FormControl<string | null | undefined>,

		/** The end timestamp of the job. Typically this field is used for contracting engagements. Invalid timestamps are ignored. */
		jobEndTime: FormControl<string | null | undefined>,

		/** The experience level associated with the job, such as "Entry Level". */
		jobLevel: FormControl<JobJobLevel | null | undefined>,

		/** The start timestamp of the job in UTC time zone. Typically this field is used for contracting engagements. Invalid timestamps are ignored. */
		jobStartTime: FormControl<string | null | undefined>,

		/** The language of the posting. This field is distinct from any requirements for fluency that are associated with the job. Language codes must be in BCP-47 format, such as "en-US" or "sr-Latn". For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47){: class="external" target="_blank" }. If this field is unspecified and Job.description is present, detected language code based on Job.description is assigned, otherwise defaults to 'en_US'. */
		languageCode: FormControl<string | null | undefined>,

		/** Required during job update. The resource name for the job. This is generated by the service when a job is created. The format is "projects/{project_id}/tenants/{tenant_id}/jobs/{job_id}". For example, "projects/foo/tenants/bar/jobs/baz". Use of this field in job queries and API calls is preferred over the use of requisition_id since this value is unique. */
		name: FormControl<string | null | undefined>,

		/** Output only. The timestamp when this job posting was created. */
		postingCreateTime: FormControl<string | null | undefined>,

		/** Strongly recommended for the best service experience. The expiration timestamp of the job. After this timestamp, the job is marked as expired, and it no longer appears in search results. The expired job can't be listed by the ListJobs API, but it can be retrieved with the GetJob API or updated with the UpdateJob API or deleted with the DeleteJob API. An expired job can be updated and opened again by using a future expiration timestamp. Updating an expired job fails if there is another existing open job with same company, language_code and requisition_id. The expired jobs are retained in our system for 90 days. However, the overall expired job count cannot exceed 3 times the maximum number of open jobs over previous 7 days. If this threshold is exceeded, expired jobs are cleaned out in order of earliest expire time. Expired jobs are no longer accessible after they are cleaned out. Invalid timestamps are ignored, and treated as expire time not provided. If the timestamp is before the instant request is made, the job is treated as expired immediately on creation. This kind of job can not be updated. And when creating a job with past timestamp, the posting_publish_time must be set before posting_expire_time. The purpose of this feature is to allow other objects, such as Application, to refer a job that didn't exist in the system prior to becoming expired. If you want to modify a job that was expired on creation, delete it and create a new one. If this value isn't provided at the time of job creation or is invalid, the job posting expires after 30 days from the job's creation time. For example, if the job was created on 2017/01/01 13:00AM UTC with an unspecified expiration date, the job expires after 2017/01/31 13:00AM UTC. If this value isn't provided on job update, it depends on the field masks set by UpdateJobRequest.update_mask. If the field masks include job_end_time, or the masks are empty meaning that every field is updated, the job posting expires after 30 days from the job's last update time. Otherwise the expiration date isn't updated. */
		postingExpireTime: FormControl<string | null | undefined>,

		/** The timestamp this job posting was most recently published. The default value is the time the request arrives at the server. Invalid timestamps are ignored. */
		postingPublishTime: FormControl<string | null | undefined>,

		/** The job PostingRegion (for example, state, country) throughout which the job is available. If this field is set, a LocationFilter in a search query within the job region finds this job posting if an exact location match isn't specified. If this field is set to PostingRegion.NATION or PostingRegion.ADMINISTRATIVE_AREA, setting job Job.addresses to the same location level as this field is strongly recommended. */
		postingRegion: FormControl<JobPostingRegion | null | undefined>,

		/** Output only. The timestamp when this job posting was last updated. */
		postingUpdateTime: FormControl<string | null | undefined>,

		/** A promotion value of the job, as determined by the client. The value determines the sort order of the jobs returned when searching for jobs using the featured jobs search call, with higher promotional values being returned first and ties being resolved by relevance sort. Only the jobs with a promotionValue >0 are returned in a FEATURED_JOB_SEARCH. Default value is 0, and negative values are treated as 0. */
		promotionValue: FormControl<number | null | undefined>,

		/** A description of the qualifications required to perform the job. The use of this field is recommended as an alternative to using the more general description field. This field accepts and sanitizes HTML input, and also accepts bold, italic, ordered list, and unordered list markup tags. The maximum number of allowed characters is 10,000. */
		qualifications: FormControl<string | null | undefined>,

		/** Required. The requisition ID, also referred to as the posting ID, is assigned by the client to identify a job. This field is intended to be used by clients for client identification and tracking of postings. A job isn't allowed to be created if there is another job with the same company, language_code and requisition_id. The maximum number of allowed characters is 255. */
		requisitionId: FormControl<string | null | undefined>,

		/** A description of job responsibilities. The use of this field is recommended as an alternative to using the more general description field. This field accepts and sanitizes HTML input, and also accepts bold, italic, ordered list, and unordered list markup tags. The maximum number of allowed characters is 10,000. */
		responsibilities: FormControl<string | null | undefined>,

		/** Required. The title of the job, such as "Software Engineer" The maximum number of allowed characters is 500. */
		title: FormControl<string | null | undefined>,

		/** Deprecated. The job is only visible to the owner. The visibility of the job. Defaults to Visibility.ACCOUNT_ONLY if not specified. */
		visibility: FormControl<JobVisibility | null | undefined>,
	}
	export function CreateJobFormGroup() {
		return new FormGroup<JobFormProperties>({
			company: new FormControl<string | null | undefined>(undefined),
			companyDisplayName: new FormControl<string | null | undefined>(undefined),
			customAttributes: new FormControl<{[id: string]: CustomAttribute } | null | undefined>(undefined),
			department: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			incentives: new FormControl<string | null | undefined>(undefined),
			jobEndTime: new FormControl<string | null | undefined>(undefined),
			jobLevel: new FormControl<JobJobLevel | null | undefined>(undefined),
			jobStartTime: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			postingCreateTime: new FormControl<string | null | undefined>(undefined),
			postingExpireTime: new FormControl<string | null | undefined>(undefined),
			postingPublishTime: new FormControl<string | null | undefined>(undefined),
			postingRegion: new FormControl<JobPostingRegion | null | undefined>(undefined),
			postingUpdateTime: new FormControl<string | null | undefined>(undefined),
			promotionValue: new FormControl<number | null | undefined>(undefined),
			qualifications: new FormControl<string | null | undefined>(undefined),
			requisitionId: new FormControl<string | null | undefined>(undefined),
			responsibilities: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			visibility: new FormControl<JobVisibility | null | undefined>(undefined),
		});

	}


	/** Job compensation details. */
	export interface CompensationInfo {

		/** Compensation range. */
		annualizedBaseCompensationRange?: CompensationRange;

		/** Compensation range. */
		annualizedTotalCompensationRange?: CompensationRange;

		/** Job compensation information. At most one entry can be of type CompensationInfo.CompensationType.BASE, which is referred as **base compensation entry** for the job. */
		entries?: Array<CompensationEntry>;
	}

	/** Job compensation details. */
	export interface CompensationInfoFormProperties {
	}
	export function CreateCompensationInfoFormGroup() {
		return new FormGroup<CompensationInfoFormProperties>({
		});

	}


	/** Compensation range. */
	export interface CompensationRange {

		/** Represents an amount of money with its currency type. */
		maxCompensation?: Money;

		/** Represents an amount of money with its currency type. */
		minCompensation?: Money;
	}

	/** Compensation range. */
	export interface CompensationRangeFormProperties {
	}
	export function CreateCompensationRangeFormGroup() {
		return new FormGroup<CompensationRangeFormProperties>({
		});

	}


	/** Represents an amount of money with its currency type. */
	export interface Money {

		/** The three-letter currency code defined in ISO 4217. */
		currencyCode?: string | null;

		/** Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000. */
		nanos?: number | null;

		/** The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar. */
		units?: string | null;
	}

	/** Represents an amount of money with its currency type. */
	export interface MoneyFormProperties {

		/** The three-letter currency code defined in ISO 4217. */
		currencyCode: FormControl<string | null | undefined>,

		/** Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000. */
		nanos: FormControl<number | null | undefined>,

		/** The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar. */
		units: FormControl<string | null | undefined>,
	}
	export function CreateMoneyFormGroup() {
		return new FormGroup<MoneyFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined),
			nanos: new FormControl<number | null | undefined>(undefined),
			units: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A compensation entry that represents one component of compensation, such as base pay, bonus, or other compensation type. Annualization: One compensation entry can be annualized if - it contains valid amount or range. - and its expected_units_per_year is set or can be derived. Its annualized range is determined as (amount or range) times expected_units_per_year. */
	export interface CompensationEntry {

		/** Represents an amount of money with its currency type. */
		amount?: Money;

		/** Compensation description. For example, could indicate equity terms or provide additional context to an estimated bonus. */
		description?: string | null;

		/** Expected number of units paid each year. If not specified, when Job.employment_types is FULLTIME, a default value is inferred based on unit. Default values: - HOURLY: 2080 - DAILY: 260 - WEEKLY: 52 - MONTHLY: 12 - ANNUAL: 1 */
		expectedUnitsPerYear?: number | null;

		/** Compensation range. */
		range?: CompensationRange;

		/** Compensation type. Default is CompensationType.COMPENSATION_TYPE_UNSPECIFIED. */
		type?: CompensationEntryType | null;

		/** Frequency of the specified amount. Default is CompensationUnit.COMPENSATION_UNIT_UNSPECIFIED. */
		unit?: CompensationEntryUnit | null;
	}

	/** A compensation entry that represents one component of compensation, such as base pay, bonus, or other compensation type. Annualization: One compensation entry can be annualized if - it contains valid amount or range. - and its expected_units_per_year is set or can be derived. Its annualized range is determined as (amount or range) times expected_units_per_year. */
	export interface CompensationEntryFormProperties {

		/** Compensation description. For example, could indicate equity terms or provide additional context to an estimated bonus. */
		description: FormControl<string | null | undefined>,

		/** Expected number of units paid each year. If not specified, when Job.employment_types is FULLTIME, a default value is inferred based on unit. Default values: - HOURLY: 2080 - DAILY: 260 - WEEKLY: 52 - MONTHLY: 12 - ANNUAL: 1 */
		expectedUnitsPerYear: FormControl<number | null | undefined>,

		/** Compensation type. Default is CompensationType.COMPENSATION_TYPE_UNSPECIFIED. */
		type: FormControl<CompensationEntryType | null | undefined>,

		/** Frequency of the specified amount. Default is CompensationUnit.COMPENSATION_UNIT_UNSPECIFIED. */
		unit: FormControl<CompensationEntryUnit | null | undefined>,
	}
	export function CreateCompensationEntryFormGroup() {
		return new FormGroup<CompensationEntryFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			expectedUnitsPerYear: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<CompensationEntryType | null | undefined>(undefined),
			unit: new FormControl<CompensationEntryUnit | null | undefined>(undefined),
		});

	}

	export enum CompensationEntryType { COMPENSATION_TYPE_UNSPECIFIED = 'COMPENSATION_TYPE_UNSPECIFIED', BASE = 'BASE', BONUS = 'BONUS', SIGNING_BONUS = 'SIGNING_BONUS', EQUITY = 'EQUITY', PROFIT_SHARING = 'PROFIT_SHARING', COMMISSIONS = 'COMMISSIONS', TIPS = 'TIPS', OTHER_COMPENSATION_TYPE = 'OTHER_COMPENSATION_TYPE' }

	export enum CompensationEntryUnit { COMPENSATION_UNIT_UNSPECIFIED = 'COMPENSATION_UNIT_UNSPECIFIED', HOURLY = 'HOURLY', DAILY = 'DAILY', WEEKLY = 'WEEKLY', MONTHLY = 'MONTHLY', YEARLY = 'YEARLY', ONE_TIME = 'ONE_TIME', OTHER_COMPENSATION_UNIT = 'OTHER_COMPENSATION_UNIT' }


	/** Custom attribute values that are either filterable or non-filterable. */
	export interface CustomAttribute {

		/** If the `filterable` flag is true, the custom field values may be used for custom attribute filters JobQuery.custom_attribute_filter. If false, these values may not be used for custom attribute filters. Default is false. */
		filterable?: boolean | null;

		/** If the `keyword_searchable` flag is true, the keywords in custom fields are searchable by keyword match. If false, the values are not searchable by keyword match. Default is false. */
		keywordSearchable?: boolean | null;

		/** Exactly one of string_values or long_values must be specified. This field is used to perform number range search. (`EQ`, `GT`, `GE`, `LE`, `LT`) over filterable `long_value`. Currently at most 1 long_values is supported. */
		longValues?: Array<string>;

		/** Exactly one of string_values or long_values must be specified. This field is used to perform a string match (`CASE_SENSITIVE_MATCH` or `CASE_INSENSITIVE_MATCH`) search. For filterable `string_value`s, a maximum total number of 200 values is allowed, with each `string_value` has a byte size of no more than 500B. For unfilterable `string_values`, the maximum total byte size of unfilterable `string_values` is 50KB. Empty string isn't allowed. */
		stringValues?: Array<string>;
	}

	/** Custom attribute values that are either filterable or non-filterable. */
	export interface CustomAttributeFormProperties {

		/** If the `filterable` flag is true, the custom field values may be used for custom attribute filters JobQuery.custom_attribute_filter. If false, these values may not be used for custom attribute filters. Default is false. */
		filterable: FormControl<boolean | null | undefined>,

		/** If the `keyword_searchable` flag is true, the keywords in custom fields are searchable by keyword match. If false, the values are not searchable by keyword match. Default is false. */
		keywordSearchable: FormControl<boolean | null | undefined>,
	}
	export function CreateCustomAttributeFormGroup() {
		return new FormGroup<CustomAttributeFormProperties>({
			filterable: new FormControl<boolean | null | undefined>(undefined),
			keywordSearchable: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Derived details about the job posting. */
	export interface JobDerivedInfo {

		/** Job categories derived from Job.title and Job.description. */
		jobCategories?: Array<string>;

		/** Structured locations of the job, resolved from Job.addresses. locations are exactly matched to Job.addresses in the same order. */
		locations?: Array<Location>;
	}

	/** Derived details about the job posting. */
	export interface JobDerivedInfoFormProperties {
	}
	export function CreateJobDerivedInfoFormGroup() {
		return new FormGroup<JobDerivedInfoFormProperties>({
		});

	}


	/** A resource that represents a location with full geographic information. */
	export interface Location {

		/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges. */
		latLng?: LatLng;

		/** The type of a location, which corresponds to the address lines field of google.type.PostalAddress. For example, "Downtown, Atlanta, GA, USA" has a type of LocationType.NEIGHBORHOOD, and "Kansas City, KS, USA" has a type of LocationType.LOCALITY. */
		locationType?: LocationLocationType | null;

		/** Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478 */
		postalAddress?: PostalAddress;

		/** Radius in miles of the job location. This value is derived from the location bounding box in which a circle with the specified radius centered from google.type.LatLng covers the area associated with the job location. For example, currently, "Mountain View, CA, USA" has a radius of 6.17 miles. */
		radiusMiles?: number | null;
	}

	/** A resource that represents a location with full geographic information. */
	export interface LocationFormProperties {

		/** The type of a location, which corresponds to the address lines field of google.type.PostalAddress. For example, "Downtown, Atlanta, GA, USA" has a type of LocationType.NEIGHBORHOOD, and "Kansas City, KS, USA" has a type of LocationType.LOCALITY. */
		locationType: FormControl<LocationLocationType | null | undefined>,

		/** Radius in miles of the job location. This value is derived from the location bounding box in which a circle with the specified radius centered from google.type.LatLng covers the area associated with the job location. For example, currently, "Mountain View, CA, USA" has a radius of 6.17 miles. */
		radiusMiles: FormControl<number | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			locationType: new FormControl<LocationLocationType | null | undefined>(undefined),
			radiusMiles: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges. */
	export interface LatLng {

		/** The latitude in degrees. It must be in the range [-90.0, +90.0]. */
		latitude?: number | null;

		/** The longitude in degrees. It must be in the range [-180.0, +180.0]. */
		longitude?: number | null;
	}

	/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges. */
	export interface LatLngFormProperties {

		/** The latitude in degrees. It must be in the range [-90.0, +90.0]. */
		latitude: FormControl<number | null | undefined>,

		/** The longitude in degrees. It must be in the range [-180.0, +180.0]. */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateLatLngFormGroup() {
		return new FormGroup<LatLngFormProperties>({
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum LocationLocationType { LOCATION_TYPE_UNSPECIFIED = 'LOCATION_TYPE_UNSPECIFIED', COUNTRY = 'COUNTRY', ADMINISTRATIVE_AREA = 'ADMINISTRATIVE_AREA', SUB_ADMINISTRATIVE_AREA = 'SUB_ADMINISTRATIVE_AREA', LOCALITY = 'LOCALITY', POSTAL_CODE = 'POSTAL_CODE', SUB_LOCALITY = 'SUB_LOCALITY', SUB_LOCALITY_1 = 'SUB_LOCALITY_1', SUB_LOCALITY_2 = 'SUB_LOCALITY_2', NEIGHBORHOOD = 'NEIGHBORHOOD', STREET_ADDRESS = 'STREET_ADDRESS' }


	/** Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478 */
	export interface PostalAddress {

		/** Unstructured address lines describing the lower levels of an address. Because values in address_lines do not have type information and may sometimes contain multiple values in a single field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be "envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way, the most specific line of an address can be selected based on the language. The minimum permitted structural representation of an address consists of a region_code with all remaining information placed in the address_lines. It would be possible to format such an address very approximately without geocoding, but no semantic reasoning could be made about any of the address components until it was at least partially resolved. Creating an address only containing a region_code and address_lines, and then geocoding is the recommended way to handle completely unstructured addresses (as opposed to guessing which parts of the address should be localities or administrative areas). */
		addressLines?: Array<string>;

		/** Optional. Highest administrative subdivision which is used for postal addresses of a country or region. For example, this can be a state, a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community (e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland this should be left unpopulated. */
		administrativeArea?: string | null;

		/** Optional. BCP-47 language code of the contents of this address (if known). This is often the UI language of the input form or is expected to match one of the languages used in the address' country/region, or their transliterated equivalents. This can affect formatting in certain countries, but is not critical to the correctness of the data and will never affect any validation or other non-formatting related operations. If this value is not known, it should be omitted (rather than specifying a possibly incorrect default). Examples: "zh-Hant", "ja", "ja-Latn", "en". */
		languageCode?: string | null;

		/** Optional. Generally refers to the city/town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave locality empty and use address_lines. */
		locality?: string | null;

		/** Optional. The name of the organization at the address. */
		organization?: string | null;

		/** Optional. Postal code of the address. Not all countries use or require postal codes to be present, but where they are used, they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.). */
		postalCode?: string | null;

		/** Optional. The recipient at the address. This field may, under certain circumstances, contain multiline information. For example, it might contain "care of" information. */
		recipients?: Array<string>;

		/** Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to ensure the value is correct. See https://cldr.unicode.org/ and https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland. */
		regionCode?: string | null;

		/** The schema revision of the `PostalAddress`. This must be set to 0, which is the latest revision. All new revisions **must** be backward compatible with old revisions. */
		revision?: number | null;

		/** Optional. Additional, country-specific, sorting code. This is not used in most regions. Where it is used, the value is either a string like "CEDEX", optionally followed by a number (e.g. "CEDEX 7"), or just a number alone, representing the "sector code" (Jamaica), "delivery area indicator" (Malawi) or "post office indicator" (e.g. Côte d'Ivoire). */
		sortingCode?: string | null;

		/** Optional. Sublocality of the address. For example, this can be neighborhoods, boroughs, districts. */
		sublocality?: string | null;
	}

	/** Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478 */
	export interface PostalAddressFormProperties {

		/** Optional. Highest administrative subdivision which is used for postal addresses of a country or region. For example, this can be a state, a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community (e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland this should be left unpopulated. */
		administrativeArea: FormControl<string | null | undefined>,

		/** Optional. BCP-47 language code of the contents of this address (if known). This is often the UI language of the input form or is expected to match one of the languages used in the address' country/region, or their transliterated equivalents. This can affect formatting in certain countries, but is not critical to the correctness of the data and will never affect any validation or other non-formatting related operations. If this value is not known, it should be omitted (rather than specifying a possibly incorrect default). Examples: "zh-Hant", "ja", "ja-Latn", "en". */
		languageCode: FormControl<string | null | undefined>,

		/** Optional. Generally refers to the city/town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave locality empty and use address_lines. */
		locality: FormControl<string | null | undefined>,

		/** Optional. The name of the organization at the address. */
		organization: FormControl<string | null | undefined>,

		/** Optional. Postal code of the address. Not all countries use or require postal codes to be present, but where they are used, they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.). */
		postalCode: FormControl<string | null | undefined>,

		/** Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to ensure the value is correct. See https://cldr.unicode.org/ and https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland. */
		regionCode: FormControl<string | null | undefined>,

		/** The schema revision of the `PostalAddress`. This must be set to 0, which is the latest revision. All new revisions **must** be backward compatible with old revisions. */
		revision: FormControl<number | null | undefined>,

		/** Optional. Additional, country-specific, sorting code. This is not used in most regions. Where it is used, the value is either a string like "CEDEX", optionally followed by a number (e.g. "CEDEX 7"), or just a number alone, representing the "sector code" (Jamaica), "delivery area indicator" (Malawi) or "post office indicator" (e.g. Côte d'Ivoire). */
		sortingCode: FormControl<string | null | undefined>,

		/** Optional. Sublocality of the address. For example, this can be neighborhoods, boroughs, districts. */
		sublocality: FormControl<string | null | undefined>,
	}
	export function CreatePostalAddressFormGroup() {
		return new FormGroup<PostalAddressFormProperties>({
			administrativeArea: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			locality: new FormControl<string | null | undefined>(undefined),
			organization: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			regionCode: new FormControl<string | null | undefined>(undefined),
			revision: new FormControl<number | null | undefined>(undefined),
			sortingCode: new FormControl<string | null | undefined>(undefined),
			sublocality: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum JobJobLevel { JOB_LEVEL_UNSPECIFIED = 'JOB_LEVEL_UNSPECIFIED', ENTRY_LEVEL = 'ENTRY_LEVEL', EXPERIENCED = 'EXPERIENCED', MANAGER = 'MANAGER', DIRECTOR = 'DIRECTOR', EXECUTIVE = 'EXECUTIVE' }

	export enum JobPostingRegion { POSTING_REGION_UNSPECIFIED = 'POSTING_REGION_UNSPECIFIED', ADMINISTRATIVE_AREA = 'ADMINISTRATIVE_AREA', NATION = 'NATION', TELECOMMUTE = 'TELECOMMUTE' }


	/** Options for job processing. */
	export interface ProcessingOptions {

		/** If set to `true`, the service does not attempt to resolve a more precise address for the job. */
		disableStreetAddressResolution?: boolean | null;

		/** Option for job HTML content sanitization. Applied fields are: * description * applicationInfo.instruction * incentives * qualifications * responsibilities HTML tags in these fields may be stripped if sanitiazation isn't disabled. Defaults to HtmlSanitization.SIMPLE_FORMATTING_ONLY. */
		htmlSanitization?: ProcessingOptionsHtmlSanitization | null;
	}

	/** Options for job processing. */
	export interface ProcessingOptionsFormProperties {

		/** If set to `true`, the service does not attempt to resolve a more precise address for the job. */
		disableStreetAddressResolution: FormControl<boolean | null | undefined>,

		/** Option for job HTML content sanitization. Applied fields are: * description * applicationInfo.instruction * incentives * qualifications * responsibilities HTML tags in these fields may be stripped if sanitiazation isn't disabled. Defaults to HtmlSanitization.SIMPLE_FORMATTING_ONLY. */
		htmlSanitization: FormControl<ProcessingOptionsHtmlSanitization | null | undefined>,
	}
	export function CreateProcessingOptionsFormGroup() {
		return new FormGroup<ProcessingOptionsFormProperties>({
			disableStreetAddressResolution: new FormControl<boolean | null | undefined>(undefined),
			htmlSanitization: new FormControl<ProcessingOptionsHtmlSanitization | null | undefined>(undefined),
		});

	}

	export enum ProcessingOptionsHtmlSanitization { HTML_SANITIZATION_UNSPECIFIED = 'HTML_SANITIZATION_UNSPECIFIED', HTML_SANITIZATION_DISABLED = 'HTML_SANITIZATION_DISABLED', SIMPLE_FORMATTING_ONLY = 'SIMPLE_FORMATTING_ONLY' }

	export enum JobVisibility { VISIBILITY_UNSPECIFIED = 'VISIBILITY_UNSPECIFIED', ACCOUNT_ONLY = 'ACCOUNT_ONLY', SHARED_WITH_GOOGLE = 'SHARED_WITH_GOOGLE', SHARED_WITH_PUBLIC = 'SHARED_WITH_PUBLIC' }


	/** The result of JobService.BatchCreateJobs. It's used to replace google.longrunning.Operation.response in case of success. */
	export interface BatchCreateJobsResponse {

		/** List of job mutation results from a batch create operation. It can change until operation status is FINISHED, FAILED or CANCELLED. */
		jobResults?: Array<JobResult>;
	}

	/** The result of JobService.BatchCreateJobs. It's used to replace google.longrunning.Operation.response in case of success. */
	export interface BatchCreateJobsResponseFormProperties {
	}
	export function CreateBatchCreateJobsResponseFormGroup() {
		return new FormGroup<BatchCreateJobsResponseFormProperties>({
		});

	}


	/** Mutation result of a job from a batch operation. */
	export interface JobResult {

		/** A Job resource represents a job posting (also referred to as a "job listing" or "job requisition"). A job belongs to a Company, which is the hiring entity responsible for the job. */
		job?: Job;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		status?: Status;
	}

	/** Mutation result of a job from a batch operation. */
	export interface JobResultFormProperties {
	}
	export function CreateJobResultFormGroup() {
		return new FormGroup<JobResultFormProperties>({
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface StatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to delete a batch of jobs. */
	export interface BatchDeleteJobsRequest {

		/** The names of the jobs to delete. The format is "projects/{project_id}/tenants/{tenant_id}/jobs/{job_id}". For example, "projects/foo/tenants/bar/jobs/baz". A maximum of 200 jobs can be deleted in a batch. */
		names?: Array<string>;
	}

	/** Request to delete a batch of jobs. */
	export interface BatchDeleteJobsRequestFormProperties {
	}
	export function CreateBatchDeleteJobsRequestFormGroup() {
		return new FormGroup<BatchDeleteJobsRequestFormProperties>({
		});

	}


	/** The result of JobService.BatchDeleteJobs. It's used to replace google.longrunning.Operation.response in case of success. */
	export interface BatchDeleteJobsResponse {

		/** List of job mutation results from a batch delete operation. It can change until operation status is FINISHED, FAILED or CANCELLED. */
		jobResults?: Array<JobResult>;
	}

	/** The result of JobService.BatchDeleteJobs. It's used to replace google.longrunning.Operation.response in case of success. */
	export interface BatchDeleteJobsResponseFormProperties {
	}
	export function CreateBatchDeleteJobsResponseFormGroup() {
		return new FormGroup<BatchDeleteJobsResponseFormProperties>({
		});

	}


	/** Metadata used for long running operations returned by CTS batch APIs. It's used to replace google.longrunning.Operation.metadata. */
	export interface BatchOperationMetadata {

		/** The time when the batch operation is created. */
		createTime?: string | null;

		/** The time when the batch operation is finished and google.longrunning.Operation.done is set to `true`. */
		endTime?: string | null;

		/** Count of failed item(s) inside an operation. */
		failureCount?: number | null;

		/** The state of a long running operation. */
		state?: BatchOperationMetadataState | null;

		/** More detailed information about operation state. */
		stateDescription?: string | null;

		/** Count of successful item(s) inside an operation. */
		successCount?: number | null;

		/** Count of total item(s) inside an operation. */
		totalCount?: number | null;

		/** The time when the batch operation status is updated. The metadata and the update_time is refreshed every minute otherwise cached data is returned. */
		updateTime?: string | null;
	}

	/** Metadata used for long running operations returned by CTS batch APIs. It's used to replace google.longrunning.Operation.metadata. */
	export interface BatchOperationMetadataFormProperties {

		/** The time when the batch operation is created. */
		createTime: FormControl<string | null | undefined>,

		/** The time when the batch operation is finished and google.longrunning.Operation.done is set to `true`. */
		endTime: FormControl<string | null | undefined>,

		/** Count of failed item(s) inside an operation. */
		failureCount: FormControl<number | null | undefined>,

		/** The state of a long running operation. */
		state: FormControl<BatchOperationMetadataState | null | undefined>,

		/** More detailed information about operation state. */
		stateDescription: FormControl<string | null | undefined>,

		/** Count of successful item(s) inside an operation. */
		successCount: FormControl<number | null | undefined>,

		/** Count of total item(s) inside an operation. */
		totalCount: FormControl<number | null | undefined>,

		/** The time when the batch operation status is updated. The metadata and the update_time is refreshed every minute otherwise cached data is returned. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateBatchOperationMetadataFormGroup() {
		return new FormGroup<BatchOperationMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			failureCount: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<BatchOperationMetadataState | null | undefined>(undefined),
			stateDescription: new FormControl<string | null | undefined>(undefined),
			successCount: new FormControl<number | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BatchOperationMetadataState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', INITIALIZING = 'INITIALIZING', PROCESSING = 'PROCESSING', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED', CANCELLING = 'CANCELLING', CANCELLED = 'CANCELLED' }


	/** Request to update a batch of jobs. */
	export interface BatchUpdateJobsRequest {

		/** Required. The jobs to be updated. A maximum of 200 jobs can be updated in a batch. */
		jobs?: Array<Job>;

		/** Strongly recommended for the best service experience. Be aware that it will also increase latency when checking the status of a batch operation. If update_mask is provided, only the specified fields in Job are updated. Otherwise all the fields are updated. A field mask to restrict the fields that are updated. Only top level fields of Job are supported. If update_mask is provided, The Job inside JobResult will only contains fields that is updated, plus the Id of the Job. Otherwise, Job will include all fields, which can yield a very large response. */
		updateMask?: string | null;
	}

	/** Request to update a batch of jobs. */
	export interface BatchUpdateJobsRequestFormProperties {

		/** Strongly recommended for the best service experience. Be aware that it will also increase latency when checking the status of a batch operation. If update_mask is provided, only the specified fields in Job are updated. Otherwise all the fields are updated. A field mask to restrict the fields that are updated. Only top level fields of Job are supported. If update_mask is provided, The Job inside JobResult will only contains fields that is updated, plus the Id of the Job. Otherwise, Job will include all fields, which can yield a very large response. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateBatchUpdateJobsRequestFormGroup() {
		return new FormGroup<BatchUpdateJobsRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of JobService.BatchUpdateJobs. It's used to replace google.longrunning.Operation.response in case of success. */
	export interface BatchUpdateJobsResponse {

		/** List of job mutation results from a batch update operation. It can change until operation status is FINISHED, FAILED or CANCELLED. */
		jobResults?: Array<JobResult>;
	}

	/** The result of JobService.BatchUpdateJobs. It's used to replace google.longrunning.Operation.response in case of success. */
	export interface BatchUpdateJobsResponseFormProperties {
	}
	export function CreateBatchUpdateJobsResponseFormGroup() {
		return new FormGroup<BatchUpdateJobsResponseFormProperties>({
		});

	}


	/** An event issued when an end user interacts with the application that implements Cloud Talent Solution. Providing this information improves the quality of results for the API clients, enabling the service to perform optimally. The number of events sent must be consistent with other calls, such as job searches, issued to the service by the client. */
	export interface ClientEvent {

		/** Required. The timestamp of the event. */
		createTime?: string | null;

		/** Required. A unique identifier, generated by the client application. */
		eventId?: string | null;

		/** Notes about the event provided by recruiters or other users, for example, feedback on why a job was bookmarked. */
		eventNotes?: string | null;

		/** An event issued when a job seeker interacts with the application that implements Cloud Talent Solution. */
		jobEvent?: JobEvent;

		/** Strongly recommended for the best service experience. A unique ID generated in the API responses. It can be found in ResponseMetadata.request_id. */
		requestId?: string | null;
	}

	/** An event issued when an end user interacts with the application that implements Cloud Talent Solution. Providing this information improves the quality of results for the API clients, enabling the service to perform optimally. The number of events sent must be consistent with other calls, such as job searches, issued to the service by the client. */
	export interface ClientEventFormProperties {

		/** Required. The timestamp of the event. */
		createTime: FormControl<string | null | undefined>,

		/** Required. A unique identifier, generated by the client application. */
		eventId: FormControl<string | null | undefined>,

		/** Notes about the event provided by recruiters or other users, for example, feedback on why a job was bookmarked. */
		eventNotes: FormControl<string | null | undefined>,

		/** Strongly recommended for the best service experience. A unique ID generated in the API responses. It can be found in ResponseMetadata.request_id. */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateClientEventFormGroup() {
		return new FormGroup<ClientEventFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			eventId: new FormControl<string | null | undefined>(undefined),
			eventNotes: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An event issued when a job seeker interacts with the application that implements Cloud Talent Solution. */
	export interface JobEvent {

		/** Required. The job name(s) associated with this event. For example, if this is an impression event, this field contains the identifiers of all jobs shown to the job seeker. If this was a view event, this field contains the identifier of the viewed job. The format is "projects/{project_id}/tenants/{tenant_id}/jobs/{job_id}", for example, "projects/foo/tenants/bar/jobs/baz". */
		jobs?: Array<string>;

		/** Required. The type of the event (see JobEventType). */
		type?: JobEventType | null;
	}

	/** An event issued when a job seeker interacts with the application that implements Cloud Talent Solution. */
	export interface JobEventFormProperties {

		/** Required. The type of the event (see JobEventType). */
		type: FormControl<JobEventType | null | undefined>,
	}
	export function CreateJobEventFormGroup() {
		return new FormGroup<JobEventFormProperties>({
			type: new FormControl<JobEventType | null | undefined>(undefined),
		});

	}

	export enum JobEventType { JOB_EVENT_TYPE_UNSPECIFIED = 'JOB_EVENT_TYPE_UNSPECIFIED', IMPRESSION = 'IMPRESSION', VIEW = 'VIEW', VIEW_REDIRECT = 'VIEW_REDIRECT', APPLICATION_START = 'APPLICATION_START', APPLICATION_FINISH = 'APPLICATION_FINISH', APPLICATION_QUICK_SUBMISSION = 'APPLICATION_QUICK_SUBMISSION', APPLICATION_REDIRECT = 'APPLICATION_REDIRECT', APPLICATION_START_FROM_SEARCH = 'APPLICATION_START_FROM_SEARCH', APPLICATION_REDIRECT_FROM_SEARCH = 'APPLICATION_REDIRECT_FROM_SEARCH', APPLICATION_COMPANY_SUBMIT = 'APPLICATION_COMPANY_SUBMIT', BOOKMARK = 'BOOKMARK', NOTIFICATION = 'NOTIFICATION', HIRED = 'HIRED', SENT_CV = 'SENT_CV', INTERVIEW_GRANTED = 'INTERVIEW_GRANTED' }


	/** Parameters needed for commute search. */
	export interface CommuteFilter {

		/** If `true`, jobs without street level addresses may also be returned. For city level addresses, the city center is used. For state and coarser level addresses, text matching is used. If this field is set to `false` or isn't specified, only jobs that include street level addresses will be returned by commute search. */
		allowImpreciseAddresses?: boolean | null;

		/** Required. The method of transportation to calculate the commute time for. */
		commuteMethod?: CommuteFilterCommuteMethod | null;

		/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
		departureTime?: TimeOfDay;

		/** Specifies the traffic density to use when calculating commute time. */
		roadTraffic?: CommuteFilterRoadTraffic | null;

		/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges. */
		startCoordinates?: LatLng;

		/** Required. The maximum travel time in seconds. The maximum allowed value is `3600s` (one hour). Format is `123s`. */
		travelDuration?: string | null;
	}

	/** Parameters needed for commute search. */
	export interface CommuteFilterFormProperties {

		/** If `true`, jobs without street level addresses may also be returned. For city level addresses, the city center is used. For state and coarser level addresses, text matching is used. If this field is set to `false` or isn't specified, only jobs that include street level addresses will be returned by commute search. */
		allowImpreciseAddresses: FormControl<boolean | null | undefined>,

		/** Required. The method of transportation to calculate the commute time for. */
		commuteMethod: FormControl<CommuteFilterCommuteMethod | null | undefined>,

		/** Specifies the traffic density to use when calculating commute time. */
		roadTraffic: FormControl<CommuteFilterRoadTraffic | null | undefined>,

		/** Required. The maximum travel time in seconds. The maximum allowed value is `3600s` (one hour). Format is `123s`. */
		travelDuration: FormControl<string | null | undefined>,
	}
	export function CreateCommuteFilterFormGroup() {
		return new FormGroup<CommuteFilterFormProperties>({
			allowImpreciseAddresses: new FormControl<boolean | null | undefined>(undefined),
			commuteMethod: new FormControl<CommuteFilterCommuteMethod | null | undefined>(undefined),
			roadTraffic: new FormControl<CommuteFilterRoadTraffic | null | undefined>(undefined),
			travelDuration: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CommuteFilterCommuteMethod { COMMUTE_METHOD_UNSPECIFIED = 'COMMUTE_METHOD_UNSPECIFIED', DRIVING = 'DRIVING', TRANSIT = 'TRANSIT', WALKING = 'WALKING', CYCLING = 'CYCLING', TRANSIT_ACCESSIBLE = 'TRANSIT_ACCESSIBLE' }


	/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
	export interface TimeOfDay {

		/** Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
		hours?: number | null;

		/** Minutes of hour of day. Must be from 0 to 59. */
		minutes?: number | null;

		/** Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. */
		nanos?: number | null;

		/** Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds. */
		seconds?: number | null;
	}

	/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
	export interface TimeOfDayFormProperties {

		/** Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
		hours: FormControl<number | null | undefined>,

		/** Minutes of hour of day. Must be from 0 to 59. */
		minutes: FormControl<number | null | undefined>,

		/** Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. */
		nanos: FormControl<number | null | undefined>,

		/** Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds. */
		seconds: FormControl<number | null | undefined>,
	}
	export function CreateTimeOfDayFormGroup() {
		return new FormGroup<TimeOfDayFormProperties>({
			hours: new FormControl<number | null | undefined>(undefined),
			minutes: new FormControl<number | null | undefined>(undefined),
			nanos: new FormControl<number | null | undefined>(undefined),
			seconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CommuteFilterRoadTraffic { ROAD_TRAFFIC_UNSPECIFIED = 'ROAD_TRAFFIC_UNSPECIFIED', TRAFFIC_FREE = 'TRAFFIC_FREE', BUSY_HOUR = 'BUSY_HOUR' }


	/** Commute details related to this job. */
	export interface CommuteInfo {

		/** A resource that represents a location with full geographic information. */
		jobLocation?: Location;

		/** The number of seconds required to travel to the job location from the query location. A duration of 0 seconds indicates that the job isn't reachable within the requested duration, but was returned as part of an expanded query. */
		travelDuration?: string | null;
	}

	/** Commute details related to this job. */
	export interface CommuteInfoFormProperties {

		/** The number of seconds required to travel to the job location from the query location. A duration of 0 seconds indicates that the job isn't reachable within the requested duration, but was returned as part of an expanded query. */
		travelDuration: FormControl<string | null | undefined>,
	}
	export function CreateCommuteInfoFormGroup() {
		return new FormGroup<CommuteInfoFormProperties>({
			travelDuration: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Company resource represents a company in the service. A company is the entity that owns job postings, that is, the hiring entity responsible for employing applicants for the job position. */
	export interface Company {

		/** The URI to employer's career site or careers page on the employer's web site, for example, "https://careers.google.com". */
		careerSiteUri?: string | null;

		/** Derived details about the company. */
		derivedInfo?: CompanyDerivedInfo;

		/** Required. The display name of the company, for example, "Google LLC". */
		displayName?: string | null;

		/** Equal Employment Opportunity legal disclaimer text to be associated with all jobs, and typically to be displayed in all roles. The maximum number of allowed characters is 500. */
		eeoText?: string | null;

		/** Required. Client side company identifier, used to uniquely identify the company. The maximum number of allowed characters is 255. */
		externalId?: string | null;

		/** The street address of the company's main headquarters, which may be different from the job location. The service attempts to geolocate the provided address, and populates a more specific location wherever possible in DerivedInfo.headquarters_location. */
		headquartersAddress?: string | null;

		/** Set to true if it is the hiring agency that post jobs for other employers. Defaults to false if not provided. */
		hiringAgency?: boolean | null;

		/** A URI that hosts the employer's company logo. */
		imageUri?: string | null;

		/** This field is deprecated. Please set the searchability of the custom attribute in the Job.custom_attributes going forward. A list of keys of filterable Job.custom_attributes, whose corresponding `string_values` are used in keyword searches. Jobs with `string_values` under these specified field keys are returned if any of the values match the search keyword. Custom field values with parenthesis, brackets and special symbols are not searchable as-is, and those keyword queries must be surrounded by quotes. */
		keywordSearchableJobCustomAttributes?: Array<string>;

		/** Required during company update. The resource name for a company. This is generated by the service when a company is created. The format is "projects/{project_id}/tenants/{tenant_id}/companies/{company_id}", for example, "projects/foo/tenants/bar/companies/baz". */
		name?: string | null;

		/** The employer's company size. */
		size?: CompanySize | null;

		/** Output only. Indicates whether a company is flagged to be suspended from public availability by the service when job content appears suspicious, abusive, or spammy. */
		suspended?: boolean | null;

		/** The URI representing the company's primary web site or home page, for example, "https://www.google.com". The maximum number of allowed characters is 255. */
		websiteUri?: string | null;
	}

	/** A Company resource represents a company in the service. A company is the entity that owns job postings, that is, the hiring entity responsible for employing applicants for the job position. */
	export interface CompanyFormProperties {

		/** The URI to employer's career site or careers page on the employer's web site, for example, "https://careers.google.com". */
		careerSiteUri: FormControl<string | null | undefined>,

		/** Required. The display name of the company, for example, "Google LLC". */
		displayName: FormControl<string | null | undefined>,

		/** Equal Employment Opportunity legal disclaimer text to be associated with all jobs, and typically to be displayed in all roles. The maximum number of allowed characters is 500. */
		eeoText: FormControl<string | null | undefined>,

		/** Required. Client side company identifier, used to uniquely identify the company. The maximum number of allowed characters is 255. */
		externalId: FormControl<string | null | undefined>,

		/** The street address of the company's main headquarters, which may be different from the job location. The service attempts to geolocate the provided address, and populates a more specific location wherever possible in DerivedInfo.headquarters_location. */
		headquartersAddress: FormControl<string | null | undefined>,

		/** Set to true if it is the hiring agency that post jobs for other employers. Defaults to false if not provided. */
		hiringAgency: FormControl<boolean | null | undefined>,

		/** A URI that hosts the employer's company logo. */
		imageUri: FormControl<string | null | undefined>,

		/** Required during company update. The resource name for a company. This is generated by the service when a company is created. The format is "projects/{project_id}/tenants/{tenant_id}/companies/{company_id}", for example, "projects/foo/tenants/bar/companies/baz". */
		name: FormControl<string | null | undefined>,

		/** The employer's company size. */
		size: FormControl<CompanySize | null | undefined>,

		/** Output only. Indicates whether a company is flagged to be suspended from public availability by the service when job content appears suspicious, abusive, or spammy. */
		suspended: FormControl<boolean | null | undefined>,

		/** The URI representing the company's primary web site or home page, for example, "https://www.google.com". The maximum number of allowed characters is 255. */
		websiteUri: FormControl<string | null | undefined>,
	}
	export function CreateCompanyFormGroup() {
		return new FormGroup<CompanyFormProperties>({
			careerSiteUri: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			eeoText: new FormControl<string | null | undefined>(undefined),
			externalId: new FormControl<string | null | undefined>(undefined),
			headquartersAddress: new FormControl<string | null | undefined>(undefined),
			hiringAgency: new FormControl<boolean | null | undefined>(undefined),
			imageUri: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<CompanySize | null | undefined>(undefined),
			suspended: new FormControl<boolean | null | undefined>(undefined),
			websiteUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Derived details about the company. */
	export interface CompanyDerivedInfo {

		/** A resource that represents a location with full geographic information. */
		headquartersLocation?: Location;
	}

	/** Derived details about the company. */
	export interface CompanyDerivedInfoFormProperties {
	}
	export function CreateCompanyDerivedInfoFormGroup() {
		return new FormGroup<CompanyDerivedInfoFormProperties>({
		});

	}

	export enum CompanySize { COMPANY_SIZE_UNSPECIFIED = 'COMPANY_SIZE_UNSPECIFIED', MINI = 'MINI', SMALL = 'SMALL', SMEDIUM = 'SMEDIUM', MEDIUM = 'MEDIUM', BIG = 'BIG', BIGGER = 'BIGGER', GIANT = 'GIANT' }


	/** Filter on job compensation type and amount. */
	export interface CompensationFilter {

		/** If set to true, jobs with unspecified compensation range fields are included. */
		includeJobsWithUnspecifiedCompensationRange?: boolean | null;

		/** Compensation range. */
		range?: CompensationRange;

		/** Required. Type of filter. */
		type?: CompensationFilterType | null;

		/** Required. Specify desired `base compensation entry's` CompensationInfo.CompensationUnit. */
		units?: Array<CompensationEntryUnit>;
	}

	/** Filter on job compensation type and amount. */
	export interface CompensationFilterFormProperties {

		/** If set to true, jobs with unspecified compensation range fields are included. */
		includeJobsWithUnspecifiedCompensationRange: FormControl<boolean | null | undefined>,

		/** Required. Type of filter. */
		type: FormControl<CompensationFilterType | null | undefined>,
	}
	export function CreateCompensationFilterFormGroup() {
		return new FormGroup<CompensationFilterFormProperties>({
			includeJobsWithUnspecifiedCompensationRange: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<CompensationFilterType | null | undefined>(undefined),
		});

	}

	export enum CompensationFilterType { FILTER_TYPE_UNSPECIFIED = 'FILTER_TYPE_UNSPECIFIED', UNIT_ONLY = 'UNIT_ONLY', UNIT_AND_AMOUNT = 'UNIT_AND_AMOUNT', ANNUALIZED_BASE_AMOUNT = 'ANNUALIZED_BASE_AMOUNT', ANNUALIZED_TOTAL_AMOUNT = 'ANNUALIZED_TOTAL_AMOUNT' }


	/** Response of auto-complete query. */
	export interface CompleteQueryResponse {

		/** Results of the matching job/company candidates. */
		completionResults?: Array<CompletionResult>;

		/** Additional information returned to client, such as debugging information. */
		metadata?: ResponseMetadata;
	}

	/** Response of auto-complete query. */
	export interface CompleteQueryResponseFormProperties {
	}
	export function CreateCompleteQueryResponseFormGroup() {
		return new FormGroup<CompleteQueryResponseFormProperties>({
		});

	}


	/** Resource that represents completion results. */
	export interface CompletionResult {

		/** The URI of the company image for COMPANY_NAME. */
		imageUri?: string | null;

		/** The suggestion for the query. */
		suggestion?: string | null;

		/** The completion topic. */
		type?: CompletionResultType | null;
	}

	/** Resource that represents completion results. */
	export interface CompletionResultFormProperties {

		/** The URI of the company image for COMPANY_NAME. */
		imageUri: FormControl<string | null | undefined>,

		/** The suggestion for the query. */
		suggestion: FormControl<string | null | undefined>,

		/** The completion topic. */
		type: FormControl<CompletionResultType | null | undefined>,
	}
	export function CreateCompletionResultFormGroup() {
		return new FormGroup<CompletionResultFormProperties>({
			imageUri: new FormControl<string | null | undefined>(undefined),
			suggestion: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<CompletionResultType | null | undefined>(undefined),
		});

	}

	export enum CompletionResultType { COMPLETION_TYPE_UNSPECIFIED = 'COMPLETION_TYPE_UNSPECIFIED', JOB_TITLE = 'JOB_TITLE', COMPANY_NAME = 'COMPANY_NAME', COMBINED = 'COMBINED' }


	/** Additional information returned to client, such as debugging information. */
	export interface ResponseMetadata {

		/** A unique id associated with this call. This id is logged for tracking purposes. */
		requestId?: string | null;
	}

	/** Additional information returned to client, such as debugging information. */
	export interface ResponseMetadataFormProperties {

		/** A unique id associated with this call. This id is logged for tracking purposes. */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateResponseMetadataFormGroup() {
		return new FormGroup<ResponseMetadataFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Custom ranking information for SearchJobsRequest. */
	export interface CustomRankingInfo {

		/** Required. Controls over how important the score of CustomRankingInfo.ranking_expression gets applied to job's final ranking position. An error is thrown if not specified. */
		importanceLevel?: CustomRankingInfoImportanceLevel | null;

		/** Required. Controls over how job documents get ranked on top of existing relevance score (determined by API algorithm). A combination of the ranking expression and relevance score is used to determine job's final ranking position. The syntax for this expression is a subset of Google SQL syntax. Supported operators are: +, -, *, /, where the left and right side of the operator is either a numeric Job.custom_attributes key, integer/double value or an expression that can be evaluated to a number. Parenthesis are supported to adjust calculation precedence. The expression must be < 200 characters in length. The expression is considered invalid for a job if the expression references custom attributes that are not populated on the job or if the expression results in a divide by zero. If an expression is invalid for a job, that job is demoted to the end of the results. Sample ranking expression (year + 25) * 0.25 - (freshness / 0.5) */
		rankingExpression?: string | null;
	}

	/** Custom ranking information for SearchJobsRequest. */
	export interface CustomRankingInfoFormProperties {

		/** Required. Controls over how important the score of CustomRankingInfo.ranking_expression gets applied to job's final ranking position. An error is thrown if not specified. */
		importanceLevel: FormControl<CustomRankingInfoImportanceLevel | null | undefined>,

		/** Required. Controls over how job documents get ranked on top of existing relevance score (determined by API algorithm). A combination of the ranking expression and relevance score is used to determine job's final ranking position. The syntax for this expression is a subset of Google SQL syntax. Supported operators are: +, -, *, /, where the left and right side of the operator is either a numeric Job.custom_attributes key, integer/double value or an expression that can be evaluated to a number. Parenthesis are supported to adjust calculation precedence. The expression must be < 200 characters in length. The expression is considered invalid for a job if the expression references custom attributes that are not populated on the job or if the expression results in a divide by zero. If an expression is invalid for a job, that job is demoted to the end of the results. Sample ranking expression (year + 25) * 0.25 - (freshness / 0.5) */
		rankingExpression: FormControl<string | null | undefined>,
	}
	export function CreateCustomRankingInfoFormGroup() {
		return new FormGroup<CustomRankingInfoFormProperties>({
			importanceLevel: new FormControl<CustomRankingInfoImportanceLevel | null | undefined>(undefined),
			rankingExpression: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CustomRankingInfoImportanceLevel { IMPORTANCE_LEVEL_UNSPECIFIED = 'IMPORTANCE_LEVEL_UNSPECIFIED', NONE = 'NONE', LOW = 'LOW', MILD = 'MILD', MEDIUM = 'MEDIUM', HIGH = 'HIGH', EXTREME = 'EXTREME' }


	/** Device information collected from the job seeker, candidate, or other entity conducting the job search. Providing this information improves the quality of the search results across devices. */
	export interface DeviceInfo {

		/** Type of the device. */
		deviceType?: DeviceInfoDeviceType | null;

		/** A device-specific ID. The ID must be a unique identifier that distinguishes the device from other devices. */
		id?: string | null;
	}

	/** Device information collected from the job seeker, candidate, or other entity conducting the job search. Providing this information improves the quality of the search results across devices. */
	export interface DeviceInfoFormProperties {

		/** Type of the device. */
		deviceType: FormControl<DeviceInfoDeviceType | null | undefined>,

		/** A device-specific ID. The ID must be a unique identifier that distinguishes the device from other devices. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateDeviceInfoFormGroup() {
		return new FormGroup<DeviceInfoFormProperties>({
			deviceType: new FormControl<DeviceInfoDeviceType | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DeviceInfoDeviceType { DEVICE_TYPE_UNSPECIFIED = 'DEVICE_TYPE_UNSPECIFIED', WEB = 'WEB', MOBILE_WEB = 'MOBILE_WEB', ANDROID = 'ANDROID', IOS = 'IOS', BOT = 'BOT', OTHER = 'OTHER' }


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


	/** The histogram request. */
	export interface HistogramQuery {

		/** An expression specifies a histogram request against matching jobs for searches. See SearchJobsRequest.histogram_queries for details about syntax. */
		histogramQuery?: string | null;
	}

	/** The histogram request. */
	export interface HistogramQueryFormProperties {

		/** An expression specifies a histogram request against matching jobs for searches. See SearchJobsRequest.histogram_queries for details about syntax. */
		histogramQuery: FormControl<string | null | undefined>,
	}
	export function CreateHistogramQueryFormGroup() {
		return new FormGroup<HistogramQueryFormProperties>({
			histogramQuery: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Histogram result that matches HistogramQuery specified in searches. */
	export interface HistogramQueryResult {

		/** A map from the values of the facet associated with distinct values to the number of matching entries with corresponding value. The key format is: * (for string histogram) string values stored in the field. * (for named numeric bucket) name specified in `bucket()` function, like for `bucket(0, MAX, "non-negative")`, the key will be `non-negative`. * (for anonymous numeric bucket) range formatted as `-`, for example, `0-1000`, `MIN-0`, and `0-MAX`. */
		histogram?: {[id: string]: string };

		/** Requested histogram expression. */
		histogramQuery?: string | null;
	}

	/** Histogram result that matches HistogramQuery specified in searches. */
	export interface HistogramQueryResultFormProperties {

		/** A map from the values of the facet associated with distinct values to the number of matching entries with corresponding value. The key format is: * (for string histogram) string values stored in the field. * (for named numeric bucket) name specified in `bucket()` function, like for `bucket(0, MAX, "non-negative")`, the key will be `non-negative`. * (for anonymous numeric bucket) range formatted as `-`, for example, `0-1000`, `MIN-0`, and `0-MAX`. */
		histogram: FormControl<{[id: string]: string } | null | undefined>,

		/** Requested histogram expression. */
		histogramQuery: FormControl<string | null | undefined>,
	}
	export function CreateHistogramQueryResultFormGroup() {
		return new FormGroup<HistogramQueryResultFormProperties>({
			histogram: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			histogramQuery: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The query required to perform a search query. */
	export interface JobQuery {

		/** Parameters needed for commute search. */
		commuteFilter?: CommuteFilter;

		/** This filter specifies the company entities to search against. If a value isn't specified, jobs are searched for against all companies. If multiple values are specified, jobs are searched against the companies specified. The format is "projects/{project_id}/tenants/{tenant_id}/companies/{company_id}". For example, "projects/foo/tenants/bar/companies/baz". At most 20 company filters are allowed. */
		companies?: Array<string>;

		/** This filter specifies the company Company.display_name of the jobs to search against. The company name must match the value exactly. Alternatively, the value being searched for can be wrapped in different match operators. `SUBSTRING_MATCH([value])` The company name must contain a case insensitive substring match of the value. Using this function may increase latency. Sample Value: `SUBSTRING_MATCH(google)` `MULTI_WORD_TOKEN_MATCH([value])` The value will be treated as a multi word token and the company name must contain a case insensitive match of the value. Using this function may increase latency. Sample Value: `MULTI_WORD_TOKEN_MATCH(google)` If a value isn't specified, jobs within the search results are associated with any company. If multiple values are specified, jobs within the search results may be associated with any of the specified companies. At most 20 company display name filters are allowed. */
		companyDisplayNames?: Array<string>;

		/** Filter on job compensation type and amount. */
		compensationFilter?: CompensationFilter;

		/** This filter specifies a structured syntax to match against the Job.custom_attributes marked as `filterable`. The syntax for this expression is a subset of SQL syntax. Supported operators are: `=`, `!=`, `<`, `<=`, `>`, and `>=` where the left of the operator is a custom field key and the right of the operator is a number or a quoted string. You must escape backslash (\\) and quote (\") characters. Supported functions are `LOWER([field_name])` to perform a case insensitive match and `EMPTY([field_name])` to filter on the existence of a key. Boolean expressions (AND/OR/NOT) are supported up to 3 levels of nesting (for example, "((A AND B AND C) OR NOT D) AND E"), a maximum of 100 comparisons or functions are allowed in the expression. The expression must be < 10000 bytes in length. Sample Query: `(LOWER(driving_license)="class \"a\"" OR EMPTY(driving_license)) AND driving_years > 10` */
		customAttributeFilter?: string | null;

		/** This flag controls the spell-check feature. If false, the service attempts to correct a misspelled query, for example, "enginee" is corrected to "engineer". Defaults to false: a spell check is performed. */
		disableSpellCheck?: boolean | null;

		/** The employment type filter specifies the employment type of jobs to search against, such as EmploymentType.FULL_TIME. If a value isn't specified, jobs in the search results includes any employment type. If multiple values are specified, jobs in the search results include any of the specified employment types. */
		employmentTypes?: Array<string>;

		/** This filter specifies a list of job names to be excluded during search. At most 400 excluded job names are allowed. */
		excludedJobs?: Array<string>;

		/** The category filter specifies the categories of jobs to search against. See JobCategory for more information. If a value isn't specified, jobs from any category are searched against. If multiple values are specified, jobs from any of the specified categories are searched against. */
		jobCategories?: Array<string>;

		/** This filter specifies the locale of jobs to search against, for example, "en-US". If a value isn't specified, the search results can contain jobs in any locale. Language codes should be in BCP-47 format, such as "en-US" or "sr-Latn". For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47). At most 10 language code filters are allowed. */
		languageCodes?: Array<string>;

		/** The location filter specifies geo-regions containing the jobs to search against. See LocationFilter for more information. If a location value isn't specified, jobs fitting the other search criteria are retrieved regardless of where they're located. If multiple values are specified, jobs are retrieved from any of the specified locations. If different values are specified for the LocationFilter.distance_in_miles parameter, the maximum provided distance is used for all locations. At most 5 location filters are allowed. */
		locationFilters?: Array<LocationFilter>;

		/** Message representing a period of time between two timestamps. */
		publishTimeRange?: TimestampRange;

		/** The query string that matches against the job title, description, and location fields. The maximum number of allowed characters is 255. */
		query?: string | null;

		/** The language code of query. For example, "en-US". This field helps to better interpret the query. If a value isn't specified, the query language code is automatically detected, which may not be accurate. Language code should be in BCP-47 format, such as "en-US" or "sr-Latn". For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47). */
		queryLanguageCode?: string | null;
	}

	/** The query required to perform a search query. */
	export interface JobQueryFormProperties {

		/** This filter specifies a structured syntax to match against the Job.custom_attributes marked as `filterable`. The syntax for this expression is a subset of SQL syntax. Supported operators are: `=`, `!=`, `<`, `<=`, `>`, and `>=` where the left of the operator is a custom field key and the right of the operator is a number or a quoted string. You must escape backslash (\\) and quote (\") characters. Supported functions are `LOWER([field_name])` to perform a case insensitive match and `EMPTY([field_name])` to filter on the existence of a key. Boolean expressions (AND/OR/NOT) are supported up to 3 levels of nesting (for example, "((A AND B AND C) OR NOT D) AND E"), a maximum of 100 comparisons or functions are allowed in the expression. The expression must be < 10000 bytes in length. Sample Query: `(LOWER(driving_license)="class \"a\"" OR EMPTY(driving_license)) AND driving_years > 10` */
		customAttributeFilter: FormControl<string | null | undefined>,

		/** This flag controls the spell-check feature. If false, the service attempts to correct a misspelled query, for example, "enginee" is corrected to "engineer". Defaults to false: a spell check is performed. */
		disableSpellCheck: FormControl<boolean | null | undefined>,

		/** The query string that matches against the job title, description, and location fields. The maximum number of allowed characters is 255. */
		query: FormControl<string | null | undefined>,

		/** The language code of query. For example, "en-US". This field helps to better interpret the query. If a value isn't specified, the query language code is automatically detected, which may not be accurate. Language code should be in BCP-47 format, such as "en-US" or "sr-Latn". For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47). */
		queryLanguageCode: FormControl<string | null | undefined>,
	}
	export function CreateJobQueryFormGroup() {
		return new FormGroup<JobQueryFormProperties>({
			customAttributeFilter: new FormControl<string | null | undefined>(undefined),
			disableSpellCheck: new FormControl<boolean | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
			queryLanguageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Geographic region of the search. */
	export interface LocationFilter {

		/** The address name, such as "Mountain View" or "Bay Area". */
		address?: string | null;

		/** The distance_in_miles is applied when the location being searched for is identified as a city or smaller. This field is ignored if the location being searched for is a state or larger. */
		distanceInMiles?: number | null;

		/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges. */
		latLng?: LatLng;

		/** CLDR region code of the country/region. This field may be used in two ways: 1) If telecommute preference is not set, this field is used address ambiguity of the user-input address. For example, "Liverpool" may refer to "Liverpool, NY, US" or "Liverpool, UK". This region code biases the address resolution toward a specific country or territory. If this field is not set, address resolution is biased toward the United States by default. 2) If telecommute preference is set to TELECOMMUTE_ALLOWED, the telecommute location filter will be limited to the region specified in this field. If this field is not set, the telecommute job locations will not be See https://unicode-org.github.io/cldr-staging/charts/latest/supplemental/territory_information.html for details. Example: "CH" for Switzerland. */
		regionCode?: string | null;

		/** Allows the client to return jobs without a set location, specifically, telecommuting jobs (telecommuting is considered by the service as a special location). Job.posting_region indicates if a job permits telecommuting. If this field is set to TelecommutePreference.TELECOMMUTE_ALLOWED, telecommuting jobs are searched, and address and lat_lng are ignored. If not set or set to TelecommutePreference.TELECOMMUTE_EXCLUDED, the telecommute status of the jobs is ignored. Jobs that have PostingRegion.TELECOMMUTE and have additional Job.addresses may still be matched based on other location filters using address or latlng. This filter can be used by itself to search exclusively for telecommuting jobs, or it can be combined with another location filter to search for a combination of job locations, such as "Mountain View" or "telecommuting" jobs. However, when used in combination with other location filters, telecommuting jobs can be treated as less relevant than other jobs in the search response. This field is only used for job search requests. */
		telecommutePreference?: LocationFilterTelecommutePreference | null;
	}

	/** Geographic region of the search. */
	export interface LocationFilterFormProperties {

		/** The address name, such as "Mountain View" or "Bay Area". */
		address: FormControl<string | null | undefined>,

		/** The distance_in_miles is applied when the location being searched for is identified as a city or smaller. This field is ignored if the location being searched for is a state or larger. */
		distanceInMiles: FormControl<number | null | undefined>,

		/** CLDR region code of the country/region. This field may be used in two ways: 1) If telecommute preference is not set, this field is used address ambiguity of the user-input address. For example, "Liverpool" may refer to "Liverpool, NY, US" or "Liverpool, UK". This region code biases the address resolution toward a specific country or territory. If this field is not set, address resolution is biased toward the United States by default. 2) If telecommute preference is set to TELECOMMUTE_ALLOWED, the telecommute location filter will be limited to the region specified in this field. If this field is not set, the telecommute job locations will not be See https://unicode-org.github.io/cldr-staging/charts/latest/supplemental/territory_information.html for details. Example: "CH" for Switzerland. */
		regionCode: FormControl<string | null | undefined>,

		/** Allows the client to return jobs without a set location, specifically, telecommuting jobs (telecommuting is considered by the service as a special location). Job.posting_region indicates if a job permits telecommuting. If this field is set to TelecommutePreference.TELECOMMUTE_ALLOWED, telecommuting jobs are searched, and address and lat_lng are ignored. If not set or set to TelecommutePreference.TELECOMMUTE_EXCLUDED, the telecommute status of the jobs is ignored. Jobs that have PostingRegion.TELECOMMUTE and have additional Job.addresses may still be matched based on other location filters using address or latlng. This filter can be used by itself to search exclusively for telecommuting jobs, or it can be combined with another location filter to search for a combination of job locations, such as "Mountain View" or "telecommuting" jobs. However, when used in combination with other location filters, telecommuting jobs can be treated as less relevant than other jobs in the search response. This field is only used for job search requests. */
		telecommutePreference: FormControl<LocationFilterTelecommutePreference | null | undefined>,
	}
	export function CreateLocationFilterFormGroup() {
		return new FormGroup<LocationFilterFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			distanceInMiles: new FormControl<number | null | undefined>(undefined),
			regionCode: new FormControl<string | null | undefined>(undefined),
			telecommutePreference: new FormControl<LocationFilterTelecommutePreference | null | undefined>(undefined),
		});

	}

	export enum LocationFilterTelecommutePreference { TELECOMMUTE_PREFERENCE_UNSPECIFIED = 'TELECOMMUTE_PREFERENCE_UNSPECIFIED', TELECOMMUTE_EXCLUDED = 'TELECOMMUTE_EXCLUDED', TELECOMMUTE_ALLOWED = 'TELECOMMUTE_ALLOWED', TELECOMMUTE_JOBS_EXCLUDED = 'TELECOMMUTE_JOBS_EXCLUDED' }


	/** Message representing a period of time between two timestamps. */
	export interface TimestampRange {

		/** End of the period (exclusive). */
		endTime?: string | null;

		/** Begin of the period (inclusive). */
		startTime?: string | null;
	}

	/** Message representing a period of time between two timestamps. */
	export interface TimestampRangeFormProperties {

		/** End of the period (exclusive). */
		endTime: FormControl<string | null | undefined>,

		/** Begin of the period (inclusive). */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateTimestampRangeFormGroup() {
		return new FormGroup<TimestampRangeFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The List companies response object. */
	export interface ListCompaniesResponse {

		/** Companies for the current client. */
		companies?: Array<Company>;

		/** Additional information returned to client, such as debugging information. */
		metadata?: ResponseMetadata;

		/** A token to retrieve the next page of results. */
		nextPageToken?: string | null;
	}

	/** The List companies response object. */
	export interface ListCompaniesResponseFormProperties {

		/** A token to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListCompaniesResponseFormGroup() {
		return new FormGroup<ListCompaniesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List jobs response. */
	export interface ListJobsResponse {

		/** The Jobs for a given company. The maximum number of items returned is based on the limit field provided in the request. */
		jobs?: Array<Job>;

		/** Additional information returned to client, such as debugging information. */
		metadata?: ResponseMetadata;

		/** A token to retrieve the next page of results. */
		nextPageToken?: string | null;
	}

	/** List jobs response. */
	export interface ListJobsResponseFormProperties {

		/** A token to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListJobsResponseFormGroup() {
		return new FormGroup<ListJobsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The List tenants response object. */
	export interface ListTenantsResponse {

		/** Additional information returned to client, such as debugging information. */
		metadata?: ResponseMetadata;

		/** A token to retrieve the next page of results. */
		nextPageToken?: string | null;

		/** Tenants for the current client. */
		tenants?: Array<Tenant>;
	}

	/** The List tenants response object. */
	export interface ListTenantsResponseFormProperties {

		/** A token to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListTenantsResponseFormGroup() {
		return new FormGroup<ListTenantsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Tenant resource represents a tenant in the service. A tenant is a group or entity that shares common access with specific privileges for resources like jobs. Customer may create multiple tenants to provide data isolation for different groups. */
	export interface Tenant {

		/** Required. Client side tenant identifier, used to uniquely identify the tenant. The maximum number of allowed characters is 255. */
		externalId?: string | null;

		/** Required during tenant update. The resource name for a tenant. This is generated by the service when a tenant is created. The format is "projects/{project_id}/tenants/{tenant_id}", for example, "projects/foo/tenants/bar". */
		name?: string | null;
	}

	/** A Tenant resource represents a tenant in the service. A tenant is a group or entity that shares common access with specific privileges for resources like jobs. Customer may create multiple tenants to provide data isolation for different groups. */
	export interface TenantFormProperties {

		/** Required. Client side tenant identifier, used to uniquely identify the tenant. The maximum number of allowed characters is 255. */
		externalId: FormControl<string | null | undefined>,

		/** Required during tenant update. The resource name for a tenant. This is generated by the service when a tenant is created. The format is "projects/{project_id}/tenants/{tenant_id}", for example, "projects/foo/tenants/bar". */
		name: FormControl<string | null | undefined>,
	}
	export function CreateTenantFormGroup() {
		return new FormGroup<TenantFormProperties>({
			externalId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Job entry with metadata inside SearchJobsResponse. */
	export interface MatchingJob {

		/** Commute details related to this job. */
		commuteInfo?: CommuteInfo;

		/** A Job resource represents a job posting (also referred to as a "job listing" or "job requisition"). A job belongs to a Company, which is the hiring entity responsible for the job. */
		job?: Job;

		/** A summary of the job with core information that's displayed on the search results listing page. */
		jobSummary?: string | null;

		/** Contains snippets of text from the Job.title field most closely matching a search query's keywords, if available. The matching query keywords are enclosed in HTML bold tags. */
		jobTitleSnippet?: string | null;

		/** Contains snippets of text from the Job.description and similar fields that most closely match a search query's keywords, if available. All HTML tags in the original fields are stripped when returned in this field, and matching query keywords are enclosed in HTML bold tags. */
		searchTextSnippet?: string | null;
	}

	/** Job entry with metadata inside SearchJobsResponse. */
	export interface MatchingJobFormProperties {

		/** A summary of the job with core information that's displayed on the search results listing page. */
		jobSummary: FormControl<string | null | undefined>,

		/** Contains snippets of text from the Job.title field most closely matching a search query's keywords, if available. The matching query keywords are enclosed in HTML bold tags. */
		jobTitleSnippet: FormControl<string | null | undefined>,

		/** Contains snippets of text from the Job.description and similar fields that most closely match a search query's keywords, if available. All HTML tags in the original fields are stripped when returned in this field, and matching query keywords are enclosed in HTML bold tags. */
		searchTextSnippet: FormControl<string | null | undefined>,
	}
	export function CreateMatchingJobFormGroup() {
		return new FormGroup<MatchingJobFormProperties>({
			jobSummary: new FormControl<string | null | undefined>(undefined),
			jobTitleSnippet: new FormControl<string | null | undefined>(undefined),
			searchTextSnippet: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message representing input to a Mendel server for debug forcing. See go/mendel-debug-forcing for more details. Next ID: 2 */
	export interface MendelDebugInput {

		/** When a request spans multiple servers, a MendelDebugInput may travel with the request and take effect in all the servers. This field is a map of namespaces to NamespacedMendelDebugInput protos. In a single server, up to two NamespacedMendelDebugInput protos are applied: 1. NamespacedMendelDebugInput with the global namespace (key == ""). 2. NamespacedMendelDebugInput with the server's namespace. When both NamespacedMendelDebugInput protos are present, they are merged. See go/mendel-debug-forcing for more details. */
		namespacedDebugInput?: {[id: string]: NamespacedDebugInput };
	}

	/** Message representing input to a Mendel server for debug forcing. See go/mendel-debug-forcing for more details. Next ID: 2 */
	export interface MendelDebugInputFormProperties {

		/** When a request spans multiple servers, a MendelDebugInput may travel with the request and take effect in all the servers. This field is a map of namespaces to NamespacedMendelDebugInput protos. In a single server, up to two NamespacedMendelDebugInput protos are applied: 1. NamespacedMendelDebugInput with the global namespace (key == ""). 2. NamespacedMendelDebugInput with the server's namespace. When both NamespacedMendelDebugInput protos are present, they are merged. See go/mendel-debug-forcing for more details. */
		namespacedDebugInput: FormControl<{[id: string]: NamespacedDebugInput } | null | undefined>,
	}
	export function CreateMendelDebugInputFormGroup() {
		return new FormGroup<MendelDebugInputFormProperties>({
			namespacedDebugInput: new FormControl<{[id: string]: NamespacedDebugInput } | null | undefined>(undefined),
		});

	}


	/** Next ID: 16 */
	export interface NamespacedDebugInput {

		/** Set of experiment names to be absolutely forced. These experiments will be forced without evaluating the conditions. */
		absolutelyForcedExpNames?: Array<string>;

		/** Set of experiment tags to be absolutely forced. The experiments with these tags will be forced without evaluating the conditions. */
		absolutelyForcedExpTags?: Array<string>;

		/** Set of experiment ids to be absolutely forced. These ids will be forced without evaluating the conditions. */
		absolutelyForcedExps?: Array<number>;

		/** Set of experiment names to be conditionally forced. These experiments will be forced only if their conditions and their parent domain's conditions are true. */
		conditionallyForcedExpNames?: Array<string>;

		/** Set of experiment tags to be conditionally forced. The experiments with these tags will be forced only if their conditions and their parent domain's conditions are true. */
		conditionallyForcedExpTags?: Array<string>;

		/** Set of experiment ids to be conditionally forced. These ids will be forced only if their conditions and their parent domain's conditions are true. */
		conditionallyForcedExps?: Array<number>;

		/** If true, disable automatic enrollment selection (at all diversion points). Automatic enrollment selection means experiment selection process based on the experiment's automatic enrollment condition. This does not disable selection of forced experiments. Setting this field to false does not change anything in the experiment selection process. */
		disableAutomaticEnrollmentSelection?: boolean | null;

		/** Set of experiment names to be disabled. If an experiment is disabled, it is never selected nor forced. If an aggregate experiment is disabled, its partitions are disabled together. If an experiment with an enrollment is disabled, the enrollment is disabled together. If a name corresponds to a domain, the domain itself and all descendant experiments and domains are disabled together. */
		disableExpNames?: Array<string>;

		/** Set of experiment tags to be disabled. All experiments that are tagged with one or more of these tags are disabled. If an experiment is disabled, it is never selected nor forced. If an aggregate experiment is disabled, its partitions are disabled together. If an experiment with an enrollment is disabled, the enrollment is disabled together. */
		disableExpTags?: Array<string>;

		/** Set of experiment ids to be disabled. If an experiment is disabled, it is never selected nor forced. If an aggregate experiment is disabled, its partitions are disabled together. If an experiment with an enrollment is disabled, the enrollment is disabled together. If an ID corresponds to a domain, the domain itself and all descendant experiments and domains are disabled together. */
		disableExps?: Array<number>;

		/** If true, disable manual enrollment selection (at all diversion points). Manual enrollment selection means experiment selection process based on the request's manual enrollment states (a.k.a. opt-in experiments). This does not disable selection of forced experiments. Setting this field to false does not change anything in the experiment selection process. */
		disableManualEnrollmentSelection?: boolean | null;

		/** If true, disable organic experiment selection (at all diversion points). Organic selection means experiment selection process based on traffic allocation and diversion condition evaluation. This does not disable selection of forced experiments. This is useful in cases when it is not known whether experiment selection behavior is responsible for a error or breakage. Disabling organic selection may help to isolate the cause of a given problem. Setting this field to false does not change anything in the experiment selection process. */
		disableOrganicSelection?: boolean | null;

		/** Flags to force in a particular experiment state. Map from flag name to flag value. */
		forcedFlags?: {[id: string]: string };

		/** Rollouts to force in a particular experiment state. Map from rollout name to rollout value. */
		forcedRollouts?: {[id: string]: boolean };

		/** Sets different testing modes. See the documentation in the TestingMode message for more information. */
		testingMode?: NamespacedDebugInputTestingMode | null;
	}

	/** Next ID: 16 */
	export interface NamespacedDebugInputFormProperties {

		/** If true, disable automatic enrollment selection (at all diversion points). Automatic enrollment selection means experiment selection process based on the experiment's automatic enrollment condition. This does not disable selection of forced experiments. Setting this field to false does not change anything in the experiment selection process. */
		disableAutomaticEnrollmentSelection: FormControl<boolean | null | undefined>,

		/** If true, disable manual enrollment selection (at all diversion points). Manual enrollment selection means experiment selection process based on the request's manual enrollment states (a.k.a. opt-in experiments). This does not disable selection of forced experiments. Setting this field to false does not change anything in the experiment selection process. */
		disableManualEnrollmentSelection: FormControl<boolean | null | undefined>,

		/** If true, disable organic experiment selection (at all diversion points). Organic selection means experiment selection process based on traffic allocation and diversion condition evaluation. This does not disable selection of forced experiments. This is useful in cases when it is not known whether experiment selection behavior is responsible for a error or breakage. Disabling organic selection may help to isolate the cause of a given problem. Setting this field to false does not change anything in the experiment selection process. */
		disableOrganicSelection: FormControl<boolean | null | undefined>,

		/** Flags to force in a particular experiment state. Map from flag name to flag value. */
		forcedFlags: FormControl<{[id: string]: string } | null | undefined>,

		/** Rollouts to force in a particular experiment state. Map from rollout name to rollout value. */
		forcedRollouts: FormControl<{[id: string]: boolean } | null | undefined>,

		/** Sets different testing modes. See the documentation in the TestingMode message for more information. */
		testingMode: FormControl<NamespacedDebugInputTestingMode | null | undefined>,
	}
	export function CreateNamespacedDebugInputFormGroup() {
		return new FormGroup<NamespacedDebugInputFormProperties>({
			disableAutomaticEnrollmentSelection: new FormControl<boolean | null | undefined>(undefined),
			disableManualEnrollmentSelection: new FormControl<boolean | null | undefined>(undefined),
			disableOrganicSelection: new FormControl<boolean | null | undefined>(undefined),
			forcedFlags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			forcedRollouts: new FormControl<{[id: string]: boolean } | null | undefined>(undefined),
			testingMode: new FormControl<NamespacedDebugInputTestingMode | null | undefined>(undefined),
		});

	}

	export enum NamespacedDebugInputTestingMode { TESTING_MODE_UNSPECIFIED = 'TESTING_MODE_UNSPECIFIED', TESTING_MODE_ALL_OFF = 'TESTING_MODE_ALL_OFF', TESTING_MODE_ALL_ON = 'TESTING_MODE_ALL_ON' }


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface Operation {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface OperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Meta information related to the job searcher or entity conducting the job search. This information is used to improve the performance of the service. */
	export interface RequestMetadata {

		/** Only set when any of domain, session_id and user_id isn't available for some reason. It is highly recommended not to set this field and provide accurate domain, session_id and user_id for the best service experience. */
		allowMissingIds?: boolean | null;

		/** Device information collected from the job seeker, candidate, or other entity conducting the job search. Providing this information improves the quality of the search results across devices. */
		deviceInfo?: DeviceInfo;

		/** Required if allow_missing_ids is unset or `false`. The client-defined scope or source of the service call, which typically is the domain on which the service has been implemented and is currently being run. For example, if the service is being run by client *Foo, Inc.*, on job board www.foo.com and career site www.bar.com, then this field is set to "foo.com" for use on the job board, and "bar.com" for use on the career site. Note that any improvements to the model for a particular tenant site rely on this field being set correctly to a unique domain. The maximum number of allowed characters is 255. */
		domain?: string | null;

		/** Required if allow_missing_ids is unset or `false`. A unique session identification string. A session is defined as the duration of an end user's interaction with the service over a certain period. Obfuscate this field for privacy concerns before providing it to the service. Note that any improvements to the model for a particular tenant site rely on this field being set correctly to a unique session ID. The maximum number of allowed characters is 255. */
		sessionId?: string | null;

		/** Required if allow_missing_ids is unset or `false`. A unique user identification string, as determined by the client. To have the strongest positive impact on search quality make sure the client-level is unique. Obfuscate this field for privacy concerns before providing it to the service. Note that any improvements to the model for a particular tenant site rely on this field being set correctly to a unique user ID. The maximum number of allowed characters is 255. */
		userId?: string | null;
	}

	/** Meta information related to the job searcher or entity conducting the job search. This information is used to improve the performance of the service. */
	export interface RequestMetadataFormProperties {

		/** Only set when any of domain, session_id and user_id isn't available for some reason. It is highly recommended not to set this field and provide accurate domain, session_id and user_id for the best service experience. */
		allowMissingIds: FormControl<boolean | null | undefined>,

		/** Required if allow_missing_ids is unset or `false`. The client-defined scope or source of the service call, which typically is the domain on which the service has been implemented and is currently being run. For example, if the service is being run by client *Foo, Inc.*, on job board www.foo.com and career site www.bar.com, then this field is set to "foo.com" for use on the job board, and "bar.com" for use on the career site. Note that any improvements to the model for a particular tenant site rely on this field being set correctly to a unique domain. The maximum number of allowed characters is 255. */
		domain: FormControl<string | null | undefined>,

		/** Required if allow_missing_ids is unset or `false`. A unique session identification string. A session is defined as the duration of an end user's interaction with the service over a certain period. Obfuscate this field for privacy concerns before providing it to the service. Note that any improvements to the model for a particular tenant site rely on this field being set correctly to a unique session ID. The maximum number of allowed characters is 255. */
		sessionId: FormControl<string | null | undefined>,

		/** Required if allow_missing_ids is unset or `false`. A unique user identification string, as determined by the client. To have the strongest positive impact on search quality make sure the client-level is unique. Obfuscate this field for privacy concerns before providing it to the service. Note that any improvements to the model for a particular tenant site rely on this field being set correctly to a unique user ID. The maximum number of allowed characters is 255. */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateRequestMetadataFormGroup() {
		return new FormGroup<RequestMetadataFormProperties>({
			allowMissingIds: new FormControl<boolean | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined),
			sessionId: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Request body of the `SearchJobs` call. */
	export interface SearchJobsRequest {

		/** Custom ranking information for SearchJobsRequest. */
		customRankingInfo?: CustomRankingInfo;

		/** This field is deprecated. Please use SearchJobsRequest.keyword_match_mode going forward. To migrate, disable_keyword_match set to false maps to KeywordMatchMode.KEYWORD_MATCH_ALL, and disable_keyword_match set to true maps to KeywordMatchMode.KEYWORD_MATCH_DISABLED. If SearchJobsRequest.keyword_match_mode is set, this field is ignored. Controls whether to disable exact keyword match on Job.title, Job.description, Job.company_display_name, Job.addresses, Job.qualifications. When disable keyword match is turned off, a keyword match returns jobs that do not match given category filters when there are matching keywords. For example, for the query "program manager," a result is returned even if the job posting has the title "software developer," which doesn't fall into "program manager" ontology, but does have "program manager" appearing in its description. For queries like "cloud" that don't contain title or location specific ontology, jobs with "cloud" keyword matches are returned regardless of this flag's value. Use Company.keyword_searchable_job_custom_attributes if company-specific globally matched custom field/attribute string values are needed. Enabling keyword match improves recall of subsequent search requests. Defaults to false. */
		disableKeywordMatch?: boolean | null;

		/** Controls whether highly similar jobs are returned next to each other in the search results. Jobs are identified as highly similar based on their titles, job categories, and locations. Highly similar results are clustered so that only one representative job of the cluster is displayed to the job seeker higher up in the results, with the other jobs being displayed lower down in the results. Defaults to DiversificationLevel.SIMPLE if no value is specified. */
		diversificationLevel?: SearchJobsRequestDiversificationLevel | null;

		/** Controls whether to broaden the search when it produces sparse results. Broadened queries append results to the end of the matching results list. Defaults to false. */
		enableBroadening?: boolean | null;

		/** An expression specifies a histogram request against matching jobs. Expression syntax is an aggregation function call with histogram facets and other options. Available aggregation function calls are: * `count(string_histogram_facet)`: Count the number of matching entities, for each distinct attribute value. * `count(numeric_histogram_facet, list of buckets)`: Count the number of matching entities within each bucket. A maximum of 200 histogram buckets are supported. Data types: * Histogram facet: facet names with format `a-zA-Z+`. * String: string like "any string with backslash escape for quote(\")." * Number: whole number and floating point number like 10, -1 and -0.01. * List: list of elements with comma(,) separator surrounded by square brackets, for example, [1, 2, 3] and ["one", "two", "three"]. Built-in constants: * MIN (minimum number similar to java Double.MIN_VALUE) * MAX (maximum number similar to java Double.MAX_VALUE) Built-in functions: * bucket(start, end[, label]): bucket built-in function creates a bucket with range of start, end). Note that the end is exclusive, for example, bucket(1, MAX, "positive number") or bucket(1, 10). Job histogram facets: * company_display_name: histogram by [Job.company_display_name. * employment_type: histogram by Job.employment_types, for example, "FULL_TIME", "PART_TIME". * company_size (DEPRECATED): histogram by CompanySize, for example, "SMALL", "MEDIUM", "BIG". * publish_time_in_day: histogram by the Job.posting_publish_time in days. Must specify list of numeric buckets in spec. * publish_time_in_month: histogram by the Job.posting_publish_time in months. Must specify list of numeric buckets in spec. * publish_time_in_year: histogram by the Job.posting_publish_time in years. Must specify list of numeric buckets in spec. * degree_types: histogram by the Job.degree_types, for example, "Bachelors", "Masters". * job_level: histogram by the Job.job_level, for example, "Entry Level". * country: histogram by the country code of jobs, for example, "US", "FR". * admin1: histogram by the admin1 code of jobs, which is a global placeholder referring to the state, province, or the particular term a country uses to define the geographic structure below the country level, for example, "CA", "IL". * city: histogram by a combination of the "city name, admin1 code". For example, "Mountain View, CA", "New York, NY". * admin1_country: histogram by a combination of the "admin1 code, country", for example, "CA, US", "IL, US". * city_coordinate: histogram by the city center's GPS coordinates (latitude and longitude), for example, 37.4038522,-122.0987765. Since the coordinates of a city center can change, customers may need to refresh them periodically. * locale: histogram by the Job.language_code, for example, "en-US", "fr-FR". * language: histogram by the language subtag of the Job.language_code, for example, "en", "fr". * category: histogram by the JobCategory, for example, "COMPUTER_AND_IT", "HEALTHCARE". * base_compensation_unit: histogram by the CompensationInfo.CompensationUnit of base salary, for example, "WEEKLY", "MONTHLY". * base_compensation: histogram by the base salary. Must specify list of numeric buckets to group results by. * annualized_base_compensation: histogram by the base annualized salary. Must specify list of numeric buckets to group results by. * annualized_total_compensation: histogram by the total annualized salary. Must specify list of numeric buckets to group results by. * string_custom_attribute: histogram by string Job.custom_attributes. Values can be accessed via square bracket notations like string_custom_attribute["key1"]. * numeric_custom_attribute: histogram by numeric Job.custom_attributes. Values can be accessed via square bracket notations like numeric_custom_attribute["key1"]. Must specify list of numeric buckets to group results by. Example expressions: * `count(admin1)` * `count(base_compensation, [bucket(1000, 10000), bucket(10000, 100000), bucket(100000, MAX)])` * `count(string_custom_attribute["some-string-custom-attribute"])` * `count(numeric_custom_attribute["some-numeric-custom-attribute"], [bucket(MIN, 0, "negative"), bucket(0, MAX, "non-negative")])` */
		histogramQueries?: Array<HistogramQuery>;

		/** The query required to perform a search query. */
		jobQuery?: JobQuery;

		/** The desired job attributes returned for jobs in the search response. Defaults to JobView.JOB_VIEW_SMALL if no value is specified. */
		jobView?: SearchJobsRequestJobView | null;

		/** Controls what keyword match options to use. If both keyword_match_mode and disable_keyword_match are set, keyword_match_mode will take precedence. Defaults to KeywordMatchMode.KEYWORD_MATCH_ALL if no value is specified. */
		keywordMatchMode?: SearchJobsRequestKeywordMatchMode | null;

		/** A limit on the number of jobs returned in the search results. Increasing this value above the default value of 10 can increase search response time. The value can be between 1 and 100. */
		maxPageSize?: number | null;

		/** An integer that specifies the current offset (that is, starting result location, amongst the jobs deemed by the API as relevant) in search results. This field is only considered if page_token is unset. The maximum allowed value is 5000. Otherwise an error is thrown. For example, 0 means to return results starting from the first matching job, and 10 means to return from the 11th job. This can be used for pagination, (for example, pageSize = 10 and offset = 10 means to return from the second page). */
		offset?: number | null;

		/** The criteria determining how search results are sorted. Default is `"relevance desc"`. Supported options are: * `"relevance desc"`: By relevance descending, as determined by the API algorithms. Relevance thresholding of query results is only available with this ordering. * `"posting_publish_time desc"`: By Job.posting_publish_time descending. * `"posting_update_time desc"`: By Job.posting_update_time descending. * `"title"`: By Job.title ascending. * `"title desc"`: By Job.title descending. * `"annualized_base_compensation"`: By job's CompensationInfo.annualized_base_compensation_range ascending. Jobs whose annualized base compensation is unspecified are put at the end of search results. * `"annualized_base_compensation desc"`: By job's CompensationInfo.annualized_base_compensation_range descending. Jobs whose annualized base compensation is unspecified are put at the end of search results. * `"annualized_total_compensation"`: By job's CompensationInfo.annualized_total_compensation_range ascending. Jobs whose annualized base compensation is unspecified are put at the end of search results. * `"annualized_total_compensation desc"`: By job's CompensationInfo.annualized_total_compensation_range descending. Jobs whose annualized base compensation is unspecified are put at the end of search results. * `"custom_ranking desc"`: By the relevance score adjusted to the SearchJobsRequest.CustomRankingInfo.ranking_expression with weight factor assigned by SearchJobsRequest.CustomRankingInfo.importance_level in descending order. * Location sorting: Use the special syntax to order jobs by distance: `"distance_from('Hawaii')"`: Order by distance from Hawaii. `"distance_from(19.89, 155.5)"`: Order by distance from a coordinate. `"distance_from('Hawaii'), distance_from('Puerto Rico')"`: Order by multiple locations. See details below. `"distance_from('Hawaii'), distance_from(19.89, 155.5)"`: Order by multiple locations. See details below. The string can have a maximum of 256 characters. When multiple distance centers are provided, a job that is close to any of the distance centers would have a high rank. When a job has multiple locations, the job location closest to one of the distance centers will be used. Jobs that don't have locations will be ranked at the bottom. Distance is calculated with a precision of 11.3 meters (37.4 feet). Diversification strategy is still applied unless explicitly disabled in diversification_level. */
		orderBy?: string | null;

		/** The token specifying the current offset within search results. See SearchJobsResponse.next_page_token for an explanation of how to obtain the next set of query results. */
		pageToken?: string | null;

		/** Meta information related to the job searcher or entity conducting the job search. This information is used to improve the performance of the service. */
		requestMetadata?: RequestMetadata;

		/** Mode of a search. Defaults to SearchMode.JOB_SEARCH. */
		searchMode?: SearchJobsRequestSearchMode | null;
	}

	/** The Request body of the `SearchJobs` call. */
	export interface SearchJobsRequestFormProperties {

		/** This field is deprecated. Please use SearchJobsRequest.keyword_match_mode going forward. To migrate, disable_keyword_match set to false maps to KeywordMatchMode.KEYWORD_MATCH_ALL, and disable_keyword_match set to true maps to KeywordMatchMode.KEYWORD_MATCH_DISABLED. If SearchJobsRequest.keyword_match_mode is set, this field is ignored. Controls whether to disable exact keyword match on Job.title, Job.description, Job.company_display_name, Job.addresses, Job.qualifications. When disable keyword match is turned off, a keyword match returns jobs that do not match given category filters when there are matching keywords. For example, for the query "program manager," a result is returned even if the job posting has the title "software developer," which doesn't fall into "program manager" ontology, but does have "program manager" appearing in its description. For queries like "cloud" that don't contain title or location specific ontology, jobs with "cloud" keyword matches are returned regardless of this flag's value. Use Company.keyword_searchable_job_custom_attributes if company-specific globally matched custom field/attribute string values are needed. Enabling keyword match improves recall of subsequent search requests. Defaults to false. */
		disableKeywordMatch: FormControl<boolean | null | undefined>,

		/** Controls whether highly similar jobs are returned next to each other in the search results. Jobs are identified as highly similar based on their titles, job categories, and locations. Highly similar results are clustered so that only one representative job of the cluster is displayed to the job seeker higher up in the results, with the other jobs being displayed lower down in the results. Defaults to DiversificationLevel.SIMPLE if no value is specified. */
		diversificationLevel: FormControl<SearchJobsRequestDiversificationLevel | null | undefined>,

		/** Controls whether to broaden the search when it produces sparse results. Broadened queries append results to the end of the matching results list. Defaults to false. */
		enableBroadening: FormControl<boolean | null | undefined>,

		/** The desired job attributes returned for jobs in the search response. Defaults to JobView.JOB_VIEW_SMALL if no value is specified. */
		jobView: FormControl<SearchJobsRequestJobView | null | undefined>,

		/** Controls what keyword match options to use. If both keyword_match_mode and disable_keyword_match are set, keyword_match_mode will take precedence. Defaults to KeywordMatchMode.KEYWORD_MATCH_ALL if no value is specified. */
		keywordMatchMode: FormControl<SearchJobsRequestKeywordMatchMode | null | undefined>,

		/** A limit on the number of jobs returned in the search results. Increasing this value above the default value of 10 can increase search response time. The value can be between 1 and 100. */
		maxPageSize: FormControl<number | null | undefined>,

		/** An integer that specifies the current offset (that is, starting result location, amongst the jobs deemed by the API as relevant) in search results. This field is only considered if page_token is unset. The maximum allowed value is 5000. Otherwise an error is thrown. For example, 0 means to return results starting from the first matching job, and 10 means to return from the 11th job. This can be used for pagination, (for example, pageSize = 10 and offset = 10 means to return from the second page). */
		offset: FormControl<number | null | undefined>,

		/** The criteria determining how search results are sorted. Default is `"relevance desc"`. Supported options are: * `"relevance desc"`: By relevance descending, as determined by the API algorithms. Relevance thresholding of query results is only available with this ordering. * `"posting_publish_time desc"`: By Job.posting_publish_time descending. * `"posting_update_time desc"`: By Job.posting_update_time descending. * `"title"`: By Job.title ascending. * `"title desc"`: By Job.title descending. * `"annualized_base_compensation"`: By job's CompensationInfo.annualized_base_compensation_range ascending. Jobs whose annualized base compensation is unspecified are put at the end of search results. * `"annualized_base_compensation desc"`: By job's CompensationInfo.annualized_base_compensation_range descending. Jobs whose annualized base compensation is unspecified are put at the end of search results. * `"annualized_total_compensation"`: By job's CompensationInfo.annualized_total_compensation_range ascending. Jobs whose annualized base compensation is unspecified are put at the end of search results. * `"annualized_total_compensation desc"`: By job's CompensationInfo.annualized_total_compensation_range descending. Jobs whose annualized base compensation is unspecified are put at the end of search results. * `"custom_ranking desc"`: By the relevance score adjusted to the SearchJobsRequest.CustomRankingInfo.ranking_expression with weight factor assigned by SearchJobsRequest.CustomRankingInfo.importance_level in descending order. * Location sorting: Use the special syntax to order jobs by distance: `"distance_from('Hawaii')"`: Order by distance from Hawaii. `"distance_from(19.89, 155.5)"`: Order by distance from a coordinate. `"distance_from('Hawaii'), distance_from('Puerto Rico')"`: Order by multiple locations. See details below. `"distance_from('Hawaii'), distance_from(19.89, 155.5)"`: Order by multiple locations. See details below. The string can have a maximum of 256 characters. When multiple distance centers are provided, a job that is close to any of the distance centers would have a high rank. When a job has multiple locations, the job location closest to one of the distance centers will be used. Jobs that don't have locations will be ranked at the bottom. Distance is calculated with a precision of 11.3 meters (37.4 feet). Diversification strategy is still applied unless explicitly disabled in diversification_level. */
		orderBy: FormControl<string | null | undefined>,

		/** The token specifying the current offset within search results. See SearchJobsResponse.next_page_token for an explanation of how to obtain the next set of query results. */
		pageToken: FormControl<string | null | undefined>,

		/** Mode of a search. Defaults to SearchMode.JOB_SEARCH. */
		searchMode: FormControl<SearchJobsRequestSearchMode | null | undefined>,
	}
	export function CreateSearchJobsRequestFormGroup() {
		return new FormGroup<SearchJobsRequestFormProperties>({
			disableKeywordMatch: new FormControl<boolean | null | undefined>(undefined),
			diversificationLevel: new FormControl<SearchJobsRequestDiversificationLevel | null | undefined>(undefined),
			enableBroadening: new FormControl<boolean | null | undefined>(undefined),
			jobView: new FormControl<SearchJobsRequestJobView | null | undefined>(undefined),
			keywordMatchMode: new FormControl<SearchJobsRequestKeywordMatchMode | null | undefined>(undefined),
			maxPageSize: new FormControl<number | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			orderBy: new FormControl<string | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
			searchMode: new FormControl<SearchJobsRequestSearchMode | null | undefined>(undefined),
		});

	}

	export enum SearchJobsRequestDiversificationLevel { DIVERSIFICATION_LEVEL_UNSPECIFIED = 'DIVERSIFICATION_LEVEL_UNSPECIFIED', DISABLED = 'DISABLED', SIMPLE = 'SIMPLE', ONE_PER_COMPANY = 'ONE_PER_COMPANY', TWO_PER_COMPANY = 'TWO_PER_COMPANY', MAX_THREE_PER_COMPANY = 'MAX_THREE_PER_COMPANY', DIVERSIFY_BY_LOOSER_SIMILARITY = 'DIVERSIFY_BY_LOOSER_SIMILARITY' }

	export enum SearchJobsRequestJobView { JOB_VIEW_UNSPECIFIED = 'JOB_VIEW_UNSPECIFIED', JOB_VIEW_ID_ONLY = 'JOB_VIEW_ID_ONLY', JOB_VIEW_MINIMAL = 'JOB_VIEW_MINIMAL', JOB_VIEW_SMALL = 'JOB_VIEW_SMALL', JOB_VIEW_FULL = 'JOB_VIEW_FULL' }

	export enum SearchJobsRequestKeywordMatchMode { KEYWORD_MATCH_MODE_UNSPECIFIED = 'KEYWORD_MATCH_MODE_UNSPECIFIED', KEYWORD_MATCH_DISABLED = 'KEYWORD_MATCH_DISABLED', KEYWORD_MATCH_ALL = 'KEYWORD_MATCH_ALL', KEYWORD_MATCH_TITLE_ONLY = 'KEYWORD_MATCH_TITLE_ONLY' }

	export enum SearchJobsRequestSearchMode { SEARCH_MODE_UNSPECIFIED = 'SEARCH_MODE_UNSPECIFIED', JOB_SEARCH = 'JOB_SEARCH', FEATURED_JOB_SEARCH = 'FEATURED_JOB_SEARCH' }


	/** Response for SearchJob method. */
	export interface SearchJobsResponse {

		/** If query broadening is enabled, we may append additional results from the broadened query. This number indicates how many of the jobs returned in the jobs field are from the broadened query. These results are always at the end of the jobs list. In particular, a value of 0, or if the field isn't set, all the jobs in the jobs list are from the original (without broadening) query. If this field is non-zero, subsequent requests with offset after this result set should contain all broadened results. */
		broadenedQueryJobsCount?: number | null;

		/** The histogram results that match with specified SearchJobsRequest.histogram_queries. */
		histogramQueryResults?: Array<HistogramQueryResult>;

		/** The location filters that the service applied to the specified query. If any filters are lat-lng based, the Location.location_type is Location.LocationType.LOCATION_TYPE_UNSPECIFIED. */
		locationFilters?: Array<Location>;

		/** The Job entities that match the specified SearchJobsRequest. */
		matchingJobs?: Array<MatchingJob>;

		/** Additional information returned to client, such as debugging information. */
		metadata?: ResponseMetadata;

		/** The token that specifies the starting position of the next page of results. This field is empty if there are no more results. */
		nextPageToken?: string | null;

		/** Spell check result. */
		spellCorrection?: SpellingCorrection;

		/** Number of jobs that match the specified query. Note: This size is precise only if the total is less than 100,000. */
		totalSize?: number | null;
	}

	/** Response for SearchJob method. */
	export interface SearchJobsResponseFormProperties {

		/** If query broadening is enabled, we may append additional results from the broadened query. This number indicates how many of the jobs returned in the jobs field are from the broadened query. These results are always at the end of the jobs list. In particular, a value of 0, or if the field isn't set, all the jobs in the jobs list are from the original (without broadening) query. If this field is non-zero, subsequent requests with offset after this result set should contain all broadened results. */
		broadenedQueryJobsCount: FormControl<number | null | undefined>,

		/** The token that specifies the starting position of the next page of results. This field is empty if there are no more results. */
		nextPageToken: FormControl<string | null | undefined>,

		/** Number of jobs that match the specified query. Note: This size is precise only if the total is less than 100,000. */
		totalSize: FormControl<number | null | undefined>,
	}
	export function CreateSearchJobsResponseFormGroup() {
		return new FormGroup<SearchJobsResponseFormProperties>({
			broadenedQueryJobsCount: new FormControl<number | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Spell check result. */
	export interface SpellingCorrection {

		/** Indicates if the query was corrected by the spell checker. */
		corrected?: boolean | null;

		/** Corrected output with html tags to highlight the corrected words. Corrected words are called out with the "*...*" html tags. For example, the user input query is "software enginear", where the second word, "enginear," is incorrect. It should be "engineer". When spelling correction is enabled, this value is "software *engineer*". */
		correctedHtml?: string | null;

		/** Correction output consisting of the corrected keyword string. */
		correctedText?: string | null;
	}

	/** Spell check result. */
	export interface SpellingCorrectionFormProperties {

		/** Indicates if the query was corrected by the spell checker. */
		corrected: FormControl<boolean | null | undefined>,

		/** Corrected output with html tags to highlight the corrected words. Corrected words are called out with the "*...*" html tags. For example, the user input query is "software enginear", where the second word, "enginear," is incorrect. It should be "engineer". When spelling correction is enabled, this value is "software *engineer*". */
		correctedHtml: FormControl<string | null | undefined>,

		/** Correction output consisting of the corrected keyword string. */
		correctedText: FormControl<string | null | undefined>,
	}
	export function CreateSpellingCorrectionFormGroup() {
		return new FormGroup<SpellingCorrectionFormProperties>({
			corrected: new FormControl<boolean | null | undefined>(undefined),
			correctedHtml: new FormControl<string | null | undefined>(undefined),
			correctedText: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes the specified job. Typically, the job becomes unsearchable within 10 seconds, but it may take up to 5 minutes.
		 * Delete v4/{name}
		 * @param {string} name Required. The resource name of the job to be deleted. The format is "projects/{project_id}/tenants/{tenant_id}/jobs/{job_id}". For example, "projects/foo/tenants/bar/jobs/baz".
		 * @return {Empty} Successful response
		 */
		Jobs_projects_tenants_jobs_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v4/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Retrieves the specified job, whose status is OPEN or recently EXPIRED within the last 90 days.
		 * Get v4/{name}
		 * @param {string} name Required. The resource name of the job to retrieve. The format is "projects/{project_id}/tenants/{tenant_id}/jobs/{job_id}". For example, "projects/foo/tenants/bar/jobs/baz".
		 * @return {Job} Successful response
		 */
		Jobs_projects_tenants_jobs_get(name: string): Observable<Job> {
			return this.http.get<Job>(this.baseUri + 'v4/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates specified job. Typically, updated contents become visible in search results within 10 seconds, but it may take up to 5 minutes.
		 * Patch v4/{name}
		 * @param {string} name Required during job update. The resource name for the job. This is generated by the service when a job is created. The format is "projects/{project_id}/tenants/{tenant_id}/jobs/{job_id}". For example, "projects/foo/tenants/bar/jobs/baz". Use of this field in job queries and API calls is preferred over the use of requisition_id since this value is unique.
		 * @param {string} updateMask Strongly recommended for the best service experience. If update_mask is provided, only the specified fields in job are updated. Otherwise all the fields are updated. A field mask to restrict the fields that are updated. Only top level fields of Job are supported.
		 * @return {Job} Successful response
		 */
		Jobs_projects_tenants_jobs_patch(name: string, updateMask: string | null | undefined, requestBody: Job): Observable<Job> {
			return this.http.patch<Job>(this.baseUri + 'v4/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Report events issued when end user interacts with customer's application that uses Cloud Talent Solution. You may inspect the created events in [self service tools](https://console.cloud.google.com/talent-solution/overview). [Learn more](https://cloud.google.com/talent-solution/docs/management-tools) about self service tools.
		 * Post v4/{parent}/clientEvents
		 * @param {string} parent Required. Resource name of the tenant under which the event is created. The format is "projects/{project_id}/tenants/{tenant_id}", for example, "projects/foo/tenants/bar".
		 * @return {ClientEvent} Successful response
		 */
		Jobs_projects_tenants_clientEvents_create(parent: string, requestBody: ClientEvent): Observable<ClientEvent> {
			return this.http.post<ClientEvent>(this.baseUri + 'v4/' + (parent == null ? '' : encodeURIComponent(parent)) + '/clientEvents', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all companies associated with the project.
		 * Get v4/{parent}/companies
		 * @param {string} parent Required. Resource name of the tenant under which the company is created. The format is "projects/{project_id}/tenants/{tenant_id}", for example, "projects/foo/tenants/bar".
		 * @param {number} pageSize The maximum number of companies to be returned, at most 100. Default is 100 if a non-positive number is provided.
		 * @param {string} pageToken The starting indicator from which to return results.
		 * @param {boolean} requireOpenJobs Set to true if the companies requested must have open jobs. Defaults to false. If true, at most page_size of companies are fetched, among which only those with open jobs are returned.
		 * @return {ListCompaniesResponse} Successful response
		 */
		Jobs_projects_tenants_companies_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, requireOpenJobs: boolean | null | undefined): Observable<ListCompaniesResponse> {
			return this.http.get<ListCompaniesResponse>(this.baseUri + 'v4/' + (parent == null ? '' : encodeURIComponent(parent)) + '/companies&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&requireOpenJobs=' + requireOpenJobs, {});
		}

		/**
		 * Creates a new company entity.
		 * Post v4/{parent}/companies
		 * @param {string} parent Required. Resource name of the tenant under which the company is created. The format is "projects/{project_id}/tenants/{tenant_id}", for example, "projects/foo/tenants/bar".
		 * @return {Company} Successful response
		 */
		Jobs_projects_tenants_companies_create(parent: string, requestBody: Company): Observable<Company> {
			return this.http.post<Company>(this.baseUri + 'v4/' + (parent == null ? '' : encodeURIComponent(parent)) + '/companies', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists jobs by filter.
		 * Get v4/{parent}/jobs
		 * @param {string} parent Required. The resource name of the tenant under which the job is created. The format is "projects/{project_id}/tenants/{tenant_id}". For example, "projects/foo/tenants/bar".
		 * @param {string} filter Required. The filter string specifies the jobs to be enumerated. Supported operator: =, AND The fields eligible for filtering are: * `companyName` * `requisitionId` * `status` Available values: OPEN, EXPIRED, ALL. Defaults to OPEN if no value is specified. At least one of `companyName` and `requisitionId` must present or an INVALID_ARGUMENT error is thrown. Sample Query: * companyName = "projects/foo/tenants/bar/companies/baz" * companyName = "projects/foo/tenants/bar/companies/baz" AND requisitionId = "req-1" * companyName = "projects/foo/tenants/bar/companies/baz" AND status = "EXPIRED" * requisitionId = "req-1" * requisitionId = "req-1" AND status = "EXPIRED"
		 * @param {SearchJobsRequestJobView} jobView The desired job attributes returned for jobs in the search response. Defaults to JobView.JOB_VIEW_FULL if no value is specified.
		 * @param {number} pageSize The maximum number of jobs to be returned per page of results. If job_view is set to JobView.JOB_VIEW_ID_ONLY, the maximum allowed page size is 1000. Otherwise, the maximum allowed page size is 100. Default is 100 if empty or a number < 1 is specified.
		 * @param {string} pageToken The starting point of a query result.
		 * @return {ListJobsResponse} Successful response
		 */
		Jobs_projects_tenants_jobs_list(parent: string, filter: string | null | undefined, jobView: SearchJobsRequestJobView | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListJobsResponse> {
			return this.http.get<ListJobsResponse>(this.baseUri + 'v4/' + (parent == null ? '' : encodeURIComponent(parent)) + '/jobs&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&jobView=' + jobView + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new job. Typically, the job becomes searchable within 10 seconds, but it may take up to 5 minutes.
		 * Post v4/{parent}/jobs
		 * @param {string} parent Required. The resource name of the tenant under which the job is created. The format is "projects/{project_id}/tenants/{tenant_id}". For example, "projects/foo/tenants/bar".
		 * @return {Job} Successful response
		 */
		Jobs_projects_tenants_jobs_create(parent: string, requestBody: Job): Observable<Job> {
			return this.http.post<Job>(this.baseUri + 'v4/' + (parent == null ? '' : encodeURIComponent(parent)) + '/jobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Begins executing a batch create jobs operation.
		 * Post v4/{parent}/jobs:batchCreate
		 * @param {string} parent Required. The resource name of the tenant under which the job is created. The format is "projects/{project_id}/tenants/{tenant_id}". For example, "projects/foo/tenants/bar".
		 * @return {Operation} Successful response
		 */
		Jobs_projects_tenants_jobs_batchCreate(parent: string, requestBody: BatchCreateJobsRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v4/' + (parent == null ? '' : encodeURIComponent(parent)) + '/jobs:batchCreate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Begins executing a batch delete jobs operation.
		 * Post v4/{parent}/jobs:batchDelete
		 * @param {string} parent Required. The resource name of the tenant under which the job is created. The format is "projects/{project_id}/tenants/{tenant_id}". For example, "projects/foo/tenants/bar". The parent of all of the jobs specified in `names` must match this field.
		 * @return {Operation} Successful response
		 */
		Jobs_projects_tenants_jobs_batchDelete(parent: string, requestBody: BatchDeleteJobsRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v4/' + (parent == null ? '' : encodeURIComponent(parent)) + '/jobs:batchDelete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Begins executing a batch update jobs operation.
		 * Post v4/{parent}/jobs:batchUpdate
		 * @param {string} parent Required. The resource name of the tenant under which the job is created. The format is "projects/{project_id}/tenants/{tenant_id}". For example, "projects/foo/tenants/bar".
		 * @return {Operation} Successful response
		 */
		Jobs_projects_tenants_jobs_batchUpdate(parent: string, requestBody: BatchUpdateJobsRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v4/' + (parent == null ? '' : encodeURIComponent(parent)) + '/jobs:batchUpdate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Searches for jobs using the provided SearchJobsRequest. This call constrains the visibility of jobs present in the database, and only returns jobs that the caller has permission to search against.
		 * Post v4/{parent}/jobs:search
		 * @param {string} parent Required. The resource name of the tenant to search within. The format is "projects/{project_id}/tenants/{tenant_id}". For example, "projects/foo/tenants/bar".
		 * @return {SearchJobsResponse} Successful response
		 */
		Jobs_projects_tenants_jobs_search(parent: string, requestBody: SearchJobsRequest): Observable<SearchJobsResponse> {
			return this.http.post<SearchJobsResponse>(this.baseUri + 'v4/' + (parent == null ? '' : encodeURIComponent(parent)) + '/jobs:search', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Searches for jobs using the provided SearchJobsRequest. This API call is intended for the use case of targeting passive job seekers (for example, job seekers who have signed up to receive email alerts about potential job opportunities), it has different algorithmic adjustments that are designed to specifically target passive job seekers. This call constrains the visibility of jobs present in the database, and only returns jobs the caller has permission to search against.
		 * Post v4/{parent}/jobs:searchForAlert
		 * @param {string} parent Required. The resource name of the tenant to search within. The format is "projects/{project_id}/tenants/{tenant_id}". For example, "projects/foo/tenants/bar".
		 * @return {SearchJobsResponse} Successful response
		 */
		Jobs_projects_tenants_jobs_searchForAlert(parent: string, requestBody: SearchJobsRequest): Observable<SearchJobsResponse> {
			return this.http.post<SearchJobsResponse>(this.baseUri + 'v4/' + (parent == null ? '' : encodeURIComponent(parent)) + '/jobs:searchForAlert', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all tenants associated with the project.
		 * Get v4/{parent}/tenants
		 * @param {string} parent Required. Resource name of the project under which the tenant is created. The format is "projects/{project_id}", for example, "projects/foo".
		 * @param {number} pageSize The maximum number of tenants to be returned, at most 100. Default is 100 if a non-positive number is provided.
		 * @param {string} pageToken The starting indicator from which to return results.
		 * @return {ListTenantsResponse} Successful response
		 */
		Jobs_projects_tenants_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListTenantsResponse> {
			return this.http.get<ListTenantsResponse>(this.baseUri + 'v4/' + (parent == null ? '' : encodeURIComponent(parent)) + '/tenants&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new tenant entity.
		 * Post v4/{parent}/tenants
		 * @param {string} parent Required. Resource name of the project under which the tenant is created. The format is "projects/{project_id}", for example, "projects/foo".
		 * @return {Tenant} Successful response
		 */
		Jobs_projects_tenants_create(parent: string, requestBody: Tenant): Observable<Tenant> {
			return this.http.post<Tenant>(this.baseUri + 'v4/' + (parent == null ? '' : encodeURIComponent(parent)) + '/tenants', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Completes the specified prefix with keyword suggestions. Intended for use by a job search auto-complete search box.
		 * Get v4/{tenant}:completeQuery
		 * @param {string} tenant Required. Resource name of tenant the completion is performed within. The format is "projects/{project_id}/tenants/{tenant_id}", for example, "projects/foo/tenants/bar".
		 * @param {string} company If provided, restricts completion to specified company. The format is "projects/{project_id}/tenants/{tenant_id}/companies/{company_id}", for example, "projects/foo/tenants/bar/companies/baz".
		 * @param {Array<string>} languageCodes The list of languages of the query. This is the BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47). The maximum number of allowed characters is 255.
		 * @param {number} pageSize Required. Completion result count. The maximum allowed page size is 10.
		 * @param {string} query Required. The query used to generate suggestions. The maximum number of allowed characters is 255.
		 * @param {Jobs_projects_tenants_completeQueryScope} scope The scope of the completion. The defaults is CompletionScope.PUBLIC.
		 * @param {CompletionResultType} type The completion topic. The default is CompletionType.COMBINED.
		 * @return {CompleteQueryResponse} Successful response
		 */
		Jobs_projects_tenants_completeQuery(tenant: string, company: string | null | undefined, languageCodes: Array<string> | null | undefined, pageSize: number | null | undefined, query: string | null | undefined, scope: Jobs_projects_tenants_completeQueryScope | null | undefined, type: CompletionResultType | null | undefined): Observable<CompleteQueryResponse> {
			return this.http.get<CompleteQueryResponse>(this.baseUri + 'v4/' + (tenant == null ? '' : encodeURIComponent(tenant)) + ':completeQuery&company=' + (company == null ? '' : encodeURIComponent(company)) + '&' + languageCodes?.map(z => `languageCodes=${encodeURIComponent(z)}`).join('&') + '&pageSize=' + pageSize + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&scope=' + scope + '&type=' + type, {});
		}
	}

	export enum Jobs_projects_tenants_completeQueryScope { COMPLETION_SCOPE_UNSPECIFIED = 'COMPLETION_SCOPE_UNSPECIFIED', TENANT = 'TENANT', PUBLIC = 'PUBLIC' }

}

