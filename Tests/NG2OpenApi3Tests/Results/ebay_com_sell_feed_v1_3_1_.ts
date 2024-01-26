import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateInventoryTaskRequest {

		/** The feed type associated with the inventory task you are about to create. Use a <strong>feedType</strong> that is available for your API. Presently, only one feed type is available:<ul><li><code>LMS_ACTIVE_INVENTORY_REPORT</code></li></ul><br/>See <a href="/api-docs/sell/static/feed/lms-feeds-quick-reference.html#merchant-data-reports-download-feed-types" target="_blank">Report download feed types</a> for more information. */
		feedType?: string | null;

		/** The container for the filter fields. This container is used to set the filter criteria for the order report. A seller can retrieve listings for a specified format. */
		filterCriteria?: InventoryFilterCriteria;

		/** The schemaVersion/version number of the file format (use the schema version of the API to which you are programming):<ul><li><a href="/api-docs/sell/static/feed/lms-feeds-quick-reference.html#Version" target="_blank">Version Details / Schema Version</a></li><li><a href="/api-docs/sell/static/feed/fx-feeds-quick-reference.html#schema" target="_blank">Seller Hub feed schema version</a></li></ul> */
		schemaVersion?: string | null;
	}
	export interface CreateInventoryTaskRequestFormProperties {

		/** The feed type associated with the inventory task you are about to create. Use a <strong>feedType</strong> that is available for your API. Presently, only one feed type is available:<ul><li><code>LMS_ACTIVE_INVENTORY_REPORT</code></li></ul><br/>See <a href="/api-docs/sell/static/feed/lms-feeds-quick-reference.html#merchant-data-reports-download-feed-types" target="_blank">Report download feed types</a> for more information. */
		feedType: FormControl<string | null | undefined>,

		/** The schemaVersion/version number of the file format (use the schema version of the API to which you are programming):<ul><li><a href="/api-docs/sell/static/feed/lms-feeds-quick-reference.html#Version" target="_blank">Version Details / Schema Version</a></li><li><a href="/api-docs/sell/static/feed/fx-feeds-quick-reference.html#schema" target="_blank">Seller Hub feed schema version</a></li></ul> */
		schemaVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateInventoryTaskRequestFormGroup() {
		return new FormGroup<CreateInventoryTaskRequestFormProperties>({
			feedType: new FormControl<string | null | undefined>(undefined),
			schemaVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The container for the filter fields. This container is used to set the filter criteria for the order report. A seller can retrieve listings for a specified format. */
	export interface InventoryFilterCriteria {

		/** The type of buying option for the order. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:ListingFormatEnum'>eBay API documentation</a> */
		listingFormat?: string | null;
	}

	/** The container for the filter fields. This container is used to set the filter criteria for the order report. A seller can retrieve listings for a specified format. */
	export interface InventoryFilterCriteriaFormProperties {

		/** The type of buying option for the order. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:ListingFormatEnum'>eBay API documentation</a> */
		listingFormat: FormControl<string | null | undefined>,
	}
	export function CreateInventoryFilterCriteriaFormGroup() {
		return new FormGroup<InventoryFilterCriteriaFormProperties>({
			listingFormat: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The type that defines the fields for the <b> createOrderTask</b> request. */
	export interface CreateOrderTaskRequest {

		/** The feed type associated with the task. The only presently supported value is <code>LMS_ORDER_REPORT</code>. See <a href="/api-docs/sell/static/feed/lms-feeds-quick-reference.html#merchant-data-reports-download-feed-types" target="_blank">Report download feed types</a> for more information. */
		feedType?: string | null;

		/** The type that defines the fields for the order filters. */
		filterCriteria?: OrderFilterCriteria;

		/** The schema version of the LMS OrderReport. For the <code>LMS_ORDER_REPORT</code> feed type, see the <a href="/devzone/merchant-data/CallRef/OrderReport.html#OrderReport">OrderReport</a> reference page to see the present schema version. The <b> schemaVersion</b> value is the version number shown at the top of the <b> OrderReport</b> page. <br /><br /><b>Restriction: </b> This value must be 1113 or higher. The OrderReport schema version is updated about every two weeks. All version numbers are odd numbers (even numbers are skipped). For example, the next release version after '1113' is '1115'. */
		schemaVersion?: string | null;
	}

	/** The type that defines the fields for the <b> createOrderTask</b> request. */
	export interface CreateOrderTaskRequestFormProperties {

		/** The feed type associated with the task. The only presently supported value is <code>LMS_ORDER_REPORT</code>. See <a href="/api-docs/sell/static/feed/lms-feeds-quick-reference.html#merchant-data-reports-download-feed-types" target="_blank">Report download feed types</a> for more information. */
		feedType: FormControl<string | null | undefined>,

		/** The schema version of the LMS OrderReport. For the <code>LMS_ORDER_REPORT</code> feed type, see the <a href="/devzone/merchant-data/CallRef/OrderReport.html#OrderReport">OrderReport</a> reference page to see the present schema version. The <b> schemaVersion</b> value is the version number shown at the top of the <b> OrderReport</b> page. <br /><br /><b>Restriction: </b> This value must be 1113 or higher. The OrderReport schema version is updated about every two weeks. All version numbers are odd numbers (even numbers are skipped). For example, the next release version after '1113' is '1115'. */
		schemaVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateOrderTaskRequestFormGroup() {
		return new FormGroup<CreateOrderTaskRequestFormProperties>({
			feedType: new FormControl<string | null | undefined>(undefined),
			schemaVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The type that defines the fields for the order filters. */
	export interface OrderFilterCriteria {

		/** The type that defines the fields for a date range. */
		creationDateRange?: DateRange;

		/** The type that defines the fields for a date range. */
		modifiedDateRange?: DateRange;

		/** The order status of the orders returned. If the filter is omitted from createOrderTask call, orders that are in both <code>ACTIVE </code>and<code> COMPLETED</code> states are returned. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:OrderStatusEnum'>eBay API documentation</a> */
		orderStatus?: string | null;
	}

	/** The type that defines the fields for the order filters. */
	export interface OrderFilterCriteriaFormProperties {

		/** The order status of the orders returned. If the filter is omitted from createOrderTask call, orders that are in both <code>ACTIVE </code>and<code> COMPLETED</code> states are returned. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:OrderStatusEnum'>eBay API documentation</a> */
		orderStatus: FormControl<string | null | undefined>,
	}
	export function CreateOrderFilterCriteriaFormGroup() {
		return new FormGroup<OrderFilterCriteriaFormProperties>({
			orderStatus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The type that defines the fields for a date range. */
	export interface DateRange {

		/** The beginning date in the range. If the parent type is included, both the <strong>from</strong> and/or the <strong>to</strong> fields become conditionally required.<br /><br /><b>Format: </b>UTC <code>yyyy-MM-ddThh:mm:ss.SSSZ </code> <br /><br /> <b> For example: </b> Tasks within a range  <br /> <code>yyyy-MM-ddThh:mm:ss.SSSZ..yyyy-MM-ddThh:mm:ss.SSSZ </code> <br /><br /> Tasks created on March 31, 2021  <br /><code>2021-03-31T00:00:00.000Z..2021-03-31T00:00:00.000Z</code> */
		from?: string | null;

		/** The end date for the date range, which is inclusive. If the parent type is included, both the <strong>from</strong> and/or the <strong>to</strong> fields become conditionally required.  <br /><br /> <b> For example: </b> <br /><br />Tasks within a range  <br /> <code>yyyy-MM-ddThh:mm:ss.SSSZ..yyyy-MM-ddThh:mm:ss.SSSZ </code> <br /><br /> Tasks created on March 31, 2021 <br /> <code>2021-03-31T00:00:00.000Z..2021-03-31T00:00:00.000Z</code> */
		to?: string | null;
	}

	/** The type that defines the fields for a date range. */
	export interface DateRangeFormProperties {

		/** The beginning date in the range. If the parent type is included, both the <strong>from</strong> and/or the <strong>to</strong> fields become conditionally required.<br /><br /><b>Format: </b>UTC <code>yyyy-MM-ddThh:mm:ss.SSSZ </code> <br /><br /> <b> For example: </b> Tasks within a range  <br /> <code>yyyy-MM-ddThh:mm:ss.SSSZ..yyyy-MM-ddThh:mm:ss.SSSZ </code> <br /><br /> Tasks created on March 31, 2021  <br /><code>2021-03-31T00:00:00.000Z..2021-03-31T00:00:00.000Z</code> */
		from: FormControl<string | null | undefined>,

		/** The end date for the date range, which is inclusive. If the parent type is included, both the <strong>from</strong> and/or the <strong>to</strong> fields become conditionally required.  <br /><br /> <b> For example: </b> <br /><br />Tasks within a range  <br /> <code>yyyy-MM-ddThh:mm:ss.SSSZ..yyyy-MM-ddThh:mm:ss.SSSZ </code> <br /><br /> Tasks created on March 31, 2021 <br /> <code>2021-03-31T00:00:00.000Z..2021-03-31T00:00:00.000Z</code> */
		to: FormControl<string | null | undefined>,
	}
	export function CreateDateRangeFormGroup() {
		return new FormGroup<DateRangeFormProperties>({
			from: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The type that defines the fields for the Customer Service Metric reports generated with the Feed API. */
	export interface CreateServiceMetricsTaskRequest {

		/** The <strong>feedType</strong> specified for the task. The report lists the transaction details that contribute to the service metrics evaluation. Supported types include:<p><code>CUSTOMER_SERVICE_METRICS_REPORT</code></p> */
		feedType?: string | null;

		/** A complex data type that filters data for report creation. See <strong>CustomerServiceMetricsFilterCriteria</strong> for fields and descriptions. */
		filterCriteria?: CustomerServiceMetricsFilterCriteria;

		/** The version number of the file format. <p><b>Valid value: </b><code>1.0</code><p> */
		schemaVersion?: string | null;
	}

	/** The type that defines the fields for the Customer Service Metric reports generated with the Feed API. */
	export interface CreateServiceMetricsTaskRequestFormProperties {

		/** The <strong>feedType</strong> specified for the task. The report lists the transaction details that contribute to the service metrics evaluation. Supported types include:<p><code>CUSTOMER_SERVICE_METRICS_REPORT</code></p> */
		feedType: FormControl<string | null | undefined>,

		/** The version number of the file format. <p><b>Valid value: </b><code>1.0</code><p> */
		schemaVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateServiceMetricsTaskRequestFormGroup() {
		return new FormGroup<CreateServiceMetricsTaskRequestFormProperties>({
			feedType: new FormControl<string | null | undefined>(undefined),
			schemaVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex data type that filters data for report creation. See <strong>CustomerServiceMetricsFilterCriteria</strong> for fields and descriptions. */
	export interface CustomerServiceMetricsFilterCriteria {

		/** An enumeration value that specifies the customer service metric that eBay tracks to measure seller performance. See <strong>CustomerServiceMetricTypeEnum</strong> for values. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:CustomerServiceMetricTypeEnum'>eBay API documentation</a> */
		customerServiceMetricType?: string | null;

		/** An enumeration value that specifies the eBay marketplace where the evaluation occurs. See <strong>MarketplaceIdEnum</strong> for values. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/bas:MarketplaceIdEnum'>eBay API documentation</a> */
		evaluationMarketplaceId?: string | null;

		/** A list of listing category IDs on which the service metric is measured. A seller can use one or more L1 (top-level) eBay categories to get metrics specific to those L1 categories. The Category IDs for each L1 category are required. Category ID values for L1 categories can be retrieved using the Taxonomy API.<p> <span class="tablenote"><strong>Note: </strong>Pass this attribute to narrow down your filter results for the <code>ITEM_NOT_AS_DESCRIBED</code> customerServiceMetricType.</span></p> <p>Supported categories include:</p><p><code>primary(L1) category Id</code></p> */
		listingCategories?: Array<string>;

		/** A list of shipping region enumeration values on which the service metric is measured. This comma delimited array allows the seller to customize the report to focus on domestic or international shipping. <p> <span class="tablenote"><strong>Note: </strong>Pass this attribute to narrow down your filter results for the <code>ITEM_NOT_RECEIVED</code> customerServiceMetricType.</span></p> <p>Supported categories include:</p><p><code>primary(L1) category Id</code></p>See <strong>ShippingRegionTypeEnum</strong> for values */
		shippingRegions?: Array<string>;
	}

	/** A complex data type that filters data for report creation. See <strong>CustomerServiceMetricsFilterCriteria</strong> for fields and descriptions. */
	export interface CustomerServiceMetricsFilterCriteriaFormProperties {

		/** An enumeration value that specifies the customer service metric that eBay tracks to measure seller performance. See <strong>CustomerServiceMetricTypeEnum</strong> for values. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:CustomerServiceMetricTypeEnum'>eBay API documentation</a> */
		customerServiceMetricType: FormControl<string | null | undefined>,

		/** An enumeration value that specifies the eBay marketplace where the evaluation occurs. See <strong>MarketplaceIdEnum</strong> for values. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/bas:MarketplaceIdEnum'>eBay API documentation</a> */
		evaluationMarketplaceId: FormControl<string | null | undefined>,
	}
	export function CreateCustomerServiceMetricsFilterCriteriaFormGroup() {
		return new FormGroup<CustomerServiceMetricsFilterCriteriaFormProperties>({
			customerServiceMetricType: new FormControl<string | null | undefined>(undefined),
			evaluationMarketplaceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The type that defines the fields for the <b> createTask</b> method. */
	export interface CreateTaskRequest {

		/** The feed type associated with the task. Only use a <strong>feedType</strong> that is available for your API. Available feed types:<ul><li><a href="/api-docs/sell/static/feed/lms-feeds-quick-reference.html#trading-upload-feed-types" target="_blank">Inventory upload feed types</a></li><li><a href="/api-docs/sell/static/feed/lms-feeds-quick-reference.html#merchant-data-upload-feed-types" target="_blank">Fulfillment upload feed types</a></li><li><a href="/api-docs/sell/static/feed/fx-feeds-quick-reference.html#availabl" target="_blank">Seller Hub feed types</a></li></ul> */
		feedType?: string | null;

		/** The schemaVersion/version number of the file format (use the schema version of the API to which you are programming):<ul><li><a href="/api-docs/sell/static/feed/lms-feeds-quick-reference.html#Version" target="_blank">Version Details / Schema Version</a></li><li><a href="/api-docs/sell/static/feed/fx-feeds-quick-reference.html#schema" target="_blank">Seller Hub feed schema version</a></li></ul> */
		schemaVersion?: string | null;
	}

	/** The type that defines the fields for the <b> createTask</b> method. */
	export interface CreateTaskRequestFormProperties {

		/** The feed type associated with the task. Only use a <strong>feedType</strong> that is available for your API. Available feed types:<ul><li><a href="/api-docs/sell/static/feed/lms-feeds-quick-reference.html#trading-upload-feed-types" target="_blank">Inventory upload feed types</a></li><li><a href="/api-docs/sell/static/feed/lms-feeds-quick-reference.html#merchant-data-upload-feed-types" target="_blank">Fulfillment upload feed types</a></li><li><a href="/api-docs/sell/static/feed/fx-feeds-quick-reference.html#availabl" target="_blank">Seller Hub feed types</a></li></ul> */
		feedType: FormControl<string | null | undefined>,

		/** The schemaVersion/version number of the file format (use the schema version of the API to which you are programming):<ul><li><a href="/api-docs/sell/static/feed/lms-feeds-quick-reference.html#Version" target="_blank">Version Details / Schema Version</a></li><li><a href="/api-docs/sell/static/feed/fx-feeds-quick-reference.html#schema" target="_blank">Seller Hub feed schema version</a></li></ul> */
		schemaVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateTaskRequestFormGroup() {
		return new FormGroup<CreateTaskRequestFormProperties>({
			feedType: new FormControl<string | null | undefined>(undefined),
			schemaVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The type that defines the fields for the <strong>createSchedule</strong> method. */
	export interface CreateUserScheduleRequest {

		/** The name of the feed type for the created schedule. Match the <strong>feed_type</strong> from the schedule template associated with this schedule. */
		feedType?: string | null;

		/** The preferred day of the month to trigger the schedule. This field can be used with <strong>preferredTriggerHour</strong> for monthly schedules. The last day of the month is used for numbers larger than the actual number of days in the month. <br /><br />This field is available as specified by the template (<strong>scheduleTemplateId</strong>). The template can specify this field as optional or required, and optionally provides a default value.<br /><br /><b>Minimum: </b>1<br /><br /><b>Maximum: </b>31 */
		preferredTriggerDayOfMonth?: number | null;

		/** The preferred day of the week to trigger the schedule. This field can be used with <strong>preferredTriggerHour</strong> for weekly schedules. <br /><br />This field is available as specified by the template (<strong>scheduleTemplateId</strong>). The template can specify this field as optional or required, and optionally provides a default value. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:DayOfWeekEnum'>eBay API documentation</a> */
		preferredTriggerDayOfWeek?: string | null;

		/** The preferred two-digit hour of the day to trigger the schedule. <br /><br />This field is available as specified by the template (<strong>scheduleTemplateId</strong>). The template can specify this field as optional or required, and optionally provides a default value.<br /><br /><b>Format:</b> UTC <code>hhZ</code><br /><br />For example, the following represents 11:00 am UTC:<code> 11Z</code> */
		preferredTriggerHour?: string | null;

		/** The timestamp on which the report generation (subscription) ends. After this date, the schedule status becomes <code>INACTIVE</code>. <br /><br />Use this field, if available, to end the schedule in the future. This value must be later than <strong>scheduleStartDate</strong> (if supplied). This field is available as specified by the template (<strong>scheduleTemplateId</strong>). The template can specify this field as optional or required, and optionally provides a default value.<br /><br /><b>Format:</b> UTC <code>yyyy-MM-dd<strong>T</strong>HH<strong>Z</strong></code><br /><br />For example, the following represents UTC October 10, 2021 at 10:00 AM:<br /><code>2021-10-10T10Z</code> */
		scheduleEndDate?: string | null;

		/** The schedule name assigned by the user for the created schedule. */
		scheduleName?: string | null;

		/** The timestamp to start generating the report. After this timestamp, the schedule status becomes active until either the <strong>scheduleEndDate</strong> occurs or the <strong>scheduleTemplateId</strong> becomes inactive. <br /><br />Use this field, if available, to start the schedule in the future but before the <strong>scheduleEndDate</strong> (if supplied). This field is available as specified by the template <strong>(scheduleTemplateId)</strong>.  The template can specify this field as optional or required, and optionally provides a default value.<br /><br /><b>Format:</b> UTC <code>yyyy-MM-dd<strong>T</strong>HH<strong>Z</strong></code><br /><br />For example, the following represents a schedule start date of UTC October 01, 2020 at 12:00 PM:<br /><code> 2020-01-01T12Z</code> */
		scheduleStartDate?: string | null;

		/** The ID of the template associated with the schedule ID. You can get this ID from the documentation or by calling the <strong>getScheduleTemplates</strong> method. This method requires a schedule template ID that is <code>ACTIVE</code>. */
		scheduleTemplateId?: string | null;

		/** The schema version of the schedule feedType. This field is required if the <strong>feedType</strong> has a schema version.<br /><br />This field is available as specified by the template (<strong>scheduleTemplateId</strong>). The template can specify this field as optional or required, and optionally provides a default value. */
		schemaVersion?: string | null;
	}

	/** The type that defines the fields for the <strong>createSchedule</strong> method. */
	export interface CreateUserScheduleRequestFormProperties {

		/** The name of the feed type for the created schedule. Match the <strong>feed_type</strong> from the schedule template associated with this schedule. */
		feedType: FormControl<string | null | undefined>,

		/** The preferred day of the month to trigger the schedule. This field can be used with <strong>preferredTriggerHour</strong> for monthly schedules. The last day of the month is used for numbers larger than the actual number of days in the month. <br /><br />This field is available as specified by the template (<strong>scheduleTemplateId</strong>). The template can specify this field as optional or required, and optionally provides a default value.<br /><br /><b>Minimum: </b>1<br /><br /><b>Maximum: </b>31 */
		preferredTriggerDayOfMonth: FormControl<number | null | undefined>,

		/** The preferred day of the week to trigger the schedule. This field can be used with <strong>preferredTriggerHour</strong> for weekly schedules. <br /><br />This field is available as specified by the template (<strong>scheduleTemplateId</strong>). The template can specify this field as optional or required, and optionally provides a default value. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:DayOfWeekEnum'>eBay API documentation</a> */
		preferredTriggerDayOfWeek: FormControl<string | null | undefined>,

		/** The preferred two-digit hour of the day to trigger the schedule. <br /><br />This field is available as specified by the template (<strong>scheduleTemplateId</strong>). The template can specify this field as optional or required, and optionally provides a default value.<br /><br /><b>Format:</b> UTC <code>hhZ</code><br /><br />For example, the following represents 11:00 am UTC:<code> 11Z</code> */
		preferredTriggerHour: FormControl<string | null | undefined>,

		/** The timestamp on which the report generation (subscription) ends. After this date, the schedule status becomes <code>INACTIVE</code>. <br /><br />Use this field, if available, to end the schedule in the future. This value must be later than <strong>scheduleStartDate</strong> (if supplied). This field is available as specified by the template (<strong>scheduleTemplateId</strong>). The template can specify this field as optional or required, and optionally provides a default value.<br /><br /><b>Format:</b> UTC <code>yyyy-MM-dd<strong>T</strong>HH<strong>Z</strong></code><br /><br />For example, the following represents UTC October 10, 2021 at 10:00 AM:<br /><code>2021-10-10T10Z</code> */
		scheduleEndDate: FormControl<string | null | undefined>,

		/** The schedule name assigned by the user for the created schedule. */
		scheduleName: FormControl<string | null | undefined>,

		/** The timestamp to start generating the report. After this timestamp, the schedule status becomes active until either the <strong>scheduleEndDate</strong> occurs or the <strong>scheduleTemplateId</strong> becomes inactive. <br /><br />Use this field, if available, to start the schedule in the future but before the <strong>scheduleEndDate</strong> (if supplied). This field is available as specified by the template <strong>(scheduleTemplateId)</strong>.  The template can specify this field as optional or required, and optionally provides a default value.<br /><br /><b>Format:</b> UTC <code>yyyy-MM-dd<strong>T</strong>HH<strong>Z</strong></code><br /><br />For example, the following represents a schedule start date of UTC October 01, 2020 at 12:00 PM:<br /><code> 2020-01-01T12Z</code> */
		scheduleStartDate: FormControl<string | null | undefined>,

		/** The ID of the template associated with the schedule ID. You can get this ID from the documentation or by calling the <strong>getScheduleTemplates</strong> method. This method requires a schedule template ID that is <code>ACTIVE</code>. */
		scheduleTemplateId: FormControl<string | null | undefined>,

		/** The schema version of the schedule feedType. This field is required if the <strong>feedType</strong> has a schema version.<br /><br />This field is available as specified by the template (<strong>scheduleTemplateId</strong>). The template can specify this field as optional or required, and optionally provides a default value. */
		schemaVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserScheduleRequestFormGroup() {
		return new FormGroup<CreateUserScheduleRequestFormProperties>({
			feedType: new FormControl<string | null | undefined>(undefined),
			preferredTriggerDayOfMonth: new FormControl<number | null | undefined>(undefined),
			preferredTriggerDayOfWeek: new FormControl<string | null | undefined>(undefined),
			preferredTriggerHour: new FormControl<string | null | undefined>(undefined),
			scheduleEndDate: new FormControl<string | null | undefined>(undefined),
			scheduleName: new FormControl<string | null | undefined>(undefined),
			scheduleStartDate: new FormControl<string | null | undefined>(undefined),
			scheduleTemplateId: new FormControl<string | null | undefined>(undefined),
			schemaVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomerServiceMetricTaskCollection {

		/** The URI of the current page of results. */
		href?: string | null;

		/** The value of the <strong>limit</strong> parameter submitted in the request, which is the maximum number of tasks to return per page, from the result set. A result set is the complete set of tasks returned by the method. <p> <span class="tablenote"><strong>Note:</strong> Even though this parameter is not required to be submitted in the request, the parameter defaults to 10 if omitted.</span></p><p> <span class="tablenote"><strong>Note:</strong> If this is the last or only page of the result set, the page may contain fewer tasks than the limit value. To determine the number of pages in a result set, divide the total value (total number of tasks matching input criteria) by this limit value, and then round up to the next integer. For example, if the <strong>total</strong> value was <code>120</code> (120 total tasks) and the <strong>limit</strong> value was <code>50</code> (show 50 tasks per page), the total number of pages in the result set is three, so the seller would have to make three separate <strong>getCustomerServiceMetricTasks</strong> calls to view all tasks matching the input criteria.</span></p> */
		limit?: number | null;

		/** The relative path to the call URI for the next page of results. This value is returned if there is an additional page of results to return from the result set. */
		next?: string | null;

		/** The number of results skipped in the result set before returning the first result. This value can be set in the request with the <b>offset</b> query parameter. <p class="tablenote"><strong>Note: </strong>The items in a paginated result set use a zero-based list where the first item in the list has an offset of <code>0</code>.</p> */
		offset?: number | null;

		/** The URI for the previous page of results. This parameter is returned if a previous page of results from the result set exists. */
		prev?: string | null;

		/** An array of the customer service tasks on this page. The tasks are sorted by creation date. An empty array is returned if the filter criteria excludes all tasks. */
		tasks?: Array<ServiceMetricsTask>;

		/** The total number of tasks that match the criteria. */
		total?: number | null;
	}
	export interface CustomerServiceMetricTaskCollectionFormProperties {

		/** The URI of the current page of results. */
		href: FormControl<string | null | undefined>,

		/** The value of the <strong>limit</strong> parameter submitted in the request, which is the maximum number of tasks to return per page, from the result set. A result set is the complete set of tasks returned by the method. <p> <span class="tablenote"><strong>Note:</strong> Even though this parameter is not required to be submitted in the request, the parameter defaults to 10 if omitted.</span></p><p> <span class="tablenote"><strong>Note:</strong> If this is the last or only page of the result set, the page may contain fewer tasks than the limit value. To determine the number of pages in a result set, divide the total value (total number of tasks matching input criteria) by this limit value, and then round up to the next integer. For example, if the <strong>total</strong> value was <code>120</code> (120 total tasks) and the <strong>limit</strong> value was <code>50</code> (show 50 tasks per page), the total number of pages in the result set is three, so the seller would have to make three separate <strong>getCustomerServiceMetricTasks</strong> calls to view all tasks matching the input criteria.</span></p> */
		limit: FormControl<number | null | undefined>,

		/** The relative path to the call URI for the next page of results. This value is returned if there is an additional page of results to return from the result set. */
		next: FormControl<string | null | undefined>,

		/** The number of results skipped in the result set before returning the first result. This value can be set in the request with the <b>offset</b> query parameter. <p class="tablenote"><strong>Note: </strong>The items in a paginated result set use a zero-based list where the first item in the list has an offset of <code>0</code>.</p> */
		offset: FormControl<number | null | undefined>,

		/** The URI for the previous page of results. This parameter is returned if a previous page of results from the result set exists. */
		prev: FormControl<string | null | undefined>,

		/** The total number of tasks that match the criteria. */
		total: FormControl<number | null | undefined>,
	}
	export function CreateCustomerServiceMetricTaskCollectionFormGroup() {
		return new FormGroup<CustomerServiceMetricTaskCollectionFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			prev: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ServiceMetricsTask {

		/** The timestamp when the customer service metrics task went into the <code>COMPLETED</code> or <code>COMPLETED_WITH_ERROR</code> state. This field is only returned if the status is one of the two completed values. This state means that eBay has compiled the report for the seller based on the seller’s filter criteria, and the seller can run a <strong>getResultFile</strong> call to download the report. */
		completionDate?: string | null;

		/** The date the customer service metrics task was created. */
		creationDate?: string | null;

		/** The relative <strong>getCustomerServiceMetricTask</strong> call URI path to retrieve the corresponding task. */
		detailHref?: string | null;

		/** The feed type associated with the task. */
		feedType?: string | null;

		/** A complex data type that filters data for report creation. See <strong>CustomerServiceMetricsFilterCriteria</strong> for fields and descriptions. */
		filterCriteria?: CustomerServiceMetricsFilterCriteria;

		/** The schema version number of the file format. If omitted, the default value is used. <p><b>Default value: </b><code>1.0</code><p> */
		schemaVersion?: string | null;

		/** An enumeration value that indicates the state of the task. See <strong>FeedStatusEnum</strong> for values. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:FeedStatusEnum'>eBay API documentation</a> */
		status?: string | null;

		/** The unique eBay-assigned ID of the task. */
		taskId?: string | null;
	}
	export interface ServiceMetricsTaskFormProperties {

		/** The timestamp when the customer service metrics task went into the <code>COMPLETED</code> or <code>COMPLETED_WITH_ERROR</code> state. This field is only returned if the status is one of the two completed values. This state means that eBay has compiled the report for the seller based on the seller’s filter criteria, and the seller can run a <strong>getResultFile</strong> call to download the report. */
		completionDate: FormControl<string | null | undefined>,

		/** The date the customer service metrics task was created. */
		creationDate: FormControl<string | null | undefined>,

		/** The relative <strong>getCustomerServiceMetricTask</strong> call URI path to retrieve the corresponding task. */
		detailHref: FormControl<string | null | undefined>,

		/** The feed type associated with the task. */
		feedType: FormControl<string | null | undefined>,

		/** The schema version number of the file format. If omitted, the default value is used. <p><b>Default value: </b><code>1.0</code><p> */
		schemaVersion: FormControl<string | null | undefined>,

		/** An enumeration value that indicates the state of the task. See <strong>FeedStatusEnum</strong> for values. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:FeedStatusEnum'>eBay API documentation</a> */
		status: FormControl<string | null | undefined>,

		/** The unique eBay-assigned ID of the task. */
		taskId: FormControl<string | null | undefined>,
	}
	export function CreateServiceMetricsTaskFormGroup() {
		return new FormGroup<ServiceMetricsTaskFormProperties>({
			completionDate: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<string | null | undefined>(undefined),
			detailHref: new FormControl<string | null | undefined>(undefined),
			feedType: new FormControl<string | null | undefined>(undefined),
			schemaVersion: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			taskId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type defines the fields that can be returned in an error. */
	export interface Error {

		/** Identifies the type of erro. */
		category?: string | null;

		/** Name for the primary system where the error occurred. This is relevant for application errors. */
		domain?: string | null;

		/** A unique number to identify the error. */
		errorId?: number | null;

		/** An array of request elements most closely associated to the error. */
		inputRefIds?: Array<string>;

		/** A more detailed explanation of the error. */
		longMessage?: string | null;

		/** Information on how to correct the problem, in the end user's terms and language where applicable. */
		message?: string | null;

		/** An array of request elements most closely associated to the error. */
		outputRefIds?: Array<string>;

		/** An array of name/value pairs that describe details the error condition. These are useful when multiple errors are returned. */
		parameters?: Array<ErrorParameter>;

		/** Further helps indicate which subsystem the error is coming from. System subcategories include: Initialization, Serialization, Security, Monitoring, Rate Limiting, etc. */
		subdomain?: string | null;
	}

	/** This type defines the fields that can be returned in an error. */
	export interface ErrorFormProperties {

		/** Identifies the type of erro. */
		category: FormControl<string | null | undefined>,

		/** Name for the primary system where the error occurred. This is relevant for application errors. */
		domain: FormControl<string | null | undefined>,

		/** A unique number to identify the error. */
		errorId: FormControl<number | null | undefined>,

		/** A more detailed explanation of the error. */
		longMessage: FormControl<string | null | undefined>,

		/** Information on how to correct the problem, in the end user's terms and language where applicable. */
		message: FormControl<string | null | undefined>,

		/** Further helps indicate which subsystem the error is coming from. System subcategories include: Initialization, Serialization, Security, Monitoring, Rate Limiting, etc. */
		subdomain: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined),
			errorId: new FormControl<number | null | undefined>(undefined),
			longMessage: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			subdomain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorParameter {

		/** The object of the error. */
		name?: string | null;

		/** The value of the object. */
		value?: string | null;
	}
	export interface ErrorParameterFormProperties {

		/** The object of the error. */
		name: FormControl<string | null | undefined>,

		/** The value of the object. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateErrorParameterFormGroup() {
		return new FormGroup<ErrorParameterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The metadata for the file. */
	export interface FormDataContentDisposition {

		/** The file creation date. <br /><br /><b> Format: </b> UTC <code>yyyy-MM-ddThh:mm:ss.SSSZ</code><p><b>For example:</b><p>Created on September 8, 2019</p><p><code>2019-09-08T00:00:00.000Z</code></p> */
		creationDate?: string | null;

		/** The name of the file including its extension (for example, xml or csv) to be uploaded. */
		fileName?: string | null;

		/** The file modified date. <br /><br /><b> Format: </b> UTC <code>yyyy-MM-ddThh:mm:ss.SSSZ</code><p><b>For example:</b><p>Created on September 9, 2019</p><p><code>2019-09-09T00:00:00.000Z</code></p> */
		modificationDate?: string | null;

		/** A content identifier. The only presently supported name is <code>file</code>. */
		name?: string | null;

		/** The parameters you want associated with the file. */
		parameters?: {[id: string]: string };

		/** The date you read the file. <br /><br /><b> Format: </b> UTC <code>yyyy-MM-ddThh:mm:ss.SSSZ</code><p><b>For example:</b><p>Created on September 10, 2019</p><p><code>2019-09-10T00:00:00.000Z</code></p> */
		readDate?: string | null;

		/** The size of the file. */
		size?: number | null;

		/** The file type. The only presently supported type is <code>form-data</code>. */
		type?: string | null;
	}

	/** The metadata for the file. */
	export interface FormDataContentDispositionFormProperties {

		/** The file creation date. <br /><br /><b> Format: </b> UTC <code>yyyy-MM-ddThh:mm:ss.SSSZ</code><p><b>For example:</b><p>Created on September 8, 2019</p><p><code>2019-09-08T00:00:00.000Z</code></p> */
		creationDate: FormControl<string | null | undefined>,

		/** The name of the file including its extension (for example, xml or csv) to be uploaded. */
		fileName: FormControl<string | null | undefined>,

		/** The file modified date. <br /><br /><b> Format: </b> UTC <code>yyyy-MM-ddThh:mm:ss.SSSZ</code><p><b>For example:</b><p>Created on September 9, 2019</p><p><code>2019-09-09T00:00:00.000Z</code></p> */
		modificationDate: FormControl<string | null | undefined>,

		/** A content identifier. The only presently supported name is <code>file</code>. */
		name: FormControl<string | null | undefined>,

		/** The parameters you want associated with the file. */
		parameters: FormControl<{[id: string]: string } | null | undefined>,

		/** The date you read the file. <br /><br /><b> Format: </b> UTC <code>yyyy-MM-ddThh:mm:ss.SSSZ</code><p><b>For example:</b><p>Created on September 10, 2019</p><p><code>2019-09-10T00:00:00.000Z</code></p> */
		readDate: FormControl<string | null | undefined>,

		/** The size of the file. */
		size: FormControl<number | null | undefined>,

		/** The file type. The only presently supported type is <code>form-data</code>. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateFormDataContentDispositionFormGroup() {
		return new FormGroup<FormDataContentDispositionFormProperties>({
			creationDate: new FormControl<string | null | undefined>(undefined),
			fileName: new FormControl<string | null | undefined>(undefined),
			modificationDate: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			readDate: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InventoryTask {

		/** The timestamp when the task <strong>status</strong> went into the <code>COMPLETED</code>, <code>COMPLETED_WITH_ERROR</code>, or <code>PARTIALLY_PROCESSED</code> state. This field is only returned if the status is one of the three completed values. */
		completionDate?: string | null;

		/** The date the task was created. */
		creationDate?: string | null;

		/** The path to the call URI used to retrieve the task. This field points to the <strong>getInventoryTask</strong> URI. */
		detailHref?: string | null;

		/** The feed type associated with the inventory task. */
		feedType?: string | null;

		/** The container for the filter fields. This container is used to set the filter criteria for the order report. A seller can retrieve listings for a specified format. */
		filterCriteria?: InventoryFilterCriteria;

		/** The schema version number associated with the task. */
		schemaVersion?: string | null;

		/** The status of the task. Users must wait until status is complete before moving on to the next step (such as uploading/downloading a file). For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:FeedStatusEnum'>eBay API documentation</a> */
		status?: string | null;

		/** The ID of the task. This ID is generated when the task was created by the <strong>createInventoryTask</strong> method. */
		taskId?: string | null;

		/** This container provides summary information on an upload feed (not applicable for download feed types). */
		uploadSummary?: UploadSummary;
	}
	export interface InventoryTaskFormProperties {

		/** The timestamp when the task <strong>status</strong> went into the <code>COMPLETED</code>, <code>COMPLETED_WITH_ERROR</code>, or <code>PARTIALLY_PROCESSED</code> state. This field is only returned if the status is one of the three completed values. */
		completionDate: FormControl<string | null | undefined>,

		/** The date the task was created. */
		creationDate: FormControl<string | null | undefined>,

		/** The path to the call URI used to retrieve the task. This field points to the <strong>getInventoryTask</strong> URI. */
		detailHref: FormControl<string | null | undefined>,

		/** The feed type associated with the inventory task. */
		feedType: FormControl<string | null | undefined>,

		/** The schema version number associated with the task. */
		schemaVersion: FormControl<string | null | undefined>,

		/** The status of the task. Users must wait until status is complete before moving on to the next step (such as uploading/downloading a file). For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:FeedStatusEnum'>eBay API documentation</a> */
		status: FormControl<string | null | undefined>,

		/** The ID of the task. This ID is generated when the task was created by the <strong>createInventoryTask</strong> method. */
		taskId: FormControl<string | null | undefined>,
	}
	export function CreateInventoryTaskFormGroup() {
		return new FormGroup<InventoryTaskFormProperties>({
			completionDate: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<string | null | undefined>(undefined),
			detailHref: new FormControl<string | null | undefined>(undefined),
			feedType: new FormControl<string | null | undefined>(undefined),
			schemaVersion: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			taskId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This container provides summary information on an upload feed (not applicable for download feed types). */
	export interface UploadSummary {

		/** The number of records, such as the number of listings created or the number of pictures uploaded to a listing, that failed to process during the upload feed. Check the response file and correct any issues mentioned. If the feed fails before processing, no response file is provided. In this case check the REST output response. */
		failureCount?: number | null;

		/** The number of records that were successfully processed during the upload feed. */
		successCount?: number | null;
	}

	/** This container provides summary information on an upload feed (not applicable for download feed types). */
	export interface UploadSummaryFormProperties {

		/** The number of records, such as the number of listings created or the number of pictures uploaded to a listing, that failed to process during the upload feed. Check the response file and correct any issues mentioned. If the feed fails before processing, no response file is provided. In this case check the REST output response. */
		failureCount: FormControl<number | null | undefined>,

		/** The number of records that were successfully processed during the upload feed. */
		successCount: FormControl<number | null | undefined>,
	}
	export function CreateUploadSummaryFormGroup() {
		return new FormGroup<UploadSummaryFormProperties>({
			failureCount: new FormControl<number | null | undefined>(undefined),
			successCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface InventoryTaskCollection {

		/** The path to the call URI that produced the current page of results. */
		href?: string | null;

		/** The value of the <strong>limit</strong> parameter submitted in the request, which is the maximum number of inventory tasks to return per page, from the result set. A result set is the complete set of tasks returned by the method.<br /><br /><span class="tablenote"><strong>Note:</strong> Though this parameter is not required to be submitted in the request, the parameter defaults to <code>10</code> if omitted. Additionally, if this is the last or only page of the result set, the page may contain fewer tasks than the <strong>limit</strong> value submitted in the request.</span><br /><br />To determine the number of pages in a result set, divide the total value (total number of tasks matching the input criteria) by this limit value, and then round up to the next integer. For example, if the <strong>total</strong> value was <code>120</code> (120 total tasks) and the <strong>limit</strong> value was <code>50</code> (show 50 tasks per page), the total number of pages in the result set is three, so the seller would have to make three separate <strong>getInventoryTasks</strong> calls to view all tasks matching the input criteria. */
		limit?: number | null;

		/** The path to the call URI for the next page of results. This value is returned if there is an additional page of results to return from the result set. */
		next?: string | null;

		/** The number of results skipped in the result set before listing the first returned result. This value can be specified in the request with the <strong>offset</strong> query parameter.<br /><br /><span class="tablenote"><strong>Note:</strong> The items in a paginated result set use a zero-based list, where the first item in the list has an offset of <code>0</code>.</span> */
		offset?: number | null;

		/** The path to the call URI for the previous page of results. This is returned if there is a previous page of results from the result set. */
		prev?: string | null;

		/** An array of the inventory tasks on this page. The tasks are sorted by creation date.<br /><br /><span class="tablenote"><strong>Note:</strong> An empty array is returned if the filter criteria excludes all tasks.</span> */
		tasks?: Array<InventoryTask>;

		/** The total number of inventory tasks that match the input criteria. */
		total?: number | null;
	}
	export interface InventoryTaskCollectionFormProperties {

		/** The path to the call URI that produced the current page of results. */
		href: FormControl<string | null | undefined>,

		/** The value of the <strong>limit</strong> parameter submitted in the request, which is the maximum number of inventory tasks to return per page, from the result set. A result set is the complete set of tasks returned by the method.<br /><br /><span class="tablenote"><strong>Note:</strong> Though this parameter is not required to be submitted in the request, the parameter defaults to <code>10</code> if omitted. Additionally, if this is the last or only page of the result set, the page may contain fewer tasks than the <strong>limit</strong> value submitted in the request.</span><br /><br />To determine the number of pages in a result set, divide the total value (total number of tasks matching the input criteria) by this limit value, and then round up to the next integer. For example, if the <strong>total</strong> value was <code>120</code> (120 total tasks) and the <strong>limit</strong> value was <code>50</code> (show 50 tasks per page), the total number of pages in the result set is three, so the seller would have to make three separate <strong>getInventoryTasks</strong> calls to view all tasks matching the input criteria. */
		limit: FormControl<number | null | undefined>,

		/** The path to the call URI for the next page of results. This value is returned if there is an additional page of results to return from the result set. */
		next: FormControl<string | null | undefined>,

		/** The number of results skipped in the result set before listing the first returned result. This value can be specified in the request with the <strong>offset</strong> query parameter.<br /><br /><span class="tablenote"><strong>Note:</strong> The items in a paginated result set use a zero-based list, where the first item in the list has an offset of <code>0</code>.</span> */
		offset: FormControl<number | null | undefined>,

		/** The path to the call URI for the previous page of results. This is returned if there is a previous page of results from the result set. */
		prev: FormControl<string | null | undefined>,

		/** The total number of inventory tasks that match the input criteria. */
		total: FormControl<number | null | undefined>,
	}
	export function CreateInventoryTaskCollectionFormGroup() {
		return new FormGroup<InventoryTaskCollectionFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			prev: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The type that defines the fields for the <b> getOrderTask</b> response. */
	export interface OrderTask {

		/** The timestamp when the task went into the <code>COMPLETED</code> or <code>COMPLETED_WITH_ERROR</code> state. This state means that eBay has compiled the report for the seller based on the seller’s filter criteria, and the seller can run a <strong>getResultFile</strong> call to download the report. */
		completionDate?: string | null;

		/** The date the task was created. */
		creationDate?: string | null;

		/** The path to the call URI used to retrieve the task. */
		detailHref?: string | null;

		/** The feed type associated with the task. */
		feedType?: string | null;

		/** The type that defines the fields for the order filters. */
		filterCriteria?: OrderFilterCriteria;

		/** The schema version number associated with the create task. */
		schemaVersion?: string | null;

		/** The enumeration value that indicates the state of the task that was submitted in the request. See <strong>FeedStatusEnum</strong> for information. <p>The values <code>COMPLETED </code>and<code> COMPLETED_WITH_ERROR</code> indicate the Order Report file is ready to download.</p> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:FeedStatusEnum'>eBay API documentation</a> */
		status?: string | null;

		/** The ID of the task that was submitted in the request. */
		taskId?: string | null;

		/** This container provides summary information on an upload feed (not applicable for download feed types). */
		uploadSummary?: UploadSummary;
	}

	/** The type that defines the fields for the <b> getOrderTask</b> response. */
	export interface OrderTaskFormProperties {

		/** The timestamp when the task went into the <code>COMPLETED</code> or <code>COMPLETED_WITH_ERROR</code> state. This state means that eBay has compiled the report for the seller based on the seller’s filter criteria, and the seller can run a <strong>getResultFile</strong> call to download the report. */
		completionDate: FormControl<string | null | undefined>,

		/** The date the task was created. */
		creationDate: FormControl<string | null | undefined>,

		/** The path to the call URI used to retrieve the task. */
		detailHref: FormControl<string | null | undefined>,

		/** The feed type associated with the task. */
		feedType: FormControl<string | null | undefined>,

		/** The schema version number associated with the create task. */
		schemaVersion: FormControl<string | null | undefined>,

		/** The enumeration value that indicates the state of the task that was submitted in the request. See <strong>FeedStatusEnum</strong> for information. <p>The values <code>COMPLETED </code>and<code> COMPLETED_WITH_ERROR</code> indicate the Order Report file is ready to download.</p> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:FeedStatusEnum'>eBay API documentation</a> */
		status: FormControl<string | null | undefined>,

		/** The ID of the task that was submitted in the request. */
		taskId: FormControl<string | null | undefined>,
	}
	export function CreateOrderTaskFormGroup() {
		return new FormGroup<OrderTaskFormProperties>({
			completionDate: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<string | null | undefined>(undefined),
			detailHref: new FormControl<string | null | undefined>(undefined),
			feedType: new FormControl<string | null | undefined>(undefined),
			schemaVersion: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			taskId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The type that defines the fields for a paginated result set of orders. The response consists of 0 or more sequenced <em> pages</em> where each page has 0 or more items. */
	export interface OrderTaskCollection {

		/** The path to the call URI that produced the current page of results. */
		href?: string | null;

		/** The value of the <strong>limit</strong> parameter submitted in the request, which is the maximum number of order tasks to return per page, from the result set. A result set is the complete set of tasks returned by the method. <p> <span class="tablenote"><strong>Note:</strong> Though this parameter is not required to be submitted in the request, the parameter defaults to <code>10</code> if omitted.</span></p><p> <span class="tablenote"><strong>Note:</strong> If this is the last or only page of the result set, the page may contain fewer tasks than the <strong>limit</strong> value. To determine the number of pages in a result set, divide the total value (total number of tasks matching input criteria) by this limit value, and then round up to the next integer. For example, if the <strong>total</strong> value was <code>120</code> (120 total tasks) and the <strong>limit</strong> value was <code>50</code> (show 50 tasks per page), the total number of pages in the result set is three, so the seller would have to make three separate <strong>getOrderTasks</strong> calls to view all tasks matching the input criteria.</span></p> */
		limit?: number | null;

		/** The path to the call URI for the next page of results. This value is returned if there is an additional page of results to return from the result set. */
		next?: string | null;

		/** The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter. <p class="tablenote"><strong>Note: </strong>The items in a paginated result set use a zero-based list where the first item in the list has an offset of <code>0</code>.</p> */
		offset?: number | null;

		/** The path to the call URI for the previous page of results. This is returned if there is a previous page of results from the result set. */
		prev?: string | null;

		/** An array of the order tasks on this page. The tasks are sorted by creation date. An empty array is returned if the filter criteria excludes all tasks. */
		tasks?: Array<OrderTask>;

		/** The total number of order tasks that match the input criteria. */
		total?: number | null;
	}

	/** The type that defines the fields for a paginated result set of orders. The response consists of 0 or more sequenced <em> pages</em> where each page has 0 or more items. */
	export interface OrderTaskCollectionFormProperties {

		/** The path to the call URI that produced the current page of results. */
		href: FormControl<string | null | undefined>,

		/** The value of the <strong>limit</strong> parameter submitted in the request, which is the maximum number of order tasks to return per page, from the result set. A result set is the complete set of tasks returned by the method. <p> <span class="tablenote"><strong>Note:</strong> Though this parameter is not required to be submitted in the request, the parameter defaults to <code>10</code> if omitted.</span></p><p> <span class="tablenote"><strong>Note:</strong> If this is the last or only page of the result set, the page may contain fewer tasks than the <strong>limit</strong> value. To determine the number of pages in a result set, divide the total value (total number of tasks matching input criteria) by this limit value, and then round up to the next integer. For example, if the <strong>total</strong> value was <code>120</code> (120 total tasks) and the <strong>limit</strong> value was <code>50</code> (show 50 tasks per page), the total number of pages in the result set is three, so the seller would have to make three separate <strong>getOrderTasks</strong> calls to view all tasks matching the input criteria.</span></p> */
		limit: FormControl<number | null | undefined>,

		/** The path to the call URI for the next page of results. This value is returned if there is an additional page of results to return from the result set. */
		next: FormControl<string | null | undefined>,

		/** The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter. <p class="tablenote"><strong>Note: </strong>The items in a paginated result set use a zero-based list where the first item in the list has an offset of <code>0</code>.</p> */
		offset: FormControl<number | null | undefined>,

		/** The path to the call URI for the previous page of results. This is returned if there is a previous page of results from the result set. */
		prev: FormControl<string | null | undefined>,

		/** The total number of order tasks that match the input criteria. */
		total: FormControl<number | null | undefined>,
	}
	export function CreateOrderTaskCollectionFormGroup() {
		return new FormGroup<OrderTaskCollectionFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			prev: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The type that defines the fields for a paginated result set of schedule templates. The response consists of 0 or more sequenced <em> pages</em> where each page has 0 or more items. */
	export interface ScheduleTemplateCollection {

		/** The path to the call URI that produced the current page of results. */
		href?: string | null;

		/** The value of the <strong>limit</strong> parameter submitted in the request, which is the maximum number of schedule templates to return per page, from the result set. A result set is the complete set of schedule templates returned by the method. <p> <span class="tablenote"><strong>Note:</strong> Though this parameter is not required to be submitted in the request, the parameter defaults to 10 if omitted.</span></p><p> <span class="tablenote"><strong>Note:</strong> If this is the last or only page of the result set, the page may contain fewer tasks than the <strong>limit</strong> value. To determine the number of pages in a result set, divide the total value (total number of tasks matching input criteria) by this limit value, and then round up to the next integer. For example, if the <strong>total</strong> value was <code>120</code> (120 total tasks) and the <strong>limit</strong> value was <code>50</code> (show 50 tasks per page), the total number of pages in the result set is three, so the seller would have to make three separate <strong>getScheduleTemplates</strong> calls to view all tasks matching the input criteria.</span></p> */
		limit?: number | null;

		/** The path to the call URI for the next page of results. This value is returned if there is an additional page of results to return from the result set. */
		next?: string | null;

		/** The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter. <p class="tablenote"><strong>Note: </strong>The items in a paginated result set use a zero-based list where the first item in the list has an offset of <code>0</code>.</p> */
		offset?: number | null;

		/** The path to the call URI for the previous page of results. This is returned if there is a previous page of results from the result set. */
		prev?: string | null;

		/** An array of the schedule templates on this page. An empty array is returned if the filter criteria excludes all tasks. */
		scheduleTemplates?: Array<ScheduleTemplateResponse>;

		/** The total number of schedule templates that match the input criteria. */
		total?: number | null;
	}

	/** The type that defines the fields for a paginated result set of schedule templates. The response consists of 0 or more sequenced <em> pages</em> where each page has 0 or more items. */
	export interface ScheduleTemplateCollectionFormProperties {

		/** The path to the call URI that produced the current page of results. */
		href: FormControl<string | null | undefined>,

		/** The value of the <strong>limit</strong> parameter submitted in the request, which is the maximum number of schedule templates to return per page, from the result set. A result set is the complete set of schedule templates returned by the method. <p> <span class="tablenote"><strong>Note:</strong> Though this parameter is not required to be submitted in the request, the parameter defaults to 10 if omitted.</span></p><p> <span class="tablenote"><strong>Note:</strong> If this is the last or only page of the result set, the page may contain fewer tasks than the <strong>limit</strong> value. To determine the number of pages in a result set, divide the total value (total number of tasks matching input criteria) by this limit value, and then round up to the next integer. For example, if the <strong>total</strong> value was <code>120</code> (120 total tasks) and the <strong>limit</strong> value was <code>50</code> (show 50 tasks per page), the total number of pages in the result set is three, so the seller would have to make three separate <strong>getScheduleTemplates</strong> calls to view all tasks matching the input criteria.</span></p> */
		limit: FormControl<number | null | undefined>,

		/** The path to the call URI for the next page of results. This value is returned if there is an additional page of results to return from the result set. */
		next: FormControl<string | null | undefined>,

		/** The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter. <p class="tablenote"><strong>Note: </strong>The items in a paginated result set use a zero-based list where the first item in the list has an offset of <code>0</code>.</p> */
		offset: FormControl<number | null | undefined>,

		/** The path to the call URI for the previous page of results. This is returned if there is a previous page of results from the result set. */
		prev: FormControl<string | null | undefined>,

		/** The total number of schedule templates that match the input criteria. */
		total: FormControl<number | null | undefined>,
	}
	export function CreateScheduleTemplateCollectionFormGroup() {
		return new FormGroup<ScheduleTemplateCollectionFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			prev: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The type that defines the fields for a paginated result set of available schedule templates. The response consists of 0 or more sequenced <em> pages</em> where each page has 0 or more items. */
	export interface ScheduleTemplateResponse {

		/** The feed type of the schedule template. <p> <span class="tablenote"><strong>Note:</strong> When calling <strong>createSchedule</strong> and <strong>updateSchedule</strong> methods you must match the feed type specified by the schedule template (this feedType).</span></p> */
		feedType?: string | null;

		/** This field specifies how often the schedule is generated. If set to <code>HALF_HOUR</code> or <code>ONE_HOUR</code>, you cannot set a <strong>preferredTriggerHour</strong> using <strong>createSchedule</strong> or <strong>updateSchedule</strong>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:FrequencyEnum'>eBay API documentation</a> */
		frequency?: string | null;

		/** The template name provided by the template. */
		name?: string | null;

		/** The ID of the template. Use this ID to create a schedule based on the properties of this schedule template. */
		scheduleTemplateId?: string | null;

		/** The present status of the template. You cannot create or modify a schedule using a template with an <code>INACTIVE</code> status.  For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:StatusEnum'>eBay API documentation</a> */
		status?: string | null;

		/** An array of the configuration supported by this template. */
		supportedConfigurations?: Array<SupportedConfiguration>;
	}

	/** The type that defines the fields for a paginated result set of available schedule templates. The response consists of 0 or more sequenced <em> pages</em> where each page has 0 or more items. */
	export interface ScheduleTemplateResponseFormProperties {

		/** The feed type of the schedule template. <p> <span class="tablenote"><strong>Note:</strong> When calling <strong>createSchedule</strong> and <strong>updateSchedule</strong> methods you must match the feed type specified by the schedule template (this feedType).</span></p> */
		feedType: FormControl<string | null | undefined>,

		/** This field specifies how often the schedule is generated. If set to <code>HALF_HOUR</code> or <code>ONE_HOUR</code>, you cannot set a <strong>preferredTriggerHour</strong> using <strong>createSchedule</strong> or <strong>updateSchedule</strong>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:FrequencyEnum'>eBay API documentation</a> */
		frequency: FormControl<string | null | undefined>,

		/** The template name provided by the template. */
		name: FormControl<string | null | undefined>,

		/** The ID of the template. Use this ID to create a schedule based on the properties of this schedule template. */
		scheduleTemplateId: FormControl<string | null | undefined>,

		/** The present status of the template. You cannot create or modify a schedule using a template with an <code>INACTIVE</code> status.  For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:StatusEnum'>eBay API documentation</a> */
		status: FormControl<string | null | undefined>,
	}
	export function CreateScheduleTemplateResponseFormGroup() {
		return new FormGroup<ScheduleTemplateResponseFormProperties>({
			feedType: new FormControl<string | null | undefined>(undefined),
			frequency: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			scheduleTemplateId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An array that defines the configuration supported by this template. This includes specified properties and usage (whether the property is REQUIRED or OPTIONAL), and an optional default value. */
	export interface SupportedConfiguration {

		/** The default value for the property. If a value is omitted from the schedule and a default value is supplied, the default value is used. */
		defaultValue?: string | null;

		/** Properties supported by the template. Properties can include the following: <ul><li><b>scheduleStartDate:</b> The timestamp that the report generation (subscription) begins. After this timestamp, the schedule status becomes active until either the scheduleEndDate occurs or the scheduleTemplate becomes inactive. Format: UTC <code>yyyy-MM-dd<strong>T</strong>HH<strong>Z</strong></code></li><li><b>scheduleEndDate:</b> The timestamp that the report generation (subscription) ends. After this date, the schedule status becomes INACTIVE. Format: UTC <code>yyyy-MM-dd<strong>T</strong>HH<strong>Z</strong></code></li><li><b>schemaVersion:</b> The schema version of the schedule templates feedType. This field is required if the feedType has a schema version.</li><li><b>preferredTriggerDayOfMonth:</b> The preferred day of the month to trigger the schedule. </li><li><b>preferredTriggerDayOfWeek:</b> The preferred day of the week to trigger the schedule. </li><li><b>preferredTriggerHour:</b> The preferred two-digit hour of the day to trigger the schedule. Format: UTC <code>hhZ</code></li><ul> */
		property?: string | null;

		/** Whether the specified property is REQUIRED or OPTIONAL. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:ConfigurationsUsageEnum'>eBay API documentation</a> */
		usage?: string | null;
	}

	/** An array that defines the configuration supported by this template. This includes specified properties and usage (whether the property is REQUIRED or OPTIONAL), and an optional default value. */
	export interface SupportedConfigurationFormProperties {

		/** The default value for the property. If a value is omitted from the schedule and a default value is supplied, the default value is used. */
		defaultValue: FormControl<string | null | undefined>,

		/** Properties supported by the template. Properties can include the following: <ul><li><b>scheduleStartDate:</b> The timestamp that the report generation (subscription) begins. After this timestamp, the schedule status becomes active until either the scheduleEndDate occurs or the scheduleTemplate becomes inactive. Format: UTC <code>yyyy-MM-dd<strong>T</strong>HH<strong>Z</strong></code></li><li><b>scheduleEndDate:</b> The timestamp that the report generation (subscription) ends. After this date, the schedule status becomes INACTIVE. Format: UTC <code>yyyy-MM-dd<strong>T</strong>HH<strong>Z</strong></code></li><li><b>schemaVersion:</b> The schema version of the schedule templates feedType. This field is required if the feedType has a schema version.</li><li><b>preferredTriggerDayOfMonth:</b> The preferred day of the month to trigger the schedule. </li><li><b>preferredTriggerDayOfWeek:</b> The preferred day of the week to trigger the schedule. </li><li><b>preferredTriggerHour:</b> The preferred two-digit hour of the day to trigger the schedule. Format: UTC <code>hhZ</code></li><ul> */
		property: FormControl<string | null | undefined>,

		/** Whether the specified property is REQUIRED or OPTIONAL. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:ConfigurationsUsageEnum'>eBay API documentation</a> */
		usage: FormControl<string | null | undefined>,
	}
	export function CreateSupportedConfigurationFormGroup() {
		return new FormGroup<SupportedConfigurationFormProperties>({
			defaultValue: new FormControl<string | null | undefined>(undefined),
			property: new FormControl<string | null | undefined>(undefined),
			usage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** File stream */
	export interface StreamingOutput {
	}

	/** File stream */
	export interface StreamingOutputFormProperties {
	}
	export function CreateStreamingOutputFormGroup() {
		return new FormGroup<StreamingOutputFormProperties>({
		});

	}


	/** The type that defines the fields for the task details. */
	export interface Task {

		/** The timestamp when the task went into the <code>COMPLETED</code> or <code>COMPLETED_WITH_ERROR</code> state. This state means that eBay has compiled the report for the seller based on the seller’s filter criteria, and the seller can run a <strong>getResultFile</strong> call to download the report. */
		completionDate?: string | null;

		/** The date the task was created. */
		creationDate?: string | null;

		/** The path to the call URI used to retrieve the task. This field points to the GetOrderTask URI if the task is for <code>LMS_ORDER_REPORT</code> or will be null if this task is for <code>LMS_ORDER_ACK</code>. */
		detailHref?: string | null;

		/** The feed type associated with the task. */
		feedType?: string | null;

		/** The schema version number associated with the task. */
		schemaVersion?: string | null;

		/** The enumeration value that indicates the state of the task that was submitted in the request. See <strong>FeedStatusEnum</strong> for information. <p>The values <code>COMPLETED </code>and<code> COMPLETED_WITH_ERROR</code> indicate the Order Report file is ready to download.</p> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:FeedStatusEnum'>eBay API documentation</a> */
		status?: string | null;

		/** The ID of the task that was submitted in the request. */
		taskId?: string | null;

		/** This container provides summary information on an upload feed (not applicable for download feed types). */
		uploadSummary?: UploadSummary;
	}

	/** The type that defines the fields for the task details. */
	export interface TaskFormProperties {

		/** The timestamp when the task went into the <code>COMPLETED</code> or <code>COMPLETED_WITH_ERROR</code> state. This state means that eBay has compiled the report for the seller based on the seller’s filter criteria, and the seller can run a <strong>getResultFile</strong> call to download the report. */
		completionDate: FormControl<string | null | undefined>,

		/** The date the task was created. */
		creationDate: FormControl<string | null | undefined>,

		/** The path to the call URI used to retrieve the task. This field points to the GetOrderTask URI if the task is for <code>LMS_ORDER_REPORT</code> or will be null if this task is for <code>LMS_ORDER_ACK</code>. */
		detailHref: FormControl<string | null | undefined>,

		/** The feed type associated with the task. */
		feedType: FormControl<string | null | undefined>,

		/** The schema version number associated with the task. */
		schemaVersion: FormControl<string | null | undefined>,

		/** The enumeration value that indicates the state of the task that was submitted in the request. See <strong>FeedStatusEnum</strong> for information. <p>The values <code>COMPLETED </code>and<code> COMPLETED_WITH_ERROR</code> indicate the Order Report file is ready to download.</p> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:FeedStatusEnum'>eBay API documentation</a> */
		status: FormControl<string | null | undefined>,

		/** The ID of the task that was submitted in the request. */
		taskId: FormControl<string | null | undefined>,
	}
	export function CreateTaskFormGroup() {
		return new FormGroup<TaskFormProperties>({
			completionDate: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<string | null | undefined>(undefined),
			detailHref: new FormControl<string | null | undefined>(undefined),
			feedType: new FormControl<string | null | undefined>(undefined),
			schemaVersion: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			taskId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The type that defines the fields for a paginated result set of tasks. The response consists of 0 or more sequenced <em> pages</em> where each page has 0 or more items. */
	export interface TaskCollection {

		/** The path to the call URI that produced the current page of results. */
		href?: string | null;

		/** The value of the <strong>limit</strong> parameter submitted in the request, which is the maximum number of tasks to return per page, from the result set. A result set is the complete set of tasks returned by the method. <p> <span class="tablenote"><strong>Note:</strong> Though this parameter is not required to be submitted in the request, the parameter defaults to 10 if omitted.</span></p><p> <span class="tablenote"><strong>Note:</strong> If this is the last or only page of the result set, the page may contain fewer tasks than the <strong>limit</strong> value. To determine the number of pages in a result set, divide the total value (total number of tasks matching input criteria) by this limit value, and then round up to the next integer. For example, if the <strong>total</strong> value was <code>120</code> (120 total tasks) and the <strong>limit</strong> value was <code>50</code> (show 50 tasks per page), the total number of pages in the result set is three, so the seller would have to make three separate <strong>getTasks</strong> calls to view all tasks matching the input criteria.</span></p> */
		limit?: number | null;

		/** The path to the call URI for the next page of results. This value is returned if there is an additional page of results to return from the result set. */
		next?: string | null;

		/** The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter. <p class="tablenote"><strong>Note: </strong>The items in a paginated result set use a zero-based list where the first item in the list has an offset of <code>0</code>.</p> */
		offset?: number | null;

		/** The path to the call URI for the previous page of results. This is returned if there is a previous page of results from the result set. */
		prev?: string | null;

		/** An array of the tasks on this page. The tasks are sorted by creation date. An empty array is returned if the filter criteria excludes all tasks. */
		tasks?: Array<Task>;

		/** The total number of tasks that match the input criteria. */
		total?: number | null;
	}

	/** The type that defines the fields for a paginated result set of tasks. The response consists of 0 or more sequenced <em> pages</em> where each page has 0 or more items. */
	export interface TaskCollectionFormProperties {

		/** The path to the call URI that produced the current page of results. */
		href: FormControl<string | null | undefined>,

		/** The value of the <strong>limit</strong> parameter submitted in the request, which is the maximum number of tasks to return per page, from the result set. A result set is the complete set of tasks returned by the method. <p> <span class="tablenote"><strong>Note:</strong> Though this parameter is not required to be submitted in the request, the parameter defaults to 10 if omitted.</span></p><p> <span class="tablenote"><strong>Note:</strong> If this is the last or only page of the result set, the page may contain fewer tasks than the <strong>limit</strong> value. To determine the number of pages in a result set, divide the total value (total number of tasks matching input criteria) by this limit value, and then round up to the next integer. For example, if the <strong>total</strong> value was <code>120</code> (120 total tasks) and the <strong>limit</strong> value was <code>50</code> (show 50 tasks per page), the total number of pages in the result set is three, so the seller would have to make three separate <strong>getTasks</strong> calls to view all tasks matching the input criteria.</span></p> */
		limit: FormControl<number | null | undefined>,

		/** The path to the call URI for the next page of results. This value is returned if there is an additional page of results to return from the result set. */
		next: FormControl<string | null | undefined>,

		/** The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter. <p class="tablenote"><strong>Note: </strong>The items in a paginated result set use a zero-based list where the first item in the list has an offset of <code>0</code>.</p> */
		offset: FormControl<number | null | undefined>,

		/** The path to the call URI for the previous page of results. This is returned if there is a previous page of results from the result set. */
		prev: FormControl<string | null | undefined>,

		/** The total number of tasks that match the input criteria. */
		total: FormControl<number | null | undefined>,
	}
	export function CreateTaskCollectionFormGroup() {
		return new FormGroup<TaskCollectionFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			prev: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The type that defines the fields for a schedule update to a schedule generated with the Feed API. */
	export interface UpdateUserScheduleRequest {

		/** The preferred day of the month to trigger the schedule. This field can be used with <strong>preferredTriggerHour</strong> for monthly schedules. The last day of the month is used for numbers larger than the actual number of days in the month. <br /><br />This field is available as specified by the template (<strong>scheduleTemplateId</strong>). The template can specify this field as optional or required, and optionally provides a default value. <br /><br /><b>Minimum: </b>1<b><br /><br /><b>Maximum: </b>31 */
		preferredTriggerDayOfMonth?: number | null;

		/** The preferred day of the week to trigger the schedule. This field can be used with <strong>preferredTriggerHour</strong> for weekly schedules. <br /><br />This field is available as specified by the template (<strong>scheduleTemplateId</strong>). The template can specify this field as optional or required, and optionally provides a default value. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:DayOfWeekEnum'>eBay API documentation</a> */
		preferredTriggerDayOfWeek?: string | null;

		/** The preferred two-digit hour of the day to trigger the schedule. <br /><br />This field is available as specified by the template (<strong>scheduleTemplateId</strong>). The template can specify this field as optional or required, and optionally provides a default value. <br /><br /><b>Format:</b> UTC <code>hhZ</code><br /><br />For example, the following represents 11:00 am UTC:<code> 11Z</code><br /><br /><b>Minimum: </b><code>00Z</code><b><br /><br /><b>Maximum: </b><code>23Z</code> */
		preferredTriggerHour?: string | null;

		/** The timestamp on which the schedule (report generation) ends. After this date, the schedule status becomes <code>INACTIVE</code>. <br /><br />Use this field, if available, to end the schedule in the future. This value must be later than <strong>scheduleStartDate</strong> (if supplied). This field is available as specified by the template (<strong>scheduleTemplateId</strong>). The template can specify this field as optional or required, and optionally provides a default value.<br /><br /><b>Format:</b> UTC <code>yyyy-MM-dd<strong>T</strong>HH<strong>Z</strong></code><br /><br />For example, the following represents UTC October 10, 2021 at 10:00 AM:<br /><code> 2021-10-10T10Z</code> */
		scheduleEndDate?: string | null;

		/** The schedule name assigned by the user for the created schedule. */
		scheduleName?: string | null;

		/** The timestamp to start generating the report. After this timestamp, the schedule status becomes active until either the <strong>scheduleEndDate</strong> occurs or the <strong>scheduleTemplateId</strong> becomes inactive. <br /><br />Use this field, if available, to start the schedule in the future but before the <strong>scheduleEndDate</strong> (if supplied). This field is available as specified by the template <strong>(scheduleTemplateId)</strong>.  The template can specify this field as optional or required, and optionally provides a default value.<br /><br /><b>Format:</b> UTC <code>yyyy-MM-dd<strong>T</strong>HH<strong>Z</strong></code><br /><br />For example, the following represents a schedule start date of UTC October 01, 2020 at 12:00 PM:<br /><code> 2020-01-01T12Z</code> */
		scheduleStartDate?: string | null;

		/** The schema version of the feedType for the schedule. This field is required if the <strong>feedType</strong> has a schema version. <br /><br />This field is available as specified by the template (<strong>scheduleTemplateId</strong>). The template can specify this field as optional or required, and optionally provides a default value. */
		schemaVersion?: string | null;
	}

	/** The type that defines the fields for a schedule update to a schedule generated with the Feed API. */
	export interface UpdateUserScheduleRequestFormProperties {

		/** The preferred day of the month to trigger the schedule. This field can be used with <strong>preferredTriggerHour</strong> for monthly schedules. The last day of the month is used for numbers larger than the actual number of days in the month. <br /><br />This field is available as specified by the template (<strong>scheduleTemplateId</strong>). The template can specify this field as optional or required, and optionally provides a default value. <br /><br /><b>Minimum: </b>1<b><br /><br /><b>Maximum: </b>31 */
		preferredTriggerDayOfMonth: FormControl<number | null | undefined>,

		/** The preferred day of the week to trigger the schedule. This field can be used with <strong>preferredTriggerHour</strong> for weekly schedules. <br /><br />This field is available as specified by the template (<strong>scheduleTemplateId</strong>). The template can specify this field as optional or required, and optionally provides a default value. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:DayOfWeekEnum'>eBay API documentation</a> */
		preferredTriggerDayOfWeek: FormControl<string | null | undefined>,

		/** The preferred two-digit hour of the day to trigger the schedule. <br /><br />This field is available as specified by the template (<strong>scheduleTemplateId</strong>). The template can specify this field as optional or required, and optionally provides a default value. <br /><br /><b>Format:</b> UTC <code>hhZ</code><br /><br />For example, the following represents 11:00 am UTC:<code> 11Z</code><br /><br /><b>Minimum: </b><code>00Z</code><b><br /><br /><b>Maximum: </b><code>23Z</code> */
		preferredTriggerHour: FormControl<string | null | undefined>,

		/** The timestamp on which the schedule (report generation) ends. After this date, the schedule status becomes <code>INACTIVE</code>. <br /><br />Use this field, if available, to end the schedule in the future. This value must be later than <strong>scheduleStartDate</strong> (if supplied). This field is available as specified by the template (<strong>scheduleTemplateId</strong>). The template can specify this field as optional or required, and optionally provides a default value.<br /><br /><b>Format:</b> UTC <code>yyyy-MM-dd<strong>T</strong>HH<strong>Z</strong></code><br /><br />For example, the following represents UTC October 10, 2021 at 10:00 AM:<br /><code> 2021-10-10T10Z</code> */
		scheduleEndDate: FormControl<string | null | undefined>,

		/** The schedule name assigned by the user for the created schedule. */
		scheduleName: FormControl<string | null | undefined>,

		/** The timestamp to start generating the report. After this timestamp, the schedule status becomes active until either the <strong>scheduleEndDate</strong> occurs or the <strong>scheduleTemplateId</strong> becomes inactive. <br /><br />Use this field, if available, to start the schedule in the future but before the <strong>scheduleEndDate</strong> (if supplied). This field is available as specified by the template <strong>(scheduleTemplateId)</strong>.  The template can specify this field as optional or required, and optionally provides a default value.<br /><br /><b>Format:</b> UTC <code>yyyy-MM-dd<strong>T</strong>HH<strong>Z</strong></code><br /><br />For example, the following represents a schedule start date of UTC October 01, 2020 at 12:00 PM:<br /><code> 2020-01-01T12Z</code> */
		scheduleStartDate: FormControl<string | null | undefined>,

		/** The schema version of the feedType for the schedule. This field is required if the <strong>feedType</strong> has a schema version. <br /><br />This field is available as specified by the template (<strong>scheduleTemplateId</strong>). The template can specify this field as optional or required, and optionally provides a default value. */
		schemaVersion: FormControl<string | null | undefined>,
	}
	export function CreateUpdateUserScheduleRequestFormGroup() {
		return new FormGroup<UpdateUserScheduleRequestFormProperties>({
			preferredTriggerDayOfMonth: new FormControl<number | null | undefined>(undefined),
			preferredTriggerDayOfWeek: new FormControl<string | null | undefined>(undefined),
			preferredTriggerHour: new FormControl<string | null | undefined>(undefined),
			scheduleEndDate: new FormControl<string | null | undefined>(undefined),
			scheduleName: new FormControl<string | null | undefined>(undefined),
			scheduleStartDate: new FormControl<string | null | undefined>(undefined),
			schemaVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The type that defines the fields for a paginated result set of user schedules. The response consists of 0 or more sequenced <em> pages</em> where each page has 0 or more items. */
	export interface UserScheduleCollection {

		/** The path to the call URI that produced the current page of results. */
		href?: string | null;

		/** The value of the <strong>limit</strong> parameter submitted in the request, which is the maximum number of schedules to return per page, from the result set. A result set is the complete set of schedules returned by the method. <p> <span class="tablenote"><strong>Note:</strong> Though this parameter is not required to be submitted in the request, the parameter defaults to 10 if omitted.<p> <span class="tablenote"><strong>Note:</strong> If this is the last or only page of the result set, the page may contain fewer tasks than the <strong>limit</strong> value. To determine the number of pages in a result set, divide the total value (total number of tasks matching input criteria) by this limit value, and then round up to the next integer. For example, if the <strong>total</strong> value was <code>120</code> (120 total tasks) and the <strong>limit</strong> value was <code>50</code> (show 50 tasks per page), the total number of pages in the result set is three, so the seller would have to make three separate <strong>getSchedules</strong> calls to view all tasks matching the input criteria.</span></p></span></p> */
		limit?: number | null;

		/** The path to the call URI for the next page of results. This value is returned if there is an additional page of results to return from the result set. */
		next?: string | null;

		/** The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter. <p class="tablenote"><strong>Note: </strong>The items in a paginated result set use a zero-based list where the first item in the list has an offset of <code>0</code>.</p> */
		offset?: number | null;

		/** The path to the call URI for the previous page of results. This is returned if there is a previous page of results from the result set. */
		prev?: string | null;

		/** An array of the schedules on this page. An empty array is returned if the filter criteria excludes all tasks. */
		schedules?: Array<UserScheduleResponse>;

		/** The total number of schedules that match the input criteria. */
		total?: number | null;
	}

	/** The type that defines the fields for a paginated result set of user schedules. The response consists of 0 or more sequenced <em> pages</em> where each page has 0 or more items. */
	export interface UserScheduleCollectionFormProperties {

		/** The path to the call URI that produced the current page of results. */
		href: FormControl<string | null | undefined>,

		/** The value of the <strong>limit</strong> parameter submitted in the request, which is the maximum number of schedules to return per page, from the result set. A result set is the complete set of schedules returned by the method. <p> <span class="tablenote"><strong>Note:</strong> Though this parameter is not required to be submitted in the request, the parameter defaults to 10 if omitted.<p> <span class="tablenote"><strong>Note:</strong> If this is the last or only page of the result set, the page may contain fewer tasks than the <strong>limit</strong> value. To determine the number of pages in a result set, divide the total value (total number of tasks matching input criteria) by this limit value, and then round up to the next integer. For example, if the <strong>total</strong> value was <code>120</code> (120 total tasks) and the <strong>limit</strong> value was <code>50</code> (show 50 tasks per page), the total number of pages in the result set is three, so the seller would have to make three separate <strong>getSchedules</strong> calls to view all tasks matching the input criteria.</span></p></span></p> */
		limit: FormControl<number | null | undefined>,

		/** The path to the call URI for the next page of results. This value is returned if there is an additional page of results to return from the result set. */
		next: FormControl<string | null | undefined>,

		/** The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter. <p class="tablenote"><strong>Note: </strong>The items in a paginated result set use a zero-based list where the first item in the list has an offset of <code>0</code>.</p> */
		offset: FormControl<number | null | undefined>,

		/** The path to the call URI for the previous page of results. This is returned if there is a previous page of results from the result set. */
		prev: FormControl<string | null | undefined>,

		/** The total number of schedules that match the input criteria. */
		total: FormControl<number | null | undefined>,
	}
	export function CreateUserScheduleCollectionFormGroup() {
		return new FormGroup<UserScheduleCollectionFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			prev: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The type that defines the fields for a paginated result set of available schedules. The response consists of 0 or more sequenced <em> pages</em> where each page has 0 or more items. */
	export interface UserScheduleResponse {

		/** The creation date of the schedule in hours based on the 24-hour Coordinated Universal Time (UTC) clock. */
		creationDate?: string | null;

		/** The <strong>feedType</strong> associated with the schedule. */
		feedType?: string | null;

		/** The date the schedule was last modified. */
		lastModifiedDate?: string | null;

		/** The preferred day of the month to trigger the schedule. This field can be used with <strong>preferredTriggerHour</strong> for monthly schedules. The last day of the month is used for numbers larger than the number of days in the month. */
		preferredTriggerDayOfMonth?: number | null;

		/** The preferred day of the week to trigger the schedule. This field can be used with <strong>preferredTriggerHour</strong> for weekly schedules. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:DayOfWeekEnum'>eBay API documentation</a> */
		preferredTriggerDayOfWeek?: string | null;

		/** The preferred two-digit hour of the day to trigger the schedule. <br /><br /><b>Format:</b> UTC <code>hhZ</code><br /><br />For example, the following represents 11:00 am UTC:<br /><br /><code>11Z</code><br /><br /> */
		preferredTriggerHour?: string | null;

		/** The timestamp on which the report generation (subscription) ends. After this date, the schedule status becomes <code>INACTIVE</code>. */
		scheduleEndDate?: string | null;

		/** The ID of the schedule. This ID is generated when the schedule was created by the <strong>createSchedule</strong> method. */
		scheduleId?: string | null;

		/** The schedule name assigned by the user for the created schedule. Users assign this name for their reference. */
		scheduleName?: string | null;

		/** The timestamp that indicates the start of the report generation. */
		scheduleStartDate?: string | null;

		/** The ID of the template used to create this schedule. */
		scheduleTemplateId?: string | null;

		/** The schema version of the feedType for the schedule. */
		schemaVersion?: string | null;

		/** The enumeration value that indicates the state of the schedule. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:StatusEnum'>eBay API documentation</a> */
		status?: string | null;

		/** The reason the schedule is inactive. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:StatusReasonEnum'>eBay API documentation</a> */
		statusReason?: string | null;
	}

	/** The type that defines the fields for a paginated result set of available schedules. The response consists of 0 or more sequenced <em> pages</em> where each page has 0 or more items. */
	export interface UserScheduleResponseFormProperties {

		/** The creation date of the schedule in hours based on the 24-hour Coordinated Universal Time (UTC) clock. */
		creationDate: FormControl<string | null | undefined>,

		/** The <strong>feedType</strong> associated with the schedule. */
		feedType: FormControl<string | null | undefined>,

		/** The date the schedule was last modified. */
		lastModifiedDate: FormControl<string | null | undefined>,

		/** The preferred day of the month to trigger the schedule. This field can be used with <strong>preferredTriggerHour</strong> for monthly schedules. The last day of the month is used for numbers larger than the number of days in the month. */
		preferredTriggerDayOfMonth: FormControl<number | null | undefined>,

		/** The preferred day of the week to trigger the schedule. This field can be used with <strong>preferredTriggerHour</strong> for weekly schedules. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:DayOfWeekEnum'>eBay API documentation</a> */
		preferredTriggerDayOfWeek: FormControl<string | null | undefined>,

		/** The preferred two-digit hour of the day to trigger the schedule. <br /><br /><b>Format:</b> UTC <code>hhZ</code><br /><br />For example, the following represents 11:00 am UTC:<br /><br /><code>11Z</code><br /><br /> */
		preferredTriggerHour: FormControl<string | null | undefined>,

		/** The timestamp on which the report generation (subscription) ends. After this date, the schedule status becomes <code>INACTIVE</code>. */
		scheduleEndDate: FormControl<string | null | undefined>,

		/** The ID of the schedule. This ID is generated when the schedule was created by the <strong>createSchedule</strong> method. */
		scheduleId: FormControl<string | null | undefined>,

		/** The schedule name assigned by the user for the created schedule. Users assign this name for their reference. */
		scheduleName: FormControl<string | null | undefined>,

		/** The timestamp that indicates the start of the report generation. */
		scheduleStartDate: FormControl<string | null | undefined>,

		/** The ID of the template used to create this schedule. */
		scheduleTemplateId: FormControl<string | null | undefined>,

		/** The schema version of the feedType for the schedule. */
		schemaVersion: FormControl<string | null | undefined>,

		/** The enumeration value that indicates the state of the schedule. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:StatusEnum'>eBay API documentation</a> */
		status: FormControl<string | null | undefined>,

		/** The reason the schedule is inactive. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:StatusReasonEnum'>eBay API documentation</a> */
		statusReason: FormControl<string | null | undefined>,
	}
	export function CreateUserScheduleResponseFormGroup() {
		return new FormGroup<UserScheduleResponseFormProperties>({
			creationDate: new FormControl<string | null | undefined>(undefined),
			feedType: new FormControl<string | null | undefined>(undefined),
			lastModifiedDate: new FormControl<string | null | undefined>(undefined),
			preferredTriggerDayOfMonth: new FormControl<number | null | undefined>(undefined),
			preferredTriggerDayOfWeek: new FormControl<string | null | undefined>(undefined),
			preferredTriggerHour: new FormControl<string | null | undefined>(undefined),
			scheduleEndDate: new FormControl<string | null | undefined>(undefined),
			scheduleId: new FormControl<string | null | undefined>(undefined),
			scheduleName: new FormControl<string | null | undefined>(undefined),
			scheduleStartDate: new FormControl<string | null | undefined>(undefined),
			scheduleTemplateId: new FormControl<string | null | undefined>(undefined),
			schemaVersion: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			statusReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Use this method to return an array of customer service metric tasks. You can limit the tasks returned by specifying a date range. </p> <p> <span class="tablenote"><strong>Note:</strong> You can pass in either the <code>look_back_days </code>or<code> date_range</code>, but not both.</span></p>
		 * Get customer_service_metric_task
		 * @param {string} date_range The task creation date range. The results are filtered to include only tasks with a creation date that is equal to the dates specified or is within the specified range. Do not use with the <code>look_back_days</code> parameter.<p><strong>Format: </strong>UTC</p><p>For example, tasks within a range: </p><p><code>yyyy-MM-ddThh:mm:ss.SSSZ..yyyy-MM-ddThh:mm:ss.SSSZ </code></p><p>Tasks created on March 8, 2020</p><p><code>2020-03-08T00:00.00.000Z..2020-03-09T00:00:00.000Z</code></p><p><b>Maximum: </b>90 days</p>
		 * @param {string} feed_type The feed type associated with the task. The only presently supported value is <code>CUSTOMER_SERVICE_METRICS_REPORT</code>.
		 * @param {string} limit The number of customer service metric tasks to return per page of the result set. Use this parameter in conjunction with the offset parameter to control the pagination of the output. <p>For example, if <strong>offset</strong> is set to 10 and <strong>limit</strong> is set to 10, the call retrieves tasks 11 thru 20 from the result set.</p><p>If this parameter is omitted, the default value is used.</p><p> <span class="tablenote"><strong>Note:</strong>This feature employs a zero-based list, where the first item in the list has an offset of <code>0</code>.</span></p><p><b>Default:</b> 10 <p><b>Maximum:</b> 500</p>
		 * @param {string} look_back_days The number of previous days in which to search for tasks. Do not use with the <code>date_range</code> parameter. If both <code>date_range</code> and <code>look_back_days</code> are omitted, this parameter's default value is used. <p><b>Default value:</b> 7</p><p><b>Range:</b> 1-90 (inclusive)</p>
		 * @param {string} offset The number of customer service metric tasks to skip in the result set before returning the first task in the paginated response. <p>Combine <strong>offset</strong> with the <strong>limit</strong> query parameter to control the items returned in the response. For example, if you supply an <strong>offset</strong> of <code>0</code> and a <strong>limit</strong> of <code>10</code>, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If <strong>offset</strong> is <code>10</code> and <strong>limit</strong> is <code>20</code>, the first page of the response contains items 11-30 from the complete result set. <br /><br /><b>Default: </b>0
		 * @return {CustomerServiceMetricTaskCollection} Success
		 */
		GetCustomerServiceMetricTasks(date_range: string | null | undefined, feed_type: string | null | undefined, limit: string | null | undefined, look_back_days: string | null | undefined, offset: string | null | undefined): Observable<CustomerServiceMetricTaskCollection> {
			return this.http.get<CustomerServiceMetricTaskCollection>(this.baseUri + 'customer_service_metric_task?date_range=' + (date_range == null ? '' : encodeURIComponent(date_range)) + '&feed_type=' + (feed_type == null ? '' : encodeURIComponent(feed_type)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&look_back_days=' + (look_back_days == null ? '' : encodeURIComponent(look_back_days)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)), {});
		}

		/**
		 * <p>Use this method to create a customer service metrics download task with filter criteria for the customer service metrics report. When using this method, specify the <strong>feedType</strong> and <strong>filterCriteria</strong> including both <strong>evaluationMarketplaceId</strong> and <strong>customerServiceMetricType</strong> for the report. The method returns the location response header containing the call URI to use with <strong>getCustomerServiceMetricTask</strong> to retrieve status and details on the task.</p><p>Only CURRENT Customer Service Metrics reports can be generated with the Sell Feed API. PROJECTED reports are not supported at this time. See the <a href="/api-docs/sell/analytics/resources/customer_service_metric/methods/getCustomerServiceMetric">getCustomerServiceMetric</a> method document in the Analytics API for more information about these two types of reports.</p><p><span class="tablenote"><strong>Note:</strong> Before calling this API, retrieve the summary of the seller's performance and rating for the customer service metric by calling <strong>getCustomerServiceMetric</strong> (part of the <a href="/api-docs/sell/analytics/resources/methods">Analytics API</a>). You can then populate the create task request fields with the values from the response. This technique eliminates failed tasks that request a report for a <strong>customerServiceMetricType</strong> and <strong>evaluationMarketplaceId</strong> that are without evaluation.</span></p>
		 * Post customer_service_metric_task
		 * @param {CreateServiceMetricsTaskRequest} requestBody Request payload containing version, feedType, and optional filterCriteria.
		 * @return {void} 
		 */
		CreateCustomerServiceMetricTask(requestBody: CreateServiceMetricsTaskRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'customer_service_metric_task', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Use this method to retrieve customer service metric task details for the specified task. The input is <strong>task_id</strong>.</p>
		 * Get customer_service_metric_task/{task_id}
		 * @param {string} task_id Use this path parameter to specify the task ID value for the customer service metric task to retrieve.
		 * @return {ServiceMetricsTask} Success
		 */
		GetCustomerServiceMetricTask(task_id: string): Observable<ServiceMetricsTask> {
			return this.http.get<ServiceMetricsTask>(this.baseUri + 'customer_service_metric_task/' + (task_id == null ? '' : encodeURIComponent(task_id)), {});
		}

		/**
		 * This method searches for multiple tasks of a specific feed type, and includes date filters and pagination.
		 * Get inventory_task
		 * @param {string} feed_type The feed type associated with the inventory task. Either <strong>feed_type</strong> or <strong>schedule_id</strong> is required. Do not use with the <strong>schedule_id</strong> parameter. Presently, only one feed type is available:<ul><li><code>LMS_ACTIVE_INVENTORY_REPORT</code></li></ul>
		 * @param {string} schedule_id The ID of the schedule for which to retrieve the latest result file. This ID is generated when the schedule was created by the <strong>createSchedule</strong> method. Schedules apply to downloaded reports (<code>LMS_ACTIVE_INVENTORY_REPORT</code>). Either <strong>schedule_id</strong> or <strong>feed_type</strong> is  required. Do not use with the <strong>feed_type</strong> parameter.
		 * @param {string} look_back_days The number of previous days in which to search for tasks. Do not use with the <code>date_range</code> parameter. If both <code>date_range</code> and <code>look_back_days</code> are omitted, this parameter's default value is used.  <br /><br /><b>Default: </b> 7 <br /><br /><b>Range: </b> 1-90 (inclusive)
		 * @param {string} date_range Specifies the range of task creation dates used to filter the results. The results are filtered to include only tasks with a creation date that is equal to this date or is within specified range. <p> <span class="tablenote"><strong>Note:</strong> Maximum date range window size is 90 days.</span></p><br /><b>Valid Format (UTC): </b><code>yyyy-MM-ddThh:mm:ss.SSSZ..yyyy-MM-ddThh:mm:ss.SSSZ</code><br /><br />For example: Tasks created on March 31, 2021<br /> <code>2021-03-31T00:00:00.000Z..2021-03-31T00:00:00.000Z</code><br /><br />
		 * @param {string} limit The maximum number of tasks that can be returned on each page of the paginated response. Use this parameter in conjunction with the <strong>offset</strong> parameter to control the pagination of the output. <p> <span class="tablenote"><strong>Note:</strong> This feature employs a zero-based list, where the first item in the list has an offset of <code>0</code>.</span></p><p>For example, if <strong>offset</strong> is set to 10 and <strong>limit</strong> is set to 10, the call retrieves tasks 11 thru 20 from the result set.</p><p>If this parameter is omitted, the default value is used. <br /><br /><b>Default: </b> 10 <br /><br /><b>Maximum: </b>500
		 * @param {string} offset The number of tasks to skip in the result set before returning the first task in the paginated response. <p>Combine <strong>offset</strong> with the <strong>limit</strong> query parameter to control the items returned in the response. For example, if you supply an <strong>offset</strong> of <code>0</code> and a <strong>limit</strong> of <code>10</code>, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If <strong>offset</strong> is <code>10</code> and <strong>limit</strong> is <code>20</code>, the first page of the response contains items 11-30 from the complete result set. If this query parameter is not set, the default value is used and the first page of records is returned. <br /><br /><b>Default: </b>0
		 * @return {InventoryTaskCollection} Success
		 */
		GetInventoryTasks(feed_type: string | null | undefined, schedule_id: string | null | undefined, look_back_days: string | null | undefined, date_range: string | null | undefined, limit: string | null | undefined, offset: string | null | undefined): Observable<InventoryTaskCollection> {
			return this.http.get<InventoryTaskCollection>(this.baseUri + 'inventory_task?feed_type=' + (feed_type == null ? '' : encodeURIComponent(feed_type)) + '&schedule_id=' + (schedule_id == null ? '' : encodeURIComponent(schedule_id)) + '&look_back_days=' + (look_back_days == null ? '' : encodeURIComponent(look_back_days)) + '&date_range=' + (date_range == null ? '' : encodeURIComponent(date_range)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)), {});
		}

		/**
		 * This method creates an inventory-related download task for a specified feed type with optional filter criteria. When using this method, specify the <strong>feedType</strong>. <br/><br/>This method returns the location response header containing the <strong>getInventoryTask</strong> call URI to retrieve the inventory task you just created. The URL includes the eBay-assigned task ID, which you can use to reference the inventory task.<br/><br/>To retrieve the status of the task, use the <strong>getInventoryTask</strong> method to retrieve a single task ID or the <strong>getInventoryTasks</strong> method to retrieve multiple task IDs.<p> <span class="tablenote"><strong>Note:</strong> The scope depends on the feed type. An error message results when an unsupported scope or feed type is specified.</span></p>Presently, this method supports Active Inventory Report. The <strong>ActiveInventoryReport</strong> returns a report that contains price and quantity information for all of the active listings for a specific seller. A seller can use this information to maintain their inventory on eBay.
		 * Post inventory_task
		 * @param {CreateInventoryTaskRequest} requestBody The request payload containing the version, feedType, and optional filterCriteria.
		 * @return {void} 
		 */
		CreateInventoryTask(requestBody: CreateInventoryTaskRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'inventory_task', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * This method retrieves the task details and status of the specified inventory-related task. The input is <strong>task_id</strong>.
		 * Get inventory_task/{task_id}
		 * @param {string} task_id The ID of the task. This ID was generated when the task was created by the <strong>createInventoryTask</strong> method
		 * @return {InventoryTask} Success
		 */
		GetInventoryTask(task_id: string): Observable<InventoryTask> {
			return this.http.get<InventoryTask>(this.baseUri + 'inventory_task/' + (task_id == null ? '' : encodeURIComponent(task_id)), {});
		}

		/**
		 * This method returns the details and status for an array of order tasks based on a specified <strong>feed_type</strong> or <strong>schedule_id</strong>. Specifying both <strong>feed_type</strong> and <strong>schedule_id</strong> results in an error. Since schedules are based on feed types, you can specify a schedule (<strong>schedule_id</strong>) that returns the needed <strong>feed_type</strong>.<br /><br />If specifying the <strong>feed_type</strong>, limit which order tasks are returned by specifying filters such as the creation date range or period of time using <strong>look_back_days</strong>. <br /><br />If specifying a <strong>schedule_id</strong>, the schedule template (that the <strong>schedule_id</strong> is based on) determines which order tasks are returned (see <strong>schedule_id</strong> for additional information). Each <strong>schedule_id</strong> applies to one <strong>feed_type</strong>.
		 * Get order_task
		 * @param {string} date_range The order tasks creation date range. This range is used to filter the results. The filtered results are filtered to include only tasks with a creation date that is equal to this date or is within specified range. Only orders less than 90 days old can be retrieved. Do not use with the <strong>look_back_days</strong> parameter. <br /><br /><b>Format: </b>UTC   <br /><br /> <b> For example: </b> <br /><br />Tasks within a range  <br /> <code>yyyy-MM-ddThh:mm:ss.SSSZ..yyyy-MM-ddThh:mm:ss.SSSZ </code> <br /><br /> Tasks created on September 8, 2019<br /> <code>2019-09-08T00:00:00.000Z..2019-09-09T00:00:00.000Z</code><br />
		 * @param {string} feed_type The feed type associated with the task. The only presently supported value is <code>LMS_ORDER_REPORT</code>. Do not use with the <strong>schedule_id</strong> parameter. Since schedules are based on feed types, you can specify a schedule (<strong>schedule_id</strong>) that returns the needed <strong>feed_type</strong>.
		 * @param {string} limit The maximum number of order tasks that can be returned on each page of the paginated response. Use this parameter in conjunction with the <strong>offset</strong> parameter to control the pagination of the output. <p> <span class="tablenote"><strong>Note:</strong> This feature employs a zero-based list, where the first item in the list has an offset of <code>0</code>.</span></p><p>For example, if <strong>offset</strong> is set to 10 and <strong>limit</strong> is set to 10, the call retrieves order tasks 11 thru 20 from the result set.</p><p>If this parameter is omitted, the default value is used.</p><p><b>Default:</b> 10 <p><b>Maximum:</b> 500</p>
		 * @param {string} look_back_days The number of previous days in which to search for tasks. Do not use with the <strong>date_range</strong> parameter. If both <strong>date_range</strong> and <strong>look_back_days</strong> are omitted, this parameter's default value is used.  <br /><br /><b>Default: </b> 7 <br /><br /><b>Range: </b> 1-90 (inclusive)  
		 * @param {string} offset The number of order tasks to skip in the result set before returning the first order in the paginated response. <p>Combine <strong>offset</strong> with the <strong>limit</strong> query parameter to control the items returned in the response. For example, if you supply an <strong>offset</strong> of <code>0</code> and a <strong>limit</strong> of <code>10</code>, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If <strong>offset</strong> is <code>10</code> and <strong>limit</strong> is <code>20</code>, the first page of the response contains items 11-30 from the complete result set. If this query parameter is not set, the default value is used and the first page of records is returned.<br /><br /><b>Default: </b>0
		 * @param {string} schedule_id The schedule ID associated with the order task. A schedule periodically generates a report for the feed type specified by the schedule template (see <strong>scheduleTemplateId</strong> in <strong>createSchedule</strong>). Do not use with the <strong>feed_type</strong> parameter. Since schedules are based on feed types, you can specify a schedule (<strong>schedule_id</strong>) that returns the needed <strong>feed_type</strong>.
		 * @return {OrderTaskCollection} Success
		 */
		GetOrderTasks(date_range: string | null | undefined, feed_type: string | null | undefined, limit: string | null | undefined, look_back_days: string | null | undefined, offset: string | null | undefined, schedule_id: string | null | undefined): Observable<OrderTaskCollection> {
			return this.http.get<OrderTaskCollection>(this.baseUri + 'order_task?date_range=' + (date_range == null ? '' : encodeURIComponent(date_range)) + '&feed_type=' + (feed_type == null ? '' : encodeURIComponent(feed_type)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&look_back_days=' + (look_back_days == null ? '' : encodeURIComponent(look_back_days)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&schedule_id=' + (schedule_id == null ? '' : encodeURIComponent(schedule_id)), {});
		}

		/**
		 * This method creates an order download task with filter criteria for the order report. When using this method, specify the <b> feedType</b>, <b> schemaVersion</b>, and <b> filterCriteria</b> for the report. The method returns the <b> location</b> response header containing the getOrderTask call URI to retrieve the order task you just created. The URL includes the eBay-assigned task ID, which you can use to reference the order task. <br /><br />To retrieve the status of the task, use the <b> getOrderTask</b> method to retrieve a single task ID or the <b>getOrderTasks</b> method to retrieve multiple order task IDs.<p> <span class="tablenote"><strong>Note:</strong> The scope depends on the feed type. An error message results when an unsupported scope or feed type is specified.</span></p><p>The following list contains this method's authorization scope and its corresponding feed type:<ul><li>https://api.ebay.com/oauth/api_scope/sell.fulfillment: LMS_ORDER_REPORT</li></ul> </p><p>For details about how this method is used, see <a href="/api-docs/sell/static/feed/general-feed-tasks.html">General feed types</a> in the Selling Integration Guide. <p> <span class="tablenote"><strong>Note:</strong> At this time, the <strong>createOrderTask</strong> method only supports order creation date filters and not modified order date filters. Do not include the <strong>modifiedDateRange</strong> filter in your request payload.</span></p>
		 * Post order_task
		 * @param {CreateOrderTaskRequest} requestBody description not needed
		 * @return {void} 
		 */
		CreateOrderTask(requestBody: CreateOrderTaskRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'order_task', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * This method retrieves the task details and status of the specified task. The input is <strong>task_id</strong>. <p>For details about how this method is used, see <a href="/api-docs/sell/static/orders/generating-and-retrieving-order-reports.html">Working with Order Feeds</a> in the Selling Integration Guide.  </p>
		 * Get order_task/{task_id}
		 * @param {string} task_id The ID of the task. This ID is generated when the task was created by the <b> createOrderTask</b> method.
		 * @return {OrderTask} Success
		 */
		GetOrderTask(task_id: string): Observable<OrderTask> {
			return this.http.get<OrderTask>(this.baseUri + 'order_task/' + (task_id == null ? '' : encodeURIComponent(task_id)), {});
		}

		/**
		 * This method retrieves an array containing the details and status of all schedules based on the specified <strong>feed_type</strong>. Use this method to find a schedule if you do not know the <strong>schedule_id</strong>.
		 * Get schedule
		 * @param {string} feed_type The <strong>feedType</strong> associated with the schedule.
		 * @param {string} limit The maximum number of schedules that can be returned on each page of the paginated response. Use this parameter in conjunction with the <strong>offset</strong> parameter to control the pagination of the output. <p> <span class="tablenote"><strong>Note:</strong> This feature employs a zero-based list, where the first item in the list has an offset of <code>0</code>.</span></p><p>For example, if <strong>offset</strong> is set to 10 and <strong>limit</strong> is set to 10, the call retrieves schedules 11 thru 20 from the result set.</p><p>If this parameter is omitted, the default value is used. <br /><br /><b>Default: </b> 10 <br /><br /><b>Maximum: </b>500
		 * @param {string} offset The number of schedules to skip in the result set before returning the first schedule in the paginated response. <p>Combine <strong>offset</strong> with the <strong>limit</strong> query parameter to control the items returned in the response. For example, if you supply an <strong>offset</strong> of <code>0</code> and a <strong>limit</strong> of <code>10</code>, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If <strong>offset</strong> is <code>10</code> and <strong>limit</strong> is <code>20</code>, the first page of the response contains items 11-30 from the complete result set. If this query parameter is not set, the default value is used and the first page of records is returned.<br /><br /><b>Default: </b>0
		 * @return {UserScheduleCollection} Success
		 */
		GetSchedules(feed_type: string, limit: string | null | undefined, offset: string | null | undefined): Observable<UserScheduleCollection> {
			return this.http.get<UserScheduleCollection>(this.baseUri + 'schedule?feed_type=' + (feed_type == null ? '' : encodeURIComponent(feed_type)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)), {});
		}

		/**
		 * This method creates a schedule, which is a subscription to the specified schedule template. A schedule periodically generates a report for the <strong>feedType</strong> specified by the template. Specify the same <strong>feedType</strong> as the <strong>feedType</strong> of the associated schedule template. When creating the schedule, if available from the template, you can specify a preferred trigger hour, day of the week, or day of the month. These and other fields are conditionally available as specified by the template.<p> <span class="tablenote"><strong>Note:</strong> Make sure to include all fields required by the schedule template (<strong>scheduleTemplateId</strong>). Call the <strong>getScheduleTemplate</strong> method (or the <strong>getScheduleTemplates</strong> method), to find out which fields are required or optional. If a field is optional and a default value is provided by the template, the default value will be used if omitted from the payload.</span></p>A successful call returns the location response header containing the <strong>getSchedule</strong> call URI to retrieve the schedule you just created. The URL includes the eBay-assigned schedule ID, which you can use to reference the schedule task. <br /><br />To retrieve the details of the create schedule task, use the <strong>getSchedule</strong> method for a single schedule ID or the <strong>getSchedules</strong> method to retrieve all schedule details for the specified <strong>feed_type</strong>. The number of schedules for each feedType is limited. Error code 160031 is returned when you have reached this maximum.<p> <span class="tablenote"><strong>Note:</strong> Except for schedules with a HALF-HOUR frequency, all schedules will ideally run at the start of each hour ('00' minutes). Actual start time may vary time may vary due to load and other factors.</span></p>
		 * Post schedule
		 * @param {CreateUserScheduleRequest} requestBody In the request payload: <strong>feedType</strong> and <strong>scheduleTemplateId</strong> are required; <strong>scheduleName</strong> is optional; <strong>preferredTriggerHour</strong>, <strong>preferredTriggerDayOfWeek</strong>, <strong>preferredTriggerDayOfMonth</strong>, <strong>scheduleStartDate</strong>, <strong>scheduleEndDate</strong>, and <strong>schemaVersion</strong> are conditional.
		 * @return {void} 
		 */
		CreateSchedule(requestBody: CreateUserScheduleRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'schedule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * This method deletes an existing schedule. Specify the schedule to delete using the <strong>schedule_id</strong> path parameter.
		 * Delete schedule/{schedule_id}
		 * @param {string} schedule_id The <strong>schedule_id</strong> of the schedule to delete. This ID was generated when the task was created. If you do not know the schedule_id, use the <strong>getSchedules</strong> method to return all schedules based on a specified feed_type and find the schedule_id of the schedule to delete.
		 * @return {void} 
		 */
		DeleteSchedule(schedule_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'schedule/' + (schedule_id == null ? '' : encodeURIComponent(schedule_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * This method retrieves schedule details and status of the specified schedule. Specify the schedule to retrieve using the <strong>schedule_id</strong>. Use the <strong>getSchedules</strong> method to find a schedule if you do not know the <strong>schedule_id</strong>.
		 * Get schedule/{schedule_id}
		 * @param {string} schedule_id The ID of the schedule for which to retrieve the details. This ID is generated when the schedule was created by the <strong>createSchedule</strong> method.
		 * @return {UserScheduleResponse} Success
		 */
		GetSchedule(schedule_id: string): Observable<UserScheduleResponse> {
			return this.http.get<UserScheduleResponse>(this.baseUri + 'schedule/' + (schedule_id == null ? '' : encodeURIComponent(schedule_id)), {});
		}

		/**
		 * This method updates an existing schedule. Specify the schedule to update using the <strong>schedule_id</strong> path parameter. If the schedule template has changed after the schedule was created or updated, the input will be validated using the changed template.<p> <span class="tablenote"><strong>Note:</strong> Make sure to include all fields required by the schedule template (<strong>scheduleTemplateId</strong>). Call the <strong>getScheduleTemplate</strong> method (or the <strong>getScheduleTemplates</strong> method), to find out which fields are required or optional. If you do not know the <strong>scheduleTemplateId</strong>, call the <strong>getSchedule</strong> method to find out.</span></p>
		 * Put schedule/{schedule_id}
		 * @param {string} schedule_id The ID of the schedule to update. This ID is generated when the schedule was created by the <strong>createSchedule</strong> method.
		 * @param {UpdateUserScheduleRequest} requestBody In the request payload: <strong>scheduleName</strong> is optional; <strong>preferredTriggerHour</strong>, <strong>preferredTriggerDayOfWeek</strong>, <strong>preferredTriggerDayOfMonth</strong>, <strong>scheduleStartDate</strong>, <strong>scheduleEndDate</strong>, and <strong>schemaVersion</strong> are conditional.
		 * @return {void} 
		 */
		UpdateSchedule(schedule_id: string, requestBody: UpdateUserScheduleRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'schedule/' + (schedule_id == null ? '' : encodeURIComponent(schedule_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * This method downloads the latest result file generated by the schedule. The response of this call is a compressed or uncompressed CSV, XML, or JSON file, with the applicable file extension (for example: csv.gz). Specify the <strong>schedule_id</strong> path parameter to download its last generated file.
		 * Get schedule/{schedule_id}/download_result_file
		 * @param {string} schedule_id The ID of the schedule for which to retrieve the latest result file. This ID is generated when the schedule was created by the <strong>createSchedule</strong> method.
		 * @return {void} Success
		 */
		GetLatestResultFile(schedule_id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'schedule/' + (schedule_id == null ? '' : encodeURIComponent(schedule_id)) + '/download_result_file', { observe: 'response', responseType: 'text' });
		}

		/**
		 * This method retrieves an array containing the details and status of all schedule templates based on the specified <strong>feed_type</strong>. Use this method to find a schedule template if you do not know the <strong>schedule_template_id</strong>.
		 * Get schedule_template
		 * @param {string} feed_type The feed type of the schedule templates to retrieve.
		 * @param {string} limit The maximum number of schedule templates that can be returned on each page of the paginated response. Use this parameter in conjunction with the <strong>offset</strong> parameter to control the pagination of the output. <p> <span class="tablenote"><strong>Note:</strong> This feature employs a zero-based list, where the first item in the list has an offset of <code>0</code>.</span></p><p>For example, if <strong>offset</strong> is set to 10 and <strong>limit</strong> is set to 10, the call retrieves schedule templates 11 thru 20 from the result set.</p><p>If this parameter is omitted, the default value is used. <br /><br /><b>Default: </b> 10 <br /><br /><b>Maximum: </b>500
		 * @param {string} offset The number of schedule templates to skip in the result set before returning the first template in the paginated response. <p>Combine <strong>offset</strong> with the <strong>limit</strong> query parameter to control the items returned in the response. For example, if you supply an <strong>offset</strong> of <code>0</code> and a <strong>limit</strong> of <code>10</code>, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If <strong>offset</strong> is <code>10</code> and <strong>limit</strong> is <code>20</code>, the first page of the response contains items 11-30 from the complete result set. If this query parameter is not set, the default value is used and the first page of records is returned.<br /><br /><b>Default: </b>0
		 * @return {ScheduleTemplateCollection} Success
		 */
		GetScheduleTemplates(feed_type: string, limit: string | null | undefined, offset: string | null | undefined): Observable<ScheduleTemplateCollection> {
			return this.http.get<ScheduleTemplateCollection>(this.baseUri + 'schedule_template?feed_type=' + (feed_type == null ? '' : encodeURIComponent(feed_type)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)), {});
		}

		/**
		 * This method retrieves the details of the specified template. Specify the template to retrieve using the <strong>schedule_template_id</strong> path parameter. Use the <strong>getScheduleTemplates</strong> method to find a schedule template if you do not know the <strong>schedule_template_id</strong>.
		 * Get schedule_template/{schedule_template_id}
		 * @param {string} schedule_template_id The ID of the template to retrieve. If you do not know the <strong>schedule_template_id</strong>, refer to the documentation or use the <strong>getScheduleTemplates</strong> method to find the available schedule templates.
		 * @return {ScheduleTemplateResponse} Success
		 */
		GetScheduleTemplate(schedule_template_id: string): Observable<ScheduleTemplateResponse> {
			return this.http.get<ScheduleTemplateResponse>(this.baseUri + 'schedule_template/' + (schedule_template_id == null ? '' : encodeURIComponent(schedule_template_id)), {});
		}

		/**
		 * This method returns the details and status for an array of tasks based on a specified <strong>feed_type</strong> or <strong>scheduledId</strong>. Specifying both <strong>feed_type</strong> and <strong>scheduledId</strong> results in an error. Since schedules are based on feed types, you can specify a schedule (<strong>schedule_id</strong>) that returns the needed <strong>feed_type</strong>.<br /><br />If specifying the <strong>feed_type</strong>, limit which tasks are returned by specifying filters, such as the creation date range or period of time using <strong>look_back_days</strong>. Also, by specifying the <strong>feed_type</strong>, both on-demand and scheduled reports are returned.<br /><br />If specifying a <strong>scheduledId</strong>, the schedule template (that the schedule ID is based on) determines which tasks are returned (see <strong>schedule_id</strong> for additional information). Each <strong>scheduledId</strong> applies to one <strong>feed_type</strong>.
		 * Get task
		 * @param {string} date_range Specifies the range of task creation dates used to filter the results. The results are filtered to include only tasks with a creation date that is equal to this date or is within specified range. Only tasks that are less than 90 days can be retrieved. <p> <span class="tablenote"><strong>Note:</strong> Maximum date range window size is 90 days.</span></p> <br /><b>Valid Format (UTC):</b><code>yyyy-MM-ddThh:mm:ss.SSSZ..yyyy-MM-ddThh:mm:ss.SSSZ </code><br /><br />For example: Tasks created on September 8, 2019<br /> <code>2019-09-08T00:00:00.000Z..2019-09-09T00:00:00.000Z</code>
		 * @param {string} feed_type The feed type associated with the tasks to be returned. Only use a <strong>feedType</strong> that is available for your API: <ul><li>Order Feeds: <code>LMS_ORDER_ACK, LMS_ORDER_REPORT</code></li><li>Large Merchant Services (LMS) Feeds: See <a href="/api-docs/sell/static/feed/lms-feeds-quick-reference.html#Availabl" target="_blank">Available FeedTypes</a></li></ul><br/>Do not use with the <strong>schedule_id</strong> parameter. Since schedules are based on feed types, you can specify a schedule (<strong>schedule_id</strong>) that returns the needed <strong>feed_type</strong>.
		 * @param {string} limit The maximum number of tasks that can be returned on each page of the paginated response. Use this parameter in conjunction with the <strong>offset</strong> parameter to control the pagination of the output. <p> <span class="tablenote"><strong>Note:</strong> This feature employs a zero-based list, where the first item in the list has an offset of <code>0</code>.</span></p><p>For example, if <strong>offset</strong> is set to 10 and <strong>limit</strong> is set to 10, the call retrieves tasks 11 thru 20 from the result set.</p><p>If this parameter is omitted, the default value is used. <br /><br /><b>Default: </b> 10 <br /><br /><b>Maximum: </b>500
		 * @param {string} look_back_days The number of previous days in which to search for tasks. Do not use with the <code>date_range</code> parameter. If both <code>date_range</code> and <code>look_back_days</code> are omitted, this parameter's default value is used.  <br /><br /><b>Default: </b> 7 <br /><br /><b>Range: </b> 1-90 (inclusive)
		 * @param {string} offset The number of tasks to skip in the result set before returning the first task in the paginated response. <p>Combine <strong>offset</strong> with the <strong>limit</strong> query parameter to control the items returned in the response. For example, if you supply an <strong>offset</strong> of <code>0</code> and a <strong>limit</strong> of <code>10</code>, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If <strong>offset</strong> is <code>10</code> and <strong>limit</strong> is <code>20</code>, the first page of the response contains items 11-30 from the complete result set. If this query parameter is not set, the default value is used and the first page of records is returned. <br /><br /><b>Default: </b>0
		 * @param {string} schedule_id The schedule ID associated with the task. A schedule periodically generates a report for the feed type specified by the schedule template (see <strong>scheduleTemplateId</strong> in <strong>createSchedule</strong>). Do not use with the <strong>feed_type</strong> parameter. Since schedules are based on feed types, you can specify a schedule (<strong>schedule_id</strong>) that returns the needed <strong>feed_type</strong>.
		 * @return {TaskCollection} Success
		 */
		GetTasks(date_range: string | null | undefined, feed_type: string | null | undefined, limit: string | null | undefined, look_back_days: string | null | undefined, offset: string | null | undefined, schedule_id: string | null | undefined): Observable<TaskCollection> {
			return this.http.get<TaskCollection>(this.baseUri + 'task?date_range=' + (date_range == null ? '' : encodeURIComponent(date_range)) + '&feed_type=' + (feed_type == null ? '' : encodeURIComponent(feed_type)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&look_back_days=' + (look_back_days == null ? '' : encodeURIComponent(look_back_days)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&schedule_id=' + (schedule_id == null ? '' : encodeURIComponent(schedule_id)), {});
		}

		/**
		 * This method creates an upload task or a download task without filter criteria. When using this method, specify the <b> feedType</b> and the feed file <b> schemaVersion</b>. The feed type specified sets the task as a download or an upload task.  <p>For details about the upload and download flows, see <a href="/api-docs/sell/static/orders/generating-and-retrieving-order-reports.html">Working with Order Feeds</a> in the Selling Integration Guide.</p><p> <span class="tablenote"><strong>Note:</strong> The scope depends on the feed type. An error message results when an unsupported scope or feed type is specified.</span></p><p>The following list contains this method's authorization scopes and their corresponding feed types:</p><ul><li>https://api.ebay.com/oauth/api_scope/sell.inventory: See <a href="/api-docs/sell/static/feed/lms-feeds-quick-reference.html#Availabl" target="_blank">LMS FeedTypes</a></li><li>https://api.ebay.com/oauth/api_scope/sell.fulfillment: LMS_ORDER_ACK (specify for upload tasks). Also see <a href="/api-docs/sell/static/feed/lms-feeds-quick-reference.html#Availabl" target="_blank">LMS FeedTypes</a></li><li>https://api.ebay.com/oauth/api_scope/sell.marketing: None*</li><li>https://api.ebay.com/oauth/api_scope/commerce.catalog.readonly: None*</li></ul><p>* Reserved for future release</p>
		 * Post task
		 * @param {CreateTaskRequest} requestBody description not needed
		 * @return {void} 
		 */
		CreateTask(requestBody: CreateTaskRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'task', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * This method retrieves the details and status of the specified task. The input is <strong>task_id</strong>. <br /><br />For details of how this method is used, see <a href="/api-docs/sell/static/orders/generating-and-retrieving-order-reports.html">Working with Order Feeds</a> in the Selling Integration Guide.
		 * Get task/{task_id}
		 * @param {string} task_id The ID of the task. This ID was generated when the task was created.
		 * @return {Task} Success
		 */
		GetTask(task_id: string): Observable<Task> {
			return this.http.get<Task>(this.baseUri + 'task/' + (task_id == null ? '' : encodeURIComponent(task_id)), {});
		}

		/**
		 * This method downloads the file previously uploaded using <strong>uploadFile</strong>. Specify the task_id from the <strong>uploadFile</strong> call. <p><span class="tablenote"><strong>Note:</strong> With respect to LMS, this method applies to all feed types except <code>LMS_ORDER_REPORT</code> and <code>LMS_ACTIVE_INVENTORY_REPORT</code>. See <a href="/api-docs/sell/static/feed/lms-feeds.html">LMS API Feeds</a> in the Selling Integration Guide.</span></p>
		 * Get task/{task_id}/download_input_file
		 * @param {string} task_id The task ID associated with the file to be downloaded.
		 * @return {void} Success
		 */
		GetInputFile(task_id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'task/' + (task_id == null ? '' : encodeURIComponent(task_id)) + '/download_input_file', { observe: 'response', responseType: 'text' });
		}

		/**
		 * This method retrieves the generated file that is associated with the specified task ID. The response of this call is a compressed or uncompressed CSV, XML, or JSON file, with the applicable file extension (for example: csv.gz). <p>For details about how this method is used, see <a href="/api-docs/sell/static/orders/generating-and-retrieving-order-reports.html">Working with Order Feeds</a> in the Selling Integration Guide. </p><p><span class="tablenote"><strong>Note:</strong> The status of the task to retrieve must be in the COMPLETED or COMPLETED_WITH_ERROR state before this method can retrieve the file. You can use the getTask or getTasks method to retrieve the status of the task.</span></p>
		 * Get task/{task_id}/download_result_file
		 * @param {string} task_id The ID of the task associated with the file you want to download. This ID was generated when the task was created.
		 * @return {void} Success
		 */
		GetResultFile(task_id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'task/' + (task_id == null ? '' : encodeURIComponent(task_id)) + '/download_result_file', { observe: 'response', responseType: 'text' });
		}
	}

}

