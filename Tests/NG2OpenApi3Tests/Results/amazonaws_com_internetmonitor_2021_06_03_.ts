import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateMonitorOutput {

		/** Required */
		Arn: string;

		/** Required */
		Status: MonitorConfigState;
	}
	export interface CreateMonitorOutputFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<MonitorConfigState | null | undefined>,
	}
	export function CreateCreateMonitorOutputFormGroup() {
		return new FormGroup<CreateMonitorOutputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<MonitorConfigState | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MonitorConfigState { PENDING = 0, ACTIVE = 1, INACTIVE = 2, ERROR = 3 }


	/** The configuration for publishing Amazon CloudWatch Internet Monitor internet measurements to Amazon S3. The configuration includes the bucket name and (optionally) prefix for the S3 bucket to store the measurements, and the delivery status. The delivery status is <code>ENABLED</code> or <code>DISABLED</code>, depending on whether you choose to deliver internet measurements to S3 logs. */
	export interface S3Config {
		BucketName?: string;
		BucketPrefix?: string;
		LogDeliveryStatus?: LogDeliveryStatus;
	}

	/** The configuration for publishing Amazon CloudWatch Internet Monitor internet measurements to Amazon S3. The configuration includes the bucket name and (optionally) prefix for the S3 bucket to store the measurements, and the delivery status. The delivery status is <code>ENABLED</code> or <code>DISABLED</code>, depending on whether you choose to deliver internet measurements to S3 logs. */
	export interface S3ConfigFormProperties {
		BucketName: FormControl<string | null | undefined>,
		BucketPrefix: FormControl<string | null | undefined>,
		LogDeliveryStatus: FormControl<LogDeliveryStatus | null | undefined>,
	}
	export function CreateS3ConfigFormGroup() {
		return new FormGroup<S3ConfigFormProperties>({
			BucketName: new FormControl<string | null | undefined>(undefined),
			BucketPrefix: new FormControl<string | null | undefined>(undefined),
			LogDeliveryStatus: new FormControl<LogDeliveryStatus | null | undefined>(undefined),
		});

	}

	export enum LogDeliveryStatus { ENABLED = 0, DISABLED = 1 }


	/** <p>A complex type with the configuration information that determines the threshold and other conditions for when Internet Monitor creates a health event for a local performance or availability issue, when scores cross a threshold for one or more city-networks.</p> <p>Defines the percentages, for performance scores or availability scores, that are the local thresholds for when Amazon CloudWatch Internet Monitor creates a health event. Also defines whether a local threshold is enabled or disabled, and the minimum percentage of overall traffic that must be impacted by an issue before Internet Monitor creates an event when a threshold is crossed for a local health score.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-overview.html#IMUpdateThresholdFromOverview"> Change health event thresholds</a> in the Internet Monitor section of the <i>CloudWatch User Guide</i>.</p> */
	export interface LocalHealthEventsConfig {
		Status?: LogDeliveryStatus;
		HealthScoreThreshold?: number | null;
		MinTrafficImpact?: number | null;
	}

	/** <p>A complex type with the configuration information that determines the threshold and other conditions for when Internet Monitor creates a health event for a local performance or availability issue, when scores cross a threshold for one or more city-networks.</p> <p>Defines the percentages, for performance scores or availability scores, that are the local thresholds for when Amazon CloudWatch Internet Monitor creates a health event. Also defines whether a local threshold is enabled or disabled, and the minimum percentage of overall traffic that must be impacted by an issue before Internet Monitor creates an event when a threshold is crossed for a local health score.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-overview.html#IMUpdateThresholdFromOverview"> Change health event thresholds</a> in the Internet Monitor section of the <i>CloudWatch User Guide</i>.</p> */
	export interface LocalHealthEventsConfigFormProperties {
		Status: FormControl<LogDeliveryStatus | null | undefined>,
		HealthScoreThreshold: FormControl<number | null | undefined>,
		MinTrafficImpact: FormControl<number | null | undefined>,
	}
	export function CreateLocalHealthEventsConfigFormGroup() {
		return new FormGroup<LocalHealthEventsConfigFormProperties>({
			Status: new FormControl<LogDeliveryStatus | null | undefined>(undefined),
			HealthScoreThreshold: new FormControl<number | null | undefined>(undefined),
			MinTrafficImpact: new FormControl<number | null | undefined>(undefined),
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

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
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

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
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

	export interface DeleteMonitorOutput {
	}
	export interface DeleteMonitorOutputFormProperties {
	}
	export function CreateDeleteMonitorOutputFormGroup() {
		return new FormGroup<DeleteMonitorOutputFormProperties>({
		});

	}

	export interface GetHealthEventOutput {

		/** Required */
		EventArn: string;

		/** Required */
		EventId: string;

		/** Required */
		StartedAt: Date;
		EndedAt?: Date;
		CreatedAt?: Date;

		/** Required */
		LastUpdatedAt: Date;

		/** Required */
		ImpactedLocations: Array<ImpactedLocation>;

		/** Required */
		Status: HealthEventStatus;
		PercentOfTotalTrafficImpacted?: number | null;

		/** Required */
		ImpactType: HealthEventImpactType;
		HealthScoreThreshold?: number | null;
	}
	export interface GetHealthEventOutputFormProperties {

		/** Required */
		EventArn: FormControl<string | null | undefined>,

		/** Required */
		EventId: FormControl<string | null | undefined>,

		/** Required */
		StartedAt: FormControl<Date | null | undefined>,
		EndedAt: FormControl<Date | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,

		/** Required */
		LastUpdatedAt: FormControl<Date | null | undefined>,

		/** Required */
		Status: FormControl<HealthEventStatus | null | undefined>,
		PercentOfTotalTrafficImpacted: FormControl<number | null | undefined>,

		/** Required */
		ImpactType: FormControl<HealthEventImpactType | null | undefined>,
		HealthScoreThreshold: FormControl<number | null | undefined>,
	}
	export function CreateGetHealthEventOutputFormGroup() {
		return new FormGroup<GetHealthEventOutputFormProperties>({
			EventArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EventId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StartedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndedAt: new FormControl<Date | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<HealthEventStatus | null | undefined>(undefined, [Validators.required]),
			PercentOfTotalTrafficImpacted: new FormControl<number | null | undefined>(undefined),
			ImpactType: new FormControl<HealthEventImpactType | null | undefined>(undefined, [Validators.required]),
			HealthScoreThreshold: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>Information about a location impacted by a health event in Amazon CloudWatch Internet Monitor.</p> <p>Geographic regions are hierarchically categorized into country, subdivision, metro and city geographic granularities. The geographic region is identified based on the IP address used at the client locations.</p> */
	export interface ImpactedLocation {

		/** Required */
		ASName: string;

		/** Required */
		ASNumber: number;

		/** Required */
		Country: string;
		Subdivision?: string;
		Metro?: string;
		City?: string;
		Latitude?: number | null;
		Longitude?: number | null;
		CountryCode?: string;
		SubdivisionCode?: string;
		ServiceLocation?: string;

		/** Required */
		Status: HealthEventStatus;
		CausedBy?: NetworkImpairment;
		InternetHealth?: InternetHealth;
	}

	/** <p>Information about a location impacted by a health event in Amazon CloudWatch Internet Monitor.</p> <p>Geographic regions are hierarchically categorized into country, subdivision, metro and city geographic granularities. The geographic region is identified based on the IP address used at the client locations.</p> */
	export interface ImpactedLocationFormProperties {

		/** Required */
		ASName: FormControl<string | null | undefined>,

		/** Required */
		ASNumber: FormControl<number | null | undefined>,

		/** Required */
		Country: FormControl<string | null | undefined>,
		Subdivision: FormControl<string | null | undefined>,
		Metro: FormControl<string | null | undefined>,
		City: FormControl<string | null | undefined>,
		Latitude: FormControl<number | null | undefined>,
		Longitude: FormControl<number | null | undefined>,
		CountryCode: FormControl<string | null | undefined>,
		SubdivisionCode: FormControl<string | null | undefined>,
		ServiceLocation: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<HealthEventStatus | null | undefined>,
	}
	export function CreateImpactedLocationFormGroup() {
		return new FormGroup<ImpactedLocationFormProperties>({
			ASName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ASNumber: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Subdivision: new FormControl<string | null | undefined>(undefined),
			Metro: new FormControl<string | null | undefined>(undefined),
			City: new FormControl<string | null | undefined>(undefined),
			Latitude: new FormControl<number | null | undefined>(undefined),
			Longitude: new FormControl<number | null | undefined>(undefined),
			CountryCode: new FormControl<string | null | undefined>(undefined),
			SubdivisionCode: new FormControl<string | null | undefined>(undefined),
			ServiceLocation: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<HealthEventStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum HealthEventStatus { ACTIVE = 0, RESOLVED = 1 }


	/** Information about the network impairment for a specific network measured by Amazon CloudWatch Internet Monitor. */
	export interface NetworkImpairment {

		/** Required */
		Networks: Array<Network>;

		/** Required */
		AsPath: Array<Network>;

		/** Required */
		NetworkEventType: TriangulationEventType;
	}

	/** Information about the network impairment for a specific network measured by Amazon CloudWatch Internet Monitor. */
	export interface NetworkImpairmentFormProperties {

		/** Required */
		NetworkEventType: FormControl<TriangulationEventType | null | undefined>,
	}
	export function CreateNetworkImpairmentFormGroup() {
		return new FormGroup<NetworkImpairmentFormProperties>({
			NetworkEventType: new FormControl<TriangulationEventType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An internet service provider (ISP) or network in Amazon CloudWatch Internet Monitor. */
	export interface Network {

		/** Required */
		ASName: string;

		/** Required */
		ASNumber: number;
	}

	/** An internet service provider (ISP) or network in Amazon CloudWatch Internet Monitor. */
	export interface NetworkFormProperties {

		/** Required */
		ASName: FormControl<string | null | undefined>,

		/** Required */
		ASNumber: FormControl<number | null | undefined>,
	}
	export function CreateNetworkFormGroup() {
		return new FormGroup<NetworkFormProperties>({
			ASName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ASNumber: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TriangulationEventType { AWS = 0, Internet = 1 }


	/** Internet health includes measurements calculated by Amazon CloudWatch Internet Monitor about the performance and availability for your application on the internet. Amazon Web Services has substantial historical data about internet performance and availability between Amazon Web Services services and different network providers and geographies. By applying statistical analysis to the data, Internet Monitor can detect when the performance and availability for your application has dropped, compared to an estimated baseline that's already calculated. To make it easier to see those drops, Internet Monitor reports the information to you in the form of health scores: a performance score and an availability score. */
	export interface InternetHealth {
		Availability?: AvailabilityMeasurement;
		Performance?: PerformanceMeasurement;
	}

	/** Internet health includes measurements calculated by Amazon CloudWatch Internet Monitor about the performance and availability for your application on the internet. Amazon Web Services has substantial historical data about internet performance and availability between Amazon Web Services services and different network providers and geographies. By applying statistical analysis to the data, Internet Monitor can detect when the performance and availability for your application has dropped, compared to an estimated baseline that's already calculated. To make it easier to see those drops, Internet Monitor reports the information to you in the form of health scores: a performance score and an availability score. */
	export interface InternetHealthFormProperties {
	}
	export function CreateInternetHealthFormGroup() {
		return new FormGroup<InternetHealthFormProperties>({
		});

	}


	/** <p>Amazon CloudWatch Internet Monitor calculates measurements about the availability for your application's internet traffic between client locations and Amazon Web Services. Amazon Web Services has substantial historical data about internet performance and availability between Amazon Web Services services and different network providers and geographies. By applying statistical analysis to the data, Internet Monitor can detect when the performance and availability for your application has dropped, compared to an estimated baseline that's already calculated. To make it easier to see those drops, we report that information to you in the form of health scores: a performance score and an availability score.</p> <p>Availability in Internet Monitor represents the estimated percentage of traffic that is not seeing an availability drop. For example, an availability score of 99% for an end user and service location pair is equivalent to 1% of the traffic experiencing an availability drop for that pair.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-inside-internet-monitor.html#IMExperienceScores">How Internet Monitor calculates performance and availability scores</a> in the Amazon CloudWatch Internet Monitor section of the <i>Amazon CloudWatch User Guide</i>.</p> */
	export interface AvailabilityMeasurement {
		ExperienceScore?: number | null;
		PercentOfTotalTrafficImpacted?: number | null;
		PercentOfClientLocationImpacted?: number | null;
	}

	/** <p>Amazon CloudWatch Internet Monitor calculates measurements about the availability for your application's internet traffic between client locations and Amazon Web Services. Amazon Web Services has substantial historical data about internet performance and availability between Amazon Web Services services and different network providers and geographies. By applying statistical analysis to the data, Internet Monitor can detect when the performance and availability for your application has dropped, compared to an estimated baseline that's already calculated. To make it easier to see those drops, we report that information to you in the form of health scores: a performance score and an availability score.</p> <p>Availability in Internet Monitor represents the estimated percentage of traffic that is not seeing an availability drop. For example, an availability score of 99% for an end user and service location pair is equivalent to 1% of the traffic experiencing an availability drop for that pair.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-inside-internet-monitor.html#IMExperienceScores">How Internet Monitor calculates performance and availability scores</a> in the Amazon CloudWatch Internet Monitor section of the <i>Amazon CloudWatch User Guide</i>.</p> */
	export interface AvailabilityMeasurementFormProperties {
		ExperienceScore: FormControl<number | null | undefined>,
		PercentOfTotalTrafficImpacted: FormControl<number | null | undefined>,
		PercentOfClientLocationImpacted: FormControl<number | null | undefined>,
	}
	export function CreateAvailabilityMeasurementFormGroup() {
		return new FormGroup<AvailabilityMeasurementFormProperties>({
			ExperienceScore: new FormControl<number | null | undefined>(undefined),
			PercentOfTotalTrafficImpacted: new FormControl<number | null | undefined>(undefined),
			PercentOfClientLocationImpacted: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>Amazon CloudWatch Internet Monitor calculates measurements about the performance for your application's internet traffic between client locations and Amazon Web Services. Amazon Web Services has substantial historical data about internet performance and availability between Amazon Web Services services and different network providers and geographies. By applying statistical analysis to the data, Internet Monitor can detect when the performance and availability for your application has dropped, compared to an estimated baseline that's already calculated. To make it easier to see those drops, we report that information to you in the form of health scores: a performance score and an availability score.</p> <p>Performance in Internet Monitor represents the estimated percentage of traffic that is not seeing a performance drop. For example, a performance score of 99% for an end user and service location pair is equivalent to 1% of the traffic experiencing a performance drop for that pair.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-inside-internet-monitor.html#IMExperienceScores">How Internet Monitor calculates performance and availability scores</a> in the Amazon CloudWatch Internet Monitor section of the <i>CloudWatch User Guide</i>.</p> */
	export interface PerformanceMeasurement {
		ExperienceScore?: number | null;
		PercentOfTotalTrafficImpacted?: number | null;
		PercentOfClientLocationImpacted?: number | null;
		RoundTripTime?: RoundTripTime;
	}

	/** <p>Amazon CloudWatch Internet Monitor calculates measurements about the performance for your application's internet traffic between client locations and Amazon Web Services. Amazon Web Services has substantial historical data about internet performance and availability between Amazon Web Services services and different network providers and geographies. By applying statistical analysis to the data, Internet Monitor can detect when the performance and availability for your application has dropped, compared to an estimated baseline that's already calculated. To make it easier to see those drops, we report that information to you in the form of health scores: a performance score and an availability score.</p> <p>Performance in Internet Monitor represents the estimated percentage of traffic that is not seeing a performance drop. For example, a performance score of 99% for an end user and service location pair is equivalent to 1% of the traffic experiencing a performance drop for that pair.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-inside-internet-monitor.html#IMExperienceScores">How Internet Monitor calculates performance and availability scores</a> in the Amazon CloudWatch Internet Monitor section of the <i>CloudWatch User Guide</i>.</p> */
	export interface PerformanceMeasurementFormProperties {
		ExperienceScore: FormControl<number | null | undefined>,
		PercentOfTotalTrafficImpacted: FormControl<number | null | undefined>,
		PercentOfClientLocationImpacted: FormControl<number | null | undefined>,
	}
	export function CreatePerformanceMeasurementFormGroup() {
		return new FormGroup<PerformanceMeasurementFormProperties>({
			ExperienceScore: new FormControl<number | null | undefined>(undefined),
			PercentOfTotalTrafficImpacted: new FormControl<number | null | undefined>(undefined),
			PercentOfClientLocationImpacted: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Round-trip time (RTT) is how long it takes for a request from the user to return a response to the user. Amazon CloudWatch Internet Monitor calculates RTT at different percentiles: p50, p90, and p95. */
	export interface RoundTripTime {
		P50?: number | null;
		P90?: number | null;
		P95?: number | null;
	}

	/** Round-trip time (RTT) is how long it takes for a request from the user to return a response to the user. Amazon CloudWatch Internet Monitor calculates RTT at different percentiles: p50, p90, and p95. */
	export interface RoundTripTimeFormProperties {
		P50: FormControl<number | null | undefined>,
		P90: FormControl<number | null | undefined>,
		P95: FormControl<number | null | undefined>,
	}
	export function CreateRoundTripTimeFormGroup() {
		return new FormGroup<RoundTripTimeFormProperties>({
			P50: new FormControl<number | null | undefined>(undefined),
			P90: new FormControl<number | null | undefined>(undefined),
			P95: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum HealthEventImpactType { AVAILABILITY = 0, PERFORMANCE = 1, LOCAL_AVAILABILITY = 2, LOCAL_PERFORMANCE = 3 }

	export interface GetMonitorOutput {

		/** Required */
		MonitorName: string;

		/** Required */
		MonitorArn: string;

		/** Required */
		Resources: Array<string>;

		/** Required */
		Status: MonitorConfigState;

		/** Required */
		CreatedAt: Date;

		/** Required */
		ModifiedAt: Date;
		ProcessingStatus?: MonitorProcessingStatusCode;
		ProcessingStatusInfo?: string;
		Tags?: TagMap;
		MaxCityNetworksToMonitor?: number | null;
		InternetMeasurementsLogDelivery?: InternetMeasurementsLogDelivery;
		TrafficPercentageToMonitor?: number | null;
		HealthEventsConfig?: HealthEventsConfig;
	}
	export interface GetMonitorOutputFormProperties {

		/** Required */
		MonitorName: FormControl<string | null | undefined>,

		/** Required */
		MonitorArn: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<MonitorConfigState | null | undefined>,

		/** Required */
		CreatedAt: FormControl<Date | null | undefined>,

		/** Required */
		ModifiedAt: FormControl<Date | null | undefined>,
		ProcessingStatus: FormControl<MonitorProcessingStatusCode | null | undefined>,
		ProcessingStatusInfo: FormControl<string | null | undefined>,
		MaxCityNetworksToMonitor: FormControl<number | null | undefined>,
		TrafficPercentageToMonitor: FormControl<number | null | undefined>,
	}
	export function CreateGetMonitorOutputFormGroup() {
		return new FormGroup<GetMonitorOutputFormProperties>({
			MonitorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MonitorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<MonitorConfigState | null | undefined>(undefined, [Validators.required]),
			CreatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ModifiedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ProcessingStatus: new FormControl<MonitorProcessingStatusCode | null | undefined>(undefined),
			ProcessingStatusInfo: new FormControl<string | null | undefined>(undefined),
			MaxCityNetworksToMonitor: new FormControl<number | null | undefined>(undefined),
			TrafficPercentageToMonitor: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum MonitorProcessingStatusCode { OK = 0, INACTIVE = 1, COLLECTING_DATA = 2, INSUFFICIENT_DATA = 3, FAULT_SERVICE = 4, FAULT_ACCESS_CLOUDWATCH = 5 }

	export interface TagMap {
	}
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
		});

	}


	/** Publish internet measurements to an Amazon S3 bucket in addition to CloudWatch Logs. */
	export interface InternetMeasurementsLogDelivery {
		S3Config?: S3Config;
	}

	/** Publish internet measurements to an Amazon S3 bucket in addition to CloudWatch Logs. */
	export interface InternetMeasurementsLogDeliveryFormProperties {
	}
	export function CreateInternetMeasurementsLogDeliveryFormGroup() {
		return new FormGroup<InternetMeasurementsLogDeliveryFormProperties>({
		});

	}


	/** <p>A complex type with the configuration information that determines the threshold and other conditions for when Internet Monitor creates a health event for an overall performance or availability issue, across an application's geographies.</p> <p>Defines the percentages, for overall performance scores and availability scores for an application, that are the thresholds for when Amazon CloudWatch Internet Monitor creates a health event. You can override the defaults to set a custom threshold for overall performance or availability scores, or both.</p> <p>You can also set thresholds for local health scores,, where Internet Monitor creates a health event when scores cross a threshold for one or more city-networks, in addition to creating an event when an overall score crosses a threshold.</p> <p>If you don't set a health event threshold, the default value is 95%.</p> <p>For local thresholds, you also set a minimum percentage of overall traffic that is impacted by an issue before Internet Monitor creates an event. In addition, you can disable local thresholds, for performance scores, availability scores, or both.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-overview.html#IMUpdateThresholdFromOverview"> Change health event thresholds</a> in the Internet Monitor section of the <i>CloudWatch User Guide</i>.</p> */
	export interface HealthEventsConfig {
		AvailabilityScoreThreshold?: number | null;
		PerformanceScoreThreshold?: number | null;
		AvailabilityLocalHealthEventsConfig?: LocalHealthEventsConfig;
		PerformanceLocalHealthEventsConfig?: LocalHealthEventsConfig;
	}

	/** <p>A complex type with the configuration information that determines the threshold and other conditions for when Internet Monitor creates a health event for an overall performance or availability issue, across an application's geographies.</p> <p>Defines the percentages, for overall performance scores and availability scores for an application, that are the thresholds for when Amazon CloudWatch Internet Monitor creates a health event. You can override the defaults to set a custom threshold for overall performance or availability scores, or both.</p> <p>You can also set thresholds for local health scores,, where Internet Monitor creates a health event when scores cross a threshold for one or more city-networks, in addition to creating an event when an overall score crosses a threshold.</p> <p>If you don't set a health event threshold, the default value is 95%.</p> <p>For local thresholds, you also set a minimum percentage of overall traffic that is impacted by an issue before Internet Monitor creates an event. In addition, you can disable local thresholds, for performance scores, availability scores, or both.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-overview.html#IMUpdateThresholdFromOverview"> Change health event thresholds</a> in the Internet Monitor section of the <i>CloudWatch User Guide</i>.</p> */
	export interface HealthEventsConfigFormProperties {
		AvailabilityScoreThreshold: FormControl<number | null | undefined>,
		PerformanceScoreThreshold: FormControl<number | null | undefined>,
	}
	export function CreateHealthEventsConfigFormGroup() {
		return new FormGroup<HealthEventsConfigFormProperties>({
			AvailabilityScoreThreshold: new FormControl<number | null | undefined>(undefined),
			PerformanceScoreThreshold: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListHealthEventsOutput {

		/** Required */
		HealthEvents: Array<HealthEvent>;
		NextToken?: string;
	}
	export interface ListHealthEventsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListHealthEventsOutputFormGroup() {
		return new FormGroup<ListHealthEventsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a health event created in a monitor in Amazon CloudWatch Internet Monitor. */
	export interface HealthEvent {

		/** Required */
		EventArn: string;

		/** Required */
		EventId: string;

		/** Required */
		StartedAt: Date;
		EndedAt?: Date;
		CreatedAt?: Date;

		/** Required */
		LastUpdatedAt: Date;

		/** Required */
		ImpactedLocations: Array<ImpactedLocation>;

		/** Required */
		Status: HealthEventStatus;
		PercentOfTotalTrafficImpacted?: number | null;

		/** Required */
		ImpactType: HealthEventImpactType;
		HealthScoreThreshold?: number | null;
	}

	/** Information about a health event created in a monitor in Amazon CloudWatch Internet Monitor. */
	export interface HealthEventFormProperties {

		/** Required */
		EventArn: FormControl<string | null | undefined>,

		/** Required */
		EventId: FormControl<string | null | undefined>,

		/** Required */
		StartedAt: FormControl<Date | null | undefined>,
		EndedAt: FormControl<Date | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,

		/** Required */
		LastUpdatedAt: FormControl<Date | null | undefined>,

		/** Required */
		Status: FormControl<HealthEventStatus | null | undefined>,
		PercentOfTotalTrafficImpacted: FormControl<number | null | undefined>,

		/** Required */
		ImpactType: FormControl<HealthEventImpactType | null | undefined>,
		HealthScoreThreshold: FormControl<number | null | undefined>,
	}
	export function CreateHealthEventFormGroup() {
		return new FormGroup<HealthEventFormProperties>({
			EventArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EventId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StartedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndedAt: new FormControl<Date | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<HealthEventStatus | null | undefined>(undefined, [Validators.required]),
			PercentOfTotalTrafficImpacted: new FormControl<number | null | undefined>(undefined),
			ImpactType: new FormControl<HealthEventImpactType | null | undefined>(undefined, [Validators.required]),
			HealthScoreThreshold: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListMonitorsOutput {

		/** Required */
		Monitors: Array<Monitor>;
		NextToken?: string;
	}
	export interface ListMonitorsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMonitorsOutputFormGroup() {
		return new FormGroup<ListMonitorsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The description of and information about a monitor in Amazon CloudWatch Internet Monitor.  */
	export interface Monitor {

		/** Required */
		MonitorName: string;

		/** Required */
		MonitorArn: string;

		/** Required */
		Status: MonitorConfigState;
		ProcessingStatus?: MonitorProcessingStatusCode;
	}

	/** The description of and information about a monitor in Amazon CloudWatch Internet Monitor.  */
	export interface MonitorFormProperties {

		/** Required */
		MonitorName: FormControl<string | null | undefined>,

		/** Required */
		MonitorArn: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<MonitorConfigState | null | undefined>,
		ProcessingStatus: FormControl<MonitorProcessingStatusCode | null | undefined>,
	}
	export function CreateMonitorFormGroup() {
		return new FormGroup<MonitorFormProperties>({
			MonitorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MonitorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<MonitorConfigState | null | undefined>(undefined, [Validators.required]),
			ProcessingStatus: new FormControl<MonitorProcessingStatusCode | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceOutput {
		Tags?: TagMap;
	}
	export interface ListTagsForResourceOutputFormProperties {
	}
	export function CreateListTagsForResourceOutputFormGroup() {
		return new FormGroup<ListTagsForResourceOutputFormProperties>({
		});

	}

	export interface TooManyRequestsException {
	}
	export interface TooManyRequestsExceptionFormProperties {
	}
	export function CreateTooManyRequestsExceptionFormGroup() {
		return new FormGroup<TooManyRequestsExceptionFormProperties>({
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

	export interface TagResourceOutput {
	}
	export interface TagResourceOutputFormProperties {
	}
	export function CreateTagResourceOutputFormGroup() {
		return new FormGroup<TagResourceOutputFormProperties>({
		});

	}

	export interface UntagResourceOutput {
	}
	export interface UntagResourceOutputFormProperties {
	}
	export function CreateUntagResourceOutputFormGroup() {
		return new FormGroup<UntagResourceOutputFormProperties>({
		});

	}

	export interface UpdateMonitorOutput {

		/** Required */
		MonitorArn: string;

		/** Required */
		Status: MonitorConfigState;
	}
	export interface UpdateMonitorOutputFormProperties {

		/** Required */
		MonitorArn: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<MonitorConfigState | null | undefined>,
	}
	export function CreateUpdateMonitorOutputFormGroup() {
		return new FormGroup<UpdateMonitorOutputFormProperties>({
			MonitorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<MonitorConfigState | null | undefined>(undefined, [Validators.required]),
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

	export interface CreateMonitorInput {

		/** Required */
		MonitorName: string;
		Resources?: Array<string>;
		ClientToken?: string;
		Tags?: TagMap;
		MaxCityNetworksToMonitor?: number | null;
		InternetMeasurementsLogDelivery?: InternetMeasurementsLogDelivery;
		TrafficPercentageToMonitor?: number | null;
		HealthEventsConfig?: HealthEventsConfig;
	}
	export interface CreateMonitorInputFormProperties {

		/** Required */
		MonitorName: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
		MaxCityNetworksToMonitor: FormControl<number | null | undefined>,
		TrafficPercentageToMonitor: FormControl<number | null | undefined>,
	}
	export function CreateCreateMonitorInputFormGroup() {
		return new FormGroup<CreateMonitorInputFormProperties>({
			MonitorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined),
			MaxCityNetworksToMonitor: new FormControl<number | null | undefined>(undefined),
			TrafficPercentageToMonitor: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeleteMonitorInput {
	}
	export interface DeleteMonitorInputFormProperties {
	}
	export function CreateDeleteMonitorInputFormGroup() {
		return new FormGroup<DeleteMonitorInputFormProperties>({
		});

	}

	export interface GetHealthEventInput {
	}
	export interface GetHealthEventInputFormProperties {
	}
	export function CreateGetHealthEventInputFormGroup() {
		return new FormGroup<GetHealthEventInputFormProperties>({
		});

	}

	export interface GetMonitorInput {
	}
	export interface GetMonitorInputFormProperties {
	}
	export function CreateGetMonitorInputFormGroup() {
		return new FormGroup<GetMonitorInputFormProperties>({
		});

	}

	export interface ListHealthEventsInput {
	}
	export interface ListHealthEventsInputFormProperties {
	}
	export function CreateListHealthEventsInputFormGroup() {
		return new FormGroup<ListHealthEventsInputFormProperties>({
		});

	}

	export interface ListMonitorsInput {
	}
	export interface ListMonitorsInputFormProperties {
	}
	export function CreateListMonitorsInputFormGroup() {
		return new FormGroup<ListMonitorsInputFormProperties>({
		});

	}

	export interface ListTagsForResourceInput {
	}
	export interface ListTagsForResourceInputFormProperties {
	}
	export function CreateListTagsForResourceInputFormGroup() {
		return new FormGroup<ListTagsForResourceInputFormProperties>({
		});

	}

	export enum LocalHealthEventsConfigStatus { ENABLED = 0, DISABLED = 1 }

	export interface TagResourceInput {

		/** Required */
		Tags: TagMap;
	}
	export interface TagResourceInputFormProperties {
	}
	export function CreateTagResourceInputFormGroup() {
		return new FormGroup<TagResourceInputFormProperties>({
		});

	}

	export interface UntagResourceInput {
	}
	export interface UntagResourceInputFormProperties {
	}
	export function CreateUntagResourceInputFormGroup() {
		return new FormGroup<UntagResourceInputFormProperties>({
		});

	}

	export interface UpdateMonitorInput {
		ResourcesToAdd?: Array<string>;
		ResourcesToRemove?: Array<string>;
		Status?: MonitorConfigState;
		ClientToken?: string;
		MaxCityNetworksToMonitor?: number | null;
		InternetMeasurementsLogDelivery?: InternetMeasurementsLogDelivery;
		TrafficPercentageToMonitor?: number | null;
		HealthEventsConfig?: HealthEventsConfig;
	}
	export interface UpdateMonitorInputFormProperties {
		Status: FormControl<MonitorConfigState | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
		MaxCityNetworksToMonitor: FormControl<number | null | undefined>,
		TrafficPercentageToMonitor: FormControl<number | null | undefined>,
	}
	export function CreateUpdateMonitorInputFormGroup() {
		return new FormGroup<UpdateMonitorInputFormProperties>({
			Status: new FormControl<MonitorConfigState | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined),
			MaxCityNetworksToMonitor: new FormControl<number | null | undefined>(undefined),
			TrafficPercentageToMonitor: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates a monitor in Amazon CloudWatch Internet Monitor. A monitor is built based on information from the application resources that you add: VPCs, Network Load Balancers (NLBs), Amazon CloudFront distributions, and Amazon WorkSpaces directories. Internet Monitor then publishes internet measurements from Amazon Web Services that are specific to the <i>city-networks</i>. That is, the locations and ASNs (typically internet service providers or ISPs), where clients access your application. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-InternetMonitor.html">Using Amazon CloudWatch Internet Monitor</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>When you create a monitor, you choose the percentage of traffic that you want to monitor. You can also set a maximum limit for the number of city-networks where client traffic is monitored, that caps the total traffic that Internet Monitor monitors. A city-network maximum is the limit of city-networks, but you only pay for the number of city-networks that are actually monitored. You can update your monitor at any time to change the percentage of traffic to monitor or the city-networks maximum. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/IMCityNetworksMaximum.html">Choosing a city-network maximum value</a> in the <i>Amazon CloudWatch User Guide</i>.</p>
		 * Post v20210603/Monitors
		 * @return {CreateMonitorOutput} Success
		 */
		CreateMonitor(requestBody: CreateMonitorPostBody): Observable<CreateMonitorOutput> {
			return this.http.post<CreateMonitorOutput>(this.baseUri + 'v20210603/Monitors', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all of your monitors for Amazon CloudWatch Internet Monitor and their statuses, along with the Amazon Resource Name (ARN) and name of each monitor.
		 * Get v20210603/Monitors
		 * @param {string} NextToken The token for the next set of results. You receive this token from a previous call.
		 * @param {number} MaxResults The number of monitor objects that you want to return with this call.
		 * @param {string} MonitorStatus <p>The status of a monitor. This includes the status of the data processing for the monitor and the status of the monitor itself.</p> <p>For information about the statuses for a monitor, see <a href="https://docs.aws.amazon.com/internet-monitor/latest/api/API_Monitor.html"> Monitor</a>.</p>
		 * @return {ListMonitorsOutput} Success
		 */
		ListMonitors(NextToken: string | null | undefined, MaxResults: number | null | undefined, MonitorStatus: string | null | undefined): Observable<ListMonitorsOutput> {
			return this.http.get<ListMonitorsOutput>(this.baseUri + 'v20210603/Monitors?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults + '&MonitorStatus=' + (MonitorStatus == null ? '' : encodeURIComponent(MonitorStatus)), {});
		}

		/**
		 * Deletes a monitor in Amazon CloudWatch Internet Monitor.
		 * Delete v20210603/Monitors/{MonitorName}
		 * @param {string} MonitorName The name of the monitor to delete.
		 * @return {DeleteMonitorOutput} Success
		 */
		DeleteMonitor(MonitorName: string): Observable<DeleteMonitorOutput> {
			return this.http.delete<DeleteMonitorOutput>(this.baseUri + 'v20210603/Monitors/' + (MonitorName == null ? '' : encodeURIComponent(MonitorName)), {});
		}

		/**
		 * Gets information about a monitor in Amazon CloudWatch Internet Monitor based on a monitor name. The information returned includes the Amazon Resource Name (ARN), create time, modified time, resources included in the monitor, and status information.
		 * Get v20210603/Monitors/{MonitorName}
		 * @param {string} MonitorName The name of the monitor.
		 * @return {GetMonitorOutput} Success
		 */
		GetMonitor(MonitorName: string): Observable<GetMonitorOutput> {
			return this.http.get<GetMonitorOutput>(this.baseUri + 'v20210603/Monitors/' + (MonitorName == null ? '' : encodeURIComponent(MonitorName)), {});
		}

		/**
		 * <p>Updates a monitor. You can update a monitor to change the percentage of traffic to monitor or the maximum number of city-networks (locations and ASNs), to add or remove resources, or to change the status of the monitor. Note that you can't change the name of a monitor.</p> <p>The city-network maximum that you choose is the limit, but you only pay for the number of city-networks that are actually monitored. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/IMCityNetworksMaximum.html">Choosing a city-network maximum value</a> in the <i>Amazon CloudWatch User Guide</i>.</p>
		 * Patch v20210603/Monitors/{MonitorName}
		 * @param {string} MonitorName The name of the monitor. 
		 * @return {UpdateMonitorOutput} Success
		 */
		UpdateMonitor(MonitorName: string, requestBody: UpdateMonitorPatchBody): Observable<UpdateMonitorOutput> {
			return this.http.patch<UpdateMonitorOutput>(this.baseUri + 'v20210603/Monitors/' + (MonitorName == null ? '' : encodeURIComponent(MonitorName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets information the Amazon CloudWatch Internet Monitor has created and stored about a health event for a specified monitor. This information includes the impacted locations, and all the information related to the event, by location.</p> <p>The information returned includes the impact on performance, availability, and round-trip time, information about the network providers (ASNs), the event type, and so on.</p> <p>Information rolled up at the global traffic level is also returned, including the impact type and total traffic impact.</p>
		 * Get v20210603/Monitors/{MonitorName}/HealthEvents/{EventId}
		 * @param {string} MonitorName The name of the monitor.
		 * @param {string} EventId The internally generated identifier of a health event. Because <code>EventID</code> contains the forward slash (“/”) character, you must URL-encode the <code>EventID</code> field in the request URL.
		 * @return {GetHealthEventOutput} Success
		 */
		GetHealthEvent(MonitorName: string, EventId: string): Observable<GetHealthEventOutput> {
			return this.http.get<GetHealthEventOutput>(this.baseUri + 'v20210603/Monitors/' + (MonitorName == null ? '' : encodeURIComponent(MonitorName)) + '/HealthEvents/' + (EventId == null ? '' : encodeURIComponent(EventId)), {});
		}

		/**
		 * <p>Lists all health events for a monitor in Amazon CloudWatch Internet Monitor. Returns information for health events including the event start and end time and the status.</p> <note> <p>Health events that have start times during the time frame that is requested are not included in the list of health events.</p> </note>
		 * Get v20210603/Monitors/{MonitorName}/HealthEvents
		 * @param {string} MonitorName The name of the monitor.
		 * @param {Date} StartTime The time when a health event started.
		 * @param {Date} EndTime The time when a health event ended. If the health event is still ongoing, then the end time is not set.
		 * @param {string} NextToken The token for the next set of results. You receive this token from a previous call.
		 * @param {number} MaxResults The number of health event objects that you want to return with this call. 
		 * @param {HealthEventStatus} EventStatus The status of a health event.
		 * @return {ListHealthEventsOutput} Success
		 */
		ListHealthEvents(MonitorName: string, StartTime: Date | null | undefined, EndTime: Date | null | undefined, NextToken: string | null | undefined, MaxResults: number | null | undefined, EventStatus: HealthEventStatus | null | undefined): Observable<ListHealthEventsOutput> {
			return this.http.get<ListHealthEventsOutput>(this.baseUri + 'v20210603/Monitors/' + (MonitorName == null ? '' : encodeURIComponent(MonitorName)) + '/HealthEvents&StartTime=' + StartTime?.toISOString() + '&EndTime=' + EndTime?.toISOString() + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults + '&EventStatus=' + EventStatus, {});
		}

		/**
		 * Lists the tags for a resource. Tags are supported only for monitors in Amazon CloudWatch Internet Monitor.
		 * Get tags/{ResourceArn}
		 * @param {string} ResourceArn The Amazon Resource Name (ARN) for a resource.
		 * @return {ListTagsForResourceOutput} Success
		 */
		ListTagsForResource(ResourceArn: string): Observable<ListTagsForResourceOutput> {
			return this.http.get<ListTagsForResourceOutput>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), {});
		}

		/**
		 * <p>Adds a tag to a resource. Tags are supported only for monitors in Amazon CloudWatch Internet Monitor. You can add a maximum of 50 tags in Internet Monitor.</p> <p>A minimum of one tag is required for this call. It returns an error if you use the <code>TagResource</code> request with 0 tags.</p>
		 * Post tags/{ResourceArn}
		 * @param {string} ResourceArn The Amazon Resource Name (ARN) for a tag that you add to a resource. Tags are supported only for monitors in Amazon CloudWatch Internet Monitor.
		 * @return {void} 
		 */
		TagResource(ResourceArn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes a tag from a resource.
		 * Delete tags/{ResourceArn}#tagKeys
		 * @param {string} ResourceArn The Amazon Resource Name (ARN) for a tag you remove a resource from.
		 * @param {Array<string>} tagKeys Tag keys that you remove from a resource.
		 * @return {void} 
		 */
		UntagResource(ResourceArn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}
	}

	export interface CreateMonitorPostBody {

		/**
		 * The name of the monitor.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		MonitorName: string;

		/** <p>The resources to include in a monitor, which you provide as a set of Amazon Resource Names (ARNs). Resources can be VPCs, NLBs, Amazon CloudFront distributions, or Amazon WorkSpaces directories.</p> <p>You can add a combination of VPCs and CloudFront distributions, or you can add WorkSpaces directories, or you can add NLBs. You can't add NLBs or WorkSpaces directories together with any other resources.</p> <note> <p>If you add only Amazon VPC resources, at least one VPC must have an Internet Gateway attached to it, to make sure that it has internet connectivity.</p> </note> */
		Resources?: Array<string>;

		/** A unique, case-sensitive string of up to 64 ASCII characters that you specify to make an idempotent API request. Don't reuse the same client token for other API requests. */
		ClientToken?: string | null;

		/** The tags for a monitor. You can add a maximum of 50 tags in Internet Monitor. */
		Tags?: {[id: string]: string };

		/**
		 * <p>The maximum number of city-networks to monitor for your resources. A city-network is the location (city) where clients access your application resources from and the ASN or network provider, such as an internet service provider (ISP), that clients access the resources through. Setting this limit can help control billing costs.</p> <p>To learn more, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/IMCityNetworksMaximum.html">Choosing a city-network maximum value </a> in the Amazon CloudWatch Internet Monitor section of the <i>CloudWatch User Guide</i>.</p>
		 * Minimum: 1
		 * Maximum: 500000
		 */
		MaxCityNetworksToMonitor?: number | null;

		/** Publish internet measurements to an Amazon S3 bucket in addition to CloudWatch Logs. */
		InternetMeasurementsLogDelivery?: CreateMonitorPostBodyInternetMeasurementsLogDelivery;

		/**
		 * <p>The percentage of the internet-facing traffic for your application that you want to monitor with this monitor. If you set a city-networks maximum, that limit overrides the traffic percentage that you set.</p> <p>To learn more, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/IMTrafficPercentage.html">Choosing an application traffic percentage to monitor </a> in the Amazon CloudWatch Internet Monitor section of the <i>CloudWatch User Guide</i>.</p>
		 * Minimum: 1
		 * Maximum: 100
		 */
		TrafficPercentageToMonitor?: number | null;

		/** <p>A complex type with the configuration information that determines the threshold and other conditions for when Internet Monitor creates a health event for an overall performance or availability issue, across an application's geographies.</p> <p>Defines the percentages, for overall performance scores and availability scores for an application, that are the thresholds for when Amazon CloudWatch Internet Monitor creates a health event. You can override the defaults to set a custom threshold for overall performance or availability scores, or both.</p> <p>You can also set thresholds for local health scores,, where Internet Monitor creates a health event when scores cross a threshold for one or more city-networks, in addition to creating an event when an overall score crosses a threshold.</p> <p>If you don't set a health event threshold, the default value is 95%.</p> <p>For local thresholds, you also set a minimum percentage of overall traffic that is impacted by an issue before Internet Monitor creates an event. In addition, you can disable local thresholds, for performance scores, availability scores, or both.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-overview.html#IMUpdateThresholdFromOverview"> Change health event thresholds</a> in the Internet Monitor section of the <i>CloudWatch User Guide</i>.</p> */
		HealthEventsConfig?: CreateMonitorPostBodyHealthEventsConfig;
	}
	export interface CreateMonitorPostBodyFormProperties {

		/**
		 * The name of the monitor.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		MonitorName: FormControl<string | null | undefined>,

		/** A unique, case-sensitive string of up to 64 ASCII characters that you specify to make an idempotent API request. Don't reuse the same client token for other API requests. */
		ClientToken: FormControl<string | null | undefined>,

		/** The tags for a monitor. You can add a maximum of 50 tags in Internet Monitor. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * <p>The maximum number of city-networks to monitor for your resources. A city-network is the location (city) where clients access your application resources from and the ASN or network provider, such as an internet service provider (ISP), that clients access the resources through. Setting this limit can help control billing costs.</p> <p>To learn more, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/IMCityNetworksMaximum.html">Choosing a city-network maximum value </a> in the Amazon CloudWatch Internet Monitor section of the <i>CloudWatch User Guide</i>.</p>
		 * Minimum: 1
		 * Maximum: 500000
		 */
		MaxCityNetworksToMonitor: FormControl<number | null | undefined>,

		/**
		 * <p>The percentage of the internet-facing traffic for your application that you want to monitor with this monitor. If you set a city-networks maximum, that limit overrides the traffic percentage that you set.</p> <p>To learn more, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/IMTrafficPercentage.html">Choosing an application traffic percentage to monitor </a> in the Amazon CloudWatch Internet Monitor section of the <i>CloudWatch User Guide</i>.</p>
		 * Minimum: 1
		 * Maximum: 100
		 */
		TrafficPercentageToMonitor: FormControl<number | null | undefined>,
	}
	export function CreateCreateMonitorPostBodyFormGroup() {
		return new FormGroup<CreateMonitorPostBodyFormProperties>({
			MonitorName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			ClientToken: new FormControl<string | null | undefined>(undefined),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			MaxCityNetworksToMonitor: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(500000)]),
			TrafficPercentageToMonitor: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface CreateMonitorPostBodyInternetMeasurementsLogDelivery {
		S3Config?: S3Config;
	}
	export interface CreateMonitorPostBodyInternetMeasurementsLogDeliveryFormProperties {
	}
	export function CreateCreateMonitorPostBodyInternetMeasurementsLogDeliveryFormGroup() {
		return new FormGroup<CreateMonitorPostBodyInternetMeasurementsLogDeliveryFormProperties>({
		});

	}

	export interface CreateMonitorPostBodyHealthEventsConfig {
		AvailabilityScoreThreshold?: number | null;
		PerformanceScoreThreshold?: number | null;
		AvailabilityLocalHealthEventsConfig?: LocalHealthEventsConfig;
		PerformanceLocalHealthEventsConfig?: LocalHealthEventsConfig;
	}
	export interface CreateMonitorPostBodyHealthEventsConfigFormProperties {
		AvailabilityScoreThreshold: FormControl<number | null | undefined>,
		PerformanceScoreThreshold: FormControl<number | null | undefined>,
	}
	export function CreateCreateMonitorPostBodyHealthEventsConfigFormGroup() {
		return new FormGroup<CreateMonitorPostBodyHealthEventsConfigFormProperties>({
			AvailabilityScoreThreshold: new FormControl<number | null | undefined>(undefined),
			PerformanceScoreThreshold: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateMonitorPatchBody {

		/** <p>The resources to include in a monitor, which you provide as a set of Amazon Resource Names (ARNs). Resources can be VPCs, NLBs, Amazon CloudFront distributions, or Amazon WorkSpaces directories.</p> <p>You can add a combination of VPCs and CloudFront distributions, or you can add WorkSpaces directories, or you can add NLBs. You can't add NLBs or WorkSpaces directories together with any other resources.</p> <note> <p>If you add only Amazon Virtual Private Clouds resources, at least one VPC must have an Internet Gateway attached to it, to make sure that it has internet connectivity.</p> </note> */
		ResourcesToAdd?: Array<string>;

		/** The resources to remove from a monitor, which you provide as a set of Amazon Resource Names (ARNs). */
		ResourcesToRemove?: Array<string>;

		/** The status for a monitor. The accepted values for <code>Status</code> with the <code>UpdateMonitor</code> API call are the following: <code>ACTIVE</code> and <code>INACTIVE</code>. The following values are <i>not</i> accepted: <code>PENDING</code>, and <code>ERROR</code>. */
		Status?: MonitorConfigState | null;

		/** A unique, case-sensitive string of up to 64 ASCII characters that you specify to make an idempotent API request. You should not reuse the same client token for other API requests. */
		ClientToken?: string | null;

		/**
		 * The maximum number of city-networks to monitor for your application. A city-network is the location (city) where clients access your application resources from and the ASN or network provider, such as an internet service provider (ISP), that clients access the resources through. Setting this limit can help control billing costs.
		 * Minimum: 1
		 * Maximum: 500000
		 */
		MaxCityNetworksToMonitor?: number | null;

		/** Publish internet measurements to an Amazon S3 bucket in addition to CloudWatch Logs. */
		InternetMeasurementsLogDelivery?: UpdateMonitorPatchBodyInternetMeasurementsLogDelivery;

		/**
		 * <p>The percentage of the internet-facing traffic for your application that you want to monitor with this monitor. If you set a city-networks maximum, that limit overrides the traffic percentage that you set.</p> <p>To learn more, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/IMTrafficPercentage.html">Choosing an application traffic percentage to monitor </a> in the Amazon CloudWatch Internet Monitor section of the <i>CloudWatch User Guide</i>.</p>
		 * Minimum: 1
		 * Maximum: 100
		 */
		TrafficPercentageToMonitor?: number | null;

		/** <p>A complex type with the configuration information that determines the threshold and other conditions for when Internet Monitor creates a health event for an overall performance or availability issue, across an application's geographies.</p> <p>Defines the percentages, for overall performance scores and availability scores for an application, that are the thresholds for when Amazon CloudWatch Internet Monitor creates a health event. You can override the defaults to set a custom threshold for overall performance or availability scores, or both.</p> <p>You can also set thresholds for local health scores,, where Internet Monitor creates a health event when scores cross a threshold for one or more city-networks, in addition to creating an event when an overall score crosses a threshold.</p> <p>If you don't set a health event threshold, the default value is 95%.</p> <p>For local thresholds, you also set a minimum percentage of overall traffic that is impacted by an issue before Internet Monitor creates an event. In addition, you can disable local thresholds, for performance scores, availability scores, or both.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-IM-overview.html#IMUpdateThresholdFromOverview"> Change health event thresholds</a> in the Internet Monitor section of the <i>CloudWatch User Guide</i>.</p> */
		HealthEventsConfig?: UpdateMonitorPatchBodyHealthEventsConfig;
	}
	export interface UpdateMonitorPatchBodyFormProperties {

		/** The status for a monitor. The accepted values for <code>Status</code> with the <code>UpdateMonitor</code> API call are the following: <code>ACTIVE</code> and <code>INACTIVE</code>. The following values are <i>not</i> accepted: <code>PENDING</code>, and <code>ERROR</code>. */
		Status: FormControl<MonitorConfigState | null | undefined>,

		/** A unique, case-sensitive string of up to 64 ASCII characters that you specify to make an idempotent API request. You should not reuse the same client token for other API requests. */
		ClientToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of city-networks to monitor for your application. A city-network is the location (city) where clients access your application resources from and the ASN or network provider, such as an internet service provider (ISP), that clients access the resources through. Setting this limit can help control billing costs.
		 * Minimum: 1
		 * Maximum: 500000
		 */
		MaxCityNetworksToMonitor: FormControl<number | null | undefined>,

		/**
		 * <p>The percentage of the internet-facing traffic for your application that you want to monitor with this monitor. If you set a city-networks maximum, that limit overrides the traffic percentage that you set.</p> <p>To learn more, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/IMTrafficPercentage.html">Choosing an application traffic percentage to monitor </a> in the Amazon CloudWatch Internet Monitor section of the <i>CloudWatch User Guide</i>.</p>
		 * Minimum: 1
		 * Maximum: 100
		 */
		TrafficPercentageToMonitor: FormControl<number | null | undefined>,
	}
	export function CreateUpdateMonitorPatchBodyFormGroup() {
		return new FormGroup<UpdateMonitorPatchBodyFormProperties>({
			Status: new FormControl<MonitorConfigState | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined),
			MaxCityNetworksToMonitor: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(500000)]),
			TrafficPercentageToMonitor: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface UpdateMonitorPatchBodyInternetMeasurementsLogDelivery {
		S3Config?: S3Config;
	}
	export interface UpdateMonitorPatchBodyInternetMeasurementsLogDeliveryFormProperties {
	}
	export function CreateUpdateMonitorPatchBodyInternetMeasurementsLogDeliveryFormGroup() {
		return new FormGroup<UpdateMonitorPatchBodyInternetMeasurementsLogDeliveryFormProperties>({
		});

	}

	export interface UpdateMonitorPatchBodyHealthEventsConfig {
		AvailabilityScoreThreshold?: number | null;
		PerformanceScoreThreshold?: number | null;
		AvailabilityLocalHealthEventsConfig?: LocalHealthEventsConfig;
		PerformanceLocalHealthEventsConfig?: LocalHealthEventsConfig;
	}
	export interface UpdateMonitorPatchBodyHealthEventsConfigFormProperties {
		AvailabilityScoreThreshold: FormControl<number | null | undefined>,
		PerformanceScoreThreshold: FormControl<number | null | undefined>,
	}
	export function CreateUpdateMonitorPatchBodyHealthEventsConfigFormGroup() {
		return new FormGroup<UpdateMonitorPatchBodyHealthEventsConfigFormProperties>({
			AvailabilityScoreThreshold: new FormControl<number | null | undefined>(undefined),
			PerformanceScoreThreshold: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * Tags that you add to a resource. You can add a maximum of 50 tags in Internet Monitor.
		 * Required
		 */
		Tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * Tags that you add to a resource. You can add a maximum of 50 tags in Internet Monitor.
		 * Required
		 */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

}

